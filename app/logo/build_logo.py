#!/usr/bin/env python3
"""Rebuild the handwritten Spark Expedition geometry and outlined wordmarks.

All writes are confined to this script's directory. Requires fontTools;
PNG export uses the installed librsvg + Cairo libraries through ctypes.
"""
from pathlib import Path
import ctypes as ct
import ctypes.util
import math
import re
from html import escape
from fontTools.ttLib import TTCollection, TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parent
AMBER, WHITE, MUTED, VIOLET = '#FFC24D', '#F3F2F7', '#A9A7B6', '#8F7BFF'
ZH_FONT = '/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
EN_FONT = '/usr/share/fonts/truetype/sand-box/google/Inter/Inter-VariableFont_opsz,wght.ttf'


def n(value):
    return f'{value:.2f}'.rstrip('0').rstrip('.') if abs(value) >= .005 else '0'


def tidy(path):
    return re.sub(r'-?\d*\.\d+|-?\d+', lambda m: n(float(m[0])), path)


def svg(name, title, w, h, body, style=''):
    ident = 'sx-' + name.replace('/', '-').replace('.svg', '')
    out = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {n(w)} {n(h)}" '
           f'id="{ident}" role="img" aria-labelledby="{ident}-title">\n'
           f'  <title id="{ident}-title">{escape(title)}</title>\n')
    if style:
        out += f'  <style>{style}</style>\n'
    out += body + '\n</svg>\n'
    target = ROOT / name
    target.parent.mkdir(exist_ok=True)
    target.write_text(out)
    return out


def spark(long=False):
    # Concave cubic flanks, quadratic tip fillets approximately r=1.
    if long:
        return ('M31 18 Q32 16 33 18 C36 27 38 29 47 31 '
                'Q49 32 47 33 C38 36 36 38 33 52 '
                'Q32 54 31 52 C28 38 26 36 17 33 '
                'Q15 32 17 31 C26 29 28 27 31 18Z')
    return ('M31.05 16.7 Q32 14.8 32.95 16.7 '
            'C35.7 26.3 37.7 28.3 47.3 31.05 Q49.2 32 47.3 32.95 '
            'C37.7 35.7 35.7 37.7 32.95 47.3 Q32 49.2 31.05 47.3 '
            'C28.3 37.7 26.3 35.7 16.7 32.95 Q14.8 32 16.7 31.05 '
            'C26.3 28.3 28.3 26.3 31.05 16.7Z')


PLANET_DEG = 315   # 行星停在右上 45°，轨道在它两侧断开


def orbit(planet=False):
    parts = []
    for angle in (0, 90, 180, 270):
        spans = [(12, 78)]
        if planet and angle == 270:
            spans = [(12, 25), (65, 78)]
        for s0, s1 in spans:
            a, b = [math.radians(angle + d) for d in (s0, s1)]
            x1, y1 = 32 + 24*math.cos(a), 32 + 24*math.sin(a)
            x2, y2 = 32 + 24*math.cos(b), 32 + 24*math.sin(b)
            parts.append(f'M{n(x1)} {n(y1)}A24 24 0 0 1 {n(x2)} {n(y2)}')
    return ' '.join(parts)


def mark(color=AMBER):
    # v5.4 精修：A「星火准星」+ 右上轨道上的一颗行星（彩色版为蓝紫，单色版同色）
    a = math.radians(PLANET_DEG)
    px, py = 32 + 24*math.cos(a), 32 + 24*math.sin(a)
    pc = VIOLET if color == AMBER else color
    return (f'  <path d="{orbit(True)}" fill="none" stroke="{color}" stroke-width="5" stroke-linecap="round"/>\n'
            f'  <path d="{spark()}" fill="{color}"/>\n'
            f'  <circle cx="{n(px)}" cy="{n(py)}" r="3.9" fill="{pc}"/>')


def outline(recording, glyphs, transform=(1, 0, 0, 1, 0, 0)):
    p = SVGPathPen(glyphs)
    recording.replay(TransformPen(p, transform))
    return tidy(p.getCommands())


def wordmark(font, text, tracking, color, custom=False):
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    records, x = [], 0
    for ch in text:
        gn = cmap[ord(ch)]
        rec = RecordingPen()
        gs[gn].draw(rec)
        if custom and ch == '火':
            contours = []
            for op, args in rec.value:
                if op == 'moveTo':
                    contours.append([])
                contours[-1].append((op, args))
            # The first two contours are the side dots; preserve the main body.
            assert len(contours) == 3, 'Review source glyph contours before customising'
            main = RecordingPen()
            main.value = contours[2]
            records.append((main, x, color))
            for cx, cy in ((188, 485), (808, 485)):
                r = RecordingPen()
                r.moveTo((cx, cy+133))
                r.lineTo((cx+68, cy))
                r.lineTo((cx, cy-133))
                r.lineTo((cx-68, cy))
                r.closePath()
                records.append((r, x, AMBER))
        else:
            records.append((rec, x, color))
        x += font['hmtx'][gn][0] + tracking * font['head'].unitsPerEm
    bounds = []
    for rec, offset, _ in records:
        p = BoundsPen(gs)
        rec.replay(TransformPen(p, (1, 0, 0, 1, offset, 0)))
        if p.bounds:
            bounds.append(p.bounds)
    xmin = min(b[0] for b in bounds)
    ymin = min(b[1] for b in bounds)
    xmax = max(b[2] for b in bounds)
    ymax = max(b[3] for b in bounds)
    # Normalize outlines to an exact visible height of 100 units; no font em padding.
    s = 100/(ymax-ymin)
    body = []
    mono = []
    for rec, offset, fill in records:
        d = outline(rec, gs, (s, 0, 0, -s, (offset-xmin)*s, ymax*s))
        if d:
            body.append(f'  <path fill="{fill}" d="{d}"/>')
            mono.append(f'  <path fill="currentColor" d="{d}"/>')
    return (xmax-xmin)*s, '\n'.join(body), '\n'.join(mono)


def place(body, x, y, scale):
    # Bake transforms into glyph outlines to retain two-decimal precision and exact sizes.
    from fontTools.svgLib.path import parse_path
    def convert(match):
        pen = SVGPathPen(None)
        parse_path(match[1], TransformPen(pen, (scale, 0, 0, scale, x, y)))
        return f'd="{tidy(pen.getCommands())}"'
    return re.sub(r'd="([^"]*)"', convert, body)


def render(source, target, width):
    """librsvg's modern document API; transparent RGBA surface."""
    rsvg = ct.CDLL(ctypes.util.find_library('rsvg-2'))
    cairo = ct.CDLL(ctypes.util.find_library('cairo'))
    gobj = ct.CDLL(ctypes.util.find_library('gobject-2.0'))
    rsvg.rsvg_handle_new_from_data.argtypes = [ct.c_char_p, ct.c_size_t, ct.c_void_p]
    rsvg.rsvg_handle_new_from_data.restype = ct.c_void_p
    rsvg.rsvg_handle_render_document.argtypes = [ct.c_void_p, ct.c_void_p, ct.c_void_p, ct.c_void_p]
    rsvg.rsvg_handle_render_document.restype = ct.c_int
    cairo.cairo_image_surface_create.argtypes = [ct.c_int, ct.c_int, ct.c_int]
    cairo.cairo_image_surface_create.restype = ct.c_void_p
    cairo.cairo_create.argtypes = [ct.c_void_p]
    cairo.cairo_create.restype = ct.c_void_p
    cairo.cairo_surface_write_to_png.argtypes = [ct.c_void_p, ct.c_char_p]
    cairo.cairo_surface_write_to_png.restype = ct.c_int
    cairo.cairo_destroy.argtypes = [ct.c_void_p]
    cairo.cairo_surface_destroy.argtypes = [ct.c_void_p]
    gobj.g_object_unref.argtypes = [ct.c_void_p]
    class Rect(ct.Structure):
        _fields_ = [(key, ct.c_double) for key in ('x', 'y', 'width', 'height')]
    data = source.encode()
    vb = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', source)
    height = round(width*float(vb[2])/float(vb[1]))
    handle = rsvg.rsvg_handle_new_from_data(data, len(data), None)
    if not handle:
        raise RuntimeError('librsvg could not parse SVG')
    surface = cairo.cairo_image_surface_create(0, width, height)
    context = cairo.cairo_create(surface)
    ok = rsvg.rsvg_handle_render_document(handle, context, ct.byref(Rect(0, 0, width, height)), None)
    status = cairo.cairo_surface_write_to_png(surface, str(ROOT/target).encode())
    cairo.cairo_destroy(context)
    cairo.cairo_surface_destroy(surface)
    gobj.g_object_unref(handle)
    if not ok or status:
        raise RuntimeError('PNG rendering failed')


def main():
    a = svg('drafts/dir-a.svg', 'A · 星火准星 / Spark reticle', 64, 64,
            f'  <path d="{orbit()}" fill="none" stroke="{AMBER}" stroke-width="5" stroke-linecap="round"/>\n  <path d="{spark()}" fill="{AMBER}"/>')
    b = svg('drafts/dir-b.svg', 'B · 轨道火种 / Orbital ember', 64, 64,
        f'  <ellipse cx="32" cy="34" rx="25" ry="16" transform="rotate(-20 32 34)" fill="none" stroke="{AMBER}" stroke-width="4"/>\n'
        f'  <path d="M48 7C49 15 57 16 56 23C55 30 46 32 41 27C35 21 41 15 48 7Z" fill="{AMBER}"/>\n'
        f'  <circle cx="32" cy="34" r="3" fill="{VIOLET}"/>\n'
        f'  <path d="M32 5V10M32 56V61" fill="none" stroke="{AMBER}" stroke-width="4" stroke-linecap="round"/>')
    c = svg('drafts/dir-c.svg', 'C · 瞄准星芒 / Framed rising spark', 64, 64,
        f'  <path d="M8 22V8H22M42 56H56V42" fill="none" stroke="{AMBER}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>\n'
        f'  <path d="{spark(True)}" fill="{AMBER}"/>\n'
        f'  <circle cx="48" cy="16" r="3" fill="{VIOLET}"/>')
    final = svg('logo-mark.svg', '星火远征 / Spark Expedition — mark', 64, 64, mark())
    col = TTCollection(ZH_FONT)
    zh = next(f for f in col.fonts if f['name'].getDebugName(1) == 'Noto Sans CJK SC')
    en = instantiateVariableFont(TTFont(EN_FONT), {'wght':600, 'opsz':14}, inplace=True)
    zw, zb, zm = wordmark(zh, '星火远征', .04, WHITE, custom=True)
    ew, eb, em = wordmark(en, 'SPARK EXPEDITION', .18, MUTED)
    svg('wordmark-zh.svg', '星火远征', zw, 100, zb)
    svg('wordmark-en.svg', 'SPARK EXPEDITION', ew, 100, eb)
    # H=64: text heights 32 and 10.24; gap=6.4; total 48.64, centered.
    x, top = 85.12, 7.68
    full_w = x + max(zw*.32, ew*.1024)
    full_body = mark()+'\n'+place(zb, x, top, .32)+'\n'+place(eb, x, 46.08, .1024)
    full = svg('logo-full.svg', '星火远征 / Spark Expedition — bilingual lockup', full_w, 64, full_body)
    svg('logo-full-zh.svg', '星火远征 — 中文组合', x+zw*.32, 64, mark()+'\n'+place(zb, x, 16, .32))
    mono = svg('logo-mono.svg', '星火远征 / Spark Expedition — monochrome lockup', full_w, 64,
               mark('currentColor')+'\n'+place(zm, x, top, .32)+'\n'+place(em, x, 46.08, .1024),
               '#sx-logo-mono{color:#F3F2F7;fill:currentColor}')
    mono_mark = svg('logo-mono-mark.svg', '星火远征 — monochrome mark', 64, 64, mark('currentColor'),
                    '#sx-logo-mono-mark{color:#F3F2F7;fill:currentColor}')
    for source, target, width in ((final, 'logo-mark-512.png', 512),
                                  (full, 'logo-full-512.png', 512),
                                  (full, 'logo-full-1024.png', 1024),
                                  (mono_mark, 'logo-mono-512.png', 512),
                                  (mono, 'logo-mono-full-512.png', 512)):
        render(source, target, width)
    # Contact sheet without text elements: labels and text live in the HTML review page.
    from PIL import Image
    sheet = Image.new('RGBA', (960, 480), '#08070C')
    for i, source in enumerate((a, b, c)):
        for size, yy in ((128, 28), (24, 210), (16, 360)):
            target = f'drafts/check-{i}-{size}.png'
            render(source, target, size)
            im = Image.open(ROOT/target)
            # Native-size icon alongside a nearest-neighbor enlargement for pixel review.
            xx = 80+i*300
            sheet.alpha_composite(im, (xx, yy))
            if size < 30:
                sheet.alpha_composite(im.resize((size*4, size*4), Image.Resampling.NEAREST), (xx+72, yy))
            (ROOT/target).unlink()
    sheet.save(ROOT/'drafts/size-review.png')
    print(f'Built 3 directions + final assets. Full viewBox: {full_w:.2f} × 64; ZH: {zw:.2f} × 100; EN: {ew:.2f} × 100.')


if __name__ == '__main__':
    main()

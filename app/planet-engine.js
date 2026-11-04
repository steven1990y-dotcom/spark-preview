/* SparkPlanet v7.4 — 与 v5 静态模板同一套光照/边缘光/辉光公式，在 canvas 上做真实自转。
   用法：SparkPlanet.load(key, texURL).then(()=>SparkPlanet.mount(canvasBody, canvasGlow, key, {cssSize, dpr}))
   返回 {draw(rotRad)}；动画调度由宿主页统一负责（低端机/减弱动效只画一帧）。 */
(function(g){
 const L=(()=>{const v=[-0.55,-0.62,0.56],n=Math.hypot(...v);return v.map(x=>x/n)})();
 const AMB=.06,RIM_P=2.6,GLOW_W=26/352,TILT=18*Math.PI/180,RR=352/1024;
 const T={ember:{atmo:[255,122,64],glow:.95,mode:'emit',spec:.12},frost:{atmo:[214,226,230],glow:.85,mode:'none',spec:.32},
          jade:{atmo:[96,224,160],glow:.9,mode:'spec',spec:.5},void:{atmo:[196,140,214],glow:.9,mode:'none',spec:.1}};
 const tex={};
 function load(key,url){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>{
  const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const x=c.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(im,0,0);
  const d=x.getImageData(0,0,im.width,im.height).data;
  // Material masks from the new albedo palette, at every native texel.
  // Avoid a second copy of the same crack/coast network in the single-file build.
  const aux=(key==='ember'||key==='jade')?new Uint8Array(im.width*im.height):null;
  if(aux)for(let i=0;i<aux.length;i++){const t=i*4,a=key==='ember'?(d[t]/255-.24)/.70:(d[t+2]/Math.max(1,d[t+1])-.66)/.22;aux[i]=Math.round(Math.max(0,Math.min(1,a))*255);}
  tex[key]={w:im.width,h:im.height,d,aux};res();};im.onerror=rej;im.src=url;
 });}
 function mount(cv,glowCv,key,o){
  const P=T[key],tx=tex[key],S=Math.max(32,Math.round(o.cssSize*Math.min(3,o.dpr||1))),R=S*RR,C=S/2;
  cv.width=cv.height=S;const ctx=cv.getContext('2d'),img=ctx.createImageData(S,S),out=img.data;
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  const H=[L[0],L[1],L[2]+1],hn=Math.hypot(...H);H[0]/=hn;H[1]/=hn;H[2]/=hn;
  const idx=[],u0=[],vv=[],sh=[],sp=[],fr=[],li=[],di=[],cov=[];
  const ct=Math.cos(TILT),st=Math.sin(TILT),atmo=P.atmo.map(c=>c/255);
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){const dx=(x+.5-C)/R,dy=(y+.5-C)/R,r=Math.hypot(dx,dy);if(r>=1+1.2/R)continue;
   const rc=Math.min(r,.99999),nz=Math.sqrt(1-rc*rc),nx=r>=1?dx/r*.99999:dx,ny=r>=1?dy/r*.99999:dy;
   const px2=st*ny+ct*nx,py2=ct*ny-st*nx,pz=nz;
   idx.push((y*S+x)*4);u0.push((Math.atan2(px2,pz)+Math.PI)/(2*Math.PI)*tx.w-.5);vv.push(Math.min(tx.h-1,Math.max(0,(Math.PI/2+Math.asin(Math.max(-1,Math.min(1,py2))))/Math.PI*tx.h-.5)));
   const nl=nx*L[0]+ny*L[1]+nz*L[2],d=Math.pow(Math.min(1,Math.max(0,(nl+.08)/1.08)),1.25);
   sh.push(AMB+(1-AMB)*d);di.push(d);sp.push(Math.pow(Math.max(0,nx*H[0]+ny*H[1]+nz*H[2]),40)*.55);
   fr.push(Math.pow(1-nz,RIM_P));li.push(Math.pow(Math.min(1,Math.max(0,nl*.9+.35)),1.4));cov.push(Math.min(1,Math.max(0,(1-r)*R/1.2+.5)));}
  const N=idx.length,U0=Float32Array.from(u0),V=Float32Array.from(vv),SH=Float32Array.from(sh),SP=Float32Array.from(sp),FR=Float32Array.from(fr),LI=Float32Array.from(li),DI=Float32Array.from(di),CV=Float32Array.from(cov),ID=Int32Array.from(idx);
  // 辉光层（静态，单独 canvas，宿主用 CSS 做呼吸透明度）
  if(glowCv){glowCv.width=glowCv.height=S;const gx=glowCv.getContext('2d'),gi=gx.createImageData(S,S),gd=gi.data;gx.imageSmoothingEnabled=true;gx.imageSmoothingQuality='high';
   for(let y=0;y<S;y++)for(let x=0;x<S;x++){const dx=(x+.5-C)/R,dy=(y+.5-C)/R,r=Math.hypot(dx,dy);if(r<1-1/R)continue;
    const dd=Math.max(0,r-1)/GLOW_W,ang=(dx*L[0]+dy*L[1])/Math.max(r,1e-6),gl=Math.exp(-dd)*(.22+.5*Math.min(1,Math.max(0,ang*.9+.3)))*P.glow,a=Math.min(1,gl),k=(y*S+x)*4;
    gd[k]=P.atmo[0];gd[k+1]=P.atmo[1];gd[k+2]=P.atmo[2];gd[k+3]=a*255;}
   gx.putImageData(gi,0,0);}
  const td=tx.d,tw=tx.w,ad=tx.aux;
  // Bilinear texel-centre sampling: both neighbours wrap across u=0/1.
  // Full decoded image dimensions are retained, including the low-device variant.
  const V0=Int32Array.from(V,v=>Math.floor(v)),V1=Int32Array.from(V,v=>Math.min(tx.h-1,Math.floor(v)+1)),VF=Float32Array.from(V,v=>v-Math.floor(v));
  function draw(rot){const off=((rot/(2*Math.PI))*tw)%tw;
   for(let i=0;i<N;i++){let u=(U0[i]+off)%tw;if(u<0)u+=tw;const ux=Math.floor(u),fx=u-ux,nx=(ux+1)%tw,fy=VF[i],t=(V0[i]*tw+ux)*4,t1=(V0[i]*tw+nx)*4,b0=(V1[i]*tw+ux)*4,b1=(V1[i]*tw+nx)*4;
    const w0=(1-fx)*(1-fy),w1=fx*(1-fy),w2=(1-fx)*fy,w3=fx*fy;
    const cr=(td[t]*w0+td[t1]*w1+td[b0]*w2+td[b1]*w3)/255,cg=(td[t+1]*w0+td[t1+1]*w1+td[b0+1]*w2+td[b1+1]*w3)/255,cb=(td[t+2]*w0+td[t1+2]*w1+td[b0+2]*w2+td[b1+2]*w3)/255,a=ad?(ad[t/4]*w0+ad[t1/4]*w1+ad[b0/4]*w2+ad[b1/4]*w3)/255:1;
    const specK=P.mode==='spec'?a*P.spec:P.spec,emit=P.mode==='emit'?a*.7:0,s=SH[i]*1.08,spv=SP[i]*specK,ek=emit*(.35+.65*(1-DI[i]))*.85,f=FR[i]*.5*LI[i],fa=FR[i]*(.1+.85*LI[i])*P.glow;
    let r=cr*s+spv+ek*cr,gg=cg*s+spv+ek*cg,b=cb*s+spv+ek*cb;r=r*(1-f)+atmo[0]*fa;gg=gg*(1-f)+atmo[1]*fa;b=b*(1-f)+atmo[2]*fa;
    const k=ID[i];out[k]=Math.min(255,r*255);out[k+1]=Math.min(255,gg*255);out[k+2]=Math.min(255,b*255);out[k+3]=CV[i]*255;}
   ctx.putImageData(img,0,0);}
  return {draw,size:S,pixels:N};}
 g.SparkPlanet={load,mount,TYPES:T};
})(window);

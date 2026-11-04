import{_ as e,b as t,g as n,h as r,o as i,p as a,v as o}from"./wui-text-D1Hbg0kq.js";import{C as s,D as c,H as l,U as u,V as d,_ as f,l as p,r as m,t as h,v as g,x as _,y as v,z as y}from"./ApiController-vVpnERuw.js";import{t as b}from"./wui-loading-thumbnail-CF7hpIQl.js";import{t as x}from"./AlertController-CT1biWU4.js";import{n as S,r as C,t as w}from"./wui-list-social-BMPVw5OF.js";import"./wui-icon-box-Dnv9baKC.js";import{t as T}from"./ConstantsUtil-C1qdKpER.js";import{t as E}from"./SIWXUtil-bJVYJgm5.js";import"./wui-button-BvAuYcfr.js";import"./wui-icon-67FQWD0-.js";import"./wui-qr-code-D2yNxbBb.js";import"./wui-shimmer-DNpChO2P.js";var D=a`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends o{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=f.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.remoteFeatures=y.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=h.state.plan.hasExceededUsageLimit,this.unsubscribe.push(f.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),y.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],n=!!this.authConnector,r=e?.length,i=s.state.view===`ConnectSocials`;return(!n||!r)&&!i?null:(i&&!r&&(e=u.DEFAULT_SOCIALS),t` <wui-flex flexDirection="column" gap="2">
      ${e.map(e=>t`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){this.hasExceededUsageLimit?s.push(`UsageExceeded`):e&&await S(e)}async handlePwaFrameLoad(){if(d.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof C&&await this.authConnector.provider.init()}catch(e){x.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}};k.styles=D,O([e()],k.prototype,`tabIdx`,void 0),O([n()],k.prototype,`connectors`,void 0),O([n()],k.prototype,`authConnector`,void 0),O([n()],k.prototype,`remoteFeatures`,void 0),O([n()],k.prototype,`isPwaLoading`,void 0),O([n()],k.prototype,`hasExceededUsageLimit`,void 0),k=O([i(`w3m-social-login-list`)],k);var A=a`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends o{constructor(){super(),this.unsubscribe=[],this.checked=b.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:n}=y.state,i=y.state.features?.legalCheckbox,a=!!(e||n)&&!!i&&!this.checked,o=a?-1:void 0;return t`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="01"
        class=${r(a?`disabled`:void 0)}
      >
        <w3m-social-login-list tabIdx=${r(o)}></w3m-social-login-list>
      </wui-flex>
    `}};M.styles=A,j([n()],M.prototype,`checked`,void 0),M=j([i(`w3m-connect-socials-view`)],M);var N=a`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e[`ease-out-power-2`]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e[`ease-out-power-2`]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends o{constructor(){super(),this.unsubscribe=[],this.socialProvider=m.getAccountData()?.socialProvider,this.socialWindow=m.getAccountData()?.socialWindow,this.error=!1,this.connecting=!1,this.message=`Connect in the provider window`,this.remoteFeatures=y.state.remoteFeatures,this.address=m.getAccountData()?.address,this.connectionsByNamespace=p.getConnections(m.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=f.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri){if(e.origin===T.SECURE_SITE_ORIGIN){window.removeEventListener(`message`,this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;let t=this.parseURLError(e.data.resultUri);if(t){this.handleSocialError(t);return}this.closeSocialWindow(),this.updateMessage();let n=e.data.resultUri;this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}}),await p.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:n},this.authConnector.chain),this.socialProvider&&(l.setConnectedSocialProvider(this.socialProvider),_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:d.parseError(e)}})}}else s.goBack(),c.showError(`Untrusted Origin`),this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:`Untrusted Origin`}})}},w.EmbeddedWalletAbortController.signal.addEventListener(`abort`,()=>{this.closeSocialWindow()}),this.unsubscribe.push(m.subscribeChainProp(`accountState`,e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){let t=this.remoteFeatures?.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&t?(s.replace(`ProfileWallets`),c.showSuccess(`New Wallet Added`),this.address=e.address):(v.state.open||y.state.enableEmbedded)&&v.close())}}),y.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener(`message`,this.handleSocialConnection,!1),!m.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return t`
      <wui-flex
        data-error=${r(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${r(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??`Social`}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?`error`:`secondary`}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=g.state.themeVariables[`--w3m-border-radius-master`],n=e?parseInt(e.replace(`px`,``),10):4;return t`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}parseURLError(e){try{let t=e.indexOf(`error=`);return t===-1?null:e.substring(t+6)}catch{return null}}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(!this.connecting&&s.state.view===`ConnectingSocial`&&s.goBack(),clearInterval(e))},1e3);window.addEventListener(`message`,this.handleSocialConnection,!1)}updateMessage(){this.message=this.error?`Something went wrong`:this.connecting?`Retrieving user data`:`Connect in the provider window`}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),m.setAccountProp(`socialWindow`,void 0,m.state.activeChain))}};F.styles=N,P([n()],F.prototype,`socialProvider`,void 0),P([n()],F.prototype,`socialWindow`,void 0),P([n()],F.prototype,`error`,void 0),P([n()],F.prototype,`connecting`,void 0),P([n()],F.prototype,`message`,void 0),P([n()],F.prototype,`remoteFeatures`,void 0),F=P([i(`w3m-connecting-social-view`)],F);var I=a`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=class extends o{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=m.getAccountData()?.socialProvider,this.uri=m.getAccountData()?.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=y.state.remoteFeatures,this.authConnector=f.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(m.subscribeChainProp(`accountState`,e=>{this.socialProvider=e?.socialProvider,this.uri=e?.farcasterUrl,this.connectFarcaster()}),y.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e})),window.addEventListener(`resize`,this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener(`resize`,this.forceUpdate),!m.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_CANCELED`,properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),t`${this.platformTemplate()}`}platformTemplate(){return d.isMobile()?t`${this.mobileTemplate()}`:t`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?t`${this.loadingTemplate()}`:t`${this.qrTemplate()}`}qrTemplate(){return t` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`0`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return t`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`5`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return t` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${[`10`,`5`,`5`,`5`]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=g.state.themeVariables[`--w3m-border-radius-master`],n=e?parseInt(e.replace(`px`,``),10):4;return t`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(l.setConnectedSocialProvider(this.socialProvider),_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_REQUEST_USER_DATA`,properties:{provider:this.socialProvider}})),this.loading=!0;let e=p.getConnections(this.authConnector.chain).length>0;await p.connectExternal(this.authConnector,this.authConnector.chain);let t=this.remoteFeatures?.multiWallet;this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_SUCCESS`,properties:{provider:this.socialProvider}}),this.loading=!1,(!y.state.siwx||await E.isAuthenticated())&&(e&&t?(s.replace(`ProfileWallets`),c.showSuccess(`New Wallet Added`)):v.close())}catch(e){this.socialProvider&&_.sendEvent({type:`track`,event:`SOCIAL_LOGIN_ERROR`,properties:{provider:this.socialProvider,message:d.parseError(e)}}),s.goBack(),c.showError(e)}}mobileLinkTemplate(){return t`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&d.openHref(this.uri,`_blank`)}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,n=g.state.themeVariables[`--apkt-qr-color`]??g.state.themeVariables[`--w3m-qr-color`];return t` <wui-qr-code
      size=${e}
      theme=${g.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${r(n)}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return t`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(d.copyToClopboard(this.uri),c.showSuccess(`Link copied`))}catch{c.showError(`Failed to copy`)}}};R.styles=I,L([n()],R.prototype,`socialProvider`,void 0),L([n()],R.prototype,`uri`,void 0),L([n()],R.prototype,`ready`,void 0),L([n()],R.prototype,`loading`,void 0),L([n()],R.prototype,`remoteFeatures`,void 0),R=L([i(`w3m-connecting-farcaster-view`)],R);export{M as W3mConnectSocialsView,R as W3mConnectingFarcasterView,F as W3mConnectingSocialView};
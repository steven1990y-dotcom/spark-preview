import{_ as e,b as t,g as n,h as r,o as i,p as a,v as o}from"./wui-text-D1Hbg0kq.js";import{C as s,D as c,F as l,I as u,P as d,V as f,h as p,l as m,r as h,v as g,x as _,y as v,z as y}from"./ApiController-vVpnERuw.js";import{t as b}from"./OnRampController-U6-mj38t.js";import{t as x}from"./wui-loading-thumbnail-CF7hpIQl.js";import"./wui-list-item-D8z0VEZG.js";import"./wui-icon-67FQWD0-.js";import"./wui-image-DAhkFtxg.js";import"./wui-loading-spinner-5dONcmGG.js";import"./wui-visual-sSeV8SG_.js";import"./w3m-onramp-providers-footer-C6E3ruOj.js";import"./wui-button-BvAuYcfr.js";import"./wui-icon-box-Dnv9baKC.js";import"./wui-link-Dk64ecKH.js";import"./wui-input-text-CnJqvAuX.js";var S=a`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,C=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},w=class extends o{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=b.state.paymentCurrency,this.currencies=b.state.paymentCurrencies,this.currencyImages=u.state.currencyImages,this.checked=x.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),u.subscribeKey(`currencyImages`,e=>this.currencyImages=e),x.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:n}=y.state,i=y.state.features?.legalCheckbox,a=!!(e||n)&&!!i&&!this.checked;return t`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        class=${r(a?`disabled`:void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
    `}currenciesTemplate(e=!1){return this.currencies.map(n=>t`
        <wui-list-item
          imageSrc=${r(this.currencyImages?.[n.id])}
          @click=${()=>this.selectCurrency(n)}
          variant="image"
          tabIdx=${r(e?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${n.id}</wui-text>
        </wui-list-item>
      `)}selectCurrency(e){e&&(b.setPaymentCurrency(e),v.close())}};w.styles=S,C([n()],w.prototype,`selectedCurrency`,void 0),C([n()],w.prototype,`currencies`,void 0),C([n()],w.prototype,`currencyImages`,void 0),C([n()],w.prototype,`checked`,void 0),w=C([i(`w3m-onramp-fiat-select-view`)],w);var T=a`
  button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    border: none;
    outline: none;
    background-color: ${({tokens:e})=>e.core.glass010};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${({spacing:e})=>e[3]};
    transition: background-color ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .provider-image {
    width: ${({spacing:e})=>e[10]};
    min-width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
    border-radius: calc(
      ${({borderRadius:e})=>e[4]} - calc(${({spacing:e})=>e[3]} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${({spacing:e})=>e[3]};
    height: ${({spacing:e})=>e[3]};
    border-radius: calc(${({spacing:e})=>e[3]} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${({tokens:e})=>e.theme.foregroundPrimary},
      0 0 0 3px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${({tokens:e})=>e.core.glass010},
      0 0 0 3px ${({tokens:e})=>e.theme.backgroundPrimary};
  }
`,E=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},D=class extends o{constructor(){super(...arguments),this.disabled=!1,this.color=`inherit`,this.label=``,this.feeRange=``,this.loading=!1,this.onClick=null}render(){return t`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${r(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?t`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:t`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){let e=h.getAllRequestedCaipNetworks()?.filter(e=>e?.assets?.imageId)?.slice(0,5);return t`
      <wui-flex class="networks">
        ${e?.map(e=>t`
            <wui-flex class="network-icon">
              <wui-image src=${r(l.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};D.styles=[T],E([e({type:Boolean})],D.prototype,`disabled`,void 0),E([e()],D.prototype,`color`,void 0),E([e()],D.prototype,`name`,void 0),E([e()],D.prototype,`label`,void 0),E([e()],D.prototype,`feeRange`,void 0),E([e({type:Boolean})],D.prototype,`loading`,void 0),E([e()],D.prototype,`onClick`,void 0),D=E([i(`w3m-onramp-provider-item`)],D);var O=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},k=class extends o{constructor(){super(),this.unsubscribe=[],this.providers=b.state.providers,this.unsubscribe.push(b.subscribeKey(`providers`,e=>{this.providers=e}))}render(){return t`
      <wui-flex flexDirection="column" .padding=${[`0`,`3`,`3`,`3`]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(h.state.activeChain??`eip155`)).map(e=>t`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){b.setSelectedProvider(e),s.push(`BuyInProgress`),f.openHref(b.state.selectedProvider?.url||e.url,`popupWindow`,`width=600,height=800,scrollbars=yes`),_.sendEvent({type:`track`,event:`SELECT_BUY_PROVIDER`,properties:{provider:e.name,isSmartAccount:p(h.state.activeChain)===d.ACCOUNT_TYPES.SMART_ACCOUNT}})}};O([n()],k.prototype,`providers`,void 0),k=O([i(`w3m-onramp-providers-view`)],k);var A=a`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends o{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=b.state.purchaseCurrencies,this.tokens=b.state.purchaseCurrencies,this.tokenImages=u.state.tokenImages,this.checked=x.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),u.subscribeKey(`tokenImages`,e=>this.tokenImages=e),x.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:n}=y.state,i=y.state.features?.legalCheckbox,a=!!(e||n)&&!!i&&!this.checked;return t`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        class=${r(a?`disabled`:void 0)}
      >
        ${this.currenciesTemplate(a)}
      </wui-flex>
    `}currenciesTemplate(e=!1){return this.tokens.map(n=>t`
        <wui-list-item
          imageSrc=${r(this.tokenImages?.[n.symbol])}
          @click=${()=>this.selectToken(n)}
          variant="image"
          tabIdx=${r(e?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${n.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${n.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `)}selectToken(e){e&&(b.setPurchaseCurrency(e),v.close())}};M.styles=A,j([n()],M.prototype,`selectedCurrency`,void 0),j([n()],M.prototype,`tokens`,void 0),j([n()],M.prototype,`tokenImages`,void 0),j([n()],M.prototype,`checked`,void 0),M=j([i(`w3m-onramp-token-select-view`)],M);var N=a`
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

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e[`01`]} ${({spacing:e})=>e[2]};
  }
`,P=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},F=class extends o{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=b.state.selectedProvider,this.uri=m.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(b.subscribeKey(`selectedProvider`,e=>{this.selectedOnRampProvider=e}))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e=`Continue in external window`;this.error?e=`Buy failed`:this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);let n=this.error?`Buy can be declined from your side or due to and error on the provider app`:`We’ll notify you once your Buy is processed`;return t`
      <wui-flex
        data-error=${r(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${r(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`4`,`0`,`0`,`0`]}
        >
          <wui-text variant="md-medium" color=${this.error?`error`:`primary`}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${n}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${[`0`,`5`,`5`,`5`]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,f.openHref(this.selectedOnRampProvider.url,`popupWindow`,`width=600,height=800,scrollbars=yes`))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?t`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){let e=g.state.themeVariables[`--w3m-border-radius-master`],n=e?parseInt(e.replace(`px`,``),10):4;return t`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)c.showError(`No link found`),s.goBack();else try{f.copyToClopboard(this.selectedOnRampProvider.url),c.showSuccess(`Link copied`)}catch{c.showError(`Failed to copy`)}}};F.styles=N,P([n()],F.prototype,`intervalId`,void 0),P([n()],F.prototype,`selectedOnRampProvider`,void 0),P([n()],F.prototype,`uri`,void 0),P([n()],F.prototype,`ready`,void 0),P([n()],F.prototype,`showRetry`,void 0),P([n()],F.prototype,`buffering`,void 0),P([n()],F.prototype,`error`,void 0),P([e({type:Boolean})],F.prototype,`isMobile`,void 0),P([e()],F.prototype,`onRetry`,void 0),F=P([i(`w3m-buy-in-progress-view`)],F);var I=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends o{render(){return t`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`10`,`5`,`10`]}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${s.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};L=I([i(`w3m-what-is-a-buy-view`)],L);var R=a`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[2]};
    height: 40px;
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    min-width: 95px;
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid ${({tokens:e})=>e.theme.foregroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`,z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=class extends o{constructor(){super(),this.unsubscribe=[],this.type=`Token`,this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=u.state.currencyImages,this.tokenImages=u.state.tokenImages,this.unsubscribe.push(b.subscribeKey(`purchaseCurrency`,e=>{e&&this.type!==`Fiat`&&(this.selectedCurrency=this.formatPurchaseCurrency(e))}),b.subscribeKey(`paymentCurrency`,e=>{e&&this.type!==`Token`&&(this.selectedCurrency=this.formatPaymentCurrency(e))}),b.subscribe(e=>{this.currencies=this.type===`Fiat`?e.purchaseCurrencies.map(this.formatPurchaseCurrency):e.paymentCurrencies.map(this.formatPaymentCurrency)}),u.subscribe(e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}}))}firstUpdated(){b.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.selectedCurrency?.symbol||``,n=this.currencyImages[e]||this.tokenImages[e];return t`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?t` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>v.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${r(n)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:t`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};B.styles=R,z([e({type:String})],B.prototype,`type`,void 0),z([e({type:Number})],B.prototype,`value`,void 0),z([n()],B.prototype,`currencies`,void 0),z([n()],B.prototype,`selectedCurrency`,void 0),z([n()],B.prototype,`currencyImages`,void 0),z([n()],B.prototype,`tokenImages`,void 0),B=z([i(`w3m-onramp-input`)],B);var V=a`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${({borderRadius:e})=>e[8]};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`,H=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},U={USD:`$`,EUR:`€`,GBP:`£`},W=[100,250,500,1e3],G=class extends o{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=h.state.activeCaipAddress,this.loading=v.state.loading,this.paymentCurrency=b.state.paymentCurrency,this.paymentAmount=b.state.paymentAmount,this.purchaseAmount=b.state.purchaseAmount,this.quoteLoading=b.state.quotesLoading,this.unsubscribe.push(h.subscribeKey(`activeCaipAddress`,e=>this.caipAddress=e),v.subscribeKey(`loading`,e=>{this.loading=e}),b.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${W.map(e=>t`<wui-button
                  variant=${this.paymentAmount===e?`accent-secondary`:`neutral-secondary`}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${U[this.paymentCurrency?.id||`USD`]} ${e}`}</wui-button
                >`)}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?t`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:t`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||v.open({view:`OnRampProviders`})}openModal(){v.open({view:`Connect`})}async onPaymentAmountChange(e){b.setPaymentAmount(Number(e.detail)),await b.getQuote()}async selectPresetAmount(e){b.setPaymentAmount(e),await b.getQuote()}};G.styles=V,H([e({type:Boolean})],G.prototype,`disabled`,void 0),H([n()],G.prototype,`caipAddress`,void 0),H([n()],G.prototype,`loading`,void 0),H([n()],G.prototype,`paymentCurrency`,void 0),H([n()],G.prototype,`paymentAmount`,void 0),H([n()],G.prototype,`purchaseAmount`,void 0),H([n()],G.prototype,`quoteLoading`,void 0),G=H([i(`w3m-onramp-widget`)],G);export{F as W3mBuyInProgressView,k as W3mOnRampProvidersView,w as W3mOnrampFiatSelectView,M as W3mOnrampTokensView,G as W3mOnrampWidget,L as W3mWhatIsABuyView};
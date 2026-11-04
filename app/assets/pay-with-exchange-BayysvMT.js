import{_ as e,b as t,c as n,g as r,h as i,o as a,p as o,u as s,v as c}from"./wui-text-D1Hbg0kq.js";import{C as l,D as u,F as d,V as f,l as p,r as m}from"./ApiController-vVpnERuw.js";import{t as h}from"./ExchangeController-BM-c1hcx.js";import"./wui-image-Ba4IIpzH.js";import"./wui-icon-link-FSX1Fo7I.js";import"./wui-image-DAhkFtxg.js";import"./wui-list-item-D8z0VEZG.js";import"./wui-shimmer-DNpChO2P.js";import"./wui-button-BvAuYcfr.js";import"./wui-input-amount-irtGlKZS.js";import"./wui-link-Dk64ecKH.js";import"./wui-icon-67FQWD0-.js";import"./wui-icon-box-Dnv9baKC.js";import"./wui-input-text-CnJqvAuX.js";import"./wui-list-token-CQHcED8g.js";import"./wui-separator-C1AYzg2v.js";var g=o`
  button {
    border: none;
    border-radius: ${({borderRadius:e})=>e[20]};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-type='neutral'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[3]};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.core.foregroundAccent060};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    opacity: 0.5;
  }
`,_=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},v={sm:`sm-regular`,md:`md-regular`,lg:`lg-regular`},y=class extends c{constructor(){super(...arguments),this.type=`accent`,this.size=`md`,this.imageSrc=``,this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=``}render(){return t`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?t`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?t`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${v[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?t`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};y.styles=[s,n,g],_([e()],y.prototype,`type`,void 0),_([e()],y.prototype,`size`,void 0),_([e()],y.prototype,`imageSrc`,void 0),_([e({type:Boolean})],y.prototype,`disabled`,void 0),_([e()],y.prototype,`leftIcon`,void 0),_([e()],y.prototype,`rightIcon`,void 0),_([e()],y.prototype,`text`,void 0),y=_([a(`wui-chip-button`)],y);var b=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},x=class extends c{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return t`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${i(this.maxDecimals)}
          .maxIntegers=${i(this.maxIntegers)}
          .value=${this.amount?String(this.amount):``}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};b([e({type:Number})],x.prototype,`amount`,void 0),b([e({type:Number})],x.prototype,`maxDecimals`,void 0),b([e({type:Number})],x.prototype,`maxIntegers`,void 0),x=b([a(`w3m-fund-input`)],x);var S=o`
  .amount-input-container {
    border-radius: ${({borderRadius:e})=>e[6]};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[1]};
  }

  .container {
    border-radius: 30px;
  }
`,C=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},w=[10,50,100],T=6,E=10,D=class extends c{constructor(){super(),this.unsubscribe=[],this.network=m.state.activeCaipNetwork,this.exchanges=h.state.exchanges,this.isLoading=h.state.isLoading,this.amount=h.state.amount,this.tokenAmount=h.state.tokenAmount,this.priceLoading=h.state.priceLoading,this.isPaymentInProgress=h.state.isPaymentInProgress,this.currentPayment=h.state.currentPayment,this.paymentId=h.state.paymentId,this.paymentAsset=h.state.paymentAsset,this.unsubscribe.push(m.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.setDefaultPaymentAsset()}),h.subscribe(e=>{this.exchanges=e.exchanges,this.isLoading=e.isLoading,this.amount=e.amount,this.tokenAmount=e.tokenAmount,this.priceLoading=e.priceLoading,this.paymentId=e.paymentId,this.isPaymentInProgress=e.isPaymentInProgress,this.currentPayment=e.currentPayment,this.paymentAsset=e.paymentAsset,e.isPaymentInProgress&&e.currentPayment?.exchangeId&&e.currentPayment?.sessionId&&e.paymentId&&this.handlePaymentInProgress()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),h.state.isPaymentInProgress||h.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),h.setAmount(w[0]),await h.fetchExchanges()}render(){return t`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map(()=>t`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`)}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map(e=>t`<wui-list-item
              @click=${()=>this.onExchangeClick(e)}
              chevron
              variant="image"
              imageSrc=${e.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${e.name}
              </wui-text>
            </wui-list-item>`):t`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return t`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${[`3`,`3`,`3`,`3`]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){return t`
      <wui-flex
        flexDirection="column"
        .padding=${[`0`,`3`,`3`,`3`]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${[`0`,`0`,`6`,`0`]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${this.paymentAsset?.metadata.symbol||``}
            imageSrc=${this.paymentAsset?.metadata.iconUrl||``}
            @click=${()=>l.push(`PayWithExchangeSelectAsset`)}
            size="lg"
            .chainImageSrc=${i(d.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${[`0`,`0`,`4`,`0`]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${T}
            .maxIntegers=${E}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${w.map(e=>t`<wui-chip-button
                @click=${()=>h.setAmount(e)}
                type="neutral"
                size="lg"
                text=${`$${e}`}
              ></wui-chip-button>`)}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){return this.priceLoading?t`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:t`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${this.paymentAsset?.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(e){this.amount?await h.handlePayWithExchange(e.id):u.showError(`Please enter an amount`)}handlePaymentInProgress(){let e=m.state.activeChain,{redirectView:t=`Account`}=l.state.data??{};this.isPaymentInProgress&&this.currentPayment?.exchangeId&&this.currentPayment?.sessionId&&this.paymentId&&(h.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then(t=>{t.status===`SUCCESS`?(u.showSuccess(`Deposit completed`),h.reset(),e&&(m.fetchTokenBalance(),p.updateBalance(e)),l.replace(`Transactions`)):t.status===`FAILED`&&u.showError(`Deposit failed`)}),u.showLoading(`Deposit in progress...`),l.replace(t))}onAmountChange({detail:e}){h.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await h.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){let e=await h.getAssetsForNetwork(this.network.caipNetworkId);e[0]&&h.setPaymentAsset(e[0])}}};D.styles=S,C([r()],D.prototype,`network`,void 0),C([r()],D.prototype,`exchanges`,void 0),C([r()],D.prototype,`isLoading`,void 0),C([r()],D.prototype,`amount`,void 0),C([r()],D.prototype,`tokenAmount`,void 0),C([r()],D.prototype,`priceLoading`,void 0),C([r()],D.prototype,`isPaymentInProgress`,void 0),C([r()],D.prototype,`currentPayment`,void 0),C([r()],D.prototype,`paymentId`,void 0),C([r()],D.prototype,`paymentAsset`,void 0),D=C([a(`w3m-deposit-from-exchange-view`)],D);var O=o`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }
`,k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=class extends c{constructor(){super(),this.unsubscribe=[],this.assets=h.state.assets,this.search=``,this.onDebouncedSearch=f.debounce(e=>{this.search=e}),this.unsubscribe.push(h.subscribe(e=>{this.assets=e.assets}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return t`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return t`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){let e=this.assets.filter(e=>e.metadata.name.toLowerCase().includes(this.search.toLowerCase())),n=e.length>0;return t`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${[`0`,`3`,`0`,`3`]}
      >
        <wui-flex justifyContent="flex-start" .padding=${[`4`,`3`,`3`,`3`]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${n?e.map(e=>t`<wui-list-item
                    .imageSrc=${e.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,e)}
                  >
                    <wui-text variant="md-medium" color="primary">${e.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${e.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`):t`<wui-flex
                .padding=${[`20`,`0`,`0`,`0`]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){l.push(`OnRampProviders`)}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){h.setPaymentAsset(e),l.goBack()}};A.styles=O,k([r()],A.prototype,`assets`,void 0),k([r()],A.prototype,`search`,void 0),A=k([a(`w3m-deposit-from-exchange-select-asset-view`)],A);export{A as W3mDepositFromExchangeSelectAssetView,D as W3mDepositFromExchangeView};
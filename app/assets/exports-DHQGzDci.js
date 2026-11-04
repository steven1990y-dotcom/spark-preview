import{r as e}from"./rolldown-runtime-DLMaRju-.js";import{C as t,_ as n,b as r,c as i,g as a,h as o,o as s,p as c,s as l,t as u,u as d,v as f}from"./wui-text-D1Hbg0kq.js";import{C as p,D as m,F as h,H as ee,I as te,L as ne,P as re,S as ie,T as ae,U as g,V as _,_ as v,d as oe,et as se,h as ce,l as y,n as le,nt as ue,r as b,st as x,t as S,v as de,w as fe,x as C,y as w,z as T}from"./ApiController-vVpnERuw.js";import"./wui-image-Ba4IIpzH.js";import"./wui-loading-spinner-DoCGe24z.js";import"./wui-avatar-CMARr1b8.js";import"./wui-icon-box-BSUAQqgY.js";import{n as pe,t as me}from"./wui-list-wallet-BiSmkUgP.js";import"./wui-icon-link-FSX1Fo7I.js";import"./wui-list-item-D8z0VEZG.js";import"./wui-button-BvAuYcfr.js";import{t as E}from"./ExchangeController-BM-c1hcx.js";import"./wui-icon-67FQWD0-.js";import{t as he}from"./MathUtil-B2UslVSw.js";import{n as ge,t as D}from"./wui-wallet-switch-5wuZCf6G.js";import{t as _e}from"./HelpersUtil-CyUSwrxT.js";import"./w3m-activity-list-C60D1tte.js";import"./wui-list-token-CQHcED8g.js";import"./w3m-tooltip-WawFY_CY.js";import"./wui-icon-box-Dnv9baKC.js";import"./wui-separator-C1AYzg2v.js";import{n as ve,t as ye}from"./ref-CSaD6c6N.js";import"./wui-input-text-BEBSfnf2.js";import"./wui-shimmer-BH9gXGQ4.js";import"./wui-shimmer-DNpChO2P.js";import"./wui-loading-spinner-5dONcmGG.js";import{t as be}from"./wui-loading-thumbnail-CF7hpIQl.js";import"./w3m-onramp-providers-footer-C6E3ruOj.js";import{t as O}from"./ConstantsUtil-DZmpuXFf.js";import{t as xe}from"./AlertController-CT1biWU4.js";import"./wui-email-input-DbGu6knv.js";import{n as Se,r as Ce,t as we}from"./wui-list-social-BMPVw5OF.js";import"./wui-link-Dk64ecKH.js";import{et as Te,wn as Ee}from"./ccip-VbTU7JSu.js";import{$ as De,E as Oe,et as ke,n as Ae,r as je,tt as Me}from"./_esm-DNY10QqC.js";import{t as Ne}from"./SIWXUtil-bJVYJgm5.js";import"./wui-qr-code-D2yNxbBb.js";import{t as Pe}from"./NavigationUtil-CLCRNDHF.js";import"./wui-visual-sSeV8SG_.js";import"./wui-input-text-CnJqvAuX.js";function Fe(e,t={}){let{key:n=`fallback`,name:r=`Fallback`,rank:i=!1,shouldThrow:a=Ie,retryCount:o,retryDelay:s}=t;return(({chain:t,pollingInterval:c=4e3,timeout:l,...u})=>{let d=e,f=()=>{},p=je({key:n,name:r,async request({method:e,params:n},r){let i,o=async(s=0)=>{let c=d[s]({...u,chain:t,retryCount:0,timeout:l});try{let t=await c.request({method:e,params:n},r);return f({method:e,params:n,response:t,transport:c,status:`success`}),t}catch(r){if(f({error:r,method:e,params:n,transport:c,status:`error`}),a(r)||e===`eth_sendRawTransactionSync`&&r instanceof Ee&&r.walk(e=>e?.code===4)||s===d.length-1||(i??=d.slice(s+1).some(n=>{let{include:r,exclude:i}=n({chain:t}).config.methods||{};return r?r.includes(e):!i||!i.includes(e)}),!i))throw r;return o(s+1)}};return o()},retryCount:o,retryDelay:s,type:`fallback`},{onResponse:e=>f=e,transports:d.map(e=>e({chain:t,retryCount:0}))});if(i){let e=typeof i==`object`?i:{};Le({chain:t,interval:e.interval??c,onTransports:e=>d=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:d,weights:e.weights})}return p})}function Ie(e){return!!(`code`in e&&typeof e.code==`number`&&(e.code===De.code||e.code===ke.code||e.code===Me.code||Te.nodeMessage.test(e.message)||e.code===5e3))}function Le({chain:e,interval:t=4e3,onTransports:n,ping:r,sampleCount:i=10,timeout:a=1e3,transports:o,weights:s={}}){let{stability:c=.7,latency:l=.3}=s,u=[],d=async()=>{let s=await Promise.all(o.map(async t=>{let n=t({chain:e,retryCount:0,timeout:a}),i=Date.now(),o,s;try{await(r?r({transport:n}):n.request({method:`net_listening`})),s=1}catch{s=0}finally{o=Date.now()}return{latency:o-i,success:s}}));u.push(s),u.length>i&&u.shift();let f=Math.max(...u.map(e=>Math.max(...e.map(({latency:e})=>e))));n(o.map((e,t)=>{let n=u.map(e=>e[t].latency),r=1-n.reduce((e,t)=>e+t,0)/n.length/f,i=u.map(e=>e[t].success),a=i.reduce((e,t)=>e+t,0)/i.length;return a===0?[0,t]:[l*r+c*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>o[e])),await Oe(t),d()};d()}var Re={ConnectorExplorerIds:{[x.CONNECTOR_ID.COINBASE]:`d0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8`,[x.CONNECTOR_ID.COINBASE_SDK]:`d0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8`,[x.CONNECTOR_ID.BASE_ACCOUNT]:`fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa`,[x.CONNECTOR_ID.SAFE]:`225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f`,[x.CONNECTOR_ID.LEDGER]:`19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927`,[x.CONNECTOR_ID.OKX]:`971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709`,[O.METMASK_CONNECTOR_NAME]:`c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96`,[O.TRUST_CONNECTOR_NAME]:`4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0`,[O.SOLFLARE_CONNECTOR_NAME]:`1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79`,[O.PHANTOM_CONNECTOR_NAME]:`a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393`,[O.COIN98_CONNECTOR_NAME]:`2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01`,[O.MAGIC_EDEN_CONNECTOR_NAME]:`8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6`,[O.BACKPACK_CONNECTOR_NAME]:`2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0`,[O.BITGET_CONNECTOR_NAME]:`38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662`,[O.FRONTIER_CONNECTOR_NAME]:`85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041`,[O.XVERSE_CONNECTOR_NAME]:`2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b`,[O.LEATHER_CONNECTOR_NAME]:`483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13`,[O.OKX_CONNECTOR_NAME]:`971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709`,[O.BINANCE_CONNECTOR_NAME]:`2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25`},NetworkImageIds:{1:`ba0ba0cd-17c6-4806-ad93-f9d174f17900`,42161:`3bff954d-5cb0-47a0-9a23-d20192e74600`,43114:`30c46e53-e989-45fb-4549-be3bd4eb3b00`,56:`93564157-2e8e-4ce7-81df-b264dbee9b00`,250:`06b26297-fe0c-4733-5d6b-ffa5498aac00`,10:`ab9c186a-c52f-464b-2906-ca59d760a400`,137:`41d04d42-da3b-4453-8506-668cc0727900`,5e3:`e86fae9b-b770-4eea-e520-150e12c81100`,295:`6a97d510-cac8-4e58-c7ce-e8681b044c00`,11155111:`e909ea0a-f92a-4512-c8fc-748044ea6800`,84532:`a18a7ecd-e307-4360-4746-283182228e00`,1301:`4eeea7ef-0014-4649-5d1d-07271a80f600`,130:`2257980a-3463-48c6-cbac-a42d2a956e00`,10143:`0a728e83-bacb-46db-7844-948f05434900`,143:`0a728e83-bacb-46db-7844-948f05434900`,100:`02b53f6a-e3d4-479e-1cb4-21178987d100`,9001:`f926ff41-260d-4028-635e-91913fc28e00`,324:`b310f07f-4ef7-49f3-7073-2a0a39685800`,314:`5a73b3dd-af74-424e-cae0-0de859ee9400`,4689:`34e68754-e536-40da-c153-6ef2e7188a00`,1088:`3897a66d-40b9-4833-162f-a2c90531c900`,1284:`161038da-44ae-4ec7-1208-0ea569454b00`,1285:`f1d73bb6-5450-4e18-38f7-fb6484264a00`,7777777:`845c60df-d429-4991-e687-91ae45791600`,42220:`ab781bbc-ccc6-418d-d32d-789b15da1f00`,8453:`7289c336-3981-4081-c5f4-efc26ac64a00`,1313161554:`3ff73439-a619-4894-9262-4470c773a100`,2020:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,2021:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,80094:`e329c2c9-59b0-4a02-83e4-212ff3779900`,2741:`fc2427d1-5af9-4a9c-8da5-6f94627cd900`,30:`fb7e1624-99e3-4c36-ea01-4cfe46c4a300`,31:`2eb3d92a-3d77-42aa-87c9-190adb144800`,"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":`a1b58899-f671-4276-6a5e-56ca5bd59700`,"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":`a1b58899-f671-4276-6a5e-56ca5bd59700`,EtWTRABZaYq6iMfeYKouRu166VU2xqa1:`a1b58899-f671-4276-6a5e-56ca5bd59700`,"000000000019d6689c085ae165831e93":`0b4838db-0161-4ffe-022d-532bf03dba00`,"000000000933ea01ad0ee984209779ba":`39354064-d79b-420b-065d-f980c4b78200`,"00000008819873e925422c1ff0f99f7c":`b3406e4a-bbfc-44fb-e3a6-89673c78b700`,"-239":`20f673c0-095e-49b2-07cf-eb5049dcf600`,"-3":`20f673c0-095e-49b2-07cf-eb5049dcf600`,"0x2b6653dc":`3502bb86-cc4e-420f-a387-59ea63a28b00`,"0x94a9059e":`3502bb86-cc4e-420f-a387-59ea63a28b00`,"0xcd8690dc":`3502bb86-cc4e-420f-a387-59ea63a28b00`,pubnet:``,testnet:``},ConnectorImageIds:{[x.CONNECTOR_ID.COINBASE]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[x.CONNECTOR_ID.COINBASE_SDK]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[x.CONNECTOR_ID.BASE_ACCOUNT]:`bba2c8be-7fd1-463e-42b1-796ecb0ad200`,[x.CONNECTOR_ID.SAFE]:`461db637-8616-43ce-035a-d89b8a1d5800`,[x.CONNECTOR_ID.LEDGER]:`54a1aa77-d202-4f8d-0fb2-5d2bb6db0300`,[x.CONNECTOR_ID.WALLET_CONNECT]:`ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400`,[x.CONNECTOR_ID.INJECTED]:`07ba87ed-43aa-4adf-4540-9e6a2b9cae00`},ConnectorNamesMap:{[x.CONNECTOR_ID.INJECTED]:`Browser Wallet`,[x.CONNECTOR_ID.WALLET_CONNECT]:`WalletConnect`,[x.CONNECTOR_ID.COINBASE]:`Coinbase`,[x.CONNECTOR_ID.COINBASE_SDK]:`Coinbase`,[x.CONNECTOR_ID.BASE_ACCOUNT]:`Base Account`,[x.CONNECTOR_ID.LEDGER]:`Ledger`,[x.CONNECTOR_ID.SAFE]:`Safe`},ConnectorTypesMap:{[x.CONNECTOR_ID.INJECTED]:`INJECTED`,[x.CONNECTOR_ID.WALLET_CONNECT]:`WALLET_CONNECT`,[x.CONNECTOR_ID.EIP6963]:`ANNOUNCED`,[x.CONNECTOR_ID.AUTH]:`AUTH`,[x.CONNECTOR_ID.COINBASE]:`EXTERNAL`,[x.CONNECTOR_ID.COINBASE_SDK]:`EXTERNAL`,[x.CONNECTOR_ID.BASE_ACCOUNT]:`EXTERNAL`,[O.CONNECTOR_TYPE_AUTH]:`AUTH`},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},ze=`rpc.walletconnect.org`;function Be(e,t){let n=new URL(`https://rpc.walletconnect.org/v1/`);return n.searchParams.set(`chainId`,e),n.searchParams.set(`projectId`,t),n.toString()}var Ve=`near:mainnet.solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp.eip155:1101.eip155:56.eip155:42161.eip155:7777777.eip155:59144.eip155:324.solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1.eip155:5000.solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz.eip155:80084.eip155:5003.eip155:100.eip155:8453.eip155:42220.eip155:1313161555.eip155:17000.eip155:1.eip155:300.eip155:1313161554.eip155:1329.eip155:84532.eip155:421614.eip155:11155111.eip155:8217.eip155:43114.solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z.eip155:999999999.eip155:11155420.eip155:80002.eip155:97.eip155:43113.eip155:137.eip155:10.eip155:1301.eip155:80094.eip155:80069.eip155:560048.eip155:31.eip155:2818.eip155:57054.eip155:911867.eip155:534351.eip155:1112.eip155:534352.eip155:1111.eip155:146.eip155:130.eip155:1284.eip155:30.eip155:2810.eip155:55931.bip122:000000000019d6689c085ae165831e93.bip122:000000000933ea01ad0ee984209779ba.tron:0x2b6653dc.tron:0xcd8690dc`.split(`.`),He={extendRpcUrlWithProjectId(e,t){let n=!1;try{n=new URL(e).host===ze}catch{n=!1}if(n){let n=new URL(e);return n.searchParams.has(`projectId`)||n.searchParams.set(`projectId`,t),n.toString()}return e},isCaipNetwork(e){return`chainNamespace`in e&&`caipNetworkId`in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:x.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${x.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,n){let r=e.rpcUrls?.default?.http?.[0];return Ve.includes(t)?Be(t,n):r||``},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){let i=this.getChainNamespace(e),a=this.getCaipNetworkId(e),o=e.rpcUrls?.default?.http?.[0],s=this.getDefaultRpcUrl(e,a,n),c=e?.rpcUrls?.chainDefault?.http?.[0]||o,l=r?.[a]?.map(e=>e.url)||[],u=[...l,...s?[s]:[]],d=[...l];return c&&!d.includes(c)&&d.push(c),{...e,chainNamespace:i,caipNetworkId:a,assets:{imageId:Re.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:u},chainDefault:{http:d}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){return e.map(e=>He.extendCaipNetwork(e,{customNetworkImageUrls:t,customRpcUrls:r,projectId:n}))},getViemTransport(e,t,n){let r=[];return n?.forEach(e=>{r.push(Ae(e.url,e.config))}),Ve.includes(e.caipNetworkId)&&r.push(Ae(Be(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":`text/plain`}}})),e?.rpcUrls?.default?.http?.forEach(e=>{r.push(Ae(e))}),Fe(r)},extendWagmiTransports(e,t,n){if(Ve.includes(e.caipNetworkId)){let r=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return Fe([n,Ae(r)])}return n},getUnsupportedNetwork(e){return{id:e.split(`:`)[1],caipNetworkId:e,name:x.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(`:`)[0],nativeCurrency:{name:``,decimals:0,symbol:``},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){let t=ee.getActiveCaipNetworkId(),n=b.getAllRequestedCaipNetworks(),r=Array.from(b.state.chains?.keys()||[]),i=t?.split(`:`)[0],a=i?r.includes(i):!1,o=n?.find(e=>e.caipNetworkId===t);return a&&!o&&t?this.getUnsupportedNetwork(t):o||e||n?.[0]}},Ue=c`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`,k=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},A=class extends f{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address=``,this.profileName=``,this.charsStart=4,this.charsEnd=6}render(){return r`
      <button
        ?disabled=${this.disabled}
        class=${o(this.balance?void 0:`local-no-balance`)}
        data-error=${o(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){let e=this.networkSrc?r`<wui-image src=${this.networkSrc}></wui-image>`:r` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return r`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return r`<wui-text variant="md-regular" color="inherit">
      ${this.address?l.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){let e=this.loading?r`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:r`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return r`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};A.styles=[d,i,Ue],k([n()],A.prototype,`networkSrc`,void 0),k([n()],A.prototype,`avatarSrc`,void 0),k([n()],A.prototype,`balance`,void 0),k([n({type:Boolean})],A.prototype,`isUnsupportedChain`,void 0),k([n({type:Boolean})],A.prototype,`disabled`,void 0),k([n({type:Boolean})],A.prototype,`loading`,void 0),k([n()],A.prototype,`address`,void 0),k([n()],A.prototype,`profileName`,void 0),k([n()],A.prototype,`charsStart`,void 0),k([n()],A.prototype,`charsEnd`,void 0),A=k([s(`wui-account-button`)],A);var j=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},M=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=`show`,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=T.state.allowUnsupportedChain?!0:!b.state.activeChain||b.checkIfSupportedNetwork(b.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(b.getAccountData(this.namespace)),this.setNetworkData(b.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(b.subscribeChainProp(`accountState`,e=>{this.setAccountData(e)},e),b.subscribeChainProp(`networkState`,t=>{this.setNetworkData(t),this.isSupported=b.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(te.subscribeNetworkImages(()=>{this.networkImage=h.getNetworkImage(this.network)}),b.subscribeKey(`activeCaipAddress`,e=>{this.caipAddress=e}),b.subscribeChainProp(`accountState`,e=>{this.setAccountData(e)}),b.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=h.getNetworkImage(e),this.isSupported=!e?.chainNamespace||b.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!b.state.activeChain)return null;let e=this.balance===`show`,t=typeof this.balanceVal!=`string`,{formattedText:n}=_.parseBalance(this.balanceVal,this.balanceSymbol);return r`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!T.state.allowUnsupportedChain&&!this.isSupported}
        address=${o(_.getPlainAddress(this.caipAddress))}
        profileName=${o(this.profileName)}
        networkSrc=${o(this.networkImage)}
        avatarSrc=${o(this.profileImage)}
        balance=${e?n:``}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:``}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||T.state.allowUnsupportedChain?w.open({namespace:this.namespace}):w.open({view:`UnsupportedChain`})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await h.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=h.getNetworkImage(e.caipNetwork))}};j([n({type:Boolean})],M.prototype,`disabled`,void 0),j([n()],M.prototype,`balance`,void 0),j([n()],M.prototype,`charsStart`,void 0),j([n()],M.prototype,`charsEnd`,void 0),j([n()],M.prototype,`namespace`,void 0),j([a()],M.prototype,`caipAddress`,void 0),j([a()],M.prototype,`balanceVal`,void 0),j([a()],M.prototype,`balanceSymbol`,void 0),j([a()],M.prototype,`profileName`,void 0),j([a()],M.prototype,`profileImage`,void 0),j([a()],M.prototype,`network`,void 0),j([a()],M.prototype,`networkImage`,void 0),j([a()],M.prototype,`isSupported`,void 0);var We=class extends M{};We=j([s(`w3m-account-button`)],We);var Ge=class extends M{};Ge=j([s(`appkit-account-button`)],Ge);var Ke=t`
  :host {
    display: block;
    width: max-content;
  }
`,N=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?b.getAccountData(this.namespace)?.caipAddress:b.state.activeCaipAddress,this.namespace?this.unsubscribe.push(b.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(b.subscribeKey(`activeCaipAddress`,e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?r`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${o(this.balance)}
            .charsStart=${o(this.charsStart)}
            .charsEnd=${o(this.charsEnd)}
            namespace=${o(this.namespace)}
          >
          </appkit-account-button>
        `:r`
          <appkit-connect-button
            size=${o(this.size)}
            label=${o(this.label)}
            loadingLabel=${o(this.loadingLabel)}
            namespace=${o(this.namespace)}
          ></appkit-connect-button>
        `}};P.styles=Ke,N([n({type:Boolean})],P.prototype,`disabled`,void 0),N([n()],P.prototype,`balance`,void 0),N([n()],P.prototype,`size`,void 0),N([n()],P.prototype,`label`,void 0),N([n()],P.prototype,`loadingLabel`,void 0),N([n()],P.prototype,`charsStart`,void 0),N([n()],P.prototype,`charsEnd`,void 0),N([n()],P.prototype,`namespace`,void 0),N([a()],P.prototype,`caipAddress`,void 0);var qe=class extends P{};qe=N([s(`w3m-button`)],qe);var Je=class extends P{};Je=N([s(`appkit-button`)],Je);var Ye=c`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`,Xe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ze=class extends f{constructor(){super(...arguments),this.size=`md`,this.variant=`primary`,this.loading=!1,this.text=`Connect Wallet`}render(){return r`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){let e={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},t={primary:`invert`,secondary:`accent-primary`};return this.loading?r`<wui-loading-spinner
      color=${t[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:r` <wui-text variant=${e[this.size]} color=${t[this.variant]}>
        ${this.text}
      </wui-text>`}};Ze.styles=[d,i,Ye],Xe([n()],Ze.prototype,`size`,void 0),Xe([n()],Ze.prototype,`variant`,void 0),Xe([n({type:Boolean})],Ze.prototype,`loading`,void 0),Xe([n()],Ze.prototype,`text`,void 0),Ze=Xe([s(`wui-connect-button`)],Ze);var Qe=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$e=class extends f{constructor(){super(),this.unsubscribe=[],this.size=`md`,this.label=`Connect Wallet`,this.loadingLabel=`Connecting...`,this.open=w.state.open,this.loading=this.namespace?w.state.loadingNamespaceMap.get(this.namespace):w.state.loading,this.unsubscribe.push(w.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      <wui-connect-button
        size=${o(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:``}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?w.close():this.loading||w.open({view:`Connect`,namespace:this.namespace})}};Qe([n()],$e.prototype,`size`,void 0),Qe([n()],$e.prototype,`label`,void 0),Qe([n()],$e.prototype,`loadingLabel`,void 0),Qe([n()],$e.prototype,`namespace`,void 0),Qe([a()],$e.prototype,`open`,void 0),Qe([a()],$e.prototype,`loading`,void 0);var et=class extends $e{};et=Qe([s(`w3m-connect-button`)],et);var tt=class extends $e{};tt=Qe([s(`appkit-connect-button`)],tt);var nt=c`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`,rt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},it=class extends f{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size=`lg`}render(){return r`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:`sm-regular`,md:`md-regular`,lg:`lg-regular`}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?r` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?r`<wui-image src=${this.imageSrc}></wui-image>`:r` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};it.styles=[d,i,nt],rt([n()],it.prototype,`imageSrc`,void 0),rt([n({type:Boolean})],it.prototype,`isUnsupportedChain`,void 0),rt([n({type:Boolean})],it.prototype,`disabled`,void 0),rt([n()],it.prototype,`size`,void 0),it=rt([s(`wui-network-button`)],it);var at=t`
  :host {
    display: block;
    width: max-content;
  }
`,ot=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},st=class extends f{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=b.state.activeCaipNetwork,this.networkImage=h.getNetworkImage(this.network),this.caipAddress=b.state.activeCaipAddress,this.loading=w.state.loading,this.isSupported=T.state.allowUnsupportedChain?!0:!b.state.activeChain||b.checkIfSupportedNetwork(b.state.activeChain),this.unsubscribe.push(te.subscribeNetworkImages(()=>{this.networkImage=h.getNetworkImage(this.network)}),b.subscribeKey(`activeCaipAddress`,e=>{this.caipAddress=e}),b.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=h.getNetworkImage(e),this.isSupported=!e?.chainNamespace||b.checkIfSupportedNetwork(e.chainNamespace),h.fetchNetworkImage(e?.assets?.imageId)}),w.subscribeKey(`loading`,e=>this.loading=e))}firstUpdated(){h.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||b.checkIfSupportedNetwork(this.network.chainNamespace);return r`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!T.state.allowUnsupportedChain&&!e}
        imageSrc=${o(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!T.state.allowUnsupportedChain?`Switch Network`:this.network.name:this.label?this.label:this.caipAddress?`Unknown Network`:`Select Network`}onClick(){this.loading||(C.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),w.open({view:`Networks`}))}};st.styles=at,ot([n({type:Boolean})],st.prototype,`disabled`,void 0),ot([n({type:String})],st.prototype,`label`,void 0),ot([a()],st.prototype,`network`,void 0),ot([a()],st.prototype,`networkImage`,void 0),ot([a()],st.prototype,`caipAddress`,void 0),ot([a()],st.prototype,`loading`,void 0),ot([a()],st.prototype,`isSupported`,void 0);var ct=class extends st{};ct=ot([s(`w3m-network-button`)],ct);var lt=class extends st{};lt=ot([s(`appkit-network-button`)],lt);var ut=c`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`,dt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ft=class extends f{constructor(){super(...arguments),this.label=``,this.description=``,this.icon=`wallet`}render(){return r`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};ft.styles=[d,i,ut],dt([n()],ft.prototype,`label`,void 0),dt([n()],ft.prototype,`description`,void 0),dt([n()],ft.prototype,`icon`,void 0),ft=dt([s(`wui-notice-card`)],ft);var pt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},mt=class extends f{constructor(){super(),this.unsubscribe=[],this.socialProvider=ee.getConnectedSocialProvider(),this.socialUsername=ee.getConnectedSocialUsername(),this.namespace=b.state.activeChain,this.unsubscribe.push(b.subscribeKey(`activeChain`,e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=v.getConnectorId(this.namespace),t=v.getAuthConnector();if(!t||e!==x.CONNECTOR_ID.AUTH)return this.style.cssText=`display: none`,null;let n=t.provider.getEmail()??``;return!n&&!this.socialUsername?(this.style.cssText=`display: none`,null):r`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??`mail`}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||p.push(`UpdateEmailWallet`,{email:e,redirectView:`Account`})}getAuthName(e){return this.socialUsername?this.socialProvider===`discord`&&this.socialUsername.endsWith(`0`)?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};pt([a()],mt.prototype,`namespace`,void 0),mt=pt([s(`w3m-account-auth-button`)],mt);var ht=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gt=class extends f{constructor(){super(),this.usubscribe=[],this.networkImages=te.state.networkImages,this.address=b.getAccountData()?.address,this.profileImage=b.getAccountData()?.profileImage,this.profileName=b.getAccountData()?.profileName,this.network=b.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=T.state.remoteFeatures,this.usubscribe.push(b.subscribeChainProp(`accountState`,e=>{e&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),b.subscribeKey(`activeCaipNetwork`,e=>{e?.id&&(this.network=e)}),T.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error(`w3m-account-settings-view: No account provided`);let e=this.networkImages[this.network?.assets?.imageId??``];return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[`0`,`5`,`3`,`5`]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${o(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${l.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:`middle`})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[`6`,`4`,`3`,`4`]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${o(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??`Unknown`}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=v.getConnectorId(e),n=v.getAuthConnector();return!b.checkIfNamesSupported()||!n||t!==x.CONNECTOR_ID.AUTH||this.profileName?null:r`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=v.getConnectorId(this.network?.chainNamespace),t=v.getAuthConnector(),{origin:n}=location;return!t||e!==x.CONNECTOR_ID.AUTH||n.includes(g.SECURE_SITE)?null:r`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=b.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onCopyAddress(){try{this.address&&(_.copyToClopboard(this.address),m.showSuccess(`Address copied`))}catch{m.showError(`Failed to copy`)}}smartAccountSettingsTemplate(){let e=this.network?.chainNamespace,t=b.checkIfSmartAccountEnabled(),n=v.getConnectorId(e);return!v.getAuthConnector()||n!==x.CONNECTOR_ID.AUTH||!t?null:r`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){p.push(`ChooseAccountName`)}onNetworks(){this.isAllowedNetworkSwitch()&&p.push(`Networks`)}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=y.getConnections(e).length>0,n=e&&v.state.activeConnectorIds[e],r=this.remoteFeatures?.multiWallet;await y.disconnect(r?{id:n,namespace:e}:{}),t&&r&&(p.push(`ProfileWallets`),m.showSuccess(`Wallet deleted`))}catch{C.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),m.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onGoToUpgradeView(){C.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),p.push(`UpgradeEmailWallet`)}onSmartAccountSettings(){p.push(`SmartAccountSettings`)}};ht([a()],gt.prototype,`address`,void 0),ht([a()],gt.prototype,`profileImage`,void 0),ht([a()],gt.prototype,`profileName`,void 0),ht([a()],gt.prototype,`network`,void 0),ht([a()],gt.prototype,`disconnecting`,void 0),ht([a()],gt.prototype,`remoteFeatures`,void 0),gt=ht([s(`w3m-account-settings-view`)],gt);var _t=c`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`,vt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yt={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},bt={lg:`md`,md:`sm`,sm:`sm`},xt=class extends f{constructor(){super(...arguments),this.icon=`mobile`,this.size=`md`,this.label=``,this.active=!1}render(){return r`
      <button data-active=${this.active}>
        ${this.icon?r`<wui-icon size=${bt[this.size]} name=${this.icon}></wui-icon>`:``}
        <wui-text variant=${yt[this.size]}> ${this.label} </wui-text>
      </button>
    `}};xt.styles=[d,i,_t],vt([n()],xt.prototype,`icon`,void 0),vt([n()],xt.prototype,`size`,void 0),vt([n()],xt.prototype,`label`,void 0),vt([n({type:Boolean})],xt.prototype,`active`,void 0),xt=vt([s(`wui-tab-item`)],xt);var St=c`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[`01`]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`,Ct=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wt=class extends f{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size=`md`,this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let n=t===this.activeTab;return r`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${n}
          data-active=${n}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};wt.styles=[d,i,St],Ct([n({type:Array})],wt.prototype,`tabs`,void 0),Ct([n()],wt.prototype,`onTabChange`,void 0),Ct([n()],wt.prototype,`size`,void 0),Ct([a()],wt.prototype,`activeTab`,void 0),wt=Ct([s(`wui-tabs`)],wt);var Tt=c`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e[`ease-out-power-1`]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},I=class extends f{constructor(){super(),this.unsubscribe=[],this.caipAddress=b.getAccountData()?.caipAddress,this.address=_.getPlainAddress(b.getAccountData()?.caipAddress),this.profileImage=b.getAccountData()?.profileImage,this.profileName=b.getAccountData()?.profileName,this.disconnecting=!1,this.balance=b.getAccountData()?.balance,this.balanceSymbol=b.getAccountData()?.balanceSymbol,this.features=T.state.features,this.remoteFeatures=T.state.remoteFeatures,this.namespace=b.state.activeChain,this.activeConnectorIds=v.state.activeConnectorIds,this.unsubscribe.push(b.subscribeChainProp(`accountState`,e=>{this.address=_.getPlainAddress(e?.caipAddress),this.caipAddress=e?.caipAddress,this.balance=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),T.subscribeKey(`features`,e=>this.features=e),T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),v.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),b.subscribeKey(`activeChain`,e=>this.namespace=e),b.subscribeKey(`activeCaipNetwork`,e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?v.getConnectorById(e):void 0,n=h.getConnectorImage(t),{value:i,decimals:a,symbol:s}=_.parseBalance(this.balance,this.balanceSymbol);return r`<wui-flex
        flexDirection="column"
        .padding=${[`0`,`5`,`4`,`5`]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${o(this.caipAddress)}
          address=${o(_.getPlainAddress(this.caipAddress))}
          imageSrc=${o(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${n}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${i}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${s}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${[`0`,`3`,`3`,`3`]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=g.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=!!this.features?.receive,n=this.remoteFeatures?.onramp&&e,i=E.isPayWithExchangeEnabled();return!n&&!t&&!i?null:r`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||g.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case`onramp`:return this.fundWalletTemplate();case`swaps`:return this.swapsTemplate();case`send`:return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&g.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?r` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=b.state.activeChain===x.CHAIN.EVM;return!e||!t?null:r`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){let e=this.features?.send,t=b.state.activeChain;if(!t)throw Error(`SendController:sendTemplate - namespace is required`);let n=g.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!n?null:r`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=b.state.activeChain;if(!e)throw Error(`AuthCardTemplate:authCardTemplate - namespace is required`);let t=v.getConnectorId(e),n=v.getAuthConnector(),{origin:i}=location;return!n||t!==x.CONNECTOR_ID.AUTH||i.includes(g.SECURE_SITE)?null:r`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){p.push(`FundWallet`)}handleClickSwap(){p.push(`Swap`)}handleClickSend(){p.push(`WalletSend`)}explorerBtnTemplate(){return b.getAccountData()?.addressExplorerUrl?r`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){C.sendEvent({type:`track`,event:`CLICK_TRANSACTIONS`,properties:{isSmartAccount:ce(b.state.activeChain)===re.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`Transactions`)}async onDisconnect(){try{this.disconnecting=!0;let e=y.getConnections(this.namespace).length>0,t=this.namespace&&v.state.activeConnectorIds[this.namespace],n=this.remoteFeatures?.multiWallet;await y.disconnect(n?{id:t,namespace:this.namespace}:{}),e&&n&&(p.push(`ProfileWallets`),m.showSuccess(`Wallet deleted`))}catch{C.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),m.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onExplorer(){let e=b.getAccountData()?.addressExplorerUrl;e&&_.openHref(e,`_blank`)}onGoToUpgradeView(){C.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),p.push(`UpgradeEmailWallet`)}onGoToProfileWalletsView(){p.push(`ProfileWallets`)}};I.styles=Tt,F([a()],I.prototype,`caipAddress`,void 0),F([a()],I.prototype,`address`,void 0),F([a()],I.prototype,`profileImage`,void 0),F([a()],I.prototype,`profileName`,void 0),F([a()],I.prototype,`disconnecting`,void 0),F([a()],I.prototype,`balance`,void 0),F([a()],I.prototype,`balanceSymbol`,void 0),F([a()],I.prototype,`features`,void 0),F([a()],I.prototype,`remoteFeatures`,void 0),F([a()],I.prototype,`namespace`,void 0),F([a()],I.prototype,`activeConnectorIds`,void 0),I=F([s(`w3m-account-default-widget`)],I);var Et=c`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`,Dt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ot=class extends f{constructor(){super(...arguments),this.dollars=`0`,this.pennies=`00`}render(){return r`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Ot.styles=[d,Et],Dt([n()],Ot.prototype,`dollars`,void 0),Dt([n()],Ot.prototype,`pennies`,void 0),Ot=Dt([s(`wui-balance`)],Ot);var kt=c`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,At=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jt={sm:`sm-regular`,md:`md-regular`},Mt=class extends f{constructor(){super(...arguments),this.placement=`top`,this.variant=`fill`,this.size=`md`,this.message=``}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,r`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${jt[this.size]}>${this.message}</wui-text>`}};Mt.styles=[d,i,kt],At([n()],Mt.prototype,`placement`,void 0),At([n()],Mt.prototype,`variant`,void 0),At([n()],Mt.prototype,`size`,void 0),At([n()],Mt.prototype,`message`,void 0),Mt=At([s(`wui-tooltip`)],Mt);var Nt=t`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,Pt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ft=class extends f{render(){return r`<w3m-activity-list page="account"></w3m-activity-list>`}};Ft.styles=Nt,Ft=Pt([s(`w3m-account-activity-widget`)],Ft);var It=c`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,Lt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Rt=class extends f{constructor(){super(...arguments),this.icon=`card`,this.text=``,this.description=``,this.tag=void 0,this.disabled=!1}render(){return r`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?r`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?r`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};Rt.styles=[d,i,It],Lt([n()],Rt.prototype,`icon`,void 0),Lt([n()],Rt.prototype,`text`,void 0),Lt([n()],Rt.prototype,`description`,void 0),Lt([n()],Rt.prototype,`tag`,void 0),Lt([n({type:Boolean})],Rt.prototype,`disabled`,void 0),Rt=Lt([s(`wui-list-description`)],Rt);var zt=t`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,Bt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vt=class extends f{constructor(){super(),this.unsubscribe=[],this.tokenBalance=b.getAccountData()?.tokenBalance,this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(b.subscribeChainProp(`accountState`,e=>{this.tokenBalance=e?.tokenBalance}),T.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?r`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:r` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?r`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:r``}tokenItemTemplate(){return this.tokenBalance?.map(e=>r`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){p.push(`WalletReceive`)}onBuyClick(){C.sendEvent({type:`track`,event:`SELECT_BUY_CRYPTO`,properties:{isSmartAccount:ce(b.state.activeChain)===re.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`OnRampProviders`)}};Vt.styles=zt,Bt([a()],Vt.prototype,`tokenBalance`,void 0),Bt([a()],Vt.prototype,`remoteFeatures`,void 0),Vt=Bt([s(`w3m-account-tokens-widget`)],Vt);var Ht=c`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,L=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},R=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.network=b.state.activeCaipNetwork,this.profileName=b.getAccountData()?.profileName,this.address=b.getAccountData()?.address,this.currentTab=b.getAccountData()?.currentTab,this.tokenBalance=b.getAccountData()?.tokenBalance,this.features=T.state.features,this.namespace=b.state.activeChain,this.activeConnectorIds=v.state.activeConnectorIds,this.remoteFeatures=T.state.remoteFeatures}firstUpdated(){b.fetchTokenBalance(),this.unsubscribe.push(b.subscribeChainProp(`accountState`,e=>{e?.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):w.close()}),v.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),b.subscribeKey(`activeChain`,e=>this.namespace=e),b.subscribeKey(`activeCaipNetwork`,e=>this.network=e),T.subscribeKey(`features`,e=>this.features=e),T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw Error(`w3m-account-features-widget: No account provided`);if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?v.getConnectorById(e):void 0,{icon:n,iconSize:i}=this.getAuthData();return r`<wui-flex
      flexDirection="column"
      .padding=${[`0`,`3`,`4`,`3`]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${n}
          iconSize=${i}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||g.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>e===`send`||e===`receive`?!this.features?.[e]:e===`swaps`||e===`onramp`?!this.remoteFeatures?.[e]:!0))return null;let t=e.map(e=>e===`receive`||e===`onramp`?`fund`:e),n=[...new Set(t)];return r`<wui-flex gap="2">
      ${n.map(e=>{switch(e){case`fund`:return this.fundWalletTemplate();case`swaps`:return this.swapsTemplate();case`send`:return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=g.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=this.features?.receive,n=this.remoteFeatures?.onramp&&e,i=E.isPayWithExchangeEnabled();return!n&&!t&&!i?null:r`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=b.state.activeChain===x.CHAIN.EVM;return!e||!t?null:r`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){let e=this.features?.send,t=b.state.activeChain,n=g.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!n?null:r`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>b.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===x.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?r`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?r`<w3m-account-activity-widget></w3m-account-activity-widget>`:r`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=_.calculateBalance(this.tokenBalance),{dollars:t=`0`,pennies:n=`00`}=_.formatTokenBalance(e);return r`<wui-balance dollars=${t} pennies=${n}></wui-balance>`}return r`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=_e.getTabsByNamespace(b.state.activeChain);return e.length===0?null:r`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){b.setAccountProp(`currentTab`,e,this.namespace)}onFundWalletClick(){p.push(`FundWallet`)}onSwapClick(){this.network?.caipNetworkId&&!g.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?p.push(`UnsupportedChain`,{swapUnsupportedChain:!0}):(C.sendEvent({type:`track`,event:`OPEN_SWAP`,properties:{network:this.network?.caipNetworkId||``,isSmartAccount:ce(b.state.activeChain)===re.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`Swap`))}getAuthData(){let e=ee.getConnectedSocialProvider(),t=ee.getConnectedSocialUsername(),n=v.getAuthConnector()?.provider.getEmail()??``;return{name:fe.getAuthName({email:n,socialUsername:t,socialProvider:e}),icon:e??`mail`,iconSize:e?`xl`:`md`}}onGoToProfileWalletsView(){p.push(`ProfileWallets`)}onSendClick(){C.sendEvent({type:`track`,event:`OPEN_SEND`,properties:{network:this.network?.caipNetworkId||``,isSmartAccount:ce(b.state.activeChain)===re.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`WalletSend`)}};R.styles=Ht,L([a()],R.prototype,`watchTokenBalance`,void 0),L([a()],R.prototype,`network`,void 0),L([a()],R.prototype,`profileName`,void 0),L([a()],R.prototype,`address`,void 0),L([a()],R.prototype,`currentTab`,void 0),L([a()],R.prototype,`tokenBalance`,void 0),L([a()],R.prototype,`features`,void 0),L([a()],R.prototype,`namespace`,void 0),L([a()],R.prototype,`activeConnectorIds`,void 0),L([a()],R.prototype,`remoteFeatures`,void 0),R=L([s(`w3m-account-wallet-features-widget`)],R);var Ut=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wt=class extends f{constructor(){super(),this.unsubscribe=[],this.namespace=b.state.activeChain,this.unsubscribe.push(b.subscribeKey(`activeChain`,e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=v.getConnectorId(this.namespace),t=v.getAuthConnector();return r`
      ${t&&e===x.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return r`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return r`<w3m-account-default-widget></w3m-account-default-widget>`}};Ut([a()],Wt.prototype,`namespace`,void 0),Wt=Ut([s(`w3m-account-view`)],Wt);var Gt=c`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=class extends f{constructor(){super(...arguments),this.address=``,this.profileName=``,this.content=[],this.alt=``,this.imageSrc=``,this.icon=void 0,this.iconSize=`md`,this.iconBadge=void 0,this.iconBadgeSize=`md`,this.buttonVariant=`neutral-primary`,this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return r`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return r`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?r`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return r` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?r`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?r`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:r`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:r`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:n,description:i,enableButton:a,buttonType:o,buttonLabel:s,buttonVariant:c,tagVariant:u,tagLabel:d,alignItems:f=`flex-end`}){return r`
      <wui-flex justifyContent="space-between" alignItems=${f} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${n?r`<wui-text variant="sm-medium" color="secondary">${n}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${l.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?`end`:`middle`})}
            </wui-text>

            ${u&&d?r`<wui-tag variant=${u} size="sm">${d}</wui-tag>`:null}
          </wui-flex>

          ${i?r`<wui-text variant="sm-regular" color="secondary">${i}</wui-text>`:null}
        </wui-flex>

        ${a?this.buttonTemplate({buttonType:o,buttonLabel:s,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:n}){return r`
      <wui-button
        size="sm"
        variant=${n}
        @click=${e===`disconnect`?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e===`disconnect`?`wui-active-profile-wallet-item-disconnect-button`:`wui-active-profile-wallet-item-switch-button`}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent(`disconnect`,{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent(`switch`,{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent(`externalLink`,{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent(`more`,{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent(`copy`,{bubbles:!0,composed:!0}))}};B.styles=[d,i,Gt],z([n()],B.prototype,`address`,void 0),z([n()],B.prototype,`profileName`,void 0),z([n({type:Array})],B.prototype,`content`,void 0),z([n()],B.prototype,`alt`,void 0),z([n()],B.prototype,`imageSrc`,void 0),z([n()],B.prototype,`icon`,void 0),z([n()],B.prototype,`iconSize`,void 0),z([n()],B.prototype,`iconBadge`,void 0),z([n()],B.prototype,`iconBadgeSize`,void 0),z([n()],B.prototype,`buttonVariant`,void 0),z([n({type:Boolean})],B.prototype,`enableMoreButton`,void 0),z([n({type:Number})],B.prototype,`charsStart`,void 0),z([n({type:Number})],B.prototype,`charsEnd`,void 0),B=z([s(`wui-active-profile-wallet-item`)],B);var Kt=c`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends f{constructor(){super(...arguments),this.address=``,this.profileName=``,this.alt=``,this.buttonLabel=``,this.buttonVariant=`accent-primary`,this.imageSrc=``,this.icon=void 0,this.iconSize=`md`,this.iconBadgeSize=`md`,this.rightIcon=`signOut`,this.rightIconSize=`md`,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return r`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?r`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?r`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:r`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return r`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${l.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return r`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${o(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent(`buttonClick`,{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent(`iconClick`,{bubbles:!0,composed:!0}))}};H.styles=[d,i,Kt],V([n()],H.prototype,`address`,void 0),V([n()],H.prototype,`profileName`,void 0),V([n()],H.prototype,`alt`,void 0),V([n()],H.prototype,`buttonLabel`,void 0),V([n()],H.prototype,`buttonVariant`,void 0),V([n()],H.prototype,`imageSrc`,void 0),V([n()],H.prototype,`icon`,void 0),V([n()],H.prototype,`iconSize`,void 0),V([n()],H.prototype,`iconBadge`,void 0),V([n()],H.prototype,`iconBadgeSize`,void 0),V([n()],H.prototype,`rightIcon`,void 0),V([n()],H.prototype,`rightIconSize`,void 0),V([n({type:Boolean})],H.prototype,`loading`,void 0),V([n({type:Number})],H.prototype,`charsStart`,void 0),V([n({type:Number})],H.prototype,`charsEnd`,void 0),H=V([s(`wui-inactive-profile-wallet-item`)],H);var qt={getAuthData(e){let t=e.connectorId===x.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let n=e?.auth?.name??ee.getConnectedSocialProvider(),r=e?.auth?.username??ee.getConnectedSocialUsername(),i=v.getAuthConnector()?.provider.getEmail()??``;return{isAuth:!0,icon:n??`mail`,iconSize:n?`xl`:`md`,name:t?fe.getAuthName({email:i,socialUsername:r,socialProvider:n}):void 0}}},Jt=c`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`,U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:`md`,ICON:`lightbulb`},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},Yt={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,ton:`ton`,tron:`tron`},Xt=[{namespace:`eip155`,icon:Yt.eip155,label:`EVM`},{namespace:`solana`,icon:Yt.solana,label:`Solana`},{namespace:`bip122`,icon:Yt.bip122,label:`Bitcoin`},{namespace:`ton`,icon:Yt.ton,label:`Ton`},{namespace:`tron`,icon:Yt.tron,label:`Tron`}],Zt={eip155:{title:`Add EVM Wallet`,description:`Add your first EVM wallet`},solana:{title:`Add Solana Wallet`,description:`Add your first Solana wallet`},bip122:{title:`Add Bitcoin Wallet`,description:`Add your first Bitcoin wallet`},ton:{title:`Add TON Wallet`,description:`Add your first TON wallet`},tron:{title:`Add TRON Wallet`,description:`Add your first TRON wallet`}},G=class extends f{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=b.state.activeChain,this.namespaces=Array.from(b.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=v.state.activeConnectorIds,this.lastSelectedAddress=``,this.lastSelectedConnectorId=``,this.isSwitching=!1,this.caipNetwork=b.state.activeCaipNetwork,this.user=b.getAccountData()?.user,this.remoteFeatures=T.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=b.getAccountData(this.namespace)?.caipAddress,this.profileName=b.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(y.subscribeKey(`connections`,()=>this.onConnectionsChange()),y.subscribeKey(`recentConnections`,()=>this.requestUpdate()),v.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),b.subscribeKey(`activeCaipNetwork`,e=>this.caipNetwork=e),b.subscribeChainProp(`accountState`,e=>{this.user=e?.user}),T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e)),this.chainListener=b.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(`.wallet-list`);if(!e)return;let t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener(`scroll`,t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){let e=this.namespace;if(!e)throw Error(`Namespace is not set`);return r`
      <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=this.namespaces.map(e=>Xt.find(t=>t.namespace===e)).filter(Boolean);return e.length>1?r`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+ +!!this.caipAddress;return r`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Yt[e]??Yt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?`Wallets`:`Wallet`}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>y.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return r`
      <wui-flex flexDirection="column" class=${u({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),n=this.activeConnectorIds[e],i=this.getPlainAddress();return r`
      ${i||n||t.length>0?r`<wui-flex
            flexDirection="column"
            .padding=${[`4`,`0`,`4`,`0`]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:n}=oe.getConnectionsData(e),i=v.getConnectorById(t),a=h.getConnectorImage(i),o=this.getPlainAddress();if(!o)return null;let s=e===x.CHAIN.BITCOIN,c=qt.getAuthData({connectorId:t,accounts:[]}),l=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=n.find(e=>e.connectorId===t),d=u?.accounts.filter(e=>!D.isLowerCaseMatch(e.address,o));return r`
      <wui-flex flexDirection="column" .padding=${[`0`,`4`,`0`,`4`]}>
        <wui-active-profile-wallet-item
          address=${o}
          alt=${i?.name}
          .content=${this.getProfileContent({address:o,connections:n,connectorId:t,namespace:e})}
          .charsStart=${W.ADDRESS_DISPLAY.START}
          .charsEnd=${W.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(o)?W.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(o)?W.BADGE.SIZE:void 0}
          imageSrc=${a}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(o)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{s&&u&&d?.[0]&&this.handleSwitchWallet(u,d[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(o)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${l?r`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return t.length===0?null:r`
      <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=oe.getConnectionsData(e);return t.flatMap(e=>e.accounts).length===0?null:r`
      <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,n){return e.filter(e=>e.accounts.length>0).map((e,i)=>{let a=v.getConnectorById(e.connectorId),o=h.getConnectorImage(a)??``,s=qt.getAuthData(e);return e.accounts.map((a,c)=>{let l=i!==0||c!==0,u=this.isAccountLoading(e.connectorId,a.address);return r`
            <wui-flex flexDirection="column">
              ${l?r`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${a.address}
                alt=${e.connectorId}
                buttonLabel=${t?`Connect`:`Switch`}
                buttonVariant=${t?`neutral-secondary`:`accent-secondary`}
                rightIcon=${t?`bin`:`power`}
                rightIconSize="sm"
                class=${t?`recent-connection`:`active-connection`}
                data-testid=${t?`recent-connection`:`active-connection`}
                imageSrc=${o}
                .iconBadge=${this.isSmartAccount(a.address)?W.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(a.address)?W.BADGE.SIZE:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${u}
                .showBalance=${!1}
                .charsStart=${W.ADDRESS_DISPLAY.START}
                .charsEnd=${W.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(e,a.address,n)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:a.address,isRecentConnection:t,namespace:n})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return r`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:n}=this.getChainLabelInfo(e);return r`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${n}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=b.getAccountData(t)?.caipAddress,this.profileName=b.getAccountData(t)?.profileName,this.chainListener=b.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,n){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,this.caipNetwork?.chainNamespace!==n&&e?.caipNetwork&&(v.setFilterByNamespace(n),await b.switchActiveNetwork(e?.caipNetwork)),await y.switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?m.showSuccess(`Wallet switched`):e&&m.showSuccess(`Account switched`)}})}catch{m.showError(`Failed to switch wallet`)}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:n,isRecentConnection:r,namespace:i}=e;r?(ee.deleteAddressFromConnection({connectorId:t.connectorId,address:n,namespace:i}),y.syncStorageConnections(),m.showSuccess(`Wallet deleted`)):this.handleDisconnect(i,t.connectorId)}async handleDisconnect(e,t){try{await y.disconnect({id:t,namespace:e}),m.showSuccess(`Wallet disconnected`)}catch{m.showError(`Failed to disconnect wallet`)}}handleCopyAddress(e){_.copyToClopboard(e),m.showSuccess(`Address copied`)}handleMore(){p.push(`AccountSettings`)}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&_.openHref(`${t}/address/${e}`,`_blank`)}handleAddConnection(e){v.setFilterByNamespace(e),p.push(`Connect`,{addWalletForNamespace:e})}getChainLabelInfo(e){return Zt[e]??{title:`Add Wallet`,description:`Add your first wallet`}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>e.type===`smartAccount`);return t&&e?D.isLowerCaseMatch(t.address,e):!1}getPlainAddress(){return this.caipAddress?_.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:n}=oe.getConnectionsData(e),[r]=n.filter(e=>D.isLowerCaseMatch(e.connectorId,t));if(!t)return n;let i=e===x.CHAIN.BITCOIN,{address:a}=this.caipAddress?ue.parseCaipAddress(this.caipAddress):{},o=[...a?[a]:[]];return i&&r&&(o=r.accounts.map(e=>e.address)||[]),oe.excludeConnectorAddressFromConnections({connectorId:t,addresses:o,connections:n})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:n}=oe.getConnectionsData(e);return!!this.caipAddress||t.length>0||n.length>0}isAccountLoading(e,t){return D.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&D.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:n,connectorId:r,namespace:i}=e,[a]=n.filter(e=>D.isLowerCaseMatch(e.connectorId,r));if(i===x.CHAIN.BITCOIN&&a?.accounts.every(e=>typeof e.type==`string`))return this.getBitcoinProfileContent(a.accounts,t);let o=qt.getAuthData({connectorId:r,accounts:[]});return[{address:t,tagLabel:`Active`,tagVariant:`success`,enableButton:!0,profileName:this.profileName,buttonType:`disconnect`,buttonLabel:`Disconnect`,buttonVariant:`neutral-secondary`,...o.isAuth?{description:this.isSmartAccount(t)?`Smart Account`:`EOA Account`}:{}}]}getBitcoinProfileContent(e,t){let n=e.length>1,r=this.getPlainAddress();return e.map(e=>{let i=D.isLowerCaseMatch(e.address,r),a=`PAYMENT`;return e.type===`ordinal`&&(a=`ORDINALS`),{address:e.address,tagLabel:D.isLowerCaseMatch(e.address,t)?`Active`:void 0,tagVariant:D.isLowerCaseMatch(e.address,t)?`success`:void 0,enableButton:!0,...n?{label:a,alignItems:`flex-end`,buttonType:i?`disconnect`:`switch`,buttonLabel:i?`Disconnect`:`Switch`,buttonVariant:i?`neutral-secondary`:`accent-secondary`}:{alignItems:`center`,buttonType:`disconnect`,buttonLabel:`Disconnect`,buttonVariant:`neutral-secondary`}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(`.wallet-list`);e&&e.removeEventListener(`scroll`,()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(`.wallet-list`);e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty(`--connect-scroll--top-opacity`,he.interpolate([0,W.SCROLL_THRESHOLD],W.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty(`--connect-scroll--bottom-opacity`,he.interpolate([0,W.SCROLL_THRESHOLD],W.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){let{connections:e}=oe.getConnectionsData(this.namespace);e.length===0&&p.reset(`ProfileWallets`)}this.requestUpdate()}};G.styles=Jt,U([a()],G.prototype,`currentTab`,void 0),U([a()],G.prototype,`namespace`,void 0),U([a()],G.prototype,`namespaces`,void 0),U([a()],G.prototype,`caipAddress`,void 0),U([a()],G.prototype,`profileName`,void 0),U([a()],G.prototype,`activeConnectorIds`,void 0),U([a()],G.prototype,`lastSelectedAddress`,void 0),U([a()],G.prototype,`lastSelectedConnectorId`,void 0),U([a()],G.prototype,`isSwitching`,void 0),U([a()],G.prototype,`caipNetwork`,void 0),U([a()],G.prototype,`user`,void 0),U([a()],G.prototype,`remoteFeatures`,void 0),G=U([s(`w3m-profile-wallets-view`)],G);var Qt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$t=class extends f{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=b.state.activeCaipNetwork,this.features=T.state.features,this.remoteFeatures=T.state.remoteFeatures,this.exchangesLoading=E.state.isLoading,this.exchanges=E.state.exchanges,this.unsubscribe.push(T.subscribeKey(`features`,e=>this.features=e),T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),b.subscribeKey(`activeCaipNetwork`,e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()}),E.subscribeKey(`isLoading`,e=>this.exchangesLoading=e),E.subscribeKey(`exchanges`,e=>this.exchanges=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){E.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await E.fetchExchanges())}render(){return r`
      <wui-flex flexDirection="column" .padding=${[`1`,`3`,`3`,`3`]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;let e=await E.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),t=e.find(e=>e.metadata.symbol===`USDC`)||e[0];t&&E.setPaymentAsset(t)}onrampTemplate(){if(!this.activeCaipNetwork)return null;let e=this.remoteFeatures?.onramp,t=g.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!e||!t?null:r`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!E.isPayWithExchangeSupported()?null:r`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){return this.features?.receive?r`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){p.push(`OnRampProviders`)}onReceive(){p.push(`WalletReceive`)}onDepositFromExchange(){E.reset(),p.push(`PayWithExchange`,{redirectView:p.state.data?.redirectView})}};Qt([a()],$t.prototype,`activeCaipNetwork`,void 0),Qt([a()],$t.prototype,`features`,void 0),Qt([a()],$t.prototype,`remoteFeatures`,void 0),Qt([a()],$t.prototype,`exchangesLoading`,void 0),Qt([a()],$t.prototype,`exchanges`,void 0),$t=Qt([s(`w3m-fund-wallet-view`)],$t);var en=c`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`,tn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},nn=class extends f{constructor(){super(...arguments),this.inputElementRef=ye(),this.checked=!1,this.disabled=!1,this.size=`md`}render(){return r`
      <label data-size=${this.size}>
        <input
          ${ve(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent(`switchChange`,{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};nn.styles=[d,i,en],tn([n({type:Boolean})],nn.prototype,`checked`,void 0),tn([n({type:Boolean})],nn.prototype,`disabled`,void 0),tn([n()],nn.prototype,`size`,void 0),nn=tn([s(`wui-toggle`)],nn);var rn=c`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,an=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},on=class extends f{constructor(){super(...arguments),this.checked=!1}render(){return r`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent(`certifiedSwitchChange`,{detail:this.checked,bubbles:!0,composed:!0}))}};on.styles=[d,i,rn],an([n({type:Boolean})],on.prototype,`checked`,void 0),on=an([s(`wui-certified-switch`)],on);var sn=c`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`,cn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ln=class extends f{constructor(){super(...arguments),this.inputComponentRef=ye(),this.inputValue=``}render(){return r`
      <wui-input-text
        ${ve(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?r`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||``}clearValue(){let e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value=``,this.inputValue=``,e.focus(),e.dispatchEvent(new Event(`input`)))}};ln.styles=[d,sn],cn([n()],ln.prototype,`inputValue`,void 0),ln=cn([s(`wui-search-bar`)],ln);var un=c`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,dn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fn=class extends f{constructor(){super(...arguments),this.type=`wallet`}render(){return r`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type===`network`?r` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${ge}`:r`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};fn.styles=[d,i,un],dn([n()],fn.prototype,`type`,void 0),fn=dn([s(`wui-card-select-loader`)],fn);var pn=t`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,K=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},q=class extends f{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&l.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&l.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&l.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&l.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&l.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&l.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&l.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&l.getSpacingStyles(this.margin,3)};
    `,r`<slot></slot>`}};q.styles=[d,pn],K([n()],q.prototype,`gridTemplateRows`,void 0),K([n()],q.prototype,`gridTemplateColumns`,void 0),K([n()],q.prototype,`justifyItems`,void 0),K([n()],q.prototype,`alignItems`,void 0),K([n()],q.prototype,`justifyContent`,void 0),K([n()],q.prototype,`alignContent`,void 0),K([n()],q.prototype,`columnGap`,void 0),K([n()],q.prototype,`rowGap`,void 0),K([n()],q.prototype,`gap`,void 0),K([n()],q.prototype,`padding`,void 0),K([n()],q.prototype,`margin`,void 0),q=K([s(`wui-grid`)],q);var mn=c`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-1`]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends f{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId=``,this.walletQuery=``,this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type===`certified`;return r`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${o(e?`certified`:void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?r`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():r`
      <wui-wallet-image
        size="lg"
        imageSrc=${o(this.imageSrc)}
        name=${o(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return r`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=h.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await h.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,C.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:p.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Y.styles=mn,J([a()],Y.prototype,`visible`,void 0),J([a()],Y.prototype,`imageSrc`,void 0),J([a()],Y.prototype,`imageLoading`,void 0),J([a()],Y.prototype,`isImpressed`,void 0),J([n()],Y.prototype,`explorerId`,void 0),J([n()],Y.prototype,`walletQuery`,void 0),J([n()],Y.prototype,`certified`,void 0),J([n()],Y.prototype,`displayIndex`,void 0),J([n({type:Object})],Y.prototype,`wallet`,void 0),Y=J([s(`w3m-all-wallets-list-item`)],Y);var hn=c`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-inout-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,gn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_n=`local-paginator`,vn=class extends f{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!S.state.wallets.length,this.wallets=S.state.wallets,this.mobileFullScreen=T.state.enableMobileFullScreen,this.unsubscribe.push(S.subscribeKey(`wallets`,e=>this.wallets=e))}firstUpdated(){this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return r`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector(`wui-grid`);e&&(await S.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>r`
        <wui-card-select-loader type="wallet" id=${o(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return ae.getWalletConnectWallets(this.wallets).map((e,t)=>r`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${this.badge===`certified`}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:n,count:r,mobileFilteredOutWalletsLength:i}=S.state,a=window.innerWidth<352?3:4,o=e.length+t.length,s=Math.ceil(o/a)*a-o+a;return s-=e.length?n.length%a:0,r===0&&n.length>0?null:r===0||[...n,...e,...t].length<r-(i??0)?this.shimmerTemplate(s,_n):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${_n}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:n}=S.state;n.length<t&&S.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){v.selectWalletConnector(e)}};vn.styles=hn,gn([a()],vn.prototype,`loading`,void 0),gn([a()],vn.prototype,`wallets`,void 0),gn([a()],vn.prototype,`badge`,void 0),gn([a()],vn.prototype,`mobileFullScreen`,void 0),vn=gn([s(`w3m-all-wallets-list`)],vn);var yn=t`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,bn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xn=class extends f{constructor(){super(...arguments),this.prevQuery=``,this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=T.state.enableMobileFullScreen,this.query=``}render(){return this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.onSearch(),this.loading?r`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await S.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=S.state,t=ae.markWalletsAsInstalled(e),n=ae.filterWalletsByWcSupport(t);return n.length?r`
      <wui-grid
        data-testid="wallet-list"
        .padding=${[`0`,`3`,`3`,`3`]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${n.map((e,t)=>r`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${this.badge===`certified`}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:r`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){v.selectWalletConnector(e)}};xn.styles=yn,bn([a()],xn.prototype,`loading`,void 0),bn([a()],xn.prototype,`mobileFullScreen`,void 0),bn([n()],xn.prototype,`query`,void 0),bn([n()],xn.prototype,`badge`,void 0),xn=bn([s(`w3m-all-wallets-search`)],xn);var Sn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cn=class extends f{constructor(){super(...arguments),this.search=``,this.badge=void 0,this.onDebouncedSearch=_.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return r`
      <wui-flex .padding=${[`1`,`3`,`3`,`3`]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge===`certified`}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?r`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:r`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge=`certified`,m.showSvg(`Only WalletConnect certified`,{icon:`walletConnectBrown`,iconColor:`accent-100`})):this.badge=void 0}qrButtonTemplate(){return _.isMobile()?r`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){p.push(`ConnectingWalletConnect`)}};Sn([a()],Cn.prototype,`search`,void 0),Sn([a()],Cn.prototype,`badge`,void 0),Cn=Sn([s(`w3m-all-wallets-view`)],Cn);var wn=c`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`,Tn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},En=class extends f{constructor(){super(...arguments),this.text=``,this.disabled=!1,this.size=`lg`,this.icon=`copy`,this.tabIdx=void 0}render(){this.dataset.size=this.size;let e=`${this.size}-regular`;return r`
      <button ?disabled=${this.disabled} tabindex=${o(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};En.styles=[d,i,wn],Tn([n()],En.prototype,`text`,void 0),Tn([n({type:Boolean})],En.prototype,`disabled`,void 0),Tn([n()],En.prototype,`size`,void 0),Tn([n()],En.prototype,`icon`,void 0),Tn([n()],En.prototype,`tabIdx`,void 0),En=Tn([s(`wui-list-button`)],En);var Dn=c`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`,On=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kn=class extends f{constructor(){super(),this.unsubscribe=[],this.formRef=ye(),this.email=``,this.loading=!1,this.error=``,this.remoteFeatures=T.state.remoteFeatures,this.hasExceededUsageLimit=S.state.plan.hasExceededUsageLimit,this.unsubscribe.push(T.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}),S.subscribeKey(`plan`,e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){let e=y.hasAnyConnection(x.CONNECTOR_ID.AUTH);return r`
      <form ${ve(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${o(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?r`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?r`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?r`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=``}async onSubmitEmail(e){if(!_e.isValidEmail(this.email))xe.open({displayMessage:we.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},`warning`);else{if(!x.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===b.state.activeChain)){let e=b.getFirstCaipNetworkSupportsAuthConnector();if(e){p.push(`SwitchNetwork`,{network:e});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=v.getAuthConnector();if(!t)throw Error(`w3m-email-login-widget: Auth connector not found`);let{action:n}=await t.provider.connectEmail({email:this.email});if(C.sendEvent({type:`track`,event:`EMAIL_SUBMITTED`}),n===`VERIFY_OTP`)C.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),p.push(`EmailVerifyOtp`,{email:this.email});else if(n===`VERIFY_DEVICE`)p.push(`EmailVerifyDevice`,{email:this.email});else if(n===`CONNECT`){let e=this.remoteFeatures?.multiWallet;await y.connectExternal(t,b.state.activeChain),e?(p.replace(`ProfileWallets`),m.showSuccess(`New Wallet Added`)):p.replace(`Account`)}}catch(e){_.parseError(e)?.includes(`Invalid email`)?this.error=`Invalid email. Try again.`:m.showError(e)}finally{this.loading=!1}}}onFocusEvent(){C.sendEvent({type:`track`,event:`EMAIL_LOGIN_SELECTED`})}};kn.styles=Dn,On([n()],kn.prototype,`tabIdx`,void 0),On([a()],kn.prototype,`email`,void 0),On([a()],kn.prototype,`loading`,void 0),On([a()],kn.prototype,`error`,void 0),On([a()],kn.prototype,`remoteFeatures`,void 0),On([a()],kn.prototype,`hasExceededUsageLimit`,void 0),kn=On([s(`w3m-email-login-widget`)],kn);var An=c`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,jn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Mn=class extends f{constructor(){super(...arguments),this.logo=`google`,this.disabled=!1,this.tabIdx=void 0}render(){return r`
      <button ?disabled=${this.disabled} tabindex=${o(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};Mn.styles=[d,i,An],jn([n()],Mn.prototype,`logo`,void 0),jn([n({type:Boolean})],Mn.prototype,`disabled`,void 0),jn([n()],Mn.prototype,`tabIdx`,void 0),Mn=jn([s(`wui-logo-select`)],Mn);var Nn=c`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,Pn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fn=2,In=6,Ln=class extends f{constructor(){super(),this.unsubscribe=[],this.walletGuide=`get-started`,this.tabIdx=void 0,this.connectors=v.state.connectors,this.remoteFeatures=T.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.isPwaLoading=!1,this.hasExceededUsageLimit=S.state.plan.hasExceededUsageLimit,this.unsubscribe.push(v.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),S.subscribeKey(`plan`,e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e=this.walletGuide===`explore`,t=this.remoteFeatures?.socials;return!t&&e?(t=g.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return e.length===2?r` <wui-flex gap="2">
        ${e.slice(0,Fn).map(e=>r`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${o(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:r` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${o(e[0])}
      text=${`Continue with ${l.capitalize(e[0])}`}
      tabIdx=${o(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t=this.walletGuide===`explore`;return this.authConnector&&e&&e.length!==0||!t||(e=g.DEFAULT_SOCIALS),!e||e.length<=Fn?null:e&&e.length>In?r`<wui-flex gap="2">
        ${e.slice(1,5).map(e=>r`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${o(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${o(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?r`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>r`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${o(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){p.push(`ConnectSocials`)}async onSocialClick(e){if(this.hasExceededUsageLimit)p.push(`UsageExceeded`);else{if(!x.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===b.state.activeChain)){let e=b.getFirstCaipNetworkSupportsAuthConnector();if(e){p.push(`SwitchNetwork`,{network:e});return}}e&&await Se(e)}}async handlePwaFrameLoad(){if(_.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof Ce&&await this.authConnector.provider.init()}catch(e){xe.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}hasConnection(){return y.hasAnyConnection(x.CONNECTOR_ID.AUTH)}};Ln.styles=Nn,Pn([n()],Ln.prototype,`walletGuide`,void 0),Pn([n()],Ln.prototype,`tabIdx`,void 0),Pn([a()],Ln.prototype,`connectors`,void 0),Pn([a()],Ln.prototype,`remoteFeatures`,void 0),Pn([a()],Ln.prototype,`authConnector`,void 0),Pn([a()],Ln.prototype,`isPwaLoading`,void 0),Pn([a()],Ln.prototype,`hasExceededUsageLimit`,void 0),Ln=Pn([s(`w3m-social-login-widget`)],Ln);var Rn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zn=class extends f{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=v.state.connectors,this.count=S.state.count,this.filteredCount=S.state.filteredWallets.length,this.isFetchingRecommendedWallets=S.state.isFetchingRecommendedWallets,this.unsubscribe.push(v.subscribeKey(`connectors`,e=>this.connectors=e),S.subscribeKey(`count`,e=>this.count=e),S.subscribeKey(`filteredWallets`,e=>this.filteredCount=e.length),S.subscribeKey(`isFetchingRecommendedWallets`,e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>e.id===`walletConnect`),{allWallets:t}=T.state;if(!e||t===`HIDE`||t===`ONLY_MOBILE`&&!_.isMobile())return null;let n=S.state.featured.length,i=this.count+n,a=i<10?i:Math.floor(i/10)*10,s=this.filteredCount>0?this.filteredCount:a,c=`${s}`;this.filteredCount>0?c=`${this.filteredCount}`:s<i&&(c=`${s}+`);let l=y.hasAnyConnection(x.CONNECTOR_ID.WALLET_CONNECT);return r`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${o(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){C.sendEvent({type:`track`,event:`CLICK_ALL_WALLETS`}),p.push(`AllWallets`,{redirectView:p.state.data?.redirectView})}};Rn([n()],zn.prototype,`tabIdx`,void 0),Rn([a()],zn.prototype,`connectors`,void 0),Rn([a()],zn.prototype,`count`,void 0),Rn([a()],zn.prototype,`filteredCount`,void 0),Rn([a()],zn.prototype,`isFetchingRecommendedWallets`,void 0),zn=Rn([s(`w3m-all-wallets-widget`)],zn);var Bn=c`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,Vn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hn=class extends f{constructor(){super(),this.unsubscribe=[],this.explorerWallets=S.state.explorerWallets,this.connections=y.state.connections,this.connectorImages=te.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(y.subscribeKey(`connections`,e=>this.connections=e),te.subscribeKey(`connectorImages`,e=>this.connectorImages=e),S.subscribeKey(`explorerFilteredWallets`,e=>{this.explorerWallets=e?.length?e:S.state.explorerWallets}),S.subscribeKey(`explorerWallets`,e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),_.isTelegram()&&_.isIos()&&(this.loadingTelegram=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey(`wcUri`,e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return fe.connectorList().map((e,t)=>e.kind===`connector`?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return e.subtype===`walletConnect`?[]:e.subtype===`multiChain`?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){let n=e.connector,i=h.getConnectorImage(n)||this.connectorImages[n?.imageId??``],a=(this.connections.get(n.chain)??[]).some(e=>D.isLowerCaseMatch(e.connectorId,n.id)),s,c;e.subtype===`walletConnect`?(s=`qr code`,c=`accent`):e.subtype===`injected`||e.subtype===`announced`?(s=a?`connected`:`installed`,c=a?`info`:`success`):(s=void 0,c=void 0);let l=y.hasAnyConnection(x.CONNECTOR_ID.WALLET_CONNECT),u=e.subtype===`walletConnect`||e.subtype===`external`?l:!1;return r`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${o(i)}
        .installed=${!0}
        name=${n.name??`Unknown`}
        .tagVariant=${c}
        tagLabel=${o(s)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${o(this.tabIdx)}
        ?disabled=${u}
        rdnsId=${o(n.explorerWallet?.rdns||void 0)}
        walletRank=${o(n.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=p.state.data?.redirectView;if(e.subtype===`walletConnect`)v.setActiveConnector(e.connector),_.isMobile()?p.push(`AllWallets`):p.push(`ConnectingWalletConnect`,{redirectView:t});else if(e.subtype===`multiChain`)v.setActiveConnector(e.connector),p.push(`ConnectingMultiChain`,{redirectView:t});else if(e.subtype===`injected`)v.setActiveConnector(e.connector),p.push(`ConnectingExternal`,{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});else if(e.subtype===`announced`){if(e.connector.id===`walletConnect`){_.isMobile()?p.push(`AllWallets`):p.push(`ConnectingWalletConnect`,{redirectView:t});return}p.push(`ConnectingExternal`,{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet})}else p.push(`ConnectingExternal`,{connector:e.connector,redirectView:t})}renderWallet(e,t){let n=e.wallet,i=h.getWalletImage(n),a=y.hasAnyConnection(x.CONNECTOR_ID.WALLET_CONNECT),s=this.loadingTelegram,c=e.subtype===`recent`?`recent`:void 0,l=e.subtype===`recent`?`info`:void 0;return r`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${o(i)}
        name=${n.name??`Unknown`}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${n.id}`}
        tabIdx=${o(this.tabIdx)}
        ?loading=${s}
        ?disabled=${a}
        rdnsId=${o(n.rdns||void 0)}
        walletRank=${o(n.order)}
        tagLabel=${o(c)}
        .tagVariant=${l}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=p.state.data?.redirectView,n=b.state.activeChain;if(e.subtype===`featured`){v.selectWalletConnector(e.wallet);return}if(e.subtype===`recent`){if(this.loadingTelegram)return;v.selectWalletConnector(e.wallet);return}if(e.subtype===`custom`){if(this.loadingTelegram)return;p.push(`ConnectingWalletConnect`,{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let r=n?v.getConnector({id:e.wallet.id,namespace:n}):void 0;r?p.push(`ConnectingExternal`,{connector:r,redirectView:t}):p.push(`ConnectingWalletConnect`,{wallet:e.wallet,redirectView:t})}};Hn.styles=Bn,Vn([n({type:Number})],Hn.prototype,`tabIdx`,void 0),Vn([a()],Hn.prototype,`explorerWallets`,void 0),Vn([a()],Hn.prototype,`connections`,void 0),Vn([a()],Hn.prototype,`connectorImages`,void 0),Vn([a()],Hn.prototype,`loadingTelegram`,void 0),Hn=Vn([s(`w3m-connector-list`)],Hn);var Un=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wn=class extends f{constructor(){super(...arguments),this.tabIdx=void 0}render(){return r`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${o(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${o(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Un([n()],Wn.prototype,`tabIdx`,void 0),Wn=Un([s(`w3m-wallet-login-list`)],Wn);var Gn=c`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,X=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kn=470,Z=class extends f{constructor(){super(),this.unsubscribe=[],this.connectors=v.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.features=T.state.features,this.remoteFeatures=T.state.remoteFeatures,this.enableWallets=T.state.enableWallets,this.noAdapters=b.state.noAdapters,this.walletGuide=`get-started`,this.checked=be.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!b.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!b.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(v.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),T.subscribeKey(`features`,e=>{this.features=e}),T.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),T.subscribeKey(`enableWallets`,e=>this.enableWallets=e),b.subscribeKey(`noAdapters`,e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),be.subscribeKey(`isLegalCheckboxChecked`,e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect(),(this.shadowRoot?.querySelector(`.connect`))?.removeEventListener(`scroll`,this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(`.connect`);e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener(`scroll`,this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=T.state,n=T.state.features?.legalCheckbox,i=!!(e||t)&&!!n&&this.walletGuide===`get-started`&&!this.checked,a={connect:!0,disabled:i},o=T.state.enableWalletGuide,s=this.enableWallets,c=this.isSocialEnabled||this.authConnector,l=i?-1:void 0;return r`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${[`0`,`0`,`4`,`0`]}
          class=${u(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${c&&s&&o&&this.walletGuide===`get-started`?[`0`,`3`,`0`,`3`]:[`0`,`3`,`3`,`3`]}
          >
            ${this.renderConnectMethod(l)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return _e.hasFooter()||!this.remoteFeatures?.reownBranding?null:r`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===O.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return x.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){let t=ae.getConnectOrderMethod(this.features,this.connectors);return r`${t.map((t,n)=>{switch(t){case`email`:return r`${this.emailTemplate(e)} ${this.separatorTemplate(n,`email`)}`;case`social`:return r`${this.socialListTemplate(e)}
          ${this.separatorTemplate(n,`social`)}`;case`wallet`:return r`${this.walletListTemplate(e)}
          ${this.separatorTemplate(n,`wallet`)}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case`wallet`:return this.enableWallets;case`social`:return this.isSocialEnabled&&this.isAuthEnabled;case`email`:return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=ae.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){let n=this.checkIsThereNextMethod(e),i=this.walletGuide===`explore`;switch(t){case`wallet`:return this.enableWallets&&n&&!i?r`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case`email`:{let e=n===`social`;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&n?r`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case`social`:{let e=n===`email`;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&n?r`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:r`<w3m-email-login-widget tabIdx=${o(e)}></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:r`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${o(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){let t=this.enableWallets,n=this.features?.emailShowWallets===!1,i=this.features?.collapseWallets,a=n||i;return!t||(_.isTelegram()&&(_.isSafari()||_.isIos())&&y.connectWalletConnect().catch(e=>({})),this.walletGuide===`explore`)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&a?r`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${o(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:r`<w3m-wallet-login-list tabIdx=${o(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide===`explore`?null:r`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(`.connect`);e&&(e.scrollHeight>Kn?(e.style.setProperty(`--connect-mask-image`,`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty(`--connect-scroll--top-opacity`,he.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty(`--connect-scroll--bottom-opacity`,he.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty(`--connect-mask-image`,`none`),e.style.setProperty(`--connect-scroll--top-opacity`,`0`),e.style.setProperty(`--connect-scroll--bottom-opacity`,`0`)))}onContinueWalletClick(){p.push(`ConnectWallets`)}};Z.styles=Gn,X([a()],Z.prototype,`connectors`,void 0),X([a()],Z.prototype,`authConnector`,void 0),X([a()],Z.prototype,`features`,void 0),X([a()],Z.prototype,`remoteFeatures`,void 0),X([a()],Z.prototype,`enableWallets`,void 0),X([a()],Z.prototype,`noAdapters`,void 0),X([n()],Z.prototype,`walletGuide`,void 0),X([a()],Z.prototype,`checked`,void 0),X([a()],Z.prototype,`isEmailEnabled`,void 0),X([a()],Z.prototype,`isSocialEnabled`,void 0),X([a()],Z.prototype,`isAuthEnabled`,void 0),Z=X([s(`w3m-connect-view`)],Z);var qn=c`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
    min-width: 0;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  wui-button {
    flex-shrink: 0;
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`,Jn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Yn=class extends f{constructor(){super(...arguments),this.disabled=!1,this.label=``,this.buttonLabel=``}render(){return r`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Yn.styles=[d,i,qn],Jn([n({type:Boolean})],Yn.prototype,`disabled`,void 0),Jn([n()],Yn.prototype,`label`,void 0),Jn([n()],Yn.prototype,`buttonLabel`,void 0),Yn=Jn([s(`wui-cta-button`)],Yn);var Xn=c`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`,Zn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qn=class extends f{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display=`none`,null;let{name:e,app_store:t,play_store:n,chrome_store:i,homepage:a}=this.wallet,o=_.isMobile(),s=_.isIos(),c=_.isAndroid(),l=[t,n,a,i].filter(Boolean).length>1;return l&&!o?r`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${()=>p.push(`Downloads`,{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&a?r`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?r`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&c?r`
        <wui-cta-button
          label=${`Don't have ${e}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display=`none`,null)}onAppStore(){this.wallet?.app_store&&_.openHref(this.wallet.app_store,`_blank`)}onPlayStore(){this.wallet?.play_store&&_.openHref(this.wallet.play_store,`_blank`)}onHomePage(){this.wallet?.homepage&&_.openHref(this.wallet.homepage,`_blank`)}};Qn.styles=[Xn],Zn([n({type:Object})],Qn.prototype,`wallet`,void 0),Qn=Zn([s(`w3m-mobile-download-links`)],Qn);var $n=c`
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

  wui-wallet-image {
    width: 56px;
    height: 56px;
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
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
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

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`,Q=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends f{constructor(){super(),this.wallet=p.state.data?.wallet,this.connector=p.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon=`refresh`,this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=h.getConnectorImage(this.connector)??h.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??`Wallet`,this.isRetrying=!1,this.uri=y.state.wcUri,this.error=y.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel=`Try again`,this.secondaryLabel=`Accept connection request in the wallet`,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(y.subscribeKey(`wcUri`,e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),y.subscribeKey(`wcError`,e=>this.error=e)),(_.isTelegram()||_.isSafari())&&_.isIos()&&y.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),y.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?`Connection can be declined if a previous request is still active`:this.secondaryLabel,t=``;return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t=`Connection declined`)),r`
      <wui-flex
        data-error=${o(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${o(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`,`0`,`0`,`0`]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?`error`:`primary`}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?r`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?r`
              <wui-flex .padding=${[`0`,`5`,`5`,`5`]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector(`wui-button`))?.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`}))}onTryAgain(){y.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=de.state.themeVariables[`--w3m-border-radius-master`],t=e?parseInt(e.replace(`px`,``),10):4;return r`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(_.copyToClopboard(this.uri),m.showSuccess(`Link copied`))}catch{m.showError(`Failed to copy`)}}};$.styles=$n,Q([a()],$.prototype,`isRetrying`,void 0),Q([a()],$.prototype,`uri`,void 0),Q([a()],$.prototype,`error`,void 0),Q([a()],$.prototype,`ready`,void 0),Q([a()],$.prototype,`showRetry`,void 0),Q([a()],$.prototype,`label`,void 0),Q([a()],$.prototype,`secondaryBtnLabel`,void 0),Q([a()],$.prototype,`secondaryLabel`,void 0),Q([a()],$.prototype,`isLoading`,void 0),Q([n({type:Boolean})],$.prototype,`isMobile`,void 0),Q([n()],$.prototype,`onRetry`,void 0);var er=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},tr=class extends ${constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=y.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=T.state.remoteFeatures,this.currentActiveConnectorId=v.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error(`w3m-connecting-view: No connector provided`);let e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.connector.name??`Unknown`,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(v.subscribeKey(`activeConnectorIds`,t=>{let n=t[e],r=this.remoteFeatures?.multiWallet,{redirectView:i}=p.state.data??{};n!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&r?(p.replace(`ProfileWallets`),m.showSuccess(`New Wallet Added`)):i?p.replace(i):w.close())}),y.subscribeKey(`connections`,this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==x.CONNECTOR_ID.COINBASE_SDK&&this.connector.id!==x.CONNECTOR_ID.BASE_ACCOUNT||!this.error)&&await y.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof ne&&e.originalName===se.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?C.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):C.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],n=this.remoteFeatures?.multiWallet;if(t.length===0)p.replace(`Connect`);else{let e=oe.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),r=oe.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);r.length===0?this.hasMultipleConnections&&n?(p.replace(`ProfileWallets`),m.showSuccess(`Wallet deleted`)):w.close():!e.every(e=>r.some(t=>D.isLowerCaseMatch(e.address,t.address)))&&n&&p.replace(`ProfileWallets`)}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>D.isLowerCaseMatch(t.connectorId,e.id))}};tr=er([s(`w3m-connecting-external-view`)],tr);var nr=t`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,rr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ir=class extends f{constructor(){super(),this.unsubscribe=[],this.activeConnector=v.state.activeConnector,this.unsubscribe.push(v.subscribeKey(`activeConnector`,e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`3`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${o(h.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`0`,`3`,`0`,`3`]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`,`0`,`2`,`0`]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e,t)=>e.name?r`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${o(h.getChainImage(e.chain))}
              name=${x.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain),n=p.state.data?.redirectView;t?t.id===`walletConnect`?_.isMobile()?p.push(`AllWallets`):p.push(`ConnectingWalletConnect`,{redirectView:n}):p.push(`ConnectingExternal`,{connector:t,redirectView:n,wallet:this.activeConnector?.explorerWallet}):m.showError(`Failed to find connector`)}};ir.styles=nr,rr([a()],ir.prototype,`activeConnector`,void 0),ir=rr([s(`w3m-connecting-multi-chain-view`)],ir);var ar=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},or=class extends f{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return r`
      <wui-flex justifyContent="center" .padding=${[`0`,`0`,`4`,`0`]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>e===`browser`?{label:`Browser`,icon:`extension`,platform:`browser`}:e===`mobile`?{label:`Mobile`,icon:`mobile`,platform:`mobile`}:e===`qrcode`?{label:`Mobile`,icon:`mobile`,platform:`qrcode`}:e===`web`?{label:`Webapp`,icon:`browser`,platform:`web`}:e===`desktop`?{label:`Desktop`,icon:`desktop`,platform:`desktop`}:{label:`Browser`,icon:`extension`,platform:`unsupported`});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ar([n({type:Array})],or.prototype,`platforms`,void 0),ar([n()],or.prototype,`onSelectPlatfrom`,void 0),or=ar([s(`w3m-connecting-header`)],or);var sr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},cr=class extends ${constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-browser: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=v.state,t=e.find(e=>e.type===`ANNOUNCED`&&e.info?.rdns===this.wallet?.rdns||e.type===`INJECTED`||e.name===this.wallet?.name);if(t)await y.connectExternal(t,t.chain);else throw Error(`w3m-connecting-wc-browser: No connector found`);(!T.state.siwx||await Ne.isAuthenticated())&&w.close()}catch(e){e instanceof ne&&e.originalName===se.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?C.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):C.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),this.error=!0}}};cr=sr([s(`w3m-connecting-wc-browser`)],cr);var lr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ur=class extends ${constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-desktop: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`desktop`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=_.formatNativeUrl(e,this.uri);y.setWcLinking({name:t,href:r}),y.setRecentWallet(this.wallet),_.openHref(n,`_blank`)}catch{this.error=!0}}};ur=lr([s(`w3m-connecting-wc-desktop`)],ur);var dr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},fr=class extends ${constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=T.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{oe.onConnectMobile(this.wallet)},!this.wallet)throw Error(`w3m-connecting-wc-mobile: No wallet provided`);this.secondaryBtnLabel=`Open`,this.secondaryLabel=g.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon=`externalLink`,this.onHandleURI(),this.unsubscribe.push(y.subscribeKey(`wcUri`,()=>{this.onHandleURI()})),C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`mobile`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){y.setWcError(!1),this.onConnect?.()}};dr([a()],fr.prototype,`redirectDeeplink`,void 0),dr([a()],fr.prototype,`redirectUniversalLink`,void 0),dr([a()],fr.prototype,`target`,void 0),dr([a()],fr.prototype,`preferUniversalLinks`,void 0),dr([a()],fr.prototype,`isLoading`,void 0),fr=dr([s(`w3m-connecting-wc-mobile`)],fr);var pr=c`
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,mr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hr=class extends ${constructor(){super(),this.basic=!1}firstUpdated(){this.basic||C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet?.name??`WalletConnect`,platform:`qrcode`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`0`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;y.setWcLinking(void 0),y.setRecentWallet(this.wallet);let t=de.state.themeVariables[`--apkt-qr-color`]??de.state.themeVariables[`--w3m-qr-color`];return r` <wui-qr-code
      theme=${de.state.themeMode}
      uri=${this.uri}
      imageSrc=${o(h.getWalletImage(this.wallet))}
      color=${o(t)}
      alt=${o(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return r`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};hr.styles=pr,mr([n({type:Boolean})],hr.prototype,`basic`,void 0),hr=mr([s(`w3m-connecting-wc-qrcode`)],hr);var gr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_r=class extends f{constructor(){if(super(),this.wallet=p.state.data?.wallet,!this.wallet)throw Error(`w3m-connecting-wc-unsupported: No wallet provided`);C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}})}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${o(h.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};_r=gr([s(`w3m-connecting-wc-unsupported`)],_r);var vr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yr=class extends ${constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error(`w3m-connecting-wc-web: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel=`Open`,this.secondaryLabel=g.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon=`externalLink`,this.updateLoadingState(),this.unsubscribe.push(y.subscribeKey(`wcUri`,()=>{this.updateLoadingState()})),C.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`web`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=_.formatUniversalUrl(e,this.uri);y.setWcLinking({name:t,href:r}),y.setRecentWallet(this.wallet),_.openHref(n,`_blank`)}catch{this.error=!0}}};vr([a()],yr.prototype,`isLoading`,void 0),yr=vr([s(`w3m-connecting-wc-web`)],yr);var br=c`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`,xr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Sr=class extends f{constructor(){super(),this.wallet=p.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!T.state.siwx,this.remoteFeatures=T.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return T.state.enableMobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),r`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:r`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){if(!(this.platform===`browser`||T.state.manualWCControl&&!e))try{let{wcPairingExpiry:t,status:n}=y.state,{redirectView:r}=p.state.data??{};if(e||T.state.enableEmbedded||_.isPairingExpired(t)||n===`connecting`){let e=y.getConnections(b.state.activeChain),t=this.remoteFeatures?.multiWallet,n=e.length>0;await y.connectWalletConnect({cache:`never`}),this.isSiwxEnabled||(n&&t?(p.replace(`ProfileWallets`),m.showSuccess(`New Wallet Added`)):r?p.replace(r):w.close())}}catch(e){if(e instanceof Error&&e.message.includes(`An error occurred when attempting to switch chain`)&&!T.state.enableNetworkSwitch&&b.state.activeChain){b.setActiveCaipNetwork(He.getUnsupportedNetwork(`${b.state.activeChain}:${b.state.activeCaipNetwork?.id}`)),b.showUnsupportedChainUI();return}e instanceof ne&&e.originalName===se.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?C.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):C.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),y.setWcError(!0),m.showError(e.message??`Connection error`),y.resetWcConnection(),p.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push(`qrcode`),this.platform=`qrcode`;return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i}=this.wallet,a=r?.map(({injected_id:e})=>e).filter(Boolean),o=[...i?[i]:a??[]],s=!T.state.isUniversalProvider&&o.length,c=e,l=n,u=y.checkInstalled(o),d=s&&u,f=t&&!_.isMobile();d&&!b.state.noAdapters&&this.platforms.push(`browser`),c&&this.platforms.push(_.isMobile()?`mobile`:`qrcode`),l&&this.platforms.push(`web`),f&&this.platforms.push(`desktop`);let p=le.isCustomDeeplinkWallet(this.wallet.id,b.state.activeChain);!d&&s&&!b.state.noAdapters&&!p&&this.platforms.push(`unsupported`),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case`browser`:return r`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case`web`:return r`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case`desktop`:return r`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case`mobile`:return r`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case`qrcode`:return r`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return r`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?r`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector(`div`);t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}};Sr.styles=br,xr([a()],Sr.prototype,`platform`,void 0),xr([a()],Sr.prototype,`platforms`,void 0),xr([a()],Sr.prototype,`isSiwxEnabled`,void 0),xr([a()],Sr.prototype,`remoteFeatures`,void 0),xr([n({type:Boolean})],Sr.prototype,`displayBranding`,void 0),xr([n({type:Boolean})],Sr.prototype,`basic`,void 0),Sr=xr([s(`w3m-connecting-wc-view`)],Sr);var Cr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wr=class extends f{constructor(){super(),this.unsubscribe=[],this.isMobile=_.isMobile(),this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(T.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=S.state,{customWallets:n}=T.state,i=ee.getRecentWallets(),a=e.length||t.length||n?.length||i.length;return r`<wui-flex flexDirection="column" gap="2" .margin=${[`1`,`3`,`3`,`3`]}>
        ${a?r`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return r`<wui-flex flexDirection="column" .padding=${[`0`,`0`,`4`,`0`]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${[`0`,`3`,`0`,`3`]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?r` <wui-flex flexDirection="column" .padding=${[`1`,`0`,`1`,`0`]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Cr([a()],wr.prototype,`isMobile`,void 0),Cr([a()],wr.prototype,`remoteFeatures`,void 0),wr=Cr([s(`w3m-connecting-wc-basic-view`)],wr);var Tr=t`
  .continue-button-container {
    width: 100%;
  }
`,Er=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dr=class extends f{constructor(){super(...arguments),this.loading=!1}render(){return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[`0`,`0`,`4`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{_.openHref(Pe.URLS.FAQ,`_blank`)}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return r` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[`0`,`6`,`0`,`6`]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return r`<wui-flex
      .padding=${[`0`,`8`,`0`,`8`]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){p.push(`RegisterAccountName`),C.sendEvent({type:`track`,event:`OPEN_ENS_FLOW`,properties:{isSmartAccount:ce(b.state.activeChain)===re.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Dr.styles=Tr,Er([a()],Dr.prototype,`loading`,void 0),Dr=Er([s(`w3m-choose-account-name-view`)],Dr);var Or=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},kr=class extends f{constructor(){super(...arguments),this.wallet=p.state.data?.wallet}render(){if(!this.wallet)throw Error(`w3m-downloads-view`);return r`
      <wui-flex gap="2" flexDirection="column" .padding=${[`3`,`3`,`4`,`3`]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?r`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?r`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?r`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?r`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(C.sendEvent({type:`track`,event:`GET_WALLET`,properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),_.openHref(e.href,`_blank`))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:`chrome_store`})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:`app_store`})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:`play_store`})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:`homepage`})}};kr=Or([s(`w3m-downloads-view`)],kr);var Ar=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jr=`https://walletguide.walletconnect.network`,Mr=class extends f{render(){return r`
      <wui-flex flexDirection="column" .padding=${[`0`,`3`,`3`,`3`]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{_.openHref(`https://walletguide.walletconnect.network/`,`_blank`)}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=S.state,{customWallets:n}=T.state;return[...t,...n??[],...e].slice(0,4).map((e,t)=>r`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name??`Unknown`}
          tagVariant="accent"
          size="sm"
          imageSrc=${o(h.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){C.sendEvent({type:`track`,event:`GET_WALLET`,properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:`homepage`}}),_.openHref(e.homepage??jr,`_blank`)}};Mr=Ar([s(`w3m-get-wallet-view`)],Mr);var Nr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pr=class extends f{constructor(){super(...arguments),this.data=[]}render(){return r`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>r`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>r`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Nr([n({type:Array})],Pr.prototype,`data`,void 0),Pr=Nr([s(`w3m-help-widget`)],Pr);var Fr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ir=[{images:[`login`,`profile`,`lock`],title:`One login for all of web3`,text:`Log in to any app by connecting your wallet. Say goodbye to countless passwords!`},{images:[`defi`,`nft`,`eth`],title:`A home for your digital assets`,text:`A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.`},{images:[`browser`,`noun`,`dao`],title:`Your gateway to a new web`,text:`With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.`}],Lr=class extends f{render(){return r`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`5`,`5`,`5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Ir}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){C.sendEvent({type:`track`,event:`CLICK_GET_WALLET_HELP`}),p.push(`GetWallet`)}};Lr=Fr([s(`w3m-what-is-a-wallet-view`)],Lr);var Rr=c`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
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
`,zr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Br=class extends f{constructor(){super(),this.unsubscribe=[],this.checked=be.state.isLegalCheckboxChecked,this.unsubscribe.push(be.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=T.state,n=T.state.features?.legalCheckbox,i=!!(e||t)&&!!n,a=i&&!this.checked,s=a?-1:void 0;return r`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?[`0`,`3`,`3`,`3`]:`3`}
        gap="2"
        class=${o(a?`disabled`:void 0)}
      >
        <w3m-wallet-login-list tabIdx=${o(s)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Br.styles=Rr,zr([a()],Br.prototype,`checked`,void 0),Br=zr([s(`w3m-connect-wallets-view`)],Br);var Vr=c`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Hr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ur=class extends f{render(){return r`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ur.styles=[d,Vr],Ur=Hr([s(`wui-loading-hexagon`)],Ur);var Wr=t`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Gr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Kr=class extends f{constructor(){super(),this.network=p.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error(`w3m-network-switch-view: No network provided`);this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return r`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`10`,`5`]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${o(h.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:r`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=v.getConnectorId(b.state.activeChain);return v.getAuthConnector()&&e===x.CONNECTOR_ID.AUTH?``:this.error?`Switch can be declined if chain is not supported by a wallet or previous request is still active`:`Accept connection request in your wallet`}getLabel(){let e=v.getConnectorId(b.state.activeChain);return v.getAuthConnector()&&e===x.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??`Unknown`} network...`:this.error?`Switch declined`:`Approve in wallet`}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector(`wui-button`))?.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`}))}async onSwitchNetwork(){try{this.error=!1,b.state.activeChain!==this.network?.chainNamespace&&b.setIsSwitchingNamespace(!0),this.network&&(await b.switchActiveNetwork(this.network),await Ne.isAuthenticated()&&p.goBack())}catch{this.error=!0}}};Kr.styles=Wr,Gr([a()],Kr.prototype,`showRetry`,void 0),Gr([a()],Kr.prototype,`error`,void 0),Kr=Gr([s(`w3m-network-switch-view`)],Kr);var qr=c`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Jr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Yr=class extends f{constructor(){super(...arguments),this.imageSrc=void 0,this.name=`Ethereum`,this.disabled=!1}render(){return r`
      <button ?disabled=${this.disabled} tabindex=${o(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?r`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:r`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};Yr.styles=[d,i,qr],Jr([n()],Yr.prototype,`imageSrc`,void 0),Jr([n()],Yr.prototype,`name`,void 0),Jr([n()],Yr.prototype,`tabIdx`,void 0),Jr([n({type:Boolean})],Yr.prototype,`disabled`,void 0),Yr=Jr([s(`wui-list-network`)],Yr);var Xr=t`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,Zr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Qr=class extends f{constructor(){super(),this.unsubscribe=[],this.network=b.state.activeCaipNetwork,this.requestedCaipNetworks=b.getCaipNetworks(),this.search=``,this.onDebouncedSearch=_.debounce(e=>{this.search=e},100),this.unsubscribe.push(te.subscribeNetworkImages(()=>this.requestUpdate()),b.subscribeKey(`activeCaipNetwork`,e=>this.network=e),b.subscribe(()=>{this.requestedCaipNetworks=b.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${[`0`,`3`,`3`,`3`]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return r`
      <wui-flex gap="2" .padding=${[`0`,`3`,`3`,`3`]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){let e=b.getAllApprovedCaipNetworkIds(),t=_.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.filteredNetworks=this.search?t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):t,this.filteredNetworks?.map(e=>r`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${o(h.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${b.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}onSwitchNetwork(e){ie.onSwitchNetwork({network:e})}};Qr.styles=Xr,Zr([a()],Qr.prototype,`network`,void 0),Zr([a()],Qr.prototype,`requestedCaipNetworks`,void 0),Zr([a()],Qr.prototype,`filteredNetworks`,void 0),Zr([a()],Qr.prototype,`search`,void 0),Qr=Zr([s(`w3m-networks-view`)],Qr);var $r=c`
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

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
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

  .capitalize {
    text-transform: capitalize;
  }
`,ei=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ti={eip155:`eth`,solana:`solana`,bip122:`bitcoin`,polkadot:void 0},ni=class extends f{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=p.state.data?.switchToChain,this.caipNetwork=p.state.data?.network,this.activeChain=b.state.activeChain}firstUpdated(){this.unsubscribe.push(b.subscribeKey(`activeChain`,e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?x.CHAIN_NAME_MAP[this.switchToChain]:`supported`;if(!this.switchToChain)return null;let t=x.CHAIN_NAME_MAP[this.switchToChain];return r`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`4`,`2`,`2`,`2`]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${o(ti[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(b.setIsSwitchingNamespace(!0),v.setFilterByNamespace(this.switchToChain),this.caipNetwork?await b.switchActiveNetwork(this.caipNetwork):b.setActiveNamespace(this.switchToChain),p.reset(`Connect`))}};ni.styles=$r,ei([n()],ni.prototype,`activeChain`,void 0),ni=ei([s(`w3m-switch-active-chain-view`)],ni);var ri=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ii=[{images:[`network`,`layers`,`system`],title:`The system’s nuts and bolts`,text:`A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.`},{images:[`noun`,`defiAlt`,`dao`],title:`Designed for different uses`,text:`Each network is designed differently, and may therefore suit certain apps and experiences.`}],ai=class extends f{render(){return r`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`5`,`5`,`5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${ii}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{_.openHref(`https://ethereum.org/en/developers/docs/networks/`,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ai=ri([s(`w3m-what-is-a-network-view`)],ai);var oi=t`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,si=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ci=class extends f{constructor(){super(),this.swapUnsupportedChain=p.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(te.subscribeNetworkImages(()=>this.requestUpdate()),T.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${[`3`,`5`,`2`,`5`]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?r`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:r`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=b.getAllRequestedCaipNetworks(),t=b.getAllApprovedCaipNetworkIds(),n=_.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?n.filter(e=>g.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):n).map(e=>r`
        <wui-list-network
          imageSrc=${o(h.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=b.state.activeChain,t=y.getConnections(e).length>0,n=e&&v.state.activeConnectorIds[e],r=this.remoteFeatures?.multiWallet;await y.disconnect(r?{id:n,namespace:e}:{}),t&&r&&(p.push(`ProfileWallets`),m.showSuccess(`Wallet deleted`))}catch{C.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),m.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=b.getActiveCaipAddress(),n=b.getAllApprovedCaipNetworkIds();b.getNetworkProp(`supportsAllNetworks`,e.chainNamespace);let r=p.state.data;t?n?.includes(e.caipNetworkId)?await b.switchActiveNetwork(e):p.push(`SwitchNetwork`,{...r,network:e}):t||(b.setActiveCaipNetwork(e),p.push(`Connect`))}};ci.styles=oi,si([a()],ci.prototype,`disconnecting`,void 0),si([a()],ci.prototype,`remoteFeatures`,void 0),ci=si([s(`w3m-unsupported-chain-view`)],ci);var li=c`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`,ui=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},di=class extends f{constructor(){super(...arguments),this.icon=`externalLink`,this.text=``,this.type=`info`}render(){return r`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};di.styles=[d,i,li],ui([n()],di.prototype,`icon`,void 0),ui([n()],di.prototype,`text`,void 0),ui([n()],di.prototype,`type`,void 0),di=ui([s(`wui-banner`)],di);var fi=t`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,pi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},mi=class extends f{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return r` <wui-flex flexDirection="column" .padding=${[`2`,`3`,`3`,`3`]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=b.getAllRequestedCaipNetworks(),t=b.getAllApprovedCaipNetworkIds(),n=b.state.activeCaipNetwork,i=b.checkIfSmartAccountEnabled(),a=_.sortRequestedNetworks(t,e);if(i&&ce(n?.chainNamespace)===re.ACCOUNT_TYPES.SMART_ACCOUNT){if(!n)return null;a=[n]}return a.filter(e=>e.chainNamespace===n?.chainNamespace).map(e=>r`
        <wui-list-network
          imageSrc=${o(h.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};mi.styles=fi,mi=pi([s(`w3m-wallet-compatible-networks-view`)],mi);var hi=c`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    font-size: 48px;
  }
`,gi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},_i=class extends f{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?`true`:`false`,r`${this.templateVisual()}`}templateVisual(){return this.imageSrc?r`<wui-image src=${this.imageSrc} alt=${this.alt??``}></wui-image>`:r`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};_i.styles=[d,hi],gi([n()],_i.prototype,`imageSrc`,void 0),gi([n()],_i.prototype,`alt`,void 0),gi([n({type:Boolean})],_i.prototype,`borderRadiusFull`,void 0),_i=gi([s(`wui-visual-thumbnail`)],_i);var vi=c`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,yi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bi=class extends f{constructor(){super(...arguments),this.dappImageUrl=T.state.metadata?.icons,this.walletImageUrl=b.getAccountData()?.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll(`wui-visual-thumbnail`);e?.[0]&&this.createAnimation(e[0],`translate(18px)`),e?.[1]&&this.createAnimation(e[1],`translate(-18px)`)}render(){return r`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:`translateX(0px)`},{transform:t}],{duration:1600,easing:`cubic-bezier(0.56, 0, 0.48, 1)`,direction:`alternate`,iterations:1/0})}};bi.styles=vi,bi=yi([s(`w3m-siwx-sign-message-thumbnails`)],bi);var xi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Si=class extends f{constructor(){super(...arguments),this.dappName=T.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return r`
      <wui-flex justifyContent="center" .padding=${[`8`,`0`,`6`,`0`]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[`0`,`20`,`5`,`20`]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??`Dapp`} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[`0`,`10`,`4`,`10`]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[`4`,`5`,`5`,`5`]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?`Cancelling...`:`Cancel`}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?`Signing...`:`Sign`}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Ne.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes(`OTP is required`)){m.showError({message:`Something went wrong. We need to verify your account again.`}),p.replace(`DataCapture`);return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Ne.cancelSignMessage().finally(()=>this.isCancelling=!1)}};xi([a()],Si.prototype,`isCancelling`,void 0),xi([a()],Si.prototype,`isSigning`,void 0),Si=xi([s(`w3m-siwx-sign-message-view`)],Si);var Ci=e({AppKitAccountButton:()=>Ge,AppKitButton:()=>Je,AppKitConnectButton:()=>tt,AppKitNetworkButton:()=>lt,W3mAccountButton:()=>We,W3mAccountSettingsView:()=>gt,W3mAccountView:()=>Wt,W3mAllWalletsView:()=>Cn,W3mButton:()=>qe,W3mChooseAccountNameView:()=>Dr,W3mConnectButton:()=>et,W3mConnectView:()=>Z,W3mConnectWalletsView:()=>Br,W3mConnectingExternalView:()=>tr,W3mConnectingMultiChainView:()=>ir,W3mConnectingWcBasicView:()=>wr,W3mConnectingWcView:()=>Sr,W3mDownloadsView:()=>kr,W3mFooter:()=>pe,W3mFundWalletView:()=>$t,W3mGetWalletView:()=>Mr,W3mNetworkButton:()=>ct,W3mNetworkSwitchView:()=>Kr,W3mNetworksView:()=>Qr,W3mProfileWalletsView:()=>G,W3mRouter:()=>me,W3mSIWXSignMessageView:()=>Si,W3mSwitchActiveChainView:()=>ni,W3mUnsupportedChainView:()=>ci,W3mWalletCompatibleNetworksView:()=>mi,W3mWhatIsANetworkView:()=>ai,W3mWhatIsAWalletView:()=>Lr});export{Ge as a,Je as i,lt as n,He as o,tt as r,Ci as t};
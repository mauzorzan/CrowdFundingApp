import{W as l,_ as o,w as g,a as c,b as d,U as h,n as u,c as p,h as w,d as m,e as C,A as v,S as f}from"./index-f129da69.js";class I extends l{constructor(t){let{chains:e,options:s}=t;super({chains:e,options:{reloadOnDisconnect:!1,...s}}),o(this,"id",g.coinbase),o(this,"name","Coinbase Wallet"),o(this,"ready",!0),o(this,"onAccountsChanged",n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:c(n[0])})}),o(this,"onChainChanged",n=>{const i=u(n),r=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:r}})}),o(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const s=await e.enable(),n=c(s[0]);let i=await this.getChainId(),r=this.isChainUnsupported(i);if(t&&i!==t)try{i=(await this.switchChain(t)).chainId,r=this.isChainUnsupported(i)}catch(a){console.error(`Connected but failed to switch to desired chain ${t}`,a)}return{account:n,chain:{id:i,unsupported:r},provider:new d(e)}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new h(e):e}}async disconnect(){if(!this._provider)return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});if(e.length===0)throw new Error("No accounts found");return c(e[0])}async getChainId(){const t=await this.getProvider();return u(t.chainId)}async getProvider(){var t;if(!this._provider){let e=(await p(()=>import("./index-4f49858e.js").then(a=>a.i),["assets/index-4f49858e.js","assets/index-f129da69.js","assets/index-ca0082dc.css","assets/index-317858ce.js","assets/index-8fc3a0ce.js","assets/satisfies-4b4fe2ab.js"])).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),this._client=new e(this.options);const s=(t=this._client.walletExtension)==null?void 0:t.getChainId(),n=this.chains.find(a=>this.options.chainId?a.chainId===this.options.chainId:a.chainId===s)||this.chains[0],i=this.options.chainId||(n==null?void 0:n.chainId),r=this.options.jsonRpcUrl||(n==null?void 0:n.rpc[0]);this._provider=this._client.makeWeb3Provider(r,i)}return this._provider}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,s]=await Promise.all([this.getProvider(),this.getAccount()]);return new d(e,t).getSigner(s)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),s=w(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),this.chains.find(n=>n.chainId===t)??{chainId:t,name:`Chain ${s}`,slug:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(n){const i=this.chains.find(r=>r.chainId===t);if(!i)throw new m({chainId:t,connectorId:this.id});if(n.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:C(i),blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(r){throw this._isUserRejectedRequestError(r)?new h(r):new v}throw this._isUserRejectedRequestError(n)?new h(n):new f(n)}}_isUserRejectedRequestError(t){return/(user rejected)/i.test(t.message)}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!this._client)throw new Error("Coinbase Wallet SDK not initialized");return this._client.getQrUrl()}}export{I as CoinbaseWalletConnector};

var P=Object.defineProperty;var k=(o,t,a)=>t in o?P(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a;var d=(o,t,a)=>(k(o,typeof t!="symbol"?t+"":t,a),a);import{a5 as N,bd as W,o as y,a2 as F,T as u,a9 as M,X as x,t as _,be as v,bf as D,bg as U,B as L,c as S,ai as O,bh as z,bi as I}from"./index-f129da69.js";import{h as g}from"./contract-appuri-11efae43.browser.esm-a9abb4b3.js";import{C as A}from"./setErc20Allowance-08d8826c.browser.esm-dbade3d7.js";import{g as T,f as V}from"./QueryParams-72049a45.browser.esm-d808e352.js";import{a as q}from"./index-c254bf1e.js";class G{constructor(t,a){d(this,"featureName",N.name);d(this,"setDefaultRoyaltyInfo",y(async t=>{const a=await this.metadata.get(),e=await this.metadata.parseInputMetadata({...a,...t}),r=await this.metadata._parseAndUploadMetadata(e);if(g("setContractURI",this.contractWrapper)){const c=new F(this.contractWrapper),n=[c.encode("setDefaultRoyaltyInfo",[e.fee_recipient,e.seller_fee_basis_points]),c.encode("setContractURI",[r])];return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[n],parse:h=>({receipt:h,data:()=>this.getDefaultRoyaltyInfo()})})}else throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.")}));d(this,"setTokenRoyaltyInfo",y(async(t,a)=>{const e=W.parse(a);return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setRoyaltyInfoForToken",args:[t,e.fee_recipient,e.seller_fee_basis_points],parse:r=>({receipt:r,data:()=>this.getDefaultRoyaltyInfo()})})}));this.contractWrapper=t,this.metadata=a}async getDefaultRoyaltyInfo(){const[t,a]=await this.contractWrapper.read("getDefaultRoyaltyInfo",[]);return W.parseAsync({fee_recipient:t,seller_fee_basis_points:a})}async getTokenRoyaltyInfo(t){const[a,e]=await this.contractWrapper.read("getRoyaltyInfoForToken",[t]);return W.parseAsync({fee_recipient:a,seller_fee_basis_points:e})}}class J{constructor(t,a,e,r){d(this,"createDelayedRevealBatch",y(async(t,a,e,r)=>{if(!e)throw new Error("Password is required");const c=await this.storage.uploadBatch([A.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),n=T(c),h=await this.nextTokenIdToMintFn(),i=await this.storage.uploadBatch(a.map(p=>A.parse(p)),{onProgress:r==null?void 0:r.onProgress,rewriteFileNames:{fileStartNumber:h.toNumber()}}),s=T(i),l=await this.contractWrapper.read("getBaseURICount",[]),R=await this.hashDelayRevealPassword(l,e),C=await this.contractWrapper.read("encryptDecrypt",[_(s),R]);let w;if(await this.isLegacyContract())w=C;else{const p=await this.contractWrapper.getChainID(),f=v(["bytes","bytes","uint256"],[_(s),R,p]);w=D.encode(["bytes","bytes32"],[C,f])}return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[i.length,n.endsWith("/")?n:`${n}/`,w],parse:p=>{const f=this.contractWrapper.parseLogs("TokensLazyMinted",p==null?void 0:p.logs),E=f[0].args.startTokenId,B=f[0].args.endTokenId,b=[];for(let m=E;m.lte(B);m=m.add(1))b.push({id:m,receipt:p});return b}})}));d(this,"reveal",y(async(t,a)=>{if(!a)throw new Error("Password is required");const e=await this.hashDelayRevealPassword(t,a);try{const r=await this.contractWrapper.callStatic().reveal(t,e);if(!r.includes("://")||!r.endsWith("/"))throw new Error("invalid password")}catch{throw new Error("invalid password")}return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,e]})}));this.featureName=e,this.nextTokenIdToMintFn=r,this.contractWrapper=t,this.storage=a}async getBatchesToReveal(){const t=await this.contractWrapper.read("getBaseURICount",[]);if(t.isZero())return[];const a=Array.from(Array(t.toNumber()).keys()),e=await Promise.all(a.map(s=>{if(g("getBatchIdAtIndex",this.contractWrapper))return this.contractWrapper.read("getBatchIdAtIndex",[s]);if(g("baseURIIndices",this.contractWrapper))return this.contractWrapper.read("baseURIIndices",[s]);throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.")})),r=e.slice(0,e.length-1),c=await Promise.all(Array.from([0,...r]).map(s=>this.getNftMetadata(s.toString()))),n=await this.isLegacyContract(),i=(await Promise.all(Array.from([...e]).map(s=>n?this.getLegacyEncryptedData(s):this.contractWrapper.read("encryptedData",[s])))).map(s=>U(s)>0?n?s:D.decode(["bytes","bytes32"],s)[0]:s);return c.map((s,l)=>({batchId:L.from(l),batchUri:s.uri,placeholderMetadata:s})).filter((s,l)=>U(i[l])>0)}async hashDelayRevealPassword(t,a){const e=await this.contractWrapper.getChainID(),r=this.contractWrapper.address;return v(["string","uint256","uint256","address"],[a,e,t,r])}async getNftMetadata(t){return V(this.contractWrapper.address,this.contractWrapper.getProvider(),t,this.storage)}async isLegacyContract(){if(g("contractVersion",this.contractWrapper))try{return await this.contractWrapper.read("contractVersion",[])<=2}catch{return!1}return!1}async getLegacyEncryptedData(t){const a=(await S(()=>import("./IDelayedRevealDeprecated-e585348a.js"),[])).default,r=await new O(this.contractWrapper.address,a,this.contractWrapper.getProvider()).functions.encryptedBaseURI(t);return r.length>0?r[0]:"0x"}}async function Q(o,t,a,e,r){let c={};const n=e||I,i=(await z(o.getProvider(),t,n)).mul(a);return i.gt(0)&&(n===I?c={value:i}:n!==I&&r&&await q(o,n,i,a,0)),c}class tt{constructor(t){d(this,"featureName",M.name);d(this,"set",y(async t=>{const a=await x(t);return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setOwner",args:[a]})}));this.contractWrapper=t}async get(){return this.contractWrapper.read("owner",[])}}export{G as C,J as D,tt as a,Q as c};

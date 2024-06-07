var d=Object.defineProperty;var f=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(f(s,typeof e!="symbol"?e+"":e,t),t);import{da as C,a1 as w,v as W,db as y,a2 as b,X as p,bk as R,b4 as T,o as c,T as h}from"./index-f129da69.js";import{a as A,b as E,G as S,C as O}from"./contract-appuri-11efae43.browser.esm-a9abb4b3.js";import{C as v}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as D}from"./contract-platform-fee-6cd82ace.browser.esm-85035a3e.js";import{C as F}from"./contract-roles-b0fa3fbf.browser.esm-2bf7bfc9.js";import{C as V}from"./contract-sales-d7efa59e.browser.esm-3598eca2.js";import{D as B}from"./drop-claim-conditions-06383a7e.browser.esm-d448ac49.js";import{S as I}from"./erc-20-standard-0cee7c49.browser.esm-ec99aa25.js";import"./index-c254bf1e.js";import"./treeify-361aa23a.js";import"./assertEnabled-3403e0f7.browser.esm-f60dea04.js";import"./setErc20Allowance-08d8826c.browser.esm-dbade3d7.js";import"./erc-20-4a66bae9.browser.esm-b77b9795.js";const o=class o extends I{constructor(t,r,a){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},m=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,m,i,a);super(g,a,u);n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(r,a,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>h.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await p(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,r)=>this.erc20.burnFrom.prepare(t,r)));this.abi=W.parse(m||[]),this.metadata=new A(this.contractWrapper,y,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new F(this.contractWrapper,o.contractRoles),this.encoder=new b(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new O(this.contractWrapper),this.sales=new V(this.contractWrapper),this.platformFees=new D(this.contractWrapper),this.interceptor=new v(this.contractWrapper),this.claimConditions=new B(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await p(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await p(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[R("transfer"),T])}async prepare(t,r,a){return h.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(o,"contractRoles",C);let l=o;export{l as TokenDrop};

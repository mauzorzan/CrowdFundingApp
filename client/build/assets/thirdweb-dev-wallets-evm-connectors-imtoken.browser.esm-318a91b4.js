import{InjectedConnector as r}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm-21eef650.js";import{j as s}from"./index-f129da69.js";class f extends r{constructor(n){const e={...{name:"imToken",getProvider(){var t;function i(o){if(o!=null&&o.isImToken)return o}if(s(globalThis.window))return(t=globalThis.window.ethereum)!=null&&t.providers?globalThis.window.ethereum.providers.find(i):i(globalThis.window.ethereum)}},...n.options};super({chains:n.chains,options:e,connectorStorage:n.connectorStorage})}}export{f as ImTokenConnector};

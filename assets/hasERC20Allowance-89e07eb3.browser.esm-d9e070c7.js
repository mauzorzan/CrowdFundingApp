import{c,a1 as l}from"./index-7f608df4.js";async function g(e,a,t){const n=e.getProvider(),r=(await c(()=>import("./index-7f608df4.js").then(d=>d.fc),["assets/index-7f608df4.js","assets/index-ca0082dc.css"])).default,s=new l(n,a,r,{},e.storage),o=await e.getSignerAddress(),i=e.address;return(await s.read("allowance",[o,i])).gte(t)}export{g as h};
import{bD as _,c as f,a1 as h,Z as n,ch as e,ci as N,cj as c}from"./index-5017bff6.js";const l=(()=>n.object({}).catchall(n.union([c,n.unknown()])))(),u=(()=>n.union([n.array(n.array(l)).transform(a=>a.flat()),n.array(l),l]).optional().nullable())(),x=(()=>n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:e.nullable().optional(),animation_url:e.optional().nullable()}))(),p=(()=>x.extend({external_url:e.nullable().optional(),background_color:N.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])))(),O=(()=>n.union([p,n.string()]))(),S=(()=>p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()}))();async function F(a,t,o,i){if(_(o))i.value=t;else{const g=(await f(()=>import("./index-5017bff6.js").then(w=>w.fc),["assets/index-5017bff6.js","assets/index-ca0082dc.css"])).default,b=a.getSigner(),m=a.getProvider(),r=new h(b||m,o,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await r.read("allowance",[d,s])).lt(t)&&await r.sendTransaction("approve",[s,t]),i}}export{x as B,p as C,O as N,S as a,F as s};
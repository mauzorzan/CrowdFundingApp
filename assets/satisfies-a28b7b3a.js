var H={exports:{}};const he="2.0.0",Q=256,$e=Number.MAX_SAFE_INTEGER||9007199254740991,ue=16,Re=Q-6,fe=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var V={MAX_LENGTH:Q,MAX_SAFE_COMPONENT_LENGTH:ue,MAX_SAFE_BUILD_LENGTH:Re,MAX_SAFE_INTEGER:$e,RELEASE_TYPES:fe,SEMVER_SPEC_VERSION:he,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2};const Ie=typeof process=="object"&&process.env&&{}.NODE_DEBUG&&/\bsemver\b/i.test({}.NODE_DEBUG)?(...a)=>console.error("SEMVER",...a):()=>{};var j=Ie;(function(a,e){const{MAX_SAFE_COMPONENT_LENGTH:s,MAX_SAFE_BUILD_LENGTH:l,MAX_LENGTH:N}=V,$=j;e=a.exports={};const w=e.re=[],T=e.safeRe=[],t=e.src=[],i=e.t={};let f=0;const L="[a-zA-Z0-9-]",P=[["\\s",1],["\\d",N],[L,l]],_=C=>{for(const[m,D]of P)C=C.split(`${m}*`).join(`${m}{0,${D}}`).split(`${m}+`).join(`${m}{1,${D}}`);return C},h=(C,m,D)=>{const S=_(m),G=f++;$(C,G,m),i[C]=G,t[G]=m,w[G]=new RegExp(m,D?"g":void 0),T[G]=new RegExp(S,D?"g":void 0)};h("NUMERICIDENTIFIER","0|[1-9]\\d*"),h("NUMERICIDENTIFIERLOOSE","\\d+"),h("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${L}*`),h("MAINVERSION",`(${t[i.NUMERICIDENTIFIER]})\\.(${t[i.NUMERICIDENTIFIER]})\\.(${t[i.NUMERICIDENTIFIER]})`),h("MAINVERSIONLOOSE",`(${t[i.NUMERICIDENTIFIERLOOSE]})\\.(${t[i.NUMERICIDENTIFIERLOOSE]})\\.(${t[i.NUMERICIDENTIFIERLOOSE]})`),h("PRERELEASEIDENTIFIER",`(?:${t[i.NUMERICIDENTIFIER]}|${t[i.NONNUMERICIDENTIFIER]})`),h("PRERELEASEIDENTIFIERLOOSE",`(?:${t[i.NUMERICIDENTIFIERLOOSE]}|${t[i.NONNUMERICIDENTIFIER]})`),h("PRERELEASE",`(?:-(${t[i.PRERELEASEIDENTIFIER]}(?:\\.${t[i.PRERELEASEIDENTIFIER]})*))`),h("PRERELEASELOOSE",`(?:-?(${t[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${t[i.PRERELEASEIDENTIFIERLOOSE]})*))`),h("BUILDIDENTIFIER",`${L}+`),h("BUILD",`(?:\\+(${t[i.BUILDIDENTIFIER]}(?:\\.${t[i.BUILDIDENTIFIER]})*))`),h("FULLPLAIN",`v?${t[i.MAINVERSION]}${t[i.PRERELEASE]}?${t[i.BUILD]}?`),h("FULL",`^${t[i.FULLPLAIN]}$`),h("LOOSEPLAIN",`[v=\\s]*${t[i.MAINVERSIONLOOSE]}${t[i.PRERELEASELOOSE]}?${t[i.BUILD]}?`),h("LOOSE",`^${t[i.LOOSEPLAIN]}$`),h("GTLT","((?:<|>)?=?)"),h("XRANGEIDENTIFIERLOOSE",`${t[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),h("XRANGEIDENTIFIER",`${t[i.NUMERICIDENTIFIER]}|x|X|\\*`),h("XRANGEPLAIN",`[v=\\s]*(${t[i.XRANGEIDENTIFIER]})(?:\\.(${t[i.XRANGEIDENTIFIER]})(?:\\.(${t[i.XRANGEIDENTIFIER]})(?:${t[i.PRERELEASE]})?${t[i.BUILD]}?)?)?`),h("XRANGEPLAINLOOSE",`[v=\\s]*(${t[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${t[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${t[i.XRANGEIDENTIFIERLOOSE]})(?:${t[i.PRERELEASELOOSE]})?${t[i.BUILD]}?)?)?`),h("XRANGE",`^${t[i.GTLT]}\\s*${t[i.XRANGEPLAIN]}$`),h("XRANGELOOSE",`^${t[i.GTLT]}\\s*${t[i.XRANGEPLAINLOOSE]}$`),h("COERCEPLAIN",`(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?`),h("COERCE",`${t[i.COERCEPLAIN]}(?:$|[^\\d])`),h("COERCEFULL",t[i.COERCEPLAIN]+`(?:${t[i.PRERELEASE]})?(?:${t[i.BUILD]})?(?:$|[^\\d])`),h("COERCERTL",t[i.COERCE],!0),h("COERCERTLFULL",t[i.COERCEFULL],!0),h("LONETILDE","(?:~>?)"),h("TILDETRIM",`(\\s*)${t[i.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",h("TILDE",`^${t[i.LONETILDE]}${t[i.XRANGEPLAIN]}$`),h("TILDELOOSE",`^${t[i.LONETILDE]}${t[i.XRANGEPLAINLOOSE]}$`),h("LONECARET","(?:\\^)"),h("CARETTRIM",`(\\s*)${t[i.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",h("CARET",`^${t[i.LONECARET]}${t[i.XRANGEPLAIN]}$`),h("CARETLOOSE",`^${t[i.LONECARET]}${t[i.XRANGEPLAINLOOSE]}$`),h("COMPARATORLOOSE",`^${t[i.GTLT]}\\s*(${t[i.LOOSEPLAIN]})$|^$`),h("COMPARATOR",`^${t[i.GTLT]}\\s*(${t[i.FULLPLAIN]})$|^$`),h("COMPARATORTRIM",`(\\s*)${t[i.GTLT]}\\s*(${t[i.LOOSEPLAIN]}|${t[i.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",h("HYPHENRANGE",`^\\s*(${t[i.XRANGEPLAIN]})\\s+-\\s+(${t[i.XRANGEPLAIN]})\\s*$`),h("HYPHENRANGELOOSE",`^\\s*(${t[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${t[i.XRANGEPLAINLOOSE]})\\s*$`),h("STAR","(<|>)?=?\\s*\\*"),h("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),h("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(H,H.exports);var q=H.exports;const Ne=Object.freeze({loose:!0}),pe=Object.freeze({}),Le=a=>a?typeof a!="object"?Ne:a:pe;var k=Le;const M=/^[0-9]+$/,ee=(a,e)=>{const s=M.test(a),l=M.test(e);return s&&l&&(a=+a,e=+e),a===e?0:s&&!l?-1:l&&!s?1:a<e?-1:1},Oe=(a,e)=>ee(e,a);var Ae={compareIdentifiers:ee,rcompareIdentifiers:Oe};const U=j,{MAX_LENGTH:Y,MAX_SAFE_INTEGER:y}=V,{safeRe:z,t:B}=q,Te=k,{compareIdentifiers:F}=Ae;let Se=class v{constructor(e,s){if(s=Te(s),e instanceof v){if(e.loose===!!s.loose&&e.includePrerelease===!!s.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Y)throw new TypeError(`version is longer than ${Y} characters`);U("SemVer",e,s),this.options=s,this.loose=!!s.loose,this.includePrerelease=!!s.includePrerelease;const l=e.trim().match(s.loose?z[B.LOOSE]:z[B.FULL]);if(!l)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+l[1],this.minor=+l[2],this.patch=+l[3],this.major>y||this.major<0)throw new TypeError("Invalid major version");if(this.minor>y||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>y||this.patch<0)throw new TypeError("Invalid patch version");l[4]?this.prerelease=l[4].split(".").map(N=>{if(/^[0-9]+$/.test(N)){const $=+N;if($>=0&&$<y)return $}return N}):this.prerelease=[],this.build=l[5]?l[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(U("SemVer.compare",this.version,this.options,e),!(e instanceof v)){if(typeof e=="string"&&e===this.version)return 0;e=new v(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof v||(e=new v(e,this.options)),F(this.major,e.major)||F(this.minor,e.minor)||F(this.patch,e.patch)}comparePre(e){if(e instanceof v||(e=new v(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let s=0;do{const l=this.prerelease[s],N=e.prerelease[s];if(U("prerelease compare",s,l,N),l===void 0&&N===void 0)return 0;if(N===void 0)return 1;if(l===void 0)return-1;if(l===N)continue;return F(l,N)}while(++s)}compareBuild(e){e instanceof v||(e=new v(e,this.options));let s=0;do{const l=this.build[s],N=e.build[s];if(U("build compare",s,l,N),l===void 0&&N===void 0)return 0;if(N===void 0)return 1;if(l===void 0)return-1;if(l===N)continue;return F(l,N)}while(++s)}inc(e,s,l){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",s,l);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",s,l);break;case"prepatch":this.prerelease.length=0,this.inc("patch",s,l),this.inc("pre",s,l);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",s,l),this.inc("pre",s,l);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const N=Number(l)?1:0;if(!s&&l===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[N];else{let $=this.prerelease.length;for(;--$>=0;)typeof this.prerelease[$]=="number"&&(this.prerelease[$]++,$=-2);if($===-1){if(s===this.prerelease.join(".")&&l===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(N)}}if(s){let $=[s,N];l===!1&&($=[s]),F(this.prerelease[0],s)===0?isNaN(this.prerelease[1])&&(this.prerelease=$):this.prerelease=$}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var W=Se;const K=W,de=(a,e,s)=>new K(a,s).compare(new K(e,s));var g=de;const me=g,ve=(a,e,s)=>me(a,e,s)>0;var Pe=ve;const Ce=g,we=(a,e,s)=>Ce(a,e,s)<0;var De=we;const Ge=g,Fe=(a,e,s)=>Ge(a,e,s)===0;var ge=Fe;const Xe=g,Ue=(a,e,s)=>Xe(a,e,s)!==0;var ye=Ue;const je=g,_e=(a,e,s)=>je(a,e,s)>=0;var be=_e;const xe=g,He=(a,e,s)=>xe(a,e,s)<=0;var Ve=He;const qe=ge,ke=ye,We=Pe,Me=be,Ye=De,ze=Ve,Be=(a,e,s,l)=>{switch(e){case"===":return typeof a=="object"&&(a=a.version),typeof s=="object"&&(s=s.version),a===s;case"!==":return typeof a=="object"&&(a=a.version),typeof s=="object"&&(s=s.version),a!==s;case"":case"=":case"==":return qe(a,s,l);case"!=":return ke(a,s,l);case">":return We(a,s,l);case">=":return Me(a,s,l);case"<":return Ye(a,s,l);case"<=":return ze(a,s,l);default:throw new TypeError(`Invalid operator: ${e}`)}};var Ke=Be;class Ze{constructor(){this.max=1e3,this.map=new Map}get(e){const s=this.map.get(e);if(s!==void 0)return this.map.delete(e),this.map.set(e,s),s}delete(e){return this.map.delete(e)}set(e,s){if(!this.delete(e)&&s!==void 0){if(this.map.size>=this.max){const N=this.map.keys().next().value;this.delete(N)}this.map.set(e,s)}return this}}var Je=Ze,b,Z;function te(){if(Z)return b;Z=1;class a{constructor(r,u){if(u=l(u),r instanceof a)return r.loose===!!u.loose&&r.includePrerelease===!!u.includePrerelease?r:new a(r.raw,u);if(r instanceof N)return this.raw=r.value,this.set=[[r]],this.format(),this;if(this.options=u,this.loose=!!u.loose,this.includePrerelease=!!u.includePrerelease,this.raw=r.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(o=>this.parseRange(o.trim())).filter(o=>o.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const o=this.set[0];if(this.set=this.set.filter(c=>!h(c[0])),this.set.length===0)this.set=[o];else if(this.set.length>1){for(const c of this.set)if(c.length===1&&C(c[0])){this.set=[c];break}}}this.format()}format(){return this.range=this.set.map(r=>r.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(r){const o=((this.options.includePrerelease&&P)|(this.options.loose&&_))+":"+r,c=s.get(o);if(c)return c;const E=this.options.loose,R=E?T[t.HYPHENRANGELOOSE]:T[t.HYPHENRANGE];r=r.replace(R,oe(this.options.includePrerelease)),$("hyphen replace",r),r=r.replace(T[t.COMPARATORTRIM],i),$("comparator trim",r),r=r.replace(T[t.TILDETRIM],f),$("tilde trim",r),r=r.replace(T[t.CARETTRIM],L),$("caret trim",r);let p=r.split(" ").map(A=>D(A,this.options)).join(" ").split(/\s+/).map(A=>le(A,this.options));E&&(p=p.filter(A=>($("loose invalid filter",A,this.options),!!A.match(T[t.COMPARATORLOOSE])))),$("range list",p);const I=new Map,O=p.map(A=>new N(A,this.options));for(const A of O){if(h(A))return[A];I.set(A.value,A)}I.size>1&&I.has("")&&I.delete("");const d=[...I.values()];return s.set(o,d),d}intersects(r,u){if(!(r instanceof a))throw new TypeError("a Range is required");return this.set.some(o=>m(o,u)&&r.set.some(c=>m(c,u)&&o.every(E=>c.every(R=>E.intersects(R,u)))))}test(r){if(!r)return!1;if(typeof r=="string")try{r=new w(r,this.options)}catch{return!1}for(let u=0;u<this.set.length;u++)if(ce(this.set[u],r,this.options))return!0;return!1}}b=a;const e=Je,s=new e,l=k,N=Qe(),$=j,w=W,{safeRe:T,t,comparatorTrimReplace:i,tildeTrimReplace:f,caretTrimReplace:L}=q,{FLAG_INCLUDE_PRERELEASE:P,FLAG_LOOSE:_}=V,h=n=>n.value==="<0.0.0-0",C=n=>n.value==="",m=(n,r)=>{let u=!0;const o=n.slice();let c=o.pop();for(;u&&o.length;)u=o.every(E=>c.intersects(E,r)),c=o.pop();return u},D=(n,r)=>($("comp",n,r),n=re(n,r),$("caret",n),n=G(n,r),$("tildes",n),n=ne(n,r),$("xrange",n),n=Ee(n,r),$("stars",n),n),S=n=>!n||n.toLowerCase()==="x"||n==="*",G=(n,r)=>n.trim().split(/\s+/).map(u=>se(u,r)).join(" "),se=(n,r)=>{const u=r.loose?T[t.TILDELOOSE]:T[t.TILDE];return n.replace(u,(o,c,E,R,p)=>{$("tilde",n,o,c,E,R,p);let I;return S(c)?I="":S(E)?I=`>=${c}.0.0 <${+c+1}.0.0-0`:S(R)?I=`>=${c}.${E}.0 <${c}.${+E+1}.0-0`:p?($("replaceTilde pr",p),I=`>=${c}.${E}.${R}-${p} <${c}.${+E+1}.0-0`):I=`>=${c}.${E}.${R} <${c}.${+E+1}.0-0`,$("tilde return",I),I})},re=(n,r)=>n.trim().split(/\s+/).map(u=>ie(u,r)).join(" "),ie=(n,r)=>{$("caret",n,r);const u=r.loose?T[t.CARETLOOSE]:T[t.CARET],o=r.includePrerelease?"-0":"";return n.replace(u,(c,E,R,p,I)=>{$("caret",n,c,E,R,p,I);let O;return S(E)?O="":S(R)?O=`>=${E}.0.0${o} <${+E+1}.0.0-0`:S(p)?E==="0"?O=`>=${E}.${R}.0${o} <${E}.${+R+1}.0-0`:O=`>=${E}.${R}.0${o} <${+E+1}.0.0-0`:I?($("replaceCaret pr",I),E==="0"?R==="0"?O=`>=${E}.${R}.${p}-${I} <${E}.${R}.${+p+1}-0`:O=`>=${E}.${R}.${p}-${I} <${E}.${+R+1}.0-0`:O=`>=${E}.${R}.${p}-${I} <${+E+1}.0.0-0`):($("no pr"),E==="0"?R==="0"?O=`>=${E}.${R}.${p}${o} <${E}.${R}.${+p+1}-0`:O=`>=${E}.${R}.${p}${o} <${E}.${+R+1}.0-0`:O=`>=${E}.${R}.${p} <${+E+1}.0.0-0`),$("caret return",O),O})},ne=(n,r)=>($("replaceXRanges",n,r),n.split(/\s+/).map(u=>ae(u,r)).join(" ")),ae=(n,r)=>{n=n.trim();const u=r.loose?T[t.XRANGELOOSE]:T[t.XRANGE];return n.replace(u,(o,c,E,R,p,I)=>{$("xRange",n,o,c,E,R,p,I);const O=S(E),d=O||S(R),A=d||S(p),X=A;return c==="="&&X&&(c=""),I=r.includePrerelease?"-0":"",O?c===">"||c==="<"?o="<0.0.0-0":o="*":c&&X?(d&&(R=0),p=0,c===">"?(c=">=",d?(E=+E+1,R=0,p=0):(R=+R+1,p=0)):c==="<="&&(c="<",d?E=+E+1:R=+R+1),c==="<"&&(I="-0"),o=`${c+E}.${R}.${p}${I}`):d?o=`>=${E}.0.0${I} <${+E+1}.0.0-0`:A&&(o=`>=${E}.${R}.0${I} <${E}.${+R+1}.0-0`),$("xRange return",o),o})},Ee=(n,r)=>($("replaceStars",n,r),n.trim().replace(T[t.STAR],"")),le=(n,r)=>($("replaceGTE0",n,r),n.trim().replace(T[r.includePrerelease?t.GTE0PRE:t.GTE0],"")),oe=n=>(r,u,o,c,E,R,p,I,O,d,A,X)=>(S(o)?u="":S(c)?u=`>=${o}.0.0${n?"-0":""}`:S(E)?u=`>=${o}.${c}.0${n?"-0":""}`:R?u=`>=${u}`:u=`>=${u}${n?"-0":""}`,S(O)?I="":S(d)?I=`<${+O+1}.0.0-0`:S(A)?I=`<${O}.${+d+1}.0-0`:X?I=`<=${O}.${d}.${A}-${X}`:n?I=`<${O}.${d}.${+A+1}-0`:I=`<=${I}`,`${u} ${I}`.trim()),ce=(n,r,u)=>{for(let o=0;o<n.length;o++)if(!n[o].test(r))return!1;if(r.prerelease.length&&!u.includePrerelease){for(let o=0;o<n.length;o++)if($(n[o].semver),n[o].semver!==N.ANY&&n[o].semver.prerelease.length>0){const c=n[o].semver;if(c.major===r.major&&c.minor===r.minor&&c.patch===r.patch)return!0}return!1}return!0};return b}var x,J;function Qe(){if(J)return x;J=1;const a=Symbol("SemVer ANY");class e{static get ANY(){return a}constructor(f,L){if(L=s(L),f instanceof e){if(f.loose===!!L.loose)return f;f=f.value}f=f.trim().split(/\s+/).join(" "),w("comparator",f,L),this.options=L,this.loose=!!L.loose,this.parse(f),this.semver===a?this.value="":this.value=this.operator+this.semver.version,w("comp",this)}parse(f){const L=this.options.loose?l[N.COMPARATORLOOSE]:l[N.COMPARATOR],P=f.match(L);if(!P)throw new TypeError(`Invalid comparator: ${f}`);this.operator=P[1]!==void 0?P[1]:"",this.operator==="="&&(this.operator=""),P[2]?this.semver=new T(P[2],this.options.loose):this.semver=a}toString(){return this.value}test(f){if(w("Comparator.test",f,this.options.loose),this.semver===a||f===a)return!0;if(typeof f=="string")try{f=new T(f,this.options)}catch{return!1}return $(f,this.operator,this.semver,this.options)}intersects(f,L){if(!(f instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new t(f.value,L).test(this.value):f.operator===""?f.value===""?!0:new t(this.value,L).test(f.semver):(L=s(L),L.includePrerelease&&(this.value==="<0.0.0-0"||f.value==="<0.0.0-0")||!L.includePrerelease&&(this.value.startsWith("<0.0.0")||f.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&f.operator.startsWith(">")||this.operator.startsWith("<")&&f.operator.startsWith("<")||this.semver.version===f.semver.version&&this.operator.includes("=")&&f.operator.includes("=")||$(this.semver,"<",f.semver,L)&&this.operator.startsWith(">")&&f.operator.startsWith("<")||$(this.semver,">",f.semver,L)&&this.operator.startsWith("<")&&f.operator.startsWith(">")))}}x=e;const s=k,{safeRe:l,t:N}=q,$=Ke,w=j,T=W,t=te();return x}const et=te(),tt=(a,e,s)=>{try{e=new et(e,s)}catch{return!1}return e.test(a)};var st=tt;export{W as a,te as b,g as c,Qe as d,Ve as e,be as f,Pe as g,V as h,Ae as i,ge as j,Ke as k,De as l,ye as n,q as r,st as s};
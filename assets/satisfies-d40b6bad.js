var X={exports:{}};const Ee="2.0.0",Q=256,pe=Number.MAX_SAFE_INTEGER||9007199254740991,me=16,de=Q-6,_e=["major","premajor","minor","preminor","patch","prepatch","prerelease"];var V={MAX_LENGTH:Q,MAX_SAFE_COMPONENT_LENGTH:me,MAX_SAFE_BUILD_LENGTH:de,MAX_SAFE_INTEGER:pe,RELEASE_TYPES:_e,SEMVER_SPEC_VERSION:Ee,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2};const he=typeof process=="object"&&{TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/mauriciozorzan/Documents/CrowdFund/client",SHELL:"/bin/zsh",TERM:"xterm-256color",TMPDIR:"/var/folders/11/wnc852jj5wj57yyc4fvtw9gw0000gn/T/",npm_config_metrics_registry:"https://registry.npmjs.org/",CONDA_SHLVL:"1",npm_config_global_prefix:"/usr/local",CONDA_PROMPT_MODIFIER:"(base) ",TERM_PROGRAM_VERSION:"1.85.0",MallocNanoZone:"0",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",ZDOTDIR:"/Users/mauriciozorzan",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/mauriciozorzan/Documents/CrowdFund/client",USER:"mauriciozorzan",COMMAND_MODE:"unix2003",CONDA_EXE:"/Users/mauriciozorzan/opt/anaconda3/bin/conda",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.SlHtCwQSLX/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x64",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",_CE_CONDA:"",PATH:"/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin:/Users/mauriciozorzan/Documents/CrowdFund/node_modules/.bin:/Users/mauriciozorzan/Documents/node_modules/.bin:/Users/mauriciozorzan/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin:/Users/mauriciozorzan/Documents/CrowdFund/node_modules/.bin:/Users/mauriciozorzan/Documents/node_modules/.bin:/Users/mauriciozorzan/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Users/mauriciozorzan/opt/anaconda3/bin:/Users/mauriciozorzan/opt/anaconda3/condabin",LaunchInstanceID:"FA7D2AB5-EABF-4A90-8822-F73D7972C023",npm_package_json:"/Users/mauriciozorzan/Documents/CrowdFund/client/package.json",__CFBundleIdentifier:"com.microsoft.VSCode",CONDA_PREFIX:"/Users/mauriciozorzan/opt/anaconda3",USER_ZDOTDIR:"/Users/mauriciozorzan",npm_config_init_module:"/Users/mauriciozorzan/.npm-init.js",npm_config_userconfig:"/Users/mauriciozorzan/.npmrc",PWD:"/Users/mauriciozorzan/documents/crowdfund/client",npm_command:"run-script",EDITOR:"vi",npm_lifecycle_event:"build",LANG:"en_US.UTF-8",npm_package_name:"client",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",npm_config_npm_version:"9.8.0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",XPC_SERVICE_NAME:"0",_CE_M:"",npm_package_version:"0.0.0",VSCODE_INJECTION:"1",HOME:"/Users/mauriciozorzan",SHLVL:"9",VSCODE_GIT_ASKPASS_MAIN:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"mauriciozorzan",CONDA_PYTHON_EXE:"/Users/mauriciozorzan/opt/anaconda3/bin/python",npm_config_cache:"/Users/mauriciozorzan/.npm",npm_lifecycle_script:"tsc && vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/11/wnc852jj5wj57yyc4fvtw9gw0000gn/T/vscode-git-7d1e023113.sock",CONDA_DEFAULT_ENV:"base",npm_config_user_agent:"npm/9.8.0 node/v20.5.1 darwin x64 workspaces/false",GIT_ASKPASS:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",VSCODE_GIT_ASKPASS_NODE:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",SECURITYSESSIONID:"186a3",COLORTERM:"truecolor",npm_config_prefix:"/usr/local",npm_node_execpath:"/usr/local/bin/node",_:"/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin/vite",NODE_ENV:"production"}&&{TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/mauriciozorzan/Documents/CrowdFund/client",SHELL:"/bin/zsh",TERM:"xterm-256color",TMPDIR:"/var/folders/11/wnc852jj5wj57yyc4fvtw9gw0000gn/T/",npm_config_metrics_registry:"https://registry.npmjs.org/",CONDA_SHLVL:"1",npm_config_global_prefix:"/usr/local",CONDA_PROMPT_MODIFIER:"(base) ",TERM_PROGRAM_VERSION:"1.85.0",MallocNanoZone:"0",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",ZDOTDIR:"/Users/mauriciozorzan",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/mauriciozorzan/Documents/CrowdFund/client",USER:"mauriciozorzan",COMMAND_MODE:"unix2003",CONDA_EXE:"/Users/mauriciozorzan/opt/anaconda3/bin/conda",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.SlHtCwQSLX/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x64",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",_CE_CONDA:"",PATH:"/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin:/Users/mauriciozorzan/Documents/CrowdFund/node_modules/.bin:/Users/mauriciozorzan/Documents/node_modules/.bin:/Users/mauriciozorzan/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin:/Users/mauriciozorzan/Documents/CrowdFund/node_modules/.bin:/Users/mauriciozorzan/Documents/node_modules/.bin:/Users/mauriciozorzan/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Users/mauriciozorzan/opt/anaconda3/bin:/Users/mauriciozorzan/opt/anaconda3/condabin",LaunchInstanceID:"FA7D2AB5-EABF-4A90-8822-F73D7972C023",npm_package_json:"/Users/mauriciozorzan/Documents/CrowdFund/client/package.json",__CFBundleIdentifier:"com.microsoft.VSCode",CONDA_PREFIX:"/Users/mauriciozorzan/opt/anaconda3",USER_ZDOTDIR:"/Users/mauriciozorzan",npm_config_init_module:"/Users/mauriciozorzan/.npm-init.js",npm_config_userconfig:"/Users/mauriciozorzan/.npmrc",PWD:"/Users/mauriciozorzan/documents/crowdfund/client",npm_command:"run-script",EDITOR:"vi",npm_lifecycle_event:"build",LANG:"en_US.UTF-8",npm_package_name:"client",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",npm_config_npm_version:"9.8.0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",XPC_SERVICE_NAME:"0",_CE_M:"",npm_package_version:"0.0.0",VSCODE_INJECTION:"1",HOME:"/Users/mauriciozorzan",SHLVL:"9",VSCODE_GIT_ASKPASS_MAIN:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"mauriciozorzan",CONDA_PYTHON_EXE:"/Users/mauriciozorzan/opt/anaconda3/bin/python",npm_config_cache:"/Users/mauriciozorzan/.npm",npm_lifecycle_script:"tsc && vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/11/wnc852jj5wj57yyc4fvtw9gw0000gn/T/vscode-git-7d1e023113.sock",CONDA_DEFAULT_ENV:"base",npm_config_user_agent:"npm/9.8.0 node/v20.5.1 darwin x64 workspaces/false",GIT_ASKPASS:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",VSCODE_GIT_ASKPASS_NODE:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",SECURITYSESSIONID:"186a3",COLORTERM:"truecolor",npm_config_prefix:"/usr/local",npm_node_execpath:"/usr/local/bin/node",_:"/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin/vite",NODE_ENV:"production"}.NODE_DEBUG&&/\bsemver\b/i.test({TERM_PROGRAM:"vscode",NODE:"/usr/local/bin/node",INIT_CWD:"/Users/mauriciozorzan/Documents/CrowdFund/client",SHELL:"/bin/zsh",TERM:"xterm-256color",TMPDIR:"/var/folders/11/wnc852jj5wj57yyc4fvtw9gw0000gn/T/",npm_config_metrics_registry:"https://registry.npmjs.org/",CONDA_SHLVL:"1",npm_config_global_prefix:"/usr/local",CONDA_PROMPT_MODIFIER:"(base) ",TERM_PROGRAM_VERSION:"1.85.0",MallocNanoZone:"0",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",ZDOTDIR:"/Users/mauriciozorzan",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/mauriciozorzan/Documents/CrowdFund/client",USER:"mauriciozorzan",COMMAND_MODE:"unix2003",CONDA_EXE:"/Users/mauriciozorzan/opt/anaconda3/bin/conda",npm_config_globalconfig:"/usr/local/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.SlHtCwQSLX/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x0:0x64",npm_execpath:"/usr/local/lib/node_modules/npm/bin/npm-cli.js",_CE_CONDA:"",PATH:"/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin:/Users/mauriciozorzan/Documents/CrowdFund/node_modules/.bin:/Users/mauriciozorzan/Documents/node_modules/.bin:/Users/mauriciozorzan/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin:/Users/mauriciozorzan/Documents/CrowdFund/node_modules/.bin:/Users/mauriciozorzan/Documents/node_modules/.bin:/Users/mauriciozorzan/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Frameworks/Python.framework/Versions/3.11/bin:/Users/mauriciozorzan/opt/anaconda3/bin:/Users/mauriciozorzan/opt/anaconda3/condabin",LaunchInstanceID:"FA7D2AB5-EABF-4A90-8822-F73D7972C023",npm_package_json:"/Users/mauriciozorzan/Documents/CrowdFund/client/package.json",__CFBundleIdentifier:"com.microsoft.VSCode",CONDA_PREFIX:"/Users/mauriciozorzan/opt/anaconda3",USER_ZDOTDIR:"/Users/mauriciozorzan",npm_config_init_module:"/Users/mauriciozorzan/.npm-init.js",npm_config_userconfig:"/Users/mauriciozorzan/.npmrc",PWD:"/Users/mauriciozorzan/documents/crowdfund/client",npm_command:"run-script",EDITOR:"vi",npm_lifecycle_event:"build",LANG:"en_US.UTF-8",npm_package_name:"client",XPC_FLAGS:"0x0",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"--ms-enable-electron-run-as-node",npm_config_npm_version:"9.8.0",npm_config_node_gyp:"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",XPC_SERVICE_NAME:"0",_CE_M:"",npm_package_version:"0.0.0",VSCODE_INJECTION:"1",HOME:"/Users/mauriciozorzan",SHLVL:"9",VSCODE_GIT_ASKPASS_MAIN:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",LOGNAME:"mauriciozorzan",CONDA_PYTHON_EXE:"/Users/mauriciozorzan/opt/anaconda3/bin/python",npm_config_cache:"/Users/mauriciozorzan/.npm",npm_lifecycle_script:"tsc && vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/11/wnc852jj5wj57yyc4fvtw9gw0000gn/T/vscode-git-7d1e023113.sock",CONDA_DEFAULT_ENV:"base",npm_config_user_agent:"npm/9.8.0 node/v20.5.1 darwin x64 workspaces/false",GIT_ASKPASS:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",VSCODE_GIT_ASKPASS_NODE:"/Users/mauriciozorzan/Desktop/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",SECURITYSESSIONID:"186a3",COLORTERM:"truecolor",npm_config_prefix:"/usr/local",npm_node_execpath:"/usr/local/bin/node",_:"/Users/mauriciozorzan/Documents/CrowdFund/client/node_modules/.bin/vite",NODE_ENV:"production"}.NODE_DEBUG)?(...o)=>console.error("SEMVER",...o):()=>{};var F=he;(function(o,e){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:c,MAX_LENGTH:R}=V,p=F;e=o.exports={};const b=e.re=[],A=e.safeRe=[],s=e.src=[],i=e.t={};let _=0;const I="[a-zA-Z0-9-]",L=[["\\s",1],["\\d",R],[I,c]],G=D=>{for(const[C,z]of L)D=D.split(`${C}*`).join(`${C}{0,${z}}`).split(`${C}+`).join(`${C}{1,${z}}`);return D},E=(D,C,z)=>{const S=G(C),g=_++;p(D,g,C),i[D]=g,s[g]=C,b[g]=new RegExp(C,z?"g":void 0),A[g]=new RegExp(S,z?"g":void 0)};E("NUMERICIDENTIFIER","0|[1-9]\\d*"),E("NUMERICIDENTIFIERLOOSE","\\d+"),E("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${I}*`),E("MAINVERSION",`(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})`),E("MAINVERSIONLOOSE",`(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})`),E("PRERELEASEIDENTIFIER",`(?:${s[i.NUMERICIDENTIFIER]}|${s[i.NONNUMERICIDENTIFIER]})`),E("PRERELEASEIDENTIFIERLOOSE",`(?:${s[i.NUMERICIDENTIFIERLOOSE]}|${s[i.NONNUMERICIDENTIFIER]})`),E("PRERELEASE",`(?:-(${s[i.PRERELEASEIDENTIFIER]}(?:\\.${s[i.PRERELEASEIDENTIFIER]})*))`),E("PRERELEASELOOSE",`(?:-?(${s[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[i.PRERELEASEIDENTIFIERLOOSE]})*))`),E("BUILDIDENTIFIER",`${I}+`),E("BUILD",`(?:\\+(${s[i.BUILDIDENTIFIER]}(?:\\.${s[i.BUILDIDENTIFIER]})*))`),E("FULLPLAIN",`v?${s[i.MAINVERSION]}${s[i.PRERELEASE]}?${s[i.BUILD]}?`),E("FULL",`^${s[i.FULLPLAIN]}$`),E("LOOSEPLAIN",`[v=\\s]*${s[i.MAINVERSIONLOOSE]}${s[i.PRERELEASELOOSE]}?${s[i.BUILD]}?`),E("LOOSE",`^${s[i.LOOSEPLAIN]}$`),E("GTLT","((?:<|>)?=?)"),E("XRANGEIDENTIFIERLOOSE",`${s[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),E("XRANGEIDENTIFIER",`${s[i.NUMERICIDENTIFIER]}|x|X|\\*`),E("XRANGEPLAIN",`[v=\\s]*(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:${s[i.PRERELEASE]})?${s[i.BUILD]}?)?)?`),E("XRANGEPLAINLOOSE",`[v=\\s]*(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:${s[i.PRERELEASELOOSE]})?${s[i.BUILD]}?)?)?`),E("XRANGE",`^${s[i.GTLT]}\\s*${s[i.XRANGEPLAIN]}$`),E("XRANGELOOSE",`^${s[i.GTLT]}\\s*${s[i.XRANGEPLAINLOOSE]}$`),E("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),E("COERCE",`${s[i.COERCEPLAIN]}(?:$|[^\\d])`),E("COERCEFULL",s[i.COERCEPLAIN]+`(?:${s[i.PRERELEASE]})?(?:${s[i.BUILD]})?(?:$|[^\\d])`),E("COERCERTL",s[i.COERCE],!0),E("COERCERTLFULL",s[i.COERCEFULL],!0),E("LONETILDE","(?:~>?)"),E("TILDETRIM",`(\\s*)${s[i.LONETILDE]}\\s+`,!0),e.tildeTrimReplace="$1~",E("TILDE",`^${s[i.LONETILDE]}${s[i.XRANGEPLAIN]}$`),E("TILDELOOSE",`^${s[i.LONETILDE]}${s[i.XRANGEPLAINLOOSE]}$`),E("LONECARET","(?:\\^)"),E("CARETTRIM",`(\\s*)${s[i.LONECARET]}\\s+`,!0),e.caretTrimReplace="$1^",E("CARET",`^${s[i.LONECARET]}${s[i.XRANGEPLAIN]}$`),E("CARETLOOSE",`^${s[i.LONECARET]}${s[i.XRANGEPLAINLOOSE]}$`),E("COMPARATORLOOSE",`^${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]})$|^$`),E("COMPARATOR",`^${s[i.GTLT]}\\s*(${s[i.FULLPLAIN]})$|^$`),E("COMPARATORTRIM",`(\\s*)${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]}|${s[i.XRANGEPLAIN]})`,!0),e.comparatorTrimReplace="$1$2$3",E("HYPHENRANGE",`^\\s*(${s[i.XRANGEPLAIN]})\\s+-\\s+(${s[i.XRANGEPLAIN]})\\s*$`),E("HYPHENRANGELOOSE",`^\\s*(${s[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[i.XRANGEPLAINLOOSE]})\\s*$`),E("STAR","(<|>)?=?\\s*\\*"),E("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),E("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(X,X.exports);var M=X.exports;const Re=Object.freeze({loose:!0}),fe=Object.freeze({}),Ie=o=>o?typeof o!="object"?Re:o:fe;var k=Ie;const K=/^[0-9]+$/,ee=(o,e)=>{const r=K.test(o),c=K.test(e);return r&&c&&(o=+o,e=+e),o===e?0:r&&!c?-1:c&&!r?1:o<e?-1:1},Oe=(o,e)=>ee(e,o);var Ne={compareIdentifiers:ee,rcompareIdentifiers:Oe};const y=F,{MAX_LENGTH:W,MAX_SAFE_INTEGER:v}=V,{safeRe:B,t:Y}=M,Ae=k,{compareIdentifiers:U}=Ne;let Se=class T{constructor(e,r){if(r=Ae(r),e instanceof T){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>W)throw new TypeError(`version is longer than ${W} characters`);y("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;const c=e.trim().match(r.loose?B[Y.LOOSE]:B[Y.FULL]);if(!c)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+c[1],this.minor=+c[2],this.patch=+c[3],this.major>v||this.major<0)throw new TypeError("Invalid major version");if(this.minor>v||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>v||this.patch<0)throw new TypeError("Invalid patch version");c[4]?this.prerelease=c[4].split(".").map(R=>{if(/^[0-9]+$/.test(R)){const p=+R;if(p>=0&&p<v)return p}return R}):this.prerelease=[],this.build=c[5]?c[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(y("SemVer.compare",this.version,this.options,e),!(e instanceof T)){if(typeof e=="string"&&e===this.version)return 0;e=new T(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof T||(e=new T(e,this.options)),U(this.major,e.major)||U(this.minor,e.minor)||U(this.patch,e.patch)}comparePre(e){if(e instanceof T||(e=new T(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{const c=this.prerelease[r],R=e.prerelease[r];if(y("prerelease compare",r,c,R),c===void 0&&R===void 0)return 0;if(R===void 0)return 1;if(c===void 0)return-1;if(c===R)continue;return U(c,R)}while(++r)}compareBuild(e){e instanceof T||(e=new T(e,this.options));let r=0;do{const c=this.build[r],R=e.build[r];if(y("build compare",r,c,R),c===void 0&&R===void 0)return 0;if(R===void 0)return 1;if(c===void 0)return-1;if(c===R)continue;return U(c,R)}while(++r)}inc(e,r,c){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,c);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,c);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,c),this.inc("pre",r,c);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,c),this.inc("pre",r,c);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const R=Number(c)?1:0;if(!r&&c===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[R];else{let p=this.prerelease.length;for(;--p>=0;)typeof this.prerelease[p]=="number"&&(this.prerelease[p]++,p=-2);if(p===-1){if(r===this.prerelease.join(".")&&c===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(R)}}if(r){let p=[r,R];c===!1&&(p=[r]),U(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=p):this.prerelease=p}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};var H=Se;const q=H,$e=(o,e,r)=>new q(o,r).compare(new q(e,r));var w=$e;const Ce=w,Te=(o,e,r)=>Ce(o,e,r)>0;var Le=Te;const De=w,be=(o,e,r)=>De(o,e,r)<0;var ze=be;const ge=w,Ue=(o,e,r)=>ge(o,e,r)===0;var we=Ue;const Pe=w,ye=(o,e,r)=>Pe(o,e,r)!==0;var ve=ye;const Fe=w,Ge=(o,e,r)=>Fe(o,e,r)>=0;var xe=Ge;const je=w,Xe=(o,e,r)=>je(o,e,r)<=0;var Ve=Xe;const Me=we,ke=ve,He=Le,Ke=xe,We=ze,Be=Ve,Ye=(o,e,r,c)=>{switch(e){case"===":return typeof o=="object"&&(o=o.version),typeof r=="object"&&(r=r.version),o===r;case"!==":return typeof o=="object"&&(o=o.version),typeof r=="object"&&(r=r.version),o!==r;case"":case"=":case"==":return Me(o,r,c);case"!=":return ke(o,r,c);case">":return He(o,r,c);case">=":return Ke(o,r,c);case"<":return We(o,r,c);case"<=":return Be(o,r,c);default:throw new TypeError(`Invalid operator: ${e}`)}};var qe=Ye;class Ze{constructor(){this.max=1e3,this.map=new Map}get(e){const r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){const R=this.map.keys().next().value;this.delete(R)}this.map.set(e,r)}return this}}var Je=Ze,x,Z;function se(){if(Z)return x;Z=1;class o{constructor(n,m){if(m=c(m),n instanceof o)return n.loose===!!m.loose&&n.includePrerelease===!!m.includePrerelease?n:new o(n.raw,m);if(n instanceof R)return this.raw=n.value,this.set=[[n]],this.format(),this;if(this.options=m,this.loose=!!m.loose,this.includePrerelease=!!m.includePrerelease,this.raw=n.trim().split(/\s+/).join(" "),this.set=this.raw.split("||").map(l=>this.parseRange(l.trim())).filter(l=>l.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const l=this.set[0];if(this.set=this.set.filter(u=>!E(u[0])),this.set.length===0)this.set=[l];else if(this.set.length>1){for(const u of this.set)if(u.length===1&&D(u[0])){this.set=[u];break}}}this.format()}format(){return this.range=this.set.map(n=>n.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(n){const l=((this.options.includePrerelease&&L)|(this.options.loose&&G))+":"+n,u=r.get(l);if(u)return u;const a=this.options.loose,d=a?A[s.HYPHENRANGELOOSE]:A[s.HYPHENRANGE];n=n.replace(d,le(this.options.includePrerelease)),p("hyphen replace",n),n=n.replace(A[s.COMPARATORTRIM],i),p("comparator trim",n),n=n.replace(A[s.TILDETRIM],_),p("tilde trim",n),n=n.replace(A[s.CARETTRIM],I),p("caret trim",n);let f=n.split(" ").map(N=>z(N,this.options)).join(" ").split(/\s+/).map(N=>ce(N,this.options));a&&(f=f.filter(N=>(p("loose invalid filter",N,this.options),!!N.match(A[s.COMPARATORLOOSE])))),p("range list",f);const h=new Map,O=f.map(N=>new R(N,this.options));for(const N of O){if(E(N))return[N];h.set(N.value,N)}h.size>1&&h.has("")&&h.delete("");const $=[...h.values()];return r.set(l,$),$}intersects(n,m){if(!(n instanceof o))throw new TypeError("a Range is required");return this.set.some(l=>C(l,m)&&n.set.some(u=>C(u,m)&&l.every(a=>u.every(d=>a.intersects(d,m)))))}test(n){if(!n)return!1;if(typeof n=="string")try{n=new b(n,this.options)}catch{return!1}for(let m=0;m<this.set.length;m++)if(ue(this.set[m],n,this.options))return!0;return!1}}x=o;const e=Je,r=new e,c=k,R=Qe(),p=F,b=H,{safeRe:A,t:s,comparatorTrimReplace:i,tildeTrimReplace:_,caretTrimReplace:I}=M,{FLAG_INCLUDE_PRERELEASE:L,FLAG_LOOSE:G}=V,E=t=>t.value==="<0.0.0-0",D=t=>t.value==="",C=(t,n)=>{let m=!0;const l=t.slice();let u=l.pop();for(;m&&l.length;)m=l.every(a=>u.intersects(a,n)),u=l.pop();return m},z=(t,n)=>(p("comp",t,n),t=ne(t,n),p("caret",t),t=g(t,n),p("tildes",t),t=te(t,n),p("xrange",t),t=ae(t,n),p("stars",t),t),S=t=>!t||t.toLowerCase()==="x"||t==="*",g=(t,n)=>t.trim().split(/\s+/).map(m=>re(m,n)).join(" "),re=(t,n)=>{const m=n.loose?A[s.TILDELOOSE]:A[s.TILDE];return t.replace(m,(l,u,a,d,f)=>{p("tilde",t,l,u,a,d,f);let h;return S(u)?h="":S(a)?h=`>=${u}.0.0 <${+u+1}.0.0-0`:S(d)?h=`>=${u}.${a}.0 <${u}.${+a+1}.0-0`:f?(p("replaceTilde pr",f),h=`>=${u}.${a}.${d}-${f} <${u}.${+a+1}.0-0`):h=`>=${u}.${a}.${d} <${u}.${+a+1}.0-0`,p("tilde return",h),h})},ne=(t,n)=>t.trim().split(/\s+/).map(m=>ie(m,n)).join(" "),ie=(t,n)=>{p("caret",t,n);const m=n.loose?A[s.CARETLOOSE]:A[s.CARET],l=n.includePrerelease?"-0":"";return t.replace(m,(u,a,d,f,h)=>{p("caret",t,u,a,d,f,h);let O;return S(a)?O="":S(d)?O=`>=${a}.0.0${l} <${+a+1}.0.0-0`:S(f)?a==="0"?O=`>=${a}.${d}.0${l} <${a}.${+d+1}.0-0`:O=`>=${a}.${d}.0${l} <${+a+1}.0.0-0`:h?(p("replaceCaret pr",h),a==="0"?d==="0"?O=`>=${a}.${d}.${f}-${h} <${a}.${d}.${+f+1}-0`:O=`>=${a}.${d}.${f}-${h} <${a}.${+d+1}.0-0`:O=`>=${a}.${d}.${f}-${h} <${+a+1}.0.0-0`):(p("no pr"),a==="0"?d==="0"?O=`>=${a}.${d}.${f}${l} <${a}.${d}.${+f+1}-0`:O=`>=${a}.${d}.${f}${l} <${a}.${+d+1}.0-0`:O=`>=${a}.${d}.${f} <${+a+1}.0.0-0`),p("caret return",O),O})},te=(t,n)=>(p("replaceXRanges",t,n),t.split(/\s+/).map(m=>oe(m,n)).join(" ")),oe=(t,n)=>{t=t.trim();const m=n.loose?A[s.XRANGELOOSE]:A[s.XRANGE];return t.replace(m,(l,u,a,d,f,h)=>{p("xRange",t,l,u,a,d,f,h);const O=S(a),$=O||S(d),N=$||S(f),P=N;return u==="="&&P&&(u=""),h=n.includePrerelease?"-0":"",O?u===">"||u==="<"?l="<0.0.0-0":l="*":u&&P?($&&(d=0),f=0,u===">"?(u=">=",$?(a=+a+1,d=0,f=0):(d=+d+1,f=0)):u==="<="&&(u="<",$?a=+a+1:d=+d+1),u==="<"&&(h="-0"),l=`${u+a}.${d}.${f}${h}`):$?l=`>=${a}.0.0${h} <${+a+1}.0.0-0`:N&&(l=`>=${a}.${d}.0${h} <${a}.${+d+1}.0-0`),p("xRange return",l),l})},ae=(t,n)=>(p("replaceStars",t,n),t.trim().replace(A[s.STAR],"")),ce=(t,n)=>(p("replaceGTE0",t,n),t.trim().replace(A[n.includePrerelease?s.GTE0PRE:s.GTE0],"")),le=t=>(n,m,l,u,a,d,f,h,O,$,N,P)=>(S(l)?m="":S(u)?m=`>=${l}.0.0${t?"-0":""}`:S(a)?m=`>=${l}.${u}.0${t?"-0":""}`:d?m=`>=${m}`:m=`>=${m}${t?"-0":""}`,S(O)?h="":S($)?h=`<${+O+1}.0.0-0`:S(N)?h=`<${O}.${+$+1}.0-0`:P?h=`<=${O}.${$}.${N}-${P}`:t?h=`<${O}.${$}.${+N+1}-0`:h=`<=${h}`,`${m} ${h}`.trim()),ue=(t,n,m)=>{for(let l=0;l<t.length;l++)if(!t[l].test(n))return!1;if(n.prerelease.length&&!m.includePrerelease){for(let l=0;l<t.length;l++)if(p(t[l].semver),t[l].semver!==R.ANY&&t[l].semver.prerelease.length>0){const u=t[l].semver;if(u.major===n.major&&u.minor===n.minor&&u.patch===n.patch)return!0}return!1}return!0};return x}var j,J;function Qe(){if(J)return j;J=1;const o=Symbol("SemVer ANY");class e{static get ANY(){return o}constructor(_,I){if(I=r(I),_ instanceof e){if(_.loose===!!I.loose)return _;_=_.value}_=_.trim().split(/\s+/).join(" "),b("comparator",_,I),this.options=I,this.loose=!!I.loose,this.parse(_),this.semver===o?this.value="":this.value=this.operator+this.semver.version,b("comp",this)}parse(_){const I=this.options.loose?c[R.COMPARATORLOOSE]:c[R.COMPARATOR],L=_.match(I);if(!L)throw new TypeError(`Invalid comparator: ${_}`);this.operator=L[1]!==void 0?L[1]:"",this.operator==="="&&(this.operator=""),L[2]?this.semver=new A(L[2],this.options.loose):this.semver=o}toString(){return this.value}test(_){if(b("Comparator.test",_,this.options.loose),this.semver===o||_===o)return!0;if(typeof _=="string")try{_=new A(_,this.options)}catch{return!1}return p(_,this.operator,this.semver,this.options)}intersects(_,I){if(!(_ instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new s(_.value,I).test(this.value):_.operator===""?_.value===""?!0:new s(this.value,I).test(_.semver):(I=r(I),I.includePrerelease&&(this.value==="<0.0.0-0"||_.value==="<0.0.0-0")||!I.includePrerelease&&(this.value.startsWith("<0.0.0")||_.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&_.operator.startsWith(">")||this.operator.startsWith("<")&&_.operator.startsWith("<")||this.semver.version===_.semver.version&&this.operator.includes("=")&&_.operator.includes("=")||p(this.semver,"<",_.semver,I)&&this.operator.startsWith(">")&&_.operator.startsWith("<")||p(this.semver,">",_.semver,I)&&this.operator.startsWith("<")&&_.operator.startsWith(">")))}}j=e;const r=k,{safeRe:c,t:R}=M,p=qe,b=F,A=H,s=se();return j}const es=se(),ss=(o,e,r)=>{try{e=new es(e,r)}catch{return!1}return e.test(o)};var rs=ss;export{H as a,se as b,w as c,Qe as d,Ve as e,xe as f,Le as g,V as h,Ne as i,we as j,qe as k,ze as l,ve as n,M as r,rs as s};

"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42910:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"2.5.0",sidebar_position:1,keywords:["release-notes"],description:"release-notes"},l="2.5.0",i={unversionedId:"2.5.0-release",id:"2.5.0-release",isDocsHomePage:!1,title:"2.5.0",description:"release-notes",source:"@site/event/2.5.0-release.md",sourceDirName:".",slug:"/2.5.0-release",permalink:"/event/2.5.0-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.5.0-release.md",version:"current",lastUpdatedBy:"qifanyyy",lastUpdatedAt:1663141413,formattedLastUpdatedAt:"9/14/2022",sidebarPosition:1,frontMatter:{title:"2.5.0",sidebar_position:1,keywords:["release-notes"],description:"release-notes"}},p=[{value:"New Features",id:"new-features",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],c={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"250"},"2.5.0"),(0,a.kt)("h3",{id:"new-features"},"New Features"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add logging-aliyun-sls plugin."),(0,a.kt)("li",{parentName:"ol"},"Add mock plugin."),(0,a.kt)("li",{parentName:"ol"},"Add logging-es plugin."),(0,a.kt)("li",{parentName:"ol"},"Add logging-rocketmq plugin."),(0,a.kt)("li",{parentName:"ol"},"Add logging-kafka plugin."),(0,a.kt)("li",{parentName:"ol"},"Add custom message writer in response plugin."),(0,a.kt)("li",{parentName:"ol"},"Add record log in admin."),(0,a.kt)("li",{parentName:"ol"},"Add apache dubbo http."),(0,a.kt)("li",{parentName:"ol"},"Add nacos register."),(0,a.kt)("li",{parentName:"ol"},"Add the logic of annotation on the splicing class for sofa client."),(0,a.kt)("li",{parentName:"ol"},"Add the logic of annotation on the splicing class for motan client."),(0,a.kt)("li",{parentName:"ol"},"Add netty http server parameters."),(0,a.kt)("li",{parentName:"ol"},"Add the logic of annotation on the splicing class for apache dubbo client."),(0,a.kt)("li",{parentName:"ol"},"Add alert module."),(0,a.kt)("li",{parentName:"ol"},"Add support configurable timeout for MotanPlugin."),(0,a.kt)("li",{parentName:"ol"},"Add api document."),(0,a.kt)("li",{parentName:"ol"},"Add user permissions Exclude admin."),(0,a.kt)("li",{parentName:"ol"},"Add springBoot upgrade to 2.6.8."),(0,a.kt)("li",{parentName:"ol"},"Add support regsiter instance to consul."),(0,a.kt)("li",{parentName:"ol"},"Add admin Support oracle database.")),(0,a.kt)("h3",{id:"enhancement"},"Enhancement"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enhancement cache pluign."),(0,a.kt)("li",{parentName:"ol"},"Enhancement divide plugin.")),(0,a.kt)("h3",{id:"refactor"},"Refactor"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Refactor spring cloud loadbalancer."),(0,a.kt)("li",{parentName:"ol"},"Refactor thread pool."),(0,a.kt)("li",{parentName:"ol"},"Refactor max memory config logic."),(0,a.kt)("li",{parentName:"ol"},"Refactor cors logic."),(0,a.kt)("li",{parentName:"ol"},"Refactor selector match."),(0,a.kt)("li",{parentName:"ol"},"Refactor fixed and elastic connection provider pool."),(0,a.kt)("li",{parentName:"ol"},"Refactor uri register."),(0,a.kt)("li",{parentName:"ol"},"Refactor zk client delete logic."),(0,a.kt)("li",{parentName:"ol"},"Refactor IpUtils."),(0,a.kt)("li",{parentName:"ol"},"Refactor result wrap."),(0,a.kt)("li",{parentName:"ol"},"Refactor app auth."),(0,a.kt)("li",{parentName:"ol"},"Refactor http client."),(0,a.kt)("li",{parentName:"ol"},"Refactor proxy and webclient remove host."),(0,a.kt)("li",{parentName:"ol"},"Refactor shared thread pool.")),(0,a.kt)("h3",{id:"bug-fix"},"Bug Fix"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Fix divide has nullpointerexception."),(0,a.kt)("li",{parentName:"ol"},"Fix body maxInMemorySize."),(0,a.kt)("li",{parentName:"ol"},"Fix admin delay update handle in selector."),(0,a.kt)("li",{parentName:"ol"},"Fix register-client loop error."),(0,a.kt)("li",{parentName:"ol"},"Fix the error of combination plugin."),(0,a.kt)("li",{parentName:"ol"},"Fix sofa and websocket client lossless registration."),(0,a.kt)("li",{parentName:"ol"},"Fix grpc client lossless registration."),(0,a.kt)("li",{parentName:"ol"},"Fix springcloud client lossless registration."),(0,a.kt)("li",{parentName:"ol"},"Fix spring cloud dubbo example."),(0,a.kt)("li",{parentName:"ol"},"Fix NPE repair of admin module caused by spring MVC example synchronization."),(0,a.kt)("li",{parentName:"ol"},"Fix curator version incompatible in bootstrap."),(0,a.kt)("li",{parentName:"ol"},"Fix hidden logic bug."),(0,a.kt)("li",{parentName:"ol"},"Fix failure to load local plugins."),(0,a.kt)("li",{parentName:"ol"},"Fix pg script error."),(0,a.kt)("li",{parentName:"ol"},"Fix hystrix-plugin tests failure."),(0,a.kt)("li",{parentName:"ol"},"Fix client registration by consul only register 1 metadata."),(0,a.kt)("li",{parentName:"ol"},"Fix websocket datasync can chose allow origin to avoid CSRF.")))}s.isMDXComponent=!0}}]);
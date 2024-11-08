"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{6463:function(e,t,n){var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},1877:function(e,t,n){n.d(t,{default:function(){return o.a}});var r=n(4080),o=n.n(r)},905:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return i},isEqualNode:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!n[e]:o.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:i}=n;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),c=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var l;(null==n?void 0:null==(l=n.tagName)?void 0:l.toLowerCase())===e&&c.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=c.length;t<n;t++)if(a(c[t],e))return c.splice(t,1),!1;return!0});c.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(i-c.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return b},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return v}});let r=n(9920),o=n(1452),a=n(7437),i=r._(n(4887)),c=o._(n(2265)),l=n(6590),s=n(905),u=n(9189),d=new Map,f=new Set,m=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:c="afterInteractive",onError:l,stylesheets:u}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,l);return}let y=()=>{o&&o(),f.add(h)},v=document.createElement("script"),g=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});for(let[n,r]of(a?(v.innerHTML=a.__html||"",y()):i?(v.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(v.src=t,d.set(t,g)),Object.entries(e))){if(void 0===r||m.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();v.setAttribute(e,r)}"worker"===c&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",c),u&&p(u),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function v(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:d,stylesheets:m,...p}=e,{updateScripts:y,scripts:v,getIsSsr:g,appDir:b,nonce:O}=(0,c.useContext)(l.HeadManagerContext),w=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||n;w.current||(o&&e&&f.has(e)&&o(),w.current=!0)},[o,t,n]);let E=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{!E.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),E.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(y?(v[s]=(v[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...p}]),y(v)):g&&g()?f.add(t||n):g&&!g()&&h(e)),b){if(m&&m.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:O,crossOrigin:p.crossOrigin}:{as:"script",nonce:O,crossOrigin:p.crossOrigin}),(0,a.jsx)("script",{nonce:O,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...p,id:t}])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:O,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p,id:t}])+")"}}));"afterInteractive"===s&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity,nonce:O,crossOrigin:p.crossOrigin}:{as:"script",nonce:O,crossOrigin:p.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let b=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9512:function(e,t,n){n.d(t,{F:function(){return s},f:function(){return u}});var r=n(2265),o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,c=r.createContext(void 0),l={setTheme:e=>{},themes:[]},s=()=>{var e;return null!=(e=r.useContext(c))?e:l},u=e=>r.useContext(c)?e.children:r.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:l=!0,storageKey:s="theme",themes:u=d,defaultTheme:f=i?"system":"light",attribute:v="data-theme",value:g,children:b,nonce:O}=e,[w,E]=r.useState(()=>p(s,f)),[S,_]=r.useState(()=>p(s)),j=g?Object.values(g):u,C=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=y());let r=g?g[t]:t,a=n?h():null,c=document.documentElement;if("class"===v?(c.classList.remove(...j),r&&c.classList.add(r)):r?c.setAttribute(v,r):c.removeAttribute(v),l){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;c.style.colorScheme=n}null==a||a()},[]),x=r.useCallback(e=>{let t="function"==typeof e?e(e):e;E(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),L=r.useCallback(e=>{_(y(e)),"system"===w&&i&&!t&&C("system")},[w,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),r.useEffect(()=>{let e=e=>{e.key===s&&x(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),r.useEffect(()=>{C(null!=t?t:w)},[t,w]);let M=r.useMemo(()=>({theme:w,setTheme:x,forcedTheme:t,resolvedTheme:"system"===w?S:w,themes:i?[...u,"system"]:u,systemTheme:i?S:void 0}),[w,x,t,S,i,u]);return r.createElement(c.Provider,{value:M},r.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:l,storageKey:s,themes:u,defaultTheme:f,attribute:v,value:g,children:b,attrs:j,nonce:O}),b)},m=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:c,enableColorScheme:l,defaultTheme:s,value:u,attrs:d,nonce:f}=e,m="system"===s,p="class"===i?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),h=l?(o.includes(s)?s:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),c="";return l&&n&&!t&&o.includes(e)&&(c+="d.style.colorScheme = '".concat(e,"';")),"class"===i?t||r?c+="c.add(".concat(a,")"):c+="null":r&&(c+="d[s](n,".concat(a,")")),c},v=t?"!function(){".concat(p).concat(y(t),"}()"):c?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(m,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(y(u?"x[e]":"e",!0),"}").concat(m?"":"else{"+y(s,!1,!1)+"}").concat(h,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(y(u?"x[e]":"e",!0),"}else{").concat(y(s,!1,!1),";}").concat(h,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:v}})}),p=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},1810:function(e,t,n){n.d(t,{w_:function(){return u}});var r=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return t=>r.createElement(d,c({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,s({key:n},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var n,{attr:o,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),d=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,e=>t(e)):t(o)}}}]);
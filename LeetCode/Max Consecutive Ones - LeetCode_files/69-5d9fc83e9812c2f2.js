(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{3312:function(e,t,n){"use strict";var r=n(48764).lW;const o={},i=o.hasOwnProperty,a=(e,t)=>{for(const n in e)i.call(e,n)&&t(n,e[n])},u=e=>"\\u"+("0000"+e).slice(-4),c=(e,t)=>{let n=e.toString(16);return t?n:n.toUpperCase()},s=o.toString,l=Array.isArray,f={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},d=/[\\\b\f\n\r\t]/,p=/[0-9]/,v=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,m=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,g=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,h=(e,t)=>{const n=()=>{I=x,++t.indentLevel,x=t.indent.repeat(t.indentLevel)},o={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",indentLevel:0,__inline1__:!1,__inline2__:!1},i=t&&t.json;var b,y;i&&(o.quotes="double",o.wrap=!0),b=o,t=(y=t)?(a(y,((e,t)=>{b[e]=t})),b):b,"single"!=t.quotes&&"double"!=t.quotes&&"backtick"!=t.quotes&&(t.quotes="single");const w="double"==t.quotes?'"':"backtick"==t.quotes?"`":"'",R=t.compact,E=t.lowercaseHex;let x=t.indent.repeat(t.indentLevel),I="";const _=t.__inline1__,D=t.__inline2__,T=R?"":"\n";let C,S=!0;const k="binary"==t.numbers,O="octal"==t.numbers,P="decimal"==t.numbers,$="hexadecimal"==t.numbers;if(i&&e&&"function"==typeof e.toJSON&&(e=e.toJSON()),!(e=>"string"==typeof e||"[object String]"==s.call(e))(e)){if((e=>"[object Map]"==s.call(e))(e))return 0==e.size?"new Map()":(R||(t.__inline1__=!0,t.__inline2__=!1),"new Map("+h(Array.from(e),t)+")");if((e=>"[object Set]"==s.call(e))(e))return 0==e.size?"new Set()":"new Set("+h(Array.from(e),t)+")";if((e=>"function"===typeof r&&r.isBuffer(e))(e))return 0==e.length?"Buffer.from([])":"Buffer.from("+h(Array.from(e),t)+")";if(l(e))return C=[],t.wrap=!0,_&&(t.__inline1__=!1,t.__inline2__=!0),D||n(),((e,t)=>{const n=e.length;let r=-1;for(;++r<n;)t(e[r])})(e,(e=>{S=!1,D&&(t.__inline2__=!1),C.push((R||D?"":x)+h(e,t))})),S?"[]":D?"["+C.join(", ")+"]":"["+T+C.join(","+T)+T+(R?"":I)+"]";if(!(e=>"number"==typeof e||"[object Number]"==s.call(e))(e))return(e=>"[object Object]"==s.call(e))(e)?(C=[],t.wrap=!0,n(),a(e,((e,n)=>{S=!1,C.push((R?"":x)+h(e,t)+":"+(R?"":" ")+h(n,t))})),S?"{}":"{"+T+C.join(","+T)+T+(R?"":I)+"}"):i?JSON.stringify(e)||"null":String(e);if(i)return JSON.stringify(e);if(P)return String(e);if($){let t=e.toString(16);return E||(t=t.toUpperCase()),"0x"+t}if(k)return"0b"+e.toString(2);if(O)return"0o"+e.toString(8)}const F=t.escapeEverything?m:g;return C=e.replace(F,((e,n,r,o,a,s)=>{if(n){if(t.minimal)return n;const e=n.charCodeAt(0),r=n.charCodeAt(1);if(t.es6){return"\\u{"+c(1024*(e-55296)+r-56320+65536,E)+"}"}return u(c(e,E))+u(c(r,E))}if(r)return u(c(r.charCodeAt(0),E));if("\0"==e&&!i&&!p.test(s.charAt(a+1)))return"\\0";if(o)return o==w||t.escapeEverything?"\\"+o:o;if(d.test(e))return f[e];if(t.minimal&&!v.test(e))return e;const l=c(e.charCodeAt(0),E);return i||l.length>2?u(l):"\\x"+("00"+l).slice(-2)})),"`"==w&&(C=C.replace(/\$\{/g,"\\${")),t.isScriptContext&&(C=C.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,i?"\\u003C!--":"\\x3C!--")),t.wrap&&(C=w+C+w),C};h.version="3.0.2",e.exports=h},74488:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var n=window.getComputedStyle(e);return Object.freeze({height:parseFloat(n.height||"0"),left:parseFloat(n.paddingLeft||"0"),top:parseFloat(n.paddingTop||"0"),width:parseFloat(n.width||"0")})}},28981:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(74488),o=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=r.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();t.ResizeObservation=o},30215:function(e,t,n){"use strict";var r=n(28981),o=n(32778),i=[],a=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if("undefined"===typeof e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!==typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e}return e.prototype.observe=function(e){var t,n=c("observe",e);if(n)throw TypeError(n);s(this.$$observationTargets,e)>=0||(this.$$observationTargets.push(new r.ResizeObservation(e)),t=this,i.indexOf(t)<0&&(i.push(t),m()))},e.prototype.unobserve=function(e){var t=c("unobserve",e);if(t)throw TypeError(t);var n=s(this.$$observationTargets,e);n<0||(this.$$observationTargets.splice(n,1),0===this.$$observationTargets.length&&u(this))},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[],u(this)},e}();function u(e){var t=i.indexOf(e);t>=0&&(i.splice(t,1),h())}function c(e,t){return"undefined"===typeof t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t&&t.nodeType===window.Node.ELEMENT_NODE?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function s(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1}t.do=a;var l,f=function(e){i.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(n){n.isActive()&&(p(n.target)>e?t.$$activeTargets.push(n):t.$$skippedTargets.push(n))}))}))},d=function(){var e=1/0;return i.forEach((function(t){if(t.$$activeTargets.length){var n=[];t.$$activeTargets.forEach((function(t){var r=new o.ResizeObserverEntry(t.target);n.push(r),t.$$broadcastWidth=r.contentRect.width,t.$$broadcastHeight=r.contentRect.height;var i=p(t.target);i<e&&(e=i)})),t.$$callback(n,t),t.$$activeTargets=[]}})),e},p=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},v=function(){var e=0;for(f(e);i.some((function(e){return!!e.$$activeTargets.length}));)e=d(),f(e);i.some((function(e){return!!e.$$skippedTargets.length}))&&function(){var e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."});window.dispatchEvent(e)}()},m=function(){l||g()},g=function(){l=window.requestAnimationFrame((function(){v(),g()}))},h=function(){l&&!i.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(l),l=void 0)}},32778:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(74488),o=function(e){this.target=e,this.contentRect=r.ContentRect(e)};t.ResizeObserverEntry=o},30237:function(){String.fromCodePoint||function(){var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(r){}return n}(),t=String.fromCharCode,n=Math.floor,r=function(e){var r,o,i=16384,a=[],u=-1,c=arguments.length;if(!c)return"";for(var s="";++u<c;){var l=Number(arguments[u]);if(!isFinite(l)||l<0||l>1114111||n(l)!=l)throw RangeError("Invalid code point: "+l);l<=65535?a.push(l):(r=55296+((l-=65536)>>10),o=l%1024+56320,a.push(r,o)),(u+1==c||a.length>i)&&(s+=t.apply(null,a),a.length=0)}return s};e?e(String,"fromCodePoint",{value:r,configurable:!0,writable:!0}):String.fromCodePoint=r}()},63700:function(e,t,n){"use strict";var r=n(71156),o=n(90793);e.exports=r.bind(null,o)},71156:function(e){"use strict";function t(e){return e>=55296&&e<=56319}function n(e){return e>=56320&&e<=57343}e.exports=function(e,r,o){if("string"!==typeof r)throw new Error("Input must be string");for(var i,a,u=r.length,c=0,s=0;s<u;s+=1){if(i=r.charCodeAt(s),a=r[s],t(i)&&n(r.charCodeAt(s+1))&&(a+=r[s+=1]),(c+=e(a))===o)return r.slice(0,s+1);if(c>o)return r.slice(0,s-a.length+1)}return r}},75840:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(30237);var r=/\\(u\{([0-9A-Fa-f]+)\}|u([0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|([1-7][0-7]{0,2}|[0-7]{2,3})|(['"tbrnfv0\\]))|\\U([0-9A-Fa-f]{8})/g,o={0:"\0",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v","'":"'",'"':'"',"\\":"\\"},i=function(e){return String.fromCodePoint(parseInt(e,16))};t.default=function(e){return e.replace(r,(function(e,t,n,r,a,u,c,s){return void 0!==n?i(n):void 0!==r?i(r):void 0!==a?i(a):void 0!==u?(l=u,String.fromCodePoint(parseInt(l,8))):void 0!==s?i(s):o[c];var l}))},e.exports=t.default},90793:function(e){"use strict";function t(e){return e>=55296&&e<=56319}function n(e){return e>=56320&&e<=57343}e.exports=function(e){if("string"!==typeof e)throw new Error("Input must be string");for(var r=e.length,o=0,i=null,a=null,u=0;u<r;u++)n(i=e.charCodeAt(u))?null!=a&&t(a)?o+=1:o+=3:i<=127?o+=1:i>=128&&i<=2047?o+=2:i>=2048&&i<=65535&&(o+=3),a=i;return o}},72510:function(e,t,n){"use strict";n.d(t,{v:function(){return j}});var r,o,i=n(67294),a=n(32984),u=n(12351),c=n(9362),s=n(94192),l=n(16723),f=n(23784),d=n(19946),p=n(61363),v=n(11497),m=n(64103),g=n(84575),h=n(39650),b=n(31591),y=n(16567),w=n(14157),R=n(51074),E=n(73781),x=n(40476),I=((o=I||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),_=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(_||{}),D=((r=D||{})[r.OpenMenu=0]="OpenMenu",r[r.CloseMenu=1]="CloseMenu",r[r.GoToItem=2]="GoToItem",r[r.Search=3]="Search",r[r.ClearSearch=4]="ClearSearch",r[r.RegisterItem=5]="RegisterItem",r[r.UnregisterItem=6]="UnregisterItem",r);function T(e,t=(e=>e)){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=(0,g.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{items:r,activeItemIndex:o}}let C={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=T(e),o=(0,v.d)(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled})),i=o?e.items.indexOf(o):-1;return-1===i||i===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=T(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...n}},6:(e,t)=>{let n=T(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},S=(0,i.createContext)(null);function k(e){let t=(0,i.useContext)(S);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}function O(e,t){return(0,a.E)(t.type,C,e,t)}S.displayName="MenuContext";let P=i.Fragment,$=(0,u.yV)((function(e,t){let n=(0,i.useReducer)(O,{menuState:1,buttonRef:(0,i.createRef)(),itemsRef:(0,i.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:o,buttonRef:c},s]=n,l=(0,f.T)(t);(0,h.O)([c,o],((e,t)=>{var n;s({type:1}),(0,g.sP)(t,g.tJ.Loose)||(e.preventDefault(),null==(n=c.current)||n.focus())}),0===r);let d=(0,E.z)((()=>{s({type:1})})),p=(0,i.useMemo)((()=>({open:0===r,close:d})),[r,d]),v=e,m={ref:l};return i.createElement(S.Provider,{value:n},i.createElement(y.up,{value:(0,a.E)(r,{0:y.ZM.Open,1:y.ZM.Closed})},(0,u.sY)({ourProps:m,theirProps:v,slot:p,defaultTag:P,name:"Menu"})))})),F=(0,u.yV)((function(e,t){var n;let r=(0,d.M)(),{id:o=`headlessui-menu-button-${r}`,...a}=e,[c,l]=k("Menu.Button"),g=(0,f.T)(c.buttonRef,t),h=(0,s.G)(),b=(0,E.z)((e=>{switch(e.key){case p.R.Space:case p.R.Enter:case p.R.ArrowDown:e.preventDefault(),e.stopPropagation(),l({type:0}),h.nextFrame((()=>l({type:2,focus:v.T.First})));break;case p.R.ArrowUp:e.preventDefault(),e.stopPropagation(),l({type:0}),h.nextFrame((()=>l({type:2,focus:v.T.Last})))}})),y=(0,E.z)((e=>{if(e.key===p.R.Space)e.preventDefault()})),R=(0,E.z)((t=>{if((0,m.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===c.menuState?(l({type:1}),h.nextFrame((()=>{var e;return null==(e=c.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),l({type:0})))})),x=(0,i.useMemo)((()=>({open:0===c.menuState})),[c]),I={ref:g,id:o,type:(0,w.f)(e,c.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=c.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===c.menuState,onKeyDown:b,onKeyUp:y,onClick:R};return(0,u.sY)({ourProps:I,theirProps:a,slot:x,defaultTag:"button",name:"Menu.Button"})})),M=u.AN.RenderStrategy|u.AN.Static,A=(0,u.yV)((function(e,t){var n,r;let o=(0,d.M)(),{id:a=`headlessui-menu-items-${o}`,...l}=e,[m,h]=k("Menu.Items"),w=(0,f.T)(m.itemsRef,t),x=(0,R.i)(m.itemsRef),I=(0,s.G)(),_=(0,y.oJ)(),D=null!==_?_===y.ZM.Open:0===m.menuState;(0,i.useEffect)((()=>{let e=m.itemsRef.current;!e||0===m.menuState&&e!==(null==x?void 0:x.activeElement)&&e.focus({preventScroll:!0})}),[m.menuState,m.itemsRef,x]),(0,b.B)({container:m.itemsRef.current,enabled:0===m.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let T=(0,E.z)((e=>{var t,n;switch(I.dispose(),e.key){case p.R.Space:if(""!==m.searchQuery)return e.preventDefault(),e.stopPropagation(),h({type:3,value:e.key});case p.R.Enter:if(e.preventDefault(),e.stopPropagation(),h({type:1}),null!==m.activeItemIndex){let{dataRef:e}=m.items[m.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}(0,g.wI)(m.buttonRef.current);break;case p.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.Next});case p.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.Previous});case p.R.Home:case p.R.PageUp:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.First});case p.R.End:case p.R.PageDown:return e.preventDefault(),e.stopPropagation(),h({type:2,focus:v.T.Last});case p.R.Escape:e.preventDefault(),e.stopPropagation(),h({type:1}),(0,c.k)().nextFrame((()=>{var e;return null==(e=m.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case p.R.Tab:e.preventDefault(),e.stopPropagation(),h({type:1}),(0,c.k)().nextFrame((()=>{(0,g.EO)(m.buttonRef.current,e.shiftKey?g.TO.Previous:g.TO.Next)}));break;default:1===e.key.length&&(h({type:3,value:e.key}),I.setTimeout((()=>h({type:4})),350))}})),C=(0,E.z)((e=>{if(e.key===p.R.Space)e.preventDefault()})),S=(0,i.useMemo)((()=>({open:0===m.menuState})),[m]),O={"aria-activedescendant":null===m.activeItemIndex||null==(n=m.items[m.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=m.buttonRef.current)?void 0:r.id,id:a,onKeyDown:T,onKeyUp:C,role:"menu",tabIndex:0,ref:w};return(0,u.sY)({ourProps:O,theirProps:l,slot:S,defaultTag:"div",features:M,visible:D,name:"Menu.Items"})})),z=i.Fragment,N=(0,u.yV)((function(e,t){let n=(0,d.M)(),{id:r=`headlessui-menu-item-${n}`,disabled:o=!1,...a}=e,[s,p]=k("Menu.Item"),m=null!==s.activeItemIndex&&s.items[s.activeItemIndex].id===r,h=(0,i.useRef)(null),b=(0,f.T)(t,h);(0,l.e)((()=>{if(0!==s.menuState||!m||0===s.activationTrigger)return;let e=(0,c.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=h.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[h,m,s.menuState,s.activationTrigger,s.activeItemIndex]);let y=(0,i.useRef)({disabled:o,domRef:h});(0,l.e)((()=>{y.current.disabled=o}),[y,o]),(0,l.e)((()=>{var e,t;y.current.textValue=null==(t=null==(e=h.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[y,h]),(0,l.e)((()=>(p({type:5,id:r,dataRef:y}),()=>p({type:6,id:r}))),[y,r]);let w=(0,E.z)((()=>{p({type:1})})),R=(0,E.z)((e=>{if(o)return e.preventDefault();p({type:1}),(0,g.wI)(s.buttonRef.current)})),I=(0,E.z)((()=>{if(o)return p({type:2,focus:v.T.Nothing});p({type:2,focus:v.T.Specific,id:r})})),_=(0,x.g)(),D=(0,E.z)((e=>_.update(e))),T=(0,E.z)((e=>{!_.wasMoved(e)||o||m||p({type:2,focus:v.T.Specific,id:r,trigger:0})})),C=(0,E.z)((e=>{!_.wasMoved(e)||o||!m||p({type:2,focus:v.T.Nothing})})),S=(0,i.useMemo)((()=>({active:m,disabled:o,close:w})),[m,o,w]);return(0,u.sY)({ourProps:{id:r,ref:b,role:"menuitem",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,disabled:void 0,onClick:R,onFocus:I,onPointerEnter:D,onMouseEnter:D,onPointerMove:T,onMouseMove:T,onPointerLeave:C,onMouseLeave:C},theirProps:a,slot:S,defaultTag:z,name:"Menu.Item"})})),j=Object.assign($,{Button:F,Items:A,Item:N})},77768:function(e,t,n){"use strict";n.d(t,{r:function(){return w}});var r=n(67294),o=n(12351),i=n(19946),a=n(61363),u=n(64103),c=n(95389),s=n(39516),l=n(14157),f=n(23784),d=n(46045),p=n(18689),v=n(73781),m=n(31147),g=n(94192);let h=(0,r.createContext)(null);h.displayName="GroupContext";let b=r.Fragment;let y=(0,o.yV)((function(e,t){let n=(0,i.M)(),{id:c=`headlessui-switch-${n}`,checked:s,defaultChecked:b=!1,onChange:y,name:w,value:R,...E}=e,x=(0,r.useContext)(h),I=(0,r.useRef)(null),_=(0,f.T)(I,t,null===x?null:x.setSwitch),[D,T]=(0,m.q)(s,y,b),C=(0,v.z)((()=>null==T?void 0:T(!D))),S=(0,v.z)((e=>{if((0,u.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),C()})),k=(0,v.z)((e=>{e.key===a.R.Space?(e.preventDefault(),C()):e.key===a.R.Enter&&(0,p.g)(e.currentTarget)})),O=(0,v.z)((e=>e.preventDefault())),P=(0,r.useMemo)((()=>({checked:D})),[D]),$={id:c,ref:_,role:"switch",type:(0,l.f)(e,I),tabIndex:0,"aria-checked":D,"aria-labelledby":null==x?void 0:x.labelledby,"aria-describedby":null==x?void 0:x.describedby,onClick:S,onKeyUp:k,onKeyPress:O},F=(0,g.G)();return(0,r.useEffect)((()=>{var e;let t=null==(e=I.current)?void 0:e.closest("form");!t||void 0!==b&&F.addEventListener(t,"reset",(()=>{T(b)}))}),[I,T]),r.createElement(r.Fragment,null,null!=w&&D&&r.createElement(d._,{features:d.A.Hidden,...(0,o.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:D,name:w,value:R})}),(0,o.sY)({ourProps:$,theirProps:E,slot:P,defaultTag:"button",name:"Switch"}))})),w=Object.assign(y,{Group:function(e){let[t,n]=(0,r.useState)(null),[i,a]=(0,c.b)(),[u,l]=(0,s.f)(),f=(0,r.useMemo)((()=>({switch:t,setSwitch:n,labelledby:i,describedby:u})),[t,n,i,u]),d=e;return r.createElement(l,{name:"Switch.Description"},r.createElement(a,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},r.createElement(h.Provider,{value:f},(0,o.sY)({ourProps:{},theirProps:d,defaultTag:b,name:"Switch.Group"}))))},Label:c._,Description:s.d})},40476:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(67294);function o(e){return[e.screenX,e.screenY]}function i(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=o(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=o(t)}}}},31591:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(67294),o=n(16723),i=n(15466);function a({container:e,accept:t,walk:n,enabled:a=!0}){let u=(0,r.useRef)(t),c=(0,r.useRef)(n);(0,r.useEffect)((()=>{u.current=t,c.current=n}),[t,n]),(0,o.e)((()=>{if(!e||!a)return;let t=(0,i.r)(e);if(!t)return;let n=u.current,r=c.current,o=Object.assign((e=>n(e)),{acceptNode:n}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)r(s.currentNode)}),[e,a,u,c])}},11497:function(e,t,n){"use strict";n.d(t,{T:function(){return o},d:function(){return i}});var r,o=((r=o||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==o&&r.length-n-1>=o)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=o)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===i?r:i}},12854:function(e,t,n){"use strict";n.d(t,{Dx:function(){return ee},VY:function(){return X},aV:function(){return J},dk:function(){return te},fC:function(){return Q},h_:function(){return Y},jm:function(){return H},p8:function(){return R},x8:function(){return ne},xz:function(){return G}});var r=n(87462),o=n(67294),i=n(36206),a=n(28771),u=n(25360),c=n(91276),s=n(77342),l=n(46063),f=n(95420),d=n(42651),p=n(29115),v=n(75320),m=n(27552),g=n(42026),h=n(23541),b=n(88426);const y="Dialog",[w,R]=(0,u.b)(y),[E,x]=w(y),I=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:u=!0}=e,l=(0,o.useRef)(null),f=(0,o.useRef)(null),[d=!1,p]=(0,s.T)({prop:r,defaultProp:i,onChange:a});return(0,o.createElement)(E,{scope:t,triggerRef:l,contentRef:f,contentId:(0,c.M)(),titleId:(0,c.M)(),descriptionId:(0,c.M)(),open:d,onOpenChange:p,onOpenToggle:(0,o.useCallback)((()=>p((e=>!e))),[p]),modal:u},n)},_="DialogTrigger",D=(0,o.forwardRef)(((e,t)=>{const{__scopeDialog:n,...u}=e,c=x(_,n),s=(0,a.e)(t,c.triggerRef);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":B(c.open)},u,{ref:s,onClick:(0,i.M)(e.onClick,c.onOpenToggle)}))})),T="DialogPortal",[C,S]=w(T,{forceMount:void 0}),k=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:i}=e,a=x(T,t);return(0,o.createElement)(C,{scope:t,forceMount:n},o.Children.map(r,(e=>(0,o.createElement)(p.z,{present:n||a.open},(0,o.createElement)(d.h,{asChild:!0,container:i},e)))))},O="DialogOverlay",P=(0,o.forwardRef)(((e,t)=>{const n=S(O,e.__scopeDialog),{forceMount:i=n.forceMount,...a}=e,u=x(O,e.__scopeDialog);return u.modal?(0,o.createElement)(p.z,{present:i||u.open},(0,o.createElement)($,(0,r.Z)({},a,{ref:t}))):null})),$=(0,o.forwardRef)(((e,t)=>{const{__scopeDialog:n,...i}=e,a=x(O,n);return(0,o.createElement)(g.Z,{as:b.g7,allowPinchZoom:!0,shards:[a.contentRef]},(0,o.createElement)(v.WV.div,(0,r.Z)({"data-state":B(a.open)},i,{ref:t,style:{pointerEvents:"auto",...i.style}})))})),F="DialogContent",M=(0,o.forwardRef)(((e,t)=>{const n=S(F,e.__scopeDialog),{forceMount:i=n.forceMount,...a}=e,u=x(F,e.__scopeDialog);return(0,o.createElement)(p.z,{present:i||u.open},u.modal?(0,o.createElement)(A,(0,r.Z)({},a,{ref:t})):(0,o.createElement)(z,(0,r.Z)({},a,{ref:t})))})),A=(0,o.forwardRef)(((e,t)=>{const n=x(F,e.__scopeDialog),u=(0,o.useRef)(null),c=(0,a.e)(t,n.contentRef,u);return(0,o.useEffect)((()=>{const e=u.current;if(e)return(0,h.Ry)(e)}),[]),(0,o.createElement)(N,(0,r.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,i.M)(e.onCloseAutoFocus,(e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()})),onPointerDownOutside:(0,i.M)(e.onPointerDownOutside,(e=>{const t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()})),onFocusOutside:(0,i.M)(e.onFocusOutside,(e=>e.preventDefault()))}))})),z=(0,o.forwardRef)(((e,t)=>{const n=x(F,e.__scopeDialog),i=(0,o.useRef)(!1),a=(0,o.useRef)(!1);return(0,o.createElement)(N,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,o;(null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented)||(i.current||null===(o=n.triggerRef.current)||void 0===o||o.focus(),t.preventDefault());i.current=!1,a.current=!1},onInteractOutside:t=>{var r,o;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(i.current=!0,"pointerdown"===t.detail.originalEvent.type&&(a.current=!0));const u=t.target;(null===(o=n.triggerRef.current)||void 0===o?void 0:o.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))})),N=(0,o.forwardRef)(((e,t)=>{const{__scopeDialog:n,trapFocus:i,onOpenAutoFocus:u,onCloseAutoFocus:c,...s}=e,d=x(F,n),p=(0,o.useRef)(null),v=(0,a.e)(t,p);return(0,m.EW)(),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(f.M,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:u,onUnmountAutoFocus:c},(0,o.createElement)(l.XB,(0,r.Z)({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":B(d.open)},s,{ref:v,onDismiss:()=>d.onOpenChange(!1)}))),!1)})),j="DialogTitle",L=(0,o.forwardRef)(((e,t)=>{const{__scopeDialog:n,...i}=e,a=x(j,n);return(0,o.createElement)(v.WV.h2,(0,r.Z)({id:a.titleId},i,{ref:t}))})),Z="DialogDescription",V=(0,o.forwardRef)(((e,t)=>{const{__scopeDialog:n,...i}=e,a=x(Z,n);return(0,o.createElement)(v.WV.p,(0,r.Z)({id:a.descriptionId},i,{ref:t}))})),W="DialogClose",q=(0,o.forwardRef)(((e,t)=>{const{__scopeDialog:n,...a}=e,u=x(W,n);return(0,o.createElement)(v.WV.button,(0,r.Z)({type:"button"},a,{ref:t,onClick:(0,i.M)(e.onClick,(()=>u.onOpenChange(!1)))}))}));function B(e){return e?"open":"closed"}const U="DialogTitleWarning",[H,K]=(0,u.k)(U,{contentName:F,titleName:j,docsSlug:"dialog"}),Q=I,G=D,Y=k,J=P,X=M,ee=L,te=V,ne=q},49102:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var r=n(87462),o=n(67294),i=n(75320);const a=(0,o.forwardRef)(((e,t)=>(0,o.createElement)(i.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))),u=a},37483:function(e,t,n){"use strict";n.d(t,{fC:function(){return R},z$:function(){return E}});var r=n(87462),o=n(67294),i=n(25360),a=n(75320);const u="Progress",c=100,[s,l]=(0,i.b)(u),[f,d]=s(u),p=(0,o.forwardRef)(((e,t)=>{const{__scopeProgress:n,value:i,max:u,getValueLabel:s=g,...l}=e,d=y(u)?u:c,p=w(i,d)?i:null,v=b(p)?s(p,d):void 0;return(0,o.createElement)(f,{scope:n,value:p,max:d},(0,o.createElement)(a.WV.div,(0,r.Z)({"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":b(p)?p:void 0,"aria-valuetext":v,role:"progressbar","data-state":h(p,d),"data-value":null!==p&&void 0!==p?p:void 0,"data-max":d},l,{ref:t})))}));p.propTypes={max(e,t,n){const r=e[t],o=String(r);return r&&!y(r)?new Error(function(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`}(o,n)):null},value(e,t,n){const r=e[t],o=String(r),i=y(e.max)?e.max:c;return null==r||w(r,i)?null:new Error(function(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)\n  - \`null\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`}(o,n))}};const v="ProgressIndicator",m=(0,o.forwardRef)(((e,t)=>{var n;const{__scopeProgress:i,...u}=e,c=d(v,i);return(0,o.createElement)(a.WV.div,(0,r.Z)({"data-state":h(c.value,c.max),"data-value":null!==(n=c.value)&&void 0!==n?n:void 0,"data-max":c.max},u,{ref:t}))}));function g(e,t){return`${Math.round(e/t*100)}%`}function h(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function b(e){return"number"===typeof e}function y(e){return b(e)&&!isNaN(e)&&e>0}function w(e,t){return b(e)&&!isNaN(e)&&e<=t&&e>=0}const R=p,E=m},60761:function(e,t,n){"use strict";n.d(t,{bU:function(){return x},fC:function(){return E}});var r=n(87462),o=n(67294),i=n(36206),a=n(28771),u=n(25360),c=n(77342),s=n(57898),l=n(7546),f=n(75320);const d="Switch",[p,v]=(0,u.b)(d),[m,g]=p(d),h=(0,o.forwardRef)(((e,t)=>{const{__scopeSwitch:n,name:u,checked:s,defaultChecked:l,required:d,disabled:p,value:v="on",onCheckedChange:g,...h}=e,[b,y]=(0,o.useState)(null),E=(0,a.e)(t,(e=>y(e))),x=(0,o.useRef)(!1),I=!b||Boolean(b.closest("form")),[_=!1,D]=(0,c.T)({prop:s,defaultProp:l,onChange:g});return(0,o.createElement)(m,{scope:n,checked:_,disabled:p},(0,o.createElement)(f.WV.button,(0,r.Z)({type:"button",role:"switch","aria-checked":_,"aria-required":d,"data-state":R(_),"data-disabled":p?"":void 0,disabled:p,value:v},h,{ref:E,onClick:(0,i.M)(e.onClick,(e=>{D((e=>!e)),I&&(x.current=e.isPropagationStopped(),x.current||e.stopPropagation())}))})),I&&(0,o.createElement)(w,{control:b,bubbles:!x.current,name:u,value:v,checked:_,required:d,disabled:p,style:{transform:"translateX(-100%)"}}))})),b="SwitchThumb",y=(0,o.forwardRef)(((e,t)=>{const{__scopeSwitch:n,...i}=e,a=g(b,n);return(0,o.createElement)(f.WV.span,(0,r.Z)({"data-state":R(a.checked),"data-disabled":a.disabled?"":void 0},i,{ref:t}))})),w=e=>{const{control:t,checked:n,bubbles:i=!0,...a}=e,u=(0,o.useRef)(null),c=(0,s.D)(n),f=(0,l.t)(t);return(0,o.useEffect)((()=>{const e=u.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked").set;if(c!==n&&r){const t=new Event("click",{bubbles:i});r.call(e,n),e.dispatchEvent(t)}}),[c,n,i]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:n},a,{tabIndex:-1,ref:u,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function R(e){return e?"checked":"unchecked"}const E=h,x=y},57898:function(e,t,n){"use strict";n.d(t,{D:function(){return o}});var r=n(67294);function o(e){const t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}},76248:function(e,t,n){"use strict";function r(e,t){if(Object.is(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}n.d(t,{X:function(){return r}})}}]);
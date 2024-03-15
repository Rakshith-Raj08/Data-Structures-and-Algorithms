"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1668],{19731:function(e,t,i){var s,r=Object.create,o=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,h=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,x=(e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&x(e,i,t[i]);if(d)for(var i of d(t))g.call(t,i)&&x(e,i,t[i]);return e},m=(e,t)=>n(e,a(t)),f=(e,t)=>{var i={};for(var s in e)p.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&d)for(var s of d(e))t.indexOf(s)<0&&g.call(e,s)&&(i[s]=e[s]);return i},w=(e,t,i,s)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let r of c(t))p.call(e,r)||r===i||o(e,r,{get:()=>t[r],enumerable:!(s=l(t,r))||s.enumerable});return e},v=(e,t,i)=>(i=null!=e?r(h(e)):{},w(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)),y=(e,t,i)=>(x(e,"symbol"!==typeof t?t+"":t,i),i),k=(e,t,i)=>new Promise(((s,r)=>{var o=e=>{try{l(i.next(e))}catch(t){r(t)}},n=e=>{try{l(i.throw(e))}catch(t){r(t)}},l=e=>e.done?s(e.value):Promise.resolve(e.value).then(o,n);l((i=i.apply(e,t)).next())})),j={};((e,t)=>{for(var i in t)o(e,i,{get:t[i],enumerable:!0})})(j,{Debugger:()=>xn,Help:()=>Ml,MentionType:()=>C,Menu:()=>Sn,RichTextEditor:()=>zp,SlateEditor:()=>Np.Editor,TippyTriggers:()=>L,createEmptyNode:()=>q,getMenuList:()=>$n,isEditorEmpty:()=>G,markdownToSlate:()=>jn,markdownToTokens:()=>kn,parseEditorValue:()=>Z}),e.exports=(s=j,w(o({},"__esModule",{value:!0}),s));var b=(e=>(e.BulletedList="BulletedList",e.OrderedList="OrderedList",e))(b||{}),L={hover:"mouseenter focus",click:"click",focus:"focusin",manual:"manual"},C=(e=>(e.user="user",e.question="question",e))(C||{}),F=(e=>(e.Link="Link",e.Mention="Mention",e.Latex="Latex",e))(F||{}),I=(e=>(e.Mention="Mention",e.Link="Link",e.Latex="Latex",e.LatexBlock="LatexBlock",e.Image="Image",e.Video="Video",e.Gallery="Gallery",e.HorizontalRule="HorizontalRule",e.CodeBlock="CodeBlock",e.Table="Table",e))(I||{}),S="undefined"!==typeof document,B=S&&/macintosh|mac os x/i.test(navigator.userAgent),$=S&&/windows|win32|win64/i.test(navigator.userAgent),A=S&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|leetcode/i.test(navigator.userAgent),E=S&&/leetcode/i.test(navigator.userAgent),M=S&&/leetcodeandroid/i.test(navigator.userAgent),D=(S&&/leetcodeios/i.test(navigator.userAgent),E?"&:active":"&:hover"),R=e=>S&&e>screen.width?"100%":e+"px",H=e=>{if(e.endsWith("px"))return R(Number(null==e?void 0:e.slice(0,-2)));if(e.endsWith("vw")){return Number(null==e?void 0:e.slice(0,-2))>100?"100%":e}if(e.endsWith("%")){return Number(null==e?void 0:e.slice(0,-1))>100?"100%":e}return/[0-9]+/.test(e)?H(e+"px"):e},T=e=>k(void 0,null,(function*(){if(S)return window.isSecureContext&&navigator.clipboard?navigator.clipboard.writeText(e):(e=>{const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(i){!z&&console.error("Unable to copy to clipboard",i)}document.body.removeChild(t)})(e)})),P=e=>"left"===e?"flex-start":"center"===e?"center":"right"===e?"flex-end":void 0,O="https://assets.leetcode-cn.com/aliyun-lc-upload/default_avatar.png",z=!0,N=e=>{var t;return(null==(t=JSON.stringify(e).match(/"text":"(.*?)"/g))?void 0:t.map((e=>{const t=e.match(/"text":"(.*?)"/);return(null==t?void 0:t[1])||""})).join(" "))||" "},V=e=>JSON.stringify(e),W=e=>{var t;const i=V(e);return(null==(t=null==i?void 0:i.match(/{"type":"Image","src":"(.*?)"/))?void 0:t[1])||""},Z=e=>{var t;return{handledEditorValue:e,handledEditorStr:V(e),editorText:N(e),summary:null==(t=N(e))?void 0:t.slice(0,100),thumbnail:W(e)}},G=e=>1===e.length&&"Paragraph"===e[0].type&&1===e[0].children.length&&""===e[0].children[0].text,K=i(78647),q=(e="")=>[{type:"Paragraph",children:[{text:e}],slateId:(0,K.nanoid)()}],_=u({"sys/Light/Red/10":{light:"#FFE9E8",dark:"#4D0013"},"sys/Light/Red/20":{light:"#FFCCCB",dark:"#941E33"},"sys/Light/Red/30":{light:"#FFB7BA",dark:"#B82E43"},"sys/Light/Red/40":{light:"#FF96A3",dark:"#DB4253"},"sys/Light/Red/50":{light:"#FF697A",dark:"#FF475D"},"sys/Light/Red/60":{light:"#FF334B",dark:"#FF5967"},"sys/Light/Red/70":{light:"#D2203A",dark:"#FF7D84"},"sys/Light/Red/80":{light:"#A6112C",dark:"#FFA1A2"},"sys/Light/Red/90":{light:"#79061F",dark:"#FFC5C4"},"sys/Light/Red/100":{light:"#4D0013",dark:"#FFE9E8"},"sys/Light/Magenta/10":{light:"#FFE8EF",dark:"#4D002E"},"sys/Light/Magenta/20":{light:"#FFCADF",dark:"#770747"},"sys/Light/Magenta/30":{light:"#FFBAD8",dark:"#A21962"},"sys/Light/Magenta/40":{light:"#FF9CCD",dark:"#CC317F"},"sys/Light/Magenta/50":{light:"#FF70B0",dark:"#F7529F"},"sys/Light/Magenta/60":{light:"#F74397",dark:"#F969A7"},"sys/Light/Magenta/70":{light:"#DE2C7F",dark:"#FF96C2"},"sys/Light/Magenta/80":{light:"#BF0659",dark:"#FCACC9"},"sys/Light/Magenta/90":{light:"#860246",dark:"#FDCDDE"},"sys/Light/Magenta/100":{light:"#4D002E",dark:"#FFF0F5"},"sys/Light/Purple/10":{light:"#FBE8FF",dark:"#29004D"},"sys/Light/Purple/20":{light:"#EFC7F8",dark:"#440971"},"sys/Light/Purple/30":{light:"#E1A8F2",dark:"#651C95"},"sys/Light/Purple/40":{light:"#D18AEB",dark:"#8A38BA"},"sys/Light/Purple/50":{light:"#C16DE5",dark:"#B25BDE"},"sys/Light/Purple/60":{light:"#AF52DE",dark:"#C477E5"},"sys/Light/Purple/70":{light:"#8833BA",dark:"#D392EA"},"sys/Light/Purple/80":{light:"#651C95",dark:"#E1B0EF"},"sys/Light/Purple/90":{light:"#440A71",dark:"#F0CBF8"},"sys/Light/Purple/100":{light:"#29004D",dark:"#FBEAFF"},"sys/Light/Blue/10":{light:"#E8F7FF",dark:"#001B4D"},"sys/Light/Blue/20":{light:"#BAE4FF",dark:"#043079"},"sys/Light/Blue/30":{light:"#8BCFFF",dark:"#0A4BA6"},"sys/Light/Blue/40":{light:"#5DB6FF",dark:"#1369D2"},"sys/Light/Blue/50":{light:"#2E9AFF",dark:"#1F8AFF"},"sys/Light/Blue/60":{light:"#007AFF",dark:"#2696FF"},"sys/Light/Blue/70":{light:"#005FD2",dark:"#57B3FF"},"sys/Light/Blue/80":{light:"#0045A6",dark:"#87CDFF"},"sys/Light/Blue/90":{light:"#002E79",dark:"#B8E3FF"},"sys/Light/Blue/100":{light:"#001B4D",dark:"#E8F7FF"},"sys/Light/Teal/10":{light:"#E8FFFB",dark:"#00424D"},"sys/Light/Teal/20":{light:"#BCF6EE",dark:"#035D67"},"sys/Light/Teal/30":{light:"#92EDE4",dark:"#0F7A82"},"sys/Light/Teal/40":{light:"#47DAD5",dark:"#1E989D"},"sys/Light/Teal/50":{light:"#26D1D1",dark:"#32B8B8"},"sys/Light/Teal/60":{light:"#1CB8B8",dark:"#46C6C2"},"sys/Light/Teal/70":{light:"#10A1A1",dark:"#68D4CD"},"sys/Light/Teal/80":{light:"#107575",dark:"#90E3DB"},"sys/Light/Teal/90":{light:"#155C5C",dark:"#BAF1E9"},"sys/Light/Teal/100":{light:"#00424D",dark:"#E9FFFB"},"sys/Light/Green/10":{light:"#E8FFEF",dark:"#004D2F"},"sys/Light/Green/20":{light:"#B5F2CB",dark:"#03693E"},"sys/Light/Green/30":{light:"#93EDBF",dark:"#0D854F"},"sys/Light/Green/40":{light:"#64E8A4",dark:"#1CA161"},"sys/Light/Green/50":{light:"#35DB80",dark:"#2EBD73"},"sys/Light/Green/60":{light:"#15BD66",dark:"#3FCA7D"},"sys/Light/Green/70":{light:"#18A352",dark:"#63D794"},"sys/Light/Green/80":{light:"#07854C",dark:"#8CE5AE"},"sys/Light/Green/90":{light:"#03693E",dark:"#B8F2CD"},"sys/Light/Green/100":{light:"#004D2F",dark:"#E8FFEF"},"sys/Light/Yellow/10":{light:"#FFFCE6",dark:"#4D2D00"},"sys/Light/Yellow/20":{light:"#FFF1A3",dark:"#794C04"},"sys/Light/Yellow/30":{light:"#FFE77A",dark:"#A66F0A"},"sys/Light/Yellow/40":{light:"#FFD952",dark:"#D29613"},"sys/Light/Yellow/50":{light:"#FFC929",dark:"#FFC11F"},"sys/Light/Yellow/60":{light:"#FFB800",dark:"#FFC926"},"sys/Light/Yellow/70":{light:"#D99400",dark:"#FFDB57"},"sys/Light/Yellow/80":{light:"#B37400",dark:"#FFE987"},"sys/Light/Yellow/90":{light:"#8C5600",dark:"#FFF5B8"},"sys/Light/Yellow/100":{light:"#663C00",dark:"#FFFCE8"},"sys/Light/Gray/10":{light:"#F5F5F5",dark:"#1A1A1A"},"sys/Light/Gray/20":{light:"#E8E8E8",dark:"#212121"},"sys/Light/Gray/30":{light:"#DFDFDF",dark:"#2A2A2A"},"sys/Light/Gray/40":{light:"#B7B7B7",dark:"#525252"},"sys/Light/Gray/50":{light:"#949494",dark:"#777777"},"sys/Light/Gray/60":{light:"#777777",dark:"#949494"},"sys/Light/Gray/70":{light:"#525252",dark:"#B7B7B7"},"sys/Light/Gray/80":{light:"#2A2A2A",dark:"#DFDFDF"},"sys/Light/Gray/90":{light:"#212121",dark:"#E8E8E8"},"sys/Light/Gray/100":{light:"#1A1A1A",dark:"#F5F5F5"},"sys/Light/Fixed/black":{light:"#000000",dark:"#000000"},"sys/Light/Fixed/white":{light:"#FFFFFF",dark:"#FFFFFF"},"sys/Light/Background/index":{light:"#F5F5F5",dark:"#1A1A1A"},"sys/Light/Background/inverse":{light:"#2A2A2A",dark:"#DFDFDF"},"sys/Light/Layer/01":{light:"#FFFFFF",dark:"#2A2A2A"},"sys/Light/Layer/02":{light:"#F5F5F5",dark:"#525252"},"sys/Light/Layer/03":{light:"#FFFFFF",dark:"#777777"},"sys/Light/Layer/04":{light:"rgba(0, 0, 0, 0.60)",dark:"rgba(255, 255, 255, 0.60)"},"sys/Light/Text/primary":{light:"#1A1A1A",dark:"#F5F5F5"},"sys/Light/Text/secondary":{light:"#535353",dark:"#C3C2C2"},"sys/Light/Text/tertiary":{light:"#979797",dark:"#7F7F7F"},"sys/Light/Text/quaternary":{light:"#CBCBCB",dark:"#545454"},"sys/Light/Text/inverse":{light:"#FFFFFF",dark:"#1A1A1A"},"sys/Light/Text/error":{light:"#FF334B",dark:"#FF5967"},"sys/Light/Fill/01":{light:"rgba(0, 0, 0, 0.05)",dark:"rgba(255, 255, 255, 0.08)"},"sys/Light/Fill/02":{light:"rgba(0, 0, 0, 0.08)",dark:"rgba(255, 255, 255, 0.12)"},"sys/Light/Fill/03":{light:"rgba(0, 0, 0, 0.14)",dark:"rgba(255, 255, 255, 0.2)"},"sys/Light/Icon/primary":{light:"#525252",dark:"#B7B7B7"},"sys/Light/Icon/secondary":{light:"#949494",dark:"#777777"},"sys/Light/Icon/tertiary":{light:"#B7B7B7",dark:"#525252"},"sys/Light/Icon/inverse":{light:"#FFFFFF",dark:"#1A1A1A"},"sys/Light/Button/primary":{light:"#212121",dark:"#E8E8E8"},"sys/Light/Button/primary-hover":{light:"#2A2A2A",dark:"#F5F5F5"},"sys/Light/Button/primary-active":{light:"#1A1A1A",dark:"#DFDFDF"},"sys/Light/Button/theme":{light:"#15BD66",dark:"#3FCA7D"},"sys/Light/Button/theme-hover":{light:"#35DB80",dark:"#63D794"},"sys/Light/Button/theme-active":{light:"#18A352",dark:"#2EBD73"},"sys/Light/Button/secondary":{light:"rgba(0, 0, 0, 0.05)",dark:"rgba(255, 255, 255, 0.08)"},"sys/Light/Button/secondary-hover":{light:"rgba(0, 0, 0, 0.03)",dark:"rgba(255, 255, 255, 0.12)"},"sys/Light/Button/secondary-active":{light:"rgba(0, 0, 0, 0.08)",dark:"rgba(255, 255, 255, 0.03)"},"sys/Light/Button/danger":{light:"#FF334B",dark:"#FF5967"},"sys/Light/Button/danger-hover":{light:"#FF697A",dark:"#FF7D84"},"sys/Light/Button/danger-active":{light:"#D2203A",dark:"#FF475D"},"sys/Light/System/primary":{light:"#007AFF",dark:"#2696FF"},"sys/Light/System/primary-hover":{light:"#2E9AFF",dark:"#57B3FF"},"sys/Light/System/primary-active":{light:"#2E9AFF",dark:"#1F8AFF"},"sys/Light/Support/error":{light:"#FF334B",dark:"#FF5967"},"sys/Light/Support/error-background":{light:"rgba(255, 51, 75, 0.12)",dark:"rgba(255, 89, 103, 0.12)"},"sys/Light/Support/success":{light:"#15BD66",dark:"#3FCA7D"},"sys/Light/Support/success-background":{light:"rgba(21, 189, 102, 0.12)",dark:"rgba(63, 202, 125, 0.12)"},"sys/Light/Support/warning":{light:"#FFB800",dark:"#FFC926"},"sys/Light/Support/warning-background":{light:"rgba(255, 184, 0, 0.12)",dark:"rgba(255, 201, 38, 0.12)"},"sys/Light/Support/info":{light:"#007AFF",dark:"#2696FF"},"sys/Light/Support/info-background":{light:"rgba(0, 122, 255, 0.12)",dark:"rgba(38, 150, 255, 0.12)"}},{"sys/Light/Shadow/down-01":{light:"0px 2px 6px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 6px 12px rgba(0, 0, 0, 0.02)",dark:"0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 6px 12px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/down-02":{light:"0px 4px 16px rgba(0, 0, 0, 0.04), 0px 8px 32px rgba(0, 0, 0, 0.04), 0px 12px 48px rgba(0, 0, 0, 0.04)",dark:"0px 4px 16px rgba(0, 0, 0, 0.12), 0px 8px 32px rgba(0, 0, 0, 0.12), 0px 12px 48px rgba(0, 0, 0, 0.12)"},"sys/Light/Shadow/down-03":{light:"0px 16px 40px rgba(0, 0, 0, 0.08), 0px 24px 48px rgba(0, 0, 0, 0.06), 0px 32px 64px rgba(0, 0, 0, 0.04)",dark:"0px 16px 40px rgba(0, 0, 0, 0.2), 0px 24px 48px rgba(0, 0, 0, 0.16), 0px 32px 64px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/up-01":{light:"0px -2px 4px rgba(0, 0, 0, 0.02), 0px -4px 8px rgba(0, 0, 0, 0.02), 0px -6px 12px rgba(0, 0, 0, 0.02)",dark:"0px -2px 4px rgba(0, 0, 0, 0.08), 0px -4px 8px rgba(0, 0, 0, 0.08), 0px -6px 12px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/up-02":{light:"0px -4px 16px rgba(0, 0, 0, 0.04), 0px -8px 32px rgba(0, 0, 0, 0.04), 0px -12px 48px rgba(0, 0, 0, 0.04)",dark:"0px -4px 16px rgba(0, 0, 0, 0.12), 0px -8px 32px rgba(0, 0, 0, 0.12), 0px -12px 48px rgba(0, 0, 0, 0.12)"},"sys/Light/Shadow/up-03":{light:"0px -16px 40px rgba(0, 0, 0, 0.08), 0px -24px 48px rgba(0, 0, 0, 0.06), 0px -32px 64px rgba(0, 0, 0, 0.04)",dark:"0px -16px 40px rgba(0, 0, 0, 0.2), 0px -24px 48px rgba(0, 0, 0, 0.16), 0px -32px 64px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/left-01":{light:"-2px 0px 4px rgba(0, 0, 0, 0.02), -4px 0px 8px rgba(0, 0, 0, 0.02), -6px 0px 12px rgba(0, 0, 0, 0.02)",dark:"-2px 0px 4px rgba(0, 0, 0, 0.08), -4px 0px 8px rgba(0, 0, 0, 0.08), -6px 0px 12px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/left-02":{light:"-4px 0px 16px rgba(0, 0, 0, 0.04), -8px 0px 32px rgba(0, 0, 0, 0.04), -12px 0px 48px rgba(0, 0, 0, 0.04)",dark:"-4px 0px 16px rgba(0, 0, 0, 0.12), -8px 0px 32px rgba(0, 0, 0, 0.12), -12px 0px 48px rgba(0, 0, 0, 0.12)"},"sys/Light/Shadow/left-03":{light:"-16px 0px 40px rgba(0, 0, 0, 0.08), -24px 0px 48px rgba(0, 0, 0, 0.06), -32px 0px 64px rgba(0, 0, 0, 0.04)",dark:"-16px 0px 40px rgba(0, 0, 0, 0.2), -24px 0px 48px rgba(0, 0, 0, 0.16), -32px 0px 64px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/right-01":{light:"2px 0px 4px rgba(0, 0, 0, 0.02), 4px 0px 8px rgba(0, 0, 0, 0.02), 6px 0px 12px rgba(0, 0, 0, 0.02)",dark:"2px 0px 4px rgba(0, 0, 0, 0.08), 4px 0px 8px rgba(0, 0, 0, 0.08), 6px 0px 12px rgba(0, 0, 0, 0.08)"},"sys/Light/Shadow/right-02":{light:"4px 0px 16px rgba(0, 0, 0, 0.04), 8px 0px 32px rgba(0, 0, 0, 0.04), 12px 0px 48px rgba(0, 0, 0, 0.04)",dark:"4px 0px 16px rgba(0, 0, 0, 0.12), 8px 0px 32px rgba(0, 0, 0, 0.12), 12px 0px 48px rgba(0, 0, 0, 0.12)"},"sys/Light/Shadow/right-03":{light:"16px 0px 40px rgba(0, 0, 0, 0.08), 24px 0px 48px rgba(0, 0, 0, 0.06), 32px 0px 64px rgba(0, 0, 0, 0.04)",dark:"16px 0px 40px rgba(0, 0, 0, 0.2), 24px 0px 48px rgba(0, 0, 0, 0.16), 32px 0px 64px rgba(0, 0, 0, 0.08)"}}),J=i(67294),U=i(14671),Q=e=>{const[t,i]=(0,J.useReducer)(((e,t)=>u(u({},e),t)),e);return{pageState:t,setPageState:i,resetPageState:t=>{i(t?{[t]:e[t]}:e)},defaultPageState:e}},Y=e=>{const t=(0,U.create)((t=>m(u({},e),{setAppState:e=>t(e)})));return()=>{const i=t(),{setAppState:s}=i;return{appState:f(i,["setAppState"]),setAppState:s,resetAppState:t=>{s(t?{[t]:e[t]}:e)},defaultAppState:e}}},X=Y({isDarkMode:!1}),ee=()=>{const{appState:{isDarkMode:e},setAppState:t}=X();return{tm:t=>e?_[t].dark:_[t].light,isDarkMode:e,toggleDarkTheme:e=>{t({isDarkMode:e})}}},te=i(70917),ie=i(35944),se=e=>{const{tm:t}=ee();return(0,ie.jsx)("button",u({css:te.css`
        all: unset;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 16px;
        gap: 8px;
        word-break: keep-all;

        background-color: ${e.disabled?t("sys/Light/Text/quaternary"):e.light?t("sys/Light/Fill/02"):"#212121"};
        border-radius: 5px;

        font-weight: 500;
        font-size: 14px;
        color: ${e.light?t("sys/Light/Text/primary"):t("sys/Light/Fixed/white")};
        cursor: ${e.disabled?"not-allowed":"pointer"};
        transition: all 0.2s;

        ${D} {
          opacity: 0.8;
        }
      `},e))},re=v(i(96711)),oe=re.default.div`
  width: ${e=>e.full?"100%":"auto"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${e=>void 0===e.gap?4:e.gap}px;
  justify-content: ${e=>e.justify||"flex-start"};
`,ne=i(70917),le=i(67294),ae=i(6378),ce=i(73935),de=({children:e})=>S?(0,ce.createPortal)(e,document.body):e,he=Y({editorProps:{},editorWrapperElement:null,editorStoreReady:!1,disableSystemKeyEvent:!1,editorInstance:void 0}),pe=i(67294),ge=e=>{const{appState:{editorProps:{scrollWrapper:t}}}=he(),[i,s]=(0,pe.useState)();(0,pe.useEffect)((()=>{if(e){const e=t?t.scrollTop:window.scrollY;s(e)}else s(void 0)}),[e,t]),(0,pe.useEffect)((()=>{void 0===i?(t||document.body).style.overflowY="scroll":((t||window).scrollTo(0,i),(t||document.body).style.overflowY="hidden")}),[i,t])},xe=v(i(18156)),ue=i(67294),me=i(35944),fe=300,we=ne.css`
  .myModal-enter {
    opacity: 0;
    .content {
      transform: translateY(1rem);
    }
  }
  .myModal-enter-active {
    opacity: 1;
    transition: all ${fe}ms;
    .content {
      transition: all ${fe}ms;
      transform: translateY(0rem);
    }
  }
  .myModal-exit {
    opacity: 1;
  }
  .myModal-exit-active {
    opacity: 0;
    transition: all ${fe}ms;
    .content {
      transition: all ${fe}ms;
      transform: translateY(1rem);
    }
  }
`,ve=({visible:e,children:t,onHide:i,addCss:s})=>{const r=(0,le.useRef)(null),{tm:o}=ee();return ge(e),((e,t)=>{(0,ue.useEffect)((()=>{const i=e=>{(0,xe.default)("esc",e)&&(e.preventDefault(),t())};if(e)return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}}),[e])})(e,i),(0,me.jsxs)(de,{children:[(0,me.jsx)(ne.Global,{styles:we}),(0,me.jsx)(ae.CSSTransition,{nodeRef:r,in:e,timeout:fe,unmountOnExit:!0,classNames:"myModal",children:(0,me.jsx)("div",{ref:r,autoFocus:!0,css:ne.css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99999999 !important;
            width: 100vw;
            height: 100vh;

            overflow-y: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${o("sys/Light/Fill/03")};
            z-index: 9;
            backdrop-filter: blur(10px);
          `,onClick:i,children:(0,me.jsx)("div",{className:"content",onClick:e=>e.stopPropagation(),css:ne.css`
              background-color: ${o("sys/Light/Layer/01")};
              border-radius: 8px;
              max-height: 95vh;

              overflow-y: scroll;
              box-shadow:
                0px 0px 40px rgba(0, 0, 0, 0.08),
                0px 0px 48px rgba(0, 0, 0, 0.06),
                0px 0px 64px rgba(0, 0, 0, 0.04);
              ${s}
            `,children:t})})})]})},ye=i(67294),ke=(e=!1)=>{const[t,i]=(0,ye.useState)(e),s=()=>{i(!0)},r=()=>{i(!1)};return{visible:t,show:s,hide:r,toggle:t?r:s}},je=i(70917),be=(e=>(e.plainText="plainText",e.cpp="cpp",e.java="java",e.python="python",e.c="c",e.csharp="csharp",e.javascript="javascript",e.ruby="ruby",e.swift="swift",e.go="go",e.scala="scala",e.kotlin="kotlin",e.rust="rust",e.php="php",e.typescript="typescript",e.racket="racket",e.erlang="erlang",e.elixir="elixir",e.dart="dart",e.markdown="markdown",e.json="json",e.sql="sql",e.bash="bash",e.scss="scss",e.less="less",e.graphql="graphql",e.html="html",e.css="css",e.jsx="jsx",e.tsx="tsx",e.xml="xml",e.yaml="yaml",e))(be||{}),Le=i(67294),Ce=i(67294),Fe=i(35944),Ie=(0,Ce.forwardRef)(((e,t)=>(0,Fe.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 10 10",ref:t},e),{children:(0,Fe.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeOpacity:.6,strokeWidth:1.33,d:"M5 .805v8.4m4.2-4.2H.8"})})))),Se=(0,Ce.memo)(Ie),Be=i(67294),$e=i(35944),Ae=(0,Be.forwardRef)(((e,t)=>(0,$e.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 14",ref:t},e),{children:(0,$e.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M9.1 7.004H7m0 0H4.9m2.1 0v2.1m0-2.1v-2.1m5.6 2.1a5.6 5.6 0 1 1-11.2 0 5.6 5.6 0 0 1 11.2 0Z"})})))),Ee=(0,Be.memo)(Ae),Me=i(67294),De=i(35944),Re=(0,Me.forwardRef)(((e,t)=>(0,De.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 14",ref:t},e),{children:(0,De.jsx)("path",{fill:"#FFA116",fillRule:"evenodd",d:"M2.885.195a.667.667 0 0 1 .944 0l2.138 2.138h5.366A.666.666 0 0 1 12 3v1.93a2.335 2.335 0 0 1 0 4.473v1.93a.666.666 0 0 1-.667.667H5.667v1a.667.667 0 0 1-.667.667H1.667A.667.667 0 0 1 1 13V9.667A.667.667 0 0 1 1.667 9H5a.667.667 0 0 1 .667.667v1h5V9.403a2.335 2.335 0 0 1 0-4.473V3.667H6.013L3.83 5.852a.667.667 0 0 1-.944 0L.53 3.495a.667.667 0 0 1 0-.943L2.885.195Zm.472 1.414L1.943 3.024l1.414 1.413 1.414-1.413-1.414-1.415Zm7.976 4.558a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-9 6.166v-2h2v2h-2Z",clipRule:"evenodd"})})))),He=(0,Me.memo)(Re),Te=i(67294),Pe=i(35944),Oe=(0,Te.forwardRef)(((e,t)=>(0,Pe.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Pe.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M9.2 11.2V4.8m-2.4 6.4V4.8M12 1.6H4A2.4 2.4 0 0 0 1.6 4v8A2.4 2.4 0 0 0 4 14.4h8a2.4 2.4 0 0 0 2.4-2.4V4A2.4 2.4 0 0 0 12 1.6Z"})})))),ze=(0,Te.memo)(Oe),Ne=i(67294),Ve=i(35944),We=(0,Ne.forwardRef)(((e,t)=>(0,Ve.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 12",ref:t},e),{children:(0,Ve.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M14.4 11.2H1.6m11.6-3.467H3.784M14.4 4.267H1.6m10-3.067H4.758"})})))),Ze=(0,Ne.memo)(We),Ge=i(67294),Ke=i(35944),qe=(0,Ge.forwardRef)(((e,t)=>(0,Ke.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Ke.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.8 4.8v6.4m2.4-6.4v6.4M4 14.4h8a2.4 2.4 0 0 0 2.4-2.4V4A2.4 2.4 0 0 0 12 1.6H4A2.4 2.4 0 0 0 1.6 4v8A2.4 2.4 0 0 0 4 14.4Z"})})))),_e=(0,Ge.memo)(qe),Je=i(67294),Ue=i(35944),Qe=(0,Je.forwardRef)(((e,t)=>(0,Ue.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 13",ref:t},e),{children:(0,Ue.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.6 1.4h12.8M1.6 4.867h9.417M1.6 8.333h12.8M1.6 11.8h6.842"})})))),Ye=(0,Je.memo)(Qe),Xe=i(67294),et=i(35944),tt=(0,Xe.forwardRef)(((e,t)=>(0,et.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,et.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M11.2 11.2V4.8m-2.4 6.4V4.8M12 1.6H4A2.4 2.4 0 0 0 1.6 4v8A2.4 2.4 0 0 0 4 14.4h8a2.4 2.4 0 0 0 2.4-2.4V4A2.4 2.4 0 0 0 12 1.6Z"})})))),it=(0,Xe.memo)(tt),st=i(67294),rt=i(35944),ot=(0,st.forwardRef)(((e,t)=>(0,rt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 13",ref:t},e),{children:(0,rt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M14.4 11.8H1.6m12.8-3.467H4.984M14.4 4.867H1.6M14.4 1.4H7.558"})})))),nt=(0,st.memo)(ot),lt=i(67294),at=i(35944),ct=(0,lt.forwardRef)(((e,t)=>(0,at.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 10 12",ref:t},e),{children:(0,at.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"m9.115 6.8-4.114 4m0 0-4.114-4M5 10.8V1.2"})})))),dt=(0,lt.memo)(ct),ht=i(67294),pt=i(35944),gt=(0,ht.forwardRef)(((e,t)=>(0,pt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 12",ref:t},e),{children:(0,pt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M6 11.333 1 6m0 0L6 .667M1 6h12"})})))),xt=(0,ht.memo)(gt),ut=i(67294),mt=i(35944),ft=(0,ut.forwardRef)(((e,t)=>(0,mt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 12",ref:t},e),{children:(0,mt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M8 .667 13 6m0 0-5 5.333M13 6H1"})})))),wt=(0,ut.memo)(ft),vt=i(67294),yt=i(35944),kt=(0,vt.forwardRef)(((e,t)=>(0,yt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 10 12",ref:t},e),{children:(0,yt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M.887 5.2 5 1.2m0 0 4.114 4m-4.114-4v9.6"})})))),jt=(0,vt.memo)(kt),bt=i(67294),Lt=i(35944),Ct=(0,bt.forwardRef)(((e,t)=>(0,Lt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 12",ref:t},e),{children:(0,Lt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.943.8 1.4 4.343m0 0 3.543 3.542M1.4 4.343h7.2a4 4 0 0 1 4 4V11.2"})})))),Ft=(0,bt.memo)(Ct),It=i(67294),St=i(35944),Bt=(0,It.forwardRef)(((e,t)=>(0,St.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 10",ref:t},e),{children:(0,St.jsx)("path",{stroke:"currentColor",strokeWidth:1.33,d:"M1.333 1.5c0-.276.214-.5.477-.5h.814c2.613 0 4.731 1.97 4.731 4.4v3.1c0 .276-.213.5-.476.5H5.25a.489.489 0 0 1-.477-.5V5.4c0-1.105-.962-2-2.15-2H1.81a.489.489 0 0 1-.477-.5V1.5Zm7.312 0c0-.276.214-.5.477-.5h.814c2.613 0 4.73 1.97 4.73 4.4v3.1c0 .276-.212.5-.475.5h-1.629a.489.489 0 0 1-.476-.5V5.4c0-1.105-.963-2-2.15-2h-.814a.489.489 0 0 1-.477-.5V1.5Z",clipRule:"evenodd"})})))),$t=(0,It.memo)(Bt),At=i(67294),Et=i(35944),Mt=(0,At.forwardRef)(((e,t)=>(0,Et.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 16",ref:t},e),{children:(0,Et.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.2 8v6.4h6.646a3.2 3.2 0 0 0 0-6.4H1.2Zm0 0H6.86a3.2 3.2 0 0 0 0-6.4H1.2V8Z"})})))),Dt=(0,At.memo)(Mt),Rt=i(67294),Ht=i(35944),Tt=(0,Rt.forwardRef)(((e,t)=>(0,Ht.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 10 16",ref:t},e),{children:(0,Ht.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.665 5.6a3.335 3.335 0 1 1 6.67 0c0 1.354-.81 2.47-2.001 2.99a.665.665 0 0 0-.399.61v2.4c0 .075-.06.135-.135.135H4.2a.135.135 0 0 1-.135-.135V9.267a.665.665 0 0 0-.399-.61A3.336 3.336 0 0 1 1.665 5.6ZM5 .935a4.665 4.665 0 0 0-2.265 8.744v1.92c0 .81.656 1.466 1.465 1.466h1.6c.81 0 1.465-.656 1.465-1.465V9.613c1.421-.782 2.4-2.247 2.4-4.013A4.665 4.665 0 0 0 5 .935Zm-1.6 12.8a.665.665 0 0 0 0 1.33h3.2a.665.665 0 1 0 0-1.33H3.4Zm2.267-10.8a.665.665 0 1 0 0 1.33c.369 0 .668.3.668.668a.665.665 0 1 0 1.33 0 1.998 1.998 0 0 0-1.998-1.998Z",clipRule:"evenodd"})})))),Pt=(0,Rt.memo)(Tt),Ot=i(67294),zt=i(35944),Nt=(0,Ot.forwardRef)(((e,t)=>(0,zt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 11",ref:t},e),{children:(0,zt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.413 1H13M4.413 5.32H13M4.413 9.64H13M1 1v.009M1 5.32v.009M1 9.64v.009"})})))),Vt=(0,Ot.memo)(Nt),Wt=i(67294),Zt=i(35944),Gt=(0,Wt.forwardRef)(((e,t)=>(0,Zt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 10",ref:t},e),{children:(0,Zt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M12.6.917 4.9 8.58 1.4 5.097"})})))),Kt=(0,Wt.memo)(Gt),qt=i(67294),_t=i(35944),Jt=(0,qt.forwardRef)(((e,t)=>(0,_t.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 10 5",ref:t},e),{children:(0,_t.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M8.5.833 5 4.333 1.5.833"})})))),Ut=(0,qt.memo)(Jt),Qt=i(67294),Yt=i(35944),Xt=(0,Qt.forwardRef)(((e,t)=>(0,Yt.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 6 10",ref:t},e),{children:(0,Yt.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M5 9 1 5l4-4"})})))),ei=(0,Qt.memo)(Xt),ti=i(67294),ii=i(35944),si=(0,ti.forwardRef)(((e,t)=>(0,ii.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 6 10",ref:t},e),{children:(0,ii.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"m1 1 4 4-4 4"})})))),ri=(0,ti.memo)(si),oi=i(67294),ni=i(35944),li=(0,oi.forwardRef)(((e,t)=>(0,ni.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 10 6",ref:t},e),{children:(0,ni.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.5 4.75 5 1.25l3.5 3.5"})})))),ai=(0,oi.memo)(li),ci=i(67294),di=i(35944),hi=(0,ci.forwardRef)(((e,t)=>(0,di.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 12",ref:t},e),{children:(0,di.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"m10.667 1.333-9.334 9.334m9.334 0L1.333 1.333"})})))),pi=(0,ci.memo)(hi),gi=i(67294),xi=i(35944),ui=(0,gi.forwardRef)(((e,t)=>(0,xi.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 12",ref:t},e),{children:(0,xi.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M7.333 11 8.668 1M4.5 9.561 1.333 6.018 4.5 2.474m7 0 3.167 3.544L11.5 9.56"})})))),mi=(0,gi.memo)(ui),fi=i(67294),wi=i(35944),vi=(0,fi.forwardRef)(((e,t)=>(0,wi.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 14",ref:t},e),{children:(0,wi.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.726 12.492h-.338a1.69 1.69 0 0 1-1.69-1.69v-3.38c0-.52-1.098-.76-1.098-.76s1.098-.2 1.098-.76V3.198c0-.933.757-1.69 1.69-1.69h.338m6.548 0h.338c.933 0 1.69.757 1.69 1.69v3.38c0 .52 1.098.76 1.098.76s-1.098.2-1.098.76v2.704a1.69 1.69 0 0 1-1.69 1.69h-.338"})})))),yi=(0,fi.memo)(vi),ki=i(67294),ji=i(35944),bi=(0,ki.forwardRef)(((e,t)=>(0,ji.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 14",ref:t},e),{children:(0,ji.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M3.5 8.405H2.1a.7.7 0 0 1-.7-.7v-4.3a2 2 0 0 1 2-2h4.3a.7.7 0 0 1 .7.7v1.4m-1.4 9.1h4.2a1.4 1.4 0 0 0 1.4-1.4v-4.2a1.4 1.4 0 0 0-1.4-1.4H7a1.4 1.4 0 0 0-1.4 1.4v4.2a1.4 1.4 0 0 0 1.4 1.4Z"})})))),Li=(0,ki.memo)(bi),Ci=i(67294),Fi=i(35944),Ii=(0,Ci.forwardRef)(((e,t)=>(0,Fi.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 14",ref:t},e),{children:(0,Fi.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.4 3.155h11.2m-7.7-2.1h4.2m-3.5 9.1v-4.2m2.8 4.2v-4.2m1.05 7h-4.9a1.4 1.4 0 0 1-1.4-1.4l-.32-7.671a.7.7 0 0 1 .7-.73h6.94a.7.7 0 0 1 .7.73l-.32 7.67a1.4 1.4 0 0 1-1.4 1.4Z"})})))),Si=(0,Ci.memo)(Ii),Bi=i(67294),$i=i(35944),Ai=(0,Bi.forwardRef)(((e,t)=>(0,$i.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 12",ref:t},e),{children:(0,$i.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M7.05 10.41h3.5m-9.1 0 2.547-.512a.7.7 0 0 0 .357-.192l5.701-5.704a.7.7 0 0 0 0-.99L8.847 1.805a.7.7 0 0 0-.99 0L2.155 7.512a.7.7 0 0 0-.19.356L1.45 10.41Z"})})))),Ei=(0,Bi.memo)(Ai),Mi=i(67294),Di=i(35944),Ri=(0,Mi.forwardRef)(((e,t)=>(0,Di.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Di.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M1.6 10.303h2.578c.785 0 1.422.612 1.422 1.366v2.73m0-12.8V4.33c0 .754-.637 1.366-1.422 1.366H1.6m12.8 4.607h-2.578c-.785 0-1.422.612-1.422 1.366v2.73m0-12.8V4.33c0 .754.637 1.366 1.422 1.366H14.4"})})))),Hi=(0,Mi.memo)(Ri),Ti=i(67294),Pi=i(35944),Oi=(0,Ti.forwardRef)(((e,t)=>(0,Pi.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Pi.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M14.4 1.6v12.8M1.6 1.6v12.8m8.78-8L12 8m0 0-1.62 1.6M12 8H4m1.62 1.6L4 8m0 0 1.62-1.6"})})))),zi=(0,Ti.memo)(Oi),Ni=i(67294),Vi=i(35944),Wi=(0,Ni.forwardRef)(((e,t)=>(0,Vi.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Vi.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M5.867 1.6H3.022c-.785 0-1.422.637-1.422 1.422v2.845M5.867 14.4H3.022A1.422 1.422 0 0 1 1.6 12.978v-2.845M10.133 1.6h2.845c.785 0 1.422.637 1.422 1.422v2.845m0 4.266v2.845c0 .785-.637 1.422-1.422 1.422h-2.845"})})))),Zi=(0,Ni.memo)(Wi),Gi=i(67294),Ki=i(35944),qi=(0,Gi.forwardRef)(((e,t)=>(0,Ki.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 14",ref:t},e),{children:(0,Ki.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.8 6.6v-.8m3.2.8V5m3.2 1.6V3.4M6.4 9.8 5.2 13m5.862-.044L9.649 9.844M3.2 9.8a1.6 1.6 0 0 1-1.6-1.6V2.6A1.6 1.6 0 0 1 3.2 1h9.6a1.6 1.6 0 0 1 1.6 1.6v5.6a1.6 1.6 0 0 1-1.6 1.6H3.2Z"})})))),_i=(0,Gi.memo)(qi),Ji=i(67294),Ui=i(35944),Qi=(0,Ji.forwardRef)(((e,t)=>(0,Ui.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 13",ref:t},e),{children:(0,Ui.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.103 11.333V6m0 0V.667m0 5.333H8.23m0 0v5.333M8.23 6V.667m4.369 10.8v-4.8l-1.6 1.6"})})))),Yi=(0,Ji.memo)(Qi),Xi=i(67294),es=i(35944),ts=(0,Xi.forwardRef)(((e,t)=>(0,es.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 15 12",ref:t},e),{children:(0,es.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M10.333 8a1.6 1.6 0 0 1 3.2 0c0 .473-.4.8-.8 1.2l-2.4 2h3.2m-12.43.133V6m0 0V.667m0 5.333H8.23m0 0v5.333M8.23 6V.667"})})))),is=(0,Xi.memo)(ts),ss=i(67294),rs=i(35944),os=(0,ss.forwardRef)(((e,t)=>(0,rs.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 15 12",ref:t},e),{children:(0,rs.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M10.267 7.333a1.6 1.6 0 1 1 3.2 0c0 .473-.4.8-.8 1.2.4.4.8.728.8 1.2a1.6 1.6 0 1 1-3.2 0m-9.164 1.6V6m0 0V.667m0 5.333H8.23m0 0v5.333M8.23 6V.667"})})))),ns=(0,ss.memo)(os),ls=i(67294),as=i(35944),cs=(0,ls.forwardRef)(((e,t)=>(0,as.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,as.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.6 14.4v-2.076c0-.764.628-1.383 1.403-1.383h9.994c.775 0 1.403.62 1.403 1.383V14.4M1.6 1.6v2.076c0 .764.628 1.383 1.403 1.383h9.994c.775 0 1.403-.62 1.403-1.383V1.6M1.6 8h.043m3.104 0h.042m3.19 0h.042m3.147 0h.043m3.146 0h.043"})})))),ds=(0,ls.memo)(cs),hs=i(67294),ps=i(35944),gs=(0,hs.forwardRef)(((e,t)=>(0,ps.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 15",ref:t},e),{children:(0,ps.jsx)("path",{fill:"currentColor",d:"M.988 12.009a.665.665 0 0 0 .94.94l-.94-.94Zm3.637-2.697.47-.47a.665.665 0 0 0-.94 0l.47.47Zm1.583 1.584-.47.47a.665.665 0 0 0 .94 0l-.47-.47Zm3.563-3.563.47-.47a.665.665 0 0 0-.94 0l.47.47Zm2.696 3.637a.665.665 0 0 0 .94-.94l-.94.94ZM1.928 12.95l3.167-3.167-.94-.94-3.167 3.166.94.94Zm2.227-3.167 1.583 1.583.94-.94-1.583-1.584-.94.94Zm2.523 1.583 3.563-3.562-.94-.94-3.563 3.562.94.94ZM9.3 7.804l3.167 3.166.94-.94-3.166-3.167-.94.94ZM3.041 1.665h7.917V.335H3.041v1.33Zm9.627 1.71v7.917h1.33V3.375h-1.33Zm-1.71 9.627H3.041v1.33h7.917v-1.33Zm-9.627-1.71V3.375H.002v7.917h1.33Zm1.71 1.71a1.71 1.71 0 0 1-1.71-1.71H.001a3.04 3.04 0 0 0 3.04 3.04v-1.33Zm9.627-1.71a1.71 1.71 0 0 1-1.71 1.71v1.33a3.04 3.04 0 0 0 3.04-3.04h-1.33Zm-1.71-9.627c.945 0 1.71.766 1.71 1.71h1.33a3.04 3.04 0 0 0-3.04-3.04v1.33ZM3.041.335a3.04 3.04 0 0 0-3.04 3.04h1.33c0-.944.766-1.71 1.71-1.71V.335Zm1.71 4.228a.522.522 0 0 1-.522.522v1.33c1.023 0 1.853-.83 1.853-1.853h-1.33Zm-.522.522a.522.522 0 0 1-.522-.522h-1.33c0 1.023.829 1.852 1.852 1.852v-1.33Zm-.522-.522c0-.29.233-.523.522-.523V2.71c-1.023 0-1.853.83-1.853 1.853h1.33Zm.522-.523c.289 0 .522.234.522.522h1.33c0-1.023-.829-1.852-1.852-1.852v1.33Z"})})))),xs=(0,hs.memo)(gs),us=i(67294),ms=i(35944),fs=(0,us.forwardRef)(((e,t)=>(0,ms.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,ms.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M8 8v3.2m0-5.572V5.6M1.6 8a6.4 6.4 0 1 1 12.8 0A6.4 6.4 0 0 1 1.6 8Z"})})))),ws=(0,us.memo)(fs),vs=i(67294),ys=i(35944),ks=(0,vs.forwardRef)(((e,t)=>(0,ys.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 14",ref:t},e),{children:(0,ys.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.567 12.6 7.802 1.4M4.567 12.6H1.2m3.367 0h3.367M7.802 1.4H4.436m3.366 0h3.367"})})))),js=(0,vs.memo)(ks),bs=i(67294),Ls=i(35944),Cs=(0,bs.forwardRef)(((e,t)=>(0,Ls.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 10",ref:t},e),{children:(0,Ls.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M4.4 3.8h.019m2.381 0h.019m4.762 0h.02m-2.4 0h.018M5.6 6.2h.019M8 6.2h.019m2.381 0h.019M3.2 9h9.6a1.6 1.6 0 0 0 1.6-1.6V2.6A1.6 1.6 0 0 0 12.8 1H3.2a1.6 1.6 0 0 0-1.6 1.6v4.8A1.6 1.6 0 0 0 3.2 9Z"})})))),Fs=(0,bs.memo)(Cs),Is=i(67294),Ss=i(35944),Bs=(0,Is.forwardRef)(((e,t)=>(0,Ss.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 12",ref:t},e),{children:(0,Ss.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"m1.6 3.475 3.791 3.791m0 0 3.792 3.791M5.39 7.266l3.792-3.791M5.39 7.266l-3.79 3.791m9.668-8.326a1.6 1.6 0 0 1 3.2 0c0 .473-.4.8-.8 1.2l-2.4 2h3.2"})})))),$s=(0,Is.memo)(Bs),As=i(67294),Es=i(35944),Ms=(0,As.forwardRef)(((e,t)=>(0,Es.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Es.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"m3.867 6.096 2.527 2.527m0 0 2.528 2.527M6.394 8.623l2.528-2.527M6.394 8.623 3.867 11.15m6.446-5.55a1.067 1.067 0 0 1 2.133 0c0 .315-.267.533-.533.8l-1.6 1.333h2.133M3.2 14.4h9.6a1.6 1.6 0 0 0 1.6-1.6V3.2a1.6 1.6 0 0 0-1.6-1.6H3.2a1.6 1.6 0 0 0-1.6 1.6v9.6a1.6 1.6 0 0 0 1.6 1.6Z"})})))),Ds=(0,As.memo)(Ms),Rs=i(67294),Hs=i(35944),Ts=(0,Rs.forwardRef)(((e,t)=>(0,Hs.jsxs)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 51 60",ref:t},e),{children:[(0,Hs.jsx)("path",{fill:"#B3B3B3",d:"M36.49 44.9a3.442 3.442 0 0 1 4.874.009 3.456 3.456 0 0 1-.008 4.882l-5.986 5.976c-5.522 5.514-14.526 5.594-20.142.186L4.447 45.383C-1.04 40-1.587 31.391 3.577 25.862l9.628-10.31c5.125-5.487 14.572-6.087 20.432-1.348l8.744 7.072a3.456 3.456 0 0 1 .517 4.854 3.442 3.442 0 0 1-4.846.518l-8.745-7.072c-3.064-2.478-8.425-2.138-11.07.694L8.61 30.58c-2.514 2.691-2.239 7.028.658 9.868l10.73 10.522c2.92 2.812 7.64 2.77 10.507-.093l5.985-5.976Z"}),(0,Hs.jsx)("path",{fill:"#B3B3B3",fillRule:"evenodd",d:"M21.95 38.92a3.45 3.45 0 0 1-3.446-3.452 3.45 3.45 0 0 1 3.446-3.453h25.415a3.45 3.45 0 0 1 3.446 3.453 3.45 3.45 0 0 1-3.446 3.452H21.95Z",clipRule:"evenodd"}),(0,Hs.jsx)("path",{fill:"#B3B3B3",fillRule:"evenodd",d:"M26.71 1.094A3.442 3.442 0 0 1 31.58.93a3.456 3.456 0 0 1 .162 4.88L8.61 30.58c-2.514 2.691-2.239 7.027.658 9.868l10.683 10.476a3.457 3.457 0 0 1 .052 4.882 3.442 3.442 0 0 1-4.873.052L4.447 45.382c-5.487-5.38-6.034-13.99-.87-19.52L26.709 1.095Z",clipRule:"evenodd"})]})))),Ps=(0,Rs.memo)(Ts),Os=i(67294),zs=i(35944),Ns=(0,Os.forwardRef)(((e,t)=>(0,zs.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 14",ref:t},e),{children:(0,zs.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M3.919 5.794 2.43 7.283a2.967 2.967 0 0 0 .031 4.229 2.967 2.967 0 0 0 2.121.9 2.906 2.906 0 0 0 2.108-.851l1.49-1.49m1.901-1.865 1.489-1.489a2.967 2.967 0 0 0-.031-4.229 3.024 3.024 0 0 0-2.12-.882 2.937 2.937 0 0 0-2.109.851l-1.489 1.49M4.742 9.217 9.21 4.751"})})))),Vs=(0,Os.memo)(Ns),Ws=i(67294),Zs=i(35944),Gs=(0,Ws.forwardRef)(((e,t)=>(0,Zs.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 14",ref:t},e),{children:(0,Zs.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M7 3.675v-2.8m0 12.25v-2.8M10.325 7h2.8M.875 7h2.8m5.676-2.351 1.98-1.98M2.67 11.331l1.98-1.98m4.702 0 1.98 1.98M2.67 2.669l1.98 1.98"})})))),Ks=(0,Ws.memo)(Gs),qs=i(67294),_s=i(35944),Js=(0,qs.forwardRef)(((e,t)=>(0,_s.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,_s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M14.4 3.6H1.6m12.8 8.8H1.6m10.8 2V1.6M3.6 14.4V1.6"})})))),Us=(0,qs.memo)(Js),Qs=i(67294),Ys=i(35944),Xs=(0,Qs.forwardRef)(((e,t)=>(0,Ys.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 12",ref:t},e),{children:(0,Ys.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M5.33.633H2.645A2.012 2.012 0 0 0 .633 2.646v6.708c0 1.112.901 2.013 2.013 2.013h6.708a2.013 2.013 0 0 0 2.013-2.013V6.671M8.012.633h3.355m0 0v3.02m0-3.02L5.664 6.335"})})))),er=(0,Qs.memo)(Xs),tr=i(67294),ir=i(35944),sr=(0,tr.forwardRef)(((e,t)=>(0,ir.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,ir.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M7.2 3.2h7.2M7.2 8h7.2M8 12.8h6.4M1.6 11.2a1.6 1.6 0 1 1 3.2 0c0 .473-.4.8-.8 1.2l-2.4 2h3.2m-1.6-8V1.6L1.6 3.2"})})))),rr=(0,tr.memo)(sr),or=i(67294),nr=i(35944),lr=(0,or.forwardRef)(((e,t)=>(0,nr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 12",ref:t},e),{children:(0,nr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M14.4 1.2H5.6m8.8 3.2H8.8m5.6 6.4H5.6m-4-8L4.8 6 1.6 9.2m12.8-1.6H8.8"})})))),ar=(0,or.memo)(lr),cr=i(67294),dr=i(35944),hr=(0,cr.forwardRef)(((e,t)=>(0,dr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 16",ref:t},e),{children:(0,dr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M3.6 4.8h4.8M3.6 7.2h4.8M3.6 9.6H6m-3.6-8h7.2a1.6 1.6 0 0 1 1.6 1.6v9.6a1.6 1.6 0 0 1-1.6 1.6H2.4a1.6 1.6 0 0 1-1.6-1.6V3.2a1.6 1.6 0 0 1 1.6-1.6Z"})})))),pr=(0,cr.memo)(hr),gr=i(67294),xr=i(35944),ur=(0,gr.forwardRef)(((e,t)=>(0,xr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 14",ref:t},e),{children:(0,xr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M3.346 13h2.838m0 0h2.969m-2.97 0V1m0 0H1.56c-.494 0-.893.384-.893.857v1.26M6.184 1h4.256c.493 0 .893.384.893.857v1.614"})})))),mr=(0,gr.memo)(ur),fr=i(67294),wr=i(35944),vr=(0,fr.forwardRef)(((e,t)=>(0,wr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 8 12",ref:t},e),{children:(0,wr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M.667 11.334V.667m6.666 10.667V.667"})})))),yr=(0,fr.memo)(vr),kr=i(67294),jr=i(35944),br=(0,kr.forwardRef)(((e,t)=>(0,jr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 16",ref:t},e),{children:(0,jr.jsx)("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:1.33,d:"M10.096 9.08c.94-.613.937-1.294 0-1.836L2.742 1.83c-.762-.483-1.562-.198-1.542.81l.031 10.636c.065 1.093.685 1.392 1.598.886l7.267-5.082Z"})})))),Lr=(0,kr.memo)(br),Cr=i(67294),Fr=i(35944),Ir=(0,Cr.forwardRef)(((e,t)=>(0,Fr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 18 18",ref:t},e),{children:(0,Fr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M9 13v.035M7 6.538C7 5.412 7.895 4.5 9 4.5s2 .912 2 2.038c0 1.125-.895 2.038-2 2.038v1.358M17 9A8 8 0 1 1 1 9a8 8 0 0 1 16 0Z"})})))),Sr=(0,Cr.memo)(Ir),Br=i(67294),$r=i(35944),Ar=(0,Br.forwardRef)(((e,t)=>(0,$r.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 13 12",ref:t},e),{children:(0,$r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M1.224 7.647a5.257 5.257 0 0 0 10.248-1.642 5.255 5.255 0 0 0-9.807-2.628m1.596.657H.634V1.407"})})))),Er=(0,Br.memo)(Ar),Mr=i(67294),Dr=i(35944),Rr=(0,Mr.forwardRef)(((e,t)=>(0,Dr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1 16",ref:t},e),{children:(0,Dr.jsx)("path",{fill:"#000",fillOpacity:.08,d:"M0 0h1v16H0z"})})))),Hr=(0,Mr.memo)(Rr),Tr=i(67294),Pr=i(35944),Or=(0,Tr.forwardRef)(((e,t)=>(0,Pr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Pr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M2.462 4.8a6.434 6.434 0 0 1 5.571-3.2 6.433 6.433 0 0 1 5.963 4m-9.58 0H1.2V2.4m12.338 8.8a6.434 6.434 0 0 1-5.571 3.2 6.433 6.433 0 0 1-5.964-4m9.582 0H14.8v3.2"})})))),zr=(0,Tr.memo)(Or),Nr=i(67294),Vr=i(35944),Wr=(0,Nr.forwardRef)(((e,t)=>(0,Vr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,Vr.jsx)("path",{fill:"currentColor",d:"M6.665 1.6a.665.665 0 1 0-1.33 0h1.33Zm-1.33 12.8a.665.665 0 1 0 1.33 0h-1.33ZM4 2.265h8V.935H4v1.33ZM13.735 4v8h1.33V4h-1.33ZM12 13.735H4v1.33h8v-1.33ZM2.265 12V4H.935v8h1.33ZM4 13.735A1.735 1.735 0 0 1 2.265 12H.935A3.065 3.065 0 0 0 4 15.065v-1.33ZM13.735 12c0 .958-.777 1.735-1.735 1.735v1.33A3.065 3.065 0 0 0 15.065 12h-1.33ZM12 2.265c.958 0 1.735.777 1.735 1.735h1.33A3.065 3.065 0 0 0 12 .935v1.33ZM4 .935A3.065 3.065 0 0 0 .935 4h1.33c0-.958.777-1.735 1.735-1.735V.935Zm1.335.665v12.8h1.33V1.6h-1.33ZM2 6.665h12v-1.33H2v1.33Z"})})))),Zr=(0,Nr.memo)(Wr),Gr=i(67294),Kr=i(35944),qr=(0,Gr.forwardRef)(((e,t)=>(0,Kr.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 14 12",ref:t},e),{children:(0,Kr.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M1.159 11C2.042 9.526 3.979 8.517 7 8.517c3.021 0 4.958 1.01 5.842 2.483M9.4 3.4a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z"})})))),_r=(0,Gr.memo)(qr),Jr=i(67294),Ur=i(35944),Qr=(0,Jr.forwardRef)(((e,t)=>(0,Ur.jsxs)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:[(0,Ur.jsx)("path",{stroke:"currentColor",strokeWidth:1.33,d:"M1.6 4.267A2.667 2.667 0 0 1 4.267 1.6h7.466A2.667 2.667 0 0 1 14.4 4.267v7.466a2.667 2.667 0 0 1-2.667 2.667H4.267A2.667 2.667 0 0 1 1.6 11.733V4.267Z"}),(0,Ur.jsx)("path",{stroke:"currentColor",strokeWidth:1.33,d:"M10.4 7.756c.468.27.47.61 0 .917l-3.634 2.541c-.456.253-.766.104-.799-.443l-.015-5.319c-.01-.503.39-.645.77-.404L10.4 7.756Z"})]})))),Yr=(0,Jr.memo)(Qr),Xr=i(67294),eo=i(35944),to=(0,Xr.forwardRef)(((e,t)=>(0,eo.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,eo.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.33,d:"M14.4 3.2H5.6m8.8 3.2H8.8m5.6 6.4H5.6m-4-8L4.8 8l-3.2 3.2m12.8-1.6H8.8"})})))),io=(0,Xr.memo)(to),so=i(67294),ro=i(35944),oo=(0,so.forwardRef)(((e,t)=>(0,ro.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 16 16",ref:t},e),{children:(0,ro.jsx)("path",{fill:"currentColor",stroke:"currentColor",strokeWidth:1.33,d:"M3.333 8.834a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Zm4.667 0a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Zm4.667 0a.833.833 0 1 1 0-1.667.833.833 0 0 1 0 1.667Z"})})))),no=(0,so.memo)(oo),lo=i(67294),ao=i(35944),co=(0,lo.forwardRef)(((e,t)=>(0,ao.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 22 16",ref:t},e),{children:(0,ao.jsx)("path",{stroke:"currentColor",strokeWidth:1.33,d:"M13.4 8.03c0 1.289-1.075 2.335-2.4 2.335S8.6 9.319 8.6 8.028c0-1.29 1.075-2.335 2.4-2.335s2.4 1.045 2.4 2.335Z"})})))),ho=(0,lo.memo)(co),po=i(67294),go=i(35944),xo=(0,po.forwardRef)(((e,t)=>(0,go.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 22 18",ref:t},e),{children:(0,go.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"m19.4 16.5-15-15m4.8 5.942c-.373.411-.6.952-.6 1.544 0 1.29 1.075 2.336 2.4 2.336.611 0 1.169-.223 1.593-.589m6.846.589c.826-1.237 1.161-2.246 1.161-2.246S18.415 2.1 11 2.1c-.416 0-.816.022-1.2.063m6.6 12.186c-1.377.88-3.15 1.5-5.4 1.464-7.323-.12-9.6-6.737-9.6-6.737s1.058-3.378 4.2-5.433"})})))),uo=(0,po.memo)(xo),mo=i(67294),fo=i(35944),wo=(0,mo.forwardRef)(((e,t)=>(0,fo.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",ref:t},e),{children:(0,fo.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M6.6 8.8v-.914C6.6 4.846 9.01 2.4 12 2.4c2.992 0 5.4 2.447 5.4 5.486V8.8m-10.8 0c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829v-9.143c0-1.005-.81-1.828-1.8-1.828m-10.8 0h10.8"})})))),vo=(0,mo.memo)(wo),yo=i(67294),ko=i(35944),jo=(0,yo.forwardRef)(((e,t)=>(0,ko.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",ref:t},e),{children:(0,ko.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:1.33,d:"M6.375 7.886c0-3.04 2.409-5.486 5.4-5.486 1.864 0 3.5.95 4.47 2.4M6.6 8.8c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829v-9.143c0-1.005-.81-1.828-1.8-1.828H6.6Z"})})))),bo=(0,yo.memo)(jo),Lo=i(67294),Co=i(35944),Fo=(0,Lo.forwardRef)(((e,t)=>(0,Co.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 22 22",ref:t},e),{children:(0,Co.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M11 .4C5.146.4.4 5.146.4 11c0 5.854 4.746 10.6 10.6 10.6 5.854 0 10.6-4.746 10.6-10.6C21.6 5.146 16.854.4 11 .4Zm1 6.4a1 1 0 1 0-2 0v4.8a1 1 0 1 0 2 0V6.8Zm0 8.358a1 1 0 1 0-2 0v.042a1 1 0 1 0 2 0v-.042Z",clipRule:"evenodd"})})))),Io=(0,Lo.memo)(Fo),So=i(67294),Bo=i(35944),$o=(0,So.forwardRef)(((e,t)=>(0,Bo.jsxs)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 12",ref:t},e),{children:[(0,Bo.jsx)("path",{fill:"currentColor",d:"M7.945 7.577a.45.45 0 0 0 .355.173h.01c.11 0 .22-.04.305-.118l1.09-1a.45.45 0 0 0-.61-.664l-.345.318V4.7a.45.45 0 0 0-.9 0v1.58l-.35-.315a.45.45 0 0 0-.602.67l1.047.942ZM5.465 4.399 4.3 5.694 3.134 4.4a.45.45 0 0 0-.784.301v2.6a.45.45 0 0 0 .9 0V5.873l.715.795a.46.46 0 0 0 .67 0l.715-.795V7.3a.45.45 0 0 0 .9 0V4.7a.45.45 0 0 0-.785-.301Z"}),(0,Bo.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.2.701a2.499 2.499 0 0 0-2.499 2.5V8.8a2.5 2.5 0 0 0 2.5 2.499H8.8a2.499 2.499 0 0 0 2.499-2.5V3.2a2.499 2.499 0 0 0-2.5-2.499H3.2ZM2.138 2.14c.282-.282.664-.44 1.062-.44h5.6A1.502 1.502 0 0 1 10.3 3.2v5.6A1.501 1.501 0 0 1 8.8 10.3H3.2A1.502 1.502 0 0 1 1.7 8.8V3.2c0-.398.158-.78.44-1.061Z",clipRule:"evenodd"})]})))),Ao=(0,So.memo)($o),Eo=i(67294),Mo=i(35944),Do=(0,Eo.forwardRef)(((e,t)=>(0,Mo.jsx)("svg",m(u({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 12 12",ref:t},e),{children:(0,Mo.jsx)("path",{fill:"currentColor",d:"M4.56 4.56v-.5a.5.5 0 0 0-.5.5h.5Zm.048 0h.5a.5.5 0 0 0-.5-.5v.5Zm2.832 0v-.5a.5.5 0 0 0-.5.5h.5Zm.043 0h.5a.5.5 0 0 0-.5-.5v.5Zm-2.875.038v.5a.5.5 0 0 0 .5-.5h-.5Zm-.048 0h-.5a.5.5 0 0 0 .5.5v-.5Zm2.923 0v.5a.5.5 0 0 0 .5-.5h-.5Zm-.043 0h-.5a.5.5 0 0 0 .5.5v-.5ZM4.761 7.196a.5.5 0 1 0-.85.527l.85-.527Zm3.328.527a.5.5 0 1 0-.85-.527l.85.527ZM10.3 6A4.3 4.3 0 0 1 6 10.3v1A5.3 5.3 0 0 0 11.3 6h-1ZM6 10.3A4.3 4.3 0 0 1 1.7 6h-1A5.3 5.3 0 0 0 6 11.3v-1ZM1.7 6A4.3 4.3 0 0 1 6 1.7v-1A5.3 5.3 0 0 0 .7 6h1ZM6 1.7A4.3 4.3 0 0 1 10.3 6h1A5.3 5.3 0 0 0 6 .7v1ZM4.56 5.06h.048v-1H4.56v1Zm2.88 0h.043v-1H7.44v1Zm-3.332-.5v.038h1V4.56h-1Zm.5-.462H4.56v1h.048v-1Zm.452.5V4.56h-1v.038h1Zm1.923-.038v.038h1V4.56h-1Zm.5-.462H7.44v1h.043v-1Zm.457.5V4.56h-1v.038h1ZM6 7.9c-.515 0-.974-.275-1.239-.704l-.85.527A2.458 2.458 0 0 0 6.001 8.9v-1Zm1.24-.704A1.458 1.458 0 0 1 6 7.9v1c.884 0 1.654-.475 2.09-1.177l-.85-.527Z"})})))),Ro={IconAdd:Se,IconAddCircle:Ee,IconAlgorithm:He,IconAlignCenter:ze,IconAlignCenter2:Ze,IconAlignLeft:_e,IconAlignLeft2:Ye,IconAlignRight:it,IconAlignRight2:nt,IconArrowDown:dt,IconArrowLeft:xt,IconArrowRight:wt,IconArrowUp:jt,IconBack:Ft,IconBlockquote:$t,IconBold:Dt,IconBulb:Pt,IconBulletList:Vt,IconCheck:Kt,IconChevronDown:Ut,IconChevronLeft:ei,IconChevronRight:ri,IconChevronUp:ai,IconClose:pi,IconCode:mi,IconCodeBlock:yi,IconCopy:Li,IconDelete:Si,IconEdit:Ei,IconExitFullscreen:Hi,IconFullTable:zi,IconFullscreen:Zi,IconGallery:_i,IconH1:Yi,IconH2:is,IconH3:ns,IconHr:ds,IconImage:xs,IconInfo:ws,IconItalic:js,IconKeyboard:Fs,IconLatex:$s,IconLatexBlock:Ds,IconLeetcode:Ps,IconLink:Vs,IconLoading:Ks,IconObjectFit:Us,IconOpenBlank:er,IconOrderedList:rr,IconOutline:ar,IconPage:pr,IconParagraph:mr,IconPause:yr,IconPlayFilled:Lr,IconQuestion:Sr,IconRestore:Er,IconRowDivider:Hr,IconSpin:zr,IconTable:Zr,IconUser:_r,IconVideo:Yr,IconMenu:io,IconRowMore:no,IconEyeOpen:ho,IconEyeClose:uo,IconLock:vo,IconUnlock:bo,IconWarn:Io,IconMarkdown:Ao,IconEmoji:(0,Eo.memo)(Do)},Ho=i(70917),To=i(67294),Po=v(i(44194)),Oo=v(i(5622)),zo=e=>{e.stopPropagation(),e.preventDefault()};function No(e){const t=new class{constructor(e){y(this,"elm"),y(this,"start"),y(this,"end"),y(this,"value");const{selectionStart:t,selectionEnd:i}=e;this.elm=e,this.start=t,this.end=i,this.value=this.elm.value}position(e,t){const{selectionStart:i,selectionEnd:s}=this.elm;return this.start="number"!==typeof e||isNaN(e)?i:e,this.end="number"!==typeof t||isNaN(t)?s:t,this.elm.selectionStart=this.start,this.elm.selectionEnd=this.end,this}insertText(e){return this.elm.focus(),this.elm.setRangeText(e),this.value=this.elm.value,this.position(),this}getSelectedValue(e,t){var i;const{selectionStart:s,selectionEnd:r}=this.elm;return null==(i=this.value)?void 0:i.slice("number"!==typeof e||isNaN(e)?s:e,"number"!==typeof t||isNaN(t)?r:e)}getLineStartNumber(){let e=this.start;for(;e>0;)if(e--,"\n"===this.value.charAt(e)){e++;break}return e}getIndentText(){const e=this.getLineStartNumber(),t=this.getSelectedValue(e);let i="";return t.replace(/(^(\s)+)/,((e,t)=>i=t)),i}lineStarInstert(e){if(e){const t=this.start,i=this.getLineStartNumber(),s=this.getSelectedValue(i);this.position(i,this.end).insertText(s.split("\n").map((t=>e+t)).join("\n")).position(t+e.length,this.end)}return this}lineStarRemove(e){if(e){const t=this.start,i=this.getLineStartNumber(),s=this.getSelectedValue(i),r=new RegExp(`^${e}`,"g");let o=t-e.length;r.test(s)||(o=t),this.position(i,this.end).insertText(s.split("\n").map((e=>e.replace(r,""))).join("\n")).position(o,this.end)}}notifyChange(){const e=new Event("input",{bubbles:!0,cancelable:!1});this.elm.dispatchEvent(e)}}(e.target),i=(e.code||e.nativeEvent.code).toLocaleLowerCase();if("tab"===i)zo(e),t.start===t.end?e.shiftKey?t.lineStarRemove("  "):t.insertText("  ").position(t.start+2,t.end+2):t.getSelectedValue().indexOf("\n")>-1&&e.shiftKey?t.lineStarRemove("  "):t.getSelectedValue().indexOf("\n")>-1?t.lineStarInstert("  "):t.insertText("  ").position(t.start+2,t.end),t.notifyChange();else if("enter"===i){zo(e);const i=`\n${t.getIndentText()}`;t.insertText(i).position(t.start+i.length,t.start+i.length),t.notifyChange()}else if(i&&/^(quote|backquote|bracketleft|digit9|comma)$/.test(i)&&t.getSelectedValue()){zo(e);const s=t.getSelectedValue();let r="";switch(i){case"quote":r=`'${s}'`,e.shiftKey&&(r=`"${s}"`);break;case"backquote":r=`\`${s}\``;break;case"bracketleft":r=`[${s}]`,e.shiftKey&&(r=`{${s}}`);break;case"digit9":r=`(${s})`;break;case"comma":r=`<${s}>`}t.insertText(r),t.notifyChange()}}var Vo={position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},Wo={position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",opacity:.8,overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},Zo={margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word",outline:0},Go=i(70917),Ko=i(35944),qo=(0,To.forwardRef)(((e,t)=>{const i=e,{prefixCls:s="w-tc-editor",value:r,padding:o=10,minHeight:n=16,placeholder:l,language:a,className:c,style:d,rehypePlugins:h,onChange:p}=i,g=f(i,["prefixCls","value","padding","minHeight","placeholder","language","className","style","rehypePlugins","onChange"]),{tm:x,isDarkMode:w}=ee(),[v,y]=(0,To.useState)(e.value||"");(0,To.useEffect)((()=>y(e.value||"")),[e.value]);const k=(0,To.useRef)(null);(0,To.useImperativeHandle)(t,(()=>k.current),[k]);const j={paddingTop:o,paddingRight:o,paddingBottom:o,paddingLeft:o},b=(0,To.useMemo)((()=>{return e=`<pre aria-hidden=true><code ${a&&v?`class="language-${a}"`:""} >${t=String(v||""),t.replace(/```(tsx?|jsx?|html|xml)(.*)\s+([\s\S]*?)(\s.+)?```/g,(e=>e.replace(/[<&"]/g,(e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[e]))))).replace(/[<&"]/g,(e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[e])))}</code><br /></pre>`,(0,Po.default)().data("settings",{fragment:!0}).use(Oo.default).processSync(`${e}`).toString();var e,t}),[v,a,h]),L=(0,To.useMemo)((()=>(0,Ko.jsx)("div",{style:m(u(u({},Zo),j),{minHeight:n}),css:Go.css`
          ${g.readOnly&&Go.css`
            white-space: nowrap;
            overflow-x: scroll;
            pre {
              margin: 0;
            }
          `}
        `,className:g.readOnly?"":`${s}-preview ${a?`language-${a}`:""}`,dangerouslySetInnerHTML:{__html:b}})),[s,a,b]),C=m(u({autoComplete:"off",autoCorrect:"off",spellCheck:"false",autoCapitalize:"off"},g),{placeholder:l,onKeyDown:e=>{g.readOnly||g.onKeyDown&&!1===g.onKeyDown(e)||No(e)},style:u(m(u(u(u({},Zo),Wo),j),{minHeight:n}),l&&!v?{WebkitTextFillColor:"inherit"}:{}),onChange:e=>{y(e.target.value),p&&p(e)},className:`${s}-text`,value:v});return(0,Ko.jsxs)(Ko.Fragment,{children:[(0,Ko.jsx)(Go.Global,{styles:Go.css`
          @media (prefers-color-scheme: dark) {
            .w-tc-editor {
              --color-fg-default: #c9d1d9;
              --color-canvas-subtle: #161b22;
              --color-prettylights-syntax-comment: #8b949e;
              --color-prettylights-syntax-entity-tag: #7ee787;
              --color-prettylights-syntax-entity: #d2a8ff;
              /* --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58; */
              --color-prettylights-syntax-constant: #79c0ff;
              --color-prettylights-syntax-string: #a5d6ff;
              --color-prettylights-syntax-keyword: #ff7b72;
              --color-prettylights-syntax-markup-bold: #c9d1d9;
            }
          }
          @media (prefers-color-scheme: light) {
            .w-tc-editor {
              --color-fg-default: #24292f;
              --color-canvas-subtle: #f6f8fa;
              --color-prettylights-syntax-comment: #6e7781;
              --color-prettylights-syntax-entity-tag: #116329;
              --color-prettylights-syntax-entity: #8250df;
              --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
              --color-prettylights-syntax-constant: #0550ae;
              --color-prettylights-syntax-string: #0a3069;
              --color-prettylights-syntax-keyword: #cf222e;
              --color-prettylights-syntax-markup-bold: #24292f;
            }
          }
          .w-tc-editor[data-color-mode*="dark"],
          [data-color-mode*="dark"] .w-tc-editor,
          [data-color-mode*="dark"] .w-tc-editor-var,
          body[data-color-mode*="dark"] {
            --color-fg-default: #c9d1d9;
            --color-canvas-subtle: #161b22;
            --color-prettylights-syntax-comment: #8b949e;
            --color-prettylights-syntax-entity-tag: #7ee787;
            --color-prettylights-syntax-entity: #d2a8ff;
            /* --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58; */
            --color-prettylights-syntax-constant: #79c0ff;
            --color-prettylights-syntax-string: #a5d6ff;
            --color-prettylights-syntax-keyword: #ff7b72;
            --color-prettylights-syntax-markup-bold: #c9d1d9;
          }
          .w-tc-editor[data-color-mode*="light"],
          [data-color-mode*="light"] .w-tc-editor,
          [data-color-mode*="light"] .w-tc-editor-var,
          body[data-color-mode*="light"] {
            --color-fg-default: #24292f;
            --color-canvas-subtle: #f6f8fa;
            --color-prettylights-syntax-comment: #6e7781;
            --color-prettylights-syntax-entity-tag: #116329;
            --color-prettylights-syntax-entity: #8250df;
            --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
            --color-prettylights-syntax-constant: #0550ae;
            --color-prettylights-syntax-string: #0a3069;
            --color-prettylights-syntax-keyword: #cf222e;
            --color-prettylights-syntax-markup-bold: #24292f;
          }
          .w-tc-editor {
            font-family: inherit;
            font-size: 12px;
            background-color: var(--color-canvas-subtle);
            color: var(--color-fg-default);

            * {
              font-family: monospace !important;
            }
          }
          .w-tc-editor-text,
          .w-tc-editor-preview {
            min-height: 16px;
          }
          .w-tc-editor-preview pre {
            margin: 0;
            padding: 0;
            white-space: inherit;
            font-family: inherit;
            font-size: inherit;
          }
          .w-tc-editor-preview pre code {
            font-family: inherit;
          }
          .w-tc-editor code[class*="language-"] .token.cdata,
          .w-tc-editor pre[class*="language-"] .token.cdata,
          .w-tc-editor code[class*="language-"] .token.comment,
          .w-tc-editor pre[class*="language-"] .token.comment,
          .w-tc-editor code[class*="language-"] .token.doctype,
          .w-tc-editor pre[class*="language-"] .token.doctype,
          .w-tc-editor code[class*="language-"] .token.prolog,
          .w-tc-editor pre[class*="language-"] .token.prolog {
            color: var(--color-prettylights-syntax-comment);
          }
          .w-tc-editor code[class*="language-"] .token.punctuation,
          .w-tc-editor pre[class*="language-"] .token.punctuation {
            color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
          }
          .w-tc-editor code[class*="language-"] .namespace,
          .w-tc-editor pre[class*="language-"] .namespace {
            opacity: 0.8;
          }
          .w-tc-editor code[class*="language-"] .token.boolean,
          .w-tc-editor pre[class*="language-"] .token.boolean,
          .w-tc-editor code[class*="language-"] .token.constant,
          .w-tc-editor pre[class*="language-"] .token.constant,
          .w-tc-editor code[class*="language-"] .token.deleted,
          .w-tc-editor pre[class*="language-"] .token.deleted,
          .w-tc-editor code[class*="language-"] .token.number,
          .w-tc-editor pre[class*="language-"] .token.number,
          .w-tc-editor code[class*="language-"] .token.symbol,
          .w-tc-editor pre[class*="language-"] .token.symbol {
            color: var(--color-prettylights-syntax-entity-tag);
          }
          .w-tc-editor code[class*="language-"] .token.builtin,
          .w-tc-editor pre[class*="language-"] .token.builtin,
          .w-tc-editor code[class*="language-"] .token.char,
          .w-tc-editor pre[class*="language-"] .token.char,
          .w-tc-editor code[class*="language-"] .token.inserted,
          .w-tc-editor pre[class*="language-"] .token.inserted,
          .w-tc-editor code[class*="language-"] .token.selector,
          .w-tc-editor pre[class*="language-"] .token.selector,
          .w-tc-editor code[class*="language-"] .token.string,
          .w-tc-editor pre[class*="language-"] .token.string {
            color: var(--color-prettylights-syntax-constant);
          }
          .w-tc-editor code[class*="language-"] .style .token.string,
          .w-tc-editor pre[class*="language-"] .style .token.string,
          .w-tc-editor code[class*="language-"] .token.entity,
          .w-tc-editor pre[class*="language-"] .token.entity,
          .w-tc-editor code[class*="language-"] .token.property,
          .w-tc-editor pre[class*="language-"] .token.property,
          .w-tc-editor code[class*="language-"] .token.operator,
          .w-tc-editor pre[class*="language-"] .token.operator,
          .w-tc-editor code[class*="language-"] .token.url,
          .w-tc-editor pre[class*="language-"] .token.url {
            color: var(--color-prettylights-syntax-constant);
          }
          .w-tc-editor code[class*="language-"] .token.atrule,
          .w-tc-editor pre[class*="language-"] .token.atrule,
          .w-tc-editor
            code[class*="language-"]
            .token.property-access
            .token.method,
          .w-tc-editor
            pre[class*="language-"]
            .token.property-access
            .token.method,
          .w-tc-editor code[class*="language-"] .token.keyword,
          .w-tc-editor pre[class*="language-"] .token.keyword {
            color: var(--color-prettylights-syntax-keyword);
          }
          .w-tc-editor code[class*="language-"] .token.function,
          .w-tc-editor pre[class*="language-"] .token.function {
            color: var(--color-prettylights-syntax-string);
          }
          .w-tc-editor code[class*="language-"] .token.important,
          .w-tc-editor pre[class*="language-"] .token.important,
          .w-tc-editor code[class*="language-"] .token.regex,
          .w-tc-editor pre[class*="language-"] .token.regex,
          .w-tc-editor code[class*="language-"] .token.variable,
          .w-tc-editor pre[class*="language-"] .token.variable {
            color: var(--color-prettylights-syntax-string-regexp);
          }
          .w-tc-editor code[class*="language-"] .token.bold,
          .w-tc-editor pre[class*="language-"] .token.bold,
          .w-tc-editor code[class*="language-"] .token.important,
          .w-tc-editor pre[class*="language-"] .token.important {
            color: var(--color-prettylights-syntax-markup-bold);
          }
          .w-tc-editor code[class*="language-"] .token.tag,
          .w-tc-editor pre[class*="language-"] .token.tag {
            color: var(--color-prettylights-syntax-entity-tag);
          }
          .w-tc-editor code[class*="language-"] .token.attr-value,
          .w-tc-editor pre[class*="language-"] .token.attr-value,
          .w-tc-editor code[class*="language-"] .token.attr-name,
          .w-tc-editor pre[class*="language-"] .token.attr-name {
            color: var(--color-prettylights-syntax-constant);
          }
          .w-tc-editor code[class*="language-"] .token.selector .class,
          .w-tc-editor pre[class*="language-"] .token.selector .class,
          .w-tc-editor code[class*="language-"] .token.class-name,
          .w-tc-editor pre[class*="language-"] .token.class-name {
            color: var(--color-prettylights-syntax-entity);
          }
        `}),(0,Ko.jsxs)("div",{style:u(u({},Vo),d),className:`${s} ${c||""}`,"data-color-mode":w?"dark":"light",children:[g.readOnly||(0,Ko.jsx)("textarea",m(u({},C),{ref:k})),L]})]})})),_o=i(70917),Jo=i(67294),Uo=i(35944),Qo=(0,Jo.forwardRef)(((e,t)=>{const{tm:i}=ee();return(0,Uo.jsx)("div",u({ref:t,css:_o.css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          border-radius: 3px;
          cursor: pointer;
          background-color: ${e.active?i("sys/Light/Fill/02"):"transparent"};
          transition: all 0.2s;
          ${D} {
            background-color: ${i("sys/Light/Fill/01")};
          }
        `},e))})),Yo=i(70917),Xo=v(i(87083)),en=i(67294),tn=i(70917),sn=i(96391),rn=i(35944),on=e=>{const{children:t=null,render:i,placement:s="top",interactive:r=!0,trigger:o="hover",visible:n,onClickOutside:l,onHide:a,onShow:c,showDuration:d=150,hideDuration:h=0,appendTo:p="parent",showInReadOnly:g=!1,disabled:x=!1,reference:u}=e,[m,f]=(0,en.useState)(),w=(0,sn.useReadOnly)(),{tm:v}=ee();if(w&&!g)return(0,rn.jsx)(rn.Fragment,{children:t});const y="function"===typeof t?t(m):t;return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)(tn.Global,{styles:tn.css`
          .tippy-box[data-animation="fade"][data-state="hidden"] {
            opacity: 0;
          }
          [data-tippy-root] {
            z-index: 10 !important;
            max-width: calc(100vw - 10px);
          }
          .tippy-box {
            position: relative;
            background-color: #333;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            line-height: 1.4;
            white-space: normal;
            outline: 0;
            transition-property: transform, visibility, opacity;
          }
          .tippy-box[data-placement^="top"] > .tippy-arrow {
            bottom: 0;
          }
          .tippy-box[data-placement^="top"] > .tippy-arrow:before {
            bottom: -7px;
            left: 0;
            border-width: 8px 8px 0;
            border-top-color: initial;
            transform-origin: center top;
          }
          .tippy-box[data-placement^="bottom"] > .tippy-arrow {
            top: 0;
          }
          .tippy-box[data-placement^="bottom"] > .tippy-arrow:before {
            top: -7px;
            left: 0;
            border-width: 0 8px 8px;
            border-bottom-color: initial;
            transform-origin: center bottom;
          }
          .tippy-box[data-placement^="left"] > .tippy-arrow {
            right: 0;
          }
          .tippy-box[data-placement^="left"] > .tippy-arrow:before {
            border-width: 8px 0 8px 8px;
            border-left-color: initial;
            right: -7px;
            transform-origin: center left;
          }
          .tippy-box[data-placement^="right"] > .tippy-arrow {
            left: 0;
          }
          .tippy-box[data-placement^="right"] > .tippy-arrow:before {
            left: -7px;
            border-width: 8px 8px 8px 0;
            border-right-color: initial;
            transform-origin: center right;
          }
          .tippy-box[data-inertia][data-state="visible"] {
            transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
          }
          .tippy-arrow {
            width: 16px;
            height: 16px;
            color: #333;
          }
          .tippy-arrow:before {
            content: "";
            position: absolute;
            border-color: transparent;
            border-style: solid;
          }
          .tippy-content {
            position: relative;
            padding: 5px 9px;
            z-index: 1;
          }

          /* animation */
          .tippy-box[data-animation="shift-away"][data-state="hidden"] {
            opacity: 0;
          }
          .tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="top"] {
            transform: translateY(10px);
          }
          .tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="bottom"] {
            transform: translateY(-10px);
          }
          .tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="left"] {
            transform: translateX(10px);
          }
          .tippy-box[data-animation="shift-away"][data-state="hidden"][data-placement^="right"] {
            transform: translateX(-10px);
          }

          .tippy-box[data-theme~="custom"] {
            z-index: 10 !important;
            background-color: ${v("sys/Light/Layer/01")};
            color: ${v("sys/Light/Text/primary")};
            font-size: 14px;
            font-weight: 400;

            .tippy-content {
              padding: 0;
            }
          }
        `}),(0,rn.jsx)(Xo.default,{onCreate:f,disabled:x,appendTo:p,delay:[150,150],visible:n,reference:u,onClickOutside:()=>{null==l||l(m)},zIndex:10,onShow:()=>{null==c||c(m)},onHide:()=>{null==a||a(m)},duration:[d,h],interactive:r,placement:s,arrow:!1,animation:"shift-away",theme:"custom",trigger:void 0===n?L[o]:void 0,content:i(m),children:y})]})},nn=i(35944),ln=({content:e,children:t})=>{const{tm:i}=ee();return e?E?(0,nn.jsx)(nn.Fragment,{children:t}):(0,nn.jsx)(on,{showInReadOnly:!0,interactive:!1,render:()=>(0,nn.jsx)("div",{css:Yo.css`
              padding: 6px 12px;
              background-color: ${i("sys/Light/Fixed/black")} !important;
              opacity: 0.8;
              box-shadow: ${i("sys/Light/Shadow/down-01")};
              border-radius: 5px;

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 5px;

              font-weight: 400;
              font-size: 14px;
              color: ${i("sys/Light/Fixed/white")} !important;
              white-space: nowrap;
            `,children:e}),children:t}):(0,nn.jsx)(nn.Fragment,{children:t})},an=()=>{const{appState:{editorProps:{toast:e}}}=he();return{toast:e}},cn=i(35944),dn=e=>{const{value:t,readOnly:i,padding:s=20,language:r="plainText",width:o="100%",height:n="100px",autoHeight:l=!1,showCopy:a=!0,showReadOnly:c=!0,fontSize:d=12,title:h=""}=e,{toast:p}=an(),{appState:{editorProps:{onCopyContent:g}}}=he();return(0,cn.jsxs)("div",{css:Ho.css`
        position: relative;
      `,children:[(0,cn.jsx)(qo,m(u({},e),{language:r,padding:s,css:Ho.css`
          width: ${o};
          height: ${n};
          font-weight: 400;
          font-size: ${d}px!important;
          line-height: 24px !important;
          background-color: transparent;

          ${!l&&Ho.css`
            overflow: scroll !important;
          `}
        `})),a&&(0,cn.jsx)(ln,{content:"\u590d\u5236\u4ee3\u7801",children:(0,cn.jsx)(Qo,{css:Ho.css`
              position: absolute;
              top: ${s}px;
              right: ${s}px;
              z-index: 10;
            `,onClick:()=>k(void 0,null,(function*(){var e;const i=(t||"").toString();g?g(i):(yield T(i),(null==p?void 0:p.success)?null==(e=null==p?void 0:p.success)||e.call(p,"\u590d\u5236\u6210\u529f"):alert("\u590d\u5236\u6210\u529f"))})),children:(0,cn.jsx)(Ro.IconCopy,{})})}),c&&i&&(0,cn.jsx)("div",{css:Ho.css`
            position: absolute;
            bottom: ${s}px;
            right: ${s}px;
            z-index: 10;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.1);
          `,children:"Readonly"}),!!h&&(0,cn.jsx)("div",{css:Ho.css`
            position: absolute;
            bottom: ${s}px;
            left: ${s}px;
            z-index: 10;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.1);
          `,children:h})]})},hn=i(13416),pn=i(35944),gn=Y({showNodes:!1,readOnly:!1,isEN:!1,isDark:!1,editorValue:[]}),xn=()=>{const e=ke(),t=ke(),{appState:{showNodes:i,readOnly:s,isDark:r,editorValue:o},setAppState:n}=gn(),{tm:l}=ee(),[a,c]=(0,Le.useState)("# Heading1"),d=jn(a);return(0,pn.jsxs)(pn.Fragment,{children:[(0,pn.jsxs)(oe,{justify:"space-between",children:[(0,pn.jsx)("h3",{css:je.css`
            color: ${l("sys/Light/Text/primary")};
            font-weight: bold;
          `,children:"Editor"}),(0,pn.jsxs)(oe,{gap:8,children:[(0,pn.jsxs)(se,{light:s,onClick:()=>{n({readOnly:!s})},children:["\u5f53\u524d\uff1a",s?"\u53ea\u8bfb\u6a21\u5f0f":"\u7f16\u8f91\u6a21\u5f0f"]}),(0,pn.jsxs)(se,{light:!i,onClick:()=>{n({showNodes:!i})},children:[i?"\u5173\u95ed":"\u6253\u5f00","\u8282\u70b9\u663e\u793a"]}),(0,pn.jsxs)(se,{light:!r,onClick:()=>{n({isDark:!r})},children:[r?"\u6697\u8272":"\u4eae\u8272","\u6a21\u5f0f"]}),(0,pn.jsx)(se,{light:!0,onClick:t.show,children:"\u89e3\u6790Markdown"}),(0,pn.jsx)(se,{light:!0,onClick:()=>{confirm("\u786e\u5b9a\u91cd\u7f6e\u5417\uff1f\u8fd9\u5c06\u6062\u590d\u4e3a\u521d\u59cb\u6570\u636e\u5e76\u5237\u65b0\u9875\u9762")&&S&&(localStorage.clear(),location.reload())},children:"\u91cd\u7f6e\u6570\u636e"}),(0,pn.jsx)(se,{onClick:e.show,children:"\u67e5\u770b\u6570\u636e"})]})]}),(0,pn.jsx)(ve,{visible:e.visible,onHide:e.hide,children:(0,pn.jsx)(dn,{readOnly:!0,value:o?JSON.stringify(o,null,2):"",language:"json",width:"70vw",height:"80vh"})}),(0,pn.jsx)(ve,{visible:t.visible,onHide:t.hide,children:(0,pn.jsxs)(oe,{children:[(0,pn.jsx)(dn,{title:"markdown",value:a,onChange:e=>c(e.target.value),width:"30vw",height:"80vh",css:je.css`
              border-right: 1px solid rgba(0, 0, 0, 0.1);
            `}),(0,pn.jsx)(dn,{title:"tokens",readOnly:!0,value:JSON.stringify(hn.marked.lexer(a),null,2),language:"json",width:"30vw",height:"80vh",css:je.css`
              border-right: 1px solid rgba(0, 0, 0, 0.1);
            `}),(0,pn.jsx)(dn,{title:"slateValue",readOnly:!0,value:JSON.stringify(d,null,2),language:"json",width:"30vw",height:"80vh"})]})})]})},un=i(13416),mn=i(40247),fn=e=>{try{return(0,mn.unescape)(e)||""}catch(t){return!z&&console.error(t),""}},wn=e=>e.length?e.map((e=>{var t,i;const{type:s}=e;switch(s){case"paragraph":return{type:"Paragraph",children:wn(e.tokens)};case"heading":switch(e.depth){case 1:return{type:"Heading1",children:wn(e.tokens)};case 2:return{type:"Heading2",children:wn(e.tokens)};case 3:return{type:"Heading3",children:wn(e.tokens)};default:return{type:"Paragraph",children:wn(e.tokens)}}case"list":if(e.ordered){return{type:"OrderedList",children:wn(e.items)}}return{type:"BulletedList",children:wn(e.items)};case"list_item":return{type:"ListItem",children:wn(e.tokens)};case"blockquote":return{type:"BlockQuote",children:wn(e.tokens)};case"br":return{text:"\n"};case"code":return{type:"CodeBlock",tabs:[{code:e.text,language:e.lang||"plainText"}],children:[{text:""}]};case"hr":return{type:"HorizontalRule",children:[{text:""}]};case"image":if(null==(t=null==e?void 0:e.href)?void 0:t.startsWith("http")){return{type:"Image",src:e.href,alt:e.title,width:e.width,style:e.style,align:e.align,children:[{text:""}]}}return{type:"Video",src:e.href,title:e.title,width:e.width,children:[{text:""}]};case"link":if(e.href.startsWith("/u/")&&S){return{type:"Mention",item:{type:"user",name:null==(i=e.text)?void 0:i.slice(1),href:location.origin+e.href},children:[{text:""}]}}if(e.href.startsWith("/problems/")&&S){return{type:"Mention",item:{type:"question",name:e.text,href:location.origin+e.href},children:[{text:""}]}}return{type:"Link",href:e.href,title:e.text,children:[{text:""}]};case"table":return{type:"Table",content:[e.header,...e.rows].map((t=>t.map(((t,i)=>({text:fn(t.text),align:e.align[i]||"left"}))))),children:[{text:""}]};case"gallery":return{type:"Gallery",images:e.images,children:[{text:""}]};case"inlineLatex":return{type:"Latex",tex:e.text,children:[{text:""}]};case"blockLatex":return{type:"LatexBlock",tex:e.text,children:[{text:""}]};case"strong":return{text:fn(e.text),bold:!0};case"del":return{text:fn(e.raw),strikethrough:!0};case"em":return{text:fn(e.text),italic:!0};case"codespan":return{text:fn(e.text),code:!0};case"text":if(e.tokens){return{type:"Paragraph",children:wn(e.tokens)}}return{text:fn(e.text)};default:return{text:""}}})):[{text:""}],vn=/^!\[(.*?)\]\((.*?)\)({:width=(.*?)})?({:style=(.*?)})?({:align=(.*?)})?/,yn=/^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/,kn=e=>un.marked.lexer(e),jn=e=>{const t=[{extensions:[{name:"image",level:"block",start:e=>!e.startsWith("`")&&e.indexOf("!["),tokenizer(e){if(e){const t=e.match(vn);if(t){const e=t[0]||"",i=t[1]||"",s=t[2]||"";let r="",o="",n="";return null==t||t.slice(3).forEach(((e="")=>{var t;const i=e.match(/\{:(width|style|align)=(.*?)\}/);i&&("width"===(null==i?void 0:i[1])&&(r=(null==i?void 0:i[2])||""),"style"===(null==i?void 0:i[1])&&(o=(null==(t=null==i?void 0:i[2])?void 0:t.slice(1,-1))||""),"align"===(null==i?void 0:i[1])&&(n=(null==i?void 0:i[2])||""))})),{type:"image",raw:e,title:"null"===i.toLowerCase()?"":i,href:s,width:H(r),style:o,align:n}}}}}]},{extensions:[{name:"inlineLatex",level:"inline",start(e){var t;return null==(t=e.match(/\${1,2}(.*?)\${1,2}/))?void 0:t.index},tokenizer(e){const t=e.match(/^\${1,2}(.*?)\${1,2}/);if(t)return{type:"inlineLatex",raw:t[0],text:t[1].trim()}}}]},{extensions:[{name:"blockLatex",level:"block",start:e=>e.indexOf("\n$"),tokenizer(e){const t=e.match(yn);if(t)return{type:"blockLatex",raw:t[0],text:t[2].trim()}}}]}];un.marked.use(...t);let i=kn(e);i=i.map((e=>{var t,i;if("blockquote"===e.type){const s=(null==(i=null==(t=e.tokens)?void 0:t[0])?void 0:i.tokens)||[];return m(u({},e),{tokens:s})}return e}));const s=(e=>{var t,i;let s=0,r=[];for(;s<e.length;){let o=[],n=s;for(;;){const s=e[n];if(!s)break;const r="CodeBlock"===s.type,l=null==(t=s.tabs)?void 0:t[0].language,a=null==l?void 0:l.match(/\[(.*?)\]/g),c=!!a,d=null==(i=null==a?void 0:a[0])?void 0:i.slice(1,-1),h=null==l?void 0:l.split(" ")[0].toLowerCase();if(!r||!c)break;o.push(s.tabs.map((e=>m(u({},e),{language:h,title:d})))[0]),n++}o.length>0&&(e[s].tabs=o),r.push(e[s]),s=n,s++}return r})(wn(i)).filter((e=>!!e.type));return s},bn=v(i(96711)),Ln=bn.default.div`
  display: flex;
  flex-direction: ${e=>e.direction||"row"};
  justify-content: center;
  align-items: center;
  gap: ${e=>e.gap||4}px;
`,Cn=i(70917),Fn=i(67294),In=i(35944),Sn=({menu:e})=>{const[t,i]=(0,Fn.useState)(e),[s,r]=(0,Fn.useState)(!1),[o,n]=(0,Fn.useState)(),{appState:{editorWrapperElement:l}}=he(),{tm:a}=ee();(0,Fn.useEffect)((()=>{i(e)}),[e]);const c=e=>{const{hideChildren:s,menuId:r,children:o=[]}=e,n=o.length>0;return(0,In.jsx)(Ln,{css:Cn.css`
          width: 14px;
          height: 14px;
          border-radius: 3px;
          opacity: ${Number(n)};
          color: ${a("sys/Light/Icon/primary")};

          cursor: pointer;
          transition: all 0.2s;
          ${D} {
            background-color: ${a("sys/Light/Fill/02")};
          }
        `,onClick:e=>{e.preventDefault(),e.stopPropagation();const s=null==t?void 0:t.slice(0),o=e=>{e.forEach((e=>{r&&e.menuId===r?e.hideChildren=!e.hideChildren:o((null==e?void 0:e.children)||[])}))};o(s),i(s)},children:s?(0,In.jsx)(Ro.IconChevronRight,{css:Cn.css`
              path {
                stroke-width: 1 !important;
              }
            `}):(0,In.jsx)(Ro.IconChevronDown,{css:Cn.css`
              path {
                stroke-width: 1 !important;
              }
            `})})},d=e=>{if(!S)return;const{menuId:t}=e,i=null==l?void 0:l.querySelector("#"+t);null==i||i.classList.add("highlightId"),null==i||i.scrollIntoView({block:"center"}),null==o||o.hide(),setTimeout((()=>{null==i||i.classList.remove("highlightId")}),3e3)},h=e=>e.map(((e,t)=>{const{type:i,children:s,hideChildren:r}=e;let o=null;return"Heading1"===i&&(o=(e=>{const{title:t}=e;return(0,In.jsxs)(oe,{gap:7.5,children:[c(e),(0,In.jsx)("div",{css:Cn.css`
            font-weight: 500;
            font-size: 14px;
            color: ${a("sys/Light/Text/primary")};
            cursor: pointer;
            transition: all 0.2s;
            ${D} {
              color: ${a("sys/Light/System/primary")};
              text-decoration: underline;
            }
          `,onClick:t=>{t.preventDefault(),t.stopPropagation(),d(e)},children:t})]})})(e)),"Heading2"===i&&(o=(e=>{const{title:t}=e;return(0,In.jsxs)(oe,{gap:7.5,css:Cn.css`
          margin-left: 20px;
        `,children:[c(e),(0,In.jsx)("div",{css:Cn.css`
            font-weight: 400;
            font-size: 14px;
            color: ${a("sys/Light/Text/primary")};
            cursor: pointer;
            transition: all 0.2s;
            ${D} {
              color: ${a("sys/Light/System/primary")};
              text-decoration: underline;
            }
          `,onClick:t=>{t.preventDefault(),t.stopPropagation(),d(e)},children:t})]})})(e)),"Heading3"===i&&(o=(e=>{const{title:t}=e;return(0,In.jsx)("div",{css:Cn.css`
          margin-left: 42px;
        `,children:(0,In.jsx)("div",{css:Cn.css`
            font-weight: 400;
            font-size: 14px;
            color: ${a("sys/Light/Text/secondary")};
            cursor: pointer;
            transition: all 0.2s;
            ${D} {
              color: ${a("sys/Light/System/primary")};
              text-decoration: underline;
            }
          `,onClick:t=>{t.preventDefault(),t.stopPropagation(),d(e)},children:t})})})(e)),(0,In.jsxs)(Fn.Fragment,{children:[o,!r&&!!(null==s?void 0:s.length)&&h(s)]},t)}));return(0,In.jsxs)(In.Fragment,{children:[(0,In.jsx)(Cn.Global,{styles:Cn.css`
          @keyframes myhighlight {
            from {
              background-color: rgba(0, 122, 255, 0.15);
            }
            to {
              background-color: transparent;
            }
          }

          .highlightId {
            animation: myhighlight 3s linear forwards;
          }
        `}),(0,In.jsxs)("div",{css:Cn.css`
          margin-top: 12px;
        `,children:[(0,In.jsxs)("div",{css:Cn.css`
            width: fit-content;
            display: flex;
            border-radius: 5px;
            background-color: ${a("sys/Light/Fill/01")};
          `,children:[(0,In.jsx)(on,{trigger:"click",placement:"bottom-start",disabled:s,onShow:n,render:()=>(0,In.jsx)("div",{css:Cn.css`
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 12px;
                    background-color: ${a("sys/Light/Layer/01")};
                    box-shadow: ${a("sys/Light/Shadow/down-01")};
                    border: 1px solid ${a("sys/Light/Fill/01")};
                    border-radius: 5px;
                    min-width: 200px;
                  `,children:h(t)}),children:(0,In.jsxs)("div",{css:Cn.css`
                padding: 0px 4px;
                display: flex;
                align-items: center;
                gap: 8px;

                border-radius: 5px;

                font-size: 14px;
                font-weight: 400;
                color: ${a("sys/Light/Text/secondary")};

                ${!s&&Cn.css`
                  cursor: pointer;
                  transition: all 0.2s;
                  ${D} {
                    background-color: ${a("sys/Light/Fill/02")};
                  }
                `}
              `,children:[(0,In.jsx)(Ro.IconMenu,{}),"\u76ee\u5f55"]})}),(0,In.jsx)(ln,{content:s?"\u53d6\u6d88\u56fa\u5b9a":"\u56fa\u5b9a\u76ee\u5f55",children:(0,In.jsx)("div",{css:Cn.css`
                border-radius: 5px;
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;

                cursor: pointer;
                transition: all 0.2s;
                ${D} {
                  background-color: ${a("sys/Light/Fill/02")};
                }
              `,onClick:()=>{r(!s)},children:s?(0,In.jsx)(Ro.IconUnlock,{}):(0,In.jsx)(Ro.IconLock,{})})})]}),s&&(0,In.jsxs)(In.Fragment,{children:[(0,In.jsx)("div",{css:Cn.css`
                margin-top: 8px;
                display: flex;
                flex-direction: column;
                gap: 8px;
              `,children:h(t)}),(0,In.jsx)("div",{css:Cn.css`
                margin-top: 15px;
                width: 100%;
                height: 1px;
                background-color: ${a("sys/Light/Fill/03")};
              `})]})]})]})},Bn={Heading1:1,Heading2:2,Heading3:3},$n=e=>{var t;const i=(e=>(e||[]).filter((e=>{var t,i,s;const r=e;return 1===(null==(t=null==r?void 0:r.children)?void 0:t.length)&&void 0!==(null==(s=null==(i=null==r?void 0:r.children)?void 0:i[0])?void 0:s.text)&&["Heading1","Heading2","Heading3"].includes(null==r?void 0:r.type)})).map((e=>{var t,i;const s=e;return{type:null==s?void 0:s.type,menuId:"SLATE_"+(null==s?void 0:s.slateId),title:(null==(i=null==(t=null==s?void 0:s.children)?void 0:t[0])?void 0:i.text)||"\u6682\u65e0\u6807\u9898"}})))(e),s=[],r=[];if(!i.length)return r;for(let o=0;o<i.length;o++){const{type:e,title:n,menuId:l}=i[o],a={type:e,title:n,menuId:l},c=Bn[e];if(1===c){for(s.length>0&&r.push(s[0]);s.length>0;)s.pop();s.push(a)}else{for(;s.length>c-1;)s.pop();const e=s[s.length-1];e&&!(null==e?void 0:e.children)&&(e.children=[]),null==(t=null==e?void 0:e.children)||t.push(a),s.push(a)}}return r.push(s[0]),r},An=i(70917),En=i(67294),Mn=i(70917),Dn=i(67294),Rn=i(35944),Hn=(0,Dn.forwardRef)(((e,t)=>{const{tm:i}=ee();return(0,Rn.jsx)("div",m(u({},e),{ref:t,css:Mn.css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 16px;
          width: fit-content;
          gap: 16px;
          background-color: ${i("sys/Light/Layer/01")};
          box-shadow: ${i("sys/Light/Shadow/down-01")};
          border: 1px solid ${i("sys/Light/Fill/01")};
          border-radius: 8px;
          font-weight: 400;
          font-size: 14px;
          color: ${i("sys/Light/Text/primary")};
        `}))})),Tn=i(35944),Pn=(0,En.forwardRef)(((e,t)=>(0,Tn.jsx)(Hn,m(u({},e),{ref:t,css:An.css`
          padding: 6px;
          gap: 2px;
        `})))),On=i(70917),zn=i(67294),Nn=i(35944),Vn=(0,zn.forwardRef)(((e,t)=>{const{tm:i}=ee();return(0,Nn.jsx)("div",u({ref:t,css:On.css`
          display: flex;
          align-items: center;
          cursor: pointer;
          width: 168px;
          height: 32px;
          border-radius: 3px;
          font-weight: 400;
          font-size: 14px;
          padding: 0px 6px;
          gap: 10px;
          * {
            user-select: none;
          }
          transition: all 0.2s;
          ${D} {
            background-color: ${i("sys/Light/Fill/02")};
          }
        `},e))})),Wn=i(70917),Zn=Y({showGuide:!1,activeIndex:0,showCommands:!1,showLinkGuide:!1,showWechatModal:!1}),Gn=i(70917),Kn=v(i(96711)),qn=Kn.default.div`
  width: ${e=>e.full?"100%":"auto"};
  height: ${e=>e.full?"100%":"auto"};
  display: flex;
  flex-direction: column;
  gap: ${e=>void 0===e.gap?4:e.gap}px;
  justify-content: ${e=>e.justify||"flex-start"};
`,_n=i(67294),Jn=i(35944),Un=()=>{const e=Zn(),{appState:{showGuide:t,activeIndex:i,showLinkGuide:s,showWechatModal:r}}=e,{tm:o}=ee(),n=[{image:"https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/20230810-190715.jpeg",title:"\u7f16\u8f91\u6587\u6863",content:"\u9009\u4e2d\u4efb\u610f\u6587\u672c\uff0c\u5373\u81ea\u52a8\u6d6e\u8d77\u5de5\u5177\u680f\u3002\u4f60\u53ef\u4ee5\u6539\u53d8\u6587\u672c\u4e3a\u6807\u9898\u3001\u5217\u8868\u3001\u5f15\u7528\u3001\u52a0\u7c97\u3001\u659c\u4f53\u3001\u884c\u5185\u4ee3\u7801\u3001\u516c\u5f0f\u6216\u94fe\u63a5\u3002"},{image:"https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/20230810-190718.jpeg",title:"\u5de5\u5177\u680f\u83dc\u5355",content:"\u8f93\u5165 / \u6216\u70b9\u51fb\u5de6\u4fa7\u6dfb\u52a0\u6309\u94ae\uff0c\u5373\u53ef\u6253\u5f00\u5de5\u5177\u680f\u83dc\u5355\uff0c\u9009\u62e9\u9700\u8981\u63d2\u5165\u7684\u529f\u80fd\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u6253\u5f00\u5de5\u5177\u680f\u540e\uff0c\u8f93\u5165\u5173\u952e\u5b57\u5feb\u6377\u9009\u62e9\u6240\u9700\u529f\u80fd\u3002"},{image:"https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/20230810-190703.jpeg",title:"\u6dfb\u52a0\u591a\u4e2a\u4ee3\u7801\u7247\u6bb5",content:"\u8f93\u5165 ``` \u6216\u4ece\u5de5\u5177\u680f\u83dc\u5355\u9009\u62e9\u4ee3\u7801\u5757\uff0c\u53ef\u4ee5\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u4ee3\u7801\u7247\u6bb5\u3002\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7801\u5757\u9876\u90e8\u7684\u6dfb\u52a0\u6309\u94ae\uff0c\u6dfb\u52a0\u591a\u4e2a\u4ee3\u7801\u7247\u6bb5\u3002"},{image:"https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/20230810-190707.jpeg",title:"\u7528 @ \u63d0\u53ca\u7528\u6237\u6216\u9898\u76ee",content:"\u8f93\u5165 @ \u6216\u4ece\u5de5\u5177\u680f\u83dc\u5355\u9009\u62e9\u63d0\u53ca\u7528\u6237\u6216\u9898\u76ee\uff0c\u53ef\u4ee5\u5feb\u901f\u7b5b\u9009\u5b9a\u4f4d\u7528\u6237\u6216\u9898\u76ee\u540d\u79f0\uff0c\u9009\u62e9\u540e\u5373\u63d0\u53ca\u8be5\u7528\u6237\u6216\u9898\u76ee\u3002"},{image:"https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/20230810-190712.jpeg",title:"\u5feb\u6377\u6307\u4ee4",content:"\u65e8\u5728\u63d0\u5347\u521b\u4f5c\u6548\u7387\uff0c\u7f16\u8f91\u5668\u652f\u6301\u952e\u76d8\u5feb\u6377\u6307\u4ee4\u548c Markdown \u8bed\u6cd5\u3002\u4ece\u5e2e\u52a9\u83dc\u5355\u9009\u62e9\u5feb\u6377\u6307\u4ee4\uff0c\u5373\u53ef\u67e5\u770b\u5bf9\u5e94\u6307\u4ee4\u548c\u8bed\u6cd5\u3002"}],l="hasShowUserGuide",a=(t,s)=>{const{image:r,title:a,content:c}=t,d=s===n.length-1,h=()=>{S&&(localStorage.setItem(l,"true"),e.setAppState({showGuide:!1,activeIndex:0,showLinkGuide:!0}))};return i===s?(0,Jn.jsxs)(Jn.Fragment,{children:[(0,Jn.jsx)("img",{src:r,css:Gn.css`
            width: 240px;
            height: 160px;

            border: 1px solid ${o("sys/Light/Fill/02")};
            background-color: ${o("sys/Light/Layer/01")};

            border-radius: 5px;
            overflow: hidden;
          `}),(0,Jn.jsxs)(qn,{full:!0,justify:"space-between",css:Gn.css`
            width: 496px;
            height: 160px;
          `,children:[(0,Jn.jsxs)(qn,{full:!0,gap:8,children:[(0,Jn.jsxs)(oe,{full:!0,justify:"space-between",children:[(0,Jn.jsx)("div",{css:Gn.css`
                  font-weight: 500;
                  font-size: 16px;
                  color: ${o("sys/Light/Text/primary")};
                `,children:a}),(0,Jn.jsx)(Qo,{onClick:h,children:(0,Jn.jsx)(Ro.IconClose,{})})]}),(0,Jn.jsx)("div",{css:Gn.css`
                font-weight: 400;
                font-size: 14px;
                color: ${o("sys/Light/Text/secondary")};
              `,children:c})]}),(0,Jn.jsxs)(oe,{full:!0,justify:"space-between",children:[(0,Jn.jsxs)("div",{css:Gn.css`
                font-weight: 400;
                font-size: 14px;
                color: ${o("sys/Light/Text/tertiary")};
              `,children:[s+1,"/",n.length]}),(0,Jn.jsx)(oe,{gap:8,children:d?(0,Jn.jsx)(se,{onClick:h,children:"\u5b8c\u6210"}):(0,Jn.jsx)(se,{onClick:()=>{e.setAppState({activeIndex:s+1})},children:"\u7ee7\u7eed"})})]})]})]}):null};return(0,_n.useEffect)((()=>{localStorage.getItem(l)||e.setAppState({activeIndex:0,showGuide:!0})}),[]),(0,Jn.jsxs)(Jn.Fragment,{children:[t&&(0,Jn.jsx)(oe,{full:!0,gap:32,css:Gn.css`
            position: fixed;
            z-index: 99;
            bottom: 24px;
            left: calc(50vw - 415px);
            width: 800px;
            height: 192px;
            padding: 16px;
            box-sizing: border-box;
            background-color: ${o("sys/Light/Layer/01")};
            box-shadow: ${o("sys/Light/Shadow/down-01")};
            border: 1px solid ${o("sys/Light/Fill/01")};
            border-radius: 8px;
          `,children:n.map(((e,t)=>(0,Jn.jsx)(_n.Fragment,{children:a(e,t)},t)))}),s&&(0,Jn.jsxs)("div",{css:Gn.css`
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 300px;
            padding: 16px;
            z-index: 99;
            background-color: ${o("sys/Light/Layer/01")};
            box-shadow: ${o("sys/Light/Shadow/down-01")};
            border: 1px solid ${o("sys/Light/Fill/01")};
            border-radius: 8px;
          `,children:[(0,Jn.jsxs)("div",{css:Gn.css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `,children:[(0,Jn.jsx)("div",{css:Gn.css`
                font-size: 16px;
                font-weight: bold;
                color: ${o("sys/Light/Text/primary")};
              `,children:"\u63d0\u793a"}),(0,Jn.jsx)(Qo,{onClick:()=>{e.setAppState({showLinkGuide:!1})},children:(0,Jn.jsx)(Ro.IconClose,{})})]}),(0,Jn.jsxs)("div",{css:Gn.css`
              margin-top: 7px;
              font-size: 14px;
              margin-bottom: 20px;
              color: ${o("sys/Light/Text/secondary")};
            `,children:["\u6b22\u8fce\u4f7f\u7528\u65b0\u7248\u5bcc\u6587\u672c\u7f16\u8f91\u5668\uff0c\u4f7f\u7528\u65b9\u5f0f\u8bf7\u67e5\u770b",(0,Jn.jsx)("a",{css:Gn.css`
                color: ${o("sys/Light/System/primary")};
                text-decoration: none;
                cursor: pointer;
                transition: all 0.2s;
                ${D} {
                  color: ${o("sys/Light/System/primary")};
                  text-decoration: underline;
                }
              `,target:"_blank",href:"https://leetcode.feishu.cn/docx/MJnQdVJVNodO8DxCq4Qc166Vnth?from=from_copylink",children:"\u300c\u65b0\u7248\u7f16\u8f91\u5668\u4f7f\u7528\u6307\u5357\u300d"})]}),(0,Jn.jsx)("div",{css:Gn.css`
              width: 100%;
              display: flex;
              justify-content: end;
            `,children:(0,Jn.jsx)(se,{onClick:()=>{window.open("https://leetcode.feishu.cn/share/base/form/shrcnF1nXJFwCPHX4WERUzybo1c")},children:"\u95ee\u9898\u53cd\u9988"})})]})]})},Qn=i(70917),Yn="\u4e00\u7ea7\u6807\u9898",Xn="\u4e8c\u7ea7\u6807\u9898",el="\u4e09\u7ea7\u6807\u9898",tl="\u6b63\u6587",il="\u6709\u5e8f\u5217\u8868",sl="\u65e0\u5e8f\u5217\u8868",rl="\u5f15\u7528",ol="\u5206\u9694\u7ebf",nl="\u52a0\u7c97",ll="\u659c\u4f53",al="\u94fe\u63a5",cl="\u56fe\u7247",dl="\u89c6\u9891",hl="\u8868\u683c",pl="\u884c\u5185\u4ee3\u7801",gl="\u4ee3\u7801\u5757",xl="\u516c\u5f0f",ul="\u516c\u5f0f\u5757",ml="\u9898\u76ee",fl="\u7528\u6237",wl="\u5e7b\u706f\u7247",vl="Emoji",yl={Heading1:{icon:Ro.IconH1,title:Yn,shortcuts:B?["\u2318","\u2325","1"]:["Ctrl","Shift","1"]},Heading2:{icon:Ro.IconH2,title:Xn,shortcuts:B?["\u2318","\u2325","2"]:["Ctrl","Shift","2"]},Heading3:{icon:Ro.IconH3,title:el,shortcuts:B?["\u2318","\u2325","3"]:["Ctrl","Shift","3"]},Paragraph:{icon:Ro.IconParagraph,title:tl,shortcuts:B?["\u2318","\u2325","0"]:["Ctrl","Shift","0"]},OrderedList:{icon:Ro.IconOrderedList,title:il,shortcuts:B?["\u2318","\u2325","4"]:["Ctrl","Shift","4"]},BulletedList:{icon:Ro.IconBulletList,title:sl,shortcuts:B?["\u2318","\u2325","5"]:["Ctrl","Shift","5"]},BlockQuote:{icon:Ro.IconBlockquote,title:rl,shortcuts:B?["\u2318",">"]:["Ctrl",">"]}},kl={bold:{icon:Ro.IconBold,title:nl,shortcuts:B?["\u2318","B"]:["Ctrl","B"]},italic:{icon:Ro.IconItalic,title:ll,shortcuts:B?["\u2318","I"]:["Ctrl","I"]},Link:{icon:Ro.IconLink,title:al,shortcuts:B?["\u2318","K"]:["Ctrl","K"]},emoji:{icon:Ro.IconEmoji,title:vl,shortcuts:B?["\u2318","E"]:["Ctrl","E"]},code:{icon:Ro.IconCode,title:pl,shortcuts:B?["\u2318","Ctrl","C"]:["Alt","Shift","C"]},CodeBlock:{icon:Ro.IconCodeBlock,title:gl,shortcuts:B?["\u2318","Shift","C"]:["Ctrl","Shift","C"]},Latex:{icon:Ro.IconLatex,title:xl,shortcuts:B?["\u2318","Ctrl","L"]:["Alt","Shift","L"]},LatexBlock:{icon:Ro.IconLatexBlock,title:ul,shortcuts:B?["\u2318","Shift","L"]:["Ctrl","Shift","L"]}},jl=u(u({},yl),kl),bl={Heading1:{icon:Ro.IconH1,title:Yn,shortcuts:["#","Space"]},Heading2:{icon:Ro.IconH2,title:Xn,shortcuts:["##","Space"]},Heading3:{icon:Ro.IconH3,title:el,shortcuts:["###","Space"]},OrderedList:{icon:Ro.IconOrderedList,title:il,shortcuts:["-","Space"]},BulletedList:{icon:Ro.IconBulletList,title:sl,shortcuts:["1.","Space"]},BlockQuote:{icon:Ro.IconBlockquote,title:rl,shortcuts:[">","Space"]},CodeBlock:{icon:Ro.IconCodeBlock,title:gl,shortcuts:["```","Space"]},LatexBlock:{icon:Ro.IconLatexBlock,title:ul,shortcuts:["$$","Space"]},HorizontalRule:{icon:Ro.IconHr,title:ol,shortcuts:["---","Space"]}},Ll=i(70917),Cl=i(35944),Fl=e=>{const{tm:t}=ee();return(0,Cl.jsx)("div",u({css:Ll.css`
        width: 100%;
        border: 0.5px solid ${t("sys/Light/Fill/02")};
        margin: ${e.margin||0}px 0px;
      `},e))},Il=i(35944),Sl=()=>{const{appState:{showCommands:e},setAppState:t}=Zn(),{tm:i}=ee(),s=(Object.values(jl),Object.values(yl)),r=Object.values(kl),o=Object.values(bl);if(!e)return null;const n=({icon:e,title:t,shortcuts:s})=>(0,Il.jsxs)(oe,{gap:8,justify:"space-between",css:Qn.css`
          padding: 6px 2px;
        `,children:[(0,Il.jsxs)(oe,{gap:10,children:[(0,Il.jsx)(e,{}),(0,Il.jsx)("div",{css:Qn.css`
              font-weight: 400;
              font-size: 14px;
              color: ${i("sys/Light/Text/primary")};
            `,children:t})]}),(0,Il.jsx)(oe,{children:s.map(((e,t)=>(0,Il.jsx)("div",{css:Qn.css`
                  height: 24px;
                  padding: 0px 9px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: ${i("sys/Light/Fill/01")};
                  border-radius: 3px;

                  font-weight: 400;
                  font-size: 12px;
                  color: ${i("sys/Light/Text/secondary")};
                `,children:e},t)))})]});return(0,Il.jsxs)("div",{css:Qn.css`
        position: fixed;
        z-index: 99;
        right: 16px;
        bottom: 16px;
        width: 320px;
        height: calc(100vh - 155px);
        overflow: scroll;
        padding: 12px 16px;
        background-color: ${i("sys/Light/Layer/01")};
        box-shadow: ${i("sys/Light/Shadow/down-01")};
        border: 1px solid ${i("sys/Light/Fill/01")};
        border-radius: 8px;
      `,children:[(0,Il.jsxs)(oe,{justify:"space-between",children:[(0,Il.jsx)("div",{css:Qn.css`
            font-size: 16px;
            font-weight: bold;
            color: ${i("sys/Light/Text/primary")};
          `,children:"\u5feb\u6377\u6307\u4ee4"}),(0,Il.jsx)(Qo,{onClick:()=>{t({showCommands:!1})},children:(0,Il.jsx)(Ro.IconClose,{})})]}),(0,Il.jsx)("div",{css:Qn.css`
          font-weight: 500;
          font-size: 14px;
          color: ${i("sys/Light/Text/primary")};
          margin-top: 20px;
          margin-bottom: 6px;
        `,children:"\u952e\u76d8\u5feb\u6377\u952e"}),s.map(((e,t)=>(0,Il.jsx)("div",{children:n(e)},t))),(0,Il.jsx)(Fl,{margin:8}),r.map(((e,t)=>(0,Il.jsx)("div",{children:n(e)},t))),(0,Il.jsx)("div",{css:Qn.css`
          font-weight: 500;
          font-size: 14px;
          color: ${i("sys/Light/Text/primary")};
          margin-top: 20px;
          margin-bottom: 6px;
        `,children:"Markdown \u8bed\u6cd5"}),o.map(((e,t)=>(0,Il.jsx)("div",{children:n(e)},t)))]})},Bl=i(67294),$l=i(35944),Al=(0,Bl.forwardRef)(((e,t)=>(0,$l.jsx)("div",u({ref:t,onMouseDown:e=>{e.preventDefault(),e.stopPropagation()}},e)))),El=i(35944),Ml=()=>{var e;const{tm:t}=ee(),{appState:{editorProps:{scrollWrapper:i}}}=he(),s=Zn(),{appState:{showWechatModal:r}}=s,o=he(),{appState:{editorInstance:n,editorProps:l}}=o,a=S&&"true"===(null==(e=localStorage.getItem("DEBUG_MODE"))?void 0:e.toLowerCase()),c=[{icon:(0,El.jsx)(Ro.IconWarn,{css:Wn.css`
            path {
              color: red;
            }
          `}),title:"\u6253\u5370\u8282\u70b9\u4fe1\u606f",onClick:()=>{console.log(null==n?void 0:n.children)}},{icon:(0,El.jsx)(Ro.IconWarn,{css:Wn.css`
            path {
              color: red;
            }
          `}),title:"\u6253\u5370\u8282\u70b9\u4fe1\u606f\u5b57\u7b26\u4e32",onClick:()=>{console.log(JSON.stringify(null==n?void 0:n.children))}},{icon:(0,El.jsx)(Ro.IconWarn,{css:Wn.css`
            path {
              color: red;
            }
          `}),title:(l.showNodes?"\u5173\u95ed":"\u6253\u5f00")+"\u8282\u70b9\u663e\u793a",onClick:()=>{o.setAppState({editorProps:m(u({},l),{showNodes:!l.showNodes})})}},{icon:(0,El.jsx)(Ro.IconWarn,{css:Wn.css`
            path {
              color: red;
            }
          `}),title:"\u6253\u5370editorProps",onClick:()=>{console.log(l)}},{icon:(0,El.jsx)(Ro.IconWarn,{css:Wn.css`
            path {
              color: red;
            }
          `}),title:"\u6e05\u7a7a\u7f13\u5b58",onClick:()=>{localStorage.clear(),location.reload()}}],d=[...a?c:[],{icon:(0,El.jsx)(Ro.IconChevronUp,{css:Wn.css`
            path {
              stroke-width: 1 !important;
            }
          `}),title:"\u56de\u5230\u9876\u90e8",onClick:()=>{(i||window).scrollTo(0,0)}},{icon:(0,El.jsx)(Ro.IconBulb,{}),title:"\u65b0\u624b\u5f15\u5bfc",onClick:()=>{s.setAppState({showGuide:!0})}},{icon:(0,El.jsx)(Ro.IconKeyboard,{}),title:"\u5feb\u6377\u6307\u4ee4",onClick:()=>{s.setAppState({showCommands:!0})}},{icon:(0,El.jsx)(Ro.IconInfo,{}),title:"\u95ee\u9898\u53cd\u9988",right:(0,El.jsx)(Ro.IconOpenBlank,{css:Wn.css`
            font-size: 11px;
          `}),onClick:()=>{window.open("https://leetcode.feishu.cn/share/base/form/shrcnF1nXJFwCPHX4WERUzybo1c")}}];return(0,El.jsxs)(El.Fragment,{children:[(0,El.jsx)(on,{placement:"left-end",render:e=>(0,El.jsx)(Al,{children:(0,El.jsx)(Pn,{children:d.map((({icon:i,title:s,onClick:r,right:o},n)=>(0,El.jsx)(Vn,{css:Wn.css`
                      cursor: pointer;
                    `,onClick:()=>{null==e||e.hide(),r()},children:(0,El.jsxs)(oe,{css:Wn.css`
                        width: 100%;
                      `,justify:"space-between",children:[(0,El.jsxs)(oe,{gap:10,children:[(0,El.jsx)("div",{css:Wn.css`
                            width: 13px;
                            height: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                          `,children:i}),(0,El.jsx)("div",{css:Wn.css`
                            font-weight: 400;
                            font-size: 14px;
                            color: ${t("sys/Light/Text/primary")};
                          `,children:s})]}),o]})},n)))})}),children:(0,El.jsx)(Ln,{css:Wn.css`
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: ${t("sys/Light/Layer/01")};
            box-shadow: ${t("sys/Light/Shadow/down-01")};
            border: 1px solid ${t("sys/Light/Fill/01")};

            cursor: pointer;
            transition: all 0.2s;
            ${D} {
              opacity: 0.8;
            }
          `,children:(0,El.jsx)(Ro.IconQuestion,{width:16,height:16})})}),(0,El.jsx)(Un,{}),(0,El.jsx)(Sl,{}),(0,El.jsx)(ve,{visible:r,onHide:()=>{s.setAppState({showWechatModal:!1})},children:(0,El.jsxs)(qn,{css:Wn.css`
            width: 400px;
            padding: 20px;
            box-sizing: border-box;
          `,children:[(0,El.jsxs)(oe,{justify:"space-between",children:[(0,El.jsx)("div",{css:Wn.css`
                font-size: 18px;
                font-weight: bold;
                color: ${t("sys/Light/Text/primary")};
              `,children:"\u95ee\u9898\u53cd\u9988"}),(0,El.jsx)(Qo,{onClick:()=>{s.setAppState({showWechatModal:!1})},children:(0,El.jsx)(Ro.IconClose,{})})]}),(0,El.jsx)("div",{css:Wn.css`
              margin-top: 15px;
              font-size: 14px;
              color: ${t("sys/Light/Text/tertiary")};
            `,children:"\u65b0\u7248\u7f16\u8f91\u5668\u5c1a\u5728\u7070\u5ea6\u5185\u6d4b\u4e2d\uff0c\u82e5\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u53ef\u76f4\u63a5\u626b\u7801\u8054\u7cfb\u6211\u4eec\u8fdb\u884c\u53cd\u9988\uff0c\u6211\u4eec\u5c06\u5c3d\u5feb\u7b54\u7591\u548c\u89e3\u51b3\uff0c\u4fdd\u969c\u60a8\u7684\u7528\u6237\u4f53\u9a8c\u3002"}),(0,El.jsx)("img",{css:Wn.css`
              width: 361px;
              height: 344px;
              margin-top: 20px;
            `,src:"https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/20231215-180540.jpeg"})]})})]})},Dl=i(67294),Rl=i(77493),Hl=i(96391),Tl=i(57645),Pl=i(70917),Ol=i(96391),zl=i(70917),Nl=i(70917),Vl=i(96391),Wl=i(70917),Zl=i(67294),Gl=i(35944),Kl=(0,Zl.forwardRef)(((e,t)=>{const{tm:i}=ee();return(0,Gl.jsx)("div",u({ref:t,css:Wl.css`
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0px 4px;
          gap: 4px;
          height: 24px;

          border-radius: 4px;
          cursor: pointer;

          background-color: ${e.active?i("sys/Light/Fill/02"):"transparent"};
          transition: all 0.2s;

          ${D} {
            background-color: ${i("sys/Light/Fill/02")};
          }
        `},e))})),ql=i(70917),_l=i(35944),Jl=e=>{const{tm:t}=ee();return(0,_l.jsx)("div",u({css:ql.css`
        display: flex;
        align-items: center;
        padding: 4px;
        background-color: ${t("sys/Light/Layer/01")};
        box-shadow: ${t("sys/Light/Shadow/down-01")};
        border: 1px solid ${t("sys/Light/Fill/01")};
        border-radius: 5px;
        gap: ${void 0===e.gap?4:e.gap}px;
      `},e))},Ul=i(70917),Ql=i(96391),Yl=i(70917),Xl=i(96391),ea=i(35944),ta=({width:e,title:t,element:i,objectFit:s})=>{const r=(0,Xl.useSlate)(),{slateId:o,objectFit:n="cover"}=i,l=n===s,{tm:a}=ee();return(0,ea.jsxs)(qn,{css:l?Yl.css`
              font-weight: 500;
              font-size: 14px;
              color: ${a("sys/Light/Text/primary")};
            `:Yl.css`
              font-weight: 400;
              font-size: 14px;
              color: ${a("sys/Light/Text/secondary")};
            `,children:[(0,ea.jsx)(Ln,{css:Yl.css`
          width: 72px;
          height: 48px;
          border: 1px solid
            ${a(l?"sys/Light/System/primary":"sys/Light/Fill/03")};
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.2s;
          ${D} {
            border: 1px solid ${a("sys/Light/System/primary")};
          }
        `,onClick:()=>{r.setNodes({objectFit:s},{match:(e,t)=>!!o&&e.slateId===o,at:[]})},children:(0,ea.jsx)("div",{css:Yl.css`
            width: ${e}px;
            height: 40px;
            background-color: rgba(0, 122, 255, 0.2);
            border-radius: 3px;
          `})}),(0,ea.jsx)("center",{children:t})]})},ia=()=>{const{appState:{editorProps:{onUploadFile:e}}}=he(),{toast:t}=an();return{uploadFile:({accept:i="*/*"})=>new Promise((s=>{const r=document.createElement("input");r.type="file",r.multiple=!1,r.accept=i,r.hidden=!0,r.onchange=o=>k(void 0,null,(function*(){var n,l,a,c,d,h;const p=o.target.files,g=null==p?void 0:p[0];if(g&&e)try{null==(n=null==t?void 0:t.loading)||n.call(t,"\u4e0a\u4f20\u4e2d");const r=yield e(g,i);null==(l=null==t?void 0:t.dismiss)||l.call(t),r?(s(r),null==(a=null==t?void 0:t.success)||a.call(t,"\u4e0a\u4f20\u6210\u529f")):(s(""),null==(c=null==t?void 0:t.error)||c.call(t,"\u4e0a\u4f20\u5931\u8d25"))}catch(x){!z&&console.error(x),s(""),null==(d=null==t?void 0:t.error)||d.call(t,"\u4e0a\u4f20\u5931\u8d25")}else s(""),null==(h=null==t?void 0:t.error)||h.call(t,"\u4e0a\u4f20\u5931\u8d25");document.body.removeChild(r)})),r.onclick=e=>{e.target.value||document.body.removeChild(r)},document.body.appendChild(r),r.click()})),uploadFiles:({accept:i="*/*",maxSize:s=15})=>new Promise((r=>{const o=document.createElement("input");o.type="file",o.multiple=!0,o.accept=i,o.hidden=!0,o.onchange=n=>k(void 0,null,(function*(){var l,a,c,d,h,p,g;const x=n.target.files;if(x&&x.length>0&&e)if(x.length>s)null==(l=null==t?void 0:t.error)||l.call(t,`\u9009\u62e9\u7684\u6587\u4ef6\u6570\u91cf\u4e0d\u5f97\u8d85\u8fc7${s}`),r([]);else try{null==(a=null==t?void 0:t.loading)||a.call(t,"\u4e0a\u4f20\u4e2d");const s=yield Promise.all(Array.from(x).map((t=>e(t,i))));null==(c=null==t?void 0:t.dismiss)||c.call(t),s.length===x.length?(r(s),null==(d=null==t?void 0:t.success)||d.call(t,"\u4e0a\u4f20\u6210\u529f")):(r([]),null==(h=null==t?void 0:t.error)||h.call(t,"\u4e0a\u4f20\u5931\u8d25"))}catch(u){!z&&console.error(u),r([]),null==(p=null==t?void 0:t.error)||p.call(t,"\u4e0a\u4f20\u5931\u8d25")}else r([]),null==(g=null==t?void 0:t.error)||g.call(t,"\u4e0a\u4f20\u5931\u8d25");document.body.removeChild(o)})),o.onclick=e=>{e.target.value||document.body.removeChild(o)},document.body.appendChild(o),o.click()}))}},sa=i(67294),ra=(e,t)=>{const i=Array.from(e.nodes({match:e=>!!t&&e.slateId===t,at:[]})),[s,r]=(null==i?void 0:i[0])||[];return r},oa=(e,t)=>{if(t){const i=ra(e,t);e.select(i)}},na=(i(77493),i(77493)),la=i(77493),aa=(e,t)=>{const{selection:i}=e;if(!i)return!1;const[s]=Array.from(la.Editor.nodes(e,{at:la.Editor.unhangRange(e,i),match:e=>!la.Editor.isEditor(e)&&la.Element.isElement(e)&&e.type===t}));return!!s},ca=i(77493),da=i(77493),ha=(e,t)=>{const[i]=da.Editor.nodes(e,{match:e=>!0===e[t],mode:"all"});return!!i},pa=i(77493),ga=(i(77493),(e,t,i)=>{e.setNodes(i,{match:e=>!!t&&e.slateId===t,at:[]})}),xa=ha,ua=aa,ma=(e,t)=>{const i=ha(e,t);e.setNodes({[t]:!i||null},{match:pa.Text.isText,split:!0})},fa=(e,t)=>{const i=aa(e,t);e.unwrapNodes({match:e=>!ca.Editor.isEditor(e)&&ca.Element.isElement(e)&&e.type in b,split:!0});const s=t in b;e.setNodes({type:i?"Paragraph":s?"ListItem":t}),!i&&s&&e.wrapNodes({type:t,children:[]})},wa=(e,t)=>{const{selection:i}=e;i&&na.Range.isCollapsed(i)?e.insertNodes(t):(e.wrapNodes(t,{split:!0}),e.collapse({edge:"end"}))},va=ra,ya=oa,ka=(e,t)=>{t&&(oa(e,t),e.delete(),e.move())},ja=i(35944),ba=[{type:"left",icon:Ro.IconAlignLeft,title:"\u5de6\u5bf9\u9f50"},{type:"center",icon:Ro.IconAlignCenter,title:"\u5c45\u4e2d\u5bf9\u9f50"},{type:"right",icon:Ro.IconAlignRight,title:"\u53f3\u5bf9\u9f50"}],La=({element:e})=>{const t=(0,Ql.useSlate)(),i=ke(),{uploadFiles:s}=ia(),{images:r,fullwidth:o,slateId:n}=e,[l,a]=(0,sa.useState)(r),{tm:c}=ee();return(0,ja.jsxs)(Jl,{children:[(0,ja.jsx)(ln,{content:"\u66ff\u6362\u56fe\u7247",children:(0,ja.jsx)(Qo,{onClick:i.show,children:(0,ja.jsx)(Ro.IconSpin,{})})}),(0,ja.jsx)(on,{placement:"bottom",render:()=>(0,ja.jsxs)(oe,{justify:"space-between",gap:8,css:Ul.css`
              padding: 8px;
              background-color: ${c("sys/Light/Layer/01")};
              box-shadow: ${c("sys/Light/Shadow/down-01")};
              border: 1px solid ${c("sys/Light/Fill/01")};
              border-radius: 5px;
            `,children:[(0,ja.jsx)(ta,{width:64,title:"\u94fa\u6ee1",objectFit:"cover",element:e}),(0,ja.jsx)(ta,{width:40,title:"\u7f29\u653e",objectFit:"contain",element:e})]}),children:(0,ja.jsx)(Qo,{children:(0,ja.jsx)(Ro.IconObjectFit,{})})}),(0,ja.jsx)(Ro.IconRowDivider,{width:1}),(0,ja.jsx)(on,{placement:"bottom-start",render:()=>(0,ja.jsx)(Pn,{children:ba.map(((i,s)=>{const{icon:r,title:o,type:l}=i,{align:a="left"}=e,c=a===l;return(0,ja.jsxs)(Vn,{onClick:()=>{ga(t,n,{align:l})},children:[(0,ja.jsx)("div",{css:Ul.css`
                      opacity: ${Number(c)};
                    `,children:(0,ja.jsx)(Ro.IconCheck,{})}),(0,ja.jsx)("div",{css:Ul.css`
                      margin-top: 3px;
                    `,children:(0,ja.jsx)(r,{})}),(0,ja.jsx)("div",{css:Ul.css`
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                    `,children:o})]},s)}))}),children:(0,ja.jsxs)(Kl,{children:[(0,ja.jsx)(Ro.IconAlignLeft,{}),(0,ja.jsx)(Ro.IconChevronDown,{})]})}),(0,ja.jsx)(Ro.IconRowDivider,{width:1}),o?(0,ja.jsxs)(Kl,{onClick:()=>{ga(t,n,{fullwidth:!1})},children:[(0,ja.jsx)(Ro.IconRestore,{}),(0,ja.jsx)("div",{css:Ul.css`
              font-weight: 500;
              font-size: 12px;
              color: ${c("sys/Light/Text/primary")};
            `,children:"\u9ed8\u8ba4\u5bbd\u5ea6"})]}):(0,ja.jsxs)(Kl,{onClick:()=>{ga(t,n,{fullwidth:!0})},children:[(0,ja.jsx)(Ro.IconFullscreen,{}),(0,ja.jsx)("div",{css:Ul.css`
            font-weight: 500;
            font-size: 12px;
            color: ${c("sys/Light/Text/primary")};
          `,children:"\u5168\u5bbd"})]}),(0,ja.jsx)(ve,{visible:i.visible,onHide:i.hide,children:(0,ja.jsxs)("div",{css:Ul.css`
            width: 720px;
            color: ${c("sys/Light/Text/primary")};
            font-weight: 400;
            font-size: 14px;
          `,children:[(0,ja.jsxs)(oe,{css:Ul.css`
              padding: 20px 24px;
              font-weight: 500;
              font-size: 16px;
            `,justify:"space-between",children:[(0,ja.jsx)("div",{children:"\u66ff\u6362\u56fe\u7247"}),(0,ja.jsx)(Qo,{onClick:()=>{a(r),i.hide()},children:(0,ja.jsx)(Ro.IconClose,{})})]}),(0,ja.jsx)(Fl,{}),(0,ja.jsxs)("div",{css:Ul.css`
              padding: 30px 24px;
            `,children:[(0,ja.jsxs)("div",{css:Ul.css`
                color: ${c("sys/Light/Text/secondary")};
              `,children:["\u6700\u591a\u6dfb\u52a0 ",15," \u5f20\u56fe\u7247\u3002"]}),(0,ja.jsxs)("div",{css:Ul.css`
                margin-top: 16px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-gap: 16px;
              `,children:[l.map(((e,t)=>(0,ja.jsxs)("div",{css:Ul.css`
                      width: 156px;
                      height: 156px;
                      border-radius: 5px;
                      overflow: hidden;
                      position: relative;
                      cursor: pointer;
                      transition: all 0.2s;
                      ${D} {
                        .removeImage {
                          opacity: 1;

                          ${D} {
                            opacity: 0.8;
                          }
                        }
                      }
                    `,children:[(0,ja.jsx)("img",{src:e,css:Ul.css`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                      `}),(0,ja.jsx)(Ln,{css:Ul.css`
                        position: absolute;
                        left: 4px;
                        top: 4px;
                        width: 20px;
                        height: 20px;
                        background-color: ${c("sys/Light/Layer/02")};
                        border-radius: 3px;

                        font-weight: 500;
                        font-size: 12px;
                      `,children:t+1}),(0,ja.jsx)("div",{className:"removeImage",css:Ul.css`
                        position: absolute;
                        right: 4px;
                        top: 4px;
                        opacity: 0;
                      `,onClick:()=>{a(l.filter(((e,i)=>i!==t)))},children:(0,ja.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ja.jsxs)("g",{opacity:"0.8",children:[(0,ja.jsx)("rect",{width:"20",height:"20",rx:"10",fill:"#525252"}),(0,ja.jsx)("path",{d:"M13.5 6.5L6.5 13.5M13.5 13.5L6.5 6.5",stroke:"white",strokeWidth:"1.33",strokeLinecap:"round"})]})})})]},t))),l.length<15&&(0,ja.jsx)(Ln,{css:Ul.css`
                    width: 156px;
                    height: 156px;
                    border-radius: 5px;
                    overflow: hidden;
                    cursor: pointer;
                    background-color: ${c("sys/Light/Fill/02")};
                    transition: all 0.2s;
                    ${D} {
                      opacity: 0.8;
                    }
                  `,onClick:()=>k(void 0,null,(function*(){var e;const t=yield s({accept:"image/*",maxSize:15});t.length>0&&a(null==(e=[...l,...t])?void 0:e.slice(0,15))})),children:(0,ja.jsx)(Ro.IconAdd,{width:24,height:24})})]})]}),(0,ja.jsx)(Fl,{}),(0,ja.jsxs)(oe,{gap:8,justify:"flex-end",css:Ul.css`
              padding: 16px 24px;
            `,children:[(0,ja.jsx)(se,{onClick:()=>{a(r),i.hide()},light:!0,children:"\u53d6\u6d88"}),(0,ja.jsx)(se,{onClick:()=>{ga(t,n,{images:l}),i.hide()},children:"\u786e\u5b9a"})]})]})})]})},Ca=v(i(46066)),Fa=i(67294),Ia=v(i(96711)),Sa=i(35944),Ba=e=>{const{attributes:t,children:i}=e,s=e.element,{fullwidth:r}=s,{images:o,objectFit:n="cover",align:l="left",slateId:a}=s,{tm:c}=ee(),d=(0,Vl.useSlate)(),h=(0,Vl.useSelected)(),p=(0,Vl.useReadOnly)(),g=(0,Fa.useRef)(null),x=null==g?void 0:g.current,{pageState:{activeIndex:f,autoplay:w},setPageState:v}=Q({activeIndex:0,autoplay:!1}),{appState:{editorProps:{onPreviewImage:y}}}=he(),k=Ia.default.div`
    flex: 1;
    height: 4px;
    background-color: ${e=>e.active?c("sys/Light/Icon/primary"):c("sys/Light/Fill/02")};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    ${D} {
      background-color: ${c("sys/Light/Icon/primary")};
    }
  `;return(0,Sa.jsxs)(Sa.Fragment,{children:[(0,Sa.jsx)(Nl.Global,{styles:Nl.css`
          /* Slider */
          .slick-slider {
            position: relative;

            display: block;
            box-sizing: border-box;

            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
          }

          .slick-list {
            position: relative;

            display: block;
            overflow: hidden;

            margin: 0;
            padding: 0;
          }
          .slick-list:focus {
            outline: none;
          }
          .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
          }

          .slick-slider .slick-track,
          .slick-slider .slick-list {
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          .slick-track {
            position: relative;
            top: 0;
            left: 0;

            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .slick-track:before,
          .slick-track:after {
            display: table;

            content: "";
          }
          .slick-track:after {
            clear: both;
          }
          .slick-loading .slick-track {
            visibility: hidden;
          }

          .slick-slide {
            display: none;
            float: left;

            height: 100%;
            min-height: 1px;
          }
          [dir="rtl"] .slick-slide {
            float: right;
          }
          .slick-slide img {
            display: block;
          }
          .slick-slide.slick-loading img {
            display: none;
          }
          .slick-slide.dragging img {
            pointer-events: none;
          }
          .slick-initialized .slick-slide {
            display: block;
          }
          .slick-loading .slick-slide {
            visibility: hidden;
          }
          .slick-vertical .slick-slide {
            display: block;

            height: auto;

            border: 1px solid transparent;
          }
          .slick-arrow.slick-hidden {
            display: none;
          }

          .slick-arrow {
            display: none !important;
          }
        `}),(0,Sa.jsxs)("div",m(u({},t),{contentEditable:!1,css:Nl.css`
          display: flex;
          justify-content: ${P(l)};
        `,children:[(0,Sa.jsx)(on,{render:()=>(0,Sa.jsx)(La,{element:s}),children:(0,Sa.jsxs)("div",{css:Nl.css`
              width: ${r?"100%":R(480)};

              border-radius: 5px;
              overflow: hidden;
              background-color: ${c("sys/Light/Layer/01")};
              transition: all 0.2s;

              box-shadow: ${h&&!p?"0 0 0 2px #B4D5FF":`0 0 0 1px ${c("sys/Light/Gray/10")}`};
            `,children:[(0,Sa.jsx)(Ca.default,{ref:g,autoplay:w,autoplaySpeed:2e3,beforeChange:(e,t)=>{v({activeIndex:t})},children:o.map(((e,t)=>(0,Sa.jsx)("div",{children:(0,Sa.jsx)("img",{css:Nl.css`
                        transition: all 0.2s;
                        object-fit: ${n};
                        width: 100%;
                        aspect-ratio: 2;
                      `,src:e,title:"\u9f20\u6807\u653e\u7f6e\u4e8e\u56fe\u7247\u65f6\u5c06\u4f1a\u6682\u505c\u8f6e\u64ad",onClick:t=>{t.preventDefault(),p?y&&y(e):ya(d,a)}})},t)))}),(0,Sa.jsxs)("div",{css:Nl.css`
                padding: 12px 16px;
                font-size: 14px;
              `,children:[(0,Sa.jsx)(oe,{css:Nl.css`
                  margin-bottom: 10px;
                `,children:o.map(((e,t)=>(0,Sa.jsx)(k,{onClick:()=>{x.slickGoTo(t)},active:t===f},t)))}),(0,Sa.jsxs)(oe,{justify:"space-between",children:[(0,Sa.jsxs)(oe,{children:[(0,Sa.jsx)(ln,{content:"\u4e0a\u4e00\u5f20",children:(0,Sa.jsx)(Qo,{onClick:()=>{x.slickPrev()},children:(0,Sa.jsx)(Ro.IconChevronLeft,{})})}),(0,Sa.jsxs)("div",{children:[f+1," / ",o.length]}),(0,Sa.jsx)(ln,{content:"\u4e0b\u4e00\u5f20",children:(0,Sa.jsx)(Qo,{onClick:()=>{x.slickNext()},children:(0,Sa.jsx)(Ro.IconChevronRight,{})})})]}),(0,Sa.jsx)(oe,{children:w?(0,Sa.jsx)(ln,{content:"\u6682\u505c\u8f6e\u64ad",children:(0,Sa.jsx)(Qo,{onClick:()=>{x.slickPause(),v({autoplay:!1})},children:(0,Sa.jsx)(Ro.IconPause,{})})}):(0,Sa.jsx)(ln,{content:"\u81ea\u52a8\u8f6e\u64ad",children:(0,Sa.jsx)(Qo,{onClick:()=>{x.slickPlay(),v({autoplay:!0})},children:(0,Sa.jsx)(Ro.IconPlayFilled,{})})})})]})]})]})}),i]}))]})},$a=i(70917),Aa=i(96391),Ea=i(35944),Ma=e=>{const{attributes:t,children:i}=e,s=(0,Aa.useSelected)(),r=(0,Aa.useReadOnly)(),{tm:o}=ee();return(0,Ea.jsxs)("div",m(u({},t),{contentEditable:!1,css:$a.css`
        padding: 8px 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        transition: all 0.2s;

        ${!r&&$a.css`
          cursor: pointer;
          ${D} {
            background-color: ${o("sys/Light/Fill/02")};
          }

          ${s&&$a.css`
            box-shadow: 0 0 0 2px #b4d5ff;
            background-color: ${o("sys/Light/Fill/02")};
          `}
        `}
      `,children:[(0,Ea.jsx)("div",{css:$a.css`
          width: 100%;
          height: 1px;
          background-color: ${o("sys/Light/Fill/03")};
        `}),i]}))},Da=i(70917),Ra=i(96391),Ha=i(35944),Ta=e=>{const{attributes:t,children:i}=e,s=e.element,r=(0,Ra.useSlate)(),{tabs:o,slateId:n}=s,l=(0,Ra.useSelected)(),a=(0,Ra.useReadOnly)(),{tm:c}=ee(),{pageState:{activeIndex:d},setPageState:h,resetPageState:p}=Q({activeIndex:0}),{appState:{editorProps:{onCopyContent:g}}}=he(),x=null==o?void 0:o[d],{code:f=""}=x||{},w=e=>{if(e){if(e=e.toLowerCase(),be[e])return be[e];const t={golang:"go",python3:"python",clike:"c","c++":"cpp",md:"markdown",js:"javascript",ts:"typescript",py:"python","c#":"csharp",text:"plainText",vanillajs:"javascript",react:"javascript"};return t[e]?t[e]:"plainText"}return"plainText"},v=w(null==x?void 0:x.language),{toast:y}=an(),j=e=>"cpp"===e?"C++":"csharp"===e?"C#":"css"===e?"CSS":"html"===e?"HTML":"php"===e?"PHP":"tsx"===e?"TSX":"jsx"===e?"JSX":"xml"===e?"XML":"yaml"===e?"YAML":"plainText"===e?"PlainText":"typescript"===e?"TypeScript":"javascript"===e?"JavaScript":"json"===e?"JSON":"sql"===e?"SQL":((e="")=>e.charAt(0).toUpperCase()+(null==e?void 0:e.slice(1)))(e);return(0,Ha.jsxs)("div",m(u({},t),{contentEditable:!1,css:Da.css`
        box-shadow: ${l&&!a?"0 0 0 2px #B4D5FF":"none"};
        background-color: ${c("sys/Light/Fill/01")};
        border: 1px solid ${c("sys/Light/Fill/01")};
        border-radius: 5px;
        overflow: hidden;
        padding: 12px;
        transition: all 0.2s;
      `,children:[(0,Ha.jsxs)(oe,{justify:"space-between",full:!0,children:[(0,Ha.jsxs)(oe,{css:Da.css`
          width: 100%;
          overflow: scroll;
        `,children:[o.map(((e,t)=>{const i=t===d,s=w(e.language);if(!i)return(0,Ha.jsx)(Ln,{gap:5,css:Da.css`
                  padding: 0 8px;
                  white-space: nowrap;
                  height: 24px;
                  font-size: 12px;
                  border-radius: 3px;

                  cursor: pointer;
                  transition: all 0.2s;
                  ${D} {
                    opacity: 0.8;
                    background-color: ${c("sys/Light/Fill/02")};
                  }
                `,onClick:()=>{h({activeIndex:t})},children:j(s)},t);const l=Object.values(be),g=[s,...l.filter((e=>e!==s))];return(0,Ha.jsxs)(oe,{gap:0,css:Da.css`
                border-radius: 3px;
              `,children:[(0,Ha.jsx)(on,{placement:"bottom-start",trigger:"click",render:e=>(0,Ha.jsx)(Pn,{css:Da.css`
                        height: 248px;
                        overflow: scroll;
                      `,children:g.map(((t,i)=>{const l=t===s;return(0,Ha.jsxs)(Vn,{css:Da.css`
                              padding: 6px;
                            `,onClick:()=>{ga(r,n,{tabs:o.map(((e,i)=>i===d?m(u({},e),{language:t}):e))}),null==e||e.hide()},children:[(0,Ha.jsx)("div",{css:Da.css`
                                opacity: ${Number(l)};
                              `,children:(0,Ha.jsx)(Ro.IconCheck,{})}),j(t)]},i)}))}),children:(0,Ha.jsxs)(Ln,{gap:5,css:Da.css`
                    padding: 0 8px;
                    height: 24px;
                    font-size: 12px;

                    white-space: nowrap;
                    border-radius: 3px;

                    cursor: pointer;
                    font-weight: bold;
                    background-color: ${c("sys/Light/Fill/02")};
                    transition: all 0.2s;
                    ${D} {
                      opacity: 0.8;
                    }

                    ${!a&&o.length>1&&Da.css`
                      border-radius: 3px 0 0 3px;
                    `}
                  `,children:[j(s),!a&&(0,Ha.jsx)(Ro.IconChevronDown,{css:Da.css`
                        path {
                          stroke-width: 1 !important;
                        }
                      `})]})}),!a&&o.length>1&&(0,Ha.jsx)(Ln,{css:Da.css`
                    border-left: 1px solid ${c("sys/Light/Layer/01")};
                    width: 24px;
                    height: 24px;
                    background-color: ${c("sys/Light/Fill/02")};
                    cursor: pointer;
                    border-radius: 0 3px 3px 0;
                    transition: all 0.2s;
                    ${D} {
                      opacity: 0.8;
                    }
                  `,onClick:()=>{ga(r,n,{tabs:o.filter(((e,i)=>i!==t))}),p()},children:(0,Ha.jsx)(Ro.IconClose,{width:12,height:12})})]},t)})),!a&&o.length<8&&(0,Ha.jsx)(Ln,{css:Da.css`
              height: 24px;
              padding: 0 6px;
              border-radius: 3px;
              cursor: pointer;
              transition: all 0.2s;
              ${D} {
                opacity: 0.8;
                background-color: ${c("sys/Light/Fill/02")};
              }
            `,onClick:()=>{ga(r,n,{tabs:[...o,{language:"plainText",code:""}]}),h({activeIndex:o.length})},children:(0,Ha.jsx)(Ro.IconAdd,{width:12,height:12})})]}),(0,Ha.jsx)(ln,{content:"\u590d\u5236\u4ee3\u7801",children:(0,Ha.jsx)(Qo,{onClick:()=>k(void 0,null,(function*(){var e;g?g(f):(yield T(f),(null==y?void 0:y.success)?null==(e=null==y?void 0:y.success)||e.call(y,"\u590d\u5236\u6210\u529f"):alert("\u590d\u5236\u6210\u529f"))})),children:(0,Ha.jsx)(Ro.IconCopy,{})})})]}),(0,Ha.jsx)(qo,{readOnly:a,placeholder:"\u8f93\u5165\u4ee3\u7801",value:f,language:v,padding:0,minHeight:100,css:Da.css`
          margin-top: 10px;
          font-weight: 400;
          font-size: 12px !important;
          line-height: 24px !important;
          background-color: transparent;
        `,onChange:e=>{const t=e.target.value;ga(r,n,{tabs:o.map(((e,i)=>i===d?m(u({},e),{code:t}):e))})}}),i]}))},Pa=i(35944),Oa=e=>{const{attributes:t,children:i}=e;return(0,Pa.jsx)("div",m(u({},t),{children:i}))},za=i(70917),Na=i(35944),Va=e=>{const{attributes:t,children:i}=e,{tm:s}=ee();return(0,Na.jsx)("blockquote",m(u({css:za.css`
        border-left: 3px solid ${s("sys/Light/Fill/03")};
        margin-left: 0;
        padding-left: 12px;
        padding-top: 3px;
        padding-bottom: 3px;
        margin-top: 1px;
        margin-bottom: 1px;
        color: ${s("sys/Light/Text/secondary")};
      `},t),{children:i}))},Wa=i(70917),Za=i(35944),Ga=e=>{const{attributes:t,children:i}=e,{tm:s}=ee();return(0,Za.jsx)("ul",m(u({css:Wa.css`
        & {
          padding-inline-start: 25px !important;
          li {
            padding-left: 8px !important;
            list-style: disc !important;

            &::marker {
              width: 6px;
              height: 6px;
              color: ${s("sys/Light/Icon/primary")};
            }
          }
        }
      `},t),{children:i}))},Ka=i(70917),qa=i(35944),_a=e=>{const{attributes:t,children:i}=e,{tm:s}=ee();return(0,qa.jsx)("ol",m(u({css:Ka.css`
        & {
          padding-inline-start: 25px !important;
          li {
            padding-left: 8px !important;

            list-style: decimal !important;

            &::marker {
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: ${s("sys/Light/Text/primary")};
            }
          }
        }
      `},t),{children:i}))},Ja=i(70917),Ua=i(96391),Qa=i(70917),Ya=v(i(8562)),Xa=i(67294),ec=i(35944),tc=({tex:e})=>{const t=(0,Xa.useRef)(null);return(0,Xa.useEffect)((()=>{(null==t?void 0:t.current)&&Ya.default.render(e,t.current,{throwOnError:!1})}),[t,e]),(0,ec.jsx)("span",{ref:t,css:Qa.css`
        font-size: 14;
        font-style: italic;
        opacity: 0.8;
        padding: 0 2px;
        &::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
      `})},ic=i(70917),sc=i(70917),rc=i(35944),oc=e=>{const{tm:t}=ee();return(0,rc.jsx)("textarea",u({ref:e.otherRef,css:sc.css`
        all: unset;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        box-sizing: border-box;
        width: 100%;
        background-color: ${t("sys/Light/Fill/02")};
        border-radius: 5px;
        font-weight: 400;
        font-size: 14px;
        color: ${t("sys/Light/Text/primary")};
        transition: all 0.2s;

        ${D} {
          opacity: 0.8;
        }

        border: 2px solid transparent;

        &:focus {
          background-color: ${t("sys/Light/Layer/01")};
          border-color: #ebebeb;
        }
      `},e))},nc=i(67294),lc=i(70917),ac=i(67294),cc=i(35944),dc=({titles:e,items:t})=>{const[i,s]=(0,ac.useState)(0),{tm:r}=ee();return(0,cc.jsxs)("div",{children:[(0,cc.jsx)(oe,{children:e.map(((e,t)=>{const o=t===i;return(0,cc.jsx)("div",{css:lc.css`
                margin-bottom: 10px;

                cursor: pointer;
                border-radius: 4px;
                padding: 5px 10px;
                ${D} {
                  background-color: ${r("sys/Light/Fill/02")};
                }
                transition: all 0.2s;
                ${o&&lc.css`
                  background-color: ${r("sys/Light/Fill/02")};
                  font-weight: 500;
                `}
              `,onClick:()=>{s(t)},children:e},t)}))}),t[i]]})},hc=i(96391),pc=i(67294),gc=[{title:"\u7279\u6b8a\u5b57\u7b26",list:["\\alpha","\\beta","\\gamma","\\delta","\\epsilon","\\varepsilon","\\zeta","\\eta","\\theta","\\vartheta","\\iota","\\kappa","\\lambda","\\mu","\\nu","\\xi","\\pi","\\varpi","\\rho","\\varrho","\\sigma","\\varsigma","\\tau","\\upsilon","\\phi","\\varphi","\\chi","\\psi","\\omega","\\Gamma","\\Delta","\\Theta","\\Lambda","\\Xi","\\Pi","\\Sigma","\\Upsilon","\\Phi","\\Psi","\\Omega"]},{title:"\u8fd0\u7b97\u7b26\u53f7",list:["\\times","\\div","\\cdot","\\pm","\\mp","\\ast","\\star","\\circ","\\bullet","\\oplus","\\ominus","\\oslash","\\otimes","\\odot","\\dagger","\\ddagger","\\vee","\\wedge","\\cap","\\cup","\\aleph","\\Re","\\Im","\\top","\\bot","\\infty","\\partial","\\forall","\\exists","\\neg","\\angle","\\triangle","\\diamond"]},{title:"\u5173\u7cfb\u7b26\u53f7",list:["\\leq","\\geq","\\prec","\\succ","\\preceq","\\succeq","\\ll","\\gg","\\equiv","\\sim","\\simeq","\\asymp","\\approx","\\ne","\\subset","\\supset","\\subseteq","\\supseteq","\\in","\\ni","\\notin"]},{title:"\u51fd\u6570\u7b26\u53f7",list:["x_{a}","x^{b}","x_{a}^{b}","\\bar{x}","\\tilde{x}","\\frac{a}{b}","\\sqrt{x}","\\sqrt[n]{x}","\\bigcap_{a}^{b}","\\bigcup_{a}^{b}","\\prod_{a}^{b}","\\coprod_{a}^{b}","\\left(x\\right)","\\left[x\\right]","\\left\\{x\\right\\}","\\left|x\\right|","\\int_{a}^{b}","\\oint_{a}^{b}","\\sum_{a}^{b}{x}","\\lim_{a\\rightarrow b}{x}","\\left[ \\begin{matrix}0 & 1 \\\\1 & 0 \\\\\\end{matrix} \\right]"]},{title:"\u7bad\u5934\u7b26\u53f7",list:["\\leftarrow","\\rightarrow","\\leftrightarrow","\\Leftarrow","\\Rightarrow","\\Leftrightarrow","\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow"]},{title:"\u6570\u5b66\u516c\u5f0f",list:["\\sin(x)","\\cos(x)","\\tan(x)","\\log(x)","\\ln(x)","\\sqrt{x}","\\sum_{i=0}^n x_i","\\int_a^b x^2 dx","\\frac{1}{x}","\\binom{n}{k}","\\sqrt[n]{x}","\\left(\\frac{1}{x}\\right)","\\left\\{\\begin{matrix}x&\\text{if }x>0\\\\0&\\text{otherwise}\\end{matrix}\\right."]}],xc=i(35944),uc=({element:e,visible:t,onHide:i})=>{const s=(0,hc.useSlate)(),{slateId:r,tex:o}=e,{tm:n}=ee(),l=(0,pc.useRef)(null),[a,c]=(0,nc.useState)(o);return(0,xc.jsx)(ve,{visible:t,onHide:i,children:(0,xc.jsxs)("div",{css:ic.css`
          padding: 20px;
          display: flex;
          flex-direction: column;

          width: 720px;

          color: ${n("sys/Light/Text/primary")};
          font-weight: 400;
          font-size: 14px;
        `,children:[(0,xc.jsx)(oe,{justify:"space-between",children:(0,xc.jsx)("div",{css:ic.css`
              font-weight: 500;
              font-size: 16px;
            `,children:"\u9009\u62e9\u516c\u5f0f"})}),(0,xc.jsx)("div",{css:ic.css`
            margin-top: 16px;
            color: ${n("sys/Light/Text/secondary")};
          `,children:(0,xc.jsx)(dc,{titles:gc.map((e=>e.title)),items:gc.map((e=>(e=>{const{list:t}=e;return(0,xc.jsx)("div",{css:ic.css`
          display: flex;
          flex-wrap: wrap;
        `,children:t.map(((e,t)=>(0,xc.jsx)("div",{css:ic.css`
                padding: 10px;
                margin: 5px;

                display: flex;
                justify-content: center;
                align-items: center;
                vertical-align: bottom;

                border: 1px solid ${n("sys/Light/Fill/02")};
                border-radius: 4px;

                cursor: pointer;
                transition: all 0.2s;
                ${D} {
                  background-color: ${n("sys/Light/Fill/02")};
                }
              `,onClick:t=>{t.preventDefault();const i=null==l?void 0:l.current;if(i){const t=i.selectionStart,s=a.split(""),r=" "+e+" ";s.splice(t,0,r),c(s.join(""));const o=t+r.length;i.focus(),i.setSelectionRange(o,o)}else c(a+" "+e)},children:(0,xc.jsx)("div",{css:ic.css`
                  & * {
                    padding: 0;
                    margin: 0;
                    line-height: 0;
                    font-size: 23px;
                  }
                `,children:(0,xc.jsx)(tc,{tex:e})})},t)))})})(e)))})}),(0,xc.jsx)(oc,{otherRef:l,autoFocus:!0,css:ic.css`
            margin-top: 16px;
          `,placeholder:"\u8bf7\u5728\u6b64\u7f16\u8f91\u516c\u5f0f",value:a,onChange:e=>{c(e.target.value)}}),!!a&&(0,xc.jsx)("div",{css:ic.css`
              margin-top: 16px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 16px 12px;
              gap: 10px;
              width: 100%;

              box-sizing: border-box;
              overflow: scroll;
              border-radius: 4px;
              background-color: ${n("sys/Light/Fill/01")};
              flex-wrap: wrap;
              word-break: break-all;
              cursor: not-allowed;
            `,children:(0,xc.jsx)(tc,{tex:a})}),(0,xc.jsxs)(oe,{justify:"space-between",css:ic.css`
            margin-top: 16px;
          `,children:[(0,xc.jsx)(se,{light:!0,onClick:()=>{c(o),i()},children:"\u53d6\u6d88"}),(0,xc.jsx)(se,{disabled:!a,onClick:()=>{ga(s,r,{tex:a}),i()},children:"\u4fdd\u5b58"})]})]})})},mc=i(67294),fc=i(35944),wc=e=>{var t,i;const{attributes:s,children:r}=e,o=e.element,{slateId:n,tex:l}=o,{pageState:{editModalVisible:a},setPageState:c}=Q({editModalVisible:!1}),d=(0,Ua.useSelected)(),h=(0,Ua.useReadOnly)(),p=(0,Ua.useSlate)(),{tm:g}=ee(),x=(0,mc.useRef)(null),f=(null==(t=x.current)?void 0:t.scrollWidth)>(null==(i=x.current)?void 0:i.clientWidth);return(0,fc.jsxs)(fc.Fragment,{children:[(0,fc.jsx)(on,{disabled:h,render:()=>(0,fc.jsx)(Jl,{gap:0,children:(0,fc.jsx)(Qo,{onClick:e=>{h||(e.preventDefault(),ya(p,n),c({editModalVisible:!0}))},children:(0,fc.jsx)(Ro.IconEdit,{})})}),children:(0,fc.jsxs)("div",m(u({},s),{contentEditable:!1,ref:x,onClick:e=>{h||(e.preventDefault(),ya(p,n))},css:Ja.css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: ${f?"flex-start":"center"};
            padding: 16px 12px;
            gap: 10px;
            width: 100%;
            overflow: scroll;
            &::-webkit-scrollbar {
              display: none !important;
              width: 0 !important;
              height: 0 !important;
            }
            border-radius: 5px;
            background-color: ${g("sys/Light/Fill/01")};
            transition: all 0.2s;

            ${!h&&Ja.css`
              cursor: pointer;
              box-shadow: ${d?"0 0 0 2px #B4D5FF":"none"};
              ${D} {
                background-color: ${g("sys/Light/Fill/02")};
              }
            `}
          `,children:[(0,fc.jsx)(tc,{tex:l}),r]}))}),(0,fc.jsx)(uc,{visible:a,element:o,onHide:()=>{c({editModalVisible:!1})}})]})},vc=i(70917),yc=i(96391),kc=i(70917),jc=i(96391),bc=Y({activeRow:void 0,activeCol:void 0,elementId:""}),Lc=i(35944),Cc=[{type:"left",icon:Ro.IconAlignLeft2,title:"\u5de6\u5bf9\u9f50"},{type:"center",icon:Ro.IconAlignCenter2,title:"\u5c45\u4e2d\u5bf9\u9f50"},{type:"right",icon:Ro.IconAlignRight2,title:"\u53f3\u5bf9\u9f50"}],Fc=({element:e,tp:t})=>{const i=(0,jc.useSlate)(),{content:s,slateId:r}=e,o=Math.max(...s.map((e=>e.length))),{appState:{activeCol:n=0},resetAppState:l}=bc();return(0,Lc.jsxs)(Jl,{children:[(0,Lc.jsx)(on,{placement:"bottom-start",render:()=>(0,Lc.jsxs)(Pn,{children:[(0,Lc.jsxs)(Vn,{onClick:()=>{ga(i,r,{content:s.map((e=>[...null==e?void 0:e.slice(0,n),{},...null==e?void 0:e.slice(n)]))}),l()},children:[(0,Lc.jsx)("div",{css:kc.css`
                  margin-top: 3px;
                `,children:(0,Lc.jsx)(Ro.IconArrowLeft,{})}),(0,Lc.jsx)("div",{css:kc.css`
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                `,children:"\u5de6\u4fa7\u63d2\u5165\u5217"})]}),(0,Lc.jsxs)(Vn,{onClick:()=>{ga(i,r,{content:s.map((e=>[...null==e?void 0:e.slice(0,n+1),{},...null==e?void 0:e.slice(n+1)]))}),l()},children:[(0,Lc.jsx)("div",{css:kc.css`
                  margin-top: 3px;
                `,children:(0,Lc.jsx)(Ro.IconArrowRight,{})}),(0,Lc.jsx)("div",{css:kc.css`
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                `,children:"\u53f3\u4fa7\u63d2\u5165\u5217"})]})]}),children:(0,Lc.jsx)(Qo,{children:(0,Lc.jsx)(Ro.IconAddCircle,{})})}),(0,Lc.jsx)(Ro.IconRowDivider,{width:1}),(0,Lc.jsx)(on,{placement:"bottom-start",render:()=>(0,Lc.jsx)(Pn,{children:Cc.map(((e,t)=>{const{icon:o,title:l,type:a}=e,c=s.map((e=>{var t;return null==(t=e[n])?void 0:t.align})).every(((e="left")=>e===a));return(0,Lc.jsxs)(Vn,{onClick:()=>{const e=s.map((e=>e.map(((e,t)=>m(u({},e),{align:t===n?a:e.align})))));ga(i,r,{content:e})},children:[(0,Lc.jsx)("div",{css:kc.css`
                      opacity: ${Number(c)};
                    `,children:(0,Lc.jsx)(Ro.IconCheck,{})}),(0,Lc.jsx)("div",{css:kc.css`
                      margin-top: 3px;
                    `,children:(0,Lc.jsx)(o,{})}),(0,Lc.jsx)("div",{css:kc.css`
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                    `,children:l})]},t)}))}),children:(0,Lc.jsxs)(Kl,{children:[(0,Lc.jsx)(Ro.IconAlignLeft2,{}),(0,Lc.jsx)(Ro.IconChevronDown,{})]})}),o>1&&(0,Lc.jsxs)(Lc.Fragment,{children:[(0,Lc.jsx)(Ro.IconRowDivider,{width:1}),(0,Lc.jsx)(ln,{content:"\u5220\u9664\u5217",children:(0,Lc.jsx)(Qo,{onClick:()=>{ga(i,r,{content:s.map(((e,t)=>s[t].filter(((e,t)=>t!==n))))}),l()},children:(0,Lc.jsx)(Ro.IconDelete,{})})})]})]})},Ic=i(70917),Sc=i(96391),Bc=i(35944),$c=({element:e,tp:t})=>{const i=(0,Sc.useSlate)(),{content:s,slateId:r}=e,o=s.length,n=Math.max(...s.map((e=>e.length))),{appState:{activeRow:l=0},setAppState:a,resetAppState:c}=bc();return(0,Bc.jsxs)(Jl,{children:[(0,Bc.jsx)(on,{placement:"bottom-start",render:()=>(0,Bc.jsxs)(Pn,{children:[(0,Bc.jsxs)(Vn,{onClick:()=>{ga(i,r,{content:[...null==s?void 0:s.slice(0,l),Array.from(Array(n)).map(((e,t)=>{var i,r;return{text:"",align:(null==(r=null==(i=null==s?void 0:s[0])?void 0:i[t])?void 0:r.align)||"left"}})),...null==s?void 0:s.slice(l)]}),c()},children:[(0,Bc.jsx)("div",{css:Ic.css`
                  margin-top: 3px;
                `,children:(0,Bc.jsx)(Ro.IconArrowUp,{})}),(0,Bc.jsx)("div",{css:Ic.css`
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                `,children:"\u4e0a\u65b9\u63d2\u5165\u884c"})]}),(0,Bc.jsxs)(Vn,{onClick:()=>{ga(i,r,{content:[...null==s?void 0:s.slice(0,l+1),Array.from(Array(n)).map(((e,t)=>{var i,r;return{text:"",align:(null==(r=null==(i=null==s?void 0:s[0])?void 0:i[t])?void 0:r.align)||"left"}})),...null==s?void 0:s.slice(l+1)]}),c()},children:[(0,Bc.jsx)("div",{css:Ic.css`
                  margin-top: 3px;
                `,children:(0,Bc.jsx)(Ro.IconArrowDown,{})}),(0,Bc.jsx)("div",{css:Ic.css`
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 20px;
                `,children:"\u4e0b\u65b9\u63d2\u5165\u884c"})]})]}),children:(0,Bc.jsx)(Qo,{children:(0,Bc.jsx)(Ro.IconAddCircle,{})})}),o>1&&(0,Bc.jsxs)(Bc.Fragment,{children:[(0,Bc.jsx)(Ro.IconRowDivider,{width:1}),(0,Bc.jsx)(ln,{content:"\u5220\u9664\u884c",children:(0,Bc.jsx)(Qo,{onClick:()=>{ga(i,r,{content:s.filter(((e,t)=>t!==l))}),c()},children:(0,Bc.jsx)(Ro.IconDelete,{})})})]})]})},Ac=i(67294),Ec=i(67294),Mc=i(70917),Dc=i(67294),Rc=i(96391),Hc=i(35944),Tc=e=>{var t;const{text:i="",align:s="left"}=e,r=(0,Rc.useReadOnly)(),o=(0,Dc.useRef)(null),{tm:n}=ee();return(0,Dc.useEffect)((()=>{if(o.current){(null==o?void 0:o.current).value=i}}),[o,i]),(0,Hc.jsx)("textarea",u({ref:o,disabled:r,rows:1,css:Mc.css`
        all: unset;
        width: 100%;
        padding: 0px 12px;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 14px;
        color: ${n("sys/Light/Text/primary")};
        padding-top: 6.5px;
        text-align: ${s};
        height: ${(null==(t=o.current)?void 0:t.scrollHeight)||0}px;
      `,onInput:e=>{const t=e.target;t.style.height="auto",t.style.height=t.scrollHeight+"px"}},e))},Pc=i(35944),Oc=e=>{const{attributes:t,children:i}=e,s=e.element,{content:r,slateId:o}=s,{appState:{activeCol:n,activeRow:l,elementId:a},setAppState:c,resetAppState:d}=bc(),h=(0,Ac.useRef)(null),{tm:p}=ee();((e,t)=>{(0,Ec.useEffect)((()=>{const i=i=>{e.current&&!e.current.contains(i.target)&&t(i)};return document.addEventListener("click",i),()=>{document.removeEventListener("click",i)}}),[e,t])})(h,(()=>{d()}));const g=(0,yc.useSlate)(),x=(0,yc.useSelected)(),f=(0,yc.useReadOnly)(),w=r.length,v=Math.max(...r.map((e=>e.length))),y=Array.from(Array(w)),k=Array.from(Array(v)),j=({y:e})=>{const t=0===e,i=e===v-1,r=n===e&&a===o&&!!o;return(0,Pc.jsx)(on,{render:e=>(0,Pc.jsx)(Fc,{element:s,tp:e}),visible:r,children:(0,Pc.jsx)("div",{css:vc.css`
            position: absolute;
            top: -8px;
            left: 0;
            width: 100%;
            height: 8px;
            background-color: ${p("sys/Light/Fill/02")};
            border-radius: ${t?4:0}px ${i?4:0}px 0px 0px;

            cursor: pointer;
            transition: all 0.2s;
            ${D} {
              background-color: ${p("sys/Light/Fill/03")};
            }

            ${r&&vc.css`
              background-color: ${p("sys/Light/System/primary")};
              ${D} {
                background-color: ${p("sys/Light/System/primary")};
              }
            `}
          `,onClick:()=>{c({activeCol:e,activeRow:void 0,elementId:o})}})})},b=({x:e})=>{const t=0===e,i=e===w-1,r=l===e&&a===o&&!!o;return(0,Pc.jsx)(on,{placement:"left",render:e=>(0,Pc.jsx)($c,{element:s,tp:e}),visible:r,children:(0,Pc.jsx)("div",{css:vc.css`
            position: absolute;
            top: 0;
            left: -8px;
            width: 8px;
            height: 100%;
            background-color: ${p("sys/Light/Fill/02")};
            border-radius: ${t?4:0}px 0px 0px ${i?4:0}px;

            cursor: pointer;
            transition: all 0.2s;
            ${D} {
              background-color: ${p("sys/Light/Fill/03")};
            }

            ${r&&vc.css`
              background-color: ${p("sys/Light/System/primary")};
              ${D} {
                background-color: ${p("sys/Light/System/primary")};
              }
            `}
          `,onClick:()=>{c({activeRow:e,activeCol:void 0,elementId:o})}})})};return(0,Pc.jsxs)("table",m(u({},t),{contentEditable:!1,ref:h,css:vc.css`
        margin-top: 12px;
        margin-bottom: 10px;
        border-collapse: collapse;
        transition: all 0.2s;
        box-shadow: ${x&&!f?"0 0 0 2px #B4D5FF":"none"};
      `,onClick:e=>{e.stopPropagation()},children:[(0,Pc.jsx)("tbody",{children:y.map(((e,t)=>{const i=l===t&&a===o;return(0,Pc.jsx)("tr",{css:vc.css`
                height: 0px;
                background-color: ${i?p("sys/Light/Blue/10"):"transparent"};
              `,children:k.map(((e,i)=>{var s,l,c,h;const x=n===i&&a===o;return(0,Pc.jsxs)("td",{css:vc.css`
                      outline: none;
                      width: 100px;
                      border: 1px solid ${p("sys/Light/Fill/01")};
                      position: relative;

                      background-color: ${x?p("sys/Light/Blue/10"):"transparent"};
                    `,children:[!f&&(0,Pc.jsxs)(Pc.Fragment,{children:[0===t&&j({y:i}),0===i&&b({x:t})]}),(0,Pc.jsx)(Tc,{text:null==(l=null==(s=null==r?void 0:r[t])?void 0:s[i])?void 0:l.text,align:null==(h=null==(c=null==r?void 0:r[t])?void 0:c[i])?void 0:h.align,onFocus:()=>{d()},onChange:e=>{const s=JSON.parse(JSON.stringify(r));s[t][i].text=e.target.value,ga(g,o,{content:s})}})]},t+"-"+i)}))},t)}))}),i]}))},zc=i(70917),Nc=i(96391),Vc=i(70917),Wc=i(96391),Zc=i(35944),Gc=[{type:"left",icon:Ro.IconAlignLeft,title:"\u5de6\u5bf9\u9f50"},{type:"center",icon:Ro.IconAlignCenter,title:"\u5c45\u4e2d\u5bf9\u9f50"},{type:"right",icon:Ro.IconAlignRight,title:"\u53f3\u5bf9\u9f50"}],Kc=({element:e})=>{const t=(0,Wc.useSlate)(),{slateId:i,fullwidth:s}=e,{tm:r}=ee();return(0,Zc.jsxs)(Jl,{children:[(0,Zc.jsx)(on,{placement:"bottom-start",render:()=>(0,Zc.jsx)(Pn,{children:Gc.map(((s,r)=>{const{icon:o,title:n,type:l}=s,{align:a="left"}=e,c=a===l;return(0,Zc.jsxs)(Vn,{onClick:()=>{ga(t,i,{align:l})},children:[(0,Zc.jsx)("div",{css:Vc.css`
                      opacity: ${Number(c)};
                    `,children:(0,Zc.jsx)(Ro.IconCheck,{})}),(0,Zc.jsx)("div",{css:Vc.css`
                      margin-top: 3px;
                    `,children:(0,Zc.jsx)(o,{})}),(0,Zc.jsx)("div",{css:Vc.css`
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                    `,children:n})]},r)}))}),children:(0,Zc.jsxs)(Kl,{children:[(0,Zc.jsx)(Ro.IconAlignLeft,{}),(0,Zc.jsx)(Ro.IconChevronDown,{})]})}),(0,Zc.jsx)(Ro.IconRowDivider,{width:1}),s?(0,Zc.jsxs)(Kl,{onClick:()=>{ga(t,i,{fullwidth:!1})},children:[(0,Zc.jsx)(Ro.IconRestore,{}),(0,Zc.jsx)("div",{css:Vc.css`
              font-weight: 500;
              font-size: 12px;
              color: ${r("sys/Light/Text/primary")};
            `,children:"\u9ed8\u8ba4\u5bbd\u5ea6"})]}):(0,Zc.jsxs)(Kl,{onClick:()=>{ga(t,i,{fullwidth:!0})},children:[(0,Zc.jsx)(Ro.IconFullscreen,{}),(0,Zc.jsx)("div",{css:Vc.css`
            font-weight: 500;
            font-size: 12px;
            color: ${r("sys/Light/Text/primary")};
          `,children:"\u5168\u5bbd"})]})]})},qc=i(67294),_c=i(35944),Jc="https://static.leetcode.cn/upload-data/ou_eed66b6a03cbf98aa57f6b565f6a9d78/invalid2.png",Uc=e=>{const{attributes:t,children:i}=e,s=e.element,{src:r,fullwidth:o,alt:n="",width:l,style:a,align:c="left"}=s,d=(0,Nc.useSelected)(),h=(0,Nc.useReadOnly)(),[p,g]=(0,qc.useState)(r),[x,f]=(0,qc.useState)(!1),w=p===Jc,{appState:{editorProps:{onPreviewImage:v}}}=he();return(0,_c.jsxs)("div",m(u({},t),{contentEditable:!1,css:zc.css`
        cursor: pointer;
        display: flex;
        justify-content: ${P(c)};
      `,children:[h?(0,_c.jsxs)(_c.Fragment,{children:[(0,_c.jsx)("img",{onClick:()=>{w||(v?v(r):S&&f(!0))},onError:()=>{g(Jc)},src:p,css:zc.css`
              width: ${o?"100%":l||(A?"50vw":R(480))};
              ${a&&zc.css`
                ${a}
              `}
            `}),(0,_c.jsx)(ve,{visible:x,onHide:()=>{f(!1)},addCss:zc.css`
              background-color: transparent;
              box-shadow: none;
              border-radius: 0px;
            `,children:(0,_c.jsx)("img",{src:p,css:zc.css`
                width: ${A?"90vw":"60vw"};
              `,onError:()=>{g(Jc)}})})]}):(0,_c.jsx)(on,{render:()=>(0,_c.jsx)(Kc,{element:s}),children:(0,_c.jsx)("img",{src:p,alt:n,title:n,onError:()=>{g(Jc)},css:zc.css`
            transition: all 0.2s;
            width: ${o?"100%":l||(A?"50vw":R(480))};
            box-shadow: ${d&&!h?"0 0 0 2px #B4D5FF":"none"};

            ${a&&zc.css`
              ${a}
            `}
          `})}),i]}))},Qc=i(70917),Yc=i(96391),Xc=i(70917),ed=i(96391),td=i(35944),id=[{type:"left",icon:Ro.IconAlignLeft,title:"\u5de6\u5bf9\u9f50"},{type:"center",icon:Ro.IconAlignCenter,title:"\u5c45\u4e2d\u5bf9\u9f50"},{type:"right",icon:Ro.IconAlignRight,title:"\u53f3\u5bf9\u9f50"}],sd=({element:e})=>{const t=(0,ed.useSlate)(),{slateId:i,fullwidth:s}=e,{tm:r}=ee();return(0,td.jsxs)(Jl,{children:[(0,td.jsx)(on,{placement:"bottom-start",render:()=>(0,td.jsx)(Pn,{children:id.map(((s,r)=>{const{icon:o,title:n,type:l}=s,{align:a="left"}=e,c=a===l;return(0,td.jsxs)(Vn,{onClick:()=>{ga(t,i,{align:l})},children:[(0,td.jsx)("div",{css:Xc.css`
                      opacity: ${Number(c)};
                    `,children:(0,td.jsx)(Ro.IconCheck,{})}),(0,td.jsx)("div",{css:Xc.css`
                      margin-top: 3px;
                    `,children:(0,td.jsx)(o,{})}),(0,td.jsx)("div",{css:Xc.css`
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                    `,children:n})]},r)}))}),children:(0,td.jsxs)(Kl,{children:[(0,td.jsx)(Ro.IconAlignLeft,{}),(0,td.jsx)(Ro.IconChevronDown,{})]})}),(0,td.jsx)(Ro.IconRowDivider,{width:1}),s?(0,td.jsxs)(Kl,{onClick:()=>{ga(t,i,{fullwidth:!1})},children:[(0,td.jsx)(Ro.IconRestore,{}),(0,td.jsx)("div",{css:Xc.css`
              font-weight: 500;
              font-size: 12px;
              color: ${r("sys/Light/Text/primary")};
            `,children:"\u9ed8\u8ba4\u5bbd\u5ea6"})]}):(0,td.jsxs)(Kl,{onClick:()=>{ga(t,i,{fullwidth:!0})},children:[(0,td.jsx)(Ro.IconFullscreen,{}),(0,td.jsx)("div",{css:Xc.css`
            font-weight: 500;
            font-size: 12px;
            color: ${r("sys/Light/Text/primary")};
          `,children:"\u5168\u5bbd"})]})]})},rd=i(67294),od=i(67294),nd=i(67294),ld=i(70917),ad=i(35944),cd=({size:e=50})=>(0,ad.jsx)("img",{src:"https://static.leetcode.cn/cn-mono-assets/development-06/assets/light-loading.9d7b0f1c.gif",width:e}),dd=i(35944),hd=({icon:e,text:t})=>{const{tm:i}=ee();return(0,dd.jsx)(dd.Fragment,{children:(0,dd.jsxs)("div",{css:ld.css`
          width: 100%;
          padding: 50px 0px;
          aspect-ratio: 16 / 9;

          background: ${i("sys/Light/Fill/02")};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          font-size: 14px;
          color: ${i("sys/Light/Text/tertiary")};
          gap: 16;
        `,children:["warn"===e?(0,dd.jsx)("div",{css:ld.css`
              svg {
                path {
                  color: #aaa !important;
                }
              }
            `,children:(0,dd.jsx)(Ro.IconWarn,{width:40,height:40})}):(0,dd.jsx)(cd,{}),t]})})},pd=i(78647),gd=i(70917),xd=i(35944),ud=({coverUrl:e,showPremiumTips:t})=>{const{tm:i}=ee();return(0,xd.jsxs)("div",{css:gd.css`
        position: relative;
        display: inline-block;
        overflow: hidden;
        border-radius: 3px;
      `,children:[(0,xd.jsx)("img",{src:encodeURI(e),alt:"video cover",css:gd.css`
          filter: ${t?"blur(1px)":void 0};
          width: 100%;
          max-width: 640px;
        `}),(0,xd.jsxs)("div",{css:gd.css`
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: ${i("sys/Light/Fill/02")};

          color: #fff;
          display: ${t?"flex":"none"};
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          line-height: 20px;
        `,children:["\u5f53\u524d\u89c6\u9891\u4e3a\u529b\u6263 Plus \u4f1a\u5458\u4e13\u4eab\u5185\u5bb9\uff0c\u5347\u7ea7\u529b\u6263 Plus \u4f1a\u5458\u5373\u53ef\u89e3\u9501",(0,xd.jsx)("a",{href:"https://leetcode.cn/premium-detail",css:gd.css`
            border-radius: 3px;
            margin-top: 19px;
            padding: 4px 8px;
            background-color: #ffa115;
            color: #fff;
            text-decoration: none;
            font-size: 12px;
            line-height: 20px;
          `,children:"\u5347\u7ea7 Plus \u4f1a\u5458"})]})]})},md=({uuid:e})=>{var t,i,s,r,o;const{appState:{editorProps:{onFetchVideoInfo:n}}}=he(),[l,a]=(0,nd.useState)(),c=(0,od.useRef)(null),[d]=(0,nd.useState)("VIDEO_PLAYER_"+(0,pd.nanoid)()),h=(0,rd.useCallback)((()=>{if(S)return Promise.all([new Promise(((e,t)=>{S||t();const i=document.createElement("script");i.type="text/javascript",i.src="//g.alicdn.com/de/prismplayer/2.8.7/aliplayer-min.js",i.onload=()=>{e(window.Aliplayer)},i.onerror=t,document.head.appendChild(i)})),new Promise(((e,t)=>{S||t();const i=document.createElement("link");i.rel="stylesheet",i.href="//g.alicdn.com/de/prismplayer/2.8.7/skins/default/aliplayer-min.css",i.onload=()=>{e()},i.onerror=t,document.head.appendChild(i)}))]).then((([e])=>e)).catch((e=>{!z&&console.error("aliyun\u89c6\u9891\u64ad\u653e\u5668\u52a0\u8f7d\u5931\u8d25",e)}))}),[]);(0,rd.useEffect)((()=>{var e;l&&(null==c?void 0:c.current)&&d&&(e=d,k(void 0,null,(function*(){if(!l)return;const{videoInfo:{coverUrl:t,videoId:i},playAuth:s}=l,r=yield h();if(!r)return;const o=new r({id:e,vid:i,playauth:s,encryptType:1,cover:t,mediaType:"video",autoplay:!1,preload:!0,playsinline:!0,keyShortCuts:!1,isLive:!1,rePlay:!1,controlBarVisibility:"hover",useH5Prism:!0,width:"100%",height:"200px",skinLayout:E?[{name:"bigPlayButton",align:"blabs",x:30,y:80},{name:"H5Loading",align:"cc"},{name:"errorDisplay",align:"tlabs",x:0,y:0},{name:"thumbnail"},{name:"controlBar",align:"blabs",x:0,y:0,children:[{name:"progress",align:"blabs",x:0,y:44},{name:"playButton",align:"tl",x:15,y:12},{name:"timeDisplay",align:"tl",x:10,y:7},...M?[]:[{name:"fullScreenButton",align:"tr",x:10,y:12}],{name:"setting",align:"tr",x:15,y:12}]}]:void 0});return o.on("ready",(()=>{z||console.log(`player-${e} ready`)})),o})))}),[l,c,d]);const[p,g]=(0,nd.useState)(!1);if((0,rd.useEffect)((()=>{const t=()=>k(void 0,null,(function*(){let t=0;const i=()=>k(void 0,null,(function*(){t++;const s=yield null==n?void 0:n(e);s?(a(s),g(!1),t=0):t<5&&(yield((e=1e3)=>new Promise((t=>{setTimeout((()=>{t(!0)}),e)})))(1e4),yield i())}));yield i()}));!e||l||p||(g(!0),t())}),[e,!!l,p]),!l)return(0,xd.jsx)(hd,{text:"\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d...",icon:"warn"});if(!(null==l?void 0:l.canSee))switch(null==l?void 0:l.articleChargeType){case"FREE":return(0,xd.jsx)(hd,{text:"\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25",icon:"warn"});case"PREMIUM":return(null==(t=null==l?void 0:l.videoInfo)?void 0:t.coverUrl)?(0,xd.jsx)(ud,{coverUrl:null==(i=null==l?void 0:l.videoInfo)?void 0:i.coverUrl,showPremiumTips:!1}):(0,xd.jsx)(hd,{text:"\u4f1a\u5458\u89c6\u9891",icon:"warn"});case"VIDEO_PREMIUM":return(null==(s=null==l?void 0:l.videoInfo)?void 0:s.coverUrl)?(0,xd.jsx)(ud,{coverUrl:null==(r=null==l?void 0:l.videoInfo)?void 0:r.coverUrl,showPremiumTips:!0}):(0,xd.jsx)(hd,{text:"\u4f1a\u5458\u89c6\u9891",icon:"warn"})}switch(null==l?void 0:l.status){case"PENDING":return(0,xd.jsx)(hd,{text:"\u89c6\u9891\u6b63\u5728\u5ba1\u6838\u4e2d...",icon:"warn"});case"REJECTED":return(0,xd.jsx)(hd,{text:"\u89c6\u9891\u5ba1\u6838\u4e0d\u901a\u8fc7",icon:"warn"});case"APPROVED":return(null==(o=null==l?void 0:l.videoInfo)?void 0:o.videoId)&&d&&(null==l?void 0:l.playAuth)?(0,xd.jsx)("div",{ref:c,className:"prism-player",id:d}):(0,xd.jsx)(hd,{text:"\u89c6\u9891\u4fe1\u606f\u6709\u8bef",icon:"warn"});case"TRANSCODING":return(0,xd.jsx)(hd,{text:"\u89c6\u9891\u6b63\u5728\u8f6c\u7801\u4e2d..."});case"TRANSCODE_FAILED":return(0,xd.jsx)(hd,{text:"\u89c6\u9891\u8f6c\u7801\u5931\u8d25",icon:"warn"});default:return(0,xd.jsx)(hd,{text:"\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25",icon:"warn"})}},fd=i(67294),wd=i(35944),vd=e=>{const{attributes:t,children:i}=e,s=e.element,{src:r,fullwidth:o,title:n="",align:l="left",width:a}=s,c=(0,Yc.useSelected)(),d=(0,Yc.useReadOnly)(),[h,p]=(0,fd.useState)(!0);return(0,wd.jsxs)("div",m(u({},t),{contentEditable:!1,css:Qc.css`
        position: relative;
        display: flex;
        justify-content: ${P(l)};
      `,children:[(0,wd.jsx)(on,{render:()=>(0,wd.jsx)(sd,{element:s}),children:(0,wd.jsx)("div",{children:r.startsWith("http://")||r.startsWith("https://")?h?(0,wd.jsx)("video",{onContextMenu:()=>!1,onError:()=>{p(!1)},src:r,title:n,controls:!0,controlsList:"nodownload",css:Qc.css`
              transition: all 0.2s;
              width: ${o?"100%":a||R(480)};
              box-shadow: ${c&&!d?"0 0 0 2px #B4D5FF":"none"};
            `}):(0,wd.jsx)(hd,{text:"\u83b7\u53d6\u89c6\u9891\u4fe1\u606f\u5931\u8d25",icon:"warn"}):(0,wd.jsx)("div",{title:n,css:Qc.css`
          transition: all 0.2s;
          width: ${o?"100%":a||R(480)};
          box-shadow: ${c&&!d?"0 0 0 2px #B4D5FF":"none"};
          overflow: hidden;
          height: fit-content;
        `,children:(0,wd.jsx)(md,{uuid:r})})})}),i]}))},yd=i(35944),kd=e=>{const{attributes:t,children:i,element:s}=e;switch(s.type){case"Heading1":return(0,yd.jsx)("div",m(u({css:zl.css`
            * {
              font-weight: 500;
              font-size: 28px;
              line-height: 44px;
            }
          `},t),{children:i}));case"Heading2":return(0,yd.jsx)("div",m(u({css:zl.css`
            * {
              font-weight: 500;
              font-size: 22px;
              line-height: 36px;
            }
          `},t),{children:i}));case"Heading3":return(0,yd.jsx)("div",m(u({css:zl.css`
            * {
              font-weight: 500;
              font-size: 18px;
              line-height: 26px;
            }
          `},t),{children:i}));case"BulletedList":return(0,yd.jsx)(Ga,u({},e));case"OrderedList":return(0,yd.jsx)(_a,u({},e));case"ListItem":return(0,yd.jsx)("li",m(u({},t),{children:i}));case"HorizontalRule":return(0,yd.jsx)(Ma,u({},e));case"BlockQuote":return(0,yd.jsx)(Va,u({},e));case"CodeBlock":return(0,yd.jsx)(Ta,u({},e));case"LatexBlock":return(0,yd.jsx)(wc,u({},e));case"Table":return(0,yd.jsx)(Oc,u({},e));case"Image":return(0,yd.jsx)(Uc,u({},e));case"Video":return(0,yd.jsx)(vd,u({},e));case"Gallery":return(0,yd.jsx)(Ba,u({},e));default:return(0,yd.jsx)(Oa,u({},e))}},jd=(e,t)=>{var i,s;const r=va(e,(null==t?void 0:t.slateId)||""),o=r&&e.parent(r);return"Paragraph"===t.type&&1===t.children.length&&""===(null==(i=t.children[0])?void 0:i.text)&&1===(null==r?void 0:r.length)&&0===(null==(s=null==o?void 0:o[1])?void 0:s.length)},bd=i(96391),Ld=i(70917),Cd=i(96391),Fd=i(70917),Id=i(96391),Sd=i(35944),Bd=Y({visible:!1,slateId:""}),$d=()=>{const{pageState:{value:e},setPageState:t,resetPageState:i}=Q({value:""}),{appState:{visible:s,slateId:r},setAppState:o,resetAppState:n}=Bd(),{tm:l}=ee(),a=(0,Id.useSlate)(),c=()=>{n(),i()};return(0,Sd.jsxs)(ve,{visible:s,onHide:c,children:[(0,Sd.jsxs)(oe,{justify:"space-between",css:Fd.css`
          padding: 20px;
        `,children:[(0,Sd.jsx)("div",{css:Fd.css`
            font-size: 16px;
            font-weight: bold;
            color: ${l("sys/Light/Text/primary")};
          `,children:"\u8f93\u5165markdown"}),(0,Sd.jsxs)(oe,{css:Fd.css`
            gap: 8px;
          `,children:[(0,Sd.jsx)(se,{light:!0,onClick:e=>{e.preventDefault(),e.stopPropagation(),c()},children:"\u53d6\u6d88"}),(0,Sd.jsx)(se,{onClick:t=>{if(!r)return;t.preventDefault(),t.stopPropagation();const i=jn(e),s=va(a,r);a.select(s),a.collapse(),a.insertNodes(i),a.move({edge:"end"}),c()},children:"\u4fdd\u5b58"})]})]}),(0,Sd.jsx)(dn,{autoFocus:!0,fontSize:14,onChange:e=>{t({value:e.target.value})},style:{borderTop:`1px solid ${l("sys/Light/Gray/10")}`},showCopy:!1,placeholder:"\u8bf7\u5728\u6b64\u5904\u8f93\u5165\u6216\u7c98\u8d34Markdown",value:e,language:"markdown",width:"70vw",height:"80vh"})]})},Ad=i(67294),Ed=v(i(18156)),Md=i(35944),Dd=({searchKey:e="",onHide:t,element:i,useKeyboard:s})=>{const{tm:r}=ee(),o=(0,Cd.useSlate)(),n=(e=>{const{uploadFile:t,uploadFiles:i}=ia();return[{before:[{type:"module",title:"\u57fa\u7840\uff088\uff09"}],icon:Ro.IconH1,title:Yn,keywords:"h1 heading1 title",onClick:()=>{fa(e,"Heading1")}},{icon:Ro.IconH2,title:Xn,keywords:"h2 heading2",onClick:()=>{fa(e,"Heading2")}},{icon:Ro.IconH3,title:el,keywords:"h3 heading3",onClick:()=>{fa(e,"Heading3")}},{icon:Ro.IconOrderedList,title:il,keywords:"ordered list",onClick:()=>{fa(e,"OrderedList")}},{icon:Ro.IconBulletList,title:sl,keywords:"bullet list",onClick:()=>{fa(e,"BulletedList")}},{icon:Ro.IconBlockquote,title:rl,keywords:"quote",onClick:()=>{fa(e,"BlockQuote")}},{icon:Ro.IconHr,title:ol,keywords:"divider horizontal rule break line hr",onClick:()=>{fa(e,"HorizontalRule")}},{icon:Ro.IconLink,title:al,keywords:"link url uri href",onClick:()=>{wa(e,{type:"Link",href:"",title:"\u8bf7\u8f93\u5165\u94fe\u63a5\u6807\u9898",children:[{text:""}]})}},{before:[{type:"separator"},{type:"module",title:"\u5e38\u7528\uff089\uff09"}],icon:Ro.IconCodeBlock,title:gl,keywords:"script code block pre",onClick:()=>{e.insertNode({type:"CodeBlock",tabs:[{language:"plainText",code:""}],children:[{text:""}]})}},{key:"Markdown",icon:Ro.IconMarkdown,title:"Markdown",keywords:"markdown md"},{icon:Ro.IconLatexBlock,title:ul,keywords:"math tex latex",onClick:()=>{e.insertNode({type:"LatexBlock",tex:"sinx",children:[{text:""}]})}},{icon:Ro.IconPage,title:ml,keywords:"question",onClick:()=>{e.insertText("@")}},{title:fl,icon:Ro.IconUser,keywords:"user",onClick:()=>{e.insertText("@")}},{icon:Ro.IconImage,title:cl,keywords:"picture photo image img",onClick:()=>k(void 0,null,(function*(){try{let i="";if(i=z?yield t({accept:"image/*"}):"https://pic.leetcode.cn/1678099970-zoaApv-hello-algo-socialcard-1920-corner.jpg",i){const t={type:"Image",src:i,children:[{text:""}]};e.insertNodes(t)}}catch(i){!z&&console.error(i)}}))},{title:wl,icon:Ro.IconGallery,keywords:"ppt gallery powerpoint photo swiper slider",onClick:()=>k(void 0,null,(function*(){let t=[];if(t=z?yield i({accept:"image/*"}):["https://pic.leetcode.cn/1686413522-LbaXcv-9c7df00ba03262609575258cbd41e6a.png","https://pic.leetcode.cn/1686460222-oLaMNz-image.png","https://pic.leetcode.cn/1686460268-JjmLDF-image.png"],t.length>0){const i={type:"Gallery",images:t,children:[{text:""}]};e.insertNodes(i)}}))},{icon:Ro.IconVideo,title:dl,keywords:"video",onClick:()=>k(void 0,null,(function*(){try{let i="";if(i=z?yield t({accept:"video/*"}):"https://gw.alipayobjects.com/v/portal_qb9pdx/afts/video/A*WEdmSKgFbrIAAAAAAAAAAAAAAQAAAQ/720P_h265",i){const t={type:"Video",src:i,children:[{text:""}]};e.insertNodes(t)}}catch(i){!z&&console.error(i)}}))},{icon:Ro.IconTable,title:hl,keywords:"table row cell td tr tbody",onClick:()=>{e.insertNodes({type:"Table",content:[[{text:""},{text:""},{text:""}],[{text:""},{text:""},{text:""}],[{text:""},{text:""},{text:""}]],children:[{text:""}]})}}]})(o),l=he(),{appState:{editorWrapperElement:a}}=l,c=Bd(),d=i.slateId?va(o,i.slateId):void 0,{pageState:{activeIndex:h,isMouseMove:p},setPageState:g}=Q({activeIndex:0,isMouseMove:!s}),x=n.filter((t=>t.keywords.toLowerCase().replace(/\s/g,"").includes(e.toLowerCase().replace(/\s/g,"")))),u=e=>k(void 0,null,(function*(){var s;d&&(Cd.ReactEditor.focus(o),o.deleteBackward("line"),o.select(d),o.collapse(),"Markdown"===e.key?c.setAppState({visible:!0,slateId:i.slateId}):yield null==(s=e.onClick)?void 0:s.call(e),o.move({edge:"end"}),t())})),m=e=>k(void 0,null,(function*(){g({isMouseMove:!1}),(0,Ed.default)("down",e)&&(e.preventDefault(),h===x.length-1?g({activeIndex:0}):g({activeIndex:h+1})),(0,Ed.default)("up",e)&&(e.preventDefault(),g(0===h?{activeIndex:x.length-1}:{activeIndex:h-1})),(0,Ed.default)("enter",e)&&(e.preventDefault(),yield u(x[h]))})),f=e=>k(void 0,null,(function*(){e.preventDefault(),g({isMouseMove:!0})})),w=(0,Ad.useRef)(null);return(0,Ad.useEffect)((()=>(s&&(l.setAppState({disableSystemKeyEvent:!0}),window.addEventListener("keydown",m),window.addEventListener("mousemove",f),!p&&(null==w?void 0:w.current)&&(w.current.scrollTop=20*h)),()=>{window.removeEventListener("keydown",m),window.removeEventListener("mousemove",f),l.setAppState({disableSystemKeyEvent:!1})})),[s,h,e,p,w]),(0,Md.jsxs)(Pn,{ref:w,css:Ld.css`
        width: 214px;
        scroll-behavior: smooth;
        max-height: 420px;
        overflow-x: hidden;
        overflow-y: scroll;
        pointer-events: ${p?"unset":"none"};
      `,children:[e?(0,Md.jsxs)("div",{css:Ld.css`
          font-size: 12px;
          color: ${r("sys/Light/Text/quaternary")};
          padding: 4px;
          word-break: break-all;
        `,children:["\u201c",e,"\u201d\u7684\u641c\u7d22\u7ed3\u679c"]}):null,x.length>0?x.map(((t,i)=>{const{icon:o,title:n,before:l}=t,a=!!s&&h===i;return(0,Md.jsxs)("div",{id:`SLASH_MENU_${i}`,children:[!e&&(null==l?void 0:l.map(((e,t)=>"module"===e.type?(0,Md.jsx)("div",{css:Ld.css`
                      font-weight: 500;
                      font-size: 12px;
                      color: ${r("sys/Light/Text/tertiary")};
                      padding: 6px 4px;
                    `,children:e.title},t):"separator"===e.type?(0,Md.jsx)("div",{css:Ld.css`
                      border-bottom: 1px solid ${r("sys/Light/Fill/02")};
                      margin: 4px 0;
                    `},t):void 0))),(0,Md.jsxs)(Vn,{css:Ld.css`
              width: 200px;
              user-select: unset;
              ${a&&Ld.css`
                background-color: ${r("sys/Light/Fill/02")};
              `}
            `,onMouseEnter:e=>{s&&(e.preventDefault(),g({activeIndex:i}))},onClick:e=>k(void 0,null,(function*(){e.preventDefault(),e.stopPropagation(),yield u(t)})),children:[(0,Md.jsx)("div",{css:Ld.css`
                height: 16px;
                width: 16px;
                line-height: 16px;
              `,children:(0,Md.jsx)(o,{})}),(0,Md.jsx)("div",{css:Ld.css`
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: ${r("sys/Light/Text/primary")};
              `,children:n})]})]},i)})):(0,Md.jsx)("div",{css:Ld.css`
          color: ${r("sys/Light/Text/tertiary")};
          font-size: 14px;
          padding: 0px 4px;
          margin-bottom: 2px;
        `,children:"\u65e0\u5339\u914d\u9879"})]})},Rd=i(70917),Hd=i(35944),Td=({element:e})=>{const{tm:t}=ee();return(0,Hd.jsx)(on,{placement:"bottom-start",render:t=>(0,Hd.jsx)(Dd,{element:e,onHide:()=>{null==t||t.hide()}}),children:(0,Hd.jsx)("div",{css:Rd.css`
          transition: all 0.2s;
          width: 22px;
          height: 22px;
          background-color: ${t("sys/Light/Fill/02")};
          box-shadow: ${t("sys/Light/Shadow/down-01")};
          border: 1px solid ${t("sys/Light/Fill/01")};
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          ${D} {
            background-color: ${t("sys/Light/Fill/03")};
          }
        `,children:(0,Hd.jsx)(Ro.IconAdd,{})})})},Pd=i(70917),Od=i(96391),zd=i(35944),Nd={BlockQuote:(0,zd.jsx)(Ro.IconBlockquote,{}),BulletedList:(0,zd.jsx)(Ro.IconBulletList,{}),CodeBlock:(0,zd.jsx)(Ro.IconCodeBlock,{}),Gallery:(0,zd.jsx)(Ro.IconBlockquote,{}),Heading1:(0,zd.jsx)(Ro.IconH1,{}),Heading2:(0,zd.jsx)(Ro.IconH2,{}),Heading3:(0,zd.jsx)(Ro.IconH3,{}),HorizontalRule:(0,zd.jsx)(Ro.IconHr,{}),Image:(0,zd.jsx)(Ro.IconImage,{}),LatexBlock:(0,zd.jsx)(Ro.IconLatexBlock,{}),OrderedList:(0,zd.jsx)(Ro.IconOrderedList,{}),Paragraph:(0,zd.jsx)(Ro.IconParagraph,{}),Table:(0,zd.jsx)(Ro.IconTable,{}),Video:(0,zd.jsx)(Ro.IconVideo,{})},Vd={Paragraph:tl,Heading1:Yn,Heading2:Xn,Heading3:el,BlockQuote:rl},Wd=({element:e,onHide:t})=>{const{tm:i}=ee(),s=(0,Od.useSlate)(),r=va(s,e.slateId),o=[{title:"\u5728\u4e0a\u65b9\u589e\u52a0\u4e00\u884c",icon:(0,zd.jsx)(Ro.IconArrowUp,{}),onClick:()=>{s.insertNode(q()[0],{at:r}),s.select(r),s.collapse()}},{title:"\u5728\u4e0b\u65b9\u589e\u52a0\u4e00\u884c",icon:(0,zd.jsx)(Ro.IconArrowDown,{}),onClick:()=>{const e=[r[0]+1];s.insertNode(q()[0],{at:e}),s.select(e),s.collapse()}},{title:"\u5220\u9664",icon:(0,zd.jsx)(Ro.IconDelete,{}),onClick:()=>{if(1===s.children.length){const e=[r[0]+1];s.insertNode(q()[0],{at:e}),s.select(e),s.collapse()}s.delete({at:r})}}],n=!!Vd[e.type];return(0,zd.jsxs)(Pn,{children:[n&&(0,zd.jsxs)(zd.Fragment,{children:[(0,zd.jsx)(oe,{css:Pd.css`
              width: 100%;
              margin-top: 2px;
              justify-content: space-between;
            `,children:Object.keys(Vd).map(((i,o)=>{const n=i===e.type;return(0,zd.jsx)("div",{children:(0,zd.jsx)(ln,{content:Vd[i],children:(0,zd.jsx)(Qo,{active:n,onClick:e=>{e.stopPropagation(),e.preventDefault(),s.setNodes({type:i},{at:r}),t()},children:Nd[i]})})},o)}))}),(0,zd.jsx)(Fl,{css:Pd.css`
              margin: 4px 0;
            `})]}),o.map(((s,r)=>(0,zd.jsxs)(Vn,{css:Pd.css`
              width: 200;
            `,onClick:i=>k(void 0,null,(function*(){e.slateId&&(i.preventDefault(),i.stopPropagation(),yield s.onClick(),t())})),children:[(0,zd.jsx)("div",{css:Pd.css`
                height: 16px;
                width: 16px;
                line-height: 16px;
              `,children:s.icon}),(0,zd.jsx)("div",{css:Pd.css`
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                color: ${i("sys/Light/Text/primary")};
              `,children:s.title})]},r)))]})},Zd=i(70917),Gd=i(96391),Kd=i(35944),qd=({element:e})=>{const{tm:t}=ee(),i=(0,Gd.useSlate)(),s=document;return(0,Kd.jsx)(on,{placement:"bottom-start",onShow:()=>{i.collapse(),s.getElementById("SLATE_"+e.slateId)&&(s.getElementById("SLATE_"+e.slateId).style.backgroundColor=t("sys/Light/Fill/02"))},onHide:()=>{s.getElementById("SLATE_"+e.slateId)&&(s.getElementById("SLATE_"+e.slateId).style.backgroundColor="transparent")},render:t=>(0,Kd.jsx)(Al,{children:(0,Kd.jsx)(Wd,{element:e,onHide:()=>{null==t||t.hide()}})}),children:(0,Kd.jsx)("div",{css:Zd.css`
          width: 22px;
          height: 22px;
          background-color: ${t("sys/Light/Fill/02")};
          box-shadow: ${t("sys/Light/Shadow/down-01")};
          border: 1px solid ${t("sys/Light/Fill/01")};
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          ${D} {
            background-color: ${t("sys/Light/Fill/03")};
          }
        `,children:Nd[e.type]})})},_d=i(35944),Jd=Y({activeSlateId:""}),Ud=()=>{const{appState:{activeSlateId:e}}=Jd(),t=(0,bd.useSlate)(),{appState:{editorWrapperElement:i}}=he();if(!e)return null;const s=t.children.find((t=>t.slateId===e));if(!(null==s?void 0:s.slateId))return null;const r=jd(t,s),o=(null==i?void 0:i.querySelector("#SLATE_"+s.slateId))||void 0,n=!!o;return(0,_d.jsx)(on,{placement:"left",visible:n,reference:o,render:()=>r?(0,_d.jsx)(Td,{element:s}):(0,_d.jsx)(qd,{element:s})})},Qd=i(67294),Yd=i(35944),Xd=e=>{const{element:t}=e,i=t.align,{appState:{editorProps:s}}=he(),{tm:r}=ee(),{setAppState:o}=Jd(),n=(0,Ol.useSlate)();return(0,Qd.useEffect)((()=>{["Heading4","Heading5","Heading6"].includes(t.type)&&ga(n,t.slateId,{type:"Paragraph"})}),[t.type]),(0,Yd.jsx)("div",{id:"SLATE_"+t.slateId,"data-slate-type":"block","data-node-type":t.type,onMouseEnter:e=>{t.slateId&&n.children.find((e=>e.slateId===t.slateId))&&(e.preventDefault(),e.stopPropagation(),o({activeSlateId:t.slateId||""}))},css:Pl.css`
        text-align: ${"Paragraph"===t.type?"left":i};
        width: 100%;
        margin: 8px 0px;
        transition: all 0.2s;
        border-radius: 4px;
        ${s.showNodes&&Pl.css`
          ${D} {
            background-color: ${r("sys/Light/Fill/01")};
          }
          box-shadow: 0 0 0 2px #b4d5ff;
        `}
      `,children:(0,Yd.jsx)(kd,u({},e))})},eh=i(70917),th=i(96391),ih=i(70917),sh=i(96391),rh=i(70917),oh=i(35944),nh=e=>{const{tm:t}=ee();return(0,oh.jsx)("input",u({css:rh.css`
        all: unset;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;

        width: 100%;

        height: 32px;
        background-color: ${t("sys/Light/Fill/02")};
        border-radius: 5px;

        font-weight: 400;
        font-size: 14px;
        color: ${t("sys/Light/Text/primary")};
        transition: all 0.2s;

        ${D} {
          opacity: 0.8;
        }

        border: 2px solid transparent;

        &:focus {
          background-color: ${t("sys/Light/Layer/01")};
          border-color: #ebebeb;
        }
      `},e))},lh=i(70917),ah=i(96391),ch=e=>{S&&(z?e&&(E||(e=>{const t=new URL(e);return t.host.indexOf("lingkou.xyz")>=0||t.host.indexOf("lingkou.com")>=0||t.host.indexOf("leetcode.cn")>=0||t.host.indexOf("leetcode.com")>=0})(e)?window.open(e):window.open(`${location.origin}/link/?target=${e}`)):window.open(e))},dh=i(35944),hh=({element:e,onHide:t})=>{const{slateId:i,title:s="",href:r=""}=e,{pageState:{title:o,href:n},setPageState:l}=Q({title:s,href:r}),a=(0,ah.useSlate)();return(0,dh.jsxs)(Hn,{css:lh.css`
        width: 320px;
      `,children:[(0,dh.jsxs)("div",{css:lh.css`
          width: 100%;
        `,children:[(0,dh.jsx)("div",{css:lh.css`
            margin-bottom: 8px;
          `,children:"\u6587\u672c"}),(0,dh.jsx)(nh,{value:o,onChange:e=>l({title:e.target.value}),autoFocus:!0,placeholder:"\u8f93\u5165\u94fe\u63a5\u6587\u672c"})]}),(0,dh.jsxs)("div",{css:lh.css`
          width: 100%;
        `,children:[(0,dh.jsx)("div",{css:lh.css`
            margin-bottom: 8px;
          `,children:"\u94fe\u63a5"}),(0,dh.jsx)(nh,{value:n,onChange:e=>l({href:e.target.value}),placeholder:"\u8f93\u5165\u94fe\u63a5 URL"})]}),(0,dh.jsxs)(oe,{justify:"space-between",css:lh.css`
          width: 100%;
        `,children:[(0,dh.jsx)(ln,{content:n.startsWith("https://")?"":"\u94fe\u63a5\u683c\u5f0f\u4e0d\u5b8c\u6574\uff08\u9700\u5305\u542b https://",children:(0,dh.jsx)("div",{children:(0,dh.jsx)(se,{disabled:!o||!n||!n.startsWith("https://"),onClick:()=>{ga(a,i,{href:n,title:o}),t()},children:"\u786e\u5b9a"})})}),(0,dh.jsxs)(oe,{css:lh.css`
            gap: 8px;
          `,children:[!!n&&!!n.startsWith("https://")&&(0,dh.jsx)(ln,{content:"\u6253\u5f00\u94fe\u63a5",children:(0,dh.jsx)(Qo,{onClick:()=>{ch(n)},children:(0,dh.jsx)(Ro.IconOpenBlank,{})})}),(0,dh.jsx)(ln,{content:"\u8fd8\u539f\u4e3a\u6587\u672c",children:(0,dh.jsx)(Qo,{onClick:()=>{if(i){const e=va(a,i);a.select(e),a.delete(),a.insertText(s)}},children:(0,dh.jsx)(Ro.IconRestore,{})})})]})]})]})},ph=i(35944),gh=e=>{const{attributes:t,children:i}=e,s=e.element,{href:r,title:o}=s,{appState:{editorWrapperElement:n}}=he(),l=(0,sh.useReadOnly)();return(0,ph.jsx)(on,{trigger:"click",appendTo:n,placement:"bottom-start",render:e=>(0,ph.jsx)(hh,{element:s,onHide:()=>{null==e||e.hide()}}),children:(0,ph.jsxs)("span",m(u({},t),{contentEditable:!1,children:[(0,ph.jsx)("a",{onClick:e=>{e.preventDefault(),l&&ch(r)},css:ih.css`
            all: unset;
            color: #017aff !important;
            border-radius: 4px;
            transition: all 0.2s;
            ${D} {
              color: #017aff !important;
              text-decoration: underline;
            }
          `,children:o}),i]}))})},xh=i(70917),uh=i(96391),mh=i(35944),fh=e=>{const{attributes:t,children:i}=e,s=e.element,{slateId:r,tex:o}=s,{pageState:{editModalVisible:n},setPageState:l}=Q({editModalVisible:!1}),{appState:{editorWrapperElement:a}}=he(),c=null==a?void 0:a.clientWidth,d=(0,uh.useReadOnly)(),h=(0,uh.useSlate)();return(0,mh.jsxs)(mh.Fragment,{children:[(0,mh.jsx)(on,{disabled:d,render:()=>(0,mh.jsxs)(Jl,{gap:0,children:[(0,mh.jsx)(ln,{content:"\u7f16\u8f91",children:(0,mh.jsx)(Qo,{onClick:e=>{d||(e.preventDefault(),ya(h,r),l({editModalVisible:!0}))},children:(0,mh.jsx)(Ro.IconEdit,{})})}),(0,mh.jsx)(Ro.IconRowDivider,{}),(0,mh.jsx)(ln,{content:"\u8fd8\u539f\u4e3a\u6587\u672c",children:(0,mh.jsx)(Qo,{onClick:e=>{d||(e.preventDefault(),ya(h,r),ka(h,r),h.collapse(),h.move({unit:"character",distance:1,reverse:!0}),h.insertText(o))},children:(0,mh.jsx)(Ro.IconRestore,{})})})]}),children:(0,mh.jsxs)("span",m(u({onClick:e=>{d||(e.preventDefault(),ya(h,r))}},t),{contentEditable:!1,css:xh.css`
            border-radius: 4px;
            white-space: nowrap;

            .katex .base {
              max-width: ${c||500}px;
              overflow: scroll;
              vertical-align: top;

              &::-webkit-scrollbar {
                display: none;
              }
            }
          `,children:[(0,mh.jsx)(tc,{tex:o}),i]}))}),(0,mh.jsx)(uc,{visible:n,element:s,onHide:()=>{l({editModalVisible:!1})}})]})},wh=i(70917),vh=i(96391),yh=i(35944),kh=e=>{const{attributes:t,children:i}=e,s=e.element,{appState:{editorProps:{renderQuestionDetail:r,renderUserDetail:o}}}=he(),{item:n}=s,l="user"===n.type,a=(0,vh.useReadOnly)(),{tm:c}=ee();return(0,yh.jsx)(on,{placement:"bottom-start",render:()=>l?null==o?void 0:o(n):null==r?void 0:r(n),children:(0,yh.jsxs)("span",m(u({},t),{contentEditable:!1,css:wh.css`
          border-radius: 3px;
          overflow: hidden;
          color: ${c("sys/Light/System/primary")};

          display: inline-flex;
          align-items: center;
          vertical-align: bottom;
          gap: 4px;
        `,onClick:()=>{a&&n.href&&S&&window.open(n.href)},children:[l?(0,yh.jsxs)(yh.Fragment,{children:[(0,yh.jsx)("img",{css:wh.css`
              width: 18px;
              height: 18px;
              line-height: 20px;
              border-radius: 50%;
              line-height: 24px;
            `,src:n.avatar,onError:e=>{e.target.src=O}}),n.name]}):(0,yh.jsxs)(yh.Fragment,{children:[(0,yh.jsx)(Ro.IconAlgorithm,{}),n.name]}),i]}))})},jh=i(35944),bh=e=>{const{attributes:t,children:i,element:s}=e;switch(s.type){case"Link":return(0,jh.jsx)(gh,u({},e));case"Mention":return(0,jh.jsx)(kh,u({},e));case"Latex":return(0,jh.jsx)(fh,u({},e));default:return(0,jh.jsx)("span",m(u({},t),{children:i}))}},Lh=i(35944),Ch=e=>{const{element:t}=e,{appState:{editorProps:{showNodes:i}}}=he(),{tm:s}=ee(),r=(0,th.useSelected)(),o=(0,th.useReadOnly)();return(0,Lh.jsx)("span",{id:"SLATE_"+t.slateId,"data-slate-type":"inline","data-node-type":t.type,css:eh.css`
        display: inline-block;
        border-radius: 4px;

        margin: 0 4px;
        cursor: pointer;
        transition: all 0.2s;

        ${"Latex"!==t.type&&eh.css`
          ${D} {
            background-color: ${s("sys/Light/Fill/01")};
          }
        `}

        ${(r&&!o||i)&&eh.css`
          box-shadow: 0 0 0 2px #b4d5ff;
        `}
      `,children:(0,Lh.jsx)(bh,u({},e))})},Fh=i(35944),Ih=e=>{const{element:t}=e;return t.type in F?(0,Fh.jsx)(Ch,u({},e)):(0,Fh.jsx)(Xd,u({},e))},Sh=i(70917),Bh=i(35944),$h=({attributes:e,children:t,leaf:i})=>{const{tm:s}=ee();return i.bold&&(t=(0,Bh.jsx)("strong",{children:t})),i.code&&(t=(0,Bh.jsx)("code",{css:Sh.css`
          background-color: ${s("sys/Light/Fill/01")};
          border-radius: 3px;
          padding: 2px 4px;
          gap: 10px;
          margin: 0px 6px;
          color: ${s("sys/Light/Text/secondary")};
          opacity: 0.8;
        `,children:t})),i.italic&&(t=(0,Bh.jsx)("em",{children:t})),i.underline&&(t=(0,Bh.jsx)("u",{children:t})),i.strikethrough&&(t=(0,Bh.jsx)("del",{children:t})),i.highlight&&(t=(0,Bh.jsx)("span",{css:Sh.css`
          color: red;
        `,children:t})),i.color&&(t=(0,Bh.jsx)("span",{css:Sh.css`
          color: ${i.color}!important;
        `,children:t})),i.bgColor&&(t=(0,Bh.jsx)("span",{css:Sh.css`
          background-color: ${i.bgColor};
        `,children:t})),(0,Bh.jsx)("span",m(u({},e),{children:t}))},Ah=i(70917),Eh=i(18156),Mh=i(77493),Dh=v(i(26638)),Rh=v(i(73814)),Hh=i(70917),Th=i(67294),Ph=i(35944),Oh=(0,Th.memo)((({onSelect:e})=>{const{isDarkMode:t}=ee();return(0,Ph.jsx)(Hn,{css:Hh.css`
          padding: 0;
        `,children:(0,Ph.jsx)(Rh.default,{data:Dh.default,searchPosition:"none",previewPosition:"none",onEmojiSelect:(t,i)=>{i.preventDefault(),i.stopPropagation(),e(t.native)},locale:"zh",icons:"outline",theme:t?"dark":"light"})})})),zh=i(67294),Nh=()=>{const{scrollLeft:e,scrollTop:t}=(()=>{const{appState:{editorProps:{scrollWrapper:e}}}=he(),[t,i]=(0,zh.useState)(0),[s,r]=(0,zh.useState)(0),o=e||window,n=()=>{o.scrollY?(i(o.scrollY||0),r(o.scrollX||0)):(i(o.scrollTop||0),r(o.scrollLeft||0))};return(0,zh.useEffect)((()=>(o.addEventListener("scroll",n),()=>{o.removeEventListener("scroll",n)})),[o]),{scrollTop:t,scrollLeft:s}})(),{rect:i,domSelection:s}=(()=>{let e,t;try{S&&(t=window.getSelection()||void 0,t)&&(e=t.getRangeAt(0).getBoundingClientRect())}catch(i){}return{rect:e,domSelection:t}})();return{scrollLeft:e,scrollTop:t,rect:i,domSelection:s}},Vh=i(70917),Wh=i(96391),Zh=i(35944),Gh=Y({visible:!1}),Kh=()=>{const e=(0,Wh.useSlate)(),{appState:{visible:t},setAppState:i}=Gh(),{rect:s}=Nh(),r=!!s&&t;return(0,Zh.jsx)(on,{visible:r,onClickOutside:()=>{i({visible:!1})},placement:"bottom-start",render:()=>(0,Zh.jsx)(Al,{children:(0,Zh.jsx)(Oh,{onSelect:t=>{e.insertText(t)}})}),children:(0,Zh.jsx)("div",{css:Vh.css`
          position: fixed;
          top: ${(null==s?void 0:s.bottom)||-9999}px;
          left: ${(null==s?void 0:s.left)||-9999}px;
        `,children:(0,Zh.jsx)("div",{hidden:!0,children:(0,Zh.jsx)(Oh,{onSelect:t=>{e.insertText(t)}})})})})},qh=({mac:e,windows:t},i)=>(0,Eh.isHotkey)(B?e:t,i),_h=i(77493),Jh=i(77493),Uh={"*":"ListItem","-":"ListItem","1.":"ListItem","+":"ListItem",">":"BlockQuote","---":"HorizontalRule","***":"HorizontalRule","#":"Heading1","##":"Heading2","###":"Heading3","```":"CodeBlock",$$:"LatexBlock"},Qh=i(67294),Yh=i(72048),Xh=(e,t,i)=>{const[s,r]=(0,Qh.useState)({}),o=((e,t)=>(0,Qh.useCallback)((0,Yh.debounce)(e,t.wait),[]))((()=>{r({})}),i);(0,Qh.useEffect)((()=>{o()}),t),(0,Qh.useEffect)(e,[s])},ep=i(67294),tp=i(78647),ip=i(70917),sp=i(96391),rp=i(70917),op=i(96391),np=i(35944),lp=()=>{const e=(0,op.useSlate)(),t=(e=>[{title:tl,icon:Ro.IconParagraph,active:ua(e,"Paragraph"),onClick:()=>{fa(e,"Paragraph")}},{title:Yn,icon:Ro.IconH1,active:ua(e,"Heading1"),onClick:()=>{fa(e,"Heading1")}},{title:Xn,icon:Ro.IconH2,active:ua(e,"Heading2"),onClick:()=>{fa(e,"Heading2")}},{title:el,icon:Ro.IconH3,active:ua(e,"Heading3"),onClick:()=>{fa(e,"Heading3")}},{title:il,icon:Ro.IconOrderedList,active:ua(e,"OrderedList"),onClick:()=>{fa(e,"OrderedList")}},{title:sl,icon:Ro.IconBulletList,active:ua(e,"BulletedList"),onClick:()=>{fa(e,"BulletedList")}},{title:rl,icon:Ro.IconBlockquote,active:ua(e,"BlockQuote"),onClick:()=>{fa(e,"BlockQuote")}}])(e),i=Array.from(e.nodes({match(t,i){var s;return 1===i.length&&i[0]===(null==(s=e.selection)?void 0:s.anchor.path[0])}})),[s]=(null==i?void 0:i[0])||[],r=s;return(0,np.jsx)(on,{placement:"bottom-start",render:()=>(0,np.jsx)(Pn,{children:t.map(((e,t)=>{const{icon:i,title:s,active:r,onClick:o}=e;return(0,np.jsxs)(Vn,{onClick:o,children:[(0,np.jsx)("div",{css:rp.css`
                    opacity: ${Number(r)};
                  `,children:(0,np.jsx)(Ro.IconCheck,{})}),(0,np.jsx)(i,{}),(0,np.jsx)("div",{css:rp.css`
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                  `,children:s})]},t)}))}),children:(0,np.jsx)("div",{children:(0,np.jsxs)(Kl,{children:[Nd[(null==r?void 0:r.type)||"Paragraph"],(0,np.jsx)(Ro.IconChevronDown,{css:rp.css`
              font-size: 10px !important;
            `})]})})})},ap=i(76258),cp=i(35944),dp=({color:e,onChange:t})=>{const{tm:i}=ee();return(0,cp.jsx)(Hn,{children:(0,cp.jsx)(ap.CirclePicker,{color:e,circleSize:24,circleSpacing:12,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b",i("sys/Light/Text/tertiary"),i("sys/Light/Text/secondary"),i("sys/Light/Text/primary")],onChange:e=>{t(e.hex)}})})},hp=i(70917),pp=i(67294),gp=i(77493),xp=i(96391),up=i(35944),mp=()=>{const{tm:e}=ee(),t=(0,xp.useSlate)(),{pageState:{color:i},setPageState:s}=Q({color:e("sys/Light/Text/primary")}),[r]=t.nodes({match:e=>!!e.color&&gp.Text.isText(e),mode:"all"}),o=(null==r?void 0:r[0].color)||e("sys/Light/Text/primary");return(0,pp.useEffect)((()=>{s({color:o})}),[o]),(0,up.jsx)(on,{placement:"bottom-start",trigger:"click",render:()=>(0,up.jsx)(Al,{children:(0,up.jsx)(dp,{color:i,onChange:i=>{s({color:i}),t.selection&&(i.toUpperCase()===e("sys/Light/Text/primary")?t.setNodes({color:void 0},{match:gp.Text.isText,split:!0}):t.setNodes({color:i},{match:gp.Text.isText,split:!0}))}})}),children:(0,up.jsx)(Al,{children:(0,up.jsx)(ln,{content:"\u6587\u672c\u989c\u8272",children:(0,up.jsx)(Qo,{children:(0,up.jsx)("div",{css:hp.css`
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid ${e("sys/Light/Fill/01")};
                background-color: ${i};
              `})})})})})},fp=i(67294),wp=i(77493),vp=i(35944),yp=()=>{var e;const t=(0,sp.useSlate)(),i=(0,sp.useReadOnly)(),s=(0,sp.useFocused)(),{rect:r}=Nh(),[o,n]=(0,fp.useState)(!0),{appState:{editorWrapperElement:l}}=he();(0,fp.useEffect)((()=>(document.addEventListener("mousedown",(e=>{0===e.button&&n(!1)})),document.addEventListener("mouseup",(function(e){0===e.button&&n(!0)})),()=>{document.removeEventListener("mousedown",(e=>{0===e.button&&n(!1)})),document.removeEventListener("mouseup",(function(e){0===e.button&&n(!0)}))})),[]);const a=(e=>[{title:nl,icon:Ro.IconBold,shortcut:jl.bold.shortcuts,active:xa(e,"bold"),onClick:()=>{ma(e,"bold")}},{title:ll,icon:Ro.IconItalic,shortcut:jl.italic.shortcuts,active:xa(e,"italic"),onClick:()=>{ma(e,"italic")}},{title:pl,icon:Ro.IconCode,shortcut:jl.code.shortcuts,active:xa(e,"code"),onClick:()=>{ma(e,"code")}},{title:xl,icon:Ro.IconLatex,shortcut:jl.Latex.shortcuts,onClick:()=>{if(e.selection){const t={type:"Latex",tex:e.string(e.selection),children:[{text:""}]};e.insertNode(t)}}},{title:al,icon:Ro.IconLink,shortcut:jl.Link.shortcuts,onClick:()=>{if(e.selection){const t={type:"Link",title:e.string(e.selection),href:"",children:[{text:""}]};e.insertNode(t)}}}])(t),c=(null==(e=t.selection&&t.string(t.selection))?void 0:e.trim())||"",d=!i&&!!r&&s&&!!c&&o,h=null==l?void 0:l.getBoundingClientRect();return(0,vp.jsx)(on,{visible:d,placement:"bottom-start",render:()=>(0,vp.jsx)(Al,{children:(0,vp.jsxs)(Jl,{children:[(0,vp.jsx)(lp,{}),(0,vp.jsx)(Ro.IconRowDivider,{width:1}),(0,vp.jsx)(mp,{}),a.map(((e,t)=>{const{title:i,icon:s,shortcut:r,onClick:o,active:n=!1}=e;return(0,vp.jsx)("div",{children:(0,vp.jsx)(ln,{content:(0,vp.jsxs)(vp.Fragment,{children:[(0,vp.jsx)("div",{css:ip.css`
                        color: #ffffff;
                      `,children:i}),(0,vp.jsx)("div",{css:ip.css`
                        color: #7f7f7f;
                      `,children:r.join(" + ")})]}),children:(0,vp.jsx)(Qo,{active:!!n||void 0,onClick:o,children:(0,vp.jsx)(s,{})})})},t)}))]})}),children:(0,vp.jsx)("div",{css:ip.css`
          position: absolute;
          left: ${((null==r?void 0:r.left)||0)-((null==h?void 0:h.left)||0)}px;
          top: ${((null==r?void 0:r.top)||0)-((null==h?void 0:h.top)||0)+(()=>{var e;if(!t.selection)return 0;const i=t.selection.focus.path,s=t.selection.anchor.path;let r;r=i[0]<s[0]?[i[0]]:[s[0]];const o=Array.from(t.nodes({match:(e,t)=>wp.Path.equals(t,[r[0]])})),n=null==(e=null==o?void 0:o[0])?void 0:e[0],l=null==n?void 0:n.type;return l?"Heading1"===l?38:"Heading2"===l?30:"Heading3"===l?22:20:0})()}px;
        `})})},kp=i(70917),jp=i(96391),bp=i(77493),Lp=i(70917),Cp=i(35944),Fp=({title:e,active:t=!1,onClick:i})=>{const{tm:s}=ee();return(0,Cp.jsx)("div",{css:Lp.css`
        padding: 5px 4px;
        cursor: pointer;
        font-size: 12px;
        line-height: 16px;
        color: ${s(t?"sys/Light/Text/primary":"sys/Light/Text/tertiary")};
        font-weight: ${t?500:400};
        margin-bottom: 2px;
      `,onClick:e=>{e.preventDefault(),e.stopPropagation(),null==i||i()},children:e})},Ip=["Aayla Secura","Adi Gallia","Admiral Dodd Rancit","Admiral Firmus Piett","Admiral Gial Ackbar","Admiral Ozzel","Admiral Raddus","Admiral Terrinald Screed","Admiral Trench","Admiral U.O. Statura","Agen Kolar","Agent Kallus","Aiolin and Morit Astarte","Aks Moe","Almec","Alton Kastle","Amee","AP-5","Armitage Hux","Artoo","Arvel Crynyd","Asajj Ventress","Aurra Sing","AZI-3","Bala-Tik","Barada","Bargwill Tomder","Baron Papanoida","Barriss Offee","Baze Malbus","Bazine Netal","BB-8","BB-9E","Ben Quadinaros","Berch Teller","Beru Lars","Bib Fortuna","Biggs Darklighter","Black Krrsantan","Bo-Katan Kryze","Boba Fett","Bobbajo","Bodhi Rook","Borvo the Hutt","Boss Nass","Bossk","Breha Antilles-Organa","Bren Derlin","Brendol Hux","BT-1","C-3PO","C1-10P","Cad Bane","Caluan Ematt","Captain Gregor","Captain Phasma","Captain Quarsh Panaka","Captain Rex","Carlist Rieekan","Casca Panzoro","Cassian Andor","Cassio Tagge","Cham Syndulla","Che Amanwe Papanoida","Chewbacca","Chi Eekway Papanoida","Chief Chirpa","Chirrut \xcemwe","Ciena Ree","Cin Drallig","Clegg Holdfast","Cliegg Lars","Coleman Kcaj","Coleman Trebor","Colonel Kaplan","Commander Bly","Commander Cody (CC-2224)","Commander Fil (CC-3714)","Commander Fox","Commander Gree","Commander Jet","Commander Wolffe","Conan Antonio Motti","Conder Kyl","Constable Zuvio","Cord\xe9","Cpatain Typho","Crix Madine","Cut Lawquane","Dak Ralter","Dapp","Darth Bane","Darth Maul","Darth Tyranus","Daultay Dofine","Del Meeko","Delian Mors","Dengar","Depa Billaba","Derek Klivian","Dexter Jettster","Dine\xe9 Ellberger","DJ","Doctor Aphra","Doctor Evazan","Dogma","Dorm\xe9","Dr. Cylo","Droidbait","Droopy McCool","Dryden Vos","Dud Bolt","Ebe E. Endocott","Echuu Shen-Jon","Eeth Koth","Eighth Brother","Eirta\xe9","Eli Vanto","Ell\xe9","Ello Asty","Embo","Eneb Ray","Enfys Nest","EV-9D9","Evaan Verlaine","Even Piell","Ezra Bridger","Faro Argyus","Feral","Fifth Brother","Finis Valorum","Finn","Fives","FN-1824","FN-2003","Fodesinbeed Annodue","Fulcrum","FX-7","GA-97","Galen Erso","Gallius Rax",'Garazeb "Zeb" Orrelios',"Gardulla the Hutt","Garrick Versio","Garven Dreis","Gavyn Sykes","Gideon Hask","Gizor Dellso","Gonk droid","Grand Inquisitor","Greeata Jendowanian","Greedo","Greer Sonnel","Grievous","Grummgar","Gungi","Hammerhead","Han Solo","Harter Kalonia","Has Obbit","Hera Syndulla","Hevy","Hondo Ohnaka","Huyang","Iden Versio","IG-88","Ima-Gun Di","Inquisitors","Inspector Thanoth","Jabba","Jacen Syndulla","Jan Dodonna","Jango Fett","Janus Greejatus","Jar Jar Binks","Jas Emari","Jaxxon","Jek Tono Porkins","Jeremoch Colton","Jira","Jobal Naberrie","Jocasta Nu","Joclad Danva","Joh Yowza","Jom Barell","Joph Seastriker","Jova Tarkin","Jubnuk","Jyn Erso","K-2SO","Kanan Jarrus","Karbin","Karina the Great","Kes Dameron","Ketsu Onyo","Ki-Adi-Mundi","King Katuunko","Kit Fisto","Kitster Banai","Klaatu","Klik-Klak","Korr Sella","Kylo Ren","L3-37","Lama Su","Lando Calrissian","Lanever Villecham","Leia Organa","Letta Turmond","Lieutenant Kaydel Ko Connix","Lieutenant Thire","Lobot","Logray","Lok Durd","Longo Two-Guns","Lor San Tekka","Lorth Needa","Lott Dod","Luke Skywalker","Lumat","Luminara Unduli","Lux Bonteri","Lyn Me","Lyra Erso","Mace Windu","Malakili","Mama the Hutt","Mars Guo","Mas Amedda","Mawhonic","Max Rebo","Maximilian Veers","Maz Kanata","ME-8D9","Meena Tills","Mercurial Swift","Mina Bonteri","Miraj Scintel","Mister Bones","Mod Terrik","Moden Canady","Mon Mothma","Moradmin Bast","Moralo Eval","Morley","Mother Talzin","Nahdar Vebb","Nahdonnis Praji","Nien Nunb","Niima the Hutt","Nines","Norra Wexley","Nute Gunray","Nuvo Vindi","Obi-Wan Kenobi","Odd Ball","Ody Mandrell","Omi","Onaconda Farr","Oola","OOM-9","Oppo Rancisis","Orn Free Taa","Oro Dassyne","Orrimarko","Osi Sobeck","Owen Lars","Pablo-Jill","Padm\xe9 Amidala","Pagetti Rook","Paige Tico","Paploo","Petty Officer Thanisson","Pharl McQuarrie","Plo Koon","Po Nudo","Poe Dameron","Poggle the Lesser","Pong Krell","Pooja Naberrie","PZ-4CO","Quarrie","Quay Tolsite","Queen Apailana","Queen Jamillia","Queen Neeyutnee","Qui-Gon Jinn","Quiggold","Quinlan Vos","R2-D2","R2-KT","R3-S6","R4-P17","R5-D4","RA-7","Rab\xe9","Rako Hardeen","Ransolm Casterfo","Rappertunie","Ratts Tyerell","Raymus Antilles","Ree-Yees","Reeve Panzoro","Rey","Ric Oli\xe9","Riff Tamson","Riley","Rinnriyin Di","Rio Durant","Rogue Squadron","Romba","Roos Tarpals","Rose Tico","Rotta the Hutt","Rukh","Rune Haako","Rush Clovis","Ruwee Naberrie","Ryoo Naberrie","Sab\xe9","Sabine Wren","Sach\xe9","Saelt-Marae","Saesee Tiin","Salacious B. Crumb","San Hill","Sana Starros","Sarco Plank","Sarkli","Satine Kryze","Savage Opress","Sebulba","Senator Organa","Sergeant Kreel","Seventh Sister","Shaak Ti","Shara Bey","Shmi Skywalker","Shu Mai","Sidon Ithano","Sifo-Dyas","Sim Aloo","Siniir Rath Velus","Sio Bibble","Sixth Brother","Slowen Lo","Sly Moore","Snaggletooth","Snap Wexley","Snoke","Sola Naberrie","Sora Bulq","Strono Tuggs","Sy Snootles","Tallissan Lintra","Tarfful","Tasu Leech","Taun We","TC-14","Tee Watt Kaa","Teebo","Teedo","Teemto Pagalies","Temiri Blagg","Tessek","Tey How","Thane Kyrell","The Bendu","The Smuggler","Thrawn","Tiaan Jerjerrod","Tion Medon","Tobias Beckett","Tulon Voidgazer","Tup","U9-C4","Unkar Plutt","Val Beckett","Vanden Willard","Vice Admiral Amilyn Holdo","Vober Dand","WAC-47","Wag Too","Wald","Walrus Man","Warok","Wat Tambor","Watto","Wedge Antilles","Wes Janson","Wicket W. Warrick","Wilhuff Tarkin","Wollivan","Wuher","Wullf Yularen","Xamuel Lennox","Yaddle","Yarael Poof","Yoda","Zam Wesell","Zev Senesca","Ziro the Hutt","Zuckuss"],Sp=Ip.map((e=>({type:"user",name:e,avatar:"https://assets.leetcode.cn/aliyun-lc-upload/users/dong-dong-e0/avatar_162518768.png"}))),Bp=Ip.map((e=>({type:"question",name:e,frontendId:Math.floor(1e3*Math.random()).toString(),difficulty:"EASY"}))),$p=({searchKey:e})=>{const{pageState:{userList:t,questionList:i,lastSearchKey:s},setPageState:r}=Q({lastSearchKey:e,userList:[],questionList:[]}),{appState:{editorProps:{onSearchUser:o,onSearchQuestion:n}}}=he();return Xh((()=>{var t;e&&e!==s&&(t=e,k(void 0,null,(function*(){const e=null==t?void 0:t.slice(1);if(z){const[t=[],i=[]]=yield Promise.all([null==o?void 0:o(e),null==n?void 0:n(e)]);r({userList:t,questionList:i})}else r({userList:Sp.filter((t=>t.name.toLowerCase().replace(/\s/g,"").includes(e.toLowerCase().replace(/\s/g,"")))),questionList:Bp.filter((t=>t.name.toLowerCase().replace(/\s/g,"").includes(e.toLowerCase().replace(/\s/g,""))))})})),r({lastSearchKey:e}))}),[e,s],{wait:200}),{userList:t,questionList:i}},Ap=i(35944),Ep={EASY:"\u7b80\u5355",MEDIUM:"\u4e2d\u7b49",HARD:"\u56f0\u96be"},Mp=()=>{const{tm:e}=ee(),{pageState:{isUserTab:t},setPageState:i}=Q({isUserTab:!1}),s=(0,jp.useSlate)(),r=(0,jp.useFocused)(),{rect:o}=Nh(),n=(e=>{let t="";const{selection:i}=e;if(i&&bp.Range.isCollapsed(i)){const{path:s}=i.focus,r={path:s,offset:0},o=i.focus,n=e.string(e.range(r,o));if(n.includes("@")){const e=("@"+n.split("@").reverse()[0]).match(/@\S*?$/g)||[];if((null==e?void 0:e.length)>0){const i=e.reverse()[0].trim();i&&(t=i)}}}return t})(s),l=!!n&&!!o&&!!s.selection&&r;ge(l);const{userList:a,questionList:c}=$p({searchKey:n}),d=null==n?void 0:n.slice(1),h=()=>(0,Ap.jsx)("div",{css:kp.css`
          color: ${e("sys/Light/Text/tertiary")};
          font-size: 14px;
          padding-left: 2px;
          padding-top: ${d?2:6}px;
        `,children:d?"\u65e0\u5339\u914d\u9879":"\u8bf7\u8f93\u5165\u5173\u952e\u5b57"});return(0,Ap.jsx)(on,{placement:"bottom-start",visible:l,render:()=>(0,Ap.jsx)(Al,{children:(0,Ap.jsx)(Pn,{css:kp.css`
                width: 250px;
                max-height: 400px;
                overflow-x: hidden;
                overflow-y: scroll;
                padding-top: 0;
              `,children:d?(0,Ap.jsxs)(Ap.Fragment,{children:[(0,Ap.jsxs)("div",{css:kp.css`
                      position: sticky;
                      left: 0;
                      top: 0px;
                      z-index: 2;
                      width: 100%;
                      padding-top: 4px;
                      background-color: ${e("sys/Light/Layer/01")};
                    `,children:[(0,Ap.jsxs)("div",{css:kp.css`
          font-size: 12px;
          color: ${e("sys/Light/Text/quaternary")};
          padding: 4px;
          word-break: break-all;
        `,children:["\u201c",d,"\u201d\u7684\u641c\u7d22\u7ed3\u679c"]}),(0,Ap.jsxs)(oe,{children:[(0,Ap.jsx)(Fp,{title:`\u9898\u76ee\uff08${c.length}\uff09`,active:!t,onClick:()=>{i({isUserTab:!1})}}),(0,Ap.jsx)(Fp,{title:`\u7528\u6237\uff08${a.length}\uff09`,active:t,onClick:()=>{i({isUserTab:!0})}})]})]}),t?a.length?a.map(((e,t)=>(0,Ap.jsxs)(Vn,{css:kp.css`
            height: auto;
            width: 100%;
            padding: 4px;
            border-radius: 5px;
          `,onClick:t=>{t.preventDefault(),t.stopPropagation();const i={type:"Mention",item:e,children:[{text:""}]};Array.from(Array(d.length+1)).forEach((()=>{s.deleteBackward("character")})),s.insertNodes(i),s.move()},children:[(0,Ap.jsx)("img",{css:kp.css`
              width: 18px;
              height: 18px;
              border-radius: 50%;
            `,src:e.avatar,onError:e=>{e.target.src=O}}),(0,Ap.jsx)("div",{children:e.name||"\u6682\u65e0\u540d\u79f0"})]},t))):h():c.length?c.map(((t,i)=>(0,Ap.jsx)(Vn,{css:kp.css`
            height: auto;
            width: 100%;
            padding: 4px;
            border-radius: 5px;
          `,onClick:e=>{e.preventDefault(),e.stopPropagation();const i={type:"Mention",item:m(u({},t),{name:t.frontendId+". "+t.name}),children:[{text:""}]};Array.from(Array(d.length+1)).forEach((()=>{s.deleteBackward("character")})),s.insertNodes(i),s.move()},children:(0,Ap.jsxs)(qn,{children:[(0,Ap.jsxs)(oe,{gap:15,children:[(0,Ap.jsx)(Ro.IconAlgorithm,{}),(0,Ap.jsx)("div",{children:t.name||"\u6682\u65e0\u6807\u9898"})]}),(0,Ap.jsxs)(oe,{gap:15,css:kp.css`
                font-size: 12px;
                line-height: 16px;
                color: ${e("sys/Light/Text/tertiary")};
              `,children:[(0,Ap.jsx)(Ro.IconAlgorithm,{css:kp.css`
                  opacity: 0;
                `}),(0,Ap.jsxs)(oe,{gap:6,children:[(0,Ap.jsxs)("div",{children:["# ",t.frontendId]}),(0,Ap.jsx)(Ro.IconRowDivider,{width:1,height:10}),t.difficulty&&(0,Ap.jsx)("div",{children:Ep[t.difficulty]})]})]})]})},i))):h()]}):h()})}),children:(0,Ap.jsx)("div",{hidden:!l,css:kp.css`
          position: fixed;
          left: ${(null==o?void 0:o.left)||-9999}px;
          top: ${(null==o?void 0:o.bottom)||-9999}px;
        `})})},Dp=i(70917),Rp=i(96391),Hp=i(77493),Tp=i(35944),Pp=()=>{const e=(0,Rp.useSlate)(),t=(0,Rp.useFocused)(),{rect:i}=Nh(),{searchStr:s,element:r}=(e=>{let t,i="";const{selection:s}=e;if(s&&Hp.Range.isCollapsed(s)){const{path:r}=s.focus;if(2===r.length&&0===r[1]){const o=e.node([r[0]])[0];if("Paragraph"===o.type||"Heading1"===o.type||"Heading2"===o.type||"Heading3"===o.type){const n={path:r,offset:0},l=s.focus,a=e.string(e.range(n,l));a.startsWith("/")&&!a.includes(" ")&&(i=a,t=o)}}}return{searchStr:i,element:t}})(e),o=!!s&&!!i&&!!e.selection&&t&&!!r;return ge(o),(0,Tp.jsx)(on,{placement:"bottom-start",visible:o,render:e=>(0,Tp.jsx)(Al,{children:o?(0,Tp.jsx)(Dd,{useKeyboard:!0,searchKey:s.slice(1),element:r,onHide:()=>{null==e||e.hide()}}):null}),children:(0,Tp.jsx)("div",{hidden:!o,css:Dp.css`
          position: fixed;
          left: ${null==i?void 0:i.left}px;
          top: ${null==i?void 0:i.top}px;
          height: ${null==i?void 0:i.height}px;
        `})})},Op=i(35944),zp=e=>{const t=u({placeholder:"\u8f93\u5165 \u201c/\u201d \u5feb\u901f\u6dfb\u52a0\u5185\u5bb9",showMenu:!1,isDark:!1,readOnly:!1,showNodes:!1,initValue:q()},e),{tm:i,toggleDarkTheme:s}=ee(),r=he(),o=(0,Dl.useMemo)((()=>(e=>{const{deleteBackward:t,insertText:i}=e;return e.insertText=t=>{const{selection:s}=e;if(t.endsWith(" ")&&s&&Jh.Range.isCollapsed(s)){const{anchor:i}=s,r=Jh.Editor.above(e,{match:t=>_h.Element.isElement(t)&&Jh.Editor.isBlock(e,t)}),o=r?r[1]:[],n={anchor:i,focus:Jh.Editor.start(e,o)},l=Jh.Editor.string(e,n)+(null==t?void 0:t.slice(0,-1)),a=Uh[l],c="1."===l;if(a){if(e.select(n),Jh.Range.isCollapsed(n)||e.delete(),"CodeBlock"===a?e.setNodes({type:a,tabs:[{language:"python",code:""}]},{match:t=>_h.Element.isElement(t)&&Jh.Editor.isBlock(e,t)}):"LatexBlock"===a?e.setNodes({type:a,tex:"sinx"},{match:t=>_h.Element.isElement(t)&&Jh.Editor.isBlock(e,t)}):e.setNodes({type:a},{match:t=>_h.Element.isElement(t)&&Jh.Editor.isBlock(e,t)}),"ListItem"===a)if(c){const t={type:"OrderedList",children:[]};e.wrapNodes(t,{match:e=>!Jh.Editor.isEditor(e)&&_h.Element.isElement(e)&&"ListItem"===e.type})}else{const t={type:"BulletedList",children:[]};e.wrapNodes(t,{match:e=>!Jh.Editor.isEditor(e)&&_h.Element.isElement(e)&&"ListItem"===e.type})}return}}i(t)},e.deleteBackward=(...i)=>{const{selection:s}=e;if(s&&Jh.Range.isCollapsed(s)){const r=Jh.Editor.above(e,{match:t=>_h.Element.isElement(t)&&Jh.Editor.isBlock(e,t)});if(r){const[t,i]=r,o=Jh.Editor.start(e,i);if(!Jh.Editor.isEditor(t)&&_h.Element.isElement(t)&&"Paragraph"!==t.type&&_h.Point.equals(s.anchor,o))return e.setNodes({type:"Paragraph"}),void("ListItem"===t.type&&e.unwrapNodes({match:e=>!Jh.Editor.isEditor(e)&&_h.Element.isElement(e)&&("BulletedList"===e.type||"OrderedList"===e.type),split:!0}))}t(...i)}},e})((e=>{const{isVoid:t}=e;return e.isVoid=e=>Object.values(I).includes(e.type)||t(e),e})((e=>{const{isInline:t}=e;return e.isInline=e=>Object.values(F).includes(e.type)||t(e),e})((0,Tl.withHistory)((0,Hl.withReact)((0,Rl.createEditor)())))))),[]),n=(0,Dl.useCallback)((e=>(0,Op.jsx)(Ih,u({},e))),[]),l=(0,Dl.useCallback)((e=>(0,Op.jsx)($h,u({},e))),[]),a=(e=>{const{appState:{editorProps:{onSaveDraft:t},disableSystemKeyEvent:i}}=he(),s=Gh();if(!i)return i=>{var r,o,n,l,a,c,d,h;try{if((0,Eh.isHotkey)("mod+s",i))return i.preventDefault(),void(null==t||t(e.children));if((0,Eh.isHotkey)("mod+a",i))return i.preventDefault(),void e.select({anchor:e.start([]),focus:e.end([])});if((0,Eh.isHotkey)("tab",i))return i.preventDefault(),void Mh.Editor.insertText(e," ".repeat(4));if((0,Eh.isHotkey)("space",i)&&e.selection){if(xa(e,"code")){const t=Array.from(e.nodes({match:e=>!!e.code})),[s,r]=t[0];if(Mh.Range.isCollapsed(e.selection)){const t=e.end(r),s=e.end(e.selection);if(Mh.Point.equals(t,s))return i.preventDefault(),e.insertText(" "),e.select({anchor:s,focus:{path:s.path,offset:s.offset+1}}),e.setNodes({code:!1},{match:Mh.Text.isText,split:!0}),void e.collapse({edge:"end"})}return}const{offset:t=0}=e.before(e.selection)||{};if(t>3)return i.preventDefault(),void e.insertNode({text:" "})}if((0,Eh.isHotkey)("enter",i)&&e.selection){const[t,s]=e.parent(e.selection);if("BlockQuote"===t.type){e.collapse({edge:"focus"});const{children:s=[]}=t;if(s.length>0){const t=s[s.length-1].text.split("\n");return""!==t[t.length-1].trim()?(i.preventDefault(),void e.insertText("\n")):(i.preventDefault(),e.deleteBackward("character"),void e.insertNode(q()[0]))}}if(e.isVoid(t))return i.preventDefault(),void e.insertNode(q()[0]);if(t&&"ListItem"===t.type&&1===(null==t?void 0:t.children.length)&&""===(null==t?void 0:t.children[0].text))return i.preventDefault(),e.deleteBackward("character"),e.insertBreak(),void e.deleteBackward("character");let n;try{n=e.parent(s)[0]}catch(p){}if(t&&n&&("BulletedList"===(null==n?void 0:n.type)||"OrderedList"===(null==n?void 0:n.type))&&"Paragraph"===t.type&&1===(null==t?void 0:t.children.length)&&""===(null==(o=null==(r=null==t?void 0:t.children)?void 0:r[0])?void 0:o.text)){i.preventDefault();const t=[s[0]+1];return e.deleteBackward("character"),e.insertNode(q()[0],{at:t}),void e.select(t)}const l=[e.selection.anchor.path[0]],a=Array.from(e.nodes({match:(e,t)=>Mh.Path.equals(t,l)}))[0][0];return Mh.Range.isCollapsed(e.selection)&&Mh.Point.equals(e.end(l),e.selection.focus)&&("Heading1"===a.type||"Heading2"===a.type||"Heading3"===a.type)?(i.preventDefault(),void e.insertNode(q()[0])):void 0}if((0,Eh.isHotkey)("backspace",i)&&e.selection){if(Mh.Range.equals(e.selection,e.range([])))return i.preventDefault(),e.select([]),e.delete(),e.insertNode(q()[0]),e.select([0]),void e.delete();let t;try{const i=e.parent(null==e?void 0:e.selection);t=i[0]}catch(p){!z&&console.error(p)}if(!t)return i.preventDefault(),void e.delete();if(t&&"Paragraph"===t.type&&1===(null==t?void 0:t.children.length)&&""===(null==(l=null==(n=null==t?void 0:t.children)?void 0:n[0])?void 0:l.text)){const s=e.children.map((e=>e.slateId)).indexOf(t.slateId);if(s>0){const t=null==(a=null==e?void 0:e.children)?void 0:a[s-1];if(e.isVoid(t)){const s=va(e,t.slateId);return i.preventDefault(),void e.select(s)}}}const s=va(e,t.slateId);if(0!==s.length){let r;try{r=e.parent(s)[0]}catch(p){!z&&console.error(p)}return r?r&&"BulletedList"===r.type&&(t&&"ListItem"===(null==t?void 0:t.type)||"Paragraph"===(null==t?void 0:t.type))&&1===(null==(c=null==t?void 0:t.children)?void 0:c.length)&&""===(null==(h=null==(d=null==t?void 0:t.children)?void 0:d[0])?void 0:h.text)?(i.preventDefault(),void e.unwrapNodes({match:e=>e.slateId===t.slateId,at:[]})):void 0:(i.preventDefault(),void e.delete())}if("Paragraph"===t.type&&JSON.stringify(s)===JSON.stringify([0])&&""===Mh.Node.string(t))return i.preventDefault(),void e.delete()}if(qh({mac:"cmd+alt+0",windows:"ctrl+shift+0"},i))return i.preventDefault(),void fa(e,"Paragraph");if(qh({mac:"cmd+alt+1",windows:"ctrl+shift+1"},i))return i.preventDefault(),void fa(e,"Heading1");if(qh({mac:"cmd+alt+2",windows:"ctrl+shift+2"},i))return i.preventDefault(),void fa(e,"Heading2");if(qh({mac:"cmd+alt+3",windows:"ctrl+shift+3"},i))return i.preventDefault(),void fa(e,"Heading3");if(qh({mac:"cmd+alt+4",windows:"ctrl+shift+4"},i))return i.preventDefault(),void fa(e,"OrderedList");if(qh({mac:"cmd+alt+5",windows:"ctrl+shift+5"},i))return i.preventDefault(),void fa(e,"BulletedList");if((0,Eh.isHotkey)("mod+.",i))return i.preventDefault(),void fa(e,"BlockQuote");if((0,Eh.isHotkey)("mod+k",i))return i.preventDefault(),void e.insertNode({type:"Link",title:e.selection&&e.string(e.selection)||"\u8bf7\u8f93\u5165\u94fe\u63a5\u6807\u9898",href:"",children:[{text:""}]});if((0,Eh.isHotkey)("mod+e",i))return i.preventDefault(),void(e.selection?s.setAppState({visible:!0}):s.setAppState({visible:!1}));if((0,Eh.isHotkey)("mod+shift+c",i))return i.preventDefault(),void e.insertNode({type:"CodeBlock",tabs:[{language:"python",code:e.selection?e.string(e.selection):""}],children:[{text:""}]});if(qh({mac:"cmd+ctrl+l",windows:"alt+shift+l"},i))return i.preventDefault(),void e.insertNode({type:"Latex",tex:e.selection&&e.string(e.selection)||"sinx",children:[{text:""}]});if((0,Eh.isHotkey)("mod+shift+l",i))return i.preventDefault(),void e.insertNode({type:"LatexBlock",tex:e.selection&&e.string(e.selection)||"sinx",children:[{text:""}]});if((0,Eh.isHotkey)("mod+b",i))return i.preventDefault(),void ma(e,"bold");if((0,Eh.isHotkey)("mod+i",i))return i.preventDefault(),void ma(e,"italic");if((0,Eh.isHotkey)("mod+u",i))return i.preventDefault(),void ma(e,"underline");if(qh({mac:"cmd+ctrl+c",windows:"alt+shift+c"},i))return i.preventDefault(),void ma(e,"code")}catch(p){return void(!z&&console.error(p))}}})(o),c=(0,ep.useRef)(null);(0,Dl.useEffect)((()=>{r.setAppState({editorProps:t,editorWrapperElement:null==c?void 0:c.current,editorStoreReady:!0,editorInstance:o})}),[e,c,o]),(0,Dl.useEffect)((()=>{var e;null==(e=t.onCreate)||e.call(t,o)}),[]),(0,Dl.useEffect)((()=>{s(!!t.isDark)}),[t.isDark]);const d=$n(o.children),h=!!t.showMenu&&d.length>0&&!!t.readOnly&&!A,p=t.initValue||q(),[g,x]=(0,Dl.useState)(p);return Xh((()=>{var e;null==(e=t.onValueChange)||e.call(t,g),((e,t)=>{const i=[],s=(t,r)=>{if(t.type&&t.children){const o=r.split("_").map(Number);if(t.slateId)i.push({slateId:t.slateId,path:o});else{const t=(0,tp.nanoid)();e.setNodes({slateId:t},{at:o}),i.push({slateId:t,path:o})}t.children&&t.children.length>0&&t.children.forEach(((e,t)=>{s(e,[r,t].join("_"))}))}};t.forEach(((e,t)=>{s(e,t.toString())}));const r=[];for(let o=0;o<i.length;o++){const{slateId:t,path:s}=i[o];if(r.includes(t)){const t=(0,tp.nanoid)();e.setNodes({slateId:t},{at:s})}else r.push(t)}})(o,g)}),[JSON.stringify(g)],{wait:400}),(0,Op.jsx)(Hl.Slate,{editor:o,initialValue:p,onValueChange:x,children:(0,Op.jsxs)("div",{id:t.id,ref:c,css:Ah.css`
          position: relative;
          width: 100%;
          font-family: "PingFang SC";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          background-color: ${t.isDark?"transparent":"#fff"};

          box-sizing: border-box;
          color: ${i("sys/Light/Text/primary")};

          // 使placeholder居中
          [data-slate-placeholder] {
            top: unset !important;
          }

          svg {
            color: ${i("sys/Light/Icon/primary")};
            font-size: 14px;
            font-weight: 400;

            path {
              color: ${i("sys/Light/Icon/primary")};
              stroke-width: 1.33;
            }

            ${$&&Ah.css`
              &::-webkit-scrollbar {
                display: none;
              }
            `}
          }

          ${t.readOnly&&E&&Ah.css`
            * {
              user-select: none;
            }
          `}
        `,style:t.style,children:[h&&(0,Op.jsx)(Sn,{menu:d}),r.appState.editorStoreReady&&(0,Op.jsx)(Hl.Editable,{onClick:e=>{var t;if(0===o.children.length)return;const i=[o.children.length-1],s=o.node(i)[0],r="SLATE_"+s.slateId,n=null==(t=document.getElementById(r))?void 0:t.getBoundingClientRect();if(!n)return;const l=n.y+n.height;if(e.clientY-l>10){e.preventDefault();if(jd(o,s))o.select(i),o.collapse({edge:"end"});else{const e=[o.children.length];o.insertNode(q()[0],{at:e}),o.select(e),o.collapse()}}},css:Ah.css`
              border: ${t.showNodes?1:0}px solid red;
              position: relative;
              outline: none;
              word-wrap: break-word;
              word-break: break-all;
              white-space: pre-wrap;
              white-space: break-spaces;
              -webkit-font-variant-ligatures: none;
              font-variant-ligatures: none;
              font-feature-settings: "liga" 0;
              padding: 3px;

              ${!t.readOnly&&!A&&Ah.css`
                padding-bottom: 50vh;
              `}

              ${null==t?void 0:t.css}
            `,placeholder:t.readOnly?"":G(o.children)?t.placeholder:"",className:t.className,autoFocus:!1,renderElement:n,renderLeaf:l,onKeyDown:a,readOnly:t.readOnly,spellCheck:!1}),!t.readOnly&&(0,Op.jsxs)(Op.Fragment,{children:[(0,Op.jsx)(Pp,{}),(0,Op.jsx)(Ud,{}),(0,Op.jsx)(yp,{}),(0,Op.jsx)(Mp,{}),(0,Op.jsx)(Kh,{}),(0,Op.jsx)($d,{})]})]})})},Np=i(77493)}}]);
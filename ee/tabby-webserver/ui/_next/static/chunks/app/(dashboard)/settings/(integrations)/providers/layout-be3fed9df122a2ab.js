(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6807],{14375:function(e,t,n){"use strict";n.d(t,{j:function(){return s}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},s=(e,t)=>n=>{var s;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:a}=t,o=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],i=null==a?void 0:a[e];if(null===t)return null;let s=r(t)||r(i);return l[e][s]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(s=t.compoundVariants)||void 0===s?void 0:s.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...u}[t]):({...a,...u})[t]===n})?[...e,n,r]:e},[]);return i(e,o,c,null==n?void 0:n.class,null==n?void 0:n.className)}},59563:function(e,t,n){Promise.resolve().then(n.bind(n,69145)),Promise.resolve().then(n.bind(n,57830))},69145:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(36164),i=n(3546),s=n(70652),l=n.n(s),a=n(11978),o=n(14375),u=n(74248),c=n(63795),d=n(30601),f=n(11529);let m=(0,o.j)("flex items-center gap-1 rounded-lg px-3 py-2 transition-all hover:bg-accent",{variants:{state:{selected:"bg-accent","not-selected":""}},defaultVariants:{state:"not-selected"}});function v(e){let{className:t}=e,[n]=(0,d.Hb)(),i=n?{height:"calc(100vh - ".concat(d.wt," - 4rem)")}:{height:"calc(100vh - 4rem)"};return(0,r.jsxs)("div",{className:(0,u.cn)("sticky top-16 space-y-1 overflow-y-auto border-r pr-4 text-sm font-medium",t),style:i,children:[(0,r.jsx)(h,{href:"/settings/providers/git",children:"Git"}),f.K.map(e=>(0,r.jsx)(h,{href:"/settings/providers/".concat(e.name),children:e.meta.displayName},e.name)),(0,r.jsxs)(h,{href:"/settings/providers/web",children:["Web",(0,r.jsx)(c.C,{variant:"outline",className:"h-3.5 border-secondary-foreground/60 px-1.5 text-[10px] text-secondary-foreground/60",children:"Beta"})]})]})}function h(e){let{href:t,children:n}=e,s=(0,a.usePathname)(),o=i.useMemo(()=>{var e;let n=null===(e=s.match(/^(\/settings\/providers\/[\w-]+)/))||void 0===e?void 0:e[1];return n===t},[s,t]);return(0,r.jsx)(l(),{className:m({state:o?"selected":"not-selected"}),href:t,children:n})}},11529:function(e,t,n){"use strict";n.d(t,{K:function(){return i}});var r=n(18500);let i=[{name:"github",enum:r.q6.Github,meta:{displayName:"GitHub"}},{name:"github-self-hosted",enum:r.q6.GithubSelfHosted,meta:{displayName:"GitHub Self-Hosted"}},{name:"gitlab",enum:r.q6.Gitlab,meta:{displayName:"GitLab"}},{name:"gitlab-self-hosted",enum:r.q6.GitlabSelfHosted,meta:{displayName:"GitLab Self-Hosted"}}]},30601:function(e,t,n){"use strict";n.d(t,{Hb:function(){return m},wt:function(){return c},xc:function(){return v},yo:function(){return f}});var r=n(36164),i=n(3546),s=n(74630),l=n(36327),a=n(80605),o=n(74248),u=n(81565);let c="3.5rem",d=i.createContext({}),f=e=>{let{children:t}=e,n=(0,a.UA)(),[l,o]=i.useState(!1);return i.useEffect(()=>{let e=window.self!==window.top;e||(0,s.Z)(n)||o(n)},[n]),(0,r.jsx)(d.Provider,{value:{isShowDemoBanner:l,setIsShowDemoBanner:o},children:t})};function m(){let{isShowDemoBanner:e,setIsShowDemoBanner:t}=i.useContext(d);return[e,t]}function v(){let[e,t]=m(),{data:n}=(0,l.Z)("https://api.github.com/repos/TabbyML/tabby",e=>fetch(e).then(e=>e.json()));return(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center justify-between bg-primary px-4 text-primary-foreground transition-all md:px-5",{"opacity-100 pointer-events-auto":e,"opacity-0 pointer-events-none":!e}),style:e?{height:c}:{height:0},children:[(0,r.jsxs)("a",{href:"https://links.tabbyml.com/schedule-a-demo",target:"_blank",className:"flex items-center gap-x-2 text-xs font-semibold underline md:text-sm",children:[(0,r.jsx)("span",{children:"\uD83D\uDCC6"}),(0,r.jsx)("span",{children:"Book a 30-minute product demo."})]}),(0,r.jsxs)("div",{className:"flex items-center gap-x-4 md:gap-x-8",children:[(0,r.jsxs)("a",{href:"https://github.com/TabbyML/tabby",target:"_blank",className:"flex items-center transition-all hover:opacity-70",children:[(0,r.jsx)(u.IconGithub,{}),(0,r.jsxs)("div",{className:"ml-2 hidden md:block",children:[(0,r.jsx)("p",{className:"text-xs font-semibold",children:"TabbyML/tabby"}),(0,r.jsxs)("div",{className:(0,o.cn)("flex items-center text-xs transition-all",{"h-4 opacity-70":n,"h-0 opacity-0":!n}),children:[(0,r.jsx)(u.IconStar,{className:"mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.stargazers_count}),(0,r.jsx)(u.IconGitFork,{className:"ml-2 mr-1 h-2.5 w-2.5"}),(0,r.jsx)("span",{children:null==n?void 0:n.forks_count})]})]})]}),(0,r.jsx)(u.IconClose,{className:"cursor-pointer transition-all hover:opacity-70",onClick:()=>t(!1)})]})]})}},63795:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(36164);n(3546);var i=n(14375),s=n(74248);let l=(0,i.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function a(e){let{className:t,variant:n,...i}=e;return(0,r.jsx)("div",{className:(0,s.cn)(l({variant:n}),t),...i})}},57830:function(e,t,n){"use strict";n.r(t),n.d(t,{ScrollArea:function(){return a},ScrollBar:function(){return o}});var r=n(36164),i=n(3546),s=n(50778),l=n(74248);let a=i.forwardRef((e,t)=>{let{className:n,children:i,...a}=e;return(0,r.jsxs)(s.fC,{ref:t,className:(0,l.cn)("relative overflow-hidden",n),...a,children:[(0,r.jsx)(s.l_,{className:"h-full w-full rounded-[inherit] [&>div]:!block",children:i}),(0,r.jsx)(o,{}),(0,r.jsx)(s.Ns,{})]})});a.displayName=s.fC.displayName;let o=i.forwardRef((e,t)=>{let{className:n,orientation:i="vertical",...a}=e;return(0,r.jsx)(s.gb,{ref:t,orientation:i,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===i&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===i&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...a,children:(0,r.jsx)(s.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=s.gb.displayName},80605:function(e,t,n){"use strict";n.d(t,{UA:function(){return d},Uw:function(){return u},c7:function(){return o},jJ:function(){return c},xG:function(){return a}});var r=n(40055),i=n(43240);let s=(0,i.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n"),l=()=>{let[{data:e}]=(0,r.aM)({query:s});return null==e?void 0:e.serverInfo},a=()=>{var e;return null===(e=l())||void 0===e?void 0:e.isChatEnabled},o=()=>{var e;return null===(e=l())||void 0===e?void 0:e.isAdminInitialized},u=()=>{var e;return null===(e=l())||void 0===e?void 0:e.isEmailConfigured},c=()=>{var e;return null===(e=l())||void 0===e?void 0:e.allowSelfSignup},d=()=>{var e;return null===(e=l())||void 0===e?void 0:e.isDemoMode}},70652:function(e,t,n){e.exports=n(54007)},11978:function(e,t,n){e.exports=n(77280)},57541:function(e,t,n){"use strict";n.d(t,{gm:function(){return s}});var r=n(3546);let i=(0,r.createContext)(void 0);function s(e){let t=(0,r.useContext)(i);return e||t||"ltr"}},72205:function(e,t,n){"use strict";n.d(t,{WV:function(){return a},jH:function(){return o}});var r=n(65122),i=n(3546),s=n(30171),l=n(74047);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=(0,i.forwardRef)((e,n)=>{let{asChild:s,...a}=e,o=s?l.g7:t;return(0,i.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,i.createElement)(o,(0,r.Z)({},a,{ref:n}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function o(e,t){e&&(0,s.flushSync)(()=>e.dispatchEvent(t))}},36327:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(21454),i=n(54859);let s=(0,i.xD)(r.ZP,e=>(t,n,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,e(t,n,r)))}},function(e){e.O(0,[7998,5498,4007,9739,1454,778,9736,1565,3375,5289,1744],function(){return e(e.s=59563)}),_N_E=e.O()}]);
import{p as D,u as z,g as B,q as G,t as x,v as J,x as K,y as T,h as C,j as b,z as U,A,m as t,R as P,B as N,C as X,D as Y,E as Z,F as _,G as ee,S as te,s as se,H as ae,I as le,J as re,K as ue,L as oe,M as ne}from"./app-6f96cf09.js";const ce=()=>{const l=new Worker(`/dc-note/${D.worker}`,{}),o=[];return l.addEventListener("message",({data:a})=>{const{resolve:p}=o.shift();p(a)}),{search:(a,p,d)=>new Promise((u,h)=>{l.postMessage({query:a,locale:p,options:d}),o.push({resolve:u,reject:h})}),terminate:()=>{l.terminate(),o.forEach(({reject:a})=>a(new Error("Worker has been terminated.")))}}},ie="search-pro-result-history",v=z(ie,[]),ve=()=>{const{resultHistoryCount:l}=D,o=l>0;return{enabled:o,resultHistory:v,addResultHistory:a=>{o&&(v.value.length<l?v.value=[a,...v.value]:v.value=[a,...v.value.slice(0,l-1)])},removeResultHistory:a=>{v.value=[...v.value.slice(0,a),...v.value.slice(a+1)]}}},pe=l=>{const o=te(),a=x(),{search:p,terminate:d}=ce(),u=C(!1),h=se([]),R=oe(y=>{u.value=!0,y?p(y,a.value,o).then(g=>{h.value=g,u.value=!1}):(h.value=[],u.value=!1)},D.delay);return A([l,a],()=>R(l.value),{immediate:!0}),{searching:u,results:h,terminate:d}};var de=B({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(l,{emit:o}){const a=ae(),p=G(),d=x(),u=J(K),{addQueryHistory:h}=le(),{enabled:R,resultHistory:y,addResultHistory:g,removeResultHistory:F}=ve(),$=T(l,"query"),{results:m,searching:I}=pe($),c=C(0),r=C(0),L=b(()=>y.value.length>0),k=b(()=>m.value.length>0),H=b(()=>m.value[c.value]||null),w=e=>{const[s,n]=e.split("#");return p.resolve({name:s,hash:`#${n}`}).href},Q=()=>{c.value=c.value>0?c.value-1:m.value.length-1,r.value=H.value.contents.length-1},M=()=>{c.value=c.value<m.value.length-1?c.value+1:0,r.value=0},O=()=>{r.value<H.value.contents.length-1?r.value=r.value+1:M()},V=()=>{r.value>0?r.value=r.value-1:Q()},S=e=>e.map(s=>ne(s)?s:t(s[0],s[1])),E=e=>{if(e.type==="custom"){const s=re[e.index]||"$content",[n,f=""]=ue(s)?s[d.value].split("$content"):s.split("$content");return S([n,...e.display,f])}return S(e.display)},q=()=>{c.value=0,r.value=0,o("updateQuery",""),o("close")};return U("keydown",e=>{if(k.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")O();else if(e.key==="Enter"){const s=H.value.contents[r.value],n=w(s.id);a.value.path!==n&&(h(l.query),g(s),p.push(n),q())}}}),A([c,r],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:$.value?!k.value:!L.value}],id:"search-pro-results"},$.value===""?L.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.history),y.value.map((e,s)=>t(P,{to:w(e.id),class:["search-pro-result-item",{active:r.value===s}],onClick:()=>{q()}},()=>[t(N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",E(e))]),t("button",{class:"search-pro-close-icon",onClick:n=>{n.preventDefault(),n.stopPropagation(),F(s)}},t(X))]))])):R?u.value.emptyHistory:u.value.emptyResult:I.value?t(Y,{hint:u.value.searching}):k.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},n)=>{const f=c.value===n;return t("li",{class:["search-pro-result-list-item",{active:f}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),s.map((i,W)=>{const j=f&&r.value===W;return t(P,{to:w(i.id),class:["search-pro-result-item",{active:j,"aria-selected":j}],onClick:()=>{h(l.query),g(i),q()}},()=>[i.type==="content"?null:t(i.type==="title"?Z:i.type==="heading"?_:ee,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[i.type==="content"&&i.header?t("div",{class:"content-header"},i.header):null,t("div",E(i))])])})])})):u.value.emptyResult)}});export{de as default};

import{Q as j,T as x,b as i,j as a,e,u as n,Z as v,w as r,d as t,f as o,h as p,k,F as f,q as g,t as u,g as y}from"./app-Ci5Z7HF0.js";import{_ as A}from"./MenuButton-C5DdD9gR.js";import C from"./CandidateLayout-BiRfCK6e.js";import"./AuthenticatedLayout-DisiZl2B.js";import"./SettingsStore-CN31VaMA.js";import"./CandidateMenu-CMfru8FT.js";const D={class:"py-12"},N={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 dark:text-white"},V={class:"relative overflow-x-auto px-5"},$={key:0},B={class:""},M=t("h5",null,"Applied to",-1),S={class:"link-orange"},F={class:"text-xs mb-3"},L={class:"pe-5 mb-3"},O={class:"md:text-center"},T=t("p",{class:"mb-3"},[t("span",{class:"font-bold mr-2"},"Status:"),t("span",null,"Pending")],-1),q=["onClick"],G={__name:"Dashboard",props:{auth:Object,jobpostusers:Object},setup(d){var h,m;const _=d;j().props.auth.user;const l=x({user_id:(m=(h=_.auth)==null?void 0:h.user)==null?void 0:m.id,jobpost_id:0});function w(b){var c,s;confirm("Are you sure you want to withdraw your application from this job?")&&(l.user_id=(s=(c=_.auth)==null?void 0:c.user)==null?void 0:s.id,l.jobpost_id=b,l.post("/candidate/withdraw"))}return(b,c)=>(i(),a(f,null,[e(n(v),{title:"My Applications"}),e(C,null,{default:r(()=>[e(A,{title:"My Applications"}),t("div",D,[t("div",N,[t("div",V,[d.jobpostusers.length===0?(i(),a("div",$,[o(" You have not applied to any job. "),e(n(p),{href:"/open-positions",class:"link-orange"},{default:r(()=>[o("Click here")]),_:1}),o(" to view "),e(n(p),{href:"/open-positions",class:"link-orange"},{default:r(()=>[o("open positions")]),_:1}),o(". ")])):k("",!0),(i(!0),a(f,null,g(d.jobpostusers,s=>(i(),a("div",{key:s,class:"block justify-between md:flex md:justify-between border-b pb-5 mb-5"},[t("div",B,[M,e(n(p),{href:`/jobs/${s.jobpost.slug}`},{default:r(()=>[t("h2",S,u(s.jobpost.title),1)]),_:2},1032,["href"]),t("div",F,"Date Applied: "+u(new Date(s.jobpost.created_at).toLocaleString()),1),t("p",L,u(s.jobpost.small_description),1)]),t("div",O,[T,t("button",{onClick:y(E=>w(s.jobpost.id),["prevent"]),class:"btn-orange font-bold whitespace-nowrap"},"Withdraw Application",8,q)])]))),128))])])])]),_:1})],64))}};export{G as default};
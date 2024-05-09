import{T as k,o as x,i as w,b as i,c as C,w as f,e as c,u as n,Z as $,d as e,j as a,q as p,g as z,n as B,t as g,F as h,E as P,h as S,S as b}from"./app-CVgySrtS.js";import{_ as j}from"./AuthenticatedLayout-BfAWSxYD.js";import{i as F}from"./laravel-vue-pagination.es-D_4FRABE.js";import"./SettingsStore-D6x9t_iI.js";const N={class:"container m-auto px-4 md:px-5 dark:text-white"},O={class:"my-[50px]"},D=e("h1",{class:"mb-5"},"Portfolio",-1),E={class:"flex flex-wrap mb-3"},I=["onClick"],M={key:0,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"},V={class:"p-1 bg-gray-300 dark:bg-gray-800 mb-3"},q={class:"mb-1"},L={class:"mb-3 text-xs"},R={key:1,class:"my-5 p-5 border border-orange-500 rounded-lg"},T={class:"my-5"},K={__name:"Index",props:{portfolios:Object,portfoliocategories:Object,portfoliocategory_id:String},setup(_){const l=_,s=k({portfoliocategory_id:l.portfoliocategory_id});function m(t){s.portfoliocategory_id=t,s.get("/portfolio")}function v(t){s.portfoliocategory_id>0?b.get("/portfolio?portfoliocategory_id="+s.portfoliocategory_id+"&page="+t):b.get("/portfolio?page="+t)}function y(t){var d;let u=t.default_media_id;if(t.media.length===0)return"/assets//nextebiz-logo.png";const r=t.media.find(o=>o.id==u);return r==null?(d=t.media[0])==null?void 0:d.original_url:r==null?void 0:r.original_url}return x(()=>{w()}),(t,u)=>(i(),C(j,null,{default:f(()=>{var r,d;return[c(n($),{title:"Portfolio"}),e("div",N,[e("div",O,[D,e("div",E,[(i(!0),a(h,null,p(_.portfoliocategories,o=>(i(),a("div",{key:o},[e("div",{class:"cursor-pointer",onClick:z(Z=>m(o.id),["prevent"])},[e("div",{class:B(["bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-1 m-2",o.id==n(s).portfoliocategory_id?"bg-orange-500 text-white hover:text-white hover:bg-orange-600":""])},g(o.title),3)],8,I)]))),128))]),(r=l.portfolios)!=null&&r.data.length?(i(),a("div",M,[(i(!0),a(h,null,p((d=l.portfolios)==null?void 0:d.data,o=>(i(),a("div",{key:o.id,class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-950 hover:border-orange-500 dark:hover:border-orange-500 transition-all p-3"},[c(n(S),{href:`/portfolio/${o.slug}`},{default:f(()=>[e("div",null,[e("div",V,[e("div",{class:"bg-gray-200 dark:bg-gray-900 h-[300px] flex",style:P([{"background-position":"center","background-size":"cover"},`background-image:url(${y(o)})`])},null,4)])]),e("div",null,[e("h4",q,g(o.title),1),e("div",L,g(o.portfolio_category.title),1),e("div",null,g(o.small_description),1)])]),_:2},1032,["href"])]))),128))])):(i(),a("div",R," No portfolio found")),e("div",T,[c(n(F),{data:l.portfolios,onPaginationChangePage:v},null,8,["data"])])])])]}),_:1}))}};export{K as default};

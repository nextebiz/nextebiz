import{T as w,o as C,i as S,b as a,c as $,w as _,e as g,u as s,Z as z,d as o,n as h,h as p,j as l,q as b,g as B,t as c,F as y,E as P,S as v}from"./app-DQItYz92.js";import{_ as j}from"./AuthenticatedLayout-C5xhllAO.js";import{i as F}from"./laravel-vue-pagination.es-CzsLAieA.js";import"./SettingsStore-B3qGt7bD.js";const N={class:"container m-auto px-4 md:px-5 dark:text-white"},O={class:"my-[50px]"},D=o("h1",{class:"mb-5"},"Portfolio",-1),E={class:"flex flex-wrap mb-3"},I={class:"cursor-pointer"},M=["onClick"],V={key:0,class:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"},q={class:"p-1 bg-gray-300 dark:bg-gray-800 mb-3"},A={class:"mb-1"},L={class:"mb-3 text-xs"},R={key:1,class:"my-5 p-5 border border-orange-500 rounded-lg"},T={class:"my-5"},Q={__name:"Index",props:{portfolios:Object,portfoliocategories:Object,portfoliocategory_id:String},setup(u){const n=u,i=w({portfoliocategory_id:n.portfoliocategory_id});function m(r){i.portfoliocategory_id=r,i.get("/portfolio")}function k(r){i.portfoliocategory_id>0?v.get("/portfolio?portfoliocategory_id="+i.portfoliocategory_id+"&page="+r):v.get("/portfolio?page="+r)}function x(r){var d;let f=r.default_media_id;if(r.media.length===0)return"/assets//nextebiz-logo.png";const t=r.media.find(e=>e.id==f);return t==null?(d=r.media[0])==null?void 0:d.original_url:t==null?void 0:t.original_url}return C(()=>{S()}),(r,f)=>(a(),$(j,null,{default:_(()=>{var t,d;return[g(s(z),{title:"Portfolio"}),o("div",N,[o("div",O,[D,o("div",E,[g(s(p),{href:"/portfolio"},{default:_(()=>[o("div",I,[o("div",{class:h(["transition-all rounded-lg px-4 py-1 m-2",s(i).portfoliocategory_id==null?"bg-orange-500 text-white hover:text-white hover:bg-orange-600":"bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900"])}," Show All",2)])]),_:1}),(a(!0),l(y,null,b(u.portfoliocategories,e=>(a(),l("div",{key:e},[o("div",{class:"cursor-pointer",onClick:B(Z=>m(e.id),["prevent"])},[o("div",{class:h(["transition-all rounded-lg px-4 py-1 m-2",e.id==s(i).portfoliocategory_id?"bg-orange-500 text-white hover:text-white hover:bg-orange-600":"bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900"])},c(e.title),3)],8,M)]))),128))]),(t=n.portfolios)!=null&&t.data.length?(a(),l("div",V,[(a(!0),l(y,null,b((d=n.portfolios)==null?void 0:d.data,e=>(a(),l("div",{key:e.id,class:"border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-950 hover:border-orange-500 dark:hover:border-orange-500 transition-all p-3"},[g(s(p),{href:`/portfolio/${e.slug}`},{default:_(()=>[o("div",null,[o("div",q,[o("div",{class:"bg-gray-200 dark:bg-gray-900 h-[300px] flex",style:P([{"background-position":"center","background-size":"cover"},`background-image:url(${x(e)})`])},null,4)])]),o("div",null,[o("h4",A,c(e.title),1),o("div",L,c(e.portfolio_category.title),1),o("div",null,c(e.small_description),1)])]),_:2},1032,["href"])]))),128))])):(a(),l("div",R," No portfolio found")),o("div",T,[g(s(F),{data:n.portfolios,onPaginationChangePage:k},null,8,["data"])])])])]}),_:1}))}};export{Q as default};

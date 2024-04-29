import{_ as p}from"./AuthenticatedLayout-DD7fB7mb.js";import{T as y,o as g,b as o,j as s,e as t,u as l,Z as _,w as n,d as e,F as b,q as m,t as a,n as h,h as u,f}from"./app-DcNgqojr.js";import k from"./AdminMenu-Bzs9evGQ.js";import{_ as w}from"./MenuButton-D8g6qRYU.js";import v from"./Nav-sQNPyxHk.js";import"./SettingsStore-BazDOP1V.js";const j={class:"pb-10"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$={class:""},D={class:"relative overflow-x-auto"},E={key:0,class:"min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},F=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-3 w-2"}," ID "),e("th",{scope:"col",class:"text-left border border-gray-100 dark:border-gray-500 px-6 py-3"}," Title "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-3 sm:w-[60px]"}," Min "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-3 sm:w-[60px]"}," Max "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-3 sm:w-[60px]"}," Enabled "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-3 sm:w-[60px]"}," Edit "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-3 sm:w-[60px]"}," Delete ")])],-1),N={scope:"row",class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},T={class:"text-left border border-gray-100 dark:border-gray-500 px-6 py-4"},B={class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-4"},J={class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-4"},M={class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-4"},V={class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-4"},A={class:"text-center border border-gray-100 dark:border-gray-500 px-6 py-4"},I=["onClick"],q={key:1},z=e("div",{class:"p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-500 rounded-lg"}," No job categories found ",-1),L=[z],R={__name:"Index",props:{jobcategories:Array},setup(c){const i=y({job_category_id:0});function x(d){confirm("Are you sure you want to delete this category?")&&(i.job_category_id=d,i.delete(route("myadmin.jobcategories.destroy",d)))}return g(()=>{initFlowbite()}),(d,S)=>(o(),s(b,null,[t(l(_),{title:"Job Categories"}),t(p,null,{default:n(()=>[t(w,{title:"Job Categories"}),e("div",j,[e("div",C,[t(v),e("div",$,[e("div",D,[c.jobcategories.length>0?(o(),s("table",E,[F,e("tbody",null,[(o(!0),s(b,null,m(c.jobcategories,r=>(o(),s("tr",{key:r.id,class:"bg-white dark:bg-gray-800"},[e("th",N,a(r.id),1),e("td",T,a(r.title),1),e("td",B,a(r.min),1),e("td",J,a(r.max),1),e("td",M,[e("div",{class:h(r.enabled==1?"text-green-500":"text-red-500")},a(r.enabled==1?"True":"False"),3)]),e("td",V,[t(l(u),{href:`/myadmin/jobcategories/${r.id}/edit`,class:"btn-edit"},{default:n(()=>[f("Edit")]),_:2},1032,["href"])]),e("td",A,[e("button",{onClick:Z=>x(r.id),class:"btn-delete"},"Delete",8,I)])]))),128))])])):(o(),s("div",q,L))])])])]),t(k)]),_:1})],64))}};export{R as default};

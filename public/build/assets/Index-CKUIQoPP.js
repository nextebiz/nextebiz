import b from"./AdminLayout-qZjWbouU.js";import{T as x,o as _,b as a,j as s,e as r,u as i,Z as f,w as n,d as e,F as y,q as h,t as d,n as m,h as u,f as k,S as w}from"./app-B4W5m-19.js";import{_ as v}from"./MenuButton-Yq8sMFVD.js";import P from"./Nav-D3B5PjUF.js";import{i as $}from"./laravel-vue-pagination.es-DRwVzF3j.js";import"./AuthenticatedLayout-DwL47QPN.js";import"./SettingsStore-B1mJMi5f.js";import"./AdminMenu-DxpZuzS8.js";const C={class:"pb-10"},D={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},F={class:"relative overflow-x-auto"},N={key:0},B={class:"min-w-[700px] sm:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},E=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-600 px-6 py-3 w-2"}," ID "),e("th",{scope:"col",class:"text-left border border-gray-100 dark:border-gray-600 px-6 py-3"}," Title "),e("th",{scope:"col",class:"text-left border border-gray-100 dark:border-gray-600 px-6 py-3"}," Portfolio category "),e("th",{scope:"col",class:"text-left border border-gray-100 dark:border-gray-600 px-6 py-3"}," Preview "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]"}," Edit "),e("th",{scope:"col",class:"text-center border border-gray-100 dark:border-gray-600 px-6 py-3 sm:w-[60px]"}," Delete ")])],-1),T={scope:"row",class:"text-center border border-gray-100 dark:border-gray-600 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},V={class:"text-left border border-gray-100 dark:border-gray-600 px-6 py-4"},j={class:"border border-gray-100 dark:border-gray-600 px-6 py-4"},I={class:"border border-gray-100 dark:border-gray-600 px-6 py-4"},O=["href"],S={class:"text-center border border-gray-100 dark:border-gray-600 px-6 py-4"},q={class:"text-center border border-gray-100 dark:border-gray-600 px-6 py-4"},z=["onClick"],A={class:"my-3"},H={key:1},L=e("div",{class:"p-6 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg"}," No portfolio found ",-1),M=[L],ee={__name:"Index",props:{portfolios:Object},setup(l){const c=x({portfolio_id:0});function g(o){confirm("Are you sure you want to delete this category?")&&(c.portfolio_id=o,c.delete(route("myadmin.portfolio.destroy",o)))}function p(o){w.get("/myadmin/portfolio?page="+o)}return _(()=>{initFlowbite()}),(o,R)=>(a(),s(y,null,[r(i(f),{title:"Portfolio"}),r(b,null,{default:n(()=>[r(v,{title:"Portfolio"}),e("div",C,[e("div",D,[r(P),e("div",F,[l.portfolios.data.length>0?(a(),s("div",N,[e("table",B,[E,e("tbody",null,[(a(!0),s(y,null,h(l.portfolios.data,t=>(a(),s("tr",{key:t.id,class:"bg-white dark:bg-gray-800"},[e("th",T,d(t.id),1),e("td",V,[e("div",null,d(t.title),1),e("div",{class:m(t.featured==1?"text-green-500 block text-xs":"hidden")},d(t.featured==1?"Featured on Home Page":""),3)]),e("td",j,[e("div",null,d(t.portfolio_category.title),1)]),e("td",I,[e("div",null,[e("a",{target:"_blank",href:`/portfolio/${t.slug}`,class:"text-orange-500"},"Preview",8,O)])]),e("td",S,[r(i(u),{href:`/myadmin/portfolio/${t.slug}/edit`,class:"btn-edit"},{default:n(()=>[k("Edit")]),_:2},1032,["href"])]),e("td",q,[e("button",{onClick:Z=>g(t.slug),class:"btn-delete"},"Delete",8,z)])]))),128))])]),e("div",A,[r(i($),{data:l.portfolios,onPaginationChangePage:p},null,8,["data"])])])):(a(),s("div",H,M))])])])]),_:1})],64))}};export{ee as default};
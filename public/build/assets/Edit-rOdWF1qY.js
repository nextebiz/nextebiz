import{T as p,o as _,b as l,j as d,e as r,u as s,Z as y,w as x,d as e,g as k,m as b,K as h,t as v,k as g,v as w,F as C}from"./app-D5X9pEa7.js";import{_ as E}from"./AuthenticatedLayout-BpcPjnPk.js";import P from"./AdminMenu-B9U4oduG.js";import{_ as V}from"./MenuButton-EXJk1YDp.js";import j from"./Nav-3DYUXWFr.js";import"./SettingsStore-DcSEPKRQ.js";const M={class:"pb-10"},T={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},$={class:"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg"},B={class:"p-6 text-gray-900 dark:text-white"},F={class:"mb-5"},N=e("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Portfolio Category Title",-1),O={key:0,class:"form_error"},S={class:"flex items-start mb-5"},U={class:"flex items-center h-5"},D=e("label",{for:"enabled",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Enabled Portfolio Category",-1),q={class:"flex items-center"},K=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Update Portfolio Category ",-1),Z={key:0,class:"ms-5 text-red-500"},L={__name:"Edit",props:{portfoliocategory:Object,errors:Object},setup(f){const t=f,o=p({title:t.portfoliocategory.title,enabled:t.portfoliocategory.enabled==1});function m(){const n="/myadmin/portfoliocategories/"+t.portfoliocategory.id;o.patch(n,{preserveScroll:!0})}return _(()=>{initFlowbite()}),(n,a)=>(l(),d(C,null,[r(s(y),{title:"Edit Portfolio Category"}),r(E,null,{default:x(()=>{var c,u;return[r(V,{title:"Edit Portfolio Category"}),e("div",M,[e("div",T,[r(j),e("div",$,[e("div",B,[e("form",{onSubmit:k(m,["prevent"])},[e("div",F,[N,b(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=i=>s(o).title=i),id:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Portfolio Category Title",required:""},null,512),[[h,s(o).title]]),(c=t.errors)!=null&&c.title?(l(),d("div",O,v((u=t.errors)==null?void 0:u.title),1)):g("",!0)]),e("div",S,[e("div",U,[b(e("input",{id:"enabled",type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=i=>s(o).enabled=i),class:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"},null,512),[[w,s(o).enabled]])]),D]),e("div",q,[K,Object.keys(t.errors).length!=0?(l(),d("div",Z,"Error detected")):g("",!0)])],32)])])])]),r(P)]}),_:1})],64))}};export{L as default};
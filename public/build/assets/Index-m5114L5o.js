import{_ as b}from"./AuthenticatedLayout-D4zwX_Oi.js";import{T as f,o as v,i as x,b as n,j as l,e as s,u as r,Z as y,w as o,d as e,F as h,q as w,h as d,E as k,t as a,f as m}from"./app-CM9oau_d.js";import j from"./MessageForm-BKUjgCxh.js";import"./SettingsStore-C6J7Fqte.js";const $=e("div",null,null,-1),C={class:"container m-auto my-[50px] px-2 sm:px-5 dark:text-white"},E=e("h1",{class:"mb-5"},"Our Expertise",-1),z=e("p",{class:"mb-5"},"Embark on a transformative journey with our digital innovation hub, where creativity meets expertise, and innovation knows no bounds. Our dedicated team of professionals specializes in a diverse array of services, from web development to AI integration, ensuring that your business thrives in the ever-evolving digital landscape.",-1),B={class:"grid grid-cols-1 xl:grid-cols-2 gap-4 text-center"},O={class:"p-3"},S={class:"mb-3 hover:text-orange-500 transition-all"},F={class:"mb-5 p-3"},H=e("span",{class:"link-orange border border-transparent hover:border-orange-600 rounded-md"}," Details ... ",-1),M={class:"bottom-0 absolute w-full p-3"},N=["onClick"],V={class:"text-lg bg-gray-200 dark:bg-gray-800 py-2 border border-gray-300 dark:border-gray-600 hover:border-red-500 hover:text-orange-600"},D={class:"text-orange-500 px-2 py-1"},I={id:"crud-modal",tabindex:"-1","aria-hidden":"true",class:"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},T={class:"relative p-4 w-full max-w-md max-h-full"},q={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},A=e("div",{class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"},[e("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"}," Hire Resource "),e("button",{type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal"},[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})]),e("span",{class:"sr-only"},"Close modal")])],-1),L={class:"p-4 md:p-5"},P={__name:"Index",props:{jobcategories:Object},setup(c){const p=c,u=f({selected_category:1});function _(g){console.log("hi"),u.selected_category=g}return v(()=>{x()}),(g,R)=>(n(),l(h,null,[s(r(y),{title:"Our Expertise"}),s(b,null,{default:o(()=>[$,e("div",C,[E,z,e("div",B,[(n(!0),l(h,null,w(c.jobcategories,t=>(n(),l("div",{key:t.id,class:"bg-gray-100 dark:bg-gray-700 p-0 pb-[40px] relative"},[e("div",O,[s(r(d),{href:`/expertise/${t.slug}`},{default:o(()=>{var i;return[e("div",{class:"bg-gray-500 mb-5 h-[120px] sm:h-[230px]",style:k(`background-repeat: no-repeat;  background-size: cover;   background-position: center; background-image: url('${(i=t.media[0])==null?void 0:i.original_url}');`)},null,4)]}),_:2},1032,["href"])]),s(r(d),{href:`/expertise/${t.slug}`},{default:o(()=>[e("h2",S,a(t.title),1)]),_:2},1032,["href"]),e("div",F,[e("p",null,[m(a(t.small_description)+" ",1),s(r(d),{href:`/expertise/${t.slug}`,class:"link-orange"},{default:o(()=>[H]),_:2},1032,["href"])])]),e("div",M,[e("button",{onClick:i=>_(t.id),"data-modal-target":"crud-modal","data-modal-toggle":"crud-modal",class:"w-full",type:"button"},[e("div",V,[m(" Starting from $"+a(t.min)+" / Hour ",1),e("span",D," Hire "+a(t.title),1)])],8,N)])]))),128))])]),e("div",I,[e("div",T,[e("div",q,[A,e("div",L,[s(j,{jobcategories:p.jobcategories,selected_category:r(u).selected_category,prices:!0},null,8,["jobcategories","selected_category"])])])])])]),_:1})],64))}};export{P as default};

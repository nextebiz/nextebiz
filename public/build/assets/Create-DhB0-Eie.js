import{T as H,o as K,b as a,j as i,e as u,u as s,Z as L,w as O,d as e,g as R,m as l,K as g,n as b,t as n,k as c,B as _,F as z,q as W,v as Z}from"./app-Baw1MkG6.js";import G from"./AdminLayout-DMQ0MqyB.js";import{_ as I}from"./MenuButton-BCjp4Qbn.js";import Q from"./Nav-v5d5FhXN.js";import{_ as X}from"./MyCKEditor-CmlRT18H.js";import"./AuthenticatedLayout-B7Kj_yEo.js";import"./SettingsStore-ZRsGvB4A.js";import"./AdminMenu-DbCi-1D2.js";const Y={class:"pb-10"},ee={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},re={class:"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg"},oe={class:"p-6 text-gray-900 dark:text-white"},te={class:"mb-5"},se=e("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Category Title",-1),de={key:0,class:"form_error"},ae={class:"grid grid-cols-1 sm:grid-cols-2 gap-5"},ie={class:"mb-5"},le=e("label",{for:"category",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Category",-1),ne=["value"],ce={key:0,class:"form_error"},be={class:"mb-5"},ue=e("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Featured Job",-1),_e={class:"flex items-start py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3"},ge={class:"flex items-center h-5"},me=e("label",{for:"enabled",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Featured Job (Display on home page)",-1),pe={class:"mb-5"},ye=e("label",{for:"cities",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Category Cities",-1),ke={key:0,class:"form_error"},fe={class:"grid grid-cols-1 sm:grid-cols-3 gap-5"},he={class:"mb-5"},xe=e("label",{for:"job_type",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Type",-1),ve=e("option",{value:"fulltime"},"Full-Time",-1),we=e("option",{value:"parttime"},"Part-Time",-1),Ce=e("option",{value:"contract"},"Contract",-1),je=[ve,we,Ce],Je={key:0,class:"form_error"},qe={class:"mb-5"},Ve=e("label",{for:"working_hours",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Working Hours",-1),Ue=e("option",{value:"9to5"},"9:00 a.m. 5:00 p.m.",-1),Fe=e("option",{value:"2to10"},"2:00 p.m. 10:00 p.m.",-1),Te=e("option",{value:"6to3"},"6:00 a.m. 3:00 a.m.",-1),De=e("option",{value:"flexible"},"Flexible hours",-1),Me=[Ue,Fe,Te,De],Ne={key:0,class:"form_error"},Be={class:"mb-5"},Pe=e("label",{for:"candidates_required",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Candidates Required",-1),Se=e("option",{value:"1"},"1",-1),$e=e("option",{value:"2"},"2",-1),ze=e("option",{value:"3"},"3",-1),Ae=e("option",{value:"4"},"4",-1),Ee=e("option",{value:"5"},"5",-1),He=e("option",{value:"6"},"6",-1),Ke=e("option",{value:"7"},"7",-1),Le=e("option",{value:"8"},"8",-1),Oe=e("option",{value:"9"},"9",-1),Re=e("option",{value:"10"},"10",-1),We=[Se,$e,ze,Ae,Ee,He,Ke,Le,Oe,Re],Ze={key:0,class:"form_error"},Ge={class:"mb-5"},Ie=e("label",{for:"small_description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Small Description",-1),Qe={key:0,class:"form_error"},Xe={class:"mb-5"},Ye=e("label",{for:"description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Description",-1),er={key:0,class:"form_error"},rr=e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Create Job Post ",-1),cr={__name:"Create",props:{jobcategories:Array,errors:Object},setup(m){const r=m,o=H({job_category_id:0,title:"",slug:"",featured:!1,description:"",small_description:"",cities:"",job_type:"",working_hours:"",candidates_required:1});function A(){o.post(route("myadmin.jobposts.store"))}function E(p){o.description=p}return K(()=>{initFlowbite()}),(p,d)=>(a(),i(z,null,[u(s(L),{title:"Create New Job Post"}),u(G,null,{default:O(()=>{var y,k,f,h,x,v,w,C,j,J,q,V,U,F,T,D,M,N,B,P,S,$;return[u(I,{title:"Create New Job Post"}),e("div",Y,[e("div",ee,[u(Q),e("div",re,[e("div",oe,[e("form",{onSubmit:R(A,["prevent"])},[e("div",te,[se,l(e("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=t=>s(o).title=t),id:"title",class:b(["bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",(y=r.errors)!=null&&y.title?"border-red-500":""]),placeholder:"Job Category Title"},null,2),[[g,s(o).title]]),(k=r.errors)!=null&&k.title?(a(),i("div",de,n((f=r.errors)==null?void 0:f.title),1)):c("",!0)]),e("div",ae,[e("div",ie,[le,l(e("select",{id:"category","onUpdate:modelValue":d[1]||(d[1]=t=>s(o).job_category_id=t),class:b(["w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",(h=r.errors)!=null&&h.job_category_id?"border-red-500":""])},[(a(!0),i(z,null,W(m.jobcategories,t=>(a(),i("option",{key:t.id,value:t.id},n(t.title),9,ne))),128))],2),[[_,s(o).job_category_id]]),(x=r.errors)!=null&&x.job_category_id?(a(),i("div",ce,"Job Category is required.")):c("",!0)]),e("div",be,[ue,e("div",_e,[e("div",ge,[l(e("input",{id:"enabled",type:"checkbox","onUpdate:modelValue":d[2]||(d[2]=t=>s(o).featured=t),class:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"},null,512),[[Z,s(o).featured]])]),me])])]),e("div",pe,[ye,l(e("input",{type:"text","onUpdate:modelValue":d[3]||(d[3]=t=>s(o).cities=t),id:"cities",class:b(["bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",(v=r.errors)!=null&&v.cities?"border-red-500":""]),placeholder:"Job Category Cities"},null,2),[[g,s(o).cities]]),(w=r.errors)!=null&&w.cities?(a(),i("div",ke,n((C=r.errors)==null?void 0:C.cities),1)):c("",!0)]),e("div",fe,[e("div",he,[xe,l(e("select",{id:"job_type","onUpdate:modelValue":d[4]||(d[4]=t=>s(o).job_type=t),class:b(["w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",(j=r.errors)!=null&&j.job_type?"border-red-500":""])},je,2),[[_,s(o).job_type]]),(J=r.errors)!=null&&J.job_type?(a(),i("div",Je,n((q=r.errors)==null?void 0:q.job_type),1)):c("",!0)]),e("div",qe,[Ve,l(e("select",{id:"working_hours","onUpdate:modelValue":d[5]||(d[5]=t=>s(o).working_hours=t),class:b(["w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",(V=r.errors)!=null&&V.working_hours?"border-red-500":""])},Me,2),[[_,s(o).working_hours]]),(U=r.errors)!=null&&U.working_hours?(a(),i("div",Ne,n((F=r.errors)==null?void 0:F.working_hours),1)):c("",!0)]),e("div",Be,[Pe,l(e("select",{id:"candidates_required","onUpdate:modelValue":d[6]||(d[6]=t=>s(o).candidates_required=t),class:b(["w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",(T=r.errors)!=null&&T.candidates_required?"border-red-500":""])},We,2),[[_,s(o).candidates_required]]),(D=r.errors)!=null&&D.candidates_required?(a(),i("div",Ze,n((M=r.errors)==null?void 0:M.candidates_required),1)):c("",!0)])]),e("div",Ge,[Ie,l(e("textarea",{id:"small_description","onUpdate:modelValue":d[7]||(d[7]=t=>s(o).small_description=t),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[g,s(o).small_description]]),(N=r.errors)!=null&&N.small_description?(a(),i("div",Qe,n((B=r.errors)==null?void 0:B.small_description),1)):c("",!0)]),e("div",Xe,[Ye,u(X,{content:s(o).description,onUpdateContent:E,class:b(["myck",(P=r.errors)!=null&&P.description?"border-red-500 p-[1px] bg-red-500":""])},null,8,["content","class"]),(S=r.errors)!=null&&S.description?(a(),i("div",er,n(($=r.errors)==null?void 0:$.description),1)):c("",!0)]),rr],32)])])])])]}),_:1})],64))}};export{cr as default};
import{T as q,o as V,b as i,j as n,e as u,u as o,Z as M,w as U,d as e,g as $,m as l,K as d,t as m,k as c,v as R,n as J,F as D}from"./app-COK230E1.js";import{_ as E}from"./AuthenticatedLayout-BmB-7-GN.js";import P from"./AdminMenu-Bn2iuibv.js";import{_ as H}from"./MenuButton-DgBqE5oL.js";import N from"./Nav-C1jS5zZc.js";import{_ as S}from"./MyCKEditor-De6uOrne.js";import"./SettingsStore-zafpjH2g.js";const T={class:"pb-10"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},F={class:"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg"},O={class:"p-6 text-gray-900 dark:text-white"},Q={class:"mb-5"},z=e("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Category Title",-1),I={key:0,class:"form_error"},K={class:"grid grid-cols-1 sm:grid-cols-2 gap-3"},Z={class:"mb-5"},A=e("label",{for:"min",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Minimum Per Hour Rate ($)",-1),G={class:"mb-5"},L=e("label",{for:"max",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Maximum Per Hour Rate ($)",-1),W={class:"mb-5"},X=e("label",{for:"monthly",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Monthly Rate ($)",-1),Y={class:"mb-5"},ee=e("label",{for:"quarterly",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Quarterly Rate ($)",-1),re={class:"flex items-start mb-5"},te={class:"flex items-center h-5"},oe=e("label",{for:"enabled",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Enabled Job Category",-1),se={class:"mb-5"},ae=e("label",{for:"picture",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Picture",-1),le={class:"flex justify-start"},de=["href"],ie=["src"],ne={key:0,class:"form_error"},ue={class:"mb-5"},ce=e("label",{for:"small_description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Small Description",-1),be={key:0,class:"form_error"},me={class:"mb-5"},ge=e("label",{for:"description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Description",-1),ye={key:0,class:"form_error"},pe=e("div",{class:"flex items-center"},[e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Update Job Category ")],-1),je={__name:"Edit",props:{jobcategory:Object,media:String,errors:Object},setup(v){const r=v,t=q({id:r.jobcategory.id,title:r.jobcategory.title,slug:r.jobcategory.slug,min:r.jobcategory.min,max:r.jobcategory.max,monthly:r.jobcategory.monthly,quarterly:r.jobcategory.quarterly,picture:r.jobcategory.picture,small_description:r.jobcategory.small_description,description:unescape(r.jobcategory.description),enabled:r.jobcategory.enabled==1});function j(){t.description=escape(t.description);const b=`/myadmin/jobcategories/${r.jobcategory.slug}`;t.post(b)}function C(b){t.description=b}return V(()=>{initFlowbite()}),(b,s)=>(i(),n(D,null,[u(o(M),{title:"Edit New Job Category"}),u(E,null,{default:U(()=>{var g,y,p,f,k,x,_,h,w;return[u(H,{title:"Edit Job Category"}),e("div",T,[e("div",B,[u(N),e("div",F,[e("div",O,[e("form",{onSubmit:$(j,["prevent"])},[e("div",Q,[z,l(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=a=>o(t).title=a),id:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Job Category Title",required:""},null,512),[[d,o(t).title]]),(g=r.errors)!=null&&g.title?(i(),n("div",I,m((y=r.errors)==null?void 0:y.title),1)):c("",!0)]),e("div",K,[e("div",Z,[A,l(e("input",{type:"number","onUpdate:modelValue":s[1]||(s[1]=a=>o(t).min=a),id:"min",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Minimum Per Hour Rate",required:""},null,512),[[d,o(t).min]])]),e("div",G,[L,l(e("input",{type:"number","onUpdate:modelValue":s[2]||(s[2]=a=>o(t).max=a),id:"max",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Maximum Per Hour Rate",required:""},null,512),[[d,o(t).max]])]),e("div",W,[X,l(e("input",{type:"number","onUpdate:modelValue":s[3]||(s[3]=a=>o(t).monthly=a),id:"monthly",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Monthly Rate",required:""},null,512),[[d,o(t).monthly]])]),e("div",Y,[ee,l(e("input",{type:"number","onUpdate:modelValue":s[4]||(s[4]=a=>o(t).quarterly=a),id:"quarterly",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Quarterly Rate",required:""},null,512),[[d,o(t).quarterly]])])]),e("div",re,[e("div",te,[l(e("input",{id:"enabled",type:"checkbox","onUpdate:modelValue":s[5]||(s[5]=a=>o(t).enabled=a),class:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",checked:""},null,512),[[R,o(t).enabled]])]),oe]),e("div",se,[ae,e("div",le,[r.media!=""?(i(),n("a",{key:0,target:"_blank",href:r.media},[e("img",{src:r.media,style:{height:"200px"}},null,8,ie)],8,de)):c("",!0)]),e("div",null,[e("input",{type:"file",id:"picture",accept:"image/x-png,image/gif,image/jpeg",class:"mt-1 block w-full",onInput:s[6]||(s[6]=a=>o(t).picture=a.target.files[0])},null,32),(p=r.errors)!=null&&p.picture?(i(),n("div",ne,m((f=r.errors)==null?void 0:f.picture),1)):c("",!0)])]),e("div",ue,[ce,l(e("textarea",{id:"small_description","onUpdate:modelValue":s[7]||(s[7]=a=>o(t).small_description=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[d,o(t).small_description]]),(k=r.errors)!=null&&k.small_description?(i(),n("div",be,m((x=r.errors)==null?void 0:x.small_description),1)):c("",!0)]),e("div",me,[ge,l(e("textarea",{"onUpdate:modelValue":s[8]||(s[8]=a=>o(t).description=a),class:"w-full"},null,512),[[d,o(t).description]]),u(S,{content:o(t).description,onUpdateContent:C,class:J(["myck",(_=r.errors)!=null&&_.description?"border-red-500 p-[1px] bg-red-500":""])},null,8,["content","class"]),(h=r.errors)!=null&&h.description?(i(),n("div",ye,m((w=r.errors)==null?void 0:w.description),1)):c("",!0)]),pe],32)])])])]),u(P)]}),_:1})],64))}};export{je as default};
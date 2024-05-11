import{T as V,o as U,b as n,j as c,e as u,u as s,Z as $,w as E,d as e,g as R,m as d,K as i,t as m,k as b,v as J,n as D,F as T}from"./app-Bse6ixRr.js";import{_ as H}from"./AuthenticatedLayout-BPvhm1fJ.js";import P from"./AdminMenu-DNWxGRyL.js";import{_ as S}from"./MenuButton-C5D4KJpE.js";import N from"./Nav-Bl5vY30R.js";import{_ as B}from"./MyCKEditor-kqCysb0n.js";import"./SettingsStore-Cvvt08td.js";const F={class:"pb-10"},A={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},O={class:"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 sm:rounded-lg"},Q={class:"p-6 text-gray-900 dark:text-white"},z={class:"mb-5"},I=e("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Category Title",-1),K={key:0,class:"form_error"},L={class:"grid grid-cols-1 sm:grid-cols-2 gap-3"},Z={class:"mb-5"},G=e("label",{for:"min",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Minimum Per Hour Rate ($)",-1),W={class:"mb-5"},X=e("label",{for:"max",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Maximum Per Hour Rate ($)",-1),Y={class:"mb-5"},ee=e("label",{for:"monthly",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Monthly Rate ($)",-1),re={class:"mb-5"},te=e("label",{for:"quarterly",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Quarterly Rate ($)",-1),oe={class:"flex items-start mb-5"},se={class:"flex items-center h-5"},ae=e("label",{for:"enabled",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Enabled Job Category",-1),le={class:"mb-5"},de=e("label",{for:"picture",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Picture",-1),ie={class:"flex justify-start"},ne=["href"],ce=["src"],ue={key:0,class:"form_error"},be={class:"mb-5"},me=e("label",{for:"small_description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Small Description",-1),ge={key:0,class:"form_error"},ye={class:"mb-5"},pe=e("label",{for:"description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Job Description",-1),fe={key:0,class:"form_error"},ke=e("div",{class:"flex items-center"},[e("button",{type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}," Update Job Category ")],-1),qe={__name:"Edit",props:{jobcategory:Object,media:String,errors:Object,csrf_token:String},setup(j){const r=j,t=V({id:r.jobcategory.id,title:r.jobcategory.title,slug:r.jobcategory.slug,min:r.jobcategory.min,max:r.jobcategory.max,monthly:r.jobcategory.monthly,quarterly:r.jobcategory.quarterly,picture:r.jobcategory.picture,small_description:r.jobcategory.small_description,description:q(r.jobcategory.description),enabled:r.jobcategory.enabled==1,_token:r.csrf_token});function C(){t.small_description=g(t.small_description),t.description=g(t.description);const l=`/myadmin/jobcategories/${r.jobcategory.slug}`;t.post(l)}function q(l){let o=document.createElement("div");return o.innerHTML=l,o.textContent||o.innerText}function g(l){return l.replace(/[\u00A0-\u9999<>\&]/gim,function(o){return"&#"+o.charCodeAt(0)+";"})}function M(l){t.description=l}return U(()=>{initFlowbite()}),(l,o)=>(n(),c(T,null,[u(s($),{title:"Edit New Job Category"}),u(H,null,{default:E(()=>{var y,p,f,k,_,x,h,w,v;return[u(S,{title:"Edit Job Category"}),e("div",F,[e("div",A,[u(N),e("div",O,[e("div",Q,[e("form",{onSubmit:R(C,["prevent"])},[e("div",z,[I,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>s(t).title=a),id:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Job Category Title",required:""},null,512),[[i,s(t).title]]),(y=r.errors)!=null&&y.title?(n(),c("div",K,m((p=r.errors)==null?void 0:p.title),1)):b("",!0)]),e("div",L,[e("div",Z,[G,d(e("input",{type:"number","onUpdate:modelValue":o[1]||(o[1]=a=>s(t).min=a),id:"min",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Minimum Per Hour Rate",required:""},null,512),[[i,s(t).min]])]),e("div",W,[X,d(e("input",{type:"number","onUpdate:modelValue":o[2]||(o[2]=a=>s(t).max=a),id:"max",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Maximum Per Hour Rate",required:""},null,512),[[i,s(t).max]])]),e("div",Y,[ee,d(e("input",{type:"number","onUpdate:modelValue":o[3]||(o[3]=a=>s(t).monthly=a),id:"monthly",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Monthly Rate",required:""},null,512),[[i,s(t).monthly]])]),e("div",re,[te,d(e("input",{type:"number","onUpdate:modelValue":o[4]||(o[4]=a=>s(t).quarterly=a),id:"quarterly",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Quarterly Rate",required:""},null,512),[[i,s(t).quarterly]])])]),e("div",oe,[e("div",se,[d(e("input",{id:"enabled",type:"checkbox","onUpdate:modelValue":o[5]||(o[5]=a=>s(t).enabled=a),class:"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800",checked:""},null,512),[[J,s(t).enabled]])]),ae]),e("div",le,[de,e("div",ie,[r.media!=""?(n(),c("a",{key:0,target:"_blank",href:r.media},[e("img",{src:r.media,style:{height:"200px"}},null,8,ce)],8,ne)):b("",!0)]),e("div",null,[e("input",{type:"file",id:"picture",accept:"image/x-png,image/gif,image/jpeg",class:"mt-1 block w-full",onInput:o[6]||(o[6]=a=>s(t).picture=a.target.files[0])},null,32),(f=r.errors)!=null&&f.picture?(n(),c("div",ue,m((k=r.errors)==null?void 0:k.picture),1)):b("",!0)])]),e("div",be,[me,d(e("textarea",{id:"small_description","onUpdate:modelValue":o[7]||(o[7]=a=>s(t).small_description=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},null,512),[[i,s(t).small_description]]),(_=r.errors)!=null&&_.small_description?(n(),c("div",ge,m((x=r.errors)==null?void 0:x.small_description),1)):b("",!0)]),e("div",ye,[pe,d(e("textarea",{"onUpdate:modelValue":o[8]||(o[8]=a=>s(t).description=a),class:"w-full"},null,512),[[i,s(t).description]]),u(B,{content:s(t).description,onUpdateContent:M,class:D(["myck",(h=r.errors)!=null&&h.description?"border-red-500 p-[1px] bg-red-500":""])},null,8,["content","class"]),(w=r.errors)!=null&&w.description?(n(),c("div",fe,m((v=r.errors)==null?void 0:v.description),1)):b("",!0)]),ke],32)])])])]),u(P)]}),_:1})],64))}};export{qe as default};

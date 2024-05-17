import{s as p,T as g,b as m,j as w,d as r,e,u as a,w as n,f as y,k as x,z as f,t as V,g as k}from"./app-ChRTe0Cb.js";import{_ as l,a as d,b as u}from"./TextInput-CELAYusX.js";import{P}from"./PrimaryButton-O9xjnN2J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=r("header",{class:""},[r("h2",{class:"text-lg font-medium text-gray-900 dark:text-white"},"Update Password"),r("p",{class:"mt-1 text-sm text-gray-600 dark:text-white"}," Ensure your account is using a long, random password to stay secure. ")],-1),S={class:"flex items-center gap-4"},h={key:0,class:"text-sm text-gray-600"},N={class:"text-sm text-gray-600"},T={__name:"UpdatePasswordForm",props:{msg:String},setup(_){const c=p(null),i=p(null),s=g({current_password:"",password:"",password_confirmation:""}),v=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),i.value.focus())}})};return(U,t)=>(m(),w("section",null,[b,r("form",{onSubmit:k(v,["prevent"]),class:"mt-6 space-y-6"},[r("div",null,[e(l,{for:"current_password",value:"Current Password"}),e(d,{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:a(s).current_password,"onUpdate:modelValue":t[0]||(t[0]=o=>a(s).current_password=o),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(u,{message:a(s).errors.current_password,class:"mt-2"},null,8,["message"])]),r("div",null,[e(l,{for:"password",value:"New Password"}),e(d,{id:"password",ref_key:"passwordInput",ref:c,modelValue:a(s).password,"onUpdate:modelValue":t[1]||(t[1]=o=>a(s).password=o),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(u,{message:a(s).errors.password,class:"mt-2"},null,8,["message"])]),r("div",null,[e(l,{for:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",modelValue:a(s).password_confirmation,"onUpdate:modelValue":t[2]||(t[2]=o=>a(s).password_confirmation=o),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(u,{message:a(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),r("div",S,[e(P,{disabled:a(s).processing},{default:n(()=>[y("Save Password")]),_:1},8,["disabled"]),e(f,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:n(()=>[a(s).recentlySuccessful?(m(),w("p",h,"Saved. ")):x("",!0)]),_:1}),e(f,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:n(()=>[r("p",N,V(_.msg),1)]),_:1})])],32)]))}};export{T as default};
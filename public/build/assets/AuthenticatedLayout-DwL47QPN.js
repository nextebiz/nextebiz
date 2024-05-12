import{o as L,a as P,l as b,s as E,b as i,j as h,d as e,r as _,m as $,y as B,e as s,w as t,n as k,z as N,c as j,u as n,h as c,x as Z,k as w,f as l,t as S,A as D}from"./app-B4W5m-19.js";import{S as A}from"./SettingsStore-B1mJMi5f.js";const T={class:"relative"},U={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(m){const o=m,u=r=>{d.value&&r.key==="Escape"&&(d.value=!1)};L(()=>document.addEventListener("keydown",u)),P(()=>document.removeEventListener("keydown",u));const g=b(()=>({48:"w-48"})[o.width.toString()]),y=b(()=>o.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":o.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),d=E(!1);return(r,v)=>(i(),h("div",T,[e("div",{onClick:v[0]||(v[0]=f=>d.value=!d.value)},[_(r.$slots,"trigger")]),$(e("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=f=>d.value=!1)},null,512),[[B,d.value]]),s(N,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:t(()=>[$(e("div",{class:k(["absolute z-50 mt-2 rounded-md shadow-lg",[g.value,y.value]]),style:{display:"none"},onClick:v[2]||(v[2]=f=>d.value=!1)},[e("div",{class:k(["rounded-md ring-1 ring-black ring-opacity-5",m.contentClasses])},[_(r.$slots,"content")],2)],2),[[B,d.value]])]),_:3})]))}},a={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(m){return(o,u)=>(i(),j(n(c),{href:m.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:t(()=>[_(o.$slots,"default")]),_:3},8,["href"]))}},O={class:"pb-[72px] sm:pb-[88px]"},F={class:"fixed w-full z-50 bg-gray-200 border-b border-b-gray-300 dark:border-b-gray-800 dark:bg-gray-900"},J={class:"flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"},I=["src"],R={class:"flex items-center lg:order-2 space-x-1 lg:space-x-2 rtl:space-x-reverse"},q=e("div",{class:"flex items-center"},[e("span",{class:"mr-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",class:"mt-1 w-3 dark:fill-orange-600"},[e("path",{d:"M144 144c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7c7.6 16 26.7 22.8 42.6 15.2s22.8-26.7 15.2-42.6C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H144V144z"})])]),e("span",null," Sign In ")],-1),W={key:1,class:"flex sm:items-center sm:ms-6"},Y={class:"ms-3 relative"},G={class:"inline-flex rounded-md"},K={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Q=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),X={key:0},ee=e("div",{class:"flex items-center justify-between w-full"},[e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"})]),e("div",{class:"ms-3 whitespace-nowrap"},"My Applications")])],-1),te=e("div",{class:"flex items-center justify-between w-full"},[e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"})]),e("div",{class:"ms-3 whitespace-nowrap"},"My Profile")])],-1),se=e("div",{class:"flex items-center justify-between w-full"},[e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"})]),e("div",{class:"ms-3 whitespace-nowrap"},"Change Password")])],-1),re=e("div",{class:"flex items-center justify-between w-full"},[e("div",{class:"flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"})]),e("div",{class:"ms-3 whitespace-nowrap"},"Delete Account")])],-1),ae={key:1},oe={key:2},le=e("svg",{class:"w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 22 21"},[e("path",{d:"M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"}),e("path",{d:"M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"})],-1),ie=e("div",{class:"ms-3"}," Admin Dashboard ",-1),ne=e("svg",{class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"})],-1),ce=e("div",{class:"ms-3"}," Job Posts",-1),de=e("svg",{class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[e("path",{d:"M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"})],-1),he=e("div",{class:"ms-3"},"Job Categories",-1),ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 448 512",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M0 32v128h128V32H0zm120 120H8V40h112v112zm40-120v128h128V32H160zm120 120H168V40h112v112zm40-120v128h128V32H320zm120 120H328V40h112v112zM0 192v128h128V192H0zm120 120H8V200h112v112zm40-120v128h128V192H160zm120 120H168V200h112v112zm40-120v128h128V192H320zm120 120H328V200h112v112zM0 352v128h128V352H0zm120 120H8V360h112v112zm40-120v128h128V352H160zm120 120H168V360h112v112zm40-120v128h128V352H320z"})],-1),ge=e("div",{class:"ms-3"},"Portfolio",-1),me=e("svg",{class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[e("path",{d:"M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"})],-1),ve=e("div",{class:"ms-3"},"Portfolio Categories",-1),fe=e("div",{class:"flex items-center justify-between w-full"},[e("div",{class:"flex items-center"},[e("svg",{class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[e("path",{d:"M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"})]),e("div",{class:"ms-3 whitespace-nowrap"},"Messages")]),e("div",null,[e("span",{class:"inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"},"3")])],-1),pe=e("div",{class:"flex items-center justify-between w-full"},[e("div",{class:"flex items-center"},[e("svg",{class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 18"},[e("path",{d:"M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"})]),e("div",{class:"ms-3 whitespace-nowrap"},"Users")]),e("div",null,[e("span",{class:"inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"},"3")])],-1),xe=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"})],-1),we=e("div",{class:"ms-3"},"My Profile",-1),_e=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"})],-1),ye=e("div",{class:"ms-3"},"Change Password",-1),be=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",class:"flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"},[e("path",{d:"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"})],-1),ke=e("div",{class:"ms-3"},"Log Out",-1),He=e("button",{"data-collapse-toggle":"mega-menu",type:"button",class:"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mega-menu","aria-expanded":"false"},[e("span",{class:"sr-only"},"Open main menu"),e("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 1h15M1 7h15M1 13h15"})])],-1),ze=e("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},null,-1),Ve=[ze],Me=e("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","fill-rule":"evenodd","clip-rule":"evenodd"},null,-1),Ce=[Me],$e={id:"mega-menu",class:"items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"},Be={class:"flex flex-col mt-4 bg-gray-100 dark:bg-gray-900 lg:bg-transparent rounded-lg font-medium lg:flex-row lg:mt-0 lg:space-x-8 rtl:space-x-reverse"},Le={class:"border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700"},je={class:"border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700"},Se={class:"border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700"},Ae={class:"border-b-2 lg:border-0 border-b-gray-200 dark:border-b-gray-700"},Pe={__name:"Nav",setup(m){const o=A();function u(){y(g.value==="dark"?"light":"dark")}const g=b(()=>o.getTheme);function y(r){o.setTheme(r)}function d(){g.value=="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return Z(()=>{d()}),L(()=>{d()}),(r,v)=>{var f,H;return i(),h("div",O,[e("nav",F,[e("div",J,[s(n(c),{href:"/",class:"flex items-center space-x-3 rtl:space-x-reverse"},{default:t(()=>[e("img",{src:g.value=="dark"?"/assets/img/nextebiz-white.svg":"/assets/img/nextebiz-black.svg",class:"h-10 sm:h-14",alt:"Nextebiz Logo"},null,8,I)]),_:1}),e("div",R,[((f=r.$page.props.auth)==null?void 0:f.user)==null?(i(),j(n(c),{key:0,href:"/login",class:"nav-link-top flex"},{default:t(()=>[q]),_:1})):w("",!0),((H=r.$page.props.auth)==null?void 0:H.user)!==null?(i(),h("div",W,[e("div",Y,[s(U,{align:"right",width:"48"},{trigger:t(()=>{var p,x;return[e("span",G,[e("button",K,[l(S((x=(p=r.$page.props.auth)==null?void 0:p.user)==null?void 0:x.name)+" ",1),Q])])]}),content:t(()=>{var p,x,z,V,M,C;return[((x=(p=r.$page.props.auth)==null?void 0:p.user)==null?void 0:x.roles[0].name)==="candidate"?(i(),h("div",X,[s(a,{href:r.route("candidate.index"),class:"flex items-center"},{default:t(()=>[ee]),_:1},8,["href"]),s(a,{href:"/candidate/profile",class:"flex items-center"},{default:t(()=>[te]),_:1}),s(a,{href:r.route("profile.password"),class:"flex items-center"},{default:t(()=>[se]),_:1},8,["href"]),s(a,{href:r.route("profile.deleteaccount"),class:"flex items-center"},{default:t(()=>[re]),_:1},8,["href"])])):w("",!0),((V=(z=r.$page.props.auth)==null?void 0:z.user)==null?void 0:V.roles[0].name)==="employer"?(i(),h("div",ae,[s(a,{href:r.route("employer.index")},{default:t(()=>[l(" Employer Dashboard ")]),_:1},8,["href"])])):w("",!0),((C=(M=r.$page.props.auth)==null?void 0:M.user)==null?void 0:C.roles[0].name)==="admin"?(i(),h("div",oe,[s(a,{href:r.route("myadmin.index"),class:"flex items-center"},{default:t(()=>[le,ie]),_:1},8,["href"]),s(a,{href:r.route("myadmin.jobposts.index"),class:"flex items-center"},{default:t(()=>[ne,ce]),_:1},8,["href"]),s(a,{href:r.route("myadmin.jobcategories.index"),class:"flex items-center"},{default:t(()=>[de,he]),_:1},8,["href"]),s(a,{href:r.route("myadmin.portfolio.index"),class:"flex items-center"},{default:t(()=>[ue,ge]),_:1},8,["href"]),s(a,{href:r.route("myadmin.portfoliocategories.index"),class:"flex items-center"},{default:t(()=>[me,ve]),_:1},8,["href"]),s(a,{href:r.route("myadmin.messages.index"),class:"flex items-center"},{default:t(()=>[fe]),_:1},8,["href"]),s(a,{href:r.route("myadmin.users.index"),class:"flex items-center"},{default:t(()=>[pe]),_:1},8,["href"]),s(a,{href:r.route("myadmin.profile"),class:"flex items-center"},{default:t(()=>[xe,we]),_:1},8,["href"]),s(a,{href:r.route("profile.password"),class:"flex items-center"},{default:t(()=>[_e,ye]),_:1},8,["href"])])):w("",!0),s(a,{href:r.route("logout"),method:"post",as:"button",class:"flex items-center"},{default:t(()=>[be,ke]),_:1},8,["href"])]}),_:1})])])):w("",!0),He,e("button",{onClick:u,id:"theme-toggle",type:"button",class:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"},[(i(),h("svg",{id:"theme-toggle-dark-icon",class:k([g.value=="dark"?"hidden":"","w-5 h-5"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Ve,2)),(i(),h("svg",{id:"theme-toggle-light-icon",class:k([g.value!=="dark"?"hidden":"","w-5 h-5"]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Ce,2))])]),e("div",$e,[e("ul",Be,[e("li",Le,[s(n(c),{href:"/expertise",class:"nav-link-top"},{default:t(()=>[l(" Expertise ")]),_:1})]),e("li",je,[s(n(c),{href:"/open-positions",class:"nav-link-top"},{default:t(()=>[l(" Open Positions ")]),_:1})]),e("li",Se,[s(n(c),{href:"/portfolio",class:"nav-link-top"},{default:t(()=>[l(" Portfolio ")]),_:1})]),e("li",Ae,[s(n(c),{href:"/contact",class:"nav-link-top"},{default:t(()=>[l(" Contact Us ")]),_:1})])])])])])])}}},Ee={class:"bg-gray-200 dark:bg-gray-900 dark:text-white"},Ne={class:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},Ze={class:"md:flex md:justify-between"},De={class:"mb-6 md:mb-0"},Te={href:"https://nextebiz.com",class:"flex items-center space-x-3 rtl:space-x-reverse"},Ue=["src"],Oe=e("div",{class:"max-w-[500px] mt-5"}," At Next eBiz, we're dedicated to pushing the boundaries of technology and innovation. With expertise spanning Laravel, React, Vue, and Flutter, we craft dynamic applications that propel businesses forward. Partner with us to unlock the full potential of your digital endeavors and stay ahead in today's rapidly evolving landscape. ",-1),Fe={class:"grid grid-cols-3 gap-2 sm:gap-12 sm:grid-cols-3"},Je=e("h4",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},"About",-1),Ie={class:"text-gray-500 dark:text-gray-400 font-medium"},Re={class:"mb-4"},qe={class:"mb-4"},We=e("h4",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},"Join Us",-1),Ye={class:"text-gray-500 dark:text-gray-400 font-medium"},Ge={class:"mb-4"},Ke={class:"mb-4"},Qe={class:"mb-4"},Xe=e("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1),et={class:"sm:flex sm:items-center sm:justify-between"},tt={class:"flex items-center text-sm text-gray-500 sm:text-center dark:text-gray-400"},st={class:""},rt=e("a",{href:"https://nextebiz.com/",class:"hover:underline"},"Next eBiz",-1),at=e("span",{class:"ms-2"},"Site made with",-1),ot=e("div",{class:"w-[20px] mx-2 fill-red-500"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"})])],-1),lt=e("span",null,"in Laravel + Vue by 'Imran Malik'",-1),it=D('<div class="flex mt-4 sm:justify-center sm:mt-0"><a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"><path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h4v9.938h3V9h4.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"></path></svg><span class="sr-only">Facebook page</span></a></div>',1),nt={__name:"Footer",setup(m){const o=A(),u=b(()=>o.getTheme);return(g,y)=>(i(),h("footer",Ee,[e("div",Ne,[e("div",Ze,[e("div",De,[e("a",Te,[e("img",{src:u.value==="dark"?"/assets/img/nextebiz-white.svg":"/assets/img/nextebiz-black.svg",class:"h-14",alt:"Nextebiz Logo"},null,8,Ue)]),Oe]),e("div",Fe,[e("div",null,[Je,e("ul",Ie,[e("li",Re,[s(n(c),{href:"/expertise",class:"hover:underline"},{default:t(()=>[l("Expertise")]),_:1})]),e("li",qe,[s(n(c),{href:"/portfolio",class:"hover:underline"},{default:t(()=>[l("Portfolio")]),_:1})])])]),e("div",null,[We,e("ul",Ye,[e("li",Ge,[s(n(c),{href:"/open-positions",class:"hover:underline"},{default:t(()=>[l("Open Positions")]),_:1})]),e("li",Ke,[s(n(c),{href:"/candidate/register",class:"hover:underline"},{default:t(()=>[l("Upload Resume")]),_:1})]),e("li",Qe,[s(n(c),{href:"/contact",class:"hover:underline"},{default:t(()=>[l("Contact Us")]),_:1})])])])])]),Xe,e("div",et,[e("div",tt,[e("span",st,[l("© "+S(new Date().getFullYear())+" ",1),rt,l(". ")]),at,ot,lt]),it])])]))}},ct={class:"bg-white dark:bg-gray-800"},ut={__name:"AuthenticatedLayout",setup(m){return(o,u)=>(i(),h("div",ct,[s(Pe),_(o.$slots,"header"),_(o.$slots,"default"),s(nt)]))}};export{ut as _};
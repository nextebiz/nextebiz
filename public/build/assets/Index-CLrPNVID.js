import{T as n,o as u,b as e,j as t,d as s,F as l,q as i,A as c}from"./app-ChRTe0Cb.js";const d={id:"default-carousel",class:"relative w-full","data-carousel":"slide"},g={class:"relative overflow-hidden rounded-lg h-[500px] bg-gray-100"},p=["src"],h=c('<button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg class="w-4 h-4 text-gray-800 dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg><span class="sr-only">Previous</span></span></button><button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"><svg class="w-4 h-4 text-gray-800 dark:text-gray-300 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="sr-only">Next</span></span></button>',2),y={__name:"Index",props:{images:Array},setup(a){const r=a;return n({images:r.images}),u(()=>{console.log("loaded c")}),(f,w)=>(e(),t("div",d,[s("div",g,[(e(!0),t(l,null,i(r.images,o=>(e(),t("div",{key:o,class:"hidden duration-700 ease-in-out","data-carousel-item":""},[s("img",{src:o,class:"max-h-[500px] m-auto",alt:"..."},null,8,p)]))),128))]),h]))}};export{y as default};
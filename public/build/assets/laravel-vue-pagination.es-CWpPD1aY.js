import{p as x,b as h,c as b,w as k,j as v,O as c,d as o,P,r as f,F as _,q as y,t as w,k as C}from"./app-CM9oau_d.js";const R={emits:["pagination-change-page"],props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},keepLength:{type:Boolean,default:!1}},computed:{isApiResource(){return!!this.data.meta},currentPage(){var e;return this.isApiResource?this.data.meta.current_page:(e=this.data.current_page)!=null?e:null},firstPageUrl(){var e,a,t,s,l;return(l=(s=(a=this.data.first_page_url)!=null?a:(e=this.data.meta)==null?void 0:e.first_page_url)!=null?s:(t=this.data.links)==null?void 0:t.first)!=null?l:null},from(){var e;return this.isApiResource?this.data.meta.from:(e=this.data.from)!=null?e:null},lastPage(){var e;return this.isApiResource?this.data.meta.last_page:(e=this.data.last_page)!=null?e:null},lastPageUrl(){var e,a,t,s,l;return(l=(s=(a=this.data.last_page_url)!=null?a:(e=this.data.meta)==null?void 0:e.last_page_url)!=null?s:(t=this.data.links)==null?void 0:t.last)!=null?l:null},nextPageUrl(){var e,a,t,s,l;return(l=(s=(a=this.data.next_page_url)!=null?a:(e=this.data.meta)==null?void 0:e.next_page_url)!=null?s:(t=this.data.links)==null?void 0:t.next)!=null?l:null},perPage(){var e;return this.isApiResource?this.data.meta.per_page:(e=this.data.per_page)!=null?e:null},prevPageUrl(){var e,a,t,s,l;return(l=(s=(a=this.data.prev_page_url)!=null?a:(e=this.data.meta)==null?void 0:e.prev_page_url)!=null?s:(t=this.data.links)==null?void 0:t.prev)!=null?l:null},to(){var e;return this.isApiResource?this.data.meta.to:(e=this.data.to)!=null?e:null},total(){var e;return this.isApiResource?this.data.meta.total:(e=this.data.total)!=null?e:null},pageRange(){if(this.limit===-1)return 0;if(this.limit===0)return this.lastPage;for(var e=this.currentPage,a=this.keepLength,t=this.lastPage,s=this.limit,l=e-s,m=e+s,d=(s+2)*2,r=(s+2)*2-1,i=[],u=[],p,n=1;n<=t;n++)(n===1||n===t||n>=l&&n<=m||a&&n<d&&e<d-2||a&&n>t-r&&e>t-r+2)&&i.push(n);return i.forEach(function(g){p&&(g-p===2?u.push(p+1):g-p!==1&&u.push("...")),u.push(g),p=g}),u}},methods:{previousPage(){this.selectPage(this.currentPage-1)},nextPage(){this.selectPage(this.currentPage+1)},selectPage(e){e==="..."||e===this.currentPage||this.$emit("pagination-change-page",e)}},render(){return this.$slots.default({data:this.data,limit:this.limit,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:e=>{e.preventDefault(),this.previousPage()}},nextButtonEvents:{click:e=>{e.preventDefault(),this.nextPage()}},pageButtonEvents:e=>({click:a=>{a.preventDefault(),this.selectPage(e)}})})}},B=(e,a)=>{const t=e.__vccOpts||e;for(const[s,l]of a)t[s]=l;return t},U={compatConfig:{MODE:3},inheritAttrs:!1,emits:["pagination-change-page"],components:{RenderlessPagination:R},props:{data:{type:Object,default:()=>{}},limit:{type:Number,default:0},keepLength:{type:Boolean,default:!1},itemClasses:{type:Array,default:()=>["bg-white","text-gray-500","border-gray-300","hover:bg-gray-50"]},activeClasses:{type:Array,default:()=>["bg-blue-50","border-blue-500","text-blue-600"]}},methods:{onPaginationChangePage(e){this.$emit("pagination-change-page",e)}}},A=["disabled"],E=o("span",{class:"sr-only"},"Previous",-1),L=o("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})],-1),$=["aria-current","disabled"],j=["disabled"],D=o("span",{class:"sr-only"},"Next",-1),N=o("svg",{class:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1);function O(e,a,t,s,l,m){const d=x("RenderlessPagination");return h(),b(d,{data:t.data,limit:t.limit,"keep-length":t.keepLength,onPaginationChangePage:m.onPaginationChangePage},{default:k(r=>[r.computed.total>r.computed.perPage?(h(),v("nav",c({key:0},e.$attrs,{class:"inline-flex -space-x-px rounded-md shadow-sm isolate ltr:flex-row rtl:flex-row-reverse","aria-label":"Pagination"}),[o("button",c({class:["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-l-md focus:z-20 disabled:opacity-50",t.itemClasses],disabled:!r.computed.prevPageUrl},P(r.prevButtonEvents,!0)),[f(e.$slots,"prev-nav",{},()=>[E,L])],16,A),(h(!0),v(_,null,y(r.computed.pageRange,(i,u)=>(h(),v("button",c({class:["relative inline-flex items-center px-4 py-2 text-sm font-medium border focus:z-20",[i==r.computed.currentPage?t.activeClasses:t.itemClasses,i==r.computed.currentPage?"z-30":""]],"aria-current":r.computed.currentPage?"page":null,key:u},P(r.pageButtonEvents(i),!0),{disabled:i===r.computed.currentPage}),w(i),17,$))),128)),o("button",c({class:["relative inline-flex items-center px-2 py-2 text-sm font-medium border rounded-r-md focus:z-20 disabled:opacity-50",t.itemClasses],disabled:!r.computed.nextPageUrl},P(r.nextButtonEvents,!0)),[f(e.$slots,"next-nav",{},()=>[D,N])],16,j)],16)):C("",!0)]),_:3},8,["data","limit","keep-length","onPaginationChangePage"])}const M=B(U,[["render",O]]);export{M as i};

import{b as a,j as t,F as c,q as b,n as g,e as n,w as i,d as r,E as u,u as l,h as d,t as h}from"./app-D5X9pEa7.js";const p={class:"text-center mb-4",style:{width:"250px","min-width":"250px"}},m=r("div",null,[r("span",{class:"font-bold"},"OUR EXPERTISE")],-1),_={class:"mb-1 hover:text-orange-500 transition-all"},v={__name:"Nav",props:{jobcategories:Object,jobcategory:Object},setup(s){return(x,f)=>(a(),t("div",p,[m,(a(!0),t(c,null,b(s.jobcategories,e=>(a(),t("div",{key:e.id,class:g(["mb-3 bg-gray-100 dark:bg-gray-700 p-0 border border-gray-300 dark:border-gray-500 hover:border-orange-500 hover:text-orange-500 transition-all",e.id==s.jobcategory.id?"border-orange-500 text-orange-500":""])},[n(l(d),{href:`/expertise/${e.slug}`},{default:i(()=>{var o;return[r("div",{class:"bg-gray-300 dark:bg-gray-800 mb-1",style:u(`height: 90px; background-repeat: no-repeat;  background-size: cover;   background-position: center; background-image: url('${(o=e.media[0])==null?void 0:o.original_url}');`)},null,4)]}),_:2},1032,["href"]),n(l(d),{href:`/expertise/${e.slug}`},{default:i(()=>[r("p",_,h(e.title),1)]),_:2},1032,["href"])],2))),128))]))}};export{v as default};
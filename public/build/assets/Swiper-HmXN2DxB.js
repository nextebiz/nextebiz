import{g as L,i as V,e as j,S as _,a as P,N as z,P as B,b as F,Z as M}from"./zoom-BesraDNg.js";import{s as q,b as p,j as T,e as k,w as S,F as y,q as C,c as A,d as b,u as g}from"./app-ChKAz59O.js";function N(v){let{swiper:e,extendParams:f,on:d}=v;f({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let h=!1,c=!1;e.thumbs={swiper:null};function I(){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const s=t.clickedIndex,i=t.clickedSlide;if(i&&i.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let r;t.params.loop?r=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10):r=s,e.params.loop?e.slideToLoop(r):e.slideTo(r)}function o(){const{thumbs:t}=e.params;if(h)return!1;h=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(V(t.swiper)){const i=Object.assign({},t.swiper);Object.assign(i,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(i),c=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",I),!0}function m(t){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let r=1;const n=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),s.slides.forEach(l=>l.classList.remove(n)),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let l=0;l<r;l+=1)j(s.slidesEl,`[data-swiper-slide-index="${e.realIndex+l}"]`).forEach(a=>{a.classList.add(n)});else for(let l=0;l<r;l+=1)s.slides[e.realIndex+l]&&s.slides[e.realIndex+l].classList.add(n);const u=e.params.thumbs.autoScrollOffset,w=u&&!s.params.loop;if(e.realIndex!==s.realIndex||w){const l=s.activeIndex;let a,x;if(s.params.loop){const O=s.slides.filter(E=>E.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];a=s.slides.indexOf(O),x=e.activeIndex>e.previousIndex?"next":"prev"}else a=e.realIndex,x=a>e.previousIndex?"next":"prev";w&&(a+=x==="next"?u:-1*u),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(a)<0&&(s.params.centeredSlides?a>l?a=a-Math.floor(i/2)+1:a=a+Math.floor(i/2)-1:a>l&&s.params.slidesPerGroup,s.slideTo(a,t?0:void 0))}}d("beforeInit",()=>{const{thumbs:t}=e.params;if(!(!t||!t.swiper))if(typeof t.swiper=="string"||t.swiper instanceof HTMLElement){const s=L(),i=()=>{const n=typeof t.swiper=="string"?s.querySelector(t.swiper):t.swiper;if(n&&n.swiper)t.swiper=n.swiper,o(),m(!0);else if(n){const u=w=>{t.swiper=w.detail[0],n.removeEventListener("init",u),o(),m(!0),t.swiper.update(),e.update()};n.addEventListener("init",u)}return n},r=()=>{if(e.destroyed)return;i()||requestAnimationFrame(r)};requestAnimationFrame(r)}else o(),m(!0)}),d("slideChange update resize observerUpdate",()=>{m()}),d("setTransition",(t,s)=>{const i=e.thumbs.swiper;!i||i.destroyed||i.setTransition(s)}),d("beforeDestroy",()=>{const t=e.thumbs.swiper;!t||t.destroyed||c&&t.destroy()}),Object.assign(e.thumbs,{init:o,update:m})}const D={class:"swiper-zoom-container"},Z=["src"],$={class:"bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600"},G={class:"swiper-zoom-container"},H=["src"],K={__name:"Swiper",props:{images:Array},setup(v){const e=v,f=[z,B,F,M,N],d=q(null),h=c=>{d.value=c};return(c,I)=>(p(),T(y,null,[k(g(P),{style:{"--swiper-navigation-color":"#000000","--swiper-pagination-color":"#000000"},zoom:!0,navigation:!0,pagination:{clickable:!0},modules:f,thumbs:{swiper:d.value},class:"mySwiper"},{default:S(()=>[(p(!0),T(y,null,C(e.images,o=>(p(),A(g(_),{key:o,class:"slide"},{default:S(()=>[b("div",D,[b("img",{src:o},null,8,Z)])]),_:2},1024))),128))]),_:1},8,["thumbs"]),b("div",$,[k(g(P),{onSwiper:h,loop:!0,spaceBetween:0,slidesPerView:6,freeMode:!0,watchSlidesProgress:!0,modules:f,class:"mySwiper"},{default:S(()=>[(p(!0),T(y,null,C(e.images,o=>(p(),A(g(_),{key:o,class:"slide-thumb"},{default:S(()=>[b("div",G,[b("img",{src:o},null,8,H)])]),_:2},1024))),128))]),_:1})])],64))}};export{K as default};
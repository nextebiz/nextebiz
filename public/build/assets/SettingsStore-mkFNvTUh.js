import{I as t}from"./app-O0tkdeBg.js";const r=t("useSettingStore",{state:()=>({theme:localStorage.getItem("theme")||"light",role:""}),getters:{getTheme:function(){return this.theme},getRole:function(){return this.role}},actions:{setTheme:function(e){this.theme=e,localStorage.setItem("theme",e)},setRole:function(e){this.role=e,localStorage.setItem("role",e)}}});export{r as S};
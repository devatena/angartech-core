(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.AngartTechCore={},e.Vue))})(this,function(e,t){"use strict";const a=t.defineComponent({name:"MeuBotao",props:{primary:{type:Boolean,required:!1,default:!1}},setup(o){return{computedClass:t.computed(()=>o.primary?"btn-primary":"btn-secondary")}}}),p=(o,n)=>{const s=o.__vccOpts||o;for(const[u,i]of n)s[u]=i;return s};function d(o,n,s,u,i,m){return t.openBlock(),t.createElementBlock("button",null," opids fs")}const r=p(a,[["render",d]]),c={MeuBotao:r},f={install:o=>{Object.keys(c).forEach(n=>{o.component(n,c[n])})}};e.MeuBotao=r,e.default=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

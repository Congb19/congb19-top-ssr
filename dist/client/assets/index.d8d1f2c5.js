import{d as _,_ as i,u as f,o as c,c as p,a as n,t as l,F,r as d,b as u,w as r,e as a}from"./index.52b2e5e7.js";const $=_({name:"UsePinia",setup(){const e=f();return{userStore:e,addAge:()=>{e.updateAge(e.age+1),console.log(e.age)}}}}),b=n("h2",null,"\u6B22\u8FCE\u8BBF\u95EEcongb19-top-ssr",-1),C=n("br",null,null,-1),E=n("br",null,null,-1);function v(e,o,g,m,h,B){return c(),p(F,null,[b,n("div",null,l(e.userStore.name)+"\u7684\u5E74\u9F84\uFF1A "+l(e.userStore.age),1),C,n("button",{onClick:o[0]||(o[0]=(...s)=>e.addAge&&e.addAge(...s))},"\u70B9\u51FB\u7ED9"+l(e.userStore.name)+"\u7684\u5E74\u9F84\u589E\u52A0\u4E00\u5C81",1),E],64)}var A=i($,[["render",v]]),S="/assets/logo.03d6d6da.png";const k=_({name:"IndexPage",components:{UsePinia:A}}),D=n("img",{alt:"Vue logo",src:S},null,-1),P=n("br",null,null,-1),U=a("\u70B9\u51FB\u8DF3\u8F6C\u81F3login"),V=n("br",null,null,-1),x=n("br",null,null,-1),N=a("\u70B9\u51FB\u8DF3\u8F6C\u81F3user\u9875\u9762"),w=n("br",null,null,-1),y=n("br",null,null,-1),I=a("\u70B9\u51FB\u8DF3\u8F6C\u81F3vueuse\u9875\u9762");function T(e,o,g,m,h,B){const s=d("UsePinia"),t=d("router-link");return c(),p(F,null,[D,u(s),P,u(t,{to:"/login"},{default:r(()=>[U]),_:1}),V,x,u(t,{to:"/user"},{default:r(()=>[N]),_:1}),w,y,u(t,{to:"/vueuse"},{default:r(()=>[I]),_:1})],64)}var q=i(k,[["render",T]]);export{q as default};

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{2437:function(t,n,e){"use strict";(function(t){e("7343");r(e("66fd"));var n=r(e("55de"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"44e9":function(t,n,e){},"55de":function(t,n,e){"use strict";e.r(n);var r=e("96f6"),a=e("cd77");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("80a0");var i,c=e("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"3b1ac260",null,!1,r["a"],i);n["default"]=o.exports},"80a0":function(t,n,e){"use strict";var r=e("44e9"),a=e.n(r);a.a},"96f6":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var a=function(){var t=this,n=t.$createElement;t._self._c},u=[]},b857:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,a,u,i){try{var c=t[u](i),o=c.value}catch(f){return void e(f)}c.done?n(o):Promise.resolve(o).then(r,a)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var i=t.apply(n,e);function c(t){u(i,r,a,c,o,"next",t)}function o(t){u(i,r,a,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(t){var n=this;return i(r.default.mark((function e(){var a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.id=t.id,e.next=3,n.$api.info("news",t.id);case 3:a=e.sent,n.detail=a.data,n.detail.content=n.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return e.stop()}}),e)})))()}};n.default=c},cd77:function(t,n,e){"use strict";e.r(n);var r=e("b857"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a}},[["2437","common/runtime","common/vendor"]]]);
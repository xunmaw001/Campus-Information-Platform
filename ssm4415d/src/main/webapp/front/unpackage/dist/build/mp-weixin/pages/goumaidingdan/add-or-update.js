(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goumaidingdan/add-or-update"],{"3ef6":function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,i,e,a,r,u,t){try{var o=n[u](t),s=o.value}catch(c){return void e(c)}o.done?i(s):Promise.resolve(s).then(a,r)}function t(n){return function(){var i=this,e=arguments;return new Promise((function(a,r){var t=n.apply(i,e);function o(n){u(t,a,r,o,s,"next",n)}function s(n){u(t,a,r,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("6591"))}.bind(null,e)).catch(e.oe)},s={data:function(){return{ruleForm:{wupinmingcheng:"",wupinfenlei:"",tupian:"",guige:"",xinjiuchengdu:"",yuanjia:"",ershoujia:"",shangpinmiaoshu:"",beizhu:"",maijiazhanghao:"",maijiaxingming:"",maijiashouji:"",yonghuming:"",xingming:"",shouji:"",jiaoyifangshi:"",dizhi:"",jiaoyishijian:"",sfsh:"",shhf:"",ispay:"",userid:""},jiaoyifangshiOptions:[],jiaoyifangshiIndex:0,user:{},ro:{wupinmingcheng:!1,wupinfenlei:!1,tupian:!1,guige:!1,xinjiuchengdu:!1,yuanjia:!1,ershoujia:!1,shangpinmiaoshu:!1,beizhu:!1,maijiazhanghao:!1,maijiaxingming:!1,maijiashouji:!1,yonghuming:!1,xingming:!1,shouji:!1,jiaoyifangshi:!1,dizhi:!1,jiaoyishijian:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(i){var e=this;return t(a.default.mark((function r(){var u,t,o,s;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=n.getStorageSync("nowTable"),r.next=3,e.$api.session(u);case 3:if(t=r.sent,e.user=t.data,e.ruleForm.yonghuming=e.user.yonghuming,e.ruleForm.xingming=e.user.xingming,e.ruleForm.shouji=e.user.shouji,e.jiaoyifangshiOptions="面对面交易,送货上门".split(","),e.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(e.ruleForm.refid=i.refid,e.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){r.next=17;break}return e.ruleForm.id=i.id,r.next=15,e.$api.info("goumaidingdan",e.ruleForm.id);case 15:t=r.sent,e.ruleForm=t.data;case 17:if(!i.cross){r.next=100;break}o=n.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 20:if((r.t1=r.t0()).done){r.next=100;break}if(s=r.t1.value,"wupinmingcheng"!=s){r.next=26;break}return e.ruleForm.wupinmingcheng=o[s],e.ro.wupinmingcheng=!0,r.abrupt("continue",20);case 26:if("wupinfenlei"!=s){r.next=30;break}return e.ruleForm.wupinfenlei=o[s],e.ro.wupinfenlei=!0,r.abrupt("continue",20);case 30:if("tupian"!=s){r.next=34;break}return e.ruleForm.tupian=o[s],e.ro.tupian=!0,r.abrupt("continue",20);case 34:if("guige"!=s){r.next=38;break}return e.ruleForm.guige=o[s],e.ro.guige=!0,r.abrupt("continue",20);case 38:if("xinjiuchengdu"!=s){r.next=42;break}return e.ruleForm.xinjiuchengdu=o[s],e.ro.xinjiuchengdu=!0,r.abrupt("continue",20);case 42:if("yuanjia"!=s){r.next=46;break}return e.ruleForm.yuanjia=o[s],e.ro.yuanjia=!0,r.abrupt("continue",20);case 46:if("ershoujia"!=s){r.next=50;break}return e.ruleForm.ershoujia=o[s],e.ro.ershoujia=!0,r.abrupt("continue",20);case 50:if("shangpinmiaoshu"!=s){r.next=54;break}return e.ruleForm.shangpinmiaoshu=o[s],e.ro.shangpinmiaoshu=!0,r.abrupt("continue",20);case 54:if("beizhu"!=s){r.next=58;break}return e.ruleForm.beizhu=o[s],e.ro.beizhu=!0,r.abrupt("continue",20);case 58:if("maijiazhanghao"!=s){r.next=62;break}return e.ruleForm.maijiazhanghao=o[s],e.ro.maijiazhanghao=!0,r.abrupt("continue",20);case 62:if("maijiaxingming"!=s){r.next=66;break}return e.ruleForm.maijiaxingming=o[s],e.ro.maijiaxingming=!0,r.abrupt("continue",20);case 66:if("maijiashouji"!=s){r.next=70;break}return e.ruleForm.maijiashouji=o[s],e.ro.maijiashouji=!0,r.abrupt("continue",20);case 70:if("yonghuming"!=s){r.next=74;break}return e.ruleForm.yonghuming=o[s],e.ro.yonghuming=!0,r.abrupt("continue",20);case 74:if("xingming"!=s){r.next=78;break}return e.ruleForm.xingming=o[s],e.ro.xingming=!0,r.abrupt("continue",20);case 78:if("shouji"!=s){r.next=82;break}return e.ruleForm.shouji=o[s],e.ro.shouji=!0,r.abrupt("continue",20);case 82:if("jiaoyifangshi"!=s){r.next=86;break}return e.ruleForm.jiaoyifangshi=o[s],e.ro.jiaoyifangshi=!0,r.abrupt("continue",20);case 86:if("dizhi"!=s){r.next=90;break}return e.ruleForm.dizhi=o[s],e.ro.dizhi=!0,r.abrupt("continue",20);case 90:if("jiaoyishijian"!=s){r.next=94;break}return e.ruleForm.jiaoyishijian=o[s],e.ro.jiaoyishijian=!0,r.abrupt("continue",20);case 94:if("userid"!=s){r.next=98;break}return e.ruleForm.userid=o[s],e.ro.userid=!0,r.abrupt("continue",20);case 98:r.next=20;break;case 100:e.styleChange();case 101:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jiaoyishijianConfirm:function(n){console.log(n),this.ruleForm.jiaoyishijian=n.result,this.$forceUpdate()},jiaoyifangshiChange:function(n){this.jiaoyifangshiIndex=n.target.value,this.ruleForm.jiaoyifangshi=this.jiaoyifangshiOptions[this.jiaoyifangshiIndex]},tupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.tupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return t(a.default.mark((function i(){return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.ruleForm.id){i.next=5;break}return i.next=3,n.$api.update("goumaidingdan",n.ruleForm);case 3:i.next=7;break;case 5:return i.next=7,n.$api.add("goumaidingdan",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return i.stop()}}),i)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),a=i.getMonth()+1,r=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(e,"-").concat(a,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};i.default=s}).call(this,e("543d")["default"])},"80ad":function(n,i,e){"use strict";(function(n){e("7343");a(e("66fd"));var i=a(e("c148"));function a(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},"92c3":function(n,i,e){"use strict";var a=e("a52d"),r=e.n(a);r.a},a52d:function(n,i,e){},c072:function(n,i,e){"use strict";e.r(i);var a=e("3ef6"),r=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(i,n,(function(){return a[n]}))}(u);i["default"]=r.a},c148:function(n,i,e){"use strict";e.r(i);var a=e("d06b"),r=e("c072");for(var u in r)"default"!==u&&function(n){e.d(i,n,(function(){return r[n]}))}(u);e("92c3");var t,o=e("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"7fb0cbce",null,!1,a["a"],t);i["default"]=s.exports},d06b:function(n,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return u})),e.d(i,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"6591"))}},r=function(){var n=this,i=n.$createElement;n._self._c},u=[]}},[["80ad","common/runtime","common/vendor"]]]);
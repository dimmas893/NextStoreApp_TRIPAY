(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"3b36":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",[a("q-toolbar",[a("q-toolbar-title",[t._v("\n       Dashboard\n      ")]),a("q-btn",{attrs:{to:{name:"Home"},stretch:"",flat:"","icon-right":"arrow_forward",label:"Beranda","no-caps":""}})],1),a("q-toolbar",{staticClass:"bg-grey-1"},[a("q-btn",{attrs:{stretch:"",color:"primary",flat:"",label:"Pesanan Saya","no-caps":"",to:{name:"CustomerOrder"}}}),a("q-separator",{attrs:{vertical:"",color:"primary"}}),a("q-btn",{attrs:{stretch:"",color:"primary",flat:"",label:"Akun Saya","no-caps":"",to:{name:"CustomerAccount"}}}),a("q-space"),a("q-btn",{attrs:{stretch:"",color:"primary",flat:"","no-caps":"",label:"Logout"},on:{click:t.LogOut}})],1)],1),a("q-page-container",[a("router-view")],1)],1)},o=[],n=a("ded3"),s=a.n(n),c=a("2f62"),i=a("852e"),l=a.n(i),u={name:"AdminLayout",computed:s()({},Object(c["e"])({isCheckLogin:function(t){return t.user.isCheckLogin},shop:function(t){return t.shop},user:function(t){return t.user.user}})),created:function(){this.$store.dispatch("getAdminConfig"),this.shop||this.$store.dispatch("getShop"),l.a.get("__token")&&(this.user||this.$store.dispatch("user/getUser"))},methods:{LogOut:function(){this.$store.dispatch("user/logout")}}},p=u,h=a("2877"),b=a("4d5a"),d=a("e359"),f=a("65c6"),m=a("6ac5"),g=a("9c40"),q=a("eb85"),w=a("2c91"),y=a("09e3"),Q=a("eebe"),k=a.n(Q),C=Object(h["a"])(p,r,o,!1,null,null,null);e["default"]=C.exports;k()(C,"components",{QLayout:b["a"],QHeader:d["a"],QToolbar:f["a"],QToolbarTitle:m["a"],QBtn:g["a"],QSeparator:q["a"],QSpace:w["a"],QPageContainer:y["a"]})}}]);
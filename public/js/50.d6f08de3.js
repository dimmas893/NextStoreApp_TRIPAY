(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{ae08:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("q-header",[a("q-toolbar",[a("q-btn",{attrs:{to:{name:"Settings"},flat:"",round:"",dense:"",icon:"arrow_back"}}),a("q-toolbar-title",[t._v("\n       Promo\n      ")])],1)],1),a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row items-center justify-between q-px-sm"},[a("div",{staticClass:"text-h6"},[t._v("Promo Diskon")]),a("div",{staticClass:"row items-center q-gutter-x-sm"},[a("q-btn",{attrs:{unelevated:"",color:"primary"},on:{click:t.handleAdd}},[a("q-icon",{attrs:{name:"add"}}),a("span",[t._v("Promo")])],1)],1)])]),a("div",{staticClass:"q-py-md"},[a("q-list",{attrs:{separator:""}},[a("q-item",[a("q-item-section",{attrs:{side:""}},[t._v("#")]),a("q-item-section",[t._v("Label / Produk Total")]),a("q-item-section",[t._v("Status")]),a("q-item-section",{attrs:{side:""}},[t._v("Action")])],1),t._l(t.promos,(function(e,s){return a("q-item",{key:s},[a("q-item-section",{attrs:{side:""}},[t._v(t._s(s+1))]),a("q-item-section",[a("q-item-label",[a("span",[t._v(t._s(e.label))]),a("span",{staticClass:"q-ml-sm"},[t._v("("+t._s(e.products_count)+")")])])],1),a("q-item-section",[a("q-item-label",[a("q-chip",{attrs:{size:"sm","text-color":"white",color:e.is_active?"green":"grey",label:e.is_active?"Active":"Inactive"}})],1)],1),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"q-gutter-sm"},[a("q-btn",{attrs:{size:"sm",unelevated:"",color:"red",icon:"delete",round:""},on:{click:function(a){return t.handleDelete(e.id)}}}),a("q-btn",{attrs:{size:"sm",unelevated:"",color:"teal",icon:"edit_calendar",round:""},on:{click:function(a){return t.handleEdit(e)}}}),a("q-btn",{attrs:{size:"sm",unelevated:"",color:"blue",icon:"edit_note",round:""},on:{click:function(a){return t.$router.push({name:"PromoDetail",params:{id:e.id}})}}})],1)])],1)})),t.promos.length?t._e():a("q-item",[a("q-item-section",{staticClass:"text-center"},[t._v("\n            Tidak ada data\n          ")])],1)],2)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("q-card",{staticClass:"card-medium"},[a("div",{staticClass:"card-heading"},[t._v(t._s(t.formType)+" Promo")]),a("q-form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("q-card-section",{staticClass:"q-gutter-y-sm"},[a("q-input",{attrs:{required:"",filled:"",square:"",label:"Label",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}}),a("q-input",{attrs:{label:"Start Date",filled:"",readonly:"",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1),a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.start_date,callback:function(e){t.$set(t.form,"start_date",e)},expression:"form.start_date"}}),a("q-input",{attrs:{label:"End Date",filled:"",readonly:"",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1),a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{attrs:{cover:"","transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}},[a("div",{staticClass:"row items-center justify-end"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}]),model:{value:t.form.end_date,callback:function(e){t.$set(t.form,"end_date",e)},expression:"form.end_date"}}),a("div",{staticClass:"flex items-center justify-end q-mt-md q-gutter-x-sm"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{outline:"",color:"primary",label:"Batal"}}),a("q-btn",{attrs:{unelevated:"",color:"primary",type:"submit",label:"Simpan"}})],1)],1)],1)],1)],1)],1)},o=[],r=a("ded3"),i=a.n(r),n=a("2f62"),l={name:"PromoIndex",data:function(){return{modal:!1,form:{id:"",start_date:"",end_date:"",label:""},selectedData:null,formType:"Tambah",search:"",productSearch:[]}},computed:i()(i()({},Object(n["e"])({products:function(t){return t.promo.products},promos:function(t){return t.promo.promos}})),{},{isDesktop:function(){return window.innerWidth>600}}),methods:i()(i()({},Object(n["b"])("promo",["getPromos","storePromo","updatePromo","deletePromo","getProductPromo"])),{},{handleAdd:function(){this.clearForm(),this.formType="Tambah",this.modal=!0},handleEdit:function(t){this.clearForm(),this.formType="Edit",this.selectedData=t,this.setInputData(),this.modal=!0},handleDelete:function(t){var e=this;this.$q.dialog({title:"Yakin akan menghapus ini?",cancel:!0}).onOk((function(){e.deletePromo(t)}))},setInputData:function(){this.form.id=this.selectedData.id,this.form.label=this.selectedData.label,this.form.start_date=this.selectedData.start_date,this.form.end_date=this.selectedData.end_date,this.form.discount_id=this.selectedData.discount_id},submit:function(){var t=this,e=this.form;"Edit"==this.formType&&(e._method="PUT",this.updatePromo(e).then((function(){t.closeModal()}))),"Tambah"==this.formType&&this.storePromo(e).then((function(){t.closeModal()}))},searchProduct:function(t){},closeModal:function(){this.clearForm(),this.modal=!1},clearForm:function(){this.form.id="",this.form.label="",this.form.start_date="",this.form.end_date=""}}),mounted:function(){this.getPromos()}},c=l,d=a("2877"),m=a("9989"),u=a("e359"),p=a("65c6"),f=a("9c40"),h=a("6ac5"),q=a("0016"),b=a("1c1c"),v=a("66e5"),_=a("4074"),y=a("0170"),k=a("b047"),C=a("24e8"),D=a("f09f"),w=a("0378"),x=a("a370"),P=a("27f9"),Q=a("7cbe"),g=a("52ee"),Y=a("ca78"),T=a("7f67"),M=a("eebe"),$=a.n(M),j=Object(d["a"])(c,s,o,!1,null,null,null);e["default"]=j.exports;$()(j,"components",{QPage:m["a"],QHeader:u["a"],QToolbar:p["a"],QBtn:f["a"],QToolbarTitle:h["a"],QIcon:q["a"],QList:b["a"],QItem:v["a"],QItemSection:_["a"],QItemLabel:y["a"],QChip:k["a"],QDialog:C["a"],QCard:D["a"],QForm:w["a"],QCardSection:x["a"],QInput:P["a"],QPopupProxy:Q["a"],QDate:g["a"],QTime:Y["a"]}),$()(j,"directives",{ClosePopup:T["a"]})}}]);
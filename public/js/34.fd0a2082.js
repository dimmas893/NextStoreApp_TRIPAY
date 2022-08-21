(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34],{bc2a:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"bg-grey-2 q-pb-lg"},[i("q-header",[i("q-toolbar",[i("q-btn",{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{single:!0}}],attrs:{flat:"",round:"",dense:"",icon:"arrow_back"}}),i("q-toolbar-title",[t._v("\n       Konfigurasi Aplikasi\n      ")])],1)],1),t.config?i("div",{staticClass:"q-gutter-y-lg q-pt-md"},[i("tampilan"),i("theming"),i("checkout-config"),i("shipping"),i("notification"),i("tripay"),i("system-update")],1):t._e(),i("q-inner-loading",{attrs:{showing:t.loading}})],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-form",{on:{submit:function(e){return e.preventDefault(),t.updateData(e)}}},[i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"flex items-center justify-between"},[i("div",{staticClass:"text-md text-weight-bold"},[t._v("Ekspedisi")]),i("div",{staticClass:"q-px-sm rounded-borders text-white",class:t.config&&t.config.can_shipping?"bg-green-7":"bg-grey-6"},[t._v(t._s(t.config&&t.config.can_shipping?"Active":"Disabled"))])]),i("div",{staticClass:"text-caption text-grey-7"},[i("div",[t._v("Pengaturan ongkir otomatis by Rajaongkir")]),i("div",[t._v("Silahkan daftar di rajaongkir.com untuk mendapatkan apikey")])]),i("div",{staticClass:"q-gutter-y-sm q-py-md"},[i("q-select",{attrs:{label:"Raja Ongkir Tipe",filled:"",options:t.rajaongkirtypes},on:{input:t.selectCourierType},model:{value:t.formdata.rajaongkir_type,callback:function(e){t.$set(t.formdata,"rajaongkir_type",e)},expression:"formdata.rajaongkir_type"}}),i("q-input",{attrs:{filled:"",label:"Raja Ongkir API KEY"},model:{value:t.formdata.rajaongkir_apikey,callback:function(e){t.$set(t.formdata,"rajaongkir_apikey",e)},expression:"formdata.rajaongkir_apikey"}})],1),t.config&&t.config.is_shippable?i("div",{staticClass:"q-mt-lg"},[i("div",{staticClass:"text-grey-8 text-sm q-py-sm"},[t._v("Pengaturan Gudang Pengiriman")]),i("div",{staticClass:"cursor-pointer q-pa-md full-width border q-filled",on:{click:t.changeWarehouse}},[t._v(t._s(t.warehouseTitle()))]),t.theCouriers.length?i("div",{staticClass:"q-mt-md"},[i("div",{staticClass:"text-grey-8 text-sm q-py-sm"},[t._v("Pilih Kurir")]),i("div",{staticClass:"q-gutter-sm"},t._l(t.theCouriers,(function(e,a){return i("q-btn",{key:a,attrs:{unelevated:"",rounded:"",size:"10px",color:t.isCourierActive(e)?"green-5":"grey-5",label:e},on:{click:function(i){return t.handleSelectCourier(e)}}})})),1)]):t._e()]):t._e()]),t.config&&t.config.is_shippable?i("q-card-section",[i("div",[i("div",{staticClass:"text-md text-weight-bold"},[t._v("Pengaturan COD")]),i("div",{staticClass:"q-mb-sm text-caption text-grey-7"},[t._v("Pengaturan kecamatan tujuan untuk pengiriman COD "),i("br"),t._v("( Kosongkan untuk menonaktifkan ) ")]),i("div",[i("q-input",{attrs:{filled:"",loading:t.searchLoading&&"cod"==t.searchType,placeholder:"Ketik kecamatan tujuan COD",debounce:"600"},on:{input:t.searchCodData},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[t.search?i("template",{slot:"append"},[i("q-btn",{attrs:{icon:"close",flat:"",color:"red",round:""},on:{click:t.closeSubdistrictBox}})],1):t._e()],2),"cod"==t.searchType&&t.subdistrictOptions.length?i("div",{staticClass:"relative"},[i("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[i("div",{staticClass:"absolute full-width z-30"},[i("q-card",{staticClass:"bg-white full-width full-height"},[i("div",{staticClass:"scroll",staticStyle:{height:"100%","max-height":"300px"}},[i("q-list",{staticClass:"bg-grey-1"},t._l(t.subdistrictOptions,(function(e,a){return i("q-item",{key:a,attrs:{clickable:""},on:{click:function(i){return t.selectCodItemData(e)}}},[i("q-item-section",{attrs:{side:""}},[t.hasCodData(e)?[i("q-icon",{attrs:{name:"remove_circle",size:"17px",color:"red"}})]:[i("q-icon",{attrs:{name:"add_circle",size:"17px",color:"green"}})]],2),i("q-item-section",[i("q-item-label",[t._v(t._s(e.subdistrict_name)+" - "+t._s(e.type)+" "+t._s(e.city))])],1)],1)})),1)],1),i("q-inner-loading",{attrs:{showing:t.searchLoading}})],1)],1)])],1):t._e()],1),i("div",{staticClass:"q-py-md"},[i("q-list",{attrs:{separator:"",bordered:"",dense:""}},[i("q-item",[i("q-item-section",{attrs:{avatar:""}},[t._v("\n                  #\n                ")]),i("q-item-section",[t._v("\n                  Alamat\n                ")]),i("q-item-section",{attrs:{side:""}},[t._v("\n                  Ongkos Kirim\n                ")])],1),t._l(t.formdata.cod_list,(function(e,a){return i("q-item",{key:a},[i("q-item-section",{attrs:{avatar:""}},[i("q-btn",{attrs:{icon:"close",color:"red",round:"",flat:"",padding:"5px",size:"sm"},on:{click:function(e){return t.removeCodList(a)}}})],1),i("q-item-section",[i("q-item-label",[t._v(t._s(e.subdistrict_name)+" "+t._s(e.type)+" "+t._s(e.city))])],1),i("q-item-section",{attrs:{side:""}},[i("div",[i("q-input",{staticStyle:{width:"120px"},attrs:{square:"",outlined:"",dense:"",min:"0",prefix:"Rp",mask:"########",required:""},model:{value:t.formdata.cod_list[a].price,callback:function(e){t.$set(t.formdata.cod_list[a],"price",e)},expression:"formdata.cod_list[index].price"}})],1)])],1)}))],2)],1)])]):t._e(),i("q-card-actions",{staticClass:"q-pa-md justify-end"},[i("q-btn",{attrs:{type:"submit",unelevated:"",size:"12px",label:"Simpan Ekspedisi",color:"blue-7"}})],1)],1)],1),i("q-dialog",{model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[i("q-card",{staticStyle:{width:"100%","max-width":"500px"}},[i("q-card-section",[i("div",{staticClass:"flex items-center justify-between"},[i("div",{staticClass:"text-md text-weight-bold q-mb-sm"},[t._v("Pilih Gudang Pengiriman")]),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",icon:"close"}})],1),i("div",{staticClass:"q-pa-sm q-gutter-y-sm"},[i("q-input",{ref:"warehouse",attrs:{loading:t.searchLoading&&"warehouse"==t.searchType,placeholder:"Ketik nama kecamatan",debounce:"1000"},on:{input:t.searchWarehouseData},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},["warehouse"==t.searchType&&t.subdistrictOptions.length?i("div",{staticClass:"relative bg-grey-2",staticStyle:{"min-height":"100px","max-height":"300px","overflow-y":"auto"}},[i("q-list",t._l(t.subdistrictOptions,(function(e){return i("q-item",{key:e.id,attrs:{clickable:""},on:{click:function(i){return t.selectSubdistrict(e)}}},[i("q-item-section",[i("q-item-label",[t._v(t._s(e.subdistrict_name)+" - "+t._s(e.type)+" "+t._s(e.city))])],1)],1)})),1),i("q-inner-loading",{attrs:{showing:t.searchLoading}})],1):t._e()])],1)])],1)],1)],1)},n=[],r=i("ded3"),c=i.n(r),l=(i("ac1f"),i("1276"),i("99af"),i("caad"),i("2532"),i("4de4"),i("a15b"),i("841c"),i("a434"),i("d3b7"),i("e6cf"),i("a79d"),i("758b")),d={name:"Ekspedisi",data:function(){return{codListModal:!1,modal:!1,rajaongkirtypes:["starter","basic","pro"],subdistrictOptions:[],search:"",isWarehouseSearch:!1,searchType:"cod",searchLoading:!1,formdata:{rajaongkir_type:"",rajaongkir_apikey:"",warehouse_id:"",warehouse_address:null,rajaongkir_couriers:"",cod_list:[]}}},computed:{courierHasSelect:function(){return this.formdata.rajaongkir_couriers?this.formdata.rajaongkir_couriers.split(","):[]},theCouriers:function(){return"pro"==this.formdata.rajaongkir_type?this.config.courier_available.pro:"basic"==this.formdata.rajaongkir_type?this.config.courier_available.basic:this.config.courier_available.starter},config:function(){return this.$store.state.config}},mounted:function(){this.getAdminConfig()},methods:{changeWarehouse:function(){var t=this;this.modal=!0,setTimeout((function(){t.$refs.warehouse.focus()}),300)},warehouseTitle:function(){return this.formdata.warehouse_address?"".concat(this.formdata.warehouse_address.subdistrict_name," - ").concat(this.formdata.warehouse_address.type," ").concat(this.formdata.warehouse_address.city,", ").concat(this.formdata.warehouse_address.province):"Pilih Gudang Pengiriman"},setConfig:function(t){this.formdata.cod_list=t.cod_list?t.cod_list:[],this.formdata.rajaongkir_type=t.rajaongkir_type,this.formdata.rajaongkir_apikey=t.rajaongkir_apikey,this.formdata.rajaongkir_couriers=t.rajaongkir_couriers,this.formdata.warehouse_address=t.warehouse_address,this.formdata.warehouse_id=t.warehouse_id},selectCourierType:function(){this.formdata.rajaongkir_couriers=""},isCourierActive:function(t){return!!this.courierHasSelect.length&&!!this.courierHasSelect.includes(t)},handleSelectCourier:function(t){var e=this.courierHasSelect;e.includes(t)?e=e.filter((function(e){return e!=t})):e.push(t),e.length&&(this.formdata.rajaongkir_couriers=e.join(","))},showNotify:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?this.$q.notify({type:"negative",message:"Gagal memperbarui data"}):this.$q.notify({type:"positive",message:"Berhasil memperbarui data"})},updateData:function(){var t=this;Object(l["a"])().post("config",this.formdata).then((function(){t.$store.dispatch("getAdminConfig"),t.showNotify()})).catch((function(){t.showNotify(error)}))},submitWarehouse:function(){this.updateData()},setLoading:function(t){this.$store.commit("SET_LOADING",t)},selectSubdistrict:function(t){this.formdata.warehouse_id=t.city_id,this.formdata.warehouse_address=t,this.modal=!1,this.subdistrictOptions=[],this.search=""},selectCodItemData:function(t){var e=this.formdata.cod_list.filter((function(e){return e.subdistrict_id==t.subdistrict_id}));e.length&&(this.formdata.cod_list=this.formdata.cod_list.filter((function(e){return e.subdistrict_id!=t.subdistrict_id}))),this.formdata.cod_list.push(c()(c()({},t),{},{price:0})),this.search="",this.subdistrictOptions=[]},isInWarehouseItem:function(t){return this.formdata.warehouse_address.subdistrict_id==t.subdistrict_id},hasCodData:function(t){var e=this.formdata.cod_list.filter((function(e){return e.subdistrict_id==t.subdistrict_id}));return!!e.length},removeCodList:function(t){this.formdata.cod_list.splice(t,1)},searchWarehouseData:function(){this.searchType="warehouse",this.findSubdistrict()},searchCodData:function(){this.searchType="cod",this.findSubdistrict()},getAdminConfig:function(){var t=this;Object(l["a"])().get("adminConfig").then((function(e){200==e.status&&t.setConfig(e.data.results)}))},findSubdistrict:function(){var t=this;this.subdistrictOptions=[],this.search.length<3||(this.searchLoading=!0,Object(l["a"])().get("shipping/findSubdistrict/"+this.search).then((function(e){200==e.status&&(e.data.success?t.subdistrictOptions=e.data.results:t.$q.notify({type:"negative",message:e.data.message}))})).finally((function(){t.searchLoading=!1})))},closeSubdistrictBox:function(){this.subdistrictOptions=[],this.search=""}}},u=d,m=i("2877"),f=i("0378"),p=i("f09f"),h=i("a370"),g=i("ddd8"),_=i("27f9"),v=i("9c40"),y=i("1c1c"),b=i("66e5"),q=i("4074"),k=i("0016"),C=i("0170"),w=i("74f7"),x=i("4b7e"),Q=i("24e8"),$=i("7f67"),j=i("eebe"),S=i.n(j),T=Object(m["a"])(u,o,n,!1,null,null,null),D=T.exports;S()(T,"components",{QForm:f["a"],QCard:p["a"],QCardSection:h["a"],QSelect:g["a"],QInput:_["a"],QBtn:v["a"],QList:y["a"],QItem:b["a"],QItemSection:q["a"],QIcon:k["a"],QItemLabel:C["a"],QInnerLoading:w["a"],QCardActions:x["a"],QDialog:Q["a"]}),S()(T,"directives",{ClosePopup:$["a"]});var O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-subtitle1 text-weight-bold"},[t._v("Basic")]),i("div",{staticClass:"text-caption text-grey-7"},[t._v("Pengaturan tampilan produk dan social proof")])]),i("q-list",[i("q-item",[i("q-item-section",[i("q-item-label",[t._v("\n          Tampilan produk beranda\n        ")])],1),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"q-gutter-x-sm"},[i("q-btn",{attrs:{label:"Grid Mode",size:"sm",unelevated:"",color:"grid"==t.form.home_view_mode?"green-7":"grey-6",dense:"",icon:"grid_view"},on:{click:function(e){return t.changeHomeViewMode("grid")}}},[i("q-tooltip",[t._v("\n              Grid Mode\n            ")])],1),i("q-btn",{attrs:{label:"List Mode",size:"sm",unelevated:"",color:"list"==t.form.home_view_mode?"green-7":"grey-6",dense:"",icon:"view_list"},on:{click:function(e){return t.changeHomeViewMode("list")}}},[i("q-tooltip",[t._v("\n              List Mode\n            ")])],1)],1)])],1),i("q-item",[i("q-item-section",[i("q-item-label",[t._v("\n         Tampilan produk katalog\n        ")])],1),i("q-item-section",{attrs:{side:""}},[i("div",{staticClass:"q-gutter-x-sm"},[i("q-btn",{attrs:{label:"Grid Mode",size:"sm",unelevated:"",color:"grid"==t.form.product_view_mode?"green-7":"grey-6",dense:"",icon:"grid_view"},on:{click:function(e){return t.changeProductViewMode("grid")}}},[i("q-tooltip",[t._v("\n              Grid Mode\n            ")])],1),i("q-btn",{attrs:{label:"List Mode",size:"sm",unelevated:"",color:"list"==t.form.product_view_mode?"green-7":"grey-6",dense:"",icon:"view_list"},on:{click:function(e){return t.changeProductViewMode("list")}}},[i("q-tooltip",[t._v("\n              List Mode\n            ")])],1)],1)])],1),i("q-item",{staticClass:"q-mt-md"},[i("q-item-section",[i("q-item-label",{staticClass:"text-weight-medium"},[t._v("Social Proof Popup")]),i("div",{staticClass:"q-mb-sm text-caption text-grey-7 q-mt-sm"},[t._v("\n           Pengaturan social proof notifikasi.\n         ")])],1),i("q-item-section",{attrs:{side:"",top:""}},[i("q-toggle",{attrs:{label:t.form.is_notifypro?"ON":"OFF","left-label":"",color:"green-6"},model:{value:t.form.is_notifypro,callback:function(e){t.$set(t.form,"is_notifypro",e)},expression:"form.is_notifypro"}})],1)],1),t.form.is_notifypro?i("q-item",[i("q-item-section",[i("q-input",{attrs:{outlined:"",dense:"",label:"Jeda Waktu Tayang",mask:"###",hint:"Popup akan tayang setiap "+t.form.notifypro_interval+" Detik"},model:{value:t.form.notifypro_interval,callback:function(e){t.$set(t.form,"notifypro_interval",e)},expression:"form.notifypro_interval"}})],1),i("q-item-section",[i("q-input",{attrs:{outlined:"",dense:"",label:"Durasi Penayangan",mask:"###",hint:"Popup akan tayang selama "+t.form.notifypro_timeout+" Detik"},model:{value:t.form.notifypro_timeout,callback:function(e){t.$set(t.form,"notifypro_timeout",e)},expression:"form.notifypro_timeout"}})],1)],1):t._e()],1),i("q-card-section",{staticClass:"flex justify-end"},[i("q-btn",{attrs:{unelevated:"",size:"12px",label:"Simpan",color:"blue-7"},on:{click:t.saveTampilan}})],1)],1)},I=[],P={data:function(){return{form:{home_view_mode:"",product_view_mode:"",is_notifypro:!1,notifypro_interval:20,notifypro_timeout:4}}},computed:{config:function(){return this.$store.state.config}},mounted:function(){this.form.product_view_mode=this.config.product_view_mode,this.form.home_view_mode=this.config.home_view_mode,this.form.is_notifypro=this.config.is_notifypro,this.form.notifypro_interval=this.config.notifypro_interval,this.form.notifypro_timeout=this.config.notifypro_timeout},methods:{showNotify:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?this.$q.notify({type:"negative",message:"Gagal memperbarui data"}):this.$q.notify({type:"positive",message:"Berhasil memperbarui data"})},changeHomeViewMode:function(t){this.form.home_view_mode=t},changeProductViewMode:function(t){this.form.product_view_mode=t},saveTampilan:function(){var t=this;c()(c()({},this.config),this.form);Object(l["a"])().post("config",this.form).then((function(e){200==e.status&&t.$store.dispatch("getAdminConfig"),t.showNotify()})).catch((function(){t.showNotify(error)}))}}},L=P,N=i("05c0"),A=i("9564"),E=Object(m["a"])(L,O,I,!1,null,null,null),B=E.exports;S()(E,"components",{QCard:p["a"],QCardSection:h["a"],QList:y["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:C["a"],QBtn:v["a"],QTooltip:N["a"],QToggle:A["a"],QInput:_["a"]});var M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-md text-weight-bold"},[t._v("Themes")]),i("div",{staticClass:"text-caption text-grey-7"},[t._v("Pengaturan tema dan warna dasar situs")])]),i("q-form",{on:{submit:function(e){return e.preventDefault(),t.updateData(e)}}},[i("q-list",[i("q-item",[i("q-item-section",[i("q-item-label",[t._v("Tema")])],1),i("q-item-section",{attrs:{side:""}},[i("q-select",{attrs:{outlined:"",dense:"",options:t.themes},model:{value:t.form.theme,callback:function(e){t.$set(t.form,"theme",e)},expression:"form.theme"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",[t._v("Warna")])],1),i("q-item-section",{attrs:{side:""}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.theme_color,expression:"form.theme_color"}],ref:"color",staticStyle:{width:"110px",height:"20px"},attrs:{type:"color"},domProps:{value:t.form.theme_color},on:{input:function(e){e.target.composing||t.$set(t.form,"theme_color",e.target.value)}}})])],1)],1),i("q-card-section",{staticClass:"flex justify-end"},[i("q-btn",{attrs:{unelevated:"",size:"12px",type:"submit",label:"Simpan Tema",color:"blue-7"}})],1)],1)],1)},G=[],z={data:function(){return{form:{theme:"",theme_color:""}}},computed:{themes:function(){return this.$store.state.themes},config:function(){return this.$store.state.config}},watch:{"form.theme_color":function(t){this.setColor(t)}},mounted:function(){this.config&&(this.form.theme=this.config.theme,this.form.theme_color=this.config.theme_color)},methods:{updateData:function(){var t=this;c()(c()({},this.config),this.form);Object(l["a"])().post("config",this.form).then((function(){t.$q.notify({type:"positive",message:"Berhasil menyimpan pengaturan"}),t.$store.dispatch("getConfig")}))},handleChangeColor:function(){this.$refs.color.click()},setColor:function(t){this.$store.commit("SET_THEME_COLOR",t)}}},U=z,K=Object(m["a"])(U,M,G,!1,null,null,null),R=K.exports;S()(K,"components",{QCard:p["a"],QCardSection:h["a"],QForm:f["a"],QList:y["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:C["a"],QSelect:g["a"],QBtn:v["a"]});var H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"flex items-center justify-between"},[i("div",{staticClass:"text-subtitle1 text-weight-bold"},[t._v("Pengaturan Checkout")])])]),i("q-list",[i("q-item",[i("q-item-section",[i("q-item-label",[t._v("Whatsapp Checkout")]),i("q-item-label",{attrs:{caption:""}},[t._v("Memungkinan user untuk bisa checkout langsung via whatsapp ( Order tidak tersimpan di database )")])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{label:t.form.is_whatsapp_checkout?"YA":"TIDAK","left-label":"",color:"green-6"},model:{value:t.form.is_whatsapp_checkout,callback:function(e){t.$set(t.form,"is_whatsapp_checkout",e)},expression:"form.is_whatsapp_checkout"}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",[t._v("Guest Checkout")]),i("q-item-label",{attrs:{caption:""}},[t._v("Memunginkan checkout tanpa harus login / register")])],1),i("q-item-section",{attrs:{side:""}},[i("q-toggle",{attrs:{label:t.form.is_guest_checkout?"YA":"TIDAK","left-label":"",color:"green-6"},model:{value:t.form.is_guest_checkout,callback:function(e){t.$set(t.form,"is_guest_checkout",e)},expression:"form.is_guest_checkout"}})],1)],1)],1),i("div",{staticClass:"flex justify-end q-pa-md"},[i("q-btn",{attrs:{unelevated:"",size:"12px",label:"Update Data",color:"blue-7"},on:{click:t.updateData}})],1)],1)},W=[],V={data:function(){return{form:{is_whatsapp_checkout:!1,is_guest_checkout:!0}}},computed:{config:function(){return this.$store.state.config}},mounted:function(){this.setData()},methods:{updateData:function(){var t=this;c()(c()({},this.config),this.form);Object(l["a"])().post("config",this.form).then((function(){t.showNotify(),t.$store.dispatch("getAdminConfig")})).catch((function(){t.showNotify(error)}))},setData:function(){this.config&&(this.form.is_whatsapp_checkout=this.config.is_whatsapp_checkout,this.form.is_guest_checkout=this.config.is_guest_checkout)},showNotify:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?this.$q.notify({type:"negative",message:"Gagal memperbarui data"}):this.$q.notify({type:"positive",message:"Berhasil memperbarui data"})}}},F=V,Y=Object(m["a"])(F,H,W,!1,null,null,null),J=Y.exports;S()(Y,"components",{QCard:p["a"],QCardSection:h["a"],QList:y["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:C["a"],QToggle:A["a"],QBtn:v["a"]});var X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"flex items-center justify-between"},[i("div",{staticClass:"text-subtitle1 text-weight-bold"},[t._v("Telegram Notifikasi")]),i("div",{staticClass:"q-px-sm rounded-borders text-white",class:t.config&&t.config.is_telegram_ready?"bg-green-7":"bg-grey-6"},[t._v(t._s(t.config&&t.config.is_telegram_ready?"Active":"Disabled"))])]),i("div",{staticClass:"text-caption text-grey-7"},[t._v("Notifikasi order untuk admin via telegram")]),i("div",{staticClass:"text-caption text-grey-7"},[t._v("Silahkan buat bot di telegram untuk mendapatkan token, serta dapatkan user id di bot @infouserid")]),i("q-form",{on:{submit:function(e){return e.preventDefault(),t.updateData(e)}}},[i("div",{staticClass:"q-gutter-y-sm q-mt-md"},[i("q-input",{attrs:{filled:"",label:"Telegram Bot Token"},model:{value:t.form.telegram_bot_token,callback:function(e){t.$set(t.form,"telegram_bot_token",e)},expression:"form.telegram_bot_token"}}),i("q-input",{attrs:{filled:"",label:"Telegram user Id"},model:{value:t.form.telegram_user_id,callback:function(e){t.$set(t.form,"telegram_user_id",e)},expression:"form.telegram_user_id"}})],1),i("div",{staticClass:"flex justify-end q-mt-md"},[i("q-btn",{attrs:{unelevated:"",size:"12px",type:"submit",label:"Simpan Telegram",color:"blue-7"}})],1)])],1)],1)},Z=[],tt={data:function(){return{form:{telegram_bot_token:"",telegram_user_id:""}}},computed:{config:function(){return this.$store.state.config}},mounted:function(){this.setData()},methods:{updateData:function(){var t=this;c()(c()({},this.config),this.form);Object(l["a"])().post("config",this.form).then((function(){t.showNotify(),t.$store.dispatch("getAdminConfig")})).catch((function(){t.showNotify(error)}))},setData:function(){this.config&&(this.form.telegram_bot_token=this.config.telegram_bot_token,this.form.telegram_user_id=this.config.telegram_user_id)},showNotify:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?this.$q.notify({type:"negative",message:"Gagal memperbarui data"}):this.$q.notify({type:"positive",message:"Berhasil memperbarui data"})}}},et=tt,it=Object(m["a"])(et,X,Z,!1,null,null,null),at=it.exports;S()(it,"components",{QCard:p["a"],QCardSection:h["a"],QForm:f["a"],QInput:_["a"],QBtn:v["a"]});var st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"q-pa-md bg-white box-shadow"},[i("div",{staticClass:"flex items-center justify-between q-mb-xs"},[i("div",{staticClass:"text-md text-weight-bold"},[t._v("Tripay Payment Gateway")]),i("div",[i("q-toggle",{attrs:{label:t.form.is_payment_gateway?"Active":"Disabled","left-label":"",color:"green-7"},on:{input:t.checkIsReady},model:{value:t.form.is_payment_gateway,callback:function(e){t.$set(t.form,"is_payment_gateway",e)},expression:"form.is_payment_gateway"}})],1)]),i("q-form",{on:{submit:function(e){return e.preventDefault(),t.updateDate(e)}}},[i("div",{staticClass:"q-mb-md text-grey-7 text-caption"},[i("div",[t._v("Pengaturan Tripay payment Gateway")]),i("div",[t._v("Silahkan daftar di tripay.co.id untuk mendapatkan Kredensial")])]),i("div",{staticClass:"q-gutter-y-sm"},[i("q-select",{attrs:{label:"ENV MODE",filled:"",options:t.tripayModes},model:{value:t.form.tripay_mode,callback:function(e){t.$set(t.form,"tripay_mode",e)},expression:"form.tripay_mode"}}),i("q-input",{attrs:{filled:"",label:"Tripay MERCHANT CODE"},model:{value:t.form.tripay_merchant_code,callback:function(e){t.$set(t.form,"tripay_merchant_code",e)},expression:"form.tripay_merchant_code"}}),i("q-input",{attrs:{filled:"",label:"Tripay API KEY"},model:{value:t.form.tripay_api_key,callback:function(e){t.$set(t.form,"tripay_api_key",e)},expression:"form.tripay_api_key"}}),i("q-input",{attrs:{filled:"",label:"Tripay PRIVATE KEY"},model:{value:t.form.tripay_private_key,callback:function(e){t.$set(t.form,"tripay_private_key",e)},expression:"form.tripay_private_key"}})],1),i("div",{staticClass:"flex justify-end q-mt-md"},[i("q-btn",{attrs:{unelevated:"",size:"12px",type:"submit",label:"Simpan Tripay",color:"blue-7"}})],1)])],1)},ot=[],nt={data:function(){return{tripayModes:["sanbox","production"],form:{tripay_mode:"",tripay_api_key:"",tripay_private_key:"",tripay_merchant_code:"",is_payment_gateway:!1}}},computed:{config:function(){return this.$store.state.config}},mounted:function(){this.config&&this.setConfig()},methods:{setConfig:function(){this.config&&(this.form.tripay_mode=this.config.tripay_mode,this.form.tripay_api_key=this.config.tripay_api_key,this.form.tripay_private_key=this.config.tripay_private_key,this.form.tripay_merchant_code=this.config.tripay_merchant_code,this.form.is_payment_gateway=this.config.is_payment_gateway)},updateDate:function(){var t=this;c()(c()({},this.config),this.form);Object(l["a"])().post("config",this.form).then((function(){t.showNotify(),t.$store.dispatch("getAdminConfig")})).catch((function(){t.showNotify(error)}))},checkIsReady:function(t){t&&(this.isReady()||(this.form.is_payment_gateway=!1,this.$q.notify({type:"negative",message:"Silahkan lengkapi data kredensial untuk mengaktifkan payment gateway."})))},isReady:function(){return!!(this.form.tripay_mode&&this.form.tripay_api_key&&this.form.tripay_private_key&&this.form.tripay_merchant_code)},showNotify:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t?this.$q.notify({type:"negative",message:"Gagal memperbarui data"}):this.$q.notify({type:"positive",message:"Berhasil memperbarui data"})}}},rt=nt,ct=Object(m["a"])(rt,st,ot,!1,null,null,null),lt=ct.exports;S()(ct,"components",{QToggle:A["a"],QForm:f["a"],QSelect:g["a"],QInput:_["a"],QBtn:v["a"]});var dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{attrs:{flat:""}},[i("q-card-section",[i("div",{staticClass:"text-md text-weight-bold"},[t._v("System Update / Clear Cache")]),i("div",{staticClass:"text-caption text-grey-7"},[t._v("Pengaturan sistem update dan cache situs, Pastikan anda mengerti apa yang anda lakukan")])]),i("q-list",{staticClass:"q-pb-md"},[i("q-item",[i("q-item-section",[t.needUpdate?i("q-item-label",[i("q-badge",{attrs:{color:"green-7"}},[t._v(t._s(t.siteData))]),t._v(" Pending Update\n      ")],1):i("q-item-label",[t._v("Updated")])],1),i("q-item-section",{attrs:{side:""}},[i("q-btn",{attrs:{loading:t.loading,disabled:!t.needUpdate,label:t.needUpdate?"Update Now":"No updated found",unelevated:"",color:t.needUpdate?"blue-7":"grey-7",size:"12px"},on:{click:t.updateSystem}})],1)],1),i("q-item",[i("q-item-section",[i("q-item-label",[t._v("Clear Cache")])],1),i("q-item-section",{attrs:{side:""}},[i("q-btn",{attrs:{loading:t.loadingClearChace,label:"Clear Cache",unelevated:"",color:"blue-7",size:"12px"},on:{click:t.clearCache}})],1)],1)],1)],1)},ut=[],mt={data:function(){return{siteData:0,loading:!1,loadingClearChace:!1}},computed:{needUpdate:function(){return 0!=this.siteData}},created:function(){this.getUpdate()},methods:{getUpdate:function(){var t=this;Object(l["a"])().get("update").then((function(e){200==e.status&&(t.siteData=e.data.results)}))},updateSystem:function(){var t=this;this.loading=!0,Object(l["a"])().post("update").then((function(e){200==e.status&&(t.getUpdate(),t.$q.notify({type:"positive",message:"Berhasil update system"}))})).catch((function(){t.$q.notify({type:"negative",message:"Gagal update system, silahkan hubungi pengembang aplikasi."})})).finally((function(){t.loading=!1,setTimeout((function(){location.reload()}),500),t.$router.push({name:"Settings"})}))},clearCache:function(){var t=this;this.loadingClearChace=!0,Object(l["a"])().post("clearCache").then((function(e){200==e.status&&t.$q.notify({type:"positive",message:"Berhasil menghapus cache"})})).catch((function(){t.$q.notify({type:"negative",message:"Gagal menghapus cache, silahkan ulangi lagi"})})).finally((function(){t.loadingClearChace=!1,t.$router.push({name:"Settings"})}))}}},ft=mt,pt=i("58a81"),ht=Object(m["a"])(ft,dt,ut,!1,null,null,null),gt=ht.exports;S()(ht,"components",{QCard:p["a"],QCardSection:h["a"],QList:y["a"],QItem:b["a"],QItemSection:q["a"],QItemLabel:C["a"],QBadge:pt["a"],QBtn:v["a"]});var _t={name:"AdminConfig",components:{Shipping:D,Tampilan:B,Theming:R,Notification:at,Tripay:lt,SystemUpdate:gt,CheckoutConfig:J},computed:{loading:function(){return this.$store.state.loading},config:function(){return this.$store.state.config}},created:function(){this.config||this.$store.dispatch("getAdminConfig")}},vt=_t,yt=i("9989"),bt=i("e359"),qt=i("65c6"),kt=i("6ac5"),Ct=i("2eeb"),wt=Object(m["a"])(vt,a,s,!1,null,null,null);e["default"]=wt.exports;S()(wt,"components",{QPage:yt["a"],QHeader:bt["a"],QToolbar:qt["a"],QBtn:v["a"],QToolbarTitle:kt["a"],QInnerLoading:w["a"]}),S()(wt,"directives",{GoBack:Ct["a"]})}}]);
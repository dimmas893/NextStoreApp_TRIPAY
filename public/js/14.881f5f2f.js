(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{8860:function(t,e,o){"use strict";o("aabd")},aabd:function(t,e,o){},cb1c:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"q-pb-xl bg-grey-1",class:{"flex flex-center":!t.products.available}},[o("q-header",{staticClass:"text-primary bg-white box-shadow"},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"arrow_back"},on:{click:t.backButton}}),o("q-toolbar-title",{staticClass:"text-weight-bold brand"},[t._v(t._s(t.title))]),o("shopping-cart")],1)],1),t.products.available?[o("product-section",{attrs:{title:"Produk Katalog",products:t.products}}),t.products.links?o("div",{staticClass:"flex justify-center q-py-lg"},[t.products.links.next?o("q-btn",{attrs:{label:"loadmore",color:"primary",outline:"",loading:t.isLoadmore},on:{click:function(e){return t.paginate(t.products.links.next)}}}):t._e()],1):t._e()]:t._e(),t.products.available?t._e():[o("div",{staticClass:"column items-center"},[o("p",{staticClass:"text-grey-8 text-weight-bold text-center"},[t._v("Tidak ada produk ditemukan")]),o("q-btn",{attrs:{unelevated:"",to:{name:"ProductIndex"},rounded:"","text-color":"white",color:"primary",icon:"keyboard_backspace",label:"Kehalaman Produk","no-caps":""}})],1)]],2)},i=[],r=o("ded3"),s=o.n(r),n=(o("a4d3"),o("e01a"),o("7db0"),o("d3b7"),o("e6cf"),o("a79d"),o("2f62")),c=o("53a2"),d=o("c6c8"),u=o("758b"),l={name:"ProductCategory",components:{ProductSection:c["a"],ShoppingCart:d["a"]},data:function(){return{likes:[],description:this.$store.state.meta.description,shop:this.$store.state.shop,isLoadmore:!1}},computed:{favorites:function(){return this.$store.state.product.favorites},products:function(){return this.$store.state.product.productByCategory},categories:function(){return this.$store.state.category.categories},title:function(){return this.$store.state.meta.title}},methods:s()(s()({},Object(n["b"])("product",["getProductsByCategory"])),{},{backButton:function(){window.history.length>2?window.history.back():this.$router.push({name:"ProductIndex"})},getCategoryTitle:function(){var t=this;if(this.categories.data.length){var e=this.categories.data.find((function(e){return e.id==t.$route.params.id}));void 0!=e&&this.$store.commit("SET_META_TITLE",e.title)}},paginate:function(t){var e=this;this.isLoadmore=!0,Object(u["a"])().get(t).then((function(t){200==t.status&&e.$store.commit("product/SET_PRODUCT_CATEGORY_PAGINATE",t.data)})).finally((function(){return e.isLoadmore=!1}))}}),mounted:function(){this.getCategoryTitle()},created:function(){this.products.data.length?this.products.data[0].id!=this.$route.params.id&&(this.$store.commit("product/CLEAR_PRODUCT_CATEGORY"),this.getProductsByCategory(this.$route.params.id)):(this.$store.commit("product/CLEAR_PRODUCT_CATEGORY"),this.getProductsByCategory(this.$route.params.id))},meta:function(){var t;return{title:this.title,meta:{description:{name:"description",content:this.description},ogDescription:{name:"og:description",content:this.description},ogTitle:{name:"og:title",content:this.title},ogUrl:{name:"og:url",content:location.href},ogImage:{name:"og:image",content:null!==(t=this.shop)&&void 0!==t&&t.logo?this.shop.logo:""}}}}},p=l,h=(o("8860"),o("2877")),g=o("9989"),m=o("e359"),b=o("65c6"),f=o("9c40"),y=o("6ac5"),C=o("8572"),_=o("eebe"),k=o.n(_),T=Object(h["a"])(p,a,i,!1,null,null,null);e["default"]=T.exports;k()(T,"components",{QPage:g["a"],QHeader:m["a"],QToolbar:b["a"],QBtn:f["a"],QToolbarTitle:y["a"],QField:C["a"]})}}]);
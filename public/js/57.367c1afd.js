(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"180d":function(t,e,n){"use strict";n.r(e);var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-grey-1 elegant",class:{"flex flex-center":t.loading}},[n("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:""}},[n("q-toolbar",{staticClass:"q-py-md"},[t.shop?n("img",{staticClass:"logo",attrs:{src:t.shop.logo?t.shop.logo:"/icon/logo.png"}}):t._e(),n("div",{staticClass:"col q-mx-sm inline-flex"},[n("q-input",{ref:"input",staticClass:"input-search text-xs",attrs:{dense:"",borderless:"",placeholder:"cari produk..."},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchNow(e)}},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"search"},on:{click:t.searchNow}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("shopping-cart",{attrs:{noFavorite:""}})],1)],1),t.loading?t._e():[n("div",{staticClass:"header"},[t.sliders.data.length?n("div",{staticClass:"header-inner q-pt-sm q-pb-md"},[n("slider",{attrs:{datas:t.sliders.data}})],1):t._e()]),t.blocks.featured.length?n("div",{staticClass:"auto-padding-side block-container q-pt-md",attrs:{id:"featured"}},[n("featured-carousel",{attrs:{datas:t.blocks.featured}})],1):t._e(),t.categories&&t.categories.data.length>1?n("div",{staticClass:"auto-padding-side block-container",attrs:{id:"categories"}},[n("div",{staticClass:"block-heading"},[n("div",{staticClass:"block-title"},[n("h2",[t._v("Kategori")])])]),n("div",{staticClass:"block-content q-pb-sm"},[n("category-carousel",{attrs:{datas:t.categories.data}})],1)]):t._e(),t.productPromo.length?n("div",{attrs:{id:"product-promo"}},[n("product-promo",{attrs:{product_promo:t.productPromo}})],1):t._e(),t.banner1?n("div",{staticClass:"banner auto-padding-side block-container"},[n("img",{attrs:{src:t.banner1.image_url},on:{click:function(e){return t.goToPost(t.banner1)}}})]):t._e(),n("product-block",{attrs:{products:t.products}}),t.blocks.partner.length?n("div",{staticClass:"partner auto-padding-side block-container"},[n("div",{staticClass:"block-heading"},[n("div",{staticClass:"block-title"},[n("h2",[t._v("Partners")])])]),n("div",{staticClass:"block-content"},[n("partner-carousel",{attrs:{datas:t.blocks.partner}})],1)]):t._e(),t.banner2?n("div",{staticClass:"banner auto-padding-side block-container"},[n("img",{attrs:{src:t.banner2.image_url},on:{click:function(e){return t.goToPost(t.banner2)}}})]):t._e(),n("post-block",{attrs:{posts:t.posts}}),t.banner3?n("div",{staticClass:"banner auto-padding block-container"},[n("img",{attrs:{src:t.banner3.image_url},on:{click:function(e){return t.goToPost(t.banner3)}}})]):t._e(),n("install-app"),n("footer-block")],n("q-inner-loading",{attrs:{showing:t.loading}},[n("q-spinner-facebook",{attrs:{size:"50px",color:"primary"}})],1)],2)},o=[],s=n("ded3"),i=n.n(s),c=n("9523"),l=n.n(c),u=(n("e260"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("7db0"),n("ac1f"),n("841c"),n("2f62")),d=n("c6c8"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden"},[n("vue-glide",{attrs:{options:t.glideOptions}},[t._l(t.datas,(function(t,e){return n("vue-glide-slide",{key:e},[n("div",{staticClass:"auto-padding"},[n("img",{staticStyle:{width:"100%",height:"auto","border-radius":"6px"},attrs:{src:t.src}})])])})),t.datas.length>1?n("template",{attrs:{"data-glide-el":"controls[nav]"},slot:"control"},[n("div",{staticClass:"glide__bullets",attrs:{"data-glide-el":"controls[nav]"}},t._l(t.datas.length,(function(t,e){return n("button",{key:e,staticClass:"glide__bullet",attrs:{"data-glide-dir":"="+e}})})),0)]):t._e()],2)],1)},h=[],g={name:"Front",props:{datas:Array},data:function(){return{glideOptions:{gap:10,perView:1,animationDuration:1e3,autoplay:6e3,bullet:!0}}}},b=g,f=n("2877"),k=Object(f["a"])(b,p,h,!1,null,null,null),m=k.exports,v=n("3f41"),_={name:"PageIndex",components:(r={ShoppingCart:d["a"],Slider:m,ProductBlock:v["a"],"category-carousel":function(){return n.e(58).then(n.bind(null,"9392"))},"product-promo":function(){return n.e(7).then(n.bind(null,"955b"))},"post-block":function(){return Promise.all([n.e(1),n.e(2)]).then(n.bind(null,"d29a"))},"featured-carousel":function(){return n.e(5).then(n.bind(null,"3990"))},"partner-carousel":function(){return n.e(4).then(n.bind(null,"9a15"))}},l()(r,"post-block",(function(){return Promise.all([n.e(1),n.e(2)]).then(n.bind(null,"d29a"))})),l()(r,"footer-block",(function(){return n.e(6).then(n.bind(null,"bae6"))})),l()(r,"install-app",(function(){return n.e(3).then(n.bind(null,"30b4"))})),r),data:function(){return{viewMode:"grid",search:"",slide:0}},computed:i()(i()({},Object(u["e"])({blocks:function(t){return t.block.blocks},sliders:function(t){return t.slider.sliders},categories:function(t){return t.category.categories},products:function(t){return t.product.initial_products},shop:function(t){return t.shop},loading:function(t){return t.loading},posts:function(t){return t.post.initialPost},config:function(t){return t.config},productPromo:function(t){return t.product.product_promo}})),{},{cheight:function(){this.$q.screen.width;return this.$q.screen.width>600?"400px":this.$q.screen.width/1.5+"px"},banner1:function(){if(this.blocks.banner.length){var t=this.blocks.banner.find((function(t){return 1==t.weight}));if(void 0!=t)return t}return null},banner2:function(){if(this.blocks.banner.length){var t=this.blocks.banner.find((function(t){return 2==t.weight}));if(void 0!=t)return t}return null},banner3:function(){if(this.blocks.banner.length){var t=this.blocks.banner.find((function(t){return 3==t.weight}));if(void 0!=t)return t}return null}}),methods:i()(i()({},Object(u["b"])(["getInitialData"])),{},{showProductByCategory:function(t){this.$router.push({name:"ProductCategory",params:{id:t}})},searchNow:function(){this.search&&""!=this.search&&this.$router.push({name:"ProductSearch",query:{q:this.search}})},goToPost:function(t){t.post&&this.$router.push({name:"FrontPostShow",params:{slug:t.post.slug}})}}),mounted:function(){this.config&&(this.viewMode=this.config.home_view_mode)},created:function(){this.shop&&this.products.data.length&&!this.$route.query.load||this.getInitialData()}},C=_,w=n("9989"),y=n("e359"),q=n("65c6"),P=n("27f9"),x=n("0016"),$=n("74f7"),O=n("e669"),Q=n("eebe"),S=n.n(Q),I=Object(f["a"])(C,a,o,!1,null,null,null);e["default"]=I.exports;S()(I,"components",{QPage:w["a"],QHeader:y["a"],QToolbar:q["a"],QInput:P["a"],QIcon:x["a"],QInnerLoading:$["a"],QSpinnerFacebook:O["a"]})}}]);
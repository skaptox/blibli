(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"+RMH":function(t,e,i){},"22jg":function(t,e,i){},"2LfP":function(t,e,i){"use strict";i.r(e);var n=i("eAhW"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},"30Wy":function(t,e,i){"use strict";i.r(e);var n=i("qWcs"),a=i("2LfP");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("xc2d");var r=i("KHd+"),s=Object(r.a)(a.default,n.a,n.b,!1,null,"227eb058",null);e.default=s.exports},"33ck":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxOSI+PHBhdGggZmlsbD0iIzAwOTVEQSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjMgOS41YzAtLjQ0LjE4LS44NS41LTEuMTNsOC4yNC03LjMzYTEuMzEgMS4zMSAwIDAgMSAxLjk0LjE5Yy40OS42Mi40IDEuNTQtLjE4IDIuMDZMMy44MiA5LjVsNi45OSA2LjJjLjU4LjUzLjY2IDEuNDUuMTcgMi4wN2ExLjMxIDEuMzEgMCAwIDEtMS45NC4xOUwuOCAxMC42M0ExLjUgMS41IDAgMCAxIC4zIDkuNSIvPjwvc3ZnPg=="},"666V":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"favourite"},[t.isMobile?t._e():n("div",{staticClass:"favourite__header"},[n("h4",{staticClass:"favourite__title"},[t._v("\n      "+t._s(t.$t("app.home.favourite.title"))+"\n    ")])]),t._v(" "),n("div",{ref:"favourite-scroller",staticClass:"favourite__scroller"},[n("div",{directives:[{name:"observe",rawName:"v-observe",value:{handler:t.trackLoad},expression:"{handler: trackLoad}"}],staticClass:"favourite__content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.scroller>0,expression:"scroller > 0"}],staticClass:"favourite__arrow-left",on:{click:t.moreLeft}},[n("img",{attrs:{src:i("33ck")}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.scroller<t.scrollerQuota,expression:"scroller < scrollerQuota"}],staticClass:"favourite__arrow-right",on:{click:t.moreRight}},[n("img",{attrs:{src:i("6tOk")}})]),t._v(" "),n("router-link",{staticClass:"favourite__item",attrs:{tag:"div",to:{name:"favourites"}},nativeOn:{click:function(e){return t.trackInit(e)},mousedown:function(e){return"button"in e&&1!==e.button?null:t.trackInit(e)}}},[t.newFavourites.length?n("div",{staticClass:"favourite__label"},[t._v("\n          Baru\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"favourite__item-image"},[n("img",{attrs:{src:i("U6dl"),alt:"all favourite"}})]),t._v(" "),n("div",{staticClass:"favourite__item-label"},[t._v("\n          Semua\n        ")])]),t._v(" "),t._l(t.favourites,function(e,i){return n("div",{key:"fav-block-"+i,staticClass:"favourite__item",on:{click:function(n){t.goToPage(e,i)}}},[t.isNew(e)?n("div",{staticClass:"favourite__label"},[t._v("\n          Baru\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"favourite__item-image"},[n("WidgetIcon",{attrs:{height:"24px",src:e.image,alt:e.alt}})],1),t._v(" "),e.title?n("div",{staticClass:"favourite__item-label",domProps:{innerHTML:t._s(t.$t("app.home.favourite.label."+e.type+"."+e.title))}}):t._e()])})],2)]),t._v(" "),t.visibleOnBoarding&&t.displayOnBoarding?n("MyFavoriteOnboarding"):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"6tOk":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxOSI+PHBhdGggZmlsbD0iIzAwOTVEQSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTAuOTcgOS41YzAgLjQ0LS4xOC44NS0uNSAxLjEzbC04LjI0IDcuMzNhMS4zMSAxLjMxIDAgMCAxLTEuOTQtLjE5Yy0uNDgtLjYyLS40LTEuNTQuMTgtMi4wNkw3LjQ1IDkuNS40NyAzLjNhMS41MyAxLjUzIDAgMCAxLS4xOC0yLjA3IDEuMzEgMS4zMSAwIDAgMSAxLjk0LS4xOWw4LjI1IDcuMzNjLjMxLjI4LjUuNy41IDEuMTMiLz48L3N2Zz4="},"89n5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"carousel-container"},[t.slides.length?i("Carousel",{attrs:{pagination:!0,navigation:!t.isMobile,content:t.slides,"load-next-item":!t.isMobile,"auto-play-after-move":!0,delay:5e3,circular:!0},on:{"page-change":t.changeHandler},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item,a=e.index;return[i("div",{staticClass:"carousel-container__slide"},[i("a",{attrs:{nohref:""},on:{click:function(e){e.preventDefault(),t.goto(n,a,e)},mousedown:function(e){if("button"in e&&1!==e.button)return null;t.trackClick(n,a)}}},[i("img",{directives:[{name:"observe",rawName:"v-observe",value:{handler:t.trackLoad,payload:{item:n,index:a}},expression:"{handler: trackLoad, payload: {item, index} }"}],staticClass:"carousel-container__slide__content",attrs:{draggable:"false",src:t.akamaiImage(n.image),alt:n.alt},on:{mousemove:function(e){t.setDragged(!0)},mousedown:function(e){t.setMouseDown(!0)},mouseup:function(e){t.setMouseDown(!1)}}})])])]}}])}):t._e(),t._v(" "),i("div",{staticClass:"carousel-container__all-promos"},[i("span",{staticClass:"carousel-container__all-promos__page-counter"},[t._v("\n      "+t._s(t.currentPage)+" / "+t._s(t.slides.length)+"\n    ")]),t._v(" "),i("a",{staticClass:"carousel-container__all-promos__promos-button",attrs:{href:"/promosi",target:"_blank"},on:{click:t.trackLink,mousedown:function(e){return"button"in e&&1!==e.button?null:t.trackLink(e)}}},[t._v("\n      "+t._s(t.$t("app.home.mainCarousel.seeAllPromos"))+"\n    ")])])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},AqVe:function(t,e,i){"use strict";var n=i("22jg");i.n(n).a},"E3/g":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=i("L2JU"),o=i("tDsd"),r=u(i("0PmP")),s=u(i("QmAe")),c=u(i("8SHQ"));function u(t){return t&&t.__esModule?t:{default:t}}function l(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var d=["blibliMart","handphoneTablet","pulsaPrepaid","tiketVoucher","electronic","homeRetail","kecantikan","flight"];e.default={name:"FavouriteBlock",components:{MyFavoriteOnboarding:function(){return i.e(28).then(i.bind(null,"rmQV"))},WidgetIcon:function(){return i.e(14).then(i.bind(null,"KgKS"))}},mixins:[r.default],data:function(){return{savedFavourites:[],visibleOnBoarding:!1,displayOnBoarding:!1,scroller:0,scrollerQuota:0}},created:function(){this.getData()},computed:n({},(0,a.mapGetters)(["isMobile","favouriteComponents","newFavourites","curatedFavourite"]),{favourites:function(){var t=this,e=[].concat(l(this.favouriteComponents)),i=this.savedFavourites.map(function(i){var a=t.favouriteComponents.findIndex(function(t){return t.title===i}),o={};return a>-1&&(o=t.favouriteComponents[a],e.splice(a,1)),n({},o)}).filter(function(t){return!!t.id});return[].concat(l(i),l(e.splice(0,8-i.length)))}}),watch:{favouriteComponents:{handler:function(){this.initFavourites()},deep:!0}},methods:n({},(0,a.mapActions)(["fetchFavouriteComponents"]),{isNew:function(t){return!!this.newFavourites.length&&this.newFavourites.includes(t.title)},moreLeft:function(){0!==this.scroller&&(this.scroller=this.scroller-=100,this.$refs["favourite-scroller"].scrollTo({left:this.scroller,behavior:"smooth"}))},moreRight:function(){this.scroller>=this.scrollerQuota||(this.scroller=this.scroller+=100,this.$refs["favourite-scroller"].scrollTo({left:this.scroller,behavior:"smooth"}))},getData:function(){var t=this.isMobile?"mobile":"normal";this.fetchFavouriteComponents({data:{display:t,id:"widget"},success:this.initFavourites,fail:this.initFavourites})},initFavourites:function(){var t=this,e=d;try{var i=JSON.parse(this.getSavedFavorites());"array-my-favourites"===i.key&&(e=i.list)}catch(t){}this.savedFavourites=e,this.savedFavourites.length<9&&this.savedFavourites.push(this.curatedFavourite),this.getOnboardingFlag(),this.$nextTick(function(){var e=t.$refs["favourite-scroller"];t.scrollerQuota=e.scrollWidth-e.clientWidth})},getOnboardingFlag:function(){var t=localStorage.getItem("blibli_favoriteContentOnboarding");this.visibleOnBoarding="true"!==t,this.displayedOnBoarding=c.default.displayOnBoarding},goToPage:function(t,e){this.trackClick(t,e),s.default.goUrl(t.url)},trackLink:function(){var t=this.trackDevice();(0,o.trackButtonNavigation)({event:"seeAllPromoClick",eventDetails:{action:"seeAllPromoClick",category:"retail-home",label:"see-all-promo-digitalwidgetbutton"},eventSection:{id:t[0]+"-home-see-all-promo-digital-widget-button",name:t[1]+" Home See All Promo Digital Widget Button"}})},trackButton:function(){(0,o.trackButtonIconEvent)({event:"buttonIconClick",eventDetails:{category:"retail-home",action:"icon-configuration",label:"lihat-selengkapnya"}})},trackInit:function(){this.trackLink(),this.trackButton()},trackLoad:function(){var t=this;setTimeout(function(){var e=t.trackDevice();(0,o.trackPromoImpressionEvent)({eventSection:{id:e[0]+"-digital-widget-button",name:e[1]+" Home Digital Widget Button"},data:t.favourites.map(function(t,e){var i=String(e+1),n=String("Name "+i),a=t.type.charAt(0).toUpperCase()+t.type.substring(1);return{id:t.url,name:t.alt||n,creative:a,position:i}})})},1e3)},trackClick:function(t,e){var i=this.trackDevice(),n=String(e+1),a=String("Name "+n),r=t.type.charAt(0).toUpperCase()+t.type.substring(1);(0,o.trackPromoClickEvent)({eventSection:{id:i[0]+"-digital-widget-button",name:i[1]+" Home Digital Widget Button"},data:[{id:t.url||a,name:t.alt||a,creative:r,position:n}]})},getSavedFavorites:function(){return localStorage.getItem("blibli_home-my-favorites")}})}},EsDQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=i("L2JU"),o=f(i("O7uP")),r=f(i("kCvA")),s=i("N2qG"),c=f(i("t1pE")),u=f(i("8SHQ")),l=f(i("r4Fp")),d=f(i("zHnM")),h=f(i("d7wE"));function f(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Home",metaInfo:function(){return{meta:[{vmid:"description",name:"description",content:this.seoPlacement.metaDescription},{vmid:"keywords",name:"keywords",content:this.seoPlacement.metaKeyword}]}},mixins:[r.default],components:{MainSlide:l.default,OtpBanner:function(){return i.e(35).then(i.bind(null,"QL0+"))},FavouriteBlock:d.default,OtherPromo:h.default,HomescreenBanner:function(){return i.e(24).then(i.bind(null,"aQfW"))},PaylaterOnboarding:function(){return i.e(37).then(i.bind(null,"04vV"))},FlashSale:(0,s.lazyLoadComponent)((0,s.getLazyComponent)(o.default.FlashSale),"FlashSale"),FeaturedContent:(0,s.lazyLoadComponent)((0,s.getLazyComponent)(o.default.FeaturedContent),"FeaturedContent"),ShoppingInspiration:(0,s.lazyLoadComponent)((0,s.getLazyComponent)(o.default.ShoppingInspiration),"ShoppingInspiration"),RecommendedProduct:(0,s.lazyLoadComponent)((0,s.getLazyComponent)(o.default.RecommendedProduct),"RecommendedProduct"),UspLongBanner:(0,s.lazyLoadComponent)((0,s.getLazyComponent)(o.default.UspLongBanner),"UspLongBanner"),LongBanner:(0,s.lazyLoadComponent)((0,s.getLazyComponent)(o.default.LongBanner),"LongBanner")},created:function(){c.default.disableScrollLock(),this.getBanner()},computed:n({},(0,a.mapGetters)({isLoggedIn:"isLoggedIn",isMobile:"isMobile",otpBanners:"otpBanners",seoPlacement:"seoPlacement",visibleAddToHomescreen:"visibleAddToHomescreen",userPaylater:"mainWallet/userPaylater"}),{visibleOtpBanner:function(){return!!(this.otpBanners[0]||{}).urlImage},type:function(){return this.isMobile?"mobile":"normal"},visiblePaylaterOnboarding:function(){return!localStorage.getItem(u.default.app.localStorage.paylaterOnboarding)&&this.userPaylater.enabled}}),methods:n({},(0,a.mapActions)(["getOtpBanners","getCmsContent"]),{getBanner:function(){this.getOtpBanners({data:{pageName:"HOMEPAGE",displayType:this.type}})}})}},EsTj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=i("L2JU");e.default={name:"Carousel",components:{Pagination:function(){return i.e(36).then(i.bind(null,"F5n6"))}},props:{content:{default:function(){return[]},type:Array},pagination:{type:Boolean,default:!1},navigation:{type:Boolean,default:!1},loadNextItem:{type:Boolean,default:!1},delay:{type:Number,default:4e3},autoPlayAfterMove:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},perPageMobile:{type:Number,default:1},perPageTablet:{type:Number,default:1},perPageDesktop:{type:Number,default:1},perPageWide:{type:Number,default:1}},data:function(){return{initialX:null,offset:0,distance:0,slideCount:0,activePage:0,itemWidth:0,maxOffset:0,screenWidth:0,orientation:"",initialLocation:0,itemLoaded:[],hasMoved:!1,renderedContent:[],containerWidth:0,intervalSlider:0}},computed:n({},(0,a.mapGetters)(["isMobile"]),{carousel:function(){return this.$refs.carouselContainer},items:function(){return this.$refs.items},handlers:function(){return{INIT:{mousedown:this.handleMouseDown,touchstart:this.handleTouchStart},MOUSE:{mouseup:this.handleMouseUp,mousemove:this.handleMove,mouseleave:this.handleMouseUp},TOUCH:{touchend:this.handleTouchEnd,touchmove:this.handleMove}}},visibleNext:function(){var t=this.slideCount-this.perPage;return this.activePage+1<=t||this.circular},visiblePrev:function(){return this.activePage>0||this.circular},perPage:function(){return this.screenWidth>=1200?this.perPageWide:this.screenWidth>=1024?this.perPageDesktop:this.screenWidth>=768?this.perPageTablet:this.perPageMobile},sliderWidth:function(){return 1/this.perPage*100+"%"},itemPerPage:function(){var t=this;return this.content.map(function(e,i){return t.content.slice(i,i+t.perPage)}).filter(function(t){return t})},itemVisible:function(){var t=this;return this.renderedContent.map(function(e,i){return 0===i||!!t.itemLoaded[i]||!!(t.itemPerPage[t.activePage]||[]).includes(e)||!!(t.loadNextItem||screen.width>t.itemWidth)&&(t.circular?i-2===t.activePage||i===t.activePage:i+t.activePage>t.perPage||i-1===t.activePage||t.activePage-1===i)})}}),methods:{destroyInterval:function(){try{clearInterval(this.intervalSlider)}catch(t){}},setAutoPlay:function(){var t=this;this.destroyInterval(),this.intervalSlider=setInterval(function(){t.navigateTo(t.activePage+1)},this.delay)},attachHandlers:function(t){var e=this,i=this.handlers[t]||{};Object.keys(i).forEach(function(t){e.carousel.addEventListener(t,i[t])})},removeHandlers:function(t){var e=this,i=this.handlers[t]||{};Object.keys(i).forEach(function(t){e.carousel.removeEventListener(t,i[t])})},handleMouseDown:function(t){this.setupWidth(),this.initialX=t.clientX,this.attachHandlers("MOUSE")},handleTouchStart:function(t){this.setupWidth(),this.initialX=t.touches[0].clientX,this.attachHandlers("TOUCH")},handleMouseUp:function(t){this.snapItems(t),this.removeHandlers("MOUSE")},handleTouchEnd:function(t){this.snapItems(t),this.removeHandlers("TOUCH")},handleMove:function(t){this.distance=(t.clientX?t.clientX:t.changedTouches[0].clientX)-this.initialX,this.moveItemsTo(this.offset+this.distance)},navigateTo:function(t,e){var i=this;this.items.classList.add("moving");var n=e&&e.target,a=n&&n.parentElement,o=a&&a.parentElement;o&&(this.containerWidth=o.parentElement.clientWidth),this.moveItemsTo(-1*t*this.itemWidth),t<this.slideCount?(this.activePage=t<0?this.slideCount-1:t,this.offset=-1*this.activePage*this.itemWidth):(this.activePage=0,this.offset=0),setTimeout(function(){i.circular&&i.items.classList.remove("moving"),i.moveItemsTo(-1*i.activePage*i.itemWidth)},200)},hasPartialShowSpace:function(t){return!this.circular&&t===this.itemWidth*-(this.slideCount-1)&&t<this.containerWidth*(this.slideCount-1)},moveItemsTo:function(t){var e=this.initialLocation+t<this.maxOffset,i=this.isMobile&&this.slideCount-2===this.activePage?-23:0;if(!e||this.circular){var n=this.initialLocation+t+i,a=this.itemWidth*this.perPage<this.containerWidth?this.containerWidth-this.itemWidth:0,o=this.hasPartialShowSpace(n)?n+a:n;this.items.style.transform="translateX("+o+"px)"}},checkBoundaries:function(){this.offset>=0&&(this.activePage=0,this.offset=0),this.offset<this.maxOffset&&(this.activePage=this.slideCount-this.mathCeil(this.items.offsetWidth/this.itemWidth),this.offset=this.maxOffset,this.activePage<0&&(this.activePage=0,this.offset=0))},snapItems:function(t){this.setAutoPlay(),this.distance<-50?(this.activePage+=Math.ceil(-1*this.distance/this.itemWidth),this.distance=0):this.distance>50&&(this.activePage-=Math.ceil(this.distance/this.itemWidth)),this.offset=this.activePage*this.itemWidth*-1,this.circular?this.navigateTo(this.activePage,t):(this.checkBoundaries(),this.moveItemsTo(this.offset))},setupWidth:function(){var t=window.matchMedia("(orientation: portrait)");this.orientation=t.matches?"portrait-primary":"landscape-primary",this.screenWidth=window.innerWidth,this.slideCount=this.content.length,this.itemWidth=this.items.clientWidth/this.perPage;var e=this.items.offsetWidth===this.itemWidth?this.slideCount:this.slideCount-this.mathCeil(this.items.offsetWidth/this.itemWidth);this.maxOffset=e*this.itemWidth*-1-1},handleResize:function(t){this.setupWidth(),this.navigateTo(this.activePage,t),this.offset=-1*this.activePage*this.itemWidth},mathCeil:function(t){return-1*Math.floor(-1*t)}},watch:{activePage:function(t){this.hasMoved=!0,this.$emit("page-change",t)},itemVisible:function(t){var e=this;t.forEach(function(t,i){t&&(e.itemLoaded[i]=!0)})},hasMoved:function(){this.autoPlayAfterMove&&this.setAutoPlay()}},created:function(){this.renderedContent=Array.from(this.content),this.circular&&(this.renderedContent.push(this.content[0]),this.renderedContent.unshift(this.content[this.content.length-1]))},mounted:function(){this.setupWidth(),this.circular&&(this.moveItemsTo(-1*this.itemWidth),this.initialLocation=-1*this.itemWidth),window.addEventListener("resize",this.handleResize),this.attachHandlers("INIT"),this.itemLoaded=this.itemVisible},destroyed:function(){window.removeEventListener("resize",this.handleResize),this.removeHandlers("INIT"),this.destroyInterval()}}},GS3r:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-container blu"},[i("section",{staticClass:"slide-placeholder"},[i("MainSlide")],1),t._v(" "),i("section",{staticClass:"b-widescreen favourite-other"},[i("div",{staticClass:"favourite"},[i("FavouriteBlock",{on:{updateScreen:t.updateScreen}})],1)]),t._v(" "),i("section",{staticClass:"b-widescreen"},[i("LongBanner",{on:{updateScreen:t.updateScreen}})],1),t._v(" "),i("section",{staticClass:"b-widescreen"},[i("UspLongBanner",{on:{updateScreen:t.updateScreen}})],1),t._v(" "),i("section",[i("FlashSale",{on:{updateScreen:t.updateScreen}})],1),t._v(" "),i("section",{staticClass:"b-widescreen"},[i("div",{staticClass:"other-promo"},[i("OtherPromo",{on:{updateScreen:t.updateScreen}})],1)]),t._v(" "),i("section",{staticClass:"b-widescreen discover"},[i("FeaturedContent",{on:{updateScreen:t.updateScreen}})],1),t._v(" "),i("section",{staticClass:"b-widescreen"},[i("ShoppingInspiration",{on:{updateScreen:t.updateScreen}})],1),t._v(" "),i("section",{staticClass:"b-widescreen recomended-product"},[i("RecommendedProduct",{on:{updateScreen:t.updateScreen}})],1),t._v(" "),t.visibleOtpBanner?i("OtpBanner"):t._e(),t._v(" "),t.isMobile&&t.visibleAddToHomescreen?i("HomescreenBanner"):t._e(),t._v(" "),t.visiblePaylaterOnboarding?i("PaylaterOnboarding"):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},GcGR:function(t,e,i){"use strict";var n=i("OwhV");i.n(n).a},Lypo:function(t,e,i){"use strict";var n=i("+RMH");i.n(n).a},N2qG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.lazyLoadComponent=function(t,e){var i=t.componentFactory,n=t.loading,a=t.loadingData,o=void 0,r=void 0;return function(){return{component:new Promise(function(t){o=t}),loading:{destroyed:function(){try{r.unobserve(this.$el)}catch(t){}},mounted:function(){var t=this;"IntersectionObserver"in window?(r=new IntersectionObserver(function(n,a){n[0].intersectionRatio<=0||(a.unobserve(t.$el),i().then(o),t.$emit("updateScreen",e))})).observe(this.$el):i().then(o)},render:function(t){return t(n,a)}}}}},e.getLazyComponent=function(t){return{loading:a.default,loadingData:{props:{height:t.height,width:t.width,backgroundColor:t.backgroundColor}},componentFactory:t.component}},e.delayComponent=function(t){var e=t.componentFactory,i=t.loading,n=t.loadingData,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=void 0;return function(){return{component:new Promise(function(t){o=t}),loading:{mounted:function(){setTimeout(function(){e().then(o)},1e3*a)},render:function(t){return t(i,n)}}}}};var n,a=(n=i("30Wy"))&&n.__esModule?n:{default:n}},NpPU:function(t,e,i){"use strict";i.r(e);var n=i("j5l0"),a=i("diDI");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("i3SC");var r=i("KHd+"),s=Object(r.a)(a.default,n.a,n.b,!1,null,"15fdf51e",null);e.default=s.exports},O7uP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=((n=i("Q2AE"))&&n.__esModule?n:{default:n}).default.getters.isMobile;e.default={FavouriteBlock:{height:a?"316px":"200px",backgroundColor:"transparent",component:function(){return Promise.resolve().then(i.bind(null,"zHnM"))}},OtherPromo:{height:a?"214px":"200px",backgroundColor:"transparent",component:function(){return Promise.resolve().then(i.bind(null,"d7wE"))}},FlashSale:{height:"900px",component:function(){return i.e(17).then(i.bind(null,"CS+W"))}},FeaturedContent:{height:"450px",component:function(){return i.e(16).then(i.bind(null,"UwJI"))}},ShoppingInspiration:{height:"800px",component:function(){return i.e(46).then(i.bind(null,"ovkO"))}},RecommendedProduct:{height:"900px",component:function(){return i.e(40).then(i.bind(null,"5uPT"))}},UspLongBanner:{component:function(){return i.e(22).then(i.bind(null,"ZdXy"))}},LongBanner:{component:function(){return i.e(19).then(i.bind(null,"Ukwd"))}}}},OwhV:function(t,e,i){},QKuH:function(t,e,i){},Qr6E:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=i("L2JU"),r=i("tDsd"),s=(n=i("0PmP"))&&n.__esModule?n:{default:n};e.default={name:"OtherPromo",mixins:[s.default],data:function(){return{name:"PROMO_LAINNYA",content:[]}},created:function(){this.fetchData()},components:{OtherPromoCategory:function(){return i.e(125).then(i.bind(null,"900w"))}},computed:a({},(0,o.mapGetters)(["isMobile","homepageBlocks"]),{displayType:function(){return this.isMobile?"mobile":"normal"},categories:function(){var t=this;return this.homepageBlocks[this.name].map(function(e){return t.content.push(e.parameters.find(function(t){return"IMAGESET"===t.type})),e.parameters.find(function(t){return"IMAGE"===t.type})})||[]},categoriesTitle:function(){return this.categories.map(function(t){return t.title})},visibleTab:function(){return this.categories.length}}),methods:a({},(0,o.mapActions)(["getHomepageComponent"]),{fetchData:function(){var t=this.name;this.getHomepageComponent({block:t,display:this.displayType})},trackButton:function(t){var e=0;this.visibleTab&&(e=this.$refs.tab.selectedIndex),(0,r.trackButtonIconEvent)({event:"buttonIconClick",eventDetails:{category:"retail-home",action:"buttonIconClick",label:"click-promo-set/"+t[e].parameters[0].title}})}})}},"SuE+":function(t,e,i){},U6dl:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuNDM1IDE0LjYxMTZINi41ODQ5OUM1LjE1NDk5IDE0LjYxMTYgMy45ODQ5OSAxMy4zOTQ4IDMuOTg0OTkgMTEuOTA3NlY1Ljc1NkMzLjk4NDk5IDQuMjY4OCA1LjE1NDk5IDMuMDUyIDYuNTg0OTkgMy4wNTJIMTIuNDM1QzEzLjg2NSAzLjA1MiAxNS4wMzUgNC4yNjg4IDE1LjAzNSA1Ljc1NlYxMS45MDc2QzE1LjAzNSAxMy4zOTQ4IDEzLjkzIDE0LjYxMTYgMTIuNDM1IDE0LjYxMTZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0yNi4wODUgMTQuNjExNkgyMC4yMzVDMTguODA1IDE0LjYxMTYgMTcuNjM1IDEzLjM5NDggMTcuNjM1IDExLjkwNzZWNS43NTZDMTcuNjM1IDQuMjY4OCAxOC44MDUgMy4wNTIgMjAuMjM1IDMuMDUySDI2LjA4NUMyNy41MTUgMy4wNTIgMjguNjg1IDQuMjY4OCAyOC42ODUgNS43NTZWMTEuOTA3NkMyOC42ODUgMTMuMzk0OCAyNy41OCAxNC42MTE2IDI2LjA4NSAxNC42MTE2VjE0LjYxMTZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMi40MzUgMjguNzRINi41ODQ5OUM1LjE1NDk5IDI4Ljc0IDMuOTg0OTkgMjcuNTIzMiAzLjk4NDk5IDI2LjAzNlYxOS44ODQ0QzMuOTg0OTkgMTguMzk3MiA1LjE1NDk5IDE3LjE4MDQgNi41ODQ5OSAxNy4xODA0SDEyLjQzNUMxMy44NjUgMTcuMTgwNCAxNS4wMzUgMTguMzk3MiAxNS4wMzUgMTkuODg0NFYyNi4wMzZDMTUuMDM1IDI3LjUyMzIgMTMuOTMgMjguNzQgMTIuNDM1IDI4Ljc0VjI4Ljc0WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjYuMDg1IDI4Ljc0SDIwLjIzNUMxOC44MDUgMjguNzQgMTcuNjM1IDI3LjUyMzIgMTcuNjM1IDI2LjAzNlYxOS44ODQ0QzE3LjYzNSAxOC4zOTcyIDE4LjgwNSAxNy4xODA0IDIwLjIzNSAxNy4xODA0SDI2LjA4NUMyNy41MTUgMTcuMTgwNCAyOC42ODUgMTguMzk3MiAyOC42ODUgMTkuODg0NFYyNi4wMzZDMjguNjg1IDI3LjUyMzIgMjcuNTggMjguNzQgMjYuMDg1IDI4Ljc0VjI4Ljc0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6c29mdC1saWdodCIgb3BhY2l0eT0iMC41NiI+CjxwYXRoIGQ9Ik0xMi40MzUgMTcuMTgwNEg2LjU4NDk5QzUuMTU0OTkgMTcuMTgwNCAzLjk4NDk5IDE4LjM5NzIgMy45ODQ5OSAxOS44ODQ0VjIzLjQ2NzJDNS44MDQ5OSAyNC4yMTA4IDcuNzU0OTkgMjQuNjg0IDkuODM0OTkgMjQuNjg0QzExLjY1NSAyNC42ODQgMTMuNDEgMjQuMzQ2IDE1LjAzNSAyMy43Mzc2VjE5Ljg4NDRDMTUuMDM1IDE4LjM5NzIgMTMuOTMgMTcuMTgwNCAxMi40MzUgMTcuMTgwNFYxNy4xODA0WiIgZmlsbD0iI0E3RTNGRiIvPgo8L2c+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpzb2Z0LWxpZ2h0IiBvcGFjaXR5PSIwLjcyIj4KPHBhdGggZD0iTTIzLjAyOTkgMTcuMTgwNEgyMC4zQzE4Ljg3IDE3LjE4MDQgMTcuNyAxOC4zOTcyIDE3LjcgMTkuODg0NFYyMi40NTMyQzE5Ljg0NSAyMS4yMzY0IDIxLjY2NDkgMTkuNDExMiAyMy4wMjk5IDE3LjE4MDRaIiBmaWxsPSIjQTdFM0ZGIi8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNvZnQtbGlnaHQiIG9wYWNpdHk9IjAuNzIiPgo8cGF0aCBkPSJNMTcuNjM1IDUuNzU2VjExLjkwNzZDMTcuNjM1IDEzLjM5NDggMTguODA1IDE0LjYxMTYgMjAuMjM1IDE0LjYxMTZIMjQuMjY1QzI0Ljk4IDEyLjcxODggMjUuNDM1IDEwLjY5MDggMjUuNDM1IDguNDZDMjUuNDM1IDYuNTY3MiAyNS4xMSA0Ljc0MiAyNC41MjUgMy4wNTJIMjAuMjM1QzE4LjgwNSAzLjA1MiAxNy42MzUgNC4yNjg4IDE3LjYzNSA1Ljc1NlY1Ljc1NloiIGZpbGw9IiNGQ0QyQTEiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMS43MjYxNCIgeTE9Ii0xLjYyMTQzIiB4Mj0iOC4zNTA5NCIgeTI9IjYuNDYzNjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzk0N0NDMSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MjUxQTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iMjMuMTkxNSIgeTE9IjMuMzg2NTMiIHgyPSIyMy4xOTE1IiB5Mj0iMTQuMzI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4wMDAzMSIgc3RvcC1jb2xvcj0iI0ZBQzI4MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNzkzMUUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iOS41NDE0OCIgeTE9IjYuNzUxMSIgeDI9IjkuNTQxNDgiIHkyPSIyNC4yMTg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBN0UzRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5NURBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjIzLjE5MTUiIHkxPSIxNy4zNzgxIiB4Mj0iMjMuMTkxNSIgeTI9IjI4LjcxNjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwN0JCNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMjNEODkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"},VWHG:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},a=i("L2JU"),o=u(i("NpPU")),r=u(i("mA+v")),s=i("tDsd"),c=u(i("0PmP"));function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"MainSlide",data:function(){return{currentPage:1,dragged:!1,isMouseDown:!1,carouselName:[]}},mixins:[r.default,c.default],components:{Carousel:o.default},computed:n({},(0,a.mapGetters)(["carouselBanner","isMobile"]),{slides:function(){var t=[];return this.carouselBanner.forEach(function(e){e.parameters.forEach(function(e){t.push(e)})}),t}}),mounted:function(){this.getHomepageComponent({block:"CAROUSEL_BANNER",display:this.isMobile?"mobile":"normal"})},methods:n({},(0,a.mapActions)(["getHomepageComponent"]),{goto:function(t,e,i){i.stopPropagation(),this.dragged?this.dragged=!1:(window.open(t.url,"_blank"),this.trackClick(t,e))},changeHandler:function(t){this.currentPage=t+1},setDragged:function(t){this.isMouseDown&&(this.dragged=t)},setMouseDown:function(t){this.isMouseDown=t},trackLoad:function(t){var e=t.item,i=t.index,n=i;0===i&&(n=this.slides.length);var a=this.trackDevice(),o=String(n),r=String("Banner "+o);this.isCarouselNameTracked(e.title)||((0,s.trackPromoImpressionEvent)({eventSection:{id:a[0]+"-carousel-section",name:a[1]+" Home Carousel"},data:[{id:e.url,name:e.title||r,creative:"Carousel",position:o}]}),this.addCarouselName(e.title))},trackClick:function(t,e){var i=this.trackDevice(),n=String(e),a=String("Banner "+n);(0,s.trackPromoClickEvent)({eventSection:{id:i[0]+"-carousel-section",name:i[1]+" Home Carousel"},data:[{id:t.url,name:t.title||a,creative:"Carousel",position:n}]})},trackLink:function(){var t=this.trackDevice();(0,s.trackButtonNavigation)({event:"seeAllPromoClick",eventDetails:{action:"seeAllPromoClick",category:"retail-home",label:"see-all-promo-carousel"},eventSection:{id:t[0]+"-home-see-all-promo-carousel-section",name:t[1]+" Home See All Promo Carousel"}})},addCarouselName:function(t){this.carouselName.includes(t)||this.carouselName.push(t)},isCarouselNameTracked:function(t){return this.carouselName.includes(t)}})}},d7wE:function(t,e,i){"use strict";i.r(e);var n=i("jHAr"),a=i("rrLO");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("qv3F");var r=i("KHd+"),s=Object(r.a)(a.default,n.a,n.b,!1,null,"2e58bca9",null);e.default=s.exports},diDI:function(t,e,i){"use strict";i.r(e);var n=i("EsTj"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},eAhW:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"SkeletonBox",props:{width:{default:"100%"},height:{default:"200px"},backgroundColor:{default:"#DDDBDD"}}}},"gE/d":function(t,e,i){},i3SC:function(t,e,i){"use strict";var n=i("gE/d");i.n(n).a},j5l0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{ref:"carouselContainer",staticClass:"carousel-container"},[n("div",{ref:"items",class:[{moving:!t.circular},"items"]},t._l(t.renderedContent,function(e,i){return n("div",{key:i,staticClass:"slider-item",style:"width:"+100/t.perPage+"%"},[t.itemVisible[i]?[t._t("item",null,{item:e,index:i})]:t._e()],2)}))]),t._v(" "),t.pagination?n("Pagination",{attrs:{"max-page":t.slideCount,"active-page":t.activePage},on:{"nav-clicked":t.navigateTo}}):t._e(),t._v(" "),t.navigation?n("div",{staticClass:"navigation"},[t.visibleNext?n("div",{staticClass:"nav-button nav-button--right",on:{click:function(e){t.navigateTo(t.activePage+1,e)}}},[n("img",{attrs:{src:i("6tOk"),alt:""}})]):t._e(),t._v(" "),t.visiblePrev?n("div",{staticClass:"nav-button nav-button--left",on:{click:function(e){t.navigateTo(t.activePage-1,e)}}},[n("img",{attrs:{src:i("33ck"),alt:""}})]):t._e()]):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},jHAr:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"promo"},[i("h4",{staticClass:"promo__title"},[t._v("\n    "+t._s(t.$t("app.home.otherPromo.title"))+"\n  ")]),t._v(" "),t.visibleTab?i("BliTab",{ref:"tab",attrs:{"tab-index":"0"},nativeOn:{click:function(e){t.trackButton(t.categories)}}},t._l(t.categoriesTitle,function(e,n){return i("BliTabItem",{key:e,attrs:{name:e}},[i("other-promo-category",{attrs:{name:e,promo:t.content[n]}})],1)})):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},kCvA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{asyncComps:[],isForceUpdateRunning:!1}},methods:{updateScreen:function(t){this.asyncComps=this.asyncComps.concat(t),this.runForceUpdate()},runForceUpdate:function(){var t=this;this.$forceUpdate(),this.asyncComps=this.asyncComps.filter(function(e){return!t.$options.components[e].resolved}),0!==this.asyncComps.length?(this.isForceUpdateRunning=!0,this.$forceUpdate(),setTimeout(this.runForceUpdate,500)):this.isForceUpdateRunning=!1}}}},n4Vh:function(t,e,i){"use strict";i.r(e);var n=i("VWHG"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},qWcs:function(t,e,i){"use strict";var n=function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"skeletonBox",style:{height:this.height,width:this.width,backgroundColor:this.backgroundColor}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},qv3F:function(t,e,i){"use strict";var n=i("SuE+");i.n(n).a},r4Fp:function(t,e,i){"use strict";i.r(e);var n=i("89n5"),a=i("n4Vh");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("GcGR");var r=i("KHd+"),s=Object(r.a)(a.default,n.a,n.b,!1,null,"5c572168",null);e.default=s.exports},rrLO:function(t,e,i){"use strict";i.r(e);var n=i("Qr6E"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},v8th:function(t,e,i){"use strict";i.r(e);var n=i("EsDQ"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},vBO3:function(t,e,i){"use strict";i.r(e);var n=i("GS3r"),a=i("v8th");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("AqVe");var r=i("KHd+"),s=Object(r.a)(a.default,n.a,n.b,!1,null,"01fe835c",null);e.default=s.exports},x82Y:function(t,e,i){"use strict";i.r(e);var n=i("E3/g"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=a.a},xc2d:function(t,e,i){"use strict";var n=i("QKuH");i.n(n).a},zHnM:function(t,e,i){"use strict";i.r(e);var n=i("666V"),a=i("x82Y");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("Lypo");var r=i("KHd+"),s=Object(r.a)(a.default,n.a,n.b,!1,null,"10fd1c36",null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/G4R":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},o=e("L2JU"),r=u(e("veyb")),a=u(e("9IF1"));function u(t){return t&&t.__esModule?t:{default:t}}n.default={name:"footer-detail",data:function(){return{paymentInstallment:[]}},mixins:[r.default,a.default],components:{Seo:function(){return e.e(45).then(e.bind(null,"X0jD"))},PaymentMethod:function(){return e.e(38).then(e.bind(null,"nIhy"))}},mounted:function(){this.getPaymentList()},methods:i({},(0,o.mapActions)(["getPaymentList"]),{launchChat:function(){this.$emit("launchChat")},csIconStyle:function(t){return{background:"url("+t.icon+") no-repeat left center"}}}),computed:i({},(0,o.mapGetters)(["paymentList","cmsConfig","isMobile"]),{paymentMethods:function(){var t=this;return this.paymentList.map(function(t){return t.paymentMethod.toLowerCase()||""}).filter(function(n){return t.PAYMENT_METHODS.indexOf(n)>-1})||[]},supportSections:function(){return[{url:"/faq/topic/pembayaran",label:this.$t("app.footer.supportSection.payment")},{url:"/faq/topic/pengiriman",label:this.$t("app.footer.supportSection.delivery")},{url:"/faq/topic/status-pesanan",label:this.$t("app.footer.supportSection.orderStatus")},{url:"/faq/topic/pengembalian-produk",label:this.$t("app.footer.supportSection.productReturn")},{url:"/faq/topic/blibli-com-rewards",label:this.$t("app.footer.supportSection.blibliRewards")},{url:"/faq/topic/belanja",label:this.$t("app.footer.supportSection.howToShop")},{url:"/faq/",label:this.$t("app.footer.supportSection.contactUs")}]},customerCareSections:function(){return[{url:"#",label:this.$t("app.footer.customerCareSection.info")},{url:"#",label:this.$t("app.footer.customerCareSection.phoneNumber"),icon:e("O/UQ")},{url:"#",label:this.$t("app.footer.customerCareSection.email"),icon:e("DSAh")}]},infoSections:function(){return[{url:"/faq/topic/tentang-blibli/",label:this.$t("app.footer.infoSection.aboutBlibli")},{url:"/friends/",label:this.$t("app.footer.infoSection.blogBlibli")},{url:"/page/press-release/",label:this.$t("app.footer.infoSection.pers")},{url:"/page/category/news-events/",label:this.$t("app.footer.infoSection.news")},{url:"/brands",label:this.$t("app.footer.infoSection.listBrand")},{url:"https://careers.blibli.com/",label:this.$t("app.footer.infoSection.career")}]},cooperationSections:function(){return[{url:"https://affiliate.blibli.com/affiliates/",label:this.$t("app.footer.cooperationSection.affiliateProgram")},{url:"/pages/merchant-corner",label:this.$t("app.footer.cooperationSection.sellAtBlibli")},{url:"/pages/b2b",label:this.$t("app.footer.cooperationSection.b2bProgram")}]},familyCorpSections:function(){return[{url:"https://www.tiket.com/?utm_source=blibli&utm_medium=footer",image:this.COMPANIES.tiketcom},{url:"https://www.garasi.id/?utm_source=blibli&utm_medium=footer",image:this.COMPANIES.garasiid},{url:"https://www.blibli.com/promosi/trv-corporate-service?appsWebview=true",image:this.COMPANIES.promowisata}]},socialMediaSections:function(){return[{url:"https://www.facebook.com/bliblidotcom",image:this.SOCIAL_MEDIA.facebook},{url:"https://twitter.com/bliblidotcom",image:this.SOCIAL_MEDIA.twitter},{url:"http://www.youtube.com/user/bliblidotcom",image:this.SOCIAL_MEDIA.youtube},{url:"https://www.instagram.com/bliblidotcom",image:this.SOCIAL_MEDIA.instagram}]},paymentSecuritySections:function(){return[{url:"#",image:this.PAYMENT_SECURITIES.mastercard},{url:"#",image:this.PAYMENT_SECURITIES.visa},{url:"https://www.idea.or.id/trustmark/verify/rPl3Z3U6iObE4i8orl6Ptx21",target:"_blank",image:this.PAYMENT_SECURITIES.idea},{url:"#",image:this.PAYMENT_SECURITIES.norton},{url:"#",image:this.PAYMENT_SECURITIES.jcb},{url:"#",image:this.PAYMENT_SECURITIES.amex}]},logisticSections:function(){return[{url:"#",image:this.LOGISTICS.blibliexpress},{url:"#",image:this.LOGISTICS.jne},{url:"#",image:this.LOGISTICS.rpx},{url:"#",image:this.LOGISTICS.ncs},{url:"#",image:this.LOGISTICS.finfleet},{url:"#",image:this.LOGISTICS.fl},{url:"#",image:this.LOGISTICS.ninjaexpress},{url:"#",image:this.LOGISTICS.gosend},{url:"#",image:this.LOGISTICS.rajakirim},{url:"#",image:this.LOGISTICS.sicepat},{url:"#",image:this.LOGISTICS.grab},{url:"#",image:this.LOGISTICS.union},{url:"#",image:this.LOGISTICS.ncsexpress},{url:"#",image:this.LOGISTICS.sap},{url:"#",image:this.LOGISTICS.anteraja},{url:"#",image:this.LOGISTICS.paxel}]},logisticReturnSections:function(){return[{url:"#",image:this.LOGISTIC_RETURNS.alfatrex},{url:"#",image:this.LOGISTIC_RETURNS.blibliexpress},{url:"#",image:this.LOGISTIC_RETURNS.popbox},{url:"#",image:this.LOGISTIC_RETURNS.sicepat},{url:"#",image:this.LOGISTIC_RETURNS.grab},{url:"#",image:this.LOGISTIC_RETURNS.anteraja},{url:"#",image:this.LOGISTIC_RETURNS.paxel}]},appSections:function(){return[{url:"https://itunes.apple.com/id/app/blibli.com/id1034231507?l=id&amp;mt=8",image:this.appStoreIcons.appStore,label:"app-store"},{url:"https://play.google.com/store/apps/details?id=blibli.mobile.commerce",image:this.appStoreIcons.googlePlay,label:"google-play"},{url:"https://appgallery.cloud.huawei.com/ag/n/app/C101765925?channelId=web&detailType=0",image:this.appStoreIcons.huaweiAppGallery,label:"huawei-app-gallery"}]}})}},"3izb":function(t,n,e){"use strict";e.r(n);var i=e("/G4R"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n.default=o.a},"6Ebe":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"footer__detail"},[e("div",{staticClass:"footer__section b-flex b-jc-between"},[e("div",{staticClass:"footer__section-item help"},[e("h3",{staticClass:"footer__title"},[t._v("\n        "+t._s(t.$t("app.footer.supportSection.title"))+"\n      ")]),t._v(" "),t._l(t.supportSections,function(n,i){return e("a",{key:"support"+n.url+i,attrs:{href:n.url}},[t._v("\n        "+t._s(n.label)+"\n      ")])})],2),t._v(" "),e("div",{staticClass:"footer__section-item cs"},[e("h3",{staticClass:"footer__title"},[t._v("\n        "+t._s(t.$t("app.footer.customerCareSection.title"))+"\n      ")]),t._v(" "),t._l(t.customerCareSections,function(n,i){return e("a",{key:"customer-care"+n.url+i,attrs:{href:n.url}},[n.icon?e("div",{staticClass:"cs__icon",style:t.csIconStyle(n)},[t._v(" \n        ")]):t._e(),t._v("\n        "+t._s(n.label)+"\n      ")])}),t._v(" "),e("BliButton",{attrs:{color:"secondary"},on:{click:t.launchChat}},[e("span",{staticClass:"cs__btn"},[t._v("\n          "+t._s(t.$t("app.footer.customerCareSection.needHelp"))+"\n        ")])])],2),t._v(" "),e("div",{staticClass:"footer__section-item info-blibli"},[e("h3",{staticClass:"footer__title"},[t._v("\n        "+t._s(t.$t("app.footer.infoSection.title"))+"\n      ")]),t._v(" "),t._l(t.infoSections,function(n,i){return e("a",{key:"support"+n.url+i,attrs:{href:n.url}},[t._v("\n        "+t._s(n.label)+"\n      ")])})],2),t._v(" "),e("div",{staticClass:"footer__section-item"},[e("div",{staticClass:"cooperation"},[e("h3",{staticClass:"footer__title"},[t._v("\n          "+t._s(t.$t("app.footer.cooperationSection.title"))+"\n        ")]),t._v(" "),t._l(t.cooperationSections,function(n,i){return e("a",{key:"support"+n.url+i,attrs:{href:n.url}},[t._v("\n          "+t._s(n.label)+"\n        ")])})],2),t._v(" "),e("div",{staticClass:"blibli-family push-title"},[e("h3",{staticClass:"footer__title"},[t._v("\n          "+t._s(t.$t("app.footer.cooperationSection.family"))+"\n        ")]),t._v(" "),t._l(t.familyCorpSections,function(t,n){return e("a",{key:"family-corp"+t.url+n,attrs:{href:t.url}},[e(t.image,{tag:"component",attrs:{width:"100%"}})],1)})],2)]),t._v(" "),e("div",{staticClass:"footer__section-item"},[e("div",{staticClass:"social-media"},[e("h3",{staticClass:"footer__title"},[t._v("\n          "+t._s(t.$t("app.footer.socialMediaSection.title"))+"\n        ")]),t._v(" "),e("div",{staticClass:"b-flex"},t._l(t.socialMediaSections,function(t,n){return e("a",{key:"socmed"+t.url+n,attrs:{href:t.url}},[e(t.image,{tag:"component"})],1)}))]),t._v(" "),e("div",{staticClass:"apps-support push-title"},[e("h3",{staticClass:"footer__title"},[t._v("\n          "+t._s(t.$t("app.footer.socialMediaSection.download"))+"\n        ")]),t._v(" "),e("div",{staticClass:"b-flex"},t._l(t.appSections,function(t,n){return e("a",{key:"app-section"+t.url+n,attrs:{href:t.url}},[e(t.image,{tag:"component",attrs:{alt:t.label}})],1)}))])])]),t._v(" "),e("div",{staticClass:"footer__section partner-support b-flex b-jc-between"},[e("div",{staticClass:"partner-support__item"},[e("h3",{staticClass:"footer__title"},[t._v("\n        "+t._s(t.$t("app.footer.installment"))+"\n      ")]),t._v(" "),e("div",{staticClass:"partner-support__logo"},t._l(Object.keys(t.BANKS).sort(),function(n,i){return e("a",{key:"bank-installment"+i,attrs:{href:"/faq/topic/pembayaran"}},[t.BANKS[n]?e(t.BANKS[n],{tag:"component"}):t._e()],1)}))]),t._v(" "),e("div",{staticClass:"partner-support__item"},[e("h3",{staticClass:"footer__title"},[t._v("\n        "+t._s(t.$t("app.footer.paymentMethod"))+"\n      ")]),t._v(" "),e("div",{staticClass:"partner-support__logo"},t._l(t.paymentMethods,function(t,n){return e("a",{key:"payment-method"+n,attrs:{href:"/faq/topic/pembayaran"}},[e("PaymentMethod",{attrs:{data:t}})],1)}))]),t._v(" "),e("div",{staticClass:"partner-support__item"},[e("h3",{staticClass:"footer__title"},[t._v("\n        "+t._s(t.$t("app.footer.paymentSecurity"))+"\n      ")]),t._v(" "),e("div",{staticClass:"partner-support__logo"},t._l(t.paymentSecuritySections,function(t,n){return e("a",{key:"paymentSecSection"+t.url+n,attrs:{url:t.url,target:t.target||"_self"}},[e(t.image,{tag:"component"})],1)})),t._v(" "),e("h3",{staticClass:"footer__title push-title"},[t._v("\n        "+t._s(t.$t("app.footer.logistic"))+"\n      ")]),t._v(" "),e("div",{staticClass:"partner-support__logo"},t._l(t.logisticSections,function(t,n){return e("a",{key:"logistic"+t.url+n},[e(t.image,{tag:"component"})],1)})),t._v(" "),e("h3",{staticClass:"footer__title push-title"},[t._v("\n        "+t._s(t.$t("app.footer.logisticReturn"))+"\n      ")]),t._v(" "),e("div",{staticClass:"partner-support__logo"},t._l(t.logisticReturnSections,function(t,n){return e("a",{key:"logistic"+t.url+n},[e(t.image,{tag:"component"})],1)}))])]),t._v(" "),e("div",{staticClass:"footer__section seo"},[e("seo")],1)])},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"9IF1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){return e.e(54).then(e.bind(null,"f1Vg"))},o=function(){return e.e(70).then(e.bind(null,"BBdB"))},r=function(){return e.e(70).then(e.bind(null,"ztMY"))};n.default={components:{AppStoreIcon:i,GooglePlayIcon:o,HuaweiAppGalleryIcon:r},computed:{appStoreIcons:function(){return{appStore:i,googlePlay:o,huaweiAppGallery:r}}}}},DSAh:function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9Ii0xIC0yIDIyIDIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE0LjEgOS4yQzEzIDEwLjMgMTEuNiAxMSAxMCAxMWMtMS42IDAtMy0uNy00LjEtMS44bC01LTUuNmMtLjMtLjMtLjktLjEtLjkuM1YxNWMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjMuOWMwLS41LS42LS43LS45LS4zbC01IDUuNnoiIGZpbGw9IiM4NTg1ODUiLz48cGF0aCBkPSJNNy40IDcuOEM4LjEgOC42IDkgOSAxMCA5czEuOS0uNCAyLjYtMS4ybDUuMy02Yy4zLS4zLjEtLjgtLjMtLjgtMy4xIDAtMTItLjEtMTUuMSAwLS41IDAtLjcuNS0uNC44bDUuMyA2eiIgZmlsbD0iI0JEQkRCRCIvPjwvZz48L3N2Zz4="},"FGQ+":function(t,n,e){},FVYa:function(t,n,e){"use strict";e.r(n);var i=e("6Ebe"),o=e("3izb");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("KU+C");var a=e("KHd+"),u=Object(a.a)(o.default,i.a,i.b,!1,null,"2b2b8064",null);n.default=u.exports},"KU+C":function(t,n,e){"use strict";var i=e("FGQ+");e.n(i).a},"O/UQ":function(t,n){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9Ii0xIC0xIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5LjYgMTQuOGwtMi41LTEuNmMtLjktLjYtMi0uNC0yLjcuNS0uNi44LTEuMyAxLjUtMS45IDEuOC0xLjIuNC00LjMtMi42LTQuNS0yLjgtLjItLjItMy4yLTMuMy0yLjgtNC41LjItLjYgMS0xLjMgMS44LTEuOS44LS42IDEtMS44LjUtMi43TDUuNy45QzUuMiAwIDQtLjMgMy4xLjMgMS43IDEuMS4xIDIuOS42IDYuNSAxIDkgMi45IDEyLjQgNS41IDE1YzIuNiAyLjYgNiA0LjQgOC42IDQuOCAzLjYuNiA1LjMtMS4xIDYuMi0yLjUuNS0uOC4yLTItLjctMi41eiIgZmlsbD0iI0JEQkRCRCIvPjxwYXRoIGQ9Ik01LjcuOUM1LjIgMCA0LS4zIDMuMS4zbC0uNi4zIDMuOCA2Yy4yLS4yLjQtLjMuNi0uNS44LS42IDEtMS44LjUtMi43TDUuNy45ek0xOS42IDE0LjhsLTIuNS0xLjZjLS45LS42LTItLjQtMi43LjUtLjEuMi0uMy40LS41LjZsNiAzLjhjLjEtLjIuMy0uNC40LS42LjUtMSAuMi0yLjItLjctMi43eiIgZmlsbD0iIzg1ODU4NSIvPjwvZz48L3N2Zz4="},veyb:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(){return e.e(53).then(e.bind(null,"qy29"))},o=function(){return e.e(55).then(e.bind(null,"CB9S"))},r=function(){return e.e(56).then(e.bind(null,"sJRR"))},a=function(){return e.e(57).then(e.bind(null,"TICG"))},u=function(){return e.e(59).then(e.bind(null,"55Uq"))},l=function(){return e.e(60).then(e.bind(null,"9zS1"))},s=function(){return e.e(61).then(e.bind(null,"3iSZ"))},c=function(){return e.e(62).then(e.bind(null,"L5gf"))},p=function(){return e.e(63).then(e.bind(null,"7sU2"))},f=function(){return e.e(64).then(e.bind(null,"Ldj2"))},b=function(){return e.e(72).then(e.bind(null,"DPhp"))},d=function(){return e.e(85).then(e.bind(null,"LwKa"))},h=function(){return e.e(87).then(e.bind(null,"jddJ"))},m=function(){return e.e(88).then(e.bind(null,"x6tc"))},S=function(){return e.e(89).then(e.bind(null,"MpwZ"))},g=function(){return e.e(94).then(e.bind(null,"j6tf"))},I=function(){return e.e(95).then(e.bind(null,"AvQi"))},_=function(){return e.e(97).then(e.bind(null,"JOrw"))},L=function(){return e.e(102).then(e.bind(null,"b4jY"))},C=function(){return e.e(104).then(e.bind(null,"mDvG"))},y=function(){return e.e(105).then(e.bind(null,"cpAs"))},M=function(){return e.e(109).then(e.bind(null,"Qo/4"))},v=function(){return e.e(106).then(e.bind(null,"p//U"))},j=function(){return e.e(68).then(e.bind(null,"t9T3"))},T=function(){return e.e(98).then(e.bind(null,"hfe3"))},E=function(){return e.e(65).then(e.bind(null,"7l3l"))},A=function(){return e.e(74).then(e.bind(null,"4jzB"))},w=function(){return e.e(107).then(e.bind(null,"hDmQ"))},x=function(){return e.e(111).then(e.bind(null,"Zodt"))},N=function(){return e.e(77).then(e.bind(null,"2693"))},O=function(){return e.e(79).then(e.bind(null,"H+7b"))},D=function(){return e.e(82).then(e.bind(null,"dNwG"))},k=function(){return e.e(83).then(e.bind(null,"Ttta"))},G=function(){return e.e(84).then(e.bind(null,"oexi"))},R=function(){return e.e(80).then(e.bind(null,"IbCo"))},P=function(){return e.e(78).then(e.bind(null,"ynYP"))},U=function(){return e.e(51).then(e.bind(null,"AVCj"))},z=function(){return e.e(73).then(e.bind(null,"QRh3"))},$=function(){return e.e(75).then(e.bind(null,"bgbJ"))},B=function(){return e.e(86).then(e.bind(null,"h77+"))},Z=function(){return e.e(93).then(e.bind(null,"4uqP"))},Y=function(){return e.e(110).then(e.bind(null,"2dX4"))},Q=function(){return e.e(58).then(e.bind(null,"ZifR"))},H=function(){return e.e(66).then(e.bind(null,"0Bna"))},q=function(){return e.e(67).then(e.bind(null,"H76x"))},J=function(){return e.e(69).then(e.bind(null,"eFoh"))},W=function(){return e.e(71).then(e.bind(null,"yyUk"))},F=function(){return e.e(76).then(e.bind(null,"HSq5"))},K=function(){return e.e(90).then(e.bind(null,"8ztq"))},V=function(){return e.e(91).then(e.bind(null,"y5QD"))},X=function(){return e.e(92).then(e.bind(null,"XH0p"))},tt=function(){return e.e(99).then(e.bind(null,"UHgO"))},nt=function(){return e.e(100).then(e.bind(null,"l35w"))},et=function(){return e.e(101).then(e.bind(null,"zr+Z"))},it=function(){return e.e(103).then(e.bind(null,"5exS"))},ot=function(){return e.e(108).then(e.bind(null,"AJpA"))},rt=function(){return e.e(96).then(e.bind(null,"CxfM"))},at=function(){return e.e(52).then(e.bind(null,"hl8A"))},ut={anz:i,bca:o,bii:r,bjb:a,bni:u,bri:l,bukopin:s,cimbniaga:c,citibank:p,danamon:f,hsbc:b,mandiri:d,mayapada:h,mega:m,mnc:S,ocbcnisp:g,panin:I,permata:_,shinhan:L,sinarmas:C,standardchartered:y,uob:M},lt=["akulaku","alfagroup","amexcreditcard","bcaoneklik","bniva","briva","btndebitonline","cimbclicks","homecreditindonesia","indomaret","jcbcreditcard","klikbca","klikpayfullpayment","kredivo","mandiridebit","mastercardcreditcard","pospay","sakuku","veritransgopay","visacreditcard","vospay","veritransqris","ovo","dana","paylater","jeniuscashtag","linkaja"],st={tiketcom:v,garasiid:j,promowisata:T},ct={facebook:E,instagram:A,twitter:w,youtube:x},pt={alfatrex:N,blibliexpress:O,popbox:D,posindonesia:k,sicepat:G,grab:R,anteraja:P,paxel:function(){return e.e(81).then(e.bind(null,"3j6z"))}},ft={amex:U,idea:z,jcb:$,mastercard:B,norton:Z,visa:Y},bt={blibliexpress:Q,finfleet:H,fl:q,gosend:J,grab:W,jne:F,ncs:K,ncsexpress:V,ninjaexpress:X,rajakirim:tt,rpx:nt,sap:et,sicepat:it,union:ot,paxel:rt,anteraja:at};n.default={components:{AnzLogo:i,BcaLogo:o,BiiLogo:r,BjbLogo:a,BniLogo:u,BriLogo:l,BukopinLogo:s,CimbNiagaLogo:c,CitibankLogo:p,DanamonLogo:f,HsbcLogo:b,MandiriLogo:d,MayapadaLogo:h,MegaLogo:m,MncLogo:S,OcbcNispLogo:g,PaninLogo:I,PermataLogo:_,ShinhanLogo:L,SinarmasLogo:C,StandardCharteredLogo:y,UobLogo:M,TiketCom:v,GarasiId:j,PromoWisata:T,Facebook:E,Instagram:A,Twitter:w,Youtube:x,LRAlfaTrex:N,LRBlibliExpress:O,LRPopBox:D,LRPosIndonesia:k,LRSiCepat:G,LRGrab:R,LRAnterAja:P,Amex:U,Idea:z,Jcb:$,MasterCard:B,Norton:Z,Visa:Y,BlibliExpress:Q,Finfleet:H,Fl:q,GoSend:J,Grab:W,Jne:F,Ncs:K,NcsExpress:V,NinjaExpress:X,RajaKirim:tt,Rpx:nt,Sap:et,SiCepat:it,Union:ot,Paxel:rt,AnterAja:at},computed:{BANKS:function(){return ut},PAYMENT_METHODS:function(){return lt},COMPANIES:function(){return st},SOCIAL_MEDIA:function(){return ct},LOGISTIC_RETURNS:function(){return pt},PAYMENT_SECURITIES:function(){return ft},LOGISTICS:function(){return bt}}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,23],{"+v9G":function(i,t,e){"use strict";var n=function(){var i=this.$createElement;return(this._self._c||i)("img",{attrs:{src:this.src,alt:this.alt}})},r=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return r})},"5Fj3":function(i,t,e){"use strict";var n=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",[n("div",{staticClass:"edit-favourite blu-columns b-mobile b-multiline"},[i._l(i.favourites,function(t,r){return n("div",{key:"edit-fav"+t.id,class:[{"blu-column b-3":i.isMobile},{"edit-favourite__desktop":!i.isMobile},{"second-row":i.isMobile&&r>3},"favourite-item"],on:{click:function(e){i.removeFromFavourite(t)}}},[n("div",{staticClass:"edit-favourite__filled-favourite"},[n("WidgetIcon",{attrs:{src:t.image,alt:t.alt}}),i._v(" "),n("div",{domProps:{innerHTML:i._s(i.$t("app.home.favourite.label."+t.type+"."+t.title))}})],1),i._v(" "),n("div",{staticClass:"minus-icon"},[n("img",{attrs:{id:t.id,src:e("Uwiq")}})])])}),i._v(" "),i._l(i.emptyFavs,function(t){return n("div",{key:"edit-fav-empty"+t,class:[{"blu-column b-3":i.isMobile},{"edit-favourite__desktop":!i.isMobile}]},[i._m(0,!0)])})],2)])},r=[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"edit-favourite__empty-favourite"},[t("img",{attrs:{src:e("I12d")}})])}];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return r})},"6Bgn":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},r=e("L2JU");t.default={name:"EditFavourite",props:{myFavouriteList:{default:function(){return[]}}},components:{WidgetIcon:function(){return Promise.resolve().then(e.bind(null,"KgKS"))}},computed:n({},(0,r.mapGetters)(["isMobile","favouriteComponents"]),{emptyFavs:function(){return 8-this.myFavouriteList.length},favourites:function(){var i=this;return this.myFavouriteList.map(function(t){return n({},i.favouriteComponents.find(function(i){return t===i.title}))})}}),methods:{removeFromFavourite:function(i){this.$emit("removeFromFavourite",i)}}}},"E/Tp":function(i,t,e){"use strict";e.r(t);var n=e("Jx4b"),r=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,function(){return n[i]})}(a);t.default=r.a},I12d:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icHJlZml4X19hIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHg9IjAiIHk9IjAiIHJ4PSI4Ii8+CiAgICAgICAgPG1hc2sgaWQ9InByZWZpeF9fYiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiB4PSIwIiB5PSIwIiBmaWxsPSIjZmZmIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3ByZWZpeF9fYSIvPgogICAgICAgIDwvbWFzaz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICA8dXNlIHN0cm9rZT0iI0UwRTBFMCIgc3Ryb2tlLWRhc2hhcnJheT0iMiIgbWFzaz0idXJsKCNwcmVmaXhfX2IpIiB4bGluazpocmVmPSIjcHJlZml4X19hIi8+CiAgICAgICAgPGcgc3Ryb2tlPSIjQkRCREJEIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44OTUgMC4yOTVMNS44OTUgMTEuMTk0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC40IDEwLjQpIi8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc1IDAuMTVMNS43NSAxMS4wNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNCAxMC40KSByb3RhdGUoOTAgNS43NSA1LjYpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"},Jx4b:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{src:{type:String,default:function(){return""}},alt:{type:String,default:function(){return""}}}}},KgKS:function(i,t,e){"use strict";e.r(t);var n=e("+v9G"),r=e("E/Tp");for(var a in r)"default"!==a&&function(i){e.d(t,i,function(){return r[i]})}(a);var u=e("KHd+"),o=Object(u.a)(r.default,n.a,n.b,!1,null,null,null);t.default=o.exports},TnrZ:function(i,t,e){},Uwiq:function(i,t){i.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9IiNFRDFDMjQiLz4KICAgICAgICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMiIgeD0iMyIgeT0iNyIgZmlsbD0iI0ZGRiIgcng9IjEiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},WYLX:function(i,t,e){"use strict";e.r(t);var n=e("5Fj3"),r=e("vCof");for(var a in r)"default"!==a&&function(i){e.d(t,i,function(){return r[i]})}(a);e("wb8E");var u=e("KHd+"),o=Object(u.a)(r.default,n.a,n.b,!1,null,"8d9ca828",null);t.default=o.exports},vCof:function(i,t,e){"use strict";e.r(t);var n=e("6Bgn"),r=e.n(n);for(var a in n)"default"!==a&&function(i){e.d(t,i,function(){return n[i]})}(a);t.default=r.a},wb8E:function(i,t,e){"use strict";var n=e("TnrZ");e.n(n).a}}]);
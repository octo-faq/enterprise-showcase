(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(t,e,r){var content=r(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("7388ab72",content,!0,{sourceMap:!1})},228:function(t,e,r){var content=r(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("dfa0fdcc",content,!0,{sourceMap:!1})},251:function(t){t.exports=JSON.parse('[{"name":"getting-started","full_name":"octo-faq/getting-started","description":"👀 Start here if you don\'t know what you\'re looking for! ","html_url":"https://github.com/octo-faq/getting-started","language":null,"stargazers_count":0,"watchers_count":0,"forks_count":0},{"name":"code-scanning-javascript-demo","full_name":"octo-faq/code-scanning-javascript-demo","description":null,"html_url":"https://github.com/octo-faq/code-scanning-javascript-demo","language":null,"stargazers_count":0,"watchers_count":0,"forks_count":0},{"name":"advanced-security-terraform","full_name":"octo-faq/advanced-security-terraform","description":"Vulnerable Terraform Projects - Fork of https://github.com/bridgecrewio/terragoat","html_url":"https://github.com/octo-faq/advanced-security-terraform","language":"HCL","stargazers_count":0,"watchers_count":0,"forks_count":0},{"name":"enterprise-showcase","full_name":"octo-faq/enterprise-showcase","description":null,"html_url":"https://github.com/octo-faq/enterprise-showcase","language":"Vue","stargazers_count":0,"watchers_count":0,"forks_count":0}]')},256:function(t,e,r){"use strict";r(225),r(227),r(27),r(55),r(20),r(182);var n=r(1),o=r(76),c=r(251);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{clipped:!0,drawer:!1,fixed:!1,navigationItems:[{icon:"mdi-apps",title:"Explore",to:"/"},{icon:"mdi-bookshelf",title:"Collections",to:"/collections"},{icon:"mdi-information-outline",title:"Resources",to:"/resources"}],title:"Enterprise Showcase",descriptionLimit:90,searchEntries:[],isLoading:!1,searchSelection:"",search:""}},computed:f(f({},Object(o.c)({searchEngine:"getSearchEngine",repositoryMap:"getRepositoryMap"})),{},{items:function(){var t=this;return this.searchEntries.map((function(e){if(e.item.description){var r=e.item.description.length>t.descriptionLimit?e.item.description.slice(0,t.descriptionLimit)+"...":e.item.description;return Object.assign({},e.item,{description:r})}return Object.assign({},e.item,{description:""})}))}}),watch:{search:function(t){this.isLoading||(this.isLoading=!0,t&&0!==t.length?this.searchEntries=this.searchEngine.search(t):this.searchEntries=[],this.isLoading=!1)}},created:function(){this.loadRepositories(c)},methods:f(f({},Object(o.b)({loadRepositories:"loadRepositories"})),{},{searchResultSelected:function(){this.searchSelection&&window.open(this.repositoryMap[this.searchSelection].html_url,"_blank")}})},h=(r(301),r(89)),m=r(127),v=r.n(m),_=r(404),y=r(411),w=r(405),x=r(409),k=r(188),O=r(412),S=r(413),j=r(406),E=r(185),V=r(187),L=r(119),C=r(186),M=r(52),P=r(407),A=r(410),I=r(408),z=r(252),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.navigationItems,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-autocomplete",{staticClass:"searchbox",attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","no-filter":"",clearable:"","item-text":"full_name","item-value":"full_name",label:"Search repositories",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:t.searchResultSelected},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(n.full_name)}}),t._v(" "),r("v-list-item-subtitle",{domProps:{textContent:t._s(n.description)}}),t._v(" "),r("v-chip-group",{attrs:{column:""}},t._l(n.topics,(function(e){return r("v-chip",{key:e,attrs:{small:""}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)],1)]}}]),model:{value:t.searchSelection,callback:function(e){t.searchSelection=e},expression:"searchSelection"}})],1),t._v(" "),r("v-main",[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-navigation-drawer",{attrs:{temporary:"",fixed:""}},[r("v-list",[r("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[r("v-list-item-action",[r("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),r("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,"73fd542c",null);e.a=component.exports;v()(component,{VApp:_.a,VAppBar:y.a,VAppBarNavIcon:w.a,VAutocomplete:x.a,VChip:k.a,VChipGroup:O.a,VContainer:S.a,VFooter:j.a,VIcon:E.a,VList:V.a,VListItem:L.a,VListItemAction:C.a,VListItemContent:M.a,VListItemSubtitle:M.b,VListItemTitle:M.c,VMain:P.a,VNavigationDrawer:A.a,VSpacer:I.a,VToolbarTitle:z.a})},265:function(t,e,r){r(266),t.exports=r(267)},289:function(t,e,r){"use strict";r(223)},290:function(t,e,r){(e=r(7)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},295:function(t,e,r){var content=r(296);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("5c670272",content,!0,{sourceMap:!1})},296:function(t,e,r){(e=r(7)(!1)).push([t.i,'.gradient-text{background:linear-gradient(270.97deg,#ffe580 -21.36%,#ff7571 -2.45%,#ea5dad 26.84%,#c2a0fd 64.15%,#3bf0e4 108.29%,#b2f4b6 159.03%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hxl{display:block;font-family:"alliance",mono,sans-serif!important;font-size:54px!important;line-height:1.1;font-weight:500!important;letter-spacing:-.03em;margin-bottom:24px}@media(min-width:768px){.hxl{font-size:72px!important}}@media(min-width:400px){.hxl{font-size:68px!important}}@media(min-width:420px){.hxl{font-size:72px!important}}@media(min-width:544px){.hxl{font-size:84px!important}}@media(min-width:768px){.hxl{font-size:96px!important}}.plain-link{color:inherit!important;text-decoration:inherit}',""]),t.exports=e},301:function(t,e,r){"use strict";r(228)},302:function(t,e,r){(e=r(7)(!1)).push([t.i,".searchbox[data-v-73fd542c]{margin-top:20px}",""]),t.exports=e},386:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return d})),r.d(e,"getters",(function(){return h}));var n=r(253);function o(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l=function(){return{repositories:[],repositoryMap:{},searchEngine:null}},f={repositories:function(t,e){t.repositories=e},repositoryMap:function(t,e){t.repositoryMap=e},searchEngine:function(t,e){t.searchEngine=e}},d={loadRepositories:function(t,e){var r,c=t.commit,l=new n.a(e,{keys:["full_name","description","topics"]}),map={},f=o(e);try{for(f.s();!(r=f.n()).done;){var d=r.value;map[d.full_name]=d}}catch(t){f.e(t)}finally{f.f()}c("repositories",e),c("repositoryMap",map),c("searchEngine",l)}},h={getRepositories:function(t){return t.repositories},getRepositoryMap:function(t){return t.repositoryMap},getSearchEngine:function(t){return t.searchEngine}}},81:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(289),r(89)),c=r(127),l=r.n(c),f=r(404),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[265,8,1,9]]]);
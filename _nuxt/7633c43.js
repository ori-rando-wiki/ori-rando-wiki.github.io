(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{241:function(e,t,r){var content=r(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("d36d57da",content,!0,{sourceMap:!1})},242:function(e,t,r){"use strict";r.r(t);var n={name:"search-bar",props:["initialQuery"],data:function(e){var t;return{searchQuery:null!==(t=e.initialQuery)&&void 0!==t?t:""}},methods:{search:function(){this.searchQuery&&this.$router.push({name:"search-query",params:{query:this.searchQuery}})}}},c=(r(243),r(43)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"search-container"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text"},domProps:{value:e.searchQuery},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.searchQuery?e._e():r("svg",{staticClass:"search-icon",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}})])])}),[],!1,null,"bf13f7b4",null);t.default=component.exports},243:function(e,t,r){"use strict";r(241)},244:function(e,t,r){var n=r(51)(!1);n.push([e.i,".search-container[data-v-bf13f7b4]{position:relative}.search-container .search-icon[data-v-bf13f7b4]{position:absolute;left:1em;height:80%;margin:.4em 0;color:var(--color-secondary);transition:opacity .15s,transform .15s;pointer-events:none}.search-container .search-input[data-v-bf13f7b4]{line-height:1;padding:.8em .7em .7em 1em;border-radius:2.5em;background-color:var(--color-background-light);border:none;color:var(--color-foreground);font-size:1.1em;max-width:calc(100vw - 4em)}.search-container .search-input[data-v-bf13f7b4]:focus,.search-container .search-input[data-v-bf13f7b4]:hover{outline:none;background-color:var(--color-background-lighter)}.search-container .search-input:focus+.search-icon[data-v-bf13f7b4]{opacity:0;transform:translateX(10px)}",""]),e.exports=n},246:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(37),r(26),r(35),r(54),r(30),r(55);var n=r(25);r(34);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=function(article){return o(o({},article),{path:"_index"===article.slug?article.path.substr(0,article.path.length-6):article.path})}},248:function(e,t,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(52).default)("6fc86dde",content,!0,{sourceMap:!1})},253:function(e,t,r){"use strict";r(248)},254:function(e,t,r){var n=r(51)(!1);n.push([e.i,"[data-v-30a5d7c6]:export{breakpointSm:768px;breakpointMd:1200px}header[data-v-30a5d7c6]{display:flex;align-items:center}@media only screen and (max-width:768px){header[data-v-30a5d7c6]{flex-direction:column-reverse}header .search-bar[data-v-30a5d7c6]{margin-left:0!important}}header .title[data-v-30a5d7c6]{display:inline-block}header .search-bar[data-v-30a5d7c6]{margin-left:1em}.article-grid[data-v-30a5d7c6]{display:flex;grid-gap:2em;gap:2em}@media only screen and (max-width:768px){.article-grid[data-v-30a5d7c6]{flex-direction:column}}.article-grid aside[data-v-30a5d7c6]{min-width:20%}.article-grid aside .sticky[data-v-30a5d7c6]{position:sticky;margin-top:1em;top:0}.article-grid aside .sticky .sidebar[data-v-30a5d7c6]{display:flex;flex-direction:column;max-height:100vh;overflow-y:scroll;padding-right:1em;margin-right:-1em}.article-grid aside .sticky .sidebar .toc[data-v-30a5d7c6]{list-style:none;padding-left:0;padding-bottom:1em;margin-bottom:1em;border-bottom:1px solid var(--color-background-light);transition:border-bottom-color .2s}.article-grid aside .sticky .sidebar .toc .item[data-v-30a5d7c6]{display:block;line-height:1.3em;padding:.2em 0}.article-grid aside .sticky .sidebar .toc .item.indent-1[data-v-30a5d7c6]{padding-left:.5em;font-size:.9em}.article-grid aside .sticky .sidebar .toc .item.indent-2[data-v-30a5d7c6]{padding-left:1em;font-size:.9em}.article-grid aside .sticky .sidebar .toc .item.indent-3[data-v-30a5d7c6]{padding-left:1.5em;font-size:.9em}.article-grid aside .sticky .sidebar .toc .item.indent-4[data-v-30a5d7c6]{padding-left:2em;font-size:.9em}.article-grid aside .sticky .sidebar .toc .item.indent-5[data-v-30a5d7c6]{padding-left:2.5em;font-size:.9em}.article-grid aside .sticky .sidebar .toc .item.indent-6[data-v-30a5d7c6]{padding-left:3em;font-size:.9em}.article-grid aside .sticky .sidebar .button[data-v-30a5d7c6]{margin-bottom:.2em;padding:.4em .6em}",""]),e.exports=n},268:function(e,t,r){"use strict";r.r(t);r(38),r(9),r(21),r(36),r(13),r(40),r(20);var n=r(5),c=(r(29),r(42),r(56),r(121),r(26),r(39),r(242)),o=r(246);function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){d=!0,c=e},f:function(){try{o||null==r.return||r.return()}finally{if(d)throw c}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var f={components:{SearchBar:c.default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,path,article,c,l,f,h,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,n=e.params,path=n.pathMatch.replace(/\/$/,""),t.next=4,r(path).fetch();case 4:return article=t.sent,c=[],t.t0=d,t.next=9,r("/sidebar").fetch();case 9:t.t1=t.sent.sidebar,l=(0,t.t0)(t.t1),t.prev=11,l.s();case 13:if((f=l.n()).done){t.next=21;break}return h=f.value,t.next=17,r(h).fetch();case 17:m=t.sent,c.push(Object(o.a)(Array.isArray(m)?m.find((function(p){return"_index"===p.slug})):m));case 19:t.next=13;break;case 21:t.next=26;break;case 23:t.prev=23,t.t2=t.catch(11),l.e(t.t2);case 26:return t.prev=26,l.f(),t.finish(26);case 29:return t.abrupt("return",{article:Array.isArray(article)?article.find((function(p){return"_index"===p.slug})):article,sidebarArticles:c});case 30:case"end":return t.stop()}}),t,null,[[11,23,26,29]])})))()},head:function(){return{title:this.article.title,meta:[{hid:"description",name:"description",content:this.article.description},{hid:"og:title",property:"og:title",content:this.article.title},{hid:"og:description",property:"og:description",content:this.article.description},{hid:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:this.article.title}]}},computed:{minTocLevel:function(){var e,t=0,r=d(this.article.toc);try{for(r.s();!(e=r.n()).done;){var n=e.value;(0===t||t>n.depth)&&(t=n.depth)}}catch(e){r.e(e)}finally{r.f()}return t}}},h=(r(253),r(43)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("header",[r("h1",{staticClass:"title"},[e._v(e._s(e.article.title))]),e._v(" "),r("div",{staticClass:"spacer"}),e._v(" "),r("search-bar",{staticClass:"search-bar"})],1),e._v(" "),r("div",{staticClass:"article-grid"},[r("article",[r("nuxt-content",{attrs:{document:e.article}})],1),e._v(" "),e.article.hideSidebar?e._e():r("aside",[r("div",{staticClass:"sticky"},[r("div",{staticClass:"sidebar"},[e.article.toc.length>0?r("ul",{staticClass:"toc"},e._l(e.article.toc,(function(link){return r("li",{key:link.id},[r("nuxt-link",{staticClass:"item",class:"indent-"+(link.depth-e.minTocLevel),attrs:{to:"#"+link.id}},[e._v("\n                "+e._s(link.text)+"\n              ")])],1)})),0):e._e(),e._v(" "),e._l(e.sidebarArticles,(function(article){return r("nuxt-link",{key:article.path,staticClass:"button",attrs:{to:article.path}},[e._v("\n            "+e._s(article.sidebarTitle||article.title)+"\n          ")])}))],2)])])])])}),[],!1,null,"30a5d7c6",null);t.default=component.exports;installComponents(component,{SearchBar:r(242).default})}}]);
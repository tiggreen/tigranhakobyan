(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{154:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return s});var n=t(0),i=t.n(n),r=t(157),o=t(159),d=t(167),l=t(160),m=t(166),s="653655127";a.default=function(e){var a=e.data,t=e.pageContext,n=a.site.siteMetadata,s=n.title,c=n.subtitle,_=t.currentPage,u=t.hasNextPage,p=t.hasPrevPage,g=t.prevPagePath,f=t.nextPagePath,P=a.allMarkdownRemark.edges,b=_>0?"Posts - Page "+_+" - "+s:s;return i.a.createElement(r.a,{title:b,description:c},i.a.createElement(o.a,null),i.a.createElement(l.a,null,i.a.createElement(d.a,{edges:P}),i.a.createElement(m.a,{prevPagePath:g,nextPagePath:f,hasPrevPage:p,hasNextPage:u})))}},163:function(e,a,t){e.exports={carbonads:"Feed-module--carbonads--YnaLr","carbon-wrap":"Feed-module--carbon-wrap--3LfYX","carbon-img":"Feed-module--carbon-img--1GE2f","carbon-text":"Feed-module--carbon-text--39Pzg","carbon-poweredby":"Feed-module--carbon-poweredby--1kn-a",feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},164:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var o in n)t.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}void 0!==e&&e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(a,[]))||(e.exports=n)}()},165:function(e,a,t){e.exports={carbonads:"Pagination-module--carbonads--1v3ql","carbon-wrap":"Pagination-module--carbon-wrap--2UI8J","carbon-img":"Pagination-module--carbon-img--y9nG9","carbon-text":"Pagination-module--carbon-text--3IuUT","carbon-poweredby":"Pagination-module--carbon-poweredby--2WDxy",pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},166:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(164),o=t.n(r),d=t(32),l=t(161),m=t(165),s=t.n(m),c=o.a.bind(s.a),_=function(e){var a=e.prevPagePath,t=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,o=c({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),m=c({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(d.Link,{rel:"prev",to:a,className:o},l.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(d.Link,{rel:"next",to:t,className:m},l.b.NEXT_PAGE)))};t.d(a,"a",function(){return _})},167:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(168),o=t.n(r),d=t(32),l=t(163),m=t.n(l),s=function(e){var a=e.edges;return i.a.createElement("div",{className:m.a.feed},a.map(function(e){return i.a.createElement("div",{className:m.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:m.a["feed__item-meta"]},i.a.createElement("time",{className:m.a["feed__item-meta-time"],dateTime:o()(e.node.frontmatter.date).format("MMMM D, YYYY")},o()(e.node.frontmatter.date).format("MMMM YYYY")),i.a.createElement("span",{className:m.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:m.a["feed__item-meta-category"]},i.a.createElement(d.Link,{to:e.node.fields.categorySlug,className:m.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:m.a["feed__item-title"]},i.a.createElement(d.Link,{className:m.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:m.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(d.Link,{className:m.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))}))};t.d(a,"a",function(){return s})}}]);
//# sourceMappingURL=component---src-templates-index-template-js-dab458d7c64e416e9a11.js.map
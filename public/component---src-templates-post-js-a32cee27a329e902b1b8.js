(self.webpackChunkKaleb_s_Portfolio=self.webpackChunkKaleb_s_Portfolio||[]).push([[851],{9100:function(e,t,r){var n=r(9489),o=r(7067);function l(t,r,c){return o()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),l=r(9713),c=r(7316),a=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=c(e,a),i=f(t),m=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:p},i),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return s.createElement(m,u({},l))}},4613:function(e,t,r){"use strict";var n=r(7294),o=r(5668);t.Z=function(e){var t=e.children;return n.createElement(o.Z,null,n.createElement("main",{className:"post"},t))}},5302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(6156),o=r(7294),l=r(6725),c=r(4643),a=r(4613),i=r(5444),u=r(3874),s=function(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-clock"},o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("polyline",{points:"12 6 12 12 16 14"}))},p=function(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file-text"},o.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),o.createElement("polyline",{points:"14 2 14 8 20 8"}),o.createElement("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),o.createElement("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),o.createElement("polyline",{points:"10 9 9 9 8 9"}))},f=r(2518),m=function(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar"},o.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),o.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),o.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),o.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))},d=function(e){var t=e.title,r=e.published_at,n=e.body,l=e.tags,c=e.show_word_count,a=e.words,d=e.readTime;return void 0===(0,o.useContext)(u.default).mediaQueryMatch?null:o.createElement(o.Fragment,null,o.createElement("div",{className:"post-info"},o.createElement("p",null,d&&o.createElement(o.Fragment,null,o.createElement(s,null),d," minute read",o.createElement(i.rU,{to:"#"},o.createElement("span",{className:"flag flag-icon flag-icon-gb flag-icon-squared"}))))),o.createElement("article",null,o.createElement("h1",{className:"post-title"},t),o.createElement("div",{className:"post-content"},n)),o.createElement("div",{className:"post-info with-dashed-border"},o.createElement("p",null,o.createElement(m,null),new Date(r).toLocaleDateString("en-GB",{month:"long",day:"numeric",year:"numeric"})),c&&a&&o.createElement("p",null,o.createElement(p,null),a," words"),l&&o.createElement("p",null,o.createElement(f.Z,null),l.map((function(e,t){return o.createElement("span",{className:"tag",key:t},o.createElement(i.rU,{to:"#"},e))})))))},y=r(6179);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){var t=e.data,r=(e.pageContext,o.createElement(l.MDXRenderer,null,t.file.childMdx.body)),n=t.file.childMdx.wordCount.words,i=t.file.childMdx.timeToRead,u=x(x({},t.file.childMdx.frontmatter),{},{body:r,words:n,readTime:i});return o.createElement(a.Z,null,o.createElement(y.Z,{title:u.title}),o.createElement(c.Z,null,o.createElement(d,u)))}}}]);
//# sourceMappingURL=component---src-templates-post-js-a32cee27a329e902b1b8.js.map
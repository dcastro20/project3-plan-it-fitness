(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},0:function(e,t,n){n("J5xr"),e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),i=n("FYa8"),s=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],p=r[u]||new Set;p.has(l)?a=!1:(p.add(l),r[u]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(e)},t)}))})))}m.rewind=d.rewind;var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,c,"next",e)}function c(e){r(i,o,a,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},J5xr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("YNMu")}])},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(s){i(u,s);var c=l(u);function u(e){var a;return r(this,u),a=c.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},YNMu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=n("o0o1"),c=n.n(s),u=n("HaE+"),l=n("ODXe"),f=n("MX0m"),p=n.n(f),d=n("YFqc"),m=n.n(d),h=n("ko8p"),v=o.a.createElement,x=function(e){var t=e.children,n=Object(h.a)(),r=Object(l.a)(n,2),a=r[0],s=r[1].mutate,f=function(){var e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/auth",{method:"DELETE"});case 2:s(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return v(o.a.Fragment,null,v(p.a,{id:"984868888"},["a{-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;color:#0070f3;}","a:hover{color:#0366d6;}","body{margin:0;padding:0;color:#111;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;background-color:#fff;}","h2{color:#333;text-align:center;}","label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:0.5rem;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}","form{margin-bottom:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","input,textarea{font-family:monospace;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;margin-left:0.5rem;box-shadow:none;width:100%;color:#000;background-color:transparent;border:1px solid #d8d8d8;border-radius:5px;outline:0px;padding:10px 25px;}","button{display:block;margin-bottom:0.5rem;color:#fff;border-radius:5px;border:none;background-color:#000;cursor:pointer;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;padding:10px 25px;box-shadow:0 5px 10px rgba(0,0,0,0.12);}","button:hover,button:active{-webkit-transform:translate3d(0px,-1px,0px);-ms-transform:translate3d(0px,-1px,0px);transform:translate3d(0px,-1px,0px);box-shadow:0 8px 30px rgba(0,0,0,0.12);}","header{border-bottom:1px solid #d8d8d8;}","nav{max-width:1040px;margin:auto;padding:1rem 2rem;}","nav div{float:right;}","nav div a{font-size:0.9rem;margin-left:1rem;}","nav h1{font-size:1rem;color:#444;margin:0;font-weight:700;float:left;}","nav:after{content:'';clear:both;display:table;}","main{padding:1rem;max-width:1040px;margin:0 auto;}","footer{text-align:center;font-size:0.8rem;margin-top:1rem;padding:3rem;color:#888;}"]),v(i.a,null,v("title",{className:"jsx-984868888"},"Next.js + MongoDB App"),v("meta",{key:"viewport",name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no",className:"jsx-984868888"}),v("meta",{name:"description",content:"nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps.",className:"jsx-984868888"}),v("meta",{property:"og:title",content:"Next.js + MongoDB App",className:"jsx-984868888"}),v("meta",{property:"og:description",content:"nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps.",className:"jsx-984868888"}),v("meta",{property:"og:image",content:"https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd",className:"jsx-984868888"})),v("header",{className:"jsx-984868888"},v("nav",{className:"jsx-984868888"},v(m.a,{href:"/"},v("a",{className:"jsx-984868888"},v("h1",{className:"jsx-984868888"},"Next.js + MongoDB App"))),v("div",{className:"jsx-984868888"},a?v(o.a.Fragment,null,v(m.a,{href:"/user/[userId]",as:"/user/".concat(a._id)},v("a",{className:"jsx-984868888"},"Profile")),v("a",{tabIndex:0,role:"button",onClick:f,className:"jsx-984868888"},"Logout")):v(o.a.Fragment,null,v(m.a,{href:"/login"},v("a",{className:"jsx-984868888"},"Sign in")),v(m.a,{href:"/signup"},v("a",{className:"jsx-984868888"},"Sign up")))))),v("main",{className:"jsx-984868888"},t),v("footer",{className:"jsx-984868888"},v("p",{className:"jsx-984868888"},"Made with"," ",v("span",{role:"img","aria-label":"Love",className:"jsx-984868888"},"\u2764\ufe0f"),","," ",v("span",{role:"img","aria-label":"Fire",className:"jsx-984868888"},"\ud83d\udd25"),", and a keyboard by"," ",v("a",{href:"https://hoangvvo.com/",className:"jsx-984868888"},"Hoang Vo"),"."),v("p",{className:"jsx-984868888"},"Source code is on"," ",v("a",{href:"https://github.com/hoangvvo/nextjs-mongodb-app",className:"jsx-984868888"},"Github"),".")))},g=o.a.createElement;function y(e){var t=e.Component,n=e.pageProps;return g(x,null,g(i.a,null,g("title",null,"Next.js + MongoDB App")),g(t,n))}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),m=n("g/15"),h=u(n("nOHt")),v=n("elyg");function x(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,b={};function w(){return f||(y?f=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){a(n,e);var t=c(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:(0,v.addBasePath)(x(e)),as:t?(0,v.addBasePath)(x(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,s=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),s=s?(0,d.resolve)(c,s):i,e.preventDefault();var u=o.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](i,s,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),n}(p.Component);t.default=k},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}},[[0,0,1,2,3,4,5]]]);
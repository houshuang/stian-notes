(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"2W6z":function(e,t,n){"use strict";n("pIFo");var r=function(){};e.exports=r},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},I5cv:function(e,t,n){var r=n("XKFU"),o=n("Kuth"),a=n("2OiF"),i=n("y3w9"),c=n("0/R4"),u=n("eeVq"),l=n("8MEG"),s=(n("dyZX").Reflect||{}).construct,f=u((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),p=!u((function(){s((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){a(e),i(t);var n=arguments.length<3?e:a(arguments[2]);if(p&&!f)return s(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var u=n.prototype,d=o(c(u)?u:Object.prototype),m=Function.apply.call(e,d,t);return c(m)?m:d}})},OMi8:function(e,t,n){},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),l=r.RegExp,s=l,f=l.prototype,p=/a/g,d=/a/g,m=new l(p)!==p;if(n("nh4g")&&(!m||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),a=void 0===t;return!n&&r&&e.constructor===l&&a?e:o(m?new s(r&&!a?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&a?u.call(e):t),n?this:f,l)};for(var y=function(e){e in l||a(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},h=i(s),b=0;h.length>b;)y(h[b++]);f.constructor=l,l.prototype=f,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),p=n("7ljp"),d=p.useMDXComponents,m=p.mdx,y=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),c=d(n),u=y(t),s=f.useMemo((function(){if(!o)return null;var e=l({React:f,mdx:m},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(i(t),[""+o])).apply(void 0,[{}].concat(i(n)))}),[o,t]);return f.createElement(s,l({components:c},a))}},XXzX:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return b}));var r=n("q1tI"),o=n.n(r),a=n("X8hv"),i=n.n(a),c=n("qhky"),u=(n("8+KV"),n("LK8F"),n("pIFo"),n("0l/t"),n("a1Th"),n("h7Nl"),n("Btvt"),n("2W6z"),l()?o.a.useLayoutEffect:o.a.useEffect);"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function l(){return"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement}var s=n("i8i4");var f=function(e){var t=e.children,n=e.type,a=void 0===n?"reach-portal":n,i=Object(r.useRef)(null),c=Object(r.useRef)(null),l=Object(r.useState)()[1];return u((function(){var e=i.current.ownerDocument;return c.current=null==e?void 0:e.createElement(a),e.body.appendChild(c.current),l({}),function(){c.current&&c.current.ownerDocument&&c.current.ownerDocument.body.removeChild(c.current)}}),[a]),c.current?Object(s.createPortal)(t,c.current):o.a.createElement("span",{ref:i})},p=n("7ljp"),d=(n("OMi8"),n("rGqo"),n("yt8O"),n("RW0V"),n("91GP"),n("SRfc"),n("xfY5"),n("+ZDr")),m=n.n(d);n("lw3w"),n("emEt").default.enqueue,o.a.createContext({});var y={a:function(e){var t=e.href,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href"]),r=o.a.useRef(null),a=function(e){if(r.current=document.getElementById(t.replace(/^\//,"")),r.current){var n=e.target.getBoundingClientRect(),o=n.right,a=n.top,i=n.height;r.current.style.top=a+i/2-75+"px",r.current.style.left=o+8+"px",r.current.style.display="block"}},i=function(e){r.current&&(r.current.style.display="none")};return t.match(/^http/)?o.a.createElement("a",Object.assign({},n,{href:t})):o.a.createElement(m.a,Object.assign({},n,{to:t,onMouseEnter:a,onMouseLeave:i,onFocus:a,onBlur:i}))}},h=function(e){var t=e.note;console.log(t);var n,r=[];return null!=t.inboundReferenceNotes&&(r=t.inboundReferenceNotes.map((function(e){return o.a.createElement("a",{className:"no-underline hover:text-gray-700",href:"/"+e.slug,key:e.slug},o.a.createElement("div",{className:"py-2"},o.a.createElement("h5",{className:""},e.title),o.a.createElement("p",{className:"text-sm m-0"},e.childMdx.excerpt)))}))).length>0&&(n=o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Referred in"),o.a.createElement("div",{className:"mb-4"},r),o.a.createElement("hr",{className:"mx-auto w-32"}))),o.a.createElement(p.MDXProvider,{components:y},o.a.createElement(c.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,t.title," - aravindballa's notes")),o.a.createElement("div",{id:"brainNote",className:"container max-w-2xl px-4 mx-auto text-gray-900 flex flex-col min-h-screen"},o.a.createElement("div",{className:"font-bold py-2 border-b -mx-4 px-4"},"@aravindballa's notes"),o.a.createElement("div",{className:"flex-1"},o.a.createElement("h1",{className:"my-4"},t.title),o.a.createElement(i.a,null,t.childMdx.body)),o.a.createElement("div",{className:"refs-box bg-indigo-100 text-gray-600 rounded-lg mb-4 p-4"},n,o.a.createElement("p",{className:"text-sm m-0"},"If you think this note resonated, be it positive or negative, send me a"," ",o.a.createElement("a",{href:"https://twitter.com/messages/compose?recipient_id=532906019"},"direct message")," ","on Twitter or an ",o.a.createElement("a",{href:"mailto:bsaaravind+notes@gmail.com"},"email")," and we can talk."))),t.outboundReferenceNotes&&t.outboundReferenceNotes.filter((function(e){return!!e.childMdx.excerpt})).map((function(e,t){return o.a.createElement(f,{key:t},o.a.createElement("div",{id:e.slug,className:"fixed w-64 p-4 bg-gray-100 rounded-lg shadow-lg border border-blue-200"},o.a.createElement("h5",{className:"mb-2"},e.title),o.a.createElement("p",{className:"text-sm m-0"},e.childMdx.excerpt)))})))},b=(t.default=function(e){return o.a.createElement(h,{note:e.data.brainNote})},"3935135521")},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),f=r(n);if(s&&f){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,y=n instanceof RegExp;if(m!=y)return!1;if(m&&y)return t.toString()==n.toString();var h=o(t);if((u=h.length)!==o(n).length)return!1;for(c=u;0!=c--;)if(!a.call(n,h[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=h[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},h7Nl:function(e,t,n){var r=Date.prototype,o=r.toString,a=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("KroJ")(r,"toString",(function(){var e=a.call(this);return e==e?o.call(this):"Invalid Date"}))},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ye}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,o,a,i,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),y=n("MgzW"),h=n.n(y),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",T="href",j="http-equiv",A="innerHTML",S="itemprop",x="name",C="property",N="rel",I="src",P="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",M="defer",L="encodeSpecialCharacters",D="onChangeClientState",F="titleTemplate",q=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),_=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=$(e,w.TITLE),n=$(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,k);return t||r||void 0},G=function(e){return $(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||n===N&&"canonical"===e[n].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=h()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,p);var d={baseTag:le(w.BASE,n),linkTags:le(w.LINK,a),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=R[e]||e;if(n===A||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,o,r),link:pe(w.LINK,a,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,u,r),style:pe(w.STYLE,l,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=s()((function(e){return{baseTag:z([T,P],e),bodyAttributes:J(b,e),defer:$(e,M),encode:$(e,L),htmlAttributes:J(v,e),linkTags:Z(w.LINK,[N,T],e),metaTags:Z(w.META,[x,O,j,C,S],e),noscriptTags:Z(w.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:Z(w.SCRIPT,[I,A],e),styleTags:Z(w.STYLE,[E],e),title:Y(e),titleAttributes:J(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),ye=(o=me,i=a=function(e){function t(){return K(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return X({},r,((t={})[n.type]=[].concat(r[n.type]||[],[X({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return X({},o,((t={})[r.type]=i,t.titleAttributes=X({},a),t));case w.BODY:return X({},o,{bodyAttributes:X({},a)});case w.HTML:return X({},o,{htmlAttributes:X({},a)})}return X({},o,((n={})[r.type]=X({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=X({},t);return Object.keys(e).forEach((function(t){var r;n=X({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(V(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=X({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);ye.renderStatic=ye.rewind}).call(this,n("yLpj"))},qncB:function(e,t,n){var r=n("XKFU"),o=n("vhPU"),a=n("eeVq"),i=n("/e88"),c="["+i+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),s=function(e,t,n){var o={},c=a((function(){return!!i[e]()||"​"!="​"[e]()})),u=o[e]=c?t(f):i[e];n&&(o[n]=u),r(r.P+r.F*c,"String",o)},f=s.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=s},rzlk:function(e,t,n){"use strict";n.r(t);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),o=n.n(r),a=n("IOVJ");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({location:t,pageResources:n},n.json)):null}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),o=n("aagx"),a=n("LZWt"),i=n("Xbzi"),c=n("apmT"),u=n("eeVq"),l=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,p=n("qncB").trim,d=r.Number,m=d,y=d.prototype,h="Number"==a(n("Kuth")(y)),b="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,a=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var i,u=t.slice(2),l=0,s=u.length;l<s;l++)if((i=u.charCodeAt(l))<48||i>o)return NaN;return parseInt(u,r)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(h?u((function(){y.valueOf.call(n)})):"Number"!=a(n))?i(new m(v(t)),n,d):v(t)};for(var g,w=n("nh4g")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;w.length>O;O++)o(m,g=w[O])&&!o(d,g)&&f(d,g,s(m,g));d.prototype=y,y.constructor=d,n("KroJ")(r,"Number",d)}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-andy-src-templates-note-js-e8d7ffed640f47af2e67.js.map
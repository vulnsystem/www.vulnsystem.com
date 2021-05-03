(window.webpackJsonp=window.webpackJsonp||[]).push([[885],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||c;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},977:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(4),a=n(10),c=(n(0),n(1181)),o={id:"systrace",title:"Systrace"},i={unversionedId:"systrace",id:"version-0.60/systrace",isDocsHomePage:!1,title:"Systrace",description:"Reference",source:"@site/versioned_docs/version-0.60/systrace.md",slug:"/systrace",permalink:"/docs/0.60/systrace",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/systrace.md",version:"0.60",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.60/api",previous:{title:"StyleSheet",permalink:"/docs/0.60/stylesheet"},next:{title:"Text Style Props",permalink:"/docs/0.60/text-style-props"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>installReactHook()</code>",id:"installreacthook",children:[]},{value:"<code>setEnabled()</code>",id:"setenabled",children:[]},{value:"<code>isEnabled()</code>",id:"isenabled",children:[]},{value:"<code>beginEvent()</code>",id:"beginevent",children:[]},{value:"<code>endEvent()</code>",id:"endevent",children:[]},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",children:[]},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",children:[]},{value:"<code>counterEvent()</code>",id:"counterevent",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"installreacthook"},Object(c.b)("inlineCode",{parentName:"h3"},"installReactHook()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static installReactHook(useFiber)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"setenabled"},Object(c.b)("inlineCode",{parentName:"h3"},"setEnabled()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static setEnabled(enabled)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"isenabled"},Object(c.b)("inlineCode",{parentName:"h3"},"isEnabled()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static isEnabled()\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beginevent"},Object(c.b)("inlineCode",{parentName:"h3"},"beginEvent()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static beginEvent(profileName?, args?)\n")),Object(c.b)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"endevent"},Object(c.b)("inlineCode",{parentName:"h3"},"endEvent()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static endEvent()\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"beginasyncevent"},Object(c.b)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static beginAsyncEvent(profileName?)\n")),Object(c.b)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"endasyncevent"},Object(c.b)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static endAsyncEvent(profileName?, cookie?)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"counterevent"},Object(c.b)("inlineCode",{parentName:"h3"},"counterEvent()")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"static counterEvent(profileName?, value?)\n")),Object(c.b)("p",null,"Register the value to the profileName on the systrace timeline."))}b.isMDXComponent=!0}}]);
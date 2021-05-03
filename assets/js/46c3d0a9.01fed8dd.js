(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1256:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/2019_hermes-launch-illo-rachel-nabors-05aac3b583be3cc5b84b78b88d60fa09.jpg"},436:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(4),a=n(10),o=(n(0),n(1181)),i={title:"Meet Hermes, a new JavaScript Engine optimized for React Native",author:"Rachel Nabors",authorTitle:"Documentation Engineer at Facebook",authorURL:"https://twitter.com/rachelnabors",authorImageURL:"https://avatars0.githubusercontent.com/u/236306?s=460&v=4",authorTwitter:"rachelnabors",tags:["announcement"]},c={permalink:"/blog/2019/07/17/hermes",source:"@site/blog/2019-07-17-hermes.md",description:"Last week at Chain React we announced Hermes, an open source JavaScript engine we\u2019ve been working on at Facebook. It\u2019s a small and lightweight JavaScript engine optimized for running React Native on Android. Check it out!",date:"2019-07-17T00:00:00.000Z",formattedDate:"July 17, 2019",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"Meet Hermes, a new JavaScript Engine optimized for React Native",readingTime:1.125,truncated:!1,prevItem:{title:"Announcing React Native 0.61 with Fast Refresh",permalink:"/blog/2019/09/18/version-0.61"},nextItem:{title:"Announcing React Native 0.60",permalink:"/blog/2019/07/03/version-60"}},p=[],s={toc:p};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Last week at Chain React we announced Hermes, an open source JavaScript engine we\u2019ve been working on at Facebook. It\u2019s a small and lightweight JavaScript engine optimized for running React Native on Android. ",Object(o.b)("a",{parentName:"p",href:"https://code.fb.com/android/hermes/"},"Check it out!")),Object(o.b)("p",null,"Hermes improves React Native performance by decreasing memory utilization, reducing download size, and decreasing the time it takes for the app to become usable or \u201ctime to interactive\u201d (TTI)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u201cAs we analyzed performance data, we noticed that the JavaScript engine itself was a significant factor in startup performance and download size. With this data in hand, we knew we had to optimize JavaScript performance in the more constrained environments of a mobile phone compared with a desktop or laptop. After exploring other options, we built a new JavaScript engine we call Hermes. It is designed to improve app performance, focusing on our React Native apps, even on mass-market devices with limited memory, slow storage, and reduced computing power.\u201d \u2014",Object(o.b)("a",{parentName:"p",href:"https://code.fb.com/android/hermes/"},"Hermes: An open source JavaScript engine optimized for mobile apps, starting with React Native"))),Object(o.b)("p",null,"Want to get started right away? Be sure to ",Object(o.b)("a",{parentName:"p",href:"/docs/hermes/"},"check out our new guide to enabling Hermes in your existing React Native app")," in the docs!"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://code.fb.com/android/hermes/"},Object(o.b)("img",{alt:"Illustration of the Hermes and React Native logos joined into a winged fury, rising in a crashing electrical storm from a lone, glowing, presumably Android phone.",src:n(1256).default}))," ",Object(o.b)("em",{parentName:"p"},"Illustration by Rachel Nabors")))}l.isMDXComponent=!0}}]);
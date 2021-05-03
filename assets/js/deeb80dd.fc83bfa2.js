(window.webpackJsonp=window.webpackJsonp||[]).push([[938],{1025:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return u}));var n=o(4),r=o(10),a=(o(0),o(1181)),i={title:"React Native: Bringing modern web techniques to mobile",author:"Tom Occhino",authorTitle:"Engineering Manager at Facebook",authorURL:"https://github.com/tomocchino",authorImageURL:"https://avatars0.githubusercontent.com/u/13947?v=3&s=460",authorTwitter:"tomocchino",hero:"/blog/assets/dark-hero.png",tags:["announcement"]},c={permalink:"/blog/2015/03/26/react-native-bringing-modern-web-techniques-to-mobile",source:"@site/blog/2015-03-26-react-native-bringing-modern-web-techniques-to-mobile.md",description:"We introduced React to the world two years ago, and since then it's seen impressive growth, both inside and outside of Facebook. Today, even though no one is forced to use it, new web projects at Facebook are commonly built using React in one form or another, and it's being broadly adopted across the industry. Engineers are choosing to use React every day because it enables them to spend more time focusing on their products and less time fighting with their framework. It wasn't until we'd been building with React for a while, though, that we started to understand what makes it so powerful.",date:"2015-03-26T00:00:00.000Z",formattedDate:"March 26, 2015",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native: Bringing modern web techniques to mobile",readingTime:1.86,truncated:!1,prevItem:{title:"React Native for Android: How we built the first cross-platform React Native app",permalink:"/blog/2015/09/14/react-native-for-android"}},s=[],l={toc:s};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We introduced ",Object(a.b)("a",{parentName:"p",href:"https://code.facebook.com/projects/176988925806765/react/"},"React")," to the world two years ago, and since then it's seen impressive growth, both inside and outside of Facebook. Today, even though no one is forced to use it, new web projects at Facebook are commonly built using React in one form or another, and it's being broadly adopted across the industry. Engineers are choosing to use React every day because it enables them to spend more time focusing on their products and less time fighting with their framework. It wasn't until we'd been building with React for a while, though, that we started to understand what makes it so powerful."),Object(a.b)("p",null,"React forces us to break our applications down into discrete components, each representing a single view. These components make it easier to iterate on our products, since we don't need to keep the entire system in our head in order to make changes to one part of it. More important, though, React wraps the DOM's mutative, imperative API with a declarative one, which raises the level of abstraction and simplifies the programming model. What we've found is that when we build with React, our code is a lot more predictable. This predictability makes it so we can iterate more quickly with confidence, and our applications are a lot more reliable as a result. Additionally, it's not only easier to scale our applications when they're built with React, but we've found it's also easier to scale the size of our teams themselves."),Object(a.b)("p",null,"Together with the rapid iteration cycle of the web, we've been able to build some awesome products with React, including many components of Facebook.com. Additionally, we've built amazing frameworks in JavaScript on top of React, like ",Object(a.b)("a",{parentName:"p",href:"https://reactjs.org/blog/2015/02/20/introducing-relay-and-graphql.html"},"Relay"),", which allows us to greatly simplify our data fetching at scale. Of course, web is only part of the story. Facebook also has widely used Android and iOS apps, which are built on top of disjointed, proprietary technology stacks. Having to build our apps on top of multiple platforms has bifurcated our engineering organization, but that's only one of the things that makes native mobile application development hard."),Object(a.b)("footer",null,Object(a.b)("a",{href:"https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/",className:"btn"},"Read more")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This is an excerpt. Read the rest of the post on ",Object(a.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/"},"Facebook Code"),".")))}u.isMDXComponent=!0},1181:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(o),b=n,h=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return o?r.a.createElement(h,c(c({ref:t},l),{},{components:o})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);
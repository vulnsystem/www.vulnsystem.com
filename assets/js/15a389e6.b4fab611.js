(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(4),a=n(10),o=(n(0),n(1181)),i={title:"Announcing React Native 0.64 with Hermes on iOS",author:"Mike Grabowski",authorTitle:"CTO and Co-Founder at Callstack",authorURL:"https://twitter.com/grabbou",authorImageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4",authorTwitter:"grabbou",tags:["announcement","release"]},s={permalink:"/blog/2021/03/12/version-0.64",source:"@site/blog/2021-03-12-version-0.64.md",description:"Today we\u2019re releasing React Native 0.64 that ships with support for Hermes on iOS.",date:"2021-03-12T00:00:00.000Z",formattedDate:"March 12, 2021",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],title:"Announcing React Native 0.64 with Hermes on iOS",readingTime:3.15,truncated:!1,prevItem:{title:"The GAAD Pledge - March Accessibility Issues Update",permalink:"/blog/2021/04/08/GAAD-March-Accessibility-Issue-Update"},nextItem:{title:"The GAAD Pledge - Improving React Native Accessibility",permalink:"/blog/2021/03/08/GAAD-React-Native-Accessibility"}},c=[{value:"Hermes opt-in on iOS",id:"hermes-opt-in-on-ios",children:[]},{value:"Inline Requires enabled by default",id:"inline-requires-enabled-by-default",children:[]},{value:"View Hermes traces with Chrome",id:"view-hermes-traces-with-chrome",children:[]},{value:"Hermes with Proxy Support",id:"hermes-with-proxy-support",children:[]},{value:"React 17",id:"react-17",children:[]},{value:"Major Dependency Version Changes",id:"major-dependency-version-changes",children:[]},{value:"Thanks",id:"thanks",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today we\u2019re releasing React Native 0.64 that ships with support for Hermes on iOS."),Object(o.b)("h2",{id:"hermes-opt-in-on-ios"},"Hermes opt-in on iOS"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://hermesengine.dev"},"Hermes")," is an open source JavaScript engine optimized for running React Native. It improves performance by decreasing memory utilization, reducing download size and decreasing the time it takes for the app to become usable or \u201ctime to interactive\u201d (TTI)."),Object(o.b)("p",null,"With this release, we are happy to announce that you can now use Hermes to build on iOS as well. To enable Hermes on iOS, set ",Object(o.b)("inlineCode",{parentName:"p"},"hermes_enabled")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"Podfile")," and run ",Object(o.b)("inlineCode",{parentName:"p"},"pod install"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},"use_react_native!(\n   :path => config[:reactNativePath],\n   # to enable hermes on iOS, change `false` to `true` and then install pods\n   :hermes_enabled => true\n)\n")),Object(o.b)("p",null,"Please keep in mind that Hermes support on iOS is still early stage. We are keeping it as an opt-in as we are running further benchmarking. We encourage you to try it on your own applications and let us know how it is working out for you!"),Object(o.b)("h2",{id:"inline-requires-enabled-by-default"},"Inline Requires enabled by default"),Object(o.b)("p",null,"Inline Requires is a Metro configuration option that improves startup time by delaying execution of JavaScript modules until they are used, instead of at startup."),Object(o.b)("p",null,"This feature has existed and been recommended for a few years as an opt-in configuration option, listed in the ",Object(o.b)("a",{parentName:"p",href:"/docs/performance"},"Performance section of our documentation"),". We are now enabling this option by default for new applications to help people have fast React Native applications without extra configuration."),Object(o.b)("p",null,"Inline Requires is a Babel transform that takes module imports and converts them to be inline. As an example, Inline Requires transforms this module import call from being at the top of the file to where it is used."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { MyFunction } from 'my-module';\n\nconst MyComponent = (props) => {\n  const result = MyFunction();\n\n  return <Text>{result}</Text>;\n};\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"After:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const MyComponent = (props) => {\n  const result = require('my-module').MyFunction();\n\n  return <Text>{result}</Text>;\n};\n")),Object(o.b)("p",null,"More information about Inline Requires is available in the ",Object(o.b)("a",{parentName:"p",href:"/docs/ram-bundles-inline-requires#inline-requires"},"Performance documentation"),"."),Object(o.b)("h2",{id:"view-hermes-traces-with-chrome"},"View Hermes traces with Chrome"),Object(o.b)("p",null,"Over the last year Facebook has sponsored the ",Object(o.b)("a",{parentName:"p",href:"https://fellowship.mlh.io/"},"Major League Hacking fellowship"),", supporting contributions to React Native. ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/jessie_anh_ng"},"Jessie Nguyen")," and ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/saphalinsaan"},"Saphal Patro")," added the ability to use the Performance tab on Chrome DevTools to visualize the execution of your application when it is using Hermes."),Object(o.b)("p",null,"For more information, check out the ",Object(o.b)("a",{parentName:"p",href:"/docs/profile-hermes#record-a-hermes-sampling-profile"},"new documentation page"),"."),Object(o.b)("h2",{id:"hermes-with-proxy-support"},"Hermes with Proxy Support"),Object(o.b)("p",null,"We have added Proxy support to Hermes, enabling compatibility with popular community projects like react-native-firebase and mobx. If you have been using these packages you can now migrate to Hermes for your project."),Object(o.b)("p",null,"We plan to make Hermes the default JavaScript engine for Android in a coming release so we are working to resolve the remaining issues people have when using Hermes. Please open an issue on the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/hermes"},"Hermes GitHub repo")," if there are remaining issues holding back your app from adopting Hermes."),Object(o.b)("h2",{id:"react-17"},"React 17"),Object(o.b)("p",null,"React 17 does not include new developer-facing features or major breaking changes. For React Native applications, the main change is a ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"new JSX transform")," enabling files to no longer need to import React to be able to use JSX."),Object(o.b)("p",null,"More information about React 17 is available ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/blog/2020/10/20/react-v17.html"},"on the React blog"),"."),Object(o.b)("h2",{id:"major-dependency-version-changes"},"Major Dependency Version Changes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Dropped Android API levels 16-20. The Facebook app consistently drops support for Android versions with sufficiently low usage. As the Facebook app no longer supports these versions and is React Native\u2019s main testing surface, React Native is dropping support as well."),Object(o.b)("li",{parentName:"ul"},"Xcode 12 and CocoaPods 1.10 are required"),Object(o.b)("li",{parentName:"ul"},"Minimum Node support bumped from 10 to Node 12"),Object(o.b)("li",{parentName:"ul"},"Flipper bumped to 0.75.1")),Object(o.b)("h2",{id:"thanks"},"Thanks"),Object(o.b)("p",null,"Thank you to the hundreds of contributors that helped make 0.64 possible! The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#v0640"},"0.64 changelog")," includes all of the changes included in this release."))}p.isMDXComponent=!0}}]);
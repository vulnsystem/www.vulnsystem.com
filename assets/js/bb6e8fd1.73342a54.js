(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.a.createElement(h,s(s({ref:t},l),{},{components:a})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},885:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(4),n=a(10),o=(a(0),a(1181)),i={title:"React Native Team Principles",author:"Eli White",authorTitle:"Engineering Manager on React Native",authorURL:"https://twitter.com/Eli_White",authorImageURL:"https://avatars2.githubusercontent.com/u/249164?s=460&v=4",authorTwitter:"Eli_White",tags:["announcement"]},s={permalink:"/blog/2020/07/17/react-native-principles",source:"@site/blog/2020-07-17-react-native-principles.md",description:"The React Native team at Facebook is guided by principles that help determine how we prioritize our work on React Native. These principles represent our team specifically and do not necessarily represent every stakeholder in the React Native community. We are sharing these principles here to be more transparent about what drives us, how we make decisions, and how we focus our efforts.",date:"2020-07-17T00:00:00.000Z",formattedDate:"July 17, 2020",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native Team Principles",readingTime:4.535,truncated:!1,prevItem:{title:"React Native Documentation Update",permalink:"/blog/2020/07/23/docs-update"},nextItem:{title:"Announcing React Native 0.63 with LogBox",permalink:"/blog/2020/07/06/version-0.63"}},c=[{value:"<strong>Native Experience</strong>",id:"native-experience",children:[]},{value:"Massive Scale",id:"massive-scale",children:[]},{value:"Developer Velocity",id:"developer-velocity",children:[]},{value:"Every Platform",id:"every-platform",children:[]},{value:"Declarative UI",id:"declarative-ui",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The React Native team at Facebook is guided by principles that help determine how we prioritize our work on React Native. These principles represent our team specifically and do not necessarily represent every stakeholder in the React Native community. We are sharing these principles here to be more transparent about what drives us, how we make decisions, and how we focus our efforts."),Object(o.b)("h2",{id:"native-experience"},Object(o.b)("strong",{parentName:"h2"},"Native Experience")),Object(o.b)("p",null,"Our top priority for React Native is to ",Object(o.b)("strong",{parentName:"p"},"match the expectations people have for each platform"),". This is why React Native renders to platform primitives. We value native look-and-feel over cross-platform consistency."),Object(o.b)("p",null,"For example, the TextInput in React Native renders to a UITextField on iOS. This ensures that integration with password managers and keyboard controls work out of the box. By using platform primitives, React Native apps are also able to stay up-to-date with design and behavior changes from new releases of Android and iOS."),Object(o.b)("p",null,"In order to match the look-and-feel of native apps, we must also match their performance. This is where we focus our most ambitious efforts. For example, Facebook created Hermes, ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/react-native/blog/2019/07/17/hermes"},"a new JavaScript Engine built from scratch for React Native on Android"),". Hermes significantly improves the start time of React Native apps. We are also working on major architectural changes that optimize the threading model and make React Native easier to interoperate with native code."),Object(o.b)("h2",{id:"massive-scale"},"Massive Scale"),Object(o.b)("p",null,"Hundreds of screens in the Facebook app are implemented with React Native. The Facebook app is used by billions of people on a huge range of devices. ",Object(o.b)("strong",{parentName:"p"},"This is why")," ",Object(o.b)("strong",{parentName:"p"},"we invest in the most challenging problems at scale.")),Object(o.b)("p",null,"Deploying React Native in our apps lets us identify problems that we wouldn\u2019t see at a smaller scale. For example, Facebook focuses on improving performance across a broad spectrum of devices from the newest iPhone to many older generations of Android devices. This focus informs our architecture projects such as Hermes, Fabric, and TurboModules."),Object(o.b)("p",null,"We have proven that React Native can scale to massive organizations too. When hundreds of developers are working on the same app, gradual adoption is a must. This is why we made sure that React Native can be adopted one screen at a time. Soon, we will be taking this one step further and enable migrating individual native views of an existing native screen to React Native."),Object(o.b)("p",null,"A focus on massive scale means there are many things our team isn\u2019t currently working on. For example, our team doesn\u2019t drive the adoption of React Native in the industry. We also do not actively build solutions for problems that we don\u2019t see at scale. We are proud that we have ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/ECOSYSTEM.md"},"many partners and core contributors")," that are able to focus on those important areas for the community."),Object(o.b)("h2",{id:"developer-velocity"},"Developer Velocity"),Object(o.b)("p",null,"Great user experiences are created iteratively. ",Object(o.b)("strong",{parentName:"p"},"It should only take a few seconds to seeing the result of code changes")," in a running app. React Native's architecture enables it to provide near-instant feedback during development."),Object(o.b)("p",null,"We often hear from teams that adopting React Native significantly improved their development velocity. These teams find that the instant feedback during development makes it much easier to try different ideas and add extra polish when they don\u2019t have to interrupt their coding session for every little change. When we make changes to React Native, we make sure to preserve this quality of the developer experience."),Object(o.b)("p",null,"Instant feedback is not the only way that React Native improves developer velocity. Teams can leverage the fast-growing ecosystem of high quality open source packages. Teams can also share business logic between Android, iOS, and the web. This helps them ship updates faster and reduce organizational silos between platform teams."),Object(o.b)("h2",{id:"every-platform"},"Every Platform"),Object(o.b)("p",null,"When we introduced React Native in 2014, we presented it with our motto \u201cLearn once, write anywhere\u201d \u2014 and we mean ",Object(o.b)("em",{parentName:"p"},"anywhere"),". ",Object(o.b)("strong",{parentName:"p"},"Developers should be able to reach as many people as possible without being limited by device model or operating system.")),Object(o.b)("p",null,"React Native targets very different platforms including mobile, desktop, web, TV, VR, game consoles, and more. We want to enable rich experiences on each platform instead of requiring developers to build for the lowest common denominator. To accomplish this, we focus on supporting the unique features of each platform. This ranges from varying input mechanisms (e.g. touch, pen, mouse) to fundamentally different consumption experiences like 3D environments in VR."),Object(o.b)("p",null,"This principle informed our decision to implement React Native\u2019s new core architecture in cross-platform C++ to promote parity across platforms. We are also refining the public interface targeted at other platform maintainers like Microsoft with Windows and macOS. We strive to enable any platforms to support React Native."),Object(o.b)("h2",{id:"declarative-ui"},"Declarative UI"),Object(o.b)("p",null,"We don\u2019t believe in deploying the exact same user interface on every platform, we believe in ",Object(o.b)("strong",{parentName:"p"},"exposing each platform\u2019s unique capabilities with the same declarative programming model"),". Our declarative programming model is React."),Object(o.b)("p",null,"In our experience, the unidirectional data flow popularized by React makes applications easier to understand. We prefer to express a screen as a composition of declarative components rather than imperatively managed views. React\u2019s success on the web and the direction of the new native Android and iOS frameworks show that the industry has also embraced declarative UI."),Object(o.b)("p",null,"React popularized declarative user interfaces. However, there remain many unsolved problems that React is uniquely positioned to solve. React Native will continue to build on top of the innovations of React and remain at the forefront of the declarative user interface movement."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return a?r.a.createElement(h,s(s({ref:t},p),{},{components:a})):r.a.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1257:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/inline-requires-3cb1be96938288642a666bdf3dca62b5.png"},1258:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/0.58-cli-speed-99311dbeb7f554d4beadd5960d82be74.png"},1259:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/0.59-cli-speed-792273d28963a86e24e22ccfb69f1a99.png"},169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(4),r=a(10),o=(a(0),a(1181)),i={title:"Releasing React Native 0.59",author:"Ryan Turner",authorTitle:"Core Maintainer & React Native Developer",authorURL:"https://twitter.com/turnrye",authorImageURL:"https://avatars0.githubusercontent.com/u/701035?s=460&v=4",authorTwitter:"turnrye",tags:["announcement","release"]},s={permalink:"/blog/2019/03/12/releasing-react-native-059",source:"@site/blog/2019-03-12-releasing-react-native-059.md",description:"Welcome to the 0.59 release of React Native! This is another big release with 644 commits by 88 contributors. Contributions also come in other forms, so thank you for maintaining issues, fostering communities, and teaching people about React Native. This month brings a number of highly anticipated changes, and we hope you enjoy them.",date:"2019-03-12T00:00:00.000Z",formattedDate:"March 12, 2019",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"release",permalink:"/blog/tags/release"}],title:"Releasing React Native 0.59",readingTime:5.115,truncated:!1,prevItem:{title:"React Native at F8 and Open Source Podcast",permalink:"/blog/2019/05/01/react-native-at-f8-and-podcast"},nextItem:{title:"React Native Open Source Update March 2019",permalink:"/blog/2019/03/01/react-native-open-source-update"}},c=[{value:"\ud83c\udfa3 Hooks are here",id:"-hooks-are-here",children:[]},{value:"\ud83d\udcf1 Updated JSC means performance gains and 64-bit support on Android",id:"-updated-jsc-means-performance-gains-and-64-bit-support-on-android",children:[]},{value:"\ud83d\udca8 Faster app launches with inline requires",id:"-faster-app-launches-with-inline-requires",children:[]},{value:"\ud83d\ude85 Lean core is underway",id:"-lean-core-is-underway",children:[]},{value:"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb CLI improvements",id:"-cli-improvements",children:[]},{value:"\ud83d\ude80 Upgrading to 0.59",id:"-upgrading-to-059",children:[]},{value:"\ud83d\udd28 Breaking Changes",id:"-breaking-changes",children:[]},{value:"\ud83e\udd17 Thanks",id:"-thanks",children:[]}],p={toc:c};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Welcome to the 0.59 release of React Native! This is another big release with 644 commits by 88 contributors. Contributions also come in other forms, so ",Object(o.b)("em",{parentName:"p"},"thank you")," for maintaining issues, fostering communities, and teaching people about React Native. This month brings a number of highly anticipated changes, and we hope you enjoy them."),Object(o.b)("h2",{id:"-hooks-are-here"},"\ud83c\udfa3 Hooks are here"),Object(o.b)("p",null,"React Hooks are part of this release, which let you reuse stateful logic across components. There is a lot of buzz about hooks, but if you haven't heard, take a look at some of the wonderful resources below:"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Introducing Hooks")," explains why we\u2019re adding Hooks to React."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-overview.html"},"Hooks at a Glance")," is a fast-paced overview of the built-in Hooks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-custom.html"},"Building Your Own Hooks")," demonstrates code reuse with custom Hooks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889"},"Making Sense of React Hooks")," explores the new possibilities unlocked by Hooks."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://usehooks.com/"},"useHooks.com")," showcases community-maintained Hooks recipes and demos."))),Object(o.b)("p",null,"Be sure to give this a try in your apps. We hope that you find the reuse as exciting as we do."),Object(o.b)("h2",{id:"-updated-jsc-means-performance-gains-and-64-bit-support-on-android"},"\ud83d\udcf1 Updated JSC means performance gains and 64-bit support on Android"),Object(o.b)("p",null,"React Native uses JSC (",Object(o.b)("a",{parentName:"p",href:"https://webkit.org/"},"JavaScriptCore"),") to power your application. JSC on Android was a few years old, which meant that a lot of modern JavaScript features weren't supported. Even worse, it performed poorly compared iOS's modern JSC. With this release, that all changes."),Object(o.b)("p",null,"Thanks to some awesome work by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/danielzlotin"},"@DanielZlotin"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dulmandakh"},"@dulmandakh"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/gengjiawen"},"@gengjiawen"),", ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kmagiera"},"@kmagiera"),", and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kudo"},"@kudo")," JSC has caught up with the past few years. This brings with it 64-bit support, modern JavaScript support, and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/jsc-android-buildscripts/tree/master/measure"},"big performance improvements"),". Kudos for also making this a maintainable process now so that we can take advantage of future WebKit improvements without so much legwork, and thank you Software Mansion and Expo for making this work possible."),Object(o.b)("h2",{id:"-faster-app-launches-with-inline-requires"},"\ud83d\udca8 Faster app launches with inline requires"),Object(o.b)("p",null,'We want to help people have performant React Native apps by default and are working to bring Facebook\'s optimizations to the community. Applications load resources as needed rather than slowing down launch. This feature is called "inline requires", as it lets Metro identify components to be lazy loaded. Apps with a deep and varied component architecture will see the most improvement.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"source of the `metro.config.js` file in the 0.59 template, demonstrating where to enable `inlineRequires`",src:a(1257).default})),Object(o.b)("p",null,"We need the community to let us know how it works before we turn it on by default. When you upgrade to 0.59, there will be a new ",Object(o.b)("inlineCode",{parentName:"p"},"metro.config.js")," file; flip the options to true and give us ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/hashtag/inline-requires"},"your feedback"),"! Read more about inline requires ",Object(o.b)("a",{parentName:"p",href:"/docs/performance#inline-requires"},"in the performance docs")," to benchmark your app."),Object(o.b)("h2",{id:"-lean-core-is-underway"},"\ud83d\ude85 Lean core is underway"),Object(o.b)("p",null,"React Native is a large and complex project with a complicated repository. This makes the codebase less approachable to contributors, difficult to test, and bloated as a dev dependency. ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/6"},"Lean Core")," is our effort to address these issues by migrating code to separate libraries for better management. The past few releases have seen the first steps of this, but ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FMLKb4or8yg"},"let's get serious"),"."),Object(o.b)("p",null,"You may notice that additional components are now officially deprecated. This is great news, as there are now owners for these features actively maintaining them. Heed the warning messages and migrate to the new libraries for these features, because they will be removed in a future release. Below is a table indicating the component, its status, and where you may migrate your use to."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Component"),Object(o.b)("th",{parentName:"tr",align:null},"Deprecated?"),Object(o.b)("th",{parentName:"tr",align:null},"New home"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"AsyncStorage")),Object(o.b)("td",{parentName:"tr",align:null},"0.59"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-async-storage"},"@react-native-community/react-native-async-storage"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"ImageStore")),Object(o.b)("td",{parentName:"tr",align:null},"0.59"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/expo/expo/tree/master/packages/expo-file-system"},"expo-file-system")," or ",Object(o.b)("a",{parentName:"td",href:"https://github.com/itinance/react-native-fs"},"react-native-fs"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"MaskedViewIOS")),Object(o.b)("td",{parentName:"tr",align:null},"0.59"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-masked-view"},"@react-native-community/react-native-masked-view"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"NetInfo")),Object(o.b)("td",{parentName:"tr",align:null},"0.59"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-netinfo"},"@react-native-community/react-native-netinfo"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Slider")),Object(o.b)("td",{parentName:"tr",align:null},"0.59"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-slider"},"@react-native-community/react-native-slider"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"ViewPagerAndroid")),Object(o.b)("td",{parentName:"tr",align:null},"0.59"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://github.com/react-native-community/react-native-viewpager"},"@react-native-community/react-native-viewpager"))))),Object(o.b)("p",null,"Over the coming months, there will be many more components following this path to a leaner core. We're looking for help with this ","\u2014"," head over to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/23313"},"lean core umbrella")," to pitch in."),Object(o.b)("h2",{id:"-cli-improvements"},"\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb CLI improvements"),Object(o.b)("p",null,"React Native's command line tools are developer's entry point to the ecosystem, but they had long-standing issues and lacked official support. The CLI tools have been moved to a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-cli"},"new repository"),", and a ",Object(o.b)("a",{parentName:"p",href:"https://blog.callstack.io/the-react-native-cli-has-a-new-home-79b63838f0e6"},"dedicated group of maintainers")," have already made some exciting improvements."),Object(o.b)("p",null,"Logs are formatted much better now. Commands now run nearly instantly ","\u2014"," you'll immediately notice a difference:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"0.58&#39;s CLI is slow to start",src:a(1258).default}),Object(o.b)("img",{alt:"0.58&#39;s CLI is nearly instantaneous",src:a(1259).default})),Object(o.b)("h2",{id:"-upgrading-to-059"},"\ud83d\ude80 Upgrading to 0.59"),Object(o.b)("p",null,"We heard your feedback regarding the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/68"},"React Native upgrade process")," and we are taking steps to improve the experience in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/discussions-and-proposals/issues/64#issuecomment-444775432"},"future releases"),". To upgrade to 0.59, we recommend using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/rn-diff-purge"},Object(o.b)("inlineCode",{parentName:"a"},"rn-diff-purge"))," to determine what has changed between your current React Native version and 0.59, then applying those changes manually. Once you've upgraded your project to 0.59, you will be able to use the newly improved ",Object(o.b)("inlineCode",{parentName:"p"},"react-native upgrade")," command (based on ",Object(o.b)("inlineCode",{parentName:"p"},"rn-diff-purge"),"!) to upgrade to 0.60 and beyond as newer releases become available."),Object(o.b)("h2",{id:"-breaking-changes"},"\ud83d\udd28 Breaking Changes"),Object(o.b)("p",null,"Android support in 0.59 has been cleaned up following Google's latest recommendations, which may result in potential breakage of existing apps. This issue might present as a runtime crash and a message, \"You need to use a Theme.AppCompat theme (or descendant) with this activity\". We recommend updating your project's ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file, making sure that the ",Object(o.b)("inlineCode",{parentName:"p"},"android:theme")," value is an ",Object(o.b)("inlineCode",{parentName:"p"},"AppCompat")," theme (such as ",Object(o.b)("inlineCode",{parentName:"p"},"@style/Theme.AppCompat.Light.NoActionBar"),")."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-git-upgrade")," command has been removed in 0.59, in favor of the newly improved ",Object(o.b)("inlineCode",{parentName:"p"},"react-native upgrade")," command."),Object(o.b)("h2",{id:"-thanks"},"\ud83e\udd17 Thanks"),Object(o.b)("p",null,"Lots of new contributors helped with ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/22990"},"enabling generation of native code from flow types")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/issues/22609"},"resolving Xcode warnings")," - these are a great way to learn how React Native works and contributing to the greater good. Thank you! Look out for similar issues in the future."),Object(o.b)("p",null,"While these are the highlights that we noted, there are many others to be excited about. To see all of the updates, take a look at the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md"},"changelog"),". 0.59 is a huge release \u2013 we can't wait for you to try it out."),Object(o.b)("p",null,"We have even more improvements coming throughout the rest of the year. Stay tuned!"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/turnrye"},"Ryan")," and the whole ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/reactnative"},"React Native core team")))}l.isMDXComponent=!0}}]);
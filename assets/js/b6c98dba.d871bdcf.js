(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return a?r.a.createElement(d,l(l({ref:t},p),{},{components:a})):r.a.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},868:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(4),r=a(10),i=(a(0),a(1181)),o={title:"React Native Monthly #5",author:"Tomislav Tenodi",authorTitle:"Founder at Speck",authorURL:"https://github.com/tenodi",authorImageURL:"https://pbs.twimg.com/profile_images/877237660225609729/bKFDwfAq.jpg",authorTwitter:"TomislavTenodi",tags:["engineering"]},l={permalink:"/blog/2017/11/06/react-native-monthly-5",source:"@site/blog/2017-11-06-react-native-monthly-5.md",description:"The React Native monthly meeting continues! Let's see what our teams are up to.",date:"2017-11-06T00:00:00.000Z",formattedDate:"November 6, 2017",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"React Native Monthly #5",readingTime:3.015,truncated:!1,prevItem:{title:"React Native Monthly #6",permalink:"/blog/2018/01/09/react-native-monthly-6"},nextItem:{title:"React Native Monthly #4",permalink:"/blog/2017/09/21/react-native-monthly-4"}},c=[{value:"Callstack",id:"callstack",children:[]},{value:"Expo",id:"expo",children:[]},{value:"Facebook",id:"facebook",children:[]},{value:"Infinite Red",id:"infinite-red",children:[]},{value:"Shoutem",id:"shoutem",children:[]},{value:"Next session",id:"next-session",children:[]}],p={toc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The React Native monthly meeting continues! Let's see what our teams are up to."),Object(i.b)("h3",{id:"callstack"},"Callstack"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"We\u2019ve been working on React Native CI. Most importantly, we have migrated from Travis to Circle, leaving React Native with a single, unified CI pipeline."),Object(i.b)("li",{parentName:"ul"},"We\u2019ve organised ",Object(i.b)("a",{parentName:"li",href:"https://blog.callstack.io/announcing-hacktoberfest-7313ea5ccf4f"},"Hacktoberfest - React Native edition")," where, together with attendees, we tried to submit many pull requests to open source projects."),Object(i.b)("li",{parentName:"ul"},"We keep working on ",Object(i.b)("a",{parentName:"li",href:"https://github.com/callstack/haul"},"Haul"),". Last month, we have submitted two new releases, including Webpack 3 support. We plan to add ",Object(i.b)("a",{parentName:"li",href:"https://github.com/react-community/create-react-native-app"},"CRNA")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/expo/expo"},"Expo")," support as well as work on better HMR. Our roadmap is public on the issue tracker. If you would like to suggest improvements or give feedback, let us know!")),Object(i.b)("h3",{id:"expo"},"Expo"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Released ",Object(i.b)("a",{parentName:"li",href:"https://blog.expo.io/expo-sdk-v22-0-0-is-now-available-7745bfe97fc6"},"Expo SDK 22")," (using React Native 0.49) and updated ",Object(i.b)("a",{parentName:"li",href:"https://github.com/react-community/create-react-native-app"},"CRNA")," for it.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Includes improved splash screen API, basic ARKit support, \u201cDeviceMotion\u201d API, SFAuthenticationSession support on iOS11, and ",Object(i.b)("a",{parentName:"li",href:"https://blog.expo.io/expo-sdk-v22-0-0-is-now-available-7745bfe97fc6"},"more"),"."))),Object(i.b)("li",{parentName:"ul"},"Your ",Object(i.b)("a",{parentName:"li",href:"https://snack.expo.io"},"snacks")," can now have multiple JavaScript files and you can upload images and other assets by just dragging them into the editor."),Object(i.b)("li",{parentName:"ul"},"Contribute to ",Object(i.b)("a",{parentName:"li",href:"https://github.com/react-community/react-navigation"},"react-navigation")," to add support for iPhone X."),Object(i.b)("li",{parentName:"ul"},"Focus our attention on rough edges when building large applications with Expo. For example:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"First-class support for deploying to multiple environments: staging, production, and arbitrary channels. Channels will support rolling back and setting the active release for a given channel. Let us know if you want to be an early tester, ",Object(i.b)("a",{parentName:"li",href:"https://twitter.com/expo_io"},"@expo_io"),"."),Object(i.b)("li",{parentName:"ul"},"We are also working on improving our standalone app building infrastructure and adding support for bundling images and other non-code assets in standalone app builds while keeping the ability to update assets over the air.")))),Object(i.b)("h3",{id:"facebook"},"Facebook"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Better RTL support:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"We\u2019re introducing a number of direction-aware styles.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Position:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"(left|right) \u2192 (start|end)"))),Object(i.b)("li",{parentName:"ul"},"Margin:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"margin(Left|Right) \u2192 margin(Start|End)"))),Object(i.b)("li",{parentName:"ul"},"Padding:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"padding(Left|Right) \u2192 padding(Start|End)"))),Object(i.b)("li",{parentName:"ul"},"Border:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"borderTop(Left|Right)Radius \u2192 borderTop(Start|End)Radius"),Object(i.b)("li",{parentName:"ul"},"borderBottom(Left|Right)Radius \u2192 borderBottom(Start|End)Radius"),Object(i.b)("li",{parentName:"ul"},"border(Left|Right)Width \u2192 border(Start|End)Width"),Object(i.b)("li",{parentName:"ul"},"border(Left|Right)Color \u2192 border(Start|End)Color"))))),Object(i.b)("li",{parentName:"ul"},"The meaning of \u201cleft\u201d and \u201cright\u201d were swapped in RTL for position, margin, padding, and border styles. Within a few months, we\u2019re going to remove this behaviour and make \u201cleft\u201d always mean \u201cleft,\u201d and \u201cright\u201d always mean \u201cright\u201d. The breaking changes are hidden under a flag. Use ",Object(i.b)("inlineCode",{parentName:"li"},"I18nManager.swapLeftAndRightInRTL(false)")," in your React Native components to opt into them."))),Object(i.b)("li",{parentName:"ul"},"Working on ",Object(i.b)("a",{parentName:"li",href:"https://github.com/facebook/flow"},"Flow")," typing our internal native modules and using those to generate interfaces in Java and protocols in ObjC that the native implementations must implement. We hope this codegen becomes open source next year, at the earliest.")),Object(i.b)("h3",{id:"infinite-red"},"Infinite Red"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"New OSS tool for helping React Native and other projects. More ",Object(i.b)("a",{parentName:"li",href:"https://shift.infinite.red/solidarity-the-cli-for-developer-sanity-672fa81b98e9"},"here"),"."),Object(i.b)("li",{parentName:"ul"},"Revamping ",Object(i.b)("a",{parentName:"li",href:"https://github.com/infinitered/ignite"},"Ignite")," for a new boilerplate release (Code name: Bowser)")),Object(i.b)("h3",{id:"shoutem"},"Shoutem"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Improving the development flow on Shoutem. We want to streamline the process from creating an app to first custom screen and make it really easy, thus lowering the barrier for new React Native developers. Prepared a few workshops to test out new features. We also improved ",Object(i.b)("a",{parentName:"li",href:"https://github.com/shoutem/cli"},"Shoutem CLI")," to support new flows."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/shoutem/ui"},"Shoutem UI")," received a few component improvements and bugfixes. We also checked compatibility with latest React Native versions."),Object(i.b)("li",{parentName:"ul"},"Shoutem platform received a few notable updates, new integrations are available as part of the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/shoutem/extensions"},"open-source extensions project"),". We are really excited to see active development on Shoutem extensions from other developers. We actively contact and offer advice and guidance about their extensions.")),Object(i.b)("h2",{id:"next-session"},"Next session"),Object(i.b)("p",null,"The next session is scheduled for Wednesday 6, December 2017. Feel free to ping me ",Object(i.b)("a",{parentName:"p",href:"https://twitter.com/TomislavTenodi"},"on Twitter")," if you have any suggestion on how we should improve the output of the meeting."))}s.isMDXComponent=!0}}]);
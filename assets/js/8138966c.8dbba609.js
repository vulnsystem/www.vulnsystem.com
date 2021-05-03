(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1234:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesApp-ae778d80caa321ba00b558b025dc9805.jpg"},1235:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeConfig-31cb28d5b642a616aa547edd3095253b.png"},1236:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeMetroAddress-d21dc83b9eee0545a154301e1ce0be8b.png"},1237:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromeInspect-8aa08afba4c7ce76a85d47d31200dd55.png"},1238:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/HermesDebugChromePause-5bac724c8b705ba3e7dc9676dedd6c4f.png"},668:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(4),r=n(10),o=(n(0),n(1181)),i={id:"hermes",title:"Using Hermes"},s={unversionedId:"hermes",id:"hermes",isDocsHomePage:!1,title:"Using Hermes",description:"Hermes is an open-source JavaScript engine optimized for React Native. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an opt-in React Native feature, and this guide explains how to enable it.",source:"@site/../docs/hermes.md",slug:"/hermes",permalink:"/docs/next/hermes",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/hermes.md",version:"current",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"docs",previous:{title:"Timers",permalink:"/docs/next/timers"},next:{title:"Networking",permalink:"/docs/next/network"}},l=[{value:"Enabling Hermes",id:"enabling-hermes",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]},{value:"Confirming Hermes is in use",id:"confirming-hermes-is-in-use",children:[]},{value:"Debugging JS on Hermes using Google Chrome&#39;s DevTools",id:"debugging-js-on-hermes-using-google-chromes-devtools",children:[]}],c={toc:l};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("a",{href:"https://hermesengine.dev"},Object(o.b)("img",{width:300,height:300,style:{float:"right",margin:"-30px 4px 0"},src:"/docs/assets/HermesLogo.svg"})),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://hermesengine.dev"},"Hermes")," is an open-source JavaScript engine optimized for React Native. For many apps, enabling Hermes will result in improved start-up time, decreased memory usage, and smaller app size. At this time Hermes is an ",Object(o.b)("strong",{parentName:"p"},"opt-in")," React Native feature, and this guide explains how to enable it."),Object(o.b)("p",null,"First, ensure you're using at least version 0.60.4 of React Native."),Object(o.b)("p",null,"If you have an existing app based on an earlier version of React Native, you will have to upgrade it first. See ",Object(o.b)("a",{parentName:"p",href:"/docs/upgrading"},"Upgrading to new React Native Versions")," for how to do this. Make especially sure that all changes to ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," have been applied, as detailed by the ",Object(o.b)("a",{parentName:"p",href:"https://react-native-community.github.io/upgrade-helper/?from=0.59.0"},"React Native upgrade helper"),". After upgrading the app, make sure everything works before trying to switch to Hermes."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"note-for-rn-compatibility"},"Note for RN compatibility."),Object(o.b)("p",{parentName:"blockquote"},"Each Hermes release is aimed at a specific RN version. The rule of thumb is to always follow ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/hermes/releases"},"Hermes releases")," strictly. Version mismatch can result in instant crash of your apps in the worst case scenario.")),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"note-for-windows-users"},"Note for Windows users."),Object(o.b)("p",{parentName:"blockquote"},"Hermes requires ",Object(o.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/download/details.aspx?id=48145"},"Microsoft Visual C++ 2015 Redistributable"))),Object(o.b)("h2",{id:"enabling-hermes"},"Enabling Hermes"),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"Edit your ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/build.gradle")," file and make the change illustrated below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},'  project.ext.react = [\n      entryFile: "index.js",\n-     enableHermes: false  // clean and rebuild if changing\n+     enableHermes: true  // clean and rebuild if changing\n  ]\n')),Object(o.b)("p",null,"Also, if you're using ProGuard, you will need to add these rules in ",Object(o.b)("inlineCode",{parentName:"p"},"proguard-rules.pro")," :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"-keep class com.facebook.hermes.unicode.** { *; }\n-keep class com.facebook.jni.** { *; }\n")),Object(o.b)("p",null,"Next, if you've already built your app at least once, clean the build:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cd android && ./gradlew clean\n")),Object(o.b)("p",null,"That's it! You should now be able to develop and deploy your app as usual:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ npx react-native run-android\n")),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"note-about-android-app-bundles"},"Note about Android App Bundles"),Object(o.b)("p",{parentName:"blockquote"},"Android app bundles are supported from react-native 0.62.0 and up.")),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"Since React Native 0.64, Hermes also runs on iOS. To enable Hermes for iOS, edit your ",Object(o.b)("inlineCode",{parentName:"p"},"ios/Podfile")," file and make the change illustrated below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-diff"},"   use_react_native!(\n     :path => config[:reactNativePath],\n     # to enable hermes on iOS, change `false` to `true` and then install pods\n-    :hermes_enabled => false\n+    :hermes_enabled => true\n   )\n")),Object(o.b)("p",null,"Next, install the Hermes pod:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cd ios && pod install\n")),Object(o.b)("p",null,"That's it! You should now be able to develop and deploy your app as usual:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ npx react-native run-ios\n")),Object(o.b)("h2",{id:"confirming-hermes-is-in-use"},"Confirming Hermes is in use"),Object(o.b)("p",null,"If you've recently created a new app from scratch, you should see if Hermes is enabled in the welcome view:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Where to find JS engine status in AwesomeProject",src:n(1234).default})),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"HermesInternal")," global variable will be available in JavaScript that can be used to verify that Hermes is in use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const isHermes = () => !!global.HermesInternal;\n")),Object(o.b)("p",null,"To see the benefits of Hermes, try making a release build/deployment of your app to compare. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ npx react-native run-android --variant release\n")),Object(o.b)("p",null,"This will compile JavaScript to bytecode during build time which will improve your app's startup speed on device."),Object(o.b)("h2",{id:"debugging-js-on-hermes-using-google-chromes-devtools"},"Debugging JS on Hermes using Google Chrome's DevTools"),Object(o.b)("p",null,"Hermes supports the Chrome debugger by implementing the Chrome inspector protocol. This means Chrome's tools can be used to directly debug JavaScript running on Hermes, on an emulator or on a real, physical, device."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'Note that this is very different with the "Remote JS Debugging" from the In-App Developer Menu documented in the ',Object(o.b)("a",{parentName:"p",href:"debugging#debugging-using-a-custom-javascript-debugger"},"Debugging")," section, which actually runs the JS code on Chrome's V8 on your development machine (laptop or desktop).")),Object(o.b)("p",null,"Chrome connects to Hermes running on device via Metro, so you'll need to know where Metro is listening. Typically this will be on ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8081"),", but this is ",Object(o.b)("a",{parentName:"p",href:"https://facebook.github.io/metro/docs/configuration"},"configurable"),". When running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," the address is written to stdout on startup."),Object(o.b)("p",null,"Once you know where the Metro server is listening, you can connect with Chrome using the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"p"},"chrome://inspect")," in a Chrome browser instance.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"Configure...")," button to add the Metro server address (typically ",Object(o.b)("inlineCode",{parentName:"p"},"localhost:8081")," as described above)."))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Configure button in Chrome DevTools devices page",src:n(1235).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"Dialog for adding Chrome DevTools network targets",src:n(1236).default})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'You should now see a "Hermes React Native" target with an "inspect" link which can be used to bring up debugger. If you don\'t see the "inspect" link, make sure the Metro server is running. ',Object(o.b)("img",{alt:"Target inspect link",src:n(1237).default}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You can now use the Chrome debug tools. For example, to breakpoint the next time some JavaScript is run, click on the pause button and trigger an action in your app which would cause JavaScript to execute. ",Object(o.b)("img",{alt:"Pause button in debug tools",src:n(1238).default})))))}b.isMDXComponent=!0}}]);
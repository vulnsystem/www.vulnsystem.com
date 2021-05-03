(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1264:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rtl-rn-core-updates-a7f3c54c3cd829c53a6da1d69bb8bf3c.png"},607:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(4),i=a(10),o=(a(0),a(1181)),r={title:"Right-to-Left Layout Support For React Native Apps",author:"Mengjue (Mandy) Wang",authorTitle:"Software Engineer Intern at Facebook",authorURL:"https://github.com/MengjueW",authorImageURL:"https://avatars0.githubusercontent.com/u/13987140?v=3&s=128",tags:["engineering"]},l={permalink:"/blog/2016/08/19/right-to-left-support-for-react-native-apps",source:"@site/blog/2016-08-19-right-to-left-support-for-react-native-apps.md",description:"After launching an app to the app stores, internationalization is the next step to further your audience reach. Over 20 countries and numerous people around the world use Right-to-Left (RTL) languages. Thus, making your app support RTL for them is necessary.",date:"2016-08-19T00:00:00.000Z",formattedDate:"August 19, 2016",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Right-to-Left Layout Support For React Native Apps",readingTime:6.63,truncated:!1,prevItem:{title:"Expo Talks: Adam on Unraveling Navigation",permalink:"/blog/2016/09/08/exponent-talks-unraveling-navigation"},nextItem:{title:"San Francisco Meetup Recap",permalink:"/blog/2016/08/12/react-native-meetup-san-francisco"}},p=[{value:"Overview Changes in RN for RTL support",id:"overview-changes-in-rn-for-rtl-support",children:[]},{value:"Making an App RTL-ready",id:"making-an-app-rtl-ready",children:[]},{value:"Writing RTL-ready Components",id:"writing-rtl-ready-components",children:[]},{value:"Maintaining Your RTL-ready App",id:"maintaining-your-rtl-ready-app",children:[]},{value:"Limitations and Future Plan",id:"limitations-and-future-plan",children:[]},{value:"Try it Out!",id:"try-it-out",children:[]}],c={toc:p};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After launching an app to the app stores, internationalization is the next step to further your audience reach. Over 20 countries and numerous people around the world use Right-to-Left (RTL) languages. Thus, making your app support RTL for them is necessary."),Object(o.b)("p",null,"We're glad to announce that React Native has been improved to support RTL layouts. This is now available in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native"},"react-native")," master branch today, and will be available in the next RC: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/releases"},Object(o.b)("inlineCode",{parentName:"a"},"v0.33.0-rc")),"."),Object(o.b)("p",null,"This involved changing ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/css-layout"},"css-layout"),", the core layout engine used by RN, and RN core implementation, as well as specific OSS JS components to support RTL."),Object(o.b)("p",null,"To battle test the RTL support in production, the latest version of the ",Object(o.b)("strong",{parentName:"p"},"Facebook Ads Manager")," app (the first cross-platform 100% RN app) is now available in Arabic and Hebrew with RTL layouts for both ",Object(o.b)("a",{parentName:"p",href:"https://itunes.apple.com/app/id964397083"},"iOS")," and ",Object(o.b)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=com.facebook.adsmanager"},"Android"),". Here is how it looks like in those RTL languages:"),Object(o.b)("img",{src:"/blog/assets/rtl-ama-ios-arabic.png",width:280,style:{margin:10}}),Object(o.b)("img",{src:"/blog/assets/rtl-ama-android-hebrew.png",width:280,style:{margin:10}}),Object(o.b)("h2",{id:"overview-changes-in-rn-for-rtl-support"},"Overview Changes in RN for RTL support"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/css-layout"},"css-layout")," already has a concept of ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," for the layout. In the Left-to-Right (LTR) layout, ",Object(o.b)("inlineCode",{parentName:"p"},"start")," means ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," means ",Object(o.b)("inlineCode",{parentName:"p"},"right"),". But in RTL, ",Object(o.b)("inlineCode",{parentName:"p"},"start")," means ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," means ",Object(o.b)("inlineCode",{parentName:"p"},"left"),". This means we can make RN depend on the ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"end")," calculation to compute the correct layout, which includes ",Object(o.b)("inlineCode",{parentName:"p"},"position"),", ",Object(o.b)("inlineCode",{parentName:"p"},"padding"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"margin"),"."),Object(o.b)("p",null,"In addition, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/css-layout"},"css-layout")," already makes each component's direction inherits from its parent. This means, we simply need to set the direction of the root component to RTL, and the entire app will flip."),Object(o.b)("p",null,"The diagram below describes the changes at high level:"),Object(o.b)("p",null,Object(o.b)("img",{src:a(1264).default})),Object(o.b)("p",null,"These include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook/css-layout/commit/46c842c71a1232c3c78c4215275d104a389a9a0f"},"css-layout RTL support for absolute positioning")),Object(o.b)("li",{parentName:"ul"},"mapping ",Object(o.b)("inlineCode",{parentName:"li"},"left")," and ",Object(o.b)("inlineCode",{parentName:"li"},"right")," to ",Object(o.b)("inlineCode",{parentName:"li"},"start")," and ",Object(o.b)("inlineCode",{parentName:"li"},"end")," in RN core implementation for shadow nodes"),Object(o.b)("li",{parentName:"ul"},"and exposing a ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js"},"bridged utility module")," to help control the RTL layout")),Object(o.b)("p",null,"With this update, when you allow RTL layout for your app:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"every component layout will flip horizontally"),Object(o.b)("li",{parentName:"ul"},"some gestures and animations will automatically have RTL layout, if you are using RTL-ready OSS components"),Object(o.b)("li",{parentName:"ul"},"minimal additional effort may be needed to make your app fully RTL-ready")),Object(o.b)("h2",{id:"making-an-app-rtl-ready"},"Making an App RTL-ready"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To support RTL, you should first add the RTL language bundles to your app."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"See the general guides from ",Object(o.b)("a",{parentName:"li",href:"https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/LocalizingYourApp/LocalizingYourApp.html#//apple_ref/doc/uid/10000171i-CH5-SW1"},"iOS")," and ",Object(o.b)("a",{parentName:"li",href:"https://developer.android.com/training/basics/supporting-devices/languages.html"},"Android"),"."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Allow RTL layout for your app by calling the ",Object(o.b)("inlineCode",{parentName:"p"},"allowRTL()")," function at the beginning of native code. We provided this utility to only apply to an RTL layout when your app is ready. Here is an example:"),Object(o.b)("p",{parentName:"li"},"iOS:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-objc"},"// in AppDelegate.m\n        [[RCTI18nUtil sharedInstance] allowRTL:YES];\n")),Object(o.b)("p",{parentName:"li"},"Android:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-java"},"// in MainActivity.java\n        I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();\n        sharedI18nUtilInstance.allowRTL(context, true);\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For Android, you need add ",Object(o.b)("inlineCode",{parentName:"p"},'android:supportsRtl="true"')," to the ",Object(o.b)("a",{parentName:"p",href:"http://developer.android.com/guide/topics/manifest/application-element.html"},Object(o.b)("inlineCode",{parentName:"a"},"<application>"))," element in ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file."))),Object(o.b)("p",null,"Now, when you recompile your app and change the device language to an RTL language (e.g. Arabic or Hebrew), your app layout should change to RTL automatically."),Object(o.b)("h2",{id:"writing-rtl-ready-components"},"Writing RTL-ready Components"),Object(o.b)("p",null,"In general, most components are already RTL-ready, for example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Left-to-Right Layout")),Object(o.b)("img",{src:"/blog/assets/rtl-demo-listitem-ltr.png",width:"300"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Right-to-Left Layout")),Object(o.b)("img",{src:"/blog/assets/rtl-demo-listitem-rtl.png",width:"300"}),Object(o.b)("p",null,"However, there are several cases to be aware of, for which you will need the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js"},Object(o.b)("inlineCode",{parentName:"a"},"I18nManager")),". In ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js"},Object(o.b)("inlineCode",{parentName:"a"},"I18nManager")),", there is a constant ",Object(o.b)("inlineCode",{parentName:"p"},"isRTL")," to tell if layout of app is RTL or not, so that you can make the necessary changes according to the layout."),Object(o.b)("h4",{id:"icons-with-directional-meaning"},"Icons with Directional Meaning"),Object(o.b)("p",null,"If your component has icons or images, they will be displayed the same way in LTR and RTL layout, because RN will not flip your source image. Therefore, you should flip them according to the layout style."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Left-to-Right Layout")),Object(o.b)("img",{src:"/blog/assets/rtl-demo-icon-ltr.png",width:"300"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Right-to-Left Layout")),Object(o.b)("img",{src:"/blog/assets/rtl-demo-icon-rtl.png",width:"300"}),Object(o.b)("p",null,"Here are two ways to flip the icon according to the direction:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Adding a ",Object(o.b)("inlineCode",{parentName:"p"},"transform")," style to the image component:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<Image\n  source={...}\n  style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}\n/>\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Or, changing the image source according to the direction:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"let imageSource = require('./back.png');\nif (I18nManager.isRTL) {\n  imageSource = require('./forward.png');\n}\nreturn <Image source={imageSource} />;\n")))),Object(o.b)("h4",{id:"gestures-and-animations"},"Gestures and Animations"),Object(o.b)("p",null,"In Android and iOS development, when you change to RTL layout, the gestures and animations are the opposite of LTR layout. Currently, in RN, gestures and animations are not supported on RN core code level, but on components level. The good news is, some of these components already support RTL today, such as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/38a6eec0db85a5204e85a9a92b4dee2db9641671/Libraries/Experimental/SwipeableRow/SwipeableRow.js"},Object(o.b)("inlineCode",{parentName:"a"},"SwipeableRow"))," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/tree/master/Libraries/NavigationExperimental"},Object(o.b)("inlineCode",{parentName:"a"},"NavigationExperimental")),". However, other components with gestures will need to support RTL manually."),Object(o.b)("p",null,"A good example to illustrate gesture RTL support is ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/38a6eec0db85a5204e85a9a92b4dee2db9641671/Libraries/Experimental/SwipeableRow/SwipeableRow.js"},Object(o.b)("inlineCode",{parentName:"a"},"SwipeableRow")),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/blog/assets/rtl-demo-swipe-ltr.png",width:280,style:{margin:10}}),Object(o.b)("img",{src:"/blog/assets/rtl-demo-swipe-rtl.png",width:280,style:{margin:10}})),Object(o.b)("h5",{id:"gestures-example"},"Gestures Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// SwipeableRow.js\n_isSwipingExcessivelyRightFromClosedPosition(gestureState: Object): boolean {\n  // ...\n  const gestureStateDx = IS_RTL ? -gestureState.dx : gestureState.dx;\n  return (\n    this._isSwipingRightFromClosed(gestureState) &&\n    gestureStateDx > RIGHT_SWIPE_THRESHOLD\n  );\n},\n")),Object(o.b)("h5",{id:"animation-example"},"Animation Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// SwipeableRow.js\n_animateBounceBack(duration: number): void {\n  // ...\n  const swipeBounceBackDistance = IS_RTL ?\n    -RIGHT_SWIPE_BOUNCE_BACK_DISTANCE :\n    RIGHT_SWIPE_BOUNCE_BACK_DISTANCE;\n  this._animateTo(\n    -swipeBounceBackDistance,\n    duration,\n    this._animateToClosedPositionDuringBounce,\n  );\n},\n")),Object(o.b)("h2",{id:"maintaining-your-rtl-ready-app"},"Maintaining Your RTL-ready App"),Object(o.b)("p",null,"Even after the initial RTL-compatible app release, you will likely need to iterate on new features. To improve development efficiency, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/f0fb228ec76ed49e6ed6d786d888e8113b8959a2/Libraries/Utilities/I18nManager.js"},Object(o.b)("inlineCode",{parentName:"a"},"I18nManager"))," provides the ",Object(o.b)("inlineCode",{parentName:"p"},"forceRTL()")," function for faster RTL testing without changing the test device language. You might want to provide a simple switch for this in your app. Here's an example from the RTL example in the RNTester:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/blog/assets/rtl-demo-forcertl.png",width:"300"})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"<RNTesterBlock title={'Quickly Test RTL Layout'}>\n  <View style={styles.flexDirectionRow}>\n    <Text style={styles.switchRowTextView}>forceRTL</Text>\n    <View style={styles.switchRowSwitchView}>\n      <Switch\n        onValueChange={this._onDirectionChange}\n        style={styles.rightAlignStyle}\n        value={this.state.isRTL}\n      />\n    </View>\n  </View>\n</RNTesterBlock>;\n\n_onDirectionChange = () => {\n  I18nManager.forceRTL(!this.state.isRTL);\n  this.setState({ isRTL: !this.state.isRTL });\n  Alert.alert(\n    'Reload this page',\n    'Please reload this page to change the UI direction! ' +\n      'All examples in this app will be affected. ' +\n      'Check them out to see what they look like in RTL layout.'\n  );\n};\n")),Object(o.b)("p",null,"When working on a new feature, you can easily toggle this button and reload the app to see RTL layout. The benefit is you won't need to change the language setting to test, however some text alignment won't change, as explained in the next section. Therefore, it's always a good idea to test your app in the RTL language before launching."),Object(o.b)("h2",{id:"limitations-and-future-plan"},"Limitations and Future Plan"),Object(o.b)("p",null,"The RTL support should cover most of the UX in your app; however, there are some limitations for now:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Text alignment behaviors differ in Android and iOS",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In iOS, the default text alignment depends on the active language bundle, they are consistently on one side. In Android, the default text alignment depends on the language of the text content, i.e. English will be left-aligned and Arabic will be right-aligned."),Object(o.b)("li",{parentName:"ul"},"In theory, this should be made consistent across platform, but some people may prefer one behavior to another when using an app. More user experience research may be needed to find out the best practice for text alignment.")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'There is no "true" left/right'),Object(o.b)("p",{parentName:"li"},"As discussed before, we map the ",Object(o.b)("inlineCode",{parentName:"p"},"left"),"/",Object(o.b)("inlineCode",{parentName:"p"},"right")," styles from the JS side to ",Object(o.b)("inlineCode",{parentName:"p"},"start"),"/",Object(o.b)("inlineCode",{parentName:"p"},"end"),", all ",Object(o.b)("inlineCode",{parentName:"p"},"left"),' in code for RTL layout becomes "right" on screen, and ',Object(o.b)("inlineCode",{parentName:"p"},"right"),' in code becomes "left" on screen. This is convenient because you don\'t need to change your product code too much, but it means there is no way to specify "true left" or "true right" in the code. In the future, allowing a component to control its direction regardless of the language may be necessary.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Make RTL support for gestures and animations more developer friendly"),Object(o.b)("p",{parentName:"li"},"Currently, there is still some programming effort required to make gestures and animations RTL compatible. In the future, it would be ideal to find a way to make gestures and animations RTL support more developer friendly."))),Object(o.b)("h2",{id:"try-it-out"},"Try it Out!"),Object(o.b)("p",null,"Check out the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/RTL/RTLExample.js"},Object(o.b)("inlineCode",{parentName:"a"},"RTLExample"))," in the ",Object(o.b)("inlineCode",{parentName:"p"},"RNTester")," to understand more about RTL support, and let us know how it works for you!"),Object(o.b)("p",null,"Finally, thank you for reading! We hope that the RTL support for React Native helps you grow your apps for international audience!"))}s.isMDXComponent=!0}}]);
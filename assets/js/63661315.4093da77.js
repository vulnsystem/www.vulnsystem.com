(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,A=u["".concat(c,".").concat(p)]||u[p]||b[p]||o;return a?r.a.createElement(A,i(i({ref:t},s),{},{components:a})):r.a.createElement(A,i({ref:t},s))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1182:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1183:function(e,t,a){"use strict";var n=a(0),r=a(1184);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1184:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1185:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1183),c=a(1182),i=a(69),l=a.n(i);var s=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,b=e.groupId,p=e.className,A=Object(o.a)(),m=A.tabGroupChoices,f=A.setTabGroupChoices,v=Object(n.useState)(i),h=v[0],k=v[1],y=n.Children.toArray(e.children),B=[];if(null!=b){var C=m[b];null!=C&&C!==h&&u.some((function(e){return e.value===C}))&&k(C)}var g=function(e){var t=e.target,a=B.indexOf(t),n=y[a].props.value;k(n),null!=b&&(f(b,n),setTimeout((function(){var e,a,n,r,o,c,i,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,c=window,i=c.innerHeight,s=c.innerWidth,a>=0&&o<=s&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},D=function(e){var t,a;switch(e.keyCode){case d:var n=B.indexOf(e.target)+1;a=B[n]||B[0];break;case s:var r=B.indexOf(e.target)-1;a=B[r]||B[B.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return B.push(e)},onKeyDown:D,onFocus:g,onClick:g},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},1186:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},1187:function(e,t,a){"use strict";var n=a(8),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),c=r?"ios":"android",i=r?"macos":o?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:c,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},552:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(4),r=a(10),o=(a(0),a(1181)),c=a(1185),i=a(1186),l=a(1187),s={id:"backhandler",title:"BackHandler"},d={unversionedId:"backhandler",id:"version-0.62/backhandler",isDocsHomePage:!1,title:"BackHandler",description:"The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only.",source:"@site/versioned_docs/version-0.62/backhandler.md",slug:"/backhandler",permalink:"/docs/0.62/backhandler",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/backhandler.md",version:"0.62",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.62/api",previous:{title:"useWindowDimensions",permalink:"/docs/0.62/usewindowdimensions"},next:{title:"PermissionsAndroid",permalink:"/docs/0.62/permissionsandroid"}},u=[{value:"Pattern",id:"pattern",children:[]},{value:"Example",id:"example",children:[]},{value:"Usage with React Navigation",id:"usage-with-react-navigation",children:[]},{value:"Backhandler hook",id:"backhandler-hook",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>exitApp()</code>",id:"exitapp",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],b={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Backhandler API detects hardware button presses for back navigation, lets you register event listeners for the system's back action, and lets you control how your application responds. It is Android-only."),Object(o.b)("p",null,"The event subscriptions are called in reverse order (i.e. the last registered subscription is called first)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"If one subscription returns true,")," then subscriptions registered earlier will not be called."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"If no subscription returns true or none are registered,")," it programmatically invokes the default back button functionality to exit the app.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Warning for modal users:")," If your app shows an opened ",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),", ",Object(o.b)("inlineCode",{parentName:"p"},"BackHandler")," will not publish any events (",Object(o.b)("a",{parentName:"p",href:"modal#onrequestclose"},"see ",Object(o.b)("inlineCode",{parentName:"a"},"Modal")," docs"),").")),Object(o.b)("h2",{id:"pattern"},"Pattern"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"BackHandler.addEventListener('hardwareBackPress', function () {\n  /**\n   * this.onMainScreen and this.goBack are just examples,\n   * you need to use your own implementation here.\n   *\n   * Typically you would use the navigator here to go to the last state.\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * When true is returned the event will not be bubbled up\n     * & no other back action will execute\n     */\n    return true;\n  }\n  /**\n   * Returning false will let the event to bubble up & let other event listeners\n   * or the system's default back action to be executed.\n   */\n  return false;\n});\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),Object(o.b)(c.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(o.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%20%20%5D)%3B%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20backAction%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20this.backAction%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.backHandler.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",Object(o.b)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",Object(o.b)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),Object(o.b)("p",null,"Additionally ",Object(o.b)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",Object(o.b)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),Object(o.b)(c.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(o.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%0A%20%20%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(o.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(o.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(o.b)("h2",{id:"usage-with-react-navigation"},"Usage with React Navigation"),Object(o.b)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",Object(o.b)("a",{parentName:"p",href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"},"Custom Android back button behaviour")),Object(o.b)("h2",{id:"backhandler-hook"},"Backhandler hook"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/hooks#usebackhandler"},"React Native Hooks")," has a nice ",Object(o.b)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"addeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static addEventListener(eventName, handler)\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"exitapp"},Object(o.b)("inlineCode",{parentName:"h3"},"exitApp()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static exitApp()\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"removeeventlistener"},Object(o.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"static removeEventListener(eventName, handler)\n")))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=o,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||n;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1182:function(e,t,a){"use strict";function o(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}},1183:function(e,t,a){"use strict";var o=a(0),r=a(1184);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1184:function(e,t,a){"use strict";var o=a(0),r=Object(o.createContext)(void 0);t.a=r},1185:function(e,t,a){"use strict";var o=a(0),r=a.n(o),n=a(1183),l=a(1182),i=a(69),c=a.n(i);var s=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(n.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,h=Object(o.useState)(i),O=h[0],g=h[1],j=o.Children.toArray(e.children),y=[];if(null!=d){var C=f[d];null!=C&&C!==O&&p.some((function(e){return e.value===C}))&&g(C)}var A=function(e){var t=e.target,a=y.indexOf(t),o=j[a].props.value;g(o),null!=d&&(v(d,o),setTimeout((function(){var e,a,o,r,n,l,i,s;(e=t.getBoundingClientRect(),a=e.top,o=e.left,r=e.bottom,n=e.right,l=window,i=l.innerHeight,s=l.innerWidth,a>=0&&n<=s&&r<=i&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case u:var o=y.indexOf(e.target)+1;a=y[o]||y[0];break;case s:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:A,onClick:A},a)}))),t?Object(o.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},1186:function(e,t,a){"use strict";var o=a(0),r=a.n(o);t.a=function(e){var t=e.children,a=e.hidden,o=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},1187:function(e,t,a){"use strict";var o=a(8),r=!!o.a.canUseDOM&&navigator.platform.startsWith("Mac"),n=!!o.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",i=r?"macos":n?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},687:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var o=a(4),r=a(10),n=(a(0),a(1181)),l=a(1185),i=a(1186),c=a(1187),s={id:"platformcolor",title:"PlatformColor"},u={unversionedId:"platformcolor",id:"version-0.63/platformcolor",isDocsHomePage:!1,title:"PlatformColor",description:"`js",source:"@site/versioned_docs/version-0.63/platformcolor.md",slug:"/platformcolor",permalink:"/docs/0.63/platformcolor",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/platformcolor.md",version:"0.63",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.63/api",previous:{title:"Platform",permalink:"/docs/0.63/platform"},next:{title:"Share",permalink:"/docs/0.63/share"}},p=[{value:"Supported colors",id:"supported-colors",children:[]},{value:"Example",id:"example",children:[]}],d={toc:p};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"PlatformColor(color1, [color2, ...colorN]);\n")),Object(n.b)("p",null,"You can use the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),Object(n.b)("p",null,"If you pass more than one string value to the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-js"},"PlatformColor('bogusName', 'linkColor');\n")),Object(n.b)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),Object(n.b)("h3",{id:"supported-colors"},"Supported colors"),Object(n.b)("p",null,"For a full list of the types of system colors supported, see:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Android:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.attr"},"R.attr")," - ",Object(n.b)("inlineCode",{parentName:"li"},"?attr")," prefix"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/R.color"},"R.color")," - ",Object(n.b)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),Object(n.b)("li",{parentName:"ul"},"iOS (Objective-C and Swift notations):",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"},"UIColor Standard Colors")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"},"UIColor UI Element Colors"))))),Object(n.b)("h4",{id:"developer-notes"},"Developer notes"),Object(n.b)(l.a,{groupId:"guide",defaultValue:"web",values:c.a.getDevNotesTabs(["web"]),mdxType:"Tabs"},Object(n.b)(i.a,{value:"web",mdxType:"TabItem"},Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"If you\u2019re familiar with design systems, another way of thinking about this is that ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," lets you tap into the local design system's color tokens so your app can blend right in!")))),Object(n.b)("h2",{id:"example"},"Example"),Object(n.b)("div",{className:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Platform%2C%0A%20%20PlatformColor%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%0A%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%0A%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20label%3A%20%7B%0A%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20...Platform.select(%7B%0A%20%20%20%20%20%20ios%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20android%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fandroid%3Aattr%2FtextColor')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(n.b)("p",null,"The string value provided to the ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",Object(n.b)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",Object(n.b)("inlineCode",{parentName:"p"},"Platform.Select()"),", as shown on the example above."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",Object(n.b)("inlineCode",{parentName:"p"},"PlatformColor")," in ",Object(n.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"},"PlatformColorExample.js"),".")))}b.isMDXComponent=!0}}]);
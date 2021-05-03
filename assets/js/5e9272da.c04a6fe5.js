(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(b,".").concat(m)]||p[m]||s[m]||l;return a?r.a.createElement(u,i(i({ref:t},o),{},{components:a})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},530:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(4),r=a(10),l=(a(0),a(1181)),b={id:"platform",title:"Platform"},i={unversionedId:"platform",id:"version-0.63/platform",isDocsHomePage:!1,title:"Platform",description:"Example",source:"@site/versioned_docs/version-0.63/platform.md",slug:"/platform",permalink:"/docs/0.63/platform",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/platform.md",version:"0.63",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.63/api",previous:{title:"PixelRatio",permalink:"/docs/0.63/pixelratio"},next:{title:"PlatformColor",permalink:"/docs/0.63/platformcolor"}},c=[{value:"Example",id:"example",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>constants</code>",id:"constants",children:[]},{value:'<code>isPad</code> <div class="label ios">iOS</div>',id:"ispad-ios",children:[]},{value:"<code>isTV</code>",id:"istv",children:[]},{value:"<code>isTesting</code>",id:"istesting",children:[]},{value:"<code>OS</code>",id:"os",children:[]},{value:"<code>Version</code>",id:"version",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>select()</code>",id:"select",children:[]}]}],o={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Platform API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Platform%2C%20StyleSheet%2C%20Text%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CScrollView%20contentContainerStyle%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3EOS%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.OS%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EOS%20Version%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.Version%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3EisTV%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isTV.toString()%7D%3C%2FText%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%26%26%20%3C%3E%0A%20%20%20%20%20%20%20%20%3CText%3EisPad%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%7BPlatform.isPad.toString()%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2F%3E%7D%0A%20%20%20%20%20%20%3CText%3EConstants%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.value%7D%3E%0A%20%20%20%20%20%20%20%20%7BJSON.stringify(Platform.constants%2C%20null%2C%202)%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20value%3A%20%7B%0A%20%20%20%20fontWeight%3A%20'600'%2C%0A%20%20%20%20padding%3A%204%2C%0A%20%20%20%20marginBottom%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"constants"},Object(l.b)("inlineCode",{parentName:"h3"},"constants")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"Platform.constants;\n")),Object(l.b)("p",null,"Returns an object which contains all available common and specific constants related to the platform."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Properties:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},Object(l.b)("div",{className:"widerColumn"},"Name")),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Optional"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"isTesting"),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"reactNativeVersion"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Information about React Native version. Keys are ",Object(l.b)("inlineCode",{parentName:"td"},"major"),", ",Object(l.b)("inlineCode",{parentName:"td"},"minor"),", ",Object(l.b)("inlineCode",{parentName:"td"},"patch")," with optional ",Object(l.b)("inlineCode",{parentName:"td"},"prerelease")," and values are ",Object(l.b)("inlineCode",{parentName:"td"},"number"),"s.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Version ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"OS version constant specific to Android.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Release ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Serial ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Hardware serial number of an Android device.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Fingerprint ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"A string that uniquely identifies the build.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Model ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"The end-user-visible name for the Android device.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Brand ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"The consumer-visible brand with which the product/hardware will be associated.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Manufacturer ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"The manufacturer of the Android device.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ServerHost ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"uiMode ",Object(l.b)("div",{className:"label android"},"Android")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Possible values are: ",Object(l.b)("inlineCode",{parentName:"td"},"'car'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'desk'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'normal'"),",",Object(l.b)("inlineCode",{parentName:"td"},"'tv'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'watch'")," and ",Object(l.b)("inlineCode",{parentName:"td"},"'unknown'"),". Read more about ",Object(l.b)("a",{parentName:"td",href:"https://developer.android.com/reference/android/app/UiModeManager.html"},"Android ModeType"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"forceTouchAvailable ",Object(l.b)("div",{className:"label ios"},"iOS")),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Indicate the availability of 3D Touch on a device.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"interfaceIdiom ",Object(l.b)("div",{className:"label ios"},"iOS")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"The interface type for the device. Read more about ",Object(l.b)("a",{parentName:"td",href:"https://developer.apple.com/documentation/uikit/uiuserinterfaceidiom"},"UIUserInterfaceIdiom"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"osVersion ",Object(l.b)("div",{className:"label ios"},"iOS")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"OS version constant specific to iOS.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"systemName ",Object(l.b)("div",{className:"label ios"},"iOS")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"OS name constant specific to iOS.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ispad-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"isPad")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"Platform.isPad;\n")),Object(l.b)("p",null,"Returns a boolean which defines if device is an iPad."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"istv"},Object(l.b)("inlineCode",{parentName:"h3"},"isTV")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"Platform.isTV;\n")),Object(l.b)("p",null,"Returns a boolean which defines if device is a TV."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"istesting"},Object(l.b)("inlineCode",{parentName:"h3"},"isTesting")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"Platform.isTesting;\n")),Object(l.b)("p",null,"Returns a boolean which defines if application is running in Developer Mode with testing flag set."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"boolean")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"os"},Object(l.b)("inlineCode",{parentName:"h3"},"OS")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static Platform.OS\n")),Object(l.b)("p",null,"Returns string value representing the current OS."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum(",Object(l.b)("inlineCode",{parentName:"td"},"'android'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'ios'"),")")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"version"},Object(l.b)("inlineCode",{parentName:"h3"},"Version")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"Platform.Version;\n")),Object(l.b)("p",null,"Returns the version of the OS."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number ",Object(l.b)("div",{className:"label android"},"Android"),Object(l.b)("hr",null),"string ",Object(l.b)("div",{className:"label ios"},"iOS"))))),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("h3",{id:"select"},Object(l.b)("inlineCode",{parentName:"h3"},"select()")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"static select(config: object): any\n")),Object(l.b)("p",null,"Returns the most fitting value for the platform you are currently running on."),Object(l.b)("h4",{id:"parameters"},"Parameters:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"config"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Yes"),Object(l.b)("td",{parentName:"tr",align:null},"See config description below.")))),Object(l.b)("p",null,"Select method returns the most fitting value for the platform you are currently running on. That is, if you're running on a phone, ",Object(l.b)("inlineCode",{parentName:"p"},"android")," and ",Object(l.b)("inlineCode",{parentName:"p"},"ios")," keys will take preference. If those are not specified, ",Object(l.b)("inlineCode",{parentName:"p"},"native")," key will be used and then the ",Object(l.b)("inlineCode",{parentName:"p"},"default")," key."),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"config")," parameter is an object with the following keys:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"android")," (any)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ios")," (any)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"native")," (any)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"default")," (any)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example usage:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import { Platform, StyleSheet } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    ...Platform.select({\n      android: {\n        backgroundColor: 'green'\n      },\n      ios: {\n        backgroundColor: 'red'\n      },\n      default: {\n        // other platforms, web for example\n        backgroundColor: 'blue'\n      }\n    })\n  }\n});\n")),Object(l.b)("p",null,"This will result in a container having ",Object(l.b)("inlineCode",{parentName:"p"},"flex: 1")," on all platforms, a green background color on Android, a red background color on iOS, and a blue background color on other platforms."),Object(l.b)("p",null,"Since the value of the corresponding platform key can be of type ",Object(l.b)("inlineCode",{parentName:"p"},"any"),", ",Object(l.b)("a",{parentName:"p",href:"/docs/0.63/platform#select"},Object(l.b)("inlineCode",{parentName:"a"},"select"))," method can also be used to return platform-specific components, like below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const Component = Platform.select({\n  ios: () => require('ComponentIOS'),\n  android: () => require('ComponentAndroid')\n})();\n\n<Component />;\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"const Component = Platform.select({\n  native: () => require('ComponentForNative'),\n  default: () => require('ComponentForWeb')\n})();\n\n<Component />;\n")))}d.isMDXComponent=!0}}]);
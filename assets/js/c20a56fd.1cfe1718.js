(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=i,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||a;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},910:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(4),o=n(10),a=(n(0),n(1181)),r={id:"actionsheetios",title:"ActionSheetIOS"},c={unversionedId:"actionsheetios",id:"version-0.60/actionsheetios",isDocsHomePage:!1,title:"ActionSheetIOS",description:"Reference",source:"@site/versioned_docs/version-0.60/actionsheetios.md",slug:"/actionsheetios",permalink:"/docs/0.60/actionsheetios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/actionsheetios.md",version:"0.60",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.60/api",previous:{title:"AccessibilityInfo",permalink:"/docs/0.60/accessibilityinfo"},next:{title:"Alert",permalink:"/docs/0.60/alert"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",children:[]},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("h2",{id:"methods"},"Methods"),Object(a.b)("h3",{id:"showactionsheetwithoptions"},Object(a.b)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static showActionSheetWithOptions(options, callback)\n")),Object(a.b)("p",null,"Display an iOS action sheet. The ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object must contain one or more of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"options")," (array of strings) - a list of button titles (required)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cancelButtonIndex")," (int) - index of cancel button in ",Object(a.b)("inlineCode",{parentName:"li"},"options")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," (int) - index of destructive button in ",Object(a.b)("inlineCode",{parentName:"li"},"options")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"title")," (string) - a title to show above the action sheet"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to show below the title"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tintColor")," (string) - the ",Object(a.b)("a",{parentName:"li",href:"/docs/0.60/colors"},"color")," used for non-destructive button titles")),Object(a.b)("p",null,"The 'callback' function takes one parameter, the zero-based index of the selected item."),Object(a.b)("p",null,"Minimal example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0\n  },\n  (buttonIndex) => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  }\n);\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"showshareactionsheetwithoptions"},Object(a.b)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),Object(a.b)("p",null,"Display the iOS share sheet. The ",Object(a.b)("inlineCode",{parentName:"p"},"options")," object should contain one or both of ",Object(a.b)("inlineCode",{parentName:"p"},"message")," and ",Object(a.b)("inlineCode",{parentName:"p"},"url")," and can additionally have a ",Object(a.b)("inlineCode",{parentName:"p"},"subject")," or ",Object(a.b)("inlineCode",{parentName:"p"},"excludedActivityTypes"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")," (string) - a URL to share"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to share"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"subject")," (string) - a subject for the message"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"excludedActivityTypes")," (array) - the activities to exclude from the ActionSheet")),Object(a.b)("p",null,"NOTE: if ",Object(a.b)("inlineCode",{parentName:"p"},"url")," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc."),Object(a.b)("p",null,"The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",Object(a.b)("inlineCode",{parentName:"p"},"stack")," property of type ",Object(a.b)("inlineCode",{parentName:"p"},"string"),"."),Object(a.b)("p",null,"The 'successCallback' function takes two parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a boolean value signifying success or failure"),Object(a.b)("li",{parentName:"ul"},"a string that, in the case of success, indicates the method of sharing")))}b.isMDXComponent=!0}}]);
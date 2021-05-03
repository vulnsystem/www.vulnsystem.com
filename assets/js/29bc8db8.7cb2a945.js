(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},311:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(4),o=n(10),i=(n(0),n(1181)),r={id:"actionsheetios",title:"ActionSheetIOS"},c={unversionedId:"actionsheetios",id:"version-0.64/actionsheetios",isDocsHomePage:!1,title:"ActionSheetIOS",description:"Displays native to iOS Action Sheet component.",source:"@site/versioned_docs/version-0.64/actionsheetios.md",slug:"/actionsheetios",permalink:"/docs/actionsheetios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/actionsheetios.md",version:"0.64",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.64/api",previous:{title:"ToastAndroid",permalink:"/docs/toastandroid"},next:{title:"DynamicColorIOS",permalink:"/docs/dynamiccolorios"}},s=[{value:"Example",id:"example",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",children:[]},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Displays native to iOS ",Object(i.b)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/views/action-sheets/"},"Action Sheet")," component."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"ActionSheetIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActionSheetIOS%2C%20Button%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bresult%2C%20setResult%5D%20%3D%20useState(%22%F0%9F%94%AE%22)%3B%0A%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%0A%20%20%20%20ActionSheetIOS.showActionSheetWithOptions(%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20options%3A%20%5B%22Cancel%22%2C%20%22Generate%20number%22%2C%20%22Reset%22%5D%2C%0A%20%20%20%20%20%20%20%20destructiveButtonIndex%3A%202%2C%0A%20%20%20%20%20%20%20%20cancelButtonIndex%3A%200%2C%0A%20%20%20%20%20%20%20%20userInterfaceStyle%3A%20'dark'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20buttonIndex%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(buttonIndex%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%2F%2F%20cancel%20action%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(Math.floor(Math.random()%20*%20100)%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(buttonIndex%20%3D%3D%3D%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20setResult(%22%F0%9F%94%AE%22)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.result%7D%3E%7Bresult%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BonPress%7D%20title%3D%22Show%20Action%20Sheet%22%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20result%3A%20%7B%0A%20%20%20%20fontSize%3A%2064%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"showactionsheetwithoptions"},Object(i.b)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static showActionSheetWithOptions(options, callback)\n")),Object(i.b)("p",null,"Display an iOS action sheet. The ",Object(i.b)("inlineCode",{parentName:"p"},"options")," object must contain one or more of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," (array of strings) - a list of button titles (required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cancelButtonIndex")," (int) - index of cancel button in ",Object(i.b)("inlineCode",{parentName:"li"},"options")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," (int or array of ints) - indices of destructive buttons in ",Object(i.b)("inlineCode",{parentName:"li"},"options")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title")," (string) - a title to show above the action sheet"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to show below the title"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tintColor")," (string) - the ",Object(i.b)("a",{parentName:"li",href:"colors"},"color")," used for non-destructive button titles"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disabledButtonIndices")," (array of numbers) - a list of button indices which should be disabled"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"userInterfaceStyle")," (string) - the interface style used for the action sheet, can be set to ",Object(i.b)("inlineCode",{parentName:"li"},"light")," or ",Object(i.b)("inlineCode",{parentName:"li"},"dark"),", otherwise the default system style will be used")),Object(i.b)("p",null,"The 'callback' function takes one parameter, the zero-based index of the selected item."),Object(i.b)("p",null,"Minimal example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0\n  },\n  (buttonIndex) => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  }\n);\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"showshareactionsheetwithoptions"},Object(i.b)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),Object(i.b)("p",null,"Display the iOS share sheet. The ",Object(i.b)("inlineCode",{parentName:"p"},"options")," object should contain one or both of ",Object(i.b)("inlineCode",{parentName:"p"},"message")," and ",Object(i.b)("inlineCode",{parentName:"p"},"url")," and can additionally have a ",Object(i.b)("inlineCode",{parentName:"p"},"subject")," or ",Object(i.b)("inlineCode",{parentName:"p"},"excludedActivityTypes"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url")," (string) - a URL to share"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to share"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"subject")," (string) - a subject for the message"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"excludedActivityTypes")," (array) - the activities to exclude from the ActionSheet")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," If ",Object(i.b)("inlineCode",{parentName:"p"},"url")," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc. If ",Object(i.b)("inlineCode",{parentName:"p"},"url")," points to a remote file or address it must conform to URL format as described in ",Object(i.b)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2396.txt"},"RFC 2396"),". For example, a web URL without a proper protocol (HTTP/HTTPS) will not be shared.")),Object(i.b)("p",null,"The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",Object(i.b)("inlineCode",{parentName:"p"},"stack")," property of type ",Object(i.b)("inlineCode",{parentName:"p"},"string"),"."),Object(i.b)("p",null,"The 'successCallback' function takes two parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a boolean value signifying success or failure"),Object(i.b)("li",{parentName:"ul"},"a string that, in the case of success, indicates the method of sharing")))}b.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},745:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(4),a=n(10),o=(n(0),n(1181)),i={id:"maskedviewios",title:"\ud83d\udea7 MaskedViewIOS"},c={unversionedId:"maskedviewios",id:"version-0.61/maskedviewios",isDocsHomePage:!1,title:"\ud83d\udea7 MaskedViewIOS",description:"Deprecated. Use @react-native-community/masked-view instead.",source:"@site/versioned_docs/version-0.61/maskedviewios.md",slug:"/maskedviewios",permalink:"/docs/0.61/maskedviewios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/maskedviewios.md",version:"0.61",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.61/components",previous:{title:"KeyboardAvoidingView",permalink:"/docs/0.61/keyboardavoidingview"},next:{title:"Modal",permalink:"/docs/0.61/modal"}},l=[{value:"Example",id:"example",children:[{value:"Props",id:"props",children:[]}]},{value:"Props",id:"props-1",children:[{value:"<code>maskElement</code>",id:"maskelement",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-masked-view"},"@react-native-community/masked-view")," instead.")),Object(o.b)("p",null,"Renders the child view with a mask specified in the ",Object(o.b)("inlineCode",{parentName:"p"},"maskElement")," prop."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { MaskedViewIOS, Text, View } from 'react-native';\n\nclass MyMaskedView extends React.Component {\n  render() {\n    return (\n      // Determines shape of the mask\n      <MaskedViewIOS\n        style={{ flex: 1, flexDirection: 'row', height: '100%' }}\n        maskElement={\n          <View\n            style={{\n              // Transparent background because mask is based off alpha channel.\n              backgroundColor: 'transparent',\n              flex: 1,\n              justifyContent: 'center',\n              alignItems: 'center'\n            }}>\n            <Text\n              style={{\n                fontSize: 60,\n                color: 'black',\n                fontWeight: 'bold'\n              }}>\n              Basic Mask\n            </Text>\n          </View>\n        }>\n        {/* Shows behind the mask, you can put anything here, such as an image */}\n        <View\n          style={{\n            flex: 1,\n            height: '100%',\n            backgroundColor: '#324376'\n          }}\n        />\n        <View\n          style={{\n            flex: 1,\n            height: '100%',\n            backgroundColor: '#F5DD90'\n          }}\n        />\n        <View\n          style={{\n            flex: 1,\n            height: '100%',\n            backgroundColor: '#F76C5E'\n          }}\n        />\n      </MaskedViewIOS>\n    );\n  }\n}\n")),Object(o.b)("p",null,"The following image demonstrates that you can put almost anything behind the mask. The three examples shown are masked ",Object(o.b)("inlineCode",{parentName:"p"},"<View>"),", ",Object(o.b)("inlineCode",{parentName:"p"},"<Text>"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"<Image>"),"."),Object(o.b)("center",null,Object(o.b)("img",{src:"/docs/assets/MaskedViewIOS/example.png",width:"200"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The alpha channel of the view rendered by the ",Object(o.b)("inlineCode",{parentName:"strong"},"maskElement")," prop determines how much of the view's content and background shows through.")," Fully or partially opaque pixels allow the underlying content to show through but fully transparent pixels block that content."),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/0.61/view#props"},"View props..."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/0.61/maskedviewios#maskelement"},Object(o.b)("inlineCode",{parentName:"a"},"maskElement")))),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props-1"},"Props"),Object(o.b)("h3",{id:"maskelement"},Object(o.b)("inlineCode",{parentName:"h3"},"maskElement")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"element"),Object(o.b)("td",{parentName:"tr",align:null},"Yes")))))}p.isMDXComponent=!0}}]);
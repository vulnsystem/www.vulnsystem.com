(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,O=p["".concat(b,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(O,c(c({ref:t},o),{},{components:n})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},787:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(4),r=n(10),l=(n(0),n(1181)),b={id:"picker",title:"Picker"},c={unversionedId:"picker",id:"version-0.61/picker",isDocsHomePage:!1,title:"Picker",description:"Renders the native picker component on Android and iOS. Example:",source:"@site/versioned_docs/version-0.61/picker.md",slug:"/picker",permalink:"/docs/0.61/picker",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/picker.md",version:"0.61",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.61/components",previous:{title:"Modal",permalink:"/docs/0.61/modal"},next:{title:"\ud83d\udea7 PickerIOS",permalink:"/docs/0.61/pickerios"}},i=[{value:"Props",id:"props",children:[{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>selectedValue</code>",id:"selectedvalue",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>testID</code>",id:"testid",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>prompt</code>",id:"prompt",children:[]},{value:"<code>itemStyle</code>",id:"itemstyle",children:[]}]}],o={toc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Renders the native picker component on Android and iOS. Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<Picker\n  selectedValue={this.state.language}\n  style={{ height: 50, width: 100 }}\n  onValueChange={(itemValue, itemIndex) =>\n    this.setState({ language: itemValue })\n  }>\n  <Picker.Item label="Java" value="java" />\n  <Picker.Item label="JavaScript" value="js" />\n</Picker>\n')),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/0.61/view#props"},"View Props"),"."),Object(l.b)("h3",{id:"onvaluechange"},Object(l.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(l.b)("p",null,"Callback for when an item is selected. This is called with the following parameters:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"itemValue"),": the ",Object(l.b)("inlineCode",{parentName:"li"},"value")," prop of the item that was selected"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"itemPosition"),": the index of the selected item in this picker")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"selectedvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"selectedValue")),Object(l.b)("p",null,"Value matching value of one of the items. Can be a string or an integer."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pickerStyleType"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"enabled"},Object(l.b)("inlineCode",{parentName:"h3"},"enabled")),Object(l.b)("p",null,"If set to false, the picker will be disabled, i.e. the user will not be able to make a selection."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"mode"},Object(l.b)("inlineCode",{parentName:"h3"},"mode")),Object(l.b)("p",null,"On Android, specifies how to display the selection items when the user taps on the picker:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"'dialog': Show a modal dialog. This is the default."),Object(l.b)("li",{parentName:"ul"},"'dropdown': Shows a dropdown anchored to the picker view")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"enum('dialog', 'dropdown')"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"prompt"},Object(l.b)("inlineCode",{parentName:"h3"},"prompt")),Object(l.b)("p",null,"Prompt string for this picker, used on Android in dialog mode as the title of the dialog."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"itemstyle"},Object(l.b)("inlineCode",{parentName:"h3"},"itemStyle")),Object(l.b)("p",null,"Style to apply to each of the item labels."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/0.61/text-style-props"},"text styles")),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS")))))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{1089:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return u})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(4),r=a(10),l=(a(0),a(1181)),o=a(1185),c=a(1186),i=a(1187),b={id:"touchablehighlight",title:"TouchableHighlight"},u={unversionedId:"touchablehighlight",id:"version-0.62/touchablehighlight",isDocsHomePage:!1,title:"TouchableHighlight",description:"A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.",source:"@site/versioned_docs/version-0.62/touchablehighlight.md",slug:"/touchablehighlight",permalink:"/docs/0.62/touchablehighlight",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/touchablehighlight.md",version:"0.62",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.62/components",previous:{title:"TextInput",permalink:"/docs/0.62/textinput"},next:{title:"TouchableOpacity",permalink:"/docs/0.62/touchableopacity"}},d=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>activeOpacity</code>",id:"activeopacity",children:[]},{value:"<code>onHideUnderlay</code>",id:"onhideunderlay",children:[]},{value:"<code>onShowUnderlay</code>",id:"onshowunderlay",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>underlayColor</code>",id:"underlaycolor",children:[]},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[]},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",children:[]},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",children:[]},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",children:[]},{value:"<code>nextFocusRight</code>",id:"nextfocusright",children:[]},{value:"<code>nextFocusUp</code>",id:"nextfocusup",children:[]},{value:"<code>testOnly_pressed</code>",id:"testonly_pressed",children:[]}]}],s={toc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view."),Object(l.b)("p",null,"The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color."),Object(l.b)("p",null,"TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent(props) {\n  return (\n    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>\n      <Text>My Component</Text>\n    </View>\n  );\n}\n\n<TouchableHighlight\n  activeOpacity={0.6}\n  underlayColor=\"#DDDDDD\"\n  onPress={() => alert('Pressed!')}>\n  <MyComponent />\n</TouchableHighlight>;\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)(o.a,{groupId:"syntax",defaultValue:i.a.defaultSyntax,values:i.a.syntax,mdxType:"Tabs"},Object(l.b)(c.a,{value:"functional",mdxType:"TabItem"},Object(l.b)("div",{className:"snack-player","data-snack-name":"TouchableHighlight Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20TouchableHighlight%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20function%20TouchableHighlightExample()%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setCount(count%20%2B%201)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableHighlight%20style%3D%7Bstyles.button%7D%20onPress%3D%7BonPress%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%20Touch%20Here%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3E%7Bcount%20!%3D%3D%200%20%3F%20count%20%3A%20null%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(l.b)(c.a,{value:"classical",mdxType:"TabItem"},Object(l.b)("div",{className:"snack-player","data-snack-name":"TouchableHighlight Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20TouchableHighlight%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%0A%20%20%7D%0A%0A%20%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20style%3D%7Bstyles.button%7D%20onPress%3D%7Bthis.onPress%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3E%20Touch%20Here%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.countContainer%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.countText%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bthis.state.count%20!%3D%3D%200%20%3F%20this.state.count%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("p",null,"Inherits ",Object(l.b)("a",{parentName:"p",href:"/docs/0.62/touchablewithoutfeedback#props"},"TouchableWithoutFeedback Props"),"."),Object(l.b)("h3",{id:"activeopacity"},Object(l.b)("inlineCode",{parentName:"h3"},"activeOpacity")),Object(l.b)("p",null,"Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Defaults to 0.85. Requires ",Object(l.b)("inlineCode",{parentName:"p"},"underlayColor")," to be set."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onhideunderlay"},Object(l.b)("inlineCode",{parentName:"h3"},"onHideUnderlay")),Object(l.b)("p",null,"Called immediately after the underlay is hidden."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onshowunderlay"},Object(l.b)("inlineCode",{parentName:"h3"},"onShowUnderlay")),Object(l.b)("p",null,"Called immediately after the underlay is shown."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"function"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"style"},Object(l.b)("inlineCode",{parentName:"h3"},"style")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"View.style"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"underlaycolor"},Object(l.b)("inlineCode",{parentName:"h3"},"underlayColor")),Object(l.b)("p",null,"The color of the underlay that will show through when the touch is active."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"/docs/0.62/colors"},"color")),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hastvpreferredfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusdown"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(l.b)("p",null,"TV next focus down (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusforward"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(l.b)("p",null,"TV next focus forward (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusleft"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(l.b)("p",null,"TV next focus left (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusright"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(l.b)("p",null,"TV next focus right (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"nextfocusup"},Object(l.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(l.b)("p",null,"TV next focus up (see documentation for the View component)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"),Object(l.b)("th",{parentName:"tr",align:null},"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No"),Object(l.b)("td",{parentName:"tr",align:null},"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testonly_pressed"},Object(l.b)("inlineCode",{parentName:"h3"},"testOnly_pressed")),Object(l.b)("p",null,"Handy for snapshot tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bool"),Object(l.b)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0},1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,h=d["".concat(o,".").concat(p)]||d[p]||s[p]||l;return a?r.a.createElement(h,c(c({ref:t},b),{},{components:a})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1182:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1183:function(e,t,a){"use strict";var n=a(0),r=a(1184);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1184:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1185:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(1183),o=a(1182),c=a(69),i=a.n(c);var b=37,u=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,d=e.values,s=e.groupId,p=e.className,h=Object(l.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,j=Object(n.useState)(c),f=j[0],g=j[1],y=n.Children.toArray(e.children),N=[];if(null!=s){var A=m[s];null!=A&&A!==f&&d.some((function(e){return e.value===A}))&&g(A)}var v=function(e){var t=e.target,a=N.indexOf(t),n=y[a].props.value;g(n),null!=s&&(O(s,n),setTimeout((function(){var e,a,n,r,l,o,c,b;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,o=window,c=o.innerHeight,b=o.innerWidth,a>=0&&l<=b&&r<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((function(){return t.classList.remove(i.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case u:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case b:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},p)},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:v,onClick:v},a)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},1186:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},1187:function(e,t,a){"use strict";var n=a(8),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",c=r?"macos":l?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:c,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}}}]);
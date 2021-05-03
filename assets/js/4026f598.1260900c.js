(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,O=d["".concat(l,".").concat(m)]||d[m]||p[m]||b;return a?r.a.createElement(O,i(i({ref:t},c),{},{components:a})):r.a.createElement(O,i({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<b;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},410:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(4),r=a(10),b=(a(0),a(1181)),l={id:"pressable",title:"Pressable"},i={unversionedId:"pressable",id:"version-0.64/pressable",isDocsHomePage:!1,title:"Pressable",description:"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.",source:"@site/versioned_docs/version-0.64/pressable.md",slug:"/pressable",permalink:"/docs/pressable",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/pressable.md",version:"0.64",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.64/components",previous:{title:"Modal",permalink:"/docs/modal"},next:{title:"RefreshControl",permalink:"/docs/refreshcontrol"}},o=[{value:"How it works",id:"how-it-works",children:[]},{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:'<code>android_disableSound</code> <div class="label android">Android</div>',id:"android_disablesound-android",children:[]},{value:'<code>android_ripple</code> <div class="label android">Android</div>',id:"android_ripple-android",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>unstable_pressDelay</code>",id:"unstable_pressdelay",children:[]},{value:"<code>delayLongPress</code>",id:"delaylongpress",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>hitSlop</code>",id:"hitslop",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>onPressIn</code>",id:"onpressin",children:[]},{value:"<code>onPressOut</code>",id:"onpressout",children:[]},{value:"<code>pressRetentionOffset</code>",id:"pressretentionoffset",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>testOnly_pressed</code>",id:"testonly_pressed",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"RippleConfig",id:"rippleconfig",children:[]}]}],c={toc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Pressable is a Core Component wrapper that can detect various stages of press interactions on any of its defined children."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"<Pressable onPress={onPressFunction}>\n  <Text>I'm pressable!</Text>\n</Pressable>\n")),Object(b.b)("h2",{id:"how-it-works"},"How it works"),Object(b.b)("p",null,"On an element wrapped by ",Object(b.b)("inlineCode",{parentName:"p"},"Pressable"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"#onpressin"},Object(b.b)("inlineCode",{parentName:"a"},"onPressIn"))," is called when a press is activated."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"#onpressout"},Object(b.b)("inlineCode",{parentName:"a"},"onPressOut"))," is called when the press gesture is deactivated.")),Object(b.b)("p",null,"After pressing ",Object(b.b)("a",{parentName:"p",href:"#onpressin"},Object(b.b)("inlineCode",{parentName:"a"},"onPressIn")),", one of two things will happen:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"The person will remove their finger, triggering ",Object(b.b)("a",{parentName:"li",href:"#onpressout"},Object(b.b)("inlineCode",{parentName:"a"},"onPressOut"))," followed by ",Object(b.b)("a",{parentName:"li",href:"#onpress"},Object(b.b)("inlineCode",{parentName:"a"},"onPress")),"."),Object(b.b)("li",{parentName:"ol"},"If the person leaves their finger longer than 500 milliseconds before removing it, ",Object(b.b)("a",{parentName:"li",href:"#onlongpress"},Object(b.b)("inlineCode",{parentName:"a"},"onLongPress"))," is triggered. (",Object(b.b)("a",{parentName:"li",href:"#onpressout"},Object(b.b)("inlineCode",{parentName:"a"},"onPressOut"))," will still fire when they remove their finger.)")),Object(b.b)("img",{src:"/docs/assets/d_pressable_pressing.svg",width:"1000",alt:"Diagram of the onPress events in sequence."}),Object(b.b)("p",null,"Fingers are not the most precise instruments, and it is common for users to accidentally activate the wrong element or miss the activation area. To help, ",Object(b.b)("inlineCode",{parentName:"p"},"Pressable")," has an optional ",Object(b.b)("inlineCode",{parentName:"p"},"HitRect")," you can use to define how far a touch can register away from the wrapped element. Presses can start anywhere within a ",Object(b.b)("inlineCode",{parentName:"p"},"HitRect"),"."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"PressRect")," allows presses to move beyond the element and its ",Object(b.b)("inlineCode",{parentName:"p"},"HitRect"),' while maintaining activation and being eligible for a "press"\u2014think of sliding your finger slowly away from a button you\'re pressing down on.'),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.")),Object(b.b)("figure",null,Object(b.b)("img",{src:"/docs/assets/d_pressable_anatomy.svg",width:"1000",alt:"Diagram of HitRect and PressRect and how they work."}),Object(b.b)("figcaption",null,"You can set ",Object(b.b)("code",null,"HitRect")," with ",Object(b.b)("code",null,"hitSlop")," and set ",Object(b.b)("code",null,"PressRect")," with ",Object(b.b)("code",null,"pressRetentionOffset"),".")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"Pressable")," uses React Native's ",Object(b.b)("inlineCode",{parentName:"p"},"Pressability")," API. For more information around the state machine flow of Pressability and how it works, check out the implementation for ",Object(b.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/16ea9ba8133a5340ed6751ec7d49bf03a0d4c5ea/Libraries/Pressability/Pressability.js#L347"},"Pressability"),".")),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("div",{className:"snack-player","data-snack-name":"Pressable","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Pressable%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BtimesPressed%2C%20setTimesPressed%5D%20%3D%20useState(0)%3B%0A%0A%20%20let%20textLog%20%3D%20''%3B%0A%20%20if%20(timesPressed%20%3E%201)%20%7B%0A%20%20%20%20textLog%20%3D%20timesPressed%20%2B%20'x%20onPress'%3B%0A%20%20%7D%20else%20if%20(timesPressed%20%3E%200)%20%7B%0A%20%20%20%20textLog%20%3D%20'onPress'%3B%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CPressable%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setTimesPressed((current)%20%3D%3E%20current%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20style%3D%7B(%7B%20pressed%20%7D)%20%3D%3E%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20pressed%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3F%20'rgb(210%2C%20230%2C%20255)'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20'white'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20styles.wrapperCustom%0A%20%20%20%20%20%20%20%20%5D%7D%3E%0A%20%20%20%20%20%20%20%20%7B(%7B%20pressed%20%7D)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bpressed%20%3F%20'Pressed!'%20%3A%20'Press%20Me'%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FPressable%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.logBox%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20testID%3D%22pressable_press_console%22%3E%7BtextLog%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2016%0A%20%20%7D%2C%0A%20%20wrapperCustom%3A%20%7B%0A%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20padding%3A%206%0A%20%20%7D%2C%0A%20%20logBox%3A%20%7B%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%20%20borderWidth%3A%20StyleSheet.hairlineWidth%2C%0A%20%20%20%20borderColor%3A%20'%23f0f0f0'%2C%0A%20%20%20%20backgroundColor%3A%20'%23f9f9f9'%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"android_disablesound-android"},Object(b.b)("inlineCode",{parentName:"h3"},"android_disableSound")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"If true, doesn't play Android system sound on press."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"android_ripple-android"},Object(b.b)("inlineCode",{parentName:"h3"},"android_ripple")," ",Object(b.b)("div",{class:"label android"},"Android")),Object(b.b)("p",null,"Enables the Android ripple effect and configures its properties."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"pressable#rippleconfig"},"RippleConfig")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"children"},Object(b.b)("inlineCode",{parentName:"h3"},"children")),Object(b.b)("p",null,"Either children or a function that receives a boolean reflecting whether the component is currently pressed."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"react-node"},"React Node")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"unstable_pressdelay"},Object(b.b)("inlineCode",{parentName:"h3"},"unstable_pressDelay")),Object(b.b)("p",null,"Duration (in milliseconds) to wait after press down before calling ",Object(b.b)("inlineCode",{parentName:"p"},"onPressIn"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"delaylongpress"},Object(b.b)("inlineCode",{parentName:"h3"},"delayLongPress")),Object(b.b)("p",null,"Duration (in milliseconds) from ",Object(b.b)("inlineCode",{parentName:"p"},"onPressIn")," before ",Object(b.b)("inlineCode",{parentName:"p"},"onLongPress")," is called."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"500"))))),Object(b.b)("h3",{id:"disabled"},Object(b.b)("inlineCode",{parentName:"h3"},"disabled")),Object(b.b)("p",null,"Whether the press behavior is disabled."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"hitslop"},Object(b.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(b.b)("p",null,"Sets additional distance outside of element in which a press can be detected."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"rect"},"Rect")," or number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onlongpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(b.b)("p",null,"Called if the time after ",Object(b.b)("inlineCode",{parentName:"p"},"onPressIn")," lasts longer than 500 milliseconds. This time period can be customized with ",Object(b.b)("a",{parentName:"p",href:"#delaylongpress"},Object(b.b)("inlineCode",{parentName:"a"},"delayLongPress")),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onPress")),Object(b.b)("p",null,"Called after ",Object(b.b)("inlineCode",{parentName:"p"},"onPressOut"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onpressin"},Object(b.b)("inlineCode",{parentName:"h3"},"onPressIn")),Object(b.b)("p",null,"Called immediately when a touch is engaged, before ",Object(b.b)("inlineCode",{parentName:"p"},"onPressOut")," and ",Object(b.b)("inlineCode",{parentName:"p"},"onPress"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"onpressout"},Object(b.b)("inlineCode",{parentName:"h3"},"onPressOut")),Object(b.b)("p",null,"Called when a touch is released."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"pressevent"},"PressEvent")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"pressretentionoffset"},Object(b.b)("inlineCode",{parentName:"h3"},"pressRetentionOffset")),Object(b.b)("p",null,"Additional distance outside of this view in which a touch is considered a press before ",Object(b.b)("inlineCode",{parentName:"p"},"onPressOut")," is triggered."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"rect"},"Rect")," or number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"{ bottom: 30, left: 20, right: 20, top: 20 }"))))),Object(b.b)("h3",{id:"style"},Object(b.b)("inlineCode",{parentName:"h3"},"style")),Object(b.b)("p",null,"Either view styles or a function that receives a boolean reflecting whether the component is currently pressed and returns view styles."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"view-style-props"},"View Style")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("h3",{id:"testonly_pressed"},Object(b.b)("inlineCode",{parentName:"h3"},"testOnly_pressed")),Object(b.b)("p",null,"Used only for documentation or testing (e.g. snapshot testing)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(b.b)("h3",{id:"rippleconfig"},"RippleConfig"),Object(b.b)("p",null,"Ripple effect configuration for the ",Object(b.b)("inlineCode",{parentName:"p"},"android_ripple")," property."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"object")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Properties:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"),Object(b.b)("th",{parentName:"tr",align:null},"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"color"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"colors"},"color")),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Defines the color of the ripple effect.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"borderless"),Object(b.b)("td",{parentName:"tr",align:null},"boolean"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Defines if ripple effect should not include border.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"radius"),Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No"),Object(b.b)("td",{parentName:"tr",align:null},"Defines the radius of the ripple effect.")))))}s.isMDXComponent=!0}}]);
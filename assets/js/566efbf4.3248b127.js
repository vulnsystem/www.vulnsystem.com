(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||h[b]||a;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},492:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(4),o=n(10),a=(n(0),n(1181)),i={id:"gesture-responder-system",title:"Gesture Responder System"},l={unversionedId:"gesture-responder-system",id:"version-0.60/gesture-responder-system",isDocsHomePage:!1,title:"Gesture Responder System",description:"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches.",source:"@site/versioned_docs/version-0.60/gesture-responder-system.md",slug:"/gesture-responder-system",permalink:"/docs/0.60/gesture-responder-system",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/gesture-responder-system.md",version:"0.60",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.60/docs",previous:{title:"Performance",permalink:"/docs/0.60/performance"},next:{title:"JavaScript Environment",permalink:"/docs/0.60/javascript-environment"}},s=[{value:"Best Practices",id:"best-practices",children:[]},{value:"TouchableHighlight and Touchable*",id:"touchablehighlight-and-touchable",children:[]},{value:"Responder Lifecycle",id:"responder-lifecycle",children:[{value:"Capture ShouldSet Handlers",id:"capture-shouldset-handlers",children:[]},{value:"PanResponder",id:"panresponder",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The gesture responder system manages the lifecycle of gestures in your app. A touch can go through several phases as the app determines what the user's intention is. For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping. This can even change during the duration of a touch. There can also be multiple simultaneous touches."),Object(a.b)("p",null,"The touch responder system is needed to allow components to negotiate these touch interactions without any additional knowledge about their parent or child components."),Object(a.b)("h3",{id:"best-practices"},"Best Practices"),Object(a.b)("p",null,"To make your app feel great, every action should have the following attributes:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Feedback/highlighting- show the user what is handling their touch, and what will happen when they release the gesture"),Object(a.b)("li",{parentName:"ul"},"Cancel-ability- when making an action, the user should be able to abort it mid-touch by dragging their finger away")),Object(a.b)("p",null,"These features make users more comfortable while using an app, because it allows people to experiment and interact without fear of making mistakes."),Object(a.b)("h3",{id:"touchablehighlight-and-touchable"},"TouchableHighlight and Touchable","*"),Object(a.b)("p",null,"The responder system can be complicated to use. So we have provided an abstract ",Object(a.b)("inlineCode",{parentName:"p"},"Touchable"),' implementation for things that should be "tappable". This uses the responder system and allows you to configure tap interactions declaratively. Use ',Object(a.b)("inlineCode",{parentName:"p"},"TouchableHighlight")," anywhere where you would use a button or link on web."),Object(a.b)("h2",{id:"responder-lifecycle"},"Responder Lifecycle"),Object(a.b)("p",null,"A view can become the touch responder by implementing the correct negotiation methods. There are two methods to ask the view if it wants to become responder:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onStartShouldSetResponder: (evt) => true,")," - Does this view want to become responder on the start of a touch?"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onMoveShouldSetResponder: (evt) => true,"),' - Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?')),Object(a.b)("p",null,"If the View returns true and attempts to become the responder, one of the following will happen:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onResponderGrant: (evt) => {}")," - The View is now responding for touch events. This is the time to highlight and show the user what is happening"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onResponderReject: (evt) => {}")," - Something else is the responder right now and will not release it")),Object(a.b)("p",null,"If the view is responding, the following handlers can be called:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onResponderMove: (evt) => {}")," - The user is moving their finger"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onResponderRelease: (evt) => {}"),' - Fired at the end of the touch, ie "touchUp"'),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onResponderTerminationRequest: (evt) => true")," - Something else wants to become responder. Should this view release the responder? Returning true allows release"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onResponderTerminate: (evt) => {}")," - The responder has been taken from the View. Might be taken by other views after a call to ",Object(a.b)("inlineCode",{parentName:"li"},"onResponderTerminationRequest"),", or might be taken by the OS without asking (happens with control center/ notification center on iOS)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"evt")," is a synthetic touch event with the following form:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"nativeEvent"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"changedTouches")," - Array of all touch events that have changed since the last event"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"identifier")," - The ID of the touch"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"locationX")," - The X position of the touch, relative to the element"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"locationY")," - The Y position of the touch, relative to the element"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pageX")," - The X position of the touch, relative to the root element"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pageY")," - The Y position of the touch, relative to the root element"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"target")," - The node id of the element receiving the touch event"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"timestamp")," - A time identifier for the touch, useful for velocity calculation"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"touches")," - Array of all current touches on the screen")))),Object(a.b)("h3",{id:"capture-shouldset-handlers"},"Capture ShouldSet Handlers"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"onStartShouldSetResponder")," and ",Object(a.b)("inlineCode",{parentName:"p"},"onMoveShouldSetResponder")," are called with a bubbling pattern, where the deepest node is called first. That means that the deepest component will become responder when multiple Views return true for ",Object(a.b)("inlineCode",{parentName:"p"},"*ShouldSetResponder")," handlers. This is desirable in most cases, because it makes sure all controls and buttons are usable."),Object(a.b)("p",null,"However, sometimes a parent will want to make sure that it becomes responder. This can be handled by using the capture phase. Before the responder system bubbles up from the deepest component, it will do a capture phase, firing ",Object(a.b)("inlineCode",{parentName:"p"},"on*ShouldSetResponderCapture"),". So if a parent View wants to prevent the child from becoming responder on a touch start, it should have a ",Object(a.b)("inlineCode",{parentName:"p"},"onStartShouldSetResponderCapture")," handler which returns true."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onStartShouldSetResponderCapture: (evt) => true,")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"View.props.onMoveShouldSetResponderCapture: (evt) => true,"))),Object(a.b)("h3",{id:"panresponder"},"PanResponder"),Object(a.b)("p",null,"For higher-level gesture interpretation, check out ",Object(a.b)("a",{parentName:"p",href:"/docs/0.60/panresponder"},"PanResponder"),"."))}p.isMDXComponent=!0}}]);
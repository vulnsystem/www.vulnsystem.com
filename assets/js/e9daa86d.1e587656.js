(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{1080:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(4),a=n(10),o=(n(0),n(1181)),i={id:"fast-refresh",title:"Fast Refresh"},s={unversionedId:"fast-refresh",id:"version-0.64/fast-refresh",isDocsHomePage:!1,title:"Fast Refresh",description:'Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. With Fast Refresh enabled, most edits should be visible within a second or two.',source:"@site/versioned_docs/version-0.64/fast-refresh.md",slug:"/fast-refresh",permalink:"/docs/fast-refresh",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/fast-refresh.md",version:"0.64",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.64/docs",previous:{title:"Running On Device",permalink:"/docs/running-on-device"},next:{title:"Debugging",permalink:"/docs/debugging"}},l=[{value:"How It Works",id:"how-it-works",children:[]},{value:"Error Resilience",id:"error-resilience",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Tips",id:"tips",children:[]},{value:"Fast Refresh and Hooks",id:"fast-refresh-and-hooks",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. With Fast Refresh enabled, most edits should be visible within a second or two.'),Object(o.b)("h2",{id:"how-it-works"},"How It Works"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you edit a module that ",Object(o.b)("strong",{parentName:"li"},"only exports React component(s)"),", Fast Refresh will update the code only for that module, and re-render your component. You can edit anything in that file, including styles, rendering logic, event handlers, or effects."),Object(o.b)("li",{parentName:"ul"},"If you edit a module with exports that ",Object(o.b)("em",{parentName:"li"},"aren't")," React components, Fast Refresh will re-run both that module, and the other modules importing it. So if both ",Object(o.b)("inlineCode",{parentName:"li"},"Button.js")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Modal.js")," import ",Object(o.b)("inlineCode",{parentName:"li"},"Theme.js"),", editing ",Object(o.b)("inlineCode",{parentName:"li"},"Theme.js")," will update both components."),Object(o.b)("li",{parentName:"ul"},"Finally, if you ",Object(o.b)("strong",{parentName:"li"},"edit a file")," that's ",Object(o.b)("strong",{parentName:"li"},"imported by modules outside of the React tree"),", Fast Refresh ",Object(o.b)("strong",{parentName:"li"},"will fall back to doing a full reload"),". You might have a file which renders a React component but also exports a value that is imported by a ",Object(o.b)("strong",{parentName:"li"},"non-React component"),". For example, maybe your component also exports a constant, and a non-React utility module imports it. In that case, consider migrating the query to a separate file and importing it into both files. This will re-enable Fast Refresh to work. Other cases can usually be solved in a similar way.")),Object(o.b)("h2",{id:"error-resilience"},"Error Resilience"),Object(o.b)("p",null,"If you make a ",Object(o.b)("strong",{parentName:"p"},"syntax error")," during a Fast Refresh session, you can fix it and save the file again. The redbox will disappear. Modules with syntax errors are prevented from running, so you won't need to reload the app."),Object(o.b)("p",null,"If you make a ",Object(o.b)("strong",{parentName:"p"},"runtime error during the module initialization")," (for example, typing ",Object(o.b)("inlineCode",{parentName:"p"},"Style.create")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"StyleSheet.create"),"), the Fast Refresh session will continue once you fix the error. The redbox will disappear, and the module will be updated."),Object(o.b)("p",null,"If you make a mistake that leads to a ",Object(o.b)("strong",{parentName:"p"},"runtime error inside your component"),", the Fast Refresh session will ",Object(o.b)("em",{parentName:"p"},"also")," continue after you fix the error. In that case, React will remount your application using the updated code."),Object(o.b)("p",null,"If you have ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/error-boundaries.html"},"error boundaries")," in your app (which is a good idea for graceful failures in production), they will retry rendering on the next edit after a redbox. In that sense, having an error boundary can prevent you from always getting kicked out to the root app screen. However, keep in mind that error boundaries shouldn't be ",Object(o.b)("em",{parentName:"p"},"too")," granular. They are used by React in production, and should always be designed intentionally."),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("p",null,"Fast Refresh tries to preserve local React state in the component you're editing, but only if it's safe to do so. Here's a few reasons why you might see local state being reset on every edit to a file:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Local state is not preserved for class components (only function components and Hooks preserve state)."),Object(o.b)("li",{parentName:"ul"},"The module you're editing might have ",Object(o.b)("em",{parentName:"li"},"other")," exports in addition to a React component."),Object(o.b)("li",{parentName:"ul"},"Sometimes, a module would export the result of calling higher-order component like ",Object(o.b)("inlineCode",{parentName:"li"},"createNavigationContainer(MyScreen)"),". If the returned component is a class, state will be reset.")),Object(o.b)("p",null,"In the longer term, as more of your codebase moves to function components and Hooks, you can expect state to be preserved in more cases."),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fast Refresh preserves React local state in function components (and Hooks) by default."),Object(o.b)("li",{parentName:"ul"},"Sometimes you might want to ",Object(o.b)("em",{parentName:"li"},"force")," the state to be reset, and a component to be remounted. For example, this can be handy if you're tweaking an animation that only happens on mount. To do this, you can add ",Object(o.b)("inlineCode",{parentName:"li"},"// @refresh reset")," anywhere in the file you're editing. This directive is local to the file, and instructs Fast Refresh to remount components defined in that file on every edit.")),Object(o.b)("h2",{id:"fast-refresh-and-hooks"},"Fast Refresh and Hooks"),Object(o.b)("p",null,"When possible, Fast Refresh attempts to preserve the state of your component between edits. In particular, ",Object(o.b)("inlineCode",{parentName:"p"},"useState")," and ",Object(o.b)("inlineCode",{parentName:"p"},"useRef")," preserve their previous values as long as you don't change their arguments or the order of the Hook calls."),Object(o.b)("p",null,"Hooks with dependencies\u2014such as ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect"),", ",Object(o.b)("inlineCode",{parentName:"p"},"useMemo"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"useCallback"),"\u2014will ",Object(o.b)("em",{parentName:"p"},"always")," update during Fast Refresh. Their list of dependencies will be ignored while Fast Refresh is happening."),Object(o.b)("p",null,"For example, when you edit ",Object(o.b)("inlineCode",{parentName:"p"},"useMemo(() => x * 2, [x])")," to ",Object(o.b)("inlineCode",{parentName:"p"},"useMemo(() => x * 10, [x])"),", it will re-run even though ",Object(o.b)("inlineCode",{parentName:"p"},"x")," (the dependency) has not changed. If React didn't do that, your edit wouldn't reflect on the screen!"),Object(o.b)("p",null,"Sometimes, this can lead to unexpected results. For example, even a ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," with an empty array of dependencies would still re-run once during Fast Refresh. However, writing code resilient to an occasional re-running of ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," is a good practice even without Fast Refresh. This makes it easier for you to later introduce new dependencies to it."))}d.isMDXComponent=!0},1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
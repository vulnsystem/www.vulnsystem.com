(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=a.a.createContext({}),b=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,r=s(e,["components","mdxType","originalType","parentName"]),d=b(n),u=i,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return n?a.a.createElement(m,o(o({ref:t},r),{},{components:n})):a.a.createElement(m,o({ref:t},r))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var r=2;r<l;r++)c[r]=n[r];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},595:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(4),a=n(10),l=(n(0),n(1181)),c={id:"accessibility",title:"Accessibility",description:"Create mobile apps accessible to assistive technology with React Native's suite of APIs designed to work with Android and iOS."},o={unversionedId:"accessibility",id:"version-0.64/accessibility",isDocsHomePage:!1,title:"Accessibility",description:"Create mobile apps accessible to assistive technology with React Native's suite of APIs designed to work with Android and iOS.",source:"@site/versioned_docs/version-0.64/accessibility.md",slug:"/accessibility",permalink:"/docs/accessibility",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/accessibility.md",version:"0.64",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.64/docs",previous:{title:"Gesture Responder System",permalink:"/docs/gesture-responder-system"},next:{title:"Performance Overview",permalink:"/docs/performance"}},s=[{value:"Accessibility properties",id:"accessibility-properties",children:[{value:"<code>accessible</code>",id:"accessible",children:[]},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[]},{value:"<code>accessibilityHint</code>",id:"accessibilityhint",children:[]},{value:'<code>accessibilityIgnoresInvertColors</code> <div class="label ios">iOS</div>',id:"accessibilityignoresinvertcolors-ios",children:[]},{value:'<code>accessibilityLiveRegion</code> <div class="label android">Android</div>',id:"accessibilityliveregion-android",children:[]},{value:"<code>accessibilityRole</code>",id:"accessibilityrole",children:[]},{value:"<code>accessibilityState</code>",id:"accessibilitystate",children:[]},{value:"<code>accessibilityValue</code>",id:"accessibilityvalue",children:[]},{value:'<code>accessibilityViewIsModal</code> <div class="label ios">iOS</div>',id:"accessibilityviewismodal-ios",children:[]},{value:'<code>accessibilityElementsHidden</code> <div class="label ios">iOS</div>',id:"accessibilityelementshidden-ios",children:[]},{value:'<code>importantForAccessibility</code> <div class="label android">Android</div>',id:"importantforaccessibility-android",children:[]},{value:'<code>onAccessibilityEscape</code> <div class="label ios">iOS</div>',id:"onaccessibilityescape-ios",children:[]},{value:"<code>onAccessibilityTap</code>",id:"onaccessibilitytap",children:[]},{value:'<code>onMagicTap</code> <div class="label ios">iOS</div>',id:"onmagictap-ios",children:[]}]},{value:"Accessibility Actions",id:"accessibility-actions",children:[]},{value:"Checking if a Screen Reader is Enabled",id:"checking-if-a-screen-reader-is-enabled",children:[]},{value:'Sending Accessibility Events <div class="label android">Android</div>',id:"sending-accessibility-events-android",children:[]},{value:'Testing TalkBack Support <div class="label android">Android</div>',id:"testing-talkback-support-android",children:[]},{value:'Testing VoiceOver Support <div class="label ios">iOS</div>',id:"testing-voiceover-support-ios",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],r={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Both Android and iOS provide APIs for integrating apps with assistive technologies like the bundled screen readers VoiceOver (iOS) and TalkBack (Android). React Native has complementary APIs that let your app accommodate all users."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Android and iOS differ slightly in their approaches, and thus the React Native implementations may vary by platform.")),Object(l.b)("h2",{id:"accessibility-properties"},"Accessibility properties"),Object(l.b)("h3",{id:"accessible"},Object(l.b)("inlineCode",{parentName:"h3"},"accessible")),Object(l.b)("p",null,"When ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component. By default, all touchable elements are accessible."),Object(l.b)("p",null,"On Android, ",Object(l.b)("inlineCode",{parentName:"p"},"accessible={true}")," property for a react-native View will be translated into native ",Object(l.b)("inlineCode",{parentName:"p"},"focusable={true}"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<View accessible={true}>\n  <Text>text one</Text>\n  <Text>text two</Text>\n</View>\n")),Object(l.b)("p",null,"In the above example, we can't get accessibility focus separately on 'text one' and 'text two'. Instead we get focus on a parent view with 'accessible' property."),Object(l.b)("h3",{id:"accessibilitylabel"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(l.b)("p",null,"When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view, so that people who use VoiceOver know what element they have selected. VoiceOver will read this string when a user selects the associated element."),Object(l.b)("p",null,"To use, set the ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityLabel")," property to a custom string on your View, Text or Touchable:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<TouchableOpacity\n  accessible={true}\n  accessibilityLabel="Tap me!"\n  onPress={onPress}>\n  <View style={styles.button}>\n    <Text style={styles.buttonText}>Press me!</Text>\n  </View>\n</TouchableOpacity>\n')),Object(l.b)("p",null,"In the above example, the ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityLabel"),' on the TouchableOpacity element would default to "Press me!". The label is constructed by concatenating all Text node children separated by spaces.'),Object(l.b)("h3",{id:"accessibilityhint"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityHint")),Object(l.b)("p",null,"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label."),Object(l.b)("p",null,"To use, set the ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityHint")," property to a custom string on your View, Text or Touchable:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<TouchableOpacity\n  accessible={true}\n  accessibilityLabel="Go back"\n  accessibilityHint="Navigates to the previous screen"\n  onPress={onPress}>\n  <View style={styles.button}>\n    <Text style={styles.buttonText}>Back</Text>\n  </View>\n</TouchableOpacity>\n')),Object(l.b)("p",null,"iOS In the above example, VoiceOver will read the hint after the label, if the user has hints enabled in the device's VoiceOver settings. Read more about guidelines for accessibilityHint in the ",Object(l.b)("a",{parentName:"p",href:"https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint"},"iOS Developer Docs")),Object(l.b)("p",null,"Android In the above example, TalkBack will read the hint after the label. At this time, hints cannot be turned off on Android."),Object(l.b)("h3",{id:"accessibilityignoresinvertcolors-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityIgnoresInvertColors")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"Inverting screen colors is an Accessibility feature that makes the iPhone and iPad easier on the eyes for some people with a sensitivity to brightness, easier to distinguish for some people with color blindness, and easier to make out for some people with low vision. However, sometimes you have views such as photos that you don't want to be inverted. In this case, you can set this property to be false so that these specific views won't have their colors inverted."),Object(l.b)("h3",{id:"accessibilityliveregion-android"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityLiveRegion")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"When components dynamically change, we want TalkBack to alert the end user. This is made possible by the ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityLiveRegion")," property. It can be set to ",Object(l.b)("inlineCode",{parentName:"p"},"none"),", ",Object(l.b)("inlineCode",{parentName:"p"},"polite")," and ",Object(l.b)("inlineCode",{parentName:"p"},"assertive"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"none")," Accessibility services should not announce changes to this view."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"polite")," Accessibility services should announce changes to this view."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"assertive")," Accessibility services should interrupt ongoing speech to immediately announce changes to this view.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'<TouchableWithoutFeedback onPress={addOne}>\n  <View style={styles.embedded}>\n    <Text>Click me</Text>\n  </View>\n</TouchableWithoutFeedback>\n<Text accessibilityLiveRegion="polite">\n  Clicked {count} times\n</Text>\n')),Object(l.b)("p",null,"In the above example method ",Object(l.b)("inlineCode",{parentName:"p"},"addOne")," changes the state variable ",Object(l.b)("inlineCode",{parentName:"p"},"count"),". As soon as an end user clicks the TouchableWithoutFeedback, TalkBack reads text in the Text view because of its ",Object(l.b)("inlineCode",{parentName:"p"},'accessibilityLiveRegion="polite"')," property."),Object(l.b)("h3",{id:"accessibilityrole"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityRole")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," communicates the purpose of a component to the user of an assistive technology."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityRole")," can be one of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"adjustable"),' Used when an element can be "adjusted" (e.g. a slider).'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"alert")," Used when an element contains important text to be presented to the user."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"button")," Used when the element should be treated as a button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"checkbox")," Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"combobox")," Used when an element represents a combo box, which allows the user to select among several choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"header")," Used when an element acts as a header for a content section (e.g. the title of a navigation bar)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"image")," Used when the element should be treated as an image. Can be combined with button or link, for example."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"imagebutton")," Used when the element should be treated as a button and is also an image."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"keyboardkey")," Used when the element acts as a keyboard key."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"link")," Used when the element should be treated as a link."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"menu")," Used when the component is a menu of choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"menubar")," Used when a component is a container of multiple menus."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"menuitem")," Used to represent an item within a menu."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"none")," Used when the element has no role."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"progressbar")," Used to represent a component which indicates progress of a task."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"radio")," Used to represent a radio button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"radiogroup")," Used to represent a group of radio buttons."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"scrollbar")," Used to represent a scroll bar."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"search")," Used when the text field element should also be treated as a search field."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"spinbutton")," Used to represent a button which opens a list of choices."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"summary")," Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"switch")," Used to represent a switch which can be turned on and off."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"tab")," Used to represent a tab."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"tablist")," Used to represent a list of tabs."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"text")," Used when the element should be treated as static text that cannot change."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"timer")," Used to represent a timer."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"toolbar")," Used to represent a tool bar (a container of action buttons or components).")),Object(l.b)("h3",{id:"accessibilitystate"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityState")),Object(l.b)("p",null,"Describes the current state of a component to the user of an assistive technology."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityState")," is an object. It contains the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"disabled"),Object(l.b)("td",{parentName:"tr",align:null},"Indicates whether the element is disabled or not."),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"selected"),Object(l.b)("td",{parentName:"tr",align:null},"Indicates whether a selectable element is currently selected or not."),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"checked"),Object(l.b)("td",{parentName:"tr",align:null},'Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.'),Object(l.b)("td",{parentName:"tr",align:null},"boolean or 'mixed'"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"busy"),Object(l.b)("td",{parentName:"tr",align:null},"Indicates whether an element is currently busy or not."),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"expanded"),Object(l.b)("td",{parentName:"tr",align:null},"Indicates whether an expandable element is currently expanded or collapsed."),Object(l.b)("td",{parentName:"tr",align:null},"boolean"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("p",null,"To use, set the ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityState")," to an object with a specific definition."),Object(l.b)("h3",{id:"accessibilityvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityValue")),Object(l.b)("p",null,"Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars, it contains range information (minimum, current, and maximum)."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"accessibilityValue")," is an object. It contains the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"min"),Object(l.b)("td",{parentName:"tr",align:null},"The minimum value of this component's range."),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"Required if ",Object(l.b)("inlineCode",{parentName:"td"},"now")," is set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"max"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum value of this component's range."),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"Required if ",Object(l.b)("inlineCode",{parentName:"td"},"now")," is set.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"now"),Object(l.b)("td",{parentName:"tr",align:null},"The current value of this component's range."),Object(l.b)("td",{parentName:"tr",align:null},"integer"),Object(l.b)("td",{parentName:"tr",align:null},"No")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"text"),Object(l.b)("td",{parentName:"tr",align:null},"A textual description of this component's value. Will override ",Object(l.b)("inlineCode",{parentName:"td"},"min"),", ",Object(l.b)("inlineCode",{parentName:"td"},"now"),", and ",Object(l.b)("inlineCode",{parentName:"td"},"max")," if set."),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("h3",{id:"accessibilityviewismodal-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityViewIsModal")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver."),Object(l.b)("p",null,"For example, in a window that contains sibling views ",Object(l.b)("inlineCode",{parentName:"p"},"A")," and ",Object(l.b)("inlineCode",{parentName:"p"},"B"),", setting ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityViewIsModal")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," on view ",Object(l.b)("inlineCode",{parentName:"p"},"B")," causes VoiceOver to ignore the elements in the view ",Object(l.b)("inlineCode",{parentName:"p"},"A"),". On the other hand, if view ",Object(l.b)("inlineCode",{parentName:"p"},"B")," contains a child view ",Object(l.b)("inlineCode",{parentName:"p"},"C")," and you set ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityViewIsModal")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," on view ",Object(l.b)("inlineCode",{parentName:"p"},"C"),", VoiceOver does not ignore the elements in view ",Object(l.b)("inlineCode",{parentName:"p"},"A"),"."),Object(l.b)("h3",{id:"accessibilityelementshidden-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityElementsHidden")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"A Boolean value indicating whether the accessibility elements contained within this accessibility element are hidden."),Object(l.b)("p",null,"For example, in a window that contains sibling views ",Object(l.b)("inlineCode",{parentName:"p"},"A")," and ",Object(l.b)("inlineCode",{parentName:"p"},"B"),", setting ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityElementsHidden")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," on view ",Object(l.b)("inlineCode",{parentName:"p"},"B")," causes VoiceOver to ignore the elements in the view ",Object(l.b)("inlineCode",{parentName:"p"},"B"),". This is similar to the Android property ",Object(l.b)("inlineCode",{parentName:"p"},'importantForAccessibility="no-hide-descendants"'),"."),Object(l.b)("h3",{id:"importantforaccessibility-android"},Object(l.b)("inlineCode",{parentName:"h3"},"importantForAccessibility")," ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"In the case of two overlapping UI components with the same parent, default accessibility focus can have unpredictable behavior. The ",Object(l.b)("inlineCode",{parentName:"p"},"importantForAccessibility")," property will resolve this by controlling if a view fires accessibility events and if it is reported to accessibility services. It can be set to ",Object(l.b)("inlineCode",{parentName:"p"},"auto"),", ",Object(l.b)("inlineCode",{parentName:"p"},"yes"),", ",Object(l.b)("inlineCode",{parentName:"p"},"no")," and ",Object(l.b)("inlineCode",{parentName:"p"},"no-hide-descendants")," (the last value will force accessibility services to ignore the component and all of its children)."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<View style={styles.container}>\n  <View\n    style={[styles.layout, { backgroundColor: 'green' }]}\n    importantForAccessibility=\"yes\">\n    <Text>First layout</Text>\n  </View>\n  <View\n    style={[styles.layout, { backgroundColor: 'yellow' }]}\n    importantForAccessibility=\"no-hide-descendants\">\n    <Text>Second layout</Text>\n  </View>\n</View>\n")),Object(l.b)("p",null,"In the above example, the ",Object(l.b)("inlineCode",{parentName:"p"},"yellow")," layout and its descendants are completely invisible to TalkBack and all other accessibility services. So we can use overlapping views with the same parent without confusing TalkBack."),Object(l.b)("h3",{id:"onaccessibilityescape-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"onAccessibilityEscape")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,'Assign this property to a custom function which will be called when someone performs the "escape" gesture, which is a two finger Z shaped gesture. An escape function should move back hierarchically in the user interface. This can mean moving up or back in a navigation hierarchy or dismissing a modal user interface. If the selected element does not have an ',Object(l.b)("inlineCode",{parentName:"p"},"onAccessibilityEscape")," function, the system will attempt to traverse up the view hierarchy until it finds a view that does or bonk to indicate it was unable to find one."),Object(l.b)("h3",{id:"onaccessibilitytap"},Object(l.b)("inlineCode",{parentName:"h3"},"onAccessibilityTap")),Object(l.b)("p",null,"Use this property to assign a custom function to be called when someone activates an accessible element by double tapping on it while it's selected."),Object(l.b)("h3",{id:"onmagictap-ios"},Object(l.b)("inlineCode",{parentName:"h3"},"onMagicTap")," ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,'Assign this property to a custom function which will be called when someone performs the "magic tap" gesture, which is a double-tap with two fingers. A magic tap function should perform the most relevant action a user could take on a component. In the Phone app on iPhone, a magic tap answers a phone call, or ends the current one. If the selected element does not have an ',Object(l.b)("inlineCode",{parentName:"p"},"onMagicTap")," function, the system will traverse up the view hierarchy until it finds a view that does."),Object(l.b)("h2",{id:"accessibility-actions"},"Accessibility Actions"),Object(l.b)("p",null,"Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. In order to support accessibility actions, a component must do two things:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Define the list of actions it supports via the ",Object(l.b)("inlineCode",{parentName:"li"},"accessibilityActions")," property."),Object(l.b)("li",{parentName:"ul"},"Implement an ",Object(l.b)("inlineCode",{parentName:"li"},"onAccessibilityAction")," function to handle action requests.")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"accessibilityActions")," property should contain a list of action objects. Each action object should contain the following fields:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"name"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"label"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"No")))),Object(l.b)("p",null,"Actions either represent standard actions, such as clicking a button or adjusting a slider, or custom actions specific to a given component such as deleting an email message. The ",Object(l.b)("inlineCode",{parentName:"p"},"name")," field is required for both standard and custom actions, but ",Object(l.b)("inlineCode",{parentName:"p"},"label")," is optional for standard actions."),Object(l.b)("p",null,"When adding support for standard actions, ",Object(l.b)("inlineCode",{parentName:"p"},"name")," must be one of the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'magicTap'")," - iOS only - While VoiceOver focus is on or inside the component, the user double tapped with two fingers."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'escape'")," - iOS only - While VoiceOver focus is on or inside the component, the user performed a two finger scrub gesture (left, right, left)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'activate'")," - Activate the component. Typically this should perform the same action as when the user touches or clicks the component when not using an assistive technology. This is generated when a screen reader user double taps the component."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'increment'")," - Increment an adjustable component. On iOS, VoiceOver generates this action when the component has a role of ",Object(l.b)("inlineCode",{parentName:"li"},"'adjustable'")," and the user places focus on it and swipes upward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume up button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'decrement'")," - Decrement an adjustable component. On iOS, VoiceOver generates this action when the component has a role of ",Object(l.b)("inlineCode",{parentName:"li"},"'adjustable'")," and the user places focus on it and swipes downward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume down button."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'longpress'")," - Android only - This action is generated when the user places accessibility focus on the component and double tap and holds one finger on the screen. Typically, this should perform the same action as when the user holds down one finger on the component while not using an assistive technology.")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"label")," field is optional for standard actions, and is often unused by assistive technologies. For custom actions, it is a localized string containing a description of the action to be presented to the user."),Object(l.b)("p",null,"To handle action requests, a component must implement an ",Object(l.b)("inlineCode",{parentName:"p"},"onAccessibilityAction")," function. The only argument to this function is an event containing the name of the action to perform. The below example from RNTester shows how to create a component which defines and handles several custom actions."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"<View\n  accessible={true}\n  accessibilityActions={[\n    { name: 'cut', label: 'cut' },\n    { name: 'copy', label: 'copy' },\n    { name: 'paste', label: 'paste' }\n  ]}\n  onAccessibilityAction={(event) => {\n    switch (event.nativeEvent.actionName) {\n      case 'cut':\n        Alert.alert('Alert', 'cut action success');\n        break;\n      case 'copy':\n        Alert.alert('Alert', 'copy action success');\n        break;\n      case 'paste':\n        Alert.alert('Alert', 'paste action success');\n        break;\n    }\n  }}\n/>\n")),Object(l.b)("h2",{id:"checking-if-a-screen-reader-is-enabled"},"Checking if a Screen Reader is Enabled"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API allows you to determine whether or not a screen reader is currently active. See the ",Object(l.b)("a",{parentName:"p",href:"accessibilityinfo"},"AccessibilityInfo documentation")," for details."),Object(l.b)("h2",{id:"sending-accessibility-events-android"},"Sending Accessibility Events ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,"Sometimes it is useful to trigger an accessibility event on a UI component (i.e. when a custom view appears on a screen or set accessibility focus to a view). Native UIManager module exposes a method \u2018sendAccessibilityEvent\u2019 for this purpose. It takes two arguments: view tag and a type of an event. The supported event types are ",Object(l.b)("inlineCode",{parentName:"p"},"typeWindowStateChanged"),", ",Object(l.b)("inlineCode",{parentName:"p"},"typeViewFocused")," and ",Object(l.b)("inlineCode",{parentName:"p"},"typeViewClicked"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"import {\n  Platform,\n  UIManager,\n  findNodeHandle\n} from 'react-native';\n\nif (Platform.OS === 'android') {\n  UIManager.sendAccessibilityEvent(\n    findNodeHandle(this),\n    UIManager.AccessibilityEventTypes.typeViewFocused\n  );\n}\n")),Object(l.b)("h2",{id:"testing-talkback-support-android"},"Testing TalkBack Support ",Object(l.b)("div",{class:"label android"},"Android")),Object(l.b)("p",null,'To enable TalkBack, go to the Settings app on your Android device or emulator. Tap Accessibility, then TalkBack. Toggle the "Use service" switch to enable or disable it.'),Object(l.b)("p",null,"P.S. Android emulator doesn\u2019t have TalkBack by default. To install it:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Download TalkBack file here: ",Object(l.b)("a",{parentName:"li",href:"https://google-talkback.en.uptodown.com/android"},"https://google-talkback.en.uptodown.com/android")),Object(l.b)("li",{parentName:"ol"},"Drag the downloaded ",Object(l.b)("inlineCode",{parentName:"li"},".apk")," file into the emulator")),Object(l.b)("p",null,"You can use the volume key shortcut to toggle TalkBack. To turn on the volume key shortcut, go to the Settings app, then Accessibility. At the top, turn on Volume key shortcut."),Object(l.b)("p",null,"To use the volume key shortcut, press both volume keys for 3 seconds to start an accessibility tool."),Object(l.b)("p",null,"Additionally, if you prefer, you can toggle TalkBack via command line with:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# disable\nadb shell settings put secure enabled_accessibility_services com.android.talkback/com.google.android.marvin.talkback.TalkBackService\n\n# enable\nadb shell settings put secure enabled_accessibility_services com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService\n")),Object(l.b)("h2",{id:"testing-voiceover-support-ios"},"Testing VoiceOver Support ",Object(l.b)("div",{class:"label ios"},"iOS")),Object(l.b)("p",null,"To enable VoiceOver, go to the Settings app on your iOS device (it's not available for simulator). Tap General, then Accessibility. There you will find many tools that people use to make their devices more usable, such as bolder text, increased contrast, and VoiceOver."),Object(l.b)("p",null,'To enable VoiceOver, tap on VoiceOver under "Vision" and toggle the switch that appears at the top.'),Object(l.b)("p",null,'At the very bottom of the Accessibility settings, there is an "Accessibility Shortcut". You can use this to toggle VoiceOver by triple clicking the Home button.'),Object(l.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://engineering.fb.com/ios/making-react-native-apps-accessible/"},"Making React Native Apps Accessible"))))}b.isMDXComponent=!0}}]);
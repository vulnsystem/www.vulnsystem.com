(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,s=p["".concat(i,".").concat(u)]||p[u]||m[u]||b;return n?r.a.createElement(s,l(l({ref:t},o),{},{components:n})):r.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1223:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"},425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(4),r=n(10),b=(n(0),n(1181)),i={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},l={unversionedId:"datepickerios",id:"version-0.61/datepickerios",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use @react-native-community/datetimepicker instead.",source:"@site/versioned_docs/version-0.61/datepickerios.md",slug:"/datepickerios",permalink:"/docs/0.61/datepickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/datepickerios.md",version:"0.61",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.61/components",previous:{title:"\ud83d\udea7 CheckBox",permalink:"/docs/0.61/checkbox"},next:{title:"DrawerLayoutAndroid",permalink:"/docs/0.61/drawerlayoutandroid"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onDateChange</code>",id:"ondatechange",children:[]},{value:"<code>maximumDate</code>",id:"maximumdate",children:[]},{value:"<code>minimumDate</code>",id:"minimumdate",children:[]},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>locale</code>",id:"locale",children:[]},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[]},{value:"<code>initialDate</code>",id:"initialdate",children:[]}]}],o={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(b.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-datetimepicker"},"@react-native-community/datetimepicker")," instead.")),Object(b.b)("p",null,"Use ",Object(b.b)("inlineCode",{parentName:"p"},"DatePickerIOS")," to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the ",Object(b.b)("inlineCode",{parentName:"p"},"onDateChange")," callback and update the ",Object(b.b)("inlineCode",{parentName:"p"},"date")," prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect ",Object(b.b)("inlineCode",{parentName:"p"},"props.date")," as the source of truth."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"DatePickerIOS")," has been merged with ",Object(b.b)("inlineCode",{parentName:"p"},"TimePickerAndroid")," and ",Object(b.b)("inlineCode",{parentName:"p"},"DatePickerAndroid")," into a single component called ",Object(b.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker"},"DateTimePicker")," and will be removed in a future release.")),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { DatePickerIOS, View, StyleSheet } from 'react-native';\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({ chosenDate: newDate });\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center'\n  }\n});\n")),Object(b.b)("center",null,Object(b.b)("img",{src:"/docs/assets/DatePickerIOS/example.gif",width:"360"})),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",{parentName:"p",href:"/docs/0.61/view#props"},"View Props"),"."),Object(b.b)("h3",{id:"date"},Object(b.b)("inlineCode",{parentName:"h3"},"date")),Object(b.b)("p",null,"The currently selected date."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onchange"},Object(b.b)("inlineCode",{parentName:"h3"},"onChange")),Object(b.b)("p",null,"Date change handler."),Object(b.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ondatechange"},Object(b.b)("inlineCode",{parentName:"h3"},"onDateChange")),Object(b.b)("p",null,"Date change handler."),Object(b.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"maximumdate"},Object(b.b)("inlineCode",{parentName:"h3"},"maximumDate")),Object(b.b)("p",null,"Maximum date."),Object(b.b)("p",null,"Restricts the range of possible date/time values."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("p",null,"Example with ",Object(b.b)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),Object(b.b)("center",null,Object(b.b)("img",{src:"/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),Object(b.b)("hr",null),Object(b.b)("h3",{id:"minimumdate"},Object(b.b)("inlineCode",{parentName:"h3"},"minimumDate")),Object(b.b)("p",null,"Minimum date."),Object(b.b)("p",null,"Restricts the range of possible date/time values."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("p",null,"See ",Object(b.b)("a",{parentName:"p",href:"/docs/0.61/datepickerios#maximumdate"},Object(b.b)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"minuteinterval"},Object(b.b)("inlineCode",{parentName:"h3"},"minuteInterval")),Object(b.b)("p",null,"The interval at which minutes can be selected."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("p",null,"Example with ",Object(b.b)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",Object(b.b)("inlineCode",{parentName:"p"},"10"),":"),Object(b.b)("center",null,Object(b.b)("img",{src:"/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),Object(b.b)("hr",null),Object(b.b)("h3",{id:"mode"},Object(b.b)("inlineCode",{parentName:"h3"},"mode")),Object(b.b)("p",null,"The date picker mode."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"enum('date', 'time', 'datetime', 'countdown')"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("p",null,"Example with ",Object(b.b)("inlineCode",{parentName:"p"},"mode")," set to ",Object(b.b)("inlineCode",{parentName:"p"},"date"),", ",Object(b.b)("inlineCode",{parentName:"p"},"time"),", and ",Object(b.b)("inlineCode",{parentName:"p"},"datetime"),": ",Object(b.b)("img",{src:n(1223).default})),Object(b.b)("hr",null),Object(b.b)("h3",{id:"locale"},Object(b.b)("inlineCode",{parentName:"h3"},"locale")),Object(b.b)("p",null,"The locale for the date picker. Value needs to be a ",Object(b.b)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"},"Locale ID"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"String"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"timezoneoffsetinminutes"},Object(b.b)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),Object(b.b)("p",null,"Timezone offset in minutes."),Object(b.b)("p",null,"By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 ","*"," 60."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"initialdate"},Object(b.b)("inlineCode",{parentName:"h3"},"initialDate")),Object(b.b)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Date"),Object(b.b)("td",{parentName:"tr",align:null},"No")))))}d.isMDXComponent=!0}}]);
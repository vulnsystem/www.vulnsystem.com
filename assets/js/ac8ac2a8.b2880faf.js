(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return s}));var l=a(0),c=a.n(l);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,c=function(e,t){if(null==e)return{};var a,l,c={},b=Object.keys(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(l=0;l<b.length;l++)a=b[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),n=function(e){var t=c.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=n(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,b=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=n(a),d=l,s=f["".concat(r,".").concat(d)]||f[d]||m[d]||b;return a?c.a.createElement(s,i(i({ref:t},p),{},{components:a})):c.a.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var b=a.length,r=new Array(b);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<b;p++)r[p]=a[p];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},831:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return n}));var l=a(4),c=a(10),b=(a(0),a(1181)),r={id:"colors",title:"Color Reference"},i={unversionedId:"colors",id:"version-0.61/colors",isDocsHomePage:!1,title:"Color Reference",description:"Components in React Native are styled using JavaScript. Color properties usually match how CSS works on the web.",source:"@site/versioned_docs/version-0.61/colors.md",slug:"/colors",permalink:"/docs/0.61/colors",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/colors.md",version:"0.61",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.61/docs",previous:{title:"Direct Manipulation",permalink:"/docs/0.61/direct-manipulation"},next:{title:"Integration with Existing Apps",permalink:"/docs/0.61/integration-with-existing-apps"}},o=[{value:"Red-green-blue",id:"red-green-blue",children:[]},{value:"Hue-saturation-lightness",id:"hue-saturation-lightness",children:[]},{value:"<code>transparent</code>",id:"transparent",children:[]},{value:"Named colors",id:"named-colors",children:[]}],p={toc:o};function n(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Components in React Native are ",Object(b.b)("a",{parentName:"p",href:"/docs/0.61/style"},"styled using JavaScript"),". Color properties usually match how ",Object(b.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"},"CSS works on the web"),"."),Object(b.b)("h3",{id:"red-green-blue"},"Red-green-blue"),Object(b.b)("p",null,"React Native supports ",Object(b.b)("inlineCode",{parentName:"p"},"rgb()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"rgba()")," in both hexadecimal and functional notation:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"'#f0f'")," (#rgb)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"'#ff00ff'")," (#rrggbb)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"'rgb(255, 0, 255)'"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"'rgba(255, 255, 255, 1.0)'"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"'#f0ff'")," (#rgba)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"p"},"'#ff00ff00'")," (#rrggbbaa)"))),Object(b.b)("h3",{id:"hue-saturation-lightness"},"Hue-saturation-lightness"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"hsl()")," and ",Object(b.b)("inlineCode",{parentName:"p"},"hsla()")," is supported in functional notation:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'hsl(360, 100%, 100%)'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'hsla(360, 100%, 100%, 1.0)'"))),Object(b.b)("h3",{id:"transparent"},Object(b.b)("inlineCode",{parentName:"h3"},"transparent")),Object(b.b)("p",null,"This is a shortcut for ",Object(b.b)("inlineCode",{parentName:"p"},"rgba(0,0,0,0)"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'transparent'"))),Object(b.b)("h3",{id:"named-colors"},"Named colors"),Object(b.b)("p",null,"You can also use color names as values. React Native follows the ",Object(b.b)("a",{parentName:"p",href:"http://www.w3.org/TR/css3-color/#svg-color"},"CSS3 specification"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f0f8ff/000000?text=+",alt:"#f0f8ff"})," ",Object(b.b)("color",{aliceblue:!0})," aliceblue (#f0f8ff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/faebd7/000000?text=+",alt:"#faebd7"})," ",Object(b.b)("color",{antiquewhite:!0})," antiquewhite (#faebd7)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00ffff/000000?text=+",alt:"#00ffff"})," ",Object(b.b)("color",{aqua:!0})," aqua (#00ffff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/7fffd4/000000?text=+",alt:"#7fffd4"})," ",Object(b.b)("color",{aquamarine:!0})," aquamarine (#7fffd4)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f0ffff/000000?text=+",alt:"#f0ffff"})," ",Object(b.b)("color",{azure:!0})," azure (#f0ffff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f5f5dc/000000?text=+",alt:"#f5f5dc"})," ",Object(b.b)("color",{beige:!0})," beige (#f5f5dc)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffe4c4/000000?text=+",alt:"#ffe4c4"})," ",Object(b.b)("color",{bisque:!0})," bisque (#ffe4c4)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/000000/000000?text=+",alt:"#000000"})," ",Object(b.b)("color",{black:!0})," black (#000000)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffebcd/000000?text=+",alt:"#ffebcd"})," ",Object(b.b)("color",{blanchedalmond:!0})," blanchedalmond (#ffebcd)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/0000ff/000000?text=+",alt:"#0000ff"})," ",Object(b.b)("color",{blue:!0})," blue (#0000ff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/8a2be2/000000?text=+",alt:"#8a2be2"})," ",Object(b.b)("color",{blueviolet:!0})," blueviolet (#8a2be2)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/a52a2a/000000?text=+",alt:"#a52a2a"})," ",Object(b.b)("color",{brown:!0})," brown (#a52a2a)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/deb887/000000?text=+",alt:"#deb887"})," ",Object(b.b)("color",{burlywood:!0})," burlywood (#deb887)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/5f9ea0/000000?text=+",alt:"#5f9ea0"})," ",Object(b.b)("color",{cadetblue:!0})," cadetblue (#5f9ea0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/7fff00/000000?text=+",alt:"#7fff00"})," ",Object(b.b)("color",{chartreuse:!0})," chartreuse (#7fff00)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/d2691e/000000?text=+",alt:"#d2691e"})," ",Object(b.b)("color",{chocolate:!0})," chocolate (#d2691e)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff7f50/000000?text=+",alt:"#ff7f50"})," ",Object(b.b)("color",{coral:!0})," coral (#ff7f50)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/6495ed/000000?text=+",alt:"#6495ed"})," ",Object(b.b)("color",{cornflowerblue:!0})," cornflowerblue (#6495ed)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fff8dc/000000?text=+",alt:"#fff8dc"})," ",Object(b.b)("color",{cornsilk:!0})," cornsilk (#fff8dc)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/dc143c/000000?text=+",alt:"#dc143c"})," ",Object(b.b)("color",{crimson:!0})," crimson (#dc143c)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00ffff/000000?text=+",alt:"#00ffff"})," ",Object(b.b)("color",{cyan:!0})," cyan (#00ffff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00008b/000000?text=+",alt:"#00008b"})," ",Object(b.b)("color",{darkblue:!0})," darkblue (#00008b)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/008b8b/000000?text=+",alt:"#008b8b"})," ",Object(b.b)("color",{darkcyan:!0})," darkcyan (#008b8b)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/b8860b/000000?text=+",alt:"#b8860b"})," ",Object(b.b)("color",{darkgoldenrod:!0})," darkgoldenrod (#b8860b)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/a9a9a9/000000?text=+",alt:"#a9a9a9"})," ",Object(b.b)("color",{darkgray:!0})," darkgray (#a9a9a9)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/006400/000000?text=+",alt:"#006400"})," ",Object(b.b)("color",{darkgreen:!0})," darkgreen (#006400)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/a9a9a9/000000?text=+",alt:"#a9a9a9"})," ",Object(b.b)("color",{darkgrey:!0})," darkgrey (#a9a9a9)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/bdb76b/000000?text=+",alt:"#bdb76b"})," ",Object(b.b)("color",{darkkhaki:!0})," darkkhaki (#bdb76b)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/8b008b/000000?text=+",alt:"#8b008b"})," ",Object(b.b)("color",{darkmagenta:!0})," darkmagenta (#8b008b)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/556b2f/000000?text=+",alt:"#556b2f"})," ",Object(b.b)("color",{darkolivegreen:!0})," darkolivegreen (#556b2f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff8c00/000000?text=+",alt:"#ff8c00"})," ",Object(b.b)("color",{darkorange:!0})," darkorange (#ff8c00)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/9932cc/000000?text=+",alt:"#9932cc"})," ",Object(b.b)("color",{darkorchid:!0})," darkorchid (#9932cc)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/8b0000/000000?text=+",alt:"#8b0000"})," ",Object(b.b)("color",{darkred:!0})," darkred (#8b0000)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/e9967a/000000?text=+",alt:"#e9967a"})," ",Object(b.b)("color",{darksalmon:!0})," darksalmon (#e9967a)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/8fbc8f/000000?text=+",alt:"#8fbc8f"})," ",Object(b.b)("color",{darkseagreen:!0})," darkseagreen (#8fbc8f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/483d8b/000000?text=+",alt:"#483d8b"})," ",Object(b.b)("color",{darkslateblue:!0})," darkslateblue (#483d8b)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/2f4f4f/000000?text=+",alt:"#2f4f4f"})," ",Object(b.b)("color",{darkslategrey:!0})," darkslategrey (#2f4f4f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00ced1/000000?text=+",alt:"#00ced1"})," ",Object(b.b)("color",{darkturquoise:!0})," darkturquoise (#00ced1)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/9400d3/000000?text=+",alt:"#9400d3"})," ",Object(b.b)("color",{darkviolet:!0})," darkviolet (#9400d3)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff1493/000000?text=+",alt:"#ff1493"})," ",Object(b.b)("color",{deeppink:!0})," deeppink (#ff1493)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00bfff/000000?text=+",alt:"#00bfff"})," ",Object(b.b)("color",{deepskyblue:!0})," deepskyblue (#00bfff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/696969/000000?text=+",alt:"#696969"})," ",Object(b.b)("color",{dimgray:!0})," dimgray (#696969)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/696969/000000?text=+",alt:"#696969"})," ",Object(b.b)("color",{dimgrey:!0})," dimgrey (#696969)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/1e90ff/000000?text=+",alt:"#1e90ff"})," ",Object(b.b)("color",{dodgerblue:!0})," dodgerblue (#1e90ff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/b22222/000000?text=+",alt:"#b22222"})," ",Object(b.b)("color",{firebrick:!0})," firebrick (#b22222)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fffaf0/000000?text=+",alt:"#fffaf0"})," ",Object(b.b)("color",{floralwhite:!0})," floralwhite (#fffaf0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/228b22/000000?text=+",alt:"#228b22"})," ",Object(b.b)("color",{forestgreen:!0})," forestgreen (#228b22)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff00ff/000000?text=+",alt:"#ff00ff"})," ",Object(b.b)("color",{fuchsia:!0})," fuchsia (#ff00ff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/dcdcdc/000000?text=+",alt:"#dcdcdc"})," ",Object(b.b)("color",{gainsboro:!0})," gainsboro (#dcdcdc)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f8f8ff/000000?text=+",alt:"#f8f8ff"})," ",Object(b.b)("color",{ghostwhite:!0})," ghostwhite (#f8f8ff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffd700/000000?text=+",alt:"#ffd700"})," ",Object(b.b)("color",{gold:!0})," gold (#ffd700)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/daa520/000000?text=+",alt:"#daa520"})," ",Object(b.b)("color",{goldenrod:!0})," goldenrod (#daa520)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/808080/000000?text=+",alt:"#808080"})," ",Object(b.b)("color",{gray:!0})," gray (#808080)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/008000/000000?text=+",alt:"#008000"})," ",Object(b.b)("color",{green:!0})," green (#008000)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/adff2f/000000?text=+",alt:"#adff2f"})," ",Object(b.b)("color",{greenyellow:!0})," greenyellow (#adff2f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/808080/000000?text=+",alt:"#808080"})," ",Object(b.b)("color",{grey:!0})," grey (#808080)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f0fff0/000000?text=+",alt:"#f0fff0"})," ",Object(b.b)("color",{honeydew:!0})," honeydew (#f0fff0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff69b4/000000?text=+",alt:"#ff69b4"})," ",Object(b.b)("color",{hotpink:!0})," hotpink (#ff69b4)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/cd5c5c/000000?text=+",alt:"#cd5c5c"})," ",Object(b.b)("color",{indianred:!0})," indianred (#cd5c5c)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/4b0082/000000?text=+",alt:"#4b0082"})," ",Object(b.b)("color",{indigo:!0})," indigo (#4b0082)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fffff0/000000?text=+",alt:"#fffff0"})," ",Object(b.b)("color",{ivory:!0})," ivory (#fffff0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f0e68c/000000?text=+",alt:"#f0e68c"})," ",Object(b.b)("color",{khaki:!0})," khaki (#f0e68c)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/e6e6fa/000000?text=+",alt:"#e6e6fa"})," ",Object(b.b)("color",{lavender:!0})," lavender (#e6e6fa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fff0f5/000000?text=+",alt:"#fff0f5"})," ",Object(b.b)("color",{lavenderblush:!0})," lavenderblush (#fff0f5)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/7cfc00/000000?text=+",alt:"#7cfc00"})," ",Object(b.b)("color",{lawngreen:!0})," lawngreen (#7cfc00)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fffacd/000000?text=+",alt:"#fffacd"})," ",Object(b.b)("color",{lemonchiffon:!0})," lemonchiffon (#fffacd)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/add8e6/000000?text=+",alt:"#add8e6"})," ",Object(b.b)("color",{lightblue:!0})," lightblue (#add8e6)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f08080/000000?text=+",alt:"#f08080"})," ",Object(b.b)("color",{lightcoral:!0})," lightcoral (#f08080)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/e0ffff/000000?text=+",alt:"#e0ffff"})," ",Object(b.b)("color",{lightcyan:!0})," lightcyan (#e0ffff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fafad2/000000?text=+",alt:"#fafad2"})," ",Object(b.b)("color",{lightgoldenrodyellow:!0})," lightgoldenrodyellow (#fafad2)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/d3d3d3/000000?text=+",alt:"#d3d3d3"})," ",Object(b.b)("color",{lightgray:!0})," lightgray (#d3d3d3)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/90ee90/000000?text=+",alt:"#90ee90"})," ",Object(b.b)("color",{lightgreen:!0})," lightgreen (#90ee90)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/d3d3d3/000000?text=+",alt:"#d3d3d3"})," ",Object(b.b)("color",{lightgrey:!0})," lightgrey (#d3d3d3)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffb6c1/000000?text=+",alt:"#ffb6c1"})," ",Object(b.b)("color",{lightpink:!0})," lightpink (#ffb6c1)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffa07a/000000?text=+",alt:"#ffa07a"})," ",Object(b.b)("color",{lightsalmon:!0})," lightsalmon (#ffa07a)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/20b2aa/000000?text=+",alt:"#20b2aa"})," ",Object(b.b)("color",{lightseagreen:!0})," lightseagreen (#20b2aa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/87cefa/000000?text=+",alt:"#87cefa"})," ",Object(b.b)("color",{lightskyblue:!0})," lightskyblue (#87cefa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/778899/000000?text=+",alt:"#778899"})," ",Object(b.b)("color",{lightslategrey:!0})," lightslategrey (#778899)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/b0c4de/000000?text=+",alt:"#b0c4de"})," ",Object(b.b)("color",{lightsteelblue:!0})," lightsteelblue (#b0c4de)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffffe0/000000?text=+",alt:"#ffffe0"})," ",Object(b.b)("color",{lightyellow:!0})," lightyellow (#ffffe0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00ff00/000000?text=+",alt:"#00ff00"})," ",Object(b.b)("color",{lime:!0})," lime (#00ff00)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/32cd32/000000?text=+",alt:"#32cd32"})," ",Object(b.b)("color",{limegreen:!0})," limegreen (#32cd32)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/faf0e6/000000?text=+",alt:"#faf0e6"})," ",Object(b.b)("color",{linen:!0})," linen (#faf0e6)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff00ff/000000?text=+",alt:"#ff00ff"})," ",Object(b.b)("color",{magenta:!0})," magenta (#ff00ff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/800000/000000?text=+",alt:"#800000"})," ",Object(b.b)("color",{maroon:!0})," maroon (#800000)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/66cdaa/000000?text=+",alt:"#66cdaa"})," ",Object(b.b)("color",{mediumaquamarine:!0})," mediumaquamarine (#66cdaa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/0000cd/000000?text=+",alt:"#0000cd"})," ",Object(b.b)("color",{mediumblue:!0})," mediumblue (#0000cd)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ba55d3/000000?text=+",alt:"#ba55d3"})," ",Object(b.b)("color",{mediumorchid:!0})," mediumorchid (#ba55d3)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/9370db/000000?text=+",alt:"#9370db"})," ",Object(b.b)("color",{mediumpurple:!0})," mediumpurple (#9370db)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/3cb371/000000?text=+",alt:"#3cb371"})," ",Object(b.b)("color",{mediumseagreen:!0})," mediumseagreen (#3cb371)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/7b68ee/000000?text=+",alt:"#7b68ee"})," ",Object(b.b)("color",{mediumslateblue:!0})," mediumslateblue (#7b68ee)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00fa9a/000000?text=+",alt:"#00fa9a"})," ",Object(b.b)("color",{mediumspringgreen:!0})," mediumspringgreen (#00fa9a)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/48d1cc/000000?text=+",alt:"#48d1cc"})," ",Object(b.b)("color",{mediumturquoise:!0})," mediumturquoise (#48d1cc)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/c71585/000000?text=+",alt:"#c71585"})," ",Object(b.b)("color",{mediumvioletred:!0})," mediumvioletred (#c71585)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/191970/000000?text=+",alt:"#191970"})," ",Object(b.b)("color",{midnightblue:!0})," midnightblue (#191970)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f5fffa/000000?text=+",alt:"#f5fffa"})," ",Object(b.b)("color",{mintcream:!0})," mintcream (#f5fffa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffe4e1/000000?text=+",alt:"#ffe4e1"})," ",Object(b.b)("color",{mistyrose:!0})," mistyrose (#ffe4e1)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffe4b5/000000?text=+",alt:"#ffe4b5"})," ",Object(b.b)("color",{moccasin:!0})," moccasin (#ffe4b5)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffdead/000000?text=+",alt:"#ffdead"})," ",Object(b.b)("color",{navajowhite:!0})," navajowhite (#ffdead)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/000080/000000?text=+",alt:"#000080"})," ",Object(b.b)("color",{navy:!0})," navy (#000080)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fdf5e6/000000?text=+",alt:"#fdf5e6"})," ",Object(b.b)("color",{oldlace:!0})," oldlace (#fdf5e6)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/808000/000000?text=+",alt:"#808000"})," ",Object(b.b)("color",{olive:!0})," olive (#808000)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/6b8e23/000000?text=+",alt:"#6b8e23"})," ",Object(b.b)("color",{olivedrab:!0})," olivedrab (#6b8e23)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffa500/000000?text=+",alt:"#ffa500"})," ",Object(b.b)("color",{orange:!0})," orange (#ffa500)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff4500/000000?text=+",alt:"#ff4500"})," ",Object(b.b)("color",{orangered:!0})," orangered (#ff4500)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/da70d6/000000?text=+",alt:"#da70d6"})," ",Object(b.b)("color",{orchid:!0})," orchid (#da70d6)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/eee8aa/000000?text=+",alt:"#eee8aa"})," ",Object(b.b)("color",{palegoldenrod:!0})," palegoldenrod (#eee8aa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/98fb98/000000?text=+",alt:"#98fb98"})," ",Object(b.b)("color",{palegreen:!0})," palegreen (#98fb98)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/afeeee/000000?text=+",alt:"#afeeee"})," ",Object(b.b)("color",{paleturquoise:!0})," paleturquoise (#afeeee)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/db7093/000000?text=+",alt:"#db7093"})," ",Object(b.b)("color",{palevioletred:!0})," palevioletred (#db7093)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffefd5/000000?text=+",alt:"#ffefd5"})," ",Object(b.b)("color",{papayawhip:!0})," papayawhip (#ffefd5)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffdab9/000000?text=+",alt:"#ffdab9"})," ",Object(b.b)("color",{peachpuff:!0})," peachpuff (#ffdab9)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/cd853f/000000?text=+",alt:"#cd853f"})," ",Object(b.b)("color",{peru:!0})," peru (#cd853f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffc0cb/000000?text=+",alt:"#ffc0cb"})," ",Object(b.b)("color",{pink:!0})," pink (#ffc0cb)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/dda0dd/000000?text=+",alt:"#dda0dd"})," ",Object(b.b)("color",{plum:!0})," plum (#dda0dd)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/b0e0e6/000000?text=+",alt:"#b0e0e6"})," ",Object(b.b)("color",{powderblue:!0})," powderblue (#b0e0e6)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/800080/000000?text=+",alt:"#800080"})," ",Object(b.b)("color",{purple:!0})," purple (#800080)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/663399/000000?text=+",alt:"#663399"})," ",Object(b.b)("color",{rebeccapurple:!0})," rebeccapurple (#663399)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff0000/000000?text=+",alt:"#ff0000"})," ",Object(b.b)("color",{red:!0})," red (#ff0000)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/bc8f8f/000000?text=+",alt:"#bc8f8f"})," ",Object(b.b)("color",{rosybrown:!0})," rosybrown (#bc8f8f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/4169e1/000000?text=+",alt:"#4169e1"})," ",Object(b.b)("color",{royalblue:!0})," royalblue (#4169e1)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/8b4513/000000?text=+",alt:"#8b4513"})," ",Object(b.b)("color",{saddlebrown:!0})," saddlebrown (#8b4513)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fa8072/000000?text=+",alt:"#fa8072"})," ",Object(b.b)("color",{salmon:!0})," salmon (#fa8072)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f4a460/000000?text=+",alt:"#f4a460"})," ",Object(b.b)("color",{sandybrown:!0})," sandybrown (#f4a460)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/2e8b57/000000?text=+",alt:"#2e8b57"})," ",Object(b.b)("color",{seagreen:!0})," seagreen (#2e8b57)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fff5ee/000000?text=+",alt:"#fff5ee"})," ",Object(b.b)("color",{seashell:!0})," seashell (#fff5ee)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/a0522d/000000?text=+",alt:"#a0522d"})," ",Object(b.b)("color",{sienna:!0})," sienna (#a0522d)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/c0c0c0/000000?text=+",alt:"#c0c0c0"})," ",Object(b.b)("color",{silver:!0})," silver (#c0c0c0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/87ceeb/000000?text=+",alt:"#87ceeb"})," ",Object(b.b)("color",{skyblue:!0})," skyblue (#87ceeb)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/6a5acd/000000?text=+",alt:"#6a5acd"})," ",Object(b.b)("color",{slateblue:!0})," slateblue (#6a5acd)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/708090/000000?text=+",alt:"#708090"})," ",Object(b.b)("color",{slategray:!0})," slategray (#708090)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/fffafa/000000?text=+",alt:"#fffafa"})," ",Object(b.b)("color",{snow:!0})," snow (#fffafa)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/00ff7f/000000?text=+",alt:"#00ff7f"})," ",Object(b.b)("color",{springgreen:!0})," springgreen (#00ff7f)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/4682b4/000000?text=+",alt:"#4682b4"})," ",Object(b.b)("color",{steelblue:!0})," steelblue (#4682b4)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/d2b48c/000000?text=+",alt:"#d2b48c"})," ",Object(b.b)("color",{tan:!0})," tan (#d2b48c)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/008080/000000?text=+",alt:"#008080"})," ",Object(b.b)("color",{teal:!0})," teal (#008080)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/d8bfd8/000000?text=+",alt:"#d8bfd8"})," ",Object(b.b)("color",{thistle:!0})," thistle (#d8bfd8)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ff6347/000000?text=+",alt:"#ff6347"})," ",Object(b.b)("color",{tomato:!0})," tomato (#ff6347)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/40e0d0/000000?text=+",alt:"#40e0d0"})," ",Object(b.b)("color",{turquoise:!0})," turquoise (#40e0d0)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ee82ee/000000?text=+",alt:"#ee82ee"})," ",Object(b.b)("color",{violet:!0})," violet (#ee82ee)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f5deb3/000000?text=+",alt:"#f5deb3"})," ",Object(b.b)("color",{wheat:!0})," wheat (#f5deb3)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffffff/000000?text=+",alt:"#ffffff"})," ",Object(b.b)("color",{white:!0})," white (#ffffff)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/f5f5f5/000000?text=+",alt:"#f5f5f5"})," ",Object(b.b)("color",{whitesmoke:!0})," whitesmoke (#f5f5f5)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/ffff00/000000?text=+",alt:"#ffff00"})," ",Object(b.b)("color",{yellow:!0})," yellow (#ffff00)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",{parentName:"li",src:"https://placehold.it/15/9acd32/000000?text=+",alt:"#9acd32"})," ",Object(b.b)("color",{yellowgreen:!0})," yellowgreen (#9acd32)")))}n.isMDXComponent=!0}}]);
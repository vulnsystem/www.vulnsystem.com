(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(4),o=r(10),i=(r(0),r(711)),a={id:"tls-new-version",title:"TLS 1.3 vs 1.2",description:"the versions comprare of TLS"},s={unversionedId:"tls-new-version",id:"tls-new-version",isDocsHomePage:!1,title:"TLS 1.3 vs 1.2",description:"the versions comprare of TLS",source:"@site/../docs/tls-new-version.md",slug:"/tls-new-version",permalink:"/docs/next/tls-new-version",editUrl:"https://github.com/vulnsystem/www.gitcoins.io/blob/documentation/website/../docs/tls-new-version.md",version:"current",lastUpdatedAt:1621079914,formattedLastUpdatedAt:"5/15/2021",sidebar:"docs",previous:{title:"TLS Handshake",permalink:"/docs/next/tls-handshake"},next:{title:"Create Certificates",permalink:"/docs/next/create-certificates"}},c=[{value:"TLS 1.3 vs TLS 1.2",id:"tls-13-vs-tls-12",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Copyright: the following content is totally copy from the ",Object(i.b)("a",{parentName:"p",href:"https://dev.to/techschoolguru/a-complete-overview-of-ssl-tls-and-its-cryptographic-system-36pd"},"TECHSCHOOL"),".")),Object(i.b)("p",null,"Now before we finish, let\u2019s do a quick comparison of TLS 1.3 and TLS 1.2 to see what\u2019s new!\n",Object(i.b)("img",{alt:"tls-new-version",src:r(858).default})),Object(i.b)("h2",{id:"tls-13-vs-tls-12"},"TLS 1.3 vs TLS 1.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"TLS 1.3 has safer key exchange mechanisms, where the vulnerable RSA and other static key exchange methods are removed, leaving only ephemeral Diffie-Hellman or Elliptic-Curve Diffie-Hellman remain, therefore achieved perfect forward secrecy."),Object(i.b)("li",{parentName:"ol"},"TLS 1.3 handshake is at least 1 round-trip faster than TLS 1.2."),Object(i.b)("li",{parentName:"ol"},"Symmetric encryption in TLS 1.3 is more secure because AEAD cipher suite is mandatory, and it also removes some weak algorithms from the list such as Block Cipher Mode (CBC), RC4, or Triple DES."),Object(i.b)("li",{parentName:"ol"},"The cipher suite in TLS 1.3 is also simpler, since it only contains the AEAD algorithm and a hash algorithm. The key exchange and signature algorithms are moved to separate fields. While in TLS 1.2, they\u2019re merged into the cipher suite. This makes the number of recommended cipher suites become too big, 37 options in TLS 1.2 if i remember correctly. While in TLS 1.3, there are only 5."),Object(i.b)("li",{parentName:"ol"},"Next, TLS 1.3 also give us stronger signature, since it signs the entire handshake, not just cover some part of it as in TLS 1.2."),Object(i.b)("li",{parentName:"ol"},"Last but not least, Elliptic-curve cryptography gets a significant attention in TLS 1.3, with some better curves algorithm added, such as Edward-curve digital signature algorithm, which is faster without sacrificing security.")),Object(i.b)("p",null,"And that\u2019s everything I want to share with you in this article. Thanks for reading, and I\u2019ll catch you guys in the next one!"))}u.isMDXComponent=!0},711:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return r?o.a.createElement(h,s(s({ref:t},l),{},{components:r})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},858:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/tls-new-version-e3683416410c5a0103a152a4f29e8bf7.png"}}]);
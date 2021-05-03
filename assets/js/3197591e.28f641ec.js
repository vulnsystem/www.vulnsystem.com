(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1181:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=c(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,b=m["".concat(a,".").concat(u)]||m[u]||l[u]||o;return t?i.a.createElement(b,s(s({ref:n},p),{},{components:t})):i.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},340:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return c}));var r=t(4),i=t(10),o=(t(0),t(1181)),a={id:"removing-default-permissions",title:"Removing Default Permissions"},s={unversionedId:"removing-default-permissions",id:"version-0.60/removing-default-permissions",isDocsHomePage:!1,title:"Removing Default Permissions",description:"By default, some permissions are added to your Android APK.",source:"@site/versioned_docs/version-0.60/removing-default-permissions.md",slug:"/removing-default-permissions",permalink:"/docs/0.60/removing-default-permissions",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/removing-default-permissions.md",version:"0.60",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.60/docs",previous:{title:"Publishing to Google Play Store",permalink:"/docs/0.60/signed-apk-android"},next:{title:"Using Hermes",permalink:"/docs/0.60/hermes"}},d=[],p={toc:d};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By default, some permissions are added to your Android APK."),Object(o.b)("p",null,"The default permissions that get added are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"android.permission.INTERNET - Required for debug mode."),Object(o.b)("li",{parentName:"ul"},"android.permission.SYSTEM_ALERT_WINDOW - Required for debug mode."),Object(o.b)("li",{parentName:"ul"},"android.permission.READ_PHONE_STATE - Not required for debug or production."),Object(o.b)("li",{parentName:"ul"},"android.permission.WRITE_EXTERNAL_STORAGE - Not required for debug or production."),Object(o.b)("li",{parentName:"ul"},"android.permission.READ_EXTERNAL_STORAGE - Not required for debug or production.")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Let's start by removing ",Object(o.b)("inlineCode",{parentName:"p"},"READ_PHONE_STATE"),", ",Object(o.b)("inlineCode",{parentName:"p"},"WRITE_EXTERNAL_STORAGE"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"READ_EXTERNAL_STORAGE")," from both production and debug APKs, as it is not required in either. These storage permissions are still not needed if ",Object(o.b)("inlineCode",{parentName:"p"},"AsyncStorage")," module is in use, so it is safe to remove from both production and debug.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your ",Object(o.b)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml")," file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Even though these three permissions are not listed in the manifest they get added in. We add the three permissions with ",Object(o.b)("inlineCode",{parentName:"p"},'tools:node="remove"'),' attribute, to make sure it gets removed during build. Note that the package identifier will be different, for below it is "com.myapp" because the project was created with ',Object(o.b)("inlineCode",{parentName:"p"},"react-native init myapp"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-diff"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    package="com.myappid"\n+   xmlns:tools="http://schemas.android.com/tools"\n    >\n\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_PHONE_STATE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n+   <uses-permission tools:node="remove" android:name="android.permission.READ_EXTERNAL_STORAGE" />\n\n    <application\n      android:name=".MainApplication"\n      android:label="@string/app_name"\n      android:icon="@mipmap/ic_launcher"\n      android:allowBackup="false"\n      android:theme="@style/AppTheme">\n      <activity\n        android:name=".MainActivity"\n        android:label="@string/app_name"\n        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"\n        android:windowSoftInputMode="adjustResize">\n        <intent-filter>\n            <action android:name="android.intent.action.MAIN" />\n            <category android:name="android.intent.category.LAUNCHER" />\n        </intent-filter>\n      </activity>\n      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />\n    </application>\n\n</manifest>\n')))),Object(o.b)("p",null,"That's it. We did not remove the ",Object(o.b)("inlineCode",{parentName:"p"},"INTERNET")," permission as pretty much all apps use it. Now whenever you create a production APK, these 3 permissions will be removed. When you create a debug APK (",Object(o.b)("inlineCode",{parentName:"p"},"react-native run-android"),") it will install the APK with these permissions added."))}c.isMDXComponent=!0}}]);
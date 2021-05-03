(window.webpackJsonp=window.webpackJsonp||[]).push([[874],{1181:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},966:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(4),r=n(10),i=(n(0),n(1181)),o={id:"typescript",title:"Using TypeScript with React Native"},c={unversionedId:"typescript",id:"version-0.60/typescript",isDocsHomePage:!1,title:"Using TypeScript with React Native",description:"TypeScript is a language which extends JavaScript by adding type definitions, much like Flow. While React Native is built in Flow, it supports both TypeScript and Flow by default.",source:"@site/versioned_docs/version-0.60/typescript.md",slug:"/typescript",permalink:"/docs/0.60/typescript",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/typescript.md",version:"0.60",lastUpdatedAt:1619935100,formattedLastUpdatedAt:"5/2/2021",sidebar:"version-0.60/docs",previous:{title:"JavaScript Environment",permalink:"/docs/0.60/javascript-environment"},next:{title:"Direct Manipulation",permalink:"/docs/0.60/direct-manipulation"}},s=[{value:"Getting Started with TypeScript",id:"getting-started-with-typescript",children:[]},{value:"Adding TypeScript to an Existing Project",id:"adding-typescript-to-an-existing-project",children:[]},{value:"How TypeScript and React Native works",id:"how-typescript-and-react-native-works",children:[]},{value:"What does React Native + TypeScript look like",id:"what-does-react-native--typescript-look-like",children:[]},{value:"Where to Find Useful Advice",id:"where-to-find-useful-advice",children:[]},{value:"Using Custom Path Aliases with TypeScript",id:"using-custom-path-aliases-with-typescript",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," is a language which extends JavaScript by adding type definitions, much like ",Object(i.b)("a",{parentName:"p",href:"https://flow.org"},"Flow"),". While React Native is built in Flow, it supports both TypeScript ",Object(i.b)("em",{parentName:"p"},"and")," Flow by default."),Object(i.b)("h2",{id:"getting-started-with-typescript"},"Getting Started with TypeScript"),Object(i.b)("p",null,"If you're starting a new project, there are a few different ways to get started. You can use the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-template-typescript"},"TypeScript template"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"# Template version is specifically for React Native 0.60\nnpx react-native init MyTSProject --template react-native-template-typescript@6.2.0\n")),Object(i.b)("p",null,"You can use ",Object(i.b)("a",{parentName:"p",href:"https://expo.io"},"Expo")," which has two TypeScript templates:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g expo-cli\nexpo init MyTSProject\n")),Object(i.b)("p",null,"Or you could use ",Object(i.b)("a",{parentName:"p",href:"https://infinite.red/ignite"},"Ignite"),", which also has a TypeScript template:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install -g ignite-cli\nignite new MyTSProject\n")),Object(i.b)("h2",{id:"adding-typescript-to-an-existing-project"},"Adding TypeScript to an Existing Project"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add TypeScript and the types for React Native and Jest to your project.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n# or for npm\nnpm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add a TypeScript config file. Create a ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json")," in the root of your project:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "isolatedModules": true,\n    "jsx": "react",\n    "lib": ["es6"],\n    "moduleResolution": "node",\n    "noEmit": true,\n    "strict": true,\n    "target": "esnext"\n  },\n  "exclude": [\n    "node_modules",\n    "babel.config.js",\n    "metro.config.js",\n    "jest.config.js"\n  ]\n}\n')),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},"jest.config.js")," file to configure Jest to use TypeScript")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  preset: 'react-native',\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']\n};\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Rename a JavaScript file to be ",Object(i.b)("inlineCode",{parentName:"p"},"*.tsx"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn tsc")," to type-check your new TypeScript files."))),Object(i.b)("h2",{id:"how-typescript-and-react-native-works"},"How TypeScript and React Native works"),Object(i.b)("p",null,"Out of the box, transforming your files to JavaScript works via the same ",Object(i.b)("a",{parentName:"p",href:"/docs/javascript-environment#javascript-syntax-transformers"},"Babel infrastructure")," as a non-TypeScript React Native project. We recommend that you use the TypeScript compiler only for type checking. If you have existing TypeScript code being ported to React Native, there are ",Object(i.b)("a",{parentName:"p",href:"https://babeljs.io/docs/en/next/babel-plugin-transform-typescript"},"one or two caveats")," to using Babel instead of TypeScript."),Object(i.b)("h2",{id:"what-does-react-native--typescript-look-like"},"What does React Native + TypeScript look like"),Object(i.b)("p",null,"You can provide an interface for a React Component's ","[Props]","](props) and ","[State]","](state) via ",Object(i.b)("inlineCode",{parentName:"p"},"React.Component<Props, State>")," which will provide type-checking and editor auto-completing when working with that component in JSX."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"// components/Hello.tsx\nimport React from 'react';\nimport {Button, StyleSheet, Text, View} from 'react-native';\n\nexport interface Props {\n    name: string;\n    enthusiasmLevel?: number;\n}\n\nconst Hello: React.FC<Props> = (props) => {\n    const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(props.enthusiasmLevel);\n\n    const onIncrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) + 1);\n    const onDecrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) - 1);\n\n    const getExclamationMarks = (numChars: number) => Array(numChars + 1).join('!');\n    return (\n        <View style={styles.root}>\n        <Text style={styles.greeting}>\n            Hello{' '}\n            {props.name + getExclamationMarks(enthusiasmLevel || 0)}\n        </Text>\n\n        <View style={styles.buttons}>\n            <View style={styles.button}>\n            <Button\n                title=\"-\"\n                onPress={onDecrement}\n                accessibilityLabel=\"decrement\"\n                color=\"red\"\n            />\n            </View>\n\n            <View style={styles.button}>\n            <Button\n                title=\"+\"\n                onPress={onIncrement}\n                accessibilityLabel=\"increment\"\n                color=\"blue\"\n            />\n            </View>\n        </View>\n        </View>\n    );\n    }\n}\n\n// styles\nconst styles = StyleSheet.create({\n    root: {\n        alignItems: 'center',\n        alignSelf: 'center',\n    },\n    buttons: {\n       flexDirection: 'row',\n        minHeight: 70,\n        alignItems: 'stretch',\n        alignSelf: 'center',\n        borderWidth: 5,\n    },\n    button: {\n        flex: 1,\n        paddingVertical: 0,\n    },\n    greeting: {\n        color: '#999',\n        fontWeight: 'bold',\n    },\n});\n")),Object(i.b)("p",null,"You can explore the syntax more in the ",Object(i.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/play/?strictNullChecks=false&esModuleInterop=true&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteMA4wkUTOiRwACjjABnBio4YLhTECQALjg-GCgnAHMKShC4JGcxZj9gFD8QABkkKyEAfiiOZhAAI1ckzVtKNE4YuAAJJCEhCCjkQwA6ADEAYQAeHwh-AD44AF44AAowXz8AShmp+iCQxo5mgG00mAysnPzC9p4-KQBRdMzs3IKigF0ZxGIYXszRGDMkBaXegcjvdTkVlklNsFts1OABJDhoIjhZyvOaraZTS4wG6HO4nR7tOZzIF4h5nIRwAA+lLgAAZVgBqOAARnBkLg0PgnAAIkhEUhkfBZmi1tFrrdjmSikSSZLQe0qTT6XAjCy2ZR2Zy4PFrvI0EIUCAzMBOABZFBQADWAWF5RAgzEFr8ZQq1Sg6KmAEEoFAUAI5naHU64EzWb0AFYQJxzfAAQnw6pSRBgzCgHHm7JSw1UGmighE03oMWESD8vRwEBgmgmmZCwzkijzJcLxZEZfiRCkCWrtZSwTaHQg9HwBDqyT7E-oi3GZbCniZOuxeoNRvMZot1uJEpBBIp1LpyzHE+CwwA9A2YDWNeOJ9m1OomwWi-nS71Kqx2Dsezfjyecw-WyQFsXzLd82E4b9fyzFhwI4XsoPMGACwAIiMZD4N-TgfFLPxCx5PkkQOI8oIndA0Bw4BKmAIRgEEPIUGqIRpmQgATAiBQOdCfxIqEIE6KBmKIFiuJ4uBTyvUSz3-K8MLrf9HyA58S1Aj8IIknjhhgz9ZInRCUIZETRJCLCiD8XD6DhBFCOcYijLgMiKKomi6IY9pmKcflBUMuzGn45jKiEZgkG8qDxJ0uApPvdTb1PaT4MijRorgRMQjHMcqFPU8FL8KgtUAm0+BfcRJA+flfjmDYfwrGAokq38UBo+IOFhFwQGdAhyOcVx8C4eCGuAJreHaTAonwTqXCgHr2U0XqfzAz92rqidMBEeRuWAIgMBNDhRpwdQpu4kIQCcNoBrEGq4AAdlpWb6sa5rWva-AYmTNAxAOu6Bo4IahBGjqDm627j0qaA2KgAB1YAWMOKIAFYgeCGb2XmzhavglaFCiZkEb7MAUBYliEmUVxzDQBqohu6acY7EqEjRw7eP40aAGIAE52Y+49ME4GBwaQM6LvwEGhBYznEdmzRwSAA"},"TypeScript playground"),"."),Object(i.b)("h2",{id:"where-to-find-useful-advice"},"Where to Find Useful Advice"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.typescriptlang.org/docs/home.html"},"TypeScript Handbook")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://reactjs.org/docs/static-type-checking.html#typescript"},"React's documentation on TypeScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"},"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),Object(i.b)("h2",{id:"using-custom-path-aliases-with-typescript"},"Using Custom Path Aliases with TypeScript"),Object(i.b)("p",null,"To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit your ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json")," to have your ",Object(i.b)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"},"custom path mappings"),". Set anything in the root of ",Object(i.b)("inlineCode",{parentName:"li"},"src")," to be available with no preceding path reference, and allow any test file to be accessed by using ",Object(i.b)("inlineCode",{parentName:"li"},"test/File.tsx"),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff"},'    "target": "esnext",\n+     "baseUrl": ".",\n+     "paths": {\n+       "*": ["src/*"],\n+       "tests": ["tests/*"]\n+     },\n    }\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Configure the Babel side done by adding a new dependency, ",Object(i.b)("a",{parentName:"li",href:"https://github.com/tleunen/babel-plugin-module-resolver"},Object(i.b)("inlineCode",{parentName:"a"},"babel-plugin-module-resolver")),":")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev babel-plugin-module-resolver\n# or\nnpm install --save-dev babel-plugin-module-resolver\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Finally, configure your ",Object(i.b)("inlineCode",{parentName:"li"},"babel.config.js")," (note that the syntax for your ",Object(i.b)("inlineCode",{parentName:"li"},"babel.config.js")," is different from your ",Object(i.b)("inlineCode",{parentName:"li"},"tsconfig.json"),"):")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-diff"},"{\n  plugins: [\n+    [\n+       'module-resolver',\n+       {\n+         root: ['./src'],\n+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],\n+         alias: {\n+           \"test/*\": [\"./test/\"],\n+         }\n+       }\n+     ]\n  ]\n}\n")))}l.isMDXComponent=!0}}]);
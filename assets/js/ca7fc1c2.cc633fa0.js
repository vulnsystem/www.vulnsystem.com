(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1181:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,b=u["".concat(r,".").concat(h)]||u[h]||m[h]||i;return a?o.a.createElement(b,s(s({ref:t},l),{},{components:a})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},950:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(4),o=a(10),i=(a(0),a(1181)),r={title:"Using AWS with React Native",author:"Richard Threlkeld",authorTitle:"Senior Technical Product Manager at AWS Mobile",authorURL:"https://twitter.com/undef_obj",authorImageURL:"https://pbs.twimg.com/profile_images/811239086581227520/APX1eZwF_400x400.jpg",authorTwitter:"undef_obj",tags:["engineering"]},s={permalink:"/blog/2018/03/05/AWS-app-sync",source:"@site/blog/2018-03-05-AWS-app-sync.md",description:"AWS is well known in the technology industry as a provider of cloud services. These include compute, storage, and database technologies, as well as fully managed serverless offerings. The AWS Mobile team has been working closely with customers and members of the JavaScript ecosystem to make cloud-connected mobile and web applications more secure, scalable, and easier to develop and deploy. We began with a complete starter kit, but have a few more recent developments.",date:"2018-03-05T00:00:00.000Z",formattedDate:"March 5, 2018",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Using AWS with React Native",readingTime:8.8,truncated:!1,prevItem:{title:"Building <InputAccessoryView> For React Native",permalink:"/blog/2018/03/22/building-input-accessory-view-for-react-native"},nextItem:{title:"Implementing Twitter\u2019s App Loading Animation in React Native",permalink:"/blog/2018/01/18/implementing-twitters-app-loading-animation-in-react-native"}},c=[{value:"AWS Amplify",id:"aws-amplify",children:[]},{value:"AWS AppSync",id:"aws-appsync",children:[]},{value:"Feedback",id:"feedback",children:[]}],l={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"AWS is well known in the technology industry as a provider of cloud services. These include compute, storage, and database technologies, as well as fully managed serverless offerings. The AWS Mobile team has been working closely with customers and members of the JavaScript ecosystem to make cloud-connected mobile and web applications more secure, scalable, and easier to develop and deploy. We began with a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/awslabs/aws-mobile-react-native-starter"},"complete starter kit"),", but have a few more recent developments."),Object(i.b)("p",null,"This blog post talks about some interesting things for React and React Native developers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/aws/aws-amplify"},Object(i.b)("strong",{parentName:"a"},"AWS Amplify")),", a declarative library for JavaScript applications using cloud services"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/appsync/"},Object(i.b)("strong",{parentName:"a"},"AWS AppSync")),", a fully managed GraphQL service with offline and real-time features")),Object(i.b)("h2",{id:"aws-amplify"},"AWS Amplify"),Object(i.b)("p",null,"React Native applications are very easy to bootstrap using tools like Create React Native App and Expo. However, connecting them to the cloud can be challenging to navigate when you try to match a use case to infrastructure services. For example, your React Native app might need to upload photos. Should these be protected per user? That probably means you need some sort of registration or sign-in process. Do you want your own user directory or are you using a social media provider? Maybe your app also needs to call an API with custom business logic after users log in."),Object(i.b)("p",null,'To help JavaScript developers with these problems, we released a library named AWS Amplify. The design is broken into "categories" of tasks, instead of AWS-specific implementations. For example, if you wanted users to register, log in, and then upload private photos, you would simply pull in ',Object(i.b)("inlineCode",{parentName:"p"},"Auth")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Storage")," categories to your application:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import { Auth } from 'aws-amplify';\n\nAuth.signIn(username, password)\n    .then(user => console.log(user))\n    .catch(err => console.log(err));\n\nAuth.confirmSignIn(user, code)\n    .then(data => console.log(data))\n    .catch(err => console.log(err));\n")),Object(i.b)("p",null,"In the code above, you can see an example of some of the common tasks that Amplify helps you with, such as using multi-factor authentication (MFA) codes with either email or SMS. The supported categories today are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Auth"),": Provides credential automation. Out-of-the-box implementation uses AWS credentials for signing, and OIDC JWT tokens from ",Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/cognito/"},"Amazon Cognito"),". Common functionality, such as MFA features, is supported."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Analytics"),": With a single line of code, get tracking for authenticated or unauthenticated users in ",Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/pinpoint/"},"Amazon Pinpoint"),". Extend this for custom metrics or attributes, as you prefer."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"API"),": Provides interaction with RESTful APIs in a secure manner, leveraging ",Object(i.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"},"AWS Signature Version 4"),". The API module is great on serverless infrastructures with ",Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/api-gateway/"},"Amazon API Gateway"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Storage"),": Simplified commands to upload, download, and list content in ",Object(i.b)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"Amazon S3"),". You can also easily group data into public or private content on a per-user basis."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Caching"),": An LRU cache interface across web apps and React Native that uses implementation-specific persistence."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"i18n and Logging"),": Provides internationalization and localization capabilities, as well as debugging and logging capabilities.")),Object(i.b)("p",null,'One of the nice things about Amplify is that it encodes "best practices" in the design for your specific programming environment. For example, one thing we found working with customers and React Native developers is that shortcuts taken during development to get things working quickly would make it through to production stacks. These can compromise either scalability or security, and force infrastructure rearchitecture and code refactoring.'),Object(i.b)("p",null,"One example of how we help developers avoid this is the ",Object(i.b)("a",{parentName:"p",href:"https://www.allthingsdistributed.com/2016/06/aws-lambda-serverless-reference-architectures.html"},"Serverless Reference Architectures with AWS Lambda"),". These show you best practices around using Amazon API Gateway and AWS Lambda together when building your backend. This pattern is encoded into the ",Object(i.b)("inlineCode",{parentName:"p"},"API")," category of Amplify. You can use this pattern to interact with several different REST endpoints, and pass headers all the way through to your Lambda function for custom business logic. We\u2019ve also released an ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/aws-mobile/latest/developerguide/react-native-getting-started.html"},"AWS Mobile CLI")," for bootstrapping new or existing React Native projects with these features. To get started, just install via ",Object(i.b)("strong",{parentName:"p"},"npm"),", and follow the configuration prompts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --global awsmobile-cli\nawsmobile configure\n")),Object(i.b)("p",null,"Another example of encoded best practices that is specific to the mobile ecosystem is password security. The default ",Object(i.b)("inlineCode",{parentName:"p"},"Auth")," category implementation leverages Amazon Cognito user pools for user registration and sign-in. This service implements ",Object(i.b)("a",{parentName:"p",href:"http://srp.stanford.edu"},"Secure Remote Password protocol")," as a way of protecting users during authentication attempts. If you're inclined to read through the ",Object(i.b)("a",{parentName:"p",href:"http://srp.stanford.edu/ndss.html#SECTION00032200000000000000"},"mathematics of the protocol"),", you'll notice that you must use a large prime number when calculating the password verifier over a primitive root to generate a Group. In React Native environments, ",Object(i.b)("a",{parentName:"p",href:"/docs/javascript-environment"},"JIT is disabled"),". This makes BigInteger calculations for security operations such as this less performant. To account for this, we've released native bridges in Android and iOS that you can link inside your project:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"npm install --save aws-amplify-react-native\nreact-native link amazon-cognito-identity-js\n")),Object(i.b)("p",null,"We're also excited to see that the Expo team has included this ",Object(i.b)("a",{parentName:"p",href:"https://blog.expo.io/expo-sdk-v25-0-0-is-now-available-714d10a8c3f7"},"in their latest SDK")," so that you can use Amplify without ejecting."),Object(i.b)("p",null,"Finally, specific to React Native (and React) development, Amplify contains ",Object(i.b)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher order components (HOCs)")," for easily wrapping functionality, such as for sign-up and sign-in to your app:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"import Amplify, { withAuthenticator } from 'aws-amplify-react-native';\nimport aws_exports from './aws-exports';\n\nAmplify.configure(aws_exports);\n\nclass App extends React.Component {\n...\n}\n\nexport default withAuthenticator(App);\n")),Object(i.b)("p",null,"The underlying component is also provided as ",Object(i.b)("inlineCode",{parentName:"p"},"<Authenticator />"),", which gives you full control to customize the UI. It also gives you some properties around managing the state of the user, such as if they've signed in or are waiting for MFA confirmation, and callbacks that you can fire when state changes."),Object(i.b)("p",null,"Similarly, you'll find general React components that you can use for different use cases. You can customize these to your needs, for example, to show all private images from Amazon S3 in the ",Object(i.b)("inlineCode",{parentName:"p"},"Storage")," module:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<S3Album\n  level="private"\n  path={path}\n  filter={(item) => /jpg/i.test(item.path)}/>\n')),Object(i.b)("p",null,"You can control many of the component features via props, as shown earlier, with public or private storage options. There are even capabilities to automatically gather analytics when users interact with certain UI components:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"return <S3Album track/>\n")),Object(i.b)("p",null,"AWS Amplify favors a convention over configuration style of development, with a global initialization routine or initialization at the category level. The quickest way to get started is with an ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/mobile/enhanced-javascript-development-with-aws-mobile-hub/"},"aws-exports file"),". However, developers can also use the library independently with existing resources."),Object(i.b)("p",null,"For a deep dive into the philosophy and to see a full demo, check out the video from ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=vAjf3lyjf8c"},"AWS re:Invent"),"."),Object(i.b)("h2",{id:"aws-appsync"},"AWS AppSync"),Object(i.b)("p",null,"Shortly after the launch of AWS Amplify, we also released ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/appsync/"},"AWS AppSync"),". This is a fully managed GraphQL service that has both offline and real-time capabilities. Although you can use GraphQL in different client programming languages (including native Android and iOS), it's quite popular among React Native developers. This is because the data model fits nicely into a unidirectional data flow and component hierarchy."),Object(i.b)("p",null,"AWS AppSync enables you to connect to resources in your own AWS account, meaning you own and control your data. This is done by using data sources, and the service supports ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/"},"Amazon DynamoDB"),", ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/elasticsearch-service/"},"Amazon Elasticsearch"),", and ",Object(i.b)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),". This enables you to combine functionality (such as NoSQL and full-text search) in a single GraphQL API as a schema. This enables you to mix and match data sources. The AppSync service can also ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/appsync/latest/devguide/provision-from-schema.html"},"provision from a schema"),", so if you aren't familiar with AWS services, you can write GraphQL SDL, click a button, and you're automatically up and running."),Object(i.b)("p",null,"The real-time functionality in AWS AppSync is controlled via ",Object(i.b)("a",{parentName:"p",href:"http://graphql.org/blog/subscriptions-in-graphql-and-relay/"},"GraphQL subscriptions with a well-known, event-based pattern"),". Because subscriptions in AWS AppSync are ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/appsync/latest/devguide/real-time-data.html"},"controlled on the schema")," with a GraphQL directive, and a schema can use any data source, this means you can trigger notifications from database operations with Amazon DynamoDB and Amazon Elasticsearch Service, or from other parts of your infrastructure with AWS Lambda."),Object(i.b)("p",null,"In a way similar to AWS Amplify, you can use ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/appsync/latest/devguide/security.html"},"enterprise security features")," on your GraphQL API with AWS AppSync. The service lets you get started quickly with API keys. However, as you roll to production it can transition to using AWS Identity and Access Management (IAM) or OIDC tokens from Amazon Cognito user pools. You can control access at the resolver level with policies on types. You can even use logical checks for ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/appsync/latest/devguide/security.html#fine-grained-access-control"},"fine-grained access control")," checks at run time, such as detecting if a user is the owner of a specific database resource. There are also capabilities around checking group membership for executing resolvers or individual database record access."),Object(i.b)("p",null,"To help React Native developers learn more about these technologies, there is a ",Object(i.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/appsync/latest/devguide/quickstart.html"},"built-in GraphQL sample schema")," that you can launch on the AWS AppSync console homepage. This sample deploys a GraphQL schema, provisions database tables, and connects queries, mutations, and subscriptions automatically for you. There is also a functioning ",Object(i.b)("a",{parentName:"p",href:"https://github.com/aws-samples/aws-mobile-appsync-events-starter-react-native"},"React Native example for AWS AppSync")," which leverages this built in schema (as well as a ",Object(i.b)("a",{parentName:"p",href:"https://github.com/aws-samples/aws-mobile-appsync-events-starter-react"},"React example"),"), which enable you to get both your client and cloud components running in minutes."),Object(i.b)("p",null,"Getting started is simple when you use the ",Object(i.b)("inlineCode",{parentName:"p"},"AWSAppSyncClient"),", which plugs in to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-client"},"Apollo Client"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"AWSAppSyncClient")," handles security and signing for your GraphQL API, offline functionality, and the subscription handshake and negotiation process:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'import AWSAppSyncClient from "aws-appsync";\nimport { Rehydrated } from \'aws-appsync-react\';\nimport { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";\n\nconst client = new AWSAppSyncClient({\n  url: awsconfig.graphqlEndpoint,\n  region: awsconfig.region,\n  auth: {type: AUTH_TYPE.API_KEY, apiKey: awsconfig.apiKey}\n});\n')),Object(i.b)("p",null,"The AppSync console provides a configuration file for download, which contains your GraphQL endpoint, AWS Region, and API key. You can then use the client with ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apollographql/react-apollo"},"React Apollo"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"const WithProvider = () => (\n  <ApolloProvider client={client}>\n      <Rehydrated>\n          <App />\n      </Rehydrated>\n  </ApolloProvider>\n);\n")),Object(i.b)("p",null,"At this point, you can use standard GraphQL queries:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"query ListEvents {\n    listEvents{\n      items{\n        __typename\n        id\n        name\n        where\n        when\n        description\n        comments{\n          __typename\n          items{\n            __typename\n            eventId\n            commentId\n            content\n            createdAt\n          }\n          nextToken\n        }\n      }\n    }\n}\n")),Object(i.b)("p",null,"The example above shows a query with the sample app schema provisioned by AppSync. It not only showcases interaction with DynamoDB, but also includes pagination of data (including encrypted tokens) and type relations between ",Object(i.b)("inlineCode",{parentName:"p"},"Events")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Comments"),". Because the app is configured with the ",Object(i.b)("inlineCode",{parentName:"p"},"AWSAppSyncClient"),", data is automatically persisted offline and will synchronize when devices reconnect."),Object(i.b)("p",null,"You can see a deep dive of the ",Object(i.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FtkVlIal_m0"},"client technology behind this and a React Native demo in this video"),"."),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/FtkVlIal_m0?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),Object(i.b)("h2",{id:"feedback"},"Feedback"),Object(i.b)("p",null,"The team behind the libraries is eager to hear how these libraries and services work for you. They also want to hear what else we can do to make React and React Native development with cloud services easier for you. Reach out to the AWS Mobile team on GitHub for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/aws/aws-amplify"},"AWS Amplify")," or ",Object(i.b)("a",{parentName:"p",href:"https://github.com/aws-samples/aws-mobile-appsync-events-starter-react-native"},"AWS AppSync"),"."))}p.isMDXComponent=!0}}]);
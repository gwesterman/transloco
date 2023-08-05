"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[9717],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8623:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],l={title:"Persist Translations",description:"Plugins - Persist Translations | Transloco Angular i18n"},i=void 0,c={unversionedId:"plugins/persist-translations",id:"plugins/persist-translations",title:"Persist Translations",description:"Plugins - Persist Translations | Transloco Angular i18n",source:"@site/docs/plugins/persist-translations.mdx",sourceDirName:"plugins",slug:"/plugins/persist-translations",permalink:"/transloco/docs/plugins/persist-translations",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/plugins/persist-translations.mdx",tags:[],version:"current",frontMatter:{title:"Persist Translations",description:"Plugins - Persist Translations | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Message Format",permalink:"/transloco/docs/plugins/message-format"},next:{title:"Persist Lang",permalink:"/transloco/docs/plugins/persist-lang"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Clear Storage",id:"clear-storage",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This plugin provides the functionality of persisting translations to the provided storage."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @ngneat/transloco-persist-translations\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Add persist translation providers using the into the ",(0,a.kt)("inlineCode",{parentName:"p"},"TranslocoRootModule"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"app.config.ts"),", and provide the storage you would like to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import {provideTranslocoPersistTranslations} from '@ngneat/transloco-persist-translations';\n\nimport { TranslocoHttpLoader } from './transloco-loader';\n\n@NgModule({\n  providers: [\n      provideTranslocoPersistTranslations({\n        loader: TranslocoHttpLoader, // ====> Auto generated via ng add\n        storage: { useValue: localStorage }\n      })\n  ],\n  ...\n})\nexport class TranslocoRootModule {}\n")),(0,a.kt)("p",null,"Note that you should ",(0,a.kt)("strong",{parentName:"p"},"not")," include the default loader to make it work."),(0,a.kt)("p",null,"You can also use an async storage. For example, let's install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/localForage/localForage"},"localForage")," and use ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedDB"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import {provideTranslocoPersistTranslations} from '@ngneat/transloco-persist-translations';\nimport * as localForage from 'localforage';\n\nimport { TranslocoHttpLoader } from './transloco-loader';\n\nlocalForage.config({\n  driver: localForage.INDEXEDDB,\n  name: 'Transloco',\n  storeName: 'translations'\n});\n\n@NgModule({\n  providers: [\n      provideTranslocoPersistTranslations({\n        loader: TranslocoHttpLoader, // ====> Auto generated via ng add\n        storage: { useValue: localForage }\n      })\n  ],\n  ...\n})\nexport class TranslocoRootModule {}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"provideTranslocoPersistTranslations")," can also receive the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "ttl": 86400,\n  "storageKey": "yourKey"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ttl"),": How long the cache should live in seconds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storageKey"),": The key to be used to save the translations data.")),(0,a.kt)("h2",{id:"clear-storage"},"Clear Storage"),(0,a.kt)("p",null,"The storage cleanup is done automatically once the ",(0,a.kt)("inlineCode",{parentName:"p"},"ttl")," is passed, but it could also can be done manually by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"clearCache")," method from the cache service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"import { TranslocoPersistTranslations } from '@ngneat/transloco-persist-translations';\n\nexport class AppComponent {\n  constructor(private loader: TranslocoPersistTranslations) {}\n\n  clearTranslationsCache() {\n    this.loader.clearCache();\n  }\n}\n")))}g.isMDXComponent=!0}}]);
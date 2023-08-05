"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[3737],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(6010),l="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(7462),o=n(7294),l=n(6010),r=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,i.k6)(),r=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((function(e){if(r){var t=new URLSearchParams(l.location.search);t.set(r,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[r,l])]}function g(e){var t,n,a,l,r=e.defaultValue,i=e.queryString,s=void 0!==i&&i,c=e.groupId,p=m(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:p})})),h=g[0],v=g[1],b=f({queryString:s,groupId:c}),k=b[0],y=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,u.Nk)(t),a=n[0],l=n[1],[a,(0,o.useCallback)((function(e){t&&l.set(e)}),[t,l])]),T=N[0],C=N[1],S=function(){var e=null!=k?k:T;return d({value:e,tabValues:p})?e:null}();return(0,o.useLayoutEffect)((function(){S&&v(S)}),[S]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var h=n(2389),v="tabList__CuJ",b="tabItem_LNqP";function k(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,c=e.tabValues,u=[],p=(0,r.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,o=u.indexOf(e.currentTarget)+1;n=null!=(a=u[o])?a:u[0];break;case"ArrowLeft":var l,r=u.indexOf(e.currentTarget)-1;n=null!=(l=u[r])?l:u[u.length-1]}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},r,{className:(0,l.Z)("tabs__item",b,null==r?void 0:r.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=l.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=g(e);return o.createElement("div",{className:(0,l.Z)("tabs-container",v)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function T(e){var t=(0,h.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},5743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=n(4866),i=n(5162),s=["components"],c={title:"Locale L10N",description:"Plugins - Locale L10N | Transloco Angular i18n"},u=void 0,p={unversionedId:"plugins/locale",id:"plugins/locale",title:"Locale L10N",description:"Plugins - Locale L10N | Transloco Angular i18n",source:"@site/docs/plugins/locale.mdx",sourceDirName:"plugins",slug:"/plugins/locale",permalink:"/transloco/docs/plugins/locale",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/plugins/locale.mdx",tags:[],version:"current",frontMatter:{title:"Locale L10N",description:"Plugins - Locale L10N | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Preload Languages",permalink:"/transloco/docs/plugins/preload-langs"},next:{title:"3rd Party",permalink:"/transloco/docs/plugins/third-party"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Localization Pipes",id:"localization-pipes",level:2},{value:"Date Pipe",id:"date-pipe",level:3},{value:"Currency Pipe",id:"currency-pipe",level:3},{value:"Decimal Pipe",id:"decimal-pipe",level:3},{value:"Percent Pipe",id:"percent-pipe",level:3},{value:"Setting Locale",id:"setting-locale",level:2},{value:"Translation file names",id:"translation-file-names",level:3},{value:"Language Locale Mapping:",id:"language-locale-mapping",level:3},{value:"Manually Setting Locale:",id:"manually-setting-locale",level:3},{value:"Configuration Options",id:"configuration-options",level:2},{value:"Locale Format Options",id:"locale-format-options",level:2},{value:"Number Format Options",id:"number-format-options",level:2},{value:"Date Format Options",id:"date-format-options",level:2},{value:"Service API",id:"service-api",level:2},{value:"Localization Transformer",id:"localization-transformer",level:2}],f={toc:d};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This plugin provides localization(l10n) support for Transloco."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Localization refers to the adaptation of a product, application or document content to meet the language, cultural and other requirements of a specific target market (a locale).")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @ngneat/transloco-locale\n")),(0,l.kt)(r.Z,{groupId:"app-type",queryString:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"ng-module",label:"NgModule",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)(r.Z,{groupId:"app-type",queryString:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"standalone",label:"Standalone",attributes:{style:{display:"none"}},mdxType:"TabItem"},(0,l.kt)("p",null,"Add the locale providers to your app config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},"export const appConfig = {\n  providers: [\n    provideTranslocoLocale(),\n    ...\n  ]\n};\n")),(0,l.kt)("p",null,"Import the ",(0,l.kt)("inlineCode",{parentName:"p"},"TranslocoLocaleModule")," or the directive/pipe you are using into your standalone component.")),(0,l.kt)(i.Z,{value:"ng-module",label:"NgModule",attributes:{style:{display:"none"}},mdxType:"TabItem"},(0,l.kt)("p",null,"Export the ",(0,l.kt)("inlineCode",{parentName:"p"},"TranslocoLocaleModule")," along with ",(0,l.kt)("inlineCode",{parentName:"p"},"TranslocoModule")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"TranslocoRootModule")," and add the locale providers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { TranslocoLocaleModule, provideTranslocoLocale } from '@ngneat/transloco-locale';\n\n@NgModule({\n  exports: [ TranslocoModule, TranslocoLocaleModule ],\n  providers: [\n      provideTranslocoLocale()\n      ...\n  ],\n})\nexport class TranslocoRootModule {}\n")))),(0,l.kt)("h2",{id:"localization-pipes"},"Localization Pipes"),(0,l.kt)("p",null,"The library provides localization API provided by pipes or from a service, base on the native Javascript's ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"API"),"."),(0,l.kt)("h3",{id:"date-pipe"},"Date Pipe"),(0,l.kt)("p",null,"Transform a date into the locale's date format."),(0,l.kt)("p",null,"The date expression could be: a Date object, a number (milliseconds since UTC epoch), or an ",(0,l.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/NOTE-datetime"},"ISO")," string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},"\x3c!--9/10/2019--\x3e\n<span> {{ date | translocoDate }} </span>\n\x3c!-- Sep 10, 2019, 10:46:12 PM--\x3e\n<span>\n  {{ date | translocoDate: { dateStyle: 'medium', timeStyle: 'medium' } }}\n</span>\n\x3c!-- 7:40:32 PM Coordinated--\x3e\n<span>\n  {{ date | translocoDate: { timeZone: 'UTC', timeStyle: 'full' } }}\n</span>\n\x3c!-- Jan 1, 1970--\x3e\n<span>\n  {{ 1 | translocoDate: { dateStyle: 'medium' } }}\n</span>\n\x3c!-- Feb 8, 2019--\x3e\n<span>\n  {{ '2019-02-08' | translocoDate: { dateStyle: 'medium' } }}\n</span>\n")),(0,l.kt)("h3",{id:"currency-pipe"},"Currency Pipe"),(0,l.kt)("p",null,"Transform a given number into the locale's currency format."),(0,l.kt)("p",null,"The library comes out of the box with locale currency mapping, so once the locale is change the currency will automatically display the right currency.\nThe currency mapping could be customise if needed through the ",(0,l.kt)("a",{parentName:"p",href:"#configuration-options"},"config"),", and could be provided by ",(0,l.kt)("inlineCode",{parentName:"p"},"provideTranslocoLocaleCurrencyMapping"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},"\x3c!--$1,000,000.00--\x3e\n<span> {{ 1000000 | translocoCurrency }} </span>\n\x3c!--1,000,000.00 US dollars--\x3e\n<span>\n  {{ 1000000 | translocoCurrency: 'name' }}\n</span>\n\x3c!--$1,000,000--\x3e\n<span>\n  {{ 1000000 | translocoCurrency: 'symbol' : { minimumFractionDigits: 0 } }}\n</span>\n")),(0,l.kt)("h3",{id:"decimal-pipe"},"Decimal Pipe"),(0,l.kt)("p",null,"Transform a given number into current locale's decimal number format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},"\x3c!--1,234,567,890--\x3e\n<span>\n  {{ 1234567890 | translocoDecimal }}\n</span>\n\x3c!--1234567890--\x3e\n<span>\n  {{ 1234567890 | translocoDecimal: {useGrouping: false} }}\n</span>\n")),(0,l.kt)("h3",{id:"percent-pipe"},"Percent Pipe"),(0,l.kt)("p",null,"Transform a given number into current locale's percent number format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},'\x3c!--100%--\x3e\n<span> 1 | translocoPercent </span>\n\x3c!--100%--\x3e\n<span> "1" | translocoPercent </span>\n')),(0,l.kt)("h2",{id:"setting-locale"},"Setting Locale"),(0,l.kt)("p",null,"The library provides three different ways to set the locale."),(0,l.kt)("h3",{id:"translation-file-names"},"Translation file names"),(0,l.kt)("p",null,"Using locale format for the translation files will automatically declare the locale on ",(0,l.kt)("inlineCode",{parentName:"p"},"langChanges$")," event:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500 i18n/\n   \u251c\u2500 en-US.json\n   \u251c\u2500 en-GB.json\n   \u251c\u2500 es-ES.json\n")),(0,l.kt)("h3",{id:"language-locale-mapping"},"Language Locale Mapping:"),(0,l.kt)("p",null,"Users who don't have more than one locale per language\ncould provide a language to locale mapping object using the ",(0,l.kt)("a",{parentName:"p",href:"#configuration-options"},"config's")," ",(0,l.kt)("inlineCode",{parentName:"p"},"langToLocaleMapping"),":"),(0,l.kt)(r.Z,{groupId:"app-type",queryString:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"standalone",label:"Standalone",attributes:{style:{display:"none"}},mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},"export const appConfig = {\n  providers: [\n    provideTranslocoLocale({\n      langToLocaleMapping: {\n        en: 'en-US',\n        es: 'es-ES'\n      }\n    })\n    ...\n  ]\n};\n"))),(0,l.kt)(i.Z,{value:"ng-module",label:"NgModule",attributes:{style:{display:"none"}},mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { TranslocoLocaleModule, provideTranslocoLocale } from '@ngneat/transloco-locale';\n\n@NgModule({\n  exports: [ TranslocoModule, TranslocoLocaleModule ],\n  providers: [\n    provideTranslocoLocale({\n      langToLocaleMapping: {\n        en: 'en-US',\n        es: 'es-ES'\n      }\n    })\n    ...\n  ],\n})\nexport class TranslocoRootModule {}\n")))),(0,l.kt)("h3",{id:"manually-setting-locale"},"Manually Setting Locale:"),(0,l.kt)("p",null,"The third option in manually setting the locale, this could be done by calling ",(0,l.kt)("inlineCode",{parentName:"p"},"setLocale")," method from ",(0,l.kt)("inlineCode",{parentName:"p"},"localeService"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private service: TranslocoLocaleService) {}\n\n  ngOnInit() {\n    this.service.setLocale('en-US');\n  }\n}\n")),(0,l.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,l.kt)("p",null,"Let's go over each one of the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localeConfig?"),": Declare the default configuration of the locale's formatting. A general configuration could be set using the ",(0,l.kt)("inlineCode",{parentName:"li"},"global")," property, for a configuration by locale use ",(0,l.kt)("inlineCode",{parentName:"li"},"localeBased")," property (default value determine by the native ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Javascript's API"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"defaultLocale?"),": The default locale formatted in ",(0,l.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/bcp47"},"BCP 47")," (default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"en-US"),"),"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"langToLocaleMapping?"),": A key value ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," that maps Transloco language to it's Locale (default value: ",(0,l.kt)("inlineCode",{parentName:"li"},"{}"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localeToCurrencyMapping?"),": A key value ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," that maps the Locale to its currency (formatted in ",(0,l.kt)("a",{parentName:"li",href:"https://www.iso.org/iso-4217-currency-codes.html"},"ISO 4217"),") (the library provide a default value with all of the existing mapping).")),(0,l.kt)("h2",{id:"locale-format-options"},"Locale Format Options"),(0,l.kt)("p",null,"There are two types of formatting options, one for ",(0,l.kt)("inlineCode",{parentName:"p"},"date")," and one for ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,l.kt)("p",null,"The formatted options could be declared in three levels"),(0,l.kt)(r.Z,{groupId:"app-type",queryString:!0,mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"standalone",label:"Standalone",attributes:{style:{display:"none"}},mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the app's configuration (as mentioned above):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.config.ts"',title:'"app.config.ts"'},"const globalFormatConfig = {\n  date: {\n    dateStyle: 'long',\n    timeStyle: 'long'\n  }\n};\n\nconst esESFormatConfig = {\n  date: {\n    timeStyle: 'medium'\n  },\n  currency: {\n    minimumFractionDigits: 0\n  }\n};\n\nexport const appConfig = {\n  providers: [\n    provideTranslocoLocale({\n      localeConfig: {\n        global: globalFormatConfig,\n        localeBased: {\n          'es-ES': esESFormatConfig\n        }\n      }\n    })\n    ...\n  ]\n};\n"))),(0,l.kt)(i.Z,{value:"ng-module",label:"NgModule",attributes:{style:{display:"none"}},mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the module's configuration (as mentioned above):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { TranslocoLocaleModule } from '@ngneat/transloco-locale';\n\nconst globalFormatConfig = {\n  date: {\n    dateStyle: 'long',\n    timeStyle: 'long'\n  }\n};\n\nconst esESFormatConfig = {\n  date: {\n    timeStyle: 'medium'\n  },\n  currency: {\n    minimumFractionDigits: 0\n  }\n};\n\n@NgModule({\n  exports: [ TranslocoModule, TranslocoLocaleModule ],\n  providers: [\n    provideTranslocoLocale({\n      localeConfig: {\n        global: globalFormatConfig,\n        localeBased: {\n          'es-ES': esESFormatConfig\n        }\n      }\n    })\n    ...\n  ],\n})\nexport class TranslocoRootModule {}\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"It could be set in the component's providers using ",(0,l.kt)("inlineCode",{parentName:"li"},"provideTranslocoLocaleConfig"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [provideTranslocoLocaleConfig(localeConfig)]\n})\nexport class MyComponent {}\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"We can pass it to each ",(0,l.kt)("a",{parentName:"li",href:"#localization-pipes"},"pipe")," in the HTML template:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="my-comp.component.html"',title:'"my-comp.component.html"'},"<span>\n  {{ date | translocoDate: { dateStyle: 'medium', timeStyle: 'medium' } }}\n</span>\n\n<span>\n  {{ number | translocoDecimal: {useGrouping: false} }}\n</span>\n")),(0,l.kt)("p",null,"Note the format option of the global, locale's format and the one's being passed in the template, will be merged. While the template is the stronger one and then the locale and the global."),(0,l.kt)("h2",{id:"number-format-options"},"Number Format Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useGrouping"),"- Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. Possible values are true and false; the (default is true)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minimumIntegerDigits"),"- The minimum number of integer digits to use. Possible values are from 1 to 21 (default is 1)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minimumFractionDigits"),"- The minimum number of fraction digits to use. Possible values are from 0 to 20 (default is 0)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"maximumFractionDigits"),"- The maximum number of fraction digits to use. Possible values are from 0 to 20 (default is 3)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minimumSignificantDigits"),"- The minimum number of significant digits to use. Possible values are from 1 to 21 (default is 1)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"maximumSignificantDigits"),"- The maximum number of significant digits to use. Possible values are from 1 to 21 (default is 21)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"currency"),'- The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"signDisplay"),'- When to display the sign for the number. Possible values are "auto", "always", "exceptZero", "negative", "never" (default is "auto").')),(0,l.kt)("h2",{id:"date-format-options"},"Date Format Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dateStyle")," - The date formatting style."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeStyle")," - The time formatting style."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeZone"),' - The time zone to use. The only value implementations must recognize is "UTC"; the default is the runtime\'s default time zone. Implementations may also recognize the time zone names of the ',(0,l.kt)("a",{parentName:"li",href:"https://www.iana.org/time-zones"},"IANA"),' time zone database, such as "Asia/Shanghai", "Asia/Kolkata", "America/New_York".')),(0,l.kt)("h2",{id:"service-api"},"Service API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localeChanges$")," - Observable of the active locale."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localizeDate()")," - Transform a date into a locale's date format."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"localizeNumber()")," - Transform a number into the locale's number format according to the number type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getLocale")," - Gets the active locale."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setLocale")," - Sets the active locale."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getCurrencySymbol")," - Gets the currency symbol for a given locale. If no locale is specified the currently active one is used.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"translocoLocaleService.localeChanges$.subscribe(activeLocale => ...)\n\ntranslocoLocaleService.localizeNumber(1234567890, 'decimal') // 1,234,567,890\ntranslocoLocaleService.localizeNumber(0.5, 'percent') // 50%\ntranslocoLocaleService.localizeNumber(1000, 'currency') // $1,000.00\n\nconst locale = translocoLocaleService.getLocale();\ntranslocoLocaleService.setLocale('en-US')\n\ntranslocoLocaleService.getCurrencySymbol() // $\n")),(0,l.kt)("h2",{id:"localization-transformer"},"Localization Transformer"),(0,l.kt)("p",null,"In some cases you might want to customize the localization transformation, to achieve that you could provide your own localization transformer class."),(0,l.kt)("p",null,"There are two types of transformers for date and number:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="custom-transformer.ts"',title:'"custom-transformer.ts"'},"import { DefaultDateTransformer, DefaultNumberTransformer } from '@ngneat/transloco-locale';\n\nexport class CustomDateTransformer extends DefaultDateTransformer {\n  public transform(date: Date, locale: Locale, options: DateFormatOptions): string {\n    return ...\n\n    // Fallback to default transformer\n    return super.transform(date, locale, options);\n  }\n}\n\nexport class CustomNumberTransformer extends DefaultNumberTransformer {\n  public transform(\n    value: number | string,\n    type: NumberTypes,\n    locale: string,\n    options: Intl.NumberFormatOptions\n  ): string {\n    return ...\n\n    // Fallback to default transformer\n    return super.transform(value, type, locale, options);\n  }\n}\n")),(0,l.kt)("p",null,"Provide these custom transformers using the ",(0,l.kt)("inlineCode",{parentName:"p"},"provideTranslocoDateTransformer")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"provideTranslocoNumberTransformer")," functions."))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[5546],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),s=u(n),d=o,y=s["".concat(p,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(y,a(a({ref:e},l),{},{components:n})):r.createElement(y,a({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3919:function(t,e,n){function r(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!r(t)}n.d(e,{b:function(){return r},Z:function(){return o}})},4996:function(t,e,n){n.d(e,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var t=(0,r.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,n=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,p=i.absolute,u=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(c)return e+n;var l=n.startsWith(e)?n:e+n.replace(/^\//,"");return u?t+l:l}(i,n,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},1088:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=n(4996),c={id:"proxy",title:"Proxy"},p=void 0,u={unversionedId:"proxy",id:"proxy",isDocsHomePage:!1,title:"Proxy",description:"The included HTTPClient has full proxy configuration support:",source:"@site/docs/proxy.md",sourceDirName:".",slug:"/proxy",permalink:"/SpotifyAPI-NET/docs/proxy",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/proxy.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1632859988,formattedLastUpdatedAt:"9/28/2021",frontMatter:{id:"proxy",title:"Proxy"},sidebar:"docs",previous:{title:"Logging",permalink:"/SpotifyAPI-NET/docs/logging"},next:{title:"Pagination",permalink:"/SpotifyAPI-NET/docs/pagination"}},l=[],f={toc:l};function s(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The included ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPClient")," has full proxy configuration support:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var httpClient = new NetHttpClient(new ProxyConfig("localhost", 8080)\n{\n  User = "",\n  Password = "",\n  SkipSSLCheck = false,\n});\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithHTTPClient(httpClient);\n\nvar spotify = new SpotifyClient(config);\n')),(0,i.kt)("p",null,"As an example, ",(0,i.kt)("a",{parentName:"p",href:"https://mitmproxy.org/"},"mitmproxy")," can be used to inspect the requests and responses:"),(0,i.kt)("img",{alt:"mitmproxy",src:(0,a.Z)("img/mitmproxy.png")}))}s.isMDXComponent=!0}}]);
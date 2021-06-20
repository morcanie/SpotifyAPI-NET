(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return r?n.a.createElement(d,o(o({ref:t},b),{},{components:r})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<l;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),l=(r(0),r(124)),i={id:"search",title:"Search",sidebar_label:"Search"},o={unversionedId:"web/search",id:"version-5.1.1/web/search",isDocsHomePage:!1,title:"Search",description:"SearchItems",source:"@site/versioned_docs/version-5.1.1/web/search.md",slug:"/web/search",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/search",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/search.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1624215041,formattedLastUpdatedAt:"6/20/2021",sidebar_label:"Search",sidebar:"version-5.1.1/someSidebar",previous:{title:"Proxy Settings",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy"},next:{title:"Tracks",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/tracks"}},c=[{value:"SearchItems",id:"searchitems",children:[]},{value:"SearchItemsEscaped",id:"searchitemsescaped",children:[]}],b={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"searchitems"},"SearchItems"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.")),Object(l.b)("p",null,"::: warning\nYou may want to use ",Object(l.b)("inlineCode",{parentName:"p"},"SearchItemsEscaped")," if you're processing user-input without validation\n:::"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Example"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"q"),Object(l.b)("td",{parentName:"tr",align:null},"The search query's keywords (and optional field filters and operators), for example q=roadhouse+blues."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"roadhouse+blues"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"type"),Object(l.b)("td",{parentName:"tr",align:null},"A list of item types to search across."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"SearchType.Album"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[limit]"),Object(l.b)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"20"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[offset]"),Object(l.b)("td",{parentName:"tr",align:null},"The index of the first result to return. Default: 0"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"[market]"),Object(l.b)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code or the string from_token."),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'"de"'))))),Object(l.b)("p",null,"Returns a ",Object(l.b)("inlineCode",{parentName:"p"},"SearchItem")," which contains the properties ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<FullArtist> Artists"),",",Object(l.b)("inlineCode",{parentName:"p"},"Paging<FullTrack> Tracks"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<SimpleAlbum> Albums"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Paging<SimplePlaylist> Playlists"),". They are filled based on your search-type."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Usage")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-csharp"},'SearchItem item = _spotify.SearchItems("roadhouse+blues", SearchType.Album | SearchType.Playlist);\nConsole.WriteLine(item.Albums.Total); //How many results are there in total? NOTE: item.Tracks = item.Artists = null\n')),Object(l.b)("hr",null),Object(l.b)("h2",{id:"searchitemsescaped"},"SearchItemsEscaped"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Get Spotify catalog information about artists, albums, tracks or playlists that match a keyword string.")),Object(l.b)("p",null,"Works like ",Object(l.b)("inlineCode",{parentName:"p"},"SearchItems"),", but URL escapes all characters"))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{124:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),c=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),b=a,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?r.a.createElement(h,s(s({ref:n},l),{},{components:t})):r.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(3),r=t(7),o=(t(0),t(124)),i={id:"5_to_6",title:"5.x.x to 6.x.x"},s={unversionedId:"5_to_6",id:"5_to_6",isDocsHomePage:!1,title:"5.x.x to 6.x.x",description:"SpotifyAPI.Web",source:"@site/docs/5_to_6.md",slug:"/5_to_6",permalink:"/SpotifyAPI-NET/docs/5_to_6",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/5_to_6.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1624215041,formattedLastUpdatedAt:"6/20/2021",sidebar:"docs",previous:{title:"UWP",permalink:"/SpotifyAPI-NET/docs/example_uwp"}},p=[{value:"SpotifyAPI.Web",id:"spotifyapiweb",children:[{value:"Initialization",id:"initialization",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"Calling API Endpoints",id:"calling-api-endpoints",children:[]},{value:"Error/Header Handling",id:"errorheader-handling",children:[]}]},{value:"SpotifyAPI.Web.Auth",id:"spotifyapiwebauth",children:[{value:"Authorization Code Auth",id:"authorization-code-auth",children:[]}]}],l={toc:p};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"spotifyapiweb"},"SpotifyAPI.Web"),Object(o.b)("h3",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"5.x"),", a new ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," instance could be created without supplying necessary values, since they were implemented as properties. With ",Object(o.b)("inlineCode",{parentName:"p"},"6.x"),", necessary values have to be given in the constructor and ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," has been renamed to ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyClient"),". Also, ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyClientConfig")," has been introduced to give a better configuration experience, including retry handlers, automatic authenticators and proxy configurations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'// OLD\nvar spotify = new SpotifyWebAPI { AccessToken = "YourAccessToken" };\nvar spotify = new SpotifyWebAPI(ProxyConfig); // No access token - invalid\n\n// NEW\nvar spotify = new SpotifyClient("YourAccessToken");\n\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithToken("YourAccessToken");\nvar spotify = new SpotifyClient(config);\n\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithAuthenticator(new ClientCredentialsAuthenticator(CLIENT_ID, CLIENT_SECRET)); // takes care of access tokens\nvar spotify = new SpotifyClient(config);\n')),Object(o.b)("p",null,"For some performance guides, have a look at the ",Object(o.b)("a",{parentName:"p",href:"/SpotifyAPI-NET/docs/configuration"},"Configuration Guide")),Object(o.b)("h3",{id:"proxy"},"Proxy"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"5.x"),", the proxy configuration could be passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyWebAPI")," constructor. In ",Object(o.b)("inlineCode",{parentName:"p"},"6.x"),", they're part of the HTTP Client. The built-in http client supports proxies out of the box:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'var httpClient = new NetHttpClient(new ProxyConfig("localhost", 8080)\n{\n  User = "",\n  Password = "",\n  SkipSSLCheck = false,\n});\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithHTTPClient(httpClient);\n\nvar spotify = new SpotifyClient(config);\n')),Object(o.b)("h3",{id:"calling-api-endpoints"},"Calling API Endpoints"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"5.x"),", there was one big instance to support all API endpoints. Parameters to these endpoints were passed directly as method parameters. Optional parameters were nullable and could be excluded. In ",Object(o.b)("inlineCode",{parentName:"p"},"6.x"),", every endpoint group (",Object(o.b)("inlineCode",{parentName:"p"},"albums"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tracks"),", ",Object(o.b)("inlineCode",{parentName:"p"},"userprofile"),") has their own API-Client, which is available as a property in a ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyClient")," instance. While URI path parameters are still passed as method parameter, query and body parameters are now passed as a grouped class instance, where required parameters are needed in the constructor and optional parameters can be supplied as properties. All endpoints are also only implemented as async methods."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"// OLD:\nPrivateProfile profile = await spotify.GetPrivateProfileAsync();\nvar playlists = await spotify.GetUserPlaylists(profile.Id, 100, 0);\n\n// NEW:\nPrivateUser user = await spotify.UserProfile.Current();\nvar playlists = await spotify.Playlists.GetUsers(user.Id, new PlaylistGetUsersRequest\n{\n  Limit = 100,\n  Offset = 0\n});\n")),Object(o.b)("p",null,"All required arguments are checked for non-null values. If it's null, the methods will throw a ",Object(o.b)("inlineCode",{parentName:"p"},"ArgumentNullException")),Object(o.b)("h3",{id:"errorheader-handling"},"Error/Header Handling"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"5.x"),", all response models included a base error model, with properties like ",Object(o.b)("inlineCode",{parentName:"p"},"Headers"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HasError"),". This was not a good decision since response models should be clean and only contain API response data. In ",Object(o.b)("inlineCode",{parentName:"p"},"6.x"),", error handling is ",Object(o.b)("inlineCode",{parentName:"p"},"Exception")," based. For example, if the access token is invalid, calling API endpoints will throw a ",Object(o.b)("inlineCode",{parentName:"p"},"APIUnauthorizedException"),". If you hit the API too many times, the method will throw a ",Object(o.b)("inlineCode",{parentName:"p"},"APITooManyRequestsException"),". They all derive from a base exception ",Object(o.b)("inlineCode",{parentName:"p"},"APIException"),", which is also thrown in more general cases, e.g bad request input parameters. If you're interested in the headers of the last response, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"spotify.LastResponse"),", ",Object(o.b)("strong",{parentName:"p"},"make sure there is only one thread using this instance!")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"// OLD:\nPrivateProfile profile = await spotify.GetPrivateProfileAsync();\nif(profile.HasError())\n{\n  // handle error\n}\nvar headers = profile.Headers(); // access to headers\n\n// NEW:\ntry\n{\n    PrivateProfile profile = await spotify.GetPrivateProfileAsync();\n    var response = spotify.LastResponse; // response.Headers\n}\ncatch (APIUnauthorizedException e)\n{\n  // handle unauthorized error\n  // e.Response contains HTTP response\n  // e.Message contains Spotify error message\n}\ncatch (APIException e)\n{\n  // handle common error\n  // e.Response contains HTTP response\n  // e.Message contains Spotify error message\n}\n")),Object(o.b)("p",null,"More Info: ",Object(o.b)("a",{parentName:"p",href:"./error_handling"},"Error Handling")),Object(o.b)("h2",{id:"spotifyapiwebauth"},"SpotifyAPI.Web.Auth"),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"5.x"),", ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," contained every logic related to the OAuth flows. In ",Object(o.b)("inlineCode",{parentName:"p"},"6.x"),", ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," is only required if you need a HTTP Server for handling OAuth responses. For example, if you're in a ASP.NET environment or just use the ",Object(o.b)("a",{parentName:"p",href:"client_credentials"},"Client Credentials")," flow, there is no need to install ",Object(o.b)("inlineCode",{parentName:"p"},"SpotifyAPI.Web.Auth")," anymore."),Object(o.b)("h3",{id:"authorization-code-auth"},"Authorization Code Auth"),Object(o.b)("p",null,"As an example, this shows how to convert a ",Object(o.b)("inlineCode",{parentName:"p"},"5.x")," authorization code flow to ",Object(o.b)("inlineCode",{parentName:"p"},"6.x"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'// OLD\nvar auth =\n  new AuthorizationCodeAuth(_clientId, _secretId, "http://localhost:4002", "http://localhost:4002",\n    Scope.PlaylistReadPrivate | Scope.PlaylistReadCollaborative);\nauth.AuthReceived += AuthOnAuthReceived;\nauth.Start();\nauth.OpenBrowser();\n\nprivate static async void AuthOnAuthReceived(object sender, AuthorizationCode payload)\n{\n  var auth = (AuthorizationCodeAuth) sender;\n  auth.Stop();\n\n  Token token = await auth.ExchangeCode(payload.Code);\n  var spotify = new SpotifyWebAPI { AccessToken = token.AccessToken };\n  await PrintUsefulData(spotify);\n}\n\n// NEW\nvar config = SpotifyClientConfig.CreateDefault();\nvar server = new EmbedIOAuthServer(new Uri("http://localhost:5000/callback"), 5000);\nserver.AuthorizationCodeReceived += async (sender, response) =>\n{\n  await server.Stop();\n  var tokenResponse = await new OAuthClient(config).RequestToken(new AuthorizationCodeTokenRequest(\n    _clientId, _secretId, response.Code, server.BaseUri\n  ));\n\n  var spotify = new SpotifyClient(config.WithToken(tokenResponse.AccessToken));\n}\nawait server.Start();\n\nvar loginRequest = new LoginRequest(server.BaseUri, _clientId, LoginRequest.ResponseType.Code)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nBrowserUtil.Open(loginRequest.ToUri());\n')),Object(o.b)("p",null,"While it is more code to write, there is a better seperation of concerns. For example, it is able to construct a ",Object(o.b)("inlineCode",{parentName:"p"},"LoginRequest")," without starting a server. This ",Object(o.b)("inlineCode",{parentName:"p"},"LoginRequest")," can also be used to forward the user to in a web-based context. The same auth server ",Object(o.b)("inlineCode",{parentName:"p"},"EmbedIOAuthServer")," can be used to receive ",Object(o.b)("inlineCode",{parentName:"p"},"AuthorizationCodes")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ImplictGrants")," responses."))}c.isMDXComponent=!0}}]);
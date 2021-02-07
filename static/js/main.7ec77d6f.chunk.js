(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{69:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n(18),r=n.n(s),o=(n(69),n(24)),i=n(11),l=n(48),j=n(59),d="CAPTURE",u="RELEASE",m=n.n(j)()("state"),h=function(e,t){return console.log("filtering pokemon"),e.filter((function(e){return e!==t}))},b=function(e,t){switch(t.type){case d:return function(e,t){return{capturedPokemons:[].concat(Object(l.a)(t.capturedPokemons),[e])}}(t.pokemon,e);case u:return console.log("releasing"+t.pokemon.nick),function(e,t){return{capturedPokemons:h(t.capturedPokemons,e)}}(t.pokemon,e);default:return e}},x=Object(a.createContext)(),p=function(e){var t=m(b,{capturedPokemons:[]}),n=Object(i.a)(t,2),a=n[0],s=n[1],r={capturedPokemons:a.capturedPokemons,capture:function(e){return s({type:d,pokemon:e})},release:function(e){return s({type:u,pokemon:e})}};return Object(c.jsx)(x.Provider,{value:r,children:e.children})},O=n(27),f=n.n(O),k=n(37),g=n(7),v=n(43),y=n(57),N=n(56),w=n(63),P=n(19),C=n(15),S=n(10),E=n(23),T=n(17),F=function(e){var t=e.pokemon,n="#"+(3===String(t.id).length?t.id:2===String(t.id).length?"0"+t.id:"00"+t.id);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(T.a,{className:"poke-cell poke-"+t.types[0].type.name+"-light",children:[Object(c.jsxs)(T.a.Header,{children:[Object(c.jsx)(T.a.Subtitle,{className:"text-adjust",children:n}),Object(c.jsx)(T.a.Title,{className:"text-center text-uppercase text-adjust",children:t.name})]}),Object(c.jsx)(T.a.Img,{className:"img-adjust",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.id,".png"),alt:t.name}),Object(c.jsx)(T.a.Footer,{children:Object(c.jsx)(C.a,{children:t.types.map((function(e){return Object(c.jsx)(S.a,{className:"text-center",children:Object(c.jsx)("div",{className:"text-adjust align-middle poke-type poke-"+e.type.name,children:e.type.name})})}))})})]})})},B=n(60),A=function(){return Object(c.jsxs)(P.a,{className:"justify-content-center align-center text-center pt-5",style:{width:"100%",height:"100vh"},children:[Object(c.jsx)(B.a,{size:"20rem",animation:"grow",variant:"danger",role:"status",children:Object(c.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(c.jsx)("p",{className:"text-center",children:"Loading data"})]})},H=n.p+"static/media/chevron-arrow-up.b7926f82.svg",I=function(e){var t,n=e.pokemons,a=Object(g.h)().url;return n&&(n.sort((function(e,t){return e.id-t.id})),t=n.map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(S.a,{xs:6,md:3,className:"my-3",children:Object(c.jsx)(o.b,{to:"".concat(a,"/pokemon/")+e.id,style:{textDecoration:"none"},children:Object(c.jsx)(F,{pokemon:e})})},e.id)})}))),n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(P.a,{className:"pokedex-cont",children:[Object(c.jsx)("h1",{className:"text-center display-1 text-adjust mark",children:"Pokemon List"}),Object(c.jsx)(C.a,{children:t})]}),Object(c.jsx)(E.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-btn shadow-none drop-shadow",children:Object(c.jsx)("img",{src:H,alt:"^",style:{width:"2em"},className:"img-adjust"})})]}):Object(c.jsx)(A,{})},L=n(12),D=n(62),W=n(49),M=n(39),U=function(e){var t=e.pokemon,n=t.types,s=t.moves,r="#"+(3===String(t.id).length?t.id:2===String(t.id).length?"0"+t.id:"00"+t.id),o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],u=function(){return d(!1)},m=Object(a.useState)(!1),h=Object(i.a)(m,2),b=h[0],p=h[1],O=function(){return p(!1)},f=Object(a.useState)(""),k=Object(i.a)(f,2),g=k[0],v=k[1],y=Object(a.useState)(""),N=Object(i.a)(y,2),w=N[0],P=N[1],F=Object(a.useContext)(x),B=F.capture,A=F.capturedPokemons,H=function(e){var n={id:t.id+"-"+g,nick:g,name:t.name,pid:t.id,types:t.types};if(A){if(A.some((function(e){return e.nick===n.nick})))return P("*A "+t.name+" called ["+n.nick+"] exists, please enter another name"),void v("");if(!n.nick)return P("*Please enter a name"),void v("");if(n.nick.length>10)return P("*Please input a nickname under 10 characters"),void v("")}v(""),d(!1),B(n),P(""),e.preventDefault()};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(C.a,{className:"media-adjust",children:[Object(c.jsx)(S.a,{xs:12,sm:5,children:Object(c.jsxs)(M.a,{className:"poke-info sticky-top",children:[Object(c.jsx)("h4",{className:"text-adjust mark",children:r}),Object(c.jsx)("h2",{className:"text-adjust text-center text-uppercase display-4 font-weight-bold",children:t.name}),Object(c.jsx)(C.a,{children:n?n.map((function(e){return Object(c.jsx)(S.a,{className:"text-center",children:Object(c.jsx)("h4",{className:"text-adjust poke-type align-middle poke-"+e.type.name,children:e.type.name})})})):null}),Object(c.jsx)("img",{className:"mx-auto d-block img-adjust",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.id,".png"),alt:t.name}),Object(c.jsx)(E.a,{className:"mx-auto d-block catch-button poke-"+n[0].type.name+"-dark shadow-none text-adjust",size:"lg",onClick:function(){Math.random()<.51?(v(""),P(""),d(!0)):p(!0)},children:"Catch the Pokemon!"})]})}),Object(c.jsxs)(S.a,{xs:12,sm:7,children:[Object(c.jsx)("h1",{className:"sticky-top text-adjust",children:"Moves"}),Object(c.jsx)(M.a,{className:"moves-list poke-"+n[0].type.name,children:Object(c.jsx)(D.a,{className:"card-column-style",children:s?s.map((function(e){return Object(c.jsxs)(T.a,{className:"card-style poke-"+n[0].type.name+"-light",children:[" ",Object(c.jsxs)(T.a.Body,{className:"text-capitalize text-adjust font-weight-bold",children:[" ",e.move.name.replace("-"," ")," "]})," "]})})):null})})]})]}),Object(c.jsxs)(L.a,{show:j,onHide:u,backdrop:"static",keyboard:!1,centered:!0,children:[Object(c.jsx)(L.a.Header,{closeButton:!0,children:Object(c.jsx)(L.a.Title,{children:"POKEMON CAUGHT"})}),Object(c.jsxs)(L.a.Body,{children:[Object(c.jsxs)("h2",{className:"text-center",children:["You caught a ",t.name,"!"]}),Object(c.jsxs)(W.a,{onSubmit:H,children:[Object(c.jsx)(W.a.Control,{type:"text",placeholder:"Enter nickname",className:"mr-sm-2",value:g,onChange:function(e){return v(e.target.value)},onKeyPress:function(e){console.log("key handler"),"Enter"===e.key&&(v(e.target.value),H(),e.preventDefault())}}),Object(c.jsx)(W.a.Text,{className:"text-danger text-smaller",children:w})]})]}),Object(c.jsxs)(L.a.Footer,{children:[Object(c.jsx)(E.a,{variant:"secondary",onClick:u,children:"Release"}),Object(c.jsx)(E.a,{variant:"success",onClick:H,children:"Confirm"})]})]}),Object(c.jsxs)(L.a,{show:b,onHide:O,centered:!0,children:[Object(c.jsx)(L.a.Header,{closeButton:!0,children:Object(c.jsx)(L.a.Title,{children:"POKEMON NOT CAUGHT"})}),Object(c.jsx)(L.a.Body,{children:Object(c.jsx)("h2",{className:"text-center",children:"Try again next time"})}),Object(c.jsx)(L.a.Footer,{children:Object(c.jsx)(E.a,{variant:"secondary",onClick:O,children:"Ok"})})]})]})},R=function(){var e=Object(g.g)().pokeID,t=Object(a.useState)([]),n=Object(i.a)(t,2),s=n[0],r=n[1],o=Object(a.useState)(!0),l=Object(i.a)(o,2),j=l[0],d=l[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(f.a.mark((function e(t){var n,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+t+"/");case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,a={id:c.id,name:c.name,types:c.types,moves:c.moves},e.next=9,r(a);case 9:return e.next=11,d(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}})()(e)}),[]),s!==[]&&s?e>898?Object(c.jsx)(P.a,{className:"position-fixed poke-info-cont",children:Object(c.jsx)("h1",{className:"text-center align-center",children:"No pokemon with that ID found"})}):Object(c.jsx)(c.Fragment,{children:j?Object(c.jsx)(A,{}):Object(c.jsx)(P.a,{className:"position-fixed poke-info-cont poke-"+s.types[0].type.name+"-light pt-3",children:Object(c.jsx)(U,{pokemon:s})})}):Object(c.jsx)(A,{})},z=function(e){var t=e.pokemon,n=t.types,s=Object(a.useContext)(x).release,r=Object(a.useState)(!1),o=Object(i.a)(r,2),l=o[0],j=o[1],d=function(){return j(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(C.a,{children:[Object(c.jsx)(S.a,{xs:12,sm:2,children:Object(c.jsx)("img",{className:"mx-auto d-block my-poke-img",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.pid,".png"),alt:t.name})}),Object(c.jsxs)(S.a,{xs:9,sm:8,children:[Object(c.jsx)(C.a,{children:Object(c.jsx)("h3",{className:"text-adjust display-4 font-weight-bold",children:t.nick})}),Object(c.jsx)(C.a,{children:Object(c.jsx)("div",{className:"text-adjust font-italic",children:t.name})}),Object(c.jsxs)(C.a,{className:"mt-2",children:[n?n.map((function(e){return Object(c.jsx)(S.a,{xs:4,sm:2,className:"text-center",children:Object(c.jsx)("div",{className:"text-adjust text-capitalize poke-type float-left poke-"+e.type.name,children:e.type.name})})})):null,Object(c.jsx)(S.a,{xs:!0})]})]}),Object(c.jsx)(S.a,{xs:3,sm:2,className:"bt-release-cont",children:Object(c.jsx)(E.a,{className:"float-right bt-release",variant:"danger",onClick:function(){return j(!0)},children:Object(c.jsx)("span",{"aria-hidden":"true",className:"font-weight-bolder",children:"X"})})})]}),Object(c.jsxs)(L.a,{show:l,onHide:d,centered:!0,children:[Object(c.jsx)(L.a.Header,{closeButton:!0,children:Object(c.jsx)(L.a.Title,{children:"POKEMON CAUGHT"})}),Object(c.jsxs)(L.a.Body,{children:[Object(c.jsxs)("h2",{className:"text-center",children:["Do you want to release [",t.nick,"]?"]}),Object(c.jsx)("img",{className:"mx-auto d-block img-adjust",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t.pid,".png"),alt:t.name})]}),Object(c.jsx)(L.a.Footer,{children:Object(c.jsxs)(C.a,{style:{width:"100%"},children:[Object(c.jsx)(S.a,{xs:6,className:"text-center",children:Object(c.jsx)(E.a,{variant:"secondary",onClick:d,block:!0,children:"Don't Release"})}),Object(c.jsx)(S.a,{xs:6,className:"text-center",children:Object(c.jsx)(E.a,{variant:"danger",onClick:function(){s(t),d()},block:!0,children:"Release"})})]})})]})]})},K=function(){var e,t=Object(a.useContext)(x).capturedPokemons;return t&&0!==t.length?(e=t.map((function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(T.a,{className:"my-5",children:Object(c.jsx)(T.a.Body,{children:Object(c.jsx)(z,{pokemon:e})})})})})))?Object(c.jsxs)(P.a,{className:"position-fixed my-poke-container py-5",children:[Object(c.jsx)("h1",{className:"sticky-top text-center text-adjust display-2 mark",children:"My Pokemon"}),Object(c.jsx)(M.a,{className:"my-poke-list",children:e})]}):null:Object(c.jsx)(P.a,{className:"position-fixed my-poke-container py-5",children:Object(c.jsx)("h1",{className:"text-center",children:"No pokemon caught!"})})},G=function(){return Object(c.jsxs)(P.a,{className:"text-center not-found-cont position-fixed",children:[Object(c.jsx)("h1",{className:"display-2",children:"Page not found."}),Object(c.jsx)(o.b,{to:"/pokedex/",children:"\ud83e\udc68 go back to home"})]})},J=n.p+"static/media/Pokeball.e57f7ae6.svg",X=n.p+"static/media/Bag.0e35bde5.svg",Y=function(){var e=Object(a.useContext)(x).capturedPokemons,t=Object(a.useState)([]),n=Object(i.a)(t,2),s=n[0],r=n[1],j=Object(a.useState)(0),d=Object(i.a)(j,2),u=d[0],m=d[1],h=Object(a.useState)(1),b=Object(i.a)(h,2),p=b[0],O=b[1],P=Object(a.useState)(!1),C=Object(i.a)(P,2),S=C[0],E=C[1],T=Object(a.useState)(!0),F=Object(i.a)(T,2),B=F[0],A=F[1],H=Object(g.h)(),L=H.path,D=H.url,W=function(){var e=Object(k.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=12*(p-1),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?limit=12&offset="+t);case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.results.forEach((function(e){s.includes(e)||M(e)})),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(k.a)(f.a.mark((function e(t){var n,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,a={id:c.id,name:c.name,types:c.types,moves:c.moves},!(c.id>898)){e.next=10;break}return A(!1),e.abrupt("return");case 10:return e.next=12,r((function(e){return[].concat(Object(l.a)(e),[a])}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight-10&&B&&E(!0)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",U),O(2),W(),function(){return window.removeEventListener("scroll",U)}}),[]),Object(a.useEffect)((function(){if(S&&S){var e=p;e++,O(e),W()}}),[S]),Object(a.useEffect)((function(){(e||e.length>0)&&m(e.length)}),[e]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(v.a,{variant:"dark-red drop-shadow-bold",sticky:"top",children:[Object(c.jsx)(o.b,{to:"/pokedex",children:Object(c.jsx)(y.a,{placement:"bottom",overlay:Object(c.jsx)(N.a,{id:"my-pokemon",children:"Open Pokedex"}),children:Object(c.jsxs)(v.a.Brand,{children:[Object(c.jsx)("img",{alt:"",src:J,width:"45",height:"45",className:"d-inline-block align-top drop-shadow"}),"",Object(c.jsx)("h2",{className:"d-inline-block pl-2 navbar-item",children:"Pokemon"})]})})}),Object(c.jsx)(v.a.Collapse,{className:"justify-content-end",children:Object(c.jsx)(o.b,{to:"".concat(D,"/my-pokemon"),children:Object(c.jsx)(y.a,{placement:"bottom",overlay:Object(c.jsx)(N.a,{id:"my-pokemon",children:"Check My Pokemon"}),children:Object(c.jsxs)(v.a.Brand,{children:[Object(c.jsx)("img",{alt:"",src:X,width:"50",height:"50",className:"drop-shadow"}),Object(c.jsx)(w.a,{variant:"primary",className:"align-top text-captured",pill:!0,children:Object(c.jsx)("span",{className:"align-middle",children:u})})]})})})})]}),Object(c.jsxs)(g.d,{children:[Object(c.jsx)(g.b,{exact:!0,path:"/pokedex",children:Object(c.jsx)(I,{pokemons:s})}),Object(c.jsx)(g.b,{path:"".concat(L,"/pokemon/:pokeID"),children:Object(c.jsx)(R,{})}),Object(c.jsx)(g.b,{path:"".concat(L,"/my-pokemon"),children:Object(c.jsx)(K,{})}),Object(c.jsx)(g.b,{render:function(){return Object(c.jsx)(g.a,{to:{pathname:"/not-found"}})},children:Object(c.jsx)(G,{})})]})]})};n(78);var $=function(){return Object(c.jsx)(p,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(Y,{})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(79);r.a.render(Object(c.jsx)($,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pokedex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pokedex","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),console.log("using localhost"),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):V(t,e)}))}}(),q()}},[[80,1,2]]]);
//# sourceMappingURL=main.7ec77d6f.chunk.js.map
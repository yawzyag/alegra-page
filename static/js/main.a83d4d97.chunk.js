(this["webpackJsonpalegra-test"]=this["webpackJsonpalegra-test"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.eab1abc8.svg"},36:function(e,t,a){e.exports=a(57)},41:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),c=a.n(s),o=(a(41),a(12)),i=a(13),l=a(15),m=a(14),u=a(16),d=a(20),p=a(18),v=a(63),h=a(35),f=a(58),E=a(59),b=a(78),g=a(60),N=a(61),y=a(32),O=a.n(y),j=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),s=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"navbar",dark:!0,expand:"md"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:O.a,className:"logo",alt:"logo"})),r.a.createElement(E.a,{onClick:function(){return c(!s)}}),r.a.createElement(b.a,{isOpen:s,navbar:!0},r.a.createElement(g.a,{className:"ml-auto",navbar:!0},r.a.createElement(N.a,null,r.a.createElement(d.b,{to:"/about",className:"link"},"About"))))))},w=j=Object(p.e)(j),k=a(62),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"text-center m-3"},"About me"),r.a.createElement(k.a,null,r.a.createElement("h1",{className:"text-center display-3"},"Hello, I'm Yesid!"),r.a.createElement("p",{className:"lead"},"Esta es una pagina creada para alegra, Los vendedores de la empresa \u201cIm\xe1genes del mundo\u201d deben traer de la web im\xe1genes relacionadas a una palabra que el usuario ingresar\xe1 en la aplicaci\xf3n, la imagen que m\xe1s le guste al usuario ganar\xe1 3 puntos, el vendedor que complete 20 puntos ganar\xe1 la carrera, el codiciado premio es la posibilidad de crear una factura en Alegra con los puntos acumulados por todos los vendedores durante la carrera."),r.a.createElement("hr",{className:"my-2"}),r.a.createElement("p",null,"contact me ",r.a.createElement("a",{href:"mailto:yesid.dev93@gmail.com"},"Email"))))}}]),t}(n.Component),I=a(11),S=a(6),C=a.n(S),P=a(17),D=a(10),A=a(74),T=a(75),z=a(79),B=a(71),V=a(72),F=a(73),q=a(76),R=a(77),G=a(70),J=a(64),Y=a(65),H=a(66),M=a(67),$=a(68),K=a(69),L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{className:"mt-4"},r.a.createElement(J.a,{className:this.getClassNone()},r.a.createElement(Y.a,{className:"shadow"},r.a.createElement(H.a,null,r.a.createElement(M.a,{top:!0,width:"100%",src:this.props.link,alt:"imagensita"}),r.a.createElement($.a,{className:"text-center"},"Vendedor: ",r.a.createElement("strong",null,this.props.vendorName)," ",r.a.createElement("hr",null)),r.a.createElement(K.a,{className:"text-info",style:{height:"6rem",overflow:"auto",textOverflow:"ellipsis"}}," ","Votos totales:"," ",r.a.createElement(G.a,{color:"secondary"},this.props.totalVotes),void 0===this.props.totalVotes&&0," ",r.a.createElement("br",null),this.props.titulo),r.a.createElement("div",{className:this.getButtonC(this.props.vendorId)},r.a.createElement(B.a,{className:"button",size:"lg",onClick:function(){return e.props.onClickPress(e.props.vendorId)},block:!0},"Vota!"))))))}},{key:"getButtonC",value:function(e){var t="text-center";return t+=this.props.totalVotes>20?" empty":""}},{key:"getClassNone",value:function(){var e="m-2";return e+=void 0===this.props.link?" empty":""}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(V.a,{className:"m-4"},r.a.createElement(F.a,{sm:"12",md:"6"},r.a.createElement("h1",null," Ganador ",this.props.vendedor,"!")),r.a.createElement(F.a,{sm:"12",md:"6"},r.a.createElement(B.a,{className:"float-right",onClick:this.props.onRestart},"Reiniciar"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Factura:",r.a.createElement("strong",null," ",this.props.facturaDate),r.a.createElement("span",{className:"float-right"}," ",r.a.createElement("strong",null,"Stado:")," Factura ",this.props.facturaId," pendiente")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h6",{className:"mb-3"},"From:"),r.a.createElement("div",null,r.a.createElement("strong",null,"Alegra")),r.a.createElement("div",null,"Madalinskiego 8"),r.a.createElement("div",null,"71-101 Szczecin, Poland"),r.a.createElement("div",null,"Email: info@info.info"),r.a.createElement("div",null,"Telefono: +48 444 666 3333")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h6",{className:"mb-3"},"To:"),r.a.createElement("div",null,r.a.createElement("strong",null,this.props.cliente)),r.a.createElement("div",null,"Att: Yesid Gonzalez"),r.a.createElement("div",null,"43-190 Mikolow, Poland"),r.a.createElement("div",null,"Email: marek@daniel.com"),r.a.createElement("div",null,"Telefono: +48 123 456 789"))),r.a.createElement("div",{className:"table-responsive-sm"},r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"center"},"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Descripcion"),r.a.createElement("th",{className:"center"},"Qty"),r.a.createElement("th",{className:"right"},"Total"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"center"},"1"),r.a.createElement("td",{className:"left strong"},this.props.concursoName),r.a.createElement("td",{className:"left"},this.props.concursoDescription),r.a.createElement("td",{className:"right"},this.props.total),r.a.createElement("td",{className:"right"},"$",this.props.totalPago))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-sm-5"}),r.a.createElement("div",{className:"col-lg-4 col-sm-5 ml-auto"},r.a.createElement("table",{className:"table table-clear"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"left"},r.a.createElement("strong",null,"Subtotal")),r.a.createElement("td",{className:"right"},"$",this.props.totalPago)),r.a.createElement("tr",null,r.a.createElement("td",{className:"left"},r.a.createElement("strong",null,"Total")),r.a.createElement("td",{className:"right"},r.a.createElement("strong",null,"$",this.props.totalPago)))))))))))}}]),t}(n.Component);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach((function(t){Object(I.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).form={},a.getInitialState=function(){return{items:0,search:"",vendedores:[],images:[],votos:0,ganadores:{},winner:!1,vendedor:"",cliente:"",vendedorId:"",concursoName:"",concursoDescription:"",facturaId:0,facturaDate:"",totalPago:0}},a.handleRestart=Object(P.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState(a.getInitialState());case 2:(function(){var e=Object(P.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({vendedores:[{id:1,name:"Yesid",identification:"123456789",observations:"Observaciones del nuevo vendedor",status:"active"},{id:2,name:"juanito",identification:"",observations:"juanito es cool",status:"active"},{id:3,name:"Haroldo",identification:"",observations:"Es buena persona y amable",status:"active"},{id:4,name:"Marianita",identification:"",observations:"Es una buena ni\xf1a",status:"active"},{id:5,name:"Heimer",identification:"",observations:"Es muy inteligente",status:"active"},{id:6,name:"Paula",identification:"",observations:"Es mas cool",status:"active"},{id:7,name:"Jen",identification:"",observations:"Es amable aveces",status:"active"},{id:8,name:"Ferney",identification:"",observations:"El chico pro",status:"active"},{id:9,name:"Test 1",identification:"",observations:"",status:"active"}],items:9});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 4:case"end":return e.stop()}}),e)}))),a.handleInputChange=function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.form[t.target.name]=t.target,e.next=3,a.setState(Object(I.a)({},t.target.name,t.target.value));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleButton=function(){var e=Object(P.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==a.state[t]){e.next=5;break}return e.next=3,a.setState((function(e){var a;return a={},Object(I.a)(a,t,3),Object(I.a)(a,"ganadores",_({},e.ganadores,Object(I.a)({},t,3))),a}));case 3:e.next=7;break;case 5:return e.next=7,a.setState((function(e){var n;return n={},Object(I.a)(n,t,3+a.state[t]),Object(I.a)(n,"ganadores",_({},e.ganadores,Object(I.a)({},t,3+a.state[t]))),n}));case 7:return e.next=9,a.setState({votos:a.state.votos+3,images:[]});case 9:a.state[t]>=20&&function(){var e=Object(P.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({winner:!0});case 2:return e.next=4,a.setState({facturaId:"43",facturaDate:"2016-02-03",vendedor:"Yesid",cliente:"Juanito",vendedorId:1,concursoName:"Concurso Imagenes",concursoDescription:"Camiseta talla S \xfaltima colecci\xf3n",totalPago:120});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSearcGoogle=function(){a.state.search&&a.form.search.value.length>0&&(function(){var e=Object(P.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.setApiKey("AIzaSyArSIKvzwYs-4kBJ_Be4stqN08KvcNizts");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(P.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest").then((function(){window.gapi.client.search.cse.list({q:a.state.search,cx:"005215205933549556099:si9ryhbwt9j",num:a.state.items,searchType:"image"}).then((function(e){a.setState({images:e.result.items})}),(function(e){console.error("Execute error",e)}))}),(function(e){console.error("Error loading GAPI client for API",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),a.form.search.value="")},a.state=a.getInitialState(),a.handleRestart=a.handleRestart.bind(Object(D.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(P.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({vendedores:[{id:1,name:"Yesid",identification:"123456789",observations:"Observaciones del nuevo vendedor",status:"active"},{id:2,name:"juanito",identification:"",observations:"juanito es cool",status:"active"},{id:3,name:"Haroldo",identification:"",observations:"Es buena persona y amable",status:"active"},{id:4,name:"Marianita",identification:"",observations:"Es una buena ni\xf1a",status:"active"},{id:5,name:"Heimer",identification:"",observations:"Es muy inteligente",status:"active"},{id:6,name:"Paula",identification:"",observations:"Es mas cool",status:"active"},{id:7,name:"Jen",identification:"",observations:"Es amable aveces",status:"active"},{id:8,name:"Ferney",identification:"",observations:"El chico pro",status:"active"},{id:9,name:"Test 1",identification:"",observations:"",status:"active"}],items:9});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state.winner;return r.a.createElement(v.a,{className:"mt-4"},r.a.createElement("p",{className:"text-info text-center"},"Ingresa tu busqueda, haz click en buscar y escoge tu imagen favorita!"),r.a.createElement(A.a,{className:"shadow-sm"},r.a.createElement(T.a,{placeholder:"Ingresa una busqueda para encontrar imagenes",name:"search",onChange:this.handleInputChange,noValidate:!0}),r.a.createElement(z.a,{addonType:"append"},r.a.createElement(B.a,{className:"button",onClick:this.handleSearcGoogle},"Buscar"))),r.a.createElement("p",{className:this.getClassNone()},this.formatSearch()),t?r.a.createElement(V.a,null,r.a.createElement(W,{onRestart:this.handleRestart,total:this.state.votos,vendedor:this.state.vendedor,cliente:this.state.vendedor,vendedorId:this.state.vendedorId,concursoName:this.state.concursoName,concursoDescription:this.state.concursoDescription,totalPago:this.state.totalPago,facturaId:this.state.facturaId,facturaDate:this.state.facturaDate})):r.a.createElement(v.a,{className:this.getClassNone()},r.a.createElement("h1",{className:"text-center"},"Gallery"),r.a.createElement(V.a,null,this.state.images.map((function(t,a){return r.a.createElement(F.a,{key:a,sm:"12",md:"6"},r.a.createElement(L,{vendorId:e.state.vendedores[a].id,link:t.link,vendorName:e.state.vendedores[a].name,totalVotes:e.state[e.state.vendedores[a].id],titulo:t.title,onClickPress:e.handleButton}))})))),r.a.createElement(q.a,{className:this.getClassListNone()},Object.keys(this.state.ganadores).map((function(t){return r.a.createElement(R.a,{key:t,className:"justify-content-between"},"Votos para vendedor ",e.state.vendedores[t-1].name," ",r.a.createElement(G.a,{color:"dark",pill:!0},e.state.ganadores[t]),r.a.createElement("br",null),r.a.createElement("p",null,"Faltan"," ",e.state.ganadores[t]<20?20-e.state.ganadores[t]:0," ","para ganar!"))})),r.a.createElement(R.a,{className:"shadow"},"Total votos:"," ",r.a.createElement(G.a,{className:"button",pill:!0},this.state.votos)," ")))}},{key:"getClassNone",value:function(){var e="m-2";return e+=0===this.state.images.length?" empty":""}},{key:"getClassListNone",value:function(){var e="m-2";return e+=this.state.images.length>0?" empty":""}},{key:"formatSearch",value:function(){var e=this.state.items;return 0===e?"":"Numero de concursantes: ".concat(e)}}]),t}(n.Component),X=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(w,null),r.a.createElement(v.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:U}),r.a.createElement(p.a,{path:"/about",component:x})))}}]),t}(n.Component));a(56),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a83d4d97.chunk.js.map
(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=n(10),s=n(8),l=n(16),u={searchField:""},h={robots:[],isPending:!0},d=n(1),f=n(2),b=n(4),p=n(3),m=n(5),g=function(e){var t=e.name,n=e.id,o=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,t),r.a.createElement("div",null,o),r.a.createElement("div",null,"more stuff coming"))},v=function(e){var t=e.robots;return console.log("CardList"),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(g,{key:e.id,name:e.name,id:e.id,email:e.email})})))},E=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots","aria-label":"search robots",onChange:t}))},O=function(e){return r.a.createElement("div",{style:{height:"800px",border:"5px solid",overflowY:"scroll"}},e.children)},j=(n(27),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooop. this is not good"):this.props.children}}]),t}(o.Component)),y=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).updateCount=function(){n.setState((function(e){return{count:e.count+1}}))},n.updateCountTo3=function(){n.setState((function(e){return{count:3}}))},n.state={count:0},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return console.log("CountButton",this.props.color),r.a.createElement("div",null,r.a.createElement("button",{color:this.props.color,id:"counter",className:"f1",onClick:this.updateCount},this.state.count),r.a.createElement("button",{className:"f1",onClick:this.updateCountTo3},"update to 3"))}}]),t}(o.PureComponent),w=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(y,{color:"red"}))}}]),t}(o.Component),C=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(b.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).filterRobots=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,o=e.onSearchChange,a=e.isPending;return r.a.createElement("div",{className:"tc"},r.a.createElement(w,null),r.a.createElement(E,{searchChange:o}),r.a.createElement(O,null,a?r.a.createElement("h1",null,"Loading"):r.a.createElement(j,null,r.a.createElement(v,{robots:this.filterRobots(t,n)}))))}}]),t}(o.Component),R=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement(C,this.props)}}]),t}(o.Component),S=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){console.log("here before error???"),e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),k=(n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(29);var _=Object(s.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}}),N=Object(s.d)(_,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robotfriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robotfriends","/service-worker.js");k?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.20c83a08.chunk.js.map
(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(8),s=n.n(c),i=n(25),o=n.n(i),a=(n(32),n.p+"static/media/logo.6ce24c58.svg"),u=(n(33),n(9)),l=n(26),r=n(11),j=n(3);var d=function(e){return Object(j.jsx)("div",{className:"header",children:e.children})};function b(e){return Object(j.jsx)("div",{onClick:e.onClick,className:"circleButton "+e.additionalClasses,children:e.children})}b.defaultProps={onClick:function(){}};var f=b;var p=function(e){return Object(j.jsx)("div",{className:"floatingMenuContainer "+e.containerClasses,children:Object(j.jsx)("div",{className:"floatingMenu",children:e.children})})};function h(e){return Object(j.jsx)("div",{className:"speechButtonsDivOuter",children:Object(j.jsxs)("div",{className:"speechButtonsDiv",children:[Object(j.jsx)("button",{className:"button",onClick:e.play,children:"Play"}),Object(j.jsx)("button",{className:"button",onClick:e.pause,children:"Pause"}),Object(j.jsx)("button",{className:"button",onClick:e.stop,children:"Stop"})]})})}h.defaultProps={play:function(){},pause:function(){},stop:function(){}};var O=h;function v(e){function t(e){document.getElementById("ta").value=e}return Object(c.useEffect)((function(){return function(){}}),[]),Object(j.jsxs)("div",{id:"mainDiv",className:"noteEdit "+(!e.show&&"hidden"),children:[Object(j.jsx)("button",{className:"closeButton",onClick:e.closeFunction,children:"x"}),Object(j.jsx)("textarea",{id:"ta",onLoad:function(){return t(e.noteString)}}),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)("button",{className:"button",children:"Cancel"}),Object(j.jsx)("button",{onClick:function(){return t(e.noteString)},className:"button",children:"Load"}),Object(j.jsx)("button",{onClick:function(){return e.saveFunction(document.getElementById("ta").value)},className:"button",children:"Save"})]})]})}v.defaultProps={closeFunction:function(){},testFunction:function(){console.log("no test functio sent")}};var m=v;var x=function(e){var t,n,s=Object(c.useState)([]),i=Object(u.a)(s,2),o=i[0],a=i[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),v=h[0],x=h[1],g=Object(c.useState)([]),N=Object(u.a)(g,2),C=N[0],S=N[1],k=Object(c.useState)(!1),y=Object(u.a)(k,2),w=y[0],B=y[1],D=Object(c.useState)(),I=Object(u.a)(D,2),F=I[0],E=I[1],L=0,P=!1;function M(e){Object(r.b)(Object(r.c)(n,"note-app/note-sets/"+e),(function(e){return function(e){var t=e;t=t.replaceAll("=>"," arrow "),S(t.split("\n"))}(e.val()),!0}))}function U(e){var t;t=e,Object(r.b)(Object(r.c)(n,"note-app/note-sets/"+t),(function(e){x(e.val()),E(t)})),B(!0)}function A(e){var t=new SpeechSynthesisUtterance;t.text=e,window.speechSynthesis.speak(t)}function K(){P||(L>=C.length&&(L=0),A(C[L]),++L>=C.length&&(L=0),setTimeout(K,5e3))}function T(){P=!0}return t=Object(l.a)({apiKey:"AIzaSyBDWCKZwSBi_Qp4U0u3D2tKrcIU290IrDE",authDomain:"defaultproject-c023e.firebaseapp.com",databaseURL:"https://defaultproject-c023e-default-rtdb.firebaseio.com",projectId:"defaultproject-c023e",storageBucket:"defaultproject-c023e.appspot.com",messagingSenderId:"147977670881",appId:"1:147977670881:web:fe1532718095f374bbe7a0",measurementId:"G-VY1DMS0BKY"}),n=Object(r.a)(t),Object(c.useEffect)((function(){!function(){var e=Object(r.c)(n,"note-app/set-names");Object(r.b)(e,(function(e){var t=[];e.forEach((function(e){t.push({key:e.key,value:e.val()})})),a(t)}))}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)(d,{children:[Object(j.jsx)(f,{children:Object(j.jsxs)(p,{containerClasses:" sideMenu",children:[Object(j.jsx)("div",{className:"setNameTitle",children:"Note Sets"}),Object(j.jsx)("div",{className:"setNameDiv",onClick:function(){x("")},children:"+ New Set +"}),o.map((function(e){return Object(j.jsxs)("div",{className:"setNameDiv",onClick:function(){return M(e.key)},children:[e.value,Object(j.jsx)(f,{onClick:function(){return U(e.key)},additionalClasses:"circleButtonInline"})]},e.key)}))]})}),Object(j.jsx)(f,{children:Object(j.jsx)(p,{containerClasses:" floatingMenuRight"})})]}),Object(j.jsx)(O,{play:function(){if(0==C.length)return A("loading first note set"),void M(1);P=!1,K()},pause:T,stop:function(){T(),L=0}}),Object(j.jsx)(m,{noteString:v,show:w,closeFunction:function(){B(!1)},saveFunction:function(e){console.log("new string: "+e),Object(r.d)(Object(r.c)(n,"note-app/note-sets/"+F),e)},testFunction:function(){var e=new SpeechSynthesisUtterance;e.text="test",window.speechSynthesis.speak(e)}}),0==C.length?Object(j.jsx)("div",{children:"Load notes from left to begin"}):"",0==C.length?e.children:"",Object(j.jsx)("div",{className:"noteLineContainer",children:C.map((function(e,t){return Object(j.jsx)("div",{className:"noteLineDiv",children:t+": "+e},t)}))})]})};var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{children:Object(j.jsx)("img",{src:a,className:"App-logo",alt:"logo"})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.c9c6f646.chunk.js.map
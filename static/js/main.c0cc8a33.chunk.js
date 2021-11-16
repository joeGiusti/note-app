(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),i=n(25),a=n.n(i),o=(n(32),n.p+"static/media/logo.6ce24c58.svg"),l=(n(33),n(9)),u=n(26),r=n(10),j=n(3);var d=function(e){return Object(j.jsx)("div",{className:"header",children:e.children})};function b(e){return Object(j.jsx)("div",{onClick:e.onClick,className:"circleButton "+e.additionalClasses,children:e.children})}b.defaultProps={onClick:function(){}};var p=b;var f=function(e){return Object(j.jsx)("div",{className:"floatingMenuContainer "+e.containerClasses,children:Object(j.jsx)("div",{className:"floatingMenu",children:e.children})})};function O(e){return Object(j.jsx)("div",{className:"speechButtonsDivOuter",children:Object(j.jsxs)("div",{className:"speechButtonsDiv",children:[Object(j.jsx)("button",{className:"button",onClick:e.play,children:"Play"}),Object(j.jsx)("button",{className:"button",onClick:e.pause,children:e.paused?"Resume":"Pause"}),Object(j.jsx)("button",{className:"button",onClick:e.stop,children:"Stop"})]})})}O.defaultProps={play:function(){},pause:function(){},stop:function(){}};var m=O;function h(e){function t(e){document.getElementById("ta").value=e}function n(e){document.getElementById("titleInput").value=e}return Object(c.useEffect)((function(){return t(e.noteString),n(e.title),function(){}}),[]),Object(j.jsxs)("div",{id:"mainDiv",className:"noteEdit ",children:[Object(j.jsx)("button",{className:"closeButton",onClick:e.closeFunction,children:"x"}),Object(j.jsx)("input",{id:"titleInput"}),Object(j.jsx)("textarea",{id:"ta"}),Object(j.jsxs)("div",{className:"buttonContainer",children:[Object(j.jsx)("button",{className:"button",children:"Cancel"}),Object(j.jsx)("button",{onClick:function(){return n(e.title)},className:"button",children:"Load"}),Object(j.jsx)("button",{onClick:function(){return e.saveFunction(document.getElementById("ta").value)},className:"button",children:"Save"})]})]})}h.defaultProps={closeFunction:function(){},testFunction:function(){console.log("no test functio sent")},title:"title not sent"};var v=h;var x=function(e){var t,n,s=Object(c.useState)([]),i=Object(l.a)(s,2),a=i[0],o=i[1],b=Object(c.useState)(""),O=Object(l.a)(b,2),h=O[0],x=O[1],g=Object(c.useState)([]),N=Object(l.a)(g,2),C=N[0],k=N[1],I=Object(c.useState)(!1),S=Object(l.a)(I,2),y=S[0],B=S[1],D=Object(c.useState)(),w=Object(l.a)(D,2),F=w[0],A=w[1],E=Object(c.useState)("title"),L=Object(l.a)(E,2),P=L[0],M=L[1],T=Object(c.useState)(!1),K=Object(l.a)(T,2),U=K[0],R=K[1],J=Object(c.useState)(!1),Y=Object(l.a)(J,2),q=Y[0],z=Y[1],G=0,Q=8e3,V={speakFunction:function(){return _("test")}};function W(e){Object(r.b)(Object(r.d)(n,"note-app/note-sets/"+e),(function(e){return function(e){if(null==e)return;var t=e;t=(t=(t=(t=(t=(t=(t=(t=t.replaceAll(" ",", ")).replaceAll("  "," ")).replaceAll("=>"," arrow, ")).replaceAll(" , ","comma, ")).replaceAll("("," par, ")).replaceAll("["," square, ")).replaceAll("{"," curley, ")).replaceAll(" -"," dash "),k(t.split("\n"))}(e.val()),!0}))}function Z(e,t){var c;c=e,Object(r.b)(Object(r.d)(n,"note-app/note-sets/"+c),(function(e){x(e.val()),A(c)})),M(a[t]),console.log("index: "+t+" setData["+t+"] = "+a[t]),B(!0)}function _(e){var t=new SpeechSynthesisUtterance;t.text=e,window.speechSynthesis.speak(t)}function H(){U||(G>=C.length&&(G=0),_(C[G]),++G>=C.length&&(G=0),setTimeout(H,Q))}function X(){R(!0),z(!1)}return t=Object(u.a)({apiKey:"AIzaSyBDWCKZwSBi_Qp4U0u3D2tKrcIU290IrDE",authDomain:"defaultproject-c023e.firebaseapp.com",databaseURL:"https://defaultproject-c023e-default-rtdb.firebaseio.com",projectId:"defaultproject-c023e",storageBucket:"defaultproject-c023e.appspot.com",messagingSenderId:"147977670881",appId:"1:147977670881:web:fe1532718095f374bbe7a0",measurementId:"G-VY1DMS0BKY"}),n=Object(r.a)(t),Object(c.useEffect)((function(){!function(){var e=Object(r.d)(n,"note-app/set-names");Object(r.b)(e,(function(e){var t=[];e.forEach((function(e){t.push({key:e.key,value:e.val()})})),o(t)}))}(),document.getElementById("timeIntervalInput").value="8000"}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)(d,{functios:V,children:[Object(j.jsx)(p,{children:Object(j.jsxs)(f,{containerClasses:" sideMenu",children:[Object(j.jsx)("div",{className:"setNameTitle",children:"Note Sets"}),Object(j.jsxs)("div",{className:"setNameDivContainer",children:[Object(j.jsx)("div",{className:"setNameDiv",onClick:function(){return function(){var e=Object(r.c)(Object(r.d)(n,"note-app/set-names"));Object(r.e)(e,"New Note"),Object(r.e)(Object(r.d)(n,"note-app/note-sets/"+e.key),"new note text goes here"),x("")}()},children:"+ New Set +"}),a.map((function(e,t){return Object(j.jsxs)("div",{className:"setNameDiv",onClick:function(){return W(e.key)},children:[e.value,Object(j.jsx)(p,{onClick:function(){return Z(e.key)},additionalClasses:"circleButtonInline"})]},e.key)}))]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{id:"timeIntervalInput"}),Object(j.jsx)("button",{onClick:function(){Q=Number(document.getElementById("timeIntervalInput").value)},children:"Set Time Interval"})]})]})}),Object(j.jsx)(p,{children:Object(j.jsx)(f,{containerClasses:" floatingMenuRight"})})]}),Object(j.jsx)(m,{play:function(){if(!q){if(z(!0),0==C.length)return _("loading first note set"),W(1),void z(!1);H()}},pause:U?function(){R(!1),z(!0),H()}:X,stop:function(){X(),G=0},paused:U}),y&&Object(j.jsx)(v,{noteString:h,closeFunction:function(){B(!1)},saveFunction:function(e){console.log("new string: "+e),Object(r.e)(Object(r.d)(n,"note-app/note-sets/"+F),e)},testFunction:function(){_("test")},title:P}),0==C.length?Object(j.jsx)("div",{children:"Load notes from left to begin"}):"",0==C.length?e.children:"",Object(j.jsx)("div",{className:"noteLineContainer",children:C.map((function(e,t){return Object(j.jsx)("div",{className:"noteLineDiv",children:t+": "+e},t)}))})]})};var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{children:Object(j.jsx)("img",{src:o,className:"App-logo",alt:"logo"})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.c0cc8a33.chunk.js.map
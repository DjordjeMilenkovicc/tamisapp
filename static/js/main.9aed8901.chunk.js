(this.webpackJsonptamis040=this.webpackJsonptamis040||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a(2),c=a.n(s),o=a(17),r=a.n(o),i=(a(50),a(15)),l=(a(51),a(52),a(88)),u=a(22),j=u.a.initializeApp({apiKey:"AIzaSyAH2EP-fbpQrdR_UY6YGS63DDlr8RLxvzM",authDomain:"tamis040-1acb0.firebaseapp.com",projectId:"tamis040-1acb0",storageBucket:"tamis040-1acb0.appspot.com",messagingSenderId:"248449546499",appId:"1:248449546499:web:8b36afd93685186a935136",measurementId:"G-TLH9CTZJRX"}).firestore(),p=u.a.auth(),d=u.a.storage();var m=function(e){var t=e.postId,a=e.user,c=e.username,o=e.caption,r=e.imageURL,p=Object(s.useState)([]),d=Object(i.a)(p,2),m=d[0],b=d[1],O=Object(s.useState)(""),h=Object(i.a)(O,2),g=h[0],f=h[1];return Object(s.useEffect)((function(){var e;return t&&(e=j.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),Object(n.jsxs)("div",{className:"post",children:[Object(n.jsxs)("div",{className:"post__header",children:[Object(n.jsx)(l.a,{className:"post__avatar",alt:"Huri",src:"/img/logo.jpg/"}),Object(n.jsx)("h3",{children:c})]}),Object(n.jsx)("img",{className:"post__image",src:r,alt:""}),Object(n.jsxs)("h4",{className:"post__text",children:[Object(n.jsx)("strong",{children:c})," ",o]}),Object(n.jsx)("div",{className:"post__comments",children:m.map((function(e){return Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:e.username})," ",e.text]})}))}),a&&Object(n.jsxs)("form",{className:"post__commentBox",children:[Object(n.jsx)("input",{className:"post__input",type:"text",placeholder:"Dodaj komentar...",value:g,onChange:function(e){return f(e.target.value)}}),Object(n.jsx)("button",{className:"post__button",disabled:!g,type:"submit",onClick:function(e){e.preventDefault(),j.collection("posts").doc(t).collection("comments").add({text:g,username:a.displayName,timestamp:u.a.firestore.FieldValue.serverTimestamp()}),f("")},children:"Objavi komentar"})]})]})},b=a(84),O=a(85),h=a(87),g=a(86);a(60);var f=function(e){var t=e.username,a=Object(s.useState)(null),c=Object(i.a)(a,2),o=c[0],r=c[1],l=Object(s.useState)(0),p=Object(i.a)(l,2),m=p[0],b=p[1],O=Object(s.useState)(""),h=Object(i.a)(O,2),f=h[0],x=h[1];return Object(n.jsxs)("div",{className:"imageupload",children:[Object(n.jsx)("progress",{className:"imageupload__progress",value:m,max:"100"}),Object(n.jsx)("input",{type:"text",placeholder:"Dodaj opis",onChange:function(e){return x(e.target.value)},value:f}),Object(n.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&r(e.target.files[0])}}),Object(n.jsx)(g.a,{className:"imageupload__button",onClick:function(){d.ref("images/".concat(o.name)).put(o).on("stage_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);b(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(o.name).getDownloadURL().then((function(e){j.collection("posts").add({timestamp:u.a.firestore.FieldValue.serverTimestamp(),caption:f,imageURL:e,username:t}),b(0),x(""),r(null)}))}))},children:"upload"})]})};function x(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var v=Object(b.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var _=function(){var e=v(),t=Object(s.useState)(x),a=Object(i.a)(t,1)[0],c=Object(s.useState)([]),o=Object(i.a)(c,2),r=o[0],l=o[1],u=Object(s.useState)(!1),d=Object(i.a)(u,2),b=d[0],_=d[1],N=Object(s.useState)(!1),y=Object(i.a)(N,2),C=y[0],S=y[1],k=Object(s.useState)(""),L=Object(i.a)(k,2),I=L[0],U=L[1],w=Object(s.useState)(""),D=Object(i.a)(w,2),E=D[0],R=D[1],T=Object(s.useState)(""),A=Object(i.a)(T,2),B=A[0],F=A[1],P=Object(s.useState)(null),z=Object(i.a)(P,2),H=z[0],J=z[1];return Object(s.useEffect)((function(){var e=p.onAuthStateChanged((function(t){return t?(console.log(t),J(t)):J(null),function(){e()}}))}),[H,I]),Object(s.useEffect)((function(){j.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(O.a,{open:b,onClose:function(){return _(!1)},children:Object(n.jsx)("div",{style:a,className:e.paper,children:Object(n.jsxs)("form",{className:"app__signup",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"app__headerImage",src:"img/logo.jpg",alt:""})}),Object(n.jsx)(h.a,{placeholder:"Korisni\u010dko ime",type:"text",value:I,onChange:function(e){return U(e.target.value)}}),Object(n.jsx)(h.a,{placeholder:"Email adresa",type:"text",value:B,onChange:function(e){return F(e.target.value)}}),Object(n.jsx)(h.a,{placeholder:"Lozinka",type:"password",value:E,onChange:function(e){return R(e.target.value)}}),Object(n.jsx)(g.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(B,E).then((function(e){return e.user.updateProfile({displayName:I})})).catch((function(e){return alert(e.message)})),_(!1)},children:"Uloguj se"})]})})}),Object(n.jsx)(O.a,{open:C,onClose:function(){return S(!1)},children:Object(n.jsx)("div",{style:a,className:e.paper,children:Object(n.jsxs)("form",{className:"app__signup",children:[Object(n.jsx)("center",{children:Object(n.jsx)("img",{className:"app__headerImage",src:"img/logo.jpg",alt:""})}),Object(n.jsx)(h.a,{placeholder:"Email adresa",type:"text",value:B,onChange:function(e){return F(e.target.value)}}),Object(n.jsx)(h.a,{placeholder:"Lozinka",type:"password",value:E,onChange:function(e){return R(e.target.value)}}),Object(n.jsx)(g.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(B,E).catch((function(e){return alert(e.message)})),S(!1)},children:"Uloguj se"})]})})}),Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("div",{className:"app__headerLogo",children:Object(n.jsx)("h4",{children:"Tami\u0161 0-40"})}),H?Object(n.jsx)(g.a,{onClick:function(){return p.signOut()},children:"Odjavi se"}):Object(n.jsxs)("div",{className:"app__loginContainer",children:[Object(n.jsx)(g.a,{onClick:function(){return S(!0)},children:"Uloguj se"}),Object(n.jsx)(g.a,{onClick:function(){return _(!0)},children:"Registruj se"})]})]}),Object(n.jsx)("div",{className:"app__posts",children:Object(n.jsx)("div",{className:"app__postsLeft",children:r.map((function(e){var t=e.id,a=e.post;return Object(n.jsx)(m,{postId:t,user:H,username:a.username,caption:a.caption,imageURL:a.imageURL},t)}))})}),(null===H||void 0===H?void 0:H.displayName)?Object(n.jsx)(f,{username:H.displayName}):Object(n.jsx)("h3",{children:"Ups! Uloguj se pre nego \u0161to nastavi\u0161... "})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),c(e),o(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.9aed8901.chunk.js.map
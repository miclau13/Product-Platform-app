(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{106:function(e,t,a){},109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=(a(82),a(67)),l=a(24),u=a(19),m=a.n(u),p=a(29),s=a(23),f=a(30),d=a.n(f),b=a(140),g=a(145),h=a(146),v=a(147),w=a(110),E=a(144),x=a(155),y=Object(b.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8,justifyContent:"center"},input:{marginLeft:e.spacing(1),flex:1},button:{marginLeft:10}}})),j=r.a.forwardRef((function(e,t){var a=e.onSubmit,n=y();return r.a.createElement(w.a,{component:"form",className:n.root,onSubmit:a},r.a.createElement(x.a,{name:"upload-file",type:"file",inputRef:t}),r.a.createElement(E.a,{className:n.button,color:"primary",variant:"contained","aria-label":"upload",type:"submit"},"Import"))})),O=Object(b.a)((function(e){return{root:{width:"70vw"},table:{maxHeight:"50vh"}}}));function B(){var e=O(),t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],o=a[1],i=r.a.useRef(null),c=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("file",i.current.files[0]),o(!0),e.next=6,d.a.post("/products/import",a,{headers:{"Content-Type":"multipart/form-data"},responseType:"blob"});case 6:e.sent,o(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(g.a,{className:e.root},r.a.createElement(h.a,null,r.a.createElement(j,{onSubmit:c,ref:i}),n?r.a.createElement(v.a,{height:300}):null))}a(150),a(154),a(153),a(149),a(151),a(152);var N=a(47),S=a.n(N),k=a(46),I=a.n(k);a(156),a(148),a(66),Object(b.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));Object(b.a)((function(e){return{root:{width:"70vw"},table:{maxHeight:"50vh"}}})),new Map([[1,"masculine"],[2,"feminine"],[0,"ambiguous"]]),new Map([[1,"male"],[2,"female"]]),new Map([[1,I.a[500]],[2,S.a[200]]]);var L=Object(b.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8,justifyContent:"center"},input:{marginLeft:e.spacing(1),flex:1},button:{marginLeft:10}}}));r.a.forwardRef((function(e,t){var a=e.onSubmit,n=L();return r.a.createElement(w.a,{component:"form",className:n.root,onSubmit:a},r.a.createElement(x.a,{name:"upload-file",type:"file",inputRef:t}),r.a.createElement(E.a,{className:n.button,color:"primary",variant:"contained","aria-label":"upload",type:"submit"},"Validate"))})),Object(b.a)((function(e){return{root:{width:"70vw"},table:{maxHeight:"50vh"}}}));a(106);var R=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/import_data"},r.a.createElement(B,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(B,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(109)},82:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.d8dbf4c3.chunk.js.map
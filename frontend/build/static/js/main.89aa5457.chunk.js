(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(26),s=n.n(c),i=n(39),r=n(6),o=n(20),l=n.n(o),j=n(24),d=n(10),u=n(27),b=n(21),h=n.n(b),p=n(148),x=n(143),m=n(147),O=n(2),f=function(e){var t=e.history;var n=Object(a.useState)(""),c=Object(d.a)(n,2),s=c[0],i=c[1],r=Object(a.useState)([{value:null}]),o=Object(d.a)(r,2),b=o[0],f=o[1],v=Object(a.useState)(null),y=Object(d.a)(v,2),g=y[0],w=y[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:{textAlign:"center",fontSize:"57px",color:"white"},className:"m-4",children:["Quick Poll",Object(O.jsx)("div",{style:{textAlign:"center",fontSize:"20px"},children:"Create realtime Polls Quickly."})]}),Object(O.jsx)("main",{children:Object(O.jsxs)(p.a,{className:"formMain",children:[Object(O.jsxs)(p.a.Group,{children:[Object(O.jsx)(p.a.Label,{children:"Poll Question"}),Object(O.jsx)(p.a.Control,{as:"textarea",rows:3,value:s,onChange:function(e){i(e.target.value)},placeholder:"what is your favourite food?"})]}),b.map((function(e,t){return Object(O.jsxs)(p.a.Group,{className:"my-2",children:[Object(O.jsx)(p.a.Label,{children:"Option ".concat(t+1)}),Object(O.jsxs)("div",{style:{display:"flex"},children:[Object(O.jsx)(p.a.Control,{type:"text",placeholder:"Option ".concat(t+1),onChange:function(e){return function(e,t){var n=Object(u.a)(b);n[e].value=t.target.value,f(n)}(t,e)}}),Object(O.jsx)(x.a,{className:"btn-danger mx-3",onClick:function(){return function(e){var t=Object(u.a)(b);t.splice(e,1),f(t)}(t)},children:"X"})]})]},"".concat(e,"-").concat(t))})),g&&Object(O.jsx)(m.a,{className:"my-3",variant:"warning",children:g}),Object(O.jsx)(x.a,{type:"button",onClick:function(){return function(){var e=Object(u.a)(b);e.push({value:null}),f(e)}()},className:"my-4 btn-lg",children:"Add another Option"}),Object(O.jsx)("hr",{}),Object(O.jsx)(x.a,{className:"btn-lg btn-info",onClick:function(e){var n=function(){var e=Object(j.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/api/poll",{question:s,options:b});case 3:n=e.sent,a=n.data,t.push("/info/".concat(a._id)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();s&&""!==s.trim()?0===b.length||1===b.length&&null===b[0].value?w("please provide an option"):n():w("please provide a question")},children:"Create your Poll"})]})})]})},v=n(144),y=n(149),g=n(145),w=n(76),N=function(e){var t=e.match;return Object(O.jsxs)(v.a,{children:[Object(O.jsx)(m.a,{className:"my-3",variant:"success",children:"Your Poll was created sucessfully."}),Object(O.jsxs)(y.a,{variant:"primary",children:[Object(O.jsxs)(y.a.Item,{className:"my-4 p-4",children:[Object(O.jsxs)(g.a,{className:"mb-3",children:[Object(O.jsx)(g.a.Text,{id:"basic-addon1",children:"Link for voting"}),Object(O.jsx)(w.a,{placeholder:"Link","aria-describedby":"basic-addon1",value:"".concat(window.location.origin,"/vote/").concat(t.params.id)})]}),Object(O.jsx)("div",{children:"Copy this link and send it to the voters"})]}),Object(O.jsxs)(y.a.Item,{className:"my-4 p-4",children:[Object(O.jsxs)(g.a,{className:"mb-3",children:[Object(O.jsx)(g.a.Text,{id:"basic-addon1",children:"Link for Getting Realtime vote results"}),Object(O.jsx)(w.a,{placeholder:"Link","aria-describedby":"basic-addon1",value:"".concat(window.location.origin,"/results/").concat(t.params.id)})]}),Object(O.jsx)(i.b,{to:"/results/".concat(t.params.id),target:"_blank",children:"Show Results"})]})]})]})},C=n(146),k=n(150),S=n(81),I=n.n(S)()(),T=function(e){var t=e.match,n=(e.history,Object(a.useState)(!0)),c=Object(d.a)(n,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(d.a)(r,2),b=o[0],p=o[1],x=Object(a.useState)([]),m=Object(d.a)(x,2),f=m[0],g=m[1],w=Object(a.useState)(0),N=Object(d.a)(w,2),S=N[0],T=N[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/poll/".concat(t.params.id));case 2:n=e.sent,a=n.data,p(a.question),g(a.options),T(a.options.reduce((function(e,t){return{count:e.count+t.count}})).count);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),i(!1),I.emit("joinRoom",t.params.id);var n=function(e){var t=e.optionId;g((function(e){var n=Object(u.a)(e),a=n.findIndex((function(e){return e._id===t}));return-1!==a&&(n[a].count=n[a].count+1),n})),T((function(e){return e+1}))};return I.on("increaseCountDone",n),function(){I.off("increaseCountDone",n)}}),[t.params.id]),s?Object(O.jsx)(v.a,{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(O.jsx)(C.a,{animation:"border",style:{width:"4rem",height:"4rem"}})}):Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},className:"resultContainer",children:[Object(O.jsx)("h2",{style:{margin:"50px"},children:b}),Object(O.jsxs)("div",{style:{width:"100%",display:"flex",flexDirection:"row"},children:[Object(O.jsx)("div",{style:{width:"80%"},children:f.map((function(e){return Object(O.jsx)(k.a,{style:{width:"95%"},className:"my-2",children:Object(O.jsxs)(k.a.Body,{children:[Object(O.jsxs)(k.a.Title,{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)("div",{children:e.value}),Object(O.jsx)("div",{className:"badge rounded-pill bg-info",children:S?"".concat(Math.floor(e.count/S*100),"%"):"0"})]}),Object(O.jsxs)(k.a.Text,{as:"div",children:[Object(O.jsx)("div",{className:"progress",children:Object(O.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:"".concat(e.count/S*100,"%")},"aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})}),Object(O.jsxs)("div",{children:[e.count," votes"]})]})]})},e._id)}))}),Object(O.jsx)("div",{style:{width:"20%"},children:Object(O.jsx)(k.a,{className:"my-2",children:Object(O.jsxs)(y.a,{variant:"flush",children:[Object(O.jsxs)(y.a.Item,{children:["Total Votes: ",S]}),Object(O.jsx)(y.a.Item,{children:"Share"}),Object(O.jsx)(y.a.Item,{})]})})})]})]})})},_=function(e){var t=e.match,n=e.history,c=Object(a.useState)(!0),s=Object(d.a)(c,2),i=s[0],r=s[1],o=Object(a.useState)(""),u=Object(d.a)(o,2),b=u[0],p=u[1],m=Object(a.useState)([]),f=Object(d.a)(m,2),y=f[0],g=f[1],w=Object(a.useState)(""),N=Object(d.a)(w,2),k=N[0],S=N[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/poll/".concat(t.params.id));case 2:n=e.sent,a=n.data,p(a.question),g(a.options);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),r(!1)}),[t.params.id]);var T=function(e){S(e.target.id)};return i?Object(O.jsx)(v.a,{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(O.jsx)(C.a,{animation:"border",style:{width:"4rem",height:"4rem"}})}):Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{style:{height:"50vh",width:"60%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(O.jsx)("h2",{className:"my-3",children:b}),Object(O.jsxs)("form",{style:{width:"100%",textAlign:"center"},onSubmit:function(e){e.preventDefault();var a={pollId:t.params.id,optionId:k};h.a.patch("/api/poll/increase",a).then((function(e){I.emit("increaseCount",{pollId:t.params.id,optionId:k}),n.push("/results/".concat(t.params.id))})).catch((function(e){console.log(e)}))},children:[y.map((function(e){return Object(O.jsxs)("div",{style:{width:"100%"},children:[Object(O.jsx)("input",{style:{width:"1rem",height:"1rem",marginRight:"5px"},type:"radio",name:"option",value:"".concat(e.value),id:"".concat(e._id),onChange:T}),Object(O.jsx)("label",{style:{width:"70%"},htmlFor:"".concat(e._id),children:Object(O.jsx)("div",{style:{width:"100%"},className:"btn btn-primary btn-lg px-4 my-1",children:"".concat(e.value)})})]},e._id)})),Object(O.jsx)(x.a,{className:"btn-secondary my-2",type:"submit",children:"Submit Your Vote"})]})]})})};var D=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("hr",{style:{height:"10px",color:"#A020F0",margin:"0"}}),Object(O.jsxs)(i.a,{children:[Object(O.jsx)(r.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(r.a,{path:"/vote/:id",exact:!0,component:_}),Object(O.jsx)(r.a,{path:"/info/:id",exact:!0,component:N}),Object(O.jsx)(r.a,{path:"/results/:id",exact:!0,component:T})]})]})};n(139),n(140);s.a.render(Object(O.jsx)(D,{}),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.89aa5457.chunk.js.map
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{132:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n(0),o=n(182),s=n(183),i=n(12),c=n.n(i),a=n(5),u=n.n(a),l=n(7),j=n.n(l),d=n(48),b=n(17),f=n(58),h=n(15),O=n(56),x=n(3),p=n(184),m=n(64),y=(n(93),n(185)),g=n(29),I=n(28),C=n(4),B=I.a.get("window").width,w=I.a.get("window").height,v=C.a.create({Root:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},Container:{width:B<768?"90%":"30%",alignItems:"center",justifyContent:"center"},Input:{backgroundColor:"#fff",borderStyle:"solid",borderWidth:2,borderColor:"#333",padding:10},InputHeader:{width:"100%",fontSize:18,fontWeight:"bold",color:"#333"},TextInput:{width:"100%",borderRadius:5,margin:10},NumberInputContainer:{width:"100%",flexDirection:"row",justifyContent:"center",margin:10},NumberInputButton:{justifyContent:"center",alignItems:"center",width:"20%",backgroundColor:"#333",fontWeight:"bold",color:"#fff"},NumberInputButtonLeft:{borderBottomLeftRadius:5,borderTopLeftRadius:5},NumberInputButtonRight:{borderBottomRightRadius:5,borderTopRightRadius:5},NumberInput:{width:"60%"},ItemInputContainer:{width:"100%",flexDirection:"row",justifyContent:"center",margin:10},ItemInput:{width:"80%",borderBottomLeftRadius:5,borderTopLeftRadius:5},ItemInputButton:{justifyContent:"center",alignItems:"center",width:"20%",backgroundColor:"#333",fontWeight:"bold",color:"#fff",borderBottomRightRadius:5,borderTopRightRadius:5},ButtonContainer:{width:"100%",flexDirection:"row",justifyContent:"space-between",margin:10},Button:{paddingVertical:12,paddingHorizontal:32,borderRadius:4,alignItems:"center"},ButtonHor:{width:"48%"},ButtonVert:{width:"100%",marginBottom:10},Confirm:{backgroundColor:"#4EDA25"},Cancel:{backgroundColor:"#DA5625"},Continue:{backgroundColor:"#25A9DA"},ButtonText:{fontSize:16,fontFamily:"sans-serif",fontWeight:"bold",color:"#fff"},ModalRoot:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},ModalContainer:{width:B<768?"90%":"30%",alignItems:"center",justifyContent:"center"},FlatList:{width:"100%",maxHeight:.4*w},ItemContainer:{width:"100%",flexDirection:"row",justifyContent:"center",marginBottom:10},ItemTitleContainer:{width:"80%",borderStyle:"solid",borderWidth:2,borderColor:"#333",borderBottomLeftRadius:5,borderTopLeftRadius:5,padding:10},ItemTitle:{fontSize:20,fontWeight:"bold",color:"#333",textAlign:"center"},ItemButton:{justifyContent:"center",alignItems:"center",width:"20%",backgroundColor:"#333",fontWeight:"bold",color:"#fff",borderBottomRightRadius:5,borderTopRightRadius:5},Header:{width:"100%",fontSize:20,fontWeight:"bold",color:"#333",marginBottom:10}}),T=n(2);function S(t){return Object(T.jsx)(x.a,{style:{justifyContent:"center",alignItems:"center",flex:1},children:Object(T.jsx)(h.a,{style:{color:"#333",fontSize:24,textAlign:"center",padding:20},children:t})})}function R(t){var e=t.navigation,n=Object(r.useState)([]),o=u()(n,2),s=o[0],i=o[1],a=Object(r.useState)(),l=u()(a,2),I=l[0],C=l[1],B=Object(r.useState)(!1),w=u()(B,2),R=w[0],P=w[1],k=Object(g.k)();Object(r.useEffect)((function(){k&&H()}),[g.k]),Object(r.useEffect)((function(){N()}),[s]);var H=function(){var t;return j.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.awrap(m.a.getItem("@groups"));case 3:null!==(t=e.sent)&&i(JSON.parse(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Something went wrong while loading groups.");case 10:case"end":return e.stop()}}),null,null,[[0,7]],Promise)},N=function(){return j.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.awrap(m.a.setItem("@groups",JSON.stringify(s)));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),onsole.log("Something went wrong while saving the groups.");case 8:case"end":return t.stop()}}),null,null,[[0,5]],Promise)};return Object(T.jsxs)(x.a,{style:v.Root,children:[Object(T.jsxs)(x.a,{style:v.Container,children:[Object(T.jsx)(b.a,{style:[v.Button,v.ButtonVert,v.Continue],onPress:function(){return P(!R)},children:Object(T.jsxs)(h.a,{style:v.ButtonText,children:[Object(T.jsx)(p.a,{name:"users",size:16,color:"white"})," New"]})}),s.length<1?S("No groups yet..."):Object(T.jsx)(d.a,{style:v.FlatList,data:s,keyExtractor:function(t,e){return e.toString()},renderItem:function(t){var n=t.item;return Object(T.jsxs)(x.a,{style:v.ItemContainer,children:[Object(T.jsx)(b.a,{style:v.ItemTitleContainer,onPress:function(){return e.navigate("Group tasker",{groups:s,currentItemId:n.id,currentItemTitle:n.title,currentItemParticipants:n.participants,currentItemTasks:n.tasks})},children:Object(T.jsx)(h.a,{style:v.ItemTitle,children:n.title})}),Object(T.jsx)(b.a,{style:v.ItemButton,onPress:function(){return function(t){var e=s.filter((function(e){return e.id!==t}));i(e)}(n.id)},children:Object(T.jsx)(p.a,{name:"cross",size:20,color:"white"})})]})}})]}),Object(T.jsx)(f.a,{animationType:"slide",transparent:!0,visible:R,onRequestClose:function(){P(!R)},children:Object(T.jsx)(x.a,{style:v.ModalRoot,children:Object(T.jsxs)(x.a,{style:v.ModalContainer,children:[Object(T.jsx)(h.a,{style:v.InputHeader,children:"Group Tasker title"}),Object(T.jsx)(O.a,{style:[v.Input,v.TextInput],placeholder:"Enter title here",onChangeText:function(t){return C(t)}}),Object(T.jsxs)(x.a,{style:v.ButtonContainer,children:[Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Cancel],onPress:function(){return P(!R)},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Cancel"})}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Confirm],onPress:function(){return i([].concat(c()(s),[{id:Object(y.a)(),title:I,participants:[],tasks:[]}])),N(),void P(!R)},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Save"})})]})]})})})]})}var P=n(6),k=n.n(P);function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){k()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function z(t){t.navigation;var e=t.route,n=Object(r.useState)([]),o=u()(n,2),s=o[0],i=o[1],a=Object(r.useState)(),l=u()(a,2),g=l[0],I=l[1],C=Object(r.useState)(),B=u()(C,2),w=B[0],R=B[1],P=Object(r.useState)(!1),k=u()(P,2),H=k[0],z=k[1],D=Object(r.useState)(!1),E=u()(D,2),L=E[0],M=E[1],W=Object(r.useState)(!1),A=u()(W,2),V=A[0],F=A[1],J=Object(r.useState)(2),q=u()(J,2),G=q[0],K=q[1],Q=Object(r.useState)(!0),U=u()(Q,2),X=U[0],Y=U[1],Z=Object(r.useState)(!1),$=u()(Z,2),_=$[0],tt=$[1],et=Object(r.useState)([]),nt=u()(et,2),rt=nt[0],ot=nt[1],st=Object(r.useState)(""),it=u()(st,2),ct=it[0],at=it[1],ut=Object(r.useState)([]),lt=u()(ut,2),jt=lt[0],dt=lt[1],bt=Object(r.useState)(""),ft=u()(bt,2),ht=ft[0],Ot=ft[1];Object(r.useEffect)((function(){0==s.length&&(i(e.params.groups),I(e.params.currentItemId),R(e.params.currentItemTitle),ot(e.params.currentItemParticipants),dt(e.params.currentItemTasks))}));var xt=function(t){var e=H;e?at(t):Ot(t),/[a-\xf6]\s/g.test(t)&&(e?pt():mt())},pt=function(){ot([].concat(c()(rt),[{id:Object(y.a)(),name:ct}])),at("")},mt=function(){dt([].concat(c()(jt),[{id:Object(y.a)(),title:ht}])),Ot("")},yt=function(){var t=N(N({},s.filter((function(t){return t.id==g}))[0]),{},{participants:rt});s.splice(s.findIndex((function(t){return t.id==g})),1,t),Ct()},gt=function(){var t=N(N({},s.filter((function(t){return t.id==g}))[0]),{},{tasks:jt});s.splice(s.findIndex((function(t){return t.id==g})),1,t),Ct()},It=function(t){t<=2?(Y(!0),tt(!1),K(2)):t>=Math.floor(rt.length/jt.length)?(tt(!0),Y(!1),K(Math.floor(rt.length/jt.length))):(Y(!1),tt(!1),K(t))},Ct=function(){return j.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.awrap(m.a.setItem("@groups",JSON.stringify(s)));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),onsole.log("Something went wrong while saving the groups: "+t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]],Promise)};return Object(T.jsxs)(x.a,{style:v.Root,children:[Object(T.jsxs)(x.a,{style:v.Container,children:[Object(T.jsx)(h.a,{style:v.Header,children:w}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonVert,v.Continue],onPress:function(){return z(!H)},children:Object(T.jsxs)(h.a,{style:v.ButtonText,children:[Object(T.jsx)(p.a,{name:"users",size:16,color:"white"})," Participants"]})}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonVert,v.Continue],onPress:function(){return M(!L)},children:Object(T.jsxs)(h.a,{style:v.ButtonText,children:[Object(T.jsx)(p.a,{name:"list",size:16,color:"white"})," Tasks"]})}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonVert,v.Continue],onPress:function(){return F(!V)},children:Object(T.jsxs)(h.a,{style:v.ButtonText,children:[Object(T.jsx)(p.a,{name:"shuffle",size:16,color:"white"})," Draw"]})})]}),Object(T.jsx)(f.a,{animationType:"slide",transparent:!0,visible:H,onRequestClose:function(){z(!H)},children:Object(T.jsx)(x.a,{style:v.ModalRoot,children:Object(T.jsxs)(x.a,{style:v.ModalContainer,children:[Object(T.jsx)(h.a,{style:v.InputHeader,children:"Add participants"}),Object(T.jsxs)(x.a,{style:v.ButtonContainer,children:[Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Cancel],onPress:function(){z(!H),rt.length<1&&ot([])},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Cancel"})}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Confirm],onPress:function(){z(!H),yt()},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Save"})})]}),Object(T.jsxs)(x.a,{style:v.ItemInputContainer,children:[Object(T.jsx)(O.a,{style:[v.Input,v.ItemInput],value:ct,placeholder:"Enter name here",onChangeText:function(t){return xt(t)}}),Object(T.jsx)(b.a,{style:v.ItemInputButton,onPress:function(){return pt()},children:Object(T.jsx)(p.a,{name:"add-user",size:16,color:"white"})})]}),rt.length<1?S("No participants yet..."):Object(T.jsx)(d.a,{style:v.FlatList,data:rt,keyExtractor:function(t,e){return e.toString()},renderItem:function(t){var e=t.item;return Object(T.jsxs)(x.a,{style:v.ItemContainer,children:[Object(T.jsx)(b.a,{style:v.ItemTitleContainer,children:Object(T.jsx)(h.a,{style:v.ItemTitle,children:e.name})}),Object(T.jsx)(b.a,{style:v.ItemButton,onPress:function(){return function(t){var e=rt.filter((function(e){return e.id!==t}));ot(e),yt()}(e.id)},children:Object(T.jsx)(p.a,{name:"cross",size:20,color:"white"})})]})}})]})})}),Object(T.jsx)(f.a,{animationType:"slide",transparent:!0,visible:L,onRequestClose:function(){M(!L)},children:Object(T.jsx)(x.a,{style:v.ModalRoot,children:Object(T.jsxs)(x.a,{style:v.ModalContainer,children:[Object(T.jsx)(h.a,{style:v.InputHeader,children:"Add tasks"}),Object(T.jsxs)(x.a,{style:v.ButtonContainer,children:[Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Cancel],onPress:function(){M(!L),jt.length<1&&dt([])},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Cancel"})}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Confirm],onPress:function(){M(!L),gt()},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Save"})})]}),Object(T.jsxs)(x.a,{style:v.ItemInputContainer,children:[Object(T.jsx)(O.a,{style:[v.Input,v.ItemInput],value:ht,placeholder:"Enter task here",onChangeText:function(t){return xt(t)}}),Object(T.jsx)(b.a,{style:v.ItemInputButton,onPress:function(){return mt()},children:Object(T.jsx)(p.a,{name:"add-to-list",size:16,color:"white"})})]}),jt.length<1?S("No tasks yet..."):Object(T.jsx)(d.a,{style:v.FlatList,data:jt,keyExtractor:function(t,e){return e.toString()},renderItem:function(t){var e=t.item;return Object(T.jsxs)(x.a,{style:v.ItemContainer,children:[Object(T.jsx)(b.a,{style:v.ItemTitleContainer,children:Object(T.jsx)(h.a,{style:v.ItemTitle,children:e.title})}),Object(T.jsx)(b.a,{style:v.ItemButton,onPress:function(){return function(t){var e=jt.filter((function(e){return e.id!==t}));dt(e),gt()}(e.id)},children:Object(T.jsx)(p.a,{name:"cross",size:20,color:"white"})})]})}})]})})}),Object(T.jsx)(f.a,{animationType:"slide",transparent:!0,visible:V,onRequestClose:function(){F(!V)},children:Object(T.jsx)(x.a,{style:v.ModalRoot,children:Object(T.jsxs)(x.a,{style:v.ModalContainer,children:[Object(T.jsx)(h.a,{style:v.InputHeader,children:"Team size"}),Object(T.jsxs)(x.a,{style:v.NumberInputContainer,children:[Object(T.jsx)(b.a,{disabled:X,style:[v.NumberInputButton,v.NumberInputButtonLeft],onPress:function(){return It(G-1)},children:Object(T.jsx)(p.a,{name:"minus",size:24,color:"white"})}),Object(T.jsx)(O.a,{style:[v.Input,v.NumberInput],keyboardType:"numeric",value:G}),Object(T.jsx)(b.a,{disabled:_,style:[v.NumberInputButton,v.NumberInputButtonRight],onPress:function(){return It(G+1)},children:Object(T.jsx)(p.a,{name:"plus",size:24,color:"white"})})]}),Object(T.jsxs)(x.a,{style:v.ButtonContainer,children:[Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Cancel],onPress:function(){return F(!V)},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Cancel"})}),Object(T.jsx)(b.a,{style:[v.Button,v.ButtonHor,v.Confirm],onPress:function(){F(!V)},children:Object(T.jsx)(h.a,{style:v.ButtonText,children:"Draw"})})]})]})})})]})}var D=Object(s.a)();function E(){return Object(T.jsx)(o.a,{children:Object(T.jsxs)(D.Navigator,{initialRouteName:"Home",children:[Object(T.jsx)(D.Screen,{name:"Home",component:R}),Object(T.jsx)(D.Screen,{name:"Group tasker",component:z})]})})}},139:function(t,e,n){t.exports=n(174)}},[[139,1,2]]]);
//# sourceMappingURL=app.bfe8237a.chunk.js.map
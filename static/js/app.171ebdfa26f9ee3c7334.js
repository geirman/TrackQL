webpackJsonp([1],{"5g6H":function(n,e){},DGSN:function(n,e){},NHnr:function(n,e,i){"use strict";function t(n){i("DGSN")}function r(n){i("gzLk")}function o(n){i("qdxM")}function a(n){i("UJ9N")}function l(n){i("Vk7+")}function d(n){i("5g6H")}Object.defineProperty(e,"__esModule",{value:!0});var c=i("7+uW"),s=i("zL8q"),u=i.n(s),m=i("wUZ8"),p=i.n(m),v=(i("Xcu2"),i("u1/p")),C=i("69U5"),_={name:"app"},f=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},y=[],b={render:f,staticRenderFns:y},k=b,q=i("VU/8"),$=t,h=q(_,k,!1,$,null,null),T=h.exports,g=i("/ocq"),w=i("2R8v"),D=i.n(w),Q=i("tlQw"),I=i.n(Q),U=D()(["\n  query AllCollaborationsQuery {\n    allCollaborations {\n      id\n    }\n  }\n"],["\n  query AllCollaborationsQuery {\n    allCollaborations {\n      id\n    }\n  }\n"]),x=D()(["\n  query CollaborationQuery ($id: ID) {\n    Collaboration (id: $id) {\n      id,\n      name,\n      slug,\n      tracks {\n        id\n      }\n    }\n  }\n"],["\n  query CollaborationQuery ($id: ID) {\n    Collaboration (id: $id) {\n      id,\n      name,\n      slug,\n      tracks {\n        id\n      }\n    }\n  }\n"]),V=D()(["\n  query ClipQuery ($id: ID) {\n    Clip (id: $id) {\n      id,\n      name,\n      comments {\n        id\n      }\n    }\n  }\n"],["\n  query ClipQuery ($id: ID) {\n    Clip (id: $id) {\n      id,\n      name,\n      comments {\n        id\n      }\n    }\n  }\n"]),R=D()(["\n  query CommentQuery ($id: ID) {\n    Comment (id: $id) {\n      id,\n      comment\n    }\n  }\n"],["\n  query CommentQuery ($id: ID) {\n    Comment (id: $id) {\n      id,\n      comment\n    }\n  }\n"]),E=D()(["\n  query TrackQuery ($id: ID) {\n    Track (id: $id) {\n      id,\n      name,\n      clips {\n        id\n      },\n      comments {\n        id\n      }\n    }\n  }\n"],["\n  query TrackQuery ($id: ID) {\n    Track (id: $id) {\n      id,\n      name,\n      clips {\n        id\n      },\n      comments {\n        id\n      }\n    }\n  }\n"]),F=I()(U),N=I()(x),S=I()(V),j=I()(R),A=I()(E),H={name:"Comment",props:{id:{type:String,required:!0}},apollo:{Comment:{query:j,variables:function(){return{id:this.id}}}}},z=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"comment"},[i("h2",[n._v("Comment")]),n.Comment?[i("div",[n._v("id: "+n._s(n.Comment.id))]),i("div",[n._v("comment: "+n._s(n.Comment.comment))])]:n._e()],2)},J=[],L={render:z,staticRenderFns:J},M=L,G=i("VU/8"),O=r,P=G(H,M,!1,O,"data-v-2502bd98",null),X=P.exports,W={name:"Clip",props:{id:{type:String,required:!0}},apollo:{Clip:{query:S,variables:function(){return{id:this.id}}}},components:{Comment:X}},Z=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"clip"},[i("h2",[n._v("Clip")]),n.Clip?[i("div",[n._v("id: "+n._s(n.Clip.id))]),i("div",[n._v("name: "+n._s(n.Clip.name))]),n._l(n.Clip.comments,function(n){return i("comment",{key:n.id,attrs:{id:n.id}})})]:n._e()],2)},B=[],K={render:Z,staticRenderFns:B},Y=K,nn=i("VU/8"),en=o,tn=nn(W,Y,!1,en,"data-v-02030122",null),rn=tn.exports,on={name:"Track_",props:{id:{type:String,required:!0}},apollo:{Track:{query:A,variables:function(){return{id:this.id}}}},components:{Clip:rn,Comment:X}},an=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"track"},[i("h2",[n._v("Track")]),n.Track?[i("div",[n._v("id: "+n._s(n.Track.id))]),i("div",[n._v("name: "+n._s(n.Track.name))]),n._l(n.Track.clips,function(n){return i("clip",{key:n.id,attrs:{id:n.id}})}),n._l(n.Track.comments,function(n){return i("comment",{key:n.id,attrs:{id:n.id}})})]:n._e()],2)},ln=[],dn={render:an,staticRenderFns:ln},cn=dn,sn=i("VU/8"),un=a,mn=sn(on,cn,!1,un,"data-v-f50cddda",null),pn=mn.exports,vn={name:"Collaboration",props:{id:{type:String,required:!0}},apollo:{Collaboration:{query:N,variables:function(){return{id:this.id}}}},components:{Track_:pn}},Cn=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"collaboration"},[i("h2",[n._v("Collaboration")]),n.Collaboration?[i("div",[n._v("id: "+n._s(n.Collaboration.id))]),i("div",[n._v("name: "+n._s(n.Collaboration.name))]),n._l(n.Collaboration.tracks,function(n){return i("track_",{key:n.id,attrs:{id:n.id}})})]:n._e()],2)},_n=[],fn={render:Cn,staticRenderFns:_n},yn=fn,bn=i("VU/8"),kn=l,qn=bn(vn,yn,!1,kn,"data-v-16331dc2",null),$n=qn.exports,hn={name:"Collaborations",apollo:{allCollaborations:{query:F}},components:{Collaboration:$n}},Tn=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"collaborations"},[i("h1",[n._v("Collaborations")]),n._l(n.allCollaborations,function(n){return i("collaboration",{key:n.id,attrs:{id:n.id}})})],2)},gn=[],wn={render:Tn,staticRenderFns:gn},Dn=wn,Qn=i("VU/8"),In=d,Un=Qn(hn,Dn,!1,In,"data-v-416d94e6",null),xn=Un.exports;c.default.use(g.a);var Vn=new g.a({routes:[{path:"/",name:"Collaborations",component:xn}]});c.default.config.productionTip=!1,c.default.use(u.a,{locale:p.a}),c.default.use(C.a);var Rn=new v.a({networkInterface:Object(v.b)({batchInterval:10,uri:"https://api.graph.cool/simple/v1/cj9u9mihwaswj01500pw0x5c4"}),connectToDevTools:!0}),En=new C.a({defaultClient:Rn});new c.default({el:"#app",apolloProvider:En,router:Vn,template:"<App/>",components:{App:T}})},UJ9N:function(n,e){},"Vk7+":function(n,e){},Xcu2:function(n,e){},gzLk:function(n,e){},qdxM:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.171ebdfa26f9ee3c7334.js.map
(this.webpackJsonptrails=this.webpackJsonptrails||[]).push([[0],{21:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),r=s(15),a=s.n(r),n=(s(21),s.p+"static/media/icon-user.50d7a011.svg"),l=s(2),o=s(0),j=Object(c.createContext)(),d=function(e){var t=e.children,s=Object(c.useState)([]),i=Object(l.a)(s,2),r=i[0],a=i[1],n=Object(c.useState)(!1),d=Object(l.a)(n,2),b=d[0],u=d[1],h=Object(c.useState)([]),m=Object(l.a)(h,2),O=m[0],x=m[1],p=Object(c.useState)([]),_=Object(l.a)(p,2),v=_[0],f=_[1],g=Object(c.useState)([]),N=Object(l.a)(g,2),S=N[0],k=N[1];return Object(o.jsx)(j.Provider,{value:{trailsList:r,setTrailsList:a,modalVisible:b,setModalVisible:u,trail:O,setTrail:x,grade:v,setGrade:f,subscription:S,setSubscription:k},children:t})};function b(){var e=Object(c.useContext)(j).subscription;return Object(o.jsx)("header",{children:Object(o.jsxs)("article",{children:[Object(o.jsx)("p",{children:"inscri\xe7\xf5es: "+e.length}),Object(o.jsx)("img",{src:n})]})})}var u=s.p+"static/media/banner-home.da5dfc0e.png",h=s(10),m=s(4),O=s.n(m),x=s(9),p=s(16),_=s.n(p),v=(s(39),s(40),s(6)),f=s.n(v);function g(){var e=Object(c.useContext)(j),t=e.trailsList,s=e.setTrailsList,i=e.setModalVisible,r=e.setTrail,a=e.setGrade,n="https://60e2ee6f9103bd0017b47673.mockapi.io";function l(){return(l=Object(x.a)(O.a.mark((function e(t){var s,c,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.grade[0],e.next=3,fetch(n+"/api/v1/trails/"+s.trailId+"/trails-grade/"+s.id+"/courses");case 3:return c=e.sent,e.next=6,c.json();case 6:l=e.sent,200==c.status?(a(l),r(t),i(!0)):(f.a.fire({icon:"error",title:"Oops...",text:"Ocorreu um erro inesperado, por favor tente mais tarde"}),console.log(c));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)(Object(x.a)(O.a.mark((function e(){var t,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n+"/api/v1/trails/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,200==t.status?s(c):console.log(t);case 7:case"end":return e.stop()}}),e)}))),[]),Object(o.jsx)(o.Fragment,{children:t.length>0?Object(o.jsx)("ul",{className:"trails__list",children:Object(o.jsx)(_.a,Object(h.a)(Object(h.a)({},{dots:!0,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1400,settings:{slidesToShow:2,slidesToScroll:1,dots:!0,variableWidth:!0}},{breakpoint:916,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,variableWidth:!0,arrows:!1}}]}),{},{children:t.map((function(e){return Object(o.jsxs)("li",{className:"trails__item",children:[Object(o.jsx)("figure",{className:"trails__item--image",children:Object(o.jsx)("img",{src:e.image})}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{className:"trails__item--title",children:e.name}),Object(o.jsx)("p",{className:"trails__item--description",children:e.description}),Object(o.jsx)("div",{className:"trails__item--button",children:Object(o.jsx)("button",{onClick:function(){return function(e){return l.apply(this,arguments)}(e)},children:"detalhes"})})]})]},e.id)}))}))}):Object(o.jsx)("h1",{children:"Carregando trilhas...."})})}function N(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(b,{}),Object(o.jsxs)("section",{className:"home__top",children:[Object(o.jsxs)("div",{className:"home__title",children:[Object(o.jsx)("h1",{children:"zup"}),Object(o.jsx)("h2",{children:"trails"})]}),Object(o.jsx)("figure",{className:"home__banner",children:Object(o.jsx)("img",{src:u,alt:"arte digital mostrando tr\xeas pessoas sobre um notebook gigante, colocando componentes na tela"})})]}),Object(o.jsx)("section",{className:"home__trails",children:Object(o.jsx)(g,{})})]})}var S=s.p+"static/media/icon-close.b9497358.svg";function k(){var e=Object(c.useContext)(j),t=e.modalVisible,s=e.setModalVisible,i=e.trail,r=e.grade,a=e.subscription;return console.log(a),Object(o.jsx)(o.Fragment,{children:t?Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"modal__content",children:[Object(o.jsx)("div",{className:"modal__close",children:Object(o.jsx)("img",{src:S,onClick:function(){return s(!1)}})}),Object(o.jsxs)("article",{children:[Object(o.jsx)("h2",{className:"modal__title",children:i.name}),Object(o.jsx)("p",{className:"modal__description",children:i.description}),Object(o.jsx)("div",{className:"modal__button",children:a.includes(i.id)?Object(o.jsx)("h3",{children:"Inscrito"}):Object(o.jsx)("button",{onClick:function(){return e=i.id,a.push(e),f.a.fire("","Inscri\xe7\xe3o realizada com sucesso!","success"),void s(!1);var e},children:"inscrever-se"})})]}),Object(o.jsx)("nav",{className:"modal__grade",children:Object(o.jsx)("ul",{className:"modal__grade--list",children:r.map((function(e){var t=e.name,s=e.hours,c=e.id;return Object(o.jsxs)("li",{className:"modal__grade--item",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("p",{children:s+" horas"})]},c)}))})})]})}):null})}var w=function(){return Object(o.jsx)("main",{children:Object(o.jsxs)(d,{children:[Object(o.jsx)(N,{}),Object(o.jsx)(k,{})]})})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.4ded0e82.chunk.js.map
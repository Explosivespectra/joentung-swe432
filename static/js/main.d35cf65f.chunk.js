(this["webpackJsonpjoentung-swe432"]=this["webpackJsonpjoentung-swe432"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(6),a=n(0),i=n.n(a),r=n(9),s=n.n(r),l=(n(59),n(60),n(106)),j=n(105),o=n(34),u=n(46),d=Object(u.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:o.a.A400},background:{default:"#fff"}}}),b=n(35),h=n(100),x=n(103),O=n(107),g=n(109),p=n(108),f=n(104),v=function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),l=s[0],j=s[1],o=Object(a.useState)(""),u=Object(b.a)(o,2),d=u[0],v=u[1];return Object(c.jsx)("div",{children:Object(c.jsx)(h.a,{maxWidth:"xs",children:Object(c.jsxs)(x.a,{container:!0,spacing:2,children:[Object(c.jsxs)(x.a,{item:!0,xs:12,children:[Object(c.jsx)("div",{children:"This application takes in a list of strings and outputs an ordered version. Strings may be split by spaces or newlines. The ordered output only contains unique values. The ordering can be selected between alphabetical ascending, alphabetical descending, and increasing string length."}),Object(c.jsx)("br",{})]}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)(O.a,{label:"Input",value:d,onChange:function(e){v(e.target.value)},multiline:"true",rowsMax:5})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)("div",{children:Object(c.jsx)(O.a,{value:l,label:"Output",multiline:"true",InputProps:{readOnly:!0},variant:"filled"})})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)("div",{children:"Ordering:"})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{value:0,control:Object(c.jsx)(p.a,{}),label:"Ascending",checked:0==n,onChange:function(e){i(e.target.value)}})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{value:1,control:Object(c.jsx)(p.a,{}),label:"Descending",checked:1==n,onChange:function(e){i(e.target.value)}})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{value:2,control:Object(c.jsx)(p.a,{}),label:"Increasing string length",checked:2==n,onChange:function(e){i(e.target.value)}})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{onClick:function(){if(""!==d.replace(/\n/gi,"").replace(/ /gi,"")){var e=d.replace(/\n/gi," ").trim().split(/[ ]+/),t=new Set(e);e=Array.from(t),0==n?e.sort():1==n?(e.sort(),e.reverse()):e.sort((function(e,t){return e.length-t.length}));var c="\n",a=0;for(a=0;a<e.length-1;++a)c=(c=c.concat(a+1+". ")).concat(e[a]).concat("\n");c=c.concat(e.length+". ").concat(e[e.length-1]),j(c)}},variant:"outlined",children:"Order Input Strings"})}),Object(c.jsx)(x.a,{item:!0,xs:12,children:Object(c.jsx)(f.a,{onClick:function(){v(""),j("")},variant:"outlined",children:"Clear Input and Output"})})]})})})},m=function(){return Object(c.jsxs)(j.a,{theme:d,children:[Object(c.jsx)(l.a,{}),Object(c.jsx)(v,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),C()}},[[66,1,2]]]);
//# sourceMappingURL=main.d35cf65f.chunk.js.map
(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{76:function(t,e,a){},82:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),d=(a(76),a(62)),o=a(34),j=a(40),s=a(53),l=a(113),b=a(110),u=a(120),O=a(114),x=a(85),h=a(45),m=a.n(h),f=a(60),g=a.n(f),p=a(5),v={name:"",job:"",id:null},D=function(t){var e=Object(n.useState)(v),a=Object(o.a)(e,2),c=a[0],i=a[1];Object(n.useEffect)((function(){t.dataToEdit?i(t.dataToEdit):i(v)}),[t.dataToEdit]);var r=function(t){i(Object(s.a)(Object(s.a)({},c),{},Object(j.a)({},t.target.name,t.target.value)))},d=function(e){i(v),t.setDataToEdit(null)};return Object(p.jsxs)(b.a,{container:!0,children:[Object(p.jsx)(l.a,{style:{padding:"1em",margin:"0 auto"},variant:"h5",color:"textSecondary",children:null==t.dataToEdit?"Agregar":"Editar"}),Object(p.jsxs)(b.a,{container:!0,component:"form",onSubmit:function(e){e.preventDefault(),null===c.id?t.createData(c):t.updateData(c),d()},direction:"column",children:[Object(p.jsx)(u.a,{style:{width:"90%",margin:"0 auto"},align:"center",label:"Nombre",name:"name",onChange:r,value:c.name,required:!0}),Object(p.jsx)(u.a,{style:{width:"90%",margin:"0 auto"},label:"Ocupaci\xf3n",name:"job",onChange:r,value:c.job,required:!0}),Object(p.jsxs)(O.a,{style:{margin:"0 auto",padding:"1em"},children:[Object(p.jsx)(x.a,{type:"submit",color:"primary",variant:"contained",startIcon:Object(p.jsx)(g.a,{}),children:"Guardar"}),Object(p.jsx)(x.a,{type:"reset",color:"secondary",variant:"contained",startIcon:Object(p.jsx)(m.a,{}),onClick:d,children:"Limpiar"})]})]})]})},E=a(117),y=a(118),T=a(115),S=a(116),C=a(119),w=a(61),I=a.n(w),k=function(t){var e=t.data,a=t.setDataToEdit,n=t.deleteData;t.updateData;return Object(p.jsxs)(T.a,{children:[Object(p.jsx)(S.a,{children:e.name}),Object(p.jsx)(S.a,{children:e.job}),Object(p.jsxs)(S.a,{children:[Object(p.jsx)(x.a,{variant:"contained",color:"primary",startIcon:Object(p.jsx)(I.a,{}),onClick:function(){return a(e)},children:"Editar"}),Object(p.jsx)(x.a,{variant:"contained",color:"secondary",startIcon:Object(p.jsx)(m.a,{}),onClick:function(){return n(e.id)},children:"Eliminar"})]})]})},F=function(t){var e=t.data,a=t.setDataToEdit,n=t.deleteData,c=t.updateData;return Object(p.jsxs)("div",{id:"id-table",children:[Object(p.jsx)(l.a,{variant:"h5",color:"textSecondary",style:{padding:"1em"},align:"center",children:"Tabla de datos"}),Object(p.jsxs)(E.a,{children:[Object(p.jsx)(y.a,{children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(S.a,{children:"Nombre"}),Object(p.jsx)(S.a,{children:"Ocupaci\xf3n"}),Object(p.jsx)(S.a,{children:"Acciones"})]})}),Object(p.jsx)(C.a,{children:e.map((function(t){return Object(p.jsx)(k,{data:t,deleteData:n,setDataToEdit:a,updateData:c},t.id)}))})]})]})},J=a(122),A=[{id:1,name:"David",job:"programmer"},{id:2,name:"Jorge",job:"Journalist"},{id:3,name:"Rebeca",job:"singer"}],L=function(){var t=Object(n.useState)(A),e=Object(o.a)(t,2),a=e[0],c=e[1],i=Object(n.useState)(null),r=Object(o.a)(i,2),j=r[0],s=r[1],u=function(t){var e=a.map((function(e){return e.id===t.id?t:e}));c(e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{variant:"h4",color:"textSecondary",align:"center",children:"CRUD App"}),Object(p.jsx)(J.a,{children:Object(p.jsxs)(b.a,{container:!0,children:[Object(p.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(J.a,{align:"center",children:Object(p.jsx)(D,{createData:function(t){t.id=Date.now(),c([].concat(Object(d.a)(a),[t]))},updateData:u,dataToEdit:j,setDataToEdit:s})})}),Object(p.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(p.jsx)(J.a,{children:Object(p.jsx)(F,{data:a,deleteData:function(t){if(window.confirm("Seguro?")){var e=a.filter((function(e){return e.id!==t}));c(e)}},setDataToEdit:s,updateData:u})})})]})})]})};var R=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(l.a,{variant:"h2",color:"primary",align:"center",children:"Ejercicios con React"}),Object(p.jsx)(L,{})]})},q=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),n(t),c(t),i(t),r(t)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),q()}},[[82,1,2]]]);
//# sourceMappingURL=main.b8c5c913.chunk.js.map
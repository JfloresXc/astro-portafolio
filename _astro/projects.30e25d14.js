import{r as p}from"./index.45a47ed6.js";/* empty css                       */const m=[{title:"Notesbook",description:"En esta app podrás escribir tus propios capítulos, y estos a la vez conteniendo tus notas las cuales podrían ser públicas o privadas.",slogan:"¿Tan sólo una app de notas?",brand:"📚 Notesbook",urlImage:"storage/page-notesbook.png",link:"https://notesbook.vercel.app/"},{title:"Centro Idiomas",description:"Impartimos cursos de inglés, portugués , francés y más en los niveles básico, intermedio y avanzado, en los sistemas regular e intensivo.",slogan:"Tu oportunidad de conquistar el mundo ligüístico",brand:"🎎 Centro Idiomas",urlImage:"storage/page-centroidiomas.png",link:"https://centro-idiomas.vercel.app/"},{title:"Comedor Untels",description:"Somos Comedor Untels, un agradable lugar que le permitirá a usted disfrutar de la mejor comida peruana y saborear exquisitos platos criollos. Tenemos una trayectoria de 15 años atendiendo a todo tipo de clientes, a quienes ofrecemos un trato amable, cordial y ordenado.",slogan:"Famosos por nuestra sazón, seguimos creciendo con la misma línea de sabor y concepto culinario peruano que se mantiene desde el primer día.",brand:"🍽️ Comedor Untels",urlImage:"storage/page-comedoruntels.png",link:"https://comedoruntels.vercel.app/"}];var e={},f={get exports(){return e},set exports(o){e=o}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=p,x=Symbol.for("react.element"),h=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,N=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function u(o,s,i){var r,t={},a=null,n=null;i!==void 0&&(a=""+i),s.key!==void 0&&(a=""+s.key),s.ref!==void 0&&(n=s.ref);for(r in s)y.call(s,r)&&!k.hasOwnProperty(r)&&(t[r]=s[r]);if(o&&o.defaultProps)for(r in s=o.defaultProps,s)t[r]===void 0&&(t[r]=s[r]);return{$$typeof:x,type:o,key:a,ref:n,props:t,_owner:N.current}}c.Fragment=h;c.jsx=u;c.jsxs=u;(function(o){o.exports=c})(f);let E={title:"Lemlist",description:"Lemlist description",slogan:"Slogan Chatra",brand:"BRAND 1",image:"storage/notesbook.png"};function I(){const[o,s]=p.useState(m[0]||E),{brand:i,description:r,slogan:t,title:a,urlImage:n,link:_}=o,[j,g]=p.useState(0);function b(l){s({...o,...l})}return e.jsxs("section",{className:"projects",id:"projects",children:[e.jsx("div",{className:"projects__header animate__animated",children:e.jsxs("div",{className:"projects__group-1",children:[e.jsx("div",{className:"projects__brand",id:"project-brand",children:i}),e.jsxs("div",{className:"projects__group-2",children:[e.jsx("div",{className:"projects__slogan",id:"project-slogan",children:t}),e.jsx("div",{className:"projects__header-title",id:"project-title",children:a}),e.jsx("div",{className:"projects__description",id:"project-description",children:r}),e.jsxs("a",{href:_,target:"_blank",className:"projects__link",id:"project-link",children:[e.jsx("i",{className:"fa-solid fa-link"})," Visitar"]})]}),e.jsx("img",{className:"projects__image",src:n,alt:"page-notesbook",id:"project-image",loading:"lazy"})]})}),e.jsxs("div",{className:"projects__body",children:[e.jsx("h3",{className:"projects__body-title",children:"Proyectos"}),e.jsx("div",{className:"projects__list",children:m.map((l,d)=>e.jsx("li",{className:`projects__item ${j==d&&"projects__item-active"}`,onClick:()=>{b({...l}),g(d)},children:l.title},d))})]})]})}export{I as default};
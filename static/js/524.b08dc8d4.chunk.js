"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[524],{4524:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var a="phonebook_container__mKqp5",r=t(4942),i=t(1413),c=t(9439),s=t(2791),o={name:"",number:""},u=t(4905),l={form:"contactForm_form__+mxmN"},d=t(9434),m=t(2574),f=t(3329),h=function(){var n=(0,s.useState)((0,i.Z)({},o)),e=(0,c.Z)(n,2),t=e[0],a=e[1],h=(0,d.I0)(),v=function(n){var e=n.target,t=e.name,c=e.value;a((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,r.Z)({},t,c))}))},p=t.name,x=t.number;return(0,f.jsxs)("form",{className:l.form,onSubmit:function(n){n.preventDefault(),function(n){var e=n.name,t=n.number;h((0,m.v6)({name:e,number:t}))}((0,i.Z)({},t)),a((0,i.Z)({},o))},children:[(0,f.jsx)("p",{children:"Name"}),(0,f.jsx)("input",{className:l.input,type:"text",name:"name",value:p,onChange:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,f.jsx)("p",{children:"Number"}),(0,f.jsx)("input",{className:l.input,type:"tel",name:"number",value:x,onChange:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,f.jsx)(u.Z,{children:"Add contact"})]})},v=t(5653),p=function(n){var e=n.value,t=(0,d.I0)();return(0,f.jsxs)("div",{children:[(0,f.jsx)("label",{children:"Finde contacts by name"}),(0,f.jsx)("input",{name:"filter",value:e,onChange:function(n){var e=n.target;t((0,v.T)(e.value))},placeholder:"Find contacts"})]})},x=function(n){var e=n.id,t=n.name,a=n.number,r=(0,d.I0)();return(0,f.jsxs)("li",{children:[t,": ",a,(0,f.jsx)(u.Z,{id:e,onClick:function(){return function(n){r((0,m.in)(n))}(e)},children:"Delete"})]})},b=t(8272),j="contactList_list__7z5z3",_=function(n){var e=n.contacts,t=n.filter;if(!t)return e.items;var a=t.toLowerCase();return e.items.filter((function(n){var e=n.name,t=n.number;return e.toLowerCase().includes(a)||t.toLowerCase().includes(a)}))},C=function(n){return n.contacts.loading},Z=function(){var n=(0,d.I0)();(0,s.useEffect)((function(){n((0,m.CL)())}),[n]);var e=(0,d.v9)(_);if((0,d.v9)(C))return(0,f.jsx)(b.Z,{});var t=e.map((function(n){var e=n.id,t=n.name,a=n.number;return(0,f.jsx)(x,{id:e,name:t,number:a},e)}));return!t.length>0?(0,f.jsx)("p",{children:"Not yet added contacts"}):(0,f.jsx)("ol",{className:j,children:t})},g=Z;Z.defaultProps={contacts:[]};var N=function(){return(0,f.jsxs)("div",{className:a,children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(h,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(p,{}),(0,f.jsx)(g,{})]})},k="contactsPage_container__KbM-e",w=function(){return(0,f.jsxs)("div",{className:k,children:[(0,f.jsx)(N,{}),";"]})}},4905:function(n,e,t){t.d(e,{Z:function(){return s}});var a=t(6382),r=t(2791),i="button_button__vTaVn",c=t(3329),s=function(n){var e=n.children,t=n.type,s=void 0===t?"submit":t,o=n.id,u=n.onClick;return o||(o=(0,r.memo)((0,a.x0)())),(0,c.jsx)("button",{type:s,id:o,onClick:u,className:i,children:e})}}}]);
//# sourceMappingURL=524.b08dc8d4.chunk.js.map
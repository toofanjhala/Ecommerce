"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[74],{8074:function(e,a,r){r.r(a),r.d(a,{default:function(){return ue}});var s=r(4165),t=r(5861),i=r(2791),l=r(1413),o=r(5987),n=r(1694),c=r.n(n),d=r(2007),f=r.n(d),m=r(184),u=["as","className","type","tooltip"],v={type:f().string,tooltip:f().bool,as:f().elementType},p=i.forwardRef((function(e,a){var r=e.as,s=void 0===r?"div":r,t=e.className,i=e.type,n=void 0===i?"valid":i,d=e.tooltip,f=void 0!==d&&d,v=(0,o.Z)(e,u);return(0,m.jsx)(s,(0,l.Z)((0,l.Z)({},v),{},{ref:a,className:c()(t,"".concat(n,"-").concat(f?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=v;var x=p,b=i.createContext({}),h=r(162),y=["id","bsPrefix","className","type","isValid","isInvalid","as"],N=i.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,t=e.className,n=e.type,d=void 0===n?"checkbox":n,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,p=void 0!==v&&v,x=e.as,N=void 0===x?"input":x,Z=(0,o.Z)(e,y),j=(0,i.useContext)(b).controlId;return s=(0,h.vE)(s,"form-check-input"),(0,m.jsx)(N,(0,l.Z)((0,l.Z)({},Z),{},{ref:a,type:d,id:r||j,className:c()(t,s,u&&"is-valid",p&&"is-invalid")}))}));N.displayName="FormCheckInput";var Z=N,j=["bsPrefix","className","htmlFor"],k=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.htmlFor,n=(0,o.Z)(e,j),d=(0,i.useContext)(b).controlId;return r=(0,h.vE)(r,"form-check-label"),(0,m.jsx)("label",(0,l.Z)((0,l.Z)({},n),{},{ref:a,htmlFor:t||d,className:c()(s,r)}))}));k.displayName="FormCheckLabel";var I=k;var C=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=i.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,t=e.bsSwitchPrefix,n=e.inline,d=void 0!==n&&n,f=e.reverse,u=void 0!==f&&f,v=e.disabled,p=void 0!==v&&v,y=e.isValid,N=void 0!==y&&y,j=e.isInvalid,k=void 0!==j&&j,w=e.feedbackTooltip,P=void 0!==w&&w,g=e.feedback,F=e.feedbackType,R=e.className,E=e.style,S=e.title,T=void 0===S?"":S,z=e.type,L=void 0===z?"checkbox":z,V=e.label,O=e.children,G=e.as,_=void 0===G?"input":G,B=(0,o.Z)(e,C);s=(0,h.vE)(s,"form-check"),t=(0,h.vE)(t,"form-switch");var H=(0,i.useContext)(b).controlId,M=(0,i.useMemo)((function(){return{controlId:r||H}}),[H,r]),A=!O&&null!=V&&!1!==V||function(e,a){return i.Children.toArray(e).some((function(e){return i.isValidElement(e)&&e.type===a}))}(O,I),D=(0,m.jsx)(Z,(0,l.Z)((0,l.Z)({},B),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:N,isInvalid:k,disabled:p,as:_}));return(0,m.jsx)(b.Provider,{value:M,children:(0,m.jsx)("div",{style:E,className:c()(R,A&&s,d&&"".concat(s,"-inline"),u&&"".concat(s,"-reverse"),"switch"===L&&t),children:O||(0,m.jsxs)(m.Fragment,{children:[D,A&&(0,m.jsx)(I,{title:T,children:V}),g&&(0,m.jsx)(x,{type:F,tooltip:P,children:g})]})})})}));w.displayName="FormCheck";var P=Object.assign(w,{Input:Z,Label:I}),g=r(4942),F=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),R=i.forwardRef((function(e,a){var r,s,t=e.bsPrefix,n=e.type,d=e.size,f=e.htmlSize,u=e.id,v=e.className,p=e.isValid,x=void 0!==p&&p,y=e.isInvalid,N=void 0!==y&&y,Z=e.plaintext,j=e.readOnly,k=e.as,I=void 0===k?"input":k,C=(0,o.Z)(e,F),w=(0,i.useContext)(b).controlId;(t=(0,h.vE)(t,"form-control"),Z)?r=(0,g.Z)({},"".concat(t,"-plaintext"),!0):(s={},(0,g.Z)(s,t,!0),(0,g.Z)(s,"".concat(t,"-").concat(d),d),r=s);return(0,m.jsx)(I,(0,l.Z)((0,l.Z)({},C),{},{type:n,size:f,ref:a,readOnly:j,id:u||w,className:c()(v,r,x&&"is-valid",N&&"is-invalid","color"===n&&"".concat(t,"-color"))}))}));R.displayName="FormControl";var E=Object.assign(R,{Feedback:x}),S=(0,r(6543).Z)("form-floating"),T=["controlId","as"],z=i.forwardRef((function(e,a){var r=e.controlId,s=e.as,t=void 0===s?"div":s,n=(0,o.Z)(e,T),c=(0,i.useMemo)((function(){return{controlId:r}}),[r]);return(0,m.jsx)(b.Provider,{value:c,children:(0,m.jsx)(t,(0,l.Z)((0,l.Z)({},n),{},{ref:a}))})}));z.displayName="FormGroup";var L=z,V=r(9439),O=["as","bsPrefix","className"],G=["className"];var _=i.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,s=e.className,t=(0,o.Z)(e,O);r=(0,h.vE)(r,"col");var i=(0,h.pi)(),n=(0,h.zG)(),d=[],f=[];return i.forEach((function(e){var a,s,i,l=t[e];delete t[e],"object"===typeof l&&null!=l?(a=l.span,s=l.offset,i=l.order):a=l;var o=e!==n?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(a)),null!=i&&f.push("order".concat(o,"-").concat(i)),null!=s&&f.push("offset".concat(o,"-").concat(s))})),[(0,l.Z)((0,l.Z)({},t),{},{className:c().apply(void 0,[s].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),s=(0,V.Z)(r,2),t=s[0],i=t.className,n=(0,o.Z)(t,G),d=s[1],f=d.as,u=void 0===f?"div":f,v=d.bsPrefix,p=d.spans;return(0,m.jsx)(u,(0,l.Z)((0,l.Z)({},n),{},{ref:a,className:c()(i,!p.length&&v)}))}));_.displayName="Col";var B=_,H=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],M=i.forwardRef((function(e,a){var r=e.as,s=void 0===r?"label":r,t=e.bsPrefix,n=e.column,d=e.visuallyHidden,f=e.className,u=e.htmlFor,v=(0,o.Z)(e,H),p=(0,i.useContext)(b).controlId;t=(0,h.vE)(t,"form-label");var x="col-form-label";"string"===typeof n&&(x="".concat(x," ").concat(x,"-").concat(n));var y=c()(f,t,d&&"visually-hidden",n&&x);return u=u||p,n?(0,m.jsx)(B,(0,l.Z)({ref:a,as:"label",className:y,htmlFor:u},v)):(0,m.jsx)(s,(0,l.Z)({ref:a,className:y,htmlFor:u},v))}));M.displayName="FormLabel",M.defaultProps={column:!1,visuallyHidden:!1};var A=M,D=["bsPrefix","className","id"],J=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.id,n=(0,o.Z)(e,D),d=(0,i.useContext)(b).controlId;return r=(0,h.vE)(r,"form-range"),(0,m.jsx)("input",(0,l.Z)((0,l.Z)({},n),{},{type:"range",ref:a,className:c()(s,r),id:t||d}))}));J.displayName="FormRange";var U=J,q=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],K=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.size,t=e.htmlSize,n=e.className,d=e.isValid,f=void 0!==d&&d,u=e.isInvalid,v=void 0!==u&&u,p=e.id,x=(0,o.Z)(e,q),y=(0,i.useContext)(b).controlId;return r=(0,h.vE)(r,"form-select"),(0,m.jsx)("select",(0,l.Z)((0,l.Z)({},x),{},{size:t,ref:a,className:c()(n,r,s&&"".concat(r,"-").concat(s),f&&"is-valid",v&&"is-invalid"),id:p||y}))}));K.displayName="FormSelect";var Q=K,W=["bsPrefix","className","as","muted"],X=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.as,i=void 0===t?"small":t,n=e.muted,d=(0,o.Z)(e,W);return r=(0,h.vE)(r,"form-text"),(0,m.jsx)(i,(0,l.Z)((0,l.Z)({},d),{},{ref:a,className:c()(s,r,n&&"text-muted")}))}));X.displayName="FormText";var Y=X,$=i.forwardRef((function(e,a){return(0,m.jsx)(P,(0,l.Z)((0,l.Z)({},e),{},{ref:a,type:"switch"}))}));$.displayName="Switch";var ee=Object.assign($,{Input:P.Input,Label:P.Label}),ae=["bsPrefix","className","children","controlId","label"],re=i.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,t=e.children,i=e.controlId,n=e.label,d=(0,o.Z)(e,ae);return r=(0,h.vE)(r,"form-floating"),(0,m.jsxs)(L,(0,l.Z)((0,l.Z)({ref:a,className:c()(s,r),controlId:i},d),{},{children:[t,(0,m.jsx)("label",{htmlFor:i,children:n})]}))}));re.displayName="FloatingLabel";var se=re,te=["className","validated","as"],ie={_ref:f().any,validated:f().bool,as:f().elementType},le=i.forwardRef((function(e,a){var r=e.className,s=e.validated,t=e.as,i=void 0===t?"form":t,n=(0,o.Z)(e,te);return(0,m.jsx)(i,(0,l.Z)((0,l.Z)({},n),{},{ref:a,className:c()(r,s&&"was-validated")}))}));le.displayName="Form",le.propTypes=ie;var oe=Object.assign(le,{Group:L,Control:E,Floating:S,Check:P,Switch:ee,Label:A,Text:Y,Range:U,Select:Q,FloatingLabel:se}),ne=r(3360),ce=r(4858),de=r(3608),fe=r(7022),me=r(7689),ue=function(){var e=(0,me.s0)(),a=(0,i.useRef)(""),r=(0,i.useRef)(""),l=(0,i.useRef)("");function o(){return(o=(0,t.Z)((0,s.Z)().mark((function t(i){var o,n,c;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i.preventDefault(),o={name:a.current.value,email:r.current.value,phone:l.current.value},s.next=4,fetch("https://ecommerce-c9032-default-rtdb.firebaseio.com/formdata.json",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}});case 4:return n=s.sent,s.next=7,n.json();case 7:c=s.sent,console.log(c),r.current.value="",a.current.value="",l.current.value="",e("/");case 13:case"end":return s.stop()}}),t)})))).apply(this,arguments)}return(0,m.jsxs)("div",{children:[(0,m.jsx)(ce.Z,{}),(0,m.jsx)("h2",{style:{padding:"1rem",Color:"olive",fontFamily:"Stencil Std, fantasy",fontSize:"40px",marginTop:"30px",textAlign:"center",justifyContent:"center"},children:"Contact Us"}),(0,m.jsx)(fe.Z,{style:{margin:"5rem"},children:(0,m.jsxs)(oe,{style:{backgroundColor:"#9fd3c7",color:"black",width:"400px",marginLeft:"30rem",padding:"5px"},children:[(0,m.jsxs)(oe.Group,{className:"mb-3",controlId:"formBasicText",children:[(0,m.jsx)(oe.Label,{children:"Name"}),(0,m.jsx)(oe.Control,{type:"text",ref:a,placeholder:"Enter Name"})]}),(0,m.jsxs)(oe.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,m.jsx)(oe.Label,{children:"Email address"}),(0,m.jsx)(oe.Control,{type:"email",ref:r,placeholder:"Enter email"})]}),(0,m.jsxs)(oe.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,m.jsx)(oe.Label,{children:"Mobile Number"}),(0,m.jsx)(oe.Control,{type:"number",ref:l,placeholder:"Enter number"})]}),(0,m.jsx)(oe.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:(0,m.jsx)(oe.Check,{type:"checkbox",label:"Check me out"})}),(0,m.jsx)(ne.Z,{onClick:function(e){return o.apply(this,arguments)},variant:"primary",type:"submit",children:"Submit"})]})}),(0,m.jsx)(de.Z,{})]})}},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=74.a2b73bc2.chunk.js.map
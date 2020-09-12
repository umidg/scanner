(this.webpackJsonpbarcodereader=this.webpackJsonpbarcodereader||[]).push([[0],{30:function(e,t,n){e.exports=n(67)},35:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),l=n.n(c),o=(n(35),n(3)),i=n(12),u=n.n(i),s=n(24),d=n.n(s),m=(n(36),function(e){var t,n,c=Object(a.useState)(),l=Object(o.a)(c,2),i=l[0],u=l[1],s=Object(a.useRef)(null),m=Object(a.useRef)(null),g=Object(a.useState)({unit:"%",width:30,aspect:16/9}),f=Object(o.a)(g,2),h=f[0],v=f[1],p=Object(a.useState)(null),b=Object(o.a)(p,2),E=b[0],O=b[1],j=Object(a.useState)(null),w=Object(o.a)(j,2),x=(w[0],w[1],Object(a.useCallback)((function(e){s.current=e}),[]));return Object(a.useEffect)((function(){if(E&&m.current&&s.current){console.log(m,"preview");var e=s.current,t=m.current,n=E,a=e.naturalWidth/e.width,r=e.naturalHeight/e.height,c=t.getContext("2d");t.width=4*n.width,t.height=4*n.height,c.setTransform(4,0,0,4,0,0),c.imageSmoothingEnabled=!1,c.drawImage(e,n.x*a,n.y*r,n.width*a,n.height*r,0,0,n.width,n.height),console.log(m,"ploader")}}),[E]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Barcode and text scanner"),r.a.createElement("div",null,r.a.createElement("h4",null,"Please upload an image "),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return u(t.result)})),t.readAsDataURL(e.target.files[0])}}}))),r.a.createElement(d.a,{src:i,onImageLoaded:x,crop:h,onChange:function(e){return v(e)},onComplete:function(e){O(e)},style:{width:"60%",height:"60%",margin:"5% 20% 0 20%"}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("canvas",{ref:m,style:{width:null!==(t=null===E||void 0===E?void 0:E.width)&&void 0!==t?t:0,height:null!==(n=null===E||void 0===E?void 0:E.height)&&void 0!==n?n:0}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},E?r.a.createElement("button",{style:{margin:"5vh"},onClick:function(){return e.imgCropped(m)}},"Scan"):r.a.createElement("p",null)))}),g=n(1),f=n.n(g),h=n(13),v=n(25),p=n(26),b=n(29),E=n(28),O=n(27),j=n(6),w=n.n(j),x=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).getCanv=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(w.a.fromCanvas(t.current.current),"url"),u.a.decodeSingle({decoder:{readers:["code_128_reader","ean_reader"]},locate:!0,src:w.a.fromCanvas(t.current.current)},(function(e){e&&e.hasOwnProperty("codeResult")?(n=e.codeResult.code,r()):(n="Couldn't find barcode",r())})),r=function(){a.setState({imgUrl:w.a.fromCanvas(t.current.current),barcode:n}),console.log(a.state,"callme")},a.doOCR(w.a.fromCanvas(t.current.current));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.doOCR=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ready"),a.setState({text:"Please wait"}),n=Object(O.createWorker)({logger:function(e){return console.log(e)}}),e.next=5,n.load();case 5:return e.next=7,n.loadLanguage("eng");case 7:return e.next=9,n.initialize("eng");case 9:return e.next=11,n.recognize(t);case 11:return r=e.sent,c=r.data.text,console.log(c,"text"),""!=c?a.setState({text:c}):a.setState({text:"Couldn't find any text"}),e.next=17,n.terminate();case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={imgUrl:"",barcode:"",text:""},a}return Object(p.a)(n,[{key:"componentWillReceiveProps",value:function(e){void 0==e.img.current.current&&null==e.img.current.current||this.getCanv(e.img)}},{key:"render",value:function(){return console.log(this.state),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},this.state.barcode&&r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"800"}},"Barcode:")," ",this.state.barcode)),r.a.createElement("div",{className:"card"},this.state.text&&r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"800"}},"Text:")," ",this.state.text))))}}]),n}(a.Component),y=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useRef)(null),i=Object(a.useState)(!0),u=Object(o.a)(i,2),s=u[0],d=u[1];return Object(a.useEffect)((function(){console.log("changed")}),[s,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{imgCropped:function(e){l.current=e,c(e),d(!s)}}),r.a.createElement(x,{img:l}))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.4c094d39.chunk.js.map
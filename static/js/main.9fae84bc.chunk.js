(this.webpackJsonpbarcodereader=this.webpackJsonpbarcodereader||[]).push([[0],{30:function(e,t,n){e.exports=n(67)},35:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),l=n.n(c),i=(n(35),n(3)),o=n(23),u=n.n(o),s=(n(36),function(e){var t,n,c=Object(a.useState)(),l=Object(i.a)(c,2),o=l[0],s=l[1],d=Object(a.useRef)(null),m=Object(a.useRef)(null),f=Object(a.useState)({unit:"%",width:30,aspect:16/9}),h=Object(i.a)(f,2),g=h[0],v=h[1],p=Object(a.useState)(null),b=Object(i.a)(p,2),E=b[0],O=b[1],j=Object(a.useState)(null),w=Object(i.a)(j,2),x=(w[0],w[1],Object(a.useCallback)((function(e){d.current=e}),[]));return Object(a.useEffect)((function(){if(E&&m.current&&d.current){var e=d.current,t=m.current,n=E,a=e.naturalWidth/e.width,r=e.naturalHeight/e.height,c=t.getContext("2d");t.width=4*n.width,t.height=4*n.height,c.setTransform(4,0,0,4,0,0),c.imageSmoothingEnabled=!1,c.drawImage(e,n.x*a,n.y*r,n.width*a,n.height*r,0,0,n.width,n.height)}}),[E]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"Barcode and text scanner"),r.a.createElement("div",null,r.a.createElement("h4",null,"Please upload an image "),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader;t.addEventListener("load",(function(){return s(t.result)})),t.readAsDataURL(e.target.files[0])}}}))),r.a.createElement(u.a,{src:o,onImageLoaded:x,crop:g,onChange:function(e){return v(e)},onComplete:function(e){O(e)},style:{width:"60%",height:"60%",margin:"5% 20% 0 20%"}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("canvas",{ref:m,style:{width:null!==(t=null===E||void 0===E?void 0:E.width)&&void 0!==t?t:0,height:null!==(n=null===E||void 0===E?void 0:E.height)&&void 0!==n?n:0}})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},E?r.a.createElement("button",{style:{margin:"5vh"},onClick:function(){return e.imgCropped(m)}},"Scan"):r.a.createElement("p",null)))}),d=n(1),m=n.n(d),f=n(12),h=n(24),g=n(25),v=n(29),p=n(28),b=n(26),E=n.n(b),O=n(27),j=n(7),w=n.n(j),x=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getCanv=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.a.decodeSingle({decoder:{readers:["code_128_reader","ean_reader"]},locator:{halfSample:!0},locate:!0,src:w.a.fromCanvas(t.current.current)},(function(e){e&&e.hasOwnProperty("codeResult")?(n=e.codeResult.code,r()):(n="Couldn't find barcode. Image not clear enough.",r())})),r=function(){a.setState({imgUrl:w.a.fromCanvas(t.current.current),barcode:n})},a.doOCR(w.a.fromCanvas(t.current.current));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.doOCR=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({text:"Please wait"}),n=Object(O.createWorker)({logger:function(e){return console.log(e)}}),e.next=4,n.load();case 4:return e.next=6,n.loadLanguage("eng");case 6:return e.next=8,n.initialize("eng");case 8:return e.next=10,n.recognize(t);case 10:return r=e.sent,""!=(c=r.data.text)?a.setState({text:c}):a.setState({text:"Couldn't find any text. Image not clear enough."}),e.next=15,n.terminate();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={imgUrl:"",barcode:"",text:""},a}return Object(g.a)(n,[{key:"componentWillReceiveProps",value:function(e){void 0==e.img.current.current&&null==e.img.current.current||this.getCanv(e.img)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},this.state.barcode&&r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"800"}},"Barcode:")," ",this.state.barcode)),r.a.createElement("div",{className:"card"},this.state.text&&r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"800"}},"Text:")," ",this.state.text))))}}]),n}(a.Component),y=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useRef)(null),o=Object(a.useState)(!0),u=Object(i.a)(o,2),d=u[0],m=u[1];return Object(a.useEffect)((function(){}),[d,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{imgCropped:function(e){l.current=e,c(e),m(!d)}}),r.a.createElement(x,{img:l}))};var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9fae84bc.chunk.js.map
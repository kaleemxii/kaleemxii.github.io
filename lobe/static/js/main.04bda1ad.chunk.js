(this["webpackJsonplobe-web-sample"]=this["webpackJsonplobe-web-sample"]||[]).push([[0],[,,,,,,,,function(e,t,n){var c=n(26),i=["loadModel","disposeModel","predict"];e.exports=function(){var e=new Worker(n.p+"92b256aa9befbb64d37d.worker.js",{name:"[hash].worker.js"});return c(e,i),e}},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),a=n.n(r),s=(n(13),n(2)),o=n(3),u=n.n(o),l=n(5),d=n(7),j=n.n(d),b=(n(15),n(0)),v=function(e){var t=e.additionalClassname,n=e.children,c="blur-container";return t&&(c+=" ".concat(t)),Object(b.jsx)("div",{className:c,children:n})},f=(n(17),function(e){var t=e.onClick,n=e.setHover,c=e.children;return Object(b.jsx)("div",{onClick:t?function(){return t()}:void 0,onMouseEnter:n?function(){return n(!0)}:void 0,onMouseLeave:n?function(){return n(!1)}:void 0,children:Object(b.jsx)(v,{additionalClassname:"square-button",children:c})})}),g=n.p+"static/media/check.20cd8e75.svg",m=n.p+"static/media/no-check.34c030ac.svg";n(18);var O=function(e){var t=e.selected,n=e.onSelect,c=e.name;return Object(b.jsxs)("div",{className:"source-item-container",children:[Object(b.jsx)("div",{className:"source-device".concat(t?" source-selected":""),children:c}),Object(b.jsx)("div",{onClick:function(){return n()},className:"source-radio-button",children:Object(b.jsx)("img",{src:t?g:m,alt:"Select device"})})]},c)},p=n.p+"static/media/gear.9149aa4b.svg";n(19);var h=function(e){var t=e.devices,n=e.deviceId,i=e.setDeviceId,r=e.imageFlip,a=e.setImageFlip,o=e.selectorVisible,u=e.setSelectorVisible,l=Object(c.useState)(!1),d=Object(s.a)(l,2),j=d[0],h=d[1];return Object(b.jsxs)("div",{id:"camera-select-button",onClick:function(e){return e.stopPropagation()},onMouseLeave:function(){u(!1)},children:[Object(b.jsx)(f,{setHover:function(e){h(e),e&&u(!0)},children:Object(b.jsx)("img",{id:"gear-icon",src:p,alt:"Gear Icon",className:o||j?"gear-rotated":void 0})}),Object(b.jsxs)(v,{additionalClassname:"source-selector".concat(o?" source-expanded":""),children:[t.map((function(e,t){return Object(b.jsx)(O,{name:e.label?e.label.replace(/\(.*\)/g,""):"Device ".concat(t+1),onSelect:function(){return i(e.deviceId)},selected:e.deviceId===n},e.deviceId)})),Object(b.jsx)("div",{className:"toggle-container",children:Object(b.jsxs)("div",{className:"toggle-item-container",children:[Object(b.jsx)("div",{className:"toggle-item source-device".concat(r?" source-selected":""),children:"Flip Image"}),Object(b.jsx)("div",{onClick:function(){return a(!r)},className:"toggle-radio-button",children:Object(b.jsx)("img",{src:r?g:m,alt:"Flip Webcam Button"})})]})})]})]})};n(20);var x,C=function(e){var t=e.predictCanvas,n=e.predictions,i=Object(c.useState)([]),r=Object(s.a)(i,2),a=r[0],o=r[1],d=Object(c.useState)(void 0),v=Object(s.a)(d,2),f=v[0],g=v[1],m=Object(c.useState)(!0),O=Object(s.a)(m,2),p=O[0],x=O[1],C=Object(c.useRef)(null),k=Object(c.useState)(!1),I=Object(s.a)(k,2),F=I[0],w=I[1],S=Object(c.useCallback)((function(e){var t=e.filter((function(e){return"videoinput"===e.kind}));o(t),t.length>0&&g(t[0].deviceId)}),[o,g]);Object(c.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then(S)}),[S]);var y=Object(c.useCallback)(Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C.current){e.next=4;break}if(!(t=C.current.getCanvas())){e.next=4;break}return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),[C]),N=Object(c.useCallback)((function(e){return new Promise((function(t,n){setTimeout(t,e)}))}),[]);return Object(c.useEffect)((function(){y().then(function(){var e=Object(l.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n;case 1:if(c){e.next=9;break}return e.next=4,N(500);case 4:return e.next=6,y();case 6:c=e.sent,e.next=1;break;case 9:c&&t(c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[N,n,f,y,t]),Object(b.jsxs)("div",{id:"video-container",onClick:function(){return w(!1)},children:[Object(b.jsx)(h,{devices:a,deviceId:f,setDeviceId:g,imageFlip:p,setImageFlip:x,selectorVisible:F,setSelectorVisible:w}),Object(b.jsx)(j.a,{ref:C,screenshotFormat:"image/jpeg",forceScreenshotSourceSize:!0,screenshotQuality:1,audio:!1,videoConstraints:{width:{ideal:1920},height:{ideal:1080},deviceId:f?{exact:f}:void 0},mirrored:p})]})},k=(n(21),{}),I={};var F=function(e){var t=e.label,n=e.confidence,c=e.top;return c&&n&&n>.5&&"None"!=t&&(k[t]=(k[t]||0)+1)-Object.entries(k).filter((function(e){return e[0]!=t})).reduce((function(e,t){return e[1]>t[1]?e:t}),["",0])[1]>8&&(k={},x!=t&&(I[t]=(I[t]||0)+1,x=t)),Object(b.jsxs)("div",{className:"prediction-entry",children:[t+(I[t]?"->":"")+(I[t]||""),n?Object(b.jsx)("div",{className:"prediction-bar"+(c?" prediction-green":""),style:{width:(100*n).toString()+"%"}}):null]},t)};n(22);var w=function(e){var t,n=e.predictions,c=e.top,i=void 0===c?3:c;return n&&(t=Object.entries(n).sort((function(e,t){return t[1]-e[1]})).slice(0,i)),Object(b.jsx)("div",{id:"predictions",children:Object(b.jsx)(v,{additionalClassname:"prediction-container",children:t?t.map((function(e,t){var n=Object(s.a)(e,2),c=n[0],i=n[1];return Object(b.jsx)(F,{label:c,confidence:i,top:0===t},c)})):Object(b.jsx)(F,{label:"Loading..."})})})},S=n.p+"static/media/gallery.4ec4eac8.svg";n(23);var y=function(e){var t=e.setImageFile,n=e.imageFile,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){!n&&i.current&&(i.current.value="")}),[n,i]),Object(b.jsxs)("div",{id:"image-select-button",onClick:function(){i.current&&i.current.click()},children:[Object(b.jsx)(f,{children:Object(b.jsx)("img",{id:"gallery-icon",src:S,alt:"File Selector"})}),Object(b.jsx)("input",{ref:i,type:"file",accept:"image/*",onChange:function(e){var n=e.target.files;n&&n.length>0&&t(n[0])},style:{display:"none"}})]})},N=n.p+"static/media/close.3de684eb.svg";n(24);var D=function(e){var t=e.setImageFile;return Object(b.jsx)("div",{id:"image-close-button",children:Object(b.jsx)(f,{onClick:function(){t(null)},children:Object(b.jsx)("img",{id:"close-icon",src:N,alt:"Close"})})})};n(25);var M=function(e){var t=e.predictCanvas,n=e.image,i=e.setImageFile,r=Object(c.useRef)(null),a=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=new FileReader;e.onload=function(e){var n=new Image;n.onload=function(){if(r.current){r.current.width=n.width,r.current.height=n.height;var e=r.current.getContext("2d");e&&(e.drawImage(n,0,0),t(r.current))}},e.target&&(n.src=e.target.result,a.current&&(a.current.style.backgroundImage="url(".concat(e.target.result,")")))},e.readAsDataURL(n)}),[n,t,a]),Object(b.jsxs)("div",{id:"static-image",ref:a,children:[Object(b.jsx)(D,{setImageFile:i}),Object(b.jsx)("canvas",{ref:r,style:{display:"none"}})]})},E=n(8),L=n.n(E)()();L.loadModel("/model/signature.json","/model/model.json");var R=function(){var e=Object(c.useState)(void 0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),a=Object(s.a)(r,2),o=a[0],u=a[1],l=Object(c.useCallback)((function(e){var t=e.getContext("2d");if(t){var n=t.getImageData(0,0,e.width,e.height);L.predict(n).then((function(e){e&&i(e.Confidences)}))}}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{setImageFile:u,imageFile:o}),o?Object(b.jsx)(M,{predictCanvas:l,image:o,setImageFile:u}):Object(b.jsx)(C,{predictCanvas:l,predictions:n}),Object(b.jsx)(w,{predictions:n})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),P()}],[[27,1,2]]]);
//# sourceMappingURL=main.04bda1ad.chunk.js.map
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=109)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(71))},function(t,n,e){var r=e(0),o=e(29),i=e(2),c=e(30),a=e(34),u=e(52),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(a&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(0),o=e(25).f,i=e(8),c=e(11),a=e(28),u=e(47),f=e(74);t.exports=function(t,n){var e,s,l,p,d,v=t.target,y=t.global,h=t.stat;if(e=y?r:h?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(y?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(6),o=e(43),i=e(9),c=e(17),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(6),o=e(5),i=e(13);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(42),o=e(27);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(8),i=e(2),c=e(28),a=e(45),u=e(18),f=u.get,s=u.enforce,l=String(String).split("String");(t.exports=function(t,n,e,a){var u=!!a&&!!a.unsafe,f=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(u?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6),o=e(3),i=e(2),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,n){if(i(a,t))return a[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:u,l=i(n,1)?n[1]:void 0;return a[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,e.call(t,s,l)}))}},function(t,n){t.exports={}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r,o,i,c=e(72),a=e(0),u=e(7),f=e(8),s=e(2),l=e(19),p=e(21),d=a.WeakMap;if(c){var v=new d,y=v.get,h=v.has,g=v.set;r=function(t,n){return g.call(v,t,n),n},o=function(t){return y.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(29),o=e(30),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,e){var r=e(48),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(26);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(6),o=e(41),i=e(13),c=e(10),a=e(17),u=e(2),f=e(43),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(20),o=e(46);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(49),o=e(33).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r,o=e(9),i=e(75),c=e(33),a=e(21),u=e(76),f=e(44),s=e(19),l=s("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"</"+"script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;v=r?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):((n=f("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var e=c.length;e--;)delete v.prototype[c[e]];return v()};a[l]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[l]=t):e=v(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(49),o=e(33);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(5).f,o=e(2),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(55),o=e(42),i=e(12),c=e(14),a=e(56),u=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,y,h){for(var g,m,b=i(d),S=o(b),x=r(v,y,3),O=c(S.length),w=0,A=h||a,j=n?A(d,O):e?A(d,0):void 0;O>w;w++)if((p||w in S)&&(m=x(g=S[w],w,b),t))if(n)j[w]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:u.call(j,g)}else if(s)return!1;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){"use strict";var r=e(17),o=e(5),i=e(13);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r={};r[e(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(3),o=e(26),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(6),o=e(3),i=e(44);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(7),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(46),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(28),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},function(t,n,e){var r=e(2),o=e(73),i=e(25),c=e(5);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(2),o=e(10),i=e(50).indexOf,c=e(21);t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(c,e)&&r(a,e)&&f.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(10),o=e(14),i=e(32),c=function(t){return function(n,e,c){var a,u=r(n),f=o(u.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(1);n.f=r},function(t,n,e){var r=e(48),o=e(2),i=e(53),c=e(5).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){var r=e(78);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(7),o=e(24),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(1),o=e(35),i=e(5),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},function(t,n,e){"use strict";var r=e(4),o=e(59);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(38).forEach,o=e(60),i=e(15),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){"use strict";var r=e(3);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(40),o=e(26),i=e(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:c?o(n):"Object"==(r=o(n))&&"function"==typeof n.callee?"Arguments":r}},function(t,n,e){"use strict";var r=e(10),o=e(57),i=e(16),c=e(18),a=e(63),u="Array Iterator",f=c.set,s=c.getterFor(u);t.exports=a(Array,"Array",(function(t,n){f(this,{type:u,target:r(t),index:0,kind:n})}),(function(){var t=s(this),n=t.target,e=t.kind,r=t.index++;return!n||r>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:r,done:!1}:"values"==e?{value:n[r],done:!1}:{value:[r,n[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,e){"use strict";var r=e(4),o=e(90),i=e(65),c=e(92),a=e(37),u=e(8),f=e(11),s=e(1),l=e(20),p=e(16),d=e(64),v=d.IteratorPrototype,y=d.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g="keys",m="values",b="entries",S=function(){return this};t.exports=function(t,n,e,s,d,x,O){o(e,n,s);var w,A,j,E=function(t){if(t===d&&C)return C;if(!y&&t in P)return P[t];switch(t){case g:case m:case b:return function(){return new e(this,t)}}return function(){return new e(this)}},L=n+" Iterator",T=!1,P=t.prototype,I=P[h]||P["@@iterator"]||d&&P[d],C=!y&&I||E(d),M="Array"==n&&P.entries||I;if(M&&(w=i(M.call(new t)),v!==Object.prototype&&w.next&&(l||i(w)===v||(c?c(w,v):"function"!=typeof w[h]&&u(w,h,S)),a(w,L,!0,!0),l&&(p[L]=S))),d==m&&I&&I.name!==m&&(T=!0,C=function(){return I.call(this)}),l&&!O||P[h]===C||u(P,h,C),p[n]=C,d)if(A={values:E(m),keys:x?C:E(g),entries:E(b)},O)for(j in A)(y||T||!(j in P))&&f(P,j,A[j]);else r({target:n,proto:!0,forced:y||T},A);return A}},function(t,n,e){"use strict";var r,o,i,c=e(65),a=e(8),u=e(2),f=e(1),s=e(20),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),s||u(r,l)||a(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,n,e){var r=e(2),o=e(12),i=e(19),c=e(91),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(3),o=e(1),i=e(95),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n){t.exports='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1"> <title>Task_5.2</title> </head> <body> <div class="container"> <header class="header"> <h2>Товары</h2> <button type="button" class="btn-add" data-btn="add-btn">+</button> </header> <div class="widget hidden" data-widget="widget"> <form id="add-item" class="widget-menu" data-menu="add-menu" novalidate> <h3 class="name-title">Название</h3> <input name="input-add-name" class="input" type="text" required data-field="name" placeholder="введите навзвание товара"> <h3 class="price-title">Стоимость</h3> <input name="input-add-price" class="input" type="text" required data-field="price" placeholder="введите стоимость товара"> <div class="btn-container"> <button form="add-item" data-btn="save-btn" class="save btn">Сохранить</button> <button data-btn="cancel-btn" class="cancel btn">Отмена</button> </div> </form> <div class="msg hidden" data-msg="msg-err"></div> </div> <div class="items-title" data-items="title"> <p class="grid-title">Название</p> <p class="grid-title">Стоимость</p> <p class="grid-title">Действия</p> </div> <div class="items-box" data-items="items-container"></div> </div> </body> </html>'},function(t,n,e){},function(t,n,e){"use strict";var r=e(4),o=e(0),i=e(22),c=e(20),a=e(6),u=e(34),f=e(52),s=e(3),l=e(2),p=e(24),d=e(7),v=e(9),y=e(12),h=e(10),g=e(17),m=e(13),b=e(35),S=e(36),x=e(31),O=e(77),w=e(51),A=e(25),j=e(5),E=e(41),L=e(8),T=e(11),P=e(29),I=e(19),C=e(21),M=e(30),_=e(1),k=e(53),R=e(54),F=e(37),N=e(18),D=e(38).forEach,q=I("hidden"),G="Symbol",V=_("toPrimitive"),H=N.set,W=N.getterFor(G),z=Object.prototype,U=o.Symbol,B=i("JSON","stringify"),Y=A.f,$=j.f,J=O.f,K=E.f,Q=P("symbols"),X=P("op-symbols"),Z=P("string-to-symbol-registry"),tt=P("symbol-to-string-registry"),nt=P("wks"),et=o.QObject,rt=!et||!et.prototype||!et.prototype.findChild,ot=a&&s((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=Y(z,n);r&&delete z[n],$(t,n,e),r&&t!==z&&$(z,n,r)}:$,it=function(t,n){var e=Q[t]=b(U.prototype);return H(e,{type:G,tag:t,description:n}),a||(e.description=n),e},ct=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},at=function(t,n,e){t===z&&at(X,n,e),v(t);var r=g(n,!0);return v(e),l(Q,r)?(e.enumerable?(l(t,q)&&t[q][r]&&(t[q][r]=!1),e=b(e,{enumerable:m(0,!1)})):(l(t,q)||$(t,q,m(1,{})),t[q][r]=!0),ot(t,r,e)):$(t,r,e)},ut=function(t,n){v(t);var e=h(n),r=S(e).concat(pt(e));return D(r,(function(n){a&&!ft.call(e,n)||at(t,n,e[n])})),t},ft=function(t){var n=g(t,!0),e=K.call(this,n);return!(this===z&&l(Q,n)&&!l(X,n))&&(!(e||!l(this,n)||!l(Q,n)||l(this,q)&&this[q][n])||e)},st=function(t,n){var e=h(t),r=g(n,!0);if(e!==z||!l(Q,r)||l(X,r)){var o=Y(e,r);return!o||!l(Q,r)||l(e,q)&&e[q][r]||(o.enumerable=!0),o}},lt=function(t){var n=J(h(t)),e=[];return D(n,(function(t){l(Q,t)||l(C,t)||e.push(t)})),e},pt=function(t){var n=t===z,e=J(n?X:h(t)),r=[];return D(e,(function(t){!l(Q,t)||n&&!l(z,t)||r.push(Q[t])})),r};(u||(T((U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=M(t),e=function(t){this===z&&e.call(X,t),l(this,q)&&l(this[q],n)&&(this[q][n]=!1),ot(this,n,m(1,t))};return a&&rt&&ot(z,n,{configurable:!0,set:e}),it(n,t)}).prototype,"toString",(function(){return W(this).tag})),T(U,"withoutSetter",(function(t){return it(M(t),t)})),E.f=ft,j.f=at,A.f=st,x.f=O.f=lt,w.f=pt,k.f=function(t){return it(_(t),t)},a&&($(U.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),c||T(z,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:U}),D(S(nt),(function(t){R(t)})),r({target:G,stat:!0,forced:!u},{for:function(t){var n=String(t);if(l(Z,n))return Z[n];var e=U(n);return Z[n]=e,tt[e]=n,e},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(tt,t))return tt[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!a},{create:function(t,n){return void 0===n?b(t):ut(b(t),n)},defineProperty:at,defineProperties:ut,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:lt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:s((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(y(t))}}),B)&&r({target:"JSON",stat:!0,forced:!u||s((function(){var t=U();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(d(n)||void 0!==t)&&!ct(t))return p(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ct(n))return n}),o[1]=n,B.apply(null,o)}});U.prototype[V]||L(U.prototype,V,U.prototype.valueOf),F(U,G),C[q]=!0},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(45),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(22),o=e(31),i=e(51),c=e(9);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(6),o=e(5),i=e(9),c=e(36);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),a=r.length,u=0;a>u;)o.f(t,e=r[u++],n[e]);return t}},function(t,n,e){var r=e(22);t.exports=r("document","documentElement")},function(t,n,e){var r=e(10),o=e(31).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){"use strict";var r=e(4),o=e(6),i=e(0),c=e(2),a=e(7),u=e(5).f,f=e(47),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var d=p.prototype=s.prototype;d.constructor=p;var v=d.toString,y="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=v.call(t);if(c(l,t))return"";var e=y?n.slice(7,-1):n.replace(h,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){e(54)("iterator")},function(t,n,e){"use strict";var r=e(4),o=e(38).find,i=e(57),c=e(15),a="find",u=!0,f=c(a);a in[]&&Array(1).find((function(){u=!1})),r({target:"Array",proto:!0,forced:u||!f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},function(t,n,e){var r=e(4),o=e(83);r({target:"Array",stat:!0,forced:!e(87)((function(t){Array.from(t)}))},{from:o})},function(t,n,e){"use strict";var r=e(55),o=e(12),i=e(84),c=e(85),a=e(14),u=e(39),f=e(86);t.exports=function(t){var n,e,s,l,p,d,v=o(t),y="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,b=f(v),S=0;if(m&&(g=r(g,h>2?arguments[2]:void 0,2)),null==b||y==Array&&c(b))for(e=new y(n=a(v.length));n>S;S++)d=m?g(v[S],S):v[S],u(e,S,d);else for(p=(l=b.call(v)).next,e=new y;!(s=p.call(l)).done;S++)d=m?i(l,g,[s.value,S],!0):s.value,u(e,S,d);return e.length=S,e}},function(t,n,e){var r=e(9);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1),o=e(16),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(61),o=e(16),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(4),o=e(50).indexOf,i=e(60),c=e(15),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!f||!s},{indexOf:function(t){return u?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){e(4)({target:"Array",stat:!0},{isArray:e(24)})},function(t,n,e){"use strict";var r=e(64).IteratorPrototype,o=e(35),i=e(13),c=e(37),a=e(16),u=function(){return this};t.exports=function(t,n,e){var f=n+" Iterator";return t.prototype=o(r,{next:i(1,e)}),c(t,f,!1,!0),a[f]=u,t}},function(t,n,e){var r=e(3);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,e){var r=e(9),o=e(93);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";var r=e(4),o=e(7),i=e(24),c=e(32),a=e(14),u=e(10),f=e(39),s=e(1),l=e(66),p=e(15),d=l("slice"),v=p("slice",{ACCESSORS:!0,0:0,1:2}),y=s("species"),h=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!d||!v},{slice:function(t,n){var e,r,s,l=u(this),p=a(l.length),d=c(t,p),v=c(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(e=l.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[y])&&(e=void 0):e=void 0,e===Array||void 0===e))return h.call(l,d,v);for(r=new(void 0===e?Array:e)(g(v-d,0)),s=0;d<v;d++,s++)d in l&&f(r,s,l[d]);return r.length=s,r}})},function(t,n,e){var r,o,i=e(0),c=e(96),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(22);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(4),o=e(32),i=e(23),c=e(14),a=e(12),u=e(56),f=e(39),s=e(66),l=e(15),p=s("splice"),d=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,y=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!d},{splice:function(t,n){var e,r,s,l,p,d,m=a(this),b=c(m.length),S=o(t,b),x=arguments.length;if(0===x?e=r=0:1===x?(e=0,r=b-S):(e=x-2,r=y(v(i(n),0),b-S)),b+e-r>h)throw TypeError(g);for(s=u(m,r),l=0;l<r;l++)(p=S+l)in m&&f(s,l,m[p]);if(s.length=r,e<r){for(l=S;l<b-r;l++)d=l+e,(p=l+r)in m?m[d]=m[p]:delete m[d];for(l=b;l>b-r+e;l--)delete m[l-1]}else if(e>r)for(l=b-r;l>S;l--)d=l+e-1,(p=l+r-1)in m?m[d]=m[p]:delete m[d];for(l=0;l<e;l++)m[l+S]=arguments[l+2];return m.length=b-r+e,s}})},function(t,n,e){var r=e(11),o=Date.prototype,i="Invalid Date",c="toString",a=o.toString,u=o.getTime;new Date(NaN)+""!=i&&r(o,c,(function(){var t=u.call(this);return t==t?a.call(this):i}))},function(t,n,e){var r=e(6),o=e(5).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,n,e){var r=e(4),o=e(12),i=e(36);r({target:"Object",stat:!0,forced:e(3)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,e){var r=e(40),o=e(11),i=e(102);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,e){"use strict";var r=e(40),o=e(61);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,e){"use strict";var r=e(11),o=e(9),i=e(3),c=e(104),a="toString",u=RegExp.prototype,f=u.toString,s=i((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=a;(s||l)&&r(RegExp.prototype,a,(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(9);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(106).charAt,o=e(18),i=e(63),c="String Iterator",a=o.set,u=o.getterFor(c);i(String,"String",(function(t){a(this,{type:c,string:String(t),index:0})}),(function(){var t,n=u(this),e=n.string,o=n.index;return o>=e.length?{value:void 0,done:!0}:(t=r(e,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,e){var r=e(23),o=e(27),i=function(t){return function(n,e){var i,c,a=String(o(n)),u=r(e),f=a.length;return u<0||u>=f?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===f||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(0),o=e(67),i=e(62),c=e(8),a=e(1),u=a("iterator"),f=a("toStringTag"),s=i.values;for(var l in o){var p=r[l],d=p&&p.prototype;if(d){if(d[u]!==s)try{c(d,u,s)}catch(t){d[u]=s}if(d[f]||c(d,f,l),o[l])for(var v in i)if(d[v]!==i[v])try{c(d,v,i[v])}catch(t){d[v]=i[v]}}}},function(t,n,e){var r=e(0),o=e(67),i=e(59),c=e(8);for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,e){"use strict";e.r(n);e(68),e(69),e(70),e(79),e(80),e(81),e(58),e(82),e(88),e(89),e(62),e(94),e(97),e(98),e(99),e(100),e(101),e(103),e(105),e(107);var r=function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.nameItem=n,this.priceItem=e};e(108);function o(t,n){n.innerHTML="",t.forEach((function(t){var e=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p");e.innerHTML="".concat(t.nameItem),r.innerHTML="".concat(t.priceItem),o.innerHTML='<span class="edit-pencil" data-pencil="edit">&#128393</span>\n                        <span class="delete-bin" data-bin="delete">&#128465</span>',e.setAttribute("data-grid","cell"),r.setAttribute("data-grid","cell"),o.setAttribute("data-grid","cell"),n.appendChild(e),n.appendChild(r),n.appendChild(o)}))}var i={name:{valueMissing:"Введите название товара"},price:{valueMissing:"Введите стоимость товара"}};function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var a,u=document.querySelector('[data-btn="add-btn"]'),f=document.querySelector('[data-menu="add-menu"]'),s=document.querySelector('[data-btn="cancel-btn"]'),l=document.querySelector('[data-items="items-container"]'),p=document.querySelector('[data-widget="widget"]'),d=document.querySelector('[data-field="name"]'),v=document.querySelector('[data-field="price"]'),y=document.querySelector('[data-msg="msg-err"]'),h=function(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(f.elements),g=[];window.addEventListener("beforeunload",(function(){var t=localStorage.getItem("name"),n=localStorage.getItem("price");void 0!==t&&void 0!==n&&(d.value=t,v.value=n)})),l.addEventListener("click",(function(t){var n=t.target;if(!n.hasAttribute("data-pencil")&&!n.hasAttribute("data-bin"))return null;var e,r=n.closest("p").previousSibling,i=r.previousSibling;if(n.hasAttribute("data-pencil")){f.classList.add("edit"),p.classList.remove("hidden"),e=i.textContent;var c=r.textContent;d.value=e,v.value=c,g.forEach((function(t){t.nameItem===e&&(a=g.indexOf(t),d.addEventListener("input",(function(){null==document.querySelector(".add")&&(g[a].nameItem=d.value)})),v.addEventListener("input",(function(){null==document.querySelector(".add")&&"number"==typeof v.value&&(g[a].priceItem=v.value)})))}))}else n.hasAttribute("data-bin")&&(e=i.textContent,g.forEach((function(t){t.nameItem===e&&(a=g.indexOf(t),g.splice(a,1),o(g,l))})))})),d.addEventListener("input",(function(){localStorage.setItem("name",d.value)})),v.addEventListener("input",(function(){localStorage.setItem("price",v.value)})),u.addEventListener("click",(function(){p.classList.remove("hidden"),f.classList.add("add")})),s.addEventListener("click",(function(t){t.preventDefault(),p.classList.add("hidden"),y.classList.remove("active"),f.classList.remove("add")})),f.addEventListener("submit",(function(t){if(t.preventDefault(),t.currentTarget.checkValidity()){console.log("valid"),y.classList.remove("active");var n=new r(d.value,v.value);document.querySelector(".edit")||g.push(n),o(g,l),localStorage.clear(),f.reset(),p.classList.add("hidden"),f.classList.remove("add"),f.classList.remove("edit")}else{console.log("not valid");var e=h.find((function(t){return!t.validity.valid}));e.focus();var c=Object.keys(ValidityState.prototype).find((function(t){return e.validity[t],e.validity[t]}));console.log(c);var a=i[e.dataset.field][c];y.classList.add("active"),y.innerHTML='<p class="err-msg">'.concat(a,"</p>"),y.style.left="".concat(e.offsetWidth,"px"),y.style.top="".concat(e.offsetTop,"px")}}))}]);
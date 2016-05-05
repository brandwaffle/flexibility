!function(){function t(){var t;return(t=navigator.userAgent.indexOf("MSIE"))>-1?parseInt(navigator.userAgent.slice(t+5)):!1}window.flexibility={},Array.prototype.forEach||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw new TypeError(this+"is not an object");if(!(t instanceof Function))throw new TypeError(t+" is not a function");for(var e=Object(this),i=arguments[1],r=e instanceof String?e.split(""):e,n=Math.max(Math.min(r.length,9007199254740991),0)||0,o=-1;++o<n;)o in r&&t.call(i,r[o],o,e)}),function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.computeLayout=e()}(flexibility,function(){var t=function(){function t(e){if(e.layout&&!e.isDirty||(e.layout={width:void 0,height:void 0,top:0,left:0,right:0,bottom:0}),e.style||(e.style={}),e.children||(e.children=[]),e.style.measure&&e.children&&e.children.length)throw new Error("Using custom measure function is supported only for leaf nodes.");return e.children.forEach(t),e}function e(t){return void 0===t}function i(t){return t===q||t===G}function r(t){return t===O||t===U}function n(t,e){if(void 0!==t.style.marginStart&&i(e))return t.style.marginStart;var r=null;switch(e){case"row":r=t.style.marginLeft;break;case"row-reverse":r=t.style.marginRight;break;case"column":r=t.style.marginTop;break;case"column-reverse":r=t.style.marginBottom}return void 0!==r?r:void 0!==t.style.margin?t.style.margin:0}function o(t,e){if(void 0!==t.style.marginEnd&&i(e))return t.style.marginEnd;var r=null;switch(e){case"row":r=t.style.marginRight;break;case"row-reverse":r=t.style.marginLeft;break;case"column":r=t.style.marginBottom;break;case"column-reverse":r=t.style.marginTop}return null!=r?r:void 0!==t.style.margin?t.style.margin:0}function l(t,e){if(void 0!==t.style.paddingStart&&t.style.paddingStart>=0&&i(e))return t.style.paddingStart;var r=null;switch(e){case"row":r=t.style.paddingLeft;break;case"row-reverse":r=t.style.paddingRight;break;case"column":r=t.style.paddingTop;break;case"column-reverse":r=t.style.paddingBottom}return null!=r&&r>=0?r:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}function a(t,e){if(void 0!==t.style.paddingEnd&&t.style.paddingEnd>=0&&i(e))return t.style.paddingEnd;var r=null;switch(e){case"row":r=t.style.paddingRight;break;case"row-reverse":r=t.style.paddingLeft;break;case"column":r=t.style.paddingBottom;break;case"column-reverse":r=t.style.paddingTop}return null!=r&&r>=0?r:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}function d(t,e){if(void 0!==t.style.borderStartWidth&&t.style.borderStartWidth>=0&&i(e))return t.style.borderStartWidth;var r=null;switch(e){case"row":r=t.style.borderLeftWidth;break;case"row-reverse":r=t.style.borderRightWidth;break;case"column":r=t.style.borderTopWidth;break;case"column-reverse":r=t.style.borderBottomWidth}return null!=r&&r>=0?r:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function s(t,e){if(void 0!==t.style.borderEndWidth&&t.style.borderEndWidth>=0&&i(e))return t.style.borderEndWidth;var r=null;switch(e){case"row":r=t.style.borderRightWidth;break;case"row-reverse":r=t.style.borderLeftWidth;break;case"column":r=t.style.borderBottomWidth;break;case"column-reverse":r=t.style.borderTopWidth}return null!=r&&r>=0?r:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function u(t,e){return l(t,e)+d(t,e)}function y(t,e){return a(t,e)+s(t,e)}function c(t,e){return d(t,e)+s(t,e)}function f(t,e){return n(t,e)+o(t,e)}function h(t,e){return u(t,e)+y(t,e)}function v(t){return t.style.justifyContent?t.style.justifyContent:"flex-start"}function m(t){return t.style.alignContent?t.style.alignContent:"flex-start"}function p(t,e){return e.style.alignSelf?e.style.alignSelf:t.style.alignItems?t.style.alignItems:"stretch"}function x(t,e){if(e===N){if(t===q)return G;if(t===G)return q}return t}function g(t,e){var i;return i=t.style.direction?t.style.direction:F,i===F&&(i=void 0===e?M:e),i}function b(t){return t.style.flexDirection?t.style.flexDirection:O}function w(t,e){return r(t)?x(q,e):O}function W(t){return t.style.position?t.style.position:"relative"}function L(t){return W(t)===tt&&t.style.flex>0}function E(t){return"wrap"===t.style.flexWrap}function S(t,e){return t.layout[ot[e]]+f(t,e)}function k(t,e){return void 0!==t.style[ot[e]]&&t.style[ot[e]]>=0}function C(t,e){return void 0!==t.style[e]}function T(t){return void 0!==t.style.measure}function $(t,e){return void 0!==t.style[e]?t.style[e]:0}function H(t,e,i){var r={row:t.style.minWidth,"row-reverse":t.style.minWidth,column:t.style.minHeight,"column-reverse":t.style.minHeight}[e],n={row:t.style.maxWidth,"row-reverse":t.style.maxWidth,column:t.style.maxHeight,"column-reverse":t.style.maxHeight}[e],o=i;return void 0!==n&&n>=0&&o>n&&(o=n),void 0!==r&&r>=0&&r>o&&(o=r),o}function I(t,e){return t>e?t:e}function z(t,e){void 0===t.layout[ot[e]]&&k(t,e)&&(t.layout[ot[e]]=I(H(t,e,t.style[ot[e]]),h(t,e)))}function B(t,e,i){e.layout[rt[i]]=t.layout[ot[i]]-e.layout[ot[i]]-e.layout[nt[i]]}function A(t,e){return void 0!==t.style[it[e]]?$(t,it[e]):-$(t,rt[e])}function D(t,r,l,a){var s=g(t,a),D=x(b(t),s),F=w(D,s),M=x(q,s);z(t,D),z(t,F),t.layout.direction=s,t.layout[it[D]]+=n(t,D)+A(t,D),t.layout[rt[D]]+=o(t,D)+A(t,D),t.layout[it[F]]+=n(t,F)+A(t,F),t.layout[rt[F]]+=o(t,F)+A(t,F);var N=t.children.length,lt=h(t,M),at=h(t,O);if(T(t)){var dt=!e(t.layout[ot[M]]),st=j;st=k(t,M)?t.style.width:dt?t.layout[ot[M]]:r-f(t,M),st-=lt;var ut=j;ut=k(t,O)?t.style.height:e(t.layout[ot[O]])?l-f(t,M):t.layout[ot[O]],ut-=h(t,O);var yt=!k(t,M)&&!dt,ct=!k(t,O)&&e(t.layout[ot[O]]);if(yt||ct){var ft=t.style.measure(st,ut);yt&&(t.layout.width=ft.width+lt),ct&&(t.layout.height=ft.height+at)}if(0===N)return}var ht,vt,mt,pt,xt=E(t),gt=v(t),bt=u(t,D),wt=u(t,F),Wt=h(t,D),Lt=h(t,F),Et=!e(t.layout[ot[D]]),St=!e(t.layout[ot[F]]),kt=i(D),Ct=null,Tt=null,$t=j;Et&&($t=t.layout[ot[D]]-Wt);for(var Ht=0,It=0,zt=0,Bt=0,At=0,Dt=0;N>It;){var Rt,jt,Ft=0,Mt=0,Nt=0,qt=0,Gt=Et&&gt===Z||!Et&&gt!==_,Ot=Gt?N:Ht,Ut=!0,Zt=N,_t=null,Jt=null,Kt=bt,Pt=0;for(ht=Ht;N>ht;++ht){mt=t.children[ht],mt.lineIndex=Dt,mt.nextAbsoluteChild=null,mt.nextFlexChild=null;var Qt=p(t,mt);if(Qt===Y&&W(mt)===tt&&St&&!k(mt,F))mt.layout[ot[F]]=I(H(mt,F,t.layout[ot[F]]-Lt-f(mt,F)),h(mt,F));else if(W(mt)===et)for(null===Ct&&(Ct=mt),null!==Tt&&(Tt.nextAbsoluteChild=mt),Tt=mt,vt=0;2>vt;vt++)pt=0!==vt?q:O,!e(t.layout[ot[pt]])&&!k(mt,pt)&&C(mt,it[pt])&&C(mt,rt[pt])&&(mt.layout[ot[pt]]=I(H(mt,pt,t.layout[ot[pt]]-h(t,pt)-f(mt,pt)-$(mt,it[pt])-$(mt,rt[pt])),h(mt,pt)));var Vt=0;if(Et&&L(mt)?(Mt++,Nt+=mt.style.flex,null===_t&&(_t=mt),null!==Jt&&(Jt.nextFlexChild=mt),Jt=mt,Vt=h(mt,D)+f(mt,D)):(Rt=j,jt=j,kt?jt=k(t,O)?t.layout[ot[O]]-at:l-f(t,O)-at:Rt=k(t,M)?t.layout[ot[M]]-lt:r-f(t,M)-lt,0===zt&&R(mt,Rt,jt,s),W(mt)===tt&&(qt++,Vt=S(mt,D))),xt&&Et&&Ft+Vt>$t&&ht!==Ht){qt--,zt=1;break}Gt&&(W(mt)!==tt||L(mt))&&(Gt=!1,Ot=ht),Ut&&(W(mt)!==tt||Qt!==Y&&Qt!==Q||e(mt.layout[ot[F]]))&&(Ut=!1,Zt=ht),Gt&&(mt.layout[nt[D]]+=Kt,Et&&B(t,mt,D),Kt+=S(mt,D),Pt=I(Pt,H(mt,F,S(mt,F)))),Ut&&(mt.layout[nt[F]]+=Bt+wt,St&&B(t,mt,F)),zt=0,Ft+=Vt,It=ht+1}var Xt=0,Yt=0,te=0;if(te=Et?$t-Ft:I(Ft,0)-Ft,0!==Mt){var ee,ie,re=te/Nt;for(Jt=_t;null!==Jt;)ee=re*Jt.style.flex+h(Jt,D),ie=H(Jt,D,ee),ee!==ie&&(te-=ie,Nt-=Jt.style.flex),Jt=Jt.nextFlexChild;for(re=te/Nt,0>re&&(re=0),Jt=_t;null!==Jt;)Jt.layout[ot[D]]=H(Jt,D,re*Jt.style.flex+h(Jt,D)),Rt=j,k(t,M)?Rt=t.layout[ot[M]]-lt:kt||(Rt=r-f(t,M)-lt),jt=j,k(t,O)?jt=t.layout[ot[O]]-at:kt&&(jt=l-f(t,O)-at),R(Jt,Rt,jt,s),mt=Jt,Jt=Jt.nextFlexChild,mt.nextFlexChild=null}else gt!==Z&&(gt===_?Xt=te/2:gt===J?Xt=te:gt===K?(te=I(te,0),Yt=Mt+qt-1!==0?te/(Mt+qt-1):0):gt===P&&(Yt=te/(Mt+qt),Xt=Yt/2));for(Kt+=Xt,ht=Ot;It>ht;++ht)mt=t.children[ht],W(mt)===et&&C(mt,it[D])?mt.layout[nt[D]]=$(mt,it[D])+d(t,D)+n(mt,D):(mt.layout[nt[D]]+=Kt,Et&&B(t,mt,D),W(mt)===tt&&(Kt+=Yt+S(mt,D),Pt=I(Pt,H(mt,F,S(mt,F)))));var ne=t.layout[ot[F]];for(St||(ne=I(H(t,F,Pt+Lt),Lt)),ht=Zt;It>ht;++ht)if(mt=t.children[ht],W(mt)===et&&C(mt,it[F]))mt.layout[nt[F]]=$(mt,it[F])+d(t,F)+n(mt,F);else{var oe=wt;if(W(mt)===tt){var Qt=p(t,mt);if(Qt===Y)e(mt.layout[ot[F]])&&(mt.layout[ot[F]]=I(H(mt,F,ne-Lt-f(mt,F)),h(mt,F)));else if(Qt!==Q){var le=ne-Lt-S(mt,F);oe+=Qt===V?le/2:le}}mt.layout[nt[F]]+=Bt+oe,St&&B(t,mt,F)}Bt+=Pt,At=I(At,Kt),Dt+=1,Ht=It}if(Dt>1&&St){var ae=t.layout[ot[F]]-Lt,de=ae-Bt,se=0,ue=wt,ye=m(t);ye===X?ue+=de:ye===V?ue+=de/2:ye===Y&&ae>Bt&&(se=de/Dt);var ce=0;for(ht=0;Dt>ht;++ht){var fe=ce,he=0;for(vt=fe;N>vt;++vt)if(mt=t.children[vt],W(mt)===tt){if(mt.lineIndex!==ht)break;e(mt.layout[ot[F]])||(he=I(he,mt.layout[ot[F]]+f(mt,F)))}for(ce=vt,he+=se,vt=fe;ce>vt;++vt)if(mt=t.children[vt],W(mt)===tt){var ve=p(t,mt);if(ve===Q)mt.layout[nt[F]]=ue+n(mt,F);else if(ve===X)mt.layout[nt[F]]=ue+he-o(mt,F)-mt.layout[ot[F]];else if(ve===V){var me=mt.layout[ot[F]];mt.layout[nt[F]]=ue+(he-me)/2}else ve===Y&&(mt.layout[nt[F]]=ue+n(mt,F))}ue+=he}}var pe=!1,xe=!1;if(Et||(t.layout[ot[D]]=I(H(t,D,At+y(t,D)),Wt),D!==G&&D!==U||(pe=!0)),St||(t.layout[ot[F]]=I(H(t,F,Bt+Lt),Lt),F!==G&&F!==U||(xe=!0)),pe||xe)for(ht=0;N>ht;++ht)mt=t.children[ht],pe&&B(t,mt,D),xe&&B(t,mt,F);for(Tt=Ct;null!==Tt;){for(vt=0;2>vt;vt++)pt=0!==vt?q:O,!e(t.layout[ot[pt]])&&!k(Tt,pt)&&C(Tt,it[pt])&&C(Tt,rt[pt])&&(Tt.layout[ot[pt]]=I(H(Tt,pt,t.layout[ot[pt]]-c(t,pt)-f(Tt,pt)-$(Tt,it[pt])-$(Tt,rt[pt])),h(Tt,pt))),C(Tt,rt[pt])&&!C(Tt,it[pt])&&(Tt.layout[it[pt]]=t.layout[ot[pt]]-Tt.layout[ot[pt]]-$(Tt,rt[pt]));mt=Tt,Tt=Tt.nextAbsoluteChild,mt.nextAbsoluteChild=null}}function R(t,e,i,r){t.shouldUpdate=!0;var n=t.style.direction||M,o=!t.isDirty&&t.lastLayout&&t.lastLayout.requestedHeight===t.layout.height&&t.lastLayout.requestedWidth===t.layout.width&&t.lastLayout.parentMaxWidth===e&&t.lastLayout.parentMaxHeight===i&&t.lastLayout.direction===n;o?(t.layout.width=t.lastLayout.width,t.layout.height=t.lastLayout.height,t.layout.top=t.lastLayout.top,t.layout.left=t.lastLayout.left):(t.lastLayout||(t.lastLayout={}),t.lastLayout.requestedWidth=t.layout.width,t.lastLayout.requestedHeight=t.layout.height,t.lastLayout.parentMaxWidth=e,t.lastLayout.parentMaxHeight=i,t.lastLayout.direction=n,t.children.forEach(function(t){t.layout.width=void 0,t.layout.height=void 0,t.layout.top=0,t.layout.left=0}),D(t,e,i,r),t.lastLayout.width=t.layout.width,t.lastLayout.height=t.layout.height,t.lastLayout.top=t.layout.top,t.lastLayout.left=t.layout.left)}var j,F="inherit",M="ltr",N="rtl",q="row",G="row-reverse",O="column",U="column-reverse",Z="flex-start",_="center",J="flex-end",K="space-between",P="space-around",Q="flex-start",V="center",X="flex-end",Y="stretch",tt="relative",et="absolute",it={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},rt={row:"right","row-reverse":"left",column:"bottom","column-reverse":"top"},nt={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},ot={row:"width","row-reverse":"width",column:"height","column-reverse":"height"};return{layoutNodeImpl:D,computeLayout:R,fillNodes:t}}();return"object"==typeof exports&&(module.exports=t),function(e){t.fillNodes(e),t.computeLayout(e)}}),!window.addEventListener&&window.attachEvent&&function(){Window.prototype.addEventListener=HTMLDocument.prototype.addEventListener=Element.prototype.addEventListener=function(t,e){this.attachEvent("on"+t,e)},Window.prototype.removeEventListener=HTMLDocument.prototype.removeEventListener=Element.prototype.removeEventListener=function(t,e){this.detachEvent("on"+t,e)}}(),flexibility.detect=function(){var t=navigator.userAgent.indexOf("MSIE");if(t>-1){var e=parseInt(navigator.userAgent.slice(t+5));if(9>=e)return!1}var i=document.createElement("p");try{return i.style.display="flex","flex"===i.style.display}catch(r){return!1}},!flexibility.detect()&&t()<=9&&document.attachEvent("onreadystatechange",function(){flexibility.onresize({target:document.documentElement})}),flexibility.init=function(t){var e=t.onlayoutcomplete;return e||(e=t.onlayoutcomplete={node:t,style:{},children:[]}),e.style.display=t.currentStyle["-js-display"]||t.currentStyle.display,e};var e,i=1e3,r=15,n=document.documentElement,o=0,l=0;flexibility.onresize=function(t){if(n.clientWidth!==o||n.clientHeight!==l){o=n.clientWidth,l=n.clientHeight,clearTimeout(e),window.removeEventListener("resize",flexibility.onresize);var a=t.target&&1===t.target.nodeType?t.target:document.documentElement;flexibility.walk(a),e=setTimeout(function(){window.addEventListener("resize",flexibility.onresize)},i/r)}};var a={alignContent:{initial:"stretch",valid:/^(flex-start|flex-end|center|space-between|space-around|stretch)/},alignItems:{initial:"stretch",valid:/^(flex-start|flex-end|center|baseline|stretch)$/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)$/},flexDirection:{initial:"row",valid:/^(row|row-reverse|column|column-reverse)$/},flexWrap:{initial:"nowrap",valid:/^(nowrap|wrap|wrap-reverse)$/},justifyContent:{initial:"flex-start",valid:/^(flex-start|flex-end|center|space-between|space-around)$/}};flexibility.updateFlexContainerCache=function(t){var e=t.style,i=t.node.currentStyle,r=t.node.style,n={};(i["flex-flow"]||r["flex-flow"]||"").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)$/i,function(t,e,i){n.flexDirection=e,n.flexWrap=i});for(var o in a){var l=o.replace(/[A-Z]/g,"-$&").toLowerCase(),d=a[o],s=i[l]||r[l];e[o]=d.valid.test(s)?s:n[o]||d.initial}};var d={alignSelf:{initial:"auto",valid:/^(auto|flex-start|flex-end|center|baseline|stretch)$/},boxSizing:{initial:"content-box",valid:/^(border-box|content-box)$/},flexBasis:{initial:"auto",valid:/^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/},flexGrow:{initial:0,valid:/^\+?(0|[1-9][0-9]*)$/},flexShrink:{initial:0,valid:/^\+?(0|[1-9][0-9]*)$/},order:{initial:0,valid:/^([-+]?[0-9]+)$/}};flexibility.updateFlexItemCache=function(t){var e=t.style,i=t.node.currentStyle,r=t.node.style,n={};(i.flex||r.flex||"").replace(/^\+?(0|[1-9][0-9]*)/,function(t){n.flexGrow=t});for(var o in d){var l=o.replace(/[A-Z]/g,"-$&").toLowerCase(),a=d[o],s=i[l]||r[l];e[o]=a.valid.test(s)?s:n[o]||a.initial,"number"==typeof a.initial&&(e[o]=parseFloat(e[o]))}};var s="border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;",u={medium:4,none:0,thick:6,thin:2},y={borderBottomWidth:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,height:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:0,marginLeft:0,marginRight:0,marginTop:0,maxHeight:0,maxWidth:0,minHeight:0,minWidth:0,width:0},c=/^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/,f=100;flexibility.updateLengthCache=function(t){var e,i,r,n=t.node,o=t.style,l=n.parentNode,a=document.createElement("_"),d=a.runtimeStyle,h=n.currentStyle;d.cssText=s+"font-size:"+h.fontSize,l.insertBefore(a,n.nextSibling),o.fontSize=a.offsetWidth,d.fontSize=o.fontSize+"px";for(var v in y){var m=h[v];c.test(m)||"auto"===m&&!/(width|height)/i.test(v)?/%$/.test(m)?(/^(bottom|height|top)$/.test(v)?(i||(i=l.offsetHeight),r=i):(e||(e=l.offsetWidth),r=e),o[v]=parseFloat(m)*r/f):(d.width=m,o[v]=a.offsetWidth):/^border/.test(v)&&m in u?o[v]=u[m]:delete o[v]}l.removeChild(a),"none"===h.borderTopStyle&&(o.borderTopWidth=0),"none"===h.borderRightStyle&&(o.borderRightWidth=0),"none"===h.borderBottomStyle&&(o.borderBottomWidth=0),"none"===h.borderLeftStyle&&(o.borderLeftWidth=0),o.width||o.minWidth||(/flex/.test(o.display)?o.width=n.offsetWidth:o.minWidth=n.offsetWidth),o.height||o.minHeight||/flex/.test(o.display)||(o.minHeight=n.offsetHeight)},flexibility.walk=function(t){var e=flexibility.init(t),i=e.style,r=i.display;if("none"===r)return{};var n=r.match(/^(inline)?flex$/);if(n&&(flexibility.updateFlexContainerCache(e),t.runtimeStyle.cssText="display:"+(n[1]?"inline-block":"block"),e.children=[]),Array.prototype.forEach.call(t.childNodes,function(t,r){if(1===t.nodeType){var o=flexibility.walk(t),l=o.style;o.index=r,n&&o.node&&(flexibility.updateFlexItemCache(o),"auto"===l.alignSelf&&(l.alignSelf=i.alignItems),l.flex=l.flexGrow,t.runtimeStyle.cssText="display:inline-block",e.children.push(o))}}),n){e.children.forEach(function(t){flexibility.updateLengthCache(t)}),e.children.sort(function(t,e){return t.style.order-e.style.order||t.index-e.index}),/-reverse$/.test(i.flexDirection)&&(e.children.reverse(),i.flexDirection=i.flexDirection.replace(/-reverse$/,""),"flex-start"===i.justifyContent?i.justifyContent="flex-end":"flex-end"===i.justifyContent&&(i.justifyContent="flex-start")),flexibility.updateLengthCache(e),delete e.lastLayout,delete e.layout;var o=i.borderTopWidth,l=i.borderBottomWidth;i.borderTopWidth=0,i.borderBottomWidth=0,i.borderLeftWidth=0,"column"===i.flexDirection&&(i.width-=i.borderRightWidth),flexibility.computeLayout(e),t.runtimeStyle.cssText="box-sizing:border-box;display:block;position:relative;width:"+(e.layout.width+i.borderRightWidth)+"px;height:"+(e.layout.height+o+l)+"px";var a=[],d=1,s="column"===i.flexDirection?"width":"height";e.children.forEach(function(t){a[t.lineIndex]=Math.max(a[t.lineIndex]||0,t.layout[s]),d=Math.max(d,t.lineIndex+1)}),e.children.forEach(function(t){var e=t.layout;"stretch"===t.style.alignSelf&&(e[s]=a[t.lineIndex]),t.node.runtimeStyle.cssText="box-sizing:border-box;display:block;position:absolute;margin:0;width:"+e.width+"px;height:"+e.height+"px;top:"+e.top+"px;left:"+e.left+"px"})}return e}}();
import{t as e}from"./rolldown-runtime.DhnBybyj.mjs";import{C as t,E as n,F as r,L as i,M as a,N as o,O as s,T as c,b as l,c as u,g as d,j as f,k as p,l as m,o as h,s as g,v as ee,y as te}from"./react.DY_fZBnK.mjs";import{a as ne,r as re,t as ie,x as _}from"./motion.Y9so9qFk.mjs";import{$ as ae,G as oe,J as se,K as ce,N as v,O as y,Q as le,S as ue,U as de,Y as fe,Z as pe,_ as me,a as he,et as ge,g as _e,h as ve,n as ye,p as be,q as xe,r as b,s as Se,t as Ce,tt as we,u as Te,v as Ee,x as De}from"./framer.B32Rs0uK.mjs";function x(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function Oe(e){return z.call(er,e)?!0:z.call($n,e)?!1:Qn.test(e)?er[e]=!0:($n[e]=!0,!1)}function S(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}function ke(e){return e[1].toUpperCase()}function C(e){if(typeof e==`boolean`||typeof e==`number`)return``+e;e=``+e;var t=ir.exec(e);if(t){var n,r=``,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=t}e=i===n?r:r+e.substring(i,n)}return e}function w(e,t){return{insertionMode:e,selectedValue:t}}function Ae(e,t,n){switch(t){case`select`:return w(1,n.value==null?n.defaultValue:n.value);case`svg`:return w(2,null);case`math`:return w(3,null);case`foreignObject`:return w(1,null);case`table`:return w(4,null);case`thead`:case`tbody`:case`tfoot`:return w(5,null);case`colgroup`:return w(7,null);case`tr`:return w(6,null)}return 4<=e.insertionMode||e.insertionMode===0?w(1,null):e}function je(e,t,n){if(typeof n!=`object`)throw Error(x(62));for(var r in t=!0,n)if(z.call(n,r)){var i=n[r];if(i!=null&&typeof i!=`boolean`&&i!==``){if(r.indexOf(`--`)===0){var a=C(r);i=C((``+i).trim())}else{a=r;var o=cr.get(a);o!==void 0||(o=C(a.replace(ar,`-$1`).toLowerCase().replace(or,`-ms-`)),cr.set(a,o)),a=o,i=typeof i==`number`?i===0||z.call(nr,r)?``+i:i+`px`:C((``+i).trim())}t?(t=!1,e.push(` style="`,a,`:`,i)):e.push(`;`,a,`:`,i)}}t||e.push(`"`)}function T(e,t,n,r){switch(n){case`style`:je(e,t,r);return;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:return}if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`){if(t=B.hasOwnProperty(n)?B[n]:null,t!==null){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(!t.acceptsBooleans)return}switch(n=t.attributeName,t.type){case 3:r&&e.push(` `,n,`=""`);break;case 4:!0===r?e.push(` `,n,`=""`):!1!==r&&e.push(` `,n,`="`,C(r),`"`);break;case 5:isNaN(r)||e.push(` `,n,`="`,C(r),`"`);break;case 6:!isNaN(r)&&1<=r&&e.push(` `,n,`="`,C(r),`"`);break;default:t.sanitizeURL&&(r=``+r),e.push(` `,n,`="`,C(r),`"`)}}else if(Oe(n)){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(t=n.toLowerCase().slice(0,5),t!==`data-`&&t!==`aria-`)return}e.push(` `,n,`="`,C(r),`"`)}}}function Me(e,t,n){if(t!=null){if(n!=null)throw Error(x(60));if(typeof t!=`object`||!(`__html`in t))throw Error(x(61));t=t.__html,t!=null&&e.push(``+t)}}function Ne(e){var t=``;return Zn.Children.forEach(e,(function(e){e!=null&&(t+=e)})),t}function Pe(e,t,n,r){e.push(E(n));var i,a=n=null;for(i in t)if(z.call(t,i)){var o=t[i];if(o!=null)switch(i){case`children`:n=o;break;case`dangerouslySetInnerHTML`:a=o;break;default:T(e,r,i,o)}}return e.push(`>`),Me(e,a,n),typeof n==`string`?(e.push(C(n)),null):n}function E(e){var t=ur.get(e);if(t===void 0){if(!lr.test(e))throw Error(x(65,e));t=`<`+e,ur.set(e,t)}return t}function Fe(e,t,n,r,i){switch(t){case`select`:e.push(E(`select`));var a=null,o=null;for(u in n)if(z.call(n,u)){var s=n[u];if(s!=null)switch(u){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`defaultValue`:case`value`:break;default:T(e,r,u,s)}}return e.push(`>`),Me(e,o,a),a;case`option`:o=i.selectedValue,e.push(E(`option`));var c=s=null,l=null,u=null;for(a in n)if(z.call(n,a)){var d=n[a];if(d!=null)switch(a){case`children`:s=d;break;case`selected`:l=d;break;case`dangerouslySetInnerHTML`:u=d;break;case`value`:c=d;default:T(e,r,a,d)}}if(o!=null)if(n=c===null?Ne(s):``+c,sr(o)){for(r=0;r<o.length;r++)if(``+o[r]===n){e.push(` selected=""`);break}}else ``+o===n&&e.push(` selected=""`);else l&&e.push(` selected=""`);return e.push(`>`),Me(e,u,s),s;case`textarea`:for(s in e.push(E(`textarea`)),u=o=a=null,n)if(z.call(n,s)&&(c=n[s],c!=null))switch(s){case`children`:u=c;break;case`value`:a=c;break;case`defaultValue`:o=c;break;case`dangerouslySetInnerHTML`:throw Error(x(91));default:T(e,r,s,c)}if(a===null&&o!==null&&(a=o),e.push(`>`),u!=null){if(a!=null)throw Error(x(92));if(sr(u)&&1<u.length)throw Error(x(93));a=``+u}return typeof a==`string`&&a[0]===`
`&&e.push(`
`),a!==null&&e.push(C(``+a)),null;case`input`:for(o in e.push(E(`input`)),c=u=s=a=null,n)if(z.call(n,o)&&(l=n[o],l!=null))switch(o){case`children`:case`dangerouslySetInnerHTML`:throw Error(x(399,`input`));case`defaultChecked`:c=l;break;case`defaultValue`:s=l;break;case`checked`:u=l;break;case`value`:a=l;break;default:T(e,r,o,l)}return u===null?c!==null&&T(e,r,`checked`,c):T(e,r,`checked`,u),a===null?s!==null&&T(e,r,`value`,s):T(e,r,`value`,a),e.push(`/>`),null;case`menuitem`:for(var f in e.push(E(`menuitem`)),n)if(z.call(n,f)&&(a=n[f],a!=null))switch(f){case`children`:case`dangerouslySetInnerHTML`:throw Error(x(400));default:T(e,r,f,a)}return e.push(`>`),null;case`title`:for(d in e.push(E(`title`)),a=null,n)if(z.call(n,d)&&(o=n[d],o!=null))switch(d){case`children`:a=o;break;case`dangerouslySetInnerHTML`:throw Error(x(434));default:T(e,r,d,o)}return e.push(`>`),a;case`listing`:case`pre`:for(c in e.push(E(t)),o=a=null,n)if(z.call(n,c)&&(s=n[c],s!=null))switch(c){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;default:T(e,r,c,s)}if(e.push(`>`),o!=null){if(a!=null)throw Error(x(60));if(typeof o!=`object`||!(`__html`in o))throw Error(x(61));n=o.__html,n!=null&&(typeof n==`string`&&0<n.length&&n[0]===`
`?e.push(`
`,n):e.push(``+n))}return typeof a==`string`&&a[0]===`
`&&e.push(`
`),a;case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:for(var p in e.push(E(t)),n)if(z.call(n,p)&&(a=n[p],a!=null))switch(p){case`children`:case`dangerouslySetInnerHTML`:throw Error(x(399,t));default:T(e,r,p,a)}return e.push(`/>`),null;case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return Pe(e,n,t,r);case`html`:return i.insertionMode===0&&e.push(`<!DOCTYPE html>`),Pe(e,n,t,r);default:if(t.indexOf(`-`)===-1&&typeof n.is!=`string`)return Pe(e,n,t,r);for(l in e.push(E(t)),o=a=null,n)if(z.call(n,l)&&(s=n[l],s!=null))switch(l){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`style`:je(e,r,s);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:break;default:Oe(l)&&typeof s!=`function`&&typeof s!=`symbol`&&e.push(` `,l,`="`,C(s),`"`)}return e.push(`>`),Me(e,o,a),a}}function Ie(e,t,n){if(e.push(`<!--$?--><template id="`),n===null)throw Error(x(395));return e.push(n),e.push(`"></template>`)}function Le(e,t,n,r){switch(n.insertionMode){case 0:case 1:return e.push(`<div hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 2:return e.push(`<svg aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 3:return e.push(`<math aria-hidden="true" style="display:none" id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 4:return e.push(`<table hidden id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 5:return e.push(`<table hidden><tbody id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 6:return e.push(`<table hidden><tr id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);case 7:return e.push(`<table hidden><colgroup id="`),e.push(t.segmentPrefix),t=r.toString(16),e.push(t),e.push(`">`);default:throw Error(x(397))}}function Re(e,t){switch(t.insertionMode){case 0:case 1:return e.push(`</div>`);case 2:return e.push(`</svg>`);case 3:return e.push(`</math>`);case 4:return e.push(`</table>`);case 5:return e.push(`</tbody></table>`);case 6:return e.push(`</tr></table>`);case 7:return e.push(`</colgroup></table>`);default:throw Error(x(397))}}function ze(e){return JSON.stringify(e).replace(dr,(function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}))}function Be(e,t){return t=t===void 0?``:t,{bootstrapChunks:[],startInlineScript:`<script>`,placeholderPrefix:t+`P:`,segmentPrefix:t+`S:`,boundaryPrefix:t+`B:`,idPrefix:t,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1,generateStaticMarkup:e}}function Ve(e,t,n,r){return n.generateStaticMarkup?(e.push(C(t)),!1):(t===``?e=r:(r&&e.push(`<!-- -->`),e.push(C(t)),e=!0),e)}function He(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case hr:return`Fragment`;case mr:return`Portal`;case _r:return`Profiler`;case gr:return`StrictMode`;case xr:return`Suspense`;case Sr:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case yr:return(e.displayName||`Context`)+`.Consumer`;case vr:return(e._context.displayName||`Context`)+`.Provider`;case br:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Cr:return t=e.displayName||null,t===null?He(e.type)||`Memo`:t;case wr:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}function Ue(e,t){if(e=e.contextTypes,!e)return Ar;var n,r={};for(n in e)r[n]=t[n];return r}function We(e,t){if(e!==t){e.context._currentValue2=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(x(401))}else{if(n===null)throw Error(x(401));We(e,n)}t.context._currentValue2=t.value}}function Ge(e){e.context._currentValue2=e.parentValue,e=e.parent,e!==null&&Ge(e)}function Ke(e){var t=e.parent;t!==null&&Ke(t),e.context._currentValue2=e.value}function qe(e,t){if(e.context._currentValue2=e.parentValue,e=e.parent,e===null)throw Error(x(402));e.depth===t.depth?We(e,t):qe(e,t)}function Je(e,t){var n=t.parent;if(n===null)throw Error(x(402));e.depth===n.depth?We(e,n):Je(e,n),t.context._currentValue2=t.value}function Ye(e){var t=jr;t!==e&&(t===null?Ke(e):e===null?Ge(t):t.depth===e.depth?We(t,e):t.depth>e.depth?qe(t,e):Je(t,e),jr=e)}function Xe(e,t,n,r){var i=e.state===void 0?null:e.state;e.updater=Mr,e.props=n,e.state=i;var a={queue:[],replace:!1};e._reactInternals=a;var o=t.contextType;if(e.context=typeof o==`object`&&o?o._currentValue2:r,o=t.getDerivedStateFromProps,typeof o==`function`&&(o=o(n,i),i=o==null?i:fr({},i,o),e.state=i),typeof t.getDerivedStateFromProps!=`function`&&typeof e.getSnapshotBeforeUpdate!=`function`&&(typeof e.UNSAFE_componentWillMount==`function`||typeof e.componentWillMount==`function`))if(t=e.state,typeof e.componentWillMount==`function`&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount==`function`&&e.UNSAFE_componentWillMount(),t!==e.state&&Mr.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length)if(t=a.queue,o=a.replace,a.queue=null,a.replace=!1,o&&t.length===1)e.state=t[0];else{for(a=o?t[0]:e.state,i=!0,o=o?1:0;o<t.length;o++){var s=t[o];s=typeof s==`function`?s.call(e,a,n,r):s,s!=null&&(i?(i=!1,a=fr({},a,s)):fr(a,s))}e.state=a}else a.queue=null}function Ze(e,t,n){var r=e.id;e=e.overflow;var i=32-Pr(r)-1;r&=~(1<<i),n+=1;var a=32-Pr(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Pr(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}function Qe(e){return e>>>=0,e===0?32:31-(Fr(e)/Ir|0)|0}function $e(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function et(){if(V===null)throw Error(x(321));return V}function tt(){if(0<Ur)throw Error(x(312));return{memoizedState:null,queue:null,next:null}}function nt(){return H===null?zr===null?(Br=!1,zr=H=tt()):(Br=!0,H=zr):H.next===null?(Br=!1,H=H.next=tt()):(Br=!0,H=H.next),H}function rt(){Rr=V=null,Vr=!1,zr=null,Ur=0,H=U=null}function it(e,t){return typeof t==`function`?t(e):t}function at(e,t,n){if(V=et(),H=nt(),Br){var r=H.queue;if(t=r.dispatch,U!==null&&(n=U.get(r),n!==void 0)){U.delete(r),r=H.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return H.memoizedState=r,[r,t]}return[H.memoizedState,t]}return e=e===it?typeof t==`function`?t():t:n===void 0?t:n(t),H.memoizedState=e,e=H.queue={last:null,dispatch:null},e=e.dispatch=st.bind(null,V,e),[H.memoizedState,e]}function ot(e,t){if(V=et(),H=nt(),t=t===void 0?null:t,H!==null){var n=H.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!Lr(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),H.memoizedState=[e,t],e}function st(e,t,n){if(25<=Ur)throw Error(x(301));if(e===V)if(Vr=!0,e={action:n,next:null},U===null&&(U=new Map),n=U.get(t),n===void 0)U.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function ct(){throw Error(x(394))}function lt(){}function ut(e){return console.error(e),null}function dt(){}function ft(e,t,n,r,i,a,o,s,c){var l=[],u=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:l,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:i===void 0?ut:i,onAllReady:a===void 0?dt:a,onShellReady:o===void 0?dt:o,onShellError:s===void 0?dt:s,onFatalError:c===void 0?dt:c},n=mt(t,0,null,n,!1,!1),n.parentFlushed=!0,e=pt(t,e,null,n,u,Ar,null,Nr),l.push(e),t}function pt(e,t,n,r,i,a,o,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var t=e.pingedTasks;t.push(c),t.length===1&&Dt(e)},blockedBoundary:n,blockedSegment:r,abortSet:i,legacyContext:a,context:o,treeContext:s};return i.add(c),c}function mt(e,t,n,r,i,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function ht(e,t){if(e=e.onError(t),e!=null&&typeof e!=`string`)throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "`+typeof e+`" instead`);return e}function gt(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination===null?(e.status=1,e.fatalError=t):(e.status=2,e.destination.destroy(t))}function _t(e,t,n,r,i){for(V={},Rr=t,Hr=0,e=n(r,i);Vr;)Vr=!1,Hr=0,Ur+=1,H=null,e=n(r,i);return rt(),e}function vt(e,t,n,r){var i=n.render(),a=r.childContextTypes;if(a!=null){var o=t.legacyContext;if(typeof n.getChildContext!=`function`)r=o;else{for(var s in n=n.getChildContext(),n)if(!(s in a))throw Error(x(108,He(r)||`Unknown`,s));r=fr({},o,n)}t.legacyContext=r,D(e,t,i),t.legacyContext=o}else D(e,t,i)}function yt(e,t){if(e&&e.defaultProps){for(var n in t=fr({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bt(e,t,n,r,i){if(typeof n==`function`)if(n.prototype&&n.prototype.isReactComponent){i=Ue(n,t.legacyContext);var a=n.contextType;a=new n(r,typeof a==`object`&&a?a._currentValue2:i),Xe(a,n,r,i),vt(e,t,a,n)}else{a=Ue(n,t.legacyContext),i=_t(e,t,n,r,a);var o=Hr!==0;if(typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0)Xe(i,n,r,a),vt(e,t,i,n);else if(o){r=t.treeContext,t.treeContext=Ze(r,1,0);try{D(e,t,i)}finally{t.treeContext=r}}else D(e,t,i)}else{if(typeof n!=`string`){switch(n){case Dr:case Er:case gr:case _r:case hr:D(e,t,r.children);return;case Sr:D(e,t,r.children);return;case Tr:throw Error(x(343));case xr:e:{n=t.blockedBoundary,i=t.blockedSegment,a=r.fallback,r=r.children,o=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=mt(e,i.chunks.length,s,i.formatContext,!1,!1);i.children.push(c),i.lastPushedText=!1;var l=mt(e,0,null,i.formatContext,!1,!1);l.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=l;try{if(St(e,t,r),e.responseState.generateStaticMarkup||l.lastPushedText&&l.textEmbedded&&l.chunks.push(`<!-- -->`),l.status=1,Tt(s,l),s.pendingTasks===0)break e}catch(t){l.status=4,s.forceClientRender=!0,s.errorDigest=ht(e,t)}finally{t.blockedBoundary=n,t.blockedSegment=i}t=pt(e,a,n,c,o,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n==`object`&&n)switch(n.$$typeof){case br:if(r=_t(e,t,n.render,r,i),Hr!==0){n=t.treeContext,t.treeContext=Ze(n,1,0);try{D(e,t,r)}finally{t.treeContext=n}}else D(e,t,r);return;case Cr:n=n.type,r=yt(n,r),bt(e,t,n,r,i);return;case vr:if(i=r.children,n=n._context,r=r.value,a=n._currentValue2,n._currentValue2=r,o=jr,jr=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:a,value:r},t.context=r,D(e,t,i),e=jr,e===null)throw Error(x(403));r=e.parentValue,e.context._currentValue2=r===Or?e.context._defaultValue:r,e=jr=e.parent,t.context=e;return;case yr:r=r.children,r=r(n._currentValue2),D(e,t,r);return;case wr:i=n._init,n=i(n._payload),r=yt(n,r),bt(e,t,n,r,void 0);return}throw Error(x(130,n==null?n:typeof n,``))}switch(i=t.blockedSegment,a=Fe(i.chunks,n,r,e.responseState,i.formatContext),i.lastPushedText=!1,o=i.formatContext,i.formatContext=Ae(o,n,r),St(e,t,a),i.formatContext=o,n){case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break;default:i.chunks.push(`</`,n,`>`)}i.lastPushedText=!1}}function D(e,t,n){if(t.node=n,typeof n==`object`&&n){switch(n.$$typeof){case pr:bt(e,t,n.type,n.props,n.ref);return;case mr:throw Error(x(257));case wr:var r=n._init;n=r(n._payload),D(e,t,n);return}if(sr(n)){xt(e,t,n);return}if(typeof n!=`object`||!n?r=null:(r=kr&&n[kr]||n[`@@iterator`],r=typeof r==`function`?r:null),r&&=r.call(n)){if(n=r.next(),!n.done){var i=[];do i.push(n.value),n=r.next();while(!n.done);xt(e,t,i)}return}throw e=Object.prototype.toString.call(n),Error(x(31,e===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:e))}typeof n==`string`?(r=t.blockedSegment,r.lastPushedText=Ve(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n==`number`&&(r=t.blockedSegment,r.lastPushedText=Ve(t.blockedSegment.chunks,``+n,e.responseState,r.lastPushedText))}function xt(e,t,n){for(var r=n.length,i=0;i<r;i++){var a=t.treeContext;t.treeContext=Ze(a,r,i);try{St(e,t,n[i])}finally{t.treeContext=a}}}function St(e,t,n){var r=t.blockedSegment.formatContext,i=t.legacyContext,a=t.context;try{return D(e,t,n)}catch(c){if(rt(),typeof c!=`object`||!c||typeof c.then!=`function`)throw t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,Ye(a),c;n=c;var o=t.blockedSegment,s=mt(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(s),o.lastPushedText=!1,e=pt(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,Ye(a)}}function Ct(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Et(this,t,e)}function wt(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.push(null))):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(x(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach((function(e){return wt(e,t,n)})),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function Tt(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&Tt(e,n)}else e.completedSegments.push(t)}function Et(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(x(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=dt,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&Tt(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(Ct,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(Tt(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Dt(e){if(e.status!==2){var t=jr,n=Kr.current;Kr.current=Wr;var r=Gr;Gr=e.responseState;try{var i,a=e.pingedTasks;for(i=0;i<a.length;i++){var o=a[i],s=e,c=o.blockedSegment;if(c.status===0){Ye(o.context);try{D(s,o,o.node),s.responseState.generateStaticMarkup||c.lastPushedText&&c.textEmbedded&&c.chunks.push(`<!-- -->`),o.abortSet.delete(o),c.status=1,Et(s,o.blockedBoundary,c)}catch(e){if(rt(),typeof e==`object`&&e&&typeof e.then==`function`){var l=o.ping;e.then(l,l)}else{o.abortSet.delete(o),c.status=4;var u=o.blockedBoundary,d=e,f=ht(s,d);if(u===null?gt(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}}}a.splice(0,i),e.destination!==null&&Nt(e,e.destination)}catch(t){ht(e,t),gt(e,t)}finally{Gr=r,Kr.current=n,n===Wr&&Ye(t)}}}function Ot(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,t.push(`<template id="`),t.push(e.placeholderPrefix),e=r.toString(16),t.push(e),t.push(`"></template>`);case 1:n.status=2;var i=!0;r=n.chunks;var a=0;n=n.children;for(var o=0;o<n.length;o++){for(i=n[o];a<i.index;a++)t.push(r[a]);i=kt(e,t,i)}for(;a<r.length-1;a++)t.push(r[a]);return a<r.length&&(i=t.push(r[a])),i;default:throw Error(x(390))}}function kt(e,t,n){var r=n.boundary;if(r===null)return Ot(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)return e.responseState.generateStaticMarkup||(r=r.errorDigest,t.push(`<!--$!-->`),t.push(`<template`),r&&(t.push(` data-dgst="`),r=C(r),t.push(r),t.push(`"`)),t.push(`></template>`)),Ot(e,t,n),e=!!e.responseState.generateStaticMarkup||t.push(`<!--/$-->`),e;if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var i=e.responseState,a=i.nextSuspenseID++;return i=i.boundaryPrefix+a.toString(16),r=r.id=i,Ie(t,e.responseState,r),Ot(e,t,n),t.push(`<!--/$-->`)}if(r.byteSize>e.progressiveChunkSize)return r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Ie(t,e.responseState,r.id),Ot(e,t,n),t.push(`<!--/$-->`);if(e.responseState.generateStaticMarkup||t.push(`<!--$-->`),n=r.completedSegments,n.length!==1)throw Error(x(391));return kt(e,t,n[0]),e=!!e.responseState.generateStaticMarkup||t.push(`<!--/$-->`),e}function At(e,t,n){return Le(t,e.responseState,n.formatContext,n.id),kt(e,t,n),Re(t,n.formatContext)}function jt(e,t,n){for(var r=n.completedSegments,i=0;i<r.length;i++)Mt(e,t,n,r[i]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,t.push(e.startInlineScript),e.sentCompleteBoundaryFunction?t.push(`$RC("`):(e.sentCompleteBoundaryFunction=!0,t.push(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`)),r===null)throw Error(x(395));return n=n.toString(16),t.push(r),t.push(`","`),t.push(e.segmentPrefix),t.push(n),t.push(`")<\/script>`)}function Mt(e,t,n,r){if(r.status===2)return!0;var i=r.id;if(i===-1){if((r.id=n.rootSegmentID)===-1)throw Error(x(392));return At(e,t,r)}return At(e,t,r),e=e.responseState,t.push(e.startInlineScript),e.sentCompleteSegmentFunction?t.push(`$RS("`):(e.sentCompleteSegmentFunction=!0,t.push(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`)),t.push(e.segmentPrefix),i=i.toString(16),t.push(i),t.push(`","`),t.push(e.placeholderPrefix),t.push(i),t.push(`")<\/script>`)}function Nt(e,t){try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){kt(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)t.push(r[n]);n<r.length&&t.push(r[n])}var i,a=e.clientRenderedBoundaries;for(i=0;i<a.length;i++){var o=a[i];r=t;var s=e.responseState,c=o.id,l=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(r.push(s.startInlineScript),s.sentClientRenderFunction?r.push(`$RX("`):(s.sentClientRenderFunction=!0,r.push(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`)),c===null)throw Error(x(395));if(r.push(c),r.push(`"`),l||u||d){r.push(`,`);var f=ze(l||``);r.push(f)}if(u||d){r.push(`,`);var p=ze(u||``);r.push(p)}if(d){r.push(`,`);var m=ze(d);r.push(m)}if(!r.push(`)<\/script>`)){e.destination=null,i++,a.splice(0,i);return}}a.splice(0,i);var h=e.completedBoundaries;for(i=0;i<h.length;i++)if(!jt(e,t,h[i])){e.destination=null,i++,h.splice(0,i);return}h.splice(0,i);var g=e.partialBoundaries;for(i=0;i<g.length;i++){var ee=g[i];e:{a=e,o=t;var te=ee.completedSegments;for(s=0;s<te.length;s++)if(!Mt(a,o,ee,te[s])){s++,te.splice(0,s);var ne=!1;break e}te.splice(0,s),ne=!0}if(!ne){e.destination=null,i++,g.splice(0,i);return}}g.splice(0,i);var re=e.completedBoundaries;for(i=0;i<re.length;i++)if(!jt(e,t,re[i])){e.destination=null,i++,re.splice(0,i);return}re.splice(0,i)}finally{e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.push(null)}}function Pt(e,t){try{var n=e.abortableTasks;n.forEach((function(n){return wt(n,e,t)})),n.clear(),e.destination!==null&&Nt(e,e.destination)}catch(t){ht(e,t),gt(e,t)}}function Ft(){}function It(e,t,n,r){var i=!1,a=null,o=``,s={push:function(e){return e!==null&&(o+=e),!0},destroy:function(e){i=!0,a=e}},c=!1;if(e=ft(e,Be(n,t?t.identifierPrefix:void 0),{insertionMode:1,selectedValue:null},1/0,Ft,void 0,(function(){c=!0}),void 0,void 0),Dt(e),Pt(e,r),e.status===1)e.status=2,s.destroy(e.fatalError);else if(e.status!==2&&e.destination===null){e.destination=s;try{Nt(e,s)}catch(t){ht(e,t),gt(e,t)}}if(i)throw a;if(!c)throw Error(x(426));return o}function O(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function k(e,t){if(t.length!==0)if(512<t.length)0<G&&(e.enqueue(new Uint8Array(W.buffer,0,G)),W=new Uint8Array(512),G=0),e.enqueue(t);else{var n=W.length-G;n<t.length&&(n===0?e.enqueue(W):(W.set(t.subarray(0,n),G),e.enqueue(W),t=t.subarray(n)),W=new Uint8Array(512),G=0),W.set(t,G),G+=t.length}}function A(e,t){return k(e,t),!0}function Lt(e){W&&0<G&&(e.enqueue(new Uint8Array(W.buffer,0,G)),W=null,G=0)}function j(e){return Xr.encode(e)}function M(e){return Xr.encode(e)}function Rt(e,t){typeof e.error==`function`?e.error(t):e.close()}function zt(e){return K.call($r,e)?!0:K.call(Qr,e)?!1:Zr.test(e)?$r[e]=!0:(Qr[e]=!0,!1)}function N(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}function Bt(e){return e[1].toUpperCase()}function P(e){if(typeof e==`boolean`||typeof e==`number`)return``+e;e=``+e;var t=ri.exec(e);if(t){var n,r=``,i=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t=`&quot;`;break;case 38:t=`&amp;`;break;case 39:t=`&#x27;`;break;case 60:t=`&lt;`;break;case 62:t=`&gt;`;break;default:continue}i!==n&&(r+=e.substring(i,n)),i=n+1,r+=t}e=i===n?r:r+e.substring(i,n)}return e}function Vt(e,t,n,r){return t+(n===`s`?`\\u0073`:`\\u0053`)+r}function Ht(e,t,n,r,i){e=e===void 0?``:e,t=t===void 0?si:M(`<script nonce="`+P(t)+`">`);var a=[];if(n!==void 0&&a.push(t,j((``+n).replace(fi,Vt)),ci),r!==void 0)for(n=0;n<r.length;n++)a.push(li,j(P(r[n])),di);if(i!==void 0)for(r=0;r<i.length;r++)a.push(ui,j(P(i[r])),di);return{bootstrapChunks:a,startInlineScript:t,placeholderPrefix:M(e+`P:`),segmentPrefix:M(e+`S:`),boundaryPrefix:e+`B:`,idPrefix:e,nextSuspenseID:0,sentCompleteSegmentFunction:!1,sentCompleteBoundaryFunction:!1,sentClientRenderFunction:!1}}function F(e,t){return{insertionMode:e,selectedValue:t}}function Ut(e){return F(e===`http://www.w3.org/2000/svg`?2:e===`http://www.w3.org/1998/Math/MathML`?3:0,null)}function Wt(e,t,n){switch(t){case`select`:return F(1,n.value==null?n.defaultValue:n.value);case`svg`:return F(2,null);case`math`:return F(3,null);case`foreignObject`:return F(1,null);case`table`:return F(4,null);case`thead`:case`tbody`:case`tfoot`:return F(5,null);case`colgroup`:return F(7,null);case`tr`:return F(6,null)}return 4<=e.insertionMode||e.insertionMode===0?F(1,null):e}function Gt(e,t,n,r){return t===``?r:(r&&e.push(pi),e.push(j(P(t))),!0)}function Kt(e,t,n){if(typeof n!=`object`)throw Error(O(62));for(var r in t=!0,n)if(K.call(n,r)){var i=n[r];if(i!=null&&typeof i!=`boolean`&&i!==``){if(r.indexOf(`--`)===0){var a=j(P(r));i=j(P((``+i).trim()))}else{a=r;var o=mi.get(a);o!==void 0||(o=M(P(a.replace(ii,`-$1`).toLowerCase().replace(ai,`-ms-`))),mi.set(a,o)),a=o,i=typeof i==`number`?i===0||K.call(ti,r)?j(``+i):j(i+`px`):j(P((``+i).trim()))}t?(t=!1,e.push(hi,a,gi,i)):e.push(_i,a,gi,i)}}t||e.push(yi)}function I(e,t,n,r){switch(n){case`style`:Kt(e,t,r);return;case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:return}if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`){if(t=q.hasOwnProperty(n)?q[n]:null,t!==null){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(!t.acceptsBooleans)return}switch(n=j(t.attributeName),t.type){case 3:r&&e.push(J,n,bi);break;case 4:!0===r?e.push(J,n,bi):!1!==r&&e.push(J,n,vi,j(P(r)),yi);break;case 5:isNaN(r)||e.push(J,n,vi,j(P(r)),yi);break;case 6:!isNaN(r)&&1<=r&&e.push(J,n,vi,j(P(r)),yi);break;default:t.sanitizeURL&&(r=``+r),e.push(J,n,vi,j(P(r)),yi)}}else if(zt(n)){switch(typeof r){case`function`:case`symbol`:return;case`boolean`:if(t=n.toLowerCase().slice(0,5),t!==`data-`&&t!==`aria-`)return}e.push(J,j(n),vi,j(P(r)),yi)}}}function qt(e,t,n){if(t!=null){if(n!=null)throw Error(O(60));if(typeof t!=`object`||!(`__html`in t))throw Error(O(61));t=t.__html,t!=null&&e.push(j(``+t))}}function Jt(e){var t=``;return Yr.Children.forEach(e,(function(e){e!=null&&(t+=e)})),t}function Yt(e,t,n,r){e.push(L(n));var i,a=n=null;for(i in t)if(K.call(t,i)){var o=t[i];if(o!=null)switch(i){case`children`:n=o;break;case`dangerouslySetInnerHTML`:a=o;break;default:I(e,r,i,o)}}return e.push(Y),qt(e,a,n),typeof n==`string`?(e.push(j(P(n))),null):n}function L(e){var t=Ti.get(e);if(t===void 0){if(!wi.test(e))throw Error(O(65,e));t=M(`<`+e),Ti.set(e,t)}return t}function Xt(e,t,n,r,i){switch(t){case`select`:e.push(L(`select`));var a=null,o=null;for(u in n)if(K.call(n,u)){var s=n[u];if(s!=null)switch(u){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`defaultValue`:case`value`:break;default:I(e,r,u,s)}}return e.push(Y),qt(e,o,a),a;case`option`:o=i.selectedValue,e.push(L(`option`));var c=s=null,l=null,u=null;for(a in n)if(K.call(n,a)){var d=n[a];if(d!=null)switch(a){case`children`:s=d;break;case`selected`:l=d;break;case`dangerouslySetInnerHTML`:u=d;break;case`value`:c=d;default:I(e,r,a,d)}}if(o!=null)if(n=c===null?Jt(s):``+c,oi(o)){for(r=0;r<o.length;r++)if(``+o[r]===n){e.push(Si);break}}else ``+o===n&&e.push(Si);else l&&e.push(Si);return e.push(Y),qt(e,u,s),s;case`textarea`:for(s in e.push(L(`textarea`)),u=o=a=null,n)if(K.call(n,s)&&(c=n[s],c!=null))switch(s){case`children`:u=c;break;case`value`:a=c;break;case`defaultValue`:o=c;break;case`dangerouslySetInnerHTML`:throw Error(O(91));default:I(e,r,s,c)}if(a===null&&o!==null&&(a=o),e.push(Y),u!=null){if(a!=null)throw Error(O(92));if(oi(u)&&1<u.length)throw Error(O(93));a=``+u}return typeof a==`string`&&a[0]===`
`&&e.push(Ci),a!==null&&e.push(j(P(``+a))),null;case`input`:for(o in e.push(L(`input`)),c=u=s=a=null,n)if(K.call(n,o)&&(l=n[o],l!=null))switch(o){case`children`:case`dangerouslySetInnerHTML`:throw Error(O(399,`input`));case`defaultChecked`:c=l;break;case`defaultValue`:s=l;break;case`checked`:u=l;break;case`value`:a=l;break;default:I(e,r,o,l)}return u===null?c!==null&&I(e,r,`checked`,c):I(e,r,`checked`,u),a===null?s!==null&&I(e,r,`value`,s):I(e,r,`value`,a),e.push(xi),null;case`menuitem`:for(var f in e.push(L(`menuitem`)),n)if(K.call(n,f)&&(a=n[f],a!=null))switch(f){case`children`:case`dangerouslySetInnerHTML`:throw Error(O(400));default:I(e,r,f,a)}return e.push(Y),null;case`title`:for(d in e.push(L(`title`)),a=null,n)if(K.call(n,d)&&(o=n[d],o!=null))switch(d){case`children`:a=o;break;case`dangerouslySetInnerHTML`:throw Error(O(434));default:I(e,r,d,o)}return e.push(Y),a;case`listing`:case`pre`:for(c in e.push(L(t)),o=a=null,n)if(K.call(n,c)&&(s=n[c],s!=null))switch(c){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;default:I(e,r,c,s)}if(e.push(Y),o!=null){if(a!=null)throw Error(O(60));if(typeof o!=`object`||!(`__html`in o))throw Error(O(61));n=o.__html,n!=null&&(typeof n==`string`&&0<n.length&&n[0]===`
`?e.push(Ci,j(n)):e.push(j(``+n)))}return typeof a==`string`&&a[0]===`
`&&e.push(Ci),a;case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:for(var p in e.push(L(t)),n)if(K.call(n,p)&&(a=n[p],a!=null))switch(p){case`children`:case`dangerouslySetInnerHTML`:throw Error(O(399,t));default:I(e,r,p,a)}return e.push(xi),null;case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return Yt(e,n,t,r);case`html`:return i.insertionMode===0&&e.push(Ei),Yt(e,n,t,r);default:if(t.indexOf(`-`)===-1&&typeof n.is!=`string`)return Yt(e,n,t,r);for(l in e.push(L(t)),o=a=null,n)if(K.call(n,l)&&(s=n[l],s!=null))switch(l){case`children`:a=s;break;case`dangerouslySetInnerHTML`:o=s;break;case`style`:Kt(e,r,s);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:break;default:zt(l)&&typeof s!=`function`&&typeof s!=`symbol`&&e.push(J,j(l),vi,j(P(s)),yi)}return e.push(Y),qt(e,o,a),a}}function Zt(e,t,n){if(k(e,Mi),n===null)throw Error(O(395));return k(e,n),A(e,Ni)}function Qt(e,t,n,r){switch(n.insertionMode){case 0:case 1:return k(e,Bi),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,Vi);case 2:return k(e,Ui),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,Wi);case 3:return k(e,Ki),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,qi);case 4:return k(e,Yi),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,Xi);case 5:return k(e,Qi),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,$i);case 6:return k(e,ta),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,na);case 7:return k(e,ia),k(e,t.segmentPrefix),k(e,j(r.toString(16))),A(e,aa);default:throw Error(O(397))}}function $t(e,t){switch(t.insertionMode){case 0:case 1:return A(e,Hi);case 2:return A(e,Gi);case 3:return A(e,Ji);case 4:return A(e,Zi);case 5:return A(e,ea);case 6:return A(e,ra);case 7:return A(e,oa);default:throw Error(O(397))}}function en(e){return JSON.stringify(e).replace(ba,(function(e){switch(e){case`<`:return`\\u003c`;case`\u2028`:return`\\u2028`;case`\u2029`:return`\\u2029`;default:throw Error(`escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`)}}))}function tn(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case wa:return`Fragment`;case Ca:return`Portal`;case Ea:return`Profiler`;case Ta:return`StrictMode`;case Aa:return`Suspense`;case ja:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case Oa:return(e.displayName||`Context`)+`.Consumer`;case Da:return(e._context.displayName||`Context`)+`.Provider`;case ka:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Ma:return t=e.displayName||null,t===null?tn(e.type)||`Memo`:t;case Na:t=e._payload,e=e._init;try{return tn(e(t))}catch{}}return null}function nn(e,t){if(e=e.contextTypes,!e)return za;var n,r={};for(n in e)r[n]=t[n];return r}function rn(e,t){if(e!==t){e.context._currentValue=e.parentValue,e=e.parent;var n=t.parent;if(e===null){if(n!==null)throw Error(O(401))}else{if(n===null)throw Error(O(401));rn(e,n)}t.context._currentValue=t.value}}function an(e){e.context._currentValue=e.parentValue,e=e.parent,e!==null&&an(e)}function on(e){var t=e.parent;t!==null&&on(t),e.context._currentValue=e.value}function sn(e,t){if(e.context._currentValue=e.parentValue,e=e.parent,e===null)throw Error(O(402));e.depth===t.depth?rn(e,t):sn(e,t)}function cn(e,t){var n=t.parent;if(n===null)throw Error(O(402));e.depth===n.depth?rn(e,n):cn(e,n),t.context._currentValue=t.value}function ln(e){var t=Ba;t!==e&&(t===null?on(e):e===null?an(t):t.depth===e.depth?rn(t,e):t.depth>e.depth?sn(t,e):cn(t,e),Ba=e)}function un(e,t,n,r){var i=e.state===void 0?null:e.state;e.updater=Va,e.props=n,e.state=i;var a={queue:[],replace:!1};e._reactInternals=a;var o=t.contextType;if(e.context=typeof o==`object`&&o?o._currentValue:r,o=t.getDerivedStateFromProps,typeof o==`function`&&(o=o(n,i),i=o==null?i:xa({},i,o),e.state=i),typeof t.getDerivedStateFromProps!=`function`&&typeof e.getSnapshotBeforeUpdate!=`function`&&(typeof e.UNSAFE_componentWillMount==`function`||typeof e.componentWillMount==`function`))if(t=e.state,typeof e.componentWillMount==`function`&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount==`function`&&e.UNSAFE_componentWillMount(),t!==e.state&&Va.enqueueReplaceState(e,e.state,null),a.queue!==null&&0<a.queue.length)if(t=a.queue,o=a.replace,a.queue=null,a.replace=!1,o&&t.length===1)e.state=t[0];else{for(a=o?t[0]:e.state,i=!0,o=o?1:0;o<t.length;o++){var s=t[o];s=typeof s==`function`?s.call(e,a,n,r):s,s!=null&&(i?(i=!1,a=xa({},a,s)):xa(a,s))}e.state=a}else a.queue=null}function dn(e,t,n){var r=e.id;e=e.overflow;var i=32-Ua(r)-1;r&=~(1<<i),n+=1;var a=32-Ua(t)+i;if(30<a){var o=i-i%5;return a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,{id:1<<32-Ua(t)+i|n<<i|r,overflow:a+e}}return{id:1<<a|n<<i|r,overflow:e}}function fn(e){return e>>>=0,e===0?32:31-(Wa(e)/Ga|0)|0}function pn(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function mn(){if(X===null)throw Error(O(321));return X}function hn(){if(0<Qa)throw Error(O(312));return{memoizedState:null,queue:null,next:null}}function gn(){return Z===null?Ja===null?(Ya=!1,Ja=Z=hn()):(Ya=!0,Z=Ja):Z.next===null?(Ya=!1,Z=Z.next=hn()):(Ya=!0,Z=Z.next),Z}function _n(){qa=X=null,Xa=!1,Ja=null,Qa=0,Z=Q=null}function vn(e,t){return typeof t==`function`?t(e):t}function yn(e,t,n){if(X=mn(),Z=gn(),Ya){var r=Z.queue;if(t=r.dispatch,Q!==null&&(n=Q.get(r),n!==void 0)){Q.delete(r),r=Z.memoizedState;do r=e(r,n.action),n=n.next;while(n!==null);return Z.memoizedState=r,[r,t]}return[Z.memoizedState,t]}return e=e===vn?typeof t==`function`?t():t:n===void 0?t:n(t),Z.memoizedState=e,e=Z.queue={last:null,dispatch:null},e=e.dispatch=xn.bind(null,X,e),[Z.memoizedState,e]}function bn(e,t){if(X=mn(),Z=gn(),t=t===void 0?null:t,Z!==null){var n=Z.memoizedState;if(n!==null&&t!==null){var r=n[1];e:if(r===null)r=!1;else{for(var i=0;i<r.length&&i<t.length;i++)if(!Ka(t[i],r[i])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),Z.memoizedState=[e,t],e}function xn(e,t,n){if(25<=Qa)throw Error(O(301));if(e===X)if(Xa=!0,e={action:n,next:null},Q===null&&(Q=new Map),n=Q.get(t),n===void 0)Q.set(t,e);else{for(t=n;t.next!==null;)t=t.next;t.next=e}}function Sn(){throw Error(O(394))}function Cn(){}function wn(e){return console.error(e),null}function Tn(){}function En(e,t,n,r,i,a,o,s,c){var l=[],u=new Set;return t={destination:null,responseState:t,progressiveChunkSize:r===void 0?12800:r,status:0,fatalError:null,nextSegmentId:0,allPendingTasks:0,pendingRootTasks:0,completedRootSegment:null,abortableTasks:u,pingedTasks:l,clientRenderedBoundaries:[],completedBoundaries:[],partialBoundaries:[],onError:i===void 0?wn:i,onAllReady:a===void 0?Tn:a,onShellReady:o===void 0?Tn:o,onShellError:s===void 0?Tn:s,onFatalError:c===void 0?Tn:c},n=On(t,0,null,n,!1,!1),n.parentFlushed=!0,e=Dn(t,e,null,n,u,za,null,Ha),l.push(e),t}function Dn(e,t,n,r,i,a,o,s){e.allPendingTasks++,n===null?e.pendingRootTasks++:n.pendingTasks++;var c={node:t,ping:function(){var t=e.pingedTasks;t.push(c),t.length===1&&Vn(e)},blockedBoundary:n,blockedSegment:r,abortSet:i,legacyContext:a,context:o,treeContext:s};return i.add(c),c}function On(e,t,n,r,i,a){return{status:0,id:-1,index:t,parentFlushed:!1,chunks:[],children:[],formatContext:r,boundary:n,lastPushedText:i,textEmbedded:a}}function kn(e,t){if(e=e.onError(t),e!=null&&typeof e!=`string`)throw Error(`onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "`+typeof e+`" instead`);return e}function An(e,t){var n=e.onShellError;n(t),n=e.onFatalError,n(t),e.destination===null?(e.status=1,e.fatalError=t):(e.status=2,Rt(e.destination,t))}function jn(e,t,n,r,i){for(X={},qa=t,Za=0,e=n(r,i);Xa;)Xa=!1,Za=0,Qa+=1,Z=null,e=n(r,i);return _n(),e}function Mn(e,t,n,r){var i=n.render(),a=r.childContextTypes;if(a!=null){var o=t.legacyContext;if(typeof n.getChildContext!=`function`)r=o;else{for(var s in n=n.getChildContext(),n)if(!(s in a))throw Error(O(108,tn(r)||`Unknown`,s));r=xa({},o,n)}t.legacyContext=r,R(e,t,i),t.legacyContext=o}else R(e,t,i)}function Nn(e,t){if(e&&e.defaultProps){for(var n in t=xa({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Pn(e,t,n,r,i){if(typeof n==`function`)if(n.prototype&&n.prototype.isReactComponent){i=nn(n,t.legacyContext);var a=n.contextType;a=new n(r,typeof a==`object`&&a?a._currentValue:i),un(a,n,r,i),Mn(e,t,a,n)}else{a=nn(n,t.legacyContext),i=jn(e,t,n,r,a);var o=Za!==0;if(typeof i==`object`&&i&&typeof i.render==`function`&&i.$$typeof===void 0)un(i,n,r,a),Mn(e,t,i,n);else if(o){r=t.treeContext,t.treeContext=dn(r,1,0);try{R(e,t,i)}finally{t.treeContext=r}}else R(e,t,i)}else{if(typeof n!=`string`){switch(n){case Ia:case Fa:case Ta:case Ea:case wa:R(e,t,r.children);return;case ja:R(e,t,r.children);return;case Pa:throw Error(O(343));case Aa:e:{n=t.blockedBoundary,i=t.blockedSegment,a=r.fallback,r=r.children,o=new Set;var s={id:null,rootSegmentID:-1,parentFlushed:!1,pendingTasks:0,forceClientRender:!1,completedSegments:[],byteSize:0,fallbackAbortableTasks:o,errorDigest:null},c=On(e,i.chunks.length,s,i.formatContext,!1,!1);i.children.push(c),i.lastPushedText=!1;var l=On(e,0,null,i.formatContext,!1,!1);l.parentFlushed=!0,t.blockedBoundary=s,t.blockedSegment=l;try{if(In(e,t,r),l.lastPushedText&&l.textEmbedded&&l.chunks.push(pi),l.status=1,zn(s,l),s.pendingTasks===0)break e}catch(t){l.status=4,s.forceClientRender=!0,s.errorDigest=kn(e,t)}finally{t.blockedBoundary=n,t.blockedSegment=i}t=Dn(e,a,n,c,o,t.legacyContext,t.context,t.treeContext),e.pingedTasks.push(t)}return}if(typeof n==`object`&&n)switch(n.$$typeof){case ka:if(r=jn(e,t,n.render,r,i),Za!==0){n=t.treeContext,t.treeContext=dn(n,1,0);try{R(e,t,r)}finally{t.treeContext=n}}else R(e,t,r);return;case Ma:n=n.type,r=Nn(n,r),Pn(e,t,n,r,i);return;case Da:if(i=r.children,n=n._context,r=r.value,a=n._currentValue,n._currentValue=r,o=Ba,Ba=r={parent:o,depth:o===null?0:o.depth+1,context:n,parentValue:a,value:r},t.context=r,R(e,t,i),e=Ba,e===null)throw Error(O(403));r=e.parentValue,e.context._currentValue=r===La?e.context._defaultValue:r,e=Ba=e.parent,t.context=e;return;case Oa:r=r.children,r=r(n._currentValue),R(e,t,r);return;case Na:i=n._init,n=i(n._payload),r=Nn(n,r),Pn(e,t,n,r,void 0);return}throw Error(O(130,n==null?n:typeof n,``))}switch(i=t.blockedSegment,a=Xt(i.chunks,n,r,e.responseState,i.formatContext),i.lastPushedText=!1,o=i.formatContext,i.formatContext=Wt(o,n,r),In(e,t,a),i.formatContext=o,n){case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`img`:case`input`:case`keygen`:case`link`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:break;default:i.chunks.push(Di,j(n),Oi)}i.lastPushedText=!1}}function R(e,t,n){if(t.node=n,typeof n==`object`&&n){switch(n.$$typeof){case Sa:Pn(e,t,n.type,n.props,n.ref);return;case Ca:throw Error(O(257));case Na:var r=n._init;n=r(n._payload),R(e,t,n);return}if(oi(n)){Fn(e,t,n);return}if(typeof n!=`object`||!n?r=null:(r=Ra&&n[Ra]||n[`@@iterator`],r=typeof r==`function`?r:null),r&&=r.call(n)){if(n=r.next(),!n.done){var i=[];do i.push(n.value),n=r.next();while(!n.done);Fn(e,t,i)}return}throw e=Object.prototype.toString.call(n),Error(O(31,e===`[object Object]`?`object with keys {`+Object.keys(n).join(`, `)+`}`:e))}typeof n==`string`?(r=t.blockedSegment,r.lastPushedText=Gt(t.blockedSegment.chunks,n,e.responseState,r.lastPushedText)):typeof n==`number`&&(r=t.blockedSegment,r.lastPushedText=Gt(t.blockedSegment.chunks,``+n,e.responseState,r.lastPushedText))}function Fn(e,t,n){for(var r=n.length,i=0;i<r;i++){var a=t.treeContext;t.treeContext=dn(a,r,i);try{In(e,t,n[i])}finally{t.treeContext=a}}}function In(e,t,n){var r=t.blockedSegment.formatContext,i=t.legacyContext,a=t.context;try{return R(e,t,n)}catch(c){if(_n(),typeof c!=`object`||!c||typeof c.then!=`function`)throw t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,ln(a),c;n=c;var o=t.blockedSegment,s=On(e,o.chunks.length,null,o.formatContext,o.lastPushedText,!0);o.children.push(s),o.lastPushedText=!1,e=Dn(e,t.node,t.blockedBoundary,s,t.abortSet,t.legacyContext,t.context,t.treeContext).ping,n.then(e,e),t.blockedSegment.formatContext=r,t.legacyContext=i,t.context=a,ln(a)}}function Ln(e){var t=e.blockedBoundary;e=e.blockedSegment,e.status=3,Bn(this,t,e)}function Rn(e,t,n){var r=e.blockedBoundary;e.blockedSegment.status=3,r===null?(t.allPendingTasks--,t.status!==2&&(t.status=2,t.destination!==null&&t.destination.close())):(r.pendingTasks--,r.forceClientRender||(r.forceClientRender=!0,e=n===void 0?Error(O(432)):n,r.errorDigest=t.onError(e),r.parentFlushed&&t.clientRenderedBoundaries.push(r)),r.fallbackAbortableTasks.forEach((function(e){return Rn(e,t,n)})),r.fallbackAbortableTasks.clear(),t.allPendingTasks--,t.allPendingTasks===0&&(r=t.onAllReady,r()))}function zn(e,t){if(t.chunks.length===0&&t.children.length===1&&t.children[0].boundary===null){var n=t.children[0];n.id=t.id,n.parentFlushed=!0,n.status===1&&zn(e,n)}else e.completedSegments.push(t)}function Bn(e,t,n){if(t===null){if(n.parentFlushed){if(e.completedRootSegment!==null)throw Error(O(389));e.completedRootSegment=n}e.pendingRootTasks--,e.pendingRootTasks===0&&(e.onShellError=Tn,t=e.onShellReady,t())}else t.pendingTasks--,t.forceClientRender||(t.pendingTasks===0?(n.parentFlushed&&n.status===1&&zn(t,n),t.parentFlushed&&e.completedBoundaries.push(t),t.fallbackAbortableTasks.forEach(Ln,e),t.fallbackAbortableTasks.clear()):n.parentFlushed&&n.status===1&&(zn(t,n),t.completedSegments.length===1&&t.parentFlushed&&e.partialBoundaries.push(t)));e.allPendingTasks--,e.allPendingTasks===0&&(e=e.onAllReady,e())}function Vn(e){if(e.status!==2){var t=Ba,n=to.current;to.current=$a;var r=eo;eo=e.responseState;try{var i,a=e.pingedTasks;for(i=0;i<a.length;i++){var o=a[i],s=e,c=o.blockedSegment;if(c.status===0){ln(o.context);try{R(s,o,o.node),c.lastPushedText&&c.textEmbedded&&c.chunks.push(pi),o.abortSet.delete(o),c.status=1,Bn(s,o.blockedBoundary,c)}catch(e){if(_n(),typeof e==`object`&&e&&typeof e.then==`function`){var l=o.ping;e.then(l,l)}else{o.abortSet.delete(o),c.status=4;var u=o.blockedBoundary,d=e,f=kn(s,d);if(u===null?An(s,d):(u.pendingTasks--,u.forceClientRender||(u.forceClientRender=!0,u.errorDigest=f,u.parentFlushed&&s.clientRenderedBoundaries.push(u))),s.allPendingTasks--,s.allPendingTasks===0){var p=s.onAllReady;p()}}}}}a.splice(0,i),e.destination!==null&&qn(e,e.destination)}catch(t){kn(e,t),An(e,t)}finally{eo=r,to.current=n,n===$a&&ln(t)}}}function Hn(e,t,n){switch(n.parentFlushed=!0,n.status){case 0:var r=n.id=e.nextSegmentId++;return n.lastPushedText=!1,n.textEmbedded=!1,e=e.responseState,k(t,ki),k(t,e.placeholderPrefix),e=j(r.toString(16)),k(t,e),A(t,Ai);case 1:n.status=2;var i=!0;r=n.chunks;var a=0;n=n.children;for(var o=0;o<n.length;o++){for(i=n[o];a<i.index;a++)k(t,r[a]);i=Un(e,t,i)}for(;a<r.length-1;a++)k(t,r[a]);return a<r.length&&(i=A(t,r[a])),i;default:throw Error(O(390))}}function Un(e,t,n){var r=n.boundary;if(r===null)return Hn(e,t,n);if(r.parentFlushed=!0,r.forceClientRender)r=r.errorDigest,A(t,Pi),k(t,Ii),r&&(k(t,Ri),k(t,j(P(r))),k(t,Li)),A(t,zi),Hn(e,t,n);else if(0<r.pendingTasks){r.rootSegmentID=e.nextSegmentId++,0<r.completedSegments.length&&e.partialBoundaries.push(r);var i=e.responseState,a=i.nextSuspenseID++;i=M(i.boundaryPrefix+a.toString(16)),r=r.id=i,Zt(t,e.responseState,r),Hn(e,t,n)}else if(r.byteSize>e.progressiveChunkSize)r.rootSegmentID=e.nextSegmentId++,e.completedBoundaries.push(r),Zt(t,e.responseState,r.id),Hn(e,t,n);else{if(A(t,ji),n=r.completedSegments,n.length!==1)throw Error(O(391));Un(e,t,n[0])}return A(t,Fi)}function Wn(e,t,n){return Qt(t,e.responseState,n.formatContext,n.id),Un(e,t,n),$t(t,n.formatContext)}function Gn(e,t,n){for(var r=n.completedSegments,i=0;i<r.length;i++)Kn(e,t,n,r[i]);if(r.length=0,e=e.responseState,r=n.id,n=n.rootSegmentID,k(t,e.startInlineScript),e.sentCompleteBoundaryFunction?k(t,fa):(e.sentCompleteBoundaryFunction=!0,k(t,da)),r===null)throw Error(O(395));return n=j(n.toString(16)),k(t,r),k(t,pa),k(t,e.segmentPrefix),k(t,n),A(t,ma)}function Kn(e,t,n,r){if(r.status===2)return!0;var i=r.id;if(i===-1){if((r.id=n.rootSegmentID)===-1)throw Error(O(392));return Wn(e,t,r)}return Wn(e,t,r),e=e.responseState,k(t,e.startInlineScript),e.sentCompleteSegmentFunction?k(t,ca):(e.sentCompleteSegmentFunction=!0,k(t,sa)),k(t,e.segmentPrefix),i=j(i.toString(16)),k(t,i),k(t,la),k(t,e.placeholderPrefix),k(t,i),A(t,ua)}function qn(e,t){W=new Uint8Array(512),G=0;try{var n=e.completedRootSegment;if(n!==null&&e.pendingRootTasks===0){Un(e,t,n),e.completedRootSegment=null;var r=e.responseState.bootstrapChunks;for(n=0;n<r.length-1;n++)k(t,r[n]);n<r.length&&A(t,r[n])}var i,a=e.clientRenderedBoundaries;for(i=0;i<a.length;i++){var o=a[i];r=t;var s=e.responseState,c=o.id,l=o.errorDigest,u=o.errorMessage,d=o.errorComponentStack;if(k(r,s.startInlineScript),s.sentClientRenderFunction?k(r,ga):(s.sentClientRenderFunction=!0,k(r,ha)),c===null)throw Error(O(395));if(k(r,c),k(r,_a),(l||u||d)&&(k(r,ya),k(r,j(en(l||``)))),(u||d)&&(k(r,ya),k(r,j(en(u||``)))),d&&(k(r,ya),k(r,j(en(d)))),!A(r,va)){e.destination=null,i++,a.splice(0,i);return}}a.splice(0,i);var f=e.completedBoundaries;for(i=0;i<f.length;i++)if(!Gn(e,t,f[i])){e.destination=null,i++,f.splice(0,i);return}f.splice(0,i),Lt(t),W=new Uint8Array(512),G=0;var p=e.partialBoundaries;for(i=0;i<p.length;i++){var m=p[i];e:{a=e,o=t;var h=m.completedSegments;for(s=0;s<h.length;s++)if(!Kn(a,o,m,h[s])){s++,h.splice(0,s);var g=!1;break e}h.splice(0,s),g=!0}if(!g){e.destination=null,i++,p.splice(0,i);return}}p.splice(0,i);var ee=e.completedBoundaries;for(i=0;i<ee.length;i++)if(!Gn(e,t,ee[i])){e.destination=null,i++,ee.splice(0,i);return}ee.splice(0,i)}finally{Lt(t),e.allPendingTasks===0&&e.pingedTasks.length===0&&e.clientRenderedBoundaries.length===0&&e.completedBoundaries.length===0&&t.close()}}function Jn(e,t){try{var n=e.abortableTasks;n.forEach((function(n){return Rn(n,e,t)})),n.clear(),e.destination!==null&&qn(e,e.destination)}catch(t){kn(e,t),An(e,t)}}var Yn,Xn,Zn,z,Qn,$n,er,B,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,V,Rr,zr,H,Br,Vr,Hr,U,Ur,Wr,Gr,Kr,qr,Jr,Yr,W,G,Xr,K,Zr,Qr,$r,q,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,J,vi,yi,bi,Y,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,X,qa,Ja,Z,Ya,Xa,Za,Q,Qa,$a,eo,to,$,no,ro,io,ao=e((()=>{t(),Yn=`default`in c?l:c,Xn={},Zn=Yn,z=Object.prototype.hasOwnProperty,Qn=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$n={},er={},B={},`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function(e){B[e]=new S(e,0,!1,e,null,!1,!1)})),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach((function(e){var t=e[0];B[t]=new S(t,1,!1,e[1],null,!1,!1)})),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach((function(e){B[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)})),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach((function(e){B[e]=new S(e,2,!1,e,null,!1,!1)})),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function(e){B[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)})),[`checked`,`multiple`,`muted`,`selected`].forEach((function(e){B[e]=new S(e,3,!0,e,null,!1,!1)})),[`capture`,`download`].forEach((function(e){B[e]=new S(e,4,!1,e,null,!1,!1)})),[`cols`,`rows`,`size`,`span`].forEach((function(e){B[e]=new S(e,6,!1,e,null,!1,!1)})),[`rowSpan`,`start`].forEach((function(e){B[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)})),tr=/[\-:]([a-z])/g,`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function(e){var t=e.replace(tr,ke);B[t]=new S(t,1,!1,e,null,!1,!1)})),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function(e){var t=e.replace(tr,ke);B[t]=new S(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)})),[`xml:base`,`xml:lang`,`xml:space`].forEach((function(e){var t=e.replace(tr,ke);B[t]=new S(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)})),[`tabIndex`,`crossOrigin`].forEach((function(e){B[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)})),B.xlinkHref=new S(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach((function(e){B[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)})),nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rr=[`Webkit`,`ms`,`Moz`,`O`],Object.keys(nr).forEach((function(e){rr.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]}))})),ir=/["'&<>]/,ar=/([A-Z])/g,or=/^ms-/,sr=Array.isArray,cr=new Map,lr=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ur=new Map,dr=/[<\u2028\u2029]/g,fr=Object.assign,pr=Symbol.for(`react.element`),mr=Symbol.for(`react.portal`),hr=Symbol.for(`react.fragment`),gr=Symbol.for(`react.strict_mode`),_r=Symbol.for(`react.profiler`),vr=Symbol.for(`react.provider`),yr=Symbol.for(`react.context`),br=Symbol.for(`react.forward_ref`),xr=Symbol.for(`react.suspense`),Sr=Symbol.for(`react.suspense_list`),Cr=Symbol.for(`react.memo`),wr=Symbol.for(`react.lazy`),Tr=Symbol.for(`react.scope`),Er=Symbol.for(`react.debug_trace_mode`),Dr=Symbol.for(`react.legacy_hidden`),Or=Symbol.for(`react.default_value`),kr=Symbol.iterator,Ar={},jr=null,Mr={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Nr={id:1,overflow:``},Pr=Math.clz32?Math.clz32:Qe,Fr=Math.log,Ir=Math.LN2,Lr=typeof Object.is==`function`?Object.is:$e,V=null,Rr=null,zr=null,H=null,Br=!1,Vr=!1,Hr=0,U=null,Ur=0,Wr={readContext:function(e){return e._currentValue2},useContext:function(e){return et(),e._currentValue2},useMemo:ot,useReducer:at,useRef:function(e){V=et(),H=nt();var t=H.memoizedState;return t===null?(e={current:e},H.memoizedState=e):t},useState:function(e){return at(it,e)},useInsertionEffect:lt,useLayoutEffect:function(){},useCallback:function(e,t){return ot((function(){return e}),t)},useImperativeHandle:lt,useEffect:lt,useDebugValue:lt,useDeferredValue:function(e){return et(),e},useTransition:function(){return et(),[!1,ct]},useId:function(){var e=Rr.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Pr(e)-1)).toString(32)+t;var n=Gr;if(n===null)throw Error(x(404));return t=Hr++,e=`:`+n.idPrefix+`R`+e,0<t&&(e+=`H`+t.toString(32)),e+`:`},useMutableSource:function(e,t){return et(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(x(407));return n()}},Gr=null,Kr=Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,Xn.renderToNodeStream=function(){throw Error(x(207))},Xn.renderToStaticMarkup=function(e,t){return It(e,t,!0,`The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},Xn.renderToStaticNodeStream=function(){throw Error(x(208))},Xn.renderToString=function(e,t){return It(e,t,!1,`The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`)},Xn.version=`18.2.0`,qr=`default`in c?l:c,Jr={},Yr=qr,W=null,G=0,Xr=new TextEncoder,K=Object.prototype.hasOwnProperty,Zr=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qr={},$r={},q={},`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach((function(e){q[e]=new N(e,0,!1,e,null,!1,!1)})),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach((function(e){var t=e[0];q[t]=new N(t,1,!1,e[1],null,!1,!1)})),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach((function(e){q[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)})),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach((function(e){q[e]=new N(e,2,!1,e,null,!1,!1)})),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach((function(e){q[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)})),[`checked`,`multiple`,`muted`,`selected`].forEach((function(e){q[e]=new N(e,3,!0,e,null,!1,!1)})),[`capture`,`download`].forEach((function(e){q[e]=new N(e,4,!1,e,null,!1,!1)})),[`cols`,`rows`,`size`,`span`].forEach((function(e){q[e]=new N(e,6,!1,e,null,!1,!1)})),[`rowSpan`,`start`].forEach((function(e){q[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)})),ei=/[\-:]([a-z])/g,`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach((function(e){var t=e.replace(ei,Bt);q[t]=new N(t,1,!1,e,null,!1,!1)})),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach((function(e){var t=e.replace(ei,Bt);q[t]=new N(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)})),[`xml:base`,`xml:lang`,`xml:space`].forEach((function(e){var t=e.replace(ei,Bt);q[t]=new N(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)})),[`tabIndex`,`crossOrigin`].forEach((function(e){q[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)})),q.xlinkHref=new N(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach((function(e){q[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)})),ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ni=[`Webkit`,`ms`,`Moz`,`O`],Object.keys(ti).forEach((function(e){ni.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ti[t]=ti[e]}))})),ri=/["'&<>]/,ii=/([A-Z])/g,ai=/^ms-/,oi=Array.isArray,si=M(`<script>`),ci=M(`<\/script>`),li=M(`<script src="`),ui=M(`<script type="module" src="`),di=M(`" async=""><\/script>`),fi=/(<\/|<)(s)(cript)/gi,pi=M(`<!-- -->`),mi=new Map,hi=M(` style="`),gi=M(`:`),_i=M(`;`),J=M(` `),vi=M(`="`),yi=M(`"`),bi=M(`=""`),Y=M(`>`),xi=M(`/>`),Si=M(` selected=""`),Ci=M(`
`),wi=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ti=new Map,Ei=M(`<!DOCTYPE html>`),Di=M(`</`),Oi=M(`>`),ki=M(`<template id="`),Ai=M(`"></template>`),ji=M(`<!--$-->`),Mi=M(`<!--$?--><template id="`),Ni=M(`"></template>`),Pi=M(`<!--$!-->`),Fi=M(`<!--/$-->`),Ii=M(`<template`),Li=M(`"`),Ri=M(` data-dgst="`),M(` data-msg="`),M(` data-stck="`),zi=M(`></template>`),Bi=M(`<div hidden id="`),Vi=M(`">`),Hi=M(`</div>`),Ui=M(`<svg aria-hidden="true" style="display:none" id="`),Wi=M(`">`),Gi=M(`</svg>`),Ki=M(`<math aria-hidden="true" style="display:none" id="`),qi=M(`">`),Ji=M(`</math>`),Yi=M(`<table hidden id="`),Xi=M(`">`),Zi=M(`</table>`),Qi=M(`<table hidden><tbody id="`),$i=M(`">`),ea=M(`</tbody></table>`),ta=M(`<table hidden><tr id="`),na=M(`">`),ra=M(`</tr></table>`),ia=M(`<table hidden><colgroup id="`),aa=M(`">`),oa=M(`</colgroup></table>`),sa=M(`function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`),ca=M(`$RS("`),la=M(`","`),ua=M(`")<\/script>`),da=M(`function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`),fa=M(`$RC("`),pa=M(`","`),ma=M(`")<\/script>`),ha=M(`function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`),ga=M(`$RX("`),_a=M(`"`),va=M(`)<\/script>`),ya=M(`,`),ba=/[<\u2028\u2029]/g,xa=Object.assign,Sa=Symbol.for(`react.element`),Ca=Symbol.for(`react.portal`),wa=Symbol.for(`react.fragment`),Ta=Symbol.for(`react.strict_mode`),Ea=Symbol.for(`react.profiler`),Da=Symbol.for(`react.provider`),Oa=Symbol.for(`react.context`),ka=Symbol.for(`react.forward_ref`),Aa=Symbol.for(`react.suspense`),ja=Symbol.for(`react.suspense_list`),Ma=Symbol.for(`react.memo`),Na=Symbol.for(`react.lazy`),Pa=Symbol.for(`react.scope`),Fa=Symbol.for(`react.debug_trace_mode`),Ia=Symbol.for(`react.legacy_hidden`),La=Symbol.for(`react.default_value`),Ra=Symbol.iterator,za={},Ba=null,Va={isMounted:function(){return!1},enqueueSetState:function(e,t){e=e._reactInternals,e.queue!==null&&e.queue.push(t)},enqueueReplaceState:function(e,t){e=e._reactInternals,e.replace=!0,e.queue=[t]},enqueueForceUpdate:function(){}},Ha={id:1,overflow:``},Ua=Math.clz32?Math.clz32:fn,Wa=Math.log,Ga=Math.LN2,Ka=typeof Object.is==`function`?Object.is:pn,X=null,qa=null,Ja=null,Z=null,Ya=!1,Xa=!1,Za=0,Q=null,Qa=0,$a={readContext:function(e){return e._currentValue},useContext:function(e){return mn(),e._currentValue},useMemo:bn,useReducer:yn,useRef:function(e){X=mn(),Z=gn();var t=Z.memoizedState;return t===null?(e={current:e},Z.memoizedState=e):t},useState:function(e){return yn(vn,e)},useInsertionEffect:Cn,useLayoutEffect:function(){},useCallback:function(e,t){return bn((function(){return e}),t)},useImperativeHandle:Cn,useEffect:Cn,useDebugValue:Cn,useDeferredValue:function(e){return mn(),e},useTransition:function(){return mn(),[!1,Sn]},useId:function(){var e=qa.treeContext,t=e.overflow;e=e.id,e=(e&~(1<<32-Ua(e)-1)).toString(32)+t;var n=eo;if(n===null)throw Error(O(404));return t=Za++,e=`:`+n.idPrefix+`R`+e,0<t&&(e+=`H`+t.toString(32)),e+`:`},useMutableSource:function(e,t){return mn(),t(e._source)},useSyncExternalStore:function(e,t,n){if(n===void 0)throw Error(O(407));return n()}},eo=null,to=Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher,Jr.renderToReadableStream=function(e,t){return new Promise((function(n,r){var i,a,o=new Promise((function(e,t){a=e,i=t})),s=En(e,Ht(t?t.identifierPrefix:void 0,t?t.nonce:void 0,t?t.bootstrapScriptContent:void 0,t?t.bootstrapScripts:void 0,t?t.bootstrapModules:void 0),Ut(t?t.namespaceURI:void 0),t?t.progressiveChunkSize:void 0,t?t.onError:void 0,a,(function(){var e=new ReadableStream({type:`bytes`,pull:function(e){if(s.status===1)s.status=2,Rt(e,s.fatalError);else if(s.status!==2&&s.destination===null){s.destination=e;try{qn(s,e)}catch(e){kn(s,e),An(s,e)}}},cancel:function(){Jn(s)}},{highWaterMark:0});e.allReady=o,n(e)}),(function(e){o.catch((function(){})),r(e)}),i);if(t&&t.signal){var c=t.signal,l=function(){Jn(s,c.reason),c.removeEventListener(`abort`,l)};c.addEventListener(`abort`,l)}Vn(s)}))},Jr.version=`18.2.0`,$={},no=Xn,ro=Jr,$.version=no.version,$.renderToString=no.renderToString,$.renderToStaticMarkup=no.renderToStaticMarkup,$.renderToNodeStream=no.renderToNodeStream,$.renderToStaticNodeStream=no.renderToStaticNodeStream,$.renderToReadableStream=ro.renderToReadableStream,$.version,$.renderToString,$.renderToStaticMarkup,$.renderToNodeStream,$.renderToStaticNodeStream,io=$.renderToReadableStream})),oo,so,co=e((()=>{v(),oo={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},so={...oo,borderRadius:6,background:`rgba(136, 85, 255, 0.3)`,color:`#85F`,border:`1px dashed #85F`,flexDirection:`column`},b.EventHandler,b.EventHandler,b.EventHandler,b.Number,b.Boolean,b.String,b.Enum})),lo=e((()=>{v(),t()})),uo=e((()=>{t()})),fo=e((()=>{v()})),po=e((()=>{v()})),mo=e((()=>{t()})),ho=e((()=>{v()})),go=e((()=>{r(),t()})),_o=e((()=>{t(),po()})),vo=e((()=>{t(),v(),po(),uo()})),yo=e((()=>{v(),t(),co()}));function bo(){return p(()=>ve.current()===ve.canvas,[])}var xo=e((()=>{t(),v()})),So=e((()=>{t()})),Co=e((()=>{t(),v(),b.FusedNumber,b.FusedNumber})),wo=e((()=>{co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),xo(),So(),Co()})),To=e((()=>{wo()}));function Eo({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?u(Oo,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?u(Ao,{html:n,style:o}):u(Do,{style:o})}function Do({style:e}){return u(`div`,{style:{minHeight:Lo(e),...so,overflow:`hidden`,...e},children:u(`div`,{style:Bo,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function Oo({url:e,zoom:t,radius:n,border:r,style:i}){let a=!i.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let s=bo(),[c,l]=o(s?void 0:!1);return f(()=>{if(!s)return;let t=!0;l(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&l(e)}else{let e=await n.text();console.error(e),l(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),l(e)}),()=>{t=!1}},[e]),s&&a?u(Io,{message:`URL embeds do not support auto height.`,style:i}):e.startsWith(`https://`)?c===void 0?u(Fo,{}):c instanceof Error?u(Io,{message:c.message,style:i}):c===!0?u(Io,{message:`Can’t embed ${e} due to its content security policy.`,style:i}):u(`iframe`,{src:e,style:{...Ro,...i,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:s?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:ko(s),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):u(Io,{message:`Unsupported protocol.`,style:i})}function ko(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function Ao({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return u(n||r?Mo:jo,{html:e,...t})}return u(No,{html:e,...t})}function jo({html:e,style:t}){let r=n(),[a,s]=o(0);f(()=>{let e=r.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&s(r)}return i.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{i.removeEventListener(`message`,t)}},[]);let c=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,l={...Ro,...t};return t.height||(l.height=a+`px`),u(`iframe`,{ref:r,style:l,srcDoc:c})}function Mo({html:e,style:t}){let r=n();return f(()=>{let t=r.current;if(t)return t.innerHTML=e,Po(t),()=>{t.innerHTML=``}},[e]),u(`div`,{ref:r,style:{...zo,...t}})}function No({html:e,style:t}){return u(`div`,{style:{...zo,...t},dangerouslySetInnerHTML:{__html:e}})}function Po(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)Po(t)}function Fo(){return u(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...oo,overflow:`hidden`},children:u(`div`,{style:Bo,children:`Loading…`})})}function Io({message:e,style:t}){return u(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:Lo(t),...oo,overflow:`hidden`,...t},children:u(`div`,{style:Bo,children:e})})}function Lo(e){if(!e.height)return 200}var Ro,zo,Bo,Vo=e((()=>{r(),h(),t(),v(),To(),Ee(Eo,{type:{type:b.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:b.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:b.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:b.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:b.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:b.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),Ro={width:`100%`,height:`100%`,border:`none`},zo={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},Bo={textAlign:`center`,minWidth:140}})),Ho,Uo=e((()=>{v(),Ho=ue({title:`Liquid Gradient`,resolutionScale:`consistent`,fragment:`
// === CONSTANTS ===
const float GOLDEN_ANGLE = 2.3999632;
const float TAU = 6.28318530;

// === PCG hash - https://www.jcgt.org/published/0009/03/02/
uvec3 hash3(uvec3 v) {
    v = v * 1664525u + 1013904223u;
    v.x += v.y * v.z;
    v.y += v.z * v.x;
    v.z += v.x * v.y;
    v ^= v >> 16u;
    v.x += v.y * v.z;
    v.y += v.z * v.x;
    v.z += v.x * v.y;
    return v;
}

// Seed
vec3 seedRandom(float seedVal) {
    uvec3 s = uvec3(
        floatBitsToUint(seedVal),
        floatBitsToUint(seedVal * 1.5 + 7.31),
        floatBitsToUint(seedVal * 2.7 + 13.37)
    );
    s = hash3(s);
    return vec3(s) / float(0xFFFFFFFFu);
}

// === COLOR SPACE UTILITIES ===
vec3 toLinear(vec3 c) {
    return pow(c, vec3(2.2));
}

vec3 toSrgb(vec3 c) {
    return pow(clamp(c, 0.0, 1.0), vec3(0.4545));
}

vec3 linearToOklab(vec3 c) {
    float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
    float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
    float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
    
    l = pow(max(l, 0.0), 1.0/3.0);
    m = pow(max(m, 0.0), 1.0/3.0);
    s = pow(max(s, 0.0), 1.0/3.0);
    
    return vec3(
        0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
        1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
        0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    );
}

vec3 oklabToLinear(vec3 c) {
    float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
    float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
    float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
    
    l = l * l * l;
    m = m * m * m;
    s = s * s * s;
    
    return vec3(
        +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
    );
}

vec3 oklabToLch(vec3 lab) {
    return vec3(lab.x, length(lab.yz), atan(lab.z, lab.y));
}

vec3 lchToOklab(vec3 lch) {
    return vec3(lch.x, lch.y * cos(lch.z), lch.y * sin(lch.z));
}

vec3 mixLch(vec3 lab0, vec3 lab1, float t) {
    vec3 lch0 = oklabToLch(lab0);
    vec3 lch1 = oklabToLch(lab1);
    
    if (lch0.y < 0.05) lch0.z = lch1.z;
    if (lch1.y < 0.05) lch1.z = lch0.z;
    
    float dh = lch1.z - lch0.z;
    if (dh > 3.14159265) dh -= 6.28318530;
    if (dh < -3.14159265) dh += 6.28318530;
    
    return lchToOklab(vec3(
        mix(lch0.x, lch1.x, t),
        mix(lch0.y, lch1.y, t),
        lch0.z + dh * t
    ));
}

// === PALETTE SAMPLING ===
vec3 getColor(int idx) {
    if (u_colors_length < 1) return vec3(0.0);
    int safeIdx = clamp(idx, 0, u_colors_length - 1);
    return u_colors[safeIdx].rgb;
}

vec3 paletteN(float t, int count) {
    if (count < 1) return vec3(0.0);
    if (count < 2) return toLinear(getColor(0));
    
    float segmentSize = 1.0 / float(count - 1);
    t = clamp(t, 0.0, 1.0);
    int idx = min(int(floor(t / segmentSize)), count - 2);
    float localT = clamp((t - float(idx) * segmentSize) / segmentSize, 0.0, 1.0);
    
    vec3 lab0 = linearToOklab(toLinear(getColor(idx)));
    vec3 lab1 = linearToOklab(toLinear(getColor(idx + 1)));
    
    return oklabToLinear(mixLch(lab0, lab1, localT));
}

// === DITHER ===
float IGN(vec2 uv) {
    return fract(52.9829189 * fract(dot(uv, vec2(0.06711056, 0.00583715))));
}

float quickNoise(vec2 I) {
    return fract(sin(dot(I, vec2(12.9898, 78.233))) * 43758.5453);
}

// Dither Mode: 0=Off, 1=IGN, 2=quickNoise
float getDither(vec2 I, float mode) {
    if (mode < 0.5) return 0.5;          // 0: Off
    if (mode < 1.5) return IGN(I);       // 1: Smooth
    return quickNoise(I);                // 2: Grain
}

// === POST-PROCESS ===
vec3 softGamutMap(vec3 linearRgb) {
    float maxC = max(linearRgb.r, max(linearRgb.g, linearRgb.b));
    float minC = min(linearRgb.r, min(linearRgb.g, linearRgb.b));
    
    if (minC >= 0.0 && maxC <= 1.0) return linearRgb;
    
    vec3 lab = linearToOklab(max(linearRgb, 0.0));
    float L = clamp(lab.x, 0.0, 1.0);
    float C = length(lab.yz);
    float h = atan(lab.z, lab.y);
    
    float maxChroma = 0.4 * (1.0 - pow(abs(2.0 * L - 1.0), 2.0));
    
    if (C > maxChroma * 0.7) {
        float knee = maxChroma * 0.7;
        C = knee + (maxChroma - knee) * tanh((C - knee) / (maxChroma - knee + 0.001));
    }
    
    return clamp(oklabToLinear(vec3(L, C * cos(h), C * sin(h))), 0.0, 1.0);
}

vec3 applyContrastSaturation(vec3 linearRgb, float contrast, float saturation) {
    vec3 lab = linearToOklab(linearRgb);
    float C = length(lab.yz);
    float h = atan(lab.z, lab.y);
    
    lab.x = clamp((lab.x - 0.5) * contrast + 0.5, 0.0, 1.0);
    C *= saturation;
    lab.y = C * cos(h);
    lab.z = C * sin(h);
    
    return oklabToLinear(lab);
}

// === MAIN ===
void main() {
    vec2 fragCoord = v_uv * u_resolution;
    vec2 r = u_resolution;
    vec2 p = (fragCoord * 2.0 - r) / r.y;
    
    int colorCount = u_colors_length;
    
    // Early out: no colors -> black
    if (colorCount < 1) {
        fragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    float t = u_time * 0.3;
    
    // Map time onto a circle so animation seamlessly wraps.
    float looping = step(0.5, u_loop);
    float phase = TAU * u_time / max(u_loop, 0.01);
    float radius = u_loop * u_speed * 0.3 / TAU;
    float tA = sin(phase) * radius;
    float tB = (1.0 - cos(phase)) * radius;
    
    // Seed-based offsets
    vec3 seedOffset = seedRandom(u_seed);
    vec3 seedOffset2 = seedRandom(u_seed + 100.0);
    
    // Golden angle rotation
    float seedAngle = u_seed * GOLDEN_ANGLE;
    vec2 seedPhase = (seedOffset2.xy - 0.5) * TAU;
    
    // Seed-based rotation
    float cs = cos(seedAngle);
    float sn = sin(seedAngle);
    p = mat2(cs, -sn, sn, cs) * p;
    
    // Get dither value
    float dither = getDither(floor(fragCoord / u_pixelRatio), u_ditherMode);
    
    // === TURBULENCE ===
    float totalVal = 0.0;
    float totalWeight = 0.0;
    int turbIter = int(u_turbIter);
    
    float freq = 1.0 / max(u_turbFreq, 0.01);
    
    for (float i = 0.0; i < 4.0; i++) {
        float eph = i / 4.0;
       
        vec2 q = p * u_scale;
        float sq = eph * eph;
        
        if (u_jellify > 0.5) {
            q.yx *= mix(1.0, 0.5, 1.0 - exp(-sq));
        }
        
        float a = seedPhase.x;
        float d = seedPhase.y;
        
        for (int j = 2; j < 13; j++) {
            if (j >= turbIter) break;
            float fj = float(j);
            // When looping, use circular time. Otherwise original t.
            float t1 = mix(t * u_speed, tA, looping);
            float t2 = mix(t * u_speed, tB, looping);
            q += u_turbAmp * sin(q.yx / freq * fj + t1 + vec2(a, d) + seedOffset.xy * fj) / fj;
            a += cos(fj + d * 1.2 + q.x * 2.0 - t1 + seedOffset2.z + t2 * 0.3 * looping);
            d += sin(fj * q.y + a + seedOffset.z + t1 + seedOffset2.y + t2 * 0.3 * looping);
        }
        
        float v = 0.5 + 0.5 * sin(length(q.yx + vec2(a, d) * 0.2) * u_waveFreq + i * i + seedOffset.x);
        float weight = smoothstep(0.0, 0.5, eph) * smoothstep(1.0, 0.5, eph);
        totalVal += v * weight;
        totalWeight += weight;
    }
    
    float val = totalVal / totalWeight;
    val = clamp((val - 0.3) / 0.4, 0.0, 1.0);
    val = pow(val, exp(-u_distBias));
    val = clamp(val + (dither - 0.5) * u_dither, 0.0, 1.0);
    
    vec3 col = paletteN(val, colorCount);
    col *= u_exposure;
    col = applyContrastSaturation(col, u_contrast, u_saturation);
    col = softGamutMap(col);
    col = toSrgb(col);
    
    fragColor = vec4(col, 1.0);
}
`,propertyControls:{colors:{type:b.Array,title:`Colors`,control:{type:b.Color},maxCount:8,defaultValue:[`#00001A`,`#2962FF`,`#40BCFF`,`#FFB8B5`,`#FFC14F`]},seed:{type:b.Number,title:`Seed`,defaultValue:648,min:0,max:1e3,step:1},speed:{type:b.Number,title:`Speed`,defaultValue:.3,min:0,max:2,step:.01},loop:{type:b.Number,title:`Loop`,defaultValue:0,min:0,max:60,step:.5,hiddenWhenUnset:!0,displayStepper:!0},scale:{type:b.Number,title:`Scale`,defaultValue:.42,min:.1,max:2,step:.01},turbAmp:{type:b.Number,title:`Amplitude`,defaultValue:.6,min:0,max:1,step:.01},turbFreq:{type:b.Number,title:`Frequency`,defaultValue:.1,min:.1,max:2,step:.01},turbIter:{type:b.Number,title:`Definition`,defaultValue:7,min:3,max:10,step:1,displayStepper:!0},waveFreq:{type:b.Number,title:`Bands`,defaultValue:3.8,min:.1,max:5,step:.1},distBias:{type:b.Number,title:`Bias`,defaultValue:0,min:-1,max:1,step:.1,hiddenWhenUnset:!0},jellify:{type:b.Boolean,title:`Jellify`,defaultValue:!1,hiddenWhenUnset:!0},ditherMode:{type:b.Enum,title:`Noise`,options:[0,1,2],optionTitles:[`Off`,`Smooth`,`Grain`],defaultValue:0},dither:{type:b.Number,title:`Amount`,defaultValue:.05,min:0,max:.2,step:.01,hidden:e=>e.ditherMode===0},exposure:{type:b.Number,title:`Exposure`,defaultValue:1.1,min:.5,max:2,step:.1,section:`Filters`,displayStepper:!0,hiddenWhenUnset:!0},contrast:{type:b.Number,title:`Contrast`,defaultValue:1.1,min:.5,max:2,step:.1,section:`Filters`,displayStepper:!0,hiddenWhenUnset:!0},saturation:{type:b.Number,title:`Saturation`,defaultValue:1,min:0,max:2,step:.1,section:`Filters`,displayStepper:!0,hiddenWhenUnset:!0}}})}));function Wo(e,t){return{description:`Cirya is coming soon with the newest technology, website and more.`,favicon:`https://framerusercontent.com/assets/216Psk9rr6HoYQnXLSCj9Ck0bEc.png`,robots:`max-image-preview:large`,socialImage:`https://framerusercontent.com/assets/n9Gg85PBEYUrreS95bywDQNeDs.png`,title:`Cirya - 2026`}}var Go=e((()=>{}));function Ko(e,t){return{breakpoints:[{hash:`1hmeqms`,mediaQuery:`(min-width: 1200px)`},{hash:`1i9n4iw`,mediaQuery:`(min-width: 810px) and (max-width: 1199.98px)`},{hash:`lbxd7d`,mediaQuery:`(max-width: 809.98px)`}],description:Wo(e,t).description,elements:{},robots:`max-image-preview:large`,serializationId:`framer-urrzw`,title:Wo(e,t).title||`Page`,viewport:`width=device-width`}}var qo,Jo,Yo=e((()=>{Go(),qo=1,Jo={exports:{metadataVersion:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})),Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs=e((()=>{h(),v(),ie(),t(),Vo(),Uo(),Yo(),Xo=y(Eo),Zo={e3HS5o77L:`(max-width: 809.98px)`,gxlmBSGwB:`(min-width: 1200px)`,tDsJuxVeY:`(min-width: 810px) and (max-width: 1199.98px)`},Qo=[],$o=`framer-urrzw`,es={e3HS5o77L:`framer-v-lbxd7d`,gxlmBSGwB:`framer-v-1hmeqms`,tDsJuxVeY:`framer-v-1i9n4iw`},ts=(e,t,n)=>e&&t?`position`:n,ns={Desktop:`gxlmBSGwB`,Phone:`e3HS5o77L`,Tablet:`tDsJuxVeY`},rs=({value:e})=>xe()?null:u(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),is=({height:e,id:t,width:n,...r})=>({...r,variant:ns[r.variant]??r.variant??`gxlmBSGwB`}),as=le(d(function(e,t){let r=n(null),i=t??r,a=ee(),{activeLocale:o,setLocale:c}=se(),l=de(),{style:d,className:f,layoutId:h,variant:g,...te}=is(e);fe(p(()=>Ko({},o),[o]));let[ie,_]=ce(g,Zo,!1),ae=De($o),v=s(he)?.isLayoutTemplate,y=ts(v,!!s(ne)?.transition?.layout);return oe({}),u(he.Provider,{value:{activeVariantId:ie,humanReadableVariantMap:ns,primaryVariantId:`gxlmBSGwB`,variantClassNames:es},children:m(re,{id:h??a,children:[u(rs,{value:`html body { background: none; }`}),m(Se,{...te,background:{alt:``,fit:`fill`,sizes:l?.width||`100vw`},className:De(ae,`framer-1hmeqms`,f),ref:i,style:{...d},children:[u(ye,{className:`framer-1vtdid8-container`,layout:y,children:u(be,{breakpoint:ie,overrides:{e3HS5o77L:{fallbackImage:`https://framerusercontent.com/images/YIcMjSDWr7xtuJr04ztGYODeAwg.png?scale-down-to=1000&width=780&height=2000`},tDsJuxVeY:{fallbackImage:`https://framerusercontent.com/images/sfqU04EcQTlOyI86PSUsvOzG3U.png?scale-down-to=1000&width=1620&height=2000`}},children:u(_e,{__fromCanvasComponent:!0,fallbackImage:`https://framerusercontent.com/images/3qmm7oIPODXIOdmVEqMKSzzA8c.png?scale-down-to=1200&width=2400&height=2000`,fragmentShader:Ho.fragment,height:`100%`,heightmapSource:Ho.heightmapSource,mode:`progressive`,resolutionScale:Ho.resolutionScale,skipInitialFallback:!0,uniforms:{u_colors:{type:`array`,value:[`rgb(0, 0, 26)`,`rgb(41, 98, 255)`,`rgb(64, 188, 255)`,`rgb(255, 184, 181)`,`rgb(255, 193, 79)`]},u_contrast:{type:`number`,value:1.1},u_distBias:{type:`number`,value:0},u_dither:{type:`number`,value:.05},u_ditherMode:{type:`enum`,value:0},u_exposure:{type:`number`,value:1.1},u_jellify:{type:`boolean`,value:!1},u_loop:{type:`number`,value:0},u_saturation:{type:`number`,value:1},u_scale:{type:`number`,value:.42},u_seed:{type:`number`,value:648},u_speed:{type:`number`,value:.3},u_turbAmp:{type:`number`,value:.6},u_turbFreq:{type:`number`,value:.1},u_turbIter:{type:`number`,value:7},u_waveFreq:{type:`number`,value:3.8}},vertexShader:Ho.vertex,width:`100%`})})}),u(Ce,{children:u(ye,{className:`framer-1pq9qut-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:y,nodeId:`CTR7pJnhE`,scopeId:`q7LxhqcVi`,children:u(Eo,{height:`100%`,html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cirya | Dispatch</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #ffffff;
            color: #000000;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 40px 0;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }

        .liquid-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            filter: blur(80px);
        }

        .blob {
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.03);
            animation: move 15s infinite alternate ease-in-out;
        }

        .blob-1 { width: 500px; height: 500px; top: -10%; left: -5%; }
        .blob-2 { width: 400px; height: 400px; bottom: -10%; right: -5%; animation-delay: -5s; }

        @keyframes move {
            from { transform: translate(0, 0) rotate(0deg); }
            to { transform: translate(100px, 50px) rotate(90deg); }
        }

        .glass-card {
            position: relative;
            z-index: 10;
            width: 90%;
            max-width: 550px;
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(20px) saturate(160%);
            -webkit-backdrop-filter: blur(20px) saturate(160%);
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 30px;
            padding: 50px 30px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.02);
        }

        header {
            margin-bottom: 40px;
        }

        h1 {
            font-size: clamp(3.5rem, 12vw, 5.5rem);
            font-weight: 900;
            letter-spacing: -4px;
            text-transform: uppercase;
            line-height: 0.9;
            margin-bottom: 10px;
        }

        .sub-label {
            font-weight: 700;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            opacity: 0.3;
        }

        .nav-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .nav-item {
            text-decoration: none;
            color: #000;
            padding: 20px;
            background: rgba(255, 255, 255, 0.4);
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 18px;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            text-align: left;
        }

        .nav-item:hover {
            background: #000;
            color: #fff;
            transform: translateY(-3px);
            border-color: #000;
        }

        .nav-item h2 {
            font-size: 1.1rem;
            font-weight: 800;
            margin-bottom: 4px;
            text-transform: lowercase;
        }

        .nav-item p {
            font-size: 0.85rem;
            opacity: 0.6;
            line-height: 1.3;
        }

        .nav-item:hover p {
            opacity: 0.7;
        }

        footer {
            margin-top: 40px;
            font-size: 0.65rem;
            font-weight: 800;
            letter-spacing: 2px;
            opacity: 0.2;
            text-transform: uppercase;
        }
    </style>
</head>
<body>

    <div class="liquid-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
    </div>

    <div class="glass-card">
        <header>
            <h1>Cirya</h1>
            <p class="sub-label">Network Directory // 2026</p>
        </header>

        <nav class="nav-group">
            <a href="https://radio.cirya.co" class="nav-item">
                <h2>.radio</h2>
                <p>High-fidelity broadcast stream and live metadata.</p>
            </a>

            <a href="https://discord.gg/cirya" class="nav-item">
                <h2>.community</h2>
                <p>Official Discord hub for project synchronization.</p>
            </a>

            <a href="https://www.youtube.com/@Tagnz" class="nav-item">
                <h2>.visuals</h2>
                <p>Video archives and official network content via YouTube.</p>
            </a>

            <a href="https://www.twitch.tv/tagnzz" class="nav-item">
                <h2>.live</h2>
                <p>Real-time streaming and interactive broadcast events.</p>
            </a>

            <a href="https://www.roblox.com/communities/935429500/Cirya#!/about" class="nav-item">
                <h2>.roblox</h2>
                <p>Join the official development group and active simulations.</p>
            </a>
        </nav>

        <footer>
            Authorized Access Only // 2026
        </footer>
    </div>

</body>
</html>`,id:`CTR7pJnhE`,layoutId:`CTR7pJnhE`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})]}),u(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-urrzw.framer-18909uo, .framer-urrzw .framer-18909uo { display: block; }`,`.framer-urrzw.framer-1hmeqms { height: 1000px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; will-change: var(--framer-will-change-filter-override, filter); }`,`.framer-urrzw .framer-1vtdid8-container, .framer-urrzw .framer-1pq9qut-container { flex: none; height: 1000px; left: 0px; position: absolute; right: 0px; top: 0px; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-urrzw.framer-1hmeqms { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-urrzw.framer-1hmeqms { width: 390px; }}`],`framer-urrzw`),os=as,as.displayName=`Page`,as.defaultProps={height:1e3,width:1200},me(as,[{explicitInter:!0,fonts:[]},...Xo],{supportsExplicitInterCodegen:!0}),ss={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`Framerq7LxhqcVi`,slots:[],annotations:{framerContractVersion:`1`,framerIntrinsicWidth:`1200`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"tDsJuxVeY":{"layout":["fixed","fixed"]},"e3HS5o77L":{"layout":["fixed","fixed"]}}}`,framerIntrinsicHeight:`1000`,framerAutoSizeImages:`true`,framerColorSyntax:`true`,framerComponentViewportWidth:`true`,framerScrollSections:`false`,framerAcceptsLayoutTemplate:`false`,framerLayoutTemplateFlowEffect:`true`,framerImmutableVariables:`true`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}));async function ls(e,t,n){let r=ds[e],i=r?await r(t,n):void 0,a={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]};for(let t of us){if(t.pageIds&&!t.pageIds.has(e))continue;let n=t.code(i);n&&a[t.placement].push({...t,code:n})}return a}var us,ds,fs,ps,ms=e((()=>{us=[],ds={},fs={bodyEnd:[],bodyStart:[],headEnd:[],headStart:[]},ps={exports:{snippetsSorting:{type:`variable`,annotations:{framerContractVersion:`1`}},getSnippets:{type:`function`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})),hs,gs,_s,vs,ys=e((()=>{h(),t(),v(),hs=()=>(f(()=>{let e=document.querySelector(`meta[name="robots"]`);e?e.setAttribute(`content`,`noindex`):(e=document.createElement(`meta`),e.setAttribute(`name`,`robots`),e.setAttribute(`content`,`noindex`),document.head.appendChild(e))},[]),u(`div`,{className:`__framer-not-found-page`,style:{display:`flex`,height:`100vh`,alignItems:`center`,justifyContent:`center`,backgroundColor:`var(--color-primary)`,background:`var(--color-background)`,fontSize:`var(--font-size-body)`,boxSizing:`border-box`,fontFeatureSettings:`"liga", "clig"`,fontVariantLigatures:`common-ligatures`,textRendering:`optimizeLegibility`},children:m(`main`,{style:{boxSizing:`border-box`,fontFamily:`"Inter", sans-serif`,fontWeight:500,maxWidth:`240px`,width:`100%`,display:`flex`,alignItems:`center`,flexDirection:`column`,padding:`0 20px`,textWrap:`balance`},children:[u(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`21`,style:{verticalAlign:`middle`,color:`var(--color-primary)`,marginBottom:`20px`},children:u(`path`,{d:`M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,fill:`currentColor`})}),u(`h1`,{style:{margin:`0 0 10px 0`,fontSize:`var(--font-size-title)`,color:`var(--color-primary)`,textAlign:`center`},children:`Page Not Found`}),u(`div`,{style:{color:`var(--color-secondary)`,marginBottom:`20px`,lineHeight:`1.5em`,textAlign:`center`},children:`The page you are looking for does not exist or may have been moved.`}),u(`a`,{href:`/`,role:`button`,style:{backgroundColor:`var(--color-tint)`,color:`#ffffff`,paddingLeft:`8px`,paddingRight:`8px`,borderRadius:`8px`,lineHeight:`30px`,height:`30px`,textDecoration:`none`,verticalAlign:`baseline`},children:`Back to Home`})]})})),gs=le(hs,[`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,`@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,`@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,`.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,`@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`]),_s=gs,vs={exports:{default:{type:`reactComponent`,name:`component`,slots:[],annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}})),bs=e((()=>{ys(),ys()}));function xs(){let e=!1;try{e=i.self!==i.top}catch{e=!0}if(!e)return!1;let t=null,n=!1;if(i.location.ancestorOrigins&&i.location.ancestorOrigins.length>0){let e=i.location.ancestorOrigins[0];try{t=new URL(e).host}catch{}}else if(document.referrer)try{t=new URL(document.referrer).host}catch{}return t&&(n=t===ws||t.endsWith(`.${ws}`)),n}function Ss(e){return d((t,n)=>{let r=te(Ts,Es,Ds),a=ve.current()===ve.canvas;return r&&!a?null:u(e,{...t,ref:n,onClick:e=>{e.preventDefault(),i.open(`https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(i?.location?.origin)}`)},style:{...t.style,pointerEvents:`auto`},title:`Create a free website with Framer, the website builder loved by startups, designers and agencies.`,className:t.className+` __framer-badge`})})}function Cs(e){return d((t,n)=>m(g,{children:[u(`p`,{style:{position:`absolute`,transform:`scale(0.001)`},children:`Create a free website with Framer, the website builder loved by startups, designers and agencies.`}),u(e,{...t,ref:n})]}))}var ws,Ts,Es,Ds,Os=e((()=>{r(),h(),t(),v(),ws=`framer.com`,Ts=()=>()=>{},Es=()=>xs(),Ds=()=>!1})),ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs=e((()=>{h(),v(),t(),ks=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`,As=`alpha, var(--framer-icon-mask-mode, add)`,js=`no-repeat`,Ms=`center`,Ns=`auto`,Ps=d((e,t)=>{let{animated:n,layoutId:r,children:i,...a}=e;return n?u(_.div,{...a,layoutId:r,ref:t}):u(`div`,{...a,ref:t})}),Fs=({fill:e,fill2:t,height:n,id:r,width:i,...a})=>({...a,vtL2DrqsL:t??a.vtL2DrqsL??`rgb(0, 0, 0)`,Z1QnXqTEb:e??a.Z1QnXqTEb??`rgb(0, 0, 0)`}),Is=le(d(function(e,t){let{style:n,className:r,layoutId:i,variant:a,Z1QnXqTEb:o,vtL2DrqsL:s,...c}=Fs(e);return u(Ps,{...c,className:De(`framer-g7oZR`,r),layoutId:i,ref:t,style:{"--1bd4d3i":o,...n}})}),[`.framer-g7oZR { -webkit-mask-image: ${ks}; -webkit-mask-position: ${Ms}; -webkit-mask-repeat: ${js}; -webkit-mask-size: ${Ns}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${ks}; mask-mode: ${As}; mask-position: ${Ms}; mask-repeat: ${js}; mask-size: ${Ns}; width: 97px; }`],`framer-g7oZR`),Is.displayName=`Text`,Ls=Is,Ee(Is,{Z1QnXqTEb:{defaultValue:`rgb(0, 0, 0)`,hidden:!1,title:`Fill`,type:b.Color},vtL2DrqsL:{defaultValue:`rgb(0, 0, 0)`,hidden:!0,title:`Fill 2`,type:b.Color}})})),zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js=e((()=>{h(),v(),t(),zs=`url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`,Bs=`alpha, var(--framer-icon-mask-mode, add)`,Vs=`no-repeat`,Hs=`center`,Us=`auto`,Ws=d((e,t)=>{let{animated:n,layoutId:r,children:i,...a}=e;return n?u(_.div,{...a,layoutId:r,ref:t}):u(`div`,{...a,ref:t})}),Gs=({fill:e,fill2:t,height:n,id:r,width:i,...a})=>({...a,vtL2DrqsL:t??a.vtL2DrqsL??`rgb(0, 0, 0)`,Z1QnXqTEb:e??a.Z1QnXqTEb??`rgb(0, 0, 0)`}),Ks=le(d(function(e,t){let{style:n,className:r,layoutId:i,variant:a,Z1QnXqTEb:o,vtL2DrqsL:s,...c}=Gs(e);return u(Ws,{...c,className:De(`framer-hcsc7`,r),layoutId:i,ref:t,style:{"--1bd4d3i":o,...n}})}),[`.framer-hcsc7 { -webkit-mask-image: ${zs}; -webkit-mask-position: ${Hs}; -webkit-mask-repeat: ${Vs}; -webkit-mask-size: ${Us}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${zs}; mask-mode: ${Bs}; mask-position: ${Hs}; mask-repeat: ${Vs}; mask-size: ${Us}; width: 12px; }`],`framer-hcsc7`),Ks.displayName=`Framer`,qs=Ks,Ee(Ks,{Z1QnXqTEb:{defaultValue:`rgb(0, 0, 0)`,hidden:!1,title:`Fill`,type:b.Color},vtL2DrqsL:{defaultValue:`rgb(0, 0, 0)`,hidden:!0,title:`Fill 2`,type:b.Color}})})),Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc=e((()=>{h(),v(),ie(),t(),Os(),Rs(),Js(),Ys=y(qs),Xs=y(Ls),Zs=ae(Ls,{nodeId:`pBR1Ew0r8`,override:Cs,scopeId:`PX9hIOIVM`}),Qs=we(ge(ae(_.a,{nodeId:`HK2sXlagE`,override:Ss,scopeId:`PX9hIOIVM`}))),$s=`framer-6jWyo`,ec={HK2sXlagE:`framer-v-n0ccwk`},tc={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{damping:40,delay:1,mass:1.5,stiffness:350,type:`spring`},x:0,y:0},nc={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:10},rc={duration:0,type:`tween`},ic=(e,t)=>`translate(-50%, -50%) ${t}`,ac=(e,t)=>`translateX(-50%) ${t}`,oc=({value:e,children:t})=>{let n=s(ne),r=e??n.transition,i=p(()=>({...n,transition:r}),[JSON.stringify(r)]);return u(ne.Provider,{value:i,children:t})},sc=_.create(a),cc=({height:e,id:t,width:n,...r})=>({...r}),lc=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),uc=le(d(function(e,t){let r=n(null),i=t??r,a=ee(),{activeLocale:o,setLocale:s}=se();de();let{style:c,className:l,layoutId:d,variant:f,...p}=cc(e),{baseVariant:h,classNames:g,clearLoadingGesture:te,gestureHandlers:ne,gestureVariant:ie,isLoading:ae,setGestureState:oe,setVariant:ce,variants:v}=pe({defaultVariant:`HK2sXlagE`,ref:i,variant:f,variantClassNames:ec}),y=lc(e,v),le=De($s);return u(re,{id:d??a,children:u(sc,{animate:v,initial:!1,children:u(oc,{value:rc,children:u(Te,{href:`https://www.framer.com`,motionChild:!0,nodeId:`HK2sXlagE`,openInNewTab:!1,relValues:[],scopeId:`PX9hIOIVM`,children:m(Qs,{...p,...ne,__framer__presenceAnimate:tc,__framer__presenceInitial:nc,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,className:`${De(le,`framer-n0ccwk`,l,g)} framer-bmpgw8`,"data-framer-appear-id":`n0ccwk`,"data-framer-name":`Light`,"data-nosnippet":!0,layoutDependency:y,layoutId:`HK2sXlagE`,optimized:!0,ref:i,style:{...c},children:[u(_.div,{className:`framer-13yxzio`,"data-framer-name":`Backdrop`,layoutDependency:y,layoutId:`IH1cvP0s5`,style:{backgroundColor:`rgb(255, 255, 255)`,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,boxShadow:`0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`}}),m(_.div,{className:`framer-19yaanm`,"data-framer-name":`Content`,layoutDependency:y,layoutId:`U6HIU1IEW`,transformTemplate:ic,children:[u(_.div,{className:`framer-1kflzx5`,layoutDependency:y,layoutId:`roMJYXHnO`,children:u(qs,{animated:!0,className:`framer-e50co`,"data-framer-name":`Logo`,layoutDependency:y,layoutId:`O3s3GcxMZ`,style:{"--1bd4d3i":`rgb(0, 0, 0)`,"--otdjsv":`rgb(0, 0, 0)`},transformTemplate:ac})}),u(Zs,{animated:!0,className:`framer-1um7t9d`,"data-framer-name":`Text`,layoutDependency:y,layoutId:`pBR1Ew0r8`,style:{"--1bd4d3i":`rgb(0, 0, 0)`,"--otdjsv":`rgb(0, 0, 0)`}})]}),u(_.div,{className:`framer-j4ugry`,"data-framer-name":`Bottom`,layoutDependency:y,layoutId:`vCwsHyUh8`,style:{borderBottomLeftRadius:11,borderBottomRightRadius:11,borderTopLeftRadius:11,borderTopRightRadius:11,boxShadow:`inset 0px 0px 0px 1px rgb(0, 0, 0)`,mask:`linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,opacity:.06,WebkitMask:`linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`}}),u(_.div,{className:`framer-jnuwbw`,"data-framer-name":`Border`,layoutDependency:y,layoutId:`ZirFGX8Eh`,style:{borderBottomLeftRadius:11,borderBottomRightRadius:11,borderTopLeftRadius:11,borderTopRightRadius:11,boxShadow:`inset 0px 0px 0px 1px rgb(0, 0, 0)`,opacity:.04}})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,`.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,`.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,`.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,`.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,`.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,`.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,`.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`],`framer-6jWyo`),dc=uc,uc.displayName=`Badge`,uc.defaultProps={height:38,width:140},me(uc,[{explicitInter:!0,fonts:[]},...Ys,...Xs],{supportsExplicitInterCodegen:!0}),fc={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerPX9hIOIVM`,slots:[],annotations:{framerAutoSizeImages:`true`,framerContractVersion:`1`,framerComponentViewportWidth:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerIntrinsicWidth:`140`,framerIntrinsicHeight:`38`,framerColorSyntax:`true`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`}},__FramerMetadata__:{type:`variable`}}}}));export{Ko as _,_s as a,ao as b,ls as c,ss as d,cs as f,Yo as g,Jo as h,bs as i,ms as l,Qo as m,fc as n,vs as o,os as p,pc as r,ps as s,dc as t,fs as u,qo as v,io as y};
//# sourceMappingURL=shared-lib.CCRjP8Ey.mjs.map
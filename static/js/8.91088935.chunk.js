(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[8],{665:function(n,e,t){"use strict";t.d(e,"a",(function(){return x}));var r=t(60),c=t(14),a=t(0),i=t.n(a),o=t(3);function s(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return s=function(){return n},n}var u=o.e.div(s(),(function(n){return n.size}),(function(n){return n.size})),b=function(n){var e,t=n.size,r=void 0===t?"md":t,i=Object(a.useContext)(o.a).spacing;switch(r){case"lg":e=i[6];break;case"sm":e=i[2];break;case"md":default:e=i[4]}return Object(c.jsx)(u,{size:e})};function d(){var n=Object(r.a)(["\n  flex: 1;\n  text-align: center;\n"]);return d=function(){return n},n}function j(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"]);return j=function(){return n},n}var l=o.e.div(j(),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),f=o.e.div(d()),x=function(n){var e=n.children,t=i.a.Children.toArray(e).length;return Object(c.jsx)(l,{children:i.a.Children.map(e,(function(n,e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{children:n}),e<t-1&&Object(c.jsx)(b,{})]})}))})}},666:function(n,e,t){"use strict";var r=t(14),c=t(0),a=t(678),i=t(50);e.a=function(n){var e=n.value,t=n.decimals,o=n.fontSize,s=void 0===o?"40px":o,u=n.prefix,b=Object(a.useCountUp)({start:0,end:e,duration:1,separator:",",decimals:void 0!==t?t:e<0?4:e>1e5?0:3}),d=b.countUp,j=b.update,l=Object(c.useRef)(j);return Object(c.useEffect)((function(){l.current(e)}),[e,l]),Object(r.jsxs)(i.D,{bold:!0,fontSize:s,children:[u,d]})}},667:function(n,e,t){"use strict";t.d(e,"c",(function(){return O})),t.d(e,"d",(function(){return p})),t.d(e,"b",(function(){return h}));var r=t(4),c=t.n(r),a=t(15),i=t(26),o=t(0),s=t(12),u=t.n(s),b=t(66),d=t(178),j=t(77),l=t(673),f=t(39),x=t(130),O=function(){var n=Object(b.m)(),e=n.balance,t=n.account,r=Object(o.useState)(new u.a(0)),s=Object(i.a)(r,2),d=s[0],j=s[1],l=Object(x.a)().fastRefresh;return Object(o.useEffect)((function(){t&&function(){var n=Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:j(new u.a(e));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[t,e,l]),d},p=function(){var n=Object(x.a)().slowRefresh,e=Object(o.useState)(),t=Object(i.a)(e,2),r=t[0],s=t[1];return Object(o.useEffect)((function(){function n(){return(n=Object(a.a)(c.a.mark((function n(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(j.a)(d,Object(f.b)()),n.next=3,e.methods.totalSupply().call();case 3:t=n.sent,s(new u.a(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),r},h=function(n){var e=Object(o.useState)(new u.a(0)),t=Object(i.a)(e,2),r=t[0],s=t[1],b=Object(x.a)().slowRefresh;return Object(o.useEffect)((function(){(function(){var n=Object(a.a)(c.a.mark((function n(){var e,t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Object(j.a)(d,Object(f.b)()),n.next=3,e.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=n.sent,s(new u.a(t));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[n,b]),r};e.a=function(n){var e=Object(o.useState)(new u.a(0)),t=Object(i.a)(e,2),r=t[0],s=t[1],d=Object(b.m)(),j=d.account,f=d.ethereum,O=Object(x.a)().fastRefresh;return Object(o.useEffect)((function(){j&&f&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.c)(f,n,j);case 2:t=e.sent,s(new u.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[j,f,n,O]),r}},669:function(n,e,t){"use strict";t.d(e,"a",(function(){return y}));var r=t(60),c=t(14),a=(t(0),t(3)),i=t(668),o=t(50),s=t(661);function u(){var n=Object(r.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"]);return u=function(){return n},n}function b(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"]);return b=function(){return n},n}var d=a.e.div(b(),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),j=a.e.input(u(),(function(n){return n.theme.colors.primary})),l=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,a=n.startAdornment,i=n.value;return Object(c.jsxs)(d,{children:[!!a&&a,Object(c.jsx)(j,{placeholder:r,value:i,onChange:t}),!!e&&e]})};function f(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 700;\n"]);return f=function(){return n},n}function x(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"]);return x=function(){return n},n}function O(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return O=function(){return n},n}function p(){var n=Object(r.a)(["\n  width: ","px;\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)([""]);return h=function(){return n},n}var v=a.e.div(h()),m=a.e.div(p(),(function(n){return n.theme.spacing[3]})),g=a.e.div(O()),k=a.e.div(x(),(function(n){return n.theme.colors.primary})),w=a.e.span(f(),(function(n){return n.theme.colors.primary})),y=function(n){var e=n.max,t=n.symbol,r=n.onChange,a=n.onSelectMax,u=n.value,b=n.depositFeeBP,d=void 0===b?0:b,j=Object(s.a)();return Object(c.jsxs)(v,{children:[Object(c.jsxs)(k,{children:[e.toLocaleString()," ",t," ",j(526,"Available")]}),Object(c.jsx)(l,{endAdornment:Object(c.jsxs)(g,{children:[Object(c.jsx)(w,{children:t}),Object(c.jsx)(m,{}),Object(c.jsx)("div",{children:Object(c.jsx)(o.d,{size:"sm",onClick:a,children:j(452,"Max")})})]}),onChange:r,placeholder:"0",value:u}),d>0?Object(c.jsxs)(k,{children:[j(10001,"Deposit Fee"),": ",new i.a(u||0).times(d/1e4).toString()," ",t]}):null]})}},670:function(n,e,t){"use strict";t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return f})),t.d(e,"c",(function(){return x}));var r=t(51),c=t(4),a=t.n(c),i=t(15),o=t(0),s=t(66),u=t(53),b=t(107),d=t(664),j=t(663),l=function(n){var e=Object(u.b)(),t=Object(s.m)().account,r=Object(j.e)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(d.d)(r,n,t);case 2:return i=c.sent,e(Object(b.a)(t)),c.abrupt("return",i);case 5:case"end":return c.stop()}}),c)}))),[t,e,n,r])}},f=function(n){var e=Object(s.m)().account,t=Object(j.e)();return{onReward:Object(o.useCallback)(Object(i.a)(a.a.mark((function c(){var i;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i=n.reduce((function(n,c){return[].concat(Object(r.a)(n),[Object(d.d)(t,c,e)])}),[]),c.abrupt("return",Promise.all(i));case 2:case"end":return c.stop()}}),c)}))),[e,n,t])}},x=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(u.b)(),r=Object(s.m)(),c=r.account,l=Object(j.h)(n),f=Object(j.e)(),x=Object(o.useCallback)(Object(i.a)(a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==n){r.next=5;break}return r.next=3,Object(d.d)(f,0,c);case 3:r.next=12;break;case 5:if(!e){r.next=10;break}return r.next=8,Object(d.j)(l,c);case 8:r.next=12;break;case 10:return r.next=12,Object(d.i)(l,c);case 12:t(Object(b.g)(n,c)),t(Object(b.f)(n,c));case 14:case"end":return r.stop()}}),r)}))),[c,t,e,f,l,n]);return{onReward:x}}},674:function(n,e,t){"use strict";t.d(e,"a",(function(){return j})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return f}));var r=t(4),c=t.n(r),a=t(15),i=t(0),o=t(66),s=(t(672),t(53)),u=t(107),b=t(664),d=t(663),j=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(n,r,t);case 3:return i=c.sent,e(Object(u.a)(t)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[t,e,n,r])}},l=function(){var n=Object(o.m)().account,e=Object(d.a)(),t=Object(d.f)();return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(b.a)(e,t,n);case 3:return a=r.sent,r.abrupt("return",a);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[n,e,t])}},f=function(n,e){var t=Object(s.b)(),r=Object(o.m)().account,j=Object(d.h)(e);return{onApprove:Object(i.useCallback)(Object(a.a)(c.a.mark((function a(){var i;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(b.a)(n,j,r);case 3:return i=c.sent,t(Object(u.e)(e,r)),c.abrupt("return",i);case 8:return c.prev=8,c.t0=c.catch(0),c.abrupt("return",!1);case 11:case"end":return c.stop()}}),a,null,[[0,8]])}))),[r,t,n,j,e])}}},679:function(n,e,t){"use strict";t.d(e,"b",(function(){return j}));var r=t(4),c=t.n(r),a=t(15),i=t(0),o=t(66),s=t(53),u=t(107),b=t(664),d=t(663),j=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=Object(s.b)(),r=Object(o.m)(),j=r.account,l=Object(d.e)(),f=Object(d.h)(n),x=Object(i.useCallback)(function(){var r=Object(a.a)(c.a.mark((function r(a){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==n){r.next=5;break}return r.next=3,Object(b.k)(l,0,a,j);case 3:r.next=12;break;case 5:if(!e){r.next=10;break}return r.next=8,Object(b.g)(f,a,j);case 8:r.next=12;break;case 10:return r.next=12,Object(b.f)(f,a,j);case 12:t(Object(u.h)(n,j)),t(Object(u.f)(n,j));case 14:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),[j,t,e,l,f,n]);return{onStake:x}};e.a=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)();return{onStake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.k)(r,n,i,t);case 2:o=c.sent,e(Object(u.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return i.apply(this,arguments)}}(),[t,e,r,n])}}},683:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(668);r.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new r.a(1);var c=new r.a(15012e3)},684:function(n,e,t){"use strict";var r=t(60);function c(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]);return c=function(){return n},n}var a=t(3).e.div(c());e.a=a},685:function(n,e,t){"use strict";t.d(e,"c",(function(){return i})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return s})),t.d(e,"d",(function(){return a}));var r=t(14),c=(t(0),t(50)),a=function(){return Object(r.jsx)(c.C,{variant:"success",outline:!0,startIcon:Object(r.jsx)(c.F,{}),children:"No Fees"})},i=function(){return Object(r.jsx)(c.C,{variant:"secondary",outline:!0,startIcon:Object(r.jsx)(c.F,{}),children:"Core"})},o=function(){return Object(r.jsx)(c.C,{variant:"textSubtle",outline:!0,startIcon:Object(r.jsx)(c.m,{}),children:"Community"})},s=function(){return Object(r.jsx)(c.C,{variant:"binance",outline:!0,startIcon:Object(r.jsx)(c.c,{}),children:"Binance"})}},686:function(n,e,t){"use strict";t.d(e,"b",(function(){return l}));var r=t(4),c=t.n(r),a=t(15),i=t(0),o=t(66),s=t(53),u=t(107),b=t(664),d=t(663),j=[5,6,3,1,22,23],l=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)(),l=Object(d.h)(n),f=j.includes(n);return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o,s,d;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(0!==n){c.next=7;break}return c.next=3,Object(b.l)(r,0,i,t);case 3:o=c.sent,console.info(o),c.next=18;break;case 7:if(!f){c.next=14;break}return c.next=10,Object(b.e)(l,i,t);case 10:s=c.sent,console.info(s),c.next=18;break;case 14:return c.next=16,Object(b.h)(l,i,t);case 16:d=c.sent,console.info(d);case 18:e(Object(u.h)(n,t)),e(Object(u.f)(n,t)),e(Object(u.g)(n,t));case 21:case"end":return c.stop()}}),a)})));return function(n){return i.apply(this,arguments)}}(),[t,e,f,r,l,n])}};e.a=function(n){var e=Object(s.b)(),t=Object(o.m)().account,r=Object(d.e)();return{onUnstake:Object(i.useCallback)(function(){var i=Object(a.a)(c.a.mark((function a(i){var o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(b.l)(r,n,i,t);case 2:o=c.sent,e(Object(u.a)(t)),console.info(o);case 5:case"end":return c.stop()}}),a)})));return function(n){return i.apply(this,arguments)}}(),[t,e,r,n])}}},785:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return le}));var r=t(60),c=t(14),a=t(26),i=t(16),o=t(0),s=t.n(o),u=t(29),b=t(12),d=t.n(b),j=t(3),l=t(66),f=t(50),x=t(683),O=t(712),p=t.n(O),h=t(769),v=t.n(h),m=t(661),g=t(302),k=function(){return Object(o.useContext)(g.a)},w=t(662),y=t(106),C=t(21),S=t(684),z=t(173),D=t(668),N=t(667),A=t(39),F=t(666);function P(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return P=function(){return n},n}function B(){var n=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return B=function(){return n},n}Object(j.e)(f.h)(B()),j.e.div(P());var E=function(){var n=Object(N.d)(),e=Object(N.b)(Object(A.b)()),t=Object(y.c)(),r=k(),a=n?n.minus(e):new D.a(0),i=new D.a(141e21).minus(a);return t&&t[0]&&t[0].CSWAPPerBlock&&new D.a(t[0].CSWAPPerBlock).div(new D.a(10).pow(18)).toNumber(),Object(c.jsx)(f.o,{as:"h3",children:i&&Object(c.jsx)(F.a,{fontSize:"24px",value:Math.max(14504555-r,0),decimals:0,prefix:"Blocks until profit sharing "})})},I=t(4),R=t.n(I),M=t(15),T=t(677);function W(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return W=function(){return n},n}var U=j.e.div(W(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"primary"]})),L=function(n){var e=n.text,t=n.isFinished,r=void 0!==t&&t;return Object(c.jsx)(U,{isFinished:r,children:e})},H=t(663),q=t(674),Y=t(679),_=t(686),J=t(670),Q=t(678),V=t.n(Q);function G(){var n=Object(r.a)(["\n  color: ",";\n"]);return G=function(){return n},n}var X=Object(j.e)(f.D)(G(),(function(n){var e=n.isDisabled,t=n.color,r=n.theme;return e?r.colors.textDisabled:t})),K=function(n){var e=n.value,t=n.fontSize,r=n.color,a=n.decimals,i=n.isDisabled,s=n.unit,u=Object(o.useRef)(0);return Object(o.useEffect)((function(){u.current=e}),[e]),Object(c.jsxs)(X,{bold:!0,color:r,fontSize:t,isDisabled:i,children:[Object(c.jsx)(V.a,{start:u.current,end:e,decimals:a,duration:1,separator:","}),e&&s&&Object(c.jsx)("span",{children:s})]})};K.defaultProps={fontSize:"32px",isDisabled:!1,color:"text",decimals:3};var Z=K,$=t(665),nn=t(669),en=function(n){var e=n.max,t=n.onConfirm,r=n.onDismiss,i=n.tokenName,s=void 0===i?"":i,u=Object(o.useState)(""),b=Object(a.a)(u,2),d=b[0],j=b[1],l=Object(o.useState)(!1),x=Object(a.a)(l,2),O=x[0],p=x[1],h=Object(m.a)(),v=Object(o.useMemo)((function(){return Object(w.b)(e)}),[e]),g=Object(o.useCallback)((function(n){j(n.currentTarget.value)}),[j]),k=Object(o.useCallback)((function(){j(v)}),[v,j]);return Object(c.jsxs)(f.x,{title:"".concat(h(316,"Deposit")," ").concat(s," Tokens"),onDismiss:r,children:[Object(c.jsx)(nn.a,{value:d,onSelectMax:k,onChange:g,max:v,symbol:s}),Object(c.jsxs)($.a,{children:[Object(c.jsx)(f.d,{fullWidth:!0,variant:"secondary",onClick:r,children:h(462,"Cancel")}),Object(c.jsx)(f.d,{fullWidth:!0,disabled:O,onClick:Object(M.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.next=3,t(d);case 3:p(!1),r();case 5:case"end":return n.stop()}}),n)}))),children:O?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})},tn=function(n){var e=n.onConfirm,t=n.onDismiss,r=n.max,i=n.tokenName,s=void 0===i?"":i,u=Object(o.useState)(""),b=Object(a.a)(u,2),d=b[0],j=b[1],l=Object(o.useState)(!1),x=Object(a.a)(l,2),O=x[0],p=x[1],h=Object(m.a)(),v=Object(o.useMemo)((function(){return Object(w.b)(r)}),[r]),g=Object(o.useCallback)((function(n){j(n.currentTarget.value)}),[j]),k=Object(o.useCallback)((function(){j(v)}),[v,j]);return Object(c.jsxs)(f.x,{title:"Withdraw ".concat(s),onDismiss:t,children:[Object(c.jsx)(nn.a,{onSelectMax:k,onChange:g,value:d,max:v,symbol:s}),Object(c.jsxs)($.a,{children:[Object(c.jsx)(f.d,{variant:"secondary",onClick:t,children:h(462,"Cancel")}),Object(c.jsx)(f.d,{disabled:O,onClick:Object(M.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),n.next=3,e(d);case 3:p(!1),t();case 5:case"end":return n.stop()}}),n)}))),children:O?h(488,"Pending Confirmation"):h(464,"Confirm")})]})]})};function rn(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n"]);return rn=function(){return n},n}var cn=function(n){var e=n.earnings,t=n.onConfirm,r=n.onDismiss,i=(n.tokenName,Object(o.useState)(!1)),s=Object(a.a)(i,2),u=s[0],b=s[1],d=Object(m.a)(),j=Object(o.useMemo)((function(){return Object(w.b)(e)}),[e]);return Object(c.jsxs)(f.x,{title:"".concat(d(999,"Compound")," CSWAP Earned"),onDismiss:r,children:[Object(c.jsx)(an,{children:Object(c.jsx)(Z,{value:Number(j)})}),Object(c.jsxs)($.a,{children:[Object(c.jsx)(f.d,{fullWidth:!0,variant:"secondary",onClick:r,children:d(462,"Cancel")}),Object(c.jsx)(f.d,{id:"compound-cake",fullWidth:!0,disabled:u,onClick:Object(M.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.next=3,t(j);case 3:b(!1),r();case 5:case"end":return n.stop()}}),n)}))),children:u?d(488,"Pending Confirmation"):d(464,"Confirm")})]})]})},an=j.e.div(rn());function on(){var n=Object(r.a)(["\n  color: ",";\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.1;\n  margin-bottom: 14px;\n"]);return on=function(){return n},n}var sn=j.e.div(on(),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"text"]}));function un(){var n=Object(r.a)(["\n  background: ",";\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  border-radius: 32px;\n  display: flex;\n  color: ",";\n  box-shadow: ",";\n  flex-direction: column;\n  position: relative;\n"]);return un=function(){return n},n}var bn=j.e.div(un(),(function(n){return n.theme.card.background}),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled":"secondary"]}),(function(n){return n.isActive?"0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4);":"0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)"}));function dn(){var n=Object(r.a)(["\n  color: #00000;\n  font-size: 14px;\n"]);return dn=function(){return n},n}function jn(){var n=Object(r.a)(["\n  color: #00000;\n  font-size: 24px;\n  font-weight: 600;\n  text-transform: uppercase;\n"]);return jn=function(){return n},n}var ln=j.e.div(jn()),fn=j.e.a(dn()),xn=function(n){var e=n.hasBalance;return void 0!==e&&e?Object(c.jsxs)("div",{children:[Object(c.jsx)(ln,{children:"Action Required"}),Object(c.jsx)(fn,{href:" https://pancakeswap.medium.com/urgent-action-required-changes-to-syrup-pools-70b98d7b2541",target:"_blank",children:"What do I need to do?"})]}):Object(c.jsx)("div",{children:Object(c.jsx)(sn,{isFinished:!0,children:"FINISHED"})})},On=t(69);function pn(){var n=Object(r.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"]);return pn=function(){return n},n}function hn(){var n=Object(r.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"]);return hn=function(){return n},n}function vn(){var n=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 0;\n  border-radius: 12px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  border: 2px solid ",";\n  width: 100px;\n  height: 30px;\n  font-size: 14px;\n  padding: 0px;\n"]);return vn=function(){return n},n}var mn,gn=j.e.button(vn(),(function(n){return n.disabled?"#ddd":n.theme.card.background}),(function(n){return n.disabled?"#acaaaf":"#32cad7"}),(function(n){return n.fontSize}),(function(n){return n.size}),(function(n){return n.padding}),(function(n){return n.padding}),(function(n){return n.disabled?"none":void 0}),(function(n){return n.disabled?"#eee":"#33cbd7"})),kn=Object(j.e)(On.b)(hn(),(function(n){return-n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),wn=j.e.a(pn(),(function(n){return-n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),yn=function(n){var e,t,r,a=n.children,i=n.disabled,s=n.href,u=n.onClick,b=n.size,d=n.text,l=n.to,f=Object(o.useContext)(j.a),x=f.colors,O=f.spacing,p=x.background;switch(b){case"sm":t=O[3],e=36,r=14;break;case"lg":t=O[4],e=72,r=16;break;case"md":default:t=O[4],e=56,r=16}var h=Object(o.useMemo)((function(){return l?Object(c.jsx)(kn,{to:l,children:d}):s?Object(c.jsx)(wn,{href:s,target:"__blank",children:d}):d}),[s,d,l]);return Object(c.jsxs)(gn,{boxShadow:undefined,color:p,disabled:i,fontSize:r,onClick:u,padding:t,size:e,children:[a,h]})},Cn=t(42),Sn=t(781),zn=t(782),Dn=t(685);function Nn(){var n=Object(r.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  color: #12aab5;\n"]);return Nn=function(){return n},n}function An(){var n=Object(r.a)(["\n  font-size: 14px;\n"]);return An=function(){return n},n}function Fn(){var n=Object(r.a)(["\n  flex: 1;\n"]);return Fn=function(){return n},n}function Pn(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n"]);return Pn=function(){return n},n}function Bn(){var n=Object(r.a)(["\n  margin-top: 24px;\n"]);return Bn=function(){return n},n}function En(){var n=Object(r.a)(["\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  font-weight: 600;\n  height: 32px;\n  justify-content: center;\n  outline: 0;\n  padding: 0;\n  &:hover {\n    opacity: 0.9;\n  }\n\n  & > svg {\n    margin-left: 4px;\n  }\n"]);return En=function(){return n},n}function In(){var n=Object(r.a)(["\n  border-top: 1px solid ",";\n  color: ",";\n  padding: 24px;\n"]);return In=function(){return n},n}var Rn=(mn={},Object(Cn.a)(mn,C.a.BINANCE,Dn.a),Object(Cn.a)(mn,C.a.CORE,Dn.c),Object(Cn.a)(mn,C.a.COMMUNITY,Dn.b),mn),Mn=j.e.div(In(),(function(n){return n.theme.isDark?"#524B63":"#E9EAEB"}),(function(n){var e=n.isFinished;return n.theme.colors[e?"textDisabled2":"primary2"]})),Tn=j.e.button(En(),(function(n){return n.theme.colors.primary})),Wn=j.e.div(Bn()),Un=j.e.div(Pn()),Ln=j.e.div(Fn()),Hn=j.e.div(An()),qn=(j.e.a(Nn()),function(n){n.projectLink;var e=n.totalStaked,t=n.blocksRemaining,r=n.isFinished,i=n.blocksUntilStart,s=n.poolCategory,u=Object(o.useState)(!1),b=Object(a.a)(u,2),d=b[0],j=b[1],l=Object(m.a)(),f=d?Sn.a:zn.a,x=Rn[s];return Object(c.jsxs)(Mn,{isFinished:r,children:[Object(c.jsxs)(Un,{children:[Object(c.jsx)(Ln,{children:Object(c.jsx)(x,{})}),Object(c.jsxs)(Tn,{onClick:function(){return j(!d)},children:[d?"Hide":"Details"," ",Object(c.jsx)(f,{})]})]}),d&&Object(c.jsxs)(Wn,{children:[Object(c.jsxs)(Un,{style:{marginBottom:"4px"},children:[Object(c.jsx)(Ln,{children:Object(c.jsxs)(Hn,{children:[Object(c.jsx)("span",{role:"img","aria-label":"syrup",children:" "}),l(408,"Total")]})}),Object(c.jsx)(Z,{fontSize:"14px",isDisabled:r,value:Object(w.a)(e)})]}),i>0&&Object(c.jsxs)(Un,{children:[Object(c.jsx)(Ln,{children:Object(c.jsxs)(Hn,{children:[l(411,"Start"),":"]})}),Object(c.jsx)(Z,{fontSize:"14px",isDisabled:r,value:i,decimals:0})]}),0===i&&t>0&&Object(c.jsxs)(Un,{children:[Object(c.jsx)(Ln,{children:Object(c.jsxs)(Hn,{children:[l(410,"End"),":"]})}),Object(c.jsx)(Z,{fontSize:"14px",isDisabled:r,value:t,decimals:0})]})]})]})}),Yn=s.a.memo(qn);function _n(){var n=Object(r.a)(["\n  display: flex;\n  font-size: 14px;\n"]);return _n=function(){return n},n}function Jn(){var n=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"]);return Jn=function(){return n},n}function Qn(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 16px 0;\n  width: 100%;\n  box-sizing: border-box;\n"]);return Vn=function(){return n},n}function Gn(){var n=Object(r.a)(["\n  background-image: url('/images/pool-finished-sash.svg');\n  background-position: top right;\n  background-repeat: not-repeat;\n  height: 135px;\n  position: absolute;\n  right: -24px;\n  top: -24px;\n  width: 135px;\n"]);return Gn=function(){return n},n}function Xn(){var n=Object(r.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"]);return Xn=function(){return n},n}function Kn(){var n=Object(r.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]);return Kn=function(){return n},n}var Zn=Object(j.f)(Kn()),$n=j.e.div(Xn(),Zn),ne=j.e.div(Gn()),ee=j.e.div(Vn()),te=j.e.div(Qn()),re=j.e.div(Jn(),(function(n){return n.theme.spacing[4]}),(function(n){return n.theme.spacing[4]})),ce=j.e.div(_n()),ae=function(n){var e=n.pool,t=e.sousId,r=e.image,i=e.tokenName,s=e.stakingTokenName,u=e.stakingTokenAddress,b=e.projectLink,j=e.harvest,x=e.apy,O=e.tokenDecimals,p=e.poolCategory,h=e.totalStaked,v=e.startBlock,g=e.endBlock,y=e.isFinished,S=e.userData,z=e.stakingLimit,D=(e.depositFee,p===C.a.BINANCE),N=Object(m.a)(),A=Object(H.c)(u),F=Object(l.m)().account,P=k(),B=Object(q.c)(A,t).onApprove,E=Object(Y.b)(t,D).onStake,I=Object(_.b)(t).onUnstake,W=Object(J.c)(t,D).onReward,U=Object(o.useState)(!1),Q=Object(a.a)(U,2),V=Q[0],G=Q[1],X=Object(o.useState)(!1),K=Object(a.a)(X,2),$=K[0],nn=K[1],rn=new d.a((null===S||void 0===S?void 0:S.allowance)||0),an=new d.a((null===S||void 0===S?void 0:S.stakingTokenBalance)||0),on=new d.a((null===S||void 0===S?void 0:S.stakedBalance)||0),un=new d.a((null===S||void 0===S?void 0:S.pendingReward)||0),dn=Math.max(v-P,0),jn=Math.max(g-P,0),ln=s===C.b.SYRUP,fn=(null===on||void 0===on?void 0:on.toNumber())>0,On=!fn&&!rn.toNumber()&&!D,pn=y&&fn,hn=new d.a(z).multipliedBy(new d.a(10).pow(O)),vn=Object(f.H)(Object(c.jsx)(en,{max:z&&an.isGreaterThan(hn)?hn:an,onConfirm:E,tokenName:z?"".concat(s," (").concat(z," max)"):s})),mn=Object(a.a)(vn,1)[0],gn=Object(f.H)(Object(c.jsx)(cn,{earnings:un,onConfirm:E,tokenName:s})),kn=Object(a.a)(gn,1)[0],wn=Object(f.H)(Object(c.jsx)(tn,{max:on,onConfirm:I,tokenName:s})),Cn=Object(a.a)(wn,1)[0],Sn=Object(o.useCallback)(Object(M.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,G(!0),n.next=4,B();case 4:n.sent||G(!1),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])}))),[B,G]);return Object(c.jsxs)(bn,{isActive:pn,isFinished:y&&0!==t,children:["CSWAP"===e.stakingTokenName&&Object(c.jsx)($n,{}),y&&0!==t&&Object(c.jsx)(ne,{}),Object(c.jsxs)("div",{style:{padding:"24px"},children:[Object(c.jsxs)(sn,{isFinished:y&&0!==t,children:[ln&&"[OLD]"," ",i," ",N(348,"Pool")]}),Object(c.jsxs)("div",{style:{marginBottom:"8px",display:"flex",alignItems:"center"},children:[Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)(f.r,{src:"/images/tokens/".concat(r||i,".png"),width:64,height:64,alt:i})}),F&&j&&!ln&&Object(c.jsx)(yn,{disabled:!un.toNumber()||$,text:$?"Collecting":"Harvest",onClick:Object(M.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return nn(!0),n.next=3,W();case 3:nn(!1);case 4:case"end":return n.stop()}}),n)})))})]}),ln?Object(c.jsx)(xn,{hasBalance:fn}):Object(c.jsxs)(te,{children:[Object(c.jsx)(Z,{value:Object(w.a)(un,O),isDisabled:y}),9===t&&F&&j&&Object(c.jsx)(yn,{disabled:!un.toNumber()||$,text:N(999,$?"Compounding":"Compound"),onClick:kn})]}),Object(c.jsx)(L,{isFinished:y&&0!==t,text:"".concat(i," Earned")}),Object(c.jsxs)(f.n,{justifyContent:"space-between",children:[Object(c.jsxs)(f.D,{style:{fontSize:"24px"},children:[N(10001,"Deposit Fee"),":"]}),Object(c.jsxs)(f.D,{bold:!0,style:{fontSize:"24px"},children:[e.depositFee,"%"]})]}),Object(c.jsxs)(ee,{children:[!F&&Object(c.jsx)(T.a,{}),F&&(On&&!ln?Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)(f.d,{disabled:y||V,onClick:Sn,fullWidth:!0,children:"Approve ".concat(s)})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f.d,{disabled:on.eq(new d.a(0))||$,onClick:ln?Object(M.a)(R.a.mark((function n(){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return nn(!0),n.next=3,I("0");case 3:nn(!1);case 4:case"end":return n.stop()}}),n)}))):Cn,children:"Unstake ".concat(s)}),Object(c.jsx)(re,{}),!ln&&Object(c.jsx)(f.q,{disabled:y&&0!==t,onClick:mn,children:Object(c.jsx)(f.a,{color:"background"})})]}))]}),Object(c.jsxs)(ce,{children:[Object(c.jsxs)("div",{style:{flex:1},children:[N(736,"APR"),":"]}),y||ln||!x||(null===x||void 0===x?void 0:x.isNaN())||!(null===x||void 0===x?void 0:x.isFinite())?"-":Object(c.jsx)(Z,{fontSize:"14px",isDisabled:y,value:null===x||void 0===x?void 0:x.toNumber(),decimals:2,unit:"%"})]}),Object(c.jsxs)(ce,{children:[Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("span",{role:"img","aria-label":s,children:Object(c.jsxs)("div",{style:{flex:1},children:[N(384,"Your Stake"),":",Object(c.jsx)(f.r,{src:"/images/tokens/".concat(s,".png"),width:20,height:20,alt:"CSWAP"})," "]})})}),Object(c.jsx)(Z,{fontSize:"14px",isDisabled:y,value:Object(w.a)(on)})]})]}),Object(c.jsx)(Yn,{projectLink:b,totalStaked:h,blocksRemaining:jn,isFinished:y,blocksUntilStart:dn,poolCategory:p})]})};function ie(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return ie=function(){return n},n}var oe=function(){var n=Object(u.g)(),e=n.url,t=n.isExact,r=Object(m.a)();return Object(c.jsx)(se,{children:Object(c.jsxs)(f.e,{activeIndex:t?0:1,size:"sm",variant:"subtle",children:[Object(c.jsx)(f.f,{as:On.b,to:"".concat(e),children:r(999,"Active")}),Object(c.jsx)(f.f,{as:On.b,to:"".concat(e,"/history"),children:r(999,"Inactive")})]})})},se=j.e.div(ie());function ue(){var n=Object(r.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"]);return ue=function(){return n},n}var be=j.e.div(ue(),(function(n){return n.theme.colors.textSubtle}));function de(){var n=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 250px;\n  padding: 48px 0;\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    font-size: 16px;\n    li {\n      margin-bottom: 4px;\n    }\n  }\n  img {\n    height: auto;\n    max-width: 100%;\n  }\n  @media (min-width: 576px) {\n    grid-template-columns: 1fr 1fr;\n    margin: 0;\n    max-width: none;\n  }\n"]);return de=function(){return n},n}var je=j.e.div(de(),(function(n){return n.theme.colors.primary})),le=function(){var n=Object(u.g)().path,e=Object(m.a)(),t=Object(l.m)().account,r=Object(y.c)(),o=Object(y.e)(t),s=Object(y.f)(),b=k(),j=o.map((function(n){var e=n.poolCategory===C.a.BINANCE,t=r.find((function(e){return e.tokenSymbol===n.tokenName})),c=r.find((function(e){return e.tokenSymbol===n.stakingTokenName})),a=e?new d.a(1):new d.a(null===c||void 0===c?void 0:c.tokenPriceVsQuote),o=function(n,e,t){var r=new d.a(e);return"BNB"===n?new d.a(1):e&&t===C.b.BUSD?r.div(s):r}(n.tokenName,null===t||void 0===t?void 0:t.tokenPriceVsQuote,null===t||void 0===t?void 0:t.quoteTokenSymbol).times(n.tokenPerBlock).times(x.a),u=a.times(Object(w.a)(n.totalStaked)),j=o.div(u).times(100);return Object(i.a)(Object(i.a)({},n),{},{isFinished:0!==n.sousId&&(n.isFinished||b>n.endBlock),apy:j})})),O=v()(j,(function(n){return n.isFinished})),h=Object(a.a)(O,2),g=h[0],D=h[1];return Object(c.jsxs)(z.a,{children:[Object(c.jsxs)(je,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(f.o,{as:"h1",size:"xxl",mb:"16px",children:e(282,"Profit Sharing Pool")}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Stake CSWAP to revieve dividend payouts."}),Object(c.jsx)("li",{children:"You can unstake at any time."}),Object(c.jsx)("li",{children:"Dividends are distributed linearly over the week."})]})]}),Object(c.jsx)("img",{src:"/images/syrup.png",alt:"SYRUP POOL icon",width:410,height:191})]}),Object(c.jsx)(E,{}),Object(c.jsx)("br",{}),Object(c.jsx)(oe,{}),Object(c.jsx)(be,{}),Object(c.jsxs)(S.a,{children:[Object(c.jsx)(u.a,{exact:!0,path:"".concat(n),children:Object(c.jsx)(c.Fragment,{children:p()(D,["sortOrder"]).map((function(n){return Object(c.jsx)(ae,{pool:n},n.sousId)}))})}),Object(c.jsx)(u.a,{path:"".concat(n,"/history"),children:p()(g,["sortOrder"]).map((function(n){return Object(c.jsx)(ae,{pool:n},n.sousId)}))})]})]})}}}]);
//# sourceMappingURL=8.91088935.chunk.js.map
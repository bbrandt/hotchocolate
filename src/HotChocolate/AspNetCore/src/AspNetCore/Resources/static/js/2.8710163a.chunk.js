(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[2],{490:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(387),i=function(){function t(e,n){void 0===n&&(n=t.now),this.SchedulerAction=e,this.now=n}return t.prototype.schedule=function(t,e,n){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(n,e)},t.now=function(){return Date.now()},t}(),o=function(t){function e(n,r){void 0===r&&(r=i.now);var o=t.call(this,n,(function(){return e.delegate&&e.delegate!==o?e.delegate.now():r()}))||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return r.a(e,t),e.prototype.schedule=function(n,r,i){return void 0===r&&(r=0),e.delegate&&e.delegate!==this?e.delegate.schedule(n,r,i):t.prototype.schedule.call(this,n,r,i)},e.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var n;this.active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}},e}(i)},491:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(387),i=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r.pending=!1,r}return r.a(e,t),e.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(r,this.id,e),this},e.prototype.requestAsyncId=function(t,e,n){return void 0===n&&(n=0),setInterval(t.flush.bind(t,this),n)},e.prototype.recycleAsyncId=function(t,e,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return e;clearInterval(e)},e.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},e.prototype._execute=function(t,e){var n=!1,r=void 0;try{this.work(t)}catch(i){n=!0,r=!!i&&i||new Error(i)}if(n)return this.unsubscribe(),r},e.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,n=e.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},e}(function(t){function e(e,n){return t.call(this)||this}return r.a(e,t),e.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},e}(n(410).a))},540:function(t,e){var n="undefined"!==typeof requestIdleCallback;t.exports=n?requestIdleCallback:function(t){return setTimeout((function(){var e=Date.now();t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},t.exports.cancelIdleCallback=n?cancelIdleCallback:clearTimeout},621:function(t,e,n){"use strict";n.d(e,"a",(function(){return J}));var r,i=n(387),o=n(491),u=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r}return i.a(e,t),e.prototype.schedule=function(e,n){return void 0===n&&(n=0),n>0?t.prototype.schedule.call(this,e,n):(this.delay=n,this.state=e,this.scheduler.flush(this),this)},e.prototype.execute=function(e,n){return n>0||this.closed?t.prototype.execute.call(this,e,n):this._execute(e,n)},e.prototype.requestAsyncId=function(e,n,r){return void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0?t.prototype.requestAsyncId.call(this,e,n,r):e.flush(this)},e}(o.a),c=n(490),s=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.a(e,t),e}(c.a))(u),a=n(606),l=n(545),h=n(397),f=n(535),d=n(561),p=n(586);r||(r={});var y=function(){function t(t,e,n){this.kind=t,this.value=e,this.error=n,this.hasValue="N"===t}return t.prototype.observe=function(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}},t.prototype.do=function(t,e,n){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return n&&n()}},t.prototype.accept=function(t,e,n){return t&&"function"===typeof t.next?this.observe(t):this.do(t,e,n)},t.prototype.toObservable=function(){switch(this.kind){case"N":return Object(d.a)(this.value);case"E":return Object(p.a)(this.error);case"C":return Object(f.b)()}throw new Error("unexpected notification kind value")},t.createNext=function(e){return"undefined"!==typeof e?new t("N",e):t.undefinedValueNotification},t.createError=function(e){return new t("E",void 0,e)},t.createComplete=function(){return t.completeNotification},t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t}();function v(t,e){return void 0===e&&(e=0),function(n){return n.lift(new b(t,e))}}var b=function(){function t(t,e){void 0===e&&(e=0),this.scheduler=t,this.delay=e}return t.prototype.call=function(t,e){return e.subscribe(new w(t,this.scheduler,this.delay))},t}(),w=function(t){function e(e,n,r){void 0===r&&(r=0);var i=t.call(this,e)||this;return i.scheduler=n,i.delay=r,i}return i.a(e,t),e.dispatch=function(t){var e=t.notification,n=t.destination;e.observe(n),this.unsubscribe()},e.prototype.scheduleMessage=function(t){this.destination.add(this.scheduler.schedule(e.dispatch,this.delay,new m(t,this.destination)))},e.prototype._next=function(t){this.scheduleMessage(y.createNext(t))},e.prototype._error=function(t){this.scheduleMessage(y.createError(t)),this.unsubscribe()},e.prototype._complete=function(){this.scheduleMessage(y.createComplete()),this.unsubscribe()},e}(h.a),m=function(){return function(t,e){this.notification=t,this.destination=e}}(),g=n(520),_=n(585),O=n(396),I=1,k=function(){return Promise.resolve()}(),x={};function j(t){return t in x&&(delete x[t],!0)}var E=function(t){var e=I++;return x[e]=!0,k.then((function(){return j(e)&&t()})),e},A=function(t){j(t)},N=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.scheduler=e,r.work=n,r}return i.a(e,t),e.prototype.requestAsyncId=function(e,n,r){return void 0===r&&(r=0),null!==r&&r>0?t.prototype.requestAsyncId.call(this,e,n,r):(e.actions.push(this),e.scheduled||(e.scheduled=E(e.flush.bind(e,null))))},e.prototype.recycleAsyncId=function(e,n,r){if(void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0)return t.prototype.recycleAsyncId.call(this,e,n,r);0===e.actions.length&&(A(n),e.scheduled=void 0)},e}(o.a),T=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.a(e,t),e.prototype.flush=function(t){this.active=!0,this.scheduled=void 0;var e,n=this.actions,r=-1,i=n.length;t=t||n.shift();do{if(e=t.execute(t.state,t.delay))break}while(++r<i&&(t=n.shift()));if(this.active=!1,e){for(;++r<i&&(t=n.shift());)t.unsubscribe();throw e}},e}(c.a))(N),C=n(464);var P=function(t){function e(e,n,r){void 0===n&&(n=0),void 0===r&&(r=T);var i,o=t.call(this)||this;return o.source=e,o.delayTime=n,o.scheduler=r,i=n,(Object(C.a)(i)||!(i-parseFloat(i)+1>=0)||n<0)&&(o.delayTime=0),r&&"function"===typeof r.schedule||(o.scheduler=T),o}return i.a(e,t),e.create=function(t,n,r){return void 0===n&&(n=0),void 0===r&&(r=T),new e(t,n,r)},e.dispatch=function(t){var e=t.source,n=t.subscriber;return this.add(e.subscribe(n))},e.prototype._subscribe=function(t){var n=this.delayTime,r=this.source;return this.scheduler.schedule(e.dispatch,n,{source:r,subscriber:t})},e}(O.a);function S(t,e){return void 0===e&&(e=0),function(n){return n.lift(new q(t,e))}}var q=function(){function t(t,e){this.scheduler=t,this.delay=e}return t.prototype.call=function(t,e){return new P(e,this.delay,this.scheduler).subscribe(t)},t}(),D=n(616),M=function(t,e){return t===e||"function"===typeof e&&t===e.toString()},V=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return t.pipe(Object(D.a)((function(t){var n=t.type,r=e.length;if(1===r)return M(n,e[0]);for(var i=0;i<r;i++)if(M(n,e[i]))return!0;return!1})))}},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var R=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.source=t,n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),F(e,null,[{key:"of",value:function(){return new this(d.a.apply(void 0,arguments))}},{key:"from",value:function(t,e){return new this(Object(l.a)(t,e))}}]),F(e,[{key:"lift",value:function(t){var n=new e(this);return n.operator=t,n}},{key:"ofType",value:function(){return V.apply(void 0,arguments)(this)}}]),e}(O.a);var Y=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,(function(t){var e=r.__notifier.subscribe(t);return e&&!e.closed&&t.next(r.value),e})));return r.value=n,r.__notifier=new a.a,r.__subscription=t.subscribe((function(t){t!==r.value&&(r.value=t,r.__notifier.next(t))})),r}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(O.a);function J(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=s.constructor,n=new e(s.SchedulerAction);var r=new a.a,i=void 0,o=function(e){i=e;var o=(new a.a).pipe(v(n)),u=(new a.a).pipe(v(n)),c=new R(o),s=new Y(u,i.getState());return r.pipe(Object(g.a)((function(e){var n="dependencies"in t?e(c,s,t.dependencies):e(c,s);if(!n)throw new TypeError('Your root Epic "'+(e.name||"<anonymous>")+"\" does not return a stream. Double check you're not missing a return statement!");return n})),Object(_.a)((function(t){return Object(l.a)(t).pipe(S(n),v(n))}))).subscribe(i.dispatch),function(t){return function(e){var n=t(e);return u.next(i.getState()),o.next(e),n}}};return o.run=function(t){r.next(t)},o}},627:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(396),i=n(468),o=n(585),u=n(519);function c(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),Object(o.a)(u.a,t)}var s=n(469);function a(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Number.POSITIVE_INFINITY,o=null,u=t[t.length-1];return Object(i.a)(u)?(o=t.pop(),t.length>1&&"number"===typeof t[t.length-1]&&(n=t.pop())):"number"===typeof u&&(n=t.pop()),null===o&&1===t.length&&t[0]instanceof r.a?t[0]:c(n)(Object(s.a)(t,o))}function l(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var h=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return a.apply(void 0,l(e.map((function(t){var e=t.apply(void 0,n);if(!e)throw new TypeError('combineEpics: one of the provided Epics "'+(t.name||"<anonymous>")+"\" does not return a stream. Double check you're not missing a return statement!");return e}))))};try{Object.defineProperty(r,"name",{value:"combineEpics("+e.map((function(t){return t.name||"<anonymous>"})).join(", ")+")"})}catch(i){}return r}}}]);
'use strict';
(self.webpackChunkenglish_learning_fe = self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    826: () => {
      function gn(e, n) {
        return Object.is(e, n);
      }
      let F2 = null,
        U3 = !1,
        H3 = 1;
      const ie = Symbol('SIGNAL');
      function W(e) {
        const n = F2;
        return (F2 = e), n;
      }
      const Sc = {
        version: 0,
        lastCleanEpoch: 0,
        dirty: !1,
        producerNode: void 0,
        producerLastReadVersion: void 0,
        producerIndexOfThis: void 0,
        nextProducerIndex: 0,
        liveConsumerNode: void 0,
        liveConsumerIndexOfThis: void 0,
        consumerAllowSignalWrites: !1,
        consumerIsAlwaysLive: !1,
        producerMustRecompute: () => !1,
        producerRecomputeValue: () => {},
        consumerMarkedDirty: () => {},
        consumerOnSignalRead: () => {},
      };
      function bo(e) {
        if (U3) throw new Error('');
        if (null === F2) return;
        F2.consumerOnSignalRead(e);
        const n = F2.nextProducerIndex++;
        Tc(F2),
          n < F2.producerNode.length &&
            F2.producerNode[n] !== e &&
            Cn(F2) &&
            Ac(F2.producerNode[n], F2.producerIndexOfThis[n]),
          F2.producerNode[n] !== e &&
            ((F2.producerNode[n] = e),
            (F2.producerIndexOfThis[n] = Cn(F2) ? G9(e, F2, n) : 0)),
          (F2.producerLastReadVersion[n] = e.version);
      }
      function j9(e) {
        if ((!Cn(e) || e.dirty) && (e.dirty || e.lastCleanEpoch !== H3)) {
          if (!e.producerMustRecompute(e) && !Do(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = H3);
          e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = H3);
        }
      }
      function U9(e) {
        if (void 0 === e.liveConsumerNode) return;
        const n = U3;
        U3 = !0;
        try {
          for (const t of e.liveConsumerNode) t.dirty || $9(t);
        } finally {
          U3 = n;
        }
      }
      function H9() {
        return !1 !== F2?.consumerAllowSignalWrites;
      }
      function $9(e) {
        (e.dirty = !0), U9(e), e.consumerMarkedDirty?.(e);
      }
      function Ic(e) {
        return e && (e.nextProducerIndex = 0), W(e);
      }
      function wo(e, n) {
        if (
          (W(n),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (Cn(e))
            for (let t = e.nextProducerIndex; t < e.producerNode.length; t++)
              Ac(e.producerNode[t], e.producerIndexOfThis[t]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function Do(e) {
        Tc(e);
        for (let n = 0; n < e.producerNode.length; n++) {
          const t = e.producerNode[n],
            c = e.producerLastReadVersion[n];
          if (c !== t.version || (j9(t), c !== t.version)) return !0;
        }
        return !1;
      }
      function Eo(e) {
        if ((Tc(e), Cn(e)))
          for (let n = 0; n < e.producerNode.length; n++)
            Ac(e.producerNode[n], e.producerIndexOfThis[n]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
      }
      function G9(e, n, t) {
        if ((q9(e), 0 === e.liveConsumerNode.length && W9(e)))
          for (let c = 0; c < e.producerNode.length; c++)
            e.producerIndexOfThis[c] = G9(e.producerNode[c], e, c);
        return e.liveConsumerIndexOfThis.push(t), e.liveConsumerNode.push(n) - 1;
      }
      function Ac(e, n) {
        if ((q9(e), 1 === e.liveConsumerNode.length && W9(e)))
          for (let c = 0; c < e.producerNode.length; c++)
            Ac(e.producerNode[c], e.producerIndexOfThis[c]);
        const t = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[n] = e.liveConsumerNode[t]),
          (e.liveConsumerIndexOfThis[n] = e.liveConsumerIndexOfThis[t]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          n < e.liveConsumerNode.length)
        ) {
          const c = e.liveConsumerIndexOfThis[n],
            s = e.liveConsumerNode[n];
          Tc(s), (s.producerIndexOfThis[c] = n);
        }
      }
      function Cn(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function Tc(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      function q9(e) {
        (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
      }
      function W9(e) {
        return void 0 !== e.producerNode;
      }
      const No = Symbol('UNSET'),
        xo = Symbol('COMPUTING'),
        kc = Symbol('ERRORED'),
        DI = {
          ...Sc,
          value: No,
          dirty: !0,
          error: null,
          equal: gn,
          producerMustRecompute: e => e.value === No || e.value === xo,
          producerRecomputeValue(e) {
            if (e.value === xo) throw new Error('Detected cycle in computations.');
            const n = e.value;
            e.value = xo;
            const t = Ic(e);
            let c;
            try {
              c = e.computation();
            } catch (s) {
              (c = kc), (e.error = s);
            } finally {
              wo(e, t);
            }
            n !== No && n !== kc && c !== kc && e.equal(n, c)
              ? (e.value = n)
              : ((e.value = c), e.version++);
          },
        };
      let Y9 = function EI() {
        throw new Error();
      };
      function Z9() {
        Y9();
      }
      let Rc = null;
      function Q9(e, n) {
        H9() || Z9(),
          e.equal(e.value, n) ||
            ((e.value = n),
            (function AI(e) {
              e.version++,
                (function bI() {
                  H3++;
                })(),
                U9(e),
                Rc?.();
            })(e));
      }
      const II = { ...Sc, equal: gn, value: void 0 };
      function b2(e) {
        return 'function' == typeof e;
      }
      function So(e) {
        const t = e(c => {
          Error.call(c), (c.stack = new Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t
        );
      }
      const Io = So(
        e =>
          function (t) {
            e(this),
              (this.message = t
                ? `${t.length} errors occurred during unsubscription:\n${t
                    .map((c, s) => `${s + 1}) ${c.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t);
          },
      );
      function Oc(e, n) {
        if (e) {
          const t = e.indexOf(n);
          0 <= t && e.splice(t, 1);
        }
      }
      class i1 {
        constructor(n) {
          (this.initialTeardown = n),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let n;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: t } = this;
            if (t)
              if (((this._parentage = null), Array.isArray(t)))
                for (const r of t) r.remove(this);
              else t.remove(this);
            const { initialTeardown: c } = this;
            if (b2(c))
              try {
                c();
              } catch (r) {
                n = r instanceof Io ? r.errors : [r];
              }
            const { _finalizers: s } = this;
            if (s) {
              this._finalizers = null;
              for (const r of s)
                try {
                  eu(r);
                } catch (o) {
                  (n = n ?? []), o instanceof Io ? (n = [...n, ...o.errors]) : n.push(o);
                }
            }
            if (n) throw new Io(n);
          }
        }
        add(n) {
          var t;
          if (n && n !== this)
            if (this.closed) eu(n);
            else {
              if (n instanceof i1) {
                if (n.closed || n._hasParent(this)) return;
                n._addParent(this);
              }
              (this._finalizers =
                null !== (t = this._finalizers) && void 0 !== t ? t : []).push(n);
            }
        }
        _hasParent(n) {
          const { _parentage: t } = this;
          return t === n || (Array.isArray(t) && t.includes(n));
        }
        _addParent(n) {
          const { _parentage: t } = this;
          this._parentage = Array.isArray(t) ? (t.push(n), t) : t ? [t, n] : n;
        }
        _removeParent(n) {
          const { _parentage: t } = this;
          t === n ? (this._parentage = null) : Array.isArray(t) && Oc(t, n);
        }
        remove(n) {
          const { _finalizers: t } = this;
          t && Oc(t, n), n instanceof i1 && n._removeParent(this);
        }
      }
      i1.EMPTY = (() => {
        const e = new i1();
        return (e.closed = !0), e;
      })();
      const X9 = i1.EMPTY;
      function J9(e) {
        return (
          e instanceof i1 ||
          (e && 'closed' in e && b2(e.remove) && b2(e.add) && b2(e.unsubscribe))
        );
      }
      function eu(e) {
        b2(e) ? e() : e.unsubscribe();
      }
      const Wt = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Fc = {
          setTimeout(e, n, ...t) {
            const { delegate: c } = Fc;
            return c?.setTimeout ? c.setTimeout(e, n, ...t) : setTimeout(e, n, ...t);
          },
          clearTimeout(e) {
            const { delegate: n } = Fc;
            return (n?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function tu(e) {
        Fc.setTimeout(() => {
          const { onUnhandledError: n } = Wt;
          if (!n) throw e;
          n(e);
        });
      }
      function Pc() {}
      const kI = Ao('C', void 0, void 0);
      function Ao(e, n, t) {
        return { kind: e, value: n, error: t };
      }
      let Yt = null;
      function Vc(e) {
        if (Wt.useDeprecatedSynchronousErrorHandling) {
          const n = !Yt;
          if ((n && (Yt = { errorThrown: !1, error: null }), e(), n)) {
            const { errorThrown: t, error: c } = Yt;
            if (((Yt = null), t)) throw c;
          }
        } else e();
      }
      class To extends i1 {
        constructor(n) {
          super(),
            (this.isStopped = !1),
            n ? ((this.destination = n), J9(n) && n.add(this)) : (this.destination = jI);
        }
        static create(n, t, c) {
          return new Ro(n, t, c);
        }
        next(n) {
          this.isStopped
            ? Oo(
                (function OI(e) {
                  return Ao('N', e, void 0);
                })(n),
                this,
              )
            : this._next(n);
        }
        error(n) {
          this.isStopped
            ? Oo(
                (function RI(e) {
                  return Ao('E', void 0, e);
                })(n),
                this,
              )
            : ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped ? Oo(kI, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
        }
        _next(n) {
          this.destination.next(n);
        }
        _error(n) {
          try {
            this.destination.error(n);
          } finally {
            this.unsubscribe();
          }
        }
        _complete() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }
      }
      const PI = Function.prototype.bind;
      function ko(e, n) {
        return PI.call(e, n);
      }
      class VI {
        constructor(n) {
          this.partialObserver = n;
        }
        next(n) {
          const { partialObserver: t } = this;
          if (t.next)
            try {
              t.next(n);
            } catch (c) {
              Bc(c);
            }
        }
        error(n) {
          const { partialObserver: t } = this;
          if (t.error)
            try {
              t.error(n);
            } catch (c) {
              Bc(c);
            }
          else Bc(n);
        }
        complete() {
          const { partialObserver: n } = this;
          if (n.complete)
            try {
              n.complete();
            } catch (t) {
              Bc(t);
            }
        }
      }
      class Ro extends To {
        constructor(n, t, c) {
          let s;
          if ((super(), b2(n) || !n))
            s = { next: n ?? void 0, error: t ?? void 0, complete: c ?? void 0 };
          else {
            let r;
            this && Wt.useDeprecatedNextContext
              ? ((r = Object.create(n)),
                (r.unsubscribe = () => this.unsubscribe()),
                (s = {
                  next: n.next && ko(n.next, r),
                  error: n.error && ko(n.error, r),
                  complete: n.complete && ko(n.complete, r),
                }))
              : (s = n);
          }
          this.destination = new VI(s);
        }
      }
      function Bc(e) {
        Wt.useDeprecatedSynchronousErrorHandling
          ? (function FI(e) {
              Wt.useDeprecatedSynchronousErrorHandling &&
                Yt &&
                ((Yt.errorThrown = !0), (Yt.error = e));
            })(e)
          : tu(e);
      }
      function Oo(e, n) {
        const { onStoppedNotification: t } = Wt;
        t && Fc.setTimeout(() => t(e, n));
      }
      const jI = {
          closed: !0,
          next: Pc,
          error: function BI(e) {
            throw e;
          },
          complete: Pc,
        },
        Fo = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function Ye(e) {
        return e;
      }
      function nu(e) {
        return 0 === e.length
          ? Ye
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce((c, s) => s(c), t);
            };
      }
      let O2 = (() => {
        class e {
          constructor(t) {
            t && (this._subscribe = t);
          }
          lift(t) {
            const c = new e();
            return (c.source = this), (c.operator = t), c;
          }
          subscribe(t, c, s) {
            const r = (function $I(e) {
              return (
                (e && e instanceof To) ||
                ((function HI(e) {
                  return e && b2(e.next) && b2(e.error) && b2(e.complete);
                })(e) &&
                  J9(e))
              );
            })(t)
              ? t
              : new Ro(t, c, s);
            return (
              Vc(() => {
                const { operator: o, source: i } = this;
                r.add(o ? o.call(r, i) : i ? this._subscribe(r) : this._trySubscribe(r));
              }),
              r
            );
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (c) {
              t.error(c);
            }
          }
          forEach(t, c) {
            return new (c = cu(c))((s, r) => {
              const o = new Ro({
                next: i => {
                  try {
                    t(i);
                  } catch (a) {
                    r(a), o.unsubscribe();
                  }
                },
                error: r,
                complete: s,
              });
              this.subscribe(o);
            });
          }
          _subscribe(t) {
            var c;
            return null === (c = this.source) || void 0 === c ? void 0 : c.subscribe(t);
          }
          [Fo]() {
            return this;
          }
          pipe(...t) {
            return nu(t)(this);
          }
          toPromise(t) {
            return new (t = cu(t))((c, s) => {
              let r;
              this.subscribe(
                o => (r = o),
                o => s(o),
                () => c(r),
              );
            });
          }
        }
        return (e.create = n => new e(n)), e;
      })();
      function cu(e) {
        var n;
        return null !== (n = e ?? Wt.Promise) && void 0 !== n ? n : Promise;
      }
      const GI = So(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let h1 = (() => {
        class e extends O2 {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(t) {
            const c = new su(this, this);
            return (c.operator = t), c;
          }
          _throwIfClosed() {
            if (this.closed) throw new GI();
          }
          next(t) {
            Vc(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const c of this.currentObservers) c.next(t);
              }
            });
          }
          error(t) {
            Vc(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = t);
                const { observers: c } = this;
                for (; c.length; ) c.shift().error(t);
              }
            });
          }
          complete() {
            Vc(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: t } = this;
                for (; t.length; ) t.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var t;
            return (
              (null === (t = this.observers) || void 0 === t ? void 0 : t.length) > 0
            );
          }
          _trySubscribe(t) {
            return this._throwIfClosed(), super._trySubscribe(t);
          }
          _subscribe(t) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(t),
              this._innerSubscribe(t)
            );
          }
          _innerSubscribe(t) {
            const { hasError: c, isStopped: s, observers: r } = this;
            return c || s
              ? X9
              : ((this.currentObservers = null),
                r.push(t),
                new i1(() => {
                  (this.currentObservers = null), Oc(r, t);
                }));
          }
          _checkFinalizedStatuses(t) {
            const { hasError: c, thrownError: s, isStopped: r } = this;
            c ? t.error(s) : r && t.complete();
          }
          asObservable() {
            const t = new O2();
            return (t.source = this), t;
          }
        }
        return (e.create = (n, t) => new su(n, t)), e;
      })();
      class su extends h1 {
        constructor(n, t) {
          super(), (this.destination = n), (this.source = t);
        }
        next(n) {
          var t, c;
          null ===
            (c = null === (t = this.destination) || void 0 === t ? void 0 : t.next) ||
            void 0 === c ||
            c.call(t, n);
        }
        error(n) {
          var t, c;
          null ===
            (c = null === (t = this.destination) || void 0 === t ? void 0 : t.error) ||
            void 0 === c ||
            c.call(t, n);
        }
        complete() {
          var n, t;
          null ===
            (t = null === (n = this.destination) || void 0 === n ? void 0 : n.complete) ||
            void 0 === t ||
            t.call(n);
        }
        _subscribe(n) {
          var t, c;
          return null !==
            (c = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(n)) &&
            void 0 !== c
            ? c
            : X9;
        }
      }
      class n1 extends h1 {
        constructor(n) {
          super(), (this._value = n);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(n) {
          const t = super._subscribe(n);
          return !t.closed && n.next(this._value), t;
        }
        getValue() {
          const { hasError: n, thrownError: t, _value: c } = this;
          if (n) throw t;
          return this._throwIfClosed(), c;
        }
        next(n) {
          super.next((this._value = n));
        }
      }
      function ru(e) {
        return b2(e?.lift);
      }
      function U2(e) {
        return n => {
          if (ru(n))
            return n.lift(function (t) {
              try {
                return e(t, this);
              } catch (c) {
                this.error(c);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      function k2(e, n, t, c, s) {
        return new qI(e, n, t, c, s);
      }
      class qI extends To {
        constructor(n, t, c, s, r, o) {
          super(n),
            (this.onFinalize = r),
            (this.shouldUnsubscribe = o),
            (this._next = t
              ? function (i) {
                  try {
                    t(i);
                  } catch (a) {
                    n.error(a);
                  }
                }
              : super._next),
            (this._error = s
              ? function (i) {
                  try {
                    s(i);
                  } catch (a) {
                    n.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = c
              ? function () {
                  try {
                    c();
                  } catch (i) {
                    n.error(i);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var n;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: t } = this;
            super.unsubscribe(),
              !t && (null === (n = this.onFinalize) || void 0 === n || n.call(this));
          }
        }
      }
      function s2(e, n) {
        return U2((t, c) => {
          let s = 0;
          t.subscribe(
            k2(c, r => {
              c.next(e.call(n, r, s++));
            }),
          );
        });
      }
      typeof navigator < 'u' && navigator,
        typeof navigator < 'u' && !/Opera/.test(navigator.userAgent) && navigator,
        typeof navigator < 'u' && (/MSIE/.test(navigator.userAgent) || navigator),
        typeof navigator < 'u' && !/Opera|WebKit/.test(navigator.userAgent) && navigator,
        typeof navigator < 'u' && navigator;
      const wu = 'https://g.co/ng/security#xss';
      class L extends Error {
        constructor(n, t) {
          super(
            (function $3(e, n) {
              return `NG0${Math.abs(e)}${n ? ': ' + n : ''}`;
            })(n, t),
          ),
            (this.code = n);
        }
      }
      function Ze(e) {
        return { toString: e }.toString();
      }
      const q3 = '__parameters__';
      function Y3(e, n, t) {
        return Ze(() => {
          const c = (function Go(e) {
            return function (...t) {
              if (e) {
                const c = e(...t);
                for (const s in c) this[s] = c[s];
              }
            };
          })(n);
          function s(...r) {
            if (this instanceof s) return c.apply(this, r), this;
            const o = new s(...r);
            return (i.annotation = o), i;
            function i(a, l, u) {
              const f = a.hasOwnProperty(q3)
                ? a[q3]
                : Object.defineProperty(a, q3, { value: [] })[q3];
              for (; f.length <= u; ) f.push(null);
              return (f[u] = f[u] || []).push(o), a;
            }
          }
          return (
            t && (s.prototype = Object.create(t.prototype)),
            (s.prototype.ngMetadataName = e),
            (s.annotationCls = s),
            s
          );
        });
      }
      const w2 = globalThis;
      function d2(e) {
        for (let n in e) if (e[n] === d2) return n;
        throw Error('Could not find renamed property on target object.');
      }
      function qA(e, n) {
        for (const t in n) n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]);
      }
      function Z2(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Z2).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const n = e.toString();
        if (null == n) return '' + n;
        const t = n.indexOf('\n');
        return -1 === t ? n : n.substring(0, t);
      }
      function qo(e, n) {
        return null == e || '' === e
          ? null === n
            ? ''
            : n
          : null == n || '' === n
          ? e
          : e + ' ' + n;
      }
      const WA = d2({ __forward_ref__: d2 });
      function v2(e) {
        return (
          (e.__forward_ref__ = v2),
          (e.toString = function () {
            return Z2(this());
          }),
          e
        );
      }
      function F(e) {
        return Gc(e) ? e() : e;
      }
      function Gc(e) {
        return 'function' == typeof e && e.hasOwnProperty(WA) && e.__forward_ref__ === v2;
      }
      function w(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Qt(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function qc(e) {
        return xu(e, Yc) || xu(e, Su);
      }
      function xu(e, n) {
        return e.hasOwnProperty(n) ? e[n] : null;
      }
      function Wc(e) {
        return e && (e.hasOwnProperty(Wo) || e.hasOwnProperty(JA)) ? e[Wo] : null;
      }
      const Yc = d2({ ɵprov: d2 }),
        Wo = d2({ ɵinj: d2 }),
        Su = d2({ ngInjectableDef: d2 }),
        JA = d2({ ngInjectorDef: d2 });
      class _ {
        constructor(n, t) {
          (this._desc = n),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = w({
                  token: this,
                  providedIn: t.providedIn || 'root',
                  factory: t.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Xo(e) {
        return e && !!e.ɵproviders;
      }
      const vn = d2({ ɵcmp: d2 }),
        Jo = d2({ ɵdir: d2 }),
        ei = d2({ ɵpipe: d2 }),
        Au = d2({ ɵmod: d2 }),
        Qe = d2({ ɵfac: d2 }),
        yn = d2({ __NG_ELEMENT_ID__: d2 }),
        Tu = d2({ __NG_ENV_ID__: d2 });
      function B(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function ti(e, n) {
        throw new L(-201, !1);
      }
      var e2 = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(e2 || {});
      let ni;
      function ku() {
        return ni;
      }
      function D1(e) {
        const n = ni;
        return (ni = e), n;
      }
      function Ru(e, n, t) {
        const c = qc(e);
        return c && 'root' == c.providedIn
          ? void 0 === c.value
            ? (c.value = c.factory())
            : c.value
          : t & e2.Optional
          ? null
          : void 0 !== n
          ? n
          : void ti();
      }
      const Ln = {},
        ci = '__NG_DI_FLAG__',
        Zc = 'ngTempTokenPath',
        rT = /\n/gm,
        Ou = '__source';
      let Z3;
      function Ct(e) {
        const n = Z3;
        return (Z3 = e), n;
      }
      function aT(e, n = e2.Default) {
        if (void 0 === Z3) throw new L(-203, !1);
        return null === Z3
          ? Ru(e, void 0, n)
          : Z3.get(e, n & e2.Optional ? null : void 0, n);
      }
      function E(e, n = e2.Default) {
        return (ku() || aT)(F(e), n);
      }
      function y(e, n = e2.Default) {
        return E(e, Qc(n));
      }
      function Qc(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
      }
      function si(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const c = F(e[t]);
          if (Array.isArray(c)) {
            if (0 === c.length) throw new L(900, !1);
            let s,
              r = e2.Default;
            for (let o = 0; o < c.length; o++) {
              const i = c[o],
                a = lT(i);
              'number' == typeof a ? (-1 === a ? (s = i.token) : (r |= a)) : (s = i);
            }
            n.push(E(s, r));
          } else n.push(E(c));
        }
        return n;
      }
      function zn(e, n) {
        return (e[ci] = n), (e.prototype[ci] = n), e;
      }
      function lT(e) {
        return e[ci];
      }
      const Pu = zn(
          Y3('Inject', e => ({ token: e })),
          -1,
        ),
        ri = zn(Y3('Optional'), 8),
        oi = zn(Y3('SkipSelf'), 4);
      function Kt(e, n) {
        return e.hasOwnProperty(Qe) ? e[Qe] : null;
      }
      function Q3(e, n) {
        e.forEach(t => (Array.isArray(t) ? Q3(t, n) : n(t)));
      }
      function Vu(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function Kc(e, n) {
        return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0];
      }
      function O1(e, n, t) {
        let c = K3(e, n);
        return (
          c >= 0
            ? (e[1 | c] = t)
            : ((c = ~c),
              (function Bu(e, n, t, c) {
                let s = e.length;
                if (s == n) e.push(t, c);
                else if (1 === s) e.push(c, e[0]), (e[0] = t);
                else {
                  for (s--, e.push(e[s - 1], e[s]); s > n; ) (e[s] = e[s - 2]), s--;
                  (e[n] = t), (e[n + 1] = c);
                }
              })(e, c, n, t)),
          c
        );
      }
      function ai(e, n) {
        const t = K3(e, n);
        if (t >= 0) return e[1 | t];
      }
      function K3(e, n) {
        return (function ju(e, n, t) {
          let c = 0,
            s = e.length >> t;
          for (; s !== c; ) {
            const r = c + ((s - c) >> 1),
              o = e[r << t];
            if (n === o) return r << t;
            o > n ? (s = r) : (c = r + 1);
          }
          return ~(s << t);
        })(e, n, 1);
      }
      const be = {},
        r2 = [],
        F1 = new _(''),
        Uu = new _('', -1),
        li = new _('');
      class Jc {
        get(n, t = Ln) {
          if (t === Ln) {
            const c = new Error(`NullInjectorError: No provider for ${Z2(n)}!`);
            throw ((c.name = 'NullInjectorError'), c);
          }
          return t;
        }
      }
      var e6 = (function (e) {
          return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
        })(e6 || {}),
        ae = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })(ae || {}),
        Mt = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
            e
          );
        })(Mt || {});
      function mT(e, n, t) {
        let c = e.length;
        for (;;) {
          const s = e.indexOf(n, t);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const r = n.length;
            if (s + r === c || e.charCodeAt(s + r) <= 32) return s;
          }
          t = s + 1;
        }
      }
      function ui(e, n, t) {
        let c = 0;
        for (; c < t.length; ) {
          const s = t[c];
          if ('number' == typeof s) {
            if (0 !== s) break;
            c++;
            const r = t[c++],
              o = t[c++],
              i = t[c++];
            e.setAttribute(n, o, i, r);
          } else {
            const r = s,
              o = t[++c];
            $u(r) ? e.setProperty(n, r, o) : e.setAttribute(n, r, o), c++;
          }
        }
        return c;
      }
      function Hu(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function $u(e) {
        return 64 === e.charCodeAt(0);
      }
      function _n(e, n) {
        if (null !== n && 0 !== n.length)
          if (null === e || 0 === e.length) e = n.slice();
          else {
            let t = -1;
            for (let c = 0; c < n.length; c++) {
              const s = n[c];
              'number' == typeof s
                ? (t = s)
                : 0 === t || Gu(e, t, s, null, -1 === t || 2 === t ? n[++c] : null);
            }
          }
        return e;
      }
      function Gu(e, n, t, c, s) {
        let r = 0,
          o = e.length;
        if (-1 === n) o = -1;
        else
          for (; r < e.length; ) {
            const i = e[r++];
            if ('number' == typeof i) {
              if (i === n) {
                o = -1;
                break;
              }
              if (i > n) {
                o = r - 1;
                break;
              }
            }
          }
        for (; r < e.length; ) {
          const i = e[r];
          if ('number' == typeof i) break;
          if (i === t) {
            if (null === c) return void (null !== s && (e[r + 1] = s));
            if (c === e[r + 1]) return void (e[r + 2] = s);
          }
          r++, null !== c && r++, null !== s && r++;
        }
        -1 !== o && (e.splice(o, 0, n), (r = o + 1)),
          e.splice(r++, 0, t),
          null !== c && e.splice(r++, 0, c),
          null !== s && e.splice(r++, 0, s);
      }
      const qu = 'ng-template';
      function gT(e, n, t, c) {
        let s = 0;
        if (c) {
          for (; s < n.length && 'string' == typeof n[s]; s += 2)
            if ('class' === n[s] && -1 !== mT(n[s + 1].toLowerCase(), t, 0)) return !0;
        } else if (fi(e)) return !1;
        if (((s = n.indexOf(1, s)), s > -1)) {
          let r;
          for (; ++s < n.length && 'string' == typeof (r = n[s]); )
            if (r.toLowerCase() === t) return !0;
        }
        return !1;
      }
      function fi(e) {
        return 4 === e.type && e.value !== qu;
      }
      function CT(e, n, t) {
        return n === (4 !== e.type || t ? e.value : qu);
      }
      function MT(e, n, t) {
        let c = 4;
        const s = e.attrs,
          r =
            null !== s
              ? (function LT(e) {
                  for (let n = 0; n < e.length; n++) if (Hu(e[n])) return n;
                  return e.length;
                })(s)
              : 0;
        let o = !1;
        for (let i = 0; i < n.length; i++) {
          const a = n[i];
          if ('number' != typeof a) {
            if (!o)
              if (4 & c) {
                if (
                  ((c = 2 | (1 & c)),
                  ('' !== a && !CT(e, a, t)) || ('' === a && 1 === n.length))
                ) {
                  if (le(c)) return !1;
                  o = !0;
                }
              } else if (8 & c) {
                if (null === s || !gT(e, s, a, t)) {
                  if (le(c)) return !1;
                  o = !0;
                }
              } else {
                const l = n[++i],
                  u = vT(a, s, fi(e), t);
                if (-1 === u) {
                  if (le(c)) return !1;
                  o = !0;
                  continue;
                }
                if ('' !== l) {
                  let f;
                  if (((f = u > r ? '' : s[u + 1].toLowerCase()), 2 & c && l !== f)) {
                    if (le(c)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !le(c) && !le(a)) return !1;
            if (o && le(a)) continue;
            (o = !1), (c = a | (1 & c));
          }
        }
        return le(c) || o;
      }
      function le(e) {
        return !(1 & e);
      }
      function vT(e, n, t, c) {
        if (null === n) return -1;
        let s = 0;
        if (c || !t) {
          let r = !1;
          for (; s < n.length; ) {
            const o = n[s];
            if (o === e) return s;
            if (3 === o || 6 === o) r = !0;
            else {
              if (1 === o || 2 === o) {
                let i = n[++s];
                for (; 'string' == typeof i; ) i = n[++s];
                continue;
              }
              if (4 === o) break;
              if (0 === o) {
                s += 4;
                continue;
              }
            }
            s += r ? 1 : 2;
          }
          return -1;
        }
        return (function zT(e, n) {
          let t = e.indexOf(4);
          if (t > -1)
            for (t++; t < e.length; ) {
              const c = e[t];
              if ('number' == typeof c) return -1;
              if (c === n) return t;
              t++;
            }
          return -1;
        })(n, e);
      }
      function Wu(e, n, t = !1) {
        for (let c = 0; c < n.length; c++) if (MT(e, n[c], t)) return !0;
        return !1;
      }
      function _T(e, n) {
        e: for (let t = 0; t < n.length; t++) {
          const c = n[t];
          if (e.length === c.length) {
            for (let s = 0; s < e.length; s++) if (e[s] !== c[s]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Yu(e, n) {
        return e ? ':not(' + n.trim() + ')' : n;
      }
      function bT(e) {
        let n = e[0],
          t = 1,
          c = 2,
          s = '',
          r = !1;
        for (; t < e.length; ) {
          let o = e[t];
          if ('string' == typeof o)
            if (2 & c) {
              const i = e[++t];
              s += '[' + o + (i.length > 0 ? '="' + i + '"' : '') + ']';
            } else 8 & c ? (s += '.' + o) : 4 & c && (s += ' ' + o);
          else
            '' !== s && !le(o) && ((n += Yu(r, s)), (s = '')), (c = o), (r = r || !le(c));
          t++;
        }
        return '' !== s && (n += Yu(r, s)), n;
      }
      function Y(e) {
        return Ze(() => {
          const n = Qu(e),
            t = {
              ...n,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === e6.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (n.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || ae.Emulated,
              styles: e.styles || r2,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          Ku(t);
          const c = e.dependencies;
          return (
            (t.directiveDefs = t6(c, !1)),
            (t.pipeDefs = t6(c, !0)),
            (t.id = (function ST(e) {
              let n = 0;
              const t = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.signals,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ].join('|');
              for (const s of t) n = (Math.imul(31, n) + s.charCodeAt(0)) | 0;
              return (n += 2147483648), 'c' + n;
            })(t)),
            t
          );
        });
      }
      function ET(e) {
        return K(e) || Q2(e);
      }
      function NT(e) {
        return null !== e;
      }
      function X3(e) {
        return Ze(() => ({
          type: e.type,
          bootstrap: e.bootstrap || r2,
          declarations: e.declarations || r2,
          imports: e.imports || r2,
          exports: e.exports || r2,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Zu(e, n) {
        if (null == e) return be;
        const t = {};
        for (const c in e)
          if (e.hasOwnProperty(c)) {
            const s = e[c];
            let r,
              o,
              i = Mt.None;
            Array.isArray(s)
              ? ((i = s[0]), (r = s[1]), (o = s[2] ?? r))
              : ((r = s), (o = s)),
              n ? ((t[r] = i !== Mt.None ? [c, i] : c), (n[r] = o)) : (t[r] = c);
          }
        return t;
      }
      function O(e) {
        return Ze(() => {
          const n = Qu(e);
          return Ku(n), n;
        });
      }
      function K(e) {
        return e[vn] || null;
      }
      function Q2(e) {
        return e[Jo] || null;
      }
      function s1(e) {
        return e[ei] || null;
      }
      function a1(e, n) {
        const t = e[Au] || null;
        if (!t && !0 === n)
          throw new Error(`Type ${Z2(e)} does not have '\u0275mod' property.`);
        return t;
      }
      function Qu(e) {
        const n = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: n,
          inputTransforms: null,
          inputConfig: e.inputs || be,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || r2,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Zu(e.inputs, n),
          outputs: Zu(e.outputs),
          debugInfo: null,
        };
      }
      function Ku(e) {
        e.features?.forEach(n => n(e));
      }
      function t6(e, n) {
        if (!e) return null;
        const t = n ? s1 : ET;
        return () => ('function' == typeof e ? e() : e).map(c => t(c)).filter(NT);
      }
      function J3(e) {
        return { ɵproviders: e };
      }
      function IT(...e) {
        return { ɵproviders: di(0, e), ɵfromNgModule: !0 };
      }
      function di(e, ...n) {
        const t = [],
          c = new Set();
        let s;
        const r = o => {
          t.push(o);
        };
        return (
          Q3(n, o => {
            const i = o;
            n6(i, r, [], c) && ((s ||= []), s.push(i));
          }),
          void 0 !== s && Xu(s, r),
          t
        );
      }
      function Xu(e, n) {
        for (let t = 0; t < e.length; t++) {
          const { ngModule: c, providers: s } = e[t];
          hi(s, r => {
            n(r, c);
          });
        }
      }
      function n6(e, n, t, c) {
        if (!(e = F(e))) return !1;
        let s = null,
          r = Wc(e);
        const o = !r && K(e);
        if (r || o) {
          if (o && !o.standalone) return !1;
          s = e;
        } else {
          const a = e.ngModule;
          if (((r = Wc(a)), !r)) return !1;
          s = a;
        }
        const i = c.has(s);
        if (o) {
          if (i) return !1;
          if ((c.add(s), o.dependencies)) {
            const a =
              'function' == typeof o.dependencies ? o.dependencies() : o.dependencies;
            for (const l of a) n6(l, n, t, c);
          }
        } else {
          if (!r) return !1;
          {
            if (null != r.imports && !i) {
              let l;
              c.add(s);
              try {
                Q3(r.imports, u => {
                  n6(u, n, t, c) && ((l ||= []), l.push(u));
                });
              } finally {
              }
              void 0 !== l && Xu(l, n);
            }
            if (!i) {
              const l = Kt(s) || (() => new s());
              n({ provide: s, useFactory: l, deps: r2 }, s),
                n({ provide: li, useValue: s, multi: !0 }, s),
                n({ provide: F1, useValue: () => E(s), multi: !0 }, s);
            }
            const a = r.providers;
            if (null != a && !i) {
              const l = e;
              hi(a, u => {
                n(u, l);
              });
            }
          }
        }
        return s !== e && void 0 !== e.providers;
      }
      function hi(e, n) {
        for (let t of e) Xo(t) && (t = t.ɵproviders), Array.isArray(t) ? hi(t, n) : n(t);
      }
      const AT = d2({ provide: String, useValue: d2 });
      function pi(e) {
        return null !== e && 'object' == typeof e && AT in e;
      }
      function Xt(e) {
        return 'function' == typeof e;
      }
      const mi = new _(''),
        c6 = {},
        kT = {};
      let gi;
      function s6() {
        return void 0 === gi && (gi = new Jc()), gi;
      }
      class P1 {}
      class e4 extends P1 {
        get destroyed() {
          return this._destroyed;
        }
        constructor(n, t, c, s) {
          super(),
            (this.parent = t),
            (this.source = c),
            (this.scopes = s),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            Mi(n, o => this.processProvider(o)),
            this.records.set(Uu, t4(void 0, this)),
            s.has('environment') && this.records.set(P1, t4(void 0, this));
          const r = this.records.get(mi);
          null != r && 'string' == typeof r.value && this.scopes.add(r.value),
            (this.injectorDefTypes = new Set(this.get(li, r2, e2.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const n = W(null);
          try {
            for (const c of this._ngOnDestroyHooks) c.ngOnDestroy();
            const t = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const c of t) c();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              W(n);
          }
        }
        onDestroy(n) {
          return (
            this.assertNotDestroyed(),
            this._onDestroyHooks.push(n),
            () => this.removeOnDestroy(n)
          );
        }
        runInContext(n) {
          this.assertNotDestroyed();
          const t = Ct(this),
            c = D1(void 0);
          try {
            return n();
          } finally {
            Ct(t), D1(c);
          }
        }
        get(n, t = Ln, c = e2.Default) {
          if ((this.assertNotDestroyed(), n.hasOwnProperty(Tu))) return n[Tu](this);
          c = Qc(c);
          const r = Ct(this),
            o = D1(void 0);
          try {
            if (!(c & e2.SkipSelf)) {
              let a = this.records.get(n);
              if (void 0 === a) {
                const l =
                  (function VT(e) {
                    return (
                      'function' == typeof e || ('object' == typeof e && e instanceof _)
                    );
                  })(n) && qc(n);
                (a = l && this.injectableDefInScope(l) ? t4(Ci(n), c6) : null),
                  this.records.set(n, a);
              }
              if (null != a) return this.hydrate(n, a);
            }
            return (c & e2.Self ? s6() : this.parent).get(
              n,
              (t = c & e2.Optional && t === Ln ? null : t),
            );
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (((i[Zc] = i[Zc] || []).unshift(Z2(n)), r)) throw i;
              return (function uT(e, n, t, c) {
                const s = e[Zc];
                throw (
                  (n[Ou] && s.unshift(n[Ou]),
                  (e.message = (function fT(e, n, t, c = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let s = Z2(n);
                    if (Array.isArray(n)) s = n.map(Z2).join(' -> ');
                    else if ('object' == typeof n) {
                      let r = [];
                      for (let o in n)
                        if (n.hasOwnProperty(o)) {
                          let i = n[o];
                          r.push(
                            o + ':' + ('string' == typeof i ? JSON.stringify(i) : Z2(i)),
                          );
                        }
                      s = `{${r.join(', ')}}`;
                    }
                    return `${t}${c ? '(' + c + ')' : ''}[${s}]: ${e.replace(
                      rT,
                      '\n  ',
                    )}`;
                  })('\n' + e.message, s, t, c)),
                  (e.ngTokenPath = s),
                  (e[Zc] = null),
                  e)
                );
              })(i, n, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            D1(o), Ct(r);
          }
        }
        resolveInjectorInitializers() {
          const n = W(null),
            t = Ct(this),
            c = D1(void 0);
          try {
            const r = this.get(F1, r2, e2.Self);
            for (const o of r) o();
          } finally {
            Ct(t), D1(c), W(n);
          }
        }
        toString() {
          const n = [],
            t = this.records;
          for (const c of t.keys()) n.push(Z2(c));
          return `R3Injector[${n.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new L(205, !1);
        }
        processProvider(n) {
          let t = Xt((n = F(n))) ? n : F(n && n.provide);
          const c = (function OT(e) {
            return pi(e) ? t4(void 0, e.useValue) : t4(tf(e), c6);
          })(n);
          if (!Xt(n) && !0 === n.multi) {
            let s = this.records.get(t);
            s ||
              ((s = t4(void 0, c6, !0)),
              (s.factory = () => si(s.multi)),
              this.records.set(t, s)),
              (t = n),
              s.multi.push(n);
          }
          this.records.set(t, c);
        }
        hydrate(n, t) {
          const c = W(null);
          try {
            return (
              t.value === c6 && ((t.value = kT), (t.value = t.factory())),
              'object' == typeof t.value &&
                t.value &&
                (function PT(e) {
                  return (
                    null !== e &&
                    'object' == typeof e &&
                    'function' == typeof e.ngOnDestroy
                  );
                })(t.value) &&
                this._ngOnDestroyHooks.add(t.value),
              t.value
            );
          } finally {
            W(c);
          }
        }
        injectableDefInScope(n) {
          if (!n.providedIn) return !1;
          const t = F(n.providedIn);
          return 'string' == typeof t
            ? 'any' === t || this.scopes.has(t)
            : this.injectorDefTypes.has(t);
        }
        removeOnDestroy(n) {
          const t = this._onDestroyHooks.indexOf(n);
          -1 !== t && this._onDestroyHooks.splice(t, 1);
        }
      }
      function Ci(e) {
        const n = qc(e),
          t = null !== n ? n.factory : Kt(e);
        if (null !== t) return t;
        if (e instanceof _) throw new L(204, !1);
        if (e instanceof Function)
          return (function RT(e) {
            if (e.length > 0) throw new L(204, !1);
            const t = (function XA(e) {
              return (e && (e[Yc] || e[Su])) || null;
            })(e);
            return null !== t ? () => t.factory(e) : () => new e();
          })(e);
        throw new L(204, !1);
      }
      function tf(e, n, t) {
        let c;
        if (Xt(e)) {
          const s = F(e);
          return Kt(s) || Ci(s);
        }
        if (pi(e)) c = () => F(e.useValue);
        else if (
          (function ef(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          c = () => e.useFactory(...si(e.deps || []));
        else if (
          (function Ju(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          c = () => E(F(e.useExisting));
        else {
          const s = F(e && (e.useClass || e.provide));
          if (
            !(function FT(e) {
              return !!e.deps;
            })(e)
          )
            return Kt(s) || Ci(s);
          c = () => new s(...si(e.deps));
        }
        return c;
      }
      function t4(e, n, t = !1) {
        return { factory: e, value: n, multi: t ? [] : void 0 };
      }
      function Mi(e, n) {
        for (const t of e)
          Array.isArray(t) ? Mi(t, n) : t && Xo(t) ? Mi(t.ɵproviders, n) : n(t);
      }
      function yt(e, n) {
        e instanceof e4 && e.assertNotDestroyed();
        const c = Ct(e),
          s = D1(void 0);
        try {
          return n();
        } finally {
          Ct(c), D1(s);
        }
      }
      function nf() {
        return (
          void 0 !== ku() ||
          null !=
            (function iT() {
              return Z3;
            })()
        );
      }
      const N2 = 0,
        b = 1,
        A = 2,
        $2 = 3,
        ue = 4,
        r1 = 5,
        p1 = 6,
        c4 = 7,
        y2 = 8,
        G2 = 9,
        we = 10,
        P = 11,
        wn = 12,
        sf = 13,
        s4 = 14,
        x2 = 15,
        Jt = 16,
        r4 = 17,
        Ke = 18,
        o4 = 19,
        rf = 20,
        Lt = 21,
        i6 = 22,
        K1 = 23,
        S = 25,
        yi = 1,
        De = 7,
        i4 = 9,
        P2 = 10;
      var l6 = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(l6 || {});
      function X2(e) {
        return Array.isArray(e) && 'object' == typeof e[yi];
      }
      function l1(e) {
        return Array.isArray(e) && !0 === e[yi];
      }
      function Li(e) {
        return !!(4 & e.flags);
      }
      function e3(e) {
        return e.componentOffset > -1;
      }
      function u6(e) {
        return !(1 & ~e.flags);
      }
      function fe(e) {
        return !!e.template;
      }
      function En(e) {
        return !!(512 & e[A]);
      }
      class KT {
        constructor(n, t, c) {
          (this.previousValue = n), (this.currentValue = t), (this.firstChange = c);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function df(e, n, t, c) {
        null !== n ? n.applyValueToInputSignal(n, c) : (e[t] = c);
      }
      function m1() {
        return hf;
      }
      function hf(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = JT), XT;
      }
      function XT() {
        const e = mf(this),
          n = e?.current;
        if (n) {
          const t = e.previous;
          if (t === be) e.previous = n;
          else for (let c in n) t[c] = n[c];
          (e.current = null), this.ngOnChanges(n);
        }
      }
      function JT(e, n, t, c, s) {
        const r = this.declaredInputs[c],
          o =
            mf(e) ||
            (function ek(e, n) {
              return (e[pf] = n);
            })(e, { previous: be, current: null }),
          i = o.current || (o.current = {}),
          a = o.previous,
          l = a[r];
        (i[r] = new KT(l && l.currentValue, t, a === be)), df(e, n, s, t);
      }
      m1.ngInherit = !0;
      const pf = '__ngSimpleChanges__';
      function mf(e) {
        return e[pf] || null;
      }
      const Ee = function (e, n, t) {};
      function o2(e) {
        for (; Array.isArray(e); ) e = e[N2];
        return e;
      }
      function Nn(e, n) {
        return o2(n[e]);
      }
      function g1(e, n) {
        return o2(n[e.index]);
      }
      function xn(e, n) {
        return e.data[n];
      }
      function V1(e, n) {
        const t = n[e];
        return X2(t) ? t : t[N2];
      }
      function Di(e) {
        return !(128 & ~e[A]);
      }
      function X1(e, n) {
        return null == n ? null : e[n];
      }
      function Mf(e) {
        e[r4] = 0;
      }
      function vf(e) {
        1024 & e[A] || ((e[A] |= 1024), Di(e) && d6(e));
      }
      function f6(e) {
        return !!(9216 & e[A] || e[K1]?.dirty);
      }
      function Ei(e) {
        e[we].changeDetectionScheduler?.notify(8),
          64 & e[A] && (e[A] |= 1024),
          f6(e) && d6(e);
      }
      function d6(e) {
        e[we].changeDetectionScheduler?.notify(0);
        let n = Xe(e);
        for (; null !== n && !(8192 & n[A]) && ((n[A] |= 8192), Di(n)); ) n = Xe(n);
      }
      function h6(e, n) {
        if (!(256 & ~e[A])) throw new L(911, !1);
        null === e[Lt] && (e[Lt] = []), e[Lt].push(n);
      }
      function Xe(e) {
        const n = e[$2];
        return l1(n) ? n[$2] : n;
      }
      const V = { lFrame: Af(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
      let Lf = !1;
      function zf() {
        return V.bindingsEnabled;
      }
      function n3() {
        return null !== V.skipHydrationRootTNode;
      }
      function M() {
        return V.lFrame.lView;
      }
      function Z() {
        return V.lFrame.tView;
      }
      function B1(e) {
        return (V.lFrame.contextLView = e), e[y2];
      }
      function j1(e) {
        return (V.lFrame.contextLView = null), e;
      }
      function h2() {
        let e = _f();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function _f() {
        return V.lFrame.currentTNode;
      }
      function de(e, n) {
        const t = V.lFrame;
        (t.currentTNode = e), (t.isParent = n);
      }
      function Si() {
        return V.lFrame.isParent;
      }
      function Ii() {
        V.lFrame.isParent = !1;
      }
      function Df() {
        return Lf;
      }
      function Ef(e) {
        Lf = e;
      }
      function he() {
        return V.lFrame.bindingIndex++;
      }
      function pk(e, n) {
        const t = V.lFrame;
        (t.bindingIndex = t.bindingRootIndex = e), Ai(n);
      }
      function Ai(e) {
        V.lFrame.currentDirectiveIndex = e;
      }
      function ki() {
        return V.lFrame.currentQueryIndex;
      }
      function m6(e) {
        V.lFrame.currentQueryIndex = e;
      }
      function gk(e) {
        const n = e[b];
        return 2 === n.type ? n.declTNode : 1 === n.type ? e[r1] : null;
      }
      function Sf(e, n, t) {
        if (t & e2.SkipSelf) {
          let s = n,
            r = e;
          for (
            ;
            !((s = s.parent),
            null !== s ||
              t & e2.Host ||
              ((s = gk(r)), null === s || ((r = r[s4]), 10 & s.type)));

          );
          if (null === s) return !1;
          (n = s), (e = r);
        }
        const c = (V.lFrame = If());
        return (c.currentTNode = n), (c.lView = e), !0;
      }
      function Ri(e) {
        const n = If(),
          t = e[b];
        (V.lFrame = n),
          (n.currentTNode = t.firstChild),
          (n.lView = e),
          (n.tView = t),
          (n.contextLView = e),
          (n.bindingIndex = t.bindingStartIndex),
          (n.inI18n = !1);
      }
      function If() {
        const e = V.lFrame,
          n = null === e ? null : e.child;
        return null === n ? Af(e) : n;
      }
      function Af(e) {
        const n = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = n), n;
      }
      function Tf() {
        const e = V.lFrame;
        return (V.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const kf = Tf;
      function Oi() {
        const e = Tf();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function o1() {
        return V.lFrame.selectedIndex;
      }
      function c3(e) {
        V.lFrame.selectedIndex = e;
      }
      function L2() {
        const e = V.lFrame;
        return xn(e.tView, e.selectedIndex);
      }
      let Of = !0;
      function In() {
        return Of;
      }
      function Ne(e) {
        Of = e;
      }
      function g6(e, n) {
        for (let t = n.directiveStart, c = n.directiveEnd; t < c; t++) {
          const r = e.data[t].type.prototype,
            {
              ngAfterContentInit: o,
              ngAfterContentChecked: i,
              ngAfterViewInit: a,
              ngAfterViewChecked: l,
              ngOnDestroy: u,
            } = r;
          o && (e.contentHooks ??= []).push(-t, o),
            i &&
              ((e.contentHooks ??= []).push(t, i),
              (e.contentCheckHooks ??= []).push(t, i)),
            a && (e.viewHooks ??= []).push(-t, a),
            l && ((e.viewHooks ??= []).push(t, l), (e.viewCheckHooks ??= []).push(t, l)),
            null != u && (e.destroyHooks ??= []).push(t, u);
        }
      }
      function C6(e, n, t) {
        Ff(e, n, 3, t);
      }
      function M6(e, n, t, c) {
        (3 & e[A]) === t && Ff(e, n, t, c);
      }
      function Fi(e, n) {
        let t = e[A];
        (3 & t) === n && ((t &= 16383), (t += 1), (e[A] = t));
      }
      function Ff(e, n, t, c) {
        const r = c ?? -1,
          o = n.length - 1;
        let i = 0;
        for (let a = void 0 !== c ? 65535 & e[r4] : 0; a < o; a++)
          if ('number' == typeof n[a + 1]) {
            if (((i = n[a]), null != c && i >= c)) break;
          } else
            n[a] < 0 && (e[r4] += 65536),
              (i < r || -1 == r) &&
                (_k(e, t, n, a), (e[r4] = (4294901760 & e[r4]) + a + 2)),
              a++;
      }
      function Pf(e, n) {
        Ee(4, e, n);
        const t = W(null);
        try {
          n.call(e);
        } finally {
          W(t), Ee(5, e, n);
        }
      }
      function _k(e, n, t, c) {
        const s = t[c] < 0,
          r = t[c + 1],
          i = e[s ? -t[c] : t[c]];
        s
          ? e[A] >> 14 < e[r4] >> 16 && (3 & e[A]) === n && ((e[A] += 16384), Pf(i, r))
          : Pf(i, r);
      }
      const a4 = -1;
      class An {
        constructor(n, t, c) {
          (this.factory = n),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = c);
        }
      }
      const Vi = {};
      class s3 {
        constructor(n, t) {
          (this.injector = n), (this.parentInjector = t);
        }
        get(n, t, c) {
          c = Qc(c);
          const s = this.injector.get(n, Vi, c);
          return s !== Vi || t === Vi ? s : this.parentInjector.get(n, t, c);
        }
      }
      function Bi(e) {
        return e !== a4;
      }
      function Tn(e) {
        return 32767 & e;
      }
      function kn(e, n) {
        let t = (function Ek(e) {
            return e >> 16;
          })(e),
          c = n;
        for (; t > 0; ) (c = c[s4]), t--;
        return c;
      }
      let ji = !0;
      function v6(e) {
        const n = ji;
        return (ji = e), n;
      }
      const Bf = 255,
        jf = 5;
      let xk = 0;
      const xe = {};
      function y6(e, n) {
        const t = Uf(e, n);
        if (-1 !== t) return t;
        const c = n[b];
        c.firstCreatePass &&
          ((e.injectorIndex = n.length),
          Ui(c.data, e),
          Ui(n, null),
          Ui(c.blueprint, null));
        const s = L6(e, n),
          r = e.injectorIndex;
        if (Bi(s)) {
          const o = Tn(s),
            i = kn(s, n),
            a = i[b].data;
          for (let l = 0; l < 8; l++) n[r + l] = i[o + l] | a[o + l];
        }
        return (n[r + 8] = s), r;
      }
      function Ui(e, n) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, n);
      }
      function Uf(e, n) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === n[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function L6(e, n) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let t = 0,
          c = null,
          s = n;
        for (; null !== s; ) {
          if (((c = Zf(s)), null === c)) return a4;
          if ((t++, (s = s[s4]), -1 !== c.injectorIndex))
            return c.injectorIndex | (t << 16);
        }
        return a4;
      }
      function Hi(e, n, t) {
        !(function Sk(e, n, t) {
          let c;
          'string' == typeof t
            ? (c = t.charCodeAt(0) || 0)
            : t.hasOwnProperty(yn) && (c = t[yn]),
            null == c && (c = t[yn] = xk++);
          const s = c & Bf;
          n.data[e + (s >> jf)] |= 1 << s;
        })(e, n, t);
      }
      function Hf(e, n, t) {
        if (t & e2.Optional || void 0 !== e) return e;
        ti();
      }
      function $f(e, n, t, c) {
        if ((t & e2.Optional && void 0 === c && (c = null), !(t & (e2.Self | e2.Host)))) {
          const s = e[G2],
            r = D1(void 0);
          try {
            return s ? s.get(n, c, t & e2.Optional) : Ru(n, c, t & e2.Optional);
          } finally {
            D1(r);
          }
        }
        return Hf(c, 0, t);
      }
      function Gf(e, n, t, c = e2.Default, s) {
        if (null !== e) {
          if (2048 & n[A] && !(c & e2.Self)) {
            const o = (function Rk(e, n, t, c, s) {
              let r = e,
                o = n;
              for (; null !== r && null !== o && 2048 & o[A] && !(512 & o[A]); ) {
                const i = qf(r, o, t, c | e2.Self, xe);
                if (i !== xe) return i;
                let a = r.parent;
                if (!a) {
                  const l = o[rf];
                  if (l) {
                    const u = l.get(t, xe, c);
                    if (u !== xe) return u;
                  }
                  (a = Zf(o)), (o = o[s4]);
                }
                r = a;
              }
              return s;
            })(e, n, t, c, xe);
            if (o !== xe) return o;
          }
          const r = qf(e, n, t, c, xe);
          if (r !== xe) return r;
        }
        return $f(n, t, c, s);
      }
      function qf(e, n, t, c, s) {
        const r = (function Tk(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const n = e.hasOwnProperty(yn) ? e[yn] : void 0;
          return 'number' == typeof n ? (n >= 0 ? n & Bf : kk) : n;
        })(t);
        if ('function' == typeof r) {
          if (!Sf(n, e, c)) return c & e2.Host ? Hf(s, 0, c) : $f(n, t, c, s);
          try {
            let o;
            if (((o = r(c)), null != o || c & e2.Optional)) return o;
            ti();
          } finally {
            kf();
          }
        } else if ('number' == typeof r) {
          let o = null,
            i = Uf(e, n),
            a = a4,
            l = c & e2.Host ? n[x2][r1] : null;
          for (
            (-1 === i || c & e2.SkipSelf) &&
            ((a = -1 === i ? L6(e, n) : n[i + 8]),
            a !== a4 && Yf(c, !1) ? ((o = n[b]), (i = Tn(a)), (n = kn(a, n))) : (i = -1));
            -1 !== i;

          ) {
            const u = n[b];
            if (Wf(r, i, u.data)) {
              const f = Ak(i, n, t, o, c, l);
              if (f !== xe) return f;
            }
            (a = n[i + 8]),
              a !== a4 && Yf(c, n[b].data[i + 8] === l) && Wf(r, i, n)
                ? ((o = u), (i = Tn(a)), (n = kn(a, n)))
                : (i = -1);
          }
        }
        return s;
      }
      function Ak(e, n, t, c, s, r) {
        const o = n[b],
          i = o.data[e + 8],
          u = z6(
            i,
            o,
            t,
            null == c ? e3(i) && ji : c != o && !!(3 & i.type),
            s & e2.Host && r === i,
          );
        return null !== u ? r3(n, o, u, i) : xe;
      }
      function z6(e, n, t, c, s) {
        const r = e.providerIndexes,
          o = n.data,
          i = 1048575 & r,
          a = e.directiveStart,
          u = r >> 20,
          d = s ? i + u : e.directiveEnd;
        for (let h = c ? i : i + u; h < d; h++) {
          const p = o[h];
          if ((h < a && t === p) || (h >= a && p.type === t)) return h;
        }
        if (s) {
          const h = o[a];
          if (h && fe(h) && h.type === t) return a;
        }
        return null;
      }
      function r3(e, n, t, c) {
        let s = e[t];
        const r = n.data;
        if (
          (function bk(e) {
            return e instanceof An;
          })(s)
        ) {
          const o = s;
          o.resolving &&
            (function nT(e, n) {
              throw (n && n.join(' > '), new L(-200, e));
            })(
              (function a2(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e && null != e && 'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : B(e);
              })(r[t]),
            );
          const i = v6(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? D1(o.injectImpl) : null;
          Sf(e, c, e2.Default);
          try {
            (s = e[t] = o.factory(void 0, r, e, c)),
              n.firstCreatePass &&
                t >= c.directiveStart &&
                (function zk(e, n, t) {
                  const { ngOnChanges: c, ngOnInit: s, ngDoCheck: r } = n.type.prototype;
                  if (c) {
                    const o = hf(n);
                    (t.preOrderHooks ??= []).push(e, o),
                      (t.preOrderCheckHooks ??= []).push(e, o);
                  }
                  s && (t.preOrderHooks ??= []).push(0 - e, s),
                    r &&
                      ((t.preOrderHooks ??= []).push(e, r),
                      (t.preOrderCheckHooks ??= []).push(e, r));
                })(t, r[t], n);
          } finally {
            null !== l && D1(l), v6(i), (o.resolving = !1), kf();
          }
        }
        return s;
      }
      function Wf(e, n, t) {
        return !!(t[n + (e >> jf)] & (1 << e));
      }
      function Yf(e, n) {
        return !(e & e2.Self || (e & e2.Host && n));
      }
      class J2 {
        constructor(n, t) {
          (this._tNode = n), (this._lView = t);
        }
        get(n, t, c) {
          return Gf(this._tNode, this._lView, n, Qc(c), t);
        }
      }
      function kk() {
        return new J2(h2(), M());
      }
      function q2(e) {
        return Ze(() => {
          const n = e.prototype.constructor,
            t = n[Qe] || $i(n),
            c = Object.prototype;
          let s = Object.getPrototypeOf(e.prototype).constructor;
          for (; s && s !== c; ) {
            const r = s[Qe] || $i(s);
            if (r && r !== t) return r;
            s = Object.getPrototypeOf(s);
          }
          return r => new r();
        });
      }
      function $i(e) {
        return Gc(e)
          ? () => {
              const n = $i(F(e));
              return n && n();
            }
          : Kt(e);
      }
      function Zf(e) {
        const n = e[b],
          t = n.type;
        return 2 === t ? n.declTNode : 1 === t ? e[r1] : null;
      }
      function ed(e, n = null, t = null, c) {
        const s = td(e, n, t, c);
        return s.resolveInjectorInitializers(), s;
      }
      function td(e, n = null, t = null, c, s = new Set()) {
        const r = [t || r2, IT(e)];
        return (
          (c = c || ('object' == typeof e ? void 0 : Z2(e))),
          new e4(r, n || s6(), c || null, s)
        );
      }
      class D2 {
        static #e = (this.THROW_IF_NOT_FOUND = Ln);
        static #t = (this.NULL = new Jc());
        static create(n, t) {
          if (Array.isArray(n)) return ed({ name: '' }, t, n, '');
          {
            const c = n.name ?? '';
            return ed({ name: c }, n.parent, n.providers, c);
          }
        }
        static #n = (this.ɵprov = w({
          token: D2,
          providedIn: 'any',
          factory: () => E(Uu),
        }));
        static #c = (this.__NG_ELEMENT_ID__ = -1);
      }
      new _('').__NG_ELEMENT_ID__ = e => {
        const n = h2();
        if (null === n) throw new L(204, !1);
        if (2 & n.type) return n.value;
        if (e & e2.Optional) return null;
        throw new L(204, !1);
      };
      function qi(e) {
        return e.ngOriginalError;
      }
      const cd = !0;
      let o3 = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Gk);
          static #t = (this.__NG_ENV_ID__ = t => t);
        }
        return e;
      })();
      class $k extends o3 {
        constructor(n) {
          super(), (this._lView = n);
        }
        onDestroy(n) {
          return (
            h6(this._lView, n),
            () =>
              (function Ni(e, n) {
                if (null === e[Lt]) return;
                const t = e[Lt].indexOf(n);
                -1 !== t && e[Lt].splice(t, 1);
              })(this._lView, n)
          );
        }
      }
      function Gk() {
        return new $k(M());
      }
      let i3 = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new n1(!1));
          }
          get _hasPendingTasks() {
            return this.hasPendingTasks.value;
          }
          add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            const t = this.taskId++;
            return this.pendingTasks.add(t), t;
          }
          remove(t) {
            this.pendingTasks.delete(t),
              0 === this.pendingTasks.size &&
                this._hasPendingTasks &&
                this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(),
              this._hasPendingTasks && this.hasPendingTasks.next(!1);
          }
          static #e = (this.ɵprov = w({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      const X = class qk extends h1 {
        constructor(n = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = n),
            nf() &&
              ((this.destroyRef = y(o3, { optional: !0 }) ?? void 0),
              (this.pendingTasks = y(i3, { optional: !0 }) ?? void 0));
        }
        emit(n) {
          const t = W(null);
          try {
            super.next(n);
          } finally {
            W(t);
          }
        }
        subscribe(n, t, c) {
          let s = n,
            r = t || (() => null),
            o = c;
          if (n && 'object' == typeof n) {
            const a = n;
            (s = a.next?.bind(a)), (r = a.error?.bind(a)), (o = a.complete?.bind(a));
          }
          this.__isAsync &&
            ((r = this.wrapInTimeout(r)),
            s && (s = this.wrapInTimeout(s)),
            o && (o = this.wrapInTimeout(o)));
          const i = super.subscribe({ next: s, error: r, complete: o });
          return n instanceof i1 && n.add(i), i;
        }
        wrapInTimeout(n) {
          return t => {
            const c = this.pendingTasks?.add();
            setTimeout(() => {
              n(t), void 0 !== c && this.pendingTasks?.remove(c);
            });
          };
        }
      };
      function b6(...e) {}
      function sd(e) {
        let n, t;
        function c() {
          e = b6;
          try {
            void 0 !== t &&
              'function' == typeof cancelAnimationFrame &&
              cancelAnimationFrame(t),
              void 0 !== n && clearTimeout(n);
          } catch {}
        }
        return (
          (n = setTimeout(() => {
            e(), c();
          })),
          'function' == typeof requestAnimationFrame &&
            (t = requestAnimationFrame(() => {
              e(), c();
            })),
          () => c()
        );
      }
      function rd(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = b6;
          }
        );
      }
      const Wi = 'isAngularZone',
        w6 = Wi + '_ID';
      let Wk = 0;
      class l2 {
        constructor(n) {
          (this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new X(!1)),
            (this.onMicrotaskEmpty = new X(!1)),
            (this.onStable = new X(!1)),
            (this.onError = new X(!1));
          const {
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: c = !1,
            shouldCoalesceRunChangeDetection: s = !1,
            scheduleInRootZone: r = cd,
          } = n;
          if (typeof Zone > 'u') throw new L(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !s && c),
            (o.shouldCoalesceRunChangeDetection = s),
            (o.callbackScheduled = !1),
            (o.scheduleInRootZone = r),
            (function Qk(e) {
              const n = () => {
                  !(function Zk(e) {
                    function n() {
                      sd(() => {
                        (e.callbackScheduled = !1),
                          Zi(e),
                          (e.isCheckStableRunning = !0),
                          Yi(e),
                          (e.isCheckStableRunning = !1);
                      });
                    }
                    e.isCheckStableRunning ||
                      e.callbackScheduled ||
                      ((e.callbackScheduled = !0),
                      e.scheduleInRootZone
                        ? Zone.root.run(() => {
                            n();
                          })
                        : e._outer.run(() => {
                            n();
                          }),
                      Zi(e));
                  })(e);
                },
                t = Wk++;
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { [Wi]: !0, [w6]: t, [w6 + t]: !0 },
                onInvokeTask: (c, s, r, o, i, a) => {
                  if (
                    (function Kk(e) {
                      return ad(e, '__ignore_ng_zone__');
                    })(a)
                  )
                    return c.invokeTask(r, o, i, a);
                  try {
                    return od(e), c.invokeTask(r, o, i, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === o.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      n(),
                      id(e);
                  }
                },
                onInvoke: (c, s, r, o, i, a, l) => {
                  try {
                    return od(e), c.invoke(r, o, i, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function Xk(e) {
                        return ad(e, '__scheduler_tick__');
                      })(a) &&
                      n(),
                      id(e);
                  }
                },
                onHasTask: (c, s, r, o) => {
                  c.hasTask(r, o),
                    s === r &&
                      ('microTask' == o.change
                        ? ((e._hasPendingMicrotasks = o.microTask), Zi(e), Yi(e))
                        : 'macroTask' == o.change &&
                          (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: (c, s, r, o) => (
                  c.handleError(r, o), e.runOutsideAngular(() => e.onError.emit(o)), !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get(Wi);
        }
        static assertInAngularZone() {
          if (!l2.isInAngularZone()) throw new L(909, !1);
        }
        static assertNotInAngularZone() {
          if (l2.isInAngularZone()) throw new L(909, !1);
        }
        run(n, t, c) {
          return this._inner.run(n, t, c);
        }
        runTask(n, t, c, s) {
          const r = this._inner,
            o = r.scheduleEventTask('NgZoneEvent: ' + s, n, Yk, b6, b6);
          try {
            return r.runTask(o, t, c);
          } finally {
            r.cancelTask(o);
          }
        }
        runGuarded(n, t, c) {
          return this._inner.runGuarded(n, t, c);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      const Yk = {};
      function Yi(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Zi(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function od(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function id(e) {
        e._nesting--, Yi(e);
      }
      class Qi {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new X()),
            (this.onMicrotaskEmpty = new X()),
            (this.onStable = new X()),
            (this.onError = new X());
        }
        run(n, t, c) {
          return n.apply(t, c);
        }
        runGuarded(n, t, c) {
          return n.apply(t, c);
        }
        runOutsideAngular(n) {
          return n();
        }
        runTask(n, t, c, s) {
          return n.apply(t, c);
        }
      }
      function ad(e, n) {
        return !(!Array.isArray(e) || 1 !== e.length) && !0 === e[0]?.data?.[n];
      }
      class Se {
        constructor() {
          this._console = console;
        }
        handleError(n) {
          const t = this._findOriginalError(n);
          this._console.error('ERROR', n), t && this._console.error('ORIGINAL ERROR', t);
        }
        _findOriginalError(n) {
          let t = n && qi(n);
          for (; t && qi(t); ) t = qi(t);
          return t || null;
        }
      }
      const eR = new _('', {
        providedIn: 'root',
        factory: () => {
          const e = y(l2),
            n = y(Se);
          return t => e.runOutsideAngular(() => n.handleError(t));
        },
      });
      function tR() {
        return f4(h2(), M());
      }
      function f4(e, n) {
        return new x1(g1(e, n));
      }
      let x1 = (() => {
        class e {
          constructor(t) {
            this.nativeElement = t;
          }
          static #e = (this.__NG_ELEMENT_ID__ = tR);
        }
        return e;
      })();
      function ud(e) {
        return e instanceof x1 ? e.nativeElement : e;
      }
      function nR() {
        return this._results[Symbol.iterator]();
      }
      class Ki {
        static #e = Symbol.iterator;
        get changes() {
          return (this._changes ??= new X());
        }
        constructor(n = !1) {
          (this._emitDistinctChangesOnly = n),
            (this.dirty = !0),
            (this._onDirty = void 0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = void 0),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const t = Ki.prototype;
          t[Symbol.iterator] || (t[Symbol.iterator] = nR);
        }
        get(n) {
          return this._results[n];
        }
        map(n) {
          return this._results.map(n);
        }
        filter(n) {
          return this._results.filter(n);
        }
        find(n) {
          return this._results.find(n);
        }
        reduce(n, t) {
          return this._results.reduce(n, t);
        }
        forEach(n) {
          this._results.forEach(n);
        }
        some(n) {
          return this._results.some(n);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(n, t) {
          this.dirty = !1;
          const c = (function E1(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(n);
          (this._changesDetected = !(function pT(e, n, t) {
            if (e.length !== n.length) return !1;
            for (let c = 0; c < e.length; c++) {
              let s = e[c],
                r = n[c];
              if ((t && ((s = t(s)), (r = t(r))), r !== s)) return !1;
            }
            return !0;
          })(this._results, c, t)) &&
            ((this._results = c),
            (this.length = c.length),
            (this.last = c[this.length - 1]),
            (this.first = c[0]));
        }
        notifyOnChanges() {
          void 0 !== this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        onDirty(n) {
          this._onDirty = n;
        }
        setDirty() {
          (this.dirty = !0), this._onDirty?.();
        }
        destroy() {
          void 0 !== this._changes &&
            (this._changes.complete(), this._changes.unsubscribe());
        }
      }
      function Fn(e) {
        return !(128 & ~e.flags);
      }
      const Ji = new Map();
      let sR = 0;
      function e8(e) {
        Ji.delete(e[o4]);
      }
      const D6 = '__ngContext__';
      function u1(e, n) {
        X2(n)
          ? ((e[D6] = n[o4]),
            (function oR(e) {
              Ji.set(e[o4], e);
            })(n))
          : (e[D6] = n);
      }
      function yd(e) {
        return zd(e[wn]);
      }
      function Ld(e) {
        return zd(e[ue]);
      }
      function zd(e) {
        for (; null !== e && !l1(e); ) e = e[ue];
        return e;
      }
      let n8;
      function zt() {
        if (void 0 !== n8) return n8;
        if (typeof document < 'u') return document;
        throw new L(210, !1);
      }
      const Vn = new _('', { providedIn: 'root', factory: () => _R }),
        _R = 'ng',
        Sd = new _(''),
        tt = new _('', { providedIn: 'platform', factory: () => 'unknown' }),
        c8 = new _('', {
          providedIn: 'root',
          factory: () =>
            zt().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') || null,
        });
      let Id = () => null;
      function u8(e, n, t = !1) {
        return Id(e, n, t);
      }
      const Vd = new _('', { providedIn: 'root', factory: () => !1 });
      let R6, O6;
      function m4(e) {
        return (
          (function m8() {
            if (void 0 === R6 && ((R6 = null), w2.trustedTypes))
              try {
                R6 = w2.trustedTypes.createPolicy('angular', {
                  createHTML: e => e,
                  createScript: e => e,
                  createScriptURL: e => e,
                });
              } catch {}
            return R6;
          })()?.createHTML(e) || e
        );
      }
      function g8() {
        if (void 0 === O6 && ((O6 = null), w2.trustedTypes))
          try {
            O6 = w2.trustedTypes.createPolicy('angular#unsafe-bypass', {
              createHTML: e => e,
              createScript: e => e,
              createScriptURL: e => e,
            });
          } catch {}
        return O6;
      }
      function Ud(e) {
        return g8()?.createHTML(e) || e;
      }
      function $d(e) {
        return g8()?.createScriptURL(e) || e;
      }
      class l3 {
        constructor(n) {
          this.changingThisBreaksApplicationSecurity = n;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${wu})`;
        }
      }
      class FR extends l3 {
        getTypeName() {
          return 'HTML';
        }
      }
      class PR extends l3 {
        getTypeName() {
          return 'Style';
        }
      }
      class VR extends l3 {
        getTypeName() {
          return 'Script';
        }
      }
      class BR extends l3 {
        getTypeName() {
          return 'URL';
        }
      }
      class jR extends l3 {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function U1(e) {
        return e instanceof l3 ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Ie(e, n) {
        const t = (function UR(e) {
          return (e instanceof l3 && e.getTypeName()) || null;
        })(e);
        if (null != t && t !== n) {
          if ('ResourceURL' === t && 'URL' === n) return !0;
          throw new Error(`Required a safe ${n}, got a ${t} (see ${wu})`);
        }
        return t === n;
      }
      class YR {
        constructor(n) {
          this.inertDocumentHelper = n;
        }
        getInertBodyElement(n) {
          n = '<body><remove></remove>' + n;
          try {
            const t = new window.DOMParser().parseFromString(m4(n), 'text/html').body;
            return null === t
              ? this.inertDocumentHelper.getInertBodyElement(n)
              : (t.firstChild?.remove(), t);
          } catch {
            return null;
          }
        }
      }
      class ZR {
        constructor(n) {
          (this.defaultDoc = n),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument('sanitization-inert'));
        }
        getInertBodyElement(n) {
          const t = this.inertDocument.createElement('template');
          return (t.innerHTML = m4(n)), t;
        }
      }
      const KR = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      function F6(e) {
        return (e = String(e)).match(KR) ? e : 'unsafe:' + e;
      }
      function nt(e) {
        const n = {};
        for (const t of e.split(',')) n[t] = !0;
        return n;
      }
      function Gn(...e) {
        const n = {};
        for (const t of e) for (const c in t) t.hasOwnProperty(c) && (n[c] = !0);
        return n;
      }
      const qd = nt('area,br,col,hr,img,wbr'),
        Wd = nt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Yd = nt('rp,rt'),
        C8 = Gn(
          qd,
          Gn(
            Wd,
            nt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
            ),
          ),
          Gn(
            Yd,
            nt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
            ),
          ),
          Gn(Yd, Wd),
        ),
        M8 = nt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Zd = Gn(
          M8,
          nt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
          ),
          nt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
          ),
        ),
        XR = nt('script,style,template');
      class JR {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(n) {
          let t = n.firstChild,
            c = !0,
            s = [];
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (c = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              c && t.firstChild)
            )
              s.push(t), (t = nO(t));
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let r = tO(t);
                if (r) {
                  t = r;
                  break;
                }
                t = s.pop();
              }
          return this.buf.join('');
        }
        startElement(n) {
          const t = Qd(n).toLowerCase();
          if (!C8.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !XR.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const c = n.attributes;
          for (let s = 0; s < c.length; s++) {
            const r = c.item(s),
              o = r.name,
              i = o.toLowerCase();
            if (!Zd.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let a = r.value;
            M8[i] && (a = F6(a)), this.buf.push(' ', o, '="', Xd(a), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(n) {
          const t = Qd(n).toLowerCase();
          C8.hasOwnProperty(t) &&
            !qd.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(n) {
          this.buf.push(Xd(n));
        }
      }
      function tO(e) {
        const n = e.nextSibling;
        if (n && e !== n.previousSibling) throw Kd(n);
        return n;
      }
      function nO(e) {
        const n = e.firstChild;
        if (
          n &&
          (function eO(e, n) {
            return (
              (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
              Node.DOCUMENT_POSITION_CONTAINED_BY
            );
          })(e, n)
        )
          throw Kd(n);
        return n;
      }
      function Qd(e) {
        const n = e.nodeName;
        return 'string' == typeof n ? n : 'FORM';
      }
      function Kd(e) {
        return new Error(
          `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
        );
      }
      const cO = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        sO = /([^\#-~ |!])/g;
      function Xd(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(cO, function (n) {
            return (
              '&#' +
              (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) +
              ';'
            );
          })
          .replace(sO, function (n) {
            return '&#' + n.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let P6;
      function Jd(e, n) {
        let t = null;
        try {
          P6 =
            P6 ||
            (function Gd(e) {
              const n = new ZR(e);
              return (function QR() {
                try {
                  return !!new window.DOMParser().parseFromString(m4(''), 'text/html');
                } catch {
                  return !1;
                }
              })()
                ? new YR(n)
                : n;
            })(e);
          let c = n ? String(n) : '';
          t = P6.getInertBodyElement(c);
          let s = 5,
            r = c;
          do {
            if (0 === s)
              throw new Error('Failed to sanitize html because the input is unstable');
            s--, (c = r), (r = t.innerHTML), (t = P6.getInertBodyElement(c));
          } while (c !== r);
          return m4(new JR().sanitizeChildren(v8(t) || t));
        } finally {
          if (t) {
            const c = v8(t) || t;
            for (; c.firstChild; ) c.firstChild.remove();
          }
        }
      }
      function v8(e) {
        return 'content' in e &&
          (function rO(e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      var J1 = (function (e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })(J1 || {});
      function eh(e) {
        const n = qn();
        return n
          ? Ud(n.sanitize(J1.HTML, e) || '')
          : Ie(e, 'HTML')
          ? Ud(U1(e))
          : Jd(zt(), B(e));
      }
      function y8(e) {
        const n = qn();
        return n ? n.sanitize(J1.URL, e) || '' : Ie(e, 'URL') ? U1(e) : F6(B(e));
      }
      function th(e) {
        const n = qn();
        if (n) return $d(n.sanitize(J1.RESOURCE_URL, e) || '');
        if (Ie(e, 'ResourceURL')) return $d(U1(e));
        throw new L(904, !1);
      }
      function qn() {
        const e = M();
        return e && e[we].sanitizer;
      }
      const fO = /^>|^->|<!--|-->|--!>|<!-$/g,
        dO = /(<|>)/g,
        hO = '\u200b$1\u200b';
      function H1(e) {
        return e instanceof Function ? e() : e;
      }
      var _t = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'), (e[(e.DashCase = 2)] = 'DashCase'), e
        );
      })(_t || {});
      let _8;
      function b8(e, n) {
        return _8(e, n);
      }
      function C4(e, n, t, c, s) {
        if (null != c) {
          let r,
            o = !1;
          l1(c) ? (r = c) : X2(c) && ((o = !0), (c = c[N2]));
          const i = o2(c);
          0 === e && null !== t
            ? null == s
              ? mh(n, t, i)
              : u3(n, t, i, s || null, !0)
            : 1 === e && null !== t
            ? u3(n, t, i, s || null, !0)
            : 2 === e
            ? (function Yn(e, n, t) {
                e.removeChild(null, n, t);
              })(n, i, o)
            : 3 === e && n.destroyNode(i),
            null != r &&
              (function TO(e, n, t, c, s) {
                const r = t[De];
                r !== o2(t) && C4(n, e, c, r, s);
                for (let i = P2; i < t.length; i++) {
                  const a = t[i];
                  $6(a[b], a, e, n, c, r);
                }
              })(n, e, r, t, s);
        }
      }
      function D8(e, n) {
        return e.createComment(
          (function ch(e) {
            return e.replace(fO, n => n.replace(dO, hO));
          })(n),
        );
      }
      function j6(e, n, t) {
        return e.createElement(n, t);
      }
      function dh(e, n) {
        n[we].changeDetectionScheduler?.notify(9), $6(e, n, n[P], 2, null, null);
      }
      function hh(e, n) {
        const t = e[i4],
          c = n[$2];
        (X2(c) || n[x2] !== c[$2][x2]) && (e[A] |= l6.HasTransplantedViews),
          null === t ? (e[i4] = [n]) : t.push(n);
      }
      function E8(e, n) {
        const t = e[i4],
          c = t.indexOf(n);
        t.splice(c, 1);
      }
      function Wn(e, n) {
        if (e.length <= P2) return;
        const t = P2 + n,
          c = e[t];
        if (c) {
          const s = c[Jt];
          null !== s && s !== e && E8(s, c), n > 0 && (e[t - 1][ue] = c[ue]);
          const r = Kc(e, P2 + n);
          !(function wO(e, n) {
            dh(e, n), (n[N2] = null), (n[r1] = null);
          })(c[b], c);
          const o = r[Ke];
          null !== o && o.detachView(r[b]),
            (c[$2] = null),
            (c[ue] = null),
            (c[A] &= -129);
        }
        return c;
      }
      function U6(e, n) {
        if (!(256 & n[A])) {
          const t = n[P];
          t.destroyNode && $6(e, n, t, 3, null, null),
            (function EO(e) {
              let n = e[wn];
              if (!n) return N8(e[b], e);
              for (; n; ) {
                let t = null;
                if (X2(n)) t = n[wn];
                else {
                  const c = n[P2];
                  c && (t = c);
                }
                if (!t) {
                  for (; n && !n[ue] && n !== e; ) X2(n) && N8(n[b], n), (n = n[$2]);
                  null === n && (n = e), X2(n) && N8(n[b], n), (t = n && n[ue]);
                }
                n = t;
              }
            })(n);
        }
      }
      function N8(e, n) {
        if (256 & n[A]) return;
        const t = W(null);
        try {
          (n[A] &= -129),
            (n[A] |= 256),
            n[K1] && Eo(n[K1]),
            (function SO(e, n) {
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let c = 0; c < t.length; c += 2) {
                  const s = n[t[c]];
                  if (!(s instanceof An)) {
                    const r = t[c + 1];
                    if (Array.isArray(r))
                      for (let o = 0; o < r.length; o += 2) {
                        const i = s[r[o]],
                          a = r[o + 1];
                        Ee(4, i, a);
                        try {
                          a.call(i);
                        } finally {
                          Ee(5, i, a);
                        }
                      }
                    else {
                      Ee(4, s, r);
                      try {
                        r.call(s);
                      } finally {
                        Ee(5, s, r);
                      }
                    }
                  }
                }
            })(e, n),
            (function xO(e, n) {
              const t = e.cleanup,
                c = n[c4];
              if (null !== t)
                for (let r = 0; r < t.length - 1; r += 2)
                  if ('string' == typeof t[r]) {
                    const o = t[r + 3];
                    o >= 0 ? c[o]() : c[-o].unsubscribe(), (r += 2);
                  } else t[r].call(c[t[r + 1]]);
              null !== c && (n[c4] = null);
              const s = n[Lt];
              if (null !== s) {
                n[Lt] = null;
                for (let r = 0; r < s.length; r++) (0, s[r])();
              }
            })(e, n),
            1 === n[b].type && n[P].destroy();
          const c = n[Jt];
          if (null !== c && l1(n[$2])) {
            c !== n[$2] && E8(c, n);
            const s = n[Ke];
            null !== s && s.detachView(e);
          }
          e8(n);
        } finally {
          W(t);
        }
      }
      function x8(e, n, t) {
        return (function ph(e, n, t) {
          let c = n;
          for (; null !== c && 168 & c.type; ) c = (n = c).parent;
          if (null === c) return t[N2];
          {
            const { componentOffset: s } = c;
            if (s > -1) {
              const { encapsulation: r } = e.data[c.directiveStart + s];
              if (r === ae.None || r === ae.Emulated) return null;
            }
            return g1(c, t);
          }
        })(e, n.parent, t);
      }
      function u3(e, n, t, c, s) {
        e.insertBefore(n, t, c, s);
      }
      function mh(e, n, t) {
        e.appendChild(n, t);
      }
      function gh(e, n, t, c, s) {
        null !== c ? u3(e, n, t, c, s) : mh(e, n, t);
      }
      function S8(e, n) {
        return e.parentNode(n);
      }
      function Ch(e, n, t) {
        return vh(e, n, t);
      }
      let I8,
        vh = function Mh(e, n, t) {
          return 40 & e.type ? g1(e, t) : null;
        };
      function H6(e, n, t, c) {
        const s = x8(e, c, n),
          r = n[P],
          i = Ch(c.parent || n[r1], c, n);
        if (null != s)
          if (Array.isArray(t)) for (let a = 0; a < t.length; a++) gh(r, s, t[a], i, !1);
          else gh(r, s, t, i, !1);
        void 0 !== I8 && I8(r, c, n, t, s);
      }
      function f3(e, n) {
        if (null !== n) {
          const t = n.type;
          if (3 & t) return g1(n, e);
          if (4 & t) return A8(-1, e[n.index]);
          if (8 & t) {
            const c = n.child;
            if (null !== c) return f3(e, c);
            {
              const s = e[n.index];
              return l1(s) ? A8(-1, s) : o2(s);
            }
          }
          if (128 & t) return f3(e, n.next);
          if (32 & t) return b8(n, e)() || o2(e[n.index]);
          {
            const c = Lh(e, n);
            return null !== c
              ? Array.isArray(c)
                ? c[0]
                : f3(Xe(e[x2]), c)
              : f3(e, n.next);
          }
        }
        return null;
      }
      function Lh(e, n) {
        return null !== n ? e[x2][r1].projection[n.projection] : null;
      }
      function A8(e, n) {
        const t = P2 + e + 1;
        if (t < n.length) {
          const c = n[t],
            s = c[b].firstChild;
          if (null !== s) return f3(c, s);
        }
        return n[De];
      }
      function T8(e, n, t, c, s, r, o) {
        for (; null != t; ) {
          if (128 === t.type) {
            t = t.next;
            continue;
          }
          const i = c[t.index],
            a = t.type;
          if ((o && 0 === n && (i && u1(o2(i), c), (t.flags |= 2)), 32 & ~t.flags))
            if (8 & a) T8(e, n, t.child, c, s, r, !1), C4(n, e, s, i, r);
            else if (32 & a) {
              const l = b8(t, c);
              let u;
              for (; (u = l()); ) C4(n, e, s, u, r);
              C4(n, e, s, i, r);
            } else 16 & a ? _h(e, n, c, t, s, r) : C4(n, e, s, i, r);
          t = o ? t.projectionNext : t.next;
        }
      }
      function $6(e, n, t, c, s, r) {
        T8(t, c, e.firstChild, n, s, r, !1);
      }
      function _h(e, n, t, c, s, r) {
        const o = t[x2],
          a = o[r1].projection[c.projection];
        if (Array.isArray(a)) for (let l = 0; l < a.length; l++) C4(n, e, s, a[l], r);
        else {
          let l = a;
          const u = o[$2];
          Fn(c) && (l.flags |= 128), T8(e, n, l, u, s, r, !0);
        }
      }
      function bh(e, n, t) {
        '' === t ? e.removeAttribute(n, 'class') : e.setAttribute(n, 'class', t);
      }
      function wh(e, n, t) {
        const { mergedAttrs: c, classes: s, styles: r } = t;
        null !== c && ui(e, n, c),
          null !== s && bh(e, n, s),
          null !== r &&
            (function RO(e, n, t) {
              e.setAttribute(n, 'style', t);
            })(e, n, r);
      }
      const j = {};
      function I(e = 1) {
        Dh(Z(), M(), o1() + e, !1);
      }
      function Dh(e, n, t, c) {
        if (!c)
          if (3 & ~n[A]) {
            const r = e.preOrderHooks;
            null !== r && M6(n, r, 0, t);
          } else {
            const r = e.preOrderCheckHooks;
            null !== r && C6(n, r, t);
          }
        c3(t);
      }
      function z(e, n = e2.Default) {
        const t = M();
        return null === t ? E(e, n) : Gf(h2(), t, F(e), n);
      }
      function k8() {
        throw new Error('invalid');
      }
      function Eh(e, n, t, c, s, r) {
        const o = W(null);
        try {
          let i = null;
          s & Mt.SignalBased && (i = n[c][ie]),
            null !== i && void 0 !== i.transformFn && (r = i.transformFn(r)),
            s & Mt.HasDecoratorInputTransform && (r = e.inputTransforms[c].call(n, r)),
            null !== e.setInput ? e.setInput(n, i, r, t, c) : df(n, i, c, r);
        } finally {
          W(o);
        }
      }
      function G6(e, n, t, c, s, r, o, i, a, l, u) {
        const f = n.blueprint.slice();
        return (
          (f[N2] = s),
          (f[A] = 204 | c),
          (null !== l || (e && 2048 & e[A])) && (f[A] |= 2048),
          Mf(f),
          (f[$2] = f[s4] = e),
          (f[y2] = t),
          (f[we] = o || (e && e[we])),
          (f[P] = i || (e && e[P])),
          (f[G2] = a || (e && e[G2]) || null),
          (f[r1] = r),
          (f[o4] = (function rR() {
            return sR++;
          })()),
          (f[p1] = u),
          (f[rf] = l),
          (f[x2] = 2 == n.type ? e[x2] : f),
          f
        );
      }
      function d3(e, n, t, c, s) {
        let r = e.data[n];
        if (null === r)
          (r = (function R8(e, n, t, c, s) {
            const r = _f(),
              o = Si(),
              a = (e.data[n] = (function HO(e, n, t, c, s, r) {
                let o = n ? n.injectorIndex : -1,
                  i = 0;
                return (
                  n3() && (i |= 128),
                  {
                    type: t,
                    index: c,
                    insertBeforeIndex: null,
                    injectorIndex: o,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: i,
                    providerIndexes: 0,
                    value: s,
                    attrs: r,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: n,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, o ? r : r && r.parent, t, n, c, s));
            return (
              null === e.firstChild && (e.firstChild = a),
              null !== r &&
                (o
                  ? null == r.child && null !== a.parent && (r.child = a)
                  : null === r.next && ((r.next = a), (a.prev = r))),
              a
            );
          })(e, n, t, c, s)),
            (function hk() {
              return V.lFrame.inI18n;
            })() && (r.flags |= 32);
        else if (64 & r.type) {
          (r.type = t), (r.value = c), (r.attrs = s);
          const o = (function Sn() {
            const e = V.lFrame,
              n = e.currentTNode;
            return e.isParent ? n : n.parent;
          })();
          r.injectorIndex = null === o ? -1 : o.injectorIndex;
        }
        return de(r, !0), r;
      }
      function Zn(e, n, t, c) {
        if (0 === t) return -1;
        const s = n.length;
        for (let r = 0; r < t; r++) n.push(c), e.blueprint.push(c), e.data.push(null);
        return s;
      }
      function Nh(e, n, t, c, s) {
        const r = o1(),
          o = 2 & c;
        try {
          c3(-1), o && n.length > S && Dh(e, n, S, !1), Ee(o ? 2 : 0, s), t(c, s);
        } finally {
          c3(r), Ee(o ? 3 : 1, s);
        }
      }
      function O8(e, n, t) {
        if (Li(n)) {
          const c = W(null);
          try {
            const r = n.directiveEnd;
            for (let o = n.directiveStart; o < r; o++) {
              const i = e.data[o];
              i.contentQueries && i.contentQueries(1, t[o], o);
            }
          } finally {
            W(c);
          }
        }
      }
      function F8(e, n, t) {
        zf() &&
          ((function QO(e, n, t, c) {
            const s = t.directiveStart,
              r = t.directiveEnd;
            e3(t) &&
              (function cF(e, n, t) {
                const c = g1(n, e),
                  s = xh(t);
                let o = 16;
                t.signals ? (o = 4096) : t.onPush && (o = 64);
                const i = q6(
                  e,
                  G6(
                    e,
                    s,
                    null,
                    o,
                    c,
                    n,
                    null,
                    e[we].rendererFactory.createRenderer(c, t),
                    null,
                    null,
                    null,
                  ),
                );
                e[n.index] = i;
              })(n, t, e.data[s + t.componentOffset]),
              e.firstCreatePass || y6(t, n),
              u1(c, n);
            const o = t.initialInputs;
            for (let i = s; i < r; i++) {
              const a = e.data[i],
                l = r3(n, e, i, t);
              u1(l, n),
                null !== o && sF(0, i - s, l, a, 0, o),
                fe(a) && (V1(t.index, n)[y2] = r3(n, e, i, t));
            }
          })(e, n, t, g1(t, n)),
          !(64 & ~t.flags) && kh(e, n, t));
      }
      function P8(e, n, t = g1) {
        const c = n.localNames;
        if (null !== c) {
          let s = n.index + 1;
          for (let r = 0; r < c.length; r += 2) {
            const o = c[r + 1],
              i = -1 === o ? t(n, e) : e[o];
            e[s++] = i;
          }
        }
      }
      function xh(e) {
        const n = e.tView;
        return null === n || n.incompleteFirstPass
          ? (e.tView = V8(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
              e.id,
            ))
          : n;
      }
      function V8(e, n, t, c, s, r, o, i, a, l, u) {
        const f = S + c,
          d = f + s,
          h = (function FO(e, n) {
            const t = [];
            for (let c = 0; c < n; c++) t.push(c < e ? null : j);
            return t;
          })(f, d),
          p = 'function' == typeof l ? l() : l;
        return (h[b] = {
          type: e,
          blueprint: h,
          template: t,
          queries: null,
          viewQuery: i,
          declTNode: n,
          data: h.slice().fill(null, f),
          bindingStartIndex: f,
          expandoStartIndex: d,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof r ? r() : r,
          pipeRegistry: 'function' == typeof o ? o() : o,
          firstChild: null,
          schemas: a,
          consts: p,
          incompleteFirstPass: !1,
          ssrId: u,
        });
      }
      let Sh = () => null;
      function Ih(e, n, t, c, s) {
        for (let r in n) {
          if (!n.hasOwnProperty(r)) continue;
          const o = n[r];
          if (void 0 === o) continue;
          c ??= {};
          let i,
            a = Mt.None;
          Array.isArray(o) ? ((i = o[0]), (a = o[1])) : (i = o);
          let l = r;
          if (null !== s) {
            if (!s.hasOwnProperty(r)) continue;
            l = s[r];
          }
          0 === e ? Ah(c, t, l, i, a) : Ah(c, t, l, i);
        }
        return c;
      }
      function Ah(e, n, t, c, s) {
        let r;
        e.hasOwnProperty(t) ? (r = e[t]).push(n, c) : (r = e[t] = [n, c]),
          void 0 !== s && r.push(s);
      }
      function I1(e, n, t, c, s, r, o, i) {
        const a = g1(n, t);
        let u,
          l = n.inputs;
        !i && null != l && (u = l[c])
          ? ($8(e, t, u, c, s),
            e3(n) &&
              (function qO(e, n) {
                const t = V1(n, e);
                16 & t[A] || (t[A] |= 64);
              })(t, n.index))
          : 3 & n.type &&
            ((c = (function GO(e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(c)),
            (s = null != o ? o(s, n.value || '', c) : s),
            r.setProperty(a, c, s));
      }
      function B8(e, n, t, c) {
        if (zf()) {
          const s = null === c ? null : { '': -1 },
            r = (function XO(e, n) {
              const t = e.directiveRegistry;
              let c = null,
                s = null;
              if (t)
                for (let r = 0; r < t.length; r++) {
                  const o = t[r];
                  if (Wu(n, o.selectors, !1))
                    if ((c || (c = []), fe(o)))
                      if (null !== o.findHostDirectiveDefs) {
                        const i = [];
                        (s = s || new Map()),
                          o.findHostDirectiveDefs(o, i, s),
                          c.unshift(...i, o),
                          j8(e, n, i.length);
                      } else c.unshift(o), j8(e, n, 0);
                    else
                      (s = s || new Map()), o.findHostDirectiveDefs?.(o, c, s), c.push(o);
                }
              return null === c ? null : [c, s];
            })(e, t);
          let o, i;
          null === r ? (o = i = null) : ([o, i] = r),
            null !== o && Th(e, n, t, o, s, i),
            s &&
              (function JO(e, n, t) {
                if (n) {
                  const c = (e.localNames = []);
                  for (let s = 0; s < n.length; s += 2) {
                    const r = t[n[s + 1]];
                    if (null == r) throw new L(-301, !1);
                    c.push(n[s], r);
                  }
                }
              })(t, c, s);
        }
        t.mergedAttrs = _n(t.mergedAttrs, t.attrs);
      }
      function Th(e, n, t, c, s, r) {
        for (let l = 0; l < c.length; l++) Hi(y6(t, n), e, c[l].type);
        !(function tF(e, n, t) {
          (e.flags |= 1),
            (e.directiveStart = n),
            (e.directiveEnd = n + t),
            (e.providerIndexes = n);
        })(t, e.data.length, c.length);
        for (let l = 0; l < c.length; l++) {
          const u = c[l];
          u.providersResolver && u.providersResolver(u);
        }
        let o = !1,
          i = !1,
          a = Zn(e, n, c.length, null);
        for (let l = 0; l < c.length; l++) {
          const u = c[l];
          (t.mergedAttrs = _n(t.mergedAttrs, u.hostAttrs)),
            nF(e, t, n, a, u),
            eF(a, u, s),
            null !== u.contentQueries && (t.flags |= 4),
            (null !== u.hostBindings || null !== u.hostAttrs || 0 !== u.hostVars) &&
              (t.flags |= 64);
          const f = u.type.prototype;
          !o &&
            (f.ngOnChanges || f.ngOnInit || f.ngDoCheck) &&
            ((e.preOrderHooks ??= []).push(t.index), (o = !0)),
            !i &&
              (f.ngOnChanges || f.ngDoCheck) &&
              ((e.preOrderCheckHooks ??= []).push(t.index), (i = !0)),
            a++;
        }
        !(function $O(e, n, t) {
          const s = n.directiveEnd,
            r = e.data,
            o = n.attrs,
            i = [];
          let a = null,
            l = null;
          for (let u = n.directiveStart; u < s; u++) {
            const f = r[u],
              d = t ? t.get(f) : null,
              p = d ? d.outputs : null;
            (a = Ih(0, f.inputs, u, a, d ? d.inputs : null)),
              (l = Ih(1, f.outputs, u, l, p));
            const m = null === a || null === o || fi(n) ? null : rF(a, u, o);
            i.push(m);
          }
          null !== a &&
            (a.hasOwnProperty('class') && (n.flags |= 8),
            a.hasOwnProperty('style') && (n.flags |= 16)),
            (n.initialInputs = i),
            (n.inputs = a),
            (n.outputs = l);
        })(e, t, r);
      }
      function kh(e, n, t) {
        const c = t.directiveStart,
          s = t.directiveEnd,
          r = t.index,
          o = (function mk() {
            return V.lFrame.currentDirectiveIndex;
          })();
        try {
          c3(r);
          for (let i = c; i < s; i++) {
            const a = e.data[i],
              l = n[i];
            Ai(i),
              (null !== a.hostBindings || 0 !== a.hostVars || null !== a.hostAttrs) &&
                KO(a, l);
          }
        } finally {
          c3(-1), Ai(o);
        }
      }
      function KO(e, n) {
        null !== e.hostBindings && e.hostBindings(1, n);
      }
      function j8(e, n, t) {
        (n.componentOffset = t), (e.components ??= []).push(n.index);
      }
      function eF(e, n, t) {
        if (t) {
          if (n.exportAs)
            for (let c = 0; c < n.exportAs.length; c++) t[n.exportAs[c]] = e;
          fe(n) && (t[''] = e);
        }
      }
      function nF(e, n, t, c, s) {
        e.data[c] = s;
        const r = s.factory || (s.factory = Kt(s.type)),
          o = new An(r, fe(s), z);
        (e.blueprint[c] = o),
          (t[c] = o),
          (function YO(e, n, t, c, s) {
            const r = s.hostBindings;
            if (r) {
              let o = e.hostBindingOpCodes;
              null === o && (o = e.hostBindingOpCodes = []);
              const i = ~n.index;
              (function ZO(e) {
                let n = e.length;
                for (; n > 0; ) {
                  const t = e[--n];
                  if ('number' == typeof t && t < 0) return t;
                }
                return 0;
              })(o) != i && o.push(i),
                o.push(t, c, r);
            }
          })(e, n, c, Zn(e, t, s.hostVars, j), s);
      }
      function Ae(e, n, t, c, s, r) {
        const o = g1(e, n);
        !(function U8(e, n, t, c, s, r, o) {
          if (null == r) e.removeAttribute(n, s, t);
          else {
            const i = null == o ? B(r) : o(r, c || '', s);
            e.setAttribute(n, s, i, t);
          }
        })(n[P], o, r, e.value, t, c, s);
      }
      function sF(e, n, t, c, s, r) {
        const o = r[n];
        if (null !== o)
          for (let i = 0; i < o.length; ) Eh(c, t, o[i++], o[i++], o[i++], o[i++]);
      }
      function rF(e, n, t) {
        let c = null,
          s = 0;
        for (; s < t.length; ) {
          const r = t[s];
          if (0 !== r)
            if (5 !== r) {
              if ('number' == typeof r) break;
              if (e.hasOwnProperty(r)) {
                null === c && (c = []);
                const o = e[r];
                for (let i = 0; i < o.length; i += 3)
                  if (o[i] === n) {
                    c.push(r, o[i + 1], o[i + 2], t[s + 1]);
                    break;
                  }
              }
              s += 2;
            } else s += 2;
          else s += 4;
        }
        return c;
      }
      function Rh(e, n, t, c) {
        return [e, !0, 0, n, null, c, null, t, null, null];
      }
      function Oh(e, n) {
        const t = e.contentQueries;
        if (null !== t) {
          const c = W(null);
          try {
            for (let s = 0; s < t.length; s += 2) {
              const o = t[s + 1];
              if (-1 !== o) {
                const i = e.data[o];
                m6(t[s]), i.contentQueries(2, n[o], o);
              }
            }
          } finally {
            W(c);
          }
        }
      }
      function q6(e, n) {
        return e[wn] ? (e[sf][ue] = n) : (e[wn] = n), (e[sf] = n), n;
      }
      function H8(e, n, t) {
        m6(0);
        const c = W(null);
        try {
          n(e, t);
        } finally {
          W(c);
        }
      }
      function Fh(e) {
        return (e[c4] ??= []);
      }
      function Ph(e) {
        return (e.cleanup ??= []);
      }
      function W6(e, n) {
        const t = e[G2],
          c = t ? t.get(Se, null) : null;
        c && c.handleError(n);
      }
      function $8(e, n, t, c, s) {
        for (let r = 0; r < t.length; ) {
          const o = t[r++],
            i = t[r++],
            a = t[r++];
          Eh(e.data[o], n[o], c, i, a, s);
        }
      }
      function oF(e, n) {
        const t = V1(n, e),
          c = t[b];
        !(function iF(e, n) {
          for (let t = n.length; t < e.blueprint.length; t++) n.push(e.blueprint[t]);
        })(c, t);
        const s = t[N2];
        null !== s && null === t[p1] && (t[p1] = u8(s, t[G2])), G8(c, t, t[y2]);
      }
      function G8(e, n, t) {
        Ri(n);
        try {
          const c = e.viewQuery;
          null !== c && H8(1, c, t);
          const s = e.template;
          null !== s && Nh(e, n, s, 1, t),
            e.firstCreatePass && (e.firstCreatePass = !1),
            n[Ke]?.finishViewCreation(e),
            e.staticContentQueries && Oh(e, n),
            e.staticViewQueries && H8(2, e.viewQuery, t);
          const r = e.components;
          null !== r &&
            (function aF(e, n) {
              for (let t = 0; t < n.length; t++) oF(e, n[t]);
            })(n, r);
        } catch (c) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            c)
          );
        } finally {
          (n[A] &= -5), Oi();
        }
      }
      function M4(e, n, t, c) {
        const s = W(null);
        try {
          const r = n.tView,
            a = G6(
              e,
              r,
              t,
              4096 & e[A] ? 4096 : 16,
              null,
              n,
              null,
              null,
              c?.injector ?? null,
              c?.embeddedViewInjector ?? null,
              c?.dehydratedView ?? null,
            );
          a[Jt] = e[n.index];
          const u = e[Ke];
          return null !== u && (a[Ke] = u.createEmbeddedView(r)), G8(r, a, t), a;
        } finally {
          W(s);
        }
      }
      function h3(e, n) {
        return !n || null === n.firstChild || Fn(e);
      }
      function v4(e, n, t, c = !0) {
        const s = n[b];
        if (
          ((function NO(e, n, t, c) {
            const s = P2 + c,
              r = t.length;
            c > 0 && (t[s - 1][ue] = n),
              c < r - P2
                ? ((n[ue] = t[s]), Vu(t, P2 + c, n))
                : (t.push(n), (n[ue] = null)),
              (n[$2] = t);
            const o = n[Jt];
            null !== o && t !== o && hh(o, n);
            const i = n[Ke];
            null !== i && i.insertView(e), Ei(n), (n[A] |= 128);
          })(s, n, e, t),
          c)
        ) {
          const o = A8(t, e),
            i = n[P],
            a = S8(i, e[De]);
          null !== a &&
            (function DO(e, n, t, c, s, r) {
              (c[N2] = s), (c[r1] = n), $6(e, c, t, 1, s, r);
            })(s, e[r1], i, n, a, o);
        }
        const r = n[p1];
        null !== r && null !== r.firstChild && (r.firstChild = null);
      }
      function Qn(e, n, t, c, s = !1) {
        for (; null !== t; ) {
          if (128 === t.type) {
            t = s ? t.projectionNext : t.next;
            continue;
          }
          const r = n[t.index];
          null !== r && c.push(o2(r)), l1(r) && jh(r, c);
          const o = t.type;
          if (8 & o) Qn(e, n, t.child, c);
          else if (32 & o) {
            const i = b8(t, n);
            let a;
            for (; (a = i()); ) c.push(a);
          } else if (16 & o) {
            const i = Lh(n, t);
            if (Array.isArray(i)) c.push(...i);
            else {
              const a = Xe(n[x2]);
              Qn(a[b], a, i, c, !0);
            }
          }
          t = s ? t.projectionNext : t.next;
        }
        return c;
      }
      function jh(e, n) {
        for (let t = P2; t < e.length; t++) {
          const c = e[t],
            s = c[b].firstChild;
          null !== s && Qn(c[b], c, s, n);
        }
        e[De] !== e[N2] && n.push(e[De]);
      }
      let Uh = [];
      const dF = {
          ...Sc,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            d6(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[K1] = this;
          },
        },
        pF = {
          ...Sc,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let n = Xe(e.lView);
            for (; n && !Hh(n[b]); ) n = Xe(n);
            n && vf(n);
          },
          consumerOnSignalRead() {
            this.lView[K1] = this;
          },
        };
      function Hh(e) {
        return 2 !== e.type;
      }
      const mF = 100;
      function Y6(e, n = !0, t = 0) {
        const c = e[we],
          s = c.rendererFactory;
        s.begin?.();
        try {
          !(function gF(e, n) {
            const t = Df();
            try {
              Ef(!0), W8(e, n);
              let c = 0;
              for (; f6(e); ) {
                if (c === mF) throw new L(103, !1);
                c++, W8(e, 1);
              }
            } finally {
              Ef(t);
            }
          })(e, t);
        } catch (o) {
          throw (n && W6(e, o), o);
        } finally {
          s.end?.(), c.inlineEffectRunner?.flush();
        }
      }
      function CF(e, n, t, c) {
        const s = n[A];
        if (!(256 & ~s)) return;
        n[we].inlineEffectRunner?.flush(), Ri(n);
        let i = !0,
          a = null,
          l = null;
        Hh(e)
          ? ((l = (function lF(e) {
              return (
                e[K1] ??
                (function uF(e) {
                  const n = Uh.pop() ?? Object.create(dF);
                  return (n.lView = e), n;
                })(e)
              );
            })(n)),
            (a = Ic(l)))
          : null ===
            (function _o() {
              return F2;
            })()
          ? ((i = !1),
            (l = (function hF(e) {
              const n = e[K1] ?? Object.create(pF);
              return (n.lView = e), n;
            })(n)),
            (a = Ic(l)))
          : n[K1] && (Eo(n[K1]), (n[K1] = null));
        try {
          Mf(n),
            (function Nf(e) {
              return (V.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== t && Nh(e, n, t, 2, c);
          const u = !(3 & ~s);
          if (u) {
            const h = e.preOrderCheckHooks;
            null !== h && C6(n, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && M6(n, h, 0, null), Fi(n, 0);
          }
          if (
            ((function MF(e) {
              for (let n = yd(e); null !== n; n = Ld(n)) {
                if (!(n[A] & l6.HasTransplantedViews)) continue;
                const t = n[i4];
                for (let c = 0; c < t.length; c++) vf(t[c]);
              }
            })(n),
            Gh(n, 0),
            null !== e.contentQueries && Oh(e, n),
            u)
          ) {
            const h = e.contentCheckHooks;
            null !== h && C6(n, h);
          } else {
            const h = e.contentHooks;
            null !== h && M6(n, h, 1), Fi(n, 1);
          }
          !(function OO(e, n) {
            const t = e.hostBindingOpCodes;
            if (null !== t)
              try {
                for (let c = 0; c < t.length; c++) {
                  const s = t[c];
                  if (s < 0) c3(~s);
                  else {
                    const r = s,
                      o = t[++c],
                      i = t[++c];
                    pk(o, r), i(2, n[r]);
                  }
                }
              } finally {
                c3(-1);
              }
          })(e, n);
          const f = e.components;
          null !== f && Wh(n, f, 0);
          const d = e.viewQuery;
          if ((null !== d && H8(2, d, c), u)) {
            const h = e.viewCheckHooks;
            null !== h && C6(n, h);
          } else {
            const h = e.viewHooks;
            null !== h && M6(n, h, 2), Fi(n, 2);
          }
          if ((!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), n[i6])) {
            for (const h of n[i6]) h();
            n[i6] = null;
          }
          n[A] &= -73;
        } catch (u) {
          throw (d6(n), u);
        } finally {
          null !== l &&
            (wo(l, a),
            i &&
              (function fF(e) {
                e.lView[K1] !== e && ((e.lView = null), Uh.push(e));
              })(l)),
            Oi();
        }
      }
      function Gh(e, n) {
        for (let t = yd(e); null !== t; t = Ld(t))
          for (let c = P2; c < t.length; c++) qh(t[c], n);
      }
      function vF(e, n, t) {
        qh(V1(n, e), t);
      }
      function qh(e, n) {
        Di(e) && W8(e, n);
      }
      function W8(e, n) {
        const c = e[b],
          s = e[A],
          r = e[K1];
        let o = !!(0 === n && 16 & s);
        if (
          ((o ||= !!(64 & s && 0 === n)),
          (o ||= !!(1024 & s)),
          (o ||= !(!r?.dirty || !Do(r))),
          (o ||= !1),
          r && (r.dirty = !1),
          (e[A] &= -9217),
          o)
        )
          CF(c, e, c.template, e[y2]);
        else if (8192 & s) {
          Gh(e, 1);
          const i = c.components;
          null !== i && Wh(e, i, 1);
        }
      }
      function Wh(e, n, t) {
        for (let c = 0; c < n.length; c++) vF(e, n[c], t);
      }
      function Kn(e, n) {
        const t = Df() ? 64 : 1088;
        for (e[we].changeDetectionScheduler?.notify(n); e; ) {
          e[A] |= t;
          const c = Xe(e);
          if (En(e) && !c) return e;
          e = c;
        }
        return null;
      }
      class Xn {
        get rootNodes() {
          const n = this._lView,
            t = n[b];
          return Qn(t, n, t.firstChild, []);
        }
        constructor(n, t, c = !0) {
          (this._lView = n),
            (this._cdRefInjectingView = t),
            (this.notifyErrorHandler = c),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[y2];
        }
        set context(n) {
          this._lView[y2] = n;
        }
        get destroyed() {
          return !(256 & ~this._lView[A]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const n = this._lView[$2];
            if (l1(n)) {
              const t = n[8],
                c = t ? t.indexOf(this) : -1;
              c > -1 && (Wn(n, c), Kc(t, c));
            }
            this._attachedToViewContainer = !1;
          }
          U6(this._lView[b], this._lView);
        }
        onDestroy(n) {
          h6(this._lView, n);
        }
        markForCheck() {
          Kn(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[A] &= -129;
        }
        reattach() {
          Ei(this._lView), (this._lView[A] |= 128);
        }
        detectChanges() {
          (this._lView[A] |= 1024), Y6(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new L(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null;
          const n = En(this._lView),
            t = this._lView[Jt];
          null !== t && !n && E8(t, this._lView), dh(this._lView[b], this._lView);
        }
        attachToAppRef(n) {
          if (this._attachedToViewContainer) throw new L(902, !1);
          this._appRef = n;
          const t = En(this._lView),
            c = this._lView[Jt];
          null !== c && !t && hh(c, this._lView), Ei(this._lView);
        }
      }
      let st = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = zF);
        }
        return e;
      })();
      const yF = st,
        LF = class extends yF {
          constructor(n, t, c) {
            super(),
              (this._declarationLView = n),
              (this._declarationTContainer = t),
              (this.elementRef = c);
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(n, t) {
            return this.createEmbeddedViewImpl(n, t);
          }
          createEmbeddedViewImpl(n, t, c) {
            const s = M4(this._declarationLView, this._declarationTContainer, n, {
              embeddedViewInjector: t,
              dehydratedView: c,
            });
            return new Xn(s);
          }
        };
      function zF() {
        return Z6(h2(), M());
      }
      function Z6(e, n) {
        return 4 & e.type ? new LF(n, e, f4(e, n)) : null;
      }
      let pp = () => null;
      function m3(e, n) {
        return pp(e, n);
      }
      class L4 {}
      const o0 = new _('', { providedIn: 'root', factory: () => !1 }),
        mp = new _(''),
        sa = new _('');
      class pP {}
      class gp {}
      class gP {
        resolveComponentFactory(n) {
          throw (function mP(e) {
            const n = Error(`No component factory found for ${Z2(e)}.`);
            return (n.ngComponent = e), n;
          })(n);
        }
      }
      class ts {
        static #e = (this.NULL = new gP());
      }
      class ra {}
      let Te = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function CP() {
                const e = M(),
                  t = V1(h2().index, e);
                return (X2(t) ? t : e)[P];
              })());
          }
          return e;
        })(),
        MP = (() => {
          class e {
            static #e = (this.ɵprov = w({
              token: e,
              providedIn: 'root',
              factory: () => null,
            }));
          }
          return e;
        })();
      function cs(e, n, t) {
        let c = t ? e.styles : null,
          s = t ? e.classes : null,
          r = 0;
        if (null !== n)
          for (let o = 0; o < n.length; o++) {
            const i = n[o];
            'number' == typeof i
              ? (r = i)
              : 1 == r
              ? (s = qo(s, i))
              : 2 == r && (c = qo(c, i + ': ' + n[++o] + ';'));
          }
        t ? (e.styles = c) : (e.stylesWithoutHost = c),
          t ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      class yp extends ts {
        constructor(n) {
          super(), (this.ngModule = n);
        }
        resolveComponentFactory(n) {
          const t = K(n);
          return new u0(t, this.ngModule);
        }
      }
      function Lp(e, n) {
        const t = [];
        for (const c in e) {
          if (!e.hasOwnProperty(c)) continue;
          const s = e[c];
          if (void 0 === s) continue;
          const r = Array.isArray(s),
            o = r ? s[0] : s;
          t.push(
            n
              ? {
                  propName: o,
                  templateName: c,
                  isSignal: !!((r ? s[1] : Mt.None) & Mt.SignalBased),
                }
              : { propName: o, templateName: c },
          );
        }
        return t;
      }
      class u0 extends gp {
        get inputs() {
          const n = this.componentDef,
            t = n.inputTransforms,
            c = Lp(n.inputs, !0);
          if (null !== t)
            for (const s of c)
              t.hasOwnProperty(s.propName) && (s.transform = t[s.propName]);
          return c;
        }
        get outputs() {
          return Lp(this.componentDef.outputs, !1);
        }
        constructor(n, t) {
          super(),
            (this.componentDef = n),
            (this.ngModule = t),
            (this.componentType = n.type),
            (this.selector = (function wT(e) {
              return e.map(bT).join(',');
            })(n.selectors)),
            (this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : []),
            (this.isBoundToModule = !!t);
        }
        create(n, t, c, s) {
          const r = W(null);
          try {
            let o = (s = s || this.ngModule) instanceof P1 ? s : s?.injector;
            o &&
              null !== this.componentDef.getStandaloneInjector &&
              (o = this.componentDef.getStandaloneInjector(o) || o);
            const i = o ? new s3(n, o) : n,
              a = i.get(ra, null);
            if (null === a) throw new L(407, !1);
            const f = {
                rendererFactory: a,
                sanitizer: i.get(MP, null),
                inlineEffectRunner: null,
                changeDetectionScheduler: i.get(L4, null),
              },
              d = a.createRenderer(null, this.componentDef),
              h = this.componentDef.selectors[0][0] || 'div',
              p = c
                ? (function PO(e, n, t, c) {
                    const r = c.get(Vd, !1) || t === ae.ShadowDom,
                      o = e.selectRootElement(n, r);
                    return (
                      (function VO(e) {
                        Sh(e);
                      })(o),
                      o
                    );
                  })(d, c, this.componentDef.encapsulation, i)
                : j6(
                    d,
                    h,
                    (function LP(e) {
                      const n = e.toLowerCase();
                      return 'svg' === n ? 'svg' : 'math' === n ? 'math' : null;
                    })(h),
                  );
            let m = 512;
            this.componentDef.signals
              ? (m |= 4096)
              : this.componentDef.onPush || (m |= 16);
            let C = null;
            null !== p && (C = u8(p, i, !0));
            const v = V8(0, null, null, 1, 0, null, null, null, null, null, null),
              g = G6(null, v, null, m, null, null, f, d, i, null, C);
            Ri(g);
            let D,
              k,
              G = null;
            try {
              const M2 = this.componentDef;
              let c1,
                qt = null;
              M2.findHostDirectiveDefs
                ? ((c1 = []),
                  (qt = new Map()),
                  M2.findHostDirectiveDefs(M2, c1, qt),
                  c1.push(M2))
                : (c1 = [M2]);
              const zI = (function _P(e, n) {
                const t = e[b],
                  c = S;
                return (e[c] = n), d3(t, c, 2, '#host', null);
              })(g, p);
              (G = (function bP(e, n, t, c, s, r, o) {
                const i = s[b];
                !(function wP(e, n, t, c) {
                  for (const s of e) n.mergedAttrs = _n(n.mergedAttrs, s.hostAttrs);
                  null !== n.mergedAttrs &&
                    (cs(n, n.mergedAttrs, !0), null !== t && wh(c, t, n));
                })(c, e, n, o);
                let a = null;
                null !== n && (a = u8(n, s[G2]));
                const l = r.rendererFactory.createRenderer(n, t);
                let u = 16;
                t.signals ? (u = 4096) : t.onPush && (u = 64);
                const f = G6(s, xh(t), null, u, s[e.index], e, r, l, null, null, a);
                return (
                  i.firstCreatePass && j8(i, e, c.length - 1), q6(s, f), (s[e.index] = f)
                );
              })(zI, p, M2, c1, g, f, d)),
                (k = xn(v, S)),
                p &&
                  (function EP(e, n, t, c) {
                    if (c) ui(e, t, ['ng-version', '18.2.4']);
                    else {
                      const { attrs: s, classes: r } = (function DT(e) {
                        const n = [],
                          t = [];
                        let c = 1,
                          s = 2;
                        for (; c < e.length; ) {
                          let r = e[c];
                          if ('string' == typeof r)
                            2 === s
                              ? '' !== r && n.push(r, e[++c])
                              : 8 === s && t.push(r);
                          else {
                            if (!le(s)) break;
                            s = r;
                          }
                          c++;
                        }
                        return { attrs: n, classes: t };
                      })(n.selectors[0]);
                      s && ui(e, t, s), r && r.length > 0 && bh(e, t, r.join(' '));
                    }
                  })(d, M2, p, c),
                void 0 !== t &&
                  (function NP(e, n, t) {
                    const c = (e.projection = []);
                    for (let s = 0; s < n.length; s++) {
                      const r = t[s];
                      c.push(null != r ? Array.from(r) : null);
                    }
                  })(k, this.ngContentSelectors, t),
                (D = (function DP(e, n, t, c, s, r) {
                  const o = h2(),
                    i = s[b],
                    a = g1(o, s);
                  Th(i, s, o, t, null, c);
                  for (let u = 0; u < t.length; u++)
                    u1(r3(s, i, o.directiveStart + u, o), s);
                  kh(i, s, o), a && u1(a, s);
                  const l = r3(s, i, o.directiveStart + o.componentOffset, o);
                  if (((e[y2] = s[y2] = l), null !== r)) for (const u of r) u(l, n);
                  return O8(i, o, s), l;
                })(G, M2, c1, qt, g, [xP])),
                G8(v, g, null);
            } catch (M2) {
              throw (null !== G && e8(G), e8(g), M2);
            } finally {
              Oi();
            }
            return new zP(this.componentType, D, f4(k, g), g, k);
          } finally {
            W(r);
          }
        }
      }
      class zP extends pP {
        constructor(n, t, c, s, r) {
          super(),
            (this.location = c),
            (this._rootLView = s),
            (this._tNode = r),
            (this.previousInputValues = null),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new Xn(s, void 0, !1)),
            (this.componentType = n);
        }
        setInput(n, t) {
          const c = this._tNode.inputs;
          let s;
          if (null !== c && (s = c[n])) {
            if (
              ((this.previousInputValues ??= new Map()),
              this.previousInputValues.has(n) &&
                Object.is(this.previousInputValues.get(n), t))
            )
              return;
            const r = this._rootLView;
            $8(r[b], r, s, n, t),
              this.previousInputValues.set(n, t),
              Kn(V1(this._tNode.index, r), 1);
          }
        }
        get injector() {
          return new J2(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(n) {
          this.hostView.onDestroy(n);
        }
      }
      function xP() {
        const e = h2();
        g6(M()[b], e);
      }
      let pe = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = SP);
        }
        return e;
      })();
      function SP() {
        return bp(h2(), M());
      }
      const IP = pe,
        zp = class extends IP {
          constructor(n, t, c) {
            super(), (this._lContainer = n), (this._hostTNode = t), (this._hostLView = c);
          }
          get element() {
            return f4(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new J2(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const n = L6(this._hostTNode, this._hostLView);
            if (Bi(n)) {
              const t = kn(n, this._hostLView),
                c = Tn(n);
              return new J2(t[b].data[c + 8], t);
            }
            return new J2(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(n) {
            const t = _p(this._lContainer);
            return (null !== t && t[n]) || null;
          }
          get length() {
            return this._lContainer.length - P2;
          }
          createEmbeddedView(n, t, c) {
            let s, r;
            'number' == typeof c
              ? (s = c)
              : null != c && ((s = c.index), (r = c.injector));
            const o = m3(this._lContainer, n.ssrId),
              i = n.createEmbeddedViewImpl(t || {}, r, o);
            return this.insertImpl(i, s, h3(this._hostTNode, o)), i;
          }
          createComponent(n, t, c, s, r) {
            const o =
              n &&
              !(function bn(e) {
                return 'function' == typeof e;
              })(n);
            let i;
            if (o) i = t;
            else {
              const p = t || {};
              (i = p.index),
                (c = p.injector),
                (s = p.projectableNodes),
                (r = p.environmentInjector || p.ngModuleRef);
            }
            const a = o ? n : new u0(K(n)),
              l = c || this.parentInjector;
            if (!r && null == a.ngModule) {
              const m = (o ? l : this.parentInjector).get(P1, null);
              m && (r = m);
            }
            const u = K(a.componentType ?? {}),
              f = m3(this._lContainer, u?.id ?? null),
              h = a.create(l, s, f?.firstChild ?? null, r);
            return this.insertImpl(h.hostView, i, h3(this._hostTNode, f)), h;
          }
          insert(n, t) {
            return this.insertImpl(n, t, !0);
          }
          insertImpl(n, t, c) {
            const s = n._lView;
            if (
              (function sk(e) {
                return l1(e[$2]);
              })(s)
            ) {
              const i = this.indexOf(n);
              if (-1 !== i) this.detach(i);
              else {
                const a = s[$2],
                  l = new zp(a, a[r1], a[$2]);
                l.detach(l.indexOf(n));
              }
            }
            const r = this._adjustIndex(t),
              o = this._lContainer;
            return v4(o, s, r, c), n.attachToViewContainerRef(), Vu(aa(o), r, n), n;
          }
          move(n, t) {
            return this.insert(n, t);
          }
          indexOf(n) {
            const t = _p(this._lContainer);
            return null !== t ? t.indexOf(n) : -1;
          }
          remove(n) {
            const t = this._adjustIndex(n, -1),
              c = Wn(this._lContainer, t);
            c && (Kc(aa(this._lContainer), t), U6(c[b], c));
          }
          detach(n) {
            const t = this._adjustIndex(n, -1),
              c = Wn(this._lContainer, t);
            return c && null != Kc(aa(this._lContainer), t) ? new Xn(c) : null;
          }
          _adjustIndex(n, t = 0) {
            return n ?? this.length + t;
          }
        };
      function _p(e) {
        return e[8];
      }
      function aa(e) {
        return e[8] || (e[8] = []);
      }
      function bp(e, n) {
        let t;
        const c = n[e.index];
        return (
          l1(c) ? (t = c) : ((t = Rh(c, n, null, e)), (n[e.index] = t), q6(n, t)),
          wp(t, n, e, c),
          new zp(t, e, n)
        );
      }
      let wp = function Ep(e, n, t, c) {
          if (e[De]) return;
          let s;
          (s =
            8 & t.type
              ? o2(c)
              : (function AP(e, n) {
                  const t = e[P],
                    c = t.createComment(''),
                    s = g1(n, e);
                  return (
                    u3(
                      t,
                      S8(t, s),
                      c,
                      (function IO(e, n) {
                        return e.nextSibling(n);
                      })(t, s),
                      !1,
                    ),
                    c
                  );
                })(n, t)),
            (e[De] = s);
        },
        la = () => !1;
      class ua {
        constructor(n) {
          (this.queryList = n), (this.matches = null);
        }
        clone() {
          return new ua(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class fa {
        constructor(n = []) {
          this.queries = n;
        }
        createEmbeddedView(n) {
          const t = n.queries;
          if (null !== t) {
            const c = null !== n.contentQueries ? n.contentQueries[0] : t.length,
              s = [];
            for (let r = 0; r < c; r++) {
              const o = t.getByIndex(r);
              s.push(this.queries[o.indexInDeclarationView].clone());
            }
            return new fa(s);
          }
          return null;
        }
        insertView(n) {
          this.dirtyQueriesWithMatches(n);
        }
        detachView(n) {
          this.dirtyQueriesWithMatches(n);
        }
        finishViewCreation(n) {
          this.dirtyQueriesWithMatches(n);
        }
        dirtyQueriesWithMatches(n) {
          for (let t = 0; t < this.queries.length; t++)
            null !== ga(n, t).matches && this.queries[t].setDirty();
        }
      }
      class Np {
        constructor(n, t, c = null) {
          (this.flags = t),
            (this.read = c),
            (this.predicate =
              'string' == typeof n
                ? (function BP(e) {
                    return e.split(',').map(n => n.trim());
                  })(n)
                : n);
        }
      }
      class da {
        constructor(n = []) {
          this.queries = n;
        }
        elementStart(n, t) {
          for (let c = 0; c < this.queries.length; c++)
            this.queries[c].elementStart(n, t);
        }
        elementEnd(n) {
          for (let t = 0; t < this.queries.length; t++) this.queries[t].elementEnd(n);
        }
        embeddedTView(n) {
          let t = null;
          for (let c = 0; c < this.length; c++) {
            const s = null !== t ? t.length : 0,
              r = this.getByIndex(c).embeddedTView(n, s);
            r && ((r.indexInDeclarationView = c), null !== t ? t.push(r) : (t = [r]));
          }
          return null !== t ? new da(t) : null;
        }
        template(n, t) {
          for (let c = 0; c < this.queries.length; c++) this.queries[c].template(n, t);
        }
        getByIndex(n) {
          return this.queries[n];
        }
        get length() {
          return this.queries.length;
        }
        track(n) {
          this.queries.push(n);
        }
      }
      class ha {
        constructor(n, t = -1) {
          (this.metadata = n),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = t);
        }
        elementStart(n, t) {
          this.isApplyingToNode(t) && this.matchTNode(n, t);
        }
        elementEnd(n) {
          this._declarationNodeIndex === n.index && (this._appliesToNextNode = !1);
        }
        template(n, t) {
          this.elementStart(n, t);
        }
        embeddedTView(n, t) {
          return this.isApplyingToNode(n)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-n.index, t),
              new ha(this.metadata))
            : null;
        }
        isApplyingToNode(n) {
          if (this._appliesToNextNode && 1 & ~this.metadata.flags) {
            const t = this._declarationNodeIndex;
            let c = n.parent;
            for (; null !== c && 8 & c.type && c.index !== t; ) c = c.parent;
            return t === (null !== c ? c.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(n, t) {
          const c = this.metadata.predicate;
          if (Array.isArray(c))
            for (let s = 0; s < c.length; s++) {
              const r = c[s];
              this.matchTNodeWithReadOption(n, t, OP(t, r)),
                this.matchTNodeWithReadOption(n, t, z6(t, n, r, !1, !1));
            }
          else
            c === st
              ? 4 & t.type && this.matchTNodeWithReadOption(n, t, -1)
              : this.matchTNodeWithReadOption(n, t, z6(t, n, c, !1, !1));
        }
        matchTNodeWithReadOption(n, t, c) {
          if (null !== c) {
            const s = this.metadata.read;
            if (null !== s)
              if (s === x1 || s === pe || (s === st && 4 & t.type))
                this.addMatch(t.index, -2);
              else {
                const r = z6(t, n, s, !1, !1);
                null !== r && this.addMatch(t.index, r);
              }
            else this.addMatch(t.index, c);
          }
        }
        addMatch(n, t) {
          null === this.matches ? (this.matches = [n, t]) : this.matches.push(n, t);
        }
      }
      function OP(e, n) {
        const t = e.localNames;
        if (null !== t)
          for (let c = 0; c < t.length; c += 2) if (t[c] === n) return t[c + 1];
        return null;
      }
      function PP(e, n, t, c) {
        return -1 === t
          ? (function FP(e, n) {
              return 11 & e.type ? f4(e, n) : 4 & e.type ? Z6(e, n) : null;
            })(n, e)
          : -2 === t
          ? (function VP(e, n, t) {
              return t === x1
                ? f4(n, e)
                : t === st
                ? Z6(n, e)
                : t === pe
                ? bp(n, e)
                : void 0;
            })(e, n, c)
          : r3(e, e[b], t, n);
      }
      function xp(e, n, t, c) {
        const s = n[Ke].queries[c];
        if (null === s.matches) {
          const r = e.data,
            o = t.matches,
            i = [];
          for (let a = 0; null !== o && a < o.length; a += 2) {
            const l = o[a];
            i.push(l < 0 ? null : PP(n, r[l], o[a + 1], t.metadata.read));
          }
          s.matches = i;
        }
        return s.matches;
      }
      function pa(e, n, t, c) {
        const s = e.queries.getByIndex(t),
          r = s.matches;
        if (null !== r) {
          const o = xp(e, n, s, t);
          for (let i = 0; i < r.length; i += 2) {
            const a = r[i];
            if (a > 0) c.push(o[i / 2]);
            else {
              const l = r[i + 1],
                u = n[-a];
              for (let f = P2; f < u.length; f++) {
                const d = u[f];
                d[Jt] === d[$2] && pa(d[b], d, l, c);
              }
              if (null !== u[i4]) {
                const f = u[i4];
                for (let d = 0; d < f.length; d++) {
                  const h = f[d];
                  pa(h[b], h, l, c);
                }
              }
            }
          }
        }
        return c;
      }
      function Ip(e, n, t) {
        const c = Z();
        return (
          c.firstCreatePass &&
            ((function Tp(e, n, t) {
              null === e.queries && (e.queries = new da()), e.queries.track(new ha(n, t));
            })(c, new Np(e, n, t), -1),
            !(2 & ~n) && (c.staticViewQueries = !0)),
          (function Sp(e, n, t) {
            const c = new Ki(!(4 & ~t));
            return (
              (function UO(e, n, t, c) {
                const s = Fh(n);
                s.push(t), e.firstCreatePass && Ph(e).push(c, s.length - 1);
              })(e, n, c, c.destroy),
              (n[Ke] ??= new fa()).queries.push(new ua(c)) - 1
            );
          })(c, M(), n)
        );
      }
      function ga(e, n) {
        return e.queries.getByIndex(n);
      }
      function kp(e, n) {
        const t = e[b],
          c = ga(t, n);
        return c.crossesNgTemplate ? pa(t, e, n, []) : xp(t, e, c, n);
      }
      const Rp = new Set();
      function M1(e) {
        Rp.has(e) ||
          (Rp.add(e),
          performance?.mark?.('mark_feature_usage', { detail: { feature: e } }));
      }
      function Dt(e, n) {
        M1('NgSignals');
        const t = (function xI(e) {
            const n = Object.create(II);
            n.value = e;
            const t = () => (bo(n), n.value);
            return (t[ie] = n), t;
          })(e),
          c = t[ie];
        return (
          n?.equal && (c.equal = n.equal),
          (t.set = s => Q9(c, s)),
          (t.update = s =>
            (function SI(e, n) {
              H9() || Z9(), Q9(e, n(e.value));
            })(c, s)),
          (t.asReadonly = Fp.bind(t)),
          t
        );
      }
      function Fp() {
        const e = this[ie];
        if (void 0 === e.readonlyFn) {
          const n = () => this();
          (n[ie] = e), (e.readonlyFn = n);
        }
        return e.readonlyFn;
      }
      function t2(e) {
        let n = (function Zp(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          t = !0;
        const c = [e];
        for (; n; ) {
          let s;
          if (fe(e)) s = n.ɵcmp || n.ɵdir;
          else {
            if (n.ɵcmp) throw new L(903, !1);
            s = n.ɵdir;
          }
          if (s) {
            if (t) {
              c.push(s);
              const o = e;
              (o.inputs = rs(e.inputs)),
                (o.inputTransforms = rs(e.inputTransforms)),
                (o.declaredInputs = rs(e.declaredInputs)),
                (o.outputs = rs(e.outputs));
              const i = s.hostBindings;
              i && tV(e, i);
              const a = s.viewQuery,
                l = s.contentQueries;
              if (
                (a && JP(e, a),
                l && eV(e, l),
                KP(e, s),
                qA(e.outputs, s.outputs),
                fe(s) && s.data.animation)
              ) {
                const u = e.data;
                u.animation = (u.animation || []).concat(s.data.animation);
              }
            }
            const r = s.features;
            if (r)
              for (let o = 0; o < r.length; o++) {
                const i = r[o];
                i && i.ngInherit && i(e), i === t2 && (t = !1);
              }
          }
          n = Object.getPrototypeOf(n);
        }
        !(function XP(e) {
          let n = 0,
            t = null;
          for (let c = e.length - 1; c >= 0; c--) {
            const s = e[c];
            (s.hostVars = n += s.hostVars),
              (s.hostAttrs = _n(s.hostAttrs, (t = _n(t, s.hostAttrs))));
          }
        })(c);
      }
      function KP(e, n) {
        for (const t in n.inputs) {
          if (!n.inputs.hasOwnProperty(t) || e.inputs.hasOwnProperty(t)) continue;
          const c = n.inputs[t];
          if (
            void 0 !== c &&
            ((e.inputs[t] = c),
            (e.declaredInputs[t] = n.declaredInputs[t]),
            null !== n.inputTransforms)
          ) {
            const s = Array.isArray(c) ? c[0] : c;
            if (!n.inputTransforms.hasOwnProperty(s)) continue;
            (e.inputTransforms ??= {}), (e.inputTransforms[s] = n.inputTransforms[s]);
          }
        }
      }
      function rs(e) {
        return e === be ? {} : e === r2 ? [] : e;
      }
      function JP(e, n) {
        const t = e.viewQuery;
        e.viewQuery = t
          ? (c, s) => {
              n(c, s), t(c, s);
            }
          : n;
      }
      function eV(e, n) {
        const t = e.contentQueries;
        e.contentQueries = t
          ? (c, s, r) => {
              n(c, s, r), t(c, s, r);
            }
          : n;
      }
      function tV(e, n) {
        const t = e.hostBindings;
        e.hostBindings = t
          ? (c, s) => {
              n(c, s), t(c, s);
            }
          : n;
      }
      function Jp(e) {
        const n = e.inputConfig,
          t = {};
        for (const c in n)
          if (n.hasOwnProperty(c)) {
            const s = n[c];
            Array.isArray(s) && s[3] && (t[c] = s[3]);
          }
        e.inputTransforms = t;
      }
      class g3 {}
      class em {}
      class Ma extends g3 {
        constructor(n, t, c, s = !0) {
          super(),
            (this.ngModuleType = n),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new yp(this));
          const r = a1(n);
          (this._bootstrapComponents = H1(r.bootstrap)),
            (this._r3Injector = td(
              n,
              t,
              [
                { provide: g3, useValue: this },
                { provide: ts, useValue: this.componentFactoryResolver },
                ...c,
              ],
              Z2(n),
              new Set(['environment']),
            )),
            s && this.resolveInjectorInitializers();
        }
        resolveInjectorInitializers() {
          this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(this.ngModuleType));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const n = this._r3Injector;
          !n.destroyed && n.destroy(),
            this.destroyCbs.forEach(t => t()),
            (this.destroyCbs = null);
        }
        onDestroy(n) {
          this.destroyCbs.push(n);
        }
      }
      class va extends em {
        constructor(n) {
          super(), (this.moduleType = n);
        }
        create(n) {
          return new Ma(this.moduleType, n, []);
        }
      }
      class tm extends g3 {
        constructor(n) {
          super(), (this.componentFactoryResolver = new yp(this)), (this.instance = null);
          const t = new e4(
            [
              ...n.providers,
              { provide: g3, useValue: this },
              { provide: ts, useValue: this.componentFactoryResolver },
            ],
            n.parent || s6(),
            n.debugName,
            new Set(['environment']),
          );
          (this.injector = t),
            n.runEnvironmentInitializers && t.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(n) {
          this.injector.onDestroy(n);
        }
      }
      function ya(e, n, t = null) {
        return new tm({
          providers: e,
          parent: n,
          debugName: t,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function os(e) {
        return (
          !!La(e) && (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function La(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function V2(e, n, t) {
        return !Object.is(e[n], t) && ((e[n] = t), !0);
      }
      function h0(e, n, t, c, s, r, o, i, a, l) {
        const u = t + S,
          f = n.firstCreatePass
            ? (function hV(e, n, t, c, s, r, o, i, a) {
                const l = n.consts,
                  u = d3(n, e, 4, o || null, i || null);
                B8(n, t, u, X1(l, a)), g6(n, u);
                const f = (u.tView = V8(
                  2,
                  u,
                  c,
                  s,
                  r,
                  n.directiveRegistry,
                  n.pipeRegistry,
                  null,
                  n.schemas,
                  l,
                  null,
                ));
                return (
                  null !== n.queries &&
                    (n.queries.template(n, u), (f.queries = n.queries.embeddedTView(u))),
                  u
                );
              })(u, n, e, c, s, r, o, i, a)
            : n.data[u];
        de(f, !1);
        const d = nm(n, e, f, t);
        In() && H6(n, e, d, f), u1(d, e);
        const h = Rh(d, e, d, f);
        return (
          (e[u] = h),
          q6(e, h),
          (function Dp(e, n, t) {
            return la(e, n, t);
          })(h, f, e),
          u6(f) && F8(n, e, f),
          null != a && P8(e, f, l),
          f
        );
      }
      function me(e, n, t, c, s, r, o, i) {
        const a = M(),
          l = Z();
        return h0(a, l, e, n, t, c, s, X1(l.consts, r), o, i), me;
      }
      let nm = function cm(e, n, t, c) {
        return Ne(!0), n[P].createComment('');
      };
      var w4 = (function (e) {
        return (
          (e[(e.EarlyRead = 0)] = 'EarlyRead'),
          (e[(e.Write = 1)] = 'Write'),
          (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
          (e[(e.Read = 3)] = 'Read'),
          e
        );
      })(w4 || {});
      let lm = (() => {
        class e {
          constructor() {
            this.impl = null;
          }
          execute() {
            this.impl?.execute();
          }
          static #e = (this.ɵprov = w({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      class g0 {
        constructor() {
          (this.ngZone = y(l2)),
            (this.scheduler = y(L4)),
            (this.errorHandler = y(Se, { optional: !0 })),
            (this.sequences = new Set()),
            (this.deferredRegistrations = new Set()),
            (this.executing = !1);
        }
        static #e = (this.PHASES = [w4.EarlyRead, w4.Write, w4.MixedReadWrite, w4.Read]);
        execute() {
          this.executing = !0;
          for (const n of g0.PHASES)
            for (const t of this.sequences)
              if (!t.erroredOrDestroyed && t.hooks[n])
                try {
                  t.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                    t.hooks[n](t.pipelinedValue),
                  );
                } catch (c) {
                  (t.erroredOrDestroyed = !0), this.errorHandler?.handleError(c);
                }
          this.executing = !1;
          for (const n of this.sequences)
            n.afterRun(), n.once && this.sequences.delete(n);
          for (const n of this.deferredRegistrations) this.sequences.add(n);
          this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
            this.deferredRegistrations.clear();
        }
        register(n) {
          this.executing
            ? this.deferredRegistrations.add(n)
            : (this.sequences.add(n), this.scheduler.notify(6));
        }
        unregister(n) {
          this.executing && this.sequences.has(n)
            ? ((n.erroredOrDestroyed = !0), (n.pipelinedValue = void 0), (n.once = !0))
            : (this.sequences.delete(n), this.deferredRegistrations.delete(n));
        }
        static #t = (this.ɵprov = w({
          token: g0,
          providedIn: 'root',
          factory: () => new g0(),
        }));
      }
      function ge(e, n, t, c) {
        const s = M();
        return V2(s, he(), n) && (Z(), Ae(L2(), s, e, n, t, c)), ge;
      }
      function hs(e, n) {
        return (e << 17) | (n << 2);
      }
      function Nt(e) {
        return (e >> 17) & 32767;
      }
      function Ta(e) {
        return 2 | e;
      }
      function v3(e) {
        return (131068 & e) >> 2;
      }
      function ka(e, n) {
        return (-131069 & e) | (n << 2);
      }
      function Ra(e) {
        return 1 | e;
      }
      function Fm(e, n, t, c) {
        const s = e[t + 1],
          r = null === n;
        let o = c ? Nt(s) : v3(s),
          i = !1;
        for (; 0 !== o && (!1 === i || r); ) {
          const l = e[o + 1];
          tB(e[o], n) && ((i = !0), (e[o + 1] = c ? Ra(l) : Ta(l))),
            (o = c ? Nt(l) : v3(l));
        }
        i && (e[t + 1] = c ? Ta(s) : Ra(s));
      }
      function tB(e, n) {
        return (
          null === e ||
          null == n ||
          (Array.isArray(e) ? e[1] : e) === n ||
          (!(!Array.isArray(e) || 'string' != typeof n) && K3(e, n) >= 0)
        );
      }
      function N(e, n, t) {
        const c = M();
        return V2(c, he(), n) && I1(Z(), L2(), c, e, n, c[P], t, !1), N;
      }
      function Oa(e, n, t, c, s) {
        const o = s ? 'class' : 'style';
        $8(e, t, n.inputs[o], o, c);
      }
      function y3(e, n, t) {
        return Ce(e, n, t, !1), y3;
      }
      function ps(e, n) {
        return Ce(e, n, null, !0), ps;
      }
      function Ce(e, n, t, c) {
        const s = M(),
          r = Z(),
          o = (function et(e) {
            const n = V.lFrame,
              t = n.bindingIndex;
            return (n.bindingIndex = n.bindingIndex + e), t;
          })(2);
        r.firstUpdatePass &&
          (function Gm(e, n, t, c) {
            const s = e.data;
            if (null === s[t + 1]) {
              const r = s[o1()],
                o = (function $m(e, n) {
                  return n >= e.expandoStartIndex;
                })(e, t);
              (function Zm(e, n) {
                return !!(e.flags & (n ? 8 : 16));
              })(r, c) &&
                null === n &&
                !o &&
                (n = !1),
                (n = (function uB(e, n, t, c) {
                  const s = (function Ti(e) {
                    const n = V.lFrame.currentDirectiveIndex;
                    return -1 === n ? null : e[n];
                  })(e);
                  let r = c ? n.residualClasses : n.residualStyles;
                  if (null === s)
                    0 === (c ? n.classBindings : n.styleBindings) &&
                      ((t = M0((t = Fa(null, e, n, t, c)), n.attrs, c)), (r = null));
                  else {
                    const o = n.directiveStylingLast;
                    if (-1 === o || e[o] !== s)
                      if (((t = Fa(s, e, n, t, c)), null === r)) {
                        let a = (function fB(e, n, t) {
                          const c = t ? n.classBindings : n.styleBindings;
                          if (0 !== v3(c)) return e[Nt(c)];
                        })(e, n, c);
                        void 0 !== a &&
                          Array.isArray(a) &&
                          ((a = Fa(null, e, n, a[1], c)),
                          (a = M0(a, n.attrs, c)),
                          (function dB(e, n, t, c) {
                            e[Nt(t ? n.classBindings : n.styleBindings)] = c;
                          })(e, n, c, a));
                      } else
                        r = (function hB(e, n, t) {
                          let c;
                          const s = n.directiveEnd;
                          for (let r = 1 + n.directiveStylingLast; r < s; r++)
                            c = M0(c, e[r].hostAttrs, t);
                          return M0(c, n.attrs, t);
                        })(e, n, c);
                  }
                  return (
                    void 0 !== r &&
                      (c ? (n.residualClasses = r) : (n.residualStyles = r)),
                    t
                  );
                })(s, r, n, c)),
                (function JV(e, n, t, c, s, r) {
                  let o = r ? n.classBindings : n.styleBindings,
                    i = Nt(o),
                    a = v3(o);
                  e[c] = t;
                  let u,
                    l = !1;
                  if (
                    (Array.isArray(t)
                      ? ((u = t[1]), (null === u || K3(t, u) > 0) && (l = !0))
                      : (u = t),
                    s)
                  )
                    if (0 !== a) {
                      const d = Nt(e[i + 1]);
                      (e[c + 1] = hs(d, i)),
                        0 !== d && (e[d + 1] = ka(e[d + 1], c)),
                        (e[i + 1] = (function KV(e, n) {
                          return (131071 & e) | (n << 17);
                        })(e[i + 1], c));
                    } else
                      (e[c + 1] = hs(i, 0)),
                        0 !== i && (e[i + 1] = ka(e[i + 1], c)),
                        (i = c);
                  else
                    (e[c + 1] = hs(a, 0)),
                      0 === i ? (i = c) : (e[a + 1] = ka(e[a + 1], c)),
                      (a = c);
                  l && (e[c + 1] = Ta(e[c + 1])),
                    Fm(e, u, c, !0),
                    Fm(e, u, c, !1),
                    (function eB(e, n, t, c, s) {
                      const r = s ? e.residualClasses : e.residualStyles;
                      null != r &&
                        'string' == typeof n &&
                        K3(r, n) >= 0 &&
                        (t[c + 1] = Ra(t[c + 1]));
                    })(n, u, e, c, r),
                    (o = hs(i, a)),
                    r ? (n.classBindings = o) : (n.styleBindings = o);
                })(s, r, n, t, o, c);
            }
          })(r, e, o, c),
          n !== j &&
            V2(s, o, n) &&
            (function Wm(e, n, t, c, s, r, o, i) {
              if (!(3 & n.type)) return;
              const a = e.data,
                l = a[i + 1],
                u = (function XV(e) {
                  return !(1 & ~e);
                })(l)
                  ? Ym(a, n, t, s, v3(l), o)
                  : void 0;
              ms(u) ||
                (ms(r) ||
                  ((function QV(e) {
                    return !(2 & ~e);
                  })(l) &&
                    (r = Ym(a, null, t, s, i, o))),
                (function kO(e, n, t, c, s) {
                  if (n) s ? e.addClass(t, c) : e.removeClass(t, c);
                  else {
                    let r = -1 === c.indexOf('-') ? void 0 : _t.DashCase;
                    null == s
                      ? e.removeStyle(t, c, r)
                      : ('string' == typeof s &&
                          s.endsWith('!important') &&
                          ((s = s.slice(0, -10)), (r |= _t.Important)),
                        e.setStyle(t, c, s, r));
                  }
                })(c, o, Nn(o1(), t), s, r));
            })(
              r,
              r.data[o1()],
              s,
              s[P],
              e,
              (s[o + 1] = (function CB(e, n) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof n
                      ? (e += n)
                      : 'object' == typeof e && (e = Z2(U1(e)))),
                  e
                );
              })(n, t)),
              c,
              o,
            );
      }
      function Fa(e, n, t, c, s) {
        let r = null;
        const o = t.directiveEnd;
        let i = t.directiveStylingLast;
        for (
          -1 === i ? (i = t.directiveStart) : i++;
          i < o && ((r = n[i]), (c = M0(c, r.hostAttrs, s)), r !== e);

        )
          i++;
        return null !== e && (t.directiveStylingLast = i), c;
      }
      function M0(e, n, t) {
        const c = t ? 1 : 2;
        let s = -1;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const o = n[r];
            'number' == typeof o
              ? (s = o)
              : s === c &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                O1(e, o, !!t || n[++r]));
          }
        return void 0 === e ? null : e;
      }
      function Ym(e, n, t, c, s, r) {
        const o = null === n;
        let i;
        for (; s > 0; ) {
          const a = e[s],
            l = Array.isArray(a),
            u = l ? a[1] : a,
            f = null === u;
          let d = t[s + 1];
          d === j && (d = f ? r2 : void 0);
          let h = f ? ai(d, c) : u === c ? d : void 0;
          if ((l && !ms(h) && (h = ai(a, c)), ms(h) && ((i = h), o))) return i;
          const p = e[s + 1];
          s = o ? Nt(p) : v3(p);
        }
        if (null !== n) {
          let a = r ? n.residualClasses : n.residualStyles;
          null != a && (i = ai(a, c));
        }
        return i;
      }
      function ms(e) {
        return void 0 !== e;
      }
      function U(e, n, t, c) {
        const s = M(),
          r = Z(),
          o = S + e,
          i = s[P],
          a = r.firstCreatePass
            ? (function BB(e, n, t, c, s, r) {
                const o = n.consts,
                  a = d3(n, e, 2, c, X1(o, s));
                return (
                  B8(n, t, a, X1(o, r)),
                  null !== a.attrs && cs(a, a.attrs, !1),
                  null !== a.mergedAttrs && cs(a, a.mergedAttrs, !0),
                  null !== n.queries && n.queries.elementStart(n, a),
                  a
                );
              })(o, r, s, n, t, c)
            : r.data[o],
          l = Jm(r, s, a, i, n, e);
        s[o] = l;
        const u = u6(a);
        return (
          de(a, !0),
          wh(i, l, a),
          !(function _4(e) {
            return !(32 & ~e.flags);
          })(a) &&
            In() &&
            H6(r, s, l, a),
          0 ===
            (function rk() {
              return V.lFrame.elementDepthCount;
            })() && u1(l, s),
          (function ok() {
            V.lFrame.elementDepthCount++;
          })(),
          u && (F8(r, s, a), O8(r, a, s)),
          null !== c && P8(s, a),
          U
        );
      }
      function H() {
        let e = h2();
        Si() ? Ii() : ((e = e.parent), de(e, !1));
        const n = e;
        (function ak(e) {
          return V.skipHydrationRootTNode === e;
        })(n) &&
          (function dk() {
            V.skipHydrationRootTNode = null;
          })(),
          (function ik() {
            V.lFrame.elementDepthCount--;
          })();
        const t = Z();
        return (
          t.firstCreatePass && (g6(t, e), Li(e) && t.queries.elementEnd(e)),
          null != n.classesWithoutHost &&
            (function wk(e) {
              return !!(8 & e.flags);
            })(n) &&
            Oa(t, n, M(), n.classesWithoutHost, !0),
          null != n.stylesWithoutHost &&
            (function Dk(e) {
              return !!(16 & e.flags);
            })(n) &&
            Oa(t, n, M(), n.stylesWithoutHost, !1),
          H
        );
      }
      function p2(e, n, t, c) {
        return U(e, n, t, c), H(), p2;
      }
      let Jm = (e, n, t, c, s, r) => (
        Ne(!0),
        j6(
          c,
          s,
          (function Rf() {
            return V.lFrame.currentNamespace;
          })(),
        )
      );
      function S2(e, n, t) {
        const c = M(),
          s = Z(),
          r = e + S,
          o = s.firstCreatePass
            ? (function HB(e, n, t, c, s) {
                const r = n.consts,
                  o = X1(r, c),
                  i = d3(n, e, 8, 'ng-container', o);
                return (
                  null !== o && cs(i, o, !0),
                  B8(n, t, i, X1(r, s)),
                  null !== n.queries && n.queries.elementStart(n, i),
                  i
                );
              })(r, s, c, n, t)
            : s.data[r];
        de(o, !0);
        const i = tg(s, c, o, e);
        return (
          (c[r] = i),
          In() && H6(s, c, i, o),
          u1(i, c),
          u6(o) && (F8(s, c, o), O8(s, o, c)),
          null != t && P8(c, o),
          S2
        );
      }
      function I2() {
        let e = h2();
        const n = Z();
        return (
          Si() ? Ii() : ((e = e.parent), de(e, !1)),
          n.firstCreatePass && (g6(n, e), Li(e) && n.queries.elementEnd(e)),
          I2
        );
      }
      let tg = (e, n, t, c) => (Ne(!0), D8(n[P], ''));
      function te() {
        return M();
      }
      function ja(e, n, t) {
        const c = M();
        return V2(c, he(), n) && I1(Z(), L2(), c, e, n, c[P], t, !0), ja;
      }
      const Cs = 'en-US';
      let rg = Cs,
        _g = (e, n, t) => {};
      function J(e, n, t, c) {
        const s = M(),
          r = Z(),
          o = h2();
        return (
          (function $a(e, n, t, c, s, r, o) {
            const i = u6(c),
              l = e.firstCreatePass && Ph(e),
              u = n[y2],
              f = Fh(n);
            let d = !0;
            if (3 & c.type || o) {
              const m = g1(c, n),
                C = o ? o(m) : m,
                v = f.length,
                g = o ? k => o(o2(k[c.index])) : c.index;
              let D = null;
              if (
                (!o &&
                  i &&
                  (D = (function Oj(e, n, t, c) {
                    const s = e.cleanup;
                    if (null != s)
                      for (let r = 0; r < s.length - 1; r += 2) {
                        const o = s[r];
                        if (o === t && s[r + 1] === c) {
                          const i = n[c4],
                            a = s[r + 2];
                          return i.length > a ? i[a] : null;
                        }
                        'string' == typeof o && (r += 2);
                      }
                    return null;
                  })(e, n, s, c.index)),
                null !== D)
              )
                ((D.__ngLastListenerFn__ || D).__ngNextListenerFn__ = r),
                  (D.__ngLastListenerFn__ = r),
                  (d = !1);
              else {
                (r = Eg(c, n, u, r)), _g(m, s, r);
                const k = t.listen(C, s, r);
                f.push(r, k), l && l.push(s, g, v, v + 1);
              }
            } else r = Eg(c, n, u, r);
            const h = c.outputs;
            let p;
            if (d && null !== h && (p = h[s])) {
              const m = p.length;
              if (m)
                for (let C = 0; C < m; C += 2) {
                  const G = n[p[C]][p[C + 1]].subscribe(r),
                    M2 = f.length;
                  f.push(r, G), l && l.push(s, c.index, M2, -(M2 + 1));
                }
            }
          })(r, s, s[P], o, e, n, c),
          J
        );
      }
      function Dg(e, n, t, c) {
        const s = W(null);
        try {
          return Ee(6, n, t), !1 !== t(c);
        } catch (r) {
          return W6(e, r), !1;
        } finally {
          Ee(7, n, t), W(s);
        }
      }
      function Eg(e, n, t, c) {
        return function s(r) {
          if (r === Function) return c;
          Kn(e.componentOffset > -1 ? V1(e.index, n) : n, 5);
          let i = Dg(n, t, c, r),
            a = s.__ngNextListenerFn__;
          for (; a; ) (i = Dg(n, t, a, r) && i), (a = a.__ngNextListenerFn__);
          return i;
        };
      }
      function n2(e = 1) {
        return (function Ck(e) {
          return (V.lFrame.contextLView = (function yf(e, n) {
            for (; e > 0; ) (n = n[s4]), e--;
            return n;
          })(e, V.lFrame.contextLView))[y2];
        })(e);
      }
      function Fj(e, n) {
        let t = null;
        const c = (function yT(e) {
          const n = e.attrs;
          if (null != n) {
            const t = n.indexOf(5);
            if (!(1 & t)) return n[t + 1];
          }
          return null;
        })(e);
        for (let s = 0; s < n.length; s++) {
          const r = n[s];
          if ('*' !== r) {
            if (null === c ? Wu(e, r, !0) : _T(c, r)) return s;
          } else t = s;
        }
        return t;
      }
      function b0(e) {
        const n = M()[x2][r1];
        if (!n.projection) {
          const c = (n.projection = (function Xc(e, n) {
              const t = [];
              for (let c = 0; c < e; c++) t.push(n);
              return t;
            })(e ? e.length : 1, null)),
            s = c.slice();
          let r = n.child;
          for (; null !== r; ) {
            if (128 !== r.type) {
              const o = e ? Fj(r, e) : 0;
              null !== o && (s[o] ? (s[o].projectionNext = r) : (c[o] = r), (s[o] = r));
            }
            r = r.next;
          }
        }
      }
      function w0(e, n = 0, t, c, s, r) {
        const o = M(),
          i = Z(),
          a = c ? e + 1 : null;
        null !== a && h0(o, i, a, c, s, r, null, t);
        const l = d3(i, S + e, 16, null, t || null);
        null === l.projection && (l.projection = n), Ii();
        const f = !o[p1] || n3();
        null === o[x2][r1].projection[l.projection] && null !== a
          ? (function Pj(e, n, t) {
              const c = S + t,
                s = n.data[c],
                r = e[c],
                o = m3(r, s.tView.ssrId);
              v4(r, M4(e, s, void 0, { dehydratedView: o }), 0, h3(s, o));
            })(o, i, a)
          : f &&
            32 & ~l.flags &&
            (function AO(e, n, t) {
              _h(n[P], 0, n, t, x8(e, t, n), Ch(t.parent || n[r1], t, n));
            })(i, o, l);
      }
      function Wa() {
        return (function ma(e, n) {
          return e[Ke].queries[n].queryList;
        })(M(), ki());
      }
      function z3(e, n = '') {
        const t = M(),
          c = Z(),
          s = e + S,
          r = c.firstCreatePass ? d3(c, s, 1, n, null) : c.data[s],
          o = Yg(c, t, r, n, e);
        (t[s] = o), In() && H6(c, t, o, r), de(r, !1);
      }
      let Yg = (e, n, t, c, s) => (
        Ne(!0),
        (function w8(e, n) {
          return e.createText(n);
        })(n[P], c)
      );
      function xt(e, n, t) {
        const c = M(),
          s = (function A4(e, n, t, c) {
            return V2(e, he(), t) ? n + B(t) + c : j;
          })(c, e, n, t);
        return (
          s !== j &&
            (function ct(e, n, t) {
              const c = Nn(n, e);
              !(function fh(e, n, t) {
                e.setValue(n, t);
              })(e[P], c, t);
            })(c, o1(), s),
          xt
        );
      }
      function Za(e, n, t, c, s) {
        if (((e = F(e)), Array.isArray(e)))
          for (let r = 0; r < e.length; r++) Za(e[r], n, t, c, s);
        else {
          const r = Z(),
            o = M(),
            i = h2();
          let a = Xt(e) ? e : F(e.provide);
          const l = tf(e),
            u = 1048575 & i.providerIndexes,
            f = i.directiveStart,
            d = i.providerIndexes >> 20;
          if (Xt(e) || !e.multi) {
            const h = new An(l, s, z),
              p = Ka(a, n, s ? u : u + d, f);
            -1 === p
              ? (Hi(y6(i, o), r, a),
                Qa(r, e, n.length),
                n.push(a),
                i.directiveStart++,
                i.directiveEnd++,
                s && (i.providerIndexes += 1048576),
                t.push(h),
                o.push(h))
              : ((t[p] = h), (o[p] = h));
          } else {
            const h = Ka(a, n, u + d, f),
              p = Ka(a, n, u, u + d),
              C = p >= 0 && t[p];
            if ((s && !C) || (!s && !(h >= 0 && t[h]))) {
              Hi(y6(i, o), r, a);
              const v = (function oU(e, n, t, c, s) {
                const r = new An(e, t, z);
                return (
                  (r.multi = []),
                  (r.index = n),
                  (r.componentProviders = 0),
                  aC(r, s, c && !t),
                  r
                );
              })(s ? rU : sU, t.length, s, c, l);
              !s && C && (t[p].providerFactory = v),
                Qa(r, e, n.length, 0),
                n.push(a),
                i.directiveStart++,
                i.directiveEnd++,
                s && (i.providerIndexes += 1048576),
                t.push(v),
                o.push(v);
            } else Qa(r, e, h > -1 ? h : p, aC(t[s ? p : h], l, !s && c));
            !s && c && C && t[p].componentProviders++;
          }
        }
      }
      function Qa(e, n, t, c) {
        const s = Xt(n),
          r = (function TT(e) {
            return !!e.useClass;
          })(n);
        if (s || r) {
          const a = (r ? F(n.useClass) : n).prototype.ngOnDestroy;
          if (a) {
            const l = e.destroyHooks || (e.destroyHooks = []);
            if (!s && n.multi) {
              const u = l.indexOf(t);
              -1 === u ? l.push(t, [c, a]) : l[u + 1].push(c, a);
            } else l.push(t, a);
          }
        }
      }
      function aC(e, n, t) {
        return t && e.componentProviders++, e.multi.push(n) - 1;
      }
      function Ka(e, n, t, c) {
        for (let s = t; s < c; s++) if (n[s] === e) return s;
        return -1;
      }
      function sU(e, n, t, c) {
        return Xa(this.multi, []);
      }
      function rU(e, n, t, c) {
        const s = this.multi;
        let r;
        if (this.providerFactory) {
          const o = this.providerFactory.componentProviders,
            i = r3(t, t[b], this.providerFactory.index, c);
          (r = i.slice(0, o)), Xa(s, r);
          for (let a = o; a < i.length; a++) r.push(i[a]);
        } else (r = []), Xa(s, r);
        return r;
      }
      function Xa(e, n) {
        for (let t = 0; t < e.length; t++) n.push((0, e[t])());
        return n;
      }
      function A2(e, n = []) {
        return t => {
          t.providersResolver = (c, s) =>
            (function cU(e, n, t) {
              const c = Z();
              if (c.firstCreatePass) {
                const s = fe(e);
                Za(t, c.data, c.blueprint, s, !0), Za(n, c.data, c.blueprint, s, !1);
              }
            })(c, s ? s(e) : e, n);
        };
      }
      let iU = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(t) {
            if (!t.standalone) return null;
            if (!this.cachedInjectors.has(t)) {
              const c = di(0, t.type),
                s =
                  c.length > 0
                    ? ya([c], this._injector, `Standalone[${t.type.name}]`)
                    : null;
              this.cachedInjectors.set(t, s);
            }
            return this.cachedInjectors.get(t);
          }
          ngOnDestroy() {
            try {
              for (const t of this.cachedInjectors.values()) null !== t && t.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static #e = (this.ɵprov = w({
            token: e,
            providedIn: 'environment',
            factory: () => new e(E(P1)),
          }));
        }
        return e;
      })();
      function Q(e) {
        M1('NgStandalone'),
          (e.getStandaloneInjector = n => n.get(iU).getOrCreateStandaloneInjector(e));
      }
      let IC = (() => {
        class e {
          log(t) {
            console.log(t);
          }
          warn(t) {
            console.warn(t);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: e.ɵfac,
            providedIn: 'platform',
          }));
        }
        return e;
      })();
      const OC = new _('');
      function I0(e) {
        return !!e && 'function' == typeof e.then;
      }
      function FC(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const zH = new _('');
      let PC = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, c) => {
                (this.resolve = t), (this.reject = c);
              })),
              (this.appInits = y(zH, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [];
            for (const s of this.appInits) {
              const r = s();
              if (I0(r)) t.push(r);
              else if (FC(r)) {
                const o = new Promise((i, a) => {
                  r.subscribe({ complete: i, error: a });
                });
                t.push(o);
              }
            }
            const c = () => {
              (this.done = !0), this.resolve();
            };
            Promise.all(t)
              .then(() => {
                c();
              })
              .catch(s => {
                this.reject(s);
              }),
              0 === t.length && c(),
              (this.initialized = !0);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      const Ds = new _('');
      let Fe = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = y(eR)),
              (this.afterRenderManager = y(lm)),
              (this.zonelessEnabled = y(o0)),
              (this.dirtyFlags = 0),
              (this.deferredDirtyFlags = 0),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new h1()),
              (this.afterTick = new h1()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = y(i3).hasPendingTasks.pipe(s2(t => !t))),
              (this._injector = y(P1));
          }
          get allViews() {
            return [...this.externalTestViews.keys(), ...this._views];
          }
          get destroyed() {
            return this._destroyed;
          }
          whenStable() {
            let t;
            return new Promise(c => {
              t = this.isStable.subscribe({
                next: s => {
                  s && c();
                },
              });
            }).finally(() => {
              t.unsubscribe();
            });
          }
          get injector() {
            return this._injector;
          }
          bootstrap(t, c) {
            const s = t instanceof gp;
            if (!this._injector.get(PC).done)
              throw (
                (!s &&
                  (function vt(e) {
                    const n = K(e) || Q2(e) || s1(e);
                    return null !== n && n.standalone;
                  })(t),
                new L(405, !1))
              );
            let o;
            (o = s ? t : this._injector.get(ts).resolveComponentFactory(t)),
              this.componentTypes.push(o.componentType);
            const i = (function _H(e) {
                return e.isBoundToModule;
              })(o)
                ? void 0
                : this._injector.get(g3),
              l = o.create(D2.NULL, [], c || o.selector, i),
              u = l.location.nativeElement,
              f = l.injector.get(OC, null);
            return (
              f?.registerApplication(u),
              l.onDestroy(() => {
                this.detachView(l.hostView),
                  Es(this.components, l),
                  f?.unregisterApplication(u);
              }),
              this._loadComponent(l),
              l
            );
          }
          tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
          }
          _tick() {
            if (this._runningTick) throw new L(101, !1);
            const t = W(null);
            try {
              (this._runningTick = !0), this.synchronize();
            } catch (c) {
              this.internalErrorHandler(c);
            } finally {
              (this._runningTick = !1), W(t), this.afterTick.next();
            }
          }
          synchronize() {
            let t = null;
            this._injector.destroyed ||
              (t = this._injector.get(ra, null, { optional: !0 })),
              (this.dirtyFlags |= this.deferredDirtyFlags),
              (this.deferredDirtyFlags = 0);
            let c = 0;
            for (; 0 !== this.dirtyFlags && c++ < 10; ) this.synchronizeOnce(t);
          }
          synchronizeOnce(t) {
            if (
              ((this.dirtyFlags |= this.deferredDirtyFlags),
              (this.deferredDirtyFlags = 0),
              7 & this.dirtyFlags)
            ) {
              const c = !!(1 & this.dirtyFlags);
              (this.dirtyFlags &= -8), (this.dirtyFlags |= 8), this.beforeRender.next(c);
              for (let { _lView: s, notifyErrorHandler: r } of this._views)
                DH(s, r, c, this.zonelessEnabled);
              if (
                ((this.dirtyFlags &= -5),
                this.syncDirtyFlagsWithViews(),
                7 & this.dirtyFlags)
              )
                return;
            } else t?.begin?.(), t?.end?.();
            8 & this.dirtyFlags &&
              ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
              this.syncDirtyFlagsWithViews();
          }
          syncDirtyFlagsWithViews() {
            this.allViews.some(({ _lView: t }) => f6(t))
              ? (this.dirtyFlags |= 2)
              : (this.dirtyFlags &= -8);
          }
          attachView(t) {
            const c = t;
            this._views.push(c), c.attachToAppRef(this);
          }
          detachView(t) {
            const c = t;
            Es(this._views, c), c.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView), this.tick(), this.components.push(t);
            const c = this._injector.get(Ds, []);
            [...this._bootstrapListeners, ...c].forEach(s => s(t));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach(t => t()),
                  this._views.slice().forEach(t => t.destroy());
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(t) {
            return this._destroyListeners.push(t), () => Es(this._destroyListeners, t);
          }
          destroy() {
            if (this._destroyed) throw new L(406, !1);
            const t = this._injector;
            t.destroy && !t.destroyed && t.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      function Es(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function DH(e, n, t, c) {
        (t || f6(e)) && Y6(e, n, t && !c ? 0 : 1);
      }
      class EH {
        constructor(n, t) {
          (this.ngModuleFactory = n), (this.componentFactories = t);
        }
      }
      let NH = (() => {
          class e {
            compileModuleSync(t) {
              return new va(t);
            }
            compileModuleAsync(t) {
              return Promise.resolve(this.compileModuleSync(t));
            }
            compileModuleAndAllComponentsSync(t) {
              const c = this.compileModuleSync(t),
                r = H1(a1(t).declarations).reduce((o, i) => {
                  const a = K(i);
                  return a && o.push(new u0(a)), o;
                }, []);
              return new EH(c, r);
            }
            compileModuleAndAllComponentsAsync(t) {
              return Promise.resolve(this.compileModuleAndAllComponentsSync(t));
            }
            clearCache() {}
            clearCacheFor(t) {}
            getModuleId(t) {}
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        IH = (() => {
          class e {
            constructor() {
              (this.zone = y(l2)),
                (this.changeDetectionScheduler = y(L4)),
                (this.applicationRef = y(Fe));
            }
            initialize() {
              this._onMicrotaskEmptySubscription ||
                (this._onMicrotaskEmptySubscription =
                  this.zone.onMicrotaskEmpty.subscribe({
                    next: () => {
                      this.changeDetectionScheduler.runningTick ||
                        this.zone.run(() => {
                          this.applicationRef.tick();
                        });
                    },
                  }));
            }
            ngOnDestroy() {
              this._onMicrotaskEmptySubscription?.unsubscribe();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function il({
        ngZoneFactory: e,
        ignoreChangesOutsideZone: n,
        scheduleInRootZone: t,
      }) {
        return (
          (e ??= () => new l2({ ...al(), scheduleInRootZone: t })),
          [
            { provide: l2, useFactory: e },
            {
              provide: F1,
              multi: !0,
              useFactory: () => {
                const c = y(IH, { optional: !0 });
                return () => c.initialize();
              },
            },
            {
              provide: F1,
              multi: !0,
              useFactory: () => {
                const c = y(TH);
                return () => {
                  c.initialize();
                };
              },
            },
            !0 === n ? { provide: mp, useValue: !0 } : [],
            { provide: sa, useValue: t ?? cd },
          ]
        );
      }
      function al(e) {
        return {
          enableLongStackTrace: !1,
          shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
          shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
        };
      }
      let TH = (() => {
          class e {
            constructor() {
              (this.subscription = new i1()),
                (this.initialized = !1),
                (this.zone = y(l2)),
                (this.pendingTasks = y(i3));
            }
            initialize() {
              if (this.initialized) return;
              this.initialized = !0;
              let t = null;
              !this.zone.isStable &&
                !this.zone.hasPendingMacrotasks &&
                !this.zone.hasPendingMicrotasks &&
                (t = this.pendingTasks.add()),
                this.zone.runOutsideAngular(() => {
                  this.subscription.add(
                    this.zone.onStable.subscribe(() => {
                      l2.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          null !== t &&
                            !this.zone.hasPendingMacrotasks &&
                            !this.zone.hasPendingMicrotasks &&
                            (this.pendingTasks.remove(t), (t = null));
                        });
                    }),
                  );
                }),
                this.subscription.add(
                  this.zone.onUnstable.subscribe(() => {
                    l2.assertInAngularZone(), (t ??= this.pendingTasks.add());
                  }),
                );
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        A0 = (() => {
          class e {
            constructor() {
              (this.appRef = y(Fe)),
                (this.taskService = y(i3)),
                (this.ngZone = y(l2)),
                (this.zonelessEnabled = y(o0)),
                (this.disableScheduling = y(mp, { optional: !0 }) ?? !1),
                (this.zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run),
                (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
                (this.subscriptions = new i1()),
                (this.angularZoneId = this.zoneIsDefined
                  ? this.ngZone._inner?.get(w6)
                  : null),
                (this.scheduleInRootZone =
                  !this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  (y(sa, { optional: !0 }) ?? !1)),
                (this.cancelScheduledCallback = null),
                (this.useMicrotaskScheduler = !1),
                (this.runningTick = !1),
                (this.pendingRenderTaskId = null),
                this.subscriptions.add(
                  this.appRef.afterTick.subscribe(() => {
                    this.runningTick || this.cleanup();
                  }),
                ),
                this.subscriptions.add(
                  this.ngZone.onUnstable.subscribe(() => {
                    this.runningTick || this.cleanup();
                  }),
                ),
                (this.disableScheduling ||=
                  !this.zonelessEnabled &&
                  (this.ngZone instanceof Qi || !this.zoneIsDefined));
            }
            notify(t) {
              if (!this.zonelessEnabled && 5 === t) return;
              switch (t) {
                case 0:
                  this.appRef.dirtyFlags |= 2;
                  break;
                case 3:
                case 2:
                case 4:
                case 5:
                case 1:
                  this.appRef.dirtyFlags |= 4;
                  break;
                case 7:
                  this.appRef.deferredDirtyFlags |= 8;
                  break;
                default:
                  this.appRef.dirtyFlags |= 8;
              }
              if (!this.shouldScheduleTick()) return;
              const c = this.useMicrotaskScheduler ? rd : sd;
              (this.pendingRenderTaskId = this.taskService.add()),
                (this.cancelScheduledCallback = this.scheduleInRootZone
                  ? Zone.root.run(() => c(() => this.tick()))
                  : this.ngZone.runOutsideAngular(() => c(() => this.tick())));
            }
            shouldScheduleTick() {
              return !(
                this.disableScheduling ||
                null !== this.pendingRenderTaskId ||
                this.runningTick ||
                this.appRef._runningTick ||
                (!this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  Zone.current.get(w6 + this.angularZoneId))
              );
            }
            tick() {
              if (this.runningTick || this.appRef.destroyed) return;
              !this.zonelessEnabled &&
                7 & this.appRef.dirtyFlags &&
                (this.appRef.dirtyFlags |= 1);
              const t = this.taskService.add();
              try {
                this.ngZone.run(
                  () => {
                    (this.runningTick = !0), this.appRef._tick();
                  },
                  void 0,
                  this.schedulerTickApplyArgs,
                );
              } catch (c) {
                throw (this.taskService.remove(t), c);
              } finally {
                this.cleanup();
              }
              (this.useMicrotaskScheduler = !0),
                rd(() => {
                  (this.useMicrotaskScheduler = !1), this.taskService.remove(t);
                });
            }
            ngOnDestroy() {
              this.subscriptions.unsubscribe(), this.cleanup();
            }
            cleanup() {
              if (
                ((this.runningTick = !1),
                this.cancelScheduledCallback?.(),
                (this.cancelScheduledCallback = null),
                null !== this.pendingRenderTaskId)
              ) {
                const t = this.pendingRenderTaskId;
                (this.pendingRenderTaskId = null), this.taskService.remove(t);
              }
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const St = new _('', {
          providedIn: 'root',
          factory: () =>
            y(St, e2.Optional | e2.SkipSelf) ||
            (function kH() {
              return (typeof $localize < 'u' && $localize.locale) || Cs;
            })(),
        }),
        ul = new _('');
      function xs(e) {
        return !!e.platformInjector;
      }
      let It = null;
      let T0 = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = GH);
        }
        return e;
      })();
      function GH(e) {
        return (function qH(e, n, t) {
          if (e3(e) && !t) {
            const c = V1(e.index, n);
            return new Xn(c, c);
          }
          return 175 & e.type ? new Xn(n[x2], n) : null;
        })(h2(), M(), !(16 & ~e));
      }
      class tM {
        constructor() {}
        supports(n) {
          return os(n);
        }
        create(n) {
          return new KH(n);
        }
      }
      const QH = (e, n) => n;
      class KH {
        constructor(n) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = n || QH);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            c = this._removalsHead,
            s = 0,
            r = null;
          for (; t || c; ) {
            const o = !c || (t && t.currentIndex < cM(c, s, r)) ? t : c,
              i = cM(o, s, r),
              a = o.currentIndex;
            if (o === c) s--, (c = c._nextRemoved);
            else if (((t = t._next), null == o.previousIndex)) s++;
            else {
              r || (r = []);
              const l = i - s,
                u = a - s;
              if (l != u) {
                for (let d = 0; d < l; d++) {
                  const h = d < r.length ? r[d] : (r[d] = 0),
                    p = h + d;
                  u <= p && p < l && (r[d] = h + 1);
                }
                r[o.previousIndex] = u - l;
              }
            }
            i !== a && n(o, i, a);
          }
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachMovedItem(n) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        forEachIdentityChange(n) {
          let t;
          for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) n(t);
        }
        diff(n) {
          if ((null == n && (n = []), !os(n))) throw new L(900, !1);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let s,
            r,
            o,
            t = this._itHead,
            c = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let i = 0; i < this.length; i++)
              (r = n[i]),
                (o = this._trackByFn(i, r)),
                null !== t && Object.is(t.trackById, o)
                  ? (c && (t = this._verifyReinsertion(t, r, o, i)),
                    Object.is(t.item, r) || this._addIdentityChange(t, r))
                  : ((t = this._mismatch(t, r, o, i)), (c = !0)),
                (t = t._next);
          } else
            (s = 0),
              (function fV(e, n) {
                if (Array.isArray(e)) for (let t = 0; t < e.length; t++) n(e[t]);
                else {
                  const t = e[Symbol.iterator]();
                  let c;
                  for (; !(c = t.next()).done; ) n(c.value);
                }
              })(n, i => {
                (o = this._trackByFn(s, i)),
                  null !== t && Object.is(t.trackById, o)
                    ? (c && (t = this._verifyReinsertion(t, i, o, s)),
                      Object.is(t.item, i) || this._addIdentityChange(t, i))
                    : ((t = this._mismatch(t, i, o, s)), (c = !0)),
                  (t = t._next),
                  s++;
              }),
              (this.length = s);
          return this._truncate(t), (this.collection = n), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (n = this._previousItHead = this._itHead; null !== n; n = n._next)
              n._nextPrevious = n._next;
            for (n = this._additionsHead; null !== n; n = n._nextAdded)
              n.previousIndex = n.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null, n = this._movesHead;
              null !== n;
              n = n._nextMoved
            )
              n.previousIndex = n.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(n, t, c, s) {
          let r;
          return (
            null === n ? (r = this._itTail) : ((r = n._prev), this._remove(n)),
            null !==
            (n =
              null === this._unlinkedRecords ? null : this._unlinkedRecords.get(c, null))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t),
                this._reinsertAfter(n, r, s))
              : null !==
                (n = null === this._linkedRecords ? null : this._linkedRecords.get(c, s))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t),
                this._moveAfter(n, r, s))
              : (n = this._addAfter(new XH(t, c), r, s)),
            n
          );
        }
        _verifyReinsertion(n, t, c, s) {
          let r =
            null === this._unlinkedRecords ? null : this._unlinkedRecords.get(c, null);
          return (
            null !== r
              ? (n = this._reinsertAfter(r, n._prev, s))
              : n.currentIndex != s && ((n.currentIndex = s), this._addToMoves(n, s)),
            n
          );
        }
        _truncate(n) {
          for (; null !== n; ) {
            const t = n._next;
            this._addToRemovals(this._unlink(n)), (n = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(n, t, c) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(n);
          const s = n._prevRemoved,
            r = n._nextRemoved;
          return (
            null === s ? (this._removalsHead = r) : (s._nextRemoved = r),
            null === r ? (this._removalsTail = s) : (r._prevRemoved = s),
            this._insertAfter(n, t, c),
            this._addToMoves(n, c),
            n
          );
        }
        _moveAfter(n, t, c) {
          return this._unlink(n), this._insertAfter(n, t, c), this._addToMoves(n, c), n;
        }
        _addAfter(n, t, c) {
          return (
            this._insertAfter(n, t, c),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = n)
                : (this._additionsTail._nextAdded = n)),
            n
          );
        }
        _insertAfter(n, t, c) {
          const s = null === t ? this._itHead : t._next;
          return (
            (n._next = s),
            (n._prev = t),
            null === s ? (this._itTail = n) : (s._prev = n),
            null === t ? (this._itHead = n) : (t._next = n),
            null === this._linkedRecords && (this._linkedRecords = new nM()),
            this._linkedRecords.put(n),
            (n.currentIndex = c),
            n
          );
        }
        _remove(n) {
          return this._addToRemovals(this._unlink(n));
        }
        _unlink(n) {
          null !== this._linkedRecords && this._linkedRecords.remove(n);
          const t = n._prev,
            c = n._next;
          return (
            null === t ? (this._itHead = c) : (t._next = c),
            null === c ? (this._itTail = t) : (c._prev = t),
            n
          );
        }
        _addToMoves(n, t) {
          return (
            n.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = n)
                  : (this._movesTail._nextMoved = n)),
            n
          );
        }
        _addToRemovals(n) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new nM()),
            this._unlinkedRecords.put(n),
            (n.currentIndex = null),
            (n._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = n), (n._prevRemoved = null))
              : ((n._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = n)),
            n
          );
        }
        _addIdentityChange(n, t) {
          return (
            (n.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = n)
                : (this._identityChangesTail._nextIdentityChange = n)),
            n
          );
        }
      }
      class XH {
        constructor(n, t) {
          (this.item = n),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class JH {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(n) {
          null === this._head
            ? ((this._head = this._tail = n), (n._nextDup = null), (n._prevDup = null))
            : ((this._tail._nextDup = n),
              (n._prevDup = this._tail),
              (n._nextDup = null),
              (this._tail = n));
        }
        get(n, t) {
          let c;
          for (c = this._head; null !== c; c = c._nextDup)
            if ((null === t || t <= c.currentIndex) && Object.is(c.trackById, n))
              return c;
          return null;
        }
        remove(n) {
          const t = n._prevDup,
            c = n._nextDup;
          return (
            null === t ? (this._head = c) : (t._nextDup = c),
            null === c ? (this._tail = t) : (c._prevDup = t),
            null === this._head
          );
        }
      }
      class nM {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let c = this.map.get(t);
          c || ((c = new JH()), this.map.set(t, c)), c.add(n);
        }
        get(n, t) {
          const s = this.map.get(n);
          return s ? s.get(n, t) : null;
        }
        remove(n) {
          const t = n.trackById;
          return this.map.get(t).remove(n) && this.map.delete(t), n;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function cM(e, n, t) {
        const c = e.previousIndex;
        if (null === c) return c;
        let s = 0;
        return t && c < t.length && (s = t[c]), c + n + s;
      }
      class sM {
        constructor() {}
        supports(n) {
          return n instanceof Map || La(n);
        }
        create() {
          return new e$();
        }
      }
      class e$ {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(n) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) n(t);
        }
        forEachPreviousItem(n) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) n(t);
        }
        forEachChangedItem(n) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) n(t);
        }
        forEachAddedItem(n) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) n(t);
        }
        forEachRemovedItem(n) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) n(t);
        }
        diff(n) {
          if (n) {
            if (!(n instanceof Map || La(n))) throw new L(900, !1);
          } else n = new Map();
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(n, (c, s) => {
              if (t && t.key === s)
                this._maybeAddToChanges(t, c), (this._appendAfter = t), (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(s, c);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let c = t; null !== c; c = c._nextRemoved)
              c === this._mapHead && (this._mapHead = null),
                this._records.delete(c.key),
                (c._nextRemoved = c._next),
                (c.previousValue = c.currentValue),
                (c.currentValue = null),
                (c._prev = null),
                (c._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(n, t) {
          if (n) {
            const c = n._prev;
            return (
              (t._next = n),
              (t._prev = c),
              (n._prev = t),
              c && (c._next = t),
              n === this._mapHead && (this._mapHead = t),
              (this._appendAfter = n),
              n
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(n, t) {
          if (this._records.has(n)) {
            const s = this._records.get(n);
            this._maybeAddToChanges(s, t);
            const r = s._prev,
              o = s._next;
            return (
              r && (r._next = o),
              o && (o._prev = r),
              (s._next = null),
              (s._prev = null),
              s
            );
          }
          const c = new t$(n);
          return (
            this._records.set(n, c), (c.currentValue = t), this._addToAdditions(c), c
          );
        }
        _reset() {
          if (this.isDirty) {
            let n;
            for (
              this._previousMapHead = this._mapHead, n = this._previousMapHead;
              null !== n;
              n = n._next
            )
              n._nextPrevious = n._next;
            for (n = this._changesHead; null !== n; n = n._nextChanged)
              n.previousValue = n.currentValue;
            for (n = this._additionsHead; null != n; n = n._nextAdded)
              n.previousValue = n.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(n, t) {
          Object.is(t, n.currentValue) ||
            ((n.previousValue = n.currentValue),
            (n.currentValue = t),
            this._addToChanges(n));
        }
        _addToAdditions(n) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = n)
            : ((this._additionsTail._nextAdded = n), (this._additionsTail = n));
        }
        _addToChanges(n) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = n)
            : ((this._changesTail._nextChanged = n), (this._changesTail = n));
        }
        _forEach(n, t) {
          n instanceof Map ? n.forEach(t) : Object.keys(n).forEach(c => t(n[c], c));
        }
      }
      class t$ {
        constructor(n) {
          (this.key = n),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function rM() {
        return new gl([new tM()]);
      }
      let gl = (() => {
        class e {
          static #e = (this.ɵprov = w({ token: e, providedIn: 'root', factory: rM }));
          constructor(t) {
            this.factories = t;
          }
          static create(t, c) {
            if (null != c) {
              const s = c.factories.slice();
              t = t.concat(s);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: c => e.create(t, c || rM()),
              deps: [[e, new oi(), new ri()]],
            };
          }
          find(t) {
            const c = this.factories.find(s => s.supports(t));
            if (null != c) return c;
            throw new L(901, !1);
          }
        }
        return e;
      })();
      function oM() {
        return new As([new sM()]);
      }
      let As = (() => {
        class e {
          static #e = (this.ɵprov = w({ token: e, providedIn: 'root', factory: oM }));
          constructor(t) {
            this.factories = t;
          }
          static create(t, c) {
            if (c) {
              const s = c.factories.slice();
              t = t.concat(s);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: c => e.create(t, c || oM()),
              deps: [[e, new oi(), new ri()]],
            };
          }
          find(t) {
            const c = this.factories.find(s => s.supports(t));
            if (c) return c;
            throw new L(901, !1);
          }
        }
        return e;
      })();
      function m$(e) {
        try {
          const { rootComponent: n, appProviders: t, platformProviders: c } = e,
            s = (function HH(e = []) {
              if (It) return It;
              const n = (function ZC(e = [], n) {
                return D2.create({
                  name: n,
                  providers: [
                    { provide: mi, useValue: 'platform' },
                    { provide: ul, useValue: new Set([() => (It = null)]) },
                    ...e,
                  ],
                });
              })(e);
              return (
                (It = n),
                (function VC() {
                  !(function NI(e) {
                    Y9 = e;
                  })(() => {
                    throw new L(600, !1);
                  });
                })(),
                (function QC(e) {
                  e.get(Sd, null)?.forEach(t => t());
                })(n),
                n
              );
            })(c),
            r = [il({}), { provide: L4, useExisting: A0 }, ...(t || [])];
          return (function qC(e) {
            const n = xs(e) ? e.r3Injector : e.moduleRef.injector,
              t = n.get(l2);
            return t.run(() => {
              xs(e)
                ? e.r3Injector.resolveInjectorInitializers()
                : e.moduleRef.resolveInjectorInitializers();
              const c = n.get(Se, null);
              let s;
              if (
                (t.runOutsideAngular(() => {
                  s = t.onError.subscribe({
                    next: r => {
                      c.handleError(r);
                    },
                  });
                }),
                xs(e))
              ) {
                const r = () => n.destroy(),
                  o = e.platformInjector.get(ul);
                o.add(r),
                  n.onDestroy(() => {
                    s.unsubscribe(), o.delete(r);
                  });
              } else
                e.moduleRef.onDestroy(() => {
                  Es(e.allPlatformModules, e.moduleRef), s.unsubscribe();
                });
              return (function wH(e, n, t) {
                try {
                  const c = t();
                  return I0(c)
                    ? c.catch(s => {
                        throw (n.runOutsideAngular(() => e.handleError(s)), s);
                      })
                    : c;
                } catch (c) {
                  throw (n.runOutsideAngular(() => e.handleError(c)), c);
                }
              })(c, t, () => {
                const r = n.get(PC);
                return (
                  r.runInitializers(),
                  r.donePromise.then(() => {
                    if (
                      ((function XB(e) {
                        'string' == typeof e && (rg = e.toLowerCase().replace(/_/g, '-'));
                      })(n.get(St, Cs) || Cs),
                      xs(e))
                    ) {
                      const i = n.get(Fe);
                      return (
                        void 0 !== e.rootComponent && i.bootstrap(e.rootComponent), i
                      );
                    }
                    return (
                      (function BH(e, n) {
                        const t = e.injector.get(Fe);
                        if (e._bootstrapComponents.length > 0)
                          e._bootstrapComponents.forEach(c => t.bootstrap(c));
                        else {
                          if (!e.instance.ngDoBootstrap) throw new L(-403, !1);
                          e.instance.ngDoBootstrap(t);
                        }
                        n.push(e);
                      })(e.moduleRef, e.allPlatformModules),
                      e.moduleRef
                    );
                  })
                );
              });
            });
          })({
            r3Injector: new tm({
              providers: r,
              parent: s,
              debugName: '',
              runEnvironmentInitializers: !1,
            }).injector,
            platformInjector: s,
            rootComponent: n,
          });
        } catch (n) {
          return Promise.reject(n);
        }
      }
      const zM = new _('');
      function $4(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function b3(e, n) {
        M1('NgSignals');
        const t = (function wI(e) {
          const n = Object.create(DI);
          n.computation = e;
          const t = () => {
            if ((j9(n), bo(n), n.value === kc)) throw n.error;
            return n.value;
          };
          return (t[ie] = n), t;
        })(e);
        return n?.equal && (t[ie].equal = n.equal), t;
      }
      function Pe(e) {
        const n = W(null);
        try {
          return e();
        } finally {
          W(n);
        }
      }
      let AM = null;
      function At() {
        return AM;
      }
      class U$ {}
      const T1 = new _('');
      let yl = (() => {
          class e {
            historyGo(t) {
              throw new Error('');
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(H$),
              providedIn: 'platform',
            }));
          }
          return e;
        })(),
        H$ = (() => {
          class e extends yl {
            constructor() {
              super(),
                (this._doc = y(T1)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return At().getBaseHref(this._doc);
            }
            onPopState(t) {
              const c = At().getGlobalEventTarget(this._doc, 'window');
              return (
                c.addEventListener('popstate', t, !1),
                () => c.removeEventListener('popstate', t)
              );
            }
            onHashChange(t) {
              const c = At().getGlobalEventTarget(this._doc, 'window');
              return (
                c.addEventListener('hashchange', t, !1),
                () => c.removeEventListener('hashchange', t)
              );
            }
            get href() {
              return this._location.href;
            }
            get protocol() {
              return this._location.protocol;
            }
            get hostname() {
              return this._location.hostname;
            }
            get port() {
              return this._location.port;
            }
            get pathname() {
              return this._location.pathname;
            }
            get search() {
              return this._location.search;
            }
            get hash() {
              return this._location.hash;
            }
            set pathname(t) {
              this._location.pathname = t;
            }
            pushState(t, c, s) {
              this._history.pushState(t, c, s);
            }
            replaceState(t, c, s) {
              this._history.replaceState(t, c, s);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            historyGo(t = 0) {
              this._history.go(t);
            }
            getState() {
              return this._history.state;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => new e(),
              providedIn: 'platform',
            }));
          }
          return e;
        })();
      function Ll(e, n) {
        if (0 == e.length) return n;
        if (0 == n.length) return e;
        let t = 0;
        return (
          e.endsWith('/') && t++,
          n.startsWith('/') && t++,
          2 == t ? e + n.substring(1) : 1 == t ? e + n : e + '/' + n
        );
      }
      function TM(e) {
        const n = e.match(/#|\?|$/),
          t = (n && n.index) || e.length;
        return e.slice(0, t - ('/' === e[t - 1] ? 1 : 0)) + e.slice(t);
      }
      function rt(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let G4 = (() => {
        class e {
          historyGo(t) {
            throw new Error('');
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: () => y($$),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const kM = new _('');
      let $$ = (() => {
          class e extends G4 {
            constructor(t, c) {
              super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                (this._baseHref =
                  c ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  y(T1).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(t) {
              return Ll(this._baseHref, t);
            }
            path(t = !1) {
              const c =
                  this._platformLocation.pathname + rt(this._platformLocation.search),
                s = this._platformLocation.hash;
              return s && t ? `${c}${s}` : c;
            }
            pushState(t, c, s, r) {
              const o = this.prepareExternalUrl(s + rt(r));
              this._platformLocation.pushState(t, c, o);
            }
            replaceState(t, c, s, r) {
              const o = this.prepareExternalUrl(s + rt(r));
              this._platformLocation.replaceState(t, c, o);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(yl), E(kM, 8));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        G$ = (() => {
          class e extends G4 {
            constructor(t, c) {
              super(),
                (this._platformLocation = t),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != c && (this._baseHref = c);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(t) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(t = !1) {
              const c = this._platformLocation.hash ?? '#';
              return c.length > 0 ? c.substring(1) : c;
            }
            prepareExternalUrl(t) {
              const c = Ll(this._baseHref, t);
              return c.length > 0 ? '#' + c : c;
            }
            pushState(t, c, s, r) {
              let o = this.prepareExternalUrl(s + rt(r));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.pushState(t, c, o);
            }
            replaceState(t, c, s, r) {
              let o = this.prepareExternalUrl(s + rt(r));
              0 == o.length && (o = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, c, o);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(t = 0) {
              this._platformLocation.historyGo?.(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(yl), E(kM, 8));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        F0 = (() => {
          class e {
            constructor(t) {
              (this._subject = new X()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = t);
              const c = this._locationStrategy.getBaseHref();
              (this._basePath = (function Y$(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, t] = e.split(/\/\/[^\/]+/);
                  return t;
                }
                return e;
              })(TM(RM(c)))),
                this._locationStrategy.onPopState(s => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: s.state,
                    type: s.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []);
            }
            path(t = !1) {
              return this.normalize(this._locationStrategy.path(t));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(t, c = '') {
              return this.path() == this.normalize(t + rt(c));
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function W$(e, n) {
                  if (!e || !n.startsWith(e)) return n;
                  const t = n.substring(e.length);
                  return '' === t || ['/', ';', '?', '#'].includes(t[0]) ? t : n;
                })(this._basePath, RM(t)),
              );
            }
            prepareExternalUrl(t) {
              return (
                t && '/' !== t[0] && (t = '/' + t),
                this._locationStrategy.prepareExternalUrl(t)
              );
            }
            go(t, c = '', s = null) {
              this._locationStrategy.pushState(s, '', t, c),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + rt(c)), s);
            }
            replaceState(t, c = '', s = null) {
              this._locationStrategy.replaceState(s, '', t, c),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(t + rt(c)), s);
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(t = 0) {
              this._locationStrategy.historyGo?.(t);
            }
            onUrlChange(t) {
              return (
                this._urlChangeListeners.push(t),
                (this._urlChangeSubscription ??= this.subscribe(c => {
                  this._notifyUrlChangeListeners(c.url, c.state);
                })),
                () => {
                  const c = this._urlChangeListeners.indexOf(t);
                  this._urlChangeListeners.splice(c, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(t = '', c) {
              this._urlChangeListeners.forEach(s => s(t, c));
            }
            subscribe(t, c, s) {
              return this._subject.subscribe({ next: t, error: c, complete: s });
            }
            static #e = (this.normalizeQueryParams = rt);
            static #t = (this.joinWithSlash = Ll);
            static #n = (this.stripTrailingSlash = TM);
            static #c = (this.ɵfac = function (c) {
              return new (c || e)(E(G4));
            });
            static #s = (this.ɵprov = w({
              token: e,
              factory: () =>
                (function q$() {
                  return new F0(E(G4));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function RM(e) {
        return e.replace(/\/index.html$/, '');
      }
      const Il = /\s+/,
        $M = [];
      let V0 = (() => {
        class e {
          constructor(t, c) {
            (this._ngEl = t),
              (this._renderer = c),
              (this.initialClasses = $M),
              (this.stateMap = new Map());
          }
          set klass(t) {
            this.initialClasses = null != t ? t.trim().split(Il) : $M;
          }
          set ngClass(t) {
            this.rawClass = 'string' == typeof t ? t.trim().split(Il) : t;
          }
          ngDoCheck() {
            for (const c of this.initialClasses) this._updateState(c, !0);
            const t = this.rawClass;
            if (Array.isArray(t) || t instanceof Set)
              for (const c of t) this._updateState(c, !0);
            else if (null != t)
              for (const c of Object.keys(t)) this._updateState(c, !!t[c]);
            this._applyStateDiff();
          }
          _updateState(t, c) {
            const s = this.stateMap.get(t);
            void 0 !== s
              ? (s.enabled !== c && ((s.changed = !0), (s.enabled = c)), (s.touched = !0))
              : this.stateMap.set(t, { enabled: c, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const t of this.stateMap) {
              const c = t[0],
                s = t[1];
              s.changed
                ? (this._toggleClass(c, s.enabled), (s.changed = !1))
                : s.touched ||
                  (s.enabled && this._toggleClass(c, !1), this.stateMap.delete(c)),
                (s.touched = !1);
            }
          }
          _toggleClass(t, c) {
            (t = t.trim()).length > 0 &&
              t.split(Il).forEach(s => {
                c
                  ? this._renderer.addClass(this._ngEl.nativeElement, s)
                  : this._renderer.removeClass(this._ngEl.nativeElement, s);
              });
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(x1), z(Te));
          });
          static #t = (this.ɵdir = O({
            type: e,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: [0, 'class', 'klass'], ngClass: 'ngClass' },
            standalone: !0,
          }));
        }
        return e;
      })();
      class kG {
        constructor(n, t, c, s) {
          (this.$implicit = n), (this.ngForOf = t), (this.index = c), (this.count = s);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Al = (() => {
        class e {
          set ngForOf(t) {
            (this._ngForOf = t), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(t) {
            this._trackByFn = t;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(t, c, s) {
            (this._viewContainer = t),
              (this._template = c),
              (this._differs = s),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(t) {
            t && (this._template = t);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const t = this._ngForOf;
              !this._differ &&
                t &&
                (this._differ = this._differs.find(t).create(this.ngForTrackBy));
            }
            if (this._differ) {
              const t = this._differ.diff(this._ngForOf);
              t && this._applyChanges(t);
            }
          }
          _applyChanges(t) {
            const c = this._viewContainer;
            t.forEachOperation((s, r, o) => {
              if (null == s.previousIndex)
                c.createEmbeddedView(
                  this._template,
                  new kG(s.item, this._ngForOf, -1, -1),
                  null === o ? void 0 : o,
                );
              else if (null == o) c.remove(null === r ? void 0 : r);
              else if (null !== r) {
                const i = c.get(r);
                c.move(i, o), qM(i, s);
              }
            });
            for (let s = 0, r = c.length; s < r; s++) {
              const i = c.get(s).context;
              (i.index = s), (i.count = r), (i.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange(s => {
              qM(c.get(s.currentIndex), s);
            });
          }
          static ngTemplateContextGuard(t, c) {
            return !0;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(pe), z(st), z(gl));
          });
          static #t = (this.ɵdir = O({
            type: e,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
            standalone: !0,
          }));
        }
        return e;
      })();
      function qM(e, n) {
        e.context.$implicit = n.item;
      }
      let Qs = (() => {
        class e {
          constructor(t, c) {
            (this._viewContainer = t),
              (this._context = new RG()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = c);
          }
          set ngIf(t) {
            (this._context.$implicit = this._context.ngIf = t), this._updateView();
          }
          set ngIfThen(t) {
            WM('ngIfThen', t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            WM('ngIfElse', t),
              (this._elseTemplateRef = t),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context,
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context,
                  )));
          }
          static ngTemplateContextGuard(t, c) {
            return !0;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(pe), z(st));
          });
          static #t = (this.ɵdir = O({
            type: e,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
            standalone: !0,
          }));
        }
        return e;
      })();
      class RG {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function WM(e, n) {
        if (n && !n.createEmbeddedView)
          throw new Error(`${e} must be a TemplateRef, but received '${Z2(n)}'.`);
      }
      class Tl {
        constructor(n, t) {
          (this._viewContainerRef = n), (this._templateRef = t), (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(n) {
          n && !this._created ? this.create() : !n && this._created && this.destroy();
        }
      }
      let Ks = (() => {
          class e {
            constructor() {
              (this._defaultViews = []),
                (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(t) {
              (this._ngSwitch = t), 0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(t) {
              this._defaultViews.push(t);
            }
            _matchCase(t) {
              const c = t === this._ngSwitch;
              return (
                (this._lastCasesMatched ||= c),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                c
              );
            }
            _updateDefaultCases(t) {
              if (this._defaultViews.length > 0 && t !== this._defaultUsed) {
                this._defaultUsed = t;
                for (const c of this._defaultViews) c.enforceState(t);
              }
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        YM = (() => {
          class e {
            constructor(t, c, s) {
              (this.ngSwitch = s), s._addCase(), (this._view = new Tl(t, c));
            }
            ngDoCheck() {
              this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(pe), z(st), z(Ks, 9));
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        kl = (() => {
          class e {
            constructor(t, c, s) {
              (this._ngEl = t),
                (this._differs = c),
                (this._renderer = s),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(t) {
              (this._ngStyle = t),
                !this._differ && t && (this._differ = this._differs.find(t).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const t = this._differ.diff(this._ngStyle);
                t && this._applyChanges(t);
              }
            }
            _setStyle(t, c) {
              const [s, r] = t.split('.'),
                o = -1 === s.indexOf('-') ? void 0 : _t.DashCase;
              null != c
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    s,
                    r ? `${c}${r}` : c,
                    o,
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, s, o);
            }
            _applyChanges(t) {
              t.forEachRemovedItem(c => this._setStyle(c.key, null)),
                t.forEachAddedItem(c => this._setStyle(c.key, c.currentValue)),
                t.forEachChangedItem(c => this._setStyle(c.key, c.currentValue));
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(x1), z(As), z(Te));
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        at = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = X3({ type: e }));
            static #n = (this.ɵinj = Qt({}));
          }
          return e;
        })();
      const KM = 'browser';
      function XM(e) {
        return e === KM;
      }
      function JM(e) {
        return 'server' === e;
      }
      let iq = (() => {
        class e {
          static #e = (this.ɵprov = w({
            token: e,
            providedIn: 'root',
            factory: () => (XM(y(tt)) ? new aq(y(T1), window) : new uq()),
          }));
        }
        return e;
      })();
      class aq {
        constructor(n, t) {
          (this.document = n), (this.window = t), (this.offset = () => [0, 0]);
        }
        setOffset(n) {
          this.offset = Array.isArray(n) ? () => n : n;
        }
        getScrollPosition() {
          return [this.window.scrollX, this.window.scrollY];
        }
        scrollToPosition(n) {
          this.window.scrollTo(n[0], n[1]);
        }
        scrollToAnchor(n) {
          const t = (function lq(e, n) {
            const t = e.getElementById(n) || e.getElementsByName(n)[0];
            if (t) return t;
            if (
              'function' == typeof e.createTreeWalker &&
              e.body &&
              'function' == typeof e.body.attachShadow
            ) {
              const c = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let s = c.currentNode;
              for (; s; ) {
                const r = s.shadowRoot;
                if (r) {
                  const o = r.getElementById(n) || r.querySelector(`[name="${n}"]`);
                  if (o) return o;
                }
                s = c.nextNode();
              }
            }
            return null;
          })(this.document, n);
          t && (this.scrollToElement(t), t.focus());
        }
        setHistoryScrollRestoration(n) {
          this.window.history.scrollRestoration = n;
        }
        scrollToElement(n) {
          const t = n.getBoundingClientRect(),
            c = t.left + this.window.pageXOffset,
            s = t.top + this.window.pageYOffset,
            r = this.offset();
          this.window.scrollTo(c - r[0], s - r[1]);
        }
      }
      class uq {
        setOffset(n) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(n) {}
        scrollToAnchor(n) {}
        setHistoryScrollRestoration(n) {}
      }
      class Vq extends U$ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class Bl extends Vq {
        static makeCurrent() {
          !(function j$(e) {
            AM ??= e;
          })(new Bl());
        }
        onAndCancel(n, t, c) {
          return (
            n.addEventListener(t, c),
            () => {
              n.removeEventListener(t, c);
            }
          );
        }
        dispatchEvent(n, t) {
          n.dispatchEvent(t);
        }
        remove(n) {
          n.remove();
        }
        createElement(n, t) {
          return (t = t || this.getDefaultDocument()).createElement(n);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(n) {
          return n.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(n) {
          return n instanceof DocumentFragment;
        }
        getGlobalEventTarget(n, t) {
          return 'window' === t
            ? window
            : 'document' === t
            ? n
            : 'body' === t
            ? n.body
            : null;
        }
        getBaseHref(n) {
          const t = (function Bq() {
            return (
              (U0 = U0 || document.querySelector('base')),
              U0 ? U0.getAttribute('href') : null
            );
          })();
          return null == t
            ? null
            : (function jq(e) {
                return new URL(e, document.baseURI).pathname;
              })(t);
        }
        resetBaseElement() {
          U0 = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return (function AG(e, n) {
            n = encodeURIComponent(n);
            for (const t of e.split(';')) {
              const c = t.indexOf('='),
                [s, r] = -1 == c ? [t, ''] : [t.slice(0, c), t.slice(c + 1)];
              if (s.trim() === n) return decodeURIComponent(r);
            }
            return null;
          })(document.cookie, n);
        }
      }
      let U0 = null,
        Hq = (() => {
          class e {
            build() {
              return new XMLHttpRequest();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })();
      const tr = new _('');
      let lv = (() => {
        class e {
          constructor(t, c) {
            (this._zone = c),
              (this._eventNameToPlugin = new Map()),
              t.forEach(s => {
                s.manager = this;
              }),
              (this._plugins = t.slice().reverse());
          }
          addEventListener(t, c, s) {
            return this._findPluginFor(c).addEventListener(t, c, s);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(t) {
            let c = this._eventNameToPlugin.get(t);
            if (c) return c;
            if (((c = this._plugins.find(r => r.supports(t))), !c)) throw new L(5101, !1);
            return this._eventNameToPlugin.set(t, c), c;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(tr), E(l2));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class jl {
        constructor(n) {
          this._doc = n;
        }
      }
      const Ul = 'ng-app-id';
      let uv = (() => {
        class e {
          constructor(t, c, s, r = {}) {
            (this.doc = t),
              (this.appId = c),
              (this.nonce = s),
              (this.platformId = r),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = JM(r)),
              this.resetHostNodes();
          }
          addStyles(t) {
            for (const c of t) 1 === this.changeUsageCount(c, 1) && this.onStyleAdded(c);
          }
          removeStyles(t) {
            for (const c of t)
              this.changeUsageCount(c, -1) <= 0 && this.onStyleRemoved(c);
          }
          ngOnDestroy() {
            const t = this.styleNodesInDOM;
            t && (t.forEach(c => c.remove()), t.clear());
            for (const c of this.getAllStyles()) this.onStyleRemoved(c);
            this.resetHostNodes();
          }
          addHost(t) {
            this.hostNodes.add(t);
            for (const c of this.getAllStyles()) this.addStyleToHost(t, c);
          }
          removeHost(t) {
            this.hostNodes.delete(t);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(t) {
            for (const c of this.hostNodes) this.addStyleToHost(c, t);
          }
          onStyleRemoved(t) {
            const c = this.styleRef;
            c.get(t)?.elements?.forEach(s => s.remove()), c.delete(t);
          }
          collectServerRenderedStyles() {
            const t = this.doc.head?.querySelectorAll(`style[${Ul}="${this.appId}"]`);
            if (t?.length) {
              const c = new Map();
              return (
                t.forEach(s => {
                  null != s.textContent && c.set(s.textContent, s);
                }),
                c
              );
            }
            return null;
          }
          changeUsageCount(t, c) {
            const s = this.styleRef;
            if (s.has(t)) {
              const r = s.get(t);
              return (r.usage += c), r.usage;
            }
            return s.set(t, { usage: c, elements: [] }), c;
          }
          getStyleElement(t, c) {
            const s = this.styleNodesInDOM,
              r = s?.get(c);
            if (r?.parentNode === t) return s.delete(c), r.removeAttribute(Ul), r;
            {
              const o = this.doc.createElement('style');
              return (
                this.nonce && o.setAttribute('nonce', this.nonce),
                (o.textContent = c),
                this.platformIsServer && o.setAttribute(Ul, this.appId),
                t.appendChild(o),
                o
              );
            }
          }
          addStyleToHost(t, c) {
            const s = this.getStyleElement(t, c),
              r = this.styleRef,
              o = r.get(c)?.elements;
            o ? o.push(s) : r.set(c, { elements: [s], usage: 1 });
          }
          resetHostNodes() {
            const t = this.hostNodes;
            t.clear(), t.add(this.doc.head);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(T1), E(Vn), E(c8, 8), E(tt));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const Hl = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        $l = /%COMP%/g,
        Wq = new _('', { providedIn: 'root', factory: () => !0 });
      function dv(e, n) {
        return n.map(t => t.replace($l, e));
      }
      let hv = (() => {
        class e {
          constructor(t, c, s, r, o, i, a, l = null) {
            (this.eventManager = t),
              (this.sharedStylesHost = c),
              (this.appId = s),
              (this.removeStylesOnCompDestroy = r),
              (this.doc = o),
              (this.platformId = i),
              (this.ngZone = a),
              (this.nonce = l),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = JM(i)),
              (this.defaultRenderer = new Gl(t, o, a, this.platformIsServer));
          }
          createRenderer(t, c) {
            if (!t || !c) return this.defaultRenderer;
            this.platformIsServer &&
              c.encapsulation === ae.ShadowDom &&
              (c = { ...c, encapsulation: ae.Emulated });
            const s = this.getOrCreateRenderer(t, c);
            return (
              s instanceof mv ? s.applyToHost(t) : s instanceof ql && s.applyStyles(), s
            );
          }
          getOrCreateRenderer(t, c) {
            const s = this.rendererByCompId;
            let r = s.get(c.id);
            if (!r) {
              const o = this.doc,
                i = this.ngZone,
                a = this.eventManager,
                l = this.sharedStylesHost,
                u = this.removeStylesOnCompDestroy,
                f = this.platformIsServer;
              switch (c.encapsulation) {
                case ae.Emulated:
                  r = new mv(a, l, c, this.appId, u, o, i, f);
                  break;
                case ae.ShadowDom:
                  return new Kq(a, l, t, c, o, i, this.nonce, f);
                default:
                  r = new ql(a, l, c, u, o, i, f);
              }
              s.set(c.id, r);
            }
            return r;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(lv), E(uv), E(Vn), E(Wq), E(T1), E(tt), E(l2), E(c8));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class Gl {
        constructor(n, t, c, s) {
          (this.eventManager = n),
            (this.doc = t),
            (this.ngZone = c),
            (this.platformIsServer = s),
            (this.data = Object.create(null)),
            (this.throwOnSyntheticProps = !0),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(n, t) {
          return t ? this.doc.createElementNS(Hl[t] || t, n) : this.doc.createElement(n);
        }
        createComment(n) {
          return this.doc.createComment(n);
        }
        createText(n) {
          return this.doc.createTextNode(n);
        }
        appendChild(n, t) {
          (pv(n) ? n.content : n).appendChild(t);
        }
        insertBefore(n, t, c) {
          n && (pv(n) ? n.content : n).insertBefore(t, c);
        }
        removeChild(n, t) {
          t.remove();
        }
        selectRootElement(n, t) {
          let c = 'string' == typeof n ? this.doc.querySelector(n) : n;
          if (!c) throw new L(-5104, !1);
          return t || (c.textContent = ''), c;
        }
        parentNode(n) {
          return n.parentNode;
        }
        nextSibling(n) {
          return n.nextSibling;
        }
        setAttribute(n, t, c, s) {
          if (s) {
            t = s + ':' + t;
            const r = Hl[s];
            r ? n.setAttributeNS(r, t, c) : n.setAttribute(t, c);
          } else n.setAttribute(t, c);
        }
        removeAttribute(n, t, c) {
          if (c) {
            const s = Hl[c];
            s ? n.removeAttributeNS(s, t) : n.removeAttribute(`${c}:${t}`);
          } else n.removeAttribute(t);
        }
        addClass(n, t) {
          n.classList.add(t);
        }
        removeClass(n, t) {
          n.classList.remove(t);
        }
        setStyle(n, t, c, s) {
          s & (_t.DashCase | _t.Important)
            ? n.style.setProperty(t, c, s & _t.Important ? 'important' : '')
            : (n.style[t] = c);
        }
        removeStyle(n, t, c) {
          c & _t.DashCase ? n.style.removeProperty(t) : (n.style[t] = '');
        }
        setProperty(n, t, c) {
          null != n && (n[t] = c);
        }
        setValue(n, t) {
          n.nodeValue = t;
        }
        listen(n, t, c) {
          if ('string' == typeof n && !(n = At().getGlobalEventTarget(this.doc, n)))
            throw new Error(`Unsupported event target ${n} for event ${t}`);
          return this.eventManager.addEventListener(n, t, this.decoratePreventDefault(c));
        }
        decoratePreventDefault(n) {
          return t => {
            if ('__ngUnwrap__' === t) return n;
            !1 === (this.platformIsServer ? this.ngZone.runGuarded(() => n(t)) : n(t)) &&
              t.preventDefault();
          };
        }
      }
      function pv(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class Kq extends Gl {
        constructor(n, t, c, s, r, o, i, a) {
          super(n, r, o, a),
            (this.sharedStylesHost = t),
            (this.hostEl = c),
            (this.shadowRoot = c.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const l = dv(s.id, s.styles);
          for (const u of l) {
            const f = document.createElement('style');
            i && f.setAttribute('nonce', i),
              (f.textContent = u),
              this.shadowRoot.appendChild(f);
          }
        }
        nodeOrShadowRoot(n) {
          return n === this.hostEl ? this.shadowRoot : n;
        }
        appendChild(n, t) {
          return super.appendChild(this.nodeOrShadowRoot(n), t);
        }
        insertBefore(n, t, c) {
          return super.insertBefore(this.nodeOrShadowRoot(n), t, c);
        }
        removeChild(n, t) {
          return super.removeChild(null, t);
        }
        parentNode(n) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class ql extends Gl {
        constructor(n, t, c, s, r, o, i, a) {
          super(n, r, o, i),
            (this.sharedStylesHost = t),
            (this.removeStylesOnCompDestroy = s),
            (this.styles = a ? dv(a, c.styles) : c.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class mv extends ql {
        constructor(n, t, c, s, r, o, i, a) {
          const l = s + '-' + c.id;
          super(n, t, c, r, o, i, a, l),
            (this.contentAttr = (function Yq(e) {
              return '_ngcontent-%COMP%'.replace($l, e);
            })(l)),
            (this.hostAttr = (function Zq(e) {
              return '_nghost-%COMP%'.replace($l, e);
            })(l));
        }
        applyToHost(n) {
          this.applyStyles(), this.setAttribute(n, this.hostAttr, '');
        }
        createElement(n, t) {
          const c = super.createElement(n, t);
          return super.setAttribute(c, this.contentAttr, ''), c;
        }
      }
      let Xq = (() => {
          class e extends jl {
            constructor(t) {
              super(t);
            }
            supports(t) {
              return !0;
            }
            addEventListener(t, c, s) {
              return (
                t.addEventListener(c, s, !1), () => this.removeEventListener(t, c, s)
              );
            }
            removeEventListener(t, c, s) {
              return t.removeEventListener(c, s);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(T1));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        Jq = (() => {
          class e extends jl {
            constructor(t) {
              super(t), (this.delegate = y(zM, { optional: !0 }));
            }
            supports(t) {
              return !!this.delegate && this.delegate.supports(t);
            }
            addEventListener(t, c, s) {
              return this.delegate.addEventListener(t, c, s);
            }
            removeEventListener(t, c, s) {
              return this.delegate.removeEventListener(t, c, s);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(T1));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })();
      const gv = ['alt', 'control', 'meta', 'shift'],
        eW = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        tW = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      function Cv(e) {
        return { appProviders: [...lW, ...(e?.providers ?? [])], platformProviders: iW };
      }
      const iW = [
          { provide: tt, useValue: KM },
          {
            provide: Sd,
            useValue: function sW() {
              Bl.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: T1,
            useFactory: function oW() {
              return (
                (function zR(e) {
                  n8 = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        lW = [
          { provide: mi, useValue: 'root' },
          {
            provide: Se,
            useFactory: function rW() {
              return new Se();
            },
            deps: [],
          },
          { provide: tr, useClass: Xq, multi: !0, deps: [T1, l2, tt] },
          {
            provide: tr,
            useClass: (() => {
              class e extends jl {
                constructor(t) {
                  super(t);
                }
                supports(t) {
                  return null != e.parseEventName(t);
                }
                addEventListener(t, c, s) {
                  const r = e.parseEventName(c),
                    o = e.eventCallback(r.fullKey, s, this.manager.getZone());
                  return this.manager
                    .getZone()
                    .runOutsideAngular(() => At().onAndCancel(t, r.domEventName, o));
                }
                static parseEventName(t) {
                  const c = t.toLowerCase().split('.'),
                    s = c.shift();
                  if (0 === c.length || ('keydown' !== s && 'keyup' !== s)) return null;
                  const r = e._normalizeKey(c.pop());
                  let o = '',
                    i = c.indexOf('code');
                  if (
                    (i > -1 && (c.splice(i, 1), (o = 'code.')),
                    gv.forEach(l => {
                      const u = c.indexOf(l);
                      u > -1 && (c.splice(u, 1), (o += l + '.'));
                    }),
                    (o += r),
                    0 != c.length || 0 === r.length)
                  )
                    return null;
                  const a = {};
                  return (a.domEventName = s), (a.fullKey = o), a;
                }
                static matchEventFullKeyCode(t, c) {
                  let s = eW[t.key] || t.key,
                    r = '';
                  return (
                    c.indexOf('code.') > -1 && ((s = t.code), (r = 'code.')),
                    !(null == s || !s) &&
                      ((s = s.toLowerCase()),
                      ' ' === s ? (s = 'space') : '.' === s && (s = 'dot'),
                      gv.forEach(o => {
                        o !== s && (0, tW[o])(t) && (r += o + '.');
                      }),
                      (r += s),
                      r === c)
                  );
                }
                static eventCallback(t, c, s) {
                  return r => {
                    e.matchEventFullKeyCode(r, t) && s.runGuarded(() => c(r));
                  };
                }
                static _normalizeKey(t) {
                  return 'esc' === t ? 'escape' : t;
                }
                static #e = (this.ɵfac = function (c) {
                  return new (c || e)(E(T1));
                });
                static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
              }
              return e;
            })(),
            multi: !0,
            deps: [T1],
          },
          { provide: tr, useClass: Jq, multi: !0 },
          hv,
          uv,
          lv,
          { provide: ra, useExisting: hv },
          { provide: class fq {}, useClass: Hq, deps: [] },
          [],
        ];
      let uW = (() => {
          class e {
            constructor(t) {
              this._doc = t;
            }
            getTitle() {
              return this._doc.title;
            }
            setTitle(t) {
              this._doc.title = t || '';
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(T1));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        yv = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: function (c) {
                let s = null;
                return (s = c ? new (c || e)() : E(pW)), s;
              },
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        pW = (() => {
          class e extends yv {
            constructor(t) {
              super(), (this._doc = t);
            }
            sanitize(t, c) {
              if (null == c) return null;
              switch (t) {
                case J1.NONE:
                  return c;
                case J1.HTML:
                  return Ie(c, 'HTML') ? U1(c) : Jd(this._doc, String(c)).toString();
                case J1.STYLE:
                  return Ie(c, 'Style') ? U1(c) : c;
                case J1.SCRIPT:
                  if (Ie(c, 'Script')) return U1(c);
                  throw new L(5200, !1);
                case J1.URL:
                  return Ie(c, 'URL') ? U1(c) : F6(String(c));
                case J1.RESOURCE_URL:
                  if (Ie(c, 'ResourceURL')) return U1(c);
                  throw new L(5201, !1);
                default:
                  throw new L(5202, !1);
              }
            }
            bypassSecurityTrustHtml(t) {
              return (function HR(e) {
                return new FR(e);
              })(t);
            }
            bypassSecurityTrustStyle(t) {
              return (function $R(e) {
                return new PR(e);
              })(t);
            }
            bypassSecurityTrustScript(t) {
              return (function GR(e) {
                return new VR(e);
              })(t);
            }
            bypassSecurityTrustUrl(t) {
              return (function qR(e) {
                return new BR(e);
              })(t);
            }
            bypassSecurityTrustResourceUrl(t) {
              return (function WR(e) {
                return new jR(e);
              })(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(T1));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function Tt(e) {
        return this instanceof Tt ? ((this.v = e), this) : new Tt(e);
      }
      function bv(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = (function Ql(e) {
              var n = 'function' == typeof Symbol && Symbol.iterator,
                t = n && e[n],
                c = 0;
              if (t) return t.call(e);
              if (e && 'number' == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && c >= e.length && (e = void 0), { value: e && e[c++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
              );
            })(e)),
            (t = {}),
            c('next'),
            c('throw'),
            c('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function c(r) {
          t[r] =
            e[r] &&
            function (o) {
              return new Promise(function (i, a) {
                !(function s(r, o, i, a) {
                  Promise.resolve(a).then(function (l) {
                    r({ value: l, done: i });
                  }, o);
                })(i, a, (o = e[r](o)).done, o.value);
              });
            };
        }
      }
      'function' == typeof SuppressedError && SuppressedError;
      const wv = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function Dv(e) {
        return b2(e?.then);
      }
      function Ev(e) {
        return b2(e[Fo]);
      }
      function Nv(e) {
        return Symbol.asyncIterator && b2(e?.[Symbol.asyncIterator]);
      }
      function xv(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e ? 'an invalid object' : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const Sv = (function FW() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function Iv(e) {
        return b2(e?.[Sv]);
      }
      function Av(e) {
        return (function _v(e, n, t) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var s,
            c = t.apply(e, n || []),
            r = [];
          return (
            (s = {}),
            i('next'),
            i('throw'),
            i('return', function o(h) {
              return function (p) {
                return Promise.resolve(p).then(h, f);
              };
            }),
            (s[Symbol.asyncIterator] = function () {
              return this;
            }),
            s
          );
          function i(h, p) {
            c[h] &&
              ((s[h] = function (m) {
                return new Promise(function (C, v) {
                  r.push([h, m, C, v]) > 1 || a(h, m);
                });
              }),
              p && (s[h] = p(s[h])));
          }
          function a(h, p) {
            try {
              !(function l(h) {
                h.value instanceof Tt
                  ? Promise.resolve(h.value.v).then(u, f)
                  : d(r[0][2], h);
              })(c[h](p));
            } catch (m) {
              d(r[0][3], m);
            }
          }
          function u(h) {
            a('next', h);
          }
          function f(h) {
            a('throw', h);
          }
          function d(h, p) {
            h(p), r.shift(), r.length && a(r[0][0], r[0][1]);
          }
        })(this, arguments, function* () {
          const t = e.getReader();
          try {
            for (;;) {
              const { value: c, done: s } = yield Tt(t.read());
              if (s) return yield Tt(void 0);
              yield yield Tt(c);
            }
          } finally {
            t.releaseLock();
          }
        });
      }
      function Tv(e) {
        return b2(e?.getReader);
      }
      function Le(e) {
        if (e instanceof O2) return e;
        if (null != e) {
          if (Ev(e))
            return (function PW(e) {
              return new O2(n => {
                const t = e[Fo]();
                if (b2(t.subscribe)) return t.subscribe(n);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (wv(e))
            return (function VW(e) {
              return new O2(n => {
                for (let t = 0; t < e.length && !n.closed; t++) n.next(e[t]);
                n.complete();
              });
            })(e);
          if (Dv(e))
            return (function BW(e) {
              return new O2(n => {
                e.then(
                  t => {
                    n.closed || (n.next(t), n.complete());
                  },
                  t => n.error(t),
                ).then(null, tu);
              });
            })(e);
          if (Nv(e)) return kv(e);
          if (Iv(e))
            return (function jW(e) {
              return new O2(n => {
                for (const t of e) if ((n.next(t), n.closed)) return;
                n.complete();
              });
            })(e);
          if (Tv(e))
            return (function UW(e) {
              return kv(Av(e));
            })(e);
        }
        throw xv(e);
      }
      function kv(e) {
        return new O2(n => {
          (function HW(e, n) {
            var t, c, s, r;
            return (function Lv(e, n, t, c) {
              return new (t || (t = Promise))(function (r, o) {
                function i(u) {
                  try {
                    l(c.next(u));
                  } catch (f) {
                    o(f);
                  }
                }
                function a(u) {
                  try {
                    l(c.throw(u));
                  } catch (f) {
                    o(f);
                  }
                }
                function l(u) {
                  u.done
                    ? r(u.value)
                    : (function s(r) {
                        return r instanceof t
                          ? r
                          : new t(function (o) {
                              o(r);
                            });
                      })(u.value).then(i, a);
                }
                l((c = c.apply(e, n || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (t = bv(e); !(c = yield t.next()).done; )
                  if ((n.next(c.value), n.closed)) return;
              } catch (o) {
                s = { error: o };
              } finally {
                try {
                  c && !c.done && (r = t.return) && (yield r.call(t));
                } finally {
                  if (s) throw s.error;
                }
              }
              n.complete();
            });
          })(e, n).catch(t => n.error(t));
        });
      }
      function lt(e, n, t, c = 0, s = !1) {
        const r = n.schedule(function () {
          t(), s ? e.add(this.schedule(null, c)) : this.unsubscribe();
        }, c);
        if ((e.add(r), !s)) return r;
      }
      function Kl(e, n = 0) {
        return U2((t, c) => {
          t.subscribe(
            k2(
              c,
              s => lt(c, e, () => c.next(s), n),
              () => lt(c, e, () => c.complete(), n),
              s => lt(c, e, () => c.error(s), n),
            ),
          );
        });
      }
      function Rv(e, n = 0) {
        return U2((t, c) => {
          c.add(e.schedule(() => t.subscribe(c), n));
        });
      }
      function Ov(e, n) {
        if (!e) throw new Error('Iterable cannot be null');
        return new O2(t => {
          lt(t, n, () => {
            const c = e[Symbol.asyncIterator]();
            lt(
              t,
              n,
              () => {
                c.next().then(s => {
                  s.done ? t.complete() : t.next(s.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      function f1(e, n) {
        return n
          ? (function ZW(e, n) {
              if (null != e) {
                if (Ev(e))
                  return (function $W(e, n) {
                    return Le(e).pipe(Rv(n), Kl(n));
                  })(e, n);
                if (wv(e))
                  return (function qW(e, n) {
                    return new O2(t => {
                      let c = 0;
                      return n.schedule(function () {
                        c === e.length
                          ? t.complete()
                          : (t.next(e[c++]), t.closed || this.schedule());
                      });
                    });
                  })(e, n);
                if (Dv(e))
                  return (function GW(e, n) {
                    return Le(e).pipe(Rv(n), Kl(n));
                  })(e, n);
                if (Nv(e)) return Ov(e, n);
                if (Iv(e))
                  return (function WW(e, n) {
                    return new O2(t => {
                      let c;
                      return (
                        lt(t, n, () => {
                          (c = e[Sv]()),
                            lt(
                              t,
                              n,
                              () => {
                                let s, r;
                                try {
                                  ({ value: s, done: r } = c.next());
                                } catch (o) {
                                  return void t.error(o);
                                }
                                r ? t.complete() : t.next(s);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => b2(c?.return) && c.return()
                      );
                    });
                  })(e, n);
                if (Tv(e))
                  return (function YW(e, n) {
                    return Ov(Av(e), n);
                  })(e, n);
              }
              throw xv(e);
            })(e, n)
          : Le(e);
      }
      function Xl(e) {
        return e[e.length - 1];
      }
      function Jl(e) {
        return b2(Xl(e)) ? e.pop() : void 0;
      }
      function cr(e) {
        return (function QW(e) {
          return e && b2(e.schedule);
        })(Xl(e))
          ? e.pop()
          : void 0;
      }
      function $(...e) {
        return f1(e, cr(e));
      }
      const sr = So(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: KW } = Array,
        { getPrototypeOf: XW, prototype: JW, keys: eY } = Object;
      function Fv(e) {
        if (1 === e.length) {
          const n = e[0];
          if (KW(n)) return { args: n, keys: null };
          if (
            (function tY(e) {
              return e && 'object' == typeof e && XW(e) === JW;
            })(n)
          ) {
            const t = eY(n);
            return { args: t.map(c => n[c]), keys: t };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: nY } = Array;
      function Pv(e) {
        return s2(n =>
          (function cY(e, n) {
            return nY(n) ? e(...n) : e(n);
          })(e, n),
        );
      }
      function Vv(e, n) {
        return e.reduce((t, c, s) => ((t[c] = n[s]), t), {});
      }
      function e5(...e) {
        const n = cr(e),
          t = Jl(e),
          { args: c, keys: s } = Fv(e);
        if (0 === c.length) return f1([], n);
        const r = new O2(
          (function sY(e, n, t = Ye) {
            return c => {
              Bv(
                n,
                () => {
                  const { length: s } = e,
                    r = new Array(s);
                  let o = s,
                    i = s;
                  for (let a = 0; a < s; a++)
                    Bv(
                      n,
                      () => {
                        const l = f1(e[a], n);
                        let u = !1;
                        l.subscribe(
                          k2(
                            c,
                            f => {
                              (r[a] = f), u || ((u = !0), i--), i || c.next(t(r.slice()));
                            },
                            () => {
                              --o || c.complete();
                            },
                          ),
                        );
                      },
                      c,
                    );
                },
                c,
              );
            };
          })(c, n, s ? o => Vv(s, o) : Ye),
        );
        return t ? r.pipe(Pv(t)) : r;
      }
      function Bv(e, n, t) {
        e ? lt(t, e, n) : n();
      }
      function z1(e, n, t = 1 / 0) {
        return b2(n)
          ? z1((c, s) => s2((r, o) => n(c, r, s, o))(Le(e(c, s))), t)
          : ('number' == typeof n && (t = n),
            U2((c, s) =>
              (function rY(e, n, t, c, s, r, o, i) {
                const a = [];
                let l = 0,
                  u = 0,
                  f = !1;
                const d = () => {
                    f && !a.length && !l && n.complete();
                  },
                  h = m => (l < c ? p(m) : a.push(m)),
                  p = m => {
                    r && n.next(m), l++;
                    let C = !1;
                    Le(t(m, u++)).subscribe(
                      k2(
                        n,
                        v => {
                          s?.(v), r ? h(v) : n.next(v);
                        },
                        () => {
                          C = !0;
                        },
                        void 0,
                        () => {
                          if (C)
                            try {
                              for (l--; a.length && l < c; ) {
                                const v = a.shift();
                                o ? lt(n, o, () => p(v)) : p(v);
                              }
                              d();
                            } catch (v) {
                              n.error(v);
                            }
                        },
                      ),
                    );
                  };
                return (
                  e.subscribe(
                    k2(n, h, () => {
                      (f = !0), d();
                    }),
                  ),
                  () => {
                    i?.();
                  }
                );
              })(c, s, e, t),
            ));
      }
      function rr(...e) {
        return (function oY() {
          return (function t5(e = 1 / 0) {
            return z1(Ye, e);
          })(1);
        })()(f1(e, cr(e)));
      }
      function jv(e) {
        return new O2(n => {
          Le(e()).subscribe(n);
        });
      }
      function or(e, n) {
        const t = b2(e) ? e : () => e,
          c = s => s.error(t());
        return new O2(n ? s => n.schedule(c, 0, s) : c);
      }
      const Ve = new O2(e => e.complete());
      function n5() {
        return U2((e, n) => {
          let t = null;
          e._refCount++;
          const c = k2(n, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) return void (t = null);
            const s = e._connection,
              r = t;
            (t = null), s && (!r || s === r) && s.unsubscribe(), n.unsubscribe();
          });
          e.subscribe(c), c.closed || (t = e.connect());
        });
      }
      class Uv extends O2 {
        constructor(n, t) {
          super(),
            (this.source = n),
            (this.subjectFactory = t),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            ru(n) && (this.lift = n.lift);
        }
        _subscribe(n) {
          return this.getSubject().subscribe(n);
        }
        getSubject() {
          const n = this._subject;
          return (
            (!n || n.isStopped) && (this._subject = this.subjectFactory()), this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: n } = this;
          (this._subject = this._connection = null), n?.unsubscribe();
        }
        connect() {
          let n = this._connection;
          if (!n) {
            n = this._connection = new i1();
            const t = this.getSubject();
            n.add(
              this.source.subscribe(
                k2(
                  t,
                  void 0,
                  () => {
                    this._teardown(), t.complete();
                  },
                  c => {
                    this._teardown(), t.error(c);
                  },
                  () => this._teardown(),
                ),
              ),
            ),
              n.closed && ((this._connection = null), (n = i1.EMPTY));
          }
          return n;
        }
        refCount() {
          return n5()(this);
        }
      }
      function ut(e, n) {
        return U2((t, c) => {
          let s = null,
            r = 0,
            o = !1;
          const i = () => o && !s && c.complete();
          t.subscribe(
            k2(
              c,
              a => {
                s?.unsubscribe();
                let l = 0;
                const u = r++;
                Le(e(a, u)).subscribe(
                  (s = k2(
                    c,
                    f => c.next(n ? n(a, f, u, l++) : f),
                    () => {
                      (s = null), i();
                    },
                  )),
                );
              },
              () => {
                (o = !0), i();
              },
            ),
          );
        });
      }
      function D3(e) {
        return e <= 0
          ? () => Ve
          : U2((n, t) => {
              let c = 0;
              n.subscribe(
                k2(t, s => {
                  ++c <= e && (t.next(s), e <= c && t.complete());
                }),
              );
            });
      }
      function Hv(...e) {
        const n = cr(e);
        return U2((t, c) => {
          (n ? rr(e, t, n) : rr(e, t)).subscribe(c);
        });
      }
      function kt(e, n) {
        return U2((t, c) => {
          let s = 0;
          t.subscribe(k2(c, r => e.call(n, r, s++) && c.next(r)));
        });
      }
      function ir(e) {
        return U2((n, t) => {
          let c = !1;
          n.subscribe(
            k2(
              t,
              s => {
                (c = !0), t.next(s);
              },
              () => {
                c || t.next(e), t.complete();
              },
            ),
          );
        });
      }
      function $v(e = aY) {
        return U2((n, t) => {
          let c = !1;
          n.subscribe(
            k2(
              t,
              s => {
                (c = !0), t.next(s);
              },
              () => (c ? t.complete() : t.error(e())),
            ),
          );
        });
      }
      function aY() {
        return new sr();
      }
      function E3(e, n) {
        const t = arguments.length >= 2;
        return c =>
          c.pipe(
            e ? kt((s, r) => e(s, r, c)) : Ye,
            D3(1),
            t ? ir(n) : $v(() => new sr()),
          );
      }
      function ar(e, n) {
        return b2(n) ? z1(e, n, 1) : z1(e, 1);
      }
      function _1(e, n, t) {
        const c = b2(e) || n || t ? { next: e, error: n, complete: t } : e;
        return c
          ? U2((s, r) => {
              var o;
              null === (o = c.subscribe) || void 0 === o || o.call(c);
              let i = !0;
              s.subscribe(
                k2(
                  r,
                  a => {
                    var l;
                    null === (l = c.next) || void 0 === l || l.call(c, a), r.next(a);
                  },
                  () => {
                    var a;
                    (i = !1),
                      null === (a = c.complete) || void 0 === a || a.call(c),
                      r.complete();
                  },
                  a => {
                    var l;
                    (i = !1),
                      null === (l = c.error) || void 0 === l || l.call(c, a),
                      r.error(a);
                  },
                  () => {
                    var a, l;
                    i && (null === (a = c.unsubscribe) || void 0 === a || a.call(c)),
                      null === (l = c.finalize) || void 0 === l || l.call(c);
                  },
                ),
              );
            })
          : Ye;
      }
      function Y4(e) {
        return U2((n, t) => {
          let r,
            c = null,
            s = !1;
          (c = n.subscribe(
            k2(t, void 0, void 0, o => {
              (r = Le(e(o, Y4(e)(n)))),
                c ? (c.unsubscribe(), (c = null), r.subscribe(t)) : (s = !0);
            }),
          )),
            s && (c.unsubscribe(), (c = null), r.subscribe(t));
        });
      }
      function Gv(e, n) {
        return U2(
          (function lY(e, n, t, c, s) {
            return (r, o) => {
              let i = t,
                a = n,
                l = 0;
              r.subscribe(
                k2(
                  o,
                  u => {
                    const f = l++;
                    (a = i ? e(a, u, f) : ((i = !0), u)), c && o.next(a);
                  },
                  s &&
                    (() => {
                      i && o.next(a), o.complete();
                    }),
                ),
              );
            };
          })(e, n, arguments.length >= 2, !0),
        );
      }
      function c5(e) {
        return e <= 0
          ? () => Ve
          : U2((n, t) => {
              let c = [];
              n.subscribe(
                k2(
                  t,
                  s => {
                    c.push(s), e < c.length && c.shift();
                  },
                  () => {
                    for (const s of c) t.next(s);
                    t.complete();
                  },
                  void 0,
                  () => {
                    c = null;
                  },
                ),
              );
            });
      }
      function s5(e) {
        return U2((n, t) => {
          try {
            n.subscribe(t);
          } finally {
            t.add(e);
          }
        });
      }
      function qv(e) {
        return U2((n, t) => {
          Le(e).subscribe(k2(t, () => t.complete(), Pc)), !t.closed && n.subscribe(t);
        });
      }
      const q = 'primary',
        H0 = Symbol('RouteTitle');
      class dY {
        constructor(n) {
          this.params = n || {};
        }
        has(n) {
          return Object.prototype.hasOwnProperty.call(this.params, n);
        }
        get(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(n) {
          if (this.has(n)) {
            const t = this.params[n];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Z4(e) {
        return new dY(e);
      }
      function hY(e, n, t) {
        const c = t.path.split('/');
        if (
          c.length > e.length ||
          ('full' === t.pathMatch && (n.hasChildren() || c.length < e.length))
        )
          return null;
        const s = {};
        for (let r = 0; r < c.length; r++) {
          const o = c[r],
            i = e[r];
          if (':' === o[0]) s[o.substring(1)] = i;
          else if (o !== i.path) return null;
        }
        return { consumed: e.slice(0, c.length), posParams: s };
      }
      function Be(e, n) {
        const t = e ? r5(e) : void 0,
          c = n ? r5(n) : void 0;
        if (!t || !c || t.length != c.length) return !1;
        let s;
        for (let r = 0; r < t.length; r++) if (((s = t[r]), !Wv(e[s], n[s]))) return !1;
        return !0;
      }
      function r5(e) {
        return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
      }
      function Wv(e, n) {
        if (Array.isArray(e) && Array.isArray(n)) {
          if (e.length !== n.length) return !1;
          const t = [...e].sort(),
            c = [...n].sort();
          return t.every((s, r) => c[r] === s);
        }
        return e === n;
      }
      function Yv(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Rt(e) {
        return (function mW(e) {
          return !!e && (e instanceof O2 || (b2(e.lift) && b2(e.subscribe)));
        })(e)
          ? e
          : I0(e)
          ? f1(Promise.resolve(e))
          : $(e);
      }
      const mY = {
          exact: function Kv(e, n, t) {
            if (
              !x3(e.segments, n.segments) ||
              !lr(e.segments, n.segments, t) ||
              e.numberOfChildren !== n.numberOfChildren
            )
              return !1;
            for (const c in n.children)
              if (!e.children[c] || !Kv(e.children[c], n.children[c], t)) return !1;
            return !0;
          },
          subset: Xv,
        },
        Zv = {
          exact: function gY(e, n) {
            return Be(e, n);
          },
          subset: function CY(e, n) {
            return (
              Object.keys(n).length <= Object.keys(e).length &&
              Object.keys(n).every(t => Wv(e[t], n[t]))
            );
          },
          ignored: () => !0,
        };
      function Qv(e, n, t) {
        return (
          mY[t.paths](e.root, n.root, t.matrixParams) &&
          Zv[t.queryParams](e.queryParams, n.queryParams) &&
          !('exact' === t.fragment && e.fragment !== n.fragment)
        );
      }
      function Xv(e, n, t) {
        return Jv(e, n, n.segments, t);
      }
      function Jv(e, n, t, c) {
        if (e.segments.length > t.length) {
          const s = e.segments.slice(0, t.length);
          return !(!x3(s, t) || n.hasChildren() || !lr(s, t, c));
        }
        if (e.segments.length === t.length) {
          if (!x3(e.segments, t) || !lr(e.segments, t, c)) return !1;
          for (const s in n.children)
            if (!e.children[s] || !Xv(e.children[s], n.children[s], c)) return !1;
          return !0;
        }
        {
          const s = t.slice(0, e.segments.length),
            r = t.slice(e.segments.length);
          return (
            !!(x3(e.segments, s) && lr(e.segments, s, c) && e.children[q]) &&
            Jv(e.children[q], n, r, c)
          );
        }
      }
      function lr(e, n, t) {
        return n.every((c, s) => Zv[t](e[s].parameters, c.parameters));
      }
      class N3 {
        constructor(n = new m2([], {}), t = {}, c = null) {
          (this.root = n), (this.queryParams = t), (this.fragment = c);
        }
        get queryParamMap() {
          return (this._queryParamMap ??= Z4(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return yY.serialize(this);
        }
      }
      class m2 {
        constructor(n, t) {
          (this.segments = n),
            (this.children = t),
            (this.parent = null),
            Object.values(t).forEach(c => (c.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return fr(this);
        }
      }
      class $0 {
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
        }
        get parameterMap() {
          return (this._parameterMap ??= Z4(this.parameters)), this._parameterMap;
        }
        toString() {
          return ny(this);
        }
      }
      function x3(e, n) {
        return e.length === n.length && e.every((t, c) => t.path === n[c].path);
      }
      let Q4 = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: () => new ur(),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class ur {
        parse(n) {
          const t = new IY(n);
          return new N3(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(n) {
          const t = `/${G0(n.root, !0)}`,
            c = (function _Y(e) {
              const n = Object.entries(e)
                .map(([t, c]) =>
                  Array.isArray(c)
                    ? c.map(s => `${dr(t)}=${dr(s)}`).join('&')
                    : `${dr(t)}=${dr(c)}`,
                )
                .filter(t => t);
              return n.length ? `?${n.join('&')}` : '';
            })(n.queryParams);
          return `${t}${c}${
            'string' == typeof n.fragment
              ? `#${(function LY(e) {
                  return encodeURI(e);
                })(n.fragment)}`
              : ''
          }`;
        }
      }
      const yY = new ur();
      function fr(e) {
        return e.segments.map(n => ny(n)).join('/');
      }
      function G0(e, n) {
        if (!e.hasChildren()) return fr(e);
        if (n) {
          const t = e.children[q] ? G0(e.children[q], !1) : '',
            c = [];
          return (
            Object.entries(e.children).forEach(([s, r]) => {
              s !== q && c.push(`${s}:${G0(r, !1)}`);
            }),
            c.length > 0 ? `${t}(${c.join('//')})` : t
          );
        }
        {
          const t = (function vY(e, n) {
            let t = [];
            return (
              Object.entries(e.children).forEach(([c, s]) => {
                c === q && (t = t.concat(n(s, c)));
              }),
              Object.entries(e.children).forEach(([c, s]) => {
                c !== q && (t = t.concat(n(s, c)));
              }),
              t
            );
          })(e, (c, s) => (s === q ? [G0(e.children[q], !1)] : [`${s}:${G0(c, !1)}`]));
          return 1 === Object.keys(e.children).length && null != e.children[q]
            ? `${fr(e)}/${t[0]}`
            : `${fr(e)}/(${t.join('//')})`;
        }
      }
      function ey(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function dr(e) {
        return ey(e).replace(/%3B/gi, ';');
      }
      function o5(e) {
        return ey(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function hr(e) {
        return decodeURIComponent(e);
      }
      function ty(e) {
        return hr(e.replace(/\+/g, '%20'));
      }
      function ny(e) {
        return `${o5(e.path)}${(function zY(e) {
          return Object.entries(e)
            .map(([n, t]) => `;${o5(n)}=${o5(t)}`)
            .join('');
        })(e.parameters)}`;
      }
      const bY = /^[^\/()?;#]+/;
      function i5(e) {
        const n = e.match(bY);
        return n ? n[0] : '';
      }
      const wY = /^[^\/()?;=#]+/,
        EY = /^[^=?&#]+/,
        xY = /^[^&#]+/;
      class IY {
        constructor(n) {
          (this.url = n), (this.remaining = n);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new m2([], {})
              : new m2([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const n = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(n);
            } while (this.consumeOptional('&'));
          return n;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const n = [];
          for (
            this.peekStartsWith('(') || n.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), n.push(this.parseSegment());
          let t = {};
          this.peekStartsWith('/(') && (this.capture('/'), (t = this.parseParens(!0)));
          let c = {};
          return (
            this.peekStartsWith('(') && (c = this.parseParens(!1)),
            (n.length > 0 || Object.keys(t).length > 0) && (c[q] = new m2(n, t)),
            c
          );
        }
        parseSegment() {
          const n = i5(this.remaining);
          if ('' === n && this.peekStartsWith(';')) throw new L(4009, !1);
          return this.capture(n), new $0(hr(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = (function DY(e) {
            const n = e.match(wY);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let c = '';
          if (this.consumeOptional('=')) {
            const s = i5(this.remaining);
            s && ((c = s), this.capture(c));
          }
          n[hr(t)] = hr(c);
        }
        parseQueryParam(n) {
          const t = (function NY(e) {
            const n = e.match(EY);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let c = '';
          if (this.consumeOptional('=')) {
            const o = (function SY(e) {
              const n = e.match(xY);
              return n ? n[0] : '';
            })(this.remaining);
            o && ((c = o), this.capture(c));
          }
          const s = ty(t),
            r = ty(c);
          if (n.hasOwnProperty(s)) {
            let o = n[s];
            Array.isArray(o) || ((o = [o]), (n[s] = o)), o.push(r);
          } else n[s] = r;
        }
        parseParens(n) {
          const t = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const c = i5(this.remaining),
              s = this.remaining[c.length];
            if ('/' !== s && ')' !== s && ';' !== s) throw new L(4010, !1);
            let r;
            c.indexOf(':') > -1
              ? ((r = c.slice(0, c.indexOf(':'))), this.capture(r), this.capture(':'))
              : n && (r = q);
            const o = this.parseChildren();
            (t[r] = 1 === Object.keys(o).length ? o[q] : new m2([], o)),
              this.consumeOptional('//');
          }
          return t;
        }
        peekStartsWith(n) {
          return this.remaining.startsWith(n);
        }
        consumeOptional(n) {
          return (
            !!this.peekStartsWith(n) &&
            ((this.remaining = this.remaining.substring(n.length)), !0)
          );
        }
        capture(n) {
          if (!this.consumeOptional(n)) throw new L(4011, !1);
        }
      }
      function cy(e) {
        return e.segments.length > 0 ? new m2([], { [q]: e }) : e;
      }
      function sy(e) {
        const n = {};
        for (const [c, s] of Object.entries(e.children)) {
          const r = sy(s);
          if (c === q && 0 === r.segments.length && r.hasChildren())
            for (const [o, i] of Object.entries(r.children)) n[o] = i;
          else (r.segments.length > 0 || r.hasChildren()) && (n[c] = r);
        }
        return (function AY(e) {
          if (1 === e.numberOfChildren && e.children[q]) {
            const n = e.children[q];
            return new m2(e.segments.concat(n.segments), n.children);
          }
          return e;
        })(new m2(e.segments, n));
      }
      function S3(e) {
        return e instanceof N3;
      }
      function ry(e) {
        let n;
        const s = cy(
          (function t(r) {
            const o = {};
            for (const a of r.children) {
              const l = t(a);
              o[a.outlet] = l;
            }
            const i = new m2(r.url, o);
            return r === e && (n = i), i;
          })(e.root),
        );
        return n ?? s;
      }
      function oy(e, n, t, c) {
        let s = e;
        for (; s.parent; ) s = s.parent;
        if (0 === n.length) return a5(s, s, s, t, c);
        const r = (function kY(e) {
          if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
            return new ay(!0, 0, e);
          let n = 0,
            t = !1;
          const c = e.reduce((s, r, o) => {
            if ('object' == typeof r && null != r) {
              if (r.outlets) {
                const i = {};
                return (
                  Object.entries(r.outlets).forEach(([a, l]) => {
                    i[a] = 'string' == typeof l ? l.split('/') : l;
                  }),
                  [...s, { outlets: i }]
                );
              }
              if (r.segmentPath) return [...s, r.segmentPath];
            }
            return 'string' != typeof r
              ? [...s, r]
              : 0 === o
              ? (r.split('/').forEach((i, a) => {
                  (0 == a && '.' === i) ||
                    (0 == a && '' === i
                      ? (t = !0)
                      : '..' === i
                      ? n++
                      : '' != i && s.push(i));
                }),
                s)
              : [...s, r];
          }, []);
          return new ay(t, n, c);
        })(n);
        if (r.toRoot()) return a5(s, s, new m2([], {}), t, c);
        const o = (function RY(e, n, t) {
            if (e.isAbsolute) return new mr(n, !0, 0);
            if (!t) return new mr(n, !1, NaN);
            if (null === t.parent) return new mr(t, !0, 0);
            const c = pr(e.commands[0]) ? 0 : 1;
            return (function OY(e, n, t) {
              let c = e,
                s = n,
                r = t;
              for (; r > s; ) {
                if (((r -= s), (c = c.parent), !c)) throw new L(4005, !1);
                s = c.segments.length;
              }
              return new mr(c, !1, s - r);
            })(t, t.segments.length - 1 + c, e.numberOfDoubleDots);
          })(r, s, e),
          i = o.processChildren
            ? W0(o.segmentGroup, o.index, r.commands)
            : ly(o.segmentGroup, o.index, r.commands);
        return a5(s, o.segmentGroup, i, t, c);
      }
      function pr(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function q0(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function a5(e, n, t, c, s) {
        let o,
          r = {};
        c &&
          Object.entries(c).forEach(([a, l]) => {
            r[a] = Array.isArray(l) ? l.map(u => `${u}`) : `${l}`;
          }),
          (o = e === n ? t : iy(e, n, t));
        const i = cy(sy(o));
        return new N3(i, r, s);
      }
      function iy(e, n, t) {
        const c = {};
        return (
          Object.entries(e.children).forEach(([s, r]) => {
            c[s] = r === n ? t : iy(r, n, t);
          }),
          new m2(e.segments, c)
        );
      }
      class ay {
        constructor(n, t, c) {
          if (
            ((this.isAbsolute = n),
            (this.numberOfDoubleDots = t),
            (this.commands = c),
            n && c.length > 0 && pr(c[0]))
          )
            throw new L(4003, !1);
          const s = c.find(q0);
          if (s && s !== Yv(c)) throw new L(4004, !1);
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class mr {
        constructor(n, t, c) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = c);
        }
      }
      function ly(e, n, t) {
        if (((e ??= new m2([], {})), 0 === e.segments.length && e.hasChildren()))
          return W0(e, n, t);
        const c = (function PY(e, n, t) {
            let c = 0,
              s = n;
            const r = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (c >= t.length) return r;
              const o = e.segments[s],
                i = t[c];
              if (q0(i)) break;
              const a = `${i}`,
                l = c < t.length - 1 ? t[c + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && l && 'object' == typeof l && void 0 === l.outlets) {
                if (!fy(a, l, o)) return r;
                c += 2;
              } else {
                if (!fy(a, {}, o)) return r;
                c++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: c };
          })(e, n, t),
          s = t.slice(c.commandIndex);
        if (c.match && c.pathIndex < e.segments.length) {
          const r = new m2(e.segments.slice(0, c.pathIndex), {});
          return (
            (r.children[q] = new m2(e.segments.slice(c.pathIndex), e.children)),
            W0(r, 0, s)
          );
        }
        return c.match && 0 === s.length
          ? new m2(e.segments, {})
          : c.match && !e.hasChildren()
          ? l5(e, n, t)
          : c.match
          ? W0(e, 0, s)
          : l5(e, n, t);
      }
      function W0(e, n, t) {
        if (0 === t.length) return new m2(e.segments, {});
        {
          const c = (function FY(e) {
              return q0(e[0]) ? e[0].outlets : { [q]: e };
            })(t),
            s = {};
          if (
            Object.keys(c).some(r => r !== q) &&
            e.children[q] &&
            1 === e.numberOfChildren &&
            0 === e.children[q].segments.length
          ) {
            const r = W0(e.children[q], n, t);
            return new m2(e.segments, r.children);
          }
          return (
            Object.entries(c).forEach(([r, o]) => {
              'string' == typeof o && (o = [o]),
                null !== o && (s[r] = ly(e.children[r], n, o));
            }),
            Object.entries(e.children).forEach(([r, o]) => {
              void 0 === c[r] && (s[r] = o);
            }),
            new m2(e.segments, s)
          );
        }
      }
      function l5(e, n, t) {
        const c = e.segments.slice(0, n);
        let s = 0;
        for (; s < t.length; ) {
          const r = t[s];
          if (q0(r)) {
            const a = VY(r.outlets);
            return new m2(c, a);
          }
          if (0 === s && pr(t[0])) {
            c.push(new $0(e.segments[n].path, uy(t[0]))), s++;
            continue;
          }
          const o = q0(r) ? r.outlets[q] : `${r}`,
            i = s < t.length - 1 ? t[s + 1] : null;
          o && i && pr(i)
            ? (c.push(new $0(o, uy(i))), (s += 2))
            : (c.push(new $0(o, {})), s++);
        }
        return new m2(c, {});
      }
      function VY(e) {
        const n = {};
        return (
          Object.entries(e).forEach(([t, c]) => {
            'string' == typeof c && (c = [c]),
              null !== c && (n[t] = l5(new m2([], {}), 0, c));
          }),
          n
        );
      }
      function uy(e) {
        const n = {};
        return Object.entries(e).forEach(([t, c]) => (n[t] = `${c}`)), n;
      }
      function fy(e, n, t) {
        return e == t.path && Be(n, t.parameters);
      }
      const Y0 = 'imperative';
      var c2 = (function (e) {
        return (
          (e[(e.NavigationStart = 0)] = 'NavigationStart'),
          (e[(e.NavigationEnd = 1)] = 'NavigationEnd'),
          (e[(e.NavigationCancel = 2)] = 'NavigationCancel'),
          (e[(e.NavigationError = 3)] = 'NavigationError'),
          (e[(e.RoutesRecognized = 4)] = 'RoutesRecognized'),
          (e[(e.ResolveStart = 5)] = 'ResolveStart'),
          (e[(e.ResolveEnd = 6)] = 'ResolveEnd'),
          (e[(e.GuardsCheckStart = 7)] = 'GuardsCheckStart'),
          (e[(e.GuardsCheckEnd = 8)] = 'GuardsCheckEnd'),
          (e[(e.RouteConfigLoadStart = 9)] = 'RouteConfigLoadStart'),
          (e[(e.RouteConfigLoadEnd = 10)] = 'RouteConfigLoadEnd'),
          (e[(e.ChildActivationStart = 11)] = 'ChildActivationStart'),
          (e[(e.ChildActivationEnd = 12)] = 'ChildActivationEnd'),
          (e[(e.ActivationStart = 13)] = 'ActivationStart'),
          (e[(e.ActivationEnd = 14)] = 'ActivationEnd'),
          (e[(e.Scroll = 15)] = 'Scroll'),
          (e[(e.NavigationSkipped = 16)] = 'NavigationSkipped'),
          e
        );
      })(c2 || {});
      class je {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class gr extends je {
        constructor(n, t, c = 'imperative', s = null) {
          super(n, t),
            (this.type = c2.NavigationStart),
            (this.navigationTrigger = c),
            (this.restoredState = s);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ot extends je {
        constructor(n, t, c) {
          super(n, t), (this.urlAfterRedirects = c), (this.type = c2.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var W1 = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(W1 || {}),
        Cr = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] = 'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(Cr || {});
      class I3 extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.reason = c),
            (this.code = s),
            (this.type = c2.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class K4 extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.reason = c),
            (this.code = s),
            (this.type = c2.NavigationSkipped);
        }
      }
      class u5 extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.error = c),
            (this.target = s),
            (this.type = c2.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class dy extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.urlAfterRedirects = c),
            (this.state = s),
            (this.type = c2.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class BY extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.urlAfterRedirects = c),
            (this.state = s),
            (this.type = c2.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class jY extends je {
        constructor(n, t, c, s, r) {
          super(n, t),
            (this.urlAfterRedirects = c),
            (this.state = s),
            (this.shouldActivate = r),
            (this.type = c2.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class UY extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.urlAfterRedirects = c),
            (this.state = s),
            (this.type = c2.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class HY extends je {
        constructor(n, t, c, s) {
          super(n, t),
            (this.urlAfterRedirects = c),
            (this.state = s),
            (this.type = c2.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class $Y {
        constructor(n) {
          (this.route = n), (this.type = c2.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class GY {
        constructor(n) {
          (this.route = n), (this.type = c2.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class qY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class WY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class YY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class ZY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class hy {
        constructor(n, t, c) {
          (this.routerEvent = n),
            (this.position = t),
            (this.anchor = c),
            (this.type = c2.Scroll);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class f5 {}
      class Mr {
        constructor(n, t) {
          (this.url = n), (this.navigationBehaviorOptions = t);
        }
      }
      function ze(e) {
        return e.outlet || q;
      }
      function Z0(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let n = e.parent; n; n = n.parent) {
          const t = n.routeConfig;
          if (t?._loadedInjector) return t._loadedInjector;
          if (t?._injector) return t._injector;
        }
        return null;
      }
      class tZ {
        get injector() {
          return Z0(this.route?.snapshot) ?? this.rootInjector;
        }
        set injector(n) {}
        constructor(n) {
          (this.rootInjector = n),
            (this.outlet = null),
            (this.route = null),
            (this.children = new Q0(this.rootInjector)),
            (this.attachRef = null);
        }
      }
      let Q0 = (() => {
        class e {
          constructor(t) {
            (this.rootInjector = t), (this.contexts = new Map());
          }
          onChildOutletCreated(t, c) {
            const s = this.getOrCreateContext(t);
            (s.outlet = c), this.contexts.set(t, s);
          }
          onChildOutletDestroyed(t) {
            const c = this.getContext(t);
            c && ((c.outlet = null), (c.attachRef = null));
          }
          onOutletDeactivated() {
            const t = this.contexts;
            return (this.contexts = new Map()), t;
          }
          onOutletReAttached(t) {
            this.contexts = t;
          }
          getOrCreateContext(t) {
            let c = this.getContext(t);
            return c || ((c = new tZ(this.rootInjector)), this.contexts.set(t, c)), c;
          }
          getContext(t) {
            return this.contexts.get(t) || null;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(P1));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      class py {
        constructor(n) {
          this._root = n;
        }
        get root() {
          return this._root.value;
        }
        parent(n) {
          const t = this.pathFromRoot(n);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(n) {
          const t = d5(n, this._root);
          return t ? t.children.map(c => c.value) : [];
        }
        firstChild(n) {
          const t = d5(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = h5(n, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map(s => s.value).filter(s => s !== n);
        }
        pathFromRoot(n) {
          return h5(n, this._root).map(t => t.value);
        }
      }
      function d5(e, n) {
        if (e === n.value) return n;
        for (const t of n.children) {
          const c = d5(e, t);
          if (c) return c;
        }
        return null;
      }
      function h5(e, n) {
        if (e === n.value) return [n];
        for (const t of n.children) {
          const c = h5(e, t);
          if (c.length) return c.unshift(n), c;
        }
        return [];
      }
      class _e {
        constructor(n, t) {
          (this.value = n), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function X4(e) {
        const n = {};
        return e && e.children.forEach(t => (n[t.value.outlet] = t)), n;
      }
      class my extends py {
        constructor(n, t) {
          super(n), (this.snapshot = t), p5(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function gy(e) {
        const n = (function nZ(e) {
            const r = new yr([], {}, {}, '', {}, q, e, null, {});
            return new Cy('', new _e(r, []));
          })(e),
          t = new n1([new $0('', {})]),
          c = new n1({}),
          s = new n1({}),
          r = new n1({}),
          o = new n1(''),
          i = new J4(t, c, r, o, s, q, e, n.root);
        return (i.snapshot = n.root), new my(new _e(i, []), n);
      }
      class J4 {
        constructor(n, t, c, s, r, o, i, a) {
          (this.urlSubject = n),
            (this.paramsSubject = t),
            (this.queryParamsSubject = c),
            (this.fragmentSubject = s),
            (this.dataSubject = r),
            (this.outlet = o),
            (this.component = i),
            (this._futureSnapshot = a),
            (this.title = this.dataSubject?.pipe(s2(l => l[H0])) ?? $(void 0)),
            (this.url = n),
            (this.params = t),
            (this.queryParams = c),
            (this.fragment = s),
            (this.data = r);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (this._paramMap ??= this.params.pipe(s2(n => Z4(n)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(s2(n => Z4(n)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function vr(e, n, t = 'emptyOnly') {
        let c;
        const { routeConfig: s } = e;
        return (
          (c =
            null === n ||
            ('always' !== t &&
              '' !== s?.path &&
              (n.component || n.routeConfig?.loadComponent))
              ? {
                  params: { ...e.params },
                  data: { ...e.data },
                  resolve: { ...e.data, ...(e._resolvedData ?? {}) },
                }
              : {
                  params: { ...n.params, ...e.params },
                  data: { ...n.data, ...e.data },
                  resolve: { ...e.data, ...n.data, ...s?.data, ...e._resolvedData },
                }),
          s && vy(s) && (c.resolve[H0] = s.title),
          c
        );
      }
      class yr {
        get title() {
          return this.data?.[H0];
        }
        constructor(n, t, c, s, r, o, i, a, l) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = c),
            (this.fragment = s),
            (this.data = r),
            (this.outlet = o),
            (this.component = i),
            (this.routeConfig = a),
            (this._resolve = l);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (this._paramMap ??= Z4(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (this._queryParamMap ??= Z4(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(c => c.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Cy extends py {
        constructor(n, t) {
          super(t), (this.url = n), p5(this, t);
        }
        toString() {
          return My(this._root);
        }
      }
      function p5(e, n) {
        (n.value._routerState = e), n.children.forEach(t => p5(e, t));
      }
      function My(e) {
        const n = e.children.length > 0 ? ` { ${e.children.map(My).join(', ')} } ` : '';
        return `${e.value}${n}`;
      }
      function m5(e) {
        if (e.snapshot) {
          const n = e.snapshot,
            t = e._futureSnapshot;
          (e.snapshot = t),
            Be(n.queryParams, t.queryParams) || e.queryParamsSubject.next(t.queryParams),
            n.fragment !== t.fragment && e.fragmentSubject.next(t.fragment),
            Be(n.params, t.params) || e.paramsSubject.next(t.params),
            (function pY(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; ++t) if (!Be(e[t], n[t])) return !1;
              return !0;
            })(n.url, t.url) || e.urlSubject.next(t.url),
            Be(n.data, t.data) || e.dataSubject.next(t.data);
        } else
          (e.snapshot = e._futureSnapshot), e.dataSubject.next(e._futureSnapshot.data);
      }
      function g5(e, n) {
        const t =
          Be(e.params, n.params) &&
          (function MY(e, n) {
            return x3(e, n) && e.every((t, c) => Be(t.parameters, n[c].parameters));
          })(e.url, n.url);
        return t && !(!e.parent != !n.parent) && (!e.parent || g5(e.parent, n.parent));
      }
      function vy(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let K0 = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = q),
              (this.activateEvents = new X()),
              (this.deactivateEvents = new X()),
              (this.attachEvents = new X()),
              (this.detachEvents = new X()),
              (this.parentContexts = y(Q0)),
              (this.location = y(pe)),
              (this.changeDetector = y(T0)),
              (this.inputBinder = y(Lr, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(t) {
            if (t.name) {
              const { firstChange: c, previousValue: s } = t.name;
              if (c) return;
              this.isTrackedInParentContexts(s) &&
                (this.deactivate(), this.parentContexts.onChildOutletDestroyed(s)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name),
              this.inputBinder?.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(t) {
            return this.parentContexts.getContext(t)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
            )
              return;
            const t = this.parentContexts.getContext(this.name);
            t?.route &&
              (t.attachRef
                ? this.attach(t.attachRef, t.route)
                : this.activateWith(t.route, t.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new L(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new L(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new L(4012, !1);
            this.location.detach();
            const t = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(t.instance),
              t
            );
          }
          attach(t, c) {
            (this.activated = t),
              (this._activatedRoute = c),
              this.location.insert(t.hostView),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.attachEvents.emit(t.instance);
          }
          deactivate() {
            if (this.activated) {
              const t = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(t);
            }
          }
          activateWith(t, c) {
            if (this.isActivated) throw new L(4013, !1);
            this._activatedRoute = t;
            const s = this.location,
              o = t.snapshot.component,
              i = this.parentContexts.getOrCreateContext(this.name).children,
              a = new C5(t, i, s.injector);
            (this.activated = s.createComponent(o, {
              index: s.length,
              injector: a,
              environmentInjector: c,
            })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
              this.activateEvents.emit(this.activated.instance);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵdir = O({
            type: e,
            selectors: [['router-outlet']],
            inputs: { name: 'name' },
            outputs: {
              activateEvents: 'activate',
              deactivateEvents: 'deactivate',
              attachEvents: 'attach',
              detachEvents: 'detach',
            },
            exportAs: ['outlet'],
            standalone: !0,
            features: [m1],
          }));
        }
        return e;
      })();
      class C5 {
        __ngOutletInjector(n) {
          return new C5(this.route, this.childContexts, n);
        }
        constructor(n, t, c) {
          (this.route = n), (this.childContexts = t), (this.parent = c);
        }
        get(n, t) {
          return n === J4
            ? this.route
            : n === Q0
            ? this.childContexts
            : this.parent.get(n, t);
        }
      }
      const Lr = new _('');
      function X0(e, n, t) {
        if (t && e.shouldReuseRoute(n.value, t.value.snapshot)) {
          const c = t.value;
          c._futureSnapshot = n.value;
          const s = (function sZ(e, n, t) {
            return n.children.map(c => {
              for (const s of t.children)
                if (e.shouldReuseRoute(c.value, s.value.snapshot)) return X0(e, c, s);
              return X0(e, c);
            });
          })(e, n, t);
          return new _e(c, s);
        }
        {
          if (e.shouldAttach(n.value)) {
            const r = e.retrieve(n.value);
            if (null !== r) {
              const o = r.route;
              return (
                (o.value._futureSnapshot = n.value),
                (o.children = n.children.map(i => X0(e, i))),
                o
              );
            }
          }
          const c = (function rZ(e) {
              return new J4(
                new n1(e.url),
                new n1(e.params),
                new n1(e.queryParams),
                new n1(e.fragment),
                new n1(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(n.value),
            s = n.children.map(r => X0(e, r));
          return new _e(c, s);
        }
      }
      class M5 {
        constructor(n, t) {
          (this.redirectTo = n), (this.navigationBehaviorOptions = t);
        }
      }
      const Ly = 'ngNavigationCancelingError';
      function zr(e, n) {
        const { redirectTo: t, navigationBehaviorOptions: c } = S3(n)
            ? { redirectTo: n, navigationBehaviorOptions: void 0 }
            : n,
          s = zy(!1, W1.Redirect);
        return (s.url = t), (s.navigationBehaviorOptions = c), s;
      }
      function zy(e, n) {
        const t = new Error(`NavigationCancelingError: ${e || ''}`);
        return (t[Ly] = !0), (t.cancellationCode = n), t;
      }
      function _y(e) {
        return !!e && e[Ly];
      }
      class aZ {
        constructor(n, t, c, s, r) {
          (this.routeReuseStrategy = n),
            (this.futureState = t),
            (this.currState = c),
            (this.forwardEvent = s),
            (this.inputBindingEnabled = r);
        }
        activate(n) {
          const t = this.futureState._root,
            c = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, c, n),
            m5(this.futureState.root),
            this.activateChildRoutes(t, c, n);
        }
        deactivateChildRoutes(n, t, c) {
          const s = X4(t);
          n.children.forEach(r => {
            const o = r.value.outlet;
            this.deactivateRoutes(r, s[o], c), delete s[o];
          }),
            Object.values(s).forEach(r => {
              this.deactivateRouteAndItsChildren(r, c);
            });
        }
        deactivateRoutes(n, t, c) {
          const s = n.value,
            r = t ? t.value : null;
          if (s === r)
            if (s.component) {
              const o = c.getContext(s.outlet);
              o && this.deactivateChildRoutes(n, t, o.children);
            } else this.deactivateChildRoutes(n, t, c);
          else r && this.deactivateRouteAndItsChildren(t, c);
        }
        deactivateRouteAndItsChildren(n, t) {
          n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const c = t.getContext(n.value.outlet),
            s = c && n.value.component ? c.children : t,
            r = X4(n);
          for (const o of Object.values(r)) this.deactivateRouteAndItsChildren(o, s);
          if (c && c.outlet) {
            const o = c.outlet.detach(),
              i = c.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, {
              componentRef: o,
              route: n,
              contexts: i,
            });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const c = t.getContext(n.value.outlet),
            s = c && n.value.component ? c.children : t,
            r = X4(n);
          for (const o of Object.values(r)) this.deactivateRouteAndItsChildren(o, s);
          c &&
            (c.outlet && (c.outlet.deactivate(), c.children.onOutletDeactivated()),
            (c.attachRef = null),
            (c.route = null));
        }
        activateChildRoutes(n, t, c) {
          const s = X4(t);
          n.children.forEach(r => {
            this.activateRoutes(r, s[r.value.outlet], c),
              this.forwardEvent(new ZY(r.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new WY(n.value.snapshot));
        }
        activateRoutes(n, t, c) {
          const s = n.value,
            r = t ? t.value : null;
          if ((m5(s), s === r))
            if (s.component) {
              const o = c.getOrCreateContext(s.outlet);
              this.activateChildRoutes(n, t, o.children);
            } else this.activateChildRoutes(n, t, c);
          else if (s.component) {
            const o = c.getOrCreateContext(s.outlet);
            if (this.routeReuseStrategy.shouldAttach(s.snapshot)) {
              const i = this.routeReuseStrategy.retrieve(s.snapshot);
              this.routeReuseStrategy.store(s.snapshot, null),
                o.children.onOutletReAttached(i.contexts),
                (o.attachRef = i.componentRef),
                (o.route = i.route.value),
                o.outlet && o.outlet.attach(i.componentRef, i.route.value),
                m5(i.route.value),
                this.activateChildRoutes(n, null, o.children);
            } else
              (o.attachRef = null),
                (o.route = s),
                o.outlet && o.outlet.activateWith(s, o.injector),
                this.activateChildRoutes(n, null, o.children);
          } else this.activateChildRoutes(n, null, c);
        }
      }
      class by {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class _r {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function lZ(e, n, t) {
        const c = e._root;
        return J0(c, n ? n._root : null, t, [c.value]);
      }
      function en(e, n) {
        const t = Symbol(),
          c = n.get(e, t);
        return c === t
          ? 'function' != typeof e ||
            (function KA(e) {
              return null !== qc(e);
            })(e)
            ? n.get(e)
            : e
          : c;
      }
      function J0(e, n, t, c, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const r = X4(n);
        return (
          e.children.forEach(o => {
            (function fZ(
              e,
              n,
              t,
              c,
              s = { canDeactivateChecks: [], canActivateChecks: [] },
            ) {
              const r = e.value,
                o = n ? n.value : null,
                i = t ? t.getContext(e.value.outlet) : null;
              if (o && r.routeConfig === o.routeConfig) {
                const a = (function dZ(e, n, t) {
                  if ('function' == typeof t) return t(e, n);
                  switch (t) {
                    case 'pathParamsChange':
                      return !x3(e.url, n.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !x3(e.url, n.url) || !Be(e.queryParams, n.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !g5(e, n) || !Be(e.queryParams, n.queryParams);
                    default:
                      return !g5(e, n);
                  }
                })(o, r, r.routeConfig.runGuardsAndResolvers);
                a
                  ? s.canActivateChecks.push(new by(c))
                  : ((r.data = o.data), (r._resolvedData = o._resolvedData)),
                  J0(e, n, r.component ? (i ? i.children : null) : t, c, s),
                  a &&
                    i &&
                    i.outlet &&
                    i.outlet.isActivated &&
                    s.canDeactivateChecks.push(new _r(i.outlet.component, o));
              } else
                o && ec(n, i, s),
                  s.canActivateChecks.push(new by(c)),
                  J0(e, null, r.component ? (i ? i.children : null) : t, c, s);
            })(o, r[o.value.outlet], t, c.concat([o.value]), s),
              delete r[o.value.outlet];
          }),
          Object.entries(r).forEach(([o, i]) => ec(i, t.getContext(o), s)),
          s
        );
      }
      function ec(e, n, t) {
        const c = X4(e),
          s = e.value;
        Object.entries(c).forEach(([r, o]) => {
          ec(o, s.component ? (n ? n.children.getContext(r) : null) : n, t);
        }),
          t.canDeactivateChecks.push(
            new _r(
              s.component && n && n.outlet && n.outlet.isActivated
                ? n.outlet.component
                : null,
              s,
            ),
          );
      }
      function tc(e) {
        return 'function' == typeof e;
      }
      function wy(e) {
        return e instanceof sr || 'EmptyError' === e?.name;
      }
      const br = Symbol('INITIAL_VALUE');
      function tn() {
        return ut(e =>
          e5(e.map(n => n.pipe(D3(1), Hv(br)))).pipe(
            s2(n => {
              for (const t of n)
                if (!0 !== t) {
                  if (t === br) return br;
                  if (!1 === t || vZ(t)) return t;
                }
              return !0;
            }),
            kt(n => n !== br),
            D3(1),
          ),
        );
      }
      function vZ(e) {
        return S3(e) || e instanceof M5;
      }
      function Dy(e) {
        return (function UI(...e) {
          return nu(e);
        })(
          _1(n => {
            if ('boolean' != typeof n) throw zr(0, n);
          }),
          s2(n => !0 === n),
        );
      }
      class v5 {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class wr extends Error {
        constructor(n) {
          super(), (this.urlTree = n);
        }
      }
      function nn(e) {
        return or(new v5(e));
      }
      class AZ {
        constructor(n, t) {
          (this.urlSerializer = n), (this.urlTree = t);
        }
        lineralizeSegments(n, t) {
          let c = [],
            s = t.root;
          for (;;) {
            if (((c = c.concat(s.segments)), 0 === s.numberOfChildren)) return $(c);
            if (s.numberOfChildren > 1 || !s.children[q]) return or(new L(4e3, !1));
            s = s.children[q];
          }
        }
        applyRedirectCommands(n, t, c, s, r) {
          if ('string' != typeof t) {
            const i = t,
              {
                queryParams: a,
                fragment: l,
                routeConfig: u,
                url: f,
                outlet: d,
                params: h,
                data: p,
                title: m,
              } = s,
              C = yt(r, () =>
                i({
                  params: h,
                  data: p,
                  queryParams: a,
                  fragment: l,
                  routeConfig: u,
                  url: f,
                  outlet: d,
                  title: m,
                }),
              );
            if (C instanceof N3) throw new wr(C);
            t = C;
          }
          const o = this.applyRedirectCreateUrlTree(t, this.urlSerializer.parse(t), n, c);
          if ('/' === t[0]) throw new wr(o);
          return o;
        }
        applyRedirectCreateUrlTree(n, t, c, s) {
          const r = this.createSegmentGroup(n, t.root, c, s);
          return new N3(
            r,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment,
          );
        }
        createQueryParams(n, t) {
          const c = {};
          return (
            Object.entries(n).forEach(([s, r]) => {
              if ('string' == typeof r && ':' === r[0]) {
                const i = r.substring(1);
                c[s] = t[i];
              } else c[s] = r;
            }),
            c
          );
        }
        createSegmentGroup(n, t, c, s) {
          const r = this.createSegments(n, t.segments, c, s);
          let o = {};
          return (
            Object.entries(t.children).forEach(([i, a]) => {
              o[i] = this.createSegmentGroup(n, a, c, s);
            }),
            new m2(r, o)
          );
        }
        createSegments(n, t, c, s) {
          return t.map(r =>
            ':' === r.path[0] ? this.findPosParam(n, r, s) : this.findOrReturn(r, c),
          );
        }
        findPosParam(n, t, c) {
          const s = c[t.path.substring(1)];
          if (!s) throw new L(4001, !1);
          return s;
        }
        findOrReturn(n, t) {
          let c = 0;
          for (const s of t) {
            if (s.path === n.path) return t.splice(c), s;
            c++;
          }
          return n;
        }
      }
      const y5 = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function TZ(e, n, t, c, s) {
        const r = Ey(e, n, t);
        return r.matched
          ? ((c = (function QY(e, n) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = ya(e.providers, n, `Route: ${e.path}`)),
                e._injector ?? n
              );
            })(n, c)),
            (function xZ(e, n, t, c) {
              const s = n.canMatch;
              return s && 0 !== s.length
                ? $(
                    s.map(o => {
                      const i = en(o, e);
                      return Rt(
                        (function MZ(e) {
                          return e && tc(e.canMatch);
                        })(i)
                          ? i.canMatch(n, t)
                          : yt(e, () => i(n, t)),
                      );
                    }),
                  ).pipe(tn(), Dy())
                : $(!0);
            })(c, n, t).pipe(s2(o => (!0 === o ? r : { ...y5 }))))
          : $(r);
      }
      function Ey(e, n, t) {
        if ('**' === n.path)
          return (function kZ(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? Yv(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(t);
        if ('' === n.path)
          return 'full' === n.pathMatch && (e.hasChildren() || t.length > 0)
            ? { ...y5 }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: t,
                parameters: {},
                positionalParamSegments: {},
              };
        const s = (n.matcher || hY)(t, e, n);
        if (!s) return { ...y5 };
        const r = {};
        Object.entries(s.posParams ?? {}).forEach(([i, a]) => {
          r[i] = a.path;
        });
        const o =
          s.consumed.length > 0
            ? { ...r, ...s.consumed[s.consumed.length - 1].parameters }
            : r;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          remainingSegments: t.slice(s.consumed.length),
          parameters: o,
          positionalParamSegments: s.posParams ?? {},
        };
      }
      function Ny(e, n, t, c) {
        return t.length > 0 &&
          (function FZ(e, n, t) {
            return t.some(c => Dr(e, n, c) && ze(c) !== q);
          })(e, t, c)
          ? { segmentGroup: new m2(n, OZ(c, new m2(t, e.children))), slicedSegments: [] }
          : 0 === t.length &&
            (function PZ(e, n, t) {
              return t.some(c => Dr(e, n, c));
            })(e, t, c)
          ? {
              segmentGroup: new m2(e.segments, RZ(e, t, c, e.children)),
              slicedSegments: t,
            }
          : { segmentGroup: new m2(e.segments, e.children), slicedSegments: t };
      }
      function RZ(e, n, t, c) {
        const s = {};
        for (const r of t)
          if (Dr(e, n, r) && !c[ze(r)]) {
            const o = new m2([], {});
            s[ze(r)] = o;
          }
        return { ...c, ...s };
      }
      function OZ(e, n) {
        const t = {};
        t[q] = n;
        for (const c of e)
          if ('' === c.path && ze(c) !== q) {
            const s = new m2([], {});
            t[ze(c)] = s;
          }
        return t;
      }
      function Dr(e, n, t) {
        return (
          (!(e.hasChildren() || n.length > 0) || 'full' !== t.pathMatch) && '' === t.path
        );
      }
      class BZ {}
      class HZ {
        constructor(n, t, c, s, r, o, i) {
          (this.injector = n),
            (this.configLoader = t),
            (this.rootComponentType = c),
            (this.config = s),
            (this.urlTree = r),
            (this.paramsInheritanceStrategy = o),
            (this.urlSerializer = i),
            (this.applyRedirects = new AZ(this.urlSerializer, this.urlTree)),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(n) {
          return new L(4002, `'${n.segmentGroup}'`);
        }
        recognize() {
          const n = Ny(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.match(n).pipe(
            s2(({ children: t, rootSnapshot: c }) => {
              const s = new _e(c, t),
                r = new Cy('', s),
                o = (function TY(e, n, t = null, c = null) {
                  return oy(ry(e), n, t, c);
                })(c, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (o.queryParams = this.urlTree.queryParams),
                (r.url = this.urlSerializer.serialize(o)),
                { state: r, tree: o }
              );
            }),
          );
        }
        match(n) {
          const t = new yr(
            [],
            Object.freeze({}),
            Object.freeze({ ...this.urlTree.queryParams }),
            this.urlTree.fragment,
            Object.freeze({}),
            q,
            this.rootComponentType,
            null,
            {},
          );
          return this.processSegmentGroup(this.injector, this.config, n, q, t).pipe(
            s2(c => ({ children: c, rootSnapshot: t })),
            Y4(c => {
              if (c instanceof wr)
                return (this.urlTree = c.urlTree), this.match(c.urlTree.root);
              throw c instanceof v5 ? this.noMatchError(c) : c;
            }),
          );
        }
        processSegmentGroup(n, t, c, s, r) {
          return 0 === c.segments.length && c.hasChildren()
            ? this.processChildren(n, t, c, r)
            : this.processSegment(n, t, c, c.segments, s, !0, r).pipe(
                s2(o => (o instanceof _e ? [o] : [])),
              );
        }
        processChildren(n, t, c, s) {
          const r = [];
          for (const o of Object.keys(c.children))
            'primary' === o ? r.unshift(o) : r.push(o);
          return f1(r).pipe(
            ar(o => {
              const i = c.children[o],
                a = (function eZ(e, n) {
                  const t = e.filter(c => ze(c) === n);
                  return t.push(...e.filter(c => ze(c) !== n)), t;
                })(t, o);
              return this.processSegmentGroup(n, a, i, o, s);
            }),
            Gv((o, i) => (o.push(...i), o)),
            ir(null),
            (function uY(e, n) {
              const t = arguments.length >= 2;
              return c =>
                c.pipe(
                  e ? kt((s, r) => e(s, r, c)) : Ye,
                  c5(1),
                  t ? ir(n) : $v(() => new sr()),
                );
            })(),
            z1(o => {
              if (null === o) return nn(c);
              const i = xy(o);
              return (
                (function $Z(e) {
                  e.sort((n, t) =>
                    n.value.outlet === q
                      ? -1
                      : t.value.outlet === q
                      ? 1
                      : n.value.outlet.localeCompare(t.value.outlet),
                  );
                })(i),
                $(i)
              );
            }),
          );
        }
        processSegment(n, t, c, s, r, o, i) {
          return f1(t).pipe(
            ar(a =>
              this.processSegmentAgainstRoute(a._injector ?? n, t, a, c, s, r, o, i).pipe(
                Y4(l => {
                  if (l instanceof v5) return $(null);
                  throw l;
                }),
              ),
            ),
            E3(a => !!a),
            Y4(a => {
              if (wy(a))
                return (function VZ(e, n, t) {
                  return 0 === n.length && !e.children[t];
                })(c, s, r)
                  ? $(new BZ())
                  : nn(c);
              throw a;
            }),
          );
        }
        processSegmentAgainstRoute(n, t, c, s, r, o, i, a) {
          return ze(c) === o || (o !== q && Dr(s, r, c))
            ? void 0 === c.redirectTo
              ? this.matchSegmentAgainstRoute(n, s, c, r, o, a)
              : this.allowRedirects && i
              ? this.expandSegmentAgainstRouteUsingRedirect(n, s, t, c, r, o, a)
              : nn(s)
            : nn(s);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, c, s, r, o, i) {
          const {
            matched: a,
            parameters: l,
            consumedSegments: u,
            positionalParamSegments: f,
            remainingSegments: d,
          } = Ey(t, s, r);
          if (!a) return nn(t);
          'string' == typeof s.redirectTo &&
            '/' === s.redirectTo[0] &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 && (this.allowRedirects = !1));
          const h = new yr(
              r,
              l,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              Sy(s),
              ze(s),
              s.component ?? s._loadedComponent ?? null,
              s,
              Iy(s),
            ),
            p = vr(h, i, this.paramsInheritanceStrategy);
          (h.params = Object.freeze(p.params)), (h.data = Object.freeze(p.data));
          const m = this.applyRedirects.applyRedirectCommands(u, s.redirectTo, f, h, n);
          return this.applyRedirects
            .lineralizeSegments(s, m)
            .pipe(z1(C => this.processSegment(n, c, t, C.concat(d), o, !1, i)));
        }
        matchSegmentAgainstRoute(n, t, c, s, r, o) {
          const i = TZ(t, c, s, n);
          return (
            '**' === c.path && (t.children = {}),
            i.pipe(
              ut(a =>
                a.matched
                  ? this.getChildConfig((n = c._injector ?? n), c, s).pipe(
                      ut(({ routes: l }) => {
                        const u = c._loadedInjector ?? n,
                          {
                            parameters: f,
                            consumedSegments: d,
                            remainingSegments: h,
                          } = a,
                          p = new yr(
                            d,
                            f,
                            Object.freeze({ ...this.urlTree.queryParams }),
                            this.urlTree.fragment,
                            Sy(c),
                            ze(c),
                            c.component ?? c._loadedComponent ?? null,
                            c,
                            Iy(c),
                          ),
                          m = vr(p, o, this.paramsInheritanceStrategy);
                        (p.params = Object.freeze(m.params)),
                          (p.data = Object.freeze(m.data));
                        const { segmentGroup: C, slicedSegments: v } = Ny(t, d, h, l);
                        if (0 === v.length && C.hasChildren())
                          return this.processChildren(u, l, C, p).pipe(
                            s2(D => new _e(p, D)),
                          );
                        if (0 === l.length && 0 === v.length) return $(new _e(p, []));
                        const g = ze(c) === r;
                        return this.processSegment(u, l, C, v, g ? q : r, !0, p).pipe(
                          s2(D => new _e(p, D instanceof _e ? [D] : [])),
                        );
                      }),
                    )
                  : nn(t),
              ),
            )
          );
        }
        getChildConfig(n, t, c) {
          return t.children
            ? $({ routes: t.children, injector: n })
            : t.loadChildren
            ? void 0 !== t._loadedRoutes
              ? $({ routes: t._loadedRoutes, injector: t._loadedInjector })
              : (function NZ(e, n, t, c) {
                  const s = n.canLoad;
                  return void 0 === s || 0 === s.length
                    ? $(!0)
                    : $(
                        s.map(o => {
                          const i = en(o, e);
                          return Rt(
                            (function pZ(e) {
                              return e && tc(e.canLoad);
                            })(i)
                              ? i.canLoad(n, t)
                              : yt(e, () => i(n, t)),
                          );
                        }),
                      ).pipe(tn(), Dy());
                })(n, t, c).pipe(
                  z1(s =>
                    s
                      ? this.configLoader.loadChildren(n, t).pipe(
                          _1(r => {
                            (t._loadedRoutes = r.routes),
                              (t._loadedInjector = r.injector);
                          }),
                        )
                      : (function IZ() {
                          return or(zy(!1, W1.GuardRejected));
                        })(),
                  ),
                )
            : $({ routes: [], injector: n });
        }
      }
      function GZ(e) {
        const n = e.value.routeConfig;
        return n && '' === n.path;
      }
      function xy(e) {
        const n = [],
          t = new Set();
        for (const c of e) {
          if (!GZ(c)) {
            n.push(c);
            continue;
          }
          const s = n.find(r => c.value.routeConfig === r.value.routeConfig);
          void 0 !== s ? (s.children.push(...c.children), t.add(s)) : n.push(c);
        }
        for (const c of t) {
          const s = xy(c.children);
          n.push(new _e(c.value, s));
        }
        return n.filter(c => !t.has(c));
      }
      function Sy(e) {
        return e.data || {};
      }
      function Iy(e) {
        return e.resolve || {};
      }
      function Ay(e) {
        const n = e.children.map(t => Ay(t)).flat();
        return [e, ...n];
      }
      function L5(e) {
        return ut(n => {
          const t = e(n);
          return t ? f1(t).pipe(s2(() => n)) : $(n);
        });
      }
      let Ty = (() => {
          class e {
            buildTitle(t) {
              let c,
                s = t.root;
              for (; void 0 !== s; )
                (c = this.getResolvedTitleForRoute(s) ?? c),
                  (s = s.children.find(r => r.outlet === q));
              return c;
            }
            getResolvedTitleForRoute(t) {
              return t.data[H0];
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(KZ),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        KZ = (() => {
          class e extends Ty {
            constructor(t) {
              super(), (this.title = t);
            }
            updateTitle(t) {
              const c = this.buildTitle(t);
              void 0 !== c && this.title.setTitle(c);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(uW));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const nc = new _('', { providedIn: 'root', factory: () => ({}) });
      let ky = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = Y({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [Q],
            decls: 1,
            vars: 0,
            template: function (c, s) {
              1 & c && p2(0, 'router-outlet');
            },
            dependencies: [K0],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function z5(e) {
        const n = e.children && e.children.map(z5),
          t = n ? { ...e, children: n } : { ...e };
        return (
          !t.component &&
            !t.loadComponent &&
            (n || t.loadChildren) &&
            t.outlet &&
            t.outlet !== q &&
            (t.component = ky),
          t
        );
      }
      const Er = new _('');
      let Ry = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = y(NH));
          }
          loadComponent(t) {
            if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
            if (t._loadedComponent) return $(t._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(t);
            const c = Rt(t.loadComponent()).pipe(
                s2(Oy),
                _1(r => {
                  this.onLoadEndListener && this.onLoadEndListener(t),
                    (t._loadedComponent = r);
                }),
                s5(() => {
                  this.componentLoaders.delete(t);
                }),
              ),
              s = new Uv(c, () => new h1()).pipe(n5());
            return this.componentLoaders.set(t, s), s;
          }
          loadChildren(t, c) {
            if (this.childrenLoaders.get(c)) return this.childrenLoaders.get(c);
            if (c._loadedRoutes)
              return $({ routes: c._loadedRoutes, injector: c._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(c);
            const r = (function XZ(e, n, t, c) {
                return Rt(e.loadChildren()).pipe(
                  s2(Oy),
                  z1(s =>
                    s instanceof em || Array.isArray(s)
                      ? $(s)
                      : f1(n.compileModuleAsync(s)),
                  ),
                  s2(s => {
                    c && c(e);
                    let r,
                      o,
                      i = !1;
                    return (
                      Array.isArray(s)
                        ? ((o = s), !0)
                        : ((r = s.create(t).injector),
                          (o = r.get(Er, [], { optional: !0, self: !0 }).flat())),
                      { routes: o.map(z5), injector: r }
                    );
                  }),
                );
              })(c, this.compiler, t, this.onLoadEndListener).pipe(
                s5(() => {
                  this.childrenLoaders.delete(c);
                }),
              ),
              o = new Uv(r, () => new h1()).pipe(n5());
            return this.childrenLoaders.set(c, o), o;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      function Oy(e) {
        return (function JZ(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let _5 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(eQ),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        eQ = (() => {
          class e {
            shouldProcessUrl(t) {
              return !0;
            }
            extract(t) {
              return t;
            }
            merge(t, c) {
              return t;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const Fy = new _(''),
        Vy = new _('');
      let Nr = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new h1()),
              (this.transitionAbortSubject = new h1()),
              (this.configLoader = y(Ry)),
              (this.environmentInjector = y(P1)),
              (this.urlSerializer = y(Q4)),
              (this.rootContexts = y(Q0)),
              (this.location = y(F0)),
              (this.inputBindingEnabled = null !== y(Lr, { optional: !0 })),
              (this.titleStrategy = y(Ty)),
              (this.options = y(nc, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || 'emptyOnly'),
              (this.urlHandlingStrategy = y(_5)),
              (this.createViewTransition = y(Fy, { optional: !0 })),
              (this.navigationErrorHandler = y(Vy, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => $(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = s => this.events.next(new GY(s))),
              (this.configLoader.onLoadStartListener = s => this.events.next(new $Y(s)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(t) {
            const c = ++this.navigationId;
            this.transitions?.next({ ...this.transitions.value, ...t, id: c });
          }
          setupNavigations(t, c, s) {
            return (
              (this.transitions = new n1({
                id: 0,
                currentUrlTree: c,
                currentRawUrl: c,
                extractedUrl: this.urlHandlingStrategy.extract(c),
                urlAfterRedirects: this.urlHandlingStrategy.extract(c),
                rawUrl: c,
                extras: {},
                resolve: () => {},
                reject: () => {},
                promise: Promise.resolve(!0),
                source: Y0,
                restoredState: null,
                currentSnapshot: s.snapshot,
                targetSnapshot: null,
                currentRouterState: s,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                kt(r => 0 !== r.id),
                s2(r => ({
                  ...r,
                  extractedUrl: this.urlHandlingStrategy.extract(r.rawUrl),
                })),
                ut(r => {
                  let o = !1,
                    i = !1;
                  return $(r).pipe(
                    ut(a => {
                      if (this.navigationId > r.id)
                        return (
                          this.cancelNavigationTransition(
                            r,
                            '',
                            W1.SupersededByNewNavigation,
                          ),
                          Ve
                        );
                      (this.currentTransition = r),
                        (this.currentNavigation = {
                          id: a.id,
                          initialUrl: a.rawUrl,
                          extractedUrl: a.extractedUrl,
                          targetBrowserUrl:
                            'string' == typeof a.extras.browserUrl
                              ? this.urlSerializer.parse(a.extras.browserUrl)
                              : a.extras.browserUrl,
                          trigger: a.source,
                          extras: a.extras,
                          previousNavigation: this.lastSuccessfulNavigation
                            ? {
                                ...this.lastSuccessfulNavigation,
                                previousNavigation: null,
                              }
                            : null,
                        });
                      const l =
                        !t.navigated ||
                        this.isUpdatingInternalState() ||
                        this.isUpdatedBrowserUrl();
                      if (
                        !l &&
                        'reload' !==
                          (a.extras.onSameUrlNavigation ?? t.onSameUrlNavigation)
                      ) {
                        const f = '';
                        return (
                          this.events.next(
                            new K4(
                              a.id,
                              this.urlSerializer.serialize(a.rawUrl),
                              f,
                              Cr.IgnoredSameUrlNavigation,
                            ),
                          ),
                          a.resolve(!1),
                          Ve
                        );
                      }
                      if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                        return $(a).pipe(
                          ut(f => {
                            const d = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new gr(
                                  f.id,
                                  this.urlSerializer.serialize(f.extractedUrl),
                                  f.source,
                                  f.restoredState,
                                ),
                              ),
                              d !== this.transitions?.getValue() ? Ve : Promise.resolve(f)
                            );
                          }),
                          (function qZ(e, n, t, c, s, r) {
                            return z1(o =>
                              (function jZ(e, n, t, c, s, r, o = 'emptyOnly') {
                                return new HZ(e, n, t, c, s, o, r).recognize();
                              })(e, n, t, c, o.extractedUrl, s, r).pipe(
                                s2(({ state: i, tree: a }) => ({
                                  ...o,
                                  targetSnapshot: i,
                                  urlAfterRedirects: a,
                                })),
                              ),
                            );
                          })(
                            this.environmentInjector,
                            this.configLoader,
                            this.rootComponentType,
                            t.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                          ),
                          _1(f => {
                            (r.targetSnapshot = f.targetSnapshot),
                              (r.urlAfterRedirects = f.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: f.urlAfterRedirects,
                              });
                            const d = new dy(
                              f.id,
                              this.urlSerializer.serialize(f.extractedUrl),
                              this.urlSerializer.serialize(f.urlAfterRedirects),
                              f.targetSnapshot,
                            );
                            this.events.next(d);
                          }),
                        );
                      if (
                        l &&
                        this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)
                      ) {
                        const {
                            id: f,
                            extractedUrl: d,
                            source: h,
                            restoredState: p,
                            extras: m,
                          } = a,
                          C = new gr(f, this.urlSerializer.serialize(d), h, p);
                        this.events.next(C);
                        const v = gy(this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = r =
                            {
                              ...a,
                              targetSnapshot: v,
                              urlAfterRedirects: d,
                              extras: { ...m, skipLocationChange: !1, replaceUrl: !1 },
                            }),
                          (this.currentNavigation.finalUrl = d),
                          $(r)
                        );
                      }
                      {
                        const f = '';
                        return (
                          this.events.next(
                            new K4(
                              a.id,
                              this.urlSerializer.serialize(a.extractedUrl),
                              f,
                              Cr.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          a.resolve(!1),
                          Ve
                        );
                      }
                    }),
                    _1(a => {
                      const l = new BY(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        this.urlSerializer.serialize(a.urlAfterRedirects),
                        a.targetSnapshot,
                      );
                      this.events.next(l);
                    }),
                    s2(
                      a => (
                        (this.currentTransition = r =
                          {
                            ...a,
                            guards: lZ(
                              a.targetSnapshot,
                              a.currentSnapshot,
                              this.rootContexts,
                            ),
                          }),
                        r
                      ),
                    ),
                    (function yZ(e, n) {
                      return z1(t => {
                        const {
                          targetSnapshot: c,
                          currentSnapshot: s,
                          guards: { canActivateChecks: r, canDeactivateChecks: o },
                        } = t;
                        return 0 === o.length && 0 === r.length
                          ? $({ ...t, guardsResult: !0 })
                          : (function LZ(e, n, t, c) {
                              return f1(e).pipe(
                                z1(s =>
                                  (function EZ(e, n, t, c, s) {
                                    const r =
                                      n && n.routeConfig
                                        ? n.routeConfig.canDeactivate
                                        : null;
                                    return r && 0 !== r.length
                                      ? $(
                                          r.map(i => {
                                            const a = Z0(n) ?? s,
                                              l = en(i, a);
                                            return Rt(
                                              (function CZ(e) {
                                                return e && tc(e.canDeactivate);
                                              })(l)
                                                ? l.canDeactivate(e, n, t, c)
                                                : yt(a, () => l(e, n, t, c)),
                                            ).pipe(E3());
                                          }),
                                        ).pipe(tn())
                                      : $(!0);
                                  })(s.component, s.route, t, n, c),
                                ),
                                E3(s => !0 !== s, !0),
                              );
                            })(o, c, s, e).pipe(
                              z1(i =>
                                i &&
                                (function hZ(e) {
                                  return 'boolean' == typeof e;
                                })(i)
                                  ? (function zZ(e, n, t, c) {
                                      return f1(n).pipe(
                                        ar(s =>
                                          rr(
                                            (function bZ(e, n) {
                                              return (
                                                null !== e && n && n(new qY(e)), $(!0)
                                              );
                                            })(s.route.parent, c),
                                            (function _Z(e, n) {
                                              return (
                                                null !== e && n && n(new YY(e)), $(!0)
                                              );
                                            })(s.route, c),
                                            (function DZ(e, n, t) {
                                              const c = n[n.length - 1],
                                                r = n
                                                  .slice(0, n.length - 1)
                                                  .reverse()
                                                  .map(o =>
                                                    (function uZ(e) {
                                                      const n = e.routeConfig
                                                        ? e.routeConfig.canActivateChild
                                                        : null;
                                                      return n && 0 !== n.length
                                                        ? { node: e, guards: n }
                                                        : null;
                                                    })(o),
                                                  )
                                                  .filter(o => null !== o)
                                                  .map(o =>
                                                    jv(() =>
                                                      $(
                                                        o.guards.map(a => {
                                                          const l = Z0(o.node) ?? t,
                                                            u = en(a, l);
                                                          return Rt(
                                                            (function gZ(e) {
                                                              return (
                                                                e &&
                                                                tc(e.canActivateChild)
                                                              );
                                                            })(u)
                                                              ? u.canActivateChild(c, e)
                                                              : yt(l, () => u(c, e)),
                                                          ).pipe(E3());
                                                        }),
                                                      ).pipe(tn()),
                                                    ),
                                                  );
                                              return $(r).pipe(tn());
                                            })(e, s.path, t),
                                            (function wZ(e, n, t) {
                                              const c = n.routeConfig
                                                ? n.routeConfig.canActivate
                                                : null;
                                              if (!c || 0 === c.length) return $(!0);
                                              const s = c.map(r =>
                                                jv(() => {
                                                  const o = Z0(n) ?? t,
                                                    i = en(r, o);
                                                  return Rt(
                                                    (function mZ(e) {
                                                      return e && tc(e.canActivate);
                                                    })(i)
                                                      ? i.canActivate(n, e)
                                                      : yt(o, () => i(n, e)),
                                                  ).pipe(E3());
                                                }),
                                              );
                                              return $(s).pipe(tn());
                                            })(e, s.route, t),
                                          ),
                                        ),
                                        E3(s => !0 !== s, !0),
                                      );
                                    })(c, r, e, n)
                                  : $(i),
                              ),
                              s2(i => ({ ...t, guardsResult: i })),
                            );
                      });
                    })(this.environmentInjector, a => this.events.next(a)),
                    _1(a => {
                      if (
                        ((r.guardsResult = a.guardsResult),
                        a.guardsResult && 'boolean' != typeof a.guardsResult)
                      )
                        throw zr(0, a.guardsResult);
                      const l = new jY(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        this.urlSerializer.serialize(a.urlAfterRedirects),
                        a.targetSnapshot,
                        !!a.guardsResult,
                      );
                      this.events.next(l);
                    }),
                    kt(
                      a =>
                        !!a.guardsResult ||
                        (this.cancelNavigationTransition(a, '', W1.GuardRejected), !1),
                    ),
                    L5(a => {
                      if (a.guards.canActivateChecks.length)
                        return $(a).pipe(
                          _1(l => {
                            const u = new UY(
                              l.id,
                              this.urlSerializer.serialize(l.extractedUrl),
                              this.urlSerializer.serialize(l.urlAfterRedirects),
                              l.targetSnapshot,
                            );
                            this.events.next(u);
                          }),
                          ut(l => {
                            let u = !1;
                            return $(l).pipe(
                              (function WZ(e, n) {
                                return z1(t => {
                                  const {
                                    targetSnapshot: c,
                                    guards: { canActivateChecks: s },
                                  } = t;
                                  if (!s.length) return $(t);
                                  const r = new Set(s.map(a => a.route)),
                                    o = new Set();
                                  for (const a of r)
                                    if (!o.has(a)) for (const l of Ay(a)) o.add(l);
                                  let i = 0;
                                  return f1(o).pipe(
                                    ar(a =>
                                      r.has(a)
                                        ? (function YZ(e, n, t, c) {
                                            const s = e.routeConfig,
                                              r = e._resolve;
                                            return (
                                              void 0 !== s?.title &&
                                                !vy(s) &&
                                                (r[H0] = s.title),
                                              (function ZZ(e, n, t, c) {
                                                const s = r5(e);
                                                if (0 === s.length) return $({});
                                                const r = {};
                                                return f1(s).pipe(
                                                  z1(o =>
                                                    (function QZ(e, n, t, c) {
                                                      const s = Z0(n) ?? c,
                                                        r = en(e, s);
                                                      return Rt(
                                                        r.resolve
                                                          ? r.resolve(n, t)
                                                          : yt(s, () => r(n, t)),
                                                      );
                                                    })(e[o], n, t, c).pipe(
                                                      E3(),
                                                      _1(i => {
                                                        if (i instanceof M5)
                                                          throw zr(new ur(), i);
                                                        r[o] = i;
                                                      }),
                                                    ),
                                                  ),
                                                  c5(1),
                                                  (function fY(e) {
                                                    return s2(() => e);
                                                  })(r),
                                                  Y4(o => (wy(o) ? Ve : or(o))),
                                                );
                                              })(r, e, n, c).pipe(
                                                s2(
                                                  o => (
                                                    (e._resolvedData = o),
                                                    (e.data = vr(e, e.parent, t).resolve),
                                                    null
                                                  ),
                                                ),
                                              )
                                            );
                                          })(a, c, e, n)
                                        : ((a.data = vr(a, a.parent, e).resolve),
                                          $(void 0)),
                                    ),
                                    _1(() => i++),
                                    c5(1),
                                    z1(a => (i === o.size ? $(t) : Ve)),
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              _1({
                                next: () => (u = !0),
                                complete: () => {
                                  u ||
                                    this.cancelNavigationTransition(
                                      l,
                                      '',
                                      W1.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          _1(l => {
                            const u = new HY(
                              l.id,
                              this.urlSerializer.serialize(l.extractedUrl),
                              this.urlSerializer.serialize(l.urlAfterRedirects),
                              l.targetSnapshot,
                            );
                            this.events.next(u);
                          }),
                        );
                    }),
                    L5(a => {
                      const l = u => {
                        const f = [];
                        u.routeConfig?.loadComponent &&
                          !u.routeConfig._loadedComponent &&
                          f.push(
                            this.configLoader.loadComponent(u.routeConfig).pipe(
                              _1(d => {
                                u.component = d;
                              }),
                              s2(() => {}),
                            ),
                          );
                        for (const d of u.children) f.push(...l(d));
                        return f;
                      };
                      return e5(l(a.targetSnapshot.root)).pipe(ir(null), D3(1));
                    }),
                    L5(() => this.afterPreactivation()),
                    ut(() => {
                      const { currentSnapshot: a, targetSnapshot: l } = r,
                        u = this.createViewTransition?.(
                          this.environmentInjector,
                          a.root,
                          l.root,
                        );
                      return u ? f1(u).pipe(s2(() => r)) : $(r);
                    }),
                    s2(a => {
                      const l = (function cZ(e, n, t) {
                        const c = X0(e, n._root, t ? t._root : void 0);
                        return new my(c, n);
                      })(t.routeReuseStrategy, a.targetSnapshot, a.currentRouterState);
                      return (
                        (this.currentTransition = r = { ...a, targetRouterState: l }),
                        (this.currentNavigation.targetRouterState = l),
                        r
                      );
                    }),
                    _1(() => {
                      this.events.next(new f5());
                    }),
                    ((e, n, t, c) =>
                      s2(
                        s => (
                          new aZ(
                            n,
                            s.targetRouterState,
                            s.currentRouterState,
                            t,
                            c,
                          ).activate(e),
                          s
                        ),
                      ))(
                      this.rootContexts,
                      t.routeReuseStrategy,
                      a => this.events.next(a),
                      this.inputBindingEnabled,
                    ),
                    D3(1),
                    _1({
                      next: a => {
                        (o = !0),
                          (this.lastSuccessfulNavigation = this.currentNavigation),
                          this.events.next(
                            new Ot(
                              a.id,
                              this.urlSerializer.serialize(a.extractedUrl),
                              this.urlSerializer.serialize(a.urlAfterRedirects),
                            ),
                          ),
                          this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),
                          a.resolve(!0);
                      },
                      complete: () => {
                        o = !0;
                      },
                    }),
                    qv(
                      this.transitionAbortSubject.pipe(
                        _1(a => {
                          throw a;
                        }),
                      ),
                    ),
                    s5(() => {
                      !o &&
                        !i &&
                        this.cancelNavigationTransition(
                          r,
                          '',
                          W1.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === r.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    Y4(a => {
                      if (((i = !0), _y(a)))
                        this.events.next(
                          new I3(
                            r.id,
                            this.urlSerializer.serialize(r.extractedUrl),
                            a.message,
                            a.cancellationCode,
                          ),
                        ),
                          (function oZ(e) {
                            return _y(e) && S3(e.url);
                          })(a)
                            ? this.events.next(new Mr(a.url, a.navigationBehaviorOptions))
                            : r.resolve(!1);
                      else {
                        const l = new u5(
                          r.id,
                          this.urlSerializer.serialize(r.extractedUrl),
                          a,
                          r.targetSnapshot ?? void 0,
                        );
                        try {
                          const u = yt(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(l),
                          );
                          if (u instanceof M5) {
                            const { message: f, cancellationCode: d } = zr(0, u);
                            this.events.next(
                              new I3(
                                r.id,
                                this.urlSerializer.serialize(r.extractedUrl),
                                f,
                                d,
                              ),
                            ),
                              this.events.next(
                                new Mr(u.redirectTo, u.navigationBehaviorOptions),
                              );
                          } else {
                            this.events.next(l);
                            const f = t.errorHandler(a);
                            r.resolve(!!f);
                          }
                        } catch (u) {
                          this.options.resolveNavigationPromiseOnError
                            ? r.resolve(!1)
                            : r.reject(u);
                        }
                      }
                      return Ve;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(t, c, s) {
            const r = new I3(t.id, this.urlSerializer.serialize(t.extractedUrl), c, s);
            this.events.next(r), t.resolve(!1);
          }
          isUpdatingInternalState() {
            return (
              this.currentTransition?.extractedUrl.toString() !==
              this.currentTransition?.currentUrlTree.toString()
            );
          }
          isUpdatedBrowserUrl() {
            const t = this.urlHandlingStrategy.extract(
                this.urlSerializer.parse(this.location.path(!0)),
              ),
              c =
                this.currentNavigation?.targetBrowserUrl ??
                this.currentNavigation?.extractedUrl;
            return (
              t.toString() !== c?.toString() &&
              !this.currentNavigation?.extras.skipLocationChange
            );
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      function cQ(e) {
        return e !== Y0;
      }
      let sQ = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: () => y(oQ),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class rQ {
        shouldDetach(n) {
          return !1;
        }
        store(n, t) {}
        shouldAttach(n) {
          return !1;
        }
        retrieve(n) {
          return null;
        }
        shouldReuseRoute(n, t) {
          return n.routeConfig === t.routeConfig;
        }
      }
      let oQ = (() => {
          class e extends rQ {
            static #e = (this.ɵfac = (() => {
              let t;
              return function (s) {
                return (t || (t = q2(e)))(s || e);
              };
            })());
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        By = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(iQ),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        iQ = (() => {
          class e extends By {
            constructor() {
              super(...arguments),
                (this.location = y(F0)),
                (this.urlSerializer = y(Q4)),
                (this.options = y(nc, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.urlHandlingStrategy = y(_5)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new N3()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = gy(null)),
                (this.stateMemento = this.createStateMemento());
            }
            getCurrentUrlTree() {
              return this.currentUrlTree;
            }
            getRawUrlTree() {
              return this.rawUrlTree;
            }
            restoredState() {
              return this.location.getState();
            }
            get browserPageId() {
              return 'computed' !== this.canceledNavigationResolution
                ? this.currentPageId
                : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
            }
            getRouterState() {
              return this.routerState;
            }
            createStateMemento() {
              return {
                rawUrlTree: this.rawUrlTree,
                currentUrlTree: this.currentUrlTree,
                routerState: this.routerState,
              };
            }
            registerNonRouterCurrentEntryChangeListener(t) {
              return this.location.subscribe(c => {
                'popstate' === c.type && t(c.url, c.state);
              });
            }
            handleRouterEvent(t, c) {
              if (t instanceof gr) this.stateMemento = this.createStateMemento();
              else if (t instanceof K4) this.rawUrlTree = c.initialUrl;
              else if (t instanceof dy) {
                if ('eager' === this.urlUpdateStrategy && !c.extras.skipLocationChange) {
                  const s = this.urlHandlingStrategy.merge(c.finalUrl, c.initialUrl);
                  this.setBrowserUrl(c.targetBrowserUrl ?? s, c);
                }
              } else
                t instanceof f5
                  ? ((this.currentUrlTree = c.finalUrl),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      c.finalUrl,
                      c.initialUrl,
                    )),
                    (this.routerState = c.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      !c.extras.skipLocationChange &&
                      this.setBrowserUrl(c.targetBrowserUrl ?? this.rawUrlTree, c))
                  : t instanceof I3 &&
                    (t.code === W1.GuardRejected || t.code === W1.NoDataFromResolver)
                  ? this.restoreHistory(c)
                  : t instanceof u5
                  ? this.restoreHistory(c, !0)
                  : t instanceof Ot &&
                    ((this.lastSuccessfulId = t.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(t, c) {
              const s = t instanceof N3 ? this.urlSerializer.serialize(t) : t;
              if (this.location.isCurrentPathEqualTo(s) || c.extras.replaceUrl) {
                const o = {
                  ...c.extras.state,
                  ...this.generateNgRouterState(c.id, this.browserPageId),
                };
                this.location.replaceState(s, '', o);
              } else {
                const r = {
                  ...c.extras.state,
                  ...this.generateNgRouterState(c.id, this.browserPageId + 1),
                };
                this.location.go(s, '', r);
              }
            }
            restoreHistory(t, c = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const r = this.currentPageId - this.browserPageId;
                0 !== r
                  ? this.location.historyGo(r)
                  : this.currentUrlTree === t.finalUrl &&
                    0 === r &&
                    (this.resetState(t), this.resetUrlToCurrentUrlTree());
              } else
                'replace' === this.canceledNavigationResolution &&
                  (c && this.resetState(t), this.resetUrlToCurrentUrlTree());
            }
            resetState(t) {
              (this.routerState = this.stateMemento.routerState),
                (this.currentUrlTree = this.stateMemento.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  t.finalUrl ?? this.rawUrlTree,
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
              );
            }
            generateNgRouterState(t, c) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: t, ɵrouterPageId: c }
                : { navigationId: t };
            }
            static #e = (this.ɵfac = (() => {
              let t;
              return function (s) {
                return (t || (t = q2(e)))(s || e);
              };
            })());
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      var cc = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = 'COMPLETE'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.REDIRECTING = 2)] = 'REDIRECTING'),
          e
        );
      })(cc || {});
      function aQ(e) {
        throw e;
      }
      const lQ = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        uQ = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let ft = (() => {
          class e {
            get currentUrlTree() {
              return this.stateManager.getCurrentUrlTree();
            }
            get rawUrlTree() {
              return this.stateManager.getRawUrlTree();
            }
            get events() {
              return this._events;
            }
            get routerState() {
              return this.stateManager.getRouterState();
            }
            constructor() {
              (this.disposed = !1),
                (this.console = y(IC)),
                (this.stateManager = y(By)),
                (this.options = y(nc, { optional: !0 }) || {}),
                (this.pendingTasks = y(i3)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = y(Nr)),
                (this.urlSerializer = y(Q4)),
                (this.location = y(F0)),
                (this.urlHandlingStrategy = y(_5)),
                (this._events = new h1()),
                (this.errorHandler = this.options.errorHandler || aQ),
                (this.navigated = !1),
                (this.routeReuseStrategy = y(sQ)),
                (this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore'),
                (this.config = y(Er, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!y(Lr, { optional: !0 })),
                (this.eventsSubscription = new i1()),
                this.resetConfig(this.config),
                this.navigationTransitions
                  .setupNavigations(this, this.currentUrlTree, this.routerState)
                  .subscribe({
                    error: t => {
                      this.console.warn(t);
                    },
                  }),
                this.subscribeToNavigationEvents();
            }
            subscribeToNavigationEvents() {
              const t = this.navigationTransitions.events.subscribe(c => {
                try {
                  const s = this.navigationTransitions.currentTransition,
                    r = this.navigationTransitions.currentNavigation;
                  if (null !== s && null !== r)
                    if (
                      (this.stateManager.handleRouterEvent(c, r),
                      c instanceof I3 &&
                        c.code !== W1.Redirect &&
                        c.code !== W1.SupersededByNewNavigation)
                    )
                      this.navigated = !0;
                    else if (c instanceof Ot) this.navigated = !0;
                    else if (c instanceof Mr) {
                      const o = c.navigationBehaviorOptions,
                        i = this.urlHandlingStrategy.merge(c.url, s.currentRawUrl),
                        a = {
                          browserUrl: s.extras.browserUrl,
                          info: s.extras.info,
                          skipLocationChange: s.extras.skipLocationChange,
                          replaceUrl:
                            s.extras.replaceUrl ||
                            'eager' === this.urlUpdateStrategy ||
                            cQ(s.source),
                          ...o,
                        };
                      this.scheduleNavigation(i, Y0, null, a, {
                        resolve: s.resolve,
                        reject: s.reject,
                        promise: s.promise,
                      });
                    }
                  (function dQ(e) {
                    return !(e instanceof f5 || e instanceof Mr);
                  })(c) && this._events.next(c);
                } catch (s) {
                  this.navigationTransitions.transitionAbortSubject.next(s);
                }
              });
              this.eventsSubscription.add(t);
            }
            resetRootComponentType(t) {
              (this.routerState.root.component = t),
                (this.navigationTransitions.rootComponentType = t);
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                this.navigationTransitions.hasRequestedNavigation ||
                  this.navigateToSyncWithBrowser(
                    this.location.path(!0),
                    Y0,
                    this.stateManager.restoredState(),
                  );
            }
            setUpLocationChangeListener() {
              this.nonRouterCurrentEntryChangeSubscription ??=
                this.stateManager.registerNonRouterCurrentEntryChangeListener((t, c) => {
                  setTimeout(() => {
                    this.navigateToSyncWithBrowser(t, 'popstate', c);
                  }, 0);
                });
            }
            navigateToSyncWithBrowser(t, c, s) {
              const r = { replaceUrl: !0 },
                o = s?.navigationId ? s : null;
              if (s) {
                const a = { ...s };
                delete a.navigationId,
                  delete a.ɵrouterPageId,
                  0 !== Object.keys(a).length && (r.state = a);
              }
              const i = this.parseUrl(t);
              this.scheduleNavigation(i, c, o, r);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            get lastSuccessfulNavigation() {
              return this.navigationTransitions.lastSuccessfulNavigation;
            }
            resetConfig(t) {
              (this.config = t.map(z5)), (this.navigated = !1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.nonRouterCurrentEntryChangeSubscription &&
                  (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
                  (this.nonRouterCurrentEntryChangeSubscription = void 0)),
                (this.disposed = !0),
                this.eventsSubscription.unsubscribe();
            }
            createUrlTree(t, c = {}) {
              const {
                  relativeTo: s,
                  queryParams: r,
                  fragment: o,
                  queryParamsHandling: i,
                  preserveFragment: a,
                } = c,
                l = a ? this.currentUrlTree.fragment : o;
              let f,
                u = null;
              switch (i ?? this.options.defaultQueryParamsHandling) {
                case 'merge':
                  u = { ...this.currentUrlTree.queryParams, ...r };
                  break;
                case 'preserve':
                  u = this.currentUrlTree.queryParams;
                  break;
                default:
                  u = r || null;
              }
              null !== u && (u = this.removeEmptyProps(u));
              try {
                f = ry(s ? s.snapshot : this.routerState.snapshot.root);
              } catch {
                ('string' != typeof t[0] || '/' !== t[0][0]) && (t = []),
                  (f = this.currentUrlTree.root);
              }
              return oy(f, t, u, l ?? null);
            }
            navigateByUrl(t, c = { skipLocationChange: !1 }) {
              const s = S3(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(s, this.rawUrlTree);
              return this.scheduleNavigation(r, Y0, null, c);
            }
            navigate(t, c = { skipLocationChange: !1 }) {
              return (
                (function fQ(e) {
                  for (let n = 0; n < e.length; n++)
                    if (null == e[n]) throw new L(4008, !1);
                })(t),
                this.navigateByUrl(this.createUrlTree(t, c), c)
              );
            }
            serializeUrl(t) {
              return this.urlSerializer.serialize(t);
            }
            parseUrl(t) {
              try {
                return this.urlSerializer.parse(t);
              } catch {
                return this.urlSerializer.parse('/');
              }
            }
            isActive(t, c) {
              let s;
              if (((s = !0 === c ? { ...lQ } : !1 === c ? { ...uQ } : c), S3(t)))
                return Qv(this.currentUrlTree, t, s);
              const r = this.parseUrl(t);
              return Qv(this.currentUrlTree, r, s);
            }
            removeEmptyProps(t) {
              return Object.entries(t).reduce(
                (c, [s, r]) => (null != r && (c[s] = r), c),
                {},
              );
            }
            scheduleNavigation(t, c, s, r, o) {
              if (this.disposed) return Promise.resolve(!1);
              let i, a, l;
              o
                ? ((i = o.resolve), (a = o.reject), (l = o.promise))
                : (l = new Promise((f, d) => {
                    (i = f), (a = d);
                  }));
              const u = this.pendingTasks.add();
              return (
                (function jy(e, n) {
                  e.events
                    .pipe(
                      kt(
                        t =>
                          t instanceof Ot ||
                          t instanceof I3 ||
                          t instanceof u5 ||
                          t instanceof K4,
                      ),
                      s2(t =>
                        t instanceof Ot || t instanceof K4
                          ? cc.COMPLETE
                          : t instanceof I3 &&
                            (t.code === W1.Redirect ||
                              t.code === W1.SupersededByNewNavigation)
                          ? cc.REDIRECTING
                          : cc.FAILED,
                      ),
                      kt(t => t !== cc.REDIRECTING),
                      D3(1),
                    )
                    .subscribe(() => {
                      n();
                    });
                })(this, () => {
                  queueMicrotask(() => this.pendingTasks.remove(u));
                }),
                this.navigationTransitions.handleNavigationRequest({
                  source: c,
                  restoredState: s,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: i,
                  reject: a,
                  promise: l,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                l.catch(f => Promise.reject(f))
              );
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        sc = (() => {
          class e {
            constructor(t, c, s, r, o, i) {
              (this.router = t),
                (this.route = c),
                (this.tabIndexAttribute = s),
                (this.renderer = r),
                (this.el = o),
                (this.locationStrategy = i),
                (this.href = null),
                (this.onChanges = new h1()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const a = o.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === a || 'area' === a),
                this.isAnchorElement
                  ? (this.subscription = t.events.subscribe(l => {
                      l instanceof Ot && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            setTabIndexIfNotOnNativeEl(t) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', t);
            }
            ngOnChanges(t) {
              this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
            }
            set routerLink(t) {
              null == t
                ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
                : ((this.routerLinkInput = S3(t) || Array.isArray(t) ? t : [t]),
                  this.setTabIndexIfNotOnNativeEl('0'));
            }
            onClick(t, c, s, r, o) {
              const i = this.urlTree;
              return (
                !!(
                  null === i ||
                  (this.isAnchorElement &&
                    (0 !== t ||
                      c ||
                      s ||
                      r ||
                      o ||
                      ('string' == typeof this.target && '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(i, {
                  skipLocationChange: this.skipLocationChange,
                  replaceUrl: this.replaceUrl,
                  state: this.state,
                  info: this.info,
                }),
                !this.isAnchorElement)
              );
            }
            ngOnDestroy() {
              this.subscription?.unsubscribe();
            }
            updateHref() {
              const t = this.urlTree;
              this.href =
                null !== t && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))
                  : null;
              const c =
                null === this.href
                  ? null
                  : (function nh(e, n, t) {
                      return (function uO(e, n) {
                        return ('src' === n &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === n && ('base' === e || 'link' === e))
                          ? th
                          : y8;
                      })(
                        n,
                        t,
                      )(e);
                    })(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
              this.applyAttributeValue('href', c);
            }
            applyAttributeValue(t, c) {
              const s = this.renderer,
                r = this.el.nativeElement;
              null !== c ? s.setAttribute(r, t, c) : s.removeAttribute(r, t);
            }
            get urlTree() {
              return null === this.routerLinkInput
                ? null
                : S3(this.routerLinkInput)
                ? this.routerLinkInput
                : this.router.createUrlTree(this.routerLinkInput, {
                    relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(
                z(ft),
                z(J4),
                (function Rn(e) {
                  return (function Ik(e, n) {
                    if ('class' === n) return e.classes;
                    if ('style' === n) return e.styles;
                    const t = e.attrs;
                    if (t) {
                      const c = t.length;
                      let s = 0;
                      for (; s < c; ) {
                        const r = t[s];
                        if (Hu(r)) break;
                        if (0 === r) s += 2;
                        else if ('number' == typeof r)
                          for (s++; s < c && 'string' == typeof t[s]; ) s++;
                        else {
                          if (r === n) return t[s + 1];
                          s += 2;
                        }
                      }
                    }
                    return null;
                  })(h2(), e);
                })('tabindex'),
                z(Te),
                z(x1),
                z(G4),
              );
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (c, s) {
                1 & c &&
                  J('click', function (o) {
                    return s.onClick(
                      o.button,
                      o.ctrlKey,
                      o.shiftKey,
                      o.altKey,
                      o.metaKey,
                    );
                  }),
                  2 & c && ge('target', s.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                info: 'info',
                relativeTo: 'relativeTo',
                preserveFragment: [2, 'preserveFragment', 'preserveFragment', $4],
                skipLocationChange: [2, 'skipLocationChange', 'skipLocationChange', $4],
                replaceUrl: [2, 'replaceUrl', 'replaceUrl', $4],
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [Jp, m1],
            }));
          }
          return e;
        })();
      const b5 = new _('');
      let Uy = (() => {
        class e {
          constructor(t, c, s, r, o = {}) {
            (this.urlSerializer = t),
              (this.transitions = c),
              (this.viewportScroller = s),
              (this.zone = r),
              (this.options = o),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (o.scrollPositionRestoration ||= 'disabled'),
              (o.anchorScrolling ||= 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe(t => {
              t instanceof gr
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = t.navigationTrigger),
                  (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                : t instanceof Ot
                ? ((this.lastId = t.id),
                  this.scheduleScrollEvent(
                    t,
                    this.urlSerializer.parse(t.urlAfterRedirects).fragment,
                  ))
                : t instanceof K4 &&
                  t.code === Cr.IgnoredSameUrlNavigation &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(t, this.urlSerializer.parse(t.url).fragment));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe(t => {
              t instanceof hy &&
                (t.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(t.position)
                  : t.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(t.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(t, c) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new hy(
                      t,
                      'popstate' === this.lastSource ? this.store[this.restoredId] : null,
                      c,
                    ),
                  );
                });
              }, 0);
            });
          }
          ngOnDestroy() {
            this.routerEventsSubscription?.unsubscribe(),
              this.scrollEventsSubscription?.unsubscribe();
          }
          static #e = (this.ɵfac = function (c) {
            k8();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function Hy(e) {
        return e.routerState.root;
      }
      function Ue(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function $y() {
        const e = y(D2);
        return n => {
          const t = e.get(Fe);
          if (n !== t.components[0]) return;
          const c = e.get(ft),
            s = e.get(Gy);
          1 === e.get(w5) && c.initialNavigation(),
            e.get(qy, null, e2.Optional)?.setUpPreloading(),
            e.get(b5, null, e2.Optional)?.init(),
            c.resetRootComponentType(t.componentTypes[0]),
            s.closed || (s.next(), s.complete(), s.unsubscribe());
        };
      }
      const Gy = new _('', { factory: () => new h1() }),
        w5 = new _('', { providedIn: 'root', factory: () => 1 }),
        qy = new _('');
      let _Q = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-main']],
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 0,
              template: function (c, s) {
                1 & c && p2(0, 'router-outlet');
              },
              dependencies: [K0],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Yy = (() => {
          class e {
            constructor(t) {
              this.router = t;
            }
            navigate(t) {
              this.router.navigate([t]);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(ft));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function Zy(e) {
        return Array.isArray(e) ? e : [e];
      }
      class DQ extends i1 {
        constructor(n, t) {
          super();
        }
        schedule(n, t = 0) {
          return this;
        }
      }
      const xr = {
        setInterval(e, n, ...t) {
          const { delegate: c } = xr;
          return c?.setInterval ? c.setInterval(e, n, ...t) : setInterval(e, n, ...t);
        },
        clearInterval(e) {
          const { delegate: n } = xr;
          return (n?.clearInterval || clearInterval)(e);
        },
        delegate: void 0,
      };
      class Qy extends DQ {
        constructor(n, t) {
          super(n, t), (this.scheduler = n), (this.work = t), (this.pending = !1);
        }
        schedule(n, t = 0) {
          var c;
          if (this.closed) return this;
          this.state = n;
          const s = this.id,
            r = this.scheduler;
          return (
            null != s && (this.id = this.recycleAsyncId(r, s, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id =
              null !== (c = this.id) && void 0 !== c
                ? c
                : this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(n, t, c = 0) {
          return xr.setInterval(n.flush.bind(n, this), c);
        }
        recycleAsyncId(n, t, c = 0) {
          if (null != c && this.delay === c && !1 === this.pending) return t;
          null != t && xr.clearInterval(t);
        }
        execute(n, t) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const c = this._execute(n, t);
          if (c) return c;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(n, t) {
          let s,
            c = !1;
          try {
            this.work(n);
          } catch (r) {
            (c = !0), (s = r || new Error('Scheduled action threw falsy error'));
          }
          if (c) return this.unsubscribe(), s;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: n, scheduler: t } = this,
              { actions: c } = t;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              Oc(c, this),
              null != n && (this.id = this.recycleAsyncId(t, n, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
      const Ky = { now: () => (Ky.delegate || Date).now(), delegate: void 0 };
      class rc {
        constructor(n, t = rc.now) {
          (this.schedulerActionCtor = n), (this.now = t);
        }
        schedule(n, t = 0, c) {
          return new this.schedulerActionCtor(this, n).schedule(c, t);
        }
      }
      rc.now = Ky.now;
      class Xy extends rc {
        constructor(n, t = rc.now) {
          super(n, t), (this.actions = []), (this._active = !1);
        }
        flush(n) {
          const { actions: t } = this;
          if (this._active) return void t.push(n);
          let c;
          this._active = !0;
          do {
            if ((c = n.execute(n.state, n.delay))) break;
          } while ((n = t.shift()));
          if (((this._active = !1), c)) {
            for (; (n = t.shift()); ) n.unsubscribe();
            throw c;
          }
        }
      }
      const EQ = new Xy(Qy);
      let D5;
      try {
        D5 = typeof Intl < 'u' && Intl.v8BreakIterator;
      } catch {
        D5 = !1;
      }
      let xQ = (() => {
        class e {
          constructor(t) {
            (this._platformId = t),
              (this.isBrowser = this._platformId
                ? XM(this._platformId)
                : 'object' == typeof document && !!document),
              (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
              (this.TRIDENT =
                this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
              (this.BLINK =
                this.isBrowser &&
                !(!window.chrome && !D5) &&
                typeof CSS < 'u' &&
                !this.EDGE &&
                !this.TRIDENT),
              (this.WEBKIT =
                this.isBrowser &&
                /AppleWebKit/i.test(navigator.userAgent) &&
                !this.BLINK &&
                !this.EDGE &&
                !this.TRIDENT),
              (this.IOS =
                this.isBrowser &&
                /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !('MSStream' in window)),
              (this.FIREFOX =
                this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
              (this.ANDROID =
                this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT),
              (this.SAFARI =
                this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(tt));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      const eL = new Set();
      let T3,
        AQ = (() => {
          class e {
            constructor(t, c) {
              (this._platform = t),
                (this._nonce = c),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : kQ);
            }
            matchMedia(t) {
              return (
                (this._platform.WEBKIT || this._platform.BLINK) &&
                  (function TQ(e, n) {
                    if (!eL.has(e))
                      try {
                        T3 ||
                          ((T3 = document.createElement('style')),
                          n && T3.setAttribute('nonce', n),
                          T3.setAttribute('type', 'text/css'),
                          document.head.appendChild(T3)),
                          T3.sheet &&
                            (T3.sheet.insertRule(`@media ${e} {body{ }}`, 0), eL.add(e));
                      } catch (t) {
                        console.error(t);
                      }
                  })(t, this._nonce),
                this._matchMedia(t)
              );
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(xQ), E(c8, 8));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function kQ(e) {
        return {
          matches: 'all' === e || '' === e,
          media: e,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let RQ = (() => {
        class e {
          constructor(t, c) {
            (this._mediaMatcher = t),
              (this._zone = c),
              (this._queries = new Map()),
              (this._destroySubject = new h1());
          }
          ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
          }
          isMatched(t) {
            return tL(Zy(t)).some(s => this._registerQuery(s).mql.matches);
          }
          observe(t) {
            let r = e5(tL(Zy(t)).map(o => this._registerQuery(o).observable));
            return (
              (r = rr(
                r.pipe(D3(1)),
                r.pipe(
                  (function wQ(e) {
                    return kt((n, t) => e <= t);
                  })(1),
                  (function NQ(e, n = EQ) {
                    return U2((t, c) => {
                      let s = null,
                        r = null,
                        o = null;
                      const i = () => {
                        if (s) {
                          s.unsubscribe(), (s = null);
                          const l = r;
                          (r = null), c.next(l);
                        }
                      };
                      function a() {
                        const l = o + e,
                          u = n.now();
                        if (u < l)
                          return (s = this.schedule(void 0, l - u)), void c.add(s);
                        i();
                      }
                      t.subscribe(
                        k2(
                          c,
                          l => {
                            (r = l),
                              (o = n.now()),
                              s || ((s = n.schedule(a, e)), c.add(s));
                          },
                          () => {
                            i(), c.complete();
                          },
                          void 0,
                          () => {
                            r = s = null;
                          },
                        ),
                      );
                    });
                  })(0),
                ),
              )),
              r.pipe(
                s2(o => {
                  const i = { matches: !1, breakpoints: {} };
                  return (
                    o.forEach(({ matches: a, query: l }) => {
                      (i.matches = i.matches || a), (i.breakpoints[l] = a);
                    }),
                    i
                  );
                }),
              )
            );
          }
          _registerQuery(t) {
            if (this._queries.has(t)) return this._queries.get(t);
            const c = this._mediaMatcher.matchMedia(t),
              r = {
                observable: new O2(o => {
                  const i = a => this._zone.run(() => o.next(a));
                  return (
                    c.addListener(i),
                    () => {
                      c.removeListener(i);
                    }
                  );
                }).pipe(
                  Hv(c),
                  s2(({ matches: o }) => ({ query: t, matches: o })),
                  qv(this._destroySubject),
                ),
                mql: c,
              };
            return this._queries.set(t, r), r;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(AQ), E(l2));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      function tL(e) {
        return e
          .map(n => n.split(','))
          .reduce((n, t) => n.concat(t))
          .map(n => n.trim());
      }
      const b1_XSmall = '(max-width: 599.98px)',
        b1_Small = '(min-width: 600px) and (max-width: 959.98px)',
        b1_Medium = '(min-width: 960px) and (max-width: 1279.98px)',
        b1_Large = '(min-width: 1280px) and (max-width: 1919.98px)',
        b1_XLarge = '(min-width: 1920px)';
      var se = (function (e) {
        return (
          (e.XSmall = 'XSmall'),
          (e.Small = 'Small'),
          (e.Medium = 'Medium'),
          (e.Large = 'Large'),
          (e.XLarge = 'XLarge'),
          e
        );
      })(se || {});
      let OQ = (() => {
        class e {
          constructor(t) {
            (this.observer = t),
              (this.observers = new Map()),
              this.getBreakpointsObserve().subscribe(c => {
                c.breakpoints[b1_XSmall]
                  ? this.notifyObservers({ breakpoint: se.XSmall })
                  : c.breakpoints[b1_Small]
                  ? this.notifyObservers({ breakpoint: se.Small })
                  : c.breakpoints[b1_Medium]
                  ? this.notifyObservers({ breakpoint: se.Medium })
                  : c.breakpoints[b1_Large]
                  ? this.notifyObservers({ breakpoint: se.Large })
                  : c.breakpoints[b1_XLarge] &&
                    this.notifyObservers({ breakpoint: se.XLarge });
              });
          }
          addObserver(t) {
            if (this.observers.has(t)) throw new Error('Object is already registered!');
            this.observers.set(t, t),
              this.getBreakpointsObserve()
                .subscribe(c => {
                  c.breakpoints[b1_XSmall]
                    ? t.update({ breakpoint: se.XSmall })
                    : c.breakpoints[b1_Small]
                    ? t.update({ breakpoint: se.Small })
                    : c.breakpoints[b1_Medium]
                    ? t.update({ breakpoint: se.Medium })
                    : c.breakpoints[b1_Large]
                    ? t.update({ breakpoint: se.Large })
                    : c.breakpoints[b1_XLarge] && t.update({ breakpoint: se.XLarge });
                })
                .unsubscribe();
          }
          removeObserver(t) {
            if (!this.observers.has(t)) throw new Error('Object is not registered!');
            this.observers.delete(t);
          }
          notifyObservers(t) {
            this.observers.forEach(c => {
              c.update(t);
            });
          }
          getBreakpointsObserve() {
            return this.observer.observe([
              b1_XSmall,
              b1_Small,
              b1_Medium,
              b1_Large,
              b1_XLarge,
            ]);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(RQ));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      const VQ = new (class PQ extends Xy {})(
        class FQ extends Qy {
          constructor(n, t) {
            super(n, t), (this.scheduler = n), (this.work = t);
          }
          schedule(n, t = 0) {
            return t > 0
              ? super.schedule(n, t)
              : ((this.delay = t), (this.state = n), this.scheduler.flush(this), this);
          }
          execute(n, t) {
            return t > 0 || this.closed ? super.execute(n, t) : this._execute(n, t);
          }
          requestAsyncId(n, t, c = 0) {
            return (null != c && c > 0) || (null == c && this.delay > 0)
              ? super.requestAsyncId(n, t, c)
              : (n.flush(this), 0);
          }
        },
      );
      function HQ(e, n) {
        return e === n;
      }
      function N5(e, n) {
        const t = !n?.manualCleanup;
        t &&
          !n?.injector &&
          (function r6(e) {
            if (!nf()) throw new L(-203, !1);
          })();
        const c = t ? n?.injector?.get(o3) ?? y(o3) : null,
          s = (function qQ(e = Object.is) {
            return (n, t) => 1 === n.kind && 1 === t.kind && e(n.value, t.value);
          })(n?.equal);
        let r;
        r = Dt(n?.requireSync ? { kind: 0 } : { kind: 1, value: n?.initialValue }, {
          equal: s,
        });
        const o = e.subscribe({
          next: i => r.set({ kind: 1, value: i }),
          error: i => {
            if (n?.rejectErrors) throw i;
            r.set({ kind: 2, error: i });
          },
        });
        if (n?.requireSync && 0 === r().kind) throw new L(601, !1);
        return (
          c?.onDestroy(o.unsubscribe.bind(o)),
          b3(
            () => {
              const i = r();
              switch (i.kind) {
                case 1:
                  return i.value;
                case 2:
                  throw i.error;
                case 0:
                  throw new L(601, !1);
              }
            },
            { equal: n?.equal },
          )
        );
      }
      const ac = {};
      function x5(e, n) {
        return Object.defineProperty(n, 'type', { value: e, writable: !1 });
      }
      const sL = '@ngrx/store/init';
      let He = (() => {
        class e extends n1 {
          constructor() {
            super({ type: sL });
          }
          next(t) {
            if ('function' == typeof t)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().",
              );
            if (typeof t > 'u') throw new TypeError('Actions must be objects');
            if (typeof t.type > 'u')
              throw new TypeError('Actions must have a type property');
            super.next(t);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const KQ = [He],
        rL = new _('@ngrx/store Internal Root Guard'),
        oL = new _('@ngrx/store Internal Initial State'),
        sn = new _('@ngrx/store Initial State'),
        iL = new _('@ngrx/store Reducer Factory'),
        aL = new _('@ngrx/store Internal Reducer Factory Provider'),
        lL = new _('@ngrx/store Initial Reducers'),
        I5 = new _('@ngrx/store Internal Initial Reducers'),
        fL =
          (new _('@ngrx/store Store Features'),
          new _('@ngrx/store Internal Store Reducers')),
        gL =
          (new _('@ngrx/store Internal Feature Reducers'),
          new _('@ngrx/store Internal Feature Configs'),
          new _('@ngrx/store Internal Store Features'),
          new _('@ngrx/store Internal Feature Reducers Token'),
          new _('@ngrx/store Feature Reducers'),
          new _('@ngrx/store User Provided Meta Reducers')),
        Ir = new _('@ngrx/store Meta Reducers'),
        CL = new _('@ngrx/store Internal Resolved Meta Reducers'),
        ML = new _('@ngrx/store User Runtime Checks Config'),
        vL = new _('@ngrx/store Internal User Runtime Checks Config'),
        lc = new _('@ngrx/store Internal Runtime Checks'),
        T5 = new _('@ngrx/store Check if Action types are unique'),
        k5 = new _('@ngrx/store Root Store Provider');
      function R5(e, n = {}) {
        const t = Object.keys(e),
          c = {};
        for (let r = 0; r < t.length; r++) {
          const o = t[r];
          'function' == typeof e[o] && (c[o] = e[o]);
        }
        const s = Object.keys(c);
        return function (o, i) {
          o = void 0 === o ? n : o;
          let a = !1;
          const l = {};
          for (let u = 0; u < s.length; u++) {
            const f = s[u],
              h = o[f],
              p = (0, c[f])(h, i);
            (l[f] = p), (a = a || p !== h);
          }
          return a ? l : o;
        };
      }
      function LL(...e) {
        return function (n) {
          if (0 === e.length) return n;
          const t = e[e.length - 1];
          return e.slice(0, -1).reduceRight((s, r) => r(s), t(n));
        };
      }
      function zL(e, n) {
        return (
          Array.isArray(n) && n.length > 0 && (e = LL.apply(null, [...n, e])),
          (t, c) => {
            const s = e(t);
            return (r, o) => s((r = void 0 === r ? c : r), o);
          }
        );
      }
      new _('@ngrx/store Feature State Provider');
      class O5 extends O2 {}
      class _L extends He {}
      let k3 = (() => {
        class e extends n1 {
          get currentReducers() {
            return this.reducers;
          }
          constructor(t, c, s, r) {
            super(r(s, c)),
              (this.dispatcher = t),
              (this.initialState = c),
              (this.reducers = s),
              (this.reducerFactory = r);
          }
          addFeature(t) {
            this.addFeatures([t]);
          }
          addFeatures(t) {
            const c = t.reduce(
              (
                s,
                {
                  reducers: r,
                  reducerFactory: o,
                  metaReducers: i,
                  initialState: a,
                  key: l,
                },
              ) => {
                const u =
                  'function' == typeof r
                    ? (function JQ(e) {
                        const n = Array.isArray(e) && e.length > 0 ? LL(...e) : t => t;
                        return (t, c) => (
                          (t = n(t)), (s, r) => t((s = void 0 === s ? c : s), r)
                        );
                      })(i)(r, a)
                    : zL(o, i)(r, a);
                return (s[l] = u), s;
              },
              {},
            );
            this.addReducers(c);
          }
          removeFeature(t) {
            this.removeFeatures([t]);
          }
          removeFeatures(t) {
            this.removeReducers(t.map(c => c.key));
          }
          addReducer(t, c) {
            this.addReducers({ [t]: c });
          }
          addReducers(t) {
            (this.reducers = { ...this.reducers, ...t }),
              this.updateReducers(Object.keys(t));
          }
          removeReducer(t) {
            this.removeReducers([t]);
          }
          removeReducers(t) {
            t.forEach(c => {
              this.reducers = (function XQ(e, n) {
                return Object.keys(e)
                  .filter(t => t !== n)
                  .reduce((t, c) => Object.assign(t, { [c]: e[c] }), {});
              })(this.reducers, c);
            }),
              this.updateReducers(t);
          }
          updateReducers(t) {
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              this.dispatcher.next({ type: '@ngrx/store/update-reducers', features: t });
          }
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(_L), E(sn), E(lL), E(iL));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const tK = [k3, { provide: O5, useExisting: k3 }, { provide: _L, useExisting: He }];
      let F5 = (() => {
        class e extends h1 {
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = (() => {
            let t;
            return function (s) {
              return (t || (t = q2(e)))(s || e);
            };
          })());
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const nK = [F5];
      class P5 extends O2 {}
      let bL = (() => {
        class e extends n1 {
          static #e = (this.INIT = sL);
          constructor(t, c, s, r) {
            super(r);
            const i = t.pipe(Kl(VQ)).pipe(
                (function BQ(...e) {
                  const n = Jl(e);
                  return U2((t, c) => {
                    const s = e.length,
                      r = new Array(s);
                    let o = e.map(() => !1),
                      i = !1;
                    for (let a = 0; a < s; a++)
                      Le(e[a]).subscribe(
                        k2(
                          c,
                          l => {
                            (r[a] = l),
                              !i &&
                                !o[a] &&
                                ((o[a] = !0), (i = o.every(Ye)) && (o = null));
                          },
                          Pc,
                        ),
                      );
                    t.subscribe(
                      k2(c, a => {
                        if (i) {
                          const l = [a, ...r];
                          c.next(n ? n(...l) : l);
                        }
                      }),
                    );
                  });
                })(c),
              ),
              l = i.pipe(Gv(cK, { state: r }));
            (this.stateSubscription = l.subscribe(({ state: u, action: f }) => {
              this.next(u), s.next(f);
            })),
              (this.state = N5(this, { manualCleanup: !0, requireSync: !0 }));
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
          static #t = (this.ɵfac = function (c) {
            return new (c || e)(E(He), E(O5), E(F5), E(sn));
          });
          static #n = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function cK(e = { state: void 0 }, [n, t]) {
        const { state: c } = e;
        return { state: t(c, n), action: n };
      }
      const sK = [bL, { provide: P5, useExisting: bL }];
      let rn = (() => {
        class e extends O2 {
          constructor(t, c, s) {
            super(),
              (this.actionsObserver = c),
              (this.reducerManager = s),
              (this.source = t),
              (this.state = t.state);
          }
          select(t, ...c) {
            return oK.call(null, t, ...c)(this);
          }
          selectSignal(t, c) {
            return b3(() => t(this.state()), c);
          }
          lift(t) {
            const c = new e(this, this.actionsObserver, this.reducerManager);
            return (c.operator = t), c;
          }
          dispatch(t) {
            this.actionsObserver.next(t);
          }
          next(t) {
            this.actionsObserver.next(t);
          }
          error(t) {
            this.actionsObserver.error(t);
          }
          complete() {
            this.actionsObserver.complete();
          }
          addReducer(t, c) {
            this.reducerManager.addReducer(t, c);
          }
          removeReducer(t) {
            this.reducerManager.removeReducer(t);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(E(P5), E(He), E(k3));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const rK = [rn];
      function oK(e, n, ...t) {
        return function (s) {
          let r;
          if ('string' == typeof e) {
            const o = [n, ...t].filter(Boolean);
            r = s.pipe(
              (function jQ(...e) {
                const n = e.length;
                if (0 === n) throw new Error('list of properties cannot be empty.');
                return s2(t => {
                  let c = t;
                  for (let s = 0; s < n; s++) {
                    const r = c?.[e[s]];
                    if (!(typeof r < 'u')) return;
                    c = r;
                  }
                  return c;
                });
              })(e, ...o),
            );
          } else {
            if ('function' != typeof e)
              throw new TypeError(
                `Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`,
              );
            r = s.pipe(s2(o => e(o, n)));
          }
          return r.pipe(
            (function UQ(e, n = Ye) {
              return (
                (e = e ?? HQ),
                U2((t, c) => {
                  let s,
                    r = !0;
                  t.subscribe(
                    k2(c, o => {
                      const i = n(o);
                      (r || !e(s, i)) && ((r = !1), (s = i), c.next(o));
                    }),
                  );
                })
              );
            })(),
          );
        };
      }
      const V5 = 'https://ngrx.io/guide/store/configuration/runtime-checks';
      function wL(e) {
        return void 0 === e;
      }
      function DL(e) {
        return null === e;
      }
      function EL(e) {
        return Array.isArray(e);
      }
      function NL(e) {
        return 'object' == typeof e && null !== e;
      }
      function B5(e) {
        return 'function' == typeof e;
      }
      let SL = !1;
      function j5(e, n) {
        return e === n;
      }
      function U5(e, n = j5, t = j5) {
        let r,
          c = null,
          s = null;
        return {
          memoized: function l() {
            if (void 0 !== r) return r.result;
            if (!c) return (s = e.apply(null, arguments)), (c = arguments), s;
            if (
              !(function mK(e, n, t) {
                for (let c = 0; c < e.length; c++) if (!t(e[c], n[c])) return !0;
                return !1;
              })(arguments, c, n)
            )
              return s;
            const u = e.apply(null, arguments);
            return (c = arguments), t(s, u) ? s : ((s = u), u);
          },
          reset: function o() {
            (c = null), (s = null);
          },
          setResult: function i(u = void 0) {
            r = { result: u };
          },
          clearResult: function a() {
            r = void 0;
          },
        };
      }
      function gK(e, n, t, c) {
        if (void 0 === t) {
          const r = n.map(o => o(e));
          return c.memoized.apply(null, r);
        }
        const s = n.map(r => r(e, t));
        return c.memoized.apply(null, [...s, t]);
      }
      function _K(e) {
        return e instanceof _ ? y(e) : e;
      }
      function IL(e) {
        return 'function' == typeof e ? e() : e;
      }
      function DK(e, n) {
        return e.concat(n);
      }
      function EK() {
        if (y(rn, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function $5(e) {
        Object.freeze(e);
        const n = B5(e);
        return (
          Object.getOwnPropertyNames(e).forEach(t => {
            if (
              !t.startsWith('\u0275') &&
              (function dK(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n);
              })(e, t) &&
              (!n || ('caller' !== t && 'callee' !== t && 'arguments' !== t))
            ) {
              const c = e[t];
              (NL(c) || B5(c)) && !Object.isFrozen(c) && $5(c);
            }
          }),
          e
        );
      }
      function G5(e, n = []) {
        return (wL(e) || DL(e)) && 0 === n.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((c, s) => {
              if (c) return c;
              const r = e[s];
              return (function fK(e) {
                return B5(e) && e.hasOwnProperty('\u0275cmp');
              })(r)
                ? c
                : !(
                    wL(r) ||
                    DL(r) ||
                    (function lK(e) {
                      return 'number' == typeof e;
                    })(r) ||
                    (function aK(e) {
                      return 'boolean' == typeof e;
                    })(r) ||
                    (function iK(e) {
                      return 'string' == typeof e;
                    })(r) ||
                    EL(r)
                  ) &&
                    ((function xL(e) {
                      if (
                        !(function uK(e) {
                          return NL(e) && !EL(e);
                        })(e)
                      )
                        return !1;
                      const n = Object.getPrototypeOf(e);
                      return n === Object.prototype || null === n;
                    })(r)
                      ? G5(r, [...n, s])
                      : { path: [...n, s], value: r });
            }, !1);
      }
      function AL(e, n) {
        if (!1 === e) return;
        const t = e.path.join('.'),
          c = new Error(
            `Detected unserializable ${n} at "${t}". ${V5}#strict${n}serializability`,
          );
        throw ((c.value = e.value), (c.unserializablePath = t), c);
      }
      function IK(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function AK({ strictActionSerializability: e, strictStateSerializability: n }) {
        return t =>
          e || n
            ? (function xK(e, n) {
                return function (t, c) {
                  n.action(c) && AL(G5(c), 'action');
                  const s = e(t, c);
                  return n.state() && AL(G5(s), 'state'), s;
                };
              })(t, { action: c => e && !q5(c), state: () => n })
            : t;
      }
      function TK({ strictActionImmutability: e, strictStateImmutability: n }) {
        return t =>
          e || n
            ? (function NK(e, n) {
                return function (t, c) {
                  const s = n.action(c) ? $5(c) : c,
                    r = e(t, s);
                  return n.state() ? $5(r) : r;
                };
              })(t, { action: c => e && !q5(c), state: () => n })
            : t;
      }
      function q5(e) {
        return e.type.startsWith('@ngrx');
      }
      function kK({ strictActionWithinNgZone: e }) {
        return n =>
          e
            ? (function SK(e, n) {
                return function (t, c) {
                  if (n.action(c) && !l2.isInAngularZone())
                    throw new Error(
                      `Action '${c.type}' running outside NgZone. ${V5}#strictactionwithinngzone`,
                    );
                  return e(t, c);
                };
              })(n, { action: t => e && !q5(t) })
            : n;
      }
      function RK(e) {
        return [
          { provide: vL, useValue: e },
          { provide: ML, useFactory: OK, deps: [vL] },
          { provide: lc, deps: [ML], useFactory: IK },
          { provide: Ir, multi: !0, deps: [lc], useFactory: TK },
          { provide: Ir, multi: !0, deps: [lc], useFactory: AK },
          { provide: Ir, multi: !0, deps: [lc], useFactory: kK },
        ];
      }
      function OK(e) {
        return e;
      }
      function FK(e) {
        if (!e.strictActionTypeUniqueness) return;
        const n = Object.entries(ac)
          .filter(([, t]) => t > 1)
          .map(([t]) => t);
        if (n.length)
          throw new Error(
            `Action types are registered more than once, ${n
              .map(t => `"${t}"`)
              .join(', ')}. ${V5}#strictactiontypeuniqueness`,
          );
      }
      function PK(e = {}, n = {}) {
        return [
          { provide: rL, useFactory: EK },
          { provide: oL, useValue: n.initialState },
          { provide: sn, useFactory: IL, deps: [oL] },
          { provide: I5, useValue: e },
          { provide: fL, useExisting: e instanceof _ ? e : I5 },
          { provide: lL, deps: [I5, [new Pu(fL)]], useFactory: _K },
          { provide: gL, useValue: n.metaReducers ? n.metaReducers : [] },
          { provide: CL, deps: [Ir, gL], useFactory: DK },
          { provide: aL, useValue: n.reducerFactory ? n.reducerFactory : R5 },
          { provide: iL, deps: [aL, CL], useFactory: zL },
          KQ,
          tK,
          nK,
          sK,
          rK,
          RK(n.runtimeChecks),
          [{ provide: T5, multi: !0, deps: [lc], useFactory: FK }],
        ];
      }
      const BK = [
        {
          provide: k5,
          useFactory: function VK() {
            y(He), y(O5), y(F5), y(rn), y(rL, { optional: !0 }), y(T5, { optional: !0 });
          },
        },
        { provide: F1, multi: !0, useFactory: () => () => y(k5) },
      ];
      let WK = (() => {
          class e {
            buildBem(t = '', c = '', s = '') {
              return `${this.buildBemBlock(t)}${this.buildBemElement(
                c,
              )}${this.buildBemModifier(s)}`;
            }
            buildBemBlock(t, c = !1) {
              if ('' === t) throw new Error('The block must not be empty in BEM!');
              return c ? `.${t}` : t;
            }
            buildBemElement(t) {
              return '' === t ? '' : `__${t}`;
            }
            buildBemModifier(t) {
              return '' === t ? '' : `--${t}`;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        W5 = (() => {
          class e {
            constructor(t) {
              (this.injector = t),
                (this.classNames = []),
                (this.bem = this.injector.get(WK));
            }
            static buildImports() {
              return [at];
            }
            ngOnInit() {
              this.afterInit();
            }
            ngOnDestroy() {
              this.afterDestroy();
            }
            afterInit() {}
            afterDestroy() {}
            addClassName(t = '', c = '', s = '') {
              const r = this.bem.buildBem(t, c, s);
              this.classNames.push(r);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(D2));
            });
            static #t = (this.ɵdir = O({ type: e }));
          }
          return e;
        })(),
        YK = (() => {
          class e extends W5 {
            constructor(t) {
              super(t), (this.injector = t), (this.event = new X());
            }
            emit(t) {
              this.beforeEmit(), this.event.emit(t), this.afterEmit();
            }
            beforeEmit() {}
            afterEmit() {}
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(D2));
            });
            static #t = (this.ɵdir = O({
              type: e,
              outputs: { event: 'event' },
              features: [t2],
            }));
          }
          return e;
        })(),
        Ar = (() => {
          class e extends YK {
            constructor(t, c) {
              super(t),
                (this.injector = t),
                (this.select = c),
                (this.store = this.injector.get(rn));
            }
            afterInit() {
              this.sub = this.store
                .select(this.select)
                .subscribe(t => this.onStoreChange(t));
            }
            onStoreChange(t) {}
            afterDestroy() {
              this.sub && this.sub.unsubscribe();
            }
            static #e = (this.ɵfac = function (c) {
              k8();
            });
            static #t = (this.ɵdir = O({ type: e, features: [t2] }));
          }
          return e;
        })(),
        ZK = (() => {
          class e {
            convertMapToArray(t) {
              return Array.from(t).map(c => c[1]);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const RL = () => {};
      let Y5 = {},
        OL = {},
        FL = null,
        PL = { mark: RL, measure: RL };
      try {
        typeof window < 'u' && (Y5 = window),
          typeof document < 'u' && (OL = document),
          typeof MutationObserver < 'u' && (FL = MutationObserver),
          typeof performance < 'u' && (PL = performance);
      } catch {}
      const { userAgent: VL = '' } = Y5.navigator || {},
        Ft = Y5,
        E2 = OL,
        BL = FL,
        Tr = PL,
        dt =
          !!E2.documentElement &&
          !!E2.head &&
          'function' == typeof E2.addEventListener &&
          'function' == typeof E2.createElement,
        jL = ~VL.indexOf('MSIE') || ~VL.indexOf('Trident/');
      var T2 = 'classic',
        UL = 'duotone',
        Y1 = 'sharp',
        Z1 = 'sharp-duotone',
        KK = [T2, UL, Y1, Z1],
        $L = {
          classic: {
            fa: 'solid',
            fas: 'solid',
            'fa-solid': 'solid',
            far: 'regular',
            'fa-regular': 'regular',
            fal: 'light',
            'fa-light': 'light',
            fat: 'thin',
            'fa-thin': 'thin',
            fad: 'duotone',
            'fa-duotone': 'duotone',
            fab: 'brands',
            'fa-brands': 'brands',
          },
          sharp: {
            fa: 'solid',
            fass: 'solid',
            'fa-solid': 'solid',
            fasr: 'regular',
            'fa-regular': 'regular',
            fasl: 'light',
            'fa-light': 'light',
            fast: 'thin',
            'fa-thin': 'thin',
          },
          'sharp-duotone': { fa: 'solid', fasds: 'solid', 'fa-solid': 'solid' },
        },
        GL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        lX = GL.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        uc = {
          GROUP: 'duotone-group',
          SWAP_OPACITY: 'swap-opacity',
          PRIMARY: 'primary',
          SECONDARY: 'secondary',
        },
        uX = [
          ...Object.keys({
            classic: ['fas', 'far', 'fal', 'fat'],
            sharp: ['fass', 'fasr', 'fasl', 'fast'],
            'sharp-duotone': ['fasds'],
          }),
          'solid',
          'regular',
          'light',
          'thin',
          'duotone',
          'brands',
          '2xs',
          'xs',
          'sm',
          'lg',
          'xl',
          '2xl',
          'beat',
          'border',
          'fade',
          'beat-fade',
          'bounce',
          'flip-both',
          'flip-horizontal',
          'flip-vertical',
          'flip',
          'fw',
          'inverse',
          'layers-counter',
          'layers-text',
          'layers',
          'li',
          'pull-left',
          'pull-right',
          'pulse',
          'rotate-180',
          'rotate-270',
          'rotate-90',
          'rotate-by',
          'shake',
          'spin-pulse',
          'spin-reverse',
          'spin',
          'stack-1x',
          'stack-2x',
          'stack',
          'ul',
          uc.GROUP,
          uc.SWAP_OPACITY,
          uc.PRIMARY,
          uc.SECONDARY,
        ]
          .concat(GL.map(e => ''.concat(e, 'x')))
          .concat(lX.map(e => 'w-'.concat(e)));
      const ht = '___FONT_AWESOME___',
        Z5 = 16,
        WL = 'fa',
        YL = 'svg-inline--fa',
        R3 = 'data-fa-i2svg',
        Q5 = 'data-fa-pseudo-element',
        pX = 'data-fa-pseudo-element-pending',
        K5 = 'data-prefix',
        X5 = 'data-icon',
        ZL = 'fontawesome-i2svg',
        mX = 'async',
        gX = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
        QL = (() => {
          try {
            return !0;
          } catch {
            return !1;
          }
        })(),
        KL = [T2, Y1, Z1];
      function fc(e) {
        return new Proxy(e, { get: (n, t) => (t in n ? n[t] : n[T2]) });
      }
      const XL = { ...$L };
      XL[T2] = {
        ...$L[T2],
        fak: 'kit',
        'fa-kit': 'kit',
        fakd: 'kit-duotone',
        'fa-kit-duotone': 'kit-duotone',
      };
      const O3 = fc(XL),
        J5 = {
          classic: {
            solid: 'fas',
            regular: 'far',
            light: 'fal',
            thin: 'fat',
            duotone: 'fad',
            brands: 'fab',
          },
          sharp: { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' },
          'sharp-duotone': { solid: 'fasds' },
        };
      J5[T2] = { ...J5[T2], kit: 'fak', 'kit-duotone': 'fakd' };
      const dc = fc(J5),
        e7 = {
          classic: {
            fab: 'fa-brands',
            fad: 'fa-duotone',
            fal: 'fa-light',
            far: 'fa-regular',
            fas: 'fa-solid',
            fat: 'fa-thin',
          },
          sharp: {
            fass: 'fa-solid',
            fasr: 'fa-regular',
            fasl: 'fa-light',
            fast: 'fa-thin',
          },
          'sharp-duotone': { fasds: 'fa-solid' },
        };
      e7[T2] = { ...e7[T2], fak: 'fa-kit' };
      const F3 = fc(e7),
        t7 = {
          classic: {
            'fa-brands': 'fab',
            'fa-duotone': 'fad',
            'fa-light': 'fal',
            'fa-regular': 'far',
            'fa-solid': 'fas',
            'fa-thin': 'fat',
          },
          sharp: {
            'fa-solid': 'fass',
            'fa-regular': 'fasr',
            'fa-light': 'fasl',
            'fa-thin': 'fast',
          },
          'sharp-duotone': { 'fa-solid': 'fasds' },
        };
      t7[T2] = { ...t7[T2], 'fa-kit': 'fak' };
      const CX = fc(t7),
        MX = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
        JL = 'fa-layers-text',
        vX =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
        LX =
          (fc({
            classic: { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
            sharp: { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' },
            'sharp-duotone': { 900: 'fasds' },
          }),
          ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask']),
        n7 = uc,
        on = new Set();
      Object.keys(dc[T2]).map(on.add.bind(on)),
        Object.keys(dc[Y1]).map(on.add.bind(on)),
        Object.keys(dc[Z1]).map(on.add.bind(on));
      const zX = ['kit', ...uX],
        hc = Ft.FontAwesomeConfig || {};
      E2 &&
        'function' == typeof E2.querySelector &&
        [
          ['data-family-prefix', 'familyPrefix'],
          ['data-css-prefix', 'cssPrefix'],
          ['data-family-default', 'familyDefault'],
          ['data-style-default', 'styleDefault'],
          ['data-replacement-class', 'replacementClass'],
          ['data-auto-replace-svg', 'autoReplaceSvg'],
          ['data-auto-add-css', 'autoAddCss'],
          ['data-auto-a11y', 'autoA11y'],
          ['data-search-pseudo-elements', 'searchPseudoElements'],
          ['data-observe-mutations', 'observeMutations'],
          ['data-mutate-approach', 'mutateApproach'],
          ['data-keep-original-source', 'keepOriginalSource'],
          ['data-measure-performance', 'measurePerformance'],
          ['data-show-missing-icons', 'showMissingIcons'],
        ].forEach(n => {
          let [t, c] = n;
          const s = (function bX(e) {
            return '' === e || ('false' !== e && ('true' === e || e));
          })(
            (function _X(e) {
              var n = E2.querySelector('script[' + e + ']');
              if (n) return n.getAttribute(e);
            })(t),
          );
          null != s && (hc[c] = s);
        });
      const ez = {
        styleDefault: 'solid',
        familyDefault: 'classic',
        cssPrefix: WL,
        replacementClass: YL,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: 'async',
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      hc.familyPrefix && (hc.cssPrefix = hc.familyPrefix);
      const an = { ...ez, ...hc };
      an.autoReplaceSvg || (an.observeMutations = !1);
      const x = {};
      Object.keys(ez).forEach(e => {
        Object.defineProperty(x, e, {
          enumerable: !0,
          set: function (n) {
            (an[e] = n), pc.forEach(t => t(x));
          },
          get: function () {
            return an[e];
          },
        });
      }),
        Object.defineProperty(x, 'familyPrefix', {
          enumerable: !0,
          set: function (e) {
            (an.cssPrefix = e), pc.forEach(n => n(x));
          },
          get: function () {
            return an.cssPrefix;
          },
        }),
        (Ft.FontAwesomeConfig = x);
      const pc = [],
        Pt = Z5,
        $e = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 },
        EX = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      function mc() {
        let e = 12,
          n = '';
        for (; e-- > 0; ) n += EX[(62 * Math.random()) | 0];
        return n;
      }
      function ln(e) {
        const n = [];
        for (let t = (e || []).length >>> 0; t--; ) n[t] = e[t];
        return n;
      }
      function c7(e) {
        return e.classList
          ? ln(e.classList)
          : (e.getAttribute('class') || '').split(' ').filter(n => n);
      }
      function tz(e) {
        return ''
          .concat(e)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function kr(e) {
        return Object.keys(e || {}).reduce(
          (n, t) => n + ''.concat(t, ': ').concat(e[t].trim(), ';'),
          '',
        );
      }
      function s7(e) {
        return (
          e.size !== $e.size ||
          e.x !== $e.x ||
          e.y !== $e.y ||
          e.rotate !== $e.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      var IX =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
      function nz() {
        const e = WL,
          n = YL,
          t = x.cssPrefix,
          c = x.replacementClass;
        let s = IX;
        if (t !== e || c !== n) {
          const r = new RegExp('\\.'.concat(e, '\\-'), 'g'),
            o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
            i = new RegExp('\\.'.concat(n), 'g');
          s = s
            .replace(r, '.'.concat(t, '-'))
            .replace(o, '--'.concat(t, '-'))
            .replace(i, '.'.concat(c));
        }
        return s;
      }
      let cz = !1;
      function r7() {
        x.autoAddCss &&
          !cz &&
          ((function DX(e) {
            if (!e || !dt) return;
            const n = E2.createElement('style');
            n.setAttribute('type', 'text/css'), (n.innerHTML = e);
            const t = E2.head.childNodes;
            let c = null;
            for (let s = t.length - 1; s > -1; s--) {
              const r = t[s],
                o = (r.tagName || '').toUpperCase();
              ['STYLE', 'LINK'].indexOf(o) > -1 && (c = r);
            }
            E2.head.insertBefore(n, c);
          })(nz()),
          (cz = !0));
      }
      var AX = {
        mixout: () => ({ dom: { css: nz, insertCss: r7 } }),
        hooks: () => ({
          beforeDOMElementCreation() {
            r7();
          },
          beforeI2svg() {
            r7();
          },
        }),
      };
      const pt = Ft || {};
      pt[ht] || (pt[ht] = {}),
        pt[ht].styles || (pt[ht].styles = {}),
        pt[ht].hooks || (pt[ht].hooks = {}),
        pt[ht].shims || (pt[ht].shims = []);
      var Ge = pt[ht];
      const sz = [],
        rz = function () {
          E2.removeEventListener('DOMContentLoaded', rz), (Rr = 1), sz.map(e => e());
        };
      let Rr = !1;
      function gc(e) {
        const { tag: n, attributes: t = {}, children: c = [] } = e;
        return 'string' == typeof e
          ? tz(e)
          : '<'
              .concat(n, ' ')
              .concat(
                (function NX(e) {
                  return Object.keys(e || {})
                    .reduce((n, t) => n + ''.concat(t, '="').concat(tz(e[t]), '" '), '')
                    .trim();
                })(t),
                '>',
              )
              .concat(c.map(gc).join(''), '</')
              .concat(n, '>');
      }
      function oz(e, n, t) {
        if (e && e[n] && e[n][t]) return { prefix: n, iconName: t, icon: e[n][t] };
      }
      dt &&
        ((Rr = (E2.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          E2.readyState,
        )),
        Rr || E2.addEventListener('DOMContentLoaded', rz));
      var o7 = function (n, t, c, s) {
        var a,
          l,
          u,
          r = Object.keys(n),
          o = r.length,
          i =
            void 0 !== s
              ? (function (n, t) {
                  return function (c, s, r, o) {
                    return n.call(t, c, s, r, o);
                  };
                })(t, s)
              : t;
        for (void 0 === c ? ((a = 1), (u = n[r[0]])) : ((a = 0), (u = c)); a < o; a++)
          u = i(u, n[(l = r[a])], l, n);
        return u;
      };
      function i7(e) {
        const n = (function RX(e) {
          const n = [];
          let t = 0;
          const c = e.length;
          for (; t < c; ) {
            const s = e.charCodeAt(t++);
            if (s >= 55296 && s <= 56319 && t < c) {
              const r = e.charCodeAt(t++);
              56320 == (64512 & r)
                ? n.push(((1023 & s) << 10) + (1023 & r) + 65536)
                : (n.push(s), t--);
            } else n.push(s);
          }
          return n;
        })(e);
        return 1 === n.length ? n[0].toString(16) : null;
      }
      function iz(e) {
        return Object.keys(e).reduce((n, t) => {
          const c = e[t];
          return c.icon ? (n[c.iconName] = c.icon) : (n[t] = c), n;
        }, {});
      }
      function a7(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { skipHooks: c = !1 } = t,
          s = iz(n);
        'function' != typeof Ge.hooks.addPack || c
          ? (Ge.styles[e] = { ...(Ge.styles[e] || {}), ...s })
          : Ge.hooks.addPack(e, iz(n)),
          'fas' === e && a7('fa', n);
      }
      const { styles: P3, shims: FX } = Ge,
        PX = {
          [T2]: Object.values(F3[T2]),
          [Y1]: Object.values(F3[Y1]),
          [Z1]: Object.values(F3[Z1]),
        };
      let l7 = null,
        az = {},
        lz = {},
        uz = {},
        fz = {},
        dz = {};
      const VX = {
        [T2]: Object.keys(O3[T2]),
        [Y1]: Object.keys(O3[Y1]),
        [Z1]: Object.keys(O3[Z1]),
      };
      const hz = () => {
        const e = c => o7(P3, (s, r, o) => ((s[o] = o7(r, c, {})), s), {});
        (az = e(
          (c, s, r) => (
            s[3] && (c[s[3]] = r),
            s[2] &&
              s[2]
                .filter(i => 'number' == typeof i)
                .forEach(i => {
                  c[i.toString(16)] = r;
                }),
            c
          ),
        )),
          (lz = e(
            (c, s, r) => (
              (c[r] = r),
              s[2] &&
                s[2]
                  .filter(i => 'string' == typeof i)
                  .forEach(i => {
                    c[i] = r;
                  }),
              c
            ),
          )),
          (dz = e((c, s, r) => {
            const o = s[2];
            return (
              (c[r] = r),
              o.forEach(i => {
                c[i] = r;
              }),
              c
            );
          }));
        const n = 'far' in P3 || x.autoFetchSvg,
          t = o7(
            FX,
            (c, s) => {
              const r = s[0];
              let o = s[1];
              const i = s[2];
              return (
                'far' === o && !n && (o = 'fas'),
                'string' == typeof r && (c.names[r] = { prefix: o, iconName: i }),
                'number' == typeof r &&
                  (c.unicodes[r.toString(16)] = { prefix: o, iconName: i }),
                c
              );
            },
            { names: {}, unicodes: {} },
          );
        (uz = t.names),
          (fz = t.unicodes),
          (l7 = Or(x.styleDefault, { family: x.familyDefault }));
      };
      function u7(e, n) {
        return (az[e] || {})[n];
      }
      function Vt(e, n) {
        return (dz[e] || {})[n];
      }
      function pz(e) {
        return uz[e] || { prefix: null, iconName: null };
      }
      function Bt() {
        return l7;
      }
      (function wX(e) {
        pc.push(e);
      })(e => {
        l7 = Or(e.styleDefault, { family: x.familyDefault });
      }),
        hz();
      const f7 = () => ({ prefix: null, iconName: null, rest: [] });
      function Or(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { family: t = T2 } = n;
        return dc[t][e] || dc[t][O3[t][e]] || (e in Ge.styles ? e : null) || null;
      }
      const $X = {
        [T2]: Object.keys(F3[T2]),
        [Y1]: Object.keys(F3[Y1]),
        [Z1]: Object.keys(F3[Z1]),
      };
      function Fr(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { skipLookups: t = !1 } = n,
          c = {
            [T2]: ''.concat(x.cssPrefix, '-').concat(T2),
            [Y1]: ''.concat(x.cssPrefix, '-').concat(Y1),
            [Z1]: ''.concat(x.cssPrefix, '-').concat(Z1),
          };
        let s = null,
          r = T2;
        const o = KK.filter(a => a !== UL);
        o.forEach(a => {
          (e.includes(c[a]) || e.some(l => $X[a].includes(l))) && (r = a);
        });
        const i = e.reduce((a, l) => {
          const u = (function jX(e, n) {
            const t = n.split('-'),
              c = t[0],
              s = t.slice(1).join('-');
            return c !== e ||
              '' === s ||
              (function BX(e) {
                return ~zX.indexOf(e);
              })(s)
              ? null
              : s;
          })(x.cssPrefix, l);
          if (
            (P3[l]
              ? ((l = PX[r].includes(l) ? CX[r][l] : l), (s = l), (a.prefix = l))
              : VX[r].indexOf(l) > -1
              ? ((s = l), (a.prefix = Or(l, { family: r })))
              : u
              ? (a.iconName = u)
              : l !== x.replacementClass && !o.some(f => l === c[f]) && a.rest.push(l),
            !t && a.prefix && a.iconName)
          ) {
            const f = 'fa' === s ? pz(a.iconName) : {},
              d = Vt(a.prefix, a.iconName);
            f.prefix && (s = null),
              (a.iconName = f.iconName || d || a.iconName),
              (a.prefix = f.prefix || a.prefix),
              'far' === a.prefix &&
                !P3.far &&
                P3.fas &&
                !x.autoFetchSvg &&
                (a.prefix = 'fas');
          }
          return a;
        }, f7());
        return (
          (e.includes('fa-brands') || e.includes('fab')) && (i.prefix = 'fab'),
          (e.includes('fa-duotone') || e.includes('fad')) && (i.prefix = 'fad'),
          !i.prefix &&
            r === Y1 &&
            (P3.fass || x.autoFetchSvg) &&
            ((i.prefix = 'fass'), (i.iconName = Vt(i.prefix, i.iconName) || i.iconName)),
          !i.prefix &&
            r === Z1 &&
            (P3.fasds || x.autoFetchSvg) &&
            ((i.prefix = 'fasds'), (i.iconName = Vt(i.prefix, i.iconName) || i.iconName)),
          ('fa' === i.prefix || 'fa' === s) && (i.prefix = Bt() || 'fas'),
          i
        );
      }
      let mz = [],
        un = {};
      const fn = {},
        qX = Object.keys(fn);
      function d7(e, n) {
        for (
          var t = arguments.length, c = new Array(t > 2 ? t - 2 : 0), s = 2;
          s < t;
          s++
        )
          c[s - 2] = arguments[s];
        return (
          (un[e] || []).forEach(o => {
            n = o.apply(null, [n, ...c]);
          }),
          n
        );
      }
      function V3(e) {
        for (
          var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), c = 1;
          c < n;
          c++
        )
          t[c - 1] = arguments[c];
        (un[e] || []).forEach(r => {
          r.apply(null, t);
        });
      }
      function jt() {
        const e = arguments[0],
          n = Array.prototype.slice.call(arguments, 1);
        return fn[e] ? fn[e].apply(null, n) : void 0;
      }
      function h7(e) {
        'fa' === e.prefix && (e.prefix = 'fas');
        let { iconName: n } = e;
        const t = e.prefix || Bt();
        if (n)
          return (n = Vt(t, n) || n), oz(gz.definitions, t, n) || oz(Ge.styles, t, n);
      }
      const gz = new (class GX {
          constructor() {
            this.definitions = {};
          }
          add() {
            for (var n = arguments.length, t = new Array(n), c = 0; c < n; c++)
              t[c] = arguments[c];
            const s = t.reduce(this._pullDefinitions, {});
            Object.keys(s).forEach(r => {
              (this.definitions[r] = { ...(this.definitions[r] || {}), ...s[r] }),
                a7(r, s[r]);
              const o = F3[T2][r];
              o && a7(o, s[r]), hz();
            });
          }
          reset() {
            this.definitions = {};
          }
          _pullDefinitions(n, t) {
            const c = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(c).map(s => {
                const { prefix: r, iconName: o, icon: i } = c[s],
                  a = i[2];
                n[r] || (n[r] = {}),
                  a.length > 0 &&
                    a.forEach(l => {
                      'string' == typeof l && (n[r][l] = i);
                    }),
                  (n[r][o] = i);
              }),
              n
            );
          }
        })(),
        Q1 = {
          noAuto: () => {
            (x.autoReplaceSvg = !1), (x.observeMutations = !1), V3('noAuto');
          },
          config: x,
          dom: {
            i2svg: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return dt
                ? (V3('beforeI2svg', e), jt('pseudoElements2svg', e), jt('i2svg', e))
                : Promise.reject(new Error('Operation requires a DOM of some kind.'));
            },
            watch: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const { autoReplaceSvgRoot: n } = e;
              !1 === x.autoReplaceSvg && (x.autoReplaceSvg = !0),
                (x.observeMutations = !0),
                (function TX(e) {
                  dt && (Rr ? setTimeout(e, 0) : sz.push(e));
                })(() => {
                  YX({ autoReplaceSvgRoot: n }), V3('watch', e);
                });
            },
          },
          parse: {
            icon: e => {
              if (null === e) return null;
              if ('object' == typeof e && e.prefix && e.iconName)
                return {
                  prefix: e.prefix,
                  iconName: Vt(e.prefix, e.iconName) || e.iconName,
                };
              if (Array.isArray(e) && 2 === e.length) {
                const n = 0 === e[1].indexOf('fa-') ? e[1].slice(3) : e[1],
                  t = Or(e[0]);
                return { prefix: t, iconName: Vt(t, n) || n };
              }
              if (
                'string' == typeof e &&
                (e.indexOf(''.concat(x.cssPrefix, '-')) > -1 || e.match(MX))
              ) {
                const n = Fr(e.split(' '), { skipLookups: !0 });
                return {
                  prefix: n.prefix || Bt(),
                  iconName: Vt(n.prefix, n.iconName) || n.iconName,
                };
              }
              if ('string' == typeof e) {
                const n = Bt();
                return { prefix: n, iconName: Vt(n, e) || e };
              }
            },
          },
          library: gz,
          findIconDefinition: h7,
          toHtml: gc,
        },
        YX = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { autoReplaceSvgRoot: n = E2 } = e;
          (Object.keys(Ge.styles).length > 0 || x.autoFetchSvg) &&
            dt &&
            x.autoReplaceSvg &&
            Q1.dom.i2svg({ node: n });
        };
      function Pr(e, n) {
        return (
          Object.defineProperty(e, 'abstract', { get: n }),
          Object.defineProperty(e, 'html', {
            get: function () {
              return e.abstract.map(t => gc(t));
            },
          }),
          Object.defineProperty(e, 'node', {
            get: function () {
              if (!dt) return;
              const t = E2.createElement('div');
              return (t.innerHTML = e.html), t.children;
            },
          }),
          e
        );
      }
      function p7(e) {
        const {
            icons: { main: n, mask: t },
            prefix: c,
            iconName: s,
            transform: r,
            symbol: o,
            title: i,
            maskId: a,
            titleId: l,
            extra: u,
            watchable: f = !1,
          } = e,
          { width: d, height: h } = t.found ? t : n,
          p = 'fak' === c,
          m = [x.replacementClass, s ? ''.concat(x.cssPrefix, '-').concat(s) : '']
            .filter(G => -1 === u.classes.indexOf(G))
            .filter(G => '' !== G || !!G)
            .concat(u.classes)
            .join(' ');
        let C = {
          children: [],
          attributes: {
            ...u.attributes,
            'data-prefix': c,
            'data-icon': s,
            class: m,
            role: u.attributes.role || 'img',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 '.concat(d, ' ').concat(h),
          },
        };
        const v =
          p && !~u.classes.indexOf('fa-fw')
            ? { width: ''.concat((d / h) * 16 * 0.0625, 'em') }
            : {};
        f && (C.attributes[R3] = ''),
          i &&
            (C.children.push({
              tag: 'title',
              attributes: {
                id: C.attributes['aria-labelledby'] || 'title-'.concat(l || mc()),
              },
              children: [i],
            }),
            delete C.attributes.title);
        const g = {
            ...C,
            prefix: c,
            iconName: s,
            main: n,
            mask: t,
            maskId: a,
            transform: r,
            symbol: o,
            styles: { ...v, ...u.styles },
          },
          { children: D, attributes: k } =
            t.found && n.found
              ? jt('generateAbstractMask', g) || { children: [], attributes: {} }
              : jt('generateAbstractIcon', g) || { children: [], attributes: {} };
        return (
          (g.children = D),
          (g.attributes = k),
          o
            ? (function QX(e) {
                let { prefix: n, iconName: t, children: c, attributes: s, symbol: r } = e;
                return [
                  {
                    tag: 'svg',
                    attributes: { style: 'display: none;' },
                    children: [
                      {
                        tag: 'symbol',
                        attributes: {
                          ...s,
                          id:
                            !0 === r
                              ? ''.concat(n, '-').concat(x.cssPrefix, '-').concat(t)
                              : r,
                        },
                        children: c,
                      },
                    ],
                  },
                ];
              })(g)
            : (function ZX(e) {
                let {
                  children: n,
                  main: t,
                  mask: c,
                  attributes: s,
                  styles: r,
                  transform: o,
                } = e;
                if (s7(o) && t.found && !c.found) {
                  const { width: i, height: a } = t,
                    l = { x: i / a / 2, y: 0.5 };
                  s.style = kr({
                    ...r,
                    'transform-origin': ''
                      .concat(l.x + o.x / 16, 'em ')
                      .concat(l.y + o.y / 16, 'em'),
                  });
                }
                return [{ tag: 'svg', attributes: s, children: n }];
              })(g)
        );
      }
      function Cz(e) {
        const {
            content: n,
            width: t,
            height: c,
            transform: s,
            title: r,
            extra: o,
            watchable: i = !1,
          } = e,
          a = { ...o.attributes, ...(r ? { title: r } : {}), class: o.classes.join(' ') };
        i && (a[R3] = '');
        const l = { ...o.styles };
        s7(s) &&
          ((l.transform = (function SX(e) {
            let {
                transform: n,
                width: t = Z5,
                height: c = Z5,
                startCentered: s = !1,
              } = e,
              r = '';
            return (
              (r +=
                s && jL
                  ? 'translate('
                      .concat(n.x / Pt - t / 2, 'em, ')
                      .concat(n.y / Pt - c / 2, 'em) ')
                  : s
                  ? 'translate(calc(-50% + '
                      .concat(n.x / Pt, 'em), calc(-50% + ')
                      .concat(n.y / Pt, 'em)) ')
                  : 'translate('.concat(n.x / Pt, 'em, ').concat(n.y / Pt, 'em) ')),
              (r += 'scale('
                .concat((n.size / Pt) * (n.flipX ? -1 : 1), ', ')
                .concat((n.size / Pt) * (n.flipY ? -1 : 1), ') ')),
              (r += 'rotate('.concat(n.rotate, 'deg) ')),
              r
            );
          })({ transform: s, startCentered: !0, width: t, height: c })),
          (l['-webkit-transform'] = l.transform));
        const u = kr(l);
        u.length > 0 && (a.style = u);
        const f = [];
        return (
          f.push({ tag: 'span', attributes: a, children: [n] }),
          r && f.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [r] }),
          f
        );
      }
      const { styles: m7 } = Ge;
      function g7(e) {
        const n = e[0],
          t = e[1],
          [c] = e.slice(4);
        let s = null;
        return (
          (s = Array.isArray(c)
            ? {
                tag: 'g',
                attributes: { class: ''.concat(x.cssPrefix, '-').concat(n7.GROUP) },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(x.cssPrefix, '-').concat(n7.SECONDARY),
                      fill: 'currentColor',
                      d: c[0],
                    },
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(x.cssPrefix, '-').concat(n7.PRIMARY),
                      fill: 'currentColor',
                      d: c[1],
                    },
                  },
                ],
              }
            : { tag: 'path', attributes: { fill: 'currentColor', d: c } }),
          { found: !0, width: n, height: t, icon: s }
        );
      }
      const XX = { found: !1, width: 512, height: 512 };
      function C7(e, n) {
        let t = n;
        return (
          'fa' === n && null !== x.styleDefault && (n = Bt()),
          new Promise((c, s) => {
            if ('fa' === t) {
              const r = pz(e) || {};
              (e = r.iconName || e), (n = r.prefix || n);
            }
            if (e && n && m7[n] && m7[n][e]) return c(g7(m7[n][e]));
            (function JX(e, n) {
              !QL &&
                !x.showMissingIcons &&
                e &&
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(n, '" is missing.'),
                );
            })(e, n),
              c({
                ...XX,
                icon: (x.showMissingIcons && e && jt('missingIconAbstract')) || {},
              });
          })
        );
      }
      const Mz = () => {},
        M7 =
          x.measurePerformance && Tr && Tr.mark && Tr.measure
            ? Tr
            : { mark: Mz, measure: Mz },
        Cc = 'FA "6.6.0"',
        vz = e => {
          M7.mark(''.concat(Cc, ' ').concat(e, ' ends')),
            M7.measure(
              ''.concat(Cc, ' ').concat(e),
              ''.concat(Cc, ' ').concat(e, ' begins'),
              ''.concat(Cc, ' ').concat(e, ' ends'),
            );
        };
      var v7 = {
        begin: e => (M7.mark(''.concat(Cc, ' ').concat(e, ' begins')), () => vz(e)),
        end: vz,
      };
      const Vr = () => {};
      function yz(e) {
        return 'string' == typeof (e.getAttribute ? e.getAttribute(R3) : null);
      }
      function sJ(e) {
        return E2.createElementNS('http://www.w3.org/2000/svg', e);
      }
      function rJ(e) {
        return E2.createElement(e);
      }
      function Lz(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { ceFn: t = 'svg' === e.tag ? sJ : rJ } = n;
        if ('string' == typeof e) return E2.createTextNode(e);
        const c = t(e.tag);
        return (
          Object.keys(e.attributes || []).forEach(function (r) {
            c.setAttribute(r, e.attributes[r]);
          }),
          (e.children || []).forEach(function (r) {
            c.appendChild(Lz(r, { ceFn: t }));
          }),
          c
        );
      }
      const Br = {
        replace: function (e) {
          const n = e[0];
          if (n.parentNode)
            if (
              (e[1].forEach(t => {
                n.parentNode.insertBefore(Lz(t), n);
              }),
              null === n.getAttribute(R3) && x.keepOriginalSource)
            ) {
              let t = E2.createComment(
                (function oJ(e) {
                  let n = ' '.concat(e.outerHTML, ' ');
                  return (n = ''.concat(n, 'Font Awesome fontawesome.com ')), n;
                })(n),
              );
              n.parentNode.replaceChild(t, n);
            } else n.remove();
        },
        nest: function (e) {
          const n = e[0],
            t = e[1];
          if (~c7(n).indexOf(x.replacementClass)) return Br.replace(e);
          const c = new RegExp(''.concat(x.cssPrefix, '-.*'));
          if ((delete t[0].attributes.id, t[0].attributes.class)) {
            const r = t[0].attributes.class
              .split(' ')
              .reduce(
                (o, i) => (
                  i === x.replacementClass || i.match(c)
                    ? o.toSvg.push(i)
                    : o.toNode.push(i),
                  o
                ),
                { toNode: [], toSvg: [] },
              );
            (t[0].attributes.class = r.toSvg.join(' ')),
              0 === r.toNode.length
                ? n.removeAttribute('class')
                : n.setAttribute('class', r.toNode.join(' '));
          }
          const s = t.map(r => gc(r)).join('\n');
          n.setAttribute(R3, ''), (n.innerHTML = s);
        },
      };
      function zz(e) {
        e();
      }
      function _z(e, n) {
        const t = 'function' == typeof n ? n : Vr;
        if (0 === e.length) t();
        else {
          let c = zz;
          x.mutateApproach === mX && (c = Ft.requestAnimationFrame || zz),
            c(() => {
              const s = (function cJ() {
                  return !0 === x.autoReplaceSvg
                    ? Br.replace
                    : Br[x.autoReplaceSvg] || Br.replace;
                })(),
                r = v7.begin('mutate');
              e.map(s), r(), t();
            });
        }
      }
      let y7 = !1;
      function bz() {
        y7 = !0;
      }
      function L7() {
        y7 = !1;
      }
      let jr = null;
      function wz(e) {
        if (!BL || !x.observeMutations) return;
        const {
          treeCallback: n = Vr,
          nodeCallback: t = Vr,
          pseudoElementsCallback: c = Vr,
          observeMutationsRoot: s = E2,
        } = e;
        (jr = new BL(r => {
          if (y7) return;
          const o = Bt();
          ln(r).forEach(i => {
            if (
              ('childList' === i.type &&
                i.addedNodes.length > 0 &&
                !yz(i.addedNodes[0]) &&
                (x.searchPseudoElements && c(i.target), n(i.target)),
              'attributes' === i.type &&
                i.target.parentNode &&
                x.searchPseudoElements &&
                c(i.target.parentNode),
              'attributes' === i.type && yz(i.target) && ~LX.indexOf(i.attributeName))
            )
              if (
                'class' === i.attributeName &&
                (function tJ(e) {
                  const n = e.getAttribute ? e.getAttribute(K5) : null,
                    t = e.getAttribute ? e.getAttribute(X5) : null;
                  return n && t;
                })(i.target)
              ) {
                const { prefix: a, iconName: l } = Fr(c7(i.target));
                i.target.setAttribute(K5, a || o), l && i.target.setAttribute(X5, l);
              } else
                (function nJ(e) {
                  return (
                    e &&
                    e.classList &&
                    e.classList.contains &&
                    e.classList.contains(x.replacementClass)
                  );
                })(i.target) && t(i.target);
          });
        })),
          dt &&
            jr.observe(s, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
      function Dz(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { styleParser: !0 };
        const {
            iconName: t,
            prefix: c,
            rest: s,
          } = (function lJ(e) {
            const n = e.getAttribute('data-prefix'),
              t = e.getAttribute('data-icon'),
              c = void 0 !== e.innerText ? e.innerText.trim() : '';
            let s = Fr(c7(e));
            return (
              s.prefix || (s.prefix = Bt()),
              n && t && ((s.prefix = n), (s.iconName = t)),
              (s.iconName && s.prefix) ||
                (s.prefix &&
                  c.length > 0 &&
                  (s.iconName =
                    (function UX(e, n) {
                      return (lz[e] || {})[n];
                    })(s.prefix, e.innerText) || u7(s.prefix, i7(e.innerText))),
                !s.iconName &&
                  x.autoFetchSvg &&
                  e.firstChild &&
                  e.firstChild.nodeType === Node.TEXT_NODE &&
                  (s.iconName = e.firstChild.data)),
              s
            );
          })(e),
          r = (function uJ(e) {
            const n = ln(e.attributes).reduce(
                (s, r) => (
                  'class' !== s.name && 'style' !== s.name && (s[r.name] = r.value), s
                ),
                {},
              ),
              t = e.getAttribute('title'),
              c = e.getAttribute('data-fa-title-id');
            return (
              x.autoA11y &&
                (t
                  ? (n['aria-labelledby'] = ''
                      .concat(x.replacementClass, '-title-')
                      .concat(c || mc()))
                  : ((n['aria-hidden'] = 'true'), (n.focusable = 'false'))),
              n
            );
          })(e),
          o = d7('parseNodeAttributes', {}, e);
        let i = n.styleParser
          ? (function aJ(e) {
              const n = e.getAttribute('style');
              let t = [];
              return (
                n &&
                  (t = n.split(';').reduce((c, s) => {
                    const r = s.split(':'),
                      o = r[0],
                      i = r.slice(1);
                    return o && i.length > 0 && (c[o] = i.join(':').trim()), c;
                  }, {})),
                t
              );
            })(e)
          : [];
        return {
          iconName: t,
          title: e.getAttribute('title'),
          titleId: e.getAttribute('data-fa-title-id'),
          prefix: c,
          transform: $e,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: s, styles: i, attributes: r },
          ...o,
        };
      }
      const { styles: dJ } = Ge;
      function Ez(e) {
        const n = 'nest' === x.autoReplaceSvg ? Dz(e, { styleParser: !1 }) : Dz(e);
        return ~n.extra.classes.indexOf(JL)
          ? jt('generateLayersText', e, n)
          : jt('generateSvgReplacementMutation', e, n);
      }
      let qe = new Set();
      function Nz(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!dt) return Promise.resolve();
        const t = E2.documentElement.classList,
          c = u => t.add(''.concat(ZL, '-').concat(u)),
          s = u => t.remove(''.concat(ZL, '-').concat(u)),
          r = x.autoFetchSvg ? qe : KL.map(u => 'fa-'.concat(u)).concat(Object.keys(dJ));
        r.includes('fa') || r.push('fa');
        const o = ['.'.concat(JL, ':not([').concat(R3, '])')]
          .concat(r.map(u => '.'.concat(u, ':not([').concat(R3, '])')))
          .join(', ');
        if (0 === o.length) return Promise.resolve();
        let i = [];
        try {
          i = ln(e.querySelectorAll(o));
        } catch {}
        if (!(i.length > 0)) return Promise.resolve();
        c('pending'), s('complete');
        const a = v7.begin('onTree'),
          l = i.reduce((u, f) => {
            try {
              const d = Ez(f);
              d && u.push(d);
            } catch (d) {
              QL || ('MissingIcon' === d.name && console.error(d));
            }
            return u;
          }, []);
        return new Promise((u, f) => {
          Promise.all(l)
            .then(d => {
              _z(d, () => {
                c('active'),
                  c('complete'),
                  s('pending'),
                  'function' == typeof n && n(),
                  a(),
                  u();
              });
            })
            .catch(d => {
              a(), f(d);
            });
        });
      }
      function hJ(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Ez(e).then(t => {
          t && _z([t], n);
        });
      }
      KL.map(e => {
        qe.add('fa-'.concat(e));
      }),
        Object.keys(O3[T2]).map(qe.add.bind(qe)),
        Object.keys(O3[Y1]).map(qe.add.bind(qe)),
        Object.keys(O3[Z1]).map(qe.add.bind(qe)),
        (qe = [...qe]);
      const mJ = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          transform: t = $e,
          symbol: c = !1,
          mask: s = null,
          maskId: r = null,
          title: o = null,
          titleId: i = null,
          classes: a = [],
          attributes: l = {},
          styles: u = {},
        } = n;
        if (!e) return;
        const { prefix: f, iconName: d, icon: h } = e;
        return Pr(
          { type: 'icon', ...e },
          () => (
            V3('beforeDOMElementCreation', { iconDefinition: e, params: n }),
            x.autoA11y &&
              (o
                ? (l['aria-labelledby'] = ''
                    .concat(x.replacementClass, '-title-')
                    .concat(i || mc()))
                : ((l['aria-hidden'] = 'true'), (l.focusable = 'false'))),
            p7({
              icons: {
                main: g7(h),
                mask: s ? g7(s.icon) : { found: !1, width: null, height: null, icon: {} },
              },
              prefix: f,
              iconName: d,
              transform: { ...$e, ...t },
              symbol: c,
              title: o,
              maskId: r,
              titleId: i,
              extra: { attributes: l, styles: u, classes: a },
            })
          ),
        );
      };
      var gJ = {
          mixout() {
            return {
              icon:
                ((e = mJ),
                function (n) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  const c = (n || {}).icon ? n : h7(n || {});
                  let { mask: s } = t;
                  return (
                    s && (s = (s || {}).icon ? s : h7(s || {})), e(c, { ...t, mask: s })
                  );
                }),
            };
            var e;
          },
          hooks: () => ({
            mutationObserverCallbacks: e => (
              (e.treeCallback = Nz), (e.nodeCallback = hJ), e
            ),
          }),
          provides(e) {
            (e.i2svg = function (n) {
              const { node: t = E2, callback: c = () => {} } = n;
              return Nz(t, c);
            }),
              (e.generateSvgReplacementMutation = function (n, t) {
                const {
                  iconName: c,
                  title: s,
                  titleId: r,
                  prefix: o,
                  transform: i,
                  symbol: a,
                  mask: l,
                  maskId: u,
                  extra: f,
                } = t;
                return new Promise((d, h) => {
                  Promise.all([
                    C7(c, o),
                    l.iconName
                      ? C7(l.iconName, l.prefix)
                      : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
                  ])
                    .then(p => {
                      let [m, C] = p;
                      d([
                        n,
                        p7({
                          icons: { main: m, mask: C },
                          prefix: o,
                          iconName: c,
                          transform: i,
                          symbol: a,
                          maskId: u,
                          title: s,
                          titleId: r,
                          extra: f,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(h);
                });
              }),
              (e.generateAbstractIcon = function (n) {
                let { children: t, attributes: c, main: s, transform: r, styles: o } = n;
                const i = kr(o);
                let a;
                return (
                  i.length > 0 && (c.style = i),
                  s7(r) &&
                    (a = jt('generateAbstractTransformGrouping', {
                      main: s,
                      transform: r,
                      containerWidth: s.width,
                      iconWidth: s.width,
                    })),
                  t.push(a || s.icon),
                  { children: t, attributes: c }
                );
              });
          },
        },
        CJ = {
          mixout: () => ({
            layer(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const { classes: t = [] } = n;
              return Pr({ type: 'layer' }, () => {
                V3('beforeDOMElementCreation', { assembler: e, params: n });
                let c = [];
                return (
                  e(s => {
                    Array.isArray(s)
                      ? s.map(r => {
                          c = c.concat(r.abstract);
                        })
                      : (c = c.concat(s.abstract));
                  }),
                  [
                    {
                      tag: 'span',
                      attributes: {
                        class: [''.concat(x.cssPrefix, '-layers'), ...t].join(' '),
                      },
                      children: c,
                    },
                  ]
                );
              });
            },
          }),
        },
        MJ = {
          mixout: () => ({
            counter(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const {
                title: t = null,
                classes: c = [],
                attributes: s = {},
                styles: r = {},
              } = n;
              return Pr(
                { type: 'counter', content: e },
                () => (
                  V3('beforeDOMElementCreation', { content: e, params: n }),
                  (function KX(e) {
                    const { content: n, title: t, extra: c } = e,
                      s = {
                        ...c.attributes,
                        ...(t ? { title: t } : {}),
                        class: c.classes.join(' '),
                      },
                      r = kr(c.styles);
                    r.length > 0 && (s.style = r);
                    const o = [];
                    return (
                      o.push({ tag: 'span', attributes: s, children: [n] }),
                      t &&
                        o.push({
                          tag: 'span',
                          attributes: { class: 'sr-only' },
                          children: [t],
                        }),
                      o
                    );
                  })({
                    content: e.toString(),
                    title: t,
                    extra: {
                      attributes: s,
                      styles: r,
                      classes: [''.concat(x.cssPrefix, '-layers-counter'), ...c],
                    },
                  })
                ),
              );
            },
          }),
        },
        vJ = {
          mixout: () => ({
            text(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const {
                transform: t = $e,
                title: c = null,
                classes: s = [],
                attributes: r = {},
                styles: o = {},
              } = n;
              return Pr(
                { type: 'text', content: e },
                () => (
                  V3('beforeDOMElementCreation', { content: e, params: n }),
                  Cz({
                    content: e,
                    transform: { ...$e, ...t },
                    title: c,
                    extra: {
                      attributes: r,
                      styles: o,
                      classes: [''.concat(x.cssPrefix, '-layers-text'), ...s],
                    },
                  })
                ),
              );
            },
          }),
          provides(e) {
            e.generateLayersText = function (n, t) {
              const { title: c, transform: s, extra: r } = t;
              let o = null,
                i = null;
              if (jL) {
                const a = parseInt(getComputedStyle(n).fontSize, 10),
                  l = n.getBoundingClientRect();
                (o = l.width / a), (i = l.height / a);
              }
              return (
                x.autoA11y && !c && (r.attributes['aria-hidden'] = 'true'),
                Promise.resolve([
                  n,
                  Cz({
                    content: n.innerHTML,
                    width: o,
                    height: i,
                    transform: s,
                    title: c,
                    extra: r,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        };
      const yJ = new RegExp('"', 'ug'),
        xz = [1105920, 1112319],
        Sz = {
          FontAwesome: { normal: 'fas', 400: 'fas' },
          'Font Awesome 6 Free': { 900: 'fas', 400: 'far' },
          'Font Awesome 6 Pro': {
            900: 'fas',
            400: 'far',
            normal: 'far',
            300: 'fal',
            100: 'fat',
          },
          'Font Awesome 6 Brands': { 400: 'fab', normal: 'fab' },
          'Font Awesome 6 Duotone': { 900: 'fad' },
          'Font Awesome 6 Sharp': {
            900: 'fass',
            400: 'fasr',
            normal: 'fasr',
            300: 'fasl',
            100: 'fast',
          },
          'Font Awesome 6 Sharp Duotone': { 900: 'fasds' },
          'Font Awesome 5 Free': { 900: 'fas', 400: 'far' },
          'Font Awesome 5 Pro': { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal' },
          'Font Awesome 5 Brands': { 400: 'fab', normal: 'fab' },
          'Font Awesome 5 Duotone': { 900: 'fad' },
          'Font Awesome Kit': { 400: 'fak', normal: 'fak' },
          'Font Awesome Kit Duotone': { 400: 'fakd', normal: 'fakd' },
        },
        z7 = Object.keys(Sz).reduce((e, n) => ((e[n.toLowerCase()] = Sz[n]), e), {}),
        LJ = Object.keys(z7).reduce((e, n) => {
          const t = z7[n];
          return (e[n] = t[900] || [...Object.entries(t)][0][1]), e;
        }, {});
      function Iz(e, n) {
        const t = ''.concat(pX).concat(n.replace(':', '-'));
        return new Promise((c, s) => {
          if (null !== e.getAttribute(t)) return c();
          const o = ln(e.children).filter(d => d.getAttribute(Q5) === n)[0],
            i = Ft.getComputedStyle(e, n),
            a = i.getPropertyValue('font-family'),
            l = a.match(vX),
            u = i.getPropertyValue('font-weight'),
            f = i.getPropertyValue('content');
          if (o && !l) return e.removeChild(o), c();
          if (l && 'none' !== f && '' !== f) {
            const d = i.getPropertyValue('content');
            let h = (function _J(e, n) {
              const t = e.replace(/^['"]|['"]$/g, '').toLowerCase(),
                c = parseInt(n),
                s = isNaN(c) ? 'normal' : c;
              return (z7[t] || {})[s] || LJ[t];
            })(a, u);
            const { value: p, isSecondary: m } = (function zJ(e) {
                const n = e.replace(yJ, ''),
                  t = (function OX(e, n) {
                    const t = e.length;
                    let s,
                      c = e.charCodeAt(n);
                    return c >= 55296 &&
                      c <= 56319 &&
                      t > n + 1 &&
                      ((s = e.charCodeAt(n + 1)), s >= 56320 && s <= 57343)
                      ? 1024 * (c - 55296) + s - 56320 + 65536
                      : c;
                  })(n, 0),
                  c = t >= xz[0] && t <= xz[1],
                  s = 2 === n.length && n[0] === n[1];
                return { value: i7(s ? n[0] : n), isSecondary: c || s };
              })(d),
              C = l[0].startsWith('FontAwesome');
            let v = u7(h, p),
              g = v;
            if (C) {
              const D = (function HX(e) {
                const n = fz[e],
                  t = u7('fas', e);
                return (
                  n ||
                  (t ? { prefix: 'fas', iconName: t } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(p);
              D.iconName && D.prefix && ((v = D.iconName), (h = D.prefix));
            }
            if (!v || m || (o && o.getAttribute(K5) === h && o.getAttribute(X5) === g))
              c();
            else {
              e.setAttribute(t, g), o && e.removeChild(o);
              const D = (function fJ() {
                  return {
                    iconName: null,
                    title: null,
                    titleId: null,
                    prefix: null,
                    transform: $e,
                    symbol: !1,
                    mask: { iconName: null, prefix: null, rest: [] },
                    maskId: null,
                    extra: { classes: [], styles: {}, attributes: {} },
                  };
                })(),
                { extra: k } = D;
              (k.attributes[Q5] = n),
                C7(v, h)
                  .then(G => {
                    const M2 = p7({
                        ...D,
                        icons: { main: G, mask: f7() },
                        prefix: h,
                        iconName: g,
                        extra: k,
                        watchable: !0,
                      }),
                      c1 = E2.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    '::before' === n
                      ? e.insertBefore(c1, e.firstChild)
                      : e.appendChild(c1),
                      (c1.outerHTML = M2.map(qt => gc(qt)).join('\n')),
                      e.removeAttribute(t),
                      c();
                  })
                  .catch(s);
            }
          } else c();
        });
      }
      function bJ(e) {
        return Promise.all([Iz(e, '::before'), Iz(e, '::after')]);
      }
      function wJ(e) {
        return !(
          e.parentNode === document.head ||
          ~gX.indexOf(e.tagName.toUpperCase()) ||
          e.getAttribute(Q5) ||
          (e.parentNode && 'svg' === e.parentNode.tagName)
        );
      }
      function Az(e) {
        if (dt)
          return new Promise((n, t) => {
            const c = ln(e.querySelectorAll('*')).filter(wJ).map(bJ),
              s = v7.begin('searchPseudoElements');
            bz(),
              Promise.all(c)
                .then(() => {
                  s(), L7(), n();
                })
                .catch(() => {
                  s(), L7(), t();
                });
          });
      }
      let Tz = !1;
      const kz = e =>
          e
            .toLowerCase()
            .split(' ')
            .reduce(
              (t, c) => {
                const s = c.toLowerCase().split('-'),
                  r = s[0];
                let o = s.slice(1).join('-');
                if (r && 'h' === o) return (t.flipX = !0), t;
                if (r && 'v' === o) return (t.flipY = !0), t;
                if (((o = parseFloat(o)), isNaN(o))) return t;
                switch (r) {
                  case 'grow':
                    t.size = t.size + o;
                    break;
                  case 'shrink':
                    t.size = t.size - o;
                    break;
                  case 'left':
                    t.x = t.x - o;
                    break;
                  case 'right':
                    t.x = t.x + o;
                    break;
                  case 'up':
                    t.y = t.y - o;
                    break;
                  case 'down':
                    t.y = t.y + o;
                    break;
                  case 'rotate':
                    t.rotate = t.rotate + o;
                }
                return t;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
            ),
        _7 = { x: 0, y: 0, width: '100%', height: '100%' };
      function Rz(e) {
        return (
          e.attributes &&
            (e.attributes.fill ||
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1]) &&
            (e.attributes.fill = 'black'),
          e
        );
      }
      function xJ(e) {
        return 'g' === e.tag ? e.children : [e];
      }
      !(function WX(e, n) {
        let { mixoutsTo: t } = n;
        (mz = e),
          (un = {}),
          Object.keys(fn).forEach(c => {
            -1 === qX.indexOf(c) && delete fn[c];
          }),
          mz.forEach(c => {
            const s = c.mixout ? c.mixout() : {};
            if (
              (Object.keys(s).forEach(r => {
                'function' == typeof s[r] && (t[r] = s[r]),
                  'object' == typeof s[r] &&
                    Object.keys(s[r]).forEach(o => {
                      t[r] || (t[r] = {}), (t[r][o] = s[r][o]);
                    });
              }),
              c.hooks)
            ) {
              const r = c.hooks();
              Object.keys(r).forEach(o => {
                un[o] || (un[o] = []), un[o].push(r[o]);
              });
            }
            c.provides && c.provides(fn);
          });
      })(
        [
          AX,
          gJ,
          CJ,
          MJ,
          vJ,
          {
            hooks: () => ({
              mutationObserverCallbacks: e => ((e.pseudoElementsCallback = Az), e),
            }),
            provides(e) {
              e.pseudoElements2svg = function (n) {
                const { node: t = E2 } = n;
                x.searchPseudoElements && Az(t);
              };
            },
          },
          {
            mixout: () => ({
              dom: {
                unwatch() {
                  bz(), (Tz = !0);
                },
              },
            }),
            hooks: () => ({
              bootstrap() {
                wz(d7('mutationObserverCallbacks', {}));
              },
              noAuto() {
                !(function iJ() {
                  jr && jr.disconnect();
                })();
              },
              watch(e) {
                const { observeMutationsRoot: n } = e;
                Tz
                  ? L7()
                  : wz(d7('mutationObserverCallbacks', { observeMutationsRoot: n }));
              },
            }),
          },
          {
            mixout: () => ({ parse: { transform: e => kz(e) } }),
            hooks: () => ({
              parseNodeAttributes(e, n) {
                const t = n.getAttribute('data-fa-transform');
                return t && (e.transform = kz(t)), e;
              },
            }),
            provides(e) {
              e.generateAbstractTransformGrouping = function (n) {
                let { main: t, transform: c, containerWidth: s, iconWidth: r } = n;
                const o = { transform: 'translate('.concat(s / 2, ' 256)') },
                  i = 'translate('.concat(32 * c.x, ', ').concat(32 * c.y, ') '),
                  a = 'scale('
                    .concat((c.size / 16) * (c.flipX ? -1 : 1), ', ')
                    .concat((c.size / 16) * (c.flipY ? -1 : 1), ') '),
                  l = 'rotate('.concat(c.rotate, ' 0 0)'),
                  u = { transform: ''.concat(i, ' ').concat(a, ' ').concat(l) },
                  f = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
                return {
                  tag: 'g',
                  attributes: { ...o },
                  children: [
                    {
                      tag: 'g',
                      attributes: { ...u },
                      children: [
                        {
                          tag: t.icon.tag,
                          children: t.icon.children,
                          attributes: { ...t.icon.attributes, ...f },
                        },
                      ],
                    },
                  ],
                };
              };
            },
          },
          {
            hooks: () => ({
              parseNodeAttributes(e, n) {
                const t = n.getAttribute('data-fa-mask'),
                  c = t ? Fr(t.split(' ').map(s => s.trim())) : f7();
                return (
                  c.prefix || (c.prefix = Bt()),
                  (e.mask = c),
                  (e.maskId = n.getAttribute('data-fa-mask-id')),
                  e
                );
              },
            }),
            provides(e) {
              e.generateAbstractMask = function (n) {
                let {
                  children: t,
                  attributes: c,
                  main: s,
                  mask: r,
                  maskId: o,
                  transform: i,
                } = n;
                const { width: a, icon: l } = s,
                  { width: u, icon: f } = r,
                  d = (function xX(e) {
                    let { transform: n, containerWidth: t, iconWidth: c } = e;
                    const s = { transform: 'translate('.concat(t / 2, ' 256)') },
                      r = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') '),
                      o = 'scale('
                        .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
                        .concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
                      i = 'rotate('.concat(n.rotate, ' 0 0)');
                    return {
                      outer: s,
                      inner: { transform: ''.concat(r, ' ').concat(o, ' ').concat(i) },
                      path: { transform: 'translate('.concat((c / 2) * -1, ' -256)') },
                    };
                  })({ transform: i, containerWidth: u, iconWidth: a }),
                  h = { tag: 'rect', attributes: { ..._7, fill: 'white' } },
                  p = l.children ? { children: l.children.map(Rz) } : {},
                  m = {
                    tag: 'g',
                    attributes: { ...d.inner },
                    children: [
                      Rz({
                        tag: l.tag,
                        attributes: { ...l.attributes, ...d.path },
                        ...p,
                      }),
                    ],
                  },
                  C = { tag: 'g', attributes: { ...d.outer }, children: [m] },
                  v = 'mask-'.concat(o || mc()),
                  g = 'clip-'.concat(o || mc()),
                  D = {
                    tag: 'mask',
                    attributes: {
                      ..._7,
                      id: v,
                      maskUnits: 'userSpaceOnUse',
                      maskContentUnits: 'userSpaceOnUse',
                    },
                    children: [h, C],
                  },
                  k = {
                    tag: 'defs',
                    children: [
                      { tag: 'clipPath', attributes: { id: g }, children: xJ(f) },
                      D,
                    ],
                  };
                return (
                  t.push(k, {
                    tag: 'rect',
                    attributes: {
                      fill: 'currentColor',
                      'clip-path': 'url(#'.concat(g, ')'),
                      mask: 'url(#'.concat(v, ')'),
                      ..._7,
                    },
                  }),
                  { children: t, attributes: c }
                );
              };
            },
          },
          {
            provides(e) {
              let n = !1;
              Ft.matchMedia &&
                (n = Ft.matchMedia('(prefers-reduced-motion: reduce)').matches),
                (e.missingIconAbstract = function () {
                  const t = [],
                    c = { fill: 'currentColor' },
                    s = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
                  t.push({
                    tag: 'path',
                    attributes: {
                      ...c,
                      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
                    },
                  });
                  const r = { ...s, attributeName: 'opacity' },
                    o = {
                      tag: 'circle',
                      attributes: { ...c, cx: '256', cy: '364', r: '28' },
                      children: [],
                    };
                  return (
                    n ||
                      o.children.push(
                        {
                          tag: 'animate',
                          attributes: {
                            ...s,
                            attributeName: 'r',
                            values: '28;14;28;28;14;28;',
                          },
                        },
                        { tag: 'animate', attributes: { ...r, values: '1;0;1;1;0;1;' } },
                      ),
                    t.push(o),
                    t.push({
                      tag: 'path',
                      attributes: {
                        ...c,
                        opacity: '1',
                        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                      },
                      children: n
                        ? []
                        : [
                            {
                              tag: 'animate',
                              attributes: { ...r, values: '1;0;0;0;0;1;' },
                            },
                          ],
                    }),
                    n ||
                      t.push({
                        tag: 'path',
                        attributes: {
                          ...c,
                          opacity: '0',
                          d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                        },
                        children: [
                          {
                            tag: 'animate',
                            attributes: { ...r, values: '0;0;1;1;0;0;' },
                          },
                        ],
                      }),
                    { tag: 'g', attributes: { class: 'missing' }, children: t }
                  );
                });
            },
          },
          {
            hooks: () => ({
              parseNodeAttributes(e, n) {
                const t = n.getAttribute('data-fa-symbol');
                return (e.symbol = null !== t && ('' === t || t)), e;
              },
            }),
          },
        ],
        { mixoutsTo: Q1 },
      );
      const kJ = Q1.config,
        RJ = Q1.dom,
        OJ = Q1.parse,
        FJ = Q1.icon,
        PJ = ['*'],
        jJ = e => {
          const n = {
            [`fa-${e.animation}`]: null != e.animation && !e.animation.startsWith('spin'),
            'fa-spin': 'spin' === e.animation || 'spin-reverse' === e.animation,
            'fa-spin-pulse':
              'spin-pulse' === e.animation || 'spin-pulse-reverse' === e.animation,
            'fa-spin-reverse':
              'spin-reverse' === e.animation || 'spin-pulse-reverse' === e.animation,
            'fa-pulse':
              'spin-pulse' === e.animation || 'spin-pulse-reverse' === e.animation,
            'fa-fw': e.fixedWidth,
            'fa-border': e.border,
            'fa-inverse': e.inverse,
            'fa-layers-counter': e.counter,
            'fa-flip-horizontal': 'horizontal' === e.flip || 'both' === e.flip,
            'fa-flip-vertical': 'vertical' === e.flip || 'both' === e.flip,
            [`fa-${e.size}`]: null !== e.size,
            [`fa-rotate-${e.rotate}`]: null !== e.rotate,
            [`fa-pull-${e.pull}`]: null !== e.pull,
            [`fa-stack-${e.stackItemSize}`]: null != e.stackItemSize,
          };
          return Object.keys(n)
            .map(t => (n[t] ? t : null))
            .filter(t => t);
        },
        b7 = new WeakSet(),
        Oz = 'fa-auto-css';
      let GJ = (() => {
          class e {
            constructor() {
              (this.defaultPrefix = 'fas'),
                (this.fallbackIcon = null),
                (this._autoAddCss = !0);
            }
            set autoAddCss(t) {
              (kJ.autoAddCss = t), (this._autoAddCss = t);
            }
            get autoAddCss() {
              return this._autoAddCss;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        qJ = (() => {
          class e {
            constructor() {
              this.definitions = {};
            }
            addIcons(...t) {
              for (const c of t) {
                c.prefix in this.definitions || (this.definitions[c.prefix] = {}),
                  (this.definitions[c.prefix][c.iconName] = c);
                for (const s of c.icon[2])
                  'string' == typeof s && (this.definitions[c.prefix][s] = c);
              }
            }
            addIconPacks(...t) {
              for (const c of t) {
                const s = Object.keys(c).map(r => c[r]);
                this.addIcons(...s);
              }
            }
            getIconDefinition(t, c) {
              return t in this.definitions && c in this.definitions[t]
                ? this.definitions[t][c]
                : null;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        WJ = (() => {
          class e {
            constructor() {
              this.stackItemSize = '1x';
            }
            ngOnChanges(t) {
              if ('size' in t)
                throw new Error(
                  'fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.',
                );
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [
                ['fa-icon', 'stackItemSize', ''],
                ['fa-duotone-icon', 'stackItemSize', ''],
              ],
              inputs: { stackItemSize: 'stackItemSize', size: 'size' },
              standalone: !0,
              features: [m1],
            }));
          }
          return e;
        })(),
        YJ = (() => {
          class e {
            constructor(t, c) {
              (this.renderer = t), (this.elementRef = c);
            }
            ngOnInit() {
              this.renderer.addClass(this.elementRef.nativeElement, 'fa-stack');
            }
            ngOnChanges(t) {
              'size' in t &&
                (null != t.size.currentValue &&
                  this.renderer.addClass(
                    this.elementRef.nativeElement,
                    `fa-${t.size.currentValue}`,
                  ),
                null != t.size.previousValue &&
                  this.renderer.removeClass(
                    this.elementRef.nativeElement,
                    `fa-${t.size.previousValue}`,
                  ));
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Te), z(x1));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['fa-stack']],
              inputs: { size: 'size' },
              standalone: !0,
              features: [m1, Q],
              ngContentSelectors: PJ,
              decls: 1,
              vars: 0,
              template: function (c, s) {
                1 & c && (b0(), w0(0));
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        ZJ = (() => {
          class e {
            constructor(t, c, s, r, o) {
              (this.sanitizer = t),
                (this.config = c),
                (this.iconLibrary = s),
                (this.stackItem = r),
                (this.document = y(T1)),
                null != o &&
                  null == r &&
                  console.error(
                    'FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.',
                  );
            }
            ngOnChanges(t) {
              if (null != this.icon || null != this.config.fallbackIcon) {
                if (t) {
                  const c = this.findIconDefinition(
                    this.icon ?? this.config.fallbackIcon,
                  );
                  if (null != c) {
                    const s = this.buildParams();
                    !(function UJ(e, n) {
                      if (!n.autoAddCss || b7.has(e)) return;
                      if (null != e.getElementById(Oz))
                        return (n.autoAddCss = !1), void b7.add(e);
                      const t = e.createElement('style');
                      t.setAttribute('type', 'text/css'),
                        t.setAttribute('id', Oz),
                        (t.innerHTML = RJ.css());
                      const c = e.head.childNodes;
                      let s = null;
                      for (let r = c.length - 1; r > -1; r--) {
                        const o = c[r],
                          i = o.nodeName.toUpperCase();
                        ['STYLE', 'LINK'].indexOf(i) > -1 && (s = o);
                      }
                      e.head.insertBefore(t, s), (n.autoAddCss = !1), b7.add(e);
                    })(this.document, this.config);
                    const r = FJ(c, s);
                    this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(
                      r.html.join('\n'),
                    );
                  }
                }
              } else
                (() => {
                  throw new Error(
                    'Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.',
                  );
                })();
            }
            render() {
              this.ngOnChanges({});
            }
            findIconDefinition(t) {
              const c = ((e, n) =>
                (e => void 0 !== e.prefix && void 0 !== e.iconName)(e)
                  ? e
                  : Array.isArray(e) && 2 === e.length
                  ? { prefix: e[0], iconName: e[1] }
                  : { prefix: n, iconName: e })(t, this.config.defaultPrefix);
              return 'icon' in c
                ? c
                : this.iconLibrary.getIconDefinition(c.prefix, c.iconName) ??
                    ((e => {
                      throw new Error(
                        `Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`,
                      );
                    })(c),
                    null);
            }
            buildParams() {
              const t = {
                  flip: this.flip,
                  animation: this.animation,
                  border: this.border,
                  inverse: this.inverse,
                  size: this.size || null,
                  pull: this.pull || null,
                  rotate: this.rotate || null,
                  fixedWidth:
                    'boolean' == typeof this.fixedWidth
                      ? this.fixedWidth
                      : this.config.fixedWidth,
                  stackItemSize:
                    null != this.stackItem ? this.stackItem.stackItemSize : null,
                },
                c =
                  'string' == typeof this.transform
                    ? OJ.transform(this.transform)
                    : this.transform;
              return {
                title: this.title,
                transform: c,
                classes: jJ(t),
                mask: null != this.mask ? this.findIconDefinition(this.mask) : null,
                symbol: this.symbol,
                attributes: { role: this.a11yRole },
              };
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(yv), z(GJ), z(qJ), z(WJ, 8), z(YJ, 8));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['fa-icon']],
              hostAttrs: [1, 'ng-fa-icon'],
              hostVars: 2,
              hostBindings: function (c, s) {
                2 & c && (ja('innerHTML', s.renderedIconHTML, eh), ge('title', s.title));
              },
              inputs: {
                icon: 'icon',
                title: 'title',
                animation: 'animation',
                mask: 'mask',
                flip: 'flip',
                size: 'size',
                pull: 'pull',
                border: 'border',
                inverse: 'inverse',
                symbol: 'symbol',
                rotate: 'rotate',
                fixedWidth: 'fixedWidth',
                transform: 'transform',
                a11yRole: 'a11yRole',
              },
              standalone: !0,
              features: [m1, Q],
              decls: 0,
              vars: 0,
              template: function (c, s) {},
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        QJ = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = X3({ type: e }));
            static #n = (this.ɵinj = Qt({}));
          }
          return e;
        })();
      const Z_ = {
          prefix: 'fas',
          iconName: 'lock',
          icon: [
            448,
            512,
            [128274],
            'f023',
            'M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z',
          ],
        },
        Lb = {
          prefix: 'fas',
          iconName: 'star',
          icon: [
            576,
            512,
            [11088, 61446],
            'f005',
            'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z',
          ],
        },
        LN = {
          prefix: 'fas',
          iconName: 'play',
          icon: [
            384,
            512,
            [9654],
            'f04b',
            'M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z',
          ],
        };
      let zC2 = (() => {
        class e extends W5 {
          constructor(t) {
            super(t),
              (this.injector = t),
              (this.type = 'lock'),
              (this.color = 'gray'),
              (this.size = '1x');
          }
          afterInit() {
            this.addClassName('font-awesome', this.color);
          }
          getFontAwesomeIcon() {
            switch (this.type) {
              case 'lock':
                return Z_;
              case 'play':
                return LN;
              case 'star':
                return Lb;
              default:
                throw new Error('Not supported type!');
            }
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(D2));
          });
          static #t = (this.ɵcmp = Y({
            type: e,
            selectors: [['lib-font-awesome']],
            inputs: { type: 'type', color: 'color', size: 'size' },
            standalone: !0,
            features: [t2, Q],
            decls: 1,
            vars: 3,
            consts: [[3, 'icon', 'size', 'ngClass']],
            template: function (c, s) {
              1 & c && p2(0, 'fa-icon', 0),
                2 & c &&
                  N('icon', s.getFontAwesomeIcon())('size', s.size)(
                    'ngClass',
                    s.classNames,
                  );
            },
            dependencies: [at, V0, QJ, ZJ],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.font-awesome__gray[_ngcontent-%COMP%]{color:#b2b2b2}.font-awesome__green[_ngcontent-%COMP%]{color:#22b24c}.font-awesome__gold[_ngcontent-%COMP%]{color:#ffb22c}',
            ],
          }));
        }
        return e;
      })();
      const _C2 = ['*'];
      let _c = (() => {
          class e extends W5 {
            constructor() {
              super(...arguments), (this.gap = 'none');
            }
            afterInit() {
              this.addClassName('flex', 'gap', this.gap);
            }
            buildStyles() {
              return {
                flexDirection: this.flexDirection,
                alignItems: this.alignItems,
                justifyContent: this.justifyContent,
              };
            }
            static #e = (this.ɵfac = (() => {
              let t;
              return function (s) {
                return (t || (t = q2(e)))(s || e);
              };
            })());
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-flex']],
              inputs: {
                flexDirection: 'flexDirection',
                alignItems: 'alignItems',
                justifyContent: 'justifyContent',
                gap: 'gap',
              },
              standalone: !0,
              features: [t2, Q],
              ngContentSelectors: _C2,
              decls: 2,
              vars: 2,
              consts: [[1, 'flex', 3, 'ngClass', 'ngStyle']],
              template: function (c, s) {
                1 & c && (b0(), U(0, 'div', 0), w0(1), H()),
                  2 & c && N('ngClass', s.classNames)('ngStyle', s.buildStyles());
              },
              dependencies: [at, V0, kl],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;height:100%}.flex__gap--none[_ngcontent-%COMP%]{gap:0}.flex__gap--small[_ngcontent-%COMP%]{gap:.5rem}.flex__gap--medium[_ngcontent-%COMP%]{gap:1rem}.flex__gap--large[_ngcontent-%COMP%]{gap:2rem}',
              ],
            }));
          }
          return e;
        })(),
        bC2 = (() => {
          class e extends Ar {
            constructor(t) {
              super(t, 'course'),
                (this.injector = t),
                (this.taskId = ''),
                (this.type = 'lock'),
                (this.color = 'gray');
            }
            onClick() {
              this.emit(this.taskId);
            }
            onStoreChange(t) {
              const c = t.tasks.get(this.taskId);
              if (!c) throw new Error((() => `Not found ${this.taskId} in the store!`)());
              this.addClassName('task-marker', c.type), this.setFontAwesome(c.type);
            }
            setFontAwesome(t) {
              switch (t) {
                case 'blocked':
                  return (this.type = 'lock'), void (this.color = 'gray');
                case 'active':
                  return (this.type = 'play'), void (this.color = 'green');
                case 'done':
                  return (this.type = 'star'), void (this.color = 'gold');
                default:
                  throw new Error('Not supported type!');
              }
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(D2));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-task-marker']],
              inputs: { taskId: 'taskId' },
              standalone: !0,
              features: [t2, Q],
              decls: 3,
              vars: 3,
              consts: [
                [1, 'task-marker', 3, 'click', 'ngClass'],
                ['alignItems', 'center', 'justifyContent', 'center'],
                ['size', '3x', 3, 'type', 'color'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'div', 0),
                  J('click', function () {
                    return s.onClick();
                  }),
                  U(1, 'lib-flex', 1),
                  p2(2, 'lib-font-awesome', 2),
                  H()()),
                  2 & c &&
                    (N('ngClass', s.classNames),
                    I(2),
                    N('type', s.type)('color', s.color));
              },
              dependencies: [at, V0, _c, zC2],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.task-marker[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:100%;cursor:pointer}.task-marker__blocked[_ngcontent-%COMP%]{background-color:#7f7f7f;box-shadow:0 .5rem #7f7f7f;border:.5rem solid #b2b2b2}.task-marker__blocked[_ngcontent-%COMP%]:active{transform:translateY(.25rem);box-shadow:0 .25rem #7f7f7f}.task-marker__active[_ngcontent-%COMP%]{background-color:#125c27;box-shadow:0 .5rem #125c27;border:.5rem solid #22b24c}.task-marker__active[_ngcontent-%COMP%]:active{transform:translateY(.25rem);box-shadow:0 .25rem #125c27}.task-marker__done[_ngcontent-%COMP%]{background-color:#c57d00;box-shadow:0 .5rem #c57d00;border:.5rem solid #ffb22c}.task-marker__done[_ngcontent-%COMP%]:active{transform:translateY(.25rem);box-shadow:0 .25rem #c57d00}',
              ],
            }));
          }
          return e;
        })();
      function wC2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'div', 1)(2, 'lib-task-marker', 2),
            J('event', function (s) {
              return B1(t), j1(n2().onClick(s));
            }),
            H()(),
            I2();
        }
        if (2 & e) {
          const t = n.$implicit,
            c = n.index,
            s = n2();
          I(), N('ngStyle', s.getWaveMarkerPosX(c)), I(), N('taskId', t);
        }
      }
      let DC2 = (() => {
          class e extends Ar {
            constructor(t, c) {
              super(t, 'course'),
                (this.injector = t),
                (this.breakpoint = c),
                (this.taskIds = []),
                (this.amplitude = 80),
                (this.frequency = 0.5),
                this.breakpoint.addObserver(this);
            }
            update(t) {
              const { breakpoint: c } = t;
              this.amplitude = c === se.XSmall ? 80 : 200;
            }
            onClick(t) {
              this.emit(t);
            }
            getWaveMarkerPosX(t) {
              return {
                transform: `translateX(${
                  Math.sin(t * this.frequency) * this.amplitude
                }px)`,
              };
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(D2), z(OQ));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-task-wave']],
              inputs: { taskIds: 'taskIds' },
              standalone: !0,
              features: [t2, Q],
              decls: 1,
              vars: 1,
              consts: [
                [4, 'ngFor', 'ngForOf'],
                [3, 'ngStyle'],
                [3, 'event', 'taskId'],
              ],
              template: function (c, s) {
                1 & c && me(0, wC2, 3, 2, 'ng-container', 0),
                  2 & c && N('ngForOf', s.taskIds);
              },
              dependencies: [at, Al, kl, bC2],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}[_nghost-%COMP%]{display:contents}',
              ],
            }));
          }
          return e;
        })(),
        EC2 = (() => {
          class e extends Ar {
            constructor(t) {
              super(t, 'course'),
                (this.injector = t),
                (this.taskIds = []),
                (this.typeConverter = this.injector.get(ZK));
            }
            onStoreChange(t) {
              this.taskIds = this.typeConverter
                .convertMapToArray(t.tasks)
                .sort((c, s) => c.order - s.order)
                .map(c => c.id);
            }
            onClick(t) {
              this.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(D2));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-task-roadmap']],
              standalone: !0,
              features: [t2, Q],
              decls: 2,
              vars: 1,
              consts: [
                [
                  'flexDirection',
                  'column',
                  'alignItems',
                  'center',
                  'justifyContent',
                  'center',
                  'gap',
                  'medium',
                ],
                [3, 'event', 'taskIds'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-flex', 0)(1, 'lib-task-wave', 1),
                  J('event', function (o) {
                    return s.onClick(o);
                  }),
                  H()()),
                  2 & c && (I(), N('taskIds', s.taskIds));
              },
              dependencies: [at, _c, DC2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        pS = (() => {
          class e {
            constructor(t, c) {
              (this._renderer = t),
                (this._elementRef = c),
                (this.onChange = s => {}),
                (this.onTouched = () => {});
            }
            setProperty(t, c) {
              this._renderer.setProperty(this._elementRef.nativeElement, t, c);
            }
            registerOnTouched(t) {
              this.onTouched = t;
            }
            registerOnChange(t) {
              this.onChange = t;
            }
            setDisabledState(t) {
              this.setProperty('disabled', t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Te), z(x1));
            });
            static #t = (this.ɵdir = O({ type: e }));
          }
          return e;
        })(),
        B3 = (() => {
          class e extends pS {
            static #e = (this.ɵfac = (() => {
              let t;
              return function (s) {
                return (t || (t = q2(e)))(s || e);
              };
            })());
            static #t = (this.ɵdir = O({ type: e, features: [t2] }));
          }
          return e;
        })();
      const We = new _(''),
        SC2 = { provide: We, useExisting: v2(() => so), multi: !0 },
        AC2 = new _('');
      let so = (() => {
        class e extends pS {
          constructor(t, c, s) {
            super(t, c),
              (this._compositionMode = s),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function IC2() {
                  const e = At() ? At().getUserAgent() : '';
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(t) {
            this.setProperty('value', t ?? '');
          }
          _handleInput(t) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) &&
              this.onChange(t);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(t) {
            (this._composing = !1), this._compositionMode && this.onChange(t);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(Te), z(x1), z(AC2, 8));
          });
          static #t = (this.ɵdir = O({
            type: e,
            selectors: [
              ['input', 'formControlName', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControlName', ''],
              ['input', 'formControl', '', 3, 'type', 'checkbox'],
              ['textarea', 'formControl', ''],
              ['input', 'ngModel', '', 3, 'type', 'checkbox'],
              ['textarea', 'ngModel', ''],
              ['', 'ngDefaultControl', ''],
            ],
            hostBindings: function (c, s) {
              1 & c &&
                J('input', function (o) {
                  return s._handleInput(o.target.value);
                })('blur', function () {
                  return s.onTouched();
                })('compositionstart', function () {
                  return s._compositionStart();
                })('compositionend', function (o) {
                  return s._compositionEnd(o.target.value);
                });
            },
            features: [A2([SC2]), t2],
          }));
        }
        return e;
      })();
      function Ut(e) {
        return (
          null == e || (('string' == typeof e || Array.isArray(e)) && 0 === e.length)
        );
      }
      function gS(e) {
        return null != e && 'number' == typeof e.length;
      }
      const d1 = new _(''),
        Ht = new _(''),
        TC2 =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class re {
        static min(n) {
          return (function CS(e) {
            return n => {
              if (Ut(n.value) || Ut(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t < e ? { min: { min: e, actual: n.value } } : null;
            };
          })(n);
        }
        static max(n) {
          return (function MS(e) {
            return n => {
              if (Ut(n.value) || Ut(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t > e ? { max: { max: e, actual: n.value } } : null;
            };
          })(n);
        }
        static required(n) {
          return (function vS(e) {
            return Ut(e.value) ? { required: !0 } : null;
          })(n);
        }
        static requiredTrue(n) {
          return (function yS(e) {
            return !0 === e.value ? null : { required: !0 };
          })(n);
        }
        static email(n) {
          return (function LS(e) {
            return Ut(e.value) || TC2.test(e.value) ? null : { email: !0 };
          })(n);
        }
        static minLength(n) {
          return (function zS(e) {
            return n =>
              Ut(n.value) || !gS(n.value)
                ? null
                : n.value.length < e
                ? { minlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static maxLength(n) {
          return (function _S(e) {
            return n =>
              gS(n.value) && n.value.length > e
                ? { maxlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static pattern(n) {
          return (function bS(e) {
            if (!e) return ro;
            let n, t;
            return (
              'string' == typeof e
                ? ((t = ''),
                  '^' !== e.charAt(0) && (t += '^'),
                  (t += e),
                  '$' !== e.charAt(e.length - 1) && (t += '$'),
                  (n = new RegExp(t)))
                : ((t = e.toString()), (n = e)),
              c => {
                if (Ut(c.value)) return null;
                const s = c.value;
                return n.test(s)
                  ? null
                  : { pattern: { requiredPattern: t, actualValue: s } };
              }
            );
          })(n);
        }
        static nullValidator(n) {
          return null;
        }
        static compose(n) {
          return SS(n);
        }
        static composeAsync(n) {
          return IS(n);
        }
      }
      function ro(e) {
        return null;
      }
      function wS(e) {
        return null != e;
      }
      function DS(e) {
        return I0(e) ? f1(e) : e;
      }
      function ES(e) {
        let n = {};
        return (
          e.forEach(t => {
            n = null != t ? { ...n, ...t } : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function NS(e, n) {
        return n.map(t => t(e));
      }
      function xS(e) {
        return e.map(n =>
          (function kC2(e) {
            return !e.validate;
          })(n)
            ? n
            : t => n.validate(t),
        );
      }
      function SS(e) {
        if (!e) return null;
        const n = e.filter(wS);
        return 0 == n.length
          ? null
          : function (t) {
              return ES(NS(t, n));
            };
      }
      function g9(e) {
        return null != e ? SS(xS(e)) : null;
      }
      function IS(e) {
        if (!e) return null;
        const n = e.filter(wS);
        return 0 == n.length
          ? null
          : function (t) {
              return (function NC2(...e) {
                const n = Jl(e),
                  { args: t, keys: c } = Fv(e),
                  s = new O2(r => {
                    const { length: o } = t;
                    if (!o) return void r.complete();
                    const i = new Array(o);
                    let a = o,
                      l = o;
                    for (let u = 0; u < o; u++) {
                      let f = !1;
                      Le(t[u]).subscribe(
                        k2(
                          r,
                          d => {
                            f || ((f = !0), l--), (i[u] = d);
                          },
                          () => a--,
                          void 0,
                          () => {
                            (!a || !f) && (l || r.next(c ? Vv(c, i) : i), r.complete());
                          },
                        ),
                      );
                    }
                  });
                return n ? s.pipe(Pv(n)) : s;
              })(NS(t, n).map(DS)).pipe(s2(ES));
            };
      }
      function C9(e) {
        return null != e ? IS(xS(e)) : null;
      }
      function AS(e, n) {
        return null === e ? [n] : Array.isArray(e) ? [...e, n] : [e, n];
      }
      function TS(e) {
        return e._rawValidators;
      }
      function kS(e) {
        return e._rawAsyncValidators;
      }
      function M9(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function oo(e, n) {
        return Array.isArray(e) ? e.includes(n) : e === n;
      }
      function RS(e, n) {
        const t = M9(n);
        return (
          M9(e).forEach(s => {
            oo(t, s) || t.push(s);
          }),
          t
        );
      }
      function OS(e, n) {
        return M9(n).filter(t => !oo(e, t));
      }
      class FS {
        constructor() {
          (this._rawValidators = []),
            (this._rawAsyncValidators = []),
            (this._onDestroyCallbacks = []);
        }
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        _setValidators(n) {
          (this._rawValidators = n || []),
            (this._composedValidatorFn = g9(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []),
            (this._composedAsyncValidatorFn = C9(this._rawAsyncValidators));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(n) {
          this._onDestroyCallbacks.push(n);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(n => n()), (this._onDestroyCallbacks = []);
        }
        reset(n = void 0) {
          this.control && this.control.reset(n);
        }
        hasError(n, t) {
          return !!this.control && this.control.hasError(n, t);
        }
        getError(n, t) {
          return this.control ? this.control.getError(n, t) : null;
        }
      }
      class w1 extends FS {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class $t extends FS {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class PS {
        constructor(n) {
          this._cd = n;
        }
        get isTouched() {
          return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
        }
        get isInvalid() {
          return !!this._cd?.control?.invalid;
        }
        get isPending() {
          return !!this._cd?.control?.pending;
        }
        get isSubmitted() {
          return this._cd?._submitted?.(), !!this._cd?.submitted;
        }
      }
      let VS = (() => {
          class e extends PS {
            constructor(t) {
              super(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z($t, 2));
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (c, s) {
                2 & c &&
                  ps('ng-untouched', s.isUntouched)('ng-touched', s.isTouched)(
                    'ng-pristine',
                    s.isPristine,
                  )('ng-dirty', s.isDirty)('ng-valid', s.isValid)(
                    'ng-invalid',
                    s.isInvalid,
                  )('ng-pending', s.isPending);
              },
              features: [t2],
            }));
          }
          return e;
        })(),
        BS = (() => {
          class e extends PS {
            constructor(t) {
              super(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(w1, 10));
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [
                ['', 'formGroupName', ''],
                ['', 'formArrayName', ''],
                ['', 'ngModelGroup', ''],
                ['', 'formGroup', ''],
                ['form', 3, 'ngNoForm', ''],
                ['', 'ngForm', ''],
              ],
              hostVars: 16,
              hostBindings: function (c, s) {
                2 & c &&
                  ps('ng-untouched', s.isUntouched)('ng-touched', s.isTouched)(
                    'ng-pristine',
                    s.isPristine,
                  )('ng-dirty', s.isDirty)('ng-valid', s.isValid)(
                    'ng-invalid',
                    s.isInvalid,
                  )('ng-pending', s.isPending)('ng-submitted', s.isSubmitted);
              },
              features: [t2],
            }));
          }
          return e;
        })();
      const bc = 'VALID',
        ao = 'INVALID',
        dn = 'PENDING',
        wc = 'DISABLED';
      class hn {}
      class US extends hn {
        constructor(n, t) {
          super(), (this.value = n), (this.source = t);
        }
      }
      class L9 extends hn {
        constructor(n, t) {
          super(), (this.pristine = n), (this.source = t);
        }
      }
      class z9 extends hn {
        constructor(n, t) {
          super(), (this.touched = n), (this.source = t);
        }
      }
      class lo extends hn {
        constructor(n, t) {
          super(), (this.status = n), (this.source = t);
        }
      }
      class VC2 extends hn {
        constructor(n) {
          super(), (this.source = n);
        }
      }
      class BC2 extends hn {
        constructor(n) {
          super(), (this.source = n);
        }
      }
      function _9(e) {
        return (uo(e) ? e.validators : e) || null;
      }
      function b9(e, n) {
        return (uo(n) ? n.asyncValidators : e) || null;
      }
      function uo(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function HS(e, n, t) {
        const c = e.controls;
        if (!(n ? Object.keys(c) : c).length) throw new L(1e3, '');
        if (!c[t]) throw new L(1001, '');
      }
      function $S(e, n, t) {
        e._forEachChild((c, s) => {
          if (void 0 === t[s]) throw new L(1002, '');
        });
      }
      class fo {
        constructor(n, t) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = null),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this._status = b3(() => this.statusReactive())),
            (this.statusReactive = Dt(void 0)),
            (this._pristine = b3(() => this.pristineReactive())),
            (this.pristineReactive = Dt(!0)),
            (this._touched = b3(() => this.touchedReactive())),
            (this.touchedReactive = Dt(!1)),
            (this._events = new h1()),
            (this.events = this._events.asObservable()),
            (this._onDisabledChange = []),
            this._assignValidators(n),
            this._assignAsyncValidators(t);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(n) {
          this._rawValidators = this._composedValidatorFn = n;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(n) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
        }
        get parent() {
          return this._parent;
        }
        get status() {
          return Pe(this.statusReactive);
        }
        set status(n) {
          Pe(() => this.statusReactive.set(n));
        }
        get valid() {
          return this.status === bc;
        }
        get invalid() {
          return this.status === ao;
        }
        get pending() {
          return this.status == dn;
        }
        get disabled() {
          return this.status === wc;
        }
        get enabled() {
          return this.status !== wc;
        }
        get pristine() {
          return Pe(this.pristineReactive);
        }
        set pristine(n) {
          Pe(() => this.pristineReactive.set(n));
        }
        get dirty() {
          return !this.pristine;
        }
        get touched() {
          return Pe(this.touchedReactive);
        }
        set touched(n) {
          Pe(() => this.touchedReactive.set(n));
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn
            ? this._updateOn
            : this.parent
            ? this.parent.updateOn
            : 'change';
        }
        setValidators(n) {
          this._assignValidators(n);
        }
        setAsyncValidators(n) {
          this._assignAsyncValidators(n);
        }
        addValidators(n) {
          this.setValidators(RS(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(RS(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(OS(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(OS(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return oo(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return oo(this._rawAsyncValidators, n);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(n = {}) {
          const t = !1 === this.touched;
          this.touched = !0;
          const c = n.sourceControl ?? this;
          this._parent &&
            !n.onlySelf &&
            this._parent.markAsTouched({ ...n, sourceControl: c }),
            t && !1 !== n.emitEvent && this._events.next(new z9(!0, c));
        }
        markAllAsTouched(n = {}) {
          this.markAsTouched({
            onlySelf: !0,
            emitEvent: n.emitEvent,
            sourceControl: this,
          }),
            this._forEachChild(t => t.markAllAsTouched(n));
        }
        markAsUntouched(n = {}) {
          const t = !0 === this.touched;
          (this.touched = !1), (this._pendingTouched = !1);
          const c = n.sourceControl ?? this;
          this._forEachChild(s => {
            s.markAsUntouched({ onlySelf: !0, emitEvent: n.emitEvent, sourceControl: c });
          }),
            this._parent && !n.onlySelf && this._parent._updateTouched(n, c),
            t && !1 !== n.emitEvent && this._events.next(new z9(!1, c));
        }
        markAsDirty(n = {}) {
          const t = !0 === this.pristine;
          this.pristine = !1;
          const c = n.sourceControl ?? this;
          this._parent &&
            !n.onlySelf &&
            this._parent.markAsDirty({ ...n, sourceControl: c }),
            t && !1 !== n.emitEvent && this._events.next(new L9(!1, c));
        }
        markAsPristine(n = {}) {
          const t = !1 === this.pristine;
          (this.pristine = !0), (this._pendingDirty = !1);
          const c = n.sourceControl ?? this;
          this._forEachChild(s => {
            s.markAsPristine({ onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n, c),
            t && !1 !== n.emitEvent && this._events.next(new L9(!0, c));
        }
        markAsPending(n = {}) {
          this.status = dn;
          const t = n.sourceControl ?? this;
          !1 !== n.emitEvent &&
            (this._events.next(new lo(this.status, t)),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !n.onlySelf &&
              this._parent.markAsPending({ ...n, sourceControl: t });
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = wc),
            (this.errors = null),
            this._forEachChild(s => {
              s.disable({ ...n, onlySelf: !0 });
            }),
            this._updateValue();
          const c = n.sourceControl ?? this;
          !1 !== n.emitEvent &&
            (this._events.next(new US(this.value, c)),
            this._events.next(new lo(this.status, c)),
            this.valueChanges.emit(this.value),
            this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...n, skipPristineCheck: t }, this),
            this._onDisabledChange.forEach(s => s(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = bc),
            this._forEachChild(c => {
              c.enable({ ...n, onlySelf: !0 });
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
            this._updateAncestors({ ...n, skipPristineCheck: t }, this),
            this._onDisabledChange.forEach(c => c(!1));
        }
        _updateAncestors(n, t) {
          this._parent &&
            !n.onlySelf &&
            (this._parent.updateValueAndValidity(n),
            n.skipPristineCheck || this._parent._updatePristine({}, t),
            this._parent._updateTouched({}, t));
        }
        setParent(n) {
          this._parent = n;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(n = {}) {
          if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
            const c = this._cancelExistingSubscription();
            (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === bc || this.status === dn) &&
                this._runAsyncValidator(c, n.emitEvent);
          }
          const t = n.sourceControl ?? this;
          !1 !== n.emitEvent &&
            (this._events.next(new US(this.value, t)),
            this._events.next(new lo(this.status, t)),
            this.valueChanges.emit(this.value),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !n.onlySelf &&
              this._parent.updateValueAndValidity({ ...n, sourceControl: t });
        }
        _updateTreeValidity(n = { emitEvent: !0 }) {
          this._forEachChild(t => t._updateTreeValidity(n)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? wc : bc;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n, t) {
          if (this.asyncValidator) {
            (this.status = dn),
              (this._hasOwnPendingAsyncValidator = { emitEvent: !1 !== t });
            const c = DS(this.asyncValidator(this));
            this._asyncValidationSubscription = c.subscribe(s => {
              (this._hasOwnPendingAsyncValidator = null),
                this.setErrors(s, { emitEvent: t, shouldHaveEmitted: n });
            });
          }
        }
        _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
            const n = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
            return (this._hasOwnPendingAsyncValidator = null), n;
          }
          return !1;
        }
        setErrors(n, t = {}) {
          (this.errors = n),
            this._updateControlsErrors(!1 !== t.emitEvent, this, t.shouldHaveEmitted);
        }
        get(n) {
          let t = n;
          return null == t || (Array.isArray(t) || (t = t.split('.')), 0 === t.length)
            ? null
            : t.reduce((c, s) => c && c._find(s), this);
        }
        getError(n, t) {
          const c = t ? this.get(t) : this;
          return c && c.errors ? c.errors[n] : null;
        }
        hasError(n, t) {
          return !!this.getError(n, t);
        }
        get root() {
          let n = this;
          for (; n._parent; ) n = n._parent;
          return n;
        }
        _updateControlsErrors(n, t, c) {
          (this.status = this._calculateStatus()),
            n && this.statusChanges.emit(this.status),
            (n || c) && this._events.next(new lo(this.status, t)),
            this._parent && this._parent._updateControlsErrors(n, t, c);
        }
        _initObservables() {
          (this.valueChanges = new X()), (this.statusChanges = new X());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? wc
            : this.errors
            ? ao
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(dn)
            ? dn
            : this._anyControlsHaveStatus(ao)
            ? ao
            : bc;
        }
        _anyControlsHaveStatus(n) {
          return this._anyControls(t => t.status === n);
        }
        _anyControlsDirty() {
          return this._anyControls(n => n.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(n => n.touched);
        }
        _updatePristine(n, t) {
          const c = !this._anyControlsDirty(),
            s = this.pristine !== c;
          (this.pristine = c),
            this._parent && !n.onlySelf && this._parent._updatePristine(n, t),
            s && this._events.next(new L9(this.pristine, t));
        }
        _updateTouched(n = {}, t) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new z9(this.touched, t)),
            this._parent && !n.onlySelf && this._parent._updateTouched(n, t);
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          uo(n) && null != n.updateOn && (this._updateOn = n.updateOn);
        }
        _parentMarkedDirty(n) {
          return (
            !n &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(n) {
          return null;
        }
        _assignValidators(n) {
          (this._rawValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedValidatorFn = (function jC2(e) {
              return Array.isArray(e) ? g9(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(n) {
          (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedAsyncValidatorFn = (function UC2(e) {
              return Array.isArray(e) ? C9(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Dc extends fo {
        constructor(n, t, c) {
          super(_9(t), b9(c, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(n, t) {
          return this.controls[n]
            ? this.controls[n]
            : ((this.controls[n] = t),
              t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange),
              t);
        }
        addControl(n, t, c = {}) {
          this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: c.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(n, t = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        setControl(n, t, c = {}) {
          this.controls[n] && this.controls[n]._registerOnCollectionChange(() => {}),
            delete this.controls[n],
            t && this.registerControl(n, t),
            this.updateValueAndValidity({ emitEvent: c.emitEvent }),
            this._onCollectionChange();
        }
        contains(n) {
          return this.controls.hasOwnProperty(n) && this.controls[n].enabled;
        }
        setValue(n, t = {}) {
          $S(this, 0, n),
            Object.keys(n).forEach(c => {
              HS(this, !0, c),
                this.controls[c].setValue(n[c], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (Object.keys(n).forEach(c => {
              const s = this.controls[c];
              s && s.patchValue(n[c], { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = {}, t = {}) {
          this._forEachChild((c, s) => {
            c.reset(n ? n[s] : null, { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t, this),
            this._updateTouched(t, this),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this._reduceChildren({}, (n, t, c) => ((n[c] = t.getRawValue()), n));
        }
        _syncPendingControls() {
          let n = this._reduceChildren(!1, (t, c) => !!c._syncPendingControls() || t);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          Object.keys(this.controls).forEach(t => {
            const c = this.controls[t];
            c && n(c, t);
          });
        }
        _setUpControls() {
          this._forEachChild(n => {
            n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(n) {
          for (const [t, c] of Object.entries(this.controls))
            if (this.contains(t) && n(c)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (t, c, s) => ((c.enabled || this.disabled) && (t[s] = c.value), t),
          );
        }
        _reduceChildren(n, t) {
          let c = n;
          return (
            this._forEachChild((s, r) => {
              c = t(c, s, r);
            }),
            c
          );
        }
        _allControlsDisabled() {
          for (const n of Object.keys(this.controls))
            if (this.controls[n].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(n) {
          return this.controls.hasOwnProperty(n) ? this.controls[n] : null;
        }
      }
      class GS extends Dc {}
      const pn = new _('CallSetDisabledState', { providedIn: 'root', factory: () => ho }),
        ho = 'always';
      function Ec(e, n, t = ho) {
        w9(e, n),
          n.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === t) &&
            n.valueAccessor.setDisabledState?.(e.disabled),
          (function $C2(e, n) {
            n.valueAccessor.registerOnChange(t => {
              (e._pendingValue = t),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && qS(e, n);
            });
          })(e, n),
          (function qC2(e, n) {
            const t = (c, s) => {
              n.valueAccessor.writeValue(c), s && n.viewToModelUpdate(c);
            };
            e.registerOnChange(t),
              n._registerOnDestroy(() => {
                e._unregisterOnChange(t);
              });
          })(e, n),
          (function GC2(e, n) {
            n.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && qS(e, n),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, n),
          (function HC2(e, n) {
            if (n.valueAccessor.setDisabledState) {
              const t = c => {
                n.valueAccessor.setDisabledState(c);
              };
              e.registerOnDisabledChange(t),
                n._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(t);
                });
            }
          })(e, n);
      }
      function mo(e, n, t = !0) {
        const c = () => {};
        n.valueAccessor &&
          (n.valueAccessor.registerOnChange(c), n.valueAccessor.registerOnTouched(c)),
          Co(e, n),
          e && (n._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(() => {}));
      }
      function go(e, n) {
        e.forEach(t => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(n);
        });
      }
      function w9(e, n) {
        const t = TS(e);
        null !== n.validator
          ? e.setValidators(AS(t, n.validator))
          : 'function' == typeof t && e.setValidators([t]);
        const c = kS(e);
        null !== n.asyncValidator
          ? e.setAsyncValidators(AS(c, n.asyncValidator))
          : 'function' == typeof c && e.setAsyncValidators([c]);
        const s = () => e.updateValueAndValidity();
        go(n._rawValidators, s), go(n._rawAsyncValidators, s);
      }
      function Co(e, n) {
        let t = !1;
        if (null !== e) {
          if (null !== n.validator) {
            const s = TS(e);
            if (Array.isArray(s) && s.length > 0) {
              const r = s.filter(o => o !== n.validator);
              r.length !== s.length && ((t = !0), e.setValidators(r));
            }
          }
          if (null !== n.asyncValidator) {
            const s = kS(e);
            if (Array.isArray(s) && s.length > 0) {
              const r = s.filter(o => o !== n.asyncValidator);
              r.length !== s.length && ((t = !0), e.setAsyncValidators(r));
            }
          }
        }
        const c = () => {};
        return go(n._rawValidators, c), go(n._rawAsyncValidators, c), t;
      }
      function qS(e, n) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function ZS(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function QS(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const Gt = class extends fo {
        constructor(n = null, t, c) {
          super(_9(t), b9(c, t)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(n),
            this._setUpdateStrategy(t),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            uo(t) &&
              (t.nonNullable || t.initialValueIsDefault) &&
              (this.defaultValue = QS(n) ? n.value : n);
        }
        setValue(n, t = {}) {
          (this.value = this._pendingValue = n),
            this._onChange.length &&
              !1 !== t.emitModelToViewChange &&
              this._onChange.forEach(c => c(this.value, !1 !== t.emitViewToModelChange)),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          this.setValue(n, t);
        }
        reset(n = this.defaultValue, t = {}) {
          this._applyFormState(n),
            this.markAsPristine(t),
            this.markAsUntouched(t),
            this.setValue(this.value, t),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(n) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(n) {
          this._onChange.push(n);
        }
        _unregisterOnChange(n) {
          ZS(this._onChange, n);
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _unregisterOnDisabledChange(n) {
          ZS(this._onDisabledChange, n);
        }
        _forEachChild(n) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, {
              onlySelf: !0,
              emitModelToViewChange: !1,
            }),
            0)
          );
        }
        _applyFormState(n) {
          QS(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      };
      Promise.resolve();
      let tI = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵdir = O({
            type: e,
            selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
            hostAttrs: ['novalidate', ''],
          }));
        }
        return e;
      })();
      const S9 = new _(''),
        rM2 = { provide: $t, useExisting: v2(() => I9) };
      let I9 = (() => {
        class e extends $t {
          set isDisabled(t) {}
          static #e = (this._ngModelWarningSentOnce = !1);
          constructor(t, c, s, r, o) {
            super(),
              (this._ngModelWarningConfig = r),
              (this.callSetDisabledState = o),
              (this.update = new X()),
              (this._ngModelWarningSent = !1),
              this._setValidators(t),
              this._setAsyncValidators(c),
              (this.valueAccessor = (function N9(e, n) {
                if (!n) return null;
                let t, c, s;
                return (
                  Array.isArray(n),
                  n.forEach(r => {
                    r.constructor === so
                      ? (t = r)
                      : (function ZC2(e) {
                          return Object.getPrototypeOf(e.constructor) === B3;
                        })(r)
                      ? (c = r)
                      : (s = r);
                  }),
                  s || c || t || null
                );
              })(0, s));
          }
          ngOnChanges(t) {
            if (this._isControlChanged(t)) {
              const c = t.form.previousValue;
              c && mo(c, this, !1),
                Ec(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function E9(e, n) {
              if (!e.hasOwnProperty('model')) return !1;
              const t = e.model;
              return !!t.isFirstChange() || !Object.is(n, t.currentValue);
            })(t, this.viewModel) &&
              (this.form.setValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && mo(this.form, this, !1);
          }
          get path() {
            return [];
          }
          get control() {
            return this.form;
          }
          viewToModelUpdate(t) {
            (this.viewModel = t), this.update.emit(t);
          }
          _isControlChanged(t) {
            return t.hasOwnProperty('form');
          }
          static #t = (this.ɵfac = function (c) {
            return new (c || e)(z(d1, 10), z(Ht, 10), z(We, 10), z(S9, 8), z(pn, 8));
          });
          static #n = (this.ɵdir = O({
            type: e,
            selectors: [['', 'formControl', '']],
            inputs: {
              form: [0, 'formControl', 'form'],
              isDisabled: [0, 'disabled', 'isDisabled'],
              model: [0, 'ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            exportAs: ['ngForm'],
            features: [A2([rM2]), t2, m1],
          }));
        }
        return e;
      })();
      const oM2 = { provide: w1, useExisting: v2(() => Mo) };
      let Mo = (() => {
          class e extends w1 {
            get submitted() {
              return Pe(this._submittedReactive);
            }
            set submitted(t) {
              this._submittedReactive.set(t);
            }
            constructor(t, c, s) {
              super(),
                (this.callSetDisabledState = s),
                (this._submitted = b3(() => this._submittedReactive())),
                (this._submittedReactive = Dt(!1)),
                (this._onCollectionChange = () => this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new X()),
                this._setValidators(t),
                this._setAsyncValidators(c);
            }
            ngOnChanges(t) {
              this._checkFormPresent(),
                t.hasOwnProperty('form') &&
                  (this._updateValidators(),
                  this._updateDomValue(),
                  this._updateRegistrations(),
                  (this._oldForm = this.form));
            }
            ngOnDestroy() {
              this.form &&
                (Co(this.form, this),
                this.form._onCollectionChange === this._onCollectionChange &&
                  this.form._registerOnCollectionChange(() => {}));
            }
            get formDirective() {
              return this;
            }
            get control() {
              return this.form;
            }
            get path() {
              return [];
            }
            addControl(t) {
              const c = this.form.get(t.path);
              return (
                Ec(c, t, this.callSetDisabledState),
                c.updateValueAndValidity({ emitEvent: !1 }),
                this.directives.push(t),
                c
              );
            }
            getControl(t) {
              return this.form.get(t.path);
            }
            removeControl(t) {
              mo(t.control || null, t, !1),
                (function QC2(e, n) {
                  const t = e.indexOf(n);
                  t > -1 && e.splice(t, 1);
                })(this.directives, t);
            }
            addFormGroup(t) {
              this._setUpFormContainer(t);
            }
            removeFormGroup(t) {
              this._cleanUpFormContainer(t);
            }
            getFormGroup(t) {
              return this.form.get(t.path);
            }
            addFormArray(t) {
              this._setUpFormContainer(t);
            }
            removeFormArray(t) {
              this._cleanUpFormContainer(t);
            }
            getFormArray(t) {
              return this.form.get(t.path);
            }
            updateModel(t, c) {
              this.form.get(t.path).setValue(c);
            }
            onSubmit(t) {
              return (
                this._submittedReactive.set(!0),
                (function YS(e, n) {
                  e._syncPendingControls(),
                    n.forEach(t => {
                      const c = t.control;
                      'submit' === c.updateOn &&
                        c._pendingChange &&
                        (t.viewToModelUpdate(c._pendingValue), (c._pendingChange = !1));
                    });
                })(this.form, this.directives),
                this.ngSubmit.emit(t),
                this.form._events.next(new VC2(this.control)),
                'dialog' === t?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(t = void 0) {
              this.form.reset(t),
                this._submittedReactive.set(!1),
                this.form._events.next(new BC2(this.form));
            }
            _updateDomValue() {
              this.directives.forEach(t => {
                const c = t.control,
                  s = this.form.get(t.path);
                c !== s &&
                  (mo(c || null, t),
                  (e => e instanceof Gt)(s) &&
                    (Ec(s, t, this.callSetDisabledState), (t.control = s)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(t) {
              const c = this.form.get(t.path);
              (function WS(e, n) {
                w9(e, n);
              })(c, t),
                c.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(t) {
              if (this.form) {
                const c = this.form.get(t.path);
                c &&
                  (function WC2(e, n) {
                    return Co(e, n);
                  })(c, t) &&
                  c.updateValueAndValidity({ emitEvent: !1 });
              }
            }
            _updateRegistrations() {
              this.form._registerOnCollectionChange(this._onCollectionChange),
                this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
              w9(this.form, this), this._oldForm && Co(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(d1, 10), z(Ht, 10), z(pn, 8));
            });
            static #t = (this.ɵdir = O({
              type: e,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (c, s) {
                1 & c &&
                  J('submit', function (o) {
                    return s.onSubmit(o);
                  })('reset', function () {
                    return s.onReset();
                  });
              },
              inputs: { form: [0, 'formGroup', 'form'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [A2([oM2]), t2, m1],
            }));
          }
          return e;
        })(),
        bM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = X3({ type: e }));
            static #n = (this.ɵinj = Qt({}));
          }
          return e;
        })();
      class MI extends fo {
        constructor(n, t, c) {
          super(_9(t), b9(c, t)),
            (this.controls = n),
            this._initObservables(),
            this._setUpdateStrategy(t),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(n) {
          return this.controls[this._adjustIndex(n)];
        }
        push(n, t = {}) {
          this.controls.push(n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }),
            this._onCollectionChange();
        }
        insert(n, t, c = {}) {
          this.controls.splice(n, 0, t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: c.emitEvent });
        }
        removeAt(n, t = {}) {
          let c = this._adjustIndex(n);
          c < 0 && (c = 0),
            this.controls[c] && this.controls[c]._registerOnCollectionChange(() => {}),
            this.controls.splice(c, 1),
            this.updateValueAndValidity({ emitEvent: t.emitEvent });
        }
        setControl(n, t, c = {}) {
          let s = this._adjustIndex(n);
          s < 0 && (s = 0),
            this.controls[s] && this.controls[s]._registerOnCollectionChange(() => {}),
            this.controls.splice(s, 1),
            t && (this.controls.splice(s, 0, t), this._registerControl(t)),
            this.updateValueAndValidity({ emitEvent: c.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(n, t = {}) {
          $S(this, 0, n),
            n.forEach((c, s) => {
              HS(this, !1, s),
                this.at(s).setValue(c, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t);
        }
        patchValue(n, t = {}) {
          null != n &&
            (n.forEach((c, s) => {
              this.at(s) &&
                this.at(s).patchValue(c, { onlySelf: !0, emitEvent: t.emitEvent });
            }),
            this.updateValueAndValidity(t));
        }
        reset(n = [], t = {}) {
          this._forEachChild((c, s) => {
            c.reset(n[s], { onlySelf: !0, emitEvent: t.emitEvent });
          }),
            this._updatePristine(t, this),
            this._updateTouched(t, this),
            this.updateValueAndValidity(t);
        }
        getRawValue() {
          return this.controls.map(n => n.getRawValue());
        }
        clear(n = {}) {
          this.controls.length < 1 ||
            (this._forEachChild(t => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }));
        }
        _adjustIndex(n) {
          return n < 0 ? n + this.length : n;
        }
        _syncPendingControls() {
          let n = this.controls.reduce((t, c) => !!c._syncPendingControls() || t, !1);
          return n && this.updateValueAndValidity({ onlySelf: !0 }), n;
        }
        _forEachChild(n) {
          this.controls.forEach((t, c) => {
            n(t, c);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(n => n.enabled || this.disabled)
            .map(n => n.value);
        }
        _anyControls(n) {
          return this.controls.some(t => t.enabled && n(t));
        }
        _setUpControls() {
          this._forEachChild(n => this._registerControl(n));
        }
        _allControlsDisabled() {
          for (const n of this.controls) if (n.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(n) {
          n.setParent(this), n._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(n) {
          return this.at(n) ?? null;
        }
      }
      function vI(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let wM2 = (() => {
          class e {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const t = new e();
              return (t.useNonNullable = !0), t;
            }
            group(t, c = null) {
              const s = this._reduceControls(t);
              let r = {};
              return (
                vI(c)
                  ? (r = c)
                  : null !== c &&
                    ((r.validators = c.validator),
                    (r.asyncValidators = c.asyncValidator)),
                new Dc(s, r)
              );
            }
            record(t, c = null) {
              const s = this._reduceControls(t);
              return new GS(s, c);
            }
            control(t, c, s) {
              let r = {};
              return this.useNonNullable
                ? (vI(c) ? (r = c) : ((r.validators = c), (r.asyncValidators = s)),
                  new Gt(t, { ...r, nonNullable: !0 }))
                : new Gt(t, c, s);
            }
            array(t, c, s) {
              const r = t.map(o => this._createControl(o));
              return new MI(r, c, s);
            }
            _reduceControls(t) {
              const c = {};
              return (
                Object.keys(t).forEach(s => {
                  c[s] = this._createControl(t[s]);
                }),
                c
              );
            }
            _createControl(t) {
              return t instanceof Gt || t instanceof fo
                ? t
                : Array.isArray(t)
                ? this.control(
                    t[0],
                    t.length > 1 ? t[1] : null,
                    t.length > 2 ? t[2] : null,
                  )
                : this.control(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        yI = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  { provide: S9, useValue: t.warnOnNgModelWithFormControl ?? 'always' },
                  { provide: pn, useValue: t.callSetDisabledState ?? ho },
                ],
              };
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = X3({ type: e }));
            static #n = (this.ɵinj = Qt({ imports: [bM2] }));
          }
          return e;
        })();
      function DM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'p', 2),
            J('click', function () {
              return B1(t), j1(n2().onClick());
            }),
            z3(2),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2();
          I(),
            y3('margin', t.margin),
            N('ngClass', t.textColor),
            I(),
            xt(' ', t.value, ' ');
        }
      }
      function EM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'p', 3),
            J('click', function () {
              return B1(t), j1(n2().onClick());
            }),
            z3(2),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2();
          I(),
            y3('margin', t.margin),
            N('ngClass', t.textColor),
            I(),
            xt(' ', t.value, ' ');
        }
      }
      function NM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'h1', 4),
            J('click', function () {
              return B1(t), j1(n2().onClick());
            }),
            z3(2),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2();
          I(),
            y3('margin', t.margin),
            N('ngClass', t.textColor),
            I(),
            xt(' ', t.value, ' ');
        }
      }
      function xM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'h2', 5),
            J('click', function () {
              return B1(t), j1(n2().onClick());
            }),
            z3(2),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2();
          I(),
            y3('margin', t.margin),
            N('ngClass', t.textColor),
            I(),
            xt(' ', t.value, ' ');
        }
      }
      function SM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'h3', 6),
            J('click', function () {
              return B1(t), j1(n2().onClick());
            }),
            z3(2),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2();
          I(),
            y3('margin', t.margin),
            N('ngClass', t.textColor),
            I(),
            xt(' ', t.value, ' ');
        }
      }
      let oe = (() => {
        class e {
          constructor() {
            (this.type = 'paragraph'),
              (this.textColor = 'text__default'),
              (this.clickEvent = new X());
          }
          onClick() {
            this.clickEvent.emit();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = Y({
            type: e,
            selectors: [['lib-text']],
            inputs: {
              value: 'value',
              type: 'type',
              textColor: 'textColor',
              margin: 'margin',
            },
            outputs: { clickEvent: 'clickEvent' },
            standalone: !0,
            features: [Q],
            decls: 6,
            vars: 6,
            consts: [
              [3, 'ngSwitch'],
              [4, 'ngSwitchCase'],
              [1, 'text', 'text__tiny', 3, 'click', 'ngClass'],
              [1, 'text', 'text__paragraph', 3, 'click', 'ngClass'],
              [1, 'text', 'text__header1', 3, 'click', 'ngClass'],
              [1, 'text', 'text__header2', 3, 'click', 'ngClass'],
              [1, 'text', 'text__header3', 3, 'click', 'ngClass'],
            ],
            template: function (c, s) {
              1 & c &&
                (S2(0, 0),
                me(1, DM2, 3, 4, 'ng-container', 1)(2, EM2, 3, 4, 'ng-container', 1)(
                  3,
                  NM2,
                  3,
                  4,
                  'ng-container',
                  1,
                )(4, xM2, 3, 4, 'ng-container', 1)(5, SM2, 3, 4, 'ng-container', 1),
                I2()),
                2 & c &&
                  (N('ngSwitch', s.type),
                  I(),
                  N('ngSwitchCase', 'tiny'),
                  I(),
                  N('ngSwitchCase', 'paragraph'),
                  I(),
                  N('ngSwitchCase', 'header1'),
                  I(),
                  N('ngSwitchCase', 'header2'),
                  I(),
                  N('ngSwitchCase', 'header3'));
            },
            dependencies: [at, V0, Ks, YM],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.text[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-style:normal;margin:0}',
            ],
          }));
        }
        return e;
      })();
      const IM2 = ['self'];
      function AM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'lib-text', 3),
            J('clickEvent', function () {
              return B1(t), j1(n2().onClick());
            }),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2();
          I(), N('value', t.control.label.value)('textColor', t.textColor);
        }
      }
      let TM2 = (() => {
        class e {
          constructor() {
            this.textColor = 'text__tertiary';
          }
          onFocus() {
            this.textColor = 'text__accent';
          }
          onBlur() {
            this.textColor = 'text__tertiary';
          }
          onClick() {
            this.self.nativeElement.focus();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = Y({
            type: e,
            selectors: [['lib-input']],
            viewQuery: function (c, s) {
              if (
                (1 & c &&
                  (function Pg(e, n, t) {
                    Ip(e, n, t);
                  })(IM2, 5),
                2 & c)
              ) {
                let r;
                (function qa(e) {
                  const n = M(),
                    t = Z(),
                    c = ki();
                  m6(c + 1);
                  const s = ga(t, c);
                  if (
                    e.dirty &&
                    (function ck(e) {
                      return !(4 & ~e[A]);
                    })(n) === !(2 & ~s.metadata.flags)
                  ) {
                    if (null === s.matches) e.reset([]);
                    else {
                      const r = kp(n, c);
                      e.reset(r, ud), e.notifyOnChanges();
                    }
                    return !0;
                  }
                  return !1;
                })((r = Wa())) && (s.self = r.first);
              }
            },
            inputs: { form: 'form', control: 'control' },
            standalone: !0,
            features: [Q],
            decls: 3,
            vars: 5,
            consts: [
              ['self', ''],
              [4, 'ngIf'],
              [
                1,
                'input',
                3,
                'focus',
                'blur',
                'value',
                'type',
                'placeholder',
                'formControl',
              ],
              ['type', 'tiny', 3, 'clickEvent', 'value', 'textColor'],
            ],
            template: function (c, s) {
              if (1 & c) {
                const r = te();
                me(0, AM2, 2, 2, 'ng-container', 1),
                  U(1, 'input', 2, 0),
                  J('focus', function () {
                    return B1(r), j1(s.onFocus());
                  })('blur', function () {
                    return B1(r), j1(s.onBlur());
                  }),
                  H();
              }
              2 & c &&
                (N('ngIf', s.control.label.isVisible),
                I(),
                N('value', s.control.input.defaultValue)('type', s.control.input.type)(
                  'placeholder',
                  s.control.input.placeholder,
                )('formControl', s.form));
            },
            dependencies: [at, Qs, yI, so, VS, I9, oe],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.input[_ngcontent-%COMP%]{display:block}',
            ],
          }));
        }
        return e;
      })();
      const kM2 = ['*'];
      let F9 = (() => {
          class e {
            constructor() {
              (this.isSubmit = !1),
                (this.clickEvent = new X()),
                (this.mouseEnterEvent = new X()),
                (this.mouseLeaveEvent = new X());
            }
            onClick() {
              this.control.setValue(!0), !this.isSubmit && this.clickEvent.emit();
            }
            onMouseEnter() {
              this.mouseEnterEvent.emit();
            }
            onMouseLeave() {
              this.mouseLeaveEvent.emit();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-button']],
              inputs: { control: 'control', isSubmit: 'isSubmit' },
              outputs: {
                clickEvent: 'clickEvent',
                mouseEnterEvent: 'mouseEnterEvent',
                mouseLeaveEvent: 'mouseLeaveEvent',
              },
              standalone: !0,
              features: [Q],
              ngContentSelectors: kM2,
              decls: 2,
              vars: 1,
              consts: [[1, 'button', 3, 'click', 'mouseenter', 'mouseleave', 'type']],
              template: function (c, s) {
                1 & c &&
                  (b0(),
                  U(0, 'button', 0),
                  J('click', function () {
                    return s.onClick();
                  })('mouseenter', function () {
                    return s.onMouseEnter();
                  })('mouseleave', function () {
                    return s.onMouseLeave();
                  }),
                  w0(1),
                  H()),
                  2 & c && N('type', s.isSubmit ? 'submit' : 'button');
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.button[_ngcontent-%COMP%]{display:block}',
              ],
            }));
          }
          return e;
        })(),
        RM2 = (() => {
          class e {
            constructor() {
              this.clickEvent = new X();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-button-text']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 3,
              consts: [
                [3, 'clickEvent', 'control', 'isSubmit'],
                ['textColor', 'text__primary', 'type', 'header3', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-button', 0),
                  J('clickEvent', function () {
                    return s.onClickEvent();
                  }),
                  p2(1, 'lib-text', 1),
                  H()),
                  2 & c &&
                    (N('control', s.form)('isSubmit', s.control.isSubmit),
                    I(),
                    N('value', s.control.label));
              },
              dependencies: [F9, oe],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        OM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-icon']],
              inputs: { src: 'src', alt: 'alt' },
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 2,
              consts: [[1, 'icon', 3, 'src', 'alt']],
              template: function (c, s) {
                1 & c && p2(0, 'img', 0), 2 & c && N('src', s.src, y8)('alt', s.alt);
              },
              styles: [
                '[_nghost-%COMP%]{display:contents}.icon[_ngcontent-%COMP%]{display:block;height:100%}',
              ],
            }));
          }
          return e;
        })(),
        FM2 = (() => {
          class e {
            constructor() {
              this.clickEvent = new X();
            }
            ngOnInit() {
              this.icon = this.control.icon;
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            onMouseEnterEvent() {
              this.icon = this.control.icon;
            }
            onMouseLeaveEvent() {
              this.icon = this.control.icon;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-button-icon']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 4,
              consts: [
                [
                  3,
                  'clickEvent',
                  'mouseEnterEvent',
                  'mouseLeaveEvent',
                  'control',
                  'isSubmit',
                ],
                [3, 'src', 'alt'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-button', 0),
                  J('clickEvent', function () {
                    return s.onClickEvent();
                  })('mouseEnterEvent', function () {
                    return s.onMouseEnterEvent();
                  })('mouseLeaveEvent', function () {
                    return s.onMouseLeaveEvent();
                  }),
                  p2(1, 'lib-icon', 1),
                  H()),
                  2 & c &&
                    (N('control', s.form)('isSubmit', s.control.isSubmit),
                    I(),
                    N('src', s.control.icon)('alt', s.control.alt));
              },
              dependencies: [F9, OM2],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function PM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-text', 4), I2()), 2 & e)) {
          const t = n2();
          I(), N('value', t.control.tip);
        }
      }
      let VM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-link']],
              inputs: { form: 'form', control: 'control' },
              standalone: !0,
              features: [Q],
              decls: 4,
              vars: 3,
              consts: [
                ['flexDirection', 'row', 'gap', 'medium'],
                [4, 'ngIf'],
                [1, 'link', 3, 'routerLink'],
                ['type', 'tiny', 'textColor', 'text__accent', 3, 'value'],
                ['type', 'tiny', 'textColor', 'text__info', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-flex', 0),
                  me(1, PM2, 2, 1, 'ng-container', 1),
                  U(2, 'a', 2),
                  p2(3, 'lib-text', 3),
                  H()()),
                  2 & c &&
                    (I(),
                    N('ngIf', '' !== s.control.tip),
                    I(),
                    N('routerLink', s.control.path),
                    I(),
                    N('value', s.control.label));
              },
              dependencies: [Qs, oe, sc, _c],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}',
              ],
            }));
          }
          return e;
        })(),
        BM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-error']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'error'],
                ['type', 'tiny', 'textColor', 'text__error', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c && (U(0, 'div', 0), p2(1, 'lib-text', 1), H()),
                  2 & c && (I(), N('value', s.value));
              },
              dependencies: [oe],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.error[_ngcontent-%COMP%]{display:block}',
              ],
            }));
          }
          return e;
        })();
      var R2 = (function (e) {
        return (
          (e.input = 'input'),
          (e.buttonText = 'buttonText'),
          (e.buttonIcon = 'buttonIcon'),
          (e.buttonLink = 'buttonLink'),
          (e.link = 'link'),
          (e.text = 'text'),
          e
        );
      })(R2 || {});
      let jM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-success']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'success'],
                ['type', 'tiny', 'textColor', 'text__success', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c && (U(0, 'div', 0), p2(1, 'lib-text', 1), H()),
                  2 & c && (I(), N('value', s.value));
              },
              dependencies: [oe],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.success[_ngcontent-%COMP%]{display:block}',
              ],
            }));
          }
          return e;
        })(),
        UM2 = (() => {
          class e {
            constructor() {
              this.clickEvent = new X();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-button-link']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [Q],
              decls: 3,
              vars: 3,
              consts: [
                [3, 'routerLink'],
                [3, 'clickEvent', 'control'],
                ['textColor', 'text__primary', 'type', 'header3', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'a', 0)(1, 'lib-button', 1),
                  J('clickEvent', function () {
                    return s.onClickEvent();
                  }),
                  p2(2, 'lib-text', 2),
                  H()()),
                  2 & c &&
                    (N('routerLink', s.control.path),
                    I(),
                    N('control', s.form),
                    I(),
                    N('value', s.control.label));
              },
              dependencies: [sc, F9, oe],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function HM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-input', 5), I2()), 2 & e)) {
          const t = n2().$implicit,
            c = n2();
          I(), N('form', c.getFormControl(t.id))('control', t);
        }
      }
      function $M2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'lib-button-text', 6),
            J('clickEvent', function () {
              return B1(t), j1(n2(2).onSubmit());
            }),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2().$implicit,
            c = n2();
          I(), N('form', c.getFormControl(t.id))('control', t);
        }
      }
      function GM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'lib-button-icon', 6),
            J('clickEvent', function () {
              return B1(t), j1(n2(2).onSubmit());
            }),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2().$implicit,
            c = n2();
          I(), N('form', c.getFormControl(t.id))('control', t);
        }
      }
      function qM2(e, n) {
        if (1 & e) {
          const t = te();
          S2(0),
            U(1, 'lib-button-link', 6),
            J('clickEvent', function () {
              return B1(t), j1(n2(2).onSubmit());
            }),
            H(),
            I2();
        }
        if (2 & e) {
          const t = n2().$implicit,
            c = n2();
          I(), N('form', c.getFormControl(t.id))('control', t);
        }
      }
      function WM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-link', 5), I2()), 2 & e)) {
          const t = n2().$implicit,
            c = n2();
          I(), N('form', c.getFormControl(t.id))('control', t);
        }
      }
      function YM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-text', 7), I2()), 2 & e)) {
          const t = n2().$implicit;
          I(), N('value', t.value)('margin', t.margin);
        }
      }
      function ZM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-error', 8), I2()), 2 & e)) {
          const t = n2(2).$implicit,
            c = n2();
          I(), N('value', c.getFormControlError(t.id));
        }
      }
      function QM2(e, n) {
        if ((1 & e && (S2(0), me(1, ZM2, 2, 1, 'ng-container', 3), I2()), 2 & e)) {
          const t = n2().$implicit,
            c = n2();
          I(), N('ngIf', c.formControlInvalid(t.id));
        }
      }
      function KM2(e, n) {
        if (
          (1 & e &&
            (S2(0),
            U(1, 'lib-flex', 4),
            me(2, HM2, 2, 2, 'ng-container', 3)(3, $M2, 2, 2, 'ng-container', 3)(
              4,
              GM2,
              2,
              2,
              'ng-container',
              3,
            )(5, qM2, 2, 2, 'ng-container', 3)(6, WM2, 2, 2, 'ng-container', 3)(
              7,
              YM2,
              2,
              2,
              'ng-container',
              3,
            )(8, QM2, 2, 1, 'ng-container', 3),
            H(),
            I2()),
          2 & e)
        ) {
          const t = n.$implicit;
          I(),
            N('alignItems', t.alignItems),
            I(),
            N('ngIf', 'input' === t.kind),
            I(),
            N('ngIf', 'buttonText' === t.kind),
            I(),
            N('ngIf', 'buttonIcon' === t.kind),
            I(),
            N('ngIf', 'buttonLink' === t.kind),
            I(),
            N('ngIf', 'link' === t.kind),
            I(),
            N('ngIf', 'text' === t.kind),
            I(),
            N('ngIf', t.validation.isVisible);
        }
      }
      function XM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-success', 8), I2()), 2 & e)) {
          const t = n2(2);
          I(), N('value', t.formSuccessMessage);
        }
      }
      function JM2(e, n) {
        if ((1 & e && (S2(0), p2(1, 'lib-error', 8), I2()), 2 & e)) {
          const t = n2(2);
          I(), N('value', t.formErrorMessage);
        }
      }
      function ev2(e, n) {
        if (
          (1 & e &&
            (S2(0),
            me(1, XM2, 2, 1, 'ng-container', 3)(2, JM2, 2, 1, 'ng-container', 3),
            I2()),
          2 & e)
        ) {
          const t = n2();
          I(), N('ngIf', t.formGroupValid), I(), N('ngIf', t.formGroupInvalid);
        }
      }
      let vo = (() => {
          class e {
            constructor(t) {
              (this.fb = t),
                (this.flexDirection = 'column'),
                (this.resetIfError = !1),
                (this.formErrorMessage = 'The form was not completed correctly.'),
                (this.formSuccessMessage = 'The form was completed correctly.'),
                (this.formValidation = !0),
                (this.baseFormEvent = new X()),
                (this.formGroupInvalid = !1),
                (this.formGroupValid = !1),
                (this.formGroup = this.fb.group({}));
            }
            ngOnInit() {
              this.baseForm.controls.forEach(t => {
                const { id: c } = t;
                this.formControlNotExist(c),
                  this.formGroup.addControl(c, this.buildFormControl(t));
              });
            }
            onSubmit() {
              (this.formGroupInvalid = !1),
                (this.formGroupValid = !1),
                this.formGroup.markAllAsTouched();
              const { invalid: t, touched: c } = this.formGroup;
              if (t && c)
                return (
                  (this.formGroupInvalid = !0),
                  void (this.resetIfError && this.resetFormGroup())
                );
              (this.formGroupValid = !0),
                this.baseFormEvent.emit(this.formGroup.value),
                this.resetFormGroup(),
                (this.formGroupInvalid = !1);
            }
            getFormControl(t) {
              const c = this.formGroup.get(t);
              if (c) return c;
              throw new Error(`Form control: ${t} does not exists!`);
            }
            formControlInvalid(t) {
              const c = this.getFormControl(t);
              return c.invalid && c.touched;
            }
            getFormControlError(t) {
              const c = this.getFormControl(t);
              return c.errors && c.errors.required
                ? 'This field is required.'
                : c.errors && c.errors.email
                ? 'Please enter a valid email address.'
                : 'Invalid input.';
            }
            formControlNotExist(t) {
              if (this.formGroup.get(t))
                throw new Error(`Form control: ${t} already exists!`);
            }
            buildFormControl(t) {
              switch (t.kind) {
                case R2.input:
                  return new Gt(t.input.defaultValue, t.validation.validators);
                case R2.buttonText:
                case R2.buttonIcon:
                case R2.buttonLink:
                case R2.link:
                  return new Gt(!1, t.validation.validators);
                case R2.text:
                  return new Gt('', t.validation.validators);
                default:
                  throw new Error('Unsupported control type!');
              }
            }
            resetFormGroup() {
              this.baseForm.controls.forEach(t => {
                const { id: c } = t;
                this.formGroup.setControl(c, this.buildFormControl(t));
              }),
                this.formGroup.markAsUntouched();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(wM2));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-base-form']],
              inputs: {
                baseForm: 'baseForm',
                flexDirection: 'flexDirection',
                resetIfError: 'resetIfError',
                formErrorMessage: 'formErrorMessage',
                formSuccessMessage: 'formSuccessMessage',
                formValidation: 'formValidation',
              },
              outputs: { baseFormEvent: 'baseFormEvent' },
              standalone: !0,
              features: [Q],
              decls: 5,
              vars: 5,
              consts: [
                [3, 'ngSubmit', 'formGroup'],
                ['gap', 'medium', 3, 'flexDirection'],
                [4, 'ngFor', 'ngForOf'],
                [4, 'ngIf'],
                ['flexDirection', 'column', 'gap', 'medium', 3, 'alignItems'],
                [3, 'form', 'control'],
                [3, 'clickEvent', 'form', 'control'],
                ['textColor', 'text__tertiary', 'type', 'tiny', 3, 'value', 'margin'],
                [3, 'value'],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'form', 0),
                  J('ngSubmit', function () {
                    return s.onSubmit();
                  }),
                  U(1, 'lib-flex', 1)(2, 'lib-flex', 1),
                  me(3, KM2, 9, 8, 'ng-container', 2),
                  H(),
                  me(4, ev2, 3, 2, 'ng-container', 3),
                  H()()),
                  2 & c &&
                    (N('formGroup', s.formGroup),
                    I(),
                    N('flexDirection', s.flexDirection),
                    I(),
                    N('flexDirection', s.flexDirection),
                    I(),
                    N('ngForOf', s.baseForm.controls),
                    I(),
                    N('ngIf', s.formValidation));
              },
              dependencies: [
                at,
                Al,
                Qs,
                yI,
                tI,
                BS,
                Mo,
                _c,
                TM2,
                RM2,
                FM2,
                VM2,
                BM2,
                jM2,
                oe,
                UM2,
              ],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        tv2 = (() => {
          class e {
            constructor() {
              (this.event = new X()),
                (this.loginForm = {
                  controls: [
                    {
                      kind: R2.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: { validators: [re.required, re.email], isVisible: !1 },
                      label: { value: 'Email', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: R2.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !1 },
                      label: { value: 'Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: R2.link,
                      id: 'forgotPassword',
                      alignItems: 'flex-end',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Forgot password?',
                      path: '/forgot-password',
                      tip: '',
                    },
                    {
                      kind: R2.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Log in',
                      isSubmit: !0,
                    },
                    {
                      kind: R2.link,
                      id: 'registration',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Registration',
                      path: '/registration',
                      tip: "Don't have an account?",
                    },
                  ],
                });
            }
            onBaseFormEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-login-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 2,
              consts: [
                [
                  'formSuccessMessage',
                  'You have logged in successfully',
                  'formErrorMessage',
                  'Incorrect login or password',
                  3,
                  'baseFormEvent',
                  'baseForm',
                  'resetIfError',
                ],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-base-form', 0),
                  J('baseFormEvent', function (o) {
                    return s.onBaseFormEvent(o);
                  }),
                  H()),
                  2 & c && N('baseForm', s.loginForm)('resetIfError', !0);
              },
              dependencies: [vo],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        nv2 = (() => {
          class e {
            constructor() {
              (this.event = new X()),
                (this.forgotPasswordForm = {
                  controls: [
                    {
                      kind: R2.text,
                      id: 'tip',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !0 },
                      value:
                        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
                      margin: '1rem 0',
                    },
                    {
                      kind: R2.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: { validators: [re.required, re.email], isVisible: !0 },
                      label: { value: 'Email', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: R2.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Reset password',
                      isSubmit: !0,
                    },
                  ],
                });
            }
            onBaseFormEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-forgot-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 2,
              consts: [
                [
                  'formSuccessMessage',
                  'A message has been sent to your email',
                  3,
                  'baseFormEvent',
                  'baseForm',
                  'resetIfError',
                ],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-base-form', 0),
                  J('baseFormEvent', function (o) {
                    return s.onBaseFormEvent(o);
                  }),
                  H()),
                  2 & c && N('baseForm', s.forgotPasswordForm)('resetIfError', !1);
              },
              dependencies: [vo],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        cv2 = (() => {
          class e {
            constructor() {
              (this.event = new X()),
                (this.registrationForm = {
                  controls: [
                    {
                      kind: R2.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: { validators: [re.required, re.email], isVisible: !0 },
                      label: { value: 'Email', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: R2.input,
                      id: 'name',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Name', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: R2.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: R2.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Repeat Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: R2.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Register',
                      isSubmit: !0,
                    },
                  ],
                });
            }
            onBaseFormEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-registration-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 2,
              consts: [
                [
                  'formSuccessMessage',
                  'The account was created successfully',
                  'formErrorMessage',
                  'An error occurred while creating your account',
                  3,
                  'baseFormEvent',
                  'baseForm',
                  'resetIfError',
                ],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-base-form', 0),
                  J('baseFormEvent', function (o) {
                    return s.onBaseFormEvent(o);
                  }),
                  H()),
                  2 & c && N('baseForm', s.registrationForm)('resetIfError', !0);
              },
              dependencies: [vo],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        sv2 = (() => {
          class e {
            constructor() {
              (this.event = new X()),
                (this.changePasswordForm = {
                  controls: [
                    {
                      kind: R2.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: R2.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Repeate Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: R2.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Change password',
                      isSubmit: !0,
                    },
                  ],
                });
            }
            onBaseFormEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-change-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 2,
              consts: [
                [
                  'formSuccessMessage',
                  'Password changed successfully',
                  3,
                  'baseFormEvent',
                  'baseForm',
                  'resetIfError',
                ],
              ],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-base-form', 0),
                  J('baseFormEvent', function (o) {
                    return s.onBaseFormEvent(o);
                  }),
                  H()),
                  2 & c && N('baseForm', s.changePasswordForm)('resetIfError', !0);
              },
              dependencies: [vo],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        mn = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-card']],
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              template: function (c, s) {
                1 & c && (U(0, 'p'), z3(1, 'card works!'), H());
              },
            }));
          }
          return e;
        })();
      const rv2 = ['*'];
      let yo = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-auth']],
              standalone: !0,
              features: [Q],
              ngContentSelectors: rv2,
              decls: 7,
              vars: 0,
              consts: [
                [1, 'auth'],
                [
                  'alignItems',
                  'center',
                  'justifyContent',
                  'center',
                  'minHeight',
                  'calc(100svh - 2rem)',
                ],
                ['width', '350px'],
                ['alignItems', 'stretch', 'flexDirection', 'column', 'gap', 'medium'],
                ['justifyContent', 'center'],
                [
                  'value',
                  'English Learning',
                  'type',
                  'header2',
                  'textColor',
                  'text__accent',
                ],
              ],
              template: function (c, s) {
                1 & c &&
                  (b0(),
                  U(0, 'div', 0)(1, 'lib-flex', 1)(2, 'lib-card', 2)(3, 'lib-flex', 3)(
                    4,
                    'lib-flex',
                    4,
                  ),
                  p2(5, 'lib-text', 5),
                  H(),
                  w0(6),
                  H()()()());
              },
              dependencies: [_c, oe, mn],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.auth[_ngcontent-%COMP%]{display:block}',
              ],
            }));
          }
          return e;
        })(),
        ov2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-dashboard-nav']],
              standalone: !0,
              features: [Q],
              decls: 1,
              vars: 0,
              template: function (c, s) {
                1 & c && p2(0, 'lib-card');
              },
              dependencies: [mn],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        iv2 = (() => {
          class e {
            constructor(t) {
              (this.route = t), (this.event = new X());
            }
            onEvent(t) {
              this.route.navigate('/dashboard'), this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Yy));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-login']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-auth')(1, 'lib-login-form', 0),
                  J('event', function (o) {
                    return s.onEvent(o);
                  }),
                  H()());
              },
              dependencies: [yo, tv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        av2 = (() => {
          class e {
            constructor() {
              this.event = new X();
            }
            onEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-forgot-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-auth')(1, 'lib-forgot-password-form', 0),
                  J('event', function (o) {
                    return s.onEvent(o);
                  }),
                  H()());
              },
              dependencies: [yo, nv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        lv2 = (() => {
          class e {
            constructor() {
              this.event = new X();
            }
            onEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-registration']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-auth')(1, 'lib-registration-form', 0),
                  J('event', function (o) {
                    return s.onEvent(o);
                  }),
                  H()());
              },
              dependencies: [yo, cv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        uv2 = (() => {
          class e {
            constructor() {
              this.event = new X();
            }
            onEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-change-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (U(0, 'lib-auth')(1, 'lib-change-password-form', 0),
                  J('event', function (o) {
                    return s.onEvent(o);
                  }),
                  H()());
              },
              dependencies: [yo, sv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        fv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-dashboard']],
              standalone: !0,
              features: [Q],
              decls: 3,
              vars: 0,
              consts: [[1, 'dashboard']],
              template: function (c, s) {
                1 & c &&
                  (p2(0, 'lib-dashboard-nav'),
                  U(1, 'main', 0),
                  p2(2, 'router-outlet'),
                  H());
              },
              dependencies: [ov2, K0],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.dashboard[_ngcontent-%COMP%]{padding:.75rem}',
              ],
            }));
          }
          return e;
        })(),
        dv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-statistics']],
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [['value', 'Statistics']],
              template: function (c, s) {
                1 & c && (U(0, 'lib-card'), p2(1, 'lib-text', 0), H());
              },
              dependencies: [mn, oe],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        hv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-courses']],
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [['value', 'Courses']],
              template: function (c, s) {
                1 & c && (U(0, 'lib-card'), p2(1, 'lib-text', 0), H());
              },
              dependencies: [mn, oe],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        pv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-account']],
              standalone: !0,
              features: [Q],
              decls: 2,
              vars: 0,
              consts: [['value', 'Account']],
              template: function (c, s) {
                1 & c && (U(0, 'lib-card'), p2(1, 'lib-text', 0), H());
              },
              dependencies: [mn, oe],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        mv2 = (() => {
          class e {
            constructor(t) {
              (this.route = t), this.route.navigate('');
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Yy));
            });
            static #t = (this.ɵcmp = Y({
              type: e,
              selectors: [['lib-logout']],
              standalone: !0,
              features: [Q],
              decls: 0,
              vars: 0,
              template: function (c, s) {},
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const _v2 = {
          providers: [
            (function CQ(e, ...n) {
              return J3([
                { provide: Er, multi: !0, useValue: e },
                [],
                { provide: J4, useFactory: Hy, deps: [ft] },
                { provide: Ds, multi: !0, useFactory: $y },
                n.map(t => t.ɵproviders),
              ]);
            })(
              [
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login', component: iv2 },
                { path: 'registration', component: lv2 },
                { path: 'forgot-password', component: av2 },
                { path: 'change-password', component: uv2 },
                {
                  path: 'dashboard',
                  component: fv2,
                  children: [
                    { path: '', redirectTo: 'statistics', pathMatch: 'full' },
                    { path: 'statistics', component: dv2 },
                    { path: 'courses', component: hv2 },
                    { path: 'account', component: pv2 },
                    {
                      path: 'course/:courseId',
                      component: (() => {
                        class e {
                          static #e = (this.ɵfac = function (c) {
                            return new (c || e)();
                          });
                          static #t = (this.ɵcmp = Y({
                            type: e,
                            selectors: [['lib-course']],
                            standalone: !0,
                            features: [Q],
                            decls: 1,
                            vars: 0,
                            template: function (c, s) {
                              1 & c && p2(0, 'router-outlet');
                            },
                            dependencies: [K0],
                            encapsulation: 2,
                          }));
                        }
                        return e;
                      })(),
                      children: [
                        { path: '', redirectTo: 'tasks', pathMatch: 'full' },
                        {
                          path: 'tasks',
                          component: (() => {
                            class e extends Ar {
                              constructor(t) {
                                super(t, 'course'), (this.injector = t);
                              }
                              onClick(t) {
                                this.emit(t);
                              }
                              static #e = (this.ɵfac = function (c) {
                                return new (c || e)(z(D2));
                              });
                              static #t = (this.ɵcmp = Y({
                                type: e,
                                selectors: [['lib-tasks']],
                                standalone: !0,
                                features: [t2, Q],
                                decls: 1,
                                vars: 0,
                                consts: [[3, 'event']],
                                template: function (c, s) {
                                  1 & c &&
                                    (U(0, 'lib-task-roadmap', 0),
                                    J('event', function (o) {
                                      return s.onClick(o);
                                    }),
                                    H());
                                },
                                dependencies: [EC2],
                                encapsulation: 2,
                              }));
                            }
                            return e;
                          })(),
                        },
                      ],
                    },
                    { path: 'logout', component: mv2 },
                  ],
                },
                {
                  path: '**',
                  component: (() => {
                    class e {
                      static #e = (this.ɵfac = function (c) {
                        return new (c || e)();
                      });
                      static #t = (this.ɵcmp = Y({
                        type: e,
                        selectors: [['lib-http-404']],
                        standalone: !0,
                        features: [Q],
                        decls: 2,
                        vars: 0,
                        consts: [['value', 'http-404']],
                        template: function (c, s) {
                          1 & c && (U(0, 'lib-card'), p2(1, 'lib-text', 0), H());
                        },
                        dependencies: [mn, oe],
                        encapsulation: 2,
                      }));
                    }
                    return e;
                  })(),
                },
              ],
              (function zQ() {
                return Ue(6, [{ provide: G4, useClass: G$ }]);
              })(),
              (function vQ(e = {}) {
                return Ue(4, [
                  {
                    provide: b5,
                    useFactory: () => {
                      const t = y(iq),
                        c = y(l2),
                        s = y(Nr),
                        r = y(Q4);
                      return new Uy(r, s, t, c, e);
                    },
                  },
                ]);
              })({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
            ),
          ],
        },
        bv2 = (function cL(e, n) {
          if (((ac[e] = (ac[e] || 0) + 1), 'function' == typeof n))
            return x5(e, (...c) => ({ ...n(...c), type: e }));
          switch (n ? n._as : 'empty') {
            case 'empty':
              return x5(e, () => ({ type: e }));
            case 'props':
              return x5(e, c => ({ ...c, type: e }));
            default:
              throw new Error('Unexpected config.');
          }
        })('[Course] Get Course'),
        Lo = { tasks: new Map() },
        P9 = (e, n) => {
          for (let t = 0; t < e; t += 1) {
            const c = Lo.tasks.size,
              r = { id: `task${c}`, order: c, type: n };
            Lo.tasks.set(r.id, r);
          }
        };
      P9(50, 'done'), P9(1, 'active'), P9(100, 'blocked');
      const Dv2 = {
        providers: [
          (function jK(e, n) {
            return J3([...PK(e, n), BK]);
          })({
            course: (function qK(e, ...n) {
              const t = new Map();
              for (const c of n)
                for (const s of c.types) {
                  const r = t.get(s);
                  t.set(s, r ? (i, a) => c.reducer(r(i, a), a) : c.reducer);
                }
              return function (c = e, s) {
                const r = t.get(s.type);
                return r ? r(c, s) : c;
              };
            })(
              Lo,
              (function GK(...e) {
                return { reducer: e.pop(), types: e.map(c => c.type) };
              })(bv2, e => e),
            ),
          }),
        ],
      };
      let xc = (() => {
        class e extends n1 {
          constructor() {
            super({}), (this.state = N5(this, { manualCleanup: !0, requireSync: !0 }));
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const V9 = new _('@ngrx/store Mock Selectors');
      let zo = (() => {
          class e extends rn {
            constructor(t, c, s, r, o = []) {
              super(t, c, s),
                (this.state$ = t),
                (this.initialState = r),
                (this.selectors = new Map()),
                this.resetSelectors(),
                this.setState(this.initialState),
                (this.scannedActions$ = c.asObservable());
              for (const i of o) this.overrideSelector(i.selector, i.value);
            }
            setState(t) {
              this.state$.next(t), (this.lastState = t);
            }
            overrideSelector(t, c) {
              this.selectors.set(t, c);
              const s =
                'string' == typeof t
                  ? (function H5(...e) {
                      return (function CK(e, n = { stateFn: gK }) {
                        return function (...t) {
                          let c = t;
                          if (Array.isArray(c[0])) {
                            const [u, ...f] = c;
                            c = [...u, ...f];
                          } else
                            1 === c.length &&
                              (function vK(e) {
                                return (
                                  !!e &&
                                  'object' == typeof e &&
                                  Object.values(e).every(n => 'function' == typeof n)
                                );
                              })(c[0]) &&
                              (c = (function yK(e) {
                                const n = Object.values(e),
                                  t = Object.keys(e);
                                return [
                                  ...n,
                                  (...s) =>
                                    t.reduce((r, o, i) => ({ ...r, [o]: s[i] }), {}),
                                ];
                              })(c[0]));
                          const s = c.slice(0, c.length - 1),
                            r = c[c.length - 1],
                            o = s.filter(
                              u => u.release && 'function' == typeof u.release,
                            ),
                            i = e(function (...u) {
                              return r.apply(null, u);
                            }),
                            a = U5(function (u, f) {
                              return n.stateFn.apply(null, [u, s, f, i]);
                            });
                          return Object.assign(a.memoized, {
                            release: function l() {
                              a.reset(), i.reset(), o.forEach(u => u.release());
                            },
                            projector: i.memoized,
                            setResult: a.setResult,
                            clearResult: a.clearResult,
                          });
                        };
                      })(U5)(...e);
                    })(
                      () => {},
                      () => c,
                    )
                  : t;
              return s.setResult(c), s;
            }
            resetSelectors() {
              for (const t of this.selectors.keys())
                'string' != typeof t && (t.release(), t.clearResult());
              this.selectors.clear();
            }
            select(t, c) {
              return 'string' == typeof t && this.selectors.has(t)
                ? new n1(this.selectors.get(t)).asObservable()
                : super.select(t, c);
            }
            addReducer() {}
            removeReducer() {}
            refreshState() {
              this.lastState && this.setState({ ...this.lastState });
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(E(xc), E(He), E(k3), E(sn), E(V9));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        B9 = (() => {
          class e extends n1 {
            constructor() {
              super(() => {});
            }
            addFeature(t) {}
            addFeatures(t) {}
            removeFeature(t) {}
            removeFeatures(t) {}
            addReducer(t, c) {}
            addReducers(t) {}
            removeReducer(t) {}
            removeReducers(t) {}
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })();
      function Ev2(e, n, t, c, s) {
        return new zo(e, n, t, c, s);
      }
      !(function LI(e = {}) {
        return (
          (function hK(e) {
            SL = e;
          })(!0),
          [
            { provide: He, useFactory: () => new He(), deps: [] },
            { provide: xc, useFactory: () => new xc(), deps: [] },
            { provide: B9, useFactory: () => new B9(), deps: [] },
            { provide: sn, useValue: e.initialState || {} },
            { provide: V9, useValue: e.selectors },
            { provide: P5, useExisting: xc },
            { provide: k3, useExisting: B9 },
            { provide: zo, useFactory: Ev2, deps: [xc, He, k3, sn, V9] },
            { provide: rn, useExisting: zo },
          ]
        );
      })({ initialState: { course: Lo } }),
        (function cW(e, n) {
          return m$({ rootComponent: e, ...Cv(n) });
        })(_Q, { providers: [..._v2.providers, ...Dv2.providers] }).catch(e => {
          throw new Error(e);
        });
    },
  },
  gn => {
    gn((gn.s = 826));
  },
]);

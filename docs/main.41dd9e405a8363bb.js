'use strict';
(self.webpackChunkenglish_learning_fe = self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    449: () => {
      function _4(e, n) {
        return Object.is(e, n);
      }
      let F2 = null,
        H3 = !1,
        $3 = 1;
      const ae = Symbol('SIGNAL');
      function K(e) {
        const n = F2;
        return (F2 = e), n;
      }
      const Rc = {
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
      function Er(e) {
        if (H3) throw new Error('');
        if (null === F2) return;
        F2.consumerOnSignalRead(e);
        const n = F2.nextProducerIndex++;
        Pc(F2),
          n < F2.producerNode.length &&
            F2.producerNode[n] !== e &&
            b4(F2) &&
            Fc(F2.producerNode[n], F2.producerIndexOfThis[n]),
          F2.producerNode[n] !== e &&
            ((F2.producerNode[n] = e),
            (F2.producerIndexOfThis[n] = b4(F2) ? W9(e, F2, n) : 0)),
          (F2.producerLastReadVersion[n] = e.version);
      }
      function H9(e) {
        if ((!b4(e) || e.dirty) && (e.dirty || e.lastCleanEpoch !== $3)) {
          if (!e.producerMustRecompute(e) && !xr(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = $3);
          e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = $3);
        }
      }
      function $9(e) {
        if (void 0 === e.liveConsumerNode) return;
        const n = H3;
        H3 = !0;
        try {
          for (const t of e.liveConsumerNode) t.dirty || q9(t);
        } finally {
          H3 = n;
        }
      }
      function G9() {
        return !1 !== F2?.consumerAllowSignalWrites;
      }
      function q9(e) {
        (e.dirty = !0), $9(e), e.consumerMarkedDirty?.(e);
      }
      function Oc(e) {
        return e && (e.nextProducerIndex = 0), K(e);
      }
      function Nr(e, n) {
        if (
          (K(n),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (b4(e))
            for (let t = e.nextProducerIndex; t < e.producerNode.length; t++)
              Fc(e.producerNode[t], e.producerIndexOfThis[t]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function xr(e) {
        Pc(e);
        for (let n = 0; n < e.producerNode.length; n++) {
          const t = e.producerNode[n],
            c = e.producerLastReadVersion[n];
          if (c !== t.version || (H9(t), c !== t.version)) return !0;
        }
        return !1;
      }
      function Sr(e) {
        if ((Pc(e), b4(e)))
          for (let n = 0; n < e.producerNode.length; n++)
            Fc(e.producerNode[n], e.producerIndexOfThis[n]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
      }
      function W9(e, n, t) {
        if ((Y9(e), 0 === e.liveConsumerNode.length && Z9(e)))
          for (let c = 0; c < e.producerNode.length; c++)
            e.producerIndexOfThis[c] = W9(e.producerNode[c], e, c);
        return e.liveConsumerIndexOfThis.push(t), e.liveConsumerNode.push(n) - 1;
      }
      function Fc(e, n) {
        if ((Y9(e), 1 === e.liveConsumerNode.length && Z9(e)))
          for (let c = 0; c < e.producerNode.length; c++)
            Fc(e.producerNode[c], e.producerIndexOfThis[c]);
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
          Pc(s), (s.producerIndexOfThis[c] = n);
        }
      }
      function b4(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function Pc(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      function Y9(e) {
        (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
      }
      function Z9(e) {
        return void 0 !== e.producerNode;
      }
      const Ir = Symbol('UNSET'),
        Ar = Symbol('COMPUTING'),
        Vc = Symbol('ERRORED'),
        SI = {
          ...Rc,
          value: Ir,
          dirty: !0,
          error: null,
          equal: _4,
          producerMustRecompute: e => e.value === Ir || e.value === Ar,
          producerRecomputeValue(e) {
            if (e.value === Ar) throw new Error('Detected cycle in computations.');
            const n = e.value;
            e.value = Ar;
            const t = Oc(e);
            let c;
            try {
              c = e.computation();
            } catch (s) {
              (c = Vc), (e.error = s);
            } finally {
              Nr(e, t);
            }
            n !== Ir && n !== Vc && c !== Vc && e.equal(n, c)
              ? (e.value = n)
              : ((e.value = c), e.version++);
          },
        };
      let Q9 = function II() {
        throw new Error();
      };
      function K9() {
        Q9();
      }
      let Bc = null;
      function X9(e, n) {
        G9() || K9(),
          e.equal(e.value, n) ||
            ((e.value = n),
            (function OI(e) {
              e.version++,
                (function NI() {
                  $3++;
                })(),
                $9(e),
                Bc?.();
            })(e));
      }
      const RI = { ...Rc, equal: _4, value: void 0 };
      function E2(e) {
        return 'function' == typeof e;
      }
      function Tr(e) {
        const t = e(c => {
          Error.call(c), (c.stack = new Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)), (t.prototype.constructor = t), t
        );
      }
      const kr = Tr(
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
      function jc(e, n) {
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
                for (const o of t) o.remove(this);
              else t.remove(this);
            const { initialTeardown: c } = this;
            if (E2(c))
              try {
                c();
              } catch (o) {
                n = o instanceof kr ? o.errors : [o];
              }
            const { _finalizers: s } = this;
            if (s) {
              this._finalizers = null;
              for (const o of s)
                try {
                  nu(o);
                } catch (r) {
                  (n = n ?? []), r instanceof kr ? (n = [...n, ...r.errors]) : n.push(r);
                }
            }
            if (n) throw new kr(n);
          }
        }
        add(n) {
          var t;
          if (n && n !== this)
            if (this.closed) nu(n);
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
          t === n ? (this._parentage = null) : Array.isArray(t) && jc(t, n);
        }
        remove(n) {
          const { _finalizers: t } = this;
          t && jc(t, n), n instanceof i1 && n._removeParent(this);
        }
      }
      i1.EMPTY = (() => {
        const e = new i1();
        return (e.closed = !0), e;
      })();
      const eu = i1.EMPTY;
      function tu(e) {
        return (
          e instanceof i1 ||
          (e && 'closed' in e && E2(e.remove) && E2(e.add) && E2(e.unsubscribe))
        );
      }
      function nu(e) {
        E2(e) ? e() : e.unsubscribe();
      }
      const Yt = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Uc = {
          setTimeout(e, n, ...t) {
            const { delegate: c } = Uc;
            return c?.setTimeout ? c.setTimeout(e, n, ...t) : setTimeout(e, n, ...t);
          },
          clearTimeout(e) {
            const { delegate: n } = Uc;
            return (n?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function cu(e) {
        Uc.setTimeout(() => {
          const { onUnhandledError: n } = Yt;
          if (!n) throw e;
          n(e);
        });
      }
      function Hc() {}
      const PI = Rr('C', void 0, void 0);
      function Rr(e, n, t) {
        return { kind: e, value: n, error: t };
      }
      let Zt = null;
      function $c(e) {
        if (Yt.useDeprecatedSynchronousErrorHandling) {
          const n = !Zt;
          if ((n && (Zt = { errorThrown: !1, error: null }), e(), n)) {
            const { errorThrown: t, error: c } = Zt;
            if (((Zt = null), t)) throw c;
          }
        } else e();
      }
      class Or extends i1 {
        constructor(n) {
          super(),
            (this.isStopped = !1),
            n ? ((this.destination = n), tu(n) && n.add(this)) : (this.destination = GI);
        }
        static create(n, t, c) {
          return new Pr(n, t, c);
        }
        next(n) {
          this.isStopped
            ? Vr(
                (function BI(e) {
                  return Rr('N', e, void 0);
                })(n),
                this,
              )
            : this._next(n);
        }
        error(n) {
          this.isStopped
            ? Vr(
                (function VI(e) {
                  return Rr('E', void 0, e);
                })(n),
                this,
              )
            : ((this.isStopped = !0), this._error(n));
        }
        complete() {
          this.isStopped ? Vr(PI, this) : ((this.isStopped = !0), this._complete());
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
      const UI = Function.prototype.bind;
      function Fr(e, n) {
        return UI.call(e, n);
      }
      class HI {
        constructor(n) {
          this.partialObserver = n;
        }
        next(n) {
          const { partialObserver: t } = this;
          if (t.next)
            try {
              t.next(n);
            } catch (c) {
              Gc(c);
            }
        }
        error(n) {
          const { partialObserver: t } = this;
          if (t.error)
            try {
              t.error(n);
            } catch (c) {
              Gc(c);
            }
          else Gc(n);
        }
        complete() {
          const { partialObserver: n } = this;
          if (n.complete)
            try {
              n.complete();
            } catch (t) {
              Gc(t);
            }
        }
      }
      class Pr extends Or {
        constructor(n, t, c) {
          let s;
          if ((super(), E2(n) || !n))
            s = { next: n ?? void 0, error: t ?? void 0, complete: c ?? void 0 };
          else {
            let o;
            this && Yt.useDeprecatedNextContext
              ? ((o = Object.create(n)),
                (o.unsubscribe = () => this.unsubscribe()),
                (s = {
                  next: n.next && Fr(n.next, o),
                  error: n.error && Fr(n.error, o),
                  complete: n.complete && Fr(n.complete, o),
                }))
              : (s = n);
          }
          this.destination = new HI(s);
        }
      }
      function Gc(e) {
        Yt.useDeprecatedSynchronousErrorHandling
          ? (function jI(e) {
              Yt.useDeprecatedSynchronousErrorHandling &&
                Zt &&
                ((Zt.errorThrown = !0), (Zt.error = e));
            })(e)
          : cu(e);
      }
      function Vr(e, n) {
        const { onStoppedNotification: t } = Yt;
        t && Uc.setTimeout(() => t(e, n));
      }
      const GI = {
          closed: !0,
          next: Hc,
          error: function $I(e) {
            throw e;
          },
          complete: Hc,
        },
        Br = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function Ze(e) {
        return e;
      }
      function su(e) {
        return 0 === e.length
          ? Ze
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
            const o = (function YI(e) {
              return (
                (e && e instanceof Or) ||
                ((function WI(e) {
                  return e && E2(e.next) && E2(e.error) && E2(e.complete);
                })(e) &&
                  tu(e))
              );
            })(t)
              ? t
              : new Pr(t, c, s);
            return (
              $c(() => {
                const { operator: r, source: i } = this;
                o.add(r ? r.call(o, i) : i ? this._subscribe(o) : this._trySubscribe(o));
              }),
              o
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
            return new (c = ou(c))((s, o) => {
              const r = new Pr({
                next: i => {
                  try {
                    t(i);
                  } catch (a) {
                    o(a), r.unsubscribe();
                  }
                },
                error: o,
                complete: s,
              });
              this.subscribe(r);
            });
          }
          _subscribe(t) {
            var c;
            return null === (c = this.source) || void 0 === c ? void 0 : c.subscribe(t);
          }
          [Br]() {
            return this;
          }
          pipe(...t) {
            return su(t)(this);
          }
          toPromise(t) {
            return new (t = ou(t))((c, s) => {
              let o;
              this.subscribe(
                r => (o = r),
                r => s(r),
                () => c(o),
              );
            });
          }
        }
        return (e.create = n => new e(n)), e;
      })();
      function ou(e) {
        var n;
        return null !== (n = e ?? Yt.Promise) && void 0 !== n ? n : Promise;
      }
      const ZI = Tr(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let p1 = (() => {
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
            const c = new ru(this, this);
            return (c.operator = t), c;
          }
          _throwIfClosed() {
            if (this.closed) throw new ZI();
          }
          next(t) {
            $c(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const c of this.currentObservers) c.next(t);
              }
            });
          }
          error(t) {
            $c(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = t);
                const { observers: c } = this;
                for (; c.length; ) c.shift().error(t);
              }
            });
          }
          complete() {
            $c(() => {
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
            const { hasError: c, isStopped: s, observers: o } = this;
            return c || s
              ? eu
              : ((this.currentObservers = null),
                o.push(t),
                new i1(() => {
                  (this.currentObservers = null), jc(o, t);
                }));
          }
          _checkFinalizedStatuses(t) {
            const { hasError: c, thrownError: s, isStopped: o } = this;
            c ? t.error(s) : o && t.complete();
          }
          asObservable() {
            const t = new O2();
            return (t.source = this), t;
          }
        }
        return (e.create = (n, t) => new ru(n, t)), e;
      })();
      class ru extends p1 {
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
            : eu;
        }
      }
      class n1 extends p1 {
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
      function iu(e) {
        return E2(e?.lift);
      }
      function U2(e) {
        return n => {
          if (iu(n))
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
      function R2(e, n, t, c, s) {
        return new QI(e, n, t, c, s);
      }
      class QI extends Or {
        constructor(n, t, c, s, o, r) {
          super(n),
            (this.onFinalize = o),
            (this.shouldUnsubscribe = r),
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
            R2(c, o => {
              c.next(e.call(n, o, s++));
            }),
          );
        });
      }
      typeof navigator < 'u' && navigator,
        typeof navigator < 'u' && !/Opera/.test(navigator.userAgent) && navigator,
        typeof navigator < 'u' && (/MSIE/.test(navigator.userAgent) || navigator),
        typeof navigator < 'u' && !/Opera|WebKit/.test(navigator.userAgent) && navigator,
        typeof navigator < 'u' && navigator;
      const Eu = 'https://g.co/ng/security#xss';
      class L extends Error {
        constructor(n, t) {
          super(
            (function G3(e, n) {
              return `NG0${Math.abs(e)}${n ? ': ' + n : ''}`;
            })(n, t),
          ),
            (this.code = n);
        }
      }
      function Qe(e) {
        return { toString: e }.toString();
      }
      const W3 = '__parameters__';
      function Z3(e, n, t) {
        return Qe(() => {
          const c = (function Yr(e) {
            return function (...t) {
              if (e) {
                const c = e(...t);
                for (const s in c) this[s] = c[s];
              }
            };
          })(n);
          function s(...o) {
            if (this instanceof s) return c.apply(this, o), this;
            const r = new s(...o);
            return (i.annotation = r), i;
            function i(a, l, u) {
              const f = a.hasOwnProperty(W3)
                ? a[W3]
                : Object.defineProperty(a, W3, { value: [] })[W3];
              for (; f.length <= u; ) f.push(null);
              return (f[u] = f[u] || []).push(r), a;
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
      const N2 = globalThis;
      function h2(e) {
        for (let n in e) if (e[n] === h2) return n;
        throw Error('Could not find renamed property on target object.');
      }
      function QA(e, n) {
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
      function Zr(e, n) {
        return null == e || '' === e
          ? null === n
            ? ''
            : n
          : null == n || '' === n
          ? e
          : e + ' ' + n;
      }
      const KA = h2({ __forward_ref__: h2 });
      function y2(e) {
        return (
          (e.__forward_ref__ = y2),
          (e.toString = function () {
            return Z2(this());
          }),
          e
        );
      }
      function V(e) {
        return Qc(e) ? e() : e;
      }
      function Qc(e) {
        return 'function' == typeof e && e.hasOwnProperty(KA) && e.__forward_ref__ === y2;
      }
      function w(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Kt(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function Kc(e) {
        return Iu(e, Jc) || Iu(e, Au);
      }
      function Iu(e, n) {
        return e.hasOwnProperty(n) ? e[n] : null;
      }
      function Xc(e) {
        return e && (e.hasOwnProperty(Qr) || e.hasOwnProperty(cT)) ? e[Qr] : null;
      }
      const Jc = h2({ ɵprov: h2 }),
        Qr = h2({ ɵinj: h2 }),
        Au = h2({ ngInjectableDef: h2 }),
        cT = h2({ ngInjectorDef: h2 });
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
      function ti(e) {
        return e && !!e.ɵproviders;
      }
      const D4 = h2({ ɵcmp: h2 }),
        ni = h2({ ɵdir: h2 }),
        ci = h2({ ɵpipe: h2 }),
        ku = h2({ ɵmod: h2 }),
        Ke = h2({ ɵfac: h2 }),
        E4 = h2({ __NG_ELEMENT_ID__: h2 }),
        Ru = h2({ __NG_ENV_ID__: h2 });
      function U(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function si(e, n) {
        throw new L(-201, !1);
      }
      var t2 = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(t2 || {});
      let oi;
      function Ou() {
        return oi;
      }
      function x1(e) {
        const n = oi;
        return (oi = e), n;
      }
      function Fu(e, n, t) {
        const c = Kc(e);
        return c && 'root' == c.providedIn
          ? void 0 === c.value
            ? (c.value = c.factory())
            : c.value
          : t & t2.Optional
          ? null
          : void 0 !== n
          ? n
          : void si();
      }
      const N4 = {},
        ri = '__NG_DI_FLAG__',
        e6 = 'ngTempTokenPath',
        lT = /\n/gm,
        Pu = '__source';
      let Q3;
      function Ct(e) {
        const n = Q3;
        return (Q3 = e), n;
      }
      function dT(e, n = t2.Default) {
        if (void 0 === Q3) throw new L(-203, !1);
        return null === Q3
          ? Fu(e, void 0, n)
          : Q3.get(e, n & t2.Optional ? null : void 0, n);
      }
      function N(e, n = t2.Default) {
        return (Ou() || dT)(V(e), n);
      }
      function y(e, n = t2.Default) {
        return N(e, t6(n));
      }
      function t6(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
      }
      function ii(e) {
        const n = [];
        for (let t = 0; t < e.length; t++) {
          const c = V(e[t]);
          if (Array.isArray(c)) {
            if (0 === c.length) throw new L(900, !1);
            let s,
              o = t2.Default;
            for (let r = 0; r < c.length; r++) {
              const i = c[r],
                a = hT(i);
              'number' == typeof a ? (-1 === a ? (s = i.token) : (o |= a)) : (s = i);
            }
            n.push(N(s, o));
          } else n.push(N(c));
        }
        return n;
      }
      function x4(e, n) {
        return (e[ri] = n), (e.prototype[ri] = n), e;
      }
      function hT(e) {
        return e[ri];
      }
      const Bu = x4(
          Z3('Inject', e => ({ token: e })),
          -1,
        ),
        ai = x4(Z3('Optional'), 8),
        li = x4(Z3('SkipSelf'), 4);
      function Xt(e, n) {
        return e.hasOwnProperty(Ke) ? e[Ke] : null;
      }
      function K3(e, n) {
        e.forEach(t => (Array.isArray(t) ? K3(t, n) : n(t)));
      }
      function ju(e, n, t) {
        n >= e.length ? e.push(t) : e.splice(n, 0, t);
      }
      function n6(e, n) {
        return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0];
      }
      function B1(e, n, t) {
        let c = X3(e, n);
        return (
          c >= 0
            ? (e[1 | c] = t)
            : ((c = ~c),
              (function Uu(e, n, t, c) {
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
      function fi(e, n) {
        const t = X3(e, n);
        if (t >= 0) return e[1 | t];
      }
      function X3(e, n) {
        return (function Hu(e, n, t) {
          let c = 0,
            s = e.length >> t;
          for (; s !== c; ) {
            const o = c + ((s - c) >> 1),
              r = e[o << t];
            if (n === r) return o << t;
            r > n ? (s = o) : (c = o + 1);
          }
          return ~(s << t);
        })(e, n, 1);
      }
      const be = {},
        o2 = [],
        j1 = new _(''),
        $u = new _('', -1),
        di = new _('');
      class s6 {
        get(n, t = N4) {
          if (t === N4) {
            const c = new Error(`NullInjectorError: No provider for ${Z2(n)}!`);
            throw ((c.name = 'NullInjectorError'), c);
          }
          return t;
        }
      }
      var o6 = (function (e) {
          return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
        })(o6 || {}),
        le = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })(le || {}),
        Mt = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
            e
          );
        })(Mt || {});
      function vT(e, n, t) {
        let c = e.length;
        for (;;) {
          const s = e.indexOf(n, t);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const o = n.length;
            if (s + o === c || e.charCodeAt(s + o) <= 32) return s;
          }
          t = s + 1;
        }
      }
      function hi(e, n, t) {
        let c = 0;
        for (; c < t.length; ) {
          const s = t[c];
          if ('number' == typeof s) {
            if (0 !== s) break;
            c++;
            const o = t[c++],
              r = t[c++],
              i = t[c++];
            e.setAttribute(n, r, i, o);
          } else {
            const o = s,
              r = t[++c];
            qu(o) ? e.setProperty(n, o, r) : e.setAttribute(n, o, r), c++;
          }
        }
        return c;
      }
      function Gu(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function qu(e) {
        return 64 === e.charCodeAt(0);
      }
      function S4(e, n) {
        if (null !== n && 0 !== n.length)
          if (null === e || 0 === e.length) e = n.slice();
          else {
            let t = -1;
            for (let c = 0; c < n.length; c++) {
              const s = n[c];
              'number' == typeof s
                ? (t = s)
                : 0 === t || Wu(e, t, s, null, -1 === t || 2 === t ? n[++c] : null);
            }
          }
        return e;
      }
      function Wu(e, n, t, c, s) {
        let o = 0,
          r = e.length;
        if (-1 === n) r = -1;
        else
          for (; o < e.length; ) {
            const i = e[o++];
            if ('number' == typeof i) {
              if (i === n) {
                r = -1;
                break;
              }
              if (i > n) {
                r = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const i = e[o];
          if ('number' == typeof i) break;
          if (i === t) {
            if (null === c) return void (null !== s && (e[o + 1] = s));
            if (c === e[o + 1]) return void (e[o + 2] = s);
          }
          o++, null !== c && o++, null !== s && o++;
        }
        -1 !== r && (e.splice(r, 0, n), (o = r + 1)),
          e.splice(o++, 0, t),
          null !== c && e.splice(o++, 0, c),
          null !== s && e.splice(o++, 0, s);
      }
      const Yu = 'ng-template';
      function yT(e, n, t, c) {
        let s = 0;
        if (c) {
          for (; s < n.length && 'string' == typeof n[s]; s += 2)
            if ('class' === n[s] && -1 !== vT(n[s + 1].toLowerCase(), t, 0)) return !0;
        } else if (pi(e)) return !1;
        if (((s = n.indexOf(1, s)), s > -1)) {
          let o;
          for (; ++s < n.length && 'string' == typeof (o = n[s]); )
            if (o.toLowerCase() === t) return !0;
        }
        return !1;
      }
      function pi(e) {
        return 4 === e.type && e.value !== Yu;
      }
      function LT(e, n, t) {
        return n === (4 !== e.type || t ? e.value : Yu);
      }
      function zT(e, n, t) {
        let c = 4;
        const s = e.attrs,
          o =
            null !== s
              ? (function wT(e) {
                  for (let n = 0; n < e.length; n++) if (Gu(e[n])) return n;
                  return e.length;
                })(s)
              : 0;
        let r = !1;
        for (let i = 0; i < n.length; i++) {
          const a = n[i];
          if ('number' != typeof a) {
            if (!r)
              if (4 & c) {
                if (
                  ((c = 2 | (1 & c)),
                  ('' !== a && !LT(e, a, t)) || ('' === a && 1 === n.length))
                ) {
                  if (ue(c)) return !1;
                  r = !0;
                }
              } else if (8 & c) {
                if (null === s || !yT(e, s, a, t)) {
                  if (ue(c)) return !1;
                  r = !0;
                }
              } else {
                const l = n[++i],
                  u = _T(a, s, pi(e), t);
                if (-1 === u) {
                  if (ue(c)) return !1;
                  r = !0;
                  continue;
                }
                if ('' !== l) {
                  let f;
                  if (((f = u > o ? '' : s[u + 1].toLowerCase()), 2 & c && l !== f)) {
                    if (ue(c)) return !1;
                    r = !0;
                  }
                }
              }
          } else {
            if (!r && !ue(c) && !ue(a)) return !1;
            if (r && ue(a)) continue;
            (r = !1), (c = a | (1 & c));
          }
        }
        return ue(c) || r;
      }
      function ue(e) {
        return !(1 & e);
      }
      function _T(e, n, t, c) {
        if (null === n) return -1;
        let s = 0;
        if (c || !t) {
          let o = !1;
          for (; s < n.length; ) {
            const r = n[s];
            if (r === e) return s;
            if (3 === r || 6 === r) o = !0;
            else {
              if (1 === r || 2 === r) {
                let i = n[++s];
                for (; 'string' == typeof i; ) i = n[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += o ? 1 : 2;
          }
          return -1;
        }
        return (function DT(e, n) {
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
      function Zu(e, n, t = !1) {
        for (let c = 0; c < n.length; c++) if (zT(e, n[c], t)) return !0;
        return !1;
      }
      function ET(e, n) {
        e: for (let t = 0; t < n.length; t++) {
          const c = n[t];
          if (e.length === c.length) {
            for (let s = 0; s < e.length; s++) if (e[s] !== c[s]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Qu(e, n) {
        return e ? ':not(' + n.trim() + ')' : n;
      }
      function NT(e) {
        let n = e[0],
          t = 1,
          c = 2,
          s = '',
          o = !1;
        for (; t < e.length; ) {
          let r = e[t];
          if ('string' == typeof r)
            if (2 & c) {
              const i = e[++t];
              s += '[' + r + (i.length > 0 ? '="' + i + '"' : '') + ']';
            } else 8 & c ? (s += '.' + r) : 4 & c && (s += ' ' + r);
          else
            '' !== s && !ue(r) && ((n += Qu(o, s)), (s = '')), (c = r), (o = o || !ue(c));
          t++;
        }
        return '' !== s && (n += Qu(o, s)), n;
      }
      function $(e) {
        return Qe(() => {
          const n = Xu(e),
            t = {
              ...n,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === o6.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (n.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || le.Emulated,
              styles: e.styles || o2,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          Ju(t);
          const c = e.dependencies;
          return (
            (t.directiveDefs = r6(c, !1)),
            (t.pipeDefs = r6(c, !0)),
            (t.id = (function kT(e) {
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
      function IT(e) {
        return J(e) || Q2(e);
      }
      function AT(e) {
        return null !== e;
      }
      function J3(e) {
        return Qe(() => ({
          type: e.type,
          bootstrap: e.bootstrap || o2,
          declarations: e.declarations || o2,
          imports: e.imports || o2,
          exports: e.exports || o2,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Ku(e, n) {
        if (null == e) return be;
        const t = {};
        for (const c in e)
          if (e.hasOwnProperty(c)) {
            const s = e[c];
            let o,
              r,
              i = Mt.None;
            Array.isArray(s)
              ? ((i = s[0]), (o = s[1]), (r = s[2] ?? o))
              : ((o = s), (r = s)),
              n ? ((t[o] = i !== Mt.None ? [c, i] : c), (n[o] = r)) : (t[o] = c);
          }
        return t;
      }
      function P(e) {
        return Qe(() => {
          const n = Xu(e);
          return Ju(n), n;
        });
      }
      function J(e) {
        return e[D4] || null;
      }
      function Q2(e) {
        return e[ni] || null;
      }
      function s1(e) {
        return e[ci] || null;
      }
      function a1(e, n) {
        const t = e[ku] || null;
        if (!t && !0 === n)
          throw new Error(`Type ${Z2(e)} does not have '\u0275mod' property.`);
        return t;
      }
      function Xu(e) {
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
          selectors: e.selectors || o2,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Ku(e.inputs, n),
          outputs: Ku(e.outputs),
          debugInfo: null,
        };
      }
      function Ju(e) {
        e.features?.forEach(n => n(e));
      }
      function r6(e, n) {
        if (!e) return null;
        const t = n ? s1 : IT;
        return () => ('function' == typeof e ? e() : e).map(c => t(c)).filter(AT);
      }
      function en(e) {
        return { ɵproviders: e };
      }
      function RT(...e) {
        return { ɵproviders: mi(0, e), ɵfromNgModule: !0 };
      }
      function mi(e, ...n) {
        const t = [],
          c = new Set();
        let s;
        const o = r => {
          t.push(r);
        };
        return (
          K3(n, r => {
            const i = r;
            i6(i, o, [], c) && ((s ||= []), s.push(i));
          }),
          void 0 !== s && ef(s, o),
          t
        );
      }
      function ef(e, n) {
        for (let t = 0; t < e.length; t++) {
          const { ngModule: c, providers: s } = e[t];
          gi(s, o => {
            n(o, c);
          });
        }
      }
      function i6(e, n, t, c) {
        if (!(e = V(e))) return !1;
        let s = null,
          o = Xc(e);
        const r = !o && J(e);
        if (o || r) {
          if (r && !r.standalone) return !1;
          s = e;
        } else {
          const a = e.ngModule;
          if (((o = Xc(a)), !o)) return !1;
          s = a;
        }
        const i = c.has(s);
        if (r) {
          if (i) return !1;
          if ((c.add(s), r.dependencies)) {
            const a =
              'function' == typeof r.dependencies ? r.dependencies() : r.dependencies;
            for (const l of a) i6(l, n, t, c);
          }
        } else {
          if (!o) return !1;
          {
            if (null != o.imports && !i) {
              let l;
              c.add(s);
              try {
                K3(o.imports, u => {
                  i6(u, n, t, c) && ((l ||= []), l.push(u));
                });
              } finally {
              }
              void 0 !== l && ef(l, n);
            }
            if (!i) {
              const l = Xt(s) || (() => new s());
              n({ provide: s, useFactory: l, deps: o2 }, s),
                n({ provide: di, useValue: s, multi: !0 }, s),
                n({ provide: j1, useValue: () => N(s), multi: !0 }, s);
            }
            const a = o.providers;
            if (null != a && !i) {
              const l = e;
              gi(a, u => {
                n(u, l);
              });
            }
          }
        }
        return s !== e && void 0 !== e.providers;
      }
      function gi(e, n) {
        for (let t of e) ti(t) && (t = t.ɵproviders), Array.isArray(t) ? gi(t, n) : n(t);
      }
      const OT = h2({ provide: String, useValue: h2 });
      function Ci(e) {
        return null !== e && 'object' == typeof e && OT in e;
      }
      function Jt(e) {
        return 'function' == typeof e;
      }
      const Mi = new _(''),
        a6 = {},
        PT = {};
      let vi;
      function l6() {
        return void 0 === vi && (vi = new s6()), vi;
      }
      class U1 {}
      class tn extends U1 {
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
            Li(n, r => this.processProvider(r)),
            this.records.set($u, nn(void 0, this)),
            s.has('environment') && this.records.set(U1, nn(void 0, this));
          const o = this.records.get(Mi);
          null != o && 'string' == typeof o.value && this.scopes.add(o.value),
            (this.injectorDefTypes = new Set(this.get(di, o2, t2.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const n = K(null);
          try {
            for (const c of this._ngOnDestroyHooks) c.ngOnDestroy();
            const t = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const c of t) c();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              K(n);
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
            c = x1(void 0);
          try {
            return n();
          } finally {
            Ct(t), x1(c);
          }
        }
        get(n, t = N4, c = t2.Default) {
          if ((this.assertNotDestroyed(), n.hasOwnProperty(Ru))) return n[Ru](this);
          c = t6(c);
          const o = Ct(this),
            r = x1(void 0);
          try {
            if (!(c & t2.SkipSelf)) {
              let a = this.records.get(n);
              if (void 0 === a) {
                const l =
                  (function HT(e) {
                    return (
                      'function' == typeof e || ('object' == typeof e && e instanceof _)
                    );
                  })(n) && Kc(n);
                (a = l && this.injectableDefInScope(l) ? nn(yi(n), a6) : null),
                  this.records.set(n, a);
              }
              if (null != a) return this.hydrate(n, a);
            }
            return (c & t2.Self ? l6() : this.parent).get(
              n,
              (t = c & t2.Optional && t === N4 ? null : t),
            );
          } catch (i) {
            if ('NullInjectorError' === i.name) {
              if (((i[e6] = i[e6] || []).unshift(Z2(n)), o)) throw i;
              return (function pT(e, n, t, c) {
                const s = e[e6];
                throw (
                  (n[Pu] && s.unshift(n[Pu]),
                  (e.message = (function mT(e, n, t, c = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let s = Z2(n);
                    if (Array.isArray(n)) s = n.map(Z2).join(' -> ');
                    else if ('object' == typeof n) {
                      let o = [];
                      for (let r in n)
                        if (n.hasOwnProperty(r)) {
                          let i = n[r];
                          o.push(
                            r + ':' + ('string' == typeof i ? JSON.stringify(i) : Z2(i)),
                          );
                        }
                      s = `{${o.join(', ')}}`;
                    }
                    return `${t}${c ? '(' + c + ')' : ''}[${s}]: ${e.replace(
                      lT,
                      '\n  ',
                    )}`;
                  })('\n' + e.message, s, t, c)),
                  (e.ngTokenPath = s),
                  (e[e6] = null),
                  e)
                );
              })(i, n, 'R3InjectorError', this.source);
            }
            throw i;
          } finally {
            x1(r), Ct(o);
          }
        }
        resolveInjectorInitializers() {
          const n = K(null),
            t = Ct(this),
            c = x1(void 0);
          try {
            const o = this.get(j1, o2, t2.Self);
            for (const r of o) r();
          } finally {
            Ct(t), x1(c), K(n);
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
          let t = Jt((n = V(n))) ? n : V(n && n.provide);
          const c = (function BT(e) {
            return Ci(e) ? nn(void 0, e.useValue) : nn(cf(e), a6);
          })(n);
          if (!Jt(n) && !0 === n.multi) {
            let s = this.records.get(t);
            s ||
              ((s = nn(void 0, a6, !0)),
              (s.factory = () => ii(s.multi)),
              this.records.set(t, s)),
              (t = n),
              s.multi.push(n);
          }
          this.records.set(t, c);
        }
        hydrate(n, t) {
          const c = K(null);
          try {
            return (
              t.value === a6 && ((t.value = PT), (t.value = t.factory())),
              'object' == typeof t.value &&
                t.value &&
                (function UT(e) {
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
            K(c);
          }
        }
        injectableDefInScope(n) {
          if (!n.providedIn) return !1;
          const t = V(n.providedIn);
          return 'string' == typeof t
            ? 'any' === t || this.scopes.has(t)
            : this.injectorDefTypes.has(t);
        }
        removeOnDestroy(n) {
          const t = this._onDestroyHooks.indexOf(n);
          -1 !== t && this._onDestroyHooks.splice(t, 1);
        }
      }
      function yi(e) {
        const n = Kc(e),
          t = null !== n ? n.factory : Xt(e);
        if (null !== t) return t;
        if (e instanceof _) throw new L(204, !1);
        if (e instanceof Function)
          return (function VT(e) {
            if (e.length > 0) throw new L(204, !1);
            const t = (function nT(e) {
              return (e && (e[Jc] || e[Au])) || null;
            })(e);
            return null !== t ? () => t.factory(e) : () => new e();
          })(e);
        throw new L(204, !1);
      }
      function cf(e, n, t) {
        let c;
        if (Jt(e)) {
          const s = V(e);
          return Xt(s) || yi(s);
        }
        if (Ci(e)) c = () => V(e.useValue);
        else if (
          (function nf(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          c = () => e.useFactory(...ii(e.deps || []));
        else if (
          (function tf(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          c = () => N(V(e.useExisting));
        else {
          const s = V(e && (e.useClass || e.provide));
          if (
            !(function jT(e) {
              return !!e.deps;
            })(e)
          )
            return Xt(s) || yi(s);
          c = () => new s(...ii(e.deps));
        }
        return c;
      }
      function nn(e, n, t = !1) {
        return { factory: e, value: n, multi: t ? [] : void 0 };
      }
      function Li(e, n) {
        for (const t of e)
          Array.isArray(t) ? Li(t, n) : t && ti(t) ? Li(t.ɵproviders, n) : n(t);
      }
      function yt(e, n) {
        e instanceof tn && e.assertNotDestroyed();
        const c = Ct(e),
          s = x1(void 0);
        try {
          return n();
        } finally {
          Ct(c), x1(s);
        }
      }
      function sf() {
        return (
          void 0 !== Ou() ||
          null !=
            (function fT() {
              return Q3;
            })()
        );
      }
      const S2 = 0,
        b = 1,
        A = 2,
        $2 = 3,
        fe = 4,
        o1 = 5,
        m1 = 6,
        sn = 7,
        L2 = 8,
        G2 = 9,
        we = 10,
        B = 11,
        A4 = 12,
        af = 13,
        on = 14,
        I2 = 15,
        e3 = 16,
        rn = 17,
        Xe = 18,
        an = 19,
        lf = 20,
        Lt = 21,
        d6 = 22,
        ee = 23,
        S = 25,
        _i = 1,
        De = 7,
        ln = 9,
        P2 = 10;
      var p6 = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(p6 || {});
      function X2(e) {
        return Array.isArray(e) && 'object' == typeof e[_i];
      }
      function l1(e) {
        return Array.isArray(e) && !0 === e[_i];
      }
      function bi(e) {
        return !!(4 & e.flags);
      }
      function t3(e) {
        return e.componentOffset > -1;
      }
      function m6(e) {
        return !(1 & ~e.flags);
      }
      function de(e) {
        return !!e.template;
      }
      function k4(e) {
        return !!(512 & e[A]);
      }
      class tk {
        constructor(n, t, c) {
          (this.previousValue = n), (this.currentValue = t), (this.firstChange = c);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function pf(e, n, t, c) {
        null !== n ? n.applyValueToInputSignal(n, c) : (e[t] = c);
      }
      function g1() {
        return mf;
      }
      function mf(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = ck), nk;
      }
      function nk() {
        const e = Cf(this),
          n = e?.current;
        if (n) {
          const t = e.previous;
          if (t === be) e.previous = n;
          else for (let c in n) t[c] = n[c];
          (e.current = null), this.ngOnChanges(n);
        }
      }
      function ck(e, n, t, c, s) {
        const o = this.declaredInputs[c],
          r =
            Cf(e) ||
            (function sk(e, n) {
              return (e[gf] = n);
            })(e, { previous: be, current: null }),
          i = r.current || (r.current = {}),
          a = r.previous,
          l = a[o];
        (i[o] = new tk(l && l.currentValue, t, a === be)), pf(e, n, s, t);
      }
      g1.ngInherit = !0;
      const gf = '__ngSimpleChanges__';
      function Cf(e) {
        return e[gf] || null;
      }
      const Ee = function (e, n, t) {};
      function r2(e) {
        for (; Array.isArray(e); ) e = e[S2];
        return e;
      }
      function R4(e, n) {
        return r2(n[e]);
      }
      function C1(e, n) {
        return r2(n[e.index]);
      }
      function O4(e, n) {
        return e.data[n];
      }
      function H1(e, n) {
        const t = n[e];
        return X2(t) ? t : t[S2];
      }
      function xi(e) {
        return !(128 & ~e[A]);
      }
      function te(e, n) {
        return null == n ? null : e[n];
      }
      function yf(e) {
        e[rn] = 0;
      }
      function Lf(e) {
        1024 & e[A] || ((e[A] |= 1024), xi(e) && C6(e));
      }
      function g6(e) {
        return !!(9216 & e[A] || e[ee]?.dirty);
      }
      function Si(e) {
        e[we].changeDetectionScheduler?.notify(8),
          64 & e[A] && (e[A] |= 1024),
          g6(e) && C6(e);
      }
      function C6(e) {
        e[we].changeDetectionScheduler?.notify(0);
        let n = Je(e);
        for (; null !== n && !(8192 & n[A]) && ((n[A] |= 8192), xi(n)); ) n = Je(n);
      }
      function M6(e, n) {
        if (!(256 & ~e[A])) throw new L(911, !1);
        null === e[Lt] && (e[Lt] = []), e[Lt].push(n);
      }
      function Je(e) {
        const n = e[$2];
        return l1(n) ? n[$2] : n;
      }
      const j = { lFrame: kf(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
      let _f = !1;
      function bf() {
        return j.bindingsEnabled;
      }
      function c3() {
        return null !== j.skipHydrationRootTNode;
      }
      function M() {
        return j.lFrame.lView;
      }
      function X() {
        return j.lFrame.tView;
      }
      function M1(e) {
        return (j.lFrame.contextLView = e), e[L2];
      }
      function v1(e) {
        return (j.lFrame.contextLView = null), e;
      }
      function p2() {
        let e = wf();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function wf() {
        return j.lFrame.currentTNode;
      }
      function he(e, n) {
        const t = j.lFrame;
        (t.currentTNode = e), (t.isParent = n);
      }
      function Ti() {
        return j.lFrame.isParent;
      }
      function ki() {
        j.lFrame.isParent = !1;
      }
      function Nf() {
        return _f;
      }
      function xf(e) {
        _f = e;
      }
      function pe() {
        return j.lFrame.bindingIndex++;
      }
      function Mk(e, n) {
        const t = j.lFrame;
        (t.bindingIndex = t.bindingRootIndex = e), Ri(n);
      }
      function Ri(e) {
        j.lFrame.currentDirectiveIndex = e;
      }
      function Fi() {
        return j.lFrame.currentQueryIndex;
      }
      function y6(e) {
        j.lFrame.currentQueryIndex = e;
      }
      function yk(e) {
        const n = e[b];
        return 2 === n.type ? n.declTNode : 1 === n.type ? e[o1] : null;
      }
      function Af(e, n, t) {
        if (t & t2.SkipSelf) {
          let s = n,
            o = e;
          for (
            ;
            !((s = s.parent),
            null !== s ||
              t & t2.Host ||
              ((s = yk(o)), null === s || ((o = o[on]), 10 & s.type)));

          );
          if (null === s) return !1;
          (n = s), (e = o);
        }
        const c = (j.lFrame = Tf());
        return (c.currentTNode = n), (c.lView = e), !0;
      }
      function Pi(e) {
        const n = Tf(),
          t = e[b];
        (j.lFrame = n),
          (n.currentTNode = t.firstChild),
          (n.lView = e),
          (n.tView = t),
          (n.contextLView = e),
          (n.bindingIndex = t.bindingStartIndex),
          (n.inI18n = !1);
      }
      function Tf() {
        const e = j.lFrame,
          n = null === e ? null : e.child;
        return null === n ? kf(e) : n;
      }
      function kf(e) {
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
      function Rf() {
        const e = j.lFrame;
        return (j.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const Of = Rf;
      function Vi() {
        const e = Rf();
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
      function r1() {
        return j.lFrame.selectedIndex;
      }
      function s3(e) {
        j.lFrame.selectedIndex = e;
      }
      function z2() {
        const e = j.lFrame;
        return O4(e.tView, e.selectedIndex);
      }
      let Pf = !0;
      function P4() {
        return Pf;
      }
      function Ne(e) {
        Pf = e;
      }
      function L6(e, n) {
        for (let t = n.directiveStart, c = n.directiveEnd; t < c; t++) {
          const o = e.data[t].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: i,
              ngAfterViewInit: a,
              ngAfterViewChecked: l,
              ngOnDestroy: u,
            } = o;
          r && (e.contentHooks ??= []).push(-t, r),
            i &&
              ((e.contentHooks ??= []).push(t, i),
              (e.contentCheckHooks ??= []).push(t, i)),
            a && (e.viewHooks ??= []).push(-t, a),
            l && ((e.viewHooks ??= []).push(t, l), (e.viewCheckHooks ??= []).push(t, l)),
            null != u && (e.destroyHooks ??= []).push(t, u);
        }
      }
      function z6(e, n, t) {
        Vf(e, n, 3, t);
      }
      function _6(e, n, t, c) {
        (3 & e[A]) === t && Vf(e, n, t, c);
      }
      function Bi(e, n) {
        let t = e[A];
        (3 & t) === n && ((t &= 16383), (t += 1), (e[A] = t));
      }
      function Vf(e, n, t, c) {
        const o = c ?? -1,
          r = n.length - 1;
        let i = 0;
        for (let a = void 0 !== c ? 65535 & e[rn] : 0; a < r; a++)
          if ('number' == typeof n[a + 1]) {
            if (((i = n[a]), null != c && i >= c)) break;
          } else
            n[a] < 0 && (e[rn] += 65536),
              (i < o || -1 == o) &&
                (Ek(e, t, n, a), (e[rn] = (4294901760 & e[rn]) + a + 2)),
              a++;
      }
      function Bf(e, n) {
        Ee(4, e, n);
        const t = K(null);
        try {
          n.call(e);
        } finally {
          K(t), Ee(5, e, n);
        }
      }
      function Ek(e, n, t, c) {
        const s = t[c] < 0,
          o = t[c + 1],
          i = e[s ? -t[c] : t[c]];
        s
          ? e[A] >> 14 < e[rn] >> 16 && (3 & e[A]) === n && ((e[A] += 16384), Bf(i, o))
          : Bf(i, o);
      }
      const un = -1;
      class V4 {
        constructor(n, t, c) {
          (this.factory = n),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = c);
        }
      }
      const Ui = {};
      class o3 {
        constructor(n, t) {
          (this.injector = n), (this.parentInjector = t);
        }
        get(n, t, c) {
          c = t6(c);
          const s = this.injector.get(n, Ui, c);
          return s !== Ui || t === Ui ? s : this.parentInjector.get(n, t, c);
        }
      }
      function Hi(e) {
        return e !== un;
      }
      function B4(e) {
        return 32767 & e;
      }
      function j4(e, n) {
        let t = (function Ik(e) {
            return e >> 16;
          })(e),
          c = n;
        for (; t > 0; ) (c = c[on]), t--;
        return c;
      }
      let $i = !0;
      function b6(e) {
        const n = $i;
        return ($i = e), n;
      }
      const Uf = 255,
        Hf = 5;
      let Tk = 0;
      const xe = {};
      function w6(e, n) {
        const t = $f(e, n);
        if (-1 !== t) return t;
        const c = n[b];
        c.firstCreatePass &&
          ((e.injectorIndex = n.length),
          Gi(c.data, e),
          Gi(n, null),
          Gi(c.blueprint, null));
        const s = D6(e, n),
          o = e.injectorIndex;
        if (Hi(s)) {
          const r = B4(s),
            i = j4(s, n),
            a = i[b].data;
          for (let l = 0; l < 8; l++) n[o + l] = i[r + l] | a[r + l];
        }
        return (n[o + 8] = s), o;
      }
      function Gi(e, n) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, n);
      }
      function $f(e, n) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === n[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function D6(e, n) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let t = 0,
          c = null,
          s = n;
        for (; null !== s; ) {
          if (((c = Kf(s)), null === c)) return un;
          if ((t++, (s = s[on]), -1 !== c.injectorIndex))
            return c.injectorIndex | (t << 16);
        }
        return un;
      }
      function qi(e, n, t) {
        !(function kk(e, n, t) {
          let c;
          'string' == typeof t
            ? (c = t.charCodeAt(0) || 0)
            : t.hasOwnProperty(E4) && (c = t[E4]),
            null == c && (c = t[E4] = Tk++);
          const s = c & Uf;
          n.data[e + (s >> Hf)] |= 1 << s;
        })(e, n, t);
      }
      function Gf(e, n, t) {
        if (t & t2.Optional || void 0 !== e) return e;
        si();
      }
      function qf(e, n, t, c) {
        if ((t & t2.Optional && void 0 === c && (c = null), !(t & (t2.Self | t2.Host)))) {
          const s = e[G2],
            o = x1(void 0);
          try {
            return s ? s.get(n, c, t & t2.Optional) : Fu(n, c, t & t2.Optional);
          } finally {
            x1(o);
          }
        }
        return Gf(c, 0, t);
      }
      function Wf(e, n, t, c = t2.Default, s) {
        if (null !== e) {
          if (2048 & n[A] && !(c & t2.Self)) {
            const r = (function Vk(e, n, t, c, s) {
              let o = e,
                r = n;
              for (; null !== o && null !== r && 2048 & r[A] && !(512 & r[A]); ) {
                const i = Yf(o, r, t, c | t2.Self, xe);
                if (i !== xe) return i;
                let a = o.parent;
                if (!a) {
                  const l = r[lf];
                  if (l) {
                    const u = l.get(t, xe, c);
                    if (u !== xe) return u;
                  }
                  (a = Kf(r)), (r = r[on]);
                }
                o = a;
              }
              return s;
            })(e, n, t, c, xe);
            if (r !== xe) return r;
          }
          const o = Yf(e, n, t, c, xe);
          if (o !== xe) return o;
        }
        return qf(n, t, c, s);
      }
      function Yf(e, n, t, c, s) {
        const o = (function Fk(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const n = e.hasOwnProperty(E4) ? e[E4] : void 0;
          return 'number' == typeof n ? (n >= 0 ? n & Uf : Pk) : n;
        })(t);
        if ('function' == typeof o) {
          if (!Af(n, e, c)) return c & t2.Host ? Gf(s, 0, c) : qf(n, t, c, s);
          try {
            let r;
            if (((r = o(c)), null != r || c & t2.Optional)) return r;
            si();
          } finally {
            Of();
          }
        } else if ('number' == typeof o) {
          let r = null,
            i = $f(e, n),
            a = un,
            l = c & t2.Host ? n[I2][o1] : null;
          for (
            (-1 === i || c & t2.SkipSelf) &&
            ((a = -1 === i ? D6(e, n) : n[i + 8]),
            a !== un && Qf(c, !1) ? ((r = n[b]), (i = B4(a)), (n = j4(a, n))) : (i = -1));
            -1 !== i;

          ) {
            const u = n[b];
            if (Zf(o, i, u.data)) {
              const f = Ok(i, n, t, r, c, l);
              if (f !== xe) return f;
            }
            (a = n[i + 8]),
              a !== un && Qf(c, n[b].data[i + 8] === l) && Zf(o, i, n)
                ? ((r = u), (i = B4(a)), (n = j4(a, n)))
                : (i = -1);
          }
        }
        return s;
      }
      function Ok(e, n, t, c, s, o) {
        const r = n[b],
          i = r.data[e + 8],
          u = E6(
            i,
            r,
            t,
            null == c ? t3(i) && $i : c != r && !!(3 & i.type),
            s & t2.Host && o === i,
          );
        return null !== u ? r3(n, r, u, i) : xe;
      }
      function E6(e, n, t, c, s) {
        const o = e.providerIndexes,
          r = n.data,
          i = 1048575 & o,
          a = e.directiveStart,
          u = o >> 20,
          d = s ? i + u : e.directiveEnd;
        for (let h = c ? i : i + u; h < d; h++) {
          const p = r[h];
          if ((h < a && t === p) || (h >= a && p.type === t)) return h;
        }
        if (s) {
          const h = r[a];
          if (h && de(h) && h.type === t) return a;
        }
        return null;
      }
      function r3(e, n, t, c) {
        let s = e[t];
        const o = n.data;
        if (
          (function Nk(e) {
            return e instanceof V4;
          })(s)
        ) {
          const r = s;
          r.resolving &&
            (function rT(e, n) {
              throw (n && n.join(' > '), new L(-200, e));
            })(
              (function a2(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e && null != e && 'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : U(e);
              })(o[t]),
            );
          const i = b6(r.canSeeViewProviders);
          r.resolving = !0;
          const l = r.injectImpl ? x1(r.injectImpl) : null;
          Af(e, c, t2.Default);
          try {
            (s = e[t] = r.factory(void 0, o, e, c)),
              n.firstCreatePass &&
                t >= c.directiveStart &&
                (function Dk(e, n, t) {
                  const { ngOnChanges: c, ngOnInit: s, ngDoCheck: o } = n.type.prototype;
                  if (c) {
                    const r = mf(n);
                    (t.preOrderHooks ??= []).push(e, r),
                      (t.preOrderCheckHooks ??= []).push(e, r);
                  }
                  s && (t.preOrderHooks ??= []).push(0 - e, s),
                    o &&
                      ((t.preOrderHooks ??= []).push(e, o),
                      (t.preOrderCheckHooks ??= []).push(e, o));
                })(t, o[t], n);
          } finally {
            null !== l && x1(l), b6(i), (r.resolving = !1), Of();
          }
        }
        return s;
      }
      function Zf(e, n, t) {
        return !!(t[n + (e >> Hf)] & (1 << e));
      }
      function Qf(e, n) {
        return !(e & t2.Self || (e & t2.Host && n));
      }
      class J2 {
        constructor(n, t) {
          (this._tNode = n), (this._lView = t);
        }
        get(n, t, c) {
          return Wf(this._tNode, this._lView, n, t6(c), t);
        }
      }
      function Pk() {
        return new J2(p2(), M());
      }
      function q2(e) {
        return Qe(() => {
          const n = e.prototype.constructor,
            t = n[Ke] || Wi(n),
            c = Object.prototype;
          let s = Object.getPrototypeOf(e.prototype).constructor;
          for (; s && s !== c; ) {
            const o = s[Ke] || Wi(s);
            if (o && o !== t) return o;
            s = Object.getPrototypeOf(s);
          }
          return o => new o();
        });
      }
      function Wi(e) {
        return Qc(e)
          ? () => {
              const n = Wi(V(e));
              return n && n();
            }
          : Xt(e);
      }
      function Kf(e) {
        const n = e[b],
          t = n.type;
        return 2 === t ? n.declTNode : 1 === t ? e[o1] : null;
      }
      function nd(e, n = null, t = null, c) {
        const s = cd(e, n, t, c);
        return s.resolveInjectorInitializers(), s;
      }
      function cd(e, n = null, t = null, c, s = new Set()) {
        const o = [t || o2, RT(e)];
        return (
          (c = c || ('object' == typeof e ? void 0 : Z2(e))),
          new tn(o, n || l6(), c || null, s)
        );
      }
      class A2 {
        static #e = (this.THROW_IF_NOT_FOUND = N4);
        static #t = (this.NULL = new s6());
        static create(n, t) {
          if (Array.isArray(n)) return nd({ name: '' }, t, n, '');
          {
            const c = n.name ?? '';
            return nd({ name: c }, n.parent, n.providers, c);
          }
        }
        static #n = (this.ɵprov = w({
          token: A2,
          providedIn: 'any',
          factory: () => N($u),
        }));
        static #c = (this.__NG_ELEMENT_ID__ = -1);
      }
      new _('').__NG_ELEMENT_ID__ = e => {
        const n = p2();
        if (null === n) throw new L(204, !1);
        if (2 & n.type) return n.value;
        if (e & t2.Optional) return null;
        throw new L(204, !1);
      };
      function Zi(e) {
        return e.ngOriginalError;
      }
      const od = !0;
      let i3 = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Zk);
          static #t = (this.__NG_ENV_ID__ = t => t);
        }
        return e;
      })();
      class Yk extends i3 {
        constructor(n) {
          super(), (this._lView = n);
        }
        onDestroy(n) {
          return (
            M6(this._lView, n),
            () =>
              (function Ii(e, n) {
                if (null === e[Lt]) return;
                const t = e[Lt].indexOf(n);
                -1 !== t && e[Lt].splice(t, 1);
              })(this._lView, n)
          );
        }
      }
      function Zk() {
        return new Yk(M());
      }
      let a3 = (() => {
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
      const Z = class Qk extends p1 {
        constructor(n = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = n),
            sf() &&
              ((this.destroyRef = y(i3, { optional: !0 }) ?? void 0),
              (this.pendingTasks = y(a3, { optional: !0 }) ?? void 0));
        }
        emit(n) {
          const t = K(null);
          try {
            super.next(n);
          } finally {
            K(t);
          }
        }
        subscribe(n, t, c) {
          let s = n,
            o = t || (() => null),
            r = c;
          if (n && 'object' == typeof n) {
            const a = n;
            (s = a.next?.bind(a)), (o = a.error?.bind(a)), (r = a.complete?.bind(a));
          }
          this.__isAsync &&
            ((o = this.wrapInTimeout(o)),
            s && (s = this.wrapInTimeout(s)),
            r && (r = this.wrapInTimeout(r)));
          const i = super.subscribe({ next: s, error: o, complete: r });
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
      function x6(...e) {}
      function rd(e) {
        let n, t;
        function c() {
          e = x6;
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
      function id(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = x6;
          }
        );
      }
      const Qi = 'isAngularZone',
        S6 = Qi + '_ID';
      let Kk = 0;
      class l2 {
        constructor(n) {
          (this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Z(!1)),
            (this.onMicrotaskEmpty = new Z(!1)),
            (this.onStable = new Z(!1)),
            (this.onError = new Z(!1));
          const {
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: c = !1,
            shouldCoalesceRunChangeDetection: s = !1,
            scheduleInRootZone: o = od,
          } = n;
          if (typeof Zone > 'u') throw new L(908, !1);
          Zone.assertZonePatched();
          const r = this;
          (r._nesting = 0),
            (r._outer = r._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (r._inner = r._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (r._inner = r._inner.fork(Zone.longStackTraceZoneSpec)),
            (r.shouldCoalesceEventChangeDetection = !s && c),
            (r.shouldCoalesceRunChangeDetection = s),
            (r.callbackScheduled = !1),
            (r.scheduleInRootZone = o),
            (function eR(e) {
              const n = () => {
                  !(function Jk(e) {
                    function n() {
                      rd(() => {
                        (e.callbackScheduled = !1),
                          Xi(e),
                          (e.isCheckStableRunning = !0),
                          Ki(e),
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
                      Xi(e));
                  })(e);
                },
                t = Kk++;
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { [Qi]: !0, [S6]: t, [S6 + t]: !0 },
                onInvokeTask: (c, s, o, r, i, a) => {
                  if (
                    (function tR(e) {
                      return ud(e, '__ignore_ng_zone__');
                    })(a)
                  )
                    return c.invokeTask(o, r, i, a);
                  try {
                    return ad(e), c.invokeTask(o, r, i, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === r.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      n(),
                      ld(e);
                  }
                },
                onInvoke: (c, s, o, r, i, a, l) => {
                  try {
                    return ad(e), c.invoke(o, r, i, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function nR(e) {
                        return ud(e, '__scheduler_tick__');
                      })(a) &&
                      n(),
                      ld(e);
                  }
                },
                onHasTask: (c, s, o, r) => {
                  c.hasTask(o, r),
                    s === o &&
                      ('microTask' == r.change
                        ? ((e._hasPendingMicrotasks = r.microTask), Xi(e), Ki(e))
                        : 'macroTask' == r.change &&
                          (e.hasPendingMacrotasks = r.macroTask));
                },
                onHandleError: (c, s, o, r) => (
                  c.handleError(o, r), e.runOutsideAngular(() => e.onError.emit(r)), !1
                ),
              });
            })(r);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get(Qi);
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
          const o = this._inner,
            r = o.scheduleEventTask('NgZoneEvent: ' + s, n, Xk, x6, x6);
          try {
            return o.runTask(r, t, c);
          } finally {
            o.cancelTask(r);
          }
        }
        runGuarded(n, t, c) {
          return this._inner.runGuarded(n, t, c);
        }
        runOutsideAngular(n) {
          return this._outer.run(n);
        }
      }
      const Xk = {};
      function Ki(e) {
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
      function Xi(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function ad(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ld(e) {
        e._nesting--, Ki(e);
      }
      class Ji {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Z()),
            (this.onMicrotaskEmpty = new Z()),
            (this.onStable = new Z()),
            (this.onError = new Z());
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
      function ud(e, n) {
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
          let t = n && Zi(n);
          for (; t && Zi(t); ) t = Zi(t);
          return t || null;
        }
      }
      const sR = new _('', {
        providedIn: 'root',
        factory: () => {
          const e = y(l2),
            n = y(Se);
          return t => e.runOutsideAngular(() => n.handleError(t));
        },
      });
      function oR() {
        return hn(p2(), M());
      }
      function hn(e, n) {
        return new A1(C1(e, n));
      }
      let A1 = (() => {
        class e {
          constructor(t) {
            this.nativeElement = t;
          }
          static #e = (this.__NG_ELEMENT_ID__ = oR);
        }
        return e;
      })();
      function dd(e) {
        return e instanceof A1 ? e.nativeElement : e;
      }
      function rR() {
        return this._results[Symbol.iterator]();
      }
      class ea {
        static #e = Symbol.iterator;
        get changes() {
          return (this._changes ??= new Z());
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
          const t = ea.prototype;
          t[Symbol.iterator] || (t[Symbol.iterator] = rR);
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
          const c = (function S1(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(n);
          (this._changesDetected = !(function MT(e, n, t) {
            if (e.length !== n.length) return !1;
            for (let c = 0; c < e.length; c++) {
              let s = e[c],
                o = n[c];
              if ((t && ((s = t(s)), (o = t(o))), o !== s)) return !1;
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
      function $4(e) {
        return !(128 & ~e.flags);
      }
      const na = new Map();
      let aR = 0;
      function ca(e) {
        na.delete(e[an]);
      }
      const I6 = '__ngContext__';
      function u1(e, n) {
        X2(n)
          ? ((e[I6] = n[an]),
            (function uR(e) {
              na.set(e[an], e);
            })(n))
          : (e[I6] = n);
      }
      function zd(e) {
        return bd(e[A4]);
      }
      function _d(e) {
        return bd(e[fe]);
      }
      function bd(e) {
        for (; null !== e && !l1(e); ) e = e[fe];
        return e;
      }
      let oa;
      function zt() {
        if (void 0 !== oa) return oa;
        if (typeof document < 'u') return document;
        throw new L(210, !1);
      }
      const q4 = new _('', { providedIn: 'root', factory: () => ER }),
        ER = 'ng',
        Ad = new _(''),
        nt = new _('', { providedIn: 'platform', factory: () => 'unknown' }),
        ra = new _('', {
          providedIn: 'root',
          factory: () =>
            zt().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') || null,
        });
      let Td = () => null;
      function ha(e, n, t = !1) {
        return Td(e, n, t);
      }
      const jd = new _('', { providedIn: 'root', factory: () => !1 });
      let B6, j6;
      function Cn(e) {
        return (
          (function Ma() {
            if (void 0 === B6 && ((B6 = null), N2.trustedTypes))
              try {
                B6 = N2.trustedTypes.createPolicy('angular', {
                  createHTML: e => e,
                  createScript: e => e,
                  createScriptURL: e => e,
                });
              } catch {}
            return B6;
          })()?.createHTML(e) || e
        );
      }
      function va() {
        if (void 0 === j6 && ((j6 = null), N2.trustedTypes))
          try {
            j6 = N2.trustedTypes.createPolicy('angular#unsafe-bypass', {
              createHTML: e => e,
              createScript: e => e,
              createScriptURL: e => e,
            });
          } catch {}
        return j6;
      }
      function $d(e) {
        return va()?.createHTML(e) || e;
      }
      function qd(e) {
        return va()?.createScriptURL(e) || e;
      }
      class u3 {
        constructor(n) {
          this.changingThisBreaksApplicationSecurity = n;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Eu})`;
        }
      }
      class jR extends u3 {
        getTypeName() {
          return 'HTML';
        }
      }
      class UR extends u3 {
        getTypeName() {
          return 'Style';
        }
      }
      class HR extends u3 {
        getTypeName() {
          return 'Script';
        }
      }
      class $R extends u3 {
        getTypeName() {
          return 'URL';
        }
      }
      class GR extends u3 {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function $1(e) {
        return e instanceof u3 ? e.changingThisBreaksApplicationSecurity : e;
      }
      function Ie(e, n) {
        const t = (function qR(e) {
          return (e instanceof u3 && e.getTypeName()) || null;
        })(e);
        if (null != t && t !== n) {
          if ('ResourceURL' === t && 'URL' === n) return !0;
          throw new Error(`Required a safe ${n}, got a ${t} (see ${Eu})`);
        }
        return t === n;
      }
      class XR {
        constructor(n) {
          this.inertDocumentHelper = n;
        }
        getInertBodyElement(n) {
          n = '<body><remove></remove>' + n;
          try {
            const t = new window.DOMParser().parseFromString(Cn(n), 'text/html').body;
            return null === t
              ? this.inertDocumentHelper.getInertBodyElement(n)
              : (t.firstChild?.remove(), t);
          } catch {
            return null;
          }
        }
      }
      class JR {
        constructor(n) {
          (this.defaultDoc = n),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument('sanitization-inert'));
        }
        getInertBodyElement(n) {
          const t = this.inertDocument.createElement('template');
          return (t.innerHTML = Cn(n)), t;
        }
      }
      const tO = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      function U6(e) {
        return (e = String(e)).match(tO) ? e : 'unsafe:' + e;
      }
      function ct(e) {
        const n = {};
        for (const t of e.split(',')) n[t] = !0;
        return n;
      }
      function X4(...e) {
        const n = {};
        for (const t of e) for (const c in t) t.hasOwnProperty(c) && (n[c] = !0);
        return n;
      }
      const Yd = ct('area,br,col,hr,img,wbr'),
        Zd = ct('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        Qd = ct('rp,rt'),
        ya = X4(
          Yd,
          X4(
            Zd,
            ct(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
            ),
          ),
          X4(
            Qd,
            ct(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
            ),
          ),
          X4(Qd, Zd),
        ),
        La = ct('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        Kd = X4(
          La,
          ct(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
          ),
          ct(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
          ),
        ),
        nO = ct('script,style,template');
      class cO {
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
              s.push(t), (t = rO(t));
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let o = oO(t);
                if (o) {
                  t = o;
                  break;
                }
                t = s.pop();
              }
          return this.buf.join('');
        }
        startElement(n) {
          const t = Xd(n).toLowerCase();
          if (!ya.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !nO.hasOwnProperty(t);
          this.buf.push('<'), this.buf.push(t);
          const c = n.attributes;
          for (let s = 0; s < c.length; s++) {
            const o = c.item(s),
              r = o.name,
              i = r.toLowerCase();
            if (!Kd.hasOwnProperty(i)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let a = o.value;
            La[i] && (a = U6(a)), this.buf.push(' ', r, '="', eh(a), '"');
          }
          return this.buf.push('>'), !0;
        }
        endElement(n) {
          const t = Xd(n).toLowerCase();
          ya.hasOwnProperty(t) &&
            !Yd.hasOwnProperty(t) &&
            (this.buf.push('</'), this.buf.push(t), this.buf.push('>'));
        }
        chars(n) {
          this.buf.push(eh(n));
        }
      }
      function oO(e) {
        const n = e.nextSibling;
        if (n && e !== n.previousSibling) throw Jd(n);
        return n;
      }
      function rO(e) {
        const n = e.firstChild;
        if (
          n &&
          (function sO(e, n) {
            return (
              (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
              Node.DOCUMENT_POSITION_CONTAINED_BY
            );
          })(e, n)
        )
          throw Jd(n);
        return n;
      }
      function Xd(e) {
        const n = e.nodeName;
        return 'string' == typeof n ? n : 'FORM';
      }
      function Jd(e) {
        return new Error(
          `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
        );
      }
      const iO = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        aO = /([^\#-~ |!])/g;
      function eh(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(iO, function (n) {
            return (
              '&#' +
              (1024 * (n.charCodeAt(0) - 55296) + (n.charCodeAt(1) - 56320) + 65536) +
              ';'
            );
          })
          .replace(aO, function (n) {
            return '&#' + n.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let H6;
      function th(e, n) {
        let t = null;
        try {
          H6 =
            H6 ||
            (function Wd(e) {
              const n = new JR(e);
              return (function eO() {
                try {
                  return !!new window.DOMParser().parseFromString(Cn(''), 'text/html');
                } catch {
                  return !1;
                }
              })()
                ? new XR(n)
                : n;
            })(e);
          let c = n ? String(n) : '';
          t = H6.getInertBodyElement(c);
          let s = 5,
            o = c;
          do {
            if (0 === s)
              throw new Error('Failed to sanitize html because the input is unstable');
            s--, (c = o), (o = t.innerHTML), (t = H6.getInertBodyElement(c));
          } while (c !== o);
          return Cn(new cO().sanitizeChildren(za(t) || t));
        } finally {
          if (t) {
            const c = za(t) || t;
            for (; c.firstChild; ) c.firstChild.remove();
          }
        }
      }
      function za(e) {
        return 'content' in e &&
          (function lO(e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      var ne = (function (e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })(ne || {});
      function nh(e) {
        const n = J4();
        return n
          ? $d(n.sanitize(ne.HTML, e) || '')
          : Ie(e, 'HTML')
          ? $d($1(e))
          : th(zt(), U(e));
      }
      function _a(e) {
        const n = J4();
        return n ? n.sanitize(ne.URL, e) || '' : Ie(e, 'URL') ? $1(e) : U6(U(e));
      }
      function ch(e) {
        const n = J4();
        if (n) return qd(n.sanitize(ne.RESOURCE_URL, e) || '');
        if (Ie(e, 'ResourceURL')) return qd($1(e));
        throw new L(904, !1);
      }
      function J4() {
        const e = M();
        return e && e[we].sanitizer;
      }
      const mO = /^>|^->|<!--|-->|--!>|<!-$/g,
        gO = /(<|>)/g,
        CO = '\u200b$1\u200b';
      function G1(e) {
        return e instanceof Function ? e() : e;
      }
      var _t = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'), (e[(e.DashCase = 2)] = 'DashCase'), e
        );
      })(_t || {});
      let Da;
      function Ea(e, n) {
        return Da(e, n);
      }
      function vn(e, n, t, c, s) {
        if (null != c) {
          let o,
            r = !1;
          l1(c) ? (o = c) : X2(c) && ((r = !0), (c = c[S2]));
          const i = r2(c);
          0 === e && null !== t
            ? null == s
              ? Ch(n, t, i)
              : f3(n, t, i, s || null, !0)
            : 1 === e && null !== t
            ? f3(n, t, i, s || null, !0)
            : 2 === e
            ? (function t0(e, n, t) {
                e.removeChild(null, n, t);
              })(n, i, r)
            : 3 === e && n.destroyNode(i),
            null != o &&
              (function FO(e, n, t, c, s) {
                const o = t[De];
                o !== r2(t) && vn(n, e, c, o, s);
                for (let i = P2; i < t.length; i++) {
                  const a = t[i];
                  Z6(a[b], a, e, n, c, o);
                }
              })(n, e, o, t, s);
        }
      }
      function xa(e, n) {
        return e.createComment(
          (function oh(e) {
            return e.replace(mO, n => n.replace(gO, CO));
          })(n),
        );
      }
      function q6(e, n, t) {
        return e.createElement(n, t);
      }
      function ph(e, n) {
        n[we].changeDetectionScheduler?.notify(9), Z6(e, n, n[B], 2, null, null);
      }
      function mh(e, n) {
        const t = e[ln],
          c = n[$2];
        (X2(c) || n[I2] !== c[$2][I2]) && (e[A] |= p6.HasTransplantedViews),
          null === t ? (e[ln] = [n]) : t.push(n);
      }
      function Sa(e, n) {
        const t = e[ln],
          c = t.indexOf(n);
        t.splice(c, 1);
      }
      function e0(e, n) {
        if (e.length <= P2) return;
        const t = P2 + n,
          c = e[t];
        if (c) {
          const s = c[e3];
          null !== s && s !== e && Sa(s, c), n > 0 && (e[t - 1][fe] = c[fe]);
          const o = n6(e, P2 + n);
          !(function xO(e, n) {
            ph(e, n), (n[S2] = null), (n[o1] = null);
          })(c[b], c);
          const r = o[Xe];
          null !== r && r.detachView(o[b]),
            (c[$2] = null),
            (c[fe] = null),
            (c[A] &= -129);
        }
        return c;
      }
      function W6(e, n) {
        if (!(256 & n[A])) {
          const t = n[B];
          t.destroyNode && Z6(e, n, t, 3, null, null),
            (function IO(e) {
              let n = e[A4];
              if (!n) return Ia(e[b], e);
              for (; n; ) {
                let t = null;
                if (X2(n)) t = n[A4];
                else {
                  const c = n[P2];
                  c && (t = c);
                }
                if (!t) {
                  for (; n && !n[fe] && n !== e; ) X2(n) && Ia(n[b], n), (n = n[$2]);
                  null === n && (n = e), X2(n) && Ia(n[b], n), (t = n && n[fe]);
                }
                n = t;
              }
            })(n);
        }
      }
      function Ia(e, n) {
        if (256 & n[A]) return;
        const t = K(null);
        try {
          (n[A] &= -129),
            (n[A] |= 256),
            n[ee] && Sr(n[ee]),
            (function kO(e, n) {
              let t;
              if (null != e && null != (t = e.destroyHooks))
                for (let c = 0; c < t.length; c += 2) {
                  const s = n[t[c]];
                  if (!(s instanceof V4)) {
                    const o = t[c + 1];
                    if (Array.isArray(o))
                      for (let r = 0; r < o.length; r += 2) {
                        const i = s[o[r]],
                          a = o[r + 1];
                        Ee(4, i, a);
                        try {
                          a.call(i);
                        } finally {
                          Ee(5, i, a);
                        }
                      }
                    else {
                      Ee(4, s, o);
                      try {
                        o.call(s);
                      } finally {
                        Ee(5, s, o);
                      }
                    }
                  }
                }
            })(e, n),
            (function TO(e, n) {
              const t = e.cleanup,
                c = n[sn];
              if (null !== t)
                for (let o = 0; o < t.length - 1; o += 2)
                  if ('string' == typeof t[o]) {
                    const r = t[o + 3];
                    r >= 0 ? c[r]() : c[-r].unsubscribe(), (o += 2);
                  } else t[o].call(c[t[o + 1]]);
              null !== c && (n[sn] = null);
              const s = n[Lt];
              if (null !== s) {
                n[Lt] = null;
                for (let o = 0; o < s.length; o++) (0, s[o])();
              }
            })(e, n),
            1 === n[b].type && n[B].destroy();
          const c = n[e3];
          if (null !== c && l1(n[$2])) {
            c !== n[$2] && Sa(c, n);
            const s = n[Xe];
            null !== s && s.detachView(e);
          }
          ca(n);
        } finally {
          K(t);
        }
      }
      function Aa(e, n, t) {
        return (function gh(e, n, t) {
          let c = n;
          for (; null !== c && 168 & c.type; ) c = (n = c).parent;
          if (null === c) return t[S2];
          {
            const { componentOffset: s } = c;
            if (s > -1) {
              const { encapsulation: o } = e.data[c.directiveStart + s];
              if (o === le.None || o === le.Emulated) return null;
            }
            return C1(c, t);
          }
        })(e, n.parent, t);
      }
      function f3(e, n, t, c, s) {
        e.insertBefore(n, t, c, s);
      }
      function Ch(e, n, t) {
        e.appendChild(n, t);
      }
      function Mh(e, n, t, c, s) {
        null !== c ? f3(e, n, t, c, s) : Ch(e, n, t);
      }
      function Ta(e, n) {
        return e.parentNode(n);
      }
      function vh(e, n, t) {
        return Lh(e, n, t);
      }
      let ka,
        Lh = function yh(e, n, t) {
          return 40 & e.type ? C1(e, t) : null;
        };
      function Y6(e, n, t, c) {
        const s = Aa(e, c, n),
          o = n[B],
          i = vh(c.parent || n[o1], c, n);
        if (null != s)
          if (Array.isArray(t)) for (let a = 0; a < t.length; a++) Mh(o, s, t[a], i, !1);
          else Mh(o, s, t, i, !1);
        void 0 !== ka && ka(o, c, n, t, s);
      }
      function d3(e, n) {
        if (null !== n) {
          const t = n.type;
          if (3 & t) return C1(n, e);
          if (4 & t) return Ra(-1, e[n.index]);
          if (8 & t) {
            const c = n.child;
            if (null !== c) return d3(e, c);
            {
              const s = e[n.index];
              return l1(s) ? Ra(-1, s) : r2(s);
            }
          }
          if (128 & t) return d3(e, n.next);
          if (32 & t) return Ea(n, e)() || r2(e[n.index]);
          {
            const c = _h(e, n);
            return null !== c
              ? Array.isArray(c)
                ? c[0]
                : d3(Je(e[I2]), c)
              : d3(e, n.next);
          }
        }
        return null;
      }
      function _h(e, n) {
        return null !== n ? e[I2][o1].projection[n.projection] : null;
      }
      function Ra(e, n) {
        const t = P2 + e + 1;
        if (t < n.length) {
          const c = n[t],
            s = c[b].firstChild;
          if (null !== s) return d3(c, s);
        }
        return n[De];
      }
      function Oa(e, n, t, c, s, o, r) {
        for (; null != t; ) {
          if (128 === t.type) {
            t = t.next;
            continue;
          }
          const i = c[t.index],
            a = t.type;
          if ((r && 0 === n && (i && u1(r2(i), c), (t.flags |= 2)), 32 & ~t.flags))
            if (8 & a) Oa(e, n, t.child, c, s, o, !1), vn(n, e, s, i, o);
            else if (32 & a) {
              const l = Ea(t, c);
              let u;
              for (; (u = l()); ) vn(n, e, s, u, o);
              vn(n, e, s, i, o);
            } else 16 & a ? wh(e, n, c, t, s, o) : vn(n, e, s, i, o);
          t = r ? t.projectionNext : t.next;
        }
      }
      function Z6(e, n, t, c, s, o) {
        Oa(t, c, e.firstChild, n, s, o, !1);
      }
      function wh(e, n, t, c, s, o) {
        const r = t[I2],
          a = r[o1].projection[c.projection];
        if (Array.isArray(a)) for (let l = 0; l < a.length; l++) vn(n, e, s, a[l], o);
        else {
          let l = a;
          const u = r[$2];
          $4(c) && (l.flags |= 128), Oa(e, n, l, u, s, o, !0);
        }
      }
      function Dh(e, n, t) {
        '' === t ? e.removeAttribute(n, 'class') : e.setAttribute(n, 'class', t);
      }
      function Eh(e, n, t) {
        const { mergedAttrs: c, classes: s, styles: o } = t;
        null !== c && hi(e, n, c),
          null !== s && Dh(e, n, s),
          null !== o &&
            (function VO(e, n, t) {
              e.setAttribute(n, 'style', t);
            })(e, n, o);
      }
      const H = {};
      function I(e = 1) {
        Nh(X(), M(), r1() + e, !1);
      }
      function Nh(e, n, t, c) {
        if (!c)
          if (3 & ~n[A]) {
            const o = e.preOrderHooks;
            null !== o && _6(n, o, 0, t);
          } else {
            const o = e.preOrderCheckHooks;
            null !== o && z6(n, o, t);
          }
        s3(t);
      }
      function z(e, n = t2.Default) {
        const t = M();
        return null === t ? N(e, n) : Wf(p2(), t, V(e), n);
      }
      function Fa() {
        throw new Error('invalid');
      }
      function xh(e, n, t, c, s, o) {
        const r = K(null);
        try {
          let i = null;
          s & Mt.SignalBased && (i = n[c][ae]),
            null !== i && void 0 !== i.transformFn && (o = i.transformFn(o)),
            s & Mt.HasDecoratorInputTransform && (o = e.inputTransforms[c].call(n, o)),
            null !== e.setInput ? e.setInput(n, i, o, t, c) : pf(n, i, c, o);
        } finally {
          K(r);
        }
      }
      function Q6(e, n, t, c, s, o, r, i, a, l, u) {
        const f = n.blueprint.slice();
        return (
          (f[S2] = s),
          (f[A] = 204 | c),
          (null !== l || (e && 2048 & e[A])) && (f[A] |= 2048),
          yf(f),
          (f[$2] = f[on] = e),
          (f[L2] = t),
          (f[we] = r || (e && e[we])),
          (f[B] = i || (e && e[B])),
          (f[G2] = a || (e && e[G2]) || null),
          (f[o1] = o),
          (f[an] = (function lR() {
            return aR++;
          })()),
          (f[m1] = u),
          (f[lf] = l),
          (f[I2] = 2 == n.type ? e[I2] : f),
          f
        );
      }
      function h3(e, n, t, c, s) {
        let o = e.data[n];
        if (null === o)
          (o = (function Pa(e, n, t, c, s) {
            const o = wf(),
              r = Ti(),
              a = (e.data[n] = (function WO(e, n, t, c, s, o) {
                let r = n ? n.injectorIndex : -1,
                  i = 0;
                return (
                  c3() && (i |= 128),
                  {
                    type: t,
                    index: c,
                    insertBeforeIndex: null,
                    injectorIndex: r,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: i,
                    providerIndexes: 0,
                    value: s,
                    attrs: o,
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
              })(0, r ? o : o && o.parent, t, n, c, s));
            return (
              null === e.firstChild && (e.firstChild = a),
              null !== o &&
                (r
                  ? null == o.child && null !== a.parent && (o.child = a)
                  : null === o.next && ((o.next = a), (a.prev = o))),
              a
            );
          })(e, n, t, c, s)),
            (function Ck() {
              return j.lFrame.inI18n;
            })() && (o.flags |= 32);
        else if (64 & o.type) {
          (o.type = t), (o.value = c), (o.attrs = s);
          const r = (function F4() {
            const e = j.lFrame,
              n = e.currentTNode;
            return e.isParent ? n : n.parent;
          })();
          o.injectorIndex = null === r ? -1 : r.injectorIndex;
        }
        return he(o, !0), o;
      }
      function n0(e, n, t, c) {
        if (0 === t) return -1;
        const s = n.length;
        for (let o = 0; o < t; o++) n.push(c), e.blueprint.push(c), e.data.push(null);
        return s;
      }
      function Sh(e, n, t, c, s) {
        const o = r1(),
          r = 2 & c;
        try {
          s3(-1), r && n.length > S && Nh(e, n, S, !1), Ee(r ? 2 : 0, s), t(c, s);
        } finally {
          s3(o), Ee(r ? 3 : 1, s);
        }
      }
      function Va(e, n, t) {
        if (bi(n)) {
          const c = K(null);
          try {
            const o = n.directiveEnd;
            for (let r = n.directiveStart; r < o; r++) {
              const i = e.data[r];
              i.contentQueries && i.contentQueries(1, t[r], r);
            }
          } finally {
            K(c);
          }
        }
      }
      function Ba(e, n, t) {
        bf() &&
          ((function eF(e, n, t, c) {
            const s = t.directiveStart,
              o = t.directiveEnd;
            t3(t) &&
              (function iF(e, n, t) {
                const c = C1(n, e),
                  s = Ih(t);
                let r = 16;
                t.signals ? (r = 4096) : t.onPush && (r = 64);
                const i = K6(
                  e,
                  Q6(
                    e,
                    s,
                    null,
                    r,
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
              e.firstCreatePass || w6(t, n),
              u1(c, n);
            const r = t.initialInputs;
            for (let i = s; i < o; i++) {
              const a = e.data[i],
                l = r3(n, e, i, t);
              u1(l, n),
                null !== r && aF(0, i - s, l, a, 0, r),
                de(a) && (H1(t.index, n)[L2] = r3(n, e, i, t));
            }
          })(e, n, t, C1(t, n)),
          !(64 & ~t.flags) && Oh(e, n, t));
      }
      function ja(e, n, t = C1) {
        const c = n.localNames;
        if (null !== c) {
          let s = n.index + 1;
          for (let o = 0; o < c.length; o += 2) {
            const r = c[o + 1],
              i = -1 === r ? t(n, e) : e[r];
            e[s++] = i;
          }
        }
      }
      function Ih(e) {
        const n = e.tView;
        return null === n || n.incompleteFirstPass
          ? (e.tView = Ua(
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
      function Ua(e, n, t, c, s, o, r, i, a, l, u) {
        const f = S + c,
          d = f + s,
          h = (function jO(e, n) {
            const t = [];
            for (let c = 0; c < n; c++) t.push(c < e ? null : H);
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
          directiveRegistry: 'function' == typeof o ? o() : o,
          pipeRegistry: 'function' == typeof r ? r() : r,
          firstChild: null,
          schemas: a,
          consts: p,
          incompleteFirstPass: !1,
          ssrId: u,
        });
      }
      let Ah = () => null;
      function Th(e, n, t, c, s) {
        for (let o in n) {
          if (!n.hasOwnProperty(o)) continue;
          const r = n[o];
          if (void 0 === r) continue;
          c ??= {};
          let i,
            a = Mt.None;
          Array.isArray(r) ? ((i = r[0]), (a = r[1])) : (i = r);
          let l = o;
          if (null !== s) {
            if (!s.hasOwnProperty(o)) continue;
            l = s[o];
          }
          0 === e ? kh(c, t, l, i, a) : kh(c, t, l, i);
        }
        return c;
      }
      function kh(e, n, t, c, s) {
        let o;
        e.hasOwnProperty(t) ? (o = e[t]).push(n, c) : (o = e[t] = [n, c]),
          void 0 !== s && o.push(s);
      }
      function k1(e, n, t, c, s, o, r, i) {
        const a = C1(n, t);
        let u,
          l = n.inputs;
        !i && null != l && (u = l[c])
          ? (Wa(e, t, u, c, s),
            t3(n) &&
              (function QO(e, n) {
                const t = H1(n, e);
                16 & t[A] || (t[A] |= 64);
              })(t, n.index))
          : 3 & n.type &&
            ((c = (function ZO(e) {
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
            (s = null != r ? r(s, n.value || '', c) : s),
            o.setProperty(a, c, s));
      }
      function Ha(e, n, t, c) {
        if (bf()) {
          const s = null === c ? null : { '': -1 },
            o = (function nF(e, n) {
              const t = e.directiveRegistry;
              let c = null,
                s = null;
              if (t)
                for (let o = 0; o < t.length; o++) {
                  const r = t[o];
                  if (Zu(n, r.selectors, !1))
                    if ((c || (c = []), de(r)))
                      if (null !== r.findHostDirectiveDefs) {
                        const i = [];
                        (s = s || new Map()),
                          r.findHostDirectiveDefs(r, i, s),
                          c.unshift(...i, r),
                          $a(e, n, i.length);
                      } else c.unshift(r), $a(e, n, 0);
                    else
                      (s = s || new Map()), r.findHostDirectiveDefs?.(r, c, s), c.push(r);
                }
              return null === c ? null : [c, s];
            })(e, t);
          let r, i;
          null === o ? (r = i = null) : ([r, i] = o),
            null !== r && Rh(e, n, t, r, s, i),
            s &&
              (function cF(e, n, t) {
                if (n) {
                  const c = (e.localNames = []);
                  for (let s = 0; s < n.length; s += 2) {
                    const o = t[n[s + 1]];
                    if (null == o) throw new L(-301, !1);
                    c.push(n[s], o);
                  }
                }
              })(t, c, s);
        }
        t.mergedAttrs = S4(t.mergedAttrs, t.attrs);
      }
      function Rh(e, n, t, c, s, o) {
        for (let l = 0; l < c.length; l++) qi(w6(t, n), e, c[l].type);
        !(function oF(e, n, t) {
          (e.flags |= 1),
            (e.directiveStart = n),
            (e.directiveEnd = n + t),
            (e.providerIndexes = n);
        })(t, e.data.length, c.length);
        for (let l = 0; l < c.length; l++) {
          const u = c[l];
          u.providersResolver && u.providersResolver(u);
        }
        let r = !1,
          i = !1,
          a = n0(e, n, c.length, null);
        for (let l = 0; l < c.length; l++) {
          const u = c[l];
          (t.mergedAttrs = S4(t.mergedAttrs, u.hostAttrs)),
            rF(e, t, n, a, u),
            sF(a, u, s),
            null !== u.contentQueries && (t.flags |= 4),
            (null !== u.hostBindings || null !== u.hostAttrs || 0 !== u.hostVars) &&
              (t.flags |= 64);
          const f = u.type.prototype;
          !r &&
            (f.ngOnChanges || f.ngOnInit || f.ngDoCheck) &&
            ((e.preOrderHooks ??= []).push(t.index), (r = !0)),
            !i &&
              (f.ngOnChanges || f.ngDoCheck) &&
              ((e.preOrderCheckHooks ??= []).push(t.index), (i = !0)),
            a++;
        }
        !(function YO(e, n, t) {
          const s = n.directiveEnd,
            o = e.data,
            r = n.attrs,
            i = [];
          let a = null,
            l = null;
          for (let u = n.directiveStart; u < s; u++) {
            const f = o[u],
              d = t ? t.get(f) : null,
              p = d ? d.outputs : null;
            (a = Th(0, f.inputs, u, a, d ? d.inputs : null)),
              (l = Th(1, f.outputs, u, l, p));
            const m = null === a || null === r || pi(n) ? null : lF(a, u, r);
            i.push(m);
          }
          null !== a &&
            (a.hasOwnProperty('class') && (n.flags |= 8),
            a.hasOwnProperty('style') && (n.flags |= 16)),
            (n.initialInputs = i),
            (n.inputs = a),
            (n.outputs = l);
        })(e, t, o);
      }
      function Oh(e, n, t) {
        const c = t.directiveStart,
          s = t.directiveEnd,
          o = t.index,
          r = (function vk() {
            return j.lFrame.currentDirectiveIndex;
          })();
        try {
          s3(o);
          for (let i = c; i < s; i++) {
            const a = e.data[i],
              l = n[i];
            Ri(i),
              (null !== a.hostBindings || 0 !== a.hostVars || null !== a.hostAttrs) &&
                tF(a, l);
          }
        } finally {
          s3(-1), Ri(r);
        }
      }
      function tF(e, n) {
        null !== e.hostBindings && e.hostBindings(1, n);
      }
      function $a(e, n, t) {
        (n.componentOffset = t), (e.components ??= []).push(n.index);
      }
      function sF(e, n, t) {
        if (t) {
          if (n.exportAs)
            for (let c = 0; c < n.exportAs.length; c++) t[n.exportAs[c]] = e;
          de(n) && (t[''] = e);
        }
      }
      function rF(e, n, t, c, s) {
        e.data[c] = s;
        const o = s.factory || (s.factory = Xt(s.type)),
          r = new V4(o, de(s), z);
        (e.blueprint[c] = r),
          (t[c] = r),
          (function XO(e, n, t, c, s) {
            const o = s.hostBindings;
            if (o) {
              let r = e.hostBindingOpCodes;
              null === r && (r = e.hostBindingOpCodes = []);
              const i = ~n.index;
              (function JO(e) {
                let n = e.length;
                for (; n > 0; ) {
                  const t = e[--n];
                  if ('number' == typeof t && t < 0) return t;
                }
                return 0;
              })(r) != i && r.push(i),
                r.push(t, c, o);
            }
          })(e, n, c, n0(e, t, s.hostVars, H), s);
      }
      function Ae(e, n, t, c, s, o) {
        const r = C1(e, n);
        !(function Ga(e, n, t, c, s, o, r) {
          if (null == o) e.removeAttribute(n, s, t);
          else {
            const i = null == r ? U(o) : r(o, c || '', s);
            e.setAttribute(n, s, i, t);
          }
        })(n[B], r, o, e.value, t, c, s);
      }
      function aF(e, n, t, c, s, o) {
        const r = o[n];
        if (null !== r)
          for (let i = 0; i < r.length; ) xh(c, t, r[i++], r[i++], r[i++], r[i++]);
      }
      function lF(e, n, t) {
        let c = null,
          s = 0;
        for (; s < t.length; ) {
          const o = t[s];
          if (0 !== o)
            if (5 !== o) {
              if ('number' == typeof o) break;
              if (e.hasOwnProperty(o)) {
                null === c && (c = []);
                const r = e[o];
                for (let i = 0; i < r.length; i += 3)
                  if (r[i] === n) {
                    c.push(o, r[i + 1], r[i + 2], t[s + 1]);
                    break;
                  }
              }
              s += 2;
            } else s += 2;
          else s += 4;
        }
        return c;
      }
      function Fh(e, n, t, c) {
        return [e, !0, 0, n, null, c, null, t, null, null];
      }
      function Ph(e, n) {
        const t = e.contentQueries;
        if (null !== t) {
          const c = K(null);
          try {
            for (let s = 0; s < t.length; s += 2) {
              const r = t[s + 1];
              if (-1 !== r) {
                const i = e.data[r];
                y6(t[s]), i.contentQueries(2, n[r], r);
              }
            }
          } finally {
            K(c);
          }
        }
      }
      function K6(e, n) {
        return e[A4] ? (e[af][fe] = n) : (e[A4] = n), (e[af] = n), n;
      }
      function qa(e, n, t) {
        y6(0);
        const c = K(null);
        try {
          n(e, t);
        } finally {
          K(c);
        }
      }
      function Vh(e) {
        return (e[sn] ??= []);
      }
      function Bh(e) {
        return (e.cleanup ??= []);
      }
      function X6(e, n) {
        const t = e[G2],
          c = t ? t.get(Se, null) : null;
        c && c.handleError(n);
      }
      function Wa(e, n, t, c, s) {
        for (let o = 0; o < t.length; ) {
          const r = t[o++],
            i = t[o++],
            a = t[o++];
          xh(e.data[r], n[r], c, i, a, s);
        }
      }
      function uF(e, n) {
        const t = H1(n, e),
          c = t[b];
        !(function fF(e, n) {
          for (let t = n.length; t < e.blueprint.length; t++) n.push(e.blueprint[t]);
        })(c, t);
        const s = t[S2];
        null !== s && null === t[m1] && (t[m1] = ha(s, t[G2])), Ya(c, t, t[L2]);
      }
      function Ya(e, n, t) {
        Pi(n);
        try {
          const c = e.viewQuery;
          null !== c && qa(1, c, t);
          const s = e.template;
          null !== s && Sh(e, n, s, 1, t),
            e.firstCreatePass && (e.firstCreatePass = !1),
            n[Xe]?.finishViewCreation(e),
            e.staticContentQueries && Ph(e, n),
            e.staticViewQueries && qa(2, e.viewQuery, t);
          const o = e.components;
          null !== o &&
            (function dF(e, n) {
              for (let t = 0; t < n.length; t++) uF(e, n[t]);
            })(n, o);
        } catch (c) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            c)
          );
        } finally {
          (n[A] &= -5), Vi();
        }
      }
      function yn(e, n, t, c) {
        const s = K(null);
        try {
          const o = n.tView,
            a = Q6(
              e,
              o,
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
          a[e3] = e[n.index];
          const u = e[Xe];
          return null !== u && (a[Xe] = u.createEmbeddedView(o)), Ya(o, a, t), a;
        } finally {
          K(s);
        }
      }
      function p3(e, n) {
        return !n || null === n.firstChild || $4(e);
      }
      function Ln(e, n, t, c = !0) {
        const s = n[b];
        if (
          ((function AO(e, n, t, c) {
            const s = P2 + c,
              o = t.length;
            c > 0 && (t[s - 1][fe] = n),
              c < o - P2
                ? ((n[fe] = t[s]), ju(t, P2 + c, n))
                : (t.push(n), (n[fe] = null)),
              (n[$2] = t);
            const r = n[e3];
            null !== r && t !== r && mh(r, n);
            const i = n[Xe];
            null !== i && i.insertView(e), Si(n), (n[A] |= 128);
          })(s, n, e, t),
          c)
        ) {
          const r = Ra(t, e),
            i = n[B],
            a = Ta(i, e[De]);
          null !== a &&
            (function SO(e, n, t, c, s, o) {
              (c[S2] = s), (c[o1] = n), Z6(e, c, t, 1, s, o);
            })(s, e[o1], i, n, a, r);
        }
        const o = n[m1];
        null !== o && null !== o.firstChild && (o.firstChild = null);
      }
      function c0(e, n, t, c, s = !1) {
        for (; null !== t; ) {
          if (128 === t.type) {
            t = s ? t.projectionNext : t.next;
            continue;
          }
          const o = n[t.index];
          null !== o && c.push(r2(o)), l1(o) && Hh(o, c);
          const r = t.type;
          if (8 & r) c0(e, n, t.child, c);
          else if (32 & r) {
            const i = Ea(t, n);
            let a;
            for (; (a = i()); ) c.push(a);
          } else if (16 & r) {
            const i = _h(n, t);
            if (Array.isArray(i)) c.push(...i);
            else {
              const a = Je(n[I2]);
              c0(a[b], a, i, c, !0);
            }
          }
          t = s ? t.projectionNext : t.next;
        }
        return c;
      }
      function Hh(e, n) {
        for (let t = P2; t < e.length; t++) {
          const c = e[t],
            s = c[b].firstChild;
          null !== s && c0(c[b], c, s, n);
        }
        e[De] !== e[S2] && n.push(e[De]);
      }
      let $h = [];
      const gF = {
          ...Rc,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            C6(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[ee] = this;
          },
        },
        MF = {
          ...Rc,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let n = Je(e.lView);
            for (; n && !Gh(n[b]); ) n = Je(n);
            n && Lf(n);
          },
          consumerOnSignalRead() {
            this.lView[ee] = this;
          },
        };
      function Gh(e) {
        return 2 !== e.type;
      }
      const vF = 100;
      function J6(e, n = !0, t = 0) {
        const c = e[we],
          s = c.rendererFactory;
        s.begin?.();
        try {
          !(function yF(e, n) {
            const t = Nf();
            try {
              xf(!0), Qa(e, n);
              let c = 0;
              for (; g6(e); ) {
                if (c === vF) throw new L(103, !1);
                c++, Qa(e, 1);
              }
            } finally {
              xf(t);
            }
          })(e, t);
        } catch (r) {
          throw (n && X6(e, r), r);
        } finally {
          s.end?.(), c.inlineEffectRunner?.flush();
        }
      }
      function LF(e, n, t, c) {
        const s = n[A];
        if (!(256 & ~s)) return;
        n[we].inlineEffectRunner?.flush(), Pi(n);
        let i = !0,
          a = null,
          l = null;
        Gh(e)
          ? ((l = (function hF(e) {
              return (
                e[ee] ??
                (function pF(e) {
                  const n = $h.pop() ?? Object.create(gF);
                  return (n.lView = e), n;
                })(e)
              );
            })(n)),
            (a = Oc(l)))
          : null ===
            (function Dr() {
              return F2;
            })()
          ? ((i = !1),
            (l = (function CF(e) {
              const n = e[ee] ?? Object.create(MF);
              return (n.lView = e), n;
            })(n)),
            (a = Oc(l)))
          : n[ee] && (Sr(n[ee]), (n[ee] = null));
        try {
          yf(n),
            (function Sf(e) {
              return (j.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== t && Sh(e, n, t, 2, c);
          const u = !(3 & ~s);
          if (u) {
            const h = e.preOrderCheckHooks;
            null !== h && z6(n, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && _6(n, h, 0, null), Bi(n, 0);
          }
          if (
            ((function zF(e) {
              for (let n = zd(e); null !== n; n = _d(n)) {
                if (!(n[A] & p6.HasTransplantedViews)) continue;
                const t = n[ln];
                for (let c = 0; c < t.length; c++) Lf(t[c]);
              }
            })(n),
            Wh(n, 0),
            null !== e.contentQueries && Ph(e, n),
            u)
          ) {
            const h = e.contentCheckHooks;
            null !== h && z6(n, h);
          } else {
            const h = e.contentHooks;
            null !== h && _6(n, h, 1), Bi(n, 1);
          }
          !(function BO(e, n) {
            const t = e.hostBindingOpCodes;
            if (null !== t)
              try {
                for (let c = 0; c < t.length; c++) {
                  const s = t[c];
                  if (s < 0) s3(~s);
                  else {
                    const o = s,
                      r = t[++c],
                      i = t[++c];
                    Mk(r, o), i(2, n[o]);
                  }
                }
              } finally {
                s3(-1);
              }
          })(e, n);
          const f = e.components;
          null !== f && Zh(n, f, 0);
          const d = e.viewQuery;
          if ((null !== d && qa(2, d, c), u)) {
            const h = e.viewCheckHooks;
            null !== h && z6(n, h);
          } else {
            const h = e.viewHooks;
            null !== h && _6(n, h, 2), Bi(n, 2);
          }
          if ((!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), n[d6])) {
            for (const h of n[d6]) h();
            n[d6] = null;
          }
          n[A] &= -73;
        } catch (u) {
          throw (C6(n), u);
        } finally {
          null !== l &&
            (Nr(l, a),
            i &&
              (function mF(e) {
                e.lView[ee] !== e && ((e.lView = null), $h.push(e));
              })(l)),
            Vi();
        }
      }
      function Wh(e, n) {
        for (let t = zd(e); null !== t; t = _d(t))
          for (let c = P2; c < t.length; c++) Yh(t[c], n);
      }
      function _F(e, n, t) {
        Yh(H1(n, e), t);
      }
      function Yh(e, n) {
        xi(e) && Qa(e, n);
      }
      function Qa(e, n) {
        const c = e[b],
          s = e[A],
          o = e[ee];
        let r = !!(0 === n && 16 & s);
        if (
          ((r ||= !!(64 & s && 0 === n)),
          (r ||= !!(1024 & s)),
          (r ||= !(!o?.dirty || !xr(o))),
          (r ||= !1),
          o && (o.dirty = !1),
          (e[A] &= -9217),
          r)
        )
          LF(c, e, c.template, e[L2]);
        else if (8192 & s) {
          Wh(e, 1);
          const i = c.components;
          null !== i && Zh(e, i, 1);
        }
      }
      function Zh(e, n, t) {
        for (let c = 0; c < n.length; c++) _F(e, n[c], t);
      }
      function s0(e, n) {
        const t = Nf() ? 64 : 1088;
        for (e[we].changeDetectionScheduler?.notify(n); e; ) {
          e[A] |= t;
          const c = Je(e);
          if (k4(e) && !c) return e;
          e = c;
        }
        return null;
      }
      class o0 {
        get rootNodes() {
          const n = this._lView,
            t = n[b];
          return c0(t, n, t.firstChild, []);
        }
        constructor(n, t, c = !0) {
          (this._lView = n),
            (this._cdRefInjectingView = t),
            (this.notifyErrorHandler = c),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[L2];
        }
        set context(n) {
          this._lView[L2] = n;
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
              c > -1 && (e0(n, c), n6(t, c));
            }
            this._attachedToViewContainer = !1;
          }
          W6(this._lView[b], this._lView);
        }
        onDestroy(n) {
          M6(this._lView, n);
        }
        markForCheck() {
          s0(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[A] &= -129;
        }
        reattach() {
          Si(this._lView), (this._lView[A] |= 128);
        }
        detectChanges() {
          (this._lView[A] |= 1024), J6(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new L(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null;
          const n = k4(this._lView),
            t = this._lView[e3];
          null !== t && !n && Sa(t, this._lView), ph(this._lView[b], this._lView);
        }
        attachToAppRef(n) {
          if (this._attachedToViewContainer) throw new L(902, !1);
          this._appRef = n;
          const t = k4(this._lView),
            c = this._lView[e3];
          null !== c && !t && mh(c, this._lView), Si(this._lView);
        }
      }
      let ot = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = DF);
        }
        return e;
      })();
      const bF = ot,
        wF = class extends bF {
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
            const s = yn(this._declarationLView, this._declarationTContainer, n, {
              embeddedViewInjector: t,
              dehydratedView: c,
            });
            return new o0(s);
          }
        };
      function DF() {
        return es(p2(), M());
      }
      function es(e, n) {
        return 4 & e.type ? new wF(n, e, hn(e, n)) : null;
      }
      let gp = () => null;
      function g3(e, n) {
        return gp(e, n);
      }
      class _n {}
      const p0 = new _('', { providedIn: 'root', factory: () => !1 }),
        Cp = new _(''),
        i8 = new _('');
      class MP {}
      class Mp {}
      class yP {
        resolveComponentFactory(n) {
          throw (function vP(e) {
            const n = Error(`No component factory found for ${Z2(e)}.`);
            return (n.ngComponent = e), n;
          })(n);
        }
      }
      class rs {
        static #e = (this.NULL = new yP());
      }
      class a8 {}
      let Te = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function LP() {
                const e = M(),
                  t = H1(p2().index, e);
                return (X2(t) ? t : e)[B];
              })());
          }
          return e;
        })(),
        zP = (() => {
          class e {
            static #e = (this.ɵprov = w({
              token: e,
              providedIn: 'root',
              factory: () => null,
            }));
          }
          return e;
        })();
      function as(e, n, t) {
        let c = t ? e.styles : null,
          s = t ? e.classes : null,
          o = 0;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = n[r];
            'number' == typeof i
              ? (o = i)
              : 1 == o
              ? (s = Zr(s, i))
              : 2 == o && (c = Zr(c, i + ': ' + n[++r] + ';'));
          }
        t ? (e.styles = c) : (e.stylesWithoutHost = c),
          t ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      class zp extends rs {
        constructor(n) {
          super(), (this.ngModule = n);
        }
        resolveComponentFactory(n) {
          const t = J(n);
          return new C0(t, this.ngModule);
        }
      }
      function _p(e, n) {
        const t = [];
        for (const c in e) {
          if (!e.hasOwnProperty(c)) continue;
          const s = e[c];
          if (void 0 === s) continue;
          const o = Array.isArray(s),
            r = o ? s[0] : s;
          t.push(
            n
              ? {
                  propName: r,
                  templateName: c,
                  isSignal: !!((o ? s[1] : Mt.None) & Mt.SignalBased),
                }
              : { propName: r, templateName: c },
          );
        }
        return t;
      }
      class C0 extends Mp {
        get inputs() {
          const n = this.componentDef,
            t = n.inputTransforms,
            c = _p(n.inputs, !0);
          if (null !== t)
            for (const s of c)
              t.hasOwnProperty(s.propName) && (s.transform = t[s.propName]);
          return c;
        }
        get outputs() {
          return _p(this.componentDef.outputs, !1);
        }
        constructor(n, t) {
          super(),
            (this.componentDef = n),
            (this.ngModule = t),
            (this.componentType = n.type),
            (this.selector = (function xT(e) {
              return e.map(NT).join(',');
            })(n.selectors)),
            (this.ngContentSelectors = n.ngContentSelectors ? n.ngContentSelectors : []),
            (this.isBoundToModule = !!t);
        }
        create(n, t, c, s) {
          const o = K(null);
          try {
            let r = (s = s || this.ngModule) instanceof U1 ? s : s?.injector;
            r &&
              null !== this.componentDef.getStandaloneInjector &&
              (r = this.componentDef.getStandaloneInjector(r) || r);
            const i = r ? new o3(n, r) : n,
              a = i.get(a8, null);
            if (null === a) throw new L(407, !1);
            const f = {
                rendererFactory: a,
                sanitizer: i.get(zP, null),
                inlineEffectRunner: null,
                changeDetectionScheduler: i.get(_n, null),
              },
              d = a.createRenderer(null, this.componentDef),
              h = this.componentDef.selectors[0][0] || 'div',
              p = c
                ? (function UO(e, n, t, c) {
                    const o = c.get(jd, !1) || t === le.ShadowDom,
                      r = e.selectRootElement(n, o);
                    return (
                      (function HO(e) {
                        Ah(e);
                      })(r),
                      r
                    );
                  })(d, c, this.componentDef.encapsulation, i)
                : q6(
                    d,
                    h,
                    (function wP(e) {
                      const n = e.toLowerCase();
                      return 'svg' === n ? 'svg' : 'math' === n ? 'math' : null;
                    })(h),
                  );
            let m = 512;
            this.componentDef.signals
              ? (m |= 4096)
              : this.componentDef.onPush || (m |= 16);
            let C = null;
            null !== p && (C = ha(p, i, !0));
            const v = Ua(0, null, null, 1, 0, null, null, null, null, null, null),
              g = Q6(null, v, null, m, null, null, f, d, i, null, C);
            Pi(g);
            let E,
              k,
              Y = null;
            try {
              const v2 = this.componentDef;
              let c1,
                Wt = null;
              v2.findHostDirectiveDefs
                ? ((c1 = []),
                  (Wt = new Map()),
                  v2.findHostDirectiveDefs(v2, c1, Wt),
                  c1.push(v2))
                : (c1 = [v2]);
              const DI = (function EP(e, n) {
                const t = e[b],
                  c = S;
                return (e[c] = n), h3(t, c, 2, '#host', null);
              })(g, p);
              (Y = (function NP(e, n, t, c, s, o, r) {
                const i = s[b];
                !(function xP(e, n, t, c) {
                  for (const s of e) n.mergedAttrs = S4(n.mergedAttrs, s.hostAttrs);
                  null !== n.mergedAttrs &&
                    (as(n, n.mergedAttrs, !0), null !== t && Eh(c, t, n));
                })(c, e, n, r);
                let a = null;
                null !== n && (a = ha(n, s[G2]));
                const l = o.rendererFactory.createRenderer(n, t);
                let u = 16;
                t.signals ? (u = 4096) : t.onPush && (u = 64);
                const f = Q6(s, Ih(t), null, u, s[e.index], e, o, l, null, null, a);
                return (
                  i.firstCreatePass && $a(i, e, c.length - 1), K6(s, f), (s[e.index] = f)
                );
              })(DI, p, v2, c1, g, f, d)),
                (k = O4(v, S)),
                p &&
                  (function IP(e, n, t, c) {
                    if (c) hi(e, t, ['ng-version', '18.2.4']);
                    else {
                      const { attrs: s, classes: o } = (function ST(e) {
                        const n = [],
                          t = [];
                        let c = 1,
                          s = 2;
                        for (; c < e.length; ) {
                          let o = e[c];
                          if ('string' == typeof o)
                            2 === s
                              ? '' !== o && n.push(o, e[++c])
                              : 8 === s && t.push(o);
                          else {
                            if (!ue(s)) break;
                            s = o;
                          }
                          c++;
                        }
                        return { attrs: n, classes: t };
                      })(n.selectors[0]);
                      s && hi(e, t, s), o && o.length > 0 && Dh(e, t, o.join(' '));
                    }
                  })(d, v2, p, c),
                void 0 !== t &&
                  (function AP(e, n, t) {
                    const c = (e.projection = []);
                    for (let s = 0; s < n.length; s++) {
                      const o = t[s];
                      c.push(null != o ? Array.from(o) : null);
                    }
                  })(k, this.ngContentSelectors, t),
                (E = (function SP(e, n, t, c, s, o) {
                  const r = p2(),
                    i = s[b],
                    a = C1(r, s);
                  Rh(i, s, r, t, null, c);
                  for (let u = 0; u < t.length; u++)
                    u1(r3(s, i, r.directiveStart + u, r), s);
                  Oh(i, s, r), a && u1(a, s);
                  const l = r3(s, i, r.directiveStart + r.componentOffset, r);
                  if (((e[L2] = s[L2] = l), null !== o)) for (const u of o) u(l, n);
                  return Va(i, r, s), l;
                })(Y, v2, c1, Wt, g, [TP])),
                Ya(v, g, null);
            } catch (v2) {
              throw (null !== Y && ca(Y), ca(g), v2);
            } finally {
              Vi();
            }
            return new DP(this.componentType, E, hn(k, g), g, k);
          } finally {
            K(o);
          }
        }
      }
      class DP extends MP {
        constructor(n, t, c, s, o) {
          super(),
            (this.location = c),
            (this._rootLView = s),
            (this._tNode = o),
            (this.previousInputValues = null),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new o0(s, void 0, !1)),
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
            const o = this._rootLView;
            Wa(o[b], o, s, n, t),
              this.previousInputValues.set(n, t),
              s0(H1(this._tNode.index, o), 1);
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
      function TP() {
        const e = p2();
        L6(M()[b], e);
      }
      let me = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = kP);
        }
        return e;
      })();
      function kP() {
        return Dp(p2(), M());
      }
      const RP = me,
        bp = class extends RP {
          constructor(n, t, c) {
            super(), (this._lContainer = n), (this._hostTNode = t), (this._hostLView = c);
          }
          get element() {
            return hn(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new J2(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const n = D6(this._hostTNode, this._hostLView);
            if (Hi(n)) {
              const t = j4(n, this._hostLView),
                c = B4(n);
              return new J2(t[b].data[c + 8], t);
            }
            return new J2(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(n) {
            const t = wp(this._lContainer);
            return (null !== t && t[n]) || null;
          }
          get length() {
            return this._lContainer.length - P2;
          }
          createEmbeddedView(n, t, c) {
            let s, o;
            'number' == typeof c
              ? (s = c)
              : null != c && ((s = c.index), (o = c.injector));
            const r = g3(this._lContainer, n.ssrId),
              i = n.createEmbeddedViewImpl(t || {}, o, r);
            return this.insertImpl(i, s, p3(this._hostTNode, r)), i;
          }
          createComponent(n, t, c, s, o) {
            const r =
              n &&
              !(function I4(e) {
                return 'function' == typeof e;
              })(n);
            let i;
            if (r) i = t;
            else {
              const p = t || {};
              (i = p.index),
                (c = p.injector),
                (s = p.projectableNodes),
                (o = p.environmentInjector || p.ngModuleRef);
            }
            const a = r ? n : new C0(J(n)),
              l = c || this.parentInjector;
            if (!o && null == a.ngModule) {
              const m = (r ? l : this.parentInjector).get(U1, null);
              m && (o = m);
            }
            const u = J(a.componentType ?? {}),
              f = g3(this._lContainer, u?.id ?? null),
              h = a.create(l, s, f?.firstChild ?? null, o);
            return this.insertImpl(h.hostView, i, p3(this._hostTNode, f)), h;
          }
          insert(n, t) {
            return this.insertImpl(n, t, !0);
          }
          insertImpl(n, t, c) {
            const s = n._lView;
            if (
              (function ak(e) {
                return l1(e[$2]);
              })(s)
            ) {
              const i = this.indexOf(n);
              if (-1 !== i) this.detach(i);
              else {
                const a = s[$2],
                  l = new bp(a, a[o1], a[$2]);
                l.detach(l.indexOf(n));
              }
            }
            const o = this._adjustIndex(t),
              r = this._lContainer;
            return Ln(r, s, o, c), n.attachToViewContainerRef(), ju(f8(r), o, n), n;
          }
          move(n, t) {
            return this.insert(n, t);
          }
          indexOf(n) {
            const t = wp(this._lContainer);
            return null !== t ? t.indexOf(n) : -1;
          }
          remove(n) {
            const t = this._adjustIndex(n, -1),
              c = e0(this._lContainer, t);
            c && (n6(f8(this._lContainer), t), W6(c[b], c));
          }
          detach(n) {
            const t = this._adjustIndex(n, -1),
              c = e0(this._lContainer, t);
            return c && null != n6(f8(this._lContainer), t) ? new o0(c) : null;
          }
          _adjustIndex(n, t = 0) {
            return n ?? this.length + t;
          }
        };
      function wp(e) {
        return e[8];
      }
      function f8(e) {
        return e[8] || (e[8] = []);
      }
      function Dp(e, n) {
        let t;
        const c = n[e.index];
        return (
          l1(c) ? (t = c) : ((t = Fh(c, n, null, e)), (n[e.index] = t), K6(n, t)),
          Ep(t, n, e, c),
          new bp(t, e, n)
        );
      }
      let Ep = function xp(e, n, t, c) {
          if (e[De]) return;
          let s;
          (s =
            8 & t.type
              ? r2(c)
              : (function OP(e, n) {
                  const t = e[B],
                    c = t.createComment(''),
                    s = C1(n, e);
                  return (
                    f3(
                      t,
                      Ta(t, s),
                      c,
                      (function RO(e, n) {
                        return e.nextSibling(n);
                      })(t, s),
                      !1,
                    ),
                    c
                  );
                })(n, t)),
            (e[De] = s);
        },
        d8 = () => !1;
      class h8 {
        constructor(n) {
          (this.queryList = n), (this.matches = null);
        }
        clone() {
          return new h8(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class p8 {
        constructor(n = []) {
          this.queries = n;
        }
        createEmbeddedView(n) {
          const t = n.queries;
          if (null !== t) {
            const c = null !== n.contentQueries ? n.contentQueries[0] : t.length,
              s = [];
            for (let o = 0; o < c; o++) {
              const r = t.getByIndex(o);
              s.push(this.queries[r.indexInDeclarationView].clone());
            }
            return new p8(s);
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
            null !== v8(n, t).matches && this.queries[t].setDirty();
        }
      }
      class Sp {
        constructor(n, t, c = null) {
          (this.flags = t),
            (this.read = c),
            (this.predicate =
              'string' == typeof n
                ? (function $P(e) {
                    return e.split(',').map(n => n.trim());
                  })(n)
                : n);
        }
      }
      class m8 {
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
              o = this.getByIndex(c).embeddedTView(n, s);
            o && ((o.indexInDeclarationView = c), null !== t ? t.push(o) : (t = [o]));
          }
          return null !== t ? new m8(t) : null;
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
      class g8 {
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
              new g8(this.metadata))
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
              const o = c[s];
              this.matchTNodeWithReadOption(n, t, BP(t, o)),
                this.matchTNodeWithReadOption(n, t, E6(t, n, o, !1, !1));
            }
          else
            c === ot
              ? 4 & t.type && this.matchTNodeWithReadOption(n, t, -1)
              : this.matchTNodeWithReadOption(n, t, E6(t, n, c, !1, !1));
        }
        matchTNodeWithReadOption(n, t, c) {
          if (null !== c) {
            const s = this.metadata.read;
            if (null !== s)
              if (s === A1 || s === me || (s === ot && 4 & t.type))
                this.addMatch(t.index, -2);
              else {
                const o = E6(t, n, s, !1, !1);
                null !== o && this.addMatch(t.index, o);
              }
            else this.addMatch(t.index, c);
          }
        }
        addMatch(n, t) {
          null === this.matches ? (this.matches = [n, t]) : this.matches.push(n, t);
        }
      }
      function BP(e, n) {
        const t = e.localNames;
        if (null !== t)
          for (let c = 0; c < t.length; c += 2) if (t[c] === n) return t[c + 1];
        return null;
      }
      function UP(e, n, t, c) {
        return -1 === t
          ? (function jP(e, n) {
              return 11 & e.type ? hn(e, n) : 4 & e.type ? es(e, n) : null;
            })(n, e)
          : -2 === t
          ? (function HP(e, n, t) {
              return t === A1
                ? hn(n, e)
                : t === ot
                ? es(n, e)
                : t === me
                ? Dp(n, e)
                : void 0;
            })(e, n, c)
          : r3(e, e[b], t, n);
      }
      function Ip(e, n, t, c) {
        const s = n[Xe].queries[c];
        if (null === s.matches) {
          const o = e.data,
            r = t.matches,
            i = [];
          for (let a = 0; null !== r && a < r.length; a += 2) {
            const l = r[a];
            i.push(l < 0 ? null : UP(n, o[l], r[a + 1], t.metadata.read));
          }
          s.matches = i;
        }
        return s.matches;
      }
      function C8(e, n, t, c) {
        const s = e.queries.getByIndex(t),
          o = s.matches;
        if (null !== o) {
          const r = Ip(e, n, s, t);
          for (let i = 0; i < o.length; i += 2) {
            const a = o[i];
            if (a > 0) c.push(r[i / 2]);
            else {
              const l = o[i + 1],
                u = n[-a];
              for (let f = P2; f < u.length; f++) {
                const d = u[f];
                d[e3] === d[$2] && C8(d[b], d, l, c);
              }
              if (null !== u[ln]) {
                const f = u[ln];
                for (let d = 0; d < f.length; d++) {
                  const h = f[d];
                  C8(h[b], h, l, c);
                }
              }
            }
          }
        }
        return c;
      }
      function Tp(e, n, t) {
        const c = X();
        return (
          c.firstCreatePass &&
            ((function Rp(e, n, t) {
              null === e.queries && (e.queries = new m8()), e.queries.track(new g8(n, t));
            })(c, new Sp(e, n, t), -1),
            !(2 & ~n) && (c.staticViewQueries = !0)),
          (function Ap(e, n, t) {
            const c = new ea(!(4 & ~t));
            return (
              (function qO(e, n, t, c) {
                const s = Vh(n);
                s.push(t), e.firstCreatePass && Bh(e).push(c, s.length - 1);
              })(e, n, c, c.destroy),
              (n[Xe] ??= new p8()).queries.push(new h8(c)) - 1
            );
          })(c, M(), n)
        );
      }
      function v8(e, n) {
        return e.queries.getByIndex(n);
      }
      function Op(e, n) {
        const t = e[b],
          c = v8(t, n);
        return c.crossesNgTemplate ? C8(t, e, n, []) : Ip(t, e, c, n);
      }
      const Fp = new Set();
      function L1(e) {
        Fp.has(e) ||
          (Fp.add(e),
          performance?.mark?.('mark_feature_usage', { detail: { feature: e } }));
      }
      function Dt(e, n) {
        L1('NgSignals');
        const t = (function TI(e) {
            const n = Object.create(RI);
            n.value = e;
            const t = () => (Er(n), n.value);
            return (t[ae] = n), t;
          })(e),
          c = t[ae];
        return (
          n?.equal && (c.equal = n.equal),
          (t.set = s => X9(c, s)),
          (t.update = s =>
            (function kI(e, n) {
              G9() || K9(), X9(e, n(e.value));
            })(c, s)),
          (t.asReadonly = Vp.bind(t)),
          t
        );
      }
      function Vp() {
        const e = this[ae];
        if (void 0 === e.readonlyFn) {
          const n = () => this();
          (n[ae] = e), (e.readonlyFn = n);
        }
        return e.readonlyFn;
      }
      function n2(e) {
        let n = (function Kp(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          t = !0;
        const c = [e];
        for (; n; ) {
          let s;
          if (de(e)) s = n.ɵcmp || n.ɵdir;
          else {
            if (n.ɵcmp) throw new L(903, !1);
            s = n.ɵdir;
          }
          if (s) {
            if (t) {
              c.push(s);
              const r = e;
              (r.inputs = us(e.inputs)),
                (r.inputTransforms = us(e.inputTransforms)),
                (r.declaredInputs = us(e.declaredInputs)),
                (r.outputs = us(e.outputs));
              const i = s.hostBindings;
              i && oV(e, i);
              const a = s.viewQuery,
                l = s.contentQueries;
              if (
                (a && cV(e, a),
                l && sV(e, l),
                tV(e, s),
                QA(e.outputs, s.outputs),
                de(s) && s.data.animation)
              ) {
                const u = e.data;
                u.animation = (u.animation || []).concat(s.data.animation);
              }
            }
            const o = s.features;
            if (o)
              for (let r = 0; r < o.length; r++) {
                const i = o[r];
                i && i.ngInherit && i(e), i === n2 && (t = !1);
              }
          }
          n = Object.getPrototypeOf(n);
        }
        !(function nV(e) {
          let n = 0,
            t = null;
          for (let c = e.length - 1; c >= 0; c--) {
            const s = e[c];
            (s.hostVars = n += s.hostVars),
              (s.hostAttrs = S4(s.hostAttrs, (t = S4(t, s.hostAttrs))));
          }
        })(c);
      }
      function tV(e, n) {
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
      function us(e) {
        return e === be ? {} : e === o2 ? [] : e;
      }
      function cV(e, n) {
        const t = e.viewQuery;
        e.viewQuery = t
          ? (c, s) => {
              n(c, s), t(c, s);
            }
          : n;
      }
      function sV(e, n) {
        const t = e.contentQueries;
        e.contentQueries = t
          ? (c, s, o) => {
              n(c, s, o), t(c, s, o);
            }
          : n;
      }
      function oV(e, n) {
        const t = e.hostBindings;
        e.hostBindings = t
          ? (c, s) => {
              n(c, s), t(c, s);
            }
          : n;
      }
      function tm(e) {
        const n = e.inputConfig,
          t = {};
        for (const c in n)
          if (n.hasOwnProperty(c)) {
            const s = n[c];
            Array.isArray(s) && s[3] && (t[c] = s[3]);
          }
        e.inputTransforms = t;
      }
      class C3 {}
      class nm {}
      class L8 extends C3 {
        constructor(n, t, c, s = !0) {
          super(),
            (this.ngModuleType = n),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new zp(this));
          const o = a1(n);
          (this._bootstrapComponents = G1(o.bootstrap)),
            (this._r3Injector = cd(
              n,
              t,
              [
                { provide: C3, useValue: this },
                { provide: rs, useValue: this.componentFactoryResolver },
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
      class z8 extends nm {
        constructor(n) {
          super(), (this.moduleType = n);
        }
        create(n) {
          return new L8(this.moduleType, n, []);
        }
      }
      class cm extends C3 {
        constructor(n) {
          super(), (this.componentFactoryResolver = new zp(this)), (this.instance = null);
          const t = new tn(
            [
              ...n.providers,
              { provide: C3, useValue: this },
              { provide: rs, useValue: this.componentFactoryResolver },
            ],
            n.parent || l6(),
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
      function _8(e, n, t = null) {
        return new cm({
          providers: e,
          parent: n,
          debugName: t,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function fs(e) {
        return (
          !!b8(e) && (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function b8(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function V2(e, n, t) {
        return !Object.is(e[n], t) && ((e[n] = t), !0);
      }
      function y0(e, n, t, c, s, o, r, i, a, l) {
        const u = t + S,
          f = n.firstCreatePass
            ? (function CV(e, n, t, c, s, o, r, i, a) {
                const l = n.consts,
                  u = h3(n, e, 4, r || null, i || null);
                Ha(n, t, u, te(l, a)), L6(n, u);
                const f = (u.tView = Ua(
                  2,
                  u,
                  c,
                  s,
                  o,
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
              })(u, n, e, c, s, o, r, i, a)
            : n.data[u];
        he(f, !1);
        const d = sm(n, e, f, t);
        P4() && Y6(n, e, d, f), u1(d, e);
        const h = Fh(d, e, d, f);
        return (
          (e[u] = h),
          K6(e, h),
          (function Np(e, n, t) {
            return d8(e, n, t);
          })(h, f, e),
          m6(f) && Ba(n, e, f),
          null != a && ja(e, f, l),
          f
        );
      }
      function W1(e, n, t, c, s, o, r, i) {
        const a = M(),
          l = X();
        return y0(a, l, e, n, t, c, s, te(l.consts, o), r, i), W1;
      }
      let sm = function om(e, n, t, c) {
        return Ne(!0), n[B].createComment('');
      };
      var En = (function (e) {
        return (
          (e[(e.EarlyRead = 0)] = 'EarlyRead'),
          (e[(e.Write = 1)] = 'Write'),
          (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
          (e[(e.Read = 3)] = 'Read'),
          e
        );
      })(En || {});
      let fm = (() => {
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
      class _0 {
        constructor() {
          (this.ngZone = y(l2)),
            (this.scheduler = y(_n)),
            (this.errorHandler = y(Se, { optional: !0 })),
            (this.sequences = new Set()),
            (this.deferredRegistrations = new Set()),
            (this.executing = !1);
        }
        static #e = (this.PHASES = [En.EarlyRead, En.Write, En.MixedReadWrite, En.Read]);
        execute() {
          this.executing = !0;
          for (const n of _0.PHASES)
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
          token: _0,
          providedIn: 'root',
          factory: () => new _0(),
        }));
      }
      function ge(e, n, t, c) {
        const s = M();
        return V2(s, pe(), n) && (X(), Ae(z2(), s, e, n, t, c)), ge;
      }
      function Ms(e, n) {
        return (e << 17) | (n << 2);
      }
      function Nt(e) {
        return (e >> 17) & 32767;
      }
      function O8(e) {
        return 2 | e;
      }
      function y3(e) {
        return (131068 & e) >> 2;
      }
      function F8(e, n) {
        return (-131069 & e) | (n << 2);
      }
      function P8(e) {
        return 1 | e;
      }
      function Vm(e, n, t, c) {
        const s = e[t + 1],
          o = null === n;
        let r = c ? Nt(s) : y3(s),
          i = !1;
        for (; 0 !== r && (!1 === i || o); ) {
          const l = e[r + 1];
          oB(e[r], n) && ((i = !0), (e[r + 1] = c ? P8(l) : O8(l))),
            (r = c ? Nt(l) : y3(l));
        }
        i && (e[t + 1] = c ? O8(s) : P8(s));
      }
      function oB(e, n) {
        return (
          null === e ||
          null == n ||
          (Array.isArray(e) ? e[1] : e) === n ||
          (!(!Array.isArray(e) || 'string' != typeof n) && X3(e, n) >= 0)
        );
      }
      function D(e, n, t) {
        const c = M();
        return V2(c, pe(), n) && k1(X(), z2(), c, e, n, c[B], t, !1), D;
      }
      function V8(e, n, t, c, s) {
        const r = s ? 'class' : 'style';
        Wa(e, t, n.inputs[r], r, c);
      }
      function xt(e, n, t) {
        return Ce(e, n, t, !1), xt;
      }
      function vs(e, n) {
        return Ce(e, n, null, !0), vs;
      }
      function Ce(e, n, t, c) {
        const s = M(),
          o = X(),
          r = (function tt(e) {
            const n = j.lFrame,
              t = n.bindingIndex;
            return (n.bindingIndex = n.bindingIndex + e), t;
          })(2);
        o.firstUpdatePass &&
          (function Wm(e, n, t, c) {
            const s = e.data;
            if (null === s[t + 1]) {
              const o = s[r1()],
                r = (function qm(e, n) {
                  return n >= e.expandoStartIndex;
                })(e, t);
              (function Km(e, n) {
                return !!(e.flags & (n ? 8 : 16));
              })(o, c) &&
                null === n &&
                !r &&
                (n = !1),
                (n = (function pB(e, n, t, c) {
                  const s = (function Oi(e) {
                    const n = j.lFrame.currentDirectiveIndex;
                    return -1 === n ? null : e[n];
                  })(e);
                  let o = c ? n.residualClasses : n.residualStyles;
                  if (null === s)
                    0 === (c ? n.classBindings : n.styleBindings) &&
                      ((t = w0((t = B8(null, e, n, t, c)), n.attrs, c)), (o = null));
                  else {
                    const r = n.directiveStylingLast;
                    if (-1 === r || e[r] !== s)
                      if (((t = B8(s, e, n, t, c)), null === o)) {
                        let a = (function mB(e, n, t) {
                          const c = t ? n.classBindings : n.styleBindings;
                          if (0 !== y3(c)) return e[Nt(c)];
                        })(e, n, c);
                        void 0 !== a &&
                          Array.isArray(a) &&
                          ((a = B8(null, e, n, a[1], c)),
                          (a = w0(a, n.attrs, c)),
                          (function gB(e, n, t, c) {
                            e[Nt(t ? n.classBindings : n.styleBindings)] = c;
                          })(e, n, c, a));
                      } else
                        o = (function CB(e, n, t) {
                          let c;
                          const s = n.directiveEnd;
                          for (let o = 1 + n.directiveStylingLast; o < s; o++)
                            c = w0(c, e[o].hostAttrs, t);
                          return w0(c, n.attrs, t);
                        })(e, n, c);
                  }
                  return (
                    void 0 !== o &&
                      (c ? (n.residualClasses = o) : (n.residualStyles = o)),
                    t
                  );
                })(s, o, n, c)),
                (function cB(e, n, t, c, s, o) {
                  let r = o ? n.classBindings : n.styleBindings,
                    i = Nt(r),
                    a = y3(r);
                  e[c] = t;
                  let u,
                    l = !1;
                  if (
                    (Array.isArray(t)
                      ? ((u = t[1]), (null === u || X3(t, u) > 0) && (l = !0))
                      : (u = t),
                    s)
                  )
                    if (0 !== a) {
                      const d = Nt(e[i + 1]);
                      (e[c + 1] = Ms(d, i)),
                        0 !== d && (e[d + 1] = F8(e[d + 1], c)),
                        (e[i + 1] = (function tB(e, n) {
                          return (131071 & e) | (n << 17);
                        })(e[i + 1], c));
                    } else
                      (e[c + 1] = Ms(i, 0)),
                        0 !== i && (e[i + 1] = F8(e[i + 1], c)),
                        (i = c);
                  else
                    (e[c + 1] = Ms(a, 0)),
                      0 === i ? (i = c) : (e[a + 1] = F8(e[a + 1], c)),
                      (a = c);
                  l && (e[c + 1] = O8(e[c + 1])),
                    Vm(e, u, c, !0),
                    Vm(e, u, c, !1),
                    (function sB(e, n, t, c, s) {
                      const o = s ? e.residualClasses : e.residualStyles;
                      null != o &&
                        'string' == typeof n &&
                        X3(o, n) >= 0 &&
                        (t[c + 1] = P8(t[c + 1]));
                    })(n, u, e, c, o),
                    (r = Ms(i, a)),
                    o ? (n.classBindings = r) : (n.styleBindings = r);
                })(s, o, n, t, r, c);
            }
          })(o, e, r, c),
          n !== H &&
            V2(s, r, n) &&
            (function Zm(e, n, t, c, s, o, r, i) {
              if (!(3 & n.type)) return;
              const a = e.data,
                l = a[i + 1],
                u = (function nB(e) {
                  return !(1 & ~e);
                })(l)
                  ? Qm(a, n, t, s, y3(l), r)
                  : void 0;
              ys(u) ||
                (ys(o) ||
                  ((function eB(e) {
                    return !(2 & ~e);
                  })(l) &&
                    (o = Qm(a, null, t, s, i, r))),
                (function PO(e, n, t, c, s) {
                  if (n) s ? e.addClass(t, c) : e.removeClass(t, c);
                  else {
                    let o = -1 === c.indexOf('-') ? void 0 : _t.DashCase;
                    null == s
                      ? e.removeStyle(t, c, o)
                      : ('string' == typeof s &&
                          s.endsWith('!important') &&
                          ((s = s.slice(0, -10)), (o |= _t.Important)),
                        e.setStyle(t, c, s, o));
                  }
                })(c, r, R4(r1(), t), s, o));
            })(
              o,
              o.data[r1()],
              s,
              s[B],
              e,
              (s[r + 1] = (function LB(e, n) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof n
                      ? (e += n)
                      : 'object' == typeof e && (e = Z2($1(e)))),
                  e
                );
              })(n, t)),
              c,
              r,
            );
      }
      function B8(e, n, t, c, s) {
        let o = null;
        const r = t.directiveEnd;
        let i = t.directiveStylingLast;
        for (
          -1 === i ? (i = t.directiveStart) : i++;
          i < r && ((o = n[i]), (c = w0(c, o.hostAttrs, s)), o !== e);

        )
          i++;
        return null !== e && (t.directiveStylingLast = i), c;
      }
      function w0(e, n, t) {
        const c = t ? 1 : 2;
        let s = -1;
        if (null !== n)
          for (let o = 0; o < n.length; o++) {
            const r = n[o];
            'number' == typeof r
              ? (s = r)
              : s === c &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                B1(e, r, !!t || n[++o]));
          }
        return void 0 === e ? null : e;
      }
      function Qm(e, n, t, c, s, o) {
        const r = null === n;
        let i;
        for (; s > 0; ) {
          const a = e[s],
            l = Array.isArray(a),
            u = l ? a[1] : a,
            f = null === u;
          let d = t[s + 1];
          d === H && (d = f ? o2 : void 0);
          let h = f ? fi(d, c) : u === c ? d : void 0;
          if ((l && !ys(h) && (h = fi(a, c)), ys(h) && ((i = h), r))) return i;
          const p = e[s + 1];
          s = r ? Nt(p) : y3(p);
        }
        if (null !== n) {
          let a = o ? n.residualClasses : n.residualStyles;
          null != a && (i = fi(a, c));
        }
        return i;
      }
      function ys(e) {
        return void 0 !== e;
      }
      function O(e, n, t, c) {
        const s = M(),
          o = X(),
          r = S + e,
          i = s[B],
          a = o.firstCreatePass
            ? (function $B(e, n, t, c, s, o) {
                const r = n.consts,
                  a = h3(n, e, 2, c, te(r, s));
                return (
                  Ha(n, t, a, te(r, o)),
                  null !== a.attrs && as(a, a.attrs, !1),
                  null !== a.mergedAttrs && as(a, a.mergedAttrs, !0),
                  null !== n.queries && n.queries.elementStart(n, a),
                  a
                );
              })(r, o, s, n, t, c)
            : o.data[r],
          l = tg(o, s, a, i, n, e);
        s[r] = l;
        const u = m6(a);
        return (
          he(a, !0),
          Eh(i, l, a),
          !(function wn(e) {
            return !(32 & ~e.flags);
          })(a) &&
            P4() &&
            Y6(o, s, l, a),
          0 ===
            (function lk() {
              return j.lFrame.elementDepthCount;
            })() && u1(l, s),
          (function uk() {
            j.lFrame.elementDepthCount++;
          })(),
          u && (Ba(o, s, a), Va(o, a, s)),
          null !== c && ja(s, a),
          O
        );
      }
      function F() {
        let e = p2();
        Ti() ? ki() : ((e = e.parent), he(e, !1));
        const n = e;
        (function dk(e) {
          return j.skipHydrationRootTNode === e;
        })(n) &&
          (function gk() {
            j.skipHydrationRootTNode = null;
          })(),
          (function fk() {
            j.lFrame.elementDepthCount--;
          })();
        const t = X();
        return (
          t.firstCreatePass && (L6(t, e), bi(e) && t.queries.elementEnd(e)),
          null != n.classesWithoutHost &&
            (function xk(e) {
              return !!(8 & e.flags);
            })(n) &&
            V8(t, n, M(), n.classesWithoutHost, !0),
          null != n.stylesWithoutHost &&
            (function Sk(e) {
              return !!(16 & e.flags);
            })(n) &&
            V8(t, n, M(), n.stylesWithoutHost, !1),
          F
        );
      }
      function d2(e, n, t, c) {
        return O(e, n, t, c), F(), d2;
      }
      let tg = (e, n, t, c, s, o) => (
        Ne(!0),
        q6(
          c,
          s,
          (function Ff() {
            return j.lFrame.currentNamespace;
          })(),
        )
      );
      function _2(e, n, t) {
        const c = M(),
          s = X(),
          o = e + S,
          r = s.firstCreatePass
            ? (function WB(e, n, t, c, s) {
                const o = n.consts,
                  r = te(o, c),
                  i = h3(n, e, 8, 'ng-container', r);
                return (
                  null !== r && as(i, r, !0),
                  Ha(n, t, i, te(o, s)),
                  null !== n.queries && n.queries.elementStart(n, i),
                  i
                );
              })(o, s, c, n, t)
            : s.data[o];
        he(r, !0);
        const i = cg(s, c, r, e);
        return (
          (c[o] = i),
          P4() && Y6(s, c, i, r),
          u1(i, c),
          m6(r) && (Ba(s, c, r), Va(s, r, c)),
          null != t && ja(c, r),
          _2
        );
      }
      function b2() {
        let e = p2();
        const n = X();
        return (
          Ti() ? ki() : ((e = e.parent), he(e, !1)),
          n.firstCreatePass && (L6(n, e), bi(e) && n.queries.elementEnd(e)),
          b2
        );
      }
      let cg = (e, n, t, c) => (Ne(!0), xa(n[B], ''));
      function R1() {
        return M();
      }
      function $8(e, n, t) {
        const c = M();
        return V2(c, pe(), n) && k1(X(), z2(), c, e, n, c[B], t, !0), $8;
      }
      const zs = 'en-US';
      let ig = zs,
        wg = (e, n, t) => {};
      function G(e, n, t, c) {
        const s = M(),
          o = X(),
          r = p2();
        return (
          (function W8(e, n, t, c, s, o, r) {
            const i = m6(c),
              l = e.firstCreatePass && Bh(e),
              u = n[L2],
              f = Vh(n);
            let d = !0;
            if (3 & c.type || r) {
              const m = C1(c, n),
                C = r ? r(m) : m,
                v = f.length,
                g = r ? k => r(r2(k[c.index])) : c.index;
              let E = null;
              if (
                (!r &&
                  i &&
                  (E = (function Bj(e, n, t, c) {
                    const s = e.cleanup;
                    if (null != s)
                      for (let o = 0; o < s.length - 1; o += 2) {
                        const r = s[o];
                        if (r === t && s[o + 1] === c) {
                          const i = n[sn],
                            a = s[o + 2];
                          return i.length > a ? i[a] : null;
                        }
                        'string' == typeof r && (o += 2);
                      }
                    return null;
                  })(e, n, s, c.index)),
                null !== E)
              )
                ((E.__ngLastListenerFn__ || E).__ngNextListenerFn__ = o),
                  (E.__ngLastListenerFn__ = o),
                  (d = !1);
              else {
                (o = xg(c, n, u, o)), wg(m, s, o);
                const k = t.listen(C, s, o);
                f.push(o, k), l && l.push(s, g, v, v + 1);
              }
            } else o = xg(c, n, u, o);
            const h = c.outputs;
            let p;
            if (d && null !== h && (p = h[s])) {
              const m = p.length;
              if (m)
                for (let C = 0; C < m; C += 2) {
                  const Y = n[p[C]][p[C + 1]].subscribe(o),
                    v2 = f.length;
                  f.push(o, Y), l && l.push(s, c.index, v2, -(v2 + 1));
                }
            }
          })(o, s, s[B], r, e, n, c),
          G
        );
      }
      function Ng(e, n, t, c) {
        const s = K(null);
        try {
          return Ee(6, n, t), !1 !== t(c);
        } catch (o) {
          return X6(e, o), !1;
        } finally {
          Ee(7, n, t), K(s);
        }
      }
      function xg(e, n, t, c) {
        return function s(o) {
          if (o === Function) return c;
          s0(e.componentOffset > -1 ? H1(e.index, n) : n, 5);
          let i = Ng(n, t, c, o),
            a = s.__ngNextListenerFn__;
          for (; a; ) (i = Ng(n, t, a, o) && i), (a = a.__ngNextListenerFn__);
          return i;
        };
      }
      function e2(e = 1) {
        return (function Lk(e) {
          return (j.lFrame.contextLView = (function zf(e, n) {
            for (; e > 0; ) (n = n[on]), e--;
            return n;
          })(e, j.lFrame.contextLView))[L2];
        })(e);
      }
      function jj(e, n) {
        let t = null;
        const c = (function bT(e) {
          const n = e.attrs;
          if (null != n) {
            const t = n.indexOf(5);
            if (!(1 & t)) return n[t + 1];
          }
          return null;
        })(e);
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          if ('*' !== o) {
            if (null === c ? Zu(e, o, !0) : ET(c, o)) return s;
          } else t = s;
        }
        return t;
      }
      function z3(e) {
        const n = M()[I2][o1];
        if (!n.projection) {
          const c = (n.projection = (function c6(e, n) {
              const t = [];
              for (let c = 0; c < e; c++) t.push(n);
              return t;
            })(e ? e.length : 1, null)),
            s = c.slice();
          let o = n.child;
          for (; null !== o; ) {
            if (128 !== o.type) {
              const r = e ? jj(o, e) : 0;
              null !== r && (s[r] ? (s[r].projectionNext = o) : (c[r] = o), (s[r] = o));
            }
            o = o.next;
          }
        }
      }
      function _3(e, n = 0, t, c, s, o) {
        const r = M(),
          i = X(),
          a = c ? e + 1 : null;
        null !== a && y0(r, i, a, c, s, o, null, t);
        const l = h3(i, S + e, 16, null, t || null);
        null === l.projection && (l.projection = n), ki();
        const f = !r[m1] || c3();
        null === r[I2][o1].projection[l.projection] && null !== a
          ? (function Uj(e, n, t) {
              const c = S + t,
                s = n.data[c],
                o = e[c],
                r = g3(o, s.tView.ssrId);
              Ln(o, yn(e, s, void 0, { dehydratedView: r }), 0, p3(s, r));
            })(r, i, a)
          : f &&
            32 & ~l.flags &&
            (function OO(e, n, t) {
              wh(n[B], 0, n, t, Aa(e, t, n), vh(t.parent || n[o1], t, n));
            })(i, r, l);
      }
      function I0(e, n, t) {
        Tp(e, n, t);
      }
      function $n(e) {
        const n = M(),
          t = X(),
          c = Fi();
        y6(c + 1);
        const s = v8(t, c);
        if (
          e.dirty &&
          (function ik(e) {
            return !(4 & ~e[A]);
          })(n) === !(2 & ~s.metadata.flags)
        ) {
          if (null === s.matches) e.reset([]);
          else {
            const o = Op(n, c);
            e.reset(o, dd), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Gn() {
        return (function M8(e, n) {
          return e[Xe].queries[n].queryList;
        })(M(), Fi());
      }
      function Bg(e) {
        return (function n3(e, n) {
          return e[n];
        })(
          (function Df() {
            return j.lFrame.contextLView;
          })(),
          S + e,
        );
      }
      function qn(e, n = '') {
        const t = M(),
          c = X(),
          s = e + S,
          o = c.firstCreatePass ? h3(c, s, 1, n, null) : c.data[s],
          r = Qg(c, t, o, n, e);
        (t[s] = r), P4() && Y6(c, t, r, o), he(o, !1);
      }
      let Qg = (e, n, t, c, s) => (
        Ne(!0),
        (function Na(e, n) {
          return e.createText(n);
        })(n[B], c)
      );
      function St(e, n, t) {
        const c = M(),
          s = (function kn(e, n, t, c) {
            return V2(e, pe(), t) ? n + U(t) + c : H;
          })(c, e, n, t);
        return (
          s !== H &&
            (function st(e, n, t) {
              const c = R4(n, e);
              !(function hh(e, n, t) {
                e.setValue(n, t);
              })(e[B], c, t);
            })(c, r1(), s),
          St
        );
      }
      function Q8(e, n, t, c, s) {
        if (((e = V(e)), Array.isArray(e)))
          for (let o = 0; o < e.length; o++) Q8(e[o], n, t, c, s);
        else {
          const o = X(),
            r = M(),
            i = p2();
          let a = Jt(e) ? e : V(e.provide);
          const l = cf(e),
            u = 1048575 & i.providerIndexes,
            f = i.directiveStart,
            d = i.providerIndexes >> 20;
          if (Jt(e) || !e.multi) {
            const h = new V4(l, s, z),
              p = X8(a, n, s ? u : u + d, f);
            -1 === p
              ? (qi(w6(i, r), o, a),
                K8(o, e, n.length),
                n.push(a),
                i.directiveStart++,
                i.directiveEnd++,
                s && (i.providerIndexes += 1048576),
                t.push(h),
                r.push(h))
              : ((t[p] = h), (r[p] = h));
          } else {
            const h = X8(a, n, u + d, f),
              p = X8(a, n, u, u + d),
              C = p >= 0 && t[p];
            if ((s && !C) || (!s && !(h >= 0 && t[h]))) {
              qi(w6(i, r), o, a);
              const v = (function lU(e, n, t, c, s) {
                const o = new V4(e, t, z);
                return (
                  (o.multi = []),
                  (o.index = n),
                  (o.componentProviders = 0),
                  uC(o, s, c && !t),
                  o
                );
              })(s ? aU : iU, t.length, s, c, l);
              !s && C && (t[p].providerFactory = v),
                K8(o, e, n.length, 0),
                n.push(a),
                i.directiveStart++,
                i.directiveEnd++,
                s && (i.providerIndexes += 1048576),
                t.push(v),
                r.push(v);
            } else K8(o, e, h > -1 ? h : p, uC(t[s ? p : h], l, !s && c));
            !s && c && C && t[p].componentProviders++;
          }
        }
      }
      function K8(e, n, t, c) {
        const s = Jt(n),
          o = (function FT(e) {
            return !!e.useClass;
          })(n);
        if (s || o) {
          const a = (o ? V(n.useClass) : n).prototype.ngOnDestroy;
          if (a) {
            const l = e.destroyHooks || (e.destroyHooks = []);
            if (!s && n.multi) {
              const u = l.indexOf(t);
              -1 === u ? l.push(t, [c, a]) : l[u + 1].push(c, a);
            } else l.push(t, a);
          }
        }
      }
      function uC(e, n, t) {
        return t && e.componentProviders++, e.multi.push(n) - 1;
      }
      function X8(e, n, t, c) {
        for (let s = t; s < c; s++) if (n[s] === e) return s;
        return -1;
      }
      function iU(e, n, t, c) {
        return J8(this.multi, []);
      }
      function aU(e, n, t, c) {
        const s = this.multi;
        let o;
        if (this.providerFactory) {
          const r = this.providerFactory.componentProviders,
            i = r3(t, t[b], this.providerFactory.index, c);
          (o = i.slice(0, r)), J8(s, o);
          for (let a = r; a < i.length; a++) o.push(i[a]);
        } else (o = []), J8(s, o);
        return o;
      }
      function J8(e, n) {
        for (let t = 0; t < e.length; t++) n.push((0, e[t])());
        return n;
      }
      function T2(e, n = []) {
        return t => {
          t.providersResolver = (c, s) =>
            (function rU(e, n, t) {
              const c = X();
              if (c.firstCreatePass) {
                const s = de(e);
                Q8(t, c.data, c.blueprint, s, !0), Q8(n, c.data, c.blueprint, s, !1);
              }
            })(c, s ? s(e) : e, n);
        };
      }
      let uU = (() => {
        class e {
          constructor(t) {
            (this._injector = t), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(t) {
            if (!t.standalone) return null;
            if (!this.cachedInjectors.has(t)) {
              const c = mi(0, t.type),
                s =
                  c.length > 0
                    ? _8([c], this._injector, `Standalone[${t.type.name}]`)
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
            factory: () => new e(N(U1)),
          }));
        }
        return e;
      })();
      function q(e) {
        L1('NgStandalone'),
          (e.getStandaloneInjector = n => n.get(uU).getOrCreateStandaloneInjector(e));
      }
      function MC(e, n) {
        return es(e, n);
      }
      let kC = (() => {
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
      const VC = new _('');
      function F0(e) {
        return !!e && 'function' == typeof e.then;
      }
      function BC(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const bH = new _('');
      let jC = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((t, c) => {
                (this.resolve = t), (this.reject = c);
              })),
              (this.appInits = y(bH, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const t = [];
            for (const s of this.appInits) {
              const o = s();
              if (F0(o)) t.push(o);
              else if (BC(o)) {
                const r = new Promise((i, a) => {
                  o.subscribe({ complete: i, error: a });
                });
                t.push(r);
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
      const Is = new _('');
      let Fe = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = y(sR)),
              (this.afterRenderManager = y(fm)),
              (this.zonelessEnabled = y(p0)),
              (this.dirtyFlags = 0),
              (this.deferredDirtyFlags = 0),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new p1()),
              (this.afterTick = new p1()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = y(a3).hasPendingTasks.pipe(s2(t => !t))),
              (this._injector = y(U1));
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
            const s = t instanceof Mp;
            if (!this._injector.get(jC).done)
              throw (
                (!s &&
                  (function vt(e) {
                    const n = J(e) || Q2(e) || s1(e);
                    return null !== n && n.standalone;
                  })(t),
                new L(405, !1))
              );
            let r;
            (r = s ? t : this._injector.get(rs).resolveComponentFactory(t)),
              this.componentTypes.push(r.componentType);
            const i = (function wH(e) {
                return e.isBoundToModule;
              })(r)
                ? void 0
                : this._injector.get(C3),
              l = r.create(A2.NULL, [], c || r.selector, i),
              u = l.location.nativeElement,
              f = l.injector.get(VC, null);
            return (
              f?.registerApplication(u),
              l.onDestroy(() => {
                this.detachView(l.hostView),
                  As(this.components, l),
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
            const t = K(null);
            try {
              (this._runningTick = !0), this.synchronize();
            } catch (c) {
              this.internalErrorHandler(c);
            } finally {
              (this._runningTick = !1), K(t), this.afterTick.next();
            }
          }
          synchronize() {
            let t = null;
            this._injector.destroyed ||
              (t = this._injector.get(a8, null, { optional: !0 })),
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
              for (let { _lView: s, notifyErrorHandler: o } of this._views)
                NH(s, o, c, this.zonelessEnabled);
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
            this.allViews.some(({ _lView: t }) => g6(t))
              ? (this.dirtyFlags |= 2)
              : (this.dirtyFlags &= -8);
          }
          attachView(t) {
            const c = t;
            this._views.push(c), c.attachToAppRef(this);
          }
          detachView(t) {
            const c = t;
            As(this._views, c), c.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView), this.tick(), this.components.push(t);
            const c = this._injector.get(Is, []);
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
            return this._destroyListeners.push(t), () => As(this._destroyListeners, t);
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
      function As(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function NH(e, n, t, c) {
        (t || g6(e)) && J6(e, n, t && !c ? 0 : 1);
      }
      class xH {
        constructor(n, t) {
          (this.ngModuleFactory = n), (this.componentFactories = t);
        }
      }
      let SH = (() => {
          class e {
            compileModuleSync(t) {
              return new z8(t);
            }
            compileModuleAsync(t) {
              return Promise.resolve(this.compileModuleSync(t));
            }
            compileModuleAndAllComponentsSync(t) {
              const c = this.compileModuleSync(t),
                o = G1(a1(t).declarations).reduce((r, i) => {
                  const a = J(i);
                  return a && r.push(new C0(a)), r;
                }, []);
              return new xH(c, o);
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
        TH = (() => {
          class e {
            constructor() {
              (this.zone = y(l2)),
                (this.changeDetectionScheduler = y(_n)),
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
      function al({
        ngZoneFactory: e,
        ignoreChangesOutsideZone: n,
        scheduleInRootZone: t,
      }) {
        return (
          (e ??= () => new l2({ ...ll(), scheduleInRootZone: t })),
          [
            { provide: l2, useFactory: e },
            {
              provide: j1,
              multi: !0,
              useFactory: () => {
                const c = y(TH, { optional: !0 });
                return () => c.initialize();
              },
            },
            {
              provide: j1,
              multi: !0,
              useFactory: () => {
                const c = y(RH);
                return () => {
                  c.initialize();
                };
              },
            },
            !0 === n ? { provide: Cp, useValue: !0 } : [],
            { provide: i8, useValue: t ?? od },
          ]
        );
      }
      function ll(e) {
        return {
          enableLongStackTrace: !1,
          shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
          shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
        };
      }
      let RH = (() => {
          class e {
            constructor() {
              (this.subscription = new i1()),
                (this.initialized = !1),
                (this.zone = y(l2)),
                (this.pendingTasks = y(a3));
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
        P0 = (() => {
          class e {
            constructor() {
              (this.appRef = y(Fe)),
                (this.taskService = y(a3)),
                (this.ngZone = y(l2)),
                (this.zonelessEnabled = y(p0)),
                (this.disableScheduling = y(Cp, { optional: !0 }) ?? !1),
                (this.zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run),
                (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
                (this.subscriptions = new i1()),
                (this.angularZoneId = this.zoneIsDefined
                  ? this.ngZone._inner?.get(S6)
                  : null),
                (this.scheduleInRootZone =
                  !this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  (y(i8, { optional: !0 }) ?? !1)),
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
                  (this.ngZone instanceof Ji || !this.zoneIsDefined));
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
              const c = this.useMicrotaskScheduler ? id : rd;
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
                  Zone.current.get(S6 + this.angularZoneId))
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
                id(() => {
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
      const It = new _('', {
          providedIn: 'root',
          factory: () =>
            y(It, t2.Optional | t2.SkipSelf) ||
            (function OH() {
              return (typeof $localize < 'u' && $localize.locale) || zs;
            })(),
        }),
        fl = new _('');
      function ks(e) {
        return !!e.platformInjector;
      }
      let At = null;
      let V0 = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = WH);
        }
        return e;
      })();
      function WH(e) {
        return (function YH(e, n, t) {
          if (t3(e) && !t) {
            const c = H1(e.index, n);
            return new o0(c, c);
          }
          return 175 & e.type ? new o0(n[I2], n) : null;
        })(p2(), M(), !(16 & ~e));
      }
      class sM {
        constructor() {}
        supports(n) {
          return fs(n);
        }
        create(n) {
          return new JH(n);
        }
      }
      const XH = (e, n) => n;
      class JH {
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
            (this._trackByFn = n || XH);
        }
        forEachItem(n) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) n(t);
        }
        forEachOperation(n) {
          let t = this._itHead,
            c = this._removalsHead,
            s = 0,
            o = null;
          for (; t || c; ) {
            const r = !c || (t && t.currentIndex < rM(c, s, o)) ? t : c,
              i = rM(r, s, o),
              a = r.currentIndex;
            if (r === c) s--, (c = c._nextRemoved);
            else if (((t = t._next), null == r.previousIndex)) s++;
            else {
              o || (o = []);
              const l = i - s,
                u = a - s;
              if (l != u) {
                for (let d = 0; d < l; d++) {
                  const h = d < o.length ? o[d] : (o[d] = 0),
                    p = h + d;
                  u <= p && p < l && (o[d] = h + 1);
                }
                o[r.previousIndex] = u - l;
              }
            }
            i !== a && n(r, i, a);
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
          if ((null == n && (n = []), !fs(n))) throw new L(900, !1);
          return this.check(n) ? this : null;
        }
        onDestroy() {}
        check(n) {
          this._reset();
          let s,
            o,
            r,
            t = this._itHead,
            c = !1;
          if (Array.isArray(n)) {
            this.length = n.length;
            for (let i = 0; i < this.length; i++)
              (o = n[i]),
                (r = this._trackByFn(i, o)),
                null !== t && Object.is(t.trackById, r)
                  ? (c && (t = this._verifyReinsertion(t, o, r, i)),
                    Object.is(t.item, o) || this._addIdentityChange(t, o))
                  : ((t = this._mismatch(t, o, r, i)), (c = !0)),
                (t = t._next);
          } else
            (s = 0),
              (function mV(e, n) {
                if (Array.isArray(e)) for (let t = 0; t < e.length; t++) n(e[t]);
                else {
                  const t = e[Symbol.iterator]();
                  let c;
                  for (; !(c = t.next()).done; ) n(c.value);
                }
              })(n, i => {
                (r = this._trackByFn(s, i)),
                  null !== t && Object.is(t.trackById, r)
                    ? (c && (t = this._verifyReinsertion(t, i, r, s)),
                      Object.is(t.item, i) || this._addIdentityChange(t, i))
                    : ((t = this._mismatch(t, i, r, s)), (c = !0)),
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
          let o;
          return (
            null === n ? (o = this._itTail) : ((o = n._prev), this._remove(n)),
            null !==
            (n =
              null === this._unlinkedRecords ? null : this._unlinkedRecords.get(c, null))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t),
                this._reinsertAfter(n, o, s))
              : null !==
                (n = null === this._linkedRecords ? null : this._linkedRecords.get(c, s))
              ? (Object.is(n.item, t) || this._addIdentityChange(n, t),
                this._moveAfter(n, o, s))
              : (n = this._addAfter(new e$(t, c), o, s)),
            n
          );
        }
        _verifyReinsertion(n, t, c, s) {
          let o =
            null === this._unlinkedRecords ? null : this._unlinkedRecords.get(c, null);
          return (
            null !== o
              ? (n = this._reinsertAfter(o, n._prev, s))
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
            o = n._nextRemoved;
          return (
            null === s ? (this._removalsHead = o) : (s._nextRemoved = o),
            null === o ? (this._removalsTail = s) : (o._prevRemoved = s),
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
            null === this._linkedRecords && (this._linkedRecords = new oM()),
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
            null === this._unlinkedRecords && (this._unlinkedRecords = new oM()),
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
      class e$ {
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
      class t$ {
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
      class oM {
        constructor() {
          this.map = new Map();
        }
        put(n) {
          const t = n.trackById;
          let c = this.map.get(t);
          c || ((c = new t$()), this.map.set(t, c)), c.add(n);
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
      function rM(e, n, t) {
        const c = e.previousIndex;
        if (null === c) return c;
        let s = 0;
        return t && c < t.length && (s = t[c]), c + n + s;
      }
      class iM {
        constructor() {}
        supports(n) {
          return n instanceof Map || b8(n);
        }
        create() {
          return new n$();
        }
      }
      class n$ {
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
            if (!(n instanceof Map || b8(n))) throw new L(900, !1);
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
                const o = this._getOrCreateRecordForKey(s, c);
                t = this._insertBeforeOrAppend(t, o);
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
            const o = s._prev,
              r = s._next;
            return (
              o && (o._next = r),
              r && (r._prev = o),
              (s._next = null),
              (s._prev = null),
              s
            );
          }
          const c = new c$(n);
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
      class c$ {
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
      function aM() {
        return new Cl([new sM()]);
      }
      let Cl = (() => {
        class e {
          static #e = (this.ɵprov = w({ token: e, providedIn: 'root', factory: aM }));
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
              useFactory: c => e.create(t, c || aM()),
              deps: [[e, new li(), new ai()]],
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
      function lM() {
        return new Fs([new iM()]);
      }
      let Fs = (() => {
        class e {
          static #e = (this.ɵprov = w({ token: e, providedIn: 'root', factory: lM }));
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
              useFactory: c => e.create(t, c || lM()),
              deps: [[e, new li(), new ai()]],
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
      function C$(e) {
        try {
          const { rootComponent: n, appProviders: t, platformProviders: c } = e,
            s = (function GH(e = []) {
              if (At) return At;
              const n = (function XC(e = [], n) {
                return A2.create({
                  name: n,
                  providers: [
                    { provide: Mi, useValue: 'platform' },
                    { provide: fl, useValue: new Set([() => (At = null)]) },
                    ...e,
                  ],
                });
              })(e);
              return (
                (At = n),
                (function UC() {
                  !(function AI(e) {
                    Q9 = e;
                  })(() => {
                    throw new L(600, !1);
                  });
                })(),
                (function JC(e) {
                  e.get(Ad, null)?.forEach(t => t());
                })(n),
                n
              );
            })(c),
            o = [al({}), { provide: _n, useExisting: P0 }, ...(t || [])];
          return (function ZC(e) {
            const n = ks(e) ? e.r3Injector : e.moduleRef.injector,
              t = n.get(l2);
            return t.run(() => {
              ks(e)
                ? e.r3Injector.resolveInjectorInitializers()
                : e.moduleRef.resolveInjectorInitializers();
              const c = n.get(Se, null);
              let s;
              if (
                (t.runOutsideAngular(() => {
                  s = t.onError.subscribe({
                    next: o => {
                      c.handleError(o);
                    },
                  });
                }),
                ks(e))
              ) {
                const o = () => n.destroy(),
                  r = e.platformInjector.get(fl);
                r.add(o),
                  n.onDestroy(() => {
                    s.unsubscribe(), r.delete(o);
                  });
              } else
                e.moduleRef.onDestroy(() => {
                  As(e.allPlatformModules, e.moduleRef), s.unsubscribe();
                });
              return (function EH(e, n, t) {
                try {
                  const c = t();
                  return F0(c)
                    ? c.catch(s => {
                        throw (n.runOutsideAngular(() => e.handleError(s)), s);
                      })
                    : c;
                } catch (c) {
                  throw (n.runOutsideAngular(() => e.handleError(c)), c);
                }
              })(c, t, () => {
                const o = n.get(jC);
                return (
                  o.runInitializers(),
                  o.donePromise.then(() => {
                    if (
                      ((function nj(e) {
                        'string' == typeof e && (ig = e.toLowerCase().replace(/_/g, '-'));
                      })(n.get(It, zs) || zs),
                      ks(e))
                    ) {
                      const i = n.get(Fe);
                      return (
                        void 0 !== e.rootComponent && i.bootstrap(e.rootComponent), i
                      );
                    }
                    return (
                      (function UH(e, n) {
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
            r3Injector: new cm({
              providers: o,
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
      const wM = new _('');
      function Zn(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function w3(e, n) {
        L1('NgSignals');
        const t = (function xI(e) {
          const n = Object.create(SI);
          n.computation = e;
          const t = () => {
            if ((H9(n), Er(n), n.value === Vc)) throw n.error;
            return n.value;
          };
          return (t[ae] = n), t;
        })(e);
        return n?.equal && (t[ae].equal = n.equal), t;
      }
      function Pe(e) {
        const n = K(null);
        try {
          return e();
        } finally {
          K(n);
        }
      }
      let RM = null;
      function Tt() {
        return RM;
      }
      class $$ {}
      const F1 = new _('');
      let Ll = (() => {
          class e {
            historyGo(t) {
              throw new Error('');
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(G$),
              providedIn: 'platform',
            }));
          }
          return e;
        })(),
        G$ = (() => {
          class e extends Ll {
            constructor() {
              super(),
                (this._doc = y(F1)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return Tt().getBaseHref(this._doc);
            }
            onPopState(t) {
              const c = Tt().getGlobalEventTarget(this._doc, 'window');
              return (
                c.addEventListener('popstate', t, !1),
                () => c.removeEventListener('popstate', t)
              );
            }
            onHashChange(t) {
              const c = Tt().getGlobalEventTarget(this._doc, 'window');
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
      function zl(e, n) {
        if (0 == e.length) return n;
        if (0 == n.length) return e;
        let t = 0;
        return (
          e.endsWith('/') && t++,
          n.startsWith('/') && t++,
          2 == t ? e + n.substring(1) : 1 == t ? e + n : e + '/' + n
        );
      }
      function OM(e) {
        const n = e.match(/#|\?|$/),
          t = (n && n.index) || e.length;
        return e.slice(0, t - ('/' === e[t - 1] ? 1 : 0)) + e.slice(t);
      }
      function rt(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let Qn = (() => {
        class e {
          historyGo(t) {
            throw new Error('');
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: () => y(q$),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const FM = new _('');
      let q$ = (() => {
          class e extends Qn {
            constructor(t, c) {
              super(),
                (this._platformLocation = t),
                (this._removeListenerFns = []),
                (this._baseHref =
                  c ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  y(F1).location?.origin ??
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
              return zl(this._baseHref, t);
            }
            path(t = !1) {
              const c =
                  this._platformLocation.pathname + rt(this._platformLocation.search),
                s = this._platformLocation.hash;
              return s && t ? `${c}${s}` : c;
            }
            pushState(t, c, s, o) {
              const r = this.prepareExternalUrl(s + rt(o));
              this._platformLocation.pushState(t, c, r);
            }
            replaceState(t, c, s, o) {
              const r = this.prepareExternalUrl(s + rt(o));
              this._platformLocation.replaceState(t, c, r);
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
              return new (c || e)(N(Ll), N(FM, 8));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        W$ = (() => {
          class e extends Qn {
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
              const c = zl(this._baseHref, t);
              return c.length > 0 ? '#' + c : c;
            }
            pushState(t, c, s, o) {
              let r = this.prepareExternalUrl(s + rt(o));
              0 == r.length && (r = this._platformLocation.pathname),
                this._platformLocation.pushState(t, c, r);
            }
            replaceState(t, c, s, o) {
              let r = this.prepareExternalUrl(s + rt(o));
              0 == r.length && (r = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, c, r);
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
              return new (c || e)(N(Ll), N(FM, 8));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        H0 = (() => {
          class e {
            constructor(t) {
              (this._subject = new Z()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = t);
              const c = this._locationStrategy.getBaseHref();
              (this._basePath = (function Q$(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, t] = e.split(/\/\/[^\/]+/);
                  return t;
                }
                return e;
              })(OM(PM(c)))),
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
                (function Z$(e, n) {
                  if (!e || !n.startsWith(e)) return n;
                  const t = n.substring(e.length);
                  return '' === t || ['/', ';', '?', '#'].includes(t[0]) ? t : n;
                })(this._basePath, PM(t)),
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
            static #t = (this.joinWithSlash = zl);
            static #n = (this.stripTrailingSlash = OM);
            static #c = (this.ɵfac = function (c) {
              return new (c || e)(N(Qn));
            });
            static #s = (this.ɵprov = w({
              token: e,
              factory: () =>
                (function Y$() {
                  return new H0(N(Qn));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function PM(e) {
        return e.replace(/\/index.html$/, '');
      }
      const Al = /\s+/,
        WM = [];
      let Xn = (() => {
        class e {
          constructor(t, c) {
            (this._ngEl = t),
              (this._renderer = c),
              (this.initialClasses = WM),
              (this.stateMap = new Map());
          }
          set klass(t) {
            this.initialClasses = null != t ? t.trim().split(Al) : WM;
          }
          set ngClass(t) {
            this.rawClass = 'string' == typeof t ? t.trim().split(Al) : t;
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
              t.split(Al).forEach(s => {
                c
                  ? this._renderer.addClass(this._ngEl.nativeElement, s)
                  : this._renderer.removeClass(this._ngEl.nativeElement, s);
              });
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(A1), z(Te));
          });
          static #t = (this.ɵdir = P({
            type: e,
            selectors: [['', 'ngClass', '']],
            inputs: { klass: [0, 'class', 'klass'], ngClass: 'ngClass' },
            standalone: !0,
          }));
        }
        return e;
      })();
      class OG {
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
      let Tl = (() => {
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
            t.forEachOperation((s, o, r) => {
              if (null == s.previousIndex)
                c.createEmbeddedView(
                  this._template,
                  new OG(s.item, this._ngForOf, -1, -1),
                  null === r ? void 0 : r,
                );
              else if (null == r) c.remove(null === o ? void 0 : o);
              else if (null !== o) {
                const i = c.get(o);
                c.move(i, r), ZM(i, s);
              }
            });
            for (let s = 0, o = c.length; s < o; s++) {
              const i = c.get(s).context;
              (i.index = s), (i.count = o), (i.ngForOf = this._ngForOf);
            }
            t.forEachIdentityChange(s => {
              ZM(c.get(s.currentIndex), s);
            });
          }
          static ngTemplateContextGuard(t, c) {
            return !0;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(me), z(ot), z(Cl));
          });
          static #t = (this.ɵdir = P({
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
      function ZM(e, n) {
        e.context.$implicit = n.item;
      }
      let G0 = (() => {
        class e {
          constructor(t, c) {
            (this._viewContainer = t),
              (this._context = new FG()),
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
            QM('ngIfThen', t),
              (this._thenTemplateRef = t),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(t) {
            QM('ngIfElse', t),
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
            return new (c || e)(z(me), z(ot));
          });
          static #t = (this.ɵdir = P({
            type: e,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
            standalone: !0,
          }));
        }
        return e;
      })();
      class FG {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function QM(e, n) {
        if (n && !n.createEmbeddedView)
          throw new Error(`${e} must be a TemplateRef, but received '${Z2(n)}'.`);
      }
      class kl {
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
      let to = (() => {
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
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        KM = (() => {
          class e {
            constructor(t, c, s) {
              (this.ngSwitch = s), s._addCase(), (this._view = new kl(t, c));
            }
            ngDoCheck() {
              this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(me), z(ot), z(to, 9));
            });
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        Rl = (() => {
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
              const [s, o] = t.split('.'),
                r = -1 === s.indexOf('-') ? void 0 : _t.DashCase;
              null != c
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    s,
                    o ? `${c}${o}` : c,
                    r,
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, s, r);
            }
            _applyChanges(t) {
              t.forEachRemovedItem(c => this._setStyle(c.key, null)),
                t.forEachAddedItem(c => this._setStyle(c.key, c.currentValue)),
                t.forEachChangedItem(c => this._setStyle(c.key, c.currentValue));
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(A1), z(Fs), z(Te));
            });
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        Ve = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = J3({ type: e }));
            static #n = (this.ɵinj = Kt({}));
          }
          return e;
        })();
      const ev = 'browser';
      function tv(e) {
        return e === ev;
      }
      function nv(e) {
        return 'server' === e;
      }
      let lq = (() => {
        class e {
          static #e = (this.ɵprov = w({
            token: e,
            providedIn: 'root',
            factory: () => (tv(y(nt)) ? new uq(y(F1), window) : new dq()),
          }));
        }
        return e;
      })();
      class uq {
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
          const t = (function fq(e, n) {
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
                const o = s.shadowRoot;
                if (o) {
                  const r = o.getElementById(n) || o.querySelector(`[name="${n}"]`);
                  if (r) return r;
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
            o = this.offset();
          this.window.scrollTo(c - o[0], s - o[1]);
        }
      }
      class dq {
        setOffset(n) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(n) {}
        scrollToAnchor(n) {}
        setHistoryScrollRestoration(n) {}
      }
      class jq extends $$ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class jl extends jq {
        static makeCurrent() {
          !(function H$(e) {
            RM ??= e;
          })(new jl());
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
          const t = (function Uq() {
            return (
              (Y0 = Y0 || document.querySelector('base')),
              Y0 ? Y0.getAttribute('href') : null
            );
          })();
          return null == t
            ? null
            : (function Hq(e) {
                return new URL(e, document.baseURI).pathname;
              })(t);
        }
        resetBaseElement() {
          Y0 = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(n) {
          return (function kG(e, n) {
            n = encodeURIComponent(n);
            for (const t of e.split(';')) {
              const c = t.indexOf('='),
                [s, o] = -1 == c ? [t, ''] : [t.slice(0, c), t.slice(c + 1)];
              if (s.trim() === n) return decodeURIComponent(o);
            }
            return null;
          })(document.cookie, n);
        }
      }
      let Y0 = null,
        Gq = (() => {
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
      const oo = new _('');
      let dv = (() => {
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
            if (((c = this._plugins.find(o => o.supports(t))), !c)) throw new L(5101, !1);
            return this._eventNameToPlugin.set(t, c), c;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(N(oo), N(l2));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class Ul {
        constructor(n) {
          this._doc = n;
        }
      }
      const Hl = 'ng-app-id';
      let hv = (() => {
        class e {
          constructor(t, c, s, o = {}) {
            (this.doc = t),
              (this.appId = c),
              (this.nonce = s),
              (this.platformId = o),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = nv(o)),
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
            const t = this.doc.head?.querySelectorAll(`style[${Hl}="${this.appId}"]`);
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
              const o = s.get(t);
              return (o.usage += c), o.usage;
            }
            return s.set(t, { usage: c, elements: [] }), c;
          }
          getStyleElement(t, c) {
            const s = this.styleNodesInDOM,
              o = s?.get(c);
            if (o?.parentNode === t) return s.delete(c), o.removeAttribute(Hl), o;
            {
              const r = this.doc.createElement('style');
              return (
                this.nonce && r.setAttribute('nonce', this.nonce),
                (r.textContent = c),
                this.platformIsServer && r.setAttribute(Hl, this.appId),
                t.appendChild(r),
                r
              );
            }
          }
          addStyleToHost(t, c) {
            const s = this.getStyleElement(t, c),
              o = this.styleRef,
              r = o.get(c)?.elements;
            r ? r.push(s) : o.set(c, { elements: [s], usage: 1 });
          }
          resetHostNodes() {
            const t = this.hostNodes;
            t.clear(), t.add(this.doc.head);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(N(F1), N(q4), N(ra, 8), N(nt));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const $l = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        Gl = /%COMP%/g,
        Zq = new _('', { providedIn: 'root', factory: () => !0 });
      function mv(e, n) {
        return n.map(t => t.replace(Gl, e));
      }
      let gv = (() => {
        class e {
          constructor(t, c, s, o, r, i, a, l = null) {
            (this.eventManager = t),
              (this.sharedStylesHost = c),
              (this.appId = s),
              (this.removeStylesOnCompDestroy = o),
              (this.doc = r),
              (this.platformId = i),
              (this.ngZone = a),
              (this.nonce = l),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = nv(i)),
              (this.defaultRenderer = new ql(t, r, a, this.platformIsServer));
          }
          createRenderer(t, c) {
            if (!t || !c) return this.defaultRenderer;
            this.platformIsServer &&
              c.encapsulation === le.ShadowDom &&
              (c = { ...c, encapsulation: le.Emulated });
            const s = this.getOrCreateRenderer(t, c);
            return (
              s instanceof Mv ? s.applyToHost(t) : s instanceof Wl && s.applyStyles(), s
            );
          }
          getOrCreateRenderer(t, c) {
            const s = this.rendererByCompId;
            let o = s.get(c.id);
            if (!o) {
              const r = this.doc,
                i = this.ngZone,
                a = this.eventManager,
                l = this.sharedStylesHost,
                u = this.removeStylesOnCompDestroy,
                f = this.platformIsServer;
              switch (c.encapsulation) {
                case le.Emulated:
                  o = new Mv(a, l, c, this.appId, u, r, i, f);
                  break;
                case le.ShadowDom:
                  return new Jq(a, l, t, c, r, i, this.nonce, f);
                default:
                  o = new Wl(a, l, c, u, r, i, f);
              }
              s.set(c.id, o);
            }
            return o;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(N(dv), N(hv), N(q4), N(Zq), N(F1), N(nt), N(l2), N(ra));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class ql {
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
          return t ? this.doc.createElementNS($l[t] || t, n) : this.doc.createElement(n);
        }
        createComment(n) {
          return this.doc.createComment(n);
        }
        createText(n) {
          return this.doc.createTextNode(n);
        }
        appendChild(n, t) {
          (Cv(n) ? n.content : n).appendChild(t);
        }
        insertBefore(n, t, c) {
          n && (Cv(n) ? n.content : n).insertBefore(t, c);
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
            const o = $l[s];
            o ? n.setAttributeNS(o, t, c) : n.setAttribute(t, c);
          } else n.setAttribute(t, c);
        }
        removeAttribute(n, t, c) {
          if (c) {
            const s = $l[c];
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
          if ('string' == typeof n && !(n = Tt().getGlobalEventTarget(this.doc, n)))
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
      function Cv(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class Jq extends ql {
        constructor(n, t, c, s, o, r, i, a) {
          super(n, o, r, a),
            (this.sharedStylesHost = t),
            (this.hostEl = c),
            (this.shadowRoot = c.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const l = mv(s.id, s.styles);
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
      class Wl extends ql {
        constructor(n, t, c, s, o, r, i, a) {
          super(n, o, r, i),
            (this.sharedStylesHost = t),
            (this.removeStylesOnCompDestroy = s),
            (this.styles = a ? mv(a, c.styles) : c.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class Mv extends Wl {
        constructor(n, t, c, s, o, r, i, a) {
          const l = s + '-' + c.id;
          super(n, t, c, o, r, i, a, l),
            (this.contentAttr = (function Qq(e) {
              return '_ngcontent-%COMP%'.replace(Gl, e);
            })(l)),
            (this.hostAttr = (function Kq(e) {
              return '_nghost-%COMP%'.replace(Gl, e);
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
      let eW = (() => {
          class e extends Ul {
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
              return new (c || e)(N(F1));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        tW = (() => {
          class e extends Ul {
            constructor(t) {
              super(t), (this.delegate = y(wM, { optional: !0 }));
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
              return new (c || e)(N(F1));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })();
      const vv = ['alt', 'control', 'meta', 'shift'],
        nW = {
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
        cW = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      function yv(e) {
        return { appProviders: [...fW, ...(e?.providers ?? [])], platformProviders: lW };
      }
      const lW = [
          { provide: nt, useValue: ev },
          {
            provide: Ad,
            useValue: function rW() {
              jl.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: F1,
            useFactory: function aW() {
              return (
                (function DR(e) {
                  oa = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        fW = [
          { provide: Mi, useValue: 'root' },
          {
            provide: Se,
            useFactory: function iW() {
              return new Se();
            },
            deps: [],
          },
          { provide: oo, useClass: eW, multi: !0, deps: [F1, l2, nt] },
          {
            provide: oo,
            useClass: (() => {
              class e extends Ul {
                constructor(t) {
                  super(t);
                }
                supports(t) {
                  return null != e.parseEventName(t);
                }
                addEventListener(t, c, s) {
                  const o = e.parseEventName(c),
                    r = e.eventCallback(o.fullKey, s, this.manager.getZone());
                  return this.manager
                    .getZone()
                    .runOutsideAngular(() => Tt().onAndCancel(t, o.domEventName, r));
                }
                static parseEventName(t) {
                  const c = t.toLowerCase().split('.'),
                    s = c.shift();
                  if (0 === c.length || ('keydown' !== s && 'keyup' !== s)) return null;
                  const o = e._normalizeKey(c.pop());
                  let r = '',
                    i = c.indexOf('code');
                  if (
                    (i > -1 && (c.splice(i, 1), (r = 'code.')),
                    vv.forEach(l => {
                      const u = c.indexOf(l);
                      u > -1 && (c.splice(u, 1), (r += l + '.'));
                    }),
                    (r += o),
                    0 != c.length || 0 === o.length)
                  )
                    return null;
                  const a = {};
                  return (a.domEventName = s), (a.fullKey = r), a;
                }
                static matchEventFullKeyCode(t, c) {
                  let s = nW[t.key] || t.key,
                    o = '';
                  return (
                    c.indexOf('code.') > -1 && ((s = t.code), (o = 'code.')),
                    !(null == s || !s) &&
                      ((s = s.toLowerCase()),
                      ' ' === s ? (s = 'space') : '.' === s && (s = 'dot'),
                      vv.forEach(r => {
                        r !== s && (0, cW[r])(t) && (o += r + '.');
                      }),
                      (o += s),
                      o === c)
                  );
                }
                static eventCallback(t, c, s) {
                  return o => {
                    e.matchEventFullKeyCode(o, t) && s.runGuarded(() => c(o));
                  };
                }
                static _normalizeKey(t) {
                  return 'esc' === t ? 'escape' : t;
                }
                static #e = (this.ɵfac = function (c) {
                  return new (c || e)(N(F1));
                });
                static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
              }
              return e;
            })(),
            multi: !0,
            deps: [F1],
          },
          { provide: oo, useClass: tW, multi: !0 },
          gv,
          hv,
          dv,
          { provide: a8, useExisting: gv },
          { provide: class hq {}, useClass: Gq, deps: [] },
          [],
        ];
      let dW = (() => {
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
              return new (c || e)(N(F1));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        _v = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: function (c) {
                let s = null;
                return (s = c ? new (c || e)() : N(gW)), s;
              },
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        gW = (() => {
          class e extends _v {
            constructor(t) {
              super(), (this._doc = t);
            }
            sanitize(t, c) {
              if (null == c) return null;
              switch (t) {
                case ne.NONE:
                  return c;
                case ne.HTML:
                  return Ie(c, 'HTML') ? $1(c) : th(this._doc, String(c)).toString();
                case ne.STYLE:
                  return Ie(c, 'Style') ? $1(c) : c;
                case ne.SCRIPT:
                  if (Ie(c, 'Script')) return $1(c);
                  throw new L(5200, !1);
                case ne.URL:
                  return Ie(c, 'URL') ? $1(c) : U6(String(c));
                case ne.RESOURCE_URL:
                  if (Ie(c, 'ResourceURL')) return $1(c);
                  throw new L(5201, !1);
                default:
                  throw new L(5202, !1);
              }
            }
            bypassSecurityTrustHtml(t) {
              return (function WR(e) {
                return new jR(e);
              })(t);
            }
            bypassSecurityTrustStyle(t) {
              return (function YR(e) {
                return new UR(e);
              })(t);
            }
            bypassSecurityTrustScript(t) {
              return (function ZR(e) {
                return new HR(e);
              })(t);
            }
            bypassSecurityTrustUrl(t) {
              return (function QR(e) {
                return new $R(e);
              })(t);
            }
            bypassSecurityTrustResourceUrl(t) {
              return (function KR(e) {
                return new GR(e);
              })(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(N(F1));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function kt(e) {
        return this instanceof kt ? ((this.v = e), this) : new kt(e);
      }
      function Ev(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = (function Kl(e) {
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
        function c(o) {
          t[o] =
            e[o] &&
            function (r) {
              return new Promise(function (i, a) {
                !(function s(o, r, i, a) {
                  Promise.resolve(a).then(function (l) {
                    o({ value: l, done: i });
                  }, r);
                })(i, a, (r = e[o](r)).done, r.value);
              });
            };
        }
      }
      'function' == typeof SuppressedError && SuppressedError;
      const Nv = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function xv(e) {
        return E2(e?.then);
      }
      function Sv(e) {
        return E2(e[Br]);
      }
      function Iv(e) {
        return Symbol.asyncIterator && E2(e?.[Symbol.asyncIterator]);
      }
      function Av(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e ? 'an invalid object' : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const Tv = (function VW() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function kv(e) {
        return E2(e?.[Tv]);
      }
      function Rv(e) {
        return (function Dv(e, n, t) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
          var s,
            c = t.apply(e, n || []),
            o = [];
          return (
            (s = {}),
            i('next'),
            i('throw'),
            i('return', function r(h) {
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
                  o.push([h, m, C, v]) > 1 || a(h, m);
                });
              }),
              p && (s[h] = p(s[h])));
          }
          function a(h, p) {
            try {
              !(function l(h) {
                h.value instanceof kt
                  ? Promise.resolve(h.value.v).then(u, f)
                  : d(o[0][2], h);
              })(c[h](p));
            } catch (m) {
              d(o[0][3], m);
            }
          }
          function u(h) {
            a('next', h);
          }
          function f(h) {
            a('throw', h);
          }
          function d(h, p) {
            h(p), o.shift(), o.length && a(o[0][0], o[0][1]);
          }
        })(this, arguments, function* () {
          const t = e.getReader();
          try {
            for (;;) {
              const { value: c, done: s } = yield kt(t.read());
              if (s) return yield kt(void 0);
              yield yield kt(c);
            }
          } finally {
            t.releaseLock();
          }
        });
      }
      function Ov(e) {
        return E2(e?.getReader);
      }
      function Le(e) {
        if (e instanceof O2) return e;
        if (null != e) {
          if (Sv(e))
            return (function BW(e) {
              return new O2(n => {
                const t = e[Br]();
                if (E2(t.subscribe)) return t.subscribe(n);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (Nv(e))
            return (function jW(e) {
              return new O2(n => {
                for (let t = 0; t < e.length && !n.closed; t++) n.next(e[t]);
                n.complete();
              });
            })(e);
          if (xv(e))
            return (function UW(e) {
              return new O2(n => {
                e.then(
                  t => {
                    n.closed || (n.next(t), n.complete());
                  },
                  t => n.error(t),
                ).then(null, cu);
              });
            })(e);
          if (Iv(e)) return Fv(e);
          if (kv(e))
            return (function HW(e) {
              return new O2(n => {
                for (const t of e) if ((n.next(t), n.closed)) return;
                n.complete();
              });
            })(e);
          if (Ov(e))
            return (function $W(e) {
              return Fv(Rv(e));
            })(e);
        }
        throw Av(e);
      }
      function Fv(e) {
        return new O2(n => {
          (function GW(e, n) {
            var t, c, s, o;
            return (function bv(e, n, t, c) {
              return new (t || (t = Promise))(function (o, r) {
                function i(u) {
                  try {
                    l(c.next(u));
                  } catch (f) {
                    r(f);
                  }
                }
                function a(u) {
                  try {
                    l(c.throw(u));
                  } catch (f) {
                    r(f);
                  }
                }
                function l(u) {
                  u.done
                    ? o(u.value)
                    : (function s(o) {
                        return o instanceof t
                          ? o
                          : new t(function (r) {
                              r(o);
                            });
                      })(u.value).then(i, a);
                }
                l((c = c.apply(e, n || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (t = Ev(e); !(c = yield t.next()).done; )
                  if ((n.next(c.value), n.closed)) return;
              } catch (r) {
                s = { error: r };
              } finally {
                try {
                  c && !c.done && (o = t.return) && (yield o.call(t));
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
        const o = n.schedule(function () {
          t(), s ? e.add(this.schedule(null, c)) : this.unsubscribe();
        }, c);
        if ((e.add(o), !s)) return o;
      }
      function Xl(e, n = 0) {
        return U2((t, c) => {
          t.subscribe(
            R2(
              c,
              s => lt(c, e, () => c.next(s), n),
              () => lt(c, e, () => c.complete(), n),
              s => lt(c, e, () => c.error(s), n),
            ),
          );
        });
      }
      function Pv(e, n = 0) {
        return U2((t, c) => {
          c.add(e.schedule(() => t.subscribe(c), n));
        });
      }
      function Vv(e, n) {
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
          ? (function KW(e, n) {
              if (null != e) {
                if (Sv(e))
                  return (function qW(e, n) {
                    return Le(e).pipe(Pv(n), Xl(n));
                  })(e, n);
                if (Nv(e))
                  return (function YW(e, n) {
                    return new O2(t => {
                      let c = 0;
                      return n.schedule(function () {
                        c === e.length
                          ? t.complete()
                          : (t.next(e[c++]), t.closed || this.schedule());
                      });
                    });
                  })(e, n);
                if (xv(e))
                  return (function WW(e, n) {
                    return Le(e).pipe(Pv(n), Xl(n));
                  })(e, n);
                if (Iv(e)) return Vv(e, n);
                if (kv(e))
                  return (function ZW(e, n) {
                    return new O2(t => {
                      let c;
                      return (
                        lt(t, n, () => {
                          (c = e[Tv]()),
                            lt(
                              t,
                              n,
                              () => {
                                let s, o;
                                try {
                                  ({ value: s, done: o } = c.next());
                                } catch (r) {
                                  return void t.error(r);
                                }
                                o ? t.complete() : t.next(s);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => E2(c?.return) && c.return()
                      );
                    });
                  })(e, n);
                if (Ov(e))
                  return (function QW(e, n) {
                    return Vv(Rv(e), n);
                  })(e, n);
              }
              throw Av(e);
            })(e, n)
          : Le(e);
      }
      function Jl(e) {
        return e[e.length - 1];
      }
      function e5(e) {
        return E2(Jl(e)) ? e.pop() : void 0;
      }
      function io(e) {
        return (function XW(e) {
          return e && E2(e.schedule);
        })(Jl(e))
          ? e.pop()
          : void 0;
      }
      function W(...e) {
        return f1(e, io(e));
      }
      const ao = Tr(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: JW } = Array,
        { getPrototypeOf: eY, prototype: tY, keys: nY } = Object;
      function Bv(e) {
        if (1 === e.length) {
          const n = e[0];
          if (JW(n)) return { args: n, keys: null };
          if (
            (function cY(e) {
              return e && 'object' == typeof e && eY(e) === tY;
            })(n)
          ) {
            const t = nY(n);
            return { args: t.map(c => n[c]), keys: t };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: sY } = Array;
      function jv(e) {
        return s2(n =>
          (function oY(e, n) {
            return sY(n) ? e(...n) : e(n);
          })(e, n),
        );
      }
      function Uv(e, n) {
        return e.reduce((t, c, s) => ((t[c] = n[s]), t), {});
      }
      function t5(...e) {
        const n = io(e),
          t = e5(e),
          { args: c, keys: s } = Bv(e);
        if (0 === c.length) return f1([], n);
        const o = new O2(
          (function rY(e, n, t = Ze) {
            return c => {
              Hv(
                n,
                () => {
                  const { length: s } = e,
                    o = new Array(s);
                  let r = s,
                    i = s;
                  for (let a = 0; a < s; a++)
                    Hv(
                      n,
                      () => {
                        const l = f1(e[a], n);
                        let u = !1;
                        l.subscribe(
                          R2(
                            c,
                            f => {
                              (o[a] = f), u || ((u = !0), i--), i || c.next(t(o.slice()));
                            },
                            () => {
                              --r || c.complete();
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
          })(c, n, s ? r => Uv(s, r) : Ze),
        );
        return t ? o.pipe(jv(t)) : o;
      }
      function Hv(e, n, t) {
        e ? lt(t, e, n) : n();
      }
      function w1(e, n, t = 1 / 0) {
        return E2(n)
          ? w1((c, s) => s2((o, r) => n(c, o, s, r))(Le(e(c, s))), t)
          : ('number' == typeof n && (t = n),
            U2((c, s) =>
              (function iY(e, n, t, c, s, o, r, i) {
                const a = [];
                let l = 0,
                  u = 0,
                  f = !1;
                const d = () => {
                    f && !a.length && !l && n.complete();
                  },
                  h = m => (l < c ? p(m) : a.push(m)),
                  p = m => {
                    o && n.next(m), l++;
                    let C = !1;
                    Le(t(m, u++)).subscribe(
                      R2(
                        n,
                        v => {
                          s?.(v), o ? h(v) : n.next(v);
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
                                r ? lt(n, r, () => p(v)) : p(v);
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
                    R2(n, h, () => {
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
      function lo(...e) {
        return (function aY() {
          return (function n5(e = 1 / 0) {
            return w1(Ze, e);
          })(1);
        })()(f1(e, io(e)));
      }
      function $v(e) {
        return new O2(n => {
          Le(e()).subscribe(n);
        });
      }
      function uo(e, n) {
        const t = E2(e) ? e : () => e,
          c = s => s.error(t());
        return new O2(n ? s => n.schedule(c, 0, s) : c);
      }
      const Be = new O2(e => e.complete());
      function c5() {
        return U2((e, n) => {
          let t = null;
          e._refCount++;
          const c = R2(n, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) return void (t = null);
            const s = e._connection,
              o = t;
            (t = null), s && (!o || s === o) && s.unsubscribe(), n.unsubscribe();
          });
          e.subscribe(c), c.closed || (t = e.connect());
        });
      }
      class Gv extends O2 {
        constructor(n, t) {
          super(),
            (this.source = n),
            (this.subjectFactory = t),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            iu(n) && (this.lift = n.lift);
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
                R2(
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
          return c5()(this);
        }
      }
      function ut(e, n) {
        return U2((t, c) => {
          let s = null,
            o = 0,
            r = !1;
          const i = () => r && !s && c.complete();
          t.subscribe(
            R2(
              c,
              a => {
                s?.unsubscribe();
                let l = 0;
                const u = o++;
                Le(e(a, u)).subscribe(
                  (s = R2(
                    c,
                    f => c.next(n ? n(a, f, u, l++) : f),
                    () => {
                      (s = null), i();
                    },
                  )),
                );
              },
              () => {
                (r = !0), i();
              },
            ),
          );
        });
      }
      function E3(e) {
        return e <= 0
          ? () => Be
          : U2((n, t) => {
              let c = 0;
              n.subscribe(
                R2(t, s => {
                  ++c <= e && (t.next(s), e <= c && t.complete());
                }),
              );
            });
      }
      function qv(...e) {
        const n = io(e);
        return U2((t, c) => {
          (n ? lo(e, t, n) : lo(e, t)).subscribe(c);
        });
      }
      function Rt(e, n) {
        return U2((t, c) => {
          let s = 0;
          t.subscribe(R2(c, o => e.call(n, o, s++) && c.next(o)));
        });
      }
      function fo(e) {
        return U2((n, t) => {
          let c = !1;
          n.subscribe(
            R2(
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
      function Wv(e = uY) {
        return U2((n, t) => {
          let c = !1;
          n.subscribe(
            R2(
              t,
              s => {
                (c = !0), t.next(s);
              },
              () => (c ? t.complete() : t.error(e())),
            ),
          );
        });
      }
      function uY() {
        return new ao();
      }
      function N3(e, n) {
        const t = arguments.length >= 2;
        return c =>
          c.pipe(
            e ? Rt((s, o) => e(s, o, c)) : Ze,
            E3(1),
            t ? fo(n) : Wv(() => new ao()),
          );
      }
      function ho(e, n) {
        return E2(n) ? w1(e, n, 1) : w1(e, 1);
      }
      function D1(e, n, t) {
        const c = E2(e) || n || t ? { next: e, error: n, complete: t } : e;
        return c
          ? U2((s, o) => {
              var r;
              null === (r = c.subscribe) || void 0 === r || r.call(c);
              let i = !0;
              s.subscribe(
                R2(
                  o,
                  a => {
                    var l;
                    null === (l = c.next) || void 0 === l || l.call(c, a), o.next(a);
                  },
                  () => {
                    var a;
                    (i = !1),
                      null === (a = c.complete) || void 0 === a || a.call(c),
                      o.complete();
                  },
                  a => {
                    var l;
                    (i = !1),
                      null === (l = c.error) || void 0 === l || l.call(c, a),
                      o.error(a);
                  },
                  () => {
                    var a, l;
                    i && (null === (a = c.unsubscribe) || void 0 === a || a.call(c)),
                      null === (l = c.finalize) || void 0 === l || l.call(c);
                  },
                ),
              );
            })
          : Ze;
      }
      function e4(e) {
        return U2((n, t) => {
          let o,
            c = null,
            s = !1;
          (c = n.subscribe(
            R2(t, void 0, void 0, r => {
              (o = Le(e(r, e4(e)(n)))),
                c ? (c.unsubscribe(), (c = null), o.subscribe(t)) : (s = !0);
            }),
          )),
            s && (c.unsubscribe(), (c = null), o.subscribe(t));
        });
      }
      function Yv(e, n) {
        return U2(
          (function fY(e, n, t, c, s) {
            return (o, r) => {
              let i = t,
                a = n,
                l = 0;
              o.subscribe(
                R2(
                  r,
                  u => {
                    const f = l++;
                    (a = i ? e(a, u, f) : ((i = !0), u)), c && r.next(a);
                  },
                  s &&
                    (() => {
                      i && r.next(a), r.complete();
                    }),
                ),
              );
            };
          })(e, n, arguments.length >= 2, !0),
        );
      }
      function s5(e) {
        return e <= 0
          ? () => Be
          : U2((n, t) => {
              let c = [];
              n.subscribe(
                R2(
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
      function o5(e) {
        return U2((n, t) => {
          try {
            n.subscribe(t);
          } finally {
            t.add(e);
          }
        });
      }
      function Zv(e) {
        return U2((n, t) => {
          Le(e).subscribe(R2(t, () => t.complete(), Hc)), !t.closed && n.subscribe(t);
        });
      }
      const Q = 'primary',
        Z0 = Symbol('RouteTitle');
      class pY {
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
      function t4(e) {
        return new pY(e);
      }
      function mY(e, n, t) {
        const c = t.path.split('/');
        if (
          c.length > e.length ||
          ('full' === t.pathMatch && (n.hasChildren() || c.length < e.length))
        )
          return null;
        const s = {};
        for (let o = 0; o < c.length; o++) {
          const r = c[o],
            i = e[o];
          if (':' === r[0]) s[r.substring(1)] = i;
          else if (r !== i.path) return null;
        }
        return { consumed: e.slice(0, c.length), posParams: s };
      }
      function je(e, n) {
        const t = e ? r5(e) : void 0,
          c = n ? r5(n) : void 0;
        if (!t || !c || t.length != c.length) return !1;
        let s;
        for (let o = 0; o < t.length; o++) if (((s = t[o]), !Qv(e[s], n[s]))) return !1;
        return !0;
      }
      function r5(e) {
        return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
      }
      function Qv(e, n) {
        if (Array.isArray(e) && Array.isArray(n)) {
          if (e.length !== n.length) return !1;
          const t = [...e].sort(),
            c = [...n].sort();
          return t.every((s, o) => c[o] === s);
        }
        return e === n;
      }
      function Kv(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Ot(e) {
        return (function CW(e) {
          return !!e && (e instanceof O2 || (E2(e.lift) && E2(e.subscribe)));
        })(e)
          ? e
          : F0(e)
          ? f1(Promise.resolve(e))
          : W(e);
      }
      const CY = {
          exact: function ey(e, n, t) {
            if (
              !S3(e.segments, n.segments) ||
              !po(e.segments, n.segments, t) ||
              e.numberOfChildren !== n.numberOfChildren
            )
              return !1;
            for (const c in n.children)
              if (!e.children[c] || !ey(e.children[c], n.children[c], t)) return !1;
            return !0;
          },
          subset: ty,
        },
        Xv = {
          exact: function MY(e, n) {
            return je(e, n);
          },
          subset: function vY(e, n) {
            return (
              Object.keys(n).length <= Object.keys(e).length &&
              Object.keys(n).every(t => Qv(e[t], n[t]))
            );
          },
          ignored: () => !0,
        };
      function Jv(e, n, t) {
        return (
          CY[t.paths](e.root, n.root, t.matrixParams) &&
          Xv[t.queryParams](e.queryParams, n.queryParams) &&
          !('exact' === t.fragment && e.fragment !== n.fragment)
        );
      }
      function ty(e, n, t) {
        return ny(e, n, n.segments, t);
      }
      function ny(e, n, t, c) {
        if (e.segments.length > t.length) {
          const s = e.segments.slice(0, t.length);
          return !(!S3(s, t) || n.hasChildren() || !po(s, t, c));
        }
        if (e.segments.length === t.length) {
          if (!S3(e.segments, t) || !po(e.segments, t, c)) return !1;
          for (const s in n.children)
            if (!e.children[s] || !ty(e.children[s], n.children[s], c)) return !1;
          return !0;
        }
        {
          const s = t.slice(0, e.segments.length),
            o = t.slice(e.segments.length);
          return (
            !!(S3(e.segments, s) && po(e.segments, s, c) && e.children[Q]) &&
            ny(e.children[Q], n, o, c)
          );
        }
      }
      function po(e, n, t) {
        return n.every((c, s) => Xv[t](e[s].parameters, c.parameters));
      }
      class x3 {
        constructor(n = new m2([], {}), t = {}, c = null) {
          (this.root = n), (this.queryParams = t), (this.fragment = c);
        }
        get queryParamMap() {
          return (this._queryParamMap ??= t4(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return zY.serialize(this);
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
          return go(this);
        }
      }
      class Q0 {
        constructor(n, t) {
          (this.path = n), (this.parameters = t);
        }
        get parameterMap() {
          return (this._parameterMap ??= t4(this.parameters)), this._parameterMap;
        }
        toString() {
          return oy(this);
        }
      }
      function S3(e, n) {
        return e.length === n.length && e.every((t, c) => t.path === n[c].path);
      }
      let n4 = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: () => new mo(),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class mo {
        parse(n) {
          const t = new TY(n);
          return new x3(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment());
        }
        serialize(n) {
          const t = `/${K0(n.root, !0)}`,
            c = (function wY(e) {
              const n = Object.entries(e)
                .map(([t, c]) =>
                  Array.isArray(c)
                    ? c.map(s => `${Co(t)}=${Co(s)}`).join('&')
                    : `${Co(t)}=${Co(c)}`,
                )
                .filter(t => t);
              return n.length ? `?${n.join('&')}` : '';
            })(n.queryParams);
          return `${t}${c}${
            'string' == typeof n.fragment
              ? `#${(function _Y(e) {
                  return encodeURI(e);
                })(n.fragment)}`
              : ''
          }`;
        }
      }
      const zY = new mo();
      function go(e) {
        return e.segments.map(n => oy(n)).join('/');
      }
      function K0(e, n) {
        if (!e.hasChildren()) return go(e);
        if (n) {
          const t = e.children[Q] ? K0(e.children[Q], !1) : '',
            c = [];
          return (
            Object.entries(e.children).forEach(([s, o]) => {
              s !== Q && c.push(`${s}:${K0(o, !1)}`);
            }),
            c.length > 0 ? `${t}(${c.join('//')})` : t
          );
        }
        {
          const t = (function LY(e, n) {
            let t = [];
            return (
              Object.entries(e.children).forEach(([c, s]) => {
                c === Q && (t = t.concat(n(s, c)));
              }),
              Object.entries(e.children).forEach(([c, s]) => {
                c !== Q && (t = t.concat(n(s, c)));
              }),
              t
            );
          })(e, (c, s) => (s === Q ? [K0(e.children[Q], !1)] : [`${s}:${K0(c, !1)}`]));
          return 1 === Object.keys(e.children).length && null != e.children[Q]
            ? `${go(e)}/${t[0]}`
            : `${go(e)}/(${t.join('//')})`;
        }
      }
      function cy(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Co(e) {
        return cy(e).replace(/%3B/gi, ';');
      }
      function i5(e) {
        return cy(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function Mo(e) {
        return decodeURIComponent(e);
      }
      function sy(e) {
        return Mo(e.replace(/\+/g, '%20'));
      }
      function oy(e) {
        return `${i5(e.path)}${(function bY(e) {
          return Object.entries(e)
            .map(([n, t]) => `;${i5(n)}=${i5(t)}`)
            .join('');
        })(e.parameters)}`;
      }
      const DY = /^[^\/()?;#]+/;
      function a5(e) {
        const n = e.match(DY);
        return n ? n[0] : '';
      }
      const EY = /^[^\/()?;=#]+/,
        xY = /^[^=?&#]+/,
        IY = /^[^&#]+/;
      class TY {
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
            (n.length > 0 || Object.keys(t).length > 0) && (c[Q] = new m2(n, t)),
            c
          );
        }
        parseSegment() {
          const n = a5(this.remaining);
          if ('' === n && this.peekStartsWith(';')) throw new L(4009, !1);
          return this.capture(n), new Q0(Mo(n), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const n = {};
          for (; this.consumeOptional(';'); ) this.parseParam(n);
          return n;
        }
        parseParam(n) {
          const t = (function NY(e) {
            const n = e.match(EY);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let c = '';
          if (this.consumeOptional('=')) {
            const s = a5(this.remaining);
            s && ((c = s), this.capture(c));
          }
          n[Mo(t)] = Mo(c);
        }
        parseQueryParam(n) {
          const t = (function SY(e) {
            const n = e.match(xY);
            return n ? n[0] : '';
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let c = '';
          if (this.consumeOptional('=')) {
            const r = (function AY(e) {
              const n = e.match(IY);
              return n ? n[0] : '';
            })(this.remaining);
            r && ((c = r), this.capture(c));
          }
          const s = sy(t),
            o = sy(c);
          if (n.hasOwnProperty(s)) {
            let r = n[s];
            Array.isArray(r) || ((r = [r]), (n[s] = r)), r.push(o);
          } else n[s] = o;
        }
        parseParens(n) {
          const t = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const c = a5(this.remaining),
              s = this.remaining[c.length];
            if ('/' !== s && ')' !== s && ';' !== s) throw new L(4010, !1);
            let o;
            c.indexOf(':') > -1
              ? ((o = c.slice(0, c.indexOf(':'))), this.capture(o), this.capture(':'))
              : n && (o = Q);
            const r = this.parseChildren();
            (t[o] = 1 === Object.keys(r).length ? r[Q] : new m2([], r)),
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
      function ry(e) {
        return e.segments.length > 0 ? new m2([], { [Q]: e }) : e;
      }
      function iy(e) {
        const n = {};
        for (const [c, s] of Object.entries(e.children)) {
          const o = iy(s);
          if (c === Q && 0 === o.segments.length && o.hasChildren())
            for (const [r, i] of Object.entries(o.children)) n[r] = i;
          else (o.segments.length > 0 || o.hasChildren()) && (n[c] = o);
        }
        return (function kY(e) {
          if (1 === e.numberOfChildren && e.children[Q]) {
            const n = e.children[Q];
            return new m2(e.segments.concat(n.segments), n.children);
          }
          return e;
        })(new m2(e.segments, n));
      }
      function I3(e) {
        return e instanceof x3;
      }
      function ay(e) {
        let n;
        const s = ry(
          (function t(o) {
            const r = {};
            for (const a of o.children) {
              const l = t(a);
              r[a.outlet] = l;
            }
            const i = new m2(o.url, r);
            return o === e && (n = i), i;
          })(e.root),
        );
        return n ?? s;
      }
      function ly(e, n, t, c) {
        let s = e;
        for (; s.parent; ) s = s.parent;
        if (0 === n.length) return l5(s, s, s, t, c);
        const o = (function OY(e) {
          if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
            return new fy(!0, 0, e);
          let n = 0,
            t = !1;
          const c = e.reduce((s, o, r) => {
            if ('object' == typeof o && null != o) {
              if (o.outlets) {
                const i = {};
                return (
                  Object.entries(o.outlets).forEach(([a, l]) => {
                    i[a] = 'string' == typeof l ? l.split('/') : l;
                  }),
                  [...s, { outlets: i }]
                );
              }
              if (o.segmentPath) return [...s, o.segmentPath];
            }
            return 'string' != typeof o
              ? [...s, o]
              : 0 === r
              ? (o.split('/').forEach((i, a) => {
                  (0 == a && '.' === i) ||
                    (0 == a && '' === i
                      ? (t = !0)
                      : '..' === i
                      ? n++
                      : '' != i && s.push(i));
                }),
                s)
              : [...s, o];
          }, []);
          return new fy(t, n, c);
        })(n);
        if (o.toRoot()) return l5(s, s, new m2([], {}), t, c);
        const r = (function FY(e, n, t) {
            if (e.isAbsolute) return new yo(n, !0, 0);
            if (!t) return new yo(n, !1, NaN);
            if (null === t.parent) return new yo(t, !0, 0);
            const c = vo(e.commands[0]) ? 0 : 1;
            return (function PY(e, n, t) {
              let c = e,
                s = n,
                o = t;
              for (; o > s; ) {
                if (((o -= s), (c = c.parent), !c)) throw new L(4005, !1);
                s = c.segments.length;
              }
              return new yo(c, !1, s - o);
            })(t, t.segments.length - 1 + c, e.numberOfDoubleDots);
          })(o, s, e),
          i = r.processChildren
            ? J0(r.segmentGroup, r.index, o.commands)
            : dy(r.segmentGroup, r.index, o.commands);
        return l5(s, r.segmentGroup, i, t, c);
      }
      function vo(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function X0(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function l5(e, n, t, c, s) {
        let r,
          o = {};
        c &&
          Object.entries(c).forEach(([a, l]) => {
            o[a] = Array.isArray(l) ? l.map(u => `${u}`) : `${l}`;
          }),
          (r = e === n ? t : uy(e, n, t));
        const i = ry(iy(r));
        return new x3(i, o, s);
      }
      function uy(e, n, t) {
        const c = {};
        return (
          Object.entries(e.children).forEach(([s, o]) => {
            c[s] = o === n ? t : uy(o, n, t);
          }),
          new m2(e.segments, c)
        );
      }
      class fy {
        constructor(n, t, c) {
          if (
            ((this.isAbsolute = n),
            (this.numberOfDoubleDots = t),
            (this.commands = c),
            n && c.length > 0 && vo(c[0]))
          )
            throw new L(4003, !1);
          const s = c.find(X0);
          if (s && s !== Kv(c)) throw new L(4004, !1);
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class yo {
        constructor(n, t, c) {
          (this.segmentGroup = n), (this.processChildren = t), (this.index = c);
        }
      }
      function dy(e, n, t) {
        if (((e ??= new m2([], {})), 0 === e.segments.length && e.hasChildren()))
          return J0(e, n, t);
        const c = (function BY(e, n, t) {
            let c = 0,
              s = n;
            const o = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (c >= t.length) return o;
              const r = e.segments[s],
                i = t[c];
              if (X0(i)) break;
              const a = `${i}`,
                l = c < t.length - 1 ? t[c + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && l && 'object' == typeof l && void 0 === l.outlets) {
                if (!py(a, l, r)) return o;
                c += 2;
              } else {
                if (!py(a, {}, r)) return o;
                c++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: c };
          })(e, n, t),
          s = t.slice(c.commandIndex);
        if (c.match && c.pathIndex < e.segments.length) {
          const o = new m2(e.segments.slice(0, c.pathIndex), {});
          return (
            (o.children[Q] = new m2(e.segments.slice(c.pathIndex), e.children)),
            J0(o, 0, s)
          );
        }
        return c.match && 0 === s.length
          ? new m2(e.segments, {})
          : c.match && !e.hasChildren()
          ? u5(e, n, t)
          : c.match
          ? J0(e, 0, s)
          : u5(e, n, t);
      }
      function J0(e, n, t) {
        if (0 === t.length) return new m2(e.segments, {});
        {
          const c = (function VY(e) {
              return X0(e[0]) ? e[0].outlets : { [Q]: e };
            })(t),
            s = {};
          if (
            Object.keys(c).some(o => o !== Q) &&
            e.children[Q] &&
            1 === e.numberOfChildren &&
            0 === e.children[Q].segments.length
          ) {
            const o = J0(e.children[Q], n, t);
            return new m2(e.segments, o.children);
          }
          return (
            Object.entries(c).forEach(([o, r]) => {
              'string' == typeof r && (r = [r]),
                null !== r && (s[o] = dy(e.children[o], n, r));
            }),
            Object.entries(e.children).forEach(([o, r]) => {
              void 0 === c[o] && (s[o] = r);
            }),
            new m2(e.segments, s)
          );
        }
      }
      function u5(e, n, t) {
        const c = e.segments.slice(0, n);
        let s = 0;
        for (; s < t.length; ) {
          const o = t[s];
          if (X0(o)) {
            const a = jY(o.outlets);
            return new m2(c, a);
          }
          if (0 === s && vo(t[0])) {
            c.push(new Q0(e.segments[n].path, hy(t[0]))), s++;
            continue;
          }
          const r = X0(o) ? o.outlets[Q] : `${o}`,
            i = s < t.length - 1 ? t[s + 1] : null;
          r && i && vo(i)
            ? (c.push(new Q0(r, hy(i))), (s += 2))
            : (c.push(new Q0(r, {})), s++);
        }
        return new m2(c, {});
      }
      function jY(e) {
        const n = {};
        return (
          Object.entries(e).forEach(([t, c]) => {
            'string' == typeof c && (c = [c]),
              null !== c && (n[t] = u5(new m2([], {}), 0, c));
          }),
          n
        );
      }
      function hy(e) {
        const n = {};
        return Object.entries(e).forEach(([t, c]) => (n[t] = `${c}`)), n;
      }
      function py(e, n, t) {
        return e == t.path && je(n, t.parameters);
      }
      const ec = 'imperative';
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
      class Ue {
        constructor(n, t) {
          (this.id = n), (this.url = t);
        }
      }
      class Lo extends Ue {
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
      class Ft extends Ue {
        constructor(n, t, c) {
          super(n, t), (this.urlAfterRedirects = c), (this.type = c2.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var Q1 = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(Q1 || {}),
        zo = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] = 'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(zo || {});
      class A3 extends Ue {
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
      class c4 extends Ue {
        constructor(n, t, c, s) {
          super(n, t),
            (this.reason = c),
            (this.code = s),
            (this.type = c2.NavigationSkipped);
        }
      }
      class f5 extends Ue {
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
      class my extends Ue {
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
      class UY extends Ue {
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
      class HY extends Ue {
        constructor(n, t, c, s, o) {
          super(n, t),
            (this.urlAfterRedirects = c),
            (this.state = s),
            (this.shouldActivate = o),
            (this.type = c2.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class $Y extends Ue {
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
      class GY extends Ue {
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
      class qY {
        constructor(n) {
          (this.route = n), (this.type = c2.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class WY {
        constructor(n) {
          (this.route = n), (this.type = c2.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class YY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class ZY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class QY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class KY {
        constructor(n) {
          (this.snapshot = n), (this.type = c2.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class gy {
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
      class d5 {}
      class _o {
        constructor(n, t) {
          (this.url = n), (this.navigationBehaviorOptions = t);
        }
      }
      function ze(e) {
        return e.outlet || Q;
      }
      function tc(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let n = e.parent; n; n = n.parent) {
          const t = n.routeConfig;
          if (t?._loadedInjector) return t._loadedInjector;
          if (t?._injector) return t._injector;
        }
        return null;
      }
      class cZ {
        get injector() {
          return tc(this.route?.snapshot) ?? this.rootInjector;
        }
        set injector(n) {}
        constructor(n) {
          (this.rootInjector = n),
            (this.outlet = null),
            (this.route = null),
            (this.children = new nc(this.rootInjector)),
            (this.attachRef = null);
        }
      }
      let nc = (() => {
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
            return c || ((c = new cZ(this.rootInjector)), this.contexts.set(t, c)), c;
          }
          getContext(t) {
            return this.contexts.get(t) || null;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(N(U1));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      class Cy {
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
          const t = h5(n, this._root);
          return t ? t.children.map(c => c.value) : [];
        }
        firstChild(n) {
          const t = h5(n, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(n) {
          const t = p5(n, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children.map(s => s.value).filter(s => s !== n);
        }
        pathFromRoot(n) {
          return p5(n, this._root).map(t => t.value);
        }
      }
      function h5(e, n) {
        if (e === n.value) return n;
        for (const t of n.children) {
          const c = h5(e, t);
          if (c) return c;
        }
        return null;
      }
      function p5(e, n) {
        if (e === n.value) return [n];
        for (const t of n.children) {
          const c = p5(e, t);
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
      function s4(e) {
        const n = {};
        return e && e.children.forEach(t => (n[t.value.outlet] = t)), n;
      }
      class My extends Cy {
        constructor(n, t) {
          super(n), (this.snapshot = t), m5(this, n);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function vy(e) {
        const n = (function sZ(e) {
            const o = new wo([], {}, {}, '', {}, Q, e, null, {});
            return new yy('', new _e(o, []));
          })(e),
          t = new n1([new Q0('', {})]),
          c = new n1({}),
          s = new n1({}),
          o = new n1({}),
          r = new n1(''),
          i = new o4(t, c, o, r, s, Q, e, n.root);
        return (i.snapshot = n.root), new My(new _e(i, []), n);
      }
      class o4 {
        constructor(n, t, c, s, o, r, i, a) {
          (this.urlSubject = n),
            (this.paramsSubject = t),
            (this.queryParamsSubject = c),
            (this.fragmentSubject = s),
            (this.dataSubject = o),
            (this.outlet = r),
            (this.component = i),
            (this._futureSnapshot = a),
            (this.title = this.dataSubject?.pipe(s2(l => l[Z0])) ?? W(void 0)),
            (this.url = n),
            (this.params = t),
            (this.queryParams = c),
            (this.fragment = s),
            (this.data = o);
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
          return (this._paramMap ??= this.params.pipe(s2(n => t4(n)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(s2(n => t4(n)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function bo(e, n, t = 'emptyOnly') {
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
          s && zy(s) && (c.resolve[Z0] = s.title),
          c
        );
      }
      class wo {
        get title() {
          return this.data?.[Z0];
        }
        constructor(n, t, c, s, o, r, i, a, l) {
          (this.url = n),
            (this.params = t),
            (this.queryParams = c),
            (this.fragment = s),
            (this.data = o),
            (this.outlet = r),
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
          return (this._paramMap ??= t4(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (this._queryParamMap ??= t4(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(c => c.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class yy extends Cy {
        constructor(n, t) {
          super(t), (this.url = n), m5(this, t);
        }
        toString() {
          return Ly(this._root);
        }
      }
      function m5(e, n) {
        (n.value._routerState = e), n.children.forEach(t => m5(e, t));
      }
      function Ly(e) {
        const n = e.children.length > 0 ? ` { ${e.children.map(Ly).join(', ')} } ` : '';
        return `${e.value}${n}`;
      }
      function g5(e) {
        if (e.snapshot) {
          const n = e.snapshot,
            t = e._futureSnapshot;
          (e.snapshot = t),
            je(n.queryParams, t.queryParams) || e.queryParamsSubject.next(t.queryParams),
            n.fragment !== t.fragment && e.fragmentSubject.next(t.fragment),
            je(n.params, t.params) || e.paramsSubject.next(t.params),
            (function gY(e, n) {
              if (e.length !== n.length) return !1;
              for (let t = 0; t < e.length; ++t) if (!je(e[t], n[t])) return !1;
              return !0;
            })(n.url, t.url) || e.urlSubject.next(t.url),
            je(n.data, t.data) || e.dataSubject.next(t.data);
        } else
          (e.snapshot = e._futureSnapshot), e.dataSubject.next(e._futureSnapshot.data);
      }
      function C5(e, n) {
        const t =
          je(e.params, n.params) &&
          (function yY(e, n) {
            return S3(e, n) && e.every((t, c) => je(t.parameters, n[c].parameters));
          })(e.url, n.url);
        return t && !(!e.parent != !n.parent) && (!e.parent || C5(e.parent, n.parent));
      }
      function zy(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let cc = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = Q),
              (this.activateEvents = new Z()),
              (this.deactivateEvents = new Z()),
              (this.attachEvents = new Z()),
              (this.detachEvents = new Z()),
              (this.parentContexts = y(nc)),
              (this.location = y(me)),
              (this.changeDetector = y(V0)),
              (this.inputBinder = y(Do, { optional: !0 })),
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
              r = t.snapshot.component,
              i = this.parentContexts.getOrCreateContext(this.name).children,
              a = new M5(t, i, s.injector);
            (this.activated = s.createComponent(r, {
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
          static #t = (this.ɵdir = P({
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
            features: [g1],
          }));
        }
        return e;
      })();
      class M5 {
        __ngOutletInjector(n) {
          return new M5(this.route, this.childContexts, n);
        }
        constructor(n, t, c) {
          (this.route = n), (this.childContexts = t), (this.parent = c);
        }
        get(n, t) {
          return n === o4
            ? this.route
            : n === nc
            ? this.childContexts
            : this.parent.get(n, t);
        }
      }
      const Do = new _('');
      function sc(e, n, t) {
        if (t && e.shouldReuseRoute(n.value, t.value.snapshot)) {
          const c = t.value;
          c._futureSnapshot = n.value;
          const s = (function rZ(e, n, t) {
            return n.children.map(c => {
              for (const s of t.children)
                if (e.shouldReuseRoute(c.value, s.value.snapshot)) return sc(e, c, s);
              return sc(e, c);
            });
          })(e, n, t);
          return new _e(c, s);
        }
        {
          if (e.shouldAttach(n.value)) {
            const o = e.retrieve(n.value);
            if (null !== o) {
              const r = o.route;
              return (
                (r.value._futureSnapshot = n.value),
                (r.children = n.children.map(i => sc(e, i))),
                r
              );
            }
          }
          const c = (function iZ(e) {
              return new o4(
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
            s = n.children.map(o => sc(e, o));
          return new _e(c, s);
        }
      }
      class v5 {
        constructor(n, t) {
          (this.redirectTo = n), (this.navigationBehaviorOptions = t);
        }
      }
      const by = 'ngNavigationCancelingError';
      function Eo(e, n) {
        const { redirectTo: t, navigationBehaviorOptions: c } = I3(n)
            ? { redirectTo: n, navigationBehaviorOptions: void 0 }
            : n,
          s = wy(!1, Q1.Redirect);
        return (s.url = t), (s.navigationBehaviorOptions = c), s;
      }
      function wy(e, n) {
        const t = new Error(`NavigationCancelingError: ${e || ''}`);
        return (t[by] = !0), (t.cancellationCode = n), t;
      }
      function Dy(e) {
        return !!e && e[by];
      }
      class uZ {
        constructor(n, t, c, s, o) {
          (this.routeReuseStrategy = n),
            (this.futureState = t),
            (this.currState = c),
            (this.forwardEvent = s),
            (this.inputBindingEnabled = o);
        }
        activate(n) {
          const t = this.futureState._root,
            c = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, c, n),
            g5(this.futureState.root),
            this.activateChildRoutes(t, c, n);
        }
        deactivateChildRoutes(n, t, c) {
          const s = s4(t);
          n.children.forEach(o => {
            const r = o.value.outlet;
            this.deactivateRoutes(o, s[r], c), delete s[r];
          }),
            Object.values(s).forEach(o => {
              this.deactivateRouteAndItsChildren(o, c);
            });
        }
        deactivateRoutes(n, t, c) {
          const s = n.value,
            o = t ? t.value : null;
          if (s === o)
            if (s.component) {
              const r = c.getContext(s.outlet);
              r && this.deactivateChildRoutes(n, t, r.children);
            } else this.deactivateChildRoutes(n, t, c);
          else o && this.deactivateRouteAndItsChildren(t, c);
        }
        deactivateRouteAndItsChildren(n, t) {
          n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot)
            ? this.detachAndStoreRouteSubtree(n, t)
            : this.deactivateRouteAndOutlet(n, t);
        }
        detachAndStoreRouteSubtree(n, t) {
          const c = t.getContext(n.value.outlet),
            s = c && n.value.component ? c.children : t,
            o = s4(n);
          for (const r of Object.values(o)) this.deactivateRouteAndItsChildren(r, s);
          if (c && c.outlet) {
            const r = c.outlet.detach(),
              i = c.children.onOutletDeactivated();
            this.routeReuseStrategy.store(n.value.snapshot, {
              componentRef: r,
              route: n,
              contexts: i,
            });
          }
        }
        deactivateRouteAndOutlet(n, t) {
          const c = t.getContext(n.value.outlet),
            s = c && n.value.component ? c.children : t,
            o = s4(n);
          for (const r of Object.values(o)) this.deactivateRouteAndItsChildren(r, s);
          c &&
            (c.outlet && (c.outlet.deactivate(), c.children.onOutletDeactivated()),
            (c.attachRef = null),
            (c.route = null));
        }
        activateChildRoutes(n, t, c) {
          const s = s4(t);
          n.children.forEach(o => {
            this.activateRoutes(o, s[o.value.outlet], c),
              this.forwardEvent(new KY(o.value.snapshot));
          }),
            n.children.length && this.forwardEvent(new ZY(n.value.snapshot));
        }
        activateRoutes(n, t, c) {
          const s = n.value,
            o = t ? t.value : null;
          if ((g5(s), s === o))
            if (s.component) {
              const r = c.getOrCreateContext(s.outlet);
              this.activateChildRoutes(n, t, r.children);
            } else this.activateChildRoutes(n, t, c);
          else if (s.component) {
            const r = c.getOrCreateContext(s.outlet);
            if (this.routeReuseStrategy.shouldAttach(s.snapshot)) {
              const i = this.routeReuseStrategy.retrieve(s.snapshot);
              this.routeReuseStrategy.store(s.snapshot, null),
                r.children.onOutletReAttached(i.contexts),
                (r.attachRef = i.componentRef),
                (r.route = i.route.value),
                r.outlet && r.outlet.attach(i.componentRef, i.route.value),
                g5(i.route.value),
                this.activateChildRoutes(n, null, r.children);
            } else
              (r.attachRef = null),
                (r.route = s),
                r.outlet && r.outlet.activateWith(s, r.injector),
                this.activateChildRoutes(n, null, r.children);
          } else this.activateChildRoutes(n, null, c);
        }
      }
      class Ey {
        constructor(n) {
          (this.path = n), (this.route = this.path[this.path.length - 1]);
        }
      }
      class No {
        constructor(n, t) {
          (this.component = n), (this.route = t);
        }
      }
      function fZ(e, n, t) {
        const c = e._root;
        return oc(c, n ? n._root : null, t, [c.value]);
      }
      function r4(e, n) {
        const t = Symbol(),
          c = n.get(e, t);
        return c === t
          ? 'function' != typeof e ||
            (function tT(e) {
              return null !== Kc(e);
            })(e)
            ? n.get(e)
            : e
          : c;
      }
      function oc(e, n, t, c, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const o = s4(n);
        return (
          e.children.forEach(r => {
            (function hZ(
              e,
              n,
              t,
              c,
              s = { canDeactivateChecks: [], canActivateChecks: [] },
            ) {
              const o = e.value,
                r = n ? n.value : null,
                i = t ? t.getContext(e.value.outlet) : null;
              if (r && o.routeConfig === r.routeConfig) {
                const a = (function pZ(e, n, t) {
                  if ('function' == typeof t) return t(e, n);
                  switch (t) {
                    case 'pathParamsChange':
                      return !S3(e.url, n.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !S3(e.url, n.url) || !je(e.queryParams, n.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !C5(e, n) || !je(e.queryParams, n.queryParams);
                    default:
                      return !C5(e, n);
                  }
                })(r, o, o.routeConfig.runGuardsAndResolvers);
                a
                  ? s.canActivateChecks.push(new Ey(c))
                  : ((o.data = r.data), (o._resolvedData = r._resolvedData)),
                  oc(e, n, o.component ? (i ? i.children : null) : t, c, s),
                  a &&
                    i &&
                    i.outlet &&
                    i.outlet.isActivated &&
                    s.canDeactivateChecks.push(new No(i.outlet.component, r));
              } else
                r && rc(n, i, s),
                  s.canActivateChecks.push(new Ey(c)),
                  oc(e, null, o.component ? (i ? i.children : null) : t, c, s);
            })(r, o[r.value.outlet], t, c.concat([r.value]), s),
              delete o[r.value.outlet];
          }),
          Object.entries(o).forEach(([r, i]) => rc(i, t.getContext(r), s)),
          s
        );
      }
      function rc(e, n, t) {
        const c = s4(e),
          s = e.value;
        Object.entries(c).forEach(([o, r]) => {
          rc(r, s.component ? (n ? n.children.getContext(o) : null) : n, t);
        }),
          t.canDeactivateChecks.push(
            new No(
              s.component && n && n.outlet && n.outlet.isActivated
                ? n.outlet.component
                : null,
              s,
            ),
          );
      }
      function ic(e) {
        return 'function' == typeof e;
      }
      function Ny(e) {
        return e instanceof ao || 'EmptyError' === e?.name;
      }
      const xo = Symbol('INITIAL_VALUE');
      function i4() {
        return ut(e =>
          t5(e.map(n => n.pipe(E3(1), qv(xo)))).pipe(
            s2(n => {
              for (const t of n)
                if (!0 !== t) {
                  if (t === xo) return xo;
                  if (!1 === t || LZ(t)) return t;
                }
              return !0;
            }),
            Rt(n => n !== xo),
            E3(1),
          ),
        );
      }
      function LZ(e) {
        return I3(e) || e instanceof v5;
      }
      function xy(e) {
        return (function qI(...e) {
          return su(e);
        })(
          D1(n => {
            if ('boolean' != typeof n) throw Eo(0, n);
          }),
          s2(n => !0 === n),
        );
      }
      class y5 {
        constructor(n) {
          this.segmentGroup = n || null;
        }
      }
      class So extends Error {
        constructor(n) {
          super(), (this.urlTree = n);
        }
      }
      function a4(e) {
        return uo(new y5(e));
      }
      class kZ {
        constructor(n, t) {
          (this.urlSerializer = n), (this.urlTree = t);
        }
        lineralizeSegments(n, t) {
          let c = [],
            s = t.root;
          for (;;) {
            if (((c = c.concat(s.segments)), 0 === s.numberOfChildren)) return W(c);
            if (s.numberOfChildren > 1 || !s.children[Q]) return uo(new L(4e3, !1));
            s = s.children[Q];
          }
        }
        applyRedirectCommands(n, t, c, s, o) {
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
              C = yt(o, () =>
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
            if (C instanceof x3) throw new So(C);
            t = C;
          }
          const r = this.applyRedirectCreateUrlTree(t, this.urlSerializer.parse(t), n, c);
          if ('/' === t[0]) throw new So(r);
          return r;
        }
        applyRedirectCreateUrlTree(n, t, c, s) {
          const o = this.createSegmentGroup(n, t.root, c, s);
          return new x3(
            o,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment,
          );
        }
        createQueryParams(n, t) {
          const c = {};
          return (
            Object.entries(n).forEach(([s, o]) => {
              if ('string' == typeof o && ':' === o[0]) {
                const i = o.substring(1);
                c[s] = t[i];
              } else c[s] = o;
            }),
            c
          );
        }
        createSegmentGroup(n, t, c, s) {
          const o = this.createSegments(n, t.segments, c, s);
          let r = {};
          return (
            Object.entries(t.children).forEach(([i, a]) => {
              r[i] = this.createSegmentGroup(n, a, c, s);
            }),
            new m2(o, r)
          );
        }
        createSegments(n, t, c, s) {
          return t.map(o =>
            ':' === o.path[0] ? this.findPosParam(n, o, s) : this.findOrReturn(o, c),
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
      const L5 = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function RZ(e, n, t, c, s) {
        const o = Sy(e, n, t);
        return o.matched
          ? ((c = (function XY(e, n) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = _8(e.providers, n, `Route: ${e.path}`)),
                e._injector ?? n
              );
            })(n, c)),
            (function IZ(e, n, t, c) {
              const s = n.canMatch;
              return s && 0 !== s.length
                ? W(
                    s.map(r => {
                      const i = r4(r, e);
                      return Ot(
                        (function yZ(e) {
                          return e && ic(e.canMatch);
                        })(i)
                          ? i.canMatch(n, t)
                          : yt(e, () => i(n, t)),
                      );
                    }),
                  ).pipe(i4(), xy())
                : W(!0);
            })(c, n, t).pipe(s2(r => (!0 === r ? o : { ...L5 }))))
          : W(o);
      }
      function Sy(e, n, t) {
        if ('**' === n.path)
          return (function OZ(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? Kv(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(t);
        if ('' === n.path)
          return 'full' === n.pathMatch && (e.hasChildren() || t.length > 0)
            ? { ...L5 }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: t,
                parameters: {},
                positionalParamSegments: {},
              };
        const s = (n.matcher || mY)(t, e, n);
        if (!s) return { ...L5 };
        const o = {};
        Object.entries(s.posParams ?? {}).forEach(([i, a]) => {
          o[i] = a.path;
        });
        const r =
          s.consumed.length > 0
            ? { ...o, ...s.consumed[s.consumed.length - 1].parameters }
            : o;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          remainingSegments: t.slice(s.consumed.length),
          parameters: r,
          positionalParamSegments: s.posParams ?? {},
        };
      }
      function Iy(e, n, t, c) {
        return t.length > 0 &&
          (function VZ(e, n, t) {
            return t.some(c => Io(e, n, c) && ze(c) !== Q);
          })(e, t, c)
          ? { segmentGroup: new m2(n, PZ(c, new m2(t, e.children))), slicedSegments: [] }
          : 0 === t.length &&
            (function BZ(e, n, t) {
              return t.some(c => Io(e, n, c));
            })(e, t, c)
          ? {
              segmentGroup: new m2(e.segments, FZ(e, t, c, e.children)),
              slicedSegments: t,
            }
          : { segmentGroup: new m2(e.segments, e.children), slicedSegments: t };
      }
      function FZ(e, n, t, c) {
        const s = {};
        for (const o of t)
          if (Io(e, n, o) && !c[ze(o)]) {
            const r = new m2([], {});
            s[ze(o)] = r;
          }
        return { ...c, ...s };
      }
      function PZ(e, n) {
        const t = {};
        t[Q] = n;
        for (const c of e)
          if ('' === c.path && ze(c) !== Q) {
            const s = new m2([], {});
            t[ze(c)] = s;
          }
        return t;
      }
      function Io(e, n, t) {
        return (
          (!(e.hasChildren() || n.length > 0) || 'full' !== t.pathMatch) && '' === t.path
        );
      }
      class UZ {}
      class GZ {
        constructor(n, t, c, s, o, r, i) {
          (this.injector = n),
            (this.configLoader = t),
            (this.rootComponentType = c),
            (this.config = s),
            (this.urlTree = o),
            (this.paramsInheritanceStrategy = r),
            (this.urlSerializer = i),
            (this.applyRedirects = new kZ(this.urlSerializer, this.urlTree)),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(n) {
          return new L(4002, `'${n.segmentGroup}'`);
        }
        recognize() {
          const n = Iy(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.match(n).pipe(
            s2(({ children: t, rootSnapshot: c }) => {
              const s = new _e(c, t),
                o = new yy('', s),
                r = (function RY(e, n, t = null, c = null) {
                  return ly(ay(e), n, t, c);
                })(c, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (r.queryParams = this.urlTree.queryParams),
                (o.url = this.urlSerializer.serialize(r)),
                { state: o, tree: r }
              );
            }),
          );
        }
        match(n) {
          const t = new wo(
            [],
            Object.freeze({}),
            Object.freeze({ ...this.urlTree.queryParams }),
            this.urlTree.fragment,
            Object.freeze({}),
            Q,
            this.rootComponentType,
            null,
            {},
          );
          return this.processSegmentGroup(this.injector, this.config, n, Q, t).pipe(
            s2(c => ({ children: c, rootSnapshot: t })),
            e4(c => {
              if (c instanceof So)
                return (this.urlTree = c.urlTree), this.match(c.urlTree.root);
              throw c instanceof y5 ? this.noMatchError(c) : c;
            }),
          );
        }
        processSegmentGroup(n, t, c, s, o) {
          return 0 === c.segments.length && c.hasChildren()
            ? this.processChildren(n, t, c, o)
            : this.processSegment(n, t, c, c.segments, s, !0, o).pipe(
                s2(r => (r instanceof _e ? [r] : [])),
              );
        }
        processChildren(n, t, c, s) {
          const o = [];
          for (const r of Object.keys(c.children))
            'primary' === r ? o.unshift(r) : o.push(r);
          return f1(o).pipe(
            ho(r => {
              const i = c.children[r],
                a = (function nZ(e, n) {
                  const t = e.filter(c => ze(c) === n);
                  return t.push(...e.filter(c => ze(c) !== n)), t;
                })(t, r);
              return this.processSegmentGroup(n, a, i, r, s);
            }),
            Yv((r, i) => (r.push(...i), r)),
            fo(null),
            (function dY(e, n) {
              const t = arguments.length >= 2;
              return c =>
                c.pipe(
                  e ? Rt((s, o) => e(s, o, c)) : Ze,
                  s5(1),
                  t ? fo(n) : Wv(() => new ao()),
                );
            })(),
            w1(r => {
              if (null === r) return a4(c);
              const i = Ay(r);
              return (
                (function qZ(e) {
                  e.sort((n, t) =>
                    n.value.outlet === Q
                      ? -1
                      : t.value.outlet === Q
                      ? 1
                      : n.value.outlet.localeCompare(t.value.outlet),
                  );
                })(i),
                W(i)
              );
            }),
          );
        }
        processSegment(n, t, c, s, o, r, i) {
          return f1(t).pipe(
            ho(a =>
              this.processSegmentAgainstRoute(a._injector ?? n, t, a, c, s, o, r, i).pipe(
                e4(l => {
                  if (l instanceof y5) return W(null);
                  throw l;
                }),
              ),
            ),
            N3(a => !!a),
            e4(a => {
              if (Ny(a))
                return (function jZ(e, n, t) {
                  return 0 === n.length && !e.children[t];
                })(c, s, o)
                  ? W(new UZ())
                  : a4(c);
              throw a;
            }),
          );
        }
        processSegmentAgainstRoute(n, t, c, s, o, r, i, a) {
          return ze(c) === r || (r !== Q && Io(s, o, c))
            ? void 0 === c.redirectTo
              ? this.matchSegmentAgainstRoute(n, s, c, o, r, a)
              : this.allowRedirects && i
              ? this.expandSegmentAgainstRouteUsingRedirect(n, s, t, c, o, r, a)
              : a4(s)
            : a4(s);
        }
        expandSegmentAgainstRouteUsingRedirect(n, t, c, s, o, r, i) {
          const {
            matched: a,
            parameters: l,
            consumedSegments: u,
            positionalParamSegments: f,
            remainingSegments: d,
          } = Sy(t, s, o);
          if (!a) return a4(t);
          'string' == typeof s.redirectTo &&
            '/' === s.redirectTo[0] &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 && (this.allowRedirects = !1));
          const h = new wo(
              o,
              l,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              Ty(s),
              ze(s),
              s.component ?? s._loadedComponent ?? null,
              s,
              ky(s),
            ),
            p = bo(h, i, this.paramsInheritanceStrategy);
          (h.params = Object.freeze(p.params)), (h.data = Object.freeze(p.data));
          const m = this.applyRedirects.applyRedirectCommands(u, s.redirectTo, f, h, n);
          return this.applyRedirects
            .lineralizeSegments(s, m)
            .pipe(w1(C => this.processSegment(n, c, t, C.concat(d), r, !1, i)));
        }
        matchSegmentAgainstRoute(n, t, c, s, o, r) {
          const i = RZ(t, c, s, n);
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
                          p = new wo(
                            d,
                            f,
                            Object.freeze({ ...this.urlTree.queryParams }),
                            this.urlTree.fragment,
                            Ty(c),
                            ze(c),
                            c.component ?? c._loadedComponent ?? null,
                            c,
                            ky(c),
                          ),
                          m = bo(p, r, this.paramsInheritanceStrategy);
                        (p.params = Object.freeze(m.params)),
                          (p.data = Object.freeze(m.data));
                        const { segmentGroup: C, slicedSegments: v } = Iy(t, d, h, l);
                        if (0 === v.length && C.hasChildren())
                          return this.processChildren(u, l, C, p).pipe(
                            s2(E => new _e(p, E)),
                          );
                        if (0 === l.length && 0 === v.length) return W(new _e(p, []));
                        const g = ze(c) === o;
                        return this.processSegment(u, l, C, v, g ? Q : o, !0, p).pipe(
                          s2(E => new _e(p, E instanceof _e ? [E] : [])),
                        );
                      }),
                    )
                  : a4(t),
              ),
            )
          );
        }
        getChildConfig(n, t, c) {
          return t.children
            ? W({ routes: t.children, injector: n })
            : t.loadChildren
            ? void 0 !== t._loadedRoutes
              ? W({ routes: t._loadedRoutes, injector: t._loadedInjector })
              : (function SZ(e, n, t, c) {
                  const s = n.canLoad;
                  return void 0 === s || 0 === s.length
                    ? W(!0)
                    : W(
                        s.map(r => {
                          const i = r4(r, e);
                          return Ot(
                            (function gZ(e) {
                              return e && ic(e.canLoad);
                            })(i)
                              ? i.canLoad(n, t)
                              : yt(e, () => i(n, t)),
                          );
                        }),
                      ).pipe(i4(), xy());
                })(n, t, c).pipe(
                  w1(s =>
                    s
                      ? this.configLoader.loadChildren(n, t).pipe(
                          D1(o => {
                            (t._loadedRoutes = o.routes),
                              (t._loadedInjector = o.injector);
                          }),
                        )
                      : (function TZ() {
                          return uo(wy(!1, Q1.GuardRejected));
                        })(),
                  ),
                )
            : W({ routes: [], injector: n });
        }
      }
      function WZ(e) {
        const n = e.value.routeConfig;
        return n && '' === n.path;
      }
      function Ay(e) {
        const n = [],
          t = new Set();
        for (const c of e) {
          if (!WZ(c)) {
            n.push(c);
            continue;
          }
          const s = n.find(o => c.value.routeConfig === o.value.routeConfig);
          void 0 !== s ? (s.children.push(...c.children), t.add(s)) : n.push(c);
        }
        for (const c of t) {
          const s = Ay(c.children);
          n.push(new _e(c.value, s));
        }
        return n.filter(c => !t.has(c));
      }
      function Ty(e) {
        return e.data || {};
      }
      function ky(e) {
        return e.resolve || {};
      }
      function Ry(e) {
        const n = e.children.map(t => Ry(t)).flat();
        return [e, ...n];
      }
      function z5(e) {
        return ut(n => {
          const t = e(n);
          return t ? f1(t).pipe(s2(() => n)) : W(n);
        });
      }
      let Oy = (() => {
          class e {
            buildTitle(t) {
              let c,
                s = t.root;
              for (; void 0 !== s; )
                (c = this.getResolvedTitleForRoute(s) ?? c),
                  (s = s.children.find(o => o.outlet === Q));
              return c;
            }
            getResolvedTitleForRoute(t) {
              return t.data[Z0];
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(JZ),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        JZ = (() => {
          class e extends Oy {
            constructor(t) {
              super(), (this.title = t);
            }
            updateTitle(t) {
              const c = this.buildTitle(t);
              void 0 !== c && this.title.setTitle(c);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(N(dW));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const ac = new _('', { providedIn: 'root', factory: () => ({}) });
      let Fy = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = $({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [q],
            decls: 1,
            vars: 0,
            template: function (c, s) {
              1 & c && d2(0, 'router-outlet');
            },
            dependencies: [cc],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function _5(e) {
        const n = e.children && e.children.map(_5),
          t = n ? { ...e, children: n } : { ...e };
        return (
          !t.component &&
            !t.loadComponent &&
            (n || t.loadChildren) &&
            t.outlet &&
            t.outlet !== Q &&
            (t.component = Fy),
          t
        );
      }
      const Ao = new _('');
      let Py = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = y(SH));
          }
          loadComponent(t) {
            if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
            if (t._loadedComponent) return W(t._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(t);
            const c = Ot(t.loadComponent()).pipe(
                s2(Vy),
                D1(o => {
                  this.onLoadEndListener && this.onLoadEndListener(t),
                    (t._loadedComponent = o);
                }),
                o5(() => {
                  this.componentLoaders.delete(t);
                }),
              ),
              s = new Gv(c, () => new p1()).pipe(c5());
            return this.componentLoaders.set(t, s), s;
          }
          loadChildren(t, c) {
            if (this.childrenLoaders.get(c)) return this.childrenLoaders.get(c);
            if (c._loadedRoutes)
              return W({ routes: c._loadedRoutes, injector: c._loadedInjector });
            this.onLoadStartListener && this.onLoadStartListener(c);
            const o = (function eQ(e, n, t, c) {
                return Ot(e.loadChildren()).pipe(
                  s2(Vy),
                  w1(s =>
                    s instanceof nm || Array.isArray(s)
                      ? W(s)
                      : f1(n.compileModuleAsync(s)),
                  ),
                  s2(s => {
                    c && c(e);
                    let o,
                      r,
                      i = !1;
                    return (
                      Array.isArray(s)
                        ? ((r = s), !0)
                        : ((o = s.create(t).injector),
                          (r = o.get(Ao, [], { optional: !0, self: !0 }).flat())),
                      { routes: r.map(_5), injector: o }
                    );
                  }),
                );
              })(c, this.compiler, t, this.onLoadEndListener).pipe(
                o5(() => {
                  this.childrenLoaders.delete(c);
                }),
              ),
              r = new Gv(o, () => new p1()).pipe(c5());
            return this.childrenLoaders.set(c, r), r;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      function Vy(e) {
        return (function tQ(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let b5 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(nQ),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        nQ = (() => {
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
      const By = new _(''),
        Uy = new _('');
      let To = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new p1()),
              (this.transitionAbortSubject = new p1()),
              (this.configLoader = y(Py)),
              (this.environmentInjector = y(U1)),
              (this.urlSerializer = y(n4)),
              (this.rootContexts = y(nc)),
              (this.location = y(H0)),
              (this.inputBindingEnabled = null !== y(Do, { optional: !0 })),
              (this.titleStrategy = y(Oy)),
              (this.options = y(ac, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || 'emptyOnly'),
              (this.urlHandlingStrategy = y(b5)),
              (this.createViewTransition = y(By, { optional: !0 })),
              (this.navigationErrorHandler = y(Uy, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => W(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = s => this.events.next(new WY(s))),
              (this.configLoader.onLoadStartListener = s => this.events.next(new qY(s)));
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
                source: ec,
                restoredState: null,
                currentSnapshot: s.snapshot,
                targetSnapshot: null,
                currentRouterState: s,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              this.transitions.pipe(
                Rt(o => 0 !== o.id),
                s2(o => ({
                  ...o,
                  extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
                })),
                ut(o => {
                  let r = !1,
                    i = !1;
                  return W(o).pipe(
                    ut(a => {
                      if (this.navigationId > o.id)
                        return (
                          this.cancelNavigationTransition(
                            o,
                            '',
                            Q1.SupersededByNewNavigation,
                          ),
                          Be
                        );
                      (this.currentTransition = o),
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
                            new c4(
                              a.id,
                              this.urlSerializer.serialize(a.rawUrl),
                              f,
                              zo.IgnoredSameUrlNavigation,
                            ),
                          ),
                          a.resolve(!1),
                          Be
                        );
                      }
                      if (this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))
                        return W(a).pipe(
                          ut(f => {
                            const d = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new Lo(
                                  f.id,
                                  this.urlSerializer.serialize(f.extractedUrl),
                                  f.source,
                                  f.restoredState,
                                ),
                              ),
                              d !== this.transitions?.getValue() ? Be : Promise.resolve(f)
                            );
                          }),
                          (function YZ(e, n, t, c, s, o) {
                            return w1(r =>
                              (function HZ(e, n, t, c, s, o, r = 'emptyOnly') {
                                return new GZ(e, n, t, c, s, r, o).recognize();
                              })(e, n, t, c, r.extractedUrl, s, o).pipe(
                                s2(({ state: i, tree: a }) => ({
                                  ...r,
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
                          D1(f => {
                            (o.targetSnapshot = f.targetSnapshot),
                              (o.urlAfterRedirects = f.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: f.urlAfterRedirects,
                              });
                            const d = new my(
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
                          C = new Lo(f, this.urlSerializer.serialize(d), h, p);
                        this.events.next(C);
                        const v = vy(this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = o =
                            {
                              ...a,
                              targetSnapshot: v,
                              urlAfterRedirects: d,
                              extras: { ...m, skipLocationChange: !1, replaceUrl: !1 },
                            }),
                          (this.currentNavigation.finalUrl = d),
                          W(o)
                        );
                      }
                      {
                        const f = '';
                        return (
                          this.events.next(
                            new c4(
                              a.id,
                              this.urlSerializer.serialize(a.extractedUrl),
                              f,
                              zo.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          a.resolve(!1),
                          Be
                        );
                      }
                    }),
                    D1(a => {
                      const l = new UY(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        this.urlSerializer.serialize(a.urlAfterRedirects),
                        a.targetSnapshot,
                      );
                      this.events.next(l);
                    }),
                    s2(
                      a => (
                        (this.currentTransition = o =
                          {
                            ...a,
                            guards: fZ(
                              a.targetSnapshot,
                              a.currentSnapshot,
                              this.rootContexts,
                            ),
                          }),
                        o
                      ),
                    ),
                    (function zZ(e, n) {
                      return w1(t => {
                        const {
                          targetSnapshot: c,
                          currentSnapshot: s,
                          guards: { canActivateChecks: o, canDeactivateChecks: r },
                        } = t;
                        return 0 === r.length && 0 === o.length
                          ? W({ ...t, guardsResult: !0 })
                          : (function _Z(e, n, t, c) {
                              return f1(e).pipe(
                                w1(s =>
                                  (function xZ(e, n, t, c, s) {
                                    const o =
                                      n && n.routeConfig
                                        ? n.routeConfig.canDeactivate
                                        : null;
                                    return o && 0 !== o.length
                                      ? W(
                                          o.map(i => {
                                            const a = tc(n) ?? s,
                                              l = r4(i, a);
                                            return Ot(
                                              (function vZ(e) {
                                                return e && ic(e.canDeactivate);
                                              })(l)
                                                ? l.canDeactivate(e, n, t, c)
                                                : yt(a, () => l(e, n, t, c)),
                                            ).pipe(N3());
                                          }),
                                        ).pipe(i4())
                                      : W(!0);
                                  })(s.component, s.route, t, n, c),
                                ),
                                N3(s => !0 !== s, !0),
                              );
                            })(r, c, s, e).pipe(
                              w1(i =>
                                i &&
                                (function mZ(e) {
                                  return 'boolean' == typeof e;
                                })(i)
                                  ? (function bZ(e, n, t, c) {
                                      return f1(n).pipe(
                                        ho(s =>
                                          lo(
                                            (function DZ(e, n) {
                                              return (
                                                null !== e && n && n(new YY(e)), W(!0)
                                              );
                                            })(s.route.parent, c),
                                            (function wZ(e, n) {
                                              return (
                                                null !== e && n && n(new QY(e)), W(!0)
                                              );
                                            })(s.route, c),
                                            (function NZ(e, n, t) {
                                              const c = n[n.length - 1],
                                                o = n
                                                  .slice(0, n.length - 1)
                                                  .reverse()
                                                  .map(r =>
                                                    (function dZ(e) {
                                                      const n = e.routeConfig
                                                        ? e.routeConfig.canActivateChild
                                                        : null;
                                                      return n && 0 !== n.length
                                                        ? { node: e, guards: n }
                                                        : null;
                                                    })(r),
                                                  )
                                                  .filter(r => null !== r)
                                                  .map(r =>
                                                    $v(() =>
                                                      W(
                                                        r.guards.map(a => {
                                                          const l = tc(r.node) ?? t,
                                                            u = r4(a, l);
                                                          return Ot(
                                                            (function MZ(e) {
                                                              return (
                                                                e &&
                                                                ic(e.canActivateChild)
                                                              );
                                                            })(u)
                                                              ? u.canActivateChild(c, e)
                                                              : yt(l, () => u(c, e)),
                                                          ).pipe(N3());
                                                        }),
                                                      ).pipe(i4()),
                                                    ),
                                                  );
                                              return W(o).pipe(i4());
                                            })(e, s.path, t),
                                            (function EZ(e, n, t) {
                                              const c = n.routeConfig
                                                ? n.routeConfig.canActivate
                                                : null;
                                              if (!c || 0 === c.length) return W(!0);
                                              const s = c.map(o =>
                                                $v(() => {
                                                  const r = tc(n) ?? t,
                                                    i = r4(o, r);
                                                  return Ot(
                                                    (function CZ(e) {
                                                      return e && ic(e.canActivate);
                                                    })(i)
                                                      ? i.canActivate(n, e)
                                                      : yt(r, () => i(n, e)),
                                                  ).pipe(N3());
                                                }),
                                              );
                                              return W(s).pipe(i4());
                                            })(e, s.route, t),
                                          ),
                                        ),
                                        N3(s => !0 !== s, !0),
                                      );
                                    })(c, o, e, n)
                                  : W(i),
                              ),
                              s2(i => ({ ...t, guardsResult: i })),
                            );
                      });
                    })(this.environmentInjector, a => this.events.next(a)),
                    D1(a => {
                      if (
                        ((o.guardsResult = a.guardsResult),
                        a.guardsResult && 'boolean' != typeof a.guardsResult)
                      )
                        throw Eo(0, a.guardsResult);
                      const l = new HY(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        this.urlSerializer.serialize(a.urlAfterRedirects),
                        a.targetSnapshot,
                        !!a.guardsResult,
                      );
                      this.events.next(l);
                    }),
                    Rt(
                      a =>
                        !!a.guardsResult ||
                        (this.cancelNavigationTransition(a, '', Q1.GuardRejected), !1),
                    ),
                    z5(a => {
                      if (a.guards.canActivateChecks.length)
                        return W(a).pipe(
                          D1(l => {
                            const u = new $Y(
                              l.id,
                              this.urlSerializer.serialize(l.extractedUrl),
                              this.urlSerializer.serialize(l.urlAfterRedirects),
                              l.targetSnapshot,
                            );
                            this.events.next(u);
                          }),
                          ut(l => {
                            let u = !1;
                            return W(l).pipe(
                              (function ZZ(e, n) {
                                return w1(t => {
                                  const {
                                    targetSnapshot: c,
                                    guards: { canActivateChecks: s },
                                  } = t;
                                  if (!s.length) return W(t);
                                  const o = new Set(s.map(a => a.route)),
                                    r = new Set();
                                  for (const a of o)
                                    if (!r.has(a)) for (const l of Ry(a)) r.add(l);
                                  let i = 0;
                                  return f1(r).pipe(
                                    ho(a =>
                                      o.has(a)
                                        ? (function QZ(e, n, t, c) {
                                            const s = e.routeConfig,
                                              o = e._resolve;
                                            return (
                                              void 0 !== s?.title &&
                                                !zy(s) &&
                                                (o[Z0] = s.title),
                                              (function KZ(e, n, t, c) {
                                                const s = r5(e);
                                                if (0 === s.length) return W({});
                                                const o = {};
                                                return f1(s).pipe(
                                                  w1(r =>
                                                    (function XZ(e, n, t, c) {
                                                      const s = tc(n) ?? c,
                                                        o = r4(e, s);
                                                      return Ot(
                                                        o.resolve
                                                          ? o.resolve(n, t)
                                                          : yt(s, () => o(n, t)),
                                                      );
                                                    })(e[r], n, t, c).pipe(
                                                      N3(),
                                                      D1(i => {
                                                        if (i instanceof v5)
                                                          throw Eo(new mo(), i);
                                                        o[r] = i;
                                                      }),
                                                    ),
                                                  ),
                                                  s5(1),
                                                  (function hY(e) {
                                                    return s2(() => e);
                                                  })(o),
                                                  e4(r => (Ny(r) ? Be : uo(r))),
                                                );
                                              })(o, e, n, c).pipe(
                                                s2(
                                                  r => (
                                                    (e._resolvedData = r),
                                                    (e.data = bo(e, e.parent, t).resolve),
                                                    null
                                                  ),
                                                ),
                                              )
                                            );
                                          })(a, c, e, n)
                                        : ((a.data = bo(a, a.parent, e).resolve),
                                          W(void 0)),
                                    ),
                                    D1(() => i++),
                                    s5(1),
                                    w1(a => (i === r.size ? W(t) : Be)),
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              D1({
                                next: () => (u = !0),
                                complete: () => {
                                  u ||
                                    this.cancelNavigationTransition(
                                      l,
                                      '',
                                      Q1.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          D1(l => {
                            const u = new GY(
                              l.id,
                              this.urlSerializer.serialize(l.extractedUrl),
                              this.urlSerializer.serialize(l.urlAfterRedirects),
                              l.targetSnapshot,
                            );
                            this.events.next(u);
                          }),
                        );
                    }),
                    z5(a => {
                      const l = u => {
                        const f = [];
                        u.routeConfig?.loadComponent &&
                          !u.routeConfig._loadedComponent &&
                          f.push(
                            this.configLoader.loadComponent(u.routeConfig).pipe(
                              D1(d => {
                                u.component = d;
                              }),
                              s2(() => {}),
                            ),
                          );
                        for (const d of u.children) f.push(...l(d));
                        return f;
                      };
                      return t5(l(a.targetSnapshot.root)).pipe(fo(null), E3(1));
                    }),
                    z5(() => this.afterPreactivation()),
                    ut(() => {
                      const { currentSnapshot: a, targetSnapshot: l } = o,
                        u = this.createViewTransition?.(
                          this.environmentInjector,
                          a.root,
                          l.root,
                        );
                      return u ? f1(u).pipe(s2(() => o)) : W(o);
                    }),
                    s2(a => {
                      const l = (function oZ(e, n, t) {
                        const c = sc(e, n._root, t ? t._root : void 0);
                        return new My(c, n);
                      })(t.routeReuseStrategy, a.targetSnapshot, a.currentRouterState);
                      return (
                        (this.currentTransition = o = { ...a, targetRouterState: l }),
                        (this.currentNavigation.targetRouterState = l),
                        o
                      );
                    }),
                    D1(() => {
                      this.events.next(new d5());
                    }),
                    ((e, n, t, c) =>
                      s2(
                        s => (
                          new uZ(
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
                    E3(1),
                    D1({
                      next: a => {
                        (r = !0),
                          (this.lastSuccessfulNavigation = this.currentNavigation),
                          this.events.next(
                            new Ft(
                              a.id,
                              this.urlSerializer.serialize(a.extractedUrl),
                              this.urlSerializer.serialize(a.urlAfterRedirects),
                            ),
                          ),
                          this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),
                          a.resolve(!0);
                      },
                      complete: () => {
                        r = !0;
                      },
                    }),
                    Zv(
                      this.transitionAbortSubject.pipe(
                        D1(a => {
                          throw a;
                        }),
                      ),
                    ),
                    o5(() => {
                      !r &&
                        !i &&
                        this.cancelNavigationTransition(
                          o,
                          '',
                          Q1.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === o.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    e4(a => {
                      if (((i = !0), Dy(a)))
                        this.events.next(
                          new A3(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            a.message,
                            a.cancellationCode,
                          ),
                        ),
                          (function aZ(e) {
                            return Dy(e) && I3(e.url);
                          })(a)
                            ? this.events.next(new _o(a.url, a.navigationBehaviorOptions))
                            : o.resolve(!1);
                      else {
                        const l = new f5(
                          o.id,
                          this.urlSerializer.serialize(o.extractedUrl),
                          a,
                          o.targetSnapshot ?? void 0,
                        );
                        try {
                          const u = yt(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(l),
                          );
                          if (u instanceof v5) {
                            const { message: f, cancellationCode: d } = Eo(0, u);
                            this.events.next(
                              new A3(
                                o.id,
                                this.urlSerializer.serialize(o.extractedUrl),
                                f,
                                d,
                              ),
                            ),
                              this.events.next(
                                new _o(u.redirectTo, u.navigationBehaviorOptions),
                              );
                          } else {
                            this.events.next(l);
                            const f = t.errorHandler(a);
                            o.resolve(!!f);
                          }
                        } catch (u) {
                          this.options.resolveNavigationPromiseOnError
                            ? o.resolve(!1)
                            : o.reject(u);
                        }
                      }
                      return Be;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(t, c, s) {
            const o = new A3(t.id, this.urlSerializer.serialize(t.extractedUrl), c, s);
            this.events.next(o), t.resolve(!1);
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
      function oQ(e) {
        return e !== ec;
      }
      let rQ = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({
            token: e,
            factory: () => y(aQ),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class iQ {
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
      let aQ = (() => {
          class e extends iQ {
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
        Hy = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: () => y(lQ),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        lQ = (() => {
          class e extends Hy {
            constructor() {
              super(...arguments),
                (this.location = y(H0)),
                (this.urlSerializer = y(n4)),
                (this.options = y(ac, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.urlHandlingStrategy = y(b5)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new x3()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = vy(null)),
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
              if (t instanceof Lo) this.stateMemento = this.createStateMemento();
              else if (t instanceof c4) this.rawUrlTree = c.initialUrl;
              else if (t instanceof my) {
                if ('eager' === this.urlUpdateStrategy && !c.extras.skipLocationChange) {
                  const s = this.urlHandlingStrategy.merge(c.finalUrl, c.initialUrl);
                  this.setBrowserUrl(c.targetBrowserUrl ?? s, c);
                }
              } else
                t instanceof d5
                  ? ((this.currentUrlTree = c.finalUrl),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      c.finalUrl,
                      c.initialUrl,
                    )),
                    (this.routerState = c.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      !c.extras.skipLocationChange &&
                      this.setBrowserUrl(c.targetBrowserUrl ?? this.rawUrlTree, c))
                  : t instanceof A3 &&
                    (t.code === Q1.GuardRejected || t.code === Q1.NoDataFromResolver)
                  ? this.restoreHistory(c)
                  : t instanceof f5
                  ? this.restoreHistory(c, !0)
                  : t instanceof Ft &&
                    ((this.lastSuccessfulId = t.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(t, c) {
              const s = t instanceof x3 ? this.urlSerializer.serialize(t) : t;
              if (this.location.isCurrentPathEqualTo(s) || c.extras.replaceUrl) {
                const r = {
                  ...c.extras.state,
                  ...this.generateNgRouterState(c.id, this.browserPageId),
                };
                this.location.replaceState(s, '', r);
              } else {
                const o = {
                  ...c.extras.state,
                  ...this.generateNgRouterState(c.id, this.browserPageId + 1),
                };
                this.location.go(s, '', o);
              }
            }
            restoreHistory(t, c = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const o = this.currentPageId - this.browserPageId;
                0 !== o
                  ? this.location.historyGo(o)
                  : this.currentUrlTree === t.finalUrl &&
                    0 === o &&
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
      var lc = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = 'COMPLETE'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.REDIRECTING = 2)] = 'REDIRECTING'),
          e
        );
      })(lc || {});
      function uQ(e) {
        throw e;
      }
      const fQ = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        dQ = {
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
                (this.console = y(kC)),
                (this.stateManager = y(Hy)),
                (this.options = y(ac, { optional: !0 }) || {}),
                (this.pendingTasks = y(a3)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = y(To)),
                (this.urlSerializer = y(n4)),
                (this.location = y(H0)),
                (this.urlHandlingStrategy = y(b5)),
                (this._events = new p1()),
                (this.errorHandler = this.options.errorHandler || uQ),
                (this.navigated = !1),
                (this.routeReuseStrategy = y(rQ)),
                (this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore'),
                (this.config = y(Ao, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!y(Do, { optional: !0 })),
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
                    o = this.navigationTransitions.currentNavigation;
                  if (null !== s && null !== o)
                    if (
                      (this.stateManager.handleRouterEvent(c, o),
                      c instanceof A3 &&
                        c.code !== Q1.Redirect &&
                        c.code !== Q1.SupersededByNewNavigation)
                    )
                      this.navigated = !0;
                    else if (c instanceof Ft) this.navigated = !0;
                    else if (c instanceof _o) {
                      const r = c.navigationBehaviorOptions,
                        i = this.urlHandlingStrategy.merge(c.url, s.currentRawUrl),
                        a = {
                          browserUrl: s.extras.browserUrl,
                          info: s.extras.info,
                          skipLocationChange: s.extras.skipLocationChange,
                          replaceUrl:
                            s.extras.replaceUrl ||
                            'eager' === this.urlUpdateStrategy ||
                            oQ(s.source),
                          ...r,
                        };
                      this.scheduleNavigation(i, ec, null, a, {
                        resolve: s.resolve,
                        reject: s.reject,
                        promise: s.promise,
                      });
                    }
                  (function pQ(e) {
                    return !(e instanceof d5 || e instanceof _o);
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
                    ec,
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
              const o = { replaceUrl: !0 },
                r = s?.navigationId ? s : null;
              if (s) {
                const a = { ...s };
                delete a.navigationId,
                  delete a.ɵrouterPageId,
                  0 !== Object.keys(a).length && (o.state = a);
              }
              const i = this.parseUrl(t);
              this.scheduleNavigation(i, c, r, o);
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
              (this.config = t.map(_5)), (this.navigated = !1);
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
                  queryParams: o,
                  fragment: r,
                  queryParamsHandling: i,
                  preserveFragment: a,
                } = c,
                l = a ? this.currentUrlTree.fragment : r;
              let f,
                u = null;
              switch (i ?? this.options.defaultQueryParamsHandling) {
                case 'merge':
                  u = { ...this.currentUrlTree.queryParams, ...o };
                  break;
                case 'preserve':
                  u = this.currentUrlTree.queryParams;
                  break;
                default:
                  u = o || null;
              }
              null !== u && (u = this.removeEmptyProps(u));
              try {
                f = ay(s ? s.snapshot : this.routerState.snapshot.root);
              } catch {
                ('string' != typeof t[0] || '/' !== t[0][0]) && (t = []),
                  (f = this.currentUrlTree.root);
              }
              return ly(f, t, u, l ?? null);
            }
            navigateByUrl(t, c = { skipLocationChange: !1 }) {
              const s = I3(t) ? t : this.parseUrl(t),
                o = this.urlHandlingStrategy.merge(s, this.rawUrlTree);
              return this.scheduleNavigation(o, ec, null, c);
            }
            navigate(t, c = { skipLocationChange: !1 }) {
              return (
                (function hQ(e) {
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
              if (((s = !0 === c ? { ...fQ } : !1 === c ? { ...dQ } : c), I3(t)))
                return Jv(this.currentUrlTree, t, s);
              const o = this.parseUrl(t);
              return Jv(this.currentUrlTree, o, s);
            }
            removeEmptyProps(t) {
              return Object.entries(t).reduce(
                (c, [s, o]) => (null != o && (c[s] = o), c),
                {},
              );
            }
            scheduleNavigation(t, c, s, o, r) {
              if (this.disposed) return Promise.resolve(!1);
              let i, a, l;
              r
                ? ((i = r.resolve), (a = r.reject), (l = r.promise))
                : (l = new Promise((f, d) => {
                    (i = f), (a = d);
                  }));
              const u = this.pendingTasks.add();
              return (
                (function $y(e, n) {
                  e.events
                    .pipe(
                      Rt(
                        t =>
                          t instanceof Ft ||
                          t instanceof A3 ||
                          t instanceof f5 ||
                          t instanceof c4,
                      ),
                      s2(t =>
                        t instanceof Ft || t instanceof c4
                          ? lc.COMPLETE
                          : t instanceof A3 &&
                            (t.code === Q1.Redirect ||
                              t.code === Q1.SupersededByNewNavigation)
                          ? lc.REDIRECTING
                          : lc.FAILED,
                      ),
                      Rt(t => t !== lc.REDIRECTING),
                      E3(1),
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
                  extras: o,
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
        uc = (() => {
          class e {
            constructor(t, c, s, o, r, i) {
              (this.router = t),
                (this.route = c),
                (this.tabIndexAttribute = s),
                (this.renderer = o),
                (this.el = r),
                (this.locationStrategy = i),
                (this.href = null),
                (this.onChanges = new p1()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const a = r.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === a || 'area' === a),
                this.isAnchorElement
                  ? (this.subscription = t.events.subscribe(l => {
                      l instanceof Ft && this.updateHref();
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
                : ((this.routerLinkInput = I3(t) || Array.isArray(t) ? t : [t]),
                  this.setTabIndexIfNotOnNativeEl('0'));
            }
            onClick(t, c, s, o, r) {
              const i = this.urlTree;
              return (
                !!(
                  null === i ||
                  (this.isAnchorElement &&
                    (0 !== t ||
                      c ||
                      s ||
                      o ||
                      r ||
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
                  : (function sh(e, n, t) {
                      return (function pO(e, n) {
                        return ('src' === n &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === n && ('base' === e || 'link' === e))
                          ? ch
                          : _a;
                      })(
                        n,
                        t,
                      )(e);
                    })(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
              this.applyAttributeValue('href', c);
            }
            applyAttributeValue(t, c) {
              const s = this.renderer,
                o = this.el.nativeElement;
              null !== c ? s.setAttribute(o, t, c) : s.removeAttribute(o, t);
            }
            get urlTree() {
              return null === this.routerLinkInput
                ? null
                : I3(this.routerLinkInput)
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
                z(o4),
                (function U4(e) {
                  return (function Rk(e, n) {
                    if ('class' === n) return e.classes;
                    if ('style' === n) return e.styles;
                    const t = e.attrs;
                    if (t) {
                      const c = t.length;
                      let s = 0;
                      for (; s < c; ) {
                        const o = t[s];
                        if (Gu(o)) break;
                        if (0 === o) s += 2;
                        else if ('number' == typeof o)
                          for (s++; s < c && 'string' == typeof t[s]; ) s++;
                        else {
                          if (o === n) return t[s + 1];
                          s += 2;
                        }
                      }
                    }
                    return null;
                  })(p2(), e);
                })('tabindex'),
                z(Te),
                z(A1),
                z(Qn),
              );
            });
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (c, s) {
                1 & c &&
                  G('click', function (r) {
                    return s.onClick(
                      r.button,
                      r.ctrlKey,
                      r.shiftKey,
                      r.altKey,
                      r.metaKey,
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
                preserveFragment: [2, 'preserveFragment', 'preserveFragment', Zn],
                skipLocationChange: [2, 'skipLocationChange', 'skipLocationChange', Zn],
                replaceUrl: [2, 'replaceUrl', 'replaceUrl', Zn],
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [tm, g1],
            }));
          }
          return e;
        })();
      const w5 = new _('');
      let Gy = (() => {
        class e {
          constructor(t, c, s, o, r = {}) {
            (this.urlSerializer = t),
              (this.transitions = c),
              (this.viewportScroller = s),
              (this.zone = o),
              (this.options = r),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (r.scrollPositionRestoration ||= 'disabled'),
              (r.anchorScrolling ||= 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe(t => {
              t instanceof Lo
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = t.navigationTrigger),
                  (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
                : t instanceof Ft
                ? ((this.lastId = t.id),
                  this.scheduleScrollEvent(
                    t,
                    this.urlSerializer.parse(t.urlAfterRedirects).fragment,
                  ))
                : t instanceof c4 &&
                  t.code === zo.IgnoredSameUrlNavigation &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(t, this.urlSerializer.parse(t.url).fragment));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe(t => {
              t instanceof gy &&
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
                    new gy(
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
            Fa();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function qy(e) {
        return e.routerState.root;
      }
      function He(e, n) {
        return { ɵkind: e, ɵproviders: n };
      }
      function Wy() {
        const e = y(A2);
        return n => {
          const t = e.get(Fe);
          if (n !== t.components[0]) return;
          const c = e.get(ft),
            s = e.get(Yy);
          1 === e.get(D5) && c.initialNavigation(),
            e.get(Zy, null, t2.Optional)?.setUpPreloading(),
            e.get(w5, null, t2.Optional)?.init(),
            c.resetRootComponentType(t.componentTypes[0]),
            s.closed || (s.next(), s.complete(), s.unsubscribe());
        };
      }
      const Yy = new _('', { factory: () => new p1() }),
        D5 = new _('', { providedIn: 'root', factory: () => 1 }),
        Zy = new _('');
      let wQ = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-main']],
              standalone: !0,
              features: [q],
              decls: 1,
              vars: 0,
              template: function (c, s) {
                1 & c && d2(0, 'router-outlet');
              },
              dependencies: [cc],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Ky = (() => {
          class e {
            constructor(t) {
              this.router = t;
            }
            navigate(t) {
              this.router.navigate([t]);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(N(ft));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function Xy(e) {
        return Array.isArray(e) ? e : [e];
      }
      class NQ extends i1 {
        constructor(n, t) {
          super();
        }
        schedule(n, t = 0) {
          return this;
        }
      }
      const ko = {
        setInterval(e, n, ...t) {
          const { delegate: c } = ko;
          return c?.setInterval ? c.setInterval(e, n, ...t) : setInterval(e, n, ...t);
        },
        clearInterval(e) {
          const { delegate: n } = ko;
          return (n?.clearInterval || clearInterval)(e);
        },
        delegate: void 0,
      };
      class Jy extends NQ {
        constructor(n, t) {
          super(n, t), (this.scheduler = n), (this.work = t), (this.pending = !1);
        }
        schedule(n, t = 0) {
          var c;
          if (this.closed) return this;
          this.state = n;
          const s = this.id,
            o = this.scheduler;
          return (
            null != s && (this.id = this.recycleAsyncId(o, s, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id =
              null !== (c = this.id) && void 0 !== c
                ? c
                : this.requestAsyncId(o, this.id, t)),
            this
          );
        }
        requestAsyncId(n, t, c = 0) {
          return ko.setInterval(n.flush.bind(n, this), c);
        }
        recycleAsyncId(n, t, c = 0) {
          if (null != c && this.delay === c && !1 === this.pending) return t;
          null != t && ko.clearInterval(t);
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
          } catch (o) {
            (c = !0), (s = o || new Error('Scheduled action threw falsy error'));
          }
          if (c) return this.unsubscribe(), s;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: n, scheduler: t } = this,
              { actions: c } = t;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              jc(c, this),
              null != n && (this.id = this.recycleAsyncId(t, n, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
      const eL = { now: () => (eL.delegate || Date).now(), delegate: void 0 };
      class fc {
        constructor(n, t = fc.now) {
          (this.schedulerActionCtor = n), (this.now = t);
        }
        schedule(n, t = 0, c) {
          return new this.schedulerActionCtor(this, n).schedule(c, t);
        }
      }
      fc.now = eL.now;
      class tL extends fc {
        constructor(n, t = fc.now) {
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
      const xQ = new tL(Jy);
      let E5;
      try {
        E5 = typeof Intl < 'u' && Intl.v8BreakIterator;
      } catch {
        E5 = !1;
      }
      let IQ = (() => {
        class e {
          constructor(t) {
            (this._platformId = t),
              (this.isBrowser = this._platformId
                ? tv(this._platformId)
                : 'object' == typeof document && !!document),
              (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
              (this.TRIDENT =
                this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
              (this.BLINK =
                this.isBrowser &&
                !(!window.chrome && !E5) &&
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
            return new (c || e)(N(nt));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      const cL = new Set();
      let k3,
        kQ = (() => {
          class e {
            constructor(t, c) {
              (this._platform = t),
                (this._nonce = c),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : OQ);
            }
            matchMedia(t) {
              return (
                (this._platform.WEBKIT || this._platform.BLINK) &&
                  (function RQ(e, n) {
                    if (!cL.has(e))
                      try {
                        k3 ||
                          ((k3 = document.createElement('style')),
                          n && k3.setAttribute('nonce', n),
                          k3.setAttribute('type', 'text/css'),
                          document.head.appendChild(k3)),
                          k3.sheet &&
                            (k3.sheet.insertRule(`@media ${e} {body{ }}`, 0), cL.add(e));
                      } catch (t) {
                        console.error(t);
                      }
                  })(t, this._nonce),
                this._matchMedia(t)
              );
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(N(IQ), N(ra, 8));
            });
            static #t = (this.ɵprov = w({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function OQ(e) {
        return {
          matches: 'all' === e || '' === e,
          media: e,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let FQ = (() => {
        class e {
          constructor(t, c) {
            (this._mediaMatcher = t),
              (this._zone = c),
              (this._queries = new Map()),
              (this._destroySubject = new p1());
          }
          ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
          }
          isMatched(t) {
            return sL(Xy(t)).some(s => this._registerQuery(s).mql.matches);
          }
          observe(t) {
            let o = t5(sL(Xy(t)).map(r => this._registerQuery(r).observable));
            return (
              (o = lo(
                o.pipe(E3(1)),
                o.pipe(
                  (function EQ(e) {
                    return Rt((n, t) => e <= t);
                  })(1),
                  (function SQ(e, n = xQ) {
                    return U2((t, c) => {
                      let s = null,
                        o = null,
                        r = null;
                      const i = () => {
                        if (s) {
                          s.unsubscribe(), (s = null);
                          const l = o;
                          (o = null), c.next(l);
                        }
                      };
                      function a() {
                        const l = r + e,
                          u = n.now();
                        if (u < l)
                          return (s = this.schedule(void 0, l - u)), void c.add(s);
                        i();
                      }
                      t.subscribe(
                        R2(
                          c,
                          l => {
                            (o = l),
                              (r = n.now()),
                              s || ((s = n.schedule(a, e)), c.add(s));
                          },
                          () => {
                            i(), c.complete();
                          },
                          void 0,
                          () => {
                            o = s = null;
                          },
                        ),
                      );
                    });
                  })(0),
                ),
              )),
              o.pipe(
                s2(r => {
                  const i = { matches: !1, breakpoints: {} };
                  return (
                    r.forEach(({ matches: a, query: l }) => {
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
              o = {
                observable: new O2(r => {
                  const i = a => this._zone.run(() => r.next(a));
                  return (
                    c.addListener(i),
                    () => {
                      c.removeListener(i);
                    }
                  );
                }).pipe(
                  qv(c),
                  s2(({ matches: r }) => ({ query: t, matches: r })),
                  Zv(this._destroySubject),
                ),
                mql: c,
              };
            return this._queries.set(t, o), o;
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(N(kQ), N(l2));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      function sL(e) {
        return e
          .map(n => n.split(','))
          .reduce((n, t) => n.concat(t))
          .map(n => n.trim());
      }
      const E1_XSmall = '(max-width: 599.98px)',
        E1_Small = '(min-width: 600px) and (max-width: 959.98px)',
        E1_Medium = '(min-width: 960px) and (max-width: 1279.98px)',
        E1_Large = '(min-width: 1280px) and (max-width: 1919.98px)',
        E1_XLarge = '(min-width: 1920px)';
      var d1 = (function (e) {
        return (
          (e.XSmall = 'XSmall'),
          (e.Small = 'Small'),
          (e.Medium = 'Medium'),
          (e.Large = 'Large'),
          (e.XLarge = 'XLarge'),
          e
        );
      })(d1 || {});
      let x5 = (() => {
        class e {
          constructor(t) {
            (this.observer = t),
              (this.observers = new Map()),
              this.getBreakpointsObserve().subscribe(c => {
                c.breakpoints[E1_XSmall]
                  ? this.notifyObservers({ breakpoint: d1.XSmall })
                  : c.breakpoints[E1_Small]
                  ? this.notifyObservers({ breakpoint: d1.Small })
                  : c.breakpoints[E1_Medium]
                  ? this.notifyObservers({ breakpoint: d1.Medium })
                  : c.breakpoints[E1_Large]
                  ? this.notifyObservers({ breakpoint: d1.Large })
                  : c.breakpoints[E1_XLarge] &&
                    this.notifyObservers({ breakpoint: d1.XLarge });
              });
          }
          addObserver(t) {
            if (this.observers.has(t)) throw new Error('Object is already registered!');
            this.observers.set(t, t),
              this.getBreakpointsObserve()
                .subscribe(c => {
                  c.breakpoints[E1_XSmall]
                    ? t.update({ breakpoint: d1.XSmall })
                    : c.breakpoints[E1_Small]
                    ? t.update({ breakpoint: d1.Small })
                    : c.breakpoints[E1_Medium]
                    ? t.update({ breakpoint: d1.Medium })
                    : c.breakpoints[E1_Large]
                    ? t.update({ breakpoint: d1.Large })
                    : c.breakpoints[E1_XLarge] && t.update({ breakpoint: d1.XLarge });
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
              E1_XSmall,
              E1_Small,
              E1_Medium,
              E1_Large,
              E1_XLarge,
            ]);
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(N(FQ));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac, providedIn: 'root' }));
        }
        return e;
      })();
      const BQ = new (class VQ extends tL {})(
        class PQ extends Jy {
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
      function $Q(e, n) {
        return e === n;
      }
      function S5(e, n) {
        const t = !n?.manualCleanup;
        t &&
          !n?.injector &&
          (function u6(e) {
            if (!sf()) throw new L(-203, !1);
          })();
        const c = t ? n?.injector?.get(i3) ?? y(i3) : null,
          s = (function WQ(e = Object.is) {
            return (n, t) => 1 === n.kind && 1 === t.kind && e(n.value, t.value);
          })(n?.equal);
        let o;
        o = Dt(n?.requireSync ? { kind: 0 } : { kind: 1, value: n?.initialValue }, {
          equal: s,
        });
        const r = e.subscribe({
          next: i => o.set({ kind: 1, value: i }),
          error: i => {
            if (n?.rejectErrors) throw i;
            o.set({ kind: 2, error: i });
          },
        });
        if (n?.requireSync && 0 === o().kind) throw new L(601, !1);
        return (
          c?.onDestroy(r.unsubscribe.bind(r)),
          w3(
            () => {
              const i = o();
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
      const pc = {};
      function I5(e, n) {
        return Object.defineProperty(n, 'type', { value: e, writable: !1 });
      }
      const iL = '@ngrx/store/init';
      let $e = (() => {
        class e extends n1 {
          constructor() {
            super({ type: iL });
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
      const XQ = [$e],
        aL = new _('@ngrx/store Internal Root Guard'),
        lL = new _('@ngrx/store Internal Initial State'),
        u4 = new _('@ngrx/store Initial State'),
        uL = new _('@ngrx/store Reducer Factory'),
        fL = new _('@ngrx/store Internal Reducer Factory Provider'),
        dL = new _('@ngrx/store Initial Reducers'),
        T5 = new _('@ngrx/store Internal Initial Reducers'),
        pL =
          (new _('@ngrx/store Store Features'),
          new _('@ngrx/store Internal Store Reducers')),
        vL =
          (new _('@ngrx/store Internal Feature Reducers'),
          new _('@ngrx/store Internal Feature Configs'),
          new _('@ngrx/store Internal Store Features'),
          new _('@ngrx/store Internal Feature Reducers Token'),
          new _('@ngrx/store Feature Reducers'),
          new _('@ngrx/store User Provided Meta Reducers')),
        Oo = new _('@ngrx/store Meta Reducers'),
        yL = new _('@ngrx/store Internal Resolved Meta Reducers'),
        LL = new _('@ngrx/store User Runtime Checks Config'),
        zL = new _('@ngrx/store Internal User Runtime Checks Config'),
        mc = new _('@ngrx/store Internal Runtime Checks'),
        R5 = new _('@ngrx/store Check if Action types are unique'),
        O5 = new _('@ngrx/store Root Store Provider');
      function F5(e, n = {}) {
        const t = Object.keys(e),
          c = {};
        for (let o = 0; o < t.length; o++) {
          const r = t[o];
          'function' == typeof e[r] && (c[r] = e[r]);
        }
        const s = Object.keys(c);
        return function (r, i) {
          r = void 0 === r ? n : r;
          let a = !1;
          const l = {};
          for (let u = 0; u < s.length; u++) {
            const f = s[u],
              h = r[f],
              p = (0, c[f])(h, i);
            (l[f] = p), (a = a || p !== h);
          }
          return a ? l : r;
        };
      }
      function bL(...e) {
        return function (n) {
          if (0 === e.length) return n;
          const t = e[e.length - 1];
          return e.slice(0, -1).reduceRight((s, o) => o(s), t(n));
        };
      }
      function wL(e, n) {
        return (
          Array.isArray(n) && n.length > 0 && (e = bL.apply(null, [...n, e])),
          (t, c) => {
            const s = e(t);
            return (o, r) => s((o = void 0 === o ? c : o), r);
          }
        );
      }
      new _('@ngrx/store Feature State Provider');
      class P5 extends O2 {}
      class DL extends $e {}
      let R3 = (() => {
        class e extends n1 {
          get currentReducers() {
            return this.reducers;
          }
          constructor(t, c, s, o) {
            super(o(s, c)),
              (this.dispatcher = t),
              (this.initialState = c),
              (this.reducers = s),
              (this.reducerFactory = o);
          }
          addFeature(t) {
            this.addFeatures([t]);
          }
          addFeatures(t) {
            const c = t.reduce(
              (
                s,
                {
                  reducers: o,
                  reducerFactory: r,
                  metaReducers: i,
                  initialState: a,
                  key: l,
                },
              ) => {
                const u =
                  'function' == typeof o
                    ? (function eK(e) {
                        const n = Array.isArray(e) && e.length > 0 ? bL(...e) : t => t;
                        return (t, c) => (
                          (t = n(t)), (s, o) => t((s = void 0 === s ? c : s), o)
                        );
                      })(i)(o, a)
                    : wL(r, i)(o, a);
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
              this.reducers = (function JQ(e, n) {
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
            return new (c || e)(N(DL), N(u4), N(dL), N(uL));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const nK = [R3, { provide: P5, useExisting: R3 }, { provide: DL, useExisting: $e }];
      let V5 = (() => {
        class e extends p1 {
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
      const cK = [V5];
      class B5 extends O2 {}
      let EL = (() => {
        class e extends n1 {
          static #e = (this.INIT = iL);
          constructor(t, c, s, o) {
            super(o);
            const i = t.pipe(Xl(BQ)).pipe(
                (function jQ(...e) {
                  const n = e5(e);
                  return U2((t, c) => {
                    const s = e.length,
                      o = new Array(s);
                    let r = e.map(() => !1),
                      i = !1;
                    for (let a = 0; a < s; a++)
                      Le(e[a]).subscribe(
                        R2(
                          c,
                          l => {
                            (o[a] = l),
                              !i &&
                                !r[a] &&
                                ((r[a] = !0), (i = r.every(Ze)) && (r = null));
                          },
                          Hc,
                        ),
                      );
                    t.subscribe(
                      R2(c, a => {
                        if (i) {
                          const l = [a, ...o];
                          c.next(n ? n(...l) : l);
                        }
                      }),
                    );
                  });
                })(c),
              ),
              l = i.pipe(Yv(sK, { state: o }));
            (this.stateSubscription = l.subscribe(({ state: u, action: f }) => {
              this.next(u), s.next(f);
            })),
              (this.state = S5(this, { manualCleanup: !0, requireSync: !0 }));
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
          static #t = (this.ɵfac = function (c) {
            return new (c || e)(N($e), N(P5), N(V5), N(u4));
          });
          static #n = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function sK(e = { state: void 0 }, [n, t]) {
        const { state: c } = e;
        return { state: t(c, n), action: n };
      }
      const oK = [EL, { provide: B5, useExisting: EL }];
      let f4 = (() => {
        class e extends O2 {
          constructor(t, c, s) {
            super(),
              (this.actionsObserver = c),
              (this.reducerManager = s),
              (this.source = t),
              (this.state = t.state);
          }
          select(t, ...c) {
            return iK.call(null, t, ...c)(this);
          }
          selectSignal(t, c) {
            return w3(() => t(this.state()), c);
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
            return new (c || e)(N(B5), N($e), N(R3));
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const rK = [f4];
      function iK(e, n, ...t) {
        return function (s) {
          let o;
          if ('string' == typeof e) {
            const r = [n, ...t].filter(Boolean);
            o = s.pipe(
              (function UQ(...e) {
                const n = e.length;
                if (0 === n) throw new Error('list of properties cannot be empty.');
                return s2(t => {
                  let c = t;
                  for (let s = 0; s < n; s++) {
                    const o = c?.[e[s]];
                    if (!(typeof o < 'u')) return;
                    c = o;
                  }
                  return c;
                });
              })(e, ...r),
            );
          } else {
            if ('function' != typeof e)
              throw new TypeError(
                `Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`,
              );
            o = s.pipe(s2(r => e(r, n)));
          }
          return o.pipe(
            (function HQ(e, n = Ze) {
              return (
                (e = e ?? $Q),
                U2((t, c) => {
                  let s,
                    o = !0;
                  t.subscribe(
                    R2(c, r => {
                      const i = n(r);
                      (o || !e(s, i)) && ((o = !1), (s = i), c.next(r));
                    }),
                  );
                })
              );
            })(),
          );
        };
      }
      const j5 = 'https://ngrx.io/guide/store/configuration/runtime-checks';
      function NL(e) {
        return void 0 === e;
      }
      function xL(e) {
        return null === e;
      }
      function SL(e) {
        return Array.isArray(e);
      }
      function IL(e) {
        return 'object' == typeof e && null !== e;
      }
      function U5(e) {
        return 'function' == typeof e;
      }
      let TL = !1;
      function H5(e, n) {
        return e === n;
      }
      function $5(e, n = H5, t = H5) {
        let o,
          c = null,
          s = null;
        return {
          memoized: function l() {
            if (void 0 !== o) return o.result;
            if (!c) return (s = e.apply(null, arguments)), (c = arguments), s;
            if (
              !(function gK(e, n, t) {
                for (let c = 0; c < e.length; c++) if (!t(e[c], n[c])) return !0;
                return !1;
              })(arguments, c, n)
            )
              return s;
            const u = e.apply(null, arguments);
            return (c = arguments), t(s, u) ? s : ((s = u), u);
          },
          reset: function r() {
            (c = null), (s = null);
          },
          setResult: function i(u = void 0) {
            o = { result: u };
          },
          clearResult: function a() {
            o = void 0;
          },
        };
      }
      function CK(e, n, t, c) {
        if (void 0 === t) {
          const o = n.map(r => r(e));
          return c.memoized.apply(null, o);
        }
        const s = n.map(o => o(e, t));
        return c.memoized.apply(null, [...s, t]);
      }
      function bK(e) {
        return e instanceof _ ? y(e) : e;
      }
      function kL(e) {
        return 'function' == typeof e ? e() : e;
      }
      function EK(e, n) {
        return e.concat(n);
      }
      function NK() {
        if (y(f4, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function q5(e) {
        Object.freeze(e);
        const n = U5(e);
        return (
          Object.getOwnPropertyNames(e).forEach(t => {
            if (
              !t.startsWith('\u0275') &&
              (function hK(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n);
              })(e, t) &&
              (!n || ('caller' !== t && 'callee' !== t && 'arguments' !== t))
            ) {
              const c = e[t];
              (IL(c) || U5(c)) && !Object.isFrozen(c) && q5(c);
            }
          }),
          e
        );
      }
      function W5(e, n = []) {
        return (NL(e) || xL(e)) && 0 === n.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((c, s) => {
              if (c) return c;
              const o = e[s];
              return (function dK(e) {
                return U5(e) && e.hasOwnProperty('\u0275cmp');
              })(o)
                ? c
                : !(
                    NL(o) ||
                    xL(o) ||
                    (function uK(e) {
                      return 'number' == typeof e;
                    })(o) ||
                    (function lK(e) {
                      return 'boolean' == typeof e;
                    })(o) ||
                    (function aK(e) {
                      return 'string' == typeof e;
                    })(o) ||
                    SL(o)
                  ) &&
                    ((function AL(e) {
                      if (
                        !(function fK(e) {
                          return IL(e) && !SL(e);
                        })(e)
                      )
                        return !1;
                      const n = Object.getPrototypeOf(e);
                      return n === Object.prototype || null === n;
                    })(o)
                      ? W5(o, [...n, s])
                      : { path: [...n, s], value: o });
            }, !1);
      }
      function RL(e, n) {
        if (!1 === e) return;
        const t = e.path.join('.'),
          c = new Error(
            `Detected unserializable ${n} at "${t}". ${j5}#strict${n}serializability`,
          );
        throw ((c.value = e.value), (c.unserializablePath = t), c);
      }
      function AK(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function TK({ strictActionSerializability: e, strictStateSerializability: n }) {
        return t =>
          e || n
            ? (function SK(e, n) {
                return function (t, c) {
                  n.action(c) && RL(W5(c), 'action');
                  const s = e(t, c);
                  return n.state() && RL(W5(s), 'state'), s;
                };
              })(t, { action: c => e && !Y5(c), state: () => n })
            : t;
      }
      function kK({ strictActionImmutability: e, strictStateImmutability: n }) {
        return t =>
          e || n
            ? (function xK(e, n) {
                return function (t, c) {
                  const s = n.action(c) ? q5(c) : c,
                    o = e(t, s);
                  return n.state() ? q5(o) : o;
                };
              })(t, { action: c => e && !Y5(c), state: () => n })
            : t;
      }
      function Y5(e) {
        return e.type.startsWith('@ngrx');
      }
      function RK({ strictActionWithinNgZone: e }) {
        return n =>
          e
            ? (function IK(e, n) {
                return function (t, c) {
                  if (n.action(c) && !l2.isInAngularZone())
                    throw new Error(
                      `Action '${c.type}' running outside NgZone. ${j5}#strictactionwithinngzone`,
                    );
                  return e(t, c);
                };
              })(n, { action: t => e && !Y5(t) })
            : n;
      }
      function OK(e) {
        return [
          { provide: zL, useValue: e },
          { provide: LL, useFactory: FK, deps: [zL] },
          { provide: mc, deps: [LL], useFactory: AK },
          { provide: Oo, multi: !0, deps: [mc], useFactory: kK },
          { provide: Oo, multi: !0, deps: [mc], useFactory: TK },
          { provide: Oo, multi: !0, deps: [mc], useFactory: RK },
        ];
      }
      function FK(e) {
        return e;
      }
      function PK(e) {
        if (!e.strictActionTypeUniqueness) return;
        const n = Object.entries(pc)
          .filter(([, t]) => t > 1)
          .map(([t]) => t);
        if (n.length)
          throw new Error(
            `Action types are registered more than once, ${n
              .map(t => `"${t}"`)
              .join(', ')}. ${j5}#strictactiontypeuniqueness`,
          );
      }
      function VK(e = {}, n = {}) {
        return [
          { provide: aL, useFactory: NK },
          { provide: lL, useValue: n.initialState },
          { provide: u4, useFactory: kL, deps: [lL] },
          { provide: T5, useValue: e },
          { provide: pL, useExisting: e instanceof _ ? e : T5 },
          { provide: dL, deps: [T5, [new Bu(pL)]], useFactory: bK },
          { provide: vL, useValue: n.metaReducers ? n.metaReducers : [] },
          { provide: yL, deps: [Oo, vL], useFactory: EK },
          { provide: fL, useValue: n.reducerFactory ? n.reducerFactory : F5 },
          { provide: uL, deps: [fL, yL], useFactory: wL },
          XQ,
          nK,
          cK,
          oK,
          rK,
          OK(n.runtimeChecks),
          [{ provide: R5, multi: !0, deps: [mc], useFactory: PK }],
        ];
      }
      const jK = [
          {
            provide: O5,
            useFactory: function BK() {
              y($e),
                y(P5),
                y(V5),
                y(f4),
                y(aL, { optional: !0 }),
                y(R5, { optional: !0 });
            },
          },
          { provide: j1, multi: !0, useFactory: () => () => y(O5) },
        ],
        FL = e => `Not supported ${e} type!`;
      let QK = (() => {
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
        Z5 = (() => {
          class e {
            constructor(t) {
              (this.injector = t),
                (this.event = new Z()),
                (this.classNames = []),
                (this.bem = this.injector.get(QK));
            }
            static buildImports() {
              return [Ve];
            }
            ngOnInit() {
              this.afterInit();
            }
            ngOnDestroy() {
              this.afterDestroy();
            }
            afterInit() {}
            afterDestroy() {}
            onEvent(t) {
              this.event.emit(t);
            }
            addClassName(t = '', c = '', s = '') {
              const o = this.bem.buildBem(t, c, s);
              this.classNames.push(o);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(A2));
            });
            static #t = (this.ɵdir = P({ type: e, outputs: { event: 'event' } }));
          }
          return e;
        })(),
        Fo = (() => {
          class e extends Z5 {
            constructor(t, c) {
              super(t),
                (this.injector = t),
                (this.select = c),
                (this.store = this.injector.get(f4));
            }
            afterInit() {
              this.sub = this.store
                .select('course')
                .subscribe(t => this.onStoreChange(t));
            }
            onStoreChange(t) {}
            afterDestroy() {
              if (!this.sub) throw new Error('The sub is not defined!');
              this.sub.unsubscribe();
            }
            static #e = (this.ɵfac = function (c) {
              Fa();
            });
            static #t = (this.ɵdir = P({ type: e, features: [n2] }));
          }
          return e;
        })(),
        KK = (() => {
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
      const PL = () => {};
      let Q5 = {},
        VL = {},
        BL = null,
        jL = { mark: PL, measure: PL };
      try {
        typeof window < 'u' && (Q5 = window),
          typeof document < 'u' && (VL = document),
          typeof MutationObserver < 'u' && (BL = MutationObserver),
          typeof performance < 'u' && (jL = performance);
      } catch {}
      const { userAgent: UL = '' } = Q5.navigator || {},
        Pt = Q5,
        x2 = VL,
        HL = BL,
        Po = jL,
        dt =
          !!x2.documentElement &&
          !!x2.head &&
          'function' == typeof x2.addEventListener &&
          'function' == typeof x2.createElement,
        $L = ~UL.indexOf('MSIE') || ~UL.indexOf('Trident/');
      var k2 = 'classic',
        GL = 'duotone',
        K1 = 'sharp',
        X1 = 'sharp-duotone',
        XK = [k2, GL, K1, X1],
        WL = {
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
        YL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        uX = YL.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        gc = {
          GROUP: 'duotone-group',
          SWAP_OPACITY: 'swap-opacity',
          PRIMARY: 'primary',
          SECONDARY: 'secondary',
        },
        fX = [
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
          gc.GROUP,
          gc.SWAP_OPACITY,
          gc.PRIMARY,
          gc.SECONDARY,
        ]
          .concat(YL.map(e => ''.concat(e, 'x')))
          .concat(uX.map(e => 'w-'.concat(e)));
      const ht = '___FONT_AWESOME___',
        K5 = 16,
        QL = 'fa',
        KL = 'svg-inline--fa',
        O3 = 'data-fa-i2svg',
        X5 = 'data-fa-pseudo-element',
        mX = 'data-fa-pseudo-element-pending',
        J5 = 'data-prefix',
        e7 = 'data-icon',
        XL = 'fontawesome-i2svg',
        gX = 'async',
        CX = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
        JL = (() => {
          try {
            return !0;
          } catch {
            return !1;
          }
        })(),
        ez = [k2, K1, X1];
      function Cc(e) {
        return new Proxy(e, { get: (n, t) => (t in n ? n[t] : n[k2]) });
      }
      const tz = { ...WL };
      tz[k2] = {
        ...WL[k2],
        fak: 'kit',
        'fa-kit': 'kit',
        fakd: 'kit-duotone',
        'fa-kit-duotone': 'kit-duotone',
      };
      const F3 = Cc(tz),
        t7 = {
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
      t7[k2] = { ...t7[k2], kit: 'fak', 'kit-duotone': 'fakd' };
      const Mc = Cc(t7),
        n7 = {
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
      n7[k2] = { ...n7[k2], fak: 'fa-kit' };
      const P3 = Cc(n7),
        c7 = {
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
      c7[k2] = { ...c7[k2], 'fa-kit': 'fak' };
      const MX = Cc(c7),
        vX = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
        nz = 'fa-layers-text',
        yX =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
        zX =
          (Cc({
            classic: { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' },
            sharp: { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' },
            'sharp-duotone': { 900: 'fasds' },
          }),
          ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask']),
        s7 = gc,
        d4 = new Set();
      Object.keys(Mc[k2]).map(d4.add.bind(d4)),
        Object.keys(Mc[K1]).map(d4.add.bind(d4)),
        Object.keys(Mc[X1]).map(d4.add.bind(d4));
      const _X = ['kit', ...fX],
        vc = Pt.FontAwesomeConfig || {};
      x2 &&
        'function' == typeof x2.querySelector &&
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
          const s = (function wX(e) {
            return '' === e || ('false' !== e && ('true' === e || e));
          })(
            (function bX(e) {
              var n = x2.querySelector('script[' + e + ']');
              if (n) return n.getAttribute(e);
            })(t),
          );
          null != s && (vc[c] = s);
        });
      const cz = {
        styleDefault: 'solid',
        familyDefault: 'classic',
        cssPrefix: QL,
        replacementClass: KL,
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
      vc.familyPrefix && (vc.cssPrefix = vc.familyPrefix);
      const h4 = { ...cz, ...vc };
      h4.autoReplaceSvg || (h4.observeMutations = !1);
      const x = {};
      Object.keys(cz).forEach(e => {
        Object.defineProperty(x, e, {
          enumerable: !0,
          set: function (n) {
            (h4[e] = n), yc.forEach(t => t(x));
          },
          get: function () {
            return h4[e];
          },
        });
      }),
        Object.defineProperty(x, 'familyPrefix', {
          enumerable: !0,
          set: function (e) {
            (h4.cssPrefix = e), yc.forEach(n => n(x));
          },
          get: function () {
            return h4.cssPrefix;
          },
        }),
        (Pt.FontAwesomeConfig = x);
      const yc = [],
        Vt = K5,
        Ge = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 },
        NX = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      function Lc() {
        let e = 12,
          n = '';
        for (; e-- > 0; ) n += NX[(62 * Math.random()) | 0];
        return n;
      }
      function p4(e) {
        const n = [];
        for (let t = (e || []).length >>> 0; t--; ) n[t] = e[t];
        return n;
      }
      function o7(e) {
        return e.classList
          ? p4(e.classList)
          : (e.getAttribute('class') || '').split(' ').filter(n => n);
      }
      function sz(e) {
        return ''
          .concat(e)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function Vo(e) {
        return Object.keys(e || {}).reduce(
          (n, t) => n + ''.concat(t, ': ').concat(e[t].trim(), ';'),
          '',
        );
      }
      function r7(e) {
        return (
          e.size !== Ge.size ||
          e.x !== Ge.x ||
          e.y !== Ge.y ||
          e.rotate !== Ge.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      var AX =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
      function oz() {
        const e = QL,
          n = KL,
          t = x.cssPrefix,
          c = x.replacementClass;
        let s = AX;
        if (t !== e || c !== n) {
          const o = new RegExp('\\.'.concat(e, '\\-'), 'g'),
            r = new RegExp('\\--'.concat(e, '\\-'), 'g'),
            i = new RegExp('\\.'.concat(n), 'g');
          s = s
            .replace(o, '.'.concat(t, '-'))
            .replace(r, '--'.concat(t, '-'))
            .replace(i, '.'.concat(c));
        }
        return s;
      }
      let rz = !1;
      function i7() {
        x.autoAddCss &&
          !rz &&
          ((function EX(e) {
            if (!e || !dt) return;
            const n = x2.createElement('style');
            n.setAttribute('type', 'text/css'), (n.innerHTML = e);
            const t = x2.head.childNodes;
            let c = null;
            for (let s = t.length - 1; s > -1; s--) {
              const o = t[s],
                r = (o.tagName || '').toUpperCase();
              ['STYLE', 'LINK'].indexOf(r) > -1 && (c = o);
            }
            x2.head.insertBefore(n, c);
          })(oz()),
          (rz = !0));
      }
      var TX = {
        mixout: () => ({ dom: { css: oz, insertCss: i7 } }),
        hooks: () => ({
          beforeDOMElementCreation() {
            i7();
          },
          beforeI2svg() {
            i7();
          },
        }),
      };
      const pt = Pt || {};
      pt[ht] || (pt[ht] = {}),
        pt[ht].styles || (pt[ht].styles = {}),
        pt[ht].hooks || (pt[ht].hooks = {}),
        pt[ht].shims || (pt[ht].shims = []);
      var qe = pt[ht];
      const iz = [],
        az = function () {
          x2.removeEventListener('DOMContentLoaded', az), (Bo = 1), iz.map(e => e());
        };
      let Bo = !1;
      function zc(e) {
        const { tag: n, attributes: t = {}, children: c = [] } = e;
        return 'string' == typeof e
          ? sz(e)
          : '<'
              .concat(n, ' ')
              .concat(
                (function xX(e) {
                  return Object.keys(e || {})
                    .reduce((n, t) => n + ''.concat(t, '="').concat(sz(e[t]), '" '), '')
                    .trim();
                })(t),
                '>',
              )
              .concat(c.map(zc).join(''), '</')
              .concat(n, '>');
      }
      function lz(e, n, t) {
        if (e && e[n] && e[n][t]) return { prefix: n, iconName: t, icon: e[n][t] };
      }
      dt &&
        ((Bo = (x2.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          x2.readyState,
        )),
        Bo || x2.addEventListener('DOMContentLoaded', az));
      var a7 = function (n, t, c, s) {
        var a,
          l,
          u,
          o = Object.keys(n),
          r = o.length,
          i =
            void 0 !== s
              ? (function (n, t) {
                  return function (c, s, o, r) {
                    return n.call(t, c, s, o, r);
                  };
                })(t, s)
              : t;
        for (void 0 === c ? ((a = 1), (u = n[o[0]])) : ((a = 0), (u = c)); a < r; a++)
          u = i(u, n[(l = o[a])], l, n);
        return u;
      };
      function l7(e) {
        const n = (function OX(e) {
          const n = [];
          let t = 0;
          const c = e.length;
          for (; t < c; ) {
            const s = e.charCodeAt(t++);
            if (s >= 55296 && s <= 56319 && t < c) {
              const o = e.charCodeAt(t++);
              56320 == (64512 & o)
                ? n.push(((1023 & s) << 10) + (1023 & o) + 65536)
                : (n.push(s), t--);
            } else n.push(s);
          }
          return n;
        })(e);
        return 1 === n.length ? n[0].toString(16) : null;
      }
      function uz(e) {
        return Object.keys(e).reduce((n, t) => {
          const c = e[t];
          return c.icon ? (n[c.iconName] = c.icon) : (n[t] = c), n;
        }, {});
      }
      function u7(e, n) {
        let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { skipHooks: c = !1 } = t,
          s = uz(n);
        'function' != typeof qe.hooks.addPack || c
          ? (qe.styles[e] = { ...(qe.styles[e] || {}), ...s })
          : qe.hooks.addPack(e, uz(n)),
          'fas' === e && u7('fa', n);
      }
      const { styles: V3, shims: PX } = qe,
        VX = {
          [k2]: Object.values(P3[k2]),
          [K1]: Object.values(P3[K1]),
          [X1]: Object.values(P3[X1]),
        };
      let f7 = null,
        fz = {},
        dz = {},
        hz = {},
        pz = {},
        mz = {};
      const BX = {
        [k2]: Object.keys(F3[k2]),
        [K1]: Object.keys(F3[K1]),
        [X1]: Object.keys(F3[X1]),
      };
      const gz = () => {
        const e = c => a7(V3, (s, o, r) => ((s[r] = a7(o, c, {})), s), {});
        (fz = e(
          (c, s, o) => (
            s[3] && (c[s[3]] = o),
            s[2] &&
              s[2]
                .filter(i => 'number' == typeof i)
                .forEach(i => {
                  c[i.toString(16)] = o;
                }),
            c
          ),
        )),
          (dz = e(
            (c, s, o) => (
              (c[o] = o),
              s[2] &&
                s[2]
                  .filter(i => 'string' == typeof i)
                  .forEach(i => {
                    c[i] = o;
                  }),
              c
            ),
          )),
          (mz = e((c, s, o) => {
            const r = s[2];
            return (
              (c[o] = o),
              r.forEach(i => {
                c[i] = o;
              }),
              c
            );
          }));
        const n = 'far' in V3 || x.autoFetchSvg,
          t = a7(
            PX,
            (c, s) => {
              const o = s[0];
              let r = s[1];
              const i = s[2];
              return (
                'far' === r && !n && (r = 'fas'),
                'string' == typeof o && (c.names[o] = { prefix: r, iconName: i }),
                'number' == typeof o &&
                  (c.unicodes[o.toString(16)] = { prefix: r, iconName: i }),
                c
              );
            },
            { names: {}, unicodes: {} },
          );
        (hz = t.names),
          (pz = t.unicodes),
          (f7 = jo(x.styleDefault, { family: x.familyDefault }));
      };
      function d7(e, n) {
        return (fz[e] || {})[n];
      }
      function Bt(e, n) {
        return (mz[e] || {})[n];
      }
      function Cz(e) {
        return hz[e] || { prefix: null, iconName: null };
      }
      function jt() {
        return f7;
      }
      (function DX(e) {
        yc.push(e);
      })(e => {
        f7 = jo(e.styleDefault, { family: x.familyDefault });
      }),
        gz();
      const h7 = () => ({ prefix: null, iconName: null, rest: [] });
      function jo(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { family: t = k2 } = n;
        return Mc[t][e] || Mc[t][F3[t][e]] || (e in qe.styles ? e : null) || null;
      }
      const GX = {
        [k2]: Object.keys(P3[k2]),
        [K1]: Object.keys(P3[K1]),
        [X1]: Object.keys(P3[X1]),
      };
      function Uo(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { skipLookups: t = !1 } = n,
          c = {
            [k2]: ''.concat(x.cssPrefix, '-').concat(k2),
            [K1]: ''.concat(x.cssPrefix, '-').concat(K1),
            [X1]: ''.concat(x.cssPrefix, '-').concat(X1),
          };
        let s = null,
          o = k2;
        const r = XK.filter(a => a !== GL);
        r.forEach(a => {
          (e.includes(c[a]) || e.some(l => GX[a].includes(l))) && (o = a);
        });
        const i = e.reduce((a, l) => {
          const u = (function UX(e, n) {
            const t = n.split('-'),
              c = t[0],
              s = t.slice(1).join('-');
            return c !== e ||
              '' === s ||
              (function jX(e) {
                return ~_X.indexOf(e);
              })(s)
              ? null
              : s;
          })(x.cssPrefix, l);
          if (
            (V3[l]
              ? ((l = VX[o].includes(l) ? MX[o][l] : l), (s = l), (a.prefix = l))
              : BX[o].indexOf(l) > -1
              ? ((s = l), (a.prefix = jo(l, { family: o })))
              : u
              ? (a.iconName = u)
              : l !== x.replacementClass && !r.some(f => l === c[f]) && a.rest.push(l),
            !t && a.prefix && a.iconName)
          ) {
            const f = 'fa' === s ? Cz(a.iconName) : {},
              d = Bt(a.prefix, a.iconName);
            f.prefix && (s = null),
              (a.iconName = f.iconName || d || a.iconName),
              (a.prefix = f.prefix || a.prefix),
              'far' === a.prefix &&
                !V3.far &&
                V3.fas &&
                !x.autoFetchSvg &&
                (a.prefix = 'fas');
          }
          return a;
        }, h7());
        return (
          (e.includes('fa-brands') || e.includes('fab')) && (i.prefix = 'fab'),
          (e.includes('fa-duotone') || e.includes('fad')) && (i.prefix = 'fad'),
          !i.prefix &&
            o === K1 &&
            (V3.fass || x.autoFetchSvg) &&
            ((i.prefix = 'fass'), (i.iconName = Bt(i.prefix, i.iconName) || i.iconName)),
          !i.prefix &&
            o === X1 &&
            (V3.fasds || x.autoFetchSvg) &&
            ((i.prefix = 'fasds'), (i.iconName = Bt(i.prefix, i.iconName) || i.iconName)),
          ('fa' === i.prefix || 'fa' === s) && (i.prefix = jt() || 'fas'),
          i
        );
      }
      let Mz = [],
        m4 = {};
      const g4 = {},
        WX = Object.keys(g4);
      function p7(e, n) {
        for (
          var t = arguments.length, c = new Array(t > 2 ? t - 2 : 0), s = 2;
          s < t;
          s++
        )
          c[s - 2] = arguments[s];
        return (
          (m4[e] || []).forEach(r => {
            n = r.apply(null, [n, ...c]);
          }),
          n
        );
      }
      function B3(e) {
        for (
          var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), c = 1;
          c < n;
          c++
        )
          t[c - 1] = arguments[c];
        (m4[e] || []).forEach(o => {
          o.apply(null, t);
        });
      }
      function Ut() {
        const e = arguments[0],
          n = Array.prototype.slice.call(arguments, 1);
        return g4[e] ? g4[e].apply(null, n) : void 0;
      }
      function m7(e) {
        'fa' === e.prefix && (e.prefix = 'fas');
        let { iconName: n } = e;
        const t = e.prefix || jt();
        if (n)
          return (n = Bt(t, n) || n), lz(vz.definitions, t, n) || lz(qe.styles, t, n);
      }
      const vz = new (class qX {
          constructor() {
            this.definitions = {};
          }
          add() {
            for (var n = arguments.length, t = new Array(n), c = 0; c < n; c++)
              t[c] = arguments[c];
            const s = t.reduce(this._pullDefinitions, {});
            Object.keys(s).forEach(o => {
              (this.definitions[o] = { ...(this.definitions[o] || {}), ...s[o] }),
                u7(o, s[o]);
              const r = P3[k2][o];
              r && u7(r, s[o]), gz();
            });
          }
          reset() {
            this.definitions = {};
          }
          _pullDefinitions(n, t) {
            const c = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(c).map(s => {
                const { prefix: o, iconName: r, icon: i } = c[s],
                  a = i[2];
                n[o] || (n[o] = {}),
                  a.length > 0 &&
                    a.forEach(l => {
                      'string' == typeof l && (n[o][l] = i);
                    }),
                  (n[o][r] = i);
              }),
              n
            );
          }
        })(),
        J1 = {
          noAuto: () => {
            (x.autoReplaceSvg = !1), (x.observeMutations = !1), B3('noAuto');
          },
          config: x,
          dom: {
            i2svg: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return dt
                ? (B3('beforeI2svg', e), Ut('pseudoElements2svg', e), Ut('i2svg', e))
                : Promise.reject(new Error('Operation requires a DOM of some kind.'));
            },
            watch: function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const { autoReplaceSvgRoot: n } = e;
              !1 === x.autoReplaceSvg && (x.autoReplaceSvg = !0),
                (x.observeMutations = !0),
                (function kX(e) {
                  dt && (Bo ? setTimeout(e, 0) : iz.push(e));
                })(() => {
                  ZX({ autoReplaceSvgRoot: n }), B3('watch', e);
                });
            },
          },
          parse: {
            icon: e => {
              if (null === e) return null;
              if ('object' == typeof e && e.prefix && e.iconName)
                return {
                  prefix: e.prefix,
                  iconName: Bt(e.prefix, e.iconName) || e.iconName,
                };
              if (Array.isArray(e) && 2 === e.length) {
                const n = 0 === e[1].indexOf('fa-') ? e[1].slice(3) : e[1],
                  t = jo(e[0]);
                return { prefix: t, iconName: Bt(t, n) || n };
              }
              if (
                'string' == typeof e &&
                (e.indexOf(''.concat(x.cssPrefix, '-')) > -1 || e.match(vX))
              ) {
                const n = Uo(e.split(' '), { skipLookups: !0 });
                return {
                  prefix: n.prefix || jt(),
                  iconName: Bt(n.prefix, n.iconName) || n.iconName,
                };
              }
              if ('string' == typeof e) {
                const n = jt();
                return { prefix: n, iconName: Bt(n, e) || e };
              }
            },
          },
          library: vz,
          findIconDefinition: m7,
          toHtml: zc,
        },
        ZX = function () {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { autoReplaceSvgRoot: n = x2 } = e;
          (Object.keys(qe.styles).length > 0 || x.autoFetchSvg) &&
            dt &&
            x.autoReplaceSvg &&
            J1.dom.i2svg({ node: n });
        };
      function Ho(e, n) {
        return (
          Object.defineProperty(e, 'abstract', { get: n }),
          Object.defineProperty(e, 'html', {
            get: function () {
              return e.abstract.map(t => zc(t));
            },
          }),
          Object.defineProperty(e, 'node', {
            get: function () {
              if (!dt) return;
              const t = x2.createElement('div');
              return (t.innerHTML = e.html), t.children;
            },
          }),
          e
        );
      }
      function g7(e) {
        const {
            icons: { main: n, mask: t },
            prefix: c,
            iconName: s,
            transform: o,
            symbol: r,
            title: i,
            maskId: a,
            titleId: l,
            extra: u,
            watchable: f = !1,
          } = e,
          { width: d, height: h } = t.found ? t : n,
          p = 'fak' === c,
          m = [x.replacementClass, s ? ''.concat(x.cssPrefix, '-').concat(s) : '']
            .filter(Y => -1 === u.classes.indexOf(Y))
            .filter(Y => '' !== Y || !!Y)
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
        f && (C.attributes[O3] = ''),
          i &&
            (C.children.push({
              tag: 'title',
              attributes: {
                id: C.attributes['aria-labelledby'] || 'title-'.concat(l || Lc()),
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
            transform: o,
            symbol: r,
            styles: { ...v, ...u.styles },
          },
          { children: E, attributes: k } =
            t.found && n.found
              ? Ut('generateAbstractMask', g) || { children: [], attributes: {} }
              : Ut('generateAbstractIcon', g) || { children: [], attributes: {} };
        return (
          (g.children = E),
          (g.attributes = k),
          r
            ? (function KX(e) {
                let { prefix: n, iconName: t, children: c, attributes: s, symbol: o } = e;
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
                            !0 === o
                              ? ''.concat(n, '-').concat(x.cssPrefix, '-').concat(t)
                              : o,
                        },
                        children: c,
                      },
                    ],
                  },
                ];
              })(g)
            : (function QX(e) {
                let {
                  children: n,
                  main: t,
                  mask: c,
                  attributes: s,
                  styles: o,
                  transform: r,
                } = e;
                if (r7(r) && t.found && !c.found) {
                  const { width: i, height: a } = t,
                    l = { x: i / a / 2, y: 0.5 };
                  s.style = Vo({
                    ...o,
                    'transform-origin': ''
                      .concat(l.x + r.x / 16, 'em ')
                      .concat(l.y + r.y / 16, 'em'),
                  });
                }
                return [{ tag: 'svg', attributes: s, children: n }];
              })(g)
        );
      }
      function yz(e) {
        const {
            content: n,
            width: t,
            height: c,
            transform: s,
            title: o,
            extra: r,
            watchable: i = !1,
          } = e,
          a = { ...r.attributes, ...(o ? { title: o } : {}), class: r.classes.join(' ') };
        i && (a[O3] = '');
        const l = { ...r.styles };
        r7(s) &&
          ((l.transform = (function IX(e) {
            let {
                transform: n,
                width: t = K5,
                height: c = K5,
                startCentered: s = !1,
              } = e,
              o = '';
            return (
              (o +=
                s && $L
                  ? 'translate('
                      .concat(n.x / Vt - t / 2, 'em, ')
                      .concat(n.y / Vt - c / 2, 'em) ')
                  : s
                  ? 'translate(calc(-50% + '
                      .concat(n.x / Vt, 'em), calc(-50% + ')
                      .concat(n.y / Vt, 'em)) ')
                  : 'translate('.concat(n.x / Vt, 'em, ').concat(n.y / Vt, 'em) ')),
              (o += 'scale('
                .concat((n.size / Vt) * (n.flipX ? -1 : 1), ', ')
                .concat((n.size / Vt) * (n.flipY ? -1 : 1), ') ')),
              (o += 'rotate('.concat(n.rotate, 'deg) ')),
              o
            );
          })({ transform: s, startCentered: !0, width: t, height: c })),
          (l['-webkit-transform'] = l.transform));
        const u = Vo(l);
        u.length > 0 && (a.style = u);
        const f = [];
        return (
          f.push({ tag: 'span', attributes: a, children: [n] }),
          o && f.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
          f
        );
      }
      const { styles: C7 } = qe;
      function M7(e) {
        const n = e[0],
          t = e[1],
          [c] = e.slice(4);
        let s = null;
        return (
          (s = Array.isArray(c)
            ? {
                tag: 'g',
                attributes: { class: ''.concat(x.cssPrefix, '-').concat(s7.GROUP) },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(x.cssPrefix, '-').concat(s7.SECONDARY),
                      fill: 'currentColor',
                      d: c[0],
                    },
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(x.cssPrefix, '-').concat(s7.PRIMARY),
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
      const JX = { found: !1, width: 512, height: 512 };
      function v7(e, n) {
        let t = n;
        return (
          'fa' === n && null !== x.styleDefault && (n = jt()),
          new Promise((c, s) => {
            if ('fa' === t) {
              const o = Cz(e) || {};
              (e = o.iconName || e), (n = o.prefix || n);
            }
            if (e && n && C7[n] && C7[n][e]) return c(M7(C7[n][e]));
            (function eJ(e, n) {
              !JL &&
                !x.showMissingIcons &&
                e &&
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(n, '" is missing.'),
                );
            })(e, n),
              c({
                ...JX,
                icon: (x.showMissingIcons && e && Ut('missingIconAbstract')) || {},
              });
          })
        );
      }
      const Lz = () => {},
        y7 =
          x.measurePerformance && Po && Po.mark && Po.measure
            ? Po
            : { mark: Lz, measure: Lz },
        _c = 'FA "6.6.0"',
        zz = e => {
          y7.mark(''.concat(_c, ' ').concat(e, ' ends')),
            y7.measure(
              ''.concat(_c, ' ').concat(e),
              ''.concat(_c, ' ').concat(e, ' begins'),
              ''.concat(_c, ' ').concat(e, ' ends'),
            );
        };
      var L7 = {
        begin: e => (y7.mark(''.concat(_c, ' ').concat(e, ' begins')), () => zz(e)),
        end: zz,
      };
      const $o = () => {};
      function _z(e) {
        return 'string' == typeof (e.getAttribute ? e.getAttribute(O3) : null);
      }
      function oJ(e) {
        return x2.createElementNS('http://www.w3.org/2000/svg', e);
      }
      function rJ(e) {
        return x2.createElement(e);
      }
      function bz(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { ceFn: t = 'svg' === e.tag ? oJ : rJ } = n;
        if ('string' == typeof e) return x2.createTextNode(e);
        const c = t(e.tag);
        return (
          Object.keys(e.attributes || []).forEach(function (o) {
            c.setAttribute(o, e.attributes[o]);
          }),
          (e.children || []).forEach(function (o) {
            c.appendChild(bz(o, { ceFn: t }));
          }),
          c
        );
      }
      const Go = {
        replace: function (e) {
          const n = e[0];
          if (n.parentNode)
            if (
              (e[1].forEach(t => {
                n.parentNode.insertBefore(bz(t), n);
              }),
              null === n.getAttribute(O3) && x.keepOriginalSource)
            ) {
              let t = x2.createComment(
                (function iJ(e) {
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
          if (~o7(n).indexOf(x.replacementClass)) return Go.replace(e);
          const c = new RegExp(''.concat(x.cssPrefix, '-.*'));
          if ((delete t[0].attributes.id, t[0].attributes.class)) {
            const o = t[0].attributes.class
              .split(' ')
              .reduce(
                (r, i) => (
                  i === x.replacementClass || i.match(c)
                    ? r.toSvg.push(i)
                    : r.toNode.push(i),
                  r
                ),
                { toNode: [], toSvg: [] },
              );
            (t[0].attributes.class = o.toSvg.join(' ')),
              0 === o.toNode.length
                ? n.removeAttribute('class')
                : n.setAttribute('class', o.toNode.join(' '));
          }
          const s = t.map(o => zc(o)).join('\n');
          n.setAttribute(O3, ''), (n.innerHTML = s);
        },
      };
      function wz(e) {
        e();
      }
      function Dz(e, n) {
        const t = 'function' == typeof n ? n : $o;
        if (0 === e.length) t();
        else {
          let c = wz;
          x.mutateApproach === gX && (c = Pt.requestAnimationFrame || wz),
            c(() => {
              const s = (function sJ() {
                  return !0 === x.autoReplaceSvg
                    ? Go.replace
                    : Go[x.autoReplaceSvg] || Go.replace;
                })(),
                o = L7.begin('mutate');
              e.map(s), o(), t();
            });
        }
      }
      let z7 = !1;
      function Ez() {
        z7 = !0;
      }
      function _7() {
        z7 = !1;
      }
      let qo = null;
      function Nz(e) {
        if (!HL || !x.observeMutations) return;
        const {
          treeCallback: n = $o,
          nodeCallback: t = $o,
          pseudoElementsCallback: c = $o,
          observeMutationsRoot: s = x2,
        } = e;
        (qo = new HL(o => {
          if (z7) return;
          const r = jt();
          p4(o).forEach(i => {
            if (
              ('childList' === i.type &&
                i.addedNodes.length > 0 &&
                !_z(i.addedNodes[0]) &&
                (x.searchPseudoElements && c(i.target), n(i.target)),
              'attributes' === i.type &&
                i.target.parentNode &&
                x.searchPseudoElements &&
                c(i.target.parentNode),
              'attributes' === i.type && _z(i.target) && ~zX.indexOf(i.attributeName))
            )
              if (
                'class' === i.attributeName &&
                (function nJ(e) {
                  const n = e.getAttribute ? e.getAttribute(J5) : null,
                    t = e.getAttribute ? e.getAttribute(e7) : null;
                  return n && t;
                })(i.target)
              ) {
                const { prefix: a, iconName: l } = Uo(o7(i.target));
                i.target.setAttribute(J5, a || r), l && i.target.setAttribute(e7, l);
              } else
                (function cJ(e) {
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
            qo.observe(s, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
      function xz(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { styleParser: !0 };
        const {
            iconName: t,
            prefix: c,
            rest: s,
          } = (function uJ(e) {
            const n = e.getAttribute('data-prefix'),
              t = e.getAttribute('data-icon'),
              c = void 0 !== e.innerText ? e.innerText.trim() : '';
            let s = Uo(o7(e));
            return (
              s.prefix || (s.prefix = jt()),
              n && t && ((s.prefix = n), (s.iconName = t)),
              (s.iconName && s.prefix) ||
                (s.prefix &&
                  c.length > 0 &&
                  (s.iconName =
                    (function HX(e, n) {
                      return (dz[e] || {})[n];
                    })(s.prefix, e.innerText) || d7(s.prefix, l7(e.innerText))),
                !s.iconName &&
                  x.autoFetchSvg &&
                  e.firstChild &&
                  e.firstChild.nodeType === Node.TEXT_NODE &&
                  (s.iconName = e.firstChild.data)),
              s
            );
          })(e),
          o = (function fJ(e) {
            const n = p4(e.attributes).reduce(
                (s, o) => (
                  'class' !== s.name && 'style' !== s.name && (s[o.name] = o.value), s
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
                      .concat(c || Lc()))
                  : ((n['aria-hidden'] = 'true'), (n.focusable = 'false'))),
              n
            );
          })(e),
          r = p7('parseNodeAttributes', {}, e);
        let i = n.styleParser
          ? (function lJ(e) {
              const n = e.getAttribute('style');
              let t = [];
              return (
                n &&
                  (t = n.split(';').reduce((c, s) => {
                    const o = s.split(':'),
                      r = o[0],
                      i = o.slice(1);
                    return r && i.length > 0 && (c[r] = i.join(':').trim()), c;
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
          transform: Ge,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: s, styles: i, attributes: o },
          ...r,
        };
      }
      const { styles: hJ } = qe;
      function Sz(e) {
        const n = 'nest' === x.autoReplaceSvg ? xz(e, { styleParser: !1 }) : xz(e);
        return ~n.extra.classes.indexOf(nz)
          ? Ut('generateLayersText', e, n)
          : Ut('generateSvgReplacementMutation', e, n);
      }
      let We = new Set();
      function Iz(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!dt) return Promise.resolve();
        const t = x2.documentElement.classList,
          c = u => t.add(''.concat(XL, '-').concat(u)),
          s = u => t.remove(''.concat(XL, '-').concat(u)),
          o = x.autoFetchSvg ? We : ez.map(u => 'fa-'.concat(u)).concat(Object.keys(hJ));
        o.includes('fa') || o.push('fa');
        const r = ['.'.concat(nz, ':not([').concat(O3, '])')]
          .concat(o.map(u => '.'.concat(u, ':not([').concat(O3, '])')))
          .join(', ');
        if (0 === r.length) return Promise.resolve();
        let i = [];
        try {
          i = p4(e.querySelectorAll(r));
        } catch {}
        if (!(i.length > 0)) return Promise.resolve();
        c('pending'), s('complete');
        const a = L7.begin('onTree'),
          l = i.reduce((u, f) => {
            try {
              const d = Sz(f);
              d && u.push(d);
            } catch (d) {
              JL || ('MissingIcon' === d.name && console.error(d));
            }
            return u;
          }, []);
        return new Promise((u, f) => {
          Promise.all(l)
            .then(d => {
              Dz(d, () => {
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
      function pJ(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        Sz(e).then(t => {
          t && Dz([t], n);
        });
      }
      ez.map(e => {
        We.add('fa-'.concat(e));
      }),
        Object.keys(F3[k2]).map(We.add.bind(We)),
        Object.keys(F3[K1]).map(We.add.bind(We)),
        Object.keys(F3[X1]).map(We.add.bind(We)),
        (We = [...We]);
      const gJ = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          transform: t = Ge,
          symbol: c = !1,
          mask: s = null,
          maskId: o = null,
          title: r = null,
          titleId: i = null,
          classes: a = [],
          attributes: l = {},
          styles: u = {},
        } = n;
        if (!e) return;
        const { prefix: f, iconName: d, icon: h } = e;
        return Ho(
          { type: 'icon', ...e },
          () => (
            B3('beforeDOMElementCreation', { iconDefinition: e, params: n }),
            x.autoA11y &&
              (r
                ? (l['aria-labelledby'] = ''
                    .concat(x.replacementClass, '-title-')
                    .concat(i || Lc()))
                : ((l['aria-hidden'] = 'true'), (l.focusable = 'false'))),
            g7({
              icons: {
                main: M7(h),
                mask: s ? M7(s.icon) : { found: !1, width: null, height: null, icon: {} },
              },
              prefix: f,
              iconName: d,
              transform: { ...Ge, ...t },
              symbol: c,
              title: r,
              maskId: o,
              titleId: i,
              extra: { attributes: l, styles: u, classes: a },
            })
          ),
        );
      };
      var CJ = {
          mixout() {
            return {
              icon:
                ((e = gJ),
                function (n) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  const c = (n || {}).icon ? n : m7(n || {});
                  let { mask: s } = t;
                  return (
                    s && (s = (s || {}).icon ? s : m7(s || {})), e(c, { ...t, mask: s })
                  );
                }),
            };
            var e;
          },
          hooks: () => ({
            mutationObserverCallbacks: e => (
              (e.treeCallback = Iz), (e.nodeCallback = pJ), e
            ),
          }),
          provides(e) {
            (e.i2svg = function (n) {
              const { node: t = x2, callback: c = () => {} } = n;
              return Iz(t, c);
            }),
              (e.generateSvgReplacementMutation = function (n, t) {
                const {
                  iconName: c,
                  title: s,
                  titleId: o,
                  prefix: r,
                  transform: i,
                  symbol: a,
                  mask: l,
                  maskId: u,
                  extra: f,
                } = t;
                return new Promise((d, h) => {
                  Promise.all([
                    v7(c, r),
                    l.iconName
                      ? v7(l.iconName, l.prefix)
                      : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
                  ])
                    .then(p => {
                      let [m, C] = p;
                      d([
                        n,
                        g7({
                          icons: { main: m, mask: C },
                          prefix: r,
                          iconName: c,
                          transform: i,
                          symbol: a,
                          maskId: u,
                          title: s,
                          titleId: o,
                          extra: f,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(h);
                });
              }),
              (e.generateAbstractIcon = function (n) {
                let { children: t, attributes: c, main: s, transform: o, styles: r } = n;
                const i = Vo(r);
                let a;
                return (
                  i.length > 0 && (c.style = i),
                  r7(o) &&
                    (a = Ut('generateAbstractTransformGrouping', {
                      main: s,
                      transform: o,
                      containerWidth: s.width,
                      iconWidth: s.width,
                    })),
                  t.push(a || s.icon),
                  { children: t, attributes: c }
                );
              });
          },
        },
        MJ = {
          mixout: () => ({
            layer(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const { classes: t = [] } = n;
              return Ho({ type: 'layer' }, () => {
                B3('beforeDOMElementCreation', { assembler: e, params: n });
                let c = [];
                return (
                  e(s => {
                    Array.isArray(s)
                      ? s.map(o => {
                          c = c.concat(o.abstract);
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
        vJ = {
          mixout: () => ({
            counter(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const {
                title: t = null,
                classes: c = [],
                attributes: s = {},
                styles: o = {},
              } = n;
              return Ho(
                { type: 'counter', content: e },
                () => (
                  B3('beforeDOMElementCreation', { content: e, params: n }),
                  (function XX(e) {
                    const { content: n, title: t, extra: c } = e,
                      s = {
                        ...c.attributes,
                        ...(t ? { title: t } : {}),
                        class: c.classes.join(' '),
                      },
                      o = Vo(c.styles);
                    o.length > 0 && (s.style = o);
                    const r = [];
                    return (
                      r.push({ tag: 'span', attributes: s, children: [n] }),
                      t &&
                        r.push({
                          tag: 'span',
                          attributes: { class: 'sr-only' },
                          children: [t],
                        }),
                      r
                    );
                  })({
                    content: e.toString(),
                    title: t,
                    extra: {
                      attributes: s,
                      styles: o,
                      classes: [''.concat(x.cssPrefix, '-layers-counter'), ...c],
                    },
                  })
                ),
              );
            },
          }),
        },
        yJ = {
          mixout: () => ({
            text(e) {
              let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              const {
                transform: t = Ge,
                title: c = null,
                classes: s = [],
                attributes: o = {},
                styles: r = {},
              } = n;
              return Ho(
                { type: 'text', content: e },
                () => (
                  B3('beforeDOMElementCreation', { content: e, params: n }),
                  yz({
                    content: e,
                    transform: { ...Ge, ...t },
                    title: c,
                    extra: {
                      attributes: o,
                      styles: r,
                      classes: [''.concat(x.cssPrefix, '-layers-text'), ...s],
                    },
                  })
                ),
              );
            },
          }),
          provides(e) {
            e.generateLayersText = function (n, t) {
              const { title: c, transform: s, extra: o } = t;
              let r = null,
                i = null;
              if ($L) {
                const a = parseInt(getComputedStyle(n).fontSize, 10),
                  l = n.getBoundingClientRect();
                (r = l.width / a), (i = l.height / a);
              }
              return (
                x.autoA11y && !c && (o.attributes['aria-hidden'] = 'true'),
                Promise.resolve([
                  n,
                  yz({
                    content: n.innerHTML,
                    width: r,
                    height: i,
                    transform: s,
                    title: c,
                    extra: o,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        };
      const LJ = new RegExp('"', 'ug'),
        Az = [1105920, 1112319],
        Tz = {
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
        b7 = Object.keys(Tz).reduce((e, n) => ((e[n.toLowerCase()] = Tz[n]), e), {}),
        zJ = Object.keys(b7).reduce((e, n) => {
          const t = b7[n];
          return (e[n] = t[900] || [...Object.entries(t)][0][1]), e;
        }, {});
      function kz(e, n) {
        const t = ''.concat(mX).concat(n.replace(':', '-'));
        return new Promise((c, s) => {
          if (null !== e.getAttribute(t)) return c();
          const r = p4(e.children).filter(d => d.getAttribute(X5) === n)[0],
            i = Pt.getComputedStyle(e, n),
            a = i.getPropertyValue('font-family'),
            l = a.match(yX),
            u = i.getPropertyValue('font-weight'),
            f = i.getPropertyValue('content');
          if (r && !l) return e.removeChild(r), c();
          if (l && 'none' !== f && '' !== f) {
            const d = i.getPropertyValue('content');
            let h = (function bJ(e, n) {
              const t = e.replace(/^['"]|['"]$/g, '').toLowerCase(),
                c = parseInt(n),
                s = isNaN(c) ? 'normal' : c;
              return (b7[t] || {})[s] || zJ[t];
            })(a, u);
            const { value: p, isSecondary: m } = (function _J(e) {
                const n = e.replace(LJ, ''),
                  t = (function FX(e, n) {
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
                  c = t >= Az[0] && t <= Az[1],
                  s = 2 === n.length && n[0] === n[1];
                return { value: l7(s ? n[0] : n), isSecondary: c || s };
              })(d),
              C = l[0].startsWith('FontAwesome');
            let v = d7(h, p),
              g = v;
            if (C) {
              const E = (function $X(e) {
                const n = pz[e],
                  t = d7('fas', e);
                return (
                  n ||
                  (t ? { prefix: 'fas', iconName: t } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(p);
              E.iconName && E.prefix && ((v = E.iconName), (h = E.prefix));
            }
            if (!v || m || (r && r.getAttribute(J5) === h && r.getAttribute(e7) === g))
              c();
            else {
              e.setAttribute(t, g), r && e.removeChild(r);
              const E = (function dJ() {
                  return {
                    iconName: null,
                    title: null,
                    titleId: null,
                    prefix: null,
                    transform: Ge,
                    symbol: !1,
                    mask: { iconName: null, prefix: null, rest: [] },
                    maskId: null,
                    extra: { classes: [], styles: {}, attributes: {} },
                  };
                })(),
                { extra: k } = E;
              (k.attributes[X5] = n),
                v7(v, h)
                  .then(Y => {
                    const v2 = g7({
                        ...E,
                        icons: { main: Y, mask: h7() },
                        prefix: h,
                        iconName: g,
                        extra: k,
                        watchable: !0,
                      }),
                      c1 = x2.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    '::before' === n
                      ? e.insertBefore(c1, e.firstChild)
                      : e.appendChild(c1),
                      (c1.outerHTML = v2.map(Wt => zc(Wt)).join('\n')),
                      e.removeAttribute(t),
                      c();
                  })
                  .catch(s);
            }
          } else c();
        });
      }
      function wJ(e) {
        return Promise.all([kz(e, '::before'), kz(e, '::after')]);
      }
      function DJ(e) {
        return !(
          e.parentNode === document.head ||
          ~CX.indexOf(e.tagName.toUpperCase()) ||
          e.getAttribute(X5) ||
          (e.parentNode && 'svg' === e.parentNode.tagName)
        );
      }
      function Rz(e) {
        if (dt)
          return new Promise((n, t) => {
            const c = p4(e.querySelectorAll('*')).filter(DJ).map(wJ),
              s = L7.begin('searchPseudoElements');
            Ez(),
              Promise.all(c)
                .then(() => {
                  s(), _7(), n();
                })
                .catch(() => {
                  s(), _7(), t();
                });
          });
      }
      let Oz = !1;
      const Fz = e =>
          e
            .toLowerCase()
            .split(' ')
            .reduce(
              (t, c) => {
                const s = c.toLowerCase().split('-'),
                  o = s[0];
                let r = s.slice(1).join('-');
                if (o && 'h' === r) return (t.flipX = !0), t;
                if (o && 'v' === r) return (t.flipY = !0), t;
                if (((r = parseFloat(r)), isNaN(r))) return t;
                switch (o) {
                  case 'grow':
                    t.size = t.size + r;
                    break;
                  case 'shrink':
                    t.size = t.size - r;
                    break;
                  case 'left':
                    t.x = t.x - r;
                    break;
                  case 'right':
                    t.x = t.x + r;
                    break;
                  case 'up':
                    t.y = t.y - r;
                    break;
                  case 'down':
                    t.y = t.y + r;
                    break;
                  case 'rotate':
                    t.rotate = t.rotate + r;
                }
                return t;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
            ),
        w7 = { x: 0, y: 0, width: '100%', height: '100%' };
      function Pz(e) {
        return (
          e.attributes &&
            (e.attributes.fill ||
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1]) &&
            (e.attributes.fill = 'black'),
          e
        );
      }
      function SJ(e) {
        return 'g' === e.tag ? e.children : [e];
      }
      !(function YX(e, n) {
        let { mixoutsTo: t } = n;
        (Mz = e),
          (m4 = {}),
          Object.keys(g4).forEach(c => {
            -1 === WX.indexOf(c) && delete g4[c];
          }),
          Mz.forEach(c => {
            const s = c.mixout ? c.mixout() : {};
            if (
              (Object.keys(s).forEach(o => {
                'function' == typeof s[o] && (t[o] = s[o]),
                  'object' == typeof s[o] &&
                    Object.keys(s[o]).forEach(r => {
                      t[o] || (t[o] = {}), (t[o][r] = s[o][r]);
                    });
              }),
              c.hooks)
            ) {
              const o = c.hooks();
              Object.keys(o).forEach(r => {
                m4[r] || (m4[r] = []), m4[r].push(o[r]);
              });
            }
            c.provides && c.provides(g4);
          });
      })(
        [
          TX,
          CJ,
          MJ,
          vJ,
          yJ,
          {
            hooks: () => ({
              mutationObserverCallbacks: e => ((e.pseudoElementsCallback = Rz), e),
            }),
            provides(e) {
              e.pseudoElements2svg = function (n) {
                const { node: t = x2 } = n;
                x.searchPseudoElements && Rz(t);
              };
            },
          },
          {
            mixout: () => ({
              dom: {
                unwatch() {
                  Ez(), (Oz = !0);
                },
              },
            }),
            hooks: () => ({
              bootstrap() {
                Nz(p7('mutationObserverCallbacks', {}));
              },
              noAuto() {
                !(function aJ() {
                  qo && qo.disconnect();
                })();
              },
              watch(e) {
                const { observeMutationsRoot: n } = e;
                Oz
                  ? _7()
                  : Nz(p7('mutationObserverCallbacks', { observeMutationsRoot: n }));
              },
            }),
          },
          {
            mixout: () => ({ parse: { transform: e => Fz(e) } }),
            hooks: () => ({
              parseNodeAttributes(e, n) {
                const t = n.getAttribute('data-fa-transform');
                return t && (e.transform = Fz(t)), e;
              },
            }),
            provides(e) {
              e.generateAbstractTransformGrouping = function (n) {
                let { main: t, transform: c, containerWidth: s, iconWidth: o } = n;
                const r = { transform: 'translate('.concat(s / 2, ' 256)') },
                  i = 'translate('.concat(32 * c.x, ', ').concat(32 * c.y, ') '),
                  a = 'scale('
                    .concat((c.size / 16) * (c.flipX ? -1 : 1), ', ')
                    .concat((c.size / 16) * (c.flipY ? -1 : 1), ') '),
                  l = 'rotate('.concat(c.rotate, ' 0 0)'),
                  u = { transform: ''.concat(i, ' ').concat(a, ' ').concat(l) },
                  f = { transform: 'translate('.concat((o / 2) * -1, ' -256)') };
                return {
                  tag: 'g',
                  attributes: { ...r },
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
                  c = t ? Uo(t.split(' ').map(s => s.trim())) : h7();
                return (
                  c.prefix || (c.prefix = jt()),
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
                  mask: o,
                  maskId: r,
                  transform: i,
                } = n;
                const { width: a, icon: l } = s,
                  { width: u, icon: f } = o,
                  d = (function SX(e) {
                    let { transform: n, containerWidth: t, iconWidth: c } = e;
                    const s = { transform: 'translate('.concat(t / 2, ' 256)') },
                      o = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') '),
                      r = 'scale('
                        .concat((n.size / 16) * (n.flipX ? -1 : 1), ', ')
                        .concat((n.size / 16) * (n.flipY ? -1 : 1), ') '),
                      i = 'rotate('.concat(n.rotate, ' 0 0)');
                    return {
                      outer: s,
                      inner: { transform: ''.concat(o, ' ').concat(r, ' ').concat(i) },
                      path: { transform: 'translate('.concat((c / 2) * -1, ' -256)') },
                    };
                  })({ transform: i, containerWidth: u, iconWidth: a }),
                  h = { tag: 'rect', attributes: { ...w7, fill: 'white' } },
                  p = l.children ? { children: l.children.map(Pz) } : {},
                  m = {
                    tag: 'g',
                    attributes: { ...d.inner },
                    children: [
                      Pz({
                        tag: l.tag,
                        attributes: { ...l.attributes, ...d.path },
                        ...p,
                      }),
                    ],
                  },
                  C = { tag: 'g', attributes: { ...d.outer }, children: [m] },
                  v = 'mask-'.concat(r || Lc()),
                  g = 'clip-'.concat(r || Lc()),
                  E = {
                    tag: 'mask',
                    attributes: {
                      ...w7,
                      id: v,
                      maskUnits: 'userSpaceOnUse',
                      maskContentUnits: 'userSpaceOnUse',
                    },
                    children: [h, C],
                  },
                  k = {
                    tag: 'defs',
                    children: [
                      { tag: 'clipPath', attributes: { id: g }, children: SJ(f) },
                      E,
                    ],
                  };
                return (
                  t.push(k, {
                    tag: 'rect',
                    attributes: {
                      fill: 'currentColor',
                      'clip-path': 'url(#'.concat(g, ')'),
                      mask: 'url(#'.concat(v, ')'),
                      ...w7,
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
              Pt.matchMedia &&
                (n = Pt.matchMedia('(prefers-reduced-motion: reduce)').matches),
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
                  const o = { ...s, attributeName: 'opacity' },
                    r = {
                      tag: 'circle',
                      attributes: { ...c, cx: '256', cy: '364', r: '28' },
                      children: [],
                    };
                  return (
                    n ||
                      r.children.push(
                        {
                          tag: 'animate',
                          attributes: {
                            ...s,
                            attributeName: 'r',
                            values: '28;14;28;28;14;28;',
                          },
                        },
                        { tag: 'animate', attributes: { ...o, values: '1;0;1;1;0;1;' } },
                      ),
                    t.push(r),
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
                              attributes: { ...o, values: '1;0;0;0;0;1;' },
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
                            attributes: { ...o, values: '0;0;1;1;0;0;' },
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
        { mixoutsTo: J1 },
      );
      const RJ = J1.config,
        OJ = J1.dom,
        FJ = J1.parse,
        PJ = J1.icon,
        VJ = ['*'],
        UJ = e => {
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
        D7 = new WeakSet(),
        Vz = 'fa-auto-css';
      let qJ = (() => {
          class e {
            constructor() {
              (this.defaultPrefix = 'fas'),
                (this.fallbackIcon = null),
                (this._autoAddCss = !0);
            }
            set autoAddCss(t) {
              (RJ.autoAddCss = t), (this._autoAddCss = t);
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
        WJ = (() => {
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
                const s = Object.keys(c).map(o => c[o]);
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
        YJ = (() => {
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
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [
                ['fa-icon', 'stackItemSize', ''],
                ['fa-duotone-icon', 'stackItemSize', ''],
              ],
              inputs: { stackItemSize: 'stackItemSize', size: 'size' },
              standalone: !0,
              features: [g1],
            }));
          }
          return e;
        })(),
        ZJ = (() => {
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
              return new (c || e)(z(Te), z(A1));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['fa-stack']],
              inputs: { size: 'size' },
              standalone: !0,
              features: [g1, q],
              ngContentSelectors: VJ,
              decls: 1,
              vars: 0,
              template: function (c, s) {
                1 & c && (z3(), _3(0));
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        QJ = (() => {
          class e {
            constructor(t, c, s, o, r) {
              (this.sanitizer = t),
                (this.config = c),
                (this.iconLibrary = s),
                (this.stackItem = o),
                (this.document = y(F1)),
                null != r &&
                  null == o &&
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
                    !(function HJ(e, n) {
                      if (!n.autoAddCss || D7.has(e)) return;
                      if (null != e.getElementById(Vz))
                        return (n.autoAddCss = !1), void D7.add(e);
                      const t = e.createElement('style');
                      t.setAttribute('type', 'text/css'),
                        t.setAttribute('id', Vz),
                        (t.innerHTML = OJ.css());
                      const c = e.head.childNodes;
                      let s = null;
                      for (let o = c.length - 1; o > -1; o--) {
                        const r = c[o],
                          i = r.nodeName.toUpperCase();
                        ['STYLE', 'LINK'].indexOf(i) > -1 && (s = r);
                      }
                      e.head.insertBefore(t, s), (n.autoAddCss = !1), D7.add(e);
                    })(this.document, this.config);
                    const o = PJ(c, s);
                    this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(
                      o.html.join('\n'),
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
                    ? FJ.transform(this.transform)
                    : this.transform;
              return {
                title: this.title,
                transform: c,
                classes: UJ(t),
                mask: null != this.mask ? this.findIconDefinition(this.mask) : null,
                symbol: this.symbol,
                attributes: { role: this.a11yRole },
              };
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(_v), z(qJ), z(WJ), z(YJ, 8), z(ZJ, 8));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['fa-icon']],
              hostAttrs: [1, 'ng-fa-icon'],
              hostVars: 2,
              hostBindings: function (c, s) {
                2 & c && ($8('innerHTML', s.renderedIconHTML, nh), ge('title', s.title));
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
              features: [g1, q],
              decls: 0,
              vars: 0,
              template: function (c, s) {},
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        KJ = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = J3({ type: e }));
            static #n = (this.ɵinj = Kt({}));
          }
          return e;
        })();
      const X_ = {
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
        bb = {
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
        bN = {
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
      let _C2 = (() => {
        class e extends Z5 {
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
                return X_;
              case 'play':
                return bN;
              case 'star':
                return bb;
              default:
                throw new Error(FL('font awesome'));
            }
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)(z(A2));
          });
          static #t = (this.ɵcmp = $({
            type: e,
            selectors: [['lib-font-awesome']],
            inputs: { type: 'type', color: 'color', size: 'size' },
            standalone: !0,
            features: [n2, q],
            decls: 1,
            vars: 3,
            consts: [[3, 'icon', 'size', 'ngClass']],
            template: function (c, s) {
              1 & c && d2(0, 'fa-icon', 0),
                2 & c &&
                  D('icon', s.getFontAwesomeIcon())('size', s.size)(
                    'ngClass',
                    s.classNames,
                  );
            },
            dependencies: [Ve, Xn, KJ, QJ],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.font-awesome__gray[_ngcontent-%COMP%]{color:#b2b2b2}.font-awesome__green[_ngcontent-%COMP%]{color:#22b24c}.font-awesome__gold[_ngcontent-%COMP%]{color:#ffb22c}',
            ],
          }));
        }
        return e;
      })();
      const bC2 = ['*'];
      let C4 = (() => {
          class e extends Z5 {
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-flex']],
              inputs: {
                flexDirection: 'flexDirection',
                alignItems: 'alignItems',
                justifyContent: 'justifyContent',
                gap: 'gap',
              },
              standalone: !0,
              features: [n2, q],
              ngContentSelectors: bC2,
              decls: 2,
              vars: 2,
              consts: [[1, 'flex', 3, 'ngClass', 'ngStyle']],
              template: function (c, s) {
                1 & c && (z3(), O(0, 'div', 0), _3(1), F()),
                  2 & c && D('ngClass', s.classNames)('ngStyle', s.buildStyles());
              },
              dependencies: [Ve, Xn, Rl],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;height:100%}.flex__gap--none[_ngcontent-%COMP%]{gap:0}.flex__gap--small[_ngcontent-%COMP%]{gap:.5rem}.flex__gap--medium[_ngcontent-%COMP%]{gap:1rem}.flex__gap--large[_ngcontent-%COMP%]{gap:2rem}',
              ],
            }));
          }
          return e;
        })(),
        wC2 = (() => {
          class e extends Fo {
            constructor(t) {
              super(t, 'course'),
                (this.injector = t),
                (this.taskId = ''),
                (this.type = 'lock'),
                (this.color = 'gray');
            }
            onClick() {
              this.onEvent(this.taskId);
            }
            onStoreChange(t) {
              const c = t.tasks.get(this.taskId);
              if (!c)
                throw new Error(
                  (() => `Not found ${this.taskId} in the course store!`)(),
                );
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
                  throw new Error(FL('font awesome'));
              }
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(A2));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-task-marker']],
              inputs: { taskId: 'taskId' },
              standalone: !0,
              features: [n2, q],
              decls: 3,
              vars: 3,
              consts: [
                [1, 'task-marker', 3, 'click', 'ngClass'],
                ['alignItems', 'center', 'justifyContent', 'center'],
                ['size', '3x', 3, 'type', 'color'],
              ],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'div', 0),
                  G('click', function () {
                    return s.onClick();
                  }),
                  O(1, 'lib-flex', 1),
                  d2(2, 'lib-font-awesome', 2),
                  F()()),
                  2 & c &&
                    (D('ngClass', s.classNames),
                    I(2),
                    D('type', s.type)('color', s.color));
              },
              dependencies: [Ve, Xn, C4, _C2],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.task-marker[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:100%;cursor:pointer}.task-marker__blocked[_ngcontent-%COMP%]{background-color:#7f7f7f;box-shadow:0 .5rem #7f7f7f;border:.5rem solid #b2b2b2}.task-marker__blocked[_ngcontent-%COMP%]:active{transform:translateY(.25rem);box-shadow:0 .25rem #7f7f7f}.task-marker__active[_ngcontent-%COMP%]{background-color:#125c27;box-shadow:0 .5rem #125c27;border:.5rem solid #22b24c}.task-marker__active[_ngcontent-%COMP%]:active{transform:translateY(.25rem);box-shadow:0 .25rem #125c27}.task-marker__done[_ngcontent-%COMP%]{background-color:#c57d00;box-shadow:0 .5rem #c57d00;border:.5rem solid #ffb22c}.task-marker__done[_ngcontent-%COMP%]:active{transform:translateY(.25rem);box-shadow:0 .25rem #c57d00}',
              ],
            }));
          }
          return e;
        })();
      function DC2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'div', 1)(2, 'lib-task-marker', 2),
            G('event', function (s) {
              return M1(t), v1(e2().onClick(s));
            }),
            F()(),
            b2();
        }
        if (2 & e) {
          const t = n.$implicit,
            c = n.index,
            s = e2();
          I(), D('ngStyle', s.getWaveMarkerPosX(c)), I(), D('taskId', t);
        }
      }
      let EC2 = (() => {
          class e extends Fo {
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
              this.amplitude = c === d1.XSmall ? 80 : 200;
            }
            onClick(t) {
              this.onEvent(t);
            }
            getWaveMarkerPosX(t) {
              return {
                transform: `translateX(${
                  Math.sin(t * this.frequency) * this.amplitude
                }px)`,
              };
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(A2), z(x5));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-task-wave']],
              inputs: { taskIds: 'taskIds' },
              standalone: !0,
              features: [n2, q],
              decls: 1,
              vars: 1,
              consts: [
                [4, 'ngFor', 'ngForOf'],
                [3, 'ngStyle'],
                [3, 'event', 'taskId'],
              ],
              template: function (c, s) {
                1 & c && W1(0, DC2, 3, 2, 'ng-container', 0),
                  2 & c && D('ngForOf', s.taskIds);
              },
              dependencies: [Ve, Tl, Rl, wC2],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}[_nghost-%COMP%]{display:contents}',
              ],
            }));
          }
          return e;
        })(),
        NC2 = (() => {
          class e extends Fo {
            constructor(t) {
              super(t, 'course'),
                (this.injector = t),
                (this.taskIds = []),
                (this.typeConverter = this.injector.get(KK));
            }
            onStoreChange(t) {
              this.taskIds = this.typeConverter
                .convertMapToArray(t.tasks)
                .sort((c, s) => c.order - s.order)
                .map(c => c.id);
            }
            onClick(t) {
              this.onEvent(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(A2));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-task-roadmap']],
              standalone: !0,
              features: [n2, q],
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
                  (O(0, 'lib-flex', 0)(1, 'lib-task-wave', 1),
                  G('event', function (r) {
                    return s.onClick(r);
                  }),
                  F()()),
                  2 & c && (I(), D('taskIds', s.taskIds));
              },
              dependencies: [Ve, C4, EC2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        CS = (() => {
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
              return new (c || e)(z(Te), z(A1));
            });
            static #t = (this.ɵdir = P({ type: e }));
          }
          return e;
        })(),
        j3 = (() => {
          class e extends CS {
            static #e = (this.ɵfac = (() => {
              let t;
              return function (s) {
                return (t || (t = q2(e)))(s || e);
              };
            })());
            static #t = (this.ɵdir = P({ type: e, features: [n2] }));
          }
          return e;
        })();
      const Ye = new _(''),
        IC2 = { provide: Ye, useExisting: y2(() => lr), multi: !0 },
        TC2 = new _('');
      let lr = (() => {
        class e extends CS {
          constructor(t, c, s) {
            super(t, c),
              (this._compositionMode = s),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function AC2() {
                  const e = Tt() ? Tt().getUserAgent() : '';
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
            return new (c || e)(z(Te), z(A1), z(TC2, 8));
          });
          static #t = (this.ɵdir = P({
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
                G('input', function (r) {
                  return s._handleInput(r.target.value);
                })('blur', function () {
                  return s.onTouched();
                })('compositionstart', function () {
                  return s._compositionStart();
                })('compositionend', function (r) {
                  return s._compositionEnd(r.target.value);
                });
            },
            features: [T2([IC2]), n2],
          }));
        }
        return e;
      })();
      function Ht(e) {
        return (
          null == e || (('string' == typeof e || Array.isArray(e)) && 0 === e.length)
        );
      }
      function vS(e) {
        return null != e && 'number' == typeof e.length;
      }
      const h1 = new _(''),
        $t = new _(''),
        kC2 =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class re {
        static min(n) {
          return (function yS(e) {
            return n => {
              if (Ht(n.value) || Ht(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t < e ? { min: { min: e, actual: n.value } } : null;
            };
          })(n);
        }
        static max(n) {
          return (function LS(e) {
            return n => {
              if (Ht(n.value) || Ht(e)) return null;
              const t = parseFloat(n.value);
              return !isNaN(t) && t > e ? { max: { max: e, actual: n.value } } : null;
            };
          })(n);
        }
        static required(n) {
          return (function zS(e) {
            return Ht(e.value) ? { required: !0 } : null;
          })(n);
        }
        static requiredTrue(n) {
          return (function _S(e) {
            return !0 === e.value ? null : { required: !0 };
          })(n);
        }
        static email(n) {
          return (function bS(e) {
            return Ht(e.value) || kC2.test(e.value) ? null : { email: !0 };
          })(n);
        }
        static minLength(n) {
          return (function wS(e) {
            return n =>
              Ht(n.value) || !vS(n.value)
                ? null
                : n.value.length < e
                ? { minlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static maxLength(n) {
          return (function DS(e) {
            return n =>
              vS(n.value) && n.value.length > e
                ? { maxlength: { requiredLength: e, actualLength: n.value.length } }
                : null;
          })(n);
        }
        static pattern(n) {
          return (function ES(e) {
            if (!e) return ur;
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
                if (Ht(c.value)) return null;
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
          return TS(n);
        }
        static composeAsync(n) {
          return kS(n);
        }
      }
      function ur(e) {
        return null;
      }
      function NS(e) {
        return null != e;
      }
      function xS(e) {
        return F0(e) ? f1(e) : e;
      }
      function SS(e) {
        let n = {};
        return (
          e.forEach(t => {
            n = null != t ? { ...n, ...t } : n;
          }),
          0 === Object.keys(n).length ? null : n
        );
      }
      function IS(e, n) {
        return n.map(t => t(e));
      }
      function AS(e) {
        return e.map(n =>
          (function RC2(e) {
            return !e.validate;
          })(n)
            ? n
            : t => n.validate(t),
        );
      }
      function TS(e) {
        if (!e) return null;
        const n = e.filter(NS);
        return 0 == n.length
          ? null
          : function (t) {
              return SS(IS(t, n));
            };
      }
      function M9(e) {
        return null != e ? TS(AS(e)) : null;
      }
      function kS(e) {
        if (!e) return null;
        const n = e.filter(NS);
        return 0 == n.length
          ? null
          : function (t) {
              return (function xC2(...e) {
                const n = e5(e),
                  { args: t, keys: c } = Bv(e),
                  s = new O2(o => {
                    const { length: r } = t;
                    if (!r) return void o.complete();
                    const i = new Array(r);
                    let a = r,
                      l = r;
                    for (let u = 0; u < r; u++) {
                      let f = !1;
                      Le(t[u]).subscribe(
                        R2(
                          o,
                          d => {
                            f || ((f = !0), l--), (i[u] = d);
                          },
                          () => a--,
                          void 0,
                          () => {
                            (!a || !f) && (l || o.next(c ? Uv(c, i) : i), o.complete());
                          },
                        ),
                      );
                    }
                  });
                return n ? s.pipe(jv(n)) : s;
              })(IS(t, n).map(xS)).pipe(s2(SS));
            };
      }
      function v9(e) {
        return null != e ? kS(AS(e)) : null;
      }
      function RS(e, n) {
        return null === e ? [n] : Array.isArray(e) ? [...e, n] : [e, n];
      }
      function OS(e) {
        return e._rawValidators;
      }
      function FS(e) {
        return e._rawAsyncValidators;
      }
      function y9(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function fr(e, n) {
        return Array.isArray(e) ? e.includes(n) : e === n;
      }
      function PS(e, n) {
        const t = y9(n);
        return (
          y9(e).forEach(s => {
            fr(t, s) || t.push(s);
          }),
          t
        );
      }
      function VS(e, n) {
        return y9(n).filter(t => !fr(e, t));
      }
      class BS {
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
            (this._composedValidatorFn = M9(this._rawValidators));
        }
        _setAsyncValidators(n) {
          (this._rawAsyncValidators = n || []),
            (this._composedAsyncValidatorFn = v9(this._rawAsyncValidators));
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
      class N1 extends BS {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Gt extends BS {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class jS {
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
      let US = (() => {
          class e extends jS {
            constructor(t) {
              super(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Gt, 2));
            });
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (c, s) {
                2 & c &&
                  vs('ng-untouched', s.isUntouched)('ng-touched', s.isTouched)(
                    'ng-pristine',
                    s.isPristine,
                  )('ng-dirty', s.isDirty)('ng-valid', s.isValid)(
                    'ng-invalid',
                    s.isInvalid,
                  )('ng-pending', s.isPending);
              },
              features: [n2],
            }));
          }
          return e;
        })(),
        HS = (() => {
          class e extends jS {
            constructor(t) {
              super(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(N1, 10));
            });
            static #t = (this.ɵdir = P({
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
                  vs('ng-untouched', s.isUntouched)('ng-touched', s.isTouched)(
                    'ng-pristine',
                    s.isPristine,
                  )('ng-dirty', s.isDirty)('ng-valid', s.isValid)(
                    'ng-invalid',
                    s.isInvalid,
                  )('ng-pending', s.isPending)('ng-submitted', s.isSubmitted);
              },
              features: [n2],
            }));
          }
          return e;
        })();
      const xc = 'VALID',
        hr = 'INVALID',
        M4 = 'PENDING',
        Sc = 'DISABLED';
      class v4 {}
      class GS extends v4 {
        constructor(n, t) {
          super(), (this.value = n), (this.source = t);
        }
      }
      class _9 extends v4 {
        constructor(n, t) {
          super(), (this.pristine = n), (this.source = t);
        }
      }
      class b9 extends v4 {
        constructor(n, t) {
          super(), (this.touched = n), (this.source = t);
        }
      }
      class pr extends v4 {
        constructor(n, t) {
          super(), (this.status = n), (this.source = t);
        }
      }
      class BC2 extends v4 {
        constructor(n) {
          super(), (this.source = n);
        }
      }
      class jC2 extends v4 {
        constructor(n) {
          super(), (this.source = n);
        }
      }
      function w9(e) {
        return (mr(e) ? e.validators : e) || null;
      }
      function D9(e, n) {
        return (mr(n) ? n.asyncValidators : e) || null;
      }
      function mr(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function qS(e, n, t) {
        const c = e.controls;
        if (!(n ? Object.keys(c) : c).length) throw new L(1e3, '');
        if (!c[t]) throw new L(1001, '');
      }
      function WS(e, n, t) {
        e._forEachChild((c, s) => {
          if (void 0 === t[s]) throw new L(1002, '');
        });
      }
      class gr {
        constructor(n, t) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = null),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this._status = w3(() => this.statusReactive())),
            (this.statusReactive = Dt(void 0)),
            (this._pristine = w3(() => this.pristineReactive())),
            (this.pristineReactive = Dt(!0)),
            (this._touched = w3(() => this.touchedReactive())),
            (this.touchedReactive = Dt(!1)),
            (this._events = new p1()),
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
          return this.status === xc;
        }
        get invalid() {
          return this.status === hr;
        }
        get pending() {
          return this.status == M4;
        }
        get disabled() {
          return this.status === Sc;
        }
        get enabled() {
          return this.status !== Sc;
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
          this.setValidators(PS(n, this._rawValidators));
        }
        addAsyncValidators(n) {
          this.setAsyncValidators(PS(n, this._rawAsyncValidators));
        }
        removeValidators(n) {
          this.setValidators(VS(n, this._rawValidators));
        }
        removeAsyncValidators(n) {
          this.setAsyncValidators(VS(n, this._rawAsyncValidators));
        }
        hasValidator(n) {
          return fr(this._rawValidators, n);
        }
        hasAsyncValidator(n) {
          return fr(this._rawAsyncValidators, n);
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
            t && !1 !== n.emitEvent && this._events.next(new b9(!0, c));
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
            t && !1 !== n.emitEvent && this._events.next(new b9(!1, c));
        }
        markAsDirty(n = {}) {
          const t = !0 === this.pristine;
          this.pristine = !1;
          const c = n.sourceControl ?? this;
          this._parent &&
            !n.onlySelf &&
            this._parent.markAsDirty({ ...n, sourceControl: c }),
            t && !1 !== n.emitEvent && this._events.next(new _9(!1, c));
        }
        markAsPristine(n = {}) {
          const t = !1 === this.pristine;
          (this.pristine = !0), (this._pendingDirty = !1);
          const c = n.sourceControl ?? this;
          this._forEachChild(s => {
            s.markAsPristine({ onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._parent && !n.onlySelf && this._parent._updatePristine(n, c),
            t && !1 !== n.emitEvent && this._events.next(new _9(!0, c));
        }
        markAsPending(n = {}) {
          this.status = M4;
          const t = n.sourceControl ?? this;
          !1 !== n.emitEvent &&
            (this._events.next(new pr(this.status, t)),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !n.onlySelf &&
              this._parent.markAsPending({ ...n, sourceControl: t });
        }
        disable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = Sc),
            (this.errors = null),
            this._forEachChild(s => {
              s.disable({ ...n, onlySelf: !0 });
            }),
            this._updateValue();
          const c = n.sourceControl ?? this;
          !1 !== n.emitEvent &&
            (this._events.next(new GS(this.value, c)),
            this._events.next(new pr(this.status, c)),
            this.valueChanges.emit(this.value),
            this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...n, skipPristineCheck: t }, this),
            this._onDisabledChange.forEach(s => s(!0));
        }
        enable(n = {}) {
          const t = this._parentMarkedDirty(n.onlySelf);
          (this.status = xc),
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
              (this.status === xc || this.status === M4) &&
                this._runAsyncValidator(c, n.emitEvent);
          }
          const t = n.sourceControl ?? this;
          !1 !== n.emitEvent &&
            (this._events.next(new GS(this.value, t)),
            this._events.next(new pr(this.status, t)),
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
          this.status = this._allControlsDisabled() ? Sc : xc;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(n, t) {
          if (this.asyncValidator) {
            (this.status = M4),
              (this._hasOwnPendingAsyncValidator = { emitEvent: !1 !== t });
            const c = xS(this.asyncValidator(this));
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
            (n || c) && this._events.next(new pr(this.status, t)),
            this._parent && this._parent._updateControlsErrors(n, t, c);
        }
        _initObservables() {
          (this.valueChanges = new Z()), (this.statusChanges = new Z());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Sc
            : this.errors
            ? hr
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(M4)
            ? M4
            : this._anyControlsHaveStatus(hr)
            ? hr
            : xc;
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
            s && this._events.next(new _9(this.pristine, t));
        }
        _updateTouched(n = {}, t) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new b9(this.touched, t)),
            this._parent && !n.onlySelf && this._parent._updateTouched(n, t);
        }
        _registerOnCollectionChange(n) {
          this._onCollectionChange = n;
        }
        _setUpdateStrategy(n) {
          mr(n) && null != n.updateOn && (this._updateOn = n.updateOn);
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
            (this._composedValidatorFn = (function UC2(e) {
              return Array.isArray(e) ? M9(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(n) {
          (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
            (this._composedAsyncValidatorFn = (function HC2(e) {
              return Array.isArray(e) ? v9(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Ic extends gr {
        constructor(n, t, c) {
          super(w9(t), D9(c, t)),
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
          WS(this, 0, n),
            Object.keys(n).forEach(c => {
              qS(this, !0, c),
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
            this._forEachChild((s, o) => {
              c = t(c, s, o);
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
      class YS extends Ic {}
      const y4 = new _('CallSetDisabledState', { providedIn: 'root', factory: () => Cr }),
        Cr = 'always';
      function Ac(e, n, t = Cr) {
        E9(e, n),
          n.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === t) &&
            n.valueAccessor.setDisabledState?.(e.disabled),
          (function GC2(e, n) {
            n.valueAccessor.registerOnChange(t => {
              (e._pendingValue = t),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && ZS(e, n);
            });
          })(e, n),
          (function WC2(e, n) {
            const t = (c, s) => {
              n.valueAccessor.writeValue(c), s && n.viewToModelUpdate(c);
            };
            e.registerOnChange(t),
              n._registerOnDestroy(() => {
                e._unregisterOnChange(t);
              });
          })(e, n),
          (function qC2(e, n) {
            n.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && ZS(e, n),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, n),
          (function $C2(e, n) {
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
      function vr(e, n, t = !0) {
        const c = () => {};
        n.valueAccessor &&
          (n.valueAccessor.registerOnChange(c), n.valueAccessor.registerOnTouched(c)),
          Lr(e, n),
          e && (n._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(() => {}));
      }
      function yr(e, n) {
        e.forEach(t => {
          t.registerOnValidatorChange && t.registerOnValidatorChange(n);
        });
      }
      function E9(e, n) {
        const t = OS(e);
        null !== n.validator
          ? e.setValidators(RS(t, n.validator))
          : 'function' == typeof t && e.setValidators([t]);
        const c = FS(e);
        null !== n.asyncValidator
          ? e.setAsyncValidators(RS(c, n.asyncValidator))
          : 'function' == typeof c && e.setAsyncValidators([c]);
        const s = () => e.updateValueAndValidity();
        yr(n._rawValidators, s), yr(n._rawAsyncValidators, s);
      }
      function Lr(e, n) {
        let t = !1;
        if (null !== e) {
          if (null !== n.validator) {
            const s = OS(e);
            if (Array.isArray(s) && s.length > 0) {
              const o = s.filter(r => r !== n.validator);
              o.length !== s.length && ((t = !0), e.setValidators(o));
            }
          }
          if (null !== n.asyncValidator) {
            const s = FS(e);
            if (Array.isArray(s) && s.length > 0) {
              const o = s.filter(r => r !== n.asyncValidator);
              o.length !== s.length && ((t = !0), e.setAsyncValidators(o));
            }
          }
        }
        const c = () => {};
        return yr(n._rawValidators, c), yr(n._rawAsyncValidators, c), t;
      }
      function ZS(e, n) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          n.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function XS(e, n) {
        const t = e.indexOf(n);
        t > -1 && e.splice(t, 1);
      }
      function JS(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const qt = class extends gr {
        constructor(n = null, t, c) {
          super(w9(t), D9(c, t)),
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
            mr(t) &&
              (t.nonNullable || t.initialValueIsDefault) &&
              (this.defaultValue = JS(n) ? n.value : n);
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
          XS(this._onChange, n);
        }
        registerOnDisabledChange(n) {
          this._onDisabledChange.push(n);
        }
        _unregisterOnDisabledChange(n) {
          XS(this._onDisabledChange, n);
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
          JS(n)
            ? ((this.value = this._pendingValue = n.value),
              n.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = n);
        }
      };
      Promise.resolve();
      let sI = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵdir = P({
            type: e,
            selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
            hostAttrs: ['novalidate', ''],
          }));
        }
        return e;
      })();
      const A9 = new _(''),
        rM2 = { provide: Gt, useExisting: y2(() => T9) };
      let T9 = (() => {
        class e extends Gt {
          set isDisabled(t) {}
          static #e = (this._ngModelWarningSentOnce = !1);
          constructor(t, c, s, o, r) {
            super(),
              (this._ngModelWarningConfig = o),
              (this.callSetDisabledState = r),
              (this.update = new Z()),
              (this._ngModelWarningSent = !1),
              this._setValidators(t),
              this._setAsyncValidators(c),
              (this.valueAccessor = (function S9(e, n) {
                if (!n) return null;
                let t, c, s;
                return (
                  Array.isArray(n),
                  n.forEach(o => {
                    o.constructor === lr
                      ? (t = o)
                      : (function QC2(e) {
                          return Object.getPrototypeOf(e.constructor) === j3;
                        })(o)
                      ? (c = o)
                      : (s = o);
                  }),
                  s || c || t || null
                );
              })(0, s));
          }
          ngOnChanges(t) {
            if (this._isControlChanged(t)) {
              const c = t.form.previousValue;
              c && vr(c, this, !1),
                Ac(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function x9(e, n) {
              if (!e.hasOwnProperty('model')) return !1;
              const t = e.model;
              return !!t.isFirstChange() || !Object.is(n, t.currentValue);
            })(t, this.viewModel) &&
              (this.form.setValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && vr(this.form, this, !1);
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
            return new (c || e)(z(h1, 10), z($t, 10), z(Ye, 10), z(A9, 8), z(y4, 8));
          });
          static #n = (this.ɵdir = P({
            type: e,
            selectors: [['', 'formControl', '']],
            inputs: {
              form: [0, 'formControl', 'form'],
              isDisabled: [0, 'disabled', 'isDisabled'],
              model: [0, 'ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            exportAs: ['ngForm'],
            features: [T2([rM2]), n2, g1],
          }));
        }
        return e;
      })();
      const iM2 = { provide: N1, useExisting: y2(() => zr) };
      let zr = (() => {
          class e extends N1 {
            get submitted() {
              return Pe(this._submittedReactive);
            }
            set submitted(t) {
              this._submittedReactive.set(t);
            }
            constructor(t, c, s) {
              super(),
                (this.callSetDisabledState = s),
                (this._submitted = w3(() => this._submittedReactive())),
                (this._submittedReactive = Dt(!1)),
                (this._onCollectionChange = () => this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new Z()),
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
                (Lr(this.form, this),
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
                Ac(c, t, this.callSetDisabledState),
                c.updateValueAndValidity({ emitEvent: !1 }),
                this.directives.push(t),
                c
              );
            }
            getControl(t) {
              return this.form.get(t.path);
            }
            removeControl(t) {
              vr(t.control || null, t, !1),
                (function KC2(e, n) {
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
                (function KS(e, n) {
                  e._syncPendingControls(),
                    n.forEach(t => {
                      const c = t.control;
                      'submit' === c.updateOn &&
                        c._pendingChange &&
                        (t.viewToModelUpdate(c._pendingValue), (c._pendingChange = !1));
                    });
                })(this.form, this.directives),
                this.ngSubmit.emit(t),
                this.form._events.next(new BC2(this.control)),
                'dialog' === t?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(t = void 0) {
              this.form.reset(t),
                this._submittedReactive.set(!1),
                this.form._events.next(new jC2(this.form));
            }
            _updateDomValue() {
              this.directives.forEach(t => {
                const c = t.control,
                  s = this.form.get(t.path);
                c !== s &&
                  (vr(c || null, t),
                  (e => e instanceof qt)(s) &&
                    (Ac(s, t, this.callSetDisabledState), (t.control = s)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(t) {
              const c = this.form.get(t.path);
              (function QS(e, n) {
                E9(e, n);
              })(c, t),
                c.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(t) {
              if (this.form) {
                const c = this.form.get(t.path);
                c &&
                  (function YC2(e, n) {
                    return Lr(e, n);
                  })(c, t) &&
                  c.updateValueAndValidity({ emitEvent: !1 });
              }
            }
            _updateRegistrations() {
              this.form._registerOnCollectionChange(this._onCollectionChange),
                this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
              E9(this.form, this), this._oldForm && Lr(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(h1, 10), z($t, 10), z(y4, 8));
            });
            static #t = (this.ɵdir = P({
              type: e,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (c, s) {
                1 & c &&
                  G('submit', function (r) {
                    return s.onSubmit(r);
                  })('reset', function () {
                    return s.onReset();
                  });
              },
              inputs: { form: [0, 'formGroup', 'form'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [T2([iM2]), n2, g1],
            }));
          }
          return e;
        })(),
        wM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = J3({ type: e }));
            static #n = (this.ɵinj = Kt({}));
          }
          return e;
        })();
      class LI extends gr {
        constructor(n, t, c) {
          super(w9(t), D9(c, t)),
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
          WS(this, 0, n),
            n.forEach((c, s) => {
              qS(this, !1, s),
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
      function zI(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let DM2 = (() => {
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
              let o = {};
              return (
                zI(c)
                  ? (o = c)
                  : null !== c &&
                    ((o.validators = c.validator),
                    (o.asyncValidators = c.asyncValidator)),
                new Ic(s, o)
              );
            }
            record(t, c = null) {
              const s = this._reduceControls(t);
              return new YS(s, c);
            }
            control(t, c, s) {
              let o = {};
              return this.useNonNullable
                ? (zI(c) ? (o = c) : ((o.validators = c), (o.asyncValidators = s)),
                  new qt(t, { ...o, nonNullable: !0 }))
                : new qt(t, c, s);
            }
            array(t, c, s) {
              const o = t.map(r => this._createControl(r));
              return new LI(o, c, s);
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
              return t instanceof qt || t instanceof gr
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
        _I = (() => {
          class e {
            static withConfig(t) {
              return {
                ngModule: e,
                providers: [
                  { provide: A9, useValue: t.warnOnNgModelWithFormControl ?? 'always' },
                  { provide: y4, useValue: t.callSetDisabledState ?? Cr },
                ],
              };
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵmod = J3({ type: e }));
            static #n = (this.ɵinj = Kt({ imports: [wM2] }));
          }
          return e;
        })();
      function EM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'p', 2),
            G('click', function () {
              return M1(t), v1(e2().onClick());
            }),
            qn(2),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2();
          I(),
            xt('margin', t.margin),
            D('ngClass', t.textColor),
            I(),
            St(' ', t.value, ' ');
        }
      }
      function NM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'p', 3),
            G('click', function () {
              return M1(t), v1(e2().onClick());
            }),
            qn(2),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2();
          I(),
            xt('margin', t.margin),
            D('ngClass', t.textColor),
            I(),
            St(' ', t.value, ' ');
        }
      }
      function xM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'h1', 4),
            G('click', function () {
              return M1(t), v1(e2().onClick());
            }),
            qn(2),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2();
          I(),
            xt('margin', t.margin),
            D('ngClass', t.textColor),
            I(),
            St(' ', t.value, ' ');
        }
      }
      function SM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'h2', 5),
            G('click', function () {
              return M1(t), v1(e2().onClick());
            }),
            qn(2),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2();
          I(),
            xt('margin', t.margin),
            D('ngClass', t.textColor),
            I(),
            St(' ', t.value, ' ');
        }
      }
      function IM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'h3', 6),
            G('click', function () {
              return M1(t), v1(e2().onClick());
            }),
            qn(2),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2();
          I(),
            xt('margin', t.margin),
            D('ngClass', t.textColor),
            I(),
            St(' ', t.value, ' ');
        }
      }
      let ie = (() => {
        class e {
          constructor() {
            (this.type = 'paragraph'),
              (this.textColor = 'text__default'),
              (this.clickEvent = new Z());
          }
          onClick() {
            this.clickEvent.emit();
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = $({
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
            features: [q],
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
                (_2(0, 0),
                W1(1, EM2, 3, 4, 'ng-container', 1)(2, NM2, 3, 4, 'ng-container', 1)(
                  3,
                  xM2,
                  3,
                  4,
                  'ng-container',
                  1,
                )(4, SM2, 3, 4, 'ng-container', 1)(5, IM2, 3, 4, 'ng-container', 1),
                b2()),
                2 & c &&
                  (D('ngSwitch', s.type),
                  I(),
                  D('ngSwitchCase', 'tiny'),
                  I(),
                  D('ngSwitchCase', 'paragraph'),
                  I(),
                  D('ngSwitchCase', 'header1'),
                  I(),
                  D('ngSwitchCase', 'header2'),
                  I(),
                  D('ngSwitchCase', 'header3'));
            },
            dependencies: [Ve, Xn, to, KM],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.text[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-style:normal;margin:0}',
            ],
          }));
        }
        return e;
      })();
      const AM2 = ['self'];
      function TM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'lib-text', 3),
            G('clickEvent', function () {
              return M1(t), v1(e2().onClick());
            }),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2();
          I(), D('value', t.control.label.value)('textColor', t.textColor);
        }
      }
      let kM2 = (() => {
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
          static #t = (this.ɵcmp = $({
            type: e,
            selectors: [['lib-input']],
            viewQuery: function (c, s) {
              if ((1 & c && I0(AM2, 5), 2 & c)) {
                let o;
                $n((o = Gn())) && (s.self = o.first);
              }
            },
            inputs: { form: 'form', control: 'control' },
            standalone: !0,
            features: [q],
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
                const o = R1();
                W1(0, TM2, 2, 2, 'ng-container', 1),
                  O(1, 'input', 2, 0),
                  G('focus', function () {
                    return M1(o), v1(s.onFocus());
                  })('blur', function () {
                    return M1(o), v1(s.onBlur());
                  }),
                  F();
              }
              2 & c &&
                (D('ngIf', s.control.label.isVisible),
                I(),
                D('value', s.control.input.defaultValue)('type', s.control.input.type)(
                  'placeholder',
                  s.control.input.placeholder,
                )('formControl', s.form));
            },
            dependencies: [Ve, G0, _I, lr, US, T9, ie],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.input[_ngcontent-%COMP%]{display:block}',
            ],
          }));
        }
        return e;
      })();
      const RM2 = ['*'];
      let V9 = (() => {
          class e {
            constructor() {
              (this.isSubmit = !1),
                (this.clickEvent = new Z()),
                (this.mouseEnterEvent = new Z()),
                (this.mouseLeaveEvent = new Z());
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-button']],
              inputs: { control: 'control', isSubmit: 'isSubmit' },
              outputs: {
                clickEvent: 'clickEvent',
                mouseEnterEvent: 'mouseEnterEvent',
                mouseLeaveEvent: 'mouseLeaveEvent',
              },
              standalone: !0,
              features: [q],
              ngContentSelectors: RM2,
              decls: 2,
              vars: 1,
              consts: [[1, 'button', 3, 'click', 'mouseenter', 'mouseleave', 'type']],
              template: function (c, s) {
                1 & c &&
                  (z3(),
                  O(0, 'button', 0),
                  G('click', function () {
                    return s.onClick();
                  })('mouseenter', function () {
                    return s.onMouseEnter();
                  })('mouseleave', function () {
                    return s.onMouseLeave();
                  }),
                  _3(1),
                  F()),
                  2 & c && D('type', s.isSubmit ? 'submit' : 'button');
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.button[_ngcontent-%COMP%]{display:block}',
              ],
            }));
          }
          return e;
        })(),
        OM2 = (() => {
          class e {
            constructor() {
              this.clickEvent = new Z();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-button-text']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 3,
              consts: [
                [3, 'clickEvent', 'control', 'isSubmit'],
                ['textColor', 'text__primary', 'type', 'header3', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-button', 0),
                  G('clickEvent', function () {
                    return s.onClickEvent();
                  }),
                  d2(1, 'lib-text', 1),
                  F()),
                  2 & c &&
                    (D('control', s.form)('isSubmit', s.control.isSubmit),
                    I(),
                    D('value', s.control.label));
              },
              dependencies: [V9, ie],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        bI = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-icon']],
              inputs: { src: 'src', alt: 'alt' },
              standalone: !0,
              features: [q],
              decls: 1,
              vars: 2,
              consts: [[1, 'icon', 3, 'src', 'alt']],
              template: function (c, s) {
                1 & c && d2(0, 'img', 0), 2 & c && D('src', s.src, _a)('alt', s.alt);
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
              this.clickEvent = new Z();
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-button-icon']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [q],
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
                  (O(0, 'lib-button', 0),
                  G('clickEvent', function () {
                    return s.onClickEvent();
                  })('mouseEnterEvent', function () {
                    return s.onMouseEnterEvent();
                  })('mouseLeaveEvent', function () {
                    return s.onMouseLeaveEvent();
                  }),
                  d2(1, 'lib-icon', 1),
                  F()),
                  2 & c &&
                    (D('control', s.form)('isSubmit', s.control.isSubmit),
                    I(),
                    D('src', s.control.icon)('alt', s.control.alt));
              },
              dependencies: [V9, bI],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function PM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-text', 4), b2()), 2 & e)) {
          const t = e2();
          I(), D('value', t.control.tip);
        }
      }
      let VM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-link']],
              inputs: { form: 'form', control: 'control' },
              standalone: !0,
              features: [q],
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
                  (O(0, 'lib-flex', 0),
                  W1(1, PM2, 2, 1, 'ng-container', 1),
                  O(2, 'a', 2),
                  d2(3, 'lib-text', 3),
                  F()()),
                  2 & c &&
                    (I(),
                    D('ngIf', '' !== s.control.tip),
                    I(),
                    D('routerLink', s.control.path),
                    I(),
                    D('value', s.control.label));
              },
              dependencies: [G0, ie, uc, C4],
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-error']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'error'],
                ['type', 'tiny', 'textColor', 'text__error', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c && (O(0, 'div', 0), d2(1, 'lib-text', 1), F()),
                  2 & c && (I(), D('value', s.value));
              },
              dependencies: [ie],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.error[_ngcontent-%COMP%]{display:block}',
              ],
            }));
          }
          return e;
        })();
      var g2 = (function (e) {
        return (
          (e.input = 'input'),
          (e.buttonText = 'buttonText'),
          (e.buttonIcon = 'buttonIcon'),
          (e.buttonLink = 'buttonLink'),
          (e.link = 'link'),
          (e.text = 'text'),
          e
        );
      })(g2 || {});
      let jM2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-success']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'success'],
                ['type', 'tiny', 'textColor', 'text__success', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c && (O(0, 'div', 0), d2(1, 'lib-text', 1), F()),
                  2 & c && (I(), D('value', s.value));
              },
              dependencies: [ie],
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
              this.clickEvent = new Z();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-button-link']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [q],
              decls: 3,
              vars: 3,
              consts: [
                [3, 'routerLink'],
                [3, 'clickEvent', 'control'],
                ['textColor', 'text__primary', 'type', 'header3', 3, 'value'],
              ],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'a', 0)(1, 'lib-button', 1),
                  G('clickEvent', function () {
                    return s.onClickEvent();
                  }),
                  d2(2, 'lib-text', 2),
                  F()()),
                  2 & c &&
                    (D('routerLink', s.control.path),
                    I(),
                    D('control', s.form),
                    I(),
                    D('value', s.control.label));
              },
              dependencies: [uc, V9, ie],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function HM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-input', 5), b2()), 2 & e)) {
          const t = e2().$implicit,
            c = e2();
          I(), D('form', c.getFormControl(t.id))('control', t);
        }
      }
      function $M2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'lib-button-text', 6),
            G('clickEvent', function () {
              return M1(t), v1(e2(2).onSubmit());
            }),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2().$implicit,
            c = e2();
          I(), D('form', c.getFormControl(t.id))('control', t);
        }
      }
      function GM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'lib-button-icon', 6),
            G('clickEvent', function () {
              return M1(t), v1(e2(2).onSubmit());
            }),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2().$implicit,
            c = e2();
          I(), D('form', c.getFormControl(t.id))('control', t);
        }
      }
      function qM2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'lib-button-link', 6),
            G('clickEvent', function () {
              return M1(t), v1(e2(2).onSubmit());
            }),
            F(),
            b2();
        }
        if (2 & e) {
          const t = e2().$implicit,
            c = e2();
          I(), D('form', c.getFormControl(t.id))('control', t);
        }
      }
      function WM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-link', 5), b2()), 2 & e)) {
          const t = e2().$implicit,
            c = e2();
          I(), D('form', c.getFormControl(t.id))('control', t);
        }
      }
      function YM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-text', 7), b2()), 2 & e)) {
          const t = e2().$implicit;
          I(), D('value', t.value)('margin', t.margin);
        }
      }
      function ZM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-error', 8), b2()), 2 & e)) {
          const t = e2(2).$implicit,
            c = e2();
          I(), D('value', c.getFormControlError(t.id));
        }
      }
      function QM2(e, n) {
        if ((1 & e && (_2(0), W1(1, ZM2, 2, 1, 'ng-container', 3), b2()), 2 & e)) {
          const t = e2().$implicit,
            c = e2();
          I(), D('ngIf', c.formControlInvalid(t.id));
        }
      }
      function KM2(e, n) {
        if (
          (1 & e &&
            (_2(0),
            O(1, 'lib-flex', 4),
            W1(2, HM2, 2, 2, 'ng-container', 3)(3, $M2, 2, 2, 'ng-container', 3)(
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
            F(),
            b2()),
          2 & e)
        ) {
          const t = n.$implicit;
          I(),
            D('alignItems', t.alignItems),
            I(),
            D('ngIf', 'input' === t.kind),
            I(),
            D('ngIf', 'buttonText' === t.kind),
            I(),
            D('ngIf', 'buttonIcon' === t.kind),
            I(),
            D('ngIf', 'buttonLink' === t.kind),
            I(),
            D('ngIf', 'link' === t.kind),
            I(),
            D('ngIf', 'text' === t.kind),
            I(),
            D('ngIf', t.validation.isVisible);
        }
      }
      function XM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-success', 8), b2()), 2 & e)) {
          const t = e2(2);
          I(), D('value', t.formSuccessMessage);
        }
      }
      function JM2(e, n) {
        if ((1 & e && (_2(0), d2(1, 'lib-error', 8), b2()), 2 & e)) {
          const t = e2(2);
          I(), D('value', t.formErrorMessage);
        }
      }
      function ev2(e, n) {
        if (
          (1 & e &&
            (_2(0),
            W1(1, XM2, 2, 1, 'ng-container', 3)(2, JM2, 2, 1, 'ng-container', 3),
            b2()),
          2 & e)
        ) {
          const t = e2();
          I(), D('ngIf', t.formGroupValid), I(), D('ngIf', t.formGroupInvalid);
        }
      }
      let L4 = (() => {
          class e {
            constructor(t) {
              (this.fb = t),
                (this.flexDirection = 'column'),
                (this.resetIfError = !1),
                (this.formErrorMessage = 'The form was not completed correctly.'),
                (this.formSuccessMessage = 'The form was completed correctly.'),
                (this.formValidation = !0),
                (this.baseFormEvent = new Z()),
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
                case g2.input:
                  return new qt(t.input.defaultValue, t.validation.validators);
                case g2.buttonText:
                case g2.buttonIcon:
                case g2.buttonLink:
                case g2.link:
                  return new qt(!1, t.validation.validators);
                case g2.text:
                  return new qt('', t.validation.validators);
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
              return new (c || e)(z(DM2));
            });
            static #t = (this.ɵcmp = $({
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
              features: [q],
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
                  (O(0, 'form', 0),
                  G('ngSubmit', function () {
                    return s.onSubmit();
                  }),
                  O(1, 'lib-flex', 1)(2, 'lib-flex', 1),
                  W1(3, KM2, 9, 8, 'ng-container', 2),
                  F(),
                  W1(4, ev2, 3, 2, 'ng-container', 3),
                  F()()),
                  2 & c &&
                    (D('formGroup', s.formGroup),
                    I(),
                    D('flexDirection', s.flexDirection),
                    I(),
                    D('flexDirection', s.flexDirection),
                    I(),
                    D('ngForOf', s.baseForm.controls),
                    I(),
                    D('ngIf', s.formValidation));
              },
              dependencies: [
                Ve,
                Tl,
                G0,
                _I,
                sI,
                HS,
                zr,
                C4,
                kM2,
                OM2,
                FM2,
                VM2,
                BM2,
                jM2,
                ie,
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
              (this.event = new Z()),
                (this.loginForm = {
                  controls: [
                    {
                      kind: g2.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: { validators: [re.required, re.email], isVisible: !1 },
                      label: { value: 'Email', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: g2.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !1 },
                      label: { value: 'Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: g2.link,
                      id: 'forgotPassword',
                      alignItems: 'flex-end',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Forgot password?',
                      path: '/forgot-password',
                      tip: '',
                    },
                    {
                      kind: g2.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Log in',
                      isSubmit: !0,
                    },
                    {
                      kind: g2.link,
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-login-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
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
                  (O(0, 'lib-base-form', 0),
                  G('baseFormEvent', function (r) {
                    return s.onBaseFormEvent(r);
                  }),
                  F()),
                  2 & c && D('baseForm', s.loginForm)('resetIfError', !0);
              },
              dependencies: [L4],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        nv2 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.forgotPasswordForm = {
                  controls: [
                    {
                      kind: g2.text,
                      id: 'tip',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !0 },
                      value:
                        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
                      margin: '1rem 0',
                    },
                    {
                      kind: g2.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: { validators: [re.required, re.email], isVisible: !0 },
                      label: { value: 'Email', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: g2.buttonText,
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-forgot-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
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
                  (O(0, 'lib-base-form', 0),
                  G('baseFormEvent', function (r) {
                    return s.onBaseFormEvent(r);
                  }),
                  F()),
                  2 & c && D('baseForm', s.forgotPasswordForm)('resetIfError', !1);
              },
              dependencies: [L4],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        cv2 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.registrationForm = {
                  controls: [
                    {
                      kind: g2.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: { validators: [re.required, re.email], isVisible: !0 },
                      label: { value: 'Email', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: g2.input,
                      id: 'name',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Name', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'text' },
                    },
                    {
                      kind: g2.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: g2.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Repeat Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: g2.buttonText,
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-registration-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
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
                  (O(0, 'lib-base-form', 0),
                  G('baseFormEvent', function (r) {
                    return s.onBaseFormEvent(r);
                  }),
                  F()),
                  2 & c && D('baseForm', s.registrationForm)('resetIfError', !0);
              },
              dependencies: [L4],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        sv2 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.changePasswordForm = {
                  controls: [
                    {
                      kind: g2.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: g2.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: { validators: [re.required], isVisible: !0 },
                      label: { value: 'Repeate Password', isVisible: !0 },
                      input: { defaultValue: '', placeholder: '', type: 'password' },
                    },
                    {
                      kind: g2.buttonText,
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
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-change-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
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
                  (O(0, 'lib-base-form', 0),
                  G('baseFormEvent', function (r) {
                    return s.onBaseFormEvent(r);
                  }),
                  F()),
                  2 & c && D('baseForm', s.changePasswordForm)('resetIfError', !0);
              },
              dependencies: [L4],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const ov2 = ['*'];
      let z4 = (() => {
        class e {
          constructor() {
            this.type = 'default';
          }
          getCardType() {
            switch (this.type) {
              case 'default':
                return 'card--default';
              case 'main-nav':
                return 'card--main-nav';
              case 'main-nav-options':
                return 'card--main-nav-options';
              default:
                throw new Error('Not supported card type!');
            }
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = $({
            type: e,
            selectors: [['lib-card']],
            inputs: { width: 'width', type: 'type' },
            standalone: !0,
            features: [q],
            ngContentSelectors: ov2,
            decls: 2,
            vars: 3,
            consts: [[1, 'card', 3, 'ngClass']],
            template: function (c, s) {
              1 & c && (z3(), O(0, 'div', 0), _3(1), F()),
                2 & c && (xt('width', s.width), D('ngClass', s.getCardType()));
            },
            dependencies: [Xn],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}[_nghost-%COMP%]{display:contents}.card[_ngcontent-%COMP%]{display:block}',
            ],
          }));
        }
        return e;
      })();
      const rv2 = ['*'];
      let _r = (() => {
        class e {
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵcmp = $({
            type: e,
            selectors: [['lib-auth']],
            standalone: !0,
            features: [q],
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
                (z3(),
                O(0, 'div', 0)(1, 'lib-flex', 1)(2, 'lib-card', 2)(3, 'lib-flex', 3)(
                  4,
                  'lib-flex',
                  4,
                ),
                d2(5, 'lib-text', 5),
                F(),
                _3(6),
                F()()()());
            },
            dependencies: [C4, ie, z4],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.auth[_ngcontent-%COMP%]{display:block}',
            ],
          }));
        }
        return e;
      })();
      const iv2 = ['self'],
        av2 = ['*'];
      let lv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-wrapper']],
              viewQuery: function (c, s) {
                if ((1 & c && I0(iv2, 5), 2 & c)) {
                  let o;
                  $n((o = Gn())) && (s.self = o.first);
                }
              },
              standalone: !0,
              features: [q],
              ngContentSelectors: av2,
              decls: 3,
              vars: 0,
              consts: [['self', '']],
              template: function (c, s) {
                1 & c && (z3(), O(0, 'div', null, 0), _3(2), F());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        uv2 = (() => {
          class e {
            constructor() {
              (this.hamburgerFormEvent = new Z()),
                (this.hamburgerForm = {
                  controls: [
                    {
                      kind: g2.buttonIcon,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      icon: 'icon/menu.svg',
                      alt: 'hamburger icon',
                      isSubmit: !1,
                    },
                  ],
                });
            }
            onEvent(t) {
              this.hamburgerFormEvent.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-hamburger-form']],
              outputs: { hamburgerFormEvent: 'hamburgerFormEvent' },
              standalone: !0,
              features: [q],
              decls: 1,
              vars: 2,
              consts: [[3, 'baseFormEvent', 'baseForm', 'formValidation']],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-base-form', 0),
                  G('baseFormEvent', function (r) {
                    return s.onEvent(r);
                  }),
                  F()),
                  2 & c && D('baseForm', s.hamburgerForm)('formValidation', !1);
              },
              dependencies: [L4],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        fv2 = (() => {
          class e {
            constructor(t) {
              (this.breakpoint = t),
                (this.mainNavFormEvent = new Z()),
                (this.flexDirection = 'row'),
                (this.mainNavForm = {
                  controls: [
                    {
                      kind: g2.buttonLink,
                      id: 'statistics',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Statistics',
                      path: '/dashboard/statistics',
                    },
                    {
                      kind: g2.buttonLink,
                      id: 'courses',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Courses',
                      path: '/dashboard/courses',
                    },
                    {
                      kind: g2.buttonLink,
                      id: 'account',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Account',
                      path: '/dashboard/account',
                    },
                    {
                      kind: g2.buttonLink,
                      id: 'logout',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Logout',
                      path: '/dashboard/logout',
                    },
                  ],
                }),
                this.breakpoint.addObserver(this);
            }
            update(t) {
              this.flexDirection = t.breakpoint === d1.XSmall ? 'column' : 'row';
            }
            onEvent(t) {
              this.mainNavFormEvent.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(x5));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-main-nav-form']],
              outputs: { mainNavFormEvent: 'mainNavFormEvent' },
              standalone: !0,
              features: [q],
              decls: 1,
              vars: 3,
              consts: [
                [3, 'baseFormEvent', 'flexDirection', 'baseForm', 'formValidation'],
              ],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-base-form', 0),
                  G('baseFormEvent', function (r) {
                    return s.onEvent(r);
                  }),
                  F()),
                  2 & c &&
                    D('flexDirection', s.flexDirection)('baseForm', s.mainNavForm)(
                      'formValidation',
                      !1,
                    );
              },
              dependencies: [L4],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const dv2 = ['hamburgerForm'],
        hv2 = ['mainNavForm'];
      function pv2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'lib-wrapper', null, 1)(3, 'lib-hamburger-form', 9),
            G('hamburgerFormEvent', function () {
              return M1(t), v1(e2().onEvent());
            }),
            F()(),
            b2();
        }
      }
      function mv2(e, n) {
        1 & e && d2(0, 'lib-main-nav-form');
      }
      function gv2(e, n) {
        if (1 & e) {
          const t = R1();
          _2(0),
            O(1, 'lib-wrapper', null, 2)(3, 'lib-card', 10)(4, 'lib-main-nav-form', 11),
            G('mainNavFormEvent', function () {
              return M1(t), v1(e2().onEvent());
            }),
            F()()(),
            b2();
        }
      }
      let Cv2 = (() => {
          class e {
            constructor(t) {
              (this.breakpoint = t),
                (this.isMobile = !0),
                (this.isMenuVisible = !1),
                (this.mainNavJustifyContent = 'space-between'),
                this.breakpoint.addObserver(this);
            }
            update(t) {
              const { breakpoint: c } = t;
              c === d1.XSmall
                ? (this.isMobile = !0)
                : ((this.isMobile = !1), (this.isMenuVisible = !1)),
                (this.mainNavJustifyContent =
                  c === d1.Large || c === d1.XLarge ? 'space-around' : 'space-between');
            }
            onEvent() {
              this.isMenuVisible = !this.isMenuVisible;
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(x5));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-main-nav']],
              viewQuery: function (c, s) {
                if ((1 & c && (I0(dv2, 5), I0(hv2, 5)), 2 & c)) {
                  let o;
                  $n((o = Gn())) && (s.hamburgerForm = o.first),
                    $n((o = Gn())) && (s.mainNavForm = o.first);
                }
              },
              standalone: !0,
              features: [q],
              decls: 8,
              vars: 4,
              consts: [
                ['pc', ''],
                ['hamburgerForm', ''],
                ['mainNavForm', ''],
                ['flexDirection', 'column'],
                ['type', 'main-nav'],
                ['alignItems', 'center', 3, 'justifyContent'],
                ['src', 'icon/main-nav-logo.svg', 'alt', 'Logo School Icon'],
                [4, 'ngIf', 'ngIfElse'],
                [4, 'ngIf'],
                [3, 'hamburgerFormEvent'],
                ['type', 'main-nav-options'],
                [3, 'mainNavFormEvent'],
              ],
              template: function (c, s) {
                if (
                  (1 & c &&
                    (O(0, 'lib-flex', 3)(1, 'lib-card', 4)(2, 'lib-flex', 5),
                    d2(3, 'lib-icon', 6),
                    W1(4, pv2, 4, 0, 'ng-container', 7)(
                      5,
                      mv2,
                      1,
                      0,
                      'ng-template',
                      null,
                      0,
                      MC,
                    ),
                    F()(),
                    W1(7, gv2, 5, 0, 'ng-container', 8),
                    F()),
                  2 & c)
                ) {
                  const o = Bg(6);
                  I(2),
                    D('justifyContent', s.mainNavJustifyContent),
                    I(2),
                    D('ngIf', s.isMobile)('ngIfElse', o),
                    I(3),
                    D('ngIf', s.isMobile && s.isMenuVisible);
                }
              },
              dependencies: [Ve, G0, C4, z4, bI, lv2, uv2, fv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Mv2 = (() => {
          class e {
            constructor(t) {
              (this.route = t), (this.event = new Z());
            }
            onEvent(t) {
              this.route.navigate('/dashboard'), this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Ky));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-login']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-auth')(1, 'lib-login-form', 0),
                  G('event', function (r) {
                    return s.onEvent(r);
                  }),
                  F()());
              },
              dependencies: [_r, tv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        vv2 = (() => {
          class e {
            constructor() {
              this.event = new Z();
            }
            onEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-forgot-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-auth')(1, 'lib-forgot-password-form', 0),
                  G('event', function (r) {
                    return s.onEvent(r);
                  }),
                  F()());
              },
              dependencies: [_r, nv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        yv2 = (() => {
          class e {
            constructor() {
              this.event = new Z();
            }
            onEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-registration']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-auth')(1, 'lib-registration-form', 0),
                  G('event', function (r) {
                    return s.onEvent(r);
                  }),
                  F()());
              },
              dependencies: [_r, cv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Lv2 = (() => {
          class e {
            constructor() {
              this.event = new Z();
            }
            onEvent(t) {
              this.event.emit(t);
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-change-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (c, s) {
                1 & c &&
                  (O(0, 'lib-auth')(1, 'lib-change-password-form', 0),
                  G('event', function (r) {
                    return s.onEvent(r);
                  }),
                  F()());
              },
              dependencies: [_r, sv2],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        zv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-dashboard']],
              standalone: !0,
              features: [q],
              decls: 3,
              vars: 0,
              consts: [[1, 'dashboard']],
              template: function (c, s) {
                1 & c &&
                  (d2(0, 'lib-main-nav'), O(1, 'main', 0), d2(2, 'router-outlet'), F());
              },
              dependencies: [Cv2, cc],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-width:300px}.dashboard[_ngcontent-%COMP%]{padding:.75rem}',
              ],
            }));
          }
          return e;
        })(),
        _v2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-statistics']],
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [['value', 'Statistics']],
              template: function (c, s) {
                1 & c && (O(0, 'lib-card'), d2(1, 'lib-text', 0), F());
              },
              dependencies: [z4, ie],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        bv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-courses']],
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [['value', 'Courses']],
              template: function (c, s) {
                1 & c && (O(0, 'lib-card'), d2(1, 'lib-text', 0), F());
              },
              dependencies: [z4, ie],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        wv2 = (() => {
          class e {
            static #e = (this.ɵfac = function (c) {
              return new (c || e)();
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-account']],
              standalone: !0,
              features: [q],
              decls: 2,
              vars: 0,
              consts: [['value', 'Account']],
              template: function (c, s) {
                1 & c && (O(0, 'lib-card'), d2(1, 'lib-text', 0), F());
              },
              dependencies: [z4, ie],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Dv2 = (() => {
          class e {
            constructor(t) {
              (this.route = t), this.route.navigate('');
            }
            static #e = (this.ɵfac = function (c) {
              return new (c || e)(z(Ky));
            });
            static #t = (this.ɵcmp = $({
              type: e,
              selectors: [['lib-logout']],
              standalone: !0,
              features: [q],
              decls: 0,
              vars: 0,
              template: function (c, s) {},
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const kv2 = {
          providers: [
            (function vQ(e, ...n) {
              return en([
                { provide: Ao, multi: !0, useValue: e },
                [],
                { provide: o4, useFactory: qy, deps: [ft] },
                { provide: Is, multi: !0, useFactory: Wy },
                n.map(t => t.ɵproviders),
              ]);
            })(
              [
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login', component: Mv2 },
                { path: 'registration', component: yv2 },
                { path: 'forgot-password', component: vv2 },
                { path: 'change-password', component: Lv2 },
                {
                  path: 'dashboard',
                  component: zv2,
                  children: [
                    { path: '', redirectTo: 'statistics', pathMatch: 'full' },
                    { path: 'statistics', component: _v2 },
                    { path: 'courses', component: bv2 },
                    { path: 'account', component: wv2 },
                    {
                      path: 'course/:courseId',
                      component: (() => {
                        class e {
                          static #e = (this.ɵfac = function (c) {
                            return new (c || e)();
                          });
                          static #t = (this.ɵcmp = $({
                            type: e,
                            selectors: [['lib-course']],
                            standalone: !0,
                            features: [q],
                            decls: 1,
                            vars: 0,
                            template: function (c, s) {
                              1 & c && d2(0, 'router-outlet');
                            },
                            dependencies: [cc],
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
                            class e extends Fo {
                              constructor(t) {
                                super(t, 'course'), (this.injector = t);
                              }
                              onClick(t) {
                                this.onEvent(t);
                              }
                              static #e = (this.ɵfac = function (c) {
                                return new (c || e)(z(A2));
                              });
                              static #t = (this.ɵcmp = $({
                                type: e,
                                selectors: [['lib-tasks']],
                                standalone: !0,
                                features: [n2, q],
                                decls: 1,
                                vars: 0,
                                consts: [[3, 'event']],
                                template: function (c, s) {
                                  1 & c &&
                                    (O(0, 'lib-task-roadmap', 0),
                                    G('event', function (r) {
                                      return s.onClick(r);
                                    }),
                                    F());
                                },
                                dependencies: [NC2],
                                encapsulation: 2,
                              }));
                            }
                            return e;
                          })(),
                        },
                      ],
                    },
                    { path: 'logout', component: Dv2 },
                  ],
                },
                {
                  path: '**',
                  component: (() => {
                    class e {
                      static #e = (this.ɵfac = function (c) {
                        return new (c || e)();
                      });
                      static #t = (this.ɵcmp = $({
                        type: e,
                        selectors: [['lib-http-404']],
                        standalone: !0,
                        features: [q],
                        decls: 2,
                        vars: 0,
                        consts: [['value', 'http-404']],
                        template: function (c, s) {
                          1 & c && (O(0, 'lib-card'), d2(1, 'lib-text', 0), F());
                        },
                        dependencies: [z4, ie],
                        encapsulation: 2,
                      }));
                    }
                    return e;
                  })(),
                },
              ],
              (function bQ() {
                return He(6, [{ provide: Qn, useClass: W$ }]);
              })(),
              (function LQ(e = {}) {
                return He(4, [
                  {
                    provide: w5,
                    useFactory: () => {
                      const t = y(lq),
                        c = y(l2),
                        s = y(To),
                        o = y(n4);
                      return new Gy(o, s, t, c, e);
                    },
                  },
                ]);
              })({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
            ),
          ],
        },
        Rv2 = (function rL(e, n) {
          if (((pc[e] = (pc[e] || 0) + 1), 'function' == typeof n))
            return I5(e, (...c) => ({ ...n(...c), type: e }));
          switch (n ? n._as : 'empty') {
            case 'empty':
              return I5(e, () => ({ type: e }));
            case 'props':
              return I5(e, c => ({ ...c, type: e }));
            default:
              throw new Error('Unexpected config.');
          }
        })('[Course] Get Course'),
        br = { tasks: new Map() },
        B9 = (e, n) => {
          for (let t = 0; t < e; t += 1) {
            const c = br.tasks.size,
              o = { id: `task${c}`, order: c, type: n };
            br.tasks.set(o.id, o);
          }
        };
      B9(50, 'done'), B9(1, 'active'), B9(100, 'blocked');
      const Fv2 = {
        providers: [
          (function UK(e, n) {
            return en([...VK(e, n), jK]);
          })({
            course: (function WK(e, ...n) {
              const t = new Map();
              for (const c of n)
                for (const s of c.types) {
                  const o = t.get(s);
                  t.set(s, o ? (i, a) => c.reducer(o(i, a), a) : c.reducer);
                }
              return function (c = e, s) {
                const o = t.get(s.type);
                return o ? o(c, s) : c;
              };
            })(
              br,
              (function qK(...e) {
                return { reducer: e.pop(), types: e.map(c => c.type) };
              })(Rv2, e => e),
            ),
          }),
        ],
      };
      let kc = (() => {
        class e extends n1 {
          constructor() {
            super({}), (this.state = S5(this, { manualCleanup: !0, requireSync: !0 }));
          }
          static #e = (this.ɵfac = function (c) {
            return new (c || e)();
          });
          static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const j9 = new _('@ngrx/store Mock Selectors');
      let wr = (() => {
          class e extends f4 {
            constructor(t, c, s, o, r = []) {
              super(t, c, s),
                (this.state$ = t),
                (this.initialState = o),
                (this.selectors = new Map()),
                this.resetSelectors(),
                this.setState(this.initialState),
                (this.scannedActions$ = c.asObservable());
              for (const i of r) this.overrideSelector(i.selector, i.value);
            }
            setState(t) {
              this.state$.next(t), (this.lastState = t);
            }
            overrideSelector(t, c) {
              this.selectors.set(t, c);
              const s =
                'string' == typeof t
                  ? (function G5(...e) {
                      return (function MK(e, n = { stateFn: CK }) {
                        return function (...t) {
                          let c = t;
                          if (Array.isArray(c[0])) {
                            const [u, ...f] = c;
                            c = [...u, ...f];
                          } else
                            1 === c.length &&
                              (function yK(e) {
                                return (
                                  !!e &&
                                  'object' == typeof e &&
                                  Object.values(e).every(n => 'function' == typeof n)
                                );
                              })(c[0]) &&
                              (c = (function LK(e) {
                                const n = Object.values(e),
                                  t = Object.keys(e);
                                return [
                                  ...n,
                                  (...s) =>
                                    t.reduce((o, r, i) => ({ ...o, [r]: s[i] }), {}),
                                ];
                              })(c[0]));
                          const s = c.slice(0, c.length - 1),
                            o = c[c.length - 1],
                            r = s.filter(
                              u => u.release && 'function' == typeof u.release,
                            ),
                            i = e(function (...u) {
                              return o.apply(null, u);
                            }),
                            a = $5(function (u, f) {
                              return n.stateFn.apply(null, [u, s, f, i]);
                            });
                          return Object.assign(a.memoized, {
                            release: function l() {
                              a.reset(), i.reset(), r.forEach(u => u.release());
                            },
                            projector: i.memoized,
                            setResult: a.setResult,
                            clearResult: a.clearResult,
                          });
                        };
                      })($5)(...e);
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
              return new (c || e)(N(kc), N($e), N(R3), N(u4), N(j9));
            });
            static #t = (this.ɵprov = w({ token: e, factory: e.ɵfac }));
          }
          return e;
        })(),
        U9 = (() => {
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
      function Pv2(e, n, t, c, s) {
        return new wr(e, n, t, c, s);
      }
      !(function wI(e = {}) {
        return (
          (function pK(e) {
            TL = e;
          })(!0),
          [
            { provide: $e, useFactory: () => new $e(), deps: [] },
            { provide: kc, useFactory: () => new kc(), deps: [] },
            { provide: U9, useFactory: () => new U9(), deps: [] },
            { provide: u4, useValue: e.initialState || {} },
            { provide: j9, useValue: e.selectors },
            { provide: B5, useExisting: kc },
            { provide: R3, useExisting: U9 },
            { provide: wr, useFactory: Pv2, deps: [kc, $e, R3, u4, j9] },
            { provide: f4, useExisting: wr },
          ]
        );
      })({ initialState: { course: br } }),
        (function oW(e, n) {
          return C$({ rootComponent: e, ...yv(n) });
        })(wQ, { providers: [...kv2.providers, ...Fv2.providers] }).catch(e => {
          throw new Error(e);
        });
    },
  },
  _4 => {
    _4((_4.s = 449));
  },
]);

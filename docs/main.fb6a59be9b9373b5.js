(self.webpackChunkenglish_learning_fe =
  self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    676: (Bt, dr, rt) => {
      'use strict';
      function $t(e, t) {
        return Object.is(e, t);
      }
      let pe = null,
        ht = !1,
        pt = 1;
      const Pe = Symbol('SIGNAL');
      function k(e) {
        const t = pe;
        return (pe = e), t;
      }
      const Q = {
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
      function tt(e) {
        if (ht) throw new Error('');
        if (null === pe) return;
        pe.consumerOnSignalRead(e);
        const t = pe.nextProducerIndex++;
        Ya(pe),
          t < pe.producerNode.length &&
            pe.producerNode[t] !== e &&
            Qi(pe) &&
            Qa(pe.producerNode[t], pe.producerIndexOfThis[t]),
          pe.producerNode[t] !== e &&
            ((pe.producerNode[t] = e),
            (pe.producerIndexOfThis[t] = Qi(pe) ? Xm(e, pe, t) : 0)),
          (pe.producerLastReadVersion[t] = e.version);
      }
      function Zm(e) {
        if (
          (!Qi(e) || e.dirty) &&
          (e.dirty || e.lastCleanEpoch !== pt)
        ) {
          if (!e.producerMustRecompute(e) && !ld(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = pt);
          e.producerRecomputeValue(e),
            (e.dirty = !1),
            (e.lastCleanEpoch = pt);
        }
      }
      function Qm(e) {
        if (void 0 === e.liveConsumerNode) return;
        const t = ht;
        ht = !0;
        try {
          for (const n of e.liveConsumerNode) n.dirty || Km(n);
        } finally {
          ht = t;
        }
      }
      function Ym() {
        return !1 !== pe?.consumerAllowSignalWrites;
      }
      function Km(e) {
        (e.dirty = !0), Qm(e), e.consumerMarkedDirty?.(e);
      }
      function Za(e) {
        return e && (e.nextProducerIndex = 0), k(e);
      }
      function ud(e, t) {
        if (
          (k(t),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (Qi(e))
            for (
              let n = e.nextProducerIndex;
              n < e.producerNode.length;
              n++
            )
              Qa(e.producerNode[n], e.producerIndexOfThis[n]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function ld(e) {
        Ya(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (Zm(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function dd(e) {
        if ((Ya(e), Qi(e)))
          for (let t = 0; t < e.producerNode.length; t++)
            Qa(e.producerNode[t], e.producerIndexOfThis[t]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length =
              e.liveConsumerIndexOfThis.length =
                0);
      }
      function Xm(e, t, n) {
        if ((Jm(e), 0 === e.liveConsumerNode.length && ev(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            e.producerIndexOfThis[r] = Xm(e.producerNode[r], e, r);
        return (
          e.liveConsumerIndexOfThis.push(n),
          e.liveConsumerNode.push(t) - 1
        );
      }
      function Qa(e, t) {
        if ((Jm(e), 1 === e.liveConsumerNode.length && ev(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            Qa(e.producerNode[r], e.producerIndexOfThis[r]);
        const n = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
          (e.liveConsumerIndexOfThis[t] =
            e.liveConsumerIndexOfThis[n]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          t < e.liveConsumerNode.length)
        ) {
          const r = e.liveConsumerIndexOfThis[t],
            o = e.liveConsumerNode[t];
          Ya(o), (o.producerIndexOfThis[r] = t);
        }
      }
      function Qi(e) {
        return (
          e.consumerIsAlwaysLive ||
          (e?.liveConsumerNode?.length ?? 0) > 0
        );
      }
      function Ya(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      function Jm(e) {
        (e.liveConsumerNode ??= []),
          (e.liveConsumerIndexOfThis ??= []);
      }
      function ev(e) {
        return void 0 !== e.producerNode;
      }
      const fd = Symbol('UNSET'),
        hd = Symbol('COMPUTING'),
        Ka = Symbol('ERRORED'),
        JT = {
          ...Q,
          value: fd,
          dirty: !0,
          error: null,
          equal: $t,
          producerMustRecompute: e =>
            e.value === fd || e.value === hd,
          producerRecomputeValue(e) {
            if (e.value === hd)
              throw new Error('Detected cycle in computations.');
            const t = e.value;
            e.value = hd;
            const n = Za(e);
            let r;
            try {
              r = e.computation();
            } catch (o) {
              (r = Ka), (e.error = o);
            } finally {
              ud(e, n);
            }
            t !== fd && t !== Ka && r !== Ka && e.equal(t, r)
              ? (e.value = t)
              : ((e.value = r), e.version++);
          },
        };
      let tv = function eA() {
        throw new Error();
      };
      function nv() {
        tv();
      }
      let Xa = null;
      function rv(e, t) {
        Ym() || nv(),
          e.equal(e.value, t) ||
            ((e.value = t),
            (function iA(e) {
              e.version++,
                (function KT() {
                  pt++;
                })(),
                Qm(e),
                Xa?.();
            })(e));
      }
      const oA = { ...Q, equal: $t, value: void 0 };
      function Ie(e) {
        return 'function' == typeof e;
      }
      function pd(e) {
        const n = e(r => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n),
          n
        );
      }
      const gd = pd(
        e =>
          function (n) {
            e(this),
              (this.message = n
                ? `${
                    n.length
                  } errors occurred during unsubscription:\n${n
                    .map((r, o) => `${o + 1}) ${r.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = n);
          },
      );
      function Ja(e, t) {
        if (e) {
          const n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      class at {
        constructor(t) {
          (this.initialTeardown = t),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        unsubscribe() {
          let t;
          if (!this.closed) {
            this.closed = !0;
            const { _parentage: n } = this;
            if (n)
              if (((this._parentage = null), Array.isArray(n)))
                for (const i of n) i.remove(this);
              else n.remove(this);
            const { initialTeardown: r } = this;
            if (Ie(r))
              try {
                r();
              } catch (i) {
                t = i instanceof gd ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  av(i);
                } catch (s) {
                  (t = t ?? []),
                    s instanceof gd
                      ? (t = [...t, ...s.errors])
                      : t.push(s);
                }
            }
            if (t) throw new gd(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) av(t);
            else {
              if (t instanceof at) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (n = this._finalizers) && void 0 !== n
                  ? n
                  : []).push(t);
            }
        }
        _hasParent(t) {
          const { _parentage: n } = this;
          return n === t || (Array.isArray(n) && n.includes(t));
        }
        _addParent(t) {
          const { _parentage: n } = this;
          this._parentage = Array.isArray(n)
            ? (n.push(t), n)
            : n
            ? [n, t]
            : t;
        }
        _removeParent(t) {
          const { _parentage: n } = this;
          n === t
            ? (this._parentage = null)
            : Array.isArray(n) && Ja(n, t);
        }
        remove(t) {
          const { _finalizers: n } = this;
          n && Ja(n, t), t instanceof at && t._removeParent(this);
        }
      }
      at.EMPTY = (() => {
        const e = new at();
        return (e.closed = !0), e;
      })();
      const iv = at.EMPTY;
      function sv(e) {
        return (
          e instanceof at ||
          (e &&
            'closed' in e &&
            Ie(e.remove) &&
            Ie(e.add) &&
            Ie(e.unsubscribe))
        );
      }
      function av(e) {
        Ie(e) ? e() : e.unsubscribe();
      }
      const jr = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        ec = {
          setTimeout(e, t, ...n) {
            const { delegate: r } = ec;
            return r?.setTimeout
              ? r.setTimeout(e, t, ...n)
              : setTimeout(e, t, ...n);
          },
          clearTimeout(e) {
            const { delegate: t } = ec;
            return (t?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function cv(e) {
        ec.setTimeout(() => {
          const { onUnhandledError: t } = jr;
          if (!t) throw e;
          t(e);
        });
      }
      function tc() {}
      const aA = md('C', void 0, void 0);
      function md(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      let Ur = null;
      function nc(e) {
        if (jr.useDeprecatedSynchronousErrorHandling) {
          const t = !Ur;
          if (
            (t && (Ur = { errorThrown: !1, error: null }), e(), t)
          ) {
            const { errorThrown: n, error: r } = Ur;
            if (((Ur = null), n)) throw r;
          }
        } else e();
      }
      class vd extends at {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), sv(t) && t.add(this))
              : (this.destination = pA);
        }
        static create(t, n, r) {
          return new _d(t, n, r);
        }
        next(t) {
          this.isStopped
            ? Cd(
                (function uA(e) {
                  return md('N', e, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? Cd(
                (function cA(e) {
                  return md('E', void 0, e);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? Cd(aA, this)
            : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0),
            super.unsubscribe(),
            (this.destination = null));
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          try {
            this.destination.error(t);
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
      const dA = Function.prototype.bind;
      function yd(e, t) {
        return dA.call(e, t);
      }
      class fA {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const { partialObserver: n } = this;
          if (n.next)
            try {
              n.next(t);
            } catch (r) {
              rc(r);
            }
        }
        error(t) {
          const { partialObserver: n } = this;
          if (n.error)
            try {
              n.error(t);
            } catch (r) {
              rc(r);
            }
          else rc(t);
        }
        complete() {
          const { partialObserver: t } = this;
          if (t.complete)
            try {
              t.complete();
            } catch (n) {
              rc(n);
            }
        }
      }
      class _d extends vd {
        constructor(t, n, r) {
          let o;
          if ((super(), Ie(t) || !t))
            o = {
              next: t ?? void 0,
              error: n ?? void 0,
              complete: r ?? void 0,
            };
          else {
            let i;
            this && jr.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: t.next && yd(t.next, i),
                  error: t.error && yd(t.error, i),
                  complete: t.complete && yd(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new fA(o);
        }
      }
      function rc(e) {
        jr.useDeprecatedSynchronousErrorHandling
          ? (function lA(e) {
              jr.useDeprecatedSynchronousErrorHandling &&
                Ur &&
                ((Ur.errorThrown = !0), (Ur.error = e));
            })(e)
          : cv(e);
      }
      function Cd(e, t) {
        const { onStoppedNotification: n } = jr;
        n && ec.setTimeout(() => n(e, t));
      }
      const pA = {
          closed: !0,
          next: tc,
          error: function hA(e) {
            throw e;
          },
          complete: tc,
        },
        Ed =
          ('function' == typeof Symbol && Symbol.observable) ||
          '@@observable';
      function Gn(e) {
        return e;
      }
      function uv(e) {
        return 0 === e.length
          ? Gn
          : 1 === e.length
          ? e[0]
          : function (n) {
              return e.reduce((r, o) => o(r), n);
            };
      }
      let ke = (() => {
        class e {
          constructor(n) {
            n && (this._subscribe = n);
          }
          lift(n) {
            const r = new e();
            return (r.source = this), (r.operator = n), r;
          }
          subscribe(n, r, o) {
            const i = (function vA(e) {
              return (
                (e && e instanceof vd) ||
                ((function mA(e) {
                  return (
                    e && Ie(e.next) && Ie(e.error) && Ie(e.complete)
                  );
                })(e) &&
                  sv(e))
              );
            })(n)
              ? n
              : new _d(n, r, o);
            return (
              nc(() => {
                const { operator: s, source: a } = this;
                i.add(
                  s
                    ? s.call(i, a)
                    : a
                    ? this._subscribe(i)
                    : this._trySubscribe(i),
                );
              }),
              i
            );
          }
          _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (r) {
              n.error(r);
            }
          }
          forEach(n, r) {
            return new (r = lv(r))((o, i) => {
              const s = new _d({
                next: a => {
                  try {
                    n(a);
                  } catch (c) {
                    i(c), s.unsubscribe();
                  }
                },
                error: i,
                complete: o,
              });
              this.subscribe(s);
            });
          }
          _subscribe(n) {
            var r;
            return null === (r = this.source) || void 0 === r
              ? void 0
              : r.subscribe(n);
          }
          [Ed]() {
            return this;
          }
          pipe(...n) {
            return uv(n)(this);
          }
          toPromise(n) {
            return new (n = lv(n))((r, o) => {
              let i;
              this.subscribe(
                s => (i = s),
                s => o(s),
                () => r(i),
              );
            });
          }
        }
        return (e.create = t => new e(t)), e;
      })();
      function lv(e) {
        var t;
        return null !== (t = e ?? jr.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      const yA = pd(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let mt = (() => {
        class e extends ke {
          constructor() {
            super(),
              (this.closed = !1),
              (this.currentObservers = null),
              (this.observers = []),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          lift(n) {
            const r = new dv(this, this);
            return (r.operator = n), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new yA();
          }
          next(n) {
            nc(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(
                    this.observers,
                  ));
                for (const r of this.currentObservers) r.next(n);
              }
            });
          }
          error(n) {
            nc(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0),
                  (this.thrownError = n);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(n);
              }
            });
          }
          complete() {
            nc(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.isStopped = !0;
                const { observers: n } = this;
                for (; n.length; ) n.shift().complete();
              }
            });
          }
          unsubscribe() {
            (this.isStopped = this.closed = !0),
              (this.observers = this.currentObservers = null);
          }
          get observed() {
            var n;
            return (
              (null === (n = this.observers) || void 0 === n
                ? void 0
                : n.length) > 0
            );
          }
          _trySubscribe(n) {
            return this._throwIfClosed(), super._trySubscribe(n);
          }
          _subscribe(n) {
            return (
              this._throwIfClosed(),
              this._checkFinalizedStatuses(n),
              this._innerSubscribe(n)
            );
          }
          _innerSubscribe(n) {
            const { hasError: r, isStopped: o, observers: i } = this;
            return r || o
              ? iv
              : ((this.currentObservers = null),
                i.push(n),
                new at(() => {
                  (this.currentObservers = null), Ja(i, n);
                }));
          }
          _checkFinalizedStatuses(n) {
            const {
              hasError: r,
              thrownError: o,
              isStopped: i,
            } = this;
            r ? n.error(o) : i && n.complete();
          }
          asObservable() {
            const n = new ke();
            return (n.source = this), n;
          }
        }
        return (e.create = (t, n) => new dv(t, n)), e;
      })();
      class dv extends mt {
        constructor(t, n) {
          super(), (this.destination = t), (this.source = n);
        }
        next(t) {
          var n, r;
          null ===
            (r =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.next) ||
            void 0 === r ||
            r.call(n, t);
        }
        error(t) {
          var n, r;
          null ===
            (r =
              null === (n = this.destination) || void 0 === n
                ? void 0
                : n.error) ||
            void 0 === r ||
            r.call(n, t);
        }
        complete() {
          var t, n;
          null ===
            (n =
              null === (t = this.destination) || void 0 === t
                ? void 0
                : t.complete) ||
            void 0 === n ||
            n.call(t);
        }
        _subscribe(t) {
          var n, r;
          return null !==
            (r =
              null === (n = this.source) || void 0 === n
                ? void 0
                : n.subscribe(t)) && void 0 !== r
            ? r
            : iv;
        }
      }
      class vt extends mt {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const n = super._subscribe(t);
          return !n.closed && t.next(this._value), n;
        }
        getValue() {
          const { hasError: t, thrownError: n, _value: r } = this;
          if (t) throw n;
          return this._throwIfClosed(), r;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      function fv(e) {
        return Ie(e?.lift);
      }
      function Be(e) {
        return t => {
          if (fv(t))
            return t.lift(function (n) {
              try {
                return e(n, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError(
            'Unable to lift unknown Observable type',
          );
        };
      }
      function Oe(e, t, n, r, o) {
        return new _A(e, t, n, r, o);
      }
      class _A extends vd {
        constructor(t, n, r, o, i, s) {
          super(t),
            (this.onFinalize = i),
            (this.shouldUnsubscribe = s),
            (this._next = n
              ? function (a) {
                  try {
                    n(a);
                  } catch (c) {
                    t.error(c);
                  }
                }
              : super._next),
            (this._error = o
              ? function (a) {
                  try {
                    o(a);
                  } catch (c) {
                    t.error(c);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._error),
            (this._complete = r
              ? function () {
                  try {
                    r();
                  } catch (a) {
                    t.error(a);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : super._complete);
        }
        unsubscribe() {
          var t;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            const { closed: n } = this;
            super.unsubscribe(),
              !n &&
                (null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this));
          }
        }
      }
      function oe(e, t) {
        return Be((n, r) => {
          let o = 0;
          n.subscribe(
            Oe(r, i => {
              r.next(e.call(t, i, o++));
            }),
          );
        });
      }
      typeof navigator < 'u' && navigator,
        typeof navigator < 'u' &&
          !/Opera/.test(navigator.userAgent) &&
          navigator,
        typeof navigator < 'u' &&
          (/MSIE/.test(navigator.userAgent) || navigator),
        typeof navigator < 'u' &&
          !/Opera|WebKit/.test(navigator.userAgent) &&
          navigator,
        typeof navigator < 'u' && navigator;
      const Rv = 'https://g.co/ng/security#xss';
      class E extends Error {
        constructor(t, n) {
          super(
            (function bo(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t : ''}`;
            })(t, n),
          ),
            (this.code = t);
        }
      }
      function qn(e) {
        return { toString: e }.toString();
      }
      const So = '__parameters__';
      function To(e, t, n) {
        return qn(() => {
          const r = (function Ad(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const o in r) this[o] = r[o];
              }
            };
          })(t);
          function o(...i) {
            if (this instanceof o) return r.apply(this, i), this;
            const s = new o(...i);
            return (a.annotation = s), a;
            function a(c, u, l) {
              const d = c.hasOwnProperty(So)
                ? c[So]
                : Object.defineProperty(c, So, { value: [] })[So];
              for (; d.length <= l; ) d.push(null);
              return (d[l] = d[l] || []).push(s), c;
            }
          }
          return (
            n && (o.prototype = Object.create(n.prototype)),
            (o.prototype.ngMetadataName = e),
            (o.annotationCls = o),
            o
          );
        });
      }
      const Se = globalThis;
      function de(e) {
        for (let t in e) if (e[t] === de) return t;
        throw Error(
          'Could not find renamed property on target object.',
        );
      }
      function CN(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) &&
            !e.hasOwnProperty(n) &&
            (e[n] = t[n]);
      }
      function Ze(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(Ze).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function Nd(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const EN = de({ __forward_ref__: de });
      function Ce(e) {
        return (
          (e.__forward_ref__ = Ce),
          (e.toString = function () {
            return Ze(this());
          }),
          e
        );
      }
      function P(e) {
        return cc(e) ? e() : e;
      }
      function cc(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(EN) &&
          e.__forward_ref__ === Ce
        );
      }
      function S(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Ao(e) {
        return {
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function uc(e) {
        return kv(e, dc) || kv(e, Pv);
      }
      function kv(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function lc(e) {
        return e && (e.hasOwnProperty(Rd) || e.hasOwnProperty(MN))
          ? e[Rd]
          : null;
      }
      const dc = de({ ɵprov: de }),
        Rd = de({ ɵinj: de }),
        Pv = de({ ngInjectableDef: de }),
        MN = de({ ngInjectorDef: de });
      class D {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = S({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory,
                }));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Pd(e) {
        return e && !!e.ɵproviders;
      }
      const Ki = de({ ɵcmp: de }),
        Ld = de({ ɵdir: de }),
        Vd = de({ ɵpipe: de }),
        Vv = de({ ɵmod: de }),
        Wn = de({ ɵfac: de }),
        Xi = de({ __NG_ELEMENT_ID__: de }),
        jv = de({ __NG_ENV_ID__: de });
      function $(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function jd(e, t) {
        throw new E(-201, !1);
      }
      var X = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(X || {});
      let Ud;
      function Uv() {
        return Ud;
      }
      function Rt(e) {
        const t = Ud;
        return (Ud = e), t;
      }
      function Bv(e, t, n) {
        const r = uc(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & X.Optional
          ? null
          : void 0 !== t
          ? t
          : void jd();
      }
      const Ji = {},
        Bd = '__NG_DI_FLAG__',
        fc = 'ngTempTokenPath',
        ON = /\n/gm,
        $v = '__source';
      let No;
      function pr(e) {
        const t = No;
        return (No = e), t;
      }
      function PN(e, t = X.Default) {
        if (void 0 === No) throw new E(-203, !1);
        return null === No
          ? Bv(e, void 0, t)
          : No.get(e, t & X.Optional ? null : void 0, t);
      }
      function A(e, t = X.Default) {
        return (Uv() || PN)(P(e), t);
      }
      function _(e, t = X.Default) {
        return A(e, hc(t));
      }
      function hc(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function $d(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = P(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new E(900, !1);
            let o,
              i = X.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                c = LN(a);
              'number' == typeof c
                ? -1 === c
                  ? (o = a.token)
                  : (i |= c)
                : (o = a);
            }
            t.push(A(o, i));
          } else t.push(A(r));
        }
        return t;
      }
      function es(e, t) {
        return (e[Bd] = t), (e.prototype[Bd] = t), e;
      }
      function LN(e) {
        return e[Bd];
      }
      const zv = es(
          To('Inject', e => ({ token: e })),
          -1,
        ),
        Hd = es(To('Optional'), 8),
        zd = es(To('SkipSelf'), 4);
      function $r(e, t) {
        return e.hasOwnProperty(Wn) ? e[Wn] : null;
      }
      function Ro(e, t) {
        e.forEach(n => (Array.isArray(n) ? Ro(n, t) : t(n)));
      }
      function Gv(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function pc(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Gt(e, t, n) {
        let r = xo(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function qv(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; )
                    (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function qd(e, t) {
        const n = xo(e, t);
        if (n >= 0) return e[1 | n];
      }
      function xo(e, t) {
        return (function Wv(e, t, n) {
          let r = 0,
            o = e.length >> n;
          for (; o !== r; ) {
            const i = r + ((o - r) >> 1),
              s = e[i << n];
            if (t === s) return i << n;
            s > t ? (o = i) : (r = i + 1);
          }
          return ~(o << n);
        })(e, t, 1);
      }
      const Tn = {},
        ie = [],
        qt = new D(''),
        Zv = new D('', -1),
        Wd = new D('');
      class mc {
        get(t, n = Ji) {
          if (n === Ji) {
            const r = new Error(
              `NullInjectorError: No provider for ${Ze(t)}!`,
            );
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      var vc = (function (e) {
          return (
            (e[(e.OnPush = 0)] = 'OnPush'),
            (e[(e.Default = 1)] = 'Default'),
            e
          );
        })(vc || {}),
        dn = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })(dn || {}),
        gr = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] =
              'HasDecoratorInputTransform'),
            e
          );
        })(gr || {});
      function HN(e, t, n) {
        let r = e.length;
        for (;;) {
          const o = e.indexOf(t, n);
          if (-1 === o) return o;
          if (0 === o || e.charCodeAt(o - 1) <= 32) {
            const i = t.length;
            if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
          }
          n = o + 1;
        }
      }
      function Zd(e, t, n) {
        let r = 0;
        for (; r < n.length; ) {
          const o = n[r];
          if ('number' == typeof o) {
            if (0 !== o) break;
            r++;
            const i = n[r++],
              s = n[r++],
              a = n[r++];
            e.setAttribute(t, s, a, i);
          } else {
            const i = o,
              s = n[++r];
            Yv(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s),
              r++;
          }
        }
        return r;
      }
      function Qv(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Yv(e) {
        return 64 === e.charCodeAt(0);
      }
      function ts(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o
                ? (n = o)
                : 0 === n ||
                  Kv(
                    e,
                    n,
                    o,
                    null,
                    -1 === n || 2 === n ? t[++r] : null,
                  );
            }
          }
        return e;
      }
      function Kv(e, t, n, r, o) {
        let i = 0,
          s = e.length;
        if (-1 === t) s = -1;
        else
          for (; i < e.length; ) {
            const a = e[i++];
            if ('number' == typeof a) {
              if (a === t) {
                s = -1;
                break;
              }
              if (a > t) {
                s = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const a = e[i];
          if ('number' == typeof a) break;
          if (a === n) {
            if (null === r)
              return void (null !== o && (e[i + 1] = o));
            if (r === e[i + 1]) return void (e[i + 2] = o);
          }
          i++, null !== r && i++, null !== o && i++;
        }
        -1 !== s && (e.splice(s, 0, t), (i = s + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== o && e.splice(i++, 0, o);
      }
      const Xv = 'ng-template';
      function zN(e, t, n, r) {
        let o = 0;
        if (r) {
          for (; o < t.length && 'string' == typeof t[o]; o += 2)
            if (
              'class' === t[o] &&
              -1 !== HN(t[o + 1].toLowerCase(), n, 0)
            )
              return !0;
        } else if (Qd(e)) return !1;
        if (((o = t.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < t.length && 'string' == typeof (i = t[o]); )
            if (i.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function Qd(e) {
        return 4 === e.type && e.value !== Xv;
      }
      function GN(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Xv);
      }
      function qN(e, t, n) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function QN(e) {
                  for (let t = 0; t < e.length; t++)
                    if (Qv(e[t])) return t;
                  return e.length;
                })(o)
              : 0;
        let s = !1;
        for (let a = 0; a < t.length; a++) {
          const c = t[a];
          if ('number' != typeof c) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== c && !GN(e, c, n)) ||
                    ('' === c && 1 === t.length))
                ) {
                  if (fn(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !zN(e, o, c, n)) {
                  if (fn(r)) return !1;
                  s = !0;
                }
              } else {
                const u = t[++a],
                  l = WN(c, o, Qd(e), n);
                if (-1 === l) {
                  if (fn(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== u) {
                  let d;
                  if (
                    ((d = l > i ? '' : o[l + 1].toLowerCase()),
                    2 & r && u !== d)
                  ) {
                    if (fn(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !fn(r) && !fn(c)) return !1;
            if (s && fn(c)) continue;
            (s = !1), (r = c | (1 & r));
          }
        }
        return fn(r) || s;
      }
      function fn(e) {
        return !(1 & e);
      }
      function WN(e, t, n, r) {
        if (null === t) return -1;
        let o = 0;
        if (r || !n) {
          let i = !1;
          for (; o < t.length; ) {
            const s = t[o];
            if (s === e) return o;
            if (3 === s || 6 === s) i = !0;
            else {
              if (1 === s || 2 === s) {
                let a = t[++o];
                for (; 'string' == typeof a; ) a = t[++o];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                o += 4;
                continue;
              }
            }
            o += i ? 1 : 2;
          }
          return -1;
        }
        return (function YN(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Jv(e, t, n = !1) {
        for (let r = 0; r < t.length; r++)
          if (qN(e, t[r], n)) return !0;
        return !1;
      }
      function KN(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++)
              if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function ey(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function XN(e) {
        let t = e[0],
          n = 1,
          r = 2,
          o = '',
          i = !1;
        for (; n < e.length; ) {
          let s = e[n];
          if ('string' == typeof s)
            if (2 & r) {
              const a = e[++n];
              o +=
                '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & r ? (o += '.' + s) : 4 & r && (o += ' ' + s);
          else
            '' !== o && !fn(s) && ((t += ey(i, o)), (o = '')),
              (r = s),
              (i = i || !fn(r));
          n++;
        }
        return '' !== o && (t += ey(i, o)), t;
      }
      function J(e) {
        return qn(() => {
          const t = ny(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === vc.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || dn.Emulated,
              styles: e.styles || ie,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          ry(n);
          const r = e.dependencies;
          return (
            (n.directiveDefs = yc(r, !1)),
            (n.pipeDefs = yc(r, !0)),
            (n.id = (function oR(e) {
              let t = 0;
              const n = [
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
              for (const o of n)
                t = (Math.imul(31, t) + o.charCodeAt(0)) | 0;
              return (t += 2147483648), 'c' + t;
            })(n)),
            n
          );
        });
      }
      function tR(e) {
        return Y(e) || Qe(e);
      }
      function nR(e) {
        return null !== e;
      }
      function ns(e) {
        return qn(() => ({
          type: e.type,
          bootstrap: e.bootstrap || ie,
          declarations: e.declarations || ie,
          imports: e.imports || ie,
          exports: e.exports || ie,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function ty(e, t) {
        if (null == e) return Tn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            let i,
              s,
              a = gr.None;
            Array.isArray(o)
              ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
              : ((i = o), (s = o)),
              t
                ? ((n[i] = a !== gr.None ? [r, a] : r), (t[i] = s))
                : (n[i] = r);
          }
        return n;
      }
      function B(e) {
        return qn(() => {
          const t = ny(e);
          return ry(t), t;
        });
      }
      function Y(e) {
        return e[Ki] || null;
      }
      function Qe(e) {
        return e[Ld] || null;
      }
      function ot(e) {
        return e[Vd] || null;
      }
      function ct(e, t) {
        const n = e[Vv] || null;
        if (!n && !0 === t)
          throw new Error(
            `Type ${Ze(e)} does not have '\u0275mod' property.`,
          );
        return n;
      }
      function ny(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          inputTransforms: null,
          inputConfig: e.inputs || Tn,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || ie,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: ty(e.inputs, t),
          outputs: ty(e.outputs),
          debugInfo: null,
        };
      }
      function ry(e) {
        e.features?.forEach(t => t(e));
      }
      function yc(e, t) {
        if (!e) return null;
        const n = t ? ot : tR;
        return () =>
          ('function' == typeof e ? e() : e)
            .map(r => n(r))
            .filter(nR);
      }
      function Oo(e) {
        return { ɵproviders: e };
      }
      function iR(...e) {
        return { ɵproviders: Yd(0, e), ɵfromNgModule: !0 };
      }
      function Yd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        const i = s => {
          n.push(s);
        };
        return (
          Ro(t, s => {
            const a = s;
            _c(a, i, [], r) && ((o ||= []), o.push(a));
          }),
          void 0 !== o && oy(o, i),
          n
        );
      }
      function oy(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: o } = e[n];
          Kd(o, i => {
            t(i, r);
          });
        }
      }
      function _c(e, t, n, r) {
        if (!(e = P(e))) return !1;
        let o = null,
          i = lc(e);
        const s = !i && Y(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const c = e.ngModule;
          if (((i = lc(c)), !i)) return !1;
          o = c;
        }
        const a = r.has(o);
        if (s) {
          if (a) return !1;
          if ((r.add(o), s.dependencies)) {
            const c =
              'function' == typeof s.dependencies
                ? s.dependencies()
                : s.dependencies;
            for (const u of c) _c(u, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !a) {
              let u;
              r.add(o);
              try {
                Ro(i.imports, l => {
                  _c(l, t, n, r) && ((u ||= []), u.push(l));
                });
              } finally {
              }
              void 0 !== u && oy(u, t);
            }
            if (!a) {
              const u = $r(o) || (() => new o());
              t({ provide: o, useFactory: u, deps: ie }, o),
                t({ provide: Wd, useValue: o, multi: !0 }, o),
                t(
                  { provide: qt, useValue: () => A(o), multi: !0 },
                  o,
                );
            }
            const c = i.providers;
            if (null != c && !a) {
              const u = e;
              Kd(c, l => {
                t(l, u);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Kd(e, t) {
        for (let n of e)
          Pd(n) && (n = n.ɵproviders),
            Array.isArray(n) ? Kd(n, t) : t(n);
      }
      const sR = de({ provide: String, useValue: de });
      function Xd(e) {
        return null !== e && 'object' == typeof e && sR in e;
      }
      function Hr(e) {
        return 'function' == typeof e;
      }
      const Jd = new D(''),
        Cc = {},
        cR = {};
      let ef;
      function Ec() {
        return void 0 === ef && (ef = new mc()), ef;
      }
      class Wt {}
      class Fo extends Wt {
        get destroyed() {
          return this._destroyed;
        }
        constructor(t, n, r, o) {
          super(),
            (this.parent = n),
            (this.source = r),
            (this.scopes = o),
            (this.records = new Map()),
            (this._ngOnDestroyHooks = new Set()),
            (this._onDestroyHooks = []),
            (this._destroyed = !1),
            nf(t, s => this.processProvider(s)),
            this.records.set(Zv, ko(void 0, this)),
            o.has('environment') &&
              this.records.set(Wt, ko(void 0, this));
          const i = this.records.get(Jd);
          null != i &&
            'string' == typeof i.value &&
            this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(
              this.get(Wd, ie, X.Self),
            ));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const t = k(null);
          try {
            for (const r of this._ngOnDestroyHooks) r.ngOnDestroy();
            const n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const r of n) r();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              k(t);
          }
        }
        onDestroy(t) {
          return (
            this.assertNotDestroyed(),
            this._onDestroyHooks.push(t),
            () => this.removeOnDestroy(t)
          );
        }
        runInContext(t) {
          this.assertNotDestroyed();
          const n = pr(this),
            r = Rt(void 0);
          try {
            return t();
          } finally {
            pr(n), Rt(r);
          }
        }
        get(t, n = Ji, r = X.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(jv)))
            return t[jv](this);
          r = hc(r);
          const i = pr(this),
            s = Rt(void 0);
          try {
            if (!(r & X.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const u =
                  (function hR(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof D)
                    );
                  })(t) && uc(t);
                (c =
                  u && this.injectableDefInScope(u)
                    ? ko(tf(t), Cc)
                    : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & X.Self ? Ec() : this.parent).get(
              t,
              (n = r & X.Optional && n === Ji ? null : n),
            );
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[fc] = a[fc] || []).unshift(Ze(t)), i)) throw a;
              return (function VN(e, t, n, r) {
                const o = e[fc];
                throw (
                  (t[$v] && o.unshift(t[$v]),
                  (e.message = (function jN(e, t, n, r = null) {
                    e =
                      e &&
                      '\n' === e.charAt(0) &&
                      '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = Ze(t);
                    if (Array.isArray(t)) o = t.map(Ze).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let a = t[s];
                          i.push(
                            s +
                              ':' +
                              ('string' == typeof a
                                ? JSON.stringify(a)
                                : Ze(a)),
                          );
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${n}${
                      r ? '(' + r + ')' : ''
                    }[${o}]: ${e.replace(ON, '\n  ')}`;
                  })('\n' + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[fc] = null),
                  e)
                );
              })(a, t, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            Rt(s), pr(i);
          }
        }
        resolveInjectorInitializers() {
          const t = k(null),
            n = pr(this),
            r = Rt(void 0);
          try {
            const i = this.get(qt, ie, X.Self);
            for (const s of i) s();
          } finally {
            pr(n), Rt(r), k(t);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(Ze(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new E(205, !1);
        }
        processProvider(t) {
          let n = Hr((t = P(t))) ? t : P(t && t.provide);
          const r = (function lR(e) {
            return Xd(e) ? ko(void 0, e.useValue) : ko(ay(e), Cc);
          })(t);
          if (!Hr(t) && !0 === t.multi) {
            let o = this.records.get(n);
            o ||
              ((o = ko(void 0, Cc, !0)),
              (o.factory = () => $d(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          const r = k(null);
          try {
            return (
              n.value === Cc &&
                ((n.value = cR), (n.value = n.factory())),
              'object' == typeof n.value &&
                n.value &&
                (function fR(e) {
                  return (
                    null !== e &&
                    'object' == typeof e &&
                    'function' == typeof e.ngOnDestroy
                  );
                })(n.value) &&
                this._ngOnDestroyHooks.add(n.value),
              n.value
            );
          } finally {
            k(r);
          }
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = P(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function tf(e) {
        const t = uc(e),
          n = null !== t ? t.factory : $r(e);
        if (null !== n) return n;
        if (e instanceof D) throw new E(204, !1);
        if (e instanceof Function)
          return (function uR(e) {
            if (e.length > 0) throw new E(204, !1);
            const n = (function SN(e) {
              return (e && (e[dc] || e[Pv])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new E(204, !1);
      }
      function ay(e, t, n) {
        let r;
        if (Hr(e)) {
          const o = P(e);
          return $r(o) || tf(o);
        }
        if (Xd(e)) r = () => P(e.useValue);
        else if (
          (function sy(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...$d(e.deps || []));
        else if (
          (function iy(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => A(P(e.useExisting));
        else {
          const o = P(e && (e.useClass || e.provide));
          if (
            !(function dR(e) {
              return !!e.deps;
            })(e)
          )
            return $r(o) || tf(o);
          r = () => new o(...$d(e.deps));
        }
        return r;
      }
      function ko(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function nf(e, t) {
        for (const n of e)
          Array.isArray(n)
            ? nf(n, t)
            : n && Pd(n)
            ? nf(n.ɵproviders, t)
            : t(n);
      }
      function Zn(e, t) {
        e instanceof Fo && e.assertNotDestroyed();
        const r = pr(e),
          o = Rt(void 0);
        try {
          return t();
        } finally {
          pr(r), Rt(o);
        }
      }
      function cy() {
        return (
          void 0 !== Uv() ||
          null !=
            (function kN() {
              return No;
            })()
        );
      }
      const Ne = 0,
        b = 1,
        R = 2,
        He = 3,
        hn = 4,
        it = 5,
        yt = 6,
        Lo = 7,
        Ee = 8,
        ze = 9,
        An = 10,
        V = 11,
        is = 12,
        ly = 13,
        Vo = 14,
        Re = 15,
        zr = 16,
        jo = 17,
        Qn = 18,
        Uo = 19,
        dy = 20,
        vr = 21,
        wc = 22,
        tn = 23,
        N = 25,
        sf = 1,
        Nn = 7,
        Bo = 9,
        Le = 10;
      var Ic = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(Ic || {});
      function nt(e) {
        return Array.isArray(e) && 'object' == typeof e[sf];
      }
      function ut(e) {
        return Array.isArray(e) && !0 === e[sf];
      }
      function af(e) {
        return !!(4 & e.flags);
      }
      function Gr(e) {
        return e.componentOffset > -1;
      }
      function Sc(e) {
        return !(1 & ~e.flags);
      }
      function pn(e) {
        return !!e.template;
      }
      function as(e) {
        return !!(512 & e[R]);
      }
      class SR {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function gy(e, t, n, r) {
        null !== t ? t.applyValueToInputSignal(t, r) : (e[n] = r);
      }
      function nn() {
        return my;
      }
      function my(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = TR), MR;
      }
      function MR() {
        const e = yy(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === Tn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function TR(e, t, n, r, o) {
        const i = this.declaredInputs[r],
          s =
            yy(e) ||
            (function AR(e, t) {
              return (e[vy] = t);
            })(e, { previous: Tn, current: null }),
          a = s.current || (s.current = {}),
          c = s.previous,
          u = c[i];
        (a[i] = new SR(u && u.currentValue, n, c === Tn)),
          gy(e, t, o, n);
      }
      nn.ngInherit = !0;
      const vy = '__ngSimpleChanges__';
      function yy(e) {
        return e[vy] || null;
      }
      const Rn = function (e, t, n) {};
      function se(e) {
        for (; Array.isArray(e); ) e = e[Ne];
        return e;
      }
      function cs(e, t) {
        return se(t[e]);
      }
      function _t(e, t) {
        return se(t[e.index]);
      }
      function us(e, t) {
        return e.data[t];
      }
      function Zt(e, t) {
        const n = t[e];
        return nt(n) ? n : n[Ne];
      }
      function ff(e) {
        return !(128 & ~e[R]);
      }
      function rn(e, t) {
        return null == t ? null : e[t];
      }
      function Ey(e) {
        e[jo] = 0;
      }
      function Dy(e) {
        1024 & e[R] || ((e[R] |= 1024), ff(e) && Mc(e));
      }
      function ls(e) {
        return !!(9216 & e[R] || e[tn]?.dirty);
      }
      function hf(e) {
        e[An].changeDetectionScheduler?.notify(7),
          64 & e[R] && (e[R] |= 1024),
          ls(e) && Mc(e);
      }
      function Mc(e) {
        e[An].changeDetectionScheduler?.notify(0);
        let t = Yn(e);
        for (
          ;
          null !== t && !(8192 & t[R]) && ((t[R] |= 8192), ff(t));

        )
          t = Yn(t);
      }
      function Tc(e, t) {
        if (!(256 & ~e[R])) throw new E(911, !1);
        null === e[vr] && (e[vr] = []), e[vr].push(t);
      }
      function Yn(e) {
        const t = e[He];
        return ut(t) ? t[He] : t;
      }
      const j = {
        lFrame: ky(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      let by = !1;
      function Iy() {
        return j.bindingsEnabled;
      }
      function Wr() {
        return null !== j.skipHydrationRootTNode;
      }
      function v() {
        return j.lFrame.lView;
      }
      function W() {
        return j.lFrame.tView;
      }
      function Ft(e) {
        return (j.lFrame.contextLView = e), e[Ee];
      }
      function kt(e) {
        return (j.lFrame.contextLView = null), e;
      }
      function fe() {
        let e = Sy();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function Sy() {
        return j.lFrame.currentTNode;
      }
      function gn(e, t) {
        const n = j.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function mf() {
        return j.lFrame.isParent;
      }
      function vf() {
        j.lFrame.isParent = !1;
      }
      function Ay() {
        return by;
      }
      function Ny(e) {
        by = e;
      }
      function mn() {
        return j.lFrame.bindingIndex++;
      }
      function HR(e, t) {
        const n = j.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), yf(t);
      }
      function yf(e) {
        j.lFrame.currentDirectiveIndex = e;
      }
      function Cf() {
        return j.lFrame.currentQueryIndex;
      }
      function Nc(e) {
        j.lFrame.currentQueryIndex = e;
      }
      function GR(e) {
        const t = e[b];
        return 2 === t.type
          ? t.declTNode
          : 1 === t.type
          ? e[it]
          : null;
      }
      function Oy(e, t, n) {
        if (n & X.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & X.Host ||
              ((o = GR(i)),
              null === o || ((i = i[Vo]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (j.lFrame = Fy());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Ef(e) {
        const t = Fy(),
          n = e[b];
        (j.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Fy() {
        const e = j.lFrame,
          t = null === e ? null : e.child;
        return null === t ? ky(e) : t;
      }
      function ky(e) {
        const t = {
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
        return null !== e && (e.child = t), t;
      }
      function Py() {
        const e = j.lFrame;
        return (
          (j.lFrame = e.parent),
          (e.currentTNode = null),
          (e.lView = null),
          e
        );
      }
      const Ly = Py;
      function Df() {
        const e = Py();
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
      function st() {
        return j.lFrame.selectedIndex;
      }
      function Zr(e) {
        j.lFrame.selectedIndex = e;
      }
      function De() {
        const e = j.lFrame;
        return us(e.tView, e.selectedIndex);
      }
      let jy = !0;
      function fs() {
        return jy;
      }
      function xn(e) {
        jy = e;
      }
      function Rc(e, t) {
        for (
          let n = t.directiveStart, r = t.directiveEnd;
          n < r;
          n++
        ) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: s,
              ngAfterContentChecked: a,
              ngAfterViewInit: c,
              ngAfterViewChecked: u,
              ngOnDestroy: l,
            } = i;
          s && (e.contentHooks ??= []).push(-n, s),
            a &&
              ((e.contentHooks ??= []).push(n, a),
              (e.contentCheckHooks ??= []).push(n, a)),
            c && (e.viewHooks ??= []).push(-n, c),
            u &&
              ((e.viewHooks ??= []).push(n, u),
              (e.viewCheckHooks ??= []).push(n, u)),
            null != l && (e.destroyHooks ??= []).push(n, l);
        }
      }
      function xc(e, t, n) {
        Uy(e, t, 3, n);
      }
      function Oc(e, t, n, r) {
        (3 & e[R]) === n && Uy(e, t, n, r);
      }
      function wf(e, t) {
        let n = e[R];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[R] = n));
      }
      function Uy(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let a = 0;
        for (let c = void 0 !== r ? 65535 & e[jo] : 0; c < s; c++)
          if ('number' == typeof t[c + 1]) {
            if (((a = t[c]), null != r && a >= r)) break;
          } else
            t[c] < 0 && (e[jo] += 65536),
              (a < i || -1 == i) &&
                (XR(e, n, t, c),
                (e[jo] = (4294901760 & e[jo]) + c + 2)),
              c++;
      }
      function By(e, t) {
        Rn(4, e, t);
        const n = k(null);
        try {
          t.call(e);
        } finally {
          k(n), Rn(5, e, t);
        }
      }
      function XR(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        o
          ? e[R] >> 14 < e[jo] >> 16 &&
            (3 & e[R]) === t &&
            ((e[R] += 16384), By(a, i))
          : By(a, i);
      }
      const $o = -1;
      class hs {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      const If = {};
      class Qr {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = hc(r);
          const o = this.injector.get(t, If, r);
          return o !== If || n === If
            ? o
            : this.parentInjector.get(t, n, r);
        }
      }
      function Sf(e) {
        return e !== $o;
      }
      function ps(e) {
        return 32767 & e;
      }
      function gs(e, t) {
        let n = (function nx(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Vo]), n--;
        return r;
      }
      let Mf = !0;
      function Fc(e) {
        const t = Mf;
        return (Mf = e), t;
      }
      const Hy = 255,
        zy = 5;
      let ox = 0;
      const On = {};
      function kc(e, t) {
        const n = Gy(e, t);
        if (-1 !== n) return n;
        const r = t[b];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Tf(r.data, e),
          Tf(t, null),
          Tf(r.blueprint, null));
        const o = Pc(e, t),
          i = e.injectorIndex;
        if (Sf(o)) {
          const s = ps(o),
            a = gs(o, t),
            c = a[b].data;
          for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
        }
        return (t[i + 8] = o), i;
      }
      function Tf(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Gy(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Pc(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = Xy(o)), null === r)) return $o;
          if ((n++, (o = o[Vo]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return $o;
      }
      function Af(e, t, n) {
        !(function ix(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Xi) && (r = n[Xi]),
            null == r && (r = n[Xi] = ox++);
          const o = r & Hy;
          t.data[e + (o >> zy)] |= 1 << o;
        })(e, t, n);
      }
      function qy(e, t, n) {
        if (n & X.Optional || void 0 !== e) return e;
        jd();
      }
      function Wy(e, t, n, r) {
        if (
          (n & X.Optional && void 0 === r && (r = null),
          !(n & (X.Self | X.Host)))
        ) {
          const o = e[ze],
            i = Rt(void 0);
          try {
            return o
              ? o.get(t, r, n & X.Optional)
              : Bv(t, r, n & X.Optional);
          } finally {
            Rt(i);
          }
        }
        return qy(r, 0, n);
      }
      function Zy(e, t, n, r = X.Default, o) {
        if (null !== e) {
          if (2048 & t[R] && !(r & X.Self)) {
            const s = (function lx(e, t, n, r, o) {
              let i = e,
                s = t;
              for (
                ;
                null !== i &&
                null !== s &&
                2048 & s[R] &&
                !(512 & s[R]);

              ) {
                const a = Qy(i, s, n, r | X.Self, On);
                if (a !== On) return a;
                let c = i.parent;
                if (!c) {
                  const u = s[dy];
                  if (u) {
                    const l = u.get(n, On, r);
                    if (l !== On) return l;
                  }
                  (c = Xy(s)), (s = s[Vo]);
                }
                i = c;
              }
              return o;
            })(e, t, n, r, On);
            if (s !== On) return s;
          }
          const i = Qy(e, t, n, r, On);
          if (i !== On) return i;
        }
        return Wy(t, n, r, o);
      }
      function Qy(e, t, n, r, o) {
        const i = (function cx(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Xi) ? e[Xi] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & Hy : ux) : t;
        })(n);
        if ('function' == typeof i) {
          if (!Oy(t, e, r))
            return r & X.Host ? qy(o, 0, r) : Wy(t, n, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & X.Optional)) return s;
            jd();
          } finally {
            Ly();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = Gy(e, t),
            c = $o,
            u = r & X.Host ? t[Re][it] : null;
          for (
            (-1 === a || r & X.SkipSelf) &&
            ((c = -1 === a ? Pc(e, t) : t[a + 8]),
            c !== $o && Ky(r, !1)
              ? ((s = t[b]), (a = ps(c)), (t = gs(c, t)))
              : (a = -1));
            -1 !== a;

          ) {
            const l = t[b];
            if (Yy(i, a, l.data)) {
              const d = ax(a, t, n, s, r, u);
              if (d !== On) return d;
            }
            (c = t[a + 8]),
              c !== $o && Ky(r, t[b].data[a + 8] === u) && Yy(i, a, t)
                ? ((s = l), (a = ps(c)), (t = gs(c, t)))
                : (a = -1);
          }
        }
        return o;
      }
      function ax(e, t, n, r, o, i) {
        const s = t[b],
          a = s.data[e + 8],
          l = Lc(
            a,
            s,
            n,
            null == r ? Gr(a) && Mf : r != s && !!(3 & a.type),
            o & X.Host && i === a,
          );
        return null !== l ? Yr(t, s, l, a) : On;
      }
      function Lc(e, t, n, r, o) {
        const i = e.providerIndexes,
          s = t.data,
          a = 1048575 & i,
          c = e.directiveStart,
          l = i >> 20,
          f = o ? a + l : e.directiveEnd;
        for (let h = r ? a : a + l; h < f; h++) {
          const p = s[h];
          if ((h < c && n === p) || (h >= c && p.type === n))
            return h;
        }
        if (o) {
          const h = s[c];
          if (h && pn(h) && h.type === n) return c;
        }
        return null;
      }
      function Yr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function JR(e) {
            return e instanceof hs;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function NN(e, t) {
              throw (t && t.join(' > '), new E(-200, e));
            })(
              (function ce(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : $(e);
              })(i[n]),
            );
          const a = Fc(s.canSeeViewProviders);
          s.resolving = !0;
          const u = s.injectImpl ? Rt(s.injectImpl) : null;
          Oy(e, r, X.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function KR(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const s = my(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  o && (n.preOrderHooks ??= []).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks ??= []).push(e, i),
                      (n.preOrderCheckHooks ??= []).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== u && Rt(u), Fc(a), (s.resolving = !1), Ly();
          }
        }
        return o;
      }
      function Yy(e, t, n) {
        return !!(n[t + (e >> zy)] & (1 << e));
      }
      function Ky(e, t) {
        return !(e & X.Self || (e & X.Host && t));
      }
      class Ke {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Zy(this._tNode, this._lView, t, hc(r), n);
        }
      }
      function ux() {
        return new Ke(fe(), v());
      }
      function Xe(e) {
        return qn(() => {
          const t = e.prototype.constructor,
            n = t[Wn] || Nf(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Wn] || Nf(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function Nf(e) {
        return cc(e)
          ? () => {
              const t = Nf(P(e));
              return t && t();
            }
          : $r(e);
      }
      function Xy(e) {
        const t = e[b],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[it] : null;
      }
      function r_(e, t = null, n = null, r) {
        const o = o_(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function o_(e, t = null, n = null, r, o = new Set()) {
        const i = [n || ie, iR(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : Ze(e))),
          new Fo(i, t || Ec(), r || null, o)
        );
      }
      class Ge {
        static #e = (this.THROW_IF_NOT_FOUND = Ji);
        static #t = (this.NULL = new mc());
        static create(t, n) {
          if (Array.isArray(t)) return r_({ name: '' }, n, t, '');
          {
            const r = t.name ?? '';
            return r_({ name: r }, t.parent, t.providers, r);
          }
        }
        static #n = (this.ɵprov = S({
          token: Ge,
          providedIn: 'any',
          factory: () => A(Zv),
        }));
        static #r = (this.__NG_ELEMENT_ID__ = -1);
      }
      new D('').__NG_ELEMENT_ID__ = e => {
        const t = fe();
        if (null === t) throw new E(204, !1);
        if (2 & t.type) return t.value;
        if (e & X.Optional) return null;
        throw new E(204, !1);
      };
      function xf(e) {
        return e.ngOriginalError;
      }
      let Kr = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Cx);
          static #t = (this.__NG_ENV_ID__ = n => n);
        }
        return e;
      })();
      class _x extends Kr {
        constructor(t) {
          super(), (this._lView = t);
        }
        onDestroy(t) {
          return (
            Tc(this._lView, t),
            () =>
              (function pf(e, t) {
                if (null === e[vr]) return;
                const n = e[vr].indexOf(t);
                -1 !== n && e[vr].splice(n, 1);
              })(this._lView, t)
          );
        }
      }
      function Cx() {
        return new _x(v());
      }
      let Xr = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new vt(!1));
          }
          get _hasPendingTasks() {
            return this.hasPendingTasks.value;
          }
          add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            const n = this.taskId++;
            return this.pendingTasks.add(n), n;
          }
          remove(n) {
            this.pendingTasks.delete(n),
              0 === this.pendingTasks.size &&
                this._hasPendingTasks &&
                this.hasPendingTasks.next(!1);
          }
          ngOnDestroy() {
            this.pendingTasks.clear(),
              this._hasPendingTasks && this.hasPendingTasks.next(!1);
          }
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      const Z = class Ex extends mt {
        constructor(t = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = t),
            cy() &&
              ((this.destroyRef = _(Kr, { optional: !0 }) ?? void 0),
              (this.pendingTasks =
                _(Xr, { optional: !0 }) ?? void 0));
        }
        emit(t) {
          const n = k(null);
          try {
            super.next(t);
          } finally {
            k(n);
          }
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            s = r;
          if (t && 'object' == typeof t) {
            const c = t;
            (o = c.next?.bind(c)),
              (i = c.error?.bind(c)),
              (s = c.complete?.bind(c));
          }
          this.__isAsync &&
            ((i = this.wrapInTimeout(i)),
            o && (o = this.wrapInTimeout(o)),
            s && (s = this.wrapInTimeout(s)));
          const a = super.subscribe({
            next: o,
            error: i,
            complete: s,
          });
          return t instanceof at && t.add(a), a;
        }
        wrapInTimeout(t) {
          return n => {
            const r = this.pendingTasks?.add();
            setTimeout(() => {
              t(n), void 0 !== r && this.pendingTasks?.remove(r);
            });
          };
        }
      };
      function jc(...e) {}
      function s_(e) {
        let t, n;
        function r() {
          e = jc;
          try {
            void 0 !== n &&
              'function' == typeof cancelAnimationFrame &&
              cancelAnimationFrame(n),
              void 0 !== t && clearTimeout(t);
          } catch {}
        }
        return (
          (t = setTimeout(() => {
            e(), r();
          })),
          'function' == typeof requestAnimationFrame &&
            (n = requestAnimationFrame(() => {
              e(), r();
            })),
          () => r()
        );
      }
      function a_(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = jc;
          }
        );
      }
      class ae {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Z(!1)),
            (this.onMicrotaskEmpty = new Z(!1)),
            (this.onStable = new Z(!1)),
            (this.onError = new Z(!1)),
            typeof Zone > 'u')
          )
            throw new E(908, !1);
          Zone.assertZonePatched();
          const o = this;
          (o._nesting = 0),
            (o._outer = o._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (o._inner = o._inner.fork(
                new Zone.TaskTrackingZoneSpec(),
              )),
            t &&
              Zone.longStackTraceZoneSpec &&
              (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)),
            (o.shouldCoalesceEventChangeDetection = !r && n),
            (o.shouldCoalesceRunChangeDetection = r),
            (o.callbackScheduled = !1),
            (function bx(e) {
              const t = () => {
                !(function wx(e) {
                  e.isCheckStableRunning ||
                    e.callbackScheduled ||
                    ((e.callbackScheduled = !0),
                    Zone.root.run(() => {
                      s_(() => {
                        (e.callbackScheduled = !1),
                          Ff(e),
                          (e.isCheckStableRunning = !0),
                          Of(e),
                          (e.isCheckStableRunning = !1);
                      });
                    }),
                    Ff(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, a) => {
                  if (
                    (function Ix(e) {
                      return l_(e, '__ignore_ng_zone__');
                    })(a)
                  )
                    return n.invokeTask(o, i, s, a);
                  try {
                    return c_(e), n.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      u_(e);
                  }
                },
                onInvoke: (n, r, o, i, s, a, c) => {
                  try {
                    return c_(e), n.invoke(o, i, s, a, c);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function Sx(e) {
                        return l_(e, '__scheduler_tick__');
                      })(a) &&
                      t(),
                      u_(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          Ff(e),
                          Of(e))
                        : 'macroTask' == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, o, i) => (
                  n.handleError(o, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(o);
        }
        static isInAngularZone() {
          return (
            typeof Zone < 'u' &&
            !0 === Zone.current.get('isAngularZone')
          );
        }
        static assertInAngularZone() {
          if (!ae.isInAngularZone()) throw new E(909, !1);
        }
        static assertNotInAngularZone() {
          if (ae.isInAngularZone()) throw new E(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask(
              'NgZoneEvent: ' + o,
              t,
              Dx,
              jc,
              jc,
            );
          try {
            return i.runTask(s, n, r);
          } finally {
            i.cancelTask(s);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const Dx = {};
      function Of(e) {
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
      function Ff(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function c_(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function u_(e) {
        e._nesting--, Of(e);
      }
      class kf {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Z()),
            (this.onMicrotaskEmpty = new Z()),
            (this.onStable = new Z()),
            (this.onError = new Z());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, o) {
          return t.apply(n, r);
        }
      }
      function l_(e, t) {
        return (
          !(!Array.isArray(e) || 1 !== e.length) &&
          !0 === e[0]?.data?.[t]
        );
      }
      class vn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && xf(t);
          for (; n && xf(n); ) n = xf(n);
          return n || null;
        }
      }
      const Tx = new D('', {
        providedIn: 'root',
        factory: () => {
          const e = _(ae),
            t = _(vn);
          return n => e.runOutsideAngular(() => t.handleError(n));
        },
      });
      function Ax() {
        return Go(fe(), v());
      }
      function Go(e, t) {
        return new Qt(_t(e, t));
      }
      let Qt = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
          static #e = (this.__NG_ELEMENT_ID__ = Ax);
        }
        return e;
      })();
      function f_(e) {
        return e instanceof Qt ? e.nativeElement : e;
      }
      function Nx() {
        return this._results[Symbol.iterator]();
      }
      class Pf {
        static #e = Symbol.iterator;
        get changes() {
          return (this._changes ??= new Z());
        }
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._onDirty = void 0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = void 0),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Pf.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = Nx);
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          this.dirty = !1;
          const r = (function xt(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function $N(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let o = e[r],
                i = t[r];
              if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
            }
            return !0;
          })(this._results, r, n)) &&
            ((this._results = r),
            (this.length = r.length),
            (this.last = r[this.length - 1]),
            (this.first = r[0]));
        }
        notifyOnChanges() {
          void 0 !== this._changes &&
            (this._changesDetected ||
              !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        onDirty(t) {
          this._onDirty = t;
        }
        setDirty() {
          (this.dirty = !0), this._onDirty?.();
        }
        destroy() {
          void 0 !== this._changes &&
            (this._changes.complete(), this._changes.unsubscribe());
        }
      }
      function Uc(e) {
        return !(128 & ~e.flags);
      }
      const Lf = new Map();
      let xx = 0;
      const $c = '__ngContext__';
      function lt(e, t) {
        nt(t)
          ? ((e[$c] = t[Uo]),
            (function Fx(e) {
              Lf.set(e[Uo], e);
            })(t))
          : (e[$c] = t);
      }
      function D_(e) {
        return b_(e[is]);
      }
      function w_(e) {
        return b_(e[hn]);
      }
      function b_(e) {
        for (; null !== e && !ut(e); ) e = e[hn];
        return e;
      }
      let jf;
      const ys = new D('', { providedIn: 'root', factory: () => Xx }),
        Xx = 'ng',
        x_ = new D(''),
        _r = new D('', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        Uf = new D('', {
          providedIn: 'root',
          factory: () =>
            (function yr() {
              if (void 0 !== jf) return jf;
              if (typeof document < 'u') return document;
              throw new E(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let O_ = () => null;
      function Wf(e, t, n = !1) {
        return O_(e, t, n);
      }
      const B_ = new D('', { providedIn: 'root', factory: () => !1 });
      let Xc;
      function q_(e) {
        return (
          (function Jf() {
            if (void 0 === Xc && ((Xc = null), Se.trustedTypes))
              try {
                Xc = Se.trustedTypes.createPolicy(
                  'angular#unsafe-bypass',
                  {
                    createHTML: e => e,
                    createScript: e => e,
                    createScriptURL: e => e,
                  },
                );
              } catch {}
            return Xc;
          })()?.createScriptURL(e) || e
        );
      }
      class W_ {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Rv})`;
        }
      }
      function Cr(e) {
        return e instanceof W_
          ? e.changingThisBreaksApplicationSecurity
          : e;
      }
      function Is(e, t) {
        const n = (function vO(e) {
          return (e instanceof W_ && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see ${Rv})`,
          );
        }
        return n === t;
      }
      const EO =
        /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Yo = (function (e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })(Yo || {});
      function oh(e) {
        const t = Ms();
        return t
          ? t.sanitize(Yo.URL, e) || ''
          : Is(e, 'URL')
          ? Cr(e)
          : (function eh(e) {
              return (e = String(e)).match(EO) ? e : 'unsafe:' + e;
            })($(e));
      }
      function nC(e) {
        const t = Ms();
        if (t) return q_(t.sanitize(Yo.RESOURCE_URL, e) || '');
        if (Is(e, 'ResourceURL')) return q_(Cr(e));
        throw new E(904, !1);
      }
      function Ms() {
        const e = v();
        return e && e[An].sanitizer;
      }
      const LO = /^>|^->|<!--|-->|--!>|<!-$/g,
        VO = /(<|>)/g,
        jO = '\u200b$1\u200b';
      function Yt(e) {
        return e instanceof Function ? e() : e;
      }
      var Er = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })(Er || {});
      let ah;
      function ch(e, t) {
        return ah(e, t);
      }
      function Xo(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          ut(r) ? (i = r) : nt(r) && ((s = !0), (r = r[Ne]));
          const a = se(r);
          0 === e && null !== n
            ? null == o
              ? mC(t, n, a)
              : Jr(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? Jr(t, n, a, o || null, !0)
            : 2 === e
            ? (function As(e, t, n) {
                e.removeChild(null, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function iF(e, t, n, r, o) {
                const i = n[Nn];
                i !== se(n) && Xo(t, e, r, i, o);
                for (let a = Le; a < n.length; a++) {
                  const c = n[a];
                  iu(c[b], c, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function lh(e, t) {
        return e.createComment(
          (function oC(e) {
            return e.replace(LO, t => t.replace(VO, jO));
          })(t),
        );
      }
      function nu(e, t, n) {
        return e.createElement(t, n);
      }
      function hC(e, t) {
        t[An].changeDetectionScheduler?.notify(8),
          iu(e, t, t[V], 2, null, null);
      }
      function pC(e, t) {
        const n = e[Bo],
          r = t[He];
        (nt(r) || t[Re] !== r[He][Re]) &&
          (e[R] |= Ic.HasTransplantedViews),
          null === n ? (e[Bo] = [t]) : n.push(t);
      }
      function dh(e, t) {
        const n = e[Bo],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function Ts(e, t) {
        if (e.length <= Le) return;
        const n = Le + t,
          r = e[n];
        if (r) {
          const o = r[zr];
          null !== o && o !== e && dh(o, r),
            t > 0 && (e[n - 1][hn] = r[hn]);
          const i = pc(e, Le + t);
          !(function KO(e, t) {
            hC(e, t), (t[Ne] = null), (t[it] = null);
          })(r[b], r);
          const s = i[Qn];
          null !== s && s.detachView(i[b]),
            (r[He] = null),
            (r[hn] = null),
            (r[R] &= -129);
        }
        return r;
      }
      function ru(e, t) {
        if (!(256 & t[R])) {
          const n = t[V];
          n.destroyNode && iu(e, t, n, 3, null, null),
            (function JO(e) {
              let t = e[is];
              if (!t) return fh(e[b], e);
              for (; t; ) {
                let n = null;
                if (nt(t)) n = t[is];
                else {
                  const r = t[Le];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[hn] && t !== e; )
                    nt(t) && fh(t[b], t), (t = t[He]);
                  null === t && (t = e),
                    nt(t) && fh(t[b], t),
                    (n = t && t[hn]);
                }
                t = n;
              }
            })(t);
        }
      }
      function fh(e, t) {
        if (256 & t[R]) return;
        const n = k(null);
        try {
          (t[R] &= -129),
            (t[R] |= 256),
            t[tn] && dd(t[tn]),
            (function nF(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof hs)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          c = i[s + 1];
                        Rn(4, a, c);
                        try {
                          c.call(a);
                        } finally {
                          Rn(5, a, c);
                        }
                      }
                    else {
                      Rn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Rn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function tF(e, t) {
              const n = e.cleanup,
                r = t[Lo];
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else n[i].call(r[n[i + 1]]);
              null !== r && (t[Lo] = null);
              const o = t[vr];
              if (null !== o) {
                t[vr] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, t),
            1 === t[b].type && t[V].destroy();
          const r = t[zr];
          if (null !== r && ut(t[He])) {
            r !== t[He] && dh(r, t);
            const o = t[Qn];
            null !== o && o.detachView(e);
          }
          !(function kx(e) {
            Lf.delete(e[Uo]);
          })(t);
        } finally {
          k(n);
        }
      }
      function hh(e, t, n) {
        return (function gC(e, t, n) {
          let r = t;
          for (; null !== r && 168 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Ne];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } =
                e.data[r.directiveStart + o];
              if (i === dn.None || i === dn.Emulated) return null;
            }
            return _t(r, n);
          }
        })(e, t.parent, n);
      }
      function Jr(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function mC(e, t, n) {
        e.appendChild(t, n);
      }
      function vC(e, t, n, r, o) {
        null !== r ? Jr(e, t, n, r, o) : mC(e, t, n);
      }
      function ph(e, t) {
        return e.parentNode(t);
      }
      function yC(e, t, n) {
        return CC(e, t, n);
      }
      let gh,
        CC = function _C(e, t, n) {
          return 40 & e.type ? _t(e, n) : null;
        };
      function ou(e, t, n, r) {
        const o = hh(e, r, t),
          i = t[V],
          a = yC(r.parent || t[it], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) vC(i, o, n[c], a, !1);
          else vC(i, o, n, a, !1);
        void 0 !== gh && gh(i, r, t, n, o);
      }
      function eo(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return _t(t, e);
          if (4 & n) return mh(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return eo(e, r);
            {
              const o = e[t.index];
              return ut(o) ? mh(-1, o) : se(o);
            }
          }
          if (128 & n) return eo(e, t.next);
          if (32 & n) return ch(t, e)() || se(e[t.index]);
          {
            const r = DC(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : eo(Yn(e[Re]), r)
              : eo(e, t.next);
          }
        }
        return null;
      }
      function DC(e, t) {
        return null !== t ? e[Re][it].projection[t.projection] : null;
      }
      function mh(e, t) {
        const n = Le + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[b].firstChild;
          if (null !== o) return eo(r, o);
        }
        return t[Nn];
      }
      function vh(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          if (128 === n.type) {
            n = n.next;
            continue;
          }
          const a = r[n.index],
            c = n.type;
          if (
            (s && 0 === t && (a && lt(se(a), r), (n.flags |= 2)),
            32 & ~n.flags)
          )
            if (8 & c)
              vh(e, t, n.child, r, o, i, !1), Xo(t, e, o, a, i);
            else if (32 & c) {
              const u = ch(n, r);
              let l;
              for (; (l = u()); ) Xo(t, e, o, l, i);
              Xo(t, e, o, a, i);
            } else 16 & c ? bC(e, t, r, n, o, i) : Xo(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function iu(e, t, n, r, o, i) {
        vh(n, r, e.firstChild, t, o, i, !1);
      }
      function bC(e, t, n, r, o, i) {
        const s = n[Re],
          c = s[it].projection[r.projection];
        if (Array.isArray(c))
          for (let u = 0; u < c.length; u++) Xo(t, e, o, c[u], i);
        else {
          let u = c;
          const l = s[He];
          Uc(r) && (u.flags |= 128), vh(e, t, u, l, o, i, !0);
        }
      }
      function IC(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function SC(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && Zd(e, t, r),
          null !== o && IC(e, t, o),
          null !== i &&
            (function aF(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      const H = {};
      function x(e = 1) {
        MC(W(), v(), st() + e, !1);
      }
      function MC(e, t, n, r) {
        if (!r)
          if (3 & ~t[R]) {
            const i = e.preOrderHooks;
            null !== i && Oc(t, i, 0, n);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && xc(t, i, n);
          }
        Zr(n);
      }
      function w(e, t = X.Default) {
        const n = v();
        return null === n ? A(e, t) : Zy(fe(), n, P(e), t);
      }
      function AC(e, t, n, r, o, i) {
        const s = k(null);
        try {
          let a = null;
          o & gr.SignalBased && (a = t[r][Pe]),
            null !== a &&
              void 0 !== a.transformFn &&
              (i = a.transformFn(i)),
            o & gr.HasDecoratorInputTransform &&
              (i = e.inputTransforms[r].call(t, i)),
            null !== e.setInput
              ? e.setInput(t, a, i, n, r)
              : gy(t, a, r, i);
        } finally {
          k(s);
        }
      }
      function su(e, t, n, r, o, i, s, a, c, u, l) {
        const d = t.blueprint.slice();
        return (
          (d[Ne] = o),
          (d[R] = 204 | r),
          (null !== u || (e && 2048 & e[R])) && (d[R] |= 2048),
          Ey(d),
          (d[He] = d[Vo] = e),
          (d[Ee] = n),
          (d[An] = s || (e && e[An])),
          (d[V] = a || (e && e[V])),
          (d[ze] = c || (e && e[ze]) || null),
          (d[it] = i),
          (d[Uo] = (function Ox() {
            return xx++;
          })()),
          (d[yt] = l),
          (d[dy] = u),
          (d[Re] = 2 == t.type ? e[Re] : d),
          d
        );
      }
      function to(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function yh(e, t, n, r, o) {
            const i = Sy(),
              s = mf(),
              c = (e.data[t] = (function gF(e, t, n, r, o, i) {
                let s = t ? t.injectorIndex : -1,
                  a = 0;
                return (
                  Wr() && (a |= 128),
                  {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: s,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: a,
                    providerIndexes: 0,
                    value: o,
                    attrs: i,
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
                    parent: t,
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
              })(0, s ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = c),
              null !== i &&
                (s
                  ? null == i.child &&
                    null !== c.parent &&
                    (i.child = c)
                  : null === i.next && ((i.next = c), (c.prev = i))),
              c
            );
          })(e, t, n, r, o)),
            (function $R() {
              return j.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function ds() {
            const e = j.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return gn(i, !0), i;
      }
      function Ns(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function NC(e, t, n, r, o) {
        const i = st(),
          s = 2 & r;
        try {
          Zr(-1),
            s && t.length > N && MC(e, t, N, !1),
            Rn(s ? 2 : 0, o),
            n(r, o);
        } finally {
          Zr(i), Rn(s ? 3 : 1, o);
        }
      }
      function _h(e, t, n) {
        if (af(t)) {
          const r = k(null);
          try {
            const i = t.directiveEnd;
            for (let s = t.directiveStart; s < i; s++) {
              const a = e.data[s];
              a.contentQueries && a.contentQueries(1, n[s], s);
            }
          } finally {
            k(r);
          }
        }
      }
      function Ch(e, t, n) {
        Iy() &&
          ((function DF(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            Gr(n) &&
              (function AF(e, t, n) {
                const r = _t(t, e),
                  o = RC(n);
                let s = 16;
                n.signals ? (s = 4096) : n.onPush && (s = 64);
                const a = au(
                  e,
                  su(
                    e,
                    o,
                    null,
                    s,
                    r,
                    t,
                    null,
                    e[An].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null,
                  ),
                );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || kc(n, t),
              lt(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const c = e.data[a],
                u = Yr(t, e, a, n);
              lt(u, t),
                null !== s && NF(0, a - o, u, c, 0, s),
                pn(c) && (Zt(n.index, t)[Ee] = Yr(t, e, a, n));
            }
          })(e, t, n, _t(n, t)),
          !(64 & ~n.flags) && PC(e, t, n));
      }
      function Eh(e, t, n = _t) {
        const r = t.localNames;
        if (null !== r) {
          let o = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const s = r[i + 1],
              a = -1 === s ? n(t, e) : e[s];
            e[o++] = a;
          }
        }
      }
      function RC(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Dh(
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
          : t;
      }
      function Dh(e, t, n, r, o, i, s, a, c, u, l) {
        const d = N + r,
          f = d + o,
          h = (function uF(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : H);
            return n;
          })(d, f),
          p = 'function' == typeof u ? u() : u;
        return (h[b] = {
          type: e,
          blueprint: h,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: h.slice().fill(null, d),
          bindingStartIndex: d,
          expandoStartIndex: f,
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
          directiveRegistry: 'function' == typeof i ? i() : i,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: c,
          consts: p,
          incompleteFirstPass: !1,
          ssrId: l,
        });
      }
      let xC = () => null;
      function OC(e, t, n, r, o) {
        for (let i in t) {
          if (!t.hasOwnProperty(i)) continue;
          const s = t[i];
          if (void 0 === s) continue;
          r ??= {};
          let a,
            c = gr.None;
          Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
          let u = i;
          if (null !== o) {
            if (!o.hasOwnProperty(i)) continue;
            u = o[i];
          }
          0 === e ? FC(r, n, u, a, c) : FC(r, n, u, a);
        }
        return r;
      }
      function FC(e, t, n, r, o) {
        let i;
        e.hasOwnProperty(n)
          ? (i = e[n]).push(t, r)
          : (i = e[n] = [t, r]),
          void 0 !== o && i.push(o);
      }
      function wh(e, t, n, r) {
        if (Iy()) {
          const o = null === r ? null : { '': -1 },
            i = (function bF(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if (Jv(t, s.selectors, !1))
                    if ((r || (r = []), pn(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()),
                          s.findHostDirectiveDefs(s, a, o),
                          r.unshift(...a, s),
                          bh(e, t, a.length);
                      } else r.unshift(s), bh(e, t, 0);
                    else
                      (o = o || new Map()),
                        s.findHostDirectiveDefs?.(s, r, o),
                        r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && kC(e, t, n, s, o, a),
            o &&
              (function IF(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new E(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, o);
        }
        n.mergedAttrs = ts(n.mergedAttrs, n.attrs);
      }
      function kC(e, t, n, r, o, i) {
        for (let u = 0; u < r.length; u++) Af(kc(n, t), e, r[u].type);
        !(function MF(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        })(n, e.data.length, r.length);
        for (let u = 0; u < r.length; u++) {
          const l = r[u];
          l.providersResolver && l.providersResolver(l);
        }
        let s = !1,
          a = !1,
          c = Ns(e, t, r.length, null);
        for (let u = 0; u < r.length; u++) {
          const l = r[u];
          (n.mergedAttrs = ts(n.mergedAttrs, l.hostAttrs)),
            TF(e, n, t, c, l),
            SF(c, l, o),
            null !== l.contentQueries && (n.flags |= 4),
            (null !== l.hostBindings ||
              null !== l.hostAttrs ||
              0 !== l.hostVars) &&
              (n.flags |= 64);
          const d = l.type.prototype;
          !s &&
            (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
            ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
            !a &&
              (d.ngOnChanges || d.ngDoCheck) &&
              ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
            c++;
        }
        !(function mF(e, t, n) {
          const o = t.directiveEnd,
            i = e.data,
            s = t.attrs,
            a = [];
          let c = null,
            u = null;
          for (let l = t.directiveStart; l < o; l++) {
            const d = i[l],
              f = n ? n.get(d) : null,
              p = f ? f.outputs : null;
            (c = OC(0, d.inputs, l, c, f ? f.inputs : null)),
              (u = OC(1, d.outputs, l, u, p));
            const g =
              null === c || null === s || Qd(t) ? null : RF(c, l, s);
            a.push(g);
          }
          null !== c &&
            (c.hasOwnProperty('class') && (t.flags |= 8),
            c.hasOwnProperty('style') && (t.flags |= 16)),
            (t.initialInputs = a),
            (t.inputs = c),
            (t.outputs = u);
        })(e, n, i);
      }
      function PC(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function zR() {
            return j.lFrame.currentDirectiveIndex;
          })();
        try {
          Zr(i);
          for (let a = r; a < o; a++) {
            const c = e.data[a],
              u = t[a];
            yf(a),
              (null !== c.hostBindings ||
                0 !== c.hostVars ||
                null !== c.hostAttrs) &&
                wF(c, u);
          }
        } finally {
          Zr(-1), yf(s);
        }
      }
      function wF(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function bh(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function SF(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
              n[t.exportAs[r]] = e;
          pn(t) && (n[''] = e);
        }
      }
      function TF(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = $r(o.type)),
          s = new hs(i, pn(o), w);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function CF(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const a = ~t.index;
              (function EF(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != a && s.push(a),
                s.push(n, r, i);
            }
          })(e, t, r, Ns(e, n, o.hostVars, H), o);
      }
      function Fn(e, t, n, r, o, i) {
        const s = _t(e, t);
        !(function Ih(e, t, n, r, o, i, s) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const a = null == s ? $(i) : s(i, r || '', o);
            e.setAttribute(t, o, a, n);
          }
        })(t[V], s, i, e.value, n, r, o);
      }
      function NF(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s)
          for (let a = 0; a < s.length; )
            AC(r, n, s[a++], s[a++], s[a++], s[a++]);
      }
      function RF(e, t, n) {
        let r = null,
          o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break;
              if (e.hasOwnProperty(i)) {
                null === r && (r = []);
                const s = e[i];
                for (let a = 0; a < s.length; a += 3)
                  if (s[a] === t) {
                    r.push(i, s[a + 1], s[a + 2], n[o + 1]);
                    break;
                  }
              }
              o += 2;
            } else o += 2;
          else o += 4;
        }
        return r;
      }
      function LC(e, t, n, r) {
        return [e, !0, 0, t, null, r, null, n, null, null];
      }
      function VC(e, t) {
        const n = e.contentQueries;
        if (null !== n) {
          const r = k(null);
          try {
            for (let o = 0; o < n.length; o += 2) {
              const s = n[o + 1];
              if (-1 !== s) {
                const a = e.data[s];
                Nc(n[o]), a.contentQueries(2, t[s], s);
              }
            }
          } finally {
            k(r);
          }
        }
      }
      function au(e, t) {
        return e[is] ? (e[ly][hn] = t) : (e[is] = t), (e[ly] = t), t;
      }
      function Sh(e, t, n) {
        Nc(0);
        const r = k(null);
        try {
          t(e, n);
        } finally {
          k(r);
        }
      }
      function jC(e) {
        return (e[Lo] ??= []);
      }
      function UC(e) {
        return (e.cleanup ??= []);
      }
      function cu(e, t) {
        const n = e[ze],
          r = n ? n.get(vn, null) : null;
        r && r.handleError(t);
      }
      function Mh(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            c = n[i++];
          AC(e.data[s], t[s], r, a, c, o);
        }
      }
      function xF(e, t) {
        const n = Zt(t, e),
          r = n[b];
        !(function OF(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const o = n[Ne];
        null !== o && null === n[yt] && (n[yt] = Wf(o, n[ze])),
          Th(r, n, n[Ee]);
      }
      function Th(e, t, n) {
        Ef(t);
        try {
          const r = e.viewQuery;
          null !== r && Sh(1, r, n);
          const o = e.template;
          null !== o && NC(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            t[Qn]?.finishViewCreation(e),
            e.staticContentQueries && VC(e, t),
            e.staticViewQueries && Sh(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function FF(e, t) {
              for (let n = 0; n < t.length; n++) xF(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0),
              (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[R] &= -5), Df();
        }
      }
      function Jo(e, t, n, r) {
        const o = k(null);
        try {
          const i = t.tView,
            c = su(
              e,
              i,
              n,
              4096 & e[R] ? 4096 : 16,
              null,
              t,
              null,
              null,
              r?.injector ?? null,
              r?.embeddedViewInjector ?? null,
              r?.dehydratedView ?? null,
            );
          c[zr] = e[t.index];
          const l = e[Qn];
          return (
            null !== l && (c[Qn] = l.createEmbeddedView(i)),
            Th(i, c, n),
            c
          );
        } finally {
          k(o);
        }
      }
      function no(e, t) {
        return !t || null === t.firstChild || Uc(e);
      }
      function ei(e, t, n, r = !0) {
        const o = t[b];
        if (
          ((function eF(e, t, n, r) {
            const o = Le + r,
              i = n.length;
            r > 0 && (n[o - 1][hn] = t),
              r < i - Le
                ? ((t[hn] = n[o]), Gv(n, Le + r, t))
                : (n.push(t), (t[hn] = null)),
              (t[He] = n);
            const s = t[zr];
            null !== s && n !== s && pC(s, t);
            const a = t[Qn];
            null !== a && a.insertView(e), hf(t), (t[R] |= 128);
          })(o, t, e, n),
          r)
        ) {
          const s = mh(n, e),
            a = t[V],
            c = ph(a, e[Nn]);
          null !== c &&
            (function XO(e, t, n, r, o, i) {
              (r[Ne] = o), (r[it] = t), iu(e, r, n, 1, o, i);
            })(o, e[it], a, t, c, s);
        }
        const i = t[yt];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function Rs(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          if (128 === n.type) {
            n = o ? n.projectionNext : n.next;
            continue;
          }
          const i = t[n.index];
          null !== i && r.push(se(i)), ut(i) && HC(i, r);
          const s = n.type;
          if (8 & s) Rs(e, t, n.child, r);
          else if (32 & s) {
            const a = ch(n, t);
            let c;
            for (; (c = a()); ) r.push(c);
          } else if (16 & s) {
            const a = DC(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const c = Yn(t[Re]);
              Rs(c[b], c, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      function HC(e, t) {
        for (let n = Le; n < e.length; n++) {
          const r = e[n],
            o = r[b].firstChild;
          null !== o && Rs(r[b], r, o, t);
        }
        e[Nn] !== e[Ne] && t.push(e[Nn]);
      }
      let zC = [];
      const VF = {
          ...Q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            Mc(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[tn] = this;
          },
        },
        UF = {
          ...Q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let t = Yn(e.lView);
            for (; t && !GC(t[b]); ) t = Yn(t);
            t && Dy(t);
          },
          consumerOnSignalRead() {
            this.lView[tn] = this;
          },
        };
      function GC(e) {
        return 2 !== e.type;
      }
      const BF = 100;
      function uu(e, t = !0, n = 0) {
        const r = e[An],
          o = r.rendererFactory;
        o.begin?.();
        try {
          !(function $F(e, t) {
            const n = Ay();
            try {
              Ny(!0), Nh(e, t);
              let r = 0;
              for (; ls(e); ) {
                if (r === BF) throw new E(103, !1);
                r++, Nh(e, 1);
              }
            } finally {
              Ny(n);
            }
          })(e, n);
        } catch (s) {
          throw (t && cu(e, s), s);
        } finally {
          o.end?.(), r.inlineEffectRunner?.flush();
        }
      }
      function HF(e, t, n, r) {
        const o = t[R];
        if (!(256 & ~o)) return;
        t[An].inlineEffectRunner?.flush(), Ef(t);
        let a = !0,
          c = null,
          u = null;
        GC(e)
          ? ((u = (function kF(e) {
              return (
                e[tn] ??
                (function PF(e) {
                  const t = zC.pop() ?? Object.create(VF);
                  return (t.lView = e), t;
                })(e)
              );
            })(t)),
            (c = Za(u)))
          : null ===
            (function Ae() {
              return pe;
            })()
          ? ((a = !1),
            (u = (function jF(e) {
              const t = e[tn] ?? Object.create(UF);
              return (t.lView = e), t;
            })(t)),
            (c = Za(u)))
          : t[tn] && (dd(t[tn]), (t[tn] = null));
        try {
          Ey(t),
            (function Ry(e) {
              return (j.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && NC(e, t, n, 2, r);
          const l = !(3 & ~o);
          if (l) {
            const h = e.preOrderCheckHooks;
            null !== h && xc(t, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && Oc(t, h, 0, null), wf(t, 0);
          }
          if (
            ((function zF(e) {
              for (let t = D_(e); null !== t; t = w_(t)) {
                if (!(t[R] & Ic.HasTransplantedViews)) continue;
                const n = t[Bo];
                for (let r = 0; r < n.length; r++) Dy(n[r]);
              }
            })(t),
            WC(t, 0),
            null !== e.contentQueries && VC(e, t),
            l)
          ) {
            const h = e.contentCheckHooks;
            null !== h && xc(t, h);
          } else {
            const h = e.contentHooks;
            null !== h && Oc(t, h, 1), wf(t, 1);
          }
          !(function cF(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const o = n[r];
                  if (o < 0) Zr(~o);
                  else {
                    const i = o,
                      s = n[++r],
                      a = n[++r];
                    HR(s, i), a(2, t[i]);
                  }
                }
              } finally {
                Zr(-1);
              }
          })(e, t);
          const d = e.components;
          null !== d && QC(t, d, 0);
          const f = e.viewQuery;
          if ((null !== f && Sh(2, f, r), l)) {
            const h = e.viewCheckHooks;
            null !== h && xc(t, h);
          } else {
            const h = e.viewHooks;
            null !== h && Oc(t, h, 2), wf(t, 2);
          }
          if (
            (!0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            t[wc])
          ) {
            for (const h of t[wc]) h();
            t[wc] = null;
          }
          t[R] &= -73;
        } catch (l) {
          throw (Mc(t), l);
        } finally {
          null !== u &&
            (ud(u, c),
            a &&
              (function LF(e) {
                e.lView[tn] !== e && ((e.lView = null), zC.push(e));
              })(u)),
            Df();
        }
      }
      function WC(e, t) {
        for (let n = D_(e); null !== n; n = w_(n))
          for (let r = Le; r < n.length; r++) ZC(n[r], t);
      }
      function GF(e, t, n) {
        ZC(Zt(t, e), n);
      }
      function ZC(e, t) {
        ff(e) && Nh(e, t);
      }
      function Nh(e, t) {
        const r = e[b],
          o = e[R],
          i = e[tn];
        let s = !!(0 === t && 16 & o);
        if (
          ((s ||= !!(64 & o && 0 === t)),
          (s ||= !!(1024 & o)),
          (s ||= !(!i?.dirty || !ld(i))),
          (s ||= !1),
          i && (i.dirty = !1),
          (e[R] &= -9217),
          s)
        )
          HF(r, e, r.template, e[Ee]);
        else if (8192 & o) {
          WC(e, 1);
          const a = r.components;
          null !== a && QC(e, a, 1);
        }
      }
      function QC(e, t, n) {
        for (let r = 0; r < t.length; r++) GF(e, t[r], n);
      }
      function xs(e, t) {
        const n = Ay() ? 64 : 1088;
        for (e[An].changeDetectionScheduler?.notify(t); e; ) {
          e[R] |= n;
          const r = Yn(e);
          if (as(e) && !r) return e;
          e = r;
        }
        return null;
      }
      class Os {
        get rootNodes() {
          const t = this._lView,
            n = t[b];
          return Rs(n, t, n.firstChild, []);
        }
        constructor(t, n, r = !0) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this.notifyErrorHandler = r),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[Ee];
        }
        set context(t) {
          this._lView[Ee] = t;
        }
        get destroyed() {
          return !(256 & ~this._lView[R]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[He];
            if (ut(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Ts(t, r), pc(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          ru(this._lView[b], this._lView);
        }
        onDestroy(t) {
          Tc(this._lView, t);
        }
        markForCheck() {
          xs(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[R] &= -129;
        }
        reattach() {
          hf(this._lView), (this._lView[R] |= 128);
        }
        detectChanges() {
          (this._lView[R] |= 1024),
            uu(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new E(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null;
          const t = as(this._lView),
            n = this._lView[zr];
          null !== n && !t && dh(n, this._lView),
            hC(this._lView[b], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new E(902, !1);
          this._appRef = t;
          const n = as(this._lView),
            r = this._lView[zr];
          null !== r && !n && pC(r, this._lView), hf(this._lView);
        }
      }
      let tr = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = ZF);
        }
        return e;
      })();
      const qF = tr,
        WF = class extends qF {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(t, n) {
            return this.createEmbeddedViewImpl(t, n);
          }
          createEmbeddedViewImpl(t, n, r) {
            const o = Jo(
              this._declarationLView,
              this._declarationTContainer,
              t,
              { embeddedViewInjector: n, dehydratedView: r },
            );
            return new Os(o);
          }
        };
      function ZF() {
        return lu(fe(), v());
      }
      function lu(e, t) {
        return 4 & e.type ? new WF(t, e, Go(e, t)) : null;
      }
      let mE = () => null;
      function oo(e, t) {
        return mE(e, t);
      }
      class ni {}
      const Bs = new D('', { providedIn: 'root', factory: () => !1 }),
        vE = new D('');
      class B1 {}
      class yE {}
      class H1 {
        resolveComponentFactory(t) {
          throw (function $1(e) {
            const t = Error(
              `No component factory found for ${Ze(e)}.`,
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      class mu {
        static #e = (this.NULL = new H1());
      }
      class Bh {}
      let nr = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function z1() {
                const e = v(),
                  n = Zt(fe().index, e);
                return (nt(n) ? n : e)[V];
              })());
          }
          return e;
        })(),
        G1 = (() => {
          class e {
            static #e = (this.ɵprov = S({
              token: e,
              providedIn: 'root',
              factory: () => null,
            }));
          }
          return e;
        })();
      const CE = new Set();
      function Et(e) {
        CE.has(e) ||
          (CE.add(e),
          performance?.mark?.('mark_feature_usage', {
            detail: { feature: e },
          }));
      }
      let vu = (() => {
        class e {
          constructor() {
            (this.handler = null), (this.internalCallbacks = []);
          }
          execute() {
            this.executeInternalCallbacks(), this.handler?.execute();
          }
          executeInternalCallbacks() {
            const n = [...this.internalCallbacks];
            this.internalCallbacks.length = 0;
            for (const r of n) r();
          }
          ngOnDestroy() {
            this.handler?.destroy(),
              (this.handler = null),
              (this.internalCallbacks.length = 0);
          }
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      function _u(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            'number' == typeof a
              ? (i = a)
              : 1 == i
              ? (o = Nd(o, a))
              : 2 == i && (r = Nd(r, a + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class IE extends mu {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Y(t);
          return new zs(n, this.ngModule);
        }
      }
      function SE(e, t) {
        const n = [];
        for (const r in e) {
          if (!e.hasOwnProperty(r)) continue;
          const o = e[r];
          if (void 0 === o) continue;
          const i = Array.isArray(o),
            s = i ? o[0] : o;
          n.push(
            t
              ? {
                  propName: s,
                  templateName: r,
                  isSignal: !!((i ? o[1] : gr.None) & gr.SignalBased),
                }
              : { propName: s, templateName: r },
          );
        }
        return n;
      }
      class zs extends yE {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = SE(t.inputs, !0);
          if (null !== n)
            for (const o of r)
              n.hasOwnProperty(o.propName) &&
                (o.transform = n[o.propName]);
          return r;
        }
        get outputs() {
          return SE(this.componentDef.outputs, !1);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function JN(e) {
              return e.map(XN).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          const i = k(null);
          try {
            let s =
              (o = o || this.ngModule) instanceof Wt
                ? o
                : o?.injector;
            s &&
              null !== this.componentDef.getStandaloneInjector &&
              (s = this.componentDef.getStandaloneInjector(s) || s);
            const a = s ? new Qr(t, s) : t,
              c = a.get(Bh, null);
            if (null === c) throw new E(407, !1);
            const u = a.get(G1, null),
              f = {
                rendererFactory: c,
                sanitizer: u,
                inlineEffectRunner: null,
                afterRenderEventManager: a.get(vu, null),
                changeDetectionScheduler: a.get(ni, null),
              },
              h = c.createRenderer(null, this.componentDef),
              p = this.componentDef.selectors[0][0] || 'div',
              g = r
                ? (function lF(e, t, n, r) {
                    const i = r.get(B_, !1) || n === dn.ShadowDom,
                      s = e.selectRootElement(t, i);
                    return (
                      (function dF(e) {
                        xC(e);
                      })(s),
                      s
                    );
                  })(h, r, this.componentDef.encapsulation, a)
                : nu(
                    h,
                    p,
                    (function J1(e) {
                      const t = e.toLowerCase();
                      return 'svg' === t
                        ? 'svg'
                        : 'math' === t
                        ? 'math'
                        : null;
                    })(p),
                  );
            let m = 512;
            this.componentDef.signals
              ? (m |= 4096)
              : this.componentDef.onPush || (m |= 16);
            let C = null;
            null !== g && (C = Wf(g, a, !0));
            const y = Dh(
                0,
                null,
                null,
                1,
                0,
                null,
                null,
                null,
                null,
                null,
                null,
              ),
              T = su(null, y, null, m, null, null, f, h, a, null, C);
            let z, re;
            Ef(T);
            try {
              const Fe = this.componentDef;
              let Ut,
                Zi = null;
              Fe.findHostDirectiveDefs
                ? ((Ut = []),
                  (Zi = new Map()),
                  Fe.findHostDirectiveDefs(Fe, Ut, Zi),
                  Ut.push(Fe))
                : (Ut = [Fe]);
              const YT = (function tk(e, t) {
                  const n = e[b],
                    r = N;
                  return (e[r] = t), to(n, r, 2, '#host', null);
                })(T, g),
                Pq = (function nk(e, t, n, r, o, i, s) {
                  const a = o[b];
                  !(function rk(e, t, n, r) {
                    for (const o of e)
                      t.mergedAttrs = ts(t.mergedAttrs, o.hostAttrs);
                    null !== t.mergedAttrs &&
                      (_u(t, t.mergedAttrs, !0),
                      null !== n && SC(r, n, t));
                  })(r, e, t, s);
                  let c = null;
                  null !== t && (c = Wf(t, o[ze]));
                  const u = i.rendererFactory.createRenderer(t, n);
                  let l = 16;
                  n.signals ? (l = 4096) : n.onPush && (l = 64);
                  const d = su(
                    o,
                    RC(n),
                    null,
                    l,
                    o[e.index],
                    e,
                    i,
                    u,
                    null,
                    null,
                    c,
                  );
                  return (
                    a.firstCreatePass && bh(a, e, r.length - 1),
                    au(o, d),
                    (o[e.index] = d)
                  );
                })(YT, g, Fe, Ut, T, f, h);
              (re = us(y, N)),
                g &&
                  (function ik(e, t, n, r) {
                    if (r) Zd(e, n, ['ng-version', '18.1.4']);
                    else {
                      const { attrs: o, classes: i } = (function eR(
                        e,
                      ) {
                        const t = [],
                          n = [];
                        let r = 1,
                          o = 2;
                        for (; r < e.length; ) {
                          let i = e[r];
                          if ('string' == typeof i)
                            2 === o
                              ? '' !== i && t.push(i, e[++r])
                              : 8 === o && n.push(i);
                          else {
                            if (!fn(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: t, classes: n };
                      })(t.selectors[0]);
                      o && Zd(e, n, o),
                        i && i.length > 0 && IC(e, n, i.join(' '));
                    }
                  })(h, Fe, g, r),
                void 0 !== n &&
                  (function sk(e, t, n) {
                    const r = (e.projection = []);
                    for (let o = 0; o < t.length; o++) {
                      const i = n[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })(re, this.ngContentSelectors, n),
                (z = (function ok(e, t, n, r, o, i) {
                  const s = fe(),
                    a = o[b],
                    c = _t(s, o);
                  kC(a, o, s, n, null, r);
                  for (let l = 0; l < n.length; l++)
                    lt(Yr(o, a, s.directiveStart + l, s), o);
                  PC(a, o, s), c && lt(c, o);
                  const u = Yr(
                    o,
                    a,
                    s.directiveStart + s.componentOffset,
                    s,
                  );
                  if (((e[Ee] = o[Ee] = u), null !== i))
                    for (const l of i) l(u, t);
                  return _h(a, s, o), u;
                })(Pq, Fe, Ut, Zi, T, [ak])),
                Th(y, T, null);
            } finally {
              Df();
            }
            return new ek(this.componentType, z, Go(re, T), T, re);
          } finally {
            k(i);
          }
        }
      }
      class ek extends B1 {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef =
              new Os(o, void 0, !1)),
            (this.componentType = t);
        }
        setInput(t, n) {
          const r = this._tNode.inputs;
          let o;
          if (null !== r && (o = r[t])) {
            if (
              ((this.previousInputValues ??= new Map()),
              this.previousInputValues.has(t) &&
                Object.is(this.previousInputValues.get(t), n))
            )
              return;
            const i = this._rootLView;
            Mh(i[b], i, o, t, n),
              this.previousInputValues.set(t, n),
              xs(Zt(this._tNode.index, i), 1);
          }
        }
        get injector() {
          return new Ke(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function ak() {
        const e = fe();
        Rc(v()[b], e);
      }
      let yn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = ck);
        }
        return e;
      })();
      function ck() {
        return AE(fe(), v());
      }
      const uk = yn,
        ME = class extends uk {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Go(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ke(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Pc(this._hostTNode, this._hostLView);
            if (Sf(t)) {
              const n = gs(t, this._hostLView),
                r = ps(t);
              return new Ke(n[b].data[r + 8], n);
            }
            return new Ke(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = TE(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Le;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            'number' == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const s = oo(this._lContainer, t.ssrId),
              a = t.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, no(this._hostTNode, s)), a;
          }
          createComponent(t, n, r, o, i) {
            const s =
              t &&
              !(function os(e) {
                return 'function' == typeof e;
              })(t);
            let a;
            if (s) a = n;
            else {
              const p = n || {};
              (a = p.index),
                (r = p.injector),
                (o = p.projectableNodes),
                (i = p.environmentInjector || p.ngModuleRef);
            }
            const c = s ? t : new zs(Y(t)),
              u = r || this.parentInjector;
            if (!i && null == c.ngModule) {
              const g = (s ? u : this.parentInjector).get(Wt, null);
              g && (i = g);
            }
            const l = Y(c.componentType ?? {}),
              d = oo(this._lContainer, l?.id ?? null),
              h = c.create(u, o, d?.firstChild ?? null, i);
            return (
              this.insertImpl(h.hostView, a, no(this._hostTNode, d)),
              h
            );
          }
          insert(t, n) {
            return this.insertImpl(t, n, !0);
          }
          insertImpl(t, n, r) {
            const o = t._lView;
            if (
              (function OR(e) {
                return ut(e[He]);
              })(o)
            ) {
              const a = this.indexOf(t);
              if (-1 !== a) this.detach(a);
              else {
                const c = o[He],
                  u = new ME(c, c[it], c[He]);
                u.detach(u.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            return (
              ei(s, o, i, r),
              t.attachToViewContainerRef(),
              Gv(Gh(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = TE(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Ts(this._lContainer, n);
            r && (pc(Gh(this._lContainer), n), ru(r[b], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Ts(this._lContainer, n);
            return r && null != pc(Gh(this._lContainer), n)
              ? new Os(r)
              : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function TE(e) {
        return e[8];
      }
      function Gh(e) {
        return e[8] || (e[8] = []);
      }
      function AE(e, t) {
        let n;
        const r = t[e.index];
        return (
          ut(r)
            ? (n = r)
            : ((n = LC(r, t, null, e)), (t[e.index] = n), au(t, n)),
          NE(n, t, e, r),
          new ME(n, e, t)
        );
      }
      let NE = function xE(e, t, n, r) {
          if (e[Nn]) return;
          let o;
          (o =
            8 & n.type
              ? se(r)
              : (function lk(e, t) {
                  const n = e[V],
                    r = n.createComment(''),
                    o = _t(t, e);
                  return (
                    Jr(
                      n,
                      ph(n, o),
                      r,
                      (function rF(e, t) {
                        return e.nextSibling(t);
                      })(n, o),
                      !1,
                    ),
                    r
                  );
                })(t, n)),
            (e[Nn] = o);
        },
        qh = () => !1;
      class Wh {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Wh(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Zh {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r =
                null !== t.contentQueries
                  ? t.contentQueries[0]
                  : n.length,
              o = [];
            for (let i = 0; i < r; i++) {
              const s = n.getByIndex(i);
              o.push(this.queries[s.indexInDeclarationView].clone());
            }
            return new Zh(o);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        finishViewCreation(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Jh(t, n).matches && this.queries[n].setDirty();
        }
      }
      class OE {
        constructor(t, n, r = null) {
          (this.flags = n),
            (this.read = r),
            (this.predicate =
              'string' == typeof t
                ? (function yk(e) {
                    return e.split(',').map(t => t.trim());
                  })(t)
                : t);
        }
      }
      class Qh {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i &&
              ((i.indexInDeclarationView = r),
              null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new Qh(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Yh {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new Yh(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 & ~this.metadata.flags) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; )
              r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, pk(n, i)),
                this.matchTNodeWithReadOption(
                  t,
                  n,
                  Lc(n, t, i, !1, !1),
                );
            }
          else
            r === tr
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(
                  t,
                  n,
                  Lc(n, t, r, !1, !1),
                );
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Qt || o === yn || (o === tr && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Lc(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function pk(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2)
            if (n[r] === t) return n[r + 1];
        return null;
      }
      function mk(e, t, n, r) {
        return -1 === n
          ? (function gk(e, t) {
              return 11 & e.type
                ? Go(e, t)
                : 4 & e.type
                ? lu(e, t)
                : null;
            })(t, e)
          : -2 === n
          ? (function vk(e, t, n) {
              return n === Qt
                ? Go(t, e)
                : n === tr
                ? lu(t, e)
                : n === yn
                ? AE(t, e)
                : void 0;
            })(e, t, r)
          : Yr(e, e[b], n, t);
      }
      function FE(e, t, n, r) {
        const o = t[Qn].queries[r];
        if (null === o.matches) {
          const i = e.data,
            s = n.matches,
            a = [];
          for (let c = 0; null !== s && c < s.length; c += 2) {
            const u = s[c];
            a.push(
              u < 0 ? null : mk(t, i[u], s[c + 1], n.metadata.read),
            );
          }
          o.matches = a;
        }
        return o.matches;
      }
      function Kh(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = FE(e, t, o, n);
          for (let a = 0; a < i.length; a += 2) {
            const c = i[a];
            if (c > 0) r.push(s[a / 2]);
            else {
              const u = i[a + 1],
                l = t[-c];
              for (let d = Le; d < l.length; d++) {
                const f = l[d];
                f[zr] === f[He] && Kh(f[b], f, u, r);
              }
              if (null !== l[Bo]) {
                const d = l[Bo];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  Kh(h[b], h, u, r);
                }
              }
            }
          }
        }
        return r;
      }
      function PE(e, t, n) {
        const r = W();
        return (
          r.firstCreatePass &&
            ((function VE(e, t, n) {
              null === e.queries && (e.queries = new Qh()),
                e.queries.track(new Yh(t, n));
            })(r, new OE(e, t, n), -1),
            !(2 & ~t) && (r.staticViewQueries = !0)),
          (function kE(e, t, n) {
            const r = new Pf(!(4 & ~n));
            return (
              (function pF(e, t, n, r) {
                const o = jC(t);
                o.push(n),
                  e.firstCreatePass && UC(e).push(r, o.length - 1);
              })(e, t, r, r.destroy),
              (t[Qn] ??= new Zh()).queries.push(new Wh(r)) - 1
            );
          })(r, v(), t)
        );
      }
      function Jh(e, t) {
        return e.queries.getByIndex(t);
      }
      function jE(e, t) {
        const n = e[b],
          r = Jh(n, t);
        return r.crossesNgTemplate ? Kh(n, e, t, []) : FE(n, e, r, t);
      }
      function br(e, t) {
        Et('NgSignals');
        const n = (function nA(e) {
            const t = Object.create(oA);
            t.value = e;
            const n = () => (tt(t), t.value);
            return (n[Pe] = t), n;
          })(e),
          r = n[Pe];
        return (
          t?.equal && (r.equal = t.equal),
          (n.set = o => rv(r, o)),
          (n.update = o =>
            (function rA(e, t) {
              Ym() || nv(), rv(e, t(e.value));
            })(r, o)),
          (n.asReadonly = BE.bind(n)),
          n
        );
      }
      function BE() {
        const e = this[Pe];
        if (void 0 === e.readonlyFn) {
          const t = () => this();
          (t[Pe] = e), (e.readonlyFn = t);
        }
        return e.readonlyFn;
      }
      function he(e) {
        let t = (function JE(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (pn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new E(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const s = e;
              (s.inputs = Eu(e.inputs)),
                (s.inputTransforms = Eu(e.inputTransforms)),
                (s.declaredInputs = Eu(e.declaredInputs)),
                (s.outputs = Eu(e.outputs));
              const a = o.hostBindings;
              a && Ok(e, a);
              const c = o.viewQuery,
                u = o.contentQueries;
              if (
                (c && Rk(e, c),
                u && xk(e, u),
                Ak(e, o),
                CN(e.outputs, o.outputs),
                pn(o) && o.data.animation)
              ) {
                const l = e.data;
                l.animation = (l.animation || []).concat(
                  o.data.animation,
                );
              }
            }
            const i = o.features;
            if (i)
              for (let s = 0; s < i.length; s++) {
                const a = i[s];
                a && a.ngInherit && a(e), a === he && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function Nk(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = ts(
                o.hostAttrs,
                (n = ts(n, o.hostAttrs)),
              ));
          }
        })(r);
      }
      function Ak(e, t) {
        for (const n in t.inputs) {
          if (
            !t.inputs.hasOwnProperty(n) ||
            e.inputs.hasOwnProperty(n)
          )
            continue;
          const r = t.inputs[n];
          if (
            void 0 !== r &&
            ((e.inputs[n] = r),
            (e.declaredInputs[n] = t.declaredInputs[n]),
            null !== t.inputTransforms)
          ) {
            const o = Array.isArray(r) ? r[0] : r;
            if (!t.inputTransforms.hasOwnProperty(o)) continue;
            (e.inputTransforms ??= {}),
              (e.inputTransforms[o] = t.inputTransforms[o]);
          }
        }
      }
      function Eu(e) {
        return e === Tn ? {} : e === ie ? [] : e;
      }
      function Rk(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function xk(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function Ok(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function rD(e) {
        const t = e.inputConfig,
          n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            const o = t[r];
            Array.isArray(o) && o[3] && (n[r] = o[3]);
          }
        e.inputTransforms = n;
      }
      class io {}
      class oD {}
      class tp extends io {
        constructor(t, n, r) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new IE(this));
          const o = ct(t);
          (this._bootstrapComponents = Yt(o.bootstrap)),
            (this._r3Injector = o_(
              t,
              n,
              [
                { provide: io, useValue: this },
                {
                  provide: mu,
                  useValue: this.componentFactoryResolver,
                },
                ...r,
              ],
              Ze(t),
              new Set(['environment']),
            )),
            this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(t));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach(n => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class np extends oD {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new tp(this.moduleType, t, []);
        }
      }
      class iD extends io {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new IE(this)),
            (this.instance = null);
          const n = new Fo(
            [
              ...t.providers,
              { provide: io, useValue: this },
              {
                provide: mu,
                useValue: this.componentFactoryResolver,
              },
            ],
            t.parent || Ec(),
            t.debugName,
            new Set(['environment']),
          );
          (this.injector = n),
            t.runEnvironmentInitializers &&
              n.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function rp(e, t, n = null) {
        return new iD({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function Du(e) {
        return (
          !!op(e) &&
          (Array.isArray(e) ||
            (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function op(e) {
        return (
          null !== e &&
          ('function' == typeof e || 'object' == typeof e)
        );
      }
      function Ve(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ws(e, t, n, r, o, i, s, a, c, u) {
        const l = n + N,
          d = t.firstCreatePass
            ? (function Gk(e, t, n, r, o, i, s, a, c) {
                const u = t.consts,
                  l = to(t, e, 4, s || null, a || null);
                wh(t, n, l, rn(u, c)), Rc(t, l);
                const d = (l.tView = Dh(
                  2,
                  l,
                  r,
                  o,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  u,
                  null,
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, l),
                    (d.queries = t.queries.embeddedTView(l))),
                  l
                );
              })(l, t, e, r, o, i, s, a, c)
            : t.data[l];
        gn(d, !1);
        const f = sD(t, e, d, n);
        fs() && ou(t, e, f, d), lt(f, e);
        const h = LC(f, e, f, d);
        return (
          (e[l] = h),
          au(e, h),
          (function RE(e, t, n) {
            return qh(e, t, n);
          })(h, d, e),
          Sc(d) && Ch(t, e, d),
          null != c && Eh(e, d, u),
          d
        );
      }
      function sn(e, t, n, r, o, i, s, a) {
        const c = v(),
          u = W();
        return Ws(c, u, e, t, n, r, o, rn(u.consts, i), s, a), sn;
      }
      let sD = function aD(e, t, n, r) {
        return xn(!0), t[V].createComment('');
      };
      function Pn(e, t, n, r) {
        const o = v();
        return Ve(o, mn(), t) && (W(), Fn(De(), o, e, t, n, r)), Pn;
      }
      function Au(e, t) {
        return (e << 17) | (t << 2);
      }
      function Sr(e) {
        return (e >> 17) & 32767;
      }
      function gp(e) {
        return 2 | e;
      }
      function co(e) {
        return (131068 & e) >> 2;
      }
      function mp(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function vp(e) {
        return 1 | e;
      }
      function VD(e, t, n, r) {
        const o = e[n + 1],
          i = null === t;
        let s = r ? Sr(o) : co(o),
          a = !1;
        for (; 0 !== s && (!1 === a || i); ) {
          const u = e[s + 1];
          NP(e[s], t) && ((a = !0), (e[s + 1] = r ? vp(u) : gp(u))),
            (s = r ? Sr(u) : co(u));
        }
        a && (e[n + 1] = r ? gp(o) : vp(o));
      }
      function NP(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) &&
            xo(e, t) >= 0)
        );
      }
      function M(e, t, n) {
        const r = v();
        return (
          Ve(r, mn(), t) &&
            (function Vt(e, t, n, r, o, i, s, a) {
              const c = _t(t, n);
              let l,
                u = t.inputs;
              !a && null != u && (l = u[r])
                ? (Mh(e, n, l, r, o),
                  Gr(t) &&
                    (function yF(e, t) {
                      const n = Zt(t, e);
                      16 & n[R] || (n[R] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function vF(e) {
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
                  })(r)),
                  (o = null != s ? s(o, t.value || '', r) : o),
                  i.setProperty(c, r, o));
            })(W(), De(), r, e, t, r[V], n, !1),
          M
        );
      }
      function yp(e, t, n, r, o) {
        const s = o ? 'class' : 'style';
        Mh(e, n, t.inputs[s], s, r);
      }
      function Mr(e, t, n) {
        return _n(e, t, n, !1), Mr;
      }
      function Nu(e, t) {
        return _n(e, t, null, !0), Nu;
      }
      function _n(e, t, n, r) {
        const o = v(),
          i = W(),
          s = (function Xn(e) {
            const t = j.lFrame,
              n = t.bindingIndex;
            return (t.bindingIndex = t.bindingIndex + e), n;
          })(2);
        i.firstUpdatePass &&
          (function qD(e, t, n, r) {
            const o = e.data;
            if (null === o[n + 1]) {
              const i = o[st()],
                s = (function GD(e, t) {
                  return t >= e.expandoStartIndex;
                })(e, n);
              (function YD(e, t) {
                return !!(e.flags & (t ? 8 : 16));
              })(i, r) &&
                null === t &&
                !s &&
                (t = !1),
                (t = (function jP(e, t, n, r) {
                  const o = (function _f(e) {
                    const t = j.lFrame.currentDirectiveIndex;
                    return -1 === t ? null : e[t];
                  })(e);
                  let i = r ? t.residualClasses : t.residualStyles;
                  if (null === o)
                    0 === (r ? t.classBindings : t.styleBindings) &&
                      ((n = Ks(
                        (n = _p(null, e, t, n, r)),
                        t.attrs,
                        r,
                      )),
                      (i = null));
                  else {
                    const s = t.directiveStylingLast;
                    if (-1 === s || e[s] !== o)
                      if (((n = _p(o, e, t, n, r)), null === i)) {
                        let c = (function UP(e, t, n) {
                          const r = n
                            ? t.classBindings
                            : t.styleBindings;
                          if (0 !== co(r)) return e[Sr(r)];
                        })(e, t, r);
                        void 0 !== c &&
                          Array.isArray(c) &&
                          ((c = _p(null, e, t, c[1], r)),
                          (c = Ks(c, t.attrs, r)),
                          (function BP(e, t, n, r) {
                            e[
                              Sr(
                                n ? t.classBindings : t.styleBindings,
                              )
                            ] = r;
                          })(e, t, r, c));
                      } else
                        i = (function $P(e, t, n) {
                          let r;
                          const o = t.directiveEnd;
                          for (
                            let i = 1 + t.directiveStylingLast;
                            i < o;
                            i++
                          )
                            r = Ks(r, e[i].hostAttrs, n);
                          return Ks(r, t.attrs, n);
                        })(e, t, r);
                  }
                  return (
                    void 0 !== i &&
                      (r
                        ? (t.residualClasses = i)
                        : (t.residualStyles = i)),
                    n
                  );
                })(o, i, t, r)),
                (function TP(e, t, n, r, o, i) {
                  let s = i ? t.classBindings : t.styleBindings,
                    a = Sr(s),
                    c = co(s);
                  e[r] = n;
                  let l,
                    u = !1;
                  if (
                    (Array.isArray(n)
                      ? ((l = n[1]),
                        (null === l || xo(n, l) > 0) && (u = !0))
                      : (l = n),
                    o)
                  )
                    if (0 !== c) {
                      const f = Sr(e[a + 1]);
                      (e[r + 1] = Au(f, a)),
                        0 !== f && (e[f + 1] = mp(e[f + 1], r)),
                        (e[a + 1] = (function SP(e, t) {
                          return (131071 & e) | (t << 17);
                        })(e[a + 1], r));
                    } else
                      (e[r + 1] = Au(a, 0)),
                        0 !== a && (e[a + 1] = mp(e[a + 1], r)),
                        (a = r);
                  else
                    (e[r + 1] = Au(c, 0)),
                      0 === a
                        ? (a = r)
                        : (e[c + 1] = mp(e[c + 1], r)),
                      (c = r);
                  u && (e[r + 1] = gp(e[r + 1])),
                    VD(e, l, r, !0),
                    VD(e, l, r, !1),
                    (function AP(e, t, n, r, o) {
                      const i = o
                        ? e.residualClasses
                        : e.residualStyles;
                      null != i &&
                        'string' == typeof t &&
                        xo(i, t) >= 0 &&
                        (n[r + 1] = vp(n[r + 1]));
                    })(t, l, e, r, i),
                    (s = Au(a, c)),
                    i ? (t.classBindings = s) : (t.styleBindings = s);
                })(o, i, t, n, s, r);
            }
          })(i, e, s, r),
          t !== H &&
            Ve(o, s, t) &&
            (function ZD(e, t, n, r, o, i, s, a) {
              if (!(3 & t.type)) return;
              const c = e.data,
                u = c[a + 1],
                l = (function MP(e) {
                  return !(1 & ~e);
                })(u)
                  ? QD(c, t, n, o, co(u), s)
                  : void 0;
              Ru(l) ||
                (Ru(i) ||
                  ((function IP(e) {
                    return !(2 & ~e);
                  })(u) &&
                    (i = QD(c, null, n, o, a, s))),
                (function sF(e, t, n, r, o) {
                  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                  else {
                    let i =
                      -1 === r.indexOf('-') ? void 0 : Er.DashCase;
                    null == o
                      ? e.removeStyle(n, r, i)
                      : ('string' == typeof o &&
                          o.endsWith('!important') &&
                          ((o = o.slice(0, -10)),
                          (i |= Er.Important)),
                        e.setStyle(n, r, o, i));
                  }
                })(r, s, cs(st(), n), o, i));
            })(
              i,
              i.data[st()],
              o,
              o[V],
              e,
              (o[s + 1] = (function qP(e, t) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof t
                      ? (e += t)
                      : 'object' == typeof e && (e = Ze(Cr(e)))),
                  e
                );
              })(t, n)),
              r,
              s,
            );
      }
      function _p(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < s && ((i = t[a]), (r = Ks(r, i.hostAttrs, o)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Ks(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            'number' == typeof s
              ? (o = s)
              : o === r &&
                (Array.isArray(e) ||
                  (e = void 0 === e ? [] : ['', e]),
                Gt(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function QD(e, t, n, r, o, i) {
        const s = null === t;
        let a;
        for (; o > 0; ) {
          const c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = null === l;
          let f = n[o + 1];
          f === H && (f = d ? ie : void 0);
          let h = d ? qd(f, r) : l === r ? f : void 0;
          if ((u && !Ru(h) && (h = qd(c, r)), Ru(h) && ((a = h), s)))
            return a;
          const p = e[o + 1];
          o = s ? Sr(p) : co(p);
        }
        if (null !== t) {
          let c = i ? t.residualClasses : t.residualStyles;
          null != c && (a = qd(c, r));
        }
        return a;
      }
      function Ru(e) {
        return void 0 !== e;
      }
      function U(e, t, n, r) {
        const o = v(),
          i = W(),
          s = N + e,
          a = o[V],
          c = i.firstCreatePass
            ? (function gL(e, t, n, r, o, i) {
                const s = t.consts,
                  c = to(t, e, 2, r, rn(s, o));
                return (
                  wh(t, n, c, rn(s, i)),
                  null !== c.attrs && _u(c, c.attrs, !1),
                  null !== c.mergedAttrs && _u(c, c.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          u = ew(i, o, c, a, t, e);
        o[s] = u;
        const l = Sc(c);
        return (
          gn(c, !0),
          SC(a, u, c),
          !(function oi(e) {
            return !(32 & ~e.flags);
          })(c) &&
            fs() &&
            ou(i, o, u, c),
          0 ===
            (function FR() {
              return j.lFrame.elementDepthCount;
            })() && lt(u, o),
          (function kR() {
            j.lFrame.elementDepthCount++;
          })(),
          l && (Ch(i, o, c), _h(i, c, o)),
          null !== r && Eh(o, c),
          U
        );
      }
      function L() {
        let e = fe();
        mf() ? vf() : ((e = e.parent), gn(e, !1));
        const t = e;
        (function LR(e) {
          return j.skipHydrationRootTNode === e;
        })(t) &&
          (function BR() {
            j.skipHydrationRootTNode = null;
          })(),
          (function PR() {
            j.lFrame.elementDepthCount--;
          })();
        const n = W();
        return (
          n.firstCreatePass &&
            (Rc(n, e), af(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function ex(e) {
              return !!(8 & e.flags);
            })(t) &&
            yp(n, t, v(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function tx(e) {
              return !!(16 & e.flags);
            })(t) &&
            yp(n, t, v(), t.stylesWithoutHost, !1),
          L
        );
      }
      function ve(e, t, n, r) {
        return U(e, t, n, r), L(), ve;
      }
      let ew = (e, t, n, r, o, i) => (
        xn(!0),
        nu(
          r,
          o,
          (function Vy() {
            return j.lFrame.currentNamespace;
          })(),
        )
      );
      function Me(e, t, n) {
        const r = v(),
          o = W(),
          i = e + N,
          s = o.firstCreatePass
            ? (function yL(e, t, n, r, o) {
                const i = t.consts,
                  s = rn(i, r),
                  a = to(t, e, 8, 'ng-container', s);
                return (
                  null !== s && _u(a, s, !0),
                  wh(t, n, a, rn(i, o)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(i, o, r, t, n)
            : o.data[i];
        gn(s, !0);
        const a = nw(o, r, s, e);
        return (
          (r[i] = a),
          fs() && ou(o, r, a, s),
          lt(a, r),
          Sc(s) && (Ch(o, r, s), _h(o, s, r)),
          null != n && Eh(r, s),
          Me
        );
      }
      function Te() {
        let e = fe();
        const t = W();
        return (
          mf() ? vf() : ((e = e.parent), gn(e, !1)),
          t.firstCreatePass &&
            (Rc(t, e), af(e) && t.queries.elementEnd(e)),
          Te
        );
      }
      let nw = (e, t, n, r) => (xn(!0), lh(t[V], ''));
      function Xt() {
        return v();
      }
      const Di = 'en-US';
      let aw = Di;
      let Sw = (e, t, n) => {};
      function K(e, t, n, r) {
        const o = v(),
          i = W(),
          s = fe();
        return (
          (function Ip(e, t, n, r, o, i, s) {
            const a = Sc(r),
              u = e.firstCreatePass && UC(e),
              l = t[Ee],
              d = jC(t);
            let f = !0;
            if (3 & r.type || s) {
              const g = _t(r, t),
                m = s ? s(g) : g,
                C = d.length,
                y = s ? z => s(se(z[r.index])) : r.index;
              let T = null;
              if (
                (!s &&
                  a &&
                  (T = (function lV(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const s = o[i];
                        if (s === n && o[i + 1] === r) {
                          const a = t[Lo],
                            c = o[i + 2];
                          return a.length > c ? a[c] : null;
                        }
                        'string' == typeof s && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== T)
              )
                ((T.__ngLastListenerFn__ || T).__ngNextListenerFn__ =
                  i),
                  (T.__ngLastListenerFn__ = i),
                  (f = !1);
              else {
                (i = Nw(r, t, l, i)), Sw(g, o, i);
                const z = n.listen(m, o, i);
                d.push(i, z), u && u.push(o, y, C, C + 1);
              }
            } else i = Nw(r, t, l, i);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
              const g = p.length;
              if (g)
                for (let m = 0; m < g; m += 2) {
                  const re = t[p[m]][p[m + 1]].subscribe(i),
                    Fe = d.length;
                  d.push(i, re),
                    u && u.push(o, r.index, Fe, -(Fe + 1));
                }
            }
          })(i, o, o[V], s, e, t, r),
          K
        );
      }
      function Aw(e, t, n, r) {
        const o = k(null);
        try {
          return Rn(6, t, n), !1 !== n(r);
        } catch (i) {
          return cu(e, i), !1;
        } finally {
          Rn(7, t, n), k(o);
        }
      }
      function Nw(e, t, n, r) {
        return function o(i) {
          if (i === Function) return r;
          xs(e.componentOffset > -1 ? Zt(e.index, t) : t, 5);
          let a = Aw(t, n, r, i),
            c = o.__ngNextListenerFn__;
          for (; c; )
            (a = Aw(t, n, c, i) && a), (c = c.__ngNextListenerFn__);
          return a;
        };
      }
      function te(e = 1) {
        return (function qR(e) {
          return (j.lFrame.contextLView = (function wy(e, t) {
            for (; e > 0; ) (t = t[Vo]), e--;
            return t;
          })(e, j.lFrame.contextLView))[Ee];
        })(e);
      }
      function dV(e, t) {
        let n = null;
        const r = (function ZN(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let o = 0; o < t.length; o++) {
          const i = t[o];
          if ('*' !== i) {
            if (null === r ? Jv(e, i, !0) : KN(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function wi(e) {
        const t = v()[Re][it];
        if (!t.projection) {
          const r = (t.projection = (function gc(e, t) {
              const n = [];
              for (let r = 0; r < e; r++) n.push(t);
              return n;
            })(e ? e.length : 1, null)),
            o = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            if (128 !== i.type) {
              const s = e ? dV(i, e) : 0;
              null !== s &&
                (o[s] ? (o[s].projectionNext = i) : (r[s] = i),
                (o[s] = i));
            }
            i = i.next;
          }
        }
      }
      function bi(e, t = 0, n, r, o, i) {
        const s = v(),
          a = W(),
          c = r ? e + 1 : null;
        null !== c && Ws(s, a, c, r, o, i, null, n);
        const u = to(a, N + e, 16, null, n || null);
        null === u.projection && (u.projection = t), vf();
        const d = !s[yt] || Wr();
        null === s[Re][it].projection[u.projection] && null !== c
          ? (function fV(e, t, n) {
              const r = N + n,
                o = t.data[r],
                i = e[r],
                s = oo(i, o.tView.ssrId);
              ei(
                i,
                Jo(e, o, void 0, { dehydratedView: s }),
                0,
                no(o, s),
              );
            })(s, a, c)
          : d &&
            32 & ~u.flags &&
            (function oF(e, t, n) {
              bC(
                t[V],
                0,
                t,
                n,
                hh(e, n, t),
                yC(n.parent || t[it], n, t),
              );
            })(a, s, u);
      }
      function ra(e, t, n) {
        PE(e, t, n);
      }
      function Ii(e) {
        const t = v(),
          n = W(),
          r = Cf();
        Nc(r + 1);
        const o = Jh(n, r);
        if (
          e.dirty &&
          (function xR(e) {
            return !(4 & ~e[R]);
          })(t) === !(2 & ~o.metadata.flags)
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = jE(t, r);
            e.reset(i, f_), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Si() {
        return (function Xh(e, t) {
          return e[Qn].queries[t].queryList;
        })(v(), Cf());
      }
      function Bw(e) {
        return (function qr(e, t) {
          return e[t];
        })(
          (function My() {
            return j.lFrame.contextLView;
          })(),
          N + e,
        );
      }
      function rr(e, t = '') {
        const n = v(),
          r = W(),
          o = e + N,
          i = r.firstCreatePass ? to(r, o, 1, t, null) : r.data[o],
          s = Kw(r, n, i, t, e);
        (n[o] = s), fs() && ou(r, n, s, i), gn(i, !1);
      }
      let Kw = (e, t, n, r, o) => (
        xn(!0),
        (function uh(e, t) {
          return e.createText(t);
        })(t[V], r)
      );
      function Tr(e, t, n) {
        const r = v(),
          o = (function fi(e, t, n, r) {
            return Ve(e, mn(), n) ? t + $(n) + r : H;
          })(r, e, t, n);
        return (
          o !== H &&
            (function er(e, t, n) {
              const r = cs(t, e);
              !(function fC(e, t, n) {
                e.setValue(t, n);
              })(e[V], r, n);
            })(r, st(), o),
          Tr
        );
      }
      function Tp(e, t, n, r, o) {
        if (((e = P(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Tp(e[i], t, n, r, o);
        else {
          const i = W(),
            s = v(),
            a = fe();
          let c = Hr(e) ? e : P(e.provide);
          const u = ay(e),
            l = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
          if (Hr(e) || !e.multi) {
            const h = new hs(u, o, w),
              p = Np(c, t, o ? l : l + f, d);
            -1 === p
              ? (Af(kc(a, s), i, c),
                Ap(i, e, t.length),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(h),
                s.push(h))
              : ((n[p] = h), (s[p] = h));
          } else {
            const h = Np(c, t, l + f, d),
              p = Np(c, t, l, l + f),
              m = p >= 0 && n[p];
            if ((o && !m) || (!o && !(h >= 0 && n[h]))) {
              Af(kc(a, s), i, c);
              const C = (function OV(e, t, n, r, o) {
                const i = new hs(e, n, w);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  db(i, o, r && !n),
                  i
                );
              })(o ? xV : RV, n.length, o, r, u);
              !o && m && (n[p].providerFactory = C),
                Ap(i, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(C),
                s.push(C);
            } else
              Ap(i, e, h > -1 ? h : p, db(n[o ? p : h], u, !o && r));
            !o && r && m && n[p].componentProviders++;
          }
        }
      }
      function Ap(e, t, n, r) {
        const o = Hr(t),
          i = (function aR(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const c = (i ? P(t.useClass) : t).prototype.ngOnDestroy;
          if (c) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const l = u.indexOf(n);
              -1 === l ? u.push(n, [r, c]) : u[l + 1].push(r, c);
            } else u.push(n, c);
          }
        }
      }
      function db(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Np(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function RV(e, t, n, r) {
        return Rp(this.multi, []);
      }
      function xV(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = Yr(n, n[b], this.providerFactory.index, r);
          (i = a.slice(0, s)), Rp(o, i);
          for (let c = s; c < a.length; c++) i.push(a[c]);
        } else (i = []), Rp(o, i);
        return i;
      }
      function Rp(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function xe(e, t = []) {
        return n => {
          n.providersResolver = (r, o) =>
            (function NV(e, t, n) {
              const r = W();
              if (r.firstCreatePass) {
                const o = pn(e);
                Tp(n, r.data, r.blueprint, o, !0),
                  Tp(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      let FV = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
              const r = Yd(0, n.type),
                o =
                  r.length > 0
                    ? rp(
                        [r],
                        this._injector,
                        `Standalone[${n.type.name}]`,
                      )
                    : null;
              this.cachedInjectors.set(n, o);
            }
            return this.cachedInjectors.get(n);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'environment',
            factory: () => new e(A(Wt)),
          }));
        }
        return e;
      })();
      function ee(e) {
        Et('NgStandalone'),
          (e.getStandaloneInjector = t =>
            t.get(FV).getOrCreateStandaloneInjector(e));
      }
      function _b(e, t) {
        return lu(e, t);
      }
      let kb = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'platform',
          }));
        }
        return e;
      })();
      const Ub = new D('');
      function ua(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Bb(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const Q2 = new D('');
      let Up = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((n, r) => {
                (this.resolve = n), (this.reject = r);
              })),
              (this.appInits = _(Q2, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [];
            for (const o of this.appInits) {
              const i = o();
              if (ua(i)) n.push(i);
              else if (Bb(i)) {
                const s = new Promise((a, c) => {
                  i.subscribe({ complete: a, error: c });
                });
                n.push(s);
              }
            }
            const r = () => {
              (this.done = !0), this.resolve();
            };
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch(o => {
                this.reject(o);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const Bu = new D('');
      let En = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = _(Tx)),
              (this.afterRenderEffectManager = _(vu)),
              (this.zonelessEnabled = _(Bs)),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new mt()),
              (this.afterTick = new mt()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = _(Xr).hasPendingTasks.pipe(
                oe(n => !n),
              )),
              (this._injector = _(Wt));
          }
          get allViews() {
            return [...this.externalTestViews.keys(), ...this._views];
          }
          get destroyed() {
            return this._destroyed;
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const o = n instanceof yE;
            if (!this._injector.get(Up).done)
              throw (
                (!o &&
                  (function mr(e) {
                    const t = Y(e) || Qe(e) || ot(e);
                    return null !== t && t.standalone;
                  })(n),
                new E(405, !1))
              );
            let s;
            (s = o
              ? n
              : this._injector.get(mu).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const a = (function Y2(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(io),
              u = s.create(Ge.NULL, [], r || s.selector, a),
              l = u.location.nativeElement,
              d = u.injector.get(Ub, null);
            return (
              d?.registerApplication(l),
              u.onDestroy(() => {
                this.detachView(u.hostView),
                  $u(this.components, u),
                  d?.unregisterApplication(l);
              }),
              this._loadComponent(u),
              u
            );
          }
          tick() {
            this._tick(!0);
          }
          _tick(n) {
            if (this._runningTick) throw new E(101, !1);
            const r = k(null);
            try {
              (this._runningTick = !0),
                this.detectChangesInAttachedViews(n);
            } catch (o) {
              this.internalErrorHandler(o);
            } finally {
              (this._runningTick = !1), k(r), this.afterTick.next();
            }
          }
          detectChangesInAttachedViews(n) {
            let r = null;
            this._injector.destroyed ||
              (r = this._injector.get(Bh, null, { optional: !0 }));
            let o = 0;
            const i = this.afterRenderEffectManager;
            for (; o < 10; ) {
              const s = 0 === o;
              if (n || !s) {
                this.beforeRender.next(s);
                for (let { _lView: a, notifyErrorHandler: c } of this
                  ._views)
                  X2(a, c, s, this.zonelessEnabled);
              } else r?.begin?.(), r?.end?.();
              if (
                (o++,
                i.executeInternalCallbacks(),
                !this.allViews.some(({ _lView: a }) => ls(a)) &&
                  (i.execute(),
                  !this.allViews.some(({ _lView: a }) => ls(a))))
              )
                break;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            $u(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n);
            const r = this._injector.get(Bu, []);
            [...this._bootstrapListeners, ...r].forEach(o => o(n));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                this._destroyListeners.forEach(n => n()),
                  this._views.slice().forEach(n => n.destroy());
              } finally {
                (this._destroyed = !0),
                  (this._views = []),
                  (this._bootstrapListeners = []),
                  (this._destroyListeners = []);
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => $u(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new E(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          warnIfDestroyed() {}
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function $u(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function X2(e, t, n, r) {
        (n || ls(e)) && uu(e, t, n && !r ? 0 : 1);
      }
      class J2 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let ej = (() => {
          class e {
            compileModuleSync(n) {
              return new np(n);
            }
            compileModuleAsync(n) {
              return Promise.resolve(this.compileModuleSync(n));
            }
            compileModuleAndAllComponentsSync(n) {
              const r = this.compileModuleSync(n),
                i = Yt(ct(n).declarations).reduce((s, a) => {
                  const c = Y(a);
                  return c && s.push(new zs(c)), s;
                }, []);
              return new J2(r, i);
            }
            compileModuleAndAllComponentsAsync(n) {
              return Promise.resolve(
                this.compileModuleAndAllComponentsSync(n),
              );
            }
            clearCache() {}
            clearCacheFor(n) {}
            getModuleId(n) {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        rj = (() => {
          class e {
            constructor() {
              (this.zone = _(ae)),
                (this.changeDetectionScheduler = _(ni)),
                (this.applicationRef = _(En));
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
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function Bp({ ngZoneFactory: e, ignoreChangesOutsideZone: t }) {
        return (
          (e ??= () =>
            new ae(
              (function $p(e) {
                return {
                  enableLongStackTrace: !1,
                  shouldCoalesceEventChangeDetection:
                    e?.eventCoalescing ?? !1,
                  shouldCoalesceRunChangeDetection:
                    e?.runCoalescing ?? !1,
                };
              })(),
            )),
          [
            { provide: ae, useFactory: e },
            {
              provide: qt,
              multi: !0,
              useFactory: () => {
                const n = _(rj, { optional: !0 });
                return () => n.initialize();
              },
            },
            {
              provide: qt,
              multi: !0,
              useFactory: () => {
                const n = _(ij);
                return () => {
                  n.initialize();
                };
              },
            },
            !0 === t ? { provide: vE, useValue: !0 } : [],
          ]
        );
      }
      let ij = (() => {
          class e {
            constructor() {
              (this.subscription = new at()),
                (this.initialized = !1),
                (this.zone = _(ae)),
                (this.pendingTasks = _(Xr));
            }
            initialize() {
              if (this.initialized) return;
              this.initialized = !0;
              let n = null;
              !this.zone.isStable &&
                !this.zone.hasPendingMacrotasks &&
                !this.zone.hasPendingMicrotasks &&
                (n = this.pendingTasks.add()),
                this.zone.runOutsideAngular(() => {
                  this.subscription.add(
                    this.zone.onStable.subscribe(() => {
                      ae.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          null !== n &&
                            !this.zone.hasPendingMacrotasks &&
                            !this.zone.hasPendingMicrotasks &&
                            (this.pendingTasks.remove(n), (n = null));
                        });
                    }),
                  );
                }),
                this.subscription.add(
                  this.zone.onUnstable.subscribe(() => {
                    ae.assertInAngularZone(),
                      (n ??= this.pendingTasks.add());
                  }),
                );
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        la = (() => {
          class e {
            constructor() {
              (this.appRef = _(En)),
                (this.taskService = _(Xr)),
                (this.ngZone = _(ae)),
                (this.zonelessEnabled = _(Bs)),
                (this.disableScheduling =
                  _(vE, { optional: !0 }) ?? !1),
                (this.zoneIsDefined =
                  typeof Zone < 'u' && !!Zone.root.run),
                (this.schedulerTickApplyArgs = [
                  { data: { __scheduler_tick__: !0 } },
                ]),
                (this.subscriptions = new at()),
                (this.cancelScheduledCallback = null),
                (this.shouldRefreshViews = !1),
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
                  (this.ngZone instanceof kf || !this.zoneIsDefined));
            }
            notify(n) {
              if (!this.zonelessEnabled && 5 === n) return;
              switch (n) {
                case 3:
                case 2:
                case 0:
                case 4:
                case 5:
                case 1:
                  this.shouldRefreshViews = !0;
              }
              if (!this.shouldScheduleTick()) return;
              const r = this.useMicrotaskScheduler ? a_ : s_;
              (this.pendingRenderTaskId = this.taskService.add()),
                this.zoneIsDefined
                  ? Zone.root.run(() => {
                      this.cancelScheduledCallback = r(() => {
                        this.tick(this.shouldRefreshViews);
                      });
                    })
                  : (this.cancelScheduledCallback = r(() => {
                      this.tick(this.shouldRefreshViews);
                    }));
            }
            shouldScheduleTick() {
              return !(
                this.disableScheduling ||
                null !== this.pendingRenderTaskId ||
                this.runningTick ||
                this.appRef._runningTick ||
                (!this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  ae.isInAngularZone())
              );
            }
            tick(n) {
              if (this.runningTick || this.appRef.destroyed) return;
              const r = this.taskService.add();
              try {
                this.ngZone.run(
                  () => {
                    (this.runningTick = !0), this.appRef._tick(n);
                  },
                  void 0,
                  this.schedulerTickApplyArgs,
                );
              } catch (o) {
                throw (this.taskService.remove(r), o);
              } finally {
                this.cleanup();
              }
              (this.useMicrotaskScheduler = !0),
                a_(() => {
                  (this.useMicrotaskScheduler = !1),
                    this.taskService.remove(r);
                });
            }
            ngOnDestroy() {
              this.subscriptions.unsubscribe(), this.cleanup();
            }
            cleanup() {
              if (
                ((this.shouldRefreshViews = !1),
                (this.runningTick = !1),
                this.cancelScheduledCallback?.(),
                (this.cancelScheduledCallback = null),
                null !== this.pendingRenderTaskId)
              ) {
                const n = this.pendingRenderTaskId;
                (this.pendingRenderTaskId = null),
                  this.taskService.remove(n);
              }
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const or = new D('', {
          providedIn: 'root',
          factory: () =>
            _(or, X.Optional | X.SkipSelf) ||
            (function sj() {
              return (
                (typeof $localize < 'u' && $localize.locale) || Di
              );
            })(),
        }),
        zp = new D('');
      let Ar = null;
      let da = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = hj);
        }
        return e;
      })();
      function hj(e) {
        return (function pj(e, t, n) {
          if (Gr(e) && !n) {
            const r = Zt(e.index, t);
            return new Os(r, r);
          }
          return 175 & e.type ? new Os(t[Re], t) : null;
        })(fe(), v(), !(16 & ~e));
      }
      class rI {
        constructor() {}
        supports(t) {
          return Du(t);
        }
        create(t) {
          return new _j(t);
        }
      }
      const yj = (e, t) => t;
      class _j {
        constructor(t) {
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
            (this._trackByFn = t || yj);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            o = 0,
            i = null;
          for (; n || r; ) {
            const s =
                !r || (n && n.currentIndex < iI(r, o, i)) ? n : r,
              a = iI(s, o, i),
              c = s.currentIndex;
            if (s === r) o--, (r = r._nextRemoved);
            else if (((n = n._next), null == s.previousIndex)) o++;
            else {
              i || (i = []);
              const u = a - o,
                l = c - o;
              if (u != l) {
                for (let f = 0; f < u; f++) {
                  const h = f < i.length ? i[f] : (i[f] = 0),
                    p = h + f;
                  l <= p && p < u && (i[f] = h + 1);
                }
                i[s.previousIndex] = l - u;
              }
            }
            a !== c && t(s, a, c);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (
            n = this._previousItHead;
            null !== n;
            n = n._nextPrevious
          )
            t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded)
            t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved)
            t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved)
            t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Du(t))) throw new E(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let o,
            i,
            s,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let a = 0; a < this.length; a++)
              (i = t[a]),
                (s = this._trackByFn(a, i)),
                null !== n && Object.is(n.trackById, s)
                  ? (r && (n = this._verifyReinsertion(n, i, s, a)),
                    Object.is(n.item, i) ||
                      this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, s, a)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function Hk(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, a => {
                (s = this._trackByFn(o, a)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, a, s, o)),
                      Object.is(n.item, a) ||
                        this._addIdentityChange(n, a))
                    : ((n = this._mismatch(n, a, s, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return (
            this._truncate(n), (this.collection = t), this.isDirty
          );
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
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (
              t = this._additionsHead;
              null !== t;
              t = t._nextAdded
            )
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail =
                null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t
              ? (i = this._itTail)
              : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) ||
                  this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) ||
                  this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new Cj(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o &&
                ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords &&
            this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail &&
              (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords &&
            this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o
              ? (this._removalsHead = i)
              : (o._nextRemoved = i),
            null === i
              ? (this._removalsTail = o)
              : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const o = null === n ? this._itHead : n._next;
          return (
            (t._next = o),
            (t._prev = n),
            null === o ? (this._itTail = t) : (o._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords &&
              (this._linkedRecords = new oI()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords &&
            this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new oI()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail =
                  this._removalsTail._nextRemoved =
                    t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange =
                    t)),
            t
          );
        }
      }
      class Cj {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
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
      class Ej {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class oI {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new Ej()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const o = this.map.get(t);
          return o ? o.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function iI(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class sI {
        constructor() {}
        supports(t) {
          return t instanceof Map || op(t);
        }
        create() {
          return new Dj();
        }
      }
      class Dj {
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
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (
            n = this._previousMapHead;
            null !== n;
            n = n._nextPrevious
          )
            t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged)
            t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded)
            t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved)
            t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || op(t))) throw new E(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, o) => {
              if (n && n.key === o)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null),
              (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail &&
              (this._changesTail._nextChanged = null),
            this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n),
                (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const o = this._records.get(t);
            this._maybeAddToChanges(o, n);
            const i = o._prev,
              s = o._next;
            return (
              i && (i._next = s),
              s && (s._prev = i),
              (o._next = null),
              (o._prev = null),
              o
            );
          }
          const r = new wj(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead,
                t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (
              t = this._changesHead;
              null !== t;
              t = t._nextChanged
            )
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t),
              (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t),
              (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach(r => n(t[r], r));
        }
      }
      class wj {
        constructor(t) {
          (this.key = t),
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
      function aI() {
        return new Yp([new rI()]);
      }
      let Yp = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: aI,
          }));
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: r => e.create(n, r || aI()),
              deps: [[e, new zd(), new Hd()]],
            };
          }
          find(n) {
            const r = this.factories.find(o => o.supports(n));
            if (null != r) return r;
            throw new E(901, !1);
          }
        }
        return e;
      })();
      function cI() {
        return new qu([new sI()]);
      }
      let qu = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: cI,
          }));
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const o = r.factories.slice();
              n = n.concat(o);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: r => e.create(n, r || cI()),
              deps: [[e, new zd(), new Hd()]],
            };
          }
          find(n) {
            const r = this.factories.find(o => o.supports(n));
            if (r) return r;
            throw new E(901, !1);
          }
        }
        return e;
      })();
      function Uj(e) {
        try {
          const {
              rootComponent: t,
              appProviders: n,
              platformProviders: r,
            } = e,
            o = (function dj(e = []) {
              if (Ar) return Ar;
              const t = (function Kb(e = [], t) {
                return Ge.create({
                  name: t,
                  providers: [
                    { provide: Jd, useValue: 'platform' },
                    {
                      provide: zp,
                      useValue: new Set([() => (Ar = null)]),
                    },
                    ...e,
                  ],
                });
              })(e);
              return (
                (Ar = t),
                (function $b() {
                  !(function tA(e) {
                    tv = e;
                  })(() => {
                    throw new E(600, !1);
                  });
                })(),
                (function Xb(e) {
                  e.get(x_, null)?.forEach(n => n());
                })(t),
                t
              );
            })(r),
            i = [
              Bp({}),
              { provide: ni, useExisting: la },
              ...(n || []),
            ],
            a = new iD({
              providers: i,
              parent: o,
              debugName: '',
              runEnvironmentInitializers: !1,
            }).injector,
            c = a.get(ae);
          return c.run(() => {
            a.resolveInjectorInitializers();
            const u = a.get(vn, null);
            let l;
            c.runOutsideAngular(() => {
              l = c.onError.subscribe({
                next: h => {
                  u.handleError(h);
                },
              });
            });
            const d = () => a.destroy(),
              f = o.get(zp);
            return (
              f.add(d),
              a.onDestroy(() => {
                l.unsubscribe(), f.delete(d);
              }),
              (function Hb(e, t, n) {
                try {
                  const r = n();
                  return ua(r)
                    ? r.catch(o => {
                        throw (
                          (t.runOutsideAngular(() =>
                            e.handleError(o),
                          ),
                          o)
                        );
                      })
                    : r;
                } catch (r) {
                  throw (
                    (t.runOutsideAngular(() => e.handleError(r)), r)
                  );
                }
              })(u, c, () => {
                const h = a.get(Up);
                return (
                  h.runInitializers(),
                  h.donePromise.then(() => {
                    !(function cw(e) {
                      'string' == typeof e &&
                        (aw = e.toLowerCase().replace(/_/g, '-'));
                    })(a.get(or, Di) || Di);
                    const g = a.get(En);
                    return void 0 !== t && g.bootstrap(t), g;
                  })
                );
              })
            );
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }
      const II = new D('');
      function Ai(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function fo(e, t) {
        Et('NgSignals');
        const n = (function XT(e) {
          const t = Object.create(JT);
          t.computation = e;
          const n = () => {
            if ((Zm(t), tt(t), t.value === Ka)) throw t.error;
            return t.value;
          };
          return (n[Pe] = t), n;
        })(e);
        return t?.equal && (n[Pe].equal = t.equal), n;
      }
      function jn(e) {
        const t = k(null);
        try {
          return e();
        } finally {
          k(t);
        }
      }
      let kI = null;
      function Nr() {
        return kI;
      }
      class pU {}
      const an = new D('');
      let eg = (() => {
          class e {
            historyGo(n) {
              throw new Error('');
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(gU),
              providedIn: 'platform',
            }));
          }
          return e;
        })(),
        gU = (() => {
          class e extends eg {
            constructor() {
              super(),
                (this._doc = _(an)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return Nr().getBaseHref(this._doc);
            }
            onPopState(n) {
              const r = Nr().getGlobalEventTarget(
                this._doc,
                'window',
              );
              return (
                r.addEventListener('popstate', n, !1),
                () => r.removeEventListener('popstate', n)
              );
            }
            onHashChange(n) {
              const r = Nr().getGlobalEventTarget(
                this._doc,
                'window',
              );
              return (
                r.addEventListener('hashchange', n, !1),
                () => r.removeEventListener('hashchange', n)
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
            set pathname(n) {
              this._location.pathname = n;
            }
            pushState(n, r, o) {
              this._history.pushState(n, r, o);
            }
            replaceState(n, r, o) {
              this._history.replaceState(n, r, o);
            }
            forward() {
              this._history.forward();
            }
            back() {
              this._history.back();
            }
            historyGo(n = 0) {
              this._history.go(n);
            }
            getState() {
              return this._history.state;
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => new e(),
              providedIn: 'platform',
            }));
          }
          return e;
        })();
      function tg(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        let n = 0;
        return (
          e.endsWith('/') && n++,
          t.startsWith('/') && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
        );
      }
      function PI(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return (
          e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n)
        );
      }
      function ir(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let Ni = (() => {
        class e {
          historyGo(n) {
            throw new Error('');
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => _(mU),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const LI = new D('');
      let mU = (() => {
          class e extends Ni {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._removeListenerFns = []),
                (this._baseHref =
                  r ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  _(an).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(n) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(n),
                this._platformLocation.onHashChange(n),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(n) {
              return tg(this._baseHref, n);
            }
            path(n = !1) {
              const r =
                  this._platformLocation.pathname +
                  ir(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && n ? `${r}${o}` : r;
            }
            pushState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + ir(i));
              this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + ir(i));
              this._platformLocation.replaceState(n, r, s);
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
            historyGo(n = 0) {
              this._platformLocation.historyGo?.(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(eg), A(LI, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        vU = (() => {
          class e extends Ni {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != r && (this._baseHref = r);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(n) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(n),
                this._platformLocation.onHashChange(n),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(n = !1) {
              const r = this._platformLocation.hash ?? '#';
              return r.length > 0 ? r.substring(1) : r;
            }
            prepareExternalUrl(n) {
              const r = tg(this._baseHref, n);
              return r.length > 0 ? '#' + r : r;
            }
            pushState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + ir(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + ir(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(n, r, s);
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
            historyGo(n = 0) {
              this._platformLocation.historyGo?.(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(eg), A(LI, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        ga = (() => {
          class e {
            constructor(n) {
              (this._subject = new Z()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = n);
              const r = this._locationStrategy.getBaseHref();
              (this._basePath = (function CU(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, n] = e.split(/\/\/[^\/]+/);
                  return n;
                }
                return e;
              })(PI(VI(r)))),
                this._locationStrategy.onPopState(o => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: o.state,
                    type: o.type,
                  });
                });
            }
            ngOnDestroy() {
              this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []);
            }
            path(n = !1) {
              return this.normalize(this._locationStrategy.path(n));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(n, r = '') {
              return this.path() == this.normalize(n + ir(r));
            }
            normalize(n) {
              return e.stripTrailingSlash(
                (function _U(e, t) {
                  if (!e || !t.startsWith(e)) return t;
                  const n = t.substring(e.length);
                  return '' === n ||
                    ['/', ';', '?', '#'].includes(n[0])
                    ? n
                    : t;
                })(this._basePath, VI(n)),
              );
            }
            prepareExternalUrl(n) {
              return (
                n && '/' !== n[0] && (n = '/' + n),
                this._locationStrategy.prepareExternalUrl(n)
              );
            }
            go(n, r = '', o = null) {
              this._locationStrategy.pushState(o, '', n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + ir(r)),
                  o,
                );
            }
            replaceState(n, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + ir(r)),
                  o,
                );
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(n = 0) {
              this._locationStrategy.historyGo?.(n);
            }
            onUrlChange(n) {
              return (
                this._urlChangeListeners.push(n),
                (this._urlChangeSubscription ??= this.subscribe(r => {
                  this._notifyUrlChangeListeners(r.url, r.state);
                })),
                () => {
                  const r = this._urlChangeListeners.indexOf(n);
                  this._urlChangeListeners.splice(r, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null));
                }
              );
            }
            _notifyUrlChangeListeners(n = '', r) {
              this._urlChangeListeners.forEach(o => o(n, r));
            }
            subscribe(n, r, o) {
              return this._subject.subscribe({
                next: n,
                error: r,
                complete: o,
              });
            }
            static #e = (this.normalizeQueryParams = ir);
            static #t = (this.joinWithSlash = tg);
            static #n = (this.stripTrailingSlash = PI);
            static #r = (this.ɵfac = function (r) {
              return new (r || e)(A(Ni));
            });
            static #o = (this.ɵprov = S({
              token: e,
              factory: () =>
                (function yU() {
                  return new ga(A(Ni));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function VI(e) {
        return e.replace(/\/index.html$/, '');
      }
      const dg = /\s+/,
        WI = [];
      let fg = (() => {
        class e {
          constructor(n, r) {
            (this._ngEl = n),
              (this._renderer = r),
              (this.initialClasses = WI),
              (this.stateMap = new Map());
          }
          set klass(n) {
            this.initialClasses = null != n ? n.trim().split(dg) : WI;
          }
          set ngClass(n) {
            this.rawClass =
              'string' == typeof n ? n.trim().split(dg) : n;
          }
          ngDoCheck() {
            for (const r of this.initialClasses)
              this._updateState(r, !0);
            const n = this.rawClass;
            if (Array.isArray(n) || n instanceof Set)
              for (const r of n) this._updateState(r, !0);
            else if (null != n)
              for (const r of Object.keys(n))
                this._updateState(r, !!n[r]);
            this._applyStateDiff();
          }
          _updateState(n, r) {
            const o = this.stateMap.get(n);
            void 0 !== o
              ? (o.enabled !== r &&
                  ((o.changed = !0), (o.enabled = r)),
                (o.touched = !0))
              : this.stateMap.set(n, {
                  enabled: r,
                  changed: !0,
                  touched: !0,
                });
          }
          _applyStateDiff() {
            for (const n of this.stateMap) {
              const r = n[0],
                o = n[1];
              o.changed
                ? (this._toggleClass(r, o.enabled), (o.changed = !1))
                : o.touched ||
                  (o.enabled && this._toggleClass(r, !1),
                  this.stateMap.delete(r)),
                (o.touched = !1);
            }
          }
          _toggleClass(n, r) {
            (n = n.trim()).length > 0 &&
              n.split(dg).forEach(o => {
                r
                  ? this._renderer.addClass(
                      this._ngEl.nativeElement,
                      o,
                    )
                  : this._renderer.removeClass(
                      this._ngEl.nativeElement,
                      o,
                    );
              });
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(Qt), w(nr));
          });
          static #t = (this.ɵdir = B({
            type: e,
            selectors: [['', 'ngClass', '']],
            inputs: {
              klass: [0, 'class', 'klass'],
              ngClass: 'ngClass',
            },
            standalone: !0,
          }));
        }
        return e;
      })();
      class sB {
        constructor(t, n, r, o) {
          (this.$implicit = t),
            (this.ngForOf = n),
            (this.index = r),
            (this.count = o);
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
      let QI = (() => {
        class e {
          set ngForOf(n) {
            (this._ngForOf = n), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(n) {
            this._trackByFn = n;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          constructor(n, r, o) {
            (this._viewContainer = n),
              (this._template = r),
              (this._differs = o),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForTemplate(n) {
            n && (this._template = n);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              !this._differ &&
                n &&
                (this._differ = this._differs
                  .find(n)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const n = this._differ.diff(this._ngForOf);
              n && this._applyChanges(n);
            }
          }
          _applyChanges(n) {
            const r = this._viewContainer;
            n.forEachOperation((o, i, s) => {
              if (null == o.previousIndex)
                r.createEmbeddedView(
                  this._template,
                  new sB(o.item, this._ngForOf, -1, -1),
                  null === s ? void 0 : s,
                );
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), YI(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o),
                (a.count = i),
                (a.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange(o => {
              YI(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(yn), w(tr), w(Yp));
          });
          static #t = (this.ɵdir = B({
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
      function YI(e, t) {
        e.context.$implicit = t.item;
      }
      let va = (() => {
        class e {
          constructor(n, r) {
            (this._viewContainer = n),
              (this._context = new aB()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = r);
          }
          set ngIf(n) {
            (this._context.$implicit = this._context.ngIf = n),
              this._updateView();
          }
          set ngIfThen(n) {
            KI('ngIfThen', n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            KI('ngIfElse', n),
              (this._elseTemplateRef = n),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef =
                    this._viewContainer.createEmbeddedView(
                      this._thenTemplateRef,
                      this._context,
                    )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef =
                    this._viewContainer.createEmbeddedView(
                      this._elseTemplateRef,
                      this._context,
                    )));
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(yn), w(tr));
          });
          static #t = (this.ɵdir = B({
            type: e,
            selectors: [['', 'ngIf', '']],
            inputs: {
              ngIf: 'ngIf',
              ngIfThen: 'ngIfThen',
              ngIfElse: 'ngIfElse',
            },
            standalone: !0,
          }));
        }
        return e;
      })();
      class aB {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function KI(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${Ze(t)}'.`,
          );
      }
      class hg {
        constructor(t, n) {
          (this._viewContainerRef = t),
            (this._templateRef = n),
            (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(
              this._templateRef,
            );
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(t) {
          t && !this._created
            ? this.create()
            : !t && this._created && this.destroy();
        }
      }
      let ll = (() => {
          class e {
            constructor() {
              (this._defaultViews = []),
                (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(n) {
              (this._ngSwitch = n),
                0 === this._caseCount && this._updateDefaultCases(!0);
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(n) {
              this._defaultViews.push(n);
            }
            _matchCase(n) {
              const r = n === this._ngSwitch;
              return (
                (this._lastCasesMatched ||= r),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                r
              );
            }
            _updateDefaultCases(n) {
              if (
                this._defaultViews.length > 0 &&
                n !== this._defaultUsed
              ) {
                this._defaultUsed = n;
                for (const r of this._defaultViews) r.enforceState(n);
              }
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵdir = B({
              type: e,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        XI = (() => {
          class e {
            constructor(n, r, o) {
              (this.ngSwitch = o),
                o._addCase(),
                (this._view = new hg(n, r));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase),
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(yn), w(tr), w(ll, 9));
            });
            static #t = (this.ɵdir = B({
              type: e,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        eS = (() => {
          class e {
            constructor(n, r, o) {
              (this._ngEl = n),
                (this._differs = r),
                (this._renderer = o),
                (this._ngStyle = null),
                (this._differ = null);
            }
            set ngStyle(n) {
              (this._ngStyle = n),
                !this._differ &&
                  n &&
                  (this._differ = this._differs.find(n).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const n = this._differ.diff(this._ngStyle);
                n && this._applyChanges(n);
              }
            }
            _setStyle(n, r) {
              const [o, i] = n.split('.'),
                s = -1 === o.indexOf('-') ? void 0 : Er.DashCase;
              null != r
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    o,
                    i ? `${r}${i}` : r,
                    s,
                  )
                : this._renderer.removeStyle(
                    this._ngEl.nativeElement,
                    o,
                    s,
                  );
            }
            _applyChanges(n) {
              n.forEachRemovedItem(r => this._setStyle(r.key, null)),
                n.forEachAddedItem(r =>
                  this._setStyle(r.key, r.currentValue),
                ),
                n.forEachChangedItem(r =>
                  this._setStyle(r.key, r.currentValue),
                );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(Qt), w(qu), w(nr));
            });
            static #t = (this.ɵdir = B({
              type: e,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        dl = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = ns({ type: e }));
            static #n = (this.ɵinj = Ao({}));
          }
          return e;
        })();
      const nS = 'browser';
      function rS(e) {
        return e === nS;
      }
      function oS(e) {
        return 'server' === e;
      }
      let OB = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () =>
              rS(_(_r)) ? new FB(_(an), window) : new PB(),
          }));
        }
        return e;
      })();
      class FB {
        constructor(t, n) {
          (this.document = t),
            (this.window = n),
            (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return [this.window.scrollX, this.window.scrollY];
        }
        scrollToPosition(t) {
          this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          const n = (function kB(e, t) {
            const n =
              e.getElementById(t) || e.getElementsByName(t)[0];
            if (n) return n;
            if (
              'function' == typeof e.createTreeWalker &&
              e.body &&
              'function' == typeof e.body.attachShadow
            ) {
              const r = e.createTreeWalker(
                e.body,
                NodeFilter.SHOW_ELEMENT,
              );
              let o = r.currentNode;
              for (; o; ) {
                const i = o.shadowRoot;
                if (i) {
                  const s =
                    i.getElementById(t) ||
                    i.querySelector(`[name="${t}"]`);
                  if (s) return s;
                }
                o = r.nextNode();
              }
            }
            return null;
          })(this.document, t);
          n && (this.scrollToElement(n), n.focus());
        }
        setHistoryScrollRestoration(t) {
          this.window.history.scrollRestoration = t;
        }
        scrollToElement(t) {
          const n = t.getBoundingClientRect(),
            r = n.left + this.window.pageXOffset,
            o = n.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(r - i[0], o - i[1]);
        }
      }
      class PB {
        setOffset(t) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(t) {}
        scrollToAnchor(t) {}
        setHistoryScrollRestoration(t) {}
      }
      class d$ extends pU {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class _g extends d$ {
        static makeCurrent() {
          !(function hU(e) {
            kI ??= e;
          })(new _g());
        }
        onAndCancel(t, n, r) {
          return (
            t.addEventListener(n, r),
            () => {
              t.removeEventListener(n, r);
            }
          );
        }
        dispatchEvent(t, n) {
          t.dispatchEvent(n);
        }
        remove(t) {
          t.remove();
        }
        createElement(t, n) {
          return (n = n || this.getDefaultDocument()).createElement(
            t,
          );
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument(
            'fakeTitle',
          );
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        getGlobalEventTarget(t, n) {
          return 'window' === n
            ? window
            : 'document' === n
            ? t
            : 'body' === n
            ? t.body
            : null;
        }
        getBaseHref(t) {
          const n = (function f$() {
            return (
              (Ca = Ca || document.querySelector('base')),
              Ca ? Ca.getAttribute('href') : null
            );
          })();
          return null == n
            ? null
            : (function h$(e) {
                return new URL(e, document.baseURI).pathname;
              })(n);
        }
        resetBaseElement() {
          Ca = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return (function oB(e, t) {
            t = encodeURIComponent(t);
            for (const n of e.split(';')) {
              const r = n.indexOf('='),
                [o, i] =
                  -1 == r ? [n, ''] : [n.slice(0, r), n.slice(r + 1)];
              if (o.trim() === t) return decodeURIComponent(i);
            }
            return null;
          })(document.cookie, t);
        }
      }
      let Ca = null,
        g$ = (() => {
          class e {
            build() {
              return new XMLHttpRequest();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const gl = new D('');
      let pS = (() => {
        class e {
          constructor(n, r) {
            (this._zone = r),
              (this._eventNameToPlugin = new Map()),
              n.forEach(o => {
                o.manager = this;
              }),
              (this._plugins = n.slice().reverse());
          }
          addEventListener(n, r, o) {
            return this._findPluginFor(r).addEventListener(n, r, o);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(n) {
            let r = this._eventNameToPlugin.get(n);
            if (r) return r;
            if (((r = this._plugins.find(i => i.supports(n))), !r))
              throw new E(5101, !1);
            return this._eventNameToPlugin.set(n, r), r;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(gl), A(ae));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class Cg {
        constructor(t) {
          this._doc = t;
        }
      }
      const Eg = 'ng-app-id';
      let gS = (() => {
        class e {
          constructor(n, r, o, i = {}) {
            (this.doc = n),
              (this.appId = r),
              (this.nonce = o),
              (this.platformId = i),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM =
                this.collectServerRenderedStyles()),
              (this.platformIsServer = oS(i)),
              this.resetHostNodes();
          }
          addStyles(n) {
            for (const r of n)
              1 === this.changeUsageCount(r, 1) &&
                this.onStyleAdded(r);
          }
          removeStyles(n) {
            for (const r of n)
              this.changeUsageCount(r, -1) <= 0 &&
                this.onStyleRemoved(r);
          }
          ngOnDestroy() {
            const n = this.styleNodesInDOM;
            n && (n.forEach(r => r.remove()), n.clear());
            for (const r of this.getAllStyles())
              this.onStyleRemoved(r);
            this.resetHostNodes();
          }
          addHost(n) {
            this.hostNodes.add(n);
            for (const r of this.getAllStyles())
              this.addStyleToHost(n, r);
          }
          removeHost(n) {
            this.hostNodes.delete(n);
          }
          getAllStyles() {
            return this.styleRef.keys();
          }
          onStyleAdded(n) {
            for (const r of this.hostNodes) this.addStyleToHost(r, n);
          }
          onStyleRemoved(n) {
            const r = this.styleRef;
            r.get(n)?.elements?.forEach(o => o.remove()), r.delete(n);
          }
          collectServerRenderedStyles() {
            const n = this.doc.head?.querySelectorAll(
              `style[${Eg}="${this.appId}"]`,
            );
            if (n?.length) {
              const r = new Map();
              return (
                n.forEach(o => {
                  null != o.textContent && r.set(o.textContent, o);
                }),
                r
              );
            }
            return null;
          }
          changeUsageCount(n, r) {
            const o = this.styleRef;
            if (o.has(n)) {
              const i = o.get(n);
              return (i.usage += r), i.usage;
            }
            return o.set(n, { usage: r, elements: [] }), r;
          }
          getStyleElement(n, r) {
            const o = this.styleNodesInDOM,
              i = o?.get(r);
            if (i?.parentNode === n)
              return o.delete(r), i.removeAttribute(Eg), i;
            {
              const s = this.doc.createElement('style');
              return (
                this.nonce && s.setAttribute('nonce', this.nonce),
                (s.textContent = r),
                this.platformIsServer &&
                  s.setAttribute(Eg, this.appId),
                n.appendChild(s),
                s
              );
            }
          }
          addStyleToHost(n, r) {
            const o = this.getStyleElement(n, r),
              i = this.styleRef,
              s = i.get(r)?.elements;
            s ? s.push(o) : i.set(r, { elements: [o], usage: 1 });
          }
          resetHostNodes() {
            const n = this.hostNodes;
            n.clear(), n.add(this.doc.head);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(an), A(ys), A(Uf, 8), A(_r));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const Dg = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        wg = /%COMP%/g,
        _$ = new D('', { providedIn: 'root', factory: () => !0 });
      function vS(e, t) {
        return t.map(n => n.replace(wg, e));
      }
      let yS = (() => {
        class e {
          constructor(n, r, o, i, s, a, c, u = null) {
            (this.eventManager = n),
              (this.sharedStylesHost = r),
              (this.appId = o),
              (this.removeStylesOnCompDestroy = i),
              (this.doc = s),
              (this.platformId = a),
              (this.ngZone = c),
              (this.nonce = u),
              (this.rendererByCompId = new Map()),
              (this.platformIsServer = oS(a)),
              (this.defaultRenderer = new bg(
                n,
                s,
                c,
                this.platformIsServer,
              ));
          }
          createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;
            this.platformIsServer &&
              r.encapsulation === dn.ShadowDom &&
              (r = { ...r, encapsulation: dn.Emulated });
            const o = this.getOrCreateRenderer(n, r);
            return (
              o instanceof CS
                ? o.applyToHost(n)
                : o instanceof Ig && o.applyStyles(),
              o
            );
          }
          getOrCreateRenderer(n, r) {
            const o = this.rendererByCompId;
            let i = o.get(r.id);
            if (!i) {
              const s = this.doc,
                a = this.ngZone,
                c = this.eventManager,
                u = this.sharedStylesHost,
                l = this.removeStylesOnCompDestroy,
                d = this.platformIsServer;
              switch (r.encapsulation) {
                case dn.Emulated:
                  i = new CS(c, u, r, this.appId, l, s, a, d);
                  break;
                case dn.ShadowDom:
                  return new w$(c, u, n, r, s, a, this.nonce, d);
                default:
                  i = new Ig(c, u, r, l, s, a, d);
              }
              o.set(r.id, i);
            }
            return i;
          }
          ngOnDestroy() {
            this.rendererByCompId.clear();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(
              A(pS),
              A(gS),
              A(ys),
              A(_$),
              A(an),
              A(_r),
              A(ae),
              A(Uf),
            );
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class bg {
        constructor(t, n, r, o) {
          (this.eventManager = t),
            (this.doc = n),
            (this.ngZone = r),
            (this.platformIsServer = o),
            (this.data = Object.create(null)),
            (this.throwOnSyntheticProps = !0),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(t, n) {
          return n
            ? this.doc.createElementNS(Dg[n] || n, t)
            : this.doc.createElement(t);
        }
        createComment(t) {
          return this.doc.createComment(t);
        }
        createText(t) {
          return this.doc.createTextNode(t);
        }
        appendChild(t, n) {
          (_S(t) ? t.content : t).appendChild(n);
        }
        insertBefore(t, n, r) {
          t && (_S(t) ? t.content : t).insertBefore(n, r);
        }
        removeChild(t, n) {
          n.remove();
        }
        selectRootElement(t, n) {
          let r =
            'string' == typeof t ? this.doc.querySelector(t) : t;
          if (!r) throw new E(-5104, !1);
          return n || (r.textContent = ''), r;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, n, r, o) {
          if (o) {
            n = o + ':' + n;
            const i = Dg[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = Dg[r];
            o
              ? t.removeAttributeNS(o, n)
              : t.removeAttribute(`${r}:${n}`);
          } else t.removeAttribute(n);
        }
        addClass(t, n) {
          t.classList.add(n);
        }
        removeClass(t, n) {
          t.classList.remove(n);
        }
        setStyle(t, n, r, o) {
          o & (Er.DashCase | Er.Important)
            ? t.style.setProperty(
                n,
                r,
                o & Er.Important ? 'important' : '',
              )
            : (t.style[n] = r);
        }
        removeStyle(t, n, r) {
          r & Er.DashCase
            ? t.style.removeProperty(n)
            : (t.style[n] = '');
        }
        setProperty(t, n, r) {
          null != t && (t[n] = r);
        }
        setValue(t, n) {
          t.nodeValue = n;
        }
        listen(t, n, r) {
          if (
            'string' == typeof t &&
            !(t = Nr().getGlobalEventTarget(this.doc, t))
          )
            throw new Error(
              `Unsupported event target ${t} for event ${n}`,
            );
          return this.eventManager.addEventListener(
            t,
            n,
            this.decoratePreventDefault(r),
          );
        }
        decoratePreventDefault(t) {
          return n => {
            if ('__ngUnwrap__' === n) return t;
            !1 ===
              (this.platformIsServer
                ? this.ngZone.runGuarded(() => t(n))
                : t(n)) && n.preventDefault();
          };
        }
      }
      function _S(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class w$ extends bg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, c),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const u = vS(o.id, o.styles);
          for (const l of u) {
            const d = document.createElement('style');
            a && d.setAttribute('nonce', a),
              (d.textContent = l),
              this.shadowRoot.appendChild(d);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        appendChild(t, n) {
          return super.appendChild(this.nodeOrShadowRoot(t), n);
        }
        insertBefore(t, n, r) {
          return super.insertBefore(this.nodeOrShadowRoot(t), n, r);
        }
        removeChild(t, n) {
          return super.removeChild(null, n);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(t)),
          );
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
      }
      class Ig extends bg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, a),
            (this.sharedStylesHost = n),
            (this.removeStylesOnCompDestroy = o),
            (this.styles = c ? vS(c, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class CS extends Ig {
        constructor(t, n, r, o, i, s, a, c) {
          const u = o + '-' + r.id;
          super(t, n, r, i, s, a, c, u),
            (this.contentAttr = (function C$(e) {
              return '_ngcontent-%COMP%'.replace(wg, e);
            })(u)),
            (this.hostAttr = (function E$(e) {
              return '_nghost-%COMP%'.replace(wg, e);
            })(u));
        }
        applyToHost(t) {
          this.applyStyles(), this.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, n) {
          const r = super.createElement(t, n);
          return super.setAttribute(r, this.contentAttr, ''), r;
        }
      }
      let b$ = (() => {
          class e extends Cg {
            constructor(n) {
              super(n);
            }
            supports(n) {
              return !0;
            }
            addEventListener(n, r, o) {
              return (
                n.addEventListener(r, o, !1),
                () => this.removeEventListener(n, r, o)
              );
            }
            removeEventListener(n, r, o) {
              return n.removeEventListener(r, o);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(an));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        I$ = (() => {
          class e extends Cg {
            constructor(n) {
              super(n), (this.delegate = _(II, { optional: !0 }));
            }
            supports(n) {
              return !!this.delegate && this.delegate.supports(n);
            }
            addEventListener(n, r, o) {
              return this.delegate.addEventListener(n, r, o);
            }
            removeEventListener(n, r, o) {
              return this.delegate.removeEventListener(n, r, o);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(an));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const ES = ['alt', 'control', 'meta', 'shift'],
        S$ = {
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
        M$ = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      function DS(e) {
        return {
          appProviders: [...k$, ...(e?.providers ?? [])],
          platformProviders: O$,
        };
      }
      const O$ = [
          { provide: _r, useValue: nS },
          {
            provide: x_,
            useValue: function N$() {
              _g.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: an,
            useFactory: function x$() {
              return (
                (function Kx(e) {
                  jf = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        k$ = [
          { provide: Jd, useValue: 'root' },
          {
            provide: vn,
            useFactory: function R$() {
              return new vn();
            },
            deps: [],
          },
          {
            provide: gl,
            useClass: b$,
            multi: !0,
            deps: [an, ae, _r],
          },
          {
            provide: gl,
            useClass: (() => {
              class e extends Cg {
                constructor(n) {
                  super(n);
                }
                supports(n) {
                  return null != e.parseEventName(n);
                }
                addEventListener(n, r, o) {
                  const i = e.parseEventName(r),
                    s = e.eventCallback(
                      i.fullKey,
                      o,
                      this.manager.getZone(),
                    );
                  return this.manager
                    .getZone()
                    .runOutsideAngular(() =>
                      Nr().onAndCancel(n, i.domEventName, s),
                    );
                }
                static parseEventName(n) {
                  const r = n.toLowerCase().split('.'),
                    o = r.shift();
                  if (
                    0 === r.length ||
                    ('keydown' !== o && 'keyup' !== o)
                  )
                    return null;
                  const i = e._normalizeKey(r.pop());
                  let s = '',
                    a = r.indexOf('code');
                  if (
                    (a > -1 && (r.splice(a, 1), (s = 'code.')),
                    ES.forEach(u => {
                      const l = r.indexOf(u);
                      l > -1 && (r.splice(l, 1), (s += u + '.'));
                    }),
                    (s += i),
                    0 != r.length || 0 === i.length)
                  )
                    return null;
                  const c = {};
                  return (c.domEventName = o), (c.fullKey = s), c;
                }
                static matchEventFullKeyCode(n, r) {
                  let o = S$[n.key] || n.key,
                    i = '';
                  return (
                    r.indexOf('code.') > -1 &&
                      ((o = n.code), (i = 'code.')),
                    !(null == o || !o) &&
                      ((o = o.toLowerCase()),
                      ' ' === o
                        ? (o = 'space')
                        : '.' === o && (o = 'dot'),
                      ES.forEach(s => {
                        s !== o && (0, M$[s])(n) && (i += s + '.');
                      }),
                      (i += o),
                      i === r)
                  );
                }
                static eventCallback(n, r, o) {
                  return i => {
                    e.matchEventFullKeyCode(i, n) &&
                      o.runGuarded(() => r(i));
                  };
                }
                static _normalizeKey(n) {
                  return 'esc' === n ? 'escape' : n;
                }
                static #e = (this.ɵfac = function (r) {
                  return new (r || e)(A(an));
                });
                static #t = (this.ɵprov = S({
                  token: e,
                  factory: e.ɵfac,
                }));
              }
              return e;
            })(),
            multi: !0,
            deps: [an],
          },
          { provide: gl, useClass: I$, multi: !0 },
          yS,
          gS,
          pS,
          { provide: Bh, useExisting: yS },
          { provide: class LB {}, useClass: g$, deps: [] },
          [],
        ];
      let P$ = (() => {
        class e {
          constructor(n) {
            this._doc = n;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(n) {
            this._doc.title = n || '';
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(an));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function Rr(e) {
        return this instanceof Rr ? ((this.v = e), this) : new Rr(e);
      }
      function TS(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = (function Ag(e) {
              var t = 'function' == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
              if (n) return n.call(e);
              if (e && 'number' == typeof e.length)
                return {
                  next: function () {
                    return (
                      e && r >= e.length && (e = void 0),
                      { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? 'Object is not iterable.'
                  : 'Symbol.iterator is not defined.',
              );
            })(e)),
            (n = {}),
            r('next'),
            r('throw'),
            r('return'),
            (n[Symbol.asyncIterator] = function () {
              return this;
            }),
            n);
        function r(i) {
          n[i] =
            e[i] &&
            function (s) {
              return new Promise(function (a, c) {
                !(function o(i, s, a, c) {
                  Promise.resolve(c).then(function (u) {
                    i({ value: u, done: a });
                  }, s);
                })(a, c, (s = e[i](s)).done, s.value);
              });
            };
        }
      }
      'function' == typeof SuppressedError && SuppressedError;
      const AS = e =>
        e && 'number' == typeof e.length && 'function' != typeof e;
      function NS(e) {
        return Ie(e?.then);
      }
      function RS(e) {
        return Ie(e[Ed]);
      }
      function xS(e) {
        return Symbol.asyncIterator && Ie(e?.[Symbol.asyncIterator]);
      }
      function OS(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e
              ? 'an invalid object'
              : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const FS = (function cH() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function kS(e) {
        return Ie(e?.[FS]);
      }
      function PS(e) {
        return (function MS(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError(
              'Symbol.asyncIterator is not defined.',
            );
          var o,
            r = n.apply(e, t || []),
            i = [];
          return (
            (o = {}),
            a('next'),
            a('throw'),
            a('return', function s(h) {
              return function (p) {
                return Promise.resolve(p).then(h, d);
              };
            }),
            (o[Symbol.asyncIterator] = function () {
              return this;
            }),
            o
          );
          function a(h, p) {
            r[h] &&
              ((o[h] = function (g) {
                return new Promise(function (m, C) {
                  i.push([h, g, m, C]) > 1 || c(h, g);
                });
              }),
              p && (o[h] = p(o[h])));
          }
          function c(h, p) {
            try {
              !(function u(h) {
                h.value instanceof Rr
                  ? Promise.resolve(h.value.v).then(l, d)
                  : f(i[0][2], h);
              })(r[h](p));
            } catch (g) {
              f(i[0][3], g);
            }
          }
          function l(h) {
            c('next', h);
          }
          function d(h) {
            c('throw', h);
          }
          function f(h, p) {
            h(p), i.shift(), i.length && c(i[0][0], i[0][1]);
          }
        })(this, arguments, function* () {
          const n = e.getReader();
          try {
            for (;;) {
              const { value: r, done: o } = yield Rr(n.read());
              if (o) return yield Rr(void 0);
              yield yield Rr(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function LS(e) {
        return Ie(e?.getReader);
      }
      function bn(e) {
        if (e instanceof ke) return e;
        if (null != e) {
          if (RS(e))
            return (function uH(e) {
              return new ke(t => {
                const n = e[Ed]();
                if (Ie(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (AS(e))
            return (function lH(e) {
              return new ke(t => {
                for (let n = 0; n < e.length && !t.closed; n++)
                  t.next(e[n]);
                t.complete();
              });
            })(e);
          if (NS(e))
            return (function dH(e) {
              return new ke(t => {
                e.then(
                  n => {
                    t.closed || (t.next(n), t.complete());
                  },
                  n => t.error(n),
                ).then(null, cv);
              });
            })(e);
          if (xS(e)) return VS(e);
          if (kS(e))
            return (function fH(e) {
              return new ke(t => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (LS(e))
            return (function hH(e) {
              return VS(PS(e));
            })(e);
        }
        throw OS(e);
      }
      function VS(e) {
        return new ke(t => {
          (function pH(e, t) {
            var n, r, o, i;
            return (function IS(e, t, n, r) {
              return new (n || (n = Promise))(function (i, s) {
                function a(l) {
                  try {
                    u(r.next(l));
                  } catch (d) {
                    s(d);
                  }
                }
                function c(l) {
                  try {
                    u(r.throw(l));
                  } catch (d) {
                    s(d);
                  }
                }
                function u(l) {
                  l.done
                    ? i(l.value)
                    : (function o(i) {
                        return i instanceof n
                          ? i
                          : new n(function (s) {
                              s(i);
                            });
                      })(l.value).then(a, c);
                }
                u((r = r.apply(e, t || [])).next());
              });
            })(this, void 0, void 0, function* () {
              try {
                for (n = TS(e); !(r = yield n.next()).done; )
                  if ((t.next(r.value), t.closed)) return;
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  r && !r.done && (i = n.return) && (yield i.call(n));
                } finally {
                  if (o) throw o.error;
                }
              }
              t.complete();
            });
          })(e, t).catch(n => t.error(n));
        });
      }
      function cr(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function Ng(e, t = 0) {
        return Be((n, r) => {
          n.subscribe(
            Oe(
              r,
              o => cr(r, e, () => r.next(o), t),
              () => cr(r, e, () => r.complete(), t),
              o => cr(r, e, () => r.error(o), t),
            ),
          );
        });
      }
      function jS(e, t = 0) {
        return Be((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function US(e, t) {
        if (!e) throw new Error('Iterable cannot be null');
        return new ke(n => {
          cr(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            cr(
              n,
              t,
              () => {
                r.next().then(o => {
                  o.done ? n.complete() : n.next(o.value);
                });
              },
              0,
              !0,
            );
          });
        });
      }
      function dt(e, t) {
        return t
          ? (function CH(e, t) {
              if (null != e) {
                if (RS(e))
                  return (function gH(e, t) {
                    return bn(e).pipe(jS(t), Ng(t));
                  })(e, t);
                if (AS(e))
                  return (function vH(e, t) {
                    return new ke(n => {
                      let r = 0;
                      return t.schedule(function () {
                        r === e.length
                          ? n.complete()
                          : (n.next(e[r++]),
                            n.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (NS(e))
                  return (function mH(e, t) {
                    return bn(e).pipe(jS(t), Ng(t));
                  })(e, t);
                if (xS(e)) return US(e, t);
                if (kS(e))
                  return (function yH(e, t) {
                    return new ke(n => {
                      let r;
                      return (
                        cr(n, t, () => {
                          (r = e[FS]()),
                            cr(
                              n,
                              t,
                              () => {
                                let o, i;
                                try {
                                  ({ value: o, done: i } = r.next());
                                } catch (s) {
                                  return void n.error(s);
                                }
                                i ? n.complete() : n.next(o);
                              },
                              0,
                              !0,
                            );
                        }),
                        () => Ie(r?.return) && r.return()
                      );
                    });
                  })(e, t);
                if (LS(e))
                  return (function _H(e, t) {
                    return US(PS(e), t);
                  })(e, t);
              }
              throw OS(e);
            })(e, t)
          : bn(e);
      }
      function Rg(e) {
        return e[e.length - 1];
      }
      function xg(e) {
        return Ie(Rg(e)) ? e.pop() : void 0;
      }
      function vl(e) {
        return (function EH(e) {
          return e && Ie(e.schedule);
        })(Rg(e))
          ? e.pop()
          : void 0;
      }
      function G(...e) {
        return dt(e, vl(e));
      }
      const yl = pd(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: DH } = Array,
        { getPrototypeOf: wH, prototype: bH, keys: IH } = Object;
      function BS(e) {
        if (1 === e.length) {
          const t = e[0];
          if (DH(t)) return { args: t, keys: null };
          if (
            (function SH(e) {
              return e && 'object' == typeof e && wH(e) === bH;
            })(t)
          ) {
            const n = IH(t);
            return { args: n.map(r => t[r]), keys: n };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: MH } = Array;
      function $S(e) {
        return oe(t =>
          (function TH(e, t) {
            return MH(t) ? e(...t) : e(t);
          })(e, t),
        );
      }
      function HS(e, t) {
        return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
      }
      function Og(...e) {
        const t = vl(e),
          n = xg(e),
          { args: r, keys: o } = BS(e);
        if (0 === r.length) return dt([], t);
        const i = new ke(
          (function AH(e, t, n = Gn) {
            return r => {
              zS(
                t,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let c = 0; c < o; c++)
                    zS(
                      t,
                      () => {
                        const u = dt(e[c], t);
                        let l = !1;
                        u.subscribe(
                          Oe(
                            r,
                            d => {
                              (i[c] = d),
                                l || ((l = !0), a--),
                                a || r.next(n(i.slice()));
                            },
                            () => {
                              --s || r.complete();
                            },
                          ),
                        );
                      },
                      r,
                    );
                },
                r,
              );
            };
          })(r, t, o ? s => HS(o, s) : Gn),
        );
        return n ? i.pipe($S(n)) : i;
      }
      function zS(e, t, n) {
        e ? cr(n, e, t) : t();
      }
      function St(e, t, n = 1 / 0) {
        return Ie(t)
          ? St((r, o) => oe((i, s) => t(r, i, o, s))(bn(e(r, o))), n)
          : ('number' == typeof t && (n = t),
            Be((r, o) =>
              (function NH(e, t, n, r, o, i, s, a) {
                const c = [];
                let u = 0,
                  l = 0,
                  d = !1;
                const f = () => {
                    d && !c.length && !u && t.complete();
                  },
                  h = g => (u < r ? p(g) : c.push(g)),
                  p = g => {
                    i && t.next(g), u++;
                    let m = !1;
                    bn(n(g, l++)).subscribe(
                      Oe(
                        t,
                        C => {
                          o?.(C), i ? h(C) : t.next(C);
                        },
                        () => {
                          m = !0;
                        },
                        void 0,
                        () => {
                          if (m)
                            try {
                              for (u--; c.length && u < r; ) {
                                const C = c.shift();
                                s ? cr(t, s, () => p(C)) : p(C);
                              }
                              f();
                            } catch (C) {
                              t.error(C);
                            }
                        },
                      ),
                    );
                  };
                return (
                  e.subscribe(
                    Oe(t, h, () => {
                      (d = !0), f();
                    }),
                  ),
                  () => {
                    a?.();
                  }
                );
              })(r, o, e, n),
            ));
      }
      function _l(...e) {
        return (function RH() {
          return (function Fg(e = 1 / 0) {
            return St(Gn, e);
          })(1);
        })()(dt(e, vl(e)));
      }
      function GS(e) {
        return new ke(t => {
          bn(e()).subscribe(t);
        });
      }
      function Cl(e, t) {
        const n = Ie(e) ? e : () => e,
          r = o => o.error(n());
        return new ke(t ? o => t.schedule(r, 0, o) : r);
      }
      const Un = new ke(e => e.complete());
      function kg() {
        return Be((e, t) => {
          let n = null;
          e._refCount++;
          const r = Oe(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount)
              return void (n = null);
            const o = e._connection,
              i = n;
            (n = null),
              o && (!i || o === i) && o.unsubscribe(),
              t.unsubscribe();
          });
          e.subscribe(r), r.closed || (n = e.connect());
        });
      }
      class qS extends ke {
        constructor(t, n) {
          super(),
            (this.source = t),
            (this.subjectFactory = n),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            fv(t) && (this.lift = t.lift);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (!t || t.isStopped) &&
              (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        _teardown() {
          this._refCount = 0;
          const { _connection: t } = this;
          (this._subject = this._connection = null), t?.unsubscribe();
        }
        connect() {
          let t = this._connection;
          if (!t) {
            t = this._connection = new at();
            const n = this.getSubject();
            t.add(
              this.source.subscribe(
                Oe(
                  n,
                  void 0,
                  () => {
                    this._teardown(), n.complete();
                  },
                  r => {
                    this._teardown(), n.error(r);
                  },
                  () => this._teardown(),
                ),
              ),
            ),
              t.closed && ((this._connection = null), (t = at.EMPTY));
          }
          return t;
        }
        refCount() {
          return kg()(this);
        }
      }
      function ur(e, t) {
        return Be((n, r) => {
          let o = null,
            i = 0,
            s = !1;
          const a = () => s && !o && r.complete();
          n.subscribe(
            Oe(
              r,
              c => {
                o?.unsubscribe();
                let u = 0;
                const l = i++;
                bn(e(c, l)).subscribe(
                  (o = Oe(
                    r,
                    d => r.next(t ? t(c, d, l, u++) : d),
                    () => {
                      (o = null), a();
                    },
                  )),
                );
              },
              () => {
                (s = !0), a();
              },
            ),
          );
        });
      }
      function po(e) {
        return e <= 0
          ? () => Un
          : Be((t, n) => {
              let r = 0;
              t.subscribe(
                Oe(n, o => {
                  ++r <= e && (n.next(o), e <= r && n.complete());
                }),
              );
            });
      }
      function WS(...e) {
        const t = vl(e);
        return Be((n, r) => {
          (t ? _l(e, n, t) : _l(e, n)).subscribe(r);
        });
      }
      function xr(e, t) {
        return Be((n, r) => {
          let o = 0;
          n.subscribe(Oe(r, i => e.call(t, i, o++) && r.next(i)));
        });
      }
      function El(e) {
        return Be((t, n) => {
          let r = !1;
          t.subscribe(
            Oe(
              n,
              o => {
                (r = !0), n.next(o);
              },
              () => {
                r || n.next(e), n.complete();
              },
            ),
          );
        });
      }
      function ZS(e = OH) {
        return Be((t, n) => {
          let r = !1;
          t.subscribe(
            Oe(
              n,
              o => {
                (r = !0), n.next(o);
              },
              () => (r ? n.complete() : n.error(e())),
            ),
          );
        });
      }
      function OH() {
        return new yl();
      }
      function go(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? xr((o, i) => e(o, i, r)) : Gn,
            po(1),
            n ? El(t) : ZS(() => new yl()),
          );
      }
      function Dl(e, t) {
        return Ie(t) ? St(e, t, 1) : St(e, 1);
      }
      function Mt(e, t, n) {
        const r =
          Ie(e) || t || n ? { next: e, error: t, complete: n } : e;
        return r
          ? Be((o, i) => {
              var s;
              null === (s = r.subscribe) || void 0 === s || s.call(r);
              let a = !0;
              o.subscribe(
                Oe(
                  i,
                  c => {
                    var u;
                    null === (u = r.next) ||
                      void 0 === u ||
                      u.call(r, c),
                      i.next(c);
                  },
                  () => {
                    var c;
                    (a = !1),
                      null === (c = r.complete) ||
                        void 0 === c ||
                        c.call(r),
                      i.complete();
                  },
                  c => {
                    var u;
                    (a = !1),
                      null === (u = r.error) ||
                        void 0 === u ||
                        u.call(r, c),
                      i.error(c);
                  },
                  () => {
                    var c, u;
                    a &&
                      (null === (c = r.unsubscribe) ||
                        void 0 === c ||
                        c.call(r)),
                      null === (u = r.finalize) ||
                        void 0 === u ||
                        u.call(r);
                  },
                ),
              );
            })
          : Gn;
      }
      function Oi(e) {
        return Be((t, n) => {
          let i,
            r = null,
            o = !1;
          (r = t.subscribe(
            Oe(n, void 0, void 0, s => {
              (i = bn(e(s, Oi(e)(t)))),
                r
                  ? (r.unsubscribe(), (r = null), i.subscribe(n))
                  : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(n));
        });
      }
      function QS(e, t) {
        return Be(
          (function FH(e, t, n, r, o) {
            return (i, s) => {
              let a = n,
                c = t,
                u = 0;
              i.subscribe(
                Oe(
                  s,
                  l => {
                    const d = u++;
                    (c = a ? e(c, l, d) : ((a = !0), l)),
                      r && s.next(c);
                  },
                  o &&
                    (() => {
                      a && s.next(c), s.complete();
                    }),
                ),
              );
            };
          })(e, t, arguments.length >= 2, !0),
        );
      }
      function Pg(e) {
        return e <= 0
          ? () => Un
          : Be((t, n) => {
              let r = [];
              t.subscribe(
                Oe(
                  n,
                  o => {
                    r.push(o), e < r.length && r.shift();
                  },
                  () => {
                    for (const o of r) n.next(o);
                    n.complete();
                  },
                  void 0,
                  () => {
                    r = null;
                  },
                ),
              );
            });
      }
      function Lg(e) {
        return Be((t, n) => {
          try {
            t.subscribe(n);
          } finally {
            n.add(e);
          }
        });
      }
      function YS(e) {
        return Be((t, n) => {
          bn(e).subscribe(Oe(n, () => n.complete(), tc)),
            !n.closed && t.subscribe(n);
        });
      }
      const q = 'primary',
        Ea = Symbol('RouteTitle');
      class LH {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return Object.prototype.hasOwnProperty.call(this.params, t);
        }
        get(t) {
          if (this.has(t)) {
            const n = this.params[t];
            return Array.isArray(n) ? n[0] : n;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const n = this.params[t];
            return Array.isArray(n) ? n : [n];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Fi(e) {
        return new LH(e);
      }
      function VH(e, t, n) {
        const r = n.path.split('/');
        if (
          r.length > e.length ||
          ('full' === n.pathMatch &&
            (t.hasChildren() || r.length < e.length))
        )
          return null;
        const o = {};
        for (let i = 0; i < r.length; i++) {
          const s = r[i],
            a = e[i];
          if (':' === s[0]) o[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: o };
      }
      function Bn(e, t) {
        const n = e ? Vg(e) : void 0,
          r = t ? Vg(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let o;
        for (let i = 0; i < n.length; i++)
          if (((o = n[i]), !KS(e[o], t[o]))) return !1;
        return !0;
      }
      function Vg(e) {
        return [
          ...Object.keys(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      }
      function KS(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((o, i) => r[i] === o);
        }
        return e === t;
      }
      function XS(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Or(e) {
        return (function U$(e) {
          return (
            !!e &&
            (e instanceof ke || (Ie(e.lift) && Ie(e.subscribe)))
          );
        })(e)
          ? e
          : ua(e)
          ? dt(Promise.resolve(e))
          : G(e);
      }
      const UH = {
          exact: function tM(e, t, n) {
            if (
              !vo(e.segments, t.segments) ||
              !wl(e.segments, t.segments, n) ||
              e.numberOfChildren !== t.numberOfChildren
            )
              return !1;
            for (const r in t.children)
              if (
                !e.children[r] ||
                !tM(e.children[r], t.children[r], n)
              )
                return !1;
            return !0;
          },
          subset: nM,
        },
        JS = {
          exact: function BH(e, t) {
            return Bn(e, t);
          },
          subset: function $H(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every(n => KS(e[n], t[n]))
            );
          },
          ignored: () => !0,
        };
      function eM(e, t, n) {
        return (
          UH[n.paths](e.root, t.root, n.matrixParams) &&
          JS[n.queryParams](e.queryParams, t.queryParams) &&
          !('exact' === n.fragment && e.fragment !== t.fragment)
        );
      }
      function nM(e, t, n) {
        return rM(e, t, t.segments, n);
      }
      function rM(e, t, n, r) {
        if (e.segments.length > n.length) {
          const o = e.segments.slice(0, n.length);
          return !(!vo(o, n) || t.hasChildren() || !wl(o, n, r));
        }
        if (e.segments.length === n.length) {
          if (!vo(e.segments, n) || !wl(e.segments, n, r)) return !1;
          for (const o in t.children)
            if (
              !e.children[o] ||
              !nM(e.children[o], t.children[o], r)
            )
              return !1;
          return !0;
        }
        {
          const o = n.slice(0, e.segments.length),
            i = n.slice(e.segments.length);
          return (
            !!(
              vo(e.segments, o) &&
              wl(e.segments, o, r) &&
              e.children[q]
            ) && rM(e.children[q], t, i, r)
          );
        }
      }
      function wl(e, t, n) {
        return t.every((r, o) =>
          JS[n](e[o].parameters, r.parameters),
        );
      }
      class mo {
        constructor(t = new ge([], {}), n = {}, r = null) {
          (this.root = t),
            (this.queryParams = n),
            (this.fragment = r);
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= Fi(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return GH.serialize(this);
        }
      }
      class ge {
        constructor(t, n) {
          (this.segments = t),
            (this.children = n),
            (this.parent = null),
            Object.values(n).forEach(r => (r.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Il(this);
        }
      }
      class Da {
        constructor(t, n) {
          (this.path = t), (this.parameters = n);
        }
        get parameterMap() {
          return (
            (this._parameterMap ??= Fi(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return sM(this);
        }
      }
      function vo(e, t) {
        return (
          e.length === t.length &&
          e.every((n, r) => n.path === t[r].path)
        );
      }
      let ki = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => new bl(),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class bl {
        parse(t) {
          const n = new n3(t);
          return new mo(
            n.parseRootSegment(),
            n.parseQueryParams(),
            n.parseFragment(),
          );
        }
        serialize(t) {
          const n = `/${wa(t.root, !0)}`,
            r = (function ZH(e) {
              const t = Object.entries(e)
                .map(([n, r]) =>
                  Array.isArray(r)
                    ? r.map(o => `${Sl(n)}=${Sl(o)}`).join('&')
                    : `${Sl(n)}=${Sl(r)}`,
                )
                .filter(n => n);
              return t.length ? `?${t.join('&')}` : '';
            })(t.queryParams);
          return `${n}${r}${
            'string' == typeof t.fragment
              ? `#${(function qH(e) {
                  return encodeURI(e);
                })(t.fragment)}`
              : ''
          }`;
        }
      }
      const GH = new bl();
      function Il(e) {
        return e.segments.map(t => sM(t)).join('/');
      }
      function wa(e, t) {
        if (!e.hasChildren()) return Il(e);
        if (t) {
          const n = e.children[q] ? wa(e.children[q], !1) : '',
            r = [];
          return (
            Object.entries(e.children).forEach(([o, i]) => {
              o !== q && r.push(`${o}:${wa(i, !1)}`);
            }),
            r.length > 0 ? `${n}(${r.join('//')})` : n
          );
        }
        {
          const n = (function zH(e, t) {
            let n = [];
            return (
              Object.entries(e.children).forEach(([r, o]) => {
                r === q && (n = n.concat(t(o, r)));
              }),
              Object.entries(e.children).forEach(([r, o]) => {
                r !== q && (n = n.concat(t(o, r)));
              }),
              n
            );
          })(e, (r, o) =>
            o === q ? [wa(e.children[q], !1)] : [`${o}:${wa(r, !1)}`],
          );
          return 1 === Object.keys(e.children).length &&
            null != e.children[q]
            ? `${Il(e)}/${n[0]}`
            : `${Il(e)}/(${n.join('//')})`;
        }
      }
      function oM(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Sl(e) {
        return oM(e).replace(/%3B/gi, ';');
      }
      function jg(e) {
        return oM(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Ml(e) {
        return decodeURIComponent(e);
      }
      function iM(e) {
        return Ml(e.replace(/\+/g, '%20'));
      }
      function sM(e) {
        return `${jg(e.path)}${(function WH(e) {
          return Object.entries(e)
            .map(([t, n]) => `;${jg(t)}=${jg(n)}`)
            .join('');
        })(e.parameters)}`;
      }
      const QH = /^[^\/()?;#]+/;
      function Ug(e) {
        const t = e.match(QH);
        return t ? t[0] : '';
      }
      const YH = /^[^\/()?;=#]+/,
        XH = /^[^=?&#]+/,
        e3 = /^[^&#]+/;
      class n3 {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining ||
            this.peekStartsWith('?') ||
            this.peekStartsWith('#')
              ? new ge([], {})
              : new ge([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#')
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') &&
            !this.peekStartsWith('//') &&
            !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let n = {};
          this.peekStartsWith('/(') &&
            (this.capture('/'), (n = this.parseParens(!0)));
          let r = {};
          return (
            this.peekStartsWith('(') && (r = this.parseParens(!1)),
            (t.length > 0 || Object.keys(n).length > 0) &&
              (r[q] = new ge(t, n)),
            r
          );
        }
        parseSegment() {
          const t = Ug(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new E(4009, !1);
          return (
            this.capture(t), new Da(Ml(t), this.parseMatrixParams())
          );
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const n = (function KH(e) {
            const t = e.match(YH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const o = Ug(this.remaining);
            o && ((r = o), this.capture(r));
          }
          t[Ml(n)] = Ml(r);
        }
        parseQueryParam(t) {
          const n = (function JH(e) {
            const t = e.match(XH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const s = (function t3(e) {
              const t = e.match(e3);
              return t ? t[0] : '';
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = iM(n),
            i = iM(r);
          if (t.hasOwnProperty(o)) {
            let s = t[o];
            Array.isArray(s) || ((s = [s]), (t[o] = s)), s.push(i);
          } else t[o] = i;
        }
        parseParens(t) {
          const n = {};
          for (
            this.capture('(');
            !this.consumeOptional(')') && this.remaining.length > 0;

          ) {
            const r = Ug(this.remaining),
              o = this.remaining[r.length];
            if ('/' !== o && ')' !== o && ';' !== o)
              throw new E(4010, !1);
            let i;
            r.indexOf(':') > -1
              ? ((i = r.slice(0, r.indexOf(':'))),
                this.capture(i),
                this.capture(':'))
              : t && (i = q);
            const s = this.parseChildren();
            (n[i] =
              1 === Object.keys(s).length ? s[q] : new ge([], s)),
              this.consumeOptional('//');
          }
          return n;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return (
            !!this.peekStartsWith(t) &&
            ((this.remaining = this.remaining.substring(t.length)),
            !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new E(4011, !1);
        }
      }
      function aM(e) {
        return e.segments.length > 0 ? new ge([], { [q]: e }) : e;
      }
      function cM(e) {
        const t = {};
        for (const [r, o] of Object.entries(e.children)) {
          const i = cM(o);
          if (r === q && 0 === i.segments.length && i.hasChildren())
            for (const [s, a] of Object.entries(i.children)) t[s] = a;
          else
            (i.segments.length > 0 || i.hasChildren()) && (t[r] = i);
        }
        return (function r3(e) {
          if (1 === e.numberOfChildren && e.children[q]) {
            const t = e.children[q];
            return new ge(e.segments.concat(t.segments), t.children);
          }
          return e;
        })(new ge(e.segments, t));
      }
      function yo(e) {
        return e instanceof mo;
      }
      function uM(e) {
        let t;
        const o = aM(
          (function n(i) {
            const s = {};
            for (const c of i.children) {
              const u = n(c);
              s[c.outlet] = u;
            }
            const a = new ge(i.url, s);
            return i === e && (t = a), a;
          })(e.root),
        );
        return t ?? o;
      }
      function lM(e, t, n, r) {
        let o = e;
        for (; o.parent; ) o = o.parent;
        if (0 === t.length) return Bg(o, o, o, n, r);
        const i = (function s3(e) {
          if (
            'string' == typeof e[0] &&
            1 === e.length &&
            '/' === e[0]
          )
            return new fM(!0, 0, e);
          let t = 0,
            n = !1;
          const r = e.reduce((o, i, s) => {
            if ('object' == typeof i && null != i) {
              if (i.outlets) {
                const a = {};
                return (
                  Object.entries(i.outlets).forEach(([c, u]) => {
                    a[c] = 'string' == typeof u ? u.split('/') : u;
                  }),
                  [...o, { outlets: a }]
                );
              }
              if (i.segmentPath) return [...o, i.segmentPath];
            }
            return 'string' != typeof i
              ? [...o, i]
              : 0 === s
              ? (i.split('/').forEach((a, c) => {
                  (0 == c && '.' === a) ||
                    (0 == c && '' === a
                      ? (n = !0)
                      : '..' === a
                      ? t++
                      : '' != a && o.push(a));
                }),
                o)
              : [...o, i];
          }, []);
          return new fM(n, t, r);
        })(t);
        if (i.toRoot()) return Bg(o, o, new ge([], {}), n, r);
        const s = (function a3(e, t, n) {
            if (e.isAbsolute) return new Al(t, !0, 0);
            if (!n) return new Al(t, !1, NaN);
            if (null === n.parent) return new Al(n, !0, 0);
            const r = Tl(e.commands[0]) ? 0 : 1;
            return (function c3(e, t, n) {
              let r = e,
                o = t,
                i = n;
              for (; i > o; ) {
                if (((i -= o), (r = r.parent), !r))
                  throw new E(4005, !1);
                o = r.segments.length;
              }
              return new Al(r, !1, o - i);
            })(n, n.segments.length - 1 + r, e.numberOfDoubleDots);
          })(i, o, e),
          a = s.processChildren
            ? Ia(s.segmentGroup, s.index, i.commands)
            : hM(s.segmentGroup, s.index, i.commands);
        return Bg(o, s.segmentGroup, a, n, r);
      }
      function Tl(e) {
        return (
          'object' == typeof e &&
          null != e &&
          !e.outlets &&
          !e.segmentPath
        );
      }
      function ba(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function Bg(e, t, n, r, o) {
        let s,
          i = {};
        r &&
          Object.entries(r).forEach(([c, u]) => {
            i[c] = Array.isArray(u) ? u.map(l => `${l}`) : `${u}`;
          }),
          (s = e === t ? n : dM(e, t, n));
        const a = aM(cM(s));
        return new mo(a, i, o);
      }
      function dM(e, t, n) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([o, i]) => {
            r[o] = i === t ? n : dM(i, t, n);
          }),
          new ge(e.segments, r)
        );
      }
      class fM {
        constructor(t, n, r) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = r),
            t && r.length > 0 && Tl(r[0]))
          )
            throw new E(4003, !1);
          const o = r.find(ba);
          if (o && o !== XS(r)) throw new E(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class Al {
        constructor(t, n, r) {
          (this.segmentGroup = t),
            (this.processChildren = n),
            (this.index = r);
        }
      }
      function hM(e, t, n) {
        if (
          ((e ??= new ge([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return Ia(e, t, n);
        const r = (function l3(e, t, n) {
            let r = 0,
              o = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= n.length) return i;
              const s = e.segments[o],
                a = n[r];
              if (ba(a)) break;
              const c = `${a}`,
                u = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === c) break;
              if (
                c &&
                u &&
                'object' == typeof u &&
                void 0 === u.outlets
              ) {
                if (!gM(c, u, s)) return i;
                r += 2;
              } else {
                if (!gM(c, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(e, t, n),
          o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const i = new ge(e.segments.slice(0, r.pathIndex), {});
          return (
            (i.children[q] = new ge(
              e.segments.slice(r.pathIndex),
              e.children,
            )),
            Ia(i, 0, o)
          );
        }
        return r.match && 0 === o.length
          ? new ge(e.segments, {})
          : r.match && !e.hasChildren()
          ? $g(e, t, n)
          : r.match
          ? Ia(e, 0, o)
          : $g(e, t, n);
      }
      function Ia(e, t, n) {
        if (0 === n.length) return new ge(e.segments, {});
        {
          const r = (function u3(e) {
              return ba(e[0]) ? e[0].outlets : { [q]: e };
            })(n),
            o = {};
          if (
            Object.keys(r).some(i => i !== q) &&
            e.children[q] &&
            1 === e.numberOfChildren &&
            0 === e.children[q].segments.length
          ) {
            const i = Ia(e.children[q], t, n);
            return new ge(e.segments, i.children);
          }
          return (
            Object.entries(r).forEach(([i, s]) => {
              'string' == typeof s && (s = [s]),
                null !== s && (o[i] = hM(e.children[i], t, s));
            }),
            Object.entries(e.children).forEach(([i, s]) => {
              void 0 === r[i] && (o[i] = s);
            }),
            new ge(e.segments, o)
          );
        }
      }
      function $g(e, t, n) {
        const r = e.segments.slice(0, t);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (ba(i)) {
            const c = d3(i.outlets);
            return new ge(r, c);
          }
          if (0 === o && Tl(n[0])) {
            r.push(new Da(e.segments[t].path, pM(n[0]))), o++;
            continue;
          }
          const s = ba(i) ? i.outlets[q] : `${i}`,
            a = o < n.length - 1 ? n[o + 1] : null;
          s && a && Tl(a)
            ? (r.push(new Da(s, pM(a))), (o += 2))
            : (r.push(new Da(s, {})), o++);
        }
        return new ge(r, {});
      }
      function d3(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => {
            'string' == typeof r && (r = [r]),
              null !== r && (t[n] = $g(new ge([], {}), 0, r));
          }),
          t
        );
      }
      function pM(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => (t[n] = `${r}`)), t
        );
      }
      function gM(e, t, n) {
        return e == n.path && Bn(t, n.parameters);
      }
      const Sa = 'imperative';
      var ne = (function (e) {
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
      })(ne || {});
      class $n {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class Nl extends $n {
        constructor(t, n, r = 'imperative', o = null) {
          super(t, n),
            (this.type = ne.NavigationStart),
            (this.navigationTrigger = r),
            (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Fr extends $n {
        constructor(t, n, r) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.type = ne.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var en = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] =
              'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(en || {}),
        Rl = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] =
              'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
              'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(Rl || {});
      class _o extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = ne.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Pi extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = ne.NavigationSkipped);
        }
      }
      class Hg extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.error = r),
            (this.target = o),
            (this.type = ne.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class mM extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ne.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class f3 extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ne.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class h3 extends $n {
        constructor(t, n, r, o, i) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.shouldActivate = i),
            (this.type = ne.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class p3 extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ne.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class g3 extends $n {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ne.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class m3 {
        constructor(t) {
          (this.route = t), (this.type = ne.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class v3 {
        constructor(t) {
          (this.route = t), (this.type = ne.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class y3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ne.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class _3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ne.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class C3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ne.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class E3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ne.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class vM {
        constructor(t, n, r) {
          (this.routerEvent = t),
            (this.position = n),
            (this.anchor = r),
            (this.type = ne.Scroll);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position
              ? `${this.position[0]}, ${this.position[1]}`
              : null
          }')`;
        }
      }
      class zg {}
      class xl {
        constructor(t, n) {
          (this.url = t), (this.navigationBehaviorOptions = n);
        }
      }
      function In(e) {
        return e.outlet || q;
      }
      function Ma(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let t = e.parent; t; t = t.parent) {
          const n = t.routeConfig;
          if (n?._loadedInjector) return n._loadedInjector;
          if (n?._injector) return n._injector;
        }
        return null;
      }
      class M3 {
        get injector() {
          return Ma(this.route?.snapshot) ?? this.rootInjector;
        }
        set injector(t) {}
        constructor(t) {
          (this.rootInjector = t),
            (this.outlet = null),
            (this.route = null),
            (this.children = new Ta(this.rootInjector)),
            (this.attachRef = null);
        }
      }
      let Ta = (() => {
        class e {
          constructor(n) {
            (this.rootInjector = n), (this.contexts = new Map());
          }
          onChildOutletCreated(n, r) {
            const o = this.getOrCreateContext(n);
            (o.outlet = r), this.contexts.set(n, o);
          }
          onChildOutletDestroyed(n) {
            const r = this.getContext(n);
            r && ((r.outlet = null), (r.attachRef = null));
          }
          onOutletDeactivated() {
            const n = this.contexts;
            return (this.contexts = new Map()), n;
          }
          onOutletReAttached(n) {
            this.contexts = n;
          }
          getOrCreateContext(n) {
            let r = this.getContext(n);
            return (
              r ||
                ((r = new M3(this.rootInjector)),
                this.contexts.set(n, r)),
              r
            );
          }
          getContext(n) {
            return this.contexts.get(n) || null;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Wt));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class yM {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const n = this.pathFromRoot(t);
          return n.length > 1 ? n[n.length - 2] : null;
        }
        children(t) {
          const n = Gg(t, this._root);
          return n ? n.children.map(r => r.value) : [];
        }
        firstChild(t) {
          const n = Gg(t, this._root);
          return n && n.children.length > 0
            ? n.children[0].value
            : null;
        }
        siblings(t) {
          const n = qg(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children
                .map(o => o.value)
                .filter(o => o !== t);
        }
        pathFromRoot(t) {
          return qg(t, this._root).map(n => n.value);
        }
      }
      function Gg(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const r = Gg(e, n);
          if (r) return r;
        }
        return null;
      }
      function qg(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = qg(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class Sn {
        constructor(t, n) {
          (this.value = t), (this.children = n);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Li(e) {
        const t = {};
        return (
          e && e.children.forEach(n => (t[n.value.outlet] = n)), t
        );
      }
      class _M extends yM {
        constructor(t, n) {
          super(t), (this.snapshot = n), Wg(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function CM(e) {
        const t = (function T3(e) {
            const i = new Fl([], {}, {}, '', {}, q, e, null, {});
            return new EM('', new Sn(i, []));
          })(e),
          n = new vt([new Da('', {})]),
          r = new vt({}),
          o = new vt({}),
          i = new vt({}),
          s = new vt(''),
          a = new Vi(n, r, i, s, o, q, e, t.root);
        return (a.snapshot = t.root), new _M(new Sn(a, []), t);
      }
      class Vi {
        constructor(t, n, r, o, i, s, a, c) {
          (this.urlSubject = t),
            (this.paramsSubject = n),
            (this.queryParamsSubject = r),
            (this.fragmentSubject = o),
            (this.dataSubject = i),
            (this.outlet = s),
            (this.component = a),
            (this._futureSnapshot = c),
            (this.title =
              this.dataSubject?.pipe(oe(u => u[Ea])) ?? G(void 0)),
            (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i);
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
          return (
            (this._paramMap ??= this.params.pipe(oe(t => Fi(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(
              oe(t => Fi(t)),
            )),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Ol(e, t, n = 'emptyOnly') {
        let r;
        const { routeConfig: o } = e;
        return (
          (r =
            null === t ||
            ('always' !== n &&
              '' !== o?.path &&
              (t.component || t.routeConfig?.loadComponent))
              ? {
                  params: { ...e.params },
                  data: { ...e.data },
                  resolve: { ...e.data, ...(e._resolvedData ?? {}) },
                }
              : {
                  params: { ...t.params, ...e.params },
                  data: { ...t.data, ...e.data },
                  resolve: {
                    ...e.data,
                    ...t.data,
                    ...o?.data,
                    ...e._resolvedData,
                  },
                }),
          o && wM(o) && (r.resolve[Ea] = o.title),
          r
        );
      }
      class Fl {
        get title() {
          return this.data?.[Ea];
        }
        constructor(t, n, r, o, i, s, a, c, u) {
          (this.url = t),
            (this.params = n),
            (this.queryParams = r),
            (this.fragment = o),
            (this.data = i),
            (this.outlet = s),
            (this.component = a),
            (this.routeConfig = c),
            (this._resolve = u);
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
          return (this._paramMap ??= Fi(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= Fi(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map(r => r.toString())
            .join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class EM extends yM {
        constructor(t, n) {
          super(n), (this.url = t), Wg(this, n);
        }
        toString() {
          return DM(this._root);
        }
      }
      function Wg(e, t) {
        (t.value._routerState = e), t.children.forEach(n => Wg(e, n));
      }
      function DM(e) {
        const t =
          e.children.length > 0
            ? ` { ${e.children.map(DM).join(', ')} } `
            : '';
        return `${e.value}${t}`;
      }
      function Zg(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Bn(t.queryParams, n.queryParams) ||
              e.queryParamsSubject.next(n.queryParams),
            t.fragment !== n.fragment &&
              e.fragmentSubject.next(n.fragment),
            Bn(t.params, n.params) || e.paramsSubject.next(n.params),
            (function jH(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n)
                if (!Bn(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.urlSubject.next(n.url),
            Bn(t.data, n.data) || e.dataSubject.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot),
            e.dataSubject.next(e._futureSnapshot.data);
      }
      function Qg(e, t) {
        const n =
          Bn(e.params, t.params) &&
          (function HH(e, t) {
            return (
              vo(e, t) &&
              e.every((n, r) => Bn(n.parameters, t[r].parameters))
            );
          })(e.url, t.url);
        return (
          n &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Qg(e.parent, t.parent))
        );
      }
      function wM(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let Aa = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = q),
              (this.activateEvents = new Z()),
              (this.deactivateEvents = new Z()),
              (this.attachEvents = new Z()),
              (this.detachEvents = new Z()),
              (this.parentContexts = _(Ta)),
              (this.location = _(yn)),
              (this.changeDetector = _(da)),
              (this.inputBinder = _(kl, { optional: !0 })),
              (this.supportsBindingToComponentInputs = !0);
          }
          get activatedComponentRef() {
            return this.activated;
          }
          ngOnChanges(n) {
            if (n.name) {
              const { firstChange: r, previousValue: o } = n.name;
              if (r) return;
              this.isTrackedInParentContexts(o) &&
                (this.deactivate(),
                this.parentContexts.onChildOutletDestroyed(o)),
                this.initializeOutletWithName();
            }
          }
          ngOnDestroy() {
            this.isTrackedInParentContexts(this.name) &&
              this.parentContexts.onChildOutletDestroyed(this.name),
              this.inputBinder?.unsubscribeFromRouteData(this);
          }
          isTrackedInParentContexts(n) {
            return this.parentContexts.getContext(n)?.outlet === this;
          }
          ngOnInit() {
            this.initializeOutletWithName();
          }
          initializeOutletWithName() {
            if (
              (this.parentContexts.onChildOutletCreated(
                this.name,
                this,
              ),
              this.activated)
            )
              return;
            const n = this.parentContexts.getContext(this.name);
            n?.route &&
              (n.attachRef
                ? this.attach(n.attachRef, n.route)
                : this.activateWith(n.route, n.injector));
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new E(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new E(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new E(4012, !1);
            this.location.detach();
            const n = this.activated;
            return (
              (this.activated = null),
              (this._activatedRoute = null),
              this.detachEvents.emit(n.instance),
              n
            );
          }
          attach(n, r) {
            (this.activated = n),
              (this._activatedRoute = r),
              this.location.insert(n.hostView),
              this.inputBinder?.bindActivatedRouteToOutletComponent(
                this,
              ),
              this.attachEvents.emit(n.instance);
          }
          deactivate() {
            if (this.activated) {
              const n = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(n);
            }
          }
          activateWith(n, r) {
            if (this.isActivated) throw new E(4013, !1);
            this._activatedRoute = n;
            const o = this.location,
              s = n.snapshot.component,
              a = this.parentContexts.getOrCreateContext(
                this.name,
              ).children,
              c = new Yg(n, a, o.injector);
            (this.activated = o.createComponent(s, {
              index: o.length,
              injector: c,
              environmentInjector: r,
            })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(
                this,
              ),
              this.activateEvents.emit(this.activated.instance);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵdir = B({
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
            features: [nn],
          }));
        }
        return e;
      })();
      class Yg {
        __ngOutletInjector(t) {
          return new Yg(this.route, this.childContexts, t);
        }
        constructor(t, n, r) {
          (this.route = t),
            (this.childContexts = n),
            (this.parent = r);
        }
        get(t, n) {
          return t === Vi
            ? this.route
            : t === Ta
            ? this.childContexts
            : this.parent.get(t, n);
        }
      }
      const kl = new D('');
      function Na(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const o = (function N3(e, t, n) {
            return t.children.map(r => {
              for (const o of n.children)
                if (e.shouldReuseRoute(r.value, o.value.snapshot))
                  return Na(e, r, o);
              return Na(e, r);
            });
          })(e, t, n);
          return new Sn(r, o);
        }
        {
          if (e.shouldAttach(t.value)) {
            const i = e.retrieve(t.value);
            if (null !== i) {
              const s = i.route;
              return (
                (s.value._futureSnapshot = t.value),
                (s.children = t.children.map(a => Na(e, a))),
                s
              );
            }
          }
          const r = (function R3(e) {
              return new Vi(
                new vt(e.url),
                new vt(e.params),
                new vt(e.queryParams),
                new vt(e.fragment),
                new vt(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(t.value),
            o = t.children.map(i => Na(e, i));
          return new Sn(r, o);
        }
      }
      class Kg {
        constructor(t, n) {
          (this.redirectTo = t), (this.navigationBehaviorOptions = n);
        }
      }
      const IM = 'ngNavigationCancelingError';
      function Pl(e, t) {
        const { redirectTo: n, navigationBehaviorOptions: r } = yo(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
          o = SM(!1, en.Redirect);
        return (o.url = n), (o.navigationBehaviorOptions = r), o;
      }
      function SM(e, t) {
        const n = new Error(`NavigationCancelingError: ${e || ''}`);
        return (n[IM] = !0), (n.cancellationCode = t), n;
      }
      function MM(e) {
        return !!e && e[IM];
      }
      class F3 {
        constructor(t, n, r, o, i) {
          (this.routeReuseStrategy = t),
            (this.futureState = n),
            (this.currState = r),
            (this.forwardEvent = o),
            (this.inputBindingEnabled = i);
        }
        activate(t) {
          const n = this.futureState._root,
            r = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(n, r, t),
            Zg(this.futureState.root),
            this.activateChildRoutes(n, r, t);
        }
        deactivateChildRoutes(t, n, r) {
          const o = Li(n);
          t.children.forEach(i => {
            const s = i.value.outlet;
            this.deactivateRoutes(i, o[s], r), delete o[s];
          }),
            Object.values(o).forEach(i => {
              this.deactivateRouteAndItsChildren(i, r);
            });
        }
        deactivateRoutes(t, n, r) {
          const o = t.value,
            i = n ? n.value : null;
          if (o === i)
            if (o.component) {
              const s = r.getContext(o.outlet);
              s && this.deactivateChildRoutes(t, n, s.children);
            } else this.deactivateChildRoutes(t, n, r);
          else i && this.deactivateRouteAndItsChildren(n, r);
        }
        deactivateRouteAndItsChildren(t, n) {
          t.value.component &&
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, n)
            : this.deactivateRouteAndOutlet(t, n);
        }
        detachAndStoreRouteSubtree(t, n) {
          const r = n.getContext(t.value.outlet),
            o = r && t.value.component ? r.children : n,
            i = Li(t);
          for (const s of Object.values(i))
            this.deactivateRouteAndItsChildren(s, o);
          if (r && r.outlet) {
            const s = r.outlet.detach(),
              a = r.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, {
              componentRef: s,
              route: t,
              contexts: a,
            });
          }
        }
        deactivateRouteAndOutlet(t, n) {
          const r = n.getContext(t.value.outlet),
            o = r && t.value.component ? r.children : n,
            i = Li(t);
          for (const s of Object.values(i))
            this.deactivateRouteAndItsChildren(s, o);
          r &&
            (r.outlet &&
              (r.outlet.deactivate(),
              r.children.onOutletDeactivated()),
            (r.attachRef = null),
            (r.route = null));
        }
        activateChildRoutes(t, n, r) {
          const o = Li(n);
          t.children.forEach(i => {
            this.activateRoutes(i, o[i.value.outlet], r),
              this.forwardEvent(new E3(i.value.snapshot));
          }),
            t.children.length &&
              this.forwardEvent(new _3(t.value.snapshot));
        }
        activateRoutes(t, n, r) {
          const o = t.value,
            i = n ? n.value : null;
          if ((Zg(o), o === i))
            if (o.component) {
              const s = r.getOrCreateContext(o.outlet);
              this.activateChildRoutes(t, n, s.children);
            } else this.activateChildRoutes(t, n, r);
          else if (o.component) {
            const s = r.getOrCreateContext(o.outlet);
            if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
              const a = this.routeReuseStrategy.retrieve(o.snapshot);
              this.routeReuseStrategy.store(o.snapshot, null),
                s.children.onOutletReAttached(a.contexts),
                (s.attachRef = a.componentRef),
                (s.route = a.route.value),
                s.outlet &&
                  s.outlet.attach(a.componentRef, a.route.value),
                Zg(a.route.value),
                this.activateChildRoutes(t, null, s.children);
            } else
              (s.attachRef = null),
                (s.route = o),
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(t, null, s.children);
          } else this.activateChildRoutes(t, null, r);
        }
      }
      class TM {
        constructor(t) {
          (this.path = t),
            (this.route = this.path[this.path.length - 1]);
        }
      }
      class Ll {
        constructor(t, n) {
          (this.component = t), (this.route = n);
        }
      }
      function k3(e, t, n) {
        const r = e._root;
        return Ra(r, t ? t._root : null, n, [r.value]);
      }
      function ji(e, t) {
        const n = Symbol(),
          r = t.get(e, n);
        return r === n
          ? 'function' != typeof e ||
            (function IN(e) {
              return null !== uc(e);
            })(e)
            ? t.get(e)
            : e
          : r;
      }
      function Ra(
        e,
        t,
        n,
        r,
        o = { canDeactivateChecks: [], canActivateChecks: [] },
      ) {
        const i = Li(t);
        return (
          e.children.forEach(s => {
            (function L3(
              e,
              t,
              n,
              r,
              o = { canDeactivateChecks: [], canActivateChecks: [] },
            ) {
              const i = e.value,
                s = t ? t.value : null,
                a = n ? n.getContext(e.value.outlet) : null;
              if (s && i.routeConfig === s.routeConfig) {
                const c = (function V3(e, t, n) {
                  if ('function' == typeof n) return n(e, t);
                  switch (n) {
                    case 'pathParamsChange':
                      return !vo(e.url, t.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !vo(e.url, t.url) ||
                        !Bn(e.queryParams, t.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return (
                        !Qg(e, t) || !Bn(e.queryParams, t.queryParams)
                      );
                    default:
                      return !Qg(e, t);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? o.canActivateChecks.push(new TM(r))
                  : ((i.data = s.data),
                    (i._resolvedData = s._resolvedData)),
                  Ra(
                    e,
                    t,
                    i.component ? (a ? a.children : null) : n,
                    r,
                    o,
                  ),
                  c &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    o.canDeactivateChecks.push(
                      new Ll(a.outlet.component, s),
                    );
              } else
                s && xa(t, a, o),
                  o.canActivateChecks.push(new TM(r)),
                  Ra(
                    e,
                    null,
                    i.component ? (a ? a.children : null) : n,
                    r,
                    o,
                  );
            })(s, i[s.value.outlet], n, r.concat([s.value]), o),
              delete i[s.value.outlet];
          }),
          Object.entries(i).forEach(([s, a]) =>
            xa(a, n.getContext(s), o),
          ),
          o
        );
      }
      function xa(e, t, n) {
        const r = Li(e),
          o = e.value;
        Object.entries(r).forEach(([i, s]) => {
          xa(
            s,
            o.component ? (t ? t.children.getContext(i) : null) : t,
            n,
          );
        }),
          n.canDeactivateChecks.push(
            new Ll(
              o.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              o,
            ),
          );
      }
      function Oa(e) {
        return 'function' == typeof e;
      }
      function AM(e) {
        return e instanceof yl || 'EmptyError' === e?.name;
      }
      const Vl = Symbol('INITIAL_VALUE');
      function Ui() {
        return ur(e =>
          Og(e.map(t => t.pipe(po(1), WS(Vl)))).pipe(
            oe(t => {
              for (const n of t)
                if (!0 !== n) {
                  if (n === Vl) return Vl;
                  if (!1 === n || G3(n)) return n;
                }
              return !0;
            }),
            xr(t => t !== Vl),
            po(1),
          ),
        );
      }
      function G3(e) {
        return yo(e) || e instanceof Kg;
      }
      function NM(e) {
        return (function gA(...e) {
          return uv(e);
        })(
          Mt(t => {
            if ('boolean' != typeof t) throw Pl(0, t);
          }),
          oe(t => !0 === t),
        );
      }
      class Xg {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class jl extends Error {
        constructor(t) {
          super(), (this.urlTree = t);
        }
      }
      function Bi(e) {
        return Cl(new Xg(e));
      }
      class oz {
        constructor(t, n) {
          (this.urlSerializer = t), (this.urlTree = n);
        }
        lineralizeSegments(t, n) {
          let r = [],
            o = n.root;
          for (;;) {
            if (
              ((r = r.concat(o.segments)), 0 === o.numberOfChildren)
            )
              return G(r);
            if (o.numberOfChildren > 1 || !o.children[q])
              return Cl(new E(4e3, !1));
            o = o.children[q];
          }
        }
        applyRedirectCommands(t, n, r, o, i) {
          if ('string' != typeof n) {
            const a = n,
              {
                queryParams: c,
                fragment: u,
                routeConfig: l,
                url: d,
                outlet: f,
                params: h,
                data: p,
                title: g,
              } = o,
              m = Zn(i, () =>
                a({
                  params: h,
                  data: p,
                  queryParams: c,
                  fragment: u,
                  routeConfig: l,
                  url: d,
                  outlet: f,
                  title: g,
                }),
              );
            if (m instanceof mo) throw new jl(m);
            n = m;
          }
          const s = this.applyRedirectCreateUrlTree(
            n,
            this.urlSerializer.parse(n),
            t,
            r,
          );
          if ('/' === n[0]) throw new jl(s);
          return s;
        }
        applyRedirectCreateUrlTree(t, n, r, o) {
          const i = this.createSegmentGroup(t, n.root, r, o);
          return new mo(
            i,
            this.createQueryParams(
              n.queryParams,
              this.urlTree.queryParams,
            ),
            n.fragment,
          );
        }
        createQueryParams(t, n) {
          const r = {};
          return (
            Object.entries(t).forEach(([o, i]) => {
              if ('string' == typeof i && ':' === i[0]) {
                const a = i.substring(1);
                r[o] = n[a];
              } else r[o] = i;
            }),
            r
          );
        }
        createSegmentGroup(t, n, r, o) {
          const i = this.createSegments(t, n.segments, r, o);
          let s = {};
          return (
            Object.entries(n.children).forEach(([a, c]) => {
              s[a] = this.createSegmentGroup(t, c, r, o);
            }),
            new ge(i, s)
          );
        }
        createSegments(t, n, r, o) {
          return n.map(i =>
            ':' === i.path[0]
              ? this.findPosParam(t, i, o)
              : this.findOrReturn(i, r),
          );
        }
        findPosParam(t, n, r) {
          const o = r[n.path.substring(1)];
          if (!o) throw new E(4001, !1);
          return o;
        }
        findOrReturn(t, n) {
          let r = 0;
          for (const o of n) {
            if (o.path === t.path) return n.splice(r), o;
            r++;
          }
          return t;
        }
      }
      const Jg = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function iz(e, t, n, r, o) {
        const i = em(e, t, n);
        return i.matched
          ? ((r = (function D3(e, t) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = rp(
                    e.providers,
                    t,
                    `Route: ${e.path}`,
                  )),
                e._injector ?? t
              );
            })(t, r)),
            (function tz(e, t, n, r) {
              const o = t.canMatch;
              return o && 0 !== o.length
                ? G(
                    o.map(s => {
                      const a = ji(s, e);
                      return Or(
                        (function z3(e) {
                          return e && Oa(e.canMatch);
                        })(a)
                          ? a.canMatch(t, n)
                          : Zn(e, () => a(t, n)),
                      );
                    }),
                  ).pipe(Ui(), NM())
                : G(!0);
            })(r, t, n).pipe(oe(s => (!0 === s ? i : { ...Jg }))))
          : G(i);
      }
      function em(e, t, n) {
        if ('**' === t.path)
          return (function sz(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? XS(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(n);
        if ('' === t.path)
          return 'full' === t.pathMatch &&
            (e.hasChildren() || n.length > 0)
            ? { ...Jg }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: n,
                parameters: {},
                positionalParamSegments: {},
              };
        const o = (t.matcher || VH)(n, e, t);
        if (!o) return { ...Jg };
        const i = {};
        Object.entries(o.posParams ?? {}).forEach(([a, c]) => {
          i[a] = c.path;
        });
        const s =
          o.consumed.length > 0
            ? {
                ...i,
                ...o.consumed[o.consumed.length - 1].parameters,
              }
            : i;
        return {
          matched: !0,
          consumedSegments: o.consumed,
          remainingSegments: n.slice(o.consumed.length),
          parameters: s,
          positionalParamSegments: o.posParams ?? {},
        };
      }
      function RM(e, t, n, r) {
        return n.length > 0 &&
          (function uz(e, t, n) {
            return n.some(r => Ul(e, t, r) && In(r) !== q);
          })(e, n, r)
          ? {
              segmentGroup: new ge(t, cz(r, new ge(n, e.children))),
              slicedSegments: [],
            }
          : 0 === n.length &&
            (function lz(e, t, n) {
              return n.some(r => Ul(e, t, r));
            })(e, n, r)
          ? {
              segmentGroup: new ge(
                e.segments,
                az(e, n, r, e.children),
              ),
              slicedSegments: n,
            }
          : {
              segmentGroup: new ge(e.segments, e.children),
              slicedSegments: n,
            };
      }
      function az(e, t, n, r) {
        const o = {};
        for (const i of n)
          if (Ul(e, t, i) && !r[In(i)]) {
            const s = new ge([], {});
            o[In(i)] = s;
          }
        return { ...r, ...o };
      }
      function cz(e, t) {
        const n = {};
        n[q] = t;
        for (const r of e)
          if ('' === r.path && In(r) !== q) {
            const o = new ge([], {});
            n[In(r)] = o;
          }
        return n;
      }
      function Ul(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) ||
            'full' !== n.pathMatch) &&
          '' === n.path
        );
      }
      class hz {}
      class mz {
        constructor(t, n, r, o, i, s, a) {
          (this.injector = t),
            (this.configLoader = n),
            (this.rootComponentType = r),
            (this.config = o),
            (this.urlTree = i),
            (this.paramsInheritanceStrategy = s),
            (this.urlSerializer = a),
            (this.applyRedirects = new oz(
              this.urlSerializer,
              this.urlTree,
            )),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(t) {
          return new E(4002, `'${t.segmentGroup}'`);
        }
        recognize() {
          const t = RM(
            this.urlTree.root,
            [],
            [],
            this.config,
          ).segmentGroup;
          return this.match(t).pipe(
            oe(({ children: n, rootSnapshot: r }) => {
              const o = new Sn(r, n),
                i = new EM('', o),
                s = (function o3(e, t, n = null, r = null) {
                  return lM(uM(e), t, n, r);
                })(
                  r,
                  [],
                  this.urlTree.queryParams,
                  this.urlTree.fragment,
                );
              return (
                (s.queryParams = this.urlTree.queryParams),
                (i.url = this.urlSerializer.serialize(s)),
                { state: i, tree: s }
              );
            }),
          );
        }
        match(t) {
          const n = new Fl(
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
          return this.processSegmentGroup(
            this.injector,
            this.config,
            t,
            q,
            n,
          ).pipe(
            oe(r => ({ children: r, rootSnapshot: n })),
            Oi(r => {
              if (r instanceof jl)
                return (
                  (this.urlTree = r.urlTree),
                  this.match(r.urlTree.root)
                );
              throw r instanceof Xg ? this.noMatchError(r) : r;
            }),
          );
        }
        processSegmentGroup(t, n, r, o, i) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(t, n, r, i)
            : this.processSegment(t, n, r, r.segments, o, !0, i).pipe(
                oe(s => (s instanceof Sn ? [s] : [])),
              );
        }
        processChildren(t, n, r, o) {
          const i = [];
          for (const s of Object.keys(r.children))
            'primary' === s ? i.unshift(s) : i.push(s);
          return dt(i).pipe(
            Dl(s => {
              const a = r.children[s],
                c = (function S3(e, t) {
                  const n = e.filter(r => In(r) === t);
                  return n.push(...e.filter(r => In(r) !== t)), n;
                })(n, s);
              return this.processSegmentGroup(t, c, a, s, o);
            }),
            QS((s, a) => (s.push(...a), s)),
            El(null),
            (function kH(e, t) {
              const n = arguments.length >= 2;
              return r =>
                r.pipe(
                  e ? xr((o, i) => e(o, i, r)) : Gn,
                  Pg(1),
                  n ? El(t) : ZS(() => new yl()),
                );
            })(),
            St(s => {
              if (null === s) return Bi(r);
              const a = xM(s);
              return (
                (function vz(e) {
                  e.sort((t, n) =>
                    t.value.outlet === q
                      ? -1
                      : n.value.outlet === q
                      ? 1
                      : t.value.outlet.localeCompare(n.value.outlet),
                  );
                })(a),
                G(a)
              );
            }),
          );
        }
        processSegment(t, n, r, o, i, s, a) {
          return dt(n).pipe(
            Dl(c =>
              this.processSegmentAgainstRoute(
                c._injector ?? t,
                n,
                c,
                r,
                o,
                i,
                s,
                a,
              ).pipe(
                Oi(u => {
                  if (u instanceof Xg) return G(null);
                  throw u;
                }),
              ),
            ),
            go(c => !!c),
            Oi(c => {
              if (AM(c))
                return (function fz(e, t, n) {
                  return 0 === t.length && !e.children[n];
                })(r, o, i)
                  ? G(new hz())
                  : Bi(r);
              throw c;
            }),
          );
        }
        processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
          return (function dz(e, t, n, r) {
            return (
              !!(In(e) === r || (r !== q && Ul(t, n, e))) &&
              em(t, e, n).matched
            );
          })(r, o, i, s)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, o, r, i, s, c)
              : this.allowRedirects && a
              ? this.expandSegmentAgainstRouteUsingRedirect(
                  t,
                  o,
                  n,
                  r,
                  i,
                  s,
                  c,
                )
              : Bi(o)
            : Bi(o);
        }
        expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s, a) {
          const {
            matched: c,
            parameters: u,
            consumedSegments: l,
            positionalParamSegments: d,
            remainingSegments: f,
          } = em(n, o, i);
          if (!c) return Bi(n);
          'string' == typeof o.redirectTo &&
            '/' === o.redirectTo[0] &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 &&
              (this.allowRedirects = !1));
          const h = new Fl(
              i,
              u,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              OM(o),
              In(o),
              o.component ?? o._loadedComponent ?? null,
              o,
              FM(o),
            ),
            p = Ol(h, a, this.paramsInheritanceStrategy);
          (h.params = Object.freeze(p.params)),
            (h.data = Object.freeze(p.data));
          const g = this.applyRedirects.applyRedirectCommands(
            l,
            o.redirectTo,
            d,
            h,
            t,
          );
          return this.applyRedirects
            .lineralizeSegments(o, g)
            .pipe(
              St(m =>
                this.processSegment(t, r, n, m.concat(f), s, !1, a),
              ),
            );
        }
        matchSegmentAgainstRoute(t, n, r, o, i, s) {
          const a = iz(n, r, o, t);
          return (
            '**' === r.path && (n.children = {}),
            a.pipe(
              ur(c =>
                c.matched
                  ? this.getChildConfig(
                      (t = r._injector ?? t),
                      r,
                      o,
                    ).pipe(
                      ur(({ routes: u }) => {
                        const l = r._loadedInjector ?? t,
                          {
                            parameters: d,
                            consumedSegments: f,
                            remainingSegments: h,
                          } = c,
                          p = new Fl(
                            f,
                            d,
                            Object.freeze({
                              ...this.urlTree.queryParams,
                            }),
                            this.urlTree.fragment,
                            OM(r),
                            In(r),
                            r.component ?? r._loadedComponent ?? null,
                            r,
                            FM(r),
                          ),
                          g = Ol(
                            p,
                            s,
                            this.paramsInheritanceStrategy,
                          );
                        (p.params = Object.freeze(g.params)),
                          (p.data = Object.freeze(g.data));
                        const { segmentGroup: m, slicedSegments: C } =
                          RM(n, f, h, u);
                        if (0 === C.length && m.hasChildren())
                          return this.processChildren(
                            l,
                            u,
                            m,
                            p,
                          ).pipe(oe(T => new Sn(p, T)));
                        if (0 === u.length && 0 === C.length)
                          return G(new Sn(p, []));
                        const y = In(r) === i;
                        return this.processSegment(
                          l,
                          u,
                          m,
                          C,
                          y ? q : i,
                          !0,
                          p,
                        ).pipe(
                          oe(
                            T =>
                              new Sn(p, T instanceof Sn ? [T] : []),
                          ),
                        );
                      }),
                    )
                  : Bi(n),
              ),
            )
          );
        }
        getChildConfig(t, n, r) {
          return n.children
            ? G({ routes: n.children, injector: t })
            : n.loadChildren
            ? void 0 !== n._loadedRoutes
              ? G({
                  routes: n._loadedRoutes,
                  injector: n._loadedInjector,
                })
              : (function ez(e, t, n, r) {
                  const o = t.canLoad;
                  return void 0 === o || 0 === o.length
                    ? G(!0)
                    : G(
                        o.map(s => {
                          const a = ji(s, e);
                          return Or(
                            (function U3(e) {
                              return e && Oa(e.canLoad);
                            })(a)
                              ? a.canLoad(t, n)
                              : Zn(e, () => a(t, n)),
                          );
                        }),
                      ).pipe(Ui(), NM());
                })(t, n, r).pipe(
                  St(o =>
                    o
                      ? this.configLoader.loadChildren(t, n).pipe(
                          Mt(i => {
                            (n._loadedRoutes = i.routes),
                              (n._loadedInjector = i.injector);
                          }),
                        )
                      : (function rz(e) {
                          return Cl(SM(!1, en.GuardRejected));
                        })(),
                  ),
                )
            : G({ routes: [], injector: t });
        }
      }
      function yz(e) {
        const t = e.value.routeConfig;
        return t && '' === t.path;
      }
      function xM(e) {
        const t = [],
          n = new Set();
        for (const r of e) {
          if (!yz(r)) {
            t.push(r);
            continue;
          }
          const o = t.find(
            i => r.value.routeConfig === i.value.routeConfig,
          );
          void 0 !== o
            ? (o.children.push(...r.children), n.add(o))
            : t.push(r);
        }
        for (const r of n) {
          const o = xM(r.children);
          t.push(new Sn(r.value, o));
        }
        return t.filter(r => !n.has(r));
      }
      function OM(e) {
        return e.data || {};
      }
      function FM(e) {
        return e.resolve || {};
      }
      function kM(e) {
        const t = e.children.map(n => kM(n)).flat();
        return [e, ...t];
      }
      function tm(e) {
        return ur(t => {
          const n = e(t);
          return n ? dt(n).pipe(oe(() => t)) : G(t);
        });
      }
      let PM = (() => {
          class e {
            buildTitle(n) {
              let r,
                o = n.root;
              for (; void 0 !== o; )
                (r = this.getResolvedTitleForRoute(o) ?? r),
                  (o = o.children.find(i => i.outlet === q));
              return r;
            }
            getResolvedTitleForRoute(n) {
              return n.data[Ea];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(bz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        bz = (() => {
          class e extends PM {
            constructor(n) {
              super(), (this.title = n);
            }
            updateTitle(n) {
              const r = this.buildTitle(n);
              void 0 !== r && this.title.setTitle(r);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(P$));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const Fa = new D('', {
        providedIn: 'root',
        factory: () => ({}),
      });
      let LM = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = J({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [ee],
            decls: 1,
            vars: 0,
            template: function (r, o) {
              1 & r && ve(0, 'router-outlet');
            },
            dependencies: [Aa],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function nm(e) {
        const t = e.children && e.children.map(nm),
          n = t ? { ...e, children: t } : { ...e };
        return (
          !n.component &&
            !n.loadComponent &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== q &&
            (n.component = LM),
          n
        );
      }
      const Bl = new D('');
      let VM = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = _(ej));
          }
          loadComponent(n) {
            if (this.componentLoaders.get(n))
              return this.componentLoaders.get(n);
            if (n._loadedComponent) return G(n._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(n);
            const r = Or(n.loadComponent()).pipe(
                oe(jM),
                Mt(i => {
                  this.onLoadEndListener && this.onLoadEndListener(n),
                    (n._loadedComponent = i);
                }),
                Lg(() => {
                  this.componentLoaders.delete(n);
                }),
              ),
              o = new qS(r, () => new mt()).pipe(kg());
            return this.componentLoaders.set(n, o), o;
          }
          loadChildren(n, r) {
            if (this.childrenLoaders.get(r))
              return this.childrenLoaders.get(r);
            if (r._loadedRoutes)
              return G({
                routes: r._loadedRoutes,
                injector: r._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(r);
            const i = (function Iz(e, t, n, r) {
                return Or(e.loadChildren()).pipe(
                  oe(jM),
                  St(o =>
                    o instanceof oD || Array.isArray(o)
                      ? G(o)
                      : dt(t.compileModuleAsync(o)),
                  ),
                  oe(o => {
                    r && r(e);
                    let i,
                      s,
                      a = !1;
                    return (
                      Array.isArray(o)
                        ? ((s = o), !0)
                        : ((i = o.create(n).injector),
                          (s = i
                            .get(Bl, [], { optional: !0, self: !0 })
                            .flat())),
                      { routes: s.map(nm), injector: i }
                    );
                  }),
                );
              })(r, this.compiler, n, this.onLoadEndListener).pipe(
                Lg(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new qS(i, () => new mt()).pipe(kg());
            return this.childrenLoaders.set(r, s), s;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function jM(e) {
        return (function Sz(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let rm = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(Mz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        Mz = (() => {
          class e {
            shouldProcessUrl(n) {
              return !0;
            }
            extract(n) {
              return n;
            }
            merge(n, r) {
              return n;
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const UM = new D(''),
        $M = new D('');
      let $l = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new mt()),
              (this.transitionAbortSubject = new mt()),
              (this.configLoader = _(VM)),
              (this.environmentInjector = _(Wt)),
              (this.urlSerializer = _(ki)),
              (this.rootContexts = _(Ta)),
              (this.location = _(ga)),
              (this.inputBindingEnabled =
                null !== _(kl, { optional: !0 })),
              (this.titleStrategy = _(PM)),
              (this.options = _(Fa, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy ||
                'emptyOnly'),
              (this.urlHandlingStrategy = _(rm)),
              (this.createViewTransition = _(UM, { optional: !0 })),
              (this.navigationErrorHandler = _($M, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => G(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = o =>
                this.events.next(new v3(o))),
              (this.configLoader.onLoadStartListener = o =>
                this.events.next(new m3(o)));
          }
          complete() {
            this.transitions?.complete();
          }
          handleNavigationRequest(n) {
            const r = ++this.navigationId;
            this.transitions?.next({
              ...this.transitions.value,
              ...n,
              id: r,
            });
          }
          setupNavigations(n, r, o) {
            return (
              (this.transitions = new vt({
                id: 0,
                currentUrlTree: r,
                currentRawUrl: r,
                extractedUrl: this.urlHandlingStrategy.extract(r),
                urlAfterRedirects:
                  this.urlHandlingStrategy.extract(r),
                rawUrl: r,
                extras: {},
                resolve: () => {},
                reject: () => {},
                promise: Promise.resolve(!0),
                source: Sa,
                restoredState: null,
                currentSnapshot: o.snapshot,
                targetSnapshot: null,
                currentRouterState: o,
                targetRouterState: null,
                guards: {
                  canActivateChecks: [],
                  canDeactivateChecks: [],
                },
                guardsResult: null,
              })),
              this.transitions.pipe(
                xr(i => 0 !== i.id),
                oe(i => ({
                  ...i,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    i.rawUrl,
                  ),
                })),
                ur(i => {
                  let s = !1,
                    a = !1;
                  return G(i).pipe(
                    ur(c => {
                      if (this.navigationId > i.id)
                        return (
                          this.cancelNavigationTransition(
                            i,
                            '',
                            en.SupersededByNewNavigation,
                          ),
                          Un
                        );
                      (this.currentTransition = i),
                        (this.currentNavigation = {
                          id: c.id,
                          initialUrl: c.rawUrl,
                          extractedUrl: c.extractedUrl,
                          targetBrowserUrl:
                            'string' == typeof c.extras.browserUrl
                              ? this.urlSerializer.parse(
                                  c.extras.browserUrl,
                                )
                              : c.extras.browserUrl,
                          trigger: c.source,
                          extras: c.extras,
                          previousNavigation: this
                            .lastSuccessfulNavigation
                            ? {
                                ...this.lastSuccessfulNavigation,
                                previousNavigation: null,
                              }
                            : null,
                        });
                      const u =
                        !n.navigated ||
                        this.isUpdatingInternalState() ||
                        this.isUpdatedBrowserUrl();
                      if (
                        !u &&
                        'reload' !==
                          (c.extras.onSameUrlNavigation ??
                            n.onSameUrlNavigation)
                      ) {
                        const d = '';
                        return (
                          this.events.next(
                            new Pi(
                              c.id,
                              this.urlSerializer.serialize(c.rawUrl),
                              d,
                              Rl.IgnoredSameUrlNavigation,
                            ),
                          ),
                          c.resolve(!1),
                          Un
                        );
                      }
                      if (
                        this.urlHandlingStrategy.shouldProcessUrl(
                          c.rawUrl,
                        )
                      )
                        return G(c).pipe(
                          ur(d => {
                            const f = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new Nl(
                                  d.id,
                                  this.urlSerializer.serialize(
                                    d.extractedUrl,
                                  ),
                                  d.source,
                                  d.restoredState,
                                ),
                              ),
                              f !== this.transitions?.getValue()
                                ? Un
                                : Promise.resolve(d)
                            );
                          }),
                          (function _z(e, t, n, r, o, i) {
                            return St(s =>
                              (function pz(
                                e,
                                t,
                                n,
                                r,
                                o,
                                i,
                                s = 'emptyOnly',
                              ) {
                                return new mz(
                                  e,
                                  t,
                                  n,
                                  r,
                                  o,
                                  s,
                                  i,
                                ).recognize();
                              })(
                                e,
                                t,
                                n,
                                r,
                                s.extractedUrl,
                                o,
                                i,
                              ).pipe(
                                oe(({ state: a, tree: c }) => ({
                                  ...s,
                                  targetSnapshot: a,
                                  urlAfterRedirects: c,
                                })),
                              ),
                            );
                          })(
                            this.environmentInjector,
                            this.configLoader,
                            this.rootComponentType,
                            n.config,
                            this.urlSerializer,
                            this.paramsInheritanceStrategy,
                          ),
                          Mt(d => {
                            (i.targetSnapshot = d.targetSnapshot),
                              (i.urlAfterRedirects =
                                d.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: d.urlAfterRedirects,
                              });
                            const f = new mM(
                              d.id,
                              this.urlSerializer.serialize(
                                d.extractedUrl,
                              ),
                              this.urlSerializer.serialize(
                                d.urlAfterRedirects,
                              ),
                              d.targetSnapshot,
                            );
                            this.events.next(f);
                          }),
                        );
                      if (
                        u &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          c.currentRawUrl,
                        )
                      ) {
                        const {
                            id: d,
                            extractedUrl: f,
                            source: h,
                            restoredState: p,
                            extras: g,
                          } = c,
                          m = new Nl(
                            d,
                            this.urlSerializer.serialize(f),
                            h,
                            p,
                          );
                        this.events.next(m);
                        const C = CM(this.rootComponentType).snapshot;
                        return (
                          (this.currentTransition = i =
                            {
                              ...c,
                              targetSnapshot: C,
                              urlAfterRedirects: f,
                              extras: {
                                ...g,
                                skipLocationChange: !1,
                                replaceUrl: !1,
                              },
                            }),
                          (this.currentNavigation.finalUrl = f),
                          G(i)
                        );
                      }
                      {
                        const d = '';
                        return (
                          this.events.next(
                            new Pi(
                              c.id,
                              this.urlSerializer.serialize(
                                c.extractedUrl,
                              ),
                              d,
                              Rl.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          c.resolve(!1),
                          Un
                        );
                      }
                    }),
                    Mt(c => {
                      const u = new f3(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(
                          c.urlAfterRedirects,
                        ),
                        c.targetSnapshot,
                      );
                      this.events.next(u);
                    }),
                    oe(
                      c => (
                        (this.currentTransition = i =
                          {
                            ...c,
                            guards: k3(
                              c.targetSnapshot,
                              c.currentSnapshot,
                              this.rootContexts,
                            ),
                          }),
                        i
                      ),
                    ),
                    (function q3(e, t) {
                      return St(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: o,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: s,
                          },
                        } = n;
                        return 0 === s.length && 0 === i.length
                          ? G({ ...n, guardsResult: !0 })
                          : (function W3(e, t, n, r) {
                              return dt(e).pipe(
                                St(o =>
                                  (function J3(e, t, n, r, o) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? G(
                                          i.map(a => {
                                            const c = Ma(t) ?? o,
                                              u = ji(a, c);
                                            return Or(
                                              (function H3(e) {
                                                return (
                                                  e &&
                                                  Oa(e.canDeactivate)
                                                );
                                              })(u)
                                                ? u.canDeactivate(
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                  )
                                                : Zn(c, () =>
                                                    u(e, t, n, r),
                                                  ),
                                            ).pipe(go());
                                          }),
                                        ).pipe(Ui())
                                      : G(!0);
                                  })(o.component, o.route, n, t, r),
                                ),
                                go(o => !0 !== o, !0),
                              );
                            })(s, r, o, e).pipe(
                              St(a =>
                                a &&
                                (function j3(e) {
                                  return 'boolean' == typeof e;
                                })(a)
                                  ? (function Z3(e, t, n, r) {
                                      return dt(t).pipe(
                                        Dl(o =>
                                          _l(
                                            (function Y3(e, t) {
                                              return (
                                                null !== e &&
                                                  t &&
                                                  t(new y3(e)),
                                                G(!0)
                                              );
                                            })(o.route.parent, r),
                                            (function Q3(e, t) {
                                              return (
                                                null !== e &&
                                                  t &&
                                                  t(new C3(e)),
                                                G(!0)
                                              );
                                            })(o.route, r),
                                            (function X3(e, t, n) {
                                              const r =
                                                  t[t.length - 1],
                                                i = t
                                                  .slice(
                                                    0,
                                                    t.length - 1,
                                                  )
                                                  .reverse()
                                                  .map(s =>
                                                    (function P3(e) {
                                                      const t =
                                                        e.routeConfig
                                                          ? e
                                                              .routeConfig
                                                              .canActivateChild
                                                          : null;
                                                      return t &&
                                                        0 !== t.length
                                                        ? {
                                                            node: e,
                                                            guards: t,
                                                          }
                                                        : null;
                                                    })(s),
                                                  )
                                                  .filter(
                                                    s => null !== s,
                                                  )
                                                  .map(s =>
                                                    GS(() =>
                                                      G(
                                                        s.guards.map(
                                                          c => {
                                                            const u =
                                                                Ma(
                                                                  s.node,
                                                                ) ??
                                                                n,
                                                              l = ji(
                                                                c,
                                                                u,
                                                              );
                                                            return Or(
                                                              (function $3(
                                                                e,
                                                              ) {
                                                                return (
                                                                  e &&
                                                                  Oa(
                                                                    e.canActivateChild,
                                                                  )
                                                                );
                                                              })(l)
                                                                ? l.canActivateChild(
                                                                    r,
                                                                    e,
                                                                  )
                                                                : Zn(
                                                                    u,
                                                                    () =>
                                                                      l(
                                                                        r,
                                                                        e,
                                                                      ),
                                                                  ),
                                                            ).pipe(
                                                              go(),
                                                            );
                                                          },
                                                        ),
                                                      ).pipe(Ui()),
                                                    ),
                                                  );
                                              return G(i).pipe(Ui());
                                            })(e, o.path, n),
                                            (function K3(e, t, n) {
                                              const r = t.routeConfig
                                                ? t.routeConfig
                                                    .canActivate
                                                : null;
                                              if (
                                                !r ||
                                                0 === r.length
                                              )
                                                return G(!0);
                                              const o = r.map(i =>
                                                GS(() => {
                                                  const s =
                                                      Ma(t) ?? n,
                                                    a = ji(i, s);
                                                  return Or(
                                                    (function B3(e) {
                                                      return (
                                                        e &&
                                                        Oa(
                                                          e.canActivate,
                                                        )
                                                      );
                                                    })(a)
                                                      ? a.canActivate(
                                                          t,
                                                          e,
                                                        )
                                                      : Zn(s, () =>
                                                          a(t, e),
                                                        ),
                                                  ).pipe(go());
                                                }),
                                              );
                                              return G(o).pipe(Ui());
                                            })(e, o.route, n),
                                          ),
                                        ),
                                        go(o => !0 !== o, !0),
                                      );
                                    })(r, i, e, t)
                                  : G(a),
                              ),
                              oe(a => ({ ...n, guardsResult: a })),
                            );
                      });
                    })(this.environmentInjector, c =>
                      this.events.next(c),
                    ),
                    Mt(c => {
                      if (
                        ((i.guardsResult = c.guardsResult),
                        c.guardsResult &&
                          'boolean' != typeof c.guardsResult)
                      )
                        throw Pl(0, c.guardsResult);
                      const u = new h3(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(
                          c.urlAfterRedirects,
                        ),
                        c.targetSnapshot,
                        !!c.guardsResult,
                      );
                      this.events.next(u);
                    }),
                    xr(
                      c =>
                        !!c.guardsResult ||
                        (this.cancelNavigationTransition(
                          c,
                          '',
                          en.GuardRejected,
                        ),
                        !1),
                    ),
                    tm(c => {
                      if (c.guards.canActivateChecks.length)
                        return G(c).pipe(
                          Mt(u => {
                            const l = new p3(
                              u.id,
                              this.urlSerializer.serialize(
                                u.extractedUrl,
                              ),
                              this.urlSerializer.serialize(
                                u.urlAfterRedirects,
                              ),
                              u.targetSnapshot,
                            );
                            this.events.next(l);
                          }),
                          ur(u => {
                            let l = !1;
                            return G(u).pipe(
                              (function Cz(e, t) {
                                return St(n => {
                                  const {
                                    targetSnapshot: r,
                                    guards: { canActivateChecks: o },
                                  } = n;
                                  if (!o.length) return G(n);
                                  const i = new Set(
                                      o.map(c => c.route),
                                    ),
                                    s = new Set();
                                  for (const c of i)
                                    if (!s.has(c))
                                      for (const u of kM(c)) s.add(u);
                                  let a = 0;
                                  return dt(s).pipe(
                                    Dl(c =>
                                      i.has(c)
                                        ? (function Ez(e, t, n, r) {
                                            const o = e.routeConfig,
                                              i = e._resolve;
                                            return (
                                              void 0 !== o?.title &&
                                                !wM(o) &&
                                                (i[Ea] = o.title),
                                              (function Dz(
                                                e,
                                                t,
                                                n,
                                                r,
                                              ) {
                                                const o = Vg(e);
                                                if (0 === o.length)
                                                  return G({});
                                                const i = {};
                                                return dt(o).pipe(
                                                  St(s =>
                                                    (function wz(
                                                      e,
                                                      t,
                                                      n,
                                                      r,
                                                    ) {
                                                      const o =
                                                          Ma(t) ?? r,
                                                        i = ji(e, o);
                                                      return Or(
                                                        i.resolve
                                                          ? i.resolve(
                                                              t,
                                                              n,
                                                            )
                                                          : Zn(
                                                              o,
                                                              () =>
                                                                i(
                                                                  t,
                                                                  n,
                                                                ),
                                                            ),
                                                      );
                                                    })(
                                                      e[s],
                                                      t,
                                                      n,
                                                      r,
                                                    ).pipe(
                                                      go(),
                                                      Mt(a => {
                                                        if (
                                                          a instanceof
                                                          Kg
                                                        )
                                                          throw Pl(
                                                            new bl(),
                                                            a,
                                                          );
                                                        i[s] = a;
                                                      }),
                                                    ),
                                                  ),
                                                  Pg(1),
                                                  (function PH(e) {
                                                    return oe(
                                                      () => e,
                                                    );
                                                  })(i),
                                                  Oi(s =>
                                                    AM(s)
                                                      ? Un
                                                      : Cl(s),
                                                  ),
                                                );
                                              })(i, e, t, r).pipe(
                                                oe(
                                                  s => (
                                                    (e._resolvedData =
                                                      s),
                                                    (e.data = Ol(
                                                      e,
                                                      e.parent,
                                                      n,
                                                    ).resolve),
                                                    null
                                                  ),
                                                ),
                                              )
                                            );
                                          })(c, r, e, t)
                                        : ((c.data = Ol(
                                            c,
                                            c.parent,
                                            e,
                                          ).resolve),
                                          G(void 0)),
                                    ),
                                    Mt(() => a++),
                                    Pg(1),
                                    St(c =>
                                      a === s.size ? G(n) : Un,
                                    ),
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              Mt({
                                next: () => (l = !0),
                                complete: () => {
                                  l ||
                                    this.cancelNavigationTransition(
                                      u,
                                      '',
                                      en.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          Mt(u => {
                            const l = new g3(
                              u.id,
                              this.urlSerializer.serialize(
                                u.extractedUrl,
                              ),
                              this.urlSerializer.serialize(
                                u.urlAfterRedirects,
                              ),
                              u.targetSnapshot,
                            );
                            this.events.next(l);
                          }),
                        );
                    }),
                    tm(c => {
                      const u = l => {
                        const d = [];
                        l.routeConfig?.loadComponent &&
                          !l.routeConfig._loadedComponent &&
                          d.push(
                            this.configLoader
                              .loadComponent(l.routeConfig)
                              .pipe(
                                Mt(f => {
                                  l.component = f;
                                }),
                                oe(() => {}),
                              ),
                          );
                        for (const f of l.children) d.push(...u(f));
                        return d;
                      };
                      return Og(u(c.targetSnapshot.root)).pipe(
                        El(null),
                        po(1),
                      );
                    }),
                    tm(() => this.afterPreactivation()),
                    ur(() => {
                      const {
                          currentSnapshot: c,
                          targetSnapshot: u,
                        } = i,
                        l = this.createViewTransition?.(
                          this.environmentInjector,
                          c.root,
                          u.root,
                        );
                      return l ? dt(l).pipe(oe(() => i)) : G(i);
                    }),
                    oe(c => {
                      const u = (function A3(e, t, n) {
                        const r = Na(
                          e,
                          t._root,
                          n ? n._root : void 0,
                        );
                        return new _M(r, t);
                      })(
                        n.routeReuseStrategy,
                        c.targetSnapshot,
                        c.currentRouterState,
                      );
                      return (
                        (this.currentTransition = i =
                          { ...c, targetRouterState: u }),
                        (this.currentNavigation.targetRouterState =
                          u),
                        i
                      );
                    }),
                    Mt(() => {
                      this.events.next(new zg());
                    }),
                    ((e, t, n, r) =>
                      oe(
                        o => (
                          new F3(
                            t,
                            o.targetRouterState,
                            o.currentRouterState,
                            n,
                            r,
                          ).activate(e),
                          o
                        ),
                      ))(
                      this.rootContexts,
                      n.routeReuseStrategy,
                      c => this.events.next(c),
                      this.inputBindingEnabled,
                    ),
                    po(1),
                    Mt({
                      next: c => {
                        (s = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new Fr(
                              c.id,
                              this.urlSerializer.serialize(
                                c.extractedUrl,
                              ),
                              this.urlSerializer.serialize(
                                c.urlAfterRedirects,
                              ),
                            ),
                          ),
                          this.titleStrategy?.updateTitle(
                            c.targetRouterState.snapshot,
                          ),
                          c.resolve(!0);
                      },
                      complete: () => {
                        s = !0;
                      },
                    }),
                    YS(
                      this.transitionAbortSubject.pipe(
                        Mt(c => {
                          throw c;
                        }),
                      ),
                    ),
                    Lg(() => {
                      !s &&
                        !a &&
                        this.cancelNavigationTransition(
                          i,
                          '',
                          en.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === i.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    Oi(c => {
                      if (((a = !0), MM(c)))
                        this.events.next(
                          new _o(
                            i.id,
                            this.urlSerializer.serialize(
                              i.extractedUrl,
                            ),
                            c.message,
                            c.cancellationCode,
                          ),
                        ),
                          (function x3(e) {
                            return MM(e) && yo(e.url);
                          })(c)
                            ? this.events.next(
                                new xl(
                                  c.url,
                                  c.navigationBehaviorOptions,
                                ),
                              )
                            : i.resolve(!1);
                      else {
                        const u = new Hg(
                          i.id,
                          this.urlSerializer.serialize(
                            i.extractedUrl,
                          ),
                          c,
                          i.targetSnapshot ?? void 0,
                        );
                        try {
                          const l = Zn(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(u),
                          );
                          if (l instanceof Kg) {
                            const {
                              message: d,
                              cancellationCode: f,
                            } = Pl(0, l);
                            this.events.next(
                              new _o(
                                i.id,
                                this.urlSerializer.serialize(
                                  i.extractedUrl,
                                ),
                                d,
                                f,
                              ),
                            ),
                              this.events.next(
                                new xl(
                                  l.redirectTo,
                                  l.navigationBehaviorOptions,
                                ),
                              );
                          } else {
                            this.events.next(u);
                            const d = n.errorHandler(c);
                            i.resolve(!!d);
                          }
                        } catch (l) {
                          this.options.resolveNavigationPromiseOnError
                            ? i.resolve(!1)
                            : i.reject(l);
                        }
                      }
                      return Un;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(n, r, o) {
            const i = new _o(
              n.id,
              this.urlSerializer.serialize(n.extractedUrl),
              r,
              o,
            );
            this.events.next(i), n.resolve(!1);
          }
          isUpdatingInternalState() {
            return (
              this.currentTransition?.extractedUrl.toString() !==
              this.currentTransition?.currentUrlTree.toString()
            );
          }
          isUpdatedBrowserUrl() {
            const n = this.urlHandlingStrategy.extract(
                this.urlSerializer.parse(this.location.path(!0)),
              ),
              r =
                this.currentNavigation?.targetBrowserUrl ??
                this.currentNavigation?.extractedUrl;
            return (
              n.toString() !== r?.toString() &&
              !this.currentNavigation?.extras.skipLocationChange
            );
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function Nz(e) {
        return e !== Sa;
      }
      let Rz = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => _(Oz),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class xz {
        shouldDetach(t) {
          return !1;
        }
        store(t, n) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, n) {
          return t.routeConfig === n.routeConfig;
        }
      }
      let Oz = (() => {
          class e extends xz {
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Xe(e)))(o || e);
              };
            })());
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        HM = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(Fz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        Fz = (() => {
          class e extends HM {
            constructor() {
              super(...arguments),
                (this.location = _(ga)),
                (this.urlSerializer = _(ki)),
                (this.options = _(Fa, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution ||
                  'replace'),
                (this.urlHandlingStrategy = _(rm)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new mo()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = CM(null)),
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
                : this.restoredState()?.ɵrouterPageId ??
                    this.currentPageId;
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
            registerNonRouterCurrentEntryChangeListener(n) {
              return this.location.subscribe(r => {
                'popstate' === r.type && n(r.url, r.state);
              });
            }
            handleRouterEvent(n, r) {
              if (n instanceof Nl)
                this.stateMemento = this.createStateMemento();
              else if (n instanceof Pi)
                this.rawUrlTree = r.initialUrl;
              else if (n instanceof mM) {
                if (
                  'eager' === this.urlUpdateStrategy &&
                  !r.extras.skipLocationChange
                ) {
                  const o = this.urlHandlingStrategy.merge(
                    r.finalUrl,
                    r.initialUrl,
                  );
                  this.setBrowserUrl(r.targetBrowserUrl ?? o, r);
                }
              } else
                n instanceof zg
                  ? ((this.currentUrlTree = r.finalUrl),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      r.finalUrl,
                      r.initialUrl,
                    )),
                    (this.routerState = r.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      !r.extras.skipLocationChange &&
                      this.setBrowserUrl(
                        r.targetBrowserUrl ?? this.rawUrlTree,
                        r,
                      ))
                  : n instanceof _o &&
                    (n.code === en.GuardRejected ||
                      n.code === en.NoDataFromResolver)
                  ? this.restoreHistory(r)
                  : n instanceof Hg
                  ? this.restoreHistory(r, !0)
                  : n instanceof Fr &&
                    ((this.lastSuccessfulId = n.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(n, r) {
              const o =
                n instanceof mo ? this.urlSerializer.serialize(n) : n;
              if (
                this.location.isCurrentPathEqualTo(o) ||
                r.extras.replaceUrl
              ) {
                const s = {
                  ...r.extras.state,
                  ...this.generateNgRouterState(
                    r.id,
                    this.browserPageId,
                  ),
                };
                this.location.replaceState(o, '', s);
              } else {
                const i = {
                  ...r.extras.state,
                  ...this.generateNgRouterState(
                    r.id,
                    this.browserPageId + 1,
                  ),
                };
                this.location.go(o, '', i);
              }
            }
            restoreHistory(n, r = !1) {
              if ('computed' === this.canceledNavigationResolution) {
                const i = this.currentPageId - this.browserPageId;
                0 !== i
                  ? this.location.historyGo(i)
                  : this.currentUrlTree === n.finalUrl &&
                    0 === i &&
                    (this.resetState(n),
                    this.resetUrlToCurrentUrlTree());
              } else
                'replace' === this.canceledNavigationResolution &&
                  (r && this.resetState(n),
                  this.resetUrlToCurrentUrlTree());
            }
            resetState(n) {
              (this.routerState = this.stateMemento.routerState),
                (this.currentUrlTree =
                  this.stateMemento.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n.finalUrl ?? this.rawUrlTree,
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(
                  this.lastSuccessfulId,
                  this.currentPageId,
                ),
              );
            }
            generateNgRouterState(n, r) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: n, ɵrouterPageId: r }
                : { navigationId: n };
            }
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Xe(e)))(o || e);
              };
            })());
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      var ka = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = 'COMPLETE'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.REDIRECTING = 2)] = 'REDIRECTING'),
          e
        );
      })(ka || {});
      function kz(e) {
        throw e;
      }
      const Pz = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        Lz = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let lr = (() => {
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
                (this.console = _(kb)),
                (this.stateManager = _(HM)),
                (this.options = _(Fa, { optional: !0 }) || {}),
                (this.pendingTasks = _(Xr)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = _($l)),
                (this.urlSerializer = _(ki)),
                (this.location = _(ga)),
                (this.urlHandlingStrategy = _(rm)),
                (this._events = new mt()),
                (this.errorHandler = this.options.errorHandler || kz),
                (this.navigated = !1),
                (this.routeReuseStrategy = _(Rz)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.config = _(Bl, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!_(kl, {
                  optional: !0,
                })),
                (this.eventsSubscription = new at()),
                this.resetConfig(this.config),
                this.navigationTransitions
                  .setupNavigations(
                    this,
                    this.currentUrlTree,
                    this.routerState,
                  )
                  .subscribe({
                    error: n => {
                      this.console.warn(n);
                    },
                  }),
                this.subscribeToNavigationEvents();
            }
            subscribeToNavigationEvents() {
              const n = this.navigationTransitions.events.subscribe(
                r => {
                  try {
                    const o =
                        this.navigationTransitions.currentTransition,
                      i =
                        this.navigationTransitions.currentNavigation;
                    if (null !== o && null !== i)
                      if (
                        (this.stateManager.handleRouterEvent(r, i),
                        r instanceof _o &&
                          r.code !== en.Redirect &&
                          r.code !== en.SupersededByNewNavigation)
                      )
                        this.navigated = !0;
                      else if (r instanceof Fr) this.navigated = !0;
                      else if (r instanceof xl) {
                        const s = r.navigationBehaviorOptions,
                          a = this.urlHandlingStrategy.merge(
                            r.url,
                            o.currentRawUrl,
                          ),
                          c = {
                            browserUrl: o.extras.browserUrl,
                            info: o.extras.info,
                            skipLocationChange:
                              o.extras.skipLocationChange,
                            replaceUrl:
                              o.extras.replaceUrl ||
                              'eager' === this.urlUpdateStrategy ||
                              Nz(o.source),
                            ...s,
                          };
                        this.scheduleNavigation(a, Sa, null, c, {
                          resolve: o.resolve,
                          reject: o.reject,
                          promise: o.promise,
                        });
                      }
                    (function jz(e) {
                      return !(e instanceof zg || e instanceof xl);
                    })(r) && this._events.next(r);
                  } catch (o) {
                    this.navigationTransitions.transitionAbortSubject.next(
                      o,
                    );
                  }
                },
              );
              this.eventsSubscription.add(n);
            }
            resetRootComponentType(n) {
              (this.routerState.root.component = n),
                (this.navigationTransitions.rootComponentType = n);
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                this.navigationTransitions.hasRequestedNavigation ||
                  this.navigateToSyncWithBrowser(
                    this.location.path(!0),
                    Sa,
                    this.stateManager.restoredState(),
                  );
            }
            setUpLocationChangeListener() {
              this.nonRouterCurrentEntryChangeSubscription ??=
                this.stateManager.registerNonRouterCurrentEntryChangeListener(
                  (n, r) => {
                    setTimeout(() => {
                      this.navigateToSyncWithBrowser(
                        n,
                        'popstate',
                        r,
                      );
                    }, 0);
                  },
                );
            }
            navigateToSyncWithBrowser(n, r, o) {
              const i = { replaceUrl: !0 },
                s = o?.navigationId ? o : null;
              if (o) {
                const c = { ...o };
                delete c.navigationId,
                  delete c.ɵrouterPageId,
                  0 !== Object.keys(c).length && (i.state = c);
              }
              const a = this.parseUrl(n);
              this.scheduleNavigation(a, r, s, i);
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.navigationTransitions.currentNavigation;
            }
            get lastSuccessfulNavigation() {
              return this.navigationTransitions
                .lastSuccessfulNavigation;
            }
            resetConfig(n) {
              (this.config = n.map(nm)), (this.navigated = !1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.navigationTransitions.complete(),
                this.nonRouterCurrentEntryChangeSubscription &&
                  (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
                  (this.nonRouterCurrentEntryChangeSubscription =
                    void 0)),
                (this.disposed = !0),
                this.eventsSubscription.unsubscribe();
            }
            createUrlTree(n, r = {}) {
              const {
                  relativeTo: o,
                  queryParams: i,
                  fragment: s,
                  queryParamsHandling: a,
                  preserveFragment: c,
                } = r,
                u = c ? this.currentUrlTree.fragment : s;
              let d,
                l = null;
              switch (a) {
                case 'merge':
                  l = { ...this.currentUrlTree.queryParams, ...i };
                  break;
                case 'preserve':
                  l = this.currentUrlTree.queryParams;
                  break;
                default:
                  l = i || null;
              }
              null !== l && (l = this.removeEmptyProps(l));
              try {
                d = uM(
                  o ? o.snapshot : this.routerState.snapshot.root,
                );
              } catch {
                ('string' != typeof n[0] || '/' !== n[0][0]) &&
                  (n = []),
                  (d = this.currentUrlTree.root);
              }
              return lM(d, n, l, u ?? null);
            }
            navigateByUrl(n, r = { skipLocationChange: !1 }) {
              const o = yo(n) ? n : this.parseUrl(n),
                i = this.urlHandlingStrategy.merge(
                  o,
                  this.rawUrlTree,
                );
              return this.scheduleNavigation(i, Sa, null, r);
            }
            navigate(n, r = { skipLocationChange: !1 }) {
              return (
                (function Vz(e) {
                  for (let t = 0; t < e.length; t++)
                    if (null == e[t]) throw new E(4008, !1);
                })(n),
                this.navigateByUrl(this.createUrlTree(n, r), r)
              );
            }
            serializeUrl(n) {
              return this.urlSerializer.serialize(n);
            }
            parseUrl(n) {
              try {
                return this.urlSerializer.parse(n);
              } catch {
                return this.urlSerializer.parse('/');
              }
            }
            isActive(n, r) {
              let o;
              if (
                ((o =
                  !0 === r ? { ...Pz } : !1 === r ? { ...Lz } : r),
                yo(n))
              )
                return eM(this.currentUrlTree, n, o);
              const i = this.parseUrl(n);
              return eM(this.currentUrlTree, i, o);
            }
            removeEmptyProps(n) {
              return Object.entries(n).reduce(
                (r, [o, i]) => (null != i && (r[o] = i), r),
                {},
              );
            }
            scheduleNavigation(n, r, o, i, s) {
              if (this.disposed) return Promise.resolve(!1);
              let a, c, u;
              s
                ? ((a = s.resolve), (c = s.reject), (u = s.promise))
                : (u = new Promise((d, f) => {
                    (a = d), (c = f);
                  }));
              const l = this.pendingTasks.add();
              return (
                (function zM(e, t) {
                  e.events
                    .pipe(
                      xr(
                        n =>
                          n instanceof Fr ||
                          n instanceof _o ||
                          n instanceof Hg ||
                          n instanceof Pi,
                      ),
                      oe(n =>
                        n instanceof Fr || n instanceof Pi
                          ? ka.COMPLETE
                          : n instanceof _o &&
                            (n.code === en.Redirect ||
                              n.code === en.SupersededByNewNavigation)
                          ? ka.REDIRECTING
                          : ka.FAILED,
                      ),
                      xr(n => n !== ka.REDIRECTING),
                      po(1),
                    )
                    .subscribe(() => {
                      t();
                    });
                })(this, () => {
                  queueMicrotask(() => this.pendingTasks.remove(l));
                }),
                this.navigationTransitions.handleNavigationRequest({
                  source: r,
                  restoredState: o,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  rawUrl: n,
                  extras: i,
                  resolve: a,
                  reject: c,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                u.catch(d => Promise.reject(d))
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        Pa = (() => {
          class e {
            constructor(n, r, o, i, s, a) {
              (this.router = n),
                (this.route = r),
                (this.tabIndexAttribute = o),
                (this.renderer = i),
                (this.el = s),
                (this.locationStrategy = a),
                (this.href = null),
                (this.onChanges = new mt()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const c = s.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === c || 'area' === c),
                this.isAnchorElement
                  ? (this.subscription = n.events.subscribe(u => {
                      u instanceof Fr && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            setTabIndexIfNotOnNativeEl(n) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', n);
            }
            ngOnChanges(n) {
              this.isAnchorElement && this.updateHref(),
                this.onChanges.next(this);
            }
            set routerLink(n) {
              null == n
                ? ((this.routerLinkInput = null),
                  this.setTabIndexIfNotOnNativeEl(null))
                : ((this.routerLinkInput =
                    yo(n) || Array.isArray(n) ? n : [n]),
                  this.setTabIndexIfNotOnNativeEl('0'));
            }
            onClick(n, r, o, i, s) {
              const a = this.urlTree;
              return (
                !!(
                  null === a ||
                  (this.isAnchorElement &&
                    (0 !== n ||
                      r ||
                      o ||
                      i ||
                      s ||
                      ('string' == typeof this.target &&
                        '_self' != this.target)))
                ) ||
                (this.router.navigateByUrl(a, {
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
              const n = this.urlTree;
              this.href =
                null !== n && this.locationStrategy
                  ? this.locationStrategy?.prepareExternalUrl(
                      this.router.serializeUrl(n),
                    )
                  : null;
              const r =
                null === this.href
                  ? null
                  : (function rC(e, t, n) {
                      return (function PO(e, t) {
                        return ('src' === t &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === t &&
                            ('base' === e || 'link' === e))
                          ? nC
                          : oh;
                      })(
                        t,
                        n,
                      )(e);
                    })(
                      this.href,
                      this.el.nativeElement.tagName.toLowerCase(),
                      'href',
                    );
              this.applyAttributeValue('href', r);
            }
            applyAttributeValue(n, r) {
              const o = this.renderer,
                i = this.el.nativeElement;
              null !== r
                ? o.setAttribute(i, n, r)
                : o.removeAttribute(i, n);
            }
            get urlTree() {
              return null === this.routerLinkInput
                ? null
                : yo(this.routerLinkInput)
                ? this.routerLinkInput
                : this.router.createUrlTree(this.routerLinkInput, {
                    relativeTo:
                      void 0 !== this.relativeTo
                        ? this.relativeTo
                        : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(
                w(lr),
                w(Vi),
                (function ms(e) {
                  return (function sx(e, t) {
                    if ('class' === t) return e.classes;
                    if ('style' === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                      const r = n.length;
                      let o = 0;
                      for (; o < r; ) {
                        const i = n[o];
                        if (Qv(i)) break;
                        if (0 === i) o += 2;
                        else if ('number' == typeof i)
                          for (
                            o++;
                            o < r && 'string' == typeof n[o];

                          )
                            o++;
                        else {
                          if (i === t) return n[o + 1];
                          o += 2;
                        }
                      }
                    }
                    return null;
                  })(fe(), e);
                })('tabindex'),
                w(nr),
                w(Qt),
                w(Ni),
              );
            });
            static #t = (this.ɵdir = B({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (r, o) {
                1 & r &&
                  K('click', function (s) {
                    return o.onClick(
                      s.button,
                      s.ctrlKey,
                      s.shiftKey,
                      s.altKey,
                      s.metaKey,
                    );
                  }),
                  2 & r && Pn('target', o.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                info: 'info',
                relativeTo: 'relativeTo',
                preserveFragment: [
                  2,
                  'preserveFragment',
                  'preserveFragment',
                  Ai,
                ],
                skipLocationChange: [
                  2,
                  'skipLocationChange',
                  'skipLocationChange',
                  Ai,
                ],
                replaceUrl: [2, 'replaceUrl', 'replaceUrl', Ai],
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [rD, nn],
            }));
          }
          return e;
        })();
      const om = new D('');
      let GM = (() => {
        class e {
          constructor(n, r, o, i, s = {}) {
            (this.urlSerializer = n),
              (this.transitions = r),
              (this.viewportScroller = o),
              (this.zone = i),
              (this.options = s),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (s.scrollPositionRestoration ||= 'disabled'),
              (s.anchorScrolling ||= 'disabled');
          }
          init() {
            'disabled' !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration(
                'manual',
              ),
              (this.routerEventsSubscription =
                this.createScrollEvents()),
              (this.scrollEventsSubscription =
                this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe(n => {
              n instanceof Nl
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = n.navigationTrigger),
                  (this.restoredId = n.restoredState
                    ? n.restoredState.navigationId
                    : 0))
                : n instanceof Fr
                ? ((this.lastId = n.id),
                  this.scheduleScrollEvent(
                    n,
                    this.urlSerializer.parse(n.urlAfterRedirects)
                      .fragment,
                  ))
                : n instanceof Pi &&
                  n.code === Rl.IgnoredSameUrlNavigation &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(
                    n,
                    this.urlSerializer.parse(n.url).fragment,
                  ));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe(n => {
              n instanceof vM &&
                (n.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' ===
                        this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(
                        n.position,
                      )
                  : n.anchor &&
                    'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(n.anchor)
                  : 'disabled' !==
                      this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(n, r) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new vM(
                      n,
                      'popstate' === this.lastSource
                        ? this.store[this.restoredId]
                        : null,
                      r,
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
          static #e = (this.ɵfac = function (r) {
            !(function TC() {
              throw new Error('invalid');
            })();
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function qM(e) {
        return e.routerState.root;
      }
      function Hn(e, t) {
        return { ɵkind: e, ɵproviders: t };
      }
      function WM() {
        const e = _(Ge);
        return t => {
          const n = e.get(En);
          if (t !== n.components[0]) return;
          const r = e.get(lr),
            o = e.get(ZM);
          1 === e.get(im) && r.initialNavigation(),
            e.get(QM, null, X.Optional)?.setUpPreloading(),
            e.get(om, null, X.Optional)?.init(),
            r.resetRootComponentType(n.componentTypes[0]),
            o.closed || (o.next(), o.complete(), o.unsubscribe());
        };
      }
      const ZM = new D('', { factory: () => new mt() }),
        im = new D('', { providedIn: 'root', factory: () => 1 }),
        QM = new D('');
      let Yz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-main']],
              standalone: !0,
              features: [ee],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && ve(0, 'router-outlet');
              },
              dependencies: [Aa],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        KM = (() => {
          class e {
            constructor(n) {
              this.router = n;
            }
            navigate(n) {
              this.router.navigate([n]);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(lr));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function XM(e) {
        return Array.isArray(e) ? e : [e];
      }
      class Jz extends at {
        constructor(t, n) {
          super();
        }
        schedule(t, n = 0) {
          return this;
        }
      }
      const Hl = {
        setInterval(e, t, ...n) {
          const { delegate: r } = Hl;
          return r?.setInterval
            ? r.setInterval(e, t, ...n)
            : setInterval(e, t, ...n);
        },
        clearInterval(e) {
          const { delegate: t } = Hl;
          return (t?.clearInterval || clearInterval)(e);
        },
        delegate: void 0,
      };
      class JM extends Jz {
        constructor(t, n) {
          super(t, n),
            (this.scheduler = t),
            (this.work = n),
            (this.pending = !1);
        }
        schedule(t, n = 0) {
          var r;
          if (this.closed) return this;
          this.state = t;
          const o = this.id,
            i = this.scheduler;
          return (
            null != o && (this.id = this.recycleAsyncId(i, o, n)),
            (this.pending = !0),
            (this.delay = n),
            (this.id =
              null !== (r = this.id) && void 0 !== r
                ? r
                : this.requestAsyncId(i, this.id, n)),
            this
          );
        }
        requestAsyncId(t, n, r = 0) {
          return Hl.setInterval(t.flush.bind(t, this), r);
        }
        recycleAsyncId(t, n, r = 0) {
          if (null != r && this.delay === r && !1 === this.pending)
            return n;
          null != n && Hl.clearInterval(n);
        }
        execute(t, n) {
          if (this.closed)
            return new Error('executing a cancelled action');
          this.pending = !1;
          const r = this._execute(t, n);
          if (r) return r;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(
              this.scheduler,
              this.id,
              null,
            ));
        }
        _execute(t, n) {
          let o,
            r = !1;
          try {
            this.work(t);
          } catch (i) {
            (r = !0),
              (o =
                i || new Error('Scheduled action threw falsy error'));
          }
          if (r) return this.unsubscribe(), o;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: t, scheduler: n } = this,
              { actions: r } = n;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              Ja(r, this),
              null != t &&
                (this.id = this.recycleAsyncId(n, t, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
      const e0 = {
        now: () => (e0.delegate || Date).now(),
        delegate: void 0,
      };
      class La {
        constructor(t, n = La.now) {
          (this.schedulerActionCtor = t), (this.now = n);
        }
        schedule(t, n = 0, r) {
          return new this.schedulerActionCtor(this, t).schedule(r, n);
        }
      }
      La.now = e0.now;
      class t0 extends La {
        constructor(t, n = La.now) {
          super(t, n), (this.actions = []), (this._active = !1);
        }
        flush(t) {
          const { actions: n } = this;
          if (this._active) return void n.push(t);
          let r;
          this._active = !0;
          do {
            if ((r = t.execute(t.state, t.delay))) break;
          } while ((t = n.shift()));
          if (((this._active = !1), r)) {
            for (; (t = n.shift()); ) t.unsubscribe();
            throw r;
          }
        }
      }
      const eG = new t0(JM);
      let sm;
      try {
        sm = typeof Intl < 'u' && Intl.v8BreakIterator;
      } catch {
        sm = !1;
      }
      let nG = (() => {
        class e {
          constructor(n) {
            (this._platformId = n),
              (this.isBrowser = this._platformId
                ? rS(this._platformId)
                : 'object' == typeof document && !!document),
              (this.EDGE =
                this.isBrowser &&
                /(edge)/i.test(navigator.userAgent)),
              (this.TRIDENT =
                this.isBrowser &&
                /(msie|trident)/i.test(navigator.userAgent)),
              (this.BLINK =
                this.isBrowser &&
                !(!window.chrome && !sm) &&
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
                this.isBrowser &&
                /(firefox|minefield)/i.test(navigator.userAgent)),
              (this.ANDROID =
                this.isBrowser &&
                /android/i.test(navigator.userAgent) &&
                !this.TRIDENT),
              (this.SAFARI =
                this.isBrowser &&
                /safari/i.test(navigator.userAgent) &&
                this.WEBKIT);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(_r));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const r0 = new Set();
      let Eo,
        iG = (() => {
          class e {
            constructor(n, r) {
              (this._platform = n),
                (this._nonce = r),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : aG);
            }
            matchMedia(n) {
              return (
                (this._platform.WEBKIT || this._platform.BLINK) &&
                  (function sG(e, t) {
                    if (!r0.has(e))
                      try {
                        Eo ||
                          ((Eo = document.createElement('style')),
                          t && Eo.setAttribute('nonce', t),
                          Eo.setAttribute('type', 'text/css'),
                          document.head.appendChild(Eo)),
                          Eo.sheet &&
                            (Eo.sheet.insertRule(
                              `@media ${e} {body{ }}`,
                              0,
                            ),
                            r0.add(e));
                      } catch (n) {
                        console.error(n);
                      }
                  })(n, this._nonce),
                this._matchMedia(n)
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(nG), A(Uf, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function aG(e) {
        return {
          matches: 'all' === e || '' === e,
          media: e,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let cG = (() => {
        class e {
          constructor(n, r) {
            (this._mediaMatcher = n),
              (this._zone = r),
              (this._queries = new Map()),
              (this._destroySubject = new mt());
          }
          ngOnDestroy() {
            this._destroySubject.next(),
              this._destroySubject.complete();
          }
          isMatched(n) {
            return o0(XM(n)).some(
              o => this._registerQuery(o).mql.matches,
            );
          }
          observe(n) {
            let i = Og(
              o0(XM(n)).map(s => this._registerQuery(s).observable),
            );
            return (
              (i = _l(
                i.pipe(po(1)),
                i.pipe(
                  (function Xz(e) {
                    return xr((t, n) => e <= n);
                  })(1),
                  (function tG(e, t = eG) {
                    return Be((n, r) => {
                      let o = null,
                        i = null,
                        s = null;
                      const a = () => {
                        if (o) {
                          o.unsubscribe(), (o = null);
                          const u = i;
                          (i = null), r.next(u);
                        }
                      };
                      function c() {
                        const u = s + e,
                          l = t.now();
                        if (l < u)
                          return (
                            (o = this.schedule(void 0, u - l)),
                            void r.add(o)
                          );
                        a();
                      }
                      n.subscribe(
                        Oe(
                          r,
                          u => {
                            (i = u),
                              (s = t.now()),
                              o || ((o = t.schedule(c, e)), r.add(o));
                          },
                          () => {
                            a(), r.complete();
                          },
                          void 0,
                          () => {
                            i = o = null;
                          },
                        ),
                      );
                    });
                  })(0),
                ),
              )),
              i.pipe(
                oe(s => {
                  const a = { matches: !1, breakpoints: {} };
                  return (
                    s.forEach(({ matches: c, query: u }) => {
                      (a.matches = a.matches || c),
                        (a.breakpoints[u] = c);
                    }),
                    a
                  );
                }),
              )
            );
          }
          _registerQuery(n) {
            if (this._queries.has(n)) return this._queries.get(n);
            const r = this._mediaMatcher.matchMedia(n),
              i = {
                observable: new ke(s => {
                  const a = c => this._zone.run(() => s.next(c));
                  return (
                    r.addListener(a),
                    () => {
                      r.removeListener(a);
                    }
                  );
                }).pipe(
                  WS(r),
                  oe(({ matches: s }) => ({ query: n, matches: s })),
                  YS(this._destroySubject),
                ),
                mql: r,
              };
            return this._queries.set(n, i), i;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(iG), A(ae));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function o0(e) {
        return e
          .map(t => t.split(','))
          .reduce((t, n) => t.concat(n))
          .map(t => t.trim());
      }
      const Tt_XSmall = '(max-width: 599.98px)',
        Tt_Small = '(min-width: 600px) and (max-width: 959.98px)',
        Tt_Medium = '(min-width: 960px) and (max-width: 1279.98px)',
        Tt_Large = '(min-width: 1280px) and (max-width: 1919.98px)',
        Tt_XLarge = '(min-width: 1920px)';
      var At = (function (e) {
        return (
          (e.XSmall = 'XSmall'),
          (e.Small = 'Small'),
          (e.Medium = 'Medium'),
          (e.Large = 'Large'),
          (e.XLarge = 'XLarge'),
          e
        );
      })(At || {});
      let s0 = (() => {
          class e {
            constructor(n) {
              (this.observer = n),
                (this.observers = new Map()),
                this.getBreakpointsObserve().subscribe(r => {
                  r.breakpoints[Tt_XSmall]
                    ? this.notifyObservers({ breakpoint: At.XSmall })
                    : r.breakpoints[Tt_Small]
                    ? this.notifyObservers({ breakpoint: At.Small })
                    : r.breakpoints[Tt_Medium]
                    ? this.notifyObservers({ breakpoint: At.Medium })
                    : r.breakpoints[Tt_Large]
                    ? this.notifyObservers({ breakpoint: At.Large })
                    : r.breakpoints[Tt_XLarge] &&
                      this.notifyObservers({ breakpoint: At.XLarge });
                });
            }
            addObserver(n) {
              if (this.observers.has(n))
                throw new Error('Object is already registered!');
              this.observers.set(n, n),
                this.getBreakpointsObserve()
                  .subscribe(r => {
                    r.breakpoints[Tt_XSmall]
                      ? n.update({ breakpoint: At.XSmall })
                      : r.breakpoints[Tt_Small]
                      ? n.update({ breakpoint: At.Small })
                      : r.breakpoints[Tt_Medium]
                      ? n.update({ breakpoint: At.Medium })
                      : r.breakpoints[Tt_Large]
                      ? n.update({ breakpoint: At.Large })
                      : r.breakpoints[Tt_XLarge] &&
                        n.update({ breakpoint: At.XLarge });
                  })
                  .unsubscribe();
            }
            removeObserver(n) {
              if (!this.observers.has(n))
                throw new Error('Object is not registered!');
              this.observers.delete(n);
            }
            notifyObservers(n) {
              this.observers.forEach(r => {
                r.update(n);
              });
            }
            getBreakpointsObserve() {
              return this.observer.observe([
                Tt_XSmall,
                Tt_Small,
                Tt_Medium,
                Tt_Large,
                Tt_XLarge,
              ]);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(cG));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        a0 = (() => {
          class e {
            constructor(n, r) {
              (this._renderer = n),
                (this._elementRef = r),
                (this.onChange = o => {}),
                (this.onTouched = () => {});
            }
            setProperty(n, r) {
              this._renderer.setProperty(
                this._elementRef.nativeElement,
                n,
                r,
              );
            }
            registerOnTouched(n) {
              this.onTouched = n;
            }
            registerOnChange(n) {
              this.onChange = n;
            }
            setDisabledState(n) {
              this.setProperty('disabled', n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(nr), w(Qt));
            });
            static #t = (this.ɵdir = B({ type: e }));
          }
          return e;
        })(),
        Do = (() => {
          class e extends a0 {
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Xe(e)))(o || e);
              };
            })());
            static #t = (this.ɵdir = B({ type: e, features: [he] }));
          }
          return e;
        })();
      const zn = new D(''),
        dG = { provide: zn, useExisting: Ce(() => Gl), multi: !0 },
        hG = new D('');
      let Gl = (() => {
        class e extends a0 {
          constructor(n, r, o) {
            super(n, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function fG() {
                  const e = Nr() ? Nr().getUserAgent() : '';
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(n) {
            this.setProperty('value', n ?? '');
          }
          _handleInput(n) {
            (!this._compositionMode ||
              (this._compositionMode && !this._composing)) &&
              this.onChange(n);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(n) {
            (this._composing = !1),
              this._compositionMode && this.onChange(n);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(nr), w(Qt), w(hG, 8));
          });
          static #t = (this.ɵdir = B({
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
            hostBindings: function (r, o) {
              1 & r &&
                K('input', function (s) {
                  return o._handleInput(s.target.value);
                })('blur', function () {
                  return o.onTouched();
                })('compositionstart', function () {
                  return o._compositionStart();
                })('compositionend', function (s) {
                  return o._compositionEnd(s.target.value);
                });
            },
            features: [xe([dG]), he],
          }));
        }
        return e;
      })();
      function kr(e) {
        return (
          null == e ||
          (('string' == typeof e || Array.isArray(e)) &&
            0 === e.length)
        );
      }
      function u0(e) {
        return null != e && 'number' == typeof e.length;
      }
      const ft = new D(''),
        Pr = new D(''),
        pG =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class ln {
        static min(t) {
          return (function l0(e) {
            return t => {
              if (kr(t.value) || kr(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n < e
                ? { min: { min: e, actual: t.value } }
                : null;
            };
          })(t);
        }
        static max(t) {
          return (function d0(e) {
            return t => {
              if (kr(t.value) || kr(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n > e
                ? { max: { max: e, actual: t.value } }
                : null;
            };
          })(t);
        }
        static required(t) {
          return (function f0(e) {
            return kr(e.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function h0(e) {
            return !0 === e.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function p0(e) {
            return kr(e.value) || pG.test(e.value)
              ? null
              : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function g0(e) {
            return t =>
              kr(t.value) || !u0(t.value)
                ? null
                : t.value.length < e
                ? {
                    minlength: {
                      requiredLength: e,
                      actualLength: t.value.length,
                    },
                  }
                : null;
          })(t);
        }
        static maxLength(t) {
          return (function m0(e) {
            return t =>
              u0(t.value) && t.value.length > e
                ? {
                    maxlength: {
                      requiredLength: e,
                      actualLength: t.value.length,
                    },
                  }
                : null;
          })(t);
        }
        static pattern(t) {
          return (function v0(e) {
            if (!e) return ql;
            let t, n;
            return (
              'string' == typeof e
                ? ((n = ''),
                  '^' !== e.charAt(0) && (n += '^'),
                  (n += e),
                  '$' !== e.charAt(e.length - 1) && (n += '$'),
                  (t = new RegExp(n)))
                : ((n = e.toString()), (t = e)),
              r => {
                if (kr(r.value)) return null;
                const o = r.value;
                return t.test(o)
                  ? null
                  : {
                      pattern: { requiredPattern: n, actualValue: o },
                    };
              }
            );
          })(t);
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          return w0(t);
        }
        static composeAsync(t) {
          return b0(t);
        }
      }
      function ql(e) {
        return null;
      }
      function y0(e) {
        return null != e;
      }
      function _0(e) {
        return ua(e) ? dt(e) : e;
      }
      function C0(e) {
        let t = {};
        return (
          e.forEach(n => {
            t = null != n ? { ...t, ...n } : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function E0(e, t) {
        return t.map(n => n(e));
      }
      function D0(e) {
        return e.map(t =>
          (function gG(e) {
            return !e.validate;
          })(t)
            ? t
            : n => t.validate(n),
        );
      }
      function w0(e) {
        if (!e) return null;
        const t = e.filter(y0);
        return 0 == t.length
          ? null
          : function (n) {
              return C0(E0(n, t));
            };
      }
      function cm(e) {
        return null != e ? w0(D0(e)) : null;
      }
      function b0(e) {
        if (!e) return null;
        const t = e.filter(y0);
        return 0 == t.length
          ? null
          : function (n) {
              return (function uG(...e) {
                const t = xg(e),
                  { args: n, keys: r } = BS(e),
                  o = new ke(i => {
                    const { length: s } = n;
                    if (!s) return void i.complete();
                    const a = new Array(s);
                    let c = s,
                      u = s;
                    for (let l = 0; l < s; l++) {
                      let d = !1;
                      bn(n[l]).subscribe(
                        Oe(
                          i,
                          f => {
                            d || ((d = !0), u--), (a[l] = f);
                          },
                          () => c--,
                          void 0,
                          () => {
                            (!c || !d) &&
                              (u || i.next(r ? HS(r, a) : a),
                              i.complete());
                          },
                        ),
                      );
                    }
                  });
                return t ? o.pipe($S(t)) : o;
              })(E0(n, t).map(_0)).pipe(oe(C0));
            };
      }
      function um(e) {
        return null != e ? b0(D0(e)) : null;
      }
      function I0(e, t) {
        return null === e
          ? [t]
          : Array.isArray(e)
          ? [...e, t]
          : [e, t];
      }
      function S0(e) {
        return e._rawValidators;
      }
      function M0(e) {
        return e._rawAsyncValidators;
      }
      function lm(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function Wl(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      function T0(e, t) {
        const n = lm(t);
        return (
          lm(e).forEach(o => {
            Wl(n, o) || n.push(o);
          }),
          n
        );
      }
      function A0(e, t) {
        return lm(t).filter(n => !Wl(e, n));
      }
      class N0 {
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
        _setValidators(t) {
          (this._rawValidators = t || []),
            (this._composedValidatorFn = cm(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = um(
              this._rawAsyncValidators,
            ));
        }
        get validator() {
          return this._composedValidatorFn || null;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn || null;
        }
        _registerOnDestroy(t) {
          this._onDestroyCallbacks.push(t);
        }
        _invokeOnDestroyCallbacks() {
          this._onDestroyCallbacks.forEach(t => t()),
            (this._onDestroyCallbacks = []);
        }
        reset(t = void 0) {
          this.control && this.control.reset(t);
        }
        hasError(t, n) {
          return !!this.control && this.control.hasError(t, n);
        }
        getError(t, n) {
          return this.control ? this.control.getError(t, n) : null;
        }
      }
      class Nt extends N0 {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Lr extends N0 {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class R0 {
        constructor(t) {
          this._cd = t;
        }
        get isTouched() {
          return (
            this._cd?.control?._touched?.(),
            !!this._cd?.control?.touched
          );
        }
        get isUntouched() {
          return !!this._cd?.control?.untouched;
        }
        get isPristine() {
          return (
            this._cd?.control?._pristine?.(),
            !!this._cd?.control?.pristine
          );
        }
        get isDirty() {
          return !!this._cd?.control?.dirty;
        }
        get isValid() {
          return (
            this._cd?.control?._status?.(), !!this._cd?.control?.valid
          );
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
      let x0 = (() => {
          class e extends R0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(Lr, 2));
            });
            static #t = (this.ɵdir = B({
              type: e,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (r, o) {
                2 & r &&
                  Nu('ng-untouched', o.isUntouched)(
                    'ng-touched',
                    o.isTouched,
                  )('ng-pristine', o.isPristine)(
                    'ng-dirty',
                    o.isDirty,
                  )('ng-valid', o.isValid)('ng-invalid', o.isInvalid)(
                    'ng-pending',
                    o.isPending,
                  );
              },
              features: [he],
            }));
          }
          return e;
        })(),
        O0 = (() => {
          class e extends R0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(Nt, 10));
            });
            static #t = (this.ɵdir = B({
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
              hostBindings: function (r, o) {
                2 & r &&
                  Nu('ng-untouched', o.isUntouched)(
                    'ng-touched',
                    o.isTouched,
                  )('ng-pristine', o.isPristine)(
                    'ng-dirty',
                    o.isDirty,
                  )('ng-valid', o.isValid)('ng-invalid', o.isInvalid)(
                    'ng-pending',
                    o.isPending,
                  )('ng-submitted', o.isSubmitted);
              },
              features: [he],
            }));
          }
          return e;
        })();
      const Ua = 'VALID',
        Ql = 'INVALID',
        Hi = 'PENDING',
        Ba = 'DISABLED';
      class zi {}
      class k0 extends zi {
        constructor(t, n) {
          super(), (this.value = t), (this.source = n);
        }
      }
      class hm extends zi {
        constructor(t, n) {
          super(), (this.pristine = t), (this.source = n);
        }
      }
      class pm extends zi {
        constructor(t, n) {
          super(), (this.touched = t), (this.source = n);
        }
      }
      class Yl extends zi {
        constructor(t, n) {
          super(), (this.status = t), (this.source = n);
        }
      }
      class CG extends zi {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      class EG extends zi {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      function gm(e) {
        return (Kl(e) ? e.validators : e) || null;
      }
      function mm(e, t) {
        return (Kl(t) ? t.asyncValidators : e) || null;
      }
      function Kl(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function P0(e, t, n) {
        const r = e.controls;
        if (!(t ? Object.keys(r) : r).length) throw new E(1e3, '');
        if (!r[n]) throw new E(1001, '');
      }
      function L0(e, t, n) {
        e._forEachChild((r, o) => {
          if (void 0 === n[o]) throw new E(1002, '');
        });
      }
      class Xl {
        constructor(t, n) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = null),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this._status = fo(() => this.statusReactive())),
            (this.statusReactive = br(void 0)),
            (this._pristine = fo(() => this.pristineReactive())),
            (this.pristineReactive = br(!0)),
            (this._touched = fo(() => this.touchedReactive())),
            (this.touchedReactive = br(!1)),
            (this._events = new mt()),
            (this.events = this._events.asObservable()),
            (this._onDisabledChange = []),
            this._assignValidators(t),
            this._assignAsyncValidators(n);
        }
        get validator() {
          return this._composedValidatorFn;
        }
        set validator(t) {
          this._rawValidators = this._composedValidatorFn = t;
        }
        get asyncValidator() {
          return this._composedAsyncValidatorFn;
        }
        set asyncValidator(t) {
          this._rawAsyncValidators = this._composedAsyncValidatorFn =
            t;
        }
        get parent() {
          return this._parent;
        }
        get status() {
          return jn(this.statusReactive);
        }
        set status(t) {
          jn(() => this.statusReactive.set(t));
        }
        get valid() {
          return this.status === Ua;
        }
        get invalid() {
          return this.status === Ql;
        }
        get pending() {
          return this.status == Hi;
        }
        get disabled() {
          return this.status === Ba;
        }
        get enabled() {
          return this.status !== Ba;
        }
        get pristine() {
          return jn(this.pristineReactive);
        }
        set pristine(t) {
          jn(() => this.pristineReactive.set(t));
        }
        get dirty() {
          return !this.pristine;
        }
        get touched() {
          return jn(this.touchedReactive);
        }
        set touched(t) {
          jn(() => this.touchedReactive.set(t));
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
        setValidators(t) {
          this._assignValidators(t);
        }
        setAsyncValidators(t) {
          this._assignAsyncValidators(t);
        }
        addValidators(t) {
          this.setValidators(T0(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(T0(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(A0(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(A0(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return Wl(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return Wl(this._rawAsyncValidators, t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          const n = !1 === this.touched;
          this.touched = !0;
          const r = t.sourceControl ?? this;
          this._parent &&
            !t.onlySelf &&
            this._parent.markAsTouched({ ...t, sourceControl: r }),
            n &&
              !1 !== t.emitEvent &&
              this._events.next(new pm(!0, r));
        }
        markAllAsTouched(t = {}) {
          this.markAsTouched({
            onlySelf: !0,
            emitEvent: t.emitEvent,
            sourceControl: this,
          }),
            this._forEachChild(n => n.markAllAsTouched(t));
        }
        markAsUntouched(t = {}) {
          const n = !0 === this.touched;
          (this.touched = !1), (this._pendingTouched = !1);
          const r = t.sourceControl ?? this;
          this._forEachChild(o => {
            o.markAsUntouched({
              onlySelf: !0,
              emitEvent: t.emitEvent,
              sourceControl: r,
            });
          }),
            this._parent &&
              !t.onlySelf &&
              this._parent._updateTouched(t, r),
            n &&
              !1 !== t.emitEvent &&
              this._events.next(new pm(!1, r));
        }
        markAsDirty(t = {}) {
          const n = !0 === this.pristine;
          this.pristine = !1;
          const r = t.sourceControl ?? this;
          this._parent &&
            !t.onlySelf &&
            this._parent.markAsDirty({ ...t, sourceControl: r }),
            n &&
              !1 !== t.emitEvent &&
              this._events.next(new hm(!1, r));
        }
        markAsPristine(t = {}) {
          const n = !1 === this.pristine;
          (this.pristine = !0), (this._pendingDirty = !1);
          const r = t.sourceControl ?? this;
          this._forEachChild(o => {
            o.markAsPristine({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
          }),
            this._parent &&
              !t.onlySelf &&
              this._parent._updatePristine(t, r),
            n &&
              !1 !== t.emitEvent &&
              this._events.next(new hm(!0, r));
        }
        markAsPending(t = {}) {
          this.status = Hi;
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new Yl(this.status, n)),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.markAsPending({ ...t, sourceControl: n });
        }
        disable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = Ba),
            (this.errors = null),
            this._forEachChild(o => {
              o.disable({ ...t, onlySelf: !0 });
            }),
            this._updateValue();
          const r = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new k0(this.value, r)),
            this._events.next(new Yl(this.status, r)),
            this.valueChanges.emit(this.value),
            this.statusChanges.emit(this.status)),
            this._updateAncestors(
              { ...t, skipPristineCheck: n },
              this,
            ),
            this._onDisabledChange.forEach(o => o(!0));
        }
        enable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = Ua),
            this._forEachChild(r => {
              r.enable({ ...t, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors(
              { ...t, skipPristineCheck: n },
              this,
            ),
            this._onDisabledChange.forEach(r => r(!1));
        }
        _updateAncestors(t, n) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck ||
              this._parent._updatePristine({}, n),
            this._parent._updateTouched({}, n));
        }
        setParent(t) {
          this._parent = t;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(t = {}) {
          if (
            (this._setInitialStatus(),
            this._updateValue(),
            this.enabled)
          ) {
            const r = this._cancelExistingSubscription();
            (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === Ua || this.status === Hi) &&
                this._runAsyncValidator(r, t.emitEvent);
          }
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new k0(this.value, n)),
            this._events.next(new Yl(this.status, n)),
            this.valueChanges.emit(this.value),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.updateValueAndValidity({
                ...t,
                sourceControl: n,
              });
        }
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild(n => n._updateTreeValidity(t)),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? Ba : Ua;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t, n) {
          if (this.asyncValidator) {
            (this.status = Hi),
              (this._hasOwnPendingAsyncValidator = {
                emitEvent: !1 !== n,
              });
            const r = _0(this.asyncValidator(this));
            this._asyncValidationSubscription = r.subscribe(o => {
              (this._hasOwnPendingAsyncValidator = null),
                this.setErrors(o, {
                  emitEvent: n,
                  shouldHaveEmitted: t,
                });
            });
          }
        }
        _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
            const t =
              this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
            return (this._hasOwnPendingAsyncValidator = null), t;
          }
          return !1;
        }
        setErrors(t, n = {}) {
          (this.errors = t),
            this._updateControlsErrors(
              !1 !== n.emitEvent,
              this,
              n.shouldHaveEmitted,
            );
        }
        get(t) {
          let n = t;
          return null == n ||
            (Array.isArray(n) || (n = n.split('.')), 0 === n.length)
            ? null
            : n.reduce((r, o) => r && r._find(o), this);
        }
        getError(t, n) {
          const r = n ? this.get(n) : this;
          return r && r.errors ? r.errors[t] : null;
        }
        hasError(t, n) {
          return !!this.getError(t, n);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t, n, r) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            (t || r) && this._events.next(new Yl(this.status, n)),
            this._parent &&
              this._parent._updateControlsErrors(t, n, r);
        }
        _initObservables() {
          (this.valueChanges = new Z()),
            (this.statusChanges = new Z());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Ba
            : this.errors
            ? Ql
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Hi)
            ? Hi
            : this._anyControlsHaveStatus(Ql)
            ? Ql
            : Ua;
        }
        _anyControlsHaveStatus(t) {
          return this._anyControls(n => n.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls(t => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls(t => t.touched);
        }
        _updatePristine(t, n) {
          const r = !this._anyControlsDirty(),
            o = this.pristine !== r;
          (this.pristine = r),
            this._parent &&
              !t.onlySelf &&
              this._parent._updatePristine(t, n),
            o && this._events.next(new hm(this.pristine, n));
        }
        _updateTouched(t = {}, n) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new pm(this.touched, n)),
            this._parent &&
              !t.onlySelf &&
              this._parent._updateTouched(t, n);
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          Kl(t) &&
            null != t.updateOn &&
            (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return (
            !t &&
            !(!this._parent || !this._parent.dirty) &&
            !this._parent._anyControlsDirty()
          );
        }
        _find(t) {
          return null;
        }
        _assignValidators(t) {
          (this._rawValidators = Array.isArray(t) ? t.slice() : t),
            (this._composedValidatorFn = (function DG(e) {
              return Array.isArray(e) ? cm(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(t) {
          (this._rawAsyncValidators = Array.isArray(t)
            ? t.slice()
            : t),
            (this._composedAsyncValidatorFn = (function wG(e) {
              return Array.isArray(e) ? um(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class $a extends Xl {
        constructor(t, n, r) {
          super(gm(n), mm(r, n)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(n),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        registerControl(t, n) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = n),
              n.setParent(this),
              n._registerOnCollectionChange(this._onCollectionChange),
              n);
        }
        addControl(t, n, r = {}) {
          this.registerControl(t, n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        removeControl(t, n = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        setControl(t, n, r = {}) {
          this.controls[t] &&
            this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            n && this.registerControl(t, n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        contains(t) {
          return (
            this.controls.hasOwnProperty(t) &&
            this.controls[t].enabled
          );
        }
        setValue(t, n = {}) {
          L0(this, 0, t),
            Object.keys(t).forEach(r => {
              P0(this, !0, r),
                this.controls[r].setValue(t[r], {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          null != t &&
            (Object.keys(t).forEach(r => {
              const o = this.controls[r];
              o &&
                o.patchValue(t[r], {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n));
        }
        reset(t = {}, n = {}) {
          this._forEachChild((r, o) => {
            r.reset(t ? t[o] : null, {
              onlySelf: !0,
              emitEvent: n.emitEvent,
            });
          }),
            this._updatePristine(n, this),
            this._updateTouched(n, this),
            this.updateValueAndValidity(n);
        }
        getRawValue() {
          return this._reduceChildren(
            {},
            (t, n, r) => ((t[r] = n.getRawValue()), t),
          );
        }
        _syncPendingControls() {
          let t = this._reduceChildren(
            !1,
            (n, r) => !!r._syncPendingControls() || n,
          );
          return (
            t && this.updateValueAndValidity({ onlySelf: !0 }), t
          );
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(n => {
            const r = this.controls[n];
            r && t(r, n);
          });
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this),
              t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          for (const [n, r] of Object.entries(this.controls))
            if (this.contains(n) && t(r)) return !0;
          return !1;
        }
        _reduceValue() {
          return this._reduceChildren(
            {},
            (n, r, o) => (
              (r.enabled || this.disabled) && (n[o] = r.value), n
            ),
          );
        }
        _reduceChildren(t, n) {
          let r = t;
          return (
            this._forEachChild((o, i) => {
              r = n(r, o, i);
            }),
            r
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls))
            if (this.controls[t].enabled) return !1;
          return (
            Object.keys(this.controls).length > 0 || this.disabled
          );
        }
        _find(t) {
          return this.controls.hasOwnProperty(t)
            ? this.controls[t]
            : null;
        }
      }
      class V0 extends $a {}
      const Gi = new D('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => Jl,
        }),
        Jl = 'always';
      function Ha(e, t, n = Jl) {
        vm(e, t),
          t.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === n) &&
            t.valueAccessor.setDisabledState?.(e.disabled),
          (function IG(e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && j0(e, t);
            });
          })(e, t),
          (function MG(e, t) {
            const n = (r, o) => {
              t.valueAccessor.writeValue(r),
                o && t.viewToModelUpdate(r);
            };
            e.registerOnChange(n),
              t._registerOnDestroy(() => {
                e._unregisterOnChange(n);
              });
          })(e, t),
          (function SG(e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && j0(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          (function bG(e, t) {
            if (t.valueAccessor.setDisabledState) {
              const n = r => {
                t.valueAccessor.setDisabledState(r);
              };
              e.registerOnDisabledChange(n),
                t._registerOnDestroy(() => {
                  e._unregisterOnDisabledChange(n);
                });
            }
          })(e, t);
      }
      function td(e, t, n = !0) {
        const r = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(r),
          t.valueAccessor.registerOnTouched(r)),
          rd(e, t),
          e &&
            (t._invokeOnDestroyCallbacks(),
            e._registerOnCollectionChange(() => {}));
      }
      function nd(e, t) {
        e.forEach(n => {
          n.registerOnValidatorChange &&
            n.registerOnValidatorChange(t);
        });
      }
      function vm(e, t) {
        const n = S0(e);
        null !== t.validator
          ? e.setValidators(I0(n, t.validator))
          : 'function' == typeof n && e.setValidators([n]);
        const r = M0(e);
        null !== t.asyncValidator
          ? e.setAsyncValidators(I0(r, t.asyncValidator))
          : 'function' == typeof r && e.setAsyncValidators([r]);
        const o = () => e.updateValueAndValidity();
        nd(t._rawValidators, o), nd(t._rawAsyncValidators, o);
      }
      function rd(e, t) {
        let n = !1;
        if (null !== e) {
          if (null !== t.validator) {
            const o = S0(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.validator);
              i.length !== o.length && ((n = !0), e.setValidators(i));
            }
          }
          if (null !== t.asyncValidator) {
            const o = M0(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.asyncValidator);
              i.length !== o.length &&
                ((n = !0), e.setAsyncValidators(i));
            }
          }
        }
        const r = () => {};
        return (
          nd(t._rawValidators, r), nd(t._rawAsyncValidators, r), n
        );
      }
      function j0(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function $0(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function H0(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const Vr = class extends Xl {
        constructor(t = null, n, r) {
          super(gm(n), mm(r, n)),
            (this.defaultValue = null),
            (this._onChange = []),
            (this._pendingChange = !1),
            this._applyFormState(t),
            this._setUpdateStrategy(n),
            this._initObservables(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            }),
            Kl(n) &&
              (n.nonNullable || n.initialValueIsDefault) &&
              (this.defaultValue = H0(t) ? t.value : t);
        }
        setValue(t, n = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== n.emitModelToViewChange &&
              this._onChange.forEach(r =>
                r(this.value, !1 !== n.emitViewToModelChange),
              ),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          this.setValue(t, n);
        }
        reset(t = this.defaultValue, n = {}) {
          this._applyFormState(t),
            this.markAsPristine(n),
            this.markAsUntouched(n),
            this.setValue(this.value, n),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _unregisterOnChange(t) {
          $0(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          $0(this._onDisabledChange, t);
        }
        _forEachChild(t) {}
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
        _applyFormState(t) {
          H0(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      };
      Promise.resolve();
      let Z0 = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵdir = B({
            type: e,
            selectors: [
              ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
            ],
            hostAttrs: ['novalidate', ''],
          }));
        }
        return e;
      })();
      const Dm = new D(''),
        UG = { provide: Lr, useExisting: Ce(() => wm) };
      let wm = (() => {
        class e extends Lr {
          set isDisabled(n) {}
          static #e = (this._ngModelWarningSentOnce = !1);
          constructor(n, r, o, i, s) {
            super(),
              (this._ngModelWarningConfig = i),
              (this.callSetDisabledState = s),
              (this.update = new Z()),
              (this._ngModelWarningSent = !1),
              this._setValidators(n),
              this._setAsyncValidators(r),
              (this.valueAccessor = (function Cm(e, t) {
                if (!t) return null;
                let n, r, o;
                return (
                  Array.isArray(t),
                  t.forEach(i => {
                    i.constructor === Gl
                      ? (n = i)
                      : (function NG(e) {
                          return (
                            Object.getPrototypeOf(e.constructor) ===
                            Do
                          );
                        })(i)
                      ? (r = i)
                      : (o = i);
                  }),
                  o || r || n || null
                );
              })(0, o));
          }
          ngOnChanges(n) {
            if (this._isControlChanged(n)) {
              const r = n.form.previousValue;
              r && td(r, this, !1),
                Ha(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function _m(e, t) {
              if (!e.hasOwnProperty('model')) return !1;
              const n = e.model;
              return (
                !!n.isFirstChange() || !Object.is(t, n.currentValue)
              );
            })(n, this.viewModel) &&
              (this.form.setValue(this.model),
              (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && td(this.form, this, !1);
          }
          get path() {
            return [];
          }
          get control() {
            return this.form;
          }
          viewToModelUpdate(n) {
            (this.viewModel = n), this.update.emit(n);
          }
          _isControlChanged(n) {
            return n.hasOwnProperty('form');
          }
          static #t = (this.ɵfac = function (r) {
            return new (r || e)(
              w(ft, 10),
              w(Pr, 10),
              w(zn, 10),
              w(Dm, 8),
              w(Gi, 8),
            );
          });
          static #n = (this.ɵdir = B({
            type: e,
            selectors: [['', 'formControl', '']],
            inputs: {
              form: [0, 'formControl', 'form'],
              isDisabled: [0, 'disabled', 'isDisabled'],
              model: [0, 'ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            exportAs: ['ngForm'],
            features: [xe([UG]), he, nn],
          }));
        }
        return e;
      })();
      const BG = { provide: Nt, useExisting: Ce(() => od) };
      let od = (() => {
          class e extends Nt {
            get submitted() {
              return jn(this._submittedReactive);
            }
            set submitted(n) {
              this._submittedReactive.set(n);
            }
            constructor(n, r, o) {
              super(),
                (this.callSetDisabledState = o),
                (this._submitted = fo(() =>
                  this._submittedReactive(),
                )),
                (this._submittedReactive = br(!1)),
                (this._onCollectionChange = () =>
                  this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new Z()),
                this._setValidators(n),
                this._setAsyncValidators(r);
            }
            ngOnChanges(n) {
              this._checkFormPresent(),
                n.hasOwnProperty('form') &&
                  (this._updateValidators(),
                  this._updateDomValue(),
                  this._updateRegistrations(),
                  (this._oldForm = this.form));
            }
            ngOnDestroy() {
              this.form &&
                (rd(this.form, this),
                this.form._onCollectionChange ===
                  this._onCollectionChange &&
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
            addControl(n) {
              const r = this.form.get(n.path);
              return (
                Ha(r, n, this.callSetDisabledState),
                r.updateValueAndValidity({ emitEvent: !1 }),
                this.directives.push(n),
                r
              );
            }
            getControl(n) {
              return this.form.get(n.path);
            }
            removeControl(n) {
              td(n.control || null, n, !1),
                (function RG(e, t) {
                  const n = e.indexOf(t);
                  n > -1 && e.splice(n, 1);
                })(this.directives, n);
            }
            addFormGroup(n) {
              this._setUpFormContainer(n);
            }
            removeFormGroup(n) {
              this._cleanUpFormContainer(n);
            }
            getFormGroup(n) {
              return this.form.get(n.path);
            }
            addFormArray(n) {
              this._setUpFormContainer(n);
            }
            removeFormArray(n) {
              this._cleanUpFormContainer(n);
            }
            getFormArray(n) {
              return this.form.get(n.path);
            }
            updateModel(n, r) {
              this.form.get(n.path).setValue(r);
            }
            onSubmit(n) {
              return (
                this._submittedReactive.set(!0),
                (function B0(e, t) {
                  e._syncPendingControls(),
                    t.forEach(n => {
                      const r = n.control;
                      'submit' === r.updateOn &&
                        r._pendingChange &&
                        (n.viewToModelUpdate(r._pendingValue),
                        (r._pendingChange = !1));
                    });
                })(this.form, this.directives),
                this.ngSubmit.emit(n),
                this.form._events.next(new CG(this.control)),
                'dialog' === n?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(n = void 0) {
              this.form.reset(n),
                this._submittedReactive.set(!1),
                this.form._events.next(new EG(this.form));
            }
            _updateDomValue() {
              this.directives.forEach(n => {
                const r = n.control,
                  o = this.form.get(n.path);
                r !== o &&
                  (td(r || null, n),
                  (e => e instanceof Vr)(o) &&
                    (Ha(o, n, this.callSetDisabledState),
                    (n.control = o)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(n) {
              const r = this.form.get(n.path);
              (function U0(e, t) {
                vm(e, t);
              })(r, n),
                r.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(n) {
              if (this.form) {
                const r = this.form.get(n.path);
                r &&
                  (function TG(e, t) {
                    return rd(e, t);
                  })(r, n) &&
                  r.updateValueAndValidity({ emitEvent: !1 });
              }
            }
            _updateRegistrations() {
              this.form._registerOnCollectionChange(
                this._onCollectionChange,
              ),
                this._oldForm &&
                  this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
              vm(this.form, this),
                this._oldForm && rd(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(ft, 10), w(Pr, 10), w(Gi, 8));
            });
            static #t = (this.ɵdir = B({
              type: e,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (r, o) {
                1 & r &&
                  K('submit', function (s) {
                    return o.onSubmit(s);
                  })('reset', function () {
                    return o.onReset();
                  });
              },
              inputs: { form: [0, 'formGroup', 'form'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [xe([BG]), he, nn],
            }));
          }
          return e;
        })(),
        i8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = ns({ type: e }));
            static #n = (this.ɵinj = Ao({}));
          }
          return e;
        })();
      class dT extends Xl {
        constructor(t, n, r) {
          super(gm(n), mm(r, n)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(n),
            this._setUpControls(),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: !!this.asyncValidator,
            });
        }
        at(t) {
          return this.controls[this._adjustIndex(t)];
        }
        push(t, n = {}) {
          this.controls.push(t),
            this._registerControl(t),
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        insert(t, n, r = {}) {
          this.controls.splice(t, 0, n),
            this._registerControl(n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent });
        }
        removeAt(t, n = {}) {
          let r = this._adjustIndex(t);
          r < 0 && (r = 0),
            this.controls[r] &&
              this.controls[r]._registerOnCollectionChange(() => {}),
            this.controls.splice(r, 1),
            this.updateValueAndValidity({ emitEvent: n.emitEvent });
        }
        setControl(t, n, r = {}) {
          let o = this._adjustIndex(t);
          o < 0 && (o = 0),
            this.controls[o] &&
              this.controls[o]._registerOnCollectionChange(() => {}),
            this.controls.splice(o, 1),
            n &&
              (this.controls.splice(o, 0, n),
              this._registerControl(n)),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, n = {}) {
          L0(this, 0, t),
            t.forEach((r, o) => {
              P0(this, !1, o),
                this.at(o).setValue(r, {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n);
        }
        patchValue(t, n = {}) {
          null != t &&
            (t.forEach((r, o) => {
              this.at(o) &&
                this.at(o).patchValue(r, {
                  onlySelf: !0,
                  emitEvent: n.emitEvent,
                });
            }),
            this.updateValueAndValidity(n));
        }
        reset(t = [], n = {}) {
          this._forEachChild((r, o) => {
            r.reset(t[o], { onlySelf: !0, emitEvent: n.emitEvent });
          }),
            this._updatePristine(n, this),
            this._updateTouched(n, this),
            this.updateValueAndValidity(n);
        }
        getRawValue() {
          return this.controls.map(t => t.getRawValue());
        }
        clear(t = {}) {
          this.controls.length < 1 ||
            (this._forEachChild(n =>
              n._registerOnCollectionChange(() => {}),
            ),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _adjustIndex(t) {
          return t < 0 ? t + this.length : t;
        }
        _syncPendingControls() {
          let t = this.controls.reduce(
            (n, r) => !!r._syncPendingControls() || n,
            !1,
          );
          return (
            t && this.updateValueAndValidity({ onlySelf: !0 }), t
          );
        }
        _forEachChild(t) {
          this.controls.forEach((n, r) => {
            t(n, r);
          });
        }
        _updateValue() {
          this.value = this.controls
            .filter(t => t.enabled || this.disabled)
            .map(t => t.value);
        }
        _anyControls(t) {
          return this.controls.some(n => n.enabled && t(n));
        }
        _setUpControls() {
          this._forEachChild(t => this._registerControl(t));
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this),
            t._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(t) {
          return this.at(t) ?? null;
        }
      }
      function fT(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let s8 = (() => {
          class e {
            constructor() {
              this.useNonNullable = !1;
            }
            get nonNullable() {
              const n = new e();
              return (n.useNonNullable = !0), n;
            }
            group(n, r = null) {
              const o = this._reduceControls(n);
              let i = {};
              return (
                fT(r)
                  ? (i = r)
                  : null !== r &&
                    ((i.validators = r.validator),
                    (i.asyncValidators = r.asyncValidator)),
                new $a(o, i)
              );
            }
            record(n, r = null) {
              const o = this._reduceControls(n);
              return new V0(o, r);
            }
            control(n, r, o) {
              let i = {};
              return this.useNonNullable
                ? (fT(r)
                    ? (i = r)
                    : ((i.validators = r), (i.asyncValidators = o)),
                  new Vr(n, { ...i, nonNullable: !0 }))
                : new Vr(n, r, o);
            }
            array(n, r, o) {
              const i = n.map(s => this._createControl(s));
              return new dT(i, r, o);
            }
            _reduceControls(n) {
              const r = {};
              return (
                Object.keys(n).forEach(o => {
                  r[o] = this._createControl(n[o]);
                }),
                r
              );
            }
            _createControl(n) {
              return n instanceof Vr || n instanceof Xl
                ? n
                : Array.isArray(n)
                ? this.control(
                    n[0],
                    n.length > 1 ? n[1] : null,
                    n.length > 2 ? n[2] : null,
                  )
                : this.control(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        hT = (() => {
          class e {
            static withConfig(n) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: Dm,
                    useValue:
                      n.warnOnNgModelWithFormControl ?? 'always',
                  },
                  {
                    provide: Gi,
                    useValue: n.callSetDisabledState ?? Jl,
                  },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = ns({ type: e }));
            static #n = (this.ɵinj = Ao({ imports: [i8] }));
          }
          return e;
        })();
      const a8 = ['*'];
      let id = (() => {
        class e {
          buildStyles() {
            return {
              flexDirection: this.flexDirection,
              alignItems: this.alignItems,
              justifyContent: this.justifyContent,
              gap: this.gap,
              minHeight: this.minHeight,
            };
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = J({
            type: e,
            selectors: [['lib-flex']],
            inputs: {
              flexDirection: 'flexDirection',
              alignItems: 'alignItems',
              justifyContent: 'justifyContent',
              gap: 'gap',
              minHeight: 'minHeight',
            },
            standalone: !0,
            features: [ee],
            ngContentSelectors: a8,
            decls: 2,
            vars: 1,
            consts: [[1, 'flex', 3, 'ngStyle']],
            template: function (r, o) {
              1 & r && (wi(), U(0, 'div', 0), bi(1), L()),
                2 & r && M('ngStyle', o.buildStyles());
            },
            dependencies: [eS],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}',
            ],
          }));
        }
        return e;
      })();
      function c8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'p', 2),
            K('click', function () {
              return Ft(n), kt(te().onClick());
            }),
            rr(2),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te();
          x(),
            Mr('margin', n.margin),
            M('ngClass', n.textColor),
            x(),
            Tr(' ', n.value, ' ');
        }
      }
      function u8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'p', 3),
            K('click', function () {
              return Ft(n), kt(te().onClick());
            }),
            rr(2),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te();
          x(),
            Mr('margin', n.margin),
            M('ngClass', n.textColor),
            x(),
            Tr(' ', n.value, ' ');
        }
      }
      function l8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'h1', 4),
            K('click', function () {
              return Ft(n), kt(te().onClick());
            }),
            rr(2),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te();
          x(),
            Mr('margin', n.margin),
            M('ngClass', n.textColor),
            x(),
            Tr(' ', n.value, ' ');
        }
      }
      function d8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'h2', 5),
            K('click', function () {
              return Ft(n), kt(te().onClick());
            }),
            rr(2),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te();
          x(),
            Mr('margin', n.margin),
            M('ngClass', n.textColor),
            x(),
            Tr(' ', n.value, ' ');
        }
      }
      function f8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'h3', 6),
            K('click', function () {
              return Ft(n), kt(te().onClick());
            }),
            rr(2),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te();
          x(),
            Mr('margin', n.margin),
            M('ngClass', n.textColor),
            x(),
            Tr(' ', n.value, ' ');
        }
      }
      let Mn = (() => {
        class e {
          constructor() {
            (this.type = 'paragraph'),
              (this.textColor = 'text__default'),
              (this.clickEvent = new Z());
          }
          onClick() {
            this.clickEvent.emit();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = J({
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
            features: [ee],
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
            template: function (r, o) {
              1 & r &&
                (Me(0, 0),
                sn(1, c8, 3, 4, 'ng-container', 1)(
                  2,
                  u8,
                  3,
                  4,
                  'ng-container',
                  1,
                )(3, l8, 3, 4, 'ng-container', 1)(
                  4,
                  d8,
                  3,
                  4,
                  'ng-container',
                  1,
                )(5, f8, 3, 4, 'ng-container', 1),
                Te()),
                2 & r &&
                  (M('ngSwitch', o.type),
                  x(),
                  M('ngSwitchCase', 'tiny'),
                  x(),
                  M('ngSwitchCase', 'paragraph'),
                  x(),
                  M('ngSwitchCase', 'header1'),
                  x(),
                  M('ngSwitchCase', 'header2'),
                  x(),
                  M('ngSwitchCase', 'header3'));
            },
            dependencies: [dl, fg, ll, XI],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.text[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-style:normal;margin:0}.text__default[_ngcontent-%COMP%]{color:#454545}.text__primary[_ngcontent-%COMP%]{color:#f1f1f1}.text__secondary[_ngcontent-%COMP%]{color:#ccc}.text__tertiary[_ngcontent-%COMP%]{color:#7a7a7a}.text__accent[_ngcontent-%COMP%]{color:#4e31aa}.text__error[_ngcontent-%COMP%]{color:#e23636}.text__warning[_ngcontent-%COMP%]{color:#edb95e}.text__success[_ngcontent-%COMP%]{color:#448623}.text__info[_ngcontent-%COMP%]{color:#415058}.text__tiny[_ngcontent-%COMP%]{font-size:.9em}.text__paragraph[_ngcontent-%COMP%]{font-size:1em}.text__header1[_ngcontent-%COMP%]{font-size:2em}.text__header2[_ngcontent-%COMP%]{font-size:1.5em}.text__header3[_ngcontent-%COMP%]{font-size:1em}',
            ],
          }));
        }
        return e;
      })();
      const h8 = ['self'];
      function p8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'lib-text', 3),
            K('clickEvent', function () {
              return Ft(n), kt(te().onClick());
            }),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te();
          x(),
            M('value', n.control.label.value)(
              'textColor',
              n.textColor,
            );
        }
      }
      let g8 = (() => {
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
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = J({
            type: e,
            selectors: [['lib-input']],
            viewQuery: function (r, o) {
              if ((1 & r && ra(h8, 5), 2 & r)) {
                let i;
                Ii((i = Si())) && (o.self = i.first);
              }
            },
            inputs: { form: 'form', control: 'control' },
            standalone: !0,
            features: [ee],
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
            template: function (r, o) {
              if (1 & r) {
                const i = Xt();
                sn(0, p8, 2, 2, 'ng-container', 1),
                  U(1, 'input', 2, 0),
                  K('focus', function () {
                    return Ft(i), kt(o.onFocus());
                  })('blur', function () {
                    return Ft(i), kt(o.onBlur());
                  }),
                  L();
              }
              2 & r &&
                (M('ngIf', o.control.label.isVisible),
                x(),
                M('value', o.control.input.defaultValue)(
                  'type',
                  o.control.input.type,
                )('placeholder', o.control.input.placeholder)(
                  'formControl',
                  o.form,
                ));
            },
            dependencies: [dl, va, hT, Gl, x0, wm, Mn],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.input[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #ccc;color:#454545;font-size:1em;background-color:transparent;outline:none;width:100%}.input[_ngcontent-%COMP%]:focus{border:1px solid #4e31aa;color:#4e31aa}',
            ],
          }));
        }
        return e;
      })();
      const m8 = ['*'];
      let Am = (() => {
          class e {
            constructor() {
              (this.isSubmit = !1),
                (this.clickEvent = new Z()),
                (this.mouseEnterEvent = new Z()),
                (this.mouseLeaveEvent = new Z());
            }
            onClick() {
              this.control.setValue(!0),
                !this.isSubmit && this.clickEvent.emit();
            }
            onMouseEnter() {
              this.mouseEnterEvent.emit();
            }
            onMouseLeave() {
              this.mouseLeaveEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-button']],
              inputs: { control: 'control', isSubmit: 'isSubmit' },
              outputs: {
                clickEvent: 'clickEvent',
                mouseEnterEvent: 'mouseEnterEvent',
                mouseLeaveEvent: 'mouseLeaveEvent',
              },
              standalone: !0,
              features: [ee],
              ngContentSelectors: m8,
              decls: 2,
              vars: 1,
              consts: [
                [
                  1,
                  'button',
                  3,
                  'click',
                  'mouseenter',
                  'mouseleave',
                  'type',
                ],
              ],
              template: function (r, o) {
                1 & r &&
                  (wi(),
                  U(0, 'button', 0),
                  K('click', function () {
                    return o.onClick();
                  })('mouseenter', function () {
                    return o.onMouseEnter();
                  })('mouseleave', function () {
                    return o.onMouseLeave();
                  }),
                  bi(1),
                  L()),
                  2 & r &&
                    M('type', o.isSubmit ? 'submit' : 'button');
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.button[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #4e31aa;background-color:#4e31aa;cursor:pointer;outline:none;width:100%}.button[_ngcontent-%COMP%]:focus{outline-offset:3px;outline:1px solid #4e31aa}',
              ],
            }));
          }
          return e;
        })(),
        v8 = (() => {
          class e {
            constructor() {
              this.clickEvent = new Z();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-button-text']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 3,
              consts: [
                [3, 'clickEvent', 'control', 'isSubmit'],
                [
                  'textColor',
                  'text__primary',
                  'type',
                  'header3',
                  3,
                  'value',
                ],
              ],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-button', 0),
                  K('clickEvent', function () {
                    return o.onClickEvent();
                  }),
                  ve(1, 'lib-text', 1),
                  L()),
                  2 & r &&
                    (M('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    x(),
                    M('value', o.control.label));
              },
              dependencies: [Am, Mn],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        pT = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-icon']],
              inputs: { src: 'src', alt: 'alt' },
              standalone: !0,
              features: [ee],
              decls: 1,
              vars: 2,
              consts: [[1, 'icon', 3, 'src', 'alt']],
              template: function (r, o) {
                1 & r && ve(0, 'img', 0),
                  2 & r && M('src', o.src, oh)('alt', o.alt);
              },
              styles: [
                '[_nghost-%COMP%]{display:contents}.icon[_ngcontent-%COMP%]{display:block;height:100%}',
              ],
            }));
          }
          return e;
        })(),
        y8 = (() => {
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
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-button-icon']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ee],
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
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-button', 0),
                  K('clickEvent', function () {
                    return o.onClickEvent();
                  })('mouseEnterEvent', function () {
                    return o.onMouseEnterEvent();
                  })('mouseLeaveEvent', function () {
                    return o.onMouseLeaveEvent();
                  }),
                  ve(1, 'lib-icon', 1),
                  L()),
                  2 & r &&
                    (M('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    x(),
                    M('src', o.control.icon)('alt', o.control.alt));
              },
              dependencies: [Am, pT],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function _8(e, t) {
        if ((1 & e && (Me(0), ve(1, 'lib-text', 4), Te()), 2 & e)) {
          const n = te();
          x(), M('value', n.control.tip);
        }
      }
      let C8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-link']],
              inputs: { form: 'form', control: 'control' },
              standalone: !0,
              features: [ee],
              decls: 4,
              vars: 3,
              consts: [
                ['flexDirection', 'row', 'gap', '0.25rem'],
                [4, 'ngIf'],
                [1, 'link', 3, 'routerLink'],
                [
                  'type',
                  'tiny',
                  'textColor',
                  'text__accent',
                  3,
                  'value',
                ],
                [
                  'type',
                  'tiny',
                  'textColor',
                  'text__info',
                  3,
                  'value',
                ],
              ],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-flex', 0),
                  sn(1, _8, 2, 1, 'ng-container', 1),
                  U(2, 'a', 2),
                  ve(3, 'lib-text', 3),
                  L()()),
                  2 & r &&
                    (x(),
                    M('ngIf', '' !== o.control.tip),
                    x(),
                    M('routerLink', o.control.path),
                    x(),
                    M('value', o.control.label));
              },
              dependencies: [va, Mn, Pa, id],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}',
              ],
            }));
          }
          return e;
        })(),
        E8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-error']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'error'],
                [
                  'type',
                  'tiny',
                  'textColor',
                  'text__error',
                  3,
                  'value',
                ],
              ],
              template: function (r, o) {
                1 & r && (U(0, 'div', 0), ve(1, 'lib-text', 1), L()),
                  2 & r && (x(), M('value', o.value));
              },
              dependencies: [Mn],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.error[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(226,54,54,.2509803922);background-color:#e2363640}',
              ],
            }));
          }
          return e;
        })();
      var me = (function (e) {
        return (
          (e.input = 'input'),
          (e.buttonText = 'buttonText'),
          (e.buttonIcon = 'buttonIcon'),
          (e.buttonLink = 'buttonLink'),
          (e.link = 'link'),
          (e.text = 'text'),
          e
        );
      })(me || {});
      let D8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-success']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'success'],
                [
                  'type',
                  'tiny',
                  'textColor',
                  'text__success',
                  3,
                  'value',
                ],
              ],
              template: function (r, o) {
                1 & r && (U(0, 'div', 0), ve(1, 'lib-text', 1), L()),
                  2 & r && (x(), M('value', o.value));
              },
              dependencies: [Mn],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.success[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(68,134,35,.2509803922);background-color:#44862340}',
              ],
            }));
          }
          return e;
        })(),
        w8 = (() => {
          class e {
            constructor() {
              this.clickEvent = new Z();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-button-link']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ee],
              decls: 3,
              vars: 3,
              consts: [
                [3, 'routerLink'],
                [3, 'clickEvent', 'control'],
                [
                  'textColor',
                  'text__primary',
                  'type',
                  'header3',
                  3,
                  'value',
                ],
              ],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'a', 0)(1, 'lib-button', 1),
                  K('clickEvent', function () {
                    return o.onClickEvent();
                  }),
                  ve(2, 'lib-text', 2),
                  L()()),
                  2 & r &&
                    (M('routerLink', o.control.path),
                    x(),
                    M('control', o.form),
                    x(),
                    M('value', o.control.label));
              },
              dependencies: [Pa, Am, Mn],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function b8(e, t) {
        if ((1 & e && (Me(0), ve(1, 'lib-input', 6), Te()), 2 & e)) {
          const n = te().$implicit,
            r = te();
          x(), M('form', r.getFormControl(n.id))('control', n);
        }
      }
      function I8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'lib-button-text', 7),
            K('clickEvent', function () {
              return Ft(n), kt(te(2).onSubmit());
            }),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te().$implicit,
            r = te();
          x(), M('form', r.getFormControl(n.id))('control', n);
        }
      }
      function S8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'lib-button-icon', 7),
            K('clickEvent', function () {
              return Ft(n), kt(te(2).onSubmit());
            }),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te().$implicit,
            r = te();
          x(), M('form', r.getFormControl(n.id))('control', n);
        }
      }
      function M8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'lib-button-link', 7),
            K('clickEvent', function () {
              return Ft(n), kt(te(2).onSubmit());
            }),
            L(),
            Te();
        }
        if (2 & e) {
          const n = te().$implicit,
            r = te();
          x(), M('form', r.getFormControl(n.id))('control', n);
        }
      }
      function T8(e, t) {
        if ((1 & e && (Me(0), ve(1, 'lib-link', 6), Te()), 2 & e)) {
          const n = te().$implicit,
            r = te();
          x(), M('form', r.getFormControl(n.id))('control', n);
        }
      }
      function A8(e, t) {
        if ((1 & e && (Me(0), ve(1, 'lib-text', 8), Te()), 2 & e)) {
          const n = te().$implicit;
          x(), M('value', n.value)('margin', n.margin);
        }
      }
      function N8(e, t) {
        if ((1 & e && (Me(0), ve(1, 'lib-error', 9), Te()), 2 & e)) {
          const n = te(2).$implicit,
            r = te();
          x(), M('value', r.getFormControlError(n.id));
        }
      }
      function R8(e, t) {
        if (
          (1 & e && (Me(0), sn(1, N8, 2, 1, 'ng-container', 4), Te()),
          2 & e)
        ) {
          const n = te().$implicit,
            r = te();
          x(), M('ngIf', r.formControlInvalid(n.id));
        }
      }
      function x8(e, t) {
        if (
          (1 & e &&
            (Me(0),
            U(1, 'lib-flex', 5),
            sn(2, b8, 2, 2, 'ng-container', 4)(
              3,
              I8,
              2,
              2,
              'ng-container',
              4,
            )(4, S8, 2, 2, 'ng-container', 4)(
              5,
              M8,
              2,
              2,
              'ng-container',
              4,
            )(6, T8, 2, 2, 'ng-container', 4)(
              7,
              A8,
              2,
              2,
              'ng-container',
              4,
            )(8, R8, 2, 1, 'ng-container', 4),
            L(),
            Te()),
          2 & e)
        ) {
          const n = t.$implicit;
          x(),
            M('alignItems', n.alignItems),
            x(),
            M('ngIf', 'input' === n.kind),
            x(),
            M('ngIf', 'buttonText' === n.kind),
            x(),
            M('ngIf', 'buttonIcon' === n.kind),
            x(),
            M('ngIf', 'buttonLink' === n.kind),
            x(),
            M('ngIf', 'link' === n.kind),
            x(),
            M('ngIf', 'text' === n.kind),
            x(),
            M('ngIf', n.validation.isVisible);
        }
      }
      function O8(e, t) {
        if (
          (1 & e && (Me(0), ve(1, 'lib-success', 9), Te()), 2 & e)
        ) {
          const n = te(2);
          x(), M('value', n.formSuccessMessage);
        }
      }
      function F8(e, t) {
        if ((1 & e && (Me(0), ve(1, 'lib-error', 9), Te()), 2 & e)) {
          const n = te(2);
          x(), M('value', n.formErrorMessage);
        }
      }
      function k8(e, t) {
        if (
          (1 & e &&
            (Me(0),
            sn(1, O8, 2, 1, 'ng-container', 4)(
              2,
              F8,
              2,
              1,
              'ng-container',
              4,
            ),
            Te()),
          2 & e)
        ) {
          const n = te();
          x(),
            M('ngIf', n.formGroupValid),
            x(),
            M('ngIf', n.formGroupInvalid);
        }
      }
      let qi = (() => {
          class e {
            constructor(n) {
              (this.fb = n),
                (this.flexDirection = 'column'),
                (this.resetIfError = !1),
                (this.formErrorMessage =
                  'The form was not completed correctly.'),
                (this.formSuccessMessage =
                  'The form was completed correctly.'),
                (this.formValidation = !0),
                (this.baseFormEvent = new Z()),
                (this.formGroupInvalid = !1),
                (this.formGroupValid = !1),
                (this.formGroup = this.fb.group({}));
            }
            ngOnInit() {
              this.baseForm.controls.forEach(n => {
                const { id: r } = n;
                this.formControlNotExist(r),
                  this.formGroup.addControl(
                    r,
                    this.buildFormControl(n),
                  );
              });
            }
            onSubmit() {
              (this.formGroupInvalid = !1),
                (this.formGroupValid = !1),
                this.formGroup.markAllAsTouched();
              const { invalid: n, touched: r } = this.formGroup;
              if (n && r)
                return (
                  (this.formGroupInvalid = !0),
                  void (this.resetIfError && this.resetFormGroup())
                );
              (this.formGroupValid = !0),
                this.baseFormEvent.emit(this.formGroup.value),
                this.resetFormGroup(),
                (this.formGroupInvalid = !1);
            }
            getFormControl(n) {
              const r = this.formGroup.get(n);
              if (r) return r;
              throw new Error(`Form control: ${n} does not exists!`);
            }
            formControlInvalid(n) {
              const r = this.getFormControl(n);
              return r.invalid && r.touched;
            }
            getFormControlError(n) {
              const r = this.getFormControl(n);
              return r.errors && r.errors.required
                ? 'This field is required.'
                : r.errors && r.errors.email
                ? 'Please enter a valid email address.'
                : 'Invalid input.';
            }
            formControlNotExist(n) {
              if (this.formGroup.get(n))
                throw new Error(`Form control: ${n} already exists!`);
            }
            buildFormControl(n) {
              switch (n.kind) {
                case me.input:
                  return new Vr(
                    n.input.defaultValue,
                    n.validation.validators,
                  );
                case me.buttonText:
                case me.buttonIcon:
                case me.buttonLink:
                case me.link:
                  return new Vr(!1, n.validation.validators);
                case me.text:
                  return new Vr('', n.validation.validators);
                default:
                  throw new Error('Unsupported control type!');
              }
            }
            resetFormGroup() {
              this.baseForm.controls.forEach(n => {
                const { id: r } = n;
                this.formGroup.setControl(
                  r,
                  this.buildFormControl(n),
                );
              }),
                this.formGroup.markAsUntouched();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(s8));
            });
            static #t = (this.ɵcmp = J({
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
              features: [ee],
              decls: 5,
              vars: 5,
              consts: [
                [3, 'ngSubmit', 'formGroup'],
                ['gap', '2rem', 3, 'flexDirection'],
                ['gap', '0.5rem', 3, 'flexDirection'],
                [4, 'ngFor', 'ngForOf'],
                [4, 'ngIf'],
                [
                  'flexDirection',
                  'column',
                  'gap',
                  '0.25rem',
                  3,
                  'alignItems',
                ],
                [3, 'form', 'control'],
                [3, 'clickEvent', 'form', 'control'],
                [
                  'textColor',
                  'text__tertiary',
                  'type',
                  'tiny',
                  3,
                  'value',
                  'margin',
                ],
                [3, 'value'],
              ],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'form', 0),
                  K('ngSubmit', function () {
                    return o.onSubmit();
                  }),
                  U(1, 'lib-flex', 1)(2, 'lib-flex', 2),
                  sn(3, x8, 9, 8, 'ng-container', 3),
                  L(),
                  sn(4, k8, 3, 2, 'ng-container', 4),
                  L()()),
                  2 & r &&
                    (M('formGroup', o.formGroup),
                    x(),
                    M('flexDirection', o.flexDirection),
                    x(),
                    M('flexDirection', o.flexDirection),
                    x(),
                    M('ngForOf', o.baseForm.controls),
                    x(),
                    M('ngIf', o.formValidation));
              },
              dependencies: [
                dl,
                QI,
                va,
                hT,
                Z0,
                O0,
                od,
                id,
                g8,
                v8,
                y8,
                C8,
                E8,
                D8,
                Mn,
                w8,
              ],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        P8 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.loginForm = {
                  controls: [
                    {
                      kind: me.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required, ln.email],
                        isVisible: !1,
                      },
                      label: { value: 'Email', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'text',
                      },
                    },
                    {
                      kind: me.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required],
                        isVisible: !1,
                      },
                      label: { value: 'Password', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'password',
                      },
                    },
                    {
                      kind: me.link,
                      id: 'forgotPassword',
                      alignItems: 'flex-end',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Forgot password?',
                      path: '/forgot-password',
                      tip: '',
                    },
                    {
                      kind: me.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Log in',
                      isSubmit: !0,
                    },
                    {
                      kind: me.link,
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
            onBaseFormEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-login-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
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
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-base-form', 0),
                  K('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r &&
                    M('baseForm', o.loginForm)('resetIfError', !0);
              },
              dependencies: [qi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        L8 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.forgotPasswordForm = {
                  controls: [
                    {
                      kind: me.text,
                      id: 'tip',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !0 },
                      value:
                        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
                      margin: '1rem 0',
                    },
                    {
                      kind: me.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required, ln.email],
                        isVisible: !0,
                      },
                      label: { value: 'Email', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'text',
                      },
                    },
                    {
                      kind: me.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Reset password',
                      isSubmit: !0,
                    },
                  ],
                });
            }
            onBaseFormEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-forgot-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
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
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-base-form', 0),
                  K('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r &&
                    M('baseForm', o.forgotPasswordForm)(
                      'resetIfError',
                      !1,
                    );
              },
              dependencies: [qi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        V8 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.registrationForm = {
                  controls: [
                    {
                      kind: me.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required, ln.email],
                        isVisible: !0,
                      },
                      label: { value: 'Email', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'text',
                      },
                    },
                    {
                      kind: me.input,
                      id: 'name',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required],
                        isVisible: !0,
                      },
                      label: { value: 'Name', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'text',
                      },
                    },
                    {
                      kind: me.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required],
                        isVisible: !0,
                      },
                      label: { value: 'Password', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'password',
                      },
                    },
                    {
                      kind: me.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required],
                        isVisible: !0,
                      },
                      label: {
                        value: 'Repeat Password',
                        isVisible: !0,
                      },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'password',
                      },
                    },
                    {
                      kind: me.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Register',
                      isSubmit: !0,
                    },
                  ],
                });
            }
            onBaseFormEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-registration-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
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
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-base-form', 0),
                  K('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r &&
                    M('baseForm', o.registrationForm)(
                      'resetIfError',
                      !0,
                    );
              },
              dependencies: [qi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        j8 = (() => {
          class e {
            constructor() {
              (this.event = new Z()),
                (this.changePasswordForm = {
                  controls: [
                    {
                      kind: me.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required],
                        isVisible: !0,
                      },
                      label: { value: 'Password', isVisible: !0 },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'password',
                      },
                    },
                    {
                      kind: me.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: {
                        validators: [ln.required],
                        isVisible: !0,
                      },
                      label: {
                        value: 'Repeate Password',
                        isVisible: !0,
                      },
                      input: {
                        defaultValue: '',
                        placeholder: '',
                        type: 'password',
                      },
                    },
                    {
                      kind: me.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Change password',
                      isSubmit: !0,
                    },
                  ],
                });
            }
            onBaseFormEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-change-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
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
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-base-form', 0),
                  K('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r &&
                    M('baseForm', o.changePasswordForm)(
                      'resetIfError',
                      !0,
                    );
              },
              dependencies: [qi],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const U8 = ['*'];
      let Ga = (() => {
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
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = J({
            type: e,
            selectors: [['lib-card']],
            inputs: { width: 'width', type: 'type' },
            standalone: !0,
            features: [ee],
            ngContentSelectors: U8,
            decls: 2,
            vars: 3,
            consts: [[1, 'card', 3, 'ngClass']],
            template: function (r, o) {
              1 & r && (wi(), U(0, 'div', 0), bi(1), L()),
                2 & r &&
                  (Mr('width', o.width),
                  M('ngClass', o.getCardType()));
            },
            dependencies: [fg],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}[_nghost-%COMP%]{display:contents}.card[_ngcontent-%COMP%]{background-color:#f1f1f1}.card--default[_ngcontent-%COMP%]{padding:2rem;border-radius:.25rem}.card--main-nav[_ngcontent-%COMP%]{padding:1rem}.card--main-nav-options[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:1.5rem 1rem}',
            ],
          }));
        }
        return e;
      })();
      const B8 = ['*'];
      let sd = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = J({
            type: e,
            selectors: [['lib-auth']],
            standalone: !0,
            features: [ee],
            ngContentSelectors: B8,
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
              [
                'alignItems',
                'stretch',
                'flexDirection',
                'column',
                'gap',
                '1rem',
              ],
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
            template: function (r, o) {
              1 & r &&
                (wi(),
                U(0, 'div', 0)(1, 'lib-flex', 1)(2, 'lib-card', 2)(
                  3,
                  'lib-flex',
                  3,
                )(4, 'lib-flex', 4),
                ve(5, 'lib-text', 5),
                L(),
                bi(6),
                L()()()());
            },
            dependencies: [id, Mn, Ga],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.auth[_ngcontent-%COMP%]{padding:1rem}',
            ],
          }));
        }
        return e;
      })();
      const $8 = ['self'],
        H8 = ['*'];
      let z8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-wrapper']],
              viewQuery: function (r, o) {
                if ((1 & r && ra($8, 5), 2 & r)) {
                  let i;
                  Ii((i = Si())) && (o.self = i.first);
                }
              },
              standalone: !0,
              features: [ee],
              ngContentSelectors: H8,
              decls: 3,
              vars: 0,
              consts: [['self', '']],
              template: function (r, o) {
                1 & r && (wi(), U(0, 'div', null, 0), bi(2), L());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        G8 = (() => {
          class e {
            constructor() {
              (this.hamburgerFormEvent = new Z()),
                (this.hamburgerForm = {
                  controls: [
                    {
                      kind: me.buttonIcon,
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
            onEvent(n) {
              this.hamburgerFormEvent.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-hamburger-form']],
              outputs: { hamburgerFormEvent: 'hamburgerFormEvent' },
              standalone: !0,
              features: [ee],
              decls: 1,
              vars: 2,
              consts: [
                [3, 'baseFormEvent', 'baseForm', 'formValidation'],
              ],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-base-form', 0),
                  K('baseFormEvent', function (s) {
                    return o.onEvent(s);
                  }),
                  L()),
                  2 & r &&
                    M('baseForm', o.hamburgerForm)(
                      'formValidation',
                      !1,
                    );
              },
              dependencies: [qi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        q8 = (() => {
          class e {
            constructor(n) {
              (this.breakpoint = n),
                (this.mainNavFormEvent = new Z()),
                (this.flexDirection = 'row'),
                (this.mainNavForm = {
                  controls: [
                    {
                      kind: me.buttonLink,
                      id: 'statistics',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Statistics',
                      path: '/dashboard/statistics',
                    },
                    {
                      kind: me.buttonLink,
                      id: 'courses',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Courses',
                      path: '/dashboard/courses',
                    },
                    {
                      kind: me.buttonLink,
                      id: 'account',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Account',
                      path: '/dashboard/account',
                    },
                    {
                      kind: me.buttonLink,
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
            update(n) {
              this.flexDirection =
                n.breakpoint === At.XSmall ? 'column' : 'row';
            }
            onEvent(n) {
              this.mainNavFormEvent.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(s0));
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-main-nav-form']],
              outputs: { mainNavFormEvent: 'mainNavFormEvent' },
              standalone: !0,
              features: [ee],
              decls: 1,
              vars: 3,
              consts: [
                [
                  3,
                  'baseFormEvent',
                  'flexDirection',
                  'baseForm',
                  'formValidation',
                ],
              ],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-base-form', 0),
                  K('baseFormEvent', function (s) {
                    return o.onEvent(s);
                  }),
                  L()),
                  2 & r &&
                    M('flexDirection', o.flexDirection)(
                      'baseForm',
                      o.mainNavForm,
                    )('formValidation', !1);
              },
              dependencies: [qi],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const W8 = ['hamburgerForm'],
        Z8 = ['mainNavForm'];
      function Q8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'lib-wrapper', null, 1)(3, 'lib-hamburger-form', 9),
            K('hamburgerFormEvent', function () {
              return Ft(n), kt(te().onEvent());
            }),
            L()(),
            Te();
        }
      }
      function Y8(e, t) {
        1 & e && ve(0, 'lib-main-nav-form');
      }
      function K8(e, t) {
        if (1 & e) {
          const n = Xt();
          Me(0),
            U(1, 'lib-wrapper', null, 2)(3, 'lib-card', 10)(
              4,
              'lib-main-nav-form',
              11,
            ),
            K('mainNavFormEvent', function () {
              return Ft(n), kt(te().onEvent());
            }),
            L()()(),
            Te();
        }
      }
      let X8 = (() => {
        class e {
          constructor(n) {
            (this.breakpoint = n),
              (this.isMobile = !0),
              (this.isMenuVisible = !1),
              (this.mainNavJustifyContent = 'space-between'),
              this.breakpoint.addObserver(this);
          }
          update(n) {
            const { breakpoint: r } = n;
            r === At.XSmall
              ? (this.isMobile = !0)
              : ((this.isMobile = !1), (this.isMenuVisible = !1)),
              (this.mainNavJustifyContent =
                r === At.Large || r === At.XLarge
                  ? 'space-around'
                  : 'space-between');
          }
          onEvent() {
            this.isMenuVisible = !this.isMenuVisible;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(s0));
          });
          static #t = (this.ɵcmp = J({
            type: e,
            selectors: [['lib-main-nav']],
            viewQuery: function (r, o) {
              if ((1 & r && (ra(W8, 5), ra(Z8, 5)), 2 & r)) {
                let i;
                Ii((i = Si())) && (o.hamburgerForm = i.first),
                  Ii((i = Si())) && (o.mainNavForm = i.first);
              }
            },
            standalone: !0,
            features: [ee],
            decls: 8,
            vars: 4,
            consts: [
              ['pc', ''],
              ['hamburgerForm', ''],
              ['mainNavForm', ''],
              ['flexDirection', 'column'],
              ['type', 'main-nav'],
              ['alignItems', 'center', 3, 'justifyContent'],
              [
                'src',
                'icon/main-nav-logo.svg',
                'alt',
                'Logo School Icon',
              ],
              [4, 'ngIf', 'ngIfElse'],
              [4, 'ngIf'],
              [3, 'hamburgerFormEvent'],
              ['type', 'main-nav-options'],
              [3, 'mainNavFormEvent'],
            ],
            template: function (r, o) {
              if (
                (1 & r &&
                  (U(0, 'lib-flex', 3)(1, 'lib-card', 4)(
                    2,
                    'lib-flex',
                    5,
                  ),
                  ve(3, 'lib-icon', 6),
                  sn(4, Q8, 4, 0, 'ng-container', 7)(
                    5,
                    Y8,
                    1,
                    0,
                    'ng-template',
                    null,
                    0,
                    _b,
                  ),
                  L()(),
                  sn(7, K8, 5, 0, 'ng-container', 8),
                  L()),
                2 & r)
              ) {
                const i = Bw(6);
                x(2),
                  M('justifyContent', o.mainNavJustifyContent),
                  x(2),
                  M('ngIf', o.isMobile)('ngIfElse', i),
                  x(3),
                  M('ngIf', o.isMobile && o.isMenuVisible);
              }
            },
            dependencies: [dl, va, id, Ga, pT, z8, G8, q8],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      rt(206);
      let i4 = (() => {
          class e {
            constructor(n) {
              (this.route = n), (this.event = new Z());
            }
            onEvent(n) {
              this.route.navigate('/dashboard'), this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(KM));
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-login']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-auth')(1, 'lib-login-form', 0),
                  K('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [sd, P8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        s4 = (() => {
          class e {
            constructor() {
              this.event = new Z();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-forgot-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-auth')(1, 'lib-forgot-password-form', 0),
                  K('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [sd, L8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        a4 = (() => {
          class e {
            constructor() {
              this.event = new Z();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-registration']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-auth')(1, 'lib-registration-form', 0),
                  K('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [sd, V8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        c4 = (() => {
          class e {
            constructor() {
              this.event = new Z();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-change-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-auth')(1, 'lib-change-password-form', 0),
                  K('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [sd, j8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        u4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-dashboard']],
              standalone: !0,
              features: [ee],
              decls: 3,
              vars: 0,
              consts: [[1, 'dashboard']],
              template: function (r, o) {
                1 & r &&
                  (ve(0, 'lib-main-nav'),
                  U(1, 'main', 0),
                  ve(2, 'router-outlet'),
                  L());
              },
              dependencies: [X8, Aa],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.dashboard[_ngcontent-%COMP%]{padding:.75rem}',
              ],
            }));
          }
          return e;
        })(),
        l4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-statistics']],
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [['value', 'Statistics']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-card'), ve(1, 'lib-text', 0), L());
              },
              dependencies: [Ga, Mn],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        d4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-courses']],
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [['value', 'Courses']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-card'), ve(1, 'lib-text', 0), L());
              },
              dependencies: [Ga, Mn],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        f4 = (() => {
          class e {
            constructor(n) {
              (this.route = n), this.route.navigate('');
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(KM));
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-logout']],
              standalone: !0,
              features: [ee],
              decls: 0,
              vars: 0,
              template: function (r, o) {},
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        h4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-course']],
              standalone: !0,
              features: [ee],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && ve(0, 'router-outlet');
              },
              dependencies: [Aa],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        p4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-roadmap']],
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (U(0, 'p'), rr(1, 'roadmap'), L());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        g4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-account']],
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              consts: [['value', 'Account']],
              template: function (r, o) {
                1 & r &&
                  (U(0, 'lib-card'), ve(1, 'lib-text', 0), L());
              },
              dependencies: [Ga, Mn],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        m4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = J({
              type: e,
              selectors: [['lib-http-404']],
              standalone: !0,
              features: [ee],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (U(0, 'p'), rr(1, 'http-404'), L());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const D4 = {
          providers: [
            (function zz(e, ...t) {
              return Oo([
                { provide: Bl, multi: !0, useValue: e },
                [],
                { provide: Vi, useFactory: qM, deps: [lr] },
                { provide: Bu, multi: !0, useFactory: WM },
                t.map(n => n.ɵproviders),
              ]);
            })(
              [
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login', component: i4 },
                { path: 'registration', component: a4 },
                { path: 'forgot-password', component: s4 },
                { path: 'change-password', component: c4 },
                {
                  path: 'dashboard',
                  component: u4,
                  children: [
                    {
                      path: '',
                      redirectTo: 'statistics',
                      pathMatch: 'full',
                    },
                    { path: 'statistics', component: l4 },
                    { path: 'courses', component: d4 },
                    { path: 'account', component: g4 },
                    {
                      path: 'course/:courseId',
                      component: h4,
                      children: [
                        { path: 'roadmap', component: p4 },
                        {
                          path: 'quiz',
                          component: (() => {
                            class e {
                              static #e = (this.ɵfac = function (r) {
                                return new (r || e)();
                              });
                              static #t = (this.ɵcmp = J({
                                type: e,
                                selectors: [['lib-quiz']],
                                standalone: !0,
                                features: [ee],
                                decls: 2,
                                vars: 0,
                                template: function (r, o) {
                                  1 & r &&
                                    (U(0, 'p'), rr(1, 'quiz'), L());
                                },
                                encapsulation: 2,
                              }));
                            }
                            return e;
                          })(),
                        },
                      ],
                    },
                    { path: 'logout', component: f4 },
                  ],
                },
                { path: '**', component: m4 },
              ],
              (function Qz() {
                return Hn(6, [{ provide: Ni, useClass: vU }]);
              })(),
              (function qz(e = {}) {
                return Hn(4, [
                  {
                    provide: om,
                    useFactory: () => {
                      const n = _(OB),
                        r = _(ae),
                        o = _($l),
                        i = _(ki);
                      return new GM(i, o, n, r, e);
                    },
                  },
                ]);
              })({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled',
              }),
            ),
          ],
        },
        I4 = new (class b4 extends t0 {})(
          class w4 extends JM {
            constructor(t, n) {
              super(t, n), (this.scheduler = t), (this.work = n);
            }
            schedule(t, n = 0) {
              return n > 0
                ? super.schedule(t, n)
                : ((this.delay = n),
                  (this.state = t),
                  this.scheduler.flush(this),
                  this);
            }
            execute(t, n) {
              return n > 0 || this.closed
                ? super.execute(t, n)
                : this._execute(t, n);
            }
            requestAsyncId(t, n, r = 0) {
              return (null != r && r > 0) ||
                (null == r && this.delay > 0)
                ? super.requestAsyncId(t, n, r)
                : (t.flush(this), 0);
            }
          },
        );
      function A4(e, t) {
        return e === t;
      }
      function mT(e, t) {
        const n = !t?.manualCleanup;
        n &&
          !t?.injector &&
          (function rs(e) {
            if (!cy()) throw new E(-203, !1);
          })();
        const r = n ? t?.injector?.get(Kr) ?? _(Kr) : null,
          o = (function x4(e = Object.is) {
            return (t, n) =>
              1 === t.kind && 1 === n.kind && e(t.value, n.value);
          })(t?.equal);
        let i;
        i = br(
          t?.requireSync
            ? { kind: 0 }
            : { kind: 1, value: t?.initialValue },
          { equal: o },
        );
        const s = e.subscribe({
          next: a => i.set({ kind: 1, value: a }),
          error: a => {
            if (t?.rejectErrors) throw a;
            i.set({ kind: 2, error: a });
          },
        });
        if (t?.requireSync && 0 === i().kind) throw new E(601, !1);
        return (
          r?.onDestroy(s.unsubscribe.bind(s)),
          fo(
            () => {
              const a = i();
              switch (a.kind) {
                case 1:
                  return a.value;
                case 2:
                  throw a.error;
                case 0:
                  throw new E(601, !1);
              }
            },
            { equal: t?.equal },
          )
        );
      }
      const qa = {};
      function Nm(e, t) {
        return Object.defineProperty(t, 'type', {
          value: e,
          writable: !1,
        });
      }
      const yT = '@ngrx/store/init';
      let Wi = (() => {
        class e extends vt {
          constructor() {
            super({ type: yT });
          }
          next(n) {
            if ('function' == typeof n)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().",
              );
            if (typeof n > 'u')
              throw new TypeError('Actions must be objects');
            if (typeof n.type > 'u')
              throw new TypeError(
                'Actions must have a type property',
              );
            super.next(n);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const L4 = [Wi],
        _T = new D('@ngrx/store Internal Root Guard'),
        CT = new D('@ngrx/store Internal Initial State'),
        xm = new D('@ngrx/store Initial State'),
        ET = new D('@ngrx/store Reducer Factory'),
        DT = new D('@ngrx/store Internal Reducer Factory Provider'),
        wT = new D('@ngrx/store Initial Reducers'),
        Om = new D('@ngrx/store Internal Initial Reducers'),
        IT =
          (new D('@ngrx/store Store Features'),
          new D('@ngrx/store Internal Store Reducers')),
        NT =
          (new D('@ngrx/store Internal Feature Reducers'),
          new D('@ngrx/store Internal Feature Configs'),
          new D('@ngrx/store Internal Store Features'),
          new D('@ngrx/store Internal Feature Reducers Token'),
          new D('@ngrx/store Feature Reducers'),
          new D('@ngrx/store User Provided Meta Reducers')),
        ad = new D('@ngrx/store Meta Reducers'),
        RT = new D('@ngrx/store Internal Resolved Meta Reducers'),
        xT = new D('@ngrx/store User Runtime Checks Config'),
        OT = new D('@ngrx/store Internal User Runtime Checks Config'),
        Wa = new D('@ngrx/store Internal Runtime Checks'),
        km = new D('@ngrx/store Check if Action types are unique'),
        Pm = new D('@ngrx/store Root Store Provider');
      function Lm(e, t = {}) {
        const n = Object.keys(e),
          r = {};
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          'function' == typeof e[s] && (r[s] = e[s]);
        }
        const o = Object.keys(r);
        return function (s, a) {
          s = void 0 === s ? t : s;
          let c = !1;
          const u = {};
          for (let l = 0; l < o.length; l++) {
            const d = o[l],
              h = s[d],
              p = (0, r[d])(h, a);
            (u[d] = p), (c = c || p !== h);
          }
          return c ? u : s;
        };
      }
      function kT(...e) {
        return function (t) {
          if (0 === e.length) return t;
          const n = e[e.length - 1];
          return e.slice(0, -1).reduceRight((o, i) => i(o), n(t));
        };
      }
      function PT(e, t) {
        return (
          Array.isArray(t) &&
            t.length > 0 &&
            (e = kT.apply(null, [...t, e])),
          (n, r) => {
            const o = e(n);
            return (i, s) => o((i = void 0 === i ? r : i), s);
          }
        );
      }
      new D('@ngrx/store Feature State Provider');
      class Vm extends ke {}
      class LT extends Wi {}
      let cd = (() => {
        class e extends vt {
          get currentReducers() {
            return this.reducers;
          }
          constructor(n, r, o, i) {
            super(i(o, r)),
              (this.dispatcher = n),
              (this.initialState = r),
              (this.reducers = o),
              (this.reducerFactory = i);
          }
          addFeature(n) {
            this.addFeatures([n]);
          }
          addFeatures(n) {
            const r = n.reduce(
              (
                o,
                {
                  reducers: i,
                  reducerFactory: s,
                  metaReducers: a,
                  initialState: c,
                  key: u,
                },
              ) => {
                const l =
                  'function' == typeof i
                    ? (function j4(e) {
                        const t =
                          Array.isArray(e) && e.length > 0
                            ? kT(...e)
                            : n => n;
                        return (n, r) => (
                          (n = t(n)),
                          (o, i) => n((o = void 0 === o ? r : o), i)
                        );
                      })(a)(i, c)
                    : PT(s, a)(i, c);
                return (o[u] = l), o;
              },
              {},
            );
            this.addReducers(r);
          }
          removeFeature(n) {
            this.removeFeatures([n]);
          }
          removeFeatures(n) {
            this.removeReducers(n.map(r => r.key));
          }
          addReducer(n, r) {
            this.addReducers({ [n]: r });
          }
          addReducers(n) {
            (this.reducers = { ...this.reducers, ...n }),
              this.updateReducers(Object.keys(n));
          }
          removeReducer(n) {
            this.removeReducers([n]);
          }
          removeReducers(n) {
            n.forEach(r => {
              this.reducers = (function V4(e, t) {
                return Object.keys(e)
                  .filter(n => n !== t)
                  .reduce(
                    (n, r) => Object.assign(n, { [r]: e[r] }),
                    {},
                  );
              })(this.reducers, r);
            }),
              this.updateReducers(n);
          }
          updateReducers(n) {
            this.next(
              this.reducerFactory(this.reducers, this.initialState),
            ),
              this.dispatcher.next({
                type: '@ngrx/store/update-reducers',
                features: n,
              });
          }
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(LT), A(xm), A(wT), A(ET));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const B4 = [
        cd,
        { provide: Vm, useExisting: cd },
        { provide: LT, useExisting: Wi },
      ];
      let jm = (() => {
        class e extends mt {
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = (() => {
            let n;
            return function (o) {
              return (n || (n = Xe(e)))(o || e);
            };
          })());
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const $4 = [jm];
      class VT extends ke {}
      let jT = (() => {
        class e extends vt {
          static #e = (this.INIT = yT);
          constructor(n, r, o, i) {
            super(i);
            const a = n.pipe(Ng(I4)).pipe(
                (function S4(...e) {
                  const t = xg(e);
                  return Be((n, r) => {
                    const o = e.length,
                      i = new Array(o);
                    let s = e.map(() => !1),
                      a = !1;
                    for (let c = 0; c < o; c++)
                      bn(e[c]).subscribe(
                        Oe(
                          r,
                          u => {
                            (i[c] = u),
                              !a &&
                                !s[c] &&
                                ((s[c] = !0),
                                (a = s.every(Gn)) && (s = null));
                          },
                          tc,
                        ),
                      );
                    n.subscribe(
                      Oe(r, c => {
                        if (a) {
                          const u = [c, ...i];
                          r.next(t ? t(...u) : u);
                        }
                      }),
                    );
                  });
                })(r),
              ),
              u = a.pipe(QS(H4, { state: i }));
            (this.stateSubscription = u.subscribe(
              ({ state: l, action: d }) => {
                this.next(l), o.next(d);
              },
            )),
              (this.state = mT(this, {
                manualCleanup: !0,
                requireSync: !0,
              }));
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
          static #t = (this.ɵfac = function (r) {
            return new (r || e)(A(Wi), A(Vm), A(jm), A(xm));
          });
          static #n = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function H4(e = { state: void 0 }, [t, n]) {
        const { state: r } = e;
        return { state: n(r, t), action: t };
      }
      const z4 = [jT, { provide: VT, useExisting: jT }];
      let Um = (() => {
        class e extends ke {
          constructor(n, r, o) {
            super(),
              (this.actionsObserver = r),
              (this.reducerManager = o),
              (this.source = n),
              (this.state = n.state);
          }
          select(n, ...r) {
            return q4.call(null, n, ...r)(this);
          }
          selectSignal(n, r) {
            return fo(() => n(this.state()), r);
          }
          lift(n) {
            const r = new e(
              this,
              this.actionsObserver,
              this.reducerManager,
            );
            return (r.operator = n), r;
          }
          dispatch(n) {
            this.actionsObserver.next(n);
          }
          next(n) {
            this.actionsObserver.next(n);
          }
          error(n) {
            this.actionsObserver.error(n);
          }
          complete() {
            this.actionsObserver.complete();
          }
          addReducer(n, r) {
            this.reducerManager.addReducer(n, r);
          }
          removeReducer(n) {
            this.reducerManager.removeReducer(n);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(VT), A(Wi), A(cd));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const G4 = [Um];
      function q4(e, t, ...n) {
        return function (o) {
          let i;
          if ('string' == typeof e) {
            const s = [t, ...n].filter(Boolean);
            i = o.pipe(
              (function M4(...e) {
                const t = e.length;
                if (0 === t)
                  throw new Error(
                    'list of properties cannot be empty.',
                  );
                return oe(n => {
                  let r = n;
                  for (let o = 0; o < t; o++) {
                    const i = r?.[e[o]];
                    if (!(typeof i < 'u')) return;
                    r = i;
                  }
                  return r;
                });
              })(e, ...s),
            );
          } else {
            if ('function' != typeof e)
              throw new TypeError(
                `Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`,
              );
            i = o.pipe(oe(s => e(s, t)));
          }
          return i.pipe(
            (function T4(e, t = Gn) {
              return (
                (e = e ?? A4),
                Be((n, r) => {
                  let o,
                    i = !0;
                  n.subscribe(
                    Oe(r, s => {
                      const a = t(s);
                      (i || !e(o, a)) &&
                        ((i = !1), (o = a), r.next(s));
                    }),
                  );
                })
              );
            })(),
          );
        };
      }
      const Bm =
        'https://ngrx.io/guide/store/configuration/runtime-checks';
      function UT(e) {
        return void 0 === e;
      }
      function BT(e) {
        return null === e;
      }
      function $T(e) {
        return Array.isArray(e);
      }
      function HT(e) {
        return 'object' == typeof e && null !== e;
      }
      function $m(e) {
        return 'function' == typeof e;
      }
      function cq(e) {
        return e instanceof D ? _(e) : e;
      }
      function WT(e) {
        return 'function' == typeof e ? e() : e;
      }
      function dq(e, t) {
        return e.concat(t);
      }
      function fq() {
        if (_(Um, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function Gm(e) {
        Object.freeze(e);
        const t = $m(e);
        return (
          Object.getOwnPropertyNames(e).forEach(n => {
            if (
              !n.startsWith('\u0275') &&
              (function X4(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              })(e, n) &&
              (!t ||
                ('caller' !== n &&
                  'callee' !== n &&
                  'arguments' !== n))
            ) {
              const r = e[n];
              (HT(r) || $m(r)) && !Object.isFrozen(r) && Gm(r);
            }
          }),
          e
        );
      }
      function qm(e, t = []) {
        return (UT(e) || BT(e)) && 0 === t.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((r, o) => {
              if (r) return r;
              const i = e[o];
              return (function K4(e) {
                return $m(e) && e.hasOwnProperty('\u0275cmp');
              })(i)
                ? r
                : !(
                    UT(i) ||
                    BT(i) ||
                    (function Q4(e) {
                      return 'number' == typeof e;
                    })(i) ||
                    (function Z4(e) {
                      return 'boolean' == typeof e;
                    })(i) ||
                    (function W4(e) {
                      return 'string' == typeof e;
                    })(i) ||
                    $T(i)
                  ) &&
                    ((function zT(e) {
                      if (
                        !(function Y4(e) {
                          return HT(e) && !$T(e);
                        })(e)
                      )
                        return !1;
                      const t = Object.getPrototypeOf(e);
                      return t === Object.prototype || null === t;
                    })(i)
                      ? qm(i, [...t, o])
                      : { path: [...t, o], value: i });
            }, !1);
      }
      function ZT(e, t) {
        if (!1 === e) return;
        const n = e.path.join('.'),
          r = new Error(
            `Detected unserializable ${t} at "${n}". ${Bm}#strict${t}serializability`,
          );
        throw ((r.value = e.value), (r.unserializablePath = n), r);
      }
      function mq(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function vq({
        strictActionSerializability: e,
        strictStateSerializability: t,
      }) {
        return n =>
          e || t
            ? (function pq(e, t) {
                return function (n, r) {
                  t.action(r) && ZT(qm(r), 'action');
                  const o = e(n, r);
                  return t.state() && ZT(qm(o), 'state'), o;
                };
              })(n, { action: r => e && !Wm(r), state: () => t })
            : n;
      }
      function yq({
        strictActionImmutability: e,
        strictStateImmutability: t,
      }) {
        return n =>
          e || t
            ? (function hq(e, t) {
                return function (n, r) {
                  const o = t.action(r) ? Gm(r) : r,
                    i = e(n, o);
                  return t.state() ? Gm(i) : i;
                };
              })(n, { action: r => e && !Wm(r), state: () => t })
            : n;
      }
      function Wm(e) {
        return e.type.startsWith('@ngrx');
      }
      function _q({ strictActionWithinNgZone: e }) {
        return t =>
          e
            ? (function gq(e, t) {
                return function (n, r) {
                  if (t.action(r) && !ae.isInAngularZone())
                    throw new Error(
                      `Action '${r.type}' running outside NgZone. ${Bm}#strictactionwithinngzone`,
                    );
                  return e(n, r);
                };
              })(t, { action: n => e && !Wm(n) })
            : t;
      }
      function Cq(e) {
        return [
          { provide: OT, useValue: e },
          { provide: xT, useFactory: Eq, deps: [OT] },
          { provide: Wa, deps: [xT], useFactory: mq },
          { provide: ad, multi: !0, deps: [Wa], useFactory: yq },
          { provide: ad, multi: !0, deps: [Wa], useFactory: vq },
          { provide: ad, multi: !0, deps: [Wa], useFactory: _q },
        ];
      }
      function Eq(e) {
        return e;
      }
      function Dq(e) {
        if (!e.strictActionTypeUniqueness) return;
        const t = Object.entries(qa)
          .filter(([, n]) => n > 1)
          .map(([n]) => n);
        if (t.length)
          throw new Error(
            `Action types are registered more than once, ${t
              .map(n => `"${n}"`)
              .join(', ')}. ${Bm}#strictactiontypeuniqueness`,
          );
      }
      function wq(e = {}, t = {}) {
        return [
          { provide: _T, useFactory: fq },
          { provide: CT, useValue: t.initialState },
          { provide: xm, useFactory: WT, deps: [CT] },
          { provide: Om, useValue: e },
          { provide: IT, useExisting: e instanceof D ? e : Om },
          { provide: wT, deps: [Om, [new zv(IT)]], useFactory: cq },
          {
            provide: NT,
            useValue: t.metaReducers ? t.metaReducers : [],
          },
          { provide: RT, deps: [ad, NT], useFactory: dq },
          {
            provide: DT,
            useValue: t.reducerFactory ? t.reducerFactory : Lm,
          },
          { provide: ET, deps: [DT, RT], useFactory: PT },
          L4,
          B4,
          $4,
          z4,
          G4,
          Cq(t.runtimeChecks),
          [{ provide: km, multi: !0, deps: [Wa], useFactory: Dq }],
        ];
      }
      const Iq = [
          {
            provide: Pm,
            useFactory: function bq() {
              _(Wi),
                _(Vm),
                _(jm),
                _(Um),
                _(_T, { optional: !0 }),
                _(km, { optional: !0 });
            },
          },
          { provide: qt, multi: !0, useFactory: () => () => _(Pm) },
        ],
        Fq = {
          providers: [
            (function Sq(e, t) {
              return Oo([...wq(e, t), Iq]);
            })({
              grammar: (function Rq(e, ...t) {
                const n = new Map();
                for (const r of t)
                  for (const o of r.types) {
                    const i = n.get(o);
                    n.set(
                      o,
                      i ? (a, c) => r.reducer(i(a, c), c) : r.reducer,
                    );
                  }
                return function (r = e, o) {
                  const i = n.get(o.type);
                  return i ? i(r, o) : r;
                };
              })(
                {
                  defaultTabId: 'present-simple',
                  tabs: [
                    {
                      id: 'present-simple',
                      label: 'Present Simple',
                      path: '/grammar/present-simple',
                      content: '# Present Simple',
                    },
                    {
                      id: 'present-continuous',
                      label: 'Present Continuous',
                      path: '/grammar/present-continuous',
                      content: '# Present Continuous',
                    },
                  ],
                },
                (function Nq(...e) {
                  return {
                    reducer: e.pop(),
                    types: e.map(r => r.type),
                  };
                })(
                  (function vT(e, t) {
                    if (
                      ((qa[e] = (qa[e] || 0) + 1),
                      'function' == typeof t)
                    )
                      return Nm(e, (...r) => ({
                        ...t(...r),
                        type: e,
                      }));
                    switch (t ? t._as : 'empty') {
                      case 'empty':
                        return Nm(e, () => ({ type: e }));
                      case 'props':
                        return Nm(e, r => ({ ...r, type: e }));
                      default:
                        throw new Error('Unexpected config.');
                    }
                  })('[English/Learning] Get Grammar'),
                  e => e,
                ),
              ),
            }),
          ],
        };
      (function A$(e, t) {
        return Uj({ rootComponent: e, ...DS(t) });
      })(Yz, { providers: [...D4.providers, ...Fq.providers] }).catch(
        e => {
          throw new Error(e);
        },
      );
    },
    206: (Bt, dr, rt) => {
      'use strict';
      const $t = rt(739),
        pe = rt(200),
        ht = rt(897);
      Bt.exports = function pt(Ae, gt) {
        switch (pe(Ae)) {
          case 'object':
            return (function Pe(Ae, gt) {
              if ('function' == typeof gt) return gt(Ae);
              if (gt || ht(Ae)) {
                const I = new Ae.constructor();
                for (let Q in Ae) I[Q] = pt(Ae[Q], gt);
                return I;
              }
              return Ae;
            })(Ae, gt);
          case 'array':
            return (function k(Ae, gt) {
              const I = new Ae.constructor(Ae.length);
              for (let Q = 0; Q < Ae.length; Q++)
                I[Q] = pt(Ae[Q], gt);
              return I;
            })(Ae, gt);
          default:
            return $t(Ae);
        }
      };
    },
    897: (Bt, dr, rt) => {
      'use strict';
      var $t = rt(907);
      function pe(ht) {
        return (
          !0 === $t(ht) &&
          '[object Object]' === Object.prototype.toString.call(ht)
        );
      }
      Bt.exports = function (pt) {
        var Pe, k;
        return !(
          !1 === pe(pt) ||
          ((Pe = pt.constructor), 'function' != typeof Pe) ||
          ((k = Pe.prototype), !1 === pe(k)) ||
          !1 === k.hasOwnProperty('isPrototypeOf')
        );
      };
    },
    907: Bt => {
      'use strict';
      Bt.exports = function (rt) {
        return (
          null != rt &&
          'object' == typeof rt &&
          !1 === Array.isArray(rt)
        );
      };
    },
    200: Bt => {
      var dr = Object.prototype.toString;
      function rt(I) {
        return 'function' == typeof I.constructor
          ? I.constructor.name
          : null;
      }
      Bt.exports = function (Q) {
        if (void 0 === Q) return 'undefined';
        if (null === Q) return 'null';
        var tt = typeof Q;
        if ('boolean' === tt) return 'boolean';
        if ('string' === tt) return 'string';
        if ('number' === tt) return 'number';
        if ('symbol' === tt) return 'symbol';
        if ('function' === tt)
          return (function Pe(I, Q) {
            return 'GeneratorFunction' === rt(I);
          })(Q)
            ? 'generatorfunction'
            : 'function';
        if (
          (function $t(I) {
            return Array.isArray
              ? Array.isArray(I)
              : I instanceof Array;
          })(Q)
        )
          return 'array';
        if (
          (function gt(I) {
            return (
              !(
                !I.constructor ||
                'function' != typeof I.constructor.isBuffer
              ) && I.constructor.isBuffer(I)
            );
          })(Q)
        )
          return 'buffer';
        if (
          (function Ae(I) {
            try {
              if (
                'number' == typeof I.length &&
                'function' == typeof I.callee
              )
                return !0;
            } catch (Q) {
              if (-1 !== Q.message.indexOf('callee')) return !0;
            }
            return !1;
          })(Q)
        )
          return 'arguments';
        if (
          (function ht(I) {
            return (
              I instanceof Date ||
              ('function' == typeof I.toDateString &&
                'function' == typeof I.getDate &&
                'function' == typeof I.setDate)
            );
          })(Q)
        )
          return 'date';
        if (
          (function pe(I) {
            return (
              I instanceof Error ||
              ('string' == typeof I.message &&
                I.constructor &&
                'number' == typeof I.constructor.stackTraceLimit)
            );
          })(Q)
        )
          return 'error';
        if (
          (function pt(I) {
            return (
              I instanceof RegExp ||
              ('string' == typeof I.flags &&
                'boolean' == typeof I.ignoreCase &&
                'boolean' == typeof I.multiline &&
                'boolean' == typeof I.global)
            );
          })(Q)
        )
          return 'regexp';
        switch (rt(Q)) {
          case 'Symbol':
            return 'symbol';
          case 'Promise':
            return 'promise';
          case 'WeakMap':
            return 'weakmap';
          case 'WeakSet':
            return 'weakset';
          case 'Map':
            return 'map';
          case 'Set':
            return 'set';
          case 'Int8Array':
            return 'int8array';
          case 'Uint8Array':
            return 'uint8array';
          case 'Uint8ClampedArray':
            return 'uint8clampedarray';
          case 'Int16Array':
            return 'int16array';
          case 'Uint16Array':
            return 'uint16array';
          case 'Int32Array':
            return 'int32array';
          case 'Uint32Array':
            return 'uint32array';
          case 'Float32Array':
            return 'float32array';
          case 'Float64Array':
            return 'float64array';
        }
        if (
          (function k(I) {
            return (
              'function' == typeof I.throw &&
              'function' == typeof I.return &&
              'function' == typeof I.next
            );
          })(Q)
        )
          return 'generator';
        switch ((tt = dr.call(Q))) {
          case '[object Object]':
            return 'object';
          case '[object Map Iterator]':
            return 'mapiterator';
          case '[object Set Iterator]':
            return 'setiterator';
          case '[object String Iterator]':
            return 'stringiterator';
          case '[object Array Iterator]':
            return 'arrayiterator';
        }
        return tt.slice(8, -1).toLowerCase().replace(/\s/g, '');
      };
    },
    739: (Bt, dr, rt) => {
      'use strict';
      const $t = Symbol.prototype.valueOf,
        pe = rt(200);
      Bt.exports = function ht(I, Q) {
        switch (pe(I)) {
          case 'array':
            return I.slice();
          case 'object':
            return Object.assign({}, I);
          case 'date':
            return new I.constructor(Number(I));
          case 'map':
            return new Map(I);
          case 'set':
            return new Set(I);
          case 'buffer':
            return (function Ae(I) {
              const Q = I.length,
                tt = Buffer.allocUnsafe
                  ? Buffer.allocUnsafe(Q)
                  : Buffer.from(Q);
              return I.copy(tt), tt;
            })(I);
          case 'symbol':
            return (function gt(I) {
              return $t ? Object($t.call(I)) : {};
            })(I);
          case 'arraybuffer':
            return (function Pe(I) {
              const Q = new I.constructor(I.byteLength);
              return new Uint8Array(Q).set(new Uint8Array(I)), Q;
            })(I);
          case 'float32array':
          case 'float64array':
          case 'int16array':
          case 'int32array':
          case 'int8array':
          case 'uint16array':
          case 'uint32array':
          case 'uint8clampedarray':
          case 'uint8array':
            return (function k(I, Q) {
              return new I.constructor(
                I.buffer,
                I.byteOffset,
                I.length,
              );
            })(I);
          case 'regexp':
            return (function pt(I) {
              const Q =
                  void 0 !== I.flags
                    ? I.flags
                    : /\w+$/.exec(I) || void 0,
                tt = new I.constructor(I.source, Q);
              return (tt.lastIndex = I.lastIndex), tt;
            })(I);
          case 'error':
            return Object.create(I);
          default:
            return I;
        }
      };
    },
  },
  Bt => {
    Bt((Bt.s = 676));
  },
]);

(self.webpackChunkenglish_learning_fe =
  self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    376: (Lt, ar, rt) => {
      'use strict';
      function Vt(e, t) {
        return Object.is(e, t);
      }
      let pe = null,
        ht = !1,
        pt = 1;
      const xe = Symbol('SIGNAL');
      function F(e) {
        const t = pe;
        return (pe = e), t;
      }
      const q = {
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
        Pa(pe),
          t < pe.producerNode.length &&
            pe.producerNode[t] !== e &&
            ji(pe) &&
            ka(pe.producerNode[t], pe.producerIndexOfThis[t]),
          pe.producerNode[t] !== e &&
            ((pe.producerNode[t] = e),
            (pe.producerIndexOfThis[t] = ji(pe) ? Pm(e, pe, t) : 0)),
          (pe.producerLastReadVersion[t] = e.version);
      }
      function xm(e) {
        if (
          (!ji(e) || e.dirty) &&
          (e.dirty || e.lastCleanEpoch !== pt)
        ) {
          if (!e.producerMustRecompute(e) && !Ql(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = pt);
          e.producerRecomputeValue(e),
            (e.dirty = !1),
            (e.lastCleanEpoch = pt);
        }
      }
      function Om(e) {
        if (void 0 === e.liveConsumerNode) return;
        const t = ht;
        ht = !0;
        try {
          for (const n of e.liveConsumerNode) n.dirty || km(n);
        } finally {
          ht = t;
        }
      }
      function Fm() {
        return !1 !== pe?.consumerAllowSignalWrites;
      }
      function km(e) {
        (e.dirty = !0), Om(e), e.consumerMarkedDirty?.(e);
      }
      function Fa(e) {
        return e && (e.nextProducerIndex = 0), F(e);
      }
      function Zl(e, t) {
        if (
          (F(t),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (ji(e))
            for (
              let n = e.nextProducerIndex;
              n < e.producerNode.length;
              n++
            )
              ka(e.producerNode[n], e.producerIndexOfThis[n]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function Ql(e) {
        Pa(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (xm(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function Yl(e) {
        if ((Pa(e), ji(e)))
          for (let t = 0; t < e.producerNode.length; t++)
            ka(e.producerNode[t], e.producerIndexOfThis[t]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length =
              e.liveConsumerIndexOfThis.length =
                0);
      }
      function Pm(e, t, n) {
        if ((Lm(e), 0 === e.liveConsumerNode.length && Vm(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            e.producerIndexOfThis[r] = Pm(e.producerNode[r], e, r);
        return (
          e.liveConsumerIndexOfThis.push(n),
          e.liveConsumerNode.push(t) - 1
        );
      }
      function ka(e, t) {
        if ((Lm(e), 1 === e.liveConsumerNode.length && Vm(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            ka(e.producerNode[r], e.producerIndexOfThis[r]);
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
          Pa(o), (o.producerIndexOfThis[r] = t);
        }
      }
      function ji(e) {
        return (
          e.consumerIsAlwaysLive ||
          (e?.liveConsumerNode?.length ?? 0) > 0
        );
      }
      function Pa(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      function Lm(e) {
        (e.liveConsumerNode ??= []),
          (e.liveConsumerIndexOfThis ??= []);
      }
      function Vm(e) {
        return void 0 !== e.producerNode;
      }
      const Kl = Symbol('UNSET'),
        Xl = Symbol('COMPUTING'),
        La = Symbol('ERRORED'),
        TT = {
          ...q,
          value: Kl,
          dirty: !0,
          error: null,
          equal: Vt,
          producerMustRecompute: e =>
            e.value === Kl || e.value === Xl,
          producerRecomputeValue(e) {
            if (e.value === Xl)
              throw new Error('Detected cycle in computations.');
            const t = e.value;
            e.value = Xl;
            const n = Fa(e);
            let r;
            try {
              r = e.computation();
            } catch (o) {
              (r = La), (e.error = o);
            } finally {
              Zl(e, n);
            }
            t !== Kl && t !== La && r !== La && e.equal(t, r)
              ? (e.value = t)
              : ((e.value = r), e.version++);
          },
        };
      let jm = function AT() {
        throw new Error();
      };
      function Um() {
        jm();
      }
      let Va = null;
      function Bm(e, t) {
        Fm() || Um(),
          e.equal(e.value, t) ||
            ((e.value = t),
            (function FT(e) {
              e.version++,
                (function ST() {
                  pt++;
                })(),
                Om(e),
                Va?.();
            })(e));
      }
      const OT = { ...q, equal: Vt, value: void 0 };
      function be(e) {
        return 'function' == typeof e;
      }
      function Jl(e) {
        const n = e(r => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n),
          n
        );
      }
      const ed = Jl(
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
      function ja(e, t) {
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
            if (be(r))
              try {
                r();
              } catch (i) {
                t = i instanceof ed ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Gm(i);
                } catch (s) {
                  (t = t ?? []),
                    s instanceof ed
                      ? (t = [...t, ...s.errors])
                      : t.push(s);
                }
            }
            if (t) throw new ed(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) Gm(t);
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
            : Array.isArray(n) && ja(n, t);
        }
        remove(t) {
          const { _finalizers: n } = this;
          n && ja(n, t), t instanceof at && t._removeParent(this);
        }
      }
      at.EMPTY = (() => {
        const e = new at();
        return (e.closed = !0), e;
      })();
      const Hm = at.EMPTY;
      function zm(e) {
        return (
          e instanceof at ||
          (e &&
            'closed' in e &&
            be(e.remove) &&
            be(e.add) &&
            be(e.unsubscribe))
        );
      }
      function Gm(e) {
        be(e) ? e() : e.unsubscribe();
      }
      const Fr = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Ua = {
          setTimeout(e, t, ...n) {
            const { delegate: r } = Ua;
            return r?.setTimeout
              ? r.setTimeout(e, t, ...n)
              : setTimeout(e, t, ...n);
          },
          clearTimeout(e) {
            const { delegate: t } = Ua;
            return (t?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function qm(e) {
        Ua.setTimeout(() => {
          const { onUnhandledError: t } = Fr;
          if (!t) throw e;
          t(e);
        });
      }
      function Ba() {}
      const PT = td('C', void 0, void 0);
      function td(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      let kr = null;
      function $a(e) {
        if (Fr.useDeprecatedSynchronousErrorHandling) {
          const t = !kr;
          if (
            (t && (kr = { errorThrown: !1, error: null }), e(), t)
          ) {
            const { errorThrown: n, error: r } = kr;
            if (((kr = null), n)) throw r;
          }
        } else e();
      }
      class nd extends at {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), zm(t) && t.add(this))
              : (this.destination = HT);
        }
        static create(t, n, r) {
          return new od(t, n, r);
        }
        next(t) {
          this.isStopped
            ? id(
                (function VT(e) {
                  return td('N', e, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? id(
                (function LT(e) {
                  return td('E', void 0, e);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? id(PT, this)
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
      const UT = Function.prototype.bind;
      function rd(e, t) {
        return UT.call(e, t);
      }
      class BT {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const { partialObserver: n } = this;
          if (n.next)
            try {
              n.next(t);
            } catch (r) {
              Ha(r);
            }
        }
        error(t) {
          const { partialObserver: n } = this;
          if (n.error)
            try {
              n.error(t);
            } catch (r) {
              Ha(r);
            }
          else Ha(t);
        }
        complete() {
          const { partialObserver: t } = this;
          if (t.complete)
            try {
              t.complete();
            } catch (n) {
              Ha(n);
            }
        }
      }
      class od extends nd {
        constructor(t, n, r) {
          let o;
          if ((super(), be(t) || !t))
            o = {
              next: t ?? void 0,
              error: n ?? void 0,
              complete: r ?? void 0,
            };
          else {
            let i;
            this && Fr.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: t.next && rd(t.next, i),
                  error: t.error && rd(t.error, i),
                  complete: t.complete && rd(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new BT(o);
        }
      }
      function Ha(e) {
        Fr.useDeprecatedSynchronousErrorHandling
          ? (function jT(e) {
              Fr.useDeprecatedSynchronousErrorHandling &&
                kr &&
                ((kr.errorThrown = !0), (kr.error = e));
            })(e)
          : qm(e);
      }
      function id(e, t) {
        const { onStoppedNotification: n } = Fr;
        n && Ua.setTimeout(() => n(e, t));
      }
      const HT = {
          closed: !0,
          next: Ba,
          error: function $T(e) {
            throw e;
          },
          complete: Ba,
        },
        sd =
          ('function' == typeof Symbol && Symbol.observable) ||
          '@@observable';
      function $n(e) {
        return e;
      }
      function Wm(e) {
        return 0 === e.length
          ? $n
          : 1 === e.length
          ? e[0]
          : function (n) {
              return e.reduce((r, o) => o(r), n);
            };
      }
      let Oe = (() => {
        class e {
          constructor(n) {
            n && (this._subscribe = n);
          }
          lift(n) {
            const r = new e();
            return (r.source = this), (r.operator = n), r;
          }
          subscribe(n, r, o) {
            const i = (function qT(e) {
              return (
                (e && e instanceof nd) ||
                ((function GT(e) {
                  return (
                    e && be(e.next) && be(e.error) && be(e.complete)
                  );
                })(e) &&
                  zm(e))
              );
            })(n)
              ? n
              : new od(n, r, o);
            return (
              $a(() => {
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
            return new (r = Zm(r))((o, i) => {
              const s = new od({
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
          [sd]() {
            return this;
          }
          pipe(...n) {
            return Wm(n)(this);
          }
          toPromise(n) {
            return new (n = Zm(n))((r, o) => {
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
      function Zm(e) {
        var t;
        return null !== (t = e ?? Fr.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      const WT = Jl(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let Tt = (() => {
        class e extends Oe {
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
            const r = new Qm(this, this);
            return (r.operator = n), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new WT();
          }
          next(n) {
            $a(() => {
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
            $a(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0),
                  (this.thrownError = n);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(n);
              }
            });
          }
          complete() {
            $a(() => {
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
              ? Hm
              : ((this.currentObservers = null),
                i.push(n),
                new at(() => {
                  (this.currentObservers = null), ja(i, n);
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
            const n = new Oe();
            return (n.source = this), n;
          }
        }
        return (e.create = (t, n) => new Qm(t, n)), e;
      })();
      class Qm extends Tt {
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
            : Hm;
        }
      }
      class mt extends Tt {
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
      function Ym(e) {
        return be(e?.lift);
      }
      function We(e) {
        return t => {
          if (Ym(t))
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
      function Ne(e, t, n, r, o) {
        return new ZT(e, t, n, r, o);
      }
      class ZT extends nd {
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
      function re(e, t) {
        return We((n, r) => {
          let o = 0;
          n.subscribe(
            Ne(r, i => {
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
      const gv = 'https://g.co/ng/security#xss';
      class E extends Error {
        constructor(t, n) {
          super(
            (function _o(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t : ''}`;
            })(t, n),
          ),
            (this.code = t);
        }
      }
      function Hn(e) {
        return { toString: e }.toString();
      }
      const Eo = '__parameters__';
      function bo(e, t, n) {
        return Hn(() => {
          const r = (function pd(e) {
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
              const d = c.hasOwnProperty(Eo)
                ? c[Eo]
                : Object.defineProperty(c, Eo, { value: [] })[Eo];
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
      const we = globalThis;
      function de(e) {
        for (let t in e) if (e[t] === de) return t;
        throw Error(
          'Could not find renamed property on target object.',
        );
      }
      function QA(e, t) {
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
      function gd(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const YA = de({ __forward_ref__: de });
      function ye(e) {
        return (
          (e.__forward_ref__ = ye),
          (e.toString = function () {
            return Ze(this());
          }),
          e
        );
      }
      function k(e) {
        return Za(e) ? e() : e;
      }
      function Za(e) {
        return (
          'function' == typeof e &&
          e.hasOwnProperty(YA) &&
          e.__forward_ref__ === ye
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
      function wo(e) {
        return {
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function Qa(e) {
        return _v(e, Ka) || _v(e, Cv);
      }
      function _v(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Ya(e) {
        return e && (e.hasOwnProperty(md) || e.hasOwnProperty(nN))
          ? e[md]
          : null;
      }
      const Ka = de({ ɵprov: de }),
        md = de({ ɵinj: de }),
        Cv = de({ ngInjectableDef: de }),
        nN = de({ ngInjectorDef: de });
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
      function Ed(e) {
        return e && !!e.ɵproviders;
      }
      const Bi = de({ ɵcmp: de }),
        Dd = de({ ɵdir: de }),
        bd = de({ ɵpipe: de }),
        Dv = de({ ɵmod: de }),
        zn = de({ ɵfac: de }),
        $i = de({ __NG_ELEMENT_ID__: de }),
        bv = de({ __NG_ENV_ID__: de });
      function U(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function wd(e, t) {
        throw new E(-201, !1);
      }
      var Y = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(Y || {});
      let Id;
      function wv() {
        return Id;
      }
      function At(e) {
        const t = Id;
        return (Id = e), t;
      }
      function Iv(e, t, n) {
        const r = Qa(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Y.Optional
          ? null
          : void 0 !== t
          ? t
          : void wd();
      }
      const Hi = {},
        Sd = '__NG_DI_FLAG__',
        Xa = 'ngTempTokenPath',
        cN = /\n/gm,
        Sv = '__source';
      let Io;
      function lr(e) {
        const t = Io;
        return (Io = e), t;
      }
      function dN(e, t = Y.Default) {
        if (void 0 === Io) throw new E(-203, !1);
        return null === Io
          ? Iv(e, void 0, t)
          : Io.get(e, t & Y.Optional ? null : void 0, t);
      }
      function x(e, t = Y.Default) {
        return (wv() || dN)(k(e), t);
      }
      function _(e, t = Y.Default) {
        return x(e, Ja(t));
      }
      function Ja(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Md(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = k(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new E(900, !1);
            let o,
              i = Y.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                c = fN(a);
              'number' == typeof c
                ? -1 === c
                  ? (o = a.token)
                  : (i |= c)
                : (o = a);
            }
            t.push(x(o, i));
          } else t.push(x(r));
        }
        return t;
      }
      function zi(e, t) {
        return (e[Sd] = t), (e.prototype[Sd] = t), e;
      }
      function fN(e) {
        return e[Sd];
      }
      const Tv = zi(
          bo('Inject', e => ({ token: e })),
          -1,
        ),
        Td = zi(bo('Optional'), 8),
        Ad = zi(bo('SkipSelf'), 4);
      function Lr(e, t) {
        return e.hasOwnProperty(zn) ? e[zn] : null;
      }
      function So(e, t) {
        e.forEach(n => (Array.isArray(n) ? So(n, t) : t(n)));
      }
      function Av(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ec(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Bt(e, t, n) {
        let r = Mo(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Nv(e, t, n, r) {
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
      function Rd(e, t) {
        const n = Mo(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Mo(e, t) {
        return (function Rv(e, t, n) {
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
      const wn = {},
        ee = [],
        $t = new D(''),
        xv = new D('', -1),
        xd = new D('');
      class nc {
        get(t, n = Hi) {
          if (n === Hi) {
            const r = new Error(
              `NullInjectorError: No provider for ${Ze(t)}!`,
            );
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      var rc = (function (e) {
          return (
            (e[(e.OnPush = 0)] = 'OnPush'),
            (e[(e.Default = 1)] = 'Default'),
            e
          );
        })(rc || {}),
        sn = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })(sn || {}),
        dr = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] =
              'HasDecoratorInputTransform'),
            e
          );
        })(dr || {});
      function yN(e, t, n) {
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
      function Od(e, t, n) {
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
            Fv(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s),
              r++;
          }
        }
        return r;
      }
      function Ov(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Fv(e) {
        return 64 === e.charCodeAt(0);
      }
      function Gi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o
                ? (n = o)
                : 0 === n ||
                  kv(
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
      function kv(e, t, n, r, o) {
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
      const Pv = 'ng-template';
      function _N(e, t, n, r) {
        let o = 0;
        if (r) {
          for (; o < t.length && 'string' == typeof t[o]; o += 2)
            if (
              'class' === t[o] &&
              -1 !== yN(t[o + 1].toLowerCase(), n, 0)
            )
              return !0;
        } else if (Fd(e)) return !1;
        if (((o = t.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < t.length && 'string' == typeof (i = t[o]); )
            if (i.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function Fd(e) {
        return 4 === e.type && e.value !== Pv;
      }
      function CN(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Pv);
      }
      function EN(e, t, n) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function wN(e) {
                  for (let t = 0; t < e.length; t++)
                    if (Ov(e[t])) return t;
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
                  ('' !== c && !CN(e, c, n)) ||
                    ('' === c && 1 === t.length))
                ) {
                  if (an(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !_N(e, o, c, n)) {
                  if (an(r)) return !1;
                  s = !0;
                }
              } else {
                const u = t[++a],
                  l = DN(c, o, Fd(e), n);
                if (-1 === l) {
                  if (an(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== u) {
                  let d;
                  if (
                    ((d = l > i ? '' : o[l + 1].toLowerCase()),
                    2 & r && u !== d)
                  ) {
                    if (an(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !an(r) && !an(c)) return !1;
            if (s && an(c)) continue;
            (s = !1), (r = c | (1 & r));
          }
        }
        return an(r) || s;
      }
      function an(e) {
        return !(1 & e);
      }
      function DN(e, t, n, r) {
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
        return (function IN(e, t) {
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
      function Lv(e, t, n = !1) {
        for (let r = 0; r < t.length; r++)
          if (EN(e, t[r], n)) return !0;
        return !1;
      }
      function SN(e, t) {
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
      function Vv(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function MN(e) {
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
            '' !== o && !an(s) && ((t += Vv(i, o)), (o = '')),
              (r = s),
              (i = i || !an(r));
          n++;
        }
        return '' !== o && (t += Vv(i, o)), t;
      }
      function oe(e) {
        return Hn(() => {
          const t = Uv(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === rc.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || sn.Emulated,
              styles: e.styles || ee,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          Bv(n);
          const r = e.dependencies;
          return (
            (n.directiveDefs = oc(r, !1)),
            (n.pipeDefs = oc(r, !0)),
            (n.id = (function ON(e) {
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
      function NN(e) {
        return W(e) || Qe(e);
      }
      function RN(e) {
        return null !== e;
      }
      function qi(e) {
        return Hn(() => ({
          type: e.type,
          bootstrap: e.bootstrap || ee,
          declarations: e.declarations || ee,
          imports: e.imports || ee,
          exports: e.exports || ee,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function jv(e, t) {
        if (null == e) return wn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            let i,
              s,
              a = dr.None;
            Array.isArray(o)
              ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
              : ((i = o), (s = o)),
              t
                ? ((n[i] = a !== dr.None ? [r, a] : r), (t[i] = s))
                : (n[i] = r);
          }
        return n;
      }
      function V(e) {
        return Hn(() => {
          const t = Uv(e);
          return Bv(t), t;
        });
      }
      function W(e) {
        return e[Bi] || null;
      }
      function Qe(e) {
        return e[Dd] || null;
      }
      function ot(e) {
        return e[bd] || null;
      }
      function ct(e, t) {
        const n = e[Dv] || null;
        if (!n && !0 === t)
          throw new Error(
            `Type ${Ze(e)} does not have '\u0275mod' property.`,
          );
        return n;
      }
      function Uv(e) {
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
          inputConfig: e.inputs || wn,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || ee,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: jv(e.inputs, t),
          outputs: jv(e.outputs),
          debugInfo: null,
        };
      }
      function Bv(e) {
        e.features?.forEach(t => t(e));
      }
      function oc(e, t) {
        if (!e) return null;
        const n = t ? ot : NN;
        return () =>
          ('function' == typeof e ? e() : e)
            .map(r => n(r))
            .filter(RN);
      }
      function To(e) {
        return { ɵproviders: e };
      }
      function FN(...e) {
        return { ɵproviders: kd(0, e), ɵfromNgModule: !0 };
      }
      function kd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        const i = s => {
          n.push(s);
        };
        return (
          So(t, s => {
            const a = s;
            ic(a, i, [], r) && ((o ||= []), o.push(a));
          }),
          void 0 !== o && $v(o, i),
          n
        );
      }
      function $v(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: o } = e[n];
          Pd(o, i => {
            t(i, r);
          });
        }
      }
      function ic(e, t, n, r) {
        if (!(e = k(e))) return !1;
        let o = null,
          i = Ya(e);
        const s = !i && W(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const c = e.ngModule;
          if (((i = Ya(c)), !i)) return !1;
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
            for (const u of c) ic(u, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !a) {
              let u;
              r.add(o);
              try {
                So(i.imports, l => {
                  ic(l, t, n, r) && ((u ||= []), u.push(l));
                });
              } finally {
              }
              void 0 !== u && $v(u, t);
            }
            if (!a) {
              const u = Lr(o) || (() => new o());
              t({ provide: o, useFactory: u, deps: ee }, o),
                t({ provide: xd, useValue: o, multi: !0 }, o),
                t(
                  { provide: $t, useValue: () => x(o), multi: !0 },
                  o,
                );
            }
            const c = i.providers;
            if (null != c && !a) {
              const u = e;
              Pd(c, l => {
                t(l, u);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Pd(e, t) {
        for (let n of e)
          Ed(n) && (n = n.ɵproviders),
            Array.isArray(n) ? Pd(n, t) : t(n);
      }
      const kN = de({ provide: String, useValue: de });
      function Ld(e) {
        return null !== e && 'object' == typeof e && kN in e;
      }
      function Vr(e) {
        return 'function' == typeof e;
      }
      const Vd = new D(''),
        sc = {},
        LN = {};
      let jd;
      function ac() {
        return void 0 === jd && (jd = new nc()), jd;
      }
      class Ht {}
      class Ao extends Ht {
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
            Bd(t, s => this.processProvider(s)),
            this.records.set(xv, No(void 0, this)),
            o.has('environment') &&
              this.records.set(Ht, No(void 0, this));
          const i = this.records.get(Vd);
          null != i &&
            'string' == typeof i.value &&
            this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(
              this.get(xd, ee, Y.Self),
            ));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const t = F(null);
          try {
            for (const r of this._ngOnDestroyHooks) r.ngOnDestroy();
            const n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const r of n) r();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              F(t);
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
          const n = lr(this),
            r = At(void 0);
          try {
            return t();
          } finally {
            lr(n), At(r);
          }
        }
        get(t, n = Hi, r = Y.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(bv)))
            return t[bv](this);
          r = Ja(r);
          const i = lr(this),
            s = At(void 0);
          try {
            if (!(r & Y.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const u =
                  (function $N(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof D)
                    );
                  })(t) && Qa(t);
                (c =
                  u && this.injectableDefInScope(u)
                    ? No(Ud(t), sc)
                    : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & Y.Self ? ac() : this.parent).get(
              t,
              (n = r & Y.Optional && n === Hi ? null : n),
            );
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[Xa] = a[Xa] || []).unshift(Ze(t)), i)) throw a;
              return (function hN(e, t, n, r) {
                const o = e[Xa];
                throw (
                  (t[Sv] && o.unshift(t[Sv]),
                  (e.message = (function pN(e, t, n, r = null) {
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
                    }[${o}]: ${e.replace(cN, '\n  ')}`;
                  })('\n' + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[Xa] = null),
                  e)
                );
              })(a, t, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            At(s), lr(i);
          }
        }
        resolveInjectorInitializers() {
          const t = F(null),
            n = lr(this),
            r = At(void 0);
          try {
            const i = this.get($t, ee, Y.Self);
            for (const s of i) s();
          } finally {
            lr(n), At(r), F(t);
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
          let n = Vr((t = k(t))) ? t : k(t && t.provide);
          const r = (function jN(e) {
            return Ld(e) ? No(void 0, e.useValue) : No(Gv(e), sc);
          })(t);
          if (!Vr(t) && !0 === t.multi) {
            let o = this.records.get(n);
            o ||
              ((o = No(void 0, sc, !0)),
              (o.factory = () => Md(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          const r = F(null);
          try {
            return (
              n.value === sc &&
                ((n.value = LN), (n.value = n.factory())),
              'object' == typeof n.value &&
                n.value &&
                (function BN(e) {
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
            F(r);
          }
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = k(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function Ud(e) {
        const t = Qa(e),
          n = null !== t ? t.factory : Lr(e);
        if (null !== n) return n;
        if (e instanceof D) throw new E(204, !1);
        if (e instanceof Function)
          return (function VN(e) {
            if (e.length > 0) throw new E(204, !1);
            const n = (function tN(e) {
              return (e && (e[Ka] || e[Cv])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new E(204, !1);
      }
      function Gv(e, t, n) {
        let r;
        if (Vr(e)) {
          const o = k(e);
          return Lr(o) || Ud(o);
        }
        if (Ld(e)) r = () => k(e.useValue);
        else if (
          (function zv(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Md(e.deps || []));
        else if (
          (function Hv(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => x(k(e.useExisting));
        else {
          const o = k(e && (e.useClass || e.provide));
          if (
            !(function UN(e) {
              return !!e.deps;
            })(e)
          )
            return Lr(o) || Ud(o);
          r = () => new o(...Md(e.deps));
        }
        return r;
      }
      function No(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Bd(e, t) {
        for (const n of e)
          Array.isArray(n)
            ? Bd(n, t)
            : n && Ed(n)
            ? Bd(n.ɵproviders, t)
            : t(n);
      }
      function Gn(e, t) {
        e instanceof Ao && e.assertNotDestroyed();
        const r = lr(e),
          o = At(void 0);
        try {
          return t();
        } finally {
          lr(r), At(o);
        }
      }
      function qv() {
        return (
          void 0 !== wv() ||
          null !=
            (function lN() {
              return Io;
            })()
        );
      }
      const Se = 0,
        w = 1,
        A = 2,
        Be = 3,
        cn = 4,
        it = 5,
        vt = 6,
        xo = 7,
        _e = 8,
        $e = 9,
        In = 10,
        P = 11,
        Qi = 12,
        Zv = 13,
        Oo = 14,
        Me = 15,
        jr = 16,
        Fo = 17,
        qn = 18,
        ko = 19,
        Qv = 20,
        hr = 21,
        uc = 22,
        Yt = 23,
        T = 25,
        Hd = 1,
        Sn = 7,
        Po = 9,
        Fe = 10;
      var dc = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(dc || {});
      function nt(e) {
        return Array.isArray(e) && 'object' == typeof e[Hd];
      }
      function ut(e) {
        return Array.isArray(e) && !0 === e[Hd];
      }
      function zd(e) {
        return !!(4 & e.flags);
      }
      function Ur(e) {
        return e.componentOffset > -1;
      }
      function fc(e) {
        return !(1 & ~e.flags);
      }
      function un(e) {
        return !!e.template;
      }
      function Ki(e) {
        return !!(512 & e[A]);
      }
      class tR {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Jv(e, t, n, r) {
        null !== t ? t.applyValueToInputSignal(t, r) : (e[n] = r);
      }
      function Kt() {
        return ey;
      }
      function ey(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = rR), nR;
      }
      function nR() {
        const e = ny(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === wn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function rR(e, t, n, r, o) {
        const i = this.declaredInputs[r],
          s =
            ny(e) ||
            (function oR(e, t) {
              return (e[ty] = t);
            })(e, { previous: wn, current: null }),
          a = s.current || (s.current = {}),
          c = s.previous,
          u = c[i];
        (a[i] = new tR(u && u.currentValue, n, c === wn)),
          Jv(e, t, o, n);
      }
      Kt.ngInherit = !0;
      const ty = '__ngSimpleChanges__';
      function ny(e) {
        return e[ty] || null;
      }
      const Mn = function (e, t, n) {};
      function te(e) {
        for (; Array.isArray(e); ) e = e[Se];
        return e;
      }
      function Xi(e, t) {
        return te(t[e]);
      }
      function yt(e, t) {
        return te(t[e.index]);
      }
      function Ji(e, t) {
        return e.data[t];
      }
      function zt(e, t) {
        const n = t[e];
        return nt(n) ? n : n[Se];
      }
      function Qd(e) {
        return !(128 & ~e[A]);
      }
      function Xt(e, t) {
        return null == t ? null : e[t];
      }
      function iy(e) {
        e[Fo] = 0;
      }
      function sy(e) {
        1024 & e[A] || ((e[A] |= 1024), Qd(e) && hc(e));
      }
      function es(e) {
        return !!(9216 & e[A] || e[Yt]?.dirty);
      }
      function Yd(e) {
        e[In].changeDetectionScheduler?.notify(7),
          64 & e[A] && (e[A] |= 1024),
          es(e) && hc(e);
      }
      function hc(e) {
        e[In].changeDetectionScheduler?.notify(0);
        let t = Wn(e);
        for (
          ;
          null !== t && !(8192 & t[A]) && ((t[A] |= 8192), Qd(t));

        )
          t = Wn(t);
      }
      function pc(e, t) {
        if (!(256 & ~e[A])) throw new E(911, !1);
        null === e[hr] && (e[hr] = []), e[hr].push(t);
      }
      function Wn(e) {
        const t = e[Be];
        return ut(t) ? t[Be] : t;
      }
      const L = {
        lFrame: _y(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      let cy = !1;
      function uy() {
        return L.bindingsEnabled;
      }
      function $r() {
        return null !== L.skipHydrationRootTNode;
      }
      function v() {
        return L.lFrame.lView;
      }
      function G() {
        return L.lFrame.tView;
      }
      function ln(e) {
        return (L.lFrame.contextLView = e), e[_e];
      }
      function dn(e) {
        return (L.lFrame.contextLView = null), e;
      }
      function fe() {
        let e = ly();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ly() {
        return L.lFrame.currentTNode;
      }
      function fn(e, t) {
        const n = L.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Jd() {
        return L.lFrame.isParent;
      }
      function ef() {
        L.lFrame.isParent = !1;
      }
      function hy() {
        return cy;
      }
      function py(e) {
        cy = e;
      }
      function hn() {
        return L.lFrame.bindingIndex++;
      }
      function yR(e, t) {
        const n = L.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), tf(t);
      }
      function tf(e) {
        L.lFrame.currentDirectiveIndex = e;
      }
      function rf() {
        return L.lFrame.currentQueryIndex;
      }
      function mc(e) {
        L.lFrame.currentQueryIndex = e;
      }
      function CR(e) {
        const t = e[w];
        return 2 === t.type
          ? t.declTNode
          : 1 === t.type
          ? e[it]
          : null;
      }
      function vy(e, t, n) {
        if (n & Y.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Y.Host ||
              ((o = CR(i)),
              null === o || ((i = i[Oo]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (L.lFrame = yy());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function sf(e) {
        const t = yy(),
          n = e[w];
        (L.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function yy() {
        const e = L.lFrame,
          t = null === e ? null : e.child;
        return null === t ? _y(e) : t;
      }
      function _y(e) {
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
      function Cy() {
        const e = L.lFrame;
        return (
          (L.lFrame = e.parent),
          (e.currentTNode = null),
          (e.lView = null),
          e
        );
      }
      const Ey = Cy;
      function af() {
        const e = Cy();
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
        return L.lFrame.selectedIndex;
      }
      function Hr(e) {
        L.lFrame.selectedIndex = e;
      }
      function Ce() {
        const e = L.lFrame;
        return Ji(e.tView, e.selectedIndex);
      }
      let by = !0;
      function ns() {
        return by;
      }
      function Tn(e) {
        by = e;
      }
      function vc(e, t) {
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
      function yc(e, t, n) {
        wy(e, t, 3, n);
      }
      function _c(e, t, n, r) {
        (3 & e[A]) === n && wy(e, t, n, r);
      }
      function cf(e, t) {
        let n = e[A];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[A] = n));
      }
      function wy(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let a = 0;
        for (let c = void 0 !== r ? 65535 & e[Fo] : 0; c < s; c++)
          if ('number' == typeof t[c + 1]) {
            if (((a = t[c]), null != r && a >= r)) break;
          } else
            t[c] < 0 && (e[Fo] += 65536),
              (a < i || -1 == i) &&
                (MR(e, n, t, c),
                (e[Fo] = (4294901760 & e[Fo]) + c + 2)),
              c++;
      }
      function Iy(e, t) {
        Mn(4, e, t);
        const n = F(null);
        try {
          t.call(e);
        } finally {
          F(n), Mn(5, e, t);
        }
      }
      function MR(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        o
          ? e[A] >> 14 < e[Fo] >> 16 &&
            (3 & e[A]) === t &&
            ((e[A] += 16384), Iy(a, i))
          : Iy(a, i);
      }
      const Lo = -1;
      class rs {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      const lf = {};
      class zr {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Ja(r);
          const o = this.injector.get(t, lf, r);
          return o !== lf || n === lf
            ? o
            : this.parentInjector.get(t, n, r);
        }
      }
      function df(e) {
        return e !== Lo;
      }
      function os(e) {
        return 32767 & e;
      }
      function is(e, t) {
        let n = (function RR(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Oo]), n--;
        return r;
      }
      let ff = !0;
      function Cc(e) {
        const t = ff;
        return (ff = e), t;
      }
      const My = 255,
        Ty = 5;
      let OR = 0;
      const An = {};
      function Ec(e, t) {
        const n = Ay(e, t);
        if (-1 !== n) return n;
        const r = t[w];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          hf(r.data, e),
          hf(t, null),
          hf(r.blueprint, null));
        const o = Dc(e, t),
          i = e.injectorIndex;
        if (df(o)) {
          const s = os(o),
            a = is(o, t),
            c = a[w].data;
          for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
        }
        return (t[i + 8] = o), i;
      }
      function hf(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Ay(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Dc(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = Py(o)), null === r)) return Lo;
          if ((n++, (o = o[Oo]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return Lo;
      }
      function pf(e, t, n) {
        !(function FR(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty($i) && (r = n[$i]),
            null == r && (r = n[$i] = OR++);
          const o = r & My;
          t.data[e + (o >> Ty)] |= 1 << o;
        })(e, t, n);
      }
      function Ny(e, t, n) {
        if (n & Y.Optional || void 0 !== e) return e;
        wd();
      }
      function Ry(e, t, n, r) {
        if (
          (n & Y.Optional && void 0 === r && (r = null),
          !(n & (Y.Self | Y.Host)))
        ) {
          const o = e[$e],
            i = At(void 0);
          try {
            return o
              ? o.get(t, r, n & Y.Optional)
              : Iv(t, r, n & Y.Optional);
          } finally {
            At(i);
          }
        }
        return Ny(r, 0, n);
      }
      function xy(e, t, n, r = Y.Default, o) {
        if (null !== e) {
          if (2048 & t[A] && !(r & Y.Self)) {
            const s = (function jR(e, t, n, r, o) {
              let i = e,
                s = t;
              for (
                ;
                null !== i &&
                null !== s &&
                2048 & s[A] &&
                !(512 & s[A]);

              ) {
                const a = Oy(i, s, n, r | Y.Self, An);
                if (a !== An) return a;
                let c = i.parent;
                if (!c) {
                  const u = s[Qv];
                  if (u) {
                    const l = u.get(n, An, r);
                    if (l !== An) return l;
                  }
                  (c = Py(s)), (s = s[Oo]);
                }
                i = c;
              }
              return o;
            })(e, t, n, r, An);
            if (s !== An) return s;
          }
          const i = Oy(e, t, n, r, An);
          if (i !== An) return i;
        }
        return Ry(t, n, r, o);
      }
      function Oy(e, t, n, r, o) {
        const i = (function LR(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty($i) ? e[$i] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & My : VR) : t;
        })(n);
        if ('function' == typeof i) {
          if (!vy(t, e, r))
            return r & Y.Host ? Ny(o, 0, r) : Ry(t, n, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & Y.Optional)) return s;
            wd();
          } finally {
            Ey();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = Ay(e, t),
            c = Lo,
            u = r & Y.Host ? t[Me][it] : null;
          for (
            (-1 === a || r & Y.SkipSelf) &&
            ((c = -1 === a ? Dc(e, t) : t[a + 8]),
            c !== Lo && ky(r, !1)
              ? ((s = t[w]), (a = os(c)), (t = is(c, t)))
              : (a = -1));
            -1 !== a;

          ) {
            const l = t[w];
            if (Fy(i, a, l.data)) {
              const d = PR(a, t, n, s, r, u);
              if (d !== An) return d;
            }
            (c = t[a + 8]),
              c !== Lo && ky(r, t[w].data[a + 8] === u) && Fy(i, a, t)
                ? ((s = l), (a = os(c)), (t = is(c, t)))
                : (a = -1);
          }
        }
        return o;
      }
      function PR(e, t, n, r, o, i) {
        const s = t[w],
          a = s.data[e + 8],
          l = bc(
            a,
            s,
            n,
            null == r ? Ur(a) && ff : r != s && !!(3 & a.type),
            o & Y.Host && i === a,
          );
        return null !== l ? Gr(t, s, l, a) : An;
      }
      function bc(e, t, n, r, o) {
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
          if (h && un(h) && h.type === n) return c;
        }
        return null;
      }
      function Gr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function TR(e) {
            return e instanceof rs;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function iN(e, t) {
              throw (t && t.join(' > '), new E(-200, e));
            })(
              (function se(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e &&
                    null != e &&
                    'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : U(e);
              })(i[n]),
            );
          const a = Cc(s.canSeeViewProviders);
          s.resolving = !0;
          const u = s.injectImpl ? At(s.injectImpl) : null;
          vy(e, r, Y.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function SR(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const s = ey(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  o && (n.preOrderHooks ??= []).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks ??= []).push(e, i),
                      (n.preOrderCheckHooks ??= []).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== u && At(u), Cc(a), (s.resolving = !1), Ey();
          }
        }
        return o;
      }
      function Fy(e, t, n) {
        return !!(n[t + (e >> Ty)] & (1 << e));
      }
      function ky(e, t) {
        return !(e & Y.Self || (e & Y.Host && t));
      }
      class Ke {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return xy(this._tNode, this._lView, t, Ja(r), n);
        }
      }
      function VR() {
        return new Ke(fe(), v());
      }
      function Xe(e) {
        return Hn(() => {
          const t = e.prototype.constructor,
            n = t[zn] || gf(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[zn] || gf(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function gf(e) {
        return Za(e)
          ? () => {
              const t = gf(k(e));
              return t && t();
            }
          : Lr(e);
      }
      function Py(e) {
        const t = e[w],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[it] : null;
      }
      function By(e, t = null, n = null, r) {
        const o = $y(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function $y(e, t = null, n = null, r, o = new Set()) {
        const i = [n || ee, FN(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : Ze(e))),
          new Ao(i, t || ac(), r || null, o)
        );
      }
      class He {
        static #e = (this.THROW_IF_NOT_FOUND = Hi);
        static #t = (this.NULL = new nc());
        static create(t, n) {
          if (Array.isArray(t)) return By({ name: '' }, n, t, '');
          {
            const r = t.name ?? '';
            return By({ name: r }, t.parent, t.providers, r);
          }
        }
        static #n = (this.ɵprov = S({
          token: He,
          providedIn: 'any',
          factory: () => x(xv),
        }));
        static #r = (this.__NG_ELEMENT_ID__ = -1);
      }
      new D('').__NG_ELEMENT_ID__ = e => {
        const t = fe();
        if (null === t) throw new E(204, !1);
        if (2 & t.type) return t.value;
        if (e & Y.Optional) return null;
        throw new E(204, !1);
      };
      function vf(e) {
        return e.ngOriginalError;
      }
      let qr = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = QR);
          static #t = (this.__NG_ENV_ID__ = n => n);
        }
        return e;
      })();
      class ZR extends qr {
        constructor(t) {
          super(), (this._lView = t);
        }
        onDestroy(t) {
          return (
            pc(this._lView, t),
            () =>
              (function Kd(e, t) {
                if (null === e[hr]) return;
                const n = e[hr].indexOf(t);
                -1 !== n && e[hr].splice(n, 1);
              })(this._lView, t)
          );
        }
      }
      function QR() {
        return new ZR(v());
      }
      let Wr = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new mt(!1));
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
      const K = class YR extends Tt {
        constructor(t = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = t),
            qv() &&
              ((this.destroyRef = _(qr, { optional: !0 }) ?? void 0),
              (this.pendingTasks =
                _(Wr, { optional: !0 }) ?? void 0));
        }
        emit(t) {
          const n = F(null);
          try {
            super.next(t);
          } finally {
            F(n);
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
      function Ic(...e) {}
      function zy(e) {
        let t, n;
        function r() {
          e = Ic;
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
      function Gy(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = Ic;
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
            (this.onUnstable = new K(!1)),
            (this.onMicrotaskEmpty = new K(!1)),
            (this.onStable = new K(!1)),
            (this.onError = new K(!1)),
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
            (function JR(e) {
              const t = () => {
                !(function XR(e) {
                  e.isCheckStableRunning ||
                    e.callbackScheduled ||
                    ((e.callbackScheduled = !0),
                    Zone.root.run(() => {
                      zy(() => {
                        (e.callbackScheduled = !1),
                          _f(e),
                          (e.isCheckStableRunning = !0),
                          yf(e),
                          (e.isCheckStableRunning = !1);
                      });
                    }),
                    _f(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, a) => {
                  if (
                    (function ex(e) {
                      return Zy(e, '__ignore_ng_zone__');
                    })(a)
                  )
                    return n.invokeTask(o, i, s, a);
                  try {
                    return qy(e), n.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Wy(e);
                  }
                },
                onInvoke: (n, r, o, i, s, a, c) => {
                  try {
                    return qy(e), n.invoke(o, i, s, a, c);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function tx(e) {
                        return Zy(e, '__scheduler_tick__');
                      })(a) &&
                      t(),
                      Wy(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          _f(e),
                          yf(e))
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
              KR,
              Ic,
              Ic,
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
      const KR = {};
      function yf(e) {
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
      function _f(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function qy(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Wy(e) {
        e._nesting--, yf(e);
      }
      class Cf {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new K()),
            (this.onMicrotaskEmpty = new K()),
            (this.onStable = new K()),
            (this.onError = new K());
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
      function Zy(e, t) {
        return (
          !(!Array.isArray(e) || 1 !== e.length) &&
          !0 === e[0]?.data?.[t]
        );
      }
      class pn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && vf(t);
          for (; n && vf(n); ) n = vf(n);
          return n || null;
        }
      }
      const rx = new D('', {
        providedIn: 'root',
        factory: () => {
          const e = _(ae),
            t = _(pn);
          return n => e.runOutsideAngular(() => t.handleError(n));
        },
      });
      function ox() {
        return Uo(fe(), v());
      }
      function Uo(e, t) {
        return new Gt(yt(e, t));
      }
      let Gt = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
          static #e = (this.__NG_ELEMENT_ID__ = ox);
        }
        return e;
      })();
      function Yy(e) {
        return e instanceof Gt ? e.nativeElement : e;
      }
      function ix() {
        return this._results[Symbol.iterator]();
      }
      class Ef {
        static #e = Symbol.iterator;
        get changes() {
          return (this._changes ??= new K());
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
          const n = Ef.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = ix);
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
          const r = (function Nt(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function vN(e, t, n) {
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
      function Sc(e) {
        return !(128 & ~e.flags);
      }
      const Df = new Map();
      let ax = 0;
      const Tc = '__ngContext__';
      function lt(e, t) {
        nt(t)
          ? ((e[Tc] = t[ko]),
            (function ux(e) {
              Df.set(e[ko], e);
            })(t))
          : (e[Tc] = t);
      }
      function s_(e) {
        return c_(e[Qi]);
      }
      function a_(e) {
        return c_(e[cn]);
      }
      function c_(e) {
        for (; null !== e && !ut(e); ) e = e[cn];
        return e;
      }
      let wf;
      const cs = new D('', { providedIn: 'root', factory: () => Mx }),
        Mx = 'ng',
        m_ = new D(''),
        Zr = new D('', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        v_ = new D('', {
          providedIn: 'root',
          factory: () =>
            (function pr() {
              if (void 0 !== wf) return wf;
              if (typeof document < 'u') return document;
              throw new E(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let y_ = () => null;
      function Rf(e, t, n = !1) {
        return y_(e, t, n);
      }
      const S_ = new D('', { providedIn: 'root', factory: () => !1 });
      let Vc;
      function R_(e) {
        return (
          (function Lf() {
            if (void 0 === Vc && ((Vc = null), we.trustedTypes))
              try {
                Vc = we.trustedTypes.createPolicy(
                  'angular#unsafe-bypass',
                  {
                    createHTML: e => e,
                    createScript: e => e,
                    createScriptURL: e => e,
                  },
                );
              } catch {}
            return Vc;
          })()?.createScriptURL(e) || e
        );
      }
      class x_ {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${gv})`;
        }
      }
      function gr(e) {
        return e instanceof x_
          ? e.changingThisBreaksApplicationSecurity
          : e;
      }
      function gs(e, t) {
        const n = (function qx(e) {
          return (e instanceof x_ && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see ${gv})`,
          );
        }
        return n === t;
      }
      const Yx =
        /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Go = (function (e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })(Go || {});
      function $f(e) {
        const t = vs();
        return t
          ? t.sanitize(Go.URL, e) || ''
          : gs(e, 'URL')
          ? gr(e)
          : (function Vf(e) {
              return (e = String(e)).match(Yx) ? e : 'unsafe:' + e;
            })(U(e));
      }
      function B_(e) {
        const t = vs();
        if (t) return R_(t.sanitize(Go.RESOURCE_URL, e) || '');
        if (gs(e, 'ResourceURL')) return R_(gr(e));
        throw new E(904, !1);
      }
      function vs() {
        const e = v();
        return e && e[In].sanitizer;
      }
      const fO = /^>|^->|<!--|-->|--!>|<!-$/g,
        hO = /(<|>)/g,
        pO = '\u200b$1\u200b';
      function qt(e) {
        return e instanceof Function ? e() : e;
      }
      var mr = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })(mr || {});
      let Gf;
      function qf(e, t) {
        return Gf(e, t);
      }
      function Wo(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          ut(r) ? (i = r) : nt(r) && ((s = !0), (r = r[Se]));
          const a = te(r);
          0 === e && null !== n
            ? null == o
              ? tC(t, n, a)
              : Qr(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? Qr(t, n, a, o || null, !0)
            : 2 === e
            ? (function _s(e, t, n) {
                e.removeChild(null, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function FO(e, t, n, r, o) {
                const i = n[Sn];
                i !== te(n) && Wo(t, e, r, i, o);
                for (let a = Fe; a < n.length; a++) {
                  const c = n[a];
                  Gc(c[w], c, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Zf(e, t) {
        return e.createComment(
          (function H_(e) {
            return e.replace(fO, t => t.replace(hO, pO));
          })(t),
        );
      }
      function $c(e, t, n) {
        return e.createElement(t, n);
      }
      function X_(e, t) {
        t[In].changeDetectionScheduler?.notify(8),
          Gc(e, t, t[P], 2, null, null);
      }
      function J_(e, t) {
        const n = e[Po],
          r = t[Be];
        (nt(r) || t[Me] !== r[Be][Me]) &&
          (e[A] |= dc.HasTransplantedViews),
          null === n ? (e[Po] = [t]) : n.push(t);
      }
      function Qf(e, t) {
        const n = e[Po],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function ys(e, t) {
        if (e.length <= Fe) return;
        const n = Fe + t,
          r = e[n];
        if (r) {
          const o = r[jr];
          null !== o && o !== e && Qf(o, r),
            t > 0 && (e[n - 1][cn] = r[cn]);
          const i = ec(e, Fe + t);
          !(function SO(e, t) {
            X_(e, t), (t[Se] = null), (t[it] = null);
          })(r[w], r);
          const s = i[qn];
          null !== s && s.detachView(i[w]),
            (r[Be] = null),
            (r[cn] = null),
            (r[A] &= -129);
        }
        return r;
      }
      function Hc(e, t) {
        if (!(256 & t[A])) {
          const n = t[P];
          n.destroyNode && Gc(e, t, n, 3, null, null),
            (function TO(e) {
              let t = e[Qi];
              if (!t) return Yf(e[w], e);
              for (; t; ) {
                let n = null;
                if (nt(t)) n = t[Qi];
                else {
                  const r = t[Fe];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[cn] && t !== e; )
                    nt(t) && Yf(t[w], t), (t = t[Be]);
                  null === t && (t = e),
                    nt(t) && Yf(t[w], t),
                    (n = t && t[cn]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Yf(e, t) {
        if (256 & t[A]) return;
        const n = F(null);
        try {
          (t[A] &= -129),
            (t[A] |= 256),
            t[Yt] && Yl(t[Yt]),
            (function RO(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof rs)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          c = i[s + 1];
                        Mn(4, a, c);
                        try {
                          c.call(a);
                        } finally {
                          Mn(5, a, c);
                        }
                      }
                    else {
                      Mn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Mn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function NO(e, t) {
              const n = e.cleanup,
                r = t[xo];
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else n[i].call(r[n[i + 1]]);
              null !== r && (t[xo] = null);
              const o = t[hr];
              if (null !== o) {
                t[hr] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, t),
            1 === t[w].type && t[P].destroy();
          const r = t[jr];
          if (null !== r && ut(t[Be])) {
            r !== t[Be] && Qf(r, t);
            const o = t[qn];
            null !== o && o.detachView(e);
          }
          !(function lx(e) {
            Df.delete(e[ko]);
          })(t);
        } finally {
          F(n);
        }
      }
      function Kf(e, t, n) {
        return (function eC(e, t, n) {
          let r = t;
          for (; null !== r && 168 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Se];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } =
                e.data[r.directiveStart + o];
              if (i === sn.None || i === sn.Emulated) return null;
            }
            return yt(r, n);
          }
        })(e, t.parent, n);
      }
      function Qr(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function tC(e, t, n) {
        e.appendChild(t, n);
      }
      function nC(e, t, n, r, o) {
        null !== r ? Qr(e, t, n, r, o) : tC(e, t, n);
      }
      function Xf(e, t) {
        return e.parentNode(t);
      }
      function rC(e, t, n) {
        return iC(e, t, n);
      }
      let Jf,
        iC = function oC(e, t, n) {
          return 40 & e.type ? yt(e, n) : null;
        };
      function zc(e, t, n, r) {
        const o = Kf(e, r, t),
          i = t[P],
          a = rC(r.parent || t[it], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) nC(i, o, n[c], a, !1);
          else nC(i, o, n, a, !1);
        void 0 !== Jf && Jf(i, r, t, n, o);
      }
      function Yr(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return yt(t, e);
          if (4 & n) return eh(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Yr(e, r);
            {
              const o = e[t.index];
              return ut(o) ? eh(-1, o) : te(o);
            }
          }
          if (128 & n) return Yr(e, t.next);
          if (32 & n) return qf(t, e)() || te(e[t.index]);
          {
            const r = aC(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Yr(Wn(e[Me]), r)
              : Yr(e, t.next);
          }
        }
        return null;
      }
      function aC(e, t) {
        return null !== t ? e[Me][it].projection[t.projection] : null;
      }
      function eh(e, t) {
        const n = Fe + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[w].firstChild;
          if (null !== o) return Yr(r, o);
        }
        return t[Sn];
      }
      function th(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          if (128 === n.type) {
            n = n.next;
            continue;
          }
          const a = r[n.index],
            c = n.type;
          if (
            (s && 0 === t && (a && lt(te(a), r), (n.flags |= 2)),
            32 & ~n.flags)
          )
            if (8 & c)
              th(e, t, n.child, r, o, i, !1), Wo(t, e, o, a, i);
            else if (32 & c) {
              const u = qf(n, r);
              let l;
              for (; (l = u()); ) Wo(t, e, o, l, i);
              Wo(t, e, o, a, i);
            } else 16 & c ? uC(e, t, r, n, o, i) : Wo(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function Gc(e, t, n, r, o, i) {
        th(n, r, e.firstChild, t, o, i, !1);
      }
      function uC(e, t, n, r, o, i) {
        const s = n[Me],
          c = s[it].projection[r.projection];
        if (Array.isArray(c))
          for (let u = 0; u < c.length; u++) Wo(t, e, o, c[u], i);
        else {
          let u = c;
          const l = s[Be];
          Sc(r) && (u.flags |= 128), th(e, t, u, l, o, i, !0);
        }
      }
      function lC(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function dC(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && Od(e, t, r),
          null !== o && lC(e, t, o),
          null !== i &&
            (function PO(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      const B = {};
      function j(e = 1) {
        fC(G(), v(), st() + e, !1);
      }
      function fC(e, t, n, r) {
        if (!r)
          if (3 & ~t[A]) {
            const i = e.preOrderHooks;
            null !== i && _c(t, i, 0, n);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && yc(t, i, n);
          }
        Hr(n);
      }
      function b(e, t = Y.Default) {
        const n = v();
        return null === n ? x(e, t) : xy(fe(), n, k(e), t);
      }
      function pC(e, t, n, r, o, i) {
        const s = F(null);
        try {
          let a = null;
          o & dr.SignalBased && (a = t[r][xe]),
            null !== a &&
              void 0 !== a.transformFn &&
              (i = a.transformFn(i)),
            o & dr.HasDecoratorInputTransform &&
              (i = e.inputTransforms[r].call(t, i)),
            null !== e.setInput
              ? e.setInput(t, a, i, n, r)
              : Jv(t, a, r, i);
        } finally {
          F(s);
        }
      }
      function qc(e, t, n, r, o, i, s, a, c, u, l) {
        const d = t.blueprint.slice();
        return (
          (d[Se] = o),
          (d[A] = 204 | r),
          (null !== u || (e && 2048 & e[A])) && (d[A] |= 2048),
          iy(d),
          (d[Be] = d[Oo] = e),
          (d[_e] = n),
          (d[In] = s || (e && e[In])),
          (d[P] = a || (e && e[P])),
          (d[$e] = c || (e && e[$e]) || null),
          (d[it] = i),
          (d[ko] = (function cx() {
            return ax++;
          })()),
          (d[vt] = l),
          (d[Qv] = u),
          (d[Me] = 2 == t.type ? e[Me] : d),
          d
        );
      }
      function Kr(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function nh(e, t, n, r, o) {
            const i = ly(),
              s = Jd(),
              c = (e.data[t] = (function zO(e, t, n, r, o, i) {
                let s = t ? t.injectorIndex : -1,
                  a = 0;
                return (
                  $r() && (a |= 128),
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
            (function vR() {
              return L.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function ts() {
            const e = L.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return fn(i, !0), i;
      }
      function Cs(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function gC(e, t, n, r, o) {
        const i = st(),
          s = 2 & r;
        try {
          Hr(-1),
            s && t.length > T && fC(e, t, T, !1),
            Mn(s ? 2 : 0, o),
            n(r, o);
        } finally {
          Hr(i), Mn(s ? 3 : 1, o);
        }
      }
      function rh(e, t, n) {
        if (zd(t)) {
          const r = F(null);
          try {
            const i = t.directiveEnd;
            for (let s = t.directiveStart; s < i; s++) {
              const a = e.data[s];
              a.contentQueries && a.contentQueries(1, n[s], s);
            }
          } finally {
            F(r);
          }
        }
      }
      function oh(e, t, n) {
        uy() &&
          ((function KO(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            Ur(n) &&
              (function oF(e, t, n) {
                const r = yt(t, e),
                  o = mC(n);
                let s = 16;
                n.signals ? (s = 4096) : n.onPush && (s = 64);
                const a = Wc(
                  e,
                  qc(
                    e,
                    o,
                    null,
                    s,
                    r,
                    t,
                    null,
                    e[In].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null,
                  ),
                );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || Ec(n, t),
              lt(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const c = e.data[a],
                u = Gr(t, e, a, n);
              lt(u, t),
                null !== s && iF(0, a - o, u, c, 0, s),
                un(c) && (zt(n.index, t)[_e] = Gr(t, e, a, n));
            }
          })(e, t, n, yt(n, t)),
          !(64 & ~n.flags) && EC(e, t, n));
      }
      function ih(e, t, n = yt) {
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
      function mC(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = sh(
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
      function sh(e, t, n, r, o, i, s, a, c, u, l) {
        const d = T + r,
          f = d + o,
          h = (function VO(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : B);
            return n;
          })(d, f),
          p = 'function' == typeof u ? u() : u;
        return (h[w] = {
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
      let vC = () => null;
      function yC(e, t, n, r, o) {
        for (let i in t) {
          if (!t.hasOwnProperty(i)) continue;
          const s = t[i];
          if (void 0 === s) continue;
          r ??= {};
          let a,
            c = dr.None;
          Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
          let u = i;
          if (null !== o) {
            if (!o.hasOwnProperty(i)) continue;
            u = o[i];
          }
          0 === e ? _C(r, n, u, a, c) : _C(r, n, u, a);
        }
        return r;
      }
      function _C(e, t, n, r, o) {
        let i;
        e.hasOwnProperty(n)
          ? (i = e[n]).push(t, r)
          : (i = e[n] = [t, r]),
          void 0 !== o && i.push(o);
      }
      function ah(e, t, n, r) {
        if (uy()) {
          const o = null === r ? null : { '': -1 },
            i = (function JO(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if (Lv(t, s.selectors, !1))
                    if ((r || (r = []), un(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()),
                          s.findHostDirectiveDefs(s, a, o),
                          r.unshift(...a, s),
                          ch(e, t, a.length);
                      } else r.unshift(s), ch(e, t, 0);
                    else
                      (o = o || new Map()),
                        s.findHostDirectiveDefs?.(s, r, o),
                        r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && CC(e, t, n, s, o, a),
            o &&
              (function eF(e, t, n) {
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
        n.mergedAttrs = Gi(n.mergedAttrs, n.attrs);
      }
      function CC(e, t, n, r, o, i) {
        for (let u = 0; u < r.length; u++) pf(Ec(n, t), e, r[u].type);
        !(function nF(e, t, n) {
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
          c = Cs(e, t, r.length, null);
        for (let u = 0; u < r.length; u++) {
          const l = r[u];
          (n.mergedAttrs = Gi(n.mergedAttrs, l.hostAttrs)),
            rF(e, n, t, c, l),
            tF(c, l, o),
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
        !(function GO(e, t, n) {
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
            (c = yC(0, d.inputs, l, c, f ? f.inputs : null)),
              (u = yC(1, d.outputs, l, u, p));
            const g =
              null === c || null === s || Fd(t) ? null : sF(c, l, s);
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
      function EC(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function _R() {
            return L.lFrame.currentDirectiveIndex;
          })();
        try {
          Hr(i);
          for (let a = r; a < o; a++) {
            const c = e.data[a],
              u = t[a];
            tf(a),
              (null !== c.hostBindings ||
                0 !== c.hostVars ||
                null !== c.hostAttrs) &&
                XO(c, u);
          }
        } finally {
          Hr(-1), tf(s);
        }
      }
      function XO(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function ch(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function tF(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
              n[t.exportAs[r]] = e;
          un(t) && (n[''] = e);
        }
      }
      function rF(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Lr(o.type)),
          s = new rs(i, un(o), b);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function QO(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const a = ~t.index;
              (function YO(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != a && s.push(a),
                s.push(n, r, i);
            }
          })(e, t, r, Cs(e, n, o.hostVars, B), o);
      }
      function Nn(e, t, n, r, o, i) {
        const s = yt(e, t);
        !(function uh(e, t, n, r, o, i, s) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const a = null == s ? U(i) : s(i, r || '', o);
            e.setAttribute(t, o, a, n);
          }
        })(t[P], s, i, e.value, n, r, o);
      }
      function iF(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s)
          for (let a = 0; a < s.length; )
            pC(r, n, s[a++], s[a++], s[a++], s[a++]);
      }
      function sF(e, t, n) {
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
      function DC(e, t, n, r) {
        return [e, !0, 0, t, null, r, null, n, null, null];
      }
      function bC(e, t) {
        const n = e.contentQueries;
        if (null !== n) {
          const r = F(null);
          try {
            for (let o = 0; o < n.length; o += 2) {
              const s = n[o + 1];
              if (-1 !== s) {
                const a = e.data[s];
                mc(n[o]), a.contentQueries(2, t[s], s);
              }
            }
          } finally {
            F(r);
          }
        }
      }
      function Wc(e, t) {
        return e[Qi] ? (e[Zv][cn] = t) : (e[Qi] = t), (e[Zv] = t), t;
      }
      function lh(e, t, n) {
        mc(0);
        const r = F(null);
        try {
          t(e, n);
        } finally {
          F(r);
        }
      }
      function wC(e) {
        return (e[xo] ??= []);
      }
      function IC(e) {
        return (e.cleanup ??= []);
      }
      function Zc(e, t) {
        const n = e[$e],
          r = n ? n.get(pn, null) : null;
        r && r.handleError(t);
      }
      function dh(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            c = n[i++];
          pC(e.data[s], t[s], r, a, c, o);
        }
      }
      function aF(e, t) {
        const n = zt(t, e),
          r = n[w];
        !(function cF(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const o = n[Se];
        null !== o && null === n[vt] && (n[vt] = Rf(o, n[$e])),
          fh(r, n, n[_e]);
      }
      function fh(e, t, n) {
        sf(t);
        try {
          const r = e.viewQuery;
          null !== r && lh(1, r, n);
          const o = e.template;
          null !== o && gC(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            t[qn]?.finishViewCreation(e),
            e.staticContentQueries && bC(e, t),
            e.staticViewQueries && lh(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function uF(e, t) {
              for (let n = 0; n < t.length; n++) aF(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0),
              (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[A] &= -5), af();
        }
      }
      function Zo(e, t, n, r) {
        const o = F(null);
        try {
          const i = t.tView,
            c = qc(
              e,
              i,
              n,
              4096 & e[A] ? 4096 : 16,
              null,
              t,
              null,
              null,
              r?.injector ?? null,
              r?.embeddedViewInjector ?? null,
              r?.dehydratedView ?? null,
            );
          c[jr] = e[t.index];
          const l = e[qn];
          return (
            null !== l && (c[qn] = l.createEmbeddedView(i)),
            fh(i, c, n),
            c
          );
        } finally {
          F(o);
        }
      }
      function Xr(e, t) {
        return !t || null === t.firstChild || Sc(e);
      }
      function Qo(e, t, n, r = !0) {
        const o = t[w];
        if (
          ((function AO(e, t, n, r) {
            const o = Fe + r,
              i = n.length;
            r > 0 && (n[o - 1][cn] = t),
              r < i - Fe
                ? ((t[cn] = n[o]), Av(n, Fe + r, t))
                : (n.push(t), (t[cn] = null)),
              (t[Be] = n);
            const s = t[jr];
            null !== s && n !== s && J_(s, t);
            const a = t[qn];
            null !== a && a.insertView(e), Yd(t), (t[A] |= 128);
          })(o, t, e, n),
          r)
        ) {
          const s = eh(n, e),
            a = t[P],
            c = Xf(a, e[Sn]);
          null !== c &&
            (function MO(e, t, n, r, o, i) {
              (r[Se] = o), (r[it] = t), Gc(e, r, n, 1, o, i);
            })(o, e[it], a, t, c, s);
        }
        const i = t[vt];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function Es(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          if (128 === n.type) {
            n = o ? n.projectionNext : n.next;
            continue;
          }
          const i = t[n.index];
          null !== i && r.push(te(i)), ut(i) && TC(i, r);
          const s = n.type;
          if (8 & s) Es(e, t, n.child, r);
          else if (32 & s) {
            const a = qf(n, t);
            let c;
            for (; (c = a()); ) r.push(c);
          } else if (16 & s) {
            const a = aC(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const c = Wn(t[Me]);
              Es(c[w], c, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      function TC(e, t) {
        for (let n = Fe; n < e.length; n++) {
          const r = e[n],
            o = r[w].firstChild;
          null !== o && Es(r[w], r, o, t);
        }
        e[Sn] !== e[Se] && t.push(e[Sn]);
      }
      let AC = [];
      const hF = {
          ...q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            hc(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[Yt] = this;
          },
        },
        gF = {
          ...q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let t = Wn(e.lView);
            for (; t && !NC(t[w]); ) t = Wn(t);
            t && sy(t);
          },
          consumerOnSignalRead() {
            this.lView[Yt] = this;
          },
        };
      function NC(e) {
        return 2 !== e.type;
      }
      const mF = 100;
      function Qc(e, t = !0, n = 0) {
        const r = e[In],
          o = r.rendererFactory;
        o.begin?.();
        try {
          !(function vF(e, t) {
            const n = hy();
            try {
              py(!0), ph(e, t);
              let r = 0;
              for (; es(e); ) {
                if (r === mF) throw new E(103, !1);
                r++, ph(e, 1);
              }
            } finally {
              py(n);
            }
          })(e, n);
        } catch (s) {
          throw (t && Zc(e, s), s);
        } finally {
          o.end?.(), r.inlineEffectRunner?.flush();
        }
      }
      function yF(e, t, n, r) {
        const o = t[A];
        if (!(256 & ~o)) return;
        t[In].inlineEffectRunner?.flush(), sf(t);
        let a = !0,
          c = null,
          u = null;
        NC(e)
          ? ((u = (function lF(e) {
              return (
                e[Yt] ??
                (function dF(e) {
                  const t = AC.pop() ?? Object.create(hF);
                  return (t.lView = e), t;
                })(e)
              );
            })(t)),
            (c = Fa(u)))
          : null ===
            (function Ie() {
              return pe;
            })()
          ? ((a = !1),
            (u = (function pF(e) {
              const t = e[Yt] ?? Object.create(gF);
              return (t.lView = e), t;
            })(t)),
            (c = Fa(u)))
          : t[Yt] && (Yl(t[Yt]), (t[Yt] = null));
        try {
          iy(t),
            (function gy(e) {
              return (L.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && gC(e, t, n, 2, r);
          const l = !(3 & ~o);
          if (l) {
            const h = e.preOrderCheckHooks;
            null !== h && yc(t, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && _c(t, h, 0, null), cf(t, 0);
          }
          if (
            ((function _F(e) {
              for (let t = s_(e); null !== t; t = a_(t)) {
                if (!(t[A] & dc.HasTransplantedViews)) continue;
                const n = t[Po];
                for (let r = 0; r < n.length; r++) sy(n[r]);
              }
            })(t),
            xC(t, 0),
            null !== e.contentQueries && bC(e, t),
            l)
          ) {
            const h = e.contentCheckHooks;
            null !== h && yc(t, h);
          } else {
            const h = e.contentHooks;
            null !== h && _c(t, h, 1), cf(t, 1);
          }
          !(function LO(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const o = n[r];
                  if (o < 0) Hr(~o);
                  else {
                    const i = o,
                      s = n[++r],
                      a = n[++r];
                    yR(s, i), a(2, t[i]);
                  }
                }
              } finally {
                Hr(-1);
              }
          })(e, t);
          const d = e.components;
          null !== d && FC(t, d, 0);
          const f = e.viewQuery;
          if ((null !== f && lh(2, f, r), l)) {
            const h = e.viewCheckHooks;
            null !== h && yc(t, h);
          } else {
            const h = e.viewHooks;
            null !== h && _c(t, h, 2), cf(t, 2);
          }
          if (
            (!0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            t[uc])
          ) {
            for (const h of t[uc]) h();
            t[uc] = null;
          }
          t[A] &= -73;
        } catch (l) {
          throw (hc(t), l);
        } finally {
          null !== u &&
            (Zl(u, c),
            a &&
              (function fF(e) {
                e.lView[Yt] !== e && ((e.lView = null), AC.push(e));
              })(u)),
            af();
        }
      }
      function xC(e, t) {
        for (let n = s_(e); null !== n; n = a_(n))
          for (let r = Fe; r < n.length; r++) OC(n[r], t);
      }
      function CF(e, t, n) {
        OC(zt(t, e), n);
      }
      function OC(e, t) {
        Qd(e) && ph(e, t);
      }
      function ph(e, t) {
        const r = e[w],
          o = e[A],
          i = e[Yt];
        let s = !!(0 === t && 16 & o);
        if (
          ((s ||= !!(64 & o && 0 === t)),
          (s ||= !!(1024 & o)),
          (s ||= !(!i?.dirty || !Ql(i))),
          (s ||= !1),
          i && (i.dirty = !1),
          (e[A] &= -9217),
          s)
        )
          yF(r, e, r.template, e[_e]);
        else if (8192 & o) {
          xC(e, 1);
          const a = r.components;
          null !== a && FC(e, a, 1);
        }
      }
      function FC(e, t, n) {
        for (let r = 0; r < t.length; r++) CF(e, t[r], n);
      }
      function Ds(e, t) {
        const n = hy() ? 64 : 1088;
        for (e[In].changeDetectionScheduler?.notify(t); e; ) {
          e[A] |= n;
          const r = Wn(e);
          if (Ki(e) && !r) return e;
          e = r;
        }
        return null;
      }
      class bs {
        get rootNodes() {
          const t = this._lView,
            n = t[w];
          return Es(n, t, n.firstChild, []);
        }
        constructor(t, n, r = !0) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this.notifyErrorHandler = r),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[_e];
        }
        set context(t) {
          this._lView[_e] = t;
        }
        get destroyed() {
          return !(256 & ~this._lView[A]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Be];
            if (ut(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (ys(t, r), ec(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Hc(this._lView[w], this._lView);
        }
        onDestroy(t) {
          pc(this._lView, t);
        }
        markForCheck() {
          Ds(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[A] &= -129;
        }
        reattach() {
          Yd(this._lView), (this._lView[A] |= 128);
        }
        detectChanges() {
          (this._lView[A] |= 1024),
            Qc(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new E(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null;
          const t = Ki(this._lView),
            n = this._lView[jr];
          null !== n && !t && Qf(n, this._lView),
            X_(this._lView[w], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new E(902, !1);
          this._appRef = t;
          const n = Ki(this._lView),
            r = this._lView[jr];
          null !== r && !n && J_(r, this._lView), Yd(this._lView);
        }
      }
      let Xn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = bF);
        }
        return e;
      })();
      const EF = Xn,
        DF = class extends EF {
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
            const o = Zo(
              this._declarationLView,
              this._declarationTContainer,
              t,
              { embeddedViewInjector: n, dehydratedView: r },
            );
            return new bs(o);
          }
        };
      function bF() {
        return Yc(fe(), v());
      }
      function Yc(e, t) {
        return 4 & e.type ? new DF(t, e, Uo(e, t)) : null;
      }
      let tE = () => null;
      function eo(e, t) {
        return tE(e, t);
      }
      class Ko {}
      const Rs = new D('', { providedIn: 'root', factory: () => !1 }),
        nE = new D('');
      class gk {}
      class rE {}
      class vk {
        resolveComponentFactory(t) {
          throw (function mk(e) {
            const t = Error(
              `No component factory found for ${Ze(e)}.`,
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      class nu {
        static #e = (this.NULL = new vk());
      }
      class Ih {}
      let Jn = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function yk() {
                const e = v(),
                  n = zt(fe().index, e);
                return (nt(n) ? n : e)[P];
              })());
          }
          return e;
        })(),
        _k = (() => {
          class e {
            static #e = (this.ɵprov = S({
              token: e,
              providedIn: 'root',
              factory: () => null,
            }));
          }
          return e;
        })();
      const iE = new Set();
      function Ct(e) {
        iE.has(e) ||
          (iE.add(e),
          performance?.mark?.('mark_feature_usage', {
            detail: { feature: e },
          }));
      }
      let ru = (() => {
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
      function iu(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            'number' == typeof a
              ? (i = a)
              : 1 == i
              ? (o = gd(o, a))
              : 2 == i && (r = gd(r, a + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class lE extends nu {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = W(t);
          return new Fs(n, this.ngModule);
        }
      }
      function dE(e, t) {
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
                  isSignal: !!((i ? o[1] : dr.None) & dr.SignalBased),
                }
              : { propName: s, templateName: r },
          );
        }
        return n;
      }
      class Fs extends rE {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = dE(t.inputs, !0);
          if (null !== n)
            for (const o of r)
              n.hasOwnProperty(o.propName) &&
                (o.transform = n[o.propName]);
          return r;
        }
        get outputs() {
          return dE(this.componentDef.outputs, !1);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function TN(e) {
              return e.map(MN).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          const i = F(null);
          try {
            let s =
              (o = o || this.ngModule) instanceof Ht
                ? o
                : o?.injector;
            s &&
              null !== this.componentDef.getStandaloneInjector &&
              (s = this.componentDef.getStandaloneInjector(s) || s);
            const a = s ? new zr(t, s) : t,
              c = a.get(Ih, null);
            if (null === c) throw new E(407, !1);
            const u = a.get(_k, null),
              f = {
                rendererFactory: c,
                sanitizer: u,
                inlineEffectRunner: null,
                afterRenderEventManager: a.get(ru, null),
                changeDetectionScheduler: a.get(Ko, null),
              },
              h = c.createRenderer(null, this.componentDef),
              p = this.componentDef.selectors[0][0] || 'div',
              g = r
                ? (function jO(e, t, n, r) {
                    const i = r.get(S_, !1) || n === sn.ShadowDom,
                      s = e.selectRootElement(t, i);
                    return (
                      (function UO(e) {
                        vC(e);
                      })(s),
                      s
                    );
                  })(h, r, this.componentDef.encapsulation, a)
                : $c(
                    h,
                    p,
                    (function Mk(e) {
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
            null !== g && (C = Rf(g, a, !0));
            const y = sh(
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
              M = qc(null, y, null, m, null, null, f, h, a, null, C);
            let $, J;
            sf(M);
            try {
              const Ae = this.componentDef;
              let Pt,
                Vi = null;
              Ae.findHostDirectiveDefs
                ? ((Pt = []),
                  (Vi = new Map()),
                  Ae.findHostDirectiveDefs(Ae, Pt, Vi),
                  Pt.push(Ae))
                : (Pt = [Ae]);
              const IT = (function Ak(e, t) {
                  const n = e[w],
                    r = T;
                  return (e[r] = t), Kr(n, r, 2, '#host', null);
                })(M, g),
                Q4 = (function Nk(e, t, n, r, o, i, s) {
                  const a = o[w];
                  !(function Rk(e, t, n, r) {
                    for (const o of e)
                      t.mergedAttrs = Gi(t.mergedAttrs, o.hostAttrs);
                    null !== t.mergedAttrs &&
                      (iu(t, t.mergedAttrs, !0),
                      null !== n && dC(r, n, t));
                  })(r, e, t, s);
                  let c = null;
                  null !== t && (c = Rf(t, o[$e]));
                  const u = i.rendererFactory.createRenderer(t, n);
                  let l = 16;
                  n.signals ? (l = 4096) : n.onPush && (l = 64);
                  const d = qc(
                    o,
                    mC(n),
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
                    a.firstCreatePass && ch(a, e, r.length - 1),
                    Wc(o, d),
                    (o[e.index] = d)
                  );
                })(IT, g, Ae, Pt, M, f, h);
              (J = Ji(y, T)),
                g &&
                  (function Ok(e, t, n, r) {
                    if (r) Od(e, n, ['ng-version', '18.1.4']);
                    else {
                      const { attrs: o, classes: i } = (function AN(
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
                            if (!an(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: t, classes: n };
                      })(t.selectors[0]);
                      o && Od(e, n, o),
                        i && i.length > 0 && lC(e, n, i.join(' '));
                    }
                  })(h, Ae, g, r),
                void 0 !== n &&
                  (function Fk(e, t, n) {
                    const r = (e.projection = []);
                    for (let o = 0; o < t.length; o++) {
                      const i = n[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })(J, this.ngContentSelectors, n),
                ($ = (function xk(e, t, n, r, o, i) {
                  const s = fe(),
                    a = o[w],
                    c = yt(s, o);
                  CC(a, o, s, n, null, r);
                  for (let l = 0; l < n.length; l++)
                    lt(Gr(o, a, s.directiveStart + l, s), o);
                  EC(a, o, s), c && lt(c, o);
                  const u = Gr(
                    o,
                    a,
                    s.directiveStart + s.componentOffset,
                    s,
                  );
                  if (((e[_e] = o[_e] = u), null !== i))
                    for (const l of i) l(u, t);
                  return rh(a, s, o), u;
                })(Q4, Ae, Pt, Vi, M, [kk])),
                fh(y, M, null);
            } finally {
              af();
            }
            return new Tk(this.componentType, $, Uo(J, M), M, J);
          } finally {
            F(i);
          }
        }
      }
      class Tk extends gk {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef =
              new bs(o, void 0, !1)),
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
            dh(i[w], i, o, t, n),
              this.previousInputValues.set(t, n),
              Ds(zt(this._tNode.index, i), 1);
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
      function kk() {
        const e = fe();
        vc(v()[w], e);
      }
      let gn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Pk);
        }
        return e;
      })();
      function Pk() {
        return pE(fe(), v());
      }
      const Lk = gn,
        fE = class extends Lk {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return Uo(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ke(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Dc(this._hostTNode, this._hostLView);
            if (df(t)) {
              const n = is(t, this._hostLView),
                r = os(t);
              return new Ke(n[w].data[r + 8], n);
            }
            return new Ke(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = hE(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Fe;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            'number' == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const s = eo(this._lContainer, t.ssrId),
              a = t.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, Xr(this._hostTNode, s)), a;
          }
          createComponent(t, n, r, o, i) {
            const s =
              t &&
              !(function Zi(e) {
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
            const c = s ? t : new Fs(W(t)),
              u = r || this.parentInjector;
            if (!i && null == c.ngModule) {
              const g = (s ? u : this.parentInjector).get(Ht, null);
              g && (i = g);
            }
            const l = W(c.componentType ?? {}),
              d = eo(this._lContainer, l?.id ?? null),
              h = c.create(u, o, d?.firstChild ?? null, i);
            return (
              this.insertImpl(h.hostView, a, Xr(this._hostTNode, d)),
              h
            );
          }
          insert(t, n) {
            return this.insertImpl(t, n, !0);
          }
          insertImpl(t, n, r) {
            const o = t._lView;
            if (
              (function cR(e) {
                return ut(e[Be]);
              })(o)
            ) {
              const a = this.indexOf(t);
              if (-1 !== a) this.detach(a);
              else {
                const c = o[Be],
                  u = new fE(c, c[it], c[Be]);
                u.detach(u.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            return (
              Qo(s, o, i, r),
              t.attachToViewContainerRef(),
              Av(Ah(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = hE(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = ys(this._lContainer, n);
            r && (ec(Ah(this._lContainer), n), Hc(r[w], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = ys(this._lContainer, n);
            return r && null != ec(Ah(this._lContainer), n)
              ? new bs(r)
              : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function hE(e) {
        return e[8];
      }
      function Ah(e) {
        return e[8] || (e[8] = []);
      }
      function pE(e, t) {
        let n;
        const r = t[e.index];
        return (
          ut(r)
            ? (n = r)
            : ((n = DC(r, t, null, e)), (t[e.index] = n), Wc(t, n)),
          gE(n, t, e, r),
          new fE(n, e, t)
        );
      }
      let gE = function vE(e, t, n, r) {
          if (e[Sn]) return;
          let o;
          (o =
            8 & n.type
              ? te(r)
              : (function Vk(e, t) {
                  const n = e[P],
                    r = n.createComment(''),
                    o = yt(t, e);
                  return (
                    Qr(
                      n,
                      Xf(n, o),
                      r,
                      (function xO(e, t) {
                        return e.nextSibling(t);
                      })(n, o),
                      !1,
                    ),
                    r
                  );
                })(t, n)),
            (e[Sn] = o);
        },
        Nh = () => !1;
      class Rh {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Rh(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class xh {
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
            return new xh(o);
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
            null !== Lh(t, n).matches && this.queries[n].setDirty();
        }
      }
      class yE {
        constructor(t, n, r = null) {
          (this.flags = n),
            (this.read = r),
            (this.predicate =
              'string' == typeof t
                ? (function qk(e) {
                    return e.split(',').map(t => t.trim());
                  })(t)
                : t);
        }
      }
      class Oh {
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
          return null !== n ? new Oh(n) : null;
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
      class Fh {
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
              new Fh(this.metadata))
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
              this.matchTNodeWithReadOption(t, n, $k(n, i)),
                this.matchTNodeWithReadOption(
                  t,
                  n,
                  bc(n, t, i, !1, !1),
                );
            }
          else
            r === Xn
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(
                  t,
                  n,
                  bc(n, t, r, !1, !1),
                );
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Gt || o === gn || (o === Xn && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = bc(n, t, o, !1, !1);
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
      function $k(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2)
            if (n[r] === t) return n[r + 1];
        return null;
      }
      function zk(e, t, n, r) {
        return -1 === n
          ? (function Hk(e, t) {
              return 11 & e.type
                ? Uo(e, t)
                : 4 & e.type
                ? Yc(e, t)
                : null;
            })(t, e)
          : -2 === n
          ? (function Gk(e, t, n) {
              return n === Gt
                ? Uo(t, e)
                : n === Xn
                ? Yc(t, e)
                : n === gn
                ? pE(t, e)
                : void 0;
            })(e, t, r)
          : Gr(e, e[w], n, t);
      }
      function _E(e, t, n, r) {
        const o = t[qn].queries[r];
        if (null === o.matches) {
          const i = e.data,
            s = n.matches,
            a = [];
          for (let c = 0; null !== s && c < s.length; c += 2) {
            const u = s[c];
            a.push(
              u < 0 ? null : zk(t, i[u], s[c + 1], n.metadata.read),
            );
          }
          o.matches = a;
        }
        return o.matches;
      }
      function kh(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = _E(e, t, o, n);
          for (let a = 0; a < i.length; a += 2) {
            const c = i[a];
            if (c > 0) r.push(s[a / 2]);
            else {
              const u = i[a + 1],
                l = t[-c];
              for (let d = Fe; d < l.length; d++) {
                const f = l[d];
                f[jr] === f[Be] && kh(f[w], f, u, r);
              }
              if (null !== l[Po]) {
                const d = l[Po];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  kh(h[w], h, u, r);
                }
              }
            }
          }
        }
        return r;
      }
      function EE(e, t, n) {
        const r = G();
        return (
          r.firstCreatePass &&
            ((function bE(e, t, n) {
              null === e.queries && (e.queries = new Oh()),
                e.queries.track(new Fh(t, n));
            })(r, new yE(e, t, n), -1),
            !(2 & ~t) && (r.staticViewQueries = !0)),
          (function CE(e, t, n) {
            const r = new Ef(!(4 & ~n));
            return (
              (function HO(e, t, n, r) {
                const o = wC(t);
                o.push(n),
                  e.firstCreatePass && IC(e).push(r, o.length - 1);
              })(e, t, r, r.destroy),
              (t[qn] ??= new xh()).queries.push(new Rh(r)) - 1
            );
          })(r, v(), t)
        );
      }
      function Lh(e, t) {
        return e.queries.getByIndex(t);
      }
      function wE(e, t) {
        const n = e[w],
          r = Lh(n, t);
        return r.crossesNgTemplate ? kh(n, e, t, []) : _E(n, e, r, t);
      }
      function _r(e, t) {
        Ct('NgSignals');
        const n = (function RT(e) {
            const t = Object.create(OT);
            t.value = e;
            const n = () => (tt(t), t.value);
            return (n[xe] = t), n;
          })(e),
          r = n[xe];
        return (
          t?.equal && (r.equal = t.equal),
          (n.set = o => Bm(r, o)),
          (n.update = o =>
            (function xT(e, t) {
              Fm() || Um(), Bm(e, t(e.value));
            })(r, o)),
          (n.asReadonly = SE.bind(n)),
          n
        );
      }
      function SE() {
        const e = this[xe];
        if (void 0 === e.readonlyFn) {
          const t = () => this();
          (t[xe] = e), (e.readonlyFn = t);
        }
        return e.readonlyFn;
      }
      function he(e) {
        let t = (function VE(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (un(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new E(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const s = e;
              (s.inputs = au(e.inputs)),
                (s.inputTransforms = au(e.inputTransforms)),
                (s.declaredInputs = au(e.declaredInputs)),
                (s.outputs = au(e.outputs));
              const a = o.hostBindings;
              a && c1(e, a);
              const c = o.viewQuery,
                u = o.contentQueries;
              if (
                (c && s1(e, c),
                u && a1(e, u),
                r1(e, o),
                QA(e.outputs, o.outputs),
                un(o) && o.data.animation)
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
        !(function o1(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = Gi(
                o.hostAttrs,
                (n = Gi(n, o.hostAttrs)),
              ));
          }
        })(r);
      }
      function r1(e, t) {
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
      function au(e) {
        return e === wn ? {} : e === ee ? [] : e;
      }
      function s1(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function a1(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function c1(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function $E(e) {
        const t = e.inputConfig,
          n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            const o = t[r];
            Array.isArray(o) && o[3] && (n[r] = o[3]);
          }
        e.inputTransforms = n;
      }
      class to {}
      class HE {}
      class jh extends to {
        constructor(t, n, r) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new lE(this));
          const o = ct(t);
          (this._bootstrapComponents = qt(o.bootstrap)),
            (this._r3Injector = $y(
              t,
              n,
              [
                { provide: to, useValue: this },
                {
                  provide: nu,
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
      class Uh extends HE {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new jh(this.moduleType, t, []);
        }
      }
      class zE extends to {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new lE(this)),
            (this.instance = null);
          const n = new Ao(
            [
              ...t.providers,
              { provide: to, useValue: this },
              {
                provide: nu,
                useValue: this.componentFactoryResolver,
              },
            ],
            t.parent || ac(),
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
      function Bh(e, t, n = null) {
        return new zE({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function cu(e) {
        return (
          !!$h(e) &&
          (Array.isArray(e) ||
            (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function $h(e) {
        return (
          null !== e &&
          ('function' == typeof e || 'object' == typeof e)
        );
      }
      function ke(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ls(e, t, n, r, o, i, s, a, c, u) {
        const l = n + T,
          d = t.firstCreatePass
            ? (function C1(e, t, n, r, o, i, s, a, c) {
                const u = t.consts,
                  l = Kr(t, e, 4, s || null, a || null);
                ah(t, n, l, Xt(u, c)), vc(t, l);
                const d = (l.tView = sh(
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
        fn(d, !1);
        const f = GE(t, e, d, n);
        ns() && zc(t, e, f, d), lt(f, e);
        const h = DC(f, e, f, d);
        return (
          (e[l] = h),
          Wc(e, h),
          (function mE(e, t, n) {
            return Nh(e, t, n);
          })(h, d, e),
          fc(d) && oh(t, e, d),
          null != c && ih(e, d, u),
          d
        );
      }
      function er(e, t, n, r, o, i, s, a) {
        const c = v(),
          u = G();
        return Ls(c, u, e, t, n, r, o, Xt(u.consts, i), s, a), er;
      }
      let GE = function qE(e, t, n, r) {
        return Tn(!0), t[P].createComment('');
      };
      function xn(e, t, n, r) {
        const o = v();
        return ke(o, hn(), t) && (G(), Nn(Ce(), o, e, t, n, r)), xn;
      }
      function gu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Er(e) {
        return (e >> 17) & 32767;
      }
      function Jh(e) {
        return 2 | e;
      }
      function oo(e) {
        return (131068 & e) >> 2;
      }
      function ep(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function tp(e) {
        return 1 | e;
      }
      function bD(e, t, n, r) {
        const o = e[n + 1],
          i = null === t;
        let s = r ? Er(o) : oo(o),
          a = !1;
        for (; 0 !== s && (!1 === a || i); ) {
          const u = e[s + 1];
          iP(e[s], t) && ((a = !0), (e[s + 1] = r ? tp(u) : Jh(u))),
            (s = r ? Er(u) : oo(u));
        }
        a && (e[n + 1] = r ? Jh(o) : tp(o));
      }
      function iP(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) &&
            Mo(e, t) >= 0)
        );
      }
      function N(e, t, n) {
        const r = v();
        return (
          ke(r, hn(), t) &&
            (function Ft(e, t, n, r, o, i, s, a) {
              const c = yt(t, n);
              let l,
                u = t.inputs;
              !a && null != u && (l = u[r])
                ? (dh(e, n, l, r, o),
                  Ur(t) &&
                    (function WO(e, t) {
                      const n = zt(t, e);
                      16 & n[A] || (n[A] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function qO(e) {
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
            })(G(), Ce(), r, e, t, r[P], n, !1),
          N
        );
      }
      function np(e, t, n, r, o) {
        const s = o ? 'class' : 'style';
        dh(e, n, t.inputs[s], s, r);
      }
      function Dr(e, t, n) {
        return mn(e, t, n, !1), Dr;
      }
      function mu(e, t) {
        return mn(e, t, null, !0), mu;
      }
      function mn(e, t, n, r) {
        const o = v(),
          i = G(),
          s = (function Qn(e) {
            const t = L.lFrame,
              n = t.bindingIndex;
            return (t.bindingIndex = t.bindingIndex + e), n;
          })(2);
        i.firstUpdatePass &&
          (function RD(e, t, n, r) {
            const o = e.data;
            if (null === o[n + 1]) {
              const i = o[st()],
                s = (function ND(e, t) {
                  return t >= e.expandoStartIndex;
                })(e, n);
              (function kD(e, t) {
                return !!(e.flags & (t ? 8 : 16));
              })(i, r) &&
                null === t &&
                !s &&
                (t = !1),
                (t = (function pP(e, t, n, r) {
                  const o = (function nf(e) {
                    const t = L.lFrame.currentDirectiveIndex;
                    return -1 === t ? null : e[t];
                  })(e);
                  let i = r ? t.residualClasses : t.residualStyles;
                  if (null === o)
                    0 === (r ? t.classBindings : t.styleBindings) &&
                      ((n = Bs(
                        (n = rp(null, e, t, n, r)),
                        t.attrs,
                        r,
                      )),
                      (i = null));
                  else {
                    const s = t.directiveStylingLast;
                    if (-1 === s || e[s] !== o)
                      if (((n = rp(o, e, t, n, r)), null === i)) {
                        let c = (function gP(e, t, n) {
                          const r = n
                            ? t.classBindings
                            : t.styleBindings;
                          if (0 !== oo(r)) return e[Er(r)];
                        })(e, t, r);
                        void 0 !== c &&
                          Array.isArray(c) &&
                          ((c = rp(null, e, t, c[1], r)),
                          (c = Bs(c, t.attrs, r)),
                          (function mP(e, t, n, r) {
                            e[
                              Er(
                                n ? t.classBindings : t.styleBindings,
                              )
                            ] = r;
                          })(e, t, r, c));
                      } else
                        i = (function vP(e, t, n) {
                          let r;
                          const o = t.directiveEnd;
                          for (
                            let i = 1 + t.directiveStylingLast;
                            i < o;
                            i++
                          )
                            r = Bs(r, e[i].hostAttrs, n);
                          return Bs(r, t.attrs, n);
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
                (function rP(e, t, n, r, o, i) {
                  let s = i ? t.classBindings : t.styleBindings,
                    a = Er(s),
                    c = oo(s);
                  e[r] = n;
                  let l,
                    u = !1;
                  if (
                    (Array.isArray(n)
                      ? ((l = n[1]),
                        (null === l || Mo(n, l) > 0) && (u = !0))
                      : (l = n),
                    o)
                  )
                    if (0 !== c) {
                      const f = Er(e[a + 1]);
                      (e[r + 1] = gu(f, a)),
                        0 !== f && (e[f + 1] = ep(e[f + 1], r)),
                        (e[a + 1] = (function tP(e, t) {
                          return (131071 & e) | (t << 17);
                        })(e[a + 1], r));
                    } else
                      (e[r + 1] = gu(a, 0)),
                        0 !== a && (e[a + 1] = ep(e[a + 1], r)),
                        (a = r);
                  else
                    (e[r + 1] = gu(c, 0)),
                      0 === a
                        ? (a = r)
                        : (e[c + 1] = ep(e[c + 1], r)),
                      (c = r);
                  u && (e[r + 1] = Jh(e[r + 1])),
                    bD(e, l, r, !0),
                    bD(e, l, r, !1),
                    (function oP(e, t, n, r, o) {
                      const i = o
                        ? e.residualClasses
                        : e.residualStyles;
                      null != i &&
                        'string' == typeof t &&
                        Mo(i, t) >= 0 &&
                        (n[r + 1] = tp(n[r + 1]));
                    })(t, l, e, r, i),
                    (s = gu(a, c)),
                    i ? (t.classBindings = s) : (t.styleBindings = s);
                })(o, i, t, n, s, r);
            }
          })(i, e, s, r),
          t !== B &&
            ke(o, s, t) &&
            (function OD(e, t, n, r, o, i, s, a) {
              if (!(3 & t.type)) return;
              const c = e.data,
                u = c[a + 1],
                l = (function nP(e) {
                  return !(1 & ~e);
                })(u)
                  ? FD(c, t, n, o, oo(u), s)
                  : void 0;
              vu(l) ||
                (vu(i) ||
                  ((function eP(e) {
                    return !(2 & ~e);
                  })(u) &&
                    (i = FD(c, null, n, o, a, s))),
                (function kO(e, t, n, r, o) {
                  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                  else {
                    let i =
                      -1 === r.indexOf('-') ? void 0 : mr.DashCase;
                    null == o
                      ? e.removeStyle(n, r, i)
                      : ('string' == typeof o &&
                          o.endsWith('!important') &&
                          ((o = o.slice(0, -10)),
                          (i |= mr.Important)),
                        e.setStyle(n, r, o, i));
                  }
                })(r, s, Xi(st(), n), o, i));
            })(
              i,
              i.data[st()],
              o,
              o[P],
              e,
              (o[s + 1] = (function EP(e, t) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof t
                      ? (e += t)
                      : 'object' == typeof e && (e = Ze(gr(e)))),
                  e
                );
              })(t, n)),
              r,
              s,
            );
      }
      function rp(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < s && ((i = t[a]), (r = Bs(r, i.hostAttrs, o)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Bs(e, t, n) {
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
                Bt(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function FD(e, t, n, r, o, i) {
        const s = null === t;
        let a;
        for (; o > 0; ) {
          const c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = null === l;
          let f = n[o + 1];
          f === B && (f = d ? ee : void 0);
          let h = d ? Rd(f, r) : l === r ? f : void 0;
          if ((u && !vu(h) && (h = Rd(c, r)), vu(h) && ((a = h), s)))
            return a;
          const p = e[o + 1];
          o = s ? Er(p) : oo(p);
        }
        if (null !== t) {
          let c = i ? t.residualClasses : t.residualStyles;
          null != c && (a = Rd(c, r));
        }
        return a;
      }
      function vu(e) {
        return void 0 !== e;
      }
      function Z(e, t, n, r) {
        const o = v(),
          i = G(),
          s = T + e,
          a = o[P],
          c = i.firstCreatePass
            ? (function zP(e, t, n, r, o, i) {
                const s = t.consts,
                  c = Kr(t, e, 2, r, Xt(s, o));
                return (
                  ah(t, n, c, Xt(s, i)),
                  null !== c.attrs && iu(c, c.attrs, !1),
                  null !== c.mergedAttrs && iu(c, c.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          u = jD(i, o, c, a, t, e);
        o[s] = u;
        const l = fc(c);
        return (
          fn(c, !0),
          dC(a, u, c),
          !(function Jo(e) {
            return !(32 & ~e.flags);
          })(c) &&
            ns() &&
            zc(i, o, u, c),
          0 ===
            (function uR() {
              return L.lFrame.elementDepthCount;
            })() && lt(u, o),
          (function lR() {
            L.lFrame.elementDepthCount++;
          })(),
          l && (oh(i, o, c), rh(i, c, o)),
          null !== r && ih(o, c),
          Z
        );
      }
      function Q() {
        let e = fe();
        Jd() ? ef() : ((e = e.parent), fn(e, !1));
        const t = e;
        (function fR(e) {
          return L.skipHydrationRootTNode === e;
        })(t) &&
          (function mR() {
            L.skipHydrationRootTNode = null;
          })(),
          (function dR() {
            L.lFrame.elementDepthCount--;
          })();
        const n = G();
        return (
          n.firstCreatePass &&
            (vc(n, e), zd(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function AR(e) {
              return !!(8 & e.flags);
            })(t) &&
            np(n, t, v(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function NR(e) {
              return !!(16 & e.flags);
            })(t) &&
            np(n, t, v(), t.stylesWithoutHost, !1),
          Q
        );
      }
      function ze(e, t, n, r) {
        return Z(e, t, n, r), Q(), ze;
      }
      let jD = (e, t, n, r, o, i) => (
        Tn(!0),
        $c(
          r,
          o,
          (function Dy() {
            return L.lFrame.currentNamespace;
          })(),
        )
      );
      function Ve(e, t, n) {
        const r = v(),
          o = G(),
          i = e + T,
          s = o.firstCreatePass
            ? (function WP(e, t, n, r, o) {
                const i = t.consts,
                  s = Xt(i, r),
                  a = Kr(t, e, 8, 'ng-container', s);
                return (
                  null !== s && iu(a, s, !0),
                  ah(t, n, a, Xt(i, o)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(i, o, r, t, n)
            : o.data[i];
        fn(s, !0);
        const a = BD(o, r, s, e);
        return (
          (r[i] = a),
          ns() && zc(o, r, a, s),
          lt(a, r),
          fc(s) && (oh(o, r, s), rh(o, s, r)),
          null != n && ih(r, s),
          Ve
        );
      }
      function je() {
        let e = fe();
        const t = G();
        return (
          Jd() ? ef() : ((e = e.parent), fn(e, !1)),
          t.firstCreatePass &&
            (vc(t, e), zd(e) && t.queries.elementEnd(e)),
          je
        );
      }
      let BD = (e, t, n, r) => (Tn(!0), Zf(t[P], ''));
      function kn() {
        return v();
      }
      const vi = 'en-US';
      let qD = vi;
      let db = (e, t, n) => {};
      function ne(e, t, n, r) {
        const o = v(),
          i = G(),
          s = fe();
        return (
          (function up(e, t, n, r, o, i, s) {
            const a = fc(r),
              u = e.firstCreatePass && IC(e),
              l = t[_e],
              d = wC(t);
            let f = !0;
            if (3 & r.type || s) {
              const g = yt(r, t),
                m = s ? s(g) : g,
                C = d.length,
                y = s ? $ => s(te($[r.index])) : r.index;
              let M = null;
              if (
                (!s &&
                  a &&
                  (M = (function jL(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const s = o[i];
                        if (s === n && o[i + 1] === r) {
                          const a = t[xo],
                            c = o[i + 2];
                          return a.length > c ? a[c] : null;
                        }
                        'string' == typeof s && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== M)
              )
                ((M.__ngLastListenerFn__ || M).__ngNextListenerFn__ =
                  i),
                  (M.__ngLastListenerFn__ = i),
                  (f = !1);
              else {
                (i = gb(r, t, l, i)), db(g, o, i);
                const $ = n.listen(m, o, i);
                d.push(i, $), u && u.push(o, y, C, C + 1);
              }
            } else i = gb(r, t, l, i);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
              const g = p.length;
              if (g)
                for (let m = 0; m < g; m += 2) {
                  const J = t[p[m]][p[m + 1]].subscribe(i),
                    Ae = d.length;
                  d.push(i, J),
                    u && u.push(o, r.index, Ae, -(Ae + 1));
                }
            }
          })(i, o, o[P], s, e, t, r),
          ne
        );
      }
      function pb(e, t, n, r) {
        const o = F(null);
        try {
          return Mn(6, t, n), !1 !== n(r);
        } catch (i) {
          return Zc(e, i), !1;
        } finally {
          Mn(7, t, n), F(o);
        }
      }
      function gb(e, t, n, r) {
        return function o(i) {
          if (i === Function) return r;
          Ds(e.componentOffset > -1 ? zt(e.index, t) : t, 5);
          let a = pb(t, n, r, i),
            c = o.__ngNextListenerFn__;
          for (; c; )
            (a = pb(t, n, c, i) && a), (c = c.__ngNextListenerFn__);
          return a;
        };
      }
      function ce(e = 1) {
        return (function ER(e) {
          return (L.lFrame.contextLView = (function ay(e, t) {
            for (; e > 0; ) (t = t[Oo]), e--;
            return t;
          })(e, L.lFrame.contextLView))[_e];
        })(e);
      }
      function UL(e, t) {
        let n = null;
        const r = (function bN(e) {
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
            if (null === r ? Lv(e, i, !0) : SN(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function Ws(e) {
        const t = v()[Me][it];
        if (!t.projection) {
          const r = (t.projection = (function tc(e, t) {
              const n = [];
              for (let r = 0; r < e; r++) n.push(t);
              return n;
            })(e ? e.length : 1, null)),
            o = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            if (128 !== i.type) {
              const s = e ? UL(i, e) : 0;
              null !== s &&
                (o[s] ? (o[s].projectionNext = i) : (r[s] = i),
                (o[s] = i));
            }
            i = i.next;
          }
        }
      }
      function Zs(e, t = 0, n, r, o, i) {
        const s = v(),
          a = G(),
          c = r ? e + 1 : null;
        null !== c && Ls(s, a, c, r, o, i, null, n);
        const u = Kr(a, T + e, 16, null, n || null);
        null === u.projection && (u.projection = t), ef();
        const d = !s[vt] || $r();
        null === s[Me][it].projection[u.projection] && null !== c
          ? (function BL(e, t, n) {
              const r = T + n,
                o = t.data[r],
                i = e[r],
                s = eo(i, o.tView.ssrId);
              Qo(
                i,
                Zo(e, o, void 0, { dehydratedView: s }),
                0,
                Xr(o, s),
              );
            })(s, a, c)
          : d &&
            32 & ~u.flags &&
            (function OO(e, t, n) {
              uC(
                t[P],
                0,
                t,
                n,
                Kf(e, n, t),
                rC(n.parent || t[it], n, t),
              );
            })(a, s, u);
      }
      function fp() {
        return (function Ph(e, t) {
          return e[qn].queries[t].queryList;
        })(v(), rf());
      }
      function en(e, t = '') {
        const n = v(),
          r = G(),
          o = e + T,
          i = r.firstCreatePass ? Kr(r, o, 1, t, null) : r.data[o],
          s = Pb(r, n, i, t, e);
        (n[o] = s), ns() && zc(r, n, s, i), fn(i, !1);
      }
      let Pb = (e, t, n, r, o) => (
        Tn(!0),
        (function Wf(e, t) {
          return e.createText(t);
        })(t[P], r)
      );
      function br(e, t, n) {
        const r = v(),
          o = (function ai(e, t, n, r) {
            return ke(e, hn(), n) ? t + U(n) + r : B;
          })(r, e, t, n);
        return (
          o !== B &&
            (function Kn(e, t, n) {
              const r = Xi(t, e);
              !(function K_(e, t, n) {
                e.setValue(t, n);
              })(e[P], r, n);
            })(r, st(), o),
          br
        );
      }
      function pp(e, t, n, r, o) {
        if (((e = k(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) pp(e[i], t, n, r, o);
        else {
          const i = G(),
            s = v(),
            a = fe();
          let c = Vr(e) ? e : k(e.provide);
          const u = Gv(e),
            l = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
          if (Vr(e) || !e.multi) {
            const h = new rs(u, o, b),
              p = mp(c, t, o ? l : l + f, d);
            -1 === p
              ? (pf(Ec(a, s), i, c),
                gp(i, e, t.length),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(h),
                s.push(h))
              : ((n[p] = h), (s[p] = h));
          } else {
            const h = mp(c, t, l + f, d),
              p = mp(c, t, l, l + f),
              m = p >= 0 && n[p];
            if ((o && !m) || (!o && !(h >= 0 && n[h]))) {
              pf(Ec(a, s), i, c);
              const C = (function uV(e, t, n, r, o) {
                const i = new rs(e, n, b);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Yb(i, o, r && !n),
                  i
                );
              })(o ? cV : aV, n.length, o, r, u);
              !o && m && (n[p].providerFactory = C),
                gp(i, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(C),
                s.push(C);
            } else
              gp(i, e, h > -1 ? h : p, Yb(n[o ? p : h], u, !o && r));
            !o && r && m && n[p].componentProviders++;
          }
        }
      }
      function gp(e, t, n, r) {
        const o = Vr(t),
          i = (function PN(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const c = (i ? k(t.useClass) : t).prototype.ngOnDestroy;
          if (c) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const l = u.indexOf(n);
              -1 === l ? u.push(n, [r, c]) : u[l + 1].push(r, c);
            } else u.push(n, c);
          }
        }
      }
      function Yb(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function mp(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function aV(e, t, n, r) {
        return vp(this.multi, []);
      }
      function cV(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = Gr(n, n[w], this.providerFactory.index, r);
          (i = a.slice(0, s)), vp(o, i);
          for (let c = s; c < a.length; c++) i.push(a[c]);
        } else (i = []), vp(o, i);
        return i;
      }
      function vp(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Te(e, t = []) {
        return n => {
          n.providersResolver = (r, o) =>
            (function sV(e, t, n) {
              const r = G();
              if (r.firstCreatePass) {
                const o = un(e);
                pp(n, r.data, r.blueprint, o, !0),
                  pp(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      let lV = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
              const r = kd(0, n.type),
                o =
                  r.length > 0
                    ? Bh(
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
            factory: () => new e(x(Ht)),
          }));
        }
        return e;
      })();
      function ie(e) {
        Ct('NgStandalone'),
          (e.getStandaloneInjector = t =>
            t.get(lV).getOrCreateStandaloneInjector(e));
      }
      let _w = (() => {
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
      const ww = new D('');
      function ea(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Iw(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const S2 = new D('');
      let Sp = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((n, r) => {
                (this.resolve = n), (this.reject = r);
              })),
              (this.appInits = _(S2, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [];
            for (const o of this.appInits) {
              const i = o();
              if (ea(i)) n.push(i);
              else if (Iw(i)) {
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
      const Mu = new D('');
      let yn = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = _(rx)),
              (this.afterRenderEffectManager = _(ru)),
              (this.zonelessEnabled = _(Rs)),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new Tt()),
              (this.afterTick = new Tt()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = _(Wr).hasPendingTasks.pipe(
                re(n => !n),
              )),
              (this._injector = _(Ht));
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
            const o = n instanceof rE;
            if (!this._injector.get(Sp).done)
              throw (
                (!o &&
                  (function fr(e) {
                    const t = W(e) || Qe(e) || ot(e);
                    return null !== t && t.standalone;
                  })(n),
                new E(405, !1))
              );
            let s;
            (s = o
              ? n
              : this._injector.get(nu).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const a = (function M2(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(to),
              u = s.create(He.NULL, [], r || s.selector, a),
              l = u.location.nativeElement,
              d = u.injector.get(ww, null);
            return (
              d?.registerApplication(l),
              u.onDestroy(() => {
                this.detachView(u.hostView),
                  Tu(this.components, u),
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
            const r = F(null);
            try {
              (this._runningTick = !0),
                this.detectChangesInAttachedViews(n);
            } catch (o) {
              this.internalErrorHandler(o);
            } finally {
              (this._runningTick = !1), F(r), this.afterTick.next();
            }
          }
          detectChangesInAttachedViews(n) {
            let r = null;
            this._injector.destroyed ||
              (r = this._injector.get(Ih, null, { optional: !0 }));
            let o = 0;
            const i = this.afterRenderEffectManager;
            for (; o < 10; ) {
              const s = 0 === o;
              if (n || !s) {
                this.beforeRender.next(s);
                for (let { _lView: a, notifyErrorHandler: c } of this
                  ._views)
                  A2(a, c, s, this.zonelessEnabled);
              } else r?.begin?.(), r?.end?.();
              if (
                (o++,
                i.executeInternalCallbacks(),
                !this.allViews.some(({ _lView: a }) => es(a)) &&
                  (i.execute(),
                  !this.allViews.some(({ _lView: a }) => es(a))))
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
            Tu(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n);
            const r = this._injector.get(Mu, []);
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
              () => Tu(this._destroyListeners, n)
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
      function Tu(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function A2(e, t, n, r) {
        (n || es(e)) && Qc(e, t, n && !r ? 0 : 1);
      }
      class N2 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let R2 = (() => {
          class e {
            compileModuleSync(n) {
              return new Uh(n);
            }
            compileModuleAsync(n) {
              return Promise.resolve(this.compileModuleSync(n));
            }
            compileModuleAndAllComponentsSync(n) {
              const r = this.compileModuleSync(n),
                i = qt(ct(n).declarations).reduce((s, a) => {
                  const c = W(a);
                  return c && s.push(new Fs(c)), s;
                }, []);
              return new N2(r, i);
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
        F2 = (() => {
          class e {
            constructor() {
              (this.zone = _(ae)),
                (this.changeDetectionScheduler = _(Ko)),
                (this.applicationRef = _(yn));
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
      function Mp({ ngZoneFactory: e, ignoreChangesOutsideZone: t }) {
        return (
          (e ??= () =>
            new ae(
              (function Tp(e) {
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
              provide: $t,
              multi: !0,
              useFactory: () => {
                const n = _(F2, { optional: !0 });
                return () => n.initialize();
              },
            },
            {
              provide: $t,
              multi: !0,
              useFactory: () => {
                const n = _(P2);
                return () => {
                  n.initialize();
                };
              },
            },
            !0 === t ? { provide: nE, useValue: !0 } : [],
          ]
        );
      }
      let P2 = (() => {
          class e {
            constructor() {
              (this.subscription = new at()),
                (this.initialized = !1),
                (this.zone = _(ae)),
                (this.pendingTasks = _(Wr));
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
        ta = (() => {
          class e {
            constructor() {
              (this.appRef = _(yn)),
                (this.taskService = _(Wr)),
                (this.ngZone = _(ae)),
                (this.zonelessEnabled = _(Rs)),
                (this.disableScheduling =
                  _(nE, { optional: !0 }) ?? !1),
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
                  (this.ngZone instanceof Cf || !this.zoneIsDefined));
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
              const r = this.useMicrotaskScheduler ? Gy : zy;
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
                Gy(() => {
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
      const tr = new D('', {
          providedIn: 'root',
          factory: () =>
            _(tr, Y.Optional | Y.SkipSelf) ||
            (function L2() {
              return (
                (typeof $localize < 'u' && $localize.locale) || vi
              );
            })(),
        }),
        Np = new D('');
      let wr = null;
      let na = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = z2);
        }
        return e;
      })();
      function z2(e) {
        return (function G2(e, t, n) {
          if (Ur(e) && !n) {
            const r = zt(e.index, t);
            return new bs(r, r);
          }
          return 175 & e.type ? new bs(t[Me], t) : null;
        })(fe(), v(), !(16 & ~e));
      }
      class Bw {
        constructor() {}
        supports(t) {
          return cu(t);
        }
        create(t) {
          return new Y2(t);
        }
      }
      const Q2 = (e, t) => t;
      class Y2 {
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
            (this._trackByFn = t || Q2);
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
                !r || (n && n.currentIndex < Hw(r, o, i)) ? n : r,
              a = Hw(s, o, i),
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
          if ((null == t && (t = []), !cu(t))) throw new E(900, !1);
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
              (function y1(e, t) {
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
              : (t = this._addAfter(new K2(n, r), i, o)),
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
              (this._linkedRecords = new $w()),
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
              (this._unlinkedRecords = new $w()),
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
      class K2 {
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
      class X2 {
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
      class $w {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new X2()), this.map.set(n, r)), r.add(t);
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
      function Hw(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class zw {
        constructor() {}
        supports(t) {
          return t instanceof Map || $h(t);
        }
        create() {
          return new J2();
        }
      }
      class J2 {
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
            if (!(t instanceof Map || $h(t))) throw new E(900, !1);
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
          const r = new ej(t);
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
      class ej {
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
      function Gw() {
        return new Pp([new Bw()]);
      }
      let Pp = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: Gw,
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
              useFactory: r => e.create(n, r || Gw()),
              deps: [[e, new Ad(), new Td()]],
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
      function qw() {
        return new xu([new zw()]);
      }
      let xu = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: qw,
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
              useFactory: r => e.create(n, r || qw()),
              deps: [[e, new Ad(), new Td()]],
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
      function vj(e) {
        try {
          const {
              rootComponent: t,
              appProviders: n,
              platformProviders: r,
            } = e,
            o = (function $2(e = []) {
              if (wr) return wr;
              const t = (function kw(e = [], t) {
                return He.create({
                  name: t,
                  providers: [
                    { provide: Vd, useValue: 'platform' },
                    {
                      provide: Np,
                      useValue: new Set([() => (wr = null)]),
                    },
                    ...e,
                  ],
                });
              })(e);
              return (
                (wr = t),
                (function Sw() {
                  !(function NT(e) {
                    jm = e;
                  })(() => {
                    throw new E(600, !1);
                  });
                })(),
                (function Pw(e) {
                  e.get(m_, null)?.forEach(n => n());
                })(t),
                t
              );
            })(r),
            i = [
              Mp({}),
              { provide: Ko, useExisting: ta },
              ...(n || []),
            ],
            a = new zE({
              providers: i,
              parent: o,
              debugName: '',
              runEnvironmentInitializers: !1,
            }).injector,
            c = a.get(ae);
          return c.run(() => {
            a.resolveInjectorInitializers();
            const u = a.get(pn, null);
            let l;
            c.runOutsideAngular(() => {
              l = c.onError.subscribe({
                next: h => {
                  u.handleError(h);
                },
              });
            });
            const d = () => a.destroy(),
              f = o.get(Np);
            return (
              f.add(d),
              a.onDestroy(() => {
                l.unsubscribe(), f.delete(d);
              }),
              (function Mw(e, t, n) {
                try {
                  const r = n();
                  return ea(r)
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
                const h = a.get(Sp);
                return (
                  h.runInitializers(),
                  h.donePromise.then(() => {
                    !(function WD(e) {
                      'string' == typeof e &&
                        (qD = e.toLowerCase().replace(/_/g, '-'));
                    })(a.get(tr, vi) || vi);
                    const g = a.get(yn);
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
      const uI = new D('');
      function Ci(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function ao(e, t) {
        Ct('NgSignals');
        const n = (function MT(e) {
          const t = Object.create(TT);
          t.computation = e;
          const n = () => {
            if ((xm(t), tt(t), t.value === La)) throw t.error;
            return t.value;
          };
          return (n[xe] = t), n;
        })(e);
        return t?.equal && (n[xe].equal = t.equal), n;
      }
      function Pn(e) {
        const t = F(null);
        try {
          return e();
        } finally {
          F(t);
        }
      }
      let _I = null;
      function Ir() {
        return _I;
      }
      class Gj {}
      const tn = new D('');
      let Up = (() => {
          class e {
            historyGo(n) {
              throw new Error('');
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(qj),
              providedIn: 'platform',
            }));
          }
          return e;
        })(),
        qj = (() => {
          class e extends Up {
            constructor() {
              super(),
                (this._doc = _(tn)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return Ir().getBaseHref(this._doc);
            }
            onPopState(n) {
              const r = Ir().getGlobalEventTarget(
                this._doc,
                'window',
              );
              return (
                r.addEventListener('popstate', n, !1),
                () => r.removeEventListener('popstate', n)
              );
            }
            onHashChange(n) {
              const r = Ir().getGlobalEventTarget(
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
      function Bp(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        let n = 0;
        return (
          e.endsWith('/') && n++,
          t.startsWith('/') && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
        );
      }
      function CI(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return (
          e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n)
        );
      }
      function nr(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let Ei = (() => {
        class e {
          historyGo(n) {
            throw new Error('');
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => _(Wj),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const EI = new D('');
      let Wj = (() => {
          class e extends Ei {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._removeListenerFns = []),
                (this._baseHref =
                  r ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  _(tn).location?.origin ??
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
              return Bp(this._baseHref, n);
            }
            path(n = !1) {
              const r =
                  this._platformLocation.pathname +
                  nr(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && n ? `${r}${o}` : r;
            }
            pushState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + nr(i));
              this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + nr(i));
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
              return new (r || e)(x(Up), x(EI, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        Zj = (() => {
          class e extends Ei {
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
              const r = Bp(this._baseHref, n);
              return r.length > 0 ? '#' + r : r;
            }
            pushState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + nr(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + nr(i));
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
              return new (r || e)(x(Up), x(EI, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        sa = (() => {
          class e {
            constructor(n) {
              (this._subject = new K()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = n);
              const r = this._locationStrategy.getBaseHref();
              (this._basePath = (function Kj(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, n] = e.split(/\/\/[^\/]+/);
                  return n;
                }
                return e;
              })(CI(DI(r)))),
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
              return this.path() == this.normalize(n + nr(r));
            }
            normalize(n) {
              return e.stripTrailingSlash(
                (function Yj(e, t) {
                  if (!e || !t.startsWith(e)) return t;
                  const n = t.substring(e.length);
                  return '' === n ||
                    ['/', ';', '?', '#'].includes(n[0])
                    ? n
                    : t;
                })(this._basePath, DI(n)),
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
                  this.prepareExternalUrl(n + nr(r)),
                  o,
                );
            }
            replaceState(n, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + nr(r)),
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
            static #e = (this.normalizeQueryParams = nr);
            static #t = (this.joinWithSlash = Bp);
            static #n = (this.stripTrailingSlash = CI);
            static #r = (this.ɵfac = function (r) {
              return new (r || e)(x(Ei));
            });
            static #o = (this.ɵprov = S({
              token: e,
              factory: () =>
                (function Qj() {
                  return new sa(x(Ei));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function DI(e) {
        return e.replace(/\/index.html$/, '');
      }
      const Kp = /\s+/,
        RI = [];
      let xI = (() => {
        class e {
          constructor(n, r) {
            (this._ngEl = n),
              (this._renderer = r),
              (this.initialClasses = RI),
              (this.stateMap = new Map());
          }
          set klass(n) {
            this.initialClasses = null != n ? n.trim().split(Kp) : RI;
          }
          set ngClass(n) {
            this.rawClass =
              'string' == typeof n ? n.trim().split(Kp) : n;
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
              n.split(Kp).forEach(o => {
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
            return new (r || e)(b(Gt), b(Jn));
          });
          static #t = (this.ɵdir = V({
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
      class LU {
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
      let FI = (() => {
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
                  new LU(o.item, this._ngForOf, -1, -1),
                  null === s ? void 0 : s,
                );
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), kI(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o),
                (a.count = i),
                (a.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange(o => {
              kI(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(b(gn), b(Xn), b(Pp));
          });
          static #t = (this.ɵdir = V({
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
      function kI(e, t) {
        e.context.$implicit = t.item;
      }
      let Yu = (() => {
        class e {
          constructor(n, r) {
            (this._viewContainer = n),
              (this._context = new VU()),
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
            PI('ngIfThen', n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            PI('ngIfElse', n),
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
            return new (r || e)(b(gn), b(Xn));
          });
          static #t = (this.ɵdir = V({
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
      class VU {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function PI(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${Ze(t)}'.`,
          );
      }
      class Xp {
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
      let Ku = (() => {
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
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'ngSwitch', '']],
              inputs: { ngSwitch: 'ngSwitch' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        LI = (() => {
          class e {
            constructor(n, r, o) {
              (this.ngSwitch = o),
                o._addCase(),
                (this._view = new Xp(n, r));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase),
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(b(gn), b(Xn), b(Ku, 9));
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'ngSwitchCase', '']],
              inputs: { ngSwitchCase: 'ngSwitchCase' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        jI = (() => {
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
                s = -1 === o.indexOf('-') ? void 0 : mr.DashCase;
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
              return new (r || e)(b(Gt), b(xu), b(Jn));
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'ngStyle', '']],
              inputs: { ngStyle: 'ngStyle' },
              standalone: !0,
            }));
          }
          return e;
        })(),
        tg = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = qi({ type: e }));
            static #n = (this.ɵinj = wo({}));
          }
          return e;
        })();
      const BI = 'browser';
      function $I(e) {
        return 'server' === e;
      }
      let dB = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () =>
              (function lB(e) {
                return e === BI;
              })(_(Zr))
                ? new fB(_(tn), window)
                : new pB(),
          }));
        }
        return e;
      })();
      class fB {
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
          const n = (function hB(e, t) {
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
      class pB {
        setOffset(t) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(t) {}
        scrollToAnchor(t) {}
        setHistoryScrollRestoration(t) {}
      }
      class HB extends Gj {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class ig extends HB {
        static makeCurrent() {
          !(function zj(e) {
            _I ??= e;
          })(new ig());
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
          const n = (function zB() {
            return (
              (la = la || document.querySelector('base')),
              la ? la.getAttribute('href') : null
            );
          })();
          return null == n
            ? null
            : (function GB(e) {
                return new URL(e, document.baseURI).pathname;
              })(n);
        }
        resetBaseElement() {
          la = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return (function kU(e, t) {
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
      let la = null,
        WB = (() => {
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
      const tl = new D('');
      let XI = (() => {
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
            return new (r || e)(x(tl), x(ae));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class sg {
        constructor(t) {
          this._doc = t;
        }
      }
      const ag = 'ng-app-id';
      let JI = (() => {
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
              (this.platformIsServer = $I(i)),
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
              `style[${ag}="${this.appId}"]`,
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
              return o.delete(r), i.removeAttribute(ag), i;
            {
              const s = this.doc.createElement('style');
              return (
                this.nonce && s.setAttribute('nonce', this.nonce),
                (s.textContent = r),
                this.platformIsServer &&
                  s.setAttribute(ag, this.appId),
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
            return new (r || e)(x(tn), x(cs), x(v_, 8), x(Zr));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const cg = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        ug = /%COMP%/g,
        KB = new D('', { providedIn: 'root', factory: () => !0 });
      function tS(e, t) {
        return t.map(n => n.replace(ug, e));
      }
      let nS = (() => {
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
              (this.platformIsServer = $I(a)),
              (this.defaultRenderer = new lg(
                n,
                s,
                c,
                this.platformIsServer,
              ));
          }
          createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;
            this.platformIsServer &&
              r.encapsulation === sn.ShadowDom &&
              (r = { ...r, encapsulation: sn.Emulated });
            const o = this.getOrCreateRenderer(n, r);
            return (
              o instanceof oS
                ? o.applyToHost(n)
                : o instanceof dg && o.applyStyles(),
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
                case sn.Emulated:
                  i = new oS(c, u, r, this.appId, l, s, a, d);
                  break;
                case sn.ShadowDom:
                  return new t$(c, u, n, r, s, a, this.nonce, d);
                default:
                  i = new dg(c, u, r, l, s, a, d);
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
              x(XI),
              x(JI),
              x(cs),
              x(KB),
              x(tn),
              x(Zr),
              x(ae),
              x(v_),
            );
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class lg {
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
            ? this.doc.createElementNS(cg[n] || n, t)
            : this.doc.createElement(t);
        }
        createComment(t) {
          return this.doc.createComment(t);
        }
        createText(t) {
          return this.doc.createTextNode(t);
        }
        appendChild(t, n) {
          (rS(t) ? t.content : t).appendChild(n);
        }
        insertBefore(t, n, r) {
          t && (rS(t) ? t.content : t).insertBefore(n, r);
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
            const i = cg[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = cg[r];
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
          o & (mr.DashCase | mr.Important)
            ? t.style.setProperty(
                n,
                r,
                o & mr.Important ? 'important' : '',
              )
            : (t.style[n] = r);
        }
        removeStyle(t, n, r) {
          r & mr.DashCase
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
            !(t = Ir().getGlobalEventTarget(this.doc, t))
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
      function rS(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class t$ extends lg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, c),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const u = tS(o.id, o.styles);
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
      class dg extends lg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, a),
            (this.sharedStylesHost = n),
            (this.removeStylesOnCompDestroy = o),
            (this.styles = c ? tS(c, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class oS extends dg {
        constructor(t, n, r, o, i, s, a, c) {
          const u = o + '-' + r.id;
          super(t, n, r, i, s, a, c, u),
            (this.contentAttr = (function XB(e) {
              return '_ngcontent-%COMP%'.replace(ug, e);
            })(u)),
            (this.hostAttr = (function JB(e) {
              return '_nghost-%COMP%'.replace(ug, e);
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
      let n$ = (() => {
          class e extends sg {
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
              return new (r || e)(x(tn));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        r$ = (() => {
          class e extends sg {
            constructor(n) {
              super(n), (this.delegate = _(uI, { optional: !0 }));
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
              return new (r || e)(x(tn));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const iS = ['alt', 'control', 'meta', 'shift'],
        o$ = {
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
        i$ = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      function sS(e) {
        return {
          appProviders: [...h$, ...(e?.providers ?? [])],
          platformProviders: d$,
        };
      }
      const d$ = [
          { provide: Zr, useValue: BI },
          {
            provide: m_,
            useValue: function c$() {
              ig.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: tn,
            useFactory: function l$() {
              return (
                (function Sx(e) {
                  wf = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        h$ = [
          { provide: Vd, useValue: 'root' },
          {
            provide: pn,
            useFactory: function u$() {
              return new pn();
            },
            deps: [],
          },
          {
            provide: tl,
            useClass: n$,
            multi: !0,
            deps: [tn, ae, Zr],
          },
          {
            provide: tl,
            useClass: (() => {
              class e extends sg {
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
                      Ir().onAndCancel(n, i.domEventName, s),
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
                    iS.forEach(u => {
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
                  let o = o$[n.key] || n.key,
                    i = '';
                  return (
                    r.indexOf('code.') > -1 &&
                      ((o = n.code), (i = 'code.')),
                    !(null == o || !o) &&
                      ((o = o.toLowerCase()),
                      ' ' === o
                        ? (o = 'space')
                        : '.' === o && (o = 'dot'),
                      iS.forEach(s => {
                        s !== o && (0, i$[s])(n) && (i += s + '.');
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
                  return new (r || e)(x(tn));
                });
                static #t = (this.ɵprov = S({
                  token: e,
                  factory: e.ɵfac,
                }));
              }
              return e;
            })(),
            multi: !0,
            deps: [tn],
          },
          { provide: tl, useClass: r$, multi: !0 },
          nS,
          JI,
          XI,
          { provide: Ih, useExisting: nS },
          { provide: class gB {}, useClass: WB, deps: [] },
          [],
        ];
      let p$ = (() => {
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
            return new (r || e)(x(tn));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function Sr(e) {
        return this instanceof Sr ? ((this.v = e), this) : new Sr(e);
      }
      function fS(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = (function gg(e) {
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
      const hS = e =>
        e && 'number' == typeof e.length && 'function' != typeof e;
      function pS(e) {
        return be(e?.then);
      }
      function gS(e) {
        return be(e[sd]);
      }
      function mS(e) {
        return Symbol.asyncIterator && be(e?.[Symbol.asyncIterator]);
      }
      function vS(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e
              ? 'an invalid object'
              : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const yS = (function U$() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function _S(e) {
        return be(e?.[yS]);
      }
      function CS(e) {
        return (function dS(e, t, n) {
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
                h.value instanceof Sr
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
              const { value: r, done: o } = yield Sr(n.read());
              if (o) return yield Sr(void 0);
              yield yield Sr(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function ES(e) {
        return be(e?.getReader);
      }
      function En(e) {
        if (e instanceof Oe) return e;
        if (null != e) {
          if (gS(e))
            return (function B$(e) {
              return new Oe(t => {
                const n = e[sd]();
                if (be(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (hS(e))
            return (function $$(e) {
              return new Oe(t => {
                for (let n = 0; n < e.length && !t.closed; n++)
                  t.next(e[n]);
                t.complete();
              });
            })(e);
          if (pS(e))
            return (function H$(e) {
              return new Oe(t => {
                e.then(
                  n => {
                    t.closed || (t.next(n), t.complete());
                  },
                  n => t.error(n),
                ).then(null, qm);
              });
            })(e);
          if (mS(e)) return DS(e);
          if (_S(e))
            return (function z$(e) {
              return new Oe(t => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (ES(e))
            return (function G$(e) {
              return DS(CS(e));
            })(e);
        }
        throw vS(e);
      }
      function DS(e) {
        return new Oe(t => {
          (function q$(e, t) {
            var n, r, o, i;
            return (function uS(e, t, n, r) {
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
                for (n = fS(e); !(r = yield n.next()).done; )
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
      function ir(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function mg(e, t = 0) {
        return We((n, r) => {
          n.subscribe(
            Ne(
              r,
              o => ir(r, e, () => r.next(o), t),
              () => ir(r, e, () => r.complete(), t),
              o => ir(r, e, () => r.error(o), t),
            ),
          );
        });
      }
      function bS(e, t = 0) {
        return We((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function wS(e, t) {
        if (!e) throw new Error('Iterable cannot be null');
        return new Oe(n => {
          ir(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            ir(
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
          ? (function X$(e, t) {
              if (null != e) {
                if (gS(e))
                  return (function W$(e, t) {
                    return En(e).pipe(bS(t), mg(t));
                  })(e, t);
                if (hS(e))
                  return (function Q$(e, t) {
                    return new Oe(n => {
                      let r = 0;
                      return t.schedule(function () {
                        r === e.length
                          ? n.complete()
                          : (n.next(e[r++]),
                            n.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (pS(e))
                  return (function Z$(e, t) {
                    return En(e).pipe(bS(t), mg(t));
                  })(e, t);
                if (mS(e)) return wS(e, t);
                if (_S(e))
                  return (function Y$(e, t) {
                    return new Oe(n => {
                      let r;
                      return (
                        ir(n, t, () => {
                          (r = e[yS]()),
                            ir(
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
                        () => be(r?.return) && r.return()
                      );
                    });
                  })(e, t);
                if (ES(e))
                  return (function K$(e, t) {
                    return wS(CS(e), t);
                  })(e, t);
              }
              throw vS(e);
            })(e, t)
          : En(e);
      }
      function vg(e) {
        return e[e.length - 1];
      }
      function yg(e) {
        return be(vg(e)) ? e.pop() : void 0;
      }
      function rl(e) {
        return (function J$(e) {
          return e && be(e.schedule);
        })(vg(e))
          ? e.pop()
          : void 0;
      }
      function H(...e) {
        return dt(e, rl(e));
      }
      const ol = Jl(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: eH } = Array,
        { getPrototypeOf: tH, prototype: nH, keys: rH } = Object;
      function IS(e) {
        if (1 === e.length) {
          const t = e[0];
          if (eH(t)) return { args: t, keys: null };
          if (
            (function oH(e) {
              return e && 'object' == typeof e && tH(e) === nH;
            })(t)
          ) {
            const n = rH(t);
            return { args: n.map(r => t[r]), keys: n };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: iH } = Array;
      function SS(e) {
        return re(t =>
          (function sH(e, t) {
            return iH(t) ? e(...t) : e(t);
          })(e, t),
        );
      }
      function MS(e, t) {
        return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
      }
      function TS(...e) {
        const t = rl(e),
          n = yg(e),
          { args: r, keys: o } = IS(e);
        if (0 === r.length) return dt([], t);
        const i = new Oe(
          (function aH(e, t, n = $n) {
            return r => {
              AS(
                t,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let c = 0; c < o; c++)
                    AS(
                      t,
                      () => {
                        const u = dt(e[c], t);
                        let l = !1;
                        u.subscribe(
                          Ne(
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
          })(r, t, o ? s => MS(o, s) : $n),
        );
        return n ? i.pipe(SS(n)) : i;
      }
      function AS(e, t, n) {
        e ? ir(n, e, t) : t();
      }
      function It(e, t, n = 1 / 0) {
        return be(t)
          ? It((r, o) => re((i, s) => t(r, i, o, s))(En(e(r, o))), n)
          : ('number' == typeof t && (n = t),
            We((r, o) =>
              (function cH(e, t, n, r, o, i, s, a) {
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
                    En(n(g, l++)).subscribe(
                      Ne(
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
                                s ? ir(t, s, () => p(C)) : p(C);
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
                    Ne(t, h, () => {
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
      function Cg(...e) {
        return (function uH() {
          return (function _g(e = 1 / 0) {
            return It($n, e);
          })(1);
        })()(dt(e, rl(e)));
      }
      function NS(e) {
        return new Oe(t => {
          En(e()).subscribe(t);
        });
      }
      function il(e, t) {
        const n = be(e) ? e : () => e,
          r = o => o.error(n());
        return new Oe(t ? o => t.schedule(r, 0, o) : r);
      }
      const Ln = new Oe(e => e.complete());
      function Eg() {
        return We((e, t) => {
          let n = null;
          e._refCount++;
          const r = Ne(t, void 0, void 0, void 0, () => {
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
      class RS extends Oe {
        constructor(t, n) {
          super(),
            (this.source = t),
            (this.subjectFactory = n),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            Ym(t) && (this.lift = t.lift);
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
                Ne(
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
          return Eg()(this);
        }
      }
      function sr(e, t) {
        return We((n, r) => {
          let o = null,
            i = 0,
            s = !1;
          const a = () => s && !o && r.complete();
          n.subscribe(
            Ne(
              r,
              c => {
                o?.unsubscribe();
                let u = 0;
                const l = i++;
                En(e(c, l)).subscribe(
                  (o = Ne(
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
      function wi(e) {
        return e <= 0
          ? () => Ln
          : We((t, n) => {
              let r = 0;
              t.subscribe(
                Ne(n, o => {
                  ++r <= e && (n.next(o), e <= r && n.complete());
                }),
              );
            });
      }
      function uo(e, t) {
        return We((n, r) => {
          let o = 0;
          n.subscribe(Ne(r, i => e.call(t, i, o++) && r.next(i)));
        });
      }
      function sl(e) {
        return We((t, n) => {
          let r = !1;
          t.subscribe(
            Ne(
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
      function xS(e = fH) {
        return We((t, n) => {
          let r = !1;
          t.subscribe(
            Ne(
              n,
              o => {
                (r = !0), n.next(o);
              },
              () => (r ? n.complete() : n.error(e())),
            ),
          );
        });
      }
      function fH() {
        return new ol();
      }
      function lo(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? uo((o, i) => e(o, i, r)) : $n,
            wi(1),
            n ? sl(t) : xS(() => new ol()),
          );
      }
      function al(e, t) {
        return be(t) ? It(e, t, 1) : It(e, 1);
      }
      function St(e, t, n) {
        const r =
          be(e) || t || n ? { next: e, error: t, complete: n } : e;
        return r
          ? We((o, i) => {
              var s;
              null === (s = r.subscribe) || void 0 === s || s.call(r);
              let a = !0;
              o.subscribe(
                Ne(
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
          : $n;
      }
      function Ii(e) {
        return We((t, n) => {
          let i,
            r = null,
            o = !1;
          (r = t.subscribe(
            Ne(n, void 0, void 0, s => {
              (i = En(e(s, Ii(e)(t)))),
                r
                  ? (r.unsubscribe(), (r = null), i.subscribe(n))
                  : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(n));
        });
      }
      function OS(e, t) {
        return We(
          (function hH(e, t, n, r, o) {
            return (i, s) => {
              let a = n,
                c = t,
                u = 0;
              i.subscribe(
                Ne(
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
      function Dg(e) {
        return e <= 0
          ? () => Ln
          : We((t, n) => {
              let r = [];
              t.subscribe(
                Ne(
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
      function bg(e) {
        return We((t, n) => {
          try {
            t.subscribe(n);
          } finally {
            n.add(e);
          }
        });
      }
      const z = 'primary',
        da = Symbol('RouteTitle');
      class vH {
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
      function Si(e) {
        return new vH(e);
      }
      function yH(e, t, n) {
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
      function Vn(e, t) {
        const n = e ? wg(e) : void 0,
          r = t ? wg(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let o;
        for (let i = 0; i < n.length; i++)
          if (((o = n[i]), !FS(e[o], t[o]))) return !1;
        return !0;
      }
      function wg(e) {
        return [
          ...Object.keys(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      }
      function FS(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((o, i) => r[i] === o);
        }
        return e === t;
      }
      function kS(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Mr(e) {
        return (function y$(e) {
          return (
            !!e &&
            (e instanceof Oe || (be(e.lift) && be(e.subscribe)))
          );
        })(e)
          ? e
          : ea(e)
          ? dt(Promise.resolve(e))
          : H(e);
      }
      const CH = {
          exact: function VS(e, t, n) {
            if (
              !ho(e.segments, t.segments) ||
              !cl(e.segments, t.segments, n) ||
              e.numberOfChildren !== t.numberOfChildren
            )
              return !1;
            for (const r in t.children)
              if (
                !e.children[r] ||
                !VS(e.children[r], t.children[r], n)
              )
                return !1;
            return !0;
          },
          subset: jS,
        },
        PS = {
          exact: function EH(e, t) {
            return Vn(e, t);
          },
          subset: function DH(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every(n => FS(e[n], t[n]))
            );
          },
          ignored: () => !0,
        };
      function LS(e, t, n) {
        return (
          CH[n.paths](e.root, t.root, n.matrixParams) &&
          PS[n.queryParams](e.queryParams, t.queryParams) &&
          !('exact' === n.fragment && e.fragment !== t.fragment)
        );
      }
      function jS(e, t, n) {
        return US(e, t, t.segments, n);
      }
      function US(e, t, n, r) {
        if (e.segments.length > n.length) {
          const o = e.segments.slice(0, n.length);
          return !(!ho(o, n) || t.hasChildren() || !cl(o, n, r));
        }
        if (e.segments.length === n.length) {
          if (!ho(e.segments, n) || !cl(e.segments, n, r)) return !1;
          for (const o in t.children)
            if (
              !e.children[o] ||
              !jS(e.children[o], t.children[o], r)
            )
              return !1;
          return !0;
        }
        {
          const o = n.slice(0, e.segments.length),
            i = n.slice(e.segments.length);
          return (
            !!(
              ho(e.segments, o) &&
              cl(e.segments, o, r) &&
              e.children[z]
            ) && US(e.children[z], t, i, r)
          );
        }
      }
      function cl(e, t, n) {
        return t.every((r, o) =>
          PS[n](e[o].parameters, r.parameters),
        );
      }
      class fo {
        constructor(t = new ge([], {}), n = {}, r = null) {
          (this.root = t),
            (this.queryParams = n),
            (this.fragment = r);
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= Si(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return IH.serialize(this);
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
          return ll(this);
        }
      }
      class fa {
        constructor(t, n) {
          (this.path = t), (this.parameters = n);
        }
        get parameterMap() {
          return (
            (this._parameterMap ??= Si(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return HS(this);
        }
      }
      function ho(e, t) {
        return (
          e.length === t.length &&
          e.every((n, r) => n.path === t[r].path)
        );
      }
      let Mi = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => new ul(),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class ul {
        parse(t) {
          const n = new PH(t);
          return new fo(
            n.parseRootSegment(),
            n.parseQueryParams(),
            n.parseFragment(),
          );
        }
        serialize(t) {
          const n = `/${ha(t.root, !0)}`,
            r = (function TH(e) {
              const t = Object.entries(e)
                .map(([n, r]) =>
                  Array.isArray(r)
                    ? r.map(o => `${dl(n)}=${dl(o)}`).join('&')
                    : `${dl(n)}=${dl(r)}`,
                )
                .filter(n => n);
              return t.length ? `?${t.join('&')}` : '';
            })(t.queryParams);
          return `${n}${r}${
            'string' == typeof t.fragment
              ? `#${(function SH(e) {
                  return encodeURI(e);
                })(t.fragment)}`
              : ''
          }`;
        }
      }
      const IH = new ul();
      function ll(e) {
        return e.segments.map(t => HS(t)).join('/');
      }
      function ha(e, t) {
        if (!e.hasChildren()) return ll(e);
        if (t) {
          const n = e.children[z] ? ha(e.children[z], !1) : '',
            r = [];
          return (
            Object.entries(e.children).forEach(([o, i]) => {
              o !== z && r.push(`${o}:${ha(i, !1)}`);
            }),
            r.length > 0 ? `${n}(${r.join('//')})` : n
          );
        }
        {
          const n = (function wH(e, t) {
            let n = [];
            return (
              Object.entries(e.children).forEach(([r, o]) => {
                r === z && (n = n.concat(t(o, r)));
              }),
              Object.entries(e.children).forEach(([r, o]) => {
                r !== z && (n = n.concat(t(o, r)));
              }),
              n
            );
          })(e, (r, o) =>
            o === z ? [ha(e.children[z], !1)] : [`${o}:${ha(r, !1)}`],
          );
          return 1 === Object.keys(e.children).length &&
            null != e.children[z]
            ? `${ll(e)}/${n[0]}`
            : `${ll(e)}/(${n.join('//')})`;
        }
      }
      function BS(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function dl(e) {
        return BS(e).replace(/%3B/gi, ';');
      }
      function Ig(e) {
        return BS(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function fl(e) {
        return decodeURIComponent(e);
      }
      function $S(e) {
        return fl(e.replace(/\+/g, '%20'));
      }
      function HS(e) {
        return `${Ig(e.path)}${(function MH(e) {
          return Object.entries(e)
            .map(([t, n]) => `;${Ig(t)}=${Ig(n)}`)
            .join('');
        })(e.parameters)}`;
      }
      const AH = /^[^\/()?;#]+/;
      function Sg(e) {
        const t = e.match(AH);
        return t ? t[0] : '';
      }
      const NH = /^[^\/()?;=#]+/,
        xH = /^[^=?&#]+/,
        FH = /^[^&#]+/;
      class PH {
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
              (r[z] = new ge(t, n)),
            r
          );
        }
        parseSegment() {
          const t = Sg(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new E(4009, !1);
          return (
            this.capture(t), new fa(fl(t), this.parseMatrixParams())
          );
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const n = (function RH(e) {
            const t = e.match(NH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const o = Sg(this.remaining);
            o && ((r = o), this.capture(r));
          }
          t[fl(n)] = fl(r);
        }
        parseQueryParam(t) {
          const n = (function OH(e) {
            const t = e.match(xH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const s = (function kH(e) {
              const t = e.match(FH);
              return t ? t[0] : '';
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = $S(n),
            i = $S(r);
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
            const r = Sg(this.remaining),
              o = this.remaining[r.length];
            if ('/' !== o && ')' !== o && ';' !== o)
              throw new E(4010, !1);
            let i;
            r.indexOf(':') > -1
              ? ((i = r.slice(0, r.indexOf(':'))),
                this.capture(i),
                this.capture(':'))
              : t && (i = z);
            const s = this.parseChildren();
            (n[i] =
              1 === Object.keys(s).length ? s[z] : new ge([], s)),
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
      function zS(e) {
        return e.segments.length > 0 ? new ge([], { [z]: e }) : e;
      }
      function GS(e) {
        const t = {};
        for (const [r, o] of Object.entries(e.children)) {
          const i = GS(o);
          if (r === z && 0 === i.segments.length && i.hasChildren())
            for (const [s, a] of Object.entries(i.children)) t[s] = a;
          else
            (i.segments.length > 0 || i.hasChildren()) && (t[r] = i);
        }
        return (function LH(e) {
          if (1 === e.numberOfChildren && e.children[z]) {
            const t = e.children[z];
            return new ge(e.segments.concat(t.segments), t.children);
          }
          return e;
        })(new ge(e.segments, t));
      }
      function po(e) {
        return e instanceof fo;
      }
      function qS(e) {
        let t;
        const o = zS(
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
      function WS(e, t, n, r) {
        let o = e;
        for (; o.parent; ) o = o.parent;
        if (0 === t.length) return Mg(o, o, o, n, r);
        const i = (function jH(e) {
          if (
            'string' == typeof e[0] &&
            1 === e.length &&
            '/' === e[0]
          )
            return new QS(!0, 0, e);
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
          return new QS(n, t, r);
        })(t);
        if (i.toRoot()) return Mg(o, o, new ge([], {}), n, r);
        const s = (function UH(e, t, n) {
            if (e.isAbsolute) return new pl(t, !0, 0);
            if (!n) return new pl(t, !1, NaN);
            if (null === n.parent) return new pl(n, !0, 0);
            const r = hl(e.commands[0]) ? 0 : 1;
            return (function BH(e, t, n) {
              let r = e,
                o = t,
                i = n;
              for (; i > o; ) {
                if (((i -= o), (r = r.parent), !r))
                  throw new E(4005, !1);
                o = r.segments.length;
              }
              return new pl(r, !1, o - i);
            })(n, n.segments.length - 1 + r, e.numberOfDoubleDots);
          })(i, o, e),
          a = s.processChildren
            ? ga(s.segmentGroup, s.index, i.commands)
            : YS(s.segmentGroup, s.index, i.commands);
        return Mg(o, s.segmentGroup, a, n, r);
      }
      function hl(e) {
        return (
          'object' == typeof e &&
          null != e &&
          !e.outlets &&
          !e.segmentPath
        );
      }
      function pa(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function Mg(e, t, n, r, o) {
        let s,
          i = {};
        r &&
          Object.entries(r).forEach(([c, u]) => {
            i[c] = Array.isArray(u) ? u.map(l => `${l}`) : `${u}`;
          }),
          (s = e === t ? n : ZS(e, t, n));
        const a = zS(GS(s));
        return new fo(a, i, o);
      }
      function ZS(e, t, n) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([o, i]) => {
            r[o] = i === t ? n : ZS(i, t, n);
          }),
          new ge(e.segments, r)
        );
      }
      class QS {
        constructor(t, n, r) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = r),
            t && r.length > 0 && hl(r[0]))
          )
            throw new E(4003, !1);
          const o = r.find(pa);
          if (o && o !== kS(r)) throw new E(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class pl {
        constructor(t, n, r) {
          (this.segmentGroup = t),
            (this.processChildren = n),
            (this.index = r);
        }
      }
      function YS(e, t, n) {
        if (
          ((e ??= new ge([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return ga(e, t, n);
        const r = (function HH(e, t, n) {
            let r = 0,
              o = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= n.length) return i;
              const s = e.segments[o],
                a = n[r];
              if (pa(a)) break;
              const c = `${a}`,
                u = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === c) break;
              if (
                c &&
                u &&
                'object' == typeof u &&
                void 0 === u.outlets
              ) {
                if (!XS(c, u, s)) return i;
                r += 2;
              } else {
                if (!XS(c, {}, s)) return i;
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
            (i.children[z] = new ge(
              e.segments.slice(r.pathIndex),
              e.children,
            )),
            ga(i, 0, o)
          );
        }
        return r.match && 0 === o.length
          ? new ge(e.segments, {})
          : r.match && !e.hasChildren()
          ? Tg(e, t, n)
          : r.match
          ? ga(e, 0, o)
          : Tg(e, t, n);
      }
      function ga(e, t, n) {
        if (0 === n.length) return new ge(e.segments, {});
        {
          const r = (function $H(e) {
              return pa(e[0]) ? e[0].outlets : { [z]: e };
            })(n),
            o = {};
          if (
            Object.keys(r).some(i => i !== z) &&
            e.children[z] &&
            1 === e.numberOfChildren &&
            0 === e.children[z].segments.length
          ) {
            const i = ga(e.children[z], t, n);
            return new ge(e.segments, i.children);
          }
          return (
            Object.entries(r).forEach(([i, s]) => {
              'string' == typeof s && (s = [s]),
                null !== s && (o[i] = YS(e.children[i], t, s));
            }),
            Object.entries(e.children).forEach(([i, s]) => {
              void 0 === r[i] && (o[i] = s);
            }),
            new ge(e.segments, o)
          );
        }
      }
      function Tg(e, t, n) {
        const r = e.segments.slice(0, t);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (pa(i)) {
            const c = zH(i.outlets);
            return new ge(r, c);
          }
          if (0 === o && hl(n[0])) {
            r.push(new fa(e.segments[t].path, KS(n[0]))), o++;
            continue;
          }
          const s = pa(i) ? i.outlets[z] : `${i}`,
            a = o < n.length - 1 ? n[o + 1] : null;
          s && a && hl(a)
            ? (r.push(new fa(s, KS(a))), (o += 2))
            : (r.push(new fa(s, {})), o++);
        }
        return new ge(r, {});
      }
      function zH(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => {
            'string' == typeof r && (r = [r]),
              null !== r && (t[n] = Tg(new ge([], {}), 0, r));
          }),
          t
        );
      }
      function KS(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => (t[n] = `${r}`)), t
        );
      }
      function XS(e, t, n) {
        return e == n.path && Vn(t, n.parameters);
      }
      const ma = 'imperative';
      var X = (function (e) {
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
      })(X || {});
      class jn {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class gl extends jn {
        constructor(t, n, r = 'imperative', o = null) {
          super(t, n),
            (this.type = X.NavigationStart),
            (this.navigationTrigger = r),
            (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Tr extends jn {
        constructor(t, n, r) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.type = X.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var Qt = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] =
              'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(Qt || {}),
        ml = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] =
              'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
              'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(ml || {});
      class go extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = X.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ti extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = X.NavigationSkipped);
        }
      }
      class Ag extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.error = r),
            (this.target = o),
            (this.type = X.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class JS extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = X.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class GH extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = X.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class qH extends jn {
        constructor(t, n, r, o, i) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.shouldActivate = i),
            (this.type = X.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class WH extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = X.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ZH extends jn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = X.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class QH {
        constructor(t) {
          (this.route = t), (this.type = X.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class YH {
        constructor(t) {
          (this.route = t), (this.type = X.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class KH {
        constructor(t) {
          (this.snapshot = t), (this.type = X.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class XH {
        constructor(t) {
          (this.snapshot = t), (this.type = X.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class JH {
        constructor(t) {
          (this.snapshot = t), (this.type = X.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class e3 {
        constructor(t) {
          (this.snapshot = t), (this.type = X.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class eM {
        constructor(t, n, r) {
          (this.routerEvent = t),
            (this.position = n),
            (this.anchor = r),
            (this.type = X.Scroll);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position
              ? `${this.position[0]}, ${this.position[1]}`
              : null
          }')`;
        }
      }
      class Ng {}
      class vl {
        constructor(t, n) {
          (this.url = t), (this.navigationBehaviorOptions = n);
        }
      }
      function Dn(e) {
        return e.outlet || z;
      }
      function va(e) {
        if (!e) return null;
        if (e.routeConfig?._injector) return e.routeConfig._injector;
        for (let t = e.parent; t; t = t.parent) {
          const n = t.routeConfig;
          if (n?._loadedInjector) return n._loadedInjector;
          if (n?._injector) return n._injector;
        }
        return null;
      }
      class a3 {
        get injector() {
          return va(this.route?.snapshot) ?? this.rootInjector;
        }
        set injector(t) {}
        constructor(t) {
          (this.rootInjector = t),
            (this.outlet = null),
            (this.route = null),
            (this.children = new ya(this.rootInjector)),
            (this.attachRef = null);
        }
      }
      let ya = (() => {
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
                ((r = new a3(this.rootInjector)),
                this.contexts.set(n, r)),
              r
            );
          }
          getContext(n) {
            return this.contexts.get(n) || null;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(x(Ht));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class tM {
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
          const n = Rg(t, this._root);
          return n ? n.children.map(r => r.value) : [];
        }
        firstChild(t) {
          const n = Rg(t, this._root);
          return n && n.children.length > 0
            ? n.children[0].value
            : null;
        }
        siblings(t) {
          const n = xg(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children
                .map(o => o.value)
                .filter(o => o !== t);
        }
        pathFromRoot(t) {
          return xg(t, this._root).map(n => n.value);
        }
      }
      function Rg(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const r = Rg(e, n);
          if (r) return r;
        }
        return null;
      }
      function xg(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = xg(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class bn {
        constructor(t, n) {
          (this.value = t), (this.children = n);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ai(e) {
        const t = {};
        return (
          e && e.children.forEach(n => (t[n.value.outlet] = n)), t
        );
      }
      class nM extends tM {
        constructor(t, n) {
          super(t), (this.snapshot = n), Og(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function rM(e) {
        const t = (function c3(e) {
            const i = new _l([], {}, {}, '', {}, z, e, null, {});
            return new oM('', new bn(i, []));
          })(e),
          n = new mt([new fa('', {})]),
          r = new mt({}),
          o = new mt({}),
          i = new mt({}),
          s = new mt(''),
          a = new Ni(n, r, i, s, o, z, e, t.root);
        return (a.snapshot = t.root), new nM(new bn(a, []), t);
      }
      class Ni {
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
              this.dataSubject?.pipe(re(u => u[da])) ?? H(void 0)),
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
            (this._paramMap ??= this.params.pipe(re(t => Si(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(
              re(t => Si(t)),
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
      function yl(e, t, n = 'emptyOnly') {
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
          o && sM(o) && (r.resolve[da] = o.title),
          r
        );
      }
      class _l {
        get title() {
          return this.data?.[da];
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
          return (this._paramMap ??= Si(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= Si(this.queryParams)),
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
      class oM extends tM {
        constructor(t, n) {
          super(n), (this.url = t), Og(this, n);
        }
        toString() {
          return iM(this._root);
        }
      }
      function Og(e, t) {
        (t.value._routerState = e), t.children.forEach(n => Og(e, n));
      }
      function iM(e) {
        const t =
          e.children.length > 0
            ? ` { ${e.children.map(iM).join(', ')} } `
            : '';
        return `${e.value}${t}`;
      }
      function Fg(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Vn(t.queryParams, n.queryParams) ||
              e.queryParamsSubject.next(n.queryParams),
            t.fragment !== n.fragment &&
              e.fragmentSubject.next(n.fragment),
            Vn(t.params, n.params) || e.paramsSubject.next(n.params),
            (function _H(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n)
                if (!Vn(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.urlSubject.next(n.url),
            Vn(t.data, n.data) || e.dataSubject.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot),
            e.dataSubject.next(e._futureSnapshot.data);
      }
      function kg(e, t) {
        const n =
          Vn(e.params, t.params) &&
          (function bH(e, t) {
            return (
              ho(e, t) &&
              e.every((n, r) => Vn(n.parameters, t[r].parameters))
            );
          })(e.url, t.url);
        return (
          n &&
          !(!e.parent != !t.parent) &&
          (!e.parent || kg(e.parent, t.parent))
        );
      }
      function sM(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let _a = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = z),
              (this.activateEvents = new K()),
              (this.deactivateEvents = new K()),
              (this.attachEvents = new K()),
              (this.detachEvents = new K()),
              (this.parentContexts = _(ya)),
              (this.location = _(gn)),
              (this.changeDetector = _(na)),
              (this.inputBinder = _(Cl, { optional: !0 })),
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
              c = new Pg(n, a, o.injector);
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
          static #t = (this.ɵdir = V({
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
            features: [Kt],
          }));
        }
        return e;
      })();
      class Pg {
        __ngOutletInjector(t) {
          return new Pg(this.route, this.childContexts, t);
        }
        constructor(t, n, r) {
          (this.route = t),
            (this.childContexts = n),
            (this.parent = r);
        }
        get(t, n) {
          return t === Ni
            ? this.route
            : t === ya
            ? this.childContexts
            : this.parent.get(t, n);
        }
      }
      const Cl = new D('');
      function Ca(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const o = (function l3(e, t, n) {
            return t.children.map(r => {
              for (const o of n.children)
                if (e.shouldReuseRoute(r.value, o.value.snapshot))
                  return Ca(e, r, o);
              return Ca(e, r);
            });
          })(e, t, n);
          return new bn(r, o);
        }
        {
          if (e.shouldAttach(t.value)) {
            const i = e.retrieve(t.value);
            if (null !== i) {
              const s = i.route;
              return (
                (s.value._futureSnapshot = t.value),
                (s.children = t.children.map(a => Ca(e, a))),
                s
              );
            }
          }
          const r = (function d3(e) {
              return new Ni(
                new mt(e.url),
                new mt(e.params),
                new mt(e.queryParams),
                new mt(e.fragment),
                new mt(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(t.value),
            o = t.children.map(i => Ca(e, i));
          return new bn(r, o);
        }
      }
      class Lg {
        constructor(t, n) {
          (this.redirectTo = t), (this.navigationBehaviorOptions = n);
        }
      }
      const cM = 'ngNavigationCancelingError';
      function El(e, t) {
        const { redirectTo: n, navigationBehaviorOptions: r } = po(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
          o = uM(!1, Qt.Redirect);
        return (o.url = n), (o.navigationBehaviorOptions = r), o;
      }
      function uM(e, t) {
        const n = new Error(`NavigationCancelingError: ${e || ''}`);
        return (n[cM] = !0), (n.cancellationCode = t), n;
      }
      function lM(e) {
        return !!e && e[cM];
      }
      class p3 {
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
            Fg(this.futureState.root),
            this.activateChildRoutes(n, r, t);
        }
        deactivateChildRoutes(t, n, r) {
          const o = Ai(n);
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
            i = Ai(t);
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
            i = Ai(t);
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
          const o = Ai(n);
          t.children.forEach(i => {
            this.activateRoutes(i, o[i.value.outlet], r),
              this.forwardEvent(new e3(i.value.snapshot));
          }),
            t.children.length &&
              this.forwardEvent(new XH(t.value.snapshot));
        }
        activateRoutes(t, n, r) {
          const o = t.value,
            i = n ? n.value : null;
          if ((Fg(o), o === i))
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
                Fg(a.route.value),
                this.activateChildRoutes(t, null, s.children);
            } else
              (s.attachRef = null),
                (s.route = o),
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(t, null, s.children);
          } else this.activateChildRoutes(t, null, r);
        }
      }
      class dM {
        constructor(t) {
          (this.path = t),
            (this.route = this.path[this.path.length - 1]);
        }
      }
      class Dl {
        constructor(t, n) {
          (this.component = t), (this.route = n);
        }
      }
      function g3(e, t, n) {
        const r = e._root;
        return Ea(r, t ? t._root : null, n, [r.value]);
      }
      function Ri(e, t) {
        const n = Symbol(),
          r = t.get(e, n);
        return r === n
          ? 'function' != typeof e ||
            (function eN(e) {
              return null !== Qa(e);
            })(e)
            ? t.get(e)
            : e
          : r;
      }
      function Ea(
        e,
        t,
        n,
        r,
        o = { canDeactivateChecks: [], canActivateChecks: [] },
      ) {
        const i = Ai(t);
        return (
          e.children.forEach(s => {
            (function v3(
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
                const c = (function y3(e, t, n) {
                  if ('function' == typeof n) return n(e, t);
                  switch (n) {
                    case 'pathParamsChange':
                      return !ho(e.url, t.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !ho(e.url, t.url) ||
                        !Vn(e.queryParams, t.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return (
                        !kg(e, t) || !Vn(e.queryParams, t.queryParams)
                      );
                    default:
                      return !kg(e, t);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? o.canActivateChecks.push(new dM(r))
                  : ((i.data = s.data),
                    (i._resolvedData = s._resolvedData)),
                  Ea(
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
                      new Dl(a.outlet.component, s),
                    );
              } else
                s && Da(t, a, o),
                  o.canActivateChecks.push(new dM(r)),
                  Ea(
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
            Da(a, n.getContext(s), o),
          ),
          o
        );
      }
      function Da(e, t, n) {
        const r = Ai(e),
          o = e.value;
        Object.entries(r).forEach(([i, s]) => {
          Da(
            s,
            o.component ? (t ? t.children.getContext(i) : null) : t,
            n,
          );
        }),
          n.canDeactivateChecks.push(
            new Dl(
              o.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              o,
            ),
          );
      }
      function ba(e) {
        return 'function' == typeof e;
      }
      function fM(e) {
        return e instanceof ol || 'EmptyError' === e?.name;
      }
      const bl = Symbol('INITIAL_VALUE');
      function xi() {
        return sr(e =>
          TS(
            e.map(t =>
              t.pipe(
                wi(1),
                (function dH(...e) {
                  const t = rl(e);
                  return We((n, r) => {
                    (t ? Cg(e, n, t) : Cg(e, n)).subscribe(r);
                  });
                })(bl),
              ),
            ),
          ).pipe(
            re(t => {
              for (const n of t)
                if (!0 !== n) {
                  if (n === bl) return bl;
                  if (!1 === n || I3(n)) return n;
                }
              return !0;
            }),
            uo(t => t !== bl),
            wi(1),
          ),
        );
      }
      function I3(e) {
        return po(e) || e instanceof Lg;
      }
      function hM(e) {
        return (function zT(...e) {
          return Wm(e);
        })(
          St(t => {
            if ('boolean' != typeof t) throw El(0, t);
          }),
          re(t => !0 === t),
        );
      }
      class Vg {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class wl extends Error {
        constructor(t) {
          super(), (this.urlTree = t);
        }
      }
      function Oi(e) {
        return il(new Vg(e));
      }
      class V3 {
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
              return H(r);
            if (o.numberOfChildren > 1 || !o.children[z])
              return il(new E(4e3, !1));
            o = o.children[z];
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
              m = Gn(i, () =>
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
            if (m instanceof fo) throw new wl(m);
            n = m;
          }
          const s = this.applyRedirectCreateUrlTree(
            n,
            this.urlSerializer.parse(n),
            t,
            r,
          );
          if ('/' === n[0]) throw new wl(s);
          return s;
        }
        applyRedirectCreateUrlTree(t, n, r, o) {
          const i = this.createSegmentGroup(t, n.root, r, o);
          return new fo(
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
      const jg = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function j3(e, t, n, r, o) {
        const i = Ug(e, t, n);
        return i.matched
          ? ((r = (function t3(e, t) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = Bh(
                    e.providers,
                    t,
                    `Route: ${e.path}`,
                  )),
                e._injector ?? t
              );
            })(t, r)),
            (function k3(e, t, n, r) {
              const o = t.canMatch;
              return o && 0 !== o.length
                ? H(
                    o.map(s => {
                      const a = Ri(s, e);
                      return Mr(
                        (function w3(e) {
                          return e && ba(e.canMatch);
                        })(a)
                          ? a.canMatch(t, n)
                          : Gn(e, () => a(t, n)),
                      );
                    }),
                  ).pipe(xi(), hM())
                : H(!0);
            })(r, t, n).pipe(re(s => (!0 === s ? i : { ...jg }))))
          : H(i);
      }
      function Ug(e, t, n) {
        if ('**' === t.path)
          return (function U3(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? kS(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(n);
        if ('' === t.path)
          return 'full' === t.pathMatch &&
            (e.hasChildren() || n.length > 0)
            ? { ...jg }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: n,
                parameters: {},
                positionalParamSegments: {},
              };
        const o = (t.matcher || yH)(n, e, t);
        if (!o) return { ...jg };
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
      function pM(e, t, n, r) {
        return n.length > 0 &&
          (function H3(e, t, n) {
            return n.some(r => Il(e, t, r) && Dn(r) !== z);
          })(e, n, r)
          ? {
              segmentGroup: new ge(t, $3(r, new ge(n, e.children))),
              slicedSegments: [],
            }
          : 0 === n.length &&
            (function z3(e, t, n) {
              return n.some(r => Il(e, t, r));
            })(e, n, r)
          ? {
              segmentGroup: new ge(
                e.segments,
                B3(e, n, r, e.children),
              ),
              slicedSegments: n,
            }
          : {
              segmentGroup: new ge(e.segments, e.children),
              slicedSegments: n,
            };
      }
      function B3(e, t, n, r) {
        const o = {};
        for (const i of n)
          if (Il(e, t, i) && !r[Dn(i)]) {
            const s = new ge([], {});
            o[Dn(i)] = s;
          }
        return { ...r, ...o };
      }
      function $3(e, t) {
        const n = {};
        n[z] = t;
        for (const r of e)
          if ('' === r.path && Dn(r) !== z) {
            const o = new ge([], {});
            n[Dn(r)] = o;
          }
        return n;
      }
      function Il(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) ||
            'full' !== n.pathMatch) &&
          '' === n.path
        );
      }
      class W3 {}
      class Y3 {
        constructor(t, n, r, o, i, s, a) {
          (this.injector = t),
            (this.configLoader = n),
            (this.rootComponentType = r),
            (this.config = o),
            (this.urlTree = i),
            (this.paramsInheritanceStrategy = s),
            (this.urlSerializer = a),
            (this.applyRedirects = new V3(
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
          const t = pM(
            this.urlTree.root,
            [],
            [],
            this.config,
          ).segmentGroup;
          return this.match(t).pipe(
            re(({ children: n, rootSnapshot: r }) => {
              const o = new bn(r, n),
                i = new oM('', o),
                s = (function VH(e, t, n = null, r = null) {
                  return WS(qS(e), t, n, r);
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
          const n = new _l(
            [],
            Object.freeze({}),
            Object.freeze({ ...this.urlTree.queryParams }),
            this.urlTree.fragment,
            Object.freeze({}),
            z,
            this.rootComponentType,
            null,
            {},
          );
          return this.processSegmentGroup(
            this.injector,
            this.config,
            t,
            z,
            n,
          ).pipe(
            re(r => ({ children: r, rootSnapshot: n })),
            Ii(r => {
              if (r instanceof wl)
                return (
                  (this.urlTree = r.urlTree),
                  this.match(r.urlTree.root)
                );
              throw r instanceof Vg ? this.noMatchError(r) : r;
            }),
          );
        }
        processSegmentGroup(t, n, r, o, i) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(t, n, r, i)
            : this.processSegment(t, n, r, r.segments, o, !0, i).pipe(
                re(s => (s instanceof bn ? [s] : [])),
              );
        }
        processChildren(t, n, r, o) {
          const i = [];
          for (const s of Object.keys(r.children))
            'primary' === s ? i.unshift(s) : i.push(s);
          return dt(i).pipe(
            al(s => {
              const a = r.children[s],
                c = (function s3(e, t) {
                  const n = e.filter(r => Dn(r) === t);
                  return n.push(...e.filter(r => Dn(r) !== t)), n;
                })(n, s);
              return this.processSegmentGroup(t, c, a, s, o);
            }),
            OS((s, a) => (s.push(...a), s)),
            sl(null),
            (function pH(e, t) {
              const n = arguments.length >= 2;
              return r =>
                r.pipe(
                  e ? uo((o, i) => e(o, i, r)) : $n,
                  Dg(1),
                  n ? sl(t) : xS(() => new ol()),
                );
            })(),
            It(s => {
              if (null === s) return Oi(r);
              const a = gM(s);
              return (
                (function K3(e) {
                  e.sort((t, n) =>
                    t.value.outlet === z
                      ? -1
                      : n.value.outlet === z
                      ? 1
                      : t.value.outlet.localeCompare(n.value.outlet),
                  );
                })(a),
                H(a)
              );
            }),
          );
        }
        processSegment(t, n, r, o, i, s, a) {
          return dt(n).pipe(
            al(c =>
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
                Ii(u => {
                  if (u instanceof Vg) return H(null);
                  throw u;
                }),
              ),
            ),
            lo(c => !!c),
            Ii(c => {
              if (fM(c))
                return (function q3(e, t, n) {
                  return 0 === t.length && !e.children[n];
                })(r, o, i)
                  ? H(new W3())
                  : Oi(r);
              throw c;
            }),
          );
        }
        processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
          return (function G3(e, t, n, r) {
            return (
              !!(Dn(e) === r || (r !== z && Il(t, n, e))) &&
              Ug(t, e, n).matched
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
              : Oi(o)
            : Oi(o);
        }
        expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s, a) {
          const {
            matched: c,
            parameters: u,
            consumedSegments: l,
            positionalParamSegments: d,
            remainingSegments: f,
          } = Ug(n, o, i);
          if (!c) return Oi(n);
          'string' == typeof o.redirectTo &&
            '/' === o.redirectTo[0] &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 &&
              (this.allowRedirects = !1));
          const h = new _l(
              i,
              u,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              mM(o),
              Dn(o),
              o.component ?? o._loadedComponent ?? null,
              o,
              vM(o),
            ),
            p = yl(h, a, this.paramsInheritanceStrategy);
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
              It(m =>
                this.processSegment(t, r, n, m.concat(f), s, !1, a),
              ),
            );
        }
        matchSegmentAgainstRoute(t, n, r, o, i, s) {
          const a = j3(n, r, o, t);
          return (
            '**' === r.path && (n.children = {}),
            a.pipe(
              sr(c =>
                c.matched
                  ? this.getChildConfig(
                      (t = r._injector ?? t),
                      r,
                      o,
                    ).pipe(
                      sr(({ routes: u }) => {
                        const l = r._loadedInjector ?? t,
                          {
                            parameters: d,
                            consumedSegments: f,
                            remainingSegments: h,
                          } = c,
                          p = new _l(
                            f,
                            d,
                            Object.freeze({
                              ...this.urlTree.queryParams,
                            }),
                            this.urlTree.fragment,
                            mM(r),
                            Dn(r),
                            r.component ?? r._loadedComponent ?? null,
                            r,
                            vM(r),
                          ),
                          g = yl(
                            p,
                            s,
                            this.paramsInheritanceStrategy,
                          );
                        (p.params = Object.freeze(g.params)),
                          (p.data = Object.freeze(g.data));
                        const { segmentGroup: m, slicedSegments: C } =
                          pM(n, f, h, u);
                        if (0 === C.length && m.hasChildren())
                          return this.processChildren(
                            l,
                            u,
                            m,
                            p,
                          ).pipe(re(M => new bn(p, M)));
                        if (0 === u.length && 0 === C.length)
                          return H(new bn(p, []));
                        const y = Dn(r) === i;
                        return this.processSegment(
                          l,
                          u,
                          m,
                          C,
                          y ? z : i,
                          !0,
                          p,
                        ).pipe(
                          re(
                            M =>
                              new bn(p, M instanceof bn ? [M] : []),
                          ),
                        );
                      }),
                    )
                  : Oi(n),
              ),
            )
          );
        }
        getChildConfig(t, n, r) {
          return n.children
            ? H({ routes: n.children, injector: t })
            : n.loadChildren
            ? void 0 !== n._loadedRoutes
              ? H({
                  routes: n._loadedRoutes,
                  injector: n._loadedInjector,
                })
              : (function F3(e, t, n, r) {
                  const o = t.canLoad;
                  return void 0 === o || 0 === o.length
                    ? H(!0)
                    : H(
                        o.map(s => {
                          const a = Ri(s, e);
                          return Mr(
                            (function C3(e) {
                              return e && ba(e.canLoad);
                            })(a)
                              ? a.canLoad(t, n)
                              : Gn(e, () => a(t, n)),
                          );
                        }),
                      ).pipe(xi(), hM());
                })(t, n, r).pipe(
                  It(o =>
                    o
                      ? this.configLoader.loadChildren(t, n).pipe(
                          St(i => {
                            (n._loadedRoutes = i.routes),
                              (n._loadedInjector = i.injector);
                          }),
                        )
                      : (function L3(e) {
                          return il(uM(!1, Qt.GuardRejected));
                        })(),
                  ),
                )
            : H({ routes: [], injector: t });
        }
      }
      function X3(e) {
        const t = e.value.routeConfig;
        return t && '' === t.path;
      }
      function gM(e) {
        const t = [],
          n = new Set();
        for (const r of e) {
          if (!X3(r)) {
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
          const o = gM(r.children);
          t.push(new bn(r.value, o));
        }
        return t.filter(r => !n.has(r));
      }
      function mM(e) {
        return e.data || {};
      }
      function vM(e) {
        return e.resolve || {};
      }
      function yM(e) {
        const t = e.children.map(n => yM(n)).flat();
        return [e, ...t];
      }
      function Bg(e) {
        return sr(t => {
          const n = e(t);
          return n ? dt(n).pipe(re(() => t)) : H(t);
        });
      }
      let _M = (() => {
          class e {
            buildTitle(n) {
              let r,
                o = n.root;
              for (; void 0 !== o; )
                (r = this.getResolvedTitleForRoute(o) ?? r),
                  (o = o.children.find(i => i.outlet === z));
              return r;
            }
            getResolvedTitleForRoute(n) {
              return n.data[da];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(oz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        oz = (() => {
          class e extends _M {
            constructor(n) {
              super(), (this.title = n);
            }
            updateTitle(n) {
              const r = this.buildTitle(n);
              void 0 !== r && this.title.setTitle(r);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(x(p$));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const wa = new D('', {
        providedIn: 'root',
        factory: () => ({}),
      });
      let CM = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = oe({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [ie],
            decls: 1,
            vars: 0,
            template: function (r, o) {
              1 & r && ze(0, 'router-outlet');
            },
            dependencies: [_a],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function $g(e) {
        const t = e.children && e.children.map($g),
          n = t ? { ...e, children: t } : { ...e };
        return (
          !n.component &&
            !n.loadComponent &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== z &&
            (n.component = CM),
          n
        );
      }
      const Sl = new D('');
      let EM = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = _(R2));
          }
          loadComponent(n) {
            if (this.componentLoaders.get(n))
              return this.componentLoaders.get(n);
            if (n._loadedComponent) return H(n._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(n);
            const r = Mr(n.loadComponent()).pipe(
                re(DM),
                St(i => {
                  this.onLoadEndListener && this.onLoadEndListener(n),
                    (n._loadedComponent = i);
                }),
                bg(() => {
                  this.componentLoaders.delete(n);
                }),
              ),
              o = new RS(r, () => new Tt()).pipe(Eg());
            return this.componentLoaders.set(n, o), o;
          }
          loadChildren(n, r) {
            if (this.childrenLoaders.get(r))
              return this.childrenLoaders.get(r);
            if (r._loadedRoutes)
              return H({
                routes: r._loadedRoutes,
                injector: r._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(r);
            const i = (function iz(e, t, n, r) {
                return Mr(e.loadChildren()).pipe(
                  re(DM),
                  It(o =>
                    o instanceof HE || Array.isArray(o)
                      ? H(o)
                      : dt(t.compileModuleAsync(o)),
                  ),
                  re(o => {
                    r && r(e);
                    let i,
                      s,
                      a = !1;
                    return (
                      Array.isArray(o)
                        ? ((s = o), !0)
                        : ((i = o.create(n).injector),
                          (s = i
                            .get(Sl, [], { optional: !0, self: !0 })
                            .flat())),
                      { routes: s.map($g), injector: i }
                    );
                  }),
                );
              })(r, this.compiler, n, this.onLoadEndListener).pipe(
                bg(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new RS(i, () => new Tt()).pipe(Eg());
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
      function DM(e) {
        return (function sz(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let Hg = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(az),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        az = (() => {
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
      const bM = new D(''),
        IM = new D('');
      let Ml = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new Tt()),
              (this.transitionAbortSubject = new Tt()),
              (this.configLoader = _(EM)),
              (this.environmentInjector = _(Ht)),
              (this.urlSerializer = _(Mi)),
              (this.rootContexts = _(ya)),
              (this.location = _(sa)),
              (this.inputBindingEnabled =
                null !== _(Cl, { optional: !0 })),
              (this.titleStrategy = _(_M)),
              (this.options = _(wa, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy ||
                'emptyOnly'),
              (this.urlHandlingStrategy = _(Hg)),
              (this.createViewTransition = _(bM, { optional: !0 })),
              (this.navigationErrorHandler = _(IM, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => H(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = o =>
                this.events.next(new YH(o))),
              (this.configLoader.onLoadStartListener = o =>
                this.events.next(new QH(o)));
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
              (this.transitions = new mt({
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
                source: ma,
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
                uo(i => 0 !== i.id),
                re(i => ({
                  ...i,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    i.rawUrl,
                  ),
                })),
                sr(i => {
                  let s = !1,
                    a = !1;
                  return H(i).pipe(
                    sr(c => {
                      if (this.navigationId > i.id)
                        return (
                          this.cancelNavigationTransition(
                            i,
                            '',
                            Qt.SupersededByNewNavigation,
                          ),
                          Ln
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
                            new Ti(
                              c.id,
                              this.urlSerializer.serialize(c.rawUrl),
                              d,
                              ml.IgnoredSameUrlNavigation,
                            ),
                          ),
                          c.resolve(!1),
                          Ln
                        );
                      }
                      if (
                        this.urlHandlingStrategy.shouldProcessUrl(
                          c.rawUrl,
                        )
                      )
                        return H(c).pipe(
                          sr(d => {
                            const f = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new gl(
                                  d.id,
                                  this.urlSerializer.serialize(
                                    d.extractedUrl,
                                  ),
                                  d.source,
                                  d.restoredState,
                                ),
                              ),
                              f !== this.transitions?.getValue()
                                ? Ln
                                : Promise.resolve(d)
                            );
                          }),
                          (function J3(e, t, n, r, o, i) {
                            return It(s =>
                              (function Z3(
                                e,
                                t,
                                n,
                                r,
                                o,
                                i,
                                s = 'emptyOnly',
                              ) {
                                return new Y3(
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
                                re(({ state: a, tree: c }) => ({
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
                          St(d => {
                            (i.targetSnapshot = d.targetSnapshot),
                              (i.urlAfterRedirects =
                                d.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: d.urlAfterRedirects,
                              });
                            const f = new JS(
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
                          m = new gl(
                            d,
                            this.urlSerializer.serialize(f),
                            h,
                            p,
                          );
                        this.events.next(m);
                        const C = rM(this.rootComponentType).snapshot;
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
                          H(i)
                        );
                      }
                      {
                        const d = '';
                        return (
                          this.events.next(
                            new Ti(
                              c.id,
                              this.urlSerializer.serialize(
                                c.extractedUrl,
                              ),
                              d,
                              ml.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          c.resolve(!1),
                          Ln
                        );
                      }
                    }),
                    St(c => {
                      const u = new GH(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(
                          c.urlAfterRedirects,
                        ),
                        c.targetSnapshot,
                      );
                      this.events.next(u);
                    }),
                    re(
                      c => (
                        (this.currentTransition = i =
                          {
                            ...c,
                            guards: g3(
                              c.targetSnapshot,
                              c.currentSnapshot,
                              this.rootContexts,
                            ),
                          }),
                        i
                      ),
                    ),
                    (function S3(e, t) {
                      return It(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: o,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: s,
                          },
                        } = n;
                        return 0 === s.length && 0 === i.length
                          ? H({ ...n, guardsResult: !0 })
                          : (function M3(e, t, n, r) {
                              return dt(e).pipe(
                                It(o =>
                                  (function O3(e, t, n, r, o) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? H(
                                          i.map(a => {
                                            const c = va(t) ?? o,
                                              u = Ri(a, c);
                                            return Mr(
                                              (function b3(e) {
                                                return (
                                                  e &&
                                                  ba(e.canDeactivate)
                                                );
                                              })(u)
                                                ? u.canDeactivate(
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                  )
                                                : Gn(c, () =>
                                                    u(e, t, n, r),
                                                  ),
                                            ).pipe(lo());
                                          }),
                                        ).pipe(xi())
                                      : H(!0);
                                  })(o.component, o.route, n, t, r),
                                ),
                                lo(o => !0 !== o, !0),
                              );
                            })(s, r, o, e).pipe(
                              It(a =>
                                a &&
                                (function _3(e) {
                                  return 'boolean' == typeof e;
                                })(a)
                                  ? (function T3(e, t, n, r) {
                                      return dt(t).pipe(
                                        al(o =>
                                          Cg(
                                            (function N3(e, t) {
                                              return (
                                                null !== e &&
                                                  t &&
                                                  t(new KH(e)),
                                                H(!0)
                                              );
                                            })(o.route.parent, r),
                                            (function A3(e, t) {
                                              return (
                                                null !== e &&
                                                  t &&
                                                  t(new JH(e)),
                                                H(!0)
                                              );
                                            })(o.route, r),
                                            (function x3(e, t, n) {
                                              const r =
                                                  t[t.length - 1],
                                                i = t
                                                  .slice(
                                                    0,
                                                    t.length - 1,
                                                  )
                                                  .reverse()
                                                  .map(s =>
                                                    (function m3(e) {
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
                                                    NS(() =>
                                                      H(
                                                        s.guards.map(
                                                          c => {
                                                            const u =
                                                                va(
                                                                  s.node,
                                                                ) ??
                                                                n,
                                                              l = Ri(
                                                                c,
                                                                u,
                                                              );
                                                            return Mr(
                                                              (function D3(
                                                                e,
                                                              ) {
                                                                return (
                                                                  e &&
                                                                  ba(
                                                                    e.canActivateChild,
                                                                  )
                                                                );
                                                              })(l)
                                                                ? l.canActivateChild(
                                                                    r,
                                                                    e,
                                                                  )
                                                                : Gn(
                                                                    u,
                                                                    () =>
                                                                      l(
                                                                        r,
                                                                        e,
                                                                      ),
                                                                  ),
                                                            ).pipe(
                                                              lo(),
                                                            );
                                                          },
                                                        ),
                                                      ).pipe(xi()),
                                                    ),
                                                  );
                                              return H(i).pipe(xi());
                                            })(e, o.path, n),
                                            (function R3(e, t, n) {
                                              const r = t.routeConfig
                                                ? t.routeConfig
                                                    .canActivate
                                                : null;
                                              if (
                                                !r ||
                                                0 === r.length
                                              )
                                                return H(!0);
                                              const o = r.map(i =>
                                                NS(() => {
                                                  const s =
                                                      va(t) ?? n,
                                                    a = Ri(i, s);
                                                  return Mr(
                                                    (function E3(e) {
                                                      return (
                                                        e &&
                                                        ba(
                                                          e.canActivate,
                                                        )
                                                      );
                                                    })(a)
                                                      ? a.canActivate(
                                                          t,
                                                          e,
                                                        )
                                                      : Gn(s, () =>
                                                          a(t, e),
                                                        ),
                                                  ).pipe(lo());
                                                }),
                                              );
                                              return H(o).pipe(xi());
                                            })(e, o.route, n),
                                          ),
                                        ),
                                        lo(o => !0 !== o, !0),
                                      );
                                    })(r, i, e, t)
                                  : H(a),
                              ),
                              re(a => ({ ...n, guardsResult: a })),
                            );
                      });
                    })(this.environmentInjector, c =>
                      this.events.next(c),
                    ),
                    St(c => {
                      if (
                        ((i.guardsResult = c.guardsResult),
                        c.guardsResult &&
                          'boolean' != typeof c.guardsResult)
                      )
                        throw El(0, c.guardsResult);
                      const u = new qH(
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
                    uo(
                      c =>
                        !!c.guardsResult ||
                        (this.cancelNavigationTransition(
                          c,
                          '',
                          Qt.GuardRejected,
                        ),
                        !1),
                    ),
                    Bg(c => {
                      if (c.guards.canActivateChecks.length)
                        return H(c).pipe(
                          St(u => {
                            const l = new WH(
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
                          sr(u => {
                            let l = !1;
                            return H(u).pipe(
                              (function ez(e, t) {
                                return It(n => {
                                  const {
                                    targetSnapshot: r,
                                    guards: { canActivateChecks: o },
                                  } = n;
                                  if (!o.length) return H(n);
                                  const i = new Set(
                                      o.map(c => c.route),
                                    ),
                                    s = new Set();
                                  for (const c of i)
                                    if (!s.has(c))
                                      for (const u of yM(c)) s.add(u);
                                  let a = 0;
                                  return dt(s).pipe(
                                    al(c =>
                                      i.has(c)
                                        ? (function tz(e, t, n, r) {
                                            const o = e.routeConfig,
                                              i = e._resolve;
                                            return (
                                              void 0 !== o?.title &&
                                                !sM(o) &&
                                                (i[da] = o.title),
                                              (function nz(
                                                e,
                                                t,
                                                n,
                                                r,
                                              ) {
                                                const o = wg(e);
                                                if (0 === o.length)
                                                  return H({});
                                                const i = {};
                                                return dt(o).pipe(
                                                  It(s =>
                                                    (function rz(
                                                      e,
                                                      t,
                                                      n,
                                                      r,
                                                    ) {
                                                      const o =
                                                          va(t) ?? r,
                                                        i = Ri(e, o);
                                                      return Mr(
                                                        i.resolve
                                                          ? i.resolve(
                                                              t,
                                                              n,
                                                            )
                                                          : Gn(
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
                                                      lo(),
                                                      St(a => {
                                                        if (
                                                          a instanceof
                                                          Lg
                                                        )
                                                          throw El(
                                                            new ul(),
                                                            a,
                                                          );
                                                        i[s] = a;
                                                      }),
                                                    ),
                                                  ),
                                                  Dg(1),
                                                  (function gH(e) {
                                                    return re(
                                                      () => e,
                                                    );
                                                  })(i),
                                                  Ii(s =>
                                                    fM(s)
                                                      ? Ln
                                                      : il(s),
                                                  ),
                                                );
                                              })(i, e, t, r).pipe(
                                                re(
                                                  s => (
                                                    (e._resolvedData =
                                                      s),
                                                    (e.data = yl(
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
                                        : ((c.data = yl(
                                            c,
                                            c.parent,
                                            e,
                                          ).resolve),
                                          H(void 0)),
                                    ),
                                    St(() => a++),
                                    Dg(1),
                                    It(c =>
                                      a === s.size ? H(n) : Ln,
                                    ),
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              St({
                                next: () => (l = !0),
                                complete: () => {
                                  l ||
                                    this.cancelNavigationTransition(
                                      u,
                                      '',
                                      Qt.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          St(u => {
                            const l = new ZH(
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
                    Bg(c => {
                      const u = l => {
                        const d = [];
                        l.routeConfig?.loadComponent &&
                          !l.routeConfig._loadedComponent &&
                          d.push(
                            this.configLoader
                              .loadComponent(l.routeConfig)
                              .pipe(
                                St(f => {
                                  l.component = f;
                                }),
                                re(() => {}),
                              ),
                          );
                        for (const f of l.children) d.push(...u(f));
                        return d;
                      };
                      return TS(u(c.targetSnapshot.root)).pipe(
                        sl(null),
                        wi(1),
                      );
                    }),
                    Bg(() => this.afterPreactivation()),
                    sr(() => {
                      const {
                          currentSnapshot: c,
                          targetSnapshot: u,
                        } = i,
                        l = this.createViewTransition?.(
                          this.environmentInjector,
                          c.root,
                          u.root,
                        );
                      return l ? dt(l).pipe(re(() => i)) : H(i);
                    }),
                    re(c => {
                      const u = (function u3(e, t, n) {
                        const r = Ca(
                          e,
                          t._root,
                          n ? n._root : void 0,
                        );
                        return new nM(r, t);
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
                    St(() => {
                      this.events.next(new Ng());
                    }),
                    ((e, t, n, r) =>
                      re(
                        o => (
                          new p3(
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
                    wi(1),
                    St({
                      next: c => {
                        (s = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new Tr(
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
                    (function mH(e) {
                      return We((t, n) => {
                        En(e).subscribe(
                          Ne(n, () => n.complete(), Ba),
                        ),
                          !n.closed && t.subscribe(n);
                      });
                    })(
                      this.transitionAbortSubject.pipe(
                        St(c => {
                          throw c;
                        }),
                      ),
                    ),
                    bg(() => {
                      !s &&
                        !a &&
                        this.cancelNavigationTransition(
                          i,
                          '',
                          Qt.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === i.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    Ii(c => {
                      if (((a = !0), lM(c)))
                        this.events.next(
                          new go(
                            i.id,
                            this.urlSerializer.serialize(
                              i.extractedUrl,
                            ),
                            c.message,
                            c.cancellationCode,
                          ),
                        ),
                          (function f3(e) {
                            return lM(e) && po(e.url);
                          })(c)
                            ? this.events.next(
                                new vl(
                                  c.url,
                                  c.navigationBehaviorOptions,
                                ),
                              )
                            : i.resolve(!1);
                      else {
                        const u = new Ag(
                          i.id,
                          this.urlSerializer.serialize(
                            i.extractedUrl,
                          ),
                          c,
                          i.targetSnapshot ?? void 0,
                        );
                        try {
                          const l = Gn(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(u),
                          );
                          if (l instanceof Lg) {
                            const {
                              message: d,
                              cancellationCode: f,
                            } = El(0, l);
                            this.events.next(
                              new go(
                                i.id,
                                this.urlSerializer.serialize(
                                  i.extractedUrl,
                                ),
                                d,
                                f,
                              ),
                            ),
                              this.events.next(
                                new vl(
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
                      return Ln;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(n, r, o) {
            const i = new go(
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
      function lz(e) {
        return e !== ma;
      }
      let dz = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => _(hz),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class fz {
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
      let hz = (() => {
          class e extends fz {
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
        SM = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(pz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        pz = (() => {
          class e extends SM {
            constructor() {
              super(...arguments),
                (this.location = _(sa)),
                (this.urlSerializer = _(Mi)),
                (this.options = _(wa, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution ||
                  'replace'),
                (this.urlHandlingStrategy = _(Hg)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new fo()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = rM(null)),
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
              if (n instanceof gl)
                this.stateMemento = this.createStateMemento();
              else if (n instanceof Ti)
                this.rawUrlTree = r.initialUrl;
              else if (n instanceof JS) {
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
                n instanceof Ng
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
                  : n instanceof go &&
                    (n.code === Qt.GuardRejected ||
                      n.code === Qt.NoDataFromResolver)
                  ? this.restoreHistory(r)
                  : n instanceof Ag
                  ? this.restoreHistory(r, !0)
                  : n instanceof Tr &&
                    ((this.lastSuccessfulId = n.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(n, r) {
              const o =
                n instanceof fo ? this.urlSerializer.serialize(n) : n;
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
      var Ia = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = 'COMPLETE'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.REDIRECTING = 2)] = 'REDIRECTING'),
          e
        );
      })(Ia || {});
      function gz(e) {
        throw e;
      }
      const mz = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        vz = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let Ar = (() => {
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
                (this.console = _(_w)),
                (this.stateManager = _(SM)),
                (this.options = _(wa, { optional: !0 }) || {}),
                (this.pendingTasks = _(Wr)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = _(Ml)),
                (this.urlSerializer = _(Mi)),
                (this.location = _(sa)),
                (this.urlHandlingStrategy = _(Hg)),
                (this._events = new Tt()),
                (this.errorHandler = this.options.errorHandler || gz),
                (this.navigated = !1),
                (this.routeReuseStrategy = _(dz)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.config = _(Sl, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!_(Cl, {
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
                        r instanceof go &&
                          r.code !== Qt.Redirect &&
                          r.code !== Qt.SupersededByNewNavigation)
                      )
                        this.navigated = !0;
                      else if (r instanceof Tr) this.navigated = !0;
                      else if (r instanceof vl) {
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
                              lz(o.source),
                            ...s,
                          };
                        this.scheduleNavigation(a, ma, null, c, {
                          resolve: o.resolve,
                          reject: o.reject,
                          promise: o.promise,
                        });
                      }
                    (function _z(e) {
                      return !(e instanceof Ng || e instanceof vl);
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
                    ma,
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
              (this.config = n.map($g)), (this.navigated = !1);
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
                d = qS(
                  o ? o.snapshot : this.routerState.snapshot.root,
                );
              } catch {
                ('string' != typeof n[0] || '/' !== n[0][0]) &&
                  (n = []),
                  (d = this.currentUrlTree.root);
              }
              return WS(d, n, l, u ?? null);
            }
            navigateByUrl(n, r = { skipLocationChange: !1 }) {
              const o = po(n) ? n : this.parseUrl(n),
                i = this.urlHandlingStrategy.merge(
                  o,
                  this.rawUrlTree,
                );
              return this.scheduleNavigation(i, ma, null, r);
            }
            navigate(n, r = { skipLocationChange: !1 }) {
              return (
                (function yz(e) {
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
                  !0 === r ? { ...mz } : !1 === r ? { ...vz } : r),
                po(n))
              )
                return LS(this.currentUrlTree, n, o);
              const i = this.parseUrl(n);
              return LS(this.currentUrlTree, i, o);
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
                (function MM(e, t) {
                  e.events
                    .pipe(
                      uo(
                        n =>
                          n instanceof Tr ||
                          n instanceof go ||
                          n instanceof Ag ||
                          n instanceof Ti,
                      ),
                      re(n =>
                        n instanceof Tr || n instanceof Ti
                          ? Ia.COMPLETE
                          : n instanceof go &&
                            (n.code === Qt.Redirect ||
                              n.code === Qt.SupersededByNewNavigation)
                          ? Ia.REDIRECTING
                          : Ia.FAILED,
                      ),
                      uo(n => n !== Ia.REDIRECTING),
                      wi(1),
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
        Tl = (() => {
          class e {
            constructor(n, r, o, i, s, a) {
              (this.router = n),
                (this.route = r),
                (this.tabIndexAttribute = o),
                (this.renderer = i),
                (this.el = s),
                (this.locationStrategy = a),
                (this.href = null),
                (this.onChanges = new Tt()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const c = s.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === c || 'area' === c),
                this.isAnchorElement
                  ? (this.subscription = n.events.subscribe(u => {
                      u instanceof Tr && this.updateHref();
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
                    po(n) || Array.isArray(n) ? n : [n]),
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
                  : (function $_(e, t, n) {
                      return (function dO(e, t) {
                        return ('src' === t &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === t &&
                            ('base' === e || 'link' === e))
                          ? B_
                          : $f;
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
                : po(this.routerLinkInput)
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
                b(Ar),
                b(Ni),
                (function ss(e) {
                  return (function kR(e, t) {
                    if ('class' === t) return e.classes;
                    if ('style' === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                      const r = n.length;
                      let o = 0;
                      for (; o < r; ) {
                        const i = n[o];
                        if (Ov(i)) break;
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
                b(Jn),
                b(Gt),
                b(Ei),
              );
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (r, o) {
                1 & r &&
                  ne('click', function (s) {
                    return o.onClick(
                      s.button,
                      s.ctrlKey,
                      s.shiftKey,
                      s.altKey,
                      s.metaKey,
                    );
                  }),
                  2 & r && xn('target', o.target);
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
                  Ci,
                ],
                skipLocationChange: [
                  2,
                  'skipLocationChange',
                  'skipLocationChange',
                  Ci,
                ],
                replaceUrl: [2, 'replaceUrl', 'replaceUrl', Ci],
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [$E, Kt],
            }));
          }
          return e;
        })();
      const zg = new D('');
      let TM = (() => {
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
              n instanceof gl
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = n.navigationTrigger),
                  (this.restoredId = n.restoredState
                    ? n.restoredState.navigationId
                    : 0))
                : n instanceof Tr
                ? ((this.lastId = n.id),
                  this.scheduleScrollEvent(
                    n,
                    this.urlSerializer.parse(n.urlAfterRedirects)
                      .fragment,
                  ))
                : n instanceof Ti &&
                  n.code === ml.IgnoredSameUrlNavigation &&
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
              n instanceof eM &&
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
                    new eM(
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
            !(function hC() {
              throw new Error('invalid');
            })();
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function AM(e) {
        return e.routerState.root;
      }
      function Un(e, t) {
        return { ɵkind: e, ɵproviders: t };
      }
      function NM() {
        const e = _(He);
        return t => {
          const n = e.get(yn);
          if (t !== n.components[0]) return;
          const r = e.get(Ar),
            o = e.get(RM);
          1 === e.get(Gg) && r.initialNavigation(),
            e.get(xM, null, Y.Optional)?.setUpPreloading(),
            e.get(zg, null, Y.Optional)?.init(),
            r.resetRootComponentType(n.componentTypes[0]),
            o.closed || (o.next(), o.complete(), o.unsubscribe());
        };
      }
      const RM = new D('', { factory: () => new Tt() }),
        Gg = new D('', { providedIn: 'root', factory: () => 1 }),
        xM = new D('');
      let Nz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-main']],
              standalone: !0,
              features: [ie],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && ze(0, 'router-outlet');
              },
              dependencies: [_a],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        FM = (() => {
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
              return new (r || e)(b(Jn), b(Gt));
            });
            static #t = (this.ɵdir = V({ type: e }));
          }
          return e;
        })(),
        mo = (() => {
          class e extends FM {
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Xe(e)))(o || e);
              };
            })());
            static #t = (this.ɵdir = V({ type: e, features: [he] }));
          }
          return e;
        })();
      const Bn = new D(''),
        Oz = { provide: Bn, useExisting: ye(() => Al), multi: !0 },
        kz = new D('');
      let Al = (() => {
        class e extends FM {
          constructor(n, r, o) {
            super(n, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Fz() {
                  const e = Ir() ? Ir().getUserAgent() : '';
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
            return new (r || e)(b(Jn), b(Gt), b(kz, 8));
          });
          static #t = (this.ɵdir = V({
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
                ne('input', function (s) {
                  return o._handleInput(s.target.value);
                })('blur', function () {
                  return o.onTouched();
                })('compositionstart', function () {
                  return o._compositionStart();
                })('compositionend', function (s) {
                  return o._compositionEnd(s.target.value);
                });
            },
            features: [Te([Oz]), he],
          }));
        }
        return e;
      })();
      function Nr(e) {
        return (
          null == e ||
          (('string' == typeof e || Array.isArray(e)) &&
            0 === e.length)
        );
      }
      function PM(e) {
        return null != e && 'number' == typeof e.length;
      }
      const ft = new D(''),
        Rr = new D(''),
        Pz =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class on {
        static min(t) {
          return (function LM(e) {
            return t => {
              if (Nr(t.value) || Nr(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n < e
                ? { min: { min: e, actual: t.value } }
                : null;
            };
          })(t);
        }
        static max(t) {
          return (function VM(e) {
            return t => {
              if (Nr(t.value) || Nr(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n > e
                ? { max: { max: e, actual: t.value } }
                : null;
            };
          })(t);
        }
        static required(t) {
          return (function jM(e) {
            return Nr(e.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function UM(e) {
            return !0 === e.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function BM(e) {
            return Nr(e.value) || Pz.test(e.value)
              ? null
              : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function $M(e) {
            return t =>
              Nr(t.value) || !PM(t.value)
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
          return (function HM(e) {
            return t =>
              PM(t.value) && t.value.length > e
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
          return (function zM(e) {
            if (!e) return Nl;
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
                if (Nr(r.value)) return null;
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
          return YM(t);
        }
        static composeAsync(t) {
          return KM(t);
        }
      }
      function Nl(e) {
        return null;
      }
      function GM(e) {
        return null != e;
      }
      function qM(e) {
        return ea(e) ? dt(e) : e;
      }
      function WM(e) {
        let t = {};
        return (
          e.forEach(n => {
            t = null != n ? { ...t, ...n } : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function ZM(e, t) {
        return t.map(n => n(e));
      }
      function QM(e) {
        return e.map(t =>
          (function Lz(e) {
            return !e.validate;
          })(t)
            ? t
            : n => t.validate(n),
        );
      }
      function YM(e) {
        if (!e) return null;
        const t = e.filter(GM);
        return 0 == t.length
          ? null
          : function (n) {
              return WM(ZM(n, t));
            };
      }
      function qg(e) {
        return null != e ? YM(QM(e)) : null;
      }
      function KM(e) {
        if (!e) return null;
        const t = e.filter(GM);
        return 0 == t.length
          ? null
          : function (n) {
              return (function Rz(...e) {
                const t = yg(e),
                  { args: n, keys: r } = IS(e),
                  o = new Oe(i => {
                    const { length: s } = n;
                    if (!s) return void i.complete();
                    const a = new Array(s);
                    let c = s,
                      u = s;
                    for (let l = 0; l < s; l++) {
                      let d = !1;
                      En(n[l]).subscribe(
                        Ne(
                          i,
                          f => {
                            d || ((d = !0), u--), (a[l] = f);
                          },
                          () => c--,
                          void 0,
                          () => {
                            (!c || !d) &&
                              (u || i.next(r ? MS(r, a) : a),
                              i.complete());
                          },
                        ),
                      );
                    }
                  });
                return t ? o.pipe(SS(t)) : o;
              })(ZM(n, t).map(qM)).pipe(re(WM));
            };
      }
      function Wg(e) {
        return null != e ? KM(QM(e)) : null;
      }
      function XM(e, t) {
        return null === e
          ? [t]
          : Array.isArray(e)
          ? [...e, t]
          : [e, t];
      }
      function JM(e) {
        return e._rawValidators;
      }
      function e0(e) {
        return e._rawAsyncValidators;
      }
      function Zg(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function Rl(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      function t0(e, t) {
        const n = Zg(t);
        return (
          Zg(e).forEach(o => {
            Rl(n, o) || n.push(o);
          }),
          n
        );
      }
      function n0(e, t) {
        return Zg(t).filter(n => !Rl(e, n));
      }
      class r0 {
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
            (this._composedValidatorFn = qg(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = Wg(
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
      class Mt extends r0 {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class xr extends r0 {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class o0 {
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
      let s0 = (() => {
          class e extends o0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(b(xr, 2));
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [
                ['', 'formControlName', ''],
                ['', 'ngModel', ''],
                ['', 'formControl', ''],
              ],
              hostVars: 14,
              hostBindings: function (r, o) {
                2 & r &&
                  mu('ng-untouched', o.isUntouched)(
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
        a0 = (() => {
          class e extends o0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(b(Mt, 10));
            });
            static #t = (this.ɵdir = V({
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
                  mu('ng-untouched', o.isUntouched)(
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
      const Sa = 'VALID',
        Ol = 'INVALID',
        Fi = 'PENDING',
        Ma = 'DISABLED';
      class ki {}
      class u0 extends ki {
        constructor(t, n) {
          super(), (this.value = t), (this.source = n);
        }
      }
      class Kg extends ki {
        constructor(t, n) {
          super(), (this.pristine = t), (this.source = n);
        }
      }
      class Xg extends ki {
        constructor(t, n) {
          super(), (this.touched = t), (this.source = n);
        }
      }
      class Fl extends ki {
        constructor(t, n) {
          super(), (this.status = t), (this.source = n);
        }
      }
      class $z extends ki {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      class Hz extends ki {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      function Jg(e) {
        return (kl(e) ? e.validators : e) || null;
      }
      function em(e, t) {
        return (kl(t) ? t.asyncValidators : e) || null;
      }
      function kl(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function l0(e, t, n) {
        const r = e.controls;
        if (!(t ? Object.keys(r) : r).length) throw new E(1e3, '');
        if (!r[n]) throw new E(1001, '');
      }
      function d0(e, t, n) {
        e._forEachChild((r, o) => {
          if (void 0 === n[o]) throw new E(1002, '');
        });
      }
      class Pl {
        constructor(t, n) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = null),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this._status = ao(() => this.statusReactive())),
            (this.statusReactive = _r(void 0)),
            (this._pristine = ao(() => this.pristineReactive())),
            (this.pristineReactive = _r(!0)),
            (this._touched = ao(() => this.touchedReactive())),
            (this.touchedReactive = _r(!1)),
            (this._events = new Tt()),
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
          return Pn(this.statusReactive);
        }
        set status(t) {
          Pn(() => this.statusReactive.set(t));
        }
        get valid() {
          return this.status === Sa;
        }
        get invalid() {
          return this.status === Ol;
        }
        get pending() {
          return this.status == Fi;
        }
        get disabled() {
          return this.status === Ma;
        }
        get enabled() {
          return this.status !== Ma;
        }
        get pristine() {
          return Pn(this.pristineReactive);
        }
        set pristine(t) {
          Pn(() => this.pristineReactive.set(t));
        }
        get dirty() {
          return !this.pristine;
        }
        get touched() {
          return Pn(this.touchedReactive);
        }
        set touched(t) {
          Pn(() => this.touchedReactive.set(t));
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
          this.setValidators(t0(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(t0(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(n0(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(n0(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return Rl(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return Rl(this._rawAsyncValidators, t);
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
              this._events.next(new Xg(!0, r));
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
              this._events.next(new Xg(!1, r));
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
              this._events.next(new Kg(!1, r));
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
              this._events.next(new Kg(!0, r));
        }
        markAsPending(t = {}) {
          this.status = Fi;
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new Fl(this.status, n)),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.markAsPending({ ...t, sourceControl: n });
        }
        disable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = Ma),
            (this.errors = null),
            this._forEachChild(o => {
              o.disable({ ...t, onlySelf: !0 });
            }),
            this._updateValue();
          const r = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new u0(this.value, r)),
            this._events.next(new Fl(this.status, r)),
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
          (this.status = Sa),
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
              (this.status === Sa || this.status === Fi) &&
                this._runAsyncValidator(r, t.emitEvent);
          }
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new u0(this.value, n)),
            this._events.next(new Fl(this.status, n)),
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
          this.status = this._allControlsDisabled() ? Ma : Sa;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t, n) {
          if (this.asyncValidator) {
            (this.status = Fi),
              (this._hasOwnPendingAsyncValidator = {
                emitEvent: !1 !== n,
              });
            const r = qM(this.asyncValidator(this));
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
            (t || r) && this._events.next(new Fl(this.status, n)),
            this._parent &&
              this._parent._updateControlsErrors(t, n, r);
        }
        _initObservables() {
          (this.valueChanges = new K()),
            (this.statusChanges = new K());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Ma
            : this.errors
            ? Ol
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Fi)
            ? Fi
            : this._anyControlsHaveStatus(Ol)
            ? Ol
            : Sa;
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
            o && this._events.next(new Kg(this.pristine, n));
        }
        _updateTouched(t = {}, n) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new Xg(this.touched, n)),
            this._parent &&
              !t.onlySelf &&
              this._parent._updateTouched(t, n);
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          kl(t) &&
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
            (this._composedValidatorFn = (function zz(e) {
              return Array.isArray(e) ? qg(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(t) {
          (this._rawAsyncValidators = Array.isArray(t)
            ? t.slice()
            : t),
            (this._composedAsyncValidatorFn = (function Gz(e) {
              return Array.isArray(e) ? Wg(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Ta extends Pl {
        constructor(t, n, r) {
          super(Jg(n), em(r, n)),
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
          d0(this, 0, t),
            Object.keys(t).forEach(r => {
              l0(this, !0, r),
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
      class f0 extends Ta {}
      const Pi = new D('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => Ll,
        }),
        Ll = 'always';
      function Aa(e, t, n = Ll) {
        tm(e, t),
          t.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === n) &&
            t.valueAccessor.setDisabledState?.(e.disabled),
          (function Wz(e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && h0(e, t);
            });
          })(e, t),
          (function Qz(e, t) {
            const n = (r, o) => {
              t.valueAccessor.writeValue(r),
                o && t.viewToModelUpdate(r);
            };
            e.registerOnChange(n),
              t._registerOnDestroy(() => {
                e._unregisterOnChange(n);
              });
          })(e, t),
          (function Zz(e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && h0(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          (function qz(e, t) {
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
      function jl(e, t, n = !0) {
        const r = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(r),
          t.valueAccessor.registerOnTouched(r)),
          Bl(e, t),
          e &&
            (t._invokeOnDestroyCallbacks(),
            e._registerOnCollectionChange(() => {}));
      }
      function Ul(e, t) {
        e.forEach(n => {
          n.registerOnValidatorChange &&
            n.registerOnValidatorChange(t);
        });
      }
      function tm(e, t) {
        const n = JM(e);
        null !== t.validator
          ? e.setValidators(XM(n, t.validator))
          : 'function' == typeof n && e.setValidators([n]);
        const r = e0(e);
        null !== t.asyncValidator
          ? e.setAsyncValidators(XM(r, t.asyncValidator))
          : 'function' == typeof r && e.setAsyncValidators([r]);
        const o = () => e.updateValueAndValidity();
        Ul(t._rawValidators, o), Ul(t._rawAsyncValidators, o);
      }
      function Bl(e, t) {
        let n = !1;
        if (null !== e) {
          if (null !== t.validator) {
            const o = JM(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.validator);
              i.length !== o.length && ((n = !0), e.setValidators(i));
            }
          }
          if (null !== t.asyncValidator) {
            const o = e0(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.asyncValidator);
              i.length !== o.length &&
                ((n = !0), e.setAsyncValidators(i));
            }
          }
        }
        const r = () => {};
        return (
          Ul(t._rawValidators, r), Ul(t._rawAsyncValidators, r), n
        );
      }
      function h0(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function m0(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function v0(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const Or = class extends Pl {
        constructor(t = null, n, r) {
          super(Jg(n), em(r, n)),
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
            kl(n) &&
              (n.nonNullable || n.initialValueIsDefault) &&
              (this.defaultValue = v0(t) ? t.value : t);
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
          m0(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          m0(this._onDisabledChange, t);
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
          v0(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      };
      Promise.resolve();
      let D0 = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵdir = V({
            type: e,
            selectors: [
              ['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', ''],
            ],
            hostAttrs: ['novalidate', ''],
          }));
        }
        return e;
      })();
      const sm = new D(''),
        cG = { provide: xr, useExisting: ye(() => am) };
      let am = (() => {
        class e extends xr {
          set isDisabled(n) {}
          static #e = (this._ngModelWarningSentOnce = !1);
          constructor(n, r, o, i, s) {
            super(),
              (this._ngModelWarningConfig = i),
              (this.callSetDisabledState = s),
              (this.update = new K()),
              (this._ngModelWarningSent = !1),
              this._setValidators(n),
              this._setAsyncValidators(r),
              (this.valueAccessor = (function om(e, t) {
                if (!t) return null;
                let n, r, o;
                return (
                  Array.isArray(t),
                  t.forEach(i => {
                    i.constructor === Al
                      ? (n = i)
                      : (function Xz(e) {
                          return (
                            Object.getPrototypeOf(e.constructor) ===
                            mo
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
              r && jl(r, this, !1),
                Aa(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function rm(e, t) {
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
            this.form && jl(this.form, this, !1);
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
              b(ft, 10),
              b(Rr, 10),
              b(Bn, 10),
              b(sm, 8),
              b(Pi, 8),
            );
          });
          static #n = (this.ɵdir = V({
            type: e,
            selectors: [['', 'formControl', '']],
            inputs: {
              form: [0, 'formControl', 'form'],
              isDisabled: [0, 'disabled', 'isDisabled'],
              model: [0, 'ngModel', 'model'],
            },
            outputs: { update: 'ngModelChange' },
            exportAs: ['ngForm'],
            features: [Te([cG]), he, Kt],
          }));
        }
        return e;
      })();
      const uG = { provide: Mt, useExisting: ye(() => $l) };
      let $l = (() => {
          class e extends Mt {
            get submitted() {
              return Pn(this._submittedReactive);
            }
            set submitted(n) {
              this._submittedReactive.set(n);
            }
            constructor(n, r, o) {
              super(),
                (this.callSetDisabledState = o),
                (this._submitted = ao(() =>
                  this._submittedReactive(),
                )),
                (this._submittedReactive = _r(!1)),
                (this._onCollectionChange = () =>
                  this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new K()),
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
                (Bl(this.form, this),
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
                Aa(r, n, this.callSetDisabledState),
                r.updateValueAndValidity({ emitEvent: !1 }),
                this.directives.push(n),
                r
              );
            }
            getControl(n) {
              return this.form.get(n.path);
            }
            removeControl(n) {
              jl(n.control || null, n, !1),
                (function Jz(e, t) {
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
                (function g0(e, t) {
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
                this.form._events.next(new $z(this.control)),
                'dialog' === n?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(n = void 0) {
              this.form.reset(n),
                this._submittedReactive.set(!1),
                this.form._events.next(new Hz(this.form));
            }
            _updateDomValue() {
              this.directives.forEach(n => {
                const r = n.control,
                  o = this.form.get(n.path);
                r !== o &&
                  (jl(r || null, n),
                  (e => e instanceof Or)(o) &&
                    (Aa(o, n, this.callSetDisabledState),
                    (n.control = o)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(n) {
              const r = this.form.get(n.path);
              (function p0(e, t) {
                tm(e, t);
              })(r, n),
                r.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(n) {
              if (this.form) {
                const r = this.form.get(n.path);
                r &&
                  (function Yz(e, t) {
                    return Bl(e, t);
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
              tm(this.form, this),
                this._oldForm && Bl(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(b(ft, 10), b(Rr, 10), b(Pi, 8));
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (r, o) {
                1 & r &&
                  ne('submit', function (s) {
                    return o.onSubmit(s);
                  })('reset', function () {
                    return o.onReset();
                  });
              },
              inputs: { form: [0, 'formGroup', 'form'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [Te([uG]), he, Kt],
            }));
          }
          return e;
        })(),
        MG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = qi({ type: e }));
            static #n = (this.ɵinj = wo({}));
          }
          return e;
        })();
      class j0 extends Pl {
        constructor(t, n, r) {
          super(Jg(n), em(r, n)),
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
          d0(this, 0, t),
            t.forEach((r, o) => {
              l0(this, !1, o),
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
      function U0(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let TG = (() => {
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
                U0(r)
                  ? (i = r)
                  : null !== r &&
                    ((i.validators = r.validator),
                    (i.asyncValidators = r.asyncValidator)),
                new Ta(o, i)
              );
            }
            record(n, r = null) {
              const o = this._reduceControls(n);
              return new f0(o, r);
            }
            control(n, r, o) {
              let i = {};
              return this.useNonNullable
                ? (U0(r)
                    ? (i = r)
                    : ((i.validators = r), (i.asyncValidators = o)),
                  new Or(n, { ...i, nonNullable: !0 }))
                : new Or(n, r, o);
            }
            array(n, r, o) {
              const i = n.map(s => this._createControl(s));
              return new j0(i, r, o);
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
              return n instanceof Or || n instanceof Pl
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
        B0 = (() => {
          class e {
            static withConfig(n) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: sm,
                    useValue:
                      n.warnOnNgModelWithFormControl ?? 'always',
                  },
                  {
                    provide: Pi,
                    useValue: n.callSetDisabledState ?? Ll,
                  },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = qi({ type: e }));
            static #n = (this.ɵinj = wo({ imports: [MG] }));
          }
          return e;
        })();
      const AG = ['*'];
      let hm = (() => {
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
          static #t = (this.ɵcmp = oe({
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
            features: [ie],
            ngContentSelectors: AG,
            decls: 2,
            vars: 1,
            consts: [[1, 'flex', 3, 'ngStyle']],
            template: function (r, o) {
              1 & r && (Ws(), Z(0, 'div', 0), Zs(1), Q()),
                2 & r && N('ngStyle', o.buildStyles());
            },
            dependencies: [jI],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}',
            ],
          }));
        }
        return e;
      })();
      function NG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'p', 2),
            ne('click', function () {
              return ln(n), dn(ce().onClick());
            }),
            en(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce();
          j(),
            Dr('margin', n.margin),
            N('ngClass', n.textColor),
            j(),
            br(' ', n.value, ' ');
        }
      }
      function RG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'p', 3),
            ne('click', function () {
              return ln(n), dn(ce().onClick());
            }),
            en(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce();
          j(),
            Dr('margin', n.margin),
            N('ngClass', n.textColor),
            j(),
            br(' ', n.value, ' ');
        }
      }
      function xG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'h1', 4),
            ne('click', function () {
              return ln(n), dn(ce().onClick());
            }),
            en(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce();
          j(),
            Dr('margin', n.margin),
            N('ngClass', n.textColor),
            j(),
            br(' ', n.value, ' ');
        }
      }
      function OG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'h2', 5),
            ne('click', function () {
              return ln(n), dn(ce().onClick());
            }),
            en(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce();
          j(),
            Dr('margin', n.margin),
            N('ngClass', n.textColor),
            j(),
            br(' ', n.value, ' ');
        }
      }
      function FG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'h3', 6),
            ne('click', function () {
              return ln(n), dn(ce().onClick());
            }),
            en(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce();
          j(),
            Dr('margin', n.margin),
            N('ngClass', n.textColor),
            j(),
            br(' ', n.value, ' ');
        }
      }
      let yo = (() => {
        class e {
          constructor() {
            (this.type = 'paragraph'),
              (this.textColor = 'text__default'),
              (this.clickEvent = new K());
          }
          onClick() {
            this.clickEvent.emit();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = oe({
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
            features: [ie],
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
                (Ve(0, 0),
                er(1, NG, 3, 4, 'ng-container', 1)(
                  2,
                  RG,
                  3,
                  4,
                  'ng-container',
                  1,
                )(3, xG, 3, 4, 'ng-container', 1)(
                  4,
                  OG,
                  3,
                  4,
                  'ng-container',
                  1,
                )(5, FG, 3, 4, 'ng-container', 1),
                je()),
                2 & r &&
                  (N('ngSwitch', o.type),
                  j(),
                  N('ngSwitchCase', 'tiny'),
                  j(),
                  N('ngSwitchCase', 'paragraph'),
                  j(),
                  N('ngSwitchCase', 'header1'),
                  j(),
                  N('ngSwitchCase', 'header2'),
                  j(),
                  N('ngSwitchCase', 'header3'));
            },
            dependencies: [tg, xI, Ku, LI],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.text[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-style:normal;margin:0}.text__default[_ngcontent-%COMP%]{color:#454545}.text__primary[_ngcontent-%COMP%]{color:#f1f1f1}.text__secondary[_ngcontent-%COMP%]{color:#ccc}.text__tertiary[_ngcontent-%COMP%]{color:#7a7a7a}.text__accent[_ngcontent-%COMP%]{color:#4e31aa}.text__error[_ngcontent-%COMP%]{color:#e23636}.text__warning[_ngcontent-%COMP%]{color:#edb95e}.text__success[_ngcontent-%COMP%]{color:#448623}.text__info[_ngcontent-%COMP%]{color:#415058}.text__tiny[_ngcontent-%COMP%]{font-size:.9em}.text__paragraph[_ngcontent-%COMP%]{font-size:1em}.text__header1[_ngcontent-%COMP%]{font-size:2em}.text__header2[_ngcontent-%COMP%]{font-size:1.5em}.text__header3[_ngcontent-%COMP%]{font-size:1em}',
            ],
          }));
        }
        return e;
      })();
      const kG = ['self'];
      function PG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'lib-text', 3),
            ne('clickEvent', function () {
              return ln(n), dn(ce().onClick());
            }),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce();
          j(),
            N('value', n.control.label.value)(
              'textColor',
              n.textColor,
            );
        }
      }
      let LG = (() => {
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
          static #t = (this.ɵcmp = oe({
            type: e,
            selectors: [['lib-input']],
            viewQuery: function (r, o) {
              if (
                (1 & r &&
                  (function Sb(e, t, n) {
                    EE(e, t, n);
                  })(kG, 5),
                2 & r)
              ) {
                let i;
                (function dp(e) {
                  const t = v(),
                    n = G(),
                    r = rf();
                  mc(r + 1);
                  const o = Lh(n, r);
                  if (
                    e.dirty &&
                    (function aR(e) {
                      return !(4 & ~e[A]);
                    })(t) === !(2 & ~o.metadata.flags)
                  ) {
                    if (null === o.matches) e.reset([]);
                    else {
                      const i = wE(t, r);
                      e.reset(i, Yy), e.notifyOnChanges();
                    }
                    return !0;
                  }
                  return !1;
                })((i = fp())) && (o.self = i.first);
              }
            },
            inputs: { form: 'form', control: 'control' },
            standalone: !0,
            features: [ie],
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
                const i = kn();
                er(0, PG, 2, 2, 'ng-container', 1),
                  Z(1, 'input', 2, 0),
                  ne('focus', function () {
                    return ln(i), dn(o.onFocus());
                  })('blur', function () {
                    return ln(i), dn(o.onBlur());
                  }),
                  Q();
              }
              2 & r &&
                (N('ngIf', o.control.label.isVisible),
                j(),
                N('value', o.control.input.defaultValue)(
                  'type',
                  o.control.input.type,
                )('placeholder', o.control.input.placeholder)(
                  'formControl',
                  o.form,
                ));
            },
            dependencies: [tg, Yu, B0, Al, s0, am, yo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.input[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #ccc;color:#454545;font-size:1em;background-color:transparent;outline:none;width:100%}.input[_ngcontent-%COMP%]:focus{border:1px solid #4e31aa;color:#4e31aa}',
            ],
          }));
        }
        return e;
      })();
      const VG = ['*'];
      let $0 = (() => {
          class e {
            constructor() {
              (this.isSubmit = !1),
                (this.clickEvent = new K()),
                (this.mouseEnterEvent = new K()),
                (this.mouseLeaveEvent = new K());
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
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-button']],
              inputs: { control: 'control', isSubmit: 'isSubmit' },
              outputs: {
                clickEvent: 'clickEvent',
                mouseEnterEvent: 'mouseEnterEvent',
                mouseLeaveEvent: 'mouseLeaveEvent',
              },
              standalone: !0,
              features: [ie],
              ngContentSelectors: VG,
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
                  (Ws(),
                  Z(0, 'button', 0),
                  ne('click', function () {
                    return o.onClick();
                  })('mouseenter', function () {
                    return o.onMouseEnter();
                  })('mouseleave', function () {
                    return o.onMouseLeave();
                  }),
                  Zs(1),
                  Q()),
                  2 & r &&
                    N('type', o.isSubmit ? 'submit' : 'button');
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.button[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #4e31aa;background-color:#4e31aa;cursor:pointer;outline:none}.button[_ngcontent-%COMP%]:focus{outline-offset:3px;outline:1px solid #4e31aa}.button[_ngcontent-%COMP%]:active{transform:scale(.95)}',
              ],
            }));
          }
          return e;
        })(),
        jG = (() => {
          class e {
            constructor() {
              this.clickEvent = new K();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-button-text']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-button', 0),
                  ne('clickEvent', function () {
                    return o.onClickEvent();
                  }),
                  ze(1, 'lib-text', 1),
                  Q()),
                  2 & r &&
                    (N('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    j(),
                    N('value', o.control.label));
              },
              dependencies: [$0, yo],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        UG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-icon']],
              inputs: { src: 'src', alt: 'alt' },
              standalone: !0,
              features: [ie],
              decls: 1,
              vars: 2,
              consts: [[1, 'icon', 3, 'src', 'alt']],
              template: function (r, o) {
                1 & r && ze(0, 'img', 0),
                  2 & r && N('src', o.src, $f)('alt', o.alt);
              },
              styles: [
                '[_nghost-%COMP%]{display:contents}.icon[_ngcontent-%COMP%]{display:block;height:100%}',
              ],
            }));
          }
          return e;
        })(),
        BG = (() => {
          class e {
            constructor() {
              this.clickEvent = new K();
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
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-button-icon']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-button', 0),
                  ne('clickEvent', function () {
                    return o.onClickEvent();
                  })('mouseEnterEvent', function () {
                    return o.onMouseEnterEvent();
                  })('mouseLeaveEvent', function () {
                    return o.onMouseLeaveEvent();
                  }),
                  ze(1, 'lib-icon', 1),
                  Q()),
                  2 & r &&
                    (N('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    j(),
                    N('src', o.control.icon)('alt', o.control.alt));
              },
              dependencies: [$0, UG],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function $G(e, t) {
        if ((1 & e && (Ve(0), ze(1, 'lib-text', 4), je()), 2 & e)) {
          const n = ce();
          j(), N('value', n.control.tip);
        }
      }
      let HG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-link']],
              inputs: { form: 'form', control: 'control' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-flex', 0),
                  er(1, $G, 2, 1, 'ng-container', 1),
                  Z(2, 'a', 2),
                  ze(3, 'lib-text', 3),
                  Q()()),
                  2 & r &&
                    (j(),
                    N('ngIf', '' !== o.control.tip),
                    j(),
                    N('routerLink', o.control.path),
                    j(),
                    N('value', o.control.label));
              },
              dependencies: [Yu, yo, Tl, hm],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}',
              ],
            }));
          }
          return e;
        })(),
        zG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-error']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [ie],
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
                1 & r && (Z(0, 'div', 0), ze(1, 'lib-text', 1), Q()),
                  2 & r && (j(), N('value', o.value));
              },
              dependencies: [yo],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.error[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(226,54,54,.2509803922);background-color:#e2363640}',
              ],
            }));
          }
          return e;
        })();
      var Re = (function (e) {
        return (
          (e.input = 'input'),
          (e.buttonText = 'buttonText'),
          (e.buttonIcon = 'buttonIcon'),
          (e.link = 'link'),
          (e.text = 'text'),
          e
        );
      })(Re || {});
      let GG = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = oe({
            type: e,
            selectors: [['lib-success']],
            inputs: { value: 'value' },
            standalone: !0,
            features: [ie],
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
              1 & r && (Z(0, 'div', 0), ze(1, 'lib-text', 1), Q()),
                2 & r && (j(), N('value', o.value));
            },
            dependencies: [yo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.success[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(68,134,35,.2509803922);background-color:#44862340}',
            ],
          }));
        }
        return e;
      })();
      function qG(e, t) {
        if ((1 & e && (Ve(0), ze(1, 'lib-input', 6), je()), 2 & e)) {
          const n = ce().$implicit,
            r = ce();
          j(), N('form', r.getFormControl(n.id))('control', n);
        }
      }
      function WG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'lib-button-text', 7),
            ne('clickEvent', function () {
              return ln(n), dn(ce(2).onSubmit());
            }),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce().$implicit,
            r = ce();
          j(), N('form', r.getFormControl(n.id))('control', n);
        }
      }
      function ZG(e, t) {
        if (1 & e) {
          const n = kn();
          Ve(0),
            Z(1, 'lib-button-icon', 7),
            ne('clickEvent', function () {
              return ln(n), dn(ce(2).onSubmit());
            }),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ce().$implicit,
            r = ce();
          j(), N('form', r.getFormControl(n.id))('control', n);
        }
      }
      function QG(e, t) {
        if ((1 & e && (Ve(0), ze(1, 'lib-link', 6), je()), 2 & e)) {
          const n = ce().$implicit,
            r = ce();
          j(), N('form', r.getFormControl(n.id))('control', n);
        }
      }
      function YG(e, t) {
        if ((1 & e && (Ve(0), ze(1, 'lib-text', 8), je()), 2 & e)) {
          const n = ce().$implicit;
          j(), N('value', n.value)('margin', n.margin);
        }
      }
      function KG(e, t) {
        if ((1 & e && (Ve(0), ze(1, 'lib-error', 9), je()), 2 & e)) {
          const n = ce(2).$implicit,
            r = ce();
          j(), N('value', r.getFormControlError(n.id));
        }
      }
      function XG(e, t) {
        if (
          (1 & e && (Ve(0), er(1, KG, 2, 1, 'ng-container', 4), je()),
          2 & e)
        ) {
          const n = ce().$implicit,
            r = ce();
          j(), N('ngIf', r.formControlInvalid(n.id));
        }
      }
      function JG(e, t) {
        if (
          (1 & e &&
            (Ve(0),
            Z(1, 'lib-flex', 5),
            er(2, qG, 2, 2, 'ng-container', 4)(
              3,
              WG,
              2,
              2,
              'ng-container',
              4,
            )(4, ZG, 2, 2, 'ng-container', 4)(
              5,
              QG,
              2,
              2,
              'ng-container',
              4,
            )(6, YG, 2, 2, 'ng-container', 4)(
              7,
              XG,
              2,
              1,
              'ng-container',
              4,
            ),
            Q(),
            je()),
          2 & e)
        ) {
          const n = t.$implicit;
          j(),
            N('alignItems', n.alignItems),
            j(),
            N('ngIf', 'input' === n.kind),
            j(),
            N('ngIf', 'buttonText' === n.kind),
            j(),
            N('ngIf', 'buttonIcon' === n.kind),
            j(),
            N('ngIf', 'link' === n.kind),
            j(),
            N('ngIf', 'text' === n.kind),
            j(),
            N('ngIf', n.validation.isVisible);
        }
      }
      function e8(e, t) {
        if (
          (1 & e && (Ve(0), ze(1, 'lib-success', 9), je()), 2 & e)
        ) {
          const n = ce();
          j(), N('value', n.formSuccessMessage);
        }
      }
      function t8(e, t) {
        if ((1 & e && (Ve(0), ze(1, 'lib-error', 9), je()), 2 & e)) {
          const n = ce();
          j(), N('value', n.formErrorMessage);
        }
      }
      let Hl = (() => {
          class e {
            constructor(n) {
              (this.fb = n),
                (this.flexDirection = 'column'),
                (this.resetIfError = !1),
                (this.formErrorMessage =
                  'The form was not completed correctly.'),
                (this.formSuccessMessage =
                  'The form was completed correctly.'),
                (this.baseFormEvent = new K()),
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
                case Re.input:
                  return new Or(
                    n.input.defaultValue,
                    n.validation.validators,
                  );
                case Re.buttonText:
                case Re.buttonIcon:
                case Re.link:
                  return new Or(!1, n.validation.validators);
                case Re.text:
                  return new Or('', n.validation.validators);
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
              return new (r || e)(b(TG));
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-base-form']],
              inputs: {
                baseForm: 'baseForm',
                flexDirection: 'flexDirection',
                resetIfError: 'resetIfError',
                formErrorMessage: 'formErrorMessage',
                formSuccessMessage: 'formSuccessMessage',
              },
              outputs: { baseFormEvent: 'baseFormEvent' },
              standalone: !0,
              features: [ie],
              decls: 6,
              vars: 6,
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
                  (Z(0, 'form', 0),
                  ne('ngSubmit', function () {
                    return o.onSubmit();
                  }),
                  Z(1, 'lib-flex', 1)(2, 'lib-flex', 2),
                  er(3, JG, 8, 7, 'ng-container', 3),
                  Q(),
                  er(4, e8, 2, 1, 'ng-container', 4)(
                    5,
                    t8,
                    2,
                    1,
                    'ng-container',
                    4,
                  ),
                  Q()()),
                  2 & r &&
                    (N('formGroup', o.formGroup),
                    j(),
                    N('flexDirection', o.flexDirection),
                    j(),
                    N('flexDirection', o.flexDirection),
                    j(),
                    N('ngForOf', o.baseForm.controls),
                    j(),
                    N('ngIf', o.formGroupValid),
                    j(),
                    N('ngIf', o.formGroupInvalid));
              },
              dependencies: [
                tg,
                FI,
                Yu,
                B0,
                D0,
                a0,
                $l,
                hm,
                LG,
                jG,
                BG,
                HG,
                zG,
                GG,
                yo,
              ],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        n8 = (() => {
          class e {
            constructor() {
              (this.event = new K()),
                (this.loginForm = {
                  controls: [
                    {
                      kind: Re.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required, on.email],
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
                      kind: Re.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required],
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
                      kind: Re.link,
                      id: 'forgotPassword',
                      alignItems: 'flex-end',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Forgot password?',
                      path: '/forgot-password',
                      tip: '',
                    },
                    {
                      kind: Re.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Log in',
                      isSubmit: !0,
                    },
                    {
                      kind: Re.link,
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
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-login-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-base-form', 0),
                  ne('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  Q()),
                  2 & r &&
                    N('baseForm', o.loginForm)('resetIfError', !0);
              },
              dependencies: [Hl],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        r8 = (() => {
          class e {
            constructor() {
              (this.event = new K()),
                (this.forgotPasswordForm = {
                  controls: [
                    {
                      kind: Re.text,
                      id: 'tip',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !0 },
                      value:
                        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
                      margin: '1rem 0',
                    },
                    {
                      kind: Re.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required, on.email],
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
                      kind: Re.buttonText,
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
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-forgot-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-base-form', 0),
                  ne('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  Q()),
                  2 & r &&
                    N('baseForm', o.forgotPasswordForm)(
                      'resetIfError',
                      !1,
                    );
              },
              dependencies: [Hl],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        o8 = (() => {
          class e {
            constructor() {
              (this.event = new K()),
                (this.registrationForm = {
                  controls: [
                    {
                      kind: Re.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required, on.email],
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
                      kind: Re.input,
                      id: 'name',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required],
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
                      kind: Re.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required],
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
                      kind: Re.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required],
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
                      kind: Re.buttonText,
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
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-registration-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-base-form', 0),
                  ne('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  Q()),
                  2 & r &&
                    N('baseForm', o.registrationForm)(
                      'resetIfError',
                      !0,
                    );
              },
              dependencies: [Hl],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        i8 = (() => {
          class e {
            constructor() {
              (this.event = new K()),
                (this.changePasswordForm = {
                  controls: [
                    {
                      kind: Re.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required],
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
                      kind: Re.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: {
                        validators: [on.required],
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
                      kind: Re.buttonText,
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
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-change-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
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
                  (Z(0, 'lib-base-form', 0),
                  ne('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  Q()),
                  2 & r &&
                    N('baseForm', o.changePasswordForm)(
                      'resetIfError',
                      !0,
                    );
              },
              dependencies: [Hl],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const s8 = ['*'];
      let a8 = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = oe({
            type: e,
            selectors: [['lib-card']],
            inputs: { width: 'width' },
            standalone: !0,
            features: [ie],
            ngContentSelectors: s8,
            decls: 2,
            vars: 2,
            consts: [[1, 'card']],
            template: function (r, o) {
              1 & r && (Ws(), Z(0, 'div', 0), Zs(1), Q()),
                2 & r && Dr('width', o.width);
            },
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}[_nghost-%COMP%]{display:contents}.card[_ngcontent-%COMP%]{padding:2rem;border-radius:.25rem;background-color:#f1f1f1}',
            ],
          }));
        }
        return e;
      })();
      const c8 = ['*'];
      let zl = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = oe({
            type: e,
            selectors: [['lib-auth']],
            standalone: !0,
            features: [ie],
            ngContentSelectors: c8,
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
                (Ws(),
                Z(0, 'div', 0)(1, 'lib-flex', 1)(2, 'lib-card', 2)(
                  3,
                  'lib-flex',
                  3,
                )(4, 'lib-flex', 4),
                ze(5, 'lib-text', 5),
                Q(),
                Zs(6),
                Q()()()());
            },
            dependencies: [hm, yo, a8],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.auth[_ngcontent-%COMP%]{padding:1rem}',
            ],
          }));
        }
        return e;
      })();
      rt(206);
      let m8 = (() => {
          class e {
            constructor() {
              this.event = new K();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-login']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (Z(0, 'lib-auth')(1, 'lib-login-form', 0),
                  ne('event', function (s) {
                    return o.onEvent(s);
                  }),
                  Q()());
              },
              dependencies: [zl, n8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        v8 = (() => {
          class e {
            constructor() {
              this.event = new K();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-forgot-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (Z(0, 'lib-auth')(1, 'lib-forgot-password-form', 0),
                  ne('event', function (s) {
                    return o.onEvent(s);
                  }),
                  Q()());
              },
              dependencies: [zl, r8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        y8 = (() => {
          class e {
            constructor() {
              this.event = new K();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-registration']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (Z(0, 'lib-auth')(1, 'lib-registration-form', 0),
                  ne('event', function (s) {
                    return o.onEvent(s);
                  }),
                  Q()());
              },
              dependencies: [zl, o8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        _8 = (() => {
          class e {
            constructor() {
              this.event = new K();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-change-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (Z(0, 'lib-auth')(1, 'lib-change-password-form', 0),
                  ne('event', function (s) {
                    return o.onEvent(s);
                  }),
                  Q()());
              },
              dependencies: [zl, i8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        C8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-dashboard']],
              standalone: !0,
              features: [ie],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && ze(0, 'router-outlet');
              },
              dependencies: [_a],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        E8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-courses']],
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Z(0, 'p'), en(1, 'courses'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        D8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-statistics']],
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Z(0, 'p'), en(1, 'statistics'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        b8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-course']],
              standalone: !0,
              features: [ie],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && ze(0, 'router-outlet');
              },
              dependencies: [_a],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        w8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-roadmap']],
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Z(0, 'p'), en(1, 'roadmap'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        I8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-account']],
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Z(0, 'p'), en(1, 'account'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        S8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = oe({
              type: e,
              selectors: [['lib-http-404']],
              standalone: !0,
              features: [ie],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Z(0, 'p'), en(1, 'http-404'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const x8 = {
        providers: [
          (function wz(e, ...t) {
            return To([
              { provide: Sl, multi: !0, useValue: e },
              [],
              { provide: Ni, useFactory: AM, deps: [Ar] },
              { provide: Mu, multi: !0, useFactory: NM },
              t.map(n => n.ɵproviders),
            ]);
          })(
            [
              { path: '', redirectTo: '/login', pathMatch: 'full' },
              { path: 'login', component: m8 },
              { path: 'registration', component: y8 },
              { path: 'forgot-password', component: v8 },
              { path: 'change-password', component: _8 },
              {
                path: 'dashboard',
                component: C8,
                children: [
                  {
                    path: '',
                    redirectTo: 'dashboard/statistics',
                    pathMatch: 'full',
                  },
                  { path: 'statistics', component: D8 },
                  { path: 'courses', component: E8 },
                  { path: 'account', component: I8 },
                  {
                    path: 'course/:courseId',
                    component: b8,
                    children: [
                      { path: 'roadmap', component: w8 },
                      {
                        path: 'quiz',
                        component: (() => {
                          class e {
                            static #e = (this.ɵfac = function (r) {
                              return new (r || e)();
                            });
                            static #t = (this.ɵcmp = oe({
                              type: e,
                              selectors: [['lib-quiz']],
                              standalone: !0,
                              features: [ie],
                              decls: 2,
                              vars: 0,
                              template: function (r, o) {
                                1 & r &&
                                  (Z(0, 'p'), en(1, 'quiz'), Q());
                              },
                              encapsulation: 2,
                            }));
                          }
                          return e;
                        })(),
                      },
                    ],
                  },
                ],
              },
              { path: '**', component: S8 },
            ],
            (function Az() {
              return Un(6, [{ provide: Ei, useClass: Zj }]);
            })(),
            (function Sz(e = {}) {
              return Un(4, [
                {
                  provide: zg,
                  useFactory: () => {
                    const n = _(dB),
                      r = _(ae),
                      o = _(Ml),
                      i = _(Mi);
                    return new TM(i, o, n, r, e);
                  },
                },
              ]);
            })({
              anchorScrolling: 'enabled',
              scrollPositionRestoration: 'enabled',
            }),
          ),
        ],
      };
      class O8 extends at {
        constructor(t, n) {
          super();
        }
        schedule(t, n = 0) {
          return this;
        }
      }
      const Gl = {
        setInterval(e, t, ...n) {
          const { delegate: r } = Gl;
          return r?.setInterval
            ? r.setInterval(e, t, ...n)
            : setInterval(e, t, ...n);
        },
        clearInterval(e) {
          const { delegate: t } = Gl;
          return (t?.clearInterval || clearInterval)(e);
        },
        delegate: void 0,
      };
      class F8 extends O8 {
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
          return Gl.setInterval(t.flush.bind(t, this), r);
        }
        recycleAsyncId(t, n, r = 0) {
          if (null != r && this.delay === r && !1 === this.pending)
            return n;
          null != n && Gl.clearInterval(n);
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
              ja(r, this),
              null != t &&
                (this.id = this.recycleAsyncId(n, t, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
      const H0 = {
        now: () => (H0.delegate || Date).now(),
        delegate: void 0,
      };
      class Ra {
        constructor(t, n = Ra.now) {
          (this.schedulerActionCtor = t), (this.now = n);
        }
        schedule(t, n = 0, r) {
          return new this.schedulerActionCtor(this, t).schedule(r, n);
        }
      }
      Ra.now = H0.now;
      class P8 extends Ra {
        constructor(t, n = Ra.now) {
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
      const V8 = new (class L8 extends P8 {})(
        class k8 extends F8 {
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
      function $8(e, t) {
        return e === t;
      }
      function G0(e, t) {
        const n = !t?.manualCleanup;
        n &&
          !t?.injector &&
          (function Wi(e) {
            if (!qv()) throw new E(-203, !1);
          })();
        const r = n ? t?.injector?.get(qr) ?? _(qr) : null,
          o = (function G8(e = Object.is) {
            return (t, n) =>
              1 === t.kind && 1 === n.kind && e(t.value, n.value);
          })(t?.equal);
        let i;
        i = _r(
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
          ao(
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
      const xa = {};
      function pm(e, t) {
        return Object.defineProperty(t, 'type', {
          value: e,
          writable: !1,
        });
      }
      const W0 = '@ngrx/store/init';
      let Li = (() => {
        class e extends mt {
          constructor() {
            super({ type: W0 });
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
      const Y8 = [Li],
        Z0 = new D('@ngrx/store Internal Root Guard'),
        Q0 = new D('@ngrx/store Internal Initial State'),
        mm = new D('@ngrx/store Initial State'),
        Y0 = new D('@ngrx/store Reducer Factory'),
        K0 = new D('@ngrx/store Internal Reducer Factory Provider'),
        X0 = new D('@ngrx/store Initial Reducers'),
        vm = new D('@ngrx/store Internal Initial Reducers'),
        eT =
          (new D('@ngrx/store Store Features'),
          new D('@ngrx/store Internal Store Reducers')),
        iT =
          (new D('@ngrx/store Internal Feature Reducers'),
          new D('@ngrx/store Internal Feature Configs'),
          new D('@ngrx/store Internal Store Features'),
          new D('@ngrx/store Internal Feature Reducers Token'),
          new D('@ngrx/store Feature Reducers'),
          new D('@ngrx/store User Provided Meta Reducers')),
        ql = new D('@ngrx/store Meta Reducers'),
        sT = new D('@ngrx/store Internal Resolved Meta Reducers'),
        aT = new D('@ngrx/store User Runtime Checks Config'),
        cT = new D('@ngrx/store Internal User Runtime Checks Config'),
        Oa = new D('@ngrx/store Internal Runtime Checks'),
        _m = new D('@ngrx/store Check if Action types are unique'),
        Cm = new D('@ngrx/store Root Store Provider');
      function Em(e, t = {}) {
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
      function lT(...e) {
        return function (t) {
          if (0 === e.length) return t;
          const n = e[e.length - 1];
          return e.slice(0, -1).reduceRight((o, i) => i(o), n(t));
        };
      }
      function dT(e, t) {
        return (
          Array.isArray(t) &&
            t.length > 0 &&
            (e = lT.apply(null, [...t, e])),
          (n, r) => {
            const o = e(n);
            return (i, s) => o((i = void 0 === i ? r : i), s);
          }
        );
      }
      new D('@ngrx/store Feature State Provider');
      class Dm extends Oe {}
      class fT extends Li {}
      let Wl = (() => {
        class e extends mt {
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
                    ? (function X8(e) {
                        const t =
                          Array.isArray(e) && e.length > 0
                            ? lT(...e)
                            : n => n;
                        return (n, r) => (
                          (n = t(n)),
                          (o, i) => n((o = void 0 === o ? r : o), i)
                        );
                      })(a)(i, c)
                    : dT(s, a)(i, c);
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
              this.reducers = (function K8(e, t) {
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
            return new (r || e)(x(fT), x(mm), x(X0), x(Y0));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const e4 = [
        Wl,
        { provide: Dm, useExisting: Wl },
        { provide: fT, useExisting: Li },
      ];
      let bm = (() => {
        class e extends Tt {
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
      const t4 = [bm];
      class hT extends Oe {}
      let pT = (() => {
        class e extends mt {
          static #e = (this.INIT = W0);
          constructor(n, r, o, i) {
            super(i);
            const a = n.pipe(mg(V8)).pipe(
                (function j8(...e) {
                  const t = yg(e);
                  return We((n, r) => {
                    const o = e.length,
                      i = new Array(o);
                    let s = e.map(() => !1),
                      a = !1;
                    for (let c = 0; c < o; c++)
                      En(e[c]).subscribe(
                        Ne(
                          r,
                          u => {
                            (i[c] = u),
                              !a &&
                                !s[c] &&
                                ((s[c] = !0),
                                (a = s.every($n)) && (s = null));
                          },
                          Ba,
                        ),
                      );
                    n.subscribe(
                      Ne(r, c => {
                        if (a) {
                          const u = [c, ...i];
                          r.next(t ? t(...u) : u);
                        }
                      }),
                    );
                  });
                })(r),
              ),
              u = a.pipe(OS(n4, { state: i }));
            (this.stateSubscription = u.subscribe(
              ({ state: l, action: d }) => {
                this.next(l), o.next(d);
              },
            )),
              (this.state = G0(this, {
                manualCleanup: !0,
                requireSync: !0,
              }));
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
          static #t = (this.ɵfac = function (r) {
            return new (r || e)(x(Li), x(Dm), x(bm), x(mm));
          });
          static #n = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function n4(e = { state: void 0 }, [t, n]) {
        const { state: r } = e;
        return { state: n(r, t), action: t };
      }
      const r4 = [pT, { provide: hT, useExisting: pT }];
      let wm = (() => {
        class e extends Oe {
          constructor(n, r, o) {
            super(),
              (this.actionsObserver = r),
              (this.reducerManager = o),
              (this.source = n),
              (this.state = n.state);
          }
          select(n, ...r) {
            return i4.call(null, n, ...r)(this);
          }
          selectSignal(n, r) {
            return ao(() => n(this.state()), r);
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
            return new (r || e)(x(hT), x(Li), x(Wl));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const o4 = [wm];
      function i4(e, t, ...n) {
        return function (o) {
          let i;
          if ('string' == typeof e) {
            const s = [t, ...n].filter(Boolean);
            i = o.pipe(
              (function U8(...e) {
                const t = e.length;
                if (0 === t)
                  throw new Error(
                    'list of properties cannot be empty.',
                  );
                return re(n => {
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
            i = o.pipe(re(s => e(s, t)));
          }
          return i.pipe(
            (function B8(e, t = $n) {
              return (
                (e = e ?? $8),
                We((n, r) => {
                  let o,
                    i = !0;
                  n.subscribe(
                    Ne(r, s => {
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
      const Im =
        'https://ngrx.io/guide/store/configuration/runtime-checks';
      function gT(e) {
        return void 0 === e;
      }
      function mT(e) {
        return null === e;
      }
      function vT(e) {
        return Array.isArray(e);
      }
      function yT(e) {
        return 'object' == typeof e && null !== e;
      }
      function Sm(e) {
        return 'function' == typeof e;
      }
      function E4(e) {
        return e instanceof D ? _(e) : e;
      }
      function DT(e) {
        return 'function' == typeof e ? e() : e;
      }
      function w4(e, t) {
        return e.concat(t);
      }
      function I4() {
        if (_(wm, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function Am(e) {
        Object.freeze(e);
        const t = Sm(e);
        return (
          Object.getOwnPropertyNames(e).forEach(n => {
            if (
              !n.startsWith('\u0275') &&
              (function d4(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              })(e, n) &&
              (!t ||
                ('caller' !== n &&
                  'callee' !== n &&
                  'arguments' !== n))
            ) {
              const r = e[n];
              (yT(r) || Sm(r)) && !Object.isFrozen(r) && Am(r);
            }
          }),
          e
        );
      }
      function Nm(e, t = []) {
        return (gT(e) || mT(e)) && 0 === t.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((r, o) => {
              if (r) return r;
              const i = e[o];
              return (function l4(e) {
                return Sm(e) && e.hasOwnProperty('\u0275cmp');
              })(i)
                ? r
                : !(
                    gT(i) ||
                    mT(i) ||
                    (function c4(e) {
                      return 'number' == typeof e;
                    })(i) ||
                    (function a4(e) {
                      return 'boolean' == typeof e;
                    })(i) ||
                    (function s4(e) {
                      return 'string' == typeof e;
                    })(i) ||
                    vT(i)
                  ) &&
                    ((function _T(e) {
                      if (
                        !(function u4(e) {
                          return yT(e) && !vT(e);
                        })(e)
                      )
                        return !1;
                      const t = Object.getPrototypeOf(e);
                      return t === Object.prototype || null === t;
                    })(i)
                      ? Nm(i, [...t, o])
                      : { path: [...t, o], value: i });
            }, !1);
      }
      function bT(e, t) {
        if (!1 === e) return;
        const n = e.path.join('.'),
          r = new Error(
            `Detected unserializable ${t} at "${n}". ${Im}#strict${t}serializability`,
          );
        throw ((r.value = e.value), (r.unserializablePath = n), r);
      }
      function A4(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function N4({
        strictActionSerializability: e,
        strictStateSerializability: t,
      }) {
        return n =>
          e || t
            ? (function M4(e, t) {
                return function (n, r) {
                  t.action(r) && bT(Nm(r), 'action');
                  const o = e(n, r);
                  return t.state() && bT(Nm(o), 'state'), o;
                };
              })(n, { action: r => e && !Rm(r), state: () => t })
            : n;
      }
      function R4({
        strictActionImmutability: e,
        strictStateImmutability: t,
      }) {
        return n =>
          e || t
            ? (function S4(e, t) {
                return function (n, r) {
                  const o = t.action(r) ? Am(r) : r,
                    i = e(n, o);
                  return t.state() ? Am(i) : i;
                };
              })(n, { action: r => e && !Rm(r), state: () => t })
            : n;
      }
      function Rm(e) {
        return e.type.startsWith('@ngrx');
      }
      function x4({ strictActionWithinNgZone: e }) {
        return t =>
          e
            ? (function T4(e, t) {
                return function (n, r) {
                  if (t.action(r) && !ae.isInAngularZone())
                    throw new Error(
                      `Action '${r.type}' running outside NgZone. ${Im}#strictactionwithinngzone`,
                    );
                  return e(n, r);
                };
              })(t, { action: n => e && !Rm(n) })
            : t;
      }
      function O4(e) {
        return [
          { provide: cT, useValue: e },
          { provide: aT, useFactory: F4, deps: [cT] },
          { provide: Oa, deps: [aT], useFactory: A4 },
          { provide: ql, multi: !0, deps: [Oa], useFactory: R4 },
          { provide: ql, multi: !0, deps: [Oa], useFactory: N4 },
          { provide: ql, multi: !0, deps: [Oa], useFactory: x4 },
        ];
      }
      function F4(e) {
        return e;
      }
      function k4(e) {
        if (!e.strictActionTypeUniqueness) return;
        const t = Object.entries(xa)
          .filter(([, n]) => n > 1)
          .map(([n]) => n);
        if (t.length)
          throw new Error(
            `Action types are registered more than once, ${t
              .map(n => `"${n}"`)
              .join(', ')}. ${Im}#strictactiontypeuniqueness`,
          );
      }
      function P4(e = {}, t = {}) {
        return [
          { provide: Z0, useFactory: I4 },
          { provide: Q0, useValue: t.initialState },
          { provide: mm, useFactory: DT, deps: [Q0] },
          { provide: vm, useValue: e },
          { provide: eT, useExisting: e instanceof D ? e : vm },
          { provide: X0, deps: [vm, [new Tv(eT)]], useFactory: E4 },
          {
            provide: iT,
            useValue: t.metaReducers ? t.metaReducers : [],
          },
          { provide: sT, deps: [ql, iT], useFactory: w4 },
          {
            provide: K0,
            useValue: t.reducerFactory ? t.reducerFactory : Em,
          },
          { provide: Y0, deps: [K0, sT], useFactory: dT },
          Y8,
          e4,
          t4,
          r4,
          o4,
          O4(t.runtimeChecks),
          [{ provide: _m, multi: !0, deps: [Oa], useFactory: k4 }],
        ];
      }
      const V4 = [
          {
            provide: Cm,
            useFactory: function L4() {
              _(Li),
                _(Dm),
                _(bm),
                _(wm),
                _(Z0, { optional: !0 }),
                _(_m, { optional: !0 });
            },
          },
          { provide: $t, multi: !0, useFactory: () => () => _(Cm) },
        ],
        W4 = {
          providers: [
            (function j4(e, t) {
              return To([...P4(e, t), V4]);
            })({
              grammar: (function z4(e, ...t) {
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
                (function H4(...e) {
                  return {
                    reducer: e.pop(),
                    types: e.map(r => r.type),
                  };
                })(
                  (function q0(e, t) {
                    if (
                      ((xa[e] = (xa[e] || 0) + 1),
                      'function' == typeof t)
                    )
                      return pm(e, (...r) => ({
                        ...t(...r),
                        type: e,
                      }));
                    switch (t ? t._as : 'empty') {
                      case 'empty':
                        return pm(e, () => ({ type: e }));
                      case 'props':
                        return pm(e, r => ({ ...r, type: e }));
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
      (function a$(e, t) {
        return vj({ rootComponent: e, ...sS(t) });
      })(Nz, { providers: [...x8.providers, ...W4.providers] }).catch(
        e => {
          throw new Error(e);
        },
      );
    },
    206: (Lt, ar, rt) => {
      'use strict';
      const Vt = rt(739),
        pe = rt(200),
        ht = rt(897);
      Lt.exports = function pt(Ie, gt) {
        switch (pe(Ie)) {
          case 'object':
            return (function xe(Ie, gt) {
              if ('function' == typeof gt) return gt(Ie);
              if (gt || ht(Ie)) {
                const I = new Ie.constructor();
                for (let q in Ie) I[q] = pt(Ie[q], gt);
                return I;
              }
              return Ie;
            })(Ie, gt);
          case 'array':
            return (function F(Ie, gt) {
              const I = new Ie.constructor(Ie.length);
              for (let q = 0; q < Ie.length; q++)
                I[q] = pt(Ie[q], gt);
              return I;
            })(Ie, gt);
          default:
            return Vt(Ie);
        }
      };
    },
    897: (Lt, ar, rt) => {
      'use strict';
      var Vt = rt(907);
      function pe(ht) {
        return (
          !0 === Vt(ht) &&
          '[object Object]' === Object.prototype.toString.call(ht)
        );
      }
      Lt.exports = function (pt) {
        var xe, F;
        return !(
          !1 === pe(pt) ||
          ((xe = pt.constructor), 'function' != typeof xe) ||
          ((F = xe.prototype), !1 === pe(F)) ||
          !1 === F.hasOwnProperty('isPrototypeOf')
        );
      };
    },
    907: Lt => {
      'use strict';
      Lt.exports = function (rt) {
        return (
          null != rt &&
          'object' == typeof rt &&
          !1 === Array.isArray(rt)
        );
      };
    },
    200: Lt => {
      var ar = Object.prototype.toString;
      function rt(I) {
        return 'function' == typeof I.constructor
          ? I.constructor.name
          : null;
      }
      Lt.exports = function (q) {
        if (void 0 === q) return 'undefined';
        if (null === q) return 'null';
        var tt = typeof q;
        if ('boolean' === tt) return 'boolean';
        if ('string' === tt) return 'string';
        if ('number' === tt) return 'number';
        if ('symbol' === tt) return 'symbol';
        if ('function' === tt)
          return (function xe(I, q) {
            return 'GeneratorFunction' === rt(I);
          })(q)
            ? 'generatorfunction'
            : 'function';
        if (
          (function Vt(I) {
            return Array.isArray
              ? Array.isArray(I)
              : I instanceof Array;
          })(q)
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
          })(q)
        )
          return 'buffer';
        if (
          (function Ie(I) {
            try {
              if (
                'number' == typeof I.length &&
                'function' == typeof I.callee
              )
                return !0;
            } catch (q) {
              if (-1 !== q.message.indexOf('callee')) return !0;
            }
            return !1;
          })(q)
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
          })(q)
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
          })(q)
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
          })(q)
        )
          return 'regexp';
        switch (rt(q)) {
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
          (function F(I) {
            return (
              'function' == typeof I.throw &&
              'function' == typeof I.return &&
              'function' == typeof I.next
            );
          })(q)
        )
          return 'generator';
        switch ((tt = ar.call(q))) {
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
    739: (Lt, ar, rt) => {
      'use strict';
      const Vt = Symbol.prototype.valueOf,
        pe = rt(200);
      Lt.exports = function ht(I, q) {
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
            return (function Ie(I) {
              const q = I.length,
                tt = Buffer.allocUnsafe
                  ? Buffer.allocUnsafe(q)
                  : Buffer.from(q);
              return I.copy(tt), tt;
            })(I);
          case 'symbol':
            return (function gt(I) {
              return Vt ? Object(Vt.call(I)) : {};
            })(I);
          case 'arraybuffer':
            return (function xe(I) {
              const q = new I.constructor(I.byteLength);
              return new Uint8Array(q).set(new Uint8Array(I)), q;
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
            return (function F(I, q) {
              return new I.constructor(
                I.buffer,
                I.byteOffset,
                I.length,
              );
            })(I);
          case 'regexp':
            return (function pt(I) {
              const q =
                  void 0 !== I.flags
                    ? I.flags
                    : /\w+$/.exec(I) || void 0,
                tt = new I.constructor(I.source, q);
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
  Lt => {
    Lt((Lt.s = 376));
  },
]);

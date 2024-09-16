(self.webpackChunkenglish_learning_fe =
  self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    797: (kt, ir, rt) => {
      'use strict';
      function Pt(e, t) {
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
            (pe.producerIndexOfThis[t] = ji(pe) ? Um(e, pe, t) : 0)),
          (pe.producerLastReadVersion[t] = e.version);
      }
      function Pm(e) {
        if (
          (!ji(e) || e.dirty) &&
          (e.dirty || e.lastCleanEpoch !== pt)
        ) {
          if (!e.producerMustRecompute(e) && !Kl(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = pt);
          e.producerRecomputeValue(e),
            (e.dirty = !1),
            (e.lastCleanEpoch = pt);
        }
      }
      function Lm(e) {
        if (void 0 === e.liveConsumerNode) return;
        const t = ht;
        ht = !0;
        try {
          for (const n of e.liveConsumerNode) n.dirty || jm(n);
        } finally {
          ht = t;
        }
      }
      function Vm() {
        return !1 !== pe?.consumerAllowSignalWrites;
      }
      function jm(e) {
        (e.dirty = !0), Lm(e), e.consumerMarkedDirty?.(e);
      }
      function Fa(e) {
        return e && (e.nextProducerIndex = 0), F(e);
      }
      function Yl(e, t) {
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
      function Kl(e) {
        Pa(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (Pm(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function Xl(e) {
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
      function Um(e, t, n) {
        if ((Bm(e), 0 === e.liveConsumerNode.length && $m(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            e.producerIndexOfThis[r] = Um(e.producerNode[r], e, r);
        return (
          e.liveConsumerIndexOfThis.push(n),
          e.liveConsumerNode.push(t) - 1
        );
      }
      function ka(e, t) {
        if ((Bm(e), 1 === e.liveConsumerNode.length && $m(e)))
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
      function Bm(e) {
        (e.liveConsumerNode ??= []),
          (e.liveConsumerIndexOfThis ??= []);
      }
      function $m(e) {
        return void 0 !== e.producerNode;
      }
      const Jl = Symbol('UNSET'),
        ed = Symbol('COMPUTING'),
        La = Symbol('ERRORED'),
        LT = {
          ...q,
          value: Jl,
          dirty: !0,
          error: null,
          equal: Pt,
          producerMustRecompute: e =>
            e.value === Jl || e.value === ed,
          producerRecomputeValue(e) {
            if (e.value === ed)
              throw new Error('Detected cycle in computations.');
            const t = e.value;
            e.value = ed;
            const n = Fa(e);
            let r;
            try {
              r = e.computation();
            } catch (o) {
              (r = La), (e.error = o);
            } finally {
              Yl(e, n);
            }
            t !== Jl && t !== La && r !== La && e.equal(t, r)
              ? (e.value = t)
              : ((e.value = r), e.version++);
          },
        };
      let Hm = function VT() {
        throw new Error();
      };
      function zm() {
        Hm();
      }
      let Va = null;
      function Gm(e, t) {
        Vm() || zm(),
          e.equal(e.value, t) ||
            ((e.value = t),
            (function HT(e) {
              e.version++,
                (function kT() {
                  pt++;
                })(),
                Lm(e),
                Va?.();
            })(e));
      }
      const $T = { ...q, equal: Pt, value: void 0 };
      function we(e) {
        return 'function' == typeof e;
      }
      function td(e) {
        const n = e(r => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n),
          n
        );
      }
      const nd = td(
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
            if (we(r))
              try {
                r();
              } catch (i) {
                t = i instanceof nd ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Qm(i);
                } catch (s) {
                  (t = t ?? []),
                    s instanceof nd
                      ? (t = [...t, ...s.errors])
                      : t.push(s);
                }
            }
            if (t) throw new nd(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) Qm(t);
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
      const Wm = at.EMPTY;
      function Zm(e) {
        return (
          e instanceof at ||
          (e &&
            'closed' in e &&
            we(e.remove) &&
            we(e.add) &&
            we(e.unsubscribe))
        );
      }
      function Qm(e) {
        we(e) ? e() : e.unsubscribe();
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
      function Ym(e) {
        Ua.setTimeout(() => {
          const { onUnhandledError: t } = Fr;
          if (!t) throw e;
          t(e);
        });
      }
      function Ba() {}
      const GT = rd('C', void 0, void 0);
      function rd(e, t, n) {
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
      class od extends at {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), Zm(t) && t.add(this))
              : (this.destination = XT);
        }
        static create(t, n, r) {
          return new sd(t, n, r);
        }
        next(t) {
          this.isStopped
            ? ad(
                (function WT(e) {
                  return rd('N', e, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? ad(
                (function qT(e) {
                  return rd('E', void 0, e);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? ad(GT, this)
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
      const QT = Function.prototype.bind;
      function id(e, t) {
        return QT.call(e, t);
      }
      class YT {
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
      class sd extends od {
        constructor(t, n, r) {
          let o;
          if ((super(), we(t) || !t))
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
                  next: t.next && id(t.next, i),
                  error: t.error && id(t.error, i),
                  complete: t.complete && id(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new YT(o);
        }
      }
      function Ha(e) {
        Fr.useDeprecatedSynchronousErrorHandling
          ? (function ZT(e) {
              Fr.useDeprecatedSynchronousErrorHandling &&
                kr &&
                ((kr.errorThrown = !0), (kr.error = e));
            })(e)
          : Ym(e);
      }
      function ad(e, t) {
        const { onStoppedNotification: n } = Fr;
        n && Ua.setTimeout(() => n(e, t));
      }
      const XT = {
          closed: !0,
          next: Ba,
          error: function KT(e) {
            throw e;
          },
          complete: Ba,
        },
        cd =
          ('function' == typeof Symbol && Symbol.observable) ||
          '@@observable';
      function Bn(e) {
        return e;
      }
      function Km(e) {
        return 0 === e.length
          ? Bn
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
            const i = (function tA(e) {
              return (
                (e && e instanceof od) ||
                ((function eA(e) {
                  return (
                    e && we(e.next) && we(e.error) && we(e.complete)
                  );
                })(e) &&
                  Zm(e))
              );
            })(n)
              ? n
              : new sd(n, r, o);
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
            return new (r = Xm(r))((o, i) => {
              const s = new sd({
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
          [cd]() {
            return this;
          }
          pipe(...n) {
            return Km(n)(this);
          }
          toPromise(n) {
            return new (n = Xm(n))((r, o) => {
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
      function Xm(e) {
        var t;
        return null !== (t = e ?? Fr.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      const nA = td(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let Mt = (() => {
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
            const r = new Jm(this, this);
            return (r.operator = n), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new nA();
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
              ? Wm
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
        return (e.create = (t, n) => new Jm(t, n)), e;
      })();
      class Jm extends Mt {
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
            : Wm;
        }
      }
      class mt extends Mt {
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
      function ev(e) {
        return we(e?.lift);
      }
      function qe(e) {
        return t => {
          if (ev(t))
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
        return new rA(e, t, n, r, o);
      }
      class rA extends od {
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
        return qe((n, r) => {
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
      const Cv = 'https://g.co/ng/security#xss';
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
      function $n(e) {
        return { toString: e }.toString();
      }
      const Eo = '__parameters__';
      function wo(e, t, n) {
        return $n(() => {
          const r = (function md(e) {
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
      const be = globalThis;
      function de(e) {
        for (let t in e) if (e[t] === de) return t;
        throw Error(
          'Could not find renamed property on target object.',
        );
      }
      function rN(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) &&
            !e.hasOwnProperty(n) &&
            (e[n] = t[n]);
      }
      function We(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(We).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function vd(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const oN = de({ __forward_ref__: de });
      function ye(e) {
        return (
          (e.__forward_ref__ = ye),
          (e.toString = function () {
            return We(this());
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
          e.hasOwnProperty(oN) &&
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
      function bo(e) {
        return {
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function Qa(e) {
        return bv(e, Ka) || bv(e, Iv);
      }
      function bv(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Ya(e) {
        return e && (e.hasOwnProperty(yd) || e.hasOwnProperty(lN))
          ? e[yd]
          : null;
      }
      const Ka = de({ ɵprov: de }),
        yd = de({ ɵinj: de }),
        Iv = de({ ngInjectableDef: de }),
        lN = de({ ngInjectorDef: de });
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
      function wd(e) {
        return e && !!e.ɵproviders;
      }
      const Bi = de({ ɵcmp: de }),
        bd = de({ ɵdir: de }),
        Id = de({ ɵpipe: de }),
        Mv = de({ ɵmod: de }),
        Hn = de({ ɵfac: de }),
        $i = de({ __NG_ELEMENT_ID__: de }),
        Tv = de({ __NG_ENV_ID__: de });
      function U(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Sd(e, t) {
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
      let Md;
      function Av() {
        return Md;
      }
      function Tt(e) {
        const t = Md;
        return (Md = e), t;
      }
      function Nv(e, t, n) {
        const r = Qa(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Y.Optional
          ? null
          : void 0 !== t
          ? t
          : void Sd();
      }
      const Hi = {},
        Td = '__NG_DI_FLAG__',
        Xa = 'ngTempTokenPath',
        mN = /\n/gm,
        Rv = '__source';
      let Io;
      function cr(e) {
        const t = Io;
        return (Io = e), t;
      }
      function _N(e, t = Y.Default) {
        if (void 0 === Io) throw new E(-203, !1);
        return null === Io
          ? Nv(e, void 0, t)
          : Io.get(e, t & Y.Optional ? null : void 0, t);
      }
      function A(e, t = Y.Default) {
        return (Av() || _N)(k(e), t);
      }
      function _(e, t = Y.Default) {
        return A(e, Ja(t));
      }
      function Ja(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Ad(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = k(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new E(900, !1);
            let o,
              i = Y.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                c = CN(a);
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
      function zi(e, t) {
        return (e[Td] = t), (e.prototype[Td] = t), e;
      }
      function CN(e) {
        return e[Td];
      }
      const Ov = zi(
          wo('Inject', e => ({ token: e })),
          -1,
        ),
        Nd = zi(wo('Optional'), 8),
        Rd = zi(wo('SkipSelf'), 4);
      function Lr(e, t) {
        return e.hasOwnProperty(Hn) ? e[Hn] : null;
      }
      function So(e, t) {
        e.forEach(n => (Array.isArray(n) ? So(n, t) : t(n)));
      }
      function Fv(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ec(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function jt(e, t, n) {
        let r = Mo(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function kv(e, t, n, r) {
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
      function Od(e, t) {
        const n = Mo(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Mo(e, t) {
        return (function Pv(e, t, n) {
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
      const En = {},
        ee = [],
        Ut = new D(''),
        Lv = new D('', -1),
        Fd = new D('');
      class nc {
        get(t, n = Hi) {
          if (n === Hi) {
            const r = new Error(
              `NullInjectorError: No provider for ${We(t)}!`,
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
        on = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })(on || {}),
        ur = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] =
              'HasDecoratorInputTransform'),
            e
          );
        })(ur || {});
      function SN(e, t, n) {
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
      function kd(e, t, n) {
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
            jv(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s),
              r++;
          }
        }
        return r;
      }
      function Vv(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function jv(e) {
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
                  Uv(
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
      function Uv(e, t, n, r, o) {
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
      const Bv = 'ng-template';
      function MN(e, t, n, r) {
        let o = 0;
        if (r) {
          for (; o < t.length && 'string' == typeof t[o]; o += 2)
            if (
              'class' === t[o] &&
              -1 !== SN(t[o + 1].toLowerCase(), n, 0)
            )
              return !0;
        } else if (Pd(e)) return !1;
        if (((o = t.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < t.length && 'string' == typeof (i = t[o]); )
            if (i.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function Pd(e) {
        return 4 === e.type && e.value !== Bv;
      }
      function TN(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Bv);
      }
      function AN(e, t, n) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function xN(e) {
                  for (let t = 0; t < e.length; t++)
                    if (Vv(e[t])) return t;
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
                  ('' !== c && !TN(e, c, n)) ||
                    ('' === c && 1 === t.length))
                ) {
                  if (sn(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !MN(e, o, c, n)) {
                  if (sn(r)) return !1;
                  s = !0;
                }
              } else {
                const u = t[++a],
                  l = NN(c, o, Pd(e), n);
                if (-1 === l) {
                  if (sn(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== u) {
                  let d;
                  if (
                    ((d = l > i ? '' : o[l + 1].toLowerCase()),
                    2 & r && u !== d)
                  ) {
                    if (sn(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !sn(r) && !sn(c)) return !1;
            if (s && sn(c)) continue;
            (s = !1), (r = c | (1 & r));
          }
        }
        return sn(r) || s;
      }
      function sn(e) {
        return !(1 & e);
      }
      function NN(e, t, n, r) {
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
        return (function ON(e, t) {
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
      function $v(e, t, n = !1) {
        for (let r = 0; r < t.length; r++)
          if (AN(e, t[r], n)) return !0;
        return !1;
      }
      function FN(e, t) {
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
      function Hv(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function kN(e) {
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
            '' !== o && !sn(s) && ((t += Hv(i, o)), (o = '')),
              (r = s),
              (i = i || !sn(r));
          n++;
        }
        return '' !== o && (t += Hv(i, o)), t;
      }
      function oe(e) {
        return $n(() => {
          const t = Gv(e),
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
              encapsulation: e.encapsulation || on.Emulated,
              styles: e.styles || ee,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          qv(n);
          const r = e.dependencies;
          return (
            (n.directiveDefs = oc(r, !1)),
            (n.pipeDefs = oc(r, !0)),
            (n.id = (function BN(e) {
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
      function VN(e) {
        return W(e) || Ze(e);
      }
      function jN(e) {
        return null !== e;
      }
      function qi(e) {
        return $n(() => ({
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
      function zv(e, t) {
        if (null == e) return En;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            let i,
              s,
              a = ur.None;
            Array.isArray(o)
              ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
              : ((i = o), (s = o)),
              t
                ? ((n[i] = a !== ur.None ? [r, a] : r), (t[i] = s))
                : (n[i] = r);
          }
        return n;
      }
      function V(e) {
        return $n(() => {
          const t = Gv(e);
          return qv(t), t;
        });
      }
      function W(e) {
        return e[Bi] || null;
      }
      function Ze(e) {
        return e[bd] || null;
      }
      function ot(e) {
        return e[Id] || null;
      }
      function ct(e, t) {
        const n = e[Mv] || null;
        if (!n && !0 === t)
          throw new Error(
            `Type ${We(e)} does not have '\u0275mod' property.`,
          );
        return n;
      }
      function Gv(e) {
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
          inputConfig: e.inputs || En,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || ee,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: zv(e.inputs, t),
          outputs: zv(e.outputs),
          debugInfo: null,
        };
      }
      function qv(e) {
        e.features?.forEach(t => t(e));
      }
      function oc(e, t) {
        if (!e) return null;
        const n = t ? ot : VN;
        return () =>
          ('function' == typeof e ? e() : e)
            .map(r => n(r))
            .filter(jN);
      }
      function To(e) {
        return { ɵproviders: e };
      }
      function $N(...e) {
        return { ɵproviders: Ld(0, e), ɵfromNgModule: !0 };
      }
      function Ld(e, ...t) {
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
          void 0 !== o && Wv(o, i),
          n
        );
      }
      function Wv(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: o } = e[n];
          Vd(o, i => {
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
              void 0 !== u && Wv(u, t);
            }
            if (!a) {
              const u = Lr(o) || (() => new o());
              t({ provide: o, useFactory: u, deps: ee }, o),
                t({ provide: Fd, useValue: o, multi: !0 }, o),
                t(
                  { provide: Ut, useValue: () => A(o), multi: !0 },
                  o,
                );
            }
            const c = i.providers;
            if (null != c && !a) {
              const u = e;
              Vd(c, l => {
                t(l, u);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Vd(e, t) {
        for (let n of e)
          wd(n) && (n = n.ɵproviders),
            Array.isArray(n) ? Vd(n, t) : t(n);
      }
      const HN = de({ provide: String, useValue: de });
      function jd(e) {
        return null !== e && 'object' == typeof e && HN in e;
      }
      function Vr(e) {
        return 'function' == typeof e;
      }
      const Ud = new D(''),
        sc = {},
        GN = {};
      let Bd;
      function ac() {
        return void 0 === Bd && (Bd = new nc()), Bd;
      }
      class Bt {}
      class Ao extends Bt {
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
            Hd(t, s => this.processProvider(s)),
            this.records.set(Lv, No(void 0, this)),
            o.has('environment') &&
              this.records.set(Bt, No(void 0, this));
          const i = this.records.get(Ud);
          null != i &&
            'string' == typeof i.value &&
            this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(
              this.get(Fd, ee, Y.Self),
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
          const n = cr(this),
            r = Tt(void 0);
          try {
            return t();
          } finally {
            cr(n), Tt(r);
          }
        }
        get(t, n = Hi, r = Y.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(Tv)))
            return t[Tv](this);
          r = Ja(r);
          const i = cr(this),
            s = Tt(void 0);
          try {
            if (!(r & Y.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const u =
                  (function YN(e) {
                    return (
                      'function' == typeof e ||
                      ('object' == typeof e && e instanceof D)
                    );
                  })(t) && Qa(t);
                (c =
                  u && this.injectableDefInScope(u)
                    ? No($d(t), sc)
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
              if (((a[Xa] = a[Xa] || []).unshift(We(t)), i)) throw a;
              return (function EN(e, t, n, r) {
                const o = e[Xa];
                throw (
                  (t[Rv] && o.unshift(t[Rv]),
                  (e.message = (function DN(e, t, n, r = null) {
                    e =
                      e &&
                      '\n' === e.charAt(0) &&
                      '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = We(t);
                    if (Array.isArray(t)) o = t.map(We).join(' -> ');
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
                                : We(a)),
                          );
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${n}${
                      r ? '(' + r + ')' : ''
                    }[${o}]: ${e.replace(mN, '\n  ')}`;
                  })('\n' + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[Xa] = null),
                  e)
                );
              })(a, t, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            Tt(s), cr(i);
          }
        }
        resolveInjectorInitializers() {
          const t = F(null),
            n = cr(this),
            r = Tt(void 0);
          try {
            const i = this.get(Ut, ee, Y.Self);
            for (const s of i) s();
          } finally {
            cr(n), Tt(r), F(t);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(We(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new E(205, !1);
        }
        processProvider(t) {
          let n = Vr((t = k(t))) ? t : k(t && t.provide);
          const r = (function WN(e) {
            return jd(e) ? No(void 0, e.useValue) : No(Yv(e), sc);
          })(t);
          if (!Vr(t) && !0 === t.multi) {
            let o = this.records.get(n);
            o ||
              ((o = No(void 0, sc, !0)),
              (o.factory = () => Ad(o.multi)),
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
                ((n.value = GN), (n.value = n.factory())),
              'object' == typeof n.value &&
                n.value &&
                (function QN(e) {
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
      function $d(e) {
        const t = Qa(e),
          n = null !== t ? t.factory : Lr(e);
        if (null !== n) return n;
        if (e instanceof D) throw new E(204, !1);
        if (e instanceof Function)
          return (function qN(e) {
            if (e.length > 0) throw new E(204, !1);
            const n = (function uN(e) {
              return (e && (e[Ka] || e[Iv])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new E(204, !1);
      }
      function Yv(e, t, n) {
        let r;
        if (Vr(e)) {
          const o = k(e);
          return Lr(o) || $d(o);
        }
        if (jd(e)) r = () => k(e.useValue);
        else if (
          (function Qv(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Ad(e.deps || []));
        else if (
          (function Zv(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => A(k(e.useExisting));
        else {
          const o = k(e && (e.useClass || e.provide));
          if (
            !(function ZN(e) {
              return !!e.deps;
            })(e)
          )
            return Lr(o) || $d(o);
          r = () => new o(...Ad(e.deps));
        }
        return r;
      }
      function No(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Hd(e, t) {
        for (const n of e)
          Array.isArray(n)
            ? Hd(n, t)
            : n && wd(n)
            ? Hd(n.ɵproviders, t)
            : t(n);
      }
      function dr(e, t) {
        e instanceof Ao && e.assertNotDestroyed();
        const r = cr(e),
          o = Tt(void 0);
        try {
          return t();
        } finally {
          cr(r), Tt(o);
        }
      }
      function Kv() {
        return (
          void 0 !== Av() ||
          null !=
            (function yN() {
              return Io;
            })()
        );
      }
      const Me = 0,
        b = 1,
        N = 2,
        Be = 3,
        an = 4,
        it = 5,
        vt = 6,
        xo = 7,
        _e = 8,
        $e = 9,
        Dn = 10,
        P = 11,
        Zi = 12,
        Jv = 13,
        Oo = 14,
        Te = 15,
        jr = 16,
        Fo = 17,
        zn = 18,
        ko = 19,
        ey = 20,
        fr = 21,
        lc = 22,
        Qt = 23,
        M = 25,
        Gd = 1,
        wn = 7,
        Po = 9,
        Fe = 10;
      var fc = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(fc || {});
      function Ye(e) {
        return Array.isArray(e) && 'object' == typeof e[Gd];
      }
      function ut(e) {
        return Array.isArray(e) && !0 === e[Gd];
      }
      function qd(e) {
        return !!(4 & e.flags);
      }
      function Ur(e) {
        return e.componentOffset > -1;
      }
      function hc(e) {
        return !(1 & ~e.flags);
      }
      function cn(e) {
        return !!e.template;
      }
      function Yi(e) {
        return !!(512 & e[N]);
      }
      class cR {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function iy(e, t, n, r) {
        null !== t ? t.applyValueToInputSignal(t, r) : (e[n] = r);
      }
      function Yt() {
        return sy;
      }
      function sy(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = lR), uR;
      }
      function uR() {
        const e = cy(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === En) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function lR(e, t, n, r, o) {
        const i = this.declaredInputs[r],
          s =
            cy(e) ||
            (function dR(e, t) {
              return (e[ay] = t);
            })(e, { previous: En, current: null }),
          a = s.current || (s.current = {}),
          c = s.previous,
          u = c[i];
        (a[i] = new cR(u && u.currentValue, n, c === En)),
          iy(e, t, o, n);
      }
      Yt.ngInherit = !0;
      const ay = '__ngSimpleChanges__';
      function cy(e) {
        return e[ay] || null;
      }
      const bn = function (e, t, n) {};
      function te(e) {
        for (; Array.isArray(e); ) e = e[Me];
        return e;
      }
      function Ki(e, t) {
        return te(t[e]);
      }
      function yt(e, t) {
        return te(t[e.index]);
      }
      function Xi(e, t) {
        return e.data[t];
      }
      function $t(e, t) {
        const n = t[e];
        return Ye(n) ? n : n[Me];
      }
      function Kd(e) {
        return !(128 & ~e[N]);
      }
      function Kt(e, t) {
        return null == t ? null : e[t];
      }
      function dy(e) {
        e[Fo] = 0;
      }
      function fy(e) {
        1024 & e[N] || ((e[N] |= 1024), Kd(e) && gc(e));
      }
      function pc(e) {
        return !!(9216 & e[N] || e[Qt]?.dirty);
      }
      function Xd(e) {
        e[Dn].changeDetectionScheduler?.notify(8),
          64 & e[N] && (e[N] |= 1024),
          pc(e) && gc(e);
      }
      function gc(e) {
        e[Dn].changeDetectionScheduler?.notify(0);
        let t = Gn(e);
        for (
          ;
          null !== t && !(8192 & t[N]) && ((t[N] |= 8192), Kd(t));

        )
          t = Gn(t);
      }
      function mc(e, t) {
        if (!(256 & ~e[N])) throw new E(911, !1);
        null === e[fr] && (e[fr] = []), e[fr].push(t);
      }
      function Gn(e) {
        const t = e[Be];
        return ut(t) ? t[Be] : t;
      }
      const L = {
        lFrame: Iy(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      let py = !1;
      function gy() {
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
      function un(e) {
        return (L.lFrame.contextLView = e), e[_e];
      }
      function ln(e) {
        return (L.lFrame.contextLView = null), e;
      }
      function fe() {
        let e = my();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function my() {
        return L.lFrame.currentTNode;
      }
      function dn(e, t) {
        const n = L.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function tf() {
        return L.lFrame.isParent;
      }
      function nf() {
        L.lFrame.isParent = !1;
      }
      function _y() {
        return py;
      }
      function Cy(e) {
        py = e;
      }
      function fn() {
        return L.lFrame.bindingIndex++;
      }
      function IR(e, t) {
        const n = L.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), rf(t);
      }
      function rf(e) {
        L.lFrame.currentDirectiveIndex = e;
      }
      function af() {
        return L.lFrame.currentQueryIndex;
      }
      function yc(e) {
        L.lFrame.currentQueryIndex = e;
      }
      function MR(e) {
        const t = e[b];
        return 2 === t.type
          ? t.declTNode
          : 1 === t.type
          ? e[it]
          : null;
      }
      function wy(e, t, n) {
        if (n & Y.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Y.Host ||
              ((o = MR(i)),
              null === o || ((i = i[Oo]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (L.lFrame = by());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function cf(e) {
        const t = by(),
          n = e[b];
        (L.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function by() {
        const e = L.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Iy(e) : t;
      }
      function Iy(e) {
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
      function Sy() {
        const e = L.lFrame;
        return (
          (L.lFrame = e.parent),
          (e.currentTNode = null),
          (e.lView = null),
          e
        );
      }
      const My = Sy;
      function uf() {
        const e = Sy();
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
        return Xi(e.tView, e.selectedIndex);
      }
      let Ay = !0;
      function es() {
        return Ay;
      }
      function In(e) {
        Ay = e;
      }
      function _c(e, t) {
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
      function Cc(e, t, n) {
        Ny(e, t, 3, n);
      }
      function Ec(e, t, n, r) {
        (3 & e[N]) === n && Ny(e, t, n, r);
      }
      function lf(e, t) {
        let n = e[N];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[N] = n));
      }
      function Ny(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let a = 0;
        for (let c = void 0 !== r ? 65535 & e[Fo] : 0; c < s; c++)
          if ('number' == typeof t[c + 1]) {
            if (((a = t[c]), null != r && a >= r)) break;
          } else
            t[c] < 0 && (e[Fo] += 65536),
              (a < i || -1 == i) &&
                (FR(e, n, t, c),
                (e[Fo] = (4294901760 & e[Fo]) + c + 2)),
              c++;
      }
      function Ry(e, t) {
        bn(4, e, t);
        const n = F(null);
        try {
          t.call(e);
        } finally {
          F(n), bn(5, e, t);
        }
      }
      function FR(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        o
          ? e[N] >> 14 < e[Fo] >> 16 &&
            (3 & e[N]) === t &&
            ((e[N] += 16384), Ry(a, i))
          : Ry(a, i);
      }
      const Lo = -1;
      class ts {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      const ff = {};
      class zr {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Ja(r);
          const o = this.injector.get(t, ff, r);
          return o !== ff || n === ff
            ? o
            : this.parentInjector.get(t, n, r);
        }
      }
      function hf(e) {
        return e !== Lo;
      }
      function ns(e) {
        return 32767 & e;
      }
      function rs(e, t) {
        let n = (function VR(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Oo]), n--;
        return r;
      }
      let pf = !0;
      function Dc(e) {
        const t = pf;
        return (pf = e), t;
      }
      const Oy = 255,
        Fy = 5;
      let UR = 0;
      const Sn = {};
      function wc(e, t) {
        const n = ky(e, t);
        if (-1 !== n) return n;
        const r = t[b];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          gf(r.data, e),
          gf(t, null),
          gf(r.blueprint, null));
        const o = bc(e, t),
          i = e.injectorIndex;
        if (hf(o)) {
          const s = ns(o),
            a = rs(o, t),
            c = a[b].data;
          for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
        }
        return (t[i + 8] = o), i;
      }
      function gf(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function ky(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function bc(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = $y(o)), null === r)) return Lo;
          if ((n++, (o = o[Oo]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return Lo;
      }
      function mf(e, t, n) {
        !(function BR(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty($i) && (r = n[$i]),
            null == r && (r = n[$i] = UR++);
          const o = r & Oy;
          t.data[e + (o >> Fy)] |= 1 << o;
        })(e, t, n);
      }
      function Py(e, t, n) {
        if (n & Y.Optional || void 0 !== e) return e;
        Sd();
      }
      function Ly(e, t, n, r) {
        if (
          (n & Y.Optional && void 0 === r && (r = null),
          !(n & (Y.Self | Y.Host)))
        ) {
          const o = e[$e],
            i = Tt(void 0);
          try {
            return o
              ? o.get(t, r, n & Y.Optional)
              : Nv(t, r, n & Y.Optional);
          } finally {
            Tt(i);
          }
        }
        return Py(r, 0, n);
      }
      function Vy(e, t, n, r = Y.Default, o) {
        if (null !== e) {
          if (2048 & t[N] && !(r & Y.Self)) {
            const s = (function qR(e, t, n, r, o) {
              let i = e,
                s = t;
              for (
                ;
                null !== i &&
                null !== s &&
                2048 & s[N] &&
                !(512 & s[N]);

              ) {
                const a = jy(i, s, n, r | Y.Self, Sn);
                if (a !== Sn) return a;
                let c = i.parent;
                if (!c) {
                  const u = s[ey];
                  if (u) {
                    const l = u.get(n, Sn, r);
                    if (l !== Sn) return l;
                  }
                  (c = $y(s)), (s = s[Oo]);
                }
                i = c;
              }
              return o;
            })(e, t, n, r, Sn);
            if (s !== Sn) return s;
          }
          const i = jy(e, t, n, r, Sn);
          if (i !== Sn) return i;
        }
        return Ly(t, n, r, o);
      }
      function jy(e, t, n, r, o) {
        const i = (function zR(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty($i) ? e[$i] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & Oy : GR) : t;
        })(n);
        if ('function' == typeof i) {
          if (!wy(t, e, r))
            return r & Y.Host ? Py(o, 0, r) : Ly(t, n, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & Y.Optional)) return s;
            Sd();
          } finally {
            My();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = ky(e, t),
            c = Lo,
            u = r & Y.Host ? t[Te][it] : null;
          for (
            (-1 === a || r & Y.SkipSelf) &&
            ((c = -1 === a ? bc(e, t) : t[a + 8]),
            c !== Lo && By(r, !1)
              ? ((s = t[b]), (a = ns(c)), (t = rs(c, t)))
              : (a = -1));
            -1 !== a;

          ) {
            const l = t[b];
            if (Uy(i, a, l.data)) {
              const d = HR(a, t, n, s, r, u);
              if (d !== Sn) return d;
            }
            (c = t[a + 8]),
              c !== Lo && By(r, t[b].data[a + 8] === u) && Uy(i, a, t)
                ? ((s = l), (a = ns(c)), (t = rs(c, t)))
                : (a = -1);
          }
        }
        return o;
      }
      function HR(e, t, n, r, o, i) {
        const s = t[b],
          a = s.data[e + 8],
          l = Ic(
            a,
            s,
            n,
            null == r ? Ur(a) && pf : r != s && !!(3 & a.type),
            o & Y.Host && i === a,
          );
        return null !== l ? Gr(t, s, l, a) : Sn;
      }
      function Ic(e, t, n, r, o) {
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
          if (h && cn(h) && h.type === n) return c;
        }
        return null;
      }
      function Gr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function kR(e) {
            return e instanceof ts;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function hN(e, t) {
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
          const a = Dc(s.canSeeViewProviders);
          s.resolving = !0;
          const u = s.injectImpl ? Tt(s.injectImpl) : null;
          wy(e, r, Y.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function OR(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: o,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const s = sy(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  o && (n.preOrderHooks ??= []).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks ??= []).push(e, i),
                      (n.preOrderCheckHooks ??= []).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== u && Tt(u), Dc(a), (s.resolving = !1), My();
          }
        }
        return o;
      }
      function Uy(e, t, n) {
        return !!(n[t + (e >> Fy)] & (1 << e));
      }
      function By(e, t) {
        return !(e & Y.Self || (e & Y.Host && t));
      }
      class Ke {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Vy(this._tNode, this._lView, t, Ja(r), n);
        }
      }
      function GR() {
        return new Ke(fe(), v());
      }
      function Xe(e) {
        return $n(() => {
          const t = e.prototype.constructor,
            n = t[Hn] || vf(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Hn] || vf(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function vf(e) {
        return Za(e)
          ? () => {
              const t = vf(k(e));
              return t && t();
            }
          : Lr(e);
      }
      function $y(e) {
        const t = e[b],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[it] : null;
      }
      function Wy(e, t = null, n = null, r) {
        const o = Zy(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Zy(e, t = null, n = null, r, o = new Set()) {
        const i = [n || ee, $N(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : We(e))),
          new Ao(i, t || ac(), r || null, o)
        );
      }
      class nt {
        static #e = (this.THROW_IF_NOT_FOUND = Hi);
        static #t = (this.NULL = new nc());
        static create(t, n) {
          if (Array.isArray(t)) return Wy({ name: '' }, n, t, '');
          {
            const r = t.name ?? '';
            return Wy({ name: r }, t.parent, t.providers, r);
          }
        }
        static #n = (this.ɵprov = S({
          token: nt,
          providedIn: 'any',
          factory: () => A(Lv),
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
      function _f(e) {
        return e.ngOriginalError;
      }
      const Yy = !0;
      let qr = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = nx);
          static #t = (this.__NG_ENV_ID__ = n => n);
        }
        return e;
      })();
      class tx extends qr {
        constructor(t) {
          super(), (this._lView = t);
        }
        onDestroy(t) {
          return (
            mc(this._lView, t),
            () =>
              (function Jd(e, t) {
                if (null === e[fr]) return;
                const n = e[fr].indexOf(t);
                -1 !== n && e[fr].splice(n, 1);
              })(this._lView, t)
          );
        }
      }
      function nx() {
        return new tx(v());
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
      const K = class rx extends Mt {
        constructor(t = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = t),
            Kv() &&
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
      function Mc(...e) {}
      function Ky(e) {
        let t, n;
        function r() {
          e = Mc;
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
      function Xy(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = Mc;
          }
        );
      }
      const Cf = 'isAngularZone',
        Tc = Cf + '_ID';
      let ox = 0;
      class le {
        constructor(t) {
          (this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new K(!1)),
            (this.onMicrotaskEmpty = new K(!1)),
            (this.onStable = new K(!1)),
            (this.onError = new K(!1));
          const {
            enableLongStackTrace: n = !1,
            shouldCoalesceEventChangeDetection: r = !1,
            shouldCoalesceRunChangeDetection: o = !1,
            scheduleInRootZone: i = Yy,
          } = t;
          if (typeof Zone > 'u') throw new E(908, !1);
          Zone.assertZonePatched();
          const s = this;
          (s._nesting = 0),
            (s._outer = s._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (s._inner = s._inner.fork(
                new Zone.TaskTrackingZoneSpec(),
              )),
            n &&
              Zone.longStackTraceZoneSpec &&
              (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
            (s.shouldCoalesceEventChangeDetection = !o && r),
            (s.shouldCoalesceRunChangeDetection = o),
            (s.callbackScheduled = !1),
            (s.scheduleInRootZone = i),
            (function ax(e) {
              const t = () => {
                  !(function sx(e) {
                    function t() {
                      Ky(() => {
                        (e.callbackScheduled = !1),
                          Df(e),
                          (e.isCheckStableRunning = !0),
                          Ef(e),
                          (e.isCheckStableRunning = !1);
                      });
                    }
                    e.isCheckStableRunning ||
                      e.callbackScheduled ||
                      ((e.callbackScheduled = !0),
                      e.scheduleInRootZone
                        ? Zone.root.run(() => {
                            t();
                          })
                        : e._outer.run(() => {
                            t();
                          }),
                      Df(e));
                  })(e);
                },
                n = ox++;
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { [Cf]: !0, [Tc]: n, [Tc + n]: !0 },
                onInvokeTask: (r, o, i, s, a, c) => {
                  if (
                    (function cx(e) {
                      return t_(e, '__ignore_ng_zone__');
                    })(c)
                  )
                    return r.invokeTask(i, s, a, c);
                  try {
                    return Jy(e), r.invokeTask(i, s, a, c);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      e_(e);
                  }
                },
                onInvoke: (r, o, i, s, a, c, u) => {
                  try {
                    return Jy(e), r.invoke(i, s, a, c, u);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function ux(e) {
                        return t_(e, '__scheduler_tick__');
                      })(c) &&
                      t(),
                      e_(e);
                  }
                },
                onHasTask: (r, o, i, s) => {
                  r.hasTask(i, s),
                    o === i &&
                      ('microTask' == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          Df(e),
                          Ef(e))
                        : 'macroTask' == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (r, o, i, s) => (
                  r.handleError(i, s),
                  e.runOutsideAngular(() => e.onError.emit(s)),
                  !1
                ),
              });
            })(s);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get(Cf);
        }
        static assertInAngularZone() {
          if (!le.isInAngularZone()) throw new E(909, !1);
        }
        static assertNotInAngularZone() {
          if (le.isInAngularZone()) throw new E(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask(
              'NgZoneEvent: ' + o,
              t,
              ix,
              Mc,
              Mc,
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
      const ix = {};
      function Ef(e) {
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
      function Df(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function Jy(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function e_(e) {
        e._nesting--, Ef(e);
      }
      class wf {
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
      function t_(e, t) {
        return (
          !(!Array.isArray(e) || 1 !== e.length) &&
          !0 === e[0]?.data?.[t]
        );
      }
      class Mn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && _f(t);
          for (; n && _f(n); ) n = _f(n);
          return n || null;
        }
      }
      const dx = new D('', {
        providedIn: 'root',
        factory: () => {
          const e = _(le),
            t = _(Mn);
          return n => e.runOutsideAngular(() => t.handleError(n));
        },
      });
      function fx() {
        return Uo(fe(), v());
      }
      function Uo(e, t) {
        return new Ht(yt(e, t));
      }
      let Ht = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
          static #e = (this.__NG_ELEMENT_ID__ = fx);
        }
        return e;
      })();
      function r_(e) {
        return e instanceof Ht ? e.nativeElement : e;
      }
      function hx() {
        return this._results[Symbol.iterator]();
      }
      class bf {
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
          const n = bf.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = hx);
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
          const r = (function At(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function IN(e, t, n) {
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
      function ss(e) {
        return !(128 & ~e.flags);
      }
      const Sf = new Map();
      let gx = 0;
      function Mf(e) {
        Sf.delete(e[ko]);
      }
      const Ac = '__ngContext__';
      function lt(e, t) {
        Ye(t)
          ? ((e[Ac] = t[ko]),
            (function vx(e) {
              Sf.set(e[ko], e);
            })(t))
          : (e[Ac] = t);
      }
      function h_(e) {
        return g_(e[Zi]);
      }
      function p_(e) {
        return g_(e[an]);
      }
      function g_(e) {
        for (; null !== e && !ut(e); ) e = e[an];
        return e;
      }
      let Af;
      const cs = new D('', { providedIn: 'root', factory: () => Fx }),
        Fx = 'ng',
        w_ = new D(''),
        pr = new D('', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        b_ = new D('', {
          providedIn: 'root',
          factory: () =>
            (function hr() {
              if (void 0 !== Af) return Af;
              if (typeof document < 'u') return document;
              throw new E(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let I_ = () => null;
      function Pf(e, t, n = !1) {
        return I_(e, t, n);
      }
      const O_ = new D('', { providedIn: 'root', factory: () => !1 });
      let jc;
      function V_(e) {
        return (
          (function $f() {
            if (void 0 === jc && ((jc = null), be.trustedTypes))
              try {
                jc = be.trustedTypes.createPolicy(
                  'angular#unsafe-bypass',
                  {
                    createHTML: e => e,
                    createScript: e => e,
                    createScriptURL: e => e,
                  },
                );
              } catch {}
            return jc;
          })()?.createScriptURL(e) || e
        );
      }
      class j_ {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Cv})`;
        }
      }
      function gr(e) {
        return e instanceof j_
          ? e.changingThisBreaksApplicationSecurity
          : e;
      }
      function ps(e, t) {
        const n = (function Jx(e) {
          return (e instanceof j_ && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see ${Cv})`,
          );
        }
        return n === t;
      }
      const rO =
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
      function Wf(e) {
        const t = ms();
        return t
          ? t.sanitize(Go.URL, e) || ''
          : ps(e, 'URL')
          ? gr(e)
          : (function Hf(e) {
              return (e = String(e)).match(rO) ? e : 'unsafe:' + e;
            })(U(e));
      }
      function Z_(e) {
        const t = ms();
        if (t) return V_(t.sanitize(Go.RESOURCE_URL, e) || '');
        if (ps(e, 'ResourceURL')) return V_(gr(e));
        throw new E(904, !1);
      }
      function ms() {
        const e = v();
        return e && e[Dn].sanitizer;
      }
      const _O = /^>|^->|<!--|-->|--!>|<!-$/g,
        CO = /(<|>)/g,
        EO = '\u200b$1\u200b';
      function zt(e) {
        return e instanceof Function ? e() : e;
      }
      var mr = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })(mr || {});
      let Yf;
      function Kf(e, t) {
        return Yf(e, t);
      }
      function Wo(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          ut(r) ? (i = r) : Ye(r) && ((s = !0), (r = r[Me]));
          const a = te(r);
          0 === e && null !== n
            ? null == o
              ? cC(t, n, a)
              : Qr(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? Qr(t, n, a, o || null, !0)
            : 2 === e
            ? (function ys(e, t, n) {
                e.removeChild(null, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function BO(e, t, n, r, o) {
                const i = n[wn];
                i !== te(n) && Wo(t, e, r, i, o);
                for (let a = Fe; a < n.length; a++) {
                  const c = n[a];
                  qc(c[b], c, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function Jf(e, t) {
        return e.createComment(
          (function Y_(e) {
            return e.replace(_O, t => t.replace(CO, EO));
          })(t),
        );
      }
      function Hc(e, t, n) {
        return e.createElement(t, n);
      }
      function iC(e, t) {
        t[Dn].changeDetectionScheduler?.notify(9),
          qc(e, t, t[P], 2, null, null);
      }
      function sC(e, t) {
        const n = e[Po],
          r = t[Be];
        (Ye(r) || t[Te] !== r[Be][Te]) &&
          (e[N] |= fc.HasTransplantedViews),
          null === n ? (e[Po] = [t]) : n.push(t);
      }
      function eh(e, t) {
        const n = e[Po],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function vs(e, t) {
        if (e.length <= Fe) return;
        const n = Fe + t,
          r = e[n];
        if (r) {
          const o = r[jr];
          null !== o && o !== e && eh(o, r),
            t > 0 && (e[n - 1][an] = r[an]);
          const i = ec(e, Fe + t);
          !(function OO(e, t) {
            iC(e, t), (t[Me] = null), (t[it] = null);
          })(r[b], r);
          const s = i[zn];
          null !== s && s.detachView(i[b]),
            (r[Be] = null),
            (r[an] = null),
            (r[N] &= -129);
        }
        return r;
      }
      function zc(e, t) {
        if (!(256 & t[N])) {
          const n = t[P];
          n.destroyNode && qc(e, t, n, 3, null, null),
            (function kO(e) {
              let t = e[Zi];
              if (!t) return th(e[b], e);
              for (; t; ) {
                let n = null;
                if (Ye(t)) n = t[Zi];
                else {
                  const r = t[Fe];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[an] && t !== e; )
                    Ye(t) && th(t[b], t), (t = t[Be]);
                  null === t && (t = e),
                    Ye(t) && th(t[b], t),
                    (n = t && t[an]);
                }
                t = n;
              }
            })(t);
        }
      }
      function th(e, t) {
        if (256 & t[N]) return;
        const n = F(null);
        try {
          (t[N] &= -129),
            (t[N] |= 256),
            t[Qt] && Xl(t[Qt]),
            (function VO(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof ts)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          c = i[s + 1];
                        bn(4, a, c);
                        try {
                          c.call(a);
                        } finally {
                          bn(5, a, c);
                        }
                      }
                    else {
                      bn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        bn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function LO(e, t) {
              const n = e.cleanup,
                r = t[xo];
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else n[i].call(r[n[i + 1]]);
              null !== r && (t[xo] = null);
              const o = t[fr];
              if (null !== o) {
                t[fr] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, t),
            1 === t[b].type && t[P].destroy();
          const r = t[jr];
          if (null !== r && ut(t[Be])) {
            r !== t[Be] && eh(r, t);
            const o = t[zn];
            null !== o && o.detachView(e);
          }
          Mf(t);
        } finally {
          F(n);
        }
      }
      function nh(e, t, n) {
        return (function aC(e, t, n) {
          let r = t;
          for (; null !== r && 168 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Me];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } =
                e.data[r.directiveStart + o];
              if (i === on.None || i === on.Emulated) return null;
            }
            return yt(r, n);
          }
        })(e, t.parent, n);
      }
      function Qr(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function cC(e, t, n) {
        e.appendChild(t, n);
      }
      function uC(e, t, n, r, o) {
        null !== r ? Qr(e, t, n, r, o) : cC(e, t, n);
      }
      function rh(e, t) {
        return e.parentNode(t);
      }
      function lC(e, t, n) {
        return fC(e, t, n);
      }
      let oh,
        fC = function dC(e, t, n) {
          return 40 & e.type ? yt(e, n) : null;
        };
      function Gc(e, t, n, r) {
        const o = nh(e, r, t),
          i = t[P],
          a = lC(r.parent || t[it], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) uC(i, o, n[c], a, !1);
          else uC(i, o, n, a, !1);
        void 0 !== oh && oh(i, r, t, n, o);
      }
      function Yr(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return yt(t, e);
          if (4 & n) return ih(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Yr(e, r);
            {
              const o = e[t.index];
              return ut(o) ? ih(-1, o) : te(o);
            }
          }
          if (128 & n) return Yr(e, t.next);
          if (32 & n) return Kf(t, e)() || te(e[t.index]);
          {
            const r = pC(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Yr(Gn(e[Te]), r)
              : Yr(e, t.next);
          }
        }
        return null;
      }
      function pC(e, t) {
        return null !== t ? e[Te][it].projection[t.projection] : null;
      }
      function ih(e, t) {
        const n = Fe + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[b].firstChild;
          if (null !== o) return Yr(r, o);
        }
        return t[wn];
      }
      function sh(e, t, n, r, o, i, s) {
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
              sh(e, t, n.child, r, o, i, !1), Wo(t, e, o, a, i);
            else if (32 & c) {
              const u = Kf(n, r);
              let l;
              for (; (l = u()); ) Wo(t, e, o, l, i);
              Wo(t, e, o, a, i);
            } else 16 & c ? mC(e, t, r, n, o, i) : Wo(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function qc(e, t, n, r, o, i) {
        sh(n, r, e.firstChild, t, o, i, !1);
      }
      function mC(e, t, n, r, o, i) {
        const s = n[Te],
          c = s[it].projection[r.projection];
        if (Array.isArray(c))
          for (let u = 0; u < c.length; u++) Wo(t, e, o, c[u], i);
        else {
          let u = c;
          const l = s[Be];
          ss(r) && (u.flags |= 128), sh(e, t, u, l, o, i, !0);
        }
      }
      function vC(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function yC(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && kd(e, t, r),
          null !== o && vC(e, t, o),
          null !== i &&
            (function HO(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      const B = {};
      function j(e = 1) {
        _C(G(), v(), st() + e, !1);
      }
      function _C(e, t, n, r) {
        if (!r)
          if (3 & ~t[N]) {
            const i = e.preOrderHooks;
            null !== i && Ec(t, i, 0, n);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && Cc(t, i, n);
          }
        Hr(n);
      }
      function w(e, t = Y.Default) {
        const n = v();
        return null === n ? A(e, t) : Vy(fe(), n, k(e), t);
      }
      function EC(e, t, n, r, o, i) {
        const s = F(null);
        try {
          let a = null;
          o & ur.SignalBased && (a = t[r][xe]),
            null !== a &&
              void 0 !== a.transformFn &&
              (i = a.transformFn(i)),
            o & ur.HasDecoratorInputTransform &&
              (i = e.inputTransforms[r].call(t, i)),
            null !== e.setInput
              ? e.setInput(t, a, i, n, r)
              : iy(t, a, r, i);
        } finally {
          F(s);
        }
      }
      function Wc(e, t, n, r, o, i, s, a, c, u, l) {
        const d = t.blueprint.slice();
        return (
          (d[Me] = o),
          (d[N] = 204 | r),
          (null !== u || (e && 2048 & e[N])) && (d[N] |= 2048),
          dy(d),
          (d[Be] = d[Oo] = e),
          (d[_e] = n),
          (d[Dn] = s || (e && e[Dn])),
          (d[P] = a || (e && e[P])),
          (d[$e] = c || (e && e[$e]) || null),
          (d[it] = i),
          (d[ko] = (function mx() {
            return gx++;
          })()),
          (d[vt] = l),
          (d[ey] = u),
          (d[Te] = 2 == t.type ? e[Te] : d),
          d
        );
      }
      function Kr(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function ah(e, t, n, r, o) {
            const i = my(),
              s = tf(),
              c = (e.data[t] = (function KO(e, t, n, r, o, i) {
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
            (function bR() {
              return L.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function Ji() {
            const e = L.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return dn(i, !0), i;
      }
      function _s(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function DC(e, t, n, r, o) {
        const i = st(),
          s = 2 & r;
        try {
          Hr(-1),
            s && t.length > M && _C(e, t, M, !1),
            bn(s ? 2 : 0, o),
            n(r, o);
        } finally {
          Hr(i), bn(s ? 3 : 1, o);
        }
      }
      function ch(e, t, n) {
        if (qd(t)) {
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
      function uh(e, t, n) {
        gy() &&
          ((function oF(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            Ur(n) &&
              (function dF(e, t, n) {
                const r = yt(t, e),
                  o = wC(n);
                let s = 16;
                n.signals ? (s = 4096) : n.onPush && (s = 64);
                const a = Zc(
                  e,
                  Wc(
                    e,
                    o,
                    null,
                    s,
                    r,
                    t,
                    null,
                    e[Dn].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null,
                  ),
                );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || wc(n, t),
              lt(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const c = e.data[a],
                u = Gr(t, e, a, n);
              lt(u, t),
                null !== s && fF(0, a - o, u, c, 0, s),
                cn(c) && ($t(n.index, t)[_e] = Gr(t, e, a, n));
            }
          })(e, t, n, yt(n, t)),
          !(64 & ~n.flags) && TC(e, t, n));
      }
      function lh(e, t, n = yt) {
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
      function wC(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = dh(
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
      function dh(e, t, n, r, o, i, s, a, c, u, l) {
        const d = M + r,
          f = d + o,
          h = (function GO(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : B);
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
      let bC = () => null;
      function IC(e, t, n, r, o) {
        for (let i in t) {
          if (!t.hasOwnProperty(i)) continue;
          const s = t[i];
          if (void 0 === s) continue;
          r ??= {};
          let a,
            c = ur.None;
          Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
          let u = i;
          if (null !== o) {
            if (!o.hasOwnProperty(i)) continue;
            u = o[i];
          }
          0 === e ? SC(r, n, u, a, c) : SC(r, n, u, a);
        }
        return r;
      }
      function SC(e, t, n, r, o) {
        let i;
        e.hasOwnProperty(n)
          ? (i = e[n]).push(t, r)
          : (i = e[n] = [t, r]),
          void 0 !== o && i.push(o);
      }
      function fh(e, t, n, r) {
        if (gy()) {
          const o = null === r ? null : { '': -1 },
            i = (function sF(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if ($v(t, s.selectors, !1))
                    if ((r || (r = []), cn(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()),
                          s.findHostDirectiveDefs(s, a, o),
                          r.unshift(...a, s),
                          hh(e, t, a.length);
                      } else r.unshift(s), hh(e, t, 0);
                    else
                      (o = o || new Map()),
                        s.findHostDirectiveDefs?.(s, r, o),
                        r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && MC(e, t, n, s, o, a),
            o &&
              (function aF(e, t, n) {
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
      function MC(e, t, n, r, o, i) {
        for (let u = 0; u < r.length; u++) mf(wc(n, t), e, r[u].type);
        !(function uF(e, t, n) {
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
          c = _s(e, t, r.length, null);
        for (let u = 0; u < r.length; u++) {
          const l = r[u];
          (n.mergedAttrs = Gi(n.mergedAttrs, l.hostAttrs)),
            lF(e, n, t, c, l),
            cF(c, l, o),
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
        !(function XO(e, t, n) {
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
            (c = IC(0, d.inputs, l, c, f ? f.inputs : null)),
              (u = IC(1, d.outputs, l, u, p));
            const g =
              null === c || null === s || Pd(t) ? null : hF(c, l, s);
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
      function TC(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function SR() {
            return L.lFrame.currentDirectiveIndex;
          })();
        try {
          Hr(i);
          for (let a = r; a < o; a++) {
            const c = e.data[a],
              u = t[a];
            rf(a),
              (null !== c.hostBindings ||
                0 !== c.hostVars ||
                null !== c.hostAttrs) &&
                iF(c, u);
          }
        } finally {
          Hr(-1), rf(s);
        }
      }
      function iF(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function hh(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function cF(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
              n[t.exportAs[r]] = e;
          cn(t) && (n[''] = e);
        }
      }
      function lF(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Lr(o.type)),
          s = new ts(i, cn(o), w);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function nF(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const a = ~t.index;
              (function rF(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != a && s.push(a),
                s.push(n, r, i);
            }
          })(e, t, r, _s(e, n, o.hostVars, B), o);
      }
      function Tn(e, t, n, r, o, i) {
        const s = yt(e, t);
        !(function ph(e, t, n, r, o, i, s) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const a = null == s ? U(i) : s(i, r || '', o);
            e.setAttribute(t, o, a, n);
          }
        })(t[P], s, i, e.value, n, r, o);
      }
      function fF(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s)
          for (let a = 0; a < s.length; )
            EC(r, n, s[a++], s[a++], s[a++], s[a++]);
      }
      function hF(e, t, n) {
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
      function AC(e, t, n, r) {
        return [e, !0, 0, t, null, r, null, n, null, null];
      }
      function NC(e, t) {
        const n = e.contentQueries;
        if (null !== n) {
          const r = F(null);
          try {
            for (let o = 0; o < n.length; o += 2) {
              const s = n[o + 1];
              if (-1 !== s) {
                const a = e.data[s];
                yc(n[o]), a.contentQueries(2, t[s], s);
              }
            }
          } finally {
            F(r);
          }
        }
      }
      function Zc(e, t) {
        return e[Zi] ? (e[Jv][an] = t) : (e[Zi] = t), (e[Jv] = t), t;
      }
      function gh(e, t, n) {
        yc(0);
        const r = F(null);
        try {
          t(e, n);
        } finally {
          F(r);
        }
      }
      function RC(e) {
        return (e[xo] ??= []);
      }
      function xC(e) {
        return (e.cleanup ??= []);
      }
      function Qc(e, t) {
        const n = e[$e],
          r = n ? n.get(Mn, null) : null;
        r && r.handleError(t);
      }
      function mh(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            c = n[i++];
          EC(e.data[s], t[s], r, a, c, o);
        }
      }
      function pF(e, t) {
        const n = $t(t, e),
          r = n[b];
        !(function gF(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const o = n[Me];
        null !== o && null === n[vt] && (n[vt] = Pf(o, n[$e])),
          vh(r, n, n[_e]);
      }
      function vh(e, t, n) {
        cf(t);
        try {
          const r = e.viewQuery;
          null !== r && gh(1, r, n);
          const o = e.template;
          null !== o && DC(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            t[zn]?.finishViewCreation(e),
            e.staticContentQueries && NC(e, t),
            e.staticViewQueries && gh(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function mF(e, t) {
              for (let n = 0; n < t.length; n++) pF(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0),
              (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[N] &= -5), uf();
        }
      }
      function Zo(e, t, n, r) {
        const o = F(null);
        try {
          const i = t.tView,
            c = Wc(
              e,
              i,
              n,
              4096 & e[N] ? 4096 : 16,
              null,
              t,
              null,
              null,
              r?.injector ?? null,
              r?.embeddedViewInjector ?? null,
              r?.dehydratedView ?? null,
            );
          c[jr] = e[t.index];
          const l = e[zn];
          return (
            null !== l && (c[zn] = l.createEmbeddedView(i)),
            vh(i, c, n),
            c
          );
        } finally {
          F(o);
        }
      }
      function Xr(e, t) {
        return !t || null === t.firstChild || ss(e);
      }
      function Qo(e, t, n, r = !0) {
        const o = t[b];
        if (
          ((function PO(e, t, n, r) {
            const o = Fe + r,
              i = n.length;
            r > 0 && (n[o - 1][an] = t),
              r < i - Fe
                ? ((t[an] = n[o]), Fv(n, Fe + r, t))
                : (n.push(t), (t[an] = null)),
              (t[Be] = n);
            const s = t[jr];
            null !== s && n !== s && sC(s, t);
            const a = t[zn];
            null !== a && a.insertView(e), Xd(t), (t[N] |= 128);
          })(o, t, e, n),
          r)
        ) {
          const s = ih(n, e),
            a = t[P],
            c = rh(a, e[wn]);
          null !== c &&
            (function FO(e, t, n, r, o, i) {
              (r[Me] = o), (r[it] = t), qc(e, r, n, 1, o, i);
            })(o, e[it], a, t, c, s);
        }
        const i = t[vt];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function Cs(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          if (128 === n.type) {
            n = o ? n.projectionNext : n.next;
            continue;
          }
          const i = t[n.index];
          null !== i && r.push(te(i)), ut(i) && kC(i, r);
          const s = n.type;
          if (8 & s) Cs(e, t, n.child, r);
          else if (32 & s) {
            const a = Kf(n, t);
            let c;
            for (; (c = a()); ) r.push(c);
          } else if (16 & s) {
            const a = pC(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const c = Gn(t[Te]);
              Cs(c[b], c, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      function kC(e, t) {
        for (let n = Fe; n < e.length; n++) {
          const r = e[n],
            o = r[b].firstChild;
          null !== o && Cs(r[b], r, o, t);
        }
        e[wn] !== e[Me] && t.push(e[wn]);
      }
      let PC = [];
      const CF = {
          ...q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            gc(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[Qt] = this;
          },
        },
        DF = {
          ...q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let t = Gn(e.lView);
            for (; t && !LC(t[b]); ) t = Gn(t);
            t && fy(t);
          },
          consumerOnSignalRead() {
            this.lView[Qt] = this;
          },
        };
      function LC(e) {
        return 2 !== e.type;
      }
      const wF = 100;
      function Yc(e, t = !0, n = 0) {
        const r = e[Dn],
          o = r.rendererFactory;
        o.begin?.();
        try {
          !(function bF(e, t) {
            const n = _y();
            try {
              Cy(!0), _h(e, t);
              let r = 0;
              for (; pc(e); ) {
                if (r === wF) throw new E(103, !1);
                r++, _h(e, 1);
              }
            } finally {
              Cy(n);
            }
          })(e, n);
        } catch (s) {
          throw (t && Qc(e, s), s);
        } finally {
          o.end?.(), r.inlineEffectRunner?.flush();
        }
      }
      function IF(e, t, n, r) {
        const o = t[N];
        if (!(256 & ~o)) return;
        t[Dn].inlineEffectRunner?.flush(), cf(t);
        let a = !0,
          c = null,
          u = null;
        LC(e)
          ? ((u = (function vF(e) {
              return (
                e[Qt] ??
                (function yF(e) {
                  const t = PC.pop() ?? Object.create(CF);
                  return (t.lView = e), t;
                })(e)
              );
            })(t)),
            (c = Fa(u)))
          : null ===
            (function Se() {
              return pe;
            })()
          ? ((a = !1),
            (u = (function EF(e) {
              const t = e[Qt] ?? Object.create(DF);
              return (t.lView = e), t;
            })(t)),
            (c = Fa(u)))
          : t[Qt] && (Xl(t[Qt]), (t[Qt] = null));
        try {
          dy(t),
            (function Ey(e) {
              return (L.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && DC(e, t, n, 2, r);
          const l = !(3 & ~o);
          if (l) {
            const h = e.preOrderCheckHooks;
            null !== h && Cc(t, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && Ec(t, h, 0, null), lf(t, 0);
          }
          if (
            ((function SF(e) {
              for (let t = h_(e); null !== t; t = p_(t)) {
                if (!(t[N] & fc.HasTransplantedViews)) continue;
                const n = t[Po];
                for (let r = 0; r < n.length; r++) fy(n[r]);
              }
            })(t),
            jC(t, 0),
            null !== e.contentQueries && NC(e, t),
            l)
          ) {
            const h = e.contentCheckHooks;
            null !== h && Cc(t, h);
          } else {
            const h = e.contentHooks;
            null !== h && Ec(t, h, 1), lf(t, 1);
          }
          !(function zO(e, t) {
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
                    IR(s, i), a(2, t[i]);
                  }
                }
              } finally {
                Hr(-1);
              }
          })(e, t);
          const d = e.components;
          null !== d && BC(t, d, 0);
          const f = e.viewQuery;
          if ((null !== f && gh(2, f, r), l)) {
            const h = e.viewCheckHooks;
            null !== h && Cc(t, h);
          } else {
            const h = e.viewHooks;
            null !== h && Ec(t, h, 2), lf(t, 2);
          }
          if (
            (!0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            t[lc])
          ) {
            for (const h of t[lc]) h();
            t[lc] = null;
          }
          t[N] &= -73;
        } catch (l) {
          throw (gc(t), l);
        } finally {
          null !== u &&
            (Yl(u, c),
            a &&
              (function _F(e) {
                e.lView[Qt] !== e && ((e.lView = null), PC.push(e));
              })(u)),
            uf();
        }
      }
      function jC(e, t) {
        for (let n = h_(e); null !== n; n = p_(n))
          for (let r = Fe; r < n.length; r++) UC(n[r], t);
      }
      function MF(e, t, n) {
        UC($t(t, e), n);
      }
      function UC(e, t) {
        Kd(e) && _h(e, t);
      }
      function _h(e, t) {
        const r = e[b],
          o = e[N],
          i = e[Qt];
        let s = !!(0 === t && 16 & o);
        if (
          ((s ||= !!(64 & o && 0 === t)),
          (s ||= !!(1024 & o)),
          (s ||= !(!i?.dirty || !Kl(i))),
          (s ||= !1),
          i && (i.dirty = !1),
          (e[N] &= -9217),
          s)
        )
          IF(r, e, r.template, e[_e]);
        else if (8192 & o) {
          jC(e, 1);
          const a = r.components;
          null !== a && BC(e, a, 1);
        }
      }
      function BC(e, t, n) {
        for (let r = 0; r < t.length; r++) MF(e, t[r], n);
      }
      function Es(e, t) {
        const n = _y() ? 64 : 1088;
        for (e[Dn].changeDetectionScheduler?.notify(t); e; ) {
          e[N] |= n;
          const r = Gn(e);
          if (Yi(e) && !r) return e;
          e = r;
        }
        return null;
      }
      class Ds {
        get rootNodes() {
          const t = this._lView,
            n = t[b];
          return Cs(n, t, n.firstChild, []);
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
          return !(256 & ~this._lView[N]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Be];
            if (ut(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (vs(t, r), ec(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          zc(this._lView[b], this._lView);
        }
        onDestroy(t) {
          mc(this._lView, t);
        }
        markForCheck() {
          Es(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[N] &= -129;
        }
        reattach() {
          Xd(this._lView), (this._lView[N] |= 128);
        }
        detectChanges() {
          (this._lView[N] |= 1024),
            Yc(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new E(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null;
          const t = Yi(this._lView),
            n = this._lView[jr];
          null !== n && !t && eh(n, this._lView),
            iC(this._lView[b], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new E(902, !1);
          this._appRef = t;
          const n = Yi(this._lView),
            r = this._lView[jr];
          null !== r && !n && sC(r, this._lView), Xd(this._lView);
        }
      }
      let Yn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = NF);
        }
        return e;
      })();
      const TF = Yn,
        AF = class extends TF {
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
            return new Ds(o);
          }
        };
      function NF() {
        return Kc(fe(), v());
      }
      function Kc(e, t) {
        return 4 & e.type ? new AF(t, e, Uo(e, t)) : null;
      }
      let cE = () => null;
      function eo(e, t) {
        return cE(e, t);
      }
      class Ko {}
      const Ns = new D('', { providedIn: 'root', factory: () => !1 }),
        uE = new D(''),
        Nh = new D('');
      class w1 {}
      class lE {}
      class I1 {
        resolveComponentFactory(t) {
          throw (function b1(e) {
            const t = Error(
              `No component factory found for ${We(e)}.`,
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      class ru {
        static #e = (this.NULL = new I1());
      }
      class Rh {}
      let Kn = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function S1() {
                const e = v(),
                  n = $t(fe().index, e);
                return (Ye(n) ? n : e)[P];
              })());
          }
          return e;
        })(),
        M1 = (() => {
          class e {
            static #e = (this.ɵprov = S({
              token: e,
              providedIn: 'root',
              factory: () => null,
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
              ? (o = vd(o, a))
              : 2 == i && (r = vd(r, a + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class pE extends ru {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = W(t);
          return new Os(n, this.ngModule);
        }
      }
      function gE(e, t) {
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
                  isSignal: !!((i ? o[1] : ur.None) & ur.SignalBased),
                }
              : { propName: s, templateName: r },
          );
        }
        return n;
      }
      class Os extends lE {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = gE(t.inputs, !0);
          if (null !== n)
            for (const o of r)
              n.hasOwnProperty(o.propName) &&
                (o.transform = n[o.propName]);
          return r;
        }
        get outputs() {
          return gE(this.componentDef.outputs, !1);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function PN(e) {
              return e.map(kN).join(',');
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
              (o = o || this.ngModule) instanceof Bt
                ? o
                : o?.injector;
            s &&
              null !== this.componentDef.getStandaloneInjector &&
              (s = this.componentDef.getStandaloneInjector(s) || s);
            const a = s ? new zr(t, s) : t,
              c = a.get(Rh, null);
            if (null === c) throw new E(407, !1);
            const d = {
                rendererFactory: c,
                sanitizer: a.get(M1, null),
                inlineEffectRunner: null,
                changeDetectionScheduler: a.get(Ko, null),
              },
              f = c.createRenderer(null, this.componentDef),
              h = this.componentDef.selectors[0][0] || 'div',
              p = r
                ? (function qO(e, t, n, r) {
                    const i = r.get(O_, !1) || n === on.ShadowDom,
                      s = e.selectRootElement(t, i);
                    return (
                      (function WO(e) {
                        bC(e);
                      })(s),
                      s
                    );
                  })(f, r, this.componentDef.encapsulation, a)
                : Hc(
                    f,
                    h,
                    (function N1(e) {
                      const t = e.toLowerCase();
                      return 'svg' === t
                        ? 'svg'
                        : 'math' === t
                        ? 'math'
                        : null;
                    })(h),
                  );
            let g = 512;
            this.componentDef.signals
              ? (g |= 4096)
              : this.componentDef.onPush || (g |= 16);
            let y = null;
            null !== p && (y = Pf(p, a, !0));
            const C = dh(
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
              m = Wc(null, C, null, g, null, null, d, f, a, null, y);
            cf(m);
            let T,
              $,
              J = null;
            try {
              const Ie = this.componentDef;
              let Ft,
                Vi = null;
              Ie.findHostDirectiveDefs
                ? ((Ft = []),
                  (Vi = new Map()),
                  Ie.findHostDirectiveDefs(Ie, Ft, Vi),
                  Ft.push(Ie))
                : (Ft = [Ie]);
              const FT = (function x1(e, t) {
                const n = e[b],
                  r = M;
                return (e[r] = t), Kr(n, r, 2, '#host', null);
              })(m, p);
              (J = (function O1(e, t, n, r, o, i, s) {
                const a = o[b];
                !(function F1(e, t, n, r) {
                  for (const o of e)
                    t.mergedAttrs = Gi(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs &&
                    (iu(t, t.mergedAttrs, !0),
                    null !== n && yC(r, n, t));
                })(r, e, t, s);
                let c = null;
                null !== t && (c = Pf(t, o[$e]));
                const u = i.rendererFactory.createRenderer(t, n);
                let l = 16;
                n.signals ? (l = 4096) : n.onPush && (l = 64);
                const d = Wc(
                  o,
                  wC(n),
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
                  a.firstCreatePass && hh(a, e, r.length - 1),
                  Zc(o, d),
                  (o[e.index] = d)
                );
              })(FT, p, Ie, Ft, m, d, f)),
                ($ = Xi(C, M)),
                p &&
                  (function P1(e, t, n, r) {
                    if (r) kd(e, n, ['ng-version', '18.2.4']);
                    else {
                      const { attrs: o, classes: i } = (function LN(
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
                            if (!sn(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: t, classes: n };
                      })(t.selectors[0]);
                      o && kd(e, n, o),
                        i && i.length > 0 && vC(e, n, i.join(' '));
                    }
                  })(f, Ie, p, r),
                void 0 !== n &&
                  (function L1(e, t, n) {
                    const r = (e.projection = []);
                    for (let o = 0; o < t.length; o++) {
                      const i = n[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })($, this.ngContentSelectors, n),
                (T = (function k1(e, t, n, r, o, i) {
                  const s = fe(),
                    a = o[b],
                    c = yt(s, o);
                  MC(a, o, s, n, null, r);
                  for (let l = 0; l < n.length; l++)
                    lt(Gr(o, a, s.directiveStart + l, s), o);
                  TC(a, o, s), c && lt(c, o);
                  const u = Gr(
                    o,
                    a,
                    s.directiveStart + s.componentOffset,
                    s,
                  );
                  if (((e[_e] = o[_e] = u), null !== i))
                    for (const l of i) l(u, t);
                  return ch(a, s, o), u;
                })(J, Ie, Ft, Vi, m, [V1])),
                vh(C, m, null);
            } catch (Ie) {
              throw (null !== J && Mf(J), Mf(m), Ie);
            } finally {
              uf();
            }
            return new R1(this.componentType, T, Uo($, m), m, $);
          } finally {
            F(i);
          }
        }
      }
      class R1 extends w1 {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef =
              new Ds(o, void 0, !1)),
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
            mh(i[b], i, o, t, n),
              this.previousInputValues.set(t, n),
              Es($t(this._tNode.index, i), 1);
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
      function V1() {
        const e = fe();
        _c(v()[b], e);
      }
      let hn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = j1);
        }
        return e;
      })();
      function j1() {
        return yE(fe(), v());
      }
      const U1 = hn,
        mE = class extends U1 {
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
            const t = bc(this._hostTNode, this._hostLView);
            if (hf(t)) {
              const n = rs(t, this._hostLView),
                r = ns(t);
              return new Ke(n[b].data[r + 8], n);
            }
            return new Ke(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = vE(this._lContainer);
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
              !(function Wi(e) {
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
            const c = s ? t : new Os(W(t)),
              u = r || this.parentInjector;
            if (!i && null == c.ngModule) {
              const g = (s ? u : this.parentInjector).get(Bt, null);
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
              (function gR(e) {
                return ut(e[Be]);
              })(o)
            ) {
              const a = this.indexOf(t);
              if (-1 !== a) this.detach(a);
              else {
                const c = o[Be],
                  u = new mE(c, c[it], c[Be]);
                u.detach(u.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            return (
              Qo(s, o, i, r),
              t.attachToViewContainerRef(),
              Fv(Fh(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = vE(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = vs(this._lContainer, n);
            r && (ec(Fh(this._lContainer), n), zc(r[b], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = vs(this._lContainer, n);
            return r && null != ec(Fh(this._lContainer), n)
              ? new Ds(r)
              : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function vE(e) {
        return e[8];
      }
      function Fh(e) {
        return e[8] || (e[8] = []);
      }
      function yE(e, t) {
        let n;
        const r = t[e.index];
        return (
          ut(r)
            ? (n = r)
            : ((n = AC(r, t, null, e)), (t[e.index] = n), Zc(t, n)),
          _E(n, t, e, r),
          new mE(n, e, t)
        );
      }
      let _E = function EE(e, t, n, r) {
          if (e[wn]) return;
          let o;
          (o =
            8 & n.type
              ? te(r)
              : (function B1(e, t) {
                  const n = e[P],
                    r = n.createComment(''),
                    o = yt(t, e);
                  return (
                    Qr(
                      n,
                      rh(n, o),
                      r,
                      (function jO(e, t) {
                        return e.nextSibling(t);
                      })(n, o),
                      !1,
                    ),
                    r
                  );
                })(t, n)),
            (e[wn] = o);
        },
        kh = () => !1;
      class Ph {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Ph(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Lh {
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
            return new Lh(o);
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
            null !== $h(t, n).matches && this.queries[n].setDirty();
        }
      }
      class DE {
        constructor(t, n, r = null) {
          (this.flags = n),
            (this.read = r),
            (this.predicate =
              'string' == typeof t
                ? (function Q1(e) {
                    return e.split(',').map(t => t.trim());
                  })(t)
                : t);
        }
      }
      class Vh {
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
          return null !== n ? new Vh(n) : null;
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
      class jh {
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
              new jh(this.metadata))
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
              this.matchTNodeWithReadOption(t, n, G1(n, i)),
                this.matchTNodeWithReadOption(
                  t,
                  n,
                  Ic(n, t, i, !1, !1),
                );
            }
          else
            r === Yn
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(
                  t,
                  n,
                  Ic(n, t, r, !1, !1),
                );
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === Ht || o === hn || (o === Yn && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Ic(n, t, o, !1, !1);
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
      function G1(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2)
            if (n[r] === t) return n[r + 1];
        return null;
      }
      function W1(e, t, n, r) {
        return -1 === n
          ? (function q1(e, t) {
              return 11 & e.type
                ? Uo(e, t)
                : 4 & e.type
                ? Kc(e, t)
                : null;
            })(t, e)
          : -2 === n
          ? (function Z1(e, t, n) {
              return n === Ht
                ? Uo(t, e)
                : n === Yn
                ? Kc(t, e)
                : n === hn
                ? yE(t, e)
                : void 0;
            })(e, t, r)
          : Gr(e, e[b], n, t);
      }
      function wE(e, t, n, r) {
        const o = t[zn].queries[r];
        if (null === o.matches) {
          const i = e.data,
            s = n.matches,
            a = [];
          for (let c = 0; null !== s && c < s.length; c += 2) {
            const u = s[c];
            a.push(
              u < 0 ? null : W1(t, i[u], s[c + 1], n.metadata.read),
            );
          }
          o.matches = a;
        }
        return o.matches;
      }
      function Uh(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = wE(e, t, o, n);
          for (let a = 0; a < i.length; a += 2) {
            const c = i[a];
            if (c > 0) r.push(s[a / 2]);
            else {
              const u = i[a + 1],
                l = t[-c];
              for (let d = Fe; d < l.length; d++) {
                const f = l[d];
                f[jr] === f[Be] && Uh(f[b], f, u, r);
              }
              if (null !== l[Po]) {
                const d = l[Po];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  Uh(h[b], h, u, r);
                }
              }
            }
          }
        }
        return r;
      }
      function IE(e, t, n) {
        const r = G();
        return (
          r.firstCreatePass &&
            ((function ME(e, t, n) {
              null === e.queries && (e.queries = new Vh()),
                e.queries.track(new jh(t, n));
            })(r, new DE(e, t, n), -1),
            !(2 & ~t) && (r.staticViewQueries = !0)),
          (function bE(e, t, n) {
            const r = new bf(!(4 & ~n));
            return (
              (function YO(e, t, n, r) {
                const o = RC(t);
                o.push(n),
                  e.firstCreatePass && xC(e).push(r, o.length - 1);
              })(e, t, r, r.destroy),
              (t[zn] ??= new Lh()).queries.push(new Ph(r)) - 1
            );
          })(r, v(), t)
        );
      }
      function $h(e, t) {
        return e.queries.getByIndex(t);
      }
      function TE(e, t) {
        const n = e[b],
          r = $h(n, t);
        return r.crossesNgTemplate ? Uh(n, e, t, []) : wE(n, e, r, t);
      }
      const AE = new Set();
      function Ct(e) {
        AE.has(e) ||
          (AE.add(e),
          performance?.mark?.('mark_feature_usage', {
            detail: { feature: e },
          }));
      }
      function _r(e, t) {
        Ct('NgSignals');
        const n = (function UT(e) {
            const t = Object.create($T);
            t.value = e;
            const n = () => (tt(t), t.value);
            return (n[xe] = t), n;
          })(e),
          r = n[xe];
        return (
          t?.equal && (r.equal = t.equal),
          (n.set = o => Gm(r, o)),
          (n.update = o =>
            (function BT(e, t) {
              Vm() || zm(), Gm(e, t(e.value));
            })(r, o)),
          (n.asReadonly = RE.bind(n)),
          n
        );
      }
      function RE() {
        const e = this[xe];
        if (void 0 === e.readonlyFn) {
          const t = () => this();
          (t[xe] = e), (e.readonlyFn = t);
        }
        return e.readonlyFn;
      }
      function he(e) {
        let t = (function HE(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (cn(e)) o = t.ɵcmp || t.ɵdir;
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
              a && lk(e, a);
              const c = o.viewQuery,
                u = o.contentQueries;
              if (
                (c && ck(e, c),
                u && uk(e, u),
                sk(e, o),
                rN(e.outputs, o.outputs),
                cn(o) && o.data.animation)
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
        !(function ak(e) {
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
      function sk(e, t) {
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
        return e === En ? {} : e === ee ? [] : e;
      }
      function ck(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function uk(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function lk(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function WE(e) {
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
      class ZE {}
      class zh extends to {
        constructor(t, n, r, o = !0) {
          super(),
            (this.ngModuleType = t),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new pE(this));
          const i = ct(t);
          (this._bootstrapComponents = zt(i.bootstrap)),
            (this._r3Injector = Zy(
              t,
              n,
              [
                { provide: to, useValue: this },
                {
                  provide: ru,
                  useValue: this.componentFactoryResolver,
                },
                ...r,
              ],
              We(t),
              new Set(['environment']),
            )),
            o && this.resolveInjectorInitializers();
        }
        resolveInjectorInitializers() {
          this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(this.ngModuleType));
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
      class Gh extends ZE {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new zh(this.moduleType, t, []);
        }
      }
      class QE extends to {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new pE(this)),
            (this.instance = null);
          const n = new Ao(
            [
              ...t.providers,
              { provide: to, useValue: this },
              {
                provide: ru,
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
      function qh(e, t, n = null) {
        return new QE({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function cu(e) {
        return (
          !!Wh(e) &&
          (Array.isArray(e) ||
            (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function Wh(e) {
        return (
          null !== e &&
          ('function' == typeof e || 'object' == typeof e)
        );
      }
      function ke(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ps(e, t, n, r, o, i, s, a, c, u) {
        const l = n + M,
          d = t.firstCreatePass
            ? (function Dk(e, t, n, r, o, i, s, a, c) {
                const u = t.consts,
                  l = Kr(t, e, 4, s || null, a || null);
                fh(t, n, l, Kt(u, c)), _c(t, l);
                const d = (l.tView = dh(
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
        dn(d, !1);
        const f = YE(t, e, d, n);
        es() && Gc(t, e, f, d), lt(f, e);
        const h = AC(f, e, f, d);
        return (
          (e[l] = h),
          Zc(e, h),
          (function CE(e, t, n) {
            return kh(e, t, n);
          })(h, d, e),
          hc(d) && uh(t, e, d),
          null != c && lh(e, d, u),
          d
        );
      }
      function Xn(e, t, n, r, o, i, s, a) {
        const c = v(),
          u = G();
        return Ps(c, u, e, t, n, r, o, Kt(u.consts, i), s, a), Xn;
      }
      let YE = function KE(e, t, n, r) {
        return In(!0), t[P].createComment('');
      };
      var ti = (function (e) {
        return (
          (e[(e.EarlyRead = 0)] = 'EarlyRead'),
          (e[(e.Write = 1)] = 'Write'),
          (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
          (e[(e.Read = 3)] = 'Read'),
          e
        );
      })(ti || {});
      let rD = (() => {
        class e {
          constructor() {
            this.impl = null;
          }
          execute() {
            this.impl?.execute();
          }
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      class js {
        constructor() {
          (this.ngZone = _(le)),
            (this.scheduler = _(Ko)),
            (this.errorHandler = _(Mn, { optional: !0 })),
            (this.sequences = new Set()),
            (this.deferredRegistrations = new Set()),
            (this.executing = !1);
        }
        static #e = (this.PHASES = [
          ti.EarlyRead,
          ti.Write,
          ti.MixedReadWrite,
          ti.Read,
        ]);
        execute() {
          this.executing = !0;
          for (const t of js.PHASES)
            for (const n of this.sequences)
              if (!n.erroredOrDestroyed && n.hooks[t])
                try {
                  n.pipelinedValue = this.ngZone.runOutsideAngular(
                    () => n.hooks[t](n.pipelinedValue),
                  );
                } catch (r) {
                  (n.erroredOrDestroyed = !0),
                    this.errorHandler?.handleError(r);
                }
          this.executing = !1;
          for (const t of this.sequences)
            t.afterRun(), t.once && this.sequences.delete(t);
          for (const t of this.deferredRegistrations)
            this.sequences.add(t);
          this.deferredRegistrations.size > 0 &&
            this.scheduler.notify(7),
            this.deferredRegistrations.clear();
        }
        register(t) {
          this.executing
            ? this.deferredRegistrations.add(t)
            : (this.sequences.add(t), this.scheduler.notify(6));
        }
        unregister(t) {
          this.executing && this.sequences.has(t)
            ? ((t.erroredOrDestroyed = !0),
              (t.pipelinedValue = void 0),
              (t.once = !0))
            : (this.sequences.delete(t),
              this.deferredRegistrations.delete(t));
        }
        static #t = (this.ɵprov = S({
          token: js,
          providedIn: 'root',
          factory: () => new js(),
        }));
      }
      function Nn(e, t, n, r) {
        const o = v();
        return ke(o, fn(), t) && (G(), Tn(Ce(), o, e, t, n, r)), Nn;
      }
      function gu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Er(e) {
        return (e >> 17) & 32767;
      }
      function ip(e) {
        return 2 | e;
      }
      function oo(e) {
        return (131068 & e) >> 2;
      }
      function sp(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function ap(e) {
        return 1 | e;
      }
      function RD(e, t, n, r) {
        const o = e[n + 1],
          i = null === t;
        let s = r ? Er(o) : oo(o),
          a = !1;
        for (; 0 !== s && (!1 === a || i); ) {
          const u = e[s + 1];
          lP(e[s], t) && ((a = !0), (e[s + 1] = r ? ap(u) : ip(u))),
            (s = r ? Er(u) : oo(u));
        }
        a && (e[n + 1] = r ? ip(o) : ap(o));
      }
      function lP(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) &&
            Mo(e, t) >= 0)
        );
      }
      function R(e, t, n) {
        const r = v();
        return (
          ke(r, fn(), t) &&
            (function xt(e, t, n, r, o, i, s, a) {
              const c = yt(t, n);
              let l,
                u = t.inputs;
              !a && null != u && (l = u[r])
                ? (mh(e, n, l, r, o),
                  Ur(t) &&
                    (function eF(e, t) {
                      const n = $t(t, e);
                      16 & n[N] || (n[N] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function JO(e) {
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
          R
        );
      }
      function cp(e, t, n, r, o) {
        const s = o ? 'class' : 'style';
        mh(e, n, t.inputs[s], s, r);
      }
      function Dr(e, t, n) {
        return pn(e, t, n, !1), Dr;
      }
      function mu(e, t) {
        return pn(e, t, null, !0), mu;
      }
      function pn(e, t, n, r) {
        const o = v(),
          i = G(),
          s = (function Wn(e) {
            const t = L.lFrame,
              n = t.bindingIndex;
            return (t.bindingIndex = t.bindingIndex + e), n;
          })(2);
        i.firstUpdatePass &&
          (function jD(e, t, n, r) {
            const o = e.data;
            if (null === o[n + 1]) {
              const i = o[st()],
                s = (function VD(e, t) {
                  return t >= e.expandoStartIndex;
                })(e, n);
              (function HD(e, t) {
                return !!(e.flags & (t ? 8 : 16));
              })(i, r) &&
                null === t &&
                !s &&
                (t = !1),
                (t = (function _P(e, t, n, r) {
                  const o = (function sf(e) {
                    const t = L.lFrame.currentDirectiveIndex;
                    return -1 === t ? null : e[t];
                  })(e);
                  let i = r ? t.residualClasses : t.residualStyles;
                  if (null === o)
                    0 === (r ? t.classBindings : t.styleBindings) &&
                      ((n = Bs(
                        (n = up(null, e, t, n, r)),
                        t.attrs,
                        r,
                      )),
                      (i = null));
                  else {
                    const s = t.directiveStylingLast;
                    if (-1 === s || e[s] !== o)
                      if (((n = up(o, e, t, n, r)), null === i)) {
                        let c = (function CP(e, t, n) {
                          const r = n
                            ? t.classBindings
                            : t.styleBindings;
                          if (0 !== oo(r)) return e[Er(r)];
                        })(e, t, r);
                        void 0 !== c &&
                          Array.isArray(c) &&
                          ((c = up(null, e, t, c[1], r)),
                          (c = Bs(c, t.attrs, r)),
                          (function EP(e, t, n, r) {
                            e[
                              Er(
                                n ? t.classBindings : t.styleBindings,
                              )
                            ] = r;
                          })(e, t, r, c));
                      } else
                        i = (function DP(e, t, n) {
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
                (function cP(e, t, n, r, o, i) {
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
                        0 !== f && (e[f + 1] = sp(e[f + 1], r)),
                        (e[a + 1] = (function sP(e, t) {
                          return (131071 & e) | (t << 17);
                        })(e[a + 1], r));
                    } else
                      (e[r + 1] = gu(a, 0)),
                        0 !== a && (e[a + 1] = sp(e[a + 1], r)),
                        (a = r);
                  else
                    (e[r + 1] = gu(c, 0)),
                      0 === a
                        ? (a = r)
                        : (e[c + 1] = sp(e[c + 1], r)),
                      (c = r);
                  u && (e[r + 1] = ip(e[r + 1])),
                    RD(e, l, r, !0),
                    RD(e, l, r, !1),
                    (function uP(e, t, n, r, o) {
                      const i = o
                        ? e.residualClasses
                        : e.residualStyles;
                      null != i &&
                        'string' == typeof t &&
                        Mo(i, t) >= 0 &&
                        (n[r + 1] = ap(n[r + 1]));
                    })(t, l, e, r, i),
                    (s = gu(a, c)),
                    i ? (t.classBindings = s) : (t.styleBindings = s);
                })(o, i, t, n, s, r);
            }
          })(i, e, s, r),
          t !== B &&
            ke(o, s, t) &&
            (function BD(e, t, n, r, o, i, s, a) {
              if (!(3 & t.type)) return;
              const c = e.data,
                u = c[a + 1],
                l = (function aP(e) {
                  return !(1 & ~e);
                })(u)
                  ? $D(c, t, n, o, oo(u), s)
                  : void 0;
              vu(l) ||
                (vu(i) ||
                  ((function iP(e) {
                    return !(2 & ~e);
                  })(u) &&
                    (i = $D(c, null, n, o, a, s))),
                (function $O(e, t, n, r, o) {
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
                })(r, s, Ki(st(), n), o, i));
            })(
              i,
              i.data[st()],
              o,
              o[P],
              e,
              (o[s + 1] = (function SP(e, t) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof t
                      ? (e += t)
                      : 'object' == typeof e && (e = We(gr(e)))),
                  e
                );
              })(t, n)),
              r,
              s,
            );
      }
      function up(e, t, n, r, o) {
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
                jt(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function $D(e, t, n, r, o, i) {
        const s = null === t;
        let a;
        for (; o > 0; ) {
          const c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = null === l;
          let f = n[o + 1];
          f === B && (f = d ? ee : void 0);
          let h = d ? Od(f, r) : l === r ? f : void 0;
          if ((u && !vu(h) && (h = Od(c, r)), vu(h) && ((a = h), s)))
            return a;
          const p = e[o + 1];
          o = s ? Er(p) : oo(p);
        }
        if (null !== t) {
          let c = i ? t.residualClasses : t.residualStyles;
          null != c && (a = Od(c, r));
        }
        return a;
      }
      function vu(e) {
        return void 0 !== e;
      }
      function Z(e, t, n, r) {
        const o = v(),
          i = G(),
          s = M + e,
          a = o[P],
          c = i.firstCreatePass
            ? (function QP(e, t, n, r, o, i) {
                const s = t.consts,
                  c = Kr(t, e, 2, r, Kt(s, o));
                return (
                  fh(t, n, c, Kt(s, i)),
                  null !== c.attrs && iu(c, c.attrs, !1),
                  null !== c.mergedAttrs && iu(c, c.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          u = WD(i, o, c, a, t, e);
        o[s] = u;
        const l = hc(c);
        return (
          dn(c, !0),
          yC(a, u, c),
          !(function Jo(e) {
            return !(32 & ~e.flags);
          })(c) &&
            es() &&
            Gc(i, o, u, c),
          0 ===
            (function mR() {
              return L.lFrame.elementDepthCount;
            })() && lt(u, o),
          (function vR() {
            L.lFrame.elementDepthCount++;
          })(),
          l && (uh(i, o, c), ch(i, c, o)),
          null !== r && lh(o, c),
          Z
        );
      }
      function Q() {
        let e = fe();
        tf() ? nf() : ((e = e.parent), dn(e, !1));
        const t = e;
        (function _R(e) {
          return L.skipHydrationRootTNode === e;
        })(t) &&
          (function wR() {
            L.skipHydrationRootTNode = null;
          })(),
          (function yR() {
            L.lFrame.elementDepthCount--;
          })();
        const n = G();
        return (
          n.firstCreatePass &&
            (_c(n, e), qd(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function PR(e) {
              return !!(8 & e.flags);
            })(t) &&
            cp(n, t, v(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function LR(e) {
              return !!(16 & e.flags);
            })(t) &&
            cp(n, t, v(), t.stylesWithoutHost, !1),
          Q
        );
      }
      function He(e, t, n, r) {
        return Z(e, t, n, r), Q(), He;
      }
      let WD = (e, t, n, r, o, i) => (
        In(!0),
        Hc(
          r,
          o,
          (function Ty() {
            return L.lFrame.currentNamespace;
          })(),
        )
      );
      function Ve(e, t, n) {
        const r = v(),
          o = G(),
          i = e + M,
          s = o.firstCreatePass
            ? (function XP(e, t, n, r, o) {
                const i = t.consts,
                  s = Kt(i, r),
                  a = Kr(t, e, 8, 'ng-container', s);
                return (
                  null !== s && iu(a, s, !0),
                  fh(t, n, a, Kt(i, o)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(i, o, r, t, n)
            : o.data[i];
        dn(s, !0);
        const a = QD(o, r, s, e);
        return (
          (r[i] = a),
          es() && Gc(o, r, a, s),
          lt(a, r),
          hc(s) && (uh(o, r, s), ch(o, s, r)),
          null != n && lh(r, s),
          Ve
        );
      }
      function je() {
        let e = fe();
        const t = G();
        return (
          tf() ? nf() : ((e = e.parent), dn(e, !1)),
          t.firstCreatePass &&
            (_c(t, e), qd(e) && t.queries.elementEnd(e)),
          je
        );
      }
      let QD = (e, t, n, r) => (In(!0), Jf(t[P], ''));
      function On() {
        return v();
      }
      const _u = 'en-US';
      let ew = _u,
        yw = (e, t, n) => {};
      function ne(e, t, n, r) {
        const o = v(),
          i = G(),
          s = fe();
        return (
          (function gp(e, t, n, r, o, i, s) {
            const a = hc(r),
              u = e.firstCreatePass && xC(e),
              l = t[_e],
              d = RC(t);
            let f = !0;
            if (3 & r.type || s) {
              const g = yt(r, t),
                y = s ? s(g) : g,
                C = d.length,
                m = s ? $ => s(te($[r.index])) : r.index;
              let T = null;
              if (
                (!s &&
                  a &&
                  (T = (function GL(e, t, n, r) {
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
                null !== T)
              )
                ((T.__ngLastListenerFn__ || T).__ngNextListenerFn__ =
                  i),
                  (T.__ngLastListenerFn__ = i),
                  (f = !1);
              else {
                (i = Dw(r, t, l, i)), yw(g, o, i);
                const $ = n.listen(y, o, i);
                d.push(i, $), u && u.push(o, m, C, C + 1);
              }
            } else i = Dw(r, t, l, i);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
              const g = p.length;
              if (g)
                for (let y = 0; y < g; y += 2) {
                  const J = t[p[y]][p[y + 1]].subscribe(i),
                    Ie = d.length;
                  d.push(i, J),
                    u && u.push(o, r.index, Ie, -(Ie + 1));
                }
            }
          })(i, o, o[P], s, e, t, r),
          ne
        );
      }
      function Ew(e, t, n, r) {
        const o = F(null);
        try {
          return bn(6, t, n), !1 !== n(r);
        } catch (i) {
          return Qc(e, i), !1;
        } finally {
          bn(7, t, n), F(o);
        }
      }
      function Dw(e, t, n, r) {
        return function o(i) {
          if (i === Function) return r;
          Es(e.componentOffset > -1 ? $t(e.index, t) : t, 5);
          let a = Ew(t, n, r, i),
            c = o.__ngNextListenerFn__;
          for (; c; )
            (a = Ew(t, n, c, i) && a), (c = c.__ngNextListenerFn__);
          return a;
        };
      }
      function ae(e = 1) {
        return (function TR(e) {
          return (L.lFrame.contextLView = (function hy(e, t) {
            for (; e > 0; ) (t = t[Oo]), e--;
            return t;
          })(e, L.lFrame.contextLView))[_e];
        })(e);
      }
      function qL(e, t) {
        let n = null;
        const r = (function RN(e) {
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
            if (null === r ? $v(e, i, !0) : FN(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function Ws(e) {
        const t = v()[Te][it];
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
              const s = e ? qL(i, e) : 0;
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
        null !== c && Ps(s, a, c, r, o, i, null, n);
        const u = Kr(a, M + e, 16, null, n || null);
        null === u.projection && (u.projection = t), nf();
        const d = !s[vt] || $r();
        null === s[Te][it].projection[u.projection] && null !== c
          ? (function WL(e, t, n) {
              const r = M + n,
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
            (function UO(e, t, n) {
              mC(
                t[P],
                0,
                t,
                n,
                nh(e, n, t),
                lC(n.parent || t[it], n, t),
              );
            })(a, s, u);
      }
      function yp() {
        return (function Bh(e, t) {
          return e[zn].queries[t].queryList;
        })(v(), af());
      }
      function Jt(e, t = '') {
        const n = v(),
          r = G(),
          o = e + M,
          i = r.firstCreatePass ? Kr(r, o, 1, t, null) : r.data[o],
          s = Hw(r, n, i, t, e);
        (n[o] = s), es() && Gc(r, n, s, i), dn(i, !1);
      }
      let Hw = (e, t, n, r, o) => (
        In(!0),
        (function Xf(e, t) {
          return e.createText(t);
        })(t[P], r)
      );
      function wr(e, t, n) {
        const r = v(),
          o = (function ci(e, t, n, r) {
            return ke(e, fn(), n) ? t + U(n) + r : B;
          })(r, e, t, n);
        return (
          o !== B &&
            (function Qn(e, t, n) {
              const r = Ki(t, e);
              !(function oC(e, t, n) {
                e.setValue(t, n);
              })(e[P], r, n);
            })(r, st(), o),
          wr
        );
      }
      function Cp(e, t, n, r, o) {
        if (((e = k(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Cp(e[i], t, n, r, o);
        else {
          const i = G(),
            s = v(),
            a = fe();
          let c = Vr(e) ? e : k(e.provide);
          const u = Yv(e),
            l = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
          if (Vr(e) || !e.multi) {
            const h = new ts(u, o, w),
              p = Dp(c, t, o ? l : l + f, d);
            -1 === p
              ? (mf(wc(a, s), i, c),
                Ep(i, e, t.length),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(h),
                s.push(h))
              : ((n[p] = h), (s[p] = h));
          } else {
            const h = Dp(c, t, l + f, d),
              p = Dp(c, t, l, l + f),
              y = p >= 0 && n[p];
            if ((o && !y) || (!o && !(h >= 0 && n[h]))) {
              mf(wc(a, s), i, c);
              const C = (function gV(e, t, n, r, o) {
                const i = new ts(e, n, w);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  rb(i, o, r && !n),
                  i
                );
              })(o ? pV : hV, n.length, o, r, u);
              !o && y && (n[p].providerFactory = C),
                Ep(i, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(C),
                s.push(C);
            } else
              Ep(i, e, h > -1 ? h : p, rb(n[o ? p : h], u, !o && r));
            !o && r && y && n[p].componentProviders++;
          }
        }
      }
      function Ep(e, t, n, r) {
        const o = Vr(t),
          i = (function zN(e) {
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
      function rb(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Dp(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function hV(e, t, n, r) {
        return wp(this.multi, []);
      }
      function pV(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = Gr(n, n[b], this.providerFactory.index, r);
          (i = a.slice(0, s)), wp(o, i);
          for (let c = s; c < a.length; c++) i.push(a[c]);
        } else (i = []), wp(o, i);
        return i;
      }
      function wp(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Ae(e, t = []) {
        return n => {
          n.providersResolver = (r, o) =>
            (function fV(e, t, n) {
              const r = G();
              if (r.firstCreatePass) {
                const o = cn(e);
                Cp(n, r.data, r.blueprint, o, !0),
                  Cp(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      let mV = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
              const r = Ld(0, n.type),
                o =
                  r.length > 0
                    ? qh(
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
            factory: () => new e(A(Bt)),
          }));
        }
        return e;
      })();
      function ie(e) {
        Ct('NgStandalone'),
          (e.getStandaloneInjector = t =>
            t.get(mV).getOrCreateStandaloneInjector(e));
      }
      let Sb = (() => {
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
      const Rb = new D('');
      function ea(e) {
        return !!e && 'function' == typeof e.then;
      }
      function xb(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const x2 = new D('');
      let Ob = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((n, r) => {
                (this.resolve = n), (this.reject = r);
              })),
              (this.appInits = _(x2, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [];
            for (const o of this.appInits) {
              const i = o();
              if (ea(i)) n.push(i);
              else if (xb(i)) {
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
      const Tu = new D('');
      let Fn = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = _(dx)),
              (this.afterRenderManager = _(rD)),
              (this.zonelessEnabled = _(Ns)),
              (this.dirtyFlags = 0),
              (this.deferredDirtyFlags = 0),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new Mt()),
              (this.afterTick = new Mt()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = _(Wr).hasPendingTasks.pipe(
                re(n => !n),
              )),
              (this._injector = _(Bt));
          }
          get allViews() {
            return [...this.externalTestViews.keys(), ...this._views];
          }
          get destroyed() {
            return this._destroyed;
          }
          whenStable() {
            let n;
            return new Promise(r => {
              n = this.isStable.subscribe({
                next: o => {
                  o && r();
                },
              });
            }).finally(() => {
              n.unsubscribe();
            });
          }
          get injector() {
            return this._injector;
          }
          bootstrap(n, r) {
            const o = n instanceof lE;
            if (!this._injector.get(Ob).done)
              throw (
                (!o &&
                  (function lr(e) {
                    const t = W(e) || Ze(e) || ot(e);
                    return null !== t && t.standalone;
                  })(n),
                new E(405, !1))
              );
            let s;
            (s = o
              ? n
              : this._injector.get(ru).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const a = (function O2(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(to),
              u = s.create(nt.NULL, [], r || s.selector, a),
              l = u.location.nativeElement,
              d = u.injector.get(Rb, null);
            return (
              d?.registerApplication(l),
              u.onDestroy(() => {
                this.detachView(u.hostView),
                  Au(this.components, u),
                  d?.unregisterApplication(l);
              }),
              this._loadComponent(u),
              u
            );
          }
          tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1),
              this._tick();
          }
          _tick() {
            if (this._runningTick) throw new E(101, !1);
            const n = F(null);
            try {
              (this._runningTick = !0), this.synchronize();
            } catch (r) {
              this.internalErrorHandler(r);
            } finally {
              (this._runningTick = !1), F(n), this.afterTick.next();
            }
          }
          synchronize() {
            let n = null;
            this._injector.destroyed ||
              (n = this._injector.get(Rh, null, { optional: !0 })),
              (this.dirtyFlags |= this.deferredDirtyFlags),
              (this.deferredDirtyFlags = 0);
            let r = 0;
            for (; 0 !== this.dirtyFlags && r++ < 10; )
              this.synchronizeOnce(n);
          }
          synchronizeOnce(n) {
            if (
              ((this.dirtyFlags |= this.deferredDirtyFlags),
              (this.deferredDirtyFlags = 0),
              7 & this.dirtyFlags)
            ) {
              const r = !!(1 & this.dirtyFlags);
              (this.dirtyFlags &= -8),
                (this.dirtyFlags |= 8),
                this.beforeRender.next(r);
              for (let { _lView: o, notifyErrorHandler: i } of this
                ._views)
                P2(o, i, r, this.zonelessEnabled);
              if (
                ((this.dirtyFlags &= -5),
                this.syncDirtyFlagsWithViews(),
                7 & this.dirtyFlags)
              )
                return;
            } else n?.begin?.(), n?.end?.();
            8 & this.dirtyFlags &&
              ((this.dirtyFlags &= -9),
              this.afterRenderManager.execute()),
              this.syncDirtyFlagsWithViews();
          }
          syncDirtyFlagsWithViews() {
            this.allViews.some(({ _lView: n }) => pc(n))
              ? (this.dirtyFlags |= 2)
              : (this.dirtyFlags &= -8);
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            Au(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n);
            const r = this._injector.get(Tu, []);
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
              () => Au(this._destroyListeners, n)
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
      function Au(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function P2(e, t, n, r) {
        (n || pc(e)) && Yc(e, t, n && !r ? 0 : 1);
      }
      class L2 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let V2 = (() => {
          class e {
            compileModuleSync(n) {
              return new Gh(n);
            }
            compileModuleAsync(n) {
              return Promise.resolve(this.compileModuleSync(n));
            }
            compileModuleAndAllComponentsSync(n) {
              const r = this.compileModuleSync(n),
                i = zt(ct(n).declarations).reduce((s, a) => {
                  const c = W(a);
                  return c && s.push(new Os(c)), s;
                }, []);
              return new L2(r, i);
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
        B2 = (() => {
          class e {
            constructor() {
              (this.zone = _(le)),
                (this.changeDetectionScheduler = _(Ko)),
                (this.applicationRef = _(Fn));
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
      function xp({
        ngZoneFactory: e,
        ignoreChangesOutsideZone: t,
        scheduleInRootZone: n,
      }) {
        return (
          (e ??= () => new le({ ...Op(), scheduleInRootZone: n })),
          [
            { provide: le, useFactory: e },
            {
              provide: Ut,
              multi: !0,
              useFactory: () => {
                const r = _(B2, { optional: !0 });
                return () => r.initialize();
              },
            },
            {
              provide: Ut,
              multi: !0,
              useFactory: () => {
                const r = _(H2);
                return () => {
                  r.initialize();
                };
              },
            },
            !0 === t ? { provide: uE, useValue: !0 } : [],
            { provide: Nh, useValue: n ?? Yy },
          ]
        );
      }
      function Op(e) {
        return {
          enableLongStackTrace: !1,
          shouldCoalesceEventChangeDetection:
            e?.eventCoalescing ?? !1,
          shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
        };
      }
      let H2 = (() => {
          class e {
            constructor() {
              (this.subscription = new at()),
                (this.initialized = !1),
                (this.zone = _(le)),
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
                      le.assertNotInAngularZone(),
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
                    le.assertInAngularZone(),
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
              (this.appRef = _(Fn)),
                (this.taskService = _(Wr)),
                (this.ngZone = _(le)),
                (this.zonelessEnabled = _(Ns)),
                (this.disableScheduling =
                  _(uE, { optional: !0 }) ?? !1),
                (this.zoneIsDefined =
                  typeof Zone < 'u' && !!Zone.root.run),
                (this.schedulerTickApplyArgs = [
                  { data: { __scheduler_tick__: !0 } },
                ]),
                (this.subscriptions = new at()),
                (this.angularZoneId = this.zoneIsDefined
                  ? this.ngZone._inner?.get(Tc)
                  : null),
                (this.scheduleInRootZone =
                  !this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  (_(Nh, { optional: !0 }) ?? !1)),
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
                  (this.ngZone instanceof wf || !this.zoneIsDefined));
            }
            notify(n) {
              if (!this.zonelessEnabled && 5 === n) return;
              switch (n) {
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
              const r = this.useMicrotaskScheduler ? Xy : Ky;
              (this.pendingRenderTaskId = this.taskService.add()),
                (this.cancelScheduledCallback = this
                  .scheduleInRootZone
                  ? Zone.root.run(() => r(() => this.tick()))
                  : this.ngZone.runOutsideAngular(() =>
                      r(() => this.tick()),
                    ));
            }
            shouldScheduleTick() {
              return !(
                this.disableScheduling ||
                null !== this.pendingRenderTaskId ||
                this.runningTick ||
                this.appRef._runningTick ||
                (!this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  Zone.current.get(Tc + this.angularZoneId))
              );
            }
            tick() {
              if (this.runningTick || this.appRef.destroyed) return;
              !this.zonelessEnabled &&
                7 & this.appRef.dirtyFlags &&
                (this.appRef.dirtyFlags |= 1);
              const n = this.taskService.add();
              try {
                this.ngZone.run(
                  () => {
                    (this.runningTick = !0), this.appRef._tick();
                  },
                  void 0,
                  this.schedulerTickApplyArgs,
                );
              } catch (r) {
                throw (this.taskService.remove(n), r);
              } finally {
                this.cleanup();
              }
              (this.useMicrotaskScheduler = !0),
                Xy(() => {
                  (this.useMicrotaskScheduler = !1),
                    this.taskService.remove(n);
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
      const br = new D('', {
          providedIn: 'root',
          factory: () =>
            _(br, Y.Optional | Y.SkipSelf) ||
            (function z2() {
              return (
                (typeof $localize < 'u' && $localize.locale) || _u
              );
            })(),
        }),
        kp = new D('');
      function Ru(e) {
        return !!e.platformInjector;
      }
      let Ir = null;
      let na = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = tj);
        }
        return e;
      })();
      function tj(e) {
        return (function nj(e, t, n) {
          if (Ur(e) && !n) {
            const r = $t(e.index, t);
            return new Ds(r, r);
          }
          return 175 & e.type ? new Ds(t[Te], t) : null;
        })(fe(), v(), !(16 & ~e));
      }
      class Yb {
        constructor() {}
        supports(t) {
          return cu(t);
        }
        create(t) {
          return new aj(t);
        }
      }
      const sj = (e, t) => t;
      class aj {
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
            (this._trackByFn = t || sj);
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
                !r || (n && n.currentIndex < Xb(r, o, i)) ? n : r,
              a = Xb(s, o, i),
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
              (function Ck(e, t) {
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
              : (t = this._addAfter(new cj(n, r), i, o)),
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
              (this._linkedRecords = new Kb()),
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
              (this._unlinkedRecords = new Kb()),
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
      class cj {
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
      class uj {
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
      class Kb {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new uj()), this.map.set(n, r)), r.add(t);
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
      function Xb(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class Jb {
        constructor() {}
        supports(t) {
          return t instanceof Map || Wh(t);
        }
        create() {
          return new lj();
        }
      }
      class lj {
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
            if (!(t instanceof Map || Wh(t))) throw new E(900, !1);
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
          const r = new dj(t);
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
      class dj {
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
      function eI() {
        return new Bp([new Yb()]);
      }
      let Bp = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: eI,
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
              useFactory: r => e.create(n, r || eI()),
              deps: [[e, new Rd(), new Nd()]],
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
      function tI() {
        return new Fu([new Jb()]);
      }
      let Fu = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: tI,
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
              useFactory: r => e.create(n, r || tI()),
              deps: [[e, new Rd(), new Nd()]],
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
      function Ij(e) {
        try {
          const {
              rootComponent: t,
              appProviders: n,
              platformProviders: r,
            } = e,
            o = (function J2(e = []) {
              if (Ir) return Ir;
              const t = (function zb(e = [], t) {
                return nt.create({
                  name: t,
                  providers: [
                    { provide: Ud, useValue: 'platform' },
                    {
                      provide: kp,
                      useValue: new Set([() => (Ir = null)]),
                    },
                    ...e,
                  ],
                });
              })(e);
              return (
                (Ir = t),
                (function Fb() {
                  !(function jT(e) {
                    Hm = e;
                  })(() => {
                    throw new E(600, !1);
                  });
                })(),
                (function Gb(e) {
                  e.get(w_, null)?.forEach(n => n());
                })(t),
                t
              );
            })(r),
            i = [
              xp({}),
              { provide: Ko, useExisting: ta },
              ...(n || []),
            ];
          return (function Bb(e) {
            const t = Ru(e) ? e.r3Injector : e.moduleRef.injector,
              n = t.get(le);
            return n.run(() => {
              Ru(e)
                ? e.r3Injector.resolveInjectorInitializers()
                : e.moduleRef.resolveInjectorInitializers();
              const r = t.get(Mn, null);
              let o;
              if (
                (n.runOutsideAngular(() => {
                  o = n.onError.subscribe({
                    next: i => {
                      r.handleError(i);
                    },
                  });
                }),
                Ru(e))
              ) {
                const i = () => t.destroy(),
                  s = e.platformInjector.get(kp);
                s.add(i),
                  t.onDestroy(() => {
                    o.unsubscribe(), s.delete(i);
                  });
              } else
                e.moduleRef.onDestroy(() => {
                  Au(e.allPlatformModules, e.moduleRef),
                    o.unsubscribe();
                });
              return (function k2(e, t, n) {
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
              })(r, n, () => {
                const i = t.get(Ob);
                return (
                  i.runInitializers(),
                  i.donePromise.then(() => {
                    if (
                      ((function aL(e) {
                        'string' == typeof e &&
                          (ew = e.toLowerCase().replace(/_/g, '-'));
                      })(t.get(br, _u) || _u),
                      Ru(e))
                    ) {
                      const a = t.get(Fn);
                      return (
                        void 0 !== e.rootComponent &&
                          a.bootstrap(e.rootComponent),
                        a
                      );
                    }
                    return (
                      (function Y2(e, t) {
                        const n = e.injector.get(Fn);
                        if (e._bootstrapComponents.length > 0)
                          e._bootstrapComponents.forEach(r =>
                            n.bootstrap(r),
                          );
                        else {
                          if (!e.instance.ngDoBootstrap)
                            throw new E(-403, !1);
                          e.instance.ngDoBootstrap(n);
                        }
                        t.push(e);
                      })(e.moduleRef, e.allPlatformModules),
                      e.moduleRef
                    );
                  })
                );
              });
            });
          })({
            r3Injector: new QE({
              providers: i,
              parent: o,
              debugName: '',
              runEnvironmentInitializers: !1,
            }).injector,
            platformInjector: o,
            rootComponent: t,
          });
        } catch (t) {
          return Promise.reject(t);
        }
      }
      const vI = new D('');
      function Ci(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function ao(e, t) {
        Ct('NgSignals');
        const n = (function PT(e) {
          const t = Object.create(LT);
          t.computation = e;
          const n = () => {
            if ((Pm(t), tt(t), t.value === La)) throw t.error;
            return t.value;
          };
          return (n[xe] = t), n;
        })(e);
        return t?.equal && (n[xe].equal = t.equal), n;
      }
      function kn(e) {
        const t = F(null);
        try {
          return e();
        } finally {
          F(t);
        }
      }
      let MI = null;
      function Sr() {
        return MI;
      }
      class Xj {}
      const en = new D('');
      let Gp = (() => {
          class e {
            historyGo(n) {
              throw new Error('');
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(Jj),
              providedIn: 'platform',
            }));
          }
          return e;
        })(),
        Jj = (() => {
          class e extends Gp {
            constructor() {
              super(),
                (this._doc = _(en)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return Sr().getBaseHref(this._doc);
            }
            onPopState(n) {
              const r = Sr().getGlobalEventTarget(
                this._doc,
                'window',
              );
              return (
                r.addEventListener('popstate', n, !1),
                () => r.removeEventListener('popstate', n)
              );
            }
            onHashChange(n) {
              const r = Sr().getGlobalEventTarget(
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
      function qp(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        let n = 0;
        return (
          e.endsWith('/') && n++,
          t.startsWith('/') && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
        );
      }
      function TI(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return (
          e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n)
        );
      }
      function Jn(e) {
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
            factory: () => _(eU),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const AI = new D('');
      let eU = (() => {
          class e extends Ei {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._removeListenerFns = []),
                (this._baseHref =
                  r ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  _(en).location?.origin ??
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
              return qp(this._baseHref, n);
            }
            path(n = !1) {
              const r =
                  this._platformLocation.pathname +
                  Jn(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && n ? `${r}${o}` : r;
            }
            pushState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + Jn(i));
              this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + Jn(i));
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
              return new (r || e)(A(Gp), A(AI, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        tU = (() => {
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
              const r = qp(this._baseHref, n);
              return r.length > 0 ? '#' + r : r;
            }
            pushState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + Jn(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + Jn(i));
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
              return new (r || e)(A(Gp), A(AI, 8));
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
              (this._basePath = (function oU(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, n] = e.split(/\/\/[^\/]+/);
                  return n;
                }
                return e;
              })(TI(NI(r)))),
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
              return this.path() == this.normalize(n + Jn(r));
            }
            normalize(n) {
              return e.stripTrailingSlash(
                (function rU(e, t) {
                  if (!e || !t.startsWith(e)) return t;
                  const n = t.substring(e.length);
                  return '' === n ||
                    ['/', ';', '?', '#'].includes(n[0])
                    ? n
                    : t;
                })(this._basePath, NI(n)),
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
                  this.prepareExternalUrl(n + Jn(r)),
                  o,
                );
            }
            replaceState(n, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + Jn(r)),
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
            static #e = (this.normalizeQueryParams = Jn);
            static #t = (this.joinWithSlash = qp);
            static #n = (this.stripTrailingSlash = TI);
            static #r = (this.ɵfac = function (r) {
              return new (r || e)(A(Ei));
            });
            static #o = (this.ɵprov = S({
              token: e,
              factory: () =>
                (function nU() {
                  return new sa(A(Ei));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function NI(e) {
        return e.replace(/\/index.html$/, '');
      }
      const ng = /\s+/,
        jI = [];
      let UI = (() => {
        class e {
          constructor(n, r) {
            (this._ngEl = n),
              (this._renderer = r),
              (this.initialClasses = jI),
              (this.stateMap = new Map());
          }
          set klass(n) {
            this.initialClasses = null != n ? n.trim().split(ng) : jI;
          }
          set ngClass(n) {
            this.rawClass =
              'string' == typeof n ? n.trim().split(ng) : n;
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
              n.split(ng).forEach(o => {
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
            return new (r || e)(w(Ht), w(Kn));
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
      class zU {
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
      let $I = (() => {
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
                  new zU(o.item, this._ngForOf, -1, -1),
                  null === s ? void 0 : s,
                );
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), HI(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o),
                (a.count = i),
                (a.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange(o => {
              HI(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(hn), w(Yn), w(Bp));
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
      function HI(e, t) {
        e.context.$implicit = t.item;
      }
      let Xu = (() => {
        class e {
          constructor(n, r) {
            (this._viewContainer = n),
              (this._context = new GU()),
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
            zI('ngIfThen', n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            zI('ngIfElse', n),
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
            return new (r || e)(w(hn), w(Yn));
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
      class GU {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function zI(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${We(t)}'.`,
          );
      }
      class rg {
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
      let Ju = (() => {
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
        GI = (() => {
          class e {
            constructor(n, r, o) {
              (this.ngSwitch = o),
                o._addCase(),
                (this._view = new rg(n, r));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase),
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(hn), w(Yn), w(Ju, 9));
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
        WI = (() => {
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
              return new (r || e)(w(Ht), w(Fu), w(Kn));
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
        sg = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = qi({ type: e }));
            static #n = (this.ɵinj = bo({}));
          }
          return e;
        })();
      const QI = 'browser';
      function YI(e) {
        return 'server' === e;
      }
      let yB = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () =>
              (function vB(e) {
                return e === QI;
              })(_(pr))
                ? new _B(_(en), window)
                : new EB(),
          }));
        }
        return e;
      })();
      class _B {
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
          const n = (function CB(e, t) {
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
      class EB {
        setOffset(t) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(t) {}
        scrollToAnchor(t) {}
        setHistoryScrollRestoration(t) {}
      }
      class YB extends Xj {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class lg extends YB {
        static makeCurrent() {
          !(function Kj(e) {
            MI ??= e;
          })(new lg());
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
          const n = (function KB() {
            return (
              (la = la || document.querySelector('base')),
              la ? la.getAttribute('href') : null
            );
          })();
          return null == n
            ? null
            : (function XB(e) {
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
          return (function $U(e, t) {
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
        e$ = (() => {
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
      const rl = new D('');
      let sS = (() => {
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
            return new (r || e)(A(rl), A(le));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class dg {
        constructor(t) {
          this._doc = t;
        }
      }
      const fg = 'ng-app-id';
      let aS = (() => {
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
              (this.platformIsServer = YI(i)),
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
              `style[${fg}="${this.appId}"]`,
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
              return o.delete(r), i.removeAttribute(fg), i;
            {
              const s = this.doc.createElement('style');
              return (
                this.nonce && s.setAttribute('nonce', this.nonce),
                (s.textContent = r),
                this.platformIsServer &&
                  s.setAttribute(fg, this.appId),
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
            return new (r || e)(A(en), A(cs), A(b_, 8), A(pr));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const hg = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        pg = /%COMP%/g,
        o$ = new D('', { providedIn: 'root', factory: () => !0 });
      function uS(e, t) {
        return t.map(n => n.replace(pg, e));
      }
      let lS = (() => {
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
              (this.platformIsServer = YI(a)),
              (this.defaultRenderer = new gg(
                n,
                s,
                c,
                this.platformIsServer,
              ));
          }
          createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;
            this.platformIsServer &&
              r.encapsulation === on.ShadowDom &&
              (r = { ...r, encapsulation: on.Emulated });
            const o = this.getOrCreateRenderer(n, r);
            return (
              o instanceof fS
                ? o.applyToHost(n)
                : o instanceof mg && o.applyStyles(),
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
                case on.Emulated:
                  i = new fS(c, u, r, this.appId, l, s, a, d);
                  break;
                case on.ShadowDom:
                  return new c$(c, u, n, r, s, a, this.nonce, d);
                default:
                  i = new mg(c, u, r, l, s, a, d);
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
              A(sS),
              A(aS),
              A(cs),
              A(o$),
              A(en),
              A(pr),
              A(le),
              A(b_),
            );
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class gg {
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
            ? this.doc.createElementNS(hg[n] || n, t)
            : this.doc.createElement(t);
        }
        createComment(t) {
          return this.doc.createComment(t);
        }
        createText(t) {
          return this.doc.createTextNode(t);
        }
        appendChild(t, n) {
          (dS(t) ? t.content : t).appendChild(n);
        }
        insertBefore(t, n, r) {
          t && (dS(t) ? t.content : t).insertBefore(n, r);
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
            const i = hg[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = hg[r];
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
            !(t = Sr().getGlobalEventTarget(this.doc, t))
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
      function dS(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class c$ extends gg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, c),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const u = uS(o.id, o.styles);
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
      class mg extends gg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, a),
            (this.sharedStylesHost = n),
            (this.removeStylesOnCompDestroy = o),
            (this.styles = c ? uS(c, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class fS extends mg {
        constructor(t, n, r, o, i, s, a, c) {
          const u = o + '-' + r.id;
          super(t, n, r, i, s, a, c, u),
            (this.contentAttr = (function i$(e) {
              return '_ngcontent-%COMP%'.replace(pg, e);
            })(u)),
            (this.hostAttr = (function s$(e) {
              return '_nghost-%COMP%'.replace(pg, e);
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
      let u$ = (() => {
          class e extends dg {
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
              return new (r || e)(A(en));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        l$ = (() => {
          class e extends dg {
            constructor(n) {
              super(n), (this.delegate = _(vI, { optional: !0 }));
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
              return new (r || e)(A(en));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const hS = ['alt', 'control', 'meta', 'shift'],
        d$ = {
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
        f$ = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      function pS(e) {
        return {
          appProviders: [...C$, ...(e?.providers ?? [])],
          platformProviders: y$,
        };
      }
      const y$ = [
          { provide: pr, useValue: QI },
          {
            provide: w_,
            useValue: function g$() {
              lg.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: en,
            useFactory: function v$() {
              return (
                (function Ox(e) {
                  Af = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        C$ = [
          { provide: Ud, useValue: 'root' },
          {
            provide: Mn,
            useFactory: function m$() {
              return new Mn();
            },
            deps: [],
          },
          {
            provide: rl,
            useClass: u$,
            multi: !0,
            deps: [en, le, pr],
          },
          {
            provide: rl,
            useClass: (() => {
              class e extends dg {
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
                      Sr().onAndCancel(n, i.domEventName, s),
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
                    hS.forEach(u => {
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
                  let o = d$[n.key] || n.key,
                    i = '';
                  return (
                    r.indexOf('code.') > -1 &&
                      ((o = n.code), (i = 'code.')),
                    !(null == o || !o) &&
                      ((o = o.toLowerCase()),
                      ' ' === o
                        ? (o = 'space')
                        : '.' === o && (o = 'dot'),
                      hS.forEach(s => {
                        s !== o && (0, f$[s])(n) && (i += s + '.');
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
                  return new (r || e)(A(en));
                });
                static #t = (this.ɵprov = S({
                  token: e,
                  factory: e.ɵfac,
                }));
              }
              return e;
            })(),
            multi: !0,
            deps: [en],
          },
          { provide: rl, useClass: l$, multi: !0 },
          lS,
          aS,
          sS,
          { provide: Rh, useExisting: lS },
          { provide: class DB {}, useClass: e$, deps: [] },
          [],
        ];
      let E$ = (() => {
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
            return new (r || e)(A(en));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function Mr(e) {
        return this instanceof Mr ? ((this.v = e), this) : new Mr(e);
      }
      function CS(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = (function Cg(e) {
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
      const ES = e =>
        e && 'number' == typeof e.length && 'function' != typeof e;
      function DS(e) {
        return we(e?.then);
      }
      function wS(e) {
        return we(e[cd]);
      }
      function bS(e) {
        return Symbol.asyncIterator && we(e?.[Symbol.asyncIterator]);
      }
      function IS(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e
              ? 'an invalid object'
              : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const SS = (function W$() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function MS(e) {
        return we(e?.[SS]);
      }
      function TS(e) {
        return (function _S(e, t, n) {
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
                return new Promise(function (y, C) {
                  i.push([h, g, y, C]) > 1 || c(h, g);
                });
              }),
              p && (o[h] = p(o[h])));
          }
          function c(h, p) {
            try {
              !(function u(h) {
                h.value instanceof Mr
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
              const { value: r, done: o } = yield Mr(n.read());
              if (o) return yield Mr(void 0);
              yield yield Mr(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function AS(e) {
        return we(e?.getReader);
      }
      function yn(e) {
        if (e instanceof Oe) return e;
        if (null != e) {
          if (wS(e))
            return (function Z$(e) {
              return new Oe(t => {
                const n = e[cd]();
                if (we(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (ES(e))
            return (function Q$(e) {
              return new Oe(t => {
                for (let n = 0; n < e.length && !t.closed; n++)
                  t.next(e[n]);
                t.complete();
              });
            })(e);
          if (DS(e))
            return (function Y$(e) {
              return new Oe(t => {
                e.then(
                  n => {
                    t.closed || (t.next(n), t.complete());
                  },
                  n => t.error(n),
                ).then(null, Ym);
              });
            })(e);
          if (bS(e)) return NS(e);
          if (MS(e))
            return (function K$(e) {
              return new Oe(t => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (AS(e))
            return (function X$(e) {
              return NS(TS(e));
            })(e);
        }
        throw IS(e);
      }
      function NS(e) {
        return new Oe(t => {
          (function J$(e, t) {
            var n, r, o, i;
            return (function vS(e, t, n, r) {
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
                for (n = CS(e); !(r = yield n.next()).done; )
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
      function nr(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function Eg(e, t = 0) {
        return qe((n, r) => {
          n.subscribe(
            Ne(
              r,
              o => nr(r, e, () => r.next(o), t),
              () => nr(r, e, () => r.complete(), t),
              o => nr(r, e, () => r.error(o), t),
            ),
          );
        });
      }
      function RS(e, t = 0) {
        return qe((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function xS(e, t) {
        if (!e) throw new Error('Iterable cannot be null');
        return new Oe(n => {
          nr(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            nr(
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
          ? (function iH(e, t) {
              if (null != e) {
                if (wS(e))
                  return (function eH(e, t) {
                    return yn(e).pipe(RS(t), Eg(t));
                  })(e, t);
                if (ES(e))
                  return (function nH(e, t) {
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
                if (DS(e))
                  return (function tH(e, t) {
                    return yn(e).pipe(RS(t), Eg(t));
                  })(e, t);
                if (bS(e)) return xS(e, t);
                if (MS(e))
                  return (function rH(e, t) {
                    return new Oe(n => {
                      let r;
                      return (
                        nr(n, t, () => {
                          (r = e[SS]()),
                            nr(
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
                        () => we(r?.return) && r.return()
                      );
                    });
                  })(e, t);
                if (AS(e))
                  return (function oH(e, t) {
                    return xS(TS(e), t);
                  })(e, t);
              }
              throw IS(e);
            })(e, t)
          : yn(e);
      }
      function Dg(e) {
        return e[e.length - 1];
      }
      function wg(e) {
        return we(Dg(e)) ? e.pop() : void 0;
      }
      function il(e) {
        return (function sH(e) {
          return e && we(e.schedule);
        })(Dg(e))
          ? e.pop()
          : void 0;
      }
      function H(...e) {
        return dt(e, il(e));
      }
      const sl = td(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: aH } = Array,
        { getPrototypeOf: cH, prototype: uH, keys: lH } = Object;
      function OS(e) {
        if (1 === e.length) {
          const t = e[0];
          if (aH(t)) return { args: t, keys: null };
          if (
            (function dH(e) {
              return e && 'object' == typeof e && cH(e) === uH;
            })(t)
          ) {
            const n = lH(t);
            return { args: n.map(r => t[r]), keys: n };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: fH } = Array;
      function FS(e) {
        return re(t =>
          (function hH(e, t) {
            return fH(t) ? e(...t) : e(t);
          })(e, t),
        );
      }
      function kS(e, t) {
        return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
      }
      function PS(...e) {
        const t = il(e),
          n = wg(e),
          { args: r, keys: o } = OS(e);
        if (0 === r.length) return dt([], t);
        const i = new Oe(
          (function pH(e, t, n = Bn) {
            return r => {
              LS(
                t,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let c = 0; c < o; c++)
                    LS(
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
          })(r, t, o ? s => kS(o, s) : Bn),
        );
        return n ? i.pipe(FS(n)) : i;
      }
      function LS(e, t, n) {
        e ? nr(n, e, t) : t();
      }
      function bt(e, t, n = 1 / 0) {
        return we(t)
          ? bt((r, o) => re((i, s) => t(r, i, o, s))(yn(e(r, o))), n)
          : ('number' == typeof t && (n = t),
            qe((r, o) =>
              (function gH(e, t, n, r, o, i, s, a) {
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
                    let y = !1;
                    yn(n(g, l++)).subscribe(
                      Ne(
                        t,
                        C => {
                          o?.(C), i ? h(C) : t.next(C);
                        },
                        () => {
                          y = !0;
                        },
                        void 0,
                        () => {
                          if (y)
                            try {
                              for (u--; c.length && u < r; ) {
                                const C = c.shift();
                                s ? nr(t, s, () => p(C)) : p(C);
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
      function Ig(...e) {
        return (function mH() {
          return (function bg(e = 1 / 0) {
            return bt(Bn, e);
          })(1);
        })()(dt(e, il(e)));
      }
      function VS(e) {
        return new Oe(t => {
          yn(e()).subscribe(t);
        });
      }
      function al(e, t) {
        const n = we(e) ? e : () => e,
          r = o => o.error(n());
        return new Oe(t ? o => t.schedule(r, 0, o) : r);
      }
      const Pn = new Oe(e => e.complete());
      function Sg() {
        return qe((e, t) => {
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
      class jS extends Oe {
        constructor(t, n) {
          super(),
            (this.source = t),
            (this.subjectFactory = n),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            ev(t) && (this.lift = t.lift);
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
          return Sg()(this);
        }
      }
      function rr(e, t) {
        return qe((n, r) => {
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
                yn(e(c, l)).subscribe(
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
      function bi(e) {
        return e <= 0
          ? () => Pn
          : qe((t, n) => {
              let r = 0;
              t.subscribe(
                Ne(n, o => {
                  ++r <= e && (n.next(o), e <= r && n.complete());
                }),
              );
            });
      }
      function uo(e, t) {
        return qe((n, r) => {
          let o = 0;
          n.subscribe(Ne(r, i => e.call(t, i, o++) && r.next(i)));
        });
      }
      function cl(e) {
        return qe((t, n) => {
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
      function US(e = _H) {
        return qe((t, n) => {
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
      function _H() {
        return new sl();
      }
      function lo(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? uo((o, i) => e(o, i, r)) : Bn,
            bi(1),
            n ? cl(t) : US(() => new sl()),
          );
      }
      function ul(e, t) {
        return we(t) ? bt(e, t, 1) : bt(e, 1);
      }
      function It(e, t, n) {
        const r =
          we(e) || t || n ? { next: e, error: t, complete: n } : e;
        return r
          ? qe((o, i) => {
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
          : Bn;
      }
      function Ii(e) {
        return qe((t, n) => {
          let i,
            r = null,
            o = !1;
          (r = t.subscribe(
            Ne(n, void 0, void 0, s => {
              (i = yn(e(s, Ii(e)(t)))),
                r
                  ? (r.unsubscribe(), (r = null), i.subscribe(n))
                  : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(n));
        });
      }
      function BS(e, t) {
        return qe(
          (function CH(e, t, n, r, o) {
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
      function Mg(e) {
        return e <= 0
          ? () => Pn
          : qe((t, n) => {
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
      function Tg(e) {
        return qe((t, n) => {
          try {
            t.subscribe(n);
          } finally {
            n.add(e);
          }
        });
      }
      const z = 'primary',
        da = Symbol('RouteTitle');
      class bH {
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
        return new bH(e);
      }
      function IH(e, t, n) {
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
      function Ln(e, t) {
        const n = e ? Ag(e) : void 0,
          r = t ? Ag(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let o;
        for (let i = 0; i < n.length; i++)
          if (((o = n[i]), !$S(e[o], t[o]))) return !1;
        return !0;
      }
      function Ag(e) {
        return [
          ...Object.keys(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      }
      function $S(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((o, i) => r[i] === o);
        }
        return e === t;
      }
      function HS(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Tr(e) {
        return (function I$(e) {
          return (
            !!e &&
            (e instanceof Oe || (we(e.lift) && we(e.subscribe)))
          );
        })(e)
          ? e
          : ea(e)
          ? dt(Promise.resolve(e))
          : H(e);
      }
      const MH = {
          exact: function qS(e, t, n) {
            if (
              !ho(e.segments, t.segments) ||
              !ll(e.segments, t.segments, n) ||
              e.numberOfChildren !== t.numberOfChildren
            )
              return !1;
            for (const r in t.children)
              if (
                !e.children[r] ||
                !qS(e.children[r], t.children[r], n)
              )
                return !1;
            return !0;
          },
          subset: WS,
        },
        zS = {
          exact: function TH(e, t) {
            return Ln(e, t);
          },
          subset: function AH(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every(n => $S(e[n], t[n]))
            );
          },
          ignored: () => !0,
        };
      function GS(e, t, n) {
        return (
          MH[n.paths](e.root, t.root, n.matrixParams) &&
          zS[n.queryParams](e.queryParams, t.queryParams) &&
          !('exact' === n.fragment && e.fragment !== t.fragment)
        );
      }
      function WS(e, t, n) {
        return ZS(e, t, t.segments, n);
      }
      function ZS(e, t, n, r) {
        if (e.segments.length > n.length) {
          const o = e.segments.slice(0, n.length);
          return !(!ho(o, n) || t.hasChildren() || !ll(o, n, r));
        }
        if (e.segments.length === n.length) {
          if (!ho(e.segments, n) || !ll(e.segments, n, r)) return !1;
          for (const o in t.children)
            if (
              !e.children[o] ||
              !WS(e.children[o], t.children[o], r)
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
              ll(e.segments, o, r) &&
              e.children[z]
            ) && ZS(e.children[z], t, i, r)
          );
        }
      }
      function ll(e, t, n) {
        return t.every((r, o) =>
          zS[n](e[o].parameters, r.parameters),
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
          return xH.serialize(this);
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
          return fl(this);
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
          return KS(this);
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
            factory: () => new dl(),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class dl {
        parse(t) {
          const n = new HH(t);
          return new fo(
            n.parseRootSegment(),
            n.parseQueryParams(),
            n.parseFragment(),
          );
        }
        serialize(t) {
          const n = `/${ha(t.root, !0)}`,
            r = (function kH(e) {
              const t = Object.entries(e)
                .map(([n, r]) =>
                  Array.isArray(r)
                    ? r.map(o => `${hl(n)}=${hl(o)}`).join('&')
                    : `${hl(n)}=${hl(r)}`,
                )
                .filter(n => n);
              return t.length ? `?${t.join('&')}` : '';
            })(t.queryParams);
          return `${n}${r}${
            'string' == typeof t.fragment
              ? `#${(function OH(e) {
                  return encodeURI(e);
                })(t.fragment)}`
              : ''
          }`;
        }
      }
      const xH = new dl();
      function fl(e) {
        return e.segments.map(t => KS(t)).join('/');
      }
      function ha(e, t) {
        if (!e.hasChildren()) return fl(e);
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
          const n = (function RH(e, t) {
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
            ? `${fl(e)}/${n[0]}`
            : `${fl(e)}/(${n.join('//')})`;
        }
      }
      function QS(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function hl(e) {
        return QS(e).replace(/%3B/gi, ';');
      }
      function Ng(e) {
        return QS(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function pl(e) {
        return decodeURIComponent(e);
      }
      function YS(e) {
        return pl(e.replace(/\+/g, '%20'));
      }
      function KS(e) {
        return `${Ng(e.path)}${(function FH(e) {
          return Object.entries(e)
            .map(([t, n]) => `;${Ng(t)}=${Ng(n)}`)
            .join('');
        })(e.parameters)}`;
      }
      const PH = /^[^\/()?;#]+/;
      function Rg(e) {
        const t = e.match(PH);
        return t ? t[0] : '';
      }
      const LH = /^[^\/()?;=#]+/,
        jH = /^[^=?&#]+/,
        BH = /^[^&#]+/;
      class HH {
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
          const t = Rg(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new E(4009, !1);
          return (
            this.capture(t), new fa(pl(t), this.parseMatrixParams())
          );
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const n = (function VH(e) {
            const t = e.match(LH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const o = Rg(this.remaining);
            o && ((r = o), this.capture(r));
          }
          t[pl(n)] = pl(r);
        }
        parseQueryParam(t) {
          const n = (function UH(e) {
            const t = e.match(jH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const s = (function $H(e) {
              const t = e.match(BH);
              return t ? t[0] : '';
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = YS(n),
            i = YS(r);
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
            const r = Rg(this.remaining),
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
      function XS(e) {
        return e.segments.length > 0 ? new ge([], { [z]: e }) : e;
      }
      function JS(e) {
        const t = {};
        for (const [r, o] of Object.entries(e.children)) {
          const i = JS(o);
          if (r === z && 0 === i.segments.length && i.hasChildren())
            for (const [s, a] of Object.entries(i.children)) t[s] = a;
          else
            (i.segments.length > 0 || i.hasChildren()) && (t[r] = i);
        }
        return (function zH(e) {
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
      function eM(e) {
        let t;
        const o = XS(
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
      function tM(e, t, n, r) {
        let o = e;
        for (; o.parent; ) o = o.parent;
        if (0 === t.length) return xg(o, o, o, n, r);
        const i = (function qH(e) {
          if (
            'string' == typeof e[0] &&
            1 === e.length &&
            '/' === e[0]
          )
            return new rM(!0, 0, e);
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
          return new rM(n, t, r);
        })(t);
        if (i.toRoot()) return xg(o, o, new ge([], {}), n, r);
        const s = (function WH(e, t, n) {
            if (e.isAbsolute) return new ml(t, !0, 0);
            if (!n) return new ml(t, !1, NaN);
            if (null === n.parent) return new ml(n, !0, 0);
            const r = gl(e.commands[0]) ? 0 : 1;
            return (function ZH(e, t, n) {
              let r = e,
                o = t,
                i = n;
              for (; i > o; ) {
                if (((i -= o), (r = r.parent), !r))
                  throw new E(4005, !1);
                o = r.segments.length;
              }
              return new ml(r, !1, o - i);
            })(n, n.segments.length - 1 + r, e.numberOfDoubleDots);
          })(i, o, e),
          a = s.processChildren
            ? ga(s.segmentGroup, s.index, i.commands)
            : oM(s.segmentGroup, s.index, i.commands);
        return xg(o, s.segmentGroup, a, n, r);
      }
      function gl(e) {
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
      function xg(e, t, n, r, o) {
        let s,
          i = {};
        r &&
          Object.entries(r).forEach(([c, u]) => {
            i[c] = Array.isArray(u) ? u.map(l => `${l}`) : `${u}`;
          }),
          (s = e === t ? n : nM(e, t, n));
        const a = XS(JS(s));
        return new fo(a, i, o);
      }
      function nM(e, t, n) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([o, i]) => {
            r[o] = i === t ? n : nM(i, t, n);
          }),
          new ge(e.segments, r)
        );
      }
      class rM {
        constructor(t, n, r) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = r),
            t && r.length > 0 && gl(r[0]))
          )
            throw new E(4003, !1);
          const o = r.find(pa);
          if (o && o !== HS(r)) throw new E(4004, !1);
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            '/' == this.commands[0]
          );
        }
      }
      class ml {
        constructor(t, n, r) {
          (this.segmentGroup = t),
            (this.processChildren = n),
            (this.index = r);
        }
      }
      function oM(e, t, n) {
        if (
          ((e ??= new ge([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return ga(e, t, n);
        const r = (function YH(e, t, n) {
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
                if (!sM(c, u, s)) return i;
                r += 2;
              } else {
                if (!sM(c, {}, s)) return i;
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
          ? Og(e, t, n)
          : r.match
          ? ga(e, 0, o)
          : Og(e, t, n);
      }
      function ga(e, t, n) {
        if (0 === n.length) return new ge(e.segments, {});
        {
          const r = (function QH(e) {
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
                null !== s && (o[i] = oM(e.children[i], t, s));
            }),
            Object.entries(e.children).forEach(([i, s]) => {
              void 0 === r[i] && (o[i] = s);
            }),
            new ge(e.segments, o)
          );
        }
      }
      function Og(e, t, n) {
        const r = e.segments.slice(0, t);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (pa(i)) {
            const c = KH(i.outlets);
            return new ge(r, c);
          }
          if (0 === o && gl(n[0])) {
            r.push(new fa(e.segments[t].path, iM(n[0]))), o++;
            continue;
          }
          const s = pa(i) ? i.outlets[z] : `${i}`,
            a = o < n.length - 1 ? n[o + 1] : null;
          s && a && gl(a)
            ? (r.push(new fa(s, iM(a))), (o += 2))
            : (r.push(new fa(s, {})), o++);
        }
        return new ge(r, {});
      }
      function KH(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => {
            'string' == typeof r && (r = [r]),
              null !== r && (t[n] = Og(new ge([], {}), 0, r));
          }),
          t
        );
      }
      function iM(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => (t[n] = `${r}`)), t
        );
      }
      function sM(e, t, n) {
        return e == n.path && Ln(t, n.parameters);
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
      class Vn {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class vl extends Vn {
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
      class Ar extends Vn {
        constructor(t, n, r) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.type = X.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var Zt = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] =
              'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(Zt || {}),
        yl = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] =
              'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
              'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(yl || {});
      class go extends Vn {
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
      class Ti extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = X.NavigationSkipped);
        }
      }
      class Fg extends Vn {
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
      class aM extends Vn {
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
      class XH extends Vn {
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
      class JH extends Vn {
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
      class e3 extends Vn {
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
      class t3 extends Vn {
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
      class n3 {
        constructor(t) {
          (this.route = t), (this.type = X.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class r3 {
        constructor(t) {
          (this.route = t), (this.type = X.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class o3 {
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
      class s3 {
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
      class a3 {
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
      class c3 {
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
      class cM {
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
      class kg {}
      class _l {
        constructor(t, n) {
          (this.url = t), (this.navigationBehaviorOptions = n);
        }
      }
      function _n(e) {
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
      class p3 {
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
                ((r = new p3(this.rootInjector)),
                this.contexts.set(n, r)),
              r
            );
          }
          getContext(n) {
            return this.contexts.get(n) || null;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(A(Bt));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class uM {
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
          const n = Pg(t, this._root);
          return n ? n.children.map(r => r.value) : [];
        }
        firstChild(t) {
          const n = Pg(t, this._root);
          return n && n.children.length > 0
            ? n.children[0].value
            : null;
        }
        siblings(t) {
          const n = Lg(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children
                .map(o => o.value)
                .filter(o => o !== t);
        }
        pathFromRoot(t) {
          return Lg(t, this._root).map(n => n.value);
        }
      }
      function Pg(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const r = Pg(e, n);
          if (r) return r;
        }
        return null;
      }
      function Lg(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = Lg(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class Cn {
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
      class lM extends uM {
        constructor(t, n) {
          super(t), (this.snapshot = n), Vg(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function dM(e) {
        const t = (function g3(e) {
            const i = new El([], {}, {}, '', {}, z, e, null, {});
            return new fM('', new Cn(i, []));
          })(e),
          n = new mt([new fa('', {})]),
          r = new mt({}),
          o = new mt({}),
          i = new mt({}),
          s = new mt(''),
          a = new Ni(n, r, i, s, o, z, e, t.root);
        return (a.snapshot = t.root), new lM(new Cn(a, []), t);
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
      function Cl(e, t, n = 'emptyOnly') {
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
          o && pM(o) && (r.resolve[da] = o.title),
          r
        );
      }
      class El {
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
      class fM extends uM {
        constructor(t, n) {
          super(n), (this.url = t), Vg(this, n);
        }
        toString() {
          return hM(this._root);
        }
      }
      function Vg(e, t) {
        (t.value._routerState = e), t.children.forEach(n => Vg(e, n));
      }
      function hM(e) {
        const t =
          e.children.length > 0
            ? ` { ${e.children.map(hM).join(', ')} } `
            : '';
        return `${e.value}${t}`;
      }
      function jg(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Ln(t.queryParams, n.queryParams) ||
              e.queryParamsSubject.next(n.queryParams),
            t.fragment !== n.fragment &&
              e.fragmentSubject.next(n.fragment),
            Ln(t.params, n.params) || e.paramsSubject.next(n.params),
            (function SH(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n)
                if (!Ln(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.urlSubject.next(n.url),
            Ln(t.data, n.data) || e.dataSubject.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot),
            e.dataSubject.next(e._futureSnapshot.data);
      }
      function Ug(e, t) {
        const n =
          Ln(e.params, t.params) &&
          (function NH(e, t) {
            return (
              ho(e, t) &&
              e.every((n, r) => Ln(n.parameters, t[r].parameters))
            );
          })(e.url, t.url);
        return (
          n &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Ug(e.parent, t.parent))
        );
      }
      function pM(e) {
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
              (this.location = _(hn)),
              (this.changeDetector = _(na)),
              (this.inputBinder = _(Dl, { optional: !0 })),
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
              c = new Bg(n, a, o.injector);
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
            features: [Yt],
          }));
        }
        return e;
      })();
      class Bg {
        __ngOutletInjector(t) {
          return new Bg(this.route, this.childContexts, t);
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
      const Dl = new D('');
      function Ca(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const o = (function v3(e, t, n) {
            return t.children.map(r => {
              for (const o of n.children)
                if (e.shouldReuseRoute(r.value, o.value.snapshot))
                  return Ca(e, r, o);
              return Ca(e, r);
            });
          })(e, t, n);
          return new Cn(r, o);
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
          const r = (function y3(e) {
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
          return new Cn(r, o);
        }
      }
      class $g {
        constructor(t, n) {
          (this.redirectTo = t), (this.navigationBehaviorOptions = n);
        }
      }
      const mM = 'ngNavigationCancelingError';
      function wl(e, t) {
        const { redirectTo: n, navigationBehaviorOptions: r } = po(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
          o = vM(!1, Zt.Redirect);
        return (o.url = n), (o.navigationBehaviorOptions = r), o;
      }
      function vM(e, t) {
        const n = new Error(`NavigationCancelingError: ${e || ''}`);
        return (n[mM] = !0), (n.cancellationCode = t), n;
      }
      function yM(e) {
        return !!e && e[mM];
      }
      class E3 {
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
            jg(this.futureState.root),
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
              this.forwardEvent(new c3(i.value.snapshot));
          }),
            t.children.length &&
              this.forwardEvent(new s3(t.value.snapshot));
        }
        activateRoutes(t, n, r) {
          const o = t.value,
            i = n ? n.value : null;
          if ((jg(o), o === i))
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
                jg(a.route.value),
                this.activateChildRoutes(t, null, s.children);
            } else
              (s.attachRef = null),
                (s.route = o),
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(t, null, s.children);
          } else this.activateChildRoutes(t, null, r);
        }
      }
      class _M {
        constructor(t) {
          (this.path = t),
            (this.route = this.path[this.path.length - 1]);
        }
      }
      class bl {
        constructor(t, n) {
          (this.component = t), (this.route = n);
        }
      }
      function D3(e, t, n) {
        const r = e._root;
        return Ea(r, t ? t._root : null, n, [r.value]);
      }
      function Ri(e, t) {
        const n = Symbol(),
          r = t.get(e, n);
        return r === n
          ? 'function' != typeof e ||
            (function cN(e) {
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
            (function b3(
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
                const c = (function I3(e, t, n) {
                  if ('function' == typeof n) return n(e, t);
                  switch (n) {
                    case 'pathParamsChange':
                      return !ho(e.url, t.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !ho(e.url, t.url) ||
                        !Ln(e.queryParams, t.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return (
                        !Ug(e, t) || !Ln(e.queryParams, t.queryParams)
                      );
                    default:
                      return !Ug(e, t);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? o.canActivateChecks.push(new _M(r))
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
                      new bl(a.outlet.component, s),
                    );
              } else
                s && Da(t, a, o),
                  o.canActivateChecks.push(new _M(r)),
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
            new bl(
              o.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              o,
            ),
          );
      }
      function wa(e) {
        return 'function' == typeof e;
      }
      function CM(e) {
        return e instanceof sl || 'EmptyError' === e?.name;
      }
      const Il = Symbol('INITIAL_VALUE');
      function xi() {
        return rr(e =>
          PS(
            e.map(t =>
              t.pipe(
                bi(1),
                (function yH(...e) {
                  const t = il(e);
                  return qe((n, r) => {
                    (t ? Ig(e, n, t) : Ig(e, n)).subscribe(r);
                  });
                })(Il),
              ),
            ),
          ).pipe(
            re(t => {
              for (const n of t)
                if (!0 !== n) {
                  if (n === Il) return Il;
                  if (!1 === n || x3(n)) return n;
                }
              return !0;
            }),
            uo(t => t !== Il),
            bi(1),
          ),
        );
      }
      function x3(e) {
        return po(e) || e instanceof $g;
      }
      function EM(e) {
        return (function JT(...e) {
          return Km(e);
        })(
          It(t => {
            if ('boolean' != typeof t) throw wl(0, t);
          }),
          re(t => !0 === t),
        );
      }
      class Hg {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class Sl extends Error {
        constructor(t) {
          super(), (this.urlTree = t);
        }
      }
      function Oi(e) {
        return al(new Hg(e));
      }
      class G3 {
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
              return al(new E(4e3, !1));
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
              y = dr(i, () =>
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
            if (y instanceof fo) throw new Sl(y);
            n = y;
          }
          const s = this.applyRedirectCreateUrlTree(
            n,
            this.urlSerializer.parse(n),
            t,
            r,
          );
          if ('/' === n[0]) throw new Sl(s);
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
      const zg = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function q3(e, t, n, r, o) {
        const i = DM(e, t, n);
        return i.matched
          ? ((r = (function u3(e, t) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = qh(
                    e.providers,
                    t,
                    `Route: ${e.path}`,
                  )),
                e._injector ?? t
              );
            })(t, r)),
            (function $3(e, t, n, r) {
              const o = t.canMatch;
              return o && 0 !== o.length
                ? H(
                    o.map(s => {
                      const a = Ri(s, e);
                      return Tr(
                        (function R3(e) {
                          return e && wa(e.canMatch);
                        })(a)
                          ? a.canMatch(t, n)
                          : dr(e, () => a(t, n)),
                      );
                    }),
                  ).pipe(xi(), EM())
                : H(!0);
            })(r, t, n).pipe(re(s => (!0 === s ? i : { ...zg }))))
          : H(i);
      }
      function DM(e, t, n) {
        if ('**' === t.path)
          return (function W3(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? HS(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(n);
        if ('' === t.path)
          return 'full' === t.pathMatch &&
            (e.hasChildren() || n.length > 0)
            ? { ...zg }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: n,
                parameters: {},
                positionalParamSegments: {},
              };
        const o = (t.matcher || IH)(n, e, t);
        if (!o) return { ...zg };
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
      function wM(e, t, n, r) {
        return n.length > 0 &&
          (function Y3(e, t, n) {
            return n.some(r => Ml(e, t, r) && _n(r) !== z);
          })(e, n, r)
          ? {
              segmentGroup: new ge(t, Q3(r, new ge(n, e.children))),
              slicedSegments: [],
            }
          : 0 === n.length &&
            (function K3(e, t, n) {
              return n.some(r => Ml(e, t, r));
            })(e, n, r)
          ? {
              segmentGroup: new ge(
                e.segments,
                Z3(e, n, r, e.children),
              ),
              slicedSegments: n,
            }
          : {
              segmentGroup: new ge(e.segments, e.children),
              slicedSegments: n,
            };
      }
      function Z3(e, t, n, r) {
        const o = {};
        for (const i of n)
          if (Ml(e, t, i) && !r[_n(i)]) {
            const s = new ge([], {});
            o[_n(i)] = s;
          }
        return { ...r, ...o };
      }
      function Q3(e, t) {
        const n = {};
        n[z] = t;
        for (const r of e)
          if ('' === r.path && _n(r) !== z) {
            const o = new ge([], {});
            n[_n(r)] = o;
          }
        return n;
      }
      function Ml(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) ||
            'full' !== n.pathMatch) &&
          '' === n.path
        );
      }
      class J3 {}
      class nz {
        constructor(t, n, r, o, i, s, a) {
          (this.injector = t),
            (this.configLoader = n),
            (this.rootComponentType = r),
            (this.config = o),
            (this.urlTree = i),
            (this.paramsInheritanceStrategy = s),
            (this.urlSerializer = a),
            (this.applyRedirects = new G3(
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
          const t = wM(
            this.urlTree.root,
            [],
            [],
            this.config,
          ).segmentGroup;
          return this.match(t).pipe(
            re(({ children: n, rootSnapshot: r }) => {
              const o = new Cn(r, n),
                i = new fM('', o),
                s = (function GH(e, t, n = null, r = null) {
                  return tM(eM(e), t, n, r);
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
          const n = new El(
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
              if (r instanceof Sl)
                return (
                  (this.urlTree = r.urlTree),
                  this.match(r.urlTree.root)
                );
              throw r instanceof Hg ? this.noMatchError(r) : r;
            }),
          );
        }
        processSegmentGroup(t, n, r, o, i) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(t, n, r, i)
            : this.processSegment(t, n, r, r.segments, o, !0, i).pipe(
                re(s => (s instanceof Cn ? [s] : [])),
              );
        }
        processChildren(t, n, r, o) {
          const i = [];
          for (const s of Object.keys(r.children))
            'primary' === s ? i.unshift(s) : i.push(s);
          return dt(i).pipe(
            ul(s => {
              const a = r.children[s],
                c = (function h3(e, t) {
                  const n = e.filter(r => _n(r) === t);
                  return n.push(...e.filter(r => _n(r) !== t)), n;
                })(n, s);
              return this.processSegmentGroup(t, c, a, s, o);
            }),
            BS((s, a) => (s.push(...a), s)),
            cl(null),
            (function EH(e, t) {
              const n = arguments.length >= 2;
              return r =>
                r.pipe(
                  e ? uo((o, i) => e(o, i, r)) : Bn,
                  Mg(1),
                  n ? cl(t) : US(() => new sl()),
                );
            })(),
            bt(s => {
              if (null === s) return Oi(r);
              const a = bM(s);
              return (
                (function rz(e) {
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
            ul(c =>
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
                  if (u instanceof Hg) return H(null);
                  throw u;
                }),
              ),
            ),
            lo(c => !!c),
            Ii(c => {
              if (CM(c))
                return (function X3(e, t, n) {
                  return 0 === t.length && !e.children[n];
                })(r, o, i)
                  ? H(new J3())
                  : Oi(r);
              throw c;
            }),
          );
        }
        processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
          return _n(r) === s || (s !== z && Ml(o, i, r))
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
          } = DM(n, o, i);
          if (!c) return Oi(n);
          'string' == typeof o.redirectTo &&
            '/' === o.redirectTo[0] &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 &&
              (this.allowRedirects = !1));
          const h = new El(
              i,
              u,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              IM(o),
              _n(o),
              o.component ?? o._loadedComponent ?? null,
              o,
              SM(o),
            ),
            p = Cl(h, a, this.paramsInheritanceStrategy);
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
              bt(y =>
                this.processSegment(t, r, n, y.concat(f), s, !1, a),
              ),
            );
        }
        matchSegmentAgainstRoute(t, n, r, o, i, s) {
          const a = q3(n, r, o, t);
          return (
            '**' === r.path && (n.children = {}),
            a.pipe(
              rr(c =>
                c.matched
                  ? this.getChildConfig(
                      (t = r._injector ?? t),
                      r,
                      o,
                    ).pipe(
                      rr(({ routes: u }) => {
                        const l = r._loadedInjector ?? t,
                          {
                            parameters: d,
                            consumedSegments: f,
                            remainingSegments: h,
                          } = c,
                          p = new El(
                            f,
                            d,
                            Object.freeze({
                              ...this.urlTree.queryParams,
                            }),
                            this.urlTree.fragment,
                            IM(r),
                            _n(r),
                            r.component ?? r._loadedComponent ?? null,
                            r,
                            SM(r),
                          ),
                          g = Cl(
                            p,
                            s,
                            this.paramsInheritanceStrategy,
                          );
                        (p.params = Object.freeze(g.params)),
                          (p.data = Object.freeze(g.data));
                        const { segmentGroup: y, slicedSegments: C } =
                          wM(n, f, h, u);
                        if (0 === C.length && y.hasChildren())
                          return this.processChildren(
                            l,
                            u,
                            y,
                            p,
                          ).pipe(re(T => new Cn(p, T)));
                        if (0 === u.length && 0 === C.length)
                          return H(new Cn(p, []));
                        const m = _n(r) === i;
                        return this.processSegment(
                          l,
                          u,
                          y,
                          C,
                          m ? z : i,
                          !0,
                          p,
                        ).pipe(
                          re(
                            T =>
                              new Cn(p, T instanceof Cn ? [T] : []),
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
              : (function B3(e, t, n, r) {
                  const o = t.canLoad;
                  return void 0 === o || 0 === o.length
                    ? H(!0)
                    : H(
                        o.map(s => {
                          const a = Ri(s, e);
                          return Tr(
                            (function M3(e) {
                              return e && wa(e.canLoad);
                            })(a)
                              ? a.canLoad(t, n)
                              : dr(e, () => a(t, n)),
                          );
                        }),
                      ).pipe(xi(), EM());
                })(t, n, r).pipe(
                  bt(o =>
                    o
                      ? this.configLoader.loadChildren(t, n).pipe(
                          It(i => {
                            (n._loadedRoutes = i.routes),
                              (n._loadedInjector = i.injector);
                          }),
                        )
                      : (function z3() {
                          return al(vM(!1, Zt.GuardRejected));
                        })(),
                  ),
                )
            : H({ routes: [], injector: t });
        }
      }
      function oz(e) {
        const t = e.value.routeConfig;
        return t && '' === t.path;
      }
      function bM(e) {
        const t = [],
          n = new Set();
        for (const r of e) {
          if (!oz(r)) {
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
          const o = bM(r.children);
          t.push(new Cn(r.value, o));
        }
        return t.filter(r => !n.has(r));
      }
      function IM(e) {
        return e.data || {};
      }
      function SM(e) {
        return e.resolve || {};
      }
      function MM(e) {
        const t = e.children.map(n => MM(n)).flat();
        return [e, ...t];
      }
      function Gg(e) {
        return rr(t => {
          const n = e(t);
          return n ? dt(n).pipe(re(() => t)) : H(t);
        });
      }
      let TM = (() => {
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
              factory: () => _(lz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        lz = (() => {
          class e extends TM {
            constructor(n) {
              super(), (this.title = n);
            }
            updateTitle(n) {
              const r = this.buildTitle(n);
              void 0 !== r && this.title.setTitle(r);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(E$));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const ba = new D('', {
        providedIn: 'root',
        factory: () => ({}),
      });
      let AM = (() => {
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
              1 & r && He(0, 'router-outlet');
            },
            dependencies: [_a],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function qg(e) {
        const t = e.children && e.children.map(qg),
          n = t ? { ...e, children: t } : { ...e };
        return (
          !n.component &&
            !n.loadComponent &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== z &&
            (n.component = AM),
          n
        );
      }
      const Tl = new D('');
      let NM = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = _(V2));
          }
          loadComponent(n) {
            if (this.componentLoaders.get(n))
              return this.componentLoaders.get(n);
            if (n._loadedComponent) return H(n._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(n);
            const r = Tr(n.loadComponent()).pipe(
                re(RM),
                It(i => {
                  this.onLoadEndListener && this.onLoadEndListener(n),
                    (n._loadedComponent = i);
                }),
                Tg(() => {
                  this.componentLoaders.delete(n);
                }),
              ),
              o = new jS(r, () => new Mt()).pipe(Sg());
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
            const i = (function dz(e, t, n, r) {
                return Tr(e.loadChildren()).pipe(
                  re(RM),
                  bt(o =>
                    o instanceof ZE || Array.isArray(o)
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
                            .get(Tl, [], { optional: !0, self: !0 })
                            .flat())),
                      { routes: s.map(qg), injector: i }
                    );
                  }),
                );
              })(r, this.compiler, n, this.onLoadEndListener).pipe(
                Tg(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new jS(i, () => new Mt()).pipe(Sg());
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
      function RM(e) {
        return (function fz(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let Wg = (() => {
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
        })(),
        hz = (() => {
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
      const xM = new D(''),
        FM = new D('');
      let Al = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new Mt()),
              (this.transitionAbortSubject = new Mt()),
              (this.configLoader = _(NM)),
              (this.environmentInjector = _(Bt)),
              (this.urlSerializer = _(Mi)),
              (this.rootContexts = _(ya)),
              (this.location = _(sa)),
              (this.inputBindingEnabled =
                null !== _(Dl, { optional: !0 })),
              (this.titleStrategy = _(TM)),
              (this.options = _(ba, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy ||
                'emptyOnly'),
              (this.urlHandlingStrategy = _(Wg)),
              (this.createViewTransition = _(xM, { optional: !0 })),
              (this.navigationErrorHandler = _(FM, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => H(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = o =>
                this.events.next(new r3(o))),
              (this.configLoader.onLoadStartListener = o =>
                this.events.next(new n3(o)));
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
                rr(i => {
                  let s = !1,
                    a = !1;
                  return H(i).pipe(
                    rr(c => {
                      if (this.navigationId > i.id)
                        return (
                          this.cancelNavigationTransition(
                            i,
                            '',
                            Zt.SupersededByNewNavigation,
                          ),
                          Pn
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
                              yl.IgnoredSameUrlNavigation,
                            ),
                          ),
                          c.resolve(!1),
                          Pn
                        );
                      }
                      if (
                        this.urlHandlingStrategy.shouldProcessUrl(
                          c.rawUrl,
                        )
                      )
                        return H(c).pipe(
                          rr(d => {
                            const f = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new vl(
                                  d.id,
                                  this.urlSerializer.serialize(
                                    d.extractedUrl,
                                  ),
                                  d.source,
                                  d.restoredState,
                                ),
                              ),
                              f !== this.transitions?.getValue()
                                ? Pn
                                : Promise.resolve(d)
                            );
                          }),
                          (function iz(e, t, n, r, o, i) {
                            return bt(s =>
                              (function ez(
                                e,
                                t,
                                n,
                                r,
                                o,
                                i,
                                s = 'emptyOnly',
                              ) {
                                return new nz(
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
                          It(d => {
                            (i.targetSnapshot = d.targetSnapshot),
                              (i.urlAfterRedirects =
                                d.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: d.urlAfterRedirects,
                              });
                            const f = new aM(
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
                          y = new vl(
                            d,
                            this.urlSerializer.serialize(f),
                            h,
                            p,
                          );
                        this.events.next(y);
                        const C = dM(this.rootComponentType).snapshot;
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
                              yl.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          c.resolve(!1),
                          Pn
                        );
                      }
                    }),
                    It(c => {
                      const u = new XH(
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
                            guards: D3(
                              c.targetSnapshot,
                              c.currentSnapshot,
                              this.rootContexts,
                            ),
                          }),
                        i
                      ),
                    ),
                    (function O3(e, t) {
                      return bt(n => {
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
                          : (function F3(e, t, n, r) {
                              return dt(e).pipe(
                                bt(o =>
                                  (function U3(e, t, n, r, o) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? H(
                                          i.map(a => {
                                            const c = va(t) ?? o,
                                              u = Ri(a, c);
                                            return Tr(
                                              (function N3(e) {
                                                return (
                                                  e &&
                                                  wa(e.canDeactivate)
                                                );
                                              })(u)
                                                ? u.canDeactivate(
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                  )
                                                : dr(c, () =>
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
                              bt(a =>
                                a &&
                                (function S3(e) {
                                  return 'boolean' == typeof e;
                                })(a)
                                  ? (function k3(e, t, n, r) {
                                      return dt(t).pipe(
                                        ul(o =>
                                          Ig(
                                            (function L3(e, t) {
                                              return (
                                                null !== e &&
                                                  t &&
                                                  t(new o3(e)),
                                                H(!0)
                                              );
                                            })(o.route.parent, r),
                                            (function P3(e, t) {
                                              return (
                                                null !== e &&
                                                  t &&
                                                  t(new a3(e)),
                                                H(!0)
                                              );
                                            })(o.route, r),
                                            (function j3(e, t, n) {
                                              const r =
                                                  t[t.length - 1],
                                                i = t
                                                  .slice(
                                                    0,
                                                    t.length - 1,
                                                  )
                                                  .reverse()
                                                  .map(s =>
                                                    (function w3(e) {
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
                                                    VS(() =>
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
                                                            return Tr(
                                                              (function A3(
                                                                e,
                                                              ) {
                                                                return (
                                                                  e &&
                                                                  wa(
                                                                    e.canActivateChild,
                                                                  )
                                                                );
                                                              })(l)
                                                                ? l.canActivateChild(
                                                                    r,
                                                                    e,
                                                                  )
                                                                : dr(
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
                                            (function V3(e, t, n) {
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
                                                VS(() => {
                                                  const s =
                                                      va(t) ?? n,
                                                    a = Ri(i, s);
                                                  return Tr(
                                                    (function T3(e) {
                                                      return (
                                                        e &&
                                                        wa(
                                                          e.canActivate,
                                                        )
                                                      );
                                                    })(a)
                                                      ? a.canActivate(
                                                          t,
                                                          e,
                                                        )
                                                      : dr(s, () =>
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
                    It(c => {
                      if (
                        ((i.guardsResult = c.guardsResult),
                        c.guardsResult &&
                          'boolean' != typeof c.guardsResult)
                      )
                        throw wl(0, c.guardsResult);
                      const u = new JH(
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
                          Zt.GuardRejected,
                        ),
                        !1),
                    ),
                    Gg(c => {
                      if (c.guards.canActivateChecks.length)
                        return H(c).pipe(
                          It(u => {
                            const l = new e3(
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
                          rr(u => {
                            let l = !1;
                            return H(u).pipe(
                              (function sz(e, t) {
                                return bt(n => {
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
                                      for (const u of MM(c)) s.add(u);
                                  let a = 0;
                                  return dt(s).pipe(
                                    ul(c =>
                                      i.has(c)
                                        ? (function az(e, t, n, r) {
                                            const o = e.routeConfig,
                                              i = e._resolve;
                                            return (
                                              void 0 !== o?.title &&
                                                !pM(o) &&
                                                (i[da] = o.title),
                                              (function cz(
                                                e,
                                                t,
                                                n,
                                                r,
                                              ) {
                                                const o = Ag(e);
                                                if (0 === o.length)
                                                  return H({});
                                                const i = {};
                                                return dt(o).pipe(
                                                  bt(s =>
                                                    (function uz(
                                                      e,
                                                      t,
                                                      n,
                                                      r,
                                                    ) {
                                                      const o =
                                                          va(t) ?? r,
                                                        i = Ri(e, o);
                                                      return Tr(
                                                        i.resolve
                                                          ? i.resolve(
                                                              t,
                                                              n,
                                                            )
                                                          : dr(
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
                                                      It(a => {
                                                        if (
                                                          a instanceof
                                                          $g
                                                        )
                                                          throw wl(
                                                            new dl(),
                                                            a,
                                                          );
                                                        i[s] = a;
                                                      }),
                                                    ),
                                                  ),
                                                  Mg(1),
                                                  (function DH(e) {
                                                    return re(
                                                      () => e,
                                                    );
                                                  })(i),
                                                  Ii(s =>
                                                    CM(s)
                                                      ? Pn
                                                      : al(s),
                                                  ),
                                                );
                                              })(i, e, t, r).pipe(
                                                re(
                                                  s => (
                                                    (e._resolvedData =
                                                      s),
                                                    (e.data = Cl(
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
                                        : ((c.data = Cl(
                                            c,
                                            c.parent,
                                            e,
                                          ).resolve),
                                          H(void 0)),
                                    ),
                                    It(() => a++),
                                    Mg(1),
                                    bt(c =>
                                      a === s.size ? H(n) : Pn,
                                    ),
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              It({
                                next: () => (l = !0),
                                complete: () => {
                                  l ||
                                    this.cancelNavigationTransition(
                                      u,
                                      '',
                                      Zt.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          It(u => {
                            const l = new t3(
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
                    Gg(c => {
                      const u = l => {
                        const d = [];
                        l.routeConfig?.loadComponent &&
                          !l.routeConfig._loadedComponent &&
                          d.push(
                            this.configLoader
                              .loadComponent(l.routeConfig)
                              .pipe(
                                It(f => {
                                  l.component = f;
                                }),
                                re(() => {}),
                              ),
                          );
                        for (const f of l.children) d.push(...u(f));
                        return d;
                      };
                      return PS(u(c.targetSnapshot.root)).pipe(
                        cl(null),
                        bi(1),
                      );
                    }),
                    Gg(() => this.afterPreactivation()),
                    rr(() => {
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
                      const u = (function m3(e, t, n) {
                        const r = Ca(
                          e,
                          t._root,
                          n ? n._root : void 0,
                        );
                        return new lM(r, t);
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
                    It(() => {
                      this.events.next(new kg());
                    }),
                    ((e, t, n, r) =>
                      re(
                        o => (
                          new E3(
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
                    bi(1),
                    It({
                      next: c => {
                        (s = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new Ar(
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
                    (function wH(e) {
                      return qe((t, n) => {
                        yn(e).subscribe(
                          Ne(n, () => n.complete(), Ba),
                        ),
                          !n.closed && t.subscribe(n);
                      });
                    })(
                      this.transitionAbortSubject.pipe(
                        It(c => {
                          throw c;
                        }),
                      ),
                    ),
                    Tg(() => {
                      !s &&
                        !a &&
                        this.cancelNavigationTransition(
                          i,
                          '',
                          Zt.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === i.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    Ii(c => {
                      if (((a = !0), yM(c)))
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
                          (function _3(e) {
                            return yM(e) && po(e.url);
                          })(c)
                            ? this.events.next(
                                new _l(
                                  c.url,
                                  c.navigationBehaviorOptions,
                                ),
                              )
                            : i.resolve(!1);
                      else {
                        const u = new Fg(
                          i.id,
                          this.urlSerializer.serialize(
                            i.extractedUrl,
                          ),
                          c,
                          i.targetSnapshot ?? void 0,
                        );
                        try {
                          const l = dr(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(u),
                          );
                          if (l instanceof $g) {
                            const {
                              message: d,
                              cancellationCode: f,
                            } = wl(0, l);
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
                                new _l(
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
                      return Pn;
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
      function mz(e) {
        return e !== ma;
      }
      let vz = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: () => _(_z),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class yz {
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
      let _z = (() => {
          class e extends yz {
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
        kM = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: () => _(Cz),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        Cz = (() => {
          class e extends kM {
            constructor() {
              super(...arguments),
                (this.location = _(sa)),
                (this.urlSerializer = _(Mi)),
                (this.options = _(ba, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution ||
                  'replace'),
                (this.urlHandlingStrategy = _(Wg)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new fo()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = dM(null)),
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
              if (n instanceof vl)
                this.stateMemento = this.createStateMemento();
              else if (n instanceof Ti)
                this.rawUrlTree = r.initialUrl;
              else if (n instanceof aM) {
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
                n instanceof kg
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
                    (n.code === Zt.GuardRejected ||
                      n.code === Zt.NoDataFromResolver)
                  ? this.restoreHistory(r)
                  : n instanceof Fg
                  ? this.restoreHistory(r, !0)
                  : n instanceof Ar &&
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
      function Ez(e) {
        throw e;
      }
      const Dz = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        wz = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let or = (() => {
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
                (this.console = _(Sb)),
                (this.stateManager = _(kM)),
                (this.options = _(ba, { optional: !0 }) || {}),
                (this.pendingTasks = _(Wr)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = _(Al)),
                (this.urlSerializer = _(Mi)),
                (this.location = _(sa)),
                (this.urlHandlingStrategy = _(Wg)),
                (this._events = new Mt()),
                (this.errorHandler = this.options.errorHandler || Ez),
                (this.navigated = !1),
                (this.routeReuseStrategy = _(vz)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.config = _(Tl, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!_(Dl, {
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
                          r.code !== Zt.Redirect &&
                          r.code !== Zt.SupersededByNewNavigation)
                      )
                        this.navigated = !0;
                      else if (r instanceof Ar) this.navigated = !0;
                      else if (r instanceof _l) {
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
                              mz(o.source),
                            ...s,
                          };
                        this.scheduleNavigation(a, ma, null, c, {
                          resolve: o.resolve,
                          reject: o.reject,
                          promise: o.promise,
                        });
                      }
                    (function Iz(e) {
                      return !(e instanceof kg || e instanceof _l);
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
              (this.config = n.map(qg)), (this.navigated = !1);
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
              switch (a ?? this.options.defaultQueryParamsHandling) {
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
                d = eM(
                  o ? o.snapshot : this.routerState.snapshot.root,
                );
              } catch {
                ('string' != typeof n[0] || '/' !== n[0][0]) &&
                  (n = []),
                  (d = this.currentUrlTree.root);
              }
              return tM(d, n, l, u ?? null);
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
                (function bz(e) {
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
                  !0 === r ? { ...Dz } : !1 === r ? { ...wz } : r),
                po(n))
              )
                return GS(this.currentUrlTree, n, o);
              const i = this.parseUrl(n);
              return GS(this.currentUrlTree, i, o);
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
                (function PM(e, t) {
                  e.events
                    .pipe(
                      uo(
                        n =>
                          n instanceof Ar ||
                          n instanceof go ||
                          n instanceof Fg ||
                          n instanceof Ti,
                      ),
                      re(n =>
                        n instanceof Ar || n instanceof Ti
                          ? Ia.COMPLETE
                          : n instanceof go &&
                            (n.code === Zt.Redirect ||
                              n.code === Zt.SupersededByNewNavigation)
                          ? Ia.REDIRECTING
                          : Ia.FAILED,
                      ),
                      uo(n => n !== Ia.REDIRECTING),
                      bi(1),
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
        Nl = (() => {
          class e {
            constructor(n, r, o, i, s, a) {
              (this.router = n),
                (this.route = r),
                (this.tabIndexAttribute = o),
                (this.renderer = i),
                (this.el = s),
                (this.locationStrategy = a),
                (this.href = null),
                (this.onChanges = new Mt()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const c = s.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === c || 'area' === c),
                this.isAnchorElement
                  ? (this.subscription = n.events.subscribe(u => {
                      u instanceof Ar && this.updateHref();
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
                  : (function Q_(e, t, n) {
                      return (function yO(e, t) {
                        return ('src' === t &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === t &&
                            ('base' === e || 'link' === e))
                          ? Z_
                          : Wf;
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
                w(or),
                w(Ni),
                (function os(e) {
                  return (function $R(e, t) {
                    if ('class' === t) return e.classes;
                    if ('style' === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                      const r = n.length;
                      let o = 0;
                      for (; o < r; ) {
                        const i = n[o];
                        if (Vv(i)) break;
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
                w(Kn),
                w(Ht),
                w(Ei),
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
                  2 & r && Nn('target', o.target);
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
              features: [WE, Yt],
            }));
          }
          return e;
        })();
      const Zg = new D('');
      let LM = (() => {
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
              n instanceof vl
                ? ((this.store[this.lastId] =
                    this.viewportScroller.getScrollPosition()),
                  (this.lastSource = n.navigationTrigger),
                  (this.restoredId = n.restoredState
                    ? n.restoredState.navigationId
                    : 0))
                : n instanceof Ar
                ? ((this.lastId = n.id),
                  this.scheduleScrollEvent(
                    n,
                    this.urlSerializer.parse(n.urlAfterRedirects)
                      .fragment,
                  ))
                : n instanceof Ti &&
                  n.code === yl.IgnoredSameUrlNavigation &&
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
              n instanceof cM &&
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
                    new cM(
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
            !(function CC() {
              throw new Error('invalid');
            })();
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function VM(e) {
        return e.routerState.root;
      }
      function jn(e, t) {
        return { ɵkind: e, ɵproviders: t };
      }
      function jM() {
        const e = _(nt);
        return t => {
          const n = e.get(Fn);
          if (t !== n.components[0]) return;
          const r = e.get(or),
            o = e.get(UM);
          1 === e.get(Qg) && r.initialNavigation(),
            e.get(BM, null, Y.Optional)?.setUpPreloading(),
            e.get(Zg, null, Y.Optional)?.init(),
            r.resetRootComponentType(n.componentTypes[0]),
            o.closed || (o.next(), o.complete(), o.unsubscribe());
        };
      }
      const UM = new D('', { factory: () => new Mt() }),
        Qg = new D('', { providedIn: 'root', factory: () => 1 }),
        BM = new D('');
      let Pz = (() => {
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
                1 & r && He(0, 'router-outlet');
              },
              dependencies: [_a],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Lz = (() => {
          class e {
            constructor(n) {
              this.router = n;
            }
            navigate(n) {
              this.router.navigate([n]);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(A(or));
            });
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
              return new (r || e)(w(Kn), w(Ht));
            });
            static #t = (this.ɵdir = V({ type: e }));
          }
          return e;
        })(),
        mo = (() => {
          class e extends HM {
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
      const Un = new D(''),
        Bz = { provide: Un, useExisting: ye(() => Rl), multi: !0 },
        Hz = new D('');
      let Rl = (() => {
        class e extends HM {
          constructor(n, r, o) {
            super(n, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function $z() {
                  const e = Sr() ? Sr().getUserAgent() : '';
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
            return new (r || e)(w(Kn), w(Ht), w(Hz, 8));
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
            features: [Ae([Bz]), he],
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
      function GM(e) {
        return null != e && 'number' == typeof e.length;
      }
      const ft = new D(''),
        Rr = new D(''),
        zz =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class rn {
        static min(t) {
          return (function qM(e) {
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
          return (function WM(e) {
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
          return (function ZM(e) {
            return Nr(e.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function QM(e) {
            return !0 === e.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function YM(e) {
            return Nr(e.value) || zz.test(e.value)
              ? null
              : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function KM(e) {
            return t =>
              Nr(t.value) || !GM(t.value)
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
          return (function XM(e) {
            return t =>
              GM(t.value) && t.value.length > e
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
          return (function JM(e) {
            if (!e) return xl;
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
          return s0(t);
        }
        static composeAsync(t) {
          return a0(t);
        }
      }
      function xl(e) {
        return null;
      }
      function e0(e) {
        return null != e;
      }
      function t0(e) {
        return ea(e) ? dt(e) : e;
      }
      function n0(e) {
        let t = {};
        return (
          e.forEach(n => {
            t = null != n ? { ...t, ...n } : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function r0(e, t) {
        return t.map(n => n(e));
      }
      function o0(e) {
        return e.map(t =>
          (function Gz(e) {
            return !e.validate;
          })(t)
            ? t
            : n => t.validate(n),
        );
      }
      function s0(e) {
        if (!e) return null;
        const t = e.filter(e0);
        return 0 == t.length
          ? null
          : function (n) {
              return n0(r0(n, t));
            };
      }
      function Yg(e) {
        return null != e ? s0(o0(e)) : null;
      }
      function a0(e) {
        if (!e) return null;
        const t = e.filter(e0);
        return 0 == t.length
          ? null
          : function (n) {
              return (function jz(...e) {
                const t = wg(e),
                  { args: n, keys: r } = OS(e),
                  o = new Oe(i => {
                    const { length: s } = n;
                    if (!s) return void i.complete();
                    const a = new Array(s);
                    let c = s,
                      u = s;
                    for (let l = 0; l < s; l++) {
                      let d = !1;
                      yn(n[l]).subscribe(
                        Ne(
                          i,
                          f => {
                            d || ((d = !0), u--), (a[l] = f);
                          },
                          () => c--,
                          void 0,
                          () => {
                            (!c || !d) &&
                              (u || i.next(r ? kS(r, a) : a),
                              i.complete());
                          },
                        ),
                      );
                    }
                  });
                return t ? o.pipe(FS(t)) : o;
              })(r0(n, t).map(t0)).pipe(re(n0));
            };
      }
      function Kg(e) {
        return null != e ? a0(o0(e)) : null;
      }
      function c0(e, t) {
        return null === e
          ? [t]
          : Array.isArray(e)
          ? [...e, t]
          : [e, t];
      }
      function u0(e) {
        return e._rawValidators;
      }
      function l0(e) {
        return e._rawAsyncValidators;
      }
      function Xg(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function Ol(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      function d0(e, t) {
        const n = Xg(t);
        return (
          Xg(e).forEach(o => {
            Ol(n, o) || n.push(o);
          }),
          n
        );
      }
      function f0(e, t) {
        return Xg(t).filter(n => !Ol(e, n));
      }
      class h0 {
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
            (this._composedValidatorFn = Yg(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = Kg(
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
      class St extends h0 {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class xr extends h0 {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class p0 {
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
      let g0 = (() => {
          class e extends p0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(xr, 2));
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
        m0 = (() => {
          class e extends p0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(St, 10));
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
        kl = 'INVALID',
        Fi = 'PENDING',
        Ma = 'DISABLED';
      class ki {}
      class y0 extends ki {
        constructor(t, n) {
          super(), (this.value = t), (this.source = n);
        }
      }
      class tm extends ki {
        constructor(t, n) {
          super(), (this.pristine = t), (this.source = n);
        }
      }
      class nm extends ki {
        constructor(t, n) {
          super(), (this.touched = t), (this.source = n);
        }
      }
      class Pl extends ki {
        constructor(t, n) {
          super(), (this.status = t), (this.source = n);
        }
      }
      class Yz extends ki {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      class Kz extends ki {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      function rm(e) {
        return (Ll(e) ? e.validators : e) || null;
      }
      function om(e, t) {
        return (Ll(t) ? t.asyncValidators : e) || null;
      }
      function Ll(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function _0(e, t, n) {
        const r = e.controls;
        if (!(t ? Object.keys(r) : r).length) throw new E(1e3, '');
        if (!r[n]) throw new E(1001, '');
      }
      function C0(e, t, n) {
        e._forEachChild((r, o) => {
          if (void 0 === n[o]) throw new E(1002, '');
        });
      }
      class Vl {
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
            (this._events = new Mt()),
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
          return kn(this.statusReactive);
        }
        set status(t) {
          kn(() => this.statusReactive.set(t));
        }
        get valid() {
          return this.status === Sa;
        }
        get invalid() {
          return this.status === kl;
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
          return kn(this.pristineReactive);
        }
        set pristine(t) {
          kn(() => this.pristineReactive.set(t));
        }
        get dirty() {
          return !this.pristine;
        }
        get touched() {
          return kn(this.touchedReactive);
        }
        set touched(t) {
          kn(() => this.touchedReactive.set(t));
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
          this.setValidators(d0(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(d0(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(f0(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(f0(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return Ol(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return Ol(this._rawAsyncValidators, t);
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
              this._events.next(new nm(!0, r));
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
              this._events.next(new nm(!1, r));
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
              this._events.next(new tm(!1, r));
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
              this._events.next(new tm(!0, r));
        }
        markAsPending(t = {}) {
          this.status = Fi;
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new Pl(this.status, n)),
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
            (this._events.next(new y0(this.value, r)),
            this._events.next(new Pl(this.status, r)),
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
            (this._events.next(new y0(this.value, n)),
            this._events.next(new Pl(this.status, n)),
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
            const r = t0(this.asyncValidator(this));
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
            (t || r) && this._events.next(new Pl(this.status, n)),
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
            ? kl
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Fi)
            ? Fi
            : this._anyControlsHaveStatus(kl)
            ? kl
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
            o && this._events.next(new tm(this.pristine, n));
        }
        _updateTouched(t = {}, n) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new nm(this.touched, n)),
            this._parent &&
              !t.onlySelf &&
              this._parent._updateTouched(t, n);
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          Ll(t) &&
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
            (this._composedValidatorFn = (function Xz(e) {
              return Array.isArray(e) ? Yg(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(t) {
          (this._rawAsyncValidators = Array.isArray(t)
            ? t.slice()
            : t),
            (this._composedAsyncValidatorFn = (function Jz(e) {
              return Array.isArray(e) ? Kg(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Ta extends Vl {
        constructor(t, n, r) {
          super(rm(n), om(r, n)),
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
          C0(this, 0, t),
            Object.keys(t).forEach(r => {
              _0(this, !0, r),
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
      class E0 extends Ta {}
      const Pi = new D('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => jl,
        }),
        jl = 'always';
      function Aa(e, t, n = jl) {
        im(e, t),
          t.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === n) &&
            t.valueAccessor.setDisabledState?.(e.disabled),
          (function tG(e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && D0(e, t);
            });
          })(e, t),
          (function rG(e, t) {
            const n = (r, o) => {
              t.valueAccessor.writeValue(r),
                o && t.viewToModelUpdate(r);
            };
            e.registerOnChange(n),
              t._registerOnDestroy(() => {
                e._unregisterOnChange(n);
              });
          })(e, t),
          (function nG(e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && D0(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          (function eG(e, t) {
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
      function Bl(e, t, n = !0) {
        const r = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(r),
          t.valueAccessor.registerOnTouched(r)),
          Hl(e, t),
          e &&
            (t._invokeOnDestroyCallbacks(),
            e._registerOnCollectionChange(() => {}));
      }
      function $l(e, t) {
        e.forEach(n => {
          n.registerOnValidatorChange &&
            n.registerOnValidatorChange(t);
        });
      }
      function im(e, t) {
        const n = u0(e);
        null !== t.validator
          ? e.setValidators(c0(n, t.validator))
          : 'function' == typeof n && e.setValidators([n]);
        const r = l0(e);
        null !== t.asyncValidator
          ? e.setAsyncValidators(c0(r, t.asyncValidator))
          : 'function' == typeof r && e.setAsyncValidators([r]);
        const o = () => e.updateValueAndValidity();
        $l(t._rawValidators, o), $l(t._rawAsyncValidators, o);
      }
      function Hl(e, t) {
        let n = !1;
        if (null !== e) {
          if (null !== t.validator) {
            const o = u0(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.validator);
              i.length !== o.length && ((n = !0), e.setValidators(i));
            }
          }
          if (null !== t.asyncValidator) {
            const o = l0(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.asyncValidator);
              i.length !== o.length &&
                ((n = !0), e.setAsyncValidators(i));
            }
          }
        }
        const r = () => {};
        return (
          $l(t._rawValidators, r), $l(t._rawAsyncValidators, r), n
        );
      }
      function D0(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function I0(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function S0(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const Or = class extends Vl {
        constructor(t = null, n, r) {
          super(rm(n), om(r, n)),
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
            Ll(n) &&
              (n.nonNullable || n.initialValueIsDefault) &&
              (this.defaultValue = S0(t) ? t.value : t);
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
          I0(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          I0(this._onDisabledChange, t);
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
          S0(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      };
      Promise.resolve();
      let R0 = (() => {
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
      const lm = new D(''),
        mG = { provide: xr, useExisting: ye(() => dm) };
      let dm = (() => {
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
              (this.valueAccessor = (function cm(e, t) {
                if (!t) return null;
                let n, r, o;
                return (
                  Array.isArray(t),
                  t.forEach(i => {
                    i.constructor === Rl
                      ? (n = i)
                      : (function sG(e) {
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
              r && Bl(r, this, !1),
                Aa(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function am(e, t) {
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
            this.form && Bl(this.form, this, !1);
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
              w(Rr, 10),
              w(Un, 10),
              w(lm, 8),
              w(Pi, 8),
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
            features: [Ae([mG]), he, Yt],
          }));
        }
        return e;
      })();
      const vG = { provide: St, useExisting: ye(() => zl) };
      let zl = (() => {
          class e extends St {
            get submitted() {
              return kn(this._submittedReactive);
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
                (Hl(this.form, this),
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
              Bl(n.control || null, n, !1),
                (function aG(e, t) {
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
                (function b0(e, t) {
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
                this.form._events.next(new Yz(this.control)),
                'dialog' === n?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(n = void 0) {
              this.form.reset(n),
                this._submittedReactive.set(!1),
                this.form._events.next(new Kz(this.form));
            }
            _updateDomValue() {
              this.directives.forEach(n => {
                const r = n.control,
                  o = this.form.get(n.path);
                r !== o &&
                  (Bl(r || null, n),
                  (e => e instanceof Or)(o) &&
                    (Aa(o, n, this.callSetDisabledState),
                    (n.control = o)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(n) {
              const r = this.form.get(n.path);
              (function w0(e, t) {
                im(e, t);
              })(r, n),
                r.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(n) {
              if (this.form) {
                const r = this.form.get(n.path);
                r &&
                  (function oG(e, t) {
                    return Hl(e, t);
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
              im(this.form, this),
                this._oldForm && Hl(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(ft, 10), w(Rr, 10), w(Pi, 8));
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
              features: [Ae([vG]), he, Yt],
            }));
          }
          return e;
        })(),
        kG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = qi({ type: e }));
            static #n = (this.ɵinj = bo({}));
          }
          return e;
        })();
      class Z0 extends Vl {
        constructor(t, n, r) {
          super(rm(n), om(r, n)),
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
          C0(this, 0, t),
            t.forEach((r, o) => {
              _0(this, !1, o),
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
      function Q0(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let PG = (() => {
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
                Q0(r)
                  ? (i = r)
                  : null !== r &&
                    ((i.validators = r.validator),
                    (i.asyncValidators = r.asyncValidator)),
                new Ta(o, i)
              );
            }
            record(n, r = null) {
              const o = this._reduceControls(n);
              return new E0(o, r);
            }
            control(n, r, o) {
              let i = {};
              return this.useNonNullable
                ? (Q0(r)
                    ? (i = r)
                    : ((i.validators = r), (i.asyncValidators = o)),
                  new Or(n, { ...i, nonNullable: !0 }))
                : new Or(n, r, o);
            }
            array(n, r, o) {
              const i = n.map(s => this._createControl(s));
              return new Z0(i, r, o);
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
              return n instanceof Or || n instanceof Vl
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
        Y0 = (() => {
          class e {
            static withConfig(n) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: lm,
                    useValue:
                      n.warnOnNgModelWithFormControl ?? 'always',
                  },
                  {
                    provide: Pi,
                    useValue: n.callSetDisabledState ?? jl,
                  },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = qi({ type: e }));
            static #n = (this.ɵinj = bo({ imports: [kG] }));
          }
          return e;
        })();
      const LG = ['*'];
      let vm = (() => {
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
            ngContentSelectors: LG,
            decls: 2,
            vars: 1,
            consts: [[1, 'flex', 3, 'ngStyle']],
            template: function (r, o) {
              1 & r && (Ws(), Z(0, 'div', 0), Zs(1), Q()),
                2 & r && R('ngStyle', o.buildStyles());
            },
            dependencies: [WI],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}',
            ],
          }));
        }
        return e;
      })();
      function VG(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'p', 2),
            ne('click', function () {
              return un(n), ln(ae().onClick());
            }),
            Jt(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae();
          j(),
            Dr('margin', n.margin),
            R('ngClass', n.textColor),
            j(),
            wr(' ', n.value, ' ');
        }
      }
      function jG(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'p', 3),
            ne('click', function () {
              return un(n), ln(ae().onClick());
            }),
            Jt(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae();
          j(),
            Dr('margin', n.margin),
            R('ngClass', n.textColor),
            j(),
            wr(' ', n.value, ' ');
        }
      }
      function UG(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'h1', 4),
            ne('click', function () {
              return un(n), ln(ae().onClick());
            }),
            Jt(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae();
          j(),
            Dr('margin', n.margin),
            R('ngClass', n.textColor),
            j(),
            wr(' ', n.value, ' ');
        }
      }
      function BG(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'h2', 5),
            ne('click', function () {
              return un(n), ln(ae().onClick());
            }),
            Jt(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae();
          j(),
            Dr('margin', n.margin),
            R('ngClass', n.textColor),
            j(),
            wr(' ', n.value, ' ');
        }
      }
      function $G(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'h3', 6),
            ne('click', function () {
              return un(n), ln(ae().onClick());
            }),
            Jt(2),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae();
          j(),
            Dr('margin', n.margin),
            R('ngClass', n.textColor),
            j(),
            wr(' ', n.value, ' ');
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
                Xn(1, VG, 3, 4, 'ng-container', 1)(
                  2,
                  jG,
                  3,
                  4,
                  'ng-container',
                  1,
                )(3, UG, 3, 4, 'ng-container', 1)(
                  4,
                  BG,
                  3,
                  4,
                  'ng-container',
                  1,
                )(5, $G, 3, 4, 'ng-container', 1),
                je()),
                2 & r &&
                  (R('ngSwitch', o.type),
                  j(),
                  R('ngSwitchCase', 'tiny'),
                  j(),
                  R('ngSwitchCase', 'paragraph'),
                  j(),
                  R('ngSwitchCase', 'header1'),
                  j(),
                  R('ngSwitchCase', 'header2'),
                  j(),
                  R('ngSwitchCase', 'header3'));
            },
            dependencies: [sg, UI, Ju, GI],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.text[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-style:normal;margin:0}.text__default[_ngcontent-%COMP%]{color:#454545}.text__primary[_ngcontent-%COMP%]{color:#f1f1f1}.text__secondary[_ngcontent-%COMP%]{color:#ccc}.text__tertiary[_ngcontent-%COMP%]{color:#7a7a7a}.text__accent[_ngcontent-%COMP%]{color:#4e31aa}.text__error[_ngcontent-%COMP%]{color:#e23636}.text__warning[_ngcontent-%COMP%]{color:#edb95e}.text__success[_ngcontent-%COMP%]{color:#448623}.text__info[_ngcontent-%COMP%]{color:#415058}.text__tiny[_ngcontent-%COMP%]{font-size:.9em}.text__paragraph[_ngcontent-%COMP%]{font-size:1em}.text__header1[_ngcontent-%COMP%]{font-size:2em}.text__header2[_ngcontent-%COMP%]{font-size:1.5em}.text__header3[_ngcontent-%COMP%]{font-size:1em}',
            ],
          }));
        }
        return e;
      })();
      const HG = ['self'];
      function zG(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'lib-text', 3),
            ne('clickEvent', function () {
              return un(n), ln(ae().onClick());
            }),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae();
          j(),
            R('value', n.control.label.value)(
              'textColor',
              n.textColor,
            );
        }
      }
      let GG = (() => {
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
                  (function Ow(e, t, n) {
                    IE(e, t, n);
                  })(HG, 5),
                2 & r)
              ) {
                let i;
                (function vp(e) {
                  const t = v(),
                    n = G(),
                    r = af();
                  yc(r + 1);
                  const o = $h(n, r);
                  if (
                    e.dirty &&
                    (function pR(e) {
                      return !(4 & ~e[N]);
                    })(t) === !(2 & ~o.metadata.flags)
                  ) {
                    if (null === o.matches) e.reset([]);
                    else {
                      const i = TE(t, r);
                      e.reset(i, r_), e.notifyOnChanges();
                    }
                    return !0;
                  }
                  return !1;
                })((i = yp())) && (o.self = i.first);
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
                const i = On();
                Xn(0, zG, 2, 2, 'ng-container', 1),
                  Z(1, 'input', 2, 0),
                  ne('focus', function () {
                    return un(i), ln(o.onFocus());
                  })('blur', function () {
                    return un(i), ln(o.onBlur());
                  }),
                  Q();
              }
              2 & r &&
                (R('ngIf', o.control.label.isVisible),
                j(),
                R('value', o.control.input.defaultValue)(
                  'type',
                  o.control.input.type,
                )('placeholder', o.control.input.placeholder)(
                  'formControl',
                  o.form,
                ));
            },
            dependencies: [sg, Xu, Y0, Rl, g0, dm, yo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.input[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #ccc;color:#454545;font-size:1em;background-color:transparent;outline:none;width:100%}.input[_ngcontent-%COMP%]:focus{border:1px solid #4e31aa;color:#4e31aa}',
            ],
          }));
        }
        return e;
      })();
      const qG = ['*'];
      let K0 = (() => {
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
              ngContentSelectors: qG,
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
                    R('type', o.isSubmit ? 'submit' : 'button');
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.button[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #4e31aa;background-color:#4e31aa;cursor:pointer;outline:none}.button[_ngcontent-%COMP%]:focus{outline-offset:3px;outline:1px solid #4e31aa}.button[_ngcontent-%COMP%]:active{transform:scale(.95)}',
              ],
            }));
          }
          return e;
        })(),
        WG = (() => {
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
                  He(1, 'lib-text', 1),
                  Q()),
                  2 & r &&
                    (R('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    j(),
                    R('value', o.control.label));
              },
              dependencies: [K0, yo],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        ZG = (() => {
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
                1 & r && He(0, 'img', 0),
                  2 & r && R('src', o.src, Wf)('alt', o.alt);
              },
              styles: [
                '[_nghost-%COMP%]{display:contents}.icon[_ngcontent-%COMP%]{display:block;height:100%}',
              ],
            }));
          }
          return e;
        })(),
        QG = (() => {
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
                  He(1, 'lib-icon', 1),
                  Q()),
                  2 & r &&
                    (R('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    j(),
                    R('src', o.control.icon)('alt', o.control.alt));
              },
              dependencies: [K0, ZG],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function YG(e, t) {
        if ((1 & e && (Ve(0), He(1, 'lib-text', 4), je()), 2 & e)) {
          const n = ae();
          j(), R('value', n.control.tip);
        }
      }
      let KG = (() => {
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
                  Xn(1, YG, 2, 1, 'ng-container', 1),
                  Z(2, 'a', 2),
                  He(3, 'lib-text', 3),
                  Q()()),
                  2 & r &&
                    (j(),
                    R('ngIf', '' !== o.control.tip),
                    j(),
                    R('routerLink', o.control.path),
                    j(),
                    R('value', o.control.label));
              },
              dependencies: [Xu, yo, Nl, vm],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}',
              ],
            }));
          }
          return e;
        })(),
        XG = (() => {
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
                1 & r && (Z(0, 'div', 0), He(1, 'lib-text', 1), Q()),
                  2 & r && (j(), R('value', o.value));
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
      let JG = (() => {
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
              1 & r && (Z(0, 'div', 0), He(1, 'lib-text', 1), Q()),
                2 & r && (j(), R('value', o.value));
            },
            dependencies: [yo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.success[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(68,134,35,.2509803922);background-color:#44862340}',
            ],
          }));
        }
        return e;
      })();
      function e8(e, t) {
        if ((1 & e && (Ve(0), He(1, 'lib-input', 6), je()), 2 & e)) {
          const n = ae().$implicit,
            r = ae();
          j(), R('form', r.getFormControl(n.id))('control', n);
        }
      }
      function t8(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'lib-button-text', 7),
            ne('clickEvent', function () {
              return un(n), ln(ae(2).onSubmit());
            }),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae().$implicit,
            r = ae();
          j(), R('form', r.getFormControl(n.id))('control', n);
        }
      }
      function n8(e, t) {
        if (1 & e) {
          const n = On();
          Ve(0),
            Z(1, 'lib-button-icon', 7),
            ne('clickEvent', function () {
              return un(n), ln(ae(2).onSubmit());
            }),
            Q(),
            je();
        }
        if (2 & e) {
          const n = ae().$implicit,
            r = ae();
          j(), R('form', r.getFormControl(n.id))('control', n);
        }
      }
      function r8(e, t) {
        if ((1 & e && (Ve(0), He(1, 'lib-link', 6), je()), 2 & e)) {
          const n = ae().$implicit,
            r = ae();
          j(), R('form', r.getFormControl(n.id))('control', n);
        }
      }
      function o8(e, t) {
        if ((1 & e && (Ve(0), He(1, 'lib-text', 8), je()), 2 & e)) {
          const n = ae().$implicit;
          j(), R('value', n.value)('margin', n.margin);
        }
      }
      function i8(e, t) {
        if ((1 & e && (Ve(0), He(1, 'lib-error', 9), je()), 2 & e)) {
          const n = ae(2).$implicit,
            r = ae();
          j(), R('value', r.getFormControlError(n.id));
        }
      }
      function s8(e, t) {
        if (
          (1 & e && (Ve(0), Xn(1, i8, 2, 1, 'ng-container', 4), je()),
          2 & e)
        ) {
          const n = ae().$implicit,
            r = ae();
          j(), R('ngIf', r.formControlInvalid(n.id));
        }
      }
      function a8(e, t) {
        if (
          (1 & e &&
            (Ve(0),
            Z(1, 'lib-flex', 5),
            Xn(2, e8, 2, 2, 'ng-container', 4)(
              3,
              t8,
              2,
              2,
              'ng-container',
              4,
            )(4, n8, 2, 2, 'ng-container', 4)(
              5,
              r8,
              2,
              2,
              'ng-container',
              4,
            )(6, o8, 2, 2, 'ng-container', 4)(
              7,
              s8,
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
            R('alignItems', n.alignItems),
            j(),
            R('ngIf', 'input' === n.kind),
            j(),
            R('ngIf', 'buttonText' === n.kind),
            j(),
            R('ngIf', 'buttonIcon' === n.kind),
            j(),
            R('ngIf', 'link' === n.kind),
            j(),
            R('ngIf', 'text' === n.kind),
            j(),
            R('ngIf', n.validation.isVisible);
        }
      }
      function c8(e, t) {
        if (
          (1 & e && (Ve(0), He(1, 'lib-success', 9), je()), 2 & e)
        ) {
          const n = ae();
          j(), R('value', n.formSuccessMessage);
        }
      }
      function u8(e, t) {
        if ((1 & e && (Ve(0), He(1, 'lib-error', 9), je()), 2 & e)) {
          const n = ae();
          j(), R('value', n.formErrorMessage);
        }
      }
      let Gl = (() => {
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
              return new (r || e)(w(PG));
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
                  Xn(3, a8, 8, 7, 'ng-container', 3),
                  Q(),
                  Xn(4, c8, 2, 1, 'ng-container', 4)(
                    5,
                    u8,
                    2,
                    1,
                    'ng-container',
                    4,
                  ),
                  Q()()),
                  2 & r &&
                    (R('formGroup', o.formGroup),
                    j(),
                    R('flexDirection', o.flexDirection),
                    j(),
                    R('flexDirection', o.flexDirection),
                    j(),
                    R('ngForOf', o.baseForm.controls),
                    j(),
                    R('ngIf', o.formGroupValid),
                    j(),
                    R('ngIf', o.formGroupInvalid));
              },
              dependencies: [
                sg,
                $I,
                Xu,
                Y0,
                R0,
                m0,
                zl,
                vm,
                GG,
                WG,
                QG,
                KG,
                XG,
                JG,
                yo,
              ],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        l8 = (() => {
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
                        validators: [rn.required, rn.email],
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
                        validators: [rn.required],
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
                    R('baseForm', o.loginForm)('resetIfError', !0);
              },
              dependencies: [Gl],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        d8 = (() => {
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
                        validators: [rn.required, rn.email],
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
                    R('baseForm', o.forgotPasswordForm)(
                      'resetIfError',
                      !1,
                    );
              },
              dependencies: [Gl],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        f8 = (() => {
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
                        validators: [rn.required, rn.email],
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
                        validators: [rn.required],
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
                        validators: [rn.required],
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
                        validators: [rn.required],
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
                    R('baseForm', o.registrationForm)(
                      'resetIfError',
                      !0,
                    );
              },
              dependencies: [Gl],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        h8 = (() => {
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
                        validators: [rn.required],
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
                        validators: [rn.required],
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
                    R('baseForm', o.changePasswordForm)(
                      'resetIfError',
                      !0,
                    );
              },
              dependencies: [Gl],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const p8 = ['*'];
      let g8 = (() => {
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
            ngContentSelectors: p8,
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
      const m8 = ['*'];
      let ql = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = oe({
            type: e,
            selectors: [['lib-auth']],
            standalone: !0,
            features: [ie],
            ngContentSelectors: m8,
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
                He(5, 'lib-text', 5),
                Q(),
                Zs(6),
                Q()()()());
            },
            dependencies: [vm, yo, g8],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.auth[_ngcontent-%COMP%]{padding:1rem}',
            ],
          }));
        }
        return e;
      })();
      rt(972);
      let w8 = (() => {
          class e {
            constructor(n) {
              (this.route = n), (this.event = new K());
            }
            onEvent(n) {
              this.route.navigate('/dashboard'), this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(Lz));
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
              dependencies: [ql, l8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        b8 = (() => {
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
              dependencies: [ql, d8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        I8 = (() => {
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
              dependencies: [ql, f8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        S8 = (() => {
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
              dependencies: [ql, h8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        M8 = (() => {
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
                1 & r && He(0, 'router-outlet');
              },
              dependencies: [_a],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        T8 = (() => {
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
                1 & r && (Z(0, 'p'), Jt(1, 'statistics'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        A8 = (() => {
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
                1 & r && (Z(0, 'p'), Jt(1, 'courses'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        N8 = (() => {
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
                1 & r && He(0, 'router-outlet');
              },
              dependencies: [_a],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        R8 = (() => {
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
                1 & r && (Z(0, 'p'), Jt(1, 'roadmap'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        x8 = (() => {
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
                1 & r && (Z(0, 'p'), Jt(1, 'account'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        O8 = (() => {
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
                1 & r && (Z(0, 'p'), Jt(1, 'http-404'), Q());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const j8 = {
        providers: [
          (function Nz(e, ...t) {
            return To([
              { provide: Tl, multi: !0, useValue: e },
              [],
              { provide: Ni, useFactory: VM, deps: [or] },
              { provide: Tu, multi: !0, useFactory: jM },
              t.map(n => n.ɵproviders),
            ]);
          })(
            [
              { path: '', redirectTo: '/login', pathMatch: 'full' },
              { path: 'login', component: w8 },
              { path: 'registration', component: I8 },
              { path: 'forgot-password', component: b8 },
              { path: 'change-password', component: S8 },
              {
                path: 'dashboard',
                component: M8,
                children: [
                  {
                    path: '',
                    redirectTo: 'statistics',
                    pathMatch: 'full',
                  },
                  { path: 'statistics', component: T8 },
                  { path: 'courses', component: A8 },
                  { path: 'account', component: x8 },
                  {
                    path: 'course/:courseId',
                    component: N8,
                    children: [
                      { path: 'roadmap', component: R8 },
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
                                  (Z(0, 'p'), Jt(1, 'quiz'), Q());
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
              { path: '**', component: O8 },
            ],
            (function kz() {
              return jn(6, [{ provide: Ei, useClass: tU }]);
            })(),
            (function xz(e = {}) {
              return jn(4, [
                {
                  provide: Zg,
                  useFactory: () => {
                    const n = _(yB),
                      r = _(le),
                      o = _(Al),
                      i = _(Mi);
                    return new LM(i, o, n, r, e);
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
      class U8 extends at {
        constructor(t, n) {
          super();
        }
        schedule(t, n = 0) {
          return this;
        }
      }
      const Wl = {
        setInterval(e, t, ...n) {
          const { delegate: r } = Wl;
          return r?.setInterval
            ? r.setInterval(e, t, ...n)
            : setInterval(e, t, ...n);
        },
        clearInterval(e) {
          const { delegate: t } = Wl;
          return (t?.clearInterval || clearInterval)(e);
        },
        delegate: void 0,
      };
      class B8 extends U8 {
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
          return Wl.setInterval(t.flush.bind(t, this), r);
        }
        recycleAsyncId(t, n, r = 0) {
          if (null != r && this.delay === r && !1 === this.pending)
            return n;
          null != n && Wl.clearInterval(n);
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
      const X0 = {
        now: () => (X0.delegate || Date).now(),
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
      Ra.now = X0.now;
      class H8 extends Ra {
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
      const G8 = new (class z8 extends H8 {})(
        class $8 extends B8 {
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
      function Q8(e, t) {
        return e === t;
      }
      function eT(e, t) {
        const n = !t?.manualCleanup;
        n &&
          !t?.injector &&
          (function cc(e) {
            if (!Kv()) throw new E(-203, !1);
          })();
        const r = n ? t?.injector?.get(qr) ?? _(qr) : null,
          o = (function X8(e = Object.is) {
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
      function ym(e, t) {
        return Object.defineProperty(t, 'type', {
          value: e,
          writable: !1,
        });
      }
      const nT = '@ngrx/store/init';
      let Li = (() => {
        class e extends mt {
          constructor() {
            super({ type: nT });
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
      const r4 = [Li],
        rT = new D('@ngrx/store Internal Root Guard'),
        oT = new D('@ngrx/store Internal Initial State'),
        Cm = new D('@ngrx/store Initial State'),
        iT = new D('@ngrx/store Reducer Factory'),
        sT = new D('@ngrx/store Internal Reducer Factory Provider'),
        aT = new D('@ngrx/store Initial Reducers'),
        Em = new D('@ngrx/store Internal Initial Reducers'),
        uT =
          (new D('@ngrx/store Store Features'),
          new D('@ngrx/store Internal Store Reducers')),
        pT =
          (new D('@ngrx/store Internal Feature Reducers'),
          new D('@ngrx/store Internal Feature Configs'),
          new D('@ngrx/store Internal Store Features'),
          new D('@ngrx/store Internal Feature Reducers Token'),
          new D('@ngrx/store Feature Reducers'),
          new D('@ngrx/store User Provided Meta Reducers')),
        Zl = new D('@ngrx/store Meta Reducers'),
        gT = new D('@ngrx/store Internal Resolved Meta Reducers'),
        mT = new D('@ngrx/store User Runtime Checks Config'),
        vT = new D('@ngrx/store Internal User Runtime Checks Config'),
        Oa = new D('@ngrx/store Internal Runtime Checks'),
        wm = new D('@ngrx/store Check if Action types are unique'),
        bm = new D('@ngrx/store Root Store Provider');
      function Im(e, t = {}) {
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
      function _T(...e) {
        return function (t) {
          if (0 === e.length) return t;
          const n = e[e.length - 1];
          return e.slice(0, -1).reduceRight((o, i) => i(o), n(t));
        };
      }
      function CT(e, t) {
        return (
          Array.isArray(t) &&
            t.length > 0 &&
            (e = _T.apply(null, [...t, e])),
          (n, r) => {
            const o = e(n);
            return (i, s) => o((i = void 0 === i ? r : i), s);
          }
        );
      }
      new D('@ngrx/store Feature State Provider');
      class Sm extends Oe {}
      class ET extends Li {}
      let Ql = (() => {
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
                    ? (function i4(e) {
                        const t =
                          Array.isArray(e) && e.length > 0
                            ? _T(...e)
                            : n => n;
                        return (n, r) => (
                          (n = t(n)),
                          (o, i) => n((o = void 0 === o ? r : o), i)
                        );
                      })(a)(i, c)
                    : CT(s, a)(i, c);
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
              this.reducers = (function o4(e, t) {
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
            return new (r || e)(A(ET), A(Cm), A(aT), A(iT));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const a4 = [
        Ql,
        { provide: Sm, useExisting: Ql },
        { provide: ET, useExisting: Li },
      ];
      let Mm = (() => {
        class e extends Mt {
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
      const c4 = [Mm];
      class DT extends Oe {}
      let wT = (() => {
        class e extends mt {
          static #e = (this.INIT = nT);
          constructor(n, r, o, i) {
            super(i);
            const a = n.pipe(Eg(G8)).pipe(
                (function q8(...e) {
                  const t = wg(e);
                  return qe((n, r) => {
                    const o = e.length,
                      i = new Array(o);
                    let s = e.map(() => !1),
                      a = !1;
                    for (let c = 0; c < o; c++)
                      yn(e[c]).subscribe(
                        Ne(
                          r,
                          u => {
                            (i[c] = u),
                              !a &&
                                !s[c] &&
                                ((s[c] = !0),
                                (a = s.every(Bn)) && (s = null));
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
              u = a.pipe(BS(u4, { state: i }));
            (this.stateSubscription = u.subscribe(
              ({ state: l, action: d }) => {
                this.next(l), o.next(d);
              },
            )),
              (this.state = eT(this, {
                manualCleanup: !0,
                requireSync: !0,
              }));
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
          static #t = (this.ɵfac = function (r) {
            return new (r || e)(A(Li), A(Sm), A(Mm), A(Cm));
          });
          static #n = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function u4(e = { state: void 0 }, [t, n]) {
        const { state: r } = e;
        return { state: n(r, t), action: t };
      }
      const l4 = [wT, { provide: DT, useExisting: wT }];
      let Tm = (() => {
        class e extends Oe {
          constructor(n, r, o) {
            super(),
              (this.actionsObserver = r),
              (this.reducerManager = o),
              (this.source = n),
              (this.state = n.state);
          }
          select(n, ...r) {
            return f4.call(null, n, ...r)(this);
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
            return new (r || e)(A(DT), A(Li), A(Ql));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const d4 = [Tm];
      function f4(e, t, ...n) {
        return function (o) {
          let i;
          if ('string' == typeof e) {
            const s = [t, ...n].filter(Boolean);
            i = o.pipe(
              (function W8(...e) {
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
            (function Z8(e, t = Bn) {
              return (
                (e = e ?? Q8),
                qe((n, r) => {
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
      const Am =
        'https://ngrx.io/guide/store/configuration/runtime-checks';
      function bT(e) {
        return void 0 === e;
      }
      function IT(e) {
        return null === e;
      }
      function ST(e) {
        return Array.isArray(e);
      }
      function MT(e) {
        return 'object' == typeof e && null !== e;
      }
      function Nm(e) {
        return 'function' == typeof e;
      }
      function T4(e) {
        return e instanceof D ? _(e) : e;
      }
      function RT(e) {
        return 'function' == typeof e ? e() : e;
      }
      function R4(e, t) {
        return e.concat(t);
      }
      function x4() {
        if (_(Tm, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function Om(e) {
        Object.freeze(e);
        const t = Nm(e);
        return (
          Object.getOwnPropertyNames(e).forEach(n => {
            if (
              !n.startsWith('\u0275') &&
              (function y4(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              })(e, n) &&
              (!t ||
                ('caller' !== n &&
                  'callee' !== n &&
                  'arguments' !== n))
            ) {
              const r = e[n];
              (MT(r) || Nm(r)) && !Object.isFrozen(r) && Om(r);
            }
          }),
          e
        );
      }
      function Fm(e, t = []) {
        return (bT(e) || IT(e)) && 0 === t.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((r, o) => {
              if (r) return r;
              const i = e[o];
              return (function v4(e) {
                return Nm(e) && e.hasOwnProperty('\u0275cmp');
              })(i)
                ? r
                : !(
                    bT(i) ||
                    IT(i) ||
                    (function g4(e) {
                      return 'number' == typeof e;
                    })(i) ||
                    (function p4(e) {
                      return 'boolean' == typeof e;
                    })(i) ||
                    (function h4(e) {
                      return 'string' == typeof e;
                    })(i) ||
                    ST(i)
                  ) &&
                    ((function TT(e) {
                      if (
                        !(function m4(e) {
                          return MT(e) && !ST(e);
                        })(e)
                      )
                        return !1;
                      const t = Object.getPrototypeOf(e);
                      return t === Object.prototype || null === t;
                    })(i)
                      ? Fm(i, [...t, o])
                      : { path: [...t, o], value: i });
            }, !1);
      }
      function xT(e, t) {
        if (!1 === e) return;
        const n = e.path.join('.'),
          r = new Error(
            `Detected unserializable ${t} at "${n}". ${Am}#strict${t}serializability`,
          );
        throw ((r.value = e.value), (r.unserializablePath = n), r);
      }
      function P4(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function L4({
        strictActionSerializability: e,
        strictStateSerializability: t,
      }) {
        return n =>
          e || t
            ? (function F4(e, t) {
                return function (n, r) {
                  t.action(r) && xT(Fm(r), 'action');
                  const o = e(n, r);
                  return t.state() && xT(Fm(o), 'state'), o;
                };
              })(n, { action: r => e && !km(r), state: () => t })
            : n;
      }
      function V4({
        strictActionImmutability: e,
        strictStateImmutability: t,
      }) {
        return n =>
          e || t
            ? (function O4(e, t) {
                return function (n, r) {
                  const o = t.action(r) ? Om(r) : r,
                    i = e(n, o);
                  return t.state() ? Om(i) : i;
                };
              })(n, { action: r => e && !km(r), state: () => t })
            : n;
      }
      function km(e) {
        return e.type.startsWith('@ngrx');
      }
      function j4({ strictActionWithinNgZone: e }) {
        return t =>
          e
            ? (function k4(e, t) {
                return function (n, r) {
                  if (t.action(r) && !le.isInAngularZone())
                    throw new Error(
                      `Action '${r.type}' running outside NgZone. ${Am}#strictactionwithinngzone`,
                    );
                  return e(n, r);
                };
              })(t, { action: n => e && !km(n) })
            : t;
      }
      function U4(e) {
        return [
          { provide: vT, useValue: e },
          { provide: mT, useFactory: B4, deps: [vT] },
          { provide: Oa, deps: [mT], useFactory: P4 },
          { provide: Zl, multi: !0, deps: [Oa], useFactory: V4 },
          { provide: Zl, multi: !0, deps: [Oa], useFactory: L4 },
          { provide: Zl, multi: !0, deps: [Oa], useFactory: j4 },
        ];
      }
      function B4(e) {
        return e;
      }
      function $4(e) {
        if (!e.strictActionTypeUniqueness) return;
        const t = Object.entries(xa)
          .filter(([, n]) => n > 1)
          .map(([n]) => n);
        if (t.length)
          throw new Error(
            `Action types are registered more than once, ${t
              .map(n => `"${n}"`)
              .join(', ')}. ${Am}#strictactiontypeuniqueness`,
          );
      }
      function H4(e = {}, t = {}) {
        return [
          { provide: rT, useFactory: x4 },
          { provide: oT, useValue: t.initialState },
          { provide: Cm, useFactory: RT, deps: [oT] },
          { provide: Em, useValue: e },
          { provide: uT, useExisting: e instanceof D ? e : Em },
          { provide: aT, deps: [Em, [new Ov(uT)]], useFactory: T4 },
          {
            provide: pT,
            useValue: t.metaReducers ? t.metaReducers : [],
          },
          { provide: gT, deps: [Zl, pT], useFactory: R4 },
          {
            provide: sT,
            useValue: t.reducerFactory ? t.reducerFactory : Im,
          },
          { provide: iT, deps: [sT, gT], useFactory: CT },
          r4,
          a4,
          c4,
          l4,
          d4,
          U4(t.runtimeChecks),
          [{ provide: wm, multi: !0, deps: [Oa], useFactory: $4 }],
        ];
      }
      const G4 = [
          {
            provide: bm,
            useFactory: function z4() {
              _(Li),
                _(Sm),
                _(Mm),
                _(Tm),
                _(rT, { optional: !0 }),
                _(wm, { optional: !0 });
            },
          },
          { provide: Ut, multi: !0, useFactory: () => () => _(bm) },
        ],
        eq = {
          providers: [
            (function q4(e, t) {
              return To([...H4(e, t), G4]);
            })({
              grammar: (function K4(e, ...t) {
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
                (function Y4(...e) {
                  return {
                    reducer: e.pop(),
                    types: e.map(r => r.type),
                  };
                })(
                  (function tT(e, t) {
                    if (
                      ((xa[e] = (xa[e] || 0) + 1),
                      'function' == typeof t)
                    )
                      return ym(e, (...r) => ({
                        ...t(...r),
                        type: e,
                      }));
                    switch (t ? t._as : 'empty') {
                      case 'empty':
                        return ym(e, () => ({ type: e }));
                      case 'props':
                        return ym(e, r => ({ ...r, type: e }));
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
      (function p$(e, t) {
        return Ij({ rootComponent: e, ...pS(t) });
      })(Pz, { providers: [...j8.providers, ...eq.providers] }).catch(
        e => {
          throw new Error(e);
        },
      );
    },
    972: (kt, ir, rt) => {
      'use strict';
      const Pt = rt(469),
        pe = rt(302),
        ht = rt(539);
      kt.exports = function pt(Se, gt) {
        switch (pe(Se)) {
          case 'object':
            return (function xe(Se, gt) {
              if ('function' == typeof gt) return gt(Se);
              if (gt || ht(Se)) {
                const I = new Se.constructor();
                for (let q in Se) I[q] = pt(Se[q], gt);
                return I;
              }
              return Se;
            })(Se, gt);
          case 'array':
            return (function F(Se, gt) {
              const I = new Se.constructor(Se.length);
              for (let q = 0; q < Se.length; q++)
                I[q] = pt(Se[q], gt);
              return I;
            })(Se, gt);
          default:
            return Pt(Se);
        }
      };
    },
    539: (kt, ir, rt) => {
      'use strict';
      var Pt = rt(237);
      function pe(ht) {
        return (
          !0 === Pt(ht) &&
          '[object Object]' === Object.prototype.toString.call(ht)
        );
      }
      kt.exports = function (pt) {
        var xe, F;
        return !(
          !1 === pe(pt) ||
          ((xe = pt.constructor), 'function' != typeof xe) ||
          ((F = xe.prototype), !1 === pe(F)) ||
          !1 === F.hasOwnProperty('isPrototypeOf')
        );
      };
    },
    237: kt => {
      'use strict';
      kt.exports = function (rt) {
        return (
          null != rt &&
          'object' == typeof rt &&
          !1 === Array.isArray(rt)
        );
      };
    },
    302: kt => {
      var ir = Object.prototype.toString;
      function rt(I) {
        return 'function' == typeof I.constructor
          ? I.constructor.name
          : null;
      }
      kt.exports = function (q) {
        if (void 0 === q) return 'undefined';
        if (null === q) return 'null';
        var tt = typeof q;
        if ('boolean' === tt) return 'boolean';
        if ('string' === tt) return 'string';
        if ('number' === tt) return 'number';
        if ('symbol' === tt) return 'symbol';
        if ('function' === tt)
          return (function xe(I) {
            return 'GeneratorFunction' === rt(I);
          })(q)
            ? 'generatorfunction'
            : 'function';
        if (
          (function Pt(I) {
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
          (function Se(I) {
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
        switch ((tt = ir.call(q))) {
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
    469: (kt, ir, rt) => {
      'use strict';
      const Pt = Symbol.prototype.valueOf,
        pe = rt(302);
      kt.exports = function ht(I, q) {
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
            return (function Se(I) {
              const q = I.length,
                tt = Buffer.allocUnsafe
                  ? Buffer.allocUnsafe(q)
                  : Buffer.from(q);
              return I.copy(tt), tt;
            })(I);
          case 'symbol':
            return (function gt(I) {
              return Pt ? Object(Pt.call(I)) : {};
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
            return (function F(I) {
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
  kt => {
    kt((kt.s = 797));
  },
]);

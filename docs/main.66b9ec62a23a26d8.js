(self.webpackChunkenglish_learning_fe =
  self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    99: (Vt, sr, nt) => {
      'use strict';
      function jt(e, t) {
        return Object.is(e, t);
      }
      let pe = null,
        ft = !1,
        ht = 1;
      const Re = Symbol('SIGNAL');
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
      function et(e) {
        if (ft) throw new Error('');
        if (null === pe) return;
        pe.consumerOnSignalRead(e);
        const t = pe.nextProducerIndex++;
        Pa(pe),
          t < pe.producerNode.length &&
            pe.producerNode[t] !== e &&
            Vi(pe) &&
            ka(pe.producerNode[t], pe.producerIndexOfThis[t]),
          pe.producerNode[t] !== e &&
            ((pe.producerNode[t] = e),
            (pe.producerIndexOfThis[t] = Vi(pe) ? Fm(e, pe, t) : 0)),
          (pe.producerLastReadVersion[t] = e.version);
      }
      function Nm(e) {
        if (
          (!Vi(e) || e.dirty) &&
          (e.dirty || e.lastCleanEpoch !== ht)
        ) {
          if (!e.producerMustRecompute(e) && !Wl(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = ht);
          e.producerRecomputeValue(e),
            (e.dirty = !1),
            (e.lastCleanEpoch = ht);
        }
      }
      function Rm(e) {
        if (void 0 === e.liveConsumerNode) return;
        const t = ft;
        ft = !0;
        try {
          for (const n of e.liveConsumerNode) n.dirty || Om(n);
        } finally {
          ft = t;
        }
      }
      function xm() {
        return !1 !== pe?.consumerAllowSignalWrites;
      }
      function Om(e) {
        (e.dirty = !0), Rm(e), e.consumerMarkedDirty?.(e);
      }
      function Fa(e) {
        return e && (e.nextProducerIndex = 0), F(e);
      }
      function ql(e, t) {
        if (
          (F(t),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (Vi(e))
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
      function Wl(e) {
        Pa(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (Nm(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function Zl(e) {
        if ((Pa(e), Vi(e)))
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
      function Fm(e, t, n) {
        if ((km(e), 0 === e.liveConsumerNode.length && Pm(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            e.producerIndexOfThis[r] = Fm(e.producerNode[r], e, r);
        return (
          e.liveConsumerIndexOfThis.push(n),
          e.liveConsumerNode.push(t) - 1
        );
      }
      function ka(e, t) {
        if ((km(e), 1 === e.liveConsumerNode.length && Pm(e)))
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
      function Vi(e) {
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
      function km(e) {
        (e.liveConsumerNode ??= []),
          (e.liveConsumerIndexOfThis ??= []);
      }
      function Pm(e) {
        return void 0 !== e.producerNode;
      }
      const Ql = Symbol('UNSET'),
        Yl = Symbol('COMPUTING'),
        La = Symbol('ERRORED'),
        TT = {
          ...q,
          value: Ql,
          dirty: !0,
          error: null,
          equal: jt,
          producerMustRecompute: e =>
            e.value === Ql || e.value === Yl,
          producerRecomputeValue(e) {
            if (e.value === Yl)
              throw new Error('Detected cycle in computations.');
            const t = e.value;
            e.value = Yl;
            const n = Fa(e);
            let r;
            try {
              r = e.computation();
            } catch (o) {
              (r = La), (e.error = o);
            } finally {
              ql(e, n);
            }
            t !== Ql && t !== La && r !== La && e.equal(t, r)
              ? (e.value = t)
              : ((e.value = r), e.version++);
          },
        };
      let Lm = function AT() {
        throw new Error();
      };
      function Vm() {
        Lm();
      }
      let Va = null;
      function jm(e, t) {
        xm() || Vm(),
          e.equal(e.value, t) ||
            ((e.value = t),
            (function FT(e) {
              e.version++,
                (function ST() {
                  ht++;
                })(),
                Rm(e),
                Va?.();
            })(e));
      }
      const OT = { ...q, equal: jt, value: void 0 };
      function we(e) {
        return 'function' == typeof e;
      }
      function Kl(e) {
        const n = e(r => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)),
          (n.prototype.constructor = n),
          n
        );
      }
      const Xl = Kl(
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
      class st {
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
                t = i instanceof Xl ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  Hm(i);
                } catch (s) {
                  (t = t ?? []),
                    s instanceof Xl
                      ? (t = [...t, ...s.errors])
                      : t.push(s);
                }
            }
            if (t) throw new Xl(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) Hm(t);
            else {
              if (t instanceof st) {
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
          n && ja(n, t), t instanceof st && t._removeParent(this);
        }
      }
      st.EMPTY = (() => {
        const e = new st();
        return (e.closed = !0), e;
      })();
      const Bm = st.EMPTY;
      function $m(e) {
        return (
          e instanceof st ||
          (e &&
            'closed' in e &&
            we(e.remove) &&
            we(e.add) &&
            we(e.unsubscribe))
        );
      }
      function Hm(e) {
        we(e) ? e() : e.unsubscribe();
      }
      const Or = {
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
      function zm(e) {
        Ua.setTimeout(() => {
          const { onUnhandledError: t } = Or;
          if (!t) throw e;
          t(e);
        });
      }
      function Ba() {}
      const PT = Jl('C', void 0, void 0);
      function Jl(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      let Fr = null;
      function $a(e) {
        if (Or.useDeprecatedSynchronousErrorHandling) {
          const t = !Fr;
          if (
            (t && (Fr = { errorThrown: !1, error: null }), e(), t)
          ) {
            const { errorThrown: n, error: r } = Fr;
            if (((Fr = null), n)) throw r;
          }
        } else e();
      }
      class ed extends st {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t
              ? ((this.destination = t), $m(t) && t.add(this))
              : (this.destination = HT);
        }
        static create(t, n, r) {
          return new nd(t, n, r);
        }
        next(t) {
          this.isStopped
            ? rd(
                (function VT(e) {
                  return Jl('N', e, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? rd(
                (function LT(e) {
                  return Jl('E', void 0, e);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped
            ? rd(PT, this)
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
      function td(e, t) {
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
      class nd extends ed {
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
            this && Or.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: t.next && td(t.next, i),
                  error: t.error && td(t.error, i),
                  complete: t.complete && td(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new BT(o);
        }
      }
      function Ha(e) {
        Or.useDeprecatedSynchronousErrorHandling
          ? (function jT(e) {
              Or.useDeprecatedSynchronousErrorHandling &&
                Fr &&
                ((Fr.errorThrown = !0), (Fr.error = e));
            })(e)
          : zm(e);
      }
      function rd(e, t) {
        const { onStoppedNotification: n } = Or;
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
        od =
          ('function' == typeof Symbol && Symbol.observable) ||
          '@@observable';
      function Bn(e) {
        return e;
      }
      function Gm(e) {
        return 0 === e.length
          ? Bn
          : 1 === e.length
          ? e[0]
          : function (n) {
              return e.reduce((r, o) => o(r), n);
            };
      }
      let xe = (() => {
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
                (e && e instanceof ed) ||
                ((function GT(e) {
                  return (
                    e && we(e.next) && we(e.error) && we(e.complete)
                  );
                })(e) &&
                  $m(e))
              );
            })(n)
              ? n
              : new nd(n, r, o);
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
            return new (r = qm(r))((o, i) => {
              const s = new nd({
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
          [od]() {
            return this;
          }
          pipe(...n) {
            return Gm(n)(this);
          }
          toPromise(n) {
            return new (n = qm(n))((r, o) => {
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
      function qm(e) {
        var t;
        return null !== (t = e ?? Or.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      const WT = Kl(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let Mt = (() => {
        class e extends xe {
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
            const r = new Wm(this, this);
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
              ? Bm
              : ((this.currentObservers = null),
                i.push(n),
                new st(() => {
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
            const n = new xe();
            return (n.source = this), n;
          }
        }
        return (e.create = (t, n) => new Wm(t, n)), e;
      })();
      class Wm extends Mt {
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
            : Bm;
        }
      }
      class gt extends Mt {
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
      function Zm(e) {
        return we(e?.lift);
      }
      function qe(e) {
        return t => {
          if (Zm(t))
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
      class ZT extends ed {
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
      function ne(e, t) {
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
      const hv = 'https://g.co/ng/security#xss';
      class E extends Error {
        constructor(t, n) {
          super(
            (function yo(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t : ''}`;
            })(t, n),
          ),
            (this.code = t);
        }
      }
      function $n(e) {
        return { toString: e }.toString();
      }
      const Co = '__parameters__';
      function Do(e, t, n) {
        return $n(() => {
          const r = (function fd(e) {
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
              const d = c.hasOwnProperty(Co)
                ? c[Co]
                : Object.defineProperty(c, Co, { value: [] })[Co];
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
      function le(e) {
        for (let t in e) if (e[t] === le) return t;
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
      function hd(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const YA = le({ __forward_ref__: le });
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
        return vv(e, Ka) || vv(e, yv);
      }
      function vv(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Ya(e) {
        return e && (e.hasOwnProperty(pd) || e.hasOwnProperty(nN))
          ? e[pd]
          : null;
      }
      const Ka = le({ ɵprov: le }),
        pd = le({ ɵinj: le }),
        yv = le({ ngInjectableDef: le }),
        nN = le({ ngInjectorDef: le });
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
      function _d(e) {
        return e && !!e.ɵproviders;
      }
      const Ui = le({ ɵcmp: le }),
        Cd = le({ ɵdir: le }),
        Ed = le({ ɵpipe: le }),
        Cv = le({ ɵmod: le }),
        Hn = le({ ɵfac: le }),
        Bi = le({ __NG_ELEMENT_ID__: le }),
        Ev = le({ __NG_ENV_ID__: le });
      function U(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Dd(e, t) {
        throw new E(-201, !1);
      }
      var Z = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(Z || {});
      let wd;
      function Dv() {
        return wd;
      }
      function Tt(e) {
        const t = wd;
        return (wd = e), t;
      }
      function wv(e, t, n) {
        const r = Qa(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Z.Optional
          ? null
          : void 0 !== t
          ? t
          : void Dd();
      }
      const $i = {},
        bd = '__NG_DI_FLAG__',
        Xa = 'ngTempTokenPath',
        cN = /\n/gm,
        bv = '__source';
      let bo;
      function ur(e) {
        const t = bo;
        return (bo = e), t;
      }
      function dN(e, t = Z.Default) {
        if (void 0 === bo) throw new E(-203, !1);
        return null === bo
          ? wv(e, void 0, t)
          : bo.get(e, t & Z.Optional ? null : void 0, t);
      }
      function R(e, t = Z.Default) {
        return (Dv() || dN)(k(e), t);
      }
      function _(e, t = Z.Default) {
        return R(e, Ja(t));
      }
      function Ja(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Id(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = k(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new E(900, !1);
            let o,
              i = Z.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                c = fN(a);
              'number' == typeof c
                ? -1 === c
                  ? (o = a.token)
                  : (i |= c)
                : (o = a);
            }
            t.push(R(o, i));
          } else t.push(R(r));
        }
        return t;
      }
      function Hi(e, t) {
        return (e[bd] = t), (e.prototype[bd] = t), e;
      }
      function fN(e) {
        return e[bd];
      }
      const Sv = Hi(
          Do('Inject', e => ({ token: e })),
          -1,
        ),
        Sd = Hi(Do('Optional'), 8),
        Md = Hi(Do('SkipSelf'), 4);
      function Pr(e, t) {
        return e.hasOwnProperty(Hn) ? e[Hn] : null;
      }
      function Io(e, t) {
        e.forEach(n => (Array.isArray(n) ? Io(n, t) : t(n)));
      }
      function Mv(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function ec(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function $t(e, t, n) {
        let r = So(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function Tv(e, t, n, r) {
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
      function Ad(e, t) {
        const n = So(e, t);
        if (n >= 0) return e[1 | n];
      }
      function So(e, t) {
        return (function Av(e, t, n) {
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
        J = [],
        Ht = new D(''),
        Nv = new D('', -1),
        Nd = new D('');
      class nc {
        get(t, n = $i) {
          if (n === $i) {
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
        lr = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] =
              'HasDecoratorInputTransform'),
            e
          );
        })(lr || {});
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
      function Rd(e, t, n) {
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
            xv(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s),
              r++;
          }
        }
        return r;
      }
      function Rv(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function xv(e) {
        return 64 === e.charCodeAt(0);
      }
      function zi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o
                ? (n = o)
                : 0 === n ||
                  Ov(
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
      function Ov(e, t, n, r, o) {
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
      const Fv = 'ng-template';
      function _N(e, t, n, r) {
        let o = 0;
        if (r) {
          for (; o < t.length && 'string' == typeof t[o]; o += 2)
            if (
              'class' === t[o] &&
              -1 !== yN(t[o + 1].toLowerCase(), n, 0)
            )
              return !0;
        } else if (xd(e)) return !1;
        if (((o = t.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < t.length && 'string' == typeof (i = t[o]); )
            if (i.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function xd(e) {
        return 4 === e.type && e.value !== Fv;
      }
      function CN(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Fv);
      }
      function EN(e, t, n) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function bN(e) {
                  for (let t = 0; t < e.length; t++)
                    if (Rv(e[t])) return t;
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
                  if (sn(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !_N(e, o, c, n)) {
                  if (sn(r)) return !1;
                  s = !0;
                }
              } else {
                const u = t[++a],
                  l = DN(c, o, xd(e), n);
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
      function kv(e, t, n = !1) {
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
      function Pv(e, t) {
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
            '' !== o && !sn(s) && ((t += Pv(i, o)), (o = '')),
              (r = s),
              (i = i || !sn(r));
          n++;
        }
        return '' !== o && (t += Pv(i, o)), t;
      }
      function ce(e) {
        return $n(() => {
          const t = Vv(e),
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
              styles: e.styles || J,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          jv(n);
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
        return W(e) || Ze(e);
      }
      function RN(e) {
        return null !== e;
      }
      function Gi(e) {
        return $n(() => ({
          type: e.type,
          bootstrap: e.bootstrap || J,
          declarations: e.declarations || J,
          imports: e.imports || J,
          exports: e.exports || J,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Lv(e, t) {
        if (null == e) return wn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            let i,
              s,
              a = lr.None;
            Array.isArray(o)
              ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
              : ((i = o), (s = o)),
              t
                ? ((n[i] = a !== lr.None ? [r, a] : r), (t[i] = s))
                : (n[i] = r);
          }
        return n;
      }
      function V(e) {
        return $n(() => {
          const t = Vv(e);
          return jv(t), t;
        });
      }
      function W(e) {
        return e[Ui] || null;
      }
      function Ze(e) {
        return e[Cd] || null;
      }
      function rt(e) {
        return e[Ed] || null;
      }
      function at(e, t) {
        const n = e[Cv] || null;
        if (!n && !0 === t)
          throw new Error(
            `Type ${We(e)} does not have '\u0275mod' property.`,
          );
        return n;
      }
      function Vv(e) {
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
          selectors: e.selectors || J,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Lv(e.inputs, t),
          outputs: Lv(e.outputs),
          debugInfo: null,
        };
      }
      function jv(e) {
        e.features?.forEach(t => t(e));
      }
      function oc(e, t) {
        if (!e) return null;
        const n = t ? rt : NN;
        return () =>
          ('function' == typeof e ? e() : e)
            .map(r => n(r))
            .filter(RN);
      }
      function Mo(e) {
        return { ɵproviders: e };
      }
      function FN(...e) {
        return { ɵproviders: Od(0, e), ɵfromNgModule: !0 };
      }
      function Od(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        const i = s => {
          n.push(s);
        };
        return (
          Io(t, s => {
            const a = s;
            ic(a, i, [], r) && ((o ||= []), o.push(a));
          }),
          void 0 !== o && Uv(o, i),
          n
        );
      }
      function Uv(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: o } = e[n];
          Fd(o, i => {
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
                Io(i.imports, l => {
                  ic(l, t, n, r) && ((u ||= []), u.push(l));
                });
              } finally {
              }
              void 0 !== u && Uv(u, t);
            }
            if (!a) {
              const u = Pr(o) || (() => new o());
              t({ provide: o, useFactory: u, deps: J }, o),
                t({ provide: Nd, useValue: o, multi: !0 }, o),
                t(
                  { provide: Ht, useValue: () => R(o), multi: !0 },
                  o,
                );
            }
            const c = i.providers;
            if (null != c && !a) {
              const u = e;
              Fd(c, l => {
                t(l, u);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Fd(e, t) {
        for (let n of e)
          _d(n) && (n = n.ɵproviders),
            Array.isArray(n) ? Fd(n, t) : t(n);
      }
      const kN = le({ provide: String, useValue: le });
      function kd(e) {
        return null !== e && 'object' == typeof e && kN in e;
      }
      function Lr(e) {
        return 'function' == typeof e;
      }
      const Pd = new D(''),
        sc = {},
        LN = {};
      let Ld;
      function ac() {
        return void 0 === Ld && (Ld = new nc()), Ld;
      }
      class zt {}
      class To extends zt {
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
            jd(t, s => this.processProvider(s)),
            this.records.set(Nv, Ao(void 0, this)),
            o.has('environment') &&
              this.records.set(zt, Ao(void 0, this));
          const i = this.records.get(Pd);
          null != i &&
            'string' == typeof i.value &&
            this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(
              this.get(Nd, J, Z.Self),
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
          const n = ur(this),
            r = Tt(void 0);
          try {
            return t();
          } finally {
            ur(n), Tt(r);
          }
        }
        get(t, n = $i, r = Z.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(Ev)))
            return t[Ev](this);
          r = Ja(r);
          const i = ur(this),
            s = Tt(void 0);
          try {
            if (!(r & Z.SkipSelf)) {
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
                    ? Ao(Vd(t), sc)
                    : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & Z.Self ? ac() : this.parent).get(
              t,
              (n = r & Z.Optional && n === $i ? null : n),
            );
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[Xa] = a[Xa] || []).unshift(We(t)), i)) throw a;
              return (function hN(e, t, n, r) {
                const o = e[Xa];
                throw (
                  (t[bv] && o.unshift(t[bv]),
                  (e.message = (function pN(e, t, n, r = null) {
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
            Tt(s), ur(i);
          }
        }
        resolveInjectorInitializers() {
          const t = F(null),
            n = ur(this),
            r = Tt(void 0);
          try {
            const i = this.get(Ht, J, Z.Self);
            for (const s of i) s();
          } finally {
            ur(n), Tt(r), F(t);
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
          let n = Lr((t = k(t))) ? t : k(t && t.provide);
          const r = (function jN(e) {
            return kd(e) ? Ao(void 0, e.useValue) : Ao(Hv(e), sc);
          })(t);
          if (!Lr(t) && !0 === t.multi) {
            let o = this.records.get(n);
            o ||
              ((o = Ao(void 0, sc, !0)),
              (o.factory = () => Id(o.multi)),
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
      function Vd(e) {
        const t = Qa(e),
          n = null !== t ? t.factory : Pr(e);
        if (null !== n) return n;
        if (e instanceof D) throw new E(204, !1);
        if (e instanceof Function)
          return (function VN(e) {
            if (e.length > 0) throw new E(204, !1);
            const n = (function tN(e) {
              return (e && (e[Ka] || e[yv])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new E(204, !1);
      }
      function Hv(e, t, n) {
        let r;
        if (Lr(e)) {
          const o = k(e);
          return Pr(o) || Vd(o);
        }
        if (kd(e)) r = () => k(e.useValue);
        else if (
          (function $v(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...Id(e.deps || []));
        else if (
          (function Bv(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => R(k(e.useExisting));
        else {
          const o = k(e && (e.useClass || e.provide));
          if (
            !(function UN(e) {
              return !!e.deps;
            })(e)
          )
            return Pr(o) || Vd(o);
          r = () => new o(...Id(e.deps));
        }
        return r;
      }
      function Ao(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function jd(e, t) {
        for (const n of e)
          Array.isArray(n)
            ? jd(n, t)
            : n && _d(n)
            ? jd(n.ɵproviders, t)
            : t(n);
      }
      function zn(e, t) {
        e instanceof To && e.assertNotDestroyed();
        const r = ur(e),
          o = Tt(void 0);
        try {
          return t();
        } finally {
          ur(r), Tt(o);
        }
      }
      function zv() {
        return (
          void 0 !== Dv() ||
          null !=
            (function lN() {
              return bo;
            })()
        );
      }
      const Se = 0,
        b = 1,
        A = 2,
        Ue = 3,
        an = 4,
        ot = 5,
        mt = 6,
        Ro = 7,
        _e = 8,
        Be = 9,
        bn = 10,
        P = 11,
        Zi = 12,
        qv = 13,
        xo = 14,
        Me = 15,
        Vr = 16,
        Oo = 17,
        Gn = 18,
        Fo = 19,
        Wv = 20,
        fr = 21,
        uc = 22,
        Kt = 23,
        T = 25,
        Bd = 1,
        In = 7,
        ko = 9,
        Oe = 10;
      var dc = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(dc || {});
      function tt(e) {
        return Array.isArray(e) && 'object' == typeof e[Bd];
      }
      function ct(e) {
        return Array.isArray(e) && !0 === e[Bd];
      }
      function $d(e) {
        return !!(4 & e.flags);
      }
      function jr(e) {
        return e.componentOffset > -1;
      }
      function fc(e) {
        return !(1 & ~e.flags);
      }
      function cn(e) {
        return !!e.template;
      }
      function Yi(e) {
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
      function Kv(e, t, n, r) {
        null !== t ? t.applyValueToInputSignal(t, r) : (e[n] = r);
      }
      function Xt() {
        return Xv;
      }
      function Xv(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = rR), nR;
      }
      function nR() {
        const e = ey(this),
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
            ey(e) ||
            (function oR(e, t) {
              return (e[Jv] = t);
            })(e, { previous: wn, current: null }),
          a = s.current || (s.current = {}),
          c = s.previous,
          u = c[i];
        (a[i] = new tR(u && u.currentValue, n, c === wn)),
          Kv(e, t, o, n);
      }
      Xt.ngInherit = !0;
      const Jv = '__ngSimpleChanges__';
      function ey(e) {
        return e[Jv] || null;
      }
      const Sn = function (e, t, n) {};
      function ee(e) {
        for (; Array.isArray(e); ) e = e[Se];
        return e;
      }
      function Ki(e, t) {
        return ee(t[e]);
      }
      function vt(e, t) {
        return ee(t[e.index]);
      }
      function Xi(e, t) {
        return e.data[t];
      }
      function Gt(e, t) {
        const n = t[e];
        return tt(n) ? n : n[Se];
      }
      function Wd(e) {
        return !(128 & ~e[A]);
      }
      function Jt(e, t) {
        return null == t ? null : e[t];
      }
      function ry(e) {
        e[Oo] = 0;
      }
      function oy(e) {
        1024 & e[A] || ((e[A] |= 1024), Wd(e) && hc(e));
      }
      function Ji(e) {
        return !!(9216 & e[A] || e[Kt]?.dirty);
      }
      function Zd(e) {
        e[bn].changeDetectionScheduler?.notify(7),
          64 & e[A] && (e[A] |= 1024),
          Ji(e) && hc(e);
      }
      function hc(e) {
        e[bn].changeDetectionScheduler?.notify(0);
        let t = qn(e);
        for (
          ;
          null !== t && !(8192 & t[A]) && ((t[A] |= 8192), Wd(t));

        )
          t = qn(t);
      }
      function pc(e, t) {
        if (!(256 & ~e[A])) throw new E(911, !1);
        null === e[fr] && (e[fr] = []), e[fr].push(t);
      }
      function qn(e) {
        const t = e[Ue];
        return ct(t) ? t[Ue] : t;
      }
      const L = {
        lFrame: vy(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      let sy = !1;
      function ay() {
        return L.bindingsEnabled;
      }
      function Br() {
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
      function de() {
        let e = cy();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function cy() {
        return L.lFrame.currentTNode;
      }
      function dn(e, t) {
        const n = L.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Kd() {
        return L.lFrame.isParent;
      }
      function Xd() {
        L.lFrame.isParent = !1;
      }
      function dy() {
        return sy;
      }
      function fy(e) {
        sy = e;
      }
      function fn() {
        return L.lFrame.bindingIndex++;
      }
      function yR(e, t) {
        const n = L.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Jd(t);
      }
      function Jd(e) {
        L.lFrame.currentDirectiveIndex = e;
      }
      function tf() {
        return L.lFrame.currentQueryIndex;
      }
      function mc(e) {
        L.lFrame.currentQueryIndex = e;
      }
      function CR(e) {
        const t = e[b];
        return 2 === t.type
          ? t.declTNode
          : 1 === t.type
          ? e[ot]
          : null;
      }
      function gy(e, t, n) {
        if (n & Z.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Z.Host ||
              ((o = CR(i)),
              null === o || ((i = i[xo]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (L.lFrame = my());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function nf(e) {
        const t = my(),
          n = e[b];
        (L.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function my() {
        const e = L.lFrame,
          t = null === e ? null : e.child;
        return null === t ? vy(e) : t;
      }
      function vy(e) {
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
      function yy() {
        const e = L.lFrame;
        return (
          (L.lFrame = e.parent),
          (e.currentTNode = null),
          (e.lView = null),
          e
        );
      }
      const _y = yy;
      function rf() {
        const e = yy();
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
      function it() {
        return L.lFrame.selectedIndex;
      }
      function $r(e) {
        L.lFrame.selectedIndex = e;
      }
      function Ce() {
        const e = L.lFrame;
        return Xi(e.tView, e.selectedIndex);
      }
      let Ey = !0;
      function ts() {
        return Ey;
      }
      function Mn(e) {
        Ey = e;
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
        Dy(e, t, 3, n);
      }
      function _c(e, t, n, r) {
        (3 & e[A]) === n && Dy(e, t, n, r);
      }
      function sf(e, t) {
        let n = e[A];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[A] = n));
      }
      function Dy(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let a = 0;
        for (let c = void 0 !== r ? 65535 & e[Oo] : 0; c < s; c++)
          if ('number' == typeof t[c + 1]) {
            if (((a = t[c]), null != r && a >= r)) break;
          } else
            t[c] < 0 && (e[Oo] += 65536),
              (a < i || -1 == i) &&
                (MR(e, n, t, c),
                (e[Oo] = (4294901760 & e[Oo]) + c + 2)),
              c++;
      }
      function wy(e, t) {
        Sn(4, e, t);
        const n = F(null);
        try {
          t.call(e);
        } finally {
          F(n), Sn(5, e, t);
        }
      }
      function MR(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        o
          ? e[A] >> 14 < e[Oo] >> 16 &&
            (3 & e[A]) === t &&
            ((e[A] += 16384), wy(a, i))
          : wy(a, i);
      }
      const Po = -1;
      class ns {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      const cf = {};
      class Hr {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = Ja(r);
          const o = this.injector.get(t, cf, r);
          return o !== cf || n === cf
            ? o
            : this.parentInjector.get(t, n, r);
        }
      }
      function uf(e) {
        return e !== Po;
      }
      function rs(e) {
        return 32767 & e;
      }
      function os(e, t) {
        let n = (function RR(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[xo]), n--;
        return r;
      }
      let lf = !0;
      function Cc(e) {
        const t = lf;
        return (lf = e), t;
      }
      const Iy = 255,
        Sy = 5;
      let OR = 0;
      const Tn = {};
      function Ec(e, t) {
        const n = My(e, t);
        if (-1 !== n) return n;
        const r = t[b];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          df(r.data, e),
          df(t, null),
          df(r.blueprint, null));
        const o = Dc(e, t),
          i = e.injectorIndex;
        if (uf(o)) {
          const s = rs(o),
            a = os(o, t),
            c = a[b].data;
          for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
        }
        return (t[i + 8] = o), i;
      }
      function df(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function My(e, t) {
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
          if (((r = Fy(o)), null === r)) return Po;
          if ((n++, (o = o[xo]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return Po;
      }
      function ff(e, t, n) {
        !(function FR(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Bi) && (r = n[Bi]),
            null == r && (r = n[Bi] = OR++);
          const o = r & Iy;
          t.data[e + (o >> Sy)] |= 1 << o;
        })(e, t, n);
      }
      function Ty(e, t, n) {
        if (n & Z.Optional || void 0 !== e) return e;
        Dd();
      }
      function Ay(e, t, n, r) {
        if (
          (n & Z.Optional && void 0 === r && (r = null),
          !(n & (Z.Self | Z.Host)))
        ) {
          const o = e[Be],
            i = Tt(void 0);
          try {
            return o
              ? o.get(t, r, n & Z.Optional)
              : wv(t, r, n & Z.Optional);
          } finally {
            Tt(i);
          }
        }
        return Ty(r, 0, n);
      }
      function Ny(e, t, n, r = Z.Default, o) {
        if (null !== e) {
          if (2048 & t[A] && !(r & Z.Self)) {
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
                const a = Ry(i, s, n, r | Z.Self, Tn);
                if (a !== Tn) return a;
                let c = i.parent;
                if (!c) {
                  const u = s[Wv];
                  if (u) {
                    const l = u.get(n, Tn, r);
                    if (l !== Tn) return l;
                  }
                  (c = Fy(s)), (s = s[xo]);
                }
                i = c;
              }
              return o;
            })(e, t, n, r, Tn);
            if (s !== Tn) return s;
          }
          const i = Ry(e, t, n, r, Tn);
          if (i !== Tn) return i;
        }
        return Ay(t, n, r, o);
      }
      function Ry(e, t, n, r, o) {
        const i = (function LR(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Bi) ? e[Bi] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & Iy : VR) : t;
        })(n);
        if ('function' == typeof i) {
          if (!gy(t, e, r))
            return r & Z.Host ? Ty(o, 0, r) : Ay(t, n, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & Z.Optional)) return s;
            Dd();
          } finally {
            _y();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = My(e, t),
            c = Po,
            u = r & Z.Host ? t[Me][ot] : null;
          for (
            (-1 === a || r & Z.SkipSelf) &&
            ((c = -1 === a ? Dc(e, t) : t[a + 8]),
            c !== Po && Oy(r, !1)
              ? ((s = t[b]), (a = rs(c)), (t = os(c, t)))
              : (a = -1));
            -1 !== a;

          ) {
            const l = t[b];
            if (xy(i, a, l.data)) {
              const d = PR(a, t, n, s, r, u);
              if (d !== Tn) return d;
            }
            (c = t[a + 8]),
              c !== Po && Oy(r, t[b].data[a + 8] === u) && xy(i, a, t)
                ? ((s = l), (a = rs(c)), (t = os(c, t)))
                : (a = -1);
          }
        }
        return o;
      }
      function PR(e, t, n, r, o, i) {
        const s = t[b],
          a = s.data[e + 8],
          l = wc(
            a,
            s,
            n,
            null == r ? jr(a) && lf : r != s && !!(3 & a.type),
            o & Z.Host && i === a,
          );
        return null !== l ? zr(t, s, l, a) : Tn;
      }
      function wc(e, t, n, r, o) {
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
      function zr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function TR(e) {
            return e instanceof ns;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function iN(e, t) {
              throw (t && t.join(' > '), new E(-200, e));
            })(
              (function re(e) {
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
          const u = s.injectImpl ? Tt(s.injectImpl) : null;
          gy(e, r, Z.Default);
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
                    const s = Xv(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  o && (n.preOrderHooks ??= []).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks ??= []).push(e, i),
                      (n.preOrderCheckHooks ??= []).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== u && Tt(u), Cc(a), (s.resolving = !1), _y();
          }
        }
        return o;
      }
      function xy(e, t, n) {
        return !!(n[t + (e >> Sy)] & (1 << e));
      }
      function Oy(e, t) {
        return !(e & Z.Self || (e & Z.Host && t));
      }
      class Ye {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Ny(this._tNode, this._lView, t, Ja(r), n);
        }
      }
      function VR() {
        return new Ye(de(), v());
      }
      function Ke(e) {
        return $n(() => {
          const t = e.prototype.constructor,
            n = t[Hn] || hf(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[Hn] || hf(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function hf(e) {
        return Za(e)
          ? () => {
              const t = hf(k(e));
              return t && t();
            }
          : Pr(e);
      }
      function Fy(e) {
        const t = e[b],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[ot] : null;
      }
      function jy(e, t = null, n = null, r) {
        const o = Uy(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function Uy(e, t = null, n = null, r, o = new Set()) {
        const i = [n || J, FN(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : We(e))),
          new To(i, t || ac(), r || null, o)
        );
      }
      class $e {
        static #e = (this.THROW_IF_NOT_FOUND = $i);
        static #t = (this.NULL = new nc());
        static create(t, n) {
          if (Array.isArray(t)) return jy({ name: '' }, n, t, '');
          {
            const r = t.name ?? '';
            return jy({ name: r }, t.parent, t.providers, r);
          }
        }
        static #n = (this.ɵprov = S({
          token: $e,
          providedIn: 'any',
          factory: () => R(Nv),
        }));
        static #r = (this.__NG_ELEMENT_ID__ = -1);
      }
      new D('').__NG_ELEMENT_ID__ = e => {
        const t = de();
        if (null === t) throw new E(204, !1);
        if (2 & t.type) return t.value;
        if (e & Z.Optional) return null;
        throw new E(204, !1);
      };
      function gf(e) {
        return e.ngOriginalError;
      }
      let Gr = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = QR);
          static #t = (this.__NG_ENV_ID__ = n => n);
        }
        return e;
      })();
      class ZR extends Gr {
        constructor(t) {
          super(), (this._lView = t);
        }
        onDestroy(t) {
          return (
            pc(this._lView, t),
            () =>
              (function Qd(e, t) {
                if (null === e[fr]) return;
                const n = e[fr].indexOf(t);
                -1 !== n && e[fr].splice(n, 1);
              })(this._lView, t)
          );
        }
      }
      function QR() {
        return new ZR(v());
      }
      let qr = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new gt(!1));
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
      const te = class YR extends Mt {
        constructor(t = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = t),
            zv() &&
              ((this.destroyRef = _(Gr, { optional: !0 }) ?? void 0),
              (this.pendingTasks =
                _(qr, { optional: !0 }) ?? void 0));
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
          return t instanceof st && t.add(a), a;
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
      function $y(e) {
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
      function Hy(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = Ic;
          }
        );
      }
      class oe {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new te(!1)),
            (this.onMicrotaskEmpty = new te(!1)),
            (this.onStable = new te(!1)),
            (this.onError = new te(!1)),
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
                      $y(() => {
                        (e.callbackScheduled = !1),
                          vf(e),
                          (e.isCheckStableRunning = !0),
                          mf(e),
                          (e.isCheckStableRunning = !1);
                      });
                    }),
                    vf(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, o, i, s, a) => {
                  if (
                    (function ex(e) {
                      return qy(e, '__ignore_ng_zone__');
                    })(a)
                  )
                    return n.invokeTask(o, i, s, a);
                  try {
                    return zy(e), n.invokeTask(o, i, s, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      'eventTask' === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Gy(e);
                  }
                },
                onInvoke: (n, r, o, i, s, a, c) => {
                  try {
                    return zy(e), n.invoke(o, i, s, a, c);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function tx(e) {
                        return qy(e, '__scheduler_tick__');
                      })(a) &&
                      t(),
                      Gy(e);
                  }
                },
                onHasTask: (n, r, o, i) => {
                  n.hasTask(o, i),
                    r === o &&
                      ('microTask' == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          vf(e),
                          mf(e))
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
          if (!oe.isInAngularZone()) throw new E(909, !1);
        }
        static assertNotInAngularZone() {
          if (oe.isInAngularZone()) throw new E(909, !1);
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
      function mf(e) {
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
      function vf(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function zy(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Gy(e) {
        e._nesting--, mf(e);
      }
      class yf {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new te()),
            (this.onMicrotaskEmpty = new te()),
            (this.onStable = new te()),
            (this.onError = new te());
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
      function qy(e, t) {
        return (
          !(!Array.isArray(e) || 1 !== e.length) &&
          !0 === e[0]?.data?.[t]
        );
      }
      class hn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t),
            n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && gf(t);
          for (; n && gf(n); ) n = gf(n);
          return n || null;
        }
      }
      const rx = new D('', {
        providedIn: 'root',
        factory: () => {
          const e = _(oe),
            t = _(hn);
          return n => e.runOutsideAngular(() => t.handleError(n));
        },
      });
      function ox() {
        return jo(de(), v());
      }
      function jo(e, t) {
        return new qt(vt(e, t));
      }
      let qt = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
          static #e = (this.__NG_ELEMENT_ID__ = ox);
        }
        return e;
      })();
      function Zy(e) {
        return e instanceof qt ? e.nativeElement : e;
      }
      function ix() {
        return this._results[Symbol.iterator]();
      }
      class _f {
        static #e = Symbol.iterator;
        get changes() {
          return (this._changes ??= new te());
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
          const n = _f.prototype;
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
          const r = (function At(e) {
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
      const Cf = new Map();
      let ax = 0;
      const Tc = '__ngContext__';
      function ut(e, t) {
        tt(t)
          ? ((e[Tc] = t[Fo]),
            (function ux(e) {
              Cf.set(e[Fo], e);
            })(t))
          : (e[Tc] = t);
      }
      function o_(e) {
        return s_(e[Zi]);
      }
      function i_(e) {
        return s_(e[an]);
      }
      function s_(e) {
        for (; null !== e && !ct(e); ) e = e[an];
        return e;
      }
      let Df;
      const as = new D('', { providedIn: 'root', factory: () => Mx }),
        Mx = 'ng',
        p_ = new D(''),
        Wr = new D('', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        g_ = new D('', {
          providedIn: 'root',
          factory: () =>
            (function hr() {
              if (void 0 !== Df) return Df;
              if (typeof document < 'u') return document;
              throw new E(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let m_ = () => null;
      function Af(e, t, n = !1) {
        return m_(e, t, n);
      }
      const b_ = new D('', { providedIn: 'root', factory: () => !1 });
      let Vc;
      function A_(e) {
        return (
          (function kf() {
            if (void 0 === Vc && ((Vc = null), be.trustedTypes))
              try {
                Vc = be.trustedTypes.createPolicy(
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
      class N_ {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${hv})`;
        }
      }
      function pr(e) {
        return e instanceof N_
          ? e.changingThisBreaksApplicationSecurity
          : e;
      }
      function ps(e, t) {
        const n = (function qx(e) {
          return (e instanceof N_ && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see ${hv})`,
          );
        }
        return n === t;
      }
      const Yx =
        /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var zo = (function (e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })(zo || {});
      function Uf(e) {
        const t = ms();
        return t
          ? t.sanitize(zo.URL, e) || ''
          : ps(e, 'URL')
          ? pr(e)
          : (function Pf(e) {
              return (e = String(e)).match(Yx) ? e : 'unsafe:' + e;
            })(U(e));
      }
      function j_(e) {
        const t = ms();
        if (t) return A_(t.sanitize(zo.RESOURCE_URL, e) || '');
        if (ps(e, 'ResourceURL')) return A_(pr(e));
        throw new E(904, !1);
      }
      function ms() {
        const e = v();
        return e && e[bn].sanitizer;
      }
      const fO = /^>|^->|<!--|-->|--!>|<!-$/g,
        hO = /(<|>)/g,
        pO = '\u200b$1\u200b';
      function Wt(e) {
        return e instanceof Function ? e() : e;
      }
      var gr = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })(gr || {});
      let Hf;
      function zf(e, t) {
        return Hf(e, t);
      }
      function qo(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          ct(r) ? (i = r) : tt(r) && ((s = !0), (r = r[Se]));
          const a = ee(r);
          0 === e && null !== n
            ? null == o
              ? J_(t, n, a)
              : Zr(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? Zr(t, n, a, o || null, !0)
            : 2 === e
            ? (function ys(e, t, n) {
                e.removeChild(null, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function FO(e, t, n, r, o) {
                const i = n[In];
                i !== ee(n) && qo(t, e, r, i, o);
                for (let a = Oe; a < n.length; a++) {
                  const c = n[a];
                  Gc(c[b], c, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function qf(e, t) {
        return e.createComment(
          (function B_(e) {
            return e.replace(fO, t => t.replace(hO, pO));
          })(t),
        );
      }
      function $c(e, t, n) {
        return e.createElement(t, n);
      }
      function Y_(e, t) {
        t[bn].changeDetectionScheduler?.notify(8),
          Gc(e, t, t[P], 2, null, null);
      }
      function K_(e, t) {
        const n = e[ko],
          r = t[Ue];
        (tt(r) || t[Me] !== r[Ue][Me]) &&
          (e[A] |= dc.HasTransplantedViews),
          null === n ? (e[ko] = [t]) : n.push(t);
      }
      function Wf(e, t) {
        const n = e[ko],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function vs(e, t) {
        if (e.length <= Oe) return;
        const n = Oe + t,
          r = e[n];
        if (r) {
          const o = r[Vr];
          null !== o && o !== e && Wf(o, r),
            t > 0 && (e[n - 1][an] = r[an]);
          const i = ec(e, Oe + t);
          !(function SO(e, t) {
            Y_(e, t), (t[Se] = null), (t[ot] = null);
          })(r[b], r);
          const s = i[Gn];
          null !== s && s.detachView(i[b]),
            (r[Ue] = null),
            (r[an] = null),
            (r[A] &= -129);
        }
        return r;
      }
      function Hc(e, t) {
        if (!(256 & t[A])) {
          const n = t[P];
          n.destroyNode && Gc(e, t, n, 3, null, null),
            (function TO(e) {
              let t = e[Zi];
              if (!t) return Zf(e[b], e);
              for (; t; ) {
                let n = null;
                if (tt(t)) n = t[Zi];
                else {
                  const r = t[Oe];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[an] && t !== e; )
                    tt(t) && Zf(t[b], t), (t = t[Ue]);
                  null === t && (t = e),
                    tt(t) && Zf(t[b], t),
                    (n = t && t[an]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Zf(e, t) {
        if (256 & t[A]) return;
        const n = F(null);
        try {
          (t[A] &= -129),
            (t[A] |= 256),
            t[Kt] && Zl(t[Kt]),
            (function RO(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof ns)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          c = i[s + 1];
                        Sn(4, a, c);
                        try {
                          c.call(a);
                        } finally {
                          Sn(5, a, c);
                        }
                      }
                    else {
                      Sn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        Sn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function NO(e, t) {
              const n = e.cleanup,
                r = t[Ro];
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else n[i].call(r[n[i + 1]]);
              null !== r && (t[Ro] = null);
              const o = t[fr];
              if (null !== o) {
                t[fr] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, t),
            1 === t[b].type && t[P].destroy();
          const r = t[Vr];
          if (null !== r && ct(t[Ue])) {
            r !== t[Ue] && Wf(r, t);
            const o = t[Gn];
            null !== o && o.detachView(e);
          }
          !(function lx(e) {
            Cf.delete(e[Fo]);
          })(t);
        } finally {
          F(n);
        }
      }
      function Qf(e, t, n) {
        return (function X_(e, t, n) {
          let r = t;
          for (; null !== r && 168 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Se];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } =
                e.data[r.directiveStart + o];
              if (i === on.None || i === on.Emulated) return null;
            }
            return vt(r, n);
          }
        })(e, t.parent, n);
      }
      function Zr(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function J_(e, t, n) {
        e.appendChild(t, n);
      }
      function eC(e, t, n, r, o) {
        null !== r ? Zr(e, t, n, r, o) : J_(e, t, n);
      }
      function Yf(e, t) {
        return e.parentNode(t);
      }
      function tC(e, t, n) {
        return rC(e, t, n);
      }
      let Kf,
        rC = function nC(e, t, n) {
          return 40 & e.type ? vt(e, n) : null;
        };
      function zc(e, t, n, r) {
        const o = Qf(e, r, t),
          i = t[P],
          a = tC(r.parent || t[ot], r, t);
        if (null != o)
          if (Array.isArray(n))
            for (let c = 0; c < n.length; c++) eC(i, o, n[c], a, !1);
          else eC(i, o, n, a, !1);
        void 0 !== Kf && Kf(i, r, t, n, o);
      }
      function Qr(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return vt(t, e);
          if (4 & n) return Xf(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return Qr(e, r);
            {
              const o = e[t.index];
              return ct(o) ? Xf(-1, o) : ee(o);
            }
          }
          if (128 & n) return Qr(e, t.next);
          if (32 & n) return zf(t, e)() || ee(e[t.index]);
          {
            const r = iC(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : Qr(qn(e[Me]), r)
              : Qr(e, t.next);
          }
        }
        return null;
      }
      function iC(e, t) {
        return null !== t ? e[Me][ot].projection[t.projection] : null;
      }
      function Xf(e, t) {
        const n = Oe + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[b].firstChild;
          if (null !== o) return Qr(r, o);
        }
        return t[In];
      }
      function Jf(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          if (128 === n.type) {
            n = n.next;
            continue;
          }
          const a = r[n.index],
            c = n.type;
          if (
            (s && 0 === t && (a && ut(ee(a), r), (n.flags |= 2)),
            32 & ~n.flags)
          )
            if (8 & c)
              Jf(e, t, n.child, r, o, i, !1), qo(t, e, o, a, i);
            else if (32 & c) {
              const u = zf(n, r);
              let l;
              for (; (l = u()); ) qo(t, e, o, l, i);
              qo(t, e, o, a, i);
            } else 16 & c ? aC(e, t, r, n, o, i) : qo(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function Gc(e, t, n, r, o, i) {
        Jf(n, r, e.firstChild, t, o, i, !1);
      }
      function aC(e, t, n, r, o, i) {
        const s = n[Me],
          c = s[ot].projection[r.projection];
        if (Array.isArray(c))
          for (let u = 0; u < c.length; u++) qo(t, e, o, c[u], i);
        else {
          let u = c;
          const l = s[Ue];
          Sc(r) && (u.flags |= 128), Jf(e, t, u, l, o, i, !0);
        }
      }
      function cC(e, t, n) {
        '' === n
          ? e.removeAttribute(t, 'class')
          : e.setAttribute(t, 'class', n);
      }
      function uC(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && Rd(e, t, r),
          null !== o && cC(e, t, o),
          null !== i &&
            (function PO(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      const B = {};
      function j(e = 1) {
        lC(G(), v(), it() + e, !1);
      }
      function lC(e, t, n, r) {
        if (!r)
          if (3 & ~t[A]) {
            const i = e.preOrderHooks;
            null !== i && _c(t, i, 0, n);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && yc(t, i, n);
          }
        $r(n);
      }
      function w(e, t = Z.Default) {
        const n = v();
        return null === n ? R(e, t) : Ny(de(), n, k(e), t);
      }
      function fC(e, t, n, r, o, i) {
        const s = F(null);
        try {
          let a = null;
          o & lr.SignalBased && (a = t[r][Re]),
            null !== a &&
              void 0 !== a.transformFn &&
              (i = a.transformFn(i)),
            o & lr.HasDecoratorInputTransform &&
              (i = e.inputTransforms[r].call(t, i)),
            null !== e.setInput
              ? e.setInput(t, a, i, n, r)
              : Kv(t, a, r, i);
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
          ry(d),
          (d[Ue] = d[xo] = e),
          (d[_e] = n),
          (d[bn] = s || (e && e[bn])),
          (d[P] = a || (e && e[P])),
          (d[Be] = c || (e && e[Be]) || null),
          (d[ot] = i),
          (d[Fo] = (function cx() {
            return ax++;
          })()),
          (d[mt] = l),
          (d[Wv] = u),
          (d[Me] = 2 == t.type ? e[Me] : d),
          d
        );
      }
      function Yr(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function eh(e, t, n, r, o) {
            const i = cy(),
              s = Kd(),
              c = (e.data[t] = (function zO(e, t, n, r, o, i) {
                let s = t ? t.injectorIndex : -1,
                  a = 0;
                return (
                  Br() && (a |= 128),
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
          const s = (function es() {
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
      function hC(e, t, n, r, o) {
        const i = it(),
          s = 2 & r;
        try {
          $r(-1),
            s && t.length > T && lC(e, t, T, !1),
            Sn(s ? 2 : 0, o),
            n(r, o);
        } finally {
          $r(i), Sn(s ? 3 : 1, o);
        }
      }
      function th(e, t, n) {
        if ($d(t)) {
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
      function nh(e, t, n) {
        ay() &&
          ((function KO(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            jr(n) &&
              (function oF(e, t, n) {
                const r = vt(t, e),
                  o = pC(n);
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
                    e[bn].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null,
                  ),
                );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || Ec(n, t),
              ut(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const c = e.data[a],
                u = zr(t, e, a, n);
              ut(u, t),
                null !== s && iF(0, a - o, u, c, 0, s),
                cn(c) && (Gt(n.index, t)[_e] = zr(t, e, a, n));
            }
          })(e, t, n, vt(n, t)),
          !(64 & ~n.flags) && _C(e, t, n));
      }
      function rh(e, t, n = vt) {
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
      function pC(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = oh(
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
      function oh(e, t, n, r, o, i, s, a, c, u, l) {
        const d = T + r,
          f = d + o,
          h = (function VO(e, t) {
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
      let gC = () => null;
      function mC(e, t, n, r, o) {
        for (let i in t) {
          if (!t.hasOwnProperty(i)) continue;
          const s = t[i];
          if (void 0 === s) continue;
          r ??= {};
          let a,
            c = lr.None;
          Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
          let u = i;
          if (null !== o) {
            if (!o.hasOwnProperty(i)) continue;
            u = o[i];
          }
          0 === e ? vC(r, n, u, a, c) : vC(r, n, u, a);
        }
        return r;
      }
      function vC(e, t, n, r, o) {
        let i;
        e.hasOwnProperty(n)
          ? (i = e[n]).push(t, r)
          : (i = e[n] = [t, r]),
          void 0 !== o && i.push(o);
      }
      function ih(e, t, n, r) {
        if (ay()) {
          const o = null === r ? null : { '': -1 },
            i = (function JO(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if (kv(t, s.selectors, !1))
                    if ((r || (r = []), cn(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()),
                          s.findHostDirectiveDefs(s, a, o),
                          r.unshift(...a, s),
                          sh(e, t, a.length);
                      } else r.unshift(s), sh(e, t, 0);
                    else
                      (o = o || new Map()),
                        s.findHostDirectiveDefs?.(s, r, o),
                        r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && yC(e, t, n, s, o, a),
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
        n.mergedAttrs = zi(n.mergedAttrs, n.attrs);
      }
      function yC(e, t, n, r, o, i) {
        for (let u = 0; u < r.length; u++) ff(Ec(n, t), e, r[u].type);
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
          c = _s(e, t, r.length, null);
        for (let u = 0; u < r.length; u++) {
          const l = r[u];
          (n.mergedAttrs = zi(n.mergedAttrs, l.hostAttrs)),
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
            (c = mC(0, d.inputs, l, c, f ? f.inputs : null)),
              (u = mC(1, d.outputs, l, u, p));
            const g =
              null === c || null === s || xd(t) ? null : sF(c, l, s);
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
      function _C(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function _R() {
            return L.lFrame.currentDirectiveIndex;
          })();
        try {
          $r(i);
          for (let a = r; a < o; a++) {
            const c = e.data[a],
              u = t[a];
            Jd(a),
              (null !== c.hostBindings ||
                0 !== c.hostVars ||
                null !== c.hostAttrs) &&
                XO(c, u);
          }
        } finally {
          $r(-1), Jd(s);
        }
      }
      function XO(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function sh(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function tF(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++)
              n[t.exportAs[r]] = e;
          cn(t) && (n[''] = e);
        }
      }
      function rF(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Pr(o.type)),
          s = new ns(i, cn(o), w);
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
          })(e, t, r, _s(e, n, o.hostVars, B), o);
      }
      function An(e, t, n, r, o, i) {
        const s = vt(e, t);
        !(function ah(e, t, n, r, o, i, s) {
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
            fC(r, n, s[a++], s[a++], s[a++], s[a++]);
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
      function CC(e, t, n, r) {
        return [e, !0, 0, t, null, r, null, n, null, null];
      }
      function EC(e, t) {
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
        return e[Zi] ? (e[qv][an] = t) : (e[Zi] = t), (e[qv] = t), t;
      }
      function ch(e, t, n) {
        mc(0);
        const r = F(null);
        try {
          t(e, n);
        } finally {
          F(r);
        }
      }
      function DC(e) {
        return (e[Ro] ??= []);
      }
      function wC(e) {
        return (e.cleanup ??= []);
      }
      function Zc(e, t) {
        const n = e[Be],
          r = n ? n.get(hn, null) : null;
        r && r.handleError(t);
      }
      function uh(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            c = n[i++];
          fC(e.data[s], t[s], r, a, c, o);
        }
      }
      function aF(e, t) {
        const n = Gt(t, e),
          r = n[b];
        !(function cF(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n);
        const o = n[Se];
        null !== o && null === n[mt] && (n[mt] = Af(o, n[Be])),
          lh(r, n, n[_e]);
      }
      function lh(e, t, n) {
        nf(t);
        try {
          const r = e.viewQuery;
          null !== r && ch(1, r, n);
          const o = e.template;
          null !== o && hC(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            t[Gn]?.finishViewCreation(e),
            e.staticContentQueries && EC(e, t),
            e.staticViewQueries && ch(2, e.viewQuery, n);
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
          (t[A] &= -5), rf();
        }
      }
      function Wo(e, t, n, r) {
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
          c[Vr] = e[t.index];
          const l = e[Gn];
          return (
            null !== l && (c[Gn] = l.createEmbeddedView(i)),
            lh(i, c, n),
            c
          );
        } finally {
          F(o);
        }
      }
      function Kr(e, t) {
        return !t || null === t.firstChild || Sc(e);
      }
      function Zo(e, t, n, r = !0) {
        const o = t[b];
        if (
          ((function AO(e, t, n, r) {
            const o = Oe + r,
              i = n.length;
            r > 0 && (n[o - 1][an] = t),
              r < i - Oe
                ? ((t[an] = n[o]), Mv(n, Oe + r, t))
                : (n.push(t), (t[an] = null)),
              (t[Ue] = n);
            const s = t[Vr];
            null !== s && n !== s && K_(s, t);
            const a = t[Gn];
            null !== a && a.insertView(e), Zd(t), (t[A] |= 128);
          })(o, t, e, n),
          r)
        ) {
          const s = Xf(n, e),
            a = t[P],
            c = Yf(a, e[In]);
          null !== c &&
            (function MO(e, t, n, r, o, i) {
              (r[Se] = o), (r[ot] = t), Gc(e, r, n, 1, o, i);
            })(o, e[ot], a, t, c, s);
        }
        const i = t[mt];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function Cs(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          if (128 === n.type) {
            n = o ? n.projectionNext : n.next;
            continue;
          }
          const i = t[n.index];
          null !== i && r.push(ee(i)), ct(i) && SC(i, r);
          const s = n.type;
          if (8 & s) Cs(e, t, n.child, r);
          else if (32 & s) {
            const a = zf(n, t);
            let c;
            for (; (c = a()); ) r.push(c);
          } else if (16 & s) {
            const a = iC(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const c = qn(t[Me]);
              Cs(c[b], c, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      function SC(e, t) {
        for (let n = Oe; n < e.length; n++) {
          const r = e[n],
            o = r[b].firstChild;
          null !== o && Cs(r[b], r, o, t);
        }
        e[In] !== e[Se] && t.push(e[In]);
      }
      let MC = [];
      const hF = {
          ...q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            hc(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[Kt] = this;
          },
        },
        gF = {
          ...q,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let t = qn(e.lView);
            for (; t && !TC(t[b]); ) t = qn(t);
            t && oy(t);
          },
          consumerOnSignalRead() {
            this.lView[Kt] = this;
          },
        };
      function TC(e) {
        return 2 !== e.type;
      }
      const mF = 100;
      function Qc(e, t = !0, n = 0) {
        const r = e[bn],
          o = r.rendererFactory;
        o.begin?.();
        try {
          !(function vF(e, t) {
            const n = dy();
            try {
              fy(!0), fh(e, t);
              let r = 0;
              for (; Ji(e); ) {
                if (r === mF) throw new E(103, !1);
                r++, fh(e, 1);
              }
            } finally {
              fy(n);
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
        t[bn].inlineEffectRunner?.flush(), nf(t);
        let a = !0,
          c = null,
          u = null;
        TC(e)
          ? ((u = (function lF(e) {
              return (
                e[Kt] ??
                (function dF(e) {
                  const t = MC.pop() ?? Object.create(hF);
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
              const t = e[Kt] ?? Object.create(gF);
              return (t.lView = e), t;
            })(t)),
            (c = Fa(u)))
          : t[Kt] && (Zl(t[Kt]), (t[Kt] = null));
        try {
          ry(t),
            (function hy(e) {
              return (L.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && hC(e, t, n, 2, r);
          const l = !(3 & ~o);
          if (l) {
            const h = e.preOrderCheckHooks;
            null !== h && yc(t, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && _c(t, h, 0, null), sf(t, 0);
          }
          if (
            ((function _F(e) {
              for (let t = o_(e); null !== t; t = i_(t)) {
                if (!(t[A] & dc.HasTransplantedViews)) continue;
                const n = t[ko];
                for (let r = 0; r < n.length; r++) oy(n[r]);
              }
            })(t),
            NC(t, 0),
            null !== e.contentQueries && EC(e, t),
            l)
          ) {
            const h = e.contentCheckHooks;
            null !== h && yc(t, h);
          } else {
            const h = e.contentHooks;
            null !== h && _c(t, h, 1), sf(t, 1);
          }
          !(function LO(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const o = n[r];
                  if (o < 0) $r(~o);
                  else {
                    const i = o,
                      s = n[++r],
                      a = n[++r];
                    yR(s, i), a(2, t[i]);
                  }
                }
              } finally {
                $r(-1);
              }
          })(e, t);
          const d = e.components;
          null !== d && xC(t, d, 0);
          const f = e.viewQuery;
          if ((null !== f && ch(2, f, r), l)) {
            const h = e.viewCheckHooks;
            null !== h && yc(t, h);
          } else {
            const h = e.viewHooks;
            null !== h && _c(t, h, 2), sf(t, 2);
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
            (ql(u, c),
            a &&
              (function fF(e) {
                e.lView[Kt] !== e && ((e.lView = null), MC.push(e));
              })(u)),
            rf();
        }
      }
      function NC(e, t) {
        for (let n = o_(e); null !== n; n = i_(n))
          for (let r = Oe; r < n.length; r++) RC(n[r], t);
      }
      function CF(e, t, n) {
        RC(Gt(t, e), n);
      }
      function RC(e, t) {
        Wd(e) && fh(e, t);
      }
      function fh(e, t) {
        const r = e[b],
          o = e[A],
          i = e[Kt];
        let s = !!(0 === t && 16 & o);
        if (
          ((s ||= !!(64 & o && 0 === t)),
          (s ||= !!(1024 & o)),
          (s ||= !(!i?.dirty || !Wl(i))),
          (s ||= !1),
          i && (i.dirty = !1),
          (e[A] &= -9217),
          s)
        )
          yF(r, e, r.template, e[_e]);
        else if (8192 & o) {
          NC(e, 1);
          const a = r.components;
          null !== a && xC(e, a, 1);
        }
      }
      function xC(e, t, n) {
        for (let r = 0; r < t.length; r++) CF(e, t[r], n);
      }
      function Es(e, t) {
        const n = dy() ? 64 : 1088;
        for (e[bn].changeDetectionScheduler?.notify(t); e; ) {
          e[A] |= n;
          const r = qn(e);
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
          return !(256 & ~this._lView[A]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[Ue];
            if (ct(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (vs(t, r), ec(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Hc(this._lView[b], this._lView);
        }
        onDestroy(t) {
          pc(this._lView, t);
        }
        markForCheck() {
          Es(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[A] &= -129;
        }
        reattach() {
          Zd(this._lView), (this._lView[A] |= 128);
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
          const t = Yi(this._lView),
            n = this._lView[Vr];
          null !== n && !t && Wf(n, this._lView),
            Y_(this._lView[b], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new E(902, !1);
          this._appRef = t;
          const n = Yi(this._lView),
            r = this._lView[Vr];
          null !== r && !n && K_(r, this._lView), Zd(this._lView);
        }
      }
      let Kn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = wF);
        }
        return e;
      })();
      const EF = Kn,
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
            const o = Wo(
              this._declarationLView,
              this._declarationTContainer,
              t,
              { embeddedViewInjector: n, dehydratedView: r },
            );
            return new Ds(o);
          }
        };
      function wF() {
        return Yc(de(), v());
      }
      function Yc(e, t) {
        return 4 & e.type ? new DF(t, e, jo(e, t)) : null;
      }
      let JC = () => null;
      function Jr(e, t) {
        return JC(e, t);
      }
      class Yo {}
      const Ns = new D('', { providedIn: 'root', factory: () => !1 }),
        eE = new D('');
      class gk {}
      class tE {}
      class vk {
        resolveComponentFactory(t) {
          throw (function mk(e) {
            const t = Error(
              `No component factory found for ${We(e)}.`,
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      class nu {
        static #e = (this.NULL = new vk());
      }
      class wh {}
      let Xn = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function yk() {
                const e = v(),
                  n = Gt(de().index, e);
                return (tt(n) ? n : e)[P];
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
      const rE = new Set();
      function _t(e) {
        rE.has(e) ||
          (rE.add(e),
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
              ? (o = hd(o, a))
              : 2 == i && (r = hd(r, a + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class cE extends nu {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = W(t);
          return new Os(n, this.ngModule);
        }
      }
      function uE(e, t) {
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
                  isSignal: !!((i ? o[1] : lr.None) & lr.SignalBased),
                }
              : { propName: s, templateName: r },
          );
        }
        return n;
      }
      class Os extends tE {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = uE(t.inputs, !0);
          if (null !== n)
            for (const o of r)
              n.hasOwnProperty(o.propName) &&
                (o.transform = n[o.propName]);
          return r;
        }
        get outputs() {
          return uE(this.componentDef.outputs, !1);
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
              (o = o || this.ngModule) instanceof zt
                ? o
                : o?.injector;
            s &&
              null !== this.componentDef.getStandaloneInjector &&
              (s = this.componentDef.getStandaloneInjector(s) || s);
            const a = s ? new Hr(t, s) : t,
              c = a.get(wh, null);
            if (null === c) throw new E(407, !1);
            const u = a.get(_k, null),
              f = {
                rendererFactory: c,
                sanitizer: u,
                inlineEffectRunner: null,
                afterRenderEventManager: a.get(ru, null),
                changeDetectionScheduler: a.get(Yo, null),
              },
              h = c.createRenderer(null, this.componentDef),
              p = this.componentDef.selectors[0][0] || 'div',
              g = r
                ? (function jO(e, t, n, r) {
                    const i = r.get(b_, !1) || n === on.ShadowDom,
                      s = e.selectRootElement(t, i);
                    return (
                      (function UO(e) {
                        gC(e);
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
            null !== g && (C = Af(g, a, !0));
            const y = oh(
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
            let $, X;
            nf(M);
            try {
              const Ae = this.componentDef;
              let Lt,
                Li = null;
              Ae.findHostDirectiveDefs
                ? ((Lt = []),
                  (Li = new Map()),
                  Ae.findHostDirectiveDefs(Ae, Lt, Li),
                  Lt.push(Ae))
                : (Lt = [Ae]);
              const IT = (function Ak(e, t) {
                  const n = e[b],
                    r = T;
                  return (e[r] = t), Yr(n, r, 2, '#host', null);
                })(M, g),
                W4 = (function Nk(e, t, n, r, o, i, s) {
                  const a = o[b];
                  !(function Rk(e, t, n, r) {
                    for (const o of e)
                      t.mergedAttrs = zi(t.mergedAttrs, o.hostAttrs);
                    null !== t.mergedAttrs &&
                      (iu(t, t.mergedAttrs, !0),
                      null !== n && uC(r, n, t));
                  })(r, e, t, s);
                  let c = null;
                  null !== t && (c = Af(t, o[Be]));
                  const u = i.rendererFactory.createRenderer(t, n);
                  let l = 16;
                  n.signals ? (l = 4096) : n.onPush && (l = 64);
                  const d = qc(
                    o,
                    pC(n),
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
                    a.firstCreatePass && sh(a, e, r.length - 1),
                    Wc(o, d),
                    (o[e.index] = d)
                  );
                })(IT, g, Ae, Lt, M, f, h);
              (X = Xi(y, T)),
                g &&
                  (function Ok(e, t, n, r) {
                    if (r) Rd(e, n, ['ng-version', '18.1.4']);
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
                            if (!sn(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: t, classes: n };
                      })(t.selectors[0]);
                      o && Rd(e, n, o),
                        i && i.length > 0 && cC(e, n, i.join(' '));
                    }
                  })(h, Ae, g, r),
                void 0 !== n &&
                  (function Fk(e, t, n) {
                    const r = (e.projection = []);
                    for (let o = 0; o < t.length; o++) {
                      const i = n[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })(X, this.ngContentSelectors, n),
                ($ = (function xk(e, t, n, r, o, i) {
                  const s = de(),
                    a = o[b],
                    c = vt(s, o);
                  yC(a, o, s, n, null, r);
                  for (let l = 0; l < n.length; l++)
                    ut(zr(o, a, s.directiveStart + l, s), o);
                  _C(a, o, s), c && ut(c, o);
                  const u = zr(
                    o,
                    a,
                    s.directiveStart + s.componentOffset,
                    s,
                  );
                  if (((e[_e] = o[_e] = u), null !== i))
                    for (const l of i) l(u, t);
                  return th(a, s, o), u;
                })(W4, Ae, Lt, Li, M, [kk])),
                lh(y, M, null);
            } finally {
              rf();
            }
            return new Tk(this.componentType, $, jo(X, M), M, X);
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
            uh(i[b], i, o, t, n),
              this.previousInputValues.set(t, n),
              Es(Gt(this._tNode.index, i), 1);
          }
        }
        get injector() {
          return new Ye(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function kk() {
        const e = de();
        vc(v()[b], e);
      }
      let pn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = Pk);
        }
        return e;
      })();
      function Pk() {
        return fE(de(), v());
      }
      const Lk = pn,
        lE = class extends Lk {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return jo(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Ye(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Dc(this._hostTNode, this._hostLView);
            if (uf(t)) {
              const n = os(t, this._hostLView),
                r = rs(t);
              return new Ye(n[b].data[r + 8], n);
            }
            return new Ye(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = dE(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Oe;
          }
          createEmbeddedView(t, n, r) {
            let o, i;
            'number' == typeof r
              ? (o = r)
              : null != r && ((o = r.index), (i = r.injector));
            const s = Jr(this._lContainer, t.ssrId),
              a = t.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, Kr(this._hostTNode, s)), a;
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
              const g = (s ? u : this.parentInjector).get(zt, null);
              g && (i = g);
            }
            const l = W(c.componentType ?? {}),
              d = Jr(this._lContainer, l?.id ?? null),
              h = c.create(u, o, d?.firstChild ?? null, i);
            return (
              this.insertImpl(h.hostView, a, Kr(this._hostTNode, d)),
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
                return ct(e[Ue]);
              })(o)
            ) {
              const a = this.indexOf(t);
              if (-1 !== a) this.detach(a);
              else {
                const c = o[Ue],
                  u = new lE(c, c[ot], c[Ue]);
                u.detach(u.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            return (
              Zo(s, o, i, r),
              t.attachToViewContainerRef(),
              Mv(Mh(s), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = dE(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = vs(this._lContainer, n);
            r && (ec(Mh(this._lContainer), n), Hc(r[b], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = vs(this._lContainer, n);
            return r && null != ec(Mh(this._lContainer), n)
              ? new Ds(r)
              : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function dE(e) {
        return e[8];
      }
      function Mh(e) {
        return e[8] || (e[8] = []);
      }
      function fE(e, t) {
        let n;
        const r = t[e.index];
        return (
          ct(r)
            ? (n = r)
            : ((n = CC(r, t, null, e)), (t[e.index] = n), Wc(t, n)),
          hE(n, t, e, r),
          new lE(n, e, t)
        );
      }
      let hE = function gE(e, t, n, r) {
          if (e[In]) return;
          let o;
          (o =
            8 & n.type
              ? ee(r)
              : (function Vk(e, t) {
                  const n = e[P],
                    r = n.createComment(''),
                    o = vt(t, e);
                  return (
                    Zr(
                      n,
                      Yf(n, o),
                      r,
                      (function xO(e, t) {
                        return e.nextSibling(t);
                      })(n, o),
                      !1,
                    ),
                    r
                  );
                })(t, n)),
            (e[In] = o);
        },
        Th = () => !1;
      class Ah {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Ah(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Nh {
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
            return new Nh(o);
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
            null !== kh(t, n).matches && this.queries[n].setDirty();
        }
      }
      class mE {
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
      class Rh {
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
          return null !== n ? new Rh(n) : null;
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
      class xh {
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
              new xh(this.metadata))
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
                  wc(n, t, i, !1, !1),
                );
            }
          else
            r === Kn
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(
                  t,
                  n,
                  wc(n, t, r, !1, !1),
                );
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === qt || o === pn || (o === Kn && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = wc(n, t, o, !1, !1);
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
                ? jo(e, t)
                : 4 & e.type
                ? Yc(e, t)
                : null;
            })(t, e)
          : -2 === n
          ? (function Gk(e, t, n) {
              return n === qt
                ? jo(t, e)
                : n === Kn
                ? Yc(t, e)
                : n === pn
                ? fE(t, e)
                : void 0;
            })(e, t, r)
          : zr(e, e[b], n, t);
      }
      function vE(e, t, n, r) {
        const o = t[Gn].queries[r];
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
      function Oh(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = vE(e, t, o, n);
          for (let a = 0; a < i.length; a += 2) {
            const c = i[a];
            if (c > 0) r.push(s[a / 2]);
            else {
              const u = i[a + 1],
                l = t[-c];
              for (let d = Oe; d < l.length; d++) {
                const f = l[d];
                f[Vr] === f[Ue] && Oh(f[b], f, u, r);
              }
              if (null !== l[ko]) {
                const d = l[ko];
                for (let f = 0; f < d.length; f++) {
                  const h = d[f];
                  Oh(h[b], h, u, r);
                }
              }
            }
          }
        }
        return r;
      }
      function _E(e, t, n) {
        const r = G();
        return (
          r.firstCreatePass &&
            ((function EE(e, t, n) {
              null === e.queries && (e.queries = new Rh()),
                e.queries.track(new xh(t, n));
            })(r, new mE(e, t, n), -1),
            !(2 & ~t) && (r.staticViewQueries = !0)),
          (function yE(e, t, n) {
            const r = new _f(!(4 & ~n));
            return (
              (function HO(e, t, n, r) {
                const o = DC(t);
                o.push(n),
                  e.firstCreatePass && wC(e).push(r, o.length - 1);
              })(e, t, r, r.destroy),
              (t[Gn] ??= new Nh()).queries.push(new Ah(r)) - 1
            );
          })(r, v(), t)
        );
      }
      function kh(e, t) {
        return e.queries.getByIndex(t);
      }
      function DE(e, t) {
        const n = e[b],
          r = kh(n, t);
        return r.crossesNgTemplate ? Oh(n, e, t, []) : vE(n, e, r, t);
      }
      function yr(e, t) {
        _t('NgSignals');
        const n = (function RT(e) {
            const t = Object.create(OT);
            t.value = e;
            const n = () => (et(t), t.value);
            return (n[Re] = t), n;
          })(e),
          r = n[Re];
        return (
          t?.equal && (r.equal = t.equal),
          (n.set = o => jm(r, o)),
          (n.update = o =>
            (function xT(e, t) {
              xm() || Vm(), jm(e, t(e.value));
            })(r, o)),
          (n.asReadonly = bE.bind(n)),
          n
        );
      }
      function bE() {
        const e = this[Re];
        if (void 0 === e.readonlyFn) {
          const t = () => this();
          (t[Re] = e), (e.readonlyFn = t);
        }
        return e.readonlyFn;
      }
      function fe(e) {
        let t = (function PE(e) {
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
              a && c1(e, a);
              const c = o.viewQuery,
                u = o.contentQueries;
              if (
                (c && s1(e, c),
                u && a1(e, u),
                r1(e, o),
                QA(e.outputs, o.outputs),
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
                a && a.ngInherit && a(e), a === fe && (n = !1);
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
              (o.hostAttrs = zi(
                o.hostAttrs,
                (n = zi(n, o.hostAttrs)),
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
        return e === wn ? {} : e === J ? [] : e;
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
      function UE(e) {
        const t = e.inputConfig,
          n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            const o = t[r];
            Array.isArray(o) && o[3] && (n[r] = o[3]);
          }
        e.inputTransforms = n;
      }
      class eo {}
      class BE {}
      class Lh extends eo {
        constructor(t, n, r) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new cE(this));
          const o = at(t);
          (this._bootstrapComponents = Wt(o.bootstrap)),
            (this._r3Injector = Uy(
              t,
              n,
              [
                { provide: eo, useValue: this },
                {
                  provide: nu,
                  useValue: this.componentFactoryResolver,
                },
                ...r,
              ],
              We(t),
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
      class Vh extends BE {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new Lh(this.moduleType, t, []);
        }
      }
      class $E extends eo {
        constructor(t) {
          super(),
            (this.componentFactoryResolver = new cE(this)),
            (this.instance = null);
          const n = new To(
            [
              ...t.providers,
              { provide: eo, useValue: this },
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
      function jh(e, t, n = null) {
        return new $E({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function cu(e) {
        return (
          !!Uh(e) &&
          (Array.isArray(e) ||
            (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function Uh(e) {
        return (
          null !== e &&
          ('function' == typeof e || 'object' == typeof e)
        );
      }
      function Fe(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ps(e, t, n, r, o, i, s, a, c, u) {
        const l = n + T,
          d = t.firstCreatePass
            ? (function C1(e, t, n, r, o, i, s, a, c) {
                const u = t.consts,
                  l = Yr(t, e, 4, s || null, a || null);
                ih(t, n, l, Jt(u, c)), vc(t, l);
                const d = (l.tView = oh(
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
        const f = HE(t, e, d, n);
        ts() && zc(t, e, f, d), ut(f, e);
        const h = CC(f, e, f, d);
        return (
          (e[l] = h),
          Wc(e, h),
          (function pE(e, t, n) {
            return Th(e, t, n);
          })(h, d, e),
          fc(d) && nh(t, e, d),
          null != c && rh(e, d, u),
          d
        );
      }
      function Jn(e, t, n, r, o, i, s, a) {
        const c = v(),
          u = G();
        return Ps(c, u, e, t, n, r, o, Jt(u.consts, i), s, a), Jn;
      }
      let HE = function zE(e, t, n, r) {
        return Mn(!0), t[P].createComment('');
      };
      function Rn(e, t, n, r) {
        const o = v();
        return Fe(o, fn(), t) && (G(), An(Ce(), o, e, t, n, r)), Rn;
      }
      function gu(e, t) {
        return (e << 17) | (t << 2);
      }
      function Cr(e) {
        return (e >> 17) & 32767;
      }
      function Kh(e) {
        return 2 | e;
      }
      function ro(e) {
        return (131068 & e) >> 2;
      }
      function Xh(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Jh(e) {
        return 1 | e;
      }
      function ED(e, t, n, r) {
        const o = e[n + 1],
          i = null === t;
        let s = r ? Cr(o) : ro(o),
          a = !1;
        for (; 0 !== s && (!1 === a || i); ) {
          const u = e[s + 1];
          iP(e[s], t) && ((a = !0), (e[s + 1] = r ? Jh(u) : Kh(u))),
            (s = r ? Cr(u) : ro(u));
        }
        a && (e[n + 1] = r ? Kh(o) : Jh(o));
      }
      function iP(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) &&
            So(e, t) >= 0)
        );
      }
      function x(e, t, n) {
        const r = v();
        return (
          Fe(r, fn(), t) &&
            (function Ot(e, t, n, r, o, i, s, a) {
              const c = vt(t, n);
              let l,
                u = t.inputs;
              !a && null != u && (l = u[r])
                ? (uh(e, n, l, r, o),
                  jr(t) &&
                    (function WO(e, t) {
                      const n = Gt(t, e);
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
          x
        );
      }
      function ep(e, t, n, r, o) {
        const s = o ? 'class' : 'style';
        uh(e, n, t.inputs[s], s, r);
      }
      function Er(e, t, n) {
        return gn(e, t, n, !1), Er;
      }
      function mu(e, t) {
        return gn(e, t, null, !0), mu;
      }
      function gn(e, t, n, r) {
        const o = v(),
          i = G(),
          s = (function Zn(e) {
            const t = L.lFrame,
              n = t.bindingIndex;
            return (t.bindingIndex = t.bindingIndex + e), n;
          })(2);
        i.firstUpdatePass &&
          (function AD(e, t, n, r) {
            const o = e.data;
            if (null === o[n + 1]) {
              const i = o[it()],
                s = (function TD(e, t) {
                  return t >= e.expandoStartIndex;
                })(e, n);
              (function OD(e, t) {
                return !!(e.flags & (t ? 8 : 16));
              })(i, r) &&
                null === t &&
                !s &&
                (t = !1),
                (t = (function pP(e, t, n, r) {
                  const o = (function ef(e) {
                    const t = L.lFrame.currentDirectiveIndex;
                    return -1 === t ? null : e[t];
                  })(e);
                  let i = r ? t.residualClasses : t.residualStyles;
                  if (null === o)
                    0 === (r ? t.classBindings : t.styleBindings) &&
                      ((n = Us(
                        (n = tp(null, e, t, n, r)),
                        t.attrs,
                        r,
                      )),
                      (i = null));
                  else {
                    const s = t.directiveStylingLast;
                    if (-1 === s || e[s] !== o)
                      if (((n = tp(o, e, t, n, r)), null === i)) {
                        let c = (function gP(e, t, n) {
                          const r = n
                            ? t.classBindings
                            : t.styleBindings;
                          if (0 !== ro(r)) return e[Cr(r)];
                        })(e, t, r);
                        void 0 !== c &&
                          Array.isArray(c) &&
                          ((c = tp(null, e, t, c[1], r)),
                          (c = Us(c, t.attrs, r)),
                          (function mP(e, t, n, r) {
                            e[
                              Cr(
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
                            r = Us(r, e[i].hostAttrs, n);
                          return Us(r, t.attrs, n);
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
                    a = Cr(s),
                    c = ro(s);
                  e[r] = n;
                  let l,
                    u = !1;
                  if (
                    (Array.isArray(n)
                      ? ((l = n[1]),
                        (null === l || So(n, l) > 0) && (u = !0))
                      : (l = n),
                    o)
                  )
                    if (0 !== c) {
                      const f = Cr(e[a + 1]);
                      (e[r + 1] = gu(f, a)),
                        0 !== f && (e[f + 1] = Xh(e[f + 1], r)),
                        (e[a + 1] = (function tP(e, t) {
                          return (131071 & e) | (t << 17);
                        })(e[a + 1], r));
                    } else
                      (e[r + 1] = gu(a, 0)),
                        0 !== a && (e[a + 1] = Xh(e[a + 1], r)),
                        (a = r);
                  else
                    (e[r + 1] = gu(c, 0)),
                      0 === a
                        ? (a = r)
                        : (e[c + 1] = Xh(e[c + 1], r)),
                      (c = r);
                  u && (e[r + 1] = Kh(e[r + 1])),
                    ED(e, l, r, !0),
                    ED(e, l, r, !1),
                    (function oP(e, t, n, r, o) {
                      const i = o
                        ? e.residualClasses
                        : e.residualStyles;
                      null != i &&
                        'string' == typeof t &&
                        So(i, t) >= 0 &&
                        (n[r + 1] = Jh(n[r + 1]));
                    })(t, l, e, r, i),
                    (s = gu(a, c)),
                    i ? (t.classBindings = s) : (t.styleBindings = s);
                })(o, i, t, n, s, r);
            }
          })(i, e, s, r),
          t !== B &&
            Fe(o, s, t) &&
            (function RD(e, t, n, r, o, i, s, a) {
              if (!(3 & t.type)) return;
              const c = e.data,
                u = c[a + 1],
                l = (function nP(e) {
                  return !(1 & ~e);
                })(u)
                  ? xD(c, t, n, o, ro(u), s)
                  : void 0;
              vu(l) ||
                (vu(i) ||
                  ((function eP(e) {
                    return !(2 & ~e);
                  })(u) &&
                    (i = xD(c, null, n, o, a, s))),
                (function kO(e, t, n, r, o) {
                  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                  else {
                    let i =
                      -1 === r.indexOf('-') ? void 0 : gr.DashCase;
                    null == o
                      ? e.removeStyle(n, r, i)
                      : ('string' == typeof o &&
                          o.endsWith('!important') &&
                          ((o = o.slice(0, -10)),
                          (i |= gr.Important)),
                        e.setStyle(n, r, o, i));
                  }
                })(r, s, Ki(it(), n), o, i));
            })(
              i,
              i.data[it()],
              o,
              o[P],
              e,
              (o[s + 1] = (function EP(e, t) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof t
                      ? (e += t)
                      : 'object' == typeof e && (e = We(pr(e)))),
                  e
                );
              })(t, n)),
              r,
              s,
            );
      }
      function tp(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < s && ((i = t[a]), (r = Us(r, i.hostAttrs, o)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Us(e, t, n) {
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
                $t(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function xD(e, t, n, r, o, i) {
        const s = null === t;
        let a;
        for (; o > 0; ) {
          const c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = null === l;
          let f = n[o + 1];
          f === B && (f = d ? J : void 0);
          let h = d ? Ad(f, r) : l === r ? f : void 0;
          if ((u && !vu(h) && (h = Ad(c, r)), vu(h) && ((a = h), s)))
            return a;
          const p = e[o + 1];
          o = s ? Cr(p) : ro(p);
        }
        if (null !== t) {
          let c = i ? t.residualClasses : t.residualStyles;
          null != c && (a = Ad(c, r));
        }
        return a;
      }
      function vu(e) {
        return void 0 !== e;
      }
      function Q(e, t, n, r) {
        const o = v(),
          i = G(),
          s = T + e,
          a = o[P],
          c = i.firstCreatePass
            ? (function zP(e, t, n, r, o, i) {
                const s = t.consts,
                  c = Yr(t, e, 2, r, Jt(s, o));
                return (
                  ih(t, n, c, Jt(s, i)),
                  null !== c.attrs && iu(c, c.attrs, !1),
                  null !== c.mergedAttrs && iu(c, c.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          u = LD(i, o, c, a, t, e);
        o[s] = u;
        const l = fc(c);
        return (
          dn(c, !0),
          uC(a, u, c),
          !(function Xo(e) {
            return !(32 & ~e.flags);
          })(c) &&
            ts() &&
            zc(i, o, u, c),
          0 ===
            (function uR() {
              return L.lFrame.elementDepthCount;
            })() && ut(u, o),
          (function lR() {
            L.lFrame.elementDepthCount++;
          })(),
          l && (nh(i, o, c), th(i, c, o)),
          null !== r && rh(o, c),
          Q
        );
      }
      function Y() {
        let e = de();
        Kd() ? Xd() : ((e = e.parent), dn(e, !1));
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
            (vc(n, e), $d(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function AR(e) {
              return !!(8 & e.flags);
            })(t) &&
            ep(n, t, v(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function NR(e) {
              return !!(16 & e.flags);
            })(t) &&
            ep(n, t, v(), t.stylesWithoutHost, !1),
          Y
        );
      }
      function He(e, t, n, r) {
        return Q(e, t, n, r), Y(), He;
      }
      let LD = (e, t, n, r, o, i) => (
        Mn(!0),
        $c(
          r,
          o,
          (function Cy() {
            return L.lFrame.currentNamespace;
          })(),
        )
      );
      function Le(e, t, n) {
        const r = v(),
          o = G(),
          i = e + T,
          s = o.firstCreatePass
            ? (function WP(e, t, n, r, o) {
                const i = t.consts,
                  s = Jt(i, r),
                  a = Yr(t, e, 8, 'ng-container', s);
                return (
                  null !== s && iu(a, s, !0),
                  ih(t, n, a, Jt(i, o)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(i, o, r, t, n)
            : o.data[i];
        dn(s, !0);
        const a = jD(o, r, s, e);
        return (
          (r[i] = a),
          ts() && zc(o, r, a, s),
          ut(a, r),
          fc(s) && (nh(o, r, s), th(o, s, r)),
          null != n && rh(r, s),
          Le
        );
      }
      function Ve() {
        let e = de();
        const t = G();
        return (
          Kd() ? Xd() : ((e = e.parent), dn(e, !1)),
          t.firstCreatePass &&
            (vc(t, e), $d(e) && t.queries.elementEnd(e)),
          Ve
        );
      }
      let jD = (e, t, n, r) => (Mn(!0), qf(t[P], ''));
      function Fn() {
        return v();
      }
      const mi = 'en-US';
      let zD = mi;
      let uw = (e, t, n) => {};
      function he(e, t, n, r) {
        const o = v(),
          i = G(),
          s = de();
        return (
          (function ap(e, t, n, r, o, i, s) {
            const a = fc(r),
              u = e.firstCreatePass && wC(e),
              l = t[_e],
              d = DC(t);
            let f = !0;
            if (3 & r.type || s) {
              const g = vt(r, t),
                m = s ? s(g) : g,
                C = d.length,
                y = s ? $ => s(ee($[r.index])) : r.index;
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
                          const a = t[Ro],
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
                (i = hw(r, t, l, i)), uw(g, o, i);
                const $ = n.listen(m, o, i);
                d.push(i, $), u && u.push(o, y, C, C + 1);
              }
            } else i = hw(r, t, l, i);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
              const g = p.length;
              if (g)
                for (let m = 0; m < g; m += 2) {
                  const X = t[p[m]][p[m + 1]].subscribe(i),
                    Ae = d.length;
                  d.push(i, X),
                    u && u.push(o, r.index, Ae, -(Ae + 1));
                }
            }
          })(i, o, o[P], s, e, t, r),
          he
        );
      }
      function fw(e, t, n, r) {
        const o = F(null);
        try {
          return Sn(6, t, n), !1 !== n(r);
        } catch (i) {
          return Zc(e, i), !1;
        } finally {
          Sn(7, t, n), F(o);
        }
      }
      function hw(e, t, n, r) {
        return function o(i) {
          if (i === Function) return r;
          Es(e.componentOffset > -1 ? Gt(e.index, t) : t, 5);
          let a = fw(t, n, r, i),
            c = o.__ngNextListenerFn__;
          for (; c; )
            (a = fw(t, n, c, i) && a), (c = c.__ngNextListenerFn__);
          return a;
        };
      }
      function ie(e = 1) {
        return (function ER(e) {
          return (L.lFrame.contextLView = (function iy(e, t) {
            for (; e > 0; ) (t = t[xo]), e--;
            return t;
          })(e, L.lFrame.contextLView))[_e];
        })(e);
      }
      function UL(e, t) {
        let n = null;
        const r = (function wN(e) {
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
            if (null === r ? kv(e, i, !0) : SN(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function qs(e) {
        const t = v()[Me][ot];
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
      function Ws(e, t = 0, n, r, o, i) {
        const s = v(),
          a = G(),
          c = r ? e + 1 : null;
        null !== c && Ps(s, a, c, r, o, i, null, n);
        const u = Yr(a, T + e, 16, null, n || null);
        null === u.projection && (u.projection = t), Xd();
        const d = !s[mt] || Br();
        null === s[Me][ot].projection[u.projection] && null !== c
          ? (function BL(e, t, n) {
              const r = T + n,
                o = t.data[r],
                i = e[r],
                s = Jr(i, o.tView.ssrId);
              Zo(
                i,
                Wo(e, o, void 0, { dehydratedView: s }),
                0,
                Kr(o, s),
              );
            })(s, a, c)
          : d &&
            32 & ~u.flags &&
            (function OO(e, t, n) {
              aC(
                t[P],
                0,
                t,
                n,
                Qf(e, n, t),
                tC(n.parent || t[ot], n, t),
              );
            })(a, s, u);
      }
      function lp() {
        return (function Fh(e, t) {
          return e[Gn].queries[t].queryList;
        })(v(), tf());
      }
      function kt(e, t = '') {
        const n = v(),
          r = G(),
          o = e + T,
          i = r.firstCreatePass ? Yr(r, o, 1, t, null) : r.data[o],
          s = Fw(r, n, i, t, e);
        (n[o] = s), ts() && zc(r, n, s, i), dn(i, !1);
      }
      let Fw = (e, t, n, r, o) => (
        Mn(!0),
        (function Gf(e, t) {
          return e.createText(t);
        })(t[P], r)
      );
      function Dr(e, t, n) {
        const r = v(),
          o = (function si(e, t, n, r) {
            return Fe(e, fn(), n) ? t + U(n) + r : B;
          })(r, e, t, n);
        return (
          o !== B &&
            (function Yn(e, t, n) {
              const r = Ki(t, e);
              !(function Q_(e, t, n) {
                e.setValue(t, n);
              })(e[P], r, n);
            })(r, it(), o),
          Dr
        );
      }
      function fp(e, t, n, r, o) {
        if (((e = k(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) fp(e[i], t, n, r, o);
        else {
          const i = G(),
            s = v(),
            a = de();
          let c = Lr(e) ? e : k(e.provide);
          const u = Hv(e),
            l = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
          if (Lr(e) || !e.multi) {
            const h = new ns(u, o, w),
              p = pp(c, t, o ? l : l + f, d);
            -1 === p
              ? (ff(Ec(a, s), i, c),
                hp(i, e, t.length),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(h),
                s.push(h))
              : ((n[p] = h), (s[p] = h));
          } else {
            const h = pp(c, t, l + f, d),
              p = pp(c, t, l, l + f),
              m = p >= 0 && n[p];
            if ((o && !m) || (!o && !(h >= 0 && n[h]))) {
              ff(Ec(a, s), i, c);
              const C = (function uV(e, t, n, r, o) {
                const i = new ns(e, n, w);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  Zw(i, o, r && !n),
                  i
                );
              })(o ? cV : aV, n.length, o, r, u);
              !o && m && (n[p].providerFactory = C),
                hp(i, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(C),
                s.push(C);
            } else
              hp(i, e, h > -1 ? h : p, Zw(n[o ? p : h], u, !o && r));
            !o && r && m && n[p].componentProviders++;
          }
        }
      }
      function hp(e, t, n, r) {
        const o = Lr(t),
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
      function Zw(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function pp(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function aV(e, t, n, r) {
        return gp(this.multi, []);
      }
      function cV(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = zr(n, n[b], this.providerFactory.index, r);
          (i = a.slice(0, s)), gp(o, i);
          for (let c = s; c < a.length; c++) i.push(a[c]);
        } else (i = []), gp(o, i);
        return i;
      }
      function gp(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Te(e, t = []) {
        return n => {
          n.providersResolver = (r, o) =>
            (function sV(e, t, n) {
              const r = G();
              if (r.firstCreatePass) {
                const o = cn(e);
                fp(n, r.data, r.blueprint, o, !0),
                  fp(t, r.data, r.blueprint, o, !1);
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
              const r = Od(0, n.type),
                o =
                  r.length > 0
                    ? jh(
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
            factory: () => new e(R(zt)),
          }));
        }
        return e;
      })();
      function ue(e) {
        _t('NgStandalone'),
          (e.getStandaloneInjector = t =>
            t.get(lV).getOrCreateStandaloneInjector(e));
      }
      let vb = (() => {
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
      const Db = new D('');
      function Js(e) {
        return !!e && 'function' == typeof e.then;
      }
      function wb(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const S2 = new D('');
      let bp = (() => {
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
              if (Js(i)) n.push(i);
              else if (wb(i)) {
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
      let vn = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = _(rx)),
              (this.afterRenderEffectManager = _(ru)),
              (this.zonelessEnabled = _(Ns)),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new Mt()),
              (this.afterTick = new Mt()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = _(qr).hasPendingTasks.pipe(
                ne(n => !n),
              )),
              (this._injector = _(zt));
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
            const o = n instanceof tE;
            if (!this._injector.get(bp).done)
              throw (
                (!o &&
                  (function dr(e) {
                    const t = W(e) || Ze(e) || rt(e);
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
                : this._injector.get(eo),
              u = s.create($e.NULL, [], r || s.selector, a),
              l = u.location.nativeElement,
              d = u.injector.get(Db, null);
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
              (r = this._injector.get(wh, null, { optional: !0 }));
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
                !this.allViews.some(({ _lView: a }) => Ji(a)) &&
                  (i.execute(),
                  !this.allViews.some(({ _lView: a }) => Ji(a))))
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
        (n || Ji(e)) && Qc(e, t, n && !r ? 0 : 1);
      }
      class N2 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let R2 = (() => {
          class e {
            compileModuleSync(n) {
              return new Vh(n);
            }
            compileModuleAsync(n) {
              return Promise.resolve(this.compileModuleSync(n));
            }
            compileModuleAndAllComponentsSync(n) {
              const r = this.compileModuleSync(n),
                i = Wt(at(n).declarations).reduce((s, a) => {
                  const c = W(a);
                  return c && s.push(new Os(c)), s;
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
              (this.zone = _(oe)),
                (this.changeDetectionScheduler = _(Yo)),
                (this.applicationRef = _(vn));
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
      function Ip({ ngZoneFactory: e, ignoreChangesOutsideZone: t }) {
        return (
          (e ??= () =>
            new oe(
              (function Sp(e) {
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
            { provide: oe, useFactory: e },
            {
              provide: Ht,
              multi: !0,
              useFactory: () => {
                const n = _(F2, { optional: !0 });
                return () => n.initialize();
              },
            },
            {
              provide: Ht,
              multi: !0,
              useFactory: () => {
                const n = _(P2);
                return () => {
                  n.initialize();
                };
              },
            },
            !0 === t ? { provide: eE, useValue: !0 } : [],
          ]
        );
      }
      let P2 = (() => {
          class e {
            constructor() {
              (this.subscription = new st()),
                (this.initialized = !1),
                (this.zone = _(oe)),
                (this.pendingTasks = _(qr));
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
                      oe.assertNotInAngularZone(),
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
                    oe.assertInAngularZone(),
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
        ea = (() => {
          class e {
            constructor() {
              (this.appRef = _(vn)),
                (this.taskService = _(qr)),
                (this.ngZone = _(oe)),
                (this.zonelessEnabled = _(Ns)),
                (this.disableScheduling =
                  _(eE, { optional: !0 }) ?? !1),
                (this.zoneIsDefined =
                  typeof Zone < 'u' && !!Zone.root.run),
                (this.schedulerTickApplyArgs = [
                  { data: { __scheduler_tick__: !0 } },
                ]),
                (this.subscriptions = new st()),
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
                  (this.ngZone instanceof yf || !this.zoneIsDefined));
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
              const r = this.useMicrotaskScheduler ? Hy : $y;
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
                  oe.isInAngularZone())
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
                Hy(() => {
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
      const er = new D('', {
          providedIn: 'root',
          factory: () =>
            _(er, Z.Optional | Z.SkipSelf) ||
            (function L2() {
              return (
                (typeof $localize < 'u' && $localize.locale) || mi
              );
            })(),
        }),
        Tp = new D('');
      let wr = null;
      let ta = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = z2);
        }
        return e;
      })();
      function z2(e) {
        return (function G2(e, t, n) {
          if (jr(e) && !n) {
            const r = Gt(e.index, t);
            return new Ds(r, r);
          }
          return 175 & e.type ? new Ds(t[Me], t) : null;
        })(de(), v(), !(16 & ~e));
      }
      class jb {
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
                !r || (n && n.currentIndex < Bb(r, o, i)) ? n : r,
              a = Bb(s, o, i),
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
              (this._linkedRecords = new Ub()),
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
              (this._unlinkedRecords = new Ub()),
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
      class Ub {
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
      function Bb(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class $b {
        constructor() {}
        supports(t) {
          return t instanceof Map || Uh(t);
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
            if (!(t instanceof Map || Uh(t))) throw new E(900, !1);
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
      function Hb() {
        return new Fp([new jb()]);
      }
      let Fp = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: Hb,
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
              useFactory: r => e.create(n, r || Hb()),
              deps: [[e, new Md(), new Sd()]],
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
      function zb() {
        return new xu([new $b()]);
      }
      let xu = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: zb,
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
              useFactory: r => e.create(n, r || zb()),
              deps: [[e, new Md(), new Sd()]],
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
              const t = (function Ob(e = [], t) {
                return $e.create({
                  name: t,
                  providers: [
                    { provide: Pd, useValue: 'platform' },
                    {
                      provide: Tp,
                      useValue: new Set([() => (wr = null)]),
                    },
                    ...e,
                  ],
                });
              })(e);
              return (
                (wr = t),
                (function bb() {
                  !(function NT(e) {
                    Lm = e;
                  })(() => {
                    throw new E(600, !1);
                  });
                })(),
                (function Fb(e) {
                  e.get(p_, null)?.forEach(n => n());
                })(t),
                t
              );
            })(r),
            i = [
              Ip({}),
              { provide: Yo, useExisting: ea },
              ...(n || []),
            ],
            a = new $E({
              providers: i,
              parent: o,
              debugName: '',
              runEnvironmentInitializers: !1,
            }).injector,
            c = a.get(oe);
          return c.run(() => {
            a.resolveInjectorInitializers();
            const u = a.get(hn, null);
            let l;
            c.runOutsideAngular(() => {
              l = c.onError.subscribe({
                next: h => {
                  u.handleError(h);
                },
              });
            });
            const d = () => a.destroy(),
              f = o.get(Tp);
            return (
              f.add(d),
              a.onDestroy(() => {
                l.unsubscribe(), f.delete(d);
              }),
              (function Ib(e, t, n) {
                try {
                  const r = n();
                  return Js(r)
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
                const h = a.get(bp);
                return (
                  h.runInitializers(),
                  h.donePromise.then(() => {
                    !(function GD(e) {
                      'string' == typeof e &&
                        (zD = e.toLowerCase().replace(/_/g, '-'));
                    })(a.get(er, mi) || mi);
                    const g = a.get(vn);
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
      const aI = new D('');
      function _i(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function so(e, t) {
        _t('NgSignals');
        const n = (function MT(e) {
          const t = Object.create(TT);
          t.computation = e;
          const n = () => {
            if ((Nm(t), et(t), t.value === La)) throw t.error;
            return t.value;
          };
          return (n[Re] = t), n;
        })(e);
        return t?.equal && (n[Re].equal = t.equal), n;
      }
      function kn(e) {
        const t = F(null);
        try {
          return e();
        } finally {
          F(t);
        }
      }
      let vI = null;
      function br() {
        return vI;
      }
      class Gj {}
      const tn = new D('');
      let Vp = (() => {
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
          class e extends Vp {
            constructor() {
              super(),
                (this._doc = _(tn)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return br().getBaseHref(this._doc);
            }
            onPopState(n) {
              const r = br().getGlobalEventTarget(
                this._doc,
                'window',
              );
              return (
                r.addEventListener('popstate', n, !1),
                () => r.removeEventListener('popstate', n)
              );
            }
            onHashChange(n) {
              const r = br().getGlobalEventTarget(
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
      function jp(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        let n = 0;
        return (
          e.endsWith('/') && n++,
          t.startsWith('/') && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + '/' + t
        );
      }
      function yI(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return (
          e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n)
        );
      }
      function tr(e) {
        return e && '?' !== e[0] ? '?' + e : e;
      }
      let Ci = (() => {
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
      const _I = new D('');
      let Wj = (() => {
          class e extends Ci {
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
              return jp(this._baseHref, n);
            }
            path(n = !1) {
              const r =
                  this._platformLocation.pathname +
                  tr(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && n ? `${r}${o}` : r;
            }
            pushState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + tr(i));
              this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + tr(i));
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
              return new (r || e)(R(Vp), R(_I, 8));
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
          class e extends Ci {
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
              const r = jp(this._baseHref, n);
              return r.length > 0 ? '#' + r : r;
            }
            pushState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + tr(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + tr(i));
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
              return new (r || e)(R(Vp), R(_I, 8));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        ia = (() => {
          class e {
            constructor(n) {
              (this._subject = new te()),
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
              })(yI(CI(r)))),
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
              return this.path() == this.normalize(n + tr(r));
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
                })(this._basePath, CI(n)),
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
                  this.prepareExternalUrl(n + tr(r)),
                  o,
                );
            }
            replaceState(n, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', n, r),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(n + tr(r)),
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
            static #e = (this.normalizeQueryParams = tr);
            static #t = (this.joinWithSlash = jp);
            static #n = (this.stripTrailingSlash = yI);
            static #r = (this.ɵfac = function (r) {
              return new (r || e)(R(Ci));
            });
            static #o = (this.ɵprov = S({
              token: e,
              factory: () =>
                (function Qj() {
                  return new ia(R(Ci));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function CI(e) {
        return e.replace(/\/index.html$/, '');
      }
      const Qp = /\s+/,
        AI = [];
      let NI = (() => {
        class e {
          constructor(n, r) {
            (this._ngEl = n),
              (this._renderer = r),
              (this.initialClasses = AI),
              (this.stateMap = new Map());
          }
          set klass(n) {
            this.initialClasses = null != n ? n.trim().split(Qp) : AI;
          }
          set ngClass(n) {
            this.rawClass =
              'string' == typeof n ? n.trim().split(Qp) : n;
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
              n.split(Qp).forEach(o => {
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
            return new (r || e)(w(qt), w(Xn));
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
      let xI = (() => {
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
                r.move(a, s), OI(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o),
                (a.count = i),
                (a.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange(o => {
              OI(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(pn), w(Kn), w(Fp));
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
      function OI(e, t) {
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
            FI('ngIfThen', n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            FI('ngIfElse', n),
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
            return new (r || e)(w(pn), w(Kn));
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
      function FI(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${We(t)}'.`,
          );
      }
      class Yp {
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
        kI = (() => {
          class e {
            constructor(n, r, o) {
              (this.ngSwitch = o),
                o._addCase(),
                (this._view = new Yp(n, r));
            }
            ngDoCheck() {
              this._view.enforceState(
                this.ngSwitch._matchCase(this.ngSwitchCase),
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(pn), w(Kn), w(Ku, 9));
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
        LI = (() => {
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
                s = -1 === o.indexOf('-') ? void 0 : gr.DashCase;
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
              return new (r || e)(w(qt), w(xu), w(Xn));
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
        Jp = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Gi({ type: e }));
            static #n = (this.ɵinj = wo({}));
          }
          return e;
        })();
      const jI = 'browser';
      function UI(e) {
        return 'server' === e;
      }
      let dB = (() => {
        class e {
          static #e = (this.ɵprov = S({
            token: e,
            providedIn: 'root',
            factory: () =>
              (function lB(e) {
                return e === jI;
              })(_(Wr))
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
      class rg extends HB {
        static makeCurrent() {
          !(function zj(e) {
            vI ??= e;
          })(new rg());
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
              (ua = ua || document.querySelector('base')),
              ua ? ua.getAttribute('href') : null
            );
          })();
          return null == n
            ? null
            : (function GB(e) {
                return new URL(e, document.baseURI).pathname;
              })(n);
        }
        resetBaseElement() {
          ua = null;
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
      let ua = null,
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
      let YI = (() => {
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
            return new (r || e)(R(tl), R(oe));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class og {
        constructor(t) {
          this._doc = t;
        }
      }
      const ig = 'ng-app-id';
      let KI = (() => {
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
              (this.platformIsServer = UI(i)),
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
              `style[${ig}="${this.appId}"]`,
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
              return o.delete(r), i.removeAttribute(ig), i;
            {
              const s = this.doc.createElement('style');
              return (
                this.nonce && s.setAttribute('nonce', this.nonce),
                (s.textContent = r),
                this.platformIsServer &&
                  s.setAttribute(ig, this.appId),
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
            return new (r || e)(R(tn), R(as), R(g_, 8), R(Wr));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const sg = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        ag = /%COMP%/g,
        KB = new D('', { providedIn: 'root', factory: () => !0 });
      function JI(e, t) {
        return t.map(n => n.replace(ag, e));
      }
      let eS = (() => {
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
              (this.platformIsServer = UI(a)),
              (this.defaultRenderer = new cg(
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
              o instanceof nS
                ? o.applyToHost(n)
                : o instanceof ug && o.applyStyles(),
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
                  i = new nS(c, u, r, this.appId, l, s, a, d);
                  break;
                case on.ShadowDom:
                  return new t$(c, u, n, r, s, a, this.nonce, d);
                default:
                  i = new ug(c, u, r, l, s, a, d);
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
              R(YI),
              R(KI),
              R(as),
              R(KB),
              R(tn),
              R(Wr),
              R(oe),
              R(g_),
            );
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class cg {
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
            ? this.doc.createElementNS(sg[n] || n, t)
            : this.doc.createElement(t);
        }
        createComment(t) {
          return this.doc.createComment(t);
        }
        createText(t) {
          return this.doc.createTextNode(t);
        }
        appendChild(t, n) {
          (tS(t) ? t.content : t).appendChild(n);
        }
        insertBefore(t, n, r) {
          t && (tS(t) ? t.content : t).insertBefore(n, r);
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
            const i = sg[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = sg[r];
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
          o & (gr.DashCase | gr.Important)
            ? t.style.setProperty(
                n,
                r,
                o & gr.Important ? 'important' : '',
              )
            : (t.style[n] = r);
        }
        removeStyle(t, n, r) {
          r & gr.DashCase
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
            !(t = br().getGlobalEventTarget(this.doc, t))
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
      function tS(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class t$ extends cg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, c),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const u = JI(o.id, o.styles);
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
      class ug extends cg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, a),
            (this.sharedStylesHost = n),
            (this.removeStylesOnCompDestroy = o),
            (this.styles = c ? JI(c, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class nS extends ug {
        constructor(t, n, r, o, i, s, a, c) {
          const u = o + '-' + r.id;
          super(t, n, r, i, s, a, c, u),
            (this.contentAttr = (function XB(e) {
              return '_ngcontent-%COMP%'.replace(ag, e);
            })(u)),
            (this.hostAttr = (function JB(e) {
              return '_nghost-%COMP%'.replace(ag, e);
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
          class e extends og {
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
              return new (r || e)(R(tn));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        r$ = (() => {
          class e extends og {
            constructor(n) {
              super(n), (this.delegate = _(aI, { optional: !0 }));
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
              return new (r || e)(R(tn));
            });
            static #t = (this.ɵprov = S({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const rS = ['alt', 'control', 'meta', 'shift'],
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
      function oS(e) {
        return {
          appProviders: [...h$, ...(e?.providers ?? [])],
          platformProviders: d$,
        };
      }
      const d$ = [
          { provide: Wr, useValue: jI },
          {
            provide: p_,
            useValue: function c$() {
              rg.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: tn,
            useFactory: function l$() {
              return (
                (function Sx(e) {
                  Df = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        h$ = [
          { provide: Pd, useValue: 'root' },
          {
            provide: hn,
            useFactory: function u$() {
              return new hn();
            },
            deps: [],
          },
          {
            provide: tl,
            useClass: n$,
            multi: !0,
            deps: [tn, oe, Wr],
          },
          {
            provide: tl,
            useClass: (() => {
              class e extends og {
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
                      br().onAndCancel(n, i.domEventName, s),
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
                    rS.forEach(u => {
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
                      rS.forEach(s => {
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
                  return new (r || e)(R(tn));
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
          eS,
          KI,
          YI,
          { provide: wh, useExisting: eS },
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
            return new (r || e)(R(tn));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function Ir(e) {
        return this instanceof Ir ? ((this.v = e), this) : new Ir(e);
      }
      function lS(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var n,
          t = e[Symbol.asyncIterator];
        return t
          ? t.call(e)
          : ((e = (function hg(e) {
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
      const dS = e =>
        e && 'number' == typeof e.length && 'function' != typeof e;
      function fS(e) {
        return we(e?.then);
      }
      function hS(e) {
        return we(e[od]);
      }
      function pS(e) {
        return Symbol.asyncIterator && we(e?.[Symbol.asyncIterator]);
      }
      function gS(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e
              ? 'an invalid object'
              : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const mS = (function U$() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function vS(e) {
        return we(e?.[mS]);
      }
      function yS(e) {
        return (function uS(e, t, n) {
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
                h.value instanceof Ir
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
              const { value: r, done: o } = yield Ir(n.read());
              if (o) return yield Ir(void 0);
              yield yield Ir(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function _S(e) {
        return we(e?.getReader);
      }
      function Cn(e) {
        if (e instanceof xe) return e;
        if (null != e) {
          if (hS(e))
            return (function B$(e) {
              return new xe(t => {
                const n = e[od]();
                if (we(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (dS(e))
            return (function $$(e) {
              return new xe(t => {
                for (let n = 0; n < e.length && !t.closed; n++)
                  t.next(e[n]);
                t.complete();
              });
            })(e);
          if (fS(e))
            return (function H$(e) {
              return new xe(t => {
                e.then(
                  n => {
                    t.closed || (t.next(n), t.complete());
                  },
                  n => t.error(n),
                ).then(null, zm);
              });
            })(e);
          if (pS(e)) return CS(e);
          if (vS(e))
            return (function z$(e) {
              return new xe(t => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (_S(e))
            return (function G$(e) {
              return CS(yS(e));
            })(e);
        }
        throw gS(e);
      }
      function CS(e) {
        return new xe(t => {
          (function q$(e, t) {
            var n, r, o, i;
            return (function aS(e, t, n, r) {
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
                for (n = lS(e); !(r = yield n.next()).done; )
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
      function or(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function pg(e, t = 0) {
        return qe((n, r) => {
          n.subscribe(
            Ne(
              r,
              o => or(r, e, () => r.next(o), t),
              () => or(r, e, () => r.complete(), t),
              o => or(r, e, () => r.error(o), t),
            ),
          );
        });
      }
      function ES(e, t = 0) {
        return qe((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function DS(e, t) {
        if (!e) throw new Error('Iterable cannot be null');
        return new xe(n => {
          or(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            or(
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
      function lt(e, t) {
        return t
          ? (function X$(e, t) {
              if (null != e) {
                if (hS(e))
                  return (function W$(e, t) {
                    return Cn(e).pipe(ES(t), pg(t));
                  })(e, t);
                if (dS(e))
                  return (function Q$(e, t) {
                    return new xe(n => {
                      let r = 0;
                      return t.schedule(function () {
                        r === e.length
                          ? n.complete()
                          : (n.next(e[r++]),
                            n.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (fS(e))
                  return (function Z$(e, t) {
                    return Cn(e).pipe(ES(t), pg(t));
                  })(e, t);
                if (pS(e)) return DS(e, t);
                if (vS(e))
                  return (function Y$(e, t) {
                    return new xe(n => {
                      let r;
                      return (
                        or(n, t, () => {
                          (r = e[mS]()),
                            or(
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
                if (_S(e))
                  return (function K$(e, t) {
                    return DS(yS(e), t);
                  })(e, t);
              }
              throw gS(e);
            })(e, t)
          : Cn(e);
      }
      function gg(e) {
        return e[e.length - 1];
      }
      function mg(e) {
        return we(gg(e)) ? e.pop() : void 0;
      }
      function rl(e) {
        return (function J$(e) {
          return e && we(e.schedule);
        })(gg(e))
          ? e.pop()
          : void 0;
      }
      function H(...e) {
        return lt(e, rl(e));
      }
      const ol = Kl(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: eH } = Array,
        { getPrototypeOf: tH, prototype: nH, keys: rH } = Object;
      function wS(e) {
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
      function bS(e) {
        return ne(t =>
          (function sH(e, t) {
            return iH(t) ? e(...t) : e(t);
          })(e, t),
        );
      }
      function IS(e, t) {
        return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
      }
      function SS(...e) {
        const t = rl(e),
          n = mg(e),
          { args: r, keys: o } = wS(e);
        if (0 === r.length) return lt([], t);
        const i = new xe(
          (function aH(e, t, n = Bn) {
            return r => {
              MS(
                t,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let c = 0; c < o; c++)
                    MS(
                      t,
                      () => {
                        const u = lt(e[c], t);
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
          })(r, t, o ? s => IS(o, s) : Bn),
        );
        return n ? i.pipe(bS(n)) : i;
      }
      function MS(e, t, n) {
        e ? or(n, e, t) : t();
      }
      function bt(e, t, n = 1 / 0) {
        return we(t)
          ? bt((r, o) => ne((i, s) => t(r, i, o, s))(Cn(e(r, o))), n)
          : ('number' == typeof t && (n = t),
            qe((r, o) =>
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
                    Cn(n(g, l++)).subscribe(
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
                                s ? or(t, s, () => p(C)) : p(C);
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
      function yg(...e) {
        return (function uH() {
          return (function vg(e = 1 / 0) {
            return bt(Bn, e);
          })(1);
        })()(lt(e, rl(e)));
      }
      function TS(e) {
        return new xe(t => {
          Cn(e()).subscribe(t);
        });
      }
      function il(e, t) {
        const n = we(e) ? e : () => e,
          r = o => o.error(n());
        return new xe(t ? o => t.schedule(r, 0, o) : r);
      }
      const Pn = new xe(e => e.complete());
      function _g() {
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
      class AS extends xe {
        constructor(t, n) {
          super(),
            (this.source = t),
            (this.subjectFactory = n),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            Zm(t) && (this.lift = t.lift);
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
            t = this._connection = new st();
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
              t.closed && ((this._connection = null), (t = st.EMPTY));
          }
          return t;
        }
        refCount() {
          return _g()(this);
        }
      }
      function ir(e, t) {
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
                Cn(e(c, l)).subscribe(
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
      function co(e, t) {
        return qe((n, r) => {
          let o = 0;
          n.subscribe(Ne(r, i => e.call(t, i, o++) && r.next(i)));
        });
      }
      function sl(e) {
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
      function NS(e = fH) {
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
      function fH() {
        return new ol();
      }
      function uo(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? co((o, i) => e(o, i, r)) : Bn,
            wi(1),
            n ? sl(t) : NS(() => new ol()),
          );
      }
      function al(e, t) {
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
      function bi(e) {
        return qe((t, n) => {
          let i,
            r = null,
            o = !1;
          (r = t.subscribe(
            Ne(n, void 0, void 0, s => {
              (i = Cn(e(s, bi(e)(t)))),
                r
                  ? (r.unsubscribe(), (r = null), i.subscribe(n))
                  : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(n));
        });
      }
      function RS(e, t) {
        return qe(
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
      function Cg(e) {
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
      function Eg(e) {
        return qe((t, n) => {
          try {
            t.subscribe(n);
          } finally {
            n.add(e);
          }
        });
      }
      const z = 'primary',
        la = Symbol('RouteTitle');
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
      function Ii(e) {
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
      function Ln(e, t) {
        const n = e ? Dg(e) : void 0,
          r = t ? Dg(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let o;
        for (let i = 0; i < n.length; i++)
          if (((o = n[i]), !xS(e[o], t[o]))) return !1;
        return !0;
      }
      function Dg(e) {
        return [
          ...Object.keys(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      }
      function xS(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((o, i) => r[i] === o);
        }
        return e === t;
      }
      function OS(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Sr(e) {
        return (function y$(e) {
          return (
            !!e &&
            (e instanceof xe || (we(e.lift) && we(e.subscribe)))
          );
        })(e)
          ? e
          : Js(e)
          ? lt(Promise.resolve(e))
          : H(e);
      }
      const CH = {
          exact: function PS(e, t, n) {
            if (
              !fo(e.segments, t.segments) ||
              !cl(e.segments, t.segments, n) ||
              e.numberOfChildren !== t.numberOfChildren
            )
              return !1;
            for (const r in t.children)
              if (
                !e.children[r] ||
                !PS(e.children[r], t.children[r], n)
              )
                return !1;
            return !0;
          },
          subset: LS,
        },
        FS = {
          exact: function EH(e, t) {
            return Ln(e, t);
          },
          subset: function DH(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every(n => xS(e[n], t[n]))
            );
          },
          ignored: () => !0,
        };
      function kS(e, t, n) {
        return (
          CH[n.paths](e.root, t.root, n.matrixParams) &&
          FS[n.queryParams](e.queryParams, t.queryParams) &&
          !('exact' === n.fragment && e.fragment !== t.fragment)
        );
      }
      function LS(e, t, n) {
        return VS(e, t, t.segments, n);
      }
      function VS(e, t, n, r) {
        if (e.segments.length > n.length) {
          const o = e.segments.slice(0, n.length);
          return !(!fo(o, n) || t.hasChildren() || !cl(o, n, r));
        }
        if (e.segments.length === n.length) {
          if (!fo(e.segments, n) || !cl(e.segments, n, r)) return !1;
          for (const o in t.children)
            if (
              !e.children[o] ||
              !LS(e.children[o], t.children[o], r)
            )
              return !1;
          return !0;
        }
        {
          const o = n.slice(0, e.segments.length),
            i = n.slice(e.segments.length);
          return (
            !!(
              fo(e.segments, o) &&
              cl(e.segments, o, r) &&
              e.children[z]
            ) && VS(e.children[z], t, i, r)
          );
        }
      }
      function cl(e, t, n) {
        return t.every((r, o) =>
          FS[n](e[o].parameters, r.parameters),
        );
      }
      class lo {
        constructor(t = new ge([], {}), n = {}, r = null) {
          (this.root = t),
            (this.queryParams = n),
            (this.fragment = r);
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= Ii(this.queryParams)),
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
      class da {
        constructor(t, n) {
          (this.path = t), (this.parameters = n);
        }
        get parameterMap() {
          return (
            (this._parameterMap ??= Ii(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return BS(this);
        }
      }
      function fo(e, t) {
        return (
          e.length === t.length &&
          e.every((n, r) => n.path === t[r].path)
        );
      }
      let Si = (() => {
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
          return new lo(
            n.parseRootSegment(),
            n.parseQueryParams(),
            n.parseFragment(),
          );
        }
        serialize(t) {
          const n = `/${fa(t.root, !0)}`,
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
        return e.segments.map(t => BS(t)).join('/');
      }
      function fa(e, t) {
        if (!e.hasChildren()) return ll(e);
        if (t) {
          const n = e.children[z] ? fa(e.children[z], !1) : '',
            r = [];
          return (
            Object.entries(e.children).forEach(([o, i]) => {
              o !== z && r.push(`${o}:${fa(i, !1)}`);
            }),
            r.length > 0 ? `${n}(${r.join('//')})` : n
          );
        }
        {
          const n = (function bH(e, t) {
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
            o === z ? [fa(e.children[z], !1)] : [`${o}:${fa(r, !1)}`],
          );
          return 1 === Object.keys(e.children).length &&
            null != e.children[z]
            ? `${ll(e)}/${n[0]}`
            : `${ll(e)}/(${n.join('//')})`;
        }
      }
      function jS(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function dl(e) {
        return jS(e).replace(/%3B/gi, ';');
      }
      function wg(e) {
        return jS(e)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function fl(e) {
        return decodeURIComponent(e);
      }
      function US(e) {
        return fl(e.replace(/\+/g, '%20'));
      }
      function BS(e) {
        return `${wg(e.path)}${(function MH(e) {
          return Object.entries(e)
            .map(([t, n]) => `;${wg(t)}=${wg(n)}`)
            .join('');
        })(e.parameters)}`;
      }
      const AH = /^[^\/()?;#]+/;
      function bg(e) {
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
          const t = bg(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new E(4009, !1);
          return (
            this.capture(t), new da(fl(t), this.parseMatrixParams())
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
            const o = bg(this.remaining);
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
          const o = US(n),
            i = US(r);
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
            const r = bg(this.remaining),
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
      function $S(e) {
        return e.segments.length > 0 ? new ge([], { [z]: e }) : e;
      }
      function HS(e) {
        const t = {};
        for (const [r, o] of Object.entries(e.children)) {
          const i = HS(o);
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
      function ho(e) {
        return e instanceof lo;
      }
      function zS(e) {
        let t;
        const o = $S(
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
      function GS(e, t, n, r) {
        let o = e;
        for (; o.parent; ) o = o.parent;
        if (0 === t.length) return Ig(o, o, o, n, r);
        const i = (function jH(e) {
          if (
            'string' == typeof e[0] &&
            1 === e.length &&
            '/' === e[0]
          )
            return new WS(!0, 0, e);
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
          return new WS(n, t, r);
        })(t);
        if (i.toRoot()) return Ig(o, o, new ge([], {}), n, r);
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
            ? pa(s.segmentGroup, s.index, i.commands)
            : ZS(s.segmentGroup, s.index, i.commands);
        return Ig(o, s.segmentGroup, a, n, r);
      }
      function hl(e) {
        return (
          'object' == typeof e &&
          null != e &&
          !e.outlets &&
          !e.segmentPath
        );
      }
      function ha(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function Ig(e, t, n, r, o) {
        let s,
          i = {};
        r &&
          Object.entries(r).forEach(([c, u]) => {
            i[c] = Array.isArray(u) ? u.map(l => `${l}`) : `${u}`;
          }),
          (s = e === t ? n : qS(e, t, n));
        const a = $S(HS(s));
        return new lo(a, i, o);
      }
      function qS(e, t, n) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([o, i]) => {
            r[o] = i === t ? n : qS(i, t, n);
          }),
          new ge(e.segments, r)
        );
      }
      class WS {
        constructor(t, n, r) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = r),
            t && r.length > 0 && hl(r[0]))
          )
            throw new E(4003, !1);
          const o = r.find(ha);
          if (o && o !== OS(r)) throw new E(4004, !1);
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
      function ZS(e, t, n) {
        if (
          ((e ??= new ge([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return pa(e, t, n);
        const r = (function HH(e, t, n) {
            let r = 0,
              o = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= n.length) return i;
              const s = e.segments[o],
                a = n[r];
              if (ha(a)) break;
              const c = `${a}`,
                u = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === c) break;
              if (
                c &&
                u &&
                'object' == typeof u &&
                void 0 === u.outlets
              ) {
                if (!YS(c, u, s)) return i;
                r += 2;
              } else {
                if (!YS(c, {}, s)) return i;
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
            pa(i, 0, o)
          );
        }
        return r.match && 0 === o.length
          ? new ge(e.segments, {})
          : r.match && !e.hasChildren()
          ? Sg(e, t, n)
          : r.match
          ? pa(e, 0, o)
          : Sg(e, t, n);
      }
      function pa(e, t, n) {
        if (0 === n.length) return new ge(e.segments, {});
        {
          const r = (function $H(e) {
              return ha(e[0]) ? e[0].outlets : { [z]: e };
            })(n),
            o = {};
          if (
            Object.keys(r).some(i => i !== z) &&
            e.children[z] &&
            1 === e.numberOfChildren &&
            0 === e.children[z].segments.length
          ) {
            const i = pa(e.children[z], t, n);
            return new ge(e.segments, i.children);
          }
          return (
            Object.entries(r).forEach(([i, s]) => {
              'string' == typeof s && (s = [s]),
                null !== s && (o[i] = ZS(e.children[i], t, s));
            }),
            Object.entries(e.children).forEach(([i, s]) => {
              void 0 === r[i] && (o[i] = s);
            }),
            new ge(e.segments, o)
          );
        }
      }
      function Sg(e, t, n) {
        const r = e.segments.slice(0, t);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (ha(i)) {
            const c = zH(i.outlets);
            return new ge(r, c);
          }
          if (0 === o && hl(n[0])) {
            r.push(new da(e.segments[t].path, QS(n[0]))), o++;
            continue;
          }
          const s = ha(i) ? i.outlets[z] : `${i}`,
            a = o < n.length - 1 ? n[o + 1] : null;
          s && a && hl(a)
            ? (r.push(new da(s, QS(a))), (o += 2))
            : (r.push(new da(s, {})), o++);
        }
        return new ge(r, {});
      }
      function zH(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => {
            'string' == typeof r && (r = [r]),
              null !== r && (t[n] = Sg(new ge([], {}), 0, r));
          }),
          t
        );
      }
      function QS(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => (t[n] = `${r}`)), t
        );
      }
      function YS(e, t, n) {
        return e == n.path && Ln(t, n.parameters);
      }
      const ga = 'imperative';
      var K = (function (e) {
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
      })(K || {});
      class Vn {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class gl extends Vn {
        constructor(t, n, r = 'imperative', o = null) {
          super(t, n),
            (this.type = K.NavigationStart),
            (this.navigationTrigger = r),
            (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Mr extends Vn {
        constructor(t, n, r) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.type = K.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var Yt = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] =
              'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })(Yt || {}),
        ml = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] =
              'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
              'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(ml || {});
      class po extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = K.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Mi extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = K.NavigationSkipped);
        }
      }
      class Mg extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.error = r),
            (this.target = o),
            (this.type = K.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class KS extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = K.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class GH extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = K.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class qH extends Vn {
        constructor(t, n, r, o, i) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.shouldActivate = i),
            (this.type = K.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class WH extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = K.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ZH extends Vn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = K.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class QH {
        constructor(t) {
          (this.route = t), (this.type = K.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class YH {
        constructor(t) {
          (this.route = t), (this.type = K.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class KH {
        constructor(t) {
          (this.snapshot = t), (this.type = K.ChildActivationStart);
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
          (this.snapshot = t), (this.type = K.ChildActivationEnd);
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
          (this.snapshot = t), (this.type = K.ActivationStart);
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
          (this.snapshot = t), (this.type = K.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig &&
              this.snapshot.routeConfig.path) ||
            ''
          }')`;
        }
      }
      class XS {
        constructor(t, n, r) {
          (this.routerEvent = t),
            (this.position = n),
            (this.anchor = r),
            (this.type = K.Scroll);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position
              ? `${this.position[0]}, ${this.position[1]}`
              : null
          }')`;
        }
      }
      class Tg {}
      class vl {
        constructor(t, n) {
          (this.url = t), (this.navigationBehaviorOptions = n);
        }
      }
      function En(e) {
        return e.outlet || z;
      }
      function ma(e) {
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
          return ma(this.route?.snapshot) ?? this.rootInjector;
        }
        set injector(t) {}
        constructor(t) {
          (this.rootInjector = t),
            (this.outlet = null),
            (this.route = null),
            (this.children = new va(this.rootInjector)),
            (this.attachRef = null);
        }
      }
      let va = (() => {
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
            return new (r || e)(R(zt));
          });
          static #t = (this.ɵprov = S({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class JS {
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
          const n = Ag(t, this._root);
          return n ? n.children.map(r => r.value) : [];
        }
        firstChild(t) {
          const n = Ag(t, this._root);
          return n && n.children.length > 0
            ? n.children[0].value
            : null;
        }
        siblings(t) {
          const n = Ng(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children
                .map(o => o.value)
                .filter(o => o !== t);
        }
        pathFromRoot(t) {
          return Ng(t, this._root).map(n => n.value);
        }
      }
      function Ag(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const r = Ag(e, n);
          if (r) return r;
        }
        return null;
      }
      function Ng(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = Ng(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class Dn {
        constructor(t, n) {
          (this.value = t), (this.children = n);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ti(e) {
        const t = {};
        return (
          e && e.children.forEach(n => (t[n.value.outlet] = n)), t
        );
      }
      class eM extends JS {
        constructor(t, n) {
          super(t), (this.snapshot = n), Rg(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function tM(e) {
        const t = (function c3(e) {
            const i = new _l([], {}, {}, '', {}, z, e, null, {});
            return new nM('', new Dn(i, []));
          })(e),
          n = new gt([new da('', {})]),
          r = new gt({}),
          o = new gt({}),
          i = new gt({}),
          s = new gt(''),
          a = new Ai(n, r, i, s, o, z, e, t.root);
        return (a.snapshot = t.root), new eM(new Dn(a, []), t);
      }
      class Ai {
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
              this.dataSubject?.pipe(ne(u => u[la])) ?? H(void 0)),
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
            (this._paramMap ??= this.params.pipe(ne(t => Ii(t)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(
              ne(t => Ii(t)),
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
          o && oM(o) && (r.resolve[la] = o.title),
          r
        );
      }
      class _l {
        get title() {
          return this.data?.[la];
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
          return (this._paramMap ??= Ii(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= Ii(this.queryParams)),
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
      class nM extends JS {
        constructor(t, n) {
          super(n), (this.url = t), Rg(this, n);
        }
        toString() {
          return rM(this._root);
        }
      }
      function Rg(e, t) {
        (t.value._routerState = e), t.children.forEach(n => Rg(e, n));
      }
      function rM(e) {
        const t =
          e.children.length > 0
            ? ` { ${e.children.map(rM).join(', ')} } `
            : '';
        return `${e.value}${t}`;
      }
      function xg(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Ln(t.queryParams, n.queryParams) ||
              e.queryParamsSubject.next(n.queryParams),
            t.fragment !== n.fragment &&
              e.fragmentSubject.next(n.fragment),
            Ln(t.params, n.params) || e.paramsSubject.next(n.params),
            (function _H(e, t) {
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
      function Og(e, t) {
        const n =
          Ln(e.params, t.params) &&
          (function wH(e, t) {
            return (
              fo(e, t) &&
              e.every((n, r) => Ln(n.parameters, t[r].parameters))
            );
          })(e.url, t.url);
        return (
          n &&
          !(!e.parent != !t.parent) &&
          (!e.parent || Og(e.parent, t.parent))
        );
      }
      function oM(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let ya = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = z),
              (this.activateEvents = new te()),
              (this.deactivateEvents = new te()),
              (this.attachEvents = new te()),
              (this.detachEvents = new te()),
              (this.parentContexts = _(va)),
              (this.location = _(pn)),
              (this.changeDetector = _(ta)),
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
              c = new Fg(n, a, o.injector);
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
            features: [Xt],
          }));
        }
        return e;
      })();
      class Fg {
        __ngOutletInjector(t) {
          return new Fg(this.route, this.childContexts, t);
        }
        constructor(t, n, r) {
          (this.route = t),
            (this.childContexts = n),
            (this.parent = r);
        }
        get(t, n) {
          return t === Ai
            ? this.route
            : t === va
            ? this.childContexts
            : this.parent.get(t, n);
        }
      }
      const Cl = new D('');
      function _a(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const o = (function l3(e, t, n) {
            return t.children.map(r => {
              for (const o of n.children)
                if (e.shouldReuseRoute(r.value, o.value.snapshot))
                  return _a(e, r, o);
              return _a(e, r);
            });
          })(e, t, n);
          return new Dn(r, o);
        }
        {
          if (e.shouldAttach(t.value)) {
            const i = e.retrieve(t.value);
            if (null !== i) {
              const s = i.route;
              return (
                (s.value._futureSnapshot = t.value),
                (s.children = t.children.map(a => _a(e, a))),
                s
              );
            }
          }
          const r = (function d3(e) {
              return new Ai(
                new gt(e.url),
                new gt(e.params),
                new gt(e.queryParams),
                new gt(e.fragment),
                new gt(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(t.value),
            o = t.children.map(i => _a(e, i));
          return new Dn(r, o);
        }
      }
      class kg {
        constructor(t, n) {
          (this.redirectTo = t), (this.navigationBehaviorOptions = n);
        }
      }
      const sM = 'ngNavigationCancelingError';
      function El(e, t) {
        const { redirectTo: n, navigationBehaviorOptions: r } = ho(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
          o = aM(!1, Yt.Redirect);
        return (o.url = n), (o.navigationBehaviorOptions = r), o;
      }
      function aM(e, t) {
        const n = new Error(`NavigationCancelingError: ${e || ''}`);
        return (n[sM] = !0), (n.cancellationCode = t), n;
      }
      function cM(e) {
        return !!e && e[sM];
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
            xg(this.futureState.root),
            this.activateChildRoutes(n, r, t);
        }
        deactivateChildRoutes(t, n, r) {
          const o = Ti(n);
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
            i = Ti(t);
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
            i = Ti(t);
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
          const o = Ti(n);
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
          if ((xg(o), o === i))
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
                xg(a.route.value),
                this.activateChildRoutes(t, null, s.children);
            } else
              (s.attachRef = null),
                (s.route = o),
                s.outlet && s.outlet.activateWith(o, s.injector),
                this.activateChildRoutes(t, null, s.children);
          } else this.activateChildRoutes(t, null, r);
        }
      }
      class uM {
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
        return Ca(r, t ? t._root : null, n, [r.value]);
      }
      function Ni(e, t) {
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
      function Ca(
        e,
        t,
        n,
        r,
        o = { canDeactivateChecks: [], canActivateChecks: [] },
      ) {
        const i = Ti(t);
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
                      return !fo(e.url, t.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !fo(e.url, t.url) ||
                        !Ln(e.queryParams, t.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return (
                        !Og(e, t) || !Ln(e.queryParams, t.queryParams)
                      );
                    default:
                      return !Og(e, t);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? o.canActivateChecks.push(new uM(r))
                  : ((i.data = s.data),
                    (i._resolvedData = s._resolvedData)),
                  Ca(
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
                s && Ea(t, a, o),
                  o.canActivateChecks.push(new uM(r)),
                  Ca(
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
            Ea(a, n.getContext(s), o),
          ),
          o
        );
      }
      function Ea(e, t, n) {
        const r = Ti(e),
          o = e.value;
        Object.entries(r).forEach(([i, s]) => {
          Ea(
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
      function Da(e) {
        return 'function' == typeof e;
      }
      function lM(e) {
        return e instanceof ol || 'EmptyError' === e?.name;
      }
      const wl = Symbol('INITIAL_VALUE');
      function Ri() {
        return ir(e =>
          SS(
            e.map(t =>
              t.pipe(
                wi(1),
                (function dH(...e) {
                  const t = rl(e);
                  return qe((n, r) => {
                    (t ? yg(e, n, t) : yg(e, n)).subscribe(r);
                  });
                })(wl),
              ),
            ),
          ).pipe(
            ne(t => {
              for (const n of t)
                if (!0 !== n) {
                  if (n === wl) return wl;
                  if (!1 === n || I3(n)) return n;
                }
              return !0;
            }),
            co(t => t !== wl),
            wi(1),
          ),
        );
      }
      function I3(e) {
        return ho(e) || e instanceof kg;
      }
      function dM(e) {
        return (function zT(...e) {
          return Gm(e);
        })(
          It(t => {
            if ('boolean' != typeof t) throw El(0, t);
          }),
          ne(t => !0 === t),
        );
      }
      class Pg {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class bl extends Error {
        constructor(t) {
          super(), (this.urlTree = t);
        }
      }
      function xi(e) {
        return il(new Pg(e));
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
              m = zn(i, () =>
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
            if (m instanceof lo) throw new bl(m);
            n = m;
          }
          const s = this.applyRedirectCreateUrlTree(
            n,
            this.urlSerializer.parse(n),
            t,
            r,
          );
          if ('/' === n[0]) throw new bl(s);
          return s;
        }
        applyRedirectCreateUrlTree(t, n, r, o) {
          const i = this.createSegmentGroup(t, n.root, r, o);
          return new lo(
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
      const Lg = {
        matched: !1,
        consumedSegments: [],
        remainingSegments: [],
        parameters: {},
        positionalParamSegments: {},
      };
      function j3(e, t, n, r, o) {
        const i = Vg(e, t, n);
        return i.matched
          ? ((r = (function t3(e, t) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = jh(
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
                      const a = Ni(s, e);
                      return Sr(
                        (function b3(e) {
                          return e && Da(e.canMatch);
                        })(a)
                          ? a.canMatch(t, n)
                          : zn(e, () => a(t, n)),
                      );
                    }),
                  ).pipe(Ri(), dM())
                : H(!0);
            })(r, t, n).pipe(ne(s => (!0 === s ? i : { ...Lg }))))
          : H(i);
      }
      function Vg(e, t, n) {
        if ('**' === t.path)
          return (function U3(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? OS(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(n);
        if ('' === t.path)
          return 'full' === t.pathMatch &&
            (e.hasChildren() || n.length > 0)
            ? { ...Lg }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: n,
                parameters: {},
                positionalParamSegments: {},
              };
        const o = (t.matcher || yH)(n, e, t);
        if (!o) return { ...Lg };
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
      function fM(e, t, n, r) {
        return n.length > 0 &&
          (function H3(e, t, n) {
            return n.some(r => Il(e, t, r) && En(r) !== z);
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
          if (Il(e, t, i) && !r[En(i)]) {
            const s = new ge([], {});
            o[En(i)] = s;
          }
        return { ...r, ...o };
      }
      function $3(e, t) {
        const n = {};
        n[z] = t;
        for (const r of e)
          if ('' === r.path && En(r) !== z) {
            const o = new ge([], {});
            n[En(r)] = o;
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
          const t = fM(
            this.urlTree.root,
            [],
            [],
            this.config,
          ).segmentGroup;
          return this.match(t).pipe(
            ne(({ children: n, rootSnapshot: r }) => {
              const o = new Dn(r, n),
                i = new nM('', o),
                s = (function VH(e, t, n = null, r = null) {
                  return GS(zS(e), t, n, r);
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
            ne(r => ({ children: r, rootSnapshot: n })),
            bi(r => {
              if (r instanceof bl)
                return (
                  (this.urlTree = r.urlTree),
                  this.match(r.urlTree.root)
                );
              throw r instanceof Pg ? this.noMatchError(r) : r;
            }),
          );
        }
        processSegmentGroup(t, n, r, o, i) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(t, n, r, i)
            : this.processSegment(t, n, r, r.segments, o, !0, i).pipe(
                ne(s => (s instanceof Dn ? [s] : [])),
              );
        }
        processChildren(t, n, r, o) {
          const i = [];
          for (const s of Object.keys(r.children))
            'primary' === s ? i.unshift(s) : i.push(s);
          return lt(i).pipe(
            al(s => {
              const a = r.children[s],
                c = (function s3(e, t) {
                  const n = e.filter(r => En(r) === t);
                  return n.push(...e.filter(r => En(r) !== t)), n;
                })(n, s);
              return this.processSegmentGroup(t, c, a, s, o);
            }),
            RS((s, a) => (s.push(...a), s)),
            sl(null),
            (function pH(e, t) {
              const n = arguments.length >= 2;
              return r =>
                r.pipe(
                  e ? co((o, i) => e(o, i, r)) : Bn,
                  Cg(1),
                  n ? sl(t) : NS(() => new ol()),
                );
            })(),
            bt(s => {
              if (null === s) return xi(r);
              const a = hM(s);
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
          return lt(n).pipe(
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
                bi(u => {
                  if (u instanceof Pg) return H(null);
                  throw u;
                }),
              ),
            ),
            uo(c => !!c),
            bi(c => {
              if (lM(c))
                return (function q3(e, t, n) {
                  return 0 === t.length && !e.children[n];
                })(r, o, i)
                  ? H(new W3())
                  : xi(r);
              throw c;
            }),
          );
        }
        processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
          return (function G3(e, t, n, r) {
            return (
              !!(En(e) === r || (r !== z && Il(t, n, e))) &&
              Vg(t, e, n).matched
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
              : xi(o)
            : xi(o);
        }
        expandSegmentAgainstRouteUsingRedirect(t, n, r, o, i, s, a) {
          const {
            matched: c,
            parameters: u,
            consumedSegments: l,
            positionalParamSegments: d,
            remainingSegments: f,
          } = Vg(n, o, i);
          if (!c) return xi(n);
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
              pM(o),
              En(o),
              o.component ?? o._loadedComponent ?? null,
              o,
              gM(o),
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
              bt(m =>
                this.processSegment(t, r, n, m.concat(f), s, !1, a),
              ),
            );
        }
        matchSegmentAgainstRoute(t, n, r, o, i, s) {
          const a = j3(n, r, o, t);
          return (
            '**' === r.path && (n.children = {}),
            a.pipe(
              ir(c =>
                c.matched
                  ? this.getChildConfig(
                      (t = r._injector ?? t),
                      r,
                      o,
                    ).pipe(
                      ir(({ routes: u }) => {
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
                            pM(r),
                            En(r),
                            r.component ?? r._loadedComponent ?? null,
                            r,
                            gM(r),
                          ),
                          g = yl(
                            p,
                            s,
                            this.paramsInheritanceStrategy,
                          );
                        (p.params = Object.freeze(g.params)),
                          (p.data = Object.freeze(g.data));
                        const { segmentGroup: m, slicedSegments: C } =
                          fM(n, f, h, u);
                        if (0 === C.length && m.hasChildren())
                          return this.processChildren(
                            l,
                            u,
                            m,
                            p,
                          ).pipe(ne(M => new Dn(p, M)));
                        if (0 === u.length && 0 === C.length)
                          return H(new Dn(p, []));
                        const y = En(r) === i;
                        return this.processSegment(
                          l,
                          u,
                          m,
                          C,
                          y ? z : i,
                          !0,
                          p,
                        ).pipe(
                          ne(
                            M =>
                              new Dn(p, M instanceof Dn ? [M] : []),
                          ),
                        );
                      }),
                    )
                  : xi(n),
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
                          const a = Ni(s, e);
                          return Sr(
                            (function C3(e) {
                              return e && Da(e.canLoad);
                            })(a)
                              ? a.canLoad(t, n)
                              : zn(e, () => a(t, n)),
                          );
                        }),
                      ).pipe(Ri(), dM());
                })(t, n, r).pipe(
                  bt(o =>
                    o
                      ? this.configLoader.loadChildren(t, n).pipe(
                          It(i => {
                            (n._loadedRoutes = i.routes),
                              (n._loadedInjector = i.injector);
                          }),
                        )
                      : (function L3(e) {
                          return il(aM(!1, Yt.GuardRejected));
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
      function hM(e) {
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
          const o = hM(r.children);
          t.push(new Dn(r.value, o));
        }
        return t.filter(r => !n.has(r));
      }
      function pM(e) {
        return e.data || {};
      }
      function gM(e) {
        return e.resolve || {};
      }
      function mM(e) {
        const t = e.children.map(n => mM(n)).flat();
        return [e, ...t];
      }
      function jg(e) {
        return ir(t => {
          const n = e(t);
          return n ? lt(n).pipe(ne(() => t)) : H(t);
        });
      }
      let vM = (() => {
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
              return n.data[la];
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
          class e extends vM {
            constructor(n) {
              super(), (this.title = n);
            }
            updateTitle(n) {
              const r = this.buildTitle(n);
              void 0 !== r && this.title.setTitle(r);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(R(p$));
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
      let yM = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = ce({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [ue],
            decls: 1,
            vars: 0,
            template: function (r, o) {
              1 & r && He(0, 'router-outlet');
            },
            dependencies: [ya],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function Ug(e) {
        const t = e.children && e.children.map(Ug),
          n = t ? { ...e, children: t } : { ...e };
        return (
          !n.component &&
            !n.loadComponent &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== z &&
            (n.component = yM),
          n
        );
      }
      const Sl = new D('');
      let _M = (() => {
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
            const r = Sr(n.loadComponent()).pipe(
                ne(CM),
                It(i => {
                  this.onLoadEndListener && this.onLoadEndListener(n),
                    (n._loadedComponent = i);
                }),
                Eg(() => {
                  this.componentLoaders.delete(n);
                }),
              ),
              o = new AS(r, () => new Mt()).pipe(_g());
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
                return Sr(e.loadChildren()).pipe(
                  ne(CM),
                  bt(o =>
                    o instanceof BE || Array.isArray(o)
                      ? H(o)
                      : lt(t.compileModuleAsync(o)),
                  ),
                  ne(o => {
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
                      { routes: s.map(Ug), injector: i }
                    );
                  }),
                );
              })(r, this.compiler, n, this.onLoadEndListener).pipe(
                Eg(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new AS(i, () => new Mt()).pipe(_g());
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
      function CM(e) {
        return (function sz(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let Bg = (() => {
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
      const EM = new D(''),
        wM = new D('');
      let Ml = (() => {
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
              (this.configLoader = _(_M)),
              (this.environmentInjector = _(zt)),
              (this.urlSerializer = _(Si)),
              (this.rootContexts = _(va)),
              (this.location = _(ia)),
              (this.inputBindingEnabled =
                null !== _(Cl, { optional: !0 })),
              (this.titleStrategy = _(vM)),
              (this.options = _(wa, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy ||
                'emptyOnly'),
              (this.urlHandlingStrategy = _(Bg)),
              (this.createViewTransition = _(EM, { optional: !0 })),
              (this.navigationErrorHandler = _(wM, { optional: !0 })),
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
              (this.transitions = new gt({
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
                source: ga,
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
                co(i => 0 !== i.id),
                ne(i => ({
                  ...i,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    i.rawUrl,
                  ),
                })),
                ir(i => {
                  let s = !1,
                    a = !1;
                  return H(i).pipe(
                    ir(c => {
                      if (this.navigationId > i.id)
                        return (
                          this.cancelNavigationTransition(
                            i,
                            '',
                            Yt.SupersededByNewNavigation,
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
                            new Mi(
                              c.id,
                              this.urlSerializer.serialize(c.rawUrl),
                              d,
                              ml.IgnoredSameUrlNavigation,
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
                          ir(d => {
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
                                ? Pn
                                : Promise.resolve(d)
                            );
                          }),
                          (function J3(e, t, n, r, o, i) {
                            return bt(s =>
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
                                ne(({ state: a, tree: c }) => ({
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
                            const f = new KS(
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
                        const C = tM(this.rootComponentType).snapshot;
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
                            new Mi(
                              c.id,
                              this.urlSerializer.serialize(
                                c.extractedUrl,
                              ),
                              d,
                              ml.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          c.resolve(!1),
                          Pn
                        );
                      }
                    }),
                    It(c => {
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
                    ne(
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
                          : (function M3(e, t, n, r) {
                              return lt(e).pipe(
                                bt(o =>
                                  (function O3(e, t, n, r, o) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? H(
                                          i.map(a => {
                                            const c = ma(t) ?? o,
                                              u = Ni(a, c);
                                            return Sr(
                                              (function w3(e) {
                                                return (
                                                  e &&
                                                  Da(e.canDeactivate)
                                                );
                                              })(u)
                                                ? u.canDeactivate(
                                                    e,
                                                    t,
                                                    n,
                                                    r,
                                                  )
                                                : zn(c, () =>
                                                    u(e, t, n, r),
                                                  ),
                                            ).pipe(uo());
                                          }),
                                        ).pipe(Ri())
                                      : H(!0);
                                  })(o.component, o.route, n, t, r),
                                ),
                                uo(o => !0 !== o, !0),
                              );
                            })(s, r, o, e).pipe(
                              bt(a =>
                                a &&
                                (function _3(e) {
                                  return 'boolean' == typeof e;
                                })(a)
                                  ? (function T3(e, t, n, r) {
                                      return lt(t).pipe(
                                        al(o =>
                                          yg(
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
                                                    TS(() =>
                                                      H(
                                                        s.guards.map(
                                                          c => {
                                                            const u =
                                                                ma(
                                                                  s.node,
                                                                ) ??
                                                                n,
                                                              l = Ni(
                                                                c,
                                                                u,
                                                              );
                                                            return Sr(
                                                              (function D3(
                                                                e,
                                                              ) {
                                                                return (
                                                                  e &&
                                                                  Da(
                                                                    e.canActivateChild,
                                                                  )
                                                                );
                                                              })(l)
                                                                ? l.canActivateChild(
                                                                    r,
                                                                    e,
                                                                  )
                                                                : zn(
                                                                    u,
                                                                    () =>
                                                                      l(
                                                                        r,
                                                                        e,
                                                                      ),
                                                                  ),
                                                            ).pipe(
                                                              uo(),
                                                            );
                                                          },
                                                        ),
                                                      ).pipe(Ri()),
                                                    ),
                                                  );
                                              return H(i).pipe(Ri());
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
                                                TS(() => {
                                                  const s =
                                                      ma(t) ?? n,
                                                    a = Ni(i, s);
                                                  return Sr(
                                                    (function E3(e) {
                                                      return (
                                                        e &&
                                                        Da(
                                                          e.canActivate,
                                                        )
                                                      );
                                                    })(a)
                                                      ? a.canActivate(
                                                          t,
                                                          e,
                                                        )
                                                      : zn(s, () =>
                                                          a(t, e),
                                                        ),
                                                  ).pipe(uo());
                                                }),
                                              );
                                              return H(o).pipe(Ri());
                                            })(e, o.route, n),
                                          ),
                                        ),
                                        uo(o => !0 !== o, !0),
                                      );
                                    })(r, i, e, t)
                                  : H(a),
                              ),
                              ne(a => ({ ...n, guardsResult: a })),
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
                    co(
                      c =>
                        !!c.guardsResult ||
                        (this.cancelNavigationTransition(
                          c,
                          '',
                          Yt.GuardRejected,
                        ),
                        !1),
                    ),
                    jg(c => {
                      if (c.guards.canActivateChecks.length)
                        return H(c).pipe(
                          It(u => {
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
                          ir(u => {
                            let l = !1;
                            return H(u).pipe(
                              (function ez(e, t) {
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
                                      for (const u of mM(c)) s.add(u);
                                  let a = 0;
                                  return lt(s).pipe(
                                    al(c =>
                                      i.has(c)
                                        ? (function tz(e, t, n, r) {
                                            const o = e.routeConfig,
                                              i = e._resolve;
                                            return (
                                              void 0 !== o?.title &&
                                                !oM(o) &&
                                                (i[la] = o.title),
                                              (function nz(
                                                e,
                                                t,
                                                n,
                                                r,
                                              ) {
                                                const o = Dg(e);
                                                if (0 === o.length)
                                                  return H({});
                                                const i = {};
                                                return lt(o).pipe(
                                                  bt(s =>
                                                    (function rz(
                                                      e,
                                                      t,
                                                      n,
                                                      r,
                                                    ) {
                                                      const o =
                                                          ma(t) ?? r,
                                                        i = Ni(e, o);
                                                      return Sr(
                                                        i.resolve
                                                          ? i.resolve(
                                                              t,
                                                              n,
                                                            )
                                                          : zn(
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
                                                      uo(),
                                                      It(a => {
                                                        if (
                                                          a instanceof
                                                          kg
                                                        )
                                                          throw El(
                                                            new ul(),
                                                            a,
                                                          );
                                                        i[s] = a;
                                                      }),
                                                    ),
                                                  ),
                                                  Cg(1),
                                                  (function gH(e) {
                                                    return ne(
                                                      () => e,
                                                    );
                                                  })(i),
                                                  bi(s =>
                                                    lM(s)
                                                      ? Pn
                                                      : il(s),
                                                  ),
                                                );
                                              })(i, e, t, r).pipe(
                                                ne(
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
                                    It(() => a++),
                                    Cg(1),
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
                                      Yt.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          It(u => {
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
                    jg(c => {
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
                                ne(() => {}),
                              ),
                          );
                        for (const f of l.children) d.push(...u(f));
                        return d;
                      };
                      return SS(u(c.targetSnapshot.root)).pipe(
                        sl(null),
                        wi(1),
                      );
                    }),
                    jg(() => this.afterPreactivation()),
                    ir(() => {
                      const {
                          currentSnapshot: c,
                          targetSnapshot: u,
                        } = i,
                        l = this.createViewTransition?.(
                          this.environmentInjector,
                          c.root,
                          u.root,
                        );
                      return l ? lt(l).pipe(ne(() => i)) : H(i);
                    }),
                    ne(c => {
                      const u = (function u3(e, t, n) {
                        const r = _a(
                          e,
                          t._root,
                          n ? n._root : void 0,
                        );
                        return new eM(r, t);
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
                      this.events.next(new Tg());
                    }),
                    ((e, t, n, r) =>
                      ne(
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
                    It({
                      next: c => {
                        (s = !0),
                          (this.lastSuccessfulNavigation =
                            this.currentNavigation),
                          this.events.next(
                            new Mr(
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
                      return qe((t, n) => {
                        Cn(e).subscribe(
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
                    Eg(() => {
                      !s &&
                        !a &&
                        this.cancelNavigationTransition(
                          i,
                          '',
                          Yt.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === i.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    bi(c => {
                      if (((a = !0), cM(c)))
                        this.events.next(
                          new po(
                            i.id,
                            this.urlSerializer.serialize(
                              i.extractedUrl,
                            ),
                            c.message,
                            c.cancellationCode,
                          ),
                        ),
                          (function f3(e) {
                            return cM(e) && ho(e.url);
                          })(c)
                            ? this.events.next(
                                new vl(
                                  c.url,
                                  c.navigationBehaviorOptions,
                                ),
                              )
                            : i.resolve(!1);
                      else {
                        const u = new Mg(
                          i.id,
                          this.urlSerializer.serialize(
                            i.extractedUrl,
                          ),
                          c,
                          i.targetSnapshot ?? void 0,
                        );
                        try {
                          const l = zn(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(u),
                          );
                          if (l instanceof kg) {
                            const {
                              message: d,
                              cancellationCode: f,
                            } = El(0, l);
                            this.events.next(
                              new po(
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
                      return Pn;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(n, r, o) {
            const i = new po(
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
        return e !== ga;
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
                return (n || (n = Ke(e)))(o || e);
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
        bM = (() => {
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
          class e extends bM {
            constructor() {
              super(...arguments),
                (this.location = _(ia)),
                (this.urlSerializer = _(Si)),
                (this.options = _(wa, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution ||
                  'replace'),
                (this.urlHandlingStrategy = _(Bg)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new lo()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = tM(null)),
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
              else if (n instanceof Mi)
                this.rawUrlTree = r.initialUrl;
              else if (n instanceof KS) {
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
                n instanceof Tg
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
                  : n instanceof po &&
                    (n.code === Yt.GuardRejected ||
                      n.code === Yt.NoDataFromResolver)
                  ? this.restoreHistory(r)
                  : n instanceof Mg
                  ? this.restoreHistory(r, !0)
                  : n instanceof Mr &&
                    ((this.lastSuccessfulId = n.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(n, r) {
              const o =
                n instanceof lo ? this.urlSerializer.serialize(n) : n;
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
                return (n || (n = Ke(e)))(o || e);
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
      var ba = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = 'COMPLETE'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.REDIRECTING = 2)] = 'REDIRECTING'),
          e
        );
      })(ba || {});
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
      let Tr = (() => {
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
                (this.console = _(vb)),
                (this.stateManager = _(bM)),
                (this.options = _(wa, { optional: !0 }) || {}),
                (this.pendingTasks = _(qr)),
                (this.urlUpdateStrategy =
                  this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = _(Ml)),
                (this.urlSerializer = _(Si)),
                (this.location = _(ia)),
                (this.urlHandlingStrategy = _(Bg)),
                (this._events = new Mt()),
                (this.errorHandler = this.options.errorHandler || gz),
                (this.navigated = !1),
                (this.routeReuseStrategy = _(dz)),
                (this.onSameUrlNavigation =
                  this.options.onSameUrlNavigation || 'ignore'),
                (this.config = _(Sl, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!_(Cl, {
                  optional: !0,
                })),
                (this.eventsSubscription = new st()),
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
                        r instanceof po &&
                          r.code !== Yt.Redirect &&
                          r.code !== Yt.SupersededByNewNavigation)
                      )
                        this.navigated = !0;
                      else if (r instanceof Mr) this.navigated = !0;
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
                        this.scheduleNavigation(a, ga, null, c, {
                          resolve: o.resolve,
                          reject: o.reject,
                          promise: o.promise,
                        });
                      }
                    (function _z(e) {
                      return !(e instanceof Tg || e instanceof vl);
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
                    ga,
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
              (this.config = n.map(Ug)), (this.navigated = !1);
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
                d = zS(
                  o ? o.snapshot : this.routerState.snapshot.root,
                );
              } catch {
                ('string' != typeof n[0] || '/' !== n[0][0]) &&
                  (n = []),
                  (d = this.currentUrlTree.root);
              }
              return GS(d, n, l, u ?? null);
            }
            navigateByUrl(n, r = { skipLocationChange: !1 }) {
              const o = ho(n) ? n : this.parseUrl(n),
                i = this.urlHandlingStrategy.merge(
                  o,
                  this.rawUrlTree,
                );
              return this.scheduleNavigation(i, ga, null, r);
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
                ho(n))
              )
                return kS(this.currentUrlTree, n, o);
              const i = this.parseUrl(n);
              return kS(this.currentUrlTree, i, o);
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
                (function IM(e, t) {
                  e.events
                    .pipe(
                      co(
                        n =>
                          n instanceof Mr ||
                          n instanceof po ||
                          n instanceof Mg ||
                          n instanceof Mi,
                      ),
                      ne(n =>
                        n instanceof Mr || n instanceof Mi
                          ? ba.COMPLETE
                          : n instanceof po &&
                            (n.code === Yt.Redirect ||
                              n.code === Yt.SupersededByNewNavigation)
                          ? ba.REDIRECTING
                          : ba.FAILED,
                      ),
                      co(n => n !== ba.REDIRECTING),
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
                (this.onChanges = new Mt()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const c = s.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === c || 'area' === c),
                this.isAnchorElement
                  ? (this.subscription = n.events.subscribe(u => {
                      u instanceof Mr && this.updateHref();
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
                    ho(n) || Array.isArray(n) ? n : [n]),
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
                  : (function U_(e, t, n) {
                      return (function dO(e, t) {
                        return ('src' === t &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === t &&
                            ('base' === e || 'link' === e))
                          ? j_
                          : Uf;
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
                : ho(this.routerLinkInput)
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
                w(Tr),
                w(Ai),
                (function is(e) {
                  return (function kR(e, t) {
                    if ('class' === t) return e.classes;
                    if ('style' === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                      const r = n.length;
                      let o = 0;
                      for (; o < r; ) {
                        const i = n[o];
                        if (Rv(i)) break;
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
                  })(de(), e);
                })('tabindex'),
                w(Xn),
                w(qt),
                w(Ci),
              );
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (r, o) {
                1 & r &&
                  he('click', function (s) {
                    return o.onClick(
                      s.button,
                      s.ctrlKey,
                      s.shiftKey,
                      s.altKey,
                      s.metaKey,
                    );
                  }),
                  2 & r && Rn('target', o.target);
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
                  _i,
                ],
                skipLocationChange: [
                  2,
                  'skipLocationChange',
                  'skipLocationChange',
                  _i,
                ],
                replaceUrl: [2, 'replaceUrl', 'replaceUrl', _i],
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [UE, Xt],
            }));
          }
          return e;
        })();
      const $g = new D('');
      let SM = (() => {
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
                : n instanceof Mr
                ? ((this.lastId = n.id),
                  this.scheduleScrollEvent(
                    n,
                    this.urlSerializer.parse(n.urlAfterRedirects)
                      .fragment,
                  ))
                : n instanceof Mi &&
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
              n instanceof XS &&
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
                    new XS(
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
            !(function dC() {
              throw new Error('invalid');
            })();
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function MM(e) {
        return e.routerState.root;
      }
      function jn(e, t) {
        return { ɵkind: e, ɵproviders: t };
      }
      function TM() {
        const e = _($e);
        return t => {
          const n = e.get(vn);
          if (t !== n.components[0]) return;
          const r = e.get(Tr),
            o = e.get(AM);
          1 === e.get(Hg) && r.initialNavigation(),
            e.get(NM, null, Z.Optional)?.setUpPreloading(),
            e.get($g, null, Z.Optional)?.init(),
            r.resetRootComponentType(n.componentTypes[0]),
            o.closed || (o.next(), o.complete(), o.unsubscribe());
        };
      }
      const AM = new D('', { factory: () => new Mt() }),
        Hg = new D('', { providedIn: 'root', factory: () => 1 }),
        NM = new D('');
      let Nz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-main']],
              standalone: !0,
              features: [ue],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && He(0, 'router-outlet');
              },
              dependencies: [ya],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        xM = (() => {
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
              return new (r || e)(w(Xn), w(qt));
            });
            static #t = (this.ɵdir = V({ type: e }));
          }
          return e;
        })(),
        go = (() => {
          class e extends xM {
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Ke(e)))(o || e);
              };
            })());
            static #t = (this.ɵdir = V({ type: e, features: [fe] }));
          }
          return e;
        })();
      const Un = new D(''),
        Oz = { provide: Un, useExisting: ye(() => Al), multi: !0 },
        kz = new D('');
      let Al = (() => {
        class e extends xM {
          constructor(n, r, o) {
            super(n, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function Fz() {
                  const e = br() ? br().getUserAgent() : '';
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
            return new (r || e)(w(Xn), w(qt), w(kz, 8));
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
                he('input', function (s) {
                  return o._handleInput(s.target.value);
                })('blur', function () {
                  return o.onTouched();
                })('compositionstart', function () {
                  return o._compositionStart();
                })('compositionend', function (s) {
                  return o._compositionEnd(s.target.value);
                });
            },
            features: [Te([Oz]), fe],
          }));
        }
        return e;
      })();
      function Ar(e) {
        return (
          null == e ||
          (('string' == typeof e || Array.isArray(e)) &&
            0 === e.length)
        );
      }
      function FM(e) {
        return null != e && 'number' == typeof e.length;
      }
      const dt = new D(''),
        Nr = new D(''),
        Pz =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Ia {
        static min(t) {
          return (function kM(e) {
            return t => {
              if (Ar(t.value) || Ar(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n < e
                ? { min: { min: e, actual: t.value } }
                : null;
            };
          })(t);
        }
        static max(t) {
          return (function PM(e) {
            return t => {
              if (Ar(t.value) || Ar(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n > e
                ? { max: { max: e, actual: t.value } }
                : null;
            };
          })(t);
        }
        static required(t) {
          return (function LM(e) {
            return Ar(e.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function VM(e) {
            return !0 === e.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function jM(e) {
            return Ar(e.value) || Pz.test(e.value)
              ? null
              : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function UM(e) {
            return t =>
              Ar(t.value) || !FM(t.value)
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
          return (function BM(e) {
            return t =>
              FM(t.value) && t.value.length > e
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
          return (function $M(e) {
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
                if (Ar(r.value)) return null;
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
          return ZM(t);
        }
        static composeAsync(t) {
          return QM(t);
        }
      }
      function Nl(e) {
        return null;
      }
      function HM(e) {
        return null != e;
      }
      function zM(e) {
        return Js(e) ? lt(e) : e;
      }
      function GM(e) {
        let t = {};
        return (
          e.forEach(n => {
            t = null != n ? { ...t, ...n } : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function qM(e, t) {
        return t.map(n => n(e));
      }
      function WM(e) {
        return e.map(t =>
          (function Lz(e) {
            return !e.validate;
          })(t)
            ? t
            : n => t.validate(n),
        );
      }
      function ZM(e) {
        if (!e) return null;
        const t = e.filter(HM);
        return 0 == t.length
          ? null
          : function (n) {
              return GM(qM(n, t));
            };
      }
      function zg(e) {
        return null != e ? ZM(WM(e)) : null;
      }
      function QM(e) {
        if (!e) return null;
        const t = e.filter(HM);
        return 0 == t.length
          ? null
          : function (n) {
              return (function Rz(...e) {
                const t = mg(e),
                  { args: n, keys: r } = wS(e),
                  o = new xe(i => {
                    const { length: s } = n;
                    if (!s) return void i.complete();
                    const a = new Array(s);
                    let c = s,
                      u = s;
                    for (let l = 0; l < s; l++) {
                      let d = !1;
                      Cn(n[l]).subscribe(
                        Ne(
                          i,
                          f => {
                            d || ((d = !0), u--), (a[l] = f);
                          },
                          () => c--,
                          void 0,
                          () => {
                            (!c || !d) &&
                              (u || i.next(r ? IS(r, a) : a),
                              i.complete());
                          },
                        ),
                      );
                    }
                  });
                return t ? o.pipe(bS(t)) : o;
              })(qM(n, t).map(zM)).pipe(ne(GM));
            };
      }
      function Gg(e) {
        return null != e ? QM(WM(e)) : null;
      }
      function YM(e, t) {
        return null === e
          ? [t]
          : Array.isArray(e)
          ? [...e, t]
          : [e, t];
      }
      function KM(e) {
        return e._rawValidators;
      }
      function XM(e) {
        return e._rawAsyncValidators;
      }
      function qg(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function Rl(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      function JM(e, t) {
        const n = qg(t);
        return (
          qg(e).forEach(o => {
            Rl(n, o) || n.push(o);
          }),
          n
        );
      }
      function e0(e, t) {
        return qg(t).filter(n => !Rl(e, n));
      }
      class t0 {
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
            (this._composedValidatorFn = zg(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = Gg(
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
      class St extends t0 {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class Rr extends t0 {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class n0 {
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
      let r0 = (() => {
          class e extends n0 {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(Rr, 2));
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
              features: [fe],
            }));
          }
          return e;
        })(),
        o0 = (() => {
          class e extends n0 {
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
              features: [fe],
            }));
          }
          return e;
        })();
      const Sa = 'VALID',
        Ol = 'INVALID',
        Oi = 'PENDING',
        Ma = 'DISABLED';
      class Fi {}
      class a0 extends Fi {
        constructor(t, n) {
          super(), (this.value = t), (this.source = n);
        }
      }
      class Qg extends Fi {
        constructor(t, n) {
          super(), (this.pristine = t), (this.source = n);
        }
      }
      class Yg extends Fi {
        constructor(t, n) {
          super(), (this.touched = t), (this.source = n);
        }
      }
      class Fl extends Fi {
        constructor(t, n) {
          super(), (this.status = t), (this.source = n);
        }
      }
      class $z extends Fi {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      class Hz extends Fi {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      function Kg(e) {
        return (kl(e) ? e.validators : e) || null;
      }
      function Xg(e, t) {
        return (kl(t) ? t.asyncValidators : e) || null;
      }
      function kl(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function c0(e, t, n) {
        const r = e.controls;
        if (!(t ? Object.keys(r) : r).length) throw new E(1e3, '');
        if (!r[n]) throw new E(1001, '');
      }
      function u0(e, t, n) {
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
            (this._status = so(() => this.statusReactive())),
            (this.statusReactive = yr(void 0)),
            (this._pristine = so(() => this.pristineReactive())),
            (this.pristineReactive = yr(!0)),
            (this._touched = so(() => this.touchedReactive())),
            (this.touchedReactive = yr(!1)),
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
          return this.status === Ol;
        }
        get pending() {
          return this.status == Oi;
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
          this.setValidators(JM(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(JM(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(e0(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(e0(t, this._rawAsyncValidators));
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
              this._events.next(new Yg(!0, r));
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
              this._events.next(new Yg(!1, r));
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
              this._events.next(new Qg(!1, r));
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
              this._events.next(new Qg(!0, r));
        }
        markAsPending(t = {}) {
          this.status = Oi;
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
            (this._events.next(new a0(this.value, r)),
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
              (this.status === Sa || this.status === Oi) &&
                this._runAsyncValidator(r, t.emitEvent);
          }
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new a0(this.value, n)),
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
            (this.status = Oi),
              (this._hasOwnPendingAsyncValidator = {
                emitEvent: !1 !== n,
              });
            const r = zM(this.asyncValidator(this));
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
          (this.valueChanges = new te()),
            (this.statusChanges = new te());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Ma
            : this.errors
            ? Ol
            : this._hasOwnPendingAsyncValidator ||
              this._anyControlsHaveStatus(Oi)
            ? Oi
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
            o && this._events.next(new Qg(this.pristine, n));
        }
        _updateTouched(t = {}, n) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new Yg(this.touched, n)),
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
              return Array.isArray(e) ? zg(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(t) {
          (this._rawAsyncValidators = Array.isArray(t)
            ? t.slice()
            : t),
            (this._composedAsyncValidatorFn = (function Gz(e) {
              return Array.isArray(e) ? Gg(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Ta extends Pl {
        constructor(t, n, r) {
          super(Kg(n), Xg(r, n)),
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
          u0(this, 0, t),
            Object.keys(t).forEach(r => {
              c0(this, !0, r),
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
      class l0 extends Ta {}
      const ki = new D('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => Ll,
        }),
        Ll = 'always';
      function Aa(e, t, n = Ll) {
        Jg(e, t),
          t.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === n) &&
            t.valueAccessor.setDisabledState?.(e.disabled),
          (function Wz(e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && d0(e, t);
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
                'blur' === e.updateOn && e._pendingChange && d0(e, t),
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
      function Jg(e, t) {
        const n = KM(e);
        null !== t.validator
          ? e.setValidators(YM(n, t.validator))
          : 'function' == typeof n && e.setValidators([n]);
        const r = XM(e);
        null !== t.asyncValidator
          ? e.setAsyncValidators(YM(r, t.asyncValidator))
          : 'function' == typeof r && e.setAsyncValidators([r]);
        const o = () => e.updateValueAndValidity();
        Ul(t._rawValidators, o), Ul(t._rawAsyncValidators, o);
      }
      function Bl(e, t) {
        let n = !1;
        if (null !== e) {
          if (null !== t.validator) {
            const o = KM(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.validator);
              i.length !== o.length && ((n = !0), e.setValidators(i));
            }
          }
          if (null !== t.asyncValidator) {
            const o = XM(e);
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
      function d0(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function p0(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function g0(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const xr = class extends Pl {
        constructor(t = null, n, r) {
          super(Kg(n), Xg(r, n)),
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
              (this.defaultValue = g0(t) ? t.value : t);
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
          p0(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          p0(this._onDisabledChange, t);
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
          g0(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      };
      Promise.resolve();
      let C0 = (() => {
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
      const om = new D(''),
        cG = { provide: Rr, useExisting: ye(() => im) };
      let im = (() => {
        class e extends Rr {
          set isDisabled(n) {}
          static #e = (this._ngModelWarningSentOnce = !1);
          constructor(n, r, o, i, s) {
            super(),
              (this._ngModelWarningConfig = i),
              (this.callSetDisabledState = s),
              (this.update = new te()),
              (this._ngModelWarningSent = !1),
              this._setValidators(n),
              this._setAsyncValidators(r),
              (this.valueAccessor = (function nm(e, t) {
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
                            go
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
            (function tm(e, t) {
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
              w(dt, 10),
              w(Nr, 10),
              w(Un, 10),
              w(om, 8),
              w(ki, 8),
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
            features: [Te([cG]), fe, Xt],
          }));
        }
        return e;
      })();
      const uG = { provide: St, useExisting: ye(() => $l) };
      let $l = (() => {
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
                (this._submitted = so(() =>
                  this._submittedReactive(),
                )),
                (this._submittedReactive = yr(!1)),
                (this._onCollectionChange = () =>
                  this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new te()),
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
                (function h0(e, t) {
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
                  (e => e instanceof xr)(o) &&
                    (Aa(o, n, this.callSetDisabledState),
                    (n.control = o)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(n) {
              const r = this.form.get(n.path);
              (function f0(e, t) {
                Jg(e, t);
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
              Jg(this.form, this),
                this._oldForm && Bl(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(dt, 10), w(Nr, 10), w(ki, 8));
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (r, o) {
                1 & r &&
                  he('submit', function (s) {
                    return o.onSubmit(s);
                  })('reset', function () {
                    return o.onReset();
                  });
              },
              inputs: { form: [0, 'formGroup', 'form'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [Te([uG]), fe, Xt],
            }));
          }
          return e;
        })(),
        MG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Gi({ type: e }));
            static #n = (this.ɵinj = wo({}));
          }
          return e;
        })();
      class L0 extends Pl {
        constructor(t, n, r) {
          super(Kg(n), Xg(r, n)),
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
          u0(this, 0, t),
            t.forEach((r, o) => {
              c0(this, !1, o),
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
      function V0(e) {
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
                V0(r)
                  ? (i = r)
                  : null !== r &&
                    ((i.validators = r.validator),
                    (i.asyncValidators = r.asyncValidator)),
                new Ta(o, i)
              );
            }
            record(n, r = null) {
              const o = this._reduceControls(n);
              return new l0(o, r);
            }
            control(n, r, o) {
              let i = {};
              return this.useNonNullable
                ? (V0(r)
                    ? (i = r)
                    : ((i.validators = r), (i.asyncValidators = o)),
                  new xr(n, { ...i, nonNullable: !0 }))
                : new xr(n, r, o);
            }
            array(n, r, o) {
              const i = n.map(s => this._createControl(s));
              return new L0(i, r, o);
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
              return n instanceof xr || n instanceof Pl
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
        j0 = (() => {
          class e {
            static withConfig(n) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: om,
                    useValue:
                      n.warnOnNgModelWithFormControl ?? 'always',
                  },
                  {
                    provide: ki,
                    useValue: n.callSetDisabledState ?? Ll,
                  },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Gi({ type: e }));
            static #n = (this.ɵinj = wo({ imports: [MG] }));
          }
          return e;
        })();
      const AG = ['*'];
      let dm = (() => {
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
          static #t = (this.ɵcmp = ce({
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
            features: [ue],
            ngContentSelectors: AG,
            decls: 2,
            vars: 1,
            consts: [[1, 'flex', 3, 'ngStyle']],
            template: function (r, o) {
              1 & r && (qs(), Q(0, 'div', 0), Ws(1), Y()),
                2 & r && x('ngStyle', o.buildStyles());
            },
            dependencies: [LI],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}',
            ],
          }));
        }
        return e;
      })();
      function NG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'p', 2),
            he('click', function () {
              return un(n), ln(ie().onClick());
            }),
            kt(2),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie();
          j(),
            Er('margin', n.margin),
            x('ngClass', n.textColor),
            j(),
            Dr(' ', n.value, ' ');
        }
      }
      function RG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'p', 3),
            he('click', function () {
              return un(n), ln(ie().onClick());
            }),
            kt(2),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie();
          j(),
            Er('margin', n.margin),
            x('ngClass', n.textColor),
            j(),
            Dr(' ', n.value, ' ');
        }
      }
      function xG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'h1', 4),
            he('click', function () {
              return un(n), ln(ie().onClick());
            }),
            kt(2),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie();
          j(),
            Er('margin', n.margin),
            x('ngClass', n.textColor),
            j(),
            Dr(' ', n.value, ' ');
        }
      }
      function OG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'h2', 5),
            he('click', function () {
              return un(n), ln(ie().onClick());
            }),
            kt(2),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie();
          j(),
            Er('margin', n.margin),
            x('ngClass', n.textColor),
            j(),
            Dr(' ', n.value, ' ');
        }
      }
      function FG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'h3', 6),
            he('click', function () {
              return un(n), ln(ie().onClick());
            }),
            kt(2),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie();
          j(),
            Er('margin', n.margin),
            x('ngClass', n.textColor),
            j(),
            Dr(' ', n.value, ' ');
        }
      }
      let vo = (() => {
        class e {
          constructor() {
            (this.type = 'paragraph'),
              (this.textColor = 'text__default'),
              (this.clickEvent = new te());
          }
          onClick() {
            this.clickEvent.emit();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = ce({
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
            features: [ue],
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
                (Le(0, 0),
                Jn(1, NG, 3, 4, 'ng-container', 1)(
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
                Ve()),
                2 & r &&
                  (x('ngSwitch', o.type),
                  j(),
                  x('ngSwitchCase', 'tiny'),
                  j(),
                  x('ngSwitchCase', 'paragraph'),
                  j(),
                  x('ngSwitchCase', 'header1'),
                  j(),
                  x('ngSwitchCase', 'header2'),
                  j(),
                  x('ngSwitchCase', 'header3'));
            },
            dependencies: [Jp, NI, Ku, kI],
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
          const n = Fn();
          Le(0),
            Q(1, 'lib-text', 3),
            he('clickEvent', function () {
              return un(n), ln(ie().onClick());
            }),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie();
          j(),
            x('value', n.control.label.value)(
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
          static #t = (this.ɵcmp = ce({
            type: e,
            selectors: [['lib-input']],
            viewQuery: function (r, o) {
              if (
                (1 & r &&
                  (function bw(e, t, n) {
                    _E(e, t, n);
                  })(kG, 5),
                2 & r)
              ) {
                let i;
                (function up(e) {
                  const t = v(),
                    n = G(),
                    r = tf();
                  mc(r + 1);
                  const o = kh(n, r);
                  if (
                    e.dirty &&
                    (function aR(e) {
                      return !(4 & ~e[A]);
                    })(t) === !(2 & ~o.metadata.flags)
                  ) {
                    if (null === o.matches) e.reset([]);
                    else {
                      const i = DE(t, r);
                      e.reset(i, Zy), e.notifyOnChanges();
                    }
                    return !0;
                  }
                  return !1;
                })((i = lp())) && (o.self = i.first);
              }
            },
            inputs: { form: 'form', control: 'control' },
            standalone: !0,
            features: [ue],
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
                const i = Fn();
                Jn(0, PG, 2, 2, 'ng-container', 1),
                  Q(1, 'input', 2, 0),
                  he('focus', function () {
                    return un(i), ln(o.onFocus());
                  })('blur', function () {
                    return un(i), ln(o.onBlur());
                  }),
                  Y();
              }
              2 & r &&
                (x('ngIf', o.control.label.isVisible),
                j(),
                x('value', o.control.input.defaultValue)(
                  'type',
                  o.control.input.type,
                )('placeholder', o.control.input.placeholder)(
                  'formControl',
                  o.form,
                ));
            },
            dependencies: [Jp, Yu, j0, Al, r0, im, vo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.input[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #ccc;color:#454545;font-size:1em;background-color:transparent;outline:none;width:100%}.input[_ngcontent-%COMP%]:focus{border:1px solid #4e31aa;color:#4e31aa}',
            ],
          }));
        }
        return e;
      })();
      const VG = ['*'];
      let U0 = (() => {
          class e {
            constructor() {
              (this.isSubmit = !1),
                (this.clickEvent = new te()),
                (this.mouseEnterEvent = new te()),
                (this.mouseLeaveEvent = new te());
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-button']],
              inputs: { control: 'control', isSubmit: 'isSubmit' },
              outputs: {
                clickEvent: 'clickEvent',
                mouseEnterEvent: 'mouseEnterEvent',
                mouseLeaveEvent: 'mouseLeaveEvent',
              },
              standalone: !0,
              features: [ue],
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
                  (qs(),
                  Q(0, 'button', 0),
                  he('click', function () {
                    return o.onClick();
                  })('mouseenter', function () {
                    return o.onMouseEnter();
                  })('mouseleave', function () {
                    return o.onMouseLeave();
                  }),
                  Ws(1),
                  Y()),
                  2 & r &&
                    x('type', o.isSubmit ? 'submit' : 'button');
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
              this.clickEvent = new te();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-button-text']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ue],
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
                  (Q(0, 'lib-button', 0),
                  he('clickEvent', function () {
                    return o.onClickEvent();
                  }),
                  He(1, 'lib-text', 1),
                  Y()),
                  2 & r &&
                    (x('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    j(),
                    x('value', o.control.label));
              },
              dependencies: [U0, vo],
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-icon']],
              inputs: { src: 'src', alt: 'alt' },
              standalone: !0,
              features: [ue],
              decls: 1,
              vars: 2,
              consts: [[1, 'icon', 3, 'src', 'alt']],
              template: function (r, o) {
                1 & r && He(0, 'img', 0),
                  2 & r && x('src', o.src, Uf)('alt', o.alt);
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
              this.clickEvent = new te();
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-button-icon']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [ue],
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
                  (Q(0, 'lib-button', 0),
                  he('clickEvent', function () {
                    return o.onClickEvent();
                  })('mouseEnterEvent', function () {
                    return o.onMouseEnterEvent();
                  })('mouseLeaveEvent', function () {
                    return o.onMouseLeaveEvent();
                  }),
                  He(1, 'lib-icon', 1),
                  Y()),
                  2 & r &&
                    (x('control', o.form)(
                      'isSubmit',
                      o.control.isSubmit,
                    ),
                    j(),
                    x('src', o.control.icon)('alt', o.control.alt));
              },
              dependencies: [U0, UG],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function $G(e, t) {
        if ((1 & e && (Le(0), He(1, 'lib-text', 4), Ve()), 2 & e)) {
          const n = ie();
          j(), x('value', n.control.tip);
        }
      }
      let HG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-link']],
              inputs: { form: 'form', control: 'control' },
              standalone: !0,
              features: [ue],
              decls: 4,
              vars: 3,
              consts: [
                [1, 'link', 3, 'routerLink'],
                ['flexDirection', 'row', 'gap', '0.25rem'],
                [4, 'ngIf'],
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
                  (Q(0, 'a', 0)(1, 'lib-flex', 1),
                  Jn(2, $G, 2, 1, 'ng-container', 2),
                  He(3, 'lib-text', 3),
                  Y()()),
                  2 & r &&
                    (x('routerLink', o.control.path),
                    j(2),
                    x('ngIf', '' !== o.control.tip),
                    j(),
                    x('value', o.control.label));
              },
              dependencies: [Yu, vo, Tl, dm],
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-error']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [ue],
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
                1 & r && (Q(0, 'div', 0), He(1, 'lib-text', 1), Y()),
                  2 & r && (j(), x('value', o.value));
              },
              dependencies: [vo],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.error[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(226,54,54,.2509803922);background-color:#e2363640}',
              ],
            }));
          }
          return e;
        })();
      var Pt = (function (e) {
        return (
          (e.input = 'input'),
          (e.buttonText = 'buttonText'),
          (e.buttonIcon = 'buttonIcon'),
          (e.link = 'link'),
          (e.text = 'text'),
          e
        );
      })(Pt || {});
      let GG = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = ce({
            type: e,
            selectors: [['lib-success']],
            inputs: { value: 'value' },
            standalone: !0,
            features: [ue],
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
              1 & r && (Q(0, 'div', 0), He(1, 'lib-text', 1), Y()),
                2 & r && (j(), x('value', o.value));
            },
            dependencies: [vo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.success[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(68,134,35,.2509803922);background-color:#44862340}',
            ],
          }));
        }
        return e;
      })();
      function qG(e, t) {
        if ((1 & e && (Le(0), He(1, 'lib-input', 6), Ve()), 2 & e)) {
          const n = ie().$implicit,
            r = ie();
          j(), x('form', r.getFormControl(n.id))('control', n);
        }
      }
      function WG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'lib-button-text', 7),
            he('clickEvent', function () {
              return un(n), ln(ie(2).onSubmit());
            }),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie().$implicit,
            r = ie();
          j(), x('form', r.getFormControl(n.id))('control', n);
        }
      }
      function ZG(e, t) {
        if (1 & e) {
          const n = Fn();
          Le(0),
            Q(1, 'lib-button-icon', 7),
            he('clickEvent', function () {
              return un(n), ln(ie(2).onSubmit());
            }),
            Y(),
            Ve();
        }
        if (2 & e) {
          const n = ie().$implicit,
            r = ie();
          j(), x('form', r.getFormControl(n.id))('control', n);
        }
      }
      function QG(e, t) {
        if ((1 & e && (Le(0), He(1, 'lib-link', 6), Ve()), 2 & e)) {
          const n = ie().$implicit,
            r = ie();
          j(), x('form', r.getFormControl(n.id))('control', n);
        }
      }
      function YG(e, t) {
        if ((1 & e && (Le(0), He(1, 'lib-text', 8), Ve()), 2 & e)) {
          const n = ie().$implicit;
          j(), x('value', n.value)('margin', n.margin);
        }
      }
      function KG(e, t) {
        if ((1 & e && (Le(0), He(1, 'lib-error', 9), Ve()), 2 & e)) {
          const n = ie(2).$implicit,
            r = ie();
          j(), x('value', r.getFormControlError(n.id));
        }
      }
      function XG(e, t) {
        if (
          (1 & e && (Le(0), Jn(1, KG, 2, 1, 'ng-container', 4), Ve()),
          2 & e)
        ) {
          const n = ie().$implicit,
            r = ie();
          j(), x('ngIf', r.formControlInvalid(n.id));
        }
      }
      function JG(e, t) {
        if (
          (1 & e &&
            (Le(0),
            Q(1, 'lib-flex', 5),
            Jn(2, qG, 2, 2, 'ng-container', 4)(
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
            Y(),
            Ve()),
          2 & e)
        ) {
          const n = t.$implicit;
          j(),
            x('alignItems', n.alignItems),
            j(),
            x('ngIf', 'input' === n.kind),
            j(),
            x('ngIf', 'buttonText' === n.kind),
            j(),
            x('ngIf', 'buttonIcon' === n.kind),
            j(),
            x('ngIf', 'link' === n.kind),
            j(),
            x('ngIf', 'text' === n.kind),
            j(),
            x('ngIf', n.validation.isVisible);
        }
      }
      function e8(e, t) {
        if (
          (1 & e && (Le(0), He(1, 'lib-success', 9), Ve()), 2 & e)
        ) {
          const n = ie();
          j(), x('value', n.formSuccessMessage);
        }
      }
      function t8(e, t) {
        if ((1 & e && (Le(0), He(1, 'lib-error', 9), Ve()), 2 & e)) {
          const n = ie();
          j(), x('value', n.formErrorMessage);
        }
      }
      let B0 = (() => {
          class e {
            constructor(n) {
              (this.fb = n),
                (this.flexDirection = 'column'),
                (this.resetIfError = !1),
                (this.formErrorMessage =
                  'The form was not completed correctly.'),
                (this.formSuccessMessage =
                  'The form was completed correctly.'),
                (this.baseFormEvent = new te()),
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
                case Pt.input:
                  return new xr(
                    n.input.defaultValue,
                    n.validation.validators,
                  );
                case Pt.buttonText:
                case Pt.buttonIcon:
                case Pt.link:
                  return new xr(!1, n.validation.validators);
                case Pt.text:
                  return new xr('', n.validation.validators);
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
              return new (r || e)(w(TG));
            });
            static #t = (this.ɵcmp = ce({
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
              features: [ue],
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
                  (Q(0, 'form', 0),
                  he('ngSubmit', function () {
                    return o.onSubmit();
                  }),
                  Q(1, 'lib-flex', 1)(2, 'lib-flex', 2),
                  Jn(3, JG, 8, 7, 'ng-container', 3),
                  Y(),
                  Jn(4, e8, 2, 1, 'ng-container', 4)(
                    5,
                    t8,
                    2,
                    1,
                    'ng-container',
                    4,
                  ),
                  Y()()),
                  2 & r &&
                    (x('formGroup', o.formGroup),
                    j(),
                    x('flexDirection', o.flexDirection),
                    j(),
                    x('flexDirection', o.flexDirection),
                    j(),
                    x('ngForOf', o.baseForm.controls),
                    j(),
                    x('ngIf', o.formGroupValid),
                    j(),
                    x('ngIf', o.formGroupInvalid));
              },
              dependencies: [
                Jp,
                xI,
                Yu,
                j0,
                C0,
                o0,
                $l,
                dm,
                LG,
                jG,
                BG,
                HG,
                zG,
                GG,
                vo,
              ],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        n8 = (() => {
          class e {
            constructor() {
              (this.event = new te()),
                (this.loginForm = {
                  controls: [
                    {
                      kind: Pt.input,
                      id: 'email',
                      alignItems: 'flex-start',
                      validation: {
                        validators: [Ia.required, Ia.email],
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
                      kind: Pt.input,
                      id: 'password',
                      alignItems: 'flex-start',
                      validation: {
                        validators: [Ia.required],
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
                      kind: Pt.link,
                      id: 'forgotPassword',
                      alignItems: 'flex-end',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Forgot password?',
                      path: '/forgot-password',
                      tip: '',
                    },
                    {
                      kind: Pt.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Log in',
                      isSubmit: !0,
                    },
                    {
                      kind: Pt.link,
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-login-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ue],
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
                  (Q(0, 'lib-base-form', 0),
                  he('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  Y()),
                  2 & r &&
                    x('baseForm', o.loginForm)('resetIfError', !0);
              },
              dependencies: [B0],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        r8 = (() => {
          class e {
            constructor() {
              (this.event = new te()),
                (this.forgotPasswordForm = {
                  controls: [
                    {
                      kind: Pt.text,
                      id: 'tip',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !0 },
                      value:
                        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
                      margin: '1rem 0',
                    },
                    {
                      kind: Pt.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Ia.required, Ia.email],
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
                      kind: Pt.buttonText,
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-forgot-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ue],
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
                  (Q(0, 'lib-base-form', 0),
                  he('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  Y()),
                  2 & r &&
                    x('baseForm', o.forgotPasswordForm)(
                      'resetIfError',
                      !1,
                    );
              },
              dependencies: [B0],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const o8 = ['*'];
      let i8 = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = ce({
            type: e,
            selectors: [['lib-card']],
            inputs: { maxWidth: 'maxWidth' },
            standalone: !0,
            features: [ue],
            ngContentSelectors: o8,
            decls: 2,
            vars: 2,
            consts: [[1, 'card']],
            template: function (r, o) {
              1 & r && (qs(), Q(0, 'div', 0), Ws(1), Y()),
                2 & r && Er('max-width', o.maxWidth);
            },
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.card[_ngcontent-%COMP%]{padding:2rem;border-radius:.25rem;background-color:#f1f1f1}',
            ],
          }));
        }
        return e;
      })();
      const s8 = ['*'];
      let $0 = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = ce({
            type: e,
            selectors: [['lib-auth']],
            standalone: !0,
            features: [ue],
            ngContentSelectors: s8,
            decls: 6,
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
              ['maxWidth', '400px'],
              [
                'alignItems',
                'center',
                'flexDirection',
                'column',
                'gap',
                '1rem',
              ],
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
                (qs(),
                Q(0, 'div', 0)(1, 'lib-flex', 1)(2, 'lib-card', 2)(
                  3,
                  'lib-flex',
                  3,
                ),
                He(4, 'lib-text', 4),
                Ws(5),
                Y()()()());
            },
            dependencies: [dm, vo, i8],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.auth[_ngcontent-%COMP%]{padding:1rem}',
            ],
          }));
        }
        return e;
      })();
      nt(206);
      let p8 = (() => {
          class e {
            constructor() {
              this.event = new te();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-login']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (Q(0, 'lib-auth')(1, 'lib-login-form', 0),
                  he('event', function (s) {
                    return o.onEvent(s);
                  }),
                  Y()());
              },
              dependencies: [$0, n8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        g8 = (() => {
          class e {
            constructor() {
              this.event = new te();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-forgot-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (Q(0, 'lib-auth')(1, 'lib-forgot-password-form', 0),
                  he('event', function (s) {
                    return o.onEvent(s);
                  }),
                  Y()());
              },
              dependencies: [$0, r8],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        m8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-registration']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'registration'), Y());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        v8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-change-password']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'change-password'), Y());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        y8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-dashboard']],
              standalone: !0,
              features: [ue],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && He(0, 'router-outlet');
              },
              dependencies: [ya],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        _8 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-courses']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'courses'), Y());
              },
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-statistics']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'statistics'), Y());
              },
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-course']],
              standalone: !0,
              features: [ue],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && He(0, 'router-outlet');
              },
              dependencies: [ya],
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-roadmap']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'roadmap'), Y());
              },
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-account']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'account'), Y());
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
            static #t = (this.ɵcmp = ce({
              type: e,
              selectors: [['lib-http-404']],
              standalone: !0,
              features: [ue],
              decls: 2,
              vars: 0,
              template: function (r, o) {
                1 & r && (Q(0, 'p'), kt(1, 'http-404'), Y());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const N8 = {
        providers: [
          (function bz(e, ...t) {
            return Mo([
              { provide: Sl, multi: !0, useValue: e },
              [],
              { provide: Ai, useFactory: MM, deps: [Tr] },
              { provide: Mu, multi: !0, useFactory: TM },
              t.map(n => n.ɵproviders),
            ]);
          })(
            [
              { path: '', redirectTo: '/login', pathMatch: 'full' },
              { path: 'login', component: p8 },
              { path: 'registration', component: m8 },
              { path: 'forgot-password', component: g8 },
              { path: 'change-password', component: v8 },
              {
                path: 'dashboard',
                component: y8,
                children: [
                  {
                    path: '',
                    redirectTo: 'dashboard/statistics',
                    pathMatch: 'full',
                  },
                  { path: 'statistics', component: C8 },
                  { path: 'courses', component: _8 },
                  { path: 'account', component: w8 },
                  {
                    path: 'course/:courseId',
                    component: E8,
                    children: [
                      { path: 'roadmap', component: D8 },
                      {
                        path: 'quiz',
                        component: (() => {
                          class e {
                            static #e = (this.ɵfac = function (r) {
                              return new (r || e)();
                            });
                            static #t = (this.ɵcmp = ce({
                              type: e,
                              selectors: [['lib-quiz']],
                              standalone: !0,
                              features: [ue],
                              decls: 2,
                              vars: 0,
                              template: function (r, o) {
                                1 & r &&
                                  (Q(0, 'p'), kt(1, 'quiz'), Y());
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
              { path: '**', component: b8 },
            ],
            (function Az() {
              return jn(6, [{ provide: Ci, useClass: Zj }]);
            })(),
            (function Sz(e = {}) {
              return jn(4, [
                {
                  provide: $g,
                  useFactory: () => {
                    const n = _(dB),
                      r = _(oe),
                      o = _(Ml),
                      i = _(Si);
                    return new SM(i, o, n, r, e);
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
      class R8 extends st {
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
      class x8 extends R8 {
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
      class F8 extends Ra {
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
      const P8 = new (class k8 extends F8 {})(
        class O8 extends x8 {
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
      function U8(e, t) {
        return e === t;
      }
      function G0(e, t) {
        const n = !t?.manualCleanup;
        n &&
          !t?.injector &&
          (function qi(e) {
            if (!zv()) throw new E(-203, !1);
          })();
        const r = n ? t?.injector?.get(Gr) ?? _(Gr) : null,
          o = (function H8(e = Object.is) {
            return (t, n) =>
              1 === t.kind && 1 === n.kind && e(t.value, n.value);
          })(t?.equal);
        let i;
        i = yr(
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
          so(
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
      function fm(e, t) {
        return Object.defineProperty(t, 'type', {
          value: e,
          writable: !1,
        });
      }
      const W0 = '@ngrx/store/init';
      let Pi = (() => {
        class e extends gt {
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
      const Z8 = [Pi],
        Z0 = new D('@ngrx/store Internal Root Guard'),
        Q0 = new D('@ngrx/store Internal Initial State'),
        pm = new D('@ngrx/store Initial State'),
        Y0 = new D('@ngrx/store Reducer Factory'),
        K0 = new D('@ngrx/store Internal Reducer Factory Provider'),
        X0 = new D('@ngrx/store Initial Reducers'),
        gm = new D('@ngrx/store Internal Initial Reducers'),
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
        zl = new D('@ngrx/store Meta Reducers'),
        sT = new D('@ngrx/store Internal Resolved Meta Reducers'),
        aT = new D('@ngrx/store User Runtime Checks Config'),
        cT = new D('@ngrx/store Internal User Runtime Checks Config'),
        Oa = new D('@ngrx/store Internal Runtime Checks'),
        vm = new D('@ngrx/store Check if Action types are unique'),
        ym = new D('@ngrx/store Root Store Provider');
      function _m(e, t = {}) {
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
      class Cm extends xe {}
      class fT extends Pi {}
      let Gl = (() => {
        class e extends gt {
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
                    ? (function Y8(e) {
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
              this.reducers = (function Q8(e, t) {
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
            return new (r || e)(R(fT), R(pm), R(X0), R(Y0));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const X8 = [
        Gl,
        { provide: Cm, useExisting: Gl },
        { provide: fT, useExisting: Pi },
      ];
      let Em = (() => {
        class e extends Mt {
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = (() => {
            let n;
            return function (o) {
              return (n || (n = Ke(e)))(o || e);
            };
          })());
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const J8 = [Em];
      class hT extends xe {}
      let pT = (() => {
        class e extends gt {
          static #e = (this.INIT = W0);
          constructor(n, r, o, i) {
            super(i);
            const a = n.pipe(pg(P8)).pipe(
                (function L8(...e) {
                  const t = mg(e);
                  return qe((n, r) => {
                    const o = e.length,
                      i = new Array(o);
                    let s = e.map(() => !1),
                      a = !1;
                    for (let c = 0; c < o; c++)
                      Cn(e[c]).subscribe(
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
              u = a.pipe(RS(e4, { state: i }));
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
            return new (r || e)(R(Pi), R(Cm), R(Em), R(pm));
          });
          static #n = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function e4(e = { state: void 0 }, [t, n]) {
        const { state: r } = e;
        return { state: n(r, t), action: t };
      }
      const t4 = [pT, { provide: hT, useExisting: pT }];
      let Dm = (() => {
        class e extends xe {
          constructor(n, r, o) {
            super(),
              (this.actionsObserver = r),
              (this.reducerManager = o),
              (this.source = n),
              (this.state = n.state);
          }
          select(n, ...r) {
            return r4.call(null, n, ...r)(this);
          }
          selectSignal(n, r) {
            return so(() => n(this.state()), r);
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
            return new (r || e)(R(hT), R(Pi), R(Gl));
          });
          static #t = (this.ɵprov = S({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const n4 = [Dm];
      function r4(e, t, ...n) {
        return function (o) {
          let i;
          if ('string' == typeof e) {
            const s = [t, ...n].filter(Boolean);
            i = o.pipe(
              (function V8(...e) {
                const t = e.length;
                if (0 === t)
                  throw new Error(
                    'list of properties cannot be empty.',
                  );
                return ne(n => {
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
            i = o.pipe(ne(s => e(s, t)));
          }
          return i.pipe(
            (function j8(e, t = Bn) {
              return (
                (e = e ?? U8),
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
      const wm =
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
      function bm(e) {
        return 'function' == typeof e;
      }
      function _4(e) {
        return e instanceof D ? _(e) : e;
      }
      function DT(e) {
        return 'function' == typeof e ? e() : e;
      }
      function D4(e, t) {
        return e.concat(t);
      }
      function w4() {
        if (_(Dm, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function Mm(e) {
        Object.freeze(e);
        const t = bm(e);
        return (
          Object.getOwnPropertyNames(e).forEach(n => {
            if (
              !n.startsWith('\u0275') &&
              (function u4(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              })(e, n) &&
              (!t ||
                ('caller' !== n &&
                  'callee' !== n &&
                  'arguments' !== n))
            ) {
              const r = e[n];
              (yT(r) || bm(r)) && !Object.isFrozen(r) && Mm(r);
            }
          }),
          e
        );
      }
      function Tm(e, t = []) {
        return (gT(e) || mT(e)) && 0 === t.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((r, o) => {
              if (r) return r;
              const i = e[o];
              return (function c4(e) {
                return bm(e) && e.hasOwnProperty('\u0275cmp');
              })(i)
                ? r
                : !(
                    gT(i) ||
                    mT(i) ||
                    (function s4(e) {
                      return 'number' == typeof e;
                    })(i) ||
                    (function i4(e) {
                      return 'boolean' == typeof e;
                    })(i) ||
                    (function o4(e) {
                      return 'string' == typeof e;
                    })(i) ||
                    vT(i)
                  ) &&
                    ((function _T(e) {
                      if (
                        !(function a4(e) {
                          return yT(e) && !vT(e);
                        })(e)
                      )
                        return !1;
                      const t = Object.getPrototypeOf(e);
                      return t === Object.prototype || null === t;
                    })(i)
                      ? Tm(i, [...t, o])
                      : { path: [...t, o], value: i });
            }, !1);
      }
      function wT(e, t) {
        if (!1 === e) return;
        const n = e.path.join('.'),
          r = new Error(
            `Detected unserializable ${t} at "${n}". ${wm}#strict${t}serializability`,
          );
        throw ((r.value = e.value), (r.unserializablePath = n), r);
      }
      function M4(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function T4({
        strictActionSerializability: e,
        strictStateSerializability: t,
      }) {
        return n =>
          e || t
            ? (function I4(e, t) {
                return function (n, r) {
                  t.action(r) && wT(Tm(r), 'action');
                  const o = e(n, r);
                  return t.state() && wT(Tm(o), 'state'), o;
                };
              })(n, { action: r => e && !Am(r), state: () => t })
            : n;
      }
      function A4({
        strictActionImmutability: e,
        strictStateImmutability: t,
      }) {
        return n =>
          e || t
            ? (function b4(e, t) {
                return function (n, r) {
                  const o = t.action(r) ? Mm(r) : r,
                    i = e(n, o);
                  return t.state() ? Mm(i) : i;
                };
              })(n, { action: r => e && !Am(r), state: () => t })
            : n;
      }
      function Am(e) {
        return e.type.startsWith('@ngrx');
      }
      function N4({ strictActionWithinNgZone: e }) {
        return t =>
          e
            ? (function S4(e, t) {
                return function (n, r) {
                  if (t.action(r) && !oe.isInAngularZone())
                    throw new Error(
                      `Action '${r.type}' running outside NgZone. ${wm}#strictactionwithinngzone`,
                    );
                  return e(n, r);
                };
              })(t, { action: n => e && !Am(n) })
            : t;
      }
      function R4(e) {
        return [
          { provide: cT, useValue: e },
          { provide: aT, useFactory: x4, deps: [cT] },
          { provide: Oa, deps: [aT], useFactory: M4 },
          { provide: zl, multi: !0, deps: [Oa], useFactory: A4 },
          { provide: zl, multi: !0, deps: [Oa], useFactory: T4 },
          { provide: zl, multi: !0, deps: [Oa], useFactory: N4 },
        ];
      }
      function x4(e) {
        return e;
      }
      function O4(e) {
        if (!e.strictActionTypeUniqueness) return;
        const t = Object.entries(xa)
          .filter(([, n]) => n > 1)
          .map(([n]) => n);
        if (t.length)
          throw new Error(
            `Action types are registered more than once, ${t
              .map(n => `"${n}"`)
              .join(', ')}. ${wm}#strictactiontypeuniqueness`,
          );
      }
      function F4(e = {}, t = {}) {
        return [
          { provide: Z0, useFactory: w4 },
          { provide: Q0, useValue: t.initialState },
          { provide: pm, useFactory: DT, deps: [Q0] },
          { provide: gm, useValue: e },
          { provide: eT, useExisting: e instanceof D ? e : gm },
          { provide: X0, deps: [gm, [new Sv(eT)]], useFactory: _4 },
          {
            provide: iT,
            useValue: t.metaReducers ? t.metaReducers : [],
          },
          { provide: sT, deps: [zl, iT], useFactory: D4 },
          {
            provide: K0,
            useValue: t.reducerFactory ? t.reducerFactory : _m,
          },
          { provide: Y0, deps: [K0, sT], useFactory: dT },
          Z8,
          X8,
          J8,
          t4,
          n4,
          R4(t.runtimeChecks),
          [{ provide: vm, multi: !0, deps: [Oa], useFactory: O4 }],
        ];
      }
      const P4 = [
          {
            provide: ym,
            useFactory: function k4() {
              _(Pi),
                _(Cm),
                _(Em),
                _(Dm),
                _(Z0, { optional: !0 }),
                _(vm, { optional: !0 });
            },
          },
          { provide: Ht, multi: !0, useFactory: () => () => _(ym) },
        ],
        G4 = {
          providers: [
            (function L4(e, t) {
              return Mo([...F4(e, t), P4]);
            })({
              grammar: (function $4(e, ...t) {
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
                (function B4(...e) {
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
                      return fm(e, (...r) => ({
                        ...t(...r),
                        type: e,
                      }));
                    switch (t ? t._as : 'empty') {
                      case 'empty':
                        return fm(e, () => ({ type: e }));
                      case 'props':
                        return fm(e, r => ({ ...r, type: e }));
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
        return vj({ rootComponent: e, ...oS(t) });
      })(Nz, { providers: [...N8.providers, ...G4.providers] }).catch(
        e => {
          throw new Error(e);
        },
      );
    },
    206: (Vt, sr, nt) => {
      'use strict';
      const jt = nt(739),
        pe = nt(200),
        ft = nt(897);
      Vt.exports = function ht(Ie, pt) {
        switch (pe(Ie)) {
          case 'object':
            return (function Re(Ie, pt) {
              if ('function' == typeof pt) return pt(Ie);
              if (pt || ft(Ie)) {
                const I = new Ie.constructor();
                for (let q in Ie) I[q] = ht(Ie[q], pt);
                return I;
              }
              return Ie;
            })(Ie, pt);
          case 'array':
            return (function F(Ie, pt) {
              const I = new Ie.constructor(Ie.length);
              for (let q = 0; q < Ie.length; q++)
                I[q] = ht(Ie[q], pt);
              return I;
            })(Ie, pt);
          default:
            return jt(Ie);
        }
      };
    },
    897: (Vt, sr, nt) => {
      'use strict';
      var jt = nt(907);
      function pe(ft) {
        return (
          !0 === jt(ft) &&
          '[object Object]' === Object.prototype.toString.call(ft)
        );
      }
      Vt.exports = function (ht) {
        var Re, F;
        return !(
          !1 === pe(ht) ||
          ((Re = ht.constructor), 'function' != typeof Re) ||
          ((F = Re.prototype), !1 === pe(F)) ||
          !1 === F.hasOwnProperty('isPrototypeOf')
        );
      };
    },
    907: Vt => {
      'use strict';
      Vt.exports = function (nt) {
        return (
          null != nt &&
          'object' == typeof nt &&
          !1 === Array.isArray(nt)
        );
      };
    },
    200: Vt => {
      var sr = Object.prototype.toString;
      function nt(I) {
        return 'function' == typeof I.constructor
          ? I.constructor.name
          : null;
      }
      Vt.exports = function (q) {
        if (void 0 === q) return 'undefined';
        if (null === q) return 'null';
        var et = typeof q;
        if ('boolean' === et) return 'boolean';
        if ('string' === et) return 'string';
        if ('number' === et) return 'number';
        if ('symbol' === et) return 'symbol';
        if ('function' === et)
          return (function Re(I, q) {
            return 'GeneratorFunction' === nt(I);
          })(q)
            ? 'generatorfunction'
            : 'function';
        if (
          (function jt(I) {
            return Array.isArray
              ? Array.isArray(I)
              : I instanceof Array;
          })(q)
        )
          return 'array';
        if (
          (function pt(I) {
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
          (function ft(I) {
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
          (function ht(I) {
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
        switch (nt(q)) {
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
        switch ((et = sr.call(q))) {
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
        return et.slice(8, -1).toLowerCase().replace(/\s/g, '');
      };
    },
    739: (Vt, sr, nt) => {
      'use strict';
      const jt = Symbol.prototype.valueOf,
        pe = nt(200);
      Vt.exports = function ft(I, q) {
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
                et = Buffer.allocUnsafe
                  ? Buffer.allocUnsafe(q)
                  : Buffer.from(q);
              return I.copy(et), et;
            })(I);
          case 'symbol':
            return (function pt(I) {
              return jt ? Object(jt.call(I)) : {};
            })(I);
          case 'arraybuffer':
            return (function Re(I) {
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
            return (function ht(I) {
              const q =
                  void 0 !== I.flags
                    ? I.flags
                    : /\w+$/.exec(I) || void 0,
                et = new I.constructor(I.source, q);
              return (et.lastIndex = I.lastIndex), et;
            })(I);
          case 'error':
            return Object.create(I);
          default:
            return I;
        }
      };
    },
  },
  Vt => {
    Vt((Vt.s = 99));
  },
]);

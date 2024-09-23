'use strict';
(self.webpackChunkenglish_learning_fe = self.webpackChunkenglish_learning_fe || []).push([
  [792],
  {
    52: () => {
      function Bi(e, t) {
        return Object.is(e, t);
      }
      let xe = null,
        ho = !1,
        po = 1;
      const Jt = Symbol('SIGNAL');
      function z(e) {
        const t = xe;
        return (xe = e), t;
      }
      const ja = {
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
      function id(e) {
        if (ho) throw new Error('');
        if (null === xe) return;
        xe.consumerOnSignalRead(e);
        const t = xe.nextProducerIndex++;
        $a(xe),
          t < xe.producerNode.length &&
            xe.producerNode[t] !== e &&
            $i(xe) &&
            Ba(xe.producerNode[t], xe.producerIndexOfThis[t]),
          xe.producerNode[t] !== e &&
            ((xe.producerNode[t] = e),
            (xe.producerIndexOfThis[t] = $i(xe) ? Km(e, xe, t) : 0)),
          (xe.producerLastReadVersion[t] = e.version);
      }
      function Wm(e) {
        if ((!$i(e) || e.dirty) && (e.dirty || e.lastCleanEpoch !== po)) {
          if (!e.producerMustRecompute(e) && !ad(e))
            return (e.dirty = !1), void (e.lastCleanEpoch = po);
          e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = po);
        }
      }
      function Zm(e) {
        if (void 0 === e.liveConsumerNode) return;
        const t = ho;
        ho = !0;
        try {
          for (const n of e.liveConsumerNode) n.dirty || Qm(n);
        } finally {
          ho = t;
        }
      }
      function Ym() {
        return !1 !== xe?.consumerAllowSignalWrites;
      }
      function Qm(e) {
        (e.dirty = !0), Zm(e), e.consumerMarkedDirty?.(e);
      }
      function Ua(e) {
        return e && (e.nextProducerIndex = 0), z(e);
      }
      function sd(e, t) {
        if (
          (z(t),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if ($i(e))
            for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
              Ba(e.producerNode[n], e.producerIndexOfThis[n]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop();
        }
      }
      function ad(e) {
        $a(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            r = e.producerLastReadVersion[t];
          if (r !== n.version || (Wm(n), r !== n.version)) return !0;
        }
        return !1;
      }
      function cd(e) {
        if (($a(e), $i(e)))
          for (let t = 0; t < e.producerNode.length; t++)
            Ba(e.producerNode[t], e.producerIndexOfThis[t]);
        (e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
      }
      function Km(e, t, n) {
        if ((Xm(e), 0 === e.liveConsumerNode.length && Jm(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            e.producerIndexOfThis[r] = Km(e.producerNode[r], e, r);
        return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
      }
      function Ba(e, t) {
        if ((Xm(e), 1 === e.liveConsumerNode.length && Jm(e)))
          for (let r = 0; r < e.producerNode.length; r++)
            Ba(e.producerNode[r], e.producerIndexOfThis[r]);
        const n = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
          (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          t < e.liveConsumerNode.length)
        ) {
          const r = e.liveConsumerIndexOfThis[t],
            o = e.liveConsumerNode[t];
          $a(o), (o.producerIndexOfThis[r] = t);
        }
      }
      function $i(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function $a(e) {
        (e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []);
      }
      function Xm(e) {
        (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
      }
      function Jm(e) {
        return void 0 !== e.producerNode;
      }
      const ud = Symbol('UNSET'),
        ld = Symbol('COMPUTING'),
        Ha = Symbol('ERRORED'),
        oA = {
          ...ja,
          value: ud,
          dirty: !0,
          error: null,
          equal: Bi,
          producerMustRecompute: e => e.value === ud || e.value === ld,
          producerRecomputeValue(e) {
            if (e.value === ld) throw new Error('Detected cycle in computations.');
            const t = e.value;
            e.value = ld;
            const n = Ua(e);
            let r;
            try {
              r = e.computation();
            } catch (o) {
              (r = Ha), (e.error = o);
            } finally {
              sd(e, n);
            }
            t !== ud && t !== Ha && r !== Ha && e.equal(t, r)
              ? (e.value = t)
              : ((e.value = r), e.version++);
          },
        };
      let ev = function iA() {
        throw new Error();
      };
      function tv() {
        ev();
      }
      let Ga = null;
      function nv(e, t) {
        Ym() || tv(),
          e.equal(e.value, t) ||
            ((e.value = t),
            (function lA(e) {
              e.version++,
                (function nA() {
                  po++;
                })(),
                Zm(e),
                Ga?.();
            })(e));
      }
      const uA = { ...ja, equal: Bi, value: void 0 };
      function Ee(e) {
        return 'function' == typeof e;
      }
      function dd(e) {
        const n = e(r => {
          Error.call(r), (r.stack = new Error().stack);
        });
        return (
          (n.prototype = Object.create(Error.prototype)), (n.prototype.constructor = n), n
        );
      }
      const fd = dd(
        e =>
          function (n) {
            e(this),
              (this.message = n
                ? `${n.length} errors occurred during unsubscription:\n${n
                    .map((r, o) => `${o + 1}) ${r.toString()}`)
                    .join('\n  ')}`
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = n);
          },
      );
      function za(e, t) {
        if (e) {
          const n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      class tt {
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
            if (Ee(r))
              try {
                r();
              } catch (i) {
                t = i instanceof fd ? i.errors : [i];
              }
            const { _finalizers: o } = this;
            if (o) {
              this._finalizers = null;
              for (const i of o)
                try {
                  sv(i);
                } catch (s) {
                  (t = t ?? []), s instanceof fd ? (t = [...t, ...s.errors]) : t.push(s);
                }
            }
            if (t) throw new fd(t);
          }
        }
        add(t) {
          var n;
          if (t && t !== this)
            if (this.closed) sv(t);
            else {
              if (t instanceof tt) {
                if (t.closed || t._hasParent(this)) return;
                t._addParent(this);
              }
              (this._finalizers =
                null !== (n = this._finalizers) && void 0 !== n ? n : []).push(t);
            }
        }
        _hasParent(t) {
          const { _parentage: n } = this;
          return n === t || (Array.isArray(n) && n.includes(t));
        }
        _addParent(t) {
          const { _parentage: n } = this;
          this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
        }
        _removeParent(t) {
          const { _parentage: n } = this;
          n === t ? (this._parentage = null) : Array.isArray(n) && za(n, t);
        }
        remove(t) {
          const { _finalizers: n } = this;
          n && za(n, t), t instanceof tt && t._removeParent(this);
        }
      }
      tt.EMPTY = (() => {
        const e = new tt();
        return (e.closed = !0), e;
      })();
      const ov = tt.EMPTY;
      function iv(e) {
        return (
          e instanceof tt ||
          (e && 'closed' in e && Ee(e.remove) && Ee(e.add) && Ee(e.unsubscribe))
        );
      }
      function sv(e) {
        Ee(e) ? e() : e.unsubscribe();
      }
      const Sr = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        qa = {
          setTimeout(e, t, ...n) {
            const { delegate: r } = qa;
            return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
          },
          clearTimeout(e) {
            const { delegate: t } = qa;
            return (t?.clearTimeout || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function av(e) {
        qa.setTimeout(() => {
          const { onUnhandledError: t } = Sr;
          if (!t) throw e;
          t(e);
        });
      }
      function Wa() {}
      const fA = hd('C', void 0, void 0);
      function hd(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      let Mr = null;
      function Za(e) {
        if (Sr.useDeprecatedSynchronousErrorHandling) {
          const t = !Mr;
          if ((t && (Mr = { errorThrown: !1, error: null }), e(), t)) {
            const { errorThrown: n, error: r } = Mr;
            if (((Mr = null), n)) throw r;
          }
        } else e();
      }
      class pd extends tt {
        constructor(t) {
          super(),
            (this.isStopped = !1),
            t ? ((this.destination = t), iv(t) && t.add(this)) : (this.destination = _A);
        }
        static create(t, n, r) {
          return new md(t, n, r);
        }
        next(t) {
          this.isStopped
            ? vd(
                (function pA(e) {
                  return hd('N', e, void 0);
                })(t),
                this,
              )
            : this._next(t);
        }
        error(t) {
          this.isStopped
            ? vd(
                (function hA(e) {
                  return hd('E', void 0, e);
                })(t),
                this,
              )
            : ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped ? vd(fA, this) : ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed ||
            ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
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
      const mA = Function.prototype.bind;
      function gd(e, t) {
        return mA.call(e, t);
      }
      class vA {
        constructor(t) {
          this.partialObserver = t;
        }
        next(t) {
          const { partialObserver: n } = this;
          if (n.next)
            try {
              n.next(t);
            } catch (r) {
              Ya(r);
            }
        }
        error(t) {
          const { partialObserver: n } = this;
          if (n.error)
            try {
              n.error(t);
            } catch (r) {
              Ya(r);
            }
          else Ya(t);
        }
        complete() {
          const { partialObserver: t } = this;
          if (t.complete)
            try {
              t.complete();
            } catch (n) {
              Ya(n);
            }
        }
      }
      class md extends pd {
        constructor(t, n, r) {
          let o;
          if ((super(), Ee(t) || !t))
            o = {
              next: t ?? void 0,
              error: n ?? void 0,
              complete: r ?? void 0,
            };
          else {
            let i;
            this && Sr.useDeprecatedNextContext
              ? ((i = Object.create(t)),
                (i.unsubscribe = () => this.unsubscribe()),
                (o = {
                  next: t.next && gd(t.next, i),
                  error: t.error && gd(t.error, i),
                  complete: t.complete && gd(t.complete, i),
                }))
              : (o = t);
          }
          this.destination = new vA(o);
        }
      }
      function Ya(e) {
        Sr.useDeprecatedSynchronousErrorHandling
          ? (function gA(e) {
              Sr.useDeprecatedSynchronousErrorHandling &&
                Mr &&
                ((Mr.errorThrown = !0), (Mr.error = e));
            })(e)
          : av(e);
      }
      function vd(e, t) {
        const { onStoppedNotification: n } = Sr;
        n && qa.setTimeout(() => n(e, t));
      }
      const _A = {
          closed: !0,
          next: Wa,
          error: function yA(e) {
            throw e;
          },
          complete: Wa,
        },
        yd = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function Fn(e) {
        return e;
      }
      function cv(e) {
        return 0 === e.length
          ? Fn
          : 1 === e.length
          ? e[0]
          : function (n) {
              return e.reduce((r, o) => o(r), n);
            };
      }
      let Re = (() => {
        class e {
          constructor(n) {
            n && (this._subscribe = n);
          }
          lift(n) {
            const r = new e();
            return (r.source = this), (r.operator = n), r;
          }
          subscribe(n, r, o) {
            const i = (function EA(e) {
              return (
                (e && e instanceof pd) ||
                ((function DA(e) {
                  return e && Ee(e.next) && Ee(e.error) && Ee(e.complete);
                })(e) &&
                  iv(e))
              );
            })(n)
              ? n
              : new md(n, r, o);
            return (
              Za(() => {
                const { operator: s, source: a } = this;
                i.add(s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i));
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
            return new (r = uv(r))((o, i) => {
              const s = new md({
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
            return null === (r = this.source) || void 0 === r ? void 0 : r.subscribe(n);
          }
          [yd]() {
            return this;
          }
          pipe(...n) {
            return cv(n)(this);
          }
          toPromise(n) {
            return new (n = uv(n))((r, o) => {
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
      function uv(e) {
        var t;
        return null !== (t = e ?? Sr.Promise) && void 0 !== t ? t : Promise;
      }
      const wA = dd(
        e =>
          function () {
            e(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          },
      );
      let at = (() => {
        class e extends Re {
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
            const r = new lv(this, this);
            return (r.operator = n), r;
          }
          _throwIfClosed() {
            if (this.closed) throw new wA();
          }
          next(n) {
            Za(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                this.currentObservers ||
                  (this.currentObservers = Array.from(this.observers));
                for (const r of this.currentObservers) r.next(n);
              }
            });
          }
          error(n) {
            Za(() => {
              if ((this._throwIfClosed(), !this.isStopped)) {
                (this.hasError = this.isStopped = !0), (this.thrownError = n);
                const { observers: r } = this;
                for (; r.length; ) r.shift().error(n);
              }
            });
          }
          complete() {
            Za(() => {
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
              (null === (n = this.observers) || void 0 === n ? void 0 : n.length) > 0
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
              ? ov
              : ((this.currentObservers = null),
                i.push(n),
                new tt(() => {
                  (this.currentObservers = null), za(i, n);
                }));
          }
          _checkFinalizedStatuses(n) {
            const { hasError: r, thrownError: o, isStopped: i } = this;
            r ? n.error(o) : i && n.complete();
          }
          asObservable() {
            const n = new Re();
            return (n.source = this), n;
          }
        }
        return (e.create = (t, n) => new lv(t, n)), e;
      })();
      class lv extends at {
        constructor(t, n) {
          super(), (this.destination = t), (this.source = n);
        }
        next(t) {
          var n, r;
          null ===
            (r = null === (n = this.destination) || void 0 === n ? void 0 : n.next) ||
            void 0 === r ||
            r.call(n, t);
        }
        error(t) {
          var n, r;
          null ===
            (r = null === (n = this.destination) || void 0 === n ? void 0 : n.error) ||
            void 0 === r ||
            r.call(n, t);
        }
        complete() {
          var t, n;
          null ===
            (n = null === (t = this.destination) || void 0 === t ? void 0 : t.complete) ||
            void 0 === n ||
            n.call(t);
        }
        _subscribe(t) {
          var n, r;
          return null !==
            (r = null === (n = this.source) || void 0 === n ? void 0 : n.subscribe(t)) &&
            void 0 !== r
            ? r
            : ov;
        }
      }
      class ct extends at {
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
      function dv(e) {
        return Ee(e?.lift);
      }
      function Le(e) {
        return t => {
          if (dv(t))
            return t.lift(function (n) {
              try {
                return e(n, this);
              } catch (r) {
                this.error(r);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
      function Ne(e, t, n, r, o) {
        return new bA(e, t, n, r, o);
      }
      class bA extends pd {
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
              !n && (null === (t = this.onFinalize) || void 0 === t || t.call(this));
          }
        }
      }
      function ne(e, t) {
        return Le((n, r) => {
          let o = 0;
          n.subscribe(
            Ne(r, i => {
              r.next(e.call(t, i, o++));
            }),
          );
        });
      }
      typeof navigator < 'u' && navigator,
        typeof navigator < 'u' && !/Opera/.test(navigator.userAgent) && navigator,
        typeof navigator < 'u' && (/MSIE/.test(navigator.userAgent) || navigator),
        typeof navigator < 'u' && !/Opera|WebKit/.test(navigator.userAgent) && navigator,
        typeof navigator < 'u' && navigator;
      const Rv = 'https://g.co/ng/security#xss';
      class D extends Error {
        constructor(t, n) {
          super(
            (function go(e, t) {
              return `NG0${Math.abs(e)}${t ? ': ' + t : ''}`;
            })(t, n),
          ),
            (this.code = t);
        }
      }
      function Pn(e) {
        return { toString: e }.toString();
      }
      const vo = '__parameters__';
      function _o(e, t, n) {
        return Pn(() => {
          const r = (function Sd(e) {
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
              const d = c.hasOwnProperty(vo)
                ? c[vo]
                : Object.defineProperty(c, vo, { value: [] })[vo];
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
      function ue(e) {
        for (let t in e) if (e[t] === ue) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function bN(e, t) {
        for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function He(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(He).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function Md(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const IN = ue({ __forward_ref__: ue });
      function ve(e) {
        return (
          (e.__forward_ref__ = ve),
          (e.toString = function () {
            return He(this());
          }),
          e
        );
      }
      function F(e) {
        return ec(e) ? e() : e;
      }
      function ec(e) {
        return 'function' == typeof e && e.hasOwnProperty(IN) && e.__forward_ref__ === ve;
      }
      function I(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Co(e) {
        return {
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function tc(e) {
        return Pv(e, rc) || Pv(e, kv);
      }
      function Pv(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function nc(e) {
        return e && (e.hasOwnProperty(Td) || e.hasOwnProperty(RN)) ? e[Td] : null;
      }
      const rc = ue({ ɵprov: ue }),
        Td = ue({ ɵinj: ue }),
        kv = ue({ ngInjectableDef: ue }),
        RN = ue({ ngInjectorDef: ue });
      class E {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = I({
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
      function Od(e) {
        return e && !!e.ɵproviders;
      }
      const Gi = ue({ ɵcmp: ue }),
        Fd = ue({ ɵdir: ue }),
        Pd = ue({ ɵpipe: ue }),
        Vv = ue({ ɵmod: ue }),
        kn = ue({ ɵfac: ue }),
        zi = ue({ __NG_ELEMENT_ID__: ue }),
        jv = ue({ __NG_ENV_ID__: ue });
      function U(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function kd(e, t) {
        throw new D(-201, !1);
      }
      var Q = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })(Q || {});
      let Ld;
      function Uv() {
        return Ld;
      }
      function Dt(e) {
        const t = Ld;
        return (Ld = e), t;
      }
      function Bv(e, t, n) {
        const r = tc(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & Q.Optional
          ? null
          : void 0 !== t
          ? t
          : void kd();
      }
      const qi = {},
        Vd = '__NG_DI_FLAG__',
        oc = 'ngTempTokenPath',
        LN = /\n/gm,
        $v = '__source';
      let Do;
      function er(e) {
        const t = Do;
        return (Do = e), t;
      }
      function UN(e, t = Q.Default) {
        if (void 0 === Do) throw new D(-203, !1);
        return null === Do
          ? Bv(e, void 0, t)
          : Do.get(e, t & Q.Optional ? null : void 0, t);
      }
      function M(e, t = Q.Default) {
        return (Uv() || UN)(F(e), t);
      }
      function _(e, t = Q.Default) {
        return M(e, ic(t));
      }
      function ic(e) {
        return typeof e > 'u' || 'number' == typeof e
          ? e
          : (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
      }
      function jd(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = F(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new D(900, !1);
            let o,
              i = Q.Default;
            for (let s = 0; s < r.length; s++) {
              const a = r[s],
                c = BN(a);
              'number' == typeof c ? (-1 === c ? (o = a.token) : (i |= c)) : (o = a);
            }
            t.push(M(o, i));
          } else t.push(M(r));
        }
        return t;
      }
      function Wi(e, t) {
        return (e[Vd] = t), (e.prototype[Vd] = t), e;
      }
      function BN(e) {
        return e[Vd];
      }
      const Gv = Wi(
          _o('Inject', e => ({ token: e })),
          -1,
        ),
        Ud = Wi(_o('Optional'), 8),
        Bd = Wi(_o('SkipSelf'), 4);
      function Ar(e, t) {
        return e.hasOwnProperty(kn) ? e[kn] : null;
      }
      function Eo(e, t) {
        e.forEach(n => (Array.isArray(n) ? Eo(n, t) : t(n)));
      }
      function zv(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function sc(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function xt(e, t, n) {
        let r = wo(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function qv(e, t, n, r) {
                let o = e.length;
                if (o == t) e.push(n, r);
                else if (1 === o) e.push(r, e[0]), (e[0] = n);
                else {
                  for (o--, e.push(e[o - 1], e[o]); o > t; ) (e[o] = e[o - 2]), o--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Hd(e, t) {
        const n = wo(e, t);
        if (n >= 0) return e[1 | n];
      }
      function wo(e, t) {
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
      const gn = {},
        re = [],
        Ot = new E(''),
        Zv = new E('', -1),
        Gd = new E('');
      class cc {
        get(t, n = qi) {
          if (n === qi) {
            const r = new Error(`NullInjectorError: No provider for ${He(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      var uc = (function (e) {
          return (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e;
        })(uc || {}),
        en = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })(en || {}),
        tr = (function (e) {
          return (
            (e[(e.None = 0)] = 'None'),
            (e[(e.SignalBased = 1)] = 'SignalBased'),
            (e[(e.HasDecoratorInputTransform = 2)] = 'HasDecoratorInputTransform'),
            e
          );
        })(tr || {});
      function WN(e, t, n) {
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
      function zd(e, t, n) {
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
            Qv(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
          }
        }
        return r;
      }
      function Yv(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Qv(e) {
        return 64 === e.charCodeAt(0);
      }
      function Zi(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              'number' == typeof o
                ? (n = o)
                : 0 === n || Kv(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
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
            if (null === r) return void (null !== o && (e[i + 1] = o));
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
      function ZN(e, t, n, r) {
        let o = 0;
        if (r) {
          for (; o < t.length && 'string' == typeof t[o]; o += 2)
            if ('class' === t[o] && -1 !== WN(t[o + 1].toLowerCase(), n, 0)) return !0;
        } else if (qd(e)) return !1;
        if (((o = t.indexOf(1, o)), o > -1)) {
          let i;
          for (; ++o < t.length && 'string' == typeof (i = t[o]); )
            if (i.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function qd(e) {
        return 4 === e.type && e.value !== Xv;
      }
      function YN(e, t, n) {
        return t === (4 !== e.type || n ? e.value : Xv);
      }
      function QN(e, t, n) {
        let r = 4;
        const o = e.attrs,
          i =
            null !== o
              ? (function JN(e) {
                  for (let t = 0; t < e.length; t++) if (Yv(e[t])) return t;
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
                  ('' !== c && !YN(e, c, n)) || ('' === c && 1 === t.length))
                ) {
                  if (tn(r)) return !1;
                  s = !0;
                }
              } else if (8 & r) {
                if (null === o || !ZN(e, o, c, n)) {
                  if (tn(r)) return !1;
                  s = !0;
                }
              } else {
                const u = t[++a],
                  l = KN(c, o, qd(e), n);
                if (-1 === l) {
                  if (tn(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== u) {
                  let d;
                  if (((d = l > i ? '' : o[l + 1].toLowerCase()), 2 & r && u !== d)) {
                    if (tn(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !tn(r) && !tn(c)) return !1;
            if (s && tn(c)) continue;
            (s = !1), (r = c | (1 & r));
          }
        }
        return tn(r) || s;
      }
      function tn(e) {
        return !(1 & e);
      }
      function KN(e, t, n, r) {
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
        return (function eR(e, t) {
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
        for (let r = 0; r < t.length; r++) if (QN(e, t[r], n)) return !0;
        return !1;
      }
      function tR(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function ey(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function nR(e) {
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
              o += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & r ? (o += '.' + s) : 4 & r && (o += ' ' + s);
          else
            '' !== o && !tn(s) && ((t += ey(i, o)), (o = '')), (r = s), (i = i || !tn(r));
          n++;
        }
        return '' !== o && (t += ey(i, o)), t;
      }
      function X(e) {
        return Pn(() => {
          const t = ny(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === uc.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || en.Emulated,
              styles: e.styles || re,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: '',
            };
          ry(n);
          const r = e.dependencies;
          return (
            (n.directiveDefs = lc(r, !1)),
            (n.pipeDefs = lc(r, !0)),
            (n.id = (function cR(e) {
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
              for (const o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) | 0;
              return (t += 2147483648), 'c' + t;
            })(n)),
            n
          );
        });
      }
      function iR(e) {
        return Z(e) || Ge(e);
      }
      function sR(e) {
        return null !== e;
      }
      function Yi(e) {
        return Pn(() => ({
          type: e.type,
          bootstrap: e.bootstrap || re,
          declarations: e.declarations || re,
          imports: e.imports || re,
          exports: e.exports || re,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function ty(e, t) {
        if (null == e) return gn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            const o = e[r];
            let i,
              s,
              a = tr.None;
            Array.isArray(o)
              ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
              : ((i = o), (s = o)),
              t ? ((n[i] = a !== tr.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
          }
        return n;
      }
      function V(e) {
        return Pn(() => {
          const t = ny(e);
          return ry(t), t;
        });
      }
      function Z(e) {
        return e[Gi] || null;
      }
      function Ge(e) {
        return e[Fd] || null;
      }
      function Xe(e) {
        return e[Pd] || null;
      }
      function nt(e, t) {
        const n = e[Vv] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${He(e)} does not have '\u0275mod' property.`);
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
          inputConfig: e.inputs || gn,
          exportAs: e.exportAs || null,
          standalone: !0 === e.standalone,
          signals: !0 === e.signals,
          selectors: e.selectors || re,
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
      function lc(e, t) {
        if (!e) return null;
        const n = t ? Xe : iR;
        return () => ('function' == typeof e ? e() : e).map(r => n(r)).filter(sR);
      }
      function bo(e) {
        return { ɵproviders: e };
      }
      function uR(...e) {
        return { ɵproviders: Wd(0, e), ɵfromNgModule: !0 };
      }
      function Wd(e, ...t) {
        const n = [],
          r = new Set();
        let o;
        const i = s => {
          n.push(s);
        };
        return (
          Eo(t, s => {
            const a = s;
            dc(a, i, [], r) && ((o ||= []), o.push(a));
          }),
          void 0 !== o && oy(o, i),
          n
        );
      }
      function oy(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: r, providers: o } = e[n];
          Zd(o, i => {
            t(i, r);
          });
        }
      }
      function dc(e, t, n, r) {
        if (!(e = F(e))) return !1;
        let o = null,
          i = nc(e);
        const s = !i && Z(e);
        if (i || s) {
          if (s && !s.standalone) return !1;
          o = e;
        } else {
          const c = e.ngModule;
          if (((i = nc(c)), !i)) return !1;
          o = c;
        }
        const a = r.has(o);
        if (s) {
          if (a) return !1;
          if ((r.add(o), s.dependencies)) {
            const c =
              'function' == typeof s.dependencies ? s.dependencies() : s.dependencies;
            for (const u of c) dc(u, t, n, r);
          }
        } else {
          if (!i) return !1;
          {
            if (null != i.imports && !a) {
              let u;
              r.add(o);
              try {
                Eo(i.imports, l => {
                  dc(l, t, n, r) && ((u ||= []), u.push(l));
                });
              } finally {
              }
              void 0 !== u && oy(u, t);
            }
            if (!a) {
              const u = Ar(o) || (() => new o());
              t({ provide: o, useFactory: u, deps: re }, o),
                t({ provide: Gd, useValue: o, multi: !0 }, o),
                t({ provide: Ot, useValue: () => M(o), multi: !0 }, o);
            }
            const c = i.providers;
            if (null != c && !a) {
              const u = e;
              Zd(c, l => {
                t(l, u);
              });
            }
          }
        }
        return o !== e && void 0 !== e.providers;
      }
      function Zd(e, t) {
        for (let n of e) Od(n) && (n = n.ɵproviders), Array.isArray(n) ? Zd(n, t) : t(n);
      }
      const lR = ue({ provide: String, useValue: ue });
      function Yd(e) {
        return null !== e && 'object' == typeof e && lR in e;
      }
      function Nr(e) {
        return 'function' == typeof e;
      }
      const Qd = new E(''),
        fc = {},
        fR = {};
      let Kd;
      function hc() {
        return void 0 === Kd && (Kd = new cc()), Kd;
      }
      class Ft {}
      class Io extends Ft {
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
            Jd(t, s => this.processProvider(s)),
            this.records.set(Zv, So(void 0, this)),
            o.has('environment') && this.records.set(Ft, So(void 0, this));
          const i = this.records.get(Qd);
          null != i && 'string' == typeof i.value && this.scopes.add(i.value),
            (this.injectorDefTypes = new Set(this.get(Gd, re, Q.Self)));
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          const t = z(null);
          try {
            for (const r of this._ngOnDestroyHooks) r.ngOnDestroy();
            const n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const r of n) r();
          } finally {
            this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              z(t);
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
          const n = er(this),
            r = Dt(void 0);
          try {
            return t();
          } finally {
            er(n), Dt(r);
          }
        }
        get(t, n = qi, r = Q.Default) {
          if ((this.assertNotDestroyed(), t.hasOwnProperty(jv))) return t[jv](this);
          r = ic(r);
          const i = er(this),
            s = Dt(void 0);
          try {
            if (!(r & Q.SkipSelf)) {
              let c = this.records.get(t);
              if (void 0 === c) {
                const u =
                  (function vR(e) {
                    return (
                      'function' == typeof e || ('object' == typeof e && e instanceof E)
                    );
                  })(t) && tc(t);
                (c = u && this.injectableDefInScope(u) ? So(Xd(t), fc) : null),
                  this.records.set(t, c);
              }
              if (null != c) return this.hydrate(t, c);
            }
            return (r & Q.Self ? hc() : this.parent).get(
              t,
              (n = r & Q.Optional && n === qi ? null : n),
            );
          } catch (a) {
            if ('NullInjectorError' === a.name) {
              if (((a[oc] = a[oc] || []).unshift(He(t)), i)) throw a;
              return (function $N(e, t, n, r) {
                const o = e[oc];
                throw (
                  (t[$v] && o.unshift(t[$v]),
                  (e.message = (function HN(e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let o = He(t);
                    if (Array.isArray(t)) o = t.map(He).join(' -> ');
                    else if ('object' == typeof t) {
                      let i = [];
                      for (let s in t)
                        if (t.hasOwnProperty(s)) {
                          let a = t[s];
                          i.push(
                            s + ':' + ('string' == typeof a ? JSON.stringify(a) : He(a)),
                          );
                        }
                      o = `{${i.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${o}]: ${e.replace(
                      LN,
                      '\n  ',
                    )}`;
                  })('\n' + e.message, o, n, r)),
                  (e.ngTokenPath = o),
                  (e[oc] = null),
                  e)
                );
              })(a, t, 'R3InjectorError', this.source);
            }
            throw a;
          } finally {
            Dt(s), er(i);
          }
        }
        resolveInjectorInitializers() {
          const t = z(null),
            n = er(this),
            r = Dt(void 0);
          try {
            const i = this.get(Ot, re, Q.Self);
            for (const s of i) s();
          } finally {
            er(n), Dt(r), z(t);
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const r of n.keys()) t.push(He(r));
          return `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new D(205, !1);
        }
        processProvider(t) {
          let n = Nr((t = F(t))) ? t : F(t && t.provide);
          const r = (function pR(e) {
            return Yd(e) ? So(void 0, e.useValue) : So(ay(e), fc);
          })(t);
          if (!Nr(t) && !0 === t.multi) {
            let o = this.records.get(n);
            o ||
              ((o = So(void 0, fc, !0)),
              (o.factory = () => jd(o.multi)),
              this.records.set(n, o)),
              (n = t),
              o.multi.push(t);
          }
          this.records.set(n, r);
        }
        hydrate(t, n) {
          const r = z(null);
          try {
            return (
              n.value === fc && ((n.value = fR), (n.value = n.factory())),
              'object' == typeof n.value &&
                n.value &&
                (function mR(e) {
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
            z(r);
          }
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = F(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function Xd(e) {
        const t = tc(e),
          n = null !== t ? t.factory : Ar(e);
        if (null !== n) return n;
        if (e instanceof E) throw new D(204, !1);
        if (e instanceof Function)
          return (function hR(e) {
            if (e.length > 0) throw new D(204, !1);
            const n = (function NN(e) {
              return (e && (e[rc] || e[kv])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new D(204, !1);
      }
      function ay(e, t, n) {
        let r;
        if (Nr(e)) {
          const o = F(e);
          return Ar(o) || Xd(o);
        }
        if (Yd(e)) r = () => F(e.useValue);
        else if (
          (function sy(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          r = () => e.useFactory(...jd(e.deps || []));
        else if (
          (function iy(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          r = () => M(F(e.useExisting));
        else {
          const o = F(e && (e.useClass || e.provide));
          if (
            !(function gR(e) {
              return !!e.deps;
            })(e)
          )
            return Ar(o) || Xd(o);
          r = () => new o(...jd(e.deps));
        }
        return r;
      }
      function So(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Jd(e, t) {
        for (const n of e)
          Array.isArray(n) ? Jd(n, t) : n && Od(n) ? Jd(n.ɵproviders, t) : t(n);
      }
      function rr(e, t) {
        e instanceof Io && e.assertNotDestroyed();
        const r = er(e),
          o = Dt(void 0);
        try {
          return t();
        } finally {
          er(r), Dt(o);
        }
      }
      function cy() {
        return (
          void 0 !== Uv() ||
          null !=
            (function jN() {
              return Do;
            })()
        );
      }
      const Me = 0,
        b = 1,
        N = 2,
        je = 3,
        nn = 4,
        Je = 5,
        ut = 6,
        To = 7,
        ye = 8,
        Ue = 9,
        mn = 10,
        P = 11,
        Ki = 12,
        ly = 13,
        Ao = 14,
        Te = 15,
        Rr = 16,
        No = 17,
        Ln = 18,
        Ro = 19,
        dy = 20,
        or = 21,
        mc = 22,
        Gt = 23,
        T = 25,
        tf = 1,
        vn = 7,
        xo = 9,
        Oe = 10;
      var yc = (function (e) {
        return (
          (e[(e.None = 0)] = 'None'),
          (e[(e.HasTransplantedViews = 2)] = 'HasTransplantedViews'),
          e
        );
      })(yc || {});
      function qe(e) {
        return Array.isArray(e) && 'object' == typeof e[tf];
      }
      function rt(e) {
        return Array.isArray(e) && !0 === e[tf];
      }
      function nf(e) {
        return !!(4 & e.flags);
      }
      function xr(e) {
        return e.componentOffset > -1;
      }
      function _c(e) {
        return !(1 & ~e.flags);
      }
      function rn(e) {
        return !!e.template;
      }
      function Ji(e) {
        return !!(512 & e[N]);
      }
      class AR {
        constructor(t, n, r) {
          (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function my(e, t, n, r) {
        null !== t ? t.applyValueToInputSignal(t, r) : (e[n] = r);
      }
      function zt() {
        return vy;
      }
      function vy(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = RR), NR;
      }
      function NR() {
        const e = _y(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === gn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function RR(e, t, n, r, o) {
        const i = this.declaredInputs[r],
          s =
            _y(e) ||
            (function xR(e, t) {
              return (e[yy] = t);
            })(e, { previous: gn, current: null }),
          a = s.current || (s.current = {}),
          c = s.previous,
          u = c[i];
        (a[i] = new AR(u && u.currentValue, n, c === gn)), my(e, t, o, n);
      }
      zt.ngInherit = !0;
      const yy = '__ngSimpleChanges__';
      function _y(e) {
        return e[yy] || null;
      }
      const yn = function (e, t, n) {};
      function oe(e) {
        for (; Array.isArray(e); ) e = e[Me];
        return e;
      }
      function es(e, t) {
        return oe(t[e]);
      }
      function lt(e, t) {
        return oe(t[e.index]);
      }
      function ts(e, t) {
        return e.data[t];
      }
      function Pt(e, t) {
        const n = t[e];
        return qe(n) ? n : n[Me];
      }
      function uf(e) {
        return !(128 & ~e[N]);
      }
      function qt(e, t) {
        return null == t ? null : e[t];
      }
      function Ey(e) {
        e[No] = 0;
      }
      function wy(e) {
        1024 & e[N] || ((e[N] |= 1024), uf(e) && Dc(e));
      }
      function Cc(e) {
        return !!(9216 & e[N] || e[Gt]?.dirty);
      }
      function lf(e) {
        e[mn].changeDetectionScheduler?.notify(8),
          64 & e[N] && (e[N] |= 1024),
          Cc(e) && Dc(e);
      }
      function Dc(e) {
        e[mn].changeDetectionScheduler?.notify(0);
        let t = Vn(e);
        for (; null !== t && !(8192 & t[N]) && ((t[N] |= 8192), uf(t)); ) t = Vn(t);
      }
      function Ec(e, t) {
        if (!(256 & ~e[N])) throw new D(911, !1);
        null === e[or] && (e[or] = []), e[or].push(t);
      }
      function Vn(e) {
        const t = e[je];
        return rt(t) ? t[je] : t;
      }
      const k = {
        lFrame: ky(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      let Iy = !1;
      function Sy() {
        return k.bindingsEnabled;
      }
      function Fr() {
        return null !== k.skipHydrationRootTNode;
      }
      function v() {
        return k.lFrame.lView;
      }
      function q() {
        return k.lFrame.tView;
      }
      function bt(e) {
        return (k.lFrame.contextLView = e), e[ye];
      }
      function It(e) {
        return (k.lFrame.contextLView = null), e;
      }
      function le() {
        let e = My();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function My() {
        return k.lFrame.currentTNode;
      }
      function on(e, t) {
        const n = k.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function hf() {
        return k.lFrame.isParent;
      }
      function pf() {
        k.lFrame.isParent = !1;
      }
      function Ny() {
        return Iy;
      }
      function Ry(e) {
        Iy = e;
      }
      function sn() {
        return k.lFrame.bindingIndex++;
      }
      function qR(e, t) {
        const n = k.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), gf(t);
      }
      function gf(e) {
        k.lFrame.currentDirectiveIndex = e;
      }
      function vf() {
        return k.lFrame.currentQueryIndex;
      }
      function bc(e) {
        k.lFrame.currentQueryIndex = e;
      }
      function ZR(e) {
        const t = e[b];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[Je] : null;
      }
      function Fy(e, t, n) {
        if (n & Q.SkipSelf) {
          let o = t,
            i = e;
          for (
            ;
            !((o = o.parent),
            null !== o ||
              n & Q.Host ||
              ((o = ZR(i)), null === o || ((i = i[Ao]), 10 & o.type)));

          );
          if (null === o) return !1;
          (t = o), (e = i);
        }
        const r = (k.lFrame = Py());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function yf(e) {
        const t = Py(),
          n = e[b];
        (k.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Py() {
        const e = k.lFrame,
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
      function Ly() {
        const e = k.lFrame;
        return (k.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const Vy = Ly;
      function _f() {
        const e = Ly();
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
      function et() {
        return k.lFrame.selectedIndex;
      }
      function Pr(e) {
        k.lFrame.selectedIndex = e;
      }
      function _e() {
        const e = k.lFrame;
        return ts(e.tView, e.selectedIndex);
      }
      let Uy = !0;
      function rs() {
        return Uy;
      }
      function _n(e) {
        Uy = e;
      }
      function Ic(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
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
            u && ((e.viewHooks ??= []).push(n, u), (e.viewCheckHooks ??= []).push(n, u)),
            null != l && (e.destroyHooks ??= []).push(n, l);
        }
      }
      function Sc(e, t, n) {
        By(e, t, 3, n);
      }
      function Mc(e, t, n, r) {
        (3 & e[N]) === n && By(e, t, n, r);
      }
      function Cf(e, t) {
        let n = e[N];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[N] = n));
      }
      function By(e, t, n, r) {
        const i = r ?? -1,
          s = t.length - 1;
        let a = 0;
        for (let c = void 0 !== r ? 65535 & e[No] : 0; c < s; c++)
          if ('number' == typeof t[c + 1]) {
            if (((a = t[c]), null != r && a >= r)) break;
          } else
            t[c] < 0 && (e[No] += 65536),
              (a < i || -1 == i) &&
                (tx(e, n, t, c), (e[No] = (4294901760 & e[No]) + c + 2)),
              c++;
      }
      function $y(e, t) {
        yn(4, e, t);
        const n = z(null);
        try {
          t.call(e);
        } finally {
          z(n), yn(5, e, t);
        }
      }
      function tx(e, t, n, r) {
        const o = n[r] < 0,
          i = n[r + 1],
          a = e[o ? -n[r] : n[r]];
        o
          ? e[N] >> 14 < e[No] >> 16 && (3 & e[N]) === t && ((e[N] += 16384), $y(a, i))
          : $y(a, i);
      }
      const Oo = -1;
      class os {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      const Ef = {};
      class kr {
        constructor(t, n) {
          (this.injector = t), (this.parentInjector = n);
        }
        get(t, n, r) {
          r = ic(r);
          const o = this.injector.get(t, Ef, r);
          return o !== Ef || n === Ef ? o : this.parentInjector.get(t, n, r);
        }
      }
      function wf(e) {
        return e !== Oo;
      }
      function is(e) {
        return 32767 & e;
      }
      function ss(e, t) {
        let n = (function ix(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[Ao]), n--;
        return r;
      }
      let bf = !0;
      function Tc(e) {
        const t = bf;
        return (bf = e), t;
      }
      const Gy = 255,
        zy = 5;
      let ax = 0;
      const Cn = {};
      function Ac(e, t) {
        const n = qy(e, t);
        if (-1 !== n) return n;
        const r = t[b];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          If(r.data, e),
          If(t, null),
          If(r.blueprint, null));
        const o = Nc(e, t),
          i = e.injectorIndex;
        if (wf(o)) {
          const s = is(o),
            a = ss(o, t),
            c = a[b].data;
          for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | c[s + u];
        }
        return (t[i + 8] = o), i;
      }
      function If(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function qy(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Nc(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let n = 0,
          r = null,
          o = t;
        for (; null !== o; ) {
          if (((r = Jy(o)), null === r)) return Oo;
          if ((n++, (o = o[Ao]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return Oo;
      }
      function Sf(e, t, n) {
        !(function cx(e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(zi) && (r = n[zi]),
            null == r && (r = n[zi] = ax++);
          const o = r & Gy;
          t.data[e + (o >> zy)] |= 1 << o;
        })(e, t, n);
      }
      function Wy(e, t, n) {
        if (n & Q.Optional || void 0 !== e) return e;
        kd();
      }
      function Zy(e, t, n, r) {
        if ((n & Q.Optional && void 0 === r && (r = null), !(n & (Q.Self | Q.Host)))) {
          const o = e[Ue],
            i = Dt(void 0);
          try {
            return o ? o.get(t, r, n & Q.Optional) : Bv(t, r, n & Q.Optional);
          } finally {
            Dt(i);
          }
        }
        return Wy(r, 0, n);
      }
      function Yy(e, t, n, r = Q.Default, o) {
        if (null !== e) {
          if (2048 & t[N] && !(r & Q.Self)) {
            const s = (function hx(e, t, n, r, o) {
              let i = e,
                s = t;
              for (; null !== i && null !== s && 2048 & s[N] && !(512 & s[N]); ) {
                const a = Qy(i, s, n, r | Q.Self, Cn);
                if (a !== Cn) return a;
                let c = i.parent;
                if (!c) {
                  const u = s[dy];
                  if (u) {
                    const l = u.get(n, Cn, r);
                    if (l !== Cn) return l;
                  }
                  (c = Jy(s)), (s = s[Ao]);
                }
                i = c;
              }
              return o;
            })(e, t, n, r, Cn);
            if (s !== Cn) return s;
          }
          const i = Qy(e, t, n, r, Cn);
          if (i !== Cn) return i;
        }
        return Zy(t, n, r, o);
      }
      function Qy(e, t, n, r, o) {
        const i = (function dx(e) {
          if ('string' == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(zi) ? e[zi] : void 0;
          return 'number' == typeof t ? (t >= 0 ? t & Gy : fx) : t;
        })(n);
        if ('function' == typeof i) {
          if (!Fy(t, e, r)) return r & Q.Host ? Wy(o, 0, r) : Zy(t, n, r, o);
          try {
            let s;
            if (((s = i(r)), null != s || r & Q.Optional)) return s;
            kd();
          } finally {
            Vy();
          }
        } else if ('number' == typeof i) {
          let s = null,
            a = qy(e, t),
            c = Oo,
            u = r & Q.Host ? t[Te][Je] : null;
          for (
            (-1 === a || r & Q.SkipSelf) &&
            ((c = -1 === a ? Nc(e, t) : t[a + 8]),
            c !== Oo && Xy(r, !1) ? ((s = t[b]), (a = is(c)), (t = ss(c, t))) : (a = -1));
            -1 !== a;

          ) {
            const l = t[b];
            if (Ky(i, a, l.data)) {
              const d = lx(a, t, n, s, r, u);
              if (d !== Cn) return d;
            }
            (c = t[a + 8]),
              c !== Oo && Xy(r, t[b].data[a + 8] === u) && Ky(i, a, t)
                ? ((s = l), (a = is(c)), (t = ss(c, t)))
                : (a = -1);
          }
        }
        return o;
      }
      function lx(e, t, n, r, o, i) {
        const s = t[b],
          a = s.data[e + 8],
          l = Rc(
            a,
            s,
            n,
            null == r ? xr(a) && bf : r != s && !!(3 & a.type),
            o & Q.Host && i === a,
          );
        return null !== l ? Lr(t, s, l, a) : Cn;
      }
      function Rc(e, t, n, r, o) {
        const i = e.providerIndexes,
          s = t.data,
          a = 1048575 & i,
          c = e.directiveStart,
          l = i >> 20,
          f = o ? a + l : e.directiveEnd;
        for (let h = r ? a : a + l; h < f; h++) {
          const p = s[h];
          if ((h < c && n === p) || (h >= c && p.type === n)) return h;
        }
        if (o) {
          const h = s[c];
          if (h && rn(h) && h.type === n) return c;
        }
        return null;
      }
      function Lr(e, t, n, r) {
        let o = e[n];
        const i = t.data;
        if (
          (function nx(e) {
            return e instanceof os;
          })(o)
        ) {
          const s = o;
          s.resolving &&
            (function FN(e, t) {
              throw (t && t.join(' > '), new D(-200, e));
            })(
              (function ie(e) {
                return 'function' == typeof e
                  ? e.name || e.toString()
                  : 'object' == typeof e && null != e && 'function' == typeof e.type
                  ? e.type.name || e.type.toString()
                  : U(e);
              })(i[n]),
            );
          const a = Tc(s.canSeeViewProviders);
          s.resolving = !0;
          const u = s.injectImpl ? Dt(s.injectImpl) : null;
          Fy(e, r, Q.Default);
          try {
            (o = e[n] = s.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function ex(e, t, n) {
                  const { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
                  if (r) {
                    const s = vy(t);
                    (n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s);
                  }
                  o && (n.preOrderHooks ??= []).push(0 - e, o),
                    i &&
                      ((n.preOrderHooks ??= []).push(e, i),
                      (n.preOrderCheckHooks ??= []).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== u && Dt(u), Tc(a), (s.resolving = !1), Vy();
          }
        }
        return o;
      }
      function Ky(e, t, n) {
        return !!(n[t + (e >> zy)] & (1 << e));
      }
      function Xy(e, t) {
        return !(e & Q.Self || (e & Q.Host && t));
      }
      class We {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return Yy(this._tNode, this._lView, t, ic(r), n);
        }
      }
      function fx() {
        return new We(le(), v());
      }
      function Ze(e) {
        return Pn(() => {
          const t = e.prototype.constructor,
            n = t[kn] || Mf(t),
            r = Object.prototype;
          let o = Object.getPrototypeOf(e.prototype).constructor;
          for (; o && o !== r; ) {
            const i = o[kn] || Mf(o);
            if (i && i !== n) return i;
            o = Object.getPrototypeOf(o);
          }
          return i => new i();
        });
      }
      function Mf(e) {
        return ec(e)
          ? () => {
              const t = Mf(F(e));
              return t && t();
            }
          : Ar(e);
      }
      function Jy(e) {
        const t = e[b],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[Je] : null;
      }
      function o_(e, t = null, n = null, r) {
        const o = i_(e, t, n, r);
        return o.resolveInjectorInitializers(), o;
      }
      function i_(e, t = null, n = null, r, o = new Set()) {
        const i = [n || re, uR(e)];
        return (
          (r = r || ('object' == typeof e ? void 0 : He(e))),
          new Io(i, t || hc(), r || null, o)
        );
      }
      class Ke {
        static #e = (this.THROW_IF_NOT_FOUND = qi);
        static #t = (this.NULL = new cc());
        static create(t, n) {
          if (Array.isArray(t)) return o_({ name: '' }, n, t, '');
          {
            const r = t.name ?? '';
            return o_({ name: r }, t.parent, t.providers, r);
          }
        }
        static #n = (this.ɵprov = I({
          token: Ke,
          providedIn: 'any',
          factory: () => M(Zv),
        }));
        static #r = (this.__NG_ELEMENT_ID__ = -1);
      }
      new E('').__NG_ELEMENT_ID__ = e => {
        const t = le();
        if (null === t) throw new D(204, !1);
        if (2 & t.type) return t.value;
        if (e & Q.Optional) return null;
        throw new D(204, !1);
      };
      function Af(e) {
        return e.ngOriginalError;
      }
      const a_ = !0;
      let Vr = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = wx);
          static #t = (this.__NG_ENV_ID__ = n => n);
        }
        return e;
      })();
      class Ex extends Vr {
        constructor(t) {
          super(), (this._lView = t);
        }
        onDestroy(t) {
          return (
            Ec(this._lView, t),
            () =>
              (function df(e, t) {
                if (null === e[or]) return;
                const n = e[or].indexOf(t);
                -1 !== n && e[or].splice(n, 1);
              })(this._lView, t)
          );
        }
      }
      function wx() {
        return new Ex(v());
      }
      let jr = (() => {
        class e {
          constructor() {
            (this.taskId = 0),
              (this.pendingTasks = new Set()),
              (this.hasPendingTasks = new ct(!1));
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
          static #e = (this.ɵprov = I({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      const W = class bx extends at {
        constructor(t = !1) {
          super(),
            (this.destroyRef = void 0),
            (this.pendingTasks = void 0),
            (this.__isAsync = t),
            cy() &&
              ((this.destroyRef = _(Vr, { optional: !0 }) ?? void 0),
              (this.pendingTasks = _(jr, { optional: !0 }) ?? void 0));
        }
        emit(t) {
          const n = z(null);
          try {
            super.next(t);
          } finally {
            z(n);
          }
        }
        subscribe(t, n, r) {
          let o = t,
            i = n || (() => null),
            s = r;
          if (t && 'object' == typeof t) {
            const c = t;
            (o = c.next?.bind(c)), (i = c.error?.bind(c)), (s = c.complete?.bind(c));
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
          return t instanceof tt && t.add(a), a;
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
      function Oc(...e) {}
      function c_(e) {
        let t, n;
        function r() {
          e = Oc;
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
      function u_(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = Oc;
          }
        );
      }
      const Nf = 'isAngularZone',
        Fc = Nf + '_ID';
      let Ix = 0;
      class se {
        constructor(t) {
          (this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new W(!1)),
            (this.onMicrotaskEmpty = new W(!1)),
            (this.onStable = new W(!1)),
            (this.onError = new W(!1));
          const {
            enableLongStackTrace: n = !1,
            shouldCoalesceEventChangeDetection: r = !1,
            shouldCoalesceRunChangeDetection: o = !1,
            scheduleInRootZone: i = a_,
          } = t;
          if (typeof Zone > 'u') throw new D(908, !1);
          Zone.assertZonePatched();
          const s = this;
          (s._nesting = 0),
            (s._outer = s._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n &&
              Zone.longStackTraceZoneSpec &&
              (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
            (s.shouldCoalesceEventChangeDetection = !o && r),
            (s.shouldCoalesceRunChangeDetection = o),
            (s.callbackScheduled = !1),
            (s.scheduleInRootZone = i),
            (function Tx(e) {
              const t = () => {
                  !(function Mx(e) {
                    function t() {
                      c_(() => {
                        (e.callbackScheduled = !1),
                          xf(e),
                          (e.isCheckStableRunning = !0),
                          Rf(e),
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
                      xf(e));
                  })(e);
                },
                n = Ix++;
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { [Nf]: !0, [Fc]: n, [Fc + n]: !0 },
                onInvokeTask: (r, o, i, s, a, c) => {
                  if (
                    (function Ax(e) {
                      return f_(e, '__ignore_ng_zone__');
                    })(c)
                  )
                    return r.invokeTask(i, s, a, c);
                  try {
                    return l_(e), r.invokeTask(i, s, a, c);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === s.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      d_(e);
                  }
                },
                onInvoke: (r, o, i, s, a, c, u) => {
                  try {
                    return l_(e), r.invoke(i, s, a, c, u);
                  } finally {
                    e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function Nx(e) {
                        return f_(e, '__scheduler_tick__');
                      })(c) &&
                      t(),
                      d_(e);
                  }
                },
                onHasTask: (r, o, i, s) => {
                  r.hasTask(i, s),
                    o === i &&
                      ('microTask' == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask), xf(e), Rf(e))
                        : 'macroTask' == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (r, o, i, s) => (
                  r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
                ),
              });
            })(s);
        }
        static isInAngularZone() {
          return typeof Zone < 'u' && !0 === Zone.current.get(Nf);
        }
        static assertInAngularZone() {
          if (!se.isInAngularZone()) throw new D(909, !1);
        }
        static assertNotInAngularZone() {
          if (se.isInAngularZone()) throw new D(909, !1);
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, o) {
          const i = this._inner,
            s = i.scheduleEventTask('NgZoneEvent: ' + o, t, Sx, Oc, Oc);
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
      const Sx = {};
      function Rf(e) {
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
      function xf(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function l_(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function d_(e) {
        e._nesting--, Rf(e);
      }
      class Of {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new W()),
            (this.onMicrotaskEmpty = new W()),
            (this.onStable = new W()),
            (this.onError = new W());
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
      function f_(e, t) {
        return !(!Array.isArray(e) || 1 !== e.length) && !0 === e[0]?.data?.[t];
      }
      class Dn {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t);
          this._console.error('ERROR', t), n && this._console.error('ORIGINAL ERROR', n);
        }
        _findOriginalError(t) {
          let n = t && Af(t);
          for (; n && Af(n); ) n = Af(n);
          return n || null;
        }
      }
      const xx = new E('', {
        providedIn: 'root',
        factory: () => {
          const e = _(se),
            t = _(Dn);
          return n => e.runOutsideAngular(() => t.handleError(n));
        },
      });
      function Ox() {
        return ko(le(), v());
      }
      function ko(e, t) {
        return new kt(lt(e, t));
      }
      let kt = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
          static #e = (this.__NG_ELEMENT_ID__ = Ox);
        }
        return e;
      })();
      function p_(e) {
        return e instanceof kt ? e.nativeElement : e;
      }
      function Fx() {
        return this._results[Symbol.iterator]();
      }
      class Ff {
        static #e = Symbol.iterator;
        get changes() {
          return (this._changes ??= new W());
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
          const n = Ff.prototype;
          n[Symbol.iterator] || (n[Symbol.iterator] = Fx);
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
          const r = (function Et(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function qN(e, t, n) {
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
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
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
      function us(e) {
        return !(128 & ~e.flags);
      }
      const kf = new Map();
      let kx = 0;
      function Lf(e) {
        kf.delete(e[Ro]);
      }
      const Pc = '__ngContext__';
      function ot(e, t) {
        qe(t)
          ? ((e[Pc] = t[Ro]),
            (function Vx(e) {
              kf.set(e[Ro], e);
            })(t))
          : (e[Pc] = t);
      }
      function b_(e) {
        return S_(e[Ki]);
      }
      function I_(e) {
        return S_(e[nn]);
      }
      function S_(e) {
        for (; null !== e && !rt(e); ) e = e[nn];
        return e;
      }
      let jf;
      const ds = new E('', { providedIn: 'root', factory: () => tO }),
        tO = 'ng',
        F_ = new E(''),
        Bn = new E('', {
          providedIn: 'platform',
          factory: () => 'unknown',
        }),
        Uf = new E('', {
          providedIn: 'root',
          factory: () =>
            (function ir() {
              if (void 0 !== jf) return jf;
              if (typeof document < 'u') return document;
              throw new D(210, !1);
            })()
              .body?.querySelector('[ngCspNonce]')
              ?.getAttribute('ngCspNonce') || null,
        });
      let P_ = () => null;
      function Wf(e, t, n = !1) {
        return P_(e, t, n);
      }
      const H_ = new E('', { providedIn: 'root', factory: () => !1 });
      let zc;
      function Z_(e) {
        return (
          (function Jf() {
            if (void 0 === zc && ((zc = null), we.trustedTypes))
              try {
                zc = we.trustedTypes.createPolicy('angular#unsafe-bypass', {
                  createHTML: e => e,
                  createScript: e => e,
                  createScriptURL: e => e,
                });
              } catch {}
            return zc;
          })()?.createScriptURL(e) || e
        );
      }
      class Y_ {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Rv})`;
        }
      }
      function sr(e) {
        return e instanceof Y_ ? e.changingThisBreaksApplicationSecurity : e;
      }
      function vs(e, t) {
        const n = (function CO(e) {
          return (e instanceof Y_ && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${Rv})`);
        }
        return n === t;
      }
      const bO = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      var Bo = (function (e) {
        return (
          (e[(e.NONE = 0)] = 'NONE'),
          (e[(e.HTML = 1)] = 'HTML'),
          (e[(e.STYLE = 2)] = 'STYLE'),
          (e[(e.SCRIPT = 3)] = 'SCRIPT'),
          (e[(e.URL = 4)] = 'URL'),
          (e[(e.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
          e
        );
      })(Bo || {});
      function oh(e) {
        const t = _s();
        return t
          ? t.sanitize(Bo.URL, e) || ''
          : vs(e, 'URL')
          ? sr(e)
          : (function eh(e) {
              return (e = String(e)).match(bO) ? e : 'unsafe:' + e;
            })(U(e));
      }
      function oC(e) {
        const t = _s();
        if (t) return Z_(t.sanitize(Bo.RESOURCE_URL, e) || '');
        if (vs(e, 'ResourceURL')) return Z_(sr(e));
        throw new D(904, !1);
      }
      function _s() {
        const e = v();
        return e && e[mn].sanitizer;
      }
      const UO = /^>|^->|<!--|-->|--!>|<!-$/g,
        BO = /(<|>)/g,
        $O = '\u200b$1\u200b';
      function Lt(e) {
        return e instanceof Function ? e() : e;
      }
      var ar = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'), (e[(e.DashCase = 2)] = 'DashCase'), e
        );
      })(ar || {});
      let ah;
      function ch(e, t) {
        return ah(e, t);
      }
      function Ho(e, t, n, r, o) {
        if (null != r) {
          let i,
            s = !1;
          rt(r) ? (i = r) : qe(r) && ((s = !0), (r = r[Me]));
          const a = oe(r);
          0 === e && null !== n
            ? null == o
              ? yC(t, n, a)
              : Br(t, n, a, o || null, !0)
            : 1 === e && null !== n
            ? Br(t, n, a, o || null, !0)
            : 2 === e
            ? (function Ds(e, t, n) {
                e.removeChild(null, t, n);
              })(t, a, s)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function cF(e, t, n, r, o) {
                const i = n[vn];
                i !== oe(n) && Ho(t, e, r, i, o);
                for (let a = Oe; a < n.length; a++) {
                  const c = n[a];
                  Xc(c[b], c, e, t, r, i);
                }
              })(t, e, i, n, o);
        }
      }
      function lh(e, t) {
        return e.createComment(
          (function sC(e) {
            return e.replace(UO, t => t.replace(BO, $O));
          })(t),
        );
      }
      function Yc(e, t, n) {
        return e.createElement(t, n);
      }
      function gC(e, t) {
        t[mn].changeDetectionScheduler?.notify(9), Xc(e, t, t[P], 2, null, null);
      }
      function mC(e, t) {
        const n = e[xo],
          r = t[je];
        (qe(r) || t[Te] !== r[je][Te]) && (e[N] |= yc.HasTransplantedViews),
          null === n ? (e[xo] = [t]) : n.push(t);
      }
      function dh(e, t) {
        const n = e[xo],
          r = n.indexOf(t);
        n.splice(r, 1);
      }
      function Cs(e, t) {
        if (e.length <= Oe) return;
        const n = Oe + t,
          r = e[n];
        if (r) {
          const o = r[Rr];
          null !== o && o !== e && dh(o, r), t > 0 && (e[n - 1][nn] = r[nn]);
          const i = sc(e, Oe + t);
          !(function eF(e, t) {
            gC(e, t), (t[Me] = null), (t[Je] = null);
          })(r[b], r);
          const s = i[Ln];
          null !== s && s.detachView(i[b]),
            (r[je] = null),
            (r[nn] = null),
            (r[N] &= -129);
        }
        return r;
      }
      function Qc(e, t) {
        if (!(256 & t[N])) {
          const n = t[P];
          n.destroyNode && Xc(e, t, n, 3, null, null),
            (function nF(e) {
              let t = e[Ki];
              if (!t) return fh(e[b], e);
              for (; t; ) {
                let n = null;
                if (qe(t)) n = t[Ki];
                else {
                  const r = t[Oe];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[nn] && t !== e; ) qe(t) && fh(t[b], t), (t = t[je]);
                  null === t && (t = e), qe(t) && fh(t[b], t), (n = t && t[nn]);
                }
                t = n;
              }
            })(t);
        }
      }
      function fh(e, t) {
        if (256 & t[N]) return;
        const n = z(null);
        try {
          (t[N] &= -129),
            (t[N] |= 256),
            t[Gt] && cd(t[Gt]),
            (function iF(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const o = t[n[r]];
                  if (!(o instanceof os)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let s = 0; s < i.length; s += 2) {
                        const a = o[i[s]],
                          c = i[s + 1];
                        yn(4, a, c);
                        try {
                          c.call(a);
                        } finally {
                          yn(5, a, c);
                        }
                      }
                    else {
                      yn(4, o, i);
                      try {
                        i.call(o);
                      } finally {
                        yn(5, o, i);
                      }
                    }
                  }
                }
            })(e, t),
            (function oF(e, t) {
              const n = e.cleanup,
                r = t[To];
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    const s = n[i + 3];
                    s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
                  } else n[i].call(r[n[i + 1]]);
              null !== r && (t[To] = null);
              const o = t[or];
              if (null !== o) {
                t[or] = null;
                for (let i = 0; i < o.length; i++) (0, o[i])();
              }
            })(e, t),
            1 === t[b].type && t[P].destroy();
          const r = t[Rr];
          if (null !== r && rt(t[je])) {
            r !== t[je] && dh(r, t);
            const o = t[Ln];
            null !== o && o.detachView(e);
          }
          Lf(t);
        } finally {
          z(n);
        }
      }
      function hh(e, t, n) {
        return (function vC(e, t, n) {
          let r = t;
          for (; null !== r && 168 & r.type; ) r = (t = r).parent;
          if (null === r) return n[Me];
          {
            const { componentOffset: o } = r;
            if (o > -1) {
              const { encapsulation: i } = e.data[r.directiveStart + o];
              if (i === en.None || i === en.Emulated) return null;
            }
            return lt(r, n);
          }
        })(e, t.parent, n);
      }
      function Br(e, t, n, r, o) {
        e.insertBefore(t, n, r, o);
      }
      function yC(e, t, n) {
        e.appendChild(t, n);
      }
      function _C(e, t, n, r, o) {
        null !== r ? Br(e, t, n, r, o) : yC(e, t, n);
      }
      function ph(e, t) {
        return e.parentNode(t);
      }
      function CC(e, t, n) {
        return EC(e, t, n);
      }
      let gh,
        EC = function DC(e, t, n) {
          return 40 & e.type ? lt(e, n) : null;
        };
      function Kc(e, t, n, r) {
        const o = hh(e, r, t),
          i = t[P],
          a = CC(r.parent || t[Je], r, t);
        if (null != o)
          if (Array.isArray(n)) for (let c = 0; c < n.length; c++) _C(i, o, n[c], a, !1);
          else _C(i, o, n, a, !1);
        void 0 !== gh && gh(i, r, t, n, o);
      }
      function $r(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return lt(t, e);
          if (4 & n) return mh(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return $r(e, r);
            {
              const o = e[t.index];
              return rt(o) ? mh(-1, o) : oe(o);
            }
          }
          if (128 & n) return $r(e, t.next);
          if (32 & n) return ch(t, e)() || oe(e[t.index]);
          {
            const r = bC(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : $r(Vn(e[Te]), r)
              : $r(e, t.next);
          }
        }
        return null;
      }
      function bC(e, t) {
        return null !== t ? e[Te][Je].projection[t.projection] : null;
      }
      function mh(e, t) {
        const n = Oe + e + 1;
        if (n < t.length) {
          const r = t[n],
            o = r[b].firstChild;
          if (null !== o) return $r(r, o);
        }
        return t[vn];
      }
      function vh(e, t, n, r, o, i, s) {
        for (; null != n; ) {
          if (128 === n.type) {
            n = n.next;
            continue;
          }
          const a = r[n.index],
            c = n.type;
          if ((s && 0 === t && (a && ot(oe(a), r), (n.flags |= 2)), 32 & ~n.flags))
            if (8 & c) vh(e, t, n.child, r, o, i, !1), Ho(t, e, o, a, i);
            else if (32 & c) {
              const u = ch(n, r);
              let l;
              for (; (l = u()); ) Ho(t, e, o, l, i);
              Ho(t, e, o, a, i);
            } else 16 & c ? SC(e, t, r, n, o, i) : Ho(t, e, o, a, i);
          n = s ? n.projectionNext : n.next;
        }
      }
      function Xc(e, t, n, r, o, i) {
        vh(n, r, e.firstChild, t, o, i, !1);
      }
      function SC(e, t, n, r, o, i) {
        const s = n[Te],
          c = s[Je].projection[r.projection];
        if (Array.isArray(c)) for (let u = 0; u < c.length; u++) Ho(t, e, o, c[u], i);
        else {
          let u = c;
          const l = s[je];
          us(r) && (u.flags |= 128), vh(e, t, u, l, o, i, !0);
        }
      }
      function MC(e, t, n) {
        '' === n ? e.removeAttribute(t, 'class') : e.setAttribute(t, 'class', n);
      }
      function TC(e, t, n) {
        const { mergedAttrs: r, classes: o, styles: i } = n;
        null !== r && zd(e, t, r),
          null !== o && MC(e, t, o),
          null !== i &&
            (function lF(e, t, n) {
              e.setAttribute(t, 'style', n);
            })(e, t, i);
      }
      const B = {};
      function R(e = 1) {
        AC(q(), v(), et() + e, !1);
      }
      function AC(e, t, n, r) {
        if (!r)
          if (3 & ~t[N]) {
            const i = e.preOrderHooks;
            null !== i && Mc(t, i, 0, n);
          } else {
            const i = e.preOrderCheckHooks;
            null !== i && Sc(t, i, n);
          }
        Pr(n);
      }
      function w(e, t = Q.Default) {
        const n = v();
        return null === n ? M(e, t) : Yy(le(), n, F(e), t);
      }
      function RC(e, t, n, r, o, i) {
        const s = z(null);
        try {
          let a = null;
          o & tr.SignalBased && (a = t[r][Jt]),
            null !== a && void 0 !== a.transformFn && (i = a.transformFn(i)),
            o & tr.HasDecoratorInputTransform && (i = e.inputTransforms[r].call(t, i)),
            null !== e.setInput ? e.setInput(t, a, i, n, r) : my(t, a, r, i);
        } finally {
          z(s);
        }
      }
      function Jc(e, t, n, r, o, i, s, a, c, u, l) {
        const d = t.blueprint.slice();
        return (
          (d[Me] = o),
          (d[N] = 204 | r),
          (null !== u || (e && 2048 & e[N])) && (d[N] |= 2048),
          Ey(d),
          (d[je] = d[Ao] = e),
          (d[ye] = n),
          (d[mn] = s || (e && e[mn])),
          (d[P] = a || (e && e[P])),
          (d[Ue] = c || (e && e[Ue]) || null),
          (d[Je] = i),
          (d[Ro] = (function Lx() {
            return kx++;
          })()),
          (d[ut] = l),
          (d[dy] = u),
          (d[Te] = 2 == t.type ? e[Te] : d),
          d
        );
      }
      function Hr(e, t, n, r, o) {
        let i = e.data[t];
        if (null === i)
          (i = (function yh(e, t, n, r, o) {
            const i = My(),
              s = hf(),
              c = (e.data[t] = (function yF(e, t, n, r, o, i) {
                let s = t ? t.injectorIndex : -1,
                  a = 0;
                return (
                  Fr() && (a |= 128),
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
                  ? null == i.child && null !== c.parent && (i.child = c)
                  : null === i.next && ((i.next = c), (c.prev = i))),
              c
            );
          })(e, t, n, r, o)),
            (function zR() {
              return k.lFrame.inI18n;
            })() && (i.flags |= 32);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = o);
          const s = (function ns() {
            const e = k.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === s ? -1 : s.injectorIndex;
        }
        return on(i, !0), i;
      }
      function Es(e, t, n, r) {
        if (0 === n) return -1;
        const o = t.length;
        for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
        return o;
      }
      function xC(e, t, n, r, o) {
        const i = et(),
          s = 2 & r;
        try {
          Pr(-1), s && t.length > T && AC(e, t, T, !1), yn(s ? 2 : 0, o), n(r, o);
        } finally {
          Pr(i), yn(s ? 3 : 1, o);
        }
      }
      function _h(e, t, n) {
        if (nf(t)) {
          const r = z(null);
          try {
            const i = t.directiveEnd;
            for (let s = t.directiveStart; s < i; s++) {
              const a = e.data[s];
              a.contentQueries && a.contentQueries(1, n[s], s);
            }
          } finally {
            z(r);
          }
        }
      }
      function Ch(e, t, n) {
        Sy() &&
          ((function IF(e, t, n, r) {
            const o = n.directiveStart,
              i = n.directiveEnd;
            xr(n) &&
              (function xF(e, t, n) {
                const r = lt(t, e),
                  o = OC(n);
                let s = 16;
                n.signals ? (s = 4096) : n.onPush && (s = 64);
                const a = eu(
                  e,
                  Jc(
                    e,
                    o,
                    null,
                    s,
                    r,
                    t,
                    null,
                    e[mn].rendererFactory.createRenderer(r, n),
                    null,
                    null,
                    null,
                  ),
                );
                e[t.index] = a;
              })(t, n, e.data[o + n.componentOffset]),
              e.firstCreatePass || Ac(n, t),
              ot(r, t);
            const s = n.initialInputs;
            for (let a = o; a < i; a++) {
              const c = e.data[a],
                u = Lr(t, e, a, n);
              ot(u, t),
                null !== s && OF(0, a - o, u, c, 0, s),
                rn(c) && (Pt(n.index, t)[ye] = Lr(t, e, a, n));
            }
          })(e, t, n, lt(n, t)),
          !(64 & ~n.flags) && VC(e, t, n));
      }
      function Dh(e, t, n = lt) {
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
      function OC(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Eh(
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
      function Eh(e, t, n, r, o, i, s, a, c, u, l) {
        const d = T + r,
          f = d + o,
          h = (function fF(e, t) {
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
      let FC = () => null;
      function PC(e, t, n, r, o) {
        for (let i in t) {
          if (!t.hasOwnProperty(i)) continue;
          const s = t[i];
          if (void 0 === s) continue;
          r ??= {};
          let a,
            c = tr.None;
          Array.isArray(s) ? ((a = s[0]), (c = s[1])) : (a = s);
          let u = i;
          if (null !== o) {
            if (!o.hasOwnProperty(i)) continue;
            u = o[i];
          }
          0 === e ? kC(r, n, u, a, c) : kC(r, n, u, a);
        }
        return r;
      }
      function kC(e, t, n, r, o) {
        let i;
        e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
          void 0 !== o && i.push(o);
      }
      function wh(e, t, n, r) {
        if (Sy()) {
          const o = null === r ? null : { '': -1 },
            i = (function MF(e, t) {
              const n = e.directiveRegistry;
              let r = null,
                o = null;
              if (n)
                for (let i = 0; i < n.length; i++) {
                  const s = n[i];
                  if (Jv(t, s.selectors, !1))
                    if ((r || (r = []), rn(s)))
                      if (null !== s.findHostDirectiveDefs) {
                        const a = [];
                        (o = o || new Map()),
                          s.findHostDirectiveDefs(s, a, o),
                          r.unshift(...a, s),
                          bh(e, t, a.length);
                      } else r.unshift(s), bh(e, t, 0);
                    else
                      (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
                }
              return null === r ? null : [r, o];
            })(e, n);
          let s, a;
          null === i ? (s = a = null) : ([s, a] = i),
            null !== s && LC(e, t, n, s, o, a),
            o &&
              (function TF(e, t, n) {
                if (t) {
                  const r = (e.localNames = []);
                  for (let o = 0; o < t.length; o += 2) {
                    const i = n[t[o + 1]];
                    if (null == i) throw new D(-301, !1);
                    r.push(t[o], i);
                  }
                }
              })(n, r, o);
        }
        n.mergedAttrs = Zi(n.mergedAttrs, n.attrs);
      }
      function LC(e, t, n, r, o, i) {
        for (let u = 0; u < r.length; u++) Sf(Ac(n, t), e, r[u].type);
        !(function NF(e, t, n) {
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
          c = Es(e, t, r.length, null);
        for (let u = 0; u < r.length; u++) {
          const l = r[u];
          (n.mergedAttrs = Zi(n.mergedAttrs, l.hostAttrs)),
            RF(e, n, t, c, l),
            AF(c, l, o),
            null !== l.contentQueries && (n.flags |= 4),
            (null !== l.hostBindings || null !== l.hostAttrs || 0 !== l.hostVars) &&
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
        !(function _F(e, t, n) {
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
            (c = PC(0, d.inputs, l, c, f ? f.inputs : null)),
              (u = PC(1, d.outputs, l, u, p));
            const g = null === c || null === s || qd(t) ? null : FF(c, l, s);
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
      function VC(e, t, n) {
        const r = n.directiveStart,
          o = n.directiveEnd,
          i = n.index,
          s = (function WR() {
            return k.lFrame.currentDirectiveIndex;
          })();
        try {
          Pr(i);
          for (let a = r; a < o; a++) {
            const c = e.data[a],
              u = t[a];
            gf(a),
              (null !== c.hostBindings || 0 !== c.hostVars || null !== c.hostAttrs) &&
                SF(c, u);
          }
        } finally {
          Pr(-1), gf(s);
        }
      }
      function SF(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function bh(e, t, n) {
        (t.componentOffset = n), (e.components ??= []).push(t.index);
      }
      function AF(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          rn(t) && (n[''] = e);
        }
      }
      function RF(e, t, n, r, o) {
        e.data[r] = o;
        const i = o.factory || (o.factory = Ar(o.type)),
          s = new os(i, rn(o), w);
        (e.blueprint[r] = s),
          (n[r] = s),
          (function wF(e, t, n, r, o) {
            const i = o.hostBindings;
            if (i) {
              let s = e.hostBindingOpCodes;
              null === s && (s = e.hostBindingOpCodes = []);
              const a = ~t.index;
              (function bF(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ('number' == typeof n && n < 0) return n;
                }
                return 0;
              })(s) != a && s.push(a),
                s.push(n, r, i);
            }
          })(e, t, r, Es(e, n, o.hostVars, B), o);
      }
      function En(e, t, n, r, o, i) {
        const s = lt(e, t);
        !(function Ih(e, t, n, r, o, i, s) {
          if (null == i) e.removeAttribute(t, o, n);
          else {
            const a = null == s ? U(i) : s(i, r || '', o);
            e.setAttribute(t, o, a, n);
          }
        })(t[P], s, i, e.value, n, r, o);
      }
      function OF(e, t, n, r, o, i) {
        const s = i[t];
        if (null !== s)
          for (let a = 0; a < s.length; ) RC(r, n, s[a++], s[a++], s[a++], s[a++]);
      }
      function FF(e, t, n) {
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
      function jC(e, t, n, r) {
        return [e, !0, 0, t, null, r, null, n, null, null];
      }
      function UC(e, t) {
        const n = e.contentQueries;
        if (null !== n) {
          const r = z(null);
          try {
            for (let o = 0; o < n.length; o += 2) {
              const s = n[o + 1];
              if (-1 !== s) {
                const a = e.data[s];
                bc(n[o]), a.contentQueries(2, t[s], s);
              }
            }
          } finally {
            z(r);
          }
        }
      }
      function eu(e, t) {
        return e[Ki] ? (e[ly][nn] = t) : (e[Ki] = t), (e[ly] = t), t;
      }
      function Sh(e, t, n) {
        bc(0);
        const r = z(null);
        try {
          t(e, n);
        } finally {
          z(r);
        }
      }
      function BC(e) {
        return (e[To] ??= []);
      }
      function $C(e) {
        return (e.cleanup ??= []);
      }
      function tu(e, t) {
        const n = e[Ue],
          r = n ? n.get(Dn, null) : null;
        r && r.handleError(t);
      }
      function Mh(e, t, n, r, o) {
        for (let i = 0; i < n.length; ) {
          const s = n[i++],
            a = n[i++],
            c = n[i++];
          RC(e.data[s], t[s], r, a, c, o);
        }
      }
      function PF(e, t) {
        const n = Pt(t, e),
          r = n[b];
        !(function kF(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
        })(r, n);
        const o = n[Me];
        null !== o && null === n[ut] && (n[ut] = Wf(o, n[Ue])), Th(r, n, n[ye]);
      }
      function Th(e, t, n) {
        yf(t);
        try {
          const r = e.viewQuery;
          null !== r && Sh(1, r, n);
          const o = e.template;
          null !== o && xC(e, t, o, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            t[Ln]?.finishViewCreation(e),
            e.staticContentQueries && UC(e, t),
            e.staticViewQueries && Sh(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function LF(e, t) {
              for (let n = 0; n < t.length; n++) PF(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[N] &= -5), _f();
        }
      }
      function Go(e, t, n, r) {
        const o = z(null);
        try {
          const i = t.tView,
            c = Jc(
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
          c[Rr] = e[t.index];
          const l = e[Ln];
          return null !== l && (c[Ln] = l.createEmbeddedView(i)), Th(i, c, n), c;
        } finally {
          z(o);
        }
      }
      function Gr(e, t) {
        return !t || null === t.firstChild || us(e);
      }
      function zo(e, t, n, r = !0) {
        const o = t[b];
        if (
          ((function rF(e, t, n, r) {
            const o = Oe + r,
              i = n.length;
            r > 0 && (n[o - 1][nn] = t),
              r < i - Oe
                ? ((t[nn] = n[o]), zv(n, Oe + r, t))
                : (n.push(t), (t[nn] = null)),
              (t[je] = n);
            const s = t[Rr];
            null !== s && n !== s && mC(s, t);
            const a = t[Ln];
            null !== a && a.insertView(e), lf(t), (t[N] |= 128);
          })(o, t, e, n),
          r)
        ) {
          const s = mh(n, e),
            a = t[P],
            c = ph(a, e[vn]);
          null !== c &&
            (function tF(e, t, n, r, o, i) {
              (r[Me] = o), (r[Je] = t), Xc(e, r, n, 1, o, i);
            })(o, e[Je], a, t, c, s);
        }
        const i = t[ut];
        null !== i && null !== i.firstChild && (i.firstChild = null);
      }
      function ws(e, t, n, r, o = !1) {
        for (; null !== n; ) {
          if (128 === n.type) {
            n = o ? n.projectionNext : n.next;
            continue;
          }
          const i = t[n.index];
          null !== i && r.push(oe(i)), rt(i) && zC(i, r);
          const s = n.type;
          if (8 & s) ws(e, t, n.child, r);
          else if (32 & s) {
            const a = ch(n, t);
            let c;
            for (; (c = a()); ) r.push(c);
          } else if (16 & s) {
            const a = bC(t, n);
            if (Array.isArray(a)) r.push(...a);
            else {
              const c = Vn(t[Te]);
              ws(c[b], c, a, r, !0);
            }
          }
          n = o ? n.projectionNext : n.next;
        }
        return r;
      }
      function zC(e, t) {
        for (let n = Oe; n < e.length; n++) {
          const r = e[n],
            o = r[b].firstChild;
          null !== o && ws(r[b], r, o, t);
        }
        e[vn] !== e[Me] && t.push(e[vn]);
      }
      let qC = [];
      const BF = {
          ...ja,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            Dc(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[Gt] = this;
          },
        },
        HF = {
          ...ja,
          consumerIsAlwaysLive: !0,
          consumerMarkedDirty: e => {
            let t = Vn(e.lView);
            for (; t && !WC(t[b]); ) t = Vn(t);
            t && wy(t);
          },
          consumerOnSignalRead() {
            this.lView[Gt] = this;
          },
        };
      function WC(e) {
        return 2 !== e.type;
      }
      const GF = 100;
      function nu(e, t = !0, n = 0) {
        const r = e[mn],
          o = r.rendererFactory;
        o.begin?.();
        try {
          !(function zF(e, t) {
            const n = Ny();
            try {
              Ry(!0), Nh(e, t);
              let r = 0;
              for (; Cc(e); ) {
                if (r === GF) throw new D(103, !1);
                r++, Nh(e, 1);
              }
            } finally {
              Ry(n);
            }
          })(e, n);
        } catch (s) {
          throw (t && tu(e, s), s);
        } finally {
          o.end?.(), r.inlineEffectRunner?.flush();
        }
      }
      function qF(e, t, n, r) {
        const o = t[N];
        if (!(256 & ~o)) return;
        t[mn].inlineEffectRunner?.flush(), yf(t);
        let a = !0,
          c = null,
          u = null;
        WC(e)
          ? ((u = (function VF(e) {
              return (
                e[Gt] ??
                (function jF(e) {
                  const t = qC.pop() ?? Object.create(BF);
                  return (t.lView = e), t;
                })(e)
              );
            })(t)),
            (c = Ua(u)))
          : null ===
            (function od() {
              return xe;
            })()
          ? ((a = !1),
            (u = (function $F(e) {
              const t = e[Gt] ?? Object.create(HF);
              return (t.lView = e), t;
            })(t)),
            (c = Ua(u)))
          : t[Gt] && (cd(t[Gt]), (t[Gt] = null));
        try {
          Ey(t),
            (function xy(e) {
              return (k.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && xC(e, t, n, 2, r);
          const l = !(3 & ~o);
          if (l) {
            const h = e.preOrderCheckHooks;
            null !== h && Sc(t, h, null);
          } else {
            const h = e.preOrderHooks;
            null !== h && Mc(t, h, 0, null), Cf(t, 0);
          }
          if (
            ((function WF(e) {
              for (let t = b_(e); null !== t; t = I_(t)) {
                if (!(t[N] & yc.HasTransplantedViews)) continue;
                const n = t[xo];
                for (let r = 0; r < n.length; r++) wy(n[r]);
              }
            })(t),
            YC(t, 0),
            null !== e.contentQueries && UC(e, t),
            l)
          ) {
            const h = e.contentCheckHooks;
            null !== h && Sc(t, h);
          } else {
            const h = e.contentHooks;
            null !== h && Mc(t, h, 1), Cf(t, 1);
          }
          !(function dF(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const o = n[r];
                  if (o < 0) Pr(~o);
                  else {
                    const i = o,
                      s = n[++r],
                      a = n[++r];
                    qR(s, i), a(2, t[i]);
                  }
                }
              } finally {
                Pr(-1);
              }
          })(e, t);
          const d = e.components;
          null !== d && KC(t, d, 0);
          const f = e.viewQuery;
          if ((null !== f && Sh(2, f, r), l)) {
            const h = e.viewCheckHooks;
            null !== h && Sc(t, h);
          } else {
            const h = e.viewHooks;
            null !== h && Mc(t, h, 2), Cf(t, 2);
          }
          if ((!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), t[mc])) {
            for (const h of t[mc]) h();
            t[mc] = null;
          }
          t[N] &= -73;
        } catch (l) {
          throw (Dc(t), l);
        } finally {
          null !== u &&
            (sd(u, c),
            a &&
              (function UF(e) {
                e.lView[Gt] !== e && ((e.lView = null), qC.push(e));
              })(u)),
            _f();
        }
      }
      function YC(e, t) {
        for (let n = b_(e); null !== n; n = I_(n))
          for (let r = Oe; r < n.length; r++) QC(n[r], t);
      }
      function ZF(e, t, n) {
        QC(Pt(t, e), n);
      }
      function QC(e, t) {
        uf(e) && Nh(e, t);
      }
      function Nh(e, t) {
        const r = e[b],
          o = e[N],
          i = e[Gt];
        let s = !!(0 === t && 16 & o);
        if (
          ((s ||= !!(64 & o && 0 === t)),
          (s ||= !!(1024 & o)),
          (s ||= !(!i?.dirty || !ad(i))),
          (s ||= !1),
          i && (i.dirty = !1),
          (e[N] &= -9217),
          s)
        )
          qF(r, e, r.template, e[ye]);
        else if (8192 & o) {
          YC(e, 1);
          const a = r.components;
          null !== a && KC(e, a, 1);
        }
      }
      function KC(e, t, n) {
        for (let r = 0; r < t.length; r++) ZF(e, t[r], n);
      }
      function bs(e, t) {
        const n = Ny() ? 64 : 1088;
        for (e[mn].changeDetectionScheduler?.notify(t); e; ) {
          e[N] |= n;
          const r = Vn(e);
          if (Ji(e) && !r) return e;
          e = r;
        }
        return null;
      }
      class Is {
        get rootNodes() {
          const t = this._lView,
            n = t[b];
          return ws(n, t, n.firstChild, []);
        }
        constructor(t, n, r = !0) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this.notifyErrorHandler = r),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get context() {
          return this._lView[ye];
        }
        set context(t) {
          this._lView[ye] = t;
        }
        get destroyed() {
          return !(256 & ~this._lView[N]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[je];
            if (rt(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (Cs(t, r), sc(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Qc(this._lView[b], this._lView);
        }
        onDestroy(t) {
          Ec(this._lView, t);
        }
        markForCheck() {
          bs(this._cdRefInjectingView || this._lView, 4);
        }
        detach() {
          this._lView[N] &= -129;
        }
        reattach() {
          lf(this._lView), (this._lView[N] |= 128);
        }
        detectChanges() {
          (this._lView[N] |= 1024), nu(this._lView, this.notifyErrorHandler);
        }
        checkNoChanges() {}
        attachToViewContainerRef() {
          if (this._appRef) throw new D(902, !1);
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          this._appRef = null;
          const t = Ji(this._lView),
            n = this._lView[Rr];
          null !== n && !t && dh(n, this._lView), gC(this._lView[b], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new D(902, !1);
          this._appRef = t;
          const n = Ji(this._lView),
            r = this._lView[Rr];
          null !== r && !n && mC(r, this._lView), lf(this._lView);
        }
      }
      let Gn = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = KF);
        }
        return e;
      })();
      const YF = Gn,
        QF = class extends YF {
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
            const o = Go(this._declarationLView, this._declarationTContainer, t, {
              embeddedViewInjector: n,
              dehydratedView: r,
            });
            return new Is(o);
          }
        };
      function KF() {
        return ru(le(), v());
      }
      function ru(e, t) {
        return 4 & e.type ? new QF(t, e, ko(e, t)) : null;
      }
      let yD = () => null;
      function qr(e, t) {
        return yD(e, t);
      }
      class Wo {}
      const Os = new E('', { providedIn: 'root', factory: () => !1 }),
        _D = new E(''),
        Bh = new E('');
      class HP {}
      class CD {}
      class zP {
        resolveComponentFactory(t) {
          throw (function GP(e) {
            const t = Error(`No component factory found for ${He(e)}.`);
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      class uu {
        static #e = (this.NULL = new zP());
      }
      class $h {}
      let zn = (() => {
          class e {
            constructor() {
              this.destroyNode = null;
            }
            static #e = (this.__NG_ELEMENT_ID__ = () =>
              (function qP() {
                const e = v(),
                  n = Pt(le().index, e);
                return (qe(n) ? n : e)[P];
              })());
          }
          return e;
        })(),
        WP = (() => {
          class e {
            static #e = (this.ɵprov = I({
              token: e,
              providedIn: 'root',
              factory: () => null,
            }));
          }
          return e;
        })();
      function du(e, t, n) {
        let r = n ? e.styles : null,
          o = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const a = t[s];
            'number' == typeof a
              ? (i = a)
              : 1 == i
              ? (o = Md(o, a))
              : 2 == i && (r = Md(r, a + ': ' + t[++s] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = o) : (e.classesWithoutHost = o);
      }
      class bD extends uu {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = Z(t);
          return new ks(n, this.ngModule);
        }
      }
      function ID(e, t) {
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
                  isSignal: !!((i ? o[1] : tr.None) & tr.SignalBased),
                }
              : { propName: s, templateName: r },
          );
        }
        return n;
      }
      class ks extends CD {
        get inputs() {
          const t = this.componentDef,
            n = t.inputTransforms,
            r = ID(t.inputs, !0);
          if (null !== n)
            for (const o of r)
              n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
          return r;
        }
        get outputs() {
          return ID(this.componentDef.outputs, !1);
        }
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function rR(e) {
              return e.map(nR).join(',');
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!n);
        }
        create(t, n, r, o) {
          const i = z(null);
          try {
            let s = (o = o || this.ngModule) instanceof Ft ? o : o?.injector;
            s &&
              null !== this.componentDef.getStandaloneInjector &&
              (s = this.componentDef.getStandaloneInjector(s) || s);
            const a = s ? new kr(t, s) : t,
              c = a.get($h, null);
            if (null === c) throw new D(407, !1);
            const d = {
                rendererFactory: c,
                sanitizer: a.get(WP, null),
                inlineEffectRunner: null,
                changeDetectionScheduler: a.get(Wo, null),
              },
              f = c.createRenderer(null, this.componentDef),
              h = this.componentDef.selectors[0][0] || 'div',
              p = r
                ? (function hF(e, t, n, r) {
                    const i = r.get(H_, !1) || n === en.ShadowDom,
                      s = e.selectRootElement(t, i);
                    return (
                      (function pF(e) {
                        FC(e);
                      })(s),
                      s
                    );
                  })(f, r, this.componentDef.encapsulation, a)
                : Yc(
                    f,
                    h,
                    (function QP(e) {
                      const t = e.toLowerCase();
                      return 'svg' === t ? 'svg' : 'math' === t ? 'math' : null;
                    })(h),
                  );
            let g = 512;
            this.componentDef.signals
              ? (g |= 4096)
              : this.componentDef.onPush || (g |= 16);
            let y = null;
            null !== p && (y = Wf(p, a, !0));
            const C = Eh(0, null, null, 1, 0, null, null, null, null, null, null),
              m = Jc(null, C, null, g, null, null, d, f, a, null, y);
            yf(m);
            let A,
              $,
              te = null;
            try {
              const Se = this.componentDef;
              let At,
                Ui = null;
              Se.findHostDirectiveDefs
                ? ((At = []),
                  (Ui = new Map()),
                  Se.findHostDirectiveDefs(Se, At, Ui),
                  At.push(Se))
                : (At = [Se]);
              const eA = (function XP(e, t) {
                const n = e[b],
                  r = T;
                return (e[r] = t), Hr(n, r, 2, '#host', null);
              })(m, p);
              (te = (function JP(e, t, n, r, o, i, s) {
                const a = o[b];
                !(function e1(e, t, n, r) {
                  for (const o of e) t.mergedAttrs = Zi(t.mergedAttrs, o.hostAttrs);
                  null !== t.mergedAttrs &&
                    (du(t, t.mergedAttrs, !0), null !== n && TC(r, n, t));
                })(r, e, t, s);
                let c = null;
                null !== t && (c = Wf(t, o[Ue]));
                const u = i.rendererFactory.createRenderer(t, n);
                let l = 16;
                n.signals ? (l = 4096) : n.onPush && (l = 64);
                const d = Jc(o, OC(n), null, l, o[e.index], e, i, u, null, null, c);
                return (
                  a.firstCreatePass && bh(a, e, r.length - 1), eu(o, d), (o[e.index] = d)
                );
              })(eA, p, Se, At, m, d, f)),
                ($ = ts(C, T)),
                p &&
                  (function n1(e, t, n, r) {
                    if (r) zd(e, n, ['ng-version', '18.2.4']);
                    else {
                      const { attrs: o, classes: i } = (function oR(e) {
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
                            if (!tn(o)) break;
                            o = i;
                          }
                          r++;
                        }
                        return { attrs: t, classes: n };
                      })(t.selectors[0]);
                      o && zd(e, n, o), i && i.length > 0 && MC(e, n, i.join(' '));
                    }
                  })(f, Se, p, r),
                void 0 !== n &&
                  (function r1(e, t, n) {
                    const r = (e.projection = []);
                    for (let o = 0; o < t.length; o++) {
                      const i = n[o];
                      r.push(null != i ? Array.from(i) : null);
                    }
                  })($, this.ngContentSelectors, n),
                (A = (function t1(e, t, n, r, o, i) {
                  const s = le(),
                    a = o[b],
                    c = lt(s, o);
                  LC(a, o, s, n, null, r);
                  for (let l = 0; l < n.length; l++)
                    ot(Lr(o, a, s.directiveStart + l, s), o);
                  VC(a, o, s), c && ot(c, o);
                  const u = Lr(o, a, s.directiveStart + s.componentOffset, s);
                  if (((e[ye] = o[ye] = u), null !== i)) for (const l of i) l(u, t);
                  return _h(a, s, o), u;
                })(te, Se, At, Ui, m, [o1])),
                Th(C, m, null);
            } catch (Se) {
              throw (null !== te && Lf(te), Lf(m), Se);
            } finally {
              _f();
            }
            return new KP(this.componentType, A, ko($, m), m, $);
          } finally {
            z(i);
          }
        }
      }
      class KP extends HP {
        constructor(t, n, r, o, i) {
          super(),
            (this.location = r),
            (this._rootLView = o),
            (this._tNode = i),
            (this.previousInputValues = null),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new Is(o, void 0, !1)),
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
              bs(Pt(this._tNode.index, i), 1);
          }
        }
        get injector() {
          return new We(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      function o1() {
        const e = le();
        Ic(v()[b], e);
      }
      let an = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = i1);
        }
        return e;
      })();
      function i1() {
        return TD(le(), v());
      }
      const s1 = an,
        SD = class extends s1 {
          constructor(t, n, r) {
            super(), (this._lContainer = t), (this._hostTNode = n), (this._hostLView = r);
          }
          get element() {
            return ko(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new We(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Nc(this._hostTNode, this._hostLView);
            if (wf(t)) {
              const n = ss(t, this._hostLView),
                r = is(t);
              return new We(n[b].data[r + 8], n);
            }
            return new We(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = MD(this._lContainer);
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
            const s = qr(this._lContainer, t.ssrId),
              a = t.createEmbeddedViewImpl(n || {}, i, s);
            return this.insertImpl(a, o, Gr(this._hostTNode, s)), a;
          }
          createComponent(t, n, r, o, i) {
            const s =
              t &&
              !(function Qi(e) {
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
            const c = s ? t : new ks(Z(t)),
              u = r || this.parentInjector;
            if (!i && null == c.ngModule) {
              const g = (s ? u : this.parentInjector).get(Ft, null);
              g && (i = g);
            }
            const l = Z(c.componentType ?? {}),
              d = qr(this._lContainer, l?.id ?? null),
              h = c.create(u, o, d?.firstChild ?? null, i);
            return this.insertImpl(h.hostView, a, Gr(this._hostTNode, d)), h;
          }
          insert(t, n) {
            return this.insertImpl(t, n, !0);
          }
          insertImpl(t, n, r) {
            const o = t._lView;
            if (
              (function kR(e) {
                return rt(e[je]);
              })(o)
            ) {
              const a = this.indexOf(t);
              if (-1 !== a) this.detach(a);
              else {
                const c = o[je],
                  u = new SD(c, c[Je], c[je]);
                u.detach(u.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              s = this._lContainer;
            return zo(s, o, i, r), t.attachToViewContainerRef(), zv(zh(s), i, t), t;
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = MD(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = Cs(this._lContainer, n);
            r && (sc(zh(this._lContainer), n), Qc(r[b], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = Cs(this._lContainer, n);
            return r && null != sc(zh(this._lContainer), n) ? new Is(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function MD(e) {
        return e[8];
      }
      function zh(e) {
        return e[8] || (e[8] = []);
      }
      function TD(e, t) {
        let n;
        const r = t[e.index];
        return (
          rt(r) ? (n = r) : ((n = jC(r, t, null, e)), (t[e.index] = n), eu(t, n)),
          AD(n, t, e, r),
          new SD(n, e, t)
        );
      }
      let AD = function RD(e, t, n, r) {
          if (e[vn]) return;
          let o;
          (o =
            8 & n.type
              ? oe(r)
              : (function a1(e, t) {
                  const n = e[P],
                    r = n.createComment(''),
                    o = lt(t, e);
                  return (
                    Br(
                      n,
                      ph(n, o),
                      r,
                      (function sF(e, t) {
                        return e.nextSibling(t);
                      })(n, o),
                      !1,
                    ),
                    r
                  );
                })(t, n)),
            (e[vn] = o);
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
            const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
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
      class xD {
        constructor(t, n, r = null) {
          (this.flags = n),
            (this.read = r),
            (this.predicate =
              'string' == typeof t
                ? (function g1(e) {
                    return e.split(',').map(t => t.trim());
                  })(t)
                : t);
        }
      }
      class Yh {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++)
            this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const o = null !== n ? n.length : 0,
              i = this.getByIndex(r).embeddedTView(t, o);
            i && ((i.indexInDeclarationView = r), null !== n ? n.push(i) : (n = [i]));
          }
          return null !== n ? new Yh(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n);
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
      class Qh {
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
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new Qh(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 & ~this.metadata.flags) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let o = 0; o < r.length; o++) {
              const i = r[o];
              this.matchTNodeWithReadOption(t, n, d1(n, i)),
                this.matchTNodeWithReadOption(t, n, Rc(n, t, i, !1, !1));
            }
          else
            r === Gn
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Rc(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const o = this.metadata.read;
            if (null !== o)
              if (o === kt || o === an || (o === Gn && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const i = Rc(n, t, o, !1, !1);
                null !== i && this.addMatch(n.index, i);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches ? (this.matches = [t, n]) : this.matches.push(t, n);
        }
      }
      function d1(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function h1(e, t, n, r) {
        return -1 === n
          ? (function f1(e, t) {
              return 11 & e.type ? ko(e, t) : 4 & e.type ? ru(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function p1(e, t, n) {
              return n === kt
                ? ko(t, e)
                : n === Gn
                ? ru(t, e)
                : n === an
                ? TD(t, e)
                : void 0;
            })(e, t, r)
          : Lr(e, e[b], n, t);
      }
      function OD(e, t, n, r) {
        const o = t[Ln].queries[r];
        if (null === o.matches) {
          const i = e.data,
            s = n.matches,
            a = [];
          for (let c = 0; null !== s && c < s.length; c += 2) {
            const u = s[c];
            a.push(u < 0 ? null : h1(t, i[u], s[c + 1], n.metadata.read));
          }
          o.matches = a;
        }
        return o.matches;
      }
      function Kh(e, t, n, r) {
        const o = e.queries.getByIndex(n),
          i = o.matches;
        if (null !== i) {
          const s = OD(e, t, o, n);
          for (let a = 0; a < i.length; a += 2) {
            const c = i[a];
            if (c > 0) r.push(s[a / 2]);
            else {
              const u = i[a + 1],
                l = t[-c];
              for (let d = Oe; d < l.length; d++) {
                const f = l[d];
                f[Rr] === f[je] && Kh(f[b], f, u, r);
              }
              if (null !== l[xo]) {
                const d = l[xo];
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
      function PD(e, t, n) {
        const r = q();
        return (
          r.firstCreatePass &&
            ((function LD(e, t, n) {
              null === e.queries && (e.queries = new Yh()), e.queries.track(new Qh(t, n));
            })(r, new xD(e, t, n), -1),
            !(2 & ~t) && (r.staticViewQueries = !0)),
          (function FD(e, t, n) {
            const r = new Ff(!(4 & ~n));
            return (
              (function vF(e, t, n, r) {
                const o = BC(t);
                o.push(n), e.firstCreatePass && $C(e).push(r, o.length - 1);
              })(e, t, r, r.destroy),
              (t[Ln] ??= new Zh()).queries.push(new Wh(r)) - 1
            );
          })(r, v(), t)
        );
      }
      function Jh(e, t) {
        return e.queries.getByIndex(t);
      }
      function VD(e, t) {
        const n = e[b],
          r = Jh(n, t);
        return r.crossesNgTemplate ? Kh(n, e, t, []) : OD(n, e, r, t);
      }
      const jD = new Set();
      function ft(e) {
        jD.has(e) ||
          (jD.add(e),
          performance?.mark?.('mark_feature_usage', {
            detail: { feature: e },
          }));
      }
      function lr(e, t) {
        ft('NgSignals');
        const n = (function aA(e) {
            const t = Object.create(uA);
            t.value = e;
            const n = () => (id(t), t.value);
            return (n[Jt] = t), n;
          })(e),
          r = n[Jt];
        return (
          t?.equal && (r.equal = t.equal),
          (n.set = o => nv(r, o)),
          (n.update = o =>
            (function cA(e, t) {
              Ym() || tv(), nv(e, t(e.value));
            })(r, o)),
          (n.asReadonly = BD.bind(n)),
          n
        );
      }
      function BD() {
        const e = this[Jt];
        if (void 0 === e.readonlyFn) {
          const t = () => this();
          (t[Jt] = e), (e.readonlyFn = t);
        }
        return e.readonlyFn;
      }
      function de(e) {
        let t = (function JD(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const r = [e];
        for (; t; ) {
          let o;
          if (rn(e)) o = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new D(903, !1);
            o = t.ɵdir;
          }
          if (o) {
            if (n) {
              r.push(o);
              const s = e;
              (s.inputs = hu(e.inputs)),
                (s.inputTransforms = hu(e.inputTransforms)),
                (s.declaredInputs = hu(e.declaredInputs)),
                (s.outputs = hu(e.outputs));
              const a = o.hostBindings;
              a && N1(e, a);
              const c = o.viewQuery,
                u = o.contentQueries;
              if (
                (c && T1(e, c),
                u && A1(e, u),
                S1(e, o),
                bN(e.outputs, o.outputs),
                rn(o) && o.data.animation)
              ) {
                const l = e.data;
                l.animation = (l.animation || []).concat(o.data.animation);
              }
            }
            const i = o.features;
            if (i)
              for (let s = 0; s < i.length; s++) {
                const a = i[s];
                a && a.ngInherit && a(e), a === de && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function M1(e) {
          let t = 0,
            n = null;
          for (let r = e.length - 1; r >= 0; r--) {
            const o = e[r];
            (o.hostVars = t += o.hostVars),
              (o.hostAttrs = Zi(o.hostAttrs, (n = Zi(n, o.hostAttrs))));
          }
        })(r);
      }
      function S1(e, t) {
        for (const n in t.inputs) {
          if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
          const r = t.inputs[n];
          if (
            void 0 !== r &&
            ((e.inputs[n] = r),
            (e.declaredInputs[n] = t.declaredInputs[n]),
            null !== t.inputTransforms)
          ) {
            const o = Array.isArray(r) ? r[0] : r;
            if (!t.inputTransforms.hasOwnProperty(o)) continue;
            (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
          }
        }
      }
      function hu(e) {
        return e === gn ? {} : e === re ? [] : e;
      }
      function T1(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function A1(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (r, o, i) => {
              t(r, o, i), n(r, o, i);
            }
          : t;
      }
      function N1(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (r, o) => {
              t(r, o), n(r, o);
            }
          : t;
      }
      function rE(e) {
        const t = e.inputConfig,
          n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            const o = t[r];
            Array.isArray(o) && o[3] && (n[r] = o[3]);
          }
        e.inputTransforms = n;
      }
      class Wr {}
      class oE {}
      class tp extends Wr {
        constructor(t, n, r, o = !0) {
          super(),
            (this.ngModuleType = t),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new bD(this));
          const i = nt(t);
          (this._bootstrapComponents = Lt(i.bootstrap)),
            (this._r3Injector = i_(
              t,
              n,
              [
                { provide: Wr, useValue: this },
                {
                  provide: uu,
                  useValue: this.componentFactoryResolver,
                },
                ...r,
              ],
              He(t),
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
      class np extends oE {
        constructor(t) {
          super(), (this.moduleType = t);
        }
        create(t) {
          return new tp(this.moduleType, t, []);
        }
      }
      class iE extends Wr {
        constructor(t) {
          super(), (this.componentFactoryResolver = new bD(this)), (this.instance = null);
          const n = new Io(
            [
              ...t.providers,
              { provide: Wr, useValue: this },
              {
                provide: uu,
                useValue: this.componentFactoryResolver,
              },
            ],
            t.parent || hc(),
            t.debugName,
            new Set(['environment']),
          );
          (this.injector = n),
            t.runEnvironmentInitializers && n.resolveInjectorInitializers();
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function rp(e, t, n = null) {
        return new iE({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      function pu(e) {
        return (
          !!op(e) && (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function op(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Fe(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function js(e, t, n, r, o, i, s, a, c, u) {
        const l = n + T,
          d = t.firstCreatePass
            ? (function $1(e, t, n, r, o, i, s, a, c) {
                const u = t.consts,
                  l = Hr(t, e, 4, s || null, a || null);
                wh(t, n, l, qt(u, c)), Ic(t, l);
                const d = (l.tView = Eh(
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
                    (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
                  l
                );
              })(l, t, e, r, o, i, s, a, c)
            : t.data[l];
        on(d, !1);
        const f = sE(t, e, d, n);
        rs() && Kc(t, e, f, d), ot(f, e);
        const h = jC(f, e, f, d);
        return (
          (e[l] = h),
          eu(e, h),
          (function ND(e, t, n) {
            return qh(e, t, n);
          })(h, d, e),
          _c(d) && Ch(t, e, d),
          null != c && Dh(e, d, u),
          d
        );
      }
      function Zt(e, t, n, r, o, i, s, a) {
        const c = v(),
          u = q();
        return js(c, u, e, t, n, r, o, qt(u.consts, i), s, a), Zt;
      }
      let sE = function aE(e, t, n, r) {
        return _n(!0), t[P].createComment('');
      };
      var Ko = (function (e) {
        return (
          (e[(e.EarlyRead = 0)] = 'EarlyRead'),
          (e[(e.Write = 1)] = 'Write'),
          (e[(e.MixedReadWrite = 2)] = 'MixedReadWrite'),
          (e[(e.Read = 3)] = 'Read'),
          e
        );
      })(Ko || {});
      let hE = (() => {
        class e {
          constructor() {
            this.impl = null;
          }
          execute() {
            this.impl?.execute();
          }
          static #e = (this.ɵprov = I({
            token: e,
            providedIn: 'root',
            factory: () => new e(),
          }));
        }
        return e;
      })();
      class $s {
        constructor() {
          (this.ngZone = _(se)),
            (this.scheduler = _(Wo)),
            (this.errorHandler = _(Dn, { optional: !0 })),
            (this.sequences = new Set()),
            (this.deferredRegistrations = new Set()),
            (this.executing = !1);
        }
        static #e = (this.PHASES = [Ko.EarlyRead, Ko.Write, Ko.MixedReadWrite, Ko.Read]);
        execute() {
          this.executing = !0;
          for (const t of $s.PHASES)
            for (const n of this.sequences)
              if (!n.erroredOrDestroyed && n.hooks[t])
                try {
                  n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                    n.hooks[t](n.pipelinedValue),
                  );
                } catch (r) {
                  (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(r);
                }
          this.executing = !1;
          for (const t of this.sequences)
            t.afterRun(), t.once && this.sequences.delete(t);
          for (const t of this.deferredRegistrations) this.sequences.add(t);
          this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
            this.deferredRegistrations.clear();
        }
        register(t) {
          this.executing
            ? this.deferredRegistrations.add(t)
            : (this.sequences.add(t), this.scheduler.notify(6));
        }
        unregister(t) {
          this.executing && this.sequences.has(t)
            ? ((t.erroredOrDestroyed = !0), (t.pipelinedValue = void 0), (t.once = !0))
            : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
        }
        static #t = (this.ɵprov = I({
          token: $s,
          providedIn: 'root',
          factory: () => new $s(),
        }));
      }
      function bn(e, t, n, r) {
        const o = v();
        return Fe(o, sn(), t) && (q(), En(_e(), o, e, t, n, r)), bn;
      }
      function Du(e, t) {
        return (e << 17) | (t << 2);
      }
      function fr(e) {
        return (e >> 17) & 32767;
      }
      function mp(e) {
        return 2 | e;
      }
      function Qr(e) {
        return (131068 & e) >> 2;
      }
      function vp(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function yp(e) {
        return 1 | e;
      }
      function BE(e, t, n, r) {
        const o = e[n + 1],
          i = null === t;
        let s = r ? fr(o) : Qr(o),
          a = !1;
        for (; 0 !== s && (!1 === a || i); ) {
          const u = e[s + 1];
          Nk(e[s], t) && ((a = !0), (e[s + 1] = r ? yp(u) : mp(u))),
            (s = r ? fr(u) : Qr(u));
        }
        a && (e[n + 1] = r ? mp(o) : yp(o));
      }
      function Nk(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && wo(e, t) >= 0)
        );
      }
      function S(e, t, n) {
        const r = v();
        return (
          Fe(r, sn(), t) &&
            (function Mt(e, t, n, r, o, i, s, a) {
              const c = lt(t, n);
              let l,
                u = t.inputs;
              !a && null != u && (l = u[r])
                ? (Mh(e, n, l, r, o),
                  xr(t) &&
                    (function DF(e, t) {
                      const n = Pt(t, e);
                      16 & n[N] || (n[N] |= 64);
                    })(n, t.index))
                : 3 & t.type &&
                  ((r = (function CF(e) {
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
            })(q(), _e(), r, e, t, r[P], n, !1),
          S
        );
      }
      function _p(e, t, n, r, o) {
        const s = o ? 'class' : 'style';
        Mh(e, n, t.inputs[s], s, r);
      }
      function hr(e, t, n) {
        return cn(e, t, n, !1), hr;
      }
      function Eu(e, t) {
        return cn(e, t, null, !0), Eu;
      }
      function cn(e, t, n, r) {
        const o = v(),
          i = q(),
          s = (function Un(e) {
            const t = k.lFrame,
              n = t.bindingIndex;
            return (t.bindingIndex = t.bindingIndex + e), n;
          })(2);
        i.firstUpdatePass &&
          (function YE(e, t, n, r) {
            const o = e.data;
            if (null === o[n + 1]) {
              const i = o[et()],
                s = (function ZE(e, t) {
                  return t >= e.expandoStartIndex;
                })(e, n);
              (function JE(e, t) {
                return !!(e.flags & (t ? 8 : 16));
              })(i, r) &&
                null === t &&
                !s &&
                (t = !1),
                (t = (function jk(e, t, n, r) {
                  const o = (function mf(e) {
                    const t = k.lFrame.currentDirectiveIndex;
                    return -1 === t ? null : e[t];
                  })(e);
                  let i = r ? t.residualClasses : t.residualStyles;
                  if (null === o)
                    0 === (r ? t.classBindings : t.styleBindings) &&
                      ((n = Gs((n = Cp(null, e, t, n, r)), t.attrs, r)), (i = null));
                  else {
                    const s = t.directiveStylingLast;
                    if (-1 === s || e[s] !== o)
                      if (((n = Cp(o, e, t, n, r)), null === i)) {
                        let c = (function Uk(e, t, n) {
                          const r = n ? t.classBindings : t.styleBindings;
                          if (0 !== Qr(r)) return e[fr(r)];
                        })(e, t, r);
                        void 0 !== c &&
                          Array.isArray(c) &&
                          ((c = Cp(null, e, t, c[1], r)),
                          (c = Gs(c, t.attrs, r)),
                          (function Bk(e, t, n, r) {
                            e[fr(n ? t.classBindings : t.styleBindings)] = r;
                          })(e, t, r, c));
                      } else
                        i = (function $k(e, t, n) {
                          let r;
                          const o = t.directiveEnd;
                          for (let i = 1 + t.directiveStylingLast; i < o; i++)
                            r = Gs(r, e[i].hostAttrs, n);
                          return Gs(r, t.attrs, n);
                        })(e, t, r);
                  }
                  return (
                    void 0 !== i &&
                      (r ? (t.residualClasses = i) : (t.residualStyles = i)),
                    n
                  );
                })(o, i, t, r)),
                (function Tk(e, t, n, r, o, i) {
                  let s = i ? t.classBindings : t.styleBindings,
                    a = fr(s),
                    c = Qr(s);
                  e[r] = n;
                  let l,
                    u = !1;
                  if (
                    (Array.isArray(n)
                      ? ((l = n[1]), (null === l || wo(n, l) > 0) && (u = !0))
                      : (l = n),
                    o)
                  )
                    if (0 !== c) {
                      const f = fr(e[a + 1]);
                      (e[r + 1] = Du(f, a)),
                        0 !== f && (e[f + 1] = vp(e[f + 1], r)),
                        (e[a + 1] = (function Sk(e, t) {
                          return (131071 & e) | (t << 17);
                        })(e[a + 1], r));
                    } else
                      (e[r + 1] = Du(a, 0)),
                        0 !== a && (e[a + 1] = vp(e[a + 1], r)),
                        (a = r);
                  else
                    (e[r + 1] = Du(c, 0)),
                      0 === a ? (a = r) : (e[c + 1] = vp(e[c + 1], r)),
                      (c = r);
                  u && (e[r + 1] = mp(e[r + 1])),
                    BE(e, l, r, !0),
                    BE(e, l, r, !1),
                    (function Ak(e, t, n, r, o) {
                      const i = o ? e.residualClasses : e.residualStyles;
                      null != i &&
                        'string' == typeof t &&
                        wo(i, t) >= 0 &&
                        (n[r + 1] = yp(n[r + 1]));
                    })(t, l, e, r, i),
                    (s = Du(a, c)),
                    i ? (t.classBindings = s) : (t.styleBindings = s);
                })(o, i, t, n, s, r);
            }
          })(i, e, s, r),
          t !== B &&
            Fe(o, s, t) &&
            (function KE(e, t, n, r, o, i, s, a) {
              if (!(3 & t.type)) return;
              const c = e.data,
                u = c[a + 1],
                l = (function Mk(e) {
                  return !(1 & ~e);
                })(u)
                  ? XE(c, t, n, o, Qr(u), s)
                  : void 0;
              wu(l) ||
                (wu(i) ||
                  ((function Ik(e) {
                    return !(2 & ~e);
                  })(u) &&
                    (i = XE(c, null, n, o, a, s))),
                (function uF(e, t, n, r, o) {
                  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
                  else {
                    let i = -1 === r.indexOf('-') ? void 0 : ar.DashCase;
                    null == o
                      ? e.removeStyle(n, r, i)
                      : ('string' == typeof o &&
                          o.endsWith('!important') &&
                          ((o = o.slice(0, -10)), (i |= ar.Important)),
                        e.setStyle(n, r, o, i));
                  }
                })(r, s, es(et(), n), o, i));
            })(
              i,
              i.data[et()],
              o,
              o[P],
              e,
              (o[s + 1] = (function qk(e, t) {
                return (
                  null == e ||
                    '' === e ||
                    ('string' == typeof t
                      ? (e += t)
                      : 'object' == typeof e && (e = He(sr(e)))),
                  e
                );
              })(t, n)),
              r,
              s,
            );
      }
      function Cp(e, t, n, r, o) {
        let i = null;
        const s = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < s && ((i = t[a]), (r = Gs(r, i.hostAttrs, o)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Gs(e, t, n) {
        const r = n ? 1 : 2;
        let o = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            'number' == typeof s
              ? (o = s)
              : o === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]),
                xt(e, s, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function XE(e, t, n, r, o, i) {
        const s = null === t;
        let a;
        for (; o > 0; ) {
          const c = e[o],
            u = Array.isArray(c),
            l = u ? c[1] : c,
            d = null === l;
          let f = n[o + 1];
          f === B && (f = d ? re : void 0);
          let h = d ? Hd(f, r) : l === r ? f : void 0;
          if ((u && !wu(h) && (h = Hd(c, r)), wu(h) && ((a = h), s))) return a;
          const p = e[o + 1];
          o = s ? fr(p) : Qr(p);
        }
        if (null !== t) {
          let c = i ? t.residualClasses : t.residualStyles;
          null != c && (a = Hd(c, r));
        }
        return a;
      }
      function wu(e) {
        return void 0 !== e;
      }
      function j(e, t, n, r) {
        const o = v(),
          i = q(),
          s = T + e,
          a = o[P],
          c = i.firstCreatePass
            ? (function gL(e, t, n, r, o, i) {
                const s = t.consts,
                  c = Hr(t, e, 2, r, qt(s, o));
                return (
                  wh(t, n, c, qt(s, i)),
                  null !== c.attrs && du(c, c.attrs, !1),
                  null !== c.mergedAttrs && du(c, c.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(s, i, o, t, n, r)
            : i.data[s],
          u = rw(i, o, c, a, t, e);
        o[s] = u;
        const l = _c(c);
        return (
          on(c, !0),
          TC(a, u, c),
          !(function Yo(e) {
            return !(32 & ~e.flags);
          })(c) &&
            rs() &&
            Kc(i, o, u, c),
          0 ===
            (function LR() {
              return k.lFrame.elementDepthCount;
            })() && ot(u, o),
          (function VR() {
            k.lFrame.elementDepthCount++;
          })(),
          l && (Ch(i, o, c), _h(i, c, o)),
          null !== r && Dh(o, c),
          j
        );
      }
      function L() {
        let e = le();
        hf() ? pf() : ((e = e.parent), on(e, !1));
        const t = e;
        (function UR(e) {
          return k.skipHydrationRootTNode === e;
        })(t) &&
          (function GR() {
            k.skipHydrationRootTNode = null;
          })(),
          (function jR() {
            k.lFrame.elementDepthCount--;
          })();
        const n = q();
        return (
          n.firstCreatePass && (Ic(n, e), nf(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function rx(e) {
              return !!(8 & e.flags);
            })(t) &&
            _p(n, t, v(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function ox(e) {
              return !!(16 & e.flags);
            })(t) &&
            _p(n, t, v(), t.stylesWithoutHost, !1),
          L
        );
      }
      function fe(e, t, n, r) {
        return j(e, t, n, r), L(), fe;
      }
      let rw = (e, t, n, r, o, i) => (
        _n(!0),
        Yc(
          r,
          o,
          (function jy() {
            return k.lFrame.currentNamespace;
          })(),
        )
      );
      function be(e, t, n) {
        const r = v(),
          o = q(),
          i = e + T,
          s = o.firstCreatePass
            ? (function yL(e, t, n, r, o) {
                const i = t.consts,
                  s = qt(i, r),
                  a = Hr(t, e, 8, 'ng-container', s);
                return (
                  null !== s && du(a, s, !0),
                  wh(t, n, a, qt(i, o)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(i, o, r, t, n)
            : o.data[i];
        on(s, !0);
        const a = iw(o, r, s, e);
        return (
          (r[i] = a),
          rs() && Kc(o, r, a, s),
          ot(a, r),
          _c(s) && (Ch(o, r, s), _h(o, s, r)),
          null != n && Dh(r, s),
          be
        );
      }
      function Ie() {
        let e = le();
        const t = q();
        return (
          hf() ? pf() : ((e = e.parent), on(e, !1)),
          t.firstCreatePass && (Ic(t, e), nf(e) && t.queries.elementEnd(e)),
          Ie
        );
      }
      let iw = (e, t, n, r) => (_n(!0), lh(t[P], ''));
      function Ut() {
        return v();
      }
      const Iu = 'en-US';
      let lw = Iu,
        Tw = (e, t, n) => {};
      function Y(e, t, n, r) {
        const o = v(),
          i = q(),
          s = le();
        return (
          (function Sp(e, t, n, r, o, i, s) {
            const a = _c(r),
              u = e.firstCreatePass && $C(e),
              l = t[ye],
              d = BC(t);
            let f = !0;
            if (3 & r.type || s) {
              const g = lt(r, t),
                y = s ? s(g) : g,
                C = d.length,
                m = s ? $ => s(oe($[r.index])) : r.index;
              let A = null;
              if (
                (!s &&
                  a &&
                  (A = (function dV(e, t, n, r) {
                    const o = e.cleanup;
                    if (null != o)
                      for (let i = 0; i < o.length - 1; i += 2) {
                        const s = o[i];
                        if (s === n && o[i + 1] === r) {
                          const a = t[To],
                            c = o[i + 2];
                          return a.length > c ? a[c] : null;
                        }
                        'string' == typeof s && (i += 2);
                      }
                    return null;
                  })(e, t, o, r.index)),
                null !== A)
              )
                ((A.__ngLastListenerFn__ || A).__ngNextListenerFn__ = i),
                  (A.__ngLastListenerFn__ = i),
                  (f = !1);
              else {
                (i = xw(r, t, l, i)), Tw(g, o, i);
                const $ = n.listen(y, o, i);
                d.push(i, $), u && u.push(o, m, C, C + 1);
              }
            } else i = xw(r, t, l, i);
            const h = r.outputs;
            let p;
            if (f && null !== h && (p = h[o])) {
              const g = p.length;
              if (g)
                for (let y = 0; y < g; y += 2) {
                  const te = t[p[y]][p[y + 1]].subscribe(i),
                    Se = d.length;
                  d.push(i, te), u && u.push(o, r.index, Se, -(Se + 1));
                }
            }
          })(i, o, o[P], s, e, t, r),
          Y
        );
      }
      function Rw(e, t, n, r) {
        const o = z(null);
        try {
          return yn(6, t, n), !1 !== n(r);
        } catch (i) {
          return tu(e, i), !1;
        } finally {
          yn(7, t, n), z(o);
        }
      }
      function xw(e, t, n, r) {
        return function o(i) {
          if (i === Function) return r;
          bs(e.componentOffset > -1 ? Pt(e.index, t) : t, 5);
          let a = Rw(t, n, r, i),
            c = o.__ngNextListenerFn__;
          for (; c; ) (a = Rw(t, n, c, i) && a), (c = c.__ngNextListenerFn__);
          return a;
        };
      }
      function K(e = 1) {
        return (function YR(e) {
          return (k.lFrame.contextLView = (function by(e, t) {
            for (; e > 0; ) (t = t[Ao]), e--;
            return t;
          })(e, k.lFrame.contextLView))[ye];
        })(e);
      }
      function fV(e, t) {
        let n = null;
        const r = (function XN(e) {
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
            if (null === r ? Jv(e, i, !0) : tR(r, i)) return o;
          } else n = o;
        }
        return n;
      }
      function pi(e) {
        const t = v()[Te][Je];
        if (!t.projection) {
          const r = (t.projection = (function ac(e, t) {
              const n = [];
              for (let r = 0; r < e; r++) n.push(t);
              return n;
            })(e ? e.length : 1, null)),
            o = r.slice();
          let i = t.child;
          for (; null !== i; ) {
            if (128 !== i.type) {
              const s = e ? fV(i, e) : 0;
              null !== s && (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
            }
            i = i.next;
          }
        }
      }
      function gi(e, t = 0, n, r, o, i) {
        const s = v(),
          a = q(),
          c = r ? e + 1 : null;
        null !== c && js(s, a, c, r, o, i, null, n);
        const u = Hr(a, T + e, 16, null, n || null);
        null === u.projection && (u.projection = t), pf();
        const d = !s[ut] || Fr();
        null === s[Te][Je].projection[u.projection] && null !== c
          ? (function hV(e, t, n) {
              const r = T + n,
                o = t.data[r],
                i = e[r],
                s = qr(i, o.tView.ssrId);
              zo(i, Go(e, o, void 0, { dehydratedView: s }), 0, Gr(o, s));
            })(s, a, c)
          : d &&
            32 & ~u.flags &&
            (function aF(e, t, n) {
              SC(t[P], 0, t, n, hh(e, n, t), CC(n.parent || t[Je], n, t));
            })(a, s, u);
      }
      function Qs(e, t, n) {
        PD(e, t, n);
      }
      function mi(e) {
        const t = v(),
          n = q(),
          r = vf();
        bc(r + 1);
        const o = Jh(n, r);
        if (
          e.dirty &&
          (function PR(e) {
            return !(4 & ~e[N]);
          })(t) === !(2 & ~o.metadata.flags)
        ) {
          if (null === o.matches) e.reset([]);
          else {
            const i = VD(t, r);
            e.reset(i, p_), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function vi() {
        return (function Xh(e, t) {
          return e[Ln].queries[t].queryList;
        })(v(), vf());
      }
      function Hw(e) {
        return (function Or(e, t) {
          return e[t];
        })(
          (function Ty() {
            return k.lFrame.contextLView;
          })(),
          T + e,
        );
      }
      function yi(e, t = '') {
        const n = v(),
          r = q(),
          o = e + T,
          i = r.firstCreatePass ? Hr(r, o, 1, t, null) : r.data[o],
          s = Jw(r, n, i, t, e);
        (n[o] = s), rs() && Kc(r, n, s, i), on(i, !1);
      }
      let Jw = (e, t, n, r, o) => (
        _n(!0),
        (function uh(e, t) {
          return e.createText(t);
        })(t[P], r)
      );
      function pr(e, t, n) {
        const r = v(),
          o = (function oi(e, t, n, r) {
            return Fe(e, sn(), n) ? t + U(n) + r : B;
          })(r, e, t, n);
        return (
          o !== B &&
            (function Hn(e, t, n) {
              const r = es(t, e);
              !(function pC(e, t, n) {
                e.setValue(t, n);
              })(e[P], r, n);
            })(r, et(), o),
          pr
        );
      }
      function Ap(e, t, n, r, o) {
        if (((e = F(e)), Array.isArray(e)))
          for (let i = 0; i < e.length; i++) Ap(e[i], t, n, r, o);
        else {
          const i = q(),
            s = v(),
            a = le();
          let c = Nr(e) ? e : F(e.provide);
          const u = ay(e),
            l = 1048575 & a.providerIndexes,
            d = a.directiveStart,
            f = a.providerIndexes >> 20;
          if (Nr(e) || !e.multi) {
            const h = new os(u, o, w),
              p = Rp(c, t, o ? l : l + f, d);
            -1 === p
              ? (Sf(Ac(a, s), i, c),
                Np(i, e, t.length),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(h),
                s.push(h))
              : ((n[p] = h), (s[p] = h));
          } else {
            const h = Rp(c, t, l + f, d),
              p = Rp(c, t, l, l + f),
              y = p >= 0 && n[p];
            if ((o && !y) || (!o && !(h >= 0 && n[h]))) {
              Sf(Ac(a, s), i, c);
              const C = (function FV(e, t, n, r, o) {
                const i = new os(e, n, w);
                return (
                  (i.multi = []),
                  (i.index = t),
                  (i.componentProviders = 0),
                  hb(i, o, r && !n),
                  i
                );
              })(o ? OV : xV, n.length, o, r, u);
              !o && y && (n[p].providerFactory = C),
                Np(i, e, t.length, 0),
                t.push(c),
                a.directiveStart++,
                a.directiveEnd++,
                o && (a.providerIndexes += 1048576),
                n.push(C),
                s.push(C);
            } else Np(i, e, h > -1 ? h : p, hb(n[o ? p : h], u, !o && r));
            !o && r && y && n[p].componentProviders++;
          }
        }
      }
      function Np(e, t, n, r) {
        const o = Nr(t),
          i = (function dR(e) {
            return !!e.useClass;
          })(t);
        if (o || i) {
          const c = (i ? F(t.useClass) : t).prototype.ngOnDestroy;
          if (c) {
            const u = e.destroyHooks || (e.destroyHooks = []);
            if (!o && t.multi) {
              const l = u.indexOf(n);
              -1 === l ? u.push(n, [r, c]) : u[l + 1].push(r, c);
            } else u.push(n, c);
          }
        }
      }
      function hb(e, t, n) {
        return n && e.componentProviders++, e.multi.push(t) - 1;
      }
      function Rp(e, t, n, r) {
        for (let o = n; o < r; o++) if (t[o] === e) return o;
        return -1;
      }
      function xV(e, t, n, r) {
        return xp(this.multi, []);
      }
      function OV(e, t, n, r) {
        const o = this.multi;
        let i;
        if (this.providerFactory) {
          const s = this.providerFactory.componentProviders,
            a = Lr(n, n[b], this.providerFactory.index, r);
          (i = a.slice(0, s)), xp(o, i);
          for (let c = s; c < a.length; c++) i.push(a[c]);
        } else (i = []), xp(o, i);
        return i;
      }
      function xp(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function Ae(e, t = []) {
        return n => {
          n.providersResolver = (r, o) =>
            (function RV(e, t, n) {
              const r = q();
              if (r.firstCreatePass) {
                const o = rn(e);
                Ap(n, r.data, r.blueprint, o, !0), Ap(t, r.data, r.blueprint, o, !1);
              }
            })(r, o ? o(e) : e, t);
        };
      }
      let PV = (() => {
        class e {
          constructor(n) {
            (this._injector = n), (this.cachedInjectors = new Map());
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
              const r = Wd(0, n.type),
                o =
                  r.length > 0
                    ? rp([r], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n, o);
            }
            return this.cachedInjectors.get(n);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values()) null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static #e = (this.ɵprov = I({
            token: e,
            providedIn: 'environment',
            factory: () => new e(M(Ft)),
          }));
        }
        return e;
      })();
      function J(e) {
        ft('NgStandalone'),
          (e.getStandaloneInjector = t => t.get(PV).getOrCreateStandaloneInjector(e));
      }
      function Db(e, t) {
        return ru(e, t);
      }
      let Lb = (() => {
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
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'platform',
          }));
        }
        return e;
      })();
      const $b = new E('');
      function na(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Hb(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const Yj = new E('');
      let Gb = (() => {
        class e {
          constructor() {
            (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((n, r) => {
                (this.resolve = n), (this.reject = r);
              })),
              (this.appInits = _(Yj, { optional: !0 }) ?? []);
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [];
            for (const o of this.appInits) {
              const i = o();
              if (na(i)) n.push(i);
              else if (Hb(i)) {
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
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const Fu = new E('');
      let Mn = (() => {
        class e {
          constructor() {
            (this._bootstrapListeners = []),
              (this._runningTick = !1),
              (this._destroyed = !1),
              (this._destroyListeners = []),
              (this._views = []),
              (this.internalErrorHandler = _(xx)),
              (this.afterRenderManager = _(hE)),
              (this.zonelessEnabled = _(Os)),
              (this.dirtyFlags = 0),
              (this.deferredDirtyFlags = 0),
              (this.externalTestViews = new Set()),
              (this.beforeRender = new at()),
              (this.afterTick = new at()),
              (this.componentTypes = []),
              (this.components = []),
              (this.isStable = _(jr).hasPendingTasks.pipe(ne(n => !n))),
              (this._injector = _(Ft));
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
            const o = n instanceof CD;
            if (!this._injector.get(Gb).done)
              throw (
                (!o &&
                  (function nr(e) {
                    const t = Z(e) || Ge(e) || Xe(e);
                    return null !== t && t.standalone;
                  })(n),
                new D(405, !1))
              );
            let s;
            (s = o ? n : this._injector.get(uu).resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const a = (function Qj(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(Wr),
              u = s.create(Ke.NULL, [], r || s.selector, a),
              l = u.location.nativeElement,
              d = u.injector.get($b, null);
            return (
              d?.registerApplication(l),
              u.onDestroy(() => {
                this.detachView(u.hostView),
                  Pu(this.components, u),
                  d?.unregisterApplication(l);
              }),
              this._loadComponent(u),
              u
            );
          }
          tick() {
            this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
          }
          _tick() {
            if (this._runningTick) throw new D(101, !1);
            const n = z(null);
            try {
              (this._runningTick = !0), this.synchronize();
            } catch (r) {
              this.internalErrorHandler(r);
            } finally {
              (this._runningTick = !1), z(n), this.afterTick.next();
            }
          }
          synchronize() {
            let n = null;
            this._injector.destroyed ||
              (n = this._injector.get($h, null, { optional: !0 })),
              (this.dirtyFlags |= this.deferredDirtyFlags),
              (this.deferredDirtyFlags = 0);
            let r = 0;
            for (; 0 !== this.dirtyFlags && r++ < 10; ) this.synchronizeOnce(n);
          }
          synchronizeOnce(n) {
            if (
              ((this.dirtyFlags |= this.deferredDirtyFlags),
              (this.deferredDirtyFlags = 0),
              7 & this.dirtyFlags)
            ) {
              const r = !!(1 & this.dirtyFlags);
              (this.dirtyFlags &= -8), (this.dirtyFlags |= 8), this.beforeRender.next(r);
              for (let { _lView: o, notifyErrorHandler: i } of this._views)
                Jj(o, i, r, this.zonelessEnabled);
              if (
                ((this.dirtyFlags &= -5),
                this.syncDirtyFlagsWithViews(),
                7 & this.dirtyFlags)
              )
                return;
            } else n?.begin?.(), n?.end?.();
            8 & this.dirtyFlags &&
              ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
              this.syncDirtyFlagsWithViews();
          }
          syncDirtyFlagsWithViews() {
            this.allViews.some(({ _lView: n }) => Cc(n))
              ? (this.dirtyFlags |= 2)
              : (this.dirtyFlags &= -8);
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            Pu(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView), this.tick(), this.components.push(n);
            const r = this._injector.get(Fu, []);
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
            return this._destroyListeners.push(n), () => Pu(this._destroyListeners, n);
          }
          destroy() {
            if (this._destroyed) throw new D(406, !1);
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
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function Pu(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function Jj(e, t, n, r) {
        (n || Cc(e)) && nu(e, t, n && !r ? 0 : 1);
      }
      class e2 {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let t2 = (() => {
          class e {
            compileModuleSync(n) {
              return new np(n);
            }
            compileModuleAsync(n) {
              return Promise.resolve(this.compileModuleSync(n));
            }
            compileModuleAndAllComponentsSync(n) {
              const r = this.compileModuleSync(n),
                i = Lt(nt(n).declarations).reduce((s, a) => {
                  const c = Z(a);
                  return c && s.push(new ks(c)), s;
                }, []);
              return new e2(r, i);
            }
            compileModuleAndAllComponentsAsync(n) {
              return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
            }
            clearCache() {}
            clearCacheFor(n) {}
            getModuleId(n) {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        o2 = (() => {
          class e {
            constructor() {
              (this.zone = _(se)),
                (this.changeDetectionScheduler = _(Wo)),
                (this.applicationRef = _(Mn));
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
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function Bp({
        ngZoneFactory: e,
        ignoreChangesOutsideZone: t,
        scheduleInRootZone: n,
      }) {
        return (
          (e ??= () => new se({ ...$p(), scheduleInRootZone: n })),
          [
            { provide: se, useFactory: e },
            {
              provide: Ot,
              multi: !0,
              useFactory: () => {
                const r = _(o2, { optional: !0 });
                return () => r.initialize();
              },
            },
            {
              provide: Ot,
              multi: !0,
              useFactory: () => {
                const r = _(s2);
                return () => {
                  r.initialize();
                };
              },
            },
            !0 === t ? { provide: _D, useValue: !0 } : [],
            { provide: Bh, useValue: n ?? a_ },
          ]
        );
      }
      function $p(e) {
        return {
          enableLongStackTrace: !1,
          shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
          shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
        };
      }
      let s2 = (() => {
          class e {
            constructor() {
              (this.subscription = new tt()),
                (this.initialized = !1),
                (this.zone = _(se)),
                (this.pendingTasks = _(jr));
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
                      se.assertNotInAngularZone(),
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
                    se.assertInAngularZone(), (n ??= this.pendingTasks.add());
                  }),
                );
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        ra = (() => {
          class e {
            constructor() {
              (this.appRef = _(Mn)),
                (this.taskService = _(jr)),
                (this.ngZone = _(se)),
                (this.zonelessEnabled = _(Os)),
                (this.disableScheduling = _(_D, { optional: !0 }) ?? !1),
                (this.zoneIsDefined = typeof Zone < 'u' && !!Zone.root.run),
                (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
                (this.subscriptions = new tt()),
                (this.angularZoneId = this.zoneIsDefined
                  ? this.ngZone._inner?.get(Fc)
                  : null),
                (this.scheduleInRootZone =
                  !this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  (_(Bh, { optional: !0 }) ?? !1)),
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
                  (this.ngZone instanceof Of || !this.zoneIsDefined));
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
              const r = this.useMicrotaskScheduler ? u_ : c_;
              (this.pendingRenderTaskId = this.taskService.add()),
                (this.cancelScheduledCallback = this.scheduleInRootZone
                  ? Zone.root.run(() => r(() => this.tick()))
                  : this.ngZone.runOutsideAngular(() => r(() => this.tick())));
            }
            shouldScheduleTick() {
              return !(
                this.disableScheduling ||
                null !== this.pendingRenderTaskId ||
                this.runningTick ||
                this.appRef._runningTick ||
                (!this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  Zone.current.get(Fc + this.angularZoneId))
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
                u_(() => {
                  (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
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
                (this.pendingRenderTaskId = null), this.taskService.remove(n);
              }
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const gr = new E('', {
          providedIn: 'root',
          factory: () =>
            _(gr, Q.Optional | Q.SkipSelf) ||
            (function a2() {
              return (typeof $localize < 'u' && $localize.locale) || Iu;
            })(),
        }),
        Gp = new E('');
      function Lu(e) {
        return !!e.platformInjector;
      }
      let mr = null;
      let oa = (() => {
        class e {
          static #e = (this.__NG_ELEMENT_ID__ = y2);
        }
        return e;
      })();
      function y2(e) {
        return (function _2(e, t, n) {
          if (xr(e) && !n) {
            const r = Pt(e.index, t);
            return new Is(r, r);
          }
          return 175 & e.type ? new Is(t[Te], t) : null;
        })(le(), v(), !(16 & ~e));
      }
      class aI {
        constructor() {}
        supports(t) {
          return pu(t);
        }
        create(t) {
          return new b2(t);
        }
      }
      const w2 = (e, t) => t;
      class b2 {
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
            (this._trackByFn = t || w2);
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
            const s = !r || (n && n.currentIndex < uI(r, o, i)) ? n : r,
              a = uI(s, o, i),
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
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !pu(t))) throw new D(900, !1);
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
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, s, a)), (r = !0)),
                (n = n._next);
          } else
            (o = 0),
              (function U1(e, t) {
                if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, a => {
                (s = this._trackByFn(o, a)),
                  null !== n && Object.is(n.trackById, s)
                    ? (r && (n = this._verifyReinsertion(n, a, s, o)),
                      Object.is(n.item, a) || this._addIdentityChange(n, a))
                    : ((n = this._mismatch(n, a, s, o)), (r = !0)),
                  (n = n._next),
                  o++;
              }),
              (this.length = o);
          return this._truncate(n), (this.collection = t), this.isDirty;
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
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null, t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, o) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, o))
              : null !==
                (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, o))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new I2(n, r), i, o)),
            t
          );
        }
        _verifyReinsertion(t, n, r, o) {
          let i =
            null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, o))
              : t.currentIndex != o && ((t.currentIndex = o), this._addToMoves(t, o)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const o = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === o ? (this._removalsHead = i) : (o._nextRemoved = i),
            null === i ? (this._removalsTail = o) : (i._prevRemoved = o),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t;
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
            null === this._linkedRecords && (this._linkedRecords = new cI()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
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
            null === this._unlinkedRecords && (this._unlinkedRecords = new cI()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class I2 {
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
      class S2 {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t))
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
      class cI {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new S2()), this.map.set(n, r)), r.add(t);
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
      function uI(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let o = 0;
        return n && r < n.length && (o = n[r]), r + t + o;
      }
      class lI {
        constructor() {}
        supports(t) {
          return t instanceof Map || op(t);
        }
        create() {
          return new M2();
        }
      }
      class M2 {
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
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || op(t))) throw new D(900, !1);
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
                this._maybeAddToChanges(n, r), (this._appendAfter = n), (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(o, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
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
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
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
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
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
          const r = new T2(t);
          return (
            this._records.set(t, r), (r.currentValue = n), this._addToAdditions(r), r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
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
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r));
        }
      }
      class T2 {
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
      function dI() {
        return new Qp([new aI()]);
      }
      let Qp = (() => {
        class e {
          static #e = (this.ɵprov = I({
            token: e,
            providedIn: 'root',
            factory: dI,
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
              useFactory: r => e.create(n, r || dI()),
              deps: [[e, new Bd(), new Ud()]],
            };
          }
          find(n) {
            const r = this.factories.find(o => o.supports(n));
            if (null != r) return r;
            throw new D(901, !1);
          }
        }
        return e;
      })();
      function fI() {
        return new Uu([new lI()]);
      }
      let Uu = (() => {
        class e {
          static #e = (this.ɵprov = I({
            token: e,
            providedIn: 'root',
            factory: fI,
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
              useFactory: r => e.create(n, r || fI()),
              deps: [[e, new Bd(), new Ud()]],
            };
          }
          find(n) {
            const r = this.factories.find(o => o.supports(n));
            if (r) return r;
            throw new D(901, !1);
          }
        }
        return e;
      })();
      function $2(e) {
        try {
          const { rootComponent: t, appProviders: n, platformProviders: r } = e,
            o = (function m2(e = []) {
              if (mr) return mr;
              const t = (function tI(e = [], t) {
                return Ke.create({
                  name: t,
                  providers: [
                    { provide: Qd, useValue: 'platform' },
                    {
                      provide: Gp,
                      useValue: new Set([() => (mr = null)]),
                    },
                    ...e,
                  ],
                });
              })(e);
              return (
                (mr = t),
                (function zb() {
                  !(function sA(e) {
                    ev = e;
                  })(() => {
                    throw new D(600, !1);
                  });
                })(),
                (function nI(e) {
                  e.get(F_, null)?.forEach(n => n());
                })(t),
                t
              );
            })(r),
            i = [Bp({}), { provide: Wo, useExisting: ra }, ...(n || [])];
          return (function Xb(e) {
            const t = Lu(e) ? e.r3Injector : e.moduleRef.injector,
              n = t.get(se);
            return n.run(() => {
              Lu(e)
                ? e.r3Injector.resolveInjectorInitializers()
                : e.moduleRef.resolveInjectorInitializers();
              const r = t.get(Dn, null);
              let o;
              if (
                (n.runOutsideAngular(() => {
                  o = n.onError.subscribe({
                    next: i => {
                      r.handleError(i);
                    },
                  });
                }),
                Lu(e))
              ) {
                const i = () => t.destroy(),
                  s = e.platformInjector.get(Gp);
                s.add(i),
                  t.onDestroy(() => {
                    o.unsubscribe(), s.delete(i);
                  });
              } else
                e.moduleRef.onDestroy(() => {
                  Pu(e.allPlatformModules, e.moduleRef), o.unsubscribe();
                });
              return (function Xj(e, t, n) {
                try {
                  const r = n();
                  return na(r)
                    ? r.catch(o => {
                        throw (t.runOutsideAngular(() => e.handleError(o)), o);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(r, n, () => {
                const i = t.get(Gb);
                return (
                  i.runInitializers(),
                  i.donePromise.then(() => {
                    if (
                      ((function ML(e) {
                        'string' == typeof e && (lw = e.toLowerCase().replace(/_/g, '-'));
                      })(t.get(gr, Iu) || Iu),
                      Lu(e))
                    ) {
                      const a = t.get(Mn);
                      return (
                        void 0 !== e.rootComponent && a.bootstrap(e.rootComponent), a
                      );
                    }
                    return (
                      (function h2(e, t) {
                        const n = e.injector.get(Mn);
                        if (e._bootstrapComponents.length > 0)
                          e._bootstrapComponents.forEach(r => n.bootstrap(r));
                        else {
                          if (!e.instance.ngDoBootstrap) throw new D(-403, !1);
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
            r3Injector: new iE({
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
      const TI = new E('');
      function Di(e) {
        return 'boolean' == typeof e ? e : null != e && 'false' !== e;
      }
      function Jr(e, t) {
        ft('NgSignals');
        const n = (function rA(e) {
          const t = Object.create(oA);
          t.computation = e;
          const n = () => {
            if ((Wm(t), id(t), t.value === Ha)) throw t.error;
            return t.value;
          };
          return (n[Jt] = t), n;
        })(e);
        return t?.equal && (n[Jt].equal = t.equal), n;
      }
      function Tn(e) {
        const t = z(null);
        try {
          return e();
        } finally {
          z(t);
        }
      }
      let VI = null;
      function vr() {
        return VI;
      }
      class gU {}
      const Yt = new E('');
      let eg = (() => {
          class e {
            historyGo(n) {
              throw new Error('');
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: () => _(mU),
              providedIn: 'platform',
            }));
          }
          return e;
        })(),
        mU = (() => {
          class e extends eg {
            constructor() {
              super(),
                (this._doc = _(Yt)),
                (this._location = window.location),
                (this._history = window.history);
            }
            getBaseHrefFromDOM() {
              return vr().getBaseHref(this._doc);
            }
            onPopState(n) {
              const r = vr().getGlobalEventTarget(this._doc, 'window');
              return (
                r.addEventListener('popstate', n, !1),
                () => r.removeEventListener('popstate', n)
              );
            }
            onHashChange(n) {
              const r = vr().getGlobalEventTarget(this._doc, 'window');
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
            static #t = (this.ɵprov = I({
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
      function jI(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return e.slice(0, n - ('/' === e[n - 1] ? 1 : 0)) + e.slice(n);
      }
      function qn(e) {
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
          static #t = (this.ɵprov = I({
            token: e,
            factory: () => _(vU),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const UI = new E('');
      let vU = (() => {
          class e extends Ei {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._removeListenerFns = []),
                (this._baseHref =
                  r ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  _(Yt).location?.origin ??
                  '');
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
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
                  this._platformLocation.pathname + qn(this._platformLocation.search),
                o = this._platformLocation.hash;
              return o && n ? `${r}${o}` : r;
            }
            pushState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + qn(i));
              this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              const s = this.prepareExternalUrl(o + qn(i));
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
              return new (r || e)(M(eg), M(UI, 8));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        yU = (() => {
          class e extends Ei {
            constructor(n, r) {
              super(),
                (this._platformLocation = n),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != r && (this._baseHref = r);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
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
              let s = this.prepareExternalUrl(o + qn(i));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(n, r, s);
            }
            replaceState(n, r, o, i) {
              let s = this.prepareExternalUrl(o + qn(i));
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
              return new (r || e)(M(eg), M(UI, 8));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        ca = (() => {
          class e {
            constructor(n) {
              (this._subject = new W()),
                (this._urlChangeListeners = []),
                (this._urlChangeSubscription = null),
                (this._locationStrategy = n);
              const r = this._locationStrategy.getBaseHref();
              (this._basePath = (function DU(e) {
                if (new RegExp('^(https?:)?//').test(e)) {
                  const [, n] = e.split(/\/\/[^\/]+/);
                  return n;
                }
                return e;
              })(jI(BI(r)))),
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
              this._urlChangeSubscription?.unsubscribe(), (this._urlChangeListeners = []);
            }
            path(n = !1) {
              return this.normalize(this._locationStrategy.path(n));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(n, r = '') {
              return this.path() == this.normalize(n + qn(r));
            }
            normalize(n) {
              return e.stripTrailingSlash(
                (function CU(e, t) {
                  if (!e || !t.startsWith(e)) return t;
                  const n = t.substring(e.length);
                  return '' === n || ['/', ';', '?', '#'].includes(n[0]) ? n : t;
                })(this._basePath, BI(n)),
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
                this._notifyUrlChangeListeners(this.prepareExternalUrl(n + qn(r)), o);
            }
            replaceState(n, r = '', o = null) {
              this._locationStrategy.replaceState(o, '', n, r),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(n + qn(r)), o);
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
            static #e = (this.normalizeQueryParams = qn);
            static #t = (this.joinWithSlash = tg);
            static #n = (this.stripTrailingSlash = jI);
            static #r = (this.ɵfac = function (r) {
              return new (r || e)(M(Ei));
            });
            static #o = (this.ɵprov = I({
              token: e,
              factory: () =>
                (function _U() {
                  return new ca(M(Ei));
                })(),
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function BI(e) {
        return e.replace(/\/index.html$/, '');
      }
      const dg = /\s+/,
        QI = [];
      let fg = (() => {
        class e {
          constructor(n, r) {
            (this._ngEl = n),
              (this._renderer = r),
              (this.initialClasses = QI),
              (this.stateMap = new Map());
          }
          set klass(n) {
            this.initialClasses = null != n ? n.trim().split(dg) : QI;
          }
          set ngClass(n) {
            this.rawClass = 'string' == typeof n ? n.trim().split(dg) : n;
          }
          ngDoCheck() {
            for (const r of this.initialClasses) this._updateState(r, !0);
            const n = this.rawClass;
            if (Array.isArray(n) || n instanceof Set)
              for (const r of n) this._updateState(r, !0);
            else if (null != n)
              for (const r of Object.keys(n)) this._updateState(r, !!n[r]);
            this._applyStateDiff();
          }
          _updateState(n, r) {
            const o = this.stateMap.get(n);
            void 0 !== o
              ? (o.enabled !== r && ((o.changed = !0), (o.enabled = r)), (o.touched = !0))
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
                  (o.enabled && this._toggleClass(r, !1), this.stateMap.delete(r)),
                (o.touched = !1);
            }
          }
          _toggleClass(n, r) {
            (n = n.trim()).length > 0 &&
              n.split(dg).forEach(o => {
                r
                  ? this._renderer.addClass(this._ngEl.nativeElement, o)
                  : this._renderer.removeClass(this._ngEl.nativeElement, o);
              });
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(kt), w(zn));
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
      class aB {
        constructor(t, n, r, o) {
          (this.$implicit = t), (this.ngForOf = n), (this.index = r), (this.count = o);
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
      let XI = (() => {
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
                (this._differ = this._differs.find(n).create(this.ngForTrackBy));
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
                  new aB(o.item, this._ngForOf, -1, -1),
                  null === s ? void 0 : s,
                );
              else if (null == s) r.remove(null === i ? void 0 : i);
              else if (null !== i) {
                const a = r.get(i);
                r.move(a, s), JI(a, o);
              }
            });
            for (let o = 0, i = r.length; o < i; o++) {
              const a = r.get(o).context;
              (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
            }
            n.forEachIdentityChange(o => {
              JI(r.get(o.currentIndex), o);
            });
          }
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(an), w(Gn), w(Qp));
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
      function JI(e, t) {
        e.context.$implicit = t.item;
      }
      let la = (() => {
        class e {
          constructor(n, r) {
            (this._viewContainer = n),
              (this._context = new cB()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = r);
          }
          set ngIf(n) {
            (this._context.$implicit = this._context.ngIf = n), this._updateView();
          }
          set ngIfThen(n) {
            eS('ngIfThen', n),
              (this._thenTemplateRef = n),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(n) {
            eS('ngIfElse', n),
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
          static ngTemplateContextGuard(n, r) {
            return !0;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(an), w(Gn));
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
      class cB {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function eS(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(`${e} must be a TemplateRef, but received '${He(t)}'.`);
      }
      class hg {
        constructor(t, n) {
          (this._viewContainerRef = t), (this._templateRef = n), (this._created = !1);
        }
        create() {
          (this._created = !0),
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
        destroy() {
          (this._created = !1), this._viewContainerRef.clear();
        }
        enforceState(t) {
          t && !this._created ? this.create() : !t && this._created && this.destroy();
        }
      }
      let ol = (() => {
          class e {
            constructor() {
              (this._defaultViews = []),
                (this._defaultUsed = !1),
                (this._caseCount = 0),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1);
            }
            set ngSwitch(n) {
              (this._ngSwitch = n), 0 === this._caseCount && this._updateDefaultCases(!0);
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
              if (this._defaultViews.length > 0 && n !== this._defaultUsed) {
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
        tS = (() => {
          class e {
            constructor(n, r, o) {
              (this.ngSwitch = o), o._addCase(), (this._view = new hg(n, r));
            }
            ngDoCheck() {
              this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase));
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(an), w(Gn), w(ol, 9));
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
        rS = (() => {
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
                !this._differ && n && (this._differ = this._differs.find(n).create());
            }
            ngDoCheck() {
              if (this._differ) {
                const n = this._differ.diff(this._ngStyle);
                n && this._applyChanges(n);
              }
            }
            _setStyle(n, r) {
              const [o, i] = n.split('.'),
                s = -1 === o.indexOf('-') ? void 0 : ar.DashCase;
              null != r
                ? this._renderer.setStyle(
                    this._ngEl.nativeElement,
                    o,
                    i ? `${r}${i}` : r,
                    s,
                  )
                : this._renderer.removeStyle(this._ngEl.nativeElement, o, s);
            }
            _applyChanges(n) {
              n.forEachRemovedItem(r => this._setStyle(r.key, null)),
                n.forEachAddedItem(r => this._setStyle(r.key, r.currentValue)),
                n.forEachChangedItem(r => this._setStyle(r.key, r.currentValue));
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(kt), w(Uu), w(zn));
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
        il = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Yi({ type: e }));
            static #n = (this.ɵinj = Co({}));
          }
          return e;
        })();
      const iS = 'browser';
      function sS(e) {
        return e === iS;
      }
      function aS(e) {
        return 'server' === e;
      }
      let FB = (() => {
        class e {
          static #e = (this.ɵprov = I({
            token: e,
            providedIn: 'root',
            factory: () => (sS(_(Bn)) ? new PB(_(Yt), window) : new LB()),
          }));
        }
        return e;
      })();
      class PB {
        constructor(t, n) {
          (this.document = t), (this.window = n), (this.offset = () => [0, 0]);
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
            const n = e.getElementById(t) || e.getElementsByName(t)[0];
            if (n) return n;
            if (
              'function' == typeof e.createTreeWalker &&
              e.body &&
              'function' == typeof e.body.attachShadow
            ) {
              const r = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let o = r.currentNode;
              for (; o; ) {
                const i = o.shadowRoot;
                if (i) {
                  const s = i.getElementById(t) || i.querySelector(`[name="${t}"]`);
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
      class LB {
        setOffset(t) {}
        getScrollPosition() {
          return [0, 0];
        }
        scrollToPosition(t) {}
        scrollToAnchor(t) {}
        setHistoryScrollRestoration(t) {}
      }
      class f$ extends gU {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class _g extends f$ {
        static makeCurrent() {
          !(function pU(e) {
            VI ??= e;
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
          return (n = n || this.getDefaultDocument()).createElement(t);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
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
          const n = (function h$() {
            return (
              (ha = ha || document.querySelector('base')),
              ha ? ha.getAttribute('href') : null
            );
          })();
          return null == n
            ? null
            : (function p$(e) {
                return new URL(e, document.baseURI).pathname;
              })(n);
        }
        resetBaseElement() {
          ha = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(t) {
          return (function iB(e, t) {
            t = encodeURIComponent(t);
            for (const n of e.split(';')) {
              const r = n.indexOf('='),
                [o, i] = -1 == r ? [n, ''] : [n.slice(0, r), n.slice(r + 1)];
              if (o.trim() === t) return decodeURIComponent(i);
            }
            return null;
          })(document.cookie, t);
        }
      }
      let ha = null,
        m$ = (() => {
          class e {
            build() {
              return new XMLHttpRequest();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const ul = new E('');
      let vS = (() => {
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
            if (((r = this._plugins.find(i => i.supports(n))), !r)) throw new D(5101, !1);
            return this._eventNameToPlugin.set(n, r), r;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(M(ul), M(se));
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      class Cg {
        constructor(t) {
          this._doc = t;
        }
      }
      const Dg = 'ng-app-id';
      let yS = (() => {
        class e {
          constructor(n, r, o, i = {}) {
            (this.doc = n),
              (this.appId = r),
              (this.nonce = o),
              (this.platformId = i),
              (this.styleRef = new Map()),
              (this.hostNodes = new Set()),
              (this.styleNodesInDOM = this.collectServerRenderedStyles()),
              (this.platformIsServer = aS(i)),
              this.resetHostNodes();
          }
          addStyles(n) {
            for (const r of n) 1 === this.changeUsageCount(r, 1) && this.onStyleAdded(r);
          }
          removeStyles(n) {
            for (const r of n)
              this.changeUsageCount(r, -1) <= 0 && this.onStyleRemoved(r);
          }
          ngOnDestroy() {
            const n = this.styleNodesInDOM;
            n && (n.forEach(r => r.remove()), n.clear());
            for (const r of this.getAllStyles()) this.onStyleRemoved(r);
            this.resetHostNodes();
          }
          addHost(n) {
            this.hostNodes.add(n);
            for (const r of this.getAllStyles()) this.addStyleToHost(n, r);
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
            const n = this.doc.head?.querySelectorAll(`style[${Dg}="${this.appId}"]`);
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
            if (i?.parentNode === n) return o.delete(r), i.removeAttribute(Dg), i;
            {
              const s = this.doc.createElement('style');
              return (
                this.nonce && s.setAttribute('nonce', this.nonce),
                (s.textContent = r),
                this.platformIsServer && s.setAttribute(Dg, this.appId),
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
            return new (r || e)(M(Yt), M(ds), M(Uf, 8), M(Bn));
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const Eg = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          math: 'http://www.w3.org/1998/Math/MathML',
        },
        wg = /%COMP%/g,
        C$ = new E('', { providedIn: 'root', factory: () => !0 });
      function CS(e, t) {
        return t.map(n => n.replace(wg, e));
      }
      let DS = (() => {
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
              (this.platformIsServer = aS(a)),
              (this.defaultRenderer = new bg(n, s, c, this.platformIsServer));
          }
          createRenderer(n, r) {
            if (!n || !r) return this.defaultRenderer;
            this.platformIsServer &&
              r.encapsulation === en.ShadowDom &&
              (r = { ...r, encapsulation: en.Emulated });
            const o = this.getOrCreateRenderer(n, r);
            return (
              o instanceof wS ? o.applyToHost(n) : o instanceof Ig && o.applyStyles(), o
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
                case en.Emulated:
                  i = new wS(c, u, r, this.appId, l, s, a, d);
                  break;
                case en.ShadowDom:
                  return new b$(c, u, n, r, s, a, this.nonce, d);
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
            return new (r || e)(M(vS), M(yS), M(ds), M(C$), M(Yt), M(Bn), M(se), M(Uf));
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
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
          return n ? this.doc.createElementNS(Eg[n] || n, t) : this.doc.createElement(t);
        }
        createComment(t) {
          return this.doc.createComment(t);
        }
        createText(t) {
          return this.doc.createTextNode(t);
        }
        appendChild(t, n) {
          (ES(t) ? t.content : t).appendChild(n);
        }
        insertBefore(t, n, r) {
          t && (ES(t) ? t.content : t).insertBefore(n, r);
        }
        removeChild(t, n) {
          n.remove();
        }
        selectRootElement(t, n) {
          let r = 'string' == typeof t ? this.doc.querySelector(t) : t;
          if (!r) throw new D(-5104, !1);
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
            const i = Eg[o];
            i ? t.setAttributeNS(i, n, r) : t.setAttribute(n, r);
          } else t.setAttribute(n, r);
        }
        removeAttribute(t, n, r) {
          if (r) {
            const o = Eg[r];
            o ? t.removeAttributeNS(o, n) : t.removeAttribute(`${r}:${n}`);
          } else t.removeAttribute(n);
        }
        addClass(t, n) {
          t.classList.add(n);
        }
        removeClass(t, n) {
          t.classList.remove(n);
        }
        setStyle(t, n, r, o) {
          o & (ar.DashCase | ar.Important)
            ? t.style.setProperty(n, r, o & ar.Important ? 'important' : '')
            : (t.style[n] = r);
        }
        removeStyle(t, n, r) {
          r & ar.DashCase ? t.style.removeProperty(n) : (t.style[n] = '');
        }
        setProperty(t, n, r) {
          null != t && (t[n] = r);
        }
        setValue(t, n) {
          t.nodeValue = n;
        }
        listen(t, n, r) {
          if ('string' == typeof t && !(t = vr().getGlobalEventTarget(this.doc, t)))
            throw new Error(`Unsupported event target ${t} for event ${n}`);
          return this.eventManager.addEventListener(t, n, this.decoratePreventDefault(r));
        }
        decoratePreventDefault(t) {
          return n => {
            if ('__ngUnwrap__' === n) return t;
            !1 === (this.platformIsServer ? this.ngZone.runGuarded(() => t(n)) : t(n)) &&
              n.preventDefault();
          };
        }
      }
      function ES(e) {
        return 'TEMPLATE' === e.tagName && void 0 !== e.content;
      }
      class b$ extends bg {
        constructor(t, n, r, o, i, s, a, c) {
          super(t, i, s, c),
            (this.sharedStylesHost = n),
            (this.hostEl = r),
            (this.shadowRoot = r.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const u = CS(o.id, o.styles);
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
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
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
            (this.styles = c ? CS(c, r.styles) : r.styles);
        }
        applyStyles() {
          this.sharedStylesHost.addStyles(this.styles);
        }
        destroy() {
          this.removeStylesOnCompDestroy &&
            this.sharedStylesHost.removeStyles(this.styles);
        }
      }
      class wS extends Ig {
        constructor(t, n, r, o, i, s, a, c) {
          const u = o + '-' + r.id;
          super(t, n, r, i, s, a, c, u),
            (this.contentAttr = (function D$(e) {
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
      let I$ = (() => {
          class e extends Cg {
            constructor(n) {
              super(n);
            }
            supports(n) {
              return !0;
            }
            addEventListener(n, r, o) {
              return (
                n.addEventListener(r, o, !1), () => this.removeEventListener(n, r, o)
              );
            }
            removeEventListener(n, r, o) {
              return n.removeEventListener(r, o);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(M(Yt));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })(),
        S$ = (() => {
          class e extends Cg {
            constructor(n) {
              super(n), (this.delegate = _(TI, { optional: !0 }));
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
              return new (r || e)(M(Yt));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
            }));
          }
          return e;
        })();
      const bS = ['alt', 'control', 'meta', 'shift'],
        M$ = {
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
        T$ = {
          alt: e => e.altKey,
          control: e => e.ctrlKey,
          meta: e => e.metaKey,
          shift: e => e.shiftKey,
        };
      function IS(e) {
        return {
          appProviders: [...k$, ...(e?.providers ?? [])],
          platformProviders: F$,
        };
      }
      const F$ = [
          { provide: Bn, useValue: iS },
          {
            provide: F_,
            useValue: function R$() {
              _g.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: Yt,
            useFactory: function O$() {
              return (
                (function eO(e) {
                  jf = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ],
        k$ = [
          { provide: Qd, useValue: 'root' },
          {
            provide: Dn,
            useFactory: function x$() {
              return new Dn();
            },
            deps: [],
          },
          {
            provide: ul,
            useClass: I$,
            multi: !0,
            deps: [Yt, se, Bn],
          },
          {
            provide: ul,
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
                    s = e.eventCallback(i.fullKey, o, this.manager.getZone());
                  return this.manager
                    .getZone()
                    .runOutsideAngular(() => vr().onAndCancel(n, i.domEventName, s));
                }
                static parseEventName(n) {
                  const r = n.toLowerCase().split('.'),
                    o = r.shift();
                  if (0 === r.length || ('keydown' !== o && 'keyup' !== o)) return null;
                  const i = e._normalizeKey(r.pop());
                  let s = '',
                    a = r.indexOf('code');
                  if (
                    (a > -1 && (r.splice(a, 1), (s = 'code.')),
                    bS.forEach(u => {
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
                  let o = M$[n.key] || n.key,
                    i = '';
                  return (
                    r.indexOf('code.') > -1 && ((o = n.code), (i = 'code.')),
                    !(null == o || !o) &&
                      ((o = o.toLowerCase()),
                      ' ' === o ? (o = 'space') : '.' === o && (o = 'dot'),
                      bS.forEach(s => {
                        s !== o && (0, T$[s])(n) && (i += s + '.');
                      }),
                      (i += o),
                      i === r)
                  );
                }
                static eventCallback(n, r, o) {
                  return i => {
                    e.matchEventFullKeyCode(i, n) && o.runGuarded(() => r(i));
                  };
                }
                static _normalizeKey(n) {
                  return 'esc' === n ? 'escape' : n;
                }
                static #e = (this.ɵfac = function (r) {
                  return new (r || e)(M(Yt));
                });
                static #t = (this.ɵprov = I({
                  token: e,
                  factory: e.ɵfac,
                }));
              }
              return e;
            })(),
            multi: !0,
            deps: [Yt],
          },
          { provide: ul, useClass: S$, multi: !0 },
          DS,
          yS,
          vS,
          { provide: $h, useExisting: DS },
          { provide: class VB {}, useClass: m$, deps: [] },
          [],
        ];
      let L$ = (() => {
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
            return new (r || e)(M(Yt));
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function yr(e) {
        return this instanceof yr ? ((this.v = e), this) : new yr(e);
      }
      function RS(e) {
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
                      e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
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
      const xS = e => e && 'number' == typeof e.length && 'function' != typeof e;
      function OS(e) {
        return Ee(e?.then);
      }
      function FS(e) {
        return Ee(e[yd]);
      }
      function PS(e) {
        return Symbol.asyncIterator && Ee(e?.[Symbol.asyncIterator]);
      }
      function kS(e) {
        return new TypeError(
          `You provided ${
            null !== e && 'object' == typeof e ? 'an invalid object' : `'${e}'`
          } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
        );
      }
      const LS = (function uH() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      })();
      function VS(e) {
        return Ee(e?.[LS]);
      }
      function jS(e) {
        return (function NS(e, t, n) {
          if (!Symbol.asyncIterator)
            throw new TypeError('Symbol.asyncIterator is not defined.');
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
                h.value instanceof yr
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
              const { value: r, done: o } = yield yr(n.read());
              if (o) return yield yr(void 0);
              yield yield yr(r);
            }
          } finally {
            n.releaseLock();
          }
        });
      }
      function US(e) {
        return Ee(e?.getReader);
      }
      function fn(e) {
        if (e instanceof Re) return e;
        if (null != e) {
          if (FS(e))
            return (function lH(e) {
              return new Re(t => {
                const n = e[yd]();
                if (Ee(n.subscribe)) return n.subscribe(t);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(e);
          if (xS(e))
            return (function dH(e) {
              return new Re(t => {
                for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
                t.complete();
              });
            })(e);
          if (OS(e))
            return (function fH(e) {
              return new Re(t => {
                e.then(
                  n => {
                    t.closed || (t.next(n), t.complete());
                  },
                  n => t.error(n),
                ).then(null, av);
              });
            })(e);
          if (PS(e)) return BS(e);
          if (VS(e))
            return (function hH(e) {
              return new Re(t => {
                for (const n of e) if ((t.next(n), t.closed)) return;
                t.complete();
              });
            })(e);
          if (US(e))
            return (function pH(e) {
              return BS(jS(e));
            })(e);
        }
        throw kS(e);
      }
      function BS(e) {
        return new Re(t => {
          (function gH(e, t) {
            var n, r, o, i;
            return (function TS(e, t, n, r) {
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
                for (n = RS(e); !(r = yield n.next()).done; )
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
      function Yn(e, t, n, r = 0, o = !1) {
        const i = t.schedule(function () {
          n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
        }, r);
        if ((e.add(i), !o)) return i;
      }
      function Ng(e, t = 0) {
        return Le((n, r) => {
          n.subscribe(
            Ne(
              r,
              o => Yn(r, e, () => r.next(o), t),
              () => Yn(r, e, () => r.complete(), t),
              o => Yn(r, e, () => r.error(o), t),
            ),
          );
        });
      }
      function $S(e, t = 0) {
        return Le((n, r) => {
          r.add(e.schedule(() => n.subscribe(r), t));
        });
      }
      function HS(e, t) {
        if (!e) throw new Error('Iterable cannot be null');
        return new Re(n => {
          Yn(n, t, () => {
            const r = e[Symbol.asyncIterator]();
            Yn(
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
      function it(e, t) {
        return t
          ? (function DH(e, t) {
              if (null != e) {
                if (FS(e))
                  return (function mH(e, t) {
                    return fn(e).pipe($S(t), Ng(t));
                  })(e, t);
                if (xS(e))
                  return (function yH(e, t) {
                    return new Re(n => {
                      let r = 0;
                      return t.schedule(function () {
                        r === e.length
                          ? n.complete()
                          : (n.next(e[r++]), n.closed || this.schedule());
                      });
                    });
                  })(e, t);
                if (OS(e))
                  return (function vH(e, t) {
                    return fn(e).pipe($S(t), Ng(t));
                  })(e, t);
                if (PS(e)) return HS(e, t);
                if (VS(e))
                  return (function _H(e, t) {
                    return new Re(n => {
                      let r;
                      return (
                        Yn(n, t, () => {
                          (r = e[LS]()),
                            Yn(
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
                        () => Ee(r?.return) && r.return()
                      );
                    });
                  })(e, t);
                if (US(e))
                  return (function CH(e, t) {
                    return HS(jS(e), t);
                  })(e, t);
              }
              throw kS(e);
            })(e, t)
          : fn(e);
      }
      function Rg(e) {
        return e[e.length - 1];
      }
      function xg(e) {
        return Ee(Rg(e)) ? e.pop() : void 0;
      }
      function dl(e) {
        return (function EH(e) {
          return e && Ee(e.schedule);
        })(Rg(e))
          ? e.pop()
          : void 0;
      }
      function H(...e) {
        return it(e, dl(e));
      }
      const fl = dd(
          e =>
            function () {
              e(this),
                (this.name = 'EmptyError'),
                (this.message = 'no elements in sequence');
            },
        ),
        { isArray: wH } = Array,
        { getPrototypeOf: bH, prototype: IH, keys: SH } = Object;
      function GS(e) {
        if (1 === e.length) {
          const t = e[0];
          if (wH(t)) return { args: t, keys: null };
          if (
            (function MH(e) {
              return e && 'object' == typeof e && bH(e) === IH;
            })(t)
          ) {
            const n = SH(t);
            return { args: n.map(r => t[r]), keys: n };
          }
        }
        return { args: e, keys: null };
      }
      const { isArray: TH } = Array;
      function zS(e) {
        return ne(t =>
          (function AH(e, t) {
            return TH(t) ? e(...t) : e(t);
          })(e, t),
        );
      }
      function qS(e, t) {
        return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
      }
      function Og(...e) {
        const t = dl(e),
          n = xg(e),
          { args: r, keys: o } = GS(e);
        if (0 === r.length) return it([], t);
        const i = new Re(
          (function NH(e, t, n = Fn) {
            return r => {
              WS(
                t,
                () => {
                  const { length: o } = e,
                    i = new Array(o);
                  let s = o,
                    a = o;
                  for (let c = 0; c < o; c++)
                    WS(
                      t,
                      () => {
                        const u = it(e[c], t);
                        let l = !1;
                        u.subscribe(
                          Ne(
                            r,
                            d => {
                              (i[c] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
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
          })(r, t, o ? s => qS(o, s) : Fn),
        );
        return n ? i.pipe(zS(n)) : i;
      }
      function WS(e, t, n) {
        e ? Yn(n, e, t) : t();
      }
      function mt(e, t, n = 1 / 0) {
        return Ee(t)
          ? mt((r, o) => ne((i, s) => t(r, i, o, s))(fn(e(r, o))), n)
          : ('number' == typeof t && (n = t),
            Le((r, o) =>
              (function RH(e, t, n, r, o, i, s, a) {
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
                    fn(n(g, l++)).subscribe(
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
                                s ? Yn(t, s, () => p(C)) : p(C);
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
      function hl(...e) {
        return (function xH() {
          return (function Fg(e = 1 / 0) {
            return mt(Fn, e);
          })(1);
        })()(it(e, dl(e)));
      }
      function ZS(e) {
        return new Re(t => {
          fn(e()).subscribe(t);
        });
      }
      function pl(e, t) {
        const n = Ee(e) ? e : () => e,
          r = o => o.error(n());
        return new Re(t ? o => t.schedule(r, 0, o) : r);
      }
      const An = new Re(e => e.complete());
      function Pg() {
        return Le((e, t) => {
          let n = null;
          e._refCount++;
          const r = Ne(t, void 0, void 0, void 0, () => {
            if (!e || e._refCount <= 0 || 0 < --e._refCount) return void (n = null);
            const o = e._connection,
              i = n;
            (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
          });
          e.subscribe(r), r.closed || (n = e.connect());
        });
      }
      class YS extends Re {
        constructor(t, n) {
          super(),
            (this.source = t),
            (this.subjectFactory = n),
            (this._subject = null),
            (this._refCount = 0),
            (this._connection = null),
            dv(t) && (this.lift = t.lift);
        }
        _subscribe(t) {
          return this.getSubject().subscribe(t);
        }
        getSubject() {
          const t = this._subject;
          return (
            (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject
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
            t = this._connection = new tt();
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
              t.closed && ((this._connection = null), (t = tt.EMPTY));
          }
          return t;
        }
        refCount() {
          return Pg()(this);
        }
      }
      function Qn(e, t) {
        return Le((n, r) => {
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
                fn(e(c, l)).subscribe(
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
      function to(e) {
        return e <= 0
          ? () => An
          : Le((t, n) => {
              let r = 0;
              t.subscribe(
                Ne(n, o => {
                  ++r <= e && (n.next(o), e <= r && n.complete());
                }),
              );
            });
      }
      function QS(...e) {
        const t = dl(e);
        return Le((n, r) => {
          (t ? hl(e, n, t) : hl(e, n)).subscribe(r);
        });
      }
      function _r(e, t) {
        return Le((n, r) => {
          let o = 0;
          n.subscribe(Ne(r, i => e.call(t, i, o++) && r.next(i)));
        });
      }
      function gl(e) {
        return Le((t, n) => {
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
      function KS(e = FH) {
        return Le((t, n) => {
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
      function FH() {
        return new fl();
      }
      function no(e, t) {
        const n = arguments.length >= 2;
        return r =>
          r.pipe(
            e ? _r((o, i) => e(o, i, r)) : Fn,
            to(1),
            n ? gl(t) : KS(() => new fl()),
          );
      }
      function ml(e, t) {
        return Ee(t) ? mt(e, t, 1) : mt(e, 1);
      }
      function vt(e, t, n) {
        const r = Ee(e) || t || n ? { next: e, error: t, complete: n } : e;
        return r
          ? Le((o, i) => {
              var s;
              null === (s = r.subscribe) || void 0 === s || s.call(r);
              let a = !0;
              o.subscribe(
                Ne(
                  i,
                  c => {
                    var u;
                    null === (u = r.next) || void 0 === u || u.call(r, c), i.next(c);
                  },
                  () => {
                    var c;
                    (a = !1),
                      null === (c = r.complete) || void 0 === c || c.call(r),
                      i.complete();
                  },
                  c => {
                    var u;
                    (a = !1),
                      null === (u = r.error) || void 0 === u || u.call(r, c),
                      i.error(c);
                  },
                  () => {
                    var c, u;
                    a && (null === (c = r.unsubscribe) || void 0 === c || c.call(r)),
                      null === (u = r.finalize) || void 0 === u || u.call(r);
                  },
                ),
              );
            })
          : Fn;
      }
      function Ii(e) {
        return Le((t, n) => {
          let i,
            r = null,
            o = !1;
          (r = t.subscribe(
            Ne(n, void 0, void 0, s => {
              (i = fn(e(s, Ii(e)(t)))),
                r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
            }),
          )),
            o && (r.unsubscribe(), (r = null), i.subscribe(n));
        });
      }
      function XS(e, t) {
        return Le(
          (function PH(e, t, n, r, o) {
            return (i, s) => {
              let a = n,
                c = t,
                u = 0;
              i.subscribe(
                Ne(
                  s,
                  l => {
                    const d = u++;
                    (c = a ? e(c, l, d) : ((a = !0), l)), r && s.next(c);
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
      function kg(e) {
        return e <= 0
          ? () => An
          : Le((t, n) => {
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
      function Lg(e) {
        return Le((t, n) => {
          try {
            t.subscribe(n);
          } finally {
            n.add(e);
          }
        });
      }
      function JS(e) {
        return Le((t, n) => {
          fn(e).subscribe(Ne(n, () => n.complete(), Wa)), !n.closed && t.subscribe(n);
        });
      }
      const G = 'primary',
        pa = Symbol('RouteTitle');
      class VH {
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
        return new VH(e);
      }
      function jH(e, t, n) {
        const r = n.path.split('/');
        if (
          r.length > e.length ||
          ('full' === n.pathMatch && (t.hasChildren() || r.length < e.length))
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
      function Nn(e, t) {
        const n = e ? Vg(e) : void 0,
          r = t ? Vg(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let o;
        for (let i = 0; i < n.length; i++) if (((o = n[i]), !eM(e[o], t[o]))) return !1;
        return !0;
      }
      function Vg(e) {
        return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
      }
      function eM(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((o, i) => r[i] === o);
        }
        return e === t;
      }
      function tM(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function Cr(e) {
        return (function B$(e) {
          return !!e && (e instanceof Re || (Ee(e.lift) && Ee(e.subscribe)));
        })(e)
          ? e
          : na(e)
          ? it(Promise.resolve(e))
          : H(e);
      }
      const BH = {
          exact: function oM(e, t, n) {
            if (
              !oo(e.segments, t.segments) ||
              !vl(e.segments, t.segments, n) ||
              e.numberOfChildren !== t.numberOfChildren
            )
              return !1;
            for (const r in t.children)
              if (!e.children[r] || !oM(e.children[r], t.children[r], n)) return !1;
            return !0;
          },
          subset: iM,
        },
        nM = {
          exact: function $H(e, t) {
            return Nn(e, t);
          },
          subset: function HH(e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every(n => eM(e[n], t[n]))
            );
          },
          ignored: () => !0,
        };
      function rM(e, t, n) {
        return (
          BH[n.paths](e.root, t.root, n.matrixParams) &&
          nM[n.queryParams](e.queryParams, t.queryParams) &&
          !('exact' === n.fragment && e.fragment !== t.fragment)
        );
      }
      function iM(e, t, n) {
        return sM(e, t, t.segments, n);
      }
      function sM(e, t, n, r) {
        if (e.segments.length > n.length) {
          const o = e.segments.slice(0, n.length);
          return !(!oo(o, n) || t.hasChildren() || !vl(o, n, r));
        }
        if (e.segments.length === n.length) {
          if (!oo(e.segments, n) || !vl(e.segments, n, r)) return !1;
          for (const o in t.children)
            if (!e.children[o] || !iM(e.children[o], t.children[o], r)) return !1;
          return !0;
        }
        {
          const o = n.slice(0, e.segments.length),
            i = n.slice(e.segments.length);
          return (
            !!(oo(e.segments, o) && vl(e.segments, o, r) && e.children[G]) &&
            sM(e.children[G], t, i, r)
          );
        }
      }
      function vl(e, t, n) {
        return t.every((r, o) => nM[n](e[o].parameters, r.parameters));
      }
      class ro {
        constructor(t = new he([], {}), n = {}, r = null) {
          (this.root = t), (this.queryParams = n), (this.fragment = r);
        }
        get queryParamMap() {
          return (this._queryParamMap ??= Si(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return qH.serialize(this);
        }
      }
      class he {
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
          return _l(this);
        }
      }
      class ga {
        constructor(t, n) {
          (this.path = t), (this.parameters = n);
        }
        get parameterMap() {
          return (this._parameterMap ??= Si(this.parameters)), this._parameterMap;
        }
        toString() {
          return uM(this);
        }
      }
      function oo(e, t) {
        return e.length === t.length && e.every((n, r) => n.path === t[r].path);
      }
      let Mi = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: () => new yl(),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class yl {
        parse(t) {
          const n = new r3(t);
          return new ro(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
        }
        serialize(t) {
          const n = `/${ma(t.root, !0)}`,
            r = (function YH(e) {
              const t = Object.entries(e)
                .map(([n, r]) =>
                  Array.isArray(r)
                    ? r.map(o => `${Cl(n)}=${Cl(o)}`).join('&')
                    : `${Cl(n)}=${Cl(r)}`,
                )
                .filter(n => n);
              return t.length ? `?${t.join('&')}` : '';
            })(t.queryParams);
          return `${n}${r}${
            'string' == typeof t.fragment
              ? `#${(function WH(e) {
                  return encodeURI(e);
                })(t.fragment)}`
              : ''
          }`;
        }
      }
      const qH = new yl();
      function _l(e) {
        return e.segments.map(t => uM(t)).join('/');
      }
      function ma(e, t) {
        if (!e.hasChildren()) return _l(e);
        if (t) {
          const n = e.children[G] ? ma(e.children[G], !1) : '',
            r = [];
          return (
            Object.entries(e.children).forEach(([o, i]) => {
              o !== G && r.push(`${o}:${ma(i, !1)}`);
            }),
            r.length > 0 ? `${n}(${r.join('//')})` : n
          );
        }
        {
          const n = (function zH(e, t) {
            let n = [];
            return (
              Object.entries(e.children).forEach(([r, o]) => {
                r === G && (n = n.concat(t(o, r)));
              }),
              Object.entries(e.children).forEach(([r, o]) => {
                r !== G && (n = n.concat(t(o, r)));
              }),
              n
            );
          })(e, (r, o) => (o === G ? [ma(e.children[G], !1)] : [`${o}:${ma(r, !1)}`]));
          return 1 === Object.keys(e.children).length && null != e.children[G]
            ? `${_l(e)}/${n[0]}`
            : `${_l(e)}/(${n.join('//')})`;
        }
      }
      function aM(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Cl(e) {
        return aM(e).replace(/%3B/gi, ';');
      }
      function jg(e) {
        return aM(e).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function Dl(e) {
        return decodeURIComponent(e);
      }
      function cM(e) {
        return Dl(e.replace(/\+/g, '%20'));
      }
      function uM(e) {
        return `${jg(e.path)}${(function ZH(e) {
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
      const KH = /^[^\/()?;=#]+/,
        JH = /^[^=?&#]+/,
        t3 = /^[^&#]+/;
      class r3 {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new he([], {})
              : new he([], this.parseChildren())
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
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
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
          this.peekStartsWith('/(') && (this.capture('/'), (n = this.parseParens(!0)));
          let r = {};
          return (
            this.peekStartsWith('(') && (r = this.parseParens(!1)),
            (t.length > 0 || Object.keys(n).length > 0) && (r[G] = new he(t, n)),
            r
          );
        }
        parseSegment() {
          const t = Ug(this.remaining);
          if ('' === t && this.peekStartsWith(';')) throw new D(4009, !1);
          return this.capture(t), new ga(Dl(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const n = (function XH(e) {
            const t = e.match(KH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const o = Ug(this.remaining);
            o && ((r = o), this.capture(r));
          }
          t[Dl(n)] = Dl(r);
        }
        parseQueryParam(t) {
          const n = (function e3(e) {
            const t = e.match(JH);
            return t ? t[0] : '';
          })(this.remaining);
          if (!n) return;
          this.capture(n);
          let r = '';
          if (this.consumeOptional('=')) {
            const s = (function n3(e) {
              const t = e.match(t3);
              return t ? t[0] : '';
            })(this.remaining);
            s && ((r = s), this.capture(r));
          }
          const o = cM(n),
            i = cM(r);
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
            if ('/' !== o && ')' !== o && ';' !== o) throw new D(4010, !1);
            let i;
            r.indexOf(':') > -1
              ? ((i = r.slice(0, r.indexOf(':'))), this.capture(i), this.capture(':'))
              : t && (i = G);
            const s = this.parseChildren();
            (n[i] = 1 === Object.keys(s).length ? s[G] : new he([], s)),
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
            ((this.remaining = this.remaining.substring(t.length)), !0)
          );
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new D(4011, !1);
        }
      }
      function lM(e) {
        return e.segments.length > 0 ? new he([], { [G]: e }) : e;
      }
      function dM(e) {
        const t = {};
        for (const [r, o] of Object.entries(e.children)) {
          const i = dM(o);
          if (r === G && 0 === i.segments.length && i.hasChildren())
            for (const [s, a] of Object.entries(i.children)) t[s] = a;
          else (i.segments.length > 0 || i.hasChildren()) && (t[r] = i);
        }
        return (function o3(e) {
          if (1 === e.numberOfChildren && e.children[G]) {
            const t = e.children[G];
            return new he(e.segments.concat(t.segments), t.children);
          }
          return e;
        })(new he(e.segments, t));
      }
      function io(e) {
        return e instanceof ro;
      }
      function fM(e) {
        let t;
        const o = lM(
          (function n(i) {
            const s = {};
            for (const c of i.children) {
              const u = n(c);
              s[c.outlet] = u;
            }
            const a = new he(i.url, s);
            return i === e && (t = a), a;
          })(e.root),
        );
        return t ?? o;
      }
      function hM(e, t, n, r) {
        let o = e;
        for (; o.parent; ) o = o.parent;
        if (0 === t.length) return Bg(o, o, o, n, r);
        const i = (function s3(e) {
          if ('string' == typeof e[0] && 1 === e.length && '/' === e[0])
            return new gM(!0, 0, e);
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
          return new gM(n, t, r);
        })(t);
        if (i.toRoot()) return Bg(o, o, new he([], {}), n, r);
        const s = (function a3(e, t, n) {
            if (e.isAbsolute) return new wl(t, !0, 0);
            if (!n) return new wl(t, !1, NaN);
            if (null === n.parent) return new wl(n, !0, 0);
            const r = El(e.commands[0]) ? 0 : 1;
            return (function c3(e, t, n) {
              let r = e,
                o = t,
                i = n;
              for (; i > o; ) {
                if (((i -= o), (r = r.parent), !r)) throw new D(4005, !1);
                o = r.segments.length;
              }
              return new wl(r, !1, o - i);
            })(n, n.segments.length - 1 + r, e.numberOfDoubleDots);
          })(i, o, e),
          a = s.processChildren
            ? ya(s.segmentGroup, s.index, i.commands)
            : mM(s.segmentGroup, s.index, i.commands);
        return Bg(o, s.segmentGroup, a, n, r);
      }
      function El(e) {
        return 'object' == typeof e && null != e && !e.outlets && !e.segmentPath;
      }
      function va(e) {
        return 'object' == typeof e && null != e && e.outlets;
      }
      function Bg(e, t, n, r, o) {
        let s,
          i = {};
        r &&
          Object.entries(r).forEach(([c, u]) => {
            i[c] = Array.isArray(u) ? u.map(l => `${l}`) : `${u}`;
          }),
          (s = e === t ? n : pM(e, t, n));
        const a = lM(dM(s));
        return new ro(a, i, o);
      }
      function pM(e, t, n) {
        const r = {};
        return (
          Object.entries(e.children).forEach(([o, i]) => {
            r[o] = i === t ? n : pM(i, t, n);
          }),
          new he(e.segments, r)
        );
      }
      class gM {
        constructor(t, n, r) {
          if (
            ((this.isAbsolute = t),
            (this.numberOfDoubleDots = n),
            (this.commands = r),
            t && r.length > 0 && El(r[0]))
          )
            throw new D(4003, !1);
          const o = r.find(va);
          if (o && o !== tM(r)) throw new D(4004, !1);
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class wl {
        constructor(t, n, r) {
          (this.segmentGroup = t), (this.processChildren = n), (this.index = r);
        }
      }
      function mM(e, t, n) {
        if (((e ??= new he([], {})), 0 === e.segments.length && e.hasChildren()))
          return ya(e, t, n);
        const r = (function l3(e, t, n) {
            let r = 0,
              o = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; o < e.segments.length; ) {
              if (r >= n.length) return i;
              const s = e.segments[o],
                a = n[r];
              if (va(a)) break;
              const c = `${a}`,
                u = r < n.length - 1 ? n[r + 1] : null;
              if (o > 0 && void 0 === c) break;
              if (c && u && 'object' == typeof u && void 0 === u.outlets) {
                if (!yM(c, u, s)) return i;
                r += 2;
              } else {
                if (!yM(c, {}, s)) return i;
                r++;
              }
              o++;
            }
            return { match: !0, pathIndex: o, commandIndex: r };
          })(e, t, n),
          o = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const i = new he(e.segments.slice(0, r.pathIndex), {});
          return (
            (i.children[G] = new he(e.segments.slice(r.pathIndex), e.children)),
            ya(i, 0, o)
          );
        }
        return r.match && 0 === o.length
          ? new he(e.segments, {})
          : r.match && !e.hasChildren()
          ? $g(e, t, n)
          : r.match
          ? ya(e, 0, o)
          : $g(e, t, n);
      }
      function ya(e, t, n) {
        if (0 === n.length) return new he(e.segments, {});
        {
          const r = (function u3(e) {
              return va(e[0]) ? e[0].outlets : { [G]: e };
            })(n),
            o = {};
          if (
            Object.keys(r).some(i => i !== G) &&
            e.children[G] &&
            1 === e.numberOfChildren &&
            0 === e.children[G].segments.length
          ) {
            const i = ya(e.children[G], t, n);
            return new he(e.segments, i.children);
          }
          return (
            Object.entries(r).forEach(([i, s]) => {
              'string' == typeof s && (s = [s]),
                null !== s && (o[i] = mM(e.children[i], t, s));
            }),
            Object.entries(e.children).forEach(([i, s]) => {
              void 0 === r[i] && (o[i] = s);
            }),
            new he(e.segments, o)
          );
        }
      }
      function $g(e, t, n) {
        const r = e.segments.slice(0, t);
        let o = 0;
        for (; o < n.length; ) {
          const i = n[o];
          if (va(i)) {
            const c = d3(i.outlets);
            return new he(r, c);
          }
          if (0 === o && El(n[0])) {
            r.push(new ga(e.segments[t].path, vM(n[0]))), o++;
            continue;
          }
          const s = va(i) ? i.outlets[G] : `${i}`,
            a = o < n.length - 1 ? n[o + 1] : null;
          s && a && El(a)
            ? (r.push(new ga(s, vM(a))), (o += 2))
            : (r.push(new ga(s, {})), o++);
        }
        return new he(r, {});
      }
      function d3(e) {
        const t = {};
        return (
          Object.entries(e).forEach(([n, r]) => {
            'string' == typeof r && (r = [r]),
              null !== r && (t[n] = $g(new he([], {}), 0, r));
          }),
          t
        );
      }
      function vM(e) {
        const t = {};
        return Object.entries(e).forEach(([n, r]) => (t[n] = `${r}`)), t;
      }
      function yM(e, t, n) {
        return e == n.path && Nn(t, n.parameters);
      }
      const _a = 'imperative';
      var ee = (function (e) {
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
      })(ee || {});
      class Rn {
        constructor(t, n) {
          (this.id = t), (this.url = n);
        }
      }
      class bl extends Rn {
        constructor(t, n, r = 'imperative', o = null) {
          super(t, n),
            (this.type = ee.NavigationStart),
            (this.navigationTrigger = r),
            (this.restoredState = o);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Dr extends Rn {
        constructor(t, n, r) {
          super(t, n), (this.urlAfterRedirects = r), (this.type = ee.NavigationEnd);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      var $t = (function (e) {
          return (
            (e[(e.Redirect = 0)] = 'Redirect'),
            (e[(e.SupersededByNewNavigation = 1)] = 'SupersededByNewNavigation'),
            (e[(e.NoDataFromResolver = 2)] = 'NoDataFromResolver'),
            (e[(e.GuardRejected = 3)] = 'GuardRejected'),
            e
          );
        })($t || {}),
        Il = (function (e) {
          return (
            (e[(e.IgnoredSameUrlNavigation = 0)] = 'IgnoredSameUrlNavigation'),
            (e[(e.IgnoredByUrlHandlingStrategy = 1)] = 'IgnoredByUrlHandlingStrategy'),
            e
          );
        })(Il || {});
      class so extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = ee.NavigationCancel);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Ti extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.reason = r),
            (this.code = o),
            (this.type = ee.NavigationSkipped);
        }
      }
      class Hg extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.error = r),
            (this.target = o),
            (this.type = ee.NavigationError);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class _M extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ee.RoutesRecognized);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class f3 extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ee.GuardsCheckStart);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class h3 extends Rn {
        constructor(t, n, r, o, i) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.shouldActivate = i),
            (this.type = ee.GuardsCheckEnd);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class p3 extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ee.ResolveStart);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class g3 extends Rn {
        constructor(t, n, r, o) {
          super(t, n),
            (this.urlAfterRedirects = r),
            (this.state = o),
            (this.type = ee.ResolveEnd);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class m3 {
        constructor(t) {
          (this.route = t), (this.type = ee.RouteConfigLoadStart);
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class v3 {
        constructor(t) {
          (this.route = t), (this.type = ee.RouteConfigLoadEnd);
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class y3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ee.ChildActivationStart);
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class _3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ee.ChildActivationEnd);
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class C3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ee.ActivationStart);
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class D3 {
        constructor(t) {
          (this.snapshot = t), (this.type = ee.ActivationEnd);
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class CM {
        constructor(t, n, r) {
          (this.routerEvent = t),
            (this.position = n),
            (this.anchor = r),
            (this.type = ee.Scroll);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Gg {}
      class Sl {
        constructor(t, n) {
          (this.url = t), (this.navigationBehaviorOptions = n);
        }
      }
      function hn(e) {
        return e.outlet || G;
      }
      function Ca(e) {
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
          return Ca(this.route?.snapshot) ?? this.rootInjector;
        }
        set injector(t) {}
        constructor(t) {
          (this.rootInjector = t),
            (this.outlet = null),
            (this.route = null),
            (this.children = new Da(this.rootInjector)),
            (this.attachRef = null);
        }
      }
      let Da = (() => {
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
            return r || ((r = new M3(this.rootInjector)), this.contexts.set(n, r)), r;
          }
          getContext(n) {
            return this.contexts.get(n) || null;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(M(Ft));
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class DM {
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
          const n = zg(t, this._root);
          return n ? n.children.map(r => r.value) : [];
        }
        firstChild(t) {
          const n = zg(t, this._root);
          return n && n.children.length > 0 ? n.children[0].value : null;
        }
        siblings(t) {
          const n = qg(t, this._root);
          return n.length < 2
            ? []
            : n[n.length - 2].children.map(o => o.value).filter(o => o !== t);
        }
        pathFromRoot(t) {
          return qg(t, this._root).map(n => n.value);
        }
      }
      function zg(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const r = zg(e, n);
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
      class pn {
        constructor(t, n) {
          (this.value = t), (this.children = n);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function Ai(e) {
        const t = {};
        return e && e.children.forEach(n => (t[n.value.outlet] = n)), t;
      }
      class EM extends DM {
        constructor(t, n) {
          super(t), (this.snapshot = n), Wg(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function wM(e) {
        const t = (function T3(e) {
            const i = new Tl([], {}, {}, '', {}, G, e, null, {});
            return new bM('', new pn(i, []));
          })(e),
          n = new ct([new ga('', {})]),
          r = new ct({}),
          o = new ct({}),
          i = new ct({}),
          s = new ct(''),
          a = new Ni(n, r, i, s, o, G, e, t.root);
        return (a.snapshot = t.root), new EM(new pn(a, []), t);
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
            (this.title = this.dataSubject?.pipe(ne(u => u[pa])) ?? H(void 0)),
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
          return (this._paramMap ??= this.params.pipe(ne(t => Si(t)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            (this._queryParamMap ??= this.queryParams.pipe(ne(t => Si(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function Ml(e, t, n = 'emptyOnly') {
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
          o && SM(o) && (r.resolve[pa] = o.title),
          r
        );
      }
      class Tl {
        get title() {
          return this.data?.[pa];
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
          return (this._queryParamMap ??= Si(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map(r => r.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class bM extends DM {
        constructor(t, n) {
          super(n), (this.url = t), Wg(this, n);
        }
        toString() {
          return IM(this._root);
        }
      }
      function Wg(e, t) {
        (t.value._routerState = e), t.children.forEach(n => Wg(e, n));
      }
      function IM(e) {
        const t = e.children.length > 0 ? ` { ${e.children.map(IM).join(', ')} } ` : '';
        return `${e.value}${t}`;
      }
      function Zg(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Nn(t.queryParams, n.queryParams) || e.queryParamsSubject.next(n.queryParams),
            t.fragment !== n.fragment && e.fragmentSubject.next(n.fragment),
            Nn(t.params, n.params) || e.paramsSubject.next(n.params),
            (function UH(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!Nn(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.urlSubject.next(n.url),
            Nn(t.data, n.data) || e.dataSubject.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.dataSubject.next(e._futureSnapshot.data);
      }
      function Yg(e, t) {
        const n =
          Nn(e.params, t.params) &&
          (function GH(e, t) {
            return oo(e, t) && e.every((n, r) => Nn(n.parameters, t[r].parameters));
          })(e.url, t.url);
        return n && !(!e.parent != !t.parent) && (!e.parent || Yg(e.parent, t.parent));
      }
      function SM(e) {
        return 'string' == typeof e.title || null === e.title;
      }
      let Al = (() => {
        class e {
          constructor() {
            (this.activated = null),
              (this._activatedRoute = null),
              (this.name = G),
              (this.activateEvents = new W()),
              (this.deactivateEvents = new W()),
              (this.attachEvents = new W()),
              (this.detachEvents = new W()),
              (this.parentContexts = _(Da)),
              (this.location = _(an)),
              (this.changeDetector = _(oa)),
              (this.inputBinder = _(Nl, { optional: !0 })),
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
                (this.deactivate(), this.parentContexts.onChildOutletDestroyed(o)),
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
              (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
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
            if (!this.activated) throw new D(4012, !1);
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new D(4012, !1);
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new D(4012, !1);
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
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
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
            if (this.isActivated) throw new D(4013, !1);
            this._activatedRoute = n;
            const o = this.location,
              s = n.snapshot.component,
              a = this.parentContexts.getOrCreateContext(this.name).children,
              c = new Qg(n, a, o.injector);
            (this.activated = o.createComponent(s, {
              index: o.length,
              injector: c,
              environmentInjector: r,
            })),
              this.changeDetector.markForCheck(),
              this.inputBinder?.bindActivatedRouteToOutletComponent(this),
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
            features: [zt],
          }));
        }
        return e;
      })();
      class Qg {
        __ngOutletInjector(t) {
          return new Qg(this.route, this.childContexts, t);
        }
        constructor(t, n, r) {
          (this.route = t), (this.childContexts = n), (this.parent = r);
        }
        get(t, n) {
          return t === Ni
            ? this.route
            : t === Da
            ? this.childContexts
            : this.parent.get(t, n);
        }
      }
      const Nl = new E('');
      function Ea(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const o = (function N3(e, t, n) {
            return t.children.map(r => {
              for (const o of n.children)
                if (e.shouldReuseRoute(r.value, o.value.snapshot)) return Ea(e, r, o);
              return Ea(e, r);
            });
          })(e, t, n);
          return new pn(r, o);
        }
        {
          if (e.shouldAttach(t.value)) {
            const i = e.retrieve(t.value);
            if (null !== i) {
              const s = i.route;
              return (
                (s.value._futureSnapshot = t.value),
                (s.children = t.children.map(a => Ea(e, a))),
                s
              );
            }
          }
          const r = (function R3(e) {
              return new Ni(
                new ct(e.url),
                new ct(e.params),
                new ct(e.queryParams),
                new ct(e.fragment),
                new ct(e.data),
                e.outlet,
                e.component,
                e,
              );
            })(t.value),
            o = t.children.map(i => Ea(e, i));
          return new pn(r, o);
        }
      }
      class Kg {
        constructor(t, n) {
          (this.redirectTo = t), (this.navigationBehaviorOptions = n);
        }
      }
      const TM = 'ngNavigationCancelingError';
      function Rl(e, t) {
        const { redirectTo: n, navigationBehaviorOptions: r } = io(t)
            ? { redirectTo: t, navigationBehaviorOptions: void 0 }
            : t,
          o = AM(!1, $t.Redirect);
        return (o.url = n), (o.navigationBehaviorOptions = r), o;
      }
      function AM(e, t) {
        const n = new Error(`NavigationCancelingError: ${e || ''}`);
        return (n[TM] = !0), (n.cancellationCode = t), n;
      }
      function NM(e) {
        return !!e && e[TM];
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
          t.value.component && this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, n)
            : this.deactivateRouteAndOutlet(t, n);
        }
        detachAndStoreRouteSubtree(t, n) {
          const r = n.getContext(t.value.outlet),
            o = r && t.value.component ? r.children : n,
            i = Ai(t);
          for (const s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
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
          for (const s of Object.values(i)) this.deactivateRouteAndItsChildren(s, o);
          r &&
            (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()),
            (r.attachRef = null),
            (r.route = null));
        }
        activateChildRoutes(t, n, r) {
          const o = Ai(n);
          t.children.forEach(i => {
            this.activateRoutes(i, o[i.value.outlet], r),
              this.forwardEvent(new D3(i.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new _3(t.value.snapshot));
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
                s.outlet && s.outlet.attach(a.componentRef, a.route.value),
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
      class RM {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class xl {
        constructor(t, n) {
          (this.component = t), (this.route = n);
        }
      }
      function P3(e, t, n) {
        const r = e._root;
        return wa(r, t ? t._root : null, n, [r.value]);
      }
      function Ri(e, t) {
        const n = Symbol(),
          r = t.get(e, n);
        return r === n
          ? 'function' != typeof e ||
            (function AN(e) {
              return null !== tc(e);
            })(e)
            ? t.get(e)
            : e
          : r;
      }
      function wa(e, t, n, r, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const i = Ai(t);
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
                      return !oo(e.url, t.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !oo(e.url, t.url) || !Nn(e.queryParams, t.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Yg(e, t) || !Nn(e.queryParams, t.queryParams);
                    default:
                      return !Yg(e, t);
                  }
                })(s, i, i.routeConfig.runGuardsAndResolvers);
                c
                  ? o.canActivateChecks.push(new RM(r))
                  : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
                  wa(e, t, i.component ? (a ? a.children : null) : n, r, o),
                  c &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    o.canDeactivateChecks.push(new xl(a.outlet.component, s));
              } else
                s && ba(t, a, o),
                  o.canActivateChecks.push(new RM(r)),
                  wa(e, null, i.component ? (a ? a.children : null) : n, r, o);
            })(s, i[s.value.outlet], n, r.concat([s.value]), o),
              delete i[s.value.outlet];
          }),
          Object.entries(i).forEach(([s, a]) => ba(a, n.getContext(s), o)),
          o
        );
      }
      function ba(e, t, n) {
        const r = Ai(e),
          o = e.value;
        Object.entries(r).forEach(([i, s]) => {
          ba(s, o.component ? (t ? t.children.getContext(i) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new xl(
              o.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              o,
            ),
          );
      }
      function Ia(e) {
        return 'function' == typeof e;
      }
      function xM(e) {
        return e instanceof fl || 'EmptyError' === e?.name;
      }
      const Ol = Symbol('INITIAL_VALUE');
      function xi() {
        return Qn(e =>
          Og(e.map(t => t.pipe(to(1), QS(Ol)))).pipe(
            ne(t => {
              for (const n of t)
                if (!0 !== n) {
                  if (n === Ol) return Ol;
                  if (!1 === n || z3(n)) return n;
                }
              return !0;
            }),
            _r(t => t !== Ol),
            to(1),
          ),
        );
      }
      function z3(e) {
        return io(e) || e instanceof Kg;
      }
      function OM(e) {
        return (function CA(...e) {
          return cv(e);
        })(
          vt(t => {
            if ('boolean' != typeof t) throw Rl(0, t);
          }),
          ne(t => !0 === t),
        );
      }
      class Xg {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class Fl extends Error {
        constructor(t) {
          super(), (this.urlTree = t);
        }
      }
      function Oi(e) {
        return pl(new Xg(e));
      }
      class oG {
        constructor(t, n) {
          (this.urlSerializer = t), (this.urlTree = n);
        }
        lineralizeSegments(t, n) {
          let r = [],
            o = n.root;
          for (;;) {
            if (((r = r.concat(o.segments)), 0 === o.numberOfChildren)) return H(r);
            if (o.numberOfChildren > 1 || !o.children[G]) return pl(new D(4e3, !1));
            o = o.children[G];
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
              y = rr(i, () =>
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
            if (y instanceof ro) throw new Fl(y);
            n = y;
          }
          const s = this.applyRedirectCreateUrlTree(n, this.urlSerializer.parse(n), t, r);
          if ('/' === n[0]) throw new Fl(s);
          return s;
        }
        applyRedirectCreateUrlTree(t, n, r, o) {
          const i = this.createSegmentGroup(t, n.root, r, o);
          return new ro(
            i,
            this.createQueryParams(n.queryParams, this.urlTree.queryParams),
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
            new he(i, s)
          );
        }
        createSegments(t, n, r, o) {
          return n.map(i =>
            ':' === i.path[0] ? this.findPosParam(t, i, o) : this.findOrReturn(i, r),
          );
        }
        findPosParam(t, n, r) {
          const o = r[n.path.substring(1)];
          if (!o) throw new D(4001, !1);
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
      function iG(e, t, n, r, o) {
        const i = FM(e, t, n);
        return i.matched
          ? ((r = (function E3(e, t) {
              return (
                e.providers &&
                  !e._injector &&
                  (e._injector = rp(e.providers, t, `Route: ${e.path}`)),
                e._injector ?? t
              );
            })(t, r)),
            (function tG(e, t, n, r) {
              const o = t.canMatch;
              return o && 0 !== o.length
                ? H(
                    o.map(s => {
                      const a = Ri(s, e);
                      return Cr(
                        (function G3(e) {
                          return e && Ia(e.canMatch);
                        })(a)
                          ? a.canMatch(t, n)
                          : rr(e, () => a(t, n)),
                      );
                    }),
                  ).pipe(xi(), OM())
                : H(!0);
            })(r, t, n).pipe(ne(s => (!0 === s ? i : { ...Jg }))))
          : H(i);
      }
      function FM(e, t, n) {
        if ('**' === t.path)
          return (function sG(e) {
            return {
              matched: !0,
              parameters: e.length > 0 ? tM(e).parameters : {},
              consumedSegments: e,
              remainingSegments: [],
              positionalParamSegments: {},
            };
          })(n);
        if ('' === t.path)
          return 'full' === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? { ...Jg }
            : {
                matched: !0,
                consumedSegments: [],
                remainingSegments: n,
                parameters: {},
                positionalParamSegments: {},
              };
        const o = (t.matcher || jH)(n, e, t);
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
      function PM(e, t, n, r) {
        return n.length > 0 &&
          (function uG(e, t, n) {
            return n.some(r => Pl(e, t, r) && hn(r) !== G);
          })(e, n, r)
          ? {
              segmentGroup: new he(t, cG(r, new he(n, e.children))),
              slicedSegments: [],
            }
          : 0 === n.length &&
            (function lG(e, t, n) {
              return n.some(r => Pl(e, t, r));
            })(e, n, r)
          ? {
              segmentGroup: new he(e.segments, aG(e, n, r, e.children)),
              slicedSegments: n,
            }
          : {
              segmentGroup: new he(e.segments, e.children),
              slicedSegments: n,
            };
      }
      function aG(e, t, n, r) {
        const o = {};
        for (const i of n)
          if (Pl(e, t, i) && !r[hn(i)]) {
            const s = new he([], {});
            o[hn(i)] = s;
          }
        return { ...r, ...o };
      }
      function cG(e, t) {
        const n = {};
        n[G] = t;
        for (const r of e)
          if ('' === r.path && hn(r) !== G) {
            const o = new he([], {});
            n[hn(r)] = o;
          }
        return n;
      }
      function Pl(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || 'full' !== n.pathMatch) && '' === n.path
        );
      }
      class fG {}
      class gG {
        constructor(t, n, r, o, i, s, a) {
          (this.injector = t),
            (this.configLoader = n),
            (this.rootComponentType = r),
            (this.config = o),
            (this.urlTree = i),
            (this.paramsInheritanceStrategy = s),
            (this.urlSerializer = a),
            (this.applyRedirects = new oG(this.urlSerializer, this.urlTree)),
            (this.absoluteRedirectCount = 0),
            (this.allowRedirects = !0);
        }
        noMatchError(t) {
          return new D(4002, `'${t.segmentGroup}'`);
        }
        recognize() {
          const t = PM(this.urlTree.root, [], [], this.config).segmentGroup;
          return this.match(t).pipe(
            ne(({ children: n, rootSnapshot: r }) => {
              const o = new pn(r, n),
                i = new bM('', o),
                s = (function i3(e, t, n = null, r = null) {
                  return hM(fM(e), t, n, r);
                })(r, [], this.urlTree.queryParams, this.urlTree.fragment);
              return (
                (s.queryParams = this.urlTree.queryParams),
                (i.url = this.urlSerializer.serialize(s)),
                { state: i, tree: s }
              );
            }),
          );
        }
        match(t) {
          const n = new Tl(
            [],
            Object.freeze({}),
            Object.freeze({ ...this.urlTree.queryParams }),
            this.urlTree.fragment,
            Object.freeze({}),
            G,
            this.rootComponentType,
            null,
            {},
          );
          return this.processSegmentGroup(this.injector, this.config, t, G, n).pipe(
            ne(r => ({ children: r, rootSnapshot: n })),
            Ii(r => {
              if (r instanceof Fl)
                return (this.urlTree = r.urlTree), this.match(r.urlTree.root);
              throw r instanceof Xg ? this.noMatchError(r) : r;
            }),
          );
        }
        processSegmentGroup(t, n, r, o, i) {
          return 0 === r.segments.length && r.hasChildren()
            ? this.processChildren(t, n, r, i)
            : this.processSegment(t, n, r, r.segments, o, !0, i).pipe(
                ne(s => (s instanceof pn ? [s] : [])),
              );
        }
        processChildren(t, n, r, o) {
          const i = [];
          for (const s of Object.keys(r.children))
            'primary' === s ? i.unshift(s) : i.push(s);
          return it(i).pipe(
            ml(s => {
              const a = r.children[s],
                c = (function S3(e, t) {
                  const n = e.filter(r => hn(r) === t);
                  return n.push(...e.filter(r => hn(r) !== t)), n;
                })(n, s);
              return this.processSegmentGroup(t, c, a, s, o);
            }),
            XS((s, a) => (s.push(...a), s)),
            gl(null),
            (function kH(e, t) {
              const n = arguments.length >= 2;
              return r =>
                r.pipe(
                  e ? _r((o, i) => e(o, i, r)) : Fn,
                  kg(1),
                  n ? gl(t) : KS(() => new fl()),
                );
            })(),
            mt(s => {
              if (null === s) return Oi(r);
              const a = kM(s);
              return (
                (function mG(e) {
                  e.sort((t, n) =>
                    t.value.outlet === G
                      ? -1
                      : n.value.outlet === G
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
          return it(n).pipe(
            ml(c =>
              this.processSegmentAgainstRoute(c._injector ?? t, n, c, r, o, i, s, a).pipe(
                Ii(u => {
                  if (u instanceof Xg) return H(null);
                  throw u;
                }),
              ),
            ),
            no(c => !!c),
            Ii(c => {
              if (xM(c))
                return (function dG(e, t, n) {
                  return 0 === t.length && !e.children[n];
                })(r, o, i)
                  ? H(new fG())
                  : Oi(r);
              throw c;
            }),
          );
        }
        processSegmentAgainstRoute(t, n, r, o, i, s, a, c) {
          return hn(r) === s || (s !== G && Pl(o, i, r))
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, o, r, i, s, c)
              : this.allowRedirects && a
              ? this.expandSegmentAgainstRouteUsingRedirect(t, o, n, r, i, s, c)
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
          } = FM(n, o, i);
          if (!c) return Oi(n);
          'string' == typeof o.redirectTo &&
            '/' === o.redirectTo[0] &&
            (this.absoluteRedirectCount++,
            this.absoluteRedirectCount > 31 && (this.allowRedirects = !1));
          const h = new Tl(
              i,
              u,
              Object.freeze({ ...this.urlTree.queryParams }),
              this.urlTree.fragment,
              LM(o),
              hn(o),
              o.component ?? o._loadedComponent ?? null,
              o,
              VM(o),
            ),
            p = Ml(h, a, this.paramsInheritanceStrategy);
          (h.params = Object.freeze(p.params)), (h.data = Object.freeze(p.data));
          const g = this.applyRedirects.applyRedirectCommands(l, o.redirectTo, d, h, t);
          return this.applyRedirects
            .lineralizeSegments(o, g)
            .pipe(mt(y => this.processSegment(t, r, n, y.concat(f), s, !1, a)));
        }
        matchSegmentAgainstRoute(t, n, r, o, i, s) {
          const a = iG(n, r, o, t);
          return (
            '**' === r.path && (n.children = {}),
            a.pipe(
              Qn(c =>
                c.matched
                  ? this.getChildConfig((t = r._injector ?? t), r, o).pipe(
                      Qn(({ routes: u }) => {
                        const l = r._loadedInjector ?? t,
                          {
                            parameters: d,
                            consumedSegments: f,
                            remainingSegments: h,
                          } = c,
                          p = new Tl(
                            f,
                            d,
                            Object.freeze({
                              ...this.urlTree.queryParams,
                            }),
                            this.urlTree.fragment,
                            LM(r),
                            hn(r),
                            r.component ?? r._loadedComponent ?? null,
                            r,
                            VM(r),
                          ),
                          g = Ml(p, s, this.paramsInheritanceStrategy);
                        (p.params = Object.freeze(g.params)),
                          (p.data = Object.freeze(g.data));
                        const { segmentGroup: y, slicedSegments: C } = PM(n, f, h, u);
                        if (0 === C.length && y.hasChildren())
                          return this.processChildren(l, u, y, p).pipe(
                            ne(A => new pn(p, A)),
                          );
                        if (0 === u.length && 0 === C.length) return H(new pn(p, []));
                        const m = hn(r) === i;
                        return this.processSegment(l, u, y, C, m ? G : i, !0, p).pipe(
                          ne(A => new pn(p, A instanceof pn ? [A] : [])),
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
              : (function eG(e, t, n, r) {
                  const o = t.canLoad;
                  return void 0 === o || 0 === o.length
                    ? H(!0)
                    : H(
                        o.map(s => {
                          const a = Ri(s, e);
                          return Cr(
                            (function U3(e) {
                              return e && Ia(e.canLoad);
                            })(a)
                              ? a.canLoad(t, n)
                              : rr(e, () => a(t, n)),
                          );
                        }),
                      ).pipe(xi(), OM());
                })(t, n, r).pipe(
                  mt(o =>
                    o
                      ? this.configLoader.loadChildren(t, n).pipe(
                          vt(i => {
                            (n._loadedRoutes = i.routes),
                              (n._loadedInjector = i.injector);
                          }),
                        )
                      : (function rG() {
                          return pl(AM(!1, $t.GuardRejected));
                        })(),
                  ),
                )
            : H({ routes: [], injector: t });
        }
      }
      function vG(e) {
        const t = e.value.routeConfig;
        return t && '' === t.path;
      }
      function kM(e) {
        const t = [],
          n = new Set();
        for (const r of e) {
          if (!vG(r)) {
            t.push(r);
            continue;
          }
          const o = t.find(i => r.value.routeConfig === i.value.routeConfig);
          void 0 !== o ? (o.children.push(...r.children), n.add(o)) : t.push(r);
        }
        for (const r of n) {
          const o = kM(r.children);
          t.push(new pn(r.value, o));
        }
        return t.filter(r => !n.has(r));
      }
      function LM(e) {
        return e.data || {};
      }
      function VM(e) {
        return e.resolve || {};
      }
      function jM(e) {
        const t = e.children.map(n => jM(n)).flat();
        return [e, ...t];
      }
      function em(e) {
        return Qn(t => {
          const n = e(t);
          return n ? it(n).pipe(ne(() => t)) : H(t);
        });
      }
      let UM = (() => {
          class e {
            buildTitle(n) {
              let r,
                o = n.root;
              for (; void 0 !== o; )
                (r = this.getResolvedTitleForRoute(o) ?? r),
                  (o = o.children.find(i => i.outlet === G));
              return r;
            }
            getResolvedTitleForRoute(n) {
              return n.data[pa];
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: () => _(wG),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        wG = (() => {
          class e extends UM {
            constructor(n) {
              super(), (this.title = n);
            }
            updateTitle(n) {
              const r = this.buildTitle(n);
              void 0 !== r && this.title.setTitle(r);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(M(L$));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const Sa = new E('', {
        providedIn: 'root',
        factory: () => ({}),
      });
      let BM = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = X({
            type: e,
            selectors: [['ng-component']],
            standalone: !0,
            features: [J],
            decls: 1,
            vars: 0,
            template: function (r, o) {
              1 & r && fe(0, 'router-outlet');
            },
            dependencies: [Al],
            encapsulation: 2,
          }));
        }
        return e;
      })();
      function tm(e) {
        const t = e.children && e.children.map(tm),
          n = t ? { ...e, children: t } : { ...e };
        return (
          !n.component &&
            !n.loadComponent &&
            (t || n.loadChildren) &&
            n.outlet &&
            n.outlet !== G &&
            (n.component = BM),
          n
        );
      }
      const kl = new E('');
      let $M = (() => {
        class e {
          constructor() {
            (this.componentLoaders = new WeakMap()),
              (this.childrenLoaders = new WeakMap()),
              (this.compiler = _(t2));
          }
          loadComponent(n) {
            if (this.componentLoaders.get(n)) return this.componentLoaders.get(n);
            if (n._loadedComponent) return H(n._loadedComponent);
            this.onLoadStartListener && this.onLoadStartListener(n);
            const r = Cr(n.loadComponent()).pipe(
                ne(HM),
                vt(i => {
                  this.onLoadEndListener && this.onLoadEndListener(n),
                    (n._loadedComponent = i);
                }),
                Lg(() => {
                  this.componentLoaders.delete(n);
                }),
              ),
              o = new YS(r, () => new at()).pipe(Pg());
            return this.componentLoaders.set(n, o), o;
          }
          loadChildren(n, r) {
            if (this.childrenLoaders.get(r)) return this.childrenLoaders.get(r);
            if (r._loadedRoutes)
              return H({
                routes: r._loadedRoutes,
                injector: r._loadedInjector,
              });
            this.onLoadStartListener && this.onLoadStartListener(r);
            const i = (function bG(e, t, n, r) {
                return Cr(e.loadChildren()).pipe(
                  ne(HM),
                  mt(o =>
                    o instanceof oE || Array.isArray(o)
                      ? H(o)
                      : it(t.compileModuleAsync(o)),
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
                          (s = i.get(kl, [], { optional: !0, self: !0 }).flat())),
                      { routes: s.map(tm), injector: i }
                    );
                  }),
                );
              })(r, this.compiler, n, this.onLoadEndListener).pipe(
                Lg(() => {
                  this.childrenLoaders.delete(r);
                }),
              ),
              s = new YS(i, () => new at()).pipe(Pg());
            return this.childrenLoaders.set(r, s), s;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function HM(e) {
        return (function IG(e) {
          return e && 'object' == typeof e && 'default' in e;
        })(e)
          ? e.default
          : e;
      }
      let nm = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: () => _(SG),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        SG = (() => {
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
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      const GM = new E(''),
        qM = new E('');
      let Ll = (() => {
        class e {
          get hasRequestedNavigation() {
            return 0 !== this.navigationId;
          }
          constructor() {
            (this.currentNavigation = null),
              (this.currentTransition = null),
              (this.lastSuccessfulNavigation = null),
              (this.events = new at()),
              (this.transitionAbortSubject = new at()),
              (this.configLoader = _($M)),
              (this.environmentInjector = _(Ft)),
              (this.urlSerializer = _(Mi)),
              (this.rootContexts = _(Da)),
              (this.location = _(ca)),
              (this.inputBindingEnabled = null !== _(Nl, { optional: !0 })),
              (this.titleStrategy = _(UM)),
              (this.options = _(Sa, { optional: !0 }) || {}),
              (this.paramsInheritanceStrategy =
                this.options.paramsInheritanceStrategy || 'emptyOnly'),
              (this.urlHandlingStrategy = _(nm)),
              (this.createViewTransition = _(GM, { optional: !0 })),
              (this.navigationErrorHandler = _(qM, { optional: !0 })),
              (this.navigationId = 0),
              (this.afterPreactivation = () => H(void 0)),
              (this.rootComponentType = null),
              (this.configLoader.onLoadEndListener = o => this.events.next(new v3(o))),
              (this.configLoader.onLoadStartListener = o => this.events.next(new m3(o)));
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
              (this.transitions = new ct({
                id: 0,
                currentUrlTree: r,
                currentRawUrl: r,
                extractedUrl: this.urlHandlingStrategy.extract(r),
                urlAfterRedirects: this.urlHandlingStrategy.extract(r),
                rawUrl: r,
                extras: {},
                resolve: () => {},
                reject: () => {},
                promise: Promise.resolve(!0),
                source: _a,
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
                _r(i => 0 !== i.id),
                ne(i => ({
                  ...i,
                  extractedUrl: this.urlHandlingStrategy.extract(i.rawUrl),
                })),
                Qn(i => {
                  let s = !1,
                    a = !1;
                  return H(i).pipe(
                    Qn(c => {
                      if (this.navigationId > i.id)
                        return (
                          this.cancelNavigationTransition(
                            i,
                            '',
                            $t.SupersededByNewNavigation,
                          ),
                          An
                        );
                      (this.currentTransition = i),
                        (this.currentNavigation = {
                          id: c.id,
                          initialUrl: c.rawUrl,
                          extractedUrl: c.extractedUrl,
                          targetBrowserUrl:
                            'string' == typeof c.extras.browserUrl
                              ? this.urlSerializer.parse(c.extras.browserUrl)
                              : c.extras.browserUrl,
                          trigger: c.source,
                          extras: c.extras,
                          previousNavigation: this.lastSuccessfulNavigation
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
                          (c.extras.onSameUrlNavigation ?? n.onSameUrlNavigation)
                      ) {
                        const d = '';
                        return (
                          this.events.next(
                            new Ti(
                              c.id,
                              this.urlSerializer.serialize(c.rawUrl),
                              d,
                              Il.IgnoredSameUrlNavigation,
                            ),
                          ),
                          c.resolve(!1),
                          An
                        );
                      }
                      if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                        return H(c).pipe(
                          Qn(d => {
                            const f = this.transitions?.getValue();
                            return (
                              this.events.next(
                                new bl(
                                  d.id,
                                  this.urlSerializer.serialize(d.extractedUrl),
                                  d.source,
                                  d.restoredState,
                                ),
                              ),
                              f !== this.transitions?.getValue() ? An : Promise.resolve(d)
                            );
                          }),
                          (function yG(e, t, n, r, o, i) {
                            return mt(s =>
                              (function hG(e, t, n, r, o, i, s = 'emptyOnly') {
                                return new gG(e, t, n, r, o, s, i).recognize();
                              })(e, t, n, r, s.extractedUrl, o, i).pipe(
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
                          vt(d => {
                            (i.targetSnapshot = d.targetSnapshot),
                              (i.urlAfterRedirects = d.urlAfterRedirects),
                              (this.currentNavigation = {
                                ...this.currentNavigation,
                                finalUrl: d.urlAfterRedirects,
                              });
                            const f = new _M(
                              d.id,
                              this.urlSerializer.serialize(d.extractedUrl),
                              this.urlSerializer.serialize(d.urlAfterRedirects),
                              d.targetSnapshot,
                            );
                            this.events.next(f);
                          }),
                        );
                      if (
                        u &&
                        this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                      ) {
                        const {
                            id: d,
                            extractedUrl: f,
                            source: h,
                            restoredState: p,
                            extras: g,
                          } = c,
                          y = new bl(d, this.urlSerializer.serialize(f), h, p);
                        this.events.next(y);
                        const C = wM(this.rootComponentType).snapshot;
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
                              this.urlSerializer.serialize(c.extractedUrl),
                              d,
                              Il.IgnoredByUrlHandlingStrategy,
                            ),
                          ),
                          c.resolve(!1),
                          An
                        );
                      }
                    }),
                    vt(c => {
                      const u = new f3(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(c.urlAfterRedirects),
                        c.targetSnapshot,
                      );
                      this.events.next(u);
                    }),
                    ne(
                      c => (
                        (this.currentTransition = i =
                          {
                            ...c,
                            guards: P3(
                              c.targetSnapshot,
                              c.currentSnapshot,
                              this.rootContexts,
                            ),
                          }),
                        i
                      ),
                    ),
                    (function q3(e, t) {
                      return mt(n => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: o,
                          guards: { canActivateChecks: i, canDeactivateChecks: s },
                        } = n;
                        return 0 === s.length && 0 === i.length
                          ? H({ ...n, guardsResult: !0 })
                          : (function W3(e, t, n, r) {
                              return it(e).pipe(
                                mt(o =>
                                  (function J3(e, t, n, r, o) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? H(
                                          i.map(a => {
                                            const c = Ca(t) ?? o,
                                              u = Ri(a, c);
                                            return Cr(
                                              (function H3(e) {
                                                return e && Ia(e.canDeactivate);
                                              })(u)
                                                ? u.canDeactivate(e, t, n, r)
                                                : rr(c, () => u(e, t, n, r)),
                                            ).pipe(no());
                                          }),
                                        ).pipe(xi())
                                      : H(!0);
                                  })(o.component, o.route, n, t, r),
                                ),
                                no(o => !0 !== o, !0),
                              );
                            })(s, r, o, e).pipe(
                              mt(a =>
                                a &&
                                (function j3(e) {
                                  return 'boolean' == typeof e;
                                })(a)
                                  ? (function Z3(e, t, n, r) {
                                      return it(t).pipe(
                                        ml(o =>
                                          hl(
                                            (function Q3(e, t) {
                                              return (
                                                null !== e && t && t(new y3(e)), H(!0)
                                              );
                                            })(o.route.parent, r),
                                            (function Y3(e, t) {
                                              return (
                                                null !== e && t && t(new C3(e)), H(!0)
                                              );
                                            })(o.route, r),
                                            (function X3(e, t, n) {
                                              const r = t[t.length - 1],
                                                i = t
                                                  .slice(0, t.length - 1)
                                                  .reverse()
                                                  .map(s =>
                                                    (function k3(e) {
                                                      const t = e.routeConfig
                                                        ? e.routeConfig.canActivateChild
                                                        : null;
                                                      return t && 0 !== t.length
                                                        ? {
                                                            node: e,
                                                            guards: t,
                                                          }
                                                        : null;
                                                    })(s),
                                                  )
                                                  .filter(s => null !== s)
                                                  .map(s =>
                                                    ZS(() =>
                                                      H(
                                                        s.guards.map(c => {
                                                          const u = Ca(s.node) ?? n,
                                                            l = Ri(c, u);
                                                          return Cr(
                                                            (function $3(e) {
                                                              return (
                                                                e &&
                                                                Ia(e.canActivateChild)
                                                              );
                                                            })(l)
                                                              ? l.canActivateChild(r, e)
                                                              : rr(u, () => l(r, e)),
                                                          ).pipe(no());
                                                        }),
                                                      ).pipe(xi()),
                                                    ),
                                                  );
                                              return H(i).pipe(xi());
                                            })(e, o.path, n),
                                            (function K3(e, t, n) {
                                              const r = t.routeConfig
                                                ? t.routeConfig.canActivate
                                                : null;
                                              if (!r || 0 === r.length) return H(!0);
                                              const o = r.map(i =>
                                                ZS(() => {
                                                  const s = Ca(t) ?? n,
                                                    a = Ri(i, s);
                                                  return Cr(
                                                    (function B3(e) {
                                                      return e && Ia(e.canActivate);
                                                    })(a)
                                                      ? a.canActivate(t, e)
                                                      : rr(s, () => a(t, e)),
                                                  ).pipe(no());
                                                }),
                                              );
                                              return H(o).pipe(xi());
                                            })(e, o.route, n),
                                          ),
                                        ),
                                        no(o => !0 !== o, !0),
                                      );
                                    })(r, i, e, t)
                                  : H(a),
                              ),
                              ne(a => ({ ...n, guardsResult: a })),
                            );
                      });
                    })(this.environmentInjector, c => this.events.next(c)),
                    vt(c => {
                      if (
                        ((i.guardsResult = c.guardsResult),
                        c.guardsResult && 'boolean' != typeof c.guardsResult)
                      )
                        throw Rl(0, c.guardsResult);
                      const u = new h3(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        this.urlSerializer.serialize(c.urlAfterRedirects),
                        c.targetSnapshot,
                        !!c.guardsResult,
                      );
                      this.events.next(u);
                    }),
                    _r(
                      c =>
                        !!c.guardsResult ||
                        (this.cancelNavigationTransition(c, '', $t.GuardRejected), !1),
                    ),
                    em(c => {
                      if (c.guards.canActivateChecks.length)
                        return H(c).pipe(
                          vt(u => {
                            const l = new p3(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              this.urlSerializer.serialize(u.urlAfterRedirects),
                              u.targetSnapshot,
                            );
                            this.events.next(l);
                          }),
                          Qn(u => {
                            let l = !1;
                            return H(u).pipe(
                              (function _G(e, t) {
                                return mt(n => {
                                  const {
                                    targetSnapshot: r,
                                    guards: { canActivateChecks: o },
                                  } = n;
                                  if (!o.length) return H(n);
                                  const i = new Set(o.map(c => c.route)),
                                    s = new Set();
                                  for (const c of i)
                                    if (!s.has(c)) for (const u of jM(c)) s.add(u);
                                  let a = 0;
                                  return it(s).pipe(
                                    ml(c =>
                                      i.has(c)
                                        ? (function CG(e, t, n, r) {
                                            const o = e.routeConfig,
                                              i = e._resolve;
                                            return (
                                              void 0 !== o?.title &&
                                                !SM(o) &&
                                                (i[pa] = o.title),
                                              (function DG(e, t, n, r) {
                                                const o = Vg(e);
                                                if (0 === o.length) return H({});
                                                const i = {};
                                                return it(o).pipe(
                                                  mt(s =>
                                                    (function EG(e, t, n, r) {
                                                      const o = Ca(t) ?? r,
                                                        i = Ri(e, o);
                                                      return Cr(
                                                        i.resolve
                                                          ? i.resolve(t, n)
                                                          : rr(o, () => i(t, n)),
                                                      );
                                                    })(e[s], t, n, r).pipe(
                                                      no(),
                                                      vt(a => {
                                                        if (a instanceof Kg)
                                                          throw Rl(new yl(), a);
                                                        i[s] = a;
                                                      }),
                                                    ),
                                                  ),
                                                  kg(1),
                                                  (function LH(e) {
                                                    return ne(() => e);
                                                  })(i),
                                                  Ii(s => (xM(s) ? An : pl(s))),
                                                );
                                              })(i, e, t, r).pipe(
                                                ne(
                                                  s => (
                                                    (e._resolvedData = s),
                                                    (e.data = Ml(e, e.parent, n).resolve),
                                                    null
                                                  ),
                                                ),
                                              )
                                            );
                                          })(c, r, e, t)
                                        : ((c.data = Ml(c, c.parent, e).resolve),
                                          H(void 0)),
                                    ),
                                    vt(() => a++),
                                    kg(1),
                                    mt(c => (a === s.size ? H(n) : An)),
                                  );
                                });
                              })(
                                this.paramsInheritanceStrategy,
                                this.environmentInjector,
                              ),
                              vt({
                                next: () => (l = !0),
                                complete: () => {
                                  l ||
                                    this.cancelNavigationTransition(
                                      u,
                                      '',
                                      $t.NoDataFromResolver,
                                    );
                                },
                              }),
                            );
                          }),
                          vt(u => {
                            const l = new g3(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              this.urlSerializer.serialize(u.urlAfterRedirects),
                              u.targetSnapshot,
                            );
                            this.events.next(l);
                          }),
                        );
                    }),
                    em(c => {
                      const u = l => {
                        const d = [];
                        l.routeConfig?.loadComponent &&
                          !l.routeConfig._loadedComponent &&
                          d.push(
                            this.configLoader.loadComponent(l.routeConfig).pipe(
                              vt(f => {
                                l.component = f;
                              }),
                              ne(() => {}),
                            ),
                          );
                        for (const f of l.children) d.push(...u(f));
                        return d;
                      };
                      return Og(u(c.targetSnapshot.root)).pipe(gl(null), to(1));
                    }),
                    em(() => this.afterPreactivation()),
                    Qn(() => {
                      const { currentSnapshot: c, targetSnapshot: u } = i,
                        l = this.createViewTransition?.(
                          this.environmentInjector,
                          c.root,
                          u.root,
                        );
                      return l ? it(l).pipe(ne(() => i)) : H(i);
                    }),
                    ne(c => {
                      const u = (function A3(e, t, n) {
                        const r = Ea(e, t._root, n ? n._root : void 0);
                        return new EM(r, t);
                      })(n.routeReuseStrategy, c.targetSnapshot, c.currentRouterState);
                      return (
                        (this.currentTransition = i = { ...c, targetRouterState: u }),
                        (this.currentNavigation.targetRouterState = u),
                        i
                      );
                    }),
                    vt(() => {
                      this.events.next(new Gg());
                    }),
                    ((e, t, n, r) =>
                      ne(
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
                    to(1),
                    vt({
                      next: c => {
                        (s = !0),
                          (this.lastSuccessfulNavigation = this.currentNavigation),
                          this.events.next(
                            new Dr(
                              c.id,
                              this.urlSerializer.serialize(c.extractedUrl),
                              this.urlSerializer.serialize(c.urlAfterRedirects),
                            ),
                          ),
                          this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),
                          c.resolve(!0);
                      },
                      complete: () => {
                        s = !0;
                      },
                    }),
                    JS(
                      this.transitionAbortSubject.pipe(
                        vt(c => {
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
                          $t.SupersededByNewNavigation,
                        ),
                        this.currentTransition?.id === i.id &&
                          ((this.currentNavigation = null),
                          (this.currentTransition = null));
                    }),
                    Ii(c => {
                      if (((a = !0), NM(c)))
                        this.events.next(
                          new so(
                            i.id,
                            this.urlSerializer.serialize(i.extractedUrl),
                            c.message,
                            c.cancellationCode,
                          ),
                        ),
                          (function x3(e) {
                            return NM(e) && io(e.url);
                          })(c)
                            ? this.events.next(new Sl(c.url, c.navigationBehaviorOptions))
                            : i.resolve(!1);
                      else {
                        const u = new Hg(
                          i.id,
                          this.urlSerializer.serialize(i.extractedUrl),
                          c,
                          i.targetSnapshot ?? void 0,
                        );
                        try {
                          const l = rr(this.environmentInjector, () =>
                            this.navigationErrorHandler?.(u),
                          );
                          if (l instanceof Kg) {
                            const { message: d, cancellationCode: f } = Rl(0, l);
                            this.events.next(
                              new so(
                                i.id,
                                this.urlSerializer.serialize(i.extractedUrl),
                                d,
                                f,
                              ),
                            ),
                              this.events.next(
                                new Sl(l.redirectTo, l.navigationBehaviorOptions),
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
                      return An;
                    }),
                  );
                }),
              )
            );
          }
          cancelNavigationTransition(n, r, o) {
            const i = new so(n.id, this.urlSerializer.serialize(n.extractedUrl), r, o);
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
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function AG(e) {
        return e !== _a;
      }
      let NG = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: () => _(xG),
            providedIn: 'root',
          }));
        }
        return e;
      })();
      class RG {
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
      let xG = (() => {
          class e extends RG {
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Ze(e)))(o || e);
              };
            })());
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        WM = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: () => _(OG),
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        OG = (() => {
          class e extends WM {
            constructor() {
              super(...arguments),
                (this.location = _(ca)),
                (this.urlSerializer = _(Mi)),
                (this.options = _(Sa, { optional: !0 }) || {}),
                (this.canceledNavigationResolution =
                  this.options.canceledNavigationResolution || 'replace'),
                (this.urlHandlingStrategy = _(nm)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.currentUrlTree = new ro()),
                (this.rawUrlTree = this.currentUrlTree),
                (this.currentPageId = 0),
                (this.lastSuccessfulId = -1),
                (this.routerState = wM(null)),
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
            registerNonRouterCurrentEntryChangeListener(n) {
              return this.location.subscribe(r => {
                'popstate' === r.type && n(r.url, r.state);
              });
            }
            handleRouterEvent(n, r) {
              if (n instanceof bl) this.stateMemento = this.createStateMemento();
              else if (n instanceof Ti) this.rawUrlTree = r.initialUrl;
              else if (n instanceof _M) {
                if ('eager' === this.urlUpdateStrategy && !r.extras.skipLocationChange) {
                  const o = this.urlHandlingStrategy.merge(r.finalUrl, r.initialUrl);
                  this.setBrowserUrl(r.targetBrowserUrl ?? o, r);
                }
              } else
                n instanceof Gg
                  ? ((this.currentUrlTree = r.finalUrl),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(
                      r.finalUrl,
                      r.initialUrl,
                    )),
                    (this.routerState = r.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      !r.extras.skipLocationChange &&
                      this.setBrowserUrl(r.targetBrowserUrl ?? this.rawUrlTree, r))
                  : n instanceof so &&
                    (n.code === $t.GuardRejected || n.code === $t.NoDataFromResolver)
                  ? this.restoreHistory(r)
                  : n instanceof Hg
                  ? this.restoreHistory(r, !0)
                  : n instanceof Dr &&
                    ((this.lastSuccessfulId = n.id),
                    (this.currentPageId = this.browserPageId));
            }
            setBrowserUrl(n, r) {
              const o = n instanceof ro ? this.urlSerializer.serialize(n) : n;
              if (this.location.isCurrentPathEqualTo(o) || r.extras.replaceUrl) {
                const s = {
                  ...r.extras.state,
                  ...this.generateNgRouterState(r.id, this.browserPageId),
                };
                this.location.replaceState(o, '', s);
              } else {
                const i = {
                  ...r.extras.state,
                  ...this.generateNgRouterState(r.id, this.browserPageId + 1),
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
                    (this.resetState(n), this.resetUrlToCurrentUrlTree());
              } else
                'replace' === this.canceledNavigationResolution &&
                  (r && this.resetState(n), this.resetUrlToCurrentUrlTree());
            }
            resetState(n) {
              (this.routerState = this.stateMemento.routerState),
                (this.currentUrlTree = this.stateMemento.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n.finalUrl ?? this.rawUrlTree,
                ));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
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
                return (n || (n = Ze(e)))(o || e);
              };
            })());
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      var Ma = (function (e) {
        return (
          (e[(e.COMPLETE = 0)] = 'COMPLETE'),
          (e[(e.FAILED = 1)] = 'FAILED'),
          (e[(e.REDIRECTING = 2)] = 'REDIRECTING'),
          e
        );
      })(Ma || {});
      function FG(e) {
        throw e;
      }
      const PG = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        kG = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let Kn = (() => {
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
                (this.console = _(Lb)),
                (this.stateManager = _(WM)),
                (this.options = _(Sa, { optional: !0 }) || {}),
                (this.pendingTasks = _(jr)),
                (this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred'),
                (this.navigationTransitions = _(Ll)),
                (this.urlSerializer = _(Mi)),
                (this.location = _(ca)),
                (this.urlHandlingStrategy = _(nm)),
                (this._events = new at()),
                (this.errorHandler = this.options.errorHandler || FG),
                (this.navigated = !1),
                (this.routeReuseStrategy = _(NG)),
                (this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore'),
                (this.config = _(kl, { optional: !0 })?.flat() ?? []),
                (this.componentInputBindingEnabled = !!_(Nl, {
                  optional: !0,
                })),
                (this.eventsSubscription = new tt()),
                this.resetConfig(this.config),
                this.navigationTransitions
                  .setupNavigations(this, this.currentUrlTree, this.routerState)
                  .subscribe({
                    error: n => {
                      this.console.warn(n);
                    },
                  }),
                this.subscribeToNavigationEvents();
            }
            subscribeToNavigationEvents() {
              const n = this.navigationTransitions.events.subscribe(r => {
                try {
                  const o = this.navigationTransitions.currentTransition,
                    i = this.navigationTransitions.currentNavigation;
                  if (null !== o && null !== i)
                    if (
                      (this.stateManager.handleRouterEvent(r, i),
                      r instanceof so &&
                        r.code !== $t.Redirect &&
                        r.code !== $t.SupersededByNewNavigation)
                    )
                      this.navigated = !0;
                    else if (r instanceof Dr) this.navigated = !0;
                    else if (r instanceof Sl) {
                      const s = r.navigationBehaviorOptions,
                        a = this.urlHandlingStrategy.merge(r.url, o.currentRawUrl),
                        c = {
                          browserUrl: o.extras.browserUrl,
                          info: o.extras.info,
                          skipLocationChange: o.extras.skipLocationChange,
                          replaceUrl:
                            o.extras.replaceUrl ||
                            'eager' === this.urlUpdateStrategy ||
                            AG(o.source),
                          ...s,
                        };
                      this.scheduleNavigation(a, _a, null, c, {
                        resolve: o.resolve,
                        reject: o.reject,
                        promise: o.promise,
                      });
                    }
                  (function VG(e) {
                    return !(e instanceof Gg || e instanceof Sl);
                  })(r) && this._events.next(r);
                } catch (o) {
                  this.navigationTransitions.transitionAbortSubject.next(o);
                }
              });
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
                    _a,
                    this.stateManager.restoredState(),
                  );
            }
            setUpLocationChangeListener() {
              this.nonRouterCurrentEntryChangeSubscription ??=
                this.stateManager.registerNonRouterCurrentEntryChangeListener((n, r) => {
                  setTimeout(() => {
                    this.navigateToSyncWithBrowser(n, 'popstate', r);
                  }, 0);
                });
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
              return this.navigationTransitions.lastSuccessfulNavigation;
            }
            resetConfig(n) {
              (this.config = n.map(tm)), (this.navigated = !1);
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
                d = fM(o ? o.snapshot : this.routerState.snapshot.root);
              } catch {
                ('string' != typeof n[0] || '/' !== n[0][0]) && (n = []),
                  (d = this.currentUrlTree.root);
              }
              return hM(d, n, l, u ?? null);
            }
            navigateByUrl(n, r = { skipLocationChange: !1 }) {
              const o = io(n) ? n : this.parseUrl(n),
                i = this.urlHandlingStrategy.merge(o, this.rawUrlTree);
              return this.scheduleNavigation(i, _a, null, r);
            }
            navigate(n, r = { skipLocationChange: !1 }) {
              return (
                (function LG(e) {
                  for (let t = 0; t < e.length; t++)
                    if (null == e[t]) throw new D(4008, !1);
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
              if (((o = !0 === r ? { ...PG } : !1 === r ? { ...kG } : r), io(n)))
                return rM(this.currentUrlTree, n, o);
              const i = this.parseUrl(n);
              return rM(this.currentUrlTree, i, o);
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
                (function ZM(e, t) {
                  e.events
                    .pipe(
                      _r(
                        n =>
                          n instanceof Dr ||
                          n instanceof so ||
                          n instanceof Hg ||
                          n instanceof Ti,
                      ),
                      ne(n =>
                        n instanceof Dr || n instanceof Ti
                          ? Ma.COMPLETE
                          : n instanceof so &&
                            (n.code === $t.Redirect ||
                              n.code === $t.SupersededByNewNavigation)
                          ? Ma.REDIRECTING
                          : Ma.FAILED,
                      ),
                      _r(n => n !== Ma.REDIRECTING),
                      to(1),
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
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        Ta = (() => {
          class e {
            constructor(n, r, o, i, s, a) {
              (this.router = n),
                (this.route = r),
                (this.tabIndexAttribute = o),
                (this.renderer = i),
                (this.el = s),
                (this.locationStrategy = a),
                (this.href = null),
                (this.onChanges = new at()),
                (this.preserveFragment = !1),
                (this.skipLocationChange = !1),
                (this.replaceUrl = !1),
                (this.routerLinkInput = null);
              const c = s.nativeElement.tagName?.toLowerCase();
              (this.isAnchorElement = 'a' === c || 'area' === c),
                this.isAnchorElement
                  ? (this.subscription = n.events.subscribe(u => {
                      u instanceof Dr && this.updateHref();
                    }))
                  : this.setTabIndexIfNotOnNativeEl('0');
            }
            setTabIndexIfNotOnNativeEl(n) {
              null != this.tabIndexAttribute ||
                this.isAnchorElement ||
                this.applyAttributeValue('tabindex', n);
            }
            ngOnChanges(n) {
              this.isAnchorElement && this.updateHref(), this.onChanges.next(this);
            }
            set routerLink(n) {
              null == n
                ? ((this.routerLinkInput = null), this.setTabIndexIfNotOnNativeEl(null))
                : ((this.routerLinkInput = io(n) || Array.isArray(n) ? n : [n]),
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
                      ('string' == typeof this.target && '_self' != this.target)))
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
                  ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(n))
                  : null;
              const r =
                null === this.href
                  ? null
                  : (function iC(e, t, n) {
                      return (function jO(e, t) {
                        return ('src' === t &&
                          ('embed' === e ||
                            'frame' === e ||
                            'iframe' === e ||
                            'media' === e ||
                            'script' === e)) ||
                          ('href' === t && ('base' === e || 'link' === e))
                          ? oC
                          : oh;
                      })(
                        t,
                        n,
                      )(e);
                    })(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
              this.applyAttributeValue('href', r);
            }
            applyAttributeValue(n, r) {
              const o = this.renderer,
                i = this.el.nativeElement;
              null !== r ? o.setAttribute(i, n, r) : o.removeAttribute(i, n);
            }
            get urlTree() {
              return null === this.routerLinkInput
                ? null
                : io(this.routerLinkInput)
                ? this.routerLinkInput
                : this.router.createUrlTree(this.routerLinkInput, {
                    relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                    queryParams: this.queryParams,
                    fragment: this.fragment,
                    queryParamsHandling: this.queryParamsHandling,
                    preserveFragment: this.preserveFragment,
                  });
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(
                w(Kn),
                w(Ni),
                (function as(e) {
                  return (function ux(e, t) {
                    if ('class' === t) return e.classes;
                    if ('style' === t) return e.styles;
                    const n = e.attrs;
                    if (n) {
                      const r = n.length;
                      let o = 0;
                      for (; o < r; ) {
                        const i = n[o];
                        if (Yv(i)) break;
                        if (0 === i) o += 2;
                        else if ('number' == typeof i)
                          for (o++; o < r && 'string' == typeof n[o]; ) o++;
                        else {
                          if (i === t) return n[o + 1];
                          o += 2;
                        }
                      }
                    }
                    return null;
                  })(le(), e);
                })('tabindex'),
                w(zn),
                w(kt),
                w(Ei),
              );
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'routerLink', '']],
              hostVars: 1,
              hostBindings: function (r, o) {
                1 & r &&
                  Y('click', function (s) {
                    return o.onClick(
                      s.button,
                      s.ctrlKey,
                      s.shiftKey,
                      s.altKey,
                      s.metaKey,
                    );
                  }),
                  2 & r && bn('target', o.target);
              },
              inputs: {
                target: 'target',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                state: 'state',
                info: 'info',
                relativeTo: 'relativeTo',
                preserveFragment: [2, 'preserveFragment', 'preserveFragment', Di],
                skipLocationChange: [2, 'skipLocationChange', 'skipLocationChange', Di],
                replaceUrl: [2, 'replaceUrl', 'replaceUrl', Di],
                routerLink: 'routerLink',
              },
              standalone: !0,
              features: [rE, zt],
            }));
          }
          return e;
        })();
      const rm = new E('');
      let YM = (() => {
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
              this.viewportScroller.setHistoryScrollRestoration('manual'),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.transitions.events.subscribe(n => {
              n instanceof bl
                ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = n.navigationTrigger),
                  (this.restoredId = n.restoredState ? n.restoredState.navigationId : 0))
                : n instanceof Dr
                ? ((this.lastId = n.id),
                  this.scheduleScrollEvent(
                    n,
                    this.urlSerializer.parse(n.urlAfterRedirects).fragment,
                  ))
                : n instanceof Ti &&
                  n.code === Il.IgnoredSameUrlNavigation &&
                  ((this.lastSource = void 0),
                  (this.restoredId = 0),
                  this.scheduleScrollEvent(n, this.urlSerializer.parse(n.url).fragment));
            });
          }
          consumeScrollEvents() {
            return this.transitions.events.subscribe(n => {
              n instanceof CM &&
                (n.position
                  ? 'top' === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : 'enabled' === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(n.position)
                  : n.anchor && 'enabled' === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(n.anchor)
                  : 'disabled' !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(n, r) {
            this.zone.runOutsideAngular(() => {
              setTimeout(() => {
                this.zone.run(() => {
                  this.transitions.events.next(
                    new CM(
                      n,
                      'popstate' === this.lastSource ? this.store[this.restoredId] : null,
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
            !(function NC() {
              throw new Error('invalid');
            })();
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function QM(e) {
        return e.routerState.root;
      }
      function xn(e, t) {
        return { ɵkind: e, ɵproviders: t };
      }
      function KM() {
        const e = _(Ke);
        return t => {
          const n = e.get(Mn);
          if (t !== n.components[0]) return;
          const r = e.get(Kn),
            o = e.get(XM);
          1 === e.get(om) && r.initialNavigation(),
            e.get(JM, null, Q.Optional)?.setUpPreloading(),
            e.get(rm, null, Q.Optional)?.init(),
            r.resetRootComponentType(n.componentTypes[0]),
            o.closed || (o.next(), o.complete(), o.unsubscribe());
        };
      }
      const XM = new E('', { factory: () => new at() }),
        om = new E('', { providedIn: 'root', factory: () => 1 }),
        JM = new E('');
      let YG = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-main']],
              standalone: !0,
              features: [J],
              decls: 1,
              vars: 0,
              template: function (r, o) {
                1 & r && fe(0, 'router-outlet');
              },
              dependencies: [Al],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        tT = (() => {
          class e {
            constructor(n) {
              this.router = n;
            }
            navigate(n) {
              this.router.navigate([n]);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(M(Kn));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function nT(e) {
        return Array.isArray(e) ? e : [e];
      }
      class XG extends tt {
        constructor(t, n) {
          super();
        }
        schedule(t, n = 0) {
          return this;
        }
      }
      const Vl = {
        setInterval(e, t, ...n) {
          const { delegate: r } = Vl;
          return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
        },
        clearInterval(e) {
          const { delegate: t } = Vl;
          return (t?.clearInterval || clearInterval)(e);
        },
        delegate: void 0,
      };
      class rT extends XG {
        constructor(t, n) {
          super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
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
          return Vl.setInterval(t.flush.bind(t, this), r);
        }
        recycleAsyncId(t, n, r = 0) {
          if (null != r && this.delay === r && !1 === this.pending) return n;
          null != n && Vl.clearInterval(n);
        }
        execute(t, n) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const r = this._execute(t, n);
          if (r) return r;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, n) {
          let o,
            r = !1;
          try {
            this.work(t);
          } catch (i) {
            (r = !0), (o = i || new Error('Scheduled action threw falsy error'));
          }
          if (r) return this.unsubscribe(), o;
        }
        unsubscribe() {
          if (!this.closed) {
            const { id: t, scheduler: n } = this,
              { actions: r } = n;
            (this.work = this.state = this.scheduler = null),
              (this.pending = !1),
              za(r, this),
              null != t && (this.id = this.recycleAsyncId(n, t, null)),
              (this.delay = null),
              super.unsubscribe();
          }
        }
      }
      const oT = {
        now: () => (oT.delegate || Date).now(),
        delegate: void 0,
      };
      class Aa {
        constructor(t, n = Aa.now) {
          (this.schedulerActionCtor = t), (this.now = n);
        }
        schedule(t, n = 0, r) {
          return new this.schedulerActionCtor(this, t).schedule(r, n);
        }
      }
      Aa.now = oT.now;
      class iT extends Aa {
        constructor(t, n = Aa.now) {
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
      const JG = new iT(rT);
      let im;
      try {
        im = typeof Intl < 'u' && Intl.v8BreakIterator;
      } catch {
        im = !1;
      }
      let t8 = (() => {
        class e {
          constructor(n) {
            (this._platformId = n),
              (this.isBrowser = this._platformId
                ? sS(this._platformId)
                : 'object' == typeof document && !!document),
              (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
              (this.TRIDENT =
                this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
              (this.BLINK =
                this.isBrowser &&
                !(!window.chrome && !im) &&
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
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(M(Bn));
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      const aT = new Set();
      let co,
        o8 = (() => {
          class e {
            constructor(n, r) {
              (this._platform = n),
                (this._nonce = r),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : s8);
            }
            matchMedia(n) {
              return (
                (this._platform.WEBKIT || this._platform.BLINK) &&
                  (function i8(e, t) {
                    if (!aT.has(e))
                      try {
                        co ||
                          ((co = document.createElement('style')),
                          t && co.setAttribute('nonce', t),
                          co.setAttribute('type', 'text/css'),
                          document.head.appendChild(co)),
                          co.sheet &&
                            (co.sheet.insertRule(`@media ${e} {body{ }}`, 0), aT.add(e));
                      } catch (n) {
                        console.error(n);
                      }
                  })(n, this._nonce),
                this._matchMedia(n)
              );
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(M(t8), M(Uf, 8));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })();
      function s8(e) {
        return {
          matches: 'all' === e || '' === e,
          media: e,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let a8 = (() => {
        class e {
          constructor(n, r) {
            (this._mediaMatcher = n),
              (this._zone = r),
              (this._queries = new Map()),
              (this._destroySubject = new at());
          }
          ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
          }
          isMatched(n) {
            return cT(nT(n)).some(o => this._registerQuery(o).mql.matches);
          }
          observe(n) {
            let i = Og(cT(nT(n)).map(s => this._registerQuery(s).observable));
            return (
              (i = hl(
                i.pipe(to(1)),
                i.pipe(
                  (function KG(e) {
                    return _r((t, n) => e <= n);
                  })(1),
                  (function e8(e, t = JG) {
                    return Le((n, r) => {
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
                          return (o = this.schedule(void 0, u - l)), void r.add(o);
                        a();
                      }
                      n.subscribe(
                        Ne(
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
                ne(s => {
                  const a = { matches: !1, breakpoints: {} };
                  return (
                    s.forEach(({ matches: c, query: u }) => {
                      (a.matches = a.matches || c), (a.breakpoints[u] = c);
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
                observable: new Re(s => {
                  const a = c => this._zone.run(() => s.next(c));
                  return (
                    r.addListener(a),
                    () => {
                      r.removeListener(a);
                    }
                  );
                }).pipe(
                  QS(r),
                  ne(({ matches: s }) => ({ query: n, matches: s })),
                  JS(this._destroySubject),
                ),
                mql: r,
              };
            return this._queries.set(n, i), i;
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(M(o8), M(se));
          });
          static #t = (this.ɵprov = I({
            token: e,
            factory: e.ɵfac,
            providedIn: 'root',
          }));
        }
        return e;
      })();
      function cT(e) {
        return e
          .map(t => t.split(','))
          .reduce((t, n) => t.concat(n))
          .map(t => t.trim());
      }
      const yt_XSmall = '(max-width: 599.98px)',
        yt_Small = '(min-width: 600px) and (max-width: 959.98px)',
        yt_Medium = '(min-width: 960px) and (max-width: 1279.98px)',
        yt_Large = '(min-width: 1280px) and (max-width: 1919.98px)',
        yt_XLarge = '(min-width: 1920px)';
      var _t = (function (e) {
        return (
          (e.XSmall = 'XSmall'),
          (e.Small = 'Small'),
          (e.Medium = 'Medium'),
          (e.Large = 'Large'),
          (e.XLarge = 'XLarge'),
          e
        );
      })(_t || {});
      let uT = (() => {
          class e {
            constructor(n) {
              (this.observer = n),
                (this.observers = new Map()),
                this.getBreakpointsObserve().subscribe(r => {
                  r.breakpoints[yt_XSmall]
                    ? this.notifyObservers({ breakpoint: _t.XSmall })
                    : r.breakpoints[yt_Small]
                    ? this.notifyObservers({ breakpoint: _t.Small })
                    : r.breakpoints[yt_Medium]
                    ? this.notifyObservers({ breakpoint: _t.Medium })
                    : r.breakpoints[yt_Large]
                    ? this.notifyObservers({ breakpoint: _t.Large })
                    : r.breakpoints[yt_XLarge] &&
                      this.notifyObservers({ breakpoint: _t.XLarge });
                });
            }
            addObserver(n) {
              if (this.observers.has(n)) throw new Error('Object is already registered!');
              this.observers.set(n, n),
                this.getBreakpointsObserve()
                  .subscribe(r => {
                    r.breakpoints[yt_XSmall]
                      ? n.update({ breakpoint: _t.XSmall })
                      : r.breakpoints[yt_Small]
                      ? n.update({ breakpoint: _t.Small })
                      : r.breakpoints[yt_Medium]
                      ? n.update({ breakpoint: _t.Medium })
                      : r.breakpoints[yt_Large]
                      ? n.update({ breakpoint: _t.Large })
                      : r.breakpoints[yt_XLarge] && n.update({ breakpoint: _t.XLarge });
                  })
                  .unsubscribe();
            }
            removeObserver(n) {
              if (!this.observers.has(n)) throw new Error('Object is not registered!');
              this.observers.delete(n);
            }
            notifyObservers(n) {
              this.observers.forEach(r => {
                r.update(n);
              });
            }
            getBreakpointsObserve() {
              return this.observer.observe([
                yt_XSmall,
                yt_Small,
                yt_Medium,
                yt_Large,
                yt_XLarge,
              ]);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(M(a8));
            });
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        lT = (() => {
          class e {
            constructor(n, r) {
              (this._renderer = n),
                (this._elementRef = r),
                (this.onChange = o => {}),
                (this.onTouched = () => {});
            }
            setProperty(n, r) {
              this._renderer.setProperty(this._elementRef.nativeElement, n, r);
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
              return new (r || e)(w(zn), w(kt));
            });
            static #t = (this.ɵdir = V({ type: e }));
          }
          return e;
        })(),
        uo = (() => {
          class e extends lT {
            static #e = (this.ɵfac = (() => {
              let n;
              return function (o) {
                return (n || (n = Ze(e)))(o || e);
              };
            })());
            static #t = (this.ɵdir = V({ type: e, features: [de] }));
          }
          return e;
        })();
      const On = new E(''),
        l8 = { provide: On, useExisting: ve(() => Ul), multi: !0 },
        f8 = new E('');
      let Ul = (() => {
        class e extends lT {
          constructor(n, r, o) {
            super(n, r),
              (this._compositionMode = o),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode = !(function d8() {
                  const e = vr() ? vr().getUserAgent() : '';
                  return /android (\d+)/.test(e.toLowerCase());
                })());
          }
          writeValue(n) {
            this.setProperty('value', n ?? '');
          }
          _handleInput(n) {
            (!this._compositionMode || (this._compositionMode && !this._composing)) &&
              this.onChange(n);
          }
          _compositionStart() {
            this._composing = !0;
          }
          _compositionEnd(n) {
            (this._composing = !1), this._compositionMode && this.onChange(n);
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(w(zn), w(kt), w(f8, 8));
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
                Y('input', function (s) {
                  return o._handleInput(s.target.value);
                })('blur', function () {
                  return o.onTouched();
                })('compositionstart', function () {
                  return o._compositionStart();
                })('compositionend', function (s) {
                  return o._compositionEnd(s.target.value);
                });
            },
            features: [Ae([l8]), de],
          }));
        }
        return e;
      })();
      function Er(e) {
        return (
          null == e || (('string' == typeof e || Array.isArray(e)) && 0 === e.length)
        );
      }
      function fT(e) {
        return null != e && 'number' == typeof e.length;
      }
      const st = new E(''),
        wr = new E(''),
        h8 =
          /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class Xt {
        static min(t) {
          return (function hT(e) {
            return t => {
              if (Er(t.value) || Er(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n < e ? { min: { min: e, actual: t.value } } : null;
            };
          })(t);
        }
        static max(t) {
          return (function pT(e) {
            return t => {
              if (Er(t.value) || Er(e)) return null;
              const n = parseFloat(t.value);
              return !isNaN(n) && n > e ? { max: { max: e, actual: t.value } } : null;
            };
          })(t);
        }
        static required(t) {
          return (function gT(e) {
            return Er(e.value) ? { required: !0 } : null;
          })(t);
        }
        static requiredTrue(t) {
          return (function mT(e) {
            return !0 === e.value ? null : { required: !0 };
          })(t);
        }
        static email(t) {
          return (function vT(e) {
            return Er(e.value) || h8.test(e.value) ? null : { email: !0 };
          })(t);
        }
        static minLength(t) {
          return (function yT(e) {
            return t =>
              Er(t.value) || !fT(t.value)
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
          return (function _T(e) {
            return t =>
              fT(t.value) && t.value.length > e
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
          return (function CT(e) {
            if (!e) return Bl;
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
                if (Er(r.value)) return null;
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
          return ST(t);
        }
        static composeAsync(t) {
          return MT(t);
        }
      }
      function Bl(e) {
        return null;
      }
      function DT(e) {
        return null != e;
      }
      function ET(e) {
        return na(e) ? it(e) : e;
      }
      function wT(e) {
        let t = {};
        return (
          e.forEach(n => {
            t = null != n ? { ...t, ...n } : t;
          }),
          0 === Object.keys(t).length ? null : t
        );
      }
      function bT(e, t) {
        return t.map(n => n(e));
      }
      function IT(e) {
        return e.map(t =>
          (function p8(e) {
            return !e.validate;
          })(t)
            ? t
            : n => t.validate(n),
        );
      }
      function ST(e) {
        if (!e) return null;
        const t = e.filter(DT);
        return 0 == t.length
          ? null
          : function (n) {
              return wT(bT(n, t));
            };
      }
      function am(e) {
        return null != e ? ST(IT(e)) : null;
      }
      function MT(e) {
        if (!e) return null;
        const t = e.filter(DT);
        return 0 == t.length
          ? null
          : function (n) {
              return (function c8(...e) {
                const t = xg(e),
                  { args: n, keys: r } = GS(e),
                  o = new Re(i => {
                    const { length: s } = n;
                    if (!s) return void i.complete();
                    const a = new Array(s);
                    let c = s,
                      u = s;
                    for (let l = 0; l < s; l++) {
                      let d = !1;
                      fn(n[l]).subscribe(
                        Ne(
                          i,
                          f => {
                            d || ((d = !0), u--), (a[l] = f);
                          },
                          () => c--,
                          void 0,
                          () => {
                            (!c || !d) && (u || i.next(r ? qS(r, a) : a), i.complete());
                          },
                        ),
                      );
                    }
                  });
                return t ? o.pipe(zS(t)) : o;
              })(bT(n, t).map(ET)).pipe(ne(wT));
            };
      }
      function cm(e) {
        return null != e ? MT(IT(e)) : null;
      }
      function TT(e, t) {
        return null === e ? [t] : Array.isArray(e) ? [...e, t] : [e, t];
      }
      function AT(e) {
        return e._rawValidators;
      }
      function NT(e) {
        return e._rawAsyncValidators;
      }
      function um(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function $l(e, t) {
        return Array.isArray(e) ? e.includes(t) : e === t;
      }
      function RT(e, t) {
        const n = um(t);
        return (
          um(e).forEach(o => {
            $l(n, o) || n.push(o);
          }),
          n
        );
      }
      function xT(e, t) {
        return um(t).filter(n => !$l(e, n));
      }
      class OT {
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
            (this._composedValidatorFn = am(this._rawValidators));
        }
        _setAsyncValidators(t) {
          (this._rawAsyncValidators = t || []),
            (this._composedAsyncValidatorFn = cm(this._rawAsyncValidators));
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
          this._onDestroyCallbacks.forEach(t => t()), (this._onDestroyCallbacks = []);
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
      class Ct extends OT {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      class br extends OT {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null);
        }
      }
      class FT {
        constructor(t) {
          this._cd = t;
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
      let PT = (() => {
          class e extends FT {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(br, 2));
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
                  Eu('ng-untouched', o.isUntouched)('ng-touched', o.isTouched)(
                    'ng-pristine',
                    o.isPristine,
                  )('ng-dirty', o.isDirty)('ng-valid', o.isValid)(
                    'ng-invalid',
                    o.isInvalid,
                  )('ng-pending', o.isPending);
              },
              features: [de],
            }));
          }
          return e;
        })(),
        kT = (() => {
          class e extends FT {
            constructor(n) {
              super(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(Ct, 10));
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
                  Eu('ng-untouched', o.isUntouched)('ng-touched', o.isTouched)(
                    'ng-pristine',
                    o.isPristine,
                  )('ng-dirty', o.isDirty)('ng-valid', o.isValid)(
                    'ng-invalid',
                    o.isInvalid,
                  )('ng-pending', o.isPending)('ng-submitted', o.isSubmitted);
              },
              features: [de],
            }));
          }
          return e;
        })();
      const xa = 'VALID',
        Gl = 'INVALID',
        Pi = 'PENDING',
        Oa = 'DISABLED';
      class ki {}
      class VT extends ki {
        constructor(t, n) {
          super(), (this.value = t), (this.source = n);
        }
      }
      class fm extends ki {
        constructor(t, n) {
          super(), (this.pristine = t), (this.source = n);
        }
      }
      class hm extends ki {
        constructor(t, n) {
          super(), (this.touched = t), (this.source = n);
        }
      }
      class zl extends ki {
        constructor(t, n) {
          super(), (this.status = t), (this.source = n);
        }
      }
      class _8 extends ki {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      class C8 extends ki {
        constructor(t) {
          super(), (this.source = t);
        }
      }
      function pm(e) {
        return (ql(e) ? e.validators : e) || null;
      }
      function gm(e, t) {
        return (ql(t) ? t.asyncValidators : e) || null;
      }
      function ql(e) {
        return null != e && !Array.isArray(e) && 'object' == typeof e;
      }
      function jT(e, t, n) {
        const r = e.controls;
        if (!(t ? Object.keys(r) : r).length) throw new D(1e3, '');
        if (!r[n]) throw new D(1001, '');
      }
      function UT(e, t, n) {
        e._forEachChild((r, o) => {
          if (void 0 === n[o]) throw new D(1002, '');
        });
      }
      class Wl {
        constructor(t, n) {
          (this._pendingDirty = !1),
            (this._hasOwnPendingAsyncValidator = null),
            (this._pendingTouched = !1),
            (this._onCollectionChange = () => {}),
            (this._parent = null),
            (this._status = Jr(() => this.statusReactive())),
            (this.statusReactive = lr(void 0)),
            (this._pristine = Jr(() => this.pristineReactive())),
            (this.pristineReactive = lr(!0)),
            (this._touched = Jr(() => this.touchedReactive())),
            (this.touchedReactive = lr(!1)),
            (this._events = new at()),
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
          this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
        }
        get parent() {
          return this._parent;
        }
        get status() {
          return Tn(this.statusReactive);
        }
        set status(t) {
          Tn(() => this.statusReactive.set(t));
        }
        get valid() {
          return this.status === xa;
        }
        get invalid() {
          return this.status === Gl;
        }
        get pending() {
          return this.status == Pi;
        }
        get disabled() {
          return this.status === Oa;
        }
        get enabled() {
          return this.status !== Oa;
        }
        get pristine() {
          return Tn(this.pristineReactive);
        }
        set pristine(t) {
          Tn(() => this.pristineReactive.set(t));
        }
        get dirty() {
          return !this.pristine;
        }
        get touched() {
          return Tn(this.touchedReactive);
        }
        set touched(t) {
          Tn(() => this.touchedReactive.set(t));
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
          this.setValidators(RT(t, this._rawValidators));
        }
        addAsyncValidators(t) {
          this.setAsyncValidators(RT(t, this._rawAsyncValidators));
        }
        removeValidators(t) {
          this.setValidators(xT(t, this._rawValidators));
        }
        removeAsyncValidators(t) {
          this.setAsyncValidators(xT(t, this._rawAsyncValidators));
        }
        hasValidator(t) {
          return $l(this._rawValidators, t);
        }
        hasAsyncValidator(t) {
          return $l(this._rawAsyncValidators, t);
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
            n && !1 !== t.emitEvent && this._events.next(new hm(!0, r));
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
            this._parent && !t.onlySelf && this._parent._updateTouched(t, r),
            n && !1 !== t.emitEvent && this._events.next(new hm(!1, r));
        }
        markAsDirty(t = {}) {
          const n = !0 === this.pristine;
          this.pristine = !1;
          const r = t.sourceControl ?? this;
          this._parent &&
            !t.onlySelf &&
            this._parent.markAsDirty({ ...t, sourceControl: r }),
            n && !1 !== t.emitEvent && this._events.next(new fm(!1, r));
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
            this._parent && !t.onlySelf && this._parent._updatePristine(t, r),
            n && !1 !== t.emitEvent && this._events.next(new fm(!0, r));
        }
        markAsPending(t = {}) {
          this.status = Pi;
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new zl(this.status, n)),
            this.statusChanges.emit(this.status)),
            this._parent &&
              !t.onlySelf &&
              this._parent.markAsPending({ ...t, sourceControl: n });
        }
        disable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = Oa),
            (this.errors = null),
            this._forEachChild(o => {
              o.disable({ ...t, onlySelf: !0 });
            }),
            this._updateValue();
          const r = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new VT(this.value, r)),
            this._events.next(new zl(this.status, r)),
            this.valueChanges.emit(this.value),
            this.statusChanges.emit(this.status)),
            this._updateAncestors({ ...t, skipPristineCheck: n }, this),
            this._onDisabledChange.forEach(o => o(!0));
        }
        enable(t = {}) {
          const n = this._parentMarkedDirty(t.onlySelf);
          (this.status = xa),
            this._forEachChild(r => {
              r.enable({ ...t, onlySelf: !0 });
            }),
            this.updateValueAndValidity({
              onlySelf: !0,
              emitEvent: t.emitEvent,
            }),
            this._updateAncestors({ ...t, skipPristineCheck: n }, this),
            this._onDisabledChange.forEach(r => r(!1));
        }
        _updateAncestors(t, n) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine({}, n),
            this._parent._updateTouched({}, n));
        }
        setParent(t) {
          this._parent = t;
        }
        getRawValue() {
          return this.value;
        }
        updateValueAndValidity(t = {}) {
          if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
            const r = this._cancelExistingSubscription();
            (this.errors = this._runValidator()),
              (this.status = this._calculateStatus()),
              (this.status === xa || this.status === Pi) &&
                this._runAsyncValidator(r, t.emitEvent);
          }
          const n = t.sourceControl ?? this;
          !1 !== t.emitEvent &&
            (this._events.next(new VT(this.value, n)),
            this._events.next(new zl(this.status, n)),
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
          this.status = this._allControlsDisabled() ? Oa : xa;
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t, n) {
          if (this.asyncValidator) {
            (this.status = Pi),
              (this._hasOwnPendingAsyncValidator = {
                emitEvent: !1 !== n,
              });
            const r = ET(this.asyncValidator(this));
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
            const t = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
            return (this._hasOwnPendingAsyncValidator = null), t;
          }
          return !1;
        }
        setErrors(t, n = {}) {
          (this.errors = t),
            this._updateControlsErrors(!1 !== n.emitEvent, this, n.shouldHaveEmitted);
        }
        get(t) {
          let n = t;
          return null == n || (Array.isArray(n) || (n = n.split('.')), 0 === n.length)
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
            (t || r) && this._events.next(new zl(this.status, n)),
            this._parent && this._parent._updateControlsErrors(t, n, r);
        }
        _initObservables() {
          (this.valueChanges = new W()), (this.statusChanges = new W());
        }
        _calculateStatus() {
          return this._allControlsDisabled()
            ? Oa
            : this.errors
            ? Gl
            : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Pi)
            ? Pi
            : this._anyControlsHaveStatus(Gl)
            ? Gl
            : xa;
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
            this._parent && !t.onlySelf && this._parent._updatePristine(t, n),
            o && this._events.next(new fm(this.pristine, n));
        }
        _updateTouched(t = {}, n) {
          (this.touched = this._anyControlsTouched()),
            this._events.next(new hm(this.touched, n)),
            this._parent && !t.onlySelf && this._parent._updateTouched(t, n);
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          ql(t) && null != t.updateOn && (this._updateOn = t.updateOn);
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
            (this._composedValidatorFn = (function D8(e) {
              return Array.isArray(e) ? am(e) : e || null;
            })(this._rawValidators));
        }
        _assignAsyncValidators(t) {
          (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
            (this._composedAsyncValidatorFn = (function E8(e) {
              return Array.isArray(e) ? cm(e) : e || null;
            })(this._rawAsyncValidators));
        }
      }
      class Fa extends Wl {
        constructor(t, n, r) {
          super(pm(n), gm(r, n)),
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
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity({ emitEvent: n.emitEvent }),
            this._onCollectionChange();
        }
        setControl(t, n, r = {}) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            n && this.registerControl(t, n),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, n = {}) {
          UT(this, 0, t),
            Object.keys(t).forEach(r => {
              jT(this, !0, r),
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
          return this._reduceChildren({}, (t, n, r) => ((t[r] = n.getRawValue()), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(!1, (n, r) => !!r._syncPendingControls() || n);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach(n => {
            const r = this.controls[n];
            r && t(r, n);
          });
        }
        _setUpControls() {
          this._forEachChild(t => {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
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
            (n, r, o) => ((r.enabled || this.disabled) && (n[o] = r.value), n),
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
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _find(t) {
          return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
        }
      }
      class BT extends Fa {}
      const Li = new E('CallSetDisabledState', {
          providedIn: 'root',
          factory: () => Zl,
        }),
        Zl = 'always';
      function Pa(e, t, n = Zl) {
        mm(e, t),
          t.valueAccessor.writeValue(e.value),
          (e.disabled || 'always' === n) &&
            t.valueAccessor.setDisabledState?.(e.disabled),
          (function b8(e, t) {
            t.valueAccessor.registerOnChange(n => {
              (e._pendingValue = n),
                (e._pendingChange = !0),
                (e._pendingDirty = !0),
                'change' === e.updateOn && $T(e, t);
            });
          })(e, t),
          (function S8(e, t) {
            const n = (r, o) => {
              t.valueAccessor.writeValue(r), o && t.viewToModelUpdate(r);
            };
            e.registerOnChange(n),
              t._registerOnDestroy(() => {
                e._unregisterOnChange(n);
              });
          })(e, t),
          (function I8(e, t) {
            t.valueAccessor.registerOnTouched(() => {
              (e._pendingTouched = !0),
                'blur' === e.updateOn && e._pendingChange && $T(e, t),
                'submit' !== e.updateOn && e.markAsTouched();
            });
          })(e, t),
          (function w8(e, t) {
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
      function Ql(e, t, n = !0) {
        const r = () => {};
        t.valueAccessor &&
          (t.valueAccessor.registerOnChange(r), t.valueAccessor.registerOnTouched(r)),
          Xl(e, t),
          e && (t._invokeOnDestroyCallbacks(), e._registerOnCollectionChange(() => {}));
      }
      function Kl(e, t) {
        e.forEach(n => {
          n.registerOnValidatorChange && n.registerOnValidatorChange(t);
        });
      }
      function mm(e, t) {
        const n = AT(e);
        null !== t.validator
          ? e.setValidators(TT(n, t.validator))
          : 'function' == typeof n && e.setValidators([n]);
        const r = NT(e);
        null !== t.asyncValidator
          ? e.setAsyncValidators(TT(r, t.asyncValidator))
          : 'function' == typeof r && e.setAsyncValidators([r]);
        const o = () => e.updateValueAndValidity();
        Kl(t._rawValidators, o), Kl(t._rawAsyncValidators, o);
      }
      function Xl(e, t) {
        let n = !1;
        if (null !== e) {
          if (null !== t.validator) {
            const o = AT(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.validator);
              i.length !== o.length && ((n = !0), e.setValidators(i));
            }
          }
          if (null !== t.asyncValidator) {
            const o = NT(e);
            if (Array.isArray(o) && o.length > 0) {
              const i = o.filter(s => s !== t.asyncValidator);
              i.length !== o.length && ((n = !0), e.setAsyncValidators(i));
            }
          }
        }
        const r = () => {};
        return Kl(t._rawValidators, r), Kl(t._rawAsyncValidators, r), n;
      }
      function $T(e, t) {
        e._pendingDirty && e.markAsDirty(),
          e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
          t.viewToModelUpdate(e._pendingValue),
          (e._pendingChange = !1);
      }
      function zT(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function qT(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          2 === Object.keys(e).length &&
          'value' in e &&
          'disabled' in e
        );
      }
      Promise.resolve();
      const Ir = class extends Wl {
        constructor(t = null, n, r) {
          super(pm(n), gm(r, n)),
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
            ql(n) &&
              (n.nonNullable || n.initialValueIsDefault) &&
              (this.defaultValue = qT(t) ? t.value : t);
        }
        setValue(t, n = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== n.emitModelToViewChange &&
              this._onChange.forEach(r => r(this.value, !1 !== n.emitViewToModelChange)),
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
          zT(this._onChange, t);
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _unregisterOnDisabledChange(t) {
          zT(this._onDisabledChange, t);
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
          qT(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled
                ? this.disable({ onlySelf: !0, emitEvent: !1 })
                : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      };
      Promise.resolve();
      let KT = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵdir = V({
            type: e,
            selectors: [['form', 3, 'ngNoForm', '', 3, 'ngNativeValidate', '']],
            hostAttrs: ['novalidate', ''],
          }));
        }
        return e;
      })();
      const Dm = new E(''),
        j8 = { provide: br, useExisting: ve(() => Em) };
      let Em = (() => {
        class e extends br {
          set isDisabled(n) {}
          static #e = (this._ngModelWarningSentOnce = !1);
          constructor(n, r, o, i, s) {
            super(),
              (this._ngModelWarningConfig = i),
              (this.callSetDisabledState = s),
              (this.update = new W()),
              (this._ngModelWarningSent = !1),
              this._setValidators(n),
              this._setAsyncValidators(r),
              (this.valueAccessor = (function _m(e, t) {
                if (!t) return null;
                let n, r, o;
                return (
                  Array.isArray(t),
                  t.forEach(i => {
                    i.constructor === Ul
                      ? (n = i)
                      : (function A8(e) {
                          return Object.getPrototypeOf(e.constructor) === uo;
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
              r && Ql(r, this, !1),
                Pa(this.form, this, this.callSetDisabledState),
                this.form.updateValueAndValidity({ emitEvent: !1 });
            }
            (function ym(e, t) {
              if (!e.hasOwnProperty('model')) return !1;
              const n = e.model;
              return !!n.isFirstChange() || !Object.is(t, n.currentValue);
            })(n, this.viewModel) &&
              (this.form.setValue(this.model), (this.viewModel = this.model));
          }
          ngOnDestroy() {
            this.form && Ql(this.form, this, !1);
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
            return new (r || e)(w(st, 10), w(wr, 10), w(On, 10), w(Dm, 8), w(Li, 8));
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
            features: [Ae([j8]), de, zt],
          }));
        }
        return e;
      })();
      const U8 = { provide: Ct, useExisting: ve(() => Jl) };
      let Jl = (() => {
          class e extends Ct {
            get submitted() {
              return Tn(this._submittedReactive);
            }
            set submitted(n) {
              this._submittedReactive.set(n);
            }
            constructor(n, r, o) {
              super(),
                (this.callSetDisabledState = o),
                (this._submitted = Jr(() => this._submittedReactive())),
                (this._submittedReactive = lr(!1)),
                (this._onCollectionChange = () => this._updateDomValue()),
                (this.directives = []),
                (this.form = null),
                (this.ngSubmit = new W()),
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
                (Xl(this.form, this),
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
            addControl(n) {
              const r = this.form.get(n.path);
              return (
                Pa(r, n, this.callSetDisabledState),
                r.updateValueAndValidity({ emitEvent: !1 }),
                this.directives.push(n),
                r
              );
            }
            getControl(n) {
              return this.form.get(n.path);
            }
            removeControl(n) {
              Ql(n.control || null, n, !1),
                (function N8(e, t) {
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
                (function GT(e, t) {
                  e._syncPendingControls(),
                    t.forEach(n => {
                      const r = n.control;
                      'submit' === r.updateOn &&
                        r._pendingChange &&
                        (n.viewToModelUpdate(r._pendingValue), (r._pendingChange = !1));
                    });
                })(this.form, this.directives),
                this.ngSubmit.emit(n),
                this.form._events.next(new _8(this.control)),
                'dialog' === n?.target?.method
              );
            }
            onReset() {
              this.resetForm();
            }
            resetForm(n = void 0) {
              this.form.reset(n),
                this._submittedReactive.set(!1),
                this.form._events.next(new C8(this.form));
            }
            _updateDomValue() {
              this.directives.forEach(n => {
                const r = n.control,
                  o = this.form.get(n.path);
                r !== o &&
                  (Ql(r || null, n),
                  (e => e instanceof Ir)(o) &&
                    (Pa(o, n, this.callSetDisabledState), (n.control = o)));
              }),
                this.form._updateTreeValidity({ emitEvent: !1 });
            }
            _setUpFormContainer(n) {
              const r = this.form.get(n.path);
              (function HT(e, t) {
                mm(e, t);
              })(r, n),
                r.updateValueAndValidity({ emitEvent: !1 });
            }
            _cleanUpFormContainer(n) {
              if (this.form) {
                const r = this.form.get(n.path);
                r &&
                  (function M8(e, t) {
                    return Xl(e, t);
                  })(r, n) &&
                  r.updateValueAndValidity({ emitEvent: !1 });
              }
            }
            _updateRegistrations() {
              this.form._registerOnCollectionChange(this._onCollectionChange),
                this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
            }
            _updateValidators() {
              mm(this.form, this), this._oldForm && Xl(this._oldForm, this);
            }
            _checkFormPresent() {}
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(st, 10), w(wr, 10), w(Li, 8));
            });
            static #t = (this.ɵdir = V({
              type: e,
              selectors: [['', 'formGroup', '']],
              hostBindings: function (r, o) {
                1 & r &&
                  Y('submit', function (s) {
                    return o.onSubmit(s);
                  })('reset', function () {
                    return o.onReset();
                  });
              },
              inputs: { form: [0, 'formGroup', 'form'] },
              outputs: { ngSubmit: 'ngSubmit' },
              exportAs: ['ngForm'],
              features: [Ae([U8]), de, zt],
            }));
          }
          return e;
        })(),
        oz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Yi({ type: e }));
            static #n = (this.ɵinj = Co({}));
          }
          return e;
        })();
      class g0 extends Wl {
        constructor(t, n, r) {
          super(pm(n), gm(r, n)),
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
            this.controls[r] && this.controls[r]._registerOnCollectionChange(() => {}),
            this.controls.splice(r, 1),
            this.updateValueAndValidity({ emitEvent: n.emitEvent });
        }
        setControl(t, n, r = {}) {
          let o = this._adjustIndex(t);
          o < 0 && (o = 0),
            this.controls[o] && this.controls[o]._registerOnCollectionChange(() => {}),
            this.controls.splice(o, 1),
            n && (this.controls.splice(o, 0, n), this._registerControl(n)),
            this.updateValueAndValidity({ emitEvent: r.emitEvent }),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, n = {}) {
          UT(this, 0, t),
            t.forEach((r, o) => {
              jT(this, !1, o),
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
            (this._forEachChild(n => n._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity({ emitEvent: t.emitEvent }));
        }
        _adjustIndex(t) {
          return t < 0 ? t + this.length : t;
        }
        _syncPendingControls() {
          let t = this.controls.reduce((n, r) => !!r._syncPendingControls() || n, !1);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
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
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
        _find(t) {
          return this.at(t) ?? null;
        }
      }
      function m0(e) {
        return (
          !!e &&
          (void 0 !== e.asyncValidators ||
            void 0 !== e.validators ||
            void 0 !== e.updateOn)
        );
      }
      let iz = (() => {
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
                m0(r)
                  ? (i = r)
                  : null !== r &&
                    ((i.validators = r.validator),
                    (i.asyncValidators = r.asyncValidator)),
                new Fa(o, i)
              );
            }
            record(n, r = null) {
              const o = this._reduceControls(n);
              return new BT(o, r);
            }
            control(n, r, o) {
              let i = {};
              return this.useNonNullable
                ? (m0(r) ? (i = r) : ((i.validators = r), (i.asyncValidators = o)),
                  new Ir(n, { ...i, nonNullable: !0 }))
                : new Ir(n, r, o);
            }
            array(n, r, o) {
              const i = n.map(s => this._createControl(s));
              return new g0(i, r, o);
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
              return n instanceof Ir || n instanceof Wl
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
            static #t = (this.ɵprov = I({
              token: e,
              factory: e.ɵfac,
              providedIn: 'root',
            }));
          }
          return e;
        })(),
        v0 = (() => {
          class e {
            static withConfig(n) {
              return {
                ngModule: e,
                providers: [
                  {
                    provide: Dm,
                    useValue: n.warnOnNgModelWithFormControl ?? 'always',
                  },
                  {
                    provide: Li,
                    useValue: n.callSetDisabledState ?? Zl,
                  },
                ],
              };
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵmod = Yi({ type: e }));
            static #n = (this.ɵinj = Co({ imports: [oz] }));
          }
          return e;
        })();
      const sz = ['*'];
      let ed = (() => {
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
          static #t = (this.ɵcmp = X({
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
            features: [J],
            ngContentSelectors: sz,
            decls: 2,
            vars: 1,
            consts: [[1, 'flex', 3, 'ngStyle']],
            template: function (r, o) {
              1 & r && (pi(), j(0, 'div', 0), gi(1), L()),
                2 & r && S('ngStyle', o.buildStyles());
            },
            dependencies: [rS],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.flex[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}',
            ],
          }));
        }
        return e;
      })();
      function az(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'p', 2),
            Y('click', function () {
              return bt(n), It(K().onClick());
            }),
            yi(2),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K();
          R(),
            hr('margin', n.margin),
            S('ngClass', n.textColor),
            R(),
            pr(' ', n.value, ' ');
        }
      }
      function cz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'p', 3),
            Y('click', function () {
              return bt(n), It(K().onClick());
            }),
            yi(2),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K();
          R(),
            hr('margin', n.margin),
            S('ngClass', n.textColor),
            R(),
            pr(' ', n.value, ' ');
        }
      }
      function uz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'h1', 4),
            Y('click', function () {
              return bt(n), It(K().onClick());
            }),
            yi(2),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K();
          R(),
            hr('margin', n.margin),
            S('ngClass', n.textColor),
            R(),
            pr(' ', n.value, ' ');
        }
      }
      function lz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'h2', 5),
            Y('click', function () {
              return bt(n), It(K().onClick());
            }),
            yi(2),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K();
          R(),
            hr('margin', n.margin),
            S('ngClass', n.textColor),
            R(),
            pr(' ', n.value, ' ');
        }
      }
      function dz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'h3', 6),
            Y('click', function () {
              return bt(n), It(K().onClick());
            }),
            yi(2),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K();
          R(),
            hr('margin', n.margin),
            S('ngClass', n.textColor),
            R(),
            pr(' ', n.value, ' ');
        }
      }
      let Ht = (() => {
        class e {
          constructor() {
            (this.type = 'paragraph'),
              (this.textColor = 'text__default'),
              (this.clickEvent = new W());
          }
          onClick() {
            this.clickEvent.emit();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = X({
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
            features: [J],
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
                (be(0, 0),
                Zt(1, az, 3, 4, 'ng-container', 1)(2, cz, 3, 4, 'ng-container', 1)(
                  3,
                  uz,
                  3,
                  4,
                  'ng-container',
                  1,
                )(4, lz, 3, 4, 'ng-container', 1)(5, dz, 3, 4, 'ng-container', 1),
                Ie()),
                2 & r &&
                  (S('ngSwitch', o.type),
                  R(),
                  S('ngSwitchCase', 'tiny'),
                  R(),
                  S('ngSwitchCase', 'paragraph'),
                  R(),
                  S('ngSwitchCase', 'header1'),
                  R(),
                  S('ngSwitchCase', 'header2'),
                  R(),
                  S('ngSwitchCase', 'header3'));
            },
            dependencies: [il, fg, ol, tS],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.text[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-style:normal;margin:0}.text__default[_ngcontent-%COMP%]{color:#454545}.text__primary[_ngcontent-%COMP%]{color:#f1f1f1}.text__secondary[_ngcontent-%COMP%]{color:#ccc}.text__tertiary[_ngcontent-%COMP%]{color:#7a7a7a}.text__accent[_ngcontent-%COMP%]{color:#4e31aa}.text__error[_ngcontent-%COMP%]{color:#e23636}.text__warning[_ngcontent-%COMP%]{color:#edb95e}.text__success[_ngcontent-%COMP%]{color:#448623}.text__info[_ngcontent-%COMP%]{color:#415058}.text__tiny[_ngcontent-%COMP%]{font-size:.9em}.text__paragraph[_ngcontent-%COMP%]{font-size:1em}.text__header1[_ngcontent-%COMP%]{font-size:2em}.text__header2[_ngcontent-%COMP%]{font-size:1.5em}.text__header3[_ngcontent-%COMP%]{font-size:1em}',
            ],
          }));
        }
        return e;
      })();
      const fz = ['self'];
      function hz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'lib-text', 3),
            Y('clickEvent', function () {
              return bt(n), It(K().onClick());
            }),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K();
          R(), S('value', n.control.label.value)('textColor', n.textColor);
        }
      }
      let pz = (() => {
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
          static #t = (this.ɵcmp = X({
            type: e,
            selectors: [['lib-input']],
            viewQuery: function (r, o) {
              if ((1 & r && Qs(fz, 5), 2 & r)) {
                let i;
                mi((i = vi())) && (o.self = i.first);
              }
            },
            inputs: { form: 'form', control: 'control' },
            standalone: !0,
            features: [J],
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
                const i = Ut();
                Zt(0, hz, 2, 2, 'ng-container', 1),
                  j(1, 'input', 2, 0),
                  Y('focus', function () {
                    return bt(i), It(o.onFocus());
                  })('blur', function () {
                    return bt(i), It(o.onBlur());
                  }),
                  L();
              }
              2 & r &&
                (S('ngIf', o.control.label.isVisible),
                R(),
                S('value', o.control.input.defaultValue)('type', o.control.input.type)(
                  'placeholder',
                  o.control.input.placeholder,
                )('formControl', o.form));
            },
            dependencies: [il, la, v0, Ul, PT, Em, Ht],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.input[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #ccc;color:#454545;font-size:1em;background-color:transparent;outline:none;width:100%}.input[_ngcontent-%COMP%]:focus{border:1px solid #4e31aa;color:#4e31aa}',
            ],
          }));
        }
        return e;
      })();
      const gz = ['*'];
      let Tm = (() => {
          class e {
            constructor() {
              (this.isSubmit = !1),
                (this.clickEvent = new W()),
                (this.mouseEnterEvent = new W()),
                (this.mouseLeaveEvent = new W());
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
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-button']],
              inputs: { control: 'control', isSubmit: 'isSubmit' },
              outputs: {
                clickEvent: 'clickEvent',
                mouseEnterEvent: 'mouseEnterEvent',
                mouseLeaveEvent: 'mouseLeaveEvent',
              },
              standalone: !0,
              features: [J],
              ngContentSelectors: gz,
              decls: 2,
              vars: 1,
              consts: [[1, 'button', 3, 'click', 'mouseenter', 'mouseleave', 'type']],
              template: function (r, o) {
                1 & r &&
                  (pi(),
                  j(0, 'button', 0),
                  Y('click', function () {
                    return o.onClick();
                  })('mouseenter', function () {
                    return o.onMouseEnter();
                  })('mouseleave', function () {
                    return o.onMouseLeave();
                  }),
                  gi(1),
                  L()),
                  2 & r && S('type', o.isSubmit ? 'submit' : 'button');
              },
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.button[_ngcontent-%COMP%]{padding:.75rem;border-radius:.25rem;border:1px solid #4e31aa;background-color:#4e31aa;cursor:pointer;outline:none;width:100%}.button[_ngcontent-%COMP%]:focus{outline-offset:3px;outline:1px solid #4e31aa}',
              ],
            }));
          }
          return e;
        })(),
        mz = (() => {
          class e {
            constructor() {
              this.clickEvent = new W();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-button-text']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 3,
              consts: [
                [3, 'clickEvent', 'control', 'isSubmit'],
                ['textColor', 'text__primary', 'type', 'header3', 3, 'value'],
              ],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-button', 0),
                  Y('clickEvent', function () {
                    return o.onClickEvent();
                  }),
                  fe(1, 'lib-text', 1),
                  L()),
                  2 & r &&
                    (S('control', o.form)('isSubmit', o.control.isSubmit),
                    R(),
                    S('value', o.control.label));
              },
              dependencies: [Tm, Ht],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        y0 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-icon']],
              inputs: { src: 'src', alt: 'alt' },
              standalone: !0,
              features: [J],
              decls: 1,
              vars: 2,
              consts: [[1, 'icon', 3, 'src', 'alt']],
              template: function (r, o) {
                1 & r && fe(0, 'img', 0), 2 & r && S('src', o.src, oh)('alt', o.alt);
              },
              styles: [
                '[_nghost-%COMP%]{display:contents}.icon[_ngcontent-%COMP%]{display:block;height:100%}',
              ],
            }));
          }
          return e;
        })(),
        vz = (() => {
          class e {
            constructor() {
              this.clickEvent = new W();
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
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-button-icon']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [J],
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
                  (j(0, 'lib-button', 0),
                  Y('clickEvent', function () {
                    return o.onClickEvent();
                  })('mouseEnterEvent', function () {
                    return o.onMouseEnterEvent();
                  })('mouseLeaveEvent', function () {
                    return o.onMouseLeaveEvent();
                  }),
                  fe(1, 'lib-icon', 1),
                  L()),
                  2 & r &&
                    (S('control', o.form)('isSubmit', o.control.isSubmit),
                    R(),
                    S('src', o.control.icon)('alt', o.control.alt));
              },
              dependencies: [Tm, y0],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function yz(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-text', 4), Ie()), 2 & e)) {
          const n = K();
          R(), S('value', n.control.tip);
        }
      }
      let _z = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-link']],
              inputs: { form: 'form', control: 'control' },
              standalone: !0,
              features: [J],
              decls: 4,
              vars: 3,
              consts: [
                ['flexDirection', 'row', 'gap', '0.25rem'],
                [4, 'ngIf'],
                [1, 'link', 3, 'routerLink'],
                ['type', 'tiny', 'textColor', 'text__accent', 3, 'value'],
                ['type', 'tiny', 'textColor', 'text__info', 3, 'value'],
              ],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-flex', 0),
                  Zt(1, yz, 2, 1, 'ng-container', 1),
                  j(2, 'a', 2),
                  fe(3, 'lib-text', 3),
                  L()()),
                  2 & r &&
                    (R(),
                    S('ngIf', '' !== o.control.tip),
                    R(),
                    S('routerLink', o.control.path),
                    R(),
                    S('value', o.control.label));
              },
              dependencies: [la, Ht, Ta, ed],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.link[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}',
              ],
            }));
          }
          return e;
        })(),
        Cz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-error']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'error'],
                ['type', 'tiny', 'textColor', 'text__error', 3, 'value'],
              ],
              template: function (r, o) {
                1 & r && (j(0, 'div', 0), fe(1, 'lib-text', 1), L()),
                  2 & r && (R(), S('value', o.value));
              },
              dependencies: [Ht],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.error[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(226,54,54,.2509803922);background-color:#e2363640}',
              ],
            }));
          }
          return e;
        })();
      var pe = (function (e) {
        return (
          (e.input = 'input'),
          (e.buttonText = 'buttonText'),
          (e.buttonIcon = 'buttonIcon'),
          (e.buttonLink = 'buttonLink'),
          (e.link = 'link'),
          (e.text = 'text'),
          e
        );
      })(pe || {});
      let Dz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-success']],
              inputs: { value: 'value' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 1,
              consts: [
                [1, 'success'],
                ['type', 'tiny', 'textColor', 'text__success', 3, 'value'],
              ],
              template: function (r, o) {
                1 & r && (j(0, 'div', 0), fe(1, 'lib-text', 1), L()),
                  2 & r && (R(), S('value', o.value));
              },
              dependencies: [Ht],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.success[_ngcontent-%COMP%]{padding:.4rem;border-radius:.25rem;border:1px solid rgba(68,134,35,.2509803922);background-color:#44862340}',
              ],
            }));
          }
          return e;
        })(),
        Ez = (() => {
          class e {
            constructor() {
              this.clickEvent = new W();
            }
            onClickEvent() {
              this.clickEvent.emit();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-button-link']],
              inputs: { form: 'form', control: 'control' },
              outputs: { clickEvent: 'clickEvent' },
              standalone: !0,
              features: [J],
              decls: 3,
              vars: 3,
              consts: [
                [3, 'routerLink'],
                [3, 'clickEvent', 'control'],
                ['textColor', 'text__primary', 'type', 'header3', 3, 'value'],
              ],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'a', 0)(1, 'lib-button', 1),
                  Y('clickEvent', function () {
                    return o.onClickEvent();
                  }),
                  fe(2, 'lib-text', 2),
                  L()()),
                  2 & r &&
                    (S('routerLink', o.control.path),
                    R(),
                    S('control', o.form),
                    R(),
                    S('value', o.control.label));
              },
              dependencies: [Ta, Tm, Ht],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      function wz(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-input', 6), Ie()), 2 & e)) {
          const n = K().$implicit,
            r = K();
          R(), S('form', r.getFormControl(n.id))('control', n);
        }
      }
      function bz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'lib-button-text', 7),
            Y('clickEvent', function () {
              return bt(n), It(K(2).onSubmit());
            }),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K().$implicit,
            r = K();
          R(), S('form', r.getFormControl(n.id))('control', n);
        }
      }
      function Iz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'lib-button-icon', 7),
            Y('clickEvent', function () {
              return bt(n), It(K(2).onSubmit());
            }),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K().$implicit,
            r = K();
          R(), S('form', r.getFormControl(n.id))('control', n);
        }
      }
      function Sz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'lib-button-link', 7),
            Y('clickEvent', function () {
              return bt(n), It(K(2).onSubmit());
            }),
            L(),
            Ie();
        }
        if (2 & e) {
          const n = K().$implicit,
            r = K();
          R(), S('form', r.getFormControl(n.id))('control', n);
        }
      }
      function Mz(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-link', 6), Ie()), 2 & e)) {
          const n = K().$implicit,
            r = K();
          R(), S('form', r.getFormControl(n.id))('control', n);
        }
      }
      function Tz(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-text', 8), Ie()), 2 & e)) {
          const n = K().$implicit;
          R(), S('value', n.value)('margin', n.margin);
        }
      }
      function Az(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-error', 9), Ie()), 2 & e)) {
          const n = K(2).$implicit,
            r = K();
          R(), S('value', r.getFormControlError(n.id));
        }
      }
      function Nz(e, t) {
        if ((1 & e && (be(0), Zt(1, Az, 2, 1, 'ng-container', 4), Ie()), 2 & e)) {
          const n = K().$implicit,
            r = K();
          R(), S('ngIf', r.formControlInvalid(n.id));
        }
      }
      function Rz(e, t) {
        if (
          (1 & e &&
            (be(0),
            j(1, 'lib-flex', 5),
            Zt(2, wz, 2, 2, 'ng-container', 4)(3, bz, 2, 2, 'ng-container', 4)(
              4,
              Iz,
              2,
              2,
              'ng-container',
              4,
            )(5, Sz, 2, 2, 'ng-container', 4)(6, Mz, 2, 2, 'ng-container', 4)(
              7,
              Tz,
              2,
              2,
              'ng-container',
              4,
            )(8, Nz, 2, 1, 'ng-container', 4),
            L(),
            Ie()),
          2 & e)
        ) {
          const n = t.$implicit;
          R(),
            S('alignItems', n.alignItems),
            R(),
            S('ngIf', 'input' === n.kind),
            R(),
            S('ngIf', 'buttonText' === n.kind),
            R(),
            S('ngIf', 'buttonIcon' === n.kind),
            R(),
            S('ngIf', 'buttonLink' === n.kind),
            R(),
            S('ngIf', 'link' === n.kind),
            R(),
            S('ngIf', 'text' === n.kind),
            R(),
            S('ngIf', n.validation.isVisible);
        }
      }
      function xz(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-success', 9), Ie()), 2 & e)) {
          const n = K(2);
          R(), S('value', n.formSuccessMessage);
        }
      }
      function Oz(e, t) {
        if ((1 & e && (be(0), fe(1, 'lib-error', 9), Ie()), 2 & e)) {
          const n = K(2);
          R(), S('value', n.formErrorMessage);
        }
      }
      function Fz(e, t) {
        if (
          (1 & e &&
            (be(0),
            Zt(1, xz, 2, 1, 'ng-container', 4)(2, Oz, 2, 1, 'ng-container', 4),
            Ie()),
          2 & e)
        ) {
          const n = K();
          R(), S('ngIf', n.formGroupValid), R(), S('ngIf', n.formGroupInvalid);
        }
      }
      let Vi = (() => {
          class e {
            constructor(n) {
              (this.fb = n),
                (this.flexDirection = 'column'),
                (this.resetIfError = !1),
                (this.formErrorMessage = 'The form was not completed correctly.'),
                (this.formSuccessMessage = 'The form was completed correctly.'),
                (this.formValidation = !0),
                (this.baseFormEvent = new W()),
                (this.formGroupInvalid = !1),
                (this.formGroupValid = !1),
                (this.formGroup = this.fb.group({}));
            }
            ngOnInit() {
              this.baseForm.controls.forEach(n => {
                const { id: r } = n;
                this.formControlNotExist(r),
                  this.formGroup.addControl(r, this.buildFormControl(n));
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
                case pe.input:
                  return new Ir(n.input.defaultValue, n.validation.validators);
                case pe.buttonText:
                case pe.buttonIcon:
                case pe.buttonLink:
                case pe.link:
                  return new Ir(!1, n.validation.validators);
                case pe.text:
                  return new Ir('', n.validation.validators);
                default:
                  throw new Error('Unsupported control type!');
              }
            }
            resetFormGroup() {
              this.baseForm.controls.forEach(n => {
                const { id: r } = n;
                this.formGroup.setControl(r, this.buildFormControl(n));
              }),
                this.formGroup.markAsUntouched();
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(iz));
            });
            static #t = (this.ɵcmp = X({
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
              features: [J],
              decls: 5,
              vars: 5,
              consts: [
                [3, 'ngSubmit', 'formGroup'],
                ['gap', '2rem', 3, 'flexDirection'],
                ['gap', '0.5rem', 3, 'flexDirection'],
                [4, 'ngFor', 'ngForOf'],
                [4, 'ngIf'],
                ['flexDirection', 'column', 'gap', '0.25rem', 3, 'alignItems'],
                [3, 'form', 'control'],
                [3, 'clickEvent', 'form', 'control'],
                ['textColor', 'text__tertiary', 'type', 'tiny', 3, 'value', 'margin'],
                [3, 'value'],
              ],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'form', 0),
                  Y('ngSubmit', function () {
                    return o.onSubmit();
                  }),
                  j(1, 'lib-flex', 1)(2, 'lib-flex', 2),
                  Zt(3, Rz, 9, 8, 'ng-container', 3),
                  L(),
                  Zt(4, Fz, 3, 2, 'ng-container', 4),
                  L()()),
                  2 & r &&
                    (S('formGroup', o.formGroup),
                    R(),
                    S('flexDirection', o.flexDirection),
                    R(),
                    S('flexDirection', o.flexDirection),
                    R(),
                    S('ngForOf', o.baseForm.controls),
                    R(),
                    S('ngIf', o.formValidation));
              },
              dependencies: [
                il,
                XI,
                la,
                v0,
                KT,
                kT,
                Jl,
                ed,
                pz,
                mz,
                vz,
                _z,
                Cz,
                Dz,
                Ht,
                Ez,
              ],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Pz = (() => {
          class e {
            constructor() {
              (this.event = new W()),
                (this.loginForm = {
                  controls: [
                    {
                      kind: pe.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required, Xt.email],
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
                      kind: pe.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required],
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
                      kind: pe.link,
                      id: 'forgotPassword',
                      alignItems: 'flex-end',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Forgot password?',
                      path: '/forgot-password',
                      tip: '',
                    },
                    {
                      kind: pe.buttonText,
                      id: 'submit',
                      alignItems: 'flex-start',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Log in',
                      isSubmit: !0,
                    },
                    {
                      kind: pe.link,
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
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-login-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
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
                  (j(0, 'lib-base-form', 0),
                  Y('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r && S('baseForm', o.loginForm)('resetIfError', !0);
              },
              dependencies: [Vi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        kz = (() => {
          class e {
            constructor() {
              (this.event = new W()),
                (this.forgotPasswordForm = {
                  controls: [
                    {
                      kind: pe.text,
                      id: 'tip',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !0 },
                      value:
                        'Lost your password? Please enter your email address. You will receive a link to create a new password via email.',
                      margin: '1rem 0',
                    },
                    {
                      kind: pe.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required, Xt.email],
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
                      kind: pe.buttonText,
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
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-forgot-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
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
                  (j(0, 'lib-base-form', 0),
                  Y('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r && S('baseForm', o.forgotPasswordForm)('resetIfError', !1);
              },
              dependencies: [Vi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Lz = (() => {
          class e {
            constructor() {
              (this.event = new W()),
                (this.registrationForm = {
                  controls: [
                    {
                      kind: pe.input,
                      id: 'email',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required, Xt.email],
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
                      kind: pe.input,
                      id: 'name',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required],
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
                      kind: pe.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required],
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
                      kind: pe.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required],
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
                      kind: pe.buttonText,
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
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-registration-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
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
                  (j(0, 'lib-base-form', 0),
                  Y('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r && S('baseForm', o.registrationForm)('resetIfError', !0);
              },
              dependencies: [Vi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Vz = (() => {
          class e {
            constructor() {
              (this.event = new W()),
                (this.changePasswordForm = {
                  controls: [
                    {
                      kind: pe.input,
                      id: 'password',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required],
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
                      kind: pe.input,
                      id: 'repeatPassword',
                      alignItems: 'stretch',
                      validation: {
                        validators: [Xt.required],
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
                      kind: pe.buttonText,
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
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-change-password-form']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
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
                  (j(0, 'lib-base-form', 0),
                  Y('baseFormEvent', function (s) {
                    return o.onBaseFormEvent(s);
                  }),
                  L()),
                  2 & r && S('baseForm', o.changePasswordForm)('resetIfError', !0);
              },
              dependencies: [Vi],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const jz = ['*'];
      let fo = (() => {
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
          static #t = (this.ɵcmp = X({
            type: e,
            selectors: [['lib-card']],
            inputs: { width: 'width', type: 'type' },
            standalone: !0,
            features: [J],
            ngContentSelectors: jz,
            decls: 2,
            vars: 3,
            consts: [[1, 'card', 3, 'ngClass']],
            template: function (r, o) {
              1 & r && (pi(), j(0, 'div', 0), gi(1), L()),
                2 & r && (hr('width', o.width), S('ngClass', o.getCardType()));
            },
            dependencies: [fg],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}[_nghost-%COMP%]{display:contents}.card[_ngcontent-%COMP%]{background-color:#f1f1f1}.card--default[_ngcontent-%COMP%]{padding:2rem;border-radius:.25rem}.card--main-nav[_ngcontent-%COMP%]{padding:1rem}.card--main-nav-options[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:1.5rem 1rem}',
            ],
          }));
        }
        return e;
      })();
      const Uz = ['*'];
      let td = (() => {
        class e {
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵcmp = X({
            type: e,
            selectors: [['lib-auth']],
            standalone: !0,
            features: [J],
            ngContentSelectors: Uz,
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
              ['alignItems', 'stretch', 'flexDirection', 'column', 'gap', '1rem'],
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
                (pi(),
                j(0, 'div', 0)(1, 'lib-flex', 1)(2, 'lib-card', 2)(3, 'lib-flex', 3)(
                  4,
                  'lib-flex',
                  4,
                ),
                fe(5, 'lib-text', 5),
                L(),
                gi(6),
                L()()()());
            },
            dependencies: [ed, Ht, fo],
            styles: [
              '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.auth[_ngcontent-%COMP%]{padding:1rem}',
            ],
          }));
        }
        return e;
      })();
      const Bz = ['self'],
        $z = ['*'];
      let Hz = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-wrapper']],
              viewQuery: function (r, o) {
                if ((1 & r && Qs(Bz, 5), 2 & r)) {
                  let i;
                  mi((i = vi())) && (o.self = i.first);
                }
              },
              standalone: !0,
              features: [J],
              ngContentSelectors: $z,
              decls: 3,
              vars: 0,
              consts: [['self', '']],
              template: function (r, o) {
                1 & r && (pi(), j(0, 'div', null, 0), gi(2), L());
              },
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Gz = (() => {
          class e {
            constructor() {
              (this.hamburgerFormEvent = new W()),
                (this.hamburgerForm = {
                  controls: [
                    {
                      kind: pe.buttonIcon,
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
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-hamburger-form']],
              outputs: { hamburgerFormEvent: 'hamburgerFormEvent' },
              standalone: !0,
              features: [J],
              decls: 1,
              vars: 2,
              consts: [[3, 'baseFormEvent', 'baseForm', 'formValidation']],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-base-form', 0),
                  Y('baseFormEvent', function (s) {
                    return o.onEvent(s);
                  }),
                  L()),
                  2 & r && S('baseForm', o.hamburgerForm)('formValidation', !1);
              },
              dependencies: [Vi],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        zz = (() => {
          class e {
            constructor(n) {
              (this.breakpoint = n),
                (this.mainNavFormEvent = new W()),
                (this.flexDirection = 'row'),
                (this.mainNavForm = {
                  controls: [
                    {
                      kind: pe.buttonLink,
                      id: 'statistics',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Statistics',
                      path: '/dashboard/statistics',
                    },
                    {
                      kind: pe.buttonLink,
                      id: 'courses',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Courses',
                      path: '/dashboard/courses',
                    },
                    {
                      kind: pe.buttonLink,
                      id: 'account',
                      alignItems: 'stretch',
                      validation: { validators: [], isVisible: !1 },
                      label: 'Account',
                      path: '/dashboard/account',
                    },
                    {
                      kind: pe.buttonLink,
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
              this.flexDirection = n.breakpoint === _t.XSmall ? 'column' : 'row';
            }
            onEvent(n) {
              this.mainNavFormEvent.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(uT));
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-main-nav-form']],
              outputs: { mainNavFormEvent: 'mainNavFormEvent' },
              standalone: !0,
              features: [J],
              decls: 1,
              vars: 3,
              consts: [
                [3, 'baseFormEvent', 'flexDirection', 'baseForm', 'formValidation'],
              ],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-base-form', 0),
                  Y('baseFormEvent', function (s) {
                    return o.onEvent(s);
                  }),
                  L()),
                  2 & r &&
                    S('flexDirection', o.flexDirection)('baseForm', o.mainNavForm)(
                      'formValidation',
                      !1,
                    );
              },
              dependencies: [Vi],
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const qz = ['hamburgerForm'],
        Wz = ['mainNavForm'];
      function Zz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'lib-wrapper', null, 1)(3, 'lib-hamburger-form', 9),
            Y('hamburgerFormEvent', function () {
              return bt(n), It(K().onEvent());
            }),
            L()(),
            Ie();
        }
      }
      function Yz(e, t) {
        1 & e && fe(0, 'lib-main-nav-form');
      }
      function Qz(e, t) {
        if (1 & e) {
          const n = Ut();
          be(0),
            j(1, 'lib-wrapper', null, 2)(3, 'lib-card', 10)(4, 'lib-main-nav-form', 11),
            Y('mainNavFormEvent', function () {
              return bt(n), It(K().onEvent());
            }),
            L()()(),
            Ie();
        }
      }
      let Kz = (() => {
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
              r === _t.XSmall
                ? (this.isMobile = !0)
                : ((this.isMobile = !1), (this.isMenuVisible = !1)),
                (this.mainNavJustifyContent =
                  r === _t.Large || r === _t.XLarge ? 'space-around' : 'space-between');
            }
            onEvent() {
              this.isMenuVisible = !this.isMenuVisible;
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(uT));
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-main-nav']],
              viewQuery: function (r, o) {
                if ((1 & r && (Qs(qz, 5), Qs(Wz, 5)), 2 & r)) {
                  let i;
                  mi((i = vi())) && (o.hamburgerForm = i.first),
                    mi((i = vi())) && (o.mainNavForm = i.first);
                }
              },
              standalone: !0,
              features: [J],
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
              template: function (r, o) {
                if (
                  (1 & r &&
                    (j(0, 'lib-flex', 3)(1, 'lib-card', 4)(2, 'lib-flex', 5),
                    fe(3, 'lib-icon', 6),
                    Zt(4, Zz, 4, 0, 'ng-container', 7)(
                      5,
                      Yz,
                      1,
                      0,
                      'ng-template',
                      null,
                      0,
                      Db,
                    ),
                    L()(),
                    Zt(7, Qz, 5, 0, 'ng-container', 8),
                    L()),
                  2 & r)
                ) {
                  const i = Hw(6);
                  R(2),
                    S('justifyContent', o.mainNavJustifyContent),
                    R(2),
                    S('ngIf', o.isMobile)('ngIfElse', i),
                    R(3),
                    S('ngIf', o.isMobile && o.isMenuVisible);
                }
              },
              dependencies: [il, la, ed, fo, y0, Hz, Gz, zz],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Xz = (() => {
          class e {
            constructor(n) {
              (this.route = n), (this.event = new W());
            }
            onEvent(n) {
              this.route.navigate('/dashboard'), this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(tT));
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-login']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-auth')(1, 'lib-login-form', 0),
                  Y('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [td, Pz],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        Jz = (() => {
          class e {
            constructor() {
              this.event = new W();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-forgot-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-auth')(1, 'lib-forgot-password-form', 0),
                  Y('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [td, kz],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        e4 = (() => {
          class e {
            constructor() {
              this.event = new W();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-registration']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-auth')(1, 'lib-registration-form', 0),
                  Y('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [td, Lz],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        t4 = (() => {
          class e {
            constructor() {
              this.event = new W();
            }
            onEvent(n) {
              this.event.emit(n);
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-change-password']],
              outputs: { event: 'event' },
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [[3, 'event']],
              template: function (r, o) {
                1 & r &&
                  (j(0, 'lib-auth')(1, 'lib-change-password-form', 0),
                  Y('event', function (s) {
                    return o.onEvent(s);
                  }),
                  L()());
              },
              dependencies: [td, Vz],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        n4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-dashboard']],
              standalone: !0,
              features: [J],
              decls: 3,
              vars: 0,
              consts: [[1, 'dashboard']],
              template: function (r, o) {
                1 & r &&
                  (fe(0, 'lib-main-nav'), j(1, 'main', 0), fe(2, 'router-outlet'), L());
              },
              dependencies: [Kz, Al],
              styles: [
                '@import"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap";*[_ngcontent-%COMP%]{padding:0;margin:0;box-sizing:border-box}body[_ngcontent-%COMP%]{background-color:#4e31aa;min-width:300px}.dashboard[_ngcontent-%COMP%]{padding:.75rem}',
              ],
            }));
          }
          return e;
        })(),
        r4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-statistics']],
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [['value', 'Statistics']],
              template: function (r, o) {
                1 & r && (j(0, 'lib-card'), fe(1, 'lib-text', 0), L());
              },
              dependencies: [fo, Ht],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        o4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-courses']],
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [['value', 'Courses']],
              template: function (r, o) {
                1 & r && (j(0, 'lib-card'), fe(1, 'lib-text', 0), L());
              },
              dependencies: [fo, Ht],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        i4 = (() => {
          class e {
            static #e = (this.ɵfac = function (r) {
              return new (r || e)();
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-account']],
              standalone: !0,
              features: [J],
              decls: 2,
              vars: 0,
              consts: [['value', 'Account']],
              template: function (r, o) {
                1 & r && (j(0, 'lib-card'), fe(1, 'lib-text', 0), L());
              },
              dependencies: [fo, Ht],
              encapsulation: 2,
            }));
          }
          return e;
        })(),
        s4 = (() => {
          class e {
            constructor(n) {
              (this.route = n), this.route.navigate('');
            }
            static #e = (this.ɵfac = function (r) {
              return new (r || e)(w(tT));
            });
            static #t = (this.ɵcmp = X({
              type: e,
              selectors: [['lib-logout']],
              standalone: !0,
              features: [J],
              decls: 0,
              vars: 0,
              template: function (r, o) {},
              encapsulation: 2,
            }));
          }
          return e;
        })();
      const h4 = {
          providers: [
            (function HG(e, ...t) {
              return bo([
                { provide: kl, multi: !0, useValue: e },
                [],
                { provide: Ni, useFactory: QM, deps: [Kn] },
                { provide: Fu, multi: !0, useFactory: KM },
                t.map(n => n.ɵproviders),
              ]);
            })(
              [
                { path: '', redirectTo: '/login', pathMatch: 'full' },
                { path: 'login', component: Xz },
                { path: 'registration', component: e4 },
                { path: 'forgot-password', component: Jz },
                { path: 'change-password', component: t4 },
                {
                  path: 'dashboard',
                  component: n4,
                  children: [
                    {
                      path: '',
                      redirectTo: 'statistics',
                      pathMatch: 'full',
                    },
                    { path: 'statistics', component: r4 },
                    { path: 'courses', component: o4 },
                    { path: 'account', component: i4 },
                    {
                      path: 'course/:courseId',
                      component: (() => {
                        class e {
                          static #e = (this.ɵfac = function (r) {
                            return new (r || e)();
                          });
                          static #t = (this.ɵcmp = X({
                            type: e,
                            selectors: [['lib-course']],
                            standalone: !0,
                            features: [J],
                            decls: 2,
                            vars: 0,
                            consts: [['value', 'Course']],
                            template: function (r, o) {
                              1 & r && (j(0, 'lib-card'), fe(1, 'lib-text', 0), L());
                            },
                            dependencies: [fo, Ht],
                            encapsulation: 2,
                          }));
                        }
                        return e;
                      })(),
                      children: [],
                    },
                    { path: 'logout', component: s4 },
                  ],
                },
                {
                  path: '**',
                  component: (() => {
                    class e {
                      static #e = (this.ɵfac = function (r) {
                        return new (r || e)();
                      });
                      static #t = (this.ɵcmp = X({
                        type: e,
                        selectors: [['lib-http-404']],
                        standalone: !0,
                        features: [J],
                        decls: 2,
                        vars: 0,
                        consts: [['value', 'http-404']],
                        template: function (r, o) {
                          1 & r && (j(0, 'lib-card'), fe(1, 'lib-text', 0), L());
                        },
                        dependencies: [fo, Ht],
                        encapsulation: 2,
                      }));
                    }
                    return e;
                  })(),
                },
              ],
              (function ZG() {
                return xn(6, [{ provide: Ei, useClass: yU }]);
              })(),
              (function zG(e = {}) {
                return xn(4, [
                  {
                    provide: rm,
                    useFactory: () => {
                      const n = _(FB),
                        r = _(se),
                        o = _(Ll),
                        i = _(Mi);
                      return new YM(i, o, n, r, e);
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
        m4 = new (class g4 extends iT {})(
          class p4 extends rT {
            constructor(t, n) {
              super(t, n), (this.scheduler = t), (this.work = n);
            }
            schedule(t, n = 0) {
              return n > 0
                ? super.schedule(t, n)
                : ((this.delay = n), (this.state = t), this.scheduler.flush(this), this);
            }
            execute(t, n) {
              return n > 0 || this.closed ? super.execute(t, n) : this._execute(t, n);
            }
            requestAsyncId(t, n, r = 0) {
              return (null != r && r > 0) || (null == r && this.delay > 0)
                ? super.requestAsyncId(t, n, r)
                : (t.flush(this), 0);
            }
          },
        );
      function C4(e, t) {
        return e === t;
      }
      function C0(e, t) {
        const n = !t?.manualCleanup;
        n &&
          !t?.injector &&
          (function pc(e) {
            if (!cy()) throw new D(-203, !1);
          })();
        const r = n ? t?.injector?.get(Vr) ?? _(Vr) : null,
          o = (function w4(e = Object.is) {
            return (t, n) => 1 === t.kind && 1 === n.kind && e(t.value, n.value);
          })(t?.equal);
        let i;
        i = lr(t?.requireSync ? { kind: 0 } : { kind: 1, value: t?.initialValue }, {
          equal: o,
        });
        const s = e.subscribe({
          next: a => i.set({ kind: 1, value: a }),
          error: a => {
            if (t?.rejectErrors) throw a;
            i.set({ kind: 2, error: a });
          },
        });
        if (t?.requireSync && 0 === i().kind) throw new D(601, !1);
        return (
          r?.onDestroy(s.unsubscribe.bind(s)),
          Jr(
            () => {
              const a = i();
              switch (a.kind) {
                case 1:
                  return a.value;
                case 2:
                  throw a.error;
                case 0:
                  throw new D(601, !1);
              }
            },
            { equal: t?.equal },
          )
        );
      }
      const La = {};
      function Am(e, t) {
        return Object.defineProperty(t, 'type', {
          value: e,
          writable: !1,
        });
      }
      const E0 = '@ngrx/store/init';
      let ji = (() => {
        class e extends ct {
          constructor() {
            super({ type: E0 });
          }
          next(n) {
            if ('function' == typeof n)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().",
              );
            if (typeof n > 'u') throw new TypeError('Actions must be objects');
            if (typeof n.type > 'u')
              throw new TypeError('Actions must have a type property');
            super.next(n);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)();
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const T4 = [ji],
        w0 = new E('@ngrx/store Internal Root Guard'),
        b0 = new E('@ngrx/store Internal Initial State'),
        Rm = new E('@ngrx/store Initial State'),
        I0 = new E('@ngrx/store Reducer Factory'),
        S0 = new E('@ngrx/store Internal Reducer Factory Provider'),
        M0 = new E('@ngrx/store Initial Reducers'),
        xm = new E('@ngrx/store Internal Initial Reducers'),
        A0 =
          (new E('@ngrx/store Store Features'),
          new E('@ngrx/store Internal Store Reducers')),
        F0 =
          (new E('@ngrx/store Internal Feature Reducers'),
          new E('@ngrx/store Internal Feature Configs'),
          new E('@ngrx/store Internal Store Features'),
          new E('@ngrx/store Internal Feature Reducers Token'),
          new E('@ngrx/store Feature Reducers'),
          new E('@ngrx/store User Provided Meta Reducers')),
        nd = new E('@ngrx/store Meta Reducers'),
        P0 = new E('@ngrx/store Internal Resolved Meta Reducers'),
        k0 = new E('@ngrx/store User Runtime Checks Config'),
        L0 = new E('@ngrx/store Internal User Runtime Checks Config'),
        Va = new E('@ngrx/store Internal Runtime Checks'),
        Fm = new E('@ngrx/store Check if Action types are unique'),
        Pm = new E('@ngrx/store Root Store Provider');
      function km(e, t = {}) {
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
      function j0(...e) {
        return function (t) {
          if (0 === e.length) return t;
          const n = e[e.length - 1];
          return e.slice(0, -1).reduceRight((o, i) => i(o), n(t));
        };
      }
      function U0(e, t) {
        return (
          Array.isArray(t) && t.length > 0 && (e = j0.apply(null, [...t, e])),
          (n, r) => {
            const o = e(n);
            return (i, s) => o((i = void 0 === i ? r : i), s);
          }
        );
      }
      new E('@ngrx/store Feature State Provider');
      class Lm extends Re {}
      class B0 extends ji {}
      let rd = (() => {
        class e extends ct {
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
                    ? (function N4(e) {
                        const t = Array.isArray(e) && e.length > 0 ? j0(...e) : n => n;
                        return (n, r) => (
                          (n = t(n)), (o, i) => n((o = void 0 === o ? r : o), i)
                        );
                      })(a)(i, c)
                    : U0(s, a)(i, c);
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
              this.reducers = (function A4(e, t) {
                return Object.keys(e)
                  .filter(n => n !== t)
                  .reduce((n, r) => Object.assign(n, { [r]: e[r] }), {});
              })(this.reducers, r);
            }),
              this.updateReducers(n);
          }
          updateReducers(n) {
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              this.dispatcher.next({
                type: '@ngrx/store/update-reducers',
                features: n,
              });
          }
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = function (r) {
            return new (r || e)(M(B0), M(Rm), M(M0), M(I0));
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const x4 = [rd, { provide: Lm, useExisting: rd }, { provide: B0, useExisting: ji }];
      let Vm = (() => {
        class e extends at {
          ngOnDestroy() {
            this.complete();
          }
          static #e = (this.ɵfac = (() => {
            let n;
            return function (o) {
              return (n || (n = Ze(e)))(o || e);
            };
          })());
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const O4 = [Vm];
      class $0 extends Re {}
      let H0 = (() => {
        class e extends ct {
          static #e = (this.INIT = E0);
          constructor(n, r, o, i) {
            super(i);
            const a = n.pipe(Ng(m4)).pipe(
                (function v4(...e) {
                  const t = xg(e);
                  return Le((n, r) => {
                    const o = e.length,
                      i = new Array(o);
                    let s = e.map(() => !1),
                      a = !1;
                    for (let c = 0; c < o; c++)
                      fn(e[c]).subscribe(
                        Ne(
                          r,
                          u => {
                            (i[c] = u),
                              !a &&
                                !s[c] &&
                                ((s[c] = !0), (a = s.every(Fn)) && (s = null));
                          },
                          Wa,
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
              u = a.pipe(XS(F4, { state: i }));
            (this.stateSubscription = u.subscribe(({ state: l, action: d }) => {
              this.next(l), o.next(d);
            })),
              (this.state = C0(this, {
                manualCleanup: !0,
                requireSync: !0,
              }));
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
          static #t = (this.ɵfac = function (r) {
            return new (r || e)(M(ji), M(Lm), M(Vm), M(Rm));
          });
          static #n = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      function F4(e = { state: void 0 }, [t, n]) {
        const { state: r } = e;
        return { state: n(r, t), action: t };
      }
      const P4 = [H0, { provide: $0, useExisting: H0 }];
      let jm = (() => {
        class e extends Re {
          constructor(n, r, o) {
            super(),
              (this.actionsObserver = r),
              (this.reducerManager = o),
              (this.source = n),
              (this.state = n.state);
          }
          select(n, ...r) {
            return L4.call(null, n, ...r)(this);
          }
          selectSignal(n, r) {
            return Jr(() => n(this.state()), r);
          }
          lift(n) {
            const r = new e(this, this.actionsObserver, this.reducerManager);
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
            return new (r || e)(M($0), M(ji), M(rd));
          });
          static #t = (this.ɵprov = I({ token: e, factory: e.ɵfac }));
        }
        return e;
      })();
      const k4 = [jm];
      function L4(e, t, ...n) {
        return function (o) {
          let i;
          if ('string' == typeof e) {
            const s = [t, ...n].filter(Boolean);
            i = o.pipe(
              (function y4(...e) {
                const t = e.length;
                if (0 === t) throw new Error('list of properties cannot be empty.');
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
            (function _4(e, t = Fn) {
              return (
                (e = e ?? C4),
                Le((n, r) => {
                  let o,
                    i = !0;
                  n.subscribe(
                    Ne(r, s => {
                      const a = t(s);
                      (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
                    }),
                  );
                })
              );
            })(),
          );
        };
      }
      const Um = 'https://ngrx.io/guide/store/configuration/runtime-checks';
      function G0(e) {
        return void 0 === e;
      }
      function z0(e) {
        return null === e;
      }
      function q0(e) {
        return Array.isArray(e);
      }
      function W0(e) {
        return 'object' == typeof e && null !== e;
      }
      function Bm(e) {
        return 'function' == typeof e;
      }
      function J4(e) {
        return e instanceof E ? _(e) : e;
      }
      function K0(e) {
        return 'function' == typeof e ? e() : e;
      }
      function nq(e, t) {
        return e.concat(t);
      }
      function rq() {
        if (_(jm, { optional: !0, skipSelf: !0 }))
          throw new TypeError(
            'The root Store has been provided more than once. Feature modules should provide feature states instead.',
          );
        return 'guarded';
      }
      function Gm(e) {
        Object.freeze(e);
        const t = Bm(e);
        return (
          Object.getOwnPropertyNames(e).forEach(n => {
            if (
              !n.startsWith('\u0275') &&
              (function H4(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              })(e, n) &&
              (!t || ('caller' !== n && 'callee' !== n && 'arguments' !== n))
            ) {
              const r = e[n];
              (W0(r) || Bm(r)) && !Object.isFrozen(r) && Gm(r);
            }
          }),
          e
        );
      }
      function zm(e, t = []) {
        return (G0(e) || z0(e)) && 0 === t.length
          ? { path: ['root'], value: e }
          : Object.keys(e).reduce((r, o) => {
              if (r) return r;
              const i = e[o];
              return (function $4(e) {
                return Bm(e) && e.hasOwnProperty('\u0275cmp');
              })(i)
                ? r
                : !(
                    G0(i) ||
                    z0(i) ||
                    (function U4(e) {
                      return 'number' == typeof e;
                    })(i) ||
                    (function j4(e) {
                      return 'boolean' == typeof e;
                    })(i) ||
                    (function V4(e) {
                      return 'string' == typeof e;
                    })(i) ||
                    q0(i)
                  ) &&
                    ((function Z0(e) {
                      if (
                        !(function B4(e) {
                          return W0(e) && !q0(e);
                        })(e)
                      )
                        return !1;
                      const t = Object.getPrototypeOf(e);
                      return t === Object.prototype || null === t;
                    })(i)
                      ? zm(i, [...t, o])
                      : { path: [...t, o], value: i });
            }, !1);
      }
      function X0(e, t) {
        if (!1 === e) return;
        const n = e.path.join('.'),
          r = new Error(
            `Detected unserializable ${t} at "${n}". ${Um}#strict${t}serializability`,
          );
        throw ((r.value = e.value), (r.unserializablePath = n), r);
      }
      function aq(e) {
        return {
          strictStateSerializability: !1,
          strictActionSerializability: !1,
          strictStateImmutability: !1,
          strictActionImmutability: !1,
          strictActionWithinNgZone: !1,
          strictActionTypeUniqueness: !1,
        };
      }
      function cq({ strictActionSerializability: e, strictStateSerializability: t }) {
        return n =>
          e || t
            ? (function iq(e, t) {
                return function (n, r) {
                  t.action(r) && X0(zm(r), 'action');
                  const o = e(n, r);
                  return t.state() && X0(zm(o), 'state'), o;
                };
              })(n, { action: r => e && !qm(r), state: () => t })
            : n;
      }
      function uq({ strictActionImmutability: e, strictStateImmutability: t }) {
        return n =>
          e || t
            ? (function oq(e, t) {
                return function (n, r) {
                  const o = t.action(r) ? Gm(r) : r,
                    i = e(n, o);
                  return t.state() ? Gm(i) : i;
                };
              })(n, { action: r => e && !qm(r), state: () => t })
            : n;
      }
      function qm(e) {
        return e.type.startsWith('@ngrx');
      }
      function lq({ strictActionWithinNgZone: e }) {
        return t =>
          e
            ? (function sq(e, t) {
                return function (n, r) {
                  if (t.action(r) && !se.isInAngularZone())
                    throw new Error(
                      `Action '${r.type}' running outside NgZone. ${Um}#strictactionwithinngzone`,
                    );
                  return e(n, r);
                };
              })(t, { action: n => e && !qm(n) })
            : t;
      }
      function dq(e) {
        return [
          { provide: L0, useValue: e },
          { provide: k0, useFactory: fq, deps: [L0] },
          { provide: Va, deps: [k0], useFactory: aq },
          { provide: nd, multi: !0, deps: [Va], useFactory: uq },
          { provide: nd, multi: !0, deps: [Va], useFactory: cq },
          { provide: nd, multi: !0, deps: [Va], useFactory: lq },
        ];
      }
      function fq(e) {
        return e;
      }
      function hq(e) {
        if (!e.strictActionTypeUniqueness) return;
        const t = Object.entries(La)
          .filter(([, n]) => n > 1)
          .map(([n]) => n);
        if (t.length)
          throw new Error(
            `Action types are registered more than once, ${t
              .map(n => `"${n}"`)
              .join(', ')}. ${Um}#strictactiontypeuniqueness`,
          );
      }
      function pq(e = {}, t = {}) {
        return [
          { provide: w0, useFactory: rq },
          { provide: b0, useValue: t.initialState },
          { provide: Rm, useFactory: K0, deps: [b0] },
          { provide: xm, useValue: e },
          { provide: A0, useExisting: e instanceof E ? e : xm },
          { provide: M0, deps: [xm, [new Gv(A0)]], useFactory: J4 },
          {
            provide: F0,
            useValue: t.metaReducers ? t.metaReducers : [],
          },
          { provide: P0, deps: [nd, F0], useFactory: nq },
          {
            provide: S0,
            useValue: t.reducerFactory ? t.reducerFactory : km,
          },
          { provide: I0, deps: [S0, P0], useFactory: U0 },
          T4,
          x4,
          O4,
          P4,
          k4,
          dq(t.runtimeChecks),
          [{ provide: Fm, multi: !0, deps: [Va], useFactory: hq }],
        ];
      }
      const mq = [
          {
            provide: Pm,
            useFactory: function gq() {
              _(ji),
                _(Lm),
                _(Vm),
                _(jm),
                _(w0, { optional: !0 }),
                _(Fm, { optional: !0 });
            },
          },
          { provide: Ot, multi: !0, useFactory: () => () => _(Pm) },
        ],
        Iq = {
          providers: [
            (function vq(e, t) {
              return bo([...pq(e, t), mq]);
            })({
              grammar: (function Eq(e, ...t) {
                const n = new Map();
                for (const r of t)
                  for (const o of r.types) {
                    const i = n.get(o);
                    n.set(o, i ? (a, c) => r.reducer(i(a, c), c) : r.reducer);
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
                (function Dq(...e) {
                  return {
                    reducer: e.pop(),
                    types: e.map(r => r.type),
                  };
                })(
                  (function D0(e, t) {
                    if (((La[e] = (La[e] || 0) + 1), 'function' == typeof t))
                      return Am(e, (...r) => ({
                        ...t(...r),
                        type: e,
                      }));
                    switch (t ? t._as : 'empty') {
                      case 'empty':
                        return Am(e, () => ({ type: e }));
                      case 'props':
                        return Am(e, r => ({ ...r, type: e }));
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
      (function N$(e, t) {
        return $2({ rootComponent: e, ...IS(t) });
      })(YG, { providers: [...h4.providers, ...Iq.providers] }).catch(e => {
        throw new Error(e);
      });
    },
  },
  Bi => {
    Bi((Bi.s = 52));
  },
]);

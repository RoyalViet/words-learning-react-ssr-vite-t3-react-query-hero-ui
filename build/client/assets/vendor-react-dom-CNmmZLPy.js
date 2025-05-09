import {
  r as o1,
  c as zr,
  $ as Vr,
  a as S,
  R as Ne,
  b as u1,
  d as la,
  e as _2,
  f as Ru,
  g as z2,
  h as c1,
  _ as f1,
  j as U,
  i as Hn,
  k as V2,
  l as et,
  w as Wu,
  m as B2,
  n as Hh,
  o as k2,
  u as pt,
  p as H2,
  q as ie,
  s as An,
  t as Nb,
  v as Pn,
  x as Te,
  y as Ob,
  z as Uh,
  A as d1,
  B as Kh,
  C as U2,
  D as K2,
  E as j2,
  F as h1,
  G as F2,
  H as Qu,
  I as Zd,
  J as Ju,
  K as Lb,
  L as I2,
  M as G2,
  N as _b,
  O as Y2,
  P as q2,
  Q as zb,
  S as Vb,
  T as p1,
  U as X2,
  V as jh,
  W as Bb,
  X as Fh,
  Y as m1,
  Z as Z2,
  a0 as kb,
  a1 as W2,
  a2 as Q2,
  a3 as Hb,
  a4 as J2,
  a5 as e3,
  a6 as Ub,
  a7 as t3,
  a8 as v1,
  a9 as n3,
  aa as i3,
  ab as a3,
  ac as Kb,
  ad as l3,
  ae as s3,
  af as r3,
  ag as jb,
  ah as o3,
  ai as u3,
} from "./vendor-react-BOaTbF0U.js";
import { g as c3 } from "./vendor-chance-vhTGba_j.js";
var xd = { exports: {} },
  lr = {},
  Ed = { exports: {} },
  $d = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fb;
function f3() {
  return (
    Fb ||
      ((Fb = 1),
      (function (t) {
        function n($, N) {
          var O = $.length;
          $.push(N);
          e: for (; 0 < O; ) {
            var te = (O - 1) >>> 1,
              ne = $[te];
            if (0 < r(ne, N)) ($[te] = N), ($[O] = ne), (O = te);
            else break e;
          }
        }
        function a($) {
          return $.length === 0 ? null : $[0];
        }
        function l($) {
          if ($.length === 0) return null;
          var N = $[0],
            O = $.pop();
          if (O !== N) {
            $[0] = O;
            e: for (var te = 0, ne = $.length, oe = ne >>> 1; te < oe; ) {
              var re = 2 * (te + 1) - 1,
                le = $[re],
                se = re + 1,
                de = $[se];
              if (0 > r(le, O))
                se < ne && 0 > r(de, le)
                  ? (($[te] = de), ($[se] = O), (te = se))
                  : (($[te] = le), ($[re] = O), (te = re));
              else if (se < ne && 0 > r(de, O))
                ($[te] = de), ($[se] = O), (te = se);
              else break e;
            }
          }
          return N;
        }
        function r($, N) {
          var O = $.sortIndex - N.sortIndex;
          return O !== 0 ? O : $.id - N.id;
        }
        if (
          ((t.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          t.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            d = c.now();
          t.unstable_now = function () {
            return c.now() - d;
          };
        }
        var h = [],
          m = [],
          v = 1,
          b = null,
          g = 3,
          T = !1,
          x = !1,
          C = !1,
          A = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        function z($) {
          for (var N = a(m); N !== null; ) {
            if (N.callback === null) l(m);
            else if (N.startTime <= $)
              l(m), (N.sortIndex = N.expirationTime), n(h, N);
            else break;
            N = a(m);
          }
        }
        function R($) {
          if (((C = !1), z($), !x))
            if (a(h) !== null) (x = !0), B || ((B = !0), F());
            else {
              var N = a(m);
              N !== null && Z(R, N.startTime - $);
            }
        }
        var B = !1,
          X = -1,
          w = 5,
          G = -1;
        function W() {
          return A ? !0 : !(t.unstable_now() - G < w);
        }
        function D() {
          if (((A = !1), B)) {
            var $ = t.unstable_now();
            G = $;
            var N = !0;
            try {
              e: {
                (x = !1), C && ((C = !1), V(X), (X = -1)), (T = !0);
                var O = g;
                try {
                  t: {
                    for (
                      z($), b = a(h);
                      b !== null && !(b.expirationTime > $ && W());

                    ) {
                      var te = b.callback;
                      if (typeof te == "function") {
                        (b.callback = null), (g = b.priorityLevel);
                        var ne = te(b.expirationTime <= $);
                        if ((($ = t.unstable_now()), typeof ne == "function")) {
                          (b.callback = ne), z($), (N = !0);
                          break t;
                        }
                        b === a(h) && l(h), z($);
                      } else l(h);
                      b = a(h);
                    }
                    if (b !== null) N = !0;
                    else {
                      var oe = a(m);
                      oe !== null && Z(R, oe.startTime - $), (N = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (g = O), (T = !1);
                }
                N = void 0;
              }
            } finally {
              N ? F() : (B = !1);
            }
          }
        }
        var F;
        if (typeof P == "function")
          F = function () {
            P(D);
          };
        else if (typeof MessageChannel < "u") {
          var _ = new MessageChannel(),
            H = _.port2;
          (_.port1.onmessage = D),
            (F = function () {
              H.postMessage(null);
            });
        } else
          F = function () {
            M(D, 0);
          };
        function Z($, N) {
          X = M(function () {
            $(t.unstable_now());
          }, N);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (t.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (w = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return g;
          }),
          (t.unstable_next = function ($) {
            switch (g) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = g;
            }
            var O = g;
            g = N;
            try {
              return $();
            } finally {
              g = O;
            }
          }),
          (t.unstable_requestPaint = function () {
            A = !0;
          }),
          (t.unstable_runWithPriority = function ($, N) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var O = g;
            g = $;
            try {
              return N();
            } finally {
              g = O;
            }
          }),
          (t.unstable_scheduleCallback = function ($, N, O) {
            var te = t.unstable_now();
            switch (
              (typeof O == "object" && O !== null
                ? ((O = O.delay),
                  (O = typeof O == "number" && 0 < O ? te + O : te))
                : (O = te),
              $)
            ) {
              case 1:
                var ne = -1;
                break;
              case 2:
                ne = 250;
                break;
              case 5:
                ne = 1073741823;
                break;
              case 4:
                ne = 1e4;
                break;
              default:
                ne = 5e3;
            }
            return (
              (ne = O + ne),
              ($ = {
                id: v++,
                callback: N,
                priorityLevel: $,
                startTime: O,
                expirationTime: ne,
                sortIndex: -1,
              }),
              O > te
                ? (($.sortIndex = O),
                  n(m, $),
                  a(h) === null &&
                    $ === a(m) &&
                    (C ? (V(X), (X = -1)) : (C = !0), Z(R, O - te)))
                : (($.sortIndex = ne),
                  n(h, $),
                  x || T || ((x = !0), B || ((B = !0), F()))),
              $
            );
          }),
          (t.unstable_shouldYield = W),
          (t.unstable_wrapCallback = function ($) {
            var N = g;
            return function () {
              var O = g;
              g = N;
              try {
                return $.apply(this, arguments);
              } finally {
                g = O;
              }
            };
          });
      })($d)),
    $d
  );
}
var Ib;
function d3() {
  return Ib || ((Ib = 1), (Ed.exports = f3())), Ed.exports;
}
var wd = { exports: {} },
  _t = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gb;
function h3() {
  if (Gb) return _t;
  Gb = 1;
  var t = o1();
  function n(h) {
    var m = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      h +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var l = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function u(h, m, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: b == null ? null : "" + b,
      children: h,
      containerInfo: m,
      implementation: v,
    };
  }
  var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(h, m) {
    if (h === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (_t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = l),
    (_t.createPortal = function (h, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(n(299));
      return u(h, m, null, v);
    }),
    (_t.flushSync = function (h) {
      var m = c.T,
        v = l.p;
      try {
        if (((c.T = null), (l.p = 2), h)) return h();
      } finally {
        (c.T = m), (l.p = v), l.d.f();
      }
    }),
    (_t.preconnect = function (h, m) {
      typeof h == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        l.d.C(h, m));
    }),
    (_t.prefetchDNS = function (h) {
      typeof h == "string" && l.d.D(h);
    }),
    (_t.preinit = function (h, m) {
      if (typeof h == "string" && m && typeof m.as == "string") {
        var v = m.as,
          b = d(v, m.crossOrigin),
          g = typeof m.integrity == "string" ? m.integrity : void 0,
          T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        v === "style"
          ? l.d.S(h, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: g,
              fetchPriority: T,
            })
          : v === "script" &&
            l.d.X(h, {
              crossOrigin: b,
              integrity: g,
              fetchPriority: T,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (_t.preinitModule = function (h, m) {
      if (typeof h == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var v = d(m.as, m.crossOrigin);
            l.d.M(h, {
              crossOrigin: v,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && l.d.M(h);
    }),
    (_t.preload = function (h, m) {
      if (
        typeof h == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var v = m.as,
          b = d(v, m.crossOrigin);
        l.d.L(h, v, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (_t.preloadModule = function (h, m) {
      if (typeof h == "string")
        if (m) {
          var v = d(m.as, m.crossOrigin);
          l.d.m(h, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else l.d.m(h);
    }),
    (_t.requestFormReset = function (h) {
      l.d.r(h);
    }),
    (_t.unstable_batchedUpdates = function (h, m) {
      return h(m);
    }),
    (_t.useFormState = function (h, m, v) {
      return c.H.useFormState(h, m, v);
    }),
    (_t.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (_t.version = "19.1.0"),
    _t
  );
}
var Yb;
function b1() {
  if (Yb) return wd.exports;
  Yb = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (wd.exports = h3()), wd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qb;
function p3() {
  if (qb) return lr;
  qb = 1;
  var t = d3(),
    n = o1(),
    a = b1();
  function l(e) {
    var i = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      i += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        i += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      i +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function u(e) {
    var i = e,
      s = e;
    if (e.alternate) for (; i.return; ) i = i.return;
    else {
      e = i;
      do (i = e), (i.flags & 4098) !== 0 && (s = i.return), (e = i.return);
      while (e);
    }
    return i.tag === 3 ? s : null;
  }
  function c(e) {
    if (e.tag === 13) {
      var i = e.memoizedState;
      if (
        (i === null && ((e = e.alternate), e !== null && (i = e.memoizedState)),
        i !== null)
      )
        return i.dehydrated;
    }
    return null;
  }
  function d(e) {
    if (u(e) !== e) throw Error(l(188));
  }
  function h(e) {
    var i = e.alternate;
    if (!i) {
      if (((i = u(e)), i === null)) throw Error(l(188));
      return i !== e ? null : e;
    }
    for (var s = e, o = i; ; ) {
      var f = s.return;
      if (f === null) break;
      var p = f.alternate;
      if (p === null) {
        if (((o = f.return), o !== null)) {
          s = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === s) return d(f), e;
          if (p === o) return d(f), i;
          p = p.sibling;
        }
        throw Error(l(188));
      }
      if (s.return !== o.return) (s = f), (o = p);
      else {
        for (var y = !1, E = f.child; E; ) {
          if (E === s) {
            (y = !0), (s = f), (o = p);
            break;
          }
          if (E === o) {
            (y = !0), (o = f), (s = p);
            break;
          }
          E = E.sibling;
        }
        if (!y) {
          for (E = p.child; E; ) {
            if (E === s) {
              (y = !0), (s = p), (o = f);
              break;
            }
            if (E === o) {
              (y = !0), (o = p), (s = f);
              break;
            }
            E = E.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (s.alternate !== o) throw Error(l(190));
    }
    if (s.tag !== 3) throw Error(l(188));
    return s.stateNode.current === s ? e : i;
  }
  function m(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((i = m(e)), i !== null)) return i;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    b = Symbol.for("react.element"),
    g = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    C = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    M = Symbol.for("react.provider"),
    V = Symbol.for("react.consumer"),
    P = Symbol.for("react.context"),
    z = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    B = Symbol.for("react.suspense_list"),
    X = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    G = Symbol.for("react.activity"),
    W = Symbol.for("react.memo_cache_sentinel"),
    D = Symbol.iterator;
  function F(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (D && e[D]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var _ = Symbol.for("react.client.reference");
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === _ ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case x:
        return "Fragment";
      case A:
        return "Profiler";
      case C:
        return "StrictMode";
      case R:
        return "Suspense";
      case B:
        return "SuspenseList";
      case G:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case T:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case z:
          var i = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = i.displayName || i.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case X:
          return (
            (i = e.displayName || null), i !== null ? i : H(e.type) || "Memo"
          );
        case w:
          (i = e._payload), (e = e._init);
          try {
            return H(e(i));
          } catch {}
      }
    return null;
  }
  var Z = Array.isArray,
    $ = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = { pending: !1, data: null, method: null, action: null },
    te = [],
    ne = -1;
  function oe(e) {
    return { current: e };
  }
  function re(e) {
    0 > ne || ((e.current = te[ne]), (te[ne] = null), ne--);
  }
  function le(e, i) {
    ne++, (te[ne] = e.current), (e.current = i);
  }
  var se = oe(null),
    de = oe(null),
    ce = oe(null),
    Pe = oe(null);
  function Oe(e, i) {
    switch ((le(ce, i), le(de, e), le(se, null), i.nodeType)) {
      case 9:
      case 11:
        e = (e = i.documentElement) && (e = e.namespaceURI) ? sb(e) : 0;
        break;
      default:
        if (((e = i.tagName), (i = i.namespaceURI)))
          (i = sb(i)), (e = rb(i, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    re(se), le(se, e);
  }
  function me() {
    re(se), re(de), re(ce);
  }
  function De(e) {
    e.memoizedState !== null && le(Pe, e);
    var i = se.current,
      s = rb(i, e.type);
    i !== s && (le(de, e), le(se, s));
  }
  function ae(e) {
    de.current === e && (re(se), re(de)),
      Pe.current === e && (re(Pe), (er._currentValue = O));
  }
  var xe = Object.prototype.hasOwnProperty,
    we = t.unstable_scheduleCallback,
    Ie = t.unstable_cancelCallback,
    yt = t.unstable_shouldYield,
    fe = t.unstable_requestPaint,
    Ye = t.unstable_now,
    mt = t.unstable_getCurrentPriorityLevel,
    Rn = t.unstable_ImmediatePriority,
    ct = t.unstable_UserBlockingPriority,
    Qt = t.unstable_NormalPriority,
    Ct = t.unstable_LowPriority,
    Nn = t.unstable_IdlePriority,
    Di = t.log,
    Nt = t.unstable_setDisableYieldValue,
    On = null,
    tt = null;
  function Jt(e) {
    if (
      (typeof Di == "function" && Nt(e),
      tt && typeof tt.setStrictMode == "function")
    )
      try {
        tt.setStrictMode(On, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : Ia,
    ja = Math.log,
    Fa = Math.LN2;
  function Ia(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ja(e) / Fa) | 0)) | 0;
  }
  var en = 256,
    Ge = 4194304;
  function Ln(e) {
    var i = e & 42;
    if (i !== 0) return i;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function jn(e, i, s) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var f = 0,
      p = e.suspendedLanes,
      y = e.pingedLanes;
    e = e.warmLanes;
    var E = o & 134217727;
    return (
      E !== 0
        ? ((o = E & ~p),
          o !== 0
            ? (f = Ln(o))
            : ((y &= E),
              y !== 0
                ? (f = Ln(y))
                : s || ((s = E & ~e), s !== 0 && (f = Ln(s)))))
        : ((E = o & ~p),
          E !== 0
            ? (f = Ln(E))
            : y !== 0
              ? (f = Ln(y))
              : s || ((s = o & ~e), s !== 0 && (f = Ln(s)))),
      f === 0
        ? 0
        : i !== 0 &&
            i !== f &&
            (i & p) === 0 &&
            ((p = f & -f),
            (s = i & -i),
            p >= s || (p === 32 && (s & 4194048) !== 0))
          ? i
          : f
    );
  }
  function Ai(e, i) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & i) === 0;
  }
  function ii(e, i) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return i + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rs() {
    var e = en;
    return (en <<= 1), (en & 4194048) === 0 && (en = 256), e;
  }
  function Ga() {
    var e = Ge;
    return (Ge <<= 1), (Ge & 62914560) === 0 && (Ge = 4194304), e;
  }
  function Ya(e) {
    for (var i = [], s = 0; 31 > s; s++) i.push(e);
    return i;
  }
  function ua(e, i) {
    (e.pendingLanes |= i),
      i !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function qa(e, i, s, o, f, p) {
    var y = e.pendingLanes;
    (e.pendingLanes = s),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= s),
      (e.entangledLanes &= s),
      (e.errorRecoveryDisabledLanes &= s),
      (e.shellSuspendCounter = 0);
    var E = e.entanglements,
      L = e.expirationTimes,
      I = e.hiddenUpdates;
    for (s = y & ~s; 0 < s; ) {
      var Q = 31 - St(s),
        ee = 1 << Q;
      (E[Q] = 0), (L[Q] = -1);
      var Y = I[Q];
      if (Y !== null)
        for (I[Q] = null, Q = 0; Q < Y.length; Q++) {
          var q = Y[Q];
          q !== null && (q.lane &= -536870913);
        }
      s &= ~ee;
    }
    o !== 0 && qr(e, o, 0),
      p !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= p & ~(y & ~i));
  }
  function qr(e, i, s) {
    (e.pendingLanes |= i), (e.suspendedLanes &= ~i);
    var o = 31 - St(i);
    (e.entangledLanes |= i),
      (e.entanglements[o] = e.entanglements[o] | 1073741824 | (s & 4194090));
  }
  function fn(e, i) {
    var s = (e.entangledLanes |= i);
    for (e = e.entanglements; s; ) {
      var o = 31 - St(s),
        f = 1 << o;
      (f & i) | (e[o] & i) && (e[o] |= i), (s &= ~f);
    }
  }
  function os(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function us(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function We() {
    var e = N.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Cb(e.type));
  }
  function dc(e, i) {
    var s = N.p;
    try {
      return (N.p = e), i();
    } finally {
      N.p = s;
    }
  }
  var Fn = Math.random().toString(36).slice(2),
    vt = "__reactFiber$" + Fn,
    Ot = "__reactProps$" + Fn,
    Pi = "__reactContainer$" + Fn,
    cs = "__reactEvents$" + Fn,
    hc = "__reactListeners$" + Fn,
    pc = "__reactHandles$" + Fn,
    Xr = "__reactResources$" + Fn,
    ca = "__reactMarker$" + Fn;
  function fs(e) {
    delete e[vt], delete e[Ot], delete e[cs], delete e[hc], delete e[pc];
  }
  function ge(e) {
    var i = e[vt];
    if (i) return i;
    for (var s = e.parentNode; s; ) {
      if ((i = s[Pi] || s[vt])) {
        if (
          ((s = i.alternate),
          i.child !== null || (s !== null && s.child !== null))
        )
          for (e = fb(e); e !== null; ) {
            if ((s = e[vt])) return s;
            e = fb(e);
          }
        return i;
      }
      (e = s), (s = e.parentNode);
    }
    return null;
  }
  function dn(e) {
    if ((e = e[vt] || e[Pi])) {
      var i = e.tag;
      if (i === 5 || i === 6 || i === 13 || i === 26 || i === 27 || i === 3)
        return e;
    }
    return null;
  }
  function ds(e) {
    var i = e.tag;
    if (i === 5 || i === 26 || i === 27 || i === 6) return e.stateNode;
    throw Error(l(33));
  }
  function Xa(e) {
    var i = e[Xr];
    return (
      i ||
        (i = e[Xr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      i
    );
  }
  function Tt(e) {
    e[ca] = !0;
  }
  var Xp = new Set(),
    Zp = {};
  function fa(e, i) {
    Za(e, i), Za(e + "Capture", i);
  }
  function Za(e, i) {
    for (Zp[e] = i, e = 0; e < i.length; e++) Xp.add(i[e]);
  }
  var ME = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Wp = {},
    Qp = {};
  function DE(e) {
    return xe.call(Qp, e)
      ? !0
      : xe.call(Wp, e)
        ? !1
        : ME.test(e)
          ? (Qp[e] = !0)
          : ((Wp[e] = !0), !1);
  }
  function Zr(e, i, s) {
    if (DE(i))
      if (s === null) e.removeAttribute(i);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(i);
            return;
          case "boolean":
            var o = i.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(i);
              return;
            }
        }
        e.setAttribute(i, "" + s);
      }
  }
  function Wr(e, i, s) {
    if (s === null) e.removeAttribute(i);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttribute(i, "" + s);
    }
  }
  function ai(e, i, s, o) {
    if (o === null) e.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(s);
          return;
      }
      e.setAttributeNS(i, s, "" + o);
    }
  }
  var mc, Jp;
  function Wa(e) {
    if (mc === void 0)
      try {
        throw Error();
      } catch (s) {
        var i = s.stack.trim().match(/\n( *(at )?)/);
        (mc = (i && i[1]) || ""),
          (Jp =
            -1 <
            s.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < s.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      mc +
      e +
      Jp
    );
  }
  var vc = !1;
  function bc(e, i) {
    if (!e || vc) return "";
    vc = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (i) {
              var ee = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ee.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ee, []);
                } catch (q) {
                  var Y = q;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (q) {
                  Y = q;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                Y = q;
              }
              (ee = e()) &&
                typeof ee.catch == "function" &&
                ee.catch(function () {});
            }
          } catch (q) {
            if (q && Y && typeof q.stack == "string") return [q.stack, Y.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var p = o.DetermineComponentFrameRoot(),
        y = p[0],
        E = p[1];
      if (y && E) {
        var L = y.split(`
`),
          I = E.split(`
`);
        for (
          f = o = 0;
          o < L.length && !L[o].includes("DetermineComponentFrameRoot");

        )
          o++;
        for (; f < I.length && !I[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (o === L.length || f === I.length)
          for (
            o = L.length - 1, f = I.length - 1;
            1 <= o && 0 <= f && L[o] !== I[f];

          )
            f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (L[o] !== I[f]) {
            if (o !== 1 || f !== 1)
              do
                if ((o--, f--, 0 > f || L[o] !== I[f])) {
                  var Q =
                    `
` + L[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      Q.includes("<anonymous>") &&
                      (Q = Q.replace("<anonymous>", e.displayName)),
                    Q
                  );
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      (vc = !1), (Error.prepareStackTrace = s);
    }
    return (s = e ? e.displayName || e.name : "") ? Wa(s) : "";
  }
  function AE(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wa(e.type);
      case 16:
        return Wa("Lazy");
      case 13:
        return Wa("Suspense");
      case 19:
        return Wa("SuspenseList");
      case 0:
      case 15:
        return bc(e.type, !1);
      case 11:
        return bc(e.type.render, !1);
      case 1:
        return bc(e.type, !0);
      case 31:
        return Wa("Activity");
      default:
        return "";
    }
  }
  function em(e) {
    try {
      var i = "";
      do (i += AE(e)), (e = e.return);
      while (e);
      return i;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  function hn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function tm(e) {
    var i = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (i === "checkbox" || i === "radio")
    );
  }
  function PE(e) {
    var i = tm(e) ? "checked" : "value",
      s = Object.getOwnPropertyDescriptor(e.constructor.prototype, i),
      o = "" + e[i];
    if (
      !e.hasOwnProperty(i) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var f = s.get,
        p = s.set;
      return (
        Object.defineProperty(e, i, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (y) {
            (o = "" + y), p.call(this, y);
          },
        }),
        Object.defineProperty(e, i, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (y) {
            o = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[i];
          },
        }
      );
    }
  }
  function Qr(e) {
    e._valueTracker || (e._valueTracker = PE(e));
  }
  function nm(e) {
    if (!e) return !1;
    var i = e._valueTracker;
    if (!i) return !0;
    var s = i.getValue(),
      o = "";
    return (
      e && (o = tm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== s ? (i.setValue(e), !0) : !1
    );
  }
  function Jr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var RE = /[\n"\\]/g;
  function pn(e) {
    return e.replace(RE, function (i) {
      return "\\" + i.charCodeAt(0).toString(16) + " ";
    });
  }
  function gc(e, i, s, o, f, p, y, E) {
    (e.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (e.type = y)
        : e.removeAttribute("type"),
      i != null
        ? y === "number"
          ? ((i === 0 && e.value === "") || e.value != i) &&
            (e.value = "" + hn(i))
          : e.value !== "" + hn(i) && (e.value = "" + hn(i))
        : (y !== "submit" && y !== "reset") || e.removeAttribute("value"),
      i != null
        ? yc(e, y, hn(i))
        : s != null
          ? yc(e, y, hn(s))
          : o != null && e.removeAttribute("value"),
      f == null && p != null && (e.defaultChecked = !!p),
      f != null &&
        (e.checked = f && typeof f != "function" && typeof f != "symbol"),
      E != null &&
      typeof E != "function" &&
      typeof E != "symbol" &&
      typeof E != "boolean"
        ? (e.name = "" + hn(E))
        : e.removeAttribute("name");
  }
  function im(e, i, s, o, f, p, y, E) {
    if (
      (p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.type = p),
      i != null || s != null)
    ) {
      if (!((p !== "submit" && p !== "reset") || i != null)) return;
      (s = s != null ? "" + hn(s) : ""),
        (i = i != null ? "" + hn(i) : s),
        E || i === e.value || (e.value = i),
        (e.defaultValue = i);
    }
    (o = o ?? f),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (e.checked = E ? e.checked : !!o),
      (e.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (e.name = y);
  }
  function yc(e, i, s) {
    (i === "number" && Jr(e.ownerDocument) === e) ||
      e.defaultValue === "" + s ||
      (e.defaultValue = "" + s);
  }
  function Qa(e, i, s, o) {
    if (((e = e.options), i)) {
      i = {};
      for (var f = 0; f < s.length; f++) i["$" + s[f]] = !0;
      for (s = 0; s < e.length; s++)
        (f = i.hasOwnProperty("$" + e[s].value)),
          e[s].selected !== f && (e[s].selected = f),
          f && o && (e[s].defaultSelected = !0);
    } else {
      for (s = "" + hn(s), i = null, f = 0; f < e.length; f++) {
        if (e[f].value === s) {
          (e[f].selected = !0), o && (e[f].defaultSelected = !0);
          return;
        }
        i !== null || e[f].disabled || (i = e[f]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function am(e, i, s) {
    if (
      i != null &&
      ((i = "" + hn(i)), i !== e.value && (e.value = i), s == null)
    ) {
      e.defaultValue !== i && (e.defaultValue = i);
      return;
    }
    e.defaultValue = s != null ? "" + hn(s) : "";
  }
  function lm(e, i, s, o) {
    if (i == null) {
      if (o != null) {
        if (s != null) throw Error(l(92));
        if (Z(o)) {
          if (1 < o.length) throw Error(l(93));
          o = o[0];
        }
        s = o;
      }
      s == null && (s = ""), (i = s);
    }
    (s = hn(i)),
      (e.defaultValue = s),
      (o = e.textContent),
      o === s && o !== "" && o !== null && (e.value = o);
  }
  function Ja(e, i) {
    if (i) {
      var s = e.firstChild;
      if (s && s === e.lastChild && s.nodeType === 3) {
        s.nodeValue = i;
        return;
      }
    }
    e.textContent = i;
  }
  var NE = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function sm(e, i, s) {
    var o = i.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === ""
      ? o
        ? e.setProperty(i, "")
        : i === "float"
          ? (e.cssFloat = "")
          : (e[i] = "")
      : o
        ? e.setProperty(i, s)
        : typeof s != "number" || s === 0 || NE.has(i)
          ? i === "float"
            ? (e.cssFloat = s)
            : (e[i] = ("" + s).trim())
          : (e[i] = s + "px");
  }
  function rm(e, i, s) {
    if (i != null && typeof i != "object") throw Error(l(62));
    if (((e = e.style), s != null)) {
      for (var o in s)
        !s.hasOwnProperty(o) ||
          (i != null && i.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? e.setProperty(o, "")
            : o === "float"
              ? (e.cssFloat = "")
              : (e[o] = ""));
      for (var f in i)
        (o = i[f]), i.hasOwnProperty(f) && s[f] !== o && sm(e, f, o);
    } else for (var p in i) i.hasOwnProperty(p) && sm(e, p, i[p]);
  }
  function Sc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var OE = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    LE =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function eo(e) {
    return LE.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Tc = null;
  function xc(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var el = null,
    tl = null;
  function om(e) {
    var i = dn(e);
    if (i && (e = i.stateNode)) {
      var s = e[Ot] || null;
      e: switch (((e = i.stateNode), i.type)) {
        case "input":
          if (
            (gc(
              e,
              s.value,
              s.defaultValue,
              s.defaultValue,
              s.checked,
              s.defaultChecked,
              s.type,
              s.name,
            ),
            (i = s.name),
            s.type === "radio" && i != null)
          ) {
            for (s = e; s.parentNode; ) s = s.parentNode;
            for (
              s = s.querySelectorAll(
                'input[name="' + pn("" + i) + '"][type="radio"]',
              ),
                i = 0;
              i < s.length;
              i++
            ) {
              var o = s[i];
              if (o !== e && o.form === e.form) {
                var f = o[Ot] || null;
                if (!f) throw Error(l(90));
                gc(
                  o,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (i = 0; i < s.length; i++)
              (o = s[i]), o.form === e.form && nm(o);
          }
          break e;
        case "textarea":
          am(e, s.value, s.defaultValue);
          break e;
        case "select":
          (i = s.value), i != null && Qa(e, !!s.multiple, i, !1);
      }
    }
  }
  var Ec = !1;
  function um(e, i, s) {
    if (Ec) return e(i, s);
    Ec = !0;
    try {
      var o = e(i);
      return o;
    } finally {
      if (
        ((Ec = !1),
        (el !== null || tl !== null) &&
          (Ho(), el && ((i = el), (e = tl), (tl = el = null), om(i), e)))
      )
        for (i = 0; i < e.length; i++) om(e[i]);
    }
  }
  function hs(e, i) {
    var s = e.stateNode;
    if (s === null) return null;
    var o = s[Ot] || null;
    if (o === null) return null;
    s = o[i];
    e: switch (i) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (s && typeof s != "function") throw Error(l(231, i, typeof s));
    return s;
  }
  var li = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $c = !1;
  if (li)
    try {
      var ps = {};
      Object.defineProperty(ps, "passive", {
        get: function () {
          $c = !0;
        },
      }),
        window.addEventListener("test", ps, ps),
        window.removeEventListener("test", ps, ps);
    } catch {
      $c = !1;
    }
  var Ri = null,
    wc = null,
    to = null;
  function cm() {
    if (to) return to;
    var e,
      i = wc,
      s = i.length,
      o,
      f = "value" in Ri ? Ri.value : Ri.textContent,
      p = f.length;
    for (e = 0; e < s && i[e] === f[e]; e++);
    var y = s - e;
    for (o = 1; o <= y && i[s - o] === f[p - o]; o++);
    return (to = f.slice(e, 1 < o ? 1 - o : void 0));
  }
  function no(e) {
    var i = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && i === 13 && (e = 13))
        : (e = i),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function io() {
    return !0;
  }
  function fm() {
    return !1;
  }
  function It(e) {
    function i(s, o, f, p, y) {
      (this._reactName = s),
        (this._targetInst = f),
        (this.type = o),
        (this.nativeEvent = p),
        (this.target = y),
        (this.currentTarget = null);
      for (var E in e)
        e.hasOwnProperty(E) && ((s = e[E]), (this[E] = s ? s(p) : p[E]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? io
          : fm),
        (this.isPropagationStopped = fm),
        this
      );
    }
    return (
      v(i.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var s = this.nativeEvent;
          s &&
            (s.preventDefault
              ? s.preventDefault()
              : typeof s.returnValue != "unknown" && (s.returnValue = !1),
            (this.isDefaultPrevented = io));
        },
        stopPropagation: function () {
          var s = this.nativeEvent;
          s &&
            (s.stopPropagation
              ? s.stopPropagation()
              : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
            (this.isPropagationStopped = io));
        },
        persist: function () {},
        isPersistent: io,
      }),
      i
    );
  }
  var da = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ao = It(da),
    ms = v({}, da, { view: 0, detail: 0 }),
    _E = It(ms),
    Cc,
    Mc,
    vs,
    lo = v({}, ms, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ac,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== vs &&
              (vs && e.type === "mousemove"
                ? ((Cc = e.screenX - vs.screenX), (Mc = e.screenY - vs.screenY))
                : (Mc = Cc = 0),
              (vs = e)),
            Cc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Mc;
      },
    }),
    dm = It(lo),
    zE = v({}, lo, { dataTransfer: 0 }),
    VE = It(zE),
    BE = v({}, ms, { relatedTarget: 0 }),
    Dc = It(BE),
    kE = v({}, da, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    HE = It(kE),
    UE = v({}, da, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    KE = It(UE),
    jE = v({}, da, { data: 0 }),
    hm = It(jE),
    FE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    IE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    GE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function YE(e) {
    var i = this.nativeEvent;
    return i.getModifierState
      ? i.getModifierState(e)
      : (e = GE[e])
        ? !!i[e]
        : !1;
  }
  function Ac() {
    return YE;
  }
  var qE = v({}, ms, {
      key: function (e) {
        if (e.key) {
          var i = FE[e.key] || e.key;
          if (i !== "Unidentified") return i;
        }
        return e.type === "keypress"
          ? ((e = no(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? IE[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ac,
      charCode: function (e) {
        return e.type === "keypress" ? no(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? no(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    XE = It(qE),
    ZE = v({}, lo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    pm = It(ZE),
    WE = v({}, ms, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ac,
    }),
    QE = It(WE),
    JE = v({}, da, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e$ = It(JE),
    t$ = v({}, lo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    n$ = It(t$),
    i$ = v({}, da, { newState: 0, oldState: 0 }),
    a$ = It(i$),
    l$ = [9, 13, 27, 32],
    Pc = li && "CompositionEvent" in window,
    bs = null;
  li && "documentMode" in document && (bs = document.documentMode);
  var s$ = li && "TextEvent" in window && !bs,
    mm = li && (!Pc || (bs && 8 < bs && 11 >= bs)),
    vm = " ",
    bm = !1;
  function gm(e, i) {
    switch (e) {
      case "keyup":
        return l$.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ym(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var nl = !1;
  function r$(e, i) {
    switch (e) {
      case "compositionend":
        return ym(i);
      case "keypress":
        return i.which !== 32 ? null : ((bm = !0), vm);
      case "textInput":
        return (e = i.data), e === vm && bm ? null : e;
      default:
        return null;
    }
  }
  function o$(e, i) {
    if (nl)
      return e === "compositionend" || (!Pc && gm(e, i))
        ? ((e = cm()), (to = wc = Ri = null), (nl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || (i.ctrlKey && i.altKey)) {
          if (i.char && 1 < i.char.length) return i.char;
          if (i.which) return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return mm && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var u$ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Sm(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return i === "input" ? !!u$[e.type] : i === "textarea";
  }
  function Tm(e, i, s, o) {
    el ? (tl ? tl.push(o) : (tl = [o])) : (el = o),
      (i = Go(i, "onChange")),
      0 < i.length &&
        ((s = new ao("onChange", "change", null, s, o)),
        e.push({ event: s, listeners: i }));
  }
  var gs = null,
    ys = null;
  function c$(e) {
    tb(e, 0);
  }
  function so(e) {
    var i = ds(e);
    if (nm(i)) return e;
  }
  function xm(e, i) {
    if (e === "change") return i;
  }
  var Em = !1;
  if (li) {
    var Rc;
    if (li) {
      var Nc = "oninput" in document;
      if (!Nc) {
        var $m = document.createElement("div");
        $m.setAttribute("oninput", "return;"),
          (Nc = typeof $m.oninput == "function");
      }
      Rc = Nc;
    } else Rc = !1;
    Em = Rc && (!document.documentMode || 9 < document.documentMode);
  }
  function wm() {
    gs && (gs.detachEvent("onpropertychange", Cm), (ys = gs = null));
  }
  function Cm(e) {
    if (e.propertyName === "value" && so(ys)) {
      var i = [];
      Tm(i, ys, e, xc(e)), um(c$, i);
    }
  }
  function f$(e, i, s) {
    e === "focusin"
      ? (wm(), (gs = i), (ys = s), gs.attachEvent("onpropertychange", Cm))
      : e === "focusout" && wm();
  }
  function d$(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return so(ys);
  }
  function h$(e, i) {
    if (e === "click") return so(i);
  }
  function p$(e, i) {
    if (e === "input" || e === "change") return so(i);
  }
  function m$(e, i) {
    return (e === i && (e !== 0 || 1 / e === 1 / i)) || (e !== e && i !== i);
  }
  var tn = typeof Object.is == "function" ? Object.is : m$;
  function Ss(e, i) {
    if (tn(e, i)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof i != "object" ||
      i === null
    )
      return !1;
    var s = Object.keys(e),
      o = Object.keys(i);
    if (s.length !== o.length) return !1;
    for (o = 0; o < s.length; o++) {
      var f = s[o];
      if (!xe.call(i, f) || !tn(e[f], i[f])) return !1;
    }
    return !0;
  }
  function Mm(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Dm(e, i) {
    var s = Mm(e);
    e = 0;
    for (var o; s; ) {
      if (s.nodeType === 3) {
        if (((o = e + s.textContent.length), e <= i && o >= i))
          return { node: s, offset: i - e };
        e = o;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Mm(s);
    }
  }
  function Am(e, i) {
    return e && i
      ? e === i
        ? !0
        : e && e.nodeType === 3
          ? !1
          : i && i.nodeType === 3
            ? Am(e, i.parentNode)
            : "contains" in e
              ? e.contains(i)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(i) & 16)
                : !1
      : !1;
  }
  function Pm(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var i = Jr(e.document); i instanceof e.HTMLIFrameElement; ) {
      try {
        var s = typeof i.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) e = i.contentWindow;
      else break;
      i = Jr(e.document);
    }
    return i;
  }
  function Oc(e) {
    var i = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      i &&
      ((i === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        i === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var v$ = li && "documentMode" in document && 11 >= document.documentMode,
    il = null,
    Lc = null,
    Ts = null,
    _c = !1;
  function Rm(e, i, s) {
    var o =
      s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    _c ||
      il == null ||
      il !== Jr(o) ||
      ((o = il),
      "selectionStart" in o && Oc(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Ts && Ss(Ts, o)) ||
        ((Ts = o),
        (o = Go(Lc, "onSelect")),
        0 < o.length &&
          ((i = new ao("onSelect", "select", null, i, s)),
          e.push({ event: i, listeners: o }),
          (i.target = il))));
  }
  function ha(e, i) {
    var s = {};
    return (
      (s[e.toLowerCase()] = i.toLowerCase()),
      (s["Webkit" + e] = "webkit" + i),
      (s["Moz" + e] = "moz" + i),
      s
    );
  }
  var al = {
      animationend: ha("Animation", "AnimationEnd"),
      animationiteration: ha("Animation", "AnimationIteration"),
      animationstart: ha("Animation", "AnimationStart"),
      transitionrun: ha("Transition", "TransitionRun"),
      transitionstart: ha("Transition", "TransitionStart"),
      transitioncancel: ha("Transition", "TransitionCancel"),
      transitionend: ha("Transition", "TransitionEnd"),
    },
    zc = {},
    Nm = {};
  li &&
    ((Nm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete al.animationend.animation,
      delete al.animationiteration.animation,
      delete al.animationstart.animation),
    "TransitionEvent" in window || delete al.transitionend.transition);
  function pa(e) {
    if (zc[e]) return zc[e];
    if (!al[e]) return e;
    var i = al[e],
      s;
    for (s in i) if (i.hasOwnProperty(s) && s in Nm) return (zc[e] = i[s]);
    return e;
  }
  var Om = pa("animationend"),
    Lm = pa("animationiteration"),
    _m = pa("animationstart"),
    b$ = pa("transitionrun"),
    g$ = pa("transitionstart"),
    y$ = pa("transitioncancel"),
    zm = pa("transitionend"),
    Vm = new Map(),
    Vc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Vc.push("scrollEnd");
  function _n(e, i) {
    Vm.set(e, i), fa(i, [e]);
  }
  var Bm = new WeakMap();
  function mn(e, i) {
    if (typeof e == "object" && e !== null) {
      var s = Bm.get(e);
      return s !== void 0
        ? s
        : ((i = { value: e, source: i, stack: em(i) }), Bm.set(e, i), i);
    }
    return { value: e, source: i, stack: em(i) };
  }
  var vn = [],
    ll = 0,
    Bc = 0;
  function ro() {
    for (var e = ll, i = (Bc = ll = 0); i < e; ) {
      var s = vn[i];
      vn[i++] = null;
      var o = vn[i];
      vn[i++] = null;
      var f = vn[i];
      vn[i++] = null;
      var p = vn[i];
      if (((vn[i++] = null), o !== null && f !== null)) {
        var y = o.pending;
        y === null ? (f.next = f) : ((f.next = y.next), (y.next = f)),
          (o.pending = f);
      }
      p !== 0 && km(s, f, p);
    }
  }
  function oo(e, i, s, o) {
    (vn[ll++] = e),
      (vn[ll++] = i),
      (vn[ll++] = s),
      (vn[ll++] = o),
      (Bc |= o),
      (e.lanes |= o),
      (e = e.alternate),
      e !== null && (e.lanes |= o);
  }
  function kc(e, i, s, o) {
    return oo(e, i, s, o), uo(e);
  }
  function sl(e, i) {
    return oo(e, null, null, i), uo(e);
  }
  function km(e, i, s) {
    e.lanes |= s;
    var o = e.alternate;
    o !== null && (o.lanes |= s);
    for (var f = !1, p = e.return; p !== null; )
      (p.childLanes |= s),
        (o = p.alternate),
        o !== null && (o.childLanes |= s),
        p.tag === 22 &&
          ((e = p.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = p),
        (p = p.return);
    return e.tag === 3
      ? ((p = e.stateNode),
        f &&
          i !== null &&
          ((f = 31 - St(s)),
          (e = p.hiddenUpdates),
          (o = e[f]),
          o === null ? (e[f] = [i]) : o.push(i),
          (i.lane = s | 536870912)),
        p)
      : null;
  }
  function uo(e) {
    if (50 < Gs) throw ((Gs = 0), (Gf = null), Error(l(185)));
    for (var i = e.return; i !== null; ) (e = i), (i = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var rl = {};
  function S$(e, i, s, o) {
    (this.tag = e),
      (this.key = s),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = i),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function nn(e, i, s, o) {
    return new S$(e, i, s, o);
  }
  function Hc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function si(e, i) {
    var s = e.alternate;
    return (
      s === null
        ? ((s = nn(e.tag, i, e.key, e.mode)),
          (s.elementType = e.elementType),
          (s.type = e.type),
          (s.stateNode = e.stateNode),
          (s.alternate = e),
          (e.alternate = s))
        : ((s.pendingProps = i),
          (s.type = e.type),
          (s.flags = 0),
          (s.subtreeFlags = 0),
          (s.deletions = null)),
      (s.flags = e.flags & 65011712),
      (s.childLanes = e.childLanes),
      (s.lanes = e.lanes),
      (s.child = e.child),
      (s.memoizedProps = e.memoizedProps),
      (s.memoizedState = e.memoizedState),
      (s.updateQueue = e.updateQueue),
      (i = e.dependencies),
      (s.dependencies =
        i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }),
      (s.sibling = e.sibling),
      (s.index = e.index),
      (s.ref = e.ref),
      (s.refCleanup = e.refCleanup),
      s
    );
  }
  function Hm(e, i) {
    e.flags &= 65011714;
    var s = e.alternate;
    return (
      s === null
        ? ((e.childLanes = 0),
          (e.lanes = i),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = s.childLanes),
          (e.lanes = s.lanes),
          (e.child = s.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = s.memoizedProps),
          (e.memoizedState = s.memoizedState),
          (e.updateQueue = s.updateQueue),
          (e.type = s.type),
          (i = s.dependencies),
          (e.dependencies =
            i === null
              ? null
              : { lanes: i.lanes, firstContext: i.firstContext })),
      e
    );
  }
  function co(e, i, s, o, f, p) {
    var y = 0;
    if (((o = e), typeof e == "function")) Hc(e) && (y = 1);
    else if (typeof e == "string")
      y = x2(e, s, se.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case G:
          return (e = nn(31, s, i, f)), (e.elementType = G), (e.lanes = p), e;
        case x:
          return ma(s.children, f, p, i);
        case C:
          (y = 8), (f |= 24);
          break;
        case A:
          return (
            (e = nn(12, s, i, f | 2)), (e.elementType = A), (e.lanes = p), e
          );
        case R:
          return (e = nn(13, s, i, f)), (e.elementType = R), (e.lanes = p), e;
        case B:
          return (e = nn(19, s, i, f)), (e.elementType = B), (e.lanes = p), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
              case P:
                y = 10;
                break e;
              case V:
                y = 9;
                break e;
              case z:
                y = 11;
                break e;
              case X:
                y = 14;
                break e;
              case w:
                (y = 16), (o = null);
                break e;
            }
          (y = 29),
            (s = Error(l(130, e === null ? "null" : typeof e, ""))),
            (o = null);
      }
    return (
      (i = nn(y, s, i, f)), (i.elementType = e), (i.type = o), (i.lanes = p), i
    );
  }
  function ma(e, i, s, o) {
    return (e = nn(7, e, o, i)), (e.lanes = s), e;
  }
  function Uc(e, i, s) {
    return (e = nn(6, e, null, i)), (e.lanes = s), e;
  }
  function Kc(e, i, s) {
    return (
      (i = nn(4, e.children !== null ? e.children : [], e.key, i)),
      (i.lanes = s),
      (i.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      i
    );
  }
  var ol = [],
    ul = 0,
    fo = null,
    ho = 0,
    bn = [],
    gn = 0,
    va = null,
    ri = 1,
    oi = "";
  function ba(e, i) {
    (ol[ul++] = ho), (ol[ul++] = fo), (fo = e), (ho = i);
  }
  function Um(e, i, s) {
    (bn[gn++] = ri), (bn[gn++] = oi), (bn[gn++] = va), (va = e);
    var o = ri;
    e = oi;
    var f = 32 - St(o) - 1;
    (o &= ~(1 << f)), (s += 1);
    var p = 32 - St(i) + f;
    if (30 < p) {
      var y = f - (f % 5);
      (p = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (f -= y),
        (ri = (1 << (32 - St(i) + f)) | (s << f) | o),
        (oi = p + e);
    } else (ri = (1 << p) | (s << f) | o), (oi = e);
  }
  function jc(e) {
    e.return !== null && (ba(e, 1), Um(e, 1, 0));
  }
  function Fc(e) {
    for (; e === fo; )
      (fo = ol[--ul]), (ol[ul] = null), (ho = ol[--ul]), (ol[ul] = null);
    for (; e === va; )
      (va = bn[--gn]),
        (bn[gn] = null),
        (oi = bn[--gn]),
        (bn[gn] = null),
        (ri = bn[--gn]),
        (bn[gn] = null);
  }
  var kt = null,
    nt = null,
    Le = !1,
    ga = null,
    In = !1,
    Ic = Error(l(519));
  function ya(e) {
    var i = Error(l(418, ""));
    throw ($s(mn(i, e)), Ic);
  }
  function Km(e) {
    var i = e.stateNode,
      s = e.type,
      o = e.memoizedProps;
    switch (((i[vt] = e), (i[Ot] = o), s)) {
      case "dialog":
        Me("cancel", i), Me("close", i);
        break;
      case "iframe":
      case "object":
      case "embed":
        Me("load", i);
        break;
      case "video":
      case "audio":
        for (s = 0; s < qs.length; s++) Me(qs[s], i);
        break;
      case "source":
        Me("error", i);
        break;
      case "img":
      case "image":
      case "link":
        Me("error", i), Me("load", i);
        break;
      case "details":
        Me("toggle", i);
        break;
      case "input":
        Me("invalid", i),
          im(
            i,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ),
          Qr(i);
        break;
      case "select":
        Me("invalid", i);
        break;
      case "textarea":
        Me("invalid", i), lm(i, o.value, o.defaultValue, o.children), Qr(i);
    }
    (s = o.children),
      (typeof s != "string" && typeof s != "number" && typeof s != "bigint") ||
      i.textContent === "" + s ||
      o.suppressHydrationWarning === !0 ||
      lb(i.textContent, s)
        ? (o.popover != null && (Me("beforetoggle", i), Me("toggle", i)),
          o.onScroll != null && Me("scroll", i),
          o.onScrollEnd != null && Me("scrollend", i),
          o.onClick != null && (i.onclick = Yo),
          (i = !0))
        : (i = !1),
      i || ya(e);
  }
  function jm(e) {
    for (kt = e.return; kt; )
      switch (kt.tag) {
        case 5:
        case 13:
          In = !1;
          return;
        case 27:
        case 3:
          In = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function xs(e) {
    if (e !== kt) return !1;
    if (!Le) return jm(e), (Le = !0), !1;
    var i = e.tag,
      s;
    if (
      ((s = i !== 3 && i !== 27) &&
        ((s = i === 5) &&
          ((s = e.type),
          (s =
            !(s !== "form" && s !== "button") || od(e.type, e.memoizedProps))),
        (s = !s)),
      s && nt && ya(e),
      jm(e),
      i === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, i = 0; e; ) {
          if (e.nodeType === 8)
            if (((s = e.data), s === "/$")) {
              if (i === 0) {
                nt = Vn(e.nextSibling);
                break e;
              }
              i--;
            } else (s !== "$" && s !== "$!" && s !== "$?") || i++;
          e = e.nextSibling;
        }
        nt = null;
      }
    } else
      i === 27
        ? ((i = nt), Yi(e.type) ? ((e = dd), (dd = null), (nt = e)) : (nt = i))
        : (nt = kt ? Vn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Es() {
    (nt = kt = null), (Le = !1);
  }
  function Fm() {
    var e = ga;
    return (
      e !== null &&
        (qt === null ? (qt = e) : qt.push.apply(qt, e), (ga = null)),
      e
    );
  }
  function $s(e) {
    ga === null ? (ga = [e]) : ga.push(e);
  }
  var Gc = oe(null),
    Sa = null,
    ui = null;
  function Ni(e, i, s) {
    le(Gc, i._currentValue), (i._currentValue = s);
  }
  function ci(e) {
    (e._currentValue = Gc.current), re(Gc);
  }
  function Yc(e, i, s) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & i) !== i
          ? ((e.childLanes |= i), o !== null && (o.childLanes |= i))
          : o !== null && (o.childLanes & i) !== i && (o.childLanes |= i),
        e === s)
      )
        break;
      e = e.return;
    }
  }
  function qc(e, i, s, o) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var p = f.dependencies;
      if (p !== null) {
        var y = f.child;
        p = p.firstContext;
        e: for (; p !== null; ) {
          var E = p;
          p = f;
          for (var L = 0; L < i.length; L++)
            if (E.context === i[L]) {
              (p.lanes |= s),
                (E = p.alternate),
                E !== null && (E.lanes |= s),
                Yc(p.return, s, e),
                o || (y = null);
              break e;
            }
          p = E.next;
        }
      } else if (f.tag === 18) {
        if (((y = f.return), y === null)) throw Error(l(341));
        (y.lanes |= s),
          (p = y.alternate),
          p !== null && (p.lanes |= s),
          Yc(y, s, e),
          (y = null);
      } else y = f.child;
      if (y !== null) y.return = f;
      else
        for (y = f; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (((f = y.sibling), f !== null)) {
            (f.return = y.return), (y = f);
            break;
          }
          y = y.return;
        }
      f = y;
    }
  }
  function ws(e, i, s, o) {
    e = null;
    for (var f = i, p = !1; f !== null; ) {
      if (!p) {
        if ((f.flags & 524288) !== 0) p = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(l(387));
        if (((y = y.memoizedProps), y !== null)) {
          var E = f.type;
          tn(f.pendingProps.value, y.value) ||
            (e !== null ? e.push(E) : (e = [E]));
        }
      } else if (f === Pe.current) {
        if (((y = f.alternate), y === null)) throw Error(l(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(er) : (e = [er]));
      }
      f = f.return;
    }
    e !== null && qc(i, e, s, o), (i.flags |= 262144);
  }
  function po(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!tn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ta(e) {
    (Sa = e),
      (ui = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Lt(e) {
    return Im(Sa, e);
  }
  function mo(e, i) {
    return Sa === null && Ta(e), Im(e, i);
  }
  function Im(e, i) {
    var s = i._currentValue;
    if (((i = { context: i, memoizedValue: s, next: null }), ui === null)) {
      if (e === null) throw Error(l(308));
      (ui = i),
        (e.dependencies = { lanes: 0, firstContext: i }),
        (e.flags |= 524288);
    } else ui = ui.next = i;
    return s;
  }
  var T$ =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              i = (this.signal = {
                aborted: !1,
                addEventListener: function (s, o) {
                  e.push(o);
                },
              });
            this.abort = function () {
              (i.aborted = !0),
                e.forEach(function (s) {
                  return s();
                });
            };
          },
    x$ = t.unstable_scheduleCallback,
    E$ = t.unstable_NormalPriority,
    bt = {
      $$typeof: P,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Xc() {
    return { controller: new T$(), data: new Map(), refCount: 0 };
  }
  function Cs(e) {
    e.refCount--,
      e.refCount === 0 &&
        x$(E$, function () {
          e.controller.abort();
        });
  }
  var Ms = null,
    Zc = 0,
    cl = 0,
    fl = null;
  function $$(e, i) {
    if (Ms === null) {
      var s = (Ms = []);
      (Zc = 0),
        (cl = Jf()),
        (fl = {
          status: "pending",
          value: void 0,
          then: function (o) {
            s.push(o);
          },
        });
    }
    return Zc++, i.then(Gm, Gm), i;
  }
  function Gm() {
    if (--Zc === 0 && Ms !== null) {
      fl !== null && (fl.status = "fulfilled");
      var e = Ms;
      (Ms = null), (cl = 0), (fl = null);
      for (var i = 0; i < e.length; i++) (0, e[i])();
    }
  }
  function w$(e, i) {
    var s = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          s.push(f);
        },
      };
    return (
      e.then(
        function () {
          (o.status = "fulfilled"), (o.value = i);
          for (var f = 0; f < s.length; f++) (0, s[f])(i);
        },
        function (f) {
          for (o.status = "rejected", o.reason = f, f = 0; f < s.length; f++)
            (0, s[f])(void 0);
        },
      ),
      o
    );
  }
  var Ym = $.S;
  $.S = function (e, i) {
    typeof i == "object" &&
      i !== null &&
      typeof i.then == "function" &&
      $$(e, i),
      Ym !== null && Ym(e, i);
  };
  var xa = oe(null);
  function Wc() {
    var e = xa.current;
    return e !== null ? e : je.pooledCache;
  }
  function vo(e, i) {
    i === null ? le(xa, xa.current) : le(xa, i.pool);
  }
  function qm() {
    var e = Wc();
    return e === null ? null : { parent: bt._currentValue, pool: e };
  }
  var Ds = Error(l(460)),
    Xm = Error(l(474)),
    bo = Error(l(542)),
    Qc = { then: function () {} };
  function Zm(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function go() {}
  function Wm(e, i, s) {
    switch (
      ((s = e[s]),
      s === void 0 ? e.push(i) : s !== i && (i.then(go, go), (i = s)),
      i.status)
    ) {
      case "fulfilled":
        return i.value;
      case "rejected":
        throw ((e = i.reason), Jm(e), e);
      default:
        if (typeof i.status == "string") i.then(go, go);
        else {
          if (((e = je), e !== null && 100 < e.shellSuspendCounter))
            throw Error(l(482));
          (e = i),
            (e.status = "pending"),
            e.then(
              function (o) {
                if (i.status === "pending") {
                  var f = i;
                  (f.status = "fulfilled"), (f.value = o);
                }
              },
              function (o) {
                if (i.status === "pending") {
                  var f = i;
                  (f.status = "rejected"), (f.reason = o);
                }
              },
            );
        }
        switch (i.status) {
          case "fulfilled":
            return i.value;
          case "rejected":
            throw ((e = i.reason), Jm(e), e);
        }
        throw ((As = i), Ds);
    }
  }
  var As = null;
  function Qm() {
    if (As === null) throw Error(l(459));
    var e = As;
    return (As = null), e;
  }
  function Jm(e) {
    if (e === Ds || e === bo) throw Error(l(483));
  }
  var Oi = !1;
  function Jc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ef(e, i) {
    (e = e.updateQueue),
      i.updateQueue === e &&
        (i.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function Li(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _i(e, i, s) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (ze & 2) !== 0)) {
      var f = o.pending;
      return (
        f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
        (o.pending = i),
        (i = uo(e)),
        km(e, null, s),
        i
      );
    }
    return oo(e, o, i, s), uo(e);
  }
  function Ps(e, i, s) {
    if (
      ((i = i.updateQueue), i !== null && ((i = i.shared), (s & 4194048) !== 0))
    ) {
      var o = i.lanes;
      (o &= e.pendingLanes), (s |= o), (i.lanes = s), fn(e, s);
    }
  }
  function tf(e, i) {
    var s = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), s === o)) {
      var f = null,
        p = null;
      if (((s = s.firstBaseUpdate), s !== null)) {
        do {
          var y = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null,
          };
          p === null ? (f = p = y) : (p = p.next = y), (s = s.next);
        } while (s !== null);
        p === null ? (f = p = i) : (p = p.next = i);
      } else f = p = i;
      (s = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: p,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (e.updateQueue = s);
      return;
    }
    (e = s.lastBaseUpdate),
      e === null ? (s.firstBaseUpdate = i) : (e.next = i),
      (s.lastBaseUpdate = i);
  }
  var nf = !1;
  function Rs() {
    if (nf) {
      var e = fl;
      if (e !== null) throw e;
    }
  }
  function Ns(e, i, s, o) {
    nf = !1;
    var f = e.updateQueue;
    Oi = !1;
    var p = f.firstBaseUpdate,
      y = f.lastBaseUpdate,
      E = f.shared.pending;
    if (E !== null) {
      f.shared.pending = null;
      var L = E,
        I = L.next;
      (L.next = null), y === null ? (p = I) : (y.next = I), (y = L);
      var Q = e.alternate;
      Q !== null &&
        ((Q = Q.updateQueue),
        (E = Q.lastBaseUpdate),
        E !== y &&
          (E === null ? (Q.firstBaseUpdate = I) : (E.next = I),
          (Q.lastBaseUpdate = L)));
    }
    if (p !== null) {
      var ee = f.baseState;
      (y = 0), (Q = I = L = null), (E = p);
      do {
        var Y = E.lane & -536870913,
          q = Y !== E.lane;
        if (q ? (Ae & Y) === Y : (o & Y) === Y) {
          Y !== 0 && Y === cl && (nf = !0),
            Q !== null &&
              (Q = Q.next =
                {
                  lane: 0,
                  tag: E.tag,
                  payload: E.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var ye = e,
              ve = E;
            Y = i;
            var He = s;
            switch (ve.tag) {
              case 1:
                if (((ye = ve.payload), typeof ye == "function")) {
                  ee = ye.call(He, ee, Y);
                  break e;
                }
                ee = ye;
                break e;
              case 3:
                ye.flags = (ye.flags & -65537) | 128;
              case 0:
                if (
                  ((ye = ve.payload),
                  (Y = typeof ye == "function" ? ye.call(He, ee, Y) : ye),
                  Y == null)
                )
                  break e;
                ee = v({}, ee, Y);
                break e;
              case 2:
                Oi = !0;
            }
          }
          (Y = E.callback),
            Y !== null &&
              ((e.flags |= 64),
              q && (e.flags |= 8192),
              (q = f.callbacks),
              q === null ? (f.callbacks = [Y]) : q.push(Y));
        } else
          (q = {
            lane: Y,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null,
          }),
            Q === null ? ((I = Q = q), (L = ee)) : (Q = Q.next = q),
            (y |= Y);
        if (((E = E.next), E === null)) {
          if (((E = f.shared.pending), E === null)) break;
          (q = E),
            (E = q.next),
            (q.next = null),
            (f.lastBaseUpdate = q),
            (f.shared.pending = null);
        }
      } while (!0);
      Q === null && (L = ee),
        (f.baseState = L),
        (f.firstBaseUpdate = I),
        (f.lastBaseUpdate = Q),
        p === null && (f.shared.lanes = 0),
        (ji |= y),
        (e.lanes = y),
        (e.memoizedState = ee);
    }
  }
  function ev(e, i) {
    if (typeof e != "function") throw Error(l(191, e));
    e.call(i);
  }
  function tv(e, i) {
    var s = e.callbacks;
    if (s !== null)
      for (e.callbacks = null, e = 0; e < s.length; e++) ev(s[e], i);
  }
  var dl = oe(null),
    yo = oe(0);
  function nv(e, i) {
    (e = bi), le(yo, e), le(dl, i), (bi = e | i.baseLanes);
  }
  function af() {
    le(yo, bi), le(dl, dl.current);
  }
  function lf() {
    (bi = yo.current), re(dl), re(yo);
  }
  var zi = 0,
    Ee = null,
    Be = null,
    ft = null,
    So = !1,
    hl = !1,
    Ea = !1,
    To = 0,
    Os = 0,
    pl = null,
    C$ = 0;
  function st() {
    throw Error(l(321));
  }
  function sf(e, i) {
    if (i === null) return !1;
    for (var s = 0; s < i.length && s < e.length; s++)
      if (!tn(e[s], i[s])) return !1;
    return !0;
  }
  function rf(e, i, s, o, f, p) {
    return (
      (zi = p),
      (Ee = i),
      (i.memoizedState = null),
      (i.updateQueue = null),
      (i.lanes = 0),
      ($.H = e === null || e.memoizedState === null ? kv : Hv),
      (Ea = !1),
      (p = s(o, f)),
      (Ea = !1),
      hl && (p = av(i, s, o, f)),
      iv(e),
      p
    );
  }
  function iv(e) {
    $.H = Mo;
    var i = Be !== null && Be.next !== null;
    if (((zi = 0), (ft = Be = Ee = null), (So = !1), (Os = 0), (pl = null), i))
      throw Error(l(300));
    e === null ||
      xt ||
      ((e = e.dependencies), e !== null && po(e) && (xt = !0));
  }
  function av(e, i, s, o) {
    Ee = e;
    var f = 0;
    do {
      if ((hl && (pl = null), (Os = 0), (hl = !1), 25 <= f))
        throw Error(l(301));
      if (((f += 1), (ft = Be = null), e.updateQueue != null)) {
        var p = e.updateQueue;
        (p.lastEffect = null),
          (p.events = null),
          (p.stores = null),
          p.memoCache != null && (p.memoCache.index = 0);
      }
      ($.H = O$), (p = i(s, o));
    } while (hl);
    return p;
  }
  function M$() {
    var e = $.H,
      i = e.useState()[0];
    return (
      (i = typeof i.then == "function" ? Ls(i) : i),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (Ee.flags |= 1024),
      i
    );
  }
  function of() {
    var e = To !== 0;
    return (To = 0), e;
  }
  function uf(e, i, s) {
    (i.updateQueue = e.updateQueue), (i.flags &= -2053), (e.lanes &= ~s);
  }
  function cf(e) {
    if (So) {
      for (e = e.memoizedState; e !== null; ) {
        var i = e.queue;
        i !== null && (i.pending = null), (e = e.next);
      }
      So = !1;
    }
    (zi = 0), (ft = Be = Ee = null), (hl = !1), (Os = To = 0), (pl = null);
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ft === null ? (Ee.memoizedState = ft = e) : (ft = ft.next = e), ft;
  }
  function dt() {
    if (Be === null) {
      var e = Ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var i = ft === null ? Ee.memoizedState : ft.next;
    if (i !== null) (ft = i), (Be = e);
    else {
      if (e === null)
        throw Ee.alternate === null ? Error(l(467)) : Error(l(310));
      (Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        ft === null ? (Ee.memoizedState = ft = e) : (ft = ft.next = e);
    }
    return ft;
  }
  function ff() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ls(e) {
    var i = Os;
    return (
      (Os += 1),
      pl === null && (pl = []),
      (e = Wm(pl, e, i)),
      (i = Ee),
      (ft === null ? i.memoizedState : ft.next) === null &&
        ((i = i.alternate),
        ($.H = i === null || i.memoizedState === null ? kv : Hv)),
      e
    );
  }
  function xo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ls(e);
      if (e.$$typeof === P) return Lt(e);
    }
    throw Error(l(438, String(e)));
  }
  function df(e) {
    var i = null,
      s = Ee.updateQueue;
    if ((s !== null && (i = s.memoCache), i == null)) {
      var o = Ee.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (i = {
              data: o.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (i == null && (i = { data: [], index: 0 }),
      s === null && ((s = ff()), (Ee.updateQueue = s)),
      (s.memoCache = i),
      (s = i.data[i.index]),
      s === void 0)
    )
      for (s = i.data[i.index] = Array(e), o = 0; o < e; o++) s[o] = W;
    return i.index++, s;
  }
  function fi(e, i) {
    return typeof i == "function" ? i(e) : i;
  }
  function Eo(e) {
    var i = dt();
    return hf(i, Be, e);
  }
  function hf(e, i, s) {
    var o = e.queue;
    if (o === null) throw Error(l(311));
    o.lastRenderedReducer = s;
    var f = e.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (f !== null) {
        var y = f.next;
        (f.next = p.next), (p.next = y);
      }
      (i.baseQueue = f = p), (o.pending = null);
    }
    if (((p = e.baseState), f === null)) e.memoizedState = p;
    else {
      i = f.next;
      var E = (y = null),
        L = null,
        I = i,
        Q = !1;
      do {
        var ee = I.lane & -536870913;
        if (ee !== I.lane ? (Ae & ee) === ee : (zi & ee) === ee) {
          var Y = I.revertLane;
          if (Y === 0)
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: I.action,
                  hasEagerState: I.hasEagerState,
                  eagerState: I.eagerState,
                  next: null,
                }),
              ee === cl && (Q = !0);
          else if ((zi & Y) === Y) {
            (I = I.next), Y === cl && (Q = !0);
            continue;
          } else
            (ee = {
              lane: 0,
              revertLane: I.revertLane,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null,
            }),
              L === null ? ((E = L = ee), (y = p)) : (L = L.next = ee),
              (Ee.lanes |= Y),
              (ji |= Y);
          (ee = I.action),
            Ea && s(p, ee),
            (p = I.hasEagerState ? I.eagerState : s(p, ee));
        } else
          (Y = {
            lane: ee,
            revertLane: I.revertLane,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null,
          }),
            L === null ? ((E = L = Y), (y = p)) : (L = L.next = Y),
            (Ee.lanes |= ee),
            (ji |= ee);
        I = I.next;
      } while (I !== null && I !== i);
      if (
        (L === null ? (y = p) : (L.next = E),
        !tn(p, e.memoizedState) && ((xt = !0), Q && ((s = fl), s !== null)))
      )
        throw s;
      (e.memoizedState = p),
        (e.baseState = y),
        (e.baseQueue = L),
        (o.lastRenderedState = p);
    }
    return f === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function pf(e) {
    var i = dt(),
      s = i.queue;
    if (s === null) throw Error(l(311));
    s.lastRenderedReducer = e;
    var o = s.dispatch,
      f = s.pending,
      p = i.memoizedState;
    if (f !== null) {
      s.pending = null;
      var y = (f = f.next);
      do (p = e(p, y.action)), (y = y.next);
      while (y !== f);
      tn(p, i.memoizedState) || (xt = !0),
        (i.memoizedState = p),
        i.baseQueue === null && (i.baseState = p),
        (s.lastRenderedState = p);
    }
    return [p, o];
  }
  function lv(e, i, s) {
    var o = Ee,
      f = dt(),
      p = Le;
    if (p) {
      if (s === void 0) throw Error(l(407));
      s = s();
    } else s = i();
    var y = !tn((Be || f).memoizedState, s);
    y && ((f.memoizedState = s), (xt = !0)), (f = f.queue);
    var E = ov.bind(null, o, f, e);
    if (
      (_s(2048, 8, E, [e]),
      f.getSnapshot !== i || y || (ft !== null && ft.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        ml(9, $o(), rv.bind(null, o, f, s, i), null),
        je === null)
      )
        throw Error(l(349));
      p || (zi & 124) !== 0 || sv(o, i, s);
    }
    return s;
  }
  function sv(e, i, s) {
    (e.flags |= 16384),
      (e = { getSnapshot: i, value: s }),
      (i = Ee.updateQueue),
      i === null
        ? ((i = ff()), (Ee.updateQueue = i), (i.stores = [e]))
        : ((s = i.stores), s === null ? (i.stores = [e]) : s.push(e));
  }
  function rv(e, i, s, o) {
    (i.value = s), (i.getSnapshot = o), uv(i) && cv(e);
  }
  function ov(e, i, s) {
    return s(function () {
      uv(i) && cv(e);
    });
  }
  function uv(e) {
    var i = e.getSnapshot;
    e = e.value;
    try {
      var s = i();
      return !tn(e, s);
    } catch {
      return !0;
    }
  }
  function cv(e) {
    var i = sl(e, 2);
    i !== null && on(i, e, 2);
  }
  function mf(e) {
    var i = Gt();
    if (typeof e == "function") {
      var s = e;
      if (((e = s()), Ea)) {
        Jt(!0);
        try {
          s();
        } finally {
          Jt(!1);
        }
      }
    }
    return (
      (i.memoizedState = i.baseState = e),
      (i.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: e,
      }),
      i
    );
  }
  function fv(e, i, s, o) {
    return (e.baseState = s), hf(e, Be, typeof o == "function" ? o : fi);
  }
  function D$(e, i, s, o, f) {
    if (Co(e)) throw Error(l(485));
    if (((e = i.action), e !== null)) {
      var p = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          p.listeners.push(y);
        },
      };
      $.T !== null ? s(!0) : (p.isTransition = !1),
        o(p),
        (s = i.pending),
        s === null
          ? ((p.next = i.pending = p), dv(i, p))
          : ((p.next = s.next), (i.pending = s.next = p));
    }
  }
  function dv(e, i) {
    var s = i.action,
      o = i.payload,
      f = e.state;
    if (i.isTransition) {
      var p = $.T,
        y = {};
      $.T = y;
      try {
        var E = s(f, o),
          L = $.S;
        L !== null && L(y, E), hv(e, i, E);
      } catch (I) {
        vf(e, i, I);
      } finally {
        $.T = p;
      }
    } else
      try {
        (p = s(f, o)), hv(e, i, p);
      } catch (I) {
        vf(e, i, I);
      }
  }
  function hv(e, i, s) {
    s !== null && typeof s == "object" && typeof s.then == "function"
      ? s.then(
          function (o) {
            pv(e, i, o);
          },
          function (o) {
            return vf(e, i, o);
          },
        )
      : pv(e, i, s);
  }
  function pv(e, i, s) {
    (i.status = "fulfilled"),
      (i.value = s),
      mv(i),
      (e.state = s),
      (i = e.pending),
      i !== null &&
        ((s = i.next),
        s === i ? (e.pending = null) : ((s = s.next), (i.next = s), dv(e, s)));
  }
  function vf(e, i, s) {
    var o = e.pending;
    if (((e.pending = null), o !== null)) {
      o = o.next;
      do (i.status = "rejected"), (i.reason = s), mv(i), (i = i.next);
      while (i !== o);
    }
    e.action = null;
  }
  function mv(e) {
    e = e.listeners;
    for (var i = 0; i < e.length; i++) (0, e[i])();
  }
  function vv(e, i) {
    return i;
  }
  function bv(e, i) {
    if (Le) {
      var s = je.formState;
      if (s !== null) {
        e: {
          var o = Ee;
          if (Le) {
            if (nt) {
              t: {
                for (var f = nt, p = In; f.nodeType !== 8; ) {
                  if (!p) {
                    f = null;
                    break t;
                  }
                  if (((f = Vn(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                (p = f.data), (f = p === "F!" || p === "F" ? f : null);
              }
              if (f) {
                (nt = Vn(f.nextSibling)), (o = f.data === "F!");
                break e;
              }
            }
            ya(o);
          }
          o = !1;
        }
        o && (i = s[0]);
      }
    }
    return (
      (s = Gt()),
      (s.memoizedState = s.baseState = i),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vv,
        lastRenderedState: i,
      }),
      (s.queue = o),
      (s = zv.bind(null, Ee, o)),
      (o.dispatch = s),
      (o = mf(!1)),
      (p = Tf.bind(null, Ee, !1, o.queue)),
      (o = Gt()),
      (f = { state: i, dispatch: null, action: e, pending: null }),
      (o.queue = f),
      (s = D$.bind(null, Ee, f, p, s)),
      (f.dispatch = s),
      (o.memoizedState = e),
      [i, s, !1]
    );
  }
  function gv(e) {
    var i = dt();
    return yv(i, Be, e);
  }
  function yv(e, i, s) {
    if (
      ((i = hf(e, i, vv)[0]),
      (e = Eo(fi)[0]),
      typeof i == "object" && i !== null && typeof i.then == "function")
    )
      try {
        var o = Ls(i);
      } catch (y) {
        throw y === Ds ? bo : y;
      }
    else o = i;
    i = dt();
    var f = i.queue,
      p = f.dispatch;
    return (
      s !== i.memoizedState &&
        ((Ee.flags |= 2048), ml(9, $o(), A$.bind(null, f, s), null)),
      [o, p, e]
    );
  }
  function A$(e, i) {
    e.action = i;
  }
  function Sv(e) {
    var i = dt(),
      s = Be;
    if (s !== null) return yv(i, s, e);
    dt(), (i = i.memoizedState), (s = dt());
    var o = s.queue.dispatch;
    return (s.memoizedState = e), [i, o, !1];
  }
  function ml(e, i, s, o) {
    return (
      (e = { tag: e, create: s, deps: o, inst: i, next: null }),
      (i = Ee.updateQueue),
      i === null && ((i = ff()), (Ee.updateQueue = i)),
      (s = i.lastEffect),
      s === null
        ? (i.lastEffect = e.next = e)
        : ((o = s.next), (s.next = e), (e.next = o), (i.lastEffect = e)),
      e
    );
  }
  function $o() {
    return { destroy: void 0, resource: void 0 };
  }
  function Tv() {
    return dt().memoizedState;
  }
  function wo(e, i, s, o) {
    var f = Gt();
    (o = o === void 0 ? null : o),
      (Ee.flags |= e),
      (f.memoizedState = ml(1 | i, $o(), s, o));
  }
  function _s(e, i, s, o) {
    var f = dt();
    o = o === void 0 ? null : o;
    var p = f.memoizedState.inst;
    Be !== null && o !== null && sf(o, Be.memoizedState.deps)
      ? (f.memoizedState = ml(i, p, s, o))
      : ((Ee.flags |= e), (f.memoizedState = ml(1 | i, p, s, o)));
  }
  function xv(e, i) {
    wo(8390656, 8, e, i);
  }
  function Ev(e, i) {
    _s(2048, 8, e, i);
  }
  function $v(e, i) {
    return _s(4, 2, e, i);
  }
  function wv(e, i) {
    return _s(4, 4, e, i);
  }
  function Cv(e, i) {
    if (typeof i == "function") {
      e = e();
      var s = i(e);
      return function () {
        typeof s == "function" ? s() : i(null);
      };
    }
    if (i != null)
      return (
        (e = e()),
        (i.current = e),
        function () {
          i.current = null;
        }
      );
  }
  function Mv(e, i, s) {
    (s = s != null ? s.concat([e]) : null), _s(4, 4, Cv.bind(null, i, e), s);
  }
  function bf() {}
  function Dv(e, i) {
    var s = dt();
    i = i === void 0 ? null : i;
    var o = s.memoizedState;
    return i !== null && sf(i, o[1]) ? o[0] : ((s.memoizedState = [e, i]), e);
  }
  function Av(e, i) {
    var s = dt();
    i = i === void 0 ? null : i;
    var o = s.memoizedState;
    if (i !== null && sf(i, o[1])) return o[0];
    if (((o = e()), Ea)) {
      Jt(!0);
      try {
        e();
      } finally {
        Jt(!1);
      }
    }
    return (s.memoizedState = [o, i]), o;
  }
  function gf(e, i, s) {
    return s === void 0 || (zi & 1073741824) !== 0
      ? (e.memoizedState = i)
      : ((e.memoizedState = s), (e = N0()), (Ee.lanes |= e), (ji |= e), s);
  }
  function Pv(e, i, s, o) {
    return tn(s, i)
      ? s
      : dl.current !== null
        ? ((e = gf(e, s, o)), tn(e, i) || (xt = !0), e)
        : (zi & 42) === 0
          ? ((xt = !0), (e.memoizedState = s))
          : ((e = N0()), (Ee.lanes |= e), (ji |= e), i);
  }
  function Rv(e, i, s, o, f) {
    var p = N.p;
    N.p = p !== 0 && 8 > p ? p : 8;
    var y = $.T,
      E = {};
    ($.T = E), Tf(e, !1, i, s);
    try {
      var L = f(),
        I = $.S;
      if (
        (I !== null && I(E, L),
        L !== null && typeof L == "object" && typeof L.then == "function")
      ) {
        var Q = w$(L, o);
        zs(e, i, Q, rn(e));
      } else zs(e, i, o, rn(e));
    } catch (ee) {
      zs(e, i, { then: function () {}, status: "rejected", reason: ee }, rn());
    } finally {
      (N.p = p), ($.T = y);
    }
  }
  function P$() {}
  function yf(e, i, s, o) {
    if (e.tag !== 5) throw Error(l(476));
    var f = Nv(e).queue;
    Rv(
      e,
      f,
      i,
      O,
      s === null
        ? P$
        : function () {
            return Ov(e), s(o);
          },
    );
  }
  function Nv(e) {
    var i = e.memoizedState;
    if (i !== null) return i;
    i = {
      memoizedState: O,
      baseState: O,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: O,
      },
      next: null,
    };
    var s = {};
    return (
      (i.next = {
        memoizedState: s,
        baseState: s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fi,
          lastRenderedState: s,
        },
        next: null,
      }),
      (e.memoizedState = i),
      (e = e.alternate),
      e !== null && (e.memoizedState = i),
      i
    );
  }
  function Ov(e) {
    var i = Nv(e).next.queue;
    zs(e, i, {}, rn());
  }
  function Sf() {
    return Lt(er);
  }
  function Lv() {
    return dt().memoizedState;
  }
  function _v() {
    return dt().memoizedState;
  }
  function R$(e) {
    for (var i = e.return; i !== null; ) {
      switch (i.tag) {
        case 24:
        case 3:
          var s = rn();
          e = Li(s);
          var o = _i(i, e, s);
          o !== null && (on(o, i, s), Ps(o, i, s)),
            (i = { cache: Xc() }),
            (e.payload = i);
          return;
      }
      i = i.return;
    }
  }
  function N$(e, i, s) {
    var o = rn();
    (s = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Co(e)
        ? Vv(i, s)
        : ((s = kc(e, i, s, o)), s !== null && (on(s, e, o), Bv(s, i, o)));
  }
  function zv(e, i, s) {
    var o = rn();
    zs(e, i, s, o);
  }
  function zs(e, i, s, o) {
    var f = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Co(e)) Vv(i, f);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = i.lastRenderedReducer), p !== null)
      )
        try {
          var y = i.lastRenderedState,
            E = p(y, s);
          if (((f.hasEagerState = !0), (f.eagerState = E), tn(E, y)))
            return oo(e, i, f, 0), je === null && ro(), !1;
        } catch {
        } finally {
        }
      if (((s = kc(e, i, f, o)), s !== null))
        return on(s, e, o), Bv(s, i, o), !0;
    }
    return !1;
  }
  function Tf(e, i, s, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: Jf(),
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Co(e))
    ) {
      if (i) throw Error(l(479));
    } else (i = kc(e, s, o, 2)), i !== null && on(i, e, 2);
  }
  function Co(e) {
    var i = e.alternate;
    return e === Ee || (i !== null && i === Ee);
  }
  function Vv(e, i) {
    hl = So = !0;
    var s = e.pending;
    s === null ? (i.next = i) : ((i.next = s.next), (s.next = i)),
      (e.pending = i);
  }
  function Bv(e, i, s) {
    if ((s & 4194048) !== 0) {
      var o = i.lanes;
      (o &= e.pendingLanes), (s |= o), (i.lanes = s), fn(e, s);
    }
  }
  var Mo = {
      readContext: Lt,
      use: xo,
      useCallback: st,
      useContext: st,
      useEffect: st,
      useImperativeHandle: st,
      useLayoutEffect: st,
      useInsertionEffect: st,
      useMemo: st,
      useReducer: st,
      useRef: st,
      useState: st,
      useDebugValue: st,
      useDeferredValue: st,
      useTransition: st,
      useSyncExternalStore: st,
      useId: st,
      useHostTransitionStatus: st,
      useFormState: st,
      useActionState: st,
      useOptimistic: st,
      useMemoCache: st,
      useCacheRefresh: st,
    },
    kv = {
      readContext: Lt,
      use: xo,
      useCallback: function (e, i) {
        return (Gt().memoizedState = [e, i === void 0 ? null : i]), e;
      },
      useContext: Lt,
      useEffect: xv,
      useImperativeHandle: function (e, i, s) {
        (s = s != null ? s.concat([e]) : null),
          wo(4194308, 4, Cv.bind(null, i, e), s);
      },
      useLayoutEffect: function (e, i) {
        return wo(4194308, 4, e, i);
      },
      useInsertionEffect: function (e, i) {
        wo(4, 2, e, i);
      },
      useMemo: function (e, i) {
        var s = Gt();
        i = i === void 0 ? null : i;
        var o = e();
        if (Ea) {
          Jt(!0);
          try {
            e();
          } finally {
            Jt(!1);
          }
        }
        return (s.memoizedState = [o, i]), o;
      },
      useReducer: function (e, i, s) {
        var o = Gt();
        if (s !== void 0) {
          var f = s(i);
          if (Ea) {
            Jt(!0);
            try {
              s(i);
            } finally {
              Jt(!1);
            }
          }
        } else f = i;
        return (
          (o.memoizedState = o.baseState = f),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: f,
          }),
          (o.queue = e),
          (e = e.dispatch = N$.bind(null, Ee, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var i = Gt();
        return (e = { current: e }), (i.memoizedState = e);
      },
      useState: function (e) {
        e = mf(e);
        var i = e.queue,
          s = zv.bind(null, Ee, i);
        return (i.dispatch = s), [e.memoizedState, s];
      },
      useDebugValue: bf,
      useDeferredValue: function (e, i) {
        var s = Gt();
        return gf(s, e, i);
      },
      useTransition: function () {
        var e = mf(!1);
        return (
          (e = Rv.bind(null, Ee, e.queue, !0, !1)),
          (Gt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, i, s) {
        var o = Ee,
          f = Gt();
        if (Le) {
          if (s === void 0) throw Error(l(407));
          s = s();
        } else {
          if (((s = i()), je === null)) throw Error(l(349));
          (Ae & 124) !== 0 || sv(o, i, s);
        }
        f.memoizedState = s;
        var p = { value: s, getSnapshot: i };
        return (
          (f.queue = p),
          xv(ov.bind(null, o, p, e), [e]),
          (o.flags |= 2048),
          ml(9, $o(), rv.bind(null, o, p, s, i), null),
          s
        );
      },
      useId: function () {
        var e = Gt(),
          i = je.identifierPrefix;
        if (Le) {
          var s = oi,
            o = ri;
          (s = (o & ~(1 << (32 - St(o) - 1))).toString(32) + s),
            (i = "«" + i + "R" + s),
            (s = To++),
            0 < s && (i += "H" + s.toString(32)),
            (i += "»");
        } else (s = C$++), (i = "«" + i + "r" + s.toString(32) + "»");
        return (e.memoizedState = i);
      },
      useHostTransitionStatus: Sf,
      useFormState: bv,
      useActionState: bv,
      useOptimistic: function (e) {
        var i = Gt();
        i.memoizedState = i.baseState = e;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (i.queue = s),
          (i = Tf.bind(null, Ee, !0, s)),
          (s.dispatch = i),
          [e, i]
        );
      },
      useMemoCache: df,
      useCacheRefresh: function () {
        return (Gt().memoizedState = R$.bind(null, Ee));
      },
    },
    Hv = {
      readContext: Lt,
      use: xo,
      useCallback: Dv,
      useContext: Lt,
      useEffect: Ev,
      useImperativeHandle: Mv,
      useInsertionEffect: $v,
      useLayoutEffect: wv,
      useMemo: Av,
      useReducer: Eo,
      useRef: Tv,
      useState: function () {
        return Eo(fi);
      },
      useDebugValue: bf,
      useDeferredValue: function (e, i) {
        var s = dt();
        return Pv(s, Be.memoizedState, e, i);
      },
      useTransition: function () {
        var e = Eo(fi)[0],
          i = dt().memoizedState;
        return [typeof e == "boolean" ? e : Ls(e), i];
      },
      useSyncExternalStore: lv,
      useId: Lv,
      useHostTransitionStatus: Sf,
      useFormState: gv,
      useActionState: gv,
      useOptimistic: function (e, i) {
        var s = dt();
        return fv(s, Be, e, i);
      },
      useMemoCache: df,
      useCacheRefresh: _v,
    },
    O$ = {
      readContext: Lt,
      use: xo,
      useCallback: Dv,
      useContext: Lt,
      useEffect: Ev,
      useImperativeHandle: Mv,
      useInsertionEffect: $v,
      useLayoutEffect: wv,
      useMemo: Av,
      useReducer: pf,
      useRef: Tv,
      useState: function () {
        return pf(fi);
      },
      useDebugValue: bf,
      useDeferredValue: function (e, i) {
        var s = dt();
        return Be === null ? gf(s, e, i) : Pv(s, Be.memoizedState, e, i);
      },
      useTransition: function () {
        var e = pf(fi)[0],
          i = dt().memoizedState;
        return [typeof e == "boolean" ? e : Ls(e), i];
      },
      useSyncExternalStore: lv,
      useId: Lv,
      useHostTransitionStatus: Sf,
      useFormState: Sv,
      useActionState: Sv,
      useOptimistic: function (e, i) {
        var s = dt();
        return Be !== null
          ? fv(s, Be, e, i)
          : ((s.baseState = e), [e, s.queue.dispatch]);
      },
      useMemoCache: df,
      useCacheRefresh: _v,
    },
    vl = null,
    Vs = 0;
  function Do(e) {
    var i = Vs;
    return (Vs += 1), vl === null && (vl = []), Wm(vl, e, i);
  }
  function Bs(e, i) {
    (i = i.props.ref), (e.ref = i !== void 0 ? i : null);
  }
  function Ao(e, i) {
    throw i.$$typeof === b
      ? Error(l(525))
      : ((e = Object.prototype.toString.call(i)),
        Error(
          l(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(i).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Uv(e) {
    var i = e._init;
    return i(e._payload);
  }
  function Kv(e) {
    function i(K, k) {
      if (e) {
        var j = K.deletions;
        j === null ? ((K.deletions = [k]), (K.flags |= 16)) : j.push(k);
      }
    }
    function s(K, k) {
      if (!e) return null;
      for (; k !== null; ) i(K, k), (k = k.sibling);
      return null;
    }
    function o(K) {
      for (var k = new Map(); K !== null; )
        K.key !== null ? k.set(K.key, K) : k.set(K.index, K), (K = K.sibling);
      return k;
    }
    function f(K, k) {
      return (K = si(K, k)), (K.index = 0), (K.sibling = null), K;
    }
    function p(K, k, j) {
      return (
        (K.index = j),
        e
          ? ((j = K.alternate),
            j !== null
              ? ((j = j.index), j < k ? ((K.flags |= 67108866), k) : j)
              : ((K.flags |= 67108866), k))
          : ((K.flags |= 1048576), k)
      );
    }
    function y(K) {
      return e && K.alternate === null && (K.flags |= 67108866), K;
    }
    function E(K, k, j, J) {
      return k === null || k.tag !== 6
        ? ((k = Uc(j, K.mode, J)), (k.return = K), k)
        : ((k = f(k, j)), (k.return = K), k);
    }
    function L(K, k, j, J) {
      var ue = j.type;
      return ue === x
        ? Q(K, k, j.props.children, J, j.key)
        : k !== null &&
            (k.elementType === ue ||
              (typeof ue == "object" &&
                ue !== null &&
                ue.$$typeof === w &&
                Uv(ue) === k.type))
          ? ((k = f(k, j.props)), Bs(k, j), (k.return = K), k)
          : ((k = co(j.type, j.key, j.props, null, K.mode, J)),
            Bs(k, j),
            (k.return = K),
            k);
    }
    function I(K, k, j, J) {
      return k === null ||
        k.tag !== 4 ||
        k.stateNode.containerInfo !== j.containerInfo ||
        k.stateNode.implementation !== j.implementation
        ? ((k = Kc(j, K.mode, J)), (k.return = K), k)
        : ((k = f(k, j.children || [])), (k.return = K), k);
    }
    function Q(K, k, j, J, ue) {
      return k === null || k.tag !== 7
        ? ((k = ma(j, K.mode, J, ue)), (k.return = K), k)
        : ((k = f(k, j)), (k.return = K), k);
    }
    function ee(K, k, j) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return (k = Uc("" + k, K.mode, j)), (k.return = K), k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case g:
            return (
              (j = co(k.type, k.key, k.props, null, K.mode, j)),
              Bs(j, k),
              (j.return = K),
              j
            );
          case T:
            return (k = Kc(k, K.mode, j)), (k.return = K), k;
          case w:
            var J = k._init;
            return (k = J(k._payload)), ee(K, k, j);
        }
        if (Z(k) || F(k))
          return (k = ma(k, K.mode, j, null)), (k.return = K), k;
        if (typeof k.then == "function") return ee(K, Do(k), j);
        if (k.$$typeof === P) return ee(K, mo(K, k), j);
        Ao(K, k);
      }
      return null;
    }
    function Y(K, k, j, J) {
      var ue = k !== null ? k.key : null;
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return ue !== null ? null : E(K, k, "" + j, J);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case g:
            return j.key === ue ? L(K, k, j, J) : null;
          case T:
            return j.key === ue ? I(K, k, j, J) : null;
          case w:
            return (ue = j._init), (j = ue(j._payload)), Y(K, k, j, J);
        }
        if (Z(j) || F(j)) return ue !== null ? null : Q(K, k, j, J, null);
        if (typeof j.then == "function") return Y(K, k, Do(j), J);
        if (j.$$typeof === P) return Y(K, k, mo(K, j), J);
        Ao(K, j);
      }
      return null;
    }
    function q(K, k, j, J, ue) {
      if (
        (typeof J == "string" && J !== "") ||
        typeof J == "number" ||
        typeof J == "bigint"
      )
        return (K = K.get(j) || null), E(k, K, "" + J, ue);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case g:
            return (
              (K = K.get(J.key === null ? j : J.key) || null), L(k, K, J, ue)
            );
          case T:
            return (
              (K = K.get(J.key === null ? j : J.key) || null), I(k, K, J, ue)
            );
          case w:
            var $e = J._init;
            return (J = $e(J._payload)), q(K, k, j, J, ue);
        }
        if (Z(J) || F(J)) return (K = K.get(j) || null), Q(k, K, J, ue, null);
        if (typeof J.then == "function") return q(K, k, j, Do(J), ue);
        if (J.$$typeof === P) return q(K, k, j, mo(k, J), ue);
        Ao(k, J);
      }
      return null;
    }
    function ye(K, k, j, J) {
      for (
        var ue = null, $e = null, he = k, be = (k = 0), $t = null;
        he !== null && be < j.length;
        be++
      ) {
        he.index > be ? (($t = he), (he = null)) : ($t = he.sibling);
        var Re = Y(K, he, j[be], J);
        if (Re === null) {
          he === null && (he = $t);
          break;
        }
        e && he && Re.alternate === null && i(K, he),
          (k = p(Re, k, be)),
          $e === null ? (ue = Re) : ($e.sibling = Re),
          ($e = Re),
          (he = $t);
      }
      if (be === j.length) return s(K, he), Le && ba(K, be), ue;
      if (he === null) {
        for (; be < j.length; be++)
          (he = ee(K, j[be], J)),
            he !== null &&
              ((k = p(he, k, be)),
              $e === null ? (ue = he) : ($e.sibling = he),
              ($e = he));
        return Le && ba(K, be), ue;
      }
      for (he = o(he); be < j.length; be++)
        ($t = q(he, K, be, j[be], J)),
          $t !== null &&
            (e &&
              $t.alternate !== null &&
              he.delete($t.key === null ? be : $t.key),
            (k = p($t, k, be)),
            $e === null ? (ue = $t) : ($e.sibling = $t),
            ($e = $t));
      return (
        e &&
          he.forEach(function (Qi) {
            return i(K, Qi);
          }),
        Le && ba(K, be),
        ue
      );
    }
    function ve(K, k, j, J) {
      if (j == null) throw Error(l(151));
      for (
        var ue = null,
          $e = null,
          he = k,
          be = (k = 0),
          $t = null,
          Re = j.next();
        he !== null && !Re.done;
        be++, Re = j.next()
      ) {
        he.index > be ? (($t = he), (he = null)) : ($t = he.sibling);
        var Qi = Y(K, he, Re.value, J);
        if (Qi === null) {
          he === null && (he = $t);
          break;
        }
        e && he && Qi.alternate === null && i(K, he),
          (k = p(Qi, k, be)),
          $e === null ? (ue = Qi) : ($e.sibling = Qi),
          ($e = Qi),
          (he = $t);
      }
      if (Re.done) return s(K, he), Le && ba(K, be), ue;
      if (he === null) {
        for (; !Re.done; be++, Re = j.next())
          (Re = ee(K, Re.value, J)),
            Re !== null &&
              ((k = p(Re, k, be)),
              $e === null ? (ue = Re) : ($e.sibling = Re),
              ($e = Re));
        return Le && ba(K, be), ue;
      }
      for (he = o(he); !Re.done; be++, Re = j.next())
        (Re = q(he, K, be, Re.value, J)),
          Re !== null &&
            (e &&
              Re.alternate !== null &&
              he.delete(Re.key === null ? be : Re.key),
            (k = p(Re, k, be)),
            $e === null ? (ue = Re) : ($e.sibling = Re),
            ($e = Re));
      return (
        e &&
          he.forEach(function (L2) {
            return i(K, L2);
          }),
        Le && ba(K, be),
        ue
      );
    }
    function He(K, k, j, J) {
      if (
        (typeof j == "object" &&
          j !== null &&
          j.type === x &&
          j.key === null &&
          (j = j.props.children),
        typeof j == "object" && j !== null)
      ) {
        switch (j.$$typeof) {
          case g:
            e: {
              for (var ue = j.key; k !== null; ) {
                if (k.key === ue) {
                  if (((ue = j.type), ue === x)) {
                    if (k.tag === 7) {
                      s(K, k.sibling),
                        (J = f(k, j.props.children)),
                        (J.return = K),
                        (K = J);
                      break e;
                    }
                  } else if (
                    k.elementType === ue ||
                    (typeof ue == "object" &&
                      ue !== null &&
                      ue.$$typeof === w &&
                      Uv(ue) === k.type)
                  ) {
                    s(K, k.sibling),
                      (J = f(k, j.props)),
                      Bs(J, j),
                      (J.return = K),
                      (K = J);
                    break e;
                  }
                  s(K, k);
                  break;
                } else i(K, k);
                k = k.sibling;
              }
              j.type === x
                ? ((J = ma(j.props.children, K.mode, J, j.key)),
                  (J.return = K),
                  (K = J))
                : ((J = co(j.type, j.key, j.props, null, K.mode, J)),
                  Bs(J, j),
                  (J.return = K),
                  (K = J));
            }
            return y(K);
          case T:
            e: {
              for (ue = j.key; k !== null; ) {
                if (k.key === ue)
                  if (
                    k.tag === 4 &&
                    k.stateNode.containerInfo === j.containerInfo &&
                    k.stateNode.implementation === j.implementation
                  ) {
                    s(K, k.sibling),
                      (J = f(k, j.children || [])),
                      (J.return = K),
                      (K = J);
                    break e;
                  } else {
                    s(K, k);
                    break;
                  }
                else i(K, k);
                k = k.sibling;
              }
              (J = Kc(j, K.mode, J)), (J.return = K), (K = J);
            }
            return y(K);
          case w:
            return (ue = j._init), (j = ue(j._payload)), He(K, k, j, J);
        }
        if (Z(j)) return ye(K, k, j, J);
        if (F(j)) {
          if (((ue = F(j)), typeof ue != "function")) throw Error(l(150));
          return (j = ue.call(j)), ve(K, k, j, J);
        }
        if (typeof j.then == "function") return He(K, k, Do(j), J);
        if (j.$$typeof === P) return He(K, k, mo(K, j), J);
        Ao(K, j);
      }
      return (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
        ? ((j = "" + j),
          k !== null && k.tag === 6
            ? (s(K, k.sibling), (J = f(k, j)), (J.return = K), (K = J))
            : (s(K, k), (J = Uc(j, K.mode, J)), (J.return = K), (K = J)),
          y(K))
        : s(K, k);
    }
    return function (K, k, j, J) {
      try {
        Vs = 0;
        var ue = He(K, k, j, J);
        return (vl = null), ue;
      } catch (he) {
        if (he === Ds || he === bo) throw he;
        var $e = nn(29, he, null, K.mode);
        return ($e.lanes = J), ($e.return = K), $e;
      } finally {
      }
    };
  }
  var bl = Kv(!0),
    jv = Kv(!1),
    yn = oe(null),
    Gn = null;
  function Vi(e) {
    var i = e.alternate;
    le(gt, gt.current & 1),
      le(yn, e),
      Gn === null &&
        (i === null || dl.current !== null || i.memoizedState !== null) &&
        (Gn = e);
  }
  function Fv(e) {
    if (e.tag === 22) {
      if ((le(gt, gt.current), le(yn, e), Gn === null)) {
        var i = e.alternate;
        i !== null && i.memoizedState !== null && (Gn = e);
      }
    } else Bi();
  }
  function Bi() {
    le(gt, gt.current), le(yn, yn.current);
  }
  function di(e) {
    re(yn), Gn === e && (Gn = null), re(gt);
  }
  var gt = oe(0);
  function Po(e) {
    for (var i = e; i !== null; ) {
      if (i.tag === 13) {
        var s = i.memoizedState;
        if (
          s !== null &&
          ((s = s.dehydrated), s === null || s.data === "$?" || fd(s))
        )
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if ((i.flags & 128) !== 0) return i;
      } else if (i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === e) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === e) return null;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
    return null;
  }
  function xf(e, i, s, o) {
    (i = e.memoizedState),
      (s = s(o, i)),
      (s = s == null ? i : v({}, i, s)),
      (e.memoizedState = s),
      e.lanes === 0 && (e.updateQueue.baseState = s);
  }
  var Ef = {
    enqueueSetState: function (e, i, s) {
      e = e._reactInternals;
      var o = rn(),
        f = Li(o);
      (f.payload = i),
        s != null && (f.callback = s),
        (i = _i(e, f, o)),
        i !== null && (on(i, e, o), Ps(i, e, o));
    },
    enqueueReplaceState: function (e, i, s) {
      e = e._reactInternals;
      var o = rn(),
        f = Li(o);
      (f.tag = 1),
        (f.payload = i),
        s != null && (f.callback = s),
        (i = _i(e, f, o)),
        i !== null && (on(i, e, o), Ps(i, e, o));
    },
    enqueueForceUpdate: function (e, i) {
      e = e._reactInternals;
      var s = rn(),
        o = Li(s);
      (o.tag = 2),
        i != null && (o.callback = i),
        (i = _i(e, o, s)),
        i !== null && (on(i, e, s), Ps(i, e, s));
    },
  };
  function Iv(e, i, s, o, f, p, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, p, y)
        : i.prototype && i.prototype.isPureReactComponent
          ? !Ss(s, o) || !Ss(f, p)
          : !0
    );
  }
  function Gv(e, i, s, o) {
    (e = i.state),
      typeof i.componentWillReceiveProps == "function" &&
        i.componentWillReceiveProps(s, o),
      typeof i.UNSAFE_componentWillReceiveProps == "function" &&
        i.UNSAFE_componentWillReceiveProps(s, o),
      i.state !== e && Ef.enqueueReplaceState(i, i.state, null);
  }
  function $a(e, i) {
    var s = i;
    if ("ref" in i) {
      s = {};
      for (var o in i) o !== "ref" && (s[o] = i[o]);
    }
    if ((e = e.defaultProps)) {
      s === i && (s = v({}, s));
      for (var f in e) s[f] === void 0 && (s[f] = e[f]);
    }
    return s;
  }
  var Ro =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var i = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(i)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Yv(e) {
    Ro(e);
  }
  function qv(e) {
    console.error(e);
  }
  function Xv(e) {
    Ro(e);
  }
  function No(e, i) {
    try {
      var s = e.onUncaughtError;
      s(i.value, { componentStack: i.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Zv(e, i, s) {
    try {
      var o = e.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: i.tag === 1 ? i.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function $f(e, i, s) {
    return (
      (s = Li(s)),
      (s.tag = 3),
      (s.payload = { element: null }),
      (s.callback = function () {
        No(e, i);
      }),
      s
    );
  }
  function Wv(e) {
    return (e = Li(e)), (e.tag = 3), e;
  }
  function Qv(e, i, s, o) {
    var f = s.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var p = o.value;
      (e.payload = function () {
        return f(p);
      }),
        (e.callback = function () {
          Zv(i, s, o);
        });
    }
    var y = s.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (e.callback = function () {
        Zv(i, s, o),
          typeof f != "function" &&
            (Fi === null ? (Fi = new Set([this])) : Fi.add(this));
        var E = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: E !== null ? E : "",
        });
      });
  }
  function L$(e, i, s, o, f) {
    if (
      ((s.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((i = s.alternate),
        i !== null && ws(i, s, f, !0),
        (s = yn.current),
        s !== null)
      ) {
        switch (s.tag) {
          case 13:
            return (
              Gn === null ? qf() : s.alternate === null && it === 0 && (it = 3),
              (s.flags &= -257),
              (s.flags |= 65536),
              (s.lanes = f),
              o === Qc
                ? (s.flags |= 16384)
                : ((i = s.updateQueue),
                  i === null ? (s.updateQueue = new Set([o])) : i.add(o),
                  Zf(e, o, f)),
              !1
            );
          case 22:
            return (
              (s.flags |= 65536),
              o === Qc
                ? (s.flags |= 16384)
                : ((i = s.updateQueue),
                  i === null
                    ? ((i = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (s.updateQueue = i))
                    : ((s = i.retryQueue),
                      s === null ? (i.retryQueue = new Set([o])) : s.add(o)),
                  Zf(e, o, f)),
              !1
            );
        }
        throw Error(l(435, s.tag));
      }
      return Zf(e, o, f), qf(), !1;
    }
    if (Le)
      return (
        (i = yn.current),
        i !== null
          ? ((i.flags & 65536) === 0 && (i.flags |= 256),
            (i.flags |= 65536),
            (i.lanes = f),
            o !== Ic && ((e = Error(l(422), { cause: o })), $s(mn(e, s))))
          : (o !== Ic && ((i = Error(l(423), { cause: o })), $s(mn(i, s))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (o = mn(o, s)),
            (f = $f(e.stateNode, o, f)),
            tf(e, f),
            it !== 4 && (it = 2)),
        !1
      );
    var p = Error(l(520), { cause: o });
    if (
      ((p = mn(p, s)),
      Is === null ? (Is = [p]) : Is.push(p),
      it !== 4 && (it = 2),
      i === null)
    )
      return !0;
    (o = mn(o, s)), (s = i);
    do {
      switch (s.tag) {
        case 3:
          return (
            (s.flags |= 65536),
            (e = f & -f),
            (s.lanes |= e),
            (e = $f(s.stateNode, o, e)),
            tf(s, e),
            !1
          );
        case 1:
          if (
            ((i = s.type),
            (p = s.stateNode),
            (s.flags & 128) === 0 &&
              (typeof i.getDerivedStateFromError == "function" ||
                (p !== null &&
                  typeof p.componentDidCatch == "function" &&
                  (Fi === null || !Fi.has(p)))))
          )
            return (
              (s.flags |= 65536),
              (f &= -f),
              (s.lanes |= f),
              (f = Wv(f)),
              Qv(f, e, s, o),
              tf(s, f),
              !1
            );
      }
      s = s.return;
    } while (s !== null);
    return !1;
  }
  var Jv = Error(l(461)),
    xt = !1;
  function Mt(e, i, s, o) {
    i.child = e === null ? jv(i, null, s, o) : bl(i, e.child, s, o);
  }
  function e0(e, i, s, o, f) {
    s = s.render;
    var p = i.ref;
    if ("ref" in o) {
      var y = {};
      for (var E in o) E !== "ref" && (y[E] = o[E]);
    } else y = o;
    return (
      Ta(i),
      (o = rf(e, i, s, y, p, f)),
      (E = of()),
      e !== null && !xt
        ? (uf(e, i, f), hi(e, i, f))
        : (Le && E && jc(i), (i.flags |= 1), Mt(e, i, o, f), i.child)
    );
  }
  function t0(e, i, s, o, f) {
    if (e === null) {
      var p = s.type;
      return typeof p == "function" &&
        !Hc(p) &&
        p.defaultProps === void 0 &&
        s.compare === null
        ? ((i.tag = 15), (i.type = p), n0(e, i, p, o, f))
        : ((e = co(s.type, null, o, i, i.mode, f)),
          (e.ref = i.ref),
          (e.return = i),
          (i.child = e));
    }
    if (((p = e.child), !Nf(e, f))) {
      var y = p.memoizedProps;
      if (
        ((s = s.compare), (s = s !== null ? s : Ss), s(y, o) && e.ref === i.ref)
      )
        return hi(e, i, f);
    }
    return (
      (i.flags |= 1),
      (e = si(p, o)),
      (e.ref = i.ref),
      (e.return = i),
      (i.child = e)
    );
  }
  function n0(e, i, s, o, f) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Ss(p, o) && e.ref === i.ref)
        if (((xt = !1), (i.pendingProps = o = p), Nf(e, f)))
          (e.flags & 131072) !== 0 && (xt = !0);
        else return (i.lanes = e.lanes), hi(e, i, f);
    }
    return wf(e, i, s, o, f);
  }
  function i0(e, i, s) {
    var o = i.pendingProps,
      f = o.children,
      p = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((i.flags & 128) !== 0) {
        if (((o = p !== null ? p.baseLanes | s : s), e !== null)) {
          for (f = i.child = e.child, p = 0; f !== null; )
            (p = p | f.lanes | f.childLanes), (f = f.sibling);
          i.childLanes = p & ~o;
        } else (i.childLanes = 0), (i.child = null);
        return a0(e, i, o, s);
      }
      if ((s & 536870912) !== 0)
        (i.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && vo(i, p !== null ? p.cachePool : null),
          p !== null ? nv(i, p) : af(),
          Fv(i);
      else
        return (
          (i.lanes = i.childLanes = 536870912),
          a0(e, i, p !== null ? p.baseLanes | s : s, s)
        );
    } else
      p !== null
        ? (vo(i, p.cachePool), nv(i, p), Bi(), (i.memoizedState = null))
        : (e !== null && vo(i, null), af(), Bi());
    return Mt(e, i, f, s), i.child;
  }
  function a0(e, i, s, o) {
    var f = Wc();
    return (
      (f = f === null ? null : { parent: bt._currentValue, pool: f }),
      (i.memoizedState = { baseLanes: s, cachePool: f }),
      e !== null && vo(i, null),
      af(),
      Fv(i),
      e !== null && ws(e, i, o, !0),
      null
    );
  }
  function Oo(e, i) {
    var s = i.ref;
    if (s === null) e !== null && e.ref !== null && (i.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object") throw Error(l(284));
      (e === null || e.ref !== s) && (i.flags |= 4194816);
    }
  }
  function wf(e, i, s, o, f) {
    return (
      Ta(i),
      (s = rf(e, i, s, o, void 0, f)),
      (o = of()),
      e !== null && !xt
        ? (uf(e, i, f), hi(e, i, f))
        : (Le && o && jc(i), (i.flags |= 1), Mt(e, i, s, f), i.child)
    );
  }
  function l0(e, i, s, o, f, p) {
    return (
      Ta(i),
      (i.updateQueue = null),
      (s = av(i, o, s, f)),
      iv(e),
      (o = of()),
      e !== null && !xt
        ? (uf(e, i, p), hi(e, i, p))
        : (Le && o && jc(i), (i.flags |= 1), Mt(e, i, s, p), i.child)
    );
  }
  function s0(e, i, s, o, f) {
    if ((Ta(i), i.stateNode === null)) {
      var p = rl,
        y = s.contextType;
      typeof y == "object" && y !== null && (p = Lt(y)),
        (p = new s(o, p)),
        (i.memoizedState =
          p.state !== null && p.state !== void 0 ? p.state : null),
        (p.updater = Ef),
        (i.stateNode = p),
        (p._reactInternals = i),
        (p = i.stateNode),
        (p.props = o),
        (p.state = i.memoizedState),
        (p.refs = {}),
        Jc(i),
        (y = s.contextType),
        (p.context = typeof y == "object" && y !== null ? Lt(y) : rl),
        (p.state = i.memoizedState),
        (y = s.getDerivedStateFromProps),
        typeof y == "function" && (xf(i, s, y, o), (p.state = i.memoizedState)),
        typeof s.getDerivedStateFromProps == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function" ||
          (typeof p.UNSAFE_componentWillMount != "function" &&
            typeof p.componentWillMount != "function") ||
          ((y = p.state),
          typeof p.componentWillMount == "function" && p.componentWillMount(),
          typeof p.UNSAFE_componentWillMount == "function" &&
            p.UNSAFE_componentWillMount(),
          y !== p.state && Ef.enqueueReplaceState(p, p.state, null),
          Ns(i, o, p, f),
          Rs(),
          (p.state = i.memoizedState)),
        typeof p.componentDidMount == "function" && (i.flags |= 4194308),
        (o = !0);
    } else if (e === null) {
      p = i.stateNode;
      var E = i.memoizedProps,
        L = $a(s, E);
      p.props = L;
      var I = p.context,
        Q = s.contextType;
      (y = rl), typeof Q == "object" && Q !== null && (y = Lt(Q));
      var ee = s.getDerivedStateFromProps;
      (Q =
        typeof ee == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function"),
        (E = i.pendingProps !== E),
        Q ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((E || I !== y) && Gv(i, p, o, y)),
        (Oi = !1);
      var Y = i.memoizedState;
      (p.state = Y),
        Ns(i, o, p, f),
        Rs(),
        (I = i.memoizedState),
        E || Y !== I || Oi
          ? (typeof ee == "function" &&
              (xf(i, s, ee, o), (I = i.memoizedState)),
            (L = Oi || Iv(i, s, L, o, Y, I, y))
              ? (Q ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (i.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (i.flags |= 4194308),
                (i.memoizedProps = o),
                (i.memoizedState = I)),
            (p.props = o),
            (p.state = I),
            (p.context = y),
            (o = L))
          : (typeof p.componentDidMount == "function" && (i.flags |= 4194308),
            (o = !1));
    } else {
      (p = i.stateNode),
        ef(e, i),
        (y = i.memoizedProps),
        (Q = $a(s, y)),
        (p.props = Q),
        (ee = i.pendingProps),
        (Y = p.context),
        (I = s.contextType),
        (L = rl),
        typeof I == "object" && I !== null && (L = Lt(I)),
        (E = s.getDerivedStateFromProps),
        (I =
          typeof E == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function") ||
          (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
            typeof p.componentWillReceiveProps != "function") ||
          ((y !== ee || Y !== L) && Gv(i, p, o, L)),
        (Oi = !1),
        (Y = i.memoizedState),
        (p.state = Y),
        Ns(i, o, p, f),
        Rs();
      var q = i.memoizedState;
      y !== ee ||
      Y !== q ||
      Oi ||
      (e !== null && e.dependencies !== null && po(e.dependencies))
        ? (typeof E == "function" && (xf(i, s, E, o), (q = i.memoizedState)),
          (Q =
            Oi ||
            Iv(i, s, Q, o, Y, q, L) ||
            (e !== null && e.dependencies !== null && po(e.dependencies)))
            ? (I ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(o, q, L),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(o, q, L)),
              typeof p.componentDidUpdate == "function" && (i.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (i.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (y === e.memoizedProps && Y === e.memoizedState) ||
                (i.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && Y === e.memoizedState) ||
                (i.flags |= 1024),
              (i.memoizedProps = o),
              (i.memoizedState = q)),
          (p.props = o),
          (p.state = q),
          (p.context = L),
          (o = Q))
        : (typeof p.componentDidUpdate != "function" ||
            (y === e.memoizedProps && Y === e.memoizedState) ||
            (i.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && Y === e.memoizedState) ||
            (i.flags |= 1024),
          (o = !1));
    }
    return (
      (p = o),
      Oo(e, i),
      (o = (i.flags & 128) !== 0),
      p || o
        ? ((p = i.stateNode),
          (s =
            o && typeof s.getDerivedStateFromError != "function"
              ? null
              : p.render()),
          (i.flags |= 1),
          e !== null && o
            ? ((i.child = bl(i, e.child, null, f)),
              (i.child = bl(i, null, s, f)))
            : Mt(e, i, s, f),
          (i.memoizedState = p.state),
          (e = i.child))
        : (e = hi(e, i, f)),
      e
    );
  }
  function r0(e, i, s, o) {
    return Es(), (i.flags |= 256), Mt(e, i, s, o), i.child;
  }
  var Cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Mf(e) {
    return { baseLanes: e, cachePool: qm() };
  }
  function Df(e, i, s) {
    return (e = e !== null ? e.childLanes & ~s : 0), i && (e |= Sn), e;
  }
  function o0(e, i, s) {
    var o = i.pendingProps,
      f = !1,
      p = (i.flags & 128) !== 0,
      y;
    if (
      ((y = p) ||
        (y =
          e !== null && e.memoizedState === null ? !1 : (gt.current & 2) !== 0),
      y && ((f = !0), (i.flags &= -129)),
      (y = (i.flags & 32) !== 0),
      (i.flags &= -33),
      e === null)
    ) {
      if (Le) {
        if ((f ? Vi(i) : Bi(), Le)) {
          var E = nt,
            L;
          if ((L = E)) {
            e: {
              for (L = E, E = In; L.nodeType !== 8; ) {
                if (!E) {
                  E = null;
                  break e;
                }
                if (((L = Vn(L.nextSibling)), L === null)) {
                  E = null;
                  break e;
                }
              }
              E = L;
            }
            E !== null
              ? ((i.memoizedState = {
                  dehydrated: E,
                  treeContext: va !== null ? { id: ri, overflow: oi } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (L = nn(18, null, null, 0)),
                (L.stateNode = E),
                (L.return = i),
                (i.child = L),
                (kt = i),
                (nt = null),
                (L = !0))
              : (L = !1);
          }
          L || ya(i);
        }
        if (
          ((E = i.memoizedState),
          E !== null && ((E = E.dehydrated), E !== null))
        )
          return fd(E) ? (i.lanes = 32) : (i.lanes = 536870912), null;
        di(i);
      }
      return (
        (E = o.children),
        (o = o.fallback),
        f
          ? (Bi(),
            (f = i.mode),
            (E = Lo({ mode: "hidden", children: E }, f)),
            (o = ma(o, f, s, null)),
            (E.return = i),
            (o.return = i),
            (E.sibling = o),
            (i.child = E),
            (f = i.child),
            (f.memoizedState = Mf(s)),
            (f.childLanes = Df(e, y, s)),
            (i.memoizedState = Cf),
            o)
          : (Vi(i), Af(i, E))
      );
    }
    if (
      ((L = e.memoizedState), L !== null && ((E = L.dehydrated), E !== null))
    ) {
      if (p)
        i.flags & 256
          ? (Vi(i), (i.flags &= -257), (i = Pf(e, i, s)))
          : i.memoizedState !== null
            ? (Bi(), (i.child = e.child), (i.flags |= 128), (i = null))
            : (Bi(),
              (f = o.fallback),
              (E = i.mode),
              (o = Lo({ mode: "visible", children: o.children }, E)),
              (f = ma(f, E, s, null)),
              (f.flags |= 2),
              (o.return = i),
              (f.return = i),
              (o.sibling = f),
              (i.child = o),
              bl(i, e.child, null, s),
              (o = i.child),
              (o.memoizedState = Mf(s)),
              (o.childLanes = Df(e, y, s)),
              (i.memoizedState = Cf),
              (i = f));
      else if ((Vi(i), fd(E))) {
        if (((y = E.nextSibling && E.nextSibling.dataset), y)) var I = y.dgst;
        (y = I),
          (o = Error(l(419))),
          (o.stack = ""),
          (o.digest = y),
          $s({ value: o, source: null, stack: null }),
          (i = Pf(e, i, s));
      } else if (
        (xt || ws(e, i, s, !1), (y = (s & e.childLanes) !== 0), xt || y)
      ) {
        if (
          ((y = je),
          y !== null &&
            ((o = s & -s),
            (o = (o & 42) !== 0 ? 1 : os(o)),
            (o = (o & (y.suspendedLanes | s)) !== 0 ? 0 : o),
            o !== 0 && o !== L.retryLane))
        )
          throw ((L.retryLane = o), sl(e, o), on(y, e, o), Jv);
        E.data === "$?" || qf(), (i = Pf(e, i, s));
      } else
        E.data === "$?"
          ? ((i.flags |= 192), (i.child = e.child), (i = null))
          : ((e = L.treeContext),
            (nt = Vn(E.nextSibling)),
            (kt = i),
            (Le = !0),
            (ga = null),
            (In = !1),
            e !== null &&
              ((bn[gn++] = ri),
              (bn[gn++] = oi),
              (bn[gn++] = va),
              (ri = e.id),
              (oi = e.overflow),
              (va = i)),
            (i = Af(i, o.children)),
            (i.flags |= 4096));
      return i;
    }
    return f
      ? (Bi(),
        (f = o.fallback),
        (E = i.mode),
        (L = e.child),
        (I = L.sibling),
        (o = si(L, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = L.subtreeFlags & 65011712),
        I !== null ? (f = si(I, f)) : ((f = ma(f, E, s, null)), (f.flags |= 2)),
        (f.return = i),
        (o.return = i),
        (o.sibling = f),
        (i.child = o),
        (o = f),
        (f = i.child),
        (E = e.child.memoizedState),
        E === null
          ? (E = Mf(s))
          : ((L = E.cachePool),
            L !== null
              ? ((I = bt._currentValue),
                (L = L.parent !== I ? { parent: I, pool: I } : L))
              : (L = qm()),
            (E = { baseLanes: E.baseLanes | s, cachePool: L })),
        (f.memoizedState = E),
        (f.childLanes = Df(e, y, s)),
        (i.memoizedState = Cf),
        o)
      : (Vi(i),
        (s = e.child),
        (e = s.sibling),
        (s = si(s, { mode: "visible", children: o.children })),
        (s.return = i),
        (s.sibling = null),
        e !== null &&
          ((y = i.deletions),
          y === null ? ((i.deletions = [e]), (i.flags |= 16)) : y.push(e)),
        (i.child = s),
        (i.memoizedState = null),
        s);
  }
  function Af(e, i) {
    return (
      (i = Lo({ mode: "visible", children: i }, e.mode)),
      (i.return = e),
      (e.child = i)
    );
  }
  function Lo(e, i) {
    return (
      (e = nn(22, e, null, i)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Pf(e, i, s) {
    return (
      bl(i, e.child, null, s),
      (e = Af(i, i.pendingProps.children)),
      (e.flags |= 2),
      (i.memoizedState = null),
      e
    );
  }
  function u0(e, i, s) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i), Yc(e.return, i, s);
  }
  function Rf(e, i, s, o, f) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: i,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: s,
          tailMode: f,
        })
      : ((p.isBackwards = i),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = o),
        (p.tail = s),
        (p.tailMode = f));
  }
  function c0(e, i, s) {
    var o = i.pendingProps,
      f = o.revealOrder,
      p = o.tail;
    if ((Mt(e, i, o.children, s), (o = gt.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (i.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = i.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && u0(e, s, i);
          else if (e.tag === 19) u0(e, s, i);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === i) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === i) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    switch ((le(gt, o), f)) {
      case "forwards":
        for (s = i.child, f = null; s !== null; )
          (e = s.alternate),
            e !== null && Po(e) === null && (f = s),
            (s = s.sibling);
        (s = f),
          s === null
            ? ((f = i.child), (i.child = null))
            : ((f = s.sibling), (s.sibling = null)),
          Rf(i, !1, f, s, p);
        break;
      case "backwards":
        for (s = null, f = i.child, i.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && Po(e) === null)) {
            i.child = f;
            break;
          }
          (e = f.sibling), (f.sibling = s), (s = f), (f = e);
        }
        Rf(i, !0, s, null, p);
        break;
      case "together":
        Rf(i, !1, null, null, void 0);
        break;
      default:
        i.memoizedState = null;
    }
    return i.child;
  }
  function hi(e, i, s) {
    if (
      (e !== null && (i.dependencies = e.dependencies),
      (ji |= i.lanes),
      (s & i.childLanes) === 0)
    )
      if (e !== null) {
        if ((ws(e, i, s, !1), (s & i.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && i.child !== e.child) throw Error(l(153));
    if (i.child !== null) {
      for (
        e = i.child, s = si(e, e.pendingProps), i.child = s, s.return = i;
        e.sibling !== null;

      )
        (e = e.sibling),
          (s = s.sibling = si(e, e.pendingProps)),
          (s.return = i);
      s.sibling = null;
    }
    return i.child;
  }
  function Nf(e, i) {
    return (e.lanes & i) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && po(e)));
  }
  function _$(e, i, s) {
    switch (i.tag) {
      case 3:
        Oe(i, i.stateNode.containerInfo),
          Ni(i, bt, e.memoizedState.cache),
          Es();
        break;
      case 27:
      case 5:
        De(i);
        break;
      case 4:
        Oe(i, i.stateNode.containerInfo);
        break;
      case 10:
        Ni(i, i.type, i.memoizedProps.value);
        break;
      case 13:
        var o = i.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (Vi(i), (i.flags |= 128), null)
            : (s & i.child.childLanes) !== 0
              ? o0(e, i, s)
              : (Vi(i), (e = hi(e, i, s)), e !== null ? e.sibling : null);
        Vi(i);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((o = (s & i.childLanes) !== 0),
          o || (ws(e, i, s, !1), (o = (s & i.childLanes) !== 0)),
          f)
        ) {
          if (o) return c0(e, i, s);
          i.flags |= 128;
        }
        if (
          ((f = i.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          le(gt, gt.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (i.lanes = 0), i0(e, i, s);
      case 24:
        Ni(i, bt, e.memoizedState.cache);
    }
    return hi(e, i, s);
  }
  function f0(e, i, s) {
    if (e !== null)
      if (e.memoizedProps !== i.pendingProps) xt = !0;
      else {
        if (!Nf(e, s) && (i.flags & 128) === 0) return (xt = !1), _$(e, i, s);
        xt = (e.flags & 131072) !== 0;
      }
    else (xt = !1), Le && (i.flags & 1048576) !== 0 && Um(i, ho, i.index);
    switch (((i.lanes = 0), i.tag)) {
      case 16:
        e: {
          e = i.pendingProps;
          var o = i.elementType,
            f = o._init;
          if (((o = f(o._payload)), (i.type = o), typeof o == "function"))
            Hc(o)
              ? ((e = $a(o, e)), (i.tag = 1), (i = s0(null, i, o, e, s)))
              : ((i.tag = 0), (i = wf(null, i, o, e, s)));
          else {
            if (o != null) {
              if (((f = o.$$typeof), f === z)) {
                (i.tag = 11), (i = e0(null, i, o, e, s));
                break e;
              } else if (f === X) {
                (i.tag = 14), (i = t0(null, i, o, e, s));
                break e;
              }
            }
            throw ((i = H(o) || o), Error(l(306, i, "")));
          }
        }
        return i;
      case 0:
        return wf(e, i, i.type, i.pendingProps, s);
      case 1:
        return (o = i.type), (f = $a(o, i.pendingProps)), s0(e, i, o, f, s);
      case 3:
        e: {
          if ((Oe(i, i.stateNode.containerInfo), e === null))
            throw Error(l(387));
          o = i.pendingProps;
          var p = i.memoizedState;
          (f = p.element), ef(e, i), Ns(i, o, null, s);
          var y = i.memoizedState;
          if (
            ((o = y.cache),
            Ni(i, bt, o),
            o !== p.cache && qc(i, [bt], s, !0),
            Rs(),
            (o = y.element),
            p.isDehydrated)
          )
            if (
              ((p = { element: o, isDehydrated: !1, cache: y.cache }),
              (i.updateQueue.baseState = p),
              (i.memoizedState = p),
              i.flags & 256)
            ) {
              i = r0(e, i, o, s);
              break e;
            } else if (o !== f) {
              (f = mn(Error(l(424)), i)), $s(f), (i = r0(e, i, o, s));
              break e;
            } else {
              switch (((e = i.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                nt = Vn(e.firstChild),
                  kt = i,
                  Le = !0,
                  ga = null,
                  In = !0,
                  s = jv(i, null, o, s),
                  i.child = s;
                s;

              )
                (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
            }
          else {
            if ((Es(), o === f)) {
              i = hi(e, i, s);
              break e;
            }
            Mt(e, i, o, s);
          }
          i = i.child;
        }
        return i;
      case 26:
        return (
          Oo(e, i),
          e === null
            ? (s = mb(i.type, null, i.pendingProps, null))
              ? (i.memoizedState = s)
              : Le ||
                ((s = i.type),
                (e = i.pendingProps),
                (o = qo(ce.current).createElement(s)),
                (o[vt] = i),
                (o[Ot] = e),
                At(o, s, e),
                Tt(o),
                (i.stateNode = o))
            : (i.memoizedState = mb(
                i.type,
                e.memoizedProps,
                i.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          De(i),
          e === null &&
            Le &&
            ((o = i.stateNode = db(i.type, i.pendingProps, ce.current)),
            (kt = i),
            (In = !0),
            (f = nt),
            Yi(i.type) ? ((dd = f), (nt = Vn(o.firstChild))) : (nt = f)),
          Mt(e, i, i.pendingProps.children, s),
          Oo(e, i),
          e === null && (i.flags |= 4194304),
          i.child
        );
      case 5:
        return (
          e === null &&
            Le &&
            ((f = o = nt) &&
              ((o = u2(o, i.type, i.pendingProps, In)),
              o !== null
                ? ((i.stateNode = o),
                  (kt = i),
                  (nt = Vn(o.firstChild)),
                  (In = !1),
                  (f = !0))
                : (f = !1)),
            f || ya(i)),
          De(i),
          (f = i.type),
          (p = i.pendingProps),
          (y = e !== null ? e.memoizedProps : null),
          (o = p.children),
          od(f, p) ? (o = null) : y !== null && od(f, y) && (i.flags |= 32),
          i.memoizedState !== null &&
            ((f = rf(e, i, M$, null, null, s)), (er._currentValue = f)),
          Oo(e, i),
          Mt(e, i, o, s),
          i.child
        );
      case 6:
        return (
          e === null &&
            Le &&
            ((e = s = nt) &&
              ((s = c2(s, i.pendingProps, In)),
              s !== null
                ? ((i.stateNode = s), (kt = i), (nt = null), (e = !0))
                : (e = !1)),
            e || ya(i)),
          null
        );
      case 13:
        return o0(e, i, s);
      case 4:
        return (
          Oe(i, i.stateNode.containerInfo),
          (o = i.pendingProps),
          e === null ? (i.child = bl(i, null, o, s)) : Mt(e, i, o, s),
          i.child
        );
      case 11:
        return e0(e, i, i.type, i.pendingProps, s);
      case 7:
        return Mt(e, i, i.pendingProps, s), i.child;
      case 8:
        return Mt(e, i, i.pendingProps.children, s), i.child;
      case 12:
        return Mt(e, i, i.pendingProps.children, s), i.child;
      case 10:
        return (
          (o = i.pendingProps),
          Ni(i, i.type, o.value),
          Mt(e, i, o.children, s),
          i.child
        );
      case 9:
        return (
          (f = i.type._context),
          (o = i.pendingProps.children),
          Ta(i),
          (f = Lt(f)),
          (o = o(f)),
          (i.flags |= 1),
          Mt(e, i, o, s),
          i.child
        );
      case 14:
        return t0(e, i, i.type, i.pendingProps, s);
      case 15:
        return n0(e, i, i.type, i.pendingProps, s);
      case 19:
        return c0(e, i, s);
      case 31:
        return (
          (o = i.pendingProps),
          (s = i.mode),
          (o = { mode: o.mode, children: o.children }),
          e === null
            ? ((s = Lo(o, s)),
              (s.ref = i.ref),
              (i.child = s),
              (s.return = i),
              (i = s))
            : ((s = si(e.child, o)),
              (s.ref = i.ref),
              (i.child = s),
              (s.return = i),
              (i = s)),
          i
        );
      case 22:
        return i0(e, i, s);
      case 24:
        return (
          Ta(i),
          (o = Lt(bt)),
          e === null
            ? ((f = Wc()),
              f === null &&
                ((f = je),
                (p = Xc()),
                (f.pooledCache = p),
                p.refCount++,
                p !== null && (f.pooledCacheLanes |= s),
                (f = p)),
              (i.memoizedState = { parent: o, cache: f }),
              Jc(i),
              Ni(i, bt, f))
            : ((e.lanes & s) !== 0 && (ef(e, i), Ns(i, null, null, s), Rs()),
              (f = e.memoizedState),
              (p = i.memoizedState),
              f.parent !== o
                ? ((f = { parent: o, cache: o }),
                  (i.memoizedState = f),
                  i.lanes === 0 &&
                    (i.memoizedState = i.updateQueue.baseState = f),
                  Ni(i, bt, o))
                : ((o = p.cache),
                  Ni(i, bt, o),
                  o !== f.cache && qc(i, [bt], s, !0))),
          Mt(e, i, i.pendingProps.children, s),
          i.child
        );
      case 29:
        throw i.pendingProps;
    }
    throw Error(l(156, i.tag));
  }
  function pi(e) {
    e.flags |= 4;
  }
  function d0(e, i) {
    if (i.type !== "stylesheet" || (i.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Sb(i))) {
      if (
        ((i = yn.current),
        i !== null &&
          ((Ae & 4194048) === Ae
            ? Gn !== null
            : ((Ae & 62914560) !== Ae && (Ae & 536870912) === 0) || i !== Gn))
      )
        throw ((As = Qc), Xm);
      e.flags |= 8192;
    }
  }
  function _o(e, i) {
    i !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((i = e.tag !== 22 ? Ga() : 536870912), (e.lanes |= i), (Tl |= i));
  }
  function ks(e, i) {
    if (!Le)
      switch (e.tailMode) {
        case "hidden":
          i = e.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), (i = i.sibling);
          s === null ? (e.tail = null) : (s.sibling = null);
          break;
        case "collapsed":
          s = e.tail;
          for (var o = null; s !== null; )
            s.alternate !== null && (o = s), (s = s.sibling);
          o === null
            ? i || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Qe(e) {
    var i = e.alternate !== null && e.alternate.child === e.child,
      s = 0,
      o = 0;
    if (i)
      for (var f = e.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags & 65011712),
          (o |= f.flags & 65011712),
          (f.return = e),
          (f = f.sibling);
    else
      for (f = e.child; f !== null; )
        (s |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags),
          (o |= f.flags),
          (f.return = e),
          (f = f.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = s), i;
  }
  function z$(e, i, s) {
    var o = i.pendingProps;
    switch ((Fc(i), i.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(i), null;
      case 1:
        return Qe(i), null;
      case 3:
        return (
          (s = i.stateNode),
          (o = null),
          e !== null && (o = e.memoizedState.cache),
          i.memoizedState.cache !== o && (i.flags |= 2048),
          ci(bt),
          me(),
          s.pendingContext &&
            ((s.context = s.pendingContext), (s.pendingContext = null)),
          (e === null || e.child === null) &&
            (xs(i)
              ? pi(i)
              : e === null ||
                (e.memoizedState.isDehydrated && (i.flags & 256) === 0) ||
                ((i.flags |= 1024), Fm())),
          Qe(i),
          null
        );
      case 26:
        return (
          (s = i.memoizedState),
          e === null
            ? (pi(i),
              s !== null ? (Qe(i), d0(i, s)) : (Qe(i), (i.flags &= -16777217)))
            : s
              ? s !== e.memoizedState
                ? (pi(i), Qe(i), d0(i, s))
                : (Qe(i), (i.flags &= -16777217))
              : (e.memoizedProps !== o && pi(i), Qe(i), (i.flags &= -16777217)),
          null
        );
      case 27:
        ae(i), (s = ce.current);
        var f = i.type;
        if (e !== null && i.stateNode != null) e.memoizedProps !== o && pi(i);
        else {
          if (!o) {
            if (i.stateNode === null) throw Error(l(166));
            return Qe(i), null;
          }
          (e = se.current),
            xs(i) ? Km(i) : ((e = db(f, o, s)), (i.stateNode = e), pi(i));
        }
        return Qe(i), null;
      case 5:
        if ((ae(i), (s = i.type), e !== null && i.stateNode != null))
          e.memoizedProps !== o && pi(i);
        else {
          if (!o) {
            if (i.stateNode === null) throw Error(l(166));
            return Qe(i), null;
          }
          if (((e = se.current), xs(i))) Km(i);
          else {
            switch (((f = qo(ce.current)), e)) {
              case 1:
                e = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                e = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    e = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    e = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    (e = f.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof o.is == "string"
                        ? f.createElement("select", { is: o.is })
                        : f.createElement("select")),
                      o.multiple
                        ? (e.multiple = !0)
                        : o.size && (e.size = o.size);
                    break;
                  default:
                    e =
                      typeof o.is == "string"
                        ? f.createElement(s, { is: o.is })
                        : f.createElement(s);
                }
            }
            (e[vt] = i), (e[Ot] = o);
            e: for (f = i.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) e.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === i) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === i) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            i.stateNode = e;
            e: switch ((At(e, s, o), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && pi(i);
          }
        }
        return Qe(i), (i.flags &= -16777217), null;
      case 6:
        if (e && i.stateNode != null) e.memoizedProps !== o && pi(i);
        else {
          if (typeof o != "string" && i.stateNode === null) throw Error(l(166));
          if (((e = ce.current), xs(i))) {
            if (
              ((e = i.stateNode),
              (s = i.memoizedProps),
              (o = null),
              (f = kt),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            (e[vt] = i),
              (e = !!(
                e.nodeValue === s ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                lb(e.nodeValue, s)
              )),
              e || ya(i);
          } else (e = qo(e).createTextNode(o)), (e[vt] = i), (i.stateNode = e);
        }
        return Qe(i), null;
      case 13:
        if (
          ((o = i.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = xs(i)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(l(318));
              if (
                ((f = i.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(l(317));
              f[vt] = i;
            } else
              Es(),
                (i.flags & 128) === 0 && (i.memoizedState = null),
                (i.flags |= 4);
            Qe(i), (f = !1);
          } else
            (f = Fm()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = f),
              (f = !0);
          if (!f) return i.flags & 256 ? (di(i), i) : (di(i), null);
        }
        if ((di(i), (i.flags & 128) !== 0)) return (i.lanes = s), i;
        if (
          ((s = o !== null), (e = e !== null && e.memoizedState !== null), s)
        ) {
          (o = i.child),
            (f = null),
            o.alternate !== null &&
              o.alternate.memoizedState !== null &&
              o.alternate.memoizedState.cachePool !== null &&
              (f = o.alternate.memoizedState.cachePool.pool);
          var p = null;
          o.memoizedState !== null &&
            o.memoizedState.cachePool !== null &&
            (p = o.memoizedState.cachePool.pool),
            p !== f && (o.flags |= 2048);
        }
        return (
          s !== e && s && (i.child.flags |= 8192),
          _o(i, i.updateQueue),
          Qe(i),
          null
        );
      case 4:
        return me(), e === null && id(i.stateNode.containerInfo), Qe(i), null;
      case 10:
        return ci(i.type), Qe(i), null;
      case 19:
        if ((re(gt), (f = i.memoizedState), f === null)) return Qe(i), null;
        if (((o = (i.flags & 128) !== 0), (p = f.rendering), p === null))
          if (o) ks(f, !1);
          else {
            if (it !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = i.child; e !== null; ) {
                if (((p = Po(e)), p !== null)) {
                  for (
                    i.flags |= 128,
                      ks(f, !1),
                      e = p.updateQueue,
                      i.updateQueue = e,
                      _o(i, e),
                      i.subtreeFlags = 0,
                      e = s,
                      s = i.child;
                    s !== null;

                  )
                    Hm(s, e), (s = s.sibling);
                  return le(gt, (gt.current & 1) | 2), i.child;
                }
                e = e.sibling;
              }
            f.tail !== null &&
              Ye() > Bo &&
              ((i.flags |= 128), (o = !0), ks(f, !1), (i.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = Po(p)), e !== null)) {
              if (
                ((i.flags |= 128),
                (o = !0),
                (e = e.updateQueue),
                (i.updateQueue = e),
                _o(i, e),
                ks(f, !0),
                f.tail === null &&
                  f.tailMode === "hidden" &&
                  !p.alternate &&
                  !Le)
              )
                return Qe(i), null;
            } else
              2 * Ye() - f.renderingStartTime > Bo &&
                s !== 536870912 &&
                ((i.flags |= 128), (o = !0), ks(f, !1), (i.lanes = 4194304));
          f.isBackwards
            ? ((p.sibling = i.child), (i.child = p))
            : ((e = f.last),
              e !== null ? (e.sibling = p) : (i.child = p),
              (f.last = p));
        }
        return f.tail !== null
          ? ((i = f.tail),
            (f.rendering = i),
            (f.tail = i.sibling),
            (f.renderingStartTime = Ye()),
            (i.sibling = null),
            (e = gt.current),
            le(gt, o ? (e & 1) | 2 : e & 1),
            i)
          : (Qe(i), null);
      case 22:
      case 23:
        return (
          di(i),
          lf(),
          (o = i.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== o && (i.flags |= 8192)
            : o && (i.flags |= 8192),
          o
            ? (s & 536870912) !== 0 &&
              (i.flags & 128) === 0 &&
              (Qe(i), i.subtreeFlags & 6 && (i.flags |= 8192))
            : Qe(i),
          (s = i.updateQueue),
          s !== null && _o(i, s.retryQueue),
          (s = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          (o = null),
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
          o !== s && (i.flags |= 2048),
          e !== null && re(xa),
          null
        );
      case 24:
        return (
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          i.memoizedState.cache !== s && (i.flags |= 2048),
          ci(bt),
          Qe(i),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l(156, i.tag));
  }
  function V$(e, i) {
    switch ((Fc(i), i.tag)) {
      case 1:
        return (
          (e = i.flags), e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 3:
        return (
          ci(bt),
          me(),
          (e = i.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((i.flags = (e & -65537) | 128), i)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ae(i), null;
      case 13:
        if (
          (di(i), (e = i.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (i.alternate === null) throw Error(l(340));
          Es();
        }
        return (
          (e = i.flags), e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 19:
        return re(gt), null;
      case 4:
        return me(), null;
      case 10:
        return ci(i.type), null;
      case 22:
      case 23:
        return (
          di(i),
          lf(),
          e !== null && re(xa),
          (e = i.flags),
          e & 65536 ? ((i.flags = (e & -65537) | 128), i) : null
        );
      case 24:
        return ci(bt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function h0(e, i) {
    switch ((Fc(i), i.tag)) {
      case 3:
        ci(bt), me();
        break;
      case 26:
      case 27:
      case 5:
        ae(i);
        break;
      case 4:
        me();
        break;
      case 13:
        di(i);
        break;
      case 19:
        re(gt);
        break;
      case 10:
        ci(i.type);
        break;
      case 22:
      case 23:
        di(i), lf(), e !== null && re(xa);
        break;
      case 24:
        ci(bt);
    }
  }
  function Hs(e, i) {
    try {
      var s = i.updateQueue,
        o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        s = f;
        do {
          if ((s.tag & e) === e) {
            o = void 0;
            var p = s.create,
              y = s.inst;
            (o = p()), (y.destroy = o);
          }
          s = s.next;
        } while (s !== f);
      }
    } catch (E) {
      Ue(i, i.return, E);
    }
  }
  function ki(e, i, s) {
    try {
      var o = i.updateQueue,
        f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var p = f.next;
        o = p;
        do {
          if ((o.tag & e) === e) {
            var y = o.inst,
              E = y.destroy;
            if (E !== void 0) {
              (y.destroy = void 0), (f = i);
              var L = s,
                I = E;
              try {
                I();
              } catch (Q) {
                Ue(f, L, Q);
              }
            }
          }
          o = o.next;
        } while (o !== p);
      }
    } catch (Q) {
      Ue(i, i.return, Q);
    }
  }
  function p0(e) {
    var i = e.updateQueue;
    if (i !== null) {
      var s = e.stateNode;
      try {
        tv(i, s);
      } catch (o) {
        Ue(e, e.return, o);
      }
    }
  }
  function m0(e, i, s) {
    (s.props = $a(e.type, e.memoizedProps)), (s.state = e.memoizedState);
    try {
      s.componentWillUnmount();
    } catch (o) {
      Ue(e, i, o);
    }
  }
  function Us(e, i) {
    try {
      var s = e.ref;
      if (s !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof s == "function" ? (e.refCleanup = s(o)) : (s.current = o);
      }
    } catch (f) {
      Ue(e, i, f);
    }
  }
  function Yn(e, i) {
    var s = e.ref,
      o = e.refCleanup;
    if (s !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          Ue(e, i, f);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof s == "function")
        try {
          s(null);
        } catch (f) {
          Ue(e, i, f);
        }
      else s.current = null;
  }
  function v0(e) {
    var i = e.type,
      s = e.memoizedProps,
      o = e.stateNode;
    try {
      e: switch (i) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break e;
        case "img":
          s.src ? (o.src = s.src) : s.srcSet && (o.srcset = s.srcSet);
      }
    } catch (f) {
      Ue(e, e.return, f);
    }
  }
  function Of(e, i, s) {
    try {
      var o = e.stateNode;
      a2(o, e.type, s, i), (o[Ot] = i);
    } catch (f) {
      Ue(e, e.return, f);
    }
  }
  function b0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Yi(e.type)) ||
      e.tag === 4
    );
  }
  function Lf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || b0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && Yi(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _f(e, i, s) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        i
          ? (s.nodeType === 9
              ? s.body
              : s.nodeName === "HTML"
                ? s.ownerDocument.body
                : s
            ).insertBefore(e, i)
          : ((i =
              s.nodeType === 9
                ? s.body
                : s.nodeName === "HTML"
                  ? s.ownerDocument.body
                  : s),
            i.appendChild(e),
            (s = s._reactRootContainer),
            s != null || i.onclick !== null || (i.onclick = Yo));
    else if (
      o !== 4 &&
      (o === 27 && Yi(e.type) && ((s = e.stateNode), (i = null)),
      (e = e.child),
      e !== null)
    )
      for (_f(e, i, s), e = e.sibling; e !== null; )
        _f(e, i, s), (e = e.sibling);
  }
  function zo(e, i, s) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), i ? s.insertBefore(e, i) : s.appendChild(e);
    else if (
      o !== 4 &&
      (o === 27 && Yi(e.type) && (s = e.stateNode), (e = e.child), e !== null)
    )
      for (zo(e, i, s), e = e.sibling; e !== null; )
        zo(e, i, s), (e = e.sibling);
  }
  function g0(e) {
    var i = e.stateNode,
      s = e.memoizedProps;
    try {
      for (var o = e.type, f = i.attributes; f.length; )
        i.removeAttributeNode(f[0]);
      At(i, o, s), (i[vt] = e), (i[Ot] = s);
    } catch (p) {
      Ue(e, e.return, p);
    }
  }
  var mi = !1,
    rt = !1,
    zf = !1,
    y0 = typeof WeakSet == "function" ? WeakSet : Set,
    Et = null;
  function B$(e, i) {
    if (((e = e.containerInfo), (sd = eu), (e = Pm(e)), Oc(e))) {
      if ("selectionStart" in e)
        var s = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          s = ((s = e.ownerDocument) && s.defaultView) || window;
          var o = s.getSelection && s.getSelection();
          if (o && o.rangeCount !== 0) {
            s = o.anchorNode;
            var f = o.anchorOffset,
              p = o.focusNode;
            o = o.focusOffset;
            try {
              s.nodeType, p.nodeType;
            } catch {
              s = null;
              break e;
            }
            var y = 0,
              E = -1,
              L = -1,
              I = 0,
              Q = 0,
              ee = e,
              Y = null;
            t: for (;;) {
              for (
                var q;
                ee !== s || (f !== 0 && ee.nodeType !== 3) || (E = y + f),
                  ee !== p || (o !== 0 && ee.nodeType !== 3) || (L = y + o),
                  ee.nodeType === 3 && (y += ee.nodeValue.length),
                  (q = ee.firstChild) !== null;

              )
                (Y = ee), (ee = q);
              for (;;) {
                if (ee === e) break t;
                if (
                  (Y === s && ++I === f && (E = y),
                  Y === p && ++Q === o && (L = y),
                  (q = ee.nextSibling) !== null)
                )
                  break;
                (ee = Y), (Y = ee.parentNode);
              }
              ee = q;
            }
            s = E === -1 || L === -1 ? null : { start: E, end: L };
          } else s = null;
        }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (
      rd = { focusedElem: e, selectionRange: s }, eu = !1, Et = i;
      Et !== null;

    )
      if (
        ((i = Et), (e = i.child), (i.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = i), (Et = e);
      else
        for (; Et !== null; ) {
          switch (((i = Et), (p = i.alternate), (e = i.flags), i.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && p !== null) {
                (e = void 0),
                  (s = i),
                  (f = p.memoizedProps),
                  (p = p.memoizedState),
                  (o = s.stateNode);
                try {
                  var ye = $a(s.type, f, s.elementType === s.type);
                  (e = o.getSnapshotBeforeUpdate(ye, p)),
                    (o.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ve) {
                  Ue(s, s.return, ve);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = i.stateNode.containerInfo), (s = e.nodeType), s === 9)
                )
                  cd(e);
                else if (s === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(l(163));
          }
          if (((e = i.sibling), e !== null)) {
            (e.return = i.return), (Et = e);
            break;
          }
          Et = i.return;
        }
  }
  function S0(e, i, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        Hi(e, s), o & 4 && Hs(5, s);
        break;
      case 1:
        if ((Hi(e, s), o & 4))
          if (((e = s.stateNode), i === null))
            try {
              e.componentDidMount();
            } catch (y) {
              Ue(s, s.return, y);
            }
          else {
            var f = $a(s.type, i.memoizedProps);
            i = i.memoizedState;
            try {
              e.componentDidUpdate(f, i, e.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Ue(s, s.return, y);
            }
          }
        o & 64 && p0(s), o & 512 && Us(s, s.return);
        break;
      case 3:
        if ((Hi(e, s), o & 64 && ((e = s.updateQueue), e !== null))) {
          if (((i = null), s.child !== null))
            switch (s.child.tag) {
              case 27:
              case 5:
                i = s.child.stateNode;
                break;
              case 1:
                i = s.child.stateNode;
            }
          try {
            tv(e, i);
          } catch (y) {
            Ue(s, s.return, y);
          }
        }
        break;
      case 27:
        i === null && o & 4 && g0(s);
      case 26:
      case 5:
        Hi(e, s), i === null && o & 4 && v0(s), o & 512 && Us(s, s.return);
        break;
      case 12:
        Hi(e, s);
        break;
      case 13:
        Hi(e, s),
          o & 4 && E0(e, s),
          o & 64 &&
            ((e = s.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((s = Y$.bind(null, s)), f2(e, s))));
        break;
      case 22:
        if (((o = s.memoizedState !== null || mi), !o)) {
          (i = (i !== null && i.memoizedState !== null) || rt), (f = mi);
          var p = rt;
          (mi = o),
            (rt = i) && !p ? Ui(e, s, (s.subtreeFlags & 8772) !== 0) : Hi(e, s),
            (mi = f),
            (rt = p);
        }
        break;
      case 30:
        break;
      default:
        Hi(e, s);
    }
  }
  function T0(e) {
    var i = e.alternate;
    i !== null && ((e.alternate = null), T0(i)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((i = e.stateNode), i !== null && fs(i)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var qe = null,
    Yt = !1;
  function vi(e, i, s) {
    for (s = s.child; s !== null; ) x0(e, i, s), (s = s.sibling);
  }
  function x0(e, i, s) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(On, s);
      } catch {}
    switch (s.tag) {
      case 26:
        rt || Yn(s, i),
          vi(e, i, s),
          s.memoizedState
            ? s.memoizedState.count--
            : s.stateNode && ((s = s.stateNode), s.parentNode.removeChild(s));
        break;
      case 27:
        rt || Yn(s, i);
        var o = qe,
          f = Yt;
        Yi(s.type) && ((qe = s.stateNode), (Yt = !1)),
          vi(e, i, s),
          Zs(s.stateNode),
          (qe = o),
          (Yt = f);
        break;
      case 5:
        rt || Yn(s, i);
      case 6:
        if (
          ((o = qe),
          (f = Yt),
          (qe = null),
          vi(e, i, s),
          (qe = o),
          (Yt = f),
          qe !== null)
        )
          if (Yt)
            try {
              (qe.nodeType === 9
                ? qe.body
                : qe.nodeName === "HTML"
                  ? qe.ownerDocument.body
                  : qe
              ).removeChild(s.stateNode);
            } catch (p) {
              Ue(s, i, p);
            }
          else
            try {
              qe.removeChild(s.stateNode);
            } catch (p) {
              Ue(s, i, p);
            }
        break;
      case 18:
        qe !== null &&
          (Yt
            ? ((e = qe),
              cb(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                s.stateNode,
              ),
              ar(e))
            : cb(qe, s.stateNode));
        break;
      case 4:
        (o = qe),
          (f = Yt),
          (qe = s.stateNode.containerInfo),
          (Yt = !0),
          vi(e, i, s),
          (qe = o),
          (Yt = f);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        rt || ki(2, s, i), rt || ki(4, s, i), vi(e, i, s);
        break;
      case 1:
        rt ||
          (Yn(s, i),
          (o = s.stateNode),
          typeof o.componentWillUnmount == "function" && m0(s, i, o)),
          vi(e, i, s);
        break;
      case 21:
        vi(e, i, s);
        break;
      case 22:
        (rt = (o = rt) || s.memoizedState !== null), vi(e, i, s), (rt = o);
        break;
      default:
        vi(e, i, s);
    }
  }
  function E0(e, i) {
    if (
      i.memoizedState === null &&
      ((e = i.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ar(e);
      } catch (s) {
        Ue(i, i.return, s);
      }
  }
  function k$(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var i = e.stateNode;
        return i === null && (i = e.stateNode = new y0()), i;
      case 22:
        return (
          (e = e.stateNode),
          (i = e._retryCache),
          i === null && (i = e._retryCache = new y0()),
          i
        );
      default:
        throw Error(l(435, e.tag));
    }
  }
  function Vf(e, i) {
    var s = k$(e);
    i.forEach(function (o) {
      var f = q$.bind(null, e, o);
      s.has(o) || (s.add(o), o.then(f, f));
    });
  }
  function an(e, i) {
    var s = i.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var f = s[o],
          p = e,
          y = i,
          E = y;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
              if (Yi(E.type)) {
                (qe = E.stateNode), (Yt = !1);
                break e;
              }
              break;
            case 5:
              (qe = E.stateNode), (Yt = !1);
              break e;
            case 3:
            case 4:
              (qe = E.stateNode.containerInfo), (Yt = !0);
              break e;
          }
          E = E.return;
        }
        if (qe === null) throw Error(l(160));
        x0(p, y, f),
          (qe = null),
          (Yt = !1),
          (p = f.alternate),
          p !== null && (p.return = null),
          (f.return = null);
      }
    if (i.subtreeFlags & 13878)
      for (i = i.child; i !== null; ) $0(i, e), (i = i.sibling);
  }
  var zn = null;
  function $0(e, i) {
    var s = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        an(i, e),
          ln(e),
          o & 4 && (ki(3, e, e.return), Hs(3, e), ki(5, e, e.return));
        break;
      case 1:
        an(i, e),
          ln(e),
          o & 512 && (rt || s === null || Yn(s, s.return)),
          o & 64 &&
            mi &&
            ((e = e.updateQueue),
            e !== null &&
              ((o = e.callbacks),
              o !== null &&
                ((s = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = s === null ? o : s.concat(o)))));
        break;
      case 26:
        var f = zn;
        if (
          (an(i, e),
          ln(e),
          o & 512 && (rt || s === null || Yn(s, s.return)),
          o & 4)
        ) {
          var p = s !== null ? s.memoizedState : null;
          if (((o = e.memoizedState), s === null))
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  (o = e.type),
                    (s = e.memoizedProps),
                    (f = f.ownerDocument || f);
                  t: switch (o) {
                    case "title":
                      (p = f.getElementsByTagName("title")[0]),
                        (!p ||
                          p[ca] ||
                          p[vt] ||
                          p.namespaceURI === "http://www.w3.org/2000/svg" ||
                          p.hasAttribute("itemprop")) &&
                          ((p = f.createElement(o)),
                          f.head.insertBefore(
                            p,
                            f.querySelector("head > title"),
                          )),
                        At(p, o, s),
                        (p[vt] = e),
                        Tt(p),
                        (o = p);
                      break e;
                    case "link":
                      var y = gb("link", "href", f).get(o + (s.href || ""));
                      if (y) {
                        for (var E = 0; E < y.length; E++)
                          if (
                            ((p = y[E]),
                            p.getAttribute("href") ===
                              (s.href == null || s.href === ""
                                ? null
                                : s.href) &&
                              p.getAttribute("rel") ===
                                (s.rel == null ? null : s.rel) &&
                              p.getAttribute("title") ===
                                (s.title == null ? null : s.title) &&
                              p.getAttribute("crossorigin") ===
                                (s.crossOrigin == null ? null : s.crossOrigin))
                          ) {
                            y.splice(E, 1);
                            break t;
                          }
                      }
                      (p = f.createElement(o)),
                        At(p, o, s),
                        f.head.appendChild(p);
                      break;
                    case "meta":
                      if (
                        (y = gb("meta", "content", f).get(
                          o + (s.content || ""),
                        ))
                      ) {
                        for (E = 0; E < y.length; E++)
                          if (
                            ((p = y[E]),
                            p.getAttribute("content") ===
                              (s.content == null ? null : "" + s.content) &&
                              p.getAttribute("name") ===
                                (s.name == null ? null : s.name) &&
                              p.getAttribute("property") ===
                                (s.property == null ? null : s.property) &&
                              p.getAttribute("http-equiv") ===
                                (s.httpEquiv == null ? null : s.httpEquiv) &&
                              p.getAttribute("charset") ===
                                (s.charSet == null ? null : s.charSet))
                          ) {
                            y.splice(E, 1);
                            break t;
                          }
                      }
                      (p = f.createElement(o)),
                        At(p, o, s),
                        f.head.appendChild(p);
                      break;
                    default:
                      throw Error(l(468, o));
                  }
                  (p[vt] = e), Tt(p), (o = p);
                }
                e.stateNode = o;
              } else yb(f, e.type, e.stateNode);
            else e.stateNode = bb(f, o, e.memoizedProps);
          else
            p !== o
              ? (p === null
                  ? s.stateNode !== null &&
                    ((s = s.stateNode), s.parentNode.removeChild(s))
                  : p.count--,
                o === null
                  ? yb(f, e.type, e.stateNode)
                  : bb(f, o, e.memoizedProps))
              : o === null &&
                e.stateNode !== null &&
                Of(e, e.memoizedProps, s.memoizedProps);
        }
        break;
      case 27:
        an(i, e),
          ln(e),
          o & 512 && (rt || s === null || Yn(s, s.return)),
          s !== null && o & 4 && Of(e, e.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (
          (an(i, e),
          ln(e),
          o & 512 && (rt || s === null || Yn(s, s.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            Ja(f, "");
          } catch (q) {
            Ue(e, e.return, q);
          }
        }
        o & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), Of(e, f, s !== null ? s.memoizedProps : f)),
          o & 1024 && (zf = !0);
        break;
      case 6:
        if ((an(i, e), ln(e), o & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          (o = e.memoizedProps), (s = e.stateNode);
          try {
            s.nodeValue = o;
          } catch (q) {
            Ue(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Wo = null),
          (f = zn),
          (zn = Xo(i.containerInfo)),
          an(i, e),
          (zn = f),
          ln(e),
          o & 4 && s !== null && s.memoizedState.isDehydrated)
        )
          try {
            ar(i.containerInfo);
          } catch (q) {
            Ue(e, e.return, q);
          }
        zf && ((zf = !1), w0(e));
        break;
      case 4:
        (o = zn),
          (zn = Xo(e.stateNode.containerInfo)),
          an(i, e),
          ln(e),
          (zn = o);
        break;
      case 12:
        an(i, e), ln(e);
        break;
      case 13:
        an(i, e),
          ln(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (s !== null && s.memoizedState !== null) &&
            (jf = Ye()),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Vf(e, o)));
        break;
      case 22:
        f = e.memoizedState !== null;
        var L = s !== null && s.memoizedState !== null,
          I = mi,
          Q = rt;
        if (
          ((mi = I || f),
          (rt = Q || L),
          an(i, e),
          (rt = Q),
          (mi = I),
          ln(e),
          o & 8192)
        )
          e: for (
            i = e.stateNode,
              i._visibility = f ? i._visibility & -2 : i._visibility | 1,
              f && (s === null || L || mi || rt || wa(e)),
              s = null,
              i = e;
            ;

          ) {
            if (i.tag === 5 || i.tag === 26) {
              if (s === null) {
                L = s = i;
                try {
                  if (((p = L.stateNode), f))
                    (y = p.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none");
                  else {
                    E = L.stateNode;
                    var ee = L.memoizedProps.style,
                      Y =
                        ee != null && ee.hasOwnProperty("display")
                          ? ee.display
                          : null;
                    E.style.display =
                      Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (q) {
                  Ue(L, L.return, q);
                }
              }
            } else if (i.tag === 6) {
              if (s === null) {
                L = i;
                try {
                  L.stateNode.nodeValue = f ? "" : L.memoizedProps;
                } catch (q) {
                  Ue(L, L.return, q);
                }
              }
            } else if (
              ((i.tag !== 22 && i.tag !== 23) ||
                i.memoizedState === null ||
                i === e) &&
              i.child !== null
            ) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === e) break e;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === e) break e;
              s === i && (s = null), (i = i.return);
            }
            s === i && (s = null),
              (i.sibling.return = i.return),
              (i = i.sibling);
          }
        o & 4 &&
          ((o = e.updateQueue),
          o !== null &&
            ((s = o.retryQueue),
            s !== null && ((o.retryQueue = null), Vf(e, s))));
        break;
      case 19:
        an(i, e),
          ln(e),
          o & 4 &&
            ((o = e.updateQueue),
            o !== null && ((e.updateQueue = null), Vf(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        an(i, e), ln(e);
    }
  }
  function ln(e) {
    var i = e.flags;
    if (i & 2) {
      try {
        for (var s, o = e.return; o !== null; ) {
          if (b0(o)) {
            s = o;
            break;
          }
          o = o.return;
        }
        if (s == null) throw Error(l(160));
        switch (s.tag) {
          case 27:
            var f = s.stateNode,
              p = Lf(e);
            zo(e, p, f);
            break;
          case 5:
            var y = s.stateNode;
            s.flags & 32 && (Ja(y, ""), (s.flags &= -33));
            var E = Lf(e);
            zo(e, E, y);
            break;
          case 3:
          case 4:
            var L = s.stateNode.containerInfo,
              I = Lf(e);
            _f(e, I, L);
            break;
          default:
            throw Error(l(161));
        }
      } catch (Q) {
        Ue(e, e.return, Q);
      }
      e.flags &= -3;
    }
    i & 4096 && (e.flags &= -4097);
  }
  function w0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var i = e;
        w0(i),
          i.tag === 5 && i.flags & 1024 && i.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Hi(e, i) {
    if (i.subtreeFlags & 8772)
      for (i = i.child; i !== null; ) S0(e, i.alternate, i), (i = i.sibling);
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var i = e;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ki(4, i, i.return), wa(i);
          break;
        case 1:
          Yn(i, i.return);
          var s = i.stateNode;
          typeof s.componentWillUnmount == "function" && m0(i, i.return, s),
            wa(i);
          break;
        case 27:
          Zs(i.stateNode);
        case 26:
        case 5:
          Yn(i, i.return), wa(i);
          break;
        case 22:
          i.memoizedState === null && wa(i);
          break;
        case 30:
          wa(i);
          break;
        default:
          wa(i);
      }
      e = e.sibling;
    }
  }
  function Ui(e, i, s) {
    for (s = s && (i.subtreeFlags & 8772) !== 0, i = i.child; i !== null; ) {
      var o = i.alternate,
        f = e,
        p = i,
        y = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          Ui(f, p, s), Hs(4, p);
          break;
        case 1:
          if (
            (Ui(f, p, s),
            (o = p),
            (f = o.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (I) {
              Ue(o, o.return, I);
            }
          if (((o = p), (f = o.updateQueue), f !== null)) {
            var E = o.stateNode;
            try {
              var L = f.shared.hiddenCallbacks;
              if (L !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < L.length; f++)
                  ev(L[f], E);
            } catch (I) {
              Ue(o, o.return, I);
            }
          }
          s && y & 64 && p0(p), Us(p, p.return);
          break;
        case 27:
          g0(p);
        case 26:
        case 5:
          Ui(f, p, s), s && o === null && y & 4 && v0(p), Us(p, p.return);
          break;
        case 12:
          Ui(f, p, s);
          break;
        case 13:
          Ui(f, p, s), s && y & 4 && E0(f, p);
          break;
        case 22:
          p.memoizedState === null && Ui(f, p, s), Us(p, p.return);
          break;
        case 30:
          break;
        default:
          Ui(f, p, s);
      }
      i = i.sibling;
    }
  }
  function Bf(e, i) {
    var s = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (s = e.memoizedState.cachePool.pool),
      (e = null),
      i.memoizedState !== null &&
        i.memoizedState.cachePool !== null &&
        (e = i.memoizedState.cachePool.pool),
      e !== s && (e != null && e.refCount++, s != null && Cs(s));
  }
  function kf(e, i) {
    (e = null),
      i.alternate !== null && (e = i.alternate.memoizedState.cache),
      (i = i.memoizedState.cache),
      i !== e && (i.refCount++, e != null && Cs(e));
  }
  function qn(e, i, s, o) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) C0(e, i, s, o), (i = i.sibling);
  }
  function C0(e, i, s, o) {
    var f = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        qn(e, i, s, o), f & 2048 && Hs(9, i);
        break;
      case 1:
        qn(e, i, s, o);
        break;
      case 3:
        qn(e, i, s, o),
          f & 2048 &&
            ((e = null),
            i.alternate !== null && (e = i.alternate.memoizedState.cache),
            (i = i.memoizedState.cache),
            i !== e && (i.refCount++, e != null && Cs(e)));
        break;
      case 12:
        if (f & 2048) {
          qn(e, i, s, o), (e = i.stateNode);
          try {
            var p = i.memoizedProps,
              y = p.id,
              E = p.onPostCommit;
            typeof E == "function" &&
              E(
                y,
                i.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (L) {
            Ue(i, i.return, L);
          }
        } else qn(e, i, s, o);
        break;
      case 13:
        qn(e, i, s, o);
        break;
      case 23:
        break;
      case 22:
        (p = i.stateNode),
          (y = i.alternate),
          i.memoizedState !== null
            ? p._visibility & 2
              ? qn(e, i, s, o)
              : Ks(e, i)
            : p._visibility & 2
              ? qn(e, i, s, o)
              : ((p._visibility |= 2),
                gl(e, i, s, o, (i.subtreeFlags & 10256) !== 0)),
          f & 2048 && Bf(y, i);
        break;
      case 24:
        qn(e, i, s, o), f & 2048 && kf(i.alternate, i);
        break;
      default:
        qn(e, i, s, o);
    }
  }
  function gl(e, i, s, o, f) {
    for (f = f && (i.subtreeFlags & 10256) !== 0, i = i.child; i !== null; ) {
      var p = e,
        y = i,
        E = s,
        L = o,
        I = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          gl(p, y, E, L, f), Hs(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null
            ? Q._visibility & 2
              ? gl(p, y, E, L, f)
              : Ks(p, y)
            : ((Q._visibility |= 2), gl(p, y, E, L, f)),
            f && I & 2048 && Bf(y.alternate, y);
          break;
        case 24:
          gl(p, y, E, L, f), f && I & 2048 && kf(y.alternate, y);
          break;
        default:
          gl(p, y, E, L, f);
      }
      i = i.sibling;
    }
  }
  function Ks(e, i) {
    if (i.subtreeFlags & 10256)
      for (i = i.child; i !== null; ) {
        var s = e,
          o = i,
          f = o.flags;
        switch (o.tag) {
          case 22:
            Ks(s, o), f & 2048 && Bf(o.alternate, o);
            break;
          case 24:
            Ks(s, o), f & 2048 && kf(o.alternate, o);
            break;
          default:
            Ks(s, o);
        }
        i = i.sibling;
      }
  }
  var js = 8192;
  function yl(e) {
    if (e.subtreeFlags & js)
      for (e = e.child; e !== null; ) M0(e), (e = e.sibling);
  }
  function M0(e) {
    switch (e.tag) {
      case 26:
        yl(e),
          e.flags & js &&
            e.memoizedState !== null &&
            $2(zn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        yl(e);
        break;
      case 3:
      case 4:
        var i = zn;
        (zn = Xo(e.stateNode.containerInfo)), yl(e), (zn = i);
        break;
      case 22:
        e.memoizedState === null &&
          ((i = e.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = js), (js = 16777216), yl(e), (js = i))
            : yl(e));
        break;
      default:
        yl(e);
    }
  }
  function D0(e) {
    var i = e.alternate;
    if (i !== null && ((e = i.child), e !== null)) {
      i.child = null;
      do (i = e.sibling), (e.sibling = null), (e = i);
      while (e !== null);
    }
  }
  function Fs(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var s = 0; s < i.length; s++) {
          var o = i[s];
          (Et = o), P0(o, e);
        }
      D0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) A0(e), (e = e.sibling);
  }
  function A0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Fs(e), e.flags & 2048 && ki(9, e, e.return);
        break;
      case 3:
        Fs(e);
        break;
      case 12:
        Fs(e);
        break;
      case 22:
        var i = e.stateNode;
        e.memoizedState !== null &&
        i._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((i._visibility &= -3), Vo(e))
          : Fs(e);
        break;
      default:
        Fs(e);
    }
  }
  function Vo(e) {
    var i = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (i !== null)
        for (var s = 0; s < i.length; s++) {
          var o = i[s];
          (Et = o), P0(o, e);
        }
      D0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((i = e), i.tag)) {
        case 0:
        case 11:
        case 15:
          ki(8, i, i.return), Vo(i);
          break;
        case 22:
          (s = i.stateNode),
            s._visibility & 2 && ((s._visibility &= -3), Vo(i));
          break;
        default:
          Vo(i);
      }
      e = e.sibling;
    }
  }
  function P0(e, i) {
    for (; Et !== null; ) {
      var s = Et;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          ki(8, s, i);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Cs(s.memoizedState.cache);
      }
      if (((o = s.child), o !== null)) (o.return = s), (Et = o);
      else
        e: for (s = e; Et !== null; ) {
          o = Et;
          var f = o.sibling,
            p = o.return;
          if ((T0(o), o === s)) {
            Et = null;
            break e;
          }
          if (f !== null) {
            (f.return = p), (Et = f);
            break e;
          }
          Et = p;
        }
    }
  }
  var H$ = {
      getCacheForType: function (e) {
        var i = Lt(bt),
          s = i.data.get(e);
        return s === void 0 && ((s = e()), i.data.set(e, s)), s;
      },
    },
    U$ = typeof WeakMap == "function" ? WeakMap : Map,
    ze = 0,
    je = null,
    Ce = null,
    Ae = 0,
    Ve = 0,
    sn = null,
    Ki = !1,
    Sl = !1,
    Hf = !1,
    bi = 0,
    it = 0,
    ji = 0,
    Ca = 0,
    Uf = 0,
    Sn = 0,
    Tl = 0,
    Is = null,
    qt = null,
    Kf = !1,
    jf = 0,
    Bo = 1 / 0,
    ko = null,
    Fi = null,
    Dt = 0,
    Ii = null,
    xl = null,
    El = 0,
    Ff = 0,
    If = null,
    R0 = null,
    Gs = 0,
    Gf = null;
  function rn() {
    if ((ze & 2) !== 0 && Ae !== 0) return Ae & -Ae;
    if ($.T !== null) {
      var e = cl;
      return e !== 0 ? e : Jf();
    }
    return We();
  }
  function N0() {
    Sn === 0 && (Sn = (Ae & 536870912) === 0 || Le ? rs() : 536870912);
    var e = yn.current;
    return e !== null && (e.flags |= 32), Sn;
  }
  function on(e, i, s) {
    ((e === je && (Ve === 2 || Ve === 9)) || e.cancelPendingCommit !== null) &&
      ($l(e, 0), Gi(e, Ae, Sn, !1)),
      ua(e, s),
      ((ze & 2) === 0 || e !== je) &&
        (e === je &&
          ((ze & 2) === 0 && (Ca |= s), it === 4 && Gi(e, Ae, Sn, !1)),
        Xn(e));
  }
  function O0(e, i, s) {
    if ((ze & 6) !== 0) throw Error(l(327));
    var o = (!s && (i & 124) === 0 && (i & e.expiredLanes) === 0) || Ai(e, i),
      f = o ? F$(e, i) : Xf(e, i, !0),
      p = o;
    do {
      if (f === 0) {
        Sl && !o && Gi(e, i, 0, !1);
        break;
      } else {
        if (((s = e.current.alternate), p && !K$(s))) {
          (f = Xf(e, i, !1)), (p = !1);
          continue;
        }
        if (f === 2) {
          if (((p = i), e.errorRecoveryDisabledLanes & p)) var y = 0;
          else
            (y = e.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0);
          if (y !== 0) {
            i = y;
            e: {
              var E = e;
              f = Is;
              var L = E.current.memoizedState.isDehydrated;
              if ((L && ($l(E, y).flags |= 256), (y = Xf(E, y, !1)), y !== 2)) {
                if (Hf && !L) {
                  (E.errorRecoveryDisabledLanes |= p), (Ca |= p), (f = 4);
                  break e;
                }
                (p = qt),
                  (qt = f),
                  p !== null && (qt === null ? (qt = p) : qt.push.apply(qt, p));
              }
              f = y;
            }
            if (((p = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          $l(e, 0), Gi(e, i, 0, !0);
          break;
        }
        e: {
          switch (((o = e), (p = f), p)) {
            case 0:
            case 1:
              throw Error(l(345));
            case 4:
              if ((i & 4194048) !== i) break;
            case 6:
              Gi(o, i, Sn, !Ki);
              break e;
            case 2:
              qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(l(329));
          }
          if ((i & 62914560) === i && ((f = jf + 300 - Ye()), 10 < f)) {
            if ((Gi(o, i, Sn, !Ki), jn(o, 0, !0) !== 0)) break e;
            o.timeoutHandle = ob(
              L0.bind(null, o, s, qt, ko, Kf, i, Sn, Ca, Tl, Ki, p, 2, -0, 0),
              f,
            );
            break e;
          }
          L0(o, s, qt, ko, Kf, i, Sn, Ca, Tl, Ki, p, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Xn(e);
  }
  function L0(e, i, s, o, f, p, y, E, L, I, Q, ee, Y, q) {
    if (
      ((e.timeoutHandle = -1),
      (ee = i.subtreeFlags),
      (ee & 8192 || (ee & 16785408) === 16785408) &&
        ((Js = { stylesheets: null, count: 0, unsuspend: E2 }),
        M0(i),
        (ee = w2()),
        ee !== null))
    ) {
      (e.cancelPendingCommit = ee(
        U0.bind(null, e, i, p, s, o, f, y, E, L, Q, 1, Y, q),
      )),
        Gi(e, p, y, !I);
      return;
    }
    U0(e, i, p, s, o, f, y, E, L);
  }
  function K$(e) {
    for (var i = e; ; ) {
      var s = i.tag;
      if (
        (s === 0 || s === 11 || s === 15) &&
        i.flags & 16384 &&
        ((s = i.updateQueue), s !== null && ((s = s.stores), s !== null))
      )
        for (var o = 0; o < s.length; o++) {
          var f = s[o],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!tn(p(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((s = i.child), i.subtreeFlags & 16384 && s !== null))
        (s.return = i), (i = s);
      else {
        if (i === e) break;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e) return !0;
          i = i.return;
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    return !0;
  }
  function Gi(e, i, s, o) {
    (i &= ~Uf),
      (i &= ~Ca),
      (e.suspendedLanes |= i),
      (e.pingedLanes &= ~i),
      o && (e.warmLanes |= i),
      (o = e.expirationTimes);
    for (var f = i; 0 < f; ) {
      var p = 31 - St(f),
        y = 1 << p;
      (o[p] = -1), (f &= ~y);
    }
    s !== 0 && qr(e, s, i);
  }
  function Ho() {
    return (ze & 6) === 0 ? (Ys(0), !1) : !0;
  }
  function Yf() {
    if (Ce !== null) {
      if (Ve === 0) var e = Ce.return;
      else (e = Ce), (ui = Sa = null), cf(e), (vl = null), (Vs = 0), (e = Ce);
      for (; e !== null; ) h0(e.alternate, e), (e = e.return);
      Ce = null;
    }
  }
  function $l(e, i) {
    var s = e.timeoutHandle;
    s !== -1 && ((e.timeoutHandle = -1), s2(s)),
      (s = e.cancelPendingCommit),
      s !== null && ((e.cancelPendingCommit = null), s()),
      Yf(),
      (je = e),
      (Ce = s = si(e.current, null)),
      (Ae = i),
      (Ve = 0),
      (sn = null),
      (Ki = !1),
      (Sl = Ai(e, i)),
      (Hf = !1),
      (Tl = Sn = Uf = Ca = ji = it = 0),
      (qt = Is = null),
      (Kf = !1),
      (i & 8) !== 0 && (i |= i & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= i; 0 < o; ) {
        var f = 31 - St(o),
          p = 1 << f;
        (i |= e[f]), (o &= ~p);
      }
    return (bi = i), ro(), s;
  }
  function _0(e, i) {
    (Ee = null),
      ($.H = Mo),
      i === Ds || i === bo
        ? ((i = Qm()), (Ve = 3))
        : i === Xm
          ? ((i = Qm()), (Ve = 4))
          : (Ve =
              i === Jv
                ? 8
                : i !== null &&
                    typeof i == "object" &&
                    typeof i.then == "function"
                  ? 6
                  : 1),
      (sn = i),
      Ce === null && ((it = 1), No(e, mn(i, e.current)));
  }
  function z0() {
    var e = $.H;
    return ($.H = Mo), e === null ? Mo : e;
  }
  function V0() {
    var e = $.A;
    return ($.A = H$), e;
  }
  function qf() {
    (it = 4),
      Ki || ((Ae & 4194048) !== Ae && yn.current !== null) || (Sl = !0),
      ((ji & 134217727) === 0 && (Ca & 134217727) === 0) ||
        je === null ||
        Gi(je, Ae, Sn, !1);
  }
  function Xf(e, i, s) {
    var o = ze;
    ze |= 2;
    var f = z0(),
      p = V0();
    (je !== e || Ae !== i) && ((ko = null), $l(e, i)), (i = !1);
    var y = it;
    e: do
      try {
        if (Ve !== 0 && Ce !== null) {
          var E = Ce,
            L = sn;
          switch (Ve) {
            case 8:
              Yf(), (y = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              yn.current === null && (i = !0);
              var I = Ve;
              if (((Ve = 0), (sn = null), wl(e, E, L, I), s && Sl)) {
                y = 0;
                break e;
              }
              break;
            default:
              (I = Ve), (Ve = 0), (sn = null), wl(e, E, L, I);
          }
        }
        j$(), (y = it);
        break;
      } catch (Q) {
        _0(e, Q);
      }
    while (!0);
    return (
      i && e.shellSuspendCounter++,
      (ui = Sa = null),
      (ze = o),
      ($.H = f),
      ($.A = p),
      Ce === null && ((je = null), (Ae = 0), ro()),
      y
    );
  }
  function j$() {
    for (; Ce !== null; ) B0(Ce);
  }
  function F$(e, i) {
    var s = ze;
    ze |= 2;
    var o = z0(),
      f = V0();
    je !== e || Ae !== i
      ? ((ko = null), (Bo = Ye() + 500), $l(e, i))
      : (Sl = Ai(e, i));
    e: do
      try {
        if (Ve !== 0 && Ce !== null) {
          i = Ce;
          var p = sn;
          t: switch (Ve) {
            case 1:
              (Ve = 0), (sn = null), wl(e, i, p, 1);
              break;
            case 2:
            case 9:
              if (Zm(p)) {
                (Ve = 0), (sn = null), k0(i);
                break;
              }
              (i = function () {
                (Ve !== 2 && Ve !== 9) || je !== e || (Ve = 7), Xn(e);
              }),
                p.then(i, i);
              break e;
            case 3:
              Ve = 7;
              break e;
            case 4:
              Ve = 5;
              break e;
            case 7:
              Zm(p)
                ? ((Ve = 0), (sn = null), k0(i))
                : ((Ve = 0), (sn = null), wl(e, i, p, 7));
              break;
            case 5:
              var y = null;
              switch (Ce.tag) {
                case 26:
                  y = Ce.memoizedState;
                case 5:
                case 27:
                  var E = Ce;
                  if (!y || Sb(y)) {
                    (Ve = 0), (sn = null);
                    var L = E.sibling;
                    if (L !== null) Ce = L;
                    else {
                      var I = E.return;
                      I !== null ? ((Ce = I), Uo(I)) : (Ce = null);
                    }
                    break t;
                  }
              }
              (Ve = 0), (sn = null), wl(e, i, p, 5);
              break;
            case 6:
              (Ve = 0), (sn = null), wl(e, i, p, 6);
              break;
            case 8:
              Yf(), (it = 6);
              break e;
            default:
              throw Error(l(462));
          }
        }
        I$();
        break;
      } catch (Q) {
        _0(e, Q);
      }
    while (!0);
    return (
      (ui = Sa = null),
      ($.H = o),
      ($.A = f),
      (ze = s),
      Ce !== null ? 0 : ((je = null), (Ae = 0), ro(), it)
    );
  }
  function I$() {
    for (; Ce !== null && !yt(); ) B0(Ce);
  }
  function B0(e) {
    var i = f0(e.alternate, e, bi);
    (e.memoizedProps = e.pendingProps), i === null ? Uo(e) : (Ce = i);
  }
  function k0(e) {
    var i = e,
      s = i.alternate;
    switch (i.tag) {
      case 15:
      case 0:
        i = l0(s, i, i.pendingProps, i.type, void 0, Ae);
        break;
      case 11:
        i = l0(s, i, i.pendingProps, i.type.render, i.ref, Ae);
        break;
      case 5:
        cf(i);
      default:
        h0(s, i), (i = Ce = Hm(i, bi)), (i = f0(s, i, bi));
    }
    (e.memoizedProps = e.pendingProps), i === null ? Uo(e) : (Ce = i);
  }
  function wl(e, i, s, o) {
    (ui = Sa = null), cf(i), (vl = null), (Vs = 0);
    var f = i.return;
    try {
      if (L$(e, f, i, s, Ae)) {
        (it = 1), No(e, mn(s, e.current)), (Ce = null);
        return;
      }
    } catch (p) {
      if (f !== null) throw ((Ce = f), p);
      (it = 1), No(e, mn(s, e.current)), (Ce = null);
      return;
    }
    i.flags & 32768
      ? (Le || o === 1
          ? (e = !0)
          : Sl || (Ae & 536870912) !== 0
            ? (e = !1)
            : ((Ki = e = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = yn.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        H0(i, e))
      : Uo(i);
  }
  function Uo(e) {
    var i = e;
    do {
      if ((i.flags & 32768) !== 0) {
        H0(i, Ki);
        return;
      }
      e = i.return;
      var s = z$(i.alternate, i, bi);
      if (s !== null) {
        Ce = s;
        return;
      }
      if (((i = i.sibling), i !== null)) {
        Ce = i;
        return;
      }
      Ce = i = e;
    } while (i !== null);
    it === 0 && (it = 5);
  }
  function H0(e, i) {
    do {
      var s = V$(e.alternate, e);
      if (s !== null) {
        (s.flags &= 32767), (Ce = s);
        return;
      }
      if (
        ((s = e.return),
        s !== null &&
          ((s.flags |= 32768), (s.subtreeFlags = 0), (s.deletions = null)),
        !i && ((e = e.sibling), e !== null))
      ) {
        Ce = e;
        return;
      }
      Ce = e = s;
    } while (e !== null);
    (it = 6), (Ce = null);
  }
  function U0(e, i, s, o, f, p, y, E, L) {
    e.cancelPendingCommit = null;
    do Ko();
    while (Dt !== 0);
    if ((ze & 6) !== 0) throw Error(l(327));
    if (i !== null) {
      if (i === e.current) throw Error(l(177));
      if (
        ((p = i.lanes | i.childLanes),
        (p |= Bc),
        qa(e, s, p, y, E, L),
        e === je && ((Ce = je = null), (Ae = 0)),
        (xl = i),
        (Ii = e),
        (El = s),
        (Ff = p),
        (If = f),
        (R0 = o),
        (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            X$(Qt, function () {
              return G0(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (o = (i.flags & 13878) !== 0),
        (i.subtreeFlags & 13878) !== 0 || o)
      ) {
        (o = $.T), ($.T = null), (f = N.p), (N.p = 2), (y = ze), (ze |= 4);
        try {
          B$(e, i, s);
        } finally {
          (ze = y), (N.p = f), ($.T = o);
        }
      }
      (Dt = 1), K0(), j0(), F0();
    }
  }
  function K0() {
    if (Dt === 1) {
      Dt = 0;
      var e = Ii,
        i = xl,
        s = (i.flags & 13878) !== 0;
      if ((i.subtreeFlags & 13878) !== 0 || s) {
        (s = $.T), ($.T = null);
        var o = N.p;
        N.p = 2;
        var f = ze;
        ze |= 4;
        try {
          $0(i, e);
          var p = rd,
            y = Pm(e.containerInfo),
            E = p.focusedElem,
            L = p.selectionRange;
          if (
            y !== E &&
            E &&
            E.ownerDocument &&
            Am(E.ownerDocument.documentElement, E)
          ) {
            if (L !== null && Oc(E)) {
              var I = L.start,
                Q = L.end;
              if ((Q === void 0 && (Q = I), "selectionStart" in E))
                (E.selectionStart = I),
                  (E.selectionEnd = Math.min(Q, E.value.length));
              else {
                var ee = E.ownerDocument || document,
                  Y = (ee && ee.defaultView) || window;
                if (Y.getSelection) {
                  var q = Y.getSelection(),
                    ye = E.textContent.length,
                    ve = Math.min(L.start, ye),
                    He = L.end === void 0 ? ve : Math.min(L.end, ye);
                  !q.extend && ve > He && ((y = He), (He = ve), (ve = y));
                  var K = Dm(E, ve),
                    k = Dm(E, He);
                  if (
                    K &&
                    k &&
                    (q.rangeCount !== 1 ||
                      q.anchorNode !== K.node ||
                      q.anchorOffset !== K.offset ||
                      q.focusNode !== k.node ||
                      q.focusOffset !== k.offset)
                  ) {
                    var j = ee.createRange();
                    j.setStart(K.node, K.offset),
                      q.removeAllRanges(),
                      ve > He
                        ? (q.addRange(j), q.extend(k.node, k.offset))
                        : (j.setEnd(k.node, k.offset), q.addRange(j));
                  }
                }
              }
            }
            for (ee = [], q = E; (q = q.parentNode); )
              q.nodeType === 1 &&
                ee.push({ element: q, left: q.scrollLeft, top: q.scrollTop });
            for (
              typeof E.focus == "function" && E.focus(), E = 0;
              E < ee.length;
              E++
            ) {
              var J = ee[E];
              (J.element.scrollLeft = J.left), (J.element.scrollTop = J.top);
            }
          }
          (eu = !!sd), (rd = sd = null);
        } finally {
          (ze = f), (N.p = o), ($.T = s);
        }
      }
      (e.current = i), (Dt = 2);
    }
  }
  function j0() {
    if (Dt === 2) {
      Dt = 0;
      var e = Ii,
        i = xl,
        s = (i.flags & 8772) !== 0;
      if ((i.subtreeFlags & 8772) !== 0 || s) {
        (s = $.T), ($.T = null);
        var o = N.p;
        N.p = 2;
        var f = ze;
        ze |= 4;
        try {
          S0(e, i.alternate, i);
        } finally {
          (ze = f), (N.p = o), ($.T = s);
        }
      }
      Dt = 3;
    }
  }
  function F0() {
    if (Dt === 4 || Dt === 3) {
      (Dt = 0), fe();
      var e = Ii,
        i = xl,
        s = El,
        o = R0;
      (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0
        ? (Dt = 5)
        : ((Dt = 0), (xl = Ii = null), I0(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (
        (f === 0 && (Fi = null),
        us(s),
        (i = i.stateNode),
        tt && typeof tt.onCommitFiberRoot == "function")
      )
        try {
          tt.onCommitFiberRoot(On, i, void 0, (i.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        (i = $.T), (f = N.p), (N.p = 2), ($.T = null);
        try {
          for (var p = e.onRecoverableError, y = 0; y < o.length; y++) {
            var E = o[y];
            p(E.value, { componentStack: E.stack });
          }
        } finally {
          ($.T = i), (N.p = f);
        }
      }
      (El & 3) !== 0 && Ko(),
        Xn(e),
        (f = e.pendingLanes),
        (s & 4194090) !== 0 && (f & 42) !== 0
          ? e === Gf
            ? Gs++
            : ((Gs = 0), (Gf = e))
          : (Gs = 0),
        Ys(0);
    }
  }
  function I0(e, i) {
    (e.pooledCacheLanes &= i) === 0 &&
      ((i = e.pooledCache), i != null && ((e.pooledCache = null), Cs(i)));
  }
  function Ko(e) {
    return K0(), j0(), F0(), G0();
  }
  function G0() {
    if (Dt !== 5) return !1;
    var e = Ii,
      i = Ff;
    Ff = 0;
    var s = us(El),
      o = $.T,
      f = N.p;
    try {
      (N.p = 32 > s ? 32 : s), ($.T = null), (s = If), (If = null);
      var p = Ii,
        y = El;
      if (((Dt = 0), (xl = Ii = null), (El = 0), (ze & 6) !== 0))
        throw Error(l(331));
      var E = ze;
      if (
        ((ze |= 4),
        A0(p.current),
        C0(p, p.current, y, s),
        (ze = E),
        Ys(0, !1),
        tt && typeof tt.onPostCommitFiberRoot == "function")
      )
        try {
          tt.onPostCommitFiberRoot(On, p);
        } catch {}
      return !0;
    } finally {
      (N.p = f), ($.T = o), I0(e, i);
    }
  }
  function Y0(e, i, s) {
    (i = mn(s, i)),
      (i = $f(e.stateNode, i, 2)),
      (e = _i(e, i, 2)),
      e !== null && (ua(e, 2), Xn(e));
  }
  function Ue(e, i, s) {
    if (e.tag === 3) Y0(e, e, s);
    else
      for (; i !== null; ) {
        if (i.tag === 3) {
          Y0(i, e, s);
          break;
        } else if (i.tag === 1) {
          var o = i.stateNode;
          if (
            typeof i.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (Fi === null || !Fi.has(o)))
          ) {
            (e = mn(s, e)),
              (s = Wv(2)),
              (o = _i(i, s, 2)),
              o !== null && (Qv(s, o, i, e), ua(o, 2), Xn(o));
            break;
          }
        }
        i = i.return;
      }
  }
  function Zf(e, i, s) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new U$();
      var f = new Set();
      o.set(i, f);
    } else (f = o.get(i)), f === void 0 && ((f = new Set()), o.set(i, f));
    f.has(s) ||
      ((Hf = !0), f.add(s), (e = G$.bind(null, e, i, s)), i.then(e, e));
  }
  function G$(e, i, s) {
    var o = e.pingCache;
    o !== null && o.delete(i),
      (e.pingedLanes |= e.suspendedLanes & s),
      (e.warmLanes &= ~s),
      je === e &&
        (Ae & s) === s &&
        (it === 4 || (it === 3 && (Ae & 62914560) === Ae && 300 > Ye() - jf)
          ? (ze & 2) === 0 && $l(e, 0)
          : (Uf |= s),
        Tl === Ae && (Tl = 0)),
      Xn(e);
  }
  function q0(e, i) {
    i === 0 && (i = Ga()), (e = sl(e, i)), e !== null && (ua(e, i), Xn(e));
  }
  function Y$(e) {
    var i = e.memoizedState,
      s = 0;
    i !== null && (s = i.retryLane), q0(e, s);
  }
  function q$(e, i) {
    var s = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          f = e.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(l(314));
    }
    o !== null && o.delete(i), q0(e, s);
  }
  function X$(e, i) {
    return we(e, i);
  }
  var jo = null,
    Cl = null,
    Wf = !1,
    Fo = !1,
    Qf = !1,
    Ma = 0;
  function Xn(e) {
    e !== Cl &&
      e.next === null &&
      (Cl === null ? (jo = Cl = e) : (Cl = Cl.next = e)),
      (Fo = !0),
      Wf || ((Wf = !0), W$());
  }
  function Ys(e, i) {
    if (!Qf && Fo) {
      Qf = !0;
      do
        for (var s = !1, o = jo; o !== null; ) {
          if (e !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var p = 0;
            else {
              var y = o.suspendedLanes,
                E = o.pingedLanes;
              (p = (1 << (31 - St(42 | e) + 1)) - 1),
                (p &= f & ~(y & ~E)),
                (p = p & 201326741 ? (p & 201326741) | 1 : p ? p | 2 : 0);
            }
            p !== 0 && ((s = !0), Q0(o, p));
          } else
            (p = Ae),
              (p = jn(
                o,
                o === je ? p : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (p & 3) === 0 || Ai(o, p) || ((s = !0), Q0(o, p));
          o = o.next;
        }
      while (s);
      Qf = !1;
    }
  }
  function Z$() {
    X0();
  }
  function X0() {
    Fo = Wf = !1;
    var e = 0;
    Ma !== 0 && (l2() && (e = Ma), (Ma = 0));
    for (var i = Ye(), s = null, o = jo; o !== null; ) {
      var f = o.next,
        p = Z0(o, i);
      p === 0
        ? ((o.next = null),
          s === null ? (jo = f) : (s.next = f),
          f === null && (Cl = s))
        : ((s = o), (e !== 0 || (p & 3) !== 0) && (Fo = !0)),
        (o = f);
    }
    Ys(e);
  }
  function Z0(e, i) {
    for (
      var s = e.suspendedLanes,
        o = e.pingedLanes,
        f = e.expirationTimes,
        p = e.pendingLanes & -62914561;
      0 < p;

    ) {
      var y = 31 - St(p),
        E = 1 << y,
        L = f[y];
      L === -1
        ? ((E & s) === 0 || (E & o) !== 0) && (f[y] = ii(E, i))
        : L <= i && (e.expiredLanes |= E),
        (p &= ~E);
    }
    if (
      ((i = je),
      (s = Ae),
      (s = jn(
        e,
        e === i ? s : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (o = e.callbackNode),
      s === 0 ||
        (e === i && (Ve === 2 || Ve === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && Ie(o),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((s & 3) === 0 || Ai(e, s)) {
      if (((i = s & -s), i === e.callbackPriority)) return i;
      switch ((o !== null && Ie(o), us(s))) {
        case 2:
        case 8:
          s = ct;
          break;
        case 32:
          s = Qt;
          break;
        case 268435456:
          s = Nn;
          break;
        default:
          s = Qt;
      }
      return (
        (o = W0.bind(null, e)),
        (s = we(s, o)),
        (e.callbackPriority = i),
        (e.callbackNode = s),
        i
      );
    }
    return (
      o !== null && o !== null && Ie(o),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function W0(e, i) {
    if (Dt !== 0 && Dt !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var s = e.callbackNode;
    if (Ko() && e.callbackNode !== s) return null;
    var o = Ae;
    return (
      (o = jn(
        e,
        e === je ? o : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (O0(e, o, i),
          Z0(e, Ye()),
          e.callbackNode != null && e.callbackNode === s
            ? W0.bind(null, e)
            : null)
    );
  }
  function Q0(e, i) {
    if (Ko()) return null;
    O0(e, i, !0);
  }
  function W$() {
    r2(function () {
      (ze & 6) !== 0 ? we(Rn, Z$) : X0();
    });
  }
  function Jf() {
    return Ma === 0 && (Ma = rs()), Ma;
  }
  function J0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : eo("" + e);
  }
  function eb(e, i) {
    var s = i.ownerDocument.createElement("input");
    return (
      (s.name = i.name),
      (s.value = i.value),
      e.id && s.setAttribute("form", e.id),
      i.parentNode.insertBefore(s, i),
      (e = new FormData(e)),
      s.parentNode.removeChild(s),
      e
    );
  }
  function Q$(e, i, s, o, f) {
    if (i === "submit" && s && s.stateNode === f) {
      var p = J0((f[Ot] || null).action),
        y = o.submitter;
      y &&
        ((i = (i = y[Ot] || null)
          ? J0(i.formAction)
          : y.getAttribute("formAction")),
        i !== null && ((p = i), (y = null)));
      var E = new ao("action", "action", null, o, f);
      e.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (Ma !== 0) {
                  var L = y ? eb(f, y) : new FormData(f);
                  yf(
                    s,
                    { pending: !0, data: L, method: f.method, action: p },
                    null,
                    L,
                  );
                }
              } else
                typeof p == "function" &&
                  (E.preventDefault(),
                  (L = y ? eb(f, y) : new FormData(f)),
                  yf(
                    s,
                    { pending: !0, data: L, method: f.method, action: p },
                    p,
                    L,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var ed = 0; ed < Vc.length; ed++) {
    var td = Vc[ed],
      J$ = td.toLowerCase(),
      e2 = td[0].toUpperCase() + td.slice(1);
    _n(J$, "on" + e2);
  }
  _n(Om, "onAnimationEnd"),
    _n(Lm, "onAnimationIteration"),
    _n(_m, "onAnimationStart"),
    _n("dblclick", "onDoubleClick"),
    _n("focusin", "onFocus"),
    _n("focusout", "onBlur"),
    _n(b$, "onTransitionRun"),
    _n(g$, "onTransitionStart"),
    _n(y$, "onTransitionCancel"),
    _n(zm, "onTransitionEnd"),
    Za("onMouseEnter", ["mouseout", "mouseover"]),
    Za("onMouseLeave", ["mouseout", "mouseover"]),
    Za("onPointerEnter", ["pointerout", "pointerover"]),
    Za("onPointerLeave", ["pointerout", "pointerover"]),
    fa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    fa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    fa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    fa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    fa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var qs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    t2 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(qs),
    );
  function tb(e, i) {
    i = (i & 4) !== 0;
    for (var s = 0; s < e.length; s++) {
      var o = e[s],
        f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (i)
          for (var y = o.length - 1; 0 <= y; y--) {
            var E = o[y],
              L = E.instance,
              I = E.currentTarget;
            if (((E = E.listener), L !== p && f.isPropagationStopped()))
              break e;
            (p = E), (f.currentTarget = I);
            try {
              p(f);
            } catch (Q) {
              Ro(Q);
            }
            (f.currentTarget = null), (p = L);
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((E = o[y]),
              (L = E.instance),
              (I = E.currentTarget),
              (E = E.listener),
              L !== p && f.isPropagationStopped())
            )
              break e;
            (p = E), (f.currentTarget = I);
            try {
              p(f);
            } catch (Q) {
              Ro(Q);
            }
            (f.currentTarget = null), (p = L);
          }
      }
    }
  }
  function Me(e, i) {
    var s = i[cs];
    s === void 0 && (s = i[cs] = new Set());
    var o = e + "__bubble";
    s.has(o) || (nb(i, e, 2, !1), s.add(o));
  }
  function nd(e, i, s) {
    var o = 0;
    i && (o |= 4), nb(s, e, o, i);
  }
  var Io = "_reactListening" + Math.random().toString(36).slice(2);
  function id(e) {
    if (!e[Io]) {
      (e[Io] = !0),
        Xp.forEach(function (s) {
          s !== "selectionchange" && (t2.has(s) || nd(s, !1, e), nd(s, !0, e));
        });
      var i = e.nodeType === 9 ? e : e.ownerDocument;
      i === null || i[Io] || ((i[Io] = !0), nd("selectionchange", !1, i));
    }
  }
  function nb(e, i, s, o) {
    switch (Cb(i)) {
      case 2:
        var f = D2;
        break;
      case 8:
        f = A2;
        break;
      default:
        f = bd;
    }
    (s = f.bind(null, i, s, e)),
      (f = void 0),
      !$c ||
        (i !== "touchstart" && i !== "touchmove" && i !== "wheel") ||
        (f = !0),
      o
        ? f !== void 0
          ? e.addEventListener(i, s, { capture: !0, passive: f })
          : e.addEventListener(i, s, !0)
        : f !== void 0
          ? e.addEventListener(i, s, { passive: f })
          : e.addEventListener(i, s, !1);
  }
  function ad(e, i, s, o, f) {
    var p = o;
    if ((i & 1) === 0 && (i & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var E = o.stateNode.containerInfo;
          if (E === f) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var L = y.tag;
              if ((L === 3 || L === 4) && y.stateNode.containerInfo === f)
                return;
              y = y.return;
            }
          for (; E !== null; ) {
            if (((y = ge(E)), y === null)) return;
            if (((L = y.tag), L === 5 || L === 6 || L === 26 || L === 27)) {
              o = p = y;
              continue e;
            }
            E = E.parentNode;
          }
        }
        o = o.return;
      }
    um(function () {
      var I = p,
        Q = xc(s),
        ee = [];
      e: {
        var Y = Vm.get(e);
        if (Y !== void 0) {
          var q = ao,
            ye = e;
          switch (e) {
            case "keypress":
              if (no(s) === 0) break e;
            case "keydown":
            case "keyup":
              q = XE;
              break;
            case "focusin":
              (ye = "focus"), (q = Dc);
              break;
            case "focusout":
              (ye = "blur"), (q = Dc);
              break;
            case "beforeblur":
            case "afterblur":
              q = Dc;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = dm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = VE;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = QE;
              break;
            case Om:
            case Lm:
            case _m:
              q = HE;
              break;
            case zm:
              q = e$;
              break;
            case "scroll":
            case "scrollend":
              q = _E;
              break;
            case "wheel":
              q = n$;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = KE;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = pm;
              break;
            case "toggle":
            case "beforetoggle":
              q = a$;
          }
          var ve = (i & 4) !== 0,
            He = !ve && (e === "scroll" || e === "scrollend"),
            K = ve ? (Y !== null ? Y + "Capture" : null) : Y;
          ve = [];
          for (var k = I, j; k !== null; ) {
            var J = k;
            if (
              ((j = J.stateNode),
              (J = J.tag),
              (J !== 5 && J !== 26 && J !== 27) ||
                j === null ||
                K === null ||
                ((J = hs(k, K)), J != null && ve.push(Xs(k, J, j))),
              He)
            )
              break;
            k = k.return;
          }
          0 < ve.length &&
            ((Y = new q(Y, ye, null, s, Q)),
            ee.push({ event: Y, listeners: ve }));
        }
      }
      if ((i & 7) === 0) {
        e: {
          if (
            ((Y = e === "mouseover" || e === "pointerover"),
            (q = e === "mouseout" || e === "pointerout"),
            Y &&
              s !== Tc &&
              (ye = s.relatedTarget || s.fromElement) &&
              (ge(ye) || ye[Pi]))
          )
            break e;
          if (
            (q || Y) &&
            ((Y =
              Q.window === Q
                ? Q
                : (Y = Q.ownerDocument)
                  ? Y.defaultView || Y.parentWindow
                  : window),
            q
              ? ((ye = s.relatedTarget || s.toElement),
                (q = I),
                (ye = ye ? ge(ye) : null),
                ye !== null &&
                  ((He = u(ye)),
                  (ve = ye.tag),
                  ye !== He || (ve !== 5 && ve !== 27 && ve !== 6)) &&
                  (ye = null))
              : ((q = null), (ye = I)),
            q !== ye)
          ) {
            if (
              ((ve = dm),
              (J = "onMouseLeave"),
              (K = "onMouseEnter"),
              (k = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ve = pm),
                (J = "onPointerLeave"),
                (K = "onPointerEnter"),
                (k = "pointer")),
              (He = q == null ? Y : ds(q)),
              (j = ye == null ? Y : ds(ye)),
              (Y = new ve(J, k + "leave", q, s, Q)),
              (Y.target = He),
              (Y.relatedTarget = j),
              (J = null),
              ge(Q) === I &&
                ((ve = new ve(K, k + "enter", ye, s, Q)),
                (ve.target = j),
                (ve.relatedTarget = He),
                (J = ve)),
              (He = J),
              q && ye)
            )
              t: {
                for (ve = q, K = ye, k = 0, j = ve; j; j = Ml(j)) k++;
                for (j = 0, J = K; J; J = Ml(J)) j++;
                for (; 0 < k - j; ) (ve = Ml(ve)), k--;
                for (; 0 < j - k; ) (K = Ml(K)), j--;
                for (; k--; ) {
                  if (ve === K || (K !== null && ve === K.alternate)) break t;
                  (ve = Ml(ve)), (K = Ml(K));
                }
                ve = null;
              }
            else ve = null;
            q !== null && ib(ee, Y, q, ve, !1),
              ye !== null && He !== null && ib(ee, He, ye, ve, !0);
          }
        }
        e: {
          if (
            ((Y = I ? ds(I) : window),
            (q = Y.nodeName && Y.nodeName.toLowerCase()),
            q === "select" || (q === "input" && Y.type === "file"))
          )
            var ue = xm;
          else if (Sm(Y))
            if (Em) ue = p$;
            else {
              ue = d$;
              var $e = f$;
            }
          else
            (q = Y.nodeName),
              !q ||
              q.toLowerCase() !== "input" ||
              (Y.type !== "checkbox" && Y.type !== "radio")
                ? I && Sc(I.elementType) && (ue = xm)
                : (ue = h$);
          if (ue && (ue = ue(e, I))) {
            Tm(ee, ue, s, Q);
            break e;
          }
          $e && $e(e, Y, I),
            e === "focusout" &&
              I &&
              Y.type === "number" &&
              I.memoizedProps.value != null &&
              yc(Y, "number", Y.value);
        }
        switch ((($e = I ? ds(I) : window), e)) {
          case "focusin":
            (Sm($e) || $e.contentEditable === "true") &&
              ((il = $e), (Lc = I), (Ts = null));
            break;
          case "focusout":
            Ts = Lc = il = null;
            break;
          case "mousedown":
            _c = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_c = !1), Rm(ee, s, Q);
            break;
          case "selectionchange":
            if (v$) break;
          case "keydown":
          case "keyup":
            Rm(ee, s, Q);
        }
        var he;
        if (Pc)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          nl
            ? gm(e, s) && (be = "onCompositionEnd")
            : e === "keydown" &&
              s.keyCode === 229 &&
              (be = "onCompositionStart");
        be &&
          (mm &&
            s.locale !== "ko" &&
            (nl || be !== "onCompositionStart"
              ? be === "onCompositionEnd" && nl && (he = cm())
              : ((Ri = Q),
                (wc = "value" in Ri ? Ri.value : Ri.textContent),
                (nl = !0))),
          ($e = Go(I, be)),
          0 < $e.length &&
            ((be = new hm(be, e, null, s, Q)),
            ee.push({ event: be, listeners: $e }),
            he
              ? (be.data = he)
              : ((he = ym(s)), he !== null && (be.data = he)))),
          (he = s$ ? r$(e, s) : o$(e, s)) &&
            ((be = Go(I, "onBeforeInput")),
            0 < be.length &&
              (($e = new hm("onBeforeInput", "beforeinput", null, s, Q)),
              ee.push({ event: $e, listeners: be }),
              ($e.data = he))),
          Q$(ee, e, I, s, Q);
      }
      tb(ee, i);
    });
  }
  function Xs(e, i, s) {
    return { instance: e, listener: i, currentTarget: s };
  }
  function Go(e, i) {
    for (var s = i + "Capture", o = []; e !== null; ) {
      var f = e,
        p = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          p === null ||
          ((f = hs(e, s)),
          f != null && o.unshift(Xs(e, f, p)),
          (f = hs(e, i)),
          f != null && o.push(Xs(e, f, p))),
        e.tag === 3)
      )
        return o;
      e = e.return;
    }
    return [];
  }
  function Ml(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ib(e, i, s, o, f) {
    for (var p = i._reactName, y = []; s !== null && s !== o; ) {
      var E = s,
        L = E.alternate,
        I = E.stateNode;
      if (((E = E.tag), L !== null && L === o)) break;
      (E !== 5 && E !== 26 && E !== 27) ||
        I === null ||
        ((L = I),
        f
          ? ((I = hs(s, p)), I != null && y.unshift(Xs(s, I, L)))
          : f || ((I = hs(s, p)), I != null && y.push(Xs(s, I, L)))),
        (s = s.return);
    }
    y.length !== 0 && e.push({ event: i, listeners: y });
  }
  var n2 = /\r\n?/g,
    i2 = /\u0000|\uFFFD/g;
  function ab(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        n2,
        `
`,
      )
      .replace(i2, "");
  }
  function lb(e, i) {
    return (i = ab(i)), ab(e) === i;
  }
  function Yo() {}
  function ke(e, i, s, o, f, p) {
    switch (s) {
      case "children":
        typeof o == "string"
          ? i === "body" || (i === "textarea" && o === "") || Ja(e, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            i !== "body" &&
            Ja(e, "" + o);
        break;
      case "className":
        Wr(e, "class", o);
        break;
      case "tabIndex":
        Wr(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Wr(e, s, o);
        break;
      case "style":
        rm(e, o, p);
        break;
      case "data":
        if (i !== "object") {
          Wr(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (i !== "a" || s !== "href")) {
          e.removeAttribute(s);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          e.removeAttribute(s);
          break;
        }
        (o = eo("" + o)), e.setAttribute(s, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            s,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof p == "function" &&
            (s === "formAction"
              ? (i !== "input" && ke(e, i, "name", f.name, f, null),
                ke(e, i, "formEncType", f.formEncType, f, null),
                ke(e, i, "formMethod", f.formMethod, f, null),
                ke(e, i, "formTarget", f.formTarget, f, null))
              : (ke(e, i, "encType", f.encType, f, null),
                ke(e, i, "method", f.method, f, null),
                ke(e, i, "target", f.target, f, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(s);
          break;
        }
        (o = eo("" + o)), e.setAttribute(s, o);
        break;
      case "onClick":
        o != null && (e.onclick = Yo);
        break;
      case "onScroll":
        o != null && Me("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((s = o.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = s;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (s = eo("" + o)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(s, "" + o)
          : e.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? e.setAttribute(s, "")
          : e.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0
          ? e.setAttribute(s, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? e.setAttribute(s, o)
            : e.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? e.setAttribute(s, o)
          : e.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? e.removeAttribute(s)
          : e.setAttribute(s, o);
        break;
      case "popover":
        Me("beforetoggle", e), Me("toggle", e), Zr(e, "popover", o);
        break;
      case "xlinkActuate":
        ai(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        ai(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        ai(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        ai(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        ai(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        ai(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        ai(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        ai(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        ai(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Zr(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) ||
          (s[0] !== "o" && s[0] !== "O") ||
          (s[1] !== "n" && s[1] !== "N")) &&
          ((s = OE.get(s) || s), Zr(e, s, o));
    }
  }
  function ld(e, i, s, o, f, p) {
    switch (s) {
      case "style":
        rm(e, o, p);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(l(61));
          if (((s = o.__html), s != null)) {
            if (f.children != null) throw Error(l(60));
            e.innerHTML = s;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? Ja(e, o)
          : (typeof o == "number" || typeof o == "bigint") && Ja(e, "" + o);
        break;
      case "onScroll":
        o != null && Me("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Me("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = Yo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zp.hasOwnProperty(s))
          e: {
            if (
              s[0] === "o" &&
              s[1] === "n" &&
              ((f = s.endsWith("Capture")),
              (i = s.slice(2, f ? s.length - 7 : void 0)),
              (p = e[Ot] || null),
              (p = p != null ? p[s] : null),
              typeof p == "function" && e.removeEventListener(i, p, f),
              typeof o == "function")
            ) {
              typeof p != "function" &&
                p !== null &&
                (s in e
                  ? (e[s] = null)
                  : e.hasAttribute(s) && e.removeAttribute(s)),
                e.addEventListener(i, o, f);
              break e;
            }
            s in e
              ? (e[s] = o)
              : o === !0
                ? e.setAttribute(s, "")
                : Zr(e, s, o);
          }
    }
  }
  function At(e, i, s) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Me("error", e), Me("load", e);
        var o = !1,
          f = !1,
          p;
        for (p in s)
          if (s.hasOwnProperty(p)) {
            var y = s[p];
            if (y != null)
              switch (p) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(l(137, i));
                default:
                  ke(e, i, p, y, s, null);
              }
          }
        f && ke(e, i, "srcSet", s.srcSet, s, null),
          o && ke(e, i, "src", s.src, s, null);
        return;
      case "input":
        Me("invalid", e);
        var E = (p = y = f = null),
          L = null,
          I = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var Q = s[o];
            if (Q != null)
              switch (o) {
                case "name":
                  f = Q;
                  break;
                case "type":
                  y = Q;
                  break;
                case "checked":
                  L = Q;
                  break;
                case "defaultChecked":
                  I = Q;
                  break;
                case "value":
                  p = Q;
                  break;
                case "defaultValue":
                  E = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null) throw Error(l(137, i));
                  break;
                default:
                  ke(e, i, o, Q, s, null);
              }
          }
        im(e, p, E, L, I, y, f, !1), Qr(e);
        return;
      case "select":
        Me("invalid", e), (o = y = p = null);
        for (f in s)
          if (s.hasOwnProperty(f) && ((E = s[f]), E != null))
            switch (f) {
              case "value":
                p = E;
                break;
              case "defaultValue":
                y = E;
                break;
              case "multiple":
                o = E;
              default:
                ke(e, i, f, E, s, null);
            }
        (i = p),
          (s = y),
          (e.multiple = !!o),
          i != null ? Qa(e, !!o, i, !1) : s != null && Qa(e, !!o, s, !0);
        return;
      case "textarea":
        Me("invalid", e), (p = f = o = null);
        for (y in s)
          if (s.hasOwnProperty(y) && ((E = s[y]), E != null))
            switch (y) {
              case "value":
                o = E;
                break;
              case "defaultValue":
                f = E;
                break;
              case "children":
                p = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(l(91));
                break;
              default:
                ke(e, i, y, E, s, null);
            }
        lm(e, o, f, p), Qr(e);
        return;
      case "option":
        for (L in s)
          if (s.hasOwnProperty(L) && ((o = s[L]), o != null))
            switch (L) {
              case "selected":
                e.selected =
                  o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ke(e, i, L, o, s, null);
            }
        return;
      case "dialog":
        Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
        break;
      case "iframe":
      case "object":
        Me("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < qs.length; o++) Me(qs[o], e);
        break;
      case "image":
        Me("error", e), Me("load", e);
        break;
      case "details":
        Me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Me("error", e), Me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (I in s)
          if (s.hasOwnProperty(I) && ((o = s[I]), o != null))
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(l(137, i));
              default:
                ke(e, i, I, o, s, null);
            }
        return;
      default:
        if (Sc(i)) {
          for (Q in s)
            s.hasOwnProperty(Q) &&
              ((o = s[Q]), o !== void 0 && ld(e, i, Q, o, s, void 0));
          return;
        }
    }
    for (E in s)
      s.hasOwnProperty(E) && ((o = s[E]), o != null && ke(e, i, E, o, s, null));
  }
  function a2(e, i, s, o) {
    switch (i) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          p = null,
          y = null,
          E = null,
          L = null,
          I = null,
          Q = null;
        for (q in s) {
          var ee = s[q];
          if (s.hasOwnProperty(q) && ee != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                L = ee;
              default:
                o.hasOwnProperty(q) || ke(e, i, q, null, o, ee);
            }
        }
        for (var Y in o) {
          var q = o[Y];
          if (((ee = s[Y]), o.hasOwnProperty(Y) && (q != null || ee != null)))
            switch (Y) {
              case "type":
                p = q;
                break;
              case "name":
                f = q;
                break;
              case "checked":
                I = q;
                break;
              case "defaultChecked":
                Q = q;
                break;
              case "value":
                y = q;
                break;
              case "defaultValue":
                E = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(l(137, i));
                break;
              default:
                q !== ee && ke(e, i, Y, q, o, ee);
            }
        }
        gc(e, y, E, L, I, Q, p, f);
        return;
      case "select":
        q = y = E = Y = null;
        for (p in s)
          if (((L = s[p]), s.hasOwnProperty(p) && L != null))
            switch (p) {
              case "value":
                break;
              case "multiple":
                q = L;
              default:
                o.hasOwnProperty(p) || ke(e, i, p, null, o, L);
            }
        for (f in o)
          if (
            ((p = o[f]),
            (L = s[f]),
            o.hasOwnProperty(f) && (p != null || L != null))
          )
            switch (f) {
              case "value":
                Y = p;
                break;
              case "defaultValue":
                E = p;
                break;
              case "multiple":
                y = p;
              default:
                p !== L && ke(e, i, f, p, o, L);
            }
        (i = E),
          (s = y),
          (o = q),
          Y != null
            ? Qa(e, !!s, Y, !1)
            : !!o != !!s &&
              (i != null ? Qa(e, !!s, i, !0) : Qa(e, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        q = Y = null;
        for (E in s)
          if (
            ((f = s[E]),
            s.hasOwnProperty(E) && f != null && !o.hasOwnProperty(E))
          )
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                ke(e, i, E, null, o, f);
            }
        for (y in o)
          if (
            ((f = o[y]),
            (p = s[y]),
            o.hasOwnProperty(y) && (f != null || p != null))
          )
            switch (y) {
              case "value":
                Y = f;
                break;
              case "defaultValue":
                q = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(l(91));
                break;
              default:
                f !== p && ke(e, i, y, f, o, p);
            }
        am(e, Y, q);
        return;
      case "option":
        for (var ye in s)
          if (
            ((Y = s[ye]),
            s.hasOwnProperty(ye) && Y != null && !o.hasOwnProperty(ye))
          )
            switch (ye) {
              case "selected":
                e.selected = !1;
                break;
              default:
                ke(e, i, ye, null, o, Y);
            }
        for (L in o)
          if (
            ((Y = o[L]),
            (q = s[L]),
            o.hasOwnProperty(L) && Y !== q && (Y != null || q != null))
          )
            switch (L) {
              case "selected":
                e.selected =
                  Y && typeof Y != "function" && typeof Y != "symbol";
                break;
              default:
                ke(e, i, L, Y, o, q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ve in s)
          (Y = s[ve]),
            s.hasOwnProperty(ve) &&
              Y != null &&
              !o.hasOwnProperty(ve) &&
              ke(e, i, ve, null, o, Y);
        for (I in o)
          if (
            ((Y = o[I]),
            (q = s[I]),
            o.hasOwnProperty(I) && Y !== q && (Y != null || q != null))
          )
            switch (I) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(l(137, i));
                break;
              default:
                ke(e, i, I, Y, o, q);
            }
        return;
      default:
        if (Sc(i)) {
          for (var He in s)
            (Y = s[He]),
              s.hasOwnProperty(He) &&
                Y !== void 0 &&
                !o.hasOwnProperty(He) &&
                ld(e, i, He, void 0, o, Y);
          for (Q in o)
            (Y = o[Q]),
              (q = s[Q]),
              !o.hasOwnProperty(Q) ||
                Y === q ||
                (Y === void 0 && q === void 0) ||
                ld(e, i, Q, Y, o, q);
          return;
        }
    }
    for (var K in s)
      (Y = s[K]),
        s.hasOwnProperty(K) &&
          Y != null &&
          !o.hasOwnProperty(K) &&
          ke(e, i, K, null, o, Y);
    for (ee in o)
      (Y = o[ee]),
        (q = s[ee]),
        !o.hasOwnProperty(ee) ||
          Y === q ||
          (Y == null && q == null) ||
          ke(e, i, ee, Y, o, q);
  }
  var sd = null,
    rd = null;
  function qo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sb(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function rb(e, i) {
    if (e === 0)
      switch (i) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && i === "foreignObject" ? 0 : e;
  }
  function od(e, i) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof i.children == "string" ||
      typeof i.children == "number" ||
      typeof i.children == "bigint" ||
      (typeof i.dangerouslySetInnerHTML == "object" &&
        i.dangerouslySetInnerHTML !== null &&
        i.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ud = null;
  function l2() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ud
        ? !1
        : ((ud = e), !0)
      : ((ud = null), !1);
  }
  var ob = typeof setTimeout == "function" ? setTimeout : void 0,
    s2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ub = typeof Promise == "function" ? Promise : void 0,
    r2 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ub < "u"
          ? function (e) {
              return ub.resolve(null).then(e).catch(o2);
            }
          : ob;
  function o2(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Yi(e) {
    return e === "head";
  }
  function cb(e, i) {
    var s = i,
      o = 0,
      f = 0;
    do {
      var p = s.nextSibling;
      if ((e.removeChild(s), p && p.nodeType === 8))
        if (((s = p.data), s === "/$")) {
          if (0 < o && 8 > o) {
            s = o;
            var y = e.ownerDocument;
            if ((s & 1 && Zs(y.documentElement), s & 2 && Zs(y.body), s & 4))
              for (s = y.head, Zs(s), y = s.firstChild; y; ) {
                var E = y.nextSibling,
                  L = y.nodeName;
                y[ca] ||
                  L === "SCRIPT" ||
                  L === "STYLE" ||
                  (L === "LINK" && y.rel.toLowerCase() === "stylesheet") ||
                  s.removeChild(y),
                  (y = E);
              }
          }
          if (f === 0) {
            e.removeChild(p), ar(i);
            return;
          }
          f--;
        } else
          s === "$" || s === "$?" || s === "$!"
            ? f++
            : (o = s.charCodeAt(0) - 48);
      else o = 0;
      s = p;
    } while (s);
    ar(i);
  }
  function cd(e) {
    var i = e.firstChild;
    for (i && i.nodeType === 10 && (i = i.nextSibling); i; ) {
      var s = i;
      switch (((i = i.nextSibling), s.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cd(s), fs(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(s);
    }
  }
  function u2(e, i, s, o) {
    for (; e.nodeType === 1; ) {
      var f = s;
      if (e.nodeName.toLowerCase() !== i.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[ca])
          switch (i) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((p = e.getAttribute("rel")),
                p === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                p !== f.rel ||
                e.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                e.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((p = e.getAttribute("src")),
                (p !== (f.src == null ? null : f.src) ||
                  e.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  e.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  p &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (i === "input" && e.type === "hidden") {
        var p = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && e.getAttribute("name") === p) return e;
      } else return e;
      if (((e = Vn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function c2(e, i, s) {
    if (i === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !s) ||
        ((e = Vn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function fd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function f2(e, i) {
    var s = e.ownerDocument;
    if (e.data !== "$?" || s.readyState === "complete") i();
    else {
      var o = function () {
        i(), s.removeEventListener("DOMContentLoaded", o);
      };
      s.addEventListener("DOMContentLoaded", o), (e._reactRetry = o);
    }
  }
  function Vn(e) {
    for (; e != null; e = e.nextSibling) {
      var i = e.nodeType;
      if (i === 1 || i === 3) break;
      if (i === 8) {
        if (
          ((i = e.data),
          i === "$" || i === "$!" || i === "$?" || i === "F!" || i === "F")
        )
          break;
        if (i === "/$") return null;
      }
    }
    return e;
  }
  var dd = null;
  function fb(e) {
    e = e.previousSibling;
    for (var i = 0; e; ) {
      if (e.nodeType === 8) {
        var s = e.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (i === 0) return e;
          i--;
        } else s === "/$" && i++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function db(e, i, s) {
    switch (((i = qo(s)), e)) {
      case "html":
        if (((e = i.documentElement), !e)) throw Error(l(452));
        return e;
      case "head":
        if (((e = i.head), !e)) throw Error(l(453));
        return e;
      case "body":
        if (((e = i.body), !e)) throw Error(l(454));
        return e;
      default:
        throw Error(l(451));
    }
  }
  function Zs(e) {
    for (var i = e.attributes; i.length; ) e.removeAttributeNode(i[0]);
    fs(e);
  }
  var Tn = new Map(),
    hb = new Set();
  function Xo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var gi = N.d;
  N.d = { f: d2, r: h2, D: p2, C: m2, L: v2, m: b2, X: y2, S: g2, M: S2 };
  function d2() {
    var e = gi.f(),
      i = Ho();
    return e || i;
  }
  function h2(e) {
    var i = dn(e);
    i !== null && i.tag === 5 && i.type === "form" ? Ov(i) : gi.r(e);
  }
  var Dl = typeof document > "u" ? null : document;
  function pb(e, i, s) {
    var o = Dl;
    if (o && typeof i == "string" && i) {
      var f = pn(i);
      (f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof s == "string" && (f += '[crossorigin="' + s + '"]'),
        hb.has(f) ||
          (hb.add(f),
          (e = { rel: e, crossOrigin: s, href: i }),
          o.querySelector(f) === null &&
            ((i = o.createElement("link")),
            At(i, "link", e),
            Tt(i),
            o.head.appendChild(i)));
    }
  }
  function p2(e) {
    gi.D(e), pb("dns-prefetch", e, null);
  }
  function m2(e, i) {
    gi.C(e, i), pb("preconnect", e, i);
  }
  function v2(e, i, s) {
    gi.L(e, i, s);
    var o = Dl;
    if (o && e && i) {
      var f = 'link[rel="preload"][as="' + pn(i) + '"]';
      i === "image" && s && s.imageSrcSet
        ? ((f += '[imagesrcset="' + pn(s.imageSrcSet) + '"]'),
          typeof s.imageSizes == "string" &&
            (f += '[imagesizes="' + pn(s.imageSizes) + '"]'))
        : (f += '[href="' + pn(e) + '"]');
      var p = f;
      switch (i) {
        case "style":
          p = Al(e);
          break;
        case "script":
          p = Pl(e);
      }
      Tn.has(p) ||
        ((e = v(
          {
            rel: "preload",
            href: i === "image" && s && s.imageSrcSet ? void 0 : e,
            as: i,
          },
          s,
        )),
        Tn.set(p, e),
        o.querySelector(f) !== null ||
          (i === "style" && o.querySelector(Ws(p))) ||
          (i === "script" && o.querySelector(Qs(p))) ||
          ((i = o.createElement("link")),
          At(i, "link", e),
          Tt(i),
          o.head.appendChild(i)));
    }
  }
  function b2(e, i) {
    gi.m(e, i);
    var s = Dl;
    if (s && e) {
      var o = i && typeof i.as == "string" ? i.as : "script",
        f =
          'link[rel="modulepreload"][as="' + pn(o) + '"][href="' + pn(e) + '"]',
        p = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          p = Pl(e);
      }
      if (
        !Tn.has(p) &&
        ((e = v({ rel: "modulepreload", href: e }, i)),
        Tn.set(p, e),
        s.querySelector(f) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(Qs(p))) return;
        }
        (o = s.createElement("link")),
          At(o, "link", e),
          Tt(o),
          s.head.appendChild(o);
      }
    }
  }
  function g2(e, i, s) {
    gi.S(e, i, s);
    var o = Dl;
    if (o && e) {
      var f = Xa(o).hoistableStyles,
        p = Al(e);
      i = i || "default";
      var y = f.get(p);
      if (!y) {
        var E = { loading: 0, preload: null };
        if ((y = o.querySelector(Ws(p)))) E.loading = 5;
        else {
          (e = v({ rel: "stylesheet", href: e, "data-precedence": i }, s)),
            (s = Tn.get(p)) && hd(e, s);
          var L = (y = o.createElement("link"));
          Tt(L),
            At(L, "link", e),
            (L._p = new Promise(function (I, Q) {
              (L.onload = I), (L.onerror = Q);
            })),
            L.addEventListener("load", function () {
              E.loading |= 1;
            }),
            L.addEventListener("error", function () {
              E.loading |= 2;
            }),
            (E.loading |= 4),
            Zo(y, i, o);
        }
        (y = { type: "stylesheet", instance: y, count: 1, state: E }),
          f.set(p, y);
      }
    }
  }
  function y2(e, i) {
    gi.X(e, i);
    var s = Dl;
    if (s && e) {
      var o = Xa(s).hoistableScripts,
        f = Pl(e),
        p = o.get(f);
      p ||
        ((p = s.querySelector(Qs(f))),
        p ||
          ((e = v({ src: e, async: !0 }, i)),
          (i = Tn.get(f)) && pd(e, i),
          (p = s.createElement("script")),
          Tt(p),
          At(p, "link", e),
          s.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        o.set(f, p));
    }
  }
  function S2(e, i) {
    gi.M(e, i);
    var s = Dl;
    if (s && e) {
      var o = Xa(s).hoistableScripts,
        f = Pl(e),
        p = o.get(f);
      p ||
        ((p = s.querySelector(Qs(f))),
        p ||
          ((e = v({ src: e, async: !0, type: "module" }, i)),
          (i = Tn.get(f)) && pd(e, i),
          (p = s.createElement("script")),
          Tt(p),
          At(p, "link", e),
          s.head.appendChild(p)),
        (p = { type: "script", instance: p, count: 1, state: null }),
        o.set(f, p));
    }
  }
  function mb(e, i, s, o) {
    var f = (f = ce.current) ? Xo(f) : null;
    if (!f) throw Error(l(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string"
          ? ((i = Al(s.href)),
            (s = Xa(f).hoistableStyles),
            (o = s.get(i)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              s.set(i, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          s.rel === "stylesheet" &&
          typeof s.href == "string" &&
          typeof s.precedence == "string"
        ) {
          e = Al(s.href);
          var p = Xa(f).hoistableStyles,
            y = p.get(e);
          if (
            (y ||
              ((f = f.ownerDocument || f),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              p.set(e, y),
              (p = f.querySelector(Ws(e))) &&
                !p._p &&
                ((y.instance = p), (y.state.loading = 5)),
              Tn.has(e) ||
                ((s = {
                  rel: "preload",
                  as: "style",
                  href: s.href,
                  crossOrigin: s.crossOrigin,
                  integrity: s.integrity,
                  media: s.media,
                  hrefLang: s.hrefLang,
                  referrerPolicy: s.referrerPolicy,
                }),
                Tn.set(e, s),
                p || T2(f, e, s, y.state))),
            i && o === null)
          )
            throw Error(l(528, ""));
          return y;
        }
        if (i && o !== null) throw Error(l(529, ""));
        return null;
      case "script":
        return (
          (i = s.async),
          (s = s.src),
          typeof s == "string" &&
          i &&
          typeof i != "function" &&
          typeof i != "symbol"
            ? ((i = Pl(s)),
              (s = Xa(f).hoistableScripts),
              (o = s.get(i)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                s.set(i, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(l(444, e));
    }
  }
  function Al(e) {
    return 'href="' + pn(e) + '"';
  }
  function Ws(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function vb(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function T2(e, i, s, o) {
    e.querySelector('link[rel="preload"][as="style"][' + i + "]")
      ? (o.loading = 1)
      : ((i = e.createElement("link")),
        (o.preload = i),
        i.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        i.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        At(i, "link", s),
        Tt(i),
        e.head.appendChild(i));
  }
  function Pl(e) {
    return '[src="' + pn(e) + '"]';
  }
  function Qs(e) {
    return "script[async]" + e;
  }
  function bb(e, i, s) {
    if ((i.count++, i.instance === null))
      switch (i.type) {
        case "style":
          var o = e.querySelector('style[data-href~="' + pn(s.href) + '"]');
          if (o) return (i.instance = o), Tt(o), o;
          var f = v({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (e.ownerDocument || e).createElement("style")),
            Tt(o),
            At(o, "style", f),
            Zo(o, s.precedence, e),
            (i.instance = o)
          );
        case "stylesheet":
          f = Al(s.href);
          var p = e.querySelector(Ws(f));
          if (p) return (i.state.loading |= 4), (i.instance = p), Tt(p), p;
          (o = vb(s)),
            (f = Tn.get(f)) && hd(o, f),
            (p = (e.ownerDocument || e).createElement("link")),
            Tt(p);
          var y = p;
          return (
            (y._p = new Promise(function (E, L) {
              (y.onload = E), (y.onerror = L);
            })),
            At(p, "link", o),
            (i.state.loading |= 4),
            Zo(p, s.precedence, e),
            (i.instance = p)
          );
        case "script":
          return (
            (p = Pl(s.src)),
            (f = e.querySelector(Qs(p)))
              ? ((i.instance = f), Tt(f), f)
              : ((o = s),
                (f = Tn.get(p)) && ((o = v({}, s)), pd(o, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement("script")),
                Tt(f),
                At(f, "link", o),
                e.head.appendChild(f),
                (i.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(l(443, i.type));
      }
    else
      i.type === "stylesheet" &&
        (i.state.loading & 4) === 0 &&
        ((o = i.instance), (i.state.loading |= 4), Zo(o, s.precedence, e));
    return i.instance;
  }
  function Zo(e, i, s) {
    for (
      var o = s.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = o.length ? o[o.length - 1] : null,
        p = f,
        y = 0;
      y < o.length;
      y++
    ) {
      var E = o[y];
      if (E.dataset.precedence === i) p = E;
      else if (p !== f) break;
    }
    p
      ? p.parentNode.insertBefore(e, p.nextSibling)
      : ((i = s.nodeType === 9 ? s.head : s), i.insertBefore(e, i.firstChild));
  }
  function hd(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy),
      e.title == null && (e.title = i.title);
  }
  function pd(e, i) {
    e.crossOrigin == null && (e.crossOrigin = i.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = i.referrerPolicy),
      e.integrity == null && (e.integrity = i.integrity);
  }
  var Wo = null;
  function gb(e, i, s) {
    if (Wo === null) {
      var o = new Map(),
        f = (Wo = new Map());
      f.set(s, o);
    } else (f = Wo), (o = f.get(s)), o || ((o = new Map()), f.set(s, o));
    if (o.has(e)) return o;
    for (
      o.set(e, null), s = s.getElementsByTagName(e), f = 0;
      f < s.length;
      f++
    ) {
      var p = s[f];
      if (
        !(
          p[ca] ||
          p[vt] ||
          (e === "link" && p.getAttribute("rel") === "stylesheet")
        ) &&
        p.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = p.getAttribute(i) || "";
        y = e + y;
        var E = o.get(y);
        E ? E.push(p) : o.set(y, [p]);
      }
    }
    return o;
  }
  function yb(e, i, s) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        s,
        i === "title" ? e.querySelector("head > title") : null,
      );
  }
  function x2(e, i, s) {
    if (s === 1 || i.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof i.precedence != "string" ||
          typeof i.href != "string" ||
          i.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof i.rel != "string" ||
          typeof i.href != "string" ||
          i.href === "" ||
          i.onLoad ||
          i.onError
        )
          break;
        switch (i.rel) {
          case "stylesheet":
            return (
              (e = i.disabled), typeof i.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          i.async &&
          typeof i.async != "function" &&
          typeof i.async != "symbol" &&
          !i.onLoad &&
          !i.onError &&
          i.src &&
          typeof i.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Sb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Js = null;
  function E2() {}
  function $2(e, i, s) {
    if (Js === null) throw Error(l(475));
    var o = Js;
    if (
      i.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var f = Al(s.href),
          p = e.querySelector(Ws(f));
        if (p) {
          (e = p._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (o.count++, (o = Qo.bind(o)), e.then(o, o)),
            (i.state.loading |= 4),
            (i.instance = p),
            Tt(p);
          return;
        }
        (p = e.ownerDocument || e),
          (s = vb(s)),
          (f = Tn.get(f)) && hd(s, f),
          (p = p.createElement("link")),
          Tt(p);
        var y = p;
        (y._p = new Promise(function (E, L) {
          (y.onload = E), (y.onerror = L);
        })),
          At(p, "link", s),
          (i.instance = p);
      }
      o.stylesheets === null && (o.stylesheets = new Map()),
        o.stylesheets.set(i, e),
        (e = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (o.count++,
          (i = Qo.bind(o)),
          e.addEventListener("load", i),
          e.addEventListener("error", i));
    }
  }
  function w2() {
    if (Js === null) throw Error(l(475));
    var e = Js;
    return (
      e.stylesheets && e.count === 0 && md(e, e.stylesheets),
      0 < e.count
        ? function (i) {
            var s = setTimeout(function () {
              if ((e.stylesheets && md(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                (e.unsuspend = null), o();
              }
            }, 6e4);
            return (
              (e.unsuspend = i),
              function () {
                (e.unsuspend = null), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Qo() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) md(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var Jo = null;
  function md(e, i) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Jo = new Map()),
        i.forEach(C2, e),
        (Jo = null),
        Qo.call(e));
  }
  function C2(e, i) {
    if (!(i.state.loading & 4)) {
      var s = Jo.get(e);
      if (s) var o = s.get(null);
      else {
        (s = new Map()), Jo.set(e, s);
        for (
          var f = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            p = 0;
          p < f.length;
          p++
        ) {
          var y = f[p];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (s.set(y.dataset.precedence, y), (o = y));
        }
        o && s.set(null, o);
      }
      (f = i.instance),
        (y = f.getAttribute("data-precedence")),
        (p = s.get(y) || o),
        p === o && s.set(null, f),
        s.set(y, f),
        this.count++,
        (o = Qo.bind(this)),
        f.addEventListener("load", o),
        f.addEventListener("error", o),
        p
          ? p.parentNode.insertBefore(f, p.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (i.state.loading |= 4);
    }
  }
  var er = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: O,
    _currentValue2: O,
    _threadCount: 0,
  };
  function M2(e, i, s, o, f, p, y, E) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ya(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ya(0)),
      (this.hiddenUpdates = Ya(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = f),
      (this.onCaughtError = p),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = E),
      (this.incompleteTransitions = new Map());
  }
  function Tb(e, i, s, o, f, p, y, E, L, I, Q, ee) {
    return (
      (e = new M2(e, i, s, y, E, L, I, ee)),
      (i = 1),
      p === !0 && (i |= 24),
      (p = nn(3, null, null, i)),
      (e.current = p),
      (p.stateNode = e),
      (i = Xc()),
      i.refCount++,
      (e.pooledCache = i),
      i.refCount++,
      (p.memoizedState = { element: o, isDehydrated: s, cache: i }),
      Jc(p),
      e
    );
  }
  function xb(e) {
    return e ? ((e = rl), e) : rl;
  }
  function Eb(e, i, s, o, f, p) {
    (f = xb(f)),
      o.context === null ? (o.context = f) : (o.pendingContext = f),
      (o = Li(i)),
      (o.payload = { element: s }),
      (p = p === void 0 ? null : p),
      p !== null && (o.callback = p),
      (s = _i(e, o, i)),
      s !== null && (on(s, e, i), Ps(s, e, i));
  }
  function $b(e, i) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var s = e.retryLane;
      e.retryLane = s !== 0 && s < i ? s : i;
    }
  }
  function vd(e, i) {
    $b(e, i), (e = e.alternate) && $b(e, i);
  }
  function wb(e) {
    if (e.tag === 13) {
      var i = sl(e, 67108864);
      i !== null && on(i, e, 67108864), vd(e, 67108864);
    }
  }
  var eu = !0;
  function D2(e, i, s, o) {
    var f = $.T;
    $.T = null;
    var p = N.p;
    try {
      (N.p = 2), bd(e, i, s, o);
    } finally {
      (N.p = p), ($.T = f);
    }
  }
  function A2(e, i, s, o) {
    var f = $.T;
    $.T = null;
    var p = N.p;
    try {
      (N.p = 8), bd(e, i, s, o);
    } finally {
      (N.p = p), ($.T = f);
    }
  }
  function bd(e, i, s, o) {
    if (eu) {
      var f = gd(o);
      if (f === null) ad(e, i, o, tu, s), Mb(e, o);
      else if (R2(f, e, i, s, o)) o.stopPropagation();
      else if ((Mb(e, o), i & 4 && -1 < P2.indexOf(e))) {
        for (; f !== null; ) {
          var p = dn(f);
          if (p !== null)
            switch (p.tag) {
              case 3:
                if (((p = p.stateNode), p.current.memoizedState.isDehydrated)) {
                  var y = Ln(p.pendingLanes);
                  if (y !== 0) {
                    var E = p;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; y; ) {
                      var L = 1 << (31 - St(y));
                      (E.entanglements[1] |= L), (y &= ~L);
                    }
                    Xn(p), (ze & 6) === 0 && ((Bo = Ye() + 500), Ys(0));
                  }
                }
                break;
              case 13:
                (E = sl(p, 2)), E !== null && on(E, p, 2), Ho(), vd(p, 2);
            }
          if (((p = gd(o)), p === null && ad(e, i, o, tu, s), p === f)) break;
          f = p;
        }
        f !== null && o.stopPropagation();
      } else ad(e, i, o, null, s);
    }
  }
  function gd(e) {
    return (e = xc(e)), yd(e);
  }
  var tu = null;
  function yd(e) {
    if (((tu = null), (e = ge(e)), e !== null)) {
      var i = u(e);
      if (i === null) e = null;
      else {
        var s = i.tag;
        if (s === 13) {
          if (((e = c(i)), e !== null)) return e;
          e = null;
        } else if (s === 3) {
          if (i.stateNode.current.memoizedState.isDehydrated)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          e = null;
        } else i !== e && (e = null);
      }
    }
    return (tu = e), null;
  }
  function Cb(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (mt()) {
          case Rn:
            return 2;
          case ct:
            return 8;
          case Qt:
          case Ct:
            return 32;
          case Nn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sd = !1,
    qi = null,
    Xi = null,
    Zi = null,
    tr = new Map(),
    nr = new Map(),
    Wi = [],
    P2 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Mb(e, i) {
    switch (e) {
      case "focusin":
      case "focusout":
        qi = null;
        break;
      case "dragenter":
      case "dragleave":
        Xi = null;
        break;
      case "mouseover":
      case "mouseout":
        Zi = null;
        break;
      case "pointerover":
      case "pointerout":
        tr.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nr.delete(i.pointerId);
    }
  }
  function ir(e, i, s, o, f, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: i,
          domEventName: s,
          eventSystemFlags: o,
          nativeEvent: p,
          targetContainers: [f],
        }),
        i !== null && ((i = dn(i)), i !== null && wb(i)),
        e)
      : ((e.eventSystemFlags |= o),
        (i = e.targetContainers),
        f !== null && i.indexOf(f) === -1 && i.push(f),
        e);
  }
  function R2(e, i, s, o, f) {
    switch (i) {
      case "focusin":
        return (qi = ir(qi, e, i, s, o, f)), !0;
      case "dragenter":
        return (Xi = ir(Xi, e, i, s, o, f)), !0;
      case "mouseover":
        return (Zi = ir(Zi, e, i, s, o, f)), !0;
      case "pointerover":
        var p = f.pointerId;
        return tr.set(p, ir(tr.get(p) || null, e, i, s, o, f)), !0;
      case "gotpointercapture":
        return (
          (p = f.pointerId), nr.set(p, ir(nr.get(p) || null, e, i, s, o, f)), !0
        );
    }
    return !1;
  }
  function Db(e) {
    var i = ge(e.target);
    if (i !== null) {
      var s = u(i);
      if (s !== null) {
        if (((i = s.tag), i === 13)) {
          if (((i = c(s)), i !== null)) {
            (e.blockedOn = i),
              dc(e.priority, function () {
                if (s.tag === 13) {
                  var o = rn();
                  o = os(o);
                  var f = sl(s, o);
                  f !== null && on(f, s, o), vd(s, o);
                }
              });
            return;
          }
        } else if (i === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function nu(e) {
    if (e.blockedOn !== null) return !1;
    for (var i = e.targetContainers; 0 < i.length; ) {
      var s = gd(e.nativeEvent);
      if (s === null) {
        s = e.nativeEvent;
        var o = new s.constructor(s.type, s);
        (Tc = o), s.target.dispatchEvent(o), (Tc = null);
      } else return (i = dn(s)), i !== null && wb(i), (e.blockedOn = s), !1;
      i.shift();
    }
    return !0;
  }
  function Ab(e, i, s) {
    nu(e) && s.delete(i);
  }
  function N2() {
    (Sd = !1),
      qi !== null && nu(qi) && (qi = null),
      Xi !== null && nu(Xi) && (Xi = null),
      Zi !== null && nu(Zi) && (Zi = null),
      tr.forEach(Ab),
      nr.forEach(Ab);
  }
  function iu(e, i) {
    e.blockedOn === i &&
      ((e.blockedOn = null),
      Sd ||
        ((Sd = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, N2)));
  }
  var au = null;
  function Pb(e) {
    au !== e &&
      ((au = e),
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        au === e && (au = null);
        for (var i = 0; i < e.length; i += 3) {
          var s = e[i],
            o = e[i + 1],
            f = e[i + 2];
          if (typeof o != "function") {
            if (yd(o || s) === null) continue;
            break;
          }
          var p = dn(s);
          p !== null &&
            (e.splice(i, 3),
            (i -= 3),
            yf(p, { pending: !0, data: f, method: s.method, action: o }, o, f));
        }
      }));
  }
  function ar(e) {
    function i(L) {
      return iu(L, e);
    }
    qi !== null && iu(qi, e),
      Xi !== null && iu(Xi, e),
      Zi !== null && iu(Zi, e),
      tr.forEach(i),
      nr.forEach(i);
    for (var s = 0; s < Wi.length; s++) {
      var o = Wi[s];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Wi.length && ((s = Wi[0]), s.blockedOn === null); )
      Db(s), s.blockedOn === null && Wi.shift();
    if (((s = (e.ownerDocument || e).$$reactFormReplay), s != null))
      for (o = 0; o < s.length; o += 3) {
        var f = s[o],
          p = s[o + 1],
          y = f[Ot] || null;
        if (typeof p == "function") y || Pb(s);
        else if (y) {
          var E = null;
          if (p && p.hasAttribute("formAction")) {
            if (((f = p), (y = p[Ot] || null))) E = y.formAction;
            else if (yd(f) !== null) continue;
          } else E = y.action;
          typeof E == "function" ? (s[o + 1] = E) : (s.splice(o, 3), (o -= 3)),
            Pb(s);
        }
      }
  }
  function Td(e) {
    this._internalRoot = e;
  }
  (lu.prototype.render = Td.prototype.render =
    function (e) {
      var i = this._internalRoot;
      if (i === null) throw Error(l(409));
      var s = i.current,
        o = rn();
      Eb(s, o, e, i, null, null);
    }),
    (lu.prototype.unmount = Td.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var i = e.containerInfo;
          Eb(e.current, 2, null, e, null, null), Ho(), (i[Pi] = null);
        }
      });
  function lu(e) {
    this._internalRoot = e;
  }
  lu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var i = We();
      e = { blockedOn: null, target: e, priority: i };
      for (var s = 0; s < Wi.length && i !== 0 && i < Wi[s].priority; s++);
      Wi.splice(s, 0, e), s === 0 && Db(e);
    }
  };
  var Rb = n.version;
  if (Rb !== "19.1.0") throw Error(l(527, Rb, "19.1.0"));
  N.findDOMNode = function (e) {
    var i = e._reactInternals;
    if (i === void 0)
      throw typeof e.render == "function"
        ? Error(l(188))
        : ((e = Object.keys(e).join(",")), Error(l(268, e)));
    return (
      (e = h(i)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var O2 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: $,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!su.isDisabled && su.supportsFiber)
      try {
        (On = su.inject(O2)), (tt = su);
      } catch {}
  }
  return (
    (lr.createRoot = function (e, i) {
      if (!r(e)) throw Error(l(299));
      var s = !1,
        o = "",
        f = Yv,
        p = qv,
        y = Xv,
        E = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (s = !0),
          i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (f = i.onUncaughtError),
          i.onCaughtError !== void 0 && (p = i.onCaughtError),
          i.onRecoverableError !== void 0 && (y = i.onRecoverableError),
          i.unstable_transitionCallbacks !== void 0 &&
            (E = i.unstable_transitionCallbacks)),
        (i = Tb(e, 1, !1, null, null, s, o, f, p, y, E, null)),
        (e[Pi] = i.current),
        id(e),
        new Td(i)
      );
    }),
    (lr.hydrateRoot = function (e, i, s) {
      if (!r(e)) throw Error(l(299));
      var o = !1,
        f = "",
        p = Yv,
        y = qv,
        E = Xv,
        L = null,
        I = null;
      return (
        s != null &&
          (s.unstable_strictMode === !0 && (o = !0),
          s.identifierPrefix !== void 0 && (f = s.identifierPrefix),
          s.onUncaughtError !== void 0 && (p = s.onUncaughtError),
          s.onCaughtError !== void 0 && (y = s.onCaughtError),
          s.onRecoverableError !== void 0 && (E = s.onRecoverableError),
          s.unstable_transitionCallbacks !== void 0 &&
            (L = s.unstable_transitionCallbacks),
          s.formState !== void 0 && (I = s.formState)),
        (i = Tb(e, 1, !0, i, s ?? null, o, f, p, y, E, L, I)),
        (i.context = xb(null)),
        (s = i.current),
        (o = rn()),
        (o = os(o)),
        (f = Li(o)),
        (f.callback = null),
        _i(s, f, o),
        (s = o),
        (i.current.lanes = s),
        ua(i, s),
        Xn(i),
        (e[Pi] = i.current),
        id(e),
        new lu(i)
      );
    }),
    (lr.version = "19.1.0"),
    lr
  );
}
var Xb;
function m3() {
  if (Xb) return xd.exports;
  Xb = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  return t(), (xd.exports = p3()), xd.exports;
}
var FA = m3(),
  ec = b1();
const g1 = c3(ec);
var [v3, Ft] = zr({ name: "ProviderContext", strict: !1 });
const b3 = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  g3 = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function y1(t) {
  if (Intl.Locale) {
    let a = new Intl.Locale(t).maximize(),
      l = typeof a.getTextInfo == "function" ? a.getTextInfo() : a.textInfo;
    if (l) return l.direction === "rtl";
    if (a.script) return b3.has(a.script);
  }
  let n = t.split("-")[0];
  return g3.has(n);
}
const y3 = Symbol.for("react-aria.i18n.locale");
function S1() {
  let t =
    (typeof window < "u" && window[y3]) ||
    (typeof navigator < "u" &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([t]);
  } catch {
    t = "en-US";
  }
  return { locale: t, direction: y1(t) ? "rtl" : "ltr" };
}
let Wd = S1(),
  ur = new Set();
function Zb() {
  Wd = S1();
  for (let t of ur) t(Wd);
}
function T1() {
  let t = Vr(),
    [n, a] = S.useState(Wd);
  return (
    S.useEffect(
      () => (
        ur.size === 0 && window.addEventListener("languagechange", Zb),
        ur.add(a),
        () => {
          ur.delete(a),
            ur.size === 0 && window.removeEventListener("languagechange", Zb);
        }
      ),
      [],
    ),
    t ? { locale: "en-US", direction: "ltr" } : n
  );
}
const x1 = Ne.createContext(null);
function S3(t) {
  let { locale: n, children: a } = t,
    l = T1(),
    r = Ne.useMemo(
      () => (n ? { locale: n, direction: y1(n) ? "rtl" : "ltr" } : l),
      [l, n],
    );
  return Ne.createElement(x1.Provider, { value: r }, a);
}
function T3() {
  let t = T1();
  return S.useContext(x1) || t;
}
const lt = typeof document < "u" ? Ne.useLayoutEffect : () => {};
function kn(t) {
  const n = S.useRef(null);
  return (
    lt(() => {
      n.current = t;
    }, [t]),
    S.useCallback((...a) => {
      const l = n.current;
      return l == null ? void 0 : l(...a);
    }, [])
  );
}
function x3(t) {
  let [n, a] = S.useState(t),
    l = S.useRef(null),
    r = kn(() => {
      if (!l.current) return;
      let c = l.current.next();
      if (c.done) {
        l.current = null;
        return;
      }
      n === c.value ? r() : a(c.value);
    });
  lt(() => {
    l.current && r();
  });
  let u = kn((c) => {
    (l.current = c(n)), r();
  });
  return [n, u];
}
let E3 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Il = new Map(),
  cr;
typeof FinalizationRegistry < "u" &&
  (cr = new FinalizationRegistry((t) => {
    Il.delete(t);
  }));
function ts(t) {
  let [n, a] = S.useState(t),
    l = S.useRef(null),
    r = u1(n),
    u = S.useRef(null);
  if ((cr && cr.register(u, r), E3)) {
    const c = Il.get(r);
    c && !c.includes(l) ? c.push(l) : Il.set(r, [l]);
  }
  return (
    lt(() => {
      let c = r;
      return () => {
        cr && cr.unregister(u), Il.delete(c);
      };
    }, [r]),
    S.useEffect(() => {
      let c = l.current;
      return (
        c && a(c),
        () => {
          c && (l.current = null);
        }
      );
    }),
    r
  );
}
function $3(t, n) {
  if (t === n) return t;
  let a = Il.get(t);
  if (a) return a.forEach((r) => (r.current = n)), n;
  let l = Il.get(n);
  return l ? (l.forEach((r) => (r.current = t)), t) : n;
}
function Qd(t = []) {
  let n = ts(),
    [a, l] = x3(n),
    r = S.useCallback(() => {
      l(function* () {
        yield n, yield document.getElementById(n) ? n : void 0;
      });
    }, [n, l]);
  return lt(r, [n, r, ...t]), a;
}
function Bt(...t) {
  return (...n) => {
    for (let a of t) typeof a == "function" && a(...n);
  };
}
const Ke = (t) => {
    var n;
    return (n = t == null ? void 0 : t.ownerDocument) !== null && n !== void 0
      ? n
      : document;
  },
  cn = (t) =>
    t && "window" in t && t.window === t ? t : Ke(t).defaultView || window;
function w3(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "nodeType" in t &&
    typeof t.nodeType == "number"
  );
}
function C3(t) {
  return w3(t) && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in t;
}
function Xe(t, n) {
  if (!la()) return n && t ? t.contains(n) : !1;
  if (!t || !n) return !1;
  let a = n;
  for (; a !== null; ) {
    if (a === t) return !0;
    a.tagName === "SLOT" && a.assignedSlot
      ? (a = a.assignedSlot.parentNode)
      : C3(a)
        ? (a = a.host)
        : (a = a.parentNode);
  }
  return !1;
}
const Zt = (t = document) => {
  var n;
  if (!la()) return t.activeElement;
  let a = t.activeElement;
  for (
    ;
    a &&
    "shadowRoot" in a &&
    !((n = a.shadowRoot) === null || n === void 0) &&
    n.activeElement;

  )
    a = a.shadowRoot.activeElement;
  return a;
};
function _e(t) {
  return la() && t.target.shadowRoot && t.composedPath
    ? t.composedPath()[0]
    : t.target;
}
let M3 = class {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(n) {
    if (!Xe(this.root, n))
      throw new Error(
        "Cannot set currentNode to a node that is not contained by the root node.",
      );
    const a = [];
    let l = n,
      r = n;
    for (this._currentNode = n; l && l !== this.root; )
      if (l.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        const c = l,
          d = this._doc.createTreeWalker(c, this.whatToShow, {
            acceptNode: this._acceptNode,
          });
        a.push(d),
          (d.currentNode = r),
          this._currentSetFor.add(d),
          (l = r = c.host);
      } else l = l.parentNode;
    const u = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode,
    });
    a.push(u),
      (u.currentNode = r),
      this._currentSetFor.add(u),
      (this._walkerStack = a);
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let n = this.currentNode,
      a = this.nextNode();
    return Xe(n, a)
      ? (a && (this.currentNode = a), a)
      : ((this.currentNode = n), null);
  }
  lastChild() {
    let a = this._walkerStack[0].lastChild();
    return a && (this.currentNode = a), a;
  }
  nextNode() {
    const n = this._walkerStack[0].nextNode();
    if (n) {
      if (n.shadowRoot) {
        var a;
        let r;
        if (
          (typeof this.filter == "function"
            ? (r = this.filter(n))
            : !((a = this.filter) === null || a === void 0) &&
              a.acceptNode &&
              (r = this.filter.acceptNode(n)),
          r === NodeFilter.FILTER_ACCEPT)
        )
          return (this.currentNode = n), n;
        let u = this.nextNode();
        return u && (this.currentNode = u), u;
      }
      return n && (this.currentNode = n), n;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let l = this.nextNode();
      return l && (this.currentNode = l), l;
    } else return null;
  }
  previousNode() {
    const n = this._walkerStack[0];
    if (n.currentNode === n.root) {
      if (this._currentSetFor.has(n))
        if ((this._currentSetFor.delete(n), this._walkerStack.length > 1)) {
          this._walkerStack.shift();
          let r = this.previousNode();
          return r && (this.currentNode = r), r;
        } else return null;
      return null;
    }
    const a = n.previousNode();
    if (a) {
      if (a.shadowRoot) {
        var l;
        let u;
        if (
          (typeof this.filter == "function"
            ? (u = this.filter(a))
            : !((l = this.filter) === null || l === void 0) &&
              l.acceptNode &&
              (u = this.filter.acceptNode(a)),
          u === NodeFilter.FILTER_ACCEPT)
        )
          return a && (this.currentNode = a), a;
        let c = this.lastChild();
        return c && (this.currentNode = c), c;
      }
      return a && (this.currentNode = a), a;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let r = this.previousNode();
      return r && (this.currentNode = r), r;
    } else return null;
  }
  nextSibling() {
    return null;
  }
  previousSibling() {
    return null;
  }
  parentNode() {
    return null;
  }
  constructor(n, a, l, r) {
    (this._walkerStack = []),
      (this._currentSetFor = new Set()),
      (this._acceptNode = (c) => {
        if (c.nodeType === Node.ELEMENT_NODE) {
          const h = c.shadowRoot;
          if (h) {
            const m = this._doc.createTreeWalker(h, this.whatToShow, {
              acceptNode: this._acceptNode,
            });
            return this._walkerStack.unshift(m), NodeFilter.FILTER_ACCEPT;
          } else {
            var d;
            if (typeof this.filter == "function") return this.filter(c);
            if (!((d = this.filter) === null || d === void 0) && d.acceptNode)
              return this.filter.acceptNode(c);
            if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
          }
        }
        return NodeFilter.FILTER_SKIP;
      }),
      (this._doc = n),
      (this.root = a),
      (this.filter = r ?? null),
      (this.whatToShow = l ?? NodeFilter.SHOW_ALL),
      (this._currentNode = a),
      this._walkerStack.unshift(n.createTreeWalker(a, l, this._acceptNode));
    const u = a.shadowRoot;
    if (u) {
      const c = this._doc.createTreeWalker(u, this.whatToShow, {
        acceptNode: this._acceptNode,
      });
      this._walkerStack.unshift(c);
    }
  }
};
function D3(t, n, a, l) {
  return la() ? new M3(t, n, a, l) : t.createTreeWalker(n, a, l);
}
function E1(t) {
  var n,
    a,
    l = "";
  if (typeof t == "string" || typeof t == "number") l += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var r = t.length;
      for (n = 0; n < r; n++)
        t[n] && (a = E1(t[n])) && (l && (l += " "), (l += a));
    } else for (a in t) t[a] && (l && (l += " "), (l += a));
  return l;
}
function $1() {
  for (var t, n, a = 0, l = "", r = arguments.length; a < r; a++)
    (t = arguments[a]) && (n = E1(t)) && (l && (l += " "), (l += n));
  return l;
}
function pe(...t) {
  let n = { ...t[0] };
  for (let a = 1; a < t.length; a++) {
    let l = t[a];
    for (let r in l) {
      let u = n[r],
        c = l[r];
      typeof u == "function" &&
      typeof c == "function" &&
      r[0] === "o" &&
      r[1] === "n" &&
      r.charCodeAt(2) >= 65 &&
      r.charCodeAt(2) <= 90
        ? (n[r] = Bt(u, c))
        : (r === "className" || r === "UNSAFE_className") &&
            typeof u == "string" &&
            typeof c == "string"
          ? (n[r] = $1(u, c))
          : r === "id" && u && c
            ? (n.id = $3(u, c))
            : (n[r] = c !== void 0 ? c : u);
    }
  }
  return n;
}
function w1(...t) {
  return t.length === 1 && t[0]
    ? t[0]
    : (n) => {
        for (let a of t)
          typeof a == "function" ? a(n) : a != null && (a.current = n);
      };
}
const A3 = new Set(["id"]),
  P3 = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details",
  ]),
  R3 = new Set([
    "href",
    "hrefLang",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy",
  ]),
  N3 = /^(data-.*)$/;
function Ci(t, n = {}) {
  let { labelable: a, isLink: l, propNames: r } = n,
    u = {};
  for (const c in t)
    Object.prototype.hasOwnProperty.call(t, c) &&
      (A3.has(c) ||
        (a && P3.has(c)) ||
        (l && R3.has(c)) ||
        (r != null && r.has(c)) ||
        N3.test(c)) &&
      (u[c] = t[c]);
  return u;
}
function Xl(t) {
  if (O3()) t.focus({ preventScroll: !0 });
  else {
    let n = L3(t);
    t.focus(), _3(n);
  }
}
let ru = null;
function O3() {
  if (ru == null) {
    ru = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return (ru = !0), !0;
        },
      });
    } catch {}
  }
  return ru;
}
function L3(t) {
  let n = t.parentNode,
    a = [],
    l = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== l; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) &&
      a.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
      (n = n.parentNode);
  return (
    l instanceof HTMLElement &&
      a.push({ element: l, scrollTop: l.scrollTop, scrollLeft: l.scrollLeft }),
    a
  );
}
function _3(t) {
  for (let { element: n, scrollTop: a, scrollLeft: l } of t)
    (n.scrollTop = a), (n.scrollLeft = l);
}
function tc(t) {
  var n;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((n = window.navigator.userAgentData) === null || n === void 0
        ? void 0
        : n.brands.some((a) => t.test(a.brand))) ||
        t.test(window.navigator.userAgent);
}
function Ih(t) {
  var n;
  return typeof window < "u" && window.navigator != null
    ? t.test(
        ((n = window.navigator.userAgentData) === null || n === void 0
          ? void 0
          : n.platform) || window.navigator.platform,
      )
    : !1;
}
function sa(t) {
  let n = null;
  return () => (n == null && (n = t()), n);
}
const Zl = sa(function () {
    return Ih(/^Mac/i);
  }),
  z3 = sa(function () {
    return Ih(/^iPhone/i);
  }),
  C1 = sa(function () {
    return Ih(/^iPad/i) || (Zl() && navigator.maxTouchPoints > 1);
  }),
  Br = sa(function () {
    return z3() || C1();
  }),
  Gh = sa(function () {
    return tc(/AppleWebKit/i) && !M1();
  }),
  M1 = sa(function () {
    return tc(/Chrome/i);
  }),
  kr = sa(function () {
    return tc(/Android/i);
  }),
  V3 = sa(function () {
    return tc(/Firefox/i);
  }),
  D1 = S.createContext({ isNative: !0, open: k3, useHref: (t) => t });
function B3(t) {
  let { children: n, navigate: a, useHref: l } = t,
    r = S.useMemo(
      () => ({
        isNative: !1,
        open: (u, c, d, h) => {
          R1(u, (m) => {
            P1(m, c) ? a(d, h) : Va(m, c);
          });
        },
        useHref: l || ((u) => u),
      }),
      [a, l],
    );
  return Ne.createElement(D1.Provider, { value: r }, n);
}
function A1() {
  return S.useContext(D1);
}
function P1(t, n) {
  let a = t.getAttribute("target");
  return (
    (!a || a === "_self") &&
    t.origin === location.origin &&
    !t.hasAttribute("download") &&
    !n.metaKey &&
    !n.ctrlKey &&
    !n.altKey &&
    !n.shiftKey
  );
}
function Va(t, n, a = !0) {
  var l, r;
  let { metaKey: u, ctrlKey: c, altKey: d, shiftKey: h } = n;
  V3() &&
    !(
      (r = window.event) === null ||
      r === void 0 ||
      (l = r.type) === null ||
      l === void 0
    ) &&
    l.startsWith("key") &&
    t.target === "_blank" &&
    (Zl() ? (u = !0) : (c = !0));
  let m =
    Gh() && Zl() && !C1()
      ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: u,
          ctrlKey: c,
          altKey: d,
          shiftKey: h,
        })
      : new MouseEvent("click", {
          metaKey: u,
          ctrlKey: c,
          altKey: d,
          shiftKey: h,
          bubbles: !0,
          cancelable: !0,
        });
  (Va.isOpening = a), Xl(t), t.dispatchEvent(m), (Va.isOpening = !1);
}
Va.isOpening = !1;
function R1(t, n) {
  if (t instanceof HTMLAnchorElement) n(t);
  else if (t.hasAttribute("data-href")) {
    let a = document.createElement("a");
    (a.href = t.getAttribute("data-href")),
      t.hasAttribute("data-target") &&
        (a.target = t.getAttribute("data-target")),
      t.hasAttribute("data-rel") && (a.rel = t.getAttribute("data-rel")),
      t.hasAttribute("data-download") &&
        (a.download = t.getAttribute("data-download")),
      t.hasAttribute("data-ping") && (a.ping = t.getAttribute("data-ping")),
      t.hasAttribute("data-referrer-policy") &&
        (a.referrerPolicy = t.getAttribute("data-referrer-policy")),
      t.appendChild(a),
      n(a),
      t.removeChild(a);
  }
}
function k3(t, n) {
  R1(t, (a) => Va(a, n));
}
function Yh(t) {
  let n = A1();
  var a;
  const l = n.useHref(
    (a = t == null ? void 0 : t.href) !== null && a !== void 0 ? a : "",
  );
  return {
    href: t != null && t.href ? l : void 0,
    target: t == null ? void 0 : t.target,
    rel: t == null ? void 0 : t.rel,
    download: t == null ? void 0 : t.download,
    ping: t == null ? void 0 : t.ping,
    referrerPolicy: t == null ? void 0 : t.referrerPolicy,
  };
}
let Ll = new Map(),
  Jd = new Set();
function Wb() {
  if (typeof window > "u") return;
  function t(l) {
    return "propertyName" in l;
  }
  let n = (l) => {
      if (!t(l) || !l.target) return;
      let r = Ll.get(l.target);
      r ||
        ((r = new Set()),
        Ll.set(l.target, r),
        l.target.addEventListener("transitioncancel", a, { once: !0 })),
        r.add(l.propertyName);
    },
    a = (l) => {
      if (!t(l) || !l.target) return;
      let r = Ll.get(l.target);
      if (
        r &&
        (r.delete(l.propertyName),
        r.size === 0 &&
          (l.target.removeEventListener("transitioncancel", a),
          Ll.delete(l.target)),
        Ll.size === 0)
      ) {
        for (let u of Jd) u();
        Jd.clear();
      }
    };
  document.body.addEventListener("transitionrun", n),
    document.body.addEventListener("transitionend", a);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? Wb()
    : document.addEventListener("DOMContentLoaded", Wb));
function N1(t) {
  requestAnimationFrame(() => {
    Ll.size === 0 ? t() : Jd.add(t);
  });
}
function qh() {
  let t = S.useRef(new Map()),
    n = S.useCallback((r, u, c, d) => {
      let h =
        d != null && d.once
          ? (...m) => {
              t.current.delete(c), c(...m);
            }
          : c;
      t.current.set(c, { type: u, eventTarget: r, fn: h, options: d }),
        r.addEventListener(u, h, d);
    }, []),
    a = S.useCallback((r, u, c, d) => {
      var h;
      let m =
        ((h = t.current.get(c)) === null || h === void 0 ? void 0 : h.fn) || c;
      r.removeEventListener(u, m, d), t.current.delete(c);
    }, []),
    l = S.useCallback(() => {
      t.current.forEach((r, u) => {
        a(r.eventTarget, r.type, u, r.options);
      });
    }, [a]);
  return (
    S.useEffect(() => l, [l]),
    {
      addGlobalListener: n,
      removeGlobalListener: a,
      removeAllGlobalListeners: l,
    }
  );
}
function Xh(t, n) {
  let { id: a, "aria-label": l, "aria-labelledby": r } = t;
  return (
    (a = ts(a)),
    r && l
      ? (r = [...new Set([a, ...r.trim().split(/\s+/)])].join(" "))
      : r && (r = r.trim().split(/\s+/).join(" ")),
    !l && !r && n && (l = n),
    { id: a, "aria-label": l, "aria-labelledby": r }
  );
}
function H3(t) {
  const n = S.useRef(null);
  return S.useMemo(
    () => ({
      get current() {
        return n.current;
      },
      set current(a) {
        (n.current = a), typeof t == "function" ? t(a) : t && (t.current = a);
      },
    }),
    [t],
  );
}
function U3() {
  return typeof window.ResizeObserver < "u";
}
function Qb(t) {
  const { ref: n, box: a, onResize: l } = t;
  S.useEffect(() => {
    let r = n == null ? void 0 : n.current;
    if (r)
      if (U3()) {
        const u = new window.ResizeObserver((c) => {
          c.length && l();
        });
        return (
          u.observe(r, { box: a }),
          () => {
            r && u.unobserve(r);
          }
        );
      } else
        return (
          window.addEventListener("resize", l, !1),
          () => {
            window.removeEventListener("resize", l, !1);
          }
        );
  }, [l, n, a]);
}
function O1(t, n) {
  lt(() => {
    if (t && t.ref && n)
      return (
        (t.ref.current = n.current),
        () => {
          t.ref && (t.ref.current = null);
        }
      );
  });
}
function Jb(t, n) {
  if (!t) return !1;
  let a = window.getComputedStyle(t),
    l = /(auto|scroll)/.test(a.overflow + a.overflowX + a.overflowY);
  return (
    l &&
      n &&
      (l =
        t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth),
    l
  );
}
function L1(t, n) {
  let a = t;
  for (Jb(a, n) && (a = a.parentElement); a && !Jb(a, n); ) a = a.parentElement;
  return a || document.scrollingElement || document.documentElement;
}
let wn = typeof document < "u" && window.visualViewport;
function K3() {
  let t = Vr(),
    [n, a] = S.useState(() => (t ? { width: 0, height: 0 } : eg()));
  return (
    S.useEffect(() => {
      let l = () => {
        a((r) => {
          let u = eg();
          return u.width === r.width && u.height === r.height ? r : u;
        });
      };
      return (
        wn
          ? wn.addEventListener("resize", l)
          : window.addEventListener("resize", l),
        () => {
          wn
            ? wn.removeEventListener("resize", l)
            : window.removeEventListener("resize", l);
        }
      );
    }, []),
    n
  );
}
function eg() {
  return {
    width: (wn && (wn == null ? void 0 : wn.width)) || window.innerWidth,
    height: (wn && (wn == null ? void 0 : wn.height)) || window.innerHeight,
  };
}
function eh(t) {
  return t.mozInputSource === 0 && t.isTrusted
    ? !0
    : kr() && t.pointerType
      ? t.type === "click" && t.buttons === 1
      : t.detail === 0 && !t.pointerType;
}
function j3(t) {
  return (
    (!kr() && t.width === 0 && t.height === 0) ||
    (t.width === 1 &&
      t.height === 1 &&
      t.pressure === 0 &&
      t.detail === 0 &&
      t.pointerType === "mouse")
  );
}
function F3(t, n, a) {
  let l = S.useRef(n),
    r = kn(() => {
      a && a(l.current);
    });
  S.useEffect(() => {
    var u;
    let c =
      t == null || (u = t.current) === null || u === void 0 ? void 0 : u.form;
    return (
      c == null || c.addEventListener("reset", r),
      () => {
        c == null || c.removeEventListener("reset", r);
      }
    );
  }, [t, r]);
}
const Zh = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable^="false"])',
  ],
  I3 = Zh.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Zh.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const G3 = Zh.join(':not([hidden]):not([tabindex="-1"]),');
function _1(t) {
  return t.matches(I3);
}
function Y3(t) {
  return t.matches(G3);
}
function q3(t = {}) {
  let { locale: n } = T3();
  return S.useMemo(() => new _2(n, t), [n, t]);
}
const Wn = { top: "top", bottom: "top", left: "left", right: "left" },
  Nu = { top: "bottom", bottom: "top", left: "right", right: "left" },
  X3 = { top: "left", left: "top" },
  th = { top: "height", left: "width" },
  z1 = { width: "totalWidth", height: "totalHeight" },
  ou = {};
let wt = typeof document < "u" ? window.visualViewport : null;
function tg(t) {
  let n = 0,
    a = 0,
    l = 0,
    r = 0,
    u = 0,
    c = 0,
    d = {};
  var h;
  let m =
    ((h = wt == null ? void 0 : wt.scale) !== null && h !== void 0 ? h : 1) > 1;
  if (t.tagName === "BODY") {
    let x = document.documentElement;
    (l = x.clientWidth), (r = x.clientHeight);
    var v;
    n = (v = wt == null ? void 0 : wt.width) !== null && v !== void 0 ? v : l;
    var b;
    (a =
      (b = wt == null ? void 0 : wt.height) !== null && b !== void 0 ? b : r),
      (d.top = x.scrollTop || t.scrollTop),
      (d.left = x.scrollLeft || t.scrollLeft),
      wt && ((u = wt.offsetTop), (c = wt.offsetLeft));
  } else
    ({ width: n, height: a, top: u, left: c } = Gl(t)),
      (d.top = t.scrollTop),
      (d.left = t.scrollLeft),
      (l = n),
      (r = a);
  if (Gh() && (t.tagName === "BODY" || t.tagName === "HTML") && m) {
    (d.top = 0), (d.left = 0);
    var g;
    u = (g = wt == null ? void 0 : wt.pageTop) !== null && g !== void 0 ? g : 0;
    var T;
    c =
      (T = wt == null ? void 0 : wt.pageLeft) !== null && T !== void 0 ? T : 0;
  }
  return {
    width: n,
    height: a,
    totalWidth: l,
    totalHeight: r,
    scroll: d,
    top: u,
    left: c,
  };
}
function Z3(t) {
  return {
    top: t.scrollTop,
    left: t.scrollLeft,
    width: t.scrollWidth,
    height: t.scrollHeight,
  };
}
function ng(t, n, a, l, r, u, c) {
  var d;
  let h = (d = r.scroll[t]) !== null && d !== void 0 ? d : 0,
    m = l[th[t]],
    v = l.scroll[Wn[t]] + u,
    b = m + l.scroll[Wn[t]] - u,
    g = n - h + c[t] - l[Wn[t]],
    T = n - h + a + c[t] - l[Wn[t]];
  return g < v ? v - g : T > b ? Math.max(b - T, v - g) : 0;
}
function W3(t) {
  let n = window.getComputedStyle(t);
  return {
    top: parseInt(n.marginTop, 10) || 0,
    bottom: parseInt(n.marginBottom, 10) || 0,
    left: parseInt(n.marginLeft, 10) || 0,
    right: parseInt(n.marginRight, 10) || 0,
  };
}
function ig(t) {
  if (ou[t]) return ou[t];
  let [n, a] = t.split(" "),
    l = Wn[n] || "right",
    r = X3[l];
  Wn[a] || (a = "center");
  let u = th[l],
    c = th[r];
  return (
    (ou[t] = {
      placement: n,
      crossPlacement: a,
      axis: l,
      crossAxis: r,
      size: u,
      crossSize: c,
    }),
    ou[t]
  );
}
function Cd(t, n, a, l, r, u, c, d, h, m) {
  let {
      placement: v,
      crossPlacement: b,
      axis: g,
      crossAxis: T,
      size: x,
      crossSize: C,
    } = l,
    A = {};
  var M;
  A[T] = (M = t[T]) !== null && M !== void 0 ? M : 0;
  var V, P, z, R;
  b === "center"
    ? (A[T] +=
        (((V = t[C]) !== null && V !== void 0 ? V : 0) -
          ((P = a[C]) !== null && P !== void 0 ? P : 0)) /
        2)
    : b !== T &&
      (A[T] +=
        ((z = t[C]) !== null && z !== void 0 ? z : 0) -
        ((R = a[C]) !== null && R !== void 0 ? R : 0)),
    (A[T] += u);
  const B = t[T] - a[C] + h + m,
    X = t[T] + t[C] - h - m;
  if (((A[T] = Ru(A[T], B, X)), v === g)) {
    const w = d ? c[x] : n[z1[x]];
    A[Nu[g]] = Math.floor(w - t[g] + r);
  } else A[g] = Math.floor(t[g] + t[x] + r);
  return A;
}
function Q3(t, n, a, l, r, u, c, d) {
  const h = l ? a.height : n[z1.height];
  var m;
  let v =
    t.top != null
      ? a.top + t.top
      : a.top + (h - ((m = t.bottom) !== null && m !== void 0 ? m : 0) - c);
  var b, g, T, x, C, A;
  let M =
    d !== "top"
      ? Math.max(
          0,
          n.height +
            n.top +
            ((b = n.scroll.top) !== null && b !== void 0 ? b : 0) -
            v -
            (((g = r.top) !== null && g !== void 0 ? g : 0) +
              ((T = r.bottom) !== null && T !== void 0 ? T : 0) +
              u),
        )
      : Math.max(
          0,
          v +
            c -
            (n.top + ((x = n.scroll.top) !== null && x !== void 0 ? x : 0)) -
            (((C = r.top) !== null && C !== void 0 ? C : 0) +
              ((A = r.bottom) !== null && A !== void 0 ? A : 0) +
              u),
        );
  return Math.min(n.height - u * 2, M);
}
function ag(t, n, a, l, r, u) {
  let { placement: c, axis: d, size: h } = u;
  var m, v;
  if (c === d)
    return Math.max(
      0,
      a[d] -
        t[d] -
        ((m = t.scroll[d]) !== null && m !== void 0 ? m : 0) +
        n[d] -
        ((v = l[d]) !== null && v !== void 0 ? v : 0) -
        l[Nu[d]] -
        r,
    );
  var b;
  return Math.max(
    0,
    t[h] +
      t[d] +
      t.scroll[d] -
      n[d] -
      a[d] -
      a[h] -
      ((b = l[d]) !== null && b !== void 0 ? b : 0) -
      l[Nu[d]] -
      r,
  );
}
function J3(t, n, a, l, r, u, c, d, h, m, v, b, g, T, x, C) {
  let A = ig(t),
    {
      size: M,
      crossAxis: V,
      crossSize: P,
      placement: z,
      crossPlacement: R,
    } = A,
    B = Cd(n, d, a, A, v, b, m, g, x, C),
    X = v,
    w = ag(d, m, n, r, u + v, A);
  if (c && l[M] > w) {
    let se = ig(`${Nu[z]} ${R}`),
      de = Cd(n, d, a, se, v, b, m, g, x, C);
    ag(d, m, n, r, u + v, se) > w && ((A = se), (B = de), (X = v));
  }
  let G = "bottom";
  A.axis === "top"
    ? A.placement === "top"
      ? (G = "top")
      : A.placement === "bottom" && (G = "bottom")
    : A.crossAxis === "top" &&
      (A.crossPlacement === "top"
        ? (G = "bottom")
        : A.crossPlacement === "bottom" && (G = "top"));
  let W = ng(V, B[V], a[P], d, h, u, m);
  B[V] += W;
  let D = Q3(B, d, m, g, r, u, a.height, G);
  T && T < D && (D = T),
    (a.height = Math.min(a.height, D)),
    (B = Cd(n, d, a, A, X, b, m, g, x, C)),
    (W = ng(V, B[V], a[P], d, h, u, m)),
    (B[V] += W);
  let F = {},
    _ = n[V] + 0.5 * n[P] - B[V] - r[Wn[V]];
  const H = x / 2 + C;
  var Z, $, N, O;
  const te =
      Wn[V] === "left"
        ? ((Z = r.left) !== null && Z !== void 0 ? Z : 0) +
          (($ = r.right) !== null && $ !== void 0 ? $ : 0)
        : ((N = r.top) !== null && N !== void 0 ? N : 0) +
          ((O = r.bottom) !== null && O !== void 0 ? O : 0),
    ne = a[P] - te - x / 2 - C,
    oe = n[V] + x / 2 - (B[V] + r[Wn[V]]),
    re = n[V] + n[P] - x / 2 - (B[V] + r[Wn[V]]),
    le = Ru(_, oe, re);
  return (
    (F[V] = Ru(le, H, ne)),
    {
      position: B,
      maxHeight: D,
      arrowOffsetLeft: F.left,
      arrowOffsetTop: F.top,
      placement: A.placement,
    }
  );
}
function e4(t) {
  let {
      placement: n,
      targetNode: a,
      overlayNode: l,
      scrollNode: r,
      padding: u,
      shouldFlip: c,
      boundaryElement: d,
      offset: h,
      crossOffset: m,
      maxHeight: v,
      arrowSize: b = 0,
      arrowBoundaryOffset: g = 0,
    } = t,
    T = l instanceof HTMLElement ? t4(l) : document.documentElement,
    x = T === document.documentElement;
  const C = window.getComputedStyle(T).position;
  let A = !!C && C !== "static",
    M = x ? Gl(a) : lg(a, T);
  if (!x) {
    let { marginTop: F, marginLeft: _ } = window.getComputedStyle(a);
    (M.top += parseInt(F, 10) || 0), (M.left += parseInt(_, 10) || 0);
  }
  let V = Gl(l),
    P = W3(l);
  var z, R;
  V.width +=
    ((z = P.left) !== null && z !== void 0 ? z : 0) +
    ((R = P.right) !== null && R !== void 0 ? R : 0);
  var B, X;
  V.height +=
    ((B = P.top) !== null && B !== void 0 ? B : 0) +
    ((X = P.bottom) !== null && X !== void 0 ? X : 0);
  let w = Z3(r),
    G = tg(d),
    W = tg(T),
    D = d.tagName === "BODY" ? Gl(T) : lg(T, d);
  return (
    T.tagName === "HTML" &&
      d.tagName === "BODY" &&
      ((W.scroll.top = 0), (W.scroll.left = 0)),
    J3(n, M, V, w, P, u, c, G, W, D, h, m, A, v, b, g)
  );
}
function Gl(t) {
  let { top: n, left: a, width: l, height: r } = t.getBoundingClientRect(),
    {
      scrollTop: u,
      scrollLeft: c,
      clientTop: d,
      clientLeft: h,
    } = document.documentElement;
  return { top: n + u - d, left: a + c - h, width: l, height: r };
}
function lg(t, n) {
  let a = window.getComputedStyle(t),
    l;
  if (a.position === "fixed") {
    let { top: r, left: u, width: c, height: d } = t.getBoundingClientRect();
    l = { top: r, left: u, width: c, height: d };
  } else {
    l = Gl(t);
    let r = Gl(n),
      u = window.getComputedStyle(n);
    (r.top += (parseInt(u.borderTopWidth, 10) || 0) - n.scrollTop),
      (r.left += (parseInt(u.borderLeftWidth, 10) || 0) - n.scrollLeft),
      (l.top -= r.top),
      (l.left -= r.left);
  }
  return (
    (l.top -= parseInt(a.marginTop, 10) || 0),
    (l.left -= parseInt(a.marginLeft, 10) || 0),
    l
  );
}
function t4(t) {
  let n = t.offsetParent;
  if (
    (n &&
      n === document.body &&
      window.getComputedStyle(n).position === "static" &&
      !sg(n) &&
      (n = document.documentElement),
    n == null)
  )
    for (n = t.parentElement; n && !sg(n); ) n = n.parentElement;
  return n || document.documentElement;
}
function sg(t) {
  let n = window.getComputedStyle(t);
  return (
    n.transform !== "none" ||
    /transform|perspective/.test(n.willChange) ||
    n.filter !== "none" ||
    n.contain === "paint" ||
    ("backdropFilter" in n && n.backdropFilter !== "none") ||
    ("WebkitBackdropFilter" in n && n.WebkitBackdropFilter !== "none")
  );
}
const n4 = new WeakMap();
function i4(t) {
  let { triggerRef: n, isOpen: a, onClose: l } = t;
  S.useEffect(() => {
    if (!a || l === null) return;
    let r = (u) => {
      let c = u.target;
      if (
        !n.current ||
        (c instanceof Node && !c.contains(n.current)) ||
        u.target instanceof HTMLInputElement ||
        u.target instanceof HTMLTextAreaElement
      )
        return;
      let d = l || n4.get(n.current);
      d && d();
    };
    return (
      window.addEventListener("scroll", r, !0),
      () => {
        window.removeEventListener("scroll", r, !0);
      }
    );
  }, [a, l, n]);
}
const a4 = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr",
  ]),
  l4 = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi",
  ]);
function s4(t) {
  if (Intl.Locale) {
    let a = new Intl.Locale(t).maximize(),
      l = typeof a.getTextInfo == "function" ? a.getTextInfo() : a.textInfo;
    if (l) return l.direction === "rtl";
    if (a.script) return a4.has(a.script);
  }
  let n = t.split("-")[0];
  return l4.has(n);
}
const r4 = Symbol.for("react-aria.i18n.locale");
function V1() {
  let t =
    (typeof window < "u" && window[r4]) ||
    (typeof navigator < "u" &&
      (navigator.language || navigator.userLanguage)) ||
    "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([t]);
  } catch {
    t = "en-US";
  }
  return { locale: t, direction: s4(t) ? "rtl" : "ltr" };
}
let nh = V1(),
  fr = new Set();
function rg() {
  nh = V1();
  for (let t of fr) t(nh);
}
function o4() {
  let t = Vr(),
    [n, a] = S.useState(nh);
  return (
    S.useEffect(
      () => (
        fr.size === 0 && window.addEventListener("languagechange", rg),
        fr.add(a),
        () => {
          fr.delete(a),
            fr.size === 0 && window.removeEventListener("languagechange", rg);
        }
      ),
      [],
    ),
    t ? { locale: "en-US", direction: "ltr" } : n
  );
}
const u4 = Ne.createContext(null);
function Hr() {
  let t = o4();
  return S.useContext(u4) || t;
}
const og = new WeakMap();
function c4(t) {
  let n = og.get(t);
  return n || ((n = new c1(t)), og.set(t, n)), n;
}
function f4(t, n) {
  return (n && c1.getGlobalDictionaryForPackage(n)) || c4(t);
}
function d4(t, n) {
  let { locale: a } = Hr(),
    l = f4(t, n);
  return S.useMemo(() => new z2(a, l), [a, l]);
}
const ti = typeof document < "u" ? Ne.useLayoutEffect : () => {};
function Rt(t) {
  const n = S.useRef(null);
  return (
    ti(() => {
      n.current = t;
    }, [t]),
    S.useCallback((...a) => {
      const l = n.current;
      return l == null ? void 0 : l(...a);
    }, [])
  );
}
function h4(t) {
  let [n, a] = S.useState(t),
    l = S.useRef(null),
    r = Rt(() => {
      if (!l.current) return;
      let c = l.current.next();
      if (c.done) {
        l.current = null;
        return;
      }
      n === c.value ? r() : a(c.value);
    });
  ti(() => {
    l.current && r();
  });
  let u = Rt((c) => {
    (l.current = c(n)), r();
  });
  return [n, u];
}
let p4 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Yl = new Map(),
  dr;
typeof FinalizationRegistry < "u" &&
  (dr = new FinalizationRegistry((t) => {
    Yl.delete(t);
  }));
function Wl(t) {
  let [n, a] = S.useState(t),
    l = S.useRef(null),
    r = u1(n),
    u = S.useRef(null);
  if ((dr && dr.register(u, r), p4)) {
    const c = Yl.get(r);
    c && !c.includes(l) ? c.push(l) : Yl.set(r, [l]);
  }
  return (
    ti(() => {
      let c = r;
      return () => {
        dr && dr.unregister(u), Yl.delete(c);
      };
    }, [r]),
    S.useEffect(() => {
      let c = l.current;
      return (
        c && a(c),
        () => {
          c && (l.current = null);
        }
      );
    }),
    r
  );
}
function m4(t, n) {
  if (t === n) return t;
  let a = Yl.get(t);
  if (a) return a.forEach((r) => (r.current = n)), n;
  let l = Yl.get(n);
  return l ? (l.forEach((r) => (r.current = t)), t) : n;
}
function ug(t = []) {
  let n = Wl(),
    [a, l] = h4(n),
    r = S.useCallback(() => {
      l(function* () {
        yield n, yield document.getElementById(n) ? n : void 0;
      });
    }, [n, l]);
  return ti(r, [n, r, ...t]), a;
}
function B1(...t) {
  return (...n) => {
    for (let a of t) typeof a == "function" && a(...n);
  };
}
const jt = (t) => {
    var n;
    return (n = t == null ? void 0 : t.ownerDocument) !== null && n !== void 0
      ? n
      : document;
  },
  xi = (t) =>
    t && "window" in t && t.window === t ? t : jt(t).defaultView || window;
function v4(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "nodeType" in t &&
    typeof t.nodeType == "number"
  );
}
function b4(t) {
  return v4(t) && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in t;
}
function un(t, n) {
  if (!la()) return n && t ? t.contains(n) : !1;
  if (!t || !n) return !1;
  let a = n;
  for (; a !== null; ) {
    if (a === t) return !0;
    a.tagName === "SLOT" && a.assignedSlot
      ? (a = a.assignedSlot.parentNode)
      : b4(a)
        ? (a = a.host)
        : (a = a.parentNode);
  }
  return !1;
}
const Ql = (t = document) => {
  var n;
  if (!la()) return t.activeElement;
  let a = t.activeElement;
  for (
    ;
    a &&
    "shadowRoot" in a &&
    !((n = a.shadowRoot) === null || n === void 0) &&
    n.activeElement;

  )
    a = a.shadowRoot.activeElement;
  return a;
};
function Ht(t) {
  return la() && t.target.shadowRoot && t.composedPath
    ? t.composedPath()[0]
    : t.target;
}
class g4 {
  get currentNode() {
    return this._currentNode;
  }
  set currentNode(n) {
    if (!un(this.root, n))
      throw new Error(
        "Cannot set currentNode to a node that is not contained by the root node.",
      );
    const a = [];
    let l = n,
      r = n;
    for (this._currentNode = n; l && l !== this.root; )
      if (l.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        const c = l,
          d = this._doc.createTreeWalker(c, this.whatToShow, {
            acceptNode: this._acceptNode,
          });
        a.push(d),
          (d.currentNode = r),
          this._currentSetFor.add(d),
          (l = r = c.host);
      } else l = l.parentNode;
    const u = this._doc.createTreeWalker(this.root, this.whatToShow, {
      acceptNode: this._acceptNode,
    });
    a.push(u),
      (u.currentNode = r),
      this._currentSetFor.add(u),
      (this._walkerStack = a);
  }
  get doc() {
    return this._doc;
  }
  firstChild() {
    let n = this.currentNode,
      a = this.nextNode();
    return un(n, a)
      ? (a && (this.currentNode = a), a)
      : ((this.currentNode = n), null);
  }
  lastChild() {
    let a = this._walkerStack[0].lastChild();
    return a && (this.currentNode = a), a;
  }
  nextNode() {
    const n = this._walkerStack[0].nextNode();
    if (n) {
      if (n.shadowRoot) {
        var a;
        let r;
        if (
          (typeof this.filter == "function"
            ? (r = this.filter(n))
            : !((a = this.filter) === null || a === void 0) &&
              a.acceptNode &&
              (r = this.filter.acceptNode(n)),
          r === NodeFilter.FILTER_ACCEPT)
        )
          return (this.currentNode = n), n;
        let u = this.nextNode();
        return u && (this.currentNode = u), u;
      }
      return n && (this.currentNode = n), n;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let l = this.nextNode();
      return l && (this.currentNode = l), l;
    } else return null;
  }
  previousNode() {
    const n = this._walkerStack[0];
    if (n.currentNode === n.root) {
      if (this._currentSetFor.has(n))
        if ((this._currentSetFor.delete(n), this._walkerStack.length > 1)) {
          this._walkerStack.shift();
          let r = this.previousNode();
          return r && (this.currentNode = r), r;
        } else return null;
      return null;
    }
    const a = n.previousNode();
    if (a) {
      if (a.shadowRoot) {
        var l;
        let u;
        if (
          (typeof this.filter == "function"
            ? (u = this.filter(a))
            : !((l = this.filter) === null || l === void 0) &&
              l.acceptNode &&
              (u = this.filter.acceptNode(a)),
          u === NodeFilter.FILTER_ACCEPT)
        )
          return a && (this.currentNode = a), a;
        let c = this.lastChild();
        return c && (this.currentNode = c), c;
      }
      return a && (this.currentNode = a), a;
    } else if (this._walkerStack.length > 1) {
      this._walkerStack.shift();
      let r = this.previousNode();
      return r && (this.currentNode = r), r;
    } else return null;
  }
  nextSibling() {
    return null;
  }
  previousSibling() {
    return null;
  }
  parentNode() {
    return null;
  }
  constructor(n, a, l, r) {
    (this._walkerStack = []),
      (this._currentSetFor = new Set()),
      (this._acceptNode = (c) => {
        if (c.nodeType === Node.ELEMENT_NODE) {
          const h = c.shadowRoot;
          if (h) {
            const m = this._doc.createTreeWalker(h, this.whatToShow, {
              acceptNode: this._acceptNode,
            });
            return this._walkerStack.unshift(m), NodeFilter.FILTER_ACCEPT;
          } else {
            var d;
            if (typeof this.filter == "function") return this.filter(c);
            if (!((d = this.filter) === null || d === void 0) && d.acceptNode)
              return this.filter.acceptNode(c);
            if (this.filter === null) return NodeFilter.FILTER_ACCEPT;
          }
        }
        return NodeFilter.FILTER_SKIP;
      }),
      (this._doc = n),
      (this.root = a),
      (this.filter = r ?? null),
      (this.whatToShow = l ?? NodeFilter.SHOW_ALL),
      (this._currentNode = a),
      this._walkerStack.unshift(n.createTreeWalker(a, l, this._acceptNode));
    const u = a.shadowRoot;
    if (u) {
      const c = this._doc.createTreeWalker(u, this.whatToShow, {
        acceptNode: this._acceptNode,
      });
      this._walkerStack.unshift(c);
    }
  }
}
function y4(t, n, a, l) {
  return la() ? new g4(t, n, a, l) : t.createTreeWalker(n, a, l);
}
function Wt(...t) {
  let n = { ...t[0] };
  for (let a = 1; a < t.length; a++) {
    let l = t[a];
    for (let r in l) {
      let u = n[r],
        c = l[r];
      typeof u == "function" &&
      typeof c == "function" &&
      r[0] === "o" &&
      r[1] === "n" &&
      r.charCodeAt(2) >= 65 &&
      r.charCodeAt(2) <= 90
        ? (n[r] = B1(u, c))
        : (r === "className" || r === "UNSAFE_className") &&
            typeof u == "string" &&
            typeof c == "string"
          ? (n[r] = $1(u, c))
          : r === "id" && u && c
            ? (n.id = m4(u, c))
            : (n[r] = c !== void 0 ? c : u);
    }
  }
  return n;
}
const S4 = new Set(["id"]),
  T4 = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details",
  ]),
  x4 = new Set([
    "href",
    "hrefLang",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy",
  ]),
  E4 = /^(data-.*)$/;
function $4(t, n = {}) {
  let { labelable: a, isLink: l, propNames: r } = n,
    u = {};
  for (const c in t)
    Object.prototype.hasOwnProperty.call(t, c) &&
      (S4.has(c) ||
        (a && T4.has(c)) ||
        (l && x4.has(c)) ||
        (r != null && r.has(c)) ||
        E4.test(c)) &&
      (u[c] = t[c]);
  return u;
}
function Ei(t) {
  if (w4()) t.focus({ preventScroll: !0 });
  else {
    let n = C4(t);
    t.focus(), M4(n);
  }
}
let uu = null;
function w4() {
  if (uu == null) {
    uu = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return (uu = !0), !0;
        },
      });
    } catch {}
  }
  return uu;
}
function C4(t) {
  let n = t.parentNode,
    a = [],
    l = document.scrollingElement || document.documentElement;
  for (; n instanceof HTMLElement && n !== l; )
    (n.offsetHeight < n.scrollHeight || n.offsetWidth < n.scrollWidth) &&
      a.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
      (n = n.parentNode);
  return (
    l instanceof HTMLElement &&
      a.push({ element: l, scrollTop: l.scrollTop, scrollLeft: l.scrollLeft }),
    a
  );
}
function M4(t) {
  for (let { element: n, scrollTop: a, scrollLeft: l } of t)
    (n.scrollTop = a), (n.scrollLeft = l);
}
function nc(t) {
  var n;
  return typeof window > "u" || window.navigator == null
    ? !1
    : ((n = window.navigator.userAgentData) === null || n === void 0
        ? void 0
        : n.brands.some((a) => t.test(a.brand))) ||
        t.test(window.navigator.userAgent);
}
function Wh(t) {
  var n;
  return typeof window < "u" && window.navigator != null
    ? t.test(
        ((n = window.navigator.userAgentData) === null || n === void 0
          ? void 0
          : n.platform) || window.navigator.platform,
      )
    : !1;
}
function Mi(t) {
  let n = null;
  return () => (n == null && (n = t()), n);
}
const Ba = Mi(function () {
    return Wh(/^Mac/i);
  }),
  D4 = Mi(function () {
    return Wh(/^iPhone/i);
  }),
  k1 = Mi(function () {
    return Wh(/^iPad/i) || (Ba() && navigator.maxTouchPoints > 1);
  }),
  Qh = Mi(function () {
    return D4() || k1();
  }),
  A4 = Mi(function () {
    return Ba() || Qh();
  }),
  P4 = Mi(function () {
    return nc(/AppleWebKit/i) && !R4();
  }),
  R4 = Mi(function () {
    return nc(/Chrome/i);
  }),
  H1 = Mi(function () {
    return nc(/Android/i);
  }),
  N4 = Mi(function () {
    return nc(/Firefox/i);
  }),
  O4 = S.createContext({ isNative: !0, open: _4, useHref: (t) => t });
function U1() {
  return S.useContext(O4);
}
function ka(t, n, a = !0) {
  var l, r;
  let { metaKey: u, ctrlKey: c, altKey: d, shiftKey: h } = n;
  N4() &&
    !(
      (r = window.event) === null ||
      r === void 0 ||
      (l = r.type) === null ||
      l === void 0
    ) &&
    l.startsWith("key") &&
    t.target === "_blank" &&
    (Ba() ? (u = !0) : (c = !0));
  let m =
    P4() && Ba() && !k1()
      ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: u,
          ctrlKey: c,
          altKey: d,
          shiftKey: h,
        })
      : new MouseEvent("click", {
          metaKey: u,
          ctrlKey: c,
          altKey: d,
          shiftKey: h,
          bubbles: !0,
          cancelable: !0,
        });
  (ka.isOpening = a), Ei(t), t.dispatchEvent(m), (ka.isOpening = !1);
}
ka.isOpening = !1;
function L4(t, n) {
  if (t instanceof HTMLAnchorElement) n(t);
  else if (t.hasAttribute("data-href")) {
    let a = document.createElement("a");
    (a.href = t.getAttribute("data-href")),
      t.hasAttribute("data-target") &&
        (a.target = t.getAttribute("data-target")),
      t.hasAttribute("data-rel") && (a.rel = t.getAttribute("data-rel")),
      t.hasAttribute("data-download") &&
        (a.download = t.getAttribute("data-download")),
      t.hasAttribute("data-ping") && (a.ping = t.getAttribute("data-ping")),
      t.hasAttribute("data-referrer-policy") &&
        (a.referrerPolicy = t.getAttribute("data-referrer-policy")),
      t.appendChild(a),
      n(a),
      t.removeChild(a);
  }
}
function _4(t, n) {
  L4(t, (a) => ka(a, n));
}
let _l = new Map(),
  ih = new Set();
function cg() {
  if (typeof window > "u") return;
  function t(l) {
    return "propertyName" in l;
  }
  let n = (l) => {
      if (!t(l) || !l.target) return;
      let r = _l.get(l.target);
      r ||
        ((r = new Set()),
        _l.set(l.target, r),
        l.target.addEventListener("transitioncancel", a, { once: !0 })),
        r.add(l.propertyName);
    },
    a = (l) => {
      if (!t(l) || !l.target) return;
      let r = _l.get(l.target);
      if (
        r &&
        (r.delete(l.propertyName),
        r.size === 0 &&
          (l.target.removeEventListener("transitioncancel", a),
          _l.delete(l.target)),
        _l.size === 0)
      ) {
        for (let u of ih) u();
        ih.clear();
      }
    };
  document.body.addEventListener("transitionrun", n),
    document.body.addEventListener("transitionend", a);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? cg()
    : document.addEventListener("DOMContentLoaded", cg));
function K1(t) {
  requestAnimationFrame(() => {
    _l.size === 0 ? t() : ih.add(t);
  });
}
function Jh() {
  let t = S.useRef(new Map()),
    n = S.useCallback((r, u, c, d) => {
      let h =
        d != null && d.once
          ? (...m) => {
              t.current.delete(c), c(...m);
            }
          : c;
      t.current.set(c, { type: u, eventTarget: r, fn: h, options: d }),
        r.addEventListener(u, h, d);
    }, []),
    a = S.useCallback((r, u, c, d) => {
      var h;
      let m =
        ((h = t.current.get(c)) === null || h === void 0 ? void 0 : h.fn) || c;
      r.removeEventListener(u, m, d), t.current.delete(c);
    }, []),
    l = S.useCallback(() => {
      t.current.forEach((r, u) => {
        a(r.eventTarget, r.type, u, r.options);
      });
    }, [a]);
  return (
    S.useEffect(() => l, [l]),
    {
      addGlobalListener: n,
      removeGlobalListener: a,
      removeAllGlobalListeners: l,
    }
  );
}
function z4(t, n) {
  let { id: a, "aria-label": l, "aria-labelledby": r } = t;
  return (
    (a = Wl(a)),
    r && l
      ? (r = [...new Set([a, ...r.trim().split(/\s+/)])].join(" "))
      : r && (r = r.trim().split(/\s+/).join(" ")),
    !l && !r && n && (l = n),
    { id: a, "aria-label": l, "aria-labelledby": r }
  );
}
function fg(t, n) {
  const a = S.useRef(!0),
    l = S.useRef(null);
  ti(
    () => (
      (a.current = !0),
      () => {
        a.current = !1;
      }
    ),
    [],
  ),
    ti(() => {
      a.current
        ? (a.current = !1)
        : (!l.current || n.some((r, u) => !Object.is(r, l[u]))) && t(),
        (l.current = n);
    }, n);
}
function j1(t, n) {
  ti(() => {
    if (t && t.ref && n)
      return (
        (t.ref.current = n.current),
        () => {
          t.ref && (t.ref.current = null);
        }
      );
  });
}
function ah(t, n) {
  if (!t) return !1;
  let a = window.getComputedStyle(t),
    l = /(auto|scroll)/.test(a.overflow + a.overflowX + a.overflowY);
  return (
    l &&
      n &&
      (l =
        t.scrollHeight !== t.clientHeight || t.scrollWidth !== t.clientWidth),
    l
  );
}
function V4(t, n) {
  const a = [];
  for (; t && t !== document.documentElement; )
    ah(t, n) && a.push(t), (t = t.parentElement);
  return a;
}
let B4 = 0;
const Md = new Map();
function k4(t) {
  let [n, a] = S.useState();
  return (
    ti(() => {
      if (!t) return;
      let l = Md.get(t);
      if (l) a(l.element.id);
      else {
        let r = `react-aria-description-${B4++}`;
        a(r);
        let u = document.createElement("div");
        (u.id = r),
          (u.style.display = "none"),
          (u.textContent = t),
          document.body.appendChild(u),
          (l = { refCount: 0, element: u }),
          Md.set(t, l);
      }
      return (
        l.refCount++,
        () => {
          l && --l.refCount === 0 && (l.element.remove(), Md.delete(t));
        }
      );
    }, [t]),
    { "aria-describedby": t ? n : void 0 }
  );
}
function cu(t, n, a, l) {
  let r = Rt(a),
    u = a == null;
  S.useEffect(() => {
    if (u || !t.current) return;
    let c = t.current;
    return (
      c.addEventListener(n, r, l),
      () => {
        c.removeEventListener(n, r, l);
      }
    );
  }, [t, n, l, u, r]);
}
function F1(t, n) {
  let a = dg(t, n, "left"),
    l = dg(t, n, "top"),
    r = n.offsetWidth,
    u = n.offsetHeight,
    c = t.scrollLeft,
    d = t.scrollTop,
    {
      borderTopWidth: h,
      borderLeftWidth: m,
      scrollPaddingTop: v,
      scrollPaddingRight: b,
      scrollPaddingBottom: g,
      scrollPaddingLeft: T,
    } = getComputedStyle(t),
    x = c + parseInt(m, 10),
    C = d + parseInt(h, 10),
    A = x + t.clientWidth,
    M = C + t.clientHeight,
    V = parseInt(v, 10) || 0,
    P = parseInt(g, 10) || 0,
    z = parseInt(b, 10) || 0,
    R = parseInt(T, 10) || 0;
  a <= c + R
    ? (c = a - parseInt(m, 10) - R)
    : a + r > A - z && (c += a + r - A + z),
    l <= C + V
      ? (d = l - parseInt(h, 10) - V)
      : l + u > M - P && (d += l + u - M + P),
    (t.scrollLeft = c),
    (t.scrollTop = d);
}
function dg(t, n, a) {
  const l = a === "left" ? "offsetLeft" : "offsetTop";
  let r = 0;
  for (; n.offsetParent && ((r += n[l]), n.offsetParent !== t); ) {
    if (n.offsetParent.contains(t)) {
      r -= t[l];
      break;
    }
    n = n.offsetParent;
  }
  return r;
}
function hg(t, n) {
  if (t && document.contains(t)) {
    let c = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(c).overflow === "hidden") {
      let h = V4(t);
      for (let m of h) F1(m, t);
    } else {
      var a;
      let { left: h, top: m } = t.getBoundingClientRect();
      t == null ||
        (a = t.scrollIntoView) === null ||
        a === void 0 ||
        a.call(t, { block: "nearest" });
      let { left: v, top: b } = t.getBoundingClientRect();
      if (Math.abs(h - v) > 1 || Math.abs(m - b) > 1) {
        var l, r, u;
        n == null ||
          (r = n.containingElement) === null ||
          r === void 0 ||
          (l = r.scrollIntoView) === null ||
          l === void 0 ||
          l.call(r, { block: "center", inline: "center" }),
          (u = t.scrollIntoView) === null ||
            u === void 0 ||
            u.call(t, { block: "nearest" });
      }
    }
  }
}
function I1(t) {
  return t.mozInputSource === 0 && t.isTrusted
    ? !0
    : H1() && t.pointerType
      ? t.type === "click" && t.buttons === 1
      : t.detail === 0 && !t.pointerType;
}
function H4(t) {
  return (
    (!H1() && t.width === 0 && t.height === 0) ||
    (t.width === 1 &&
      t.height === 1 &&
      t.pressure === 0 &&
      t.detail === 0 &&
      t.pointerType === "mouse")
  );
}
function U4(t, n, a) {
  let l = S.useRef(n),
    r = Rt(() => {
      a && a(l.current);
    });
  S.useEffect(() => {
    var u;
    let c =
      t == null || (u = t.current) === null || u === void 0 ? void 0 : u.form;
    return (
      c == null || c.addEventListener("reset", r),
      () => {
        c == null || c.removeEventListener("reset", r);
      }
    );
  }, [t, r]);
}
const K4 = "react-aria-clear-focus",
  j4 = "react-aria-focus";
function zl(t) {
  return Ba() ? t.metaKey : t.ctrlKey;
}
const ep = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable^="false"])',
  ],
  F4 = ep.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
ep.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const I4 = ep.join(':not([hidden]):not([tabindex="-1"]),');
function G1(t) {
  return t.matches(F4);
}
function G4(t) {
  return t.matches(I4);
}
let Dd = new Map();
function Y4(t) {
  let { locale: n } = Hr(),
    a =
      n +
      (t
        ? Object.entries(t)
            .sort((r, u) => (r[0] < u[0] ? -1 : 1))
            .join()
        : "");
  if (Dd.has(a)) return Dd.get(a);
  let l = new Intl.Collator(n, t);
  return Dd.set(a, l), l;
}
let ot = typeof document < "u" ? window.visualViewport : null;
function q4(t) {
  let { direction: n } = Hr(),
    {
      arrowSize: a = 0,
      targetRef: l,
      overlayRef: r,
      scrollRef: u = r,
      placement: c = "bottom",
      containerPadding: d = 12,
      shouldFlip: h = !0,
      boundaryElement: m = typeof document < "u" ? document.body : null,
      offset: v = 0,
      crossOffset: b = 0,
      shouldUpdatePosition: g = !0,
      isOpen: T = !0,
      onClose: x,
      maxHeight: C,
      arrowBoundaryOffset: A = 0,
    } = t,
    [M, V] = S.useState(null),
    P = [g, c, r.current, l.current, u.current, d, h, m, v, b, T, n, C, A, a],
    z = S.useRef(ot == null ? void 0 : ot.scale);
  S.useEffect(() => {
    T && (z.current = ot == null ? void 0 : ot.scale);
  }, [T]);
  let R = S.useCallback(() => {
    if (
      g === !1 ||
      !T ||
      !r.current ||
      !l.current ||
      !m ||
      (ot == null ? void 0 : ot.scale) !== z.current
    )
      return;
    let W = null;
    if (u.current && u.current.contains(document.activeElement)) {
      var D;
      let O =
          (D = document.activeElement) === null || D === void 0
            ? void 0
            : D.getBoundingClientRect(),
        te = u.current.getBoundingClientRect();
      var F;
      if (
        ((W = {
          type: "top",
          offset:
            ((F = O == null ? void 0 : O.top) !== null && F !== void 0
              ? F
              : 0) - te.top,
        }),
        W.offset > te.height / 2)
      ) {
        W.type = "bottom";
        var _;
        W.offset =
          ((_ = O == null ? void 0 : O.bottom) !== null && _ !== void 0
            ? _
            : 0) - te.bottom;
      }
    }
    let H = r.current;
    if (!C && r.current) {
      var Z;
      (H.style.top = "0px"), (H.style.bottom = "");
      var $;
      H.style.maxHeight =
        (($ =
          (Z = window.visualViewport) === null || Z === void 0
            ? void 0
            : Z.height) !== null && $ !== void 0
          ? $
          : window.innerHeight) + "px";
    }
    let N = e4({
      placement: Z4(c, n),
      overlayNode: r.current,
      targetNode: l.current,
      scrollNode: u.current || r.current,
      padding: d,
      shouldFlip: h,
      boundaryElement: m,
      offset: v,
      crossOffset: b,
      maxHeight: C,
      arrowSize: a,
      arrowBoundaryOffset: A,
    });
    if (N.position) {
      if (
        ((H.style.top = ""),
        (H.style.bottom = ""),
        (H.style.left = ""),
        (H.style.right = ""),
        Object.keys(N.position).forEach(
          (O) => (H.style[O] = N.position[O] + "px"),
        ),
        (H.style.maxHeight = N.maxHeight != null ? N.maxHeight + "px" : ""),
        W && document.activeElement && u.current)
      ) {
        let O = document.activeElement.getBoundingClientRect(),
          te = u.current.getBoundingClientRect(),
          ne = O[W.type] - te[W.type];
        u.current.scrollTop += ne - W.offset;
      }
      V(N);
    }
  }, P);
  lt(R, P), X4(R), Qb({ ref: r, onResize: R }), Qb({ ref: l, onResize: R });
  let B = S.useRef(!1);
  lt(() => {
    let W,
      D = () => {
        (B.current = !0),
          clearTimeout(W),
          (W = setTimeout(() => {
            B.current = !1;
          }, 500)),
          R();
      },
      F = () => {
        B.current && D();
      };
    return (
      ot == null || ot.addEventListener("resize", D),
      ot == null || ot.addEventListener("scroll", F),
      () => {
        ot == null || ot.removeEventListener("resize", D),
          ot == null || ot.removeEventListener("scroll", F);
      }
    );
  }, [R]);
  let X = S.useCallback(() => {
    B.current || x == null || x();
  }, [x, B]);
  i4({ triggerRef: l, isOpen: T, onClose: x && X });
  var w, G;
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...(M == null ? void 0 : M.position),
        maxHeight:
          (w = M == null ? void 0 : M.maxHeight) !== null && w !== void 0
            ? w
            : "100vh",
      },
    },
    placement:
      (G = M == null ? void 0 : M.placement) !== null && G !== void 0
        ? G
        : null,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: M == null ? void 0 : M.arrowOffsetLeft,
        top: M == null ? void 0 : M.arrowOffsetTop,
      },
    },
    updatePosition: R,
  };
}
function X4(t) {
  lt(
    () => (
      window.addEventListener("resize", t, !1),
      () => {
        window.removeEventListener("resize", t, !1);
      }
    ),
    [t],
  );
}
function Z4(t, n) {
  return n === "rtl"
    ? t.replace("start", "right").replace("end", "left")
    : t.replace("start", "left").replace("end", "right");
}
function W4(t) {
  const n = cn(t);
  if (!(t instanceof n.HTMLElement) && !(t instanceof n.SVGElement)) return !1;
  let { display: a, visibility: l } = t.style,
    r = a !== "none" && l !== "hidden" && l !== "collapse";
  if (r) {
    const { getComputedStyle: u } = t.ownerDocument.defaultView;
    let { display: c, visibility: d } = u(t);
    r = c !== "none" && d !== "hidden" && d !== "collapse";
  }
  return r;
}
function Q4(t, n) {
  return (
    !t.hasAttribute("hidden") &&
    !t.hasAttribute("data-react-aria-prevent-focus") &&
    (t.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY"
      ? t.hasAttribute("open")
      : !0)
  );
}
function Y1(t, n) {
  return (
    t.nodeName !== "#comment" &&
    W4(t) &&
    Q4(t, n) &&
    (!t.parentElement || Y1(t.parentElement, t))
  );
}
let Vl = "default",
  lh = "",
  $u = new WeakMap();
function pg(t) {
  if (Br()) {
    if (Vl === "default") {
      const n = Ke(t);
      (lh = n.documentElement.style.webkitUserSelect),
        (n.documentElement.style.webkitUserSelect = "none");
    }
    Vl = "disabled";
  } else if (t instanceof HTMLElement || t instanceof SVGElement) {
    let n = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    $u.set(t, t.style[n]), (t.style[n] = "none");
  }
}
function Ad(t) {
  if (Br()) {
    if (Vl !== "disabled") return;
    (Vl = "restoring"),
      setTimeout(() => {
        N1(() => {
          if (Vl === "restoring") {
            const n = Ke(t);
            n.documentElement.style.webkitUserSelect === "none" &&
              (n.documentElement.style.webkitUserSelect = lh || ""),
              (lh = ""),
              (Vl = "default");
          }
        });
      }, 300);
  } else if (
    (t instanceof HTMLElement || t instanceof SVGElement) &&
    t &&
    $u.has(t)
  ) {
    let n = $u.get(t),
      a = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    t.style[a] === "none" && (t.style[a] = n),
      t.getAttribute("style") === "" && t.removeAttribute("style"),
      $u.delete(t);
  }
}
const tp = Ne.createContext({ register: () => {} });
tp.displayName = "PressResponderContext";
class q1 {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(n, a) {
    (this.nativeEvent = a),
      (this.target = a.target),
      (this.currentTarget = a.currentTarget),
      (this.relatedTarget = a.relatedTarget),
      (this.bubbles = a.bubbles),
      (this.cancelable = a.cancelable),
      (this.defaultPrevented = a.defaultPrevented),
      (this.eventPhase = a.eventPhase),
      (this.isTrusted = a.isTrusted),
      (this.timeStamp = a.timeStamp),
      (this.type = n);
  }
}
function X1(t) {
  let n = S.useRef({ isFocused: !1, observer: null });
  lt(() => {
    const l = n.current;
    return () => {
      l.observer && (l.observer.disconnect(), (l.observer = null));
    };
  }, []);
  let a = kn((l) => {
    t == null || t(l);
  });
  return S.useCallback(
    (l) => {
      if (
        l.target instanceof HTMLButtonElement ||
        l.target instanceof HTMLInputElement ||
        l.target instanceof HTMLTextAreaElement ||
        l.target instanceof HTMLSelectElement
      ) {
        n.current.isFocused = !0;
        let r = l.target,
          u = (c) => {
            (n.current.isFocused = !1),
              r.disabled && a(new q1("blur", c)),
              n.current.observer &&
                (n.current.observer.disconnect(), (n.current.observer = null));
          };
        r.addEventListener("focusout", u, { once: !0 }),
          (n.current.observer = new MutationObserver(() => {
            if (n.current.isFocused && r.disabled) {
              var c;
              (c = n.current.observer) === null ||
                c === void 0 ||
                c.disconnect();
              let d =
                r === document.activeElement ? null : document.activeElement;
              r.dispatchEvent(new FocusEvent("blur", { relatedTarget: d })),
                r.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: d }),
                );
            }
          })),
          n.current.observer.observe(r, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [a],
  );
}
let Ou = !1;
function mg(t) {
  for (; t && !_1(t); ) t = t.parentElement;
  let n = cn(t),
    a = n.document.activeElement;
  if (!a || a === t) return;
  Ou = !0;
  let l = !1,
    r = (v) => {
      (v.target === a || l) && v.stopImmediatePropagation();
    },
    u = (v) => {
      (v.target === a || l) &&
        (v.stopImmediatePropagation(), !t && !l && ((l = !0), Xl(a), h()));
    },
    c = (v) => {
      (v.target === t || l) && v.stopImmediatePropagation();
    },
    d = (v) => {
      (v.target === t || l) &&
        (v.stopImmediatePropagation(), l || ((l = !0), Xl(a), h()));
    };
  n.addEventListener("blur", r, !0),
    n.addEventListener("focusout", u, !0),
    n.addEventListener("focusin", d, !0),
    n.addEventListener("focus", c, !0);
  let h = () => {
      cancelAnimationFrame(m),
        n.removeEventListener("blur", r, !0),
        n.removeEventListener("focusout", u, !0),
        n.removeEventListener("focusin", d, !0),
        n.removeEventListener("focus", c, !0),
        (Ou = !1),
        (l = !1);
    },
    m = requestAnimationFrame(h);
  return h;
}
function J4(t, n) {
  return n.get ? n.get.call(t) : n.value;
}
function Z1(t, n, a) {
  if (!n.has(t))
    throw new TypeError("attempted to " + a + " private field on non-instance");
  return n.get(t);
}
function W1(t, n) {
  var a = Z1(t, n, "get");
  return J4(t, a);
}
function ew(t, n, a) {
  if (n.set) n.set.call(t, a);
  else {
    if (!n.writable)
      throw new TypeError("attempted to set read only private field");
    n.value = a;
  }
}
function Lu(t, n, a) {
  var l = Z1(t, n, "set");
  return ew(t, l, a), a;
}
function tw(t) {
  let n = S.useContext(tp);
  if (n) {
    let { register: a, ...l } = n;
    (t = pe(l, t)), a();
  }
  return O1(n, t.ref), t;
}
var fu = new WeakMap();
let du = class {
  continuePropagation() {
    Lu(this, fu, !1);
  }
  get shouldStopPropagation() {
    return W1(this, fu);
  }
  constructor(n, a, l, r) {
    f1(this, fu, { writable: !0, value: void 0 }), Lu(this, fu, !0);
    var u;
    let c =
      (u = r == null ? void 0 : r.target) !== null && u !== void 0
        ? u
        : l.currentTarget;
    const d = c == null ? void 0 : c.getBoundingClientRect();
    let h,
      m = 0,
      v,
      b = null;
    l.clientX != null &&
      l.clientY != null &&
      ((v = l.clientX), (b = l.clientY)),
      d &&
        (v != null && b != null
          ? ((h = v - d.left), (m = b - d.top))
          : ((h = d.width / 2), (m = d.height / 2))),
      (this.type = n),
      (this.pointerType = a),
      (this.target = l.currentTarget),
      (this.shiftKey = l.shiftKey),
      (this.metaKey = l.metaKey),
      (this.ctrlKey = l.ctrlKey),
      (this.altKey = l.altKey),
      (this.x = h),
      (this.y = m);
  }
};
const vg = Symbol("linkClicked");
function Ur(t) {
  let {
      onPress: n,
      onPressChange: a,
      onPressStart: l,
      onPressEnd: r,
      onPressUp: u,
      isDisabled: c,
      isPressed: d,
      preventFocusOnPress: h,
      shouldCancelOnPointerExit: m,
      allowTextSelectionOnPress: v,
      ref: b,
      ...g
    } = tw(t),
    [T, x] = S.useState(!1),
    C = S.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
      disposables: [],
    }),
    { addGlobalListener: A, removeAllGlobalListeners: M } = qh(),
    V = kn((w, G) => {
      let W = C.current;
      if (c || W.didFirePressStart) return !1;
      let D = !0;
      if (((W.isTriggeringEvent = !0), l)) {
        let F = new du("pressstart", G, w);
        l(F), (D = F.shouldStopPropagation);
      }
      return (
        a && a(!0),
        (W.isTriggeringEvent = !1),
        (W.didFirePressStart = !0),
        x(!0),
        D
      );
    }),
    P = kn((w, G, W = !0) => {
      let D = C.current;
      if (!D.didFirePressStart) return !1;
      (D.didFirePressStart = !1), (D.isTriggeringEvent = !0);
      let F = !0;
      if (r) {
        let _ = new du("pressend", G, w);
        r(_), (F = _.shouldStopPropagation);
      }
      if ((a && a(!1), x(!1), n && W && !c)) {
        let _ = new du("press", G, w);
        n(_), F && (F = _.shouldStopPropagation);
      }
      return (D.isTriggeringEvent = !1), F;
    }),
    z = kn((w, G) => {
      let W = C.current;
      if (c) return !1;
      if (u) {
        W.isTriggeringEvent = !0;
        let D = new du("pressup", G, w);
        return u(D), (W.isTriggeringEvent = !1), D.shouldStopPropagation;
      }
      return !0;
    }),
    R = kn((w) => {
      let G = C.current;
      if (G.isPressed && G.target) {
        G.didFirePressStart &&
          G.pointerType != null &&
          P(Rl(G.target, w), G.pointerType, !1),
          (G.isPressed = !1),
          (G.isOverTarget = !1),
          (G.activePointerId = null),
          (G.pointerType = null),
          M(),
          v || Ad(G.target);
        for (let W of G.disposables) W();
        G.disposables = [];
      }
    }),
    B = kn((w) => {
      m && R(w);
    }),
    X = S.useMemo(() => {
      let w = C.current,
        G = {
          onKeyDown(D) {
            if (
              Pd(D.nativeEvent, D.currentTarget) &&
              Xe(D.currentTarget, _e(D.nativeEvent))
            ) {
              var F;
              yg(_e(D.nativeEvent), D.key) && D.preventDefault();
              let _ = !0;
              if (!w.isPressed && !D.repeat) {
                (w.target = D.currentTarget),
                  (w.isPressed = !0),
                  (w.pointerType = "keyboard"),
                  (_ = V(D, "keyboard"));
                let H = D.currentTarget,
                  Z = ($) => {
                    Pd($, H) &&
                      !$.repeat &&
                      Xe(H, _e($)) &&
                      w.target &&
                      z(Rl(w.target, $), "keyboard");
                  };
                A(Ke(D.currentTarget), "keyup", Bt(Z, W), !0);
              }
              _ && D.stopPropagation(),
                D.metaKey &&
                  Zl() &&
                  ((F = w.metaKeyEvents) === null ||
                    F === void 0 ||
                    F.set(D.key, D.nativeEvent));
            } else D.key === "Meta" && (w.metaKeyEvents = new Map());
          },
          onClick(D) {
            if (
              !(D && !Xe(D.currentTarget, _e(D.nativeEvent))) &&
              D &&
              D.button === 0 &&
              !w.isTriggeringEvent &&
              !Va.isOpening
            ) {
              let F = !0;
              if (
                (c && D.preventDefault(),
                !w.ignoreEmulatedMouseEvents &&
                  !w.isPressed &&
                  (w.pointerType === "virtual" || eh(D.nativeEvent)))
              ) {
                let _ = V(D, "virtual"),
                  H = z(D, "virtual"),
                  Z = P(D, "virtual");
                F = _ && H && Z;
              } else if (w.isPressed && w.pointerType !== "keyboard") {
                let _ = w.pointerType || D.nativeEvent.pointerType || "virtual";
                (F = P(Rl(D.currentTarget, D), _, !0)),
                  (w.isOverTarget = !1),
                  R(D);
              }
              (w.ignoreEmulatedMouseEvents = !1), F && D.stopPropagation();
            }
          },
        },
        W = (D) => {
          var F;
          if (w.isPressed && w.target && Pd(D, w.target)) {
            var _;
            yg(_e(D), D.key) && D.preventDefault();
            let Z = _e(D);
            P(Rl(w.target, D), "keyboard", Xe(w.target, _e(D))),
              M(),
              D.key !== "Enter" &&
                np(w.target) &&
                Xe(w.target, Z) &&
                !D[vg] &&
                ((D[vg] = !0), Va(w.target, D, !1)),
              (w.isPressed = !1),
              (_ = w.metaKeyEvents) === null || _ === void 0 || _.delete(D.key);
          } else if (
            D.key === "Meta" &&
            !((F = w.metaKeyEvents) === null || F === void 0) &&
            F.size
          ) {
            var H;
            let Z = w.metaKeyEvents;
            w.metaKeyEvents = void 0;
            for (let $ of Z.values())
              (H = w.target) === null ||
                H === void 0 ||
                H.dispatchEvent(new KeyboardEvent("keyup", $));
          }
        };
      if (typeof PointerEvent < "u") {
        (G.onPointerDown = (_) => {
          if (_.button !== 0 || !Xe(_.currentTarget, _e(_.nativeEvent))) return;
          if (j3(_.nativeEvent)) {
            w.pointerType = "virtual";
            return;
          }
          w.pointerType = _.pointerType;
          let H = !0;
          if (!w.isPressed) {
            (w.isPressed = !0),
              (w.isOverTarget = !0),
              (w.activePointerId = _.pointerId),
              (w.target = _.currentTarget),
              v || pg(w.target),
              (H = V(_, w.pointerType));
            let Z = _e(_.nativeEvent);
            "releasePointerCapture" in Z &&
              Z.releasePointerCapture(_.pointerId),
              A(Ke(_.currentTarget), "pointerup", D, !1),
              A(Ke(_.currentTarget), "pointercancel", F, !1);
          }
          H && _.stopPropagation();
        }),
          (G.onMouseDown = (_) => {
            if (Xe(_.currentTarget, _e(_.nativeEvent)) && _.button === 0) {
              if (h) {
                let H = mg(_.target);
                H && w.disposables.push(H);
              }
              _.stopPropagation();
            }
          }),
          (G.onPointerUp = (_) => {
            !Xe(_.currentTarget, _e(_.nativeEvent)) ||
              w.pointerType === "virtual" ||
              (_.button === 0 && z(_, w.pointerType || _.pointerType));
          }),
          (G.onPointerEnter = (_) => {
            _.pointerId === w.activePointerId &&
              w.target &&
              !w.isOverTarget &&
              w.pointerType != null &&
              ((w.isOverTarget = !0), V(Rl(w.target, _), w.pointerType));
          }),
          (G.onPointerLeave = (_) => {
            _.pointerId === w.activePointerId &&
              w.target &&
              w.isOverTarget &&
              w.pointerType != null &&
              ((w.isOverTarget = !1),
              P(Rl(w.target, _), w.pointerType, !1),
              B(_));
          });
        let D = (_) => {
            if (
              _.pointerId === w.activePointerId &&
              w.isPressed &&
              _.button === 0 &&
              w.target
            ) {
              if (Xe(w.target, _e(_)) && w.pointerType != null) {
                let H = !1,
                  Z = setTimeout(() => {
                    w.isPressed &&
                      w.target instanceof HTMLElement &&
                      (H ? R(_) : (Xl(w.target), w.target.click()));
                  }, 80);
                A(_.currentTarget, "click", () => (H = !0), !0),
                  w.disposables.push(() => clearTimeout(Z));
              } else R(_);
              w.isOverTarget = !1;
            }
          },
          F = (_) => {
            R(_);
          };
        G.onDragStart = (_) => {
          Xe(_.currentTarget, _e(_.nativeEvent)) && R(_);
        };
      } else {
        (G.onMouseDown = (_) => {
          if (_.button !== 0 || !Xe(_.currentTarget, _e(_.nativeEvent))) return;
          if (w.ignoreEmulatedMouseEvents) {
            _.stopPropagation();
            return;
          }
          if (
            ((w.isPressed = !0),
            (w.isOverTarget = !0),
            (w.target = _.currentTarget),
            (w.pointerType = eh(_.nativeEvent) ? "virtual" : "mouse"),
            ec.flushSync(() => V(_, w.pointerType)) && _.stopPropagation(),
            h)
          ) {
            let Z = mg(_.target);
            Z && w.disposables.push(Z);
          }
          A(Ke(_.currentTarget), "mouseup", D, !1);
        }),
          (G.onMouseEnter = (_) => {
            if (!Xe(_.currentTarget, _e(_.nativeEvent))) return;
            let H = !0;
            w.isPressed &&
              !w.ignoreEmulatedMouseEvents &&
              w.pointerType != null &&
              ((w.isOverTarget = !0), (H = V(_, w.pointerType))),
              H && _.stopPropagation();
          }),
          (G.onMouseLeave = (_) => {
            if (!Xe(_.currentTarget, _e(_.nativeEvent))) return;
            let H = !0;
            w.isPressed &&
              !w.ignoreEmulatedMouseEvents &&
              w.pointerType != null &&
              ((w.isOverTarget = !1), (H = P(_, w.pointerType, !1)), B(_)),
              H && _.stopPropagation();
          }),
          (G.onMouseUp = (_) => {
            Xe(_.currentTarget, _e(_.nativeEvent)) &&
              !w.ignoreEmulatedMouseEvents &&
              _.button === 0 &&
              z(_, w.pointerType || "mouse");
          });
        let D = (_) => {
          if (_.button === 0) {
            if (w.ignoreEmulatedMouseEvents) {
              w.ignoreEmulatedMouseEvents = !1;
              return;
            }
            (w.target &&
              w.target.contains(_.target) &&
              w.pointerType != null) ||
              R(_),
              (w.isOverTarget = !1);
          }
        };
        (G.onTouchStart = (_) => {
          if (!Xe(_.currentTarget, _e(_.nativeEvent))) return;
          let H = nw(_.nativeEvent);
          if (!H) return;
          (w.activePointerId = H.identifier),
            (w.ignoreEmulatedMouseEvents = !0),
            (w.isOverTarget = !0),
            (w.isPressed = !0),
            (w.target = _.currentTarget),
            (w.pointerType = "touch"),
            v || pg(w.target),
            V(Ji(w.target, _), w.pointerType) && _.stopPropagation(),
            A(cn(_.currentTarget), "scroll", F, !0);
        }),
          (G.onTouchMove = (_) => {
            if (!Xe(_.currentTarget, _e(_.nativeEvent))) return;
            if (!w.isPressed) {
              _.stopPropagation();
              return;
            }
            let H = bg(_.nativeEvent, w.activePointerId),
              Z = !0;
            H && gg(H, _.currentTarget)
              ? !w.isOverTarget &&
                w.pointerType != null &&
                ((w.isOverTarget = !0), (Z = V(Ji(w.target, _), w.pointerType)))
              : w.isOverTarget &&
                w.pointerType != null &&
                ((w.isOverTarget = !1),
                (Z = P(Ji(w.target, _), w.pointerType, !1)),
                B(Ji(w.target, _))),
              Z && _.stopPropagation();
          }),
          (G.onTouchEnd = (_) => {
            if (!Xe(_.currentTarget, _e(_.nativeEvent))) return;
            if (!w.isPressed) {
              _.stopPropagation();
              return;
            }
            let H = bg(_.nativeEvent, w.activePointerId),
              Z = !0;
            H && gg(H, _.currentTarget) && w.pointerType != null
              ? (z(Ji(w.target, _), w.pointerType),
                (Z = P(Ji(w.target, _), w.pointerType)))
              : w.isOverTarget &&
                w.pointerType != null &&
                (Z = P(Ji(w.target, _), w.pointerType, !1)),
              Z && _.stopPropagation(),
              (w.isPressed = !1),
              (w.activePointerId = null),
              (w.isOverTarget = !1),
              (w.ignoreEmulatedMouseEvents = !0),
              w.target && !v && Ad(w.target),
              M();
          }),
          (G.onTouchCancel = (_) => {
            Xe(_.currentTarget, _e(_.nativeEvent)) &&
              (_.stopPropagation(), w.isPressed && R(Ji(w.target, _)));
          });
        let F = (_) => {
          w.isPressed &&
            Xe(_e(_), w.target) &&
            R({
              currentTarget: w.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            });
        };
        G.onDragStart = (_) => {
          Xe(_.currentTarget, _e(_.nativeEvent)) && R(_);
        };
      }
      return G;
    }, [A, c, h, M, v, R, B, P, V, z]);
  return (
    S.useEffect(() => {
      let w = C.current;
      return () => {
        var G;
        v || Ad((G = w.target) !== null && G !== void 0 ? G : void 0);
        for (let W of w.disposables) W();
        w.disposables = [];
      };
    }, [v]),
    { isPressed: d || T, pressProps: pe(g, X) }
  );
}
function np(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function Pd(t, n) {
  const { key: a, code: l } = t,
    r = n,
    u = r.getAttribute("role");
  return (
    (a === "Enter" || a === " " || a === "Spacebar" || l === "Space") &&
    !(
      (r instanceof cn(r).HTMLInputElement && !Q1(r, a)) ||
      r instanceof cn(r).HTMLTextAreaElement ||
      r.isContentEditable
    ) &&
    !((u === "link" || (!u && np(r))) && a !== "Enter")
  );
}
function nw(t) {
  const { targetTouches: n } = t;
  return n.length > 0 ? n[0] : null;
}
function bg(t, n) {
  const a = t.changedTouches;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (r.identifier === n) return r;
  }
  return null;
}
function Ji(t, n) {
  let a = 0,
    l = 0;
  return (
    n.targetTouches &&
      n.targetTouches.length === 1 &&
      ((a = n.targetTouches[0].clientX), (l = n.targetTouches[0].clientY)),
    {
      currentTarget: t,
      shiftKey: n.shiftKey,
      ctrlKey: n.ctrlKey,
      metaKey: n.metaKey,
      altKey: n.altKey,
      clientX: a,
      clientY: l,
    }
  );
}
function Rl(t, n) {
  let a = n.clientX,
    l = n.clientY;
  return {
    currentTarget: t,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: a,
    clientY: l,
  };
}
function iw(t) {
  let n = 0,
    a = 0;
  return (
    t.width !== void 0
      ? (n = t.width / 2)
      : t.radiusX !== void 0 && (n = t.radiusX),
    t.height !== void 0
      ? (a = t.height / 2)
      : t.radiusY !== void 0 && (a = t.radiusY),
    {
      top: t.clientY - a,
      right: t.clientX + n,
      bottom: t.clientY + a,
      left: t.clientX - n,
    }
  );
}
function aw(t, n) {
  return !(
    t.left > n.right ||
    n.left > t.right ||
    t.top > n.bottom ||
    n.top > t.bottom
  );
}
function gg(t, n) {
  let a = n.getBoundingClientRect(),
    l = iw(t);
  return aw(a, l);
}
function lw(t) {
  return t instanceof HTMLInputElement
    ? !1
    : t instanceof HTMLButtonElement
      ? t.type !== "submit" && t.type !== "reset"
      : !np(t);
}
function yg(t, n) {
  return t instanceof HTMLInputElement ? !Q1(t, n) : lw(t);
}
const sw = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function Q1(t, n) {
  return t.type === "checkbox" || t.type === "radio"
    ? n === " "
    : sw.has(t.type);
}
let ns = null,
  sh = new Set(),
  vr = new Map(),
  Ha = !1,
  rh = !1;
const rw = { Tab: !0, Escape: !0 };
function ip(t, n) {
  for (let a of sh) a(t, n);
}
function ow(t) {
  return !(
    t.metaKey ||
    (!Zl() && t.altKey) ||
    t.ctrlKey ||
    t.key === "Control" ||
    t.key === "Shift" ||
    t.key === "Meta"
  );
}
function _u(t) {
  (Ha = !0), ow(t) && ((ns = "keyboard"), ip("keyboard", t));
}
function Cn(t) {
  (ns = "pointer"),
    (t.type === "mousedown" || t.type === "pointerdown") &&
      ((Ha = !0), ip("pointer", t));
}
function J1(t) {
  eh(t) && ((Ha = !0), (ns = "virtual"));
}
function eS(t) {
  t.target === window ||
    t.target === document ||
    Ou ||
    !t.isTrusted ||
    (!Ha && !rh && ((ns = "virtual"), ip("virtual", t)), (Ha = !1), (rh = !1));
}
function tS() {
  Ou || ((Ha = !1), (rh = !0));
}
function oh(t) {
  if (typeof window > "u" || vr.get(cn(t))) return;
  const n = cn(t),
    a = Ke(t);
  let l = n.HTMLElement.prototype.focus;
  (n.HTMLElement.prototype.focus = function () {
    (Ha = !0), l.apply(this, arguments);
  }),
    a.addEventListener("keydown", _u, !0),
    a.addEventListener("keyup", _u, !0),
    a.addEventListener("click", J1, !0),
    n.addEventListener("focus", eS, !0),
    n.addEventListener("blur", tS, !1),
    typeof PointerEvent < "u"
      ? (a.addEventListener("pointerdown", Cn, !0),
        a.addEventListener("pointermove", Cn, !0),
        a.addEventListener("pointerup", Cn, !0))
      : (a.addEventListener("mousedown", Cn, !0),
        a.addEventListener("mousemove", Cn, !0),
        a.addEventListener("mouseup", Cn, !0)),
    n.addEventListener(
      "beforeunload",
      () => {
        nS(t);
      },
      { once: !0 },
    ),
    vr.set(n, { focus: l });
}
const nS = (t, n) => {
  const a = cn(t),
    l = Ke(t);
  n && l.removeEventListener("DOMContentLoaded", n),
    vr.has(a) &&
      ((a.HTMLElement.prototype.focus = vr.get(a).focus),
      l.removeEventListener("keydown", _u, !0),
      l.removeEventListener("keyup", _u, !0),
      l.removeEventListener("click", J1, !0),
      a.removeEventListener("focus", eS, !0),
      a.removeEventListener("blur", tS, !1),
      typeof PointerEvent < "u"
        ? (l.removeEventListener("pointerdown", Cn, !0),
          l.removeEventListener("pointermove", Cn, !0),
          l.removeEventListener("pointerup", Cn, !0))
        : (l.removeEventListener("mousedown", Cn, !0),
          l.removeEventListener("mousemove", Cn, !0),
          l.removeEventListener("mouseup", Cn, !0)),
      vr.delete(a));
};
function uw(t) {
  const n = Ke(t);
  let a;
  return (
    n.readyState !== "loading"
      ? oh(t)
      : ((a = () => {
          oh(t);
        }),
        n.addEventListener("DOMContentLoaded", a)),
    () => nS(t, a)
  );
}
typeof document < "u" && uw();
function $r() {
  return ns !== "pointer";
}
function ap() {
  return ns;
}
const cw = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function fw(t, n, a) {
  let l = Ke(a == null ? void 0 : a.target);
  const r =
      typeof window < "u"
        ? cn(a == null ? void 0 : a.target).HTMLInputElement
        : HTMLInputElement,
    u =
      typeof window < "u"
        ? cn(a == null ? void 0 : a.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    c =
      typeof window < "u"
        ? cn(a == null ? void 0 : a.target).HTMLElement
        : HTMLElement,
    d =
      typeof window < "u"
        ? cn(a == null ? void 0 : a.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (t =
      t ||
      (l.activeElement instanceof r && !cw.has(l.activeElement.type)) ||
      l.activeElement instanceof u ||
      (l.activeElement instanceof c && l.activeElement.isContentEditable)),
    !(t && n === "keyboard" && a instanceof d && !rw[a.key])
  );
}
function dw(t, n, a) {
  oh(),
    S.useEffect(() => {
      let l = (r, u) => {
        fw(!!(a != null && a.isTextInput), r, u) && t($r());
      };
      return (
        sh.add(l),
        () => {
          sh.delete(l);
        }
      );
    }, n);
}
function zu(t) {
  const n = Ke(t),
    a = Zt(n);
  if (ap() === "virtual") {
    let l = a;
    N1(() => {
      Zt(n) === l && t.isConnected && Xl(t);
    });
  } else Xl(t);
}
function iS(t) {
  let { isDisabled: n, onFocus: a, onBlur: l, onFocusChange: r } = t;
  const u = S.useCallback(
      (h) => {
        if (h.target === h.currentTarget) return l && l(h), r && r(!1), !0;
      },
      [l, r],
    ),
    c = X1(u),
    d = S.useCallback(
      (h) => {
        const m = Ke(h.target),
          v = m ? Zt(m) : Zt();
        h.target === h.currentTarget &&
          v === _e(h.nativeEvent) &&
          (a && a(h), r && r(!0), c(h));
      },
      [r, a, c],
    );
  return {
    focusProps: {
      onFocus: !n && (a || r || l) ? d : void 0,
      onBlur: !n && (l || r) ? u : void 0,
    },
  };
}
function Sg(t) {
  if (!t) return;
  let n = !0;
  return (a) => {
    let l = {
      ...a,
      preventDefault() {
        a.preventDefault();
      },
      isDefaultPrevented() {
        return a.isDefaultPrevented();
      },
      stopPropagation() {
        n
          ? console.error(
              "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.",
            )
          : (n = !0);
      },
      continuePropagation() {
        n = !1;
      },
      isPropagationStopped() {
        return n;
      },
    };
    t(l), n && a.stopPropagation();
  };
}
function hw(t) {
  return {
    keyboardProps: t.isDisabled
      ? {}
      : { onKeyDown: Sg(t.onKeyDown), onKeyUp: Sg(t.onKeyUp) },
  };
}
let pw = Ne.createContext(null);
function mw(t) {
  let n = S.useContext(pw) || {};
  O1(n, t);
  let { ref: a, ...l } = n;
  return l;
}
function Kr(t, n) {
  let { focusProps: a } = iS(t),
    { keyboardProps: l } = hw(t),
    r = pe(a, l),
    u = mw(n),
    c = t.isDisabled ? {} : u,
    d = S.useRef(t.autoFocus);
  S.useEffect(() => {
    d.current && n.current && zu(n.current), (d.current = !1);
  }, [n]);
  let h = t.excludeFromTabOrder ? -1 : 0;
  return (
    t.isDisabled && (h = void 0),
    { focusableProps: pe({ ...r, tabIndex: h }, c) }
  );
}
function vw({ children: t }) {
  let n = S.useMemo(() => ({ register: () => {} }), []);
  return Ne.createElement(tp.Provider, { value: n }, t);
}
function ic(t) {
  let {
      isDisabled: n,
      onBlurWithin: a,
      onFocusWithin: l,
      onFocusWithinChange: r,
    } = t,
    u = S.useRef({ isFocusWithin: !1 }),
    { addGlobalListener: c, removeAllGlobalListeners: d } = qh(),
    h = S.useCallback(
      (b) => {
        b.currentTarget.contains(b.target) &&
          u.current.isFocusWithin &&
          !b.currentTarget.contains(b.relatedTarget) &&
          ((u.current.isFocusWithin = !1), d(), a && a(b), r && r(!1));
      },
      [a, r, u, d],
    ),
    m = X1(h),
    v = S.useCallback(
      (b) => {
        if (!b.currentTarget.contains(b.target)) return;
        const g = Ke(b.target),
          T = Zt(g);
        if (!u.current.isFocusWithin && T === _e(b.nativeEvent)) {
          l && l(b), r && r(!0), (u.current.isFocusWithin = !0), m(b);
          let x = b.currentTarget;
          c(
            g,
            "focus",
            (C) => {
              if (u.current.isFocusWithin && !Xe(x, C.target)) {
                let A = new q1(
                  "blur",
                  new g.defaultView.FocusEvent("blur", {
                    relatedTarget: C.target,
                  }),
                );
                (A.target = x), (A.currentTarget = x), h(A);
              }
            },
            { capture: !0 },
          );
        }
      },
      [l, r, m, c, h],
    );
  return n
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: v, onBlur: h } };
}
let Vu = !1,
  Rd = 0;
function uh() {
  (Vu = !0),
    setTimeout(() => {
      Vu = !1;
    }, 50);
}
function Tg(t) {
  t.pointerType === "touch" && uh();
}
function bw() {
  if (!(typeof document > "u"))
    return (
      typeof PointerEvent < "u"
        ? document.addEventListener("pointerup", Tg)
        : document.addEventListener("touchend", uh),
      Rd++,
      () => {
        Rd--,
          !(Rd > 0) &&
            (typeof PointerEvent < "u"
              ? document.removeEventListener("pointerup", Tg)
              : document.removeEventListener("touchend", uh));
      }
    );
}
function Un(t) {
  let { onHoverStart: n, onHoverChange: a, onHoverEnd: l, isDisabled: r } = t,
    [u, c] = S.useState(!1),
    d = S.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: "",
      target: null,
    }).current;
  S.useEffect(bw, []);
  let { addGlobalListener: h, removeAllGlobalListeners: m } = qh(),
    { hoverProps: v, triggerHoverEnd: b } = S.useMemo(() => {
      let g = (C, A) => {
          if (
            ((d.pointerType = A),
            r ||
              A === "touch" ||
              d.isHovered ||
              !C.currentTarget.contains(C.target))
          )
            return;
          d.isHovered = !0;
          let M = C.currentTarget;
          (d.target = M),
            h(
              Ke(C.target),
              "pointerover",
              (V) => {
                d.isHovered &&
                  d.target &&
                  !Xe(d.target, V.target) &&
                  T(V, V.pointerType);
              },
              { capture: !0 },
            ),
            n && n({ type: "hoverstart", target: M, pointerType: A }),
            a && a(!0),
            c(!0);
        },
        T = (C, A) => {
          let M = d.target;
          (d.pointerType = ""),
            (d.target = null),
            !(A === "touch" || !d.isHovered || !M) &&
              ((d.isHovered = !1),
              m(),
              l && l({ type: "hoverend", target: M, pointerType: A }),
              a && a(!1),
              c(!1));
        },
        x = {};
      return (
        typeof PointerEvent < "u"
          ? ((x.onPointerEnter = (C) => {
              (Vu && C.pointerType === "mouse") || g(C, C.pointerType);
            }),
            (x.onPointerLeave = (C) => {
              !r && C.currentTarget.contains(C.target) && T(C, C.pointerType);
            }))
          : ((x.onTouchStart = () => {
              d.ignoreEmulatedMouseEvents = !0;
            }),
            (x.onMouseEnter = (C) => {
              !d.ignoreEmulatedMouseEvents && !Vu && g(C, "mouse"),
                (d.ignoreEmulatedMouseEvents = !1);
            }),
            (x.onMouseLeave = (C) => {
              !r && C.currentTarget.contains(C.target) && T(C, "mouse");
            })),
        { hoverProps: x, triggerHoverEnd: T }
      );
    }, [n, a, l, r, d, h, m]);
  return (
    S.useEffect(() => {
      r && b({ currentTarget: d.target }, d.pointerType);
    }, [r]),
    { hoverProps: v, isHovered: u }
  );
}
function gw(t) {
  let {
      ref: n,
      onInteractOutside: a,
      isDisabled: l,
      onInteractOutsideStart: r,
    } = t,
    u = S.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
    c = kn((h) => {
      a && hu(h, n) && (r && r(h), (u.current.isPointerDown = !0));
    }),
    d = kn((h) => {
      a && a(h);
    });
  S.useEffect(() => {
    let h = u.current;
    if (l) return;
    const m = n.current,
      v = Ke(m);
    if (typeof PointerEvent < "u") {
      let b = (g) => {
        h.isPointerDown && hu(g, n) && d(g), (h.isPointerDown = !1);
      };
      return (
        v.addEventListener("pointerdown", c, !0),
        v.addEventListener("pointerup", b, !0),
        () => {
          v.removeEventListener("pointerdown", c, !0),
            v.removeEventListener("pointerup", b, !0);
        }
      );
    } else {
      let b = (T) => {
          h.ignoreEmulatedMouseEvents
            ? (h.ignoreEmulatedMouseEvents = !1)
            : h.isPointerDown && hu(T, n) && d(T),
            (h.isPointerDown = !1);
        },
        g = (T) => {
          (h.ignoreEmulatedMouseEvents = !0),
            h.isPointerDown && hu(T, n) && d(T),
            (h.isPointerDown = !1);
        };
      return (
        v.addEventListener("mousedown", c, !0),
        v.addEventListener("mouseup", b, !0),
        v.addEventListener("touchstart", c, !0),
        v.addEventListener("touchend", g, !0),
        () => {
          v.removeEventListener("mousedown", c, !0),
            v.removeEventListener("mouseup", b, !0),
            v.removeEventListener("touchstart", c, !0),
            v.removeEventListener("touchend", g, !0);
        }
      );
    }
  }, [n, l, c, d]);
}
function hu(t, n) {
  if (t.button > 0) return !1;
  if (t.target) {
    const a = t.target.ownerDocument;
    if (
      !a ||
      !a.documentElement.contains(t.target) ||
      t.target.closest("[data-react-aria-top-layer]")
    )
      return !1;
  }
  return n.current ? !t.composedPath().includes(n.current) : !1;
}
const xg = Ne.createContext(null),
  ch = "react-aria-focus-scope-restore";
let Fe = null;
function yw(t) {
  let { children: n, contain: a, restoreFocus: l, autoFocus: r } = t,
    u = S.useRef(null),
    c = S.useRef(null),
    d = S.useRef([]),
    { parentNode: h } = S.useContext(xg) || {},
    m = S.useMemo(() => new dh({ scopeRef: d }), [d]);
  lt(() => {
    let g = h || ht.root;
    if (ht.getTreeNode(g.scopeRef) && Fe && !Bu(Fe, g.scopeRef)) {
      let T = ht.getTreeNode(Fe);
      T && (g = T);
    }
    g.addChild(m), ht.addNode(m);
  }, [m, h]),
    lt(() => {
      let g = ht.getTreeNode(d);
      g && (g.contain = !!a);
    }, [a]),
    lt(() => {
      var g;
      let T = (g = u.current) === null || g === void 0 ? void 0 : g.nextSibling,
        x = [],
        C = (A) => A.stopPropagation();
      for (; T && T !== c.current; )
        x.push(T), T.addEventListener(ch, C), (T = T.nextSibling);
      return (
        (d.current = x),
        () => {
          for (let A of x) A.removeEventListener(ch, C);
        }
      );
    }, [n]),
    $w(d, l, a),
    Tw(d, a),
    ww(d, l, a),
    Ew(d, r),
    S.useEffect(() => {
      const g = Zt(Ke(d.current ? d.current[0] : void 0));
      let T = null;
      if (Dn(g, d.current)) {
        for (let x of ht.traverse())
          x.scopeRef && Dn(g, x.scopeRef.current) && (T = x);
        T === ht.getTreeNode(d) && (Fe = T.scopeRef);
      }
    }, [d]),
    lt(
      () => () => {
        var g, T, x;
        let C =
          (x =
            (T = ht.getTreeNode(d)) === null ||
            T === void 0 ||
            (g = T.parent) === null ||
            g === void 0
              ? void 0
              : g.scopeRef) !== null && x !== void 0
            ? x
            : null;
        (d === Fe || Bu(d, Fe)) && (!C || ht.getTreeNode(C)) && (Fe = C),
          ht.removeTreeNode(d);
      },
      [d],
    );
  let v = S.useMemo(() => Sw(d), []),
    b = S.useMemo(() => ({ focusManager: v, parentNode: m }), [m, v]);
  return Ne.createElement(
    xg.Provider,
    { value: b },
    Ne.createElement("span", {
      "data-focus-scope-start": !0,
      hidden: !0,
      ref: u,
    }),
    n,
    Ne.createElement("span", {
      "data-focus-scope-end": !0,
      hidden: !0,
      ref: c,
    }),
  );
}
function Sw(t) {
  return {
    focusNext(n = {}) {
      let a = t.current,
        { from: l, tabbable: r, wrap: u, accept: c } = n;
      var d;
      let h = l || Zt(Ke((d = a[0]) !== null && d !== void 0 ? d : void 0)),
        m = a[0].previousElementSibling,
        v = Pa(a),
        b = Ti(v, { tabbable: r, accept: c }, a);
      b.currentNode = Dn(h, a) ? h : m;
      let g = b.nextNode();
      return (
        !g && u && ((b.currentNode = m), (g = b.nextNode())), g && Si(g, !0), g
      );
    },
    focusPrevious(n = {}) {
      let a = t.current,
        { from: l, tabbable: r, wrap: u, accept: c } = n;
      var d;
      let h = l || Zt(Ke((d = a[0]) !== null && d !== void 0 ? d : void 0)),
        m = a[a.length - 1].nextElementSibling,
        v = Pa(a),
        b = Ti(v, { tabbable: r, accept: c }, a);
      b.currentNode = Dn(h, a) ? h : m;
      let g = b.previousNode();
      return (
        !g && u && ((b.currentNode = m), (g = b.previousNode())),
        g && Si(g, !0),
        g
      );
    },
    focusFirst(n = {}) {
      let a = t.current,
        { tabbable: l, accept: r } = n,
        u = Pa(a),
        c = Ti(u, { tabbable: l, accept: r }, a);
      c.currentNode = a[0].previousElementSibling;
      let d = c.nextNode();
      return d && Si(d, !0), d;
    },
    focusLast(n = {}) {
      let a = t.current,
        { tabbable: l, accept: r } = n,
        u = Pa(a),
        c = Ti(u, { tabbable: l, accept: r }, a);
      c.currentNode = a[a.length - 1].nextElementSibling;
      let d = c.previousNode();
      return d && Si(d, !0), d;
    },
  };
}
function Pa(t) {
  return t[0].parentElement;
}
function hr(t) {
  let n = ht.getTreeNode(Fe);
  for (; n && n.scopeRef !== t; ) {
    if (n.contain) return !1;
    n = n.parent;
  }
  return !0;
}
function Tw(t, n) {
  let a = S.useRef(void 0),
    l = S.useRef(void 0);
  lt(() => {
    let r = t.current;
    if (!n) {
      l.current && (cancelAnimationFrame(l.current), (l.current = void 0));
      return;
    }
    const u = Ke(r ? r[0] : void 0);
    let c = (m) => {
        if (
          m.key !== "Tab" ||
          m.altKey ||
          m.ctrlKey ||
          m.metaKey ||
          !hr(t) ||
          m.isComposing
        )
          return;
        let v = Zt(u),
          b = t.current;
        if (!b || !Dn(v, b)) return;
        let g = Pa(b),
          T = Ti(g, { tabbable: !0 }, b);
        if (!v) return;
        T.currentNode = v;
        let x = m.shiftKey ? T.previousNode() : T.nextNode();
        x ||
          ((T.currentNode = m.shiftKey
            ? b[b.length - 1].nextElementSibling
            : b[0].previousElementSibling),
          (x = m.shiftKey ? T.previousNode() : T.nextNode())),
          m.preventDefault(),
          x && Si(x, !0);
      },
      d = (m) => {
        (!Fe || Bu(Fe, t)) && Dn(_e(m), t.current)
          ? ((Fe = t), (a.current = _e(m)))
          : hr(t) && !na(_e(m), t)
            ? a.current
              ? a.current.focus()
              : Fe && Fe.current && fh(Fe.current)
            : hr(t) && (a.current = _e(m));
      },
      h = (m) => {
        l.current && cancelAnimationFrame(l.current),
          (l.current = requestAnimationFrame(() => {
            let v = ap(),
              b = (v === "virtual" || v === null) && kr() && M1(),
              g = Zt(u);
            if (!b && g && hr(t) && !na(g, t)) {
              Fe = t;
              let x = _e(m);
              if (x && x.isConnected) {
                var T;
                (a.current = x),
                  (T = a.current) === null || T === void 0 || T.focus();
              } else Fe.current && fh(Fe.current);
            }
          }));
      };
    return (
      u.addEventListener("keydown", c, !1),
      u.addEventListener("focusin", d, !1),
      r == null || r.forEach((m) => m.addEventListener("focusin", d, !1)),
      r == null || r.forEach((m) => m.addEventListener("focusout", h, !1)),
      () => {
        u.removeEventListener("keydown", c, !1),
          u.removeEventListener("focusin", d, !1),
          r == null ||
            r.forEach((m) => m.removeEventListener("focusin", d, !1)),
          r == null ||
            r.forEach((m) => m.removeEventListener("focusout", h, !1));
      }
    );
  }, [t, n]),
    lt(
      () => () => {
        l.current && cancelAnimationFrame(l.current);
      },
      [l],
    );
}
function aS(t) {
  return na(t);
}
function Dn(t, n) {
  return !t || !n ? !1 : n.some((a) => a.contains(t));
}
function na(t, n = null) {
  if (t instanceof Element && t.closest("[data-react-aria-top-layer]"))
    return !0;
  for (let { scopeRef: a } of ht.traverse(ht.getTreeNode(n)))
    if (a && Dn(t, a.current)) return !0;
  return !1;
}
function xw(t) {
  return na(t, Fe);
}
function Bu(t, n) {
  var a;
  let l = (a = ht.getTreeNode(n)) === null || a === void 0 ? void 0 : a.parent;
  for (; l; ) {
    if (l.scopeRef === t) return !0;
    l = l.parent;
  }
  return !1;
}
function Si(t, n = !1) {
  if (t != null && !n)
    try {
      zu(t);
    } catch {}
  else if (t != null)
    try {
      t.focus();
    } catch {}
}
function lS(t, n = !0) {
  let a = t[0].previousElementSibling,
    l = Pa(t),
    r = Ti(l, { tabbable: n }, t);
  r.currentNode = a;
  let u = r.nextNode();
  return (
    n &&
      !u &&
      ((l = Pa(t)),
      (r = Ti(l, { tabbable: !1 }, t)),
      (r.currentNode = a),
      (u = r.nextNode())),
    u
  );
}
function fh(t, n = !0) {
  Si(lS(t, n));
}
function Ew(t, n) {
  const a = Ne.useRef(n);
  S.useEffect(() => {
    if (a.current) {
      Fe = t;
      const l = Ke(t.current ? t.current[0] : void 0);
      !Dn(Zt(l), Fe.current) && t.current && fh(t.current);
    }
    a.current = !1;
  }, [t]);
}
function $w(t, n, a) {
  lt(() => {
    if (n || a) return;
    let l = t.current;
    const r = Ke(l ? l[0] : void 0);
    let u = (c) => {
      let d = _e(c);
      Dn(d, t.current) ? (Fe = t) : aS(d) || (Fe = null);
    };
    return (
      r.addEventListener("focusin", u, !1),
      l == null || l.forEach((c) => c.addEventListener("focusin", u, !1)),
      () => {
        r.removeEventListener("focusin", u, !1),
          l == null ||
            l.forEach((c) => c.removeEventListener("focusin", u, !1));
      }
    );
  }, [t, n, a]);
}
function Eg(t) {
  let n = ht.getTreeNode(Fe);
  for (; n && n.scopeRef !== t; ) {
    if (n.nodeToRestore) return !1;
    n = n.parent;
  }
  return (n == null ? void 0 : n.scopeRef) === t;
}
function ww(t, n, a) {
  const l = S.useRef(
    typeof document < "u" ? Zt(Ke(t.current ? t.current[0] : void 0)) : null,
  );
  lt(() => {
    let r = t.current;
    const u = Ke(r ? r[0] : void 0);
    if (!n || a) return;
    let c = () => {
      (!Fe || Bu(Fe, t)) && Dn(Zt(u), t.current) && (Fe = t);
    };
    return (
      u.addEventListener("focusin", c, !1),
      r == null || r.forEach((d) => d.addEventListener("focusin", c, !1)),
      () => {
        u.removeEventListener("focusin", c, !1),
          r == null ||
            r.forEach((d) => d.removeEventListener("focusin", c, !1));
      }
    );
  }, [t, a]),
    lt(() => {
      const r = Ke(t.current ? t.current[0] : void 0);
      if (!n) return;
      let u = (c) => {
        if (
          c.key !== "Tab" ||
          c.altKey ||
          c.ctrlKey ||
          c.metaKey ||
          !hr(t) ||
          c.isComposing
        )
          return;
        let d = r.activeElement;
        if (!na(d, t) || !Eg(t)) return;
        let h = ht.getTreeNode(t);
        if (!h) return;
        let m = h.nodeToRestore,
          v = Ti(r.body, { tabbable: !0 });
        v.currentNode = d;
        let b = c.shiftKey ? v.previousNode() : v.nextNode();
        if (
          ((!m || !m.isConnected || m === r.body) &&
            ((m = void 0), (h.nodeToRestore = void 0)),
          (!b || !na(b, t)) && m)
        ) {
          v.currentNode = m;
          do b = c.shiftKey ? v.previousNode() : v.nextNode();
          while (na(b, t));
          c.preventDefault(),
            c.stopPropagation(),
            b ? Si(b, !0) : aS(m) ? Si(m, !0) : d.blur();
        }
      };
      return (
        a || r.addEventListener("keydown", u, !0),
        () => {
          a || r.removeEventListener("keydown", u, !0);
        }
      );
    }, [t, n, a]),
    lt(() => {
      const r = Ke(t.current ? t.current[0] : void 0);
      if (!n) return;
      let u = ht.getTreeNode(t);
      if (u) {
        var c;
        return (
          (u.nodeToRestore =
            (c = l.current) !== null && c !== void 0 ? c : void 0),
          () => {
            let d = ht.getTreeNode(t);
            if (!d) return;
            let h = d.nodeToRestore,
              m = Zt(r);
            if (n && h && ((m && na(m, t)) || (m === r.body && Eg(t)))) {
              let v = ht.clone();
              requestAnimationFrame(() => {
                if (r.activeElement === r.body) {
                  let b = v.getTreeNode(t);
                  for (; b; ) {
                    if (b.nodeToRestore && b.nodeToRestore.isConnected) {
                      $g(b.nodeToRestore);
                      return;
                    }
                    b = b.parent;
                  }
                  for (b = v.getTreeNode(t); b; ) {
                    if (
                      b.scopeRef &&
                      b.scopeRef.current &&
                      ht.getTreeNode(b.scopeRef)
                    ) {
                      let g = lS(b.scopeRef.current, !0);
                      $g(g);
                      return;
                    }
                    b = b.parent;
                  }
                }
              });
            }
          }
        );
      }
    }, [t, n]);
}
function $g(t) {
  t.dispatchEvent(new CustomEvent(ch, { bubbles: !0, cancelable: !0 })) &&
    Si(t);
}
function Ti(t, n, a) {
  let l = n != null && n.tabbable ? Y3 : _1,
    r = (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE ? t : null,
    u = Ke(r),
    c = D3(u, t || u, NodeFilter.SHOW_ELEMENT, {
      acceptNode(d) {
        var h;
        return !(n == null || (h = n.from) === null || h === void 0) &&
          h.contains(d)
          ? NodeFilter.FILTER_REJECT
          : l(d) &&
              Y1(d) &&
              (!a || Dn(d, a)) &&
              (!(n != null && n.accept) || n.accept(d))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  return n != null && n.from && (c.currentNode = n.from), c;
}
let Cw = class sS {
    get size() {
      return this.fastMap.size;
    }
    getTreeNode(n) {
      return this.fastMap.get(n);
    }
    addTreeNode(n, a, l) {
      let r = this.fastMap.get(a ?? null);
      if (!r) return;
      let u = new dh({ scopeRef: n });
      r.addChild(u),
        (u.parent = r),
        this.fastMap.set(n, u),
        l && (u.nodeToRestore = l);
    }
    addNode(n) {
      this.fastMap.set(n.scopeRef, n);
    }
    removeTreeNode(n) {
      if (n === null) return;
      let a = this.fastMap.get(n);
      if (!a) return;
      let l = a.parent;
      for (let u of this.traverse())
        u !== a &&
          a.nodeToRestore &&
          u.nodeToRestore &&
          a.scopeRef &&
          a.scopeRef.current &&
          Dn(u.nodeToRestore, a.scopeRef.current) &&
          (u.nodeToRestore = a.nodeToRestore);
      let r = a.children;
      l &&
        (l.removeChild(a), r.size > 0 && r.forEach((u) => l && l.addChild(u))),
        this.fastMap.delete(a.scopeRef);
    }
    *traverse(n = this.root) {
      if ((n.scopeRef != null && (yield n), n.children.size > 0))
        for (let a of n.children) yield* this.traverse(a);
    }
    clone() {
      var n;
      let a = new sS();
      var l;
      for (let r of this.traverse())
        a.addTreeNode(
          r.scopeRef,
          (l =
            (n = r.parent) === null || n === void 0 ? void 0 : n.scopeRef) !==
            null && l !== void 0
            ? l
            : null,
          r.nodeToRestore,
        );
      return a;
    }
    constructor() {
      (this.fastMap = new Map()),
        (this.root = new dh({ scopeRef: null })),
        this.fastMap.set(null, this.root);
    }
  },
  dh = class {
    addChild(n) {
      this.children.add(n), (n.parent = this);
    }
    removeChild(n) {
      this.children.delete(n), (n.parent = void 0);
    }
    constructor(n) {
      (this.children = new Set()),
        (this.contain = !1),
        (this.scopeRef = n.scopeRef);
    }
  },
  ht = new Cw();
function Kn(t = {}) {
  let { autoFocus: n = !1, isTextInput: a, within: l } = t,
    r = S.useRef({ isFocused: !1, isFocusVisible: n || $r() }),
    [u, c] = S.useState(!1),
    [d, h] = S.useState(() => r.current.isFocused && r.current.isFocusVisible),
    m = S.useCallback(
      () => h(r.current.isFocused && r.current.isFocusVisible),
      [],
    ),
    v = S.useCallback(
      (T) => {
        (r.current.isFocused = T), c(T), m();
      },
      [m],
    );
  dw(
    (T) => {
      (r.current.isFocusVisible = T), m();
    },
    [],
    { isTextInput: a },
  );
  let { focusProps: b } = iS({ isDisabled: l, onFocusChange: v }),
    { focusWithinProps: g } = ic({ isDisabled: !l, onFocusWithinChange: v });
  return { isFocused: u, isFocusVisible: d, focusProps: l ? g : b };
}
function Mw(t, n) {
  let a = n == null ? void 0 : n.isDisabled,
    [l, r] = S.useState(!1);
  return (
    lt(() => {
      if (t != null && t.current && !a) {
        let u = () => {
          if (t.current) {
            let d = Ti(t.current, { tabbable: !0 });
            r(!!d.nextNode());
          }
        };
        u();
        let c = new MutationObserver(u);
        return (
          c.observe(t.current, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: ["tabIndex", "disabled"],
          }),
          () => {
            c.disconnect();
          }
        );
      }
    }),
    a ? !1 : l
  );
}
const Zn = [];
function rS(t, n) {
  let {
    onClose: a,
    shouldCloseOnBlur: l,
    isOpen: r,
    isDismissable: u = !1,
    isKeyboardDismissDisabled: c = !1,
    shouldCloseOnInteractOutside: d,
  } = t;
  S.useEffect(() => {
    if (r && !Zn.includes(n))
      return (
        Zn.push(n),
        () => {
          let x = Zn.indexOf(n);
          x >= 0 && Zn.splice(x, 1);
        }
      );
  }, [r, n]);
  let h = () => {
      Zn[Zn.length - 1] === n && a && a();
    },
    m = (x) => {
      (!d || d(x.target)) &&
        Zn[Zn.length - 1] === n &&
        (x.stopPropagation(), x.preventDefault());
    },
    v = (x) => {
      (!d || d(x.target)) &&
        (Zn[Zn.length - 1] === n && (x.stopPropagation(), x.preventDefault()),
        h());
    },
    b = (x) => {
      x.key === "Escape" &&
        !c &&
        !x.nativeEvent.isComposing &&
        (x.stopPropagation(), x.preventDefault(), h());
    };
  gw({
    ref: n,
    onInteractOutside: u && r ? v : void 0,
    onInteractOutsideStart: m,
  });
  let { focusWithinProps: g } = ic({
      isDisabled: !l,
      onBlurWithin: (x) => {
        !x.relatedTarget ||
          xw(x.relatedTarget) ||
          ((!d || d(x.relatedTarget)) && (a == null || a()));
      },
    }),
    T = (x) => {
      x.target === x.currentTarget && x.preventDefault();
    };
  return {
    overlayProps: { onKeyDown: b, ...g },
    underlayProps: { onPointerDown: T },
  };
}
const Nd = typeof document < "u" && window.visualViewport,
  Dw = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset",
  ]);
let pu = 0,
  Od;
function Aw(t = {}) {
  let { isDisabled: n } = t;
  lt(() => {
    if (!n)
      return (
        pu++,
        pu === 1 && (Br() ? (Od = Rw()) : (Od = Pw())),
        () => {
          pu--, pu === 0 && Od();
        }
      );
  }, [n]);
}
function Pw() {
  return Bt(
    Bl(
      document.documentElement,
      "paddingRight",
      `${window.innerWidth - document.documentElement.clientWidth}px`,
    ),
    Bl(document.documentElement, "overflow", "hidden"),
  );
}
function Rw() {
  let t,
    n,
    a = (m) => {
      (t = L1(m.target, !0)),
        !(t === document.documentElement && t === document.body) &&
          t instanceof HTMLElement &&
          window.getComputedStyle(t).overscrollBehavior === "auto" &&
          (n = Bl(t, "overscrollBehavior", "contain"));
    },
    l = (m) => {
      if (!t || t === document.documentElement || t === document.body) {
        m.preventDefault();
        return;
      }
      t.scrollHeight === t.clientHeight &&
        t.scrollWidth === t.clientWidth &&
        m.preventDefault();
    },
    r = () => {
      n && n();
    },
    u = (m) => {
      let v = m.target;
      Nw(v) &&
        (d(),
        (v.style.transform = "translateY(-2000px)"),
        requestAnimationFrame(() => {
          (v.style.transform = ""),
            Nd &&
              (Nd.height < window.innerHeight
                ? requestAnimationFrame(() => {
                    wg(v);
                  })
                : Nd.addEventListener("resize", () => wg(v), { once: !0 }));
        }));
    },
    c = null,
    d = () => {
      if (c) return;
      let m = () => {
          window.scrollTo(0, 0);
        },
        v = window.pageXOffset,
        b = window.pageYOffset;
      (c = Bt(
        sr(window, "scroll", m),
        Bl(
          document.documentElement,
          "paddingRight",
          `${window.innerWidth - document.documentElement.clientWidth}px`,
        ),
        Bl(document.documentElement, "overflow", "hidden"),
        Bl(document.body, "marginTop", `-${b}px`),
        () => {
          window.scrollTo(v, b);
        },
      )),
        window.scrollTo(0, 0);
    },
    h = Bt(
      sr(document, "touchstart", a, { passive: !1, capture: !0 }),
      sr(document, "touchmove", l, { passive: !1, capture: !0 }),
      sr(document, "touchend", r, { passive: !1, capture: !0 }),
      sr(document, "focus", u, !0),
    );
  return () => {
    n == null || n(), c == null || c(), h();
  };
}
function Bl(t, n, a) {
  let l = t.style[n];
  return (
    (t.style[n] = a),
    () => {
      t.style[n] = l;
    }
  );
}
function sr(t, n, a, l) {
  return (
    t.addEventListener(n, a, l),
    () => {
      t.removeEventListener(n, a, l);
    }
  );
}
function wg(t) {
  let n = document.scrollingElement || document.documentElement,
    a = t;
  for (; a && a !== n; ) {
    let l = L1(a);
    if (l !== document.documentElement && l !== document.body && l !== a) {
      let r = l.getBoundingClientRect().top,
        u = a.getBoundingClientRect().top;
      u > r + a.clientHeight && (l.scrollTop += u - r);
    }
    a = l.parentElement;
  }
}
function Nw(t) {
  return (
    (t instanceof HTMLInputElement && !Dw.has(t.type)) ||
    t instanceof HTMLTextAreaElement ||
    (t instanceof HTMLElement && t.isContentEditable)
  );
}
const hh = Ne.createContext(null);
function Ow(t) {
  let { children: n } = t,
    a = S.useContext(hh),
    [l, r] = S.useState(0),
    u = S.useMemo(
      () => ({
        parent: a,
        modalCount: l,
        addModal() {
          r((c) => c + 1), a && a.addModal();
        },
        removeModal() {
          r((c) => c - 1), a && a.removeModal();
        },
      }),
      [a, l],
    );
  return Ne.createElement(hh.Provider, { value: u }, n);
}
function Lw() {
  let t = S.useContext(hh);
  return {
    modalProviderProps: { "aria-hidden": t && t.modalCount > 0 ? !0 : void 0 },
  };
}
function _w(t) {
  let { modalProviderProps: n } = Lw();
  return Ne.createElement("div", { "data-overlay-container": !0, ...t, ...n });
}
function oS(t) {
  return Ne.createElement(Ow, null, Ne.createElement(_w, t));
}
function Cg(t) {
  let n = Vr(),
    { portalContainer: a = n ? null : document.body, ...l } = t;
  if (
    (Ne.useEffect(() => {
      if (a != null && a.closest("[data-overlay-container]"))
        throw new Error(
          "An OverlayContainer must not be inside another container. Please change the portalContainer prop.",
        );
    }, [a]),
    !a)
  )
    return null;
  let r = Ne.createElement(oS, l);
  return g1.createPortal(r, a);
}
var uS = {};
uS = { dismiss: "تجاهل" };
var cS = {};
cS = { dismiss: "Отхвърляне" };
var fS = {};
fS = { dismiss: "Odstranit" };
var dS = {};
dS = { dismiss: "Luk" };
var hS = {};
hS = { dismiss: "Schließen" };
var pS = {};
pS = { dismiss: "Απόρριψη" };
var mS = {};
mS = { dismiss: "Dismiss" };
var vS = {};
vS = { dismiss: "Descartar" };
var bS = {};
bS = { dismiss: "Lõpeta" };
var gS = {};
gS = { dismiss: "Hylkää" };
var yS = {};
yS = { dismiss: "Rejeter" };
var SS = {};
SS = { dismiss: "התעלם" };
var TS = {};
TS = { dismiss: "Odbaci" };
var xS = {};
xS = { dismiss: "Elutasítás" };
var ES = {};
ES = { dismiss: "Ignora" };
var $S = {};
$S = { dismiss: "閉じる" };
var wS = {};
wS = { dismiss: "무시" };
var CS = {};
CS = { dismiss: "Atmesti" };
var MS = {};
MS = { dismiss: "Nerādīt" };
var DS = {};
DS = { dismiss: "Lukk" };
var AS = {};
AS = { dismiss: "Negeren" };
var PS = {};
PS = { dismiss: "Zignoruj" };
var RS = {};
RS = { dismiss: "Descartar" };
var NS = {};
NS = { dismiss: "Dispensar" };
var OS = {};
OS = { dismiss: "Revocare" };
var LS = {};
LS = { dismiss: "Пропустить" };
var _S = {};
_S = { dismiss: "Zrušiť" };
var zS = {};
zS = { dismiss: "Opusti" };
var VS = {};
VS = { dismiss: "Odbaci" };
var BS = {};
BS = { dismiss: "Avvisa" };
var kS = {};
kS = { dismiss: "Kapat" };
var HS = {};
HS = { dismiss: "Скасувати" };
var US = {};
US = { dismiss: "取消" };
var KS = {};
KS = { dismiss: "關閉" };
var jS = {};
jS = {
  "ar-AE": uS,
  "bg-BG": cS,
  "cs-CZ": fS,
  "da-DK": dS,
  "de-DE": hS,
  "el-GR": pS,
  "en-US": mS,
  "es-ES": vS,
  "et-EE": bS,
  "fi-FI": gS,
  "fr-FR": yS,
  "he-IL": SS,
  "hr-HR": TS,
  "hu-HU": xS,
  "it-IT": ES,
  "ja-JP": $S,
  "ko-KR": wS,
  "lt-LT": CS,
  "lv-LV": MS,
  "nb-NO": DS,
  "nl-NL": AS,
  "pl-PL": PS,
  "pt-BR": RS,
  "pt-PT": NS,
  "ro-RO": OS,
  "ru-RU": LS,
  "sk-SK": _S,
  "sl-SI": zS,
  "sr-SP": VS,
  "sv-SE": BS,
  "tr-TR": kS,
  "uk-UA": HS,
  "zh-CN": US,
  "zh-TW": KS,
};
function lp(t) {
  let n = t;
  return (
    (n.nativeEvent = t),
    (n.isDefaultPrevented = () => n.defaultPrevented),
    (n.isPropagationStopped = () => n.cancelBubble),
    (n.persist = () => {}),
    n
  );
}
function FS(t, n) {
  Object.defineProperty(t, "target", { value: n }),
    Object.defineProperty(t, "currentTarget", { value: n });
}
function IS(t) {
  let n = S.useRef({ isFocused: !1, observer: null });
  ti(() => {
    const l = n.current;
    return () => {
      l.observer && (l.observer.disconnect(), (l.observer = null));
    };
  }, []);
  let a = Rt((l) => {
    t == null || t(l);
  });
  return S.useCallback(
    (l) => {
      if (
        l.target instanceof HTMLButtonElement ||
        l.target instanceof HTMLInputElement ||
        l.target instanceof HTMLTextAreaElement ||
        l.target instanceof HTMLSelectElement
      ) {
        n.current.isFocused = !0;
        let r = l.target,
          u = (c) => {
            if (((n.current.isFocused = !1), r.disabled)) {
              let d = lp(c);
              a(d);
            }
            n.current.observer &&
              (n.current.observer.disconnect(), (n.current.observer = null));
          };
        r.addEventListener("focusout", u, { once: !0 }),
          (n.current.observer = new MutationObserver(() => {
            if (n.current.isFocused && r.disabled) {
              var c;
              (c = n.current.observer) === null ||
                c === void 0 ||
                c.disconnect();
              let d =
                r === document.activeElement ? null : document.activeElement;
              r.dispatchEvent(new FocusEvent("blur", { relatedTarget: d })),
                r.dispatchEvent(
                  new FocusEvent("focusout", { bubbles: !0, relatedTarget: d }),
                );
            }
          })),
          n.current.observer.observe(r, {
            attributes: !0,
            attributeFilter: ["disabled"],
          });
      }
    },
    [a],
  );
}
let ku = !1;
function zw(t) {
  for (; t && !G1(t); ) t = t.parentElement;
  let n = xi(t),
    a = n.document.activeElement;
  if (!a || a === t) return;
  ku = !0;
  let l = !1,
    r = (v) => {
      (v.target === a || l) && v.stopImmediatePropagation();
    },
    u = (v) => {
      (v.target === a || l) &&
        (v.stopImmediatePropagation(), !t && !l && ((l = !0), Ei(a), h()));
    },
    c = (v) => {
      (v.target === t || l) && v.stopImmediatePropagation();
    },
    d = (v) => {
      (v.target === t || l) &&
        (v.stopImmediatePropagation(), l || ((l = !0), Ei(a), h()));
    };
  n.addEventListener("blur", r, !0),
    n.addEventListener("focusout", u, !0),
    n.addEventListener("focusin", d, !0),
    n.addEventListener("focus", c, !0);
  let h = () => {
      cancelAnimationFrame(m),
        n.removeEventListener("blur", r, !0),
        n.removeEventListener("focusout", u, !0),
        n.removeEventListener("focusin", d, !0),
        n.removeEventListener("focus", c, !0),
        (ku = !1),
        (l = !1);
    },
    m = requestAnimationFrame(h);
  return h;
}
let kl = "default",
  ph = "",
  wu = new WeakMap();
function Vw(t) {
  if (Qh()) {
    if (kl === "default") {
      const n = jt(t);
      (ph = n.documentElement.style.webkitUserSelect),
        (n.documentElement.style.webkitUserSelect = "none");
    }
    kl = "disabled";
  } else if (t instanceof HTMLElement || t instanceof SVGElement) {
    let n = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    wu.set(t, t.style[n]), (t.style[n] = "none");
  }
}
function Mg(t) {
  if (Qh()) {
    if (kl !== "disabled") return;
    (kl = "restoring"),
      setTimeout(() => {
        K1(() => {
          if (kl === "restoring") {
            const n = jt(t);
            n.documentElement.style.webkitUserSelect === "none" &&
              (n.documentElement.style.webkitUserSelect = ph || ""),
              (ph = ""),
              (kl = "default");
          }
        });
      }, 300);
  } else if (
    (t instanceof HTMLElement || t instanceof SVGElement) &&
    t &&
    wu.has(t)
  ) {
    let n = wu.get(t),
      a = "userSelect" in t.style ? "userSelect" : "webkitUserSelect";
    t.style[a] === "none" && (t.style[a] = n),
      t.getAttribute("style") === "" && t.removeAttribute("style"),
      wu.delete(t);
  }
}
const GS = Ne.createContext({ register: () => {} });
GS.displayName = "PressResponderContext";
function Bw(t) {
  let n = S.useContext(GS);
  if (n) {
    let { register: a, ...l } = n;
    (t = Wt(l, t)), a();
  }
  return j1(n, t.ref), t;
}
var mu = new WeakMap();
class vu {
  continuePropagation() {
    Lu(this, mu, !1);
  }
  get shouldStopPropagation() {
    return W1(this, mu);
  }
  constructor(n, a, l, r) {
    f1(this, mu, { writable: !0, value: void 0 }), Lu(this, mu, !0);
    var u;
    let c =
      (u = r == null ? void 0 : r.target) !== null && u !== void 0
        ? u
        : l.currentTarget;
    const d = c == null ? void 0 : c.getBoundingClientRect();
    let h,
      m = 0,
      v,
      b = null;
    l.clientX != null &&
      l.clientY != null &&
      ((v = l.clientX), (b = l.clientY)),
      d &&
        (v != null && b != null
          ? ((h = v - d.left), (m = b - d.top))
          : ((h = d.width / 2), (m = d.height / 2))),
      (this.type = n),
      (this.pointerType = a),
      (this.target = l.currentTarget),
      (this.shiftKey = l.shiftKey),
      (this.metaKey = l.metaKey),
      (this.ctrlKey = l.ctrlKey),
      (this.altKey = l.altKey),
      (this.x = h),
      (this.y = m);
  }
}
const Dg = Symbol("linkClicked");
function Hu(t) {
  let {
      onPress: n,
      onPressChange: a,
      onPressStart: l,
      onPressEnd: r,
      onPressUp: u,
      onClick: c,
      isDisabled: d,
      isPressed: h,
      preventFocusOnPress: m,
      shouldCancelOnPointerExit: v,
      allowTextSelectionOnPress: b,
      ref: g,
      ...T
    } = Bw(t),
    [x, C] = S.useState(!1),
    A = S.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
      disposables: [],
    }),
    { addGlobalListener: M, removeAllGlobalListeners: V } = Jh(),
    P = Rt((D, F) => {
      let _ = A.current;
      if (d || _.didFirePressStart) return !1;
      let H = !0;
      if (((_.isTriggeringEvent = !0), l)) {
        let Z = new vu("pressstart", F, D);
        l(Z), (H = Z.shouldStopPropagation);
      }
      return (
        a && a(!0),
        (_.isTriggeringEvent = !1),
        (_.didFirePressStart = !0),
        C(!0),
        H
      );
    }),
    z = Rt((D, F, _ = !0) => {
      let H = A.current;
      if (!H.didFirePressStart) return !1;
      (H.didFirePressStart = !1), (H.isTriggeringEvent = !0);
      let Z = !0;
      if (r) {
        let $ = new vu("pressend", F, D);
        r($), (Z = $.shouldStopPropagation);
      }
      if ((a && a(!1), C(!1), n && _ && !d)) {
        let $ = new vu("press", F, D);
        n($), Z && (Z = $.shouldStopPropagation);
      }
      return (H.isTriggeringEvent = !1), Z;
    }),
    R = Rt((D, F) => {
      let _ = A.current;
      if (d) return !1;
      if (u) {
        _.isTriggeringEvent = !0;
        let H = new vu("pressup", F, D);
        return u(H), (_.isTriggeringEvent = !1), H.shouldStopPropagation;
      }
      return !0;
    }),
    B = Rt((D) => {
      let F = A.current;
      if (F.isPressed && F.target) {
        F.didFirePressStart &&
          F.pointerType != null &&
          z(Nl(F.target, D), F.pointerType, !1),
          (F.isPressed = !1),
          (F.isOverTarget = !1),
          (F.activePointerId = null),
          (F.pointerType = null),
          V(),
          b || Mg(F.target);
        for (let _ of F.disposables) _();
        F.disposables = [];
      }
    }),
    X = Rt((D) => {
      v && B(D);
    }),
    w = Rt((D) => {
      c == null || c(D);
    }),
    G = Rt((D, F) => {
      if (c) {
        let _ = new MouseEvent("click", D);
        FS(_, F), c(lp(_));
      }
    }),
    W = S.useMemo(() => {
      let D = A.current,
        F = {
          onKeyDown(H) {
            if (
              Ld(H.nativeEvent, H.currentTarget) &&
              un(H.currentTarget, Ht(H.nativeEvent))
            ) {
              var Z;
              Ag(Ht(H.nativeEvent), H.key) && H.preventDefault();
              let $ = !0;
              if (!D.isPressed && !H.repeat) {
                (D.target = H.currentTarget),
                  (D.isPressed = !0),
                  (D.pointerType = "keyboard"),
                  ($ = P(H, "keyboard"));
                let N = H.currentTarget,
                  O = (te) => {
                    Ld(te, N) &&
                      !te.repeat &&
                      un(N, Ht(te)) &&
                      D.target &&
                      R(Nl(D.target, te), "keyboard");
                  };
                M(jt(H.currentTarget), "keyup", B1(O, _), !0);
              }
              $ && H.stopPropagation(),
                H.metaKey &&
                  Ba() &&
                  ((Z = D.metaKeyEvents) === null ||
                    Z === void 0 ||
                    Z.set(H.key, H.nativeEvent));
            } else H.key === "Meta" && (D.metaKeyEvents = new Map());
          },
          onClick(H) {
            if (
              !(H && !un(H.currentTarget, Ht(H.nativeEvent))) &&
              H &&
              H.button === 0 &&
              !D.isTriggeringEvent &&
              !ka.isOpening
            ) {
              let Z = !0;
              if (
                (d && H.preventDefault(),
                !D.ignoreEmulatedMouseEvents &&
                  !D.isPressed &&
                  (D.pointerType === "virtual" || I1(H.nativeEvent)))
              ) {
                let $ = P(H, "virtual"),
                  N = R(H, "virtual"),
                  O = z(H, "virtual");
                w(H), (Z = $ && N && O);
              } else if (D.isPressed && D.pointerType !== "keyboard") {
                let $ = D.pointerType || H.nativeEvent.pointerType || "virtual";
                (Z = z(Nl(H.currentTarget, H), $, !0)),
                  (D.isOverTarget = !1),
                  w(H),
                  B(H);
              }
              (D.ignoreEmulatedMouseEvents = !1), Z && H.stopPropagation();
            }
          },
        },
        _ = (H) => {
          var Z;
          if (D.isPressed && D.target && Ld(H, D.target)) {
            var $;
            Ag(Ht(H), H.key) && H.preventDefault();
            let O = Ht(H),
              te = un(D.target, Ht(H));
            z(Nl(D.target, H), "keyboard", te),
              te && G(H, D.target),
              V(),
              H.key !== "Enter" &&
                sp(D.target) &&
                un(D.target, O) &&
                !H[Dg] &&
                ((H[Dg] = !0), ka(D.target, H, !1)),
              (D.isPressed = !1),
              ($ = D.metaKeyEvents) === null || $ === void 0 || $.delete(H.key);
          } else if (
            H.key === "Meta" &&
            !((Z = D.metaKeyEvents) === null || Z === void 0) &&
            Z.size
          ) {
            var N;
            let O = D.metaKeyEvents;
            D.metaKeyEvents = void 0;
            for (let te of O.values())
              (N = D.target) === null ||
                N === void 0 ||
                N.dispatchEvent(new KeyboardEvent("keyup", te));
          }
        };
      if (typeof PointerEvent < "u") {
        (F.onPointerDown = ($) => {
          if ($.button !== 0 || !un($.currentTarget, Ht($.nativeEvent))) return;
          if (H4($.nativeEvent)) {
            D.pointerType = "virtual";
            return;
          }
          D.pointerType = $.pointerType;
          let N = !0;
          if (!D.isPressed) {
            (D.isPressed = !0),
              (D.isOverTarget = !0),
              (D.activePointerId = $.pointerId),
              (D.target = $.currentTarget),
              b || Vw(D.target),
              (N = P($, D.pointerType));
            let O = Ht($.nativeEvent);
            "releasePointerCapture" in O &&
              O.releasePointerCapture($.pointerId),
              M(jt($.currentTarget), "pointerup", H, !1),
              M(jt($.currentTarget), "pointercancel", Z, !1);
          }
          N && $.stopPropagation();
        }),
          (F.onMouseDown = ($) => {
            if (un($.currentTarget, Ht($.nativeEvent)) && $.button === 0) {
              if (m) {
                let N = zw($.target);
                N && D.disposables.push(N);
              }
              $.stopPropagation();
            }
          }),
          (F.onPointerUp = ($) => {
            !un($.currentTarget, Ht($.nativeEvent)) ||
              D.pointerType === "virtual" ||
              ($.button === 0 && R($, D.pointerType || $.pointerType));
          }),
          (F.onPointerEnter = ($) => {
            $.pointerId === D.activePointerId &&
              D.target &&
              !D.isOverTarget &&
              D.pointerType != null &&
              ((D.isOverTarget = !0), P(Nl(D.target, $), D.pointerType));
          }),
          (F.onPointerLeave = ($) => {
            $.pointerId === D.activePointerId &&
              D.target &&
              D.isOverTarget &&
              D.pointerType != null &&
              ((D.isOverTarget = !1),
              z(Nl(D.target, $), D.pointerType, !1),
              X($));
          });
        let H = ($) => {
            if (
              $.pointerId === D.activePointerId &&
              D.isPressed &&
              $.button === 0 &&
              D.target
            ) {
              if (un(D.target, Ht($)) && D.pointerType != null) {
                let N = !1,
                  O = setTimeout(() => {
                    D.isPressed &&
                      D.target instanceof HTMLElement &&
                      (N ? B($) : (Ei(D.target), D.target.click()));
                  }, 80);
                M($.currentTarget, "click", () => (N = !0), !0),
                  D.disposables.push(() => clearTimeout(O));
              } else B($);
              D.isOverTarget = !1;
            }
          },
          Z = ($) => {
            B($);
          };
        F.onDragStart = ($) => {
          un($.currentTarget, Ht($.nativeEvent)) && B($);
        };
      }
      return F;
    }, [M, d, m, V, b, B, X, z, P, R, w, G]);
  return (
    S.useEffect(() => {
      let D = g == null ? void 0 : g.current;
      D &&
        D instanceof xi(D).Element &&
        xi(D).getComputedStyle(D).touchAction === "auto" &&
        (D.style.touchAction = "pan-x pan-y pinch-zoom");
    }, [g]),
    S.useEffect(() => {
      let D = A.current;
      return () => {
        var F;
        b || Mg((F = D.target) !== null && F !== void 0 ? F : void 0);
        for (let _ of D.disposables) _();
        D.disposables = [];
      };
    }, [b]),
    { isPressed: h || x, pressProps: Wt(T, W) }
  );
}
function sp(t) {
  return t.tagName === "A" && t.hasAttribute("href");
}
function Ld(t, n) {
  const { key: a, code: l } = t,
    r = n,
    u = r.getAttribute("role");
  return (
    (a === "Enter" || a === " " || a === "Spacebar" || l === "Space") &&
    !(
      (r instanceof xi(r).HTMLInputElement && !YS(r, a)) ||
      r instanceof xi(r).HTMLTextAreaElement ||
      r.isContentEditable
    ) &&
    !((u === "link" || (!u && sp(r))) && a !== "Enter")
  );
}
function Nl(t, n) {
  let a = n.clientX,
    l = n.clientY;
  return {
    currentTarget: t,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: a,
    clientY: l,
  };
}
function kw(t) {
  return t instanceof HTMLInputElement
    ? !1
    : t instanceof HTMLButtonElement
      ? t.type !== "submit" && t.type !== "reset"
      : !sp(t);
}
function Ag(t, n) {
  return t instanceof HTMLInputElement ? !YS(t, n) : kw(t);
}
const Hw = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset",
]);
function YS(t, n) {
  return t.type === "checkbox" || t.type === "radio"
    ? n === " "
    : Hw.has(t.type);
}
let is = null,
  Uw = new Set(),
  br = new Map(),
  Ua = !1,
  mh = !1;
function ac(t, n) {
  for (let a of Uw) a(t, n);
}
function Kw(t) {
  return !(
    t.metaKey ||
    (!Ba() && t.altKey) ||
    t.ctrlKey ||
    t.key === "Control" ||
    t.key === "Shift" ||
    t.key === "Meta"
  );
}
function Uu(t) {
  (Ua = !0), Kw(t) && ((is = "keyboard"), ac("keyboard", t));
}
function ql(t) {
  (is = "pointer"),
    (t.type === "mousedown" || t.type === "pointerdown") &&
      ((Ua = !0), ac("pointer", t));
}
function qS(t) {
  I1(t) && ((Ua = !0), (is = "virtual"));
}
function XS(t) {
  t.target === window ||
    t.target === document ||
    ku ||
    !t.isTrusted ||
    (!Ua && !mh && ((is = "virtual"), ac("virtual", t)), (Ua = !1), (mh = !1));
}
function ZS() {
  ku || ((Ua = !1), (mh = !0));
}
function Pg(t) {
  if (typeof window > "u" || br.get(xi(t))) return;
  const n = xi(t),
    a = jt(t);
  let l = n.HTMLElement.prototype.focus;
  (n.HTMLElement.prototype.focus = function () {
    (Ua = !0), l.apply(this, arguments);
  }),
    a.addEventListener("keydown", Uu, !0),
    a.addEventListener("keyup", Uu, !0),
    a.addEventListener("click", qS, !0),
    n.addEventListener("focus", XS, !0),
    n.addEventListener("blur", ZS, !1),
    typeof PointerEvent < "u" &&
      (a.addEventListener("pointerdown", ql, !0),
      a.addEventListener("pointermove", ql, !0),
      a.addEventListener("pointerup", ql, !0)),
    n.addEventListener(
      "beforeunload",
      () => {
        WS(t);
      },
      { once: !0 },
    ),
    br.set(n, { focus: l });
}
const WS = (t, n) => {
  const a = xi(t),
    l = jt(t);
  n && l.removeEventListener("DOMContentLoaded", n),
    br.has(a) &&
      ((a.HTMLElement.prototype.focus = br.get(a).focus),
      l.removeEventListener("keydown", Uu, !0),
      l.removeEventListener("keyup", Uu, !0),
      l.removeEventListener("click", qS, !0),
      a.removeEventListener("focus", XS, !0),
      a.removeEventListener("blur", ZS, !1),
      typeof PointerEvent < "u" &&
        (l.removeEventListener("pointerdown", ql, !0),
        l.removeEventListener("pointermove", ql, !0),
        l.removeEventListener("pointerup", ql, !0)),
      br.delete(a));
};
function jw(t) {
  const n = jt(t);
  let a;
  return (
    n.readyState !== "loading"
      ? Pg(t)
      : ((a = () => {
          Pg(t);
        }),
        n.addEventListener("DOMContentLoaded", a)),
    () => WS(t, a)
  );
}
typeof document < "u" && jw();
function vh() {
  return is;
}
function Fw(t) {
  (is = t), ac(t, null);
}
function Ku(t) {
  const n = jt(t),
    a = Ql(n);
  if (vh() === "virtual") {
    let l = a;
    K1(() => {
      Ql(n) === l && t.isConnected && Ei(t);
    });
  } else Ei(t);
}
function Iw(t) {
  let { isDisabled: n, onFocus: a, onBlur: l, onFocusChange: r } = t;
  const u = S.useCallback(
      (h) => {
        if (h.target === h.currentTarget) return l && l(h), r && r(!1), !0;
      },
      [l, r],
    ),
    c = IS(u),
    d = S.useCallback(
      (h) => {
        const m = jt(h.target),
          v = m ? Ql(m) : Ql();
        h.target === h.currentTarget &&
          v === Ht(h.nativeEvent) &&
          (a && a(h), r && r(!0), c(h));
      },
      [r, a, c],
    );
  return {
    focusProps: {
      onFocus: !n && (a || r || l) ? d : void 0,
      onBlur: !n && (l || r) ? u : void 0,
    },
  };
}
function Rg(t) {
  if (!t) return;
  let n = !0;
  return (a) => {
    let l = {
      ...a,
      preventDefault() {
        a.preventDefault();
      },
      isDefaultPrevented() {
        return a.isDefaultPrevented();
      },
      stopPropagation() {
        n = !0;
      },
      continuePropagation() {
        n = !1;
      },
      isPropagationStopped() {
        return n;
      },
    };
    t(l), n && a.stopPropagation();
  };
}
function Gw(t) {
  return {
    keyboardProps: t.isDisabled
      ? {}
      : { onKeyDown: Rg(t.onKeyDown), onKeyUp: Rg(t.onKeyUp) },
  };
}
let Yw = Ne.createContext(null);
function qw(t) {
  let n = S.useContext(Yw) || {};
  j1(n, t);
  let { ref: a, ...l } = n;
  return l;
}
function Xw(t, n) {
  let { focusProps: a } = Iw(t),
    { keyboardProps: l } = Gw(t),
    r = Wt(a, l),
    u = qw(n),
    c = t.isDisabled ? {} : u,
    d = S.useRef(t.autoFocus);
  S.useEffect(() => {
    d.current && n.current && Ku(n.current), (d.current = !1);
  }, [n]);
  let h = t.excludeFromTabOrder ? -1 : 0;
  return (
    t.isDisabled && (h = void 0),
    { focusableProps: Wt({ ...r, tabIndex: h }, c) }
  );
}
function Zw(t) {
  let {
      isDisabled: n,
      onBlurWithin: a,
      onFocusWithin: l,
      onFocusWithinChange: r,
    } = t,
    u = S.useRef({ isFocusWithin: !1 }),
    { addGlobalListener: c, removeAllGlobalListeners: d } = Jh(),
    h = S.useCallback(
      (b) => {
        b.currentTarget.contains(b.target) &&
          u.current.isFocusWithin &&
          !b.currentTarget.contains(b.relatedTarget) &&
          ((u.current.isFocusWithin = !1), d(), a && a(b), r && r(!1));
      },
      [a, r, u, d],
    ),
    m = IS(h),
    v = S.useCallback(
      (b) => {
        if (!b.currentTarget.contains(b.target)) return;
        const g = jt(b.target),
          T = Ql(g);
        if (!u.current.isFocusWithin && T === Ht(b.nativeEvent)) {
          l && l(b), r && r(!0), (u.current.isFocusWithin = !0), m(b);
          let x = b.currentTarget;
          c(
            g,
            "focus",
            (C) => {
              if (u.current.isFocusWithin && !un(x, C.target)) {
                let A = new g.defaultView.FocusEvent("blur", {
                  relatedTarget: C.target,
                });
                FS(A, x);
                let M = lp(A);
                h(M);
              }
            },
            { capture: !0 },
          );
        }
      },
      [l, r, m, c, h],
    );
  return n
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: v, onBlur: h } };
}
const Ww = 500;
function Qw(t) {
  let {
    isDisabled: n,
    onLongPressStart: a,
    onLongPressEnd: l,
    onLongPress: r,
    threshold: u = Ww,
    accessibilityDescription: c,
  } = t;
  const d = S.useRef(void 0);
  let { addGlobalListener: h, removeGlobalListener: m } = Jh(),
    { pressProps: v } = Hu({
      isDisabled: n,
      onPressStart(g) {
        if (
          (g.continuePropagation(),
          (g.pointerType === "mouse" || g.pointerType === "touch") &&
            (a && a({ ...g, type: "longpressstart" }),
            (d.current = setTimeout(() => {
              g.target.dispatchEvent(
                new PointerEvent("pointercancel", { bubbles: !0 }),
              ),
                jt(g.target).activeElement !== g.target && Ei(g.target),
                r && r({ ...g, type: "longpress" }),
                (d.current = void 0);
            }, u)),
            g.pointerType === "touch"))
        ) {
          let T = (x) => {
            x.preventDefault();
          };
          h(g.target, "contextmenu", T, { once: !0 }),
            h(
              window,
              "pointerup",
              () => {
                setTimeout(() => {
                  m(g.target, "contextmenu", T);
                }, 30);
              },
              { once: !0 },
            );
        }
      },
      onPressEnd(g) {
        d.current && clearTimeout(d.current),
          l &&
            (g.pointerType === "mouse" || g.pointerType === "touch") &&
            l({ ...g, type: "longpressend" });
      },
    }),
    b = k4(r && !n ? c : void 0);
  return { longPressProps: Wt(v, b) };
}
const Ng = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap",
};
function Jw(t = {}) {
  let { style: n, isFocusable: a } = t,
    [l, r] = S.useState(!1),
    { focusWithinProps: u } = Zw({
      isDisabled: !a,
      onFocusWithinChange: (d) => r(d),
    }),
    c = S.useMemo(() => (l ? n : n ? { ...Ng, ...n } : Ng), [l]);
  return { visuallyHiddenProps: { ...u, style: c } };
}
function eC(t) {
  let {
      children: n,
      elementType: a = "div",
      isFocusable: l,
      style: r,
      ...u
    } = t,
    { visuallyHiddenProps: c } = Jw(t);
  return Ne.createElement(a, Wt(u, c), n);
}
function tC(t) {
  return t && t.__esModule ? t.default : t;
}
function Og(t) {
  let { onDismiss: n, ...a } = t,
    l = d4(tC(jS), "@react-aria/overlays"),
    r = Xh(a, l.format("dismiss")),
    u = () => {
      n && n();
    };
  return Ne.createElement(
    eC,
    null,
    Ne.createElement("button", {
      ...r,
      tabIndex: -1,
      onClick: u,
      style: { width: 1, height: 1 },
    }),
  );
}
let rr = new WeakMap(),
  xn = [];
function nC(t, n = document.body) {
  let a = new Set(t),
    l = new Set(),
    r = (h) => {
      for (let g of h.querySelectorAll(
        "[data-live-announcer], [data-react-aria-top-layer]",
      ))
        a.add(g);
      let m = (g) => {
          if (
            a.has(g) ||
            (g.parentElement &&
              l.has(g.parentElement) &&
              g.parentElement.getAttribute("role") !== "row")
          )
            return NodeFilter.FILTER_REJECT;
          for (let T of a) if (g.contains(T)) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        },
        v = document.createTreeWalker(h, NodeFilter.SHOW_ELEMENT, {
          acceptNode: m,
        }),
        b = m(h);
      if (
        (b === NodeFilter.FILTER_ACCEPT && u(h), b !== NodeFilter.FILTER_REJECT)
      ) {
        let g = v.nextNode();
        for (; g != null; ) u(g), (g = v.nextNode());
      }
    },
    u = (h) => {
      var m;
      let v = (m = rr.get(h)) !== null && m !== void 0 ? m : 0;
      (h.getAttribute("aria-hidden") === "true" && v === 0) ||
        (v === 0 && h.setAttribute("aria-hidden", "true"),
        l.add(h),
        rr.set(h, v + 1));
    };
  xn.length && xn[xn.length - 1].disconnect(), r(n);
  let c = new MutationObserver((h) => {
    for (let m of h)
      if (
        !(m.type !== "childList" || m.addedNodes.length === 0) &&
        ![...a, ...l].some((v) => v.contains(m.target))
      ) {
        for (let v of m.removedNodes)
          v instanceof Element && (a.delete(v), l.delete(v));
        for (let v of m.addedNodes)
          (v instanceof HTMLElement || v instanceof SVGElement) &&
          (v.dataset.liveAnnouncer === "true" ||
            v.dataset.reactAriaTopLayer === "true")
            ? a.add(v)
            : v instanceof Element && r(v);
      }
  });
  c.observe(n, { childList: !0, subtree: !0 });
  let d = {
    visibleNodes: a,
    hiddenNodes: l,
    observe() {
      c.observe(n, { childList: !0, subtree: !0 });
    },
    disconnect() {
      c.disconnect();
    },
  };
  return (
    xn.push(d),
    () => {
      c.disconnect();
      for (let h of l) {
        let m = rr.get(h);
        m != null &&
          (m === 1
            ? (h.removeAttribute("aria-hidden"), rr.delete(h))
            : rr.set(h, m - 1));
      }
      d === xn[xn.length - 1]
        ? (xn.pop(), xn.length && xn[xn.length - 1].observe())
        : xn.splice(xn.indexOf(d), 1);
    }
  );
}
const iC = S.createContext({});
function aC() {
  var t;
  return (t = S.useContext(iC)) !== null && t !== void 0 ? t : {};
}
const QS = Ne.createContext(null);
function lC(t) {
  let n = Vr(),
    { portalContainer: a = n ? null : document.body, isExiting: l } = t,
    [r, u] = S.useState(!1),
    c = S.useMemo(() => ({ contain: r, setContain: u }), [r, u]),
    { getContainer: d } = aC();
  if ((!t.portalContainer && d && (a = d()), !a)) return null;
  let h = t.children;
  return (
    t.disableFocusManagement ||
      (h = Ne.createElement(
        yw,
        { restoreFocus: !0, contain: (t.shouldContainFocus || r) && !l },
        h,
      )),
    (h = Ne.createElement(
      QS.Provider,
      { value: c },
      Ne.createElement(vw, null, h),
    )),
    g1.createPortal(h, a)
  );
}
function JS() {
  let t = S.useContext(QS),
    n = t == null ? void 0 : t.setContain;
  lt(() => {
    n == null || n(!0);
  }, [n]);
}
const wr = S.createContext({});
function lc(t) {
  const n = S.useRef(null);
  return n.current === null && (n.current = t()), n.current;
}
const rp = typeof window < "u",
  op = rp ? S.useLayoutEffect : S.useEffect,
  sc = S.createContext(null),
  Cr = S.createContext({
    transformPagePoint: (t) => t,
    isStatic: !1,
    reducedMotion: "never",
  });
class sC extends S.Component {
  getSnapshotBeforeUpdate(n) {
    const a = this.props.childRef.current;
    if (a && n.isPresent && !this.props.isPresent) {
      const l = a.offsetParent,
        r = (l instanceof HTMLElement && l.offsetWidth) || 0,
        u = this.props.sizeRef.current;
      (u.height = a.offsetHeight || 0),
        (u.width = a.offsetWidth || 0),
        (u.top = a.offsetTop),
        (u.left = a.offsetLeft),
        (u.right = r - u.width - u.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function rC({ children: t, isPresent: n, anchorX: a }) {
  const l = S.useId(),
    r = S.useRef(null),
    u = S.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: c } = S.useContext(Cr);
  return (
    S.useInsertionEffect(() => {
      const { width: d, height: h, top: m, left: v, right: b } = u.current;
      if (n || !r.current || !d || !h) return;
      const g = a === "left" ? `left: ${v}` : `right: ${b}`;
      r.current.dataset.motionPopId = l;
      const T = document.createElement("style");
      return (
        c && (T.nonce = c),
        document.head.appendChild(T),
        T.sheet &&
          T.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            ${g}px !important;
            top: ${m}px !important;
          }
        `),
        () => {
          document.head.contains(T) && document.head.removeChild(T);
        }
      );
    }, [n]),
    U.jsx(sC, {
      isPresent: n,
      childRef: r,
      sizeRef: u,
      children: S.cloneElement(t, { ref: r }),
    })
  );
}
const oC = ({
  children: t,
  initial: n,
  isPresent: a,
  onExitComplete: l,
  custom: r,
  presenceAffectsLayout: u,
  mode: c,
  anchorX: d,
}) => {
  const h = lc(uC),
    m = S.useId();
  let v = !0,
    b = S.useMemo(
      () => (
        (v = !1),
        {
          id: m,
          initial: n,
          isPresent: a,
          custom: r,
          onExitComplete: (g) => {
            h.set(g, !0);
            for (const T of h.values()) if (!T) return;
            l && l();
          },
          register: (g) => (h.set(g, !1), () => h.delete(g)),
        }
      ),
      [a, h, l],
    );
  return (
    u && v && (b = { ...b }),
    S.useMemo(() => {
      h.forEach((g, T) => h.set(T, !1));
    }, [a]),
    S.useEffect(() => {
      !a && !h.size && l && l();
    }, [a]),
    c === "popLayout" &&
      (t = U.jsx(rC, { isPresent: a, anchorX: d, children: t })),
    U.jsx(sc.Provider, { value: b, children: t })
  );
};
function uC() {
  return new Map();
}
function eT(t = !0) {
  const n = S.useContext(sc);
  if (n === null) return [!0, null];
  const { isPresent: a, onExitComplete: l, register: r } = n,
    u = S.useId();
  S.useEffect(() => {
    if (t) return r(u);
  }, [t]);
  const c = S.useCallback(() => t && l && l(u), [u, l, t]);
  return !a && l ? [!1, c] : [!0];
}
const bu = (t) => t.key || "";
function Lg(t) {
  const n = [];
  return (
    S.Children.forEach(t, (a) => {
      S.isValidElement(a) && n.push(a);
    }),
    n
  );
}
const up = ({
    children: t,
    custom: n,
    initial: a = !0,
    onExitComplete: l,
    presenceAffectsLayout: r = !0,
    mode: u = "sync",
    propagate: c = !1,
    anchorX: d = "left",
  }) => {
    const [h, m] = eT(c),
      v = S.useMemo(() => Lg(t), [t]),
      b = c && !h ? [] : v.map(bu),
      g = S.useRef(!0),
      T = S.useRef(v),
      x = lc(() => new Map()),
      [C, A] = S.useState(v),
      [M, V] = S.useState(v);
    op(() => {
      (g.current = !1), (T.current = v);
      for (let R = 0; R < M.length; R++) {
        const B = bu(M[R]);
        b.includes(B) ? x.delete(B) : x.get(B) !== !0 && x.set(B, !1);
      }
    }, [M, b.length, b.join("-")]);
    const P = [];
    if (v !== C) {
      let R = [...v];
      for (let B = 0; B < M.length; B++) {
        const X = M[B],
          w = bu(X);
        b.includes(w) || (R.splice(B, 0, X), P.push(X));
      }
      return u === "wait" && P.length && (R = P), V(Lg(R)), A(v), null;
    }
    const { forceRender: z } = S.useContext(wr);
    return U.jsx(U.Fragment, {
      children: M.map((R) => {
        const B = bu(R),
          X = c && !h ? !1 : v === M || b.includes(B),
          w = () => {
            if (x.has(B)) x.set(B, !0);
            else return;
            let G = !0;
            x.forEach((W) => {
              W || (G = !1);
            }),
              G &&
                (z == null || z(),
                V(T.current),
                c && (m == null || m()),
                l && l());
          };
        return U.jsx(
          oC,
          {
            isPresent: X,
            initial: !g.current || a ? void 0 : !1,
            custom: n,
            presenceAffectsLayout: r,
            mode: u,
            onExitComplete: X ? void 0 : w,
            anchorX: d,
            children: R,
          },
          B,
        );
      }),
    });
  },
  cC = S.createContext(null);
function cp(t, n) {
  t.indexOf(n) === -1 && t.push(n);
}
function fp(t, n) {
  const a = t.indexOf(n);
  a > -1 && t.splice(a, 1);
}
const $i = (t, n, a) => (a > n ? n : a < t ? t : a);
let dp = () => {};
const ni = {},
  tT = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
  nT = (t) => /^0[^.\s]+$/u.test(t);
function hp(t) {
  let n;
  return () => (n === void 0 && (n = t()), n);
}
const Mn = (t) => t,
  fC = (t, n) => (a) => n(t(a)),
  jr = (...t) => t.reduce(fC),
  Mr = (t, n, a) => {
    const l = n - t;
    return l === 0 ? 1 : (a - t) / l;
  };
class pp {
  constructor() {
    this.subscriptions = [];
  }
  add(n) {
    return cp(this.subscriptions, n), () => fp(this.subscriptions, n);
  }
  notify(n, a, l) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1) this.subscriptions[0](n, a, l);
      else
        for (let u = 0; u < r; u++) {
          const c = this.subscriptions[u];
          c && c(n, a, l);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Qn = (t) => t * 1e3,
  Jn = (t) => t / 1e3;
function iT(t, n) {
  return n ? t * (1e3 / n) : 0;
}
const aT = (t, n, a) =>
    (((1 - 3 * a + 3 * n) * t + (3 * a - 6 * n)) * t + 3 * n) * t,
  dC = 1e-7,
  hC = 12;
function pC(t, n, a, l, r) {
  let u,
    c,
    d = 0;
  do (c = n + (a - n) / 2), (u = aT(c, l, r) - t), u > 0 ? (a = c) : (n = c);
  while (Math.abs(u) > dC && ++d < hC);
  return c;
}
function Fr(t, n, a, l) {
  if (t === n && a === l) return Mn;
  const r = (u) => pC(u, 0, 1, t, a);
  return (u) => (u === 0 || u === 1 ? u : aT(r(u), n, l));
}
const lT = (t) => (n) => (n <= 0.5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2),
  sT = (t) => (n) => 1 - t(1 - n),
  rT = Fr(0.33, 1.53, 0.69, 0.99),
  mp = sT(rT),
  oT = lT(mp),
  uT = (t) =>
    (t *= 2) < 1 ? 0.5 * mp(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
  vp = (t) => 1 - Math.sin(Math.acos(t)),
  cT = sT(vp),
  fT = lT(vp),
  mC = Fr(0.42, 0, 1, 1),
  vC = Fr(0, 0, 0.58, 1),
  dT = Fr(0.42, 0, 0.58, 1),
  bC = (t) => Array.isArray(t) && typeof t[0] != "number",
  hT = (t) => Array.isArray(t) && typeof t[0] == "number",
  gC = {
    linear: Mn,
    easeIn: mC,
    easeInOut: dT,
    easeOut: vC,
    circIn: vp,
    circInOut: fT,
    circOut: cT,
    backIn: mp,
    backInOut: oT,
    backOut: rT,
    anticipate: uT,
  },
  yC = (t) => typeof t == "string",
  _g = (t) => {
    if (hT(t)) {
      dp(t.length === 4);
      const [n, a, l, r] = t;
      return Fr(n, a, l, r);
    } else if (yC(t)) return gC[t];
    return t;
  },
  gu = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function SC(t, n) {
  let a = new Set(),
    l = new Set(),
    r = !1,
    u = !1;
  const c = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function h(v) {
    c.has(v) && (m.schedule(v), t()), v(d);
  }
  const m = {
    schedule: (v, b = !1, g = !1) => {
      const x = g && r ? a : l;
      return b && c.add(v), x.has(v) || x.add(v), v;
    },
    cancel: (v) => {
      l.delete(v), c.delete(v);
    },
    process: (v) => {
      if (((d = v), r)) {
        u = !0;
        return;
      }
      (r = !0),
        ([a, l] = [l, a]),
        a.forEach(h),
        a.clear(),
        (r = !1),
        u && ((u = !1), m.process(v));
    },
  };
  return m;
}
const TC = 40;
function pT(t, n) {
  let a = !1,
    l = !0;
  const r = { delta: 0, timestamp: 0, isProcessing: !1 },
    u = () => (a = !0),
    c = gu.reduce((P, z) => ((P[z] = SC(u)), P), {}),
    {
      setup: d,
      read: h,
      resolveKeyframes: m,
      preUpdate: v,
      update: b,
      preRender: g,
      render: T,
      postRender: x,
    } = c,
    C = () => {
      const P = ni.useManualTiming ? r.timestamp : performance.now();
      (a = !1),
        ni.useManualTiming ||
          (r.delta = l ? 1e3 / 60 : Math.max(Math.min(P - r.timestamp, TC), 1)),
        (r.timestamp = P),
        (r.isProcessing = !0),
        d.process(r),
        h.process(r),
        m.process(r),
        v.process(r),
        b.process(r),
        g.process(r),
        T.process(r),
        x.process(r),
        (r.isProcessing = !1),
        a && n && ((l = !1), t(C));
    },
    A = () => {
      (a = !0), (l = !0), r.isProcessing || t(C);
    };
  return {
    schedule: gu.reduce((P, z) => {
      const R = c[z];
      return (P[z] = (B, X = !1, w = !1) => (a || A(), R.schedule(B, X, w))), P;
    }, {}),
    cancel: (P) => {
      for (let z = 0; z < gu.length; z++) c[gu[z]].cancel(P);
    },
    state: r,
    steps: c,
  };
}
const {
  schedule: Ze,
  cancel: ia,
  state: Pt,
  steps: _d,
} = pT(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Mn, !0);
let Cu;
function xC() {
  Cu = void 0;
}
const Xt = {
    now: () => (
      Cu === void 0 &&
        Xt.set(
          Pt.isProcessing || ni.useManualTiming
            ? Pt.timestamp
            : performance.now(),
        ),
      Cu
    ),
    set: (t) => {
      (Cu = t), queueMicrotask(xC);
    },
  },
  mT = (t) => (n) => typeof n == "string" && n.startsWith(t),
  bp = mT("--"),
  EC = mT("var(--"),
  gp = (t) => (EC(t) ? $C.test(t.split("/*")[0].trim()) : !1),
  $C =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  as = {
    test: (t) => typeof t == "number",
    parse: parseFloat,
    transform: (t) => t,
  },
  Dr = { ...as, transform: (t) => $i(0, 1, t) },
  yu = { ...as, default: 1 },
  gr = (t) => Math.round(t * 1e5) / 1e5,
  yp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function wC(t) {
  return t == null;
}
const CC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Sp = (t, n) => (a) =>
    !!(
      (typeof a == "string" && CC.test(a) && a.startsWith(t)) ||
      (n && !wC(a) && Object.prototype.hasOwnProperty.call(a, n))
    ),
  vT = (t, n, a) => (l) => {
    if (typeof l != "string") return l;
    const [r, u, c, d] = l.match(yp);
    return {
      [t]: parseFloat(r),
      [n]: parseFloat(u),
      [a]: parseFloat(c),
      alpha: d !== void 0 ? parseFloat(d) : 1,
    };
  },
  MC = (t) => $i(0, 255, t),
  zd = { ...as, transform: (t) => Math.round(MC(t)) },
  Ra = {
    test: Sp("rgb", "red"),
    parse: vT("red", "green", "blue"),
    transform: ({ red: t, green: n, blue: a, alpha: l = 1 }) =>
      "rgba(" +
      zd.transform(t) +
      ", " +
      zd.transform(n) +
      ", " +
      zd.transform(a) +
      ", " +
      gr(Dr.transform(l)) +
      ")",
  };
function DC(t) {
  let n = "",
    a = "",
    l = "",
    r = "";
  return (
    t.length > 5
      ? ((n = t.substring(1, 3)),
        (a = t.substring(3, 5)),
        (l = t.substring(5, 7)),
        (r = t.substring(7, 9)))
      : ((n = t.substring(1, 2)),
        (a = t.substring(2, 3)),
        (l = t.substring(3, 4)),
        (r = t.substring(4, 5)),
        (n += n),
        (a += a),
        (l += l),
        (r += r)),
    {
      red: parseInt(n, 16),
      green: parseInt(a, 16),
      blue: parseInt(l, 16),
      alpha: r ? parseInt(r, 16) / 255 : 1,
    }
  );
}
const bh = { test: Sp("#"), parse: DC, transform: Ra.transform },
  Ir = (t) => ({
    test: (n) =>
      typeof n == "string" && n.endsWith(t) && n.split(" ").length === 1,
    parse: parseFloat,
    transform: (n) => `${n}${t}`,
  }),
  ea = Ir("deg"),
  ei = Ir("%"),
  Se = Ir("px"),
  AC = Ir("vh"),
  PC = Ir("vw"),
  zg = {
    ...ei,
    parse: (t) => ei.parse(t) / 100,
    transform: (t) => ei.transform(t * 100),
  },
  Hl = {
    test: Sp("hsl", "hue"),
    parse: vT("hue", "saturation", "lightness"),
    transform: ({ hue: t, saturation: n, lightness: a, alpha: l = 1 }) =>
      "hsla(" +
      Math.round(t) +
      ", " +
      ei.transform(gr(n)) +
      ", " +
      ei.transform(gr(a)) +
      ", " +
      gr(Dr.transform(l)) +
      ")",
  },
  zt = {
    test: (t) => Ra.test(t) || bh.test(t) || Hl.test(t),
    parse: (t) =>
      Ra.test(t) ? Ra.parse(t) : Hl.test(t) ? Hl.parse(t) : bh.parse(t),
    transform: (t) =>
      typeof t == "string"
        ? t
        : t.hasOwnProperty("red")
          ? Ra.transform(t)
          : Hl.transform(t),
  },
  RC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function NC(t) {
  var n, a;
  return (
    isNaN(t) &&
    typeof t == "string" &&
    (((n = t.match(yp)) == null ? void 0 : n.length) || 0) +
      (((a = t.match(RC)) == null ? void 0 : a.length) || 0) >
      0
  );
}
const bT = "number",
  gT = "color",
  OC = "var",
  LC = "var(",
  Vg = "${}",
  _C =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ar(t) {
  const n = t.toString(),
    a = [],
    l = { color: [], number: [], var: [] },
    r = [];
  let u = 0;
  const d = n
    .replace(
      _C,
      (h) => (
        zt.test(h)
          ? (l.color.push(u), r.push(gT), a.push(zt.parse(h)))
          : h.startsWith(LC)
            ? (l.var.push(u), r.push(OC), a.push(h))
            : (l.number.push(u), r.push(bT), a.push(parseFloat(h))),
        ++u,
        Vg
      ),
    )
    .split(Vg);
  return { values: a, split: d, indexes: l, types: r };
}
function yT(t) {
  return Ar(t).values;
}
function ST(t) {
  const { split: n, types: a } = Ar(t),
    l = n.length;
  return (r) => {
    let u = "";
    for (let c = 0; c < l; c++)
      if (((u += n[c]), r[c] !== void 0)) {
        const d = a[c];
        d === bT
          ? (u += gr(r[c]))
          : d === gT
            ? (u += zt.transform(r[c]))
            : (u += r[c]);
      }
    return u;
  };
}
const zC = (t) => (typeof t == "number" ? 0 : t);
function VC(t) {
  const n = yT(t);
  return ST(t)(n.map(zC));
}
const aa = {
  test: NC,
  parse: yT,
  createTransformer: ST,
  getAnimatableNone: VC,
};
function Vd(t, n, a) {
  return (
    a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6
      ? t + (n - t) * 6 * a
      : a < 1 / 2
        ? n
        : a < 2 / 3
          ? t + (n - t) * (2 / 3 - a) * 6
          : t
  );
}
function BC({ hue: t, saturation: n, lightness: a, alpha: l }) {
  (t /= 360), (n /= 100), (a /= 100);
  let r = 0,
    u = 0,
    c = 0;
  if (!n) r = u = c = a;
  else {
    const d = a < 0.5 ? a * (1 + n) : a + n - a * n,
      h = 2 * a - d;
    (r = Vd(h, d, t + 1 / 3)), (u = Vd(h, d, t)), (c = Vd(h, d, t - 1 / 3));
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(u * 255),
    blue: Math.round(c * 255),
    alpha: l,
  };
}
function ju(t, n) {
  return (a) => (a > 0 ? n : t);
}
const Je = (t, n, a) => t + (n - t) * a,
  Bd = (t, n, a) => {
    const l = t * t,
      r = a * (n * n - l) + l;
    return r < 0 ? 0 : Math.sqrt(r);
  },
  kC = [bh, Ra, Hl],
  HC = (t) => kC.find((n) => n.test(t));
function Bg(t) {
  const n = HC(t);
  if (!n) return !1;
  let a = n.parse(t);
  return n === Hl && (a = BC(a)), a;
}
const kg = (t, n) => {
    const a = Bg(t),
      l = Bg(n);
    if (!a || !l) return ju(t, n);
    const r = { ...a };
    return (u) => (
      (r.red = Bd(a.red, l.red, u)),
      (r.green = Bd(a.green, l.green, u)),
      (r.blue = Bd(a.blue, l.blue, u)),
      (r.alpha = Je(a.alpha, l.alpha, u)),
      Ra.transform(r)
    );
  },
  gh = new Set(["none", "hidden"]);
function UC(t, n) {
  return gh.has(t) ? (a) => (a <= 0 ? t : n) : (a) => (a >= 1 ? n : t);
}
function KC(t, n) {
  return (a) => Je(t, n, a);
}
function Tp(t) {
  return typeof t == "number"
    ? KC
    : typeof t == "string"
      ? gp(t)
        ? ju
        : zt.test(t)
          ? kg
          : IC
      : Array.isArray(t)
        ? TT
        : typeof t == "object"
          ? zt.test(t)
            ? kg
            : jC
          : ju;
}
function TT(t, n) {
  const a = [...t],
    l = a.length,
    r = t.map((u, c) => Tp(u)(u, n[c]));
  return (u) => {
    for (let c = 0; c < l; c++) a[c] = r[c](u);
    return a;
  };
}
function jC(t, n) {
  const a = { ...t, ...n },
    l = {};
  for (const r in a)
    t[r] !== void 0 && n[r] !== void 0 && (l[r] = Tp(t[r])(t[r], n[r]));
  return (r) => {
    for (const u in l) a[u] = l[u](r);
    return a;
  };
}
function FC(t, n) {
  const a = [],
    l = { color: 0, var: 0, number: 0 };
  for (let r = 0; r < n.values.length; r++) {
    const u = n.types[r],
      c = t.indexes[u][l[u]],
      d = t.values[c] ?? 0;
    (a[r] = d), l[u]++;
  }
  return a;
}
const IC = (t, n) => {
  const a = aa.createTransformer(n),
    l = Ar(t),
    r = Ar(n);
  return l.indexes.var.length === r.indexes.var.length &&
    l.indexes.color.length === r.indexes.color.length &&
    l.indexes.number.length >= r.indexes.number.length
    ? (gh.has(t) && !r.values.length) || (gh.has(n) && !l.values.length)
      ? UC(t, n)
      : jr(TT(FC(l, r), r.values), a)
    : ju(t, n);
};
function xT(t, n, a) {
  return typeof t == "number" && typeof n == "number" && typeof a == "number"
    ? Je(t, n, a)
    : Tp(t)(t, n);
}
const GC = (t) => {
    const n = ({ timestamp: a }) => t(a);
    return {
      start: (a = !0) => Ze.update(n, a),
      stop: () => ia(n),
      now: () => (Pt.isProcessing ? Pt.timestamp : Xt.now()),
    };
  },
  ET = (t, n, a = 10) => {
    let l = "";
    const r = Math.max(Math.round(n / a), 2);
    for (let u = 0; u < r; u++) l += t(u / (r - 1)) + ", ";
    return `linear(${l.substring(0, l.length - 2)})`;
  },
  Fu = 2e4;
function xp(t) {
  let n = 0;
  const a = 50;
  let l = t.next(n);
  for (; !l.done && n < Fu; ) (n += a), (l = t.next(n));
  return n >= Fu ? 1 / 0 : n;
}
function YC(t, n = 100, a) {
  const l = a({ ...t, keyframes: [0, n] }),
    r = Math.min(xp(l), Fu);
  return {
    type: "keyframes",
    ease: (u) => l.next(r * u).value / n,
    duration: Jn(r),
  };
}
const qC = 5;
function $T(t, n, a) {
  const l = Math.max(n - qC, 0);
  return iT(a - t(l), n - l);
}
const at = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Hg = 0.001;
function XC({
  duration: t = at.duration,
  bounce: n = at.bounce,
  velocity: a = at.velocity,
  mass: l = at.mass,
}) {
  let r,
    u,
    c = 1 - n;
  (c = $i(at.minDamping, at.maxDamping, c)),
    (t = $i(at.minDuration, at.maxDuration, Jn(t))),
    c < 1
      ? ((r = (m) => {
          const v = m * c,
            b = v * t,
            g = v - a,
            T = yh(m, c),
            x = Math.exp(-b);
          return Hg - (g / T) * x;
        }),
        (u = (m) => {
          const b = m * c * t,
            g = b * a + a,
            T = Math.pow(c, 2) * Math.pow(m, 2) * t,
            x = Math.exp(-b),
            C = yh(Math.pow(m, 2), c);
          return ((-r(m) + Hg > 0 ? -1 : 1) * ((g - T) * x)) / C;
        }))
      : ((r = (m) => {
          const v = Math.exp(-m * t),
            b = (m - a) * t + 1;
          return -0.001 + v * b;
        }),
        (u = (m) => {
          const v = Math.exp(-m * t),
            b = (a - m) * (t * t);
          return v * b;
        }));
  const d = 5 / t,
    h = WC(r, u, d);
  if (((t = Qn(t)), isNaN(h)))
    return { stiffness: at.stiffness, damping: at.damping, duration: t };
  {
    const m = Math.pow(h, 2) * l;
    return { stiffness: m, damping: c * 2 * Math.sqrt(l * m), duration: t };
  }
}
const ZC = 12;
function WC(t, n, a) {
  let l = a;
  for (let r = 1; r < ZC; r++) l = l - t(l) / n(l);
  return l;
}
function yh(t, n) {
  return t * Math.sqrt(1 - n * n);
}
const QC = ["duration", "bounce"],
  JC = ["stiffness", "damping", "mass"];
function Ug(t, n) {
  return n.some((a) => t[a] !== void 0);
}
function e6(t) {
  let n = {
    velocity: at.velocity,
    stiffness: at.stiffness,
    damping: at.damping,
    mass: at.mass,
    isResolvedFromDuration: !1,
    ...t,
  };
  if (!Ug(t, JC) && Ug(t, QC))
    if (t.visualDuration) {
      const a = t.visualDuration,
        l = (2 * Math.PI) / (a * 1.2),
        r = l * l,
        u = 2 * $i(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
      n = { ...n, mass: at.mass, stiffness: r, damping: u };
    } else {
      const a = XC(t);
      (n = { ...n, ...a, mass: at.mass }), (n.isResolvedFromDuration = !0);
    }
  return n;
}
function Iu(t = at.visualDuration, n = at.bounce) {
  const a =
    typeof t != "object"
      ? { visualDuration: t, keyframes: [0, 1], bounce: n }
      : t;
  let { restSpeed: l, restDelta: r } = a;
  const u = a.keyframes[0],
    c = a.keyframes[a.keyframes.length - 1],
    d = { done: !1, value: u },
    {
      stiffness: h,
      damping: m,
      mass: v,
      duration: b,
      velocity: g,
      isResolvedFromDuration: T,
    } = e6({ ...a, velocity: -Jn(a.velocity || 0) }),
    x = g || 0,
    C = m / (2 * Math.sqrt(h * v)),
    A = c - u,
    M = Jn(Math.sqrt(h / v)),
    V = Math.abs(A) < 5;
  l || (l = V ? at.restSpeed.granular : at.restSpeed.default),
    r || (r = V ? at.restDelta.granular : at.restDelta.default);
  let P;
  if (C < 1) {
    const R = yh(M, C);
    P = (B) => {
      const X = Math.exp(-C * M * B);
      return (
        c - X * (((x + C * M * A) / R) * Math.sin(R * B) + A * Math.cos(R * B))
      );
    };
  } else if (C === 1) P = (R) => c - Math.exp(-M * R) * (A + (x + M * A) * R);
  else {
    const R = M * Math.sqrt(C * C - 1);
    P = (B) => {
      const X = Math.exp(-C * M * B),
        w = Math.min(R * B, 300);
      return (
        c - (X * ((x + C * M * A) * Math.sinh(w) + R * A * Math.cosh(w))) / R
      );
    };
  }
  const z = {
    calculatedDuration: (T && b) || null,
    next: (R) => {
      const B = P(R);
      if (T) d.done = R >= b;
      else {
        let X = R === 0 ? x : 0;
        C < 1 && (X = R === 0 ? Qn(x) : $T(P, R, B));
        const w = Math.abs(X) <= l,
          G = Math.abs(c - B) <= r;
        d.done = w && G;
      }
      return (d.value = d.done ? c : B), d;
    },
    toString: () => {
      const R = Math.min(xp(z), Fu),
        B = ET((X) => z.next(R * X).value, R, 30);
      return R + "ms " + B;
    },
    toTransition: () => {},
  };
  return z;
}
Iu.applyToOptions = (t) => {
  const n = YC(t, 100, Iu);
  return (
    (t.ease = n.ease), (t.duration = Qn(n.duration)), (t.type = "keyframes"), t
  );
};
function Sh({
  keyframes: t,
  velocity: n = 0,
  power: a = 0.8,
  timeConstant: l = 325,
  bounceDamping: r = 10,
  bounceStiffness: u = 500,
  modifyTarget: c,
  min: d,
  max: h,
  restDelta: m = 0.5,
  restSpeed: v,
}) {
  const b = t[0],
    g = { done: !1, value: b },
    T = (w) => (d !== void 0 && w < d) || (h !== void 0 && w > h),
    x = (w) =>
      d === void 0
        ? h
        : h === void 0 || Math.abs(d - w) < Math.abs(h - w)
          ? d
          : h;
  let C = a * n;
  const A = b + C,
    M = c === void 0 ? A : c(A);
  M !== A && (C = M - b);
  const V = (w) => -C * Math.exp(-w / l),
    P = (w) => M + V(w),
    z = (w) => {
      const G = V(w),
        W = P(w);
      (g.done = Math.abs(G) <= m), (g.value = g.done ? M : W);
    };
  let R, B;
  const X = (w) => {
    T(g.value) &&
      ((R = w),
      (B = Iu({
        keyframes: [g.value, x(g.value)],
        velocity: $T(P, w, g.value),
        damping: r,
        stiffness: u,
        restDelta: m,
        restSpeed: v,
      })));
  };
  return (
    X(0),
    {
      calculatedDuration: null,
      next: (w) => {
        let G = !1;
        return (
          !B && R === void 0 && ((G = !0), z(w), X(w)),
          R !== void 0 && w >= R ? B.next(w - R) : (!G && z(w), g)
        );
      },
    }
  );
}
function t6(t, n, a) {
  const l = [],
    r = a || ni.mix || xT,
    u = t.length - 1;
  for (let c = 0; c < u; c++) {
    let d = r(t[c], t[c + 1]);
    if (n) {
      const h = Array.isArray(n) ? n[c] || Mn : n;
      d = jr(h, d);
    }
    l.push(d);
  }
  return l;
}
function n6(t, n, { clamp: a = !0, ease: l, mixer: r } = {}) {
  const u = t.length;
  if ((dp(u === n.length), u === 1)) return () => n[0];
  if (u === 2 && n[0] === n[1]) return () => n[1];
  const c = t[0] === t[1];
  t[0] > t[u - 1] && ((t = [...t].reverse()), (n = [...n].reverse()));
  const d = t6(n, l, r),
    h = d.length,
    m = (v) => {
      if (c && v < t[0]) return n[0];
      let b = 0;
      if (h > 1) for (; b < t.length - 2 && !(v < t[b + 1]); b++);
      const g = Mr(t[b], t[b + 1], v);
      return d[b](g);
    };
  return a ? (v) => m($i(t[0], t[u - 1], v)) : m;
}
function i6(t, n) {
  const a = t[t.length - 1];
  for (let l = 1; l <= n; l++) {
    const r = Mr(0, n, l);
    t.push(Je(a, 1, r));
  }
}
function a6(t) {
  const n = [0];
  return i6(n, t.length - 1), n;
}
function l6(t, n) {
  return t.map((a) => a * n);
}
function s6(t, n) {
  return t.map(() => n || dT).splice(0, t.length - 1);
}
function yr({
  duration: t = 300,
  keyframes: n,
  times: a,
  ease: l = "easeInOut",
}) {
  const r = bC(l) ? l.map(_g) : _g(l),
    u = { done: !1, value: n[0] },
    c = l6(a && a.length === n.length ? a : a6(n), t),
    d = n6(c, n, { ease: Array.isArray(r) ? r : s6(n, r) });
  return {
    calculatedDuration: t,
    next: (h) => ((u.value = d(h)), (u.done = h >= t), u),
  };
}
const r6 = (t) => t !== null;
function Ep(t, { repeat: n, repeatType: a = "loop" }, l, r = 1) {
  const u = t.filter(r6),
    d = r < 0 || (n && a !== "loop" && n % 2 === 1) ? 0 : u.length - 1;
  return !d || l === void 0 ? u[d] : l;
}
const o6 = { decay: Sh, inertia: Sh, tween: yr, keyframes: yr, spring: Iu };
function wT(t) {
  typeof t.type == "string" && (t.type = o6[t.type]);
}
class $p {
  constructor() {
    (this.count = 0), this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this.count++,
      (this._finished = new Promise((n) => {
        this.resolve = n;
      }));
  }
  notifyFinished() {
    this.resolve();
  }
  then(n, a) {
    return this.finished.then(n, a);
  }
}
const u6 = (t) => t / 100;
class wp extends $p {
  constructor(n) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = (a = !0) => {
        if (a) {
          const { motionValue: r } = this.options;
          r && r.updatedAt !== Xt.now() && this.tick(Xt.now());
        }
        if (((this.isStopped = !0), this.state === "idle")) return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }),
      (this.options = n),
      this.initAnimation(),
      this.play(),
      n.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: n } = this;
    wT(n);
    const {
      type: a = yr,
      repeat: l = 0,
      repeatDelay: r = 0,
      repeatType: u,
      velocity: c = 0,
    } = n;
    let { keyframes: d } = n;
    const h = a || yr;
    h !== yr &&
      typeof d[0] != "number" &&
      ((this.mixKeyframes = jr(u6, xT(d[0], d[1]))), (d = [0, 100]));
    const m = h({ ...n, keyframes: d });
    u === "mirror" &&
      (this.mirroredGenerator = h({
        ...n,
        keyframes: [...d].reverse(),
        velocity: -c,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = xp(m));
    const { calculatedDuration: v } = m;
    (this.calculatedDuration = v),
      (this.resolvedDuration = v + r),
      (this.totalDuration = this.resolvedDuration * (l + 1) - r),
      (this.generator = m);
  }
  updateTime(n) {
    const a = Math.round(n - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = a);
  }
  tick(n, a = !1) {
    const {
      generator: l,
      totalDuration: r,
      mixKeyframes: u,
      mirroredGenerator: c,
      resolvedDuration: d,
      calculatedDuration: h,
    } = this;
    if (this.startTime === null) return l.next(0);
    const {
      delay: m = 0,
      keyframes: v,
      repeat: b,
      repeatType: g,
      repeatDelay: T,
      type: x,
      onUpdate: C,
      finalKeyframe: A,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, n))
      : this.speed < 0 &&
        (this.startTime = Math.min(n - r / this.speed, this.startTime)),
      a ? (this.currentTime = n) : this.updateTime(n);
    const M = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      V = this.playbackSpeed >= 0 ? M < 0 : M > r;
    (this.currentTime = Math.max(M, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = r);
    let P = this.currentTime,
      z = l;
    if (b) {
      const w = Math.min(this.currentTime, r) / d;
      let G = Math.floor(w),
        W = w % 1;
      !W && w >= 1 && (W = 1),
        W === 1 && G--,
        (G = Math.min(G, b + 1)),
        !!(G % 2) &&
          (g === "reverse"
            ? ((W = 1 - W), T && (W -= T / d))
            : g === "mirror" && (z = c)),
        (P = $i(0, 1, W) * d);
    }
    const R = V ? { done: !1, value: v[0] } : z.next(P);
    u && (R.value = u(R.value));
    let { done: B } = R;
    !V &&
      h !== null &&
      (B =
        this.playbackSpeed >= 0
          ? this.currentTime >= r
          : this.currentTime <= 0);
    const X =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && B));
    return (
      X && x !== Sh && (R.value = Ep(v, this.options, A, this.speed)),
      C && C(R.value),
      X && this.finish(),
      R
    );
  }
  then(n, a) {
    return this.finished.then(n, a);
  }
  get duration() {
    return Jn(this.calculatedDuration);
  }
  get time() {
    return Jn(this.currentTime);
  }
  set time(n) {
    var a;
    (n = Qn(n)),
      (this.currentTime = n),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = n)
        : this.driver &&
          (this.startTime = this.driver.now() - n / this.playbackSpeed),
      (a = this.driver) == null || a.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(n) {
    this.updateTime(Xt.now());
    const a = this.playbackSpeed !== n;
    (this.playbackSpeed = n), a && (this.time = Jn(this.currentTime));
  }
  play() {
    if (this.isStopped) return;
    const { driver: n = GC, onPlay: a, startTime: l } = this.options;
    this.driver || (this.driver = n((u) => this.tick(u))), a && a();
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = l ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Xt.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: n } = this.options;
    n && n();
  }
  cancel() {
    (this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown();
  }
  teardown() {
    this.notifyFinished(),
      (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(n) {
    return (this.startTime = 0), this.tick(n, !0);
  }
  attachTimeline(n) {
    var a;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (a = this.driver) == null || a.stop(),
      n.observe(this)
    );
  }
}
function c6(t) {
  for (let n = 1; n < t.length; n++) t[n] ?? (t[n] = t[n - 1]);
}
const Na = (t) => (t * 180) / Math.PI,
  Th = (t) => {
    const n = Na(Math.atan2(t[1], t[0]));
    return xh(n);
  },
  f6 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Th,
    rotateZ: Th,
    skewX: (t) => Na(Math.atan(t[1])),
    skewY: (t) => Na(Math.atan(t[2])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
  },
  xh = (t) => ((t = t % 360), t < 0 && (t += 360), t),
  Kg = Th,
  jg = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
  Fg = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
  d6 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: jg,
    scaleY: Fg,
    scale: (t) => (jg(t) + Fg(t)) / 2,
    rotateX: (t) => xh(Na(Math.atan2(t[6], t[5]))),
    rotateY: (t) => xh(Na(Math.atan2(-t[2], t[0]))),
    rotateZ: Kg,
    rotate: Kg,
    skewX: (t) => Na(Math.atan(t[4])),
    skewY: (t) => Na(Math.atan(t[1])),
    skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
  };
function Ig(t) {
  return t.includes("scale") ? 1 : 0;
}
function Eh(t, n) {
  if (!t || t === "none") return Ig(n);
  const a = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let l, r;
  if (a) (l = d6), (r = a);
  else {
    const d = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (l = f6), (r = d);
  }
  if (!r) return Ig(n);
  const u = l[n],
    c = r[1].split(",").map(p6);
  return typeof u == "function" ? u(c) : c[u];
}
const h6 = (t, n) => {
  const { transform: a = "none" } = getComputedStyle(t);
  return Eh(a, n);
};
function p6(t) {
  return parseFloat(t.trim());
}
const ls = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ss = new Set(ls),
  Gg = (t) => t === as || t === Se,
  m6 = new Set(["x", "y", "z"]),
  v6 = ls.filter((t) => !m6.has(t));
function b6(t) {
  const n = [];
  return (
    v6.forEach((a) => {
      const l = t.getValue(a);
      l !== void 0 &&
        (n.push([a, l.get()]), l.set(a.startsWith("scale") ? 1 : 0));
    }),
    n
  );
}
const La = {
  width: ({ x: t }, { paddingLeft: n = "0", paddingRight: a = "0" }) =>
    t.max - t.min - parseFloat(n) - parseFloat(a),
  height: ({ y: t }, { paddingTop: n = "0", paddingBottom: a = "0" }) =>
    t.max - t.min - parseFloat(n) - parseFloat(a),
  top: (t, { top: n }) => parseFloat(n),
  left: (t, { left: n }) => parseFloat(n),
  bottom: ({ y: t }, { top: n }) => parseFloat(n) + (t.max - t.min),
  right: ({ x: t }, { left: n }) => parseFloat(n) + (t.max - t.min),
  x: (t, { transform: n }) => Eh(n, "x"),
  y: (t, { transform: n }) => Eh(n, "y"),
};
La.translateX = La.x;
La.translateY = La.y;
const _a = new Set();
let $h = !1,
  wh = !1,
  Ch = !1;
function CT() {
  if (wh) {
    const t = Array.from(_a).filter((l) => l.needsMeasurement),
      n = new Set(t.map((l) => l.element)),
      a = new Map();
    n.forEach((l) => {
      const r = b6(l);
      r.length && (a.set(l, r), l.render());
    }),
      t.forEach((l) => l.measureInitialState()),
      n.forEach((l) => {
        l.render();
        const r = a.get(l);
        r &&
          r.forEach(([u, c]) => {
            var d;
            (d = l.getValue(u)) == null || d.set(c);
          });
      }),
      t.forEach((l) => l.measureEndState()),
      t.forEach((l) => {
        l.suspendedScrollY !== void 0 && window.scrollTo(0, l.suspendedScrollY);
      });
  }
  (wh = !1), ($h = !1), _a.forEach((t) => t.complete(Ch)), _a.clear();
}
function MT() {
  _a.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (wh = !0);
  });
}
function g6() {
  (Ch = !0), MT(), CT(), (Ch = !1);
}
class Cp {
  constructor(n, a, l, r, u, c = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...n]),
      (this.onComplete = a),
      (this.name = l),
      (this.motionValue = r),
      (this.element = u),
      (this.isAsync = c);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (_a.add(this),
          $h || (($h = !0), Ze.read(MT), Ze.resolveKeyframes(CT)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: n,
      name: a,
      element: l,
      motionValue: r,
    } = this;
    if (n[0] === null) {
      const u = r == null ? void 0 : r.get(),
        c = n[n.length - 1];
      if (u !== void 0) n[0] = u;
      else if (l && a) {
        const d = l.readValue(a, c);
        d != null && (n[0] = d);
      }
      n[0] === void 0 && (n[0] = c), r && u === void 0 && r.set(n[0]);
    }
    c6(n);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(n = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n),
      _a.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (_a.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const y6 = (t) => t.startsWith("--");
function S6(t, n, a) {
  y6(n) ? t.style.setProperty(n, a) : (t.style[n] = a);
}
const T6 = hp(() => window.ScrollTimeline !== void 0),
  x6 = {};
function E6(t, n) {
  const a = hp(t);
  return () => x6[n] ?? a();
}
const DT = E6(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  pr = ([t, n, a, l]) => `cubic-bezier(${t}, ${n}, ${a}, ${l})`,
  Yg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: pr([0, 0.65, 0.55, 1]),
    circOut: pr([0.55, 0, 1, 0.45]),
    backIn: pr([0.31, 0.01, 0.66, -0.59]),
    backOut: pr([0.33, 1.53, 0.69, 0.99]),
  };
function AT(t, n) {
  if (t)
    return typeof t == "function"
      ? DT()
        ? ET(t, n)
        : "ease-out"
      : hT(t)
        ? pr(t)
        : Array.isArray(t)
          ? t.map((a) => AT(a, n) || Yg.easeOut)
          : Yg[t];
}
function $6(
  t,
  n,
  a,
  {
    delay: l = 0,
    duration: r = 300,
    repeat: u = 0,
    repeatType: c = "loop",
    ease: d = "easeOut",
    times: h,
  } = {},
  m = void 0,
) {
  const v = { [n]: a };
  h && (v.offset = h);
  const b = AT(d, r);
  Array.isArray(b) && (v.easing = b);
  const g = {
    delay: l,
    duration: r,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: u + 1,
    direction: c === "reverse" ? "alternate" : "normal",
  };
  return m && (g.pseudoElement = m), t.animate(v, g);
}
function PT(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function w6({ type: t, ...n }) {
  return PT(t) && DT()
    ? t.applyToOptions(n)
    : (n.duration ?? (n.duration = 300), n.ease ?? (n.ease = "easeOut"), n);
}
class C6 extends $p {
  constructor(n) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !n))
      return;
    const {
      element: a,
      name: l,
      keyframes: r,
      pseudoElement: u,
      allowFlatten: c = !1,
      finalKeyframe: d,
      onComplete: h,
    } = n;
    (this.isPseudoElement = !!u),
      (this.allowFlatten = c),
      (this.options = n),
      dp(typeof n.type != "string");
    const m = w6(n);
    (this.animation = $6(a, l, r, m, u)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !u)) {
          const v = Ep(r, this.options, d, this.speed);
          this.updateMotionValue ? this.updateMotionValue(v) : S6(a, l, v),
            this.animation.cancel();
        }
        h == null || h(), this.notifyFinished();
      }),
      (this.animation.oncancel = () => this.notifyFinished());
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var n, a;
    (a = (n = this.animation).finish) == null || a.call(n);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: n } = this;
    n === "idle" ||
      n === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, a;
    this.isPseudoElement ||
      (a = (n = this.animation).commitStyles) == null ||
      a.call(n);
  }
  get duration() {
    var a, l;
    const n =
      ((l =
        (a = this.animation.effect) == null ? void 0 : a.getComputedTiming) ==
      null
        ? void 0
        : l.call(a).duration) || 0;
    return Jn(Number(n));
  }
  get time() {
    return Jn(Number(this.animation.currentTime) || 0);
  }
  set time(n) {
    (this.finishedTime = null), (this.animation.currentTime = Qn(n));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(n) {
    n < 0 && (this.finishedTime = null), (this.animation.playbackRate = n);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(n) {
    this.animation.startTime = n;
  }
  attachTimeline({ timeline: n, observe: a }) {
    var l;
    return (
      this.allowFlatten &&
        ((l = this.animation.effect) == null ||
          l.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      n && T6() ? ((this.animation.timeline = n), Mn) : a(this)
    );
  }
}
const RT = { anticipate: uT, backInOut: oT, circInOut: fT };
function M6(t) {
  return t in RT;
}
function D6(t) {
  typeof t.ease == "string" && M6(t.ease) && (t.ease = RT[t.ease]);
}
const qg = 10;
class A6 extends C6 {
  constructor(n) {
    D6(n),
      wT(n),
      super(n),
      n.startTime && (this.startTime = n.startTime),
      (this.options = n);
  }
  updateMotionValue(n) {
    const {
      motionValue: a,
      onUpdate: l,
      onComplete: r,
      element: u,
      ...c
    } = this.options;
    if (!a) return;
    if (n !== void 0) {
      a.set(n);
      return;
    }
    const d = new wp({ ...c, autoplay: !1 }),
      h = Qn(this.finishedTime ?? this.time);
    a.setWithVelocity(d.sample(h - qg).value, d.sample(h).value, qg), d.stop();
  }
}
const Xg = (t, n) =>
  n === "zIndex"
    ? !1
    : !!(
        typeof t == "number" ||
        Array.isArray(t) ||
        (typeof t == "string" &&
          (aa.test(t) || t === "0") &&
          !t.startsWith("url("))
      );
function P6(t) {
  const n = t[0];
  if (t.length === 1) return !0;
  for (let a = 0; a < t.length; a++) if (t[a] !== n) return !0;
}
function R6(t, n, a, l) {
  const r = t[0];
  if (r === null) return !1;
  if (n === "display" || n === "visibility") return !0;
  const u = t[t.length - 1],
    c = Xg(r, n),
    d = Xg(u, n);
  return !c || !d ? !1 : P6(t) || ((a === "spring" || PT(a)) && l);
}
const N6 = new Set(["opacity", "clipPath", "filter", "transform"]),
  O6 = hp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function L6(t) {
  const {
    motionValue: n,
    name: a,
    repeatDelay: l,
    repeatType: r,
    damping: u,
    type: c,
  } = t;
  if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
  const { onUpdate: d, transformTemplate: h } = n.owner.getProps();
  return (
    O6() &&
    a &&
    N6.has(a) &&
    (a !== "transform" || !h) &&
    !d &&
    !l &&
    r !== "mirror" &&
    u !== 0 &&
    c !== "inertia"
  );
}
const _6 = 40;
class z6 extends $p {
  constructor({
    autoplay: n = !0,
    delay: a = 0,
    type: l = "keyframes",
    repeat: r = 0,
    repeatDelay: u = 0,
    repeatType: c = "loop",
    keyframes: d,
    name: h,
    motionValue: m,
    element: v,
    ...b
  }) {
    var x;
    super(),
      (this.stop = () => {
        var C, A;
        this._animation &&
          (this._animation.stop(),
          (C = this.stopTimeline) == null || C.call(this)),
          (A = this.keyframeResolver) == null || A.cancel();
      }),
      (this.createdAt = Xt.now());
    const g = {
        autoplay: n,
        delay: a,
        type: l,
        repeat: r,
        repeatDelay: u,
        repeatType: c,
        name: h,
        motionValue: m,
        element: v,
        ...b,
      },
      T = (v == null ? void 0 : v.KeyframeResolver) || Cp;
    (this.keyframeResolver = new T(
      d,
      (C, A, M) => this.onKeyframesResolved(C, A, g, !M),
      h,
      m,
      v,
    )),
      (x = this.keyframeResolver) == null || x.scheduleResolve();
  }
  onKeyframesResolved(n, a, l, r) {
    this.keyframeResolver = void 0;
    const {
      name: u,
      type: c,
      velocity: d,
      delay: h,
      isHandoff: m,
      onUpdate: v,
    } = l;
    (this.resolvedAt = Xt.now()),
      R6(n, u, c, d) ||
        ((ni.instantAnimations || !h) && (v == null || v(Ep(n, l, a))),
        (n[0] = n[n.length - 1]),
        (l.duration = 0),
        (l.repeat = 0));
    const g = {
        startTime: r
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > _6
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: a,
        ...l,
        keyframes: n,
      },
      T =
        !m && L6(g)
          ? new A6({ ...g, element: g.motionValue.owner.current })
          : new wp(g);
    T.finished.then(() => this.notifyFinished()).catch(Mn),
      this.pendingTimeline &&
        ((this.stopTimeline = T.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = T);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(n, a) {
    return this.finished.finally(n).then(() => {});
  }
  get animation() {
    var n;
    return (
      this._animation ||
        ((n = this.keyframeResolver) == null || n.resume(), g6()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(n) {
    this.animation.time = n;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(n) {
    this.animation.speed = n;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(n) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(n))
        : (this.pendingTimeline = n),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var n;
    this._animation && this.animation.cancel(),
      (n = this.keyframeResolver) == null || n.cancel();
  }
}
const V6 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function B6(t) {
  const n = V6.exec(t);
  if (!n) return [,];
  const [, a, l, r] = n;
  return [`--${a ?? l}`, r];
}
function NT(t, n, a = 1) {
  const [l, r] = B6(t);
  if (!l) return;
  const u = window.getComputedStyle(n).getPropertyValue(l);
  if (u) {
    const c = u.trim();
    return tT(c) ? parseFloat(c) : c;
  }
  return gp(r) ? NT(r, n, a + 1) : r;
}
function Mp(t, n) {
  return (t == null ? void 0 : t[n]) ?? (t == null ? void 0 : t.default) ?? t;
}
const OT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ls,
  ]),
  k6 = { test: (t) => t === "auto", parse: (t) => t },
  LT = (t) => (n) => n.test(t),
  _T = [as, Se, ei, ea, PC, AC, k6],
  Zg = (t) => _T.find(LT(t));
function H6(t) {
  return typeof t == "number"
    ? t === 0
    : t !== null
      ? t === "none" || t === "0" || nT(t)
      : !0;
}
const U6 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function K6(t) {
  const [n, a] = t.slice(0, -1).split("(");
  if (n === "drop-shadow") return t;
  const [l] = a.match(yp) || [];
  if (!l) return t;
  const r = a.replace(l, "");
  let u = U6.has(n) ? 1 : 0;
  return l !== a && (u *= 100), n + "(" + u + r + ")";
}
const j6 = /\b([a-z-]*)\(.*?\)/gu,
  Mh = {
    ...aa,
    getAnimatableNone: (t) => {
      const n = t.match(j6);
      return n ? n.map(K6).join(" ") : t;
    },
  },
  Wg = { ...as, transform: Math.round },
  F6 = {
    rotate: ea,
    rotateX: ea,
    rotateY: ea,
    rotateZ: ea,
    scale: yu,
    scaleX: yu,
    scaleY: yu,
    scaleZ: yu,
    skew: ea,
    skewX: ea,
    skewY: ea,
    distance: Se,
    translateX: Se,
    translateY: Se,
    translateZ: Se,
    x: Se,
    y: Se,
    z: Se,
    perspective: Se,
    transformPerspective: Se,
    opacity: Dr,
    originX: zg,
    originY: zg,
    originZ: Se,
  },
  Dp = {
    borderWidth: Se,
    borderTopWidth: Se,
    borderRightWidth: Se,
    borderBottomWidth: Se,
    borderLeftWidth: Se,
    borderRadius: Se,
    radius: Se,
    borderTopLeftRadius: Se,
    borderTopRightRadius: Se,
    borderBottomRightRadius: Se,
    borderBottomLeftRadius: Se,
    width: Se,
    maxWidth: Se,
    height: Se,
    maxHeight: Se,
    top: Se,
    right: Se,
    bottom: Se,
    left: Se,
    padding: Se,
    paddingTop: Se,
    paddingRight: Se,
    paddingBottom: Se,
    paddingLeft: Se,
    margin: Se,
    marginTop: Se,
    marginRight: Se,
    marginBottom: Se,
    marginLeft: Se,
    backgroundPositionX: Se,
    backgroundPositionY: Se,
    ...F6,
    zIndex: Wg,
    fillOpacity: Dr,
    strokeOpacity: Dr,
    numOctaves: Wg,
  },
  I6 = {
    ...Dp,
    color: zt,
    backgroundColor: zt,
    outlineColor: zt,
    fill: zt,
    stroke: zt,
    borderColor: zt,
    borderTopColor: zt,
    borderRightColor: zt,
    borderBottomColor: zt,
    borderLeftColor: zt,
    filter: Mh,
    WebkitFilter: Mh,
  },
  zT = (t) => I6[t];
function VT(t, n) {
  let a = zT(t);
  return (
    a !== Mh && (a = aa), a.getAnimatableNone ? a.getAnimatableNone(n) : void 0
  );
}
const G6 = new Set(["auto", "none", "0"]);
function Y6(t, n, a) {
  let l = 0,
    r;
  for (; l < t.length && !r; ) {
    const u = t[l];
    typeof u == "string" && !G6.has(u) && Ar(u).values.length && (r = t[l]),
      l++;
  }
  if (r && a) for (const u of n) t[u] = VT(a, r);
}
class q6 extends Cp {
  constructor(n, a, l, r, u) {
    super(n, a, l, r, u, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: n, element: a, name: l } = this;
    if (!a || !a.current) return;
    super.readKeyframes();
    for (let h = 0; h < n.length; h++) {
      let m = n[h];
      if (typeof m == "string" && ((m = m.trim()), gp(m))) {
        const v = NT(m, a.current);
        v !== void 0 && (n[h] = v),
          h === n.length - 1 && (this.finalKeyframe = m);
      }
    }
    if ((this.resolveNoneKeyframes(), !OT.has(l) || n.length !== 2)) return;
    const [r, u] = n,
      c = Zg(r),
      d = Zg(u);
    if (c !== d)
      if (Gg(c) && Gg(d))
        for (let h = 0; h < n.length; h++) {
          const m = n[h];
          typeof m == "string" && (n[h] = parseFloat(m));
        }
      else La[l] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: n, name: a } = this,
      l = [];
    for (let r = 0; r < n.length; r++) (n[r] === null || H6(n[r])) && l.push(r);
    l.length && Y6(n, l, a);
  }
  measureInitialState() {
    const { element: n, unresolvedKeyframes: a, name: l } = this;
    if (!n || !n.current) return;
    l === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = La[l](
        n.measureViewportBox(),
        window.getComputedStyle(n.current),
      )),
      (a[0] = this.measuredOrigin);
    const r = a[a.length - 1];
    r !== void 0 && n.getValue(l, r).jump(r, !1);
  }
  measureEndState() {
    var d;
    const { element: n, name: a, unresolvedKeyframes: l } = this;
    if (!n || !n.current) return;
    const r = n.getValue(a);
    r && r.jump(this.measuredOrigin, !1);
    const u = l.length - 1,
      c = l[u];
    (l[u] = La[a](n.measureViewportBox(), window.getComputedStyle(n.current))),
      c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c),
      (d = this.removedTransforms) != null &&
        d.length &&
        this.removedTransforms.forEach(([h, m]) => {
          n.getValue(h).set(m);
        }),
      this.resolveNoneKeyframes();
  }
}
function X6(t, n, a) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let l = document;
    const r = (a == null ? void 0 : a[t]) ?? l.querySelectorAll(t);
    return r ? Array.from(r) : [];
  }
  return Array.from(t);
}
const Qg = 30,
  Z6 = (t) => !isNaN(parseFloat(t));
class W6 {
  constructor(n, a = {}) {
    (this.version = "__VERSION__"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (l, r = !0) => {
        var c, d;
        const u = Xt.now();
        if (
          (this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(l),
          this.current !== this.prev &&
            ((c = this.events.change) == null || c.notify(this.current),
            this.dependents))
        )
          for (const h of this.dependents) h.dirty();
        r &&
          ((d = this.events.renderRequest) == null || d.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(n),
      (this.owner = a.owner);
  }
  setCurrent(n) {
    (this.current = n),
      (this.updatedAt = Xt.now()),
      this.canTrackVelocity === null &&
        n !== void 0 &&
        (this.canTrackVelocity = Z6(this.current));
  }
  setPrevFrameValue(n = this.current) {
    (this.prevFrameValue = n), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(n) {
    return this.on("change", n);
  }
  on(n, a) {
    this.events[n] || (this.events[n] = new pp());
    const l = this.events[n].add(a);
    return n === "change"
      ? () => {
          l(),
            Ze.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : l;
  }
  clearListeners() {
    for (const n in this.events) this.events[n].clear();
  }
  attach(n, a) {
    (this.passiveEffect = n), (this.stopPassiveEffect = a);
  }
  set(n, a = !0) {
    !a || !this.passiveEffect
      ? this.updateAndNotify(n, a)
      : this.passiveEffect(n, this.updateAndNotify);
  }
  setWithVelocity(n, a, l) {
    this.set(a),
      (this.prev = void 0),
      (this.prevFrameValue = n),
      (this.prevUpdatedAt = this.updatedAt - l);
  }
  jump(n, a = !0) {
    this.updateAndNotify(n),
      (this.prev = n),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var n;
    (n = this.events.change) == null || n.notify(this.current);
  }
  addDependent(n) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(n);
  }
  removeDependent(n) {
    this.dependents && this.dependents.delete(n);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const n = Xt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      n - this.updatedAt > Qg
    )
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, Qg);
    return iT(parseFloat(this.current) - parseFloat(this.prevFrameValue), a);
  }
  start(n) {
    return (
      this.stop(),
      new Promise((a) => {
        (this.hasAnimated = !0),
          (this.animation = n(a)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var n, a;
    (n = this.dependents) == null || n.clear(),
      (a = this.events.destroy) == null || a.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Jl(t, n) {
  return new W6(t, n);
}
const BT = (t, n) => (n && typeof t == "number" ? n.transform(t) : t),
  { schedule: Ap } = pT(queueMicrotask, !1),
  Bn = { x: !1, y: !1 };
function kT() {
  return Bn.x || Bn.y;
}
function Q6(t) {
  return t === "x" || t === "y"
    ? Bn[t]
      ? null
      : ((Bn[t] = !0),
        () => {
          Bn[t] = !1;
        })
    : Bn.x || Bn.y
      ? null
      : ((Bn.x = Bn.y = !0),
        () => {
          Bn.x = Bn.y = !1;
        });
}
function HT(t, n) {
  const a = X6(t),
    l = new AbortController(),
    r = { passive: !0, ...n, signal: l.signal };
  return [a, r, () => l.abort()];
}
function Jg(t) {
  return !(t.pointerType === "touch" || kT());
}
function J6(t, n, a = {}) {
  const [l, r, u] = HT(t, a),
    c = (d) => {
      if (!Jg(d)) return;
      const { target: h } = d,
        m = n(h, d);
      if (typeof m != "function" || !h) return;
      const v = (b) => {
        Jg(b) && (m(b), h.removeEventListener("pointerleave", v));
      };
      h.addEventListener("pointerleave", v, r);
    };
  return (
    l.forEach((d) => {
      d.addEventListener("pointerenter", c, r);
    }),
    u
  );
}
const UT = (t, n) => (n ? (t === n ? !0 : UT(t, n.parentElement)) : !1),
  Pp = (t) =>
    t.pointerType === "mouse"
      ? typeof t.button != "number" || t.button <= 0
      : t.isPrimary !== !1,
  e7 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function t7(t) {
  return e7.has(t.tagName) || t.tabIndex !== -1;
}
const mr = new WeakSet();
function ey(t) {
  return (n) => {
    n.key === "Enter" && t(n);
  };
}
function kd(t, n) {
  t.dispatchEvent(
    new PointerEvent("pointer" + n, { isPrimary: !0, bubbles: !0 }),
  );
}
const n7 = (t, n) => {
  const a = t.currentTarget;
  if (!a) return;
  const l = ey(() => {
    if (mr.has(a)) return;
    kd(a, "down");
    const r = ey(() => {
        kd(a, "up");
      }),
      u = () => kd(a, "cancel");
    a.addEventListener("keyup", r, n), a.addEventListener("blur", u, n);
  });
  a.addEventListener("keydown", l, n),
    a.addEventListener("blur", () => a.removeEventListener("keydown", l), n);
};
function ty(t) {
  return Pp(t) && !kT();
}
function i7(t, n, a = {}) {
  const [l, r, u] = HT(t, a),
    c = (d) => {
      const h = d.currentTarget;
      if (!ty(d) || mr.has(h)) return;
      mr.add(h);
      const m = n(h, d),
        v = (T, x) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", g),
            mr.has(h) && mr.delete(h),
            ty(T) && typeof m == "function" && m(T, { success: x });
        },
        b = (T) => {
          v(
            T,
            h === window ||
              h === document ||
              a.useGlobalTarget ||
              UT(h, T.target),
          );
        },
        g = (T) => {
          v(T, !1);
        };
      window.addEventListener("pointerup", b, r),
        window.addEventListener("pointercancel", g, r);
    };
  return (
    l.forEach((d) => {
      (a.useGlobalTarget ? window : d).addEventListener("pointerdown", c, r),
        d instanceof HTMLElement &&
          (d.addEventListener("focus", (m) => n7(m, r)),
          !t7(d) && !d.hasAttribute("tabindex") && (d.tabIndex = 0));
    }),
    u
  );
}
const a7 = [..._T, zt, aa],
  l7 = (t) => a7.find(LT(t));
function s7() {
  const t = S.useRef(!1);
  return (
    op(
      () => (
        (t.current = !0),
        () => {
          t.current = !1;
        }
      ),
      [],
    ),
    t
  );
}
function r7() {
  const t = s7(),
    [n, a] = S.useState(0),
    l = S.useCallback(() => {
      t.current && a(n + 1);
    }, [n]);
  return [S.useCallback(() => Ze.postRender(l), [l]), n];
}
const o7 = (t) => !t.isLayoutDirty && t.willUpdate(!1);
function ny() {
  const t = new Set(),
    n = new WeakMap(),
    a = () => t.forEach(o7);
  return {
    add: (l) => {
      t.add(l), n.set(l, l.addEventListener("willUpdate", a));
    },
    remove: (l) => {
      t.delete(l);
      const r = n.get(l);
      r && (r(), n.delete(l)), a();
    },
    dirty: a,
  };
}
const KT = (t) => t === !0,
  u7 = (t) => KT(t === !0) || t === "id",
  c7 = ({ children: t, id: n, inherit: a = !0 }) => {
    const l = S.useContext(wr),
      r = S.useContext(cC),
      [u, c] = r7(),
      d = S.useRef(null),
      h = l.id || r;
    d.current === null &&
      (u7(a) && h && (n = n ? h + "-" + n : h),
      (d.current = { id: n, group: (KT(a) && l.group) || ny() }));
    const m = S.useMemo(() => ({ ...d.current, forceRender: u }), [c]);
    return U.jsx(wr.Provider, { value: m, children: t });
  },
  Rp = S.createContext({ strict: !1 }),
  iy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  es = {};
for (const t in iy) es[t] = { isEnabled: (n) => iy[t].some((a) => !!n[a]) };
function Dh(t) {
  for (const n in t) es[n] = { ...es[n], ...t[n] };
}
function Pr({ children: t, features: n, strict: a = !1 }) {
  const [, l] = S.useState(!Hd(n)),
    r = S.useRef(void 0);
  if (!Hd(n)) {
    const { renderer: u, ...c } = n;
    (r.current = u), Dh(c);
  }
  return (
    S.useEffect(() => {
      Hd(n) &&
        n().then(({ renderer: u, ...c }) => {
          Dh(c), (r.current = u), l(!0);
        });
    }, []),
    U.jsx(Rp.Provider, {
      value: { renderer: r.current, strict: a },
      children: t,
    })
  );
}
function Hd(t) {
  return typeof t == "function";
}
const f7 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Gu(t) {
  return (
    t.startsWith("while") ||
    (t.startsWith("drag") && t !== "draggable") ||
    t.startsWith("layout") ||
    t.startsWith("onTap") ||
    t.startsWith("onPan") ||
    t.startsWith("onLayout") ||
    f7.has(t)
  );
}
let jT = (t) => !Gu(t);
function FT(t) {
  t && (jT = (n) => (n.startsWith("on") ? !Gu(n) : t(n)));
}
try {
  FT(require("@emotion/is-prop-valid").default);
} catch {}
function d7(t, n, a) {
  const l = {};
  for (const r in t)
    (r === "values" && typeof t.values == "object") ||
      ((jT(r) ||
        (a === !0 && Gu(r)) ||
        (!n && !Gu(r)) ||
        (t.draggable && r.startsWith("onDrag"))) &&
        (l[r] = t[r]));
  return l;
}
function h7({ children: t, isValidProp: n, ...a }) {
  n && FT(n),
    (a = { ...S.useContext(Cr), ...a }),
    (a.isStatic = lc(() => a.isStatic));
  const l = S.useMemo(
    () => a,
    [JSON.stringify(a.transition), a.transformPagePoint, a.reducedMotion],
  );
  return U.jsx(Cr.Provider, { value: l, children: t });
}
function IT(t) {
  if (typeof Proxy > "u") return t;
  const n = new Map(),
    a = (...l) => t(...l);
  return new Proxy(a, {
    get: (l, r) =>
      r === "create" ? t : (n.has(r) || n.set(r, t(r)), n.get(r)),
  });
}
const rc = S.createContext({});
function oc(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Rr(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Np = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Op = ["initial", ...Np];
function uc(t) {
  return oc(t.animate) || Op.some((n) => Rr(t[n]));
}
function GT(t) {
  return !!(uc(t) || t.variants);
}
function p7(t, n) {
  if (uc(t)) {
    const { initial: a, animate: l } = t;
    return {
      initial: a === !1 || Rr(a) ? a : void 0,
      animate: Rr(l) ? l : void 0,
    };
  }
  return t.inherit !== !1 ? n : {};
}
function m7(t) {
  const { initial: n, animate: a } = p7(t, S.useContext(rc));
  return S.useMemo(() => ({ initial: n, animate: a }), [ay(n), ay(a)]);
}
function ay(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const v7 = Symbol.for("motionComponentSymbol");
function Ul(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function b7(t, n, a) {
  return S.useCallback(
    (l) => {
      l && t.onMount && t.onMount(l),
        n && (l ? n.mount(l) : n.unmount()),
        a && (typeof a == "function" ? a(l) : Ul(a) && (a.current = l));
    },
    [n],
  );
}
const Lp = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  g7 = "framerAppearId",
  YT = "data-" + Lp(g7),
  qT = S.createContext({});
function y7(t, n, a, l, r) {
  var C, A;
  const { visualElement: u } = S.useContext(rc),
    c = S.useContext(Rp),
    d = S.useContext(sc),
    h = S.useContext(Cr).reducedMotion,
    m = S.useRef(null);
  (l = l || c.renderer),
    !m.current &&
      l &&
      (m.current = l(t, {
        visualState: n,
        parent: u,
        props: a,
        presenceContext: d,
        blockInitialAnimation: d ? d.initial === !1 : !1,
        reducedMotionConfig: h,
      }));
  const v = m.current,
    b = S.useContext(qT);
  v &&
    !v.projection &&
    r &&
    (v.type === "html" || v.type === "svg") &&
    S7(m.current, a, r, b);
  const g = S.useRef(!1);
  S.useInsertionEffect(() => {
    v && g.current && v.update(a, d);
  });
  const T = a[YT],
    x = S.useRef(
      !!T &&
        !((C = window.MotionHandoffIsComplete) != null && C.call(window, T)) &&
        ((A = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : A.call(window, T)),
    );
  return (
    op(() => {
      v &&
        ((g.current = !0),
        (window.MotionIsMounted = !0),
        v.updateFeatures(),
        Ap.render(v.render),
        x.current && v.animationState && v.animationState.animateChanges());
    }),
    S.useEffect(() => {
      v &&
        (!x.current && v.animationState && v.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var M;
            (M = window.MotionHandoffMarkAsComplete) == null ||
              M.call(window, T);
          }),
          (x.current = !1)));
    }),
    v
  );
}
function S7(t, n, a, l) {
  const {
    layoutId: r,
    layout: u,
    drag: c,
    dragConstraints: d,
    layoutScroll: h,
    layoutRoot: m,
    layoutCrossfade: v,
  } = n;
  (t.projection = new a(
    t.latestValues,
    n["data-framer-portal-id"] ? void 0 : XT(t.parent),
  )),
    t.projection.setOptions({
      layoutId: r,
      layout: u,
      alwaysMeasureLayout: !!c || (d && Ul(d)),
      visualElement: t,
      animationType: typeof u == "string" ? u : "both",
      initialPromotionConfig: l,
      crossfade: v,
      layoutScroll: h,
      layoutRoot: m,
    });
}
function XT(t) {
  if (t) return t.options.allowProjection !== !1 ? t.projection : XT(t.parent);
}
function T7({
  preloadedFeatures: t,
  createVisualElement: n,
  useRender: a,
  useVisualState: l,
  Component: r,
}) {
  t && Dh(t);
  function u(d, h) {
    let m;
    const v = { ...S.useContext(Cr), ...d, layoutId: x7(d) },
      { isStatic: b } = v,
      g = m7(d),
      T = l(d, b);
    if (!b && rp) {
      E7();
      const x = $7(v);
      (m = x.MeasureLayout),
        (g.visualElement = y7(r, T, v, n, x.ProjectionNode));
    }
    return U.jsxs(rc.Provider, {
      value: g,
      children: [
        m && g.visualElement
          ? U.jsx(m, { visualElement: g.visualElement, ...v })
          : null,
        a(r, d, b7(T, g.visualElement, h), T, b, g.visualElement),
      ],
    });
  }
  u.displayName = `motion.${typeof r == "string" ? r : `create(${r.displayName ?? r.name ?? ""})`}`;
  const c = S.forwardRef(u);
  return (c[v7] = r), c;
}
function x7({ layoutId: t }) {
  const n = S.useContext(wr).id;
  return n && t !== void 0 ? n + "-" + t : t;
}
function E7(t, n) {
  S.useContext(Rp).strict;
}
function $7(t) {
  const { drag: n, layout: a } = es;
  if (!n && !a) return {};
  const l = { ...n, ...a };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(t)) || (a != null && a.isEnabled(t))
        ? l.MeasureLayout
        : void 0,
    ProjectionNode: l.ProjectionNode,
  };
}
const Nr = {};
function w7(t) {
  for (const n in t) (Nr[n] = t[n]), bp(n) && (Nr[n].isCSSVariable = !0);
}
function ZT(t, { layout: n, layoutId: a }) {
  return (
    ss.has(t) ||
    t.startsWith("origin") ||
    ((n || a !== void 0) && (!!Nr[t] || t === "opacity"))
  );
}
const Vt = (t) => !!(t && t.getVelocity),
  C7 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  M7 = ls.length;
function D7(t, n, a) {
  let l = "",
    r = !0;
  for (let u = 0; u < M7; u++) {
    const c = ls[u],
      d = t[c];
    if (d === void 0) continue;
    let h = !0;
    if (
      (typeof d == "number"
        ? (h = d === (c.startsWith("scale") ? 1 : 0))
        : (h = parseFloat(d) === 0),
      !h || a)
    ) {
      const m = BT(d, Dp[c]);
      if (!h) {
        r = !1;
        const v = C7[c] || c;
        l += `${v}(${m}) `;
      }
      a && (n[c] = m);
    }
  }
  return (l = l.trim()), a ? (l = a(n, r ? "" : l)) : r && (l = "none"), l;
}
function _p(t, n, a) {
  const { style: l, vars: r, transformOrigin: u } = t;
  let c = !1,
    d = !1;
  for (const h in n) {
    const m = n[h];
    if (ss.has(h)) {
      c = !0;
      continue;
    } else if (bp(h)) {
      r[h] = m;
      continue;
    } else {
      const v = BT(m, Dp[h]);
      h.startsWith("origin") ? ((d = !0), (u[h] = v)) : (l[h] = v);
    }
  }
  if (
    (n.transform ||
      (c || a
        ? (l.transform = D7(n, t.transform, a))
        : l.transform && (l.transform = "none")),
    d)
  ) {
    const { originX: h = "50%", originY: m = "50%", originZ: v = 0 } = u;
    l.transformOrigin = `${h} ${m} ${v}`;
  }
}
const zp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function WT(t, n, a) {
  for (const l in n) !Vt(n[l]) && !ZT(l, a) && (t[l] = n[l]);
}
function A7({ transformTemplate: t }, n) {
  return S.useMemo(() => {
    const a = zp();
    return _p(a, n, t), Object.assign({}, a.vars, a.style);
  }, [n]);
}
function P7(t, n) {
  const a = t.style || {},
    l = {};
  return WT(l, a, t), Object.assign(l, A7(t, n)), l;
}
function R7(t, n) {
  const a = {},
    l = P7(t, n);
  return (
    t.drag &&
      t.dragListener !== !1 &&
      ((a.draggable = !1),
      (l.userSelect = l.WebkitUserSelect = l.WebkitTouchCallout = "none"),
      (l.touchAction =
        t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`)),
    t.tabIndex === void 0 &&
      (t.onTap || t.onTapStart || t.whileTap) &&
      (a.tabIndex = 0),
    (a.style = l),
    a
  );
}
const N7 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Vp(t) {
  return typeof t != "string" || t.includes("-")
    ? !1
    : !!(N7.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
const O7 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  L7 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function _7(t, n, a = 1, l = 0, r = !0) {
  t.pathLength = 1;
  const u = r ? O7 : L7;
  t[u.offset] = Se.transform(-l);
  const c = Se.transform(n),
    d = Se.transform(a);
  t[u.array] = `${c} ${d}`;
}
function QT(
  t,
  {
    attrX: n,
    attrY: a,
    attrScale: l,
    pathLength: r,
    pathSpacing: u = 1,
    pathOffset: c = 0,
    ...d
  },
  h,
  m,
  v,
) {
  if ((_p(t, d, m), h)) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  (t.attrs = t.style), (t.style = {});
  const { attrs: b, style: g } = t;
  b.transform && ((g.transform = b.transform), delete b.transform),
    (g.transform || b.transformOrigin) &&
      ((g.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    g.transform &&
      ((g.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete b.transformBox),
    n !== void 0 && (b.x = n),
    a !== void 0 && (b.y = a),
    l !== void 0 && (b.scale = l),
    r !== void 0 && _7(b, r, u, c, !1);
}
const JT = () => ({ ...zp(), attrs: {} }),
  ex = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function z7(t, n, a, l) {
  const r = S.useMemo(() => {
    const u = JT();
    return (
      QT(u, n, ex(l), t.transformTemplate, t.style),
      { ...u.attrs, style: { ...u.style } }
    );
  }, [n]);
  if (t.style) {
    const u = {};
    WT(u, t.style, t), (r.style = { ...u, ...r.style });
  }
  return r;
}
function V7(t = !1) {
  return (a, l, r, { latestValues: u }, c) => {
    const h = (Vp(a) ? z7 : R7)(l, u, c, a),
      m = d7(l, typeof a == "string", t),
      v = a !== S.Fragment ? { ...m, ...h, ref: r } : {},
      { children: b } = l,
      g = S.useMemo(() => (Vt(b) ? b.get() : b), [b]);
    return S.createElement(a, { ...v, children: g });
  };
}
function ly(t) {
  const n = [{}, {}];
  return (
    t == null ||
      t.values.forEach((a, l) => {
        (n[0][l] = a.get()), (n[1][l] = a.getVelocity());
      }),
    n
  );
}
function Bp(t, n, a, l) {
  if (typeof n == "function") {
    const [r, u] = ly(l);
    n = n(a !== void 0 ? a : t.custom, r, u);
  }
  if (
    (typeof n == "string" && (n = t.variants && t.variants[n]),
    typeof n == "function")
  ) {
    const [r, u] = ly(l);
    n = n(a !== void 0 ? a : t.custom, r, u);
  }
  return n;
}
function Mu(t) {
  return Vt(t) ? t.get() : t;
}
function B7({ scrapeMotionValuesFromProps: t, createRenderState: n }, a, l, r) {
  return { latestValues: k7(a, l, r, t), renderState: n() };
}
const tx = (t) => (n, a) => {
  const l = S.useContext(rc),
    r = S.useContext(sc),
    u = () => B7(t, n, l, r);
  return a ? u() : lc(u);
};
function k7(t, n, a, l) {
  const r = {},
    u = l(t, {});
  for (const g in u) r[g] = Mu(u[g]);
  let { initial: c, animate: d } = t;
  const h = uc(t),
    m = GT(t);
  n &&
    m &&
    !h &&
    t.inherit !== !1 &&
    (c === void 0 && (c = n.initial), d === void 0 && (d = n.animate));
  let v = a ? a.initial === !1 : !1;
  v = v || c === !1;
  const b = v ? d : c;
  if (b && typeof b != "boolean" && !oc(b)) {
    const g = Array.isArray(b) ? b : [b];
    for (let T = 0; T < g.length; T++) {
      const x = Bp(t, g[T]);
      if (x) {
        const { transitionEnd: C, transition: A, ...M } = x;
        for (const V in M) {
          let P = M[V];
          if (Array.isArray(P)) {
            const z = v ? P.length - 1 : 0;
            P = P[z];
          }
          P !== null && (r[V] = P);
        }
        for (const V in C) r[V] = C[V];
      }
    }
  }
  return r;
}
function kp(t, n, a) {
  var u;
  const { style: l } = t,
    r = {};
  for (const c in l)
    (Vt(l[c]) ||
      (n.style && Vt(n.style[c])) ||
      ZT(c, t) ||
      ((u = a == null ? void 0 : a.getValue(c)) == null
        ? void 0
        : u.liveStyle) !== void 0) &&
      (r[c] = l[c]);
  return r;
}
const H7 = {
  useVisualState: tx({
    scrapeMotionValuesFromProps: kp,
    createRenderState: zp,
  }),
};
function nx(t, n, a) {
  const l = kp(t, n, a);
  for (const r in t)
    if (Vt(t[r]) || Vt(n[r])) {
      const u =
        ls.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      l[u] = t[r];
    }
  return l;
}
const U7 = {
  useVisualState: tx({
    scrapeMotionValuesFromProps: nx,
    createRenderState: JT,
  }),
};
function ix(t, n) {
  return function (l, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    const c = {
      ...(Vp(l) ? U7 : H7),
      preloadedFeatures: t,
      useRender: V7(r),
      createVisualElement: n,
      Component: l,
    };
    return T7(c);
  };
}
const K7 = ix(),
  Or = IT(K7);
function Lr(t, n, a) {
  const l = t.getProps();
  return Bp(l, n, a !== void 0 ? a : l.custom, t);
}
const Ah = (t) => Array.isArray(t);
function j7(t, n, a) {
  t.hasValue(n) ? t.getValue(n).set(a) : t.addValue(n, Jl(a));
}
function F7(t) {
  return Ah(t) ? t[t.length - 1] || 0 : t;
}
function I7(t, n) {
  const a = Lr(t, n);
  let { transitionEnd: l = {}, transition: r = {}, ...u } = a || {};
  u = { ...u, ...l };
  for (const c in u) {
    const d = F7(u[c]);
    j7(t, c, d);
  }
}
function G7(t) {
  return !!(Vt(t) && t.add);
}
function Ph(t, n) {
  const a = t.getValue("willChange");
  if (G7(a)) return a.add(n);
  if (!a && ni.WillChange) {
    const l = new ni.WillChange("auto");
    t.addValue("willChange", l), l.add(n);
  }
}
function ax(t) {
  return t.props[YT];
}
const Y7 = (t) => t !== null;
function q7(t, { repeat: n, repeatType: a = "loop" }, l) {
  const r = t.filter(Y7),
    u = n && a !== "loop" && n % 2 === 1 ? 0 : r.length - 1;
  return r[u];
}
const X7 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Z7 = (t) => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  W7 = { type: "keyframes", duration: 0.8 },
  Q7 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  J7 = (t, { keyframes: n }) =>
    n.length > 2
      ? W7
      : ss.has(t)
        ? t.startsWith("scale")
          ? Z7(n[1])
          : X7
        : Q7;
function eM({
  when: t,
  delay: n,
  delayChildren: a,
  staggerChildren: l,
  staggerDirection: r,
  repeat: u,
  repeatType: c,
  repeatDelay: d,
  from: h,
  elapsed: m,
  ...v
}) {
  return !!Object.keys(v).length;
}
const Hp =
  (t, n, a, l = {}, r, u) =>
  (c) => {
    const d = Mp(l, t) || {},
      h = d.delay || l.delay || 0;
    let { elapsed: m = 0 } = l;
    m = m - Qn(h);
    const v = {
      keyframes: Array.isArray(a) ? a : [null, a],
      ease: "easeOut",
      velocity: n.getVelocity(),
      ...d,
      delay: -m,
      onUpdate: (g) => {
        n.set(g), d.onUpdate && d.onUpdate(g);
      },
      onComplete: () => {
        c(), d.onComplete && d.onComplete();
      },
      name: t,
      motionValue: n,
      element: u ? void 0 : r,
    };
    eM(d) || Object.assign(v, J7(t, v)),
      v.duration && (v.duration = Qn(v.duration)),
      v.repeatDelay && (v.repeatDelay = Qn(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        ((v.duration = 0), v.delay === 0 && (b = !0)),
      (ni.instantAnimations || ni.skipAnimations) &&
        ((b = !0), (v.duration = 0), (v.delay = 0)),
      (v.allowFlatten = !d.type && !d.ease),
      b && !u && n.get() !== void 0)
    ) {
      const g = q7(v.keyframes, d);
      if (g !== void 0) {
        Ze.update(() => {
          v.onUpdate(g), v.onComplete();
        });
        return;
      }
    }
    return d.isSync ? new wp(v) : new z6(v);
  };
function tM({ protectedKeys: t, needsAnimating: n }, a) {
  const l = t.hasOwnProperty(a) && n[a] !== !0;
  return (n[a] = !1), l;
}
function lx(t, n, { delay: a = 0, transitionOverride: l, type: r } = {}) {
  let { transition: u = t.getDefaultTransition(), transitionEnd: c, ...d } = n;
  l && (u = l);
  const h = [],
    m = r && t.animationState && t.animationState.getState()[r];
  for (const v in d) {
    const b = t.getValue(v, t.latestValues[v] ?? null),
      g = d[v];
    if (g === void 0 || (m && tM(m, v))) continue;
    const T = { delay: a, ...Mp(u || {}, v) },
      x = b.get();
    if (
      x !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(g) &&
      g === x &&
      !T.velocity
    )
      continue;
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const M = ax(t);
      if (M) {
        const V = window.MotionHandoffAnimation(M, v, Ze);
        V !== null && ((T.startTime = V), (C = !0));
      }
    }
    Ph(t, v),
      b.start(
        Hp(v, b, g, t.shouldReduceMotion && OT.has(v) ? { type: !1 } : T, t, C),
      );
    const A = b.animation;
    A && h.push(A);
  }
  return (
    c &&
      Promise.all(h).then(() => {
        Ze.update(() => {
          c && I7(t, c);
        });
      }),
    h
  );
}
function Rh(t, n, a = {}) {
  var h;
  const l = Lr(
    t,
    n,
    a.type === "exit"
      ? (h = t.presenceContext) == null
        ? void 0
        : h.custom
      : void 0,
  );
  let { transition: r = t.getDefaultTransition() || {} } = l || {};
  a.transitionOverride && (r = a.transitionOverride);
  const u = l ? () => Promise.all(lx(t, l, a)) : () => Promise.resolve(),
    c =
      t.variantChildren && t.variantChildren.size
        ? (m = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: g,
            } = r;
            return nM(t, n, v + m, b, g, a);
          }
        : () => Promise.resolve(),
    { when: d } = r;
  if (d) {
    const [m, v] = d === "beforeChildren" ? [u, c] : [c, u];
    return m().then(() => v());
  } else return Promise.all([u(), c(a.delay)]);
}
function nM(t, n, a = 0, l = 0, r = 1, u) {
  const c = [],
    d = (t.variantChildren.size - 1) * l,
    h = r === 1 ? (m = 0) => m * l : (m = 0) => d - m * l;
  return (
    Array.from(t.variantChildren)
      .sort(iM)
      .forEach((m, v) => {
        m.notify("AnimationStart", n),
          c.push(
            Rh(m, n, { ...u, delay: a + h(v) }).then(() =>
              m.notify("AnimationComplete", n),
            ),
          );
      }),
    Promise.all(c)
  );
}
function iM(t, n) {
  return t.sortNodePosition(n);
}
function aM(t, n, a = {}) {
  t.notify("AnimationStart", n);
  let l;
  if (Array.isArray(n)) {
    const r = n.map((u) => Rh(t, u, a));
    l = Promise.all(r);
  } else if (typeof n == "string") l = Rh(t, n, a);
  else {
    const r = typeof n == "function" ? Lr(t, n, a.custom) : n;
    l = Promise.all(lx(t, r, a));
  }
  return l.then(() => {
    t.notify("AnimationComplete", n);
  });
}
function sx(t, n) {
  if (!Array.isArray(n)) return !1;
  const a = n.length;
  if (a !== t.length) return !1;
  for (let l = 0; l < a; l++) if (n[l] !== t[l]) return !1;
  return !0;
}
const lM = Op.length;
function rx(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const a = t.parent ? rx(t.parent) || {} : {};
    return t.props.initial !== void 0 && (a.initial = t.props.initial), a;
  }
  const n = {};
  for (let a = 0; a < lM; a++) {
    const l = Op[a],
      r = t.props[l];
    (Rr(r) || r === !1) && (n[l] = r);
  }
  return n;
}
const sM = [...Np].reverse(),
  rM = Np.length;
function oM(t) {
  return (n) =>
    Promise.all(n.map(({ animation: a, options: l }) => aM(t, a, l)));
}
function uM(t) {
  let n = oM(t),
    a = sy(),
    l = !0;
  const r = (h) => (m, v) => {
    var g;
    const b = Lr(
      t,
      v,
      h === "exit"
        ? (g = t.presenceContext) == null
          ? void 0
          : g.custom
        : void 0,
    );
    if (b) {
      const { transition: T, transitionEnd: x, ...C } = b;
      m = { ...m, ...C, ...x };
    }
    return m;
  };
  function u(h) {
    n = h(t);
  }
  function c(h) {
    const { props: m } = t,
      v = rx(t.parent) || {},
      b = [],
      g = new Set();
    let T = {},
      x = 1 / 0;
    for (let A = 0; A < rM; A++) {
      const M = sM[A],
        V = a[M],
        P = m[M] !== void 0 ? m[M] : v[M],
        z = Rr(P),
        R = M === h ? V.isActive : null;
      R === !1 && (x = A);
      let B = P === v[M] && P !== m[M] && z;
      if (
        (B && l && t.manuallyAnimateOnMount && (B = !1),
        (V.protectedKeys = { ...T }),
        (!V.isActive && R === null) ||
          (!P && !V.prevProp) ||
          oc(P) ||
          typeof P == "boolean")
      )
        continue;
      const X = cM(V.prevProp, P);
      let w = X || (M === h && V.isActive && !B && z) || (A > x && z),
        G = !1;
      const W = Array.isArray(P) ? P : [P];
      let D = W.reduce(r(M), {});
      R === !1 && (D = {});
      const { prevResolvedValues: F = {} } = V,
        _ = { ...F, ...D },
        H = (N) => {
          (w = !0),
            g.has(N) && ((G = !0), g.delete(N)),
            (V.needsAnimating[N] = !0);
          const O = t.getValue(N);
          O && (O.liveStyle = !1);
        };
      for (const N in _) {
        const O = D[N],
          te = F[N];
        if (T.hasOwnProperty(N)) continue;
        let ne = !1;
        Ah(O) && Ah(te) ? (ne = !sx(O, te)) : (ne = O !== te),
          ne
            ? O != null
              ? H(N)
              : g.add(N)
            : O !== void 0 && g.has(N)
              ? H(N)
              : (V.protectedKeys[N] = !0);
      }
      (V.prevProp = P),
        (V.prevResolvedValues = D),
        V.isActive && (T = { ...T, ...D }),
        l && t.blockInitialAnimation && (w = !1),
        w &&
          (!(B && X) || G) &&
          b.push(...W.map((N) => ({ animation: N, options: { type: M } })));
    }
    if (g.size) {
      const A = {};
      if (typeof m.initial != "boolean") {
        const M = Lr(t, Array.isArray(m.initial) ? m.initial[0] : m.initial);
        M && M.transition && (A.transition = M.transition);
      }
      g.forEach((M) => {
        const V = t.getBaseTarget(M),
          P = t.getValue(M);
        P && (P.liveStyle = !0), (A[M] = V ?? null);
      }),
        b.push({ animation: A });
    }
    let C = !!b.length;
    return (
      l &&
        (m.initial === !1 || m.initial === m.animate) &&
        !t.manuallyAnimateOnMount &&
        (C = !1),
      (l = !1),
      C ? n(b) : Promise.resolve()
    );
  }
  function d(h, m) {
    var b;
    if (a[h].isActive === m) return Promise.resolve();
    (b = t.variantChildren) == null ||
      b.forEach((g) => {
        var T;
        return (T = g.animationState) == null ? void 0 : T.setActive(h, m);
      }),
      (a[h].isActive = m);
    const v = c(h);
    for (const g in a) a[g].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: c,
    setActive: d,
    setAnimateFunction: u,
    getState: () => a,
    reset: () => {
      (a = sy()), (l = !0);
    },
  };
}
function cM(t, n) {
  return typeof n == "string" ? n !== t : Array.isArray(n) ? !sx(n, t) : !1;
}
function Da(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function sy() {
  return {
    animate: Da(!0),
    whileInView: Da(),
    whileHover: Da(),
    whileTap: Da(),
    whileDrag: Da(),
    whileFocus: Da(),
    exit: Da(),
  };
}
class ra {
  constructor(n) {
    (this.isMounted = !1), (this.node = n);
  }
  update() {}
}
class fM extends ra {
  constructor(n) {
    super(n), n.animationState || (n.animationState = uM(n));
  }
  updateAnimationControlsSubscription() {
    const { animate: n } = this.node.getProps();
    oc(n) && (this.unmountControls = n.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: n } = this.node.getProps(),
      { animate: a } = this.node.prevProps || {};
    n !== a && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var n;
    this.node.animationState.reset(),
      (n = this.unmountControls) == null || n.call(this);
  }
}
let dM = 0;
class hM extends ra {
  constructor() {
    super(...arguments), (this.id = dM++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: n, onExitComplete: a } = this.node.presenceContext,
      { isPresent: l } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || n === l) return;
    const r = this.node.animationState.setActive("exit", !n);
    a &&
      !n &&
      r.then(() => {
        a(this.id);
      });
  }
  mount() {
    const { register: n, onExitComplete: a } = this.node.presenceContext || {};
    a && a(this.id), n && (this.unmount = n(this.id));
  }
  unmount() {}
}
const ox = { animation: { Feature: fM }, exit: { Feature: hM } };
function _r(t, n, a, l = { passive: !0 }) {
  return t.addEventListener(n, a, l), () => t.removeEventListener(n, a);
}
function Gr(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const pM = (t) => (n) => Pp(n) && t(n, Gr(n));
function Sr(t, n, a, l) {
  return _r(t, n, pM(a), l);
}
function ux({ top: t, left: n, right: a, bottom: l }) {
  return { x: { min: n, max: a }, y: { min: t, max: l } };
}
function mM({ x: t, y: n }) {
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function vM(t, n) {
  if (!n) return t;
  const a = n({ x: t.left, y: t.top }),
    l = n({ x: t.right, y: t.bottom });
  return { top: a.y, left: a.x, bottom: l.y, right: l.x };
}
const cx = 1e-4,
  bM = 1 - cx,
  gM = 1 + cx,
  fx = 0.01,
  yM = 0 - fx,
  SM = 0 + fx;
function Kt(t) {
  return t.max - t.min;
}
function TM(t, n, a) {
  return Math.abs(t - n) <= a;
}
function ry(t, n, a, l = 0.5) {
  (t.origin = l),
    (t.originPoint = Je(n.min, n.max, t.origin)),
    (t.scale = Kt(a) / Kt(n)),
    (t.translate = Je(a.min, a.max, t.origin) - t.originPoint),
    ((t.scale >= bM && t.scale <= gM) || isNaN(t.scale)) && (t.scale = 1),
    ((t.translate >= yM && t.translate <= SM) || isNaN(t.translate)) &&
      (t.translate = 0);
}
function Tr(t, n, a, l) {
  ry(t.x, n.x, a.x, l ? l.originX : void 0),
    ry(t.y, n.y, a.y, l ? l.originY : void 0);
}
function oy(t, n, a) {
  (t.min = a.min + n.min), (t.max = t.min + Kt(n));
}
function xM(t, n, a) {
  oy(t.x, n.x, a.x), oy(t.y, n.y, a.y);
}
function uy(t, n, a) {
  (t.min = n.min - a.min), (t.max = t.min + Kt(n));
}
function xr(t, n, a) {
  uy(t.x, n.x, a.x), uy(t.y, n.y, a.y);
}
const cy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Kl = () => ({ x: cy(), y: cy() }),
  fy = () => ({ min: 0, max: 0 }),
  ut = () => ({ x: fy(), y: fy() });
function $n(t) {
  return [t("x"), t("y")];
}
function Ud(t) {
  return t === void 0 || t === 1;
}
function Nh({ scale: t, scaleX: n, scaleY: a }) {
  return !Ud(t) || !Ud(n) || !Ud(a);
}
function Aa(t) {
  return (
    Nh(t) ||
    dx(t) ||
    t.z ||
    t.rotate ||
    t.rotateX ||
    t.rotateY ||
    t.skewX ||
    t.skewY
  );
}
function dx(t) {
  return dy(t.x) || dy(t.y);
}
function dy(t) {
  return t && t !== "0%";
}
function Yu(t, n, a) {
  const l = t - a,
    r = n * l;
  return a + r;
}
function hy(t, n, a, l, r) {
  return r !== void 0 && (t = Yu(t, r, l)), Yu(t, a, l) + n;
}
function Oh(t, n = 0, a = 1, l, r) {
  (t.min = hy(t.min, n, a, l, r)), (t.max = hy(t.max, n, a, l, r));
}
function hx(t, { x: n, y: a }) {
  Oh(t.x, n.translate, n.scale, n.originPoint),
    Oh(t.y, a.translate, a.scale, a.originPoint);
}
const py = 0.999999999999,
  my = 1.0000000000001;
function EM(t, n, a, l = !1) {
  const r = a.length;
  if (!r) return;
  n.x = n.y = 1;
  let u, c;
  for (let d = 0; d < r; d++) {
    (u = a[d]), (c = u.projectionDelta);
    const { visualElement: h } = u.options;
    (h && h.props.style && h.props.style.display === "contents") ||
      (l &&
        u.options.layoutScroll &&
        u.scroll &&
        u !== u.root &&
        Fl(t, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
      c && ((n.x *= c.x.scale), (n.y *= c.y.scale), hx(t, c)),
      l && Aa(u.latestValues) && Fl(t, u.latestValues));
  }
  n.x < my && n.x > py && (n.x = 1), n.y < my && n.y > py && (n.y = 1);
}
function jl(t, n) {
  (t.min = t.min + n), (t.max = t.max + n);
}
function vy(t, n, a, l, r = 0.5) {
  const u = Je(t.min, t.max, r);
  Oh(t, n, a, u, l);
}
function Fl(t, n) {
  vy(t.x, n.x, n.scaleX, n.scale, n.originX),
    vy(t.y, n.y, n.scaleY, n.scale, n.originY);
}
function px(t, n) {
  return ux(vM(t.getBoundingClientRect(), n));
}
function $M(t, n, a) {
  const l = px(t, a),
    { scroll: r } = n;
  return r && (jl(l.x, r.offset.x), jl(l.y, r.offset.y)), l;
}
const mx = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
  by = (t, n) => Math.abs(t - n);
function wM(t, n) {
  const a = by(t.x, n.x),
    l = by(t.y, n.y);
  return Math.sqrt(a ** 2 + l ** 2);
}
class vx {
  constructor(
    n,
    a,
    { transformPagePoint: l, contextWindow: r, dragSnapToOrigin: u = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const b = jd(this.lastMoveEventInfo, this.history),
          g = this.startEvent !== null,
          T = wM(b.offset, { x: 0, y: 0 }) >= 3;
        if (!g && !T) return;
        const { point: x } = b,
          { timestamp: C } = Pt;
        this.history.push({ ...x, timestamp: C });
        const { onStart: A, onMove: M } = this.handlers;
        g ||
          (A && A(this.lastMoveEvent, b),
          (this.startEvent = this.lastMoveEvent)),
          M && M(this.lastMoveEvent, b);
      }),
      (this.handlePointerMove = (b, g) => {
        (this.lastMoveEvent = b),
          (this.lastMoveEventInfo = Kd(g, this.transformPagePoint)),
          Ze.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (b, g) => {
        this.end();
        const { onEnd: T, onSessionEnd: x, resumeAnimation: C } = this.handlers;
        if (
          (this.dragSnapToOrigin && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const A = jd(
          b.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Kd(g, this.transformPagePoint),
          this.history,
        );
        this.startEvent && T && T(b, A), x && x(b, A);
      }),
      !Pp(n))
    )
      return;
    (this.dragSnapToOrigin = u),
      (this.handlers = a),
      (this.transformPagePoint = l),
      (this.contextWindow = r || window);
    const c = Gr(n),
      d = Kd(c, this.transformPagePoint),
      { point: h } = d,
      { timestamp: m } = Pt;
    this.history = [{ ...h, timestamp: m }];
    const { onSessionStart: v } = a;
    v && v(n, jd(d, this.history)),
      (this.removeListeners = jr(
        Sr(this.contextWindow, "pointermove", this.handlePointerMove),
        Sr(this.contextWindow, "pointerup", this.handlePointerUp),
        Sr(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(n) {
    this.handlers = n;
  }
  end() {
    this.removeListeners && this.removeListeners(), ia(this.updatePoint);
  }
}
function Kd(t, n) {
  return n ? { point: n(t.point) } : t;
}
function gy(t, n) {
  return { x: t.x - n.x, y: t.y - n.y };
}
function jd({ point: t }, n) {
  return {
    point: t,
    delta: gy(t, bx(n)),
    offset: gy(t, CM(n)),
    velocity: MM(n, 0.1),
  };
}
function CM(t) {
  return t[0];
}
function bx(t) {
  return t[t.length - 1];
}
function MM(t, n) {
  if (t.length < 2) return { x: 0, y: 0 };
  let a = t.length - 1,
    l = null;
  const r = bx(t);
  for (; a >= 0 && ((l = t[a]), !(r.timestamp - l.timestamp > Qn(n))); ) a--;
  if (!l) return { x: 0, y: 0 };
  const u = Jn(r.timestamp - l.timestamp);
  if (u === 0) return { x: 0, y: 0 };
  const c = { x: (r.x - l.x) / u, y: (r.y - l.y) / u };
  return c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c;
}
function DM(t, { min: n, max: a }, l) {
  return (
    n !== void 0 && t < n
      ? (t = l ? Je(n, t, l.min) : Math.max(t, n))
      : a !== void 0 && t > a && (t = l ? Je(a, t, l.max) : Math.min(t, a)),
    t
  );
}
function yy(t, n, a) {
  return {
    min: n !== void 0 ? t.min + n : void 0,
    max: a !== void 0 ? t.max + a - (t.max - t.min) : void 0,
  };
}
function AM(t, { top: n, left: a, bottom: l, right: r }) {
  return { x: yy(t.x, a, r), y: yy(t.y, n, l) };
}
function Sy(t, n) {
  let a = n.min - t.min,
    l = n.max - t.max;
  return n.max - n.min < t.max - t.min && ([a, l] = [l, a]), { min: a, max: l };
}
function PM(t, n) {
  return { x: Sy(t.x, n.x), y: Sy(t.y, n.y) };
}
function RM(t, n) {
  let a = 0.5;
  const l = Kt(t),
    r = Kt(n);
  return (
    r > l
      ? (a = Mr(n.min, n.max - l, t.min))
      : l > r && (a = Mr(t.min, t.max - r, n.min)),
    $i(0, 1, a)
  );
}
function NM(t, n) {
  const a = {};
  return (
    n.min !== void 0 && (a.min = n.min - t.min),
    n.max !== void 0 && (a.max = n.max - t.min),
    a
  );
}
const Lh = 0.35;
function OM(t = Lh) {
  return (
    t === !1 ? (t = 0) : t === !0 && (t = Lh),
    { x: Ty(t, "left", "right"), y: Ty(t, "top", "bottom") }
  );
}
function Ty(t, n, a) {
  return { min: xy(t, n), max: xy(t, a) };
}
function xy(t, n) {
  return typeof t == "number" ? t : t[n] || 0;
}
const LM = new WeakMap();
class _M {
  constructor(n) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ut()),
      (this.visualElement = n);
  }
  start(n, { snapToCursor: a = !1 } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1) return;
    const r = (v) => {
        const { dragSnapToOrigin: b } = this.getProps();
        b ? this.pauseAnimation() : this.stopAnimation(),
          a && this.snapToCursor(Gr(v).point);
      },
      u = (v, b) => {
        const { drag: g, dragPropagation: T, onDragStart: x } = this.getProps();
        if (
          g &&
          !T &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = Q6(g)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          $n((A) => {
            let M = this.getAxisMotionValue(A).get() || 0;
            if (ei.test(M)) {
              const { projection: V } = this.visualElement;
              if (V && V.layout) {
                const P = V.layout.layoutBox[A];
                P && (M = Kt(P) * (parseFloat(M) / 100));
              }
            }
            this.originPoint[A] = M;
          }),
          x && Ze.postRender(() => x(v, b)),
          Ph(this.visualElement, "transform");
        const { animationState: C } = this.visualElement;
        C && C.setActive("whileDrag", !0);
      },
      c = (v, b) => {
        const {
          dragPropagation: g,
          dragDirectionLock: T,
          onDirectionLock: x,
          onDrag: C,
        } = this.getProps();
        if (!g && !this.openDragLock) return;
        const { offset: A } = b;
        if (T && this.currentDirection === null) {
          (this.currentDirection = zM(A)),
            this.currentDirection !== null && x && x(this.currentDirection);
          return;
        }
        this.updateAxis("x", b.point, A),
          this.updateAxis("y", b.point, A),
          this.visualElement.render(),
          C && C(v, b);
      },
      d = (v, b) => this.stop(v, b),
      h = () =>
        $n((v) => {
          var b;
          return (
            this.getAnimationState(v) === "paused" &&
            ((b = this.getAxisMotionValue(v).animation) == null
              ? void 0
              : b.play())
          );
        }),
      { dragSnapToOrigin: m } = this.getProps();
    this.panSession = new vx(
      n,
      {
        onSessionStart: r,
        onStart: u,
        onMove: c,
        onSessionEnd: d,
        resumeAnimation: h,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: m,
        contextWindow: mx(this.visualElement),
      },
    );
  }
  stop(n, a) {
    const l = this.isDragging;
    if ((this.cancel(), !l)) return;
    const { velocity: r } = a;
    this.startAnimation(r);
    const { onDragEnd: u } = this.getProps();
    u && Ze.postRender(() => u(n, a));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: n, animationState: a } = this.visualElement;
    n && (n.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: l } = this.getProps();
    !l &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      a && a.setActive("whileDrag", !1);
  }
  updateAxis(n, a, l) {
    const { drag: r } = this.getProps();
    if (!l || !Su(n, r, this.currentDirection)) return;
    const u = this.getAxisMotionValue(n);
    let c = this.originPoint[n] + l[n];
    this.constraints &&
      this.constraints[n] &&
      (c = DM(c, this.constraints[n], this.elastic[n])),
      u.set(c);
  }
  resolveConstraints() {
    var u;
    const { dragConstraints: n, dragElastic: a } = this.getProps(),
      l =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (u = this.visualElement.projection) == null
            ? void 0
            : u.layout,
      r = this.constraints;
    n && Ul(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && l
        ? (this.constraints = AM(l.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = OM(a)),
      r !== this.constraints &&
        l &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $n((c) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(c) &&
            (this.constraints[c] = NM(l.layoutBox[c], this.constraints[c]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: n, onMeasureDragConstraints: a } = this.getProps();
    if (!n || !Ul(n)) return !1;
    const l = n.current,
      { projection: r } = this.visualElement;
    if (!r || !r.layout) return !1;
    const u = $M(l, r.root, this.visualElement.getTransformPagePoint());
    let c = PM(r.layout.layoutBox, u);
    if (a) {
      const d = a(mM(c));
      (this.hasMutatedConstraints = !!d), d && (c = ux(d));
    }
    return c;
  }
  startAnimation(n) {
    const {
        drag: a,
        dragMomentum: l,
        dragElastic: r,
        dragTransition: u,
        dragSnapToOrigin: c,
        onDragTransitionEnd: d,
      } = this.getProps(),
      h = this.constraints || {},
      m = $n((v) => {
        if (!Su(v, a, this.currentDirection)) return;
        let b = (h && h[v]) || {};
        c && (b = { min: 0, max: 0 });
        const g = r ? 200 : 1e6,
          T = r ? 40 : 1e7,
          x = {
            type: "inertia",
            velocity: l ? n[v] : 0,
            bounceStiffness: g,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...u,
            ...b,
          };
        return this.startAxisValueAnimation(v, x);
      });
    return Promise.all(m).then(d);
  }
  startAxisValueAnimation(n, a) {
    const l = this.getAxisMotionValue(n);
    return (
      Ph(this.visualElement, n), l.start(Hp(n, l, 0, a, this.visualElement, !1))
    );
  }
  stopAnimation() {
    $n((n) => this.getAxisMotionValue(n).stop());
  }
  pauseAnimation() {
    $n((n) => {
      var a;
      return (a = this.getAxisMotionValue(n).animation) == null
        ? void 0
        : a.pause();
    });
  }
  getAnimationState(n) {
    var a;
    return (a = this.getAxisMotionValue(n).animation) == null
      ? void 0
      : a.state;
  }
  getAxisMotionValue(n) {
    const a = `_drag${n.toUpperCase()}`,
      l = this.visualElement.getProps(),
      r = l[a];
    return (
      r ||
      this.visualElement.getValue(n, (l.initial ? l.initial[n] : void 0) || 0)
    );
  }
  snapToCursor(n) {
    $n((a) => {
      const { drag: l } = this.getProps();
      if (!Su(a, l, this.currentDirection)) return;
      const { projection: r } = this.visualElement,
        u = this.getAxisMotionValue(a);
      if (r && r.layout) {
        const { min: c, max: d } = r.layout.layoutBox[a];
        u.set(n[a] - Je(c, d, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: n, dragConstraints: a } = this.getProps(),
      { projection: l } = this.visualElement;
    if (!Ul(a) || !l || !this.constraints) return;
    this.stopAnimation();
    const r = { x: 0, y: 0 };
    $n((c) => {
      const d = this.getAxisMotionValue(c);
      if (d && this.constraints !== !1) {
        const h = d.get();
        r[c] = RM({ min: h, max: h }, this.constraints[c]);
      }
    });
    const { transformTemplate: u } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = u ? u({}, "") : "none"),
      l.root && l.root.updateScroll(),
      l.updateLayout(),
      this.resolveConstraints(),
      $n((c) => {
        if (!Su(c, n, null)) return;
        const d = this.getAxisMotionValue(c),
          { min: h, max: m } = this.constraints[c];
        d.set(Je(h, m, r[c]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    LM.set(this.visualElement, this);
    const n = this.visualElement.current,
      a = Sr(n, "pointerdown", (h) => {
        const { drag: m, dragListener: v = !0 } = this.getProps();
        m && v && this.start(h);
      }),
      l = () => {
        const { dragConstraints: h } = this.getProps();
        Ul(h) && h.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: r } = this.visualElement,
      u = r.addEventListener("measure", l);
    r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
      Ze.read(l);
    const c = _r(window, "resize", () => this.scalePositionWithinConstraints()),
      d = r.addEventListener(
        "didUpdate",
        ({ delta: h, hasLayoutChanged: m }) => {
          this.isDragging &&
            m &&
            ($n((v) => {
              const b = this.getAxisMotionValue(v);
              b &&
                ((this.originPoint[v] += h[v].translate),
                b.set(b.get() + h[v].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      c(), a(), u(), d && d();
    };
  }
  getProps() {
    const n = this.visualElement.getProps(),
      {
        drag: a = !1,
        dragDirectionLock: l = !1,
        dragPropagation: r = !1,
        dragConstraints: u = !1,
        dragElastic: c = Lh,
        dragMomentum: d = !0,
      } = n;
    return {
      ...n,
      drag: a,
      dragDirectionLock: l,
      dragPropagation: r,
      dragConstraints: u,
      dragElastic: c,
      dragMomentum: d,
    };
  }
}
function Su(t, n, a) {
  return (n === !0 || n === t) && (a === null || a === t);
}
function zM(t, n = 10) {
  let a = null;
  return Math.abs(t.y) > n ? (a = "y") : Math.abs(t.x) > n && (a = "x"), a;
}
class VM extends ra {
  constructor(n) {
    super(n),
      (this.removeGroupControls = Mn),
      (this.removeListeners = Mn),
      (this.controls = new _M(n));
  }
  mount() {
    const { dragControls: n } = this.node.getProps();
    n && (this.removeGroupControls = n.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Mn);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ey = (t) => (n, a) => {
  t && Ze.postRender(() => t(n, a));
};
class BM extends ra {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Mn);
  }
  onPointerDown(n) {
    this.session = new vx(n, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: mx(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: n,
      onPanStart: a,
      onPan: l,
      onPanEnd: r,
    } = this.node.getProps();
    return {
      onSessionStart: Ey(n),
      onStart: Ey(a),
      onMove: l,
      onEnd: (u, c) => {
        delete this.session, r && Ze.postRender(() => r(u, c));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Sr(this.node.current, "pointerdown", (n) =>
      this.onPointerDown(n),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Du = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function $y(t, n) {
  return n.max === n.min ? 0 : (t / (n.max - n.min)) * 100;
}
const or = {
    correct: (t, n) => {
      if (!n.target) return t;
      if (typeof t == "string")
        if (Se.test(t)) t = parseFloat(t);
        else return t;
      const a = $y(t, n.target.x),
        l = $y(t, n.target.y);
      return `${a}% ${l}%`;
    },
  },
  kM = {
    correct: (t, { treeScale: n, projectionDelta: a }) => {
      const l = t,
        r = aa.parse(t);
      if (r.length > 5) return l;
      const u = aa.createTransformer(t),
        c = typeof r[0] != "number" ? 1 : 0,
        d = a.x.scale * n.x,
        h = a.y.scale * n.y;
      (r[0 + c] /= d), (r[1 + c] /= h);
      const m = Je(d, h, 0.5);
      return (
        typeof r[2 + c] == "number" && (r[2 + c] /= m),
        typeof r[3 + c] == "number" && (r[3 + c] /= m),
        u(r)
      );
    },
  };
class HM extends S.Component {
  componentDidMount() {
    const {
        visualElement: n,
        layoutGroup: a,
        switchLayoutGroup: l,
        layoutId: r,
      } = this.props,
      { projection: u } = n;
    w7(UM),
      u &&
        (a.group && a.group.add(u),
        l && l.register && r && l.register(u),
        u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        u.setOptions({
          ...u.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Du.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(n) {
    const {
        layoutDependency: a,
        visualElement: l,
        drag: r,
        isPresent: u,
      } = this.props,
      { projection: c } = l;
    return (
      c &&
        ((c.isPresent = u),
        r || n.layoutDependency !== a || a === void 0 || n.isPresent !== u
          ? c.willUpdate()
          : this.safeToRemove(),
        n.isPresent !== u &&
          (u
            ? c.promote()
            : c.relegate() ||
              Ze.postRender(() => {
                const d = c.getStack();
                (!d || !d.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: n } = this.props.visualElement;
    n &&
      (n.root.didUpdate(),
      Ap.postRender(() => {
        !n.currentAnimation && n.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: n,
        layoutGroup: a,
        switchLayoutGroup: l,
      } = this.props,
      { projection: r } = n;
    r &&
      (r.scheduleCheckAfterUnmount(),
      a && a.group && a.group.remove(r),
      l && l.deregister && l.deregister(r));
  }
  safeToRemove() {
    const { safeToRemove: n } = this.props;
    n && n();
  }
  render() {
    return null;
  }
}
function gx(t) {
  const [n, a] = eT(),
    l = S.useContext(wr);
  return U.jsx(HM, {
    ...t,
    layoutGroup: l,
    switchLayoutGroup: S.useContext(qT),
    isPresent: n,
    safeToRemove: a,
  });
}
const UM = {
  borderRadius: {
    ...or,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: or,
  borderTopRightRadius: or,
  borderBottomLeftRadius: or,
  borderBottomRightRadius: or,
  boxShadow: kM,
};
function KM(t, n, a) {
  const l = Vt(t) ? t : Jl(t);
  return l.start(Hp("", l, n, a)), l.animation;
}
function jM(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
const FM = (t, n) => t.depth - n.depth;
class IM {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(n) {
    cp(this.children, n), (this.isDirty = !0);
  }
  remove(n) {
    fp(this.children, n), (this.isDirty = !0);
  }
  forEach(n) {
    this.isDirty && this.children.sort(FM),
      (this.isDirty = !1),
      this.children.forEach(n);
  }
}
function GM(t, n) {
  const a = Xt.now(),
    l = ({ timestamp: r }) => {
      const u = r - a;
      u >= n && (ia(l), t(u - n));
    };
  return Ze.setup(l, !0), () => ia(l);
}
const yx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  YM = yx.length,
  wy = (t) => (typeof t == "string" ? parseFloat(t) : t),
  Cy = (t) => typeof t == "number" || Se.test(t);
function qM(t, n, a, l, r, u) {
  r
    ? ((t.opacity = Je(0, a.opacity ?? 1, XM(l))),
      (t.opacityExit = Je(n.opacity ?? 1, 0, ZM(l))))
    : u && (t.opacity = Je(n.opacity ?? 1, a.opacity ?? 1, l));
  for (let c = 0; c < YM; c++) {
    const d = `border${yx[c]}Radius`;
    let h = My(n, d),
      m = My(a, d);
    if (h === void 0 && m === void 0) continue;
    h || (h = 0),
      m || (m = 0),
      h === 0 || m === 0 || Cy(h) === Cy(m)
        ? ((t[d] = Math.max(Je(wy(h), wy(m), l), 0)),
          (ei.test(m) || ei.test(h)) && (t[d] += "%"))
        : (t[d] = m);
  }
  (n.rotate || a.rotate) && (t.rotate = Je(n.rotate || 0, a.rotate || 0, l));
}
function My(t, n) {
  return t[n] !== void 0 ? t[n] : t.borderRadius;
}
const XM = Sx(0, 0.5, cT),
  ZM = Sx(0.5, 0.95, Mn);
function Sx(t, n, a) {
  return (l) => (l < t ? 0 : l > n ? 1 : a(Mr(t, n, l)));
}
function Dy(t, n) {
  (t.min = n.min), (t.max = n.max);
}
function En(t, n) {
  Dy(t.x, n.x), Dy(t.y, n.y);
}
function Ay(t, n) {
  (t.translate = n.translate),
    (t.scale = n.scale),
    (t.originPoint = n.originPoint),
    (t.origin = n.origin);
}
function Py(t, n, a, l, r) {
  return (
    (t -= n), (t = Yu(t, 1 / a, l)), r !== void 0 && (t = Yu(t, 1 / r, l)), t
  );
}
function WM(t, n = 0, a = 1, l = 0.5, r, u = t, c = t) {
  if (
    (ei.test(n) &&
      ((n = parseFloat(n)), (n = Je(c.min, c.max, n / 100) - c.min)),
    typeof n != "number")
  )
    return;
  let d = Je(u.min, u.max, l);
  t === u && (d -= n),
    (t.min = Py(t.min, n, a, d, r)),
    (t.max = Py(t.max, n, a, d, r));
}
function Ry(t, n, [a, l, r], u, c) {
  WM(t, n[a], n[l], n[r], n.scale, u, c);
}
const QM = ["x", "scaleX", "originX"],
  JM = ["y", "scaleY", "originY"];
function Ny(t, n, a, l) {
  Ry(t.x, n, QM, a ? a.x : void 0, l ? l.x : void 0),
    Ry(t.y, n, JM, a ? a.y : void 0, l ? l.y : void 0);
}
function Oy(t) {
  return t.translate === 0 && t.scale === 1;
}
function Tx(t) {
  return Oy(t.x) && Oy(t.y);
}
function Ly(t, n) {
  return t.min === n.min && t.max === n.max;
}
function e5(t, n) {
  return Ly(t.x, n.x) && Ly(t.y, n.y);
}
function _y(t, n) {
  return (
    Math.round(t.min) === Math.round(n.min) &&
    Math.round(t.max) === Math.round(n.max)
  );
}
function xx(t, n) {
  return _y(t.x, n.x) && _y(t.y, n.y);
}
function zy(t) {
  return Kt(t.x) / Kt(t.y);
}
function Vy(t, n) {
  return (
    t.translate === n.translate &&
    t.scale === n.scale &&
    t.originPoint === n.originPoint
  );
}
class t5 {
  constructor() {
    this.members = [];
  }
  add(n) {
    cp(this.members, n), n.scheduleRender();
  }
  remove(n) {
    if (
      (fp(this.members, n),
      n === this.prevLead && (this.prevLead = void 0),
      n === this.lead)
    ) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a);
    }
  }
  relegate(n) {
    const a = this.members.findIndex((r) => n === r);
    if (a === 0) return !1;
    let l;
    for (let r = a; r >= 0; r--) {
      const u = this.members[r];
      if (u.isPresent !== !1) {
        l = u;
        break;
      }
    }
    return l ? (this.promote(l), !0) : !1;
  }
  promote(n, a) {
    const l = this.lead;
    if (n !== l && ((this.prevLead = l), (this.lead = n), n.show(), l)) {
      l.instance && l.scheduleRender(),
        n.scheduleRender(),
        (n.resumeFrom = l),
        a && (n.resumeFrom.preserveOpacity = !0),
        l.snapshot &&
          ((n.snapshot = l.snapshot),
          (n.snapshot.latestValues = l.animationValues || l.latestValues)),
        n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
      const { crossfade: r } = n.options;
      r === !1 && l.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((n) => {
      const { options: a, resumingFrom: l } = n;
      a.onExitComplete && a.onExitComplete(),
        l && l.options.onExitComplete && l.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((n) => {
      n.instance && n.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function n5(t, n, a) {
  let l = "";
  const r = t.x.translate / n.x,
    u = t.y.translate / n.y,
    c = (a == null ? void 0 : a.z) || 0;
  if (
    ((r || u || c) && (l = `translate3d(${r}px, ${u}px, ${c}px) `),
    (n.x !== 1 || n.y !== 1) && (l += `scale(${1 / n.x}, ${1 / n.y}) `),
    a)
  ) {
    const {
      transformPerspective: m,
      rotate: v,
      rotateX: b,
      rotateY: g,
      skewX: T,
      skewY: x,
    } = a;
    m && (l = `perspective(${m}px) ${l}`),
      v && (l += `rotate(${v}deg) `),
      b && (l += `rotateX(${b}deg) `),
      g && (l += `rotateY(${g}deg) `),
      T && (l += `skewX(${T}deg) `),
      x && (l += `skewY(${x}deg) `);
  }
  const d = t.x.scale * n.x,
    h = t.y.scale * n.y;
  return (d !== 1 || h !== 1) && (l += `scale(${d}, ${h})`), l || "none";
}
const Fd = ["", "X", "Y", "Z"],
  i5 = { visibility: "hidden" },
  a5 = 1e3;
let l5 = 0;
function Id(t, n, a, l) {
  const { latestValues: r } = n;
  r[t] && ((a[t] = r[t]), n.setStaticValue(t, 0), l && (l[t] = 0));
}
function Ex(t) {
  if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
  const { visualElement: n } = t.options;
  if (!n) return;
  const a = ax(n);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: r, layoutId: u } = t.options;
    window.MotionCancelOptimisedAnimation(a, "transform", Ze, !(r || u));
  }
  const { parent: l } = t;
  l && !l.hasCheckedOptimisedAppear && Ex(l);
}
function $x({
  attachResizeListener: t,
  defaultParent: n,
  measureScroll: a,
  checkIsScrollRoot: l,
  resetTransform: r,
}) {
  return class {
    constructor(c = {}, d = n == null ? void 0 : n()) {
      (this.id = l5++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(o5),
            this.nodes.forEach(h5),
            this.nodes.forEach(p5),
            this.nodes.forEach(u5);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = c),
        (this.root = d ? d.root || d : this),
        (this.path = d ? [...d.path, d] : []),
        (this.parent = d),
        (this.depth = d ? d.depth + 1 : 0);
      for (let h = 0; h < this.path.length; h++)
        this.path[h].shouldResetTransform = !0;
      this.root === this && (this.nodes = new IM());
    }
    addEventListener(c, d) {
      return (
        this.eventHandlers.has(c) || this.eventHandlers.set(c, new pp()),
        this.eventHandlers.get(c).add(d)
      );
    }
    notifyListeners(c, ...d) {
      const h = this.eventHandlers.get(c);
      h && h.notify(...d);
    }
    hasListeners(c) {
      return this.eventHandlers.has(c);
    }
    mount(c) {
      if (this.instance) return;
      (this.isSVG = jM(c)), (this.instance = c);
      const { layoutId: d, layout: h, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(c),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (h || d) && (this.isLayoutDirty = !0),
        t)
      ) {
        let v;
        const b = () => (this.root.updateBlockedByResize = !1);
        t(c, () => {
          (this.root.updateBlockedByResize = !0),
            v && v(),
            (v = GM(b, 250)),
            Du.hasAnimatedSinceResize &&
              ((Du.hasAnimatedSinceResize = !1), this.nodes.forEach(ky));
        });
      }
      d && this.root.registerSharedNode(d, this),
        this.options.animate !== !1 &&
          m &&
          (d || h) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: g,
              layout: T,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || m.getDefaultTransition() || y5,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: A } =
                  m.getProps(),
                M = !this.targetLayout || !xx(this.targetLayout, T),
                V = !b && g;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                V ||
                (b && (M || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(v, V);
                const P = { ...Mp(x, "layout"), onPlay: C, onComplete: A };
                (m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((P.delay = 0), (P.type = !1)),
                  this.startAnimation(P);
              } else
                b || ky(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = T;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const c = this.getStack();
      c && c.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ia(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(m5),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: c } = this.options;
      return c && c.getProps().transformTemplate;
    }
    willUpdate(c = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Ex(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: d, layout: h } = this.options;
      if (d === void 0 && !h) return;
      const m = this.getTransformTemplate();
      (this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        c && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(By);
        return;
      }
      this.isUpdating || this.nodes.forEach(f5),
        (this.isUpdating = !1),
        this.nodes.forEach(d5),
        this.nodes.forEach(s5),
        this.nodes.forEach(r5),
        this.clearAllSnapshots();
      const d = Xt.now();
      (Pt.delta = $i(0, 1e3 / 60, d - Pt.timestamp)),
        (Pt.timestamp = d),
        (Pt.isProcessing = !0),
        _d.update.process(Pt),
        _d.preRender.process(Pt),
        _d.render.process(Pt),
        (Pt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ap.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(c5), this.sharedNodes.forEach(v5);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ze.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ze.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Kt(this.snapshot.measuredBox.x) &&
          !Kt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
      const c = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ut()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: d } = this.options;
      d &&
        d.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          c ? c.layoutBox : void 0,
        );
    }
    updateScroll(c = "measure") {
      let d = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === c &&
          (d = !1),
        d && this.instance)
      ) {
        const h = l(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: c,
          isRoot: h,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : h,
        };
      }
    }
    resetTransform() {
      if (!r) return;
      const c =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        d = this.projectionDelta && !Tx(this.projectionDelta),
        h = this.getTransformTemplate(),
        m = h ? h(this.latestValues, "") : void 0,
        v = m !== this.prevTransformTemplateValue;
      c &&
        this.instance &&
        (d || Aa(this.latestValues) || v) &&
        (r(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(c = !0) {
      const d = this.measurePageBox();
      let h = this.removeElementScroll(d);
      return (
        c && (h = this.removeTransform(h)),
        S5(h),
        {
          animationId: this.root.animationId,
          measuredBox: d,
          layoutBox: h,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var m;
      const { visualElement: c } = this.options;
      if (!c) return ut();
      const d = c.measureViewportBox();
      if (
        !(
          ((m = this.scroll) == null ? void 0 : m.wasRoot) || this.path.some(T5)
        )
      ) {
        const { scroll: v } = this.root;
        v && (jl(d.x, v.offset.x), jl(d.y, v.offset.y));
      }
      return d;
    }
    removeElementScroll(c) {
      var h;
      const d = ut();
      if ((En(d, c), (h = this.scroll) != null && h.wasRoot)) return d;
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m],
          { scroll: b, options: g } = v;
        v !== this.root &&
          b &&
          g.layoutScroll &&
          (b.wasRoot && En(d, c), jl(d.x, b.offset.x), jl(d.y, b.offset.y));
      }
      return d;
    }
    applyTransform(c, d = !1) {
      const h = ut();
      En(h, c);
      for (let m = 0; m < this.path.length; m++) {
        const v = this.path[m];
        !d &&
          v.options.layoutScroll &&
          v.scroll &&
          v !== v.root &&
          Fl(h, { x: -v.scroll.offset.x, y: -v.scroll.offset.y }),
          Aa(v.latestValues) && Fl(h, v.latestValues);
      }
      return Aa(this.latestValues) && Fl(h, this.latestValues), h;
    }
    removeTransform(c) {
      const d = ut();
      En(d, c);
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        if (!m.instance || !Aa(m.latestValues)) continue;
        Nh(m.latestValues) && m.updateSnapshot();
        const v = ut(),
          b = m.measurePageBox();
        En(v, b),
          Ny(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, v);
      }
      return Aa(this.latestValues) && Ny(d, this.latestValues), d;
    }
    setTargetDelta(c) {
      (this.targetDelta = c),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(c) {
      this.options = {
        ...this.options,
        ...c,
        crossfade: c.crossfade !== void 0 ? c.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(c = !1) {
      var g;
      const d = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = d.isSharedProjectionDirty);
      const h = !!this.resumingFrom || this !== d;
      if (
        !(
          c ||
          (h && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((g = this.parent) != null && g.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!(!this.layout || !(v || b))) {
        if (
          ((this.resolvedRelativeTargetAt = Pt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const T = this.getClosestProjectingParent();
          T && T.layout && this.animationProgress !== 1
            ? ((this.relativeParent = T),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ut()),
              (this.relativeTargetOrigin = ut()),
              xr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                T.layout.layoutBox,
              ),
              En(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = ut()), (this.targetWithTransforms = ut())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              xM(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : En(this.target, this.layout.layoutBox),
                hx(this.target, this.targetDelta))
              : En(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const T = this.getClosestProjectingParent();
          T &&
          !!T.resumingFrom == !!this.resumingFrom &&
          !T.options.layoutScroll &&
          T.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = T),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ut()),
              (this.relativeTargetOrigin = ut()),
              xr(this.relativeTargetOrigin, this.target, T.target),
              En(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Nh(this.parent.latestValues) ||
          dx(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var x;
      const c = this.getLead(),
        d = !!this.resumingFrom || this !== c;
      let h = !0;
      if (
        ((this.isProjectionDirty ||
          ((x = this.parent) != null && x.isProjectionDirty)) &&
          (h = !1),
        d &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (h = !1),
        this.resolvedRelativeTargetAt === Pt.timestamp && (h = !1),
        h)
      )
        return;
      const { layout: m, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || v))
      )
        return;
      En(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        g = this.treeScale.y;
      EM(this.layoutCorrected, this.treeScale, this.path, d),
        c.layout &&
          !c.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((c.target = c.layout.layoutBox), (c.targetWithTransforms = ut()));
      const { target: T } = c;
      if (!T) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ay(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ay(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Tr(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== g ||
          !Vy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Vy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", T));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(c = !0) {
      var d;
      if (((d = this.options.visualElement) == null || d.scheduleRender(), c)) {
        const h = this.getStack();
        h && h.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Kl()),
        (this.projectionDelta = Kl()),
        (this.projectionDeltaWithTransform = Kl());
    }
    setAnimationOrigin(c, d = !1) {
      const h = this.snapshot,
        m = h ? h.latestValues : {},
        v = { ...this.latestValues },
        b = Kl();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !d);
      const g = ut(),
        T = h ? h.source : void 0,
        x = this.layout ? this.layout.source : void 0,
        C = T !== x,
        A = this.getStack(),
        M = !A || A.members.length <= 1,
        V = !!(C && !M && this.options.crossfade === !0 && !this.path.some(g5));
      this.animationProgress = 0;
      let P;
      (this.mixTargetDelta = (z) => {
        const R = z / 1e3;
        Hy(b.x, c.x, R),
          Hy(b.y, c.y, R),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (xr(g, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            b5(this.relativeTarget, this.relativeTargetOrigin, g, R),
            P && e5(this.relativeTarget, P) && (this.isProjectionDirty = !1),
            P || (P = ut()),
            En(P, this.relativeTarget)),
          C &&
            ((this.animationValues = v), qM(v, m, this.latestValues, R, V, M)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = R);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(c) {
      var d, h, m;
      this.notifyListeners("animationStart"),
        (d = this.currentAnimation) == null || d.stop(!1),
        (m = (h = this.resumingFrom) == null ? void 0 : h.currentAnimation) ==
          null || m.stop(!1),
        this.pendingAnimation &&
          (ia(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ze.update(() => {
          (Du.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Jl(0)),
            (this.currentAnimation = KM(this.motionValue, [0, 1e3], {
              ...c,
              isSync: !0,
              onUpdate: (v) => {
                this.mixTargetDelta(v), c.onUpdate && c.onUpdate(v);
              },
              onStop: () => {},
              onComplete: () => {
                c.onComplete && c.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const c = this.getStack();
      c && c.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(a5),
        this.currentAnimation.stop(!1)),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const c = this.getLead();
      let {
        targetWithTransforms: d,
        target: h,
        layout: m,
        latestValues: v,
      } = c;
      if (!(!d || !h || !m)) {
        if (
          this !== c &&
          this.layout &&
          m &&
          wx(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          h = this.target || ut();
          const b = Kt(this.layout.layoutBox.x);
          (h.x.min = c.target.x.min), (h.x.max = h.x.min + b);
          const g = Kt(this.layout.layoutBox.y);
          (h.y.min = c.target.y.min), (h.y.max = h.y.min + g);
        }
        En(d, h),
          Fl(d, v),
          Tr(this.projectionDeltaWithTransform, this.layoutCorrected, d, v);
      }
    }
    registerSharedNode(c, d) {
      this.sharedNodes.has(c) || this.sharedNodes.set(c, new t5()),
        this.sharedNodes.get(c).add(d);
      const m = d.options.initialPromotionConfig;
      d.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(d)
            : void 0,
      });
    }
    isLead() {
      const c = this.getStack();
      return c ? c.lead === this : !0;
    }
    getLead() {
      var d;
      const { layoutId: c } = this.options;
      return c
        ? ((d = this.getStack()) == null ? void 0 : d.lead) || this
        : this;
    }
    getPrevLead() {
      var d;
      const { layoutId: c } = this.options;
      return c ? ((d = this.getStack()) == null ? void 0 : d.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: c } = this.options;
      if (c) return this.root.sharedNodes.get(c);
    }
    promote({ needsReset: c, transition: d, preserveFollowOpacity: h } = {}) {
      const m = this.getStack();
      m && m.promote(this, h),
        c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        d && this.setOptions({ transition: d });
    }
    relegate() {
      const c = this.getStack();
      return c ? c.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: c } = this.options;
      if (!c) return;
      let d = !1;
      const { latestValues: h } = c;
      if (
        ((h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY ||
          h.rotateZ ||
          h.skewX ||
          h.skewY) &&
          (d = !0),
        !d)
      )
        return;
      const m = {};
      h.z && Id("z", c, m, this.animationValues);
      for (let v = 0; v < Fd.length; v++)
        Id(`rotate${Fd[v]}`, c, m, this.animationValues),
          Id(`skew${Fd[v]}`, c, m, this.animationValues);
      c.render();
      for (const v in m)
        c.setStaticValue(v, m[v]),
          this.animationValues && (this.animationValues[v] = m[v]);
      c.scheduleRender();
    }
    getProjectionStyles(c) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return i5;
      const d = { visibility: "" },
        h = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (d.opacity = ""),
          (d.pointerEvents = Mu(c == null ? void 0 : c.pointerEvents) || ""),
          (d.transform = h ? h(this.latestValues, "") : "none"),
          d
        );
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        const T = {};
        return (
          this.options.layoutId &&
            ((T.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (T.pointerEvents = Mu(c == null ? void 0 : c.pointerEvents) || "")),
          this.hasProjected &&
            !Aa(this.latestValues) &&
            ((T.transform = h ? h({}, "") : "none"), (this.hasProjected = !1)),
          T
        );
      }
      const v = m.animationValues || m.latestValues;
      this.applyTransformsToTarget(),
        (d.transform = n5(
          this.projectionDeltaWithTransform,
          this.treeScale,
          v,
        )),
        h && (d.transform = h(v, d.transform));
      const { x: b, y: g } = this.projectionDelta;
      (d.transformOrigin = `${b.origin * 100}% ${g.origin * 100}% 0`),
        m.animationValues
          ? (d.opacity =
              m === this
                ? (v.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (d.opacity =
              m === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0);
      for (const T in Nr) {
        if (v[T] === void 0) continue;
        const { correct: x, applyTo: C, isCSSVariable: A } = Nr[T],
          M = d.transform === "none" ? v[T] : x(v[T], m);
        if (C) {
          const V = C.length;
          for (let P = 0; P < V; P++) d[C[P]] = M;
        } else
          A ? (this.options.visualElement.renderState.vars[T] = M) : (d[T] = M);
      }
      return (
        this.options.layoutId &&
          (d.pointerEvents =
            m === this
              ? Mu(c == null ? void 0 : c.pointerEvents) || ""
              : "none"),
        d
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((c) => {
        var d;
        return (d = c.currentAnimation) == null ? void 0 : d.stop(!1);
      }),
        this.root.nodes.forEach(By),
        this.root.sharedNodes.clear();
    }
  };
}
function s5(t) {
  t.updateLayout();
}
function r5(t) {
  var a;
  const n = ((a = t.resumeFrom) == null ? void 0 : a.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: r } = t.layout,
      { animationType: u } = t.options,
      c = n.source !== t.layout.source;
    u === "size"
      ? $n((b) => {
          const g = c ? n.measuredBox[b] : n.layoutBox[b],
            T = Kt(g);
          (g.min = l[b].min), (g.max = g.min + T);
        })
      : wx(u, n.layoutBox, l) &&
        $n((b) => {
          const g = c ? n.measuredBox[b] : n.layoutBox[b],
            T = Kt(l[b]);
          (g.max = g.min + T),
            t.relativeTarget &&
              !t.currentAnimation &&
              ((t.isProjectionDirty = !0),
              (t.relativeTarget[b].max = t.relativeTarget[b].min + T));
        });
    const d = Kl();
    Tr(d, l, n.layoutBox);
    const h = Kl();
    c ? Tr(h, t.applyTransform(r, !0), n.measuredBox) : Tr(h, l, n.layoutBox);
    const m = !Tx(d);
    let v = !1;
    if (!t.resumeFrom) {
      const b = t.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: g, layout: T } = b;
        if (g && T) {
          const x = ut();
          xr(x, n.layoutBox, g.layoutBox);
          const C = ut();
          xr(C, l, T.layoutBox),
            xx(x, C) || (v = !0),
            b.options.layoutRoot &&
              ((t.relativeTarget = C),
              (t.relativeTargetOrigin = x),
              (t.relativeParent = b));
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: l,
      snapshot: n,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: m,
      hasRelativeLayoutChanged: v,
    });
  } else if (t.isLead()) {
    const { onExitComplete: l } = t.options;
    l && l();
  }
  t.options.transition = void 0;
}
function o5(t) {
  t.parent &&
    (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty ||
      (t.isSharedProjectionDirty = !!(
        t.isProjectionDirty ||
        t.parent.isProjectionDirty ||
        t.parent.isSharedProjectionDirty
      )),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function u5(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function c5(t) {
  t.clearSnapshot();
}
function By(t) {
  t.clearMeasurements();
}
function f5(t) {
  t.isLayoutDirty = !1;
}
function d5(t) {
  const { visualElement: n } = t.options;
  n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"),
    t.resetTransform();
}
function ky(t) {
  t.finishAnimation(),
    (t.targetDelta = t.relativeTarget = t.target = void 0),
    (t.isProjectionDirty = !0);
}
function h5(t) {
  t.resolveTargetDelta();
}
function p5(t) {
  t.calcProjection();
}
function m5(t) {
  t.resetSkewAndRotation();
}
function v5(t) {
  t.removeLeadSnapshot();
}
function Hy(t, n, a) {
  (t.translate = Je(n.translate, 0, a)),
    (t.scale = Je(n.scale, 1, a)),
    (t.origin = n.origin),
    (t.originPoint = n.originPoint);
}
function Uy(t, n, a, l) {
  (t.min = Je(n.min, a.min, l)), (t.max = Je(n.max, a.max, l));
}
function b5(t, n, a, l) {
  Uy(t.x, n.x, a.x, l), Uy(t.y, n.y, a.y, l);
}
function g5(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const y5 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ky = (t) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(t),
  jy = Ky("applewebkit/") && !Ky("chrome/") ? Math.round : Mn;
function Fy(t) {
  (t.min = jy(t.min)), (t.max = jy(t.max));
}
function S5(t) {
  Fy(t.x), Fy(t.y);
}
function wx(t, n, a) {
  return (
    t === "position" || (t === "preserve-aspect" && !TM(zy(n), zy(a), 0.2))
  );
}
function T5(t) {
  var n;
  return t !== t.root && ((n = t.scroll) == null ? void 0 : n.wasRoot);
}
const x5 = $x({
    attachResizeListener: (t, n) => _r(t, "resize", n),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Gd = { current: void 0 },
  Cx = $x({
    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
    defaultParent: () => {
      if (!Gd.current) {
        const t = new x5({});
        t.mount(window), t.setOptions({ layoutScroll: !0 }), (Gd.current = t);
      }
      return Gd.current;
    },
    resetTransform: (t, n) => {
      t.style.transform = n !== void 0 ? n : "none";
    },
    checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed",
  }),
  Mx = {
    pan: { Feature: BM },
    drag: { Feature: VM, ProjectionNode: Cx, MeasureLayout: gx },
  };
function Iy(t, n, a) {
  const { props: l } = t;
  t.animationState &&
    l.whileHover &&
    t.animationState.setActive("whileHover", a === "Start");
  const r = "onHover" + a,
    u = l[r];
  u && Ze.postRender(() => u(n, Gr(n)));
}
class E5 extends ra {
  mount() {
    const { current: n } = this.node;
    n &&
      (this.unmount = J6(
        n,
        (a, l) => (Iy(this.node, l, "Start"), (r) => Iy(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class $5 extends ra {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let n = !1;
    try {
      n = this.node.current.matches(":focus-visible");
    } catch {
      n = !0;
    }
    !n ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = jr(
      _r(this.node.current, "focus", () => this.onFocus()),
      _r(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Gy(t, n, a) {
  const { props: l } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState &&
    l.whileTap &&
    t.animationState.setActive("whileTap", a === "Start");
  const r = "onTap" + (a === "End" ? "" : a),
    u = l[r];
  u && Ze.postRender(() => u(n, Gr(n)));
}
class w5 extends ra {
  mount() {
    const { current: n } = this.node;
    n &&
      (this.unmount = i7(
        n,
        (a, l) => (
          Gy(this.node, l, "Start"),
          (r, { success: u }) => Gy(this.node, r, u ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const _h = new WeakMap(),
  Yd = new WeakMap(),
  C5 = (t) => {
    const n = _h.get(t.target);
    n && n(t);
  },
  M5 = (t) => {
    t.forEach(C5);
  };
function D5({ root: t, ...n }) {
  const a = t || document;
  Yd.has(a) || Yd.set(a, {});
  const l = Yd.get(a),
    r = JSON.stringify(n);
  return l[r] || (l[r] = new IntersectionObserver(M5, { root: t, ...n })), l[r];
}
function A5(t, n, a) {
  const l = D5(n);
  return (
    _h.set(t, a),
    l.observe(t),
    () => {
      _h.delete(t), l.unobserve(t);
    }
  );
}
const P5 = { some: 0, all: 1 };
class R5 extends ra {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: n = {} } = this.node.getProps(),
      { root: a, margin: l, amount: r = "some", once: u } = n,
      c = {
        root: a ? a.current : void 0,
        rootMargin: l,
        threshold: typeof r == "number" ? r : P5[r],
      },
      d = (h) => {
        const { isIntersecting: m } = h;
        if (
          this.isInView === m ||
          ((this.isInView = m), u && !m && this.hasEnteredView)
        )
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: v, onViewportLeave: b } = this.node.getProps(),
          g = m ? v : b;
        g && g(h);
      };
    return A5(this.node.current, c, d);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: n, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(N5(n, a)) && this.startObserver();
  }
  unmount() {}
}
function N5({ viewport: t = {} }, { viewport: n = {} } = {}) {
  return (a) => t[a] !== n[a];
}
const Dx = {
    inView: { Feature: R5 },
    tap: { Feature: w5 },
    focus: { Feature: $5 },
    hover: { Feature: E5 },
  },
  Ax = { layout: { ProjectionNode: Cx, MeasureLayout: gx } },
  zh = { current: null },
  Px = { current: !1 };
function O5() {
  if (((Px.current = !0), !!rp))
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"),
        n = () => (zh.current = t.matches);
      t.addListener(n), n();
    } else zh.current = !1;
}
const L5 = new WeakMap();
function _5(t, n, a) {
  for (const l in n) {
    const r = n[l],
      u = a[l];
    if (Vt(r)) t.addValue(l, r);
    else if (Vt(u)) t.addValue(l, Jl(r, { owner: t }));
    else if (u !== r)
      if (t.hasValue(l)) {
        const c = t.getValue(l);
        c.liveStyle === !0 ? c.jump(r) : c.hasAnimated || c.set(r);
      } else {
        const c = t.getStaticValue(l);
        t.addValue(l, Jl(c !== void 0 ? c : r, { owner: t }));
      }
  }
  for (const l in a) n[l] === void 0 && t.removeValue(l);
  return n;
}
const Yy = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class z5 {
  scrapeMotionValuesFromProps(n, a, l) {
    return {};
  }
  constructor(
    {
      parent: n,
      props: a,
      presenceContext: l,
      reducedMotionConfig: r,
      blockInitialAnimation: u,
      visualState: c,
    },
    d = {},
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Cp),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = Xt.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), Ze.render(this.render, !1, !0));
      });
    const { latestValues: h, renderState: m } = c;
    (this.latestValues = h),
      (this.baseTarget = { ...h }),
      (this.initialValues = a.initial ? { ...h } : {}),
      (this.renderState = m),
      (this.parent = n),
      (this.props = a),
      (this.presenceContext = l),
      (this.depth = n ? n.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = d),
      (this.blockInitialAnimation = !!u),
      (this.isControllingVariants = uc(a)),
      (this.isVariantNode = GT(a)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(n && n.current));
    const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(
      a,
      {},
      this,
    );
    for (const g in b) {
      const T = b[g];
      h[g] !== void 0 && Vt(T) && T.set(h[g], !1);
    }
  }
  mount(n) {
    (this.current = n),
      L5.set(n, this),
      this.projection && !this.projection.instance && this.projection.mount(n),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((a, l) => this.bindToMotionValue(l, a)),
      Px.current || O5(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : zh.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      ia(this.notifyUpdate),
      ia(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const a = this.features[n];
      a && (a.unmount(), (a.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(n, a) {
    this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
    const l = ss.has(n);
    l && this.onBindTransform && this.onBindTransform();
    const r = a.on("change", (d) => {
        (this.latestValues[n] = d),
          this.props.onUpdate && Ze.preRender(this.notifyUpdate),
          l && this.projection && (this.projection.isTransformDirty = !0);
      }),
      u = a.on("renderRequest", this.scheduleRender);
    let c;
    window.MotionCheckAppearSync &&
      (c = window.MotionCheckAppearSync(this, n, a)),
      this.valueSubscriptions.set(n, () => {
        r(), u(), c && c(), a.owner && a.stop();
      });
  }
  sortNodePosition(n) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== n.type
      ? 0
      : this.sortInstanceNodePosition(this.current, n.current);
  }
  updateFeatures() {
    let n = "animation";
    for (n in es) {
      const a = es[n];
      if (!a) continue;
      const { isEnabled: l, Feature: r } = a;
      if (
        (!this.features[n] &&
          r &&
          l(this.props) &&
          (this.features[n] = new r(this)),
        this.features[n])
      ) {
        const u = this.features[n];
        u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ut();
  }
  getStaticValue(n) {
    return this.latestValues[n];
  }
  setStaticValue(n, a) {
    this.latestValues[n] = a;
  }
  update(n, a) {
    (n.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = n),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = a);
    for (let l = 0; l < Yy.length; l++) {
      const r = Yy[l];
      this.propEventSubscriptions[r] &&
        (this.propEventSubscriptions[r](),
        delete this.propEventSubscriptions[r]);
      const u = "on" + r,
        c = n[u];
      c && (this.propEventSubscriptions[r] = this.on(r, c));
    }
    (this.prevMotionValues = _5(
      this,
      this.scrapeMotionValuesFromProps(n, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(n) {
    return this.props.variants ? this.props.variants[n] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(n) {
    const a = this.getClosestVariantNode();
    if (a)
      return (
        a.variantChildren && a.variantChildren.add(n),
        () => a.variantChildren.delete(n)
      );
  }
  addValue(n, a) {
    const l = this.values.get(n);
    a !== l &&
      (l && this.removeValue(n),
      this.bindToMotionValue(n, a),
      this.values.set(n, a),
      (this.latestValues[n] = a.get()));
  }
  removeValue(n) {
    this.values.delete(n);
    const a = this.valueSubscriptions.get(n);
    a && (a(), this.valueSubscriptions.delete(n)),
      delete this.latestValues[n],
      this.removeValueFromRenderState(n, this.renderState);
  }
  hasValue(n) {
    return this.values.has(n);
  }
  getValue(n, a) {
    if (this.props.values && this.props.values[n]) return this.props.values[n];
    let l = this.values.get(n);
    return (
      l === void 0 &&
        a !== void 0 &&
        ((l = Jl(a === null ? void 0 : a, { owner: this })),
        this.addValue(n, l)),
      l
    );
  }
  readValue(n, a) {
    let l =
      this.latestValues[n] !== void 0 || !this.current
        ? this.latestValues[n]
        : (this.getBaseTargetFromProps(this.props, n) ??
          this.readValueFromInstance(this.current, n, this.options));
    return (
      l != null &&
        (typeof l == "string" && (tT(l) || nT(l))
          ? (l = parseFloat(l))
          : !l7(l) && aa.test(a) && (l = VT(n, a)),
        this.setBaseTarget(n, Vt(l) ? l.get() : l)),
      Vt(l) ? l.get() : l
    );
  }
  setBaseTarget(n, a) {
    this.baseTarget[n] = a;
  }
  getBaseTarget(n) {
    var u;
    const { initial: a } = this.props;
    let l;
    if (typeof a == "string" || typeof a == "object") {
      const c = Bp(
        this.props,
        a,
        (u = this.presenceContext) == null ? void 0 : u.custom,
      );
      c && (l = c[n]);
    }
    if (a && l !== void 0) return l;
    const r = this.getBaseTargetFromProps(this.props, n);
    return r !== void 0 && !Vt(r)
      ? r
      : this.initialValues[n] !== void 0 && l === void 0
        ? void 0
        : this.baseTarget[n];
  }
  on(n, a) {
    return this.events[n] || (this.events[n] = new pp()), this.events[n].add(a);
  }
  notify(n, ...a) {
    this.events[n] && this.events[n].notify(...a);
  }
}
class Rx extends z5 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = q6);
  }
  sortInstanceNodePosition(n, a) {
    return n.compareDocumentPosition(a) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(n, a) {
    return n.style ? n.style[a] : void 0;
  }
  removeValueFromRenderState(n, { vars: a, style: l }) {
    delete a[n], delete l[n];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: n } = this.props;
    Vt(n) &&
      (this.childSubscription = n.on("change", (a) => {
        this.current && (this.current.textContent = `${a}`);
      }));
  }
}
function Nx(t, { style: n, vars: a }, l, r) {
  Object.assign(t.style, n, r && r.getProjectionStyles(l));
  for (const u in a) t.style.setProperty(u, a[u]);
}
function V5(t) {
  return window.getComputedStyle(t);
}
class B5 extends Rx {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Nx);
  }
  readValueFromInstance(n, a) {
    if (ss.has(a)) return h6(n, a);
    {
      const l = V5(n),
        r = (bp(a) ? l.getPropertyValue(a) : l[a]) || 0;
      return typeof r == "string" ? r.trim() : r;
    }
  }
  measureInstanceViewportBox(n, { transformPagePoint: a }) {
    return px(n, a);
  }
  build(n, a, l) {
    _p(n, a, l.transformTemplate);
  }
  scrapeMotionValuesFromProps(n, a, l) {
    return kp(n, a, l);
  }
}
const Ox = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function k5(t, n, a, l) {
  Nx(t, n, void 0, l);
  for (const r in n.attrs) t.setAttribute(Ox.has(r) ? r : Lp(r), n.attrs[r]);
}
class H5 extends Rx {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ut);
  }
  getBaseTargetFromProps(n, a) {
    return n[a];
  }
  readValueFromInstance(n, a) {
    if (ss.has(a)) {
      const l = zT(a);
      return (l && l.default) || 0;
    }
    return (a = Ox.has(a) ? a : Lp(a)), n.getAttribute(a);
  }
  scrapeMotionValuesFromProps(n, a, l) {
    return nx(n, a, l);
  }
  build(n, a, l) {
    QT(n, a, this.isSVGTag, l.transformTemplate, l.style);
  }
  renderInstance(n, a, l, r) {
    k5(n, a, l, r);
  }
  mount(n) {
    (this.isSVGTag = ex(n.tagName)), super.mount(n);
  }
}
const Lx = (t, n) =>
    Vp(t) ? new H5(n) : new B5(n, { allowProjection: t !== S.Fragment }),
  U5 = ix({ ...ox, ...Dx, ...Mx, ...Ax }, Lx),
  XA = IT(U5),
  _x = { renderer: Lx, ...ox, ...Dx },
  K5 = { ..._x, ...Mx, ...Ax };
var ZA = ({
  children: t,
  navigate: n,
  disableAnimation: a,
  useHref: l,
  disableRipple: r = !1,
  skipFramerMotionAnimations: u = a,
  reducedMotion: c = "never",
  validationBehavior: d,
  locale: h = "en-US",
  labelPlacement: m,
  defaultDates: v,
  createCalendar: b,
  spinnerVariant: g,
  ...T
}) => {
  let x = t;
  n && (x = U.jsx(B3, { navigate: n, useHref: l, children: x }));
  const C = S.useMemo(
    () => (
      a && u && (ni.skipAnimations = !0),
      {
        createCalendar: b,
        defaultDates: v,
        disableAnimation: a,
        disableRipple: r,
        validationBehavior: d,
        labelPlacement: m,
        spinnerVariant: g,
      }
    ),
    [
      b,
      v == null ? void 0 : v.maxDate,
      v == null ? void 0 : v.minDate,
      a,
      r,
      d,
      m,
      g,
    ],
  );
  return U.jsx(v3, {
    value: C,
    children: U.jsx(S3, {
      locale: h,
      children: U.jsx(h7, {
        reducedMotion: c,
        children: U.jsx(oS, { ...T, children: x }),
      }),
    }),
  });
};
function j5(t) {
  const n = Ft(),
    a = n == null ? void 0 : n.labelPlacement;
  return S.useMemo(() => {
    var l, r;
    const u =
      (r = (l = t.labelPlacement) != null ? l : a) != null ? r : "inside";
    return u === "inside" && !t.label ? "outside" : u;
  }, [t.labelPlacement, a, t.label]);
}
var za = {
    ease: [0.36, 0.66, 0.4, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
  },
  zx = {
    scaleSpring: {
      enter: {
        transform: "scale(1)",
        opacity: 1,
        transition: { type: "spring", bounce: 0, duration: 0.2 },
      },
      exit: {
        transform: "scale(0.85)",
        opacity: 0,
        transition: { type: "easeOut", duration: 0.15 },
      },
    },
    fade: {
      enter: { opacity: 1, transition: { duration: 0.4, ease: za.ease } },
      exit: { opacity: 0, transition: { duration: 0.3, ease: za.ease } },
    },
  };
function F5(t) {
  let n = Hn(t, { enabled: typeof t.elementType == "string" }),
    a;
  return (
    t.orientation === "vertical" && (a = "vertical"),
    t.elementType !== "hr"
      ? { separatorProps: { ...n, role: "separator", "aria-orientation": a } }
      : { separatorProps: n }
  );
}
function I5(t) {
  const { as: n, className: a, orientation: l, ...r } = t;
  let u = n || "hr";
  u === "hr" && l === "vertical" && (u = "div");
  const { separatorProps: c } = F5({
      elementType: typeof u == "string" ? u : "hr",
      orientation: l,
    }),
    d = S.useMemo(() => V2({ orientation: l, className: a }), [l, a]),
    h = S.useCallback(
      (m = {}) => ({
        className: d,
        role: "separator",
        "data-orientation": l,
        ...c,
        ...r,
        ...m,
      }),
      [d, l, c, r],
    );
  return { Component: u, getDividerProps: h };
}
var Vx = et((t, n) => {
  const { Component: a, getDividerProps: l } = I5({ ...t });
  return U.jsx(a, { ref: n, ...l() });
});
Vx.displayName = "HeroUI.Divider";
var G5 = Vx,
  Y5 = (t) => {
    const n = {
      top: { originY: 1 },
      bottom: { originY: 0 },
      left: { originX: 1 },
      right: { originX: 0 },
      "top-start": { originX: 0, originY: 1 },
      "top-end": { originX: 1, originY: 1 },
      "bottom-start": { originX: 0, originY: 0 },
      "bottom-end": { originX: 1, originY: 0 },
      "right-start": { originX: 0, originY: 0 },
      "right-end": { originX: 0, originY: 1 },
      "left-start": { originX: 1, originY: 0 },
      "left-end": { originX: 1, originY: 1 },
    };
    return (n == null ? void 0 : n[t]) || {};
  },
  q5 = (t) =>
    ({
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      "top-start": "top start",
      "top-end": "top end",
      "bottom-start": "bottom start",
      "bottom-end": "bottom end",
      "left-start": "left top",
      "left-end": "left bottom",
      "right-start": "right top",
      "right-end": "right bottom",
    })[t],
  qy = (t, n) => {
    if (n.includes("-")) {
      const [, a] = n.split("-");
      return `${t}-${a}`;
    }
    return t;
  },
  [WA, X5] = zr({ name: "ButtonGroupContext", strict: !1 });
function Up(t, n) {
  let {
      elementType: a = "button",
      isDisabled: l,
      onPress: r,
      onPressStart: u,
      onPressEnd: c,
      onPressChange: d,
      preventFocusOnPress: h,
      allowFocusWhenDisabled: m,
      onClick: v,
      href: b,
      target: g,
      rel: T,
      type: x = "button",
      allowTextSelectionOnPress: C,
      role: A,
    } = t,
    M;
  a === "button"
    ? (M = { type: x, disabled: l })
    : (M = {
        role: "button",
        href: a === "a" && !l ? b : void 0,
        target: a === "a" ? g : void 0,
        type: a === "input" ? x : void 0,
        disabled: a === "input" ? l : void 0,
        "aria-disabled": !l || a === "input" ? void 0 : l,
        rel: a === "a" ? T : void 0,
      });
  let V = Br() || kr();
  v &&
    typeof v == "function" &&
    A !== "link" &&
    !(t.hasOwnProperty("aria-expanded") && t.hasOwnProperty("aria-controls")) &&
    Wu(
      "onClick is deprecated, please use onPress instead. See: https://github.com/heroui-inc/heroui/issues/4292",
      "useButton",
    );
  const P = (w) => {
    V && (v == null || v(w)), r == null || r(w);
  };
  let { pressProps: z, isPressed: R } = Ur({
      onPressStart: u,
      onPressEnd: c,
      onPressChange: d,
      onPress: P,
      isDisabled: l,
      preventFocusOnPress: h,
      allowTextSelectionOnPress: C,
      ref: n,
    }),
    { focusableProps: B } = Kr(t, n);
  m && (B.tabIndex = l ? -1 : B.tabIndex);
  let X = pe(B, z, Ci(t, { labelable: !0 }));
  return {
    isPressed: R,
    buttonProps: pe(M, X, {
      "aria-haspopup": t["aria-haspopup"],
      "aria-expanded": t["aria-expanded"],
      "aria-controls": t["aria-controls"],
      "aria-pressed": t["aria-pressed"],
      "aria-current": t["aria-current"],
      onClick: (w) => {
        (x === "button" && V) || v == null || v(w);
      },
    }),
  };
}
var Z5 = () =>
    Hh(() => Promise.resolve().then(() => qp), void 0).then((t) => t.default),
  Bx = (t) => {
    const {
      ripples: n = [],
      motionProps: a,
      color: l = "currentColor",
      style: r,
      onClear: u,
    } = t;
    return U.jsx(U.Fragment, {
      children: n.map((c) => {
        const d = B2(0.01 * c.size, 0.2, c.size > 100 ? 0.75 : 0.5);
        return U.jsx(
          Pr,
          {
            features: Z5,
            children: U.jsx(up, {
              mode: "popLayout",
              children: U.jsx(Or.span, {
                animate: { transform: "scale(2)", opacity: 0 },
                className: "heroui-ripple",
                exit: { opacity: 0 },
                initial: { transform: "scale(0)", opacity: 0.35 },
                style: {
                  position: "absolute",
                  backgroundColor: l,
                  borderRadius: "100%",
                  transformOrigin: "center",
                  pointerEvents: "none",
                  overflow: "hidden",
                  inset: 0,
                  zIndex: 0,
                  top: c.y,
                  left: c.x,
                  width: `${c.size}px`,
                  height: `${c.size}px`,
                  ...r,
                },
                transition: { duration: d },
                onAnimationComplete: () => {
                  u(c.key);
                },
                ...a,
              }),
            }),
          },
          c.key,
        );
      }),
    });
  };
Bx.displayName = "HeroUI.Ripple";
var kx = Bx;
function Hx(t = {}) {
  const [n, a] = S.useState([]),
    l = S.useCallback((u) => {
      const c = u.target,
        d = Math.max(c.clientWidth, c.clientHeight);
      a((h) => [
        ...h,
        {
          key: k2(h.length.toString()),
          size: d,
          x: u.x - d / 2,
          y: u.y - d / 2,
        },
      ]);
    }, []),
    r = S.useCallback((u) => {
      a((c) => c.filter((d) => d.key !== u));
    }, []);
  return { ripples: n, onClear: r, onPress: l, ...t };
}
function W5(t) {
  var n, a, l, r, u, c, d, h, m;
  const v = X5(),
    b = Ft(),
    g = !!v,
    {
      ref: T,
      as: x,
      children: C,
      startContent: A,
      endContent: M,
      autoFocus: V,
      className: P,
      spinner: z,
      isLoading: R = !1,
      disableRipple: B = !1,
      fullWidth: X = (n = v == null ? void 0 : v.fullWidth) != null ? n : !1,
      radius: w = v == null ? void 0 : v.radius,
      size: G = (a = v == null ? void 0 : v.size) != null ? a : "md",
      color: W = (l = v == null ? void 0 : v.color) != null ? l : "default",
      variant: D = (r = v == null ? void 0 : v.variant) != null ? r : "solid",
      disableAnimation: F = (c =
        (u = v == null ? void 0 : v.disableAnimation) != null
          ? u
          : b == null
            ? void 0
            : b.disableAnimation) != null
        ? c
        : !1,
      isDisabled: _ = (d = v == null ? void 0 : v.isDisabled) != null ? d : !1,
      isIconOnly: H = (h = v == null ? void 0 : v.isIconOnly) != null ? h : !1,
      spinnerPlacement: Z = "start",
      onPress: $,
      onClick: N,
      ...O
    } = t,
    te = x || "button",
    ne = typeof te == "string",
    oe = pt(T),
    re = (m = B || (b == null ? void 0 : b.disableRipple)) != null ? m : F,
    {
      isFocusVisible: le,
      isFocused: se,
      focusProps: de,
    } = Kn({ autoFocus: V }),
    ce = _ || R,
    Pe = S.useMemo(
      () =>
        H2({
          size: G,
          color: W,
          variant: D,
          radius: w,
          fullWidth: X,
          isDisabled: ce,
          isInGroup: g,
          disableAnimation: F,
          isIconOnly: H,
          className: P,
        }),
      [G, W, D, w, X, ce, g, H, F, P],
    ),
    { onPress: Oe, onClear: me, ripples: De } = Hx(),
    ae = S.useCallback(
      (Ct) => {
        re || ce || F || (oe.current && Oe(Ct));
      },
      [re, ce, F, oe, Oe],
    ),
    { buttonProps: xe, isPressed: we } = Up(
      { elementType: x, isDisabled: ce, onPress: Bt($, ae), onClick: N, ...O },
      oe,
    ),
    { isHovered: Ie, hoverProps: yt } = Un({ isDisabled: ce }),
    fe = S.useCallback(
      (Ct = {}) => ({
        "data-disabled": ie(ce),
        "data-focus": ie(se),
        "data-pressed": ie(we),
        "data-focus-visible": ie(le),
        "data-hover": ie(Ie),
        "data-loading": ie(R),
        ...pe(xe, de, yt, Hn(O, { enabled: ne }), Hn(Ct)),
        className: Pe,
      }),
      [R, ce, se, we, ne, le, Ie, xe, de, yt, O, Pe],
    ),
    Ye = (Ct) =>
      S.isValidElement(Ct)
        ? S.cloneElement(Ct, { "aria-hidden": !0, focusable: !1, tabIndex: -1 })
        : null,
    mt = Ye(A),
    Rn = Ye(M),
    ct = S.useMemo(() => ({ sm: "sm", md: "sm", lg: "md" })[G], [G]),
    Qt = S.useCallback(() => ({ ripples: De, onClear: me }), [De, me]);
  return {
    Component: te,
    children: C,
    domRef: oe,
    spinner: z,
    styles: Pe,
    startContent: mt,
    endContent: Rn,
    isLoading: R,
    spinnerPlacement: Z,
    spinnerSize: ct,
    disableRipple: re,
    getButtonProps: fe,
    getRippleProps: Qt,
    isIconOnly: H,
  };
}
function Q5(t) {
  var n, a;
  const [l, r] = An(t, Nb.variantKeys),
    u = Ft(),
    c =
      (a =
        (n = t == null ? void 0 : t.variant) != null
          ? n
          : u == null
            ? void 0
            : u.spinnerVariant) != null
        ? a
        : "default",
    { children: d, className: h, classNames: m, label: v, ...b } = l,
    g = S.useMemo(() => Nb({ ...r }), [Pn(r)]),
    T = Te(m == null ? void 0 : m.base, h),
    x = v || d,
    C = S.useMemo(
      () => (x && typeof x == "string" ? x : b["aria-label"] ? "" : "Loading"),
      [d, x, b["aria-label"]],
    ),
    A = S.useCallback(
      () => ({ "aria-label": C, className: g.base({ class: T }), ...b }),
      [C, g, T, b],
    );
  return { label: x, slots: g, classNames: m, variant: c, getSpinnerProps: A };
}
var Ux = et((t, n) => {
  const {
    slots: a,
    classNames: l,
    label: r,
    variant: u,
    getSpinnerProps: c,
  } = Q5({ ...t });
  return u === "wave" || u === "dots"
    ? U.jsxs("div", {
        ref: n,
        ...c(),
        children: [
          U.jsx("div", {
            className: a.wrapper({ class: l == null ? void 0 : l.wrapper }),
            children: [...new Array(3)].map((d, h) =>
              U.jsx(
                "i",
                {
                  className: a.dots({ class: l == null ? void 0 : l.dots }),
                  style: { "--dot-index": h },
                },
                `dot-${h}`,
              ),
            ),
          }),
          r &&
            U.jsx("span", {
              className: a.label({ class: l == null ? void 0 : l.label }),
              children: r,
            }),
        ],
      })
    : u === "simple"
      ? U.jsxs("div", {
          ref: n,
          ...c(),
          children: [
            U.jsxs("svg", {
              className: a.wrapper({ class: l == null ? void 0 : l.wrapper }),
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                U.jsx("circle", {
                  className: a.circle1({
                    class: l == null ? void 0 : l.circle1,
                  }),
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4",
                }),
                U.jsx("path", {
                  className: a.circle2({
                    class: l == null ? void 0 : l.circle2,
                  }),
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                  fill: "currentColor",
                }),
              ],
            }),
            r &&
              U.jsx("span", {
                className: a.label({ class: l == null ? void 0 : l.label }),
                children: r,
              }),
          ],
        })
      : u === "spinner"
        ? U.jsxs("div", {
            ref: n,
            ...c(),
            children: [
              U.jsx("div", {
                className: a.wrapper({ class: l == null ? void 0 : l.wrapper }),
                children: [...new Array(12)].map((d, h) =>
                  U.jsx(
                    "i",
                    {
                      className: a.spinnerBars({
                        class: l == null ? void 0 : l.spinnerBars,
                      }),
                      style: { "--bar-index": h },
                    },
                    `star-${h}`,
                  ),
                ),
              }),
              r &&
                U.jsx("span", {
                  className: a.label({ class: l == null ? void 0 : l.label }),
                  children: r,
                }),
            ],
          })
        : U.jsxs("div", {
            ref: n,
            ...c(),
            children: [
              U.jsxs("div", {
                className: a.wrapper({ class: l == null ? void 0 : l.wrapper }),
                children: [
                  U.jsx("i", {
                    className: a.circle1({
                      class: l == null ? void 0 : l.circle1,
                    }),
                  }),
                  U.jsx("i", {
                    className: a.circle2({
                      class: l == null ? void 0 : l.circle2,
                    }),
                  }),
                ],
              }),
              r &&
                U.jsx("span", {
                  className: a.label({ class: l == null ? void 0 : l.label }),
                  children: r,
                }),
            ],
          });
});
Ux.displayName = "HeroUI.Spinner";
var J5 = Ux,
  Kx = et((t, n) => {
    const {
      Component: a,
      domRef: l,
      children: r,
      spinnerSize: u,
      spinner: c = U.jsx(J5, { color: "current", size: u }),
      spinnerPlacement: d,
      startContent: h,
      endContent: m,
      isLoading: v,
      disableRipple: b,
      getButtonProps: g,
      getRippleProps: T,
      isIconOnly: x,
    } = W5({ ...t, ref: n });
    return U.jsxs(a, {
      ref: l,
      ...g(),
      children: [
        h,
        v && d === "start" && c,
        v && x ? null : r,
        v && d === "end" && c,
        m,
        !b && U.jsx(kx, { ...T() }),
      ],
    });
  });
Kx.displayName = "HeroUI.Button";
var QA = Kx,
  [eD, tD] = zr({
    name: "CardContext",
    strict: !0,
    errorMessage:
      "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
  }),
  jx = et((t, n) => {
    var a;
    const { as: l, className: r, children: u, ...c } = t,
      d = l || "div",
      h = pt(n),
      { slots: m, classNames: v } = tD(),
      b = Te(v == null ? void 0 : v.body, r);
    return U.jsx(d, {
      ref: h,
      className: (a = m.body) == null ? void 0 : a.call(m, { class: b }),
      ...c,
      children: u,
    });
  });
jx.displayName = "HeroUI.CardBody";
var JA = jx;
function nD(t) {
  var n, a, l, r;
  const u = Ft(),
    [c, d] = An(t, Ob.variantKeys),
    {
      ref: h,
      as: m,
      children: v,
      onClick: b,
      onPress: g,
      autoFocus: T,
      className: x,
      classNames: C,
      allowTextSelectionOnPress: A = !0,
      ...M
    } = c,
    V = pt(h),
    P = m || (t.isPressable ? "button" : "div"),
    z = typeof P == "string",
    R =
      (a =
        (n = t.disableAnimation) != null
          ? n
          : u == null
            ? void 0
            : u.disableAnimation) != null
        ? a
        : !1,
    B =
      (r =
        (l = t.disableRipple) != null
          ? l
          : u == null
            ? void 0
            : u.disableRipple) != null
        ? r
        : !1,
    X = Te(C == null ? void 0 : C.base, x),
    { onClear: w, onPress: G, ripples: W } = Hx(),
    D = S.useCallback(
      (le) => {
        B || R || (V.current && G(le));
      },
      [B, R, V, G],
    ),
    { buttonProps: F, isPressed: _ } = Up(
      {
        onPress: Bt(g, D),
        elementType: m,
        isDisabled: !t.isPressable,
        onClick: b,
        allowTextSelectionOnPress: A,
        ...M,
      },
      V,
    ),
    { hoverProps: H, isHovered: Z } = Un({ isDisabled: !t.isHoverable, ...M }),
    { isFocusVisible: $, isFocused: N, focusProps: O } = Kn({ autoFocus: T }),
    te = S.useMemo(() => Ob({ ...d, disableAnimation: R }), [Pn(d), R]),
    ne = S.useMemo(
      () => ({
        slots: te,
        classNames: C,
        disableAnimation: R,
        isDisabled: t.isDisabled,
        isFooterBlurred: t.isFooterBlurred,
        fullWidth: t.fullWidth,
      }),
      [te, C, t.isDisabled, t.isFooterBlurred, R, t.fullWidth],
    ),
    oe = S.useCallback(
      (le = {}) => ({
        ref: V,
        className: te.base({ class: X }),
        tabIndex: t.isPressable ? 0 : -1,
        "data-hover": ie(Z),
        "data-pressed": ie(_),
        "data-focus": ie(N),
        "data-focus-visible": ie($),
        "data-disabled": ie(t.isDisabled),
        ...pe(
          t.isPressable ? { ...F, ...O, role: "button" } : {},
          t.isHoverable ? H : {},
          Hn(M, { enabled: z }),
          Hn(le),
        ),
      }),
      [
        V,
        te,
        X,
        z,
        t.isPressable,
        t.isHoverable,
        t.isDisabled,
        Z,
        _,
        $,
        F,
        O,
        H,
        M,
      ],
    ),
    re = S.useCallback(() => ({ ripples: W, onClear: w }), [W, w]);
  return {
    context: ne,
    domRef: V,
    Component: P,
    classNames: C,
    children: v,
    isHovered: Z,
    isPressed: _,
    disableAnimation: R,
    isPressable: t.isPressable,
    isHoverable: t.isHoverable,
    disableRipple: B,
    handlePress: D,
    isFocusVisible: $,
    getCardProps: oe,
    getRippleProps: re,
  };
}
var Fx = et((t, n) => {
  const {
    children: a,
    context: l,
    Component: r,
    isPressable: u,
    disableAnimation: c,
    disableRipple: d,
    getCardProps: h,
    getRippleProps: m,
  } = nD({ ...t, ref: n });
  return U.jsxs(r, {
    ...h(),
    children: [
      U.jsx(eD, { value: l, children: a }),
      u && !c && !d && U.jsx(kx, { ...m() }),
    ],
  });
});
Fx.displayName = "HeroUI.Card";
var eP = Fx;
function Ix(t, n, a) {
  let { validationBehavior: l, focus: r } = t;
  ti(() => {
    if (l === "native" && a != null && a.current && !a.current.disabled) {
      let h = n.realtimeValidation.isInvalid
        ? n.realtimeValidation.validationErrors.join(" ") || "Invalid value."
        : "";
      a.current.setCustomValidity(h),
        a.current.hasAttribute("title") || (a.current.title = ""),
        n.realtimeValidation.isInvalid || n.updateValidation(aD(a.current));
    }
  });
  let u = Rt(() => {
      n.resetValidation();
    }),
    c = Rt((h) => {
      var m;
      n.displayValidation.isInvalid || n.commitValidation();
      let v =
        a == null || (m = a.current) === null || m === void 0 ? void 0 : m.form;
      if (!h.defaultPrevented && a && v && lD(v) === a.current) {
        var b;
        r ? r() : (b = a.current) === null || b === void 0 || b.focus(),
          Fw("keyboard");
      }
      h.preventDefault();
    }),
    d = Rt(() => {
      n.commitValidation();
    });
  S.useEffect(() => {
    let h = a == null ? void 0 : a.current;
    if (!h) return;
    let m = h.form;
    return (
      h.addEventListener("invalid", c),
      h.addEventListener("change", d),
      m == null || m.addEventListener("reset", u),
      () => {
        h.removeEventListener("invalid", c),
          h.removeEventListener("change", d),
          m == null || m.removeEventListener("reset", u);
      }
    );
  }, [a, c, d, u, l]);
}
function iD(t) {
  let n = t.validity;
  return {
    badInput: n.badInput,
    customError: n.customError,
    patternMismatch: n.patternMismatch,
    rangeOverflow: n.rangeOverflow,
    rangeUnderflow: n.rangeUnderflow,
    stepMismatch: n.stepMismatch,
    tooLong: n.tooLong,
    tooShort: n.tooShort,
    typeMismatch: n.typeMismatch,
    valueMissing: n.valueMissing,
    valid: n.valid,
  };
}
function aD(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: iD(t),
    validationErrors: t.validationMessage ? [t.validationMessage] : [],
  };
}
function lD(t) {
  for (let n = 0; n < t.elements.length; n++) {
    let a = t.elements[n];
    if (!a.validity.valid) return a;
  }
  return null;
}
function Gx(t, n, a) {
  let {
      isDisabled: l = !1,
      isReadOnly: r = !1,
      value: u,
      name: c,
      children: d,
      "aria-label": h,
      "aria-labelledby": m,
      validationState: v = "valid",
      isInvalid: b,
    } = t,
    g = (z) => {
      z.stopPropagation(), n.setSelected(z.target.checked);
    },
    { pressProps: T, isPressed: x } = Hu({ isDisabled: l }),
    { pressProps: C, isPressed: A } = Hu({
      onPress() {
        var z;
        n.toggle(), (z = a.current) === null || z === void 0 || z.focus();
      },
      isDisabled: l || r,
    }),
    { focusableProps: M } = Xw(t, a),
    V = Wt(T, M),
    P = $4(t, { labelable: !0 });
  return (
    U4(a, n.isSelected, n.setSelected),
    {
      labelProps: Wt(C, { onClick: (z) => z.preventDefault() }),
      inputProps: Wt(P, {
        "aria-invalid": b || v === "invalid" || void 0,
        "aria-errormessage": t["aria-errormessage"],
        "aria-controls": t["aria-controls"],
        "aria-readonly": r || void 0,
        onChange: g,
        disabled: l,
        ...(u == null ? {} : { value: u }),
        name: c,
        type: "checkbox",
        ...V,
      }),
      isSelected: n.isSelected,
      isPressed: x || A,
      isDisabled: l,
      isReadOnly: r,
      isInvalid: b || v === "invalid",
    }
  );
}
function Yx(t, n, a) {
  let l = Uh({ ...t, value: n.isSelected }),
    {
      isInvalid: r,
      validationErrors: u,
      validationDetails: c,
    } = l.displayValidation,
    {
      labelProps: d,
      inputProps: h,
      isSelected: m,
      isPressed: v,
      isDisabled: b,
      isReadOnly: g,
    } = Gx({ ...t, isInvalid: r }, n, a);
  Ix(t, l, a);
  let { isIndeterminate: T, isRequired: x, validationBehavior: C = "aria" } = t;
  S.useEffect(() => {
    a.current && (a.current.indeterminate = !!T);
  });
  let { pressProps: A } = Ur({
    isDisabled: b || g,
    onPress() {
      let { [d1]: M } = t,
        { commitValidation: V } = M || l;
      V();
    },
  });
  return {
    labelProps: pe(d, A),
    inputProps: {
      ...h,
      checked: m,
      "aria-required": (x && C === "aria") || void 0,
      required: x && C === "native",
    },
    isSelected: m,
    isPressed: v,
    isDisabled: b,
    isReadOnly: g,
    isInvalid: r,
    validationErrors: u,
    validationDetails: c,
  };
}
const sD = new WeakMap();
function Kp(t) {
  let {
    id: n,
    label: a,
    "aria-labelledby": l,
    "aria-label": r,
    labelElementType: u = "label",
  } = t;
  n = Wl(n);
  let c = Wl(),
    d = {};
  a &&
    ((l = l ? `${c} ${l}` : c),
    (d = { id: c, htmlFor: u === "label" ? n : void 0 }));
  let h = z4({ id: n, "aria-label": r, "aria-labelledby": l });
  return { labelProps: d, fieldProps: h };
}
function rD(t) {
  let { description: n, errorMessage: a, isInvalid: l, validationState: r } = t,
    { labelProps: u, fieldProps: c } = Kp(t),
    d = ug([!!n, !!a, l, r]),
    h = ug([!!n, !!a, l, r]);
  return (
    (c = Wt(c, {
      "aria-describedby":
        [d, h, t["aria-describedby"]].filter(Boolean).join(" ") || void 0,
    })),
    {
      labelProps: u,
      fieldProps: c,
      descriptionProps: { id: d },
      errorMessageProps: { id: h },
    }
  );
}
function oD(t, n, a) {
  const l = Kh({
    isReadOnly: t.isReadOnly || n.isReadOnly,
    isSelected: n.isSelected(t.value),
    onChange(A) {
      A ? n.addValue(t.value) : n.removeValue(t.value),
        t.onChange && t.onChange(A);
    },
  });
  let {
    name: r,
    descriptionId: u,
    errorMessageId: c,
    validationBehavior: d,
  } = sD.get(n);
  var h;
  d = (h = t.validationBehavior) !== null && h !== void 0 ? h : d;
  let { realtimeValidation: m } = Uh({
      ...t,
      value: l.isSelected,
      name: void 0,
      validationBehavior: "aria",
    }),
    v = S.useRef(U2),
    b = () => {
      n.setInvalid(t.value, m.isInvalid ? m : v.current);
    };
  S.useEffect(b);
  let g = n.realtimeValidation.isInvalid ? n.realtimeValidation : m,
    T = d === "native" ? n.displayValidation : g;
  var x;
  let C = Yx(
    {
      ...t,
      isReadOnly: t.isReadOnly || n.isReadOnly,
      isDisabled: t.isDisabled || n.isDisabled,
      name: t.name || r,
      isRequired:
        (x = t.isRequired) !== null && x !== void 0 ? x : n.isRequired,
      validationBehavior: d,
      [d1]: {
        realtimeValidation: g,
        displayValidation: T,
        resetValidation: n.resetValidation,
        commitValidation: n.commitValidation,
        updateValidation(A) {
          (v.current = A), b();
        },
      },
    },
    l,
    a,
  );
  return {
    ...C,
    inputProps: {
      ...C.inputProps,
      "aria-describedby":
        [t["aria-describedby"], n.isInvalid ? c : null, u]
          .filter(Boolean)
          .join(" ") || void 0,
    },
  };
}
var Xy = Symbol("default");
function jp(t, n) {
  let a = S.useContext(t);
  if (n === null) return null;
  if (a && typeof a == "object" && "slots" in a && a.slots) {
    let l = new Intl.ListFormat().format(
      Object.keys(a.slots).map((u) => `"${u}"`),
    );
    if (!n && !a.slots[Xy])
      throw new Error(`A slot prop is required. Valid slot names are ${l}.`);
    let r = n || Xy;
    if (!a.slots[r])
      throw new Error(`Invalid slot "${n}". Valid slot names are ${l}.`);
    return a.slots[r];
  }
  return a;
}
function uD(t, n, a) {
  let l = jp(a, t.slot) || {},
    { ref: r, ...u } = l,
    c = H3(S.useMemo(() => w1(n, r), [n, r])),
    d = pe(u, t);
  return (
    "style" in u &&
      u.style &&
      "style" in t &&
      t.style &&
      (typeof u.style == "function" || typeof t.style == "function"
        ? (d.style = (h) => {
            let m = typeof u.style == "function" ? u.style(h) : u.style,
              v = { ...h.defaultStyle, ...m },
              b =
                typeof t.style == "function"
                  ? t.style({ ...h, defaultStyle: v })
                  : t.style;
            return { ...v, ...b };
          })
        : (d.style = { ...u.style, ...t.style })),
    [d, c]
  );
}
var qu = S.createContext(null);
S.forwardRef(function (n, a) {
  [n, a] = uD(n, a, qu);
  let {
    validationErrors: l,
    validationBehavior: r = "native",
    children: u,
    className: c,
    ...d
  } = n;
  const h = S.useMemo(() => K2({ className: c }), [c]);
  return U.jsx("form", {
    noValidate: r !== "native",
    ...d,
    ref: a,
    className: h,
    children: U.jsx(qu.Provider, {
      value: { ...n, validationBehavior: r },
      children: U.jsx(j2.Provider, { value: l ?? {}, children: u }),
    }),
  });
});
var [tP, cD] = zr({ name: "CheckboxGroupContext", strict: !1 });
function fD(t) {
  const { isSelected: n, disableAnimation: a, ...l } = t;
  return U.jsx("svg", {
    "aria-hidden": "true",
    fill: "none",
    role: "presentation",
    stroke: "currentColor",
    strokeDasharray: 22,
    strokeDashoffset: n ? 44 : 66,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    style: !a && n ? { transition: "stroke-dashoffset 250ms linear 0.2s" } : {},
    viewBox: "0 0 17 18",
    ...l,
    children: U.jsx("polyline", { points: "1 9 7 14 15 4" }),
  });
}
function dD(t) {
  const { isSelected: n, disableAnimation: a, ...l } = t;
  return U.jsx("svg", {
    stroke: "currentColor",
    strokeWidth: 3,
    viewBox: "0 0 24 24",
    ...l,
    children: U.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  });
}
function hD(t) {
  const { isIndeterminate: n, ...a } = t,
    l = n ? dD : fD;
  return U.jsx(l, { ...a });
}
function pD(t = {}) {
  var n, a, l, r, u, c, d, h;
  const m = Ft(),
    v = cD(),
    { validationBehavior: b } = jp(qu) || {},
    g = !!v,
    {
      as: T,
      ref: x,
      value: C = "",
      children: A,
      icon: M,
      name: V,
      isRequired: P,
      isReadOnly: z = !1,
      autoFocus: R = !1,
      isSelected: B,
      size: X = (n = v == null ? void 0 : v.size) != null ? n : "md",
      color: w = (a = v == null ? void 0 : v.color) != null ? a : "primary",
      radius: G = v == null ? void 0 : v.radius,
      lineThrough: W = (l = v == null ? void 0 : v.lineThrough) != null
        ? l
        : !1,
      isDisabled: D = (r = v == null ? void 0 : v.isDisabled) != null ? r : !1,
      disableAnimation: F = (c =
        (u = v == null ? void 0 : v.disableAnimation) != null
          ? u
          : m == null
            ? void 0
            : m.disableAnimation) != null
        ? c
        : !1,
      validationState: _,
      isInvalid: H = _
        ? _ === "invalid"
        : (d = v == null ? void 0 : v.isInvalid) != null
          ? d
          : !1,
      isIndeterminate: Z = !1,
      validationBehavior: $ = g
        ? v.validationBehavior
        : (h = b ?? (m == null ? void 0 : m.validationBehavior)) != null
          ? h
          : "native",
      defaultSelected: N,
      classNames: O,
      className: te,
      onValueChange: ne,
      validate: oe,
      ...re
    } = t,
    le = T || "label",
    se = S.useRef(null),
    de = S.useRef(null);
  let ce = t.onChange;
  g &&
    (ce = Bt(() => {
      v.groupState.resetValidation();
    }, ce));
  const Pe = S.useId(),
    Oe = S.useMemo(
      () => ({
        name: V,
        value: C,
        children: A,
        autoFocus: R,
        defaultSelected: N,
        isIndeterminate: Z,
        isRequired: P,
        isInvalid: H,
        isSelected: B,
        isDisabled: D,
        isReadOnly: z,
        "aria-label": h1(re["aria-label"], A),
        "aria-labelledby": re["aria-labelledby"] || Pe,
        onChange: ne,
      }),
      [
        V,
        C,
        A,
        R,
        N,
        Z,
        P,
        H,
        B,
        D,
        z,
        re["aria-label"],
        re["aria-labelledby"],
        Pe,
        ne,
      ],
    ),
    me = Kh(Oe),
    De = {
      isInvalid: H,
      isRequired: P,
      validate: oe,
      validationState: _,
      validationBehavior: $,
    },
    {
      inputProps: ae,
      isSelected: xe,
      isDisabled: we,
      isReadOnly: Ie,
      isPressed: yt,
      isInvalid: fe,
    } = g
      ? oD({ ...Oe, ...De }, v.groupState, de)
      : Yx({ ...Oe, ...De }, me, de),
    Ye = we || Ie,
    mt = _ === "invalid" || H || fe,
    Rn = Ye ? !1 : yt,
    { hoverProps: ct, isHovered: Qt } = Un({ isDisabled: ae.disabled }),
    {
      focusProps: Ct,
      isFocused: Nn,
      isFocusVisible: Di,
    } = Kn({ autoFocus: ae.autoFocus }),
    Nt = S.useMemo(
      () =>
        F2({
          color: w,
          size: X,
          radius: G,
          isInvalid: mt,
          lineThrough: W,
          isDisabled: we,
          disableAnimation: F,
        }),
      [w, X, G, mt, W, we, F],
    );
  Qu(() => {
    if (!de.current) return;
    const Ge = !!de.current.checked;
    me.setSelected(Ge);
  }, [de.current]);
  const On = Zd(ce),
    tt = S.useCallback(
      (Ge) => {
        if (Ie || we) {
          Ge.preventDefault();
          return;
        }
        On == null || On(Ge);
      },
      [Ie, we, On],
    ),
    Jt = Te(O == null ? void 0 : O.base, te),
    St = S.useCallback(
      () => ({
        ref: se,
        className: Nt.base({ class: Jt }),
        "data-disabled": ie(we),
        "data-selected": ie(xe || Z),
        "data-invalid": ie(mt),
        "data-hover": ie(Qt),
        "data-focus": ie(Nn),
        "data-pressed": ie(Rn),
        "data-readonly": ie(ae.readOnly),
        "data-focus-visible": ie(Di),
        "data-indeterminate": ie(Z),
        ...pe(ct, re),
      }),
      [Nt, Jt, we, xe, Z, mt, Qt, Nn, Rn, ae.readOnly, Di, ct, re],
    ),
    ja = S.useCallback(
      (Ge = {}) => ({
        ...Ge,
        "aria-hidden": !0,
        className: Te(
          Nt.wrapper({
            class: Te(
              O == null ? void 0 : O.wrapper,
              Ge == null ? void 0 : Ge.className,
            ),
          }),
        ),
      }),
      [Nt, O == null ? void 0 : O.wrapper],
    ),
    Fa = S.useCallback(
      () => ({
        ref: Ju(de, x),
        ...pe(ae, Ct),
        className: Nt.hiddenInput({
          class: O == null ? void 0 : O.hiddenInput,
        }),
        onChange: Bt(ae.onChange, tt),
      }),
      [ae, Ct, tt, O == null ? void 0 : O.hiddenInput],
    ),
    Ia = S.useCallback(
      () => ({
        id: Pe,
        className: Nt.label({ class: O == null ? void 0 : O.label }),
      }),
      [Nt, O == null ? void 0 : O.label, we, xe, mt],
    ),
    en = S.useCallback(
      () => ({
        isSelected: xe,
        isIndeterminate: Z,
        disableAnimation: F,
        className: Nt.icon({ class: O == null ? void 0 : O.icon }),
      }),
      [Nt, O == null ? void 0 : O.icon, xe, Z, F],
    );
  return {
    Component: le,
    icon: M,
    children: A,
    isSelected: xe,
    isDisabled: we,
    isInvalid: mt,
    isFocused: Nn,
    isHovered: Qt,
    isFocusVisible: Di,
    getBaseProps: St,
    getWrapperProps: ja,
    getInputProps: Fa,
    getLabelProps: Ia,
    getIconProps: en,
  };
}
var qx = et((t, n) => {
  const {
      Component: a,
      children: l,
      icon: r = U.jsx(hD, {}),
      getBaseProps: u,
      getWrapperProps: c,
      getInputProps: d,
      getIconProps: h,
      getLabelProps: m,
    } = pD({ ...t, ref: n }),
    v = typeof r == "function" ? r(h()) : S.cloneElement(r, h());
  return U.jsxs(a, {
    ...u(),
    children: [
      U.jsx("input", { ...d() }),
      U.jsx("span", { ...c(), children: v }),
      l && U.jsx("span", { ...m(), children: l }),
    ],
  });
});
qx.displayName = "HeroUI.Checkbox";
var nP = qx;
function mD(t, n) {
  let {
      elementType: a = "a",
      onPress: l,
      onPressStart: r,
      onPressEnd: u,
      onClick: c,
      role: d,
      isDisabled: h,
      type: m,
      ...v
    } = t,
    b = {};
  a !== "a" && (b = { role: "link", tabIndex: h ? void 0 : 0 });
  let g = Br() || kr();
  c &&
    typeof c == "function" &&
    m !== "button" &&
    d !== "button" &&
    Wu(
      "onClick is deprecated, please use onPress instead. See: https://github.com/heroui-inc/heroui/issues/4292",
      "useLink",
    );
  const T = (R) => {
    g && (c == null || c(R)), l == null || l(R);
  };
  let { focusableProps: x } = Kr(t, n),
    { pressProps: C, isPressed: A } = Ur({
      onPress: T,
      onPressStart: r,
      onPressEnd: u,
      isDisabled: h,
      ref: n,
    }),
    M = Ci(v, { labelable: !0, isLink: a === "a" }),
    V = pe(x, C),
    P = A1(),
    z = Yh(t);
  return {
    isPressed: A,
    linkProps: pe(M, z, {
      ...V,
      ...b,
      "aria-disabled": h || void 0,
      "aria-current": t["aria-current"],
      onClick: (R) => {
        var B;
        (B = C.onClick) == null || B.call(C, R),
          !g && c && c(R),
          !P.isNative &&
            R.currentTarget instanceof HTMLAnchorElement &&
            R.currentTarget.href &&
            !R.isDefaultPrevented() &&
            P1(R.currentTarget, R) &&
            t.href &&
            (R.preventDefault(),
            P.open(R.currentTarget, R, t.href, t.routerOptions));
      },
    }),
  };
}
function vD(t) {
  var n, a, l, r;
  const u = Ft(),
    [c, d] = An(t, Lb.variantKeys),
    {
      ref: h,
      as: m,
      children: v,
      anchorIcon: b,
      isExternal: g = !1,
      showAnchorIcon: T = !1,
      autoFocus: x = !1,
      className: C,
      onPress: A,
      onPressStart: M,
      onPressEnd: V,
      onClick: P,
      ...z
    } = c,
    R = m || "a",
    B = pt(h),
    X =
      (a =
        (n = t == null ? void 0 : t.disableAnimation) != null
          ? n
          : u == null
            ? void 0
            : u.disableAnimation) != null
        ? a
        : !1,
    { linkProps: w } = mD(
      {
        ...z,
        onPress: A,
        onPressStart: M,
        onPressEnd: V,
        onClick: P,
        isDisabled: t.isDisabled,
        elementType: `${m}`,
      },
      B,
    ),
    { isFocused: G, isFocusVisible: W, focusProps: D } = Kn({ autoFocus: x });
  g &&
    ((z.rel = (l = z.rel) != null ? l : "noopener noreferrer"),
    (z.target = (r = z.target) != null ? r : "_blank"));
  const F = S.useMemo(
      () => Lb({ ...d, disableAnimation: X, className: C }),
      [Pn(d), X, C],
    ),
    _ = S.useCallback(
      () => ({
        ref: B,
        className: F,
        "data-focus": ie(G),
        "data-disabled": ie(t.isDisabled),
        "data-focus-visible": ie(W),
        ...pe(D, w, z),
      }),
      [F, G, W, D, w, z],
    );
  return {
    Component: R,
    children: v,
    anchorIcon: b,
    showAnchorIcon: T,
    getLinkProps: _,
  };
}
var Xx = et((t, n) => {
  const {
    Component: a,
    children: l,
    showAnchorIcon: r,
    anchorIcon: u = U.jsx(I2, { className: G2 }),
    getLinkProps: c,
  } = vD({ ref: n, ...t });
  return U.jsx(a, {
    ...c(),
    children: U.jsxs(U.Fragment, { children: [l, r && u] }),
  });
});
Xx.displayName = "HeroUI.Link";
var iP = Xx;
const Zy = (t) => typeof t == "object" && t != null && t.nodeType === 1,
  Wy = (t, n) => (!n || t !== "hidden") && t !== "visible" && t !== "clip",
  Tu = (t, n) => {
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
      const a = getComputedStyle(t, null);
      return (
        Wy(a.overflowY, n) ||
        Wy(a.overflowX, n) ||
        ((l) => {
          const r = ((u) => {
            if (!u.ownerDocument || !u.ownerDocument.defaultView) return null;
            try {
              return u.ownerDocument.defaultView.frameElement;
            } catch {
              return null;
            }
          })(l);
          return (
            !!r &&
            (r.clientHeight < l.scrollHeight || r.clientWidth < l.scrollWidth)
          );
        })(t)
      );
    }
    return !1;
  },
  xu = (t, n, a, l, r, u, c, d) =>
    (u < t && c > n) || (u > t && c < n)
      ? 0
      : (u <= t && d <= a) || (c >= n && d >= a)
        ? u - t - l
        : (c > n && d < a) || (u < t && d > a)
          ? c - n + r
          : 0,
  bD = (t) => {
    const n = t.parentElement;
    return n ?? (t.getRootNode().host || null);
  },
  Qy = (t, n) => {
    var a, l, r, u;
    if (typeof document > "u") return [];
    const {
        scrollMode: c,
        block: d,
        inline: h,
        boundary: m,
        skipOverflowHiddenElements: v,
      } = n,
      b = typeof m == "function" ? m : ($) => $ !== m;
    if (!Zy(t)) throw new TypeError("Invalid target");
    const g = document.scrollingElement || document.documentElement,
      T = [];
    let x = t;
    for (; Zy(x) && b(x); ) {
      if (((x = bD(x)), x === g)) {
        T.push(x);
        break;
      }
      (x != null &&
        x === document.body &&
        Tu(x) &&
        !Tu(document.documentElement)) ||
        (x != null && Tu(x, v) && T.push(x));
    }
    const C =
        (l = (a = window.visualViewport) == null ? void 0 : a.width) != null
          ? l
          : innerWidth,
      A =
        (u = (r = window.visualViewport) == null ? void 0 : r.height) != null
          ? u
          : innerHeight,
      { scrollX: M, scrollY: V } = window,
      {
        height: P,
        width: z,
        top: R,
        right: B,
        bottom: X,
        left: w,
      } = t.getBoundingClientRect(),
      {
        top: G,
        right: W,
        bottom: D,
        left: F,
      } = (($) => {
        const N = window.getComputedStyle($);
        return {
          top: parseFloat(N.scrollMarginTop) || 0,
          right: parseFloat(N.scrollMarginRight) || 0,
          bottom: parseFloat(N.scrollMarginBottom) || 0,
          left: parseFloat(N.scrollMarginLeft) || 0,
        };
      })(t);
    let _ =
        d === "start" || d === "nearest"
          ? R - G
          : d === "end"
            ? X + D
            : R + P / 2 - G + D,
      H = h === "center" ? w + z / 2 - F + W : h === "end" ? B + W : w - F;
    const Z = [];
    for (let $ = 0; $ < T.length; $++) {
      const N = T[$],
        {
          height: O,
          width: te,
          top: ne,
          right: oe,
          bottom: re,
          left: le,
        } = N.getBoundingClientRect();
      if (
        c === "if-needed" &&
        R >= 0 &&
        w >= 0 &&
        X <= A &&
        B <= C &&
        ((N === g && !Tu(N)) || (R >= ne && X <= re && w >= le && B <= oe))
      )
        return Z;
      const se = getComputedStyle(N),
        de = parseInt(se.borderLeftWidth, 10),
        ce = parseInt(se.borderTopWidth, 10),
        Pe = parseInt(se.borderRightWidth, 10),
        Oe = parseInt(se.borderBottomWidth, 10);
      let me = 0,
        De = 0;
      const ae =
          "offsetWidth" in N ? N.offsetWidth - N.clientWidth - de - Pe : 0,
        xe =
          "offsetHeight" in N ? N.offsetHeight - N.clientHeight - ce - Oe : 0,
        we =
          "offsetWidth" in N
            ? N.offsetWidth === 0
              ? 0
              : te / N.offsetWidth
            : 0,
        Ie =
          "offsetHeight" in N
            ? N.offsetHeight === 0
              ? 0
              : O / N.offsetHeight
            : 0;
      if (g === N)
        (me =
          d === "start"
            ? _
            : d === "end"
              ? _ - A
              : d === "nearest"
                ? xu(V, V + A, A, ce, Oe, V + _, V + _ + P, P)
                : _ - A / 2),
          (De =
            h === "start"
              ? H
              : h === "center"
                ? H - C / 2
                : h === "end"
                  ? H - C
                  : xu(M, M + C, C, de, Pe, M + H, M + H + z, z)),
          (me = Math.max(0, me + V)),
          (De = Math.max(0, De + M));
      else {
        (me =
          d === "start"
            ? _ - ne - ce
            : d === "end"
              ? _ - re + Oe + xe
              : d === "nearest"
                ? xu(ne, re, O, ce, Oe + xe, _, _ + P, P)
                : _ - (ne + O / 2) + xe / 2),
          (De =
            h === "start"
              ? H - le - de
              : h === "center"
                ? H - (le + te / 2) + ae / 2
                : h === "end"
                  ? H - oe + Pe + ae
                  : xu(le, oe, te, de, Pe + ae, H, H + z, z));
        const { scrollLeft: yt, scrollTop: fe } = N;
        (me =
          Ie === 0
            ? 0
            : Math.max(
                0,
                Math.min(fe + me / Ie, N.scrollHeight - O / Ie + xe),
              )),
          (De =
            we === 0
              ? 0
              : Math.max(
                  0,
                  Math.min(yt + De / we, N.scrollWidth - te / we + ae),
                )),
          (_ += fe - me),
          (H += yt - De);
      }
      Z.push({ el: N, top: me, left: De });
    }
    return Z;
  },
  gD = (t) =>
    t === !1
      ? { block: "end", inline: "nearest" }
      : ((n) => n === Object(n) && Object.keys(n).length !== 0)(t)
        ? t
        : { block: "start", inline: "nearest" };
function yD(t, n) {
  if (
    !t.isConnected ||
    !((l) => {
      let r = l;
      for (; r && r.parentNode; ) {
        if (r.parentNode === document) return !0;
        r =
          r.parentNode instanceof ShadowRoot ? r.parentNode.host : r.parentNode;
      }
      return !1;
    })(t)
  )
    return;
  if (((l) => typeof l == "object" && typeof l.behavior == "function")(n))
    return n.behavior(Qy(t, n));
  const a = typeof n == "boolean" || n == null ? void 0 : n.behavior;
  for (const { el: l, top: r, left: u } of Qy(t, gD(n)))
    l.scroll({ top: r, left: u, behavior: a });
}
function SD(t, n) {
  let a = Ci(t, { labelable: !0 }),
    { hoverProps: l } = Un({
      onHoverStart: () => (n == null ? void 0 : n.open(!0)),
      onHoverEnd: () => (n == null ? void 0 : n.close()),
    });
  return { tooltipProps: pe(a, l, { role: "tooltip" }) };
}
function TD(t, n, a) {
  let { isDisabled: l, trigger: r } = t,
    u = ts(),
    c = S.useRef(!1),
    d = S.useRef(!1),
    h = () => {
      (c.current || d.current) && n.open(d.current);
    },
    m = (M) => {
      !c.current && !d.current && n.close(M);
    };
  S.useEffect(() => {
    let M = (V) => {
      a &&
        a.current &&
        V.key === "Escape" &&
        (V.stopPropagation(), n.close(!0));
    };
    if (n.isOpen)
      return (
        document.addEventListener("keydown", M, !0),
        () => {
          document.removeEventListener("keydown", M, !0);
        }
      );
  }, [a, n]);
  let v = () => {
      r !== "focus" &&
        (ap() === "pointer" ? (c.current = !0) : (c.current = !1), h());
    },
    b = () => {
      r !== "focus" && ((d.current = !1), (c.current = !1), m());
    },
    g = () => {
      (d.current = !1), (c.current = !1), m(!0);
    },
    T = () => {
      $r() && ((d.current = !0), h());
    },
    x = () => {
      (d.current = !1), (c.current = !1), m(!0);
    },
    { hoverProps: C } = Un({ isDisabled: l, onHoverStart: v, onHoverEnd: b }),
    { focusableProps: A } = Kr({ isDisabled: l, onFocus: T, onBlur: x }, a);
  return {
    triggerProps: {
      "aria-describedby": n.isOpen ? u : void 0,
      ...pe(A, C, { onPointerDown: g, onKeyDown: g, tabIndex: void 0 }),
    },
    tooltipProps: { id: u },
  };
}
function xD(t) {
  var n, a;
  const l = Ft(),
    [r, u] = An(t, _b.variantKeys),
    {
      ref: c,
      as: d,
      isOpen: h,
      content: m,
      children: v,
      defaultOpen: b,
      onOpenChange: g,
      isDisabled: T,
      trigger: x,
      shouldFlip: C = !0,
      containerPadding: A = 12,
      placement: M = "top",
      delay: V = 0,
      closeDelay: P = 500,
      showArrow: z = !1,
      offset: R = 7,
      crossOffset: B = 0,
      isDismissable: X,
      shouldCloseOnBlur: w = !0,
      portalContainer: G,
      isKeyboardDismissDisabled: W = !1,
      updatePositionDeps: D = [],
      shouldCloseOnInteractOutside: F,
      className: _,
      onClose: H,
      motionProps: Z,
      classNames: $,
      ...N
    } = r,
    O = d || "div",
    te =
      (a =
        (n = t == null ? void 0 : t.disableAnimation) != null
          ? n
          : l == null
            ? void 0
            : l.disableAnimation) != null
        ? a
        : !1,
    ne = Y2({
      delay: V,
      closeDelay: P,
      isDisabled: T,
      defaultOpen: b,
      isOpen: h,
      onOpenChange: (fe) => {
        g == null || g(fe), fe || H == null || H();
      },
    }),
    oe = S.useRef(null),
    re = S.useRef(null),
    le = S.useId(),
    se = ne.isOpen && !T;
  S.useImperativeHandle(c, () => q2(re));
  const { triggerProps: de, tooltipProps: ce } = TD(
      { isDisabled: T, trigger: x },
      ne,
      oe,
    ),
    { tooltipProps: Pe } = SD({ isOpen: se, ...pe(r, ce) }, ne),
    {
      overlayProps: Oe,
      placement: me,
      updatePosition: De,
    } = q4({
      isOpen: se,
      targetRef: oe,
      placement: q5(M),
      overlayRef: re,
      offset: z ? R + 3 : R,
      crossOffset: B,
      shouldFlip: C,
      containerPadding: A,
    });
  Qu(() => {
    D.length && De();
  }, D);
  const { overlayProps: ae } = rS(
      {
        isOpen: se,
        onClose: ne.close,
        isDismissable: X,
        shouldCloseOnBlur: w,
        isKeyboardDismissDisabled: W,
        shouldCloseOnInteractOutside: F,
      },
      re,
    ),
    xe = S.useMemo(() => {
      var fe, Ye, mt;
      return _b({
        ...u,
        disableAnimation: te,
        radius: (fe = t == null ? void 0 : t.radius) != null ? fe : "md",
        size: (Ye = t == null ? void 0 : t.size) != null ? Ye : "md",
        shadow: (mt = t == null ? void 0 : t.shadow) != null ? mt : "sm",
      });
    }, [
      Pn(u),
      te,
      t == null ? void 0 : t.radius,
      t == null ? void 0 : t.size,
      t == null ? void 0 : t.shadow,
    ]),
    we = S.useCallback(
      (fe = {}, Ye = null) => ({
        ...pe(de, fe),
        ref: Ju(Ye, oe),
        "aria-describedby": se ? le : void 0,
      }),
      [de, se, le, ne],
    ),
    Ie = S.useCallback(
      () => ({
        ref: re,
        "data-slot": "base",
        "data-open": ie(se),
        "data-arrow": ie(z),
        "data-disabled": ie(T),
        "data-placement": qy(me || "top", M),
        ...pe(Pe, ae, N),
        style: pe(Oe.style, N.style, r.style),
        className: xe.base({ class: $ == null ? void 0 : $.base }),
        id: le,
      }),
      [xe, se, z, T, me, M, Pe, ae, N, Oe, r, le],
    ),
    yt = S.useCallback(
      () => ({
        "data-slot": "content",
        "data-open": ie(se),
        "data-arrow": ie(z),
        "data-disabled": ie(T),
        "data-placement": qy(me || "top", M),
        className: xe.content({ class: Te($ == null ? void 0 : $.content, _) }),
      }),
      [xe, se, z, T, me, M, $],
    );
  return {
    Component: O,
    content: m,
    children: v,
    isOpen: se,
    triggerRef: oe,
    showArrow: z,
    portalContainer: G,
    placement: M,
    disableAnimation: te,
    isDisabled: T,
    motionProps: Z,
    getTooltipContentProps: yt,
    getTriggerProps: we,
    getTooltipProps: Ie,
  };
}
var ED = () =>
    Hh(() => Promise.resolve().then(() => qp), void 0).then((t) => t.default),
  Zx = et((t, n) => {
    var a;
    const {
      Component: l,
      children: r,
      content: u,
      isOpen: c,
      portalContainer: d,
      placement: h,
      disableAnimation: m,
      motionProps: v,
      getTriggerProps: b,
      getTooltipProps: g,
      getTooltipContentProps: T,
    } = xD({ ...t, ref: n });
    let x;
    try {
      if (S.Children.count(r) !== 1) throw new Error();
      if (!S.isValidElement(r)) x = U.jsx("p", { ...b(), children: r });
      else {
        const R = r,
          B = (a = R.props.ref) != null ? a : R.ref;
        x = S.cloneElement(R, b(R.props, B));
      }
    } catch {
      (x = U.jsx("span", {})),
        Wu("Tooltip must have only one child node. Please, check your code.");
    }
    const { ref: C, id: A, style: M, ...V } = g(),
      P = U.jsx(
        "div",
        {
          ref: C,
          id: A,
          style: M,
          children: U.jsx(
            Or.div,
            {
              animate: "enter",
              exit: "exit",
              initial: "exit",
              variants: zx.scaleSpring,
              ...pe(v, V),
              style: { ...Y5(h) },
              children: U.jsx(l, { ...T(), children: u }),
            },
            `${A}-tooltip-inner`,
          ),
        },
        `${A}-tooltip-content`,
      );
    return U.jsxs(U.Fragment, {
      children: [
        x,
        m
          ? c &&
            U.jsx(Cg, {
              portalContainer: d,
              children: U.jsx("div", {
                ref: C,
                id: A,
                style: M,
                ...V,
                children: U.jsx(l, { ...T(), children: u }),
              }),
            })
          : U.jsx(Pr, {
              features: ED,
              children: U.jsx(up, {
                children: c && U.jsx(Cg, { portalContainer: d, children: P }),
              }),
            }),
      ],
    });
  });
Zx.displayName = "HeroUI.Tooltip";
var aP = Zx;
function $D(t, n, a) {
  let {
    labelProps: l,
    inputProps: r,
    isSelected: u,
    isPressed: c,
    isDisabled: d,
    isReadOnly: h,
  } = Gx(t, n, a);
  return {
    labelProps: l,
    inputProps: { ...r, role: "switch", checked: u },
    isSelected: u,
    isPressed: c,
    isDisabled: d,
    isReadOnly: h,
  };
}
function wD(t = {}) {
  var n, a;
  const l = Ft(),
    [r, u] = An(t, zb.variantKeys),
    {
      ref: c,
      as: d,
      name: h,
      value: m = "",
      isReadOnly: v = !1,
      autoFocus: b = !1,
      startContent: g,
      endContent: T,
      defaultSelected: x,
      isSelected: C,
      children: A,
      thumbIcon: M,
      className: V,
      classNames: P,
      onChange: z,
      onValueChange: R,
      ...B
    } = r,
    X = d || "label",
    w = S.useRef(null),
    G = S.useRef(null),
    W =
      (a =
        (n = t.disableAnimation) != null
          ? n
          : l == null
            ? void 0
            : l.disableAnimation) != null
        ? a
        : !1,
    D = S.useId(),
    F = S.useMemo(() => {
      const fe = B["aria-label"] || typeof A == "string" ? A : void 0;
      return {
        name: h,
        value: m,
        children: A,
        autoFocus: b,
        defaultSelected: x,
        isSelected: C,
        isDisabled: !!t.isDisabled,
        isReadOnly: v,
        "aria-label": fe,
        "aria-labelledby": B["aria-labelledby"] || D,
        onChange: R,
      };
    }, [
      m,
      h,
      D,
      A,
      b,
      v,
      C,
      x,
      t.isDisabled,
      B["aria-label"],
      B["aria-labelledby"],
      R,
    ]),
    _ = Kh(F);
  Qu(() => {
    if (!G.current) return;
    const fe = !!G.current.checked;
    _.setSelected(fe);
  }, [G.current]);
  const { inputProps: H, isPressed: Z, isReadOnly: $ } = $D(F, _, G),
    {
      focusProps: N,
      isFocused: O,
      isFocusVisible: te,
    } = Kn({ autoFocus: H.autoFocus }),
    { hoverProps: ne, isHovered: oe } = Un({ isDisabled: H.disabled }),
    le = F.isDisabled || $ ? !1 : Z,
    se = H.checked,
    de = H.disabled,
    ce = S.useMemo(() => zb({ ...u, disableAnimation: W }), [Pn(u), W]),
    Pe = Te(P == null ? void 0 : P.base, V),
    Oe = (fe) => ({
      ...pe(ne, B, fe),
      ref: w,
      className: ce.base({ class: Te(Pe, fe == null ? void 0 : fe.className) }),
      "data-disabled": ie(de),
      "data-selected": ie(se),
      "data-readonly": ie($),
      "data-focus": ie(O),
      "data-focus-visible": ie(te),
      "data-hover": ie(oe),
      "data-pressed": ie(le),
    }),
    me = S.useCallback(
      (fe = {}) => ({
        ...fe,
        "aria-hidden": !0,
        className: Te(
          ce.wrapper({
            class: Te(
              P == null ? void 0 : P.wrapper,
              fe == null ? void 0 : fe.className,
            ),
          }),
        ),
      }),
      [ce, P == null ? void 0 : P.wrapper],
    ),
    De = (fe = {}) => ({
      ...pe(H, N, fe),
      ref: Ju(G, c),
      id: H.id,
      className: ce.hiddenInput({ class: P == null ? void 0 : P.hiddenInput }),
      onChange: Bt(z, H.onChange),
    }),
    ae = S.useCallback(
      (fe = {}) => ({
        ...fe,
        className: ce.thumb({
          class: Te(
            P == null ? void 0 : P.thumb,
            fe == null ? void 0 : fe.className,
          ),
        }),
      }),
      [ce, P == null ? void 0 : P.thumb],
    ),
    xe = S.useCallback(
      (fe = {}) => ({
        ...fe,
        id: D,
        className: ce.label({
          class: Te(
            P == null ? void 0 : P.label,
            fe == null ? void 0 : fe.className,
          ),
        }),
      }),
      [ce, P == null ? void 0 : P.label, de, se],
    ),
    we = S.useCallback(
      (fe = { includeStateProps: !1 }) =>
        pe(
          {
            width: "1em",
            height: "1em",
            className: ce.thumbIcon({
              class: Te(P == null ? void 0 : P.thumbIcon),
            }),
          },
          fe.includeStateProps ? { isSelected: se } : {},
        ),
      [ce, P == null ? void 0 : P.thumbIcon, se],
    ),
    Ie = S.useCallback(
      (fe = {}) => ({
        width: "1em",
        height: "1em",
        ...fe,
        className: ce.startContent({
          class: Te(
            P == null ? void 0 : P.startContent,
            fe == null ? void 0 : fe.className,
          ),
        }),
      }),
      [ce, P == null ? void 0 : P.startContent, se],
    ),
    yt = S.useCallback(
      (fe = {}) => ({
        width: "1em",
        height: "1em",
        ...fe,
        className: ce.endContent({
          class: Te(
            P == null ? void 0 : P.endContent,
            fe == null ? void 0 : fe.className,
          ),
        }),
      }),
      [ce, P == null ? void 0 : P.endContent, se],
    );
  return {
    Component: X,
    slots: ce,
    classNames: P,
    domRef: w,
    children: A,
    thumbIcon: M,
    startContent: g,
    endContent: T,
    isHovered: oe,
    isSelected: se,
    isPressed: le,
    isFocused: O,
    isFocusVisible: te,
    isDisabled: de,
    getBaseProps: Oe,
    getWrapperProps: me,
    getInputProps: De,
    getLabelProps: xe,
    getThumbProps: ae,
    getThumbIconProps: we,
    getStartContentProps: Ie,
    getEndContentProps: yt,
  };
}
var Wx = et((t, n) => {
  const {
      Component: a,
      children: l,
      startContent: r,
      endContent: u,
      thumbIcon: c,
      getBaseProps: d,
      getInputProps: h,
      getWrapperProps: m,
      getThumbProps: v,
      getThumbIconProps: b,
      getLabelProps: g,
      getStartContentProps: T,
      getEndContentProps: x,
    } = wD({ ...t, ref: n }),
    C =
      typeof c == "function"
        ? c(b({ includeStateProps: !0 }))
        : c && S.cloneElement(c, b()),
    A = r && S.cloneElement(r, T()),
    M = u && S.cloneElement(u, x());
  return U.jsxs(a, {
    ...d(),
    children: [
      U.jsx("input", { ...h() }),
      U.jsxs("span", {
        ...m(),
        children: [r && A, U.jsx("span", { ...v(), children: c && C }), u && M],
      }),
      l && U.jsx("span", { ...g(), children: l }),
    ],
  });
});
Wx.displayName = "HeroUI.Switch";
var lP = Wx;
function CD(t) {
  let {
      value: n = 0,
      minValue: a = 0,
      maxValue: l = 100,
      valueLabel: r,
      isIndeterminate: u,
      formatOptions: c = { style: "percent" },
    } = t,
    d = Ci(t, { labelable: !0 }),
    { labelProps: h, fieldProps: m } = Kp({ ...t, labelElementType: "span" });
  n = Ru(n, a, l);
  let v = (n - a) / (l - a),
    b = q3(c);
  if (!u && !r) {
    let g = c.style === "percent" ? v : n;
    r = b.format(g);
  }
  return {
    progressBarProps: pe(d, {
      ...m,
      "aria-valuenow": u ? void 0 : n,
      "aria-valuemin": a,
      "aria-valuemax": l,
      "aria-valuetext": u ? void 0 : r,
      role: "progressbar",
    }),
    labelProps: h,
  };
}
function MD(t) {
  var n, a;
  const l = Ft(),
    [r, u] = An(t, Vb.variantKeys),
    {
      ref: c,
      as: d,
      id: h,
      className: m,
      classNames: v,
      label: b,
      valueLabel: g,
      value: T = 0,
      minValue: x = 0,
      maxValue: C = 100,
      showValueLabel: A = !1,
      formatOptions: M = { style: "percent" },
      ...V
    } = r,
    P = d || "div",
    z = pt(c),
    R = Te(v == null ? void 0 : v.base, m),
    [, B] = p1({ rerender: !0, delay: 100 }),
    X = t.isIndeterminate,
    w =
      (a =
        (n = t.disableAnimation) != null
          ? n
          : l == null
            ? void 0
            : l.disableAnimation) != null
        ? a
        : !1,
    { progressBarProps: G, labelProps: W } = CD({
      id: h,
      label: b,
      value: T,
      minValue: x,
      maxValue: C,
      valueLabel: g,
      formatOptions: M,
      isIndeterminate: X,
      "aria-labelledby": t["aria-labelledby"],
      "aria-label": t["aria-label"],
    }),
    D = S.useMemo(() => Vb({ ...u, disableAnimation: w }), [Pn(u), w]),
    F = w ? !0 : B,
    _ = S.useMemo(
      () => (X || !F ? void 0 : X2(((T - x) / (C - x)) * 100)),
      [F, X, T, x, C],
    ),
    H = S.useCallback(
      ($ = {}) => ({
        ref: z,
        "data-indeterminate": ie(X),
        "data-disabled": ie(t.isDisabled),
        className: D.base({ class: R }),
        ...pe(G, V, $),
      }),
      [z, D, X, t.isDisabled, R, G, V],
    ),
    Z = S.useCallback(
      ($ = {}) => ({
        className: D.label({ class: v == null ? void 0 : v.label }),
        ...pe(W, $),
      }),
      [D, v, W],
    );
  return {
    Component: P,
    domRef: z,
    slots: D,
    classNames: v,
    label: b,
    percentage: _,
    showValueLabel: A,
    getProgressBarProps: H,
    getLabelProps: Z,
  };
}
var Qx = et((t, n) => {
  const {
      Component: a,
      slots: l,
      classNames: r,
      label: u,
      percentage: c,
      showValueLabel: d,
      getProgressBarProps: h,
      getLabelProps: m,
    } = MD({ ...t, ref: n }),
    v = h(),
    b = u || d;
  return U.jsxs(a, {
    ...v,
    children: [
      b
        ? U.jsxs("div", {
            className: l.labelWrapper({
              class: r == null ? void 0 : r.labelWrapper,
            }),
            children: [
              u && U.jsx("span", { ...m(), children: u }),
              d &&
                U.jsx("span", {
                  className: l.value({ class: r == null ? void 0 : r.value }),
                  children: v["aria-valuetext"],
                }),
            ],
          })
        : null,
      U.jsx("div", {
        className: l.track({ class: r == null ? void 0 : r.track }),
        children: U.jsx("div", {
          className: l.indicator({ class: r == null ? void 0 : r.indicator }),
          style: { transform: `translateX(-${100 - (c || 0)}%)` },
        }),
      }),
    ],
  });
});
Qx.displayName = "HeroUI.Progress";
var sP = Qx;
function DD(t, n) {
  let {
      inputElementType: a = "input",
      isDisabled: l = !1,
      isRequired: r = !1,
      isReadOnly: u = !1,
      type: c = "text",
      validationBehavior: d = "aria",
    } = t,
    [h, m] = jh(t.value, t.defaultValue || "", t.onChange),
    { focusableProps: v } = Kr(t, n),
    b = Uh({ ...t, value: h }),
    {
      isInvalid: g,
      validationErrors: T,
      validationDetails: x,
    } = b.displayValidation,
    {
      labelProps: C,
      fieldProps: A,
      descriptionProps: M,
      errorMessageProps: V,
    } = rD({ ...t, isInvalid: g, errorMessage: t.errorMessage || T }),
    P = Ci(t, { labelable: !0 });
  const z = { type: c, pattern: t.pattern };
  return (
    F3(n, h, m),
    Ix(t, b, n),
    S.useEffect(() => {
      if (n.current instanceof cn(n.current).HTMLTextAreaElement) {
        let R = n.current;
        Object.defineProperty(R, "defaultValue", {
          get: () => R.value,
          set: () => {},
          configurable: !0,
        });
      }
    }, [n]),
    {
      labelProps: C,
      inputProps: pe(P, a === "input" ? z : void 0, {
        disabled: l,
        readOnly: u,
        required: r && d === "native",
        "aria-required": (r && d === "aria") || void 0,
        "aria-invalid": g || void 0,
        "aria-errormessage": t["aria-errormessage"],
        "aria-activedescendant": t["aria-activedescendant"],
        "aria-autocomplete": t["aria-autocomplete"],
        "aria-haspopup": t["aria-haspopup"],
        "aria-controls": t["aria-controls"],
        value: h,
        onChange: (R) => m(R.target.value),
        autoComplete: t.autoComplete,
        autoCapitalize: t.autoCapitalize,
        maxLength: t.maxLength,
        minLength: t.minLength,
        name: t.name,
        placeholder: t.placeholder,
        inputMode: t.inputMode,
        autoCorrect: t.autoCorrect,
        spellCheck: t.spellCheck,
        [parseInt(Ne.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]:
          t.enterKeyHint,
        onCopy: t.onCopy,
        onCut: t.onCut,
        onPaste: t.onPaste,
        onCompositionEnd: t.onCompositionEnd,
        onCompositionStart: t.onCompositionStart,
        onCompositionUpdate: t.onCompositionUpdate,
        onSelect: t.onSelect,
        onBeforeInput: t.onBeforeInput,
        onInput: t.onInput,
        ...v,
        ...A,
      }),
      descriptionProps: M,
      errorMessageProps: V,
      isInvalid: g,
      validationErrors: T,
      validationDetails: x,
    }
  );
}
function Jx(t) {
  var n, a, l, r, u, c, d;
  const h = Ft(),
    { validationBehavior: m } = jp(qu) || {},
    [v, b] = An(t, Bb.variantKeys),
    {
      ref: g,
      as: T,
      type: x,
      label: C,
      baseRef: A,
      wrapperRef: M,
      description: V,
      className: P,
      classNames: z,
      autoFocus: R,
      startContent: B,
      endContent: X,
      onClear: w,
      onChange: G,
      validationState: W,
      validationBehavior: D = (n =
        m ?? (h == null ? void 0 : h.validationBehavior)) != null
        ? n
        : "native",
      innerWrapperRef: F,
      onValueChange: _ = () => {},
      ...H
    } = v,
    Z = S.useCallback(
      (ge) => {
        _(ge ?? "");
      },
      [_],
    ),
    [$, N] = S.useState(!1),
    O = T || "div",
    te =
      (l =
        (a = t.disableAnimation) != null
          ? a
          : h == null
            ? void 0
            : h.disableAnimation) != null
        ? l
        : !1,
    ne = pt(g),
    oe = pt(A),
    re = pt(M),
    le = pt(F),
    [se, de] = jh(v.value, (r = v.defaultValue) != null ? r : "", Z),
    ce = x === "file",
    Pe =
      ((d =
        (c =
          (u = ne == null ? void 0 : ne.current) == null ? void 0 : u.files) ==
        null
          ? void 0
          : c.length) != null
        ? d
        : 0) > 0,
    Oe = ["date", "time", "month", "week", "range"].includes(x),
    me = !Fh(se) || Oe || Pe,
    De = me || $,
    ae = x === "hidden",
    xe = t.isMultiline,
    we = Te(z == null ? void 0 : z.base, P, me ? "is-filled" : ""),
    Ie = S.useCallback(() => {
      var ge;
      ce ? (ne.current.value = "") : de(""),
        w == null || w(),
        (ge = ne.current) == null || ge.focus();
    }, [de, w, ce]);
  Qu(() => {
    ne.current && de(ne.current.value);
  }, [ne.current]);
  const {
    labelProps: yt,
    inputProps: fe,
    isInvalid: Ye,
    validationErrors: mt,
    validationDetails: Rn,
    descriptionProps: ct,
    errorMessageProps: Qt,
  } = DD(
    {
      ...t,
      validationBehavior: D,
      autoCapitalize: t.autoCapitalize,
      value: se,
      "aria-label": h1(t["aria-label"], t.label, t.placeholder),
      inputElementType: xe ? "textarea" : "input",
      onChange: de,
    },
    ne,
  );
  ce && (delete fe.value, delete fe.onChange);
  const {
      isFocusVisible: Ct,
      isFocused: Nn,
      focusProps: Di,
    } = Kn({ autoFocus: R, isTextInput: !0 }),
    { isHovered: Nt, hoverProps: On } = Un({
      isDisabled: !!(t != null && t.isDisabled),
    }),
    { isHovered: tt, hoverProps: Jt } = Un({
      isDisabled: !!(t != null && t.isDisabled),
    }),
    { focusProps: St, isFocusVisible: ja } = Kn(),
    { focusWithinProps: Fa } = ic({ onFocusWithinChange: N }),
    { pressProps: Ia } = Ur({
      isDisabled:
        !!(t != null && t.isDisabled) || !!(t != null && t.isReadOnly),
      onPress: Ie,
    }),
    en = W === "invalid" || Ye,
    Ge = j5({ labelPlacement: t.labelPlacement, label: C }),
    Ln =
      typeof v.errorMessage == "function"
        ? v.errorMessage({
            isInvalid: en,
            validationErrors: mt,
            validationDetails: Rn,
          })
        : v.errorMessage || (mt == null ? void 0 : mt.join(" ")),
    jn = !!w || t.isClearable,
    Ai = !!C || !!V || !!Ln,
    ii = !!v.placeholder,
    rs = !!C,
    Ga = !!V || !!Ln,
    Ya = Ge === "outside" || Ge === "outside-left",
    ua = Ge === "inside",
    qa = ne.current
      ? (!ne.current.value || ne.current.value === "" || !se || se === "") && ii
      : !1,
    qr = Ge === "outside-left",
    fn = !!B,
    os = Ya ? Ge === "outside-left" || ii || (Ge === "outside" && fn) : !1,
    us = Ge === "outside" && !ii && !fn,
    We = S.useMemo(
      () =>
        Bb({
          ...b,
          isInvalid: en,
          labelPlacement: Ge,
          isClearable: jn,
          disableAnimation: te,
        }),
      [Pn(b), en, Ge, jn, fn, te],
    ),
    dc = S.useCallback(
      (ge = {}) => ({
        ref: oe,
        className: We.base({ class: we }),
        "data-slot": "base",
        "data-filled": ie(me || ii || fn || qa || ce),
        "data-filled-within": ie(De || ii || fn || qa || ce),
        "data-focus-within": ie($),
        "data-focus-visible": ie(Ct),
        "data-readonly": ie(t.isReadOnly),
        "data-focus": ie(Nn),
        "data-hover": ie(Nt || tt),
        "data-required": ie(t.isRequired),
        "data-invalid": ie(en),
        "data-disabled": ie(t.isDisabled),
        "data-has-elements": ie(Ai),
        "data-has-helper": ie(Ga),
        "data-has-label": ie(rs),
        "data-has-value": ie(!qa),
        "data-hidden": ie(ae),
        ...Fa,
        ...ge,
      }),
      [
        We,
        we,
        me,
        Nn,
        Nt,
        tt,
        en,
        Ga,
        rs,
        Ai,
        qa,
        fn,
        $,
        Ct,
        De,
        ii,
        Fa,
        ae,
        t.isReadOnly,
        t.isRequired,
        t.isDisabled,
      ],
    ),
    Fn = S.useCallback(
      (ge = {}) => ({
        "data-slot": "label",
        className: We.label({ class: z == null ? void 0 : z.label }),
        ...pe(yt, Jt, ge),
      }),
      [We, tt, yt, z == null ? void 0 : z.label],
    ),
    vt = S.useCallback(
      (ge) => {
        ge.key === "Escape" &&
          se &&
          (jn || w) &&
          !t.isReadOnly &&
          (de(""), w == null || w());
      },
      [se, de, w, jn, t.isReadOnly],
    ),
    Ot = S.useCallback(
      (ge = {}) => ({
        "data-slot": "input",
        "data-filled": ie(me),
        "data-filled-within": ie(De),
        "data-has-start-content": ie(fn),
        "data-has-end-content": ie(!!X),
        "data-type": x,
        className: We.input({
          class: Te(
            z == null ? void 0 : z.input,
            me ? "is-filled" : "",
            xe ? "pe-0" : "",
            x === "password" ? "[&::-ms-reveal]:hidden" : "",
          ),
        }),
        ...pe(
          Di,
          fe,
          Hn(H, {
            enabled: !0,
            labelable: !0,
            omitEventNames: new Set(Object.keys(fe)),
          }),
          ge,
        ),
        "aria-readonly": ie(t.isReadOnly),
        onChange: Bt(fe.onChange, G),
        onKeyDown: Bt(fe.onKeyDown, ge.onKeyDown, vt),
        ref: ne,
      }),
      [
        We,
        se,
        Di,
        fe,
        H,
        me,
        De,
        fn,
        X,
        z == null ? void 0 : z.input,
        t.isReadOnly,
        t.isRequired,
        G,
        vt,
      ],
    ),
    Pi = S.useCallback(
      (ge = {}) => ({
        ref: re,
        "data-slot": "input-wrapper",
        "data-hover": ie(Nt || tt),
        "data-focus-visible": ie(Ct),
        "data-focus": ie(Nn),
        className: We.inputWrapper({
          class: Te(z == null ? void 0 : z.inputWrapper, me ? "is-filled" : ""),
        }),
        ...pe(ge, On),
        onClick: (dn) => {
          ne.current && dn.currentTarget === dn.target && ne.current.focus();
        },
        style: { cursor: "text", ...ge.style },
      }),
      [We, Nt, tt, Ct, Nn, se, z == null ? void 0 : z.inputWrapper],
    ),
    cs = S.useCallback(
      (ge = {}) => ({
        ...ge,
        ref: le,
        "data-slot": "inner-wrapper",
        onClick: (dn) => {
          ne.current && dn.currentTarget === dn.target && ne.current.focus();
        },
        className: We.innerWrapper({
          class: Te(
            z == null ? void 0 : z.innerWrapper,
            ge == null ? void 0 : ge.className,
          ),
        }),
      }),
      [We, z == null ? void 0 : z.innerWrapper],
    ),
    hc = S.useCallback(
      (ge = {}) => ({
        ...ge,
        "data-slot": "main-wrapper",
        className: We.mainWrapper({
          class: Te(
            z == null ? void 0 : z.mainWrapper,
            ge == null ? void 0 : ge.className,
          ),
        }),
      }),
      [We, z == null ? void 0 : z.mainWrapper],
    ),
    pc = S.useCallback(
      (ge = {}) => ({
        ...ge,
        "data-slot": "helper-wrapper",
        className: We.helperWrapper({
          class: Te(
            z == null ? void 0 : z.helperWrapper,
            ge == null ? void 0 : ge.className,
          ),
        }),
      }),
      [We, z == null ? void 0 : z.helperWrapper],
    ),
    Xr = S.useCallback(
      (ge = {}) => ({
        ...ge,
        ...ct,
        "data-slot": "description",
        className: We.description({
          class: Te(
            z == null ? void 0 : z.description,
            ge == null ? void 0 : ge.className,
          ),
        }),
      }),
      [We, z == null ? void 0 : z.description],
    ),
    ca = S.useCallback(
      (ge = {}) => ({
        ...ge,
        ...Qt,
        "data-slot": "error-message",
        className: We.errorMessage({
          class: Te(
            z == null ? void 0 : z.errorMessage,
            ge == null ? void 0 : ge.className,
          ),
        }),
      }),
      [We, Qt, z == null ? void 0 : z.errorMessage],
    ),
    fs = S.useCallback(
      (ge = {}) => ({
        ...ge,
        type: "button",
        tabIndex: -1,
        disabled: t.isDisabled,
        "aria-label": "clear input",
        "data-slot": "clear-button",
        "data-focus-visible": ie(ja),
        className: We.clearButton({
          class: Te(
            z == null ? void 0 : z.clearButton,
            ge == null ? void 0 : ge.className,
          ),
        }),
        ...pe(Ia, St),
      }),
      [We, ja, Ia, St, z == null ? void 0 : z.clearButton],
    );
  return {
    Component: O,
    classNames: z,
    domRef: ne,
    label: C,
    description: V,
    startContent: B,
    endContent: X,
    labelPlacement: Ge,
    isClearable: jn,
    hasHelper: Ga,
    hasStartContent: fn,
    isLabelOutside: os,
    isOutsideLeft: qr,
    isLabelOutsideAsPlaceholder: us,
    shouldLabelBeOutside: Ya,
    shouldLabelBeInside: ua,
    hasPlaceholder: ii,
    isInvalid: en,
    errorMessage: Ln,
    getBaseProps: dc,
    getLabelProps: Fn,
    getInputProps: Ot,
    getMainWrapperProps: hc,
    getInputWrapperProps: Pi,
    getInnerWrapperProps: cs,
    getHelperWrapperProps: pc,
    getDescriptionProps: Xr,
    getErrorMessageProps: ca,
    getClearButtonProps: fs,
  };
}
var eE = et((t, n) => {
  const {
      Component: a,
      label: l,
      description: r,
      isClearable: u,
      startContent: c,
      endContent: d,
      labelPlacement: h,
      hasHelper: m,
      isOutsideLeft: v,
      shouldLabelBeOutside: b,
      errorMessage: g,
      isInvalid: T,
      getBaseProps: x,
      getLabelProps: C,
      getInputProps: A,
      getInnerWrapperProps: M,
      getInputWrapperProps: V,
      getMainWrapperProps: P,
      getHelperWrapperProps: z,
      getDescriptionProps: R,
      getErrorMessageProps: B,
      getClearButtonProps: X,
    } = Jx({ ...t, ref: n }),
    w = l ? U.jsx("label", { ...C(), children: l }) : null,
    G = S.useMemo(
      () => (u ? U.jsx("button", { ...X(), children: d || U.jsx(m1, {}) }) : d),
      [u, X],
    ),
    W = S.useMemo(() => {
      const _ = T && g;
      return !m || !(_ || r)
        ? null
        : U.jsx("div", {
            ...z(),
            children: _
              ? U.jsx("div", { ...B(), children: g })
              : U.jsx("div", { ...R(), children: r }),
          });
    }, [m, T, g, r, z, B, R]),
    D = S.useMemo(
      () =>
        U.jsxs("div", { ...M(), children: [c, U.jsx("input", { ...A() }), G] }),
      [c, G, A, M],
    ),
    F = S.useMemo(
      () =>
        b
          ? U.jsxs("div", {
              ...P(),
              children: [
                U.jsxs("div", { ...V(), children: [v ? null : w, D] }),
                W,
              ],
            })
          : U.jsxs(U.Fragment, {
              children: [U.jsxs("div", { ...V(), children: [w, D] }), W],
            }),
      [h, W, b, w, D, g, r, P, V, B, R],
    );
  return U.jsxs(a, { ...x(), children: [v ? w : null, F] });
});
eE.displayName = "HeroUI.Input";
var rP = eE,
  tE = et(
    (
      {
        style: t,
        minRows: n = 3,
        maxRows: a = 8,
        cacheMeasurements: l = !1,
        disableAutosize: r = !1,
        onHeightChange: u,
        ...c
      },
      d,
    ) => {
      const {
          Component: h,
          label: m,
          description: v,
          startContent: b,
          endContent: g,
          hasHelper: T,
          shouldLabelBeOutside: x,
          shouldLabelBeInside: C,
          isInvalid: A,
          errorMessage: M,
          getBaseProps: V,
          getLabelProps: P,
          getInputProps: z,
          getInnerWrapperProps: R,
          getInputWrapperProps: B,
          getHelperWrapperProps: X,
          getDescriptionProps: w,
          getErrorMessageProps: G,
          isClearable: W,
          getClearButtonProps: D,
        } = Jx({ ...c, ref: d, isMultiline: !0 }),
        [F, _] = S.useState(n > 1),
        [H, Z] = S.useState(!1),
        $ = m ? U.jsx("label", { ...P(), children: m }) : null,
        N = z(),
        O = (se, de) => {
          if ((n === 1 && _(se >= de.rowHeight * 2), a > n)) {
            const ce = se >= a * de.rowHeight;
            Z(ce);
          }
          u == null || u(se, de);
        },
        te = r
          ? U.jsx("textarea", { ...N, style: pe(N.style, t ?? {}) })
          : U.jsx(Z2, {
              ...N,
              cacheMeasurements: l,
              "data-hide-scroll": ie(!H),
              maxRows: a,
              minRows: n,
              style: pe(N.style, t ?? {}),
              onHeightChange: O,
            }),
        ne = S.useMemo(
          () =>
            W ? U.jsx("button", { ...D(), children: U.jsx(m1, {}) }) : null,
          [W, D],
        ),
        oe = S.useMemo(
          () =>
            b || g
              ? U.jsxs("div", { ...R(), children: [b, te, g] })
              : U.jsx("div", { ...R(), children: te }),
          [b, N, g, R],
        ),
        re = A && M,
        le = re || v;
      return U.jsxs(h, {
        ...V(),
        children: [
          x ? $ : null,
          U.jsxs("div", {
            ...B(),
            "data-has-multiple-rows": ie(F),
            children: [C ? $ : null, oe, ne],
          }),
          T && le
            ? U.jsx("div", {
                ...X(),
                children: re
                  ? U.jsx("div", { ...G(), children: M })
                  : U.jsx("div", { ...w(), children: v }),
              })
            : null,
        ],
      });
    },
  );
tE.displayName = "HeroUI.Textarea";
var oP = tE;
function AD(t, n) {
  let { role: a = "dialog" } = t,
    l = Qd();
  l = t["aria-label"] ? void 0 : l;
  let r = S.useRef(!1);
  return (
    S.useEffect(() => {
      if (n.current && !n.current.contains(document.activeElement)) {
        zu(n.current);
        let u = setTimeout(() => {
          document.activeElement === n.current &&
            ((r.current = !0),
            n.current && (n.current.blur(), zu(n.current)),
            (r.current = !1));
        }, 500);
        return () => {
          clearTimeout(u);
        };
      }
    }, [n]),
    JS(),
    {
      dialogProps: {
        ...Ci(t, { labelable: !0 }),
        role: a,
        tabIndex: -1,
        "aria-labelledby": t["aria-labelledby"] || l,
        onBlur: (u) => {
          r.current && u.stopPropagation();
        },
      },
      titleProps: { id: l },
    }
  );
}
function PD(t) {
  const n = xi(t);
  if (!(t instanceof n.HTMLElement) && !(t instanceof n.SVGElement)) return !1;
  let { display: a, visibility: l } = t.style,
    r = a !== "none" && l !== "hidden" && l !== "collapse";
  if (r) {
    const { getComputedStyle: u } = t.ownerDocument.defaultView;
    let { display: c, visibility: d } = u(t);
    r = c !== "none" && d !== "hidden" && d !== "collapse";
  }
  return r;
}
function RD(t, n) {
  return (
    !t.hasAttribute("hidden") &&
    !t.hasAttribute("data-react-aria-prevent-focus") &&
    (t.nodeName === "DETAILS" && n && n.nodeName !== "SUMMARY"
      ? t.hasAttribute("open")
      : !0)
  );
}
function nE(t, n) {
  return (
    t.nodeName !== "#comment" &&
    PD(t) &&
    RD(t, n) &&
    (!t.parentElement || nE(t.parentElement, t))
  );
}
function iE(t, n) {
  return !t || !n ? !1 : n.some((a) => a.contains(t));
}
function ND(t, n, a) {
  let l = n != null && n.tabbable ? G4 : G1,
    r = (t == null ? void 0 : t.nodeType) === Node.ELEMENT_NODE ? t : null,
    u = jt(r),
    c = y4(u, t || u, NodeFilter.SHOW_ELEMENT, {
      acceptNode(d) {
        var h;
        return !(n == null || (h = n.from) === null || h === void 0) &&
          h.contains(d)
          ? NodeFilter.FILTER_REJECT
          : l(d) &&
              nE(d) &&
              (!a || iE(d, a)) &&
              (!(n != null && n.accept) || n.accept(d))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  return n != null && n.from && (c.currentNode = n.from), c;
}
class Fp {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(n) {
    return this.fastMap.get(n);
  }
  addTreeNode(n, a, l) {
    let r = this.fastMap.get(a ?? null);
    if (!r) return;
    let u = new Jy({ scopeRef: n });
    r.addChild(u),
      (u.parent = r),
      this.fastMap.set(n, u),
      l && (u.nodeToRestore = l);
  }
  addNode(n) {
    this.fastMap.set(n.scopeRef, n);
  }
  removeTreeNode(n) {
    if (n === null) return;
    let a = this.fastMap.get(n);
    if (!a) return;
    let l = a.parent;
    for (let u of this.traverse())
      u !== a &&
        a.nodeToRestore &&
        u.nodeToRestore &&
        a.scopeRef &&
        a.scopeRef.current &&
        iE(u.nodeToRestore, a.scopeRef.current) &&
        (u.nodeToRestore = a.nodeToRestore);
    let r = a.children;
    l && (l.removeChild(a), r.size > 0 && r.forEach((u) => l && l.addChild(u))),
      this.fastMap.delete(a.scopeRef);
  }
  *traverse(n = this.root) {
    if ((n.scopeRef != null && (yield n), n.children.size > 0))
      for (let a of n.children) yield* this.traverse(a);
  }
  clone() {
    var n;
    let a = new Fp();
    var l;
    for (let r of this.traverse())
      a.addTreeNode(
        r.scopeRef,
        (l = (n = r.parent) === null || n === void 0 ? void 0 : n.scopeRef) !==
          null && l !== void 0
          ? l
          : null,
        r.nodeToRestore,
      );
    return a;
  }
  constructor() {
    (this.fastMap = new Map()),
      (this.root = new Jy({ scopeRef: null })),
      this.fastMap.set(null, this.root);
  }
}
class Jy {
  addChild(n) {
    this.children.add(n), (n.parent = this);
  }
  removeChild(n) {
    this.children.delete(n), (n.parent = void 0);
  }
  constructor(n) {
    (this.children = new Set()),
      (this.contain = !1),
      (this.scopeRef = n.scopeRef);
  }
}
new Fp();
function aE(t) {
  let n = _D(jt(t));
  n !== t && (n && OD(n, t), t && LD(t, n));
}
function OD(t, n) {
  t.dispatchEvent(new FocusEvent("blur", { relatedTarget: n })),
    t.dispatchEvent(
      new FocusEvent("focusout", { bubbles: !0, relatedTarget: n }),
    );
}
function LD(t, n) {
  t.dispatchEvent(new FocusEvent("focus", { relatedTarget: n })),
    t.dispatchEvent(
      new FocusEvent("focusin", { bubbles: !0, relatedTarget: n }),
    );
}
function _D(t) {
  let n = Ql(t),
    a = n == null ? void 0 : n.getAttribute("aria-activedescendant");
  return (a && t.getElementById(a)) || n;
}
function Vh(t) {
  return A4() ? t.altKey : t.ctrlKey;
}
function Au(t, n) {
  var a, l;
  let r = `[data-key="${CSS.escape(String(n))}"]`,
    u =
      (a = t.current) === null || a === void 0 ? void 0 : a.dataset.collection;
  return (
    u && (r = `[data-collection="${CSS.escape(u)}"]${r}`),
    (l = t.current) === null || l === void 0 ? void 0 : l.querySelector(r)
  );
}
const lE = new WeakMap();
function zD(t) {
  let n = Wl();
  return lE.set(t, n), n;
}
function VD(t) {
  return lE.get(t);
}
const BD = 1e3;
function kD(t) {
  let { keyboardDelegate: n, selectionManager: a, onTypeSelect: l } = t,
    r = S.useRef({ search: "", timeout: void 0 }).current,
    u = (c) => {
      let d = HD(c.key);
      if (
        !(!d || c.ctrlKey || c.metaKey || !c.currentTarget.contains(c.target))
      ) {
        if (
          (d === " " &&
            r.search.trim().length > 0 &&
            (c.preventDefault(),
            "continuePropagation" in c || c.stopPropagation()),
          (r.search += d),
          n.getKeyForSearch != null)
        ) {
          let h = n.getKeyForSearch(r.search, a.focusedKey);
          h == null && (h = n.getKeyForSearch(r.search)),
            h != null && (a.setFocusedKey(h), l && l(h));
        }
        clearTimeout(r.timeout),
          (r.timeout = setTimeout(() => {
            r.search = "";
          }, BD));
      }
    };
  return {
    typeSelectProps: { onKeyDownCapture: n.getKeyForSearch ? u : void 0 },
  };
}
function HD(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function sE(t) {
  let {
      selectionManager: n,
      keyboardDelegate: a,
      ref: l,
      autoFocus: r = !1,
      shouldFocusWrap: u = !1,
      disallowEmptySelection: c = !1,
      disallowSelectAll: d = !1,
      escapeKeyBehavior: h = "clearSelection",
      selectOnFocus: m = n.selectionBehavior === "replace",
      disallowTypeAhead: v = !1,
      shouldUseVirtualFocus: b,
      allowsTabNavigation: g = !1,
      isVirtualized: T,
      scrollRef: x = l,
      linkBehavior: C = "action",
    } = t,
    { direction: A } = Hr(),
    M = U1(),
    V = ($) => {
      var N;
      if (
        ($.altKey && $.key === "Tab" && $.preventDefault(),
        !(!((N = l.current) === null || N === void 0) && N.contains($.target)))
      )
        return;
      const O = (ae, xe) => {
        if (ae != null) {
          if (n.isLink(ae) && C === "selection" && m && !Vh($)) {
            ec.flushSync(() => {
              n.setFocusedKey(ae, xe);
            });
            let we = Au(l, ae),
              Ie = n.getItemProps(ae);
            we && M.open(we, $, Ie.href, Ie.routerOptions);
            return;
          }
          if ((n.setFocusedKey(ae, xe), n.isLink(ae) && C === "override"))
            return;
          $.shiftKey && n.selectionMode === "multiple"
            ? n.extendSelection(ae)
            : m && !Vh($) && n.replaceSelection(ae);
        }
      };
      switch ($.key) {
        case "ArrowDown":
          if (a.getKeyBelow) {
            var te, ne, oe;
            let ae =
              n.focusedKey != null
                ? (te = a.getKeyBelow) === null || te === void 0
                  ? void 0
                  : te.call(a, n.focusedKey)
                : (ne = a.getFirstKey) === null || ne === void 0
                  ? void 0
                  : ne.call(a);
            ae == null &&
              u &&
              (ae =
                (oe = a.getFirstKey) === null || oe === void 0
                  ? void 0
                  : oe.call(a, n.focusedKey)),
              ae != null && ($.preventDefault(), O(ae));
          }
          break;
        case "ArrowUp":
          if (a.getKeyAbove) {
            var re, le, se;
            let ae =
              n.focusedKey != null
                ? (re = a.getKeyAbove) === null || re === void 0
                  ? void 0
                  : re.call(a, n.focusedKey)
                : (le = a.getLastKey) === null || le === void 0
                  ? void 0
                  : le.call(a);
            ae == null &&
              u &&
              (ae =
                (se = a.getLastKey) === null || se === void 0
                  ? void 0
                  : se.call(a, n.focusedKey)),
              ae != null && ($.preventDefault(), O(ae));
          }
          break;
        case "ArrowLeft":
          if (a.getKeyLeftOf) {
            var de, ce, Pe;
            let ae =
              n.focusedKey != null
                ? (de = a.getKeyLeftOf) === null || de === void 0
                  ? void 0
                  : de.call(a, n.focusedKey)
                : null;
            ae == null &&
              u &&
              (ae =
                A === "rtl"
                  ? (ce = a.getFirstKey) === null || ce === void 0
                    ? void 0
                    : ce.call(a, n.focusedKey)
                  : (Pe = a.getLastKey) === null || Pe === void 0
                    ? void 0
                    : Pe.call(a, n.focusedKey)),
              ae != null &&
                ($.preventDefault(), O(ae, A === "rtl" ? "first" : "last"));
          }
          break;
        case "ArrowRight":
          if (a.getKeyRightOf) {
            var Oe, me, De;
            let ae =
              n.focusedKey != null
                ? (Oe = a.getKeyRightOf) === null || Oe === void 0
                  ? void 0
                  : Oe.call(a, n.focusedKey)
                : null;
            ae == null &&
              u &&
              (ae =
                A === "rtl"
                  ? (me = a.getLastKey) === null || me === void 0
                    ? void 0
                    : me.call(a, n.focusedKey)
                  : (De = a.getFirstKey) === null || De === void 0
                    ? void 0
                    : De.call(a, n.focusedKey)),
              ae != null &&
                ($.preventDefault(), O(ae, A === "rtl" ? "last" : "first"));
          }
          break;
        case "Home":
          if (a.getFirstKey) {
            if (n.focusedKey === null && $.shiftKey) return;
            $.preventDefault();
            let ae = a.getFirstKey(n.focusedKey, zl($));
            n.setFocusedKey(ae),
              ae != null &&
                (zl($) && $.shiftKey && n.selectionMode === "multiple"
                  ? n.extendSelection(ae)
                  : m && n.replaceSelection(ae));
          }
          break;
        case "End":
          if (a.getLastKey) {
            if (n.focusedKey === null && $.shiftKey) return;
            $.preventDefault();
            let ae = a.getLastKey(n.focusedKey, zl($));
            n.setFocusedKey(ae),
              ae != null &&
                (zl($) && $.shiftKey && n.selectionMode === "multiple"
                  ? n.extendSelection(ae)
                  : m && n.replaceSelection(ae));
          }
          break;
        case "PageDown":
          if (a.getKeyPageBelow && n.focusedKey != null) {
            let ae = a.getKeyPageBelow(n.focusedKey);
            ae != null && ($.preventDefault(), O(ae));
          }
          break;
        case "PageUp":
          if (a.getKeyPageAbove && n.focusedKey != null) {
            let ae = a.getKeyPageAbove(n.focusedKey);
            ae != null && ($.preventDefault(), O(ae));
          }
          break;
        case "a":
          zl($) &&
            n.selectionMode === "multiple" &&
            d !== !0 &&
            ($.preventDefault(), n.selectAll());
          break;
        case "Escape":
          h === "clearSelection" &&
            !c &&
            n.selectedKeys.size !== 0 &&
            ($.stopPropagation(), $.preventDefault(), n.clearSelection());
          break;
        case "Tab":
          if (!g) {
            if ($.shiftKey) l.current.focus();
            else {
              let ae = ND(l.current, { tabbable: !0 }),
                xe,
                we;
              do (we = ae.lastChild()), we && (xe = we);
              while (we);
              xe && !xe.contains(document.activeElement) && Ei(xe);
            }
            break;
          }
      }
    },
    P = S.useRef({ top: 0, left: 0 });
  cu(
    x,
    "scroll",
    T
      ? void 0
      : () => {
          var $, N, O, te;
          P.current = {
            top:
              (O =
                ($ = x.current) === null || $ === void 0
                  ? void 0
                  : $.scrollTop) !== null && O !== void 0
                ? O
                : 0,
            left:
              (te =
                (N = x.current) === null || N === void 0
                  ? void 0
                  : N.scrollLeft) !== null && te !== void 0
                ? te
                : 0,
          };
        },
  );
  let z = ($) => {
      if (n.isFocused) {
        $.currentTarget.contains($.target) || n.setFocused(!1);
        return;
      }
      if ($.currentTarget.contains($.target)) {
        if ((n.setFocused(!0), n.focusedKey == null)) {
          var N, O;
          let oe = (le) => {
              le != null &&
                (n.setFocusedKey(le),
                m && !n.isSelected(le) && n.replaceSelection(le));
            },
            re = $.relatedTarget;
          var te, ne;
          re &&
          $.currentTarget.compareDocumentPosition(re) &
            Node.DOCUMENT_POSITION_FOLLOWING
            ? oe(
                (te = n.lastSelectedKey) !== null && te !== void 0
                  ? te
                  : (N = a.getLastKey) === null || N === void 0
                    ? void 0
                    : N.call(a),
              )
            : oe(
                (ne = n.firstSelectedKey) !== null && ne !== void 0
                  ? ne
                  : (O = a.getFirstKey) === null || O === void 0
                    ? void 0
                    : O.call(a),
              );
        } else
          !T &&
            x.current &&
            ((x.current.scrollTop = P.current.top),
            (x.current.scrollLeft = P.current.left));
        if (n.focusedKey != null && x.current) {
          let oe = Au(l, n.focusedKey);
          oe instanceof HTMLElement &&
            (!oe.contains(document.activeElement) && !b && Ei(oe),
            vh() === "keyboard" && hg(oe, { containingElement: l.current }));
        }
      }
    },
    R = ($) => {
      $.currentTarget.contains($.relatedTarget) || n.setFocused(!1);
    },
    B = S.useRef(!1);
  cu(
    l,
    j4,
    b
      ? ($) => {
          let { detail: N } = $;
          $.stopPropagation(),
            n.setFocused(!0),
            (N == null ? void 0 : N.focusStrategy) === "first" &&
              (B.current = !0);
        }
      : void 0,
  );
  let X = Rt(() => {
    var $, N;
    let O =
      (N =
        ($ = a.getFirstKey) === null || $ === void 0 ? void 0 : $.call(a)) !==
        null && N !== void 0
        ? N
        : null;
    O == null
      ? (aE(l.current), n.collection.size > 0 && (B.current = !1))
      : (n.setFocusedKey(O), (B.current = !1));
  });
  fg(() => {
    B.current && X();
  }, [n.collection, X]);
  let w = Rt(() => {
    n.collection.size > 0 && (B.current = !1);
  });
  fg(() => {
    w();
  }, [n.focusedKey, w]),
    cu(
      l,
      K4,
      b
        ? ($) => {
            var N;
            $.stopPropagation(),
              n.setFocused(!1),
              !((N = $.detail) === null || N === void 0) &&
                N.clearFocusKey &&
                n.setFocusedKey(null);
          }
        : void 0,
    );
  const G = S.useRef(r),
    W = S.useRef(!1);
  S.useEffect(() => {
    if (G.current) {
      var $, N;
      let ne = null;
      var O;
      r === "first" &&
        (ne =
          (O =
            ($ = a.getFirstKey) === null || $ === void 0
              ? void 0
              : $.call(a)) !== null && O !== void 0
            ? O
            : null);
      var te;
      r === "last" &&
        (ne =
          (te =
            (N = a.getLastKey) === null || N === void 0
              ? void 0
              : N.call(a)) !== null && te !== void 0
            ? te
            : null);
      let oe = n.selectedKeys;
      if (oe.size) {
        for (let re of oe)
          if (n.canSelectItem(re)) {
            ne = re;
            break;
          }
      }
      n.setFocused(!0),
        n.setFocusedKey(ne),
        ne == null && !b && l.current && Ku(l.current),
        n.collection.size > 0 && ((G.current = !1), (W.current = !0));
    }
  });
  let D = S.useRef(n.focusedKey);
  S.useEffect(() => {
    if (
      n.isFocused &&
      n.focusedKey != null &&
      (n.focusedKey !== D.current || W.current) &&
      x.current &&
      l.current
    ) {
      let $ = vh(),
        N = Au(l, n.focusedKey);
      if (!(N instanceof HTMLElement)) return;
      ($ === "keyboard" || W.current) &&
        (F1(x.current, N),
        $ !== "virtual" && hg(N, { containingElement: l.current }));
    }
    !b &&
      n.isFocused &&
      n.focusedKey == null &&
      D.current != null &&
      l.current &&
      Ku(l.current),
      (D.current = n.focusedKey),
      (W.current = !1);
  }),
    cu(l, "react-aria-focus-scope-restore", ($) => {
      $.preventDefault(), n.setFocused(!0);
    });
  let F = {
      onKeyDown: V,
      onFocus: z,
      onBlur: R,
      onMouseDown($) {
        x.current === $.target && $.preventDefault();
      },
    },
    { typeSelectProps: _ } = kD({ keyboardDelegate: a, selectionManager: n });
  v || (F = Wt(_, F));
  let H;
  b || (H = n.focusedKey == null ? 0 : -1);
  let Z = zD(n.collection);
  return { collectionProps: Wt(F, { tabIndex: H, "data-collection": Z }) };
}
function rE(t) {
  let {
      id: n,
      selectionManager: a,
      key: l,
      ref: r,
      shouldSelectOnPressUp: u,
      shouldUseVirtualFocus: c,
      focus: d,
      isDisabled: h,
      onAction: m,
      allowsDifferentPressOrigin: v,
      linkBehavior: b = "action",
    } = t,
    g = U1();
  n = Wl(n);
  let T = (O) => {
    if (O.pointerType === "keyboard" && Vh(O)) a.toggleSelection(l);
    else {
      if (a.selectionMode === "none") return;
      if (a.isLink(l)) {
        if (b === "selection" && r.current) {
          let te = a.getItemProps(l);
          g.open(r.current, O, te.href, te.routerOptions),
            a.setSelectedKeys(a.selectedKeys);
          return;
        } else if (b === "override" || b === "none") return;
      }
      a.selectionMode === "single"
        ? a.isSelected(l) && !a.disallowEmptySelection
          ? a.toggleSelection(l)
          : a.replaceSelection(l)
        : O && O.shiftKey
          ? a.extendSelection(l)
          : a.selectionBehavior === "toggle" ||
              (O &&
                (zl(O) ||
                  O.pointerType === "touch" ||
                  O.pointerType === "virtual"))
            ? a.toggleSelection(l)
            : a.replaceSelection(l);
    }
  };
  S.useEffect(() => {
    l === a.focusedKey &&
      a.isFocused &&
      (c
        ? aE(r.current)
        : d
          ? d()
          : document.activeElement !== r.current && r.current && Ku(r.current));
  }, [r, l, a.focusedKey, a.childFocusStrategy, a.isFocused, c]),
    (h = h || a.isDisabled(l));
  let x = {};
  !c && !h
    ? (x = {
        tabIndex: l === a.focusedKey ? 0 : -1,
        onFocus(O) {
          O.target === r.current && a.setFocusedKey(l);
        },
      })
    : h &&
      (x.onMouseDown = (O) => {
        O.preventDefault();
      });
  let C = a.isLink(l) && b === "override",
    A = a.isLink(l) && b !== "selection" && b !== "none",
    M = !h && a.canSelectItem(l) && !C,
    V = (m || A) && !h,
    P = V && (a.selectionBehavior === "replace" ? !M : !M || a.isEmpty),
    z = V && M && a.selectionBehavior === "replace",
    R = P || z,
    B = S.useRef(null),
    X = R && M,
    w = S.useRef(!1),
    G = S.useRef(!1),
    W = (O) => {
      if ((m && m(), A && r.current)) {
        let te = a.getItemProps(l);
        g.open(r.current, O, te.href, te.routerOptions);
      }
    },
    D = { ref: r };
  u
    ? ((D.onPressStart = (O) => {
        (B.current = O.pointerType),
          (w.current = X),
          O.pointerType === "keyboard" && (!R || t1()) && T(O);
      }),
      v
        ? ((D.onPressUp = P
            ? void 0
            : (O) => {
                O.pointerType === "mouse" && M && T(O);
              }),
          (D.onPress = P
            ? W
            : (O) => {
                O.pointerType !== "keyboard" &&
                  O.pointerType !== "mouse" &&
                  M &&
                  T(O);
              }))
        : (D.onPress = (O) => {
            if (P || (z && O.pointerType !== "mouse")) {
              if (O.pointerType === "keyboard" && !e1()) return;
              W(O);
            } else O.pointerType !== "keyboard" && M && T(O);
          }))
    : ((D.onPressStart = (O) => {
        (B.current = O.pointerType),
          (w.current = X),
          (G.current = P),
          M &&
            ((O.pointerType === "mouse" && !P) ||
              (O.pointerType === "keyboard" && (!V || t1()))) &&
            T(O);
      }),
      (D.onPress = (O) => {
        (O.pointerType === "touch" ||
          O.pointerType === "pen" ||
          O.pointerType === "virtual" ||
          (O.pointerType === "keyboard" && R && e1()) ||
          (O.pointerType === "mouse" && G.current)) &&
          (R ? W(O) : M && T(O));
      })),
    (x["data-collection"] = VD(a.collection)),
    (x["data-key"] = l),
    (D.preventFocusOnPress = c),
    c &&
      (D = Wt(D, {
        onPressStart(O) {
          O.pointerType !== "touch" && (a.setFocused(!0), a.setFocusedKey(l));
        },
        onPress(O) {
          O.pointerType === "touch" && (a.setFocused(!0), a.setFocusedKey(l));
        },
      }));
  let { pressProps: F, isPressed: _ } = Hu(D),
    H = z
      ? (O) => {
          B.current === "mouse" &&
            (O.stopPropagation(), O.preventDefault(), W(O));
        }
      : void 0,
    { longPressProps: Z } = Qw({
      isDisabled: !X,
      onLongPress(O) {
        O.pointerType === "touch" && (T(O), a.setSelectionBehavior("toggle"));
      },
    }),
    $ = (O) => {
      B.current === "touch" && w.current && O.preventDefault();
    },
    N = a.isLink(l)
      ? (O) => {
          ka.isOpening || O.preventDefault();
        }
      : void 0;
  return {
    itemProps: Wt(
      x,
      M || P || c ? F : {},
      X ? Z : {},
      { onDoubleClick: H, onDragStartCapture: $, onClick: N, id: n },
      c ? { onMouseDown: (O) => O.preventDefault() } : void 0,
    ),
    isPressed: _,
    isSelected: a.isSelected(l),
    isFocused: a.isFocused && a.focusedKey === l,
    isDisabled: h,
    allowsSelection: M,
    hasAction: R,
  };
}
function e1() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function t1() {
  let t = window.event;
  return (
    (t == null ? void 0 : t.key) === " " ||
    (t == null ? void 0 : t.code) === "Space"
  );
}
class n1 {
  getItemRect(n) {
    let a = this.ref.current;
    if (!a) return null;
    let l = n != null ? Au(this.ref, n) : null;
    if (!l) return null;
    let r = a.getBoundingClientRect(),
      u = l.getBoundingClientRect();
    return {
      x: u.left - r.left + a.scrollLeft,
      y: u.top - r.top + a.scrollTop,
      width: u.width,
      height: u.height,
    };
  }
  getContentSize() {
    let n = this.ref.current;
    var a, l;
    return {
      width:
        (a = n == null ? void 0 : n.scrollWidth) !== null && a !== void 0
          ? a
          : 0,
      height:
        (l = n == null ? void 0 : n.scrollHeight) !== null && l !== void 0
          ? l
          : 0,
    };
  }
  getVisibleRect() {
    let n = this.ref.current;
    var a, l, r, u;
    return {
      x:
        (a = n == null ? void 0 : n.scrollLeft) !== null && a !== void 0
          ? a
          : 0,
      y:
        (l = n == null ? void 0 : n.scrollTop) !== null && l !== void 0 ? l : 0,
      width:
        (r = n == null ? void 0 : n.offsetWidth) !== null && r !== void 0
          ? r
          : 0,
      height:
        (u = n == null ? void 0 : n.offsetHeight) !== null && u !== void 0
          ? u
          : 0,
    };
  }
  constructor(n) {
    this.ref = n;
  }
}
class UD {
  isDisabled(n) {
    var a;
    return (
      this.disabledBehavior === "all" &&
      (((a = n.props) === null || a === void 0 ? void 0 : a.isDisabled) ||
        this.disabledKeys.has(n.key))
    );
  }
  findNextNonDisabled(n, a) {
    let l = n;
    for (; l != null; ) {
      let r = this.collection.getItem(l);
      if ((r == null ? void 0 : r.type) === "item" && !this.isDisabled(r))
        return l;
      l = a(l);
    }
    return null;
  }
  getNextKey(n) {
    let a = n;
    return (
      (a = this.collection.getKeyAfter(a)),
      this.findNextNonDisabled(a, (l) => this.collection.getKeyAfter(l))
    );
  }
  getPreviousKey(n) {
    let a = n;
    return (
      (a = this.collection.getKeyBefore(a)),
      this.findNextNonDisabled(a, (l) => this.collection.getKeyBefore(l))
    );
  }
  findKey(n, a, l) {
    let r = n,
      u = this.layoutDelegate.getItemRect(r);
    if (!u || r == null) return null;
    let c = u;
    do {
      if (((r = a(r)), r == null)) break;
      u = this.layoutDelegate.getItemRect(r);
    } while (u && l(c, u) && r != null);
    return r;
  }
  isSameRow(n, a) {
    return n.y === a.y || n.x !== a.x;
  }
  isSameColumn(n, a) {
    return n.x === a.x || n.y !== a.y;
  }
  getKeyBelow(n) {
    return this.layout === "grid" && this.orientation === "vertical"
      ? this.findKey(n, (a) => this.getNextKey(a), this.isSameRow)
      : this.getNextKey(n);
  }
  getKeyAbove(n) {
    return this.layout === "grid" && this.orientation === "vertical"
      ? this.findKey(n, (a) => this.getPreviousKey(a), this.isSameRow)
      : this.getPreviousKey(n);
  }
  getNextColumn(n, a) {
    return a ? this.getPreviousKey(n) : this.getNextKey(n);
  }
  getKeyRightOf(n) {
    let a = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    return this.layoutDelegate[a]
      ? ((n = this.layoutDelegate[a](n)),
        this.findNextNonDisabled(n, (l) => this.layoutDelegate[a](l)))
      : this.layout === "grid"
        ? this.orientation === "vertical"
          ? this.getNextColumn(n, this.direction === "rtl")
          : this.findKey(
              n,
              (l) => this.getNextColumn(l, this.direction === "rtl"),
              this.isSameColumn,
            )
        : this.orientation === "horizontal"
          ? this.getNextColumn(n, this.direction === "rtl")
          : null;
  }
  getKeyLeftOf(n) {
    let a = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    return this.layoutDelegate[a]
      ? ((n = this.layoutDelegate[a](n)),
        this.findNextNonDisabled(n, (l) => this.layoutDelegate[a](l)))
      : this.layout === "grid"
        ? this.orientation === "vertical"
          ? this.getNextColumn(n, this.direction === "ltr")
          : this.findKey(
              n,
              (l) => this.getNextColumn(l, this.direction === "ltr"),
              this.isSameColumn,
            )
        : this.orientation === "horizontal"
          ? this.getNextColumn(n, this.direction === "ltr")
          : null;
  }
  getFirstKey() {
    let n = this.collection.getFirstKey();
    return this.findNextNonDisabled(n, (a) => this.collection.getKeyAfter(a));
  }
  getLastKey() {
    let n = this.collection.getLastKey();
    return this.findNextNonDisabled(n, (a) => this.collection.getKeyBefore(a));
  }
  getKeyPageAbove(n) {
    let a = this.ref.current,
      l = this.layoutDelegate.getItemRect(n);
    if (!l) return null;
    if (a && !ah(a)) return this.getFirstKey();
    let r = n;
    if (this.orientation === "horizontal") {
      let u = Math.max(
        0,
        l.x + l.width - this.layoutDelegate.getVisibleRect().width,
      );
      for (; l && l.x > u && r != null; )
        (r = this.getKeyAbove(r)),
          (l = r == null ? null : this.layoutDelegate.getItemRect(r));
    } else {
      let u = Math.max(
        0,
        l.y + l.height - this.layoutDelegate.getVisibleRect().height,
      );
      for (; l && l.y > u && r != null; )
        (r = this.getKeyAbove(r)),
          (l = r == null ? null : this.layoutDelegate.getItemRect(r));
    }
    return r ?? this.getFirstKey();
  }
  getKeyPageBelow(n) {
    let a = this.ref.current,
      l = this.layoutDelegate.getItemRect(n);
    if (!l) return null;
    if (a && !ah(a)) return this.getLastKey();
    let r = n;
    if (this.orientation === "horizontal") {
      let u = Math.min(
        this.layoutDelegate.getContentSize().width,
        l.y - l.width + this.layoutDelegate.getVisibleRect().width,
      );
      for (; l && l.x < u && r != null; )
        (r = this.getKeyBelow(r)),
          (l = r == null ? null : this.layoutDelegate.getItemRect(r));
    } else {
      let u = Math.min(
        this.layoutDelegate.getContentSize().height,
        l.y - l.height + this.layoutDelegate.getVisibleRect().height,
      );
      for (; l && l.y < u && r != null; )
        (r = this.getKeyBelow(r)),
          (l = r == null ? null : this.layoutDelegate.getItemRect(r));
    }
    return r ?? this.getLastKey();
  }
  getKeyForSearch(n, a) {
    if (!this.collator) return null;
    let l = this.collection,
      r = a || this.getFirstKey();
    for (; r != null; ) {
      let u = l.getItem(r);
      if (!u) return null;
      let c = u.textValue.slice(0, n.length);
      if (u.textValue && this.collator.compare(c, n) === 0) return r;
      r = this.getNextKey(r);
    }
    return null;
  }
  constructor(...n) {
    if (n.length === 1) {
      let a = n[0];
      (this.collection = a.collection),
        (this.ref = a.ref),
        (this.collator = a.collator),
        (this.disabledKeys = a.disabledKeys || new Set()),
        (this.disabledBehavior = a.disabledBehavior || "all"),
        (this.orientation = a.orientation || "vertical"),
        (this.direction = a.direction),
        (this.layout = a.layout || "stack"),
        (this.layoutDelegate = a.layoutDelegate || new n1(a.ref));
    } else
      (this.collection = n[0]),
        (this.disabledKeys = n[1]),
        (this.ref = n[2]),
        (this.collator = n[3]),
        (this.layout = "stack"),
        (this.orientation = "vertical"),
        (this.disabledBehavior = "all"),
        (this.layoutDelegate = new n1(this.ref));
    this.layout === "stack" &&
      this.orientation === "vertical" &&
      ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
  }
}
function KD(t) {
  let {
      selectionManager: n,
      collection: a,
      disabledKeys: l,
      ref: r,
      keyboardDelegate: u,
      layoutDelegate: c,
    } = t,
    d = Y4({ usage: "search", sensitivity: "base" }),
    h = n.disabledBehavior,
    m = S.useMemo(
      () =>
        u ||
        new UD({
          collection: a,
          disabledKeys: l,
          disabledBehavior: h,
          ref: r,
          collator: d,
          layoutDelegate: c,
        }),
      [u, c, a, l, r, d, h],
    ),
    { collectionProps: v } = sE({
      ...t,
      ref: r,
      selectionManager: n,
      keyboardDelegate: m,
    });
  return { listProps: v };
}
function jD(t) {
  var n, a;
  const l = Ft(),
    [r, u] = An(t, kb.variantKeys),
    {
      ref: c,
      as: d,
      src: h,
      className: m,
      classNames: v,
      loading: b,
      isBlurred: g,
      fallbackSrc: T,
      isLoading: x,
      disableSkeleton: C = !!T,
      removeWrapper: A = !1,
      onError: M,
      onLoad: V,
      srcSet: P,
      sizes: z,
      crossOrigin: R,
      ...B
    } = r,
    X = W2({
      src: h,
      loading: b,
      onError: M,
      onLoad: V,
      ignoreFallback: !1,
      srcSet: P,
      sizes: z,
      crossOrigin: R,
    }),
    w =
      (a =
        (n = t.disableAnimation) != null
          ? n
          : l == null
            ? void 0
            : l.disableAnimation) != null
        ? a
        : !1,
    G = X === "loaded" && !x,
    W = X === "loading" || x,
    D = t.isZoomed,
    F = d || "img",
    _ = pt(c),
    { w: H, h: Z } = S.useMemo(
      () => ({
        w: r.width
          ? typeof r.width == "number"
            ? `${r.width}px`
            : r.width
          : "fit-content",
        h: r.height
          ? typeof r.height == "number"
            ? `${r.height}px`
            : r.height
          : "auto",
      }),
      [r == null ? void 0 : r.width, r == null ? void 0 : r.height],
    ),
    $ = (!h || !G) && !!T,
    N = W && !C,
    O = S.useMemo(
      () => kb({ ...u, disableAnimation: w, showSkeleton: N }),
      [Pn(u), w, N],
    ),
    te = Te(m, v == null ? void 0 : v.img),
    ne = (le = {}) => {
      const se = Te(te, le == null ? void 0 : le.className);
      return {
        src: h,
        ref: _,
        "data-loaded": ie(G),
        className: O.img({ class: se }),
        loading: b,
        srcSet: P,
        sizes: z,
        crossOrigin: R,
        ...B,
        style: {
          ...((B == null ? void 0 : B.height) && { height: Z }),
          ...le.style,
          ...B.style,
        },
      };
    },
    oe = S.useCallback(() => {
      const le = $ ? { backgroundImage: `url(${T})` } : {};
      return {
        className: O.wrapper({ class: v == null ? void 0 : v.wrapper }),
        style: { ...le, maxWidth: H },
      };
    }, [O, $, T, v == null ? void 0 : v.wrapper, H]),
    re = S.useCallback(
      () => ({
        src: h,
        "aria-hidden": ie(!0),
        className: O.blurredImg({ class: v == null ? void 0 : v.blurredImg }),
      }),
      [O, h, v == null ? void 0 : v.blurredImg],
    );
  return {
    Component: F,
    domRef: _,
    slots: O,
    classNames: v,
    isBlurred: g,
    disableSkeleton: C,
    fallbackSrc: T,
    removeWrapper: A,
    isZoomed: D,
    isLoading: W,
    getImgProps: ne,
    getWrapperProps: oe,
    getBlurredImgProps: re,
  };
}
var oE = et((t, n) => {
  const {
      Component: a,
      domRef: l,
      slots: r,
      classNames: u,
      isBlurred: c,
      isZoomed: d,
      fallbackSrc: h,
      removeWrapper: m,
      disableSkeleton: v,
      getImgProps: b,
      getWrapperProps: g,
      getBlurredImgProps: T,
    } = jD({ ...t, ref: n }),
    x = U.jsx(a, { ref: l, ...b() });
  if (m) return x;
  const C = U.jsx("div", {
    className: r.zoomedWrapper({ class: u == null ? void 0 : u.zoomedWrapper }),
    children: x,
  });
  return c
    ? U.jsxs("div", { ...g(), children: [d ? C : x, S.cloneElement(x, T())] })
    : d || !v || h
      ? U.jsxs("div", { ...g(), children: [" ", d ? C : x] })
      : x;
});
oE.displayName = "HeroUI.Image";
var uP = oE,
  [FD, cc] = zr({
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`",
  }),
  uE = et((t, n) => {
    const { as: a, children: l, className: r, ...u } = t,
      { slots: c, classNames: d, bodyId: h, setBodyMounted: m } = cc(),
      v = pt(n),
      b = a || "div";
    return (
      S.useEffect(() => (m(!0), () => m(!1)), [m]),
      U.jsx(b, {
        ref: v,
        className: c.body({ class: Te(d == null ? void 0 : d.body, r) }),
        id: h,
        ...u,
        children: l,
      })
    );
  });
uE.displayName = "HeroUI.ModalBody";
var cP = uE,
  ID = {
    enter: {
      scale: "var(--scale-enter)",
      y: "var(--slide-enter)",
      opacity: 1,
      willChange: "auto",
      transition: {
        scale: { duration: 0.4, ease: za.ease },
        opacity: { duration: 0.4, ease: za.ease },
        y: { type: "spring", bounce: 0, duration: 0.6 },
      },
    },
    exit: {
      scale: "var(--scale-exit)",
      y: "var(--slide-exit)",
      opacity: 0,
      willChange: "transform",
      transition: { duration: 0.3, ease: za.ease },
    },
  },
  i1 = () =>
    Hh(() => Promise.resolve().then(() => qp), void 0).then((t) => t.default),
  cE = (t) => {
    const { as: n, children: a, role: l = "dialog", ...r } = t,
      {
        Component: u,
        domRef: c,
        slots: d,
        classNames: h,
        motionProps: m,
        backdrop: v,
        closeButton: b,
        hideCloseButton: g,
        disableAnimation: T,
        getDialogProps: x,
        getBackdropProps: C,
        getCloseButtonProps: A,
        onClose: M,
      } = cc(),
      V = n || u || "div",
      P = K3(),
      { dialogProps: z } = AD({ role: l }, c),
      R = S.isValidElement(b)
        ? S.cloneElement(b, A())
        : U.jsx("button", { ...A(), children: U.jsx(Q2, {}) }),
      B = S.useCallback((F) => {
        F.key === "Tab" &&
          F.nativeEvent.isComposing &&
          (F.stopPropagation(), F.preventDefault());
      }, []),
      X = x(pe(z, r)),
      w = U.jsxs(V, {
        ...X,
        onKeyDown: Bt(X.onKeyDown, B),
        children: [
          U.jsx(Og, { onDismiss: M }),
          !g && R,
          typeof a == "function" ? a(M) : a,
          U.jsx(Og, { onDismiss: M }),
        ],
      }),
      G = S.useMemo(
        () =>
          v === "transparent"
            ? null
            : T
              ? U.jsx("div", { ...C() })
              : U.jsx(Pr, {
                  features: i1,
                  children: U.jsx(Or.div, {
                    animate: "enter",
                    exit: "exit",
                    initial: "exit",
                    variants: zx.fade,
                    ...C(),
                  }),
                }),
        [v, T, C],
      ),
      W = { "--visual-viewport-height": P.height + "px" },
      D = T
        ? U.jsx("div", {
            className: d.wrapper({ class: h == null ? void 0 : h.wrapper }),
            "data-slot": "wrapper",
            style: W,
            children: w,
          })
        : U.jsx(Pr, {
            features: i1,
            children: U.jsx(Or.div, {
              animate: "enter",
              className: d.wrapper({ class: h == null ? void 0 : h.wrapper }),
              "data-slot": "wrapper",
              exit: "exit",
              initial: "exit",
              variants: ID,
              ...m,
              style: W,
              children: w,
            }),
          });
    return U.jsxs("div", { tabIndex: -1, children: [G, D] });
  };
cE.displayName = "HeroUI.ModalContent";
var fP = cE,
  fE = et((t, n) => {
    const { as: a, children: l, className: r, ...u } = t,
      { slots: c, classNames: d } = cc(),
      h = pt(n),
      m = a || "footer";
    return U.jsx(m, {
      ref: h,
      className: c.footer({ class: Te(d == null ? void 0 : d.footer, r) }),
      ...u,
      children: l,
    });
  });
fE.displayName = "HeroUI.ModalFooter";
var dP = fE,
  dE = et((t, n) => {
    const { as: a, children: l, className: r, ...u } = t,
      { slots: c, classNames: d, headerId: h, setHeaderMounted: m } = cc(),
      v = pt(n),
      b = a || "header";
    return (
      S.useEffect(() => (m(!0), () => m(!1)), [m]),
      U.jsx(b, {
        ref: v,
        className: c.header({ class: Te(d == null ? void 0 : d.header, r) }),
        id: h,
        ...u,
        children: l,
      })
    );
  });
dE.displayName = "HeroUI.ModalHeader";
var hP = dE;
function GD(t = { shouldBlockScroll: !0 }, n, a) {
  let { overlayProps: l, underlayProps: r } = rS(
    { ...t, isOpen: n.isOpen, onClose: n.close },
    a,
  );
  return (
    Aw({ isDisabled: !n.isOpen || !t.shouldBlockScroll }),
    JS(),
    S.useEffect(() => {
      if (n.isOpen && a.current) return nC([a.current]);
    }, [n.isOpen, a]),
    { modalProps: pe(l), underlayProps: r }
  );
}
function YD(t) {
  var n, a, l;
  const r = Ft(),
    [u, c] = An(t, Hb.variantKeys),
    {
      ref: d,
      as: h,
      className: m,
      classNames: v,
      isOpen: b,
      defaultOpen: g,
      onOpenChange: T,
      motionProps: x,
      closeButton: C,
      isDismissable: A = !0,
      hideCloseButton: M = !1,
      shouldBlockScroll: V = !0,
      portalContainer: P,
      isKeyboardDismissDisabled: z = !1,
      onClose: R,
      ...B
    } = u,
    X = h || "section",
    w = pt(d),
    G = S.useRef(null),
    [W, D] = S.useState(!1),
    [F, _] = S.useState(!1),
    H =
      (a =
        (n = t.disableAnimation) != null
          ? n
          : r == null
            ? void 0
            : r.disableAnimation) != null
        ? a
        : !1,
    Z = S.useId(),
    $ = S.useId(),
    N = S.useId(),
    O = J2({
      isOpen: b,
      defaultOpen: g,
      onOpenChange: (me) => {
        T == null || T(me), me || R == null || R();
      },
    }),
    { modalProps: te, underlayProps: ne } = GD(
      { isDismissable: A, shouldBlockScroll: V, isKeyboardDismissDisabled: z },
      O,
      w,
    ),
    { buttonProps: oe } = Up({ onPress: O.close }, G),
    { isFocusVisible: re, focusProps: le } = Kn(),
    se = Te(v == null ? void 0 : v.base, m),
    de = S.useMemo(() => Hb({ ...c, disableAnimation: H }), [Pn(c), H]),
    ce = (me = {}, De = null) => {
      var ae;
      return {
        ref: w1(De, w),
        ...pe(te, B, me),
        className: de.base({ class: Te(se, me.className) }),
        id: Z,
        "data-open": ie(O.isOpen),
        "data-dismissable": ie(A),
        "aria-modal": ie(!0),
        "data-placement":
          (ae = t == null ? void 0 : t.placement) != null ? ae : "right",
        "aria-labelledby": W ? $ : void 0,
        "aria-describedby": F ? N : void 0,
      };
    },
    Pe = S.useCallback(
      (me = {}) => ({
        className: de.backdrop({ class: v == null ? void 0 : v.backdrop }),
        onClick: () => O.close(),
        ...ne,
        ...me,
      }),
      [de, v, ne],
    ),
    Oe = () => ({
      role: "button",
      tabIndex: 0,
      "aria-label": "Close",
      "data-focus-visible": ie(re),
      className: de.closeButton({ class: v == null ? void 0 : v.closeButton }),
      ...pe(oe, le),
    });
  return {
    Component: X,
    slots: de,
    domRef: w,
    headerId: $,
    bodyId: N,
    motionProps: x,
    classNames: v,
    isDismissable: A,
    closeButton: C,
    hideCloseButton: M,
    portalContainer: P,
    shouldBlockScroll: V,
    backdrop: (l = t.backdrop) != null ? l : "opaque",
    isOpen: O.isOpen,
    onClose: O.close,
    disableAnimation: H,
    setBodyMounted: _,
    setHeaderMounted: D,
    getDialogProps: ce,
    getBackdropProps: Pe,
    getCloseButtonProps: Oe,
  };
}
var hE = et((t, n) => {
  const { children: a, ...l } = t,
    r = YD({ ...l, ref: n }),
    u = U.jsx(lC, { portalContainer: r.portalContainer, children: a });
  return U.jsx(FD, {
    value: r,
    children:
      r.disableAnimation && r.isOpen
        ? u
        : U.jsx(up, { children: r.isOpen ? u : null }),
  });
});
hE.displayName = "HeroUI.Modal";
var qD = hE;
function pP(t = {}) {
  const {
      id: n,
      defaultOpen: a,
      isOpen: l,
      onClose: r,
      onOpen: u,
      onChange: c = () => {},
    } = t,
    d = Zd(u),
    h = Zd(r),
    [m, v] = jh(l, a || !1, c),
    b = S.useId(),
    g = n || b,
    T = l !== void 0,
    x = S.useCallback(() => {
      T || v(!1), h == null || h();
    }, [T, h]),
    C = S.useCallback(() => {
      T || v(!0), d == null || d();
    }, [T, d]),
    A = S.useCallback(() => {
      (m ? x : C)();
    }, [m, C, x]);
  return {
    isOpen: !!m,
    onOpen: C,
    onClose: x,
    onOpenChange: A,
    isControlled: T,
    getButtonProps: (M = {}) => ({
      ...M,
      "aria-expanded": m,
      "aria-controls": g,
      onClick: Bt(M.onClick, A),
    }),
    getDisclosureProps: (M = {}) => ({ ...M, hidden: !m, id: g }),
  };
}
function Ol(t, n, a) {
  let l = a.initialDeps ?? [],
    r;
  return () => {
    var u, c, d, h;
    let m;
    a.key && (u = a.debug) != null && u.call(a) && (m = Date.now());
    const v = t();
    if (!(v.length !== l.length || v.some((T, x) => l[x] !== T))) return r;
    l = v;
    let g;
    if (
      (a.key && (c = a.debug) != null && c.call(a) && (g = Date.now()),
      (r = n(...v)),
      a.key && (d = a.debug) != null && d.call(a))
    ) {
      const T = Math.round((Date.now() - m) * 100) / 100,
        x = Math.round((Date.now() - g) * 100) / 100,
        C = x / 16,
        A = (M, V) => {
          for (M = String(M); M.length < V; ) M = " " + M;
          return M;
        };
      console.info(
        `%c⏱ ${A(x, 5)} /${A(T, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * C, 120))}deg 100% 31%);`,
        a == null ? void 0 : a.key,
      );
    }
    return (h = a == null ? void 0 : a.onChange) == null || h.call(a, r), r;
  };
}
function qd(t, n) {
  if (t === void 0) throw new Error("Unexpected undefined");
  return t;
}
const XD = (t, n) => Math.abs(t - n) < 1,
  ZD = (t, n, a) => {
    let l;
    return function (...r) {
      t.clearTimeout(l), (l = t.setTimeout(() => n.apply(this, r), a));
    };
  },
  WD = (t) => t,
  QD = (t) => {
    const n = Math.max(t.startIndex - t.overscan, 0),
      a = Math.min(t.endIndex + t.overscan, t.count - 1),
      l = [];
    for (let r = n; r <= a; r++) l.push(r);
    return l;
  },
  JD = (t, n) => {
    const a = t.scrollElement;
    if (!a) return;
    const l = t.targetWindow;
    if (!l) return;
    const r = (c) => {
      const { width: d, height: h } = c;
      n({ width: Math.round(d), height: Math.round(h) });
    };
    if ((r(a.getBoundingClientRect()), !l.ResizeObserver)) return () => {};
    const u = new l.ResizeObserver((c) => {
      const d = c[0];
      if (d != null && d.borderBoxSize) {
        const h = d.borderBoxSize[0];
        if (h) {
          r({ width: h.inlineSize, height: h.blockSize });
          return;
        }
      }
      r(a.getBoundingClientRect());
    });
    return (
      u.observe(a, { box: "border-box" }),
      () => {
        u.unobserve(a);
      }
    );
  },
  a1 = { passive: !0 },
  e8 = typeof window > "u" ? !0 : "onscrollend" in window,
  t8 = (t, n) => {
    const a = t.scrollElement;
    if (!a) return;
    const l = t.targetWindow;
    if (!l) return;
    let r = 0;
    const u =
        t.options.useScrollendEvent && e8
          ? () => {}
          : ZD(
              l,
              () => {
                n(r, !1);
              },
              t.options.isScrollingResetDelay,
            ),
      c = (m) => () => {
        const { horizontal: v, isRtl: b } = t.options;
        (r = v ? a.scrollLeft * ((b && -1) || 1) : a.scrollTop), u(), n(r, m);
      },
      d = c(!0),
      h = c(!1);
    return (
      h(),
      a.addEventListener("scroll", d, a1),
      a.addEventListener("scrollend", h, a1),
      () => {
        a.removeEventListener("scroll", d),
          a.removeEventListener("scrollend", h);
      }
    );
  },
  n8 = (t, n, a) => {
    if (n != null && n.borderBoxSize) {
      const l = n.borderBoxSize[0];
      if (l)
        return Math.round(l[a.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return Math.round(
      t.getBoundingClientRect()[a.options.horizontal ? "width" : "height"],
    );
  },
  i8 = (t, { adjustments: n = 0, behavior: a }, l) => {
    var r, u;
    const c = t + n;
    (u = (r = l.scrollElement) == null ? void 0 : r.scrollTo) == null ||
      u.call(r, { [l.options.horizontal ? "left" : "top"]: c, behavior: a });
  };
class a8 {
  constructor(n) {
    (this.unsubs = []),
      (this.scrollElement = null),
      (this.targetWindow = null),
      (this.isScrolling = !1),
      (this.scrollToIndexTimeoutId = null),
      (this.measurementsCache = []),
      (this.itemSizeCache = new Map()),
      (this.pendingMeasuredCacheIndexes = []),
      (this.scrollRect = null),
      (this.scrollOffset = null),
      (this.scrollDirection = null),
      (this.scrollAdjustments = 0),
      (this.elementsCache = new Map()),
      (this.observer = (() => {
        let a = null;
        const l = () =>
          a ||
          (!this.targetWindow || !this.targetWindow.ResizeObserver
            ? null
            : (a = new this.targetWindow.ResizeObserver((r) => {
                r.forEach((u) => {
                  this._measureElement(u.target, u);
                });
              })));
        return {
          disconnect: () => {
            var r;
            (r = l()) == null || r.disconnect(), (a = null);
          },
          observe: (r) => {
            var u;
            return (u = l()) == null
              ? void 0
              : u.observe(r, { box: "border-box" });
          },
          unobserve: (r) => {
            var u;
            return (u = l()) == null ? void 0 : u.unobserve(r);
          },
        };
      })()),
      (this.range = null),
      (this.setOptions = (a) => {
        Object.entries(a).forEach(([l, r]) => {
          typeof r > "u" && delete a[l];
        }),
          (this.options = {
            debug: !1,
            initialOffset: 0,
            overscan: 1,
            paddingStart: 0,
            paddingEnd: 0,
            scrollPaddingStart: 0,
            scrollPaddingEnd: 0,
            horizontal: !1,
            getItemKey: WD,
            rangeExtractor: QD,
            onChange: () => {},
            measureElement: n8,
            initialRect: { width: 0, height: 0 },
            scrollMargin: 0,
            gap: 0,
            indexAttribute: "data-index",
            initialMeasurementsCache: [],
            lanes: 1,
            isScrollingResetDelay: 150,
            enabled: !0,
            isRtl: !1,
            useScrollendEvent: !0,
            ...a,
          });
      }),
      (this.notify = (a) => {
        var l, r;
        (r = (l = this.options).onChange) == null || r.call(l, this, a);
      }),
      (this.maybeNotify = Ol(
        () => (
          this.calculateRange(),
          [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null,
          ]
        ),
        (a) => {
          this.notify(a);
        },
        {
          key: !1,
          debug: () => this.options.debug,
          initialDeps: [
            this.isScrolling,
            this.range ? this.range.startIndex : null,
            this.range ? this.range.endIndex : null,
          ],
        },
      )),
      (this.cleanup = () => {
        this.unsubs.filter(Boolean).forEach((a) => a()),
          (this.unsubs = []),
          this.observer.disconnect(),
          (this.scrollElement = null),
          (this.targetWindow = null);
      }),
      (this._didMount = () => () => {
        this.cleanup();
      }),
      (this._willUpdate = () => {
        var a;
        const l = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== l) {
          if ((this.cleanup(), !l)) {
            this.maybeNotify();
            return;
          }
          (this.scrollElement = l),
            this.scrollElement && "ownerDocument" in this.scrollElement
              ? (this.targetWindow =
                  this.scrollElement.ownerDocument.defaultView)
              : (this.targetWindow =
                  ((a = this.scrollElement) == null ? void 0 : a.window) ??
                  null),
            this.elementsCache.forEach((r) => {
              this.observer.observe(r);
            }),
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: void 0,
              behavior: void 0,
            }),
            this.unsubs.push(
              this.options.observeElementRect(this, (r) => {
                (this.scrollRect = r), this.maybeNotify();
              }),
            ),
            this.unsubs.push(
              this.options.observeElementOffset(this, (r, u) => {
                (this.scrollAdjustments = 0),
                  (this.scrollDirection = u
                    ? this.getScrollOffset() < r
                      ? "forward"
                      : "backward"
                    : null),
                  (this.scrollOffset = r),
                  (this.isScrolling = u),
                  this.maybeNotify();
              }),
            );
        }
      }),
      (this.getSize = () =>
        this.options.enabled
          ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect),
            this.scrollRect[this.options.horizontal ? "width" : "height"])
          : ((this.scrollRect = null), 0)),
      (this.getScrollOffset = () =>
        this.options.enabled
          ? ((this.scrollOffset =
              this.scrollOffset ??
              (typeof this.options.initialOffset == "function"
                ? this.options.initialOffset()
                : this.options.initialOffset)),
            this.scrollOffset)
          : ((this.scrollOffset = null), 0)),
      (this.getFurthestMeasurement = (a, l) => {
        const r = new Map(),
          u = new Map();
        for (let c = l - 1; c >= 0; c--) {
          const d = a[c];
          if (r.has(d.lane)) continue;
          const h = u.get(d.lane);
          if (
            (h == null || d.end > h.end
              ? u.set(d.lane, d)
              : d.end < h.end && r.set(d.lane, !0),
            r.size === this.options.lanes)
          )
            break;
        }
        return u.size === this.options.lanes
          ? Array.from(u.values()).sort((c, d) =>
              c.end === d.end ? c.index - d.index : c.end - d.end,
            )[0]
          : void 0;
      }),
      (this.getMeasurementOptions = Ol(
        () => [
          this.options.count,
          this.options.paddingStart,
          this.options.scrollMargin,
          this.options.getItemKey,
          this.options.enabled,
        ],
        (a, l, r, u, c) => (
          (this.pendingMeasuredCacheIndexes = []),
          {
            count: a,
            paddingStart: l,
            scrollMargin: r,
            getItemKey: u,
            enabled: c,
          }
        ),
        { key: !1 },
      )),
      (this.getMeasurements = Ol(
        () => [this.getMeasurementOptions(), this.itemSizeCache],
        (
          {
            count: a,
            paddingStart: l,
            scrollMargin: r,
            getItemKey: u,
            enabled: c,
          },
          d,
        ) => {
          if (!c)
            return (
              (this.measurementsCache = []), this.itemSizeCache.clear(), []
            );
          this.measurementsCache.length === 0 &&
            ((this.measurementsCache = this.options.initialMeasurementsCache),
            this.measurementsCache.forEach((v) => {
              this.itemSizeCache.set(v.key, v.size);
            }));
          const h =
            this.pendingMeasuredCacheIndexes.length > 0
              ? Math.min(...this.pendingMeasuredCacheIndexes)
              : 0;
          this.pendingMeasuredCacheIndexes = [];
          const m = this.measurementsCache.slice(0, h);
          for (let v = h; v < a; v++) {
            const b = u(v),
              g =
                this.options.lanes === 1
                  ? m[v - 1]
                  : this.getFurthestMeasurement(m, v),
              T = g ? g.end + this.options.gap : l + r,
              x = d.get(b),
              C = typeof x == "number" ? x : this.options.estimateSize(v),
              A = T + C,
              M = g ? g.lane : v % this.options.lanes;
            m[v] = { index: v, start: T, size: C, end: A, key: b, lane: M };
          }
          return (this.measurementsCache = m), m;
        },
        { key: !1, debug: () => this.options.debug },
      )),
      (this.calculateRange = Ol(
        () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
        (a, l, r) =>
          (this.range =
            a.length > 0 && l > 0
              ? l8({ measurements: a, outerSize: l, scrollOffset: r })
              : null),
        { key: !1, debug: () => this.options.debug },
      )),
      (this.getIndexes = Ol(
        () => {
          let a = null,
            l = null;
          const r = this.calculateRange();
          return (
            r && ((a = r.startIndex), (l = r.endIndex)),
            [
              this.options.rangeExtractor,
              this.options.overscan,
              this.options.count,
              a,
              l,
            ]
          );
        },
        (a, l, r, u, c) =>
          u === null || c === null
            ? []
            : a({ startIndex: u, endIndex: c, overscan: l, count: r }),
        { key: !1, debug: () => this.options.debug },
      )),
      (this.indexFromElement = (a) => {
        const l = this.options.indexAttribute,
          r = a.getAttribute(l);
        return r
          ? parseInt(r, 10)
          : (console.warn(
              `Missing attribute name '${l}={index}' on measured element.`,
            ),
            -1);
      }),
      (this._measureElement = (a, l) => {
        const r = this.indexFromElement(a),
          u = this.measurementsCache[r];
        if (!u) return;
        const c = u.key,
          d = this.elementsCache.get(c);
        d !== a &&
          (d && this.observer.unobserve(d),
          this.observer.observe(a),
          this.elementsCache.set(c, a)),
          a.isConnected &&
            this.resizeItem(r, this.options.measureElement(a, l, this));
      }),
      (this.resizeItem = (a, l) => {
        const r = this.measurementsCache[a];
        if (!r) return;
        const u = this.itemSizeCache.get(r.key) ?? r.size,
          c = l - u;
        c !== 0 &&
          ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0
            ? this.shouldAdjustScrollPositionOnItemSizeChange(r, c, this)
            : r.start < this.getScrollOffset() + this.scrollAdjustments) &&
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: (this.scrollAdjustments += c),
              behavior: void 0,
            }),
          this.pendingMeasuredCacheIndexes.push(r.index),
          (this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, l))),
          this.notify(!1));
      }),
      (this.measureElement = (a) => {
        if (!a) {
          this.elementsCache.forEach((l, r) => {
            l.isConnected ||
              (this.observer.unobserve(l), this.elementsCache.delete(r));
          });
          return;
        }
        this._measureElement(a, void 0);
      }),
      (this.getVirtualItems = Ol(
        () => [this.getIndexes(), this.getMeasurements()],
        (a, l) => {
          const r = [];
          for (let u = 0, c = a.length; u < c; u++) {
            const d = a[u],
              h = l[d];
            r.push(h);
          }
          return r;
        },
        { key: !1, debug: () => this.options.debug },
      )),
      (this.getVirtualItemForOffset = (a) => {
        const l = this.getMeasurements();
        if (l.length !== 0)
          return qd(l[pE(0, l.length - 1, (r) => qd(l[r]).start, a)]);
      }),
      (this.getOffsetForAlignment = (a, l) => {
        const r = this.getSize(),
          u = this.getScrollOffset();
        l === "auto" && a >= u + r && (l = "end"), l === "end" && (a -= r);
        const c = this.options.horizontal ? "scrollWidth" : "scrollHeight",
          h =
            (this.scrollElement
              ? "document" in this.scrollElement
                ? this.scrollElement.document.documentElement[c]
                : this.scrollElement[c]
              : 0) - r;
        return Math.max(Math.min(h, a), 0);
      }),
      (this.getOffsetForIndex = (a, l = "auto") => {
        a = Math.max(0, Math.min(a, this.options.count - 1));
        const r = this.measurementsCache[a];
        if (!r) return;
        const u = this.getSize(),
          c = this.getScrollOffset();
        if (l === "auto")
          if (r.end >= c + u - this.options.scrollPaddingEnd) l = "end";
          else if (r.start <= c + this.options.scrollPaddingStart) l = "start";
          else return [c, l];
        const d = r.start - this.options.scrollPaddingStart + (r.size - u) / 2;
        switch (l) {
          case "center":
            return [this.getOffsetForAlignment(d, l), l];
          case "end":
            return [
              this.getOffsetForAlignment(
                r.end + this.options.scrollPaddingEnd,
                l,
              ),
              l,
            ];
          default:
            return [
              this.getOffsetForAlignment(
                r.start - this.options.scrollPaddingStart,
                l,
              ),
              l,
            ];
        }
      }),
      (this.isDynamicMode = () => this.elementsCache.size > 0),
      (this.cancelScrollToIndex = () => {
        this.scrollToIndexTimeoutId !== null &&
          this.targetWindow &&
          (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
          (this.scrollToIndexTimeoutId = null));
      }),
      (this.scrollToOffset = (a, { align: l = "start", behavior: r } = {}) => {
        this.cancelScrollToIndex(),
          r === "smooth" &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
          this._scrollToOffset(this.getOffsetForAlignment(a, l), {
            adjustments: void 0,
            behavior: r,
          });
      }),
      (this.scrollToIndex = (a, { align: l = "auto", behavior: r } = {}) => {
        (a = Math.max(0, Math.min(a, this.options.count - 1))),
          this.cancelScrollToIndex(),
          r === "smooth" &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            );
        const u = this.getOffsetForIndex(a, l);
        if (!u) return;
        const [c, d] = u;
        this._scrollToOffset(c, { adjustments: void 0, behavior: r }),
          r !== "smooth" &&
            this.isDynamicMode() &&
            this.targetWindow &&
            (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
              if (
                ((this.scrollToIndexTimeoutId = null),
                this.elementsCache.has(this.options.getItemKey(a)))
              ) {
                const [m] = qd(this.getOffsetForIndex(a, d));
                XD(m, this.getScrollOffset()) ||
                  this.scrollToIndex(a, { align: d, behavior: r });
              } else this.scrollToIndex(a, { align: d, behavior: r });
            }));
      }),
      (this.scrollBy = (a, { behavior: l } = {}) => {
        this.cancelScrollToIndex(),
          l === "smooth" &&
            this.isDynamicMode() &&
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size.",
            ),
          this._scrollToOffset(this.getScrollOffset() + a, {
            adjustments: void 0,
            behavior: l,
          });
      }),
      (this.getTotalSize = () => {
        var a;
        const l = this.getMeasurements();
        let r;
        return (
          l.length === 0
            ? (r = this.options.paddingStart)
            : (r =
                this.options.lanes === 1
                  ? (((a = l[l.length - 1]) == null ? void 0 : a.end) ?? 0)
                  : Math.max(
                      ...l.slice(-this.options.lanes).map((u) => u.end),
                    )),
          Math.max(r - this.options.scrollMargin + this.options.paddingEnd, 0)
        );
      }),
      (this._scrollToOffset = (a, { adjustments: l, behavior: r }) => {
        this.options.scrollToFn(a, { behavior: r, adjustments: l }, this);
      }),
      (this.measure = () => {
        (this.itemSizeCache = new Map()), this.notify(!1);
      }),
      this.setOptions(n);
  }
}
const pE = (t, n, a, l) => {
  for (; t <= n; ) {
    const r = ((t + n) / 2) | 0,
      u = a(r);
    if (u < l) t = r + 1;
    else if (u > l) n = r - 1;
    else return r;
  }
  return t > 0 ? t - 1 : 0;
};
function l8({ measurements: t, outerSize: n, scrollOffset: a }) {
  const l = t.length - 1,
    u = pE(0, l, (d) => t[d].start, a);
  let c = u;
  for (; c < l && t[c].end < a + n; ) c++;
  return { startIndex: u, endIndex: c };
}
const l1 = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function s8(t) {
  const n = S.useReducer(() => ({}), {})[1],
    a = {
      ...t,
      onChange: (r, u) => {
        var c;
        u ? ec.flushSync(n) : n(), (c = t.onChange) == null || c.call(t, r, u);
      },
    },
    [l] = S.useState(() => new a8(a));
  return (
    l.setOptions(a), l1(() => l._didMount(), []), l1(() => l._willUpdate()), l
  );
}
function r8(t) {
  return s8({
    observeElementRect: JD,
    observeElementOffset: t8,
    scrollToFn: i8,
    ...t,
  });
}
const mE = new WeakMap();
function Xu(t, n, a) {
  return t
    ? (typeof n == "string" && (n = n.replace(/\s+/g, "")),
      `${mE.get(t)}-${a}-${n}`)
    : "";
}
function o8(t, n, a) {
  let { key: l, isDisabled: r, shouldSelectOnPressUp: u } = t,
    { selectionManager: c, selectedKey: d } = n,
    h = l === d,
    m = r || n.isDisabled || n.selectionManager.isDisabled(l),
    { itemProps: v, isPressed: b } = rE({
      selectionManager: c,
      key: l,
      ref: a,
      isDisabled: m,
      shouldSelectOnPressUp: u,
      linkBehavior: "selection",
    }),
    g = Xu(n, l, "tab"),
    T = Xu(n, l, "tabpanel"),
    { tabIndex: x } = v,
    C = n.collection.getItem(l),
    A = Ci(C == null ? void 0 : C.props, { labelable: !0 });
  delete A.id;
  let M = Yh(C == null ? void 0 : C.props),
    { focusableProps: V } = Kr({ isDisabled: m }, a);
  return {
    tabProps: pe(A, V, M, v, {
      id: g,
      "aria-selected": h,
      "aria-disabled": m || void 0,
      "aria-controls": h ? T : void 0,
      tabIndex: m ? void 0 : x,
      role: "tab",
    }),
    isSelected: h,
    isDisabled: m,
    isPressed: b,
  };
}
function u8(t, n, a) {
  let l = Mw(a) ? void 0 : 0;
  var r;
  const u = Xu(
      n,
      (r = t.id) !== null && r !== void 0
        ? r
        : n == null
          ? void 0
          : n.selectedKey,
      "tabpanel",
    ),
    c = Xh({
      ...t,
      id: u,
      "aria-labelledby": Xu(n, n == null ? void 0 : n.selectedKey, "tab"),
    });
  return {
    tabPanelProps: pe(c, {
      tabIndex: l,
      role: "tabpanel",
      "aria-describedby": t["aria-describedby"],
      "aria-details": t["aria-details"],
    }),
  };
}
class c8 {
  getKeyLeftOf(n) {
    return this.flipDirection ? this.getNextKey(n) : this.getPreviousKey(n);
  }
  getKeyRightOf(n) {
    return this.flipDirection ? this.getPreviousKey(n) : this.getNextKey(n);
  }
  isDisabled(n) {
    var a, l;
    return (
      this.disabledKeys.has(n) ||
      !!(
        !(
          (l = this.collection.getItem(n)) === null ||
          l === void 0 ||
          (a = l.props) === null ||
          a === void 0
        ) && a.isDisabled
      )
    );
  }
  getFirstKey() {
    let n = this.collection.getFirstKey();
    return n != null && this.isDisabled(n) && (n = this.getNextKey(n)), n;
  }
  getLastKey() {
    let n = this.collection.getLastKey();
    return n != null && this.isDisabled(n) && (n = this.getPreviousKey(n)), n;
  }
  getKeyAbove(n) {
    return this.tabDirection ? null : this.getPreviousKey(n);
  }
  getKeyBelow(n) {
    return this.tabDirection ? null : this.getNextKey(n);
  }
  getNextKey(n) {
    do
      (n = this.collection.getKeyAfter(n)),
        n == null && (n = this.collection.getFirstKey());
    while (this.isDisabled(n));
    return n;
  }
  getPreviousKey(n) {
    do
      (n = this.collection.getKeyBefore(n)),
        n == null && (n = this.collection.getLastKey());
    while (this.isDisabled(n));
    return n;
  }
  constructor(n, a, l, r = new Set()) {
    (this.collection = n),
      (this.flipDirection = a === "rtl" && l === "horizontal"),
      (this.disabledKeys = r),
      (this.tabDirection = l === "horizontal");
  }
}
function f8(t, n, a) {
  let { orientation: l = "horizontal", keyboardActivation: r = "automatic" } =
      t,
    { collection: u, selectionManager: c, disabledKeys: d } = n,
    { direction: h } = Hr(),
    m = S.useMemo(() => new c8(u, h, l, d), [u, d, l, h]),
    { collectionProps: v } = sE({
      ref: a,
      selectionManager: c,
      keyboardDelegate: m,
      selectOnFocus: r === "automatic",
      disallowEmptySelection: !0,
      scrollRef: a,
      linkBehavior: "selection",
    }),
    b = ts();
  mE.set(n, b);
  let g = Xh({ ...t, id: b });
  return {
    tabListProps: {
      ...pe(v, g),
      role: "tablist",
      "aria-orientation": l,
      tabIndex: void 0,
    },
  };
}
var vE = et((t, n) => {
  var a, l;
  const {
      as: r,
      tabKey: u,
      destroyInactiveTabPanel: c,
      state: d,
      className: h,
      slots: m,
      classNames: v,
      ...b
    } = t,
    g = r || "div",
    T = pt(n),
    { tabPanelProps: x } = u8({ ...t, id: String(u) }, d, T),
    { focusProps: C, isFocused: A, isFocusVisible: M } = Kn(),
    V = d.selectedItem,
    P = d.collection.getItem(u).props.children,
    z = Te(
      v == null ? void 0 : v.panel,
      h,
      (a = V == null ? void 0 : V.props) == null ? void 0 : a.className,
    ),
    R = u === (V == null ? void 0 : V.key);
  return !P || (!R && c)
    ? null
    : U.jsx(g, {
        ref: T,
        "data-focus": A,
        "data-focus-visible": M,
        "data-inert": R ? void 0 : "true",
        inert: e3(!R),
        ...(R && pe(x, C, b)),
        className: (l = m.panel) == null ? void 0 : l.call(m, { class: z }),
        "data-slot": "panel",
        children: P,
      });
});
vE.displayName = "HeroUI.TabPanel";
var d8 = vE,
  bE = et((t, n) => {
    var a;
    const {
        className: l,
        as: r,
        item: u,
        state: c,
        classNames: d,
        isDisabled: h,
        listRef: m,
        slots: v,
        motionProps: b,
        disableAnimation: g,
        disableCursorAnimation: T,
        shouldSelectOnPressUp: x,
        onClick: C,
        tabRef: A,
        ...M
      } = t,
      { key: V } = u,
      P = pt(n),
      z = r || (t.href ? "a" : "button"),
      R = typeof z == "string",
      {
        tabProps: B,
        isSelected: X,
        isDisabled: w,
        isPressed: G,
      } = o8({ key: V, isDisabled: h, shouldSelectOnPressUp: x }, c, P);
    t.children == null && delete B["aria-controls"];
    const W = h || w,
      { focusProps: D, isFocused: F, isFocusVisible: _ } = Kn(),
      { hoverProps: H, isHovered: Z } = Un({ isDisabled: W }),
      $ = Te(d == null ? void 0 : d.tab, l),
      [, N] = p1({ rerender: !0 }),
      O = () => {
        Bt(C, B.onClick),
          !(!(P != null && P.current) || !(m != null && m.current)) &&
            yD(P.current, {
              scrollMode: "if-needed",
              behavior: "smooth",
              block: "end",
              inline: "end",
              boundary: m == null ? void 0 : m.current,
            });
      };
    return U.jsxs(z, {
      ref: Ju(P, A),
      "data-disabled": ie(w),
      "data-focus": ie(F),
      "data-focus-visible": ie(_),
      "data-hover": ie(Z),
      "data-hover-unselected": ie((Z || G) && !X),
      "data-pressed": ie(G),
      "data-selected": ie(X),
      "data-slot": "tab",
      ...pe(
        B,
        W ? {} : { ...D, ...H },
        Hn(M, { enabled: R, omitPropNames: new Set(["title"]) }),
        { onClick: O },
      ),
      className: (a = v.tab) == null ? void 0 : a.call(v, { class: $ }),
      title: M == null ? void 0 : M.titleValue,
      type: z === "button" ? "button" : void 0,
      children: [
        X && !g && !T && N
          ? U.jsx(Pr, {
              features: K5,
              children: U.jsx(Or.span, {
                className: v.cursor({ class: d == null ? void 0 : d.cursor }),
                "data-slot": "cursor",
                layoutDependency: !1,
                layoutId: "cursor",
                transition: { type: "spring", bounce: 0.15, duration: 0.5 },
                ...b,
              }),
            })
          : null,
        U.jsx("div", {
          className: v.tabContent({ class: d == null ? void 0 : d.tabContent }),
          "data-slot": "tabContent",
          children: u.rendered,
        }),
      ],
    });
  });
bE.displayName = "HeroUI.Tab";
var h8 = bE;
function p8(t) {
  var n, a, l;
  const r = Ft(),
    [u, c] = An(t, Ub.variantKeys),
    {
      ref: d,
      as: h,
      className: m,
      classNames: v,
      children: b,
      disableCursorAnimation: g,
      motionProps: T,
      isVertical: x = !1,
      shouldSelectOnPressUp: C = !0,
      destroyInactiveTabPanel: A = !0,
      ...M
    } = u,
    V = h || "div",
    P = typeof V == "string",
    z = pt(d),
    R =
      (a =
        (n = t == null ? void 0 : t.disableAnimation) != null
          ? n
          : r == null
            ? void 0
            : r.disableAnimation) != null
        ? a
        : !1,
    B = t3({ children: b, ...M }),
    { tabListProps: X } = f8(M, B, z),
    w = S.useMemo(
      () =>
        Ub({ ...c, disableAnimation: R, ...(x ? { placement: "start" } : {}) }),
      [Pn(c), R, x],
    ),
    G = Te(v == null ? void 0 : v.base, m),
    W = S.useMemo(
      () => ({
        state: B,
        slots: w,
        classNames: v,
        motionProps: T,
        disableAnimation: R,
        listRef: z,
        shouldSelectOnPressUp: C,
        disableCursorAnimation: g,
        isDisabled: t == null ? void 0 : t.isDisabled,
      }),
      [B, w, z, T, R, g, C, t == null ? void 0 : t.isDisabled, v],
    ),
    D = S.useCallback(
      (Z) => ({
        "data-slot": "base",
        className: w.base({ class: Te(G, Z == null ? void 0 : Z.className) }),
        ...pe(Hn(M, { enabled: P }), Z),
      }),
      [G, M, w],
    ),
    F = (l = c.placement) != null ? l : x ? "start" : "top",
    _ = S.useCallback(
      (Z) => ({
        "data-slot": "tabWrapper",
        className: w.tabWrapper({
          class: Te(
            v == null ? void 0 : v.tabWrapper,
            Z == null ? void 0 : Z.className,
          ),
        }),
        "data-placement": F,
        "data-vertical":
          x || F === "start" || F === "end" ? "vertical" : "horizontal",
      }),
      [v, w, F, x],
    ),
    H = S.useCallback(
      (Z) => ({
        ref: z,
        "data-slot": "tabList",
        className: w.tabList({
          class: Te(
            v == null ? void 0 : v.tabList,
            Z == null ? void 0 : Z.className,
          ),
        }),
        ...pe(X, Z),
      }),
      [z, X, v, w],
    );
  return {
    Component: V,
    domRef: z,
    state: B,
    values: W,
    destroyInactiveTabPanel: A,
    getBaseProps: D,
    getTabListProps: H,
    getWrapperProps: _,
  };
}
var m8 = et(function (n, a) {
    const {
        Component: l,
        values: r,
        state: u,
        destroyInactiveTabPanel: c,
        getBaseProps: d,
        getTabListProps: h,
        getWrapperProps: m,
      } = p8({ ...n, ref: a }),
      v = S.useId(),
      b = !n.disableAnimation && !n.disableCursorAnimation,
      g = {
        state: u,
        listRef: r.listRef,
        slots: r.slots,
        classNames: r.classNames,
        isDisabled: r.isDisabled,
        motionProps: r.motionProps,
        disableAnimation: r.disableAnimation,
        shouldSelectOnPressUp: r.shouldSelectOnPressUp,
        disableCursorAnimation: r.disableCursorAnimation,
      },
      T = [...u.collection].map((C) =>
        U.jsx(h8, { item: C, ...g, ...C.props }, C.key),
      ),
      x = U.jsxs(U.Fragment, {
        children: [
          U.jsx("div", {
            ...d(),
            children: U.jsx(l, {
              ...h(),
              children: b ? U.jsx(c7, { id: v, children: T }) : T,
            }),
          }),
          [...u.collection].map((C) =>
            U.jsx(
              d8,
              {
                classNames: r.classNames,
                destroyInactiveTabPanel: c,
                slots: r.slots,
                state: r.state,
                tabKey: C.key,
              },
              C.key,
            ),
          ),
        ],
      });
    return "placement" in n || "isVertical" in n
      ? U.jsx("div", { ...m(), children: x })
      : x;
  }),
  mP = m8,
  v8 = v1,
  vP = v8,
  b8 = v1,
  bP = b8;
const Ip = new WeakMap();
function g8(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function y8(t, n) {
  let a = Ip.get(t);
  if (!a) throw new Error("Unknown list");
  return `${a.id}-option-${g8(n)}`;
}
function S8(t, n, a) {
  let l = Ci(t, { labelable: !0 }),
    r = t.selectionBehavior || "toggle",
    u = t.linkBehavior || (r === "replace" ? "action" : "override");
  r === "toggle" && u === "action" && (u = "override");
  let { listProps: c } = KD({
      ...t,
      ref: a,
      selectionManager: n.selectionManager,
      collection: n.collection,
      disabledKeys: n.disabledKeys,
      linkBehavior: u,
    }),
    { focusWithinProps: d } = ic({
      onFocusWithin: t.onFocus,
      onBlurWithin: t.onBlur,
      onFocusWithinChange: t.onFocusChange,
    }),
    h = ts(t.id);
  Ip.set(n, {
    id: h,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: u,
  });
  let { labelProps: m, fieldProps: v } = Kp({
    ...t,
    id: h,
    labelElementType: "span",
  });
  return {
    labelProps: m,
    listBoxProps: pe(
      l,
      d,
      n.selectionManager.selectionMode === "multiple"
        ? { "aria-multiselectable": "true" }
        : {},
      { role: "listbox", ...pe(v, c) },
    ),
  };
}
function T8(t, n, a) {
  var l, r;
  let { key: u } = t,
    c = Ip.get(n);
  var d;
  let h =
    (d = t.isDisabled) !== null && d !== void 0
      ? d
      : n.selectionManager.isDisabled(u);
  var m;
  let v =
    (m = t.isSelected) !== null && m !== void 0
      ? m
      : n.selectionManager.isSelected(u);
  var b;
  let g =
    (b = t.shouldSelectOnPressUp) !== null && b !== void 0
      ? b
      : c == null
        ? void 0
        : c.shouldSelectOnPressUp;
  var T;
  let x =
    (T = t.shouldFocusOnHover) !== null && T !== void 0
      ? T
      : c == null
        ? void 0
        : c.shouldFocusOnHover;
  var C;
  let A =
    (C = t.shouldUseVirtualFocus) !== null && C !== void 0
      ? C
      : c == null
        ? void 0
        : c.shouldUseVirtualFocus;
  var M;
  let V =
      (M = t.isVirtualized) !== null && M !== void 0
        ? M
        : c == null
          ? void 0
          : c.isVirtualized,
    P = Qd(),
    z = Qd(),
    R = {
      role: "option",
      "aria-disabled": h || void 0,
      "aria-selected": n.selectionManager.selectionMode !== "none" ? v : void 0,
    };
  (Zl() && Gh()) ||
    ((R["aria-label"] = t["aria-label"]),
    (R["aria-labelledby"] = P),
    (R["aria-describedby"] = z));
  let B = n.collection.getItem(u);
  if (V) {
    let N = Number(B == null ? void 0 : B.index);
    (R["aria-posinset"] = Number.isNaN(N) ? void 0 : N + 1),
      (R["aria-setsize"] = n3(n.collection));
  }
  let X =
      c != null && c.onAction
        ? () => {
            var N;
            return c == null || (N = c.onAction) === null || N === void 0
              ? void 0
              : N.call(c, u);
          }
        : void 0,
    w = y8(n, u),
    {
      itemProps: G,
      isPressed: W,
      isFocused: D,
      hasAction: F,
      allowsSelection: _,
    } = rE({
      selectionManager: n.selectionManager,
      key: u,
      ref: a,
      shouldSelectOnPressUp: g,
      allowsDifferentPressOrigin: g && x,
      isVirtualized: V,
      shouldUseVirtualFocus: A,
      isDisabled: h,
      onAction:
        X ||
        (!(B == null || (l = B.props) === null || l === void 0) && l.onAction)
          ? Bt(
              B == null || (r = B.props) === null || r === void 0
                ? void 0
                : r.onAction,
              X,
            )
          : void 0,
      linkBehavior: c == null ? void 0 : c.linkBehavior,
      id: w,
    }),
    { hoverProps: H } = Un({
      isDisabled: h || !x,
      onHoverStart() {
        $r() ||
          (n.selectionManager.setFocused(!0),
          n.selectionManager.setFocusedKey(u));
      },
    }),
    Z = Ci(B == null ? void 0 : B.props);
  delete Z.id;
  let $ = Yh(B == null ? void 0 : B.props);
  return {
    optionProps: { ...R, ...pe(Z, G, H, $), id: w },
    labelProps: { id: P },
    descriptionProps: { id: z },
    isFocused: D,
    isFocusVisible: D && n.selectionManager.isFocused && $r(),
    isSelected: v,
    isDisabled: h,
    isPressed: W,
    allowsSelection: _,
    hasAction: F,
  };
}
function x8(t) {
  let { heading: n, "aria-label": a } = t,
    l = ts();
  return {
    itemProps: { role: "presentation" },
    headingProps: n ? { id: l, role: "presentation" } : {},
    groupProps: {
      role: "group",
      "aria-label": a,
      "aria-labelledby": n ? l : void 0,
    },
  };
}
function E8(t) {
  var n;
  const a = Ft(),
    {
      ref: l,
      as: r,
      state: u,
      variant: c,
      color: d,
      onAction: h,
      children: m,
      onSelectionChange: v,
      disableAnimation: b = (n = a == null ? void 0 : a.disableAnimation) !=
      null
        ? n
        : !1,
      itemClasses: g,
      className: T,
      topContent: x,
      bottomContent: C,
      emptyContent: A = "No items.",
      hideSelectedIcon: M = !1,
      hideEmptyContent: V = !1,
      shouldHighlightOnFocus: P = !1,
      classNames: z,
      ...R
    } = t,
    B = r || "ul",
    X = typeof B == "string",
    w = pt(l),
    G = i3({ ...t, children: m, onSelectionChange: v }),
    W = u || G,
    { listBoxProps: D } = S8({ ...t, onAction: h }, W, w),
    F = S.useMemo(() => a3(), []),
    _ = Te(z == null ? void 0 : z.base, T);
  return {
    Component: B,
    state: W,
    variant: c,
    color: d,
    slots: F,
    classNames: z,
    topContent: x,
    bottomContent: C,
    emptyContent: A,
    hideEmptyContent: V,
    shouldHighlightOnFocus: P,
    hideSelectedIcon: M,
    disableAnimation: b,
    className: T,
    itemClasses: g,
    getBaseProps: (N = {}) => ({
      ref: w,
      "data-slot": "base",
      className: F.base({ class: _ }),
      ...Hn(R, { enabled: X }),
      ...N,
    }),
    getListProps: (N = {}) => ({
      "data-slot": "list",
      className: F.list({ class: z == null ? void 0 : z.list }),
      ...D,
      ...N,
    }),
    getEmptyContentProps: (N = {}) => ({
      "data-slot": "empty-content",
      children: A,
      className: F.emptyContent({ class: z == null ? void 0 : z.emptyContent }),
      ...N,
    }),
  };
}
function $8(t) {
  const { isSelected: n, disableAnimation: a, ...l } = t;
  return U.jsx("svg", {
    "aria-hidden": "true",
    "data-selected": n,
    role: "presentation",
    viewBox: "0 0 17 18",
    ...l,
    children: U.jsx("polyline", {
      fill: "none",
      points: "1 9 7 14 15 4",
      stroke: "currentColor",
      strokeDasharray: 22,
      strokeDashoffset: n ? 44 : 66,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      style: a ? {} : { transition: "stroke-dashoffset 200ms ease" },
    }),
  });
}
function w8(t) {
  var n, a;
  const l = Ft(),
    [r, u] = An(t, Kb.variantKeys),
    {
      as: c,
      item: d,
      state: h,
      description: m,
      startContent: v,
      endContent: b,
      isVirtualized: g,
      selectedIcon: T,
      className: x,
      classNames: C,
      autoFocus: A,
      onPress: M,
      onPressUp: V,
      onPressStart: P,
      onPressEnd: z,
      onPressChange: R,
      onClick: B,
      shouldHighlightOnFocus: X,
      hideSelectedIcon: w = !1,
      isReadOnly: G = !1,
      ...W
    } = r,
    D =
      (a =
        (n = t.disableAnimation) != null
          ? n
          : l == null
            ? void 0
            : l.disableAnimation) != null
        ? a
        : !1,
    F = S.useRef(null),
    _ = c || (t.href ? "a" : "li"),
    H = typeof _ == "string",
    { rendered: Z, key: $ } = d,
    N = h.disabledKeys.has($) || t.isDisabled,
    O = h.selectionManager.selectionMode !== "none",
    te = l3();
  B &&
    typeof B == "function" &&
    Wu(
      "onClick is deprecated, please use onPress instead. See: https://github.com/heroui-inc/heroui/issues/4292",
      "ListboxItem",
    );
  const { pressProps: ne, isPressed: oe } = Ur({
      ref: F,
      isDisabled: N,
      onPress: M,
      onPressUp: V,
      onPressStart: P,
      onPressEnd: z,
      onPressChange: R,
    }),
    { isHovered: re, hoverProps: le } = Un({ isDisabled: N }),
    { isFocusVisible: se, focusProps: de } = Kn({ autoFocus: A }),
    {
      isFocused: ce,
      isSelected: Pe,
      optionProps: Oe,
      labelProps: me,
      descriptionProps: De,
    } = T8(
      {
        key: $,
        isDisabled: N,
        "aria-label": r["aria-label"],
        isVirtualized: g,
      },
      h,
      F,
    );
  let ae = Oe;
  const xe = S.useMemo(
      () =>
        Kb({
          ...u,
          isDisabled: N,
          disableAnimation: D,
          hasTitleTextChild: typeof Z == "string",
          hasDescriptionTextChild: typeof m == "string",
        }),
      [Pn(u), N, D, Z, m],
    ),
    we = Te(C == null ? void 0 : C.base, x);
  G && (ae = s3(ae));
  const Ie = (X && ce) || (te ? re || oe : re || (ce && !se)),
    yt = (ct = {}) => ({
      ref: F,
      ...pe(
        { onClick: B },
        ae,
        G ? {} : pe(de, ne),
        le,
        Hn(W, { enabled: H }),
        ct,
      ),
      "data-selectable": ie(O),
      "data-focus": ie(ce),
      "data-hover": ie(Ie),
      "data-disabled": ie(N),
      "data-selected": ie(Pe),
      "data-pressed": ie(oe),
      "data-focus-visible": ie(se),
      className: xe.base({ class: Te(we, ct.className) }),
    }),
    fe = (ct = {}) => ({
      ...pe(me, ct),
      "data-label": ie(!0),
      className: xe.title({ class: C == null ? void 0 : C.title }),
    }),
    Ye = (ct = {}) => ({
      ...pe(De, ct),
      className: xe.description({ class: C == null ? void 0 : C.description }),
    }),
    mt = (ct = {}) => ({
      ...pe(ct),
      className: xe.wrapper({ class: C == null ? void 0 : C.wrapper }),
    }),
    Rn = S.useCallback(
      (ct = {}) => ({
        "aria-hidden": ie(!0),
        "data-disabled": ie(N),
        className: xe.selectedIcon({
          class: C == null ? void 0 : C.selectedIcon,
        }),
        ...ct,
      }),
      [N, xe, C],
    );
  return {
    Component: _,
    domRef: F,
    slots: xe,
    classNames: C,
    isSelectable: O,
    isSelected: Pe,
    isDisabled: N,
    rendered: Z,
    description: m,
    startContent: v,
    endContent: b,
    selectedIcon: T,
    hideSelectedIcon: w,
    disableAnimation: D,
    getItemProps: yt,
    getLabelProps: fe,
    getWrapperProps: mt,
    getDescriptionProps: Ye,
    getSelectedIconProps: Rn,
  };
}
var gE = (t) => {
  const {
      Component: n,
      rendered: a,
      description: l,
      isSelectable: r,
      isSelected: u,
      isDisabled: c,
      selectedIcon: d,
      startContent: h,
      endContent: m,
      hideSelectedIcon: v,
      disableAnimation: b,
      getItemProps: g,
      getLabelProps: T,
      getWrapperProps: x,
      getDescriptionProps: C,
      getSelectedIconProps: A,
    } = w8(t),
    M = S.useMemo(() => {
      const V = U.jsx($8, { disableAnimation: b, isSelected: u });
      return typeof d == "function"
        ? d({ icon: V, isSelected: u, isDisabled: c })
        : d || V;
    }, [d, u, c, b]);
  return U.jsxs(n, {
    ...g(),
    children: [
      h,
      l
        ? U.jsxs("div", {
            ...x(),
            children: [
              U.jsx("span", { ...T(), children: a }),
              U.jsx("span", { ...C(), children: l }),
            ],
          })
        : U.jsx("span", { ...T(), children: a }),
      r && !v && U.jsx("span", { ...A(), children: M }),
      m,
    ],
  });
};
gE.displayName = "HeroUI.ListboxItem";
var Gp = gE,
  yE = et(
    (
      {
        item: t,
        state: n,
        as: a,
        variant: l,
        color: r,
        disableAnimation: u,
        className: c,
        classNames: d,
        hideSelectedIcon: h,
        showDivider: m = !1,
        dividerProps: v = {},
        itemClasses: b,
        title: g,
        items: T,
        ...x
      },
      C,
    ) => {
      const A = a || "li",
        M = S.useMemo(() => r3(), []),
        V = Te(d == null ? void 0 : d.base, c),
        P = Te(
          d == null ? void 0 : d.divider,
          v == null ? void 0 : v.className,
        ),
        {
          itemProps: z,
          headingProps: R,
          groupProps: B,
        } = x8({ heading: t.rendered, "aria-label": t["aria-label"] });
      return U.jsxs(
        A,
        {
          "data-slot": "base",
          ...pe(z, x),
          className: M.base({ class: V }),
          children: [
            t.rendered &&
              U.jsx("span", {
                ...R,
                className: M.heading({ class: d == null ? void 0 : d.heading }),
                "data-slot": "heading",
                children: t.rendered,
              }),
            U.jsxs("ul", {
              ...B,
              className: M.group({ class: d == null ? void 0 : d.group }),
              "data-has-title": !!t.rendered,
              "data-slot": "group",
              children: [
                [...t.childNodes].map((X) => {
                  const { key: w, props: G } = X;
                  let W = U.jsx(
                    Gp,
                    {
                      classNames: b,
                      color: r,
                      disableAnimation: u,
                      hideSelectedIcon: h,
                      item: X,
                      state: n,
                      variant: l,
                      ...G,
                    },
                    w,
                  );
                  return X.wrapper && (W = X.wrapper(W)), W;
                }),
                m &&
                  U.jsx(G5, {
                    as: "li",
                    className: M.divider({ class: P }),
                    ...v,
                  }),
              ],
            }),
          ],
        },
        t.key,
      );
    },
  );
yE.displayName = "HeroUI.ListboxSection";
var SE = yE;
function C8(t = {}) {
  const {
      domRef: n,
      isEnabled: a = !0,
      overflowCheck: l = "vertical",
      visibility: r = "auto",
      offset: u = 0,
      onVisibilityChange: c,
      updateDeps: d = [],
    } = t,
    h = S.useRef(r);
  S.useEffect(() => {
    const m = n == null ? void 0 : n.current;
    if (!m || !a) return;
    const v = (T, x, C, A, M) => {
        if (r === "auto") {
          const V = `${A}${o3(M)}Scroll`;
          x && C
            ? ((m.dataset[V] = "true"),
              m.removeAttribute(`data-${A}-scroll`),
              m.removeAttribute(`data-${M}-scroll`))
            : ((m.dataset[`${A}Scroll`] = x.toString()),
              (m.dataset[`${M}Scroll`] = C.toString()),
              m.removeAttribute(`data-${A}-${M}-scroll`));
        } else {
          const V = x && C ? "both" : x ? A : C ? M : "none";
          V !== h.current && (c == null || c(V), (h.current = V));
        }
      },
      b = () => {
        var T, x;
        const C = [
            { type: "vertical", prefix: "top", suffix: "bottom" },
            { type: "horizontal", prefix: "left", suffix: "right" },
          ],
          A = m.querySelector('ul[data-slot="list"]'),
          M = +((T =
            A == null
              ? void 0
              : A.getAttribute("data-virtual-scroll-height")) != null
            ? T
            : m.scrollHeight),
          V = +((x =
            A == null ? void 0 : A.getAttribute("data-virtual-scroll-top")) !=
          null
            ? x
            : m.scrollTop);
        for (const { type: P, prefix: z, suffix: R } of C)
          if (l === P || l === "both") {
            const B = P === "vertical" ? V > u : m.scrollLeft > u,
              X =
                P === "vertical"
                  ? V + m.clientHeight + u < M
                  : m.scrollLeft + m.clientWidth + u < m.scrollWidth;
            v(P, B, X, z, R);
          }
      },
      g = () => {
        ["top", "bottom", "top-bottom", "left", "right", "left-right"].forEach(
          (T) => {
            m.removeAttribute(`data-${T}-scroll`);
          },
        );
      };
    return (
      b(),
      m.addEventListener("scroll", b, !0),
      r !== "auto" &&
        (g(),
        r === "both"
          ? ((m.dataset.topBottomScroll = String(l === "vertical")),
            (m.dataset.leftRightScroll = String(l === "horizontal")))
          : ((m.dataset.topBottomScroll = "false"),
            (m.dataset.leftRightScroll = "false"),
            ["top", "bottom", "left", "right"].forEach((T) => {
              m.dataset[`${T}Scroll`] = String(r === T);
            }))),
      () => {
        m.removeEventListener("scroll", b, !0), g();
      }
    );
  }, [...d, a, r, l, c, n]);
}
function M8(t) {
  var n;
  const [a, l] = An(t, jb.variantKeys),
    {
      ref: r,
      as: u,
      children: c,
      className: d,
      style: h,
      size: m = 40,
      offset: v = 0,
      visibility: b = "auto",
      isEnabled: g = !0,
      onVisibilityChange: T,
      ...x
    } = a,
    C = u || "div",
    A = pt(r);
  C8({
    domRef: A,
    offset: v,
    visibility: b,
    isEnabled: g,
    onVisibilityChange: T,
    updateDeps: [c],
    overflowCheck: (n = t.orientation) != null ? n : "vertical",
  });
  const M = S.useMemo(() => jb({ ...l, className: d }), [Pn(l), d]);
  return {
    Component: C,
    styles: M,
    domRef: A,
    children: c,
    getBaseProps: (P = {}) => {
      var z;
      return {
        ref: A,
        className: M,
        "data-orientation": (z = t.orientation) != null ? z : "vertical",
        style: { "--scroll-shadow-size": `${m}px`, ...h, ...P.style },
        ...x,
        ...P,
      };
    },
  };
}
var D8 = (t, n) => {
    const a = [];
    for (const l of t)
      l.type === "section"
        ? a.push(([...l.childNodes].length + 1) * n)
        : a.push(n);
    return a;
  },
  A8 = (t) => {
    if (
      !t ||
      t.scrollTop === void 0 ||
      t.clientHeight === void 0 ||
      t.scrollHeight === void 0
    )
      return { isTop: !1, isBottom: !1, isMiddle: !1 };
    const n = t.scrollTop === 0,
      a = Math.ceil(t.scrollTop + t.clientHeight) >= t.scrollHeight;
    return { isTop: n, isBottom: a, isMiddle: !n && !a };
  },
  P8 = (t) => {
    var n;
    const {
        Component: a,
        state: l,
        color: r,
        variant: u,
        itemClasses: c,
        getBaseProps: d,
        topContent: h,
        bottomContent: m,
        hideEmptyContent: v,
        hideSelectedIcon: b,
        shouldHighlightOnFocus: g,
        disableAnimation: T,
        getEmptyContentProps: x,
        getListProps: C,
        scrollShadowProps: A,
      } = t,
      { virtualization: M } = t;
    if (!M || (!Fh(M) && !M.maxListboxHeight && !M.itemHeight))
      throw new Error(
        "You are using a virtualized listbox. VirtualizedListbox requires 'virtualization' props with 'maxListboxHeight' and 'itemHeight' properties. This error might have originated from autocomplete components that use VirtualizedListbox. Please provide these props to use the virtualized listbox.",
      );
    const { maxListboxHeight: V, itemHeight: P } = M,
      z = Math.min(V, P * l.collection.size),
      R = S.useRef(null),
      B = S.useMemo(() => D8([...l.collection], P), [l.collection, P]),
      X = r8({
        count: [...l.collection].length,
        getScrollElement: () => R.current,
        estimateSize: (Z) => B[Z],
      }),
      w = X.getVirtualItems(),
      G = X.getTotalSize(),
      { getBaseProps: W } = M8({ ...A }),
      D = (Z) => {
        var $;
        const N = [...l.collection][Z.index];
        if (!N) return null;
        const O = {
            color: r,
            item: N,
            state: l,
            variant: u,
            disableAnimation: T,
            hideSelectedIcon: b,
            ...N.props,
          },
          te = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: `${Z.size}px`,
            transform: `translateY(${Z.start}px)`,
          };
        if (N.type === "section")
          return U.jsx(
            SE,
            { ...O, itemClasses: c, style: { ...te, ...O.style } },
            N.key,
          );
        let ne = U.jsx(
          Gp,
          {
            ...O,
            classNames: pe(c, ($ = N.props) == null ? void 0 : $.classNames),
            shouldHighlightOnFocus: g,
            style: { ...te, ...O.style },
          },
          N.key,
        );
        return N.wrapper && (ne = N.wrapper(ne)), ne;
      },
      [F, _] = S.useState({ isTop: !1, isBottom: !0, isMiddle: !1 }),
      H = U.jsxs(a, {
        ...C(),
        "data-virtual-scroll-height": G,
        "data-virtual-scroll-top":
          (n = R == null ? void 0 : R.current) == null ? void 0 : n.scrollTop,
        children: [
          !l.collection.size &&
            !v &&
            U.jsx("li", { children: U.jsx("div", { ...x() }) }),
          U.jsx("div", {
            ...Hn(W()),
            ref: R,
            style: { height: V, overflow: "auto" },
            onScroll: (Z) => {
              _(A8(Z.target));
            },
            children:
              z > 0 &&
              P > 0 &&
              U.jsx("div", {
                style: {
                  height: `${G}px`,
                  width: "100%",
                  position: "relative",
                },
                children: w.map((Z) => D(Z)),
              }),
          }),
        ],
      });
    return U.jsxs("div", { ...d(), children: [h, H, m] });
  },
  R8 = P8,
  N8 = et(function (n, a) {
    const { isVirtualized: l, ...r } = n,
      u = E8({ ...r, ref: a }),
      {
        Component: c,
        state: d,
        color: h,
        variant: m,
        itemClasses: v,
        getBaseProps: b,
        topContent: g,
        bottomContent: T,
        hideEmptyContent: x,
        hideSelectedIcon: C,
        shouldHighlightOnFocus: A,
        disableAnimation: M,
        getEmptyContentProps: V,
        getListProps: P,
      } = u;
    if (l) return U.jsx(R8, { ...n, ...u });
    const z = U.jsxs(c, {
      ...P(),
      children: [
        !d.collection.size &&
          !x &&
          U.jsx("li", { children: U.jsx("div", { ...V() }) }),
        [...d.collection].map((R) => {
          var B;
          const X = {
            color: h,
            item: R,
            state: d,
            variant: m,
            disableAnimation: M,
            hideSelectedIcon: C,
            ...R.props,
          };
          if (R.type === "section")
            return U.jsx(SE, { ...X, itemClasses: v }, R.key);
          let w = U.jsx(
            Gp,
            {
              ...X,
              classNames: pe(v, (B = R.props) == null ? void 0 : B.classNames),
              shouldHighlightOnFocus: A,
            },
            R.key,
          );
          return R.wrapper && (w = R.wrapper(w)), w;
        }),
      ],
    });
    return U.jsxs("div", { ...b(), children: [g, z, T] });
  }),
  gP = N8;
function O8(t) {
  const {
      ref: n,
      className: a,
      classNames: l,
      placement: r = "right",
      scrollBehavior: u = "inside",
      size: c = "md",
      motionProps: d,
      ...h
    } = t,
    m = pt(n),
    v = S.useMemo(() => {
      if (!Fh(d)) return d;
      const x = r === "left" || r === "right" ? "x" : "y";
      return {
        variants: {
          enter: {
            [x]: 0,
            transition: { [x]: { duration: 0.2, ease: za.easeOut } },
          },
          exit: {
            [x]: r === "top" || r === "left" ? "-100%" : "100%",
            transition: { [x]: { duration: 0.1, ease: za.easeIn } },
          },
        },
      };
    }, [r, d]),
    b = Te(l == null ? void 0 : l.base, a),
    g = S.useMemo(() => u3({ size: c, placement: r }), [c, r]),
    T = S.useCallback(
      () => ({
        classNames: { ...l, base: g.base({ class: b }) },
        motionProps: v,
        scrollBehavior: u,
        size: c,
        ...h,
      }),
      [b, l, v, u, c, h],
    );
  return { domRef: m, getModalProps: T };
}
var TE = et(({ children: t, ...n }, a) => {
  const { domRef: l, getModalProps: r } = O8({ ...n, ref: a });
  return U.jsx(qD, { ref: l, ...r(), children: t });
});
TE.displayName = "HeroUI.Drawer";
var yP = TE,
  L8 = (t, n, a, l, r, u, c, d) => {
    let h = document.documentElement,
      m = ["light", "dark"];
    function v(T) {
      (Array.isArray(t) ? t : [t]).forEach((x) => {
        let C = x === "class",
          A = C && u ? r.map((M) => u[M] || M) : r;
        C
          ? (h.classList.remove(...A), h.classList.add(u && u[T] ? u[T] : T))
          : h.setAttribute(x, T);
      }),
        b(T);
    }
    function b(T) {
      d && m.includes(T) && (h.style.colorScheme = T);
    }
    function g() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (l) v(l);
    else
      try {
        let T = localStorage.getItem(n) || a,
          x = c && T === "system" ? g() : T;
        v(x);
      } catch {}
  },
  s1 = ["light", "dark"],
  xE = "(prefers-color-scheme: dark)",
  _8 = typeof window > "u",
  Yp = S.createContext(void 0),
  z8 = { setTheme: (t) => {}, themes: [] },
  SP = () => {
    var t;
    return (t = S.useContext(Yp)) != null ? t : z8;
  },
  TP = (t) =>
    S.useContext(Yp)
      ? S.createElement(S.Fragment, null, t.children)
      : S.createElement(B8, { ...t }),
  V8 = ["light", "dark"],
  B8 = ({
    forcedTheme: t,
    disableTransitionOnChange: n = !1,
    enableSystem: a = !0,
    enableColorScheme: l = !0,
    storageKey: r = "theme",
    themes: u = V8,
    defaultTheme: c = a ? "system" : "light",
    attribute: d = "data-theme",
    value: h,
    children: m,
    nonce: v,
    scriptProps: b,
  }) => {
    let [g, T] = S.useState(() => H8(r, c)),
      [x, C] = S.useState(() => (g === "system" ? Xd() : g)),
      A = h ? Object.values(h) : u,
      M = S.useCallback(
        (R) => {
          let B = R;
          if (!B) return;
          R === "system" && a && (B = Xd());
          let X = h ? h[B] : B,
            w = n ? U8(v) : null,
            G = document.documentElement,
            W = (D) => {
              D === "class"
                ? (G.classList.remove(...A), X && G.classList.add(X))
                : D.startsWith("data-") &&
                  (X ? G.setAttribute(D, X) : G.removeAttribute(D));
            };
          if ((Array.isArray(d) ? d.forEach(W) : W(d), l)) {
            let D = s1.includes(c) ? c : null,
              F = s1.includes(B) ? B : D;
            G.style.colorScheme = F;
          }
          w == null || w();
        },
        [v],
      ),
      V = S.useCallback(
        (R) => {
          let B = typeof R == "function" ? R(g) : R;
          T(B);
          try {
            localStorage.setItem(r, B);
          } catch {}
        },
        [g],
      ),
      P = S.useCallback(
        (R) => {
          let B = Xd(R);
          C(B), g === "system" && a && !t && M("system");
        },
        [g, t],
      );
    S.useEffect(() => {
      let R = window.matchMedia(xE);
      return R.addListener(P), P(R), () => R.removeListener(P);
    }, [P]),
      S.useEffect(() => {
        let R = (B) => {
          B.key === r && (B.newValue ? T(B.newValue) : V(c));
        };
        return (
          window.addEventListener("storage", R),
          () => window.removeEventListener("storage", R)
        );
      }, [V]),
      S.useEffect(() => {
        M(t ?? g);
      }, [t, g]);
    let z = S.useMemo(
      () => ({
        theme: g,
        setTheme: V,
        forcedTheme: t,
        resolvedTheme: g === "system" ? x : g,
        themes: a ? [...u, "system"] : u,
        systemTheme: a ? x : void 0,
      }),
      [g, V, t, x, a, u],
    );
    return S.createElement(
      Yp.Provider,
      { value: z },
      S.createElement(k8, {
        forcedTheme: t,
        storageKey: r,
        attribute: d,
        enableSystem: a,
        enableColorScheme: l,
        defaultTheme: c,
        value: h,
        themes: u,
        nonce: v,
        scriptProps: b,
      }),
      m,
    );
  },
  k8 = S.memo(
    ({
      forcedTheme: t,
      storageKey: n,
      attribute: a,
      enableSystem: l,
      enableColorScheme: r,
      defaultTheme: u,
      value: c,
      themes: d,
      nonce: h,
      scriptProps: m,
    }) => {
      let v = JSON.stringify([a, n, u, t, d, c, l, r]).slice(1, -1);
      return S.createElement("script", {
        ...m,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? h : "",
        dangerouslySetInnerHTML: { __html: `(${L8.toString()})(${v})` },
      });
    },
  ),
  H8 = (t, n) => {
    if (_8) return;
    let a;
    try {
      a = localStorage.getItem(t) || void 0;
    } catch {}
    return a || n;
  },
  U8 = (t) => {
    let n = document.createElement("style");
    return (
      t && n.setAttribute("nonce", t),
      n.appendChild(
        document.createTextNode(
          "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}",
        ),
      ),
      document.head.appendChild(n),
      () => {
        window.getComputedStyle(document.body),
          setTimeout(() => {
            document.head.removeChild(n);
          }, 1);
      }
    );
  },
  Xd = (t) => (t || (t = window.matchMedia(xE)), t.matches ? "dark" : "light");
let K8 = { data: "" },
  j8 = (t) =>
    typeof window == "object"
      ? (
          (t ? t.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (t || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" },
          )
        ).firstChild
      : t || K8,
  F8 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  I8 = /\/\*[^]*?\*\/|  +/g,
  r1 = /\n+/g,
  ta = (t, n) => {
    let a = "",
      l = "",
      r = "";
    for (let u in t) {
      let c = t[u];
      u[0] == "@"
        ? u[1] == "i"
          ? (a = u + " " + c + ";")
          : (l +=
              u[1] == "f"
                ? ta(c, u)
                : u + "{" + ta(c, u[1] == "k" ? "" : n) + "}")
        : typeof c == "object"
          ? (l += ta(
              c,
              n
                ? n.replace(/([^,])+/g, (d) =>
                    u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (h) =>
                      /&/.test(h) ? h.replace(/&/g, d) : d ? d + " " + h : h,
                    ),
                  )
                : u,
            ))
          : c != null &&
            ((u = /^--/.test(u) ? u : u.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (r += ta.p ? ta.p(u, c) : u + ":" + c + ";"));
    }
    return a + (n && r ? n + "{" + r + "}" : r) + l;
  },
  yi = {},
  EE = (t) => {
    if (typeof t == "object") {
      let n = "";
      for (let a in t) n += a + EE(t[a]);
      return n;
    }
    return t;
  },
  G8 = (t, n, a, l, r) => {
    let u = EE(t),
      c =
        yi[u] ||
        (yi[u] = ((h) => {
          let m = 0,
            v = 11;
          for (; m < h.length; ) v = (101 * v + h.charCodeAt(m++)) >>> 0;
          return "go" + v;
        })(u));
    if (!yi[c]) {
      let h =
        u !== t
          ? t
          : ((m) => {
              let v,
                b,
                g = [{}];
              for (; (v = F8.exec(m.replace(I8, ""))); )
                v[4]
                  ? g.shift()
                  : v[3]
                    ? ((b = v[3].replace(r1, " ").trim()),
                      g.unshift((g[0][b] = g[0][b] || {})))
                    : (g[0][v[1]] = v[2].replace(r1, " ").trim());
              return g[0];
            })(t);
      yi[c] = ta(r ? { ["@keyframes " + c]: h } : h, a ? "" : "." + c);
    }
    let d = a && yi.g ? yi.g : null;
    return (
      a && (yi.g = yi[c]),
      ((h, m, v, b) => {
        b
          ? (m.data = m.data.replace(b, h))
          : m.data.indexOf(h) === -1 && (m.data = v ? h + m.data : m.data + h);
      })(yi[c], n, l, d),
      c
    );
  },
  Y8 = (t, n, a) =>
    t.reduce((l, r, u) => {
      let c = n[u];
      if (c && c.call) {
        let d = c(a),
          h = (d && d.props && d.props.className) || (/^go/.test(d) && d);
        c = h
          ? "." + h
          : d && typeof d == "object"
            ? d.props
              ? ""
              : ta(d, "")
            : d === !1
              ? ""
              : d;
      }
      return l + r + (c ?? "");
    }, "");
function fc(t) {
  let n = this || {},
    a = t.call ? t(n.p) : t;
  return G8(
    a.unshift
      ? a.raw
        ? Y8(a, [].slice.call(arguments, 1), n.p)
        : a.reduce((l, r) => Object.assign(l, r && r.call ? r(n.p) : r), {})
      : a,
    j8(n.target),
    n.g,
    n.o,
    n.k,
  );
}
let $E, Bh, kh;
fc.bind({ g: 1 });
let wi = fc.bind({ k: 1 });
function q8(t, n, a, l) {
  (ta.p = n), ($E = t), (Bh = a), (kh = l);
}
function oa(t, n) {
  let a = this || {};
  return function () {
    let l = arguments;
    function r(u, c) {
      let d = Object.assign({}, u),
        h = d.className || r.className;
      (a.p = Object.assign({ theme: Bh && Bh() }, d)),
        (a.o = / *go\d+/.test(h)),
        (d.className = fc.apply(a, l) + (h ? " " + h : ""));
      let m = t;
      return (
        t[0] && ((m = d.as || t), delete d.as), kh && m[0] && kh(d), $E(m, d)
      );
    }
    return r;
  };
}
var X8 = (t) => typeof t == "function",
  Zu = (t, n) => (X8(t) ? t(n) : t),
  Z8 = (() => {
    let t = 0;
    return () => (++t).toString();
  })(),
  wE = (() => {
    let t;
    return () => {
      if (t === void 0 && typeof window < "u") {
        let n = matchMedia("(prefers-reduced-motion: reduce)");
        t = !n || n.matches;
      }
      return t;
    };
  })(),
  W8 = 20,
  CE = (t, n) => {
    switch (n.type) {
      case 0:
        return { ...t, toasts: [n.toast, ...t.toasts].slice(0, W8) };
      case 1:
        return {
          ...t,
          toasts: t.toasts.map((u) =>
            u.id === n.toast.id ? { ...u, ...n.toast } : u,
          ),
        };
      case 2:
        let { toast: a } = n;
        return CE(t, {
          type: t.toasts.find((u) => u.id === a.id) ? 1 : 0,
          toast: a,
        });
      case 3:
        let { toastId: l } = n;
        return {
          ...t,
          toasts: t.toasts.map((u) =>
            u.id === l || l === void 0
              ? { ...u, dismissed: !0, visible: !1 }
              : u,
          ),
        };
      case 4:
        return n.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((u) => u.id !== n.toastId) };
      case 5:
        return { ...t, pausedAt: n.time };
      case 6:
        let r = n.time - (t.pausedAt || 0);
        return {
          ...t,
          pausedAt: void 0,
          toasts: t.toasts.map((u) => ({
            ...u,
            pauseDuration: u.pauseDuration + r,
          })),
        };
    }
  },
  Pu = [],
  Oa = { toasts: [], pausedAt: void 0 },
  Ka = (t) => {
    (Oa = CE(Oa, t)),
      Pu.forEach((n) => {
        n(Oa);
      });
  },
  Q8 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  J8 = (t = {}) => {
    let [n, a] = S.useState(Oa),
      l = S.useRef(Oa);
    S.useEffect(
      () => (
        l.current !== Oa && a(Oa),
        Pu.push(a),
        () => {
          let u = Pu.indexOf(a);
          u > -1 && Pu.splice(u, 1);
        }
      ),
      [],
    );
    let r = n.toasts.map((u) => {
      var c, d, h;
      return {
        ...t,
        ...t[u.type],
        ...u,
        removeDelay:
          u.removeDelay ||
          ((c = t[u.type]) == null ? void 0 : c.removeDelay) ||
          (t == null ? void 0 : t.removeDelay),
        duration:
          u.duration ||
          ((d = t[u.type]) == null ? void 0 : d.duration) ||
          (t == null ? void 0 : t.duration) ||
          Q8[u.type],
        style: {
          ...t.style,
          ...((h = t[u.type]) == null ? void 0 : h.style),
          ...u.style,
        },
      };
    });
    return { ...n, toasts: r };
  },
  eA = (t, n = "blank", a) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: n,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: t,
    pauseDuration: 0,
    ...a,
    id: (a == null ? void 0 : a.id) || Z8(),
  }),
  Yr = (t) => (n, a) => {
    let l = eA(n, t, a);
    return Ka({ type: 2, toast: l }), l.id;
  },
  Ut = (t, n) => Yr("blank")(t, n);
Ut.error = Yr("error");
Ut.success = Yr("success");
Ut.loading = Yr("loading");
Ut.custom = Yr("custom");
Ut.dismiss = (t) => {
  Ka({ type: 3, toastId: t });
};
Ut.remove = (t) => Ka({ type: 4, toastId: t });
Ut.promise = (t, n, a) => {
  let l = Ut.loading(n.loading, { ...a, ...(a == null ? void 0 : a.loading) });
  return (
    typeof t == "function" && (t = t()),
    t
      .then((r) => {
        let u = n.success ? Zu(n.success, r) : void 0;
        return (
          u
            ? Ut.success(u, {
                id: l,
                ...a,
                ...(a == null ? void 0 : a.success),
              })
            : Ut.dismiss(l),
          r
        );
      })
      .catch((r) => {
        let u = n.error ? Zu(n.error, r) : void 0;
        u
          ? Ut.error(u, { id: l, ...a, ...(a == null ? void 0 : a.error) })
          : Ut.dismiss(l);
      }),
    t
  );
};
var tA = (t, n) => {
    Ka({ type: 1, toast: { id: t, height: n } });
  },
  nA = () => {
    Ka({ type: 5, time: Date.now() });
  },
  Er = new Map(),
  iA = 1e3,
  aA = (t, n = iA) => {
    if (Er.has(t)) return;
    let a = setTimeout(() => {
      Er.delete(t), Ka({ type: 4, toastId: t });
    }, n);
    Er.set(t, a);
  },
  lA = (t) => {
    let { toasts: n, pausedAt: a } = J8(t);
    S.useEffect(() => {
      if (a) return;
      let u = Date.now(),
        c = n.map((d) => {
          if (d.duration === 1 / 0) return;
          let h = (d.duration || 0) + d.pauseDuration - (u - d.createdAt);
          if (h < 0) {
            d.visible && Ut.dismiss(d.id);
            return;
          }
          return setTimeout(() => Ut.dismiss(d.id), h);
        });
      return () => {
        c.forEach((d) => d && clearTimeout(d));
      };
    }, [n, a]);
    let l = S.useCallback(() => {
        a && Ka({ type: 6, time: Date.now() });
      }, [a]),
      r = S.useCallback(
        (u, c) => {
          let {
              reverseOrder: d = !1,
              gutter: h = 8,
              defaultPosition: m,
            } = c || {},
            v = n.filter(
              (T) => (T.position || m) === (u.position || m) && T.height,
            ),
            b = v.findIndex((T) => T.id === u.id),
            g = v.filter((T, x) => x < b && T.visible).length;
          return v
            .filter((T) => T.visible)
            .slice(...(d ? [g + 1] : [0, g]))
            .reduce((T, x) => T + (x.height || 0) + h, 0);
        },
        [n],
      );
    return (
      S.useEffect(() => {
        n.forEach((u) => {
          if (u.dismissed) aA(u.id, u.removeDelay);
          else {
            let c = Er.get(u.id);
            c && (clearTimeout(c), Er.delete(u.id));
          }
        });
      }, [n]),
      {
        toasts: n,
        handlers: {
          updateHeight: tA,
          startPause: nA,
          endPause: l,
          calculateOffset: r,
        },
      }
    );
  },
  sA = wi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  rA = wi`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  oA = wi`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  uA = oa("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${rA} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${oA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  cA = wi`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  fA = oa("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${cA} 1s linear infinite;
`,
  dA = wi`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  hA = wi`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  pA = oa("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${dA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hA} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  mA = oa("div")`
  position: absolute;
`,
  vA = oa("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  bA = wi`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  gA = oa("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${bA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  yA = ({ toast: t }) => {
    let { icon: n, type: a, iconTheme: l } = t;
    return n !== void 0
      ? typeof n == "string"
        ? S.createElement(gA, null, n)
        : n
      : a === "blank"
        ? null
        : S.createElement(
            vA,
            null,
            S.createElement(fA, { ...l }),
            a !== "loading" &&
              S.createElement(
                mA,
                null,
                a === "error"
                  ? S.createElement(uA, { ...l })
                  : S.createElement(pA, { ...l }),
              ),
          );
  },
  SA = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  TA = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`,
  xA = "0%{opacity:0;} 100%{opacity:1;}",
  EA = "0%{opacity:1;} 100%{opacity:0;}",
  $A = oa("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  wA = oa("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  CA = (t, n) => {
    let a = t.includes("top") ? 1 : -1,
      [l, r] = wE() ? [xA, EA] : [SA(a), TA(a)];
    return {
      animation: n
        ? `${wi(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${wi(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  MA = S.memo(({ toast: t, position: n, style: a, children: l }) => {
    let r = t.height
        ? CA(t.position || n || "top-center", t.visible)
        : { opacity: 0 },
      u = S.createElement(yA, { toast: t }),
      c = S.createElement(wA, { ...t.ariaProps }, Zu(t.message, t));
    return S.createElement(
      $A,
      { className: t.className, style: { ...r, ...a, ...t.style } },
      typeof l == "function"
        ? l({ icon: u, message: c })
        : S.createElement(S.Fragment, null, u, c),
    );
  });
q8(S.createElement);
var DA = ({
    id: t,
    className: n,
    style: a,
    onHeightUpdate: l,
    children: r,
  }) => {
    let u = S.useCallback(
      (c) => {
        if (c) {
          let d = () => {
            let h = c.getBoundingClientRect().height;
            l(t, h);
          };
          d(),
            new MutationObserver(d).observe(c, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [t, l],
    );
    return S.createElement("div", { ref: u, className: n, style: a }, r);
  },
  AA = (t, n) => {
    let a = t.includes("top"),
      l = a ? { top: 0 } : { bottom: 0 },
      r = t.includes("center")
        ? { justifyContent: "center" }
        : t.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: wE() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${n * (a ? 1 : -1)}px)`,
      ...l,
      ...r,
    };
  },
  PA = fc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Eu = 16,
  xP = ({
    reverseOrder: t,
    position: n = "top-center",
    toastOptions: a,
    gutter: l,
    children: r,
    containerStyle: u,
    containerClassName: c,
  }) => {
    let { toasts: d, handlers: h } = lA(a);
    return S.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Eu,
          left: Eu,
          right: Eu,
          bottom: Eu,
          pointerEvents: "none",
          ...u,
        },
        className: c,
        onMouseEnter: h.startPause,
        onMouseLeave: h.endPause,
      },
      d.map((m) => {
        let v = m.position || n,
          b = h.calculateOffset(m, {
            reverseOrder: t,
            gutter: l,
            defaultPosition: n,
          }),
          g = AA(v, b);
        return S.createElement(
          DA,
          {
            id: m.id,
            key: m.id,
            onHeightUpdate: h.updateHeight,
            className: m.visible ? PA : "",
            style: g,
          },
          m.type === "custom"
            ? Zu(m.message, m)
            : r
              ? r(m)
              : S.createElement(MA, { toast: m, position: v }),
        );
      }),
    );
  },
  EP = Ut;
function RA() {
  let t = new Map();
  function n({ root: a, rootMargin: l, threshold: r }) {
    let u = t.get(a);
    u || ((u = new Map()), t.set(a, u));
    let c = JSON.stringify({ rootMargin: l, threshold: r }),
      d = u.get(c);
    if (!d) {
      let h = new Map();
      (d = {
        observer: new IntersectionObserver(
          (m) => {
            m.forEach((v) => {
              var b;
              (b = h.get(v.target)) == null || b(v);
            });
          },
          { root: a, rootMargin: l, threshold: r },
        ),
        entryCallbacks: h,
      }),
        u.set(c, d);
    }
    return {
      observe: (h, m) => {
        d.entryCallbacks.set(h, m), d.observer.observe(h);
      },
      unobserve: (h) => {
        d.entryCallbacks.delete(h), d.observer.unobserve(h);
      },
    };
  }
  return { getObserver: n };
}
var NA = "0px",
  OA = [0],
  LA = RA();
function _A(t) {
  let n = (t == null ? void 0 : t.rootMargin) ?? NA,
    a = (t == null ? void 0 : t.threshold) ?? OA,
    l = S.useRef(null),
    r = S.useRef(null),
    u = S.useRef(null),
    [c, d] = S.useState(),
    h = S.useCallback(() => {
      let g = l.current;
      if (!g) {
        d(void 0);
        return;
      }
      let T = LA.getObserver({ root: r.current, rootMargin: n, threshold: a });
      T.observe(g, (x) => {
        d(x);
      }),
        (u.current = T);
    }, [n, a]),
    m = S.useCallback(() => {
      let g = u.current,
        T = l.current;
      T && (g == null || g.unobserve(T)), (u.current = null);
    }, []),
    v = S.useCallback(
      (g) => {
        m(), (l.current = g), h();
      },
      [h, m],
    ),
    b = S.useCallback(
      (g) => {
        m(), (r.current = g), h();
      },
      [h, m],
    );
  return [v, { entry: c, rootRef: b }];
}
var zA = _A;
function VA(t) {
  var c;
  let [n, a] = zA(t),
    l = !!((c = a.entry) != null && c.isIntersecting),
    [r, u] = S.useState(l);
  return l && !r && u(!0), [n, { ...a, isVisible: l, wasEverVisible: r }];
}
var BA = VA,
  kA = 100;
function HA({
  loading: t,
  hasNextPage: n,
  onLoadMore: a,
  rootMargin: l,
  disabled: r,
  delayInMs: u = kA,
}) {
  let c = S.useRef(a),
    [d, { rootRef: h, isVisible: m }] = BA({ rootMargin: l });
  S.useEffect(() => {
    c.current = a;
  }, [a]);
  let v = !r && !t && m && n;
  return (
    S.useEffect(() => {
      if (v) {
        let b = setTimeout(() => {
          c.current();
        }, u);
        return () => {
          clearTimeout(b);
        };
      }
    }, [v, u]),
    [d, { rootRef: h }]
  );
}
var $P = HA,
  UA = _x;
const qp = Object.freeze(
  Object.defineProperty({ __proto__: null, default: UA }, Symbol.toStringTag, {
    value: "Module",
  }),
);
export {
  up as A,
  oP as B,
  mP as C,
  vP as D,
  $P as H,
  TP as J,
  xP as O,
  EP as V,
  eP as a,
  JA as b,
  FA as c,
  QA as d,
  G5 as e,
  yP as f,
  fP as g,
  cP as h,
  rP as i,
  qD as j,
  hP as k,
  dP as l,
  XA as m,
  uP as n,
  gP as o,
  sP as p,
  bP as q,
  ec as r,
  J5 as s,
  aP as t,
  pP as u,
  lP as v,
  nP as w,
  iP as x,
  ZA as y,
  SP as z,
};

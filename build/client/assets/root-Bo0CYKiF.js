import { L as H, w as Qe } from "./LuIcon-CuzLAvEj.js";
import {
  ao as B,
  al as ze,
  j as e,
  as as Le,
  ak as Je,
  a as oe,
  at as Ke,
  r as Ze,
  au as et,
  av as de,
  an as q,
  aw as tt,
  ax as rt,
  ay as st,
  az as nt,
  aA as at,
  aB as ge,
  aC as it,
  aD as lt,
  aE as ot,
  aF as ct,
  ap as te,
  aG as dt,
  aH as ut,
  aI as ht,
  aJ as mt,
} from "./vendor-react-BOaTbF0U.js";
import {
  d as ft,
  e as Ue,
  c as Oe,
  h as Be,
  L as Te,
  M as gt,
  f as pt,
  S as xt,
  g as yt,
  O as wt,
} from "./entry.client-K8h_9uke.js";
import {
  f as qe,
  g as X,
  h as G,
  z as jt,
  t as Ne,
  j as re,
  k as se,
  l as ne,
  p as vt,
  d as F,
  n as bt,
  u as St,
  V as ue,
  o as Et,
  q as Ot,
  v as Mt,
  i as V,
  w as Ct,
  x as K,
  O as kt,
  A as Me,
  m as ye,
  a as $t,
  b as Dt,
  J as Pt,
  y as It,
} from "./vendor-react-dom-CNmmZLPy.js";
import {
  a as we,
  w as _t,
  i as Nt,
  f as Ft,
  t as ae,
  g as Ce,
  u as ke,
  O as he,
  h as $e,
  j as je,
  k as Ye,
  m as Re,
  n as De,
  o as At,
  F as Y,
  p as zt,
  q as Lt,
  r as Ut,
  s as Pe,
  v as Ie,
  x as _e,
  b as Bt,
  y as Tt,
  c as Z,
  z as He,
} from "./ListTabs-CVA7tT73.js";
import { g as We, a as qt } from "./vendor-chance-vhTGba_j.js";
import "./vendor-tailwind-merge-Cl7RZUN2.js";
import "./vendor-zod-C4bLmoCR.js";
import "./vendor-react-hook-form-DyMOlGJB.js";
const Yt = "/assets/latin-400-BfrSfx2R.css",
  Rt = () => {
    const { isMobile: d } = we(),
      [p, h] = B(_t),
      i = ze(Nt),
      f = d && i && Object.keys(p || {}).length > 0;
    return e.jsx(e.Fragment, {
      children: e.jsx(qe, {
        isOpen: f,
        onClose: () => {
          h({});
        },
        placement: "bottom",
        backdrop: "transparent",
        classNames: { closeButton: "z-50" },
        closeButton: e.jsx("div", { children: e.jsx(H, { icon: Le }) }),
        children: e.jsx(X, {
          children: e.jsx(G, { className: "p-0", children: e.jsx(Ft, {}) }),
        }),
      }),
    });
  };
var pe = { exports: {} },
  Ht = pe.exports,
  Fe;
function Wt() {
  return (
    Fe ||
      ((Fe = 1),
      (function (d, p) {
        (function (h, i) {
          d.exports = i();
        })(Ht, function () {
          var h = 1e3,
            i = 6e4,
            f = 36e5,
            u = "millisecond",
            a = "second",
            t = "minute",
            m = "hour",
            b = "day",
            S = "week",
            k = "month",
            P = "quarter",
            A = "year",
            R = "date",
            me = "Invalid Date",
            be =
              /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            Se =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            c = {
              name: "en",
              weekdays:
                "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                  "_",
                ),
              months:
                "January_February_March_April_May_June_July_August_September_October_November_December".split(
                  "_",
                ),
              ordinal: function (o) {
                var n = ["th", "st", "nd", "rd"],
                  s = o % 100;
                return "[" + o + (n[(s - 20) % 10] || n[s] || n[0]) + "]";
              },
            },
            v = function (o, n, s) {
              var g = String(o);
              return !g || g.length >= n
                ? o
                : "" + Array(n + 1 - g.length).join(s) + o;
            },
            O = {
              s: v,
              z: function (o) {
                var n = -o.utcOffset(),
                  s = Math.abs(n),
                  g = Math.floor(s / 60),
                  l = s % 60;
                return (n <= 0 ? "+" : "-") + v(g, 2, "0") + ":" + v(l, 2, "0");
              },
              m: function o(n, s) {
                if (n.date() < s.date()) return -o(s, n);
                var g = 12 * (s.year() - n.year()) + (s.month() - n.month()),
                  l = n.clone().add(g, k),
                  w = s - l < 0,
                  j = n.clone().add(g + (w ? -1 : 1), k);
                return +(-(g + (s - l) / (w ? l - j : j - l)) || 0);
              },
              a: function (o) {
                return o < 0 ? Math.ceil(o) || 0 : Math.floor(o);
              },
              p: function (o) {
                return (
                  {
                    M: k,
                    y: A,
                    w: S,
                    d: b,
                    D: R,
                    h: m,
                    m: t,
                    s: a,
                    ms: u,
                    Q: P,
                  }[o] ||
                  String(o || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (o) {
                return o === void 0;
              },
            },
            C = "en",
            I = {};
          I[C] = c;
          var $ = "$isDayjsObject",
            _ = function (o) {
              return o instanceof M || !(!o || !o[$]);
            },
            r = function o(n, s, g) {
              var l;
              if (!n) return C;
              if (typeof n == "string") {
                var w = n.toLowerCase();
                I[w] && (l = w), s && ((I[w] = s), (l = w));
                var j = n.split("-");
                if (!l && j.length > 1) return o(j[0]);
              } else {
                var D = n.name;
                (I[D] = n), (l = D);
              }
              return !g && l && (C = l), l || (!g && C);
            },
            y = function (o, n) {
              if (_(o)) return o.clone();
              var s = typeof n == "object" ? n : {};
              return (s.date = o), (s.args = arguments), new M(s);
            },
            x = O;
          (x.l = r),
            (x.i = _),
            (x.w = function (o, n) {
              return y(o, {
                locale: n.$L,
                utc: n.$u,
                x: n.$x,
                $offset: n.$offset,
              });
            });
          var M = (function () {
              function o(s) {
                (this.$L = r(s.locale, null, !0)),
                  this.parse(s),
                  (this.$x = this.$x || s.x || {}),
                  (this[$] = !0);
              }
              var n = o.prototype;
              return (
                (n.parse = function (s) {
                  (this.$d = (function (g) {
                    var l = g.date,
                      w = g.utc;
                    if (l === null) return new Date(NaN);
                    if (x.u(l)) return new Date();
                    if (l instanceof Date) return new Date(l);
                    if (typeof l == "string" && !/Z$/i.test(l)) {
                      var j = l.match(be);
                      if (j) {
                        var D = j[2] - 1 || 0,
                          N = (j[7] || "0").substring(0, 3);
                        return w
                          ? new Date(
                              Date.UTC(
                                j[1],
                                D,
                                j[3] || 1,
                                j[4] || 0,
                                j[5] || 0,
                                j[6] || 0,
                                N,
                              ),
                            )
                          : new Date(
                              j[1],
                              D,
                              j[3] || 1,
                              j[4] || 0,
                              j[5] || 0,
                              j[6] || 0,
                              N,
                            );
                      }
                    }
                    return new Date(l);
                  })(s)),
                    this.init();
                }),
                (n.init = function () {
                  var s = this.$d;
                  (this.$y = s.getFullYear()),
                    (this.$M = s.getMonth()),
                    (this.$D = s.getDate()),
                    (this.$W = s.getDay()),
                    (this.$H = s.getHours()),
                    (this.$m = s.getMinutes()),
                    (this.$s = s.getSeconds()),
                    (this.$ms = s.getMilliseconds());
                }),
                (n.$utils = function () {
                  return x;
                }),
                (n.isValid = function () {
                  return this.$d.toString() !== me;
                }),
                (n.isSame = function (s, g) {
                  var l = y(s);
                  return this.startOf(g) <= l && l <= this.endOf(g);
                }),
                (n.isAfter = function (s, g) {
                  return y(s) < this.startOf(g);
                }),
                (n.isBefore = function (s, g) {
                  return this.endOf(g) < y(s);
                }),
                (n.$g = function (s, g, l) {
                  return x.u(s) ? this[g] : this.set(l, s);
                }),
                (n.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (n.valueOf = function () {
                  return this.$d.getTime();
                }),
                (n.startOf = function (s, g) {
                  var l = this,
                    w = !!x.u(g) || g,
                    j = x.p(s),
                    D = function (J, U) {
                      var W = x.w(
                        l.$u ? Date.UTC(l.$y, U, J) : new Date(l.$y, U, J),
                        l,
                      );
                      return w ? W : W.endOf(b);
                    },
                    N = function (J, U) {
                      return x.w(
                        l
                          .toDate()
                          [
                            J
                          ].apply(l.toDate("s"), (w ? [0, 0, 0, 0] : [23, 59,
                                  59, 999]).slice(U)),
                        l,
                      );
                    },
                    z = this.$W,
                    L = this.$M,
                    T = this.$D,
                    ee = "set" + (this.$u ? "UTC" : "");
                  switch (j) {
                    case A:
                      return w ? D(1, 0) : D(31, 11);
                    case k:
                      return w ? D(1, L) : D(0, L + 1);
                    case S:
                      var Q = this.$locale().weekStart || 0,
                        ie = (z < Q ? z + 7 : z) - Q;
                      return D(w ? T - ie : T + (6 - ie), L);
                    case b:
                    case R:
                      return N(ee + "Hours", 0);
                    case m:
                      return N(ee + "Minutes", 1);
                    case t:
                      return N(ee + "Seconds", 2);
                    case a:
                      return N(ee + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (n.endOf = function (s) {
                  return this.startOf(s, !1);
                }),
                (n.$set = function (s, g) {
                  var l,
                    w = x.p(s),
                    j = "set" + (this.$u ? "UTC" : ""),
                    D = ((l = {}),
                    (l[b] = j + "Date"),
                    (l[R] = j + "Date"),
                    (l[k] = j + "Month"),
                    (l[A] = j + "FullYear"),
                    (l[m] = j + "Hours"),
                    (l[t] = j + "Minutes"),
                    (l[a] = j + "Seconds"),
                    (l[u] = j + "Milliseconds"),
                    l)[w],
                    N = w === b ? this.$D + (g - this.$W) : g;
                  if (w === k || w === A) {
                    var z = this.clone().set(R, 1);
                    z.$d[D](N),
                      z.init(),
                      (this.$d = z.set(
                        R,
                        Math.min(this.$D, z.daysInMonth()),
                      ).$d);
                  } else D && this.$d[D](N);
                  return this.init(), this;
                }),
                (n.set = function (s, g) {
                  return this.clone().$set(s, g);
                }),
                (n.get = function (s) {
                  return this[x.p(s)]();
                }),
                (n.add = function (s, g) {
                  var l,
                    w = this;
                  s = Number(s);
                  var j = x.p(g),
                    D = function (L) {
                      var T = y(w);
                      return x.w(T.date(T.date() + Math.round(L * s)), w);
                    };
                  if (j === k) return this.set(k, this.$M + s);
                  if (j === A) return this.set(A, this.$y + s);
                  if (j === b) return D(1);
                  if (j === S) return D(7);
                  var N =
                      ((l = {}), (l[t] = i), (l[m] = f), (l[a] = h), l)[j] || 1,
                    z = this.$d.getTime() + s * N;
                  return x.w(z, this);
                }),
                (n.subtract = function (s, g) {
                  return this.add(-1 * s, g);
                }),
                (n.format = function (s) {
                  var g = this,
                    l = this.$locale();
                  if (!this.isValid()) return l.invalidDate || me;
                  var w = s || "YYYY-MM-DDTHH:mm:ssZ",
                    j = x.z(this),
                    D = this.$H,
                    N = this.$m,
                    z = this.$M,
                    L = l.weekdays,
                    T = l.months,
                    ee = l.meridiem,
                    Q = function (U, W, le, fe) {
                      return (U && (U[W] || U(g, w))) || le[W].slice(0, fe);
                    },
                    ie = function (U) {
                      return x.s(D % 12 || 12, U, "0");
                    },
                    J =
                      ee ||
                      function (U, W, le) {
                        var fe = U < 12 ? "AM" : "PM";
                        return le ? fe.toLowerCase() : fe;
                      };
                  return w.replace(Se, function (U, W) {
                    return (
                      W ||
                      (function (le) {
                        switch (le) {
                          case "YY":
                            return String(g.$y).slice(-2);
                          case "YYYY":
                            return x.s(g.$y, 4, "0");
                          case "M":
                            return z + 1;
                          case "MM":
                            return x.s(z + 1, 2, "0");
                          case "MMM":
                            return Q(l.monthsShort, z, T, 3);
                          case "MMMM":
                            return Q(T, z);
                          case "D":
                            return g.$D;
                          case "DD":
                            return x.s(g.$D, 2, "0");
                          case "d":
                            return String(g.$W);
                          case "dd":
                            return Q(l.weekdaysMin, g.$W, L, 2);
                          case "ddd":
                            return Q(l.weekdaysShort, g.$W, L, 3);
                          case "dddd":
                            return L[g.$W];
                          case "H":
                            return String(D);
                          case "HH":
                            return x.s(D, 2, "0");
                          case "h":
                            return ie(1);
                          case "hh":
                            return ie(2);
                          case "a":
                            return J(D, N, !0);
                          case "A":
                            return J(D, N, !1);
                          case "m":
                            return String(N);
                          case "mm":
                            return x.s(N, 2, "0");
                          case "s":
                            return String(g.$s);
                          case "ss":
                            return x.s(g.$s, 2, "0");
                          case "SSS":
                            return x.s(g.$ms, 3, "0");
                          case "Z":
                            return j;
                        }
                        return null;
                      })(U) ||
                      j.replace(":", "")
                    );
                  });
                }),
                (n.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (n.diff = function (s, g, l) {
                  var w,
                    j = this,
                    D = x.p(g),
                    N = y(s),
                    z = (N.utcOffset() - this.utcOffset()) * i,
                    L = this - N,
                    T = function () {
                      return x.m(j, N);
                    };
                  switch (D) {
                    case A:
                      w = T() / 12;
                      break;
                    case k:
                      w = T();
                      break;
                    case P:
                      w = T() / 3;
                      break;
                    case S:
                      w = (L - z) / 6048e5;
                      break;
                    case b:
                      w = (L - z) / 864e5;
                      break;
                    case m:
                      w = L / f;
                      break;
                    case t:
                      w = L / i;
                      break;
                    case a:
                      w = L / h;
                      break;
                    default:
                      w = L;
                  }
                  return l ? w : x.a(w);
                }),
                (n.daysInMonth = function () {
                  return this.endOf(k).$D;
                }),
                (n.$locale = function () {
                  return I[this.$L];
                }),
                (n.locale = function (s, g) {
                  if (!s) return this.$L;
                  var l = this.clone(),
                    w = r(s, g, !0);
                  return w && (l.$L = w), l;
                }),
                (n.clone = function () {
                  return x.w(this.$d, this);
                }),
                (n.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (n.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (n.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (n.toString = function () {
                  return this.$d.toUTCString();
                }),
                o
              );
            })(),
            E = M.prototype;
          return (
            (y.prototype = E),
            [
              ["$ms", u],
              ["$s", a],
              ["$m", t],
              ["$H", m],
              ["$W", b],
              ["$M", k],
              ["$y", A],
              ["$D", R],
            ].forEach(function (o) {
              E[o[1]] = function (n) {
                return this.$g(n, o[0], o[1]);
              };
            }),
            (y.extend = function (o, n) {
              return o.$i || (o(n, M, y), (o.$i = !0)), y;
            }),
            (y.locale = r),
            (y.isDayjs = _),
            (y.unix = function (o) {
              return y(1e3 * o);
            }),
            (y.en = I[C]),
            (y.Ls = I),
            (y.p = {}),
            y
          );
        });
      })(pe)),
    pe.exports
  );
}
var Vt = Wt();
const Ee = We(Vt),
  Xt = ({ enabled: d = !0 }) =>
    Je({
      queryKey: ["getStudyCalendar"],
      queryFn: () => ae.loader.getStudyCalendar.query(),
      enabled: d,
    }),
  ve = () => {
    const { theme: d, setTheme: p } = jt(),
      h = d === "dark";
    return {
      isDarkMode: h,
      toggleTheme: () => {
        p(h ? "light" : "dark");
      },
      setTheme: p,
    };
  },
  Gt = (d = []) => {
    const p = d.map((a) => ({
        ...a,
        updatedAt: Ee(a.updatedAt).format("YYYY-MM-DD"),
      })),
      h = Ee().subtract(6, "month"),
      i = Ee(),
      f = [];
    let u = h;
    for (; u.isBefore(i.add(1, "day")); ) {
      const a = u.format("YYYY-MM-DD"),
        t = { date: a, count: 0, level: 0 },
        m = p.filter((b) => b.updatedAt === a).length;
      if (m > 0) {
        const b = Math.min(Math.ceil(m / 10), 4);
        (t.count = m), (t.level = b);
      }
      f.push(t), (u = u.add(1, "day"));
    }
    return f;
  },
  Qt = () => {
    const { isDarkMode: d } = ve(),
      p = ze(Ce),
      h = Xt({ enabled: p }),
      { studyCalendar: i = [] } = h.data || {},
      f = Gt(i);
    return (
      oe.useEffect(() => {
        p && h.refetch();
      }, [p]),
      e.jsx(Ke.ActivityCalendar, {
        colorScheme: d ? "dark" : "light",
        data: f,
        blockRadius: 0,
        loading: h.isFetching,
        maxLevel: 4,
        theme: {
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        },
        renderBlock: (u, a) =>
          e.jsx(Ne, {
            content:
              a.count > 0
                ? `${a.date} studied ${a.count} words`
                : `${a.date} no study`,
            children: u,
          }),
        labels: {
          totalCount: `In the past 6 months, studied ${i.length} words in total`,
          legend: { less: "Low", more: "High" },
        },
        renderColorLegend: (u, a) =>
          e.jsx(Ne, { content: `Level ${a}`, children: u }),
      })
    );
  };
var xe = { exports: {} },
  Jt = xe.exports,
  Ae;
function Kt() {
  return (
    Ae ||
      ((Ae = 1),
      (function (d, p) {
        (function (h, i) {
          d.exports = i(Ze());
        })(Jt, function (h) {
          return (function (i) {
            var f = {};
            function u(a) {
              if (f[a]) return f[a].exports;
              var t = (f[a] = { i: a, l: !1, exports: {} });
              return (
                i[a].call(t.exports, t, t.exports, u), (t.l = !0), t.exports
              );
            }
            return (
              (u.m = i),
              (u.c = f),
              (u.d = function (a, t, m) {
                u.o(a, t) ||
                  Object.defineProperty(a, t, { enumerable: !0, get: m });
              }),
              (u.r = function (a) {
                typeof Symbol < "u" &&
                  Symbol.toStringTag &&
                  Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(a, "__esModule", { value: !0 });
              }),
              (u.t = function (a, t) {
                if (
                  (1 & t && (a = u(a)),
                  8 & t || (4 & t && typeof a == "object" && a && a.__esModule))
                )
                  return a;
                var m = Object.create(null);
                if (
                  (u.r(m),
                  Object.defineProperty(m, "default", {
                    enumerable: !0,
                    value: a,
                  }),
                  2 & t && typeof a != "string")
                )
                  for (var b in a)
                    u.d(
                      m,
                      b,
                      function (S) {
                        return a[S];
                      }.bind(null, b),
                    );
                return m;
              }),
              (u.n = function (a) {
                var t =
                  a && a.__esModule
                    ? function () {
                        return a.default;
                      }
                    : function () {
                        return a;
                      };
                return u.d(t, "a", t), t;
              }),
              (u.o = function (a, t) {
                return Object.prototype.hasOwnProperty.call(a, t);
              }),
              (u.p = "/"),
              u((u.s = 1))
            );
          })([
            function (i, f) {
              i.exports = h;
            },
            function (i, f, u) {
              i.exports = u(2);
            },
            function (i, f, u) {
              function a(c, v) {
                if (c == null) return {};
                var O,
                  C,
                  I = (function (_, r) {
                    if (_ == null) return {};
                    var y,
                      x,
                      M = {},
                      E = Object.keys(_);
                    for (x = 0; x < E.length; x++)
                      (y = E[x]), r.indexOf(y) >= 0 || (M[y] = _[y]);
                    return M;
                  })(c, v);
                if (Object.getOwnPropertySymbols) {
                  var $ = Object.getOwnPropertySymbols(c);
                  for (C = 0; C < $.length; C++)
                    (O = $[C]),
                      v.indexOf(O) >= 0 ||
                        (Object.prototype.propertyIsEnumerable.call(c, O) &&
                          (I[O] = c[O]));
                }
                return I;
              }
              u.r(f);
              var t = u(0),
                m = u.n(t),
                b = function (c) {
                  for (var v = 0, O = 0; O < c.length; O++)
                    (v = (v << 5) - v + c.charCodeAt(O)), (v &= v);
                  return Math.abs(v);
                },
                S = function (c, v) {
                  return Math.floor((c / Math.pow(10, v)) % 10);
                },
                k = function (c, v) {
                  return !(S(c, v) % 2);
                },
                P = function (c, v, O) {
                  var C = c % v;
                  return O && S(c, O) % 2 === 0 ? -C : C;
                },
                A = function (c, v, O) {
                  return v[c % O];
                },
                R = function (c) {
                  var v = c.name,
                    O = c.colors,
                    C = c.title,
                    I = c.square,
                    $ = c.size,
                    _ = a(c, ["name", "colors", "title", "square", "size"]),
                    r = (function (x, M) {
                      var E = b(x),
                        o = M && M.length;
                      return Array.from({ length: 3 }, function (n, s) {
                        return {
                          color: A(E + s, M, o),
                          translateX: P(E * (s + 1), 8, 1),
                          translateY: P(E * (s + 1), 8, 2),
                          scale: 1.2 + P(E * (s + 1), 4) / 10,
                          rotate: P(E * (s + 1), 360, 1),
                        };
                      });
                    })(v, O),
                    y = t.useId();
                  return t.createElement(
                    "svg",
                    Object.assign(
                      {
                        viewBox: "0 0 80 80",
                        fill: "none",
                        role: "img",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: $,
                        height: $,
                      },
                      _,
                    ),
                    C && t.createElement("title", null, v),
                    t.createElement(
                      "mask",
                      {
                        id: y,
                        maskUnits: "userSpaceOnUse",
                        x: 0,
                        y: 0,
                        width: 80,
                        height: 80,
                      },
                      t.createElement("rect", {
                        width: 80,
                        height: 80,
                        rx: I ? void 0 : 160,
                        fill: "#FFFFFF",
                      }),
                    ),
                    t.createElement(
                      "g",
                      { mask: "url(#".concat(y, ")") },
                      t.createElement("rect", {
                        width: 80,
                        height: 80,
                        fill: r[0].color,
                      }),
                      t.createElement("path", {
                        filter: "url(#filter_".concat(y, ")"),
                        d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",
                        fill: r[1].color,
                        transform:
                          "translate(" +
                          r[1].translateX +
                          " " +
                          r[1].translateY +
                          ") rotate(" +
                          r[1].rotate +
                          " 40 40) scale(" +
                          r[2].scale +
                          ")",
                      }),
                      t.createElement("path", {
                        filter: "url(#filter_".concat(y, ")"),
                        style: { mixBlendMode: "overlay" },
                        d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",
                        fill: r[2].color,
                        transform:
                          "translate(" +
                          r[2].translateX +
                          " " +
                          r[2].translateY +
                          ") rotate(" +
                          r[2].rotate +
                          " 40 40) scale(" +
                          r[2].scale +
                          ")",
                      }),
                    ),
                    t.createElement(
                      "defs",
                      null,
                      t.createElement(
                        "filter",
                        {
                          id: "filter_".concat(y),
                          filterUnits: "userSpaceOnUse",
                          colorInterpolationFilters: "sRGB",
                        },
                        t.createElement("feFlood", {
                          floodOpacity: 0,
                          result: "BackgroundImageFix",
                        }),
                        t.createElement("feBlend", {
                          in: "SourceGraphic",
                          in2: "BackgroundImageFix",
                          result: "shape",
                        }),
                        t.createElement("feGaussianBlur", {
                          stdDeviation: 7,
                          result: "effect1_foregroundBlur",
                        }),
                      ),
                    ),
                  );
                },
                me = {
                  pixel: function (c) {
                    var v = c.name,
                      O = c.colors,
                      C = c.title,
                      I = c.square,
                      $ = c.size,
                      _ = a(c, ["name", "colors", "title", "square", "size"]),
                      r = (function (x, M) {
                        var E = b(x),
                          o = M && M.length;
                        return Array.from({ length: 64 }, function (n, s) {
                          return A(E % (s + 1), M, o);
                        });
                      })(v, O),
                      y = t.useId();
                    return t.createElement(
                      "svg",
                      Object.assign(
                        {
                          viewBox: "0 0 80 80",
                          fill: "none",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: $,
                          height: $,
                        },
                        _,
                      ),
                      C && t.createElement("title", null, v),
                      t.createElement(
                        "mask",
                        {
                          id: y,
                          "mask-type": "alpha",
                          maskUnits: "userSpaceOnUse",
                          x: 0,
                          y: 0,
                          width: 80,
                          height: 80,
                        },
                        t.createElement("rect", {
                          width: 80,
                          height: 80,
                          rx: I ? void 0 : 160,
                          fill: "#FFFFFF",
                        }),
                      ),
                      t.createElement(
                        "g",
                        { mask: "url(#".concat(y, ")") },
                        t.createElement("rect", {
                          width: 10,
                          height: 10,
                          fill: r[0],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          width: 10,
                          height: 10,
                          fill: r[1],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          width: 10,
                          height: 10,
                          fill: r[2],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          width: 10,
                          height: 10,
                          fill: r[3],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          width: 10,
                          height: 10,
                          fill: r[4],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          width: 10,
                          height: 10,
                          fill: r[5],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          width: 10,
                          height: 10,
                          fill: r[6],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          width: 10,
                          height: 10,
                          fill: r[7],
                        }),
                        t.createElement("rect", {
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[8],
                        }),
                        t.createElement("rect", {
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[9],
                        }),
                        t.createElement("rect", {
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[10],
                        }),
                        t.createElement("rect", {
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[11],
                        }),
                        t.createElement("rect", {
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[12],
                        }),
                        t.createElement("rect", {
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[13],
                        }),
                        t.createElement("rect", {
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[14],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[15],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[16],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[17],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[18],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[19],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[20],
                        }),
                        t.createElement("rect", {
                          x: 20,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[21],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[22],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[23],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[24],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[25],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[26],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[27],
                        }),
                        t.createElement("rect", {
                          x: 40,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[28],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[29],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[30],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[31],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[32],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[33],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[34],
                        }),
                        t.createElement("rect", {
                          x: 60,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[35],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[36],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[37],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[38],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[39],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[40],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[41],
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[42],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[43],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[44],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[45],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[46],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[47],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[48],
                        }),
                        t.createElement("rect", {
                          x: 30,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[49],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[50],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[51],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[52],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[53],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[54],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[55],
                        }),
                        t.createElement("rect", {
                          x: 50,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[56],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 10,
                          width: 10,
                          height: 10,
                          fill: r[57],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 20,
                          width: 10,
                          height: 10,
                          fill: r[58],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 30,
                          width: 10,
                          height: 10,
                          fill: r[59],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 40,
                          width: 10,
                          height: 10,
                          fill: r[60],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 50,
                          width: 10,
                          height: 10,
                          fill: r[61],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 60,
                          width: 10,
                          height: 10,
                          fill: r[62],
                        }),
                        t.createElement("rect", {
                          x: 70,
                          y: 70,
                          width: 10,
                          height: 10,
                          fill: r[63],
                        }),
                      ),
                    );
                  },
                  bauhaus: function (c) {
                    var v = c.name,
                      O = c.colors,
                      C = c.title,
                      I = c.square,
                      $ = c.size,
                      _ = a(c, ["name", "colors", "title", "square", "size"]),
                      r = (function (x, M) {
                        var E = b(x),
                          o = M && M.length;
                        return Array.from({ length: 4 }, function (n, s) {
                          return {
                            color: A(E + s, M, o),
                            translateX: P(E * (s + 1), 40 - (s + 17), 1),
                            translateY: P(E * (s + 1), 40 - (s + 17), 2),
                            rotate: P(E * (s + 1), 360),
                            isSquare: k(E, 2),
                          };
                        });
                      })(v, O),
                      y = t.useId();
                    return t.createElement(
                      "svg",
                      Object.assign(
                        {
                          viewBox: "0 0 80 80",
                          fill: "none",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: $,
                          height: $,
                        },
                        _,
                      ),
                      C && t.createElement("title", null, v),
                      t.createElement(
                        "mask",
                        {
                          id: y,
                          maskUnits: "userSpaceOnUse",
                          x: 0,
                          y: 0,
                          width: 80,
                          height: 80,
                        },
                        t.createElement("rect", {
                          width: 80,
                          height: 80,
                          rx: I ? void 0 : 160,
                          fill: "#FFFFFF",
                        }),
                      ),
                      t.createElement(
                        "g",
                        { mask: "url(#".concat(y, ")") },
                        t.createElement("rect", {
                          width: 80,
                          height: 80,
                          fill: r[0].color,
                        }),
                        t.createElement("rect", {
                          x: 10,
                          y: 30,
                          width: 80,
                          height: r[1].isSquare ? 80 : 10,
                          fill: r[1].color,
                          transform:
                            "translate(" +
                            r[1].translateX +
                            " " +
                            r[1].translateY +
                            ") rotate(" +
                            r[1].rotate +
                            " 40 40)",
                        }),
                        t.createElement("circle", {
                          cx: 40,
                          cy: 40,
                          fill: r[2].color,
                          r: 16,
                          transform:
                            "translate(" +
                            r[2].translateX +
                            " " +
                            r[2].translateY +
                            ")",
                        }),
                        t.createElement("line", {
                          x1: 0,
                          y1: 40,
                          x2: 80,
                          y2: 40,
                          strokeWidth: 2,
                          stroke: r[3].color,
                          transform:
                            "translate(" +
                            r[3].translateX +
                            " " +
                            r[3].translateY +
                            ") rotate(" +
                            r[3].rotate +
                            " 40 40)",
                        }),
                      ),
                    );
                  },
                  ring: function (c) {
                    var v = c.name,
                      O = c.colors,
                      C = c.title,
                      I = c.square,
                      $ = c.size,
                      _ = a(c, ["name", "colors", "title", "square", "size"]),
                      r = (function (x, M) {
                        var E = b(M),
                          o = x && x.length,
                          n = Array.from({ length: 5 }, function (g, l) {
                            return A(E + l, x, o);
                          }),
                          s = [];
                        return (
                          (s[0] = n[0]),
                          (s[1] = n[1]),
                          (s[2] = n[1]),
                          (s[3] = n[2]),
                          (s[4] = n[2]),
                          (s[5] = n[3]),
                          (s[6] = n[3]),
                          (s[7] = n[0]),
                          (s[8] = n[4]),
                          s
                        );
                      })(O, v),
                      y = m.a.useId();
                    return m.a.createElement(
                      "svg",
                      Object.assign(
                        {
                          viewBox: "0 0 90 90",
                          fill: "none",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: $,
                          height: $,
                        },
                        _,
                      ),
                      C && m.a.createElement("title", null, v),
                      m.a.createElement(
                        "mask",
                        {
                          id: y,
                          maskUnits: "userSpaceOnUse",
                          x: 0,
                          y: 0,
                          width: 90,
                          height: 90,
                        },
                        m.a.createElement("rect", {
                          width: 90,
                          height: 90,
                          rx: I ? void 0 : 180,
                          fill: "#FFFFFF",
                        }),
                      ),
                      m.a.createElement(
                        "g",
                        { mask: "url(#".concat(y, ")") },
                        m.a.createElement("path", {
                          d: "M0 0h90v45H0z",
                          fill: r[0],
                        }),
                        m.a.createElement("path", {
                          d: "M0 45h90v45H0z",
                          fill: r[1],
                        }),
                        m.a.createElement("path", {
                          d: "M83 45a38 38 0 00-76 0h76z",
                          fill: r[2],
                        }),
                        m.a.createElement("path", {
                          d: "M83 45a38 38 0 01-76 0h76z",
                          fill: r[3],
                        }),
                        m.a.createElement("path", {
                          d: "M77 45a32 32 0 10-64 0h64z",
                          fill: r[4],
                        }),
                        m.a.createElement("path", {
                          d: "M77 45a32 32 0 11-64 0h64z",
                          fill: r[5],
                        }),
                        m.a.createElement("path", {
                          d: "M71 45a26 26 0 00-52 0h52z",
                          fill: r[6],
                        }),
                        m.a.createElement("path", {
                          d: "M71 45a26 26 0 01-52 0h52z",
                          fill: r[7],
                        }),
                        m.a.createElement("circle", {
                          cx: 45,
                          cy: 45,
                          r: 23,
                          fill: r[8],
                        }),
                      ),
                    );
                  },
                  beam: function (c) {
                    var v = c.name,
                      O = c.colors,
                      C = c.title,
                      I = c.square,
                      $ = c.size,
                      _ = a(c, ["name", "colors", "title", "square", "size"]),
                      r = (function (x, M) {
                        var E,
                          o = b(x),
                          n = M && M.length,
                          s = A(o, M, n),
                          g = P(o, 10, 1),
                          l = g < 5 ? g + 4 : g,
                          w = P(o, 10, 2),
                          j = w < 5 ? w + 4 : w;
                        return {
                          wrapperColor: s,
                          faceColor:
                            ((E = s),
                            E.slice(0, 1) === "#" && (E = E.slice(1)),
                            (299 * parseInt(E.substr(0, 2), 16) +
                              587 * parseInt(E.substr(2, 2), 16) +
                              114 * parseInt(E.substr(4, 2), 16)) /
                              1e3 >=
                            128
                              ? "#000000"
                              : "#FFFFFF"),
                          backgroundColor: A(o + 13, M, n),
                          wrapperTranslateX: l,
                          wrapperTranslateY: j,
                          wrapperRotate: P(o, 360),
                          wrapperScale: 1 + P(o, 3) / 10,
                          isMouthOpen: k(o, 2),
                          isCircle: k(o, 1),
                          eyeSpread: P(o, 5),
                          mouthSpread: P(o, 3),
                          faceRotate: P(o, 10, 3),
                          faceTranslateX: l > 6 ? l / 2 : P(o, 8, 1),
                          faceTranslateY: j > 6 ? j / 2 : P(o, 7, 2),
                        };
                      })(v, O),
                      y = t.useId();
                    return t.createElement(
                      "svg",
                      Object.assign(
                        {
                          viewBox: "0 0 36 36",
                          fill: "none",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: $,
                          height: $,
                        },
                        _,
                      ),
                      C && t.createElement("title", null, v),
                      t.createElement(
                        "mask",
                        {
                          id: y,
                          maskUnits: "userSpaceOnUse",
                          x: 0,
                          y: 0,
                          width: 36,
                          height: 36,
                        },
                        t.createElement("rect", {
                          width: 36,
                          height: 36,
                          rx: I ? void 0 : 72,
                          fill: "#FFFFFF",
                        }),
                      ),
                      t.createElement(
                        "g",
                        { mask: "url(#".concat(y, ")") },
                        t.createElement("rect", {
                          width: 36,
                          height: 36,
                          fill: r.backgroundColor,
                        }),
                        t.createElement("rect", {
                          x: "0",
                          y: "0",
                          width: 36,
                          height: 36,
                          transform:
                            "translate(" +
                            r.wrapperTranslateX +
                            " " +
                            r.wrapperTranslateY +
                            ") rotate(" +
                            r.wrapperRotate +
                            " 18 18) scale(" +
                            r.wrapperScale +
                            ")",
                          fill: r.wrapperColor,
                          rx: r.isCircle ? 36 : 6,
                        }),
                        t.createElement(
                          "g",
                          {
                            transform:
                              "translate(" +
                              r.faceTranslateX +
                              " " +
                              r.faceTranslateY +
                              ") rotate(" +
                              r.faceRotate +
                              " 18 18)",
                          },
                          r.isMouthOpen
                            ? t.createElement("path", {
                                d:
                                  "M15 " +
                                  (19 + r.mouthSpread) +
                                  "c2 1 4 1 6 0",
                                stroke: r.faceColor,
                                fill: "none",
                                strokeLinecap: "round",
                              })
                            : t.createElement("path", {
                                d:
                                  "M13," +
                                  (19 + r.mouthSpread) +
                                  " a1,0.75 0 0,0 10,0",
                                fill: r.faceColor,
                              }),
                          t.createElement("rect", {
                            x: 14 - r.eyeSpread,
                            y: 14,
                            width: 1.5,
                            height: 2,
                            rx: 1,
                            stroke: "none",
                            fill: r.faceColor,
                          }),
                          t.createElement("rect", {
                            x: 20 + r.eyeSpread,
                            y: 14,
                            width: 1.5,
                            height: 2,
                            rx: 1,
                            stroke: "none",
                            fill: r.faceColor,
                          }),
                        ),
                      ),
                    );
                  },
                  sunset: function (c) {
                    var v = c.name,
                      O = c.colors,
                      C = c.title,
                      I = c.square,
                      $ = c.size,
                      _ = a(c, ["name", "colors", "title", "square", "size"]),
                      r = (function (M, E) {
                        var o = b(M),
                          n = E && E.length;
                        return Array.from({ length: 4 }, function (s, g) {
                          return A(o + g, E, n);
                        });
                      })(v, O),
                      y = v.replace(/\s/g, ""),
                      x = t.useId();
                    return t.createElement(
                      "svg",
                      Object.assign(
                        {
                          viewBox: "0 0 80 80",
                          fill: "none",
                          role: "img",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: $,
                          height: $,
                        },
                        _,
                      ),
                      C && t.createElement("title", null, v),
                      t.createElement(
                        "mask",
                        {
                          id: x,
                          maskUnits: "userSpaceOnUse",
                          x: 0,
                          y: 0,
                          width: 80,
                          height: 80,
                        },
                        t.createElement("rect", {
                          width: 80,
                          height: 80,
                          rx: I ? void 0 : 160,
                          fill: "#FFFFFF",
                        }),
                      ),
                      t.createElement(
                        "g",
                        { mask: "url(#".concat(x, ")") },
                        t.createElement("path", {
                          fill: "url(#gradient_paint0_linear_" + y + ")",
                          d: "M0 0h80v40H0z",
                        }),
                        t.createElement("path", {
                          fill: "url(#gradient_paint1_linear_" + y + ")",
                          d: "M0 40h80v40H0z",
                        }),
                      ),
                      t.createElement(
                        "defs",
                        null,
                        t.createElement(
                          "linearGradient",
                          {
                            id: "gradient_paint0_linear_" + y,
                            x1: 40,
                            y1: 0,
                            x2: 40,
                            y2: 40,
                            gradientUnits: "userSpaceOnUse",
                          },
                          t.createElement("stop", { stopColor: r[0] }),
                          t.createElement("stop", {
                            offset: 1,
                            stopColor: r[1],
                          }),
                        ),
                        t.createElement(
                          "linearGradient",
                          {
                            id: "gradient_paint1_linear_" + y,
                            x1: 40,
                            y1: 40,
                            x2: 40,
                            y2: 80,
                            gradientUnits: "userSpaceOnUse",
                          },
                          t.createElement("stop", { stopColor: r[2] }),
                          t.createElement("stop", {
                            offset: 1,
                            stopColor: r[3],
                          }),
                        ),
                      ),
                    );
                  },
                  marble: R,
                },
                be = { geometric: "beam", abstract: "bauhaus" },
                Se = function (c) {
                  var v = c.variant,
                    O = v === void 0 ? "marble" : v,
                    C = c.colors,
                    I =
                      C === void 0
                        ? [
                            "#92A1C6",
                            "#146A7C",
                            "#F0AB3D",
                            "#C271B4",
                            "#C20D90",
                          ]
                        : C,
                    $ = c.name,
                    _ = $ === void 0 ? "Clara Barton" : $,
                    r = c.title,
                    y = r !== void 0 && r,
                    x = c.size,
                    M = c.square,
                    E = M !== void 0 && M,
                    o = a(c, [
                      "variant",
                      "colors",
                      "name",
                      "title",
                      "size",
                      "square",
                    ]),
                    n = me[be[O] || O] || R;
                  return m.a.createElement(
                    n,
                    Object.assign(
                      { colors: I, name: _, title: y, size: x, square: E },
                      o,
                    ),
                  );
                };
              f.default = Se;
            },
          ]);
        });
      })(xe)),
    xe.exports
  );
}
var Zt = Kt();
const er = We(Zt),
  Ve = ({ name: d, size: p = 20 }) => {
    const [h, i] = B(Ce),
      { myUserInfo: f } = ke(),
      u = et();
    return (f || d) && u
      ? e.jsx(er, {
          square: !0,
          size: p,
          name: d || (f == null ? void 0 : f.name),
          variant: "beam",
          className: "cursor-pointer rounded-full",
          onClick: () => {
            i(!0);
          },
        })
      : e.jsx("div", { className: "bg-foreground-300 size-5" });
  },
  tr = () => {
    const [d, p] = B(Ce),
      { myUserInfo: h } = ke();
    return h
      ? e.jsx(re, {
          isOpen: d,
          onOpenChange: p,
          backdrop: "blur",
          size: "lg",
          placement: "bottom",
          children: e.jsxs(X, {
            children: [
              e.jsx(se, { children: h.name }),
              e.jsxs(G, {
                children: [
                  e.jsxs("div", {
                    className: "mb-4 flex items-center gap-2",
                    children: [
                      e.jsx(Ve, {}),
                      e.jsxs("div", {
                        className: "flex flex-col justify-center gap-1",
                        children: [
                          e.jsx("div", {
                            className: "text-foreground-600",
                            children: h.email,
                          }),
                          e.jsxs("small", {
                            className: "text-foreground-400",
                            children: [
                              "Registered on ",
                              h.createdAt.toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(Qt, {}),
                ],
              }),
              e.jsx(ne, {}),
            ],
          }),
        })
      : null;
  },
  rr = () => {
    const { state: d } = ft(),
      h = d === "submitting" ? 50 : d === "loading" ? 100 : 0;
    return e.jsx(vt, {
      "aria-label": "Loading...",
      style: { opacity: h ? 1 : 0 },
      className: "fixed inset-0 z-50 h-[2px]",
      value: h,
    });
  },
  sr = () => {
    const { isDarkMode: d } = ve();
    return e.jsx("a", {
      href: "https://github.com/",
      target: "_blank",
      rel: "noreferrer",
      children: e.jsxs(F, {
        variant: "flat",
        color: "default",
        className: "w-full",
        children: [
          e.jsx(bt, {
            alt: "github",
            src: d ? "/svgs/github_dark.svg" : "/svgs/github_light.svg",
            width: 18,
          }),
          "View Source Code",
        ],
      }),
    });
  },
  nr = () =>
    de({
      mutationKey: ["signOut"],
      mutationFn: () => ae.action.signOut.mutate(),
      onError: he,
    }),
  ar = () => {
    const { isOpen: d, onOpen: p, onOpenChange: h } = St(),
      { revalidate: i } = Ue(),
      f = q($e),
      u = nr();
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(F, {
          variant: "flat",
          color: "danger",
          onPress: p,
          children: [e.jsx(H, { icon: tt }), "Sign Out"],
        }),
        e.jsx(re, {
          isOpen: d,
          placement: "center",
          onOpenChange: h,
          backdrop: "blur",
          children: e.jsx(X, {
            children: (a) =>
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(se, { children: "Please Note" }),
                  e.jsx(G, { children: "Are you sure you want to sign out?" }),
                  e.jsxs(ne, {
                    children: [
                      e.jsx(F, {
                        color: "danger",
                        variant: "flat",
                        onPress: a,
                        children: "Cancel",
                      }),
                      e.jsx(F, {
                        color: "primary",
                        isLoading: u.isPending,
                        onPress: async () => {
                          await u.mutateAsync(),
                            a(),
                            f(!1),
                            i(),
                            ue.success("Signed out");
                        },
                        children: "Confirm",
                      }),
                    ],
                  }),
                ],
              }),
          }),
        }),
      ],
    });
  },
  ir = () => {
    const [d, p] = B($e),
      { isDarkMode: h, toggleTheme: i } = ve();
    return e.jsx(re, {
      isOpen: d,
      onOpenChange: p,
      backdrop: "blur",
      placement: "center",
      children: e.jsx(X, {
        children: (f) =>
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(se, { children: "Settings" }),
              e.jsxs(G, {
                children: [
                  e.jsx(Et, {
                    "aria-label": "settings",
                    children: e.jsx(
                      Ot,
                      {
                        onPress: () => {
                          i(), f();
                        },
                        endContent: e.jsx(Mt, {
                          isSelected: h,
                          onValueChange: i,
                        }),
                        children: "Dark Mode",
                      },
                      "darkmode",
                    ),
                  }),
                  e.jsx(ar, {}),
                  e.jsx(sr, {}),
                ],
              }),
              e.jsx(ne, {}),
            ],
          }),
      }),
    });
  },
  lr = () =>
    de({
      mutationKey: ["signIn"],
      mutationFn: (d) => ae.action.signIn.mutate(d),
      onError: he,
    }),
  ce = oe.forwardRef((d, p) => {
    const [h, i] = oe.useState(!1);
    return e.jsx(V, {
      minLength: 8,
      maxLength: 30,
      label: "Password",
      placeholder: "Please enter password",
      type: h ? "text" : "password",
      variant: "bordered",
      endContent: e.jsx(F, {
        variant: "light",
        size: "sm",
        isIconOnly: !0,
        onPress: () => {
          i(!h);
        },
        children: e.jsx(H, { icon: h ? rt : st }),
      }),
      ...d,
      ref: p,
    });
  }),
  or = () => {
    const [d, p] = B(je),
      h = q(Ye),
      i = q(Re),
      { form: f } = De(At, { defaultValues: { keepAlive: !0 } }),
      { revalidate: u } = Ue(),
      a = lr();
    return e.jsx(re, {
      isOpen: d,
      onOpenChange: p,
      backdrop: "blur",
      isDismissable: !1,
      onClose: f.reset,
      placement: "center",
      children: e.jsx(X, {
        children: (t) => {
          var m, b;
          return e.jsxs("form", {
            onSubmit: f.handleSubmit(async (S) => {
              await a.mutateAsync(S), ue.success("Login successful"), t(), u();
            }),
            children: [
              e.jsx(se, { children: "Sign In" }),
              e.jsxs(G, {
                children: [
                  e.jsx(V, {
                    ...f.register("email"),
                    autoFocus: !0,
                    label: "Email",
                    type: "email",
                    placeholder: "Please enter email",
                    variant: "bordered",
                  }),
                  e.jsx(Y, {
                    message:
                      (m = f.formState.errors.email) == null
                        ? void 0
                        : m.message,
                  }),
                  e.jsx(ce, { ...f.register("password") }),
                  e.jsx(Y, {
                    message:
                      (b = f.formState.errors.password) == null
                        ? void 0
                        : b.message,
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between px-1 py-2",
                    children: [
                      e.jsx(Ct, {
                        ...f.register("keepAlive"),
                        classNames: { label: "text-small" },
                        children: "Remember for 7 days",
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(K, {
                            color: "primary",
                            size: "sm",
                            className:
                              "cursor-pointer underline-offset-2 hover:underline",
                            onPress: () => {
                              t(), h(!0);
                            },
                            children: "Register",
                          }),
                          e.jsx(K, {
                            color: "primary",
                            size: "sm",
                            className:
                              "cursor-pointer underline-offset-2 hover:underline",
                            onPress: () => {
                              t(), i(!0);
                            },
                            children: "Reset Password",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(ne, {
                children: [
                  e.jsx(F, {
                    color: "danger",
                    variant: "flat",
                    onPress: t,
                    children: "Cancel",
                  }),
                  e.jsx(F, {
                    color: "primary",
                    type: "submit",
                    isLoading: f.formState.isSubmitting || a.isPending,
                    children: "Submit",
                  }),
                ],
              }),
            ],
          });
        },
      }),
    });
  },
  cr = () =>
    de({
      mutationKey: ["signUp"],
      mutationFn: (d) => ae.action.signUp.mutate(d),
      onError: he,
    }),
  dr = ({ email: d }) =>
    de({
      mutationKey: ["sendVerifyCode", d],
      mutationFn: () => ae.action.sendVerifyCode.mutate({ email: d }),
      onError: he,
    }),
  Xe = ({ form: d }) => {
    const p = d.watch("email"),
      [h, i] = nt({ countStart: 60, countStop: 0 }),
      f = h > 0 && h < 60,
      u = dr({ email: p });
    return f
      ? e.jsxs(K, {
          color: "primary",
          size: "sm",
          isDisabled: !0,
          children: ["Resend in ", h, " seconds"],
        })
      : u.isPending || (u.isSuccess && h === 60)
        ? e.jsx(K, {
            color: "primary",
            size: "sm",
            isDisabled: !0,
            children: "Sending verification code...",
          })
        : e.jsx(K, {
            color: "primary",
            size: "sm",
            isDisabled: !!d.formState.errors.email || !p,
            className: "cursor-pointer underline-offset-2 hover:underline",
            onPress: async () => {
              await u.mutateAsync(),
                i.startCountdown(),
                ue.success("Verification code sent to your email");
            },
            children: "Send email verification code",
          });
  },
  ur = () => {
    const [d, p] = B(Ye),
      h = q(je),
      { form: i } = De(zt),
      f = cr();
    return e.jsx(re, {
      isOpen: d,
      onOpenChange: p,
      backdrop: "blur",
      isDismissable: !1,
      onClose: i.reset,
      placement: "center",
      children: e.jsx(X, {
        children: (u) => {
          var a, t, m, b, S;
          return e.jsxs("form", {
            onSubmit: i.handleSubmit(async (k) => {
              await f.mutateAsync(k),
                ue.success("Registration successful"),
                u(),
                h(!0);
            }),
            children: [
              e.jsx(se, { children: "Register" }),
              e.jsxs(G, {
                children: [
                  e.jsx(V, {
                    ...i.register("name"),
                    value: i.watch("name"),
                    autoFocus: !0,
                    minLength: 3,
                    maxLength: 16,
                    label: "Name",
                    placeholder: "Please enter name",
                    variant: "bordered",
                    endContent: e.jsx(F, {
                      variant: "light",
                      size: "sm",
                      isIconOnly: !0,
                      onPress: () => {
                        i.setValue(
                          "name",
                          qt.Chance().name().replace(/\s/g, "").slice(0, 16),
                          { shouldValidate: !0, shouldDirty: !0 },
                        );
                      },
                      children: e.jsx(H, { icon: at }),
                    }),
                  }),
                  e.jsx(Y, {
                    message:
                      (a = i.formState.errors.name) == null
                        ? void 0
                        : a.message,
                  }),
                  e.jsx(V, {
                    ...i.register("email"),
                    label: "Email",
                    type: "email",
                    placeholder: "Please enter email",
                    variant: "bordered",
                  }),
                  e.jsx(Y, {
                    message:
                      (t = i.formState.errors.email) == null
                        ? void 0
                        : t.message,
                  }),
                  e.jsx(ce, { ...i.register("password") }),
                  e.jsx(Y, {
                    message:
                      (m = i.formState.errors.password) == null
                        ? void 0
                        : m.message,
                  }),
                  e.jsx(ce, {
                    ...i.register("password2"),
                    label: "Confirm Password",
                    placeholder: "Please re-enter password",
                  }),
                  e.jsx(Y, {
                    message:
                      (b = i.formState.errors.password2) == null
                        ? void 0
                        : b.message,
                  }),
                  e.jsx(V, {
                    ...i.register("verifyCode"),
                    minLength: 6,
                    maxLength: 6,
                    label: "Verification Code",
                    placeholder: "Please enter email verification code",
                    variant: "bordered",
                  }),
                  e.jsx(Y, {
                    message:
                      (S = i.formState.errors.verifyCode) == null
                        ? void 0
                        : S.message,
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between px-1 py-2",
                    children: [
                      e.jsx(Xe, { form: i }),
                      e.jsx(K, {
                        color: "primary",
                        size: "sm",
                        className:
                          "cursor-pointer underline-offset-2 hover:underline",
                        onPress: () => {
                          u(), h(!0);
                        },
                        children: "Sign In",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(ne, {
                children: [
                  e.jsx(F, {
                    color: "danger",
                    variant: "flat",
                    onPress: u,
                    children: "Cancel",
                  }),
                  e.jsx(F, {
                    color: "primary",
                    type: "submit",
                    isLoading: i.formState.isSubmitting || f.isPending,
                    children: "Submit",
                  }),
                ],
              }),
            ],
          });
        },
      }),
    });
  },
  hr = () =>
    e.jsx(kt, {
      position: "top-center",
      toastOptions: {
        success: {
          icon: e.jsx(H, { icon: ot, className: "ml-2" }),
          style: { background: ge.green[600] },
        },
        error: {
          icon: e.jsx(H, { icon: lt, className: "ml-2" }),
          style: { background: ge.red[500] },
        },
        icon: e.jsx(H, { icon: it, className: "ml-2" }),
        style: {
          background: ge.blue[500],
          color: ge.white,
          borderRadius: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px 12px",
        },
      },
    }),
  mr = () =>
    de({
      mutationKey: ["updatePassword"],
      mutationFn: (d) => ae.action.updatePassword.mutate(d),
      onError: he,
    }),
  fr = () => {
    const [d, p] = B(Re),
      h = q(je),
      { form: i } = De(Lt),
      f = mr();
    return e.jsx(re, {
      isOpen: d,
      onOpenChange: p,
      backdrop: "blur",
      isDismissable: !1,
      onClose: i.reset,
      placement: "center",
      children: e.jsx(X, {
        children: (u) => {
          var a, t, m, b;
          return e.jsxs("form", {
            onSubmit: i.handleSubmit(async (S) => {
              await f.mutateAsync(S),
                ue.success("Password reset successful"),
                u(),
                h(!0);
            }),
            children: [
              e.jsx(se, { children: "Reset Password" }),
              e.jsxs(G, {
                children: [
                  e.jsx(V, {
                    ...i.register("email"),
                    autoFocus: !0,
                    label: "Email",
                    type: "email",
                    placeholder: "Please enter email",
                    variant: "bordered",
                  }),
                  e.jsx(Y, {
                    message:
                      (a = i.formState.errors.email) == null
                        ? void 0
                        : a.message,
                  }),
                  e.jsx(ce, { ...i.register("password") }),
                  e.jsx(Y, {
                    message:
                      (t = i.formState.errors.password) == null
                        ? void 0
                        : t.message,
                  }),
                  e.jsx(ce, {
                    ...i.register("password2"),
                    label: "Confirm Password",
                    placeholder: "Please re-enter password",
                  }),
                  e.jsx(Y, {
                    message:
                      (m = i.formState.errors.password2) == null
                        ? void 0
                        : m.message,
                  }),
                  e.jsx(V, {
                    ...i.register("verifyCode"),
                    minLength: 6,
                    maxLength: 6,
                    label: "Verification Code",
                    placeholder: "Please enter email verification code",
                    variant: "bordered",
                  }),
                  e.jsx(Y, {
                    message:
                      (b = i.formState.errors.verifyCode) == null
                        ? void 0
                        : b.message,
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between px-1 py-2",
                    children: [
                      e.jsx(Xe, { form: i }),
                      e.jsx(K, {
                        color: "primary",
                        size: "sm",
                        className:
                          "cursor-pointer underline-offset-2 hover:underline",
                        onPress: () => {
                          u(), h(!0);
                        },
                        children: "Sign In",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(ne, {
                children: [
                  e.jsx(F, {
                    color: "danger",
                    variant: "flat",
                    onPress: u,
                    children: "Cancel",
                  }),
                  e.jsx(F, {
                    color: "primary",
                    type: "submit",
                    isLoading: i.formState.isSubmitting || f.isPending,
                    children: "Submit",
                  }),
                ],
              }),
            ],
          });
        },
      }),
    });
  },
  gr = () =>
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(ct, {}),
        e.jsx(hr, {}),
        e.jsx(rr, {}),
        e.jsx(or, {}),
        e.jsx(ur, {}),
        e.jsx(fr, {}),
        e.jsx(ir, {}),
        e.jsx(tr, {}),
        e.jsx(Rt, {}),
      ],
    }),
  pr = "/assets/global-Dy1T12iq.css",
  xr = () => {
    const { isDarkMode: d, toggleTheme: p } = ve(),
      { isMobile: h } = we(),
      [i, f] = B(Ut),
      [u, a] = B(Pe),
      t = q(Ie),
      m = q(je),
      b = q($e),
      [S, k] = B(_e),
      { isLogin: P } = ke();
    return e.jsx("header", {
      className: "bg-background sticky top-0 z-10",
      children: e.jsxs("div", {
        className:
          "border-divider mx-auto flex items-center justify-between gap-4 border-b p-4",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e.jsx(F, {
                isIconOnly: !0,
                variant: "light",
                className: "hidden sm:block",
                onPress: () => t(!0),
                children: e.jsx(te, {
                  icon: "lucide:menu",
                  className: "text-xl",
                }),
              }),
              e.jsx(F, {
                isIconOnly: !0,
                variant: "light",
                className: "sm:hidden",
                onPress: () => k(!S),
                children: e.jsx(te, {
                  icon: S
                    ? "lucide:panel-left-open"
                    : "lucide:panel-left-close",
                  className: "text-xl",
                }),
              }),
              P && !h && e.jsx(Bt, {}),
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-1 items-center justify-end gap-2",
            children: [
              e.jsx(Me, {
                children: i
                  ? e.jsxs(ye.div, {
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      className:
                        "bg-background relative flex flex-1 items-center gap-2",
                      children: [
                        e.jsx(V, {
                          placeholder: "Search word...",
                          value: u,
                          onValueChange: a,
                          startContent: e.jsx(te, {
                            icon: "lucide:search",
                            className: "text-default-400",
                          }),
                          className: "w-full",
                          autoFocus: !0,
                        }),
                        e.jsx(F, {
                          isIconOnly: !0,
                          variant: "light",
                          onPress: () => {
                            a(""), f(!1);
                          },
                          children: e.jsx(te, { icon: "lucide:x" }),
                        }),
                      ],
                    })
                  : e.jsx(F, {
                      isIconOnly: !0,
                      variant: "light",
                      onPress: () => f(!0),
                      children: e.jsx(te, { icon: "lucide:search" }),
                    }),
              }),
              P
                ? e.jsxs("div", {
                    className: "flex items-center gap-2 sm:hidden",
                    children: [
                      e.jsx(Ve, { size: 20 }),
                      e.jsx(F, {
                        isIconOnly: !0,
                        variant: "light",
                        onPress: () => b(!0),
                        children: e.jsx(te, { icon: "lucide:settings" }),
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className: "flex items-center gap-2 sm:hidden",
                    children: [
                      e.jsx(F, {
                        isIconOnly: !0,
                        variant: "light",
                        onPress: p,
                        children: e.jsx(H, { icon: d ? dt : ut }),
                      }),
                      e.jsx(F, {
                        color: "primary",
                        className: "md:flex",
                        onPress: () => m(!0),
                        children: "Sign In",
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  },
  yr = "/svgs/ImageSkeleton.svg",
  Ge = ({
    isDisableCache: d,
    src: p,
    isDisableFallback: h,
    className: i,
    ...f
  }) => {
    const [u, a] = oe.useState(!1);
    return (
      oe.useEffect(() => {
        if (typeof p == "string") {
          const t = d ? `?t=${new Date().getTime()}` : "";
          Tt(p + t)
            .then(() => {
              a(!0);
            })
            .catch(console.log);
        } else a(!0);
      }, [d, p]),
      e.jsx("img", {
        src: u && p ? `${p}` : h ? void 0 : yr,
        alt: "",
        style: { transition: "opacity 0.3s ease" },
        className: Z(i, h && !u && "!opacity-0"),
        ...f,
      })
    );
  },
  wr = ({ allBooks: d, starBooks: p }) => {
    const { bookSlug: h = "" } = Oe(),
      i = q(Pe),
      f = q(He),
      [u, a] = B(_e),
      t = [...d.filter((m) => m.wordsCount)].sort((m, b) => {
        if (m.id === 1) return -1;
        if (b.id === 1) return 1;
        const S = p.includes(m.slug),
          k = p.includes(b.slug);
        return S && !k ? -1 : !S && k ? 1 : 0;
      });
    return e.jsx("div", {
      className: "flex flex-col gap-2",
      children: t.map((m) =>
        e.jsx(
          ye.div,
          {
            layoutId: String(m.id),
            className: "w-full",
            children: e.jsx(F, {
              variant: "light",
              className: Z(
                "hover:bg-default-100 h-12 w-full justify-start rounded-none transition-all duration-300 ease-out",
                u ? "px-4" : "flex justify-center px-2",
              ),
              startContent: e.jsxs("div", {
                className: "relative w-[30px] min-w-[30px]",
                children: [
                  e.jsx(Ge, {
                    alt: m.slug,
                    src:
                      m.image ||
                      "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg",
                    className: Z(
                      "h-[40px] w-[30px] min-w-[30px] overflow-hidden bg-cover",
                    ),
                  }),
                  h === m.slug &&
                    e.jsx("div", {
                      className:
                        "bg-primary absolute bottom-0.5 -left-1.5 flex h-4 w-4 items-center justify-center rounded-full p-2",
                      children: "⭐",
                    }),
                ],
              }),
              onPress: (b) => {
                b.continuePropagation(), i(""), f(""), a(!1);
              },
              as: Te,
              to: Be("/:bookSlug/words", { bookSlug: m.slug }),
              children: e.jsx(Me, {
                mode: "wait",
                children:
                  u &&
                  e.jsx(ye.div, {
                    initial: { opacity: 0, width: 0 },
                    animate: { opacity: 1, width: "100%" },
                    exit: { opacity: 0, width: 0 },
                    transition: { duration: 0.35, ease: "easeInOut" },
                    children: e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-1 flex-col items-start",
                          children: [
                            e.jsx("div", {
                              className: "w-[88%] truncate text-left",
                              children: m.name,
                            }),
                            e.jsxs("small", {
                              className: "text-primary",
                              children: [m.wordsCount, " words"],
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className: "text-secondary",
                          children: p.includes(m.slug) ? "⭐" : "",
                        }),
                      ],
                    }),
                  }),
              }),
            }),
          },
          m.id,
        ),
      ),
    });
  },
  jr = ({ allBooks: d, starBooks: p }) => {
    var m, b;
    const { bookSlug: h = "" } = Oe(),
      i = q(Pe),
      f = q(He),
      [u, a] = B(Ie),
      t = [...d.filter((S) => S.wordsCount)].sort((S, k) => {
        if (S.id === 1) return -1;
        if (k.id === 1) return 1;
        const P = p.includes(S.slug),
          A = p.includes(k.slug);
        return P && !A ? -1 : !P && A ? 1 : 0;
      });
    return e.jsx(e.Fragment, {
      children: e.jsx($t, {
        className: "h-fit w-full sm:rounded-none sm:border-none sm:shadow-none",
        children: e.jsxs(Dt, {
          className: "p-0",
          children: [
            e.jsxs("div", {
              className: "border-divider border-b p-4",
              children: [
                e.jsx("h2", {
                  className: "font-semibold",
                  children:
                    (m = d.find((S) => S.slug === h)) == null ? void 0 : m.name,
                }),
                e.jsx("p", {
                  className: "text-small text-default-500",
                  children:
                    (b = d.find((S) => S.slug === h)) == null
                      ? void 0
                      : b.wordsCount,
                }),
              ],
            }),
            e.jsx("div", {
              className: "p-2",
              children: t.map((S) =>
                e.jsx(
                  F,
                  {
                    variant: "light",
                    className: Z(
                      "hover:bg-default-100 h-12 w-full justify-start rounded-none transition-all duration-300 ease-out",
                    ),
                    startContent: e.jsxs("div", {
                      className: "relative w-[30px] min-w-[30px]",
                      children: [
                        e.jsx(Ge, {
                          alt: S.slug,
                          src:
                            S.image ||
                            "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg",
                          className: Z(
                            "h-[40px] w-[30px] min-w-[30px] overflow-hidden bg-cover",
                          ),
                        }),
                        h === S.slug &&
                          e.jsx("div", {
                            className:
                              "bg-primary absolute bottom-0.5 -left-1.5 flex h-4 w-4 items-center justify-center rounded-full p-2",
                            children: "⭐",
                          }),
                      ],
                    }),
                    onPress: (k) => {
                      k.continuePropagation(), i(""), f(""), a(!1);
                    },
                    as: Te,
                    to: Be("/:bookSlug/words", { bookSlug: S.slug }),
                    children: e.jsx("p", {
                      className: "w-full truncate overflow-hidden text-left",
                      children: S.name,
                    }),
                  },
                  S.slug,
                ),
              ),
            }),
          ],
        }),
      }),
    });
  },
  vr = ({ allBooks: d, starBooks: p }) => {
    var u, a;
    const { bookSlug: h = "" } = Oe(),
      { isMobile: i } = we(),
      [f] = B(_e);
    return e.jsx("div", {
      className: Z(
        "h-dvh overflow-auto transition-all duration-300",
        f ? "w-[240px]" : "w-[80px]",
        i && "hidden",
      ),
      children: e.jsxs("div", {
        className: "flex h-full flex-col",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between p-4",
            children: [
              e.jsx(Me, {
                mode: "wait",
                children:
                  f &&
                  e.jsx(ye.div, {
                    initial: { width: 0, opacity: 0 },
                    animate: { opacity: 1, width: 240 },
                    exit: { opacity: 0, width: 0 },
                    transition: { duration: 0.3, ease: "easeInOut" },
                    className: "flex h-10 items-center justify-start sm:hidden",
                    children: e.jsx("h2", {
                      className: Z(
                        "block w-[220px] items-center justify-start truncate text-lg font-semibold whitespace-nowrap transition-all duration-300 ease-in-out",
                      ),
                      title:
                        (u = d.find((t) => t.slug === h)) == null
                          ? void 0
                          : u.name,
                      children:
                        (a = d.find((t) => t.slug === h)) == null
                          ? void 0
                          : a.name,
                    }),
                  }),
              }),
              !f &&
                e.jsx("h2", {
                  className:
                    "pointer-events-auto flex h-10 items-center justify-start text-lg font-semibold opacity-0 transition-opacity",
                }),
            ],
          }),
          e.jsx(wr, { allBooks: d, starBooks: p }),
        ],
      }),
    });
  },
  br = ({ allBooks: d, starBooks: p, children: h }) => {
    const { isMobile: i } = we(),
      [f, u] = B(Ie);
    return e.jsxs("div", {
      className: "flex h-dvh",
      children: [
        !i && e.jsx(vr, { allBooks: d, starBooks: p }),
        e.jsx(qe, {
          isOpen: i ? f : !1,
          onClose: () => {
            u(!1);
          },
          placement: "left",
          size: "xs",
          classNames: { closeButton: "z-50" },
          closeButton: e.jsx("div", { children: e.jsx(H, { icon: Le }) }),
          children: e.jsx(X, {
            children: e.jsx(G, {
              className: "p-0",
              children: e.jsx(jr, { allBooks: d, starBooks: p }),
            }),
          }),
        }),
        e.jsx("div", {
          className: "flex h-full flex-1 p-2 sm:p-0",
          children: e.jsxs("div", {
            className:
              "border-divider h-full flex-1 overflow-auto rounded-lg border sm:border-none",
            id: "content",
            children: [e.jsx(xr, {}), h],
          }),
        }),
      ],
    });
  },
  _r = () => [
    { rel: "stylesheet", href: pr },
    { rel: "stylesheet", href: Yt },
  ];
function Nr({ children: d }) {
  return e.jsxs("html", {
    lang: "en",
    className: "bg-background text-foreground",
    suppressHydrationWarning: !0,
    children: [
      e.jsxs("head", {
        children: [
          e.jsx("meta", { charSet: "utf-8" }),
          e.jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }),
          e.jsx("meta", {
            name: "description",
            content: "study English words so words-learning",
          }),
          e.jsx("meta", { name: "keywords", content: "english,words,study" }),
          e.jsx("meta", { name: "author", content: "https://github.com" }),
          e.jsx("meta", { name: "repository", content: "https://github.com/" }),
          e.jsx(gt, {}),
          e.jsx(pt, {}),
          e.jsx("title", { children: "words-learning" }),
        ],
      }),
      e.jsxs("body", {
        suppressHydrationWarning: !0,
        children: [d, e.jsx(xt, {}), e.jsx(yt, {})],
      }),
    ],
  });
}
const Sr = new ht({
    defaultOptions: {
      queries: {
        refetchOnMount: !1,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        staleTime: 1e3 * 60 * 5,
      },
    },
  }),
  Fr = Qe(function ({
    loaderData: { myUserInfo: p, allBooks: h, starBooks: i },
  }) {
    return e.jsx(Pt, {
      attribute: "class",
      defaultTheme: "light",
      children: e.jsx(It, {
        children: e.jsxs(mt, {
          client: Sr,
          children: [
            e.jsx(br, {
              allBooks: h,
              starBooks: i,
              children: e.jsx(wt, { context: { myUserInfo: p } }),
            }),
            e.jsx(gr, {}),
          ],
        }),
      }),
    });
  });
export { Nr as Layout, Fr as default, _r as links };

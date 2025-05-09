import { a as c, j as _r } from "./vendor-react-BOaTbF0U.js";
import { r as mn, c as pn } from "./vendor-react-dom-CNmmZLPy.js";
import "./vendor-tailwind-merge-Cl7RZUN2.js";
import "./vendor-chance-vhTGba_j.js";
var Ze = {},
  kr;
function yn() {
  if (kr) return Ze;
  (kr = 1),
    Object.defineProperty(Ze, "__esModule", { value: !0 }),
    (Ze.parse = l),
    (Ze.serialize = u);
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    t = /^[\u0021-\u003A\u003C-\u007E]*$/,
    r =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    n = /^[\u0020-\u003A\u003D-\u007E]*$/,
    a = Object.prototype.toString,
    o = (() => {
      const h = function () {};
      return (h.prototype = Object.create(null)), h;
    })();
  function l(h, v) {
    const g = new o(),
      R = h.length;
    if (R < 2) return g;
    const E = (v == null ? void 0 : v.decode) || d;
    let b = 0;
    do {
      const L = h.indexOf("=", b);
      if (L === -1) break;
      const D = h.indexOf(";", b),
        P = D === -1 ? R : D;
      if (L > P) {
        b = h.lastIndexOf(";", L - 1) + 1;
        continue;
      }
      const x = s(h, b, L),
        p = i(h, L, x),
        _ = h.slice(x, p);
      if (g[_] === void 0) {
        let j = s(h, L + 1, P),
          $ = i(h, P, j);
        const Y = E(h.slice(j, $));
        g[_] = Y;
      }
      b = P + 1;
    } while (b < R);
    return g;
  }
  function s(h, v, g) {
    do {
      const R = h.charCodeAt(v);
      if (R !== 32 && R !== 9) return v;
    } while (++v < g);
    return g;
  }
  function i(h, v, g) {
    for (; v > g; ) {
      const R = h.charCodeAt(--v);
      if (R !== 32 && R !== 9) return v + 1;
    }
    return g;
  }
  function u(h, v, g) {
    const R = (g == null ? void 0 : g.encode) || encodeURIComponent;
    if (!e.test(h)) throw new TypeError(`argument name is invalid: ${h}`);
    const E = R(v);
    if (!t.test(E)) throw new TypeError(`argument val is invalid: ${v}`);
    let b = h + "=" + E;
    if (!g) return b;
    if (g.maxAge !== void 0) {
      if (!Number.isInteger(g.maxAge))
        throw new TypeError(`option maxAge is invalid: ${g.maxAge}`);
      b += "; Max-Age=" + g.maxAge;
    }
    if (g.domain) {
      if (!r.test(g.domain))
        throw new TypeError(`option domain is invalid: ${g.domain}`);
      b += "; Domain=" + g.domain;
    }
    if (g.path) {
      if (!n.test(g.path))
        throw new TypeError(`option path is invalid: ${g.path}`);
      b += "; Path=" + g.path;
    }
    if (g.expires) {
      if (!m(g.expires) || !Number.isFinite(g.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${g.expires}`);
      b += "; Expires=" + g.expires.toUTCString();
    }
    if (
      (g.httpOnly && (b += "; HttpOnly"),
      g.secure && (b += "; Secure"),
      g.partitioned && (b += "; Partitioned"),
      g.priority)
    )
      switch (
        typeof g.priority == "string" ? g.priority.toLowerCase() : void 0
      ) {
        case "low":
          b += "; Priority=Low";
          break;
        case "medium":
          b += "; Priority=Medium";
          break;
        case "high":
          b += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${g.priority}`);
      }
    if (g.sameSite)
      switch (
        typeof g.sameSite == "string" ? g.sameSite.toLowerCase() : g.sameSite
      ) {
        case !0:
        case "strict":
          b += "; SameSite=Strict";
          break;
        case "lax":
          b += "; SameSite=Lax";
          break;
        case "none":
          b += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${g.sameSite}`);
      }
    return b;
  }
  function d(h) {
    if (h.indexOf("%") === -1) return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
  function m(h) {
    return a.call(h) === "[object Date]";
  }
  return Ze;
}
yn();
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var na = (e) => {
    throw TypeError(e);
  },
  vn = (e, t, r) => t.has(e) || na("Cannot " + r),
  Ut = (e, t, r) => (
    vn(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  gn = (e, t, r) =>
    t.has(e)
      ? na("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, r),
  Ir = "popstate";
function wn(e = {}) {
  function t(n, a) {
    let { pathname: o, search: l, hash: s } = n.location;
    return it(
      "",
      { pathname: o, search: l, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default",
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : Pe(a);
  }
  return bn(t, r, null, e);
}
function U(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function K(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function En() {
  return Math.random().toString(36).substring(2, 10);
}
function Or(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function it(e, t, r = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...(typeof t == "string" ? De(t) : t),
    state: r,
    key: (t && t.key) || n || En(),
  };
}
function Pe({ pathname: e = "/", search: t = "", hash: r = "" }) {
  return (
    t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function De(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substring(r)), (e = e.substring(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function bn(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n,
    l = a.history,
    s = "POP",
    i = null,
    u = d();
  u == null && ((u = 0), l.replaceState({ ...l.state, idx: u }, ""));
  function d() {
    return (l.state || { idx: null }).idx;
  }
  function m() {
    s = "POP";
    let E = d(),
      b = E == null ? null : E - u;
    (u = E), i && i({ action: s, location: R.location, delta: b });
  }
  function h(E, b) {
    s = "PUSH";
    let L = it(R.location, E, b);
    u = d() + 1;
    let D = Or(L, u),
      P = R.createHref(L);
    try {
      l.pushState(D, "", P);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      a.location.assign(P);
    }
    o && i && i({ action: s, location: R.location, delta: 1 });
  }
  function v(E, b) {
    s = "REPLACE";
    let L = it(R.location, E, b);
    u = d();
    let D = Or(L, u),
      P = R.createHref(L);
    l.replaceState(D, "", P),
      o && i && i({ action: s, location: R.location, delta: 0 });
  }
  function g(E) {
    return oa(E);
  }
  let R = {
    get action() {
      return s;
    },
    get location() {
      return e(a, l);
    },
    listen(E) {
      if (i) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(Ir, m),
        (i = E),
        () => {
          a.removeEventListener(Ir, m), (i = null);
        }
      );
    },
    createHref(E) {
      return t(a, E);
    },
    createURL: g,
    encodeLocation(E) {
      let b = g(E);
      return { pathname: b.pathname, search: b.search, hash: b.hash };
    },
    push: h,
    replace: v,
    go(E) {
      return l.go(E);
    },
  };
  return R;
}
function oa(e, t = !1) {
  let r = "http://localhost";
  typeof window < "u" &&
    (r =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    U(r, "No window.location.(origin|href) available to create URL");
  let n = typeof e == "string" ? e : Pe(e);
  return (
    (n = n.replace(/ $/, "%20")),
    !t && n.startsWith("//") && (n = r + n),
    new URL(n, r)
  );
}
var nt,
  Nr = class {
    constructor(e) {
      if ((gn(this, nt, new Map()), e)) for (let [t, r] of e) this.set(t, r);
    }
    get(e) {
      if (Ut(this, nt).has(e)) return Ut(this, nt).get(e);
      if (e.defaultValue !== void 0) return e.defaultValue;
      throw new Error("No value found for context");
    }
    set(e, t) {
      Ut(this, nt).set(e, t);
    }
  };
nt = new WeakMap();
var Rn = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Sn(e) {
  return Rn.has(e);
}
var xn = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function Ln(e) {
  return xn.has(e);
}
function Cn(e) {
  return e.index === !0;
}
function Mt(e, t, r = [], n = {}) {
  return e.map((a, o) => {
    let l = [...r, String(o)],
      s = typeof a.id == "string" ? a.id : l.join("-");
    if (
      (U(
        a.index !== !0 || !a.children,
        "Cannot specify children on an index route",
      ),
      U(
        !n[s],
        `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`,
      ),
      Cn(a))
    ) {
      let i = { ...a, ...t(a), id: s };
      return (n[s] = i), i;
    } else {
      let i = { ...a, ...t(a), id: s, children: void 0 };
      return (
        (n[s] = i), a.children && (i.children = Mt(a.children, t, l, n)), i
      );
    }
  });
}
function we(e, t, r = "/") {
  return St(e, t, r, !1);
}
function St(e, t, r, n) {
  let a = typeof t == "string" ? De(t) : t,
    o = ue(a.pathname || "/", r);
  if (o == null) return null;
  let l = la(e);
  Pn(l);
  let s = null;
  for (let i = 0; s == null && i < l.length; ++i) {
    let u = $n(o);
    s = Fn(l[i], u, n);
  }
  return s;
}
function ia(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function la(e, t = [], r = [], n = "") {
  let a = (o, l, s) => {
    let i = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: l,
      route: o,
    };
    i.relativePath.startsWith("/") &&
      (U(
        i.relativePath.startsWith(n),
        `Absolute route path "${i.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (i.relativePath = i.relativePath.slice(n.length)));
    let u = Ee([n, i.relativePath]),
      d = r.concat(i);
    o.children &&
      o.children.length > 0 &&
      (U(
        o.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${u}".`,
      ),
      la(o.children, t, d, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: On(u, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, l) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) a(o, l);
      else for (let i of sa(o.path)) a(o, l, i);
    }),
    t
  );
}
function sa(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [o, ""] : [o];
  let l = sa(n.join("/")),
    s = [];
  return (
    s.push(...l.map((i) => (i === "" ? o : [o, i].join("/")))),
    a && s.push(...l),
    s.map((i) => (e.startsWith("/") && i === "" ? "/" : i))
  );
}
function Pn(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : Nn(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
var Mn = /^:[\w-]+$/,
  Dn = 3,
  Tn = 2,
  _n = 1,
  kn = 10,
  In = -2,
  Fr = (e) => e === "*";
function On(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(Fr) && (n += In),
    t && (n += Tn),
    r
      .filter((a) => !Fr(a))
      .reduce((a, o) => a + (Mn.test(o) ? Dn : o === "" ? _n : kn), n)
  );
}
function Nn(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Fn(e, t, r = !1) {
  let { routesMeta: n } = e,
    a = {},
    o = "/",
    l = [];
  for (let s = 0; s < n.length; ++s) {
    let i = n[s],
      u = s === n.length - 1,
      d = o === "/" ? t : t.slice(o.length) || "/",
      m = Dt(
        { path: i.relativePath, caseSensitive: i.caseSensitive, end: u },
        d,
      ),
      h = i.route;
    if (
      (!m &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (m = Dt(
          { path: i.relativePath, caseSensitive: i.caseSensitive, end: !1 },
          d,
        )),
      !m)
    )
      return null;
    Object.assign(a, m.params),
      l.push({
        params: a,
        pathname: Ee([o, m.pathname]),
        pathnameBase: Hn(Ee([o, m.pathnameBase])),
        route: h,
      }),
      m.pathnameBase !== "/" && (o = Ee([o, m.pathnameBase]));
  }
  return l;
}
function Dt(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = ua(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let o = a[0],
    l = o.replace(/(.)\/+$/, "$1"),
    s = a.slice(1);
  return {
    params: n.reduce((u, { paramName: d, isOptional: m }, h) => {
      if (d === "*") {
        let g = s[h] || "";
        l = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = s[h];
      return (
        m && !v ? (u[d] = void 0) : (u[d] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: l,
    pattern: e,
  };
}
function ua(e, t = !1, r = !0) {
  K(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`,
  );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, i) => (
            n.push({ paramName: s, isOptional: i != null }),
            i ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function $n(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      K(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function ue(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function An(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: a = "",
  } = typeof e == "string" ? De(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : jn(r, t)) : t,
    search: Un(n),
    hash: zn(a),
  };
}
function jn(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function zt(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ca(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function or(e) {
  let t = ca(e);
  return t.map((r, n) => (n === t.length - 1 ? r.pathname : r.pathnameBase));
}
function ir(e, t, r, n = !1) {
  let a;
  typeof e == "string"
    ? (a = De(e))
    : ((a = { ...e }),
      U(
        !a.pathname || !a.pathname.includes("?"),
        zt("?", "pathname", "search", a),
      ),
      U(
        !a.pathname || !a.pathname.includes("#"),
        zt("#", "pathname", "hash", a),
      ),
      U(!a.search || !a.search.includes("#"), zt("#", "search", "hash", a)));
  let o = e === "" || a.pathname === "",
    l = o ? "/" : a.pathname,
    s;
  if (l == null) s = r;
  else {
    let m = t.length - 1;
    if (!n && l.startsWith("..")) {
      let h = l.split("/");
      for (; h[0] === ".."; ) h.shift(), (m -= 1);
      a.pathname = h.join("/");
    }
    s = m >= 0 ? t[m] : "/";
  }
  let i = An(a, s),
    u = l && l !== "/" && l.endsWith("/"),
    d = (o || l === ".") && r.endsWith("/");
  return !i.pathname.endsWith("/") && (u || d) && (i.pathname += "/"), i;
}
var Ee = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Hn = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Un = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  zn = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  Bn = class {
    constructor(e, t) {
      (this.type = "DataWithResponseInit"),
        (this.data = e),
        (this.init = t || null);
    }
  };
function Wn(e, t) {
  return new Bn(e, typeof t == "number" ? { status: t } : t);
}
var Vn = (e, t = 302) => {
    let r = t;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let n = new Headers(r.headers);
    return n.set("Location", e), new Response(null, { ...r, headers: n });
  },
  Me = class {
    constructor(e, t, r, n = !1) {
      (this.status = e),
        (this.statusText = t || ""),
        (this.internal = n),
        r instanceof Error
          ? ((this.data = r.toString()), (this.error = r))
          : (this.data = r);
    }
  };
function Ae(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
var da = ["POST", "PUT", "PATCH", "DELETE"],
  Yn = new Set(da),
  Jn = ["GET", ...da],
  Gn = new Set(Jn),
  Kn = new Set([301, 302, 303, 307, 308]),
  Xn = new Set([307, 308]),
  Bt = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  qn = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  et = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  lr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qn = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  fa = "remix-router-transitions",
  ha = Symbol("ResetLoaderData");
function Zn(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u";
  U(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let n = e.hydrationRouteProperties || [],
    a = e.mapRouteProperties || Qn,
    o = {},
    l = Mt(e.routes, a, void 0, o),
    s,
    i = e.basename || "/",
    u = e.dataStrategy || no,
    d = { unstable_middleware: !1, ...e.future },
    m = null,
    h = new Set(),
    v = null,
    g = null,
    R = null,
    E = e.hydrationData != null,
    b = we(l, e.history.location, i),
    L = !1,
    D = null,
    P;
  if (b == null && !e.patchRoutesOnNavigation) {
    let f = he(404, { pathname: e.history.location.pathname }),
      { matches: y, route: w } = Gr(l);
    (P = !0), (b = y), (D = { [w.id]: f });
  } else if (
    (b &&
      !e.hydrationData &&
      mt(b, l, e.history.location.pathname).active &&
      (b = null),
    b)
  )
    if (b.some((f) => f.route.lazy)) P = !1;
    else if (!b.some((f) => f.route.loader)) P = !0;
    else {
      let f = e.hydrationData ? e.hydrationData.loaderData : null,
        y = e.hydrationData ? e.hydrationData.errors : null;
      if (y) {
        let w = b.findIndex((S) => y[S.route.id] !== void 0);
        P = b.slice(0, w + 1).every((S) => !Xt(S.route, f, y));
      } else P = b.every((w) => !Xt(w.route, f, y));
    }
  else {
    (P = !1), (b = []);
    let f = mt(null, l, e.history.location.pathname);
    f.active && f.matches && ((L = !0), (b = f.matches));
  }
  let x,
    p = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: P,
      navigation: Bt,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || D,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = "POP",
    j = !1,
    $,
    Y = !1,
    X = new Map(),
    ne = null,
    B = !1,
    J = !1,
    Z = new Set(),
    z = new Map(),
    ce = 0,
    pe = -1,
    oe = new Map(),
    te = new Set(),
    ye = new Map(),
    Je = new Map(),
    ge = new Set(),
    Te = new Map(),
    ft,
    _e = null;
  function Xa() {
    if (
      ((m = e.history.listen(({ action: f, location: y, delta: w }) => {
        if (ft) {
          ft(), (ft = void 0);
          return;
        }
        K(
          Te.size === 0 || w != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let S = Pr({
          currentLocation: p.location,
          nextLocation: y,
          historyAction: f,
        });
        if (S && w != null) {
          let C = new Promise((k) => {
            ft = k;
          });
          e.history.go(w * -1),
            ht(S, {
              state: "blocked",
              location: y,
              proceed() {
                ht(S, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: y,
                }),
                  C.then(() => e.history.go(w));
              },
              reset() {
                let k = new Map(p.blockers);
                k.set(S, et), re({ blockers: k });
              },
            });
          return;
        }
        return ke(f, y);
      })),
      r)
    ) {
      yo(t, X);
      let f = () => vo(t, X);
      t.addEventListener("pagehide", f),
        (ne = () => t.removeEventListener("pagehide", f));
    }
    return p.initialized || ke("POP", p.location, { initialHydration: !0 }), x;
  }
  function qa() {
    m && m(),
      ne && ne(),
      h.clear(),
      $ && $.abort(),
      p.fetchers.forEach((f, y) => $t(y)),
      p.blockers.forEach((f, y) => Cr(y));
  }
  function Qa(f) {
    return h.add(f), () => h.delete(f);
  }
  function re(f, y = {}) {
    p = { ...p, ...f };
    let w = [],
      S = [];
    p.fetchers.forEach((C, k) => {
      C.state === "idle" && (ge.has(k) ? w.push(k) : S.push(k));
    }),
      ge.forEach((C) => {
        !p.fetchers.has(C) && !z.has(C) && w.push(C);
      }),
      [...h].forEach((C) =>
        C(p, {
          deletedFetchers: w,
          viewTransitionOpts: y.viewTransitionOpts,
          flushSync: y.flushSync === !0,
        }),
      ),
      w.forEach((C) => $t(C)),
      S.forEach((C) => p.fetchers.delete(C));
  }
  function He(f, y, { flushSync: w } = {}) {
    var N, A;
    let S =
        p.actionData != null &&
        p.navigation.formMethod != null &&
        se(p.navigation.formMethod) &&
        p.navigation.state === "loading" &&
        ((N = f.state) == null ? void 0 : N._isRedirect) !== !0,
      C;
    y.actionData
      ? Object.keys(y.actionData).length > 0
        ? (C = y.actionData)
        : (C = null)
      : S
        ? (C = p.actionData)
        : (C = null);
    let k = y.loaderData
        ? Yr(p.loaderData, y.loaderData, y.matches || [], y.errors)
        : p.loaderData,
      F = p.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((O, H) => F.set(H, et)));
    let M =
      j === !0 ||
      (p.navigation.formMethod != null &&
        se(p.navigation.formMethod) &&
        ((A = f.state) == null ? void 0 : A._isRedirect) !== !0);
    s && ((l = s), (s = void 0)),
      B ||
        _ === "POP" ||
        (_ === "PUSH"
          ? e.history.push(f, f.state)
          : _ === "REPLACE" && e.history.replace(f, f.state));
    let I;
    if (_ === "POP") {
      let O = X.get(p.location.pathname);
      O && O.has(f.pathname)
        ? (I = { currentLocation: p.location, nextLocation: f })
        : X.has(f.pathname) &&
          (I = { currentLocation: f, nextLocation: p.location });
    } else if (Y) {
      let O = X.get(p.location.pathname);
      O
        ? O.add(f.pathname)
        : ((O = new Set([f.pathname])), X.set(p.location.pathname, O)),
        (I = { currentLocation: p.location, nextLocation: f });
    }
    re(
      {
        ...y,
        actionData: C,
        loaderData: k,
        historyAction: _,
        location: f,
        initialized: !0,
        navigation: Bt,
        revalidation: "idle",
        restoreScrollPosition: Dr(f, y.matches || p.matches),
        preventScrollReset: M,
        blockers: F,
      },
      { viewTransitionOpts: I, flushSync: w === !0 },
    ),
      (_ = "POP"),
      (j = !1),
      (Y = !1),
      (B = !1),
      (J = !1),
      _e == null || _e.resolve(),
      (_e = null);
  }
  async function wr(f, y) {
    if (typeof f == "number") {
      e.history.go(f);
      return;
    }
    let w = Kt(
        p.location,
        p.matches,
        i,
        f,
        y == null ? void 0 : y.fromRouteId,
        y == null ? void 0 : y.relative,
      ),
      { path: S, submission: C, error: k } = $r(!1, w, y),
      F = p.location,
      M = it(p.location, S, y && y.state);
    M = { ...M, ...e.history.encodeLocation(M) };
    let I = y && y.replace != null ? y.replace : void 0,
      N = "PUSH";
    I === !0
      ? (N = "REPLACE")
      : I === !1 ||
        (C != null &&
          se(C.formMethod) &&
          C.formAction === p.location.pathname + p.location.search &&
          (N = "REPLACE"));
    let A =
        y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0,
      O = (y && y.flushSync) === !0,
      H = Pr({ currentLocation: F, nextLocation: M, historyAction: N });
    if (H) {
      ht(H, {
        state: "blocked",
        location: M,
        proceed() {
          ht(H, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: M,
          }),
            wr(f, y);
        },
        reset() {
          let G = new Map(p.blockers);
          G.set(H, et), re({ blockers: G });
        },
      });
      return;
    }
    await ke(N, M, {
      submission: C,
      pendingError: k,
      preventScrollReset: A,
      replace: y && y.replace,
      enableViewTransition: y && y.viewTransition,
      flushSync: O,
    });
  }
  function Za() {
    _e || (_e = go()), Ft(), re({ revalidation: "loading" });
    let f = _e.promise;
    return p.navigation.state === "submitting"
      ? f
      : p.navigation.state === "idle"
        ? (ke(p.historyAction, p.location, {
            startUninterruptedRevalidation: !0,
          }),
          f)
        : (ke(_ || p.historyAction, p.navigation.location, {
            overrideNavigation: p.navigation,
            enableViewTransition: Y === !0,
          }),
          f);
  }
  async function ke(f, y, w) {
    $ && $.abort(),
      ($ = null),
      (_ = f),
      (B = (w && w.startUninterruptedRevalidation) === !0),
      cn(p.location, p.matches),
      (j = (w && w.preventScrollReset) === !0),
      (Y = (w && w.enableViewTransition) === !0);
    let S = s || l,
      C = w && w.overrideNavigation,
      k =
        w != null &&
        w.initialHydration &&
        p.matches &&
        p.matches.length > 0 &&
        !L
          ? p.matches
          : we(S, y, i),
      F = (w && w.flushSync) === !0;
    if (
      k &&
      p.initialized &&
      !J &&
      co(p.location, y) &&
      !(w && w.submission && se(w.submission.formMethod))
    ) {
      He(y, { matches: k }, { flushSync: F });
      return;
    }
    let M = mt(k, S, y.pathname);
    if ((M.active && M.matches && (k = M.matches), !k)) {
      let { error: ee, notFoundMatches: ie, route: W } = At(y.pathname);
      He(
        y,
        { matches: ie, loaderData: {}, errors: { [W.id]: ee } },
        { flushSync: F },
      );
      return;
    }
    $ = new AbortController();
    let I = ze(e.history, y, $.signal, w && w.submission),
      N = new Nr(
        e.unstable_getContext ? await e.unstable_getContext() : void 0,
      ),
      A;
    if (w && w.pendingError)
      A = [Fe(k).route.id, { type: "error", error: w.pendingError }];
    else if (w && w.submission && se(w.submission.formMethod)) {
      let ee = await en(
        I,
        y,
        w.submission,
        k,
        N,
        M.active,
        w && w.initialHydration === !0,
        { replace: w.replace, flushSync: F },
      );
      if (ee.shortCircuited) return;
      if (ee.pendingActionResult) {
        let [ie, W] = ee.pendingActionResult;
        if (le(W) && Ae(W.error) && W.error.status === 404) {
          ($ = null),
            He(y, {
              matches: ee.matches,
              loaderData: {},
              errors: { [ie]: W.error },
            });
          return;
        }
      }
      (k = ee.matches || k),
        (A = ee.pendingActionResult),
        (C = Wt(y, w.submission)),
        (F = !1),
        (M.active = !1),
        (I = ze(e.history, I.url, I.signal));
    }
    let {
      shortCircuited: O,
      matches: H,
      loaderData: G,
      errors: Q,
    } = await tn(
      I,
      y,
      k,
      N,
      M.active,
      C,
      w && w.submission,
      w && w.fetcherSubmission,
      w && w.replace,
      w && w.initialHydration === !0,
      F,
      A,
    );
    O ||
      (($ = null),
      He(y, { matches: H || k, ...Jr(A), loaderData: G, errors: Q }));
  }
  async function en(f, y, w, S, C, k, F, M = {}) {
    Ft();
    let I = mo(y, w);
    if ((re({ navigation: I }, { flushSync: M.flushSync === !0 }), k)) {
      let O = await pt(S, y.pathname, f.signal);
      if (O.type === "aborted") return { shortCircuited: !0 };
      if (O.type === "error") {
        let H = Fe(O.partialMatches).route.id;
        return {
          matches: O.partialMatches,
          pendingActionResult: [H, { type: "error", error: O.error }],
        };
      } else if (O.matches) S = O.matches;
      else {
        let { notFoundMatches: H, error: G, route: Q } = At(y.pathname);
        return {
          matches: H,
          pendingActionResult: [Q.id, { type: "error", error: G }],
        };
      }
    }
    let N,
      A = ot(S, y);
    if (!A.route.action && !A.route.lazy)
      N = {
        type: "error",
        error: he(405, {
          method: f.method,
          pathname: y.pathname,
          routeId: A.route.id,
        }),
      };
    else {
      let O = Be(a, o, f, S, A, F ? [] : n, C),
        H = await Ge(f, O, C, null);
      if (((N = H[A.route.id]), !N)) {
        for (let G of S)
          if (H[G.route.id]) {
            N = H[G.route.id];
            break;
          }
      }
      if (f.signal.aborted) return { shortCircuited: !0 };
    }
    if ($e(N)) {
      let O;
      return (
        M && M.replace != null
          ? (O = M.replace)
          : (O =
              Br(N.response.headers.get("Location"), new URL(f.url), i) ===
              p.location.pathname + p.location.search),
        await Ie(f, N, !0, { submission: w, replace: O }),
        { shortCircuited: !0 }
      );
    }
    if (le(N)) {
      let O = Fe(S, A.route.id);
      return (
        (M && M.replace) !== !0 && (_ = "PUSH"),
        { matches: S, pendingActionResult: [O.route.id, N, A.route.id] }
      );
    }
    return { matches: S, pendingActionResult: [A.route.id, N] };
  }
  async function tn(f, y, w, S, C, k, F, M, I, N, A, O) {
    let H = k || Wt(y, F),
      G = F || M || Kr(H),
      Q = !B && !N;
    if (C) {
      if (Q) {
        let fe = Er(O);
        re(
          { navigation: H, ...(fe !== void 0 ? { actionData: fe } : {}) },
          { flushSync: A },
        );
      }
      let V = await pt(w, y.pathname, f.signal);
      if (V.type === "aborted") return { shortCircuited: !0 };
      if (V.type === "error") {
        let fe = Fe(V.partialMatches).route.id;
        return {
          matches: V.partialMatches,
          loaderData: {},
          errors: { [fe]: V.error },
        };
      } else if (V.matches) w = V.matches;
      else {
        let { error: fe, notFoundMatches: Le, route: vt } = At(y.pathname);
        return { matches: Le, loaderData: {}, errors: { [vt.id]: fe } };
      }
    }
    let ee = s || l,
      { dsMatches: ie, revalidatingFetchers: W } = Ar(
        f,
        S,
        a,
        o,
        e.history,
        p,
        w,
        G,
        y,
        N ? [] : n,
        N === !0,
        J,
        Z,
        ge,
        ye,
        te,
        ee,
        i,
        O,
      );
    if (
      ((pe = ++ce),
      !e.dataStrategy && !ie.some((V) => V.shouldLoad) && W.length === 0)
    ) {
      let V = xr();
      return (
        He(
          y,
          {
            matches: w,
            loaderData: {},
            errors: O && le(O[1]) ? { [O[0]]: O[1].error } : null,
            ...Jr(O),
            ...(V ? { fetchers: new Map(p.fetchers) } : {}),
          },
          { flushSync: A },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Q) {
      let V = {};
      if (!C) {
        V.navigation = H;
        let fe = Er(O);
        fe !== void 0 && (V.actionData = fe);
      }
      W.length > 0 && (V.fetchers = rn(W)), re(V, { flushSync: A });
    }
    W.forEach((V) => {
      xe(V.key), V.controller && z.set(V.key, V.controller);
    });
    let Ke = () => W.forEach((V) => xe(V.key));
    $ && $.signal.addEventListener("abort", Ke);
    let { loaderResults: Oe, fetcherResults: Xe } = await br(ie, W, f, S);
    if (f.signal.aborted) return { shortCircuited: !0 };
    $ && $.signal.removeEventListener("abort", Ke),
      W.forEach((V) => z.delete(V.key));
    let de = gt(Oe);
    if (de)
      return await Ie(f, de.result, !0, { replace: I }), { shortCircuited: !0 };
    if (((de = gt(Xe)), de))
      return (
        te.add(de.key),
        await Ie(f, de.result, !0, { replace: I }),
        { shortCircuited: !0 }
      );
    let { loaderData: qe, errors: Qe } = Vr(p, w, Oe, O, W, Xe);
    N && p.errors && (Qe = { ...p.errors, ...Qe });
    let jt = xr(),
      Ne = Lr(pe),
      yt = jt || Ne || W.length > 0;
    return {
      matches: w,
      loaderData: qe,
      errors: Qe,
      ...(yt ? { fetchers: new Map(p.fetchers) } : {}),
    };
  }
  function Er(f) {
    if (f && !le(f[1])) return { [f[0]]: f[1].data };
    if (p.actionData)
      return Object.keys(p.actionData).length === 0 ? null : p.actionData;
  }
  function rn(f) {
    return (
      f.forEach((y) => {
        let w = p.fetchers.get(y.key),
          S = tt(void 0, w ? w.data : void 0);
        p.fetchers.set(y.key, S);
      }),
      new Map(p.fetchers)
    );
  }
  async function an(f, y, w, S) {
    xe(f);
    let C = (S && S.flushSync) === !0,
      k = s || l,
      F = Kt(p.location, p.matches, i, w, y, S == null ? void 0 : S.relative),
      M = we(k, F, i),
      I = mt(M, k, F);
    if ((I.active && I.matches && (M = I.matches), !M)) {
      Re(f, y, he(404, { pathname: F }), { flushSync: C });
      return;
    }
    let { path: N, submission: A, error: O } = $r(!0, F, S);
    if (O) {
      Re(f, y, O, { flushSync: C });
      return;
    }
    let H = ot(M, N),
      G = new Nr(
        e.unstable_getContext ? await e.unstable_getContext() : void 0,
      ),
      Q = (S && S.preventScrollReset) === !0;
    if (A && se(A.formMethod)) {
      await nn(f, y, N, H, M, G, I.active, C, Q, A);
      return;
    }
    ye.set(f, { routeId: y, path: N }),
      await on(f, y, N, H, M, G, I.active, C, Q, A);
  }
  async function nn(f, y, w, S, C, k, F, M, I, N) {
    Ft(), ye.delete(f);
    function A(q) {
      if (!q.route.action && !q.route.lazy) {
        let Ue = he(405, { method: N.formMethod, pathname: w, routeId: y });
        return Re(f, y, Ue, { flushSync: M }), !0;
      }
      return !1;
    }
    if (!F && A(S)) return;
    let O = p.fetchers.get(f);
    Se(f, po(N, O), { flushSync: M });
    let H = new AbortController(),
      G = ze(e.history, w, H.signal, N);
    if (F) {
      let q = await pt(C, w, G.signal, f);
      if (q.type === "aborted") return;
      if (q.type === "error") {
        Re(f, y, q.error, { flushSync: M });
        return;
      } else if (q.matches) {
        if (((C = q.matches), (S = ot(C, w)), A(S))) return;
      } else {
        Re(f, y, he(404, { pathname: w }), { flushSync: M });
        return;
      }
    }
    z.set(f, H);
    let Q = ce,
      ee = Be(a, o, G, C, S, n, k),
      W = (await Ge(G, ee, k, f))[S.route.id];
    if (G.signal.aborted) {
      z.get(f) === H && z.delete(f);
      return;
    }
    if (ge.has(f)) {
      if ($e(W) || le(W)) {
        Se(f, Ce(void 0));
        return;
      }
    } else {
      if ($e(W))
        if ((z.delete(f), pe > Q)) {
          Se(f, Ce(void 0));
          return;
        } else
          return (
            te.add(f),
            Se(f, tt(N)),
            Ie(G, W, !1, { fetcherSubmission: N, preventScrollReset: I })
          );
      if (le(W)) {
        Re(f, y, W.error);
        return;
      }
    }
    let Ke = p.navigation.location || p.location,
      Oe = ze(e.history, Ke, H.signal),
      Xe = s || l,
      de =
        p.navigation.state !== "idle"
          ? we(Xe, p.navigation.location, i)
          : p.matches;
    U(de, "Didn't find any matches after fetcher action");
    let qe = ++ce;
    oe.set(f, qe);
    let Qe = tt(N, W.data);
    p.fetchers.set(f, Qe);
    let { dsMatches: jt, revalidatingFetchers: Ne } = Ar(
      Oe,
      k,
      a,
      o,
      e.history,
      p,
      de,
      N,
      Ke,
      n,
      !1,
      J,
      Z,
      ge,
      ye,
      te,
      Xe,
      i,
      [S.route.id, W],
    );
    Ne.filter((q) => q.key !== f).forEach((q) => {
      let Ue = q.key,
        Tr = p.fetchers.get(Ue),
        hn = tt(void 0, Tr ? Tr.data : void 0);
      p.fetchers.set(Ue, hn), xe(Ue), q.controller && z.set(Ue, q.controller);
    }),
      re({ fetchers: new Map(p.fetchers) });
    let yt = () => Ne.forEach((q) => xe(q.key));
    H.signal.addEventListener("abort", yt);
    let { loaderResults: V, fetcherResults: fe } = await br(jt, Ne, Oe, k);
    if (H.signal.aborted) return;
    if (
      (H.signal.removeEventListener("abort", yt),
      oe.delete(f),
      z.delete(f),
      Ne.forEach((q) => z.delete(q.key)),
      p.fetchers.has(f))
    ) {
      let q = Ce(W.data);
      p.fetchers.set(f, q);
    }
    let Le = gt(V);
    if (Le) return Ie(Oe, Le.result, !1, { preventScrollReset: I });
    if (((Le = gt(fe)), Le))
      return te.add(Le.key), Ie(Oe, Le.result, !1, { preventScrollReset: I });
    let { loaderData: vt, errors: Ht } = Vr(p, de, V, void 0, Ne, fe);
    Lr(qe),
      p.navigation.state === "loading" && qe > pe
        ? (U(_, "Expected pending action"),
          $ && $.abort(),
          He(p.navigation.location, {
            matches: de,
            loaderData: vt,
            errors: Ht,
            fetchers: new Map(p.fetchers),
          }))
        : (re({
            errors: Ht,
            loaderData: Yr(p.loaderData, vt, de, Ht),
            fetchers: new Map(p.fetchers),
          }),
          (J = !1));
  }
  async function on(f, y, w, S, C, k, F, M, I, N) {
    let A = p.fetchers.get(f);
    Se(f, tt(N, A ? A.data : void 0), { flushSync: M });
    let O = new AbortController(),
      H = ze(e.history, w, O.signal);
    if (F) {
      let W = await pt(C, w, H.signal, f);
      if (W.type === "aborted") return;
      if (W.type === "error") {
        Re(f, y, W.error, { flushSync: M });
        return;
      } else if (W.matches) (C = W.matches), (S = ot(C, w));
      else {
        Re(f, y, he(404, { pathname: w }), { flushSync: M });
        return;
      }
    }
    z.set(f, O);
    let G = ce,
      Q = Be(a, o, H, C, S, n, k),
      ie = (await Ge(H, Q, k, f))[S.route.id];
    if ((z.get(f) === O && z.delete(f), !H.signal.aborted)) {
      if (ge.has(f)) {
        Se(f, Ce(void 0));
        return;
      }
      if ($e(ie))
        if (pe > G) {
          Se(f, Ce(void 0));
          return;
        } else {
          te.add(f), await Ie(H, ie, !1, { preventScrollReset: I });
          return;
        }
      if (le(ie)) {
        Re(f, y, ie.error);
        return;
      }
      Se(f, Ce(ie.data));
    }
  }
  async function Ie(
    f,
    y,
    w,
    {
      submission: S,
      fetcherSubmission: C,
      preventScrollReset: k,
      replace: F,
    } = {},
  ) {
    y.response.headers.has("X-Remix-Revalidate") && (J = !0);
    let M = y.response.headers.get("Location");
    U(M, "Expected a Location header on the redirect Response"),
      (M = Br(M, new URL(f.url), i));
    let I = it(p.location, M, { _isRedirect: !0 });
    if (r) {
      let Q = !1;
      if (y.response.headers.has("X-Remix-Reload-Document")) Q = !0;
      else if (lr.test(M)) {
        const ee = oa(M, !0);
        Q = ee.origin !== t.location.origin || ue(ee.pathname, i) == null;
      }
      if (Q) {
        F ? t.location.replace(M) : t.location.assign(M);
        return;
      }
    }
    $ = null;
    let N =
        F === !0 || y.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: A, formAction: O, formEncType: H } = p.navigation;
    !S && !C && A && O && H && (S = Kr(p.navigation));
    let G = S || C;
    if (Xn.has(y.response.status) && G && se(G.formMethod))
      await ke(N, I, {
        submission: { ...G, formAction: M },
        preventScrollReset: k || j,
        enableViewTransition: w ? Y : void 0,
      });
    else {
      let Q = Wt(I, S);
      await ke(N, I, {
        overrideNavigation: Q,
        fetcherSubmission: C,
        preventScrollReset: k || j,
        enableViewTransition: w ? Y : void 0,
      });
    }
  }
  async function Ge(f, y, w, S) {
    let C,
      k = {};
    try {
      C = await oo(u, f, y, S, w, !1);
    } catch (F) {
      return (
        y
          .filter((M) => M.shouldLoad)
          .forEach((M) => {
            k[M.route.id] = { type: "error", error: F };
          }),
        k
      );
    }
    if (f.signal.aborted) return k;
    for (let [F, M] of Object.entries(C))
      if (fo(M)) {
        let I = M.result;
        k[F] = { type: "redirect", response: so(I, f, F, y, i) };
      } else k[F] = await lo(M);
    return k;
  }
  async function br(f, y, w, S) {
    let C = Ge(w, f, S, null),
      k = Promise.all(
        y.map(async (I) => {
          if (I.matches && I.match && I.request && I.controller) {
            let A = (await Ge(I.request, I.matches, S, I.key))[
              I.match.route.id
            ];
            return { [I.key]: A };
          } else
            return Promise.resolve({
              [I.key]: { type: "error", error: he(404, { pathname: I.path }) },
            });
        }),
      ),
      F = await C,
      M = (await k).reduce((I, N) => Object.assign(I, N), {});
    return { loaderResults: F, fetcherResults: M };
  }
  function Ft() {
    (J = !0),
      ye.forEach((f, y) => {
        z.has(y) && Z.add(y), xe(y);
      });
  }
  function Se(f, y, w = {}) {
    p.fetchers.set(f, y),
      re(
        { fetchers: new Map(p.fetchers) },
        { flushSync: (w && w.flushSync) === !0 },
      );
  }
  function Re(f, y, w, S = {}) {
    let C = Fe(p.matches, y);
    $t(f),
      re(
        { errors: { [C.route.id]: w }, fetchers: new Map(p.fetchers) },
        { flushSync: (S && S.flushSync) === !0 },
      );
  }
  function Rr(f) {
    return (
      Je.set(f, (Je.get(f) || 0) + 1),
      ge.has(f) && ge.delete(f),
      p.fetchers.get(f) || qn
    );
  }
  function $t(f) {
    let y = p.fetchers.get(f);
    z.has(f) && !(y && y.state === "loading" && oe.has(f)) && xe(f),
      ye.delete(f),
      oe.delete(f),
      te.delete(f),
      ge.delete(f),
      Z.delete(f),
      p.fetchers.delete(f);
  }
  function ln(f) {
    let y = (Je.get(f) || 0) - 1;
    y <= 0 ? (Je.delete(f), ge.add(f)) : Je.set(f, y),
      re({ fetchers: new Map(p.fetchers) });
  }
  function xe(f) {
    let y = z.get(f);
    y && (y.abort(), z.delete(f));
  }
  function Sr(f) {
    for (let y of f) {
      let w = Rr(y),
        S = Ce(w.data);
      p.fetchers.set(y, S);
    }
  }
  function xr() {
    let f = [],
      y = !1;
    for (let w of te) {
      let S = p.fetchers.get(w);
      U(S, `Expected fetcher: ${w}`),
        S.state === "loading" && (te.delete(w), f.push(w), (y = !0));
    }
    return Sr(f), y;
  }
  function Lr(f) {
    let y = [];
    for (let [w, S] of oe)
      if (S < f) {
        let C = p.fetchers.get(w);
        U(C, `Expected fetcher: ${w}`),
          C.state === "loading" && (xe(w), oe.delete(w), y.push(w));
      }
    return Sr(y), y.length > 0;
  }
  function sn(f, y) {
    let w = p.blockers.get(f) || et;
    return Te.get(f) !== y && Te.set(f, y), w;
  }
  function Cr(f) {
    p.blockers.delete(f), Te.delete(f);
  }
  function ht(f, y) {
    let w = p.blockers.get(f) || et;
    U(
      (w.state === "unblocked" && y.state === "blocked") ||
        (w.state === "blocked" && y.state === "blocked") ||
        (w.state === "blocked" && y.state === "proceeding") ||
        (w.state === "blocked" && y.state === "unblocked") ||
        (w.state === "proceeding" && y.state === "unblocked"),
      `Invalid blocker state transition: ${w.state} -> ${y.state}`,
    );
    let S = new Map(p.blockers);
    S.set(f, y), re({ blockers: S });
  }
  function Pr({ currentLocation: f, nextLocation: y, historyAction: w }) {
    if (Te.size === 0) return;
    Te.size > 1 && K(!1, "A router only supports one blocker at a time");
    let S = Array.from(Te.entries()),
      [C, k] = S[S.length - 1],
      F = p.blockers.get(C);
    if (
      !(F && F.state === "proceeding") &&
      k({ currentLocation: f, nextLocation: y, historyAction: w })
    )
      return C;
  }
  function At(f) {
    let y = he(404, { pathname: f }),
      w = s || l,
      { matches: S, route: C } = Gr(w);
    return { notFoundMatches: S, route: C, error: y };
  }
  function un(f, y, w) {
    if (((v = f), (R = y), (g = w || null), !E && p.navigation === Bt)) {
      E = !0;
      let S = Dr(p.location, p.matches);
      S != null && re({ restoreScrollPosition: S });
    }
    return () => {
      (v = null), (R = null), (g = null);
    };
  }
  function Mr(f, y) {
    return (
      (g &&
        g(
          f,
          y.map((S) => ia(S, p.loaderData)),
        )) ||
      f.key
    );
  }
  function cn(f, y) {
    if (v && R) {
      let w = Mr(f, y);
      v[w] = R();
    }
  }
  function Dr(f, y) {
    if (v) {
      let w = Mr(f, y),
        S = v[w];
      if (typeof S == "number") return S;
    }
    return null;
  }
  function mt(f, y, w) {
    if (e.patchRoutesOnNavigation)
      if (f) {
        if (Object.keys(f[0].params).length > 0)
          return { active: !0, matches: St(y, w, i, !0) };
      } else return { active: !0, matches: St(y, w, i, !0) || [] };
    return { active: !1, matches: null };
  }
  async function pt(f, y, w, S) {
    if (!e.patchRoutesOnNavigation) return { type: "success", matches: f };
    let C = f;
    for (;;) {
      let k = s == null,
        F = s || l,
        M = o;
      try {
        await e.patchRoutesOnNavigation({
          signal: w,
          path: y,
          matches: C,
          fetcherKey: S,
          patch: (A, O) => {
            w.aborted || jr(A, O, F, M, a);
          },
        });
      } catch (A) {
        return { type: "error", error: A, partialMatches: C };
      } finally {
        k && !w.aborted && (l = [...l]);
      }
      if (w.aborted) return { type: "aborted" };
      let I = we(F, y, i);
      if (I) return { type: "success", matches: I };
      let N = St(F, y, i, !0);
      if (
        !N ||
        (C.length === N.length &&
          C.every((A, O) => A.route.id === N[O].route.id))
      )
        return { type: "success", matches: null };
      C = N;
    }
  }
  function dn(f) {
    (o = {}), (s = Mt(f, a, void 0, o));
  }
  function fn(f, y) {
    let w = s == null;
    jr(f, y, s || l, o, a), w && ((l = [...l]), re({}));
  }
  return (
    (x = {
      get basename() {
        return i;
      },
      get future() {
        return d;
      },
      get state() {
        return p;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: Xa,
      subscribe: Qa,
      enableScrollRestoration: un,
      navigate: wr,
      fetch: an,
      revalidate: Za,
      createHref: (f) => e.history.createHref(f),
      encodeLocation: (f) => e.history.encodeLocation(f),
      getFetcher: Rr,
      deleteFetcher: ln,
      dispose: qa,
      getBlocker: sn,
      deleteBlocker: Cr,
      patchRoutes: fn,
      _internalFetchControllers: z,
      _internalSetRoutes: dn,
    }),
    x
  );
}
function eo(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Kt(e, t, r, n, a, o) {
  let l, s;
  if (a) {
    l = [];
    for (let u of t)
      if ((l.push(u), u.route.id === a)) {
        s = u;
        break;
      }
  } else (l = t), (s = t[t.length - 1]);
  let i = ir(n || ".", or(l), ue(e.pathname, r) || e.pathname, o === "path");
  if (
    (n == null && ((i.search = e.search), (i.hash = e.hash)),
    (n == null || n === "" || n === ".") && s)
  ) {
    let u = ur(i.search);
    if (s.route.index && !u)
      i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && u) {
      let d = new URLSearchParams(i.search),
        m = d.getAll("index");
      d.delete("index"),
        m.filter((v) => v).forEach((v) => d.append("index", v));
      let h = d.toString();
      i.search = h ? `?${h}` : "";
    }
  }
  return (
    r !== "/" && (i.pathname = i.pathname === "/" ? r : Ee([r, i.pathname])),
    Pe(i)
  );
}
function $r(e, t, r) {
  if (!r || !eo(r)) return { path: t };
  if (r.formMethod && !ho(r.formMethod))
    return { path: t, error: he(405, { method: r.formMethod }) };
  let n = () => ({ path: t, error: he(400, { type: "invalid-body" }) }),
    o = (r.formMethod || "get").toUpperCase(),
    l = wa(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!se(o)) return n();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce(
                (h, [v, g]) => `${h}${v}=${g}
`,
                "",
              )
            : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!se(o)) return n();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return n();
      }
    }
  }
  U(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let s, i;
  if (r.formData) (s = Qt(r.formData)), (i = r.formData);
  else if (r.body instanceof FormData) (s = Qt(r.body)), (i = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (i = Wr(s));
  else if (r.body == null) (s = new URLSearchParams()), (i = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (i = Wr(s));
    } catch {
      return n();
    }
  let u = {
    formMethod: o,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: i,
    json: void 0,
    text: void 0,
  };
  if (se(u.formMethod)) return { path: t, submission: u };
  let d = De(t);
  return (
    e && d.search && ur(d.search) && s.append("index", ""),
    (d.search = `?${s}`),
    { path: Pe(d), submission: u }
  );
}
function Ar(e, t, r, n, a, o, l, s, i, u, d, m, h, v, g, R, E, b, L) {
  var ne;
  let D = L ? (le(L[1]) ? L[1].error : L[1].data) : void 0,
    P = a.createURL(o.location),
    x = a.createURL(i),
    p;
  if (d && o.errors) {
    let B = Object.keys(o.errors)[0];
    p = l.findIndex((J) => J.route.id === B);
  } else if (L && le(L[1])) {
    let B = L[0];
    p = l.findIndex((J) => J.route.id === B) - 1;
  }
  let _ = L ? L[1].statusCode : void 0,
    j = _ && _ >= 400,
    $ = {
      currentUrl: P,
      currentParams: ((ne = o.matches[0]) == null ? void 0 : ne.params) || {},
      nextUrl: x,
      nextParams: l[0].params,
      ...s,
      actionResult: D,
      actionStatus: _,
    },
    Y = l.map((B, J) => {
      let { route: Z } = B,
        z = null;
      if (
        (p != null && J > p
          ? (z = !1)
          : Z.lazy
            ? (z = !0)
            : Z.loader == null
              ? (z = !1)
              : d
                ? (z = Xt(Z, o.loaderData, o.errors))
                : to(o.loaderData, o.matches[J], B) && (z = !0),
        z !== null)
      )
        return qt(r, n, e, B, u, t, z);
      let ce = j
          ? !1
          : m ||
            P.pathname + P.search === x.pathname + x.search ||
            P.search !== x.search ||
            ro(o.matches[J], B),
        pe = { ...$, defaultShouldRevalidate: ce },
        oe = Tt(B, pe);
      return qt(r, n, e, B, u, t, oe, pe);
    }),
    X = [];
  return (
    g.forEach((B, J) => {
      if (d || !l.some((ye) => ye.route.id === B.routeId) || v.has(J)) return;
      let Z = we(E, B.path, b);
      if (!Z) {
        X.push({
          key: J,
          routeId: B.routeId,
          path: B.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (R.has(J)) return;
      let z = o.fetchers.get(J),
        ce = ot(Z, B.path),
        pe = new AbortController(),
        oe = ze(a, B.path, pe.signal),
        te = null;
      if (h.has(J)) h.delete(J), (te = Be(r, n, oe, Z, ce, u, t));
      else if (z && z.state !== "idle" && z.data === void 0)
        m && (te = Be(r, n, oe, Z, ce, u, t));
      else {
        let ye = { ...$, defaultShouldRevalidate: j ? !1 : m };
        Tt(ce, ye) && (te = Be(r, n, oe, Z, ce, u, t, ye));
      }
      te &&
        X.push({
          key: J,
          routeId: B.routeId,
          path: B.path,
          matches: te,
          match: ce,
          request: oe,
          controller: pe,
        });
    }),
    { dsMatches: Y, revalidatingFetchers: X }
  );
}
function Xt(e, t, r) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let n = t != null && e.id in t,
    a = r != null && r[e.id] !== void 0;
  return !n && a
    ? !1
    : typeof e.loader == "function" && e.loader.hydrate === !0
      ? !0
      : !n && !a;
}
function to(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function ro(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Tt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
function jr(e, t, r, n, a) {
  let o;
  if (e) {
    let i = n[e];
    U(i, `No route found to patch children into: routeId = ${e}`),
      i.children || (i.children = []),
      (o = i.children);
  } else o = r;
  let l = t.filter((i) => !o.some((u) => ma(i, u))),
    s = Mt(
      l,
      a,
      [e || "_", "patch", String((o == null ? void 0 : o.length) || "0")],
      n,
    );
  o.push(...s);
}
function ma(e, t) {
  return "id" in e && "id" in t && e.id === t.id
    ? !0
    : e.index === t.index &&
        e.path === t.path &&
        e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) &&
        (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((r, n) => {
            var a;
            return (a = t.children) == null ? void 0 : a.some((o) => ma(r, o));
          })
      : !1;
}
var Hr = new WeakMap(),
  pa = ({ key: e, route: t, manifest: r, mapRouteProperties: n }) => {
    let a = r[t.id];
    if (
      (U(a, "No route found in manifest"), !a.lazy || typeof a.lazy != "object")
    )
      return;
    let o = a.lazy[e];
    if (!o) return;
    let l = Hr.get(a);
    l || ((l = {}), Hr.set(a, l));
    let s = l[e];
    if (s) return s;
    let i = (async () => {
      let u = Sn(e),
        m = a[e] !== void 0 && e !== "hasErrorBoundary";
      if (u)
        K(
          !u,
          "Route property " +
            e +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (l[e] = Promise.resolve());
      else if (m)
        K(
          !1,
          `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`,
        );
      else {
        let h = await o();
        h != null && (Object.assign(a, { [e]: h }), Object.assign(a, n(a)));
      }
      typeof a.lazy == "object" &&
        ((a.lazy[e] = void 0),
        Object.values(a.lazy).every((h) => h === void 0) && (a.lazy = void 0));
    })();
    return (l[e] = i), i;
  },
  Ur = new WeakMap();
function ao(e, t, r, n, a) {
  let o = r[e.id];
  if ((U(o, "No route found in manifest"), !e.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof e.lazy == "function") {
    let d = Ur.get(o);
    if (d) return { lazyRoutePromise: d, lazyHandlerPromise: d };
    let m = (async () => {
      U(typeof e.lazy == "function", "No lazy route function found");
      let h = await e.lazy(),
        v = {};
      for (let g in h) {
        let R = h[g];
        if (R === void 0) continue;
        let E = Ln(g),
          L = o[g] !== void 0 && g !== "hasErrorBoundary";
        E
          ? K(
              !E,
              "Route property " +
                g +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : L
            ? K(
                !L,
                `Route "${o.id}" has a static property "${g}" defined but its lazy function is also returning a value for this property. The lazy route property "${g}" will be ignored.`,
              )
            : (v[g] = R);
      }
      Object.assign(o, v), Object.assign(o, { ...n(o), lazy: void 0 });
    })();
    return (
      Ur.set(o, m),
      m.catch(() => {}),
      { lazyRoutePromise: m, lazyHandlerPromise: m }
    );
  }
  let l = Object.keys(e.lazy),
    s = [],
    i;
  for (let d of l) {
    if (a && a.includes(d)) continue;
    let m = pa({ key: d, route: e, manifest: r, mapRouteProperties: n });
    m && (s.push(m), d === t && (i = m));
  }
  let u = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
  return (
    u == null || u.catch(() => {}),
    i == null || i.catch(() => {}),
    { lazyRoutePromise: u, lazyHandlerPromise: i }
  );
}
async function zr(e) {
  let t = e.matches.filter((a) => a.shouldLoad),
    r = {};
  return (
    (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
      r[t[o].route.id] = a;
    }),
    r
  );
}
async function no(e) {
  return e.matches.some((t) => t.route.unstable_middleware)
    ? ya(
        e,
        !1,
        () => zr(e),
        (t, r) => ({ [r]: { type: "error", result: t } }),
      )
    : zr(e);
}
async function ya(e, t, r, n) {
  let { matches: a, request: o, params: l, context: s } = e,
    i = { handlerResult: void 0 };
  try {
    let u = a.flatMap((m) =>
        m.route.unstable_middleware
          ? m.route.unstable_middleware.map((h) => [m.route.id, h])
          : [],
      ),
      d = await va({ request: o, params: l, context: s }, u, t, i, r);
    return t ? d : i.handlerResult;
  } catch (u) {
    if (!i.middlewareError) throw u;
    let d = await n(i.middlewareError.error, i.middlewareError.routeId);
    return i.handlerResult ? Object.assign(i.handlerResult, d) : d;
  }
}
async function va(e, t, r, n, a, o = 0) {
  let { request: l } = e;
  if (l.signal.aborted)
    throw l.signal.reason
      ? l.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${l.method} ${l.url}`,
        );
  let s = t[o];
  if (!s) return (n.handlerResult = await a()), n.handlerResult;
  let [i, u] = s,
    d = !1,
    m,
    h = async () => {
      if (d) throw new Error("You may only call `next()` once per middleware");
      (d = !0), await va(e, t, r, n, a, o + 1);
    };
  try {
    let v = await u(
      { request: e.request, params: e.params, context: e.context },
      h,
    );
    return d ? (v === void 0 ? m : v) : h();
  } catch (v) {
    throw (
      (n.middlewareError
        ? n.middlewareError.error !== v &&
          (n.middlewareError = { routeId: i, error: v })
        : (n.middlewareError = { routeId: i, error: v }),
      v)
    );
  }
}
function ga(e, t, r, n, a) {
  let o = pa({
      key: "unstable_middleware",
      route: n.route,
      manifest: t,
      mapRouteProperties: e,
    }),
    l = ao(n.route, se(r.method) ? "action" : "loader", t, e, a);
  return {
    middleware: o,
    route: l.lazyRoutePromise,
    handler: l.lazyHandlerPromise,
  };
}
function qt(e, t, r, n, a, o, l, s = null) {
  let i = !1,
    u = ga(e, t, r, n, a);
  return {
    ...n,
    _lazyPromises: u,
    shouldLoad: l,
    unstable_shouldRevalidateArgs: s,
    unstable_shouldCallHandler(d) {
      return (
        (i = !0),
        s
          ? typeof d == "boolean"
            ? Tt(n, { ...s, defaultShouldRevalidate: d })
            : Tt(n, s)
          : l
      );
    },
    resolve(d) {
      return i ||
        l ||
        (d && r.method === "GET" && (n.route.lazy || n.route.loader))
        ? io({
            request: r,
            match: n,
            lazyHandlerPromise: u == null ? void 0 : u.handler,
            lazyRoutePromise: u == null ? void 0 : u.route,
            handlerOverride: d,
            scopedContext: o,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Be(e, t, r, n, a, o, l, s = null) {
  return n.map((i) =>
    i.route.id !== a.route.id
      ? {
          ...i,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: s,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: ga(e, t, r, i, o),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : qt(e, t, r, i, o, l, !0, s),
  );
}
async function oo(e, t, r, n, a, o) {
  r.some((u) => {
    var d;
    return (d = u._lazyPromises) == null ? void 0 : d.middleware;
  }) &&
    (await Promise.all(
      r.map((u) => {
        var d;
        return (d = u._lazyPromises) == null ? void 0 : d.middleware;
      }),
    ));
  let l = { request: t, params: r[0].params, context: a, matches: r },
    i = await e({
      ...l,
      fetcherKey: n,
      unstable_runClientMiddleware: (u) => {
        let d = l;
        return ya(
          d,
          !1,
          () =>
            u({
              ...d,
              fetcherKey: n,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler",
                );
              },
            }),
          (m, h) => ({ [h]: { type: "error", result: m } }),
        );
      },
    });
  try {
    await Promise.all(
      r.flatMap((u) => {
        var d, m;
        return [
          (d = u._lazyPromises) == null ? void 0 : d.handler,
          (m = u._lazyPromises) == null ? void 0 : m.route,
        ];
      }),
    );
  } catch {}
  return i;
}
async function io({
  request: e,
  match: t,
  lazyHandlerPromise: r,
  lazyRoutePromise: n,
  handlerOverride: a,
  scopedContext: o,
}) {
  let l,
    s,
    i = se(e.method),
    u = i ? "action" : "loader",
    d = (m) => {
      let h,
        v = new Promise((E, b) => (h = b));
      (s = () => h()), e.signal.addEventListener("abort", s);
      let g = (E) =>
          typeof m != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`,
                ),
              )
            : m(
                { request: e, params: t.params, context: o },
                ...(E !== void 0 ? [E] : []),
              ),
        R = (async () => {
          try {
            return { type: "data", result: await (a ? a((b) => g(b)) : g()) };
          } catch (E) {
            return { type: "error", result: E };
          }
        })();
      return Promise.race([R, v]);
    };
  try {
    let m = i ? t.route.action : t.route.loader;
    if (r || n)
      if (m) {
        let h,
          [v] = await Promise.all([
            d(m).catch((g) => {
              h = g;
            }),
            r,
            n,
          ]);
        if (h !== void 0) throw h;
        l = v;
      } else {
        await r;
        let h = i ? t.route.action : t.route.loader;
        if (h) [l] = await Promise.all([d(h), n]);
        else if (u === "action") {
          let v = new URL(e.url),
            g = v.pathname + v.search;
          throw he(405, { method: e.method, pathname: g, routeId: t.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (m) l = await d(m);
    else {
      let h = new URL(e.url),
        v = h.pathname + h.search;
      throw he(404, { pathname: v });
    }
  } catch (m) {
    return { type: "error", result: m };
  } finally {
    s && e.signal.removeEventListener("abort", s);
  }
  return l;
}
async function lo(e) {
  var n, a, o, l, s, i;
  let { result: t, type: r } = e;
  if (sr(t)) {
    let u;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (d) {
      return { type: "error", error: d };
    }
    return r === "error"
      ? {
          type: "error",
          error: new Me(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: "data", data: u, statusCode: t.status, headers: t.headers };
  }
  return r === "error"
    ? Zt(t)
      ? t.data instanceof Error
        ? {
            type: "error",
            error: t.data,
            statusCode: (n = t.init) == null ? void 0 : n.status,
            headers:
              (a = t.init) != null && a.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new Me(
              ((o = t.init) == null ? void 0 : o.status) || 500,
              void 0,
              t.data,
            ),
            statusCode: Ae(t) ? t.status : void 0,
            headers:
              (l = t.init) != null && l.headers
                ? new Headers(t.init.headers)
                : void 0,
          }
      : { type: "error", error: t, statusCode: Ae(t) ? t.status : void 0 }
    : Zt(t)
      ? {
          type: "data",
          data: t.data,
          statusCode: (s = t.init) == null ? void 0 : s.status,
          headers:
            (i = t.init) != null && i.headers
              ? new Headers(t.init.headers)
              : void 0,
        }
      : { type: "data", data: t };
}
function so(e, t, r, n, a) {
  let o = e.headers.get("Location");
  if (
    (U(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !lr.test(o))
  ) {
    let l = n.slice(0, n.findIndex((s) => s.route.id === r) + 1);
    (o = Kt(new URL(t.url), l, a, o)), e.headers.set("Location", o);
  }
  return e;
}
function Br(e, t, r) {
  if (lr.test(e)) {
    let n = e,
      a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
      o = ue(a.pathname, r) != null;
    if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
  }
  return e;
}
function ze(e, t, r, n) {
  let a = e.createURL(wa(t)).toString(),
    o = { signal: r };
  if (n && se(n.formMethod)) {
    let { formMethod: l, formEncType: s } = n;
    (o.method = l.toUpperCase()),
      s === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": s })),
          (o.body = JSON.stringify(n.json)))
        : s === "text/plain"
          ? (o.body = n.text)
          : s === "application/x-www-form-urlencoded" && n.formData
            ? (o.body = Qt(n.formData))
            : (o.body = n.formData);
  }
  return new Request(a, o);
}
function Qt(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function Wr(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function uo(e, t, r, n = !1, a = !1) {
  let o = {},
    l = null,
    s,
    i = !1,
    u = {},
    d = r && le(r[1]) ? r[1].error : void 0;
  return (
    e.forEach((m) => {
      if (!(m.route.id in t)) return;
      let h = m.route.id,
        v = t[h];
      if (
        (U(!$e(v), "Cannot handle redirect results in processLoaderData"),
        le(v))
      ) {
        let g = v.error;
        if ((d !== void 0 && ((g = d), (d = void 0)), (l = l || {}), a))
          l[h] = g;
        else {
          let R = Fe(e, h);
          l[R.route.id] == null && (l[R.route.id] = g);
        }
        n || (o[h] = ha),
          i || ((i = !0), (s = Ae(v.error) ? v.error.status : 500)),
          v.headers && (u[h] = v.headers);
      } else
        (o[h] = v.data),
          v.statusCode && v.statusCode !== 200 && !i && (s = v.statusCode),
          v.headers && (u[h] = v.headers);
    }),
    d !== void 0 && r && ((l = { [r[0]]: d }), r[2] && (o[r[2]] = void 0)),
    { loaderData: o, errors: l, statusCode: s || 200, loaderHeaders: u }
  );
}
function Vr(e, t, r, n, a, o) {
  let { loaderData: l, errors: s } = uo(t, r, n);
  return (
    a
      .filter((i) => !i.matches || i.matches.some((u) => u.shouldLoad))
      .forEach((i) => {
        let { key: u, match: d, controller: m } = i,
          h = o[u];
        if (
          (U(h, "Did not find corresponding fetcher result"),
          !(m && m.signal.aborted))
        )
          if (le(h)) {
            let v = Fe(e.matches, d == null ? void 0 : d.route.id);
            (s && s[v.route.id]) || (s = { ...s, [v.route.id]: h.error }),
              e.fetchers.delete(u);
          } else if ($e(h)) U(!1, "Unhandled fetcher revalidation redirect");
          else {
            let v = Ce(h.data);
            e.fetchers.set(u, v);
          }
      }),
    { loaderData: l, errors: s }
  );
}
function Yr(e, t, r, n) {
  let a = Object.entries(t)
    .filter(([, o]) => o !== ha)
    .reduce((o, [l, s]) => ((o[l] = s), o), {});
  for (let o of r) {
    let l = o.route.id;
    if (
      (!t.hasOwnProperty(l) &&
        e.hasOwnProperty(l) &&
        o.route.loader &&
        (a[l] = e[l]),
      n && n.hasOwnProperty(l))
    )
      break;
  }
  return a;
}
function Jr(e) {
  return e
    ? le(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Fe(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function Gr(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((r) => r.index || !r.path || r.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function he(
  e,
  { pathname: t, routeId: r, method: n, type: a, message: o } = {},
) {
  let l = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((l = "Bad Request"),
        n && t && r
          ? (s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`)
          : a === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((l = "Forbidden"), (s = `Route "${r}" does not match URL "${t}"`))
        : e === 404
          ? ((l = "Not Found"), (s = `No route matches URL "${t}"`))
          : e === 405 &&
            ((l = "Method Not Allowed"),
            n && t && r
              ? (s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`)
              : n && (s = `Invalid request method "${n.toUpperCase()}"`)),
    new Me(e || 500, l, new Error(s), !0)
  );
}
function gt(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if ($e(a)) return { key: n, result: a };
  }
}
function wa(e) {
  let t = typeof e == "string" ? De(e) : e;
  return Pe({ ...t, hash: "" });
}
function co(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function fo(e) {
  return sr(e.result) && Kn.has(e.result.status);
}
function le(e) {
  return e.type === "error";
}
function $e(e) {
  return (e && e.type) === "redirect";
}
function Zt(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function sr(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function ho(e) {
  return Gn.has(e.toUpperCase());
}
function se(e) {
  return Yn.has(e.toUpperCase());
}
function ur(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ot(e, t) {
  let r = typeof t == "string" ? De(t).search : t.search;
  if (e[e.length - 1].route.index && ur(r || "")) return e[e.length - 1];
  let n = ca(e);
  return n[n.length - 1];
}
function Kr(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: o,
    json: l,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function Wt(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function mo(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function tt(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function po(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Ce(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function yo(e, t) {
  try {
    let r = e.sessionStorage.getItem(fa);
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {}
}
function vo(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t) r[n] = [...a];
    try {
      e.sessionStorage.setItem(fa, JSON.stringify(r));
    } catch (n) {
      K(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`,
      );
    }
  }
}
function go() {
  let e,
    t,
    r = new Promise((n, a) => {
      (e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var je = c.createContext(null);
je.displayName = "DataRouter";
var We = c.createContext(null);
We.displayName = "DataRouterState";
var cr = c.createContext({ isTransitioning: !1 });
cr.displayName = "ViewTransition";
var Ea = c.createContext(new Map());
Ea.displayName = "Fetchers";
var wo = c.createContext(null);
wo.displayName = "Await";
var me = c.createContext(null);
me.displayName = "Navigation";
var kt = c.createContext(null);
kt.displayName = "Location";
var ve = c.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ve.displayName = "Route";
var dr = c.createContext(null);
dr.displayName = "RouteError";
function Eo(e, { relative: t } = {}) {
  U(st(), "useHref() may be used only in the context of a <Router> component.");
  let { basename: r, navigator: n } = c.useContext(me),
    { hash: a, pathname: o, search: l } = ut(e, { relative: t }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : Ee([r, o])),
    n.createHref({ pathname: s, search: l, hash: a })
  );
}
function st() {
  return c.useContext(kt) != null;
}
function be() {
  return (
    U(
      st(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    c.useContext(kt).location
  );
}
var ba =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ra(e) {
  c.useContext(me).static || c.useLayoutEffect(e);
}
function bo() {
  let { isDataRoute: e } = c.useContext(ve);
  return e ? Io() : Ro();
}
function Ro() {
  U(
    st(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let e = c.useContext(je),
    { basename: t, navigator: r } = c.useContext(me),
    { matches: n } = c.useContext(ve),
    { pathname: a } = be(),
    o = JSON.stringify(or(n)),
    l = c.useRef(!1);
  return (
    Ra(() => {
      l.current = !0;
    }),
    c.useCallback(
      (i, u = {}) => {
        if ((K(l.current, ba), !l.current)) return;
        if (typeof i == "number") {
          r.go(i);
          return;
        }
        let d = ir(i, JSON.parse(o), a, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ee([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, o, a, e],
    )
  );
}
var Sa = c.createContext(null);
function Rl() {
  return c.useContext(Sa);
}
function So(e) {
  let t = c.useContext(ve).outlet;
  return t && c.createElement(Sa.Provider, { value: e }, t);
}
function Sl() {
  let { matches: e } = c.useContext(ve),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ut(e, { relative: t } = {}) {
  let { matches: r } = c.useContext(ve),
    { pathname: n } = be(),
    a = JSON.stringify(or(r));
  return c.useMemo(() => ir(e, JSON.parse(a), n, t === "path"), [e, a, n, t]);
}
function xo(e, t, r, n) {
  U(
    st(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: a, static: o } = c.useContext(me),
    { matches: l } = c.useContext(ve),
    s = l[l.length - 1],
    i = s ? s.params : {},
    u = s ? s.pathname : "/",
    d = s ? s.pathnameBase : "/",
    m = s && s.route;
  {
    let L = (m && m.path) || "";
    Pa(
      u,
      !m || L.endsWith("*") || L.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`,
    );
  }
  let h = be(),
    v;
  v = h;
  let g = v.pathname || "/",
    R = g;
  if (d !== "/") {
    let L = d.replace(/^\//, "").split("/");
    R = "/" + g.replace(/^\//, "").split("/").slice(L.length).join("/");
  }
  let E =
    !o && r && r.matches && r.matches.length > 0
      ? r.matches
      : we(e, { pathname: R });
  return (
    K(
      m || E != null,
      `No routes matched location "${v.pathname}${v.search}${v.hash}" `,
    ),
    K(
      E == null ||
        E[E.length - 1].route.element !== void 0 ||
        E[E.length - 1].route.Component !== void 0 ||
        E[E.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    Do(
      E &&
        E.map((L) =>
          Object.assign({}, L, {
            params: Object.assign({}, i, L.params),
            pathname: Ee([
              d,
              a.encodeLocation
                ? a.encodeLocation(L.pathname).pathname
                : L.pathname,
            ]),
            pathnameBase:
              L.pathnameBase === "/"
                ? d
                : Ee([
                    d,
                    a.encodeLocation
                      ? a.encodeLocation(L.pathnameBase).pathname
                      : L.pathnameBase,
                  ]),
          }),
        ),
      l,
      r,
      n,
    )
  );
}
function Lo() {
  let e = Ca(),
    t = Ae(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    a = { padding: "0.5rem", backgroundColor: n },
    o = { padding: "2px 4px", backgroundColor: n },
    l = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", e),
    (l = c.createElement(
      c.Fragment,
      null,
      c.createElement("p", null, "💿 Hey developer 👋"),
      c.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        c.createElement("code", { style: o }, "ErrorBoundary"),
        " or",
        " ",
        c.createElement("code", { style: o }, "errorElement"),
        " prop on your route.",
      ),
    )),
    c.createElement(
      c.Fragment,
      null,
      c.createElement("h2", null, "Unexpected Application Error!"),
      c.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? c.createElement("pre", { style: a }, r) : null,
      l,
    )
  );
}
var Co = c.createElement(Lo, null),
  Po = class extends c.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== "idle" && e.revalidation === "idle")
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t,
      );
    }
    render() {
      return this.state.error !== void 0
        ? c.createElement(
            ve.Provider,
            { value: this.props.routeContext },
            c.createElement(dr.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Mo({ routeContext: e, match: t, children: r }) {
  let n = c.useContext(je);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    c.createElement(ve.Provider, { value: e }, r)
  );
}
function Do(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let a = e,
    o = r == null ? void 0 : r.errors;
  if (o != null) {
    let i = a.findIndex(
      (u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0,
    );
    U(
      i >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
    ),
      (a = a.slice(0, Math.min(a.length, i + 1)));
  }
  let l = !1,
    s = -1;
  if (r)
    for (let i = 0; i < a.length; i++) {
      let u = a[i];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (s = i),
        u.route.id)
      ) {
        let { loaderData: d, errors: m } = r,
          h =
            u.route.loader &&
            !d.hasOwnProperty(u.route.id) &&
            (!m || m[u.route.id] === void 0);
        if (u.route.lazy || h) {
          (l = !0), s >= 0 ? (a = a.slice(0, s + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((i, u, d) => {
    let m,
      h = !1,
      v = null,
      g = null;
    r &&
      ((m = o && u.route.id ? o[u.route.id] : void 0),
      (v = u.route.errorElement || Co),
      l &&
        (s < 0 && d === 0
          ? (Pa(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (h = !0),
            (g = null))
          : s === d &&
            ((h = !0), (g = u.route.hydrateFallbackElement || null))));
    let R = t.concat(a.slice(0, d + 1)),
      E = () => {
        let b;
        return (
          m
            ? (b = v)
            : h
              ? (b = g)
              : u.route.Component
                ? (b = c.createElement(u.route.Component, null))
                : u.route.element
                  ? (b = u.route.element)
                  : (b = i),
          c.createElement(Mo, {
            match: u,
            routeContext: { outlet: i, matches: R, isDataRoute: r != null },
            children: b,
          })
        );
      };
    return r && (u.route.ErrorBoundary || u.route.errorElement || d === 0)
      ? c.createElement(Po, {
          location: r.location,
          revalidation: r.revalidation,
          component: v,
          error: m,
          children: E(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function fr(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function xa(e) {
  let t = c.useContext(je);
  return U(t, fr(e)), t;
}
function Ve(e) {
  let t = c.useContext(We);
  return U(t, fr(e)), t;
}
function To(e) {
  let t = c.useContext(ve);
  return U(t, fr(e)), t;
}
function ct(e) {
  let t = To(e),
    r = t.matches[t.matches.length - 1];
  return (
    U(r.route.id, `${e} can only be used on routes that contain a unique "id"`),
    r.route.id
  );
}
function _o() {
  return ct("useRouteId");
}
function ko() {
  return Ve("useNavigation").navigation;
}
function xl() {
  let e = xa("useRevalidator"),
    t = Ve("useRevalidator"),
    r = c.useCallback(async () => {
      await e.router.revalidate();
    }, [e.router]);
  return c.useMemo(
    () => ({ revalidate: r, state: t.revalidation }),
    [r, t.revalidation],
  );
}
function La() {
  let { matches: e, loaderData: t } = Ve("useMatches");
  return c.useMemo(() => e.map((r) => ia(r, t)), [e, t]);
}
function Ll() {
  let e = Ve("useLoaderData"),
    t = ct("useLoaderData");
  return e.loaderData[t];
}
function Cl() {
  let e = Ve("useActionData"),
    t = ct("useLoaderData");
  return e.actionData ? e.actionData[t] : void 0;
}
function Ca() {
  var n;
  let e = c.useContext(dr),
    t = Ve("useRouteError"),
    r = ct("useRouteError");
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function Io() {
  let { router: e } = xa("useNavigate"),
    t = ct("useNavigate"),
    r = c.useRef(!1);
  return (
    Ra(() => {
      r.current = !0;
    }),
    c.useCallback(
      async (a, o = {}) => {
        K(r.current, ba),
          r.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : await e.navigate(a, { fromRouteId: t, ...o }));
      },
      [e, t],
    )
  );
}
var Xr = {};
function Pa(e, t, r) {
  !t && !Xr[e] && ((Xr[e] = !0), K(!1, r));
}
var qr = {};
function Qr(e, t) {
  !e && !qr[t] && ((qr[t] = !0), console.warn(t));
}
function Oo(e) {
  let t = {
    hasErrorBoundary:
      e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      (e.element &&
        K(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(t, {
        element: c.createElement(e.Component),
        Component: void 0,
      })),
    e.HydrateFallback &&
      (e.hydrateFallbackElement &&
        K(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(t, {
        hydrateFallbackElement: c.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      })),
    e.ErrorBoundary &&
      (e.errorElement &&
        K(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(t, {
        errorElement: c.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    t
  );
}
var No = ["HydrateFallback", "hydrateFallbackElement"],
  Fo = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((e, t) => {
          (this.resolve = (r) => {
            this.status === "pending" && ((this.status = "resolved"), e(r));
          }),
            (this.reject = (r) => {
              this.status === "pending" && ((this.status = "rejected"), t(r));
            });
        }));
    }
  };
function $o({ router: e, flushSync: t }) {
  let [r, n] = c.useState(e.state),
    [a, o] = c.useState(),
    [l, s] = c.useState({ isTransitioning: !1 }),
    [i, u] = c.useState(),
    [d, m] = c.useState(),
    [h, v] = c.useState(),
    g = c.useRef(new Map()),
    R = c.useCallback(
      (D, { deletedFetchers: P, flushSync: x, viewTransitionOpts: p }) => {
        D.fetchers.forEach((j, $) => {
          j.data !== void 0 && g.current.set($, j.data);
        }),
          P.forEach((j) => g.current.delete(j)),
          Qr(
            x === !1 || t != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          );
        let _ =
          e.window != null &&
          e.window.document != null &&
          typeof e.window.document.startViewTransition == "function";
        if (
          (Qr(
            p == null || _,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !p || !_)
        ) {
          t && x ? t(() => n(D)) : c.startTransition(() => n(D));
          return;
        }
        if (t && x) {
          t(() => {
            d && (i && i.resolve(), d.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: p.currentLocation,
                nextLocation: p.nextLocation,
              });
          });
          let j = e.window.document.startViewTransition(() => {
            t(() => n(D));
          });
          j.finished.finally(() => {
            t(() => {
              u(void 0), m(void 0), o(void 0), s({ isTransitioning: !1 });
            });
          }),
            t(() => m(j));
          return;
        }
        d
          ? (i && i.resolve(),
            d.skipTransition(),
            v({
              state: D,
              currentLocation: p.currentLocation,
              nextLocation: p.nextLocation,
            }))
          : (o(D),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: p.currentLocation,
              nextLocation: p.nextLocation,
            }));
      },
      [e.window, t, d, i],
    );
  c.useLayoutEffect(() => e.subscribe(R), [e, R]),
    c.useEffect(() => {
      l.isTransitioning && !l.flushSync && u(new Fo());
    }, [l]),
    c.useEffect(() => {
      if (i && a && e.window) {
        let D = a,
          P = i.promise,
          x = e.window.document.startViewTransition(async () => {
            c.startTransition(() => n(D)), await P;
          });
        x.finished.finally(() => {
          u(void 0), m(void 0), o(void 0), s({ isTransitioning: !1 });
        }),
          m(x);
      }
    }, [a, i, e.window]),
    c.useEffect(() => {
      i && a && r.location.key === a.location.key && i.resolve();
    }, [i, d, r.location, a]),
    c.useEffect(() => {
      !l.isTransitioning &&
        h &&
        (o(h.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: h.currentLocation,
          nextLocation: h.nextLocation,
        }),
        v(void 0));
    }, [l.isTransitioning, h]);
  let E = c.useMemo(
      () => ({
        createHref: e.createHref,
        encodeLocation: e.encodeLocation,
        go: (D) => e.navigate(D),
        push: (D, P, x) =>
          e.navigate(D, {
            state: P,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
        replace: (D, P, x) =>
          e.navigate(D, {
            replace: !0,
            state: P,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
      }),
      [e],
    ),
    b = e.basename || "/",
    L = c.useMemo(
      () => ({ router: e, navigator: E, static: !1, basename: b }),
      [e, E, b],
    );
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      je.Provider,
      { value: L },
      c.createElement(
        We.Provider,
        { value: r },
        c.createElement(
          Ea.Provider,
          { value: g.current },
          c.createElement(
            cr.Provider,
            { value: l },
            c.createElement(
              Ho,
              {
                basename: b,
                location: r.location,
                navigationType: r.historyAction,
                navigator: E,
              },
              c.createElement(Ao, {
                routes: e.routes,
                future: e.future,
                state: r,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var Ao = c.memo(jo);
function jo({ routes: e, future: t, state: r }) {
  return xo(e, void 0, r, t);
}
function Pl(e) {
  return So(e.context);
}
function Ho({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: n = "POP",
  navigator: a,
  static: o = !1,
}) {
  U(
    !st(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let l = e.replace(/^\/*/, "/"),
    s = c.useMemo(
      () => ({ basename: l, navigator: a, static: o, future: {} }),
      [l, a, o],
    );
  typeof r == "string" && (r = De(r));
  let {
      pathname: i = "/",
      search: u = "",
      hash: d = "",
      state: m = null,
      key: h = "default",
    } = r,
    v = c.useMemo(() => {
      let g = ue(i, l);
      return g == null
        ? null
        : {
            location: { pathname: g, search: u, hash: d, state: m, key: h },
            navigationType: n,
          };
    }, [l, i, u, d, m, h, n]);
  return (
    K(
      v != null,
      `<Router basename="${l}"> is not able to match the URL "${i}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    v == null
      ? null
      : c.createElement(
          me.Provider,
          { value: s },
          c.createElement(kt.Provider, { children: t, value: v }),
        )
  );
}
var xt = "get",
  Lt = "application/x-www-form-urlencoded";
function It(e) {
  return e != null && typeof e.tagName == "string";
}
function Uo(e) {
  return It(e) && e.tagName.toLowerCase() === "button";
}
function zo(e) {
  return It(e) && e.tagName.toLowerCase() === "form";
}
function Bo(e) {
  return It(e) && e.tagName.toLowerCase() === "input";
}
function Wo(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vo(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Wo(e);
}
var wt = null;
function Yo() {
  if (wt === null)
    try {
      new FormData(document.createElement("form"), 0), (wt = !1);
    } catch {
      wt = !0;
    }
  return wt;
}
var Jo = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Vt(e) {
  return e != null && !Jo.has(e)
    ? (K(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lt}"`,
      ),
      null)
    : e;
}
function Go(e, t) {
  let r, n, a, o, l;
  if (zo(e)) {
    let s = e.getAttribute("action");
    (n = s ? ue(s, t) : null),
      (r = e.getAttribute("method") || xt),
      (a = Vt(e.getAttribute("enctype")) || Lt),
      (o = new FormData(e));
  } else if (Uo(e) || (Bo(e) && (e.type === "submit" || e.type === "image"))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let i = e.getAttribute("formaction") || s.getAttribute("action");
    if (
      ((n = i ? ue(i, t) : null),
      (r = e.getAttribute("formmethod") || s.getAttribute("method") || xt),
      (a =
        Vt(e.getAttribute("formenctype")) ||
        Vt(s.getAttribute("enctype")) ||
        Lt),
      (o = new FormData(s, e)),
      !Yo())
    ) {
      let { name: u, type: d, value: m } = e;
      if (d === "image") {
        let h = u ? `${u}.` : "";
        o.append(`${h}x`, "0"), o.append(`${h}y`, "0");
      } else u && o.append(u, m);
    }
  } else {
    if (It(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (r = xt), (n = null), (a = Lt), (l = e);
  }
  return (
    o && a === "text/plain" && ((l = o), (o = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: o, body: l }
  );
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
async function Ma(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch (r) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(r),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ko(e, t, r) {
  let n = e
      .map((o) => {
        var i;
        let l = t[o.route.id],
          s = r.routes[o.route.id];
        return [
          s && s.css ? s.css.map((u) => ({ rel: "stylesheet", href: u })) : [],
          ((i = l == null ? void 0 : l.links) == null ? void 0 : i.call(l)) ||
            [],
        ];
      })
      .flat(2),
    a = mr(e, r);
  return ka(n, a);
}
function Da(e) {
  return e.css ? e.css.map((t) => ({ rel: "stylesheet", href: t })) : [];
}
async function Xo(e) {
  if (!e.css) return;
  let t = Da(e);
  await Promise.all(t.map(_a));
}
async function Ta(e, t) {
  if ((!e.css && !t.links) || !ti()) return;
  let r = [];
  if (
    (e.css && r.push(...Da(e)), t.links && r.push(...t.links()), r.length === 0)
  )
    return;
  let n = [];
  for (let a of r)
    !hr(a) &&
      a.rel === "stylesheet" &&
      n.push({ ...a, rel: "preload", as: "style" });
  await Promise.all(n.map(_a));
}
async function _a(e) {
  return new Promise((t) => {
    if (
      (e.media && !window.matchMedia(e.media).matches) ||
      document.querySelector(`link[rel="stylesheet"][href="${e.href}"]`)
    )
      return t();
    let r = document.createElement("link");
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    (r.onload = () => {
      n(), t();
    }),
      (r.onerror = () => {
        n(), t();
      }),
      document.head.appendChild(r);
  });
}
function hr(e) {
  return e != null && typeof e.page == "string";
}
function qo(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        typeof e.imageSrcSet == "string" &&
        typeof e.imageSizes == "string"
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function Qo(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let l = await Ma(o, r);
        return l.links ? l.links() : [];
      }
      return [];
    }),
  );
  return ka(
    n
      .flat(1)
      .filter(qo)
      .filter((a) => a.rel === "stylesheet" || a.rel === "preload")
      .map((a) =>
        a.rel === "stylesheet"
          ? { ...a, rel: "prefetch", as: "style" }
          : { ...a, rel: "prefetch" },
      ),
  );
}
function Zr(e, t, r, n, a, o) {
  let l = (i, u) => (r[u] ? i.route.id !== r[u].route.id : !0),
    s = (i, u) => {
      var d;
      return (
        r[u].pathname !== i.pathname ||
        (((d = r[u].route.path) == null ? void 0 : d.endsWith("*")) &&
          r[u].params["*"] !== i.params["*"])
      );
    };
  return o === "assets"
    ? t.filter((i, u) => l(i, u) || s(i, u))
    : o === "data"
      ? t.filter((i, u) => {
          var m;
          let d = n.routes[i.route.id];
          if (!d || !d.hasLoader) return !1;
          if (l(i, u) || s(i, u)) return !0;
          if (i.route.shouldRevalidate) {
            let h = i.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin,
              ),
              currentParams: ((m = r[0]) == null ? void 0 : m.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: i.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof h == "boolean") return h;
          }
          return !0;
        })
      : [];
}
function mr(e, t, { includeHydrateFallback: r } = {}) {
  return Zo(
    e
      .map((n) => {
        let a = t.routes[n.route.id];
        if (!a) return [];
        let o = [a.module];
        return (
          a.clientActionModule && (o = o.concat(a.clientActionModule)),
          a.clientLoaderModule && (o = o.concat(a.clientLoaderModule)),
          r &&
            a.hydrateFallbackModule &&
            (o = o.concat(a.hydrateFallbackModule)),
          a.imports && (o = o.concat(a.imports)),
          o
        );
      })
      .flat(1),
  );
}
function Zo(e) {
  return [...new Set(e)];
}
function ei(e) {
  let t = {},
    r = Object.keys(e).sort();
  for (let n of r) t[n] = e[n];
  return t;
}
function ka(e, t) {
  let r = new Set(),
    n = new Set(t);
  return e.reduce((a, o) => {
    if (t && !hr(o) && o.as === "script" && o.href && n.has(o.href)) return a;
    let s = JSON.stringify(ei(o));
    return r.has(s) || (r.add(s), a.push({ key: s, link: o })), a;
  }, []);
}
var Et;
function ti() {
  if (Et !== void 0) return Et;
  let e = document.createElement("link");
  return (Et = e.relList.supports("preload")), (e = null), Et;
}
function ea(e) {
  return { __html: e };
}
var ri = -1,
  ai = -2,
  ni = -3,
  oi = -4,
  ii = -5,
  li = -6,
  si = -7,
  ui = "B",
  ci = "D",
  Ia = "E",
  di = "M",
  fi = "N",
  Oa = "P",
  hi = "R",
  mi = "S",
  pi = "Y",
  yi = "U",
  vi = "Z",
  Na = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function gi() {
  const e = new TextDecoder();
  let t = "";
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }),
        o = (t + a).split(`
`);
      t = o.pop() || "";
      for (const l of o) n.enqueue(l);
    },
    flush(r) {
      t && r.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Yt =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function er(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == "number") return ta.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e) r.push(a);
  return (t.length = r.length), ta.call(this, n);
}
function ta(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let o;
  const l = [
    [
      e,
      (i) => {
        o = i;
      },
    ],
  ];
  let s = [];
  for (; l.length > 0; ) {
    const [i, u] = l.pop();
    switch (i) {
      case si:
        u(void 0);
        continue;
      case ii:
        u(null);
        continue;
      case ai:
        u(NaN);
        continue;
      case li:
        u(1 / 0);
        continue;
      case ni:
        u(-1 / 0);
        continue;
      case oi:
        u(-0);
        continue;
    }
    if (t[i]) {
      u(t[i]);
      continue;
    }
    const d = r[i];
    if (!d || typeof d != "object") {
      (t[i] = d), u(d);
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == "string") {
        const [m, h, v] = d;
        switch (m) {
          case ci:
            u((t[i] = new Date(h)));
            continue;
          case yi:
            u((t[i] = new URL(h)));
            continue;
          case ui:
            u((t[i] = BigInt(h)));
            continue;
          case hi:
            u((t[i] = new RegExp(h, v)));
            continue;
          case pi:
            u((t[i] = Symbol.for(h)));
            continue;
          case mi:
            const g = new Set();
            t[i] = g;
            for (let P = d.length - 1; P > 0; P--)
              l.push([
                d[P],
                (x) => {
                  g.add(x);
                },
              ]);
            u(g);
            continue;
          case di:
            const R = new Map();
            t[i] = R;
            for (let P = d.length - 2; P > 0; P -= 2) {
              const x = [];
              l.push([
                d[P + 1],
                (p) => {
                  x[1] = p;
                },
              ]),
                l.push([
                  d[P],
                  (p) => {
                    x[0] = p;
                  },
                ]),
                s.push(() => {
                  R.set(x[0], x[1]);
                });
            }
            u(R);
            continue;
          case fi:
            const E = Object.create(null);
            t[i] = E;
            for (const P of Object.keys(h).reverse()) {
              const x = [];
              l.push([
                h[P],
                (p) => {
                  x[1] = p;
                },
              ]),
                l.push([
                  Number(P.slice(1)),
                  (p) => {
                    x[0] = p;
                  },
                ]),
                s.push(() => {
                  E[x[0]] = x[1];
                });
            }
            u(E);
            continue;
          case Oa:
            if (t[h]) u((t[i] = t[h]));
            else {
              const P = new Na();
              (n[h] = P), u((t[i] = P.promise));
            }
            continue;
          case Ia:
            const [, b, L] = d;
            let D = L && Yt && Yt[L] ? new Yt[L](b) : new Error(b);
            (t[i] = D), u(D);
            continue;
          case vi:
            u((t[i] = t[h]));
            continue;
          default:
            if (Array.isArray(a)) {
              const P = [],
                x = d.slice(1);
              for (let p = 0; p < x.length; p++) {
                const _ = x[p];
                l.push([
                  _,
                  (j) => {
                    P[p] = j;
                  },
                ]);
              }
              s.push(() => {
                for (const p of a) {
                  const _ = p(d[0], ...P);
                  if (_) {
                    u((t[i] = _.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const m = [];
        t[i] = m;
        for (let h = 0; h < d.length; h++) {
          const v = d[h];
          v !== ri &&
            l.push([
              v,
              (g) => {
                m[h] = g;
              },
            ]);
        }
        u(m);
        continue;
      }
    else {
      const m = {};
      t[i] = m;
      for (const h of Object.keys(d).reverse()) {
        const v = [];
        l.push([
          d[h],
          (g) => {
            v[1] = g;
          },
        ]),
          l.push([
            Number(h.slice(1)),
            (g) => {
              v[0] = g;
            },
          ]),
          s.push(() => {
            m[v[0]] = v[1];
          });
      }
      u(m);
      continue;
    }
  }
  for (; s.length > 0; ) s.pop()();
  return o;
}
async function wi(e, t) {
  const { plugins: r } = t ?? {},
    n = new Na(),
    a = e.pipeThrough(gi()).getReader(),
    o = { values: [], hydrated: [], deferred: {}, plugins: r },
    l = await Ei.call(o, a);
  let s = n.promise;
  return (
    l.done
      ? n.resolve()
      : (s = bi
          .call(o, a)
          .then(n.resolve)
          .catch((i) => {
            for (const u of Object.values(o.deferred)) u.reject(i);
            n.reject(i);
          })),
    { done: s.then(() => a.closed), value: l.value }
  );
}
async function Ei(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return { done: t.done, value: er.call(this, r) };
}
async function bi(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case Oa: {
        const n = r.indexOf(":"),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const l = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(l);
        } catch {
          throw new SyntaxError();
        }
        const i = er.call(this, s);
        o.resolve(i);
        break;
      }
      case Ia: {
        const n = r.indexOf(":"),
          a = Number(r.slice(1, n)),
          o = this.deferred[a];
        if (!o) throw new Error(`Deferred ID ${a} not found in stream`);
        const l = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(l);
        } catch {
          throw new SyntaxError();
        }
        const i = er.call(this, s);
        o.reject(i);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
async function Ri(e) {
  let t = { signal: e.signal };
  if (e.method !== "GET") {
    t.method = e.method;
    let r = e.headers.get("Content-Type");
    r && /\bapplication\/json\b/.test(r)
      ? ((t.headers = { "Content-Type": r }),
        (t.body = JSON.stringify(await e.json())))
      : r && /\btext\/plain\b/.test(r)
        ? ((t.headers = { "Content-Type": r }), (t.body = await e.text()))
        : r && /\bapplication\/x-www-form-urlencoded\b/.test(r)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
var tr = Symbol("SingleFetchRedirect"),
  Fa = class extends Error {},
  Si = 202,
  $a = new Set([100, 101, 204, 205]);
function xi(e, t, r, n, a) {
  let o = Li(
    e,
    (l) => {
      let s = t.routes[l.route.id];
      ae(s, "Route not found in manifest");
      let i = r[l.route.id];
      return {
        hasLoader: s.hasLoader,
        hasClientLoader: s.hasClientLoader,
        hasShouldRevalidate: !!(i != null && i.shouldRevalidate),
      };
    },
    ki,
    n,
    a,
  );
  return async (l) => l.unstable_runClientMiddleware(o);
}
function Li(e, t, r, n, a) {
  return async (o) => {
    let { request: l, matches: s, fetcherKey: i } = o,
      u = e();
    if (l.method !== "GET") return Ci(o, r, a);
    let d = s.some((m) => {
      let { hasLoader: h, hasClientLoader: v } = t(m);
      return m.unstable_shouldCallHandler() && h && !v;
    });
    return !n && !d ? Pi(o, t, r, a) : i ? Ti(o, r, a) : Mi(o, u, t, r, n, a);
  };
}
async function Ci(e, t, r) {
  let n = e.matches.find((l) => l.unstable_shouldCallHandler());
  ae(n, "No action match found");
  let a,
    o = await n.resolve(
      async (l) =>
        await l(async () => {
          let { data: i, status: u } = await t(e, r, [n.route.id]);
          return (a = u), lt(i, n.route.id);
        }),
    );
  return sr(o.result) || Ae(o.result) || Zt(o.result)
    ? { [n.route.id]: o }
    : { [n.route.id]: { type: o.type, result: Wn(o.result, a) } };
}
async function Pi(e, t, r, n) {
  let a = e.matches.filter((l) => l.unstable_shouldCallHandler()),
    o = {};
  return (
    await Promise.all(
      a.map((l) =>
        l.resolve(async (s) => {
          try {
            let { hasClientLoader: i } = t(l),
              u = l.route.id,
              d = i
                ? await s(async () => {
                    let { data: m } = await r(e, n, [u]);
                    return lt(m, u);
                  })
                : await s();
            o[l.route.id] = { type: "data", result: d };
          } catch (i) {
            o[l.route.id] = { type: "error", result: i };
          }
        }),
      ),
    ),
    o
  );
}
async function Mi(e, t, r, n, a, o) {
  let l = new Set(),
    s = !1,
    i = e.matches.map(() => ra()),
    u = ra(),
    d = {},
    m = Promise.all(
      e.matches.map(async (v, g) =>
        v.resolve(async (R) => {
          i[g].resolve();
          let E = v.route.id,
            { hasLoader: b, hasClientLoader: L, hasShouldRevalidate: D } = r(v),
            P =
              !v.unstable_shouldRevalidateArgs ||
              v.unstable_shouldRevalidateArgs.actionStatus == null ||
              v.unstable_shouldRevalidateArgs.actionStatus < 400;
          if (!v.unstable_shouldCallHandler(P)) {
            s || (s = v.unstable_shouldRevalidateArgs != null && b && D === !0);
            return;
          }
          if (L) {
            b && (s = !0);
            try {
              let p = await R(async () => {
                let { data: _ } = await n(e, o, [E]);
                return lt(_, E);
              });
              d[E] = { type: "data", result: p };
            } catch (p) {
              d[E] = { type: "error", result: p };
            }
            return;
          }
          b && l.add(E);
          try {
            let p = await R(async () => {
              let _ = await u.promise;
              return lt(_, E);
            });
            d[E] = { type: "data", result: p };
          } catch (p) {
            d[E] = { type: "error", result: p };
          }
        }),
      ),
    );
  if (
    (await Promise.all(i.map((v) => v.promise)),
    ((!t.state.initialized && t.state.navigation.state === "idle") ||
      l.size === 0) &&
      !window.__reactRouterHdrActive)
  )
    u.resolve({ routes: {} });
  else {
    let v = a && s && l.size > 0 ? [...l.keys()] : void 0;
    try {
      let g = await n(e, o, v);
      u.resolve(g.data);
    } catch (g) {
      u.reject(g);
    }
  }
  return await m, await Di(u.promise, e.matches, l, d), d;
}
async function Di(e, t, r, n) {
  try {
    let a,
      o = await e;
    if ("routes" in o) {
      for (let l of t)
        if (l.route.id in o.routes) {
          let s = o.routes[l.route.id];
          if ("error" in s) {
            a = s.error;
            break;
          }
        }
    }
    a !== void 0 &&
      Array.from(r.values()).forEach((l) => {
        n[l].result instanceof Fa && (n[l].result = a);
      });
  } catch {}
}
async function Ti(e, t, r) {
  let n = e.matches.find((l) => l.unstable_shouldCallHandler());
  ae(n, "No fetcher match found");
  let a = n.route.id,
    o = await n.resolve(async (l) =>
      l(async () => {
        let { data: s } = await t(e, r, [a]);
        return lt(s, a);
      }),
    );
  return { [n.route.id]: o };
}
function _i(e) {
  let t = e.searchParams.getAll("index");
  e.searchParams.delete("index");
  let r = [];
  for (let n of t) n && r.push(n);
  for (let n of r) e.searchParams.append("index", n);
  return e;
}
function Aa(e, t) {
  let r =
    typeof e == "string"
      ? new URL(
          e,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : e;
  return (
    r.pathname === "/"
      ? (r.pathname = "_root.data")
      : t && ue(r.pathname, t) === "/"
        ? (r.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (r.pathname = `${r.pathname.replace(/\/$/, "")}.data`),
    r
  );
}
async function ki(e, t, r) {
  let { request: n } = e,
    a = Aa(n.url, t);
  n.method === "GET" &&
    ((a = _i(a)), r && a.searchParams.set("_routes", r.join(",")));
  let o = await fetch(a, await Ri(n));
  if (o.status === 404 && !o.headers.has("X-Remix-Response"))
    throw new Me(404, "Not Found", !0);
  if (o.status === 204 && o.headers.has("X-Remix-Redirect"))
    return {
      status: Si,
      data: {
        redirect: {
          redirect: o.headers.get("X-Remix-Redirect"),
          status: Number(o.headers.get("X-Remix-Status") || "302"),
          revalidate: o.headers.get("X-Remix-Revalidate") === "true",
          reload: o.headers.get("X-Remix-Reload-Document") === "true",
          replace: o.headers.get("X-Remix-Replace") === "true",
        },
      },
    };
  if ($a.has(o.status)) {
    let l = {};
    return (
      r && n.method !== "GET" && (l[r[0]] = { data: void 0 }),
      { status: o.status, data: { routes: l } }
    );
  }
  ae(o.body, "No response body to decode");
  try {
    let l = await ja(o.body, window),
      s;
    if (n.method === "GET") {
      let i = l.value;
      tr in i ? (s = { redirect: i[tr] }) : (s = { routes: i });
    } else {
      let i = l.value,
        u = r == null ? void 0 : r[0];
      ae(u, "No routeId found for single fetch call decoding"),
        "redirect" in i ? (s = { redirect: i }) : (s = { routes: { [u]: i } });
    }
    return { status: o.status, data: s };
  } catch {
    throw new Error("Unable to decode turbo-stream response");
  }
}
function ja(e, t) {
  return wi(e, {
    plugins: [
      (r, ...n) => {
        if (r === "SanitizedError") {
          let [a, o, l] = n,
            s = Error;
          a && a in t && typeof t[a] == "function" && (s = t[a]);
          let i = new s(o);
          return (i.stack = l), { value: i };
        }
        if (r === "ErrorResponse") {
          let [a, o, l] = n;
          return { value: new Me(o, l, a) };
        }
        if (r === "SingleFetchRedirect") return { value: { [tr]: n[0] } };
        if (r === "SingleFetchClassInstance") return { value: n[0] };
        if (r === "SingleFetchFallback") return { value: void 0 };
      },
    ],
  });
}
function lt(e, t) {
  if ("redirect" in e) {
    let {
      redirect: n,
      revalidate: a,
      reload: o,
      replace: l,
      status: s,
    } = e.redirect;
    throw Vn(n, {
      status: s,
      headers: {
        ...(a ? { "X-Remix-Revalidate": "yes" } : null),
        ...(o ? { "X-Remix-Reload-Document": "yes" } : null),
        ...(l ? { "X-Remix-Replace": "yes" } : null),
      },
    });
  }
  let r = e.routes[t];
  if (r == null) throw new Fa(`No result found for routeId "${t}"`);
  if ("error" in r) throw r.error;
  if ("data" in r) return r.data;
  throw new Error(`Invalid response found for routeId "${t}"`);
}
function ra() {
  let e,
    t,
    r = new Promise((n, a) => {
      (e = async (o) => {
        n(o);
        try {
          await r;
        } catch {}
      }),
        (t = async (o) => {
          a(o);
          try {
            await r;
          } catch {}
        });
    });
  return { promise: r, resolve: e, reject: t };
}
var Ii = class extends c.Component {
  constructor(e) {
    super(e), (this.state = { error: e.error || null, location: e.location });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location
      ? { error: e.error || null, location: e.location }
      : { error: e.error || t.error, location: t.location };
  }
  render() {
    return this.state.error
      ? c.createElement(Ha, { error: this.state.error, isOutsideRemixApp: !0 })
      : this.props.children;
  }
};
function Ha({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let r = c.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `,
    },
  });
  if (Ae(e))
    return c.createElement(
      rr,
      { title: "Unhandled Thrown Response!" },
      c.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        e.status,
        " ",
        e.statusText,
      ),
      r,
    );
  let n;
  if (e instanceof Error) n = e;
  else {
    let a =
      e == null
        ? "Unknown Error"
        : typeof e == "object" && "toString" in e
          ? e.toString()
          : JSON.stringify(e);
    n = new Error(a);
  }
  return c.createElement(
    rr,
    { title: "Application Error!", isOutsideRemixApp: t },
    c.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    c.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto",
        },
      },
      n.stack,
    ),
    r,
  );
}
function rr({ title: e, renderScripts: t, isOutsideRemixApp: r, children: n }) {
  var o;
  let { routeModules: a } = Ye();
  return (o = a.root) != null && o.Layout && !r
    ? n
    : c.createElement(
        "html",
        { lang: "en" },
        c.createElement(
          "head",
          null,
          c.createElement("meta", { charSet: "utf-8" }),
          c.createElement("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,viewport-fit=cover",
          }),
          c.createElement("title", null, e),
        ),
        c.createElement(
          "body",
          null,
          c.createElement(
            "main",
            { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
            n,
            t ? c.createElement(qi, null) : null,
          ),
        ),
      );
}
function Oi() {
  return c.createElement(
    rr,
    { title: "Loading...", renderScripts: !0 },
    c.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `,
      },
    }),
  );
}
function Ua(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      if (r) {
        let n = r.parentId || "";
        t[n] || (t[n] = []), t[n].push(r);
      }
    }),
    t
  );
}
function Ni(e, t, r) {
  let n = za(t),
    a =
      t.HydrateFallback && (!r || e.id === "root")
        ? t.HydrateFallback
        : e.id === "root"
          ? Oi
          : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === "root"
        ? () => c.createElement(Ha, { error: Ca() })
        : void 0;
  return e.id === "root" && t.Layout
    ? {
        ...(n
          ? {
              element: c.createElement(
                t.Layout,
                null,
                c.createElement(n, null),
              ),
            }
          : { Component: n }),
        ...(o
          ? {
              errorElement: c.createElement(
                t.Layout,
                null,
                c.createElement(o, null),
              ),
            }
          : { ErrorBoundary: o }),
        ...(a
          ? {
              hydrateFallbackElement: c.createElement(
                t.Layout,
                null,
                c.createElement(a, null),
              ),
            }
          : { HydrateFallback: a }),
      }
    : { Component: n, ErrorBoundary: o, HydrateFallback: a };
}
function Fi(e, t, r, n, a, o) {
  return Ot(t, r, n, a, o, "", Ua(t), e);
}
function bt(e, t) {
  if ((e === "loader" && !t.hasLoader) || (e === "action" && !t.hasAction)) {
    let n = `You are trying to call ${e === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw (console.error(n), new Me(400, "Bad Request", new Error(n), !0));
  }
}
function Jt(e, t) {
  let r = e === "clientAction" ? "a" : "an",
    n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw (console.error(n), new Me(405, "Method Not Allowed", new Error(n), !0));
}
function Ot(e, t, r, n, a, o = "", l = Ua(e), s) {
  return (l[o] || []).map((i) => {
    var L, D, P;
    let u = t[i.id];
    function d(x) {
      return (
        ae(
          typeof x == "function",
          "No single fetch function available for route handler",
        ),
        x()
      );
    }
    function m(x) {
      return i.hasLoader ? d(x) : Promise.resolve(null);
    }
    function h(x) {
      if (!i.hasAction) throw Jt("action", i.id);
      return d(x);
    }
    function v(x) {
      import(x);
    }
    function g(x) {
      x.clientActionModule && v(x.clientActionModule),
        x.clientLoaderModule && v(x.clientLoaderModule);
    }
    async function R(x) {
      let p = t[i.id],
        _ = p ? Ta(i, p) : Promise.resolve();
      try {
        return x();
      } finally {
        await _;
      }
    }
    let E = { id: i.id, index: i.index, path: i.path };
    if (u) {
      Object.assign(E, {
        ...E,
        ...Ni(i, u, a),
        unstable_middleware: u.unstable_clientMiddleware,
        handle: u.handle,
        shouldRevalidate: aa(E.path, u, i, n, s),
      });
      let x = r && r.loaderData && i.id in r.loaderData,
        p = x
          ? (L = r == null ? void 0 : r.loaderData) == null
            ? void 0
            : L[i.id]
          : void 0,
        _ = r && r.errors && i.id in r.errors,
        j = _
          ? (D = r == null ? void 0 : r.errors) == null
            ? void 0
            : D[i.id]
          : void 0,
        $ =
          s == null &&
          (((P = u.clientLoader) == null ? void 0 : P.hydrate) === !0 ||
            !i.hasLoader);
      (E.loader = async ({ request: Y, params: X, context: ne }, B) => {
        try {
          return await R(
            async () => (
              ae(u, "No `routeModule` available for critical-route loader"),
              u.clientLoader
                ? u.clientLoader({
                    request: Y,
                    params: X,
                    context: ne,
                    async serverLoader() {
                      if ((bt("loader", i), $)) {
                        if (x) return p;
                        if (_) throw j;
                      }
                      return m(B);
                    },
                  })
                : m(B)
            ),
          );
        } finally {
          $ = !1;
        }
      }),
        (E.loader.hydrate = Ba(i.id, u.clientLoader, i.hasLoader, a)),
        (E.action = ({ request: Y, params: X, context: ne }, B) =>
          R(async () => {
            if (
              (ae(u, "No `routeModule` available for critical-route action"),
              !u.clientAction)
            ) {
              if (a) throw Jt("clientAction", i.id);
              return h(B);
            }
            return u.clientAction({
              request: Y,
              params: X,
              context: ne,
              async serverAction() {
                return bt("action", i), h(B);
              },
            });
          }));
    } else {
      i.hasClientLoader || (E.loader = (_, j) => R(() => m(j))),
        i.hasClientAction ||
          (E.action = (_, j) =>
            R(() => {
              if (a) throw Jt("clientAction", i.id);
              return h(j);
            }));
      let x;
      async function p() {
        return x
          ? await x
          : ((x = (async () => {
              (i.clientLoaderModule || i.clientActionModule) &&
                (await new Promise((j) => setTimeout(j, 0)));
              let _ = Ai(i, t);
              return g(i), await _;
            })()),
            await x);
      }
      E.lazy = {
        loader: i.hasClientLoader
          ? async () => {
              let { clientLoader: _ } = i.clientLoaderModule
                ? await import(i.clientLoaderModule)
                : await p();
              return (
                ae(_, "No `clientLoader` export found"),
                (j, $) =>
                  _({
                    ...j,
                    async serverLoader() {
                      return bt("loader", i), m($);
                    },
                  })
              );
            }
          : void 0,
        action: i.hasClientAction
          ? async () => {
              let _ = i.clientActionModule ? import(i.clientActionModule) : p();
              g(i);
              let { clientAction: j } = await _;
              return (
                ae(j, "No `clientAction` export found"),
                ($, Y) =>
                  j({
                    ...$,
                    async serverAction() {
                      return bt("action", i), h(Y);
                    },
                  })
              );
            }
          : void 0,
        unstable_middleware: i.hasClientMiddleware
          ? async () => {
              let { unstable_clientMiddleware: _ } = i.clientMiddlewareModule
                ? await import(i.clientMiddlewareModule)
                : await p();
              return ae(_, "No `unstable_clientMiddleware` export found"), _;
            }
          : void 0,
        shouldRevalidate: async () => {
          let _ = await p();
          return aa(E.path, _, i, n, s);
        },
        handle: async () => (await p()).handle,
        Component: async () => (await p()).Component,
        ErrorBoundary: i.hasErrorBoundary
          ? async () => (await p()).ErrorBoundary
          : void 0,
      };
    }
    let b = Ot(e, t, r, n, a, i.id, l, s);
    return b.length > 0 && (E.children = b), E;
  });
}
function aa(e, t, r, n, a) {
  if (a) return $i(r.id, t.shouldRevalidate, a);
  if (!n && r.hasLoader && !r.hasClientLoader) {
    let o = e ? ua(e)[1].map((s) => s.paramName) : [];
    const l = (s) => o.some((i) => s.currentParams[i] !== s.nextParams[i]);
    if (t.shouldRevalidate) {
      let s = t.shouldRevalidate;
      return (i) => s({ ...i, defaultShouldRevalidate: l(i) });
    } else return (s) => l(s);
  }
  if (n && t.shouldRevalidate) {
    let o = t.shouldRevalidate;
    return (l) => o({ ...l, defaultShouldRevalidate: !0 });
  }
  return t.shouldRevalidate;
}
function $i(e, t, r) {
  let n = !1;
  return (a) =>
    n ? (t ? t(a) : a.defaultShouldRevalidate) : ((n = !0), r.has(e));
}
async function Ai(e, t) {
  let r = Ma(e, t),
    n = Xo(e),
    a = await r;
  return (
    await Promise.all([n, Ta(e, a)]),
    {
      Component: za(a),
      ErrorBoundary: a.ErrorBoundary,
      unstable_clientMiddleware: a.unstable_clientMiddleware,
      clientAction: a.clientAction,
      clientLoader: a.clientLoader,
      handle: a.handle,
      links: a.links,
      meta: a.meta,
      shouldRevalidate: a.shouldRevalidate,
    }
  );
}
function za(e) {
  if (e.default == null) return;
  if (!(typeof e.default == "object" && Object.keys(e.default).length === 0))
    return e.default;
}
function Ba(e, t, r, n) {
  return (n && e !== "root") || (t != null && (t.hydrate === !0 || r !== !0));
}
var Ct = new Set(),
  ji = 1e3,
  _t = new Set(),
  Hi = 7680;
function pr(e, t) {
  return e.mode === "lazy" && t === !0;
}
function Ui({ sri: e, ...t }, r) {
  let n = new Set(r.state.matches.map((s) => s.route.id)),
    a = r.state.location.pathname.split("/").filter(Boolean),
    o = ["/"];
  for (a.pop(); a.length > 0; ) o.push(`/${a.join("/")}`), a.pop();
  o.forEach((s) => {
    let i = we(r.routes, s, r.basename);
    i && i.forEach((u) => n.add(u.route.id));
  });
  let l = [...n].reduce((s, i) => Object.assign(s, { [i]: t.routes[i] }), {});
  return { ...t, routes: l, sri: e ? !0 : void 0 };
}
function zi(e, t, r, n, a, o) {
  if (pr(n, r))
    return async ({ path: l, patch: s, signal: i, fetcherKey: u }) => {
      _t.has(l) ||
        (await Wa(
          [l],
          u ? window.location.href : l,
          e,
          t,
          r,
          a,
          o,
          n.manifestPath,
          s,
          i,
        ));
    };
}
function Bi(e, t, r, n, a, o) {
  c.useEffect(() => {
    var d, m;
    if (
      !pr(a, n) ||
      ((m = (d = window.navigator) == null ? void 0 : d.connection) == null
        ? void 0
        : m.saveData) === !0
    )
      return;
    function l(h) {
      let v =
        h.tagName === "FORM"
          ? h.getAttribute("action")
          : h.getAttribute("href");
      if (!v) return;
      let g =
        h.tagName === "A"
          ? h.pathname
          : new URL(v, window.location.origin).pathname;
      _t.has(g) || Ct.add(g);
    }
    async function s() {
      document
        .querySelectorAll("a[data-discover], form[data-discover]")
        .forEach(l);
      let h = Array.from(Ct.keys()).filter((v) =>
        _t.has(v) ? (Ct.delete(v), !1) : !0,
      );
      if (h.length !== 0)
        try {
          await Wa(
            h,
            null,
            t,
            r,
            n,
            o,
            e.basename,
            a.manifestPath,
            e.patchRoutes,
          );
        } catch (v) {
          console.error("Failed to fetch manifest patches", v);
        }
    }
    let i = Yi(s, 100);
    s();
    let u = new MutationObserver(() => i());
    return (
      u.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ["data-discover", "href", "action"],
      }),
      () => u.disconnect()
    );
  }, [n, o, t, r, e, a]);
}
function Wi(e, t) {
  let r = e || "/__manifest";
  return t == null ? r : `${t}${r}`.replace(/\/+/g, "/");
}
var Gt = "react-router-manifest-version";
async function Wa(e, t, r, n, a, o, l, s, i, u) {
  let d = new URL(Wi(s, l), window.location.origin);
  if (
    (e.sort().forEach((R) => d.searchParams.append("p", R)),
    d.searchParams.set("version", r.version),
    d.toString().length > Hi)
  ) {
    Ct.clear();
    return;
  }
  let m;
  try {
    let R = await fetch(d, { signal: u });
    if (R.ok) {
      if (R.status === 204 && R.headers.has("X-Remix-Reload-Document")) {
        if (!t) {
          console.warn(
            "Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest.",
          );
          return;
        }
        if (sessionStorage.getItem(Gt) === r.version) {
          console.error(
            "Unable to discover routes due to manifest version mismatch.",
          );
          return;
        }
        sessionStorage.setItem(Gt, r.version),
          (window.location.href = t),
          console.warn("Detected manifest version mismatch, reloading..."),
          await new Promise(() => {});
      } else if (R.status >= 400) throw new Error(await R.text());
    } else throw new Error(`${R.status} ${R.statusText}`);
    sessionStorage.removeItem(Gt), (m = await R.json());
  } catch (R) {
    if (u != null && u.aborted) return;
    throw R;
  }
  let h = new Set(Object.keys(r.routes)),
    v = Object.values(m).reduce(
      (R, E) => (E && !h.has(E.id) && (R[E.id] = E), R),
      {},
    );
  Object.assign(r.routes, v), e.forEach((R) => Vi(R, _t));
  let g = new Set();
  Object.values(v).forEach((R) => {
    R && (!R.parentId || !v[R.parentId]) && g.add(R.parentId);
  }),
    g.forEach((R) => i(R || null, Ot(v, n, null, a, o, R)));
}
function Vi(e, t) {
  if (t.size >= ji) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function Yi(e, t) {
  let r;
  return (...n) => {
    window.clearTimeout(r), (r = window.setTimeout(() => e(...n), t));
  };
}
function yr() {
  let e = c.useContext(je);
  return (
    ae(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function Nt() {
  let e = c.useContext(We);
  return (
    ae(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var dt = c.createContext(void 0);
dt.displayName = "FrameworkContext";
function Ye() {
  let e = c.useContext(dt);
  return (
    ae(e, "You must render this element inside a <HydratedRouter> element"), e
  );
}
function Ji(e, t) {
  let r = c.useContext(dt),
    [n, a] = c.useState(!1),
    [o, l] = c.useState(!1),
    {
      onFocus: s,
      onBlur: i,
      onMouseEnter: u,
      onMouseLeave: d,
      onTouchStart: m,
    } = t,
    h = c.useRef(null);
  c.useEffect(() => {
    if ((e === "render" && l(!0), e === "viewport")) {
      let R = (b) => {
          b.forEach((L) => {
            l(L.isIntersecting);
          });
        },
        E = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        h.current && E.observe(h.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [e]),
    c.useEffect(() => {
      if (n) {
        let R = setTimeout(() => {
          l(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [n]);
  let v = () => {
      a(!0);
    },
    g = () => {
      a(!1), l(!1);
    };
  return r
    ? e !== "intent"
      ? [o, h, {}]
      : [
          o,
          h,
          {
            onFocus: rt(s, v),
            onBlur: rt(i, g),
            onMouseEnter: rt(u, v),
            onMouseLeave: rt(d, g),
            onTouchStart: rt(m, v),
          },
        ]
    : [!1, h, {}];
}
function rt(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function vr(e, t, r) {
  if (r && !Pt) return [e[0]];
  if (t) {
    let n = e.findIndex((a) => t[a.route.id] !== void 0);
    return e.slice(0, n + 1);
  }
  return e;
}
function Ml() {
  let { isSpaMode: e, manifest: t, routeModules: r, criticalCss: n } = Ye(),
    { errors: a, matches: o } = Nt(),
    l = vr(o, a, e),
    s = c.useMemo(() => Ko(l, r, t), [l, r, t]);
  return c.createElement(
    c.Fragment,
    null,
    typeof n == "string"
      ? c.createElement("style", { dangerouslySetInnerHTML: { __html: n } })
      : null,
    typeof n == "object"
      ? c.createElement("link", { rel: "stylesheet", href: n.href })
      : null,
    s.map(({ key: i, link: u }) =>
      hr(u)
        ? c.createElement(Va, { key: i, ...u })
        : c.createElement("link", { key: i, ...u }),
    ),
  );
}
function Va({ page: e, ...t }) {
  let { router: r } = yr(),
    n = c.useMemo(() => we(r.routes, e, r.basename), [r.routes, e, r.basename]);
  return n ? c.createElement(Ki, { page: e, matches: n, ...t }) : null;
}
function Gi(e) {
  let { manifest: t, routeModules: r } = Ye(),
    [n, a] = c.useState([]);
  return (
    c.useEffect(() => {
      let o = !1;
      return (
        Qo(e, t, r).then((l) => {
          o || a(l);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function Ki({ page: e, matches: t, ...r }) {
  let n = be(),
    { manifest: a, routeModules: o } = Ye(),
    { basename: l } = yr(),
    { loaderData: s, matches: i } = Nt(),
    u = c.useMemo(() => Zr(e, t, i, a, n, "data"), [e, t, i, a, n]),
    d = c.useMemo(() => Zr(e, t, i, a, n, "assets"), [e, t, i, a, n]),
    m = c.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let g = new Set(),
        R = !1;
      if (
        (t.forEach((b) => {
          var D;
          let L = a.routes[b.route.id];
          !L ||
            !L.hasLoader ||
            ((!u.some((P) => P.route.id === b.route.id) &&
              b.route.id in s &&
              (D = o[b.route.id]) != null &&
              D.shouldRevalidate) ||
            L.hasClientLoader
              ? (R = !0)
              : g.add(b.route.id));
        }),
        g.size === 0)
      )
        return [];
      let E = Aa(e, l);
      return (
        R &&
          g.size > 0 &&
          E.searchParams.set(
            "_routes",
            t
              .filter((b) => g.has(b.route.id))
              .map((b) => b.route.id)
              .join(","),
          ),
        [E.pathname + E.search]
      );
    }, [l, s, n, a, u, t, e, o]),
    h = c.useMemo(() => mr(d, a), [d, a]),
    v = Gi(d);
  return c.createElement(
    c.Fragment,
    null,
    m.map((g) =>
      c.createElement("link", {
        key: g,
        rel: "prefetch",
        as: "fetch",
        href: g,
        ...r,
      }),
    ),
    h.map((g) =>
      c.createElement("link", { key: g, rel: "modulepreload", href: g, ...r }),
    ),
    v.map(({ key: g, link: R }) => c.createElement("link", { key: g, ...R })),
  );
}
function Dl() {
  let { isSpaMode: e, routeModules: t } = Ye(),
    { errors: r, matches: n, loaderData: a } = Nt(),
    o = be(),
    l = vr(n, r, e),
    s = null;
  r && (s = r[l[l.length - 1].route.id]);
  let i = [],
    u = null,
    d = [];
  for (let m = 0; m < l.length; m++) {
    let h = l[m],
      v = h.route.id,
      g = a[v],
      R = h.params,
      E = t[v],
      b = [],
      L = {
        id: v,
        data: g,
        meta: [],
        params: h.params,
        pathname: h.pathname,
        handle: h.route.handle,
        error: s,
      };
    if (
      ((d[m] = L),
      E != null && E.meta
        ? (b =
            typeof E.meta == "function"
              ? E.meta({
                  data: g,
                  params: R,
                  location: o,
                  matches: d,
                  error: s,
                })
              : Array.isArray(E.meta)
                ? [...E.meta]
                : E.meta)
        : u && (b = [...u]),
      (b = b || []),
      !Array.isArray(b))
    )
      throw new Error(
        "The route at " +
          h.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`,
      );
    (L.meta = b), (d[m] = L), (i = [...b]), (u = i);
  }
  return c.createElement(
    c.Fragment,
    null,
    i.flat().map((m) => {
      if (!m) return null;
      if ("tagName" in m) {
        let { tagName: h, ...v } = m;
        if (!Xi(h))
          return (
            console.warn(
              `A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`,
            ),
            null
          );
        let g = h;
        return c.createElement(g, { key: JSON.stringify(v), ...v });
      }
      if ("title" in m)
        return c.createElement("title", { key: "title" }, String(m.title));
      if (
        ("charset" in m &&
          (m.charSet ?? (m.charSet = m.charset), delete m.charset),
        "charSet" in m && m.charSet != null)
      )
        return typeof m.charSet == "string"
          ? c.createElement("meta", { key: "charSet", charSet: m.charSet })
          : null;
      if ("script:ld+json" in m)
        try {
          let h = JSON.stringify(m["script:ld+json"]);
          return c.createElement("script", {
            key: `script:ld+json:${h}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: h },
          });
        } catch {
          return null;
        }
      return c.createElement("meta", { key: JSON.stringify(m), ...m });
    }),
  );
}
function Xi(e) {
  return typeof e == "string" && /^(meta|link)$/.test(e);
}
var Pt = !1;
function qi(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      isSpaMode: n,
      renderMeta: a,
      routeDiscovery: o,
      ssr: l,
    } = Ye(),
    { router: s, static: i, staticContext: u } = yr(),
    { matches: d } = Nt(),
    m = pr(o, l);
  a && (a.didRenderScripts = !0);
  let h = vr(d, null, n);
  c.useEffect(() => {
    Pt = !0;
  }, []);
  let v = c.useMemo(() => {
      var D;
      let b = u
          ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
          : " ",
        L = i
          ? `${(D = t.hmr) != null && D.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${m ? "" : `import ${JSON.stringify(t.url)}`};
${h.map((P, x) => {
  let p = `route${x}`,
    _ = t.routes[P.route.id];
  ae(_, `Route ${P.route.id} not found in manifest`);
  let {
      clientActionModule: j,
      clientLoaderModule: $,
      clientMiddlewareModule: Y,
      hydrateFallbackModule: X,
      module: ne,
    } = _,
    B = [
      ...(j ? [{ module: j, varName: `${p}_clientAction` }] : []),
      ...($ ? [{ module: $, varName: `${p}_clientLoader` }] : []),
      ...(Y ? [{ module: Y, varName: `${p}_clientMiddleware` }] : []),
      ...(X ? [{ module: X, varName: `${p}_HydrateFallback` }] : []),
      { module: ne, varName: `${p}_main` },
    ];
  if (B.length === 1) return `import * as ${p} from ${JSON.stringify(ne)};`;
  let J = B.map((z) => `import * as ${z.varName} from "${z.module}";`).join(`
`),
    Z = `const ${p} = {${B.map((z) => `...${z.varName}`).join(",")}};`;
  return [J, Z].join(`
`);
}).join(`
`)}
  ${m ? `window.__reactRouterManifest = ${JSON.stringify(Ui(t, s), null, 2)};` : ""}
  window.__reactRouterRouteModules = {${h.map((P, x) => `${JSON.stringify(P.route.id)}:route${x}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`
          : " ";
      return c.createElement(
        c.Fragment,
        null,
        c.createElement("script", {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: ea(b),
          type: void 0,
        }),
        c.createElement("script", {
          ...e,
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: ea(L),
          type: "module",
          async: !0,
        }),
      );
    }, []),
    g = Pt
      ? []
      : Qi(t.entry.imports.concat(mr(h, t, { includeHydrateFallback: !0 }))),
    R = typeof t.sri == "object" ? t.sri : {};
  return Pt
    ? null
    : c.createElement(
        c.Fragment,
        null,
        typeof t.sri == "object"
          ? c.createElement("script", {
              "rr-importmap": "",
              type: "importmap",
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: {
                __html: JSON.stringify({ integrity: R }),
              },
            })
          : null,
        m
          ? null
          : c.createElement("link", {
              rel: "modulepreload",
              href: t.url,
              crossOrigin: e.crossOrigin,
              integrity: R[t.url],
              suppressHydrationWarning: !0,
            }),
        c.createElement("link", {
          rel: "modulepreload",
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
          integrity: R[t.entry.module],
          suppressHydrationWarning: !0,
        }),
        g.map((E) =>
          c.createElement("link", {
            key: E,
            rel: "modulepreload",
            href: E,
            crossOrigin: e.crossOrigin,
            integrity: R[E],
            suppressHydrationWarning: !0,
          }),
        ),
        v,
      );
}
function Qi(e) {
  return [...new Set(e)];
}
function Zi(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Ya =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Ya && (window.__reactRouterVersion = "7.6.0");
} catch {}
var Ja = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ga = c.forwardRef(function (
    {
      onClick: t,
      discover: r = "render",
      prefetch: n = "none",
      relative: a,
      reloadDocument: o,
      replace: l,
      state: s,
      target: i,
      to: u,
      preventScrollReset: d,
      viewTransition: m,
      ...h
    },
    v,
  ) {
    let { basename: g } = c.useContext(me),
      R = typeof u == "string" && Ja.test(u),
      E,
      b = !1;
    if (typeof u == "string" && R && ((E = u), Ya))
      try {
        let $ = new URL(window.location.href),
          Y = u.startsWith("//") ? new URL($.protocol + u) : new URL(u),
          X = ue(Y.pathname, g);
        Y.origin === $.origin && X != null
          ? (u = X + Y.search + Y.hash)
          : (b = !0);
      } catch {
        K(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let L = Eo(u, { relative: a }),
      [D, P, x] = Ji(n, h),
      p = nl(u, {
        replace: l,
        state: s,
        target: i,
        preventScrollReset: d,
        relative: a,
        viewTransition: m,
      });
    function _($) {
      t && t($), $.defaultPrevented || p($);
    }
    let j = c.createElement("a", {
      ...h,
      ...x,
      href: E || L,
      onClick: b || o ? t : _,
      ref: Zi(v, P),
      target: i,
      "data-discover": !R && r === "render" ? "true" : void 0,
    });
    return D && !R
      ? c.createElement(c.Fragment, null, j, c.createElement(Va, { page: L }))
      : j;
  });
Ga.displayName = "Link";
var el = c.forwardRef(function (
  {
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: a = !1,
    style: o,
    to: l,
    viewTransition: s,
    children: i,
    ...u
  },
  d,
) {
  let m = ut(l, { relative: u.relative }),
    h = be(),
    v = c.useContext(We),
    { navigator: g, basename: R } = c.useContext(me),
    E = v != null && dl(m) && s === !0,
    b = g.encodeLocation ? g.encodeLocation(m).pathname : m.pathname,
    L = h.pathname,
    D =
      v && v.navigation && v.navigation.location
        ? v.navigation.location.pathname
        : null;
  r ||
    ((L = L.toLowerCase()),
    (D = D ? D.toLowerCase() : null),
    (b = b.toLowerCase())),
    D && R && (D = ue(D, R) || D);
  const P = b !== "/" && b.endsWith("/") ? b.length - 1 : b.length;
  let x = L === b || (!a && L.startsWith(b) && L.charAt(P) === "/"),
    p =
      D != null &&
      (D === b || (!a && D.startsWith(b) && D.charAt(b.length) === "/")),
    _ = { isActive: x, isPending: p, isTransitioning: E },
    j = x ? t : void 0,
    $;
  typeof n == "function"
    ? ($ = n(_))
    : ($ = [
        n,
        x ? "active" : null,
        p ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Y = typeof o == "function" ? o(_) : o;
  return c.createElement(
    Ga,
    {
      ...u,
      "aria-current": j,
      className: $,
      ref: d,
      style: Y,
      to: l,
      viewTransition: s,
    },
    typeof i == "function" ? i(_) : i,
  );
});
el.displayName = "NavLink";
var tl = c.forwardRef(
  (
    {
      discover: e = "render",
      fetcherKey: t,
      navigate: r,
      reloadDocument: n,
      replace: a,
      state: o,
      method: l = xt,
      action: s,
      onSubmit: i,
      relative: u,
      preventScrollReset: d,
      viewTransition: m,
      ...h
    },
    v,
  ) => {
    let g = ll(),
      R = sl(s, { relative: u }),
      E = l.toLowerCase() === "get" ? "get" : "post",
      b = typeof s == "string" && Ja.test(s),
      L = (D) => {
        if ((i && i(D), D.defaultPrevented)) return;
        D.preventDefault();
        let P = D.nativeEvent.submitter,
          x = (P == null ? void 0 : P.getAttribute("formmethod")) || l;
        g(P || D.currentTarget, {
          fetcherKey: t,
          method: x,
          navigate: r,
          replace: a,
          state: o,
          relative: u,
          preventScrollReset: d,
          viewTransition: m,
        });
      };
    return c.createElement("form", {
      ref: v,
      method: E,
      action: R,
      onSubmit: n ? i : L,
      ...h,
      "data-discover": !b && e === "render" ? "true" : void 0,
    });
  },
);
tl.displayName = "Form";
function rl({ getKey: e, storageKey: t, ...r }) {
  let n = c.useContext(dt),
    { basename: a } = c.useContext(me),
    o = be(),
    l = La();
  ul({ getKey: e, storageKey: t });
  let s = c.useMemo(() => {
    if (!n || !e) return null;
    let u = nr(o, l, a, e);
    return u !== o.key ? u : null;
  }, []);
  if (!n || n.isSpaMode) return null;
  let i = ((u, d) => {
    if (!window.history.state || !window.history.state.key) {
      let m = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: m }, "");
    }
    try {
      let h = JSON.parse(sessionStorage.getItem(u) || "{}")[
        d || window.history.state.key
      ];
      typeof h == "number" && window.scrollTo(0, h);
    } catch (m) {
      console.error(m), sessionStorage.removeItem(u);
    }
  }).toString();
  return c.createElement("script", {
    ...r,
    suppressHydrationWarning: !0,
    dangerouslySetInnerHTML: {
      __html: `(${i})(${JSON.stringify(t || ar)}, ${JSON.stringify(s)})`,
    },
  });
}
rl.displayName = "ScrollRestoration";
function Ka(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gr(e) {
  let t = c.useContext(je);
  return U(t, Ka(e)), t;
}
function al(e) {
  let t = c.useContext(We);
  return U(t, Ka(e)), t;
}
function nl(
  e,
  {
    target: t,
    replace: r,
    state: n,
    preventScrollReset: a,
    relative: o,
    viewTransition: l,
  } = {},
) {
  let s = bo(),
    i = be(),
    u = ut(e, { relative: o });
  return c.useCallback(
    (d) => {
      if (Vo(d, t)) {
        d.preventDefault();
        let m = r !== void 0 ? r : Pe(i) === Pe(u);
        s(e, {
          replace: m,
          state: n,
          preventScrollReset: a,
          relative: o,
          viewTransition: l,
        });
      }
    },
    [i, s, u, r, n, t, e, a, o, l],
  );
}
var ol = 0,
  il = () => `__${String(++ol)}__`;
function ll() {
  let { router: e } = gr("useSubmit"),
    { basename: t } = c.useContext(me),
    r = _o();
  return c.useCallback(
    async (n, a = {}) => {
      let { action: o, method: l, encType: s, formData: i, body: u } = Go(n, t);
      if (a.navigate === !1) {
        let d = a.fetcherKey || il();
        await e.fetch(d, r, a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: i,
          body: u,
          formMethod: a.method || l,
          formEncType: a.encType || s,
          flushSync: a.flushSync,
        });
      } else
        await e.navigate(a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: i,
          body: u,
          formMethod: a.method || l,
          formEncType: a.encType || s,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [e, t, r],
  );
}
function sl(e, { relative: t } = {}) {
  let { basename: r } = c.useContext(me),
    n = c.useContext(ve);
  U(n, "useFormAction must be used inside a RouteContext");
  let [a] = n.matches.slice(-1),
    o = { ...ut(e || ".", { relative: t }) },
    l = be();
  if (e == null) {
    o.search = l.search;
    let s = new URLSearchParams(o.search),
      i = s.getAll("index");
    if (i.some((d) => d === "")) {
      s.delete("index"),
        i.filter((m) => m).forEach((m) => s.append("index", m));
      let d = s.toString();
      o.search = d ? `?${d}` : "";
    }
  }
  return (
    (!e || e === ".") &&
      a.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (o.pathname = o.pathname === "/" ? r : Ee([r, o.pathname])),
    Pe(o)
  );
}
var ar = "react-router-scroll-positions",
  Rt = {};
function nr(e, t, r, n) {
  let a = null;
  return (
    n &&
      (r !== "/"
        ? (a = n({ ...e, pathname: ue(e.pathname, r) || e.pathname }, t))
        : (a = n(e, t))),
    a == null && (a = e.key),
    a
  );
}
function ul({ getKey: e, storageKey: t } = {}) {
  let { router: r } = gr("useScrollRestoration"),
    { restoreScrollPosition: n, preventScrollReset: a } = al(
      "useScrollRestoration",
    ),
    { basename: o } = c.useContext(me),
    l = be(),
    s = La(),
    i = ko();
  c.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    [],
  ),
    cl(
      c.useCallback(() => {
        if (i.state === "idle") {
          let u = nr(l, s, o, e);
          Rt[u] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || ar, JSON.stringify(Rt));
        } catch (u) {
          K(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`,
          );
        }
        window.history.scrollRestoration = "auto";
      }, [i.state, e, o, l, s, t]),
    ),
    typeof document < "u" &&
      (c.useLayoutEffect(() => {
        try {
          let u = sessionStorage.getItem(t || ar);
          u && (Rt = JSON.parse(u));
        } catch {}
      }, [t]),
      c.useLayoutEffect(() => {
        let u =
          r == null
            ? void 0
            : r.enableScrollRestoration(
                Rt,
                () => window.scrollY,
                e ? (d, m) => nr(d, m, o, e) : void 0,
              );
        return () => u && u();
      }, [r, o, e]),
      c.useLayoutEffect(() => {
        if (n !== !1) {
          if (typeof n == "number") {
            window.scrollTo(0, n);
            return;
          }
          if (l.hash) {
            let u = document.getElementById(
              decodeURIComponent(l.hash.slice(1)),
            );
            if (u) {
              u.scrollIntoView();
              return;
            }
          }
          a !== !0 && window.scrollTo(0, 0);
        }
      }, [l, n, a]));
}
function cl(e, t) {
  let { capture: r } = {};
  c.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return (
      window.addEventListener("pagehide", e, n),
      () => {
        window.removeEventListener("pagehide", e, n);
      }
    );
  }, [e, r]);
}
function dl(e, t = {}) {
  let r = c.useContext(cr);
  U(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: n } = gr("useViewTransitionState"),
    a = ut(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = ue(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    l = ue(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Dt(a.pathname, l) != null || Dt(a.pathname, o) != null;
}
[...$a];
function Tl(e, ...t) {
  let r = t[0];
  return e
    .split("/")
    .map((n) => {
      const a = n.match(/^:([\w-]+)(\?)?/);
      if (!a) return n;
      const o = a[1],
        l = r ? r[o] : void 0;
      if (a[2] === void 0 && l === void 0)
        throw Error(
          `Path '${e}' requires param '${o}' but it was not provided`,
        );
      return l;
    })
    .filter((n) => n !== void 0)
    .join("/");
}
function fl(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new Me(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let o = window[a.__subType];
        if (typeof o == "function")
          try {
            let l = new o(a.message);
            (l.stack = a.stack), (r[n] = l);
          } catch {}
      }
      if (r[n] == null) {
        let o = new Error(a.message);
        (o.stack = a.stack), (r[n] = o);
      }
    } else r[n] = a;
  return r;
}
function hl(e, t, r, n, a, o) {
  let l = { ...e, loaderData: { ...e.loaderData } },
    s = we(t, n, a);
  if (s)
    for (let i of s) {
      let u = i.route.id,
        d = r(u);
      Ba(u, d.clientLoader, d.hasLoader, o) &&
      (d.hasHydrateFallback || !d.hasLoader)
        ? delete l.loaderData[u]
        : d.hasLoader || (l.loaderData[u] = null);
    }
  return l;
}
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ml(e) {
  return c.createElement($o, { flushSync: mn.flushSync, ...e });
}
var T = null,
  at = null;
function pl() {
  if (
    !T &&
    window.__reactRouterContext &&
    window.__reactRouterManifest &&
    window.__reactRouterRouteModules
  ) {
    if (window.__reactRouterManifest.sri === !0) {
      const e = document.querySelector("script[rr-importmap]");
      if (e != null && e.textContent)
        try {
          window.__reactRouterManifest.sri = JSON.parse(
            e.textContent,
          ).integrity;
        } catch (t) {
          console.error("Failed to parse import map", t);
        }
    }
    T = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: !1,
    };
  }
}
function yl({ unstable_getContext: e }) {
  var o, l;
  if ((pl(), !T))
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`",
    );
  let t = T;
  if (!T.stateDecodingPromise) {
    let s = T.context.stream;
    U(s, "No stream found for single fetch decoding"),
      (T.context.stream = void 0),
      (T.stateDecodingPromise = ja(s, window)
        .then((i) => {
          (T.context.state = i.value), (t.stateDecodingPromise.value = !0);
        })
        .catch((i) => {
          t.stateDecodingPromise.error = i;
        }));
  }
  if (T.stateDecodingPromise.error) throw T.stateDecodingPromise.error;
  if (!T.stateDecodingPromise.value) throw T.stateDecodingPromise;
  let r = Ot(
      T.manifest.routes,
      T.routeModules,
      T.context.state,
      T.context.ssr,
      T.context.isSpaMode,
    ),
    n;
  if (T.context.isSpaMode) {
    let { loaderData: s } = T.context.state;
    (o = T.manifest.routes.root) != null &&
      o.hasLoader &&
      s &&
      "root" in s &&
      (n = { loaderData: { root: s.root } });
  } else
    (n = hl(
      T.context.state,
      r,
      (s) => {
        var i, u, d;
        return {
          clientLoader:
            (i = T.routeModules[s]) == null ? void 0 : i.clientLoader,
          hasLoader:
            ((u = T.manifest.routes[s]) == null ? void 0 : u.hasLoader) === !0,
          hasHydrateFallback:
            ((d = T.routeModules[s]) == null ? void 0 : d.HydrateFallback) !=
            null,
        };
      },
      window.location,
      (l = window.__reactRouterContext) == null ? void 0 : l.basename,
      T.context.isSpaMode,
    )),
      n && n.errors && (n.errors = fl(n.errors));
  let a = Zn({
    routes: r,
    history: wn(),
    basename: T.context.basename,
    unstable_getContext: e,
    hydrationData: n,
    hydrationRouteProperties: No,
    mapRouteProperties: Oo,
    future: { unstable_middleware: T.context.future.unstable_middleware },
    dataStrategy: xi(
      () => a,
      T.manifest,
      T.routeModules,
      T.context.ssr,
      T.context.basename,
    ),
    patchRoutesOnNavigation: zi(
      T.manifest,
      T.routeModules,
      T.context.ssr,
      T.context.routeDiscovery,
      T.context.isSpaMode,
      T.context.basename,
    ),
  });
  return (
    (T.router = a),
    a.state.initialized && ((T.routerInitialized = !0), a.initialize()),
    (a.createRoutesForHMR = Fi),
    (window.__reactRouterDataRouter = a),
    a
  );
}
function vl(e) {
  at || (at = yl({ unstable_getContext: e.unstable_getContext }));
  let [t, r] = c.useState(void 0),
    [n, a] = c.useState(at.state.location);
  return (
    c.useLayoutEffect(() => {
      T &&
        T.router &&
        !T.routerInitialized &&
        ((T.routerInitialized = !0), T.router.initialize());
    }, []),
    c.useLayoutEffect(() => {
      if (T && T.router)
        return T.router.subscribe((o) => {
          o.location !== n && a(o.location);
        });
    }, [n]),
    U(T, "ssrInfo unavailable for HydratedRouter"),
    Bi(
      at,
      T.manifest,
      T.routeModules,
      T.context.ssr,
      T.context.routeDiscovery,
      T.context.isSpaMode,
    ),
    c.createElement(
      c.Fragment,
      null,
      c.createElement(
        dt.Provider,
        {
          value: {
            manifest: T.manifest,
            routeModules: T.routeModules,
            future: T.context.future,
            criticalCss: t,
            ssr: T.context.ssr,
            isSpaMode: T.context.isSpaMode,
            routeDiscovery: T.context.routeDiscovery,
          },
        },
        c.createElement(
          Ii,
          { location: n },
          c.createElement(ml, { router: at }),
        ),
      ),
      c.createElement(c.Fragment, null),
    )
  );
}
c.startTransition(() => {
  pn.hydrateRoot(document, _r.jsx(c.StrictMode, { children: _r.jsx(vl, {}) }));
});
export {
  Ga as L,
  Dl as M,
  Pl as O,
  rl as S,
  Cl as a,
  Ll as b,
  Sl as c,
  ko as d,
  xl as e,
  Ml as f,
  qi as g,
  Tl as h,
  Rl as i,
  La as u,
};

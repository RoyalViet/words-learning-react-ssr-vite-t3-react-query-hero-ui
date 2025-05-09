import { R as $, a as $e } from "./vendor-react-BOaTbF0U.js";
var fe = (e) => e.type === "checkbox",
  te = (e) => e instanceof Date,
  M = (e) => e == null;
const it = (e) => typeof e == "object";
var E = (e) => !M(e) && !Array.isArray(e) && it(e) && !te(e),
  wt = (e) =>
    E(e) && e.target ? (fe(e.target) ? e.target.checked : e.target.value) : e,
  Dt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  Et = (e, s) => e.has(Dt(s)),
  kt = (e) => {
    const s = e.constructor && e.constructor.prototype;
    return E(s) && s.hasOwnProperty("isPrototypeOf");
  },
  ke =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function R(e) {
  let s;
  const r = Array.isArray(e),
    i = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) s = new Date(e);
  else if (e instanceof Set) s = new Set(e);
  else if (!(ke && (e instanceof Blob || i)) && (r || E(e)))
    if (((s = r ? [] : {}), !r && !kt(e))) s = e;
    else for (const o in e) e.hasOwnProperty(o) && (s[o] = R(e[o]));
  else return e;
  return s;
}
var be = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  S = (e) => e === void 0,
  y = (e, s, r) => {
    if (!s || !E(e)) return r;
    const i = be(s.split(/[,[\].]+?/)).reduce((o, l) => (M(o) ? o : o[l]), e);
    return S(i) || i === e ? (S(e[s]) ? r : e[s]) : i;
  },
  j = (e) => typeof e == "boolean",
  Se = (e) => /^\w*$/.test(e),
  nt = (e) => be(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  A = (e, s, r) => {
    let i = -1;
    const o = Se(s) ? [s] : nt(s),
      l = o.length,
      f = l - 1;
    for (; ++i < l; ) {
      const h = o[i];
      let x = r;
      if (i !== f) {
        const L = e[h];
        x = E(L) || Array.isArray(L) ? L : isNaN(+o[i + 1]) ? {} : [];
      }
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      (e[h] = x), (e = e[h]);
    }
  };
const je = { BLUR: "blur", FOCUS_OUT: "focusout" },
  I = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Q = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
$.createContext(null);
var St = (e, s, r, i = !0) => {
  const o = { defaultValues: s._defaultValues };
  for (const l in e)
    Object.defineProperty(o, l, {
      get: () => {
        const f = l;
        return (
          s._proxyFormState[f] !== I.all &&
            (s._proxyFormState[f] = !i || I.all),
          e[f]
        );
      },
    });
  return o;
};
const Ot = typeof window < "u" ? $e.useLayoutEffect : $e.useEffect;
var H = (e) => typeof e == "string",
  Tt = (e, s, r, i, o) =>
    H(e)
      ? (i && s.watch.add(e), y(r, e, o))
      : Array.isArray(e)
        ? e.map((l) => (i && s.watch.add(l), y(r, l)))
        : (i && (s.watchAll = !0), r),
  at = (e, s, r, i, o) =>
    s
      ? {
          ...r[e],
          types: { ...(r[e] && r[e].types ? r[e].types : {}), [i]: o || !0 },
        }
      : {},
  oe = (e) => (Array.isArray(e) ? e : [e]),
  He = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (o) => {
        for (const l of e) l.next && l.next(o);
      },
      subscribe: (o) => (
        e.push(o),
        {
          unsubscribe: () => {
            e = e.filter((l) => l !== o);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Ee = (e) => M(e) || !it(e);
function G(e, s) {
  if (Ee(e) || Ee(s)) return e === s;
  if (te(e) && te(s)) return e.getTime() === s.getTime();
  const r = Object.keys(e),
    i = Object.keys(s);
  if (r.length !== i.length) return !1;
  for (const o of r) {
    const l = e[o];
    if (!i.includes(o)) return !1;
    if (o !== "ref") {
      const f = s[o];
      if (
        (te(l) && te(f)) ||
        (E(l) && E(f)) ||
        (Array.isArray(l) && Array.isArray(f))
          ? !G(l, f)
          : l !== f
      )
        return !1;
    }
  }
  return !0;
}
var U = (e) => E(e) && !Object.keys(e).length,
  Oe = (e) => e.type === "file",
  q = (e) => typeof e == "function",
  he = (e) => {
    if (!ke) return !1;
    const s = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement)
    );
  },
  lt = (e) => e.type === "select-multiple",
  Te = (e) => e.type === "radio",
  Lt = (e) => Te(e) || fe(e),
  De = (e) => he(e) && e.isConnected;
function Ct(e, s) {
  const r = s.slice(0, -1).length;
  let i = 0;
  for (; i < r; ) e = S(e) ? i++ : e[s[i++]];
  return e;
}
function Rt(e) {
  for (const s in e) if (e.hasOwnProperty(s) && !S(e[s])) return !1;
  return !0;
}
function O(e, s) {
  const r = Array.isArray(s) ? s : Se(s) ? [s] : nt(s),
    i = r.length === 1 ? e : Ct(e, r),
    o = r.length - 1,
    l = r[o];
  return (
    i && delete i[l],
    o !== 0 &&
      ((E(i) && U(i)) || (Array.isArray(i) && Rt(i))) &&
      O(e, r.slice(0, -1)),
    e
  );
}
var ot = (e) => {
  for (const s in e) if (q(e[s])) return !0;
  return !1;
};
function ge(e, s = {}) {
  const r = Array.isArray(e);
  if (E(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || (E(e[i]) && !ot(e[i]))
        ? ((s[i] = Array.isArray(e[i]) ? [] : {}), ge(e[i], s[i]))
        : M(e[i]) || (s[i] = !0);
  return s;
}
function ut(e, s, r) {
  const i = Array.isArray(e);
  if (E(e) || i)
    for (const o in e)
      Array.isArray(e[o]) || (E(e[o]) && !ot(e[o]))
        ? S(s) || Ee(r[o])
          ? (r[o] = Array.isArray(e[o]) ? ge(e[o], []) : { ...ge(e[o]) })
          : ut(e[o], M(s) ? {} : s[o], r[o])
        : (r[o] = !G(e[o], s[o]));
  return r;
}
var ae = (e, s) => ut(e, s, ge(s));
const Ke = { value: !1, isValid: !1 },
  ze = { value: !0, isValid: !0 };
var ft = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        const s = e
          .filter((r) => r && r.checked && !r.disabled)
          .map((r) => r.value);
        return { value: s, isValid: !!s.length };
      }
      return e[0].checked && !e[0].disabled
        ? e[0].attributes && !S(e[0].attributes.value)
          ? S(e[0].value) || e[0].value === ""
            ? ze
            : { value: e[0].value, isValid: !0 }
          : ze
        : Ke;
    }
    return Ke;
  },
  ct = (e, { valueAsNumber: s, valueAsDate: r, setValueAs: i }) =>
    S(e)
      ? e
      : s
        ? e === ""
          ? NaN
          : e && +e
        : r && H(e)
          ? new Date(e)
          : i
            ? i(e)
            : e;
const Ye = { isValid: !1, value: null };
var dt = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (s, r) =>
          r && r.checked && !r.disabled ? { isValid: !0, value: r.value } : s,
        Ye,
      )
    : Ye;
function Je(e) {
  const s = e.ref;
  return Oe(s)
    ? s.files
    : Te(s)
      ? dt(e.refs).value
      : lt(s)
        ? [...s.selectedOptions].map(({ value: r }) => r)
        : fe(s)
          ? ft(e.refs).value
          : ct(S(s.value) ? e.ref.value : s.value, e);
}
var Ut = (e, s, r, i) => {
    const o = {};
    for (const l of e) {
      const f = y(s, l);
      f && A(o, l, f._f);
    }
    return {
      criteriaMode: r,
      names: [...e],
      fields: o,
      shouldUseNativeValidation: i,
    };
  },
  ve = (e) => e instanceof RegExp,
  le = (e) =>
    S(e)
      ? e
      : ve(e)
        ? e.source
        : E(e)
          ? ve(e.value)
            ? e.value.source
            : e.value
          : e,
  Qe = (e) => ({
    isOnSubmit: !e || e === I.onSubmit,
    isOnBlur: e === I.onBlur,
    isOnChange: e === I.onChange,
    isOnAll: e === I.all,
    isOnTouch: e === I.onTouched,
  });
const Xe = "AsyncFunction";
var Mt = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (q(e.validate) && e.validate.constructor.name === Xe) ||
      (E(e.validate) &&
        Object.values(e.validate).find((s) => s.constructor.name === Xe))
    ),
  Nt = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate),
  Ze = (e, s, r) =>
    !r &&
    (s.watchAll ||
      s.watch.has(e) ||
      [...s.watch].some(
        (i) => e.startsWith(i) && /^\.\w+/.test(e.slice(i.length)),
      ));
const ue = (e, s, r, i) => {
  for (const o of r || Object.keys(e)) {
    const l = y(e, o);
    if (l) {
      const { _f: f, ...h } = l;
      if (f) {
        if (f.refs && f.refs[0] && s(f.refs[0], o) && !i) return !0;
        if (f.ref && s(f.ref, f.name) && !i) return !0;
        if (ue(h, s)) break;
      } else if (E(h) && ue(h, s)) break;
    }
  }
};
function Ge(e, s, r) {
  const i = y(e, r);
  if (i || Se(r)) return { error: i, name: r };
  const o = r.split(".");
  for (; o.length; ) {
    const l = o.join("."),
      f = y(s, l),
      h = y(e, l);
    if (f && !Array.isArray(f) && r !== l) return { name: r };
    if (h && h.type) return { name: l, error: h };
    o.pop();
  }
  return { name: r };
}
var Pt = (e, s, r, i) => {
    r(e);
    const { name: o, ...l } = e;
    return (
      U(l) ||
      Object.keys(l).length >= Object.keys(s).length ||
      Object.keys(l).find((f) => s[f] === (!i || I.all))
    );
  },
  Bt = (e, s, r) =>
    !e ||
    !s ||
    e === s ||
    oe(e).some((i) => i && (r ? i === s : i.startsWith(s) || s.startsWith(i))),
  It = (e, s, r, i, o) =>
    o.isOnAll
      ? !1
      : !r && o.isOnTouch
        ? !(s || e)
        : (r ? i.isOnBlur : o.isOnBlur)
          ? !e
          : (r ? i.isOnChange : o.isOnChange)
            ? e
            : !0,
  qt = (e, s) => !be(y(e, s)).length && O(e, s),
  pt = (e, s, r) => {
    const i = oe(y(e, r));
    return A(i, "root", s[r]), A(e, r, i), e;
  },
  ye = (e) => H(e);
function et(e, s, r = "validate") {
  if (ye(e) || (Array.isArray(e) && e.every(ye)) || (j(e) && !e))
    return { type: r, message: ye(e) ? e : "", ref: s };
}
var re = (e) => (E(e) && !ve(e) ? e : { value: e, message: "" }),
  tt = async (e, s, r, i, o, l) => {
    const {
        ref: f,
        refs: h,
        required: x,
        maxLength: L,
        minLength: m,
        min: w,
        max: b,
        pattern: ce,
        validate: X,
        name: N,
        valueAsNumber: _e,
        mount: K,
      } = e._f,
      v = y(r, N);
    if (!K || s.has(N)) return {};
    const z = h ? h[0] : f,
      Y = (F) => {
        o &&
          z.reportValidity &&
          (z.setCustomValidity(j(F) ? "" : F || ""), z.reportValidity());
      },
      T = {},
      se = Te(f),
      ie = fe(f),
      Ve = se || ie,
      p =
        ((_e || Oe(f)) && S(f.value) && S(v)) ||
        (he(f) && f.value === "") ||
        v === "" ||
        (Array.isArray(v) && !v.length),
      ee = at.bind(null, N, i, T),
      J = (F, _, D, P = Q.maxLength, B = Q.minLength) => {
        const W = F ? _ : D;
        T[N] = { type: F ? P : B, message: W, ref: f, ...ee(F ? P : B, W) };
      };
    if (
      l
        ? !Array.isArray(v) || !v.length
        : x &&
          ((!Ve && (p || M(v))) ||
            (j(v) && !v) ||
            (ie && !ft(h).isValid) ||
            (se && !dt(h).isValid))
    ) {
      const { value: F, message: _ } = ye(x)
        ? { value: !!x, message: x }
        : re(x);
      if (
        F &&
        ((T[N] = {
          type: Q.required,
          message: _,
          ref: z,
          ...ee(Q.required, _),
        }),
        !i)
      )
        return Y(_), T;
    }
    if (!p && (!M(w) || !M(b))) {
      let F, _;
      const D = re(b),
        P = re(w);
      if (!M(v) && !isNaN(v)) {
        const B = f.valueAsNumber || (v && +v);
        M(D.value) || (F = B > D.value), M(P.value) || (_ = B < P.value);
      } else {
        const B = f.valueAsDate || new Date(v),
          W = (de) => new Date(new Date().toDateString() + " " + de),
          Z = f.type == "time",
          ne = f.type == "week";
        H(D.value) &&
          v &&
          (F = Z
            ? W(v) > W(D.value)
            : ne
              ? v > D.value
              : B > new Date(D.value)),
          H(P.value) &&
            v &&
            (_ = Z
              ? W(v) < W(P.value)
              : ne
                ? v < P.value
                : B < new Date(P.value));
      }
      if ((F || _) && (J(!!F, D.message, P.message, Q.max, Q.min), !i))
        return Y(T[N].message), T;
    }
    if ((L || m) && !p && (H(v) || (l && Array.isArray(v)))) {
      const F = re(L),
        _ = re(m),
        D = !M(F.value) && v.length > +F.value,
        P = !M(_.value) && v.length < +_.value;
      if ((D || P) && (J(D, F.message, _.message), !i))
        return Y(T[N].message), T;
    }
    if (ce && !p && H(v)) {
      const { value: F, message: _ } = re(ce);
      if (
        ve(F) &&
        !v.match(F) &&
        ((T[N] = { type: Q.pattern, message: _, ref: f, ...ee(Q.pattern, _) }),
        !i)
      )
        return Y(_), T;
    }
    if (X) {
      if (q(X)) {
        const F = await X(v, r),
          _ = et(F, z);
        if (_ && ((T[N] = { ..._, ...ee(Q.validate, _.message) }), !i))
          return Y(_.message), T;
      } else if (E(X)) {
        let F = {};
        for (const _ in X) {
          if (!U(F) && !i) break;
          const D = et(await X[_](v, r), z, _);
          D &&
            ((F = { ...D, ...ee(_, D.message) }),
            Y(D.message),
            i && (T[N] = F));
        }
        if (!U(F) && ((T[N] = { ref: z, ...F }), !i)) return T;
      }
    }
    return Y(!0), T;
  };
const Wt = {
  mode: I.onSubmit,
  reValidateMode: I.onChange,
  shouldFocusError: !0,
};
function $t(e = {}) {
  let s = { ...Wt, ...e },
    r = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: q(s.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: s.errors || {},
      disabled: s.disabled || !1,
    };
  const i = {};
  let o =
      E(s.defaultValues) || E(s.values)
        ? R(s.defaultValues || s.values) || {}
        : {},
    l = s.shouldUnregister ? {} : R(o),
    f = { action: !1, mount: !1, watch: !1 },
    h = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    x,
    L = 0;
  const m = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1,
  };
  let w = { ...m };
  const b = { array: He(), state: He() },
    ce = Qe(s.mode),
    X = Qe(s.reValidateMode),
    N = s.criteriaMode === I.all,
    _e = (t) => (n) => {
      clearTimeout(L), (L = setTimeout(t, n));
    },
    K = async (t) => {
      if (!s.disabled && (m.isValid || w.isValid || t)) {
        const n = s.resolver ? U((await p()).errors) : await J(i, !0);
        n !== r.isValid && b.state.next({ isValid: n });
      }
    },
    v = (t, n) => {
      !s.disabled &&
        (m.isValidating ||
          m.validatingFields ||
          w.isValidating ||
          w.validatingFields) &&
        ((t || Array.from(h.mount)).forEach((a) => {
          a && (n ? A(r.validatingFields, a, n) : O(r.validatingFields, a));
        }),
        b.state.next({
          validatingFields: r.validatingFields,
          isValidating: !U(r.validatingFields),
        }));
    },
    z = (t, n = [], a, d, c = !0, u = !0) => {
      if (d && a && !s.disabled) {
        if (((f.action = !0), u && Array.isArray(y(i, t)))) {
          const g = a(y(i, t), d.argA, d.argB);
          c && A(i, t, g);
        }
        if (u && Array.isArray(y(r.errors, t))) {
          const g = a(y(r.errors, t), d.argA, d.argB);
          c && A(r.errors, t, g), qt(r.errors, t);
        }
        if (
          (m.touchedFields || w.touchedFields) &&
          u &&
          Array.isArray(y(r.touchedFields, t))
        ) {
          const g = a(y(r.touchedFields, t), d.argA, d.argB);
          c && A(r.touchedFields, t, g);
        }
        (m.dirtyFields || w.dirtyFields) && (r.dirtyFields = ae(o, l)),
          b.state.next({
            name: t,
            isDirty: _(t, n),
            dirtyFields: r.dirtyFields,
            errors: r.errors,
            isValid: r.isValid,
          });
      } else A(l, t, n);
    },
    Y = (t, n) => {
      A(r.errors, t, n), b.state.next({ errors: r.errors });
    },
    T = (t) => {
      (r.errors = t), b.state.next({ errors: r.errors, isValid: !1 });
    },
    se = (t, n, a, d) => {
      const c = y(i, t);
      if (c) {
        const u = y(l, t, S(a) ? y(o, t) : a);
        S(u) || (d && d.defaultChecked) || n
          ? A(l, t, n ? u : Je(c._f))
          : B(t, u),
          f.mount && K();
      }
    },
    ie = (t, n, a, d, c) => {
      let u = !1,
        g = !1;
      const V = { name: t };
      if (!s.disabled) {
        if (!a || d) {
          (m.isDirty || w.isDirty) &&
            ((g = r.isDirty),
            (r.isDirty = V.isDirty = _()),
            (u = g !== V.isDirty));
          const k = G(y(o, t), n);
          (g = !!y(r.dirtyFields, t)),
            k ? O(r.dirtyFields, t) : A(r.dirtyFields, t, !0),
            (V.dirtyFields = r.dirtyFields),
            (u = u || ((m.dirtyFields || w.dirtyFields) && g !== !k));
        }
        if (a) {
          const k = y(r.touchedFields, t);
          k ||
            (A(r.touchedFields, t, a),
            (V.touchedFields = r.touchedFields),
            (u = u || ((m.touchedFields || w.touchedFields) && k !== a)));
        }
        u && c && b.state.next(V);
      }
      return u ? V : {};
    },
    Ve = (t, n, a, d) => {
      const c = y(r.errors, t),
        u = (m.isValid || w.isValid) && j(n) && r.isValid !== n;
      if (
        (s.delayError && a
          ? ((x = _e(() => Y(t, a))), x(s.delayError))
          : (clearTimeout(L),
            (x = null),
            a ? A(r.errors, t, a) : O(r.errors, t)),
        (a ? !G(c, a) : c) || !U(d) || u)
      ) {
        const g = {
          ...d,
          ...(u && j(n) ? { isValid: n } : {}),
          errors: r.errors,
          name: t,
        };
        (r = { ...r, ...g }), b.state.next(g);
      }
    },
    p = async (t) => {
      v(t, !0);
      const n = await s.resolver(
        l,
        s.context,
        Ut(t || h.mount, i, s.criteriaMode, s.shouldUseNativeValidation),
      );
      return v(t), n;
    },
    ee = async (t) => {
      const { errors: n } = await p(t);
      if (t)
        for (const a of t) {
          const d = y(n, a);
          d ? A(r.errors, a, d) : O(r.errors, a);
        }
      else r.errors = n;
      return n;
    },
    J = async (t, n, a = { valid: !0 }) => {
      for (const d in t) {
        const c = t[d];
        if (c) {
          const { _f: u, ...g } = c;
          if (u) {
            const V = h.array.has(u.name),
              k = c._f && Mt(c._f);
            k && m.validatingFields && v([d], !0);
            const C = await tt(
              c,
              h.disabled,
              l,
              N,
              s.shouldUseNativeValidation && !n,
              V,
            );
            if (
              (k && m.validatingFields && v([d]),
              C[u.name] && ((a.valid = !1), n))
            )
              break;
            !n &&
              (y(C, u.name)
                ? V
                  ? pt(r.errors, C, u.name)
                  : A(r.errors, u.name, C[u.name])
                : O(r.errors, u.name));
          }
          !U(g) && (await J(g, n, a));
        }
      }
      return a.valid;
    },
    F = () => {
      for (const t of h.unMount) {
        const n = y(i, t);
        n &&
          (n._f.refs ? n._f.refs.every((a) => !De(a)) : !De(n._f.ref)) &&
          Ae(t);
      }
      h.unMount = new Set();
    },
    _ = (t, n) => !s.disabled && (t && n && A(l, t, n), !G(Le(), o)),
    D = (t, n, a) =>
      Tt(t, h, { ...(f.mount ? l : S(n) ? o : H(t) ? { [t]: n } : n) }, a, n),
    P = (t) => be(y(f.mount ? l : o, t, s.shouldUnregister ? y(o, t, []) : [])),
    B = (t, n, a = {}) => {
      const d = y(i, t);
      let c = n;
      if (d) {
        const u = d._f;
        u &&
          (!u.disabled && A(l, t, ct(n, u)),
          (c = he(u.ref) && M(n) ? "" : n),
          lt(u.ref)
            ? [...u.ref.options].forEach(
                (g) => (g.selected = c.includes(g.value)),
              )
            : u.refs
              ? fe(u.ref)
                ? u.refs.length > 1
                  ? u.refs.forEach(
                      (g) =>
                        (!g.defaultChecked || !g.disabled) &&
                        (g.checked = Array.isArray(c)
                          ? !!c.find((V) => V === g.value)
                          : c === g.value),
                    )
                  : u.refs[0] && (u.refs[0].checked = !!c)
                : u.refs.forEach((g) => (g.checked = g.value === c))
              : Oe(u.ref)
                ? (u.ref.value = "")
                : ((u.ref.value = c),
                  u.ref.type || b.state.next({ name: t, values: R(l) })));
      }
      (a.shouldDirty || a.shouldTouch) &&
        ie(t, c, a.shouldTouch, a.shouldDirty, !0),
        a.shouldValidate && Fe(t);
    },
    W = (t, n, a) => {
      for (const d in n) {
        const c = n[d],
          u = `${t}.${d}`,
          g = y(i, u);
        (h.array.has(t) || E(c) || (g && !g._f)) && !te(c)
          ? W(u, c, a)
          : B(u, c, a);
      }
    },
    Z = (t, n, a = {}) => {
      const d = y(i, t),
        c = h.array.has(t),
        u = R(n);
      A(l, t, u),
        c
          ? (b.array.next({ name: t, values: R(l) }),
            (m.isDirty || m.dirtyFields || w.isDirty || w.dirtyFields) &&
              a.shouldDirty &&
              b.state.next({
                name: t,
                dirtyFields: ae(o, l),
                isDirty: _(t, u),
              }))
          : d && !d._f && !M(u)
            ? W(t, u, a)
            : B(t, u, a),
        Ze(t, h) && b.state.next({ ...r }),
        b.state.next({ name: f.mount ? t : void 0, values: R(l) });
    },
    ne = async (t) => {
      f.mount = !0;
      const n = t.target;
      let a = n.name,
        d = !0;
      const c = y(i, a),
        u = (g) => {
          d =
            Number.isNaN(g) ||
            (te(g) && isNaN(g.getTime())) ||
            G(g, y(l, a, g));
        };
      if (c) {
        let g, V;
        const k = n.type ? Je(c._f) : wt(t),
          C = t.type === je.BLUR || t.type === je.FOCUS_OUT,
          At =
            (!Nt(c._f) && !s.resolver && !y(r.errors, a) && !c._f.deps) ||
            It(C, y(r.touchedFields, a), r.isSubmitted, X, ce),
          xe = Ze(a, h, C);
        A(l, a, k),
          C
            ? (c._f.onBlur && c._f.onBlur(t), x && x(0))
            : c._f.onChange && c._f.onChange(t);
        const we = ie(a, k, C),
          mt = !U(we) || xe;
        if ((!C && b.state.next({ name: a, type: t.type, values: R(l) }), At))
          return (
            (m.isValid || w.isValid) &&
              (s.mode === "onBlur" ? C && K() : C || K()),
            mt && b.state.next({ name: a, ...(xe ? {} : we) })
          );
        if ((!C && xe && b.state.next({ ...r }), s.resolver)) {
          const { errors: pe } = await p([a]);
          if ((u(k), d)) {
            const xt = Ge(r.errors, i, a),
              We = Ge(pe, i, xt.name || a);
            (g = We.error), (a = We.name), (V = U(pe));
          }
        } else
          v([a], !0),
            (g = (await tt(c, h.disabled, l, N, s.shouldUseNativeValidation))[
              a
            ]),
            v([a]),
            u(k),
            d &&
              (g ? (V = !1) : (m.isValid || w.isValid) && (V = await J(i, !0)));
        d && (c._f.deps && Fe(c._f.deps), Ve(a, V, g, we));
      }
    },
    de = (t, n) => {
      if (y(r.errors, n) && t.focus) return t.focus(), 1;
    },
    Fe = async (t, n = {}) => {
      let a, d;
      const c = oe(t);
      if (s.resolver) {
        const u = await ee(S(t) ? t : c);
        (a = U(u)), (d = t ? !c.some((g) => y(u, g)) : a);
      } else
        t
          ? ((d = (
              await Promise.all(
                c.map(async (u) => {
                  const g = y(i, u);
                  return await J(g && g._f ? { [u]: g } : g);
                }),
              )
            ).every(Boolean)),
            !(!d && !r.isValid) && K())
          : (d = a = await J(i));
      return (
        b.state.next({
          ...(!H(t) || ((m.isValid || w.isValid) && a !== r.isValid)
            ? {}
            : { name: t }),
          ...(s.resolver || !t ? { isValid: a } : {}),
          errors: r.errors,
        }),
        n.shouldFocus && !d && ue(i, de, t ? c : h.mount),
        d
      );
    },
    Le = (t) => {
      const n = { ...(f.mount ? l : o) };
      return S(t) ? n : H(t) ? y(n, t) : t.map((a) => y(n, a));
    },
    Ce = (t, n) => ({
      invalid: !!y((n || r).errors, t),
      isDirty: !!y((n || r).dirtyFields, t),
      error: y((n || r).errors, t),
      isValidating: !!y(r.validatingFields, t),
      isTouched: !!y((n || r).touchedFields, t),
    }),
    ht = (t) => {
      t && oe(t).forEach((n) => O(r.errors, n)),
        b.state.next({ errors: t ? r.errors : {} });
    },
    Re = (t, n, a) => {
      const d = (y(i, t, { _f: {} })._f || {}).ref,
        c = y(r.errors, t) || {},
        { ref: u, message: g, type: V, ...k } = c;
      A(r.errors, t, { ...k, ...n, ref: d }),
        b.state.next({ name: t, errors: r.errors, isValid: !1 }),
        a && a.shouldFocus && d && d.focus && d.focus();
    },
    gt = (t, n) =>
      q(t)
        ? b.state.subscribe({ next: (a) => t(D(void 0, n), a) })
        : D(t, n, !0),
    Ue = (t) =>
      b.state.subscribe({
        next: (n) => {
          Bt(t.name, n.name, t.exact) &&
            Pt(n, t.formState || m, Ft, t.reRenderRoot) &&
            t.callback({ values: { ...l }, ...r, ...n });
        },
      }).unsubscribe,
    vt = (t) => (
      (f.mount = !0), (w = { ...w, ...t.formState }), Ue({ ...t, formState: w })
    ),
    Ae = (t, n = {}) => {
      for (const a of t ? oe(t) : h.mount)
        h.mount.delete(a),
          h.array.delete(a),
          n.keepValue || (O(i, a), O(l, a)),
          !n.keepError && O(r.errors, a),
          !n.keepDirty && O(r.dirtyFields, a),
          !n.keepTouched && O(r.touchedFields, a),
          !n.keepIsValidating && O(r.validatingFields, a),
          !s.shouldUnregister && !n.keepDefaultValue && O(o, a);
      b.state.next({ values: R(l) }),
        b.state.next({ ...r, ...(n.keepDirty ? { isDirty: _() } : {}) }),
        !n.keepIsValid && K();
    },
    Me = ({ disabled: t, name: n }) => {
      ((j(t) && f.mount) || t || h.disabled.has(n)) &&
        (t ? h.disabled.add(n) : h.disabled.delete(n));
    },
    me = (t, n = {}) => {
      let a = y(i, t);
      const d = j(n.disabled) || j(s.disabled);
      return (
        A(i, t, {
          ...(a || {}),
          _f: {
            ...(a && a._f ? a._f : { ref: { name: t } }),
            name: t,
            mount: !0,
            ...n,
          },
        }),
        h.mount.add(t),
        a
          ? Me({ disabled: j(n.disabled) ? n.disabled : s.disabled, name: t })
          : se(t, !0, n.value),
        {
          ...(d ? { disabled: n.disabled || s.disabled } : {}),
          ...(s.progressive
            ? {
                required: !!n.required,
                min: le(n.min),
                max: le(n.max),
                minLength: le(n.minLength),
                maxLength: le(n.maxLength),
                pattern: le(n.pattern),
              }
            : {}),
          name: t,
          onChange: ne,
          onBlur: ne,
          ref: (c) => {
            if (c) {
              me(t, n), (a = y(i, t));
              const u =
                  (S(c.value) &&
                    c.querySelectorAll &&
                    c.querySelectorAll("input,select,textarea")[0]) ||
                  c,
                g = Lt(u),
                V = a._f.refs || [];
              if (g ? V.find((k) => k === u) : u === a._f.ref) return;
              A(i, t, {
                _f: {
                  ...a._f,
                  ...(g
                    ? {
                        refs: [
                          ...V.filter(De),
                          u,
                          ...(Array.isArray(y(o, t)) ? [{}] : []),
                        ],
                        ref: { type: u.type, name: t },
                      }
                    : { ref: u }),
                },
              }),
                se(t, !1, void 0, u);
            } else
              (a = y(i, t, {})),
                a._f && (a._f.mount = !1),
                (s.shouldUnregister || n.shouldUnregister) &&
                  !(Et(h.array, t) && f.action) &&
                  h.unMount.add(t);
          },
        }
      );
    },
    Ne = () => s.shouldFocusError && ue(i, de, h.mount),
    bt = (t) => {
      j(t) &&
        (b.state.next({ disabled: t }),
        ue(
          i,
          (n, a) => {
            const d = y(i, a);
            d &&
              ((n.disabled = d._f.disabled || t),
              Array.isArray(d._f.refs) &&
                d._f.refs.forEach((c) => {
                  c.disabled = d._f.disabled || t;
                }));
          },
          0,
          !1,
        ));
    },
    Pe = (t, n) => async (a) => {
      let d;
      a && (a.preventDefault && a.preventDefault(), a.persist && a.persist());
      let c = R(l);
      if ((b.state.next({ isSubmitting: !0 }), s.resolver)) {
        const { errors: u, values: g } = await p();
        (r.errors = u), (c = g);
      } else await J(i);
      if (h.disabled.size) for (const u of h.disabled) A(c, u, void 0);
      if ((O(r.errors, "root"), U(r.errors))) {
        b.state.next({ errors: {} });
        try {
          await t(c, a);
        } catch (u) {
          d = u;
        }
      } else n && (await n({ ...r.errors }, a)), Ne(), setTimeout(Ne);
      if (
        (b.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: U(r.errors) && !d,
          submitCount: r.submitCount + 1,
          errors: r.errors,
        }),
        d)
      )
        throw d;
    },
    _t = (t, n = {}) => {
      y(i, t) &&
        (S(n.defaultValue)
          ? Z(t, R(y(o, t)))
          : (Z(t, n.defaultValue), A(o, t, R(n.defaultValue))),
        n.keepTouched || O(r.touchedFields, t),
        n.keepDirty ||
          (O(r.dirtyFields, t),
          (r.isDirty = n.defaultValue ? _(t, R(y(o, t))) : _())),
        n.keepError || (O(r.errors, t), m.isValid && K()),
        b.state.next({ ...r }));
    },
    Be = (t, n = {}) => {
      const a = t ? R(t) : o,
        d = R(a),
        c = U(t),
        u = c ? o : d;
      if ((n.keepDefaultValues || (o = a), !n.keepValues)) {
        if (n.keepDirtyValues) {
          const g = new Set([...h.mount, ...Object.keys(ae(o, l))]);
          for (const V of Array.from(g))
            y(r.dirtyFields, V) ? A(u, V, y(l, V)) : Z(V, y(u, V));
        } else {
          if (ke && S(t))
            for (const g of h.mount) {
              const V = y(i, g);
              if (V && V._f) {
                const k = Array.isArray(V._f.refs) ? V._f.refs[0] : V._f.ref;
                if (he(k)) {
                  const C = k.closest("form");
                  if (C) {
                    C.reset();
                    break;
                  }
                }
              }
            }
          for (const g of h.mount) Z(g, y(u, g));
        }
        (l = R(u)),
          b.array.next({ values: { ...u } }),
          b.state.next({ values: { ...u } });
      }
      (h = {
        mount: n.keepDirtyValues ? h.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (f.mount = !m.isValid || !!n.keepIsValid || !!n.keepDirtyValues),
        (f.watch = !!s.shouldUnregister),
        b.state.next({
          submitCount: n.keepSubmitCount ? r.submitCount : 0,
          isDirty: c
            ? !1
            : n.keepDirty
              ? r.isDirty
              : !!(n.keepDefaultValues && !G(t, o)),
          isSubmitted: n.keepIsSubmitted ? r.isSubmitted : !1,
          dirtyFields: c
            ? {}
            : n.keepDirtyValues
              ? n.keepDefaultValues && l
                ? ae(o, l)
                : r.dirtyFields
              : n.keepDefaultValues && t
                ? ae(o, t)
                : n.keepDirty
                  ? r.dirtyFields
                  : {},
          touchedFields: n.keepTouched ? r.touchedFields : {},
          errors: n.keepErrors ? r.errors : {},
          isSubmitSuccessful: n.keepIsSubmitSuccessful
            ? r.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Ie = (t, n) => Be(q(t) ? t(l) : t, n),
    Vt = (t, n = {}) => {
      const a = y(i, t),
        d = a && a._f;
      if (d) {
        const c = d.refs ? d.refs[0] : d.ref;
        c.focus && (c.focus(), n.shouldSelect && q(c.select) && c.select());
      }
    },
    Ft = (t) => {
      r = { ...r, ...t };
    },
    qe = {
      control: {
        register: me,
        unregister: Ae,
        getFieldState: Ce,
        handleSubmit: Pe,
        setError: Re,
        _subscribe: Ue,
        _runSchema: p,
        _getWatch: D,
        _getDirty: _,
        _setValid: K,
        _setFieldArray: z,
        _setDisabledField: Me,
        _setErrors: T,
        _getFieldArray: P,
        _reset: Be,
        _resetDefaultValues: () =>
          q(s.defaultValues) &&
          s.defaultValues().then((t) => {
            Ie(t, s.resetOptions), b.state.next({ isLoading: !1 });
          }),
        _removeUnmounted: F,
        _disableForm: bt,
        _subjects: b,
        _proxyFormState: m,
        get _fields() {
          return i;
        },
        get _formValues() {
          return l;
        },
        get _state() {
          return f;
        },
        set _state(t) {
          f = t;
        },
        get _defaultValues() {
          return o;
        },
        get _names() {
          return h;
        },
        set _names(t) {
          h = t;
        },
        get _formState() {
          return r;
        },
        get _options() {
          return s;
        },
        set _options(t) {
          s = { ...s, ...t };
        },
      },
      subscribe: vt,
      trigger: Fe,
      register: me,
      handleSubmit: Pe,
      watch: gt,
      setValue: Z,
      getValues: Le,
      reset: Ie,
      resetField: _t,
      clearErrors: ht,
      unregister: Ae,
      setError: Re,
      setFocus: Vt,
      getFieldState: Ce,
    };
  return { ...qe, formControl: qe };
}
function Jt(e = {}) {
  const s = $.useRef(void 0),
    r = $.useRef(void 0),
    [i, o] = $.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: q(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      isReady: !1,
      defaultValues: q(e.defaultValues) ? void 0 : e.defaultValues,
    });
  s.current ||
    ((s.current = { ...(e.formControl ? e.formControl : $t(e)), formState: i }),
    e.formControl &&
      e.defaultValues &&
      !q(e.defaultValues) &&
      e.formControl.reset(e.defaultValues, e.resetOptions));
  const l = s.current.control;
  return (
    (l._options = e),
    Ot(() => {
      const f = l._subscribe({
        formState: l._proxyFormState,
        callback: () => o({ ...l._formState }),
        reRenderRoot: !0,
      });
      return o((h) => ({ ...h, isReady: !0 })), (l._formState.isReady = !0), f;
    }, [l]),
    $.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]),
    $.useEffect(() => {
      e.mode && (l._options.mode = e.mode),
        e.reValidateMode && (l._options.reValidateMode = e.reValidateMode),
        e.errors && !U(e.errors) && l._setErrors(e.errors);
    }, [l, e.errors, e.mode, e.reValidateMode]),
    $.useEffect(() => {
      e.shouldUnregister && l._subjects.state.next({ values: l._getWatch() });
    }, [l, e.shouldUnregister]),
    $.useEffect(() => {
      if (l._proxyFormState.isDirty) {
        const f = l._getDirty();
        f !== i.isDirty && l._subjects.state.next({ isDirty: f });
      }
    }, [l, i.isDirty]),
    $.useEffect(() => {
      e.values && !G(e.values, r.current)
        ? (l._reset(e.values, l._options.resetOptions),
          (r.current = e.values),
          o((f) => ({ ...f })))
        : l._resetDefaultValues();
    }, [l, e.values]),
    $.useEffect(() => {
      l._state.mount || (l._setValid(), (l._state.mount = !0)),
        l._state.watch &&
          ((l._state.watch = !1), l._subjects.state.next({ ...l._formState })),
        l._removeUnmounted();
    }),
    (s.current.formState = St(i, l)),
    s.current
  );
}
const rt = (e, s, r) => {
    if (e && "reportValidity" in e) {
      const i = y(r, s);
      e.setCustomValidity((i && i.message) || ""), e.reportValidity();
    }
  },
  yt = (e, s) => {
    for (const r in s.fields) {
      const i = s.fields[r];
      i && i.ref && "reportValidity" in i.ref
        ? rt(i.ref, r, e)
        : i && i.refs && i.refs.forEach((o) => rt(o, r, e));
    }
  },
  jt = (e, s) => {
    s.shouldUseNativeValidation && yt(e, s);
    const r = {};
    for (const i in e) {
      const o = y(s.fields, i),
        l = Object.assign(e[i] || {}, { ref: o && o.ref });
      if (Ht(s.names || Object.keys(e), i)) {
        const f = Object.assign({}, y(r, i));
        A(f, "root", l), A(r, i, f);
      } else A(r, i, l);
    }
    return r;
  },
  Ht = (e, s) => {
    const r = st(s);
    return e.some((i) => st(i).match(`^${r}\\.\\d+`));
  };
function st(e) {
  return e.replace(/\]|\[/g, "");
}
function Kt(e, s) {
  for (var r = {}; e.length; ) {
    var i = e[0],
      o = i.code,
      l = i.message,
      f = i.path.join(".");
    if (!r[f])
      if ("unionErrors" in i) {
        var h = i.unionErrors[0].errors[0];
        r[f] = { message: h.message, type: h.code };
      } else r[f] = { message: l, type: o };
    if (
      ("unionErrors" in i &&
        i.unionErrors.forEach(function (m) {
          return m.errors.forEach(function (w) {
            return e.push(w);
          });
        }),
      s)
    ) {
      var x = r[f].types,
        L = x && x[i.code];
      r[f] = at(f, s, r, o, L ? [].concat(L, i.message) : i.message);
    }
    e.shift();
  }
  return r;
}
function Qt(e, s, r) {
  return (
    r === void 0 && (r = {}),
    function (i, o, l) {
      try {
        return Promise.resolve(
          (function (f, h) {
            try {
              var x = Promise.resolve(
                e[r.mode === "sync" ? "parse" : "parseAsync"](i, s),
              ).then(function (L) {
                return (
                  l.shouldUseNativeValidation && yt({}, l),
                  { errors: {}, values: r.raw ? Object.assign({}, i) : L }
                );
              });
            } catch (L) {
              return h(L);
            }
            return x && x.then ? x.then(void 0, h) : x;
          })(0, function (f) {
            if (
              (function (h) {
                return Array.isArray(h == null ? void 0 : h.errors);
              })(f)
            )
              return {
                values: {},
                errors: jt(
                  Kt(
                    f.errors,
                    !l.shouldUseNativeValidation && l.criteriaMode === "all",
                  ),
                  l,
                ),
              };
            throw f;
          }),
        );
      } catch (f) {
        return Promise.reject(f);
      }
    }
  );
}
export { Qt as s, Jt as u };

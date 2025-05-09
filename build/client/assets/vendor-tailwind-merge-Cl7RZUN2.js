const Re = "-",
  lr = (e) => {
    const t = dr(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (n) => {
        const f = n.split(Re);
        return f[0] === "" && f.length !== 1 && f.shift(), We(f, t) || cr(n);
      },
      getConflictingClassGroupIds: (n, f) => {
        const i = r[n] || [];
        return f && o[n] ? [...i, ...o[n]] : i;
      },
    };
  },
  We = (e, t) => {
    var n;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      o = t.nextPart.get(r),
      s = o ? We(e.slice(1), o) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const a = e.join(Re);
    return (n = t.validators.find(({ validator: f }) => f(a))) == null
      ? void 0
      : n.classGroupId;
  },
  Ne = /^\[(.+)\]$/,
  cr = (e) => {
    if (Ne.test(e)) {
      const t = Ne.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  dr = (e) => {
    const { theme: t, classGroups: r } = e,
      o = { nextPart: new Map(), validators: [] };
    for (const s in r) Me(r[s], o, s, t);
    return o;
  },
  Me = (e, t, r, o) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const a = s === "" ? t : Ve(t, s);
        a.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (pr(s)) {
          Me(s(o), t, r, o);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([a, n]) => {
        Me(n, Ve(t, a), r, o);
      });
    });
  },
  Ve = (e, t) => {
    let r = e;
    return (
      t.split(Re).forEach((o) => {
        r.nextPart.has(o) ||
          r.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(o));
      }),
      r
    );
  },
  pr = (e) => e.isThemeGetter,
  ur = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      o = new Map();
    const s = (a, n) => {
      r.set(a, n), t++, t > e && ((t = 0), (o = r), (r = new Map()));
    };
    return {
      get(a) {
        let n = r.get(a);
        if (n !== void 0) return n;
        if ((n = o.get(a)) !== void 0) return s(a, n), n;
      },
      set(a, n) {
        r.has(a) ? r.set(a, n) : s(a, n);
      },
    };
  },
  Se = "!",
  Ce = ":",
  mr = Ce.length,
  fr = (e) => {
    const { prefix: t, experimentalParseClassName: r } = e;
    let o = (s) => {
      const a = [];
      let n = 0,
        f = 0,
        i = 0,
        x;
      for (let v = 0; v < s.length; v++) {
        let k = s[v];
        if (n === 0 && f === 0) {
          if (k === Ce) {
            a.push(s.slice(i, v)), (i = v + mr);
            continue;
          }
          if (k === "/") {
            x = v;
            continue;
          }
        }
        k === "[" ? n++ : k === "]" ? n-- : k === "(" ? f++ : k === ")" && f--;
      }
      const y = a.length === 0 ? s : s.substring(i),
        A = br(y),
        F = A !== y,
        j = x && x > i ? x - i : void 0;
      return {
        modifiers: a,
        hasImportantModifier: F,
        baseClassName: A,
        maybePostfixModifierPosition: j,
      };
    };
    if (t) {
      const s = t + Ce,
        a = o;
      o = (n) =>
        n.startsWith(s)
          ? a(n.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: n,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const s = o;
      o = (a) => r({ className: a, parseClassName: s });
    }
    return o;
  },
  br = (e) =>
    e.endsWith(Se)
      ? e.substring(0, e.length - 1)
      : e.startsWith(Se)
        ? e.substring(1)
        : e,
  gr = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const s = [];
      let a = [];
      return (
        o.forEach((n) => {
          n[0] === "[" || t[n] ? (s.push(...a.sort(), n), (a = [])) : a.push(n);
        }),
        s.push(...a.sort()),
        s
      );
    };
  },
  hr = (e) => ({
    cache: ur(e.cacheSize),
    parseClassName: fr(e),
    sortModifiers: gr(e),
    ...lr(e),
  }),
  wr = /\s+/,
  xr = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: o,
        getConflictingClassGroupIds: s,
        sortModifiers: a,
      } = t,
      n = [],
      f = e.trim().split(wr);
    let i = "";
    for (let x = f.length - 1; x >= 0; x -= 1) {
      const y = f[x],
        {
          isExternal: A,
          modifiers: F,
          hasImportantModifier: j,
          baseClassName: v,
          maybePostfixModifierPosition: k,
        } = r(y);
      if (A) {
        i = y + (i.length > 0 ? " " + i : i);
        continue;
      }
      let T = !!k,
        P = o(T ? v.substring(0, k) : v);
      if (!P) {
        if (!T) {
          i = y + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((P = o(v)), !P)) {
          i = y + (i.length > 0 ? " " + i : i);
          continue;
        }
        T = !1;
      }
      const B = a(F).join(":"),
        _ = j ? B + Se : B,
        E = _ + P;
      if (n.includes(E)) continue;
      n.push(E);
      const L = s(P, T);
      for (let m = 0; m < L.length; ++m) {
        const G = L[m];
        n.push(_ + G);
      }
      i = y + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function yr() {
  let e = 0,
    t,
    r,
    o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ue(t)) && (o && (o += " "), (o += r));
  return o;
}
const Ue = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ue(e[o])) && (r && (r += " "), (r += t));
  return r;
};
function $e(e, ...t) {
  let r,
    o,
    s,
    a = n;
  function n(i) {
    const x = t.reduce((y, A) => A(y), e());
    return (r = hr(x)), (o = r.cache.get), (s = r.cache.set), (a = f), f(i);
  }
  function f(i) {
    const x = o(i);
    if (x) return x;
    const y = xr(i, r);
    return s(i, y), y;
  }
  return function () {
    return a(yr.apply(null, arguments));
  };
}
const $ = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  qe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  He = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  vr = /^\d+\/\d+$/,
  kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  zr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Mr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Sr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Cr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  oe = (e) => vr.test(e),
  w = (e) => !!e && !Number.isNaN(Number(e)),
  Q = (e) => !!e && Number.isInteger(Number(e)),
  Fe = (e) => e.endsWith("%") && w(e.slice(0, -1)),
  J = (e) => kr.test(e),
  $r = () => !0,
  Ar = (e) => zr.test(e) && !Mr.test(e),
  Te = () => !1,
  Gr = (e) => Sr.test(e),
  Ir = (e) => Cr.test(e),
  Pr = (e) => !p(e) && !u(e),
  Rr = (e) => se(e, De, Te),
  p = (e) => qe.test(e),
  Y = (e) => se(e, Ke, Ar),
  ve = (e) => se(e, Wr, w),
  Tr = (e) => se(e, Je, Te),
  Er = (e) => se(e, Xe, Ir),
  Lr = (e) => se(e, Te, Gr),
  u = (e) => He.test(e),
  be = (e) => ne(e, Ke),
  Nr = (e) => ne(e, Ur),
  Vr = (e) => ne(e, Je),
  Fr = (e) => ne(e, De),
  jr = (e) => ne(e, Xe),
  _r = (e) => ne(e, qr, !0),
  se = (e, t, r) => {
    const o = qe.exec(e);
    return o ? (o[1] ? t(o[1]) : r(o[2])) : !1;
  },
  ne = (e, t, r = !1) => {
    const o = He.exec(e);
    return o ? (o[1] ? t(o[1]) : r) : !1;
  },
  Je = (e) => e === "position",
  Or = new Set(["image", "url"]),
  Xe = (e) => Or.has(e),
  Br = new Set(["length", "size", "percentage"]),
  De = (e) => Br.has(e),
  Ke = (e) => e === "length",
  Wr = (e) => e === "number",
  Ur = (e) => e === "family-name",
  qr = (e) => e === "shadow",
  Ae = () => {
    const e = $("color"),
      t = $("font"),
      r = $("text"),
      o = $("font-weight"),
      s = $("tracking"),
      a = $("leading"),
      n = $("breakpoint"),
      f = $("container"),
      i = $("spacing"),
      x = $("radius"),
      y = $("shadow"),
      A = $("inset-shadow"),
      F = $("drop-shadow"),
      j = $("blur"),
      v = $("perspective"),
      k = $("aspect"),
      T = $("ease"),
      P = $("animate"),
      B = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      _ = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      E = () => ["auto", "hidden", "clip", "visible", "scroll"],
      L = () => ["auto", "contain", "none"],
      m = () => [u, p, i],
      G = () => [oe, "full", "auto", ...m()],
      b = () => [Q, "none", "subgrid", u, p],
      V = () => ["auto", { span: ["full", Q, u, p] }, u, p],
      D = () => [Q, "auto", u, p],
      le = () => ["auto", "min", "max", "fr", u, p],
      H = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      W = () => ["start", "end", "center", "stretch"],
      N = () => ["auto", ...m()],
      R = () => [
        oe,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...m(),
      ],
      h = () => [e, u, p],
      O = () => [Fe, Y],
      d = () => ["", "none", "full", x, u, p],
      I = () => ["", w, be, Y],
      K = () => ["solid", "dashed", "dotted", "double"],
      ce = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ee = () => ["", "none", j, u, p],
      S = () => [
        "center",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
        u,
        p,
      ],
      C = () => ["none", w, u, p],
      U = () => ["none", w, u, p],
      re = () => [w, u, p],
      z = () => [oe, "full", ...m()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [J],
        breakpoint: [J],
        color: [$r],
        container: [J],
        "drop-shadow": [J],
        ease: ["in", "out", "in-out"],
        font: [Pr],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [J],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [J],
        shadow: [J],
        spacing: ["px", w],
        text: [J],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", oe, p, u, k] }],
        container: ["container"],
        columns: [{ columns: [w, p, u, f] }],
        "break-after": [{ "break-after": B() }],
        "break-before": [{ "break-before": B() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [..._(), p, u] }],
        overflow: [{ overflow: E() }],
        "overflow-x": [{ "overflow-x": E() }],
        "overflow-y": [{ "overflow-y": E() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: G() }],
        "inset-x": [{ "inset-x": G() }],
        "inset-y": [{ "inset-y": G() }],
        start: [{ start: G() }],
        end: [{ end: G() }],
        top: [{ top: G() }],
        right: [{ right: G() }],
        bottom: [{ bottom: G() }],
        left: [{ left: G() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Q, "auto", u, p] }],
        basis: [{ basis: [oe, "full", "auto", f, ...m()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [w, oe, "auto", "initial", "none", p] }],
        grow: [{ grow: ["", w, u, p] }],
        shrink: [{ shrink: ["", w, u, p] }],
        order: [{ order: [Q, "first", "last", "none", u, p] }],
        "grid-cols": [{ "grid-cols": b() }],
        "col-start-end": [{ col: V() }],
        "col-start": [{ "col-start": D() }],
        "col-end": [{ "col-end": D() }],
        "grid-rows": [{ "grid-rows": b() }],
        "row-start-end": [{ row: V() }],
        "row-start": [{ "row-start": D() }],
        "row-end": [{ "row-end": D() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": le() }],
        "auto-rows": [{ "auto-rows": le() }],
        gap: [{ gap: m() }],
        "gap-x": [{ "gap-x": m() }],
        "gap-y": [{ "gap-y": m() }],
        "justify-content": [{ justify: [...H(), "normal"] }],
        "justify-items": [{ "justify-items": [...W(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...W()] }],
        "align-content": [{ content: ["normal", ...H()] }],
        "align-items": [{ items: [...W(), "baseline"] }],
        "align-self": [{ self: ["auto", ...W(), "baseline"] }],
        "place-content": [{ "place-content": H() }],
        "place-items": [{ "place-items": [...W(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...W()] }],
        p: [{ p: m() }],
        px: [{ px: m() }],
        py: [{ py: m() }],
        ps: [{ ps: m() }],
        pe: [{ pe: m() }],
        pt: [{ pt: m() }],
        pr: [{ pr: m() }],
        pb: [{ pb: m() }],
        pl: [{ pl: m() }],
        m: [{ m: N() }],
        mx: [{ mx: N() }],
        my: [{ my: N() }],
        ms: [{ ms: N() }],
        me: [{ me: N() }],
        mt: [{ mt: N() }],
        mr: [{ mr: N() }],
        mb: [{ mb: N() }],
        ml: [{ ml: N() }],
        "space-x": [{ "space-x": m() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": m() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: R() }],
        w: [{ w: [f, "screen", ...R()] }],
        "min-w": [{ "min-w": [f, "screen", "none", ...R()] }],
        "max-w": [
          { "max-w": [f, "screen", "none", "prose", { screen: [n] }, ...R()] },
        ],
        h: [{ h: ["screen", ...R()] }],
        "min-h": [{ "min-h": ["screen", "none", ...R()] }],
        "max-h": [{ "max-h": ["screen", ...R()] }],
        "font-size": [{ text: ["base", r, be, Y] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, u, ve] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Fe,
              p,
            ],
          },
        ],
        "font-family": [{ font: [Nr, p, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, u, p] }],
        "line-clamp": [{ "line-clamp": [w, "none", u, ve] }],
        leading: [{ leading: [a, ...m()] }],
        "list-image": [{ "list-image": ["none", u, p] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", u, p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: h() }],
        "text-color": [{ text: h() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...K(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [w, "from-font", "auto", u, Y] },
        ],
        "text-decoration-color": [{ decoration: h() }],
        "underline-offset": [{ "underline-offset": [w, "auto", u, p] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: m() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              u,
              p,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", u, p] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [..._(), Vr, Tr] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Fr, Rr] }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Q,
                  u,
                  p,
                ],
                radial: ["", u, p],
                conic: [Q, u, p],
              },
              jr,
              Er,
            ],
          },
        ],
        "bg-color": [{ bg: h() }],
        "gradient-from-pos": [{ from: O() }],
        "gradient-via-pos": [{ via: O() }],
        "gradient-to-pos": [{ to: O() }],
        "gradient-from": [{ from: h() }],
        "gradient-via": [{ via: h() }],
        "gradient-to": [{ to: h() }],
        rounded: [{ rounded: d() }],
        "rounded-s": [{ "rounded-s": d() }],
        "rounded-e": [{ "rounded-e": d() }],
        "rounded-t": [{ "rounded-t": d() }],
        "rounded-r": [{ "rounded-r": d() }],
        "rounded-b": [{ "rounded-b": d() }],
        "rounded-l": [{ "rounded-l": d() }],
        "rounded-ss": [{ "rounded-ss": d() }],
        "rounded-se": [{ "rounded-se": d() }],
        "rounded-ee": [{ "rounded-ee": d() }],
        "rounded-es": [{ "rounded-es": d() }],
        "rounded-tl": [{ "rounded-tl": d() }],
        "rounded-tr": [{ "rounded-tr": d() }],
        "rounded-br": [{ "rounded-br": d() }],
        "rounded-bl": [{ "rounded-bl": d() }],
        "border-w": [{ border: I() }],
        "border-w-x": [{ "border-x": I() }],
        "border-w-y": [{ "border-y": I() }],
        "border-w-s": [{ "border-s": I() }],
        "border-w-e": [{ "border-e": I() }],
        "border-w-t": [{ "border-t": I() }],
        "border-w-r": [{ "border-r": I() }],
        "border-w-b": [{ "border-b": I() }],
        "border-w-l": [{ "border-l": I() }],
        "divide-x": [{ "divide-x": I() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": I() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...K(), "hidden", "none"] }],
        "divide-style": [{ divide: [...K(), "hidden", "none"] }],
        "border-color": [{ border: h() }],
        "border-color-x": [{ "border-x": h() }],
        "border-color-y": [{ "border-y": h() }],
        "border-color-s": [{ "border-s": h() }],
        "border-color-e": [{ "border-e": h() }],
        "border-color-t": [{ "border-t": h() }],
        "border-color-r": [{ "border-r": h() }],
        "border-color-b": [{ "border-b": h() }],
        "border-color-l": [{ "border-l": h() }],
        "divide-color": [{ divide: h() }],
        "outline-style": [{ outline: [...K(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [w, u, p] }],
        "outline-w": [{ outline: ["", w, be, Y] }],
        "outline-color": [{ outline: [e] }],
        shadow: [{ shadow: ["", "none", y, _r, Lr] }],
        "shadow-color": [{ shadow: h() }],
        "inset-shadow": [{ "inset-shadow": ["none", u, p, A] }],
        "inset-shadow-color": [{ "inset-shadow": h() }],
        "ring-w": [{ ring: I() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: h() }],
        "ring-offset-w": [{ "ring-offset": [w, Y] }],
        "ring-offset-color": [{ "ring-offset": h() }],
        "inset-ring-w": [{ "inset-ring": I() }],
        "inset-ring-color": [{ "inset-ring": h() }],
        opacity: [{ opacity: [w, u, p] }],
        "mix-blend": [
          { "mix-blend": [...ce(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ce() }],
        filter: [{ filter: ["", "none", u, p] }],
        blur: [{ blur: ee() }],
        brightness: [{ brightness: [w, u, p] }],
        contrast: [{ contrast: [w, u, p] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", F, u, p] }],
        grayscale: [{ grayscale: ["", w, u, p] }],
        "hue-rotate": [{ "hue-rotate": [w, u, p] }],
        invert: [{ invert: ["", w, u, p] }],
        saturate: [{ saturate: [w, u, p] }],
        sepia: [{ sepia: ["", w, u, p] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", u, p] }],
        "backdrop-blur": [{ "backdrop-blur": ee() }],
        "backdrop-brightness": [{ "backdrop-brightness": [w, u, p] }],
        "backdrop-contrast": [{ "backdrop-contrast": [w, u, p] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", w, u, p] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [w, u, p] }],
        "backdrop-invert": [{ "backdrop-invert": ["", w, u, p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [w, u, p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [w, u, p] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", w, u, p] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": m() }],
        "border-spacing-x": [{ "border-spacing-x": m() }],
        "border-spacing-y": [{ "border-spacing-y": m() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              u,
              p,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [w, "initial", u, p] }],
        ease: [{ ease: ["linear", "initial", T, u, p] }],
        delay: [{ delay: [w, u, p] }],
        animate: [{ animate: ["none", P, u, p] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [v, u, p] }],
        "perspective-origin": [{ "perspective-origin": S() }],
        rotate: [{ rotate: C() }],
        "rotate-x": [{ "rotate-x": C() }],
        "rotate-y": [{ "rotate-y": C() }],
        "rotate-z": [{ "rotate-z": C() }],
        scale: [{ scale: U() }],
        "scale-x": [{ "scale-x": U() }],
        "scale-y": [{ "scale-y": U() }],
        "scale-z": [{ "scale-z": U() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: re() }],
        "skew-x": [{ "skew-x": re() }],
        "skew-y": [{ "skew-y": re() }],
        transform: [{ transform: [u, p, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: S() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: z() }],
        "translate-x": [{ "translate-x": z() }],
        "translate-y": [{ "translate-y": z() }],
        "translate-z": [{ "translate-z": z() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: h() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: h() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              u,
              p,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": m() }],
        "scroll-mx": [{ "scroll-mx": m() }],
        "scroll-my": [{ "scroll-my": m() }],
        "scroll-ms": [{ "scroll-ms": m() }],
        "scroll-me": [{ "scroll-me": m() }],
        "scroll-mt": [{ "scroll-mt": m() }],
        "scroll-mr": [{ "scroll-mr": m() }],
        "scroll-mb": [{ "scroll-mb": m() }],
        "scroll-ml": [{ "scroll-ml": m() }],
        "scroll-p": [{ "scroll-p": m() }],
        "scroll-px": [{ "scroll-px": m() }],
        "scroll-py": [{ "scroll-py": m() }],
        "scroll-ps": [{ "scroll-ps": m() }],
        "scroll-pe": [{ "scroll-pe": m() }],
        "scroll-pt": [{ "scroll-pt": m() }],
        "scroll-pr": [{ "scroll-pr": m() }],
        "scroll-pb": [{ "scroll-pb": m() }],
        "scroll-pl": [{ "scroll-pl": m() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", u, p] },
        ],
        fill: [{ fill: ["none", ...h()] }],
        "stroke-w": [{ stroke: [w, be, Y, ve] }],
        stroke: [{ stroke: ["none", ...h()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**",
      ],
    };
  },
  Hr = (
    e,
    {
      cacheSize: t,
      prefix: r,
      experimentalParseClassName: o,
      extend: s = {},
      override: a = {},
    },
  ) => (
    pe(e, "cacheSize", t),
    pe(e, "prefix", r),
    pe(e, "experimentalParseClassName", o),
    ge(e.theme, a.theme),
    ge(e.classGroups, a.classGroups),
    ge(e.conflictingClassGroups, a.conflictingClassGroups),
    ge(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers),
    pe(e, "orderSensitiveModifiers", a.orderSensitiveModifiers),
    he(e.theme, s.theme),
    he(e.classGroups, s.classGroups),
    he(e.conflictingClassGroups, s.conflictingClassGroups),
    he(e.conflictingClassGroupModifiers, s.conflictingClassGroupModifiers),
    Qe(e, s, "orderSensitiveModifiers"),
    e
  ),
  pe = (e, t, r) => {
    r !== void 0 && (e[t] = r);
  },
  ge = (e, t) => {
    if (t) for (const r in t) pe(e, r, t[r]);
  },
  he = (e, t) => {
    if (t) for (const r in t) Qe(e, t, r);
  },
  Qe = (e, t, r) => {
    const o = t[r];
    o !== void 0 && (e[r] = e[r] ? e[r].concat(o) : o);
  },
  $o = (e, ...t) =>
    typeof e == "function" ? $e(Ae, e, ...t) : $e(() => Hr(Ae(), e), ...t),
  Ao = $e(Ae),
  Ee = "-",
  Jr = (e) => {
    const t = Dr(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
    return {
      getClassGroupId: (n) => {
        const f = n.split(Ee);
        return f[0] === "" && f.length !== 1 && f.shift(), Ye(f, t) || Xr(n);
      },
      getConflictingClassGroupIds: (n, f) => {
        const i = r[n] || [];
        return f && o[n] ? [...i, ...o[n]] : i;
      },
    };
  },
  Ye = (e, t) => {
    var n;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
      o = t.nextPart.get(r),
      s = o ? Ye(e.slice(1), o) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const a = e.join(Ee);
    return (n = t.validators.find(({ validator: f }) => f(a))) == null
      ? void 0
      : n.classGroupId;
  },
  je = /^\[(.+)\]$/,
  Xr = (e) => {
    if (je.test(e)) {
      const t = je.exec(e)[1],
        r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  Dr = (e) => {
    const { theme: t, classGroups: r } = e,
      o = { nextPart: new Map(), validators: [] };
    for (const s in r) Ge(r[s], o, s, t);
    return o;
  },
  Ge = (e, t, r, o) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const a = s === "" ? t : _e(t, s);
        a.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (Kr(s)) {
          Ge(s(o), t, r, o);
          return;
        }
        t.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([a, n]) => {
        Ge(n, _e(t, a), r, o);
      });
    });
  },
  _e = (e, t) => {
    let r = e;
    return (
      t.split(Ee).forEach((o) => {
        r.nextPart.has(o) ||
          r.nextPart.set(o, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(o));
      }),
      r
    );
  },
  Kr = (e) => e.isThemeGetter,
  Qr = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      o = new Map();
    const s = (a, n) => {
      r.set(a, n), t++, t > e && ((t = 0), (o = r), (r = new Map()));
    };
    return {
      get(a) {
        let n = r.get(a);
        if (n !== void 0) return n;
        if ((n = o.get(a)) !== void 0) return s(a, n), n;
      },
      set(a, n) {
        r.has(a) ? r.set(a, n) : s(a, n);
      },
    };
  },
  Ie = "!",
  Pe = ":",
  Yr = Pe.length,
  Zr = (e) => {
    const { prefix: t, experimentalParseClassName: r } = e;
    let o = (s) => {
      const a = [];
      let n = 0,
        f = 0,
        i = 0,
        x;
      for (let v = 0; v < s.length; v++) {
        let k = s[v];
        if (n === 0 && f === 0) {
          if (k === Pe) {
            a.push(s.slice(i, v)), (i = v + Yr);
            continue;
          }
          if (k === "/") {
            x = v;
            continue;
          }
        }
        k === "[" ? n++ : k === "]" ? n-- : k === "(" ? f++ : k === ")" && f--;
      }
      const y = a.length === 0 ? s : s.substring(i),
        A = eo(y),
        F = A !== y,
        j = x && x > i ? x - i : void 0;
      return {
        modifiers: a,
        hasImportantModifier: F,
        baseClassName: A,
        maybePostfixModifierPosition: j,
      };
    };
    if (t) {
      const s = t + Pe,
        a = o;
      o = (n) =>
        n.startsWith(s)
          ? a(n.substring(s.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: n,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (r) {
      const s = o;
      o = (a) => r({ className: a, parseClassName: s });
    }
    return o;
  },
  eo = (e) =>
    e.endsWith(Ie)
      ? e.substring(0, e.length - 1)
      : e.startsWith(Ie)
        ? e.substring(1)
        : e,
  ro = (e) => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
    return (o) => {
      if (o.length <= 1) return o;
      const s = [];
      let a = [];
      return (
        o.forEach((n) => {
          n[0] === "[" || t[n] ? (s.push(...a.sort(), n), (a = [])) : a.push(n);
        }),
        s.push(...a.sort()),
        s
      );
    };
  },
  oo = (e) => ({
    cache: Qr(e.cacheSize),
    parseClassName: Zr(e),
    sortModifiers: ro(e),
    ...Jr(e),
  }),
  to = /\s+/,
  so = (e, t) => {
    const {
        parseClassName: r,
        getClassGroupId: o,
        getConflictingClassGroupIds: s,
        sortModifiers: a,
      } = t,
      n = [],
      f = e.trim().split(to);
    let i = "";
    for (let x = f.length - 1; x >= 0; x -= 1) {
      const y = f[x],
        {
          isExternal: A,
          modifiers: F,
          hasImportantModifier: j,
          baseClassName: v,
          maybePostfixModifierPosition: k,
        } = r(y);
      if (A) {
        i = y + (i.length > 0 ? " " + i : i);
        continue;
      }
      let T = !!k,
        P = o(T ? v.substring(0, k) : v);
      if (!P) {
        if (!T) {
          i = y + (i.length > 0 ? " " + i : i);
          continue;
        }
        if (((P = o(v)), !P)) {
          i = y + (i.length > 0 ? " " + i : i);
          continue;
        }
        T = !1;
      }
      const B = a(F).join(":"),
        _ = j ? B + Ie : B,
        E = _ + P;
      if (n.includes(E)) continue;
      n.push(E);
      const L = s(P, T);
      for (let m = 0; m < L.length; ++m) {
        const G = L[m];
        n.push(_ + G);
      }
      i = y + (i.length > 0 ? " " + i : i);
    }
    return i;
  };
function no() {
  let e = 0,
    t,
    r,
    o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ze(t)) && (o && (o += " "), (o += r));
  return o;
}
const Ze = (e) => {
  if (typeof e == "string") return e;
  let t,
    r = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Ze(e[o])) && (r && (r += " "), (r += t));
  return r;
};
function ao(e, ...t) {
  let r,
    o,
    s,
    a = n;
  function n(i) {
    const x = t.reduce((y, A) => A(y), e());
    return (r = oo(x)), (o = r.cache.get), (s = r.cache.set), (a = f), f(i);
  }
  function f(i) {
    const x = o(i);
    if (x) return x;
    const y = so(i, r);
    return s(i, y), y;
  }
  return function () {
    return a(no.apply(null, arguments));
  };
}
const M = (e) => {
    const t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  er = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  rr = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  io = /^\d+\/\d+$/,
  lo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  co =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  po = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  uo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  mo =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  te = (e) => io.test(e),
  g = (e) => !!e && !Number.isNaN(Number(e)),
  X = (e) => !!e && Number.isInteger(Number(e)),
  ke = (e) => e.endsWith("%") && g(e.slice(0, -1)),
  q = (e) => lo.test(e),
  fo = () => !0,
  bo = (e) => co.test(e) && !po.test(e),
  or = () => !1,
  go = (e) => uo.test(e),
  ho = (e) => mo.test(e),
  wo = (e) => !l(e) && !c(e),
  xo = (e) => ae(e, nr, or),
  l = (e) => er.test(e),
  Z = (e) => ae(e, ar, bo),
  ze = (e) => ae(e, Mo, g),
  Oe = (e) => ae(e, tr, or),
  yo = (e) => ae(e, sr, ho),
  we = (e) => ae(e, ir, go),
  c = (e) => rr.test(e),
  de = (e) => ie(e, ar),
  vo = (e) => ie(e, So),
  Be = (e) => ie(e, tr),
  ko = (e) => ie(e, nr),
  zo = (e) => ie(e, sr),
  xe = (e) => ie(e, ir, !0),
  ae = (e, t, r) => {
    const o = er.exec(e);
    return o ? (o[1] ? t(o[1]) : r(o[2])) : !1;
  },
  ie = (e, t, r = !1) => {
    const o = rr.exec(e);
    return o ? (o[1] ? t(o[1]) : r) : !1;
  },
  tr = (e) => e === "position" || e === "percentage",
  sr = (e) => e === "image" || e === "url",
  nr = (e) => e === "length" || e === "size" || e === "bg-size",
  ar = (e) => e === "length",
  Mo = (e) => e === "number",
  So = (e) => e === "family-name",
  ir = (e) => e === "shadow",
  Co = () => {
    const e = M("color"),
      t = M("font"),
      r = M("text"),
      o = M("font-weight"),
      s = M("tracking"),
      a = M("leading"),
      n = M("breakpoint"),
      f = M("container"),
      i = M("spacing"),
      x = M("radius"),
      y = M("shadow"),
      A = M("inset-shadow"),
      F = M("text-shadow"),
      j = M("drop-shadow"),
      v = M("blur"),
      k = M("perspective"),
      T = M("aspect"),
      P = M("ease"),
      B = M("animate"),
      _ = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      E = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      L = () => [...E(), c, l],
      m = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", "contain", "none"],
      b = () => [c, l, i],
      V = () => [te, "full", "auto", ...b()],
      D = () => [X, "none", "subgrid", c, l],
      le = () => ["auto", { span: ["full", X, c, l] }, X, c, l],
      H = () => [X, "auto", c, l],
      W = () => ["auto", "min", "max", "fr", c, l],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      R = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      h = () => ["auto", ...b()],
      O = () => [
        te,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...b(),
      ],
      d = () => [e, c, l],
      I = () => [...E(), Be, Oe, { position: [c, l] }],
      K = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      ce = () => ["auto", "cover", "contain", ko, xo, { size: [c, l] }],
      ee = () => [ke, de, Z],
      S = () => ["", "none", "full", x, c, l],
      C = () => ["", g, de, Z],
      U = () => ["solid", "dashed", "dotted", "double"],
      re = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      z = () => [g, ke, Be, Oe],
      Le = () => ["", "none", v, c, l],
      ue = () => ["none", g, c, l],
      me = () => ["none", g, c, l],
      ye = () => [g, c, l],
      fe = () => [te, "full", ...b()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [q],
        breakpoint: [q],
        color: [fo],
        container: [q],
        "drop-shadow": [q],
        ease: ["in", "out", "in-out"],
        font: [wo],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [q],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [q],
        shadow: [q],
        spacing: ["px", g],
        text: [q],
        "text-shadow": [q],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", te, l, c, T] }],
        container: ["container"],
        columns: [{ columns: [g, l, c, f] }],
        "break-after": [{ "break-after": _() }],
        "break-before": [{ "break-before": _() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: L() }],
        overflow: [{ overflow: m() }],
        "overflow-x": [{ "overflow-x": m() }],
        "overflow-y": [{ "overflow-y": m() }],
        overscroll: [{ overscroll: G() }],
        "overscroll-x": [{ "overscroll-x": G() }],
        "overscroll-y": [{ "overscroll-y": G() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: V() }],
        "inset-x": [{ "inset-x": V() }],
        "inset-y": [{ "inset-y": V() }],
        start: [{ start: V() }],
        end: [{ end: V() }],
        top: [{ top: V() }],
        right: [{ right: V() }],
        bottom: [{ bottom: V() }],
        left: [{ left: V() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [X, "auto", c, l] }],
        basis: [{ basis: [te, "full", "auto", f, ...b()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [g, te, "auto", "initial", "none", l] }],
        grow: [{ grow: ["", g, c, l] }],
        shrink: [{ shrink: ["", g, c, l] }],
        order: [{ order: [X, "first", "last", "none", c, l] }],
        "grid-cols": [{ "grid-cols": D() }],
        "col-start-end": [{ col: le() }],
        "col-start": [{ "col-start": H() }],
        "col-end": [{ "col-end": H() }],
        "grid-rows": [{ "grid-rows": D() }],
        "row-start-end": [{ row: le() }],
        "row-start": [{ "row-start": H() }],
        "row-end": [{ "row-end": H() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": W() }],
        "auto-rows": [{ "auto-rows": W() }],
        gap: [{ gap: b() }],
        "gap-x": [{ "gap-x": b() }],
        "gap-y": [{ "gap-y": b() }],
        "justify-content": [{ justify: [...N(), "normal"] }],
        "justify-items": [{ "justify-items": [...R(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...R()] }],
        "align-content": [{ content: ["normal", ...N()] }],
        "align-items": [{ items: [...R(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...R(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": N() }],
        "place-items": [{ "place-items": [...R(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...R()] }],
        p: [{ p: b() }],
        px: [{ px: b() }],
        py: [{ py: b() }],
        ps: [{ ps: b() }],
        pe: [{ pe: b() }],
        pt: [{ pt: b() }],
        pr: [{ pr: b() }],
        pb: [{ pb: b() }],
        pl: [{ pl: b() }],
        m: [{ m: h() }],
        mx: [{ mx: h() }],
        my: [{ my: h() }],
        ms: [{ ms: h() }],
        me: [{ me: h() }],
        mt: [{ mt: h() }],
        mr: [{ mr: h() }],
        mb: [{ mb: h() }],
        ml: [{ ml: h() }],
        "space-x": [{ "space-x": b() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": b() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: O() }],
        w: [{ w: [f, "screen", ...O()] }],
        "min-w": [{ "min-w": [f, "screen", "none", ...O()] }],
        "max-w": [
          { "max-w": [f, "screen", "none", "prose", { screen: [n] }, ...O()] },
        ],
        h: [{ h: ["screen", ...O()] }],
        "min-h": [{ "min-h": ["screen", "none", ...O()] }],
        "max-h": [{ "max-h": ["screen", ...O()] }],
        "font-size": [{ text: ["base", r, de, Z] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [o, c, ze] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ke,
              l,
            ],
          },
        ],
        "font-family": [{ font: [vo, l, t] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [s, c, l] }],
        "line-clamp": [{ "line-clamp": [g, "none", c, ze] }],
        leading: [{ leading: [a, ...b()] }],
        "list-image": [{ "list-image": ["none", c, l] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", c, l] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: d() }],
        "text-color": [{ text: d() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [g, "from-font", "auto", c, Z] },
        ],
        "text-decoration-color": [{ decoration: d() }],
        "underline-offset": [{ "underline-offset": [g, "auto", c, l] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: b() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              c,
              l,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", c, l] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: I() }],
        "bg-repeat": [{ bg: K() }],
        "bg-size": [{ bg: ce() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  X,
                  c,
                  l,
                ],
                radial: ["", c, l],
                conic: [X, c, l],
              },
              zo,
              yo,
            ],
          },
        ],
        "bg-color": [{ bg: d() }],
        "gradient-from-pos": [{ from: ee() }],
        "gradient-via-pos": [{ via: ee() }],
        "gradient-to-pos": [{ to: ee() }],
        "gradient-from": [{ from: d() }],
        "gradient-via": [{ via: d() }],
        "gradient-to": [{ to: d() }],
        rounded: [{ rounded: S() }],
        "rounded-s": [{ "rounded-s": S() }],
        "rounded-e": [{ "rounded-e": S() }],
        "rounded-t": [{ "rounded-t": S() }],
        "rounded-r": [{ "rounded-r": S() }],
        "rounded-b": [{ "rounded-b": S() }],
        "rounded-l": [{ "rounded-l": S() }],
        "rounded-ss": [{ "rounded-ss": S() }],
        "rounded-se": [{ "rounded-se": S() }],
        "rounded-ee": [{ "rounded-ee": S() }],
        "rounded-es": [{ "rounded-es": S() }],
        "rounded-tl": [{ "rounded-tl": S() }],
        "rounded-tr": [{ "rounded-tr": S() }],
        "rounded-br": [{ "rounded-br": S() }],
        "rounded-bl": [{ "rounded-bl": S() }],
        "border-w": [{ border: C() }],
        "border-w-x": [{ "border-x": C() }],
        "border-w-y": [{ "border-y": C() }],
        "border-w-s": [{ "border-s": C() }],
        "border-w-e": [{ "border-e": C() }],
        "border-w-t": [{ "border-t": C() }],
        "border-w-r": [{ "border-r": C() }],
        "border-w-b": [{ "border-b": C() }],
        "border-w-l": [{ "border-l": C() }],
        "divide-x": [{ "divide-x": C() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": C() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...U(), "hidden", "none"] }],
        "divide-style": [{ divide: [...U(), "hidden", "none"] }],
        "border-color": [{ border: d() }],
        "border-color-x": [{ "border-x": d() }],
        "border-color-y": [{ "border-y": d() }],
        "border-color-s": [{ "border-s": d() }],
        "border-color-e": [{ "border-e": d() }],
        "border-color-t": [{ "border-t": d() }],
        "border-color-r": [{ "border-r": d() }],
        "border-color-b": [{ "border-b": d() }],
        "border-color-l": [{ "border-l": d() }],
        "divide-color": [{ divide: d() }],
        "outline-style": [{ outline: [...U(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [g, c, l] }],
        "outline-w": [{ outline: ["", g, de, Z] }],
        "outline-color": [{ outline: d() }],
        shadow: [{ shadow: ["", "none", y, xe, we] }],
        "shadow-color": [{ shadow: d() }],
        "inset-shadow": [{ "inset-shadow": ["none", A, xe, we] }],
        "inset-shadow-color": [{ "inset-shadow": d() }],
        "ring-w": [{ ring: C() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: d() }],
        "ring-offset-w": [{ "ring-offset": [g, Z] }],
        "ring-offset-color": [{ "ring-offset": d() }],
        "inset-ring-w": [{ "inset-ring": C() }],
        "inset-ring-color": [{ "inset-ring": d() }],
        "text-shadow": [{ "text-shadow": ["none", F, xe, we] }],
        "text-shadow-color": [{ "text-shadow": d() }],
        opacity: [{ opacity: [g, c, l] }],
        "mix-blend": [
          { "mix-blend": [...re(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": re() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [g] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": z() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": z() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": d() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": d() }],
        "mask-image-t-from-pos": [{ "mask-t-from": z() }],
        "mask-image-t-to-pos": [{ "mask-t-to": z() }],
        "mask-image-t-from-color": [{ "mask-t-from": d() }],
        "mask-image-t-to-color": [{ "mask-t-to": d() }],
        "mask-image-r-from-pos": [{ "mask-r-from": z() }],
        "mask-image-r-to-pos": [{ "mask-r-to": z() }],
        "mask-image-r-from-color": [{ "mask-r-from": d() }],
        "mask-image-r-to-color": [{ "mask-r-to": d() }],
        "mask-image-b-from-pos": [{ "mask-b-from": z() }],
        "mask-image-b-to-pos": [{ "mask-b-to": z() }],
        "mask-image-b-from-color": [{ "mask-b-from": d() }],
        "mask-image-b-to-color": [{ "mask-b-to": d() }],
        "mask-image-l-from-pos": [{ "mask-l-from": z() }],
        "mask-image-l-to-pos": [{ "mask-l-to": z() }],
        "mask-image-l-from-color": [{ "mask-l-from": d() }],
        "mask-image-l-to-color": [{ "mask-l-to": d() }],
        "mask-image-x-from-pos": [{ "mask-x-from": z() }],
        "mask-image-x-to-pos": [{ "mask-x-to": z() }],
        "mask-image-x-from-color": [{ "mask-x-from": d() }],
        "mask-image-x-to-color": [{ "mask-x-to": d() }],
        "mask-image-y-from-pos": [{ "mask-y-from": z() }],
        "mask-image-y-to-pos": [{ "mask-y-to": z() }],
        "mask-image-y-from-color": [{ "mask-y-from": d() }],
        "mask-image-y-to-color": [{ "mask-y-to": d() }],
        "mask-image-radial": [{ "mask-radial": [c, l] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": z() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": z() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": d() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": d() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": E() }],
        "mask-image-conic-pos": [{ "mask-conic": [g] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": z() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": z() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": d() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": d() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: I() }],
        "mask-repeat": [{ mask: K() }],
        "mask-size": [{ mask: ce() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", c, l] }],
        filter: [{ filter: ["", "none", c, l] }],
        blur: [{ blur: Le() }],
        brightness: [{ brightness: [g, c, l] }],
        contrast: [{ contrast: [g, c, l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", j, xe, we] }],
        "drop-shadow-color": [{ "drop-shadow": d() }],
        grayscale: [{ grayscale: ["", g, c, l] }],
        "hue-rotate": [{ "hue-rotate": [g, c, l] }],
        invert: [{ invert: ["", g, c, l] }],
        saturate: [{ saturate: [g, c, l] }],
        sepia: [{ sepia: ["", g, c, l] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", c, l] }],
        "backdrop-blur": [{ "backdrop-blur": Le() }],
        "backdrop-brightness": [{ "backdrop-brightness": [g, c, l] }],
        "backdrop-contrast": [{ "backdrop-contrast": [g, c, l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", g, c, l] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g, c, l] }],
        "backdrop-invert": [{ "backdrop-invert": ["", g, c, l] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g, c, l] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g, c, l] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", g, c, l] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": b() }],
        "border-spacing-x": [{ "border-spacing-x": b() }],
        "border-spacing-y": [{ "border-spacing-y": b() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              c,
              l,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [g, "initial", c, l] }],
        ease: [{ ease: ["linear", "initial", P, c, l] }],
        delay: [{ delay: [g, c, l] }],
        animate: [{ animate: ["none", B, c, l] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [k, c, l] }],
        "perspective-origin": [{ "perspective-origin": L() }],
        rotate: [{ rotate: ue() }],
        "rotate-x": [{ "rotate-x": ue() }],
        "rotate-y": [{ "rotate-y": ue() }],
        "rotate-z": [{ "rotate-z": ue() }],
        scale: [{ scale: me() }],
        "scale-x": [{ "scale-x": me() }],
        "scale-y": [{ "scale-y": me() }],
        "scale-z": [{ "scale-z": me() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ye() }],
        "skew-x": [{ "skew-x": ye() }],
        "skew-y": [{ "skew-y": ye() }],
        transform: [{ transform: [c, l, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: L() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: fe() }],
        "translate-x": [{ "translate-x": fe() }],
        "translate-y": [{ "translate-y": fe() }],
        "translate-z": [{ "translate-z": fe() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: d() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: d() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              c,
              l,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": b() }],
        "scroll-mx": [{ "scroll-mx": b() }],
        "scroll-my": [{ "scroll-my": b() }],
        "scroll-ms": [{ "scroll-ms": b() }],
        "scroll-me": [{ "scroll-me": b() }],
        "scroll-mt": [{ "scroll-mt": b() }],
        "scroll-mr": [{ "scroll-mr": b() }],
        "scroll-mb": [{ "scroll-mb": b() }],
        "scroll-ml": [{ "scroll-ml": b() }],
        "scroll-p": [{ "scroll-p": b() }],
        "scroll-px": [{ "scroll-px": b() }],
        "scroll-py": [{ "scroll-py": b() }],
        "scroll-ps": [{ "scroll-ps": b() }],
        "scroll-pe": [{ "scroll-pe": b() }],
        "scroll-pt": [{ "scroll-pt": b() }],
        "scroll-pr": [{ "scroll-pr": b() }],
        "scroll-pb": [{ "scroll-pb": b() }],
        "scroll-pl": [{ "scroll-pl": b() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", c, l] },
        ],
        fill: [{ fill: ["none", ...d()] }],
        "stroke-w": [{ stroke: [g, de, Z, ze] }],
        stroke: [{ stroke: ["none", ...d()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Go = ao(Co);
export { Go as a, no as b, $o as e, Ao as t };

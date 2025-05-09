import { L as B, w as Q } from "./LuIcon-CuzLAvEj.js";
import {
  ak as T,
  al as S,
  am as z,
  a as c,
  an as R,
  ao as V,
  j as e,
  ap as E,
  aq as w,
  ar as G,
  aj as H,
} from "./vendor-react-BOaTbF0U.js";
import {
  a as J,
  b as X,
  d as k,
  A as $,
  m as Y,
  e as _,
  H as Z,
  i as ee,
  s as M,
} from "./vendor-react-dom-CNmmZLPy.js";
import { c as se } from "./entry.client-K8h_9uke.js";
import {
  t as h,
  s as te,
  i as re,
  c as ae,
  W as oe,
  D as ne,
  w as le,
  u as ie,
  a as de,
  L as l,
  b as ce,
  d as ue,
  l as fe,
  e as L,
} from "./ListTabs-CVA7tT73.js";
import "./vendor-tailwind-merge-Cl7RZUN2.js";
import "./vendor-chance-vhTGba_j.js";
import "./vendor-zod-C4bLmoCR.js";
import "./vendor-react-hook-form-DyMOlGJB.js";
const me = ({ wordSlugs: r, enabled: a = !0 }) =>
    T({
      queryKey: ["getMultipleWordsStatus", r],
      queryFn: () => h.loader.getMultipleWordsStatus.query({ wordSlugs: r }),
      enabled: a && r.length > 0,
    }),
  xe = () => {
    const r = S(te),
      [a] = z(r, 300);
    return { searchWord: a.trim().toLowerCase() };
  };
function ge({ info: r }) {
  const [a, i] = c.useState(!1),
    { Word: t } = r || {},
    { word: p, type: W, translation: u, remember: v, usAudioMp3: P } = t || {},
    b = R(re),
    [m, O] = V(le);
  return e.jsx(J, {
    className: ae(m.slug === (t == null ? void 0 : t.slug) && "bg-primary-100"),
    children: e.jsx(X, {
      children: e.jsx("div", {
        className:
          "flex items-start justify-between gap-1 sm:flex-col-reverse sm:justify-start",
        children: e.jsxs("div", {
          className: "w-full",
          children: [
            e.jsxs("div", {
              className: "flex w-full flex-wrap items-baseline gap-1",
              children: [
                e.jsxs("div", {
                  className: "flex w-full items-center justify-between gap-1",
                  children: [
                    e.jsx("h2", {
                      className: "text-xl font-semibold",
                      children: p,
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(oe, { usAudioMp3: P || "", word: p }),
                        e.jsx(ne, {
                          wordSlug: (t == null ? void 0 : t.slug) || "",
                        }),
                        e.jsx(k, {
                          isIconOnly: !0,
                          variant: "light",
                          onPress: () => {
                            if (
                              (t == null ? void 0 : t.slug) ===
                              (m == null ? void 0 : m.slug)
                            ) {
                              b(!1), O({});
                              return;
                            }
                            b(!0), O(t || {});
                          },
                          children: e.jsx(E, {
                            icon: "lucide:info",
                            className: "text-xl",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex w-full items-center justify-between gap-1",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-start gap-1",
                      children: [
                        W &&
                          e.jsxs("span", {
                            className: "text-small text-default-500",
                            children: ["[", W, "]"],
                          }),
                        (t == null ? void 0 : t.usPronounce) &&
                          e.jsx("span", {
                            className: "text-small text-default-400",
                            children: t == null ? void 0 : t.usPronounce,
                          }),
                      ],
                    }),
                    e.jsx(k, {
                      isIconOnly: !0,
                      variant: "light",
                      onPress: () => i(!a),
                      children: e.jsx(E, {
                        icon: a ? "lucide:chevron-up" : "lucide:chevron-down",
                        className: "text-xl",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx($, {
              children:
                a &&
                e.jsxs(Y.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.2 },
                  className: "flex flex-col gap-3",
                  children: [
                    e.jsx(_, { className: "mt-3" }),
                    u &&
                      e.jsx("p", {
                        className: "text-default-600",
                        children: u,
                      }),
                    v &&
                      e.jsx("div", {
                        className: "space-y-2",
                        children: (() => {
                          try {
                            const x = JSON.parse(v);
                            return Array.isArray(x)
                              ? x.map((g, D) =>
                                  e.jsxs(
                                    "p",
                                    {
                                      className: "text-sm",
                                      children: ["• ", g],
                                    },
                                    D,
                                  ),
                                )
                              : null;
                          } catch (x) {
                            return (
                              console.error(
                                "Failed to parse remember field:",
                                x,
                              ),
                              null
                            );
                          }
                        })(),
                      }),
                  ],
                }),
            }),
          ],
        }),
      }),
    }),
  });
}
const d = 20,
  he = () => {
    const { bookSlug: r = "" } = se(),
      { searchWord: a } = xe(),
      { isLogin: i } = ie(),
      t = S(fe),
      p = c.useRef(null),
      { isMobile: W } = de(),
      [u, v] = c.useState(5),
      P = w({
        queryKey: ["getWordsOfKeyword", r, a],
        queryFn: async ({ pageParam: s }) =>
          h.loader.getWordsOfKeyword.query({
            keyword: a,
            offset: d * s,
            limit: d,
          }),
        initialPageParam: 0,
        getNextPageParam: (s, o, f) => {
          if (s.wordsOfKeyword.length !== 0) return f + 1;
        },
        select(s) {
          return s.pages.map((o) => o.wordsOfKeyword);
        },
        enabled: !!a,
      }),
      b = w({
        queryKey: ["getWordsOfBook", r],
        queryFn: async ({ pageParam: s }) =>
          h.loader.getWordsOfBook.query({
            bookSlug: r,
            offset: d * s,
            limit: d,
          }),
        initialPageParam: 0,
        getNextPageParam: (s, o, f) => {
          if (s.wordsOfBook.length !== 0) return f + 1;
        },
        select(s) {
          return s.pages.map((o) => o.wordsOfBook);
        },
        enabled: !!r && !a && t === l.ALL,
      }),
      m = w({
        queryKey: ["getDoneWordsOfBook", r, t],
        queryFn: async ({ pageParam: s }) =>
          h.loader.getDoneWordsOfBook.query({
            bookSlug: r,
            offset: d * s,
            limit: d,
          }),
        initialPageParam: 0,
        getNextPageParam: (s, o, f) => {
          if (s.doneWordsOfBook.length !== 0) return f + 1;
        },
        select(s) {
          return s.pages.map((o) => o.doneWordsOfBook);
        },
        enabled: i && !!r && !a && t === l.DONE,
      }),
      O = w({
        queryKey: ["getUnDoneWordsOfBook", r, t],
        queryFn: async ({ pageParam: s }) =>
          h.loader.getUnDoneWordsOfBook.query({
            bookSlug: r,
            offset: d * s,
            limit: d,
          }),
        initialPageParam: 0,
        getNextPageParam: (s, o, f) => {
          if (s.unDoneWordsOfBook.length !== 0) return f + 1;
        },
        select(s) {
          return s.pages.map((o) => o.unDoneWordsOfBook);
        },
        enabled: i && !!r && !a && t === l.UNDONE,
      }),
      x = w({
        queryKey: ["getRandomWordsOfBook", r, u],
        queryFn: async () =>
          h.loader.getRandomUndoneWords.query({ count: u, bookSlug: r }),
        initialPageParam: 0,
        getNextPageParam: () => {},
        select(s) {
          return s.pages.map((o) => o.randomUndoneWords);
        },
        enabled: !!r && !!u && t === l.RANDOM,
      }),
      [g] = c.useState(new Set()),
      D = { [l.ALL]: b, [l.DONE]: m, [l.UNDONE]: O, [l.RANDOM]: x },
      n = a ? P : D[t];
    c.useEffect(() => {
      !a && n.isStale && n.refetch();
    }, [t, a]);
    const [K, { rootRef: F }] = Z({
        loading: n.isFetching,
        hasNextPage: n.hasNextPage,
        onLoadMore: n.fetchNextPage,
        disabled: !!n.error,
        rootMargin: "0px 0px 200px 0px",
      }),
      y = (n.data || []).flat(2),
      C = y.length;
    c.useEffect(() => {
      var s;
      (s = p.current) == null || s.scrollIntoView({ block: "end" });
    }, [r]);
    const A = S(L),
      j = c.useMemo(
        () =>
          y.map((s) => s.Word.slug).filter((s) => A[s] === void 0 && !g.has(s)),
        [y, g, A],
      ),
      q = R(L),
      { data: N } = me({
        wordSlugs: j,
        enabled: i && j.length > 0 && t !== l.UNDONE,
      });
    c.useEffect(() => {
      N != null &&
        N.doneWords &&
        i &&
        j.length > 0 &&
        (q((s) => ({ ...s, ...N.doneWords })), j.forEach((s) => g.add(s)));
    }, [N, q, i, j, g]);
    const I = () =>
        y.length === 0
          ? n.isFetching
            ? e.jsxs("div", {
                className: "flex h-full flex-col items-center justify-center",
                children: [
                  e.jsx(M, { size: "lg" }),
                  e.jsx("div", {
                    className: "text-foreground-400 mt-4 font-light",
                    children: "Searching...",
                  }),
                ],
              })
            : e.jsxs("div", {
                className: "flex h-full flex-col items-center justify-center",
                children: [
                  e.jsx(B, {
                    icon: H,
                    size: 100,
                    className: "text-foreground-300",
                  }),
                  e.jsx("div", {
                    className: "text-foreground-400 mt-4",
                    children: "No results",
                  }),
                ],
              })
          : e.jsxs("div", {
              className: "flex flex-col gap-4 sm:p-4 sm:!pt-0",
              children: [
                y.map((s) =>
                  e.jsx(
                    ge,
                    { id: String(s.Word.id), info: s },
                    String(s.Word.id),
                  ),
                ),
                U(),
              ],
            }),
      U = () =>
        n.isFetchingNextPage
          ? e.jsxs("div", {
              className: "my-6 flex flex-col items-center justify-center",
              children: [
                e.jsx(M, {}),
                e.jsx("div", {
                  className: "text-small text-foreground-400 mt-2 font-light",
                  children: "Searching...",
                }),
              ],
            })
          : e.jsxs("div", {
              ref: K,
              className: "text-small text-foreground-400 my-6 text-center",
              children: ["Total ", C, " results"],
            });
    return e.jsxs("div", {
      className: "h-[calc(100vh-91px)] overflow-y-scroll",
      ref: F,
      children: [
        e.jsx("div", { ref: p }),
        e.jsxs("main", {
          className: "bg-background mx-auto flex gap-4 p-6 sm:p-0",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-1 flex-col gap-4 transition-all duration-300 ease-in-out",
              children: [
                i &&
                  W &&
                  !a &&
                  e.jsxs("div", {
                    className: "bg-background sticky top-0 z-10",
                    children: [
                      e.jsx("div", {
                        className: "w-full px-4 pt-4",
                        children: e.jsx(ce, {}),
                      }),
                      e.jsx(_, { className: "my-2" }),
                    ],
                  }),
                t === l.RANDOM &&
                  e.jsxs("div", {
                    className:
                      "flex w-full items-center gap-4 sm:flex-col sm:items-start sm:px-4",
                    children: [
                      e.jsx("p", {
                        className: "text-left md:hidden",
                        children: "Number of random words:",
                      }),
                      e.jsx(ee, {
                        type: "number",
                        value: u.toString(),
                        onChange: (s) => v(Number(s.target.value)),
                        placeholder: "Enter count of random words",
                        className: "w-1/2 sm:w-full",
                      }),
                      e.jsxs(k, {
                        className:
                          "flex flex-1 items-center gap-2 sm:w-full sm:p-2",
                        onPress: () => n.refetch(),
                        children: [
                          e.jsx(B, { icon: G, size: 20 }),
                          "Random Words",
                        ],
                      }),
                    ],
                  }),
                I(),
              ],
            }),
            e.jsx(ue, {}),
          ],
        }),
      ],
    });
  },
  De = Q(function () {
    return e.jsx("div", {
      className: "flex w-full flex-col",
      children: e.jsx(he, {}),
    });
  });
export { De as default };

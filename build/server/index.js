import { e as entryServer } from "./assets/vendor-react-router-DEbrkcDb.js";
import {
  createElement,
  useRef,
  useState,
  useEffect,
  forwardRef,
  useMemo,
} from "react";
import {
  useMatches,
  useActionData,
  useLoaderData,
  useParams,
  useOutletContext,
  useNavigation,
  useRevalidator,
  href,
  Link as Link$1,
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  Outlet,
  redirect,
} from "react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import {
  Button,
  Divider,
  Textarea,
  Card,
  CardBody,
  Drawer,
  DrawerContent,
  DrawerBody,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Progress,
  Image as Image$2,
  useDisclosure,
  Listbox,
  ListboxItem,
  Switch,
  Input,
  Checkbox,
  Link,
  colors,
  Tabs,
  Tab,
  HeroUIProvider,
  Spinner,
} from "@heroui/react";
import {
  useMutation,
  useQueryClient,
  useQuery,
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { useTheme, ThemeProvider } from "next-themes";
import { createTRPCClient, httpLink } from "@trpc/client";
import SuperJSON from "superjson";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { atom, useAtomValue, useSetAtom, useAtom } from "jotai";
import {
  X,
  LogOut,
  EyeOff,
  Eye,
  Dices,
  Bell,
  CircleAlert,
  CheckCircle,
  Moon,
  Sun,
  Shuffle,
  SearchX,
} from "lucide-react";
import {
  useMediaQuery,
  useIsClient,
  useCountdown,
  useDebounceValue,
} from "usehooks-ts";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import toast, { Toaster as Toaster$1 } from "react-hot-toast";
import cn from "classnames";
import { twMerge, twJoin } from "tailwind-merge";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ActivityCalendar } from "react-activity-calendar";
import dayjs from "dayjs";
import BoringAvatar from "boring-avatars";
import { Chance } from "chance";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { initTRPC, TRPCError } from "@trpc/server";
import {
  relations,
  eq,
  sql,
  and,
  count,
  inArray,
  notInArray,
  gte,
  lte,
  asc,
  desc,
  like,
} from "drizzle-orm";
import jwt from "jsonwebtoken";
import {
  pgTable,
  timestamp,
  varchar,
  serial,
  integer,
  text,
  primaryKey,
} from "drizzle-orm/pg-core";
import cookie from "cookie";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import nodemailer from "nodemailer";
import crypto from "crypto";
import "node:stream";
import "@react-router/node";
import "isbot";
import "react-dom/server";
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches(),
    };
    return createElement(Component, props);
  };
}
const merriweatherStyle = "/assets/latin-400-BfrSfx2R.css";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const JWT_KEY = "ACCESS_TOKEN";
const IS_PROD = true;
const PROD_TRPC_URL = "http://localhost:3001/trpc";
const TRPC_URL = PROD_TRPC_URL;
const trpcServer = (request) => {
  return createTRPCClient({
    links: [
      httpLink({
        url: TRPC_URL,
        transformer: SuperJSON,
        headers: () => {
          const cookie2 =
            (request == null ? void 0 : request.headers.get("Cookie")) || "";
          return { cookie: cookie2 };
        },
      }),
    ],
  });
};
const trpcClient = createTRPCClient({
  links: [
    httpLink({
      url: TRPC_URL,
      transformer: SuperJSON,
    }),
  ],
});
var ListTabType = /* @__PURE__ */ ((ListTabType2) => {
  ListTabType2["ALL"] = "ALL";
  ListTabType2["DONE"] = "DONE";
  ListTabType2["UNDONE"] = "UNDONE";
  ListTabType2["RANDOM"] = "RANDOM";
  return ListTabType2;
})(ListTabType || {});
const isCollapsibleSidebarOpenAtom = atom(false);
const isBooksPanelDrawerOpenAtom = atom(false);
const isWordDetailPanelDrawerOpenAtom = atom(false);
const isSearchBarOpenAtom = atom(false);
const listTabAtom = atom(ListTabType.ALL);
const isProfileModalOpenAtom = atom(false);
const searchWordAtom = atom("");
const isSettingModalOpenAtom = atom(false);
const isSignInModalOpenAtom = atom(false);
const isSignUpModalOpenAtom = atom(false);
const isUpdatePasswordModalOpenAtom = atom(false);
const wordDetailSlugAtom = atom("");
const wordDetailAtom = atom({});
const wordsDoneStatusAtom = atom({});
const LuIcon = (props) => {
  const Icon2 = props.icon;
  return /* @__PURE__ */ jsx(Icon2, {
    ...props,
    size: props.size || 18,
    strokeWidth: props.strokeWidth || 1.5,
  });
};
const useMobile = () => {
  const isMobile = useMediaQuery("(width < 768px)");
  return { isMobile };
};
const OnTRPCError = (error) => {
  toast.error(error.message);
};
const useDoneWordMutation = ({ wordSlug }) =>
  useMutation({
    mutationKey: ["doneWord", wordSlug],
    mutationFn: () => {
      return trpcClient.action.doneWord.mutate({ wordSlug });
    },
    onError: OnTRPCError,
  });
const useUnDoneWordMutation = ({ wordSlug }) =>
  useMutation({
    mutationKey: ["unDoneWord", wordSlug],
    mutationFn: () => {
      return trpcClient.action.unDoneWord.mutate({ wordSlug });
    },
    onError: OnTRPCError,
  });
const useMyUserInfo = () => {
  const ctx = useOutletContext();
  const rootLoaderData = useLoaderData() || {};
  const myUserInfo = ctx ? ctx.myUserInfo : rootLoaderData.myUserInfo;
  const userId = myUserInfo == null ? void 0 : myUserInfo.id;
  const isLogin = !!myUserInfo;
  return { myUserInfo, userId, isLogin };
};
const DoneWordButton = ({ wordSlug, onPress }) => {
  const { isLogin } = useMyUserInfo();
  const doneWordMutation = useDoneWordMutation({ wordSlug });
  const unDoneWordMutation = useUnDoneWordMutation({ wordSlug });
  const wordsDoneStatus = useAtomValue(wordsDoneStatusAtom);
  const setWordsDoneStatus = useSetAtom(wordsDoneStatusAtom);
  const isWordDone = !!wordsDoneStatus[wordSlug];
  return /* @__PURE__ */ jsx(Button, {
    variant: "light",
    isIconOnly: true,
    isDisabled: !isLogin,
    title: !isLogin ? "Please sign in first" : "",
    isLoading: doneWordMutation.isPending || unDoneWordMutation.isPending,
    onPress: async () => {
      if (!isWordDone) {
        await doneWordMutation.mutateAsync();
        setWordsDoneStatus((prev) => ({ ...prev, [wordSlug]: true }));
      } else {
        await unDoneWordMutation.mutateAsync();
        setWordsDoneStatus((prev) => {
          const newStatus = { ...prev };
          delete newStatus[wordSlug];
          return newStatus;
        });
      }
      onPress == null ? void 0 : onPress();
    },
    children: /* @__PURE__ */ jsx(Icon, {
      icon: isWordDone ? "lucide:bookmark-check" : "lucide:bookmark",
      className: `text-xl ${isWordDone ? "text-primary" : ""}`,
    }),
  });
};
function cx(...inputs) {
  return twMerge(cn(inputs));
}
function preLoadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = source;
    image.onload = (event) => {
      resolve(event);
    };
    image.onerror = (event) => {
      reject(event);
    };
  });
}
const WordAudioButton = ({
  isUk = false,
  word = "",
  usAudioMp3,
  ukAudioMp3,
}) => {
  const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const wordDetail = useAtomValue(wordDetailAtom);
  useEffect(() => {
    setIsPlaying(false);
  }, [wordDetailSlug]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(Button, {
        isIconOnly: true,
        variant: "light",
        onPress: () => {
          var _a;
          (_a = audioRef.current) == null ? void 0 : _a.play();
        },
        children: /* @__PURE__ */ jsx(Icon, {
          icon: "lucide:volume-2",
          className: cx("text-xl", isPlaying && "text-primary"),
        }),
      }),
      isUk
        ? /* @__PURE__ */ jsx("audio", {
            hidden: true,
            ref: audioRef,
            onPlay: () => {
              setIsPlaying(true);
            },
            onEnded: () => {
              setIsPlaying(false);
            },
            src: ukAudioMp3
              ? ukAudioMp3
              : word
                ? `http://dict.youdao.com/dictvoice?type=0&audio=${word.trim().toLowerCase()}`
                : wordDetail.ukAudioMp3 ||
                  `http://dict.youdao.com/dictvoice?type=0&audio=${(wordDetail.word || "").trim().toLowerCase()}`,
          })
        : /* @__PURE__ */ jsx("audio", {
            hidden: true,
            ref: audioRef,
            onPlay: () => {
              setIsPlaying(true);
            },
            onEnded: () => {
              setIsPlaying(false);
            },
            src: usAudioMp3
              ? usAudioMp3
              : word
                ? `http://dict.youdao.com/dictvoice?type=0&audio=${word.trim().toLowerCase()}`
                : wordDetail.usAudioMp3 ||
                  `http://dict.youdao.com/dictvoice?type=0&audio=${(wordDetail.word || "").trim().toLowerCase()}`,
          }),
    ],
  });
};
const clsx = (...inputs) => {
  return twMerge(twJoin(inputs));
};
const email = z.string().email("Invalid email format");
const password = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(30, "Password cannot exceed 30 characters");
const keepAlive = z.boolean();
const verifyCode = z.string().length(6, "Verification code must be 6 digits");
const name = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .max(16, "Name cannot exceed 16 characters");
const comment = z
  .string()
  .min(3, "Comment must be at least 3 characters")
  .max(1e3, "Comment cannot exceed 1000 characters");
const updatePasswordFormFields = {
  email,
  password,
  password2: password,
  verifyCode,
};
const signInForm = z.object({ email, password, keepAlive });
const signUpForm = z
  .object({ ...updatePasswordFormFields, name })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });
const updatePasswordForm = z
  .object(updatePasswordFormFields)
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });
const commentForm = z.object({ comment });
const FormFieldError = ({ message }) => {
  return message
    ? /* @__PURE__ */ jsx("div", {
        className: "text-danger text-xs",
        children: message,
      })
    : null;
};
const useSendCommentMutation = ({ wordSlug }) =>
  useMutation({
    mutationKey: ["sendComment", wordSlug],
    mutationFn: ({ content }) => {
      return trpcClient.action.sendComment.mutate({ wordSlug, content });
    },
    onError: OnTRPCError,
  });
const useZodForm = (schema2, props) => {
  const form = useForm({
    resolver: zodResolver(schema2),
    mode: "onChange",
    ...props,
  });
  return { form };
};
const WordCommentForm = () => {
  var _a;
  const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );
  const { isLogin } = useMyUserInfo();
  const { form } = useZodForm(commentForm);
  const queryClient2 = useQueryClient();
  const sendCommentMutation = useSendCommentMutation({
    wordSlug: wordDetailSlug,
  });
  return /* @__PURE__ */ jsxs("div", {
    children: [
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx("div", {
        className: "my-4 text-xl font-semibold",
        children: "Comments",
      }),
      /* @__PURE__ */ jsx("form", {
        onSubmit: form.handleSubmit(async ({ comment: content }) => {
          await sendCommentMutation.mutateAsync({ content });
          await queryClient2.invalidateQueries({
            queryKey: ["getWordComments", wordDetailSlug],
          });
          setIsWordDetailPanelDrawerOpen(false);
          toast.success("Comment successful");
          form.reset();
        }),
        children: /* @__PURE__ */ jsxs("div", {
          className: clsx(
            "flex flex-col gap-2",
            !isLogin && "cursor-not-allowed",
          ),
          title: !isLogin ? "Please sign in first" : "",
          children: [
            /* @__PURE__ */ jsx(Textarea, {
              ...form.register("comment"),
              isDisabled: !isLogin,
              variant: "bordered",
              placeholder: "Leave a comment",
              minRows: 2,
              maxRows: 4,
            }),
            /* @__PURE__ */ jsx(FormFieldError, {
              message:
                (_a = form.formState.errors.comment) == null
                  ? void 0
                  : _a.message,
            }),
            /* @__PURE__ */ jsx(Button, {
              color: "primary",
              type: "submit",
              isDisabled: true,
              isLoading:
                form.formState.isSubmitting || sendCommentMutation.isPending,
              children: "Coming Soon",
            }),
          ],
        }),
      }),
    ],
  });
};
const DetailWord = () => {
  const [wordDetail] = useAtom(wordDetailAtom);
  const isWordDetailPanelDrawerOpen = useAtomValue(
    isWordDetailPanelDrawerOpenAtom,
  );
  const wordDetailValue = useAtomValue(wordDetailAtom);
  const isShow =
    isWordDetailPanelDrawerOpen && Object.keys(wordDetailValue || {}).length;
  return /* @__PURE__ */ jsx("div", {
    className: cx(
      "sm:hidden",
      !isShow && "pointer-events-none absolute h-0 w-0",
    ),
    children: /* @__PURE__ */ jsx(AnimatePresence, {
      mode: "wait",
      children:
        isShow &&
        /* @__PURE__ */ jsx(motion.div, {
          layoutId: String(wordDetail == null ? void 0 : wordDetail.slug),
          initial: { opacity: 0, width: 0, height: 0 },
          animate: { opacity: 1, width: 300, height: "auto" },
          exit: { opacity: 0, width: 0, height: 0 },
          transition: { duration: 0.3, ease: "easeInOut" },
          className: "sticky top-4 z-10",
          children: /* @__PURE__ */ jsx(DetailContent, {}),
        }),
    }),
  });
};
const DetailContent = () => {
  const [wordDetail, setWordDetailAtom] = useAtom(wordDetailAtom);
  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );
  return /* @__PURE__ */ jsx(Card, {
    className: "max-w-md transition-all duration-300 ease-in-out sm:w-full",
    children: /* @__PURE__ */ jsxs(CardBody, {
      className: "gap-4",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            /* @__PURE__ */ jsx("h2", {
              className: "text-xl font-semibold",
              children: wordDetail == null ? void 0 : wordDetail.word,
            }),
            /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-end gap-1 sm:pr-4",
              children: [
                /* @__PURE__ */ jsx(DoneWordButton, {
                  wordSlug:
                    (wordDetail == null ? void 0 : wordDetail.slug) || "",
                }),
                /* @__PURE__ */ jsx(Button, {
                  isIconOnly: true,
                  size: "sm",
                  variant: "light",
                  onPress: () => {},
                  "aria-label": "Show comments",
                  disabled: true,
                  title: "Coming soon",
                  children: /* @__PURE__ */ jsx(Icon, {
                    icon: "lucide:message-circle",
                    className: "text-lg",
                  }),
                }),
                /* @__PURE__ */ jsx(Button, {
                  isIconOnly: true,
                  size: "sm",
                  variant: "light",
                  onPress: () => {
                    setIsWordDetailPanelDrawerOpen(false);
                    setWordDetailAtom({});
                  },
                  "aria-label": "Close",
                  className: "sm:hidden",
                  children: /* @__PURE__ */ jsx(Icon, {
                    icon: "lucide:x",
                    className: "text-lg",
                  }),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "space-y-3",
          children: [
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("span", {
                  className: "text-default-500 text-sm",
                  children: wordDetail == null ? void 0 : wordDetail.type,
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "mt-1 flex flex-col gap-1",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(WordAudioButton, { isUs: true }),
                        /* @__PURE__ */ jsx("span", {
                          className: "text-default-500 font-medium",
                          children: "US:",
                        }),
                        /* @__PURE__ */ jsx("p", {
                          children:
                            wordDetail == null
                              ? void 0
                              : wordDetail.usPronounce,
                        }),
                      ],
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(WordAudioButton, { isUk: true }),
                        /* @__PURE__ */ jsx("span", {
                          className: "text-default-500 font-medium",
                          children: "UK:",
                        }),
                        /* @__PURE__ */ jsx("p", {
                          children:
                            wordDetail == null
                              ? void 0
                              : wordDetail.ukPronounce,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs("div", {
              children: [
                /* @__PURE__ */ jsx("h3", {
                  className: "mb-2 text-sm font-medium",
                  children: "Remember",
                }),
                (wordDetail == null ? void 0 : wordDetail.remember) &&
                  (wordDetail == null ? void 0 : wordDetail.remember.length) >
                    0 &&
                  /* @__PURE__ */ jsx("div", {
                    className: "space-y-2",
                    children: (() => {
                      try {
                        const remember =
                          (wordDetail == null ? void 0 : wordDetail.remember) ||
                          "";
                        const trimmedRemember = remember.trim();
                        const isValidJSON =
                          trimmedRemember.startsWith("[") &&
                          trimmedRemember.endsWith("]");
                        const examples = isValidJSON
                          ? JSON.parse(trimmedRemember)
                          : JSON.parse(`[${trimmedRemember}]`);
                        return examples.map((example, index) =>
                          /* @__PURE__ */ jsxs(
                            "p",
                            { className: "text-sm", children: ["• ", example] },
                            index,
                          ),
                        );
                      } catch (error) {
                        console.error("Failed to parse examples:", error);
                        return /* @__PURE__ */ jsx("p", {
                          className: "text-danger text-sm",
                          children: "Updating",
                        });
                      }
                    })(),
                  }),
              ],
            }),
            /* @__PURE__ */ jsx(WordCommentForm, {}),
          ],
        }),
      ],
    }),
  });
};
const DetailWordModal = () => {
  const { isMobile } = useMobile();
  const [wordDetail, setWordDetail] = useAtom(wordDetailAtom);
  const isWordDetailPanelDrawerOpen = useAtomValue(
    isWordDetailPanelDrawerOpenAtom,
  );
  const isOpen =
    isMobile &&
    isWordDetailPanelDrawerOpen &&
    Object.keys(wordDetail || {}).length > 0;
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Drawer, {
      isOpen,
      onClose: () => {
        setWordDetail({});
      },
      placement: "bottom",
      backdrop: "transparent",
      classNames: {
        closeButton: "z-50",
      },
      closeButton: /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(LuIcon, { icon: X }),
      }),
      children: /* @__PURE__ */ jsx(DrawerContent, {
        children: /* @__PURE__ */ jsx(DrawerBody, {
          className: "p-0",
          children: /* @__PURE__ */ jsx(DetailContent, {}),
        }),
      }),
    }),
  });
};
const useGetStudyCalendarQuery = ({ enabled = true }) =>
  useQuery({
    queryKey: ["getStudyCalendar"],
    queryFn: () => {
      return trpcClient.loader.getStudyCalendar.query();
    },
    enabled,
  });
const useAppTheme = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };
  return { isDarkMode, toggleTheme, setTheme };
};
const getCalendarData = (studyCalendar = []) => {
  const _studyCalendar = studyCalendar.map((e) => ({
    ...e,
    updatedAt: dayjs(e.updatedAt).format("YYYY-MM-DD"),
  }));
  const start = dayjs().subtract(6, "month");
  const end = dayjs();
  const result = [];
  let currentDate = start;
  while (currentDate.isBefore(end.add(1, "day"))) {
    const date = currentDate.format("YYYY-MM-DD");
    const activity = { date, count: 0, level: 0 };
    const count2 = _studyCalendar.filter((e) => e.updatedAt === date).length;
    if (count2 > 0) {
      const level = Math.min(Math.ceil(count2 / 10), 4);
      activity.count = count2;
      activity.level = level;
    }
    result.push(activity);
    currentDate = currentDate.add(1, "day");
  }
  return result;
};
const StudyCalendar = () => {
  const { isDarkMode } = useAppTheme();
  const isProfileModalOpen = useAtomValue(isProfileModalOpenAtom);
  const getStudyCalendarQuery = useGetStudyCalendarQuery({
    enabled: isProfileModalOpen,
  });
  const { studyCalendar = [] } = getStudyCalendarQuery.data || {};
  const calendarData = getCalendarData(studyCalendar);
  useEffect(() => {
    if (isProfileModalOpen) {
      getStudyCalendarQuery.refetch();
    }
  }, [isProfileModalOpen]);
  return /* @__PURE__ */ jsx(ActivityCalendar, {
    colorScheme: isDarkMode ? "dark" : "light",
    data: calendarData,
    blockRadius: 0,
    loading: getStudyCalendarQuery.isFetching,
    maxLevel: 4,
    theme: {
      light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
      dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    },
    renderBlock: (block, activity) =>
      /* @__PURE__ */ jsx(Tooltip, {
        content:
          activity.count > 0
            ? `${activity.date} studied ${activity.count} words`
            : `${activity.date} no study`,
        children: block,
      }),
    labels: {
      totalCount: `In the past 6 months, studied ${studyCalendar.length} words in total`,
      legend: { less: "Low", more: "High" },
    },
    renderColorLegend: (block, level) =>
      /* @__PURE__ */ jsx(Tooltip, {
        content: `Level ${level}`,
        children: block,
      }),
  });
};
const UserAvatar = ({ name: name2, size = 20 }) => {
  const [_, setIsProfileModalOpen] = useAtom(isProfileModalOpenAtom);
  const { myUserInfo } = useMyUserInfo();
  const isClient = useIsClient();
  if ((myUserInfo || name2) && isClient) {
    return /* @__PURE__ */ jsx(BoringAvatar, {
      square: true,
      size,
      name: name2 || (myUserInfo == null ? void 0 : myUserInfo.name),
      variant: "beam",
      className: "cursor-pointer rounded-full",
      onClick: () => {
        setIsProfileModalOpen(true);
      },
    });
  }
  return /* @__PURE__ */ jsx("div", { className: "bg-foreground-300 size-5" });
};
const ProfileModal = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useAtom(
    isProfileModalOpenAtom,
  );
  const { myUserInfo } = useMyUserInfo();
  if (!myUserInfo) return null;
  return /* @__PURE__ */ jsx(Modal, {
    isOpen: isProfileModalOpen,
    onOpenChange: setIsProfileModalOpen,
    backdrop: "blur",
    size: "lg",
    placement: "bottom",
    children: /* @__PURE__ */ jsxs(ModalContent, {
      children: [
        /* @__PURE__ */ jsx(ModalHeader, { children: myUserInfo.name }),
        /* @__PURE__ */ jsxs(ModalBody, {
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "mb-4 flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(UserAvatar, {}),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex flex-col justify-center gap-1",
                  children: [
                    /* @__PURE__ */ jsx("div", {
                      className: "text-foreground-600",
                      children: myUserInfo.email,
                    }),
                    /* @__PURE__ */ jsxs("small", {
                      className: "text-foreground-400",
                      children: [
                        "Registered on ",
                        myUserInfo.createdAt.toLocaleString(),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx(StudyCalendar, {}),
          ],
        }),
        /* @__PURE__ */ jsx(ModalFooter, {}),
      ],
    }),
  });
};
const ProgressBar = () => {
  const { state } = useNavigation();
  const getValue = () => {
    if (state === "submitting") return 50;
    if (state === "loading") return 100;
    return 0;
  };
  const value = getValue();
  return /* @__PURE__ */ jsx(Progress, {
    "aria-label": "Loading...",
    style: { opacity: value ? 1 : 0 },
    className: "fixed inset-0 z-50 h-[2px]",
    value,
  });
};
const GithubButton = () => {
  const { isDarkMode } = useAppTheme();
  return /* @__PURE__ */ jsx("a", {
    href: "https://github.com/",
    target: "_blank",
    rel: "noreferrer",
    children: /* @__PURE__ */ jsxs(Button, {
      variant: "flat",
      color: "default",
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(Image$2, {
          alt: "github",
          src: isDarkMode ? "/svgs/github_dark.svg" : "/svgs/github_light.svg",
          width: 18,
        }),
        "View Source Code",
      ],
    }),
  });
};
const useSignOutMutation = () =>
  useMutation({
    mutationKey: ["signOut"],
    mutationFn: () => {
      return trpcClient.action.signOut.mutate();
    },
    onError: OnTRPCError,
  });
const SignOutButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { revalidate } = useRevalidator();
  const setIsSettingModalOpen = useSetAtom(isSettingModalOpenAtom);
  const signOutMutation = useSignOutMutation();
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs(Button, {
        variant: "flat",
        color: "danger",
        onPress: onOpen,
        children: [/* @__PURE__ */ jsx(LuIcon, { icon: LogOut }), "Sign Out"],
      }),
      /* @__PURE__ */ jsx(Modal, {
        isOpen,
        placement: "center",
        onOpenChange,
        backdrop: "blur",
        children: /* @__PURE__ */ jsx(ModalContent, {
          children: (onClose) => {
            return /* @__PURE__ */ jsxs(Fragment, {
              children: [
                /* @__PURE__ */ jsx(ModalHeader, { children: "Please Note" }),
                /* @__PURE__ */ jsx(ModalBody, {
                  children: "Are you sure you want to sign out?",
                }),
                /* @__PURE__ */ jsxs(ModalFooter, {
                  children: [
                    /* @__PURE__ */ jsx(Button, {
                      color: "danger",
                      variant: "flat",
                      onPress: onClose,
                      children: "Cancel",
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      color: "primary",
                      isLoading: signOutMutation.isPending,
                      onPress: async () => {
                        await signOutMutation.mutateAsync();
                        onClose();
                        setIsSettingModalOpen(false);
                        revalidate();
                        toast.success("Signed out");
                      },
                      children: "Confirm",
                    }),
                  ],
                }),
              ],
            });
          },
        }),
      }),
    ],
  });
};
const SettingModal = () => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useAtom(
    isSettingModalOpenAtom,
  );
  const { isDarkMode, toggleTheme } = useAppTheme();
  return /* @__PURE__ */ jsx(Modal, {
    isOpen: isSettingModalOpen,
    onOpenChange: setIsSettingModalOpen,
    backdrop: "blur",
    placement: "center",
    children: /* @__PURE__ */ jsx(ModalContent, {
      children: (onClose) => {
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx(ModalHeader, { children: "Settings" }),
            /* @__PURE__ */ jsxs(ModalBody, {
              children: [
                /* @__PURE__ */ jsx(Listbox, {
                  "aria-label": "settings",
                  children: /* @__PURE__ */ jsx(
                    ListboxItem,
                    {
                      onPress: () => {
                        toggleTheme();
                        onClose();
                      },
                      endContent: /* @__PURE__ */ jsx(Switch, {
                        isSelected: isDarkMode,
                        onValueChange: toggleTheme,
                      }),
                      children: "Dark Mode",
                    },
                    "darkmode",
                  ),
                }),
                /* @__PURE__ */ jsx(SignOutButton, {}),
                /* @__PURE__ */ jsx(GithubButton, {}),
              ],
            }),
            /* @__PURE__ */ jsx(ModalFooter, {}),
          ],
        });
      },
    }),
  });
};
const useSignInMutation = () =>
  useMutation({
    mutationKey: ["signIn"],
    mutationFn: (data) => {
      return trpcClient.action.signIn.mutate(data);
    },
    onError: OnTRPCError,
  });
const PasswordInput = forwardRef((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return /* @__PURE__ */ jsx(Input, {
    minLength: 8,
    maxLength: 30,
    label: "Password",
    placeholder: "Please enter password",
    type: showPassword ? "text" : "password",
    variant: "bordered",
    endContent: /* @__PURE__ */ jsx(Button, {
      variant: "light",
      size: "sm",
      isIconOnly: true,
      onPress: () => {
        setShowPassword(!showPassword);
      },
      children: /* @__PURE__ */ jsx(LuIcon, {
        icon: showPassword ? EyeOff : Eye,
      }),
    }),
    ...props,
    ref,
  });
});
const SignInModal = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useAtom(
    isSignInModalOpenAtom,
  );
  const setIsSignUpModalOpen = useSetAtom(isSignUpModalOpenAtom);
  const setIsUpdatePasswordModalOpen = useSetAtom(
    isUpdatePasswordModalOpenAtom,
  );
  const { form } = useZodForm(signInForm, {
    defaultValues: { keepAlive: true },
  });
  const { revalidate } = useRevalidator();
  const signInMutation = useSignInMutation();
  return /* @__PURE__ */ jsx(Modal, {
    isOpen: isSignInModalOpen,
    onOpenChange: setIsSignInModalOpen,
    backdrop: "blur",
    isDismissable: false,
    onClose: form.reset,
    placement: "center",
    children: /* @__PURE__ */ jsx(ModalContent, {
      children: (onClose) => {
        var _a, _b;
        return /* @__PURE__ */ jsxs("form", {
          onSubmit: form.handleSubmit(async (data) => {
            await signInMutation.mutateAsync(data);
            toast.success("Login successful");
            onClose();
            revalidate();
          }),
          children: [
            /* @__PURE__ */ jsx(ModalHeader, { children: "Sign In" }),
            /* @__PURE__ */ jsxs(ModalBody, {
              children: [
                /* @__PURE__ */ jsx(Input, {
                  ...form.register("email"),
                  autoFocus: true,
                  label: "Email",
                  type: "email",
                  placeholder: "Please enter email",
                  variant: "bordered",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_a = form.formState.errors.email) == null
                      ? void 0
                      : _a.message,
                }),
                /* @__PURE__ */ jsx(PasswordInput, {
                  ...form.register("password"),
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_b = form.formState.errors.password) == null
                      ? void 0
                      : _b.message,
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between px-1 py-2",
                  children: [
                    /* @__PURE__ */ jsx(Checkbox, {
                      ...form.register("keepAlive"),
                      classNames: {
                        label: "text-small",
                      },
                      children: "Remember for 7 days",
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Link, {
                          color: "primary",
                          size: "sm",
                          className:
                            "cursor-pointer underline-offset-2 hover:underline",
                          onPress: () => {
                            onClose();
                            setIsSignUpModalOpen(true);
                          },
                          children: "Register",
                        }),
                        /* @__PURE__ */ jsx(Link, {
                          color: "primary",
                          size: "sm",
                          className:
                            "cursor-pointer underline-offset-2 hover:underline",
                          onPress: () => {
                            onClose();
                            setIsUpdatePasswordModalOpen(true);
                          },
                          children: "Reset Password",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(ModalFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  color: "danger",
                  variant: "flat",
                  onPress: onClose,
                  children: "Cancel",
                }),
                /* @__PURE__ */ jsx(Button, {
                  color: "primary",
                  type: "submit",
                  isLoading:
                    form.formState.isSubmitting || signInMutation.isPending,
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      },
    }),
  });
};
const useSignUpMutation = () =>
  useMutation({
    mutationKey: ["signUp"],
    mutationFn: (data) => {
      return trpcClient.action.signUp.mutate(data);
    },
    onError: OnTRPCError,
  });
const useSendVerifyCodeMutation = ({ email: email2 }) =>
  useMutation({
    mutationKey: ["sendVerifyCode", email2],
    mutationFn: () => {
      return trpcClient.action.sendVerifyCode.mutate({
        email: email2,
      });
    },
    onError: OnTRPCError,
  });
const SendVerifyCodeButton = ({ form }) => {
  const email2 = form.watch("email");
  const [count2, Countdown] = useCountdown({ countStart: 60, countStop: 0 });
  const showCountDown = count2 > 0 && count2 < 60;
  const sendVerifyCodeMutation = useSendVerifyCodeMutation({ email: email2 });
  if (showCountDown) {
    return /* @__PURE__ */ jsxs(Link, {
      color: "primary",
      size: "sm",
      isDisabled: true,
      children: ["Resend in ", count2, " seconds"],
    });
  }
  if (
    sendVerifyCodeMutation.isPending ||
    (sendVerifyCodeMutation.isSuccess && count2 === 60)
  ) {
    return /* @__PURE__ */ jsx(Link, {
      color: "primary",
      size: "sm",
      isDisabled: true,
      children: "Sending verification code...",
    });
  }
  return /* @__PURE__ */ jsx(Link, {
    color: "primary",
    size: "sm",
    isDisabled: !!form.formState.errors.email || !email2,
    className: "cursor-pointer underline-offset-2 hover:underline",
    onPress: async () => {
      await sendVerifyCodeMutation.mutateAsync();
      Countdown.startCountdown();
      toast.success("Verification code sent to your email");
    },
    children: "Send email verification code",
  });
};
const SignUpModal = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useAtom(
    isSignUpModalOpenAtom,
  );
  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);
  const { form } = useZodForm(signUpForm);
  const signUpMutation = useSignUpMutation();
  return /* @__PURE__ */ jsx(Modal, {
    isOpen: isSignUpModalOpen,
    onOpenChange: setIsSignUpModalOpen,
    backdrop: "blur",
    isDismissable: false,
    onClose: form.reset,
    placement: "center",
    children: /* @__PURE__ */ jsx(ModalContent, {
      children: (onClose) => {
        var _a, _b, _c, _d, _e;
        return /* @__PURE__ */ jsxs("form", {
          onSubmit: form.handleSubmit(async (data) => {
            await signUpMutation.mutateAsync(data);
            toast.success("Registration successful");
            onClose();
            setIsSignInModalOpen(true);
          }),
          children: [
            /* @__PURE__ */ jsx(ModalHeader, { children: "Register" }),
            /* @__PURE__ */ jsxs(ModalBody, {
              children: [
                /* @__PURE__ */ jsx(Input, {
                  ...form.register("name"),
                  value: form.watch("name"),
                  autoFocus: true,
                  minLength: 3,
                  maxLength: 16,
                  label: "Name",
                  placeholder: "Please enter name",
                  variant: "bordered",
                  endContent: /* @__PURE__ */ jsx(Button, {
                    variant: "light",
                    size: "sm",
                    isIconOnly: true,
                    onPress: () => {
                      form.setValue(
                        "name",
                        Chance().name().replace(/\s/g, "").slice(0, 16),
                        {
                          shouldValidate: true,
                          shouldDirty: true,
                        },
                      );
                    },
                    children: /* @__PURE__ */ jsx(LuIcon, { icon: Dices }),
                  }),
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_a = form.formState.errors.name) == null
                      ? void 0
                      : _a.message,
                }),
                /* @__PURE__ */ jsx(Input, {
                  ...form.register("email"),
                  label: "Email",
                  type: "email",
                  placeholder: "Please enter email",
                  variant: "bordered",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_b = form.formState.errors.email) == null
                      ? void 0
                      : _b.message,
                }),
                /* @__PURE__ */ jsx(PasswordInput, {
                  ...form.register("password"),
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_c = form.formState.errors.password) == null
                      ? void 0
                      : _c.message,
                }),
                /* @__PURE__ */ jsx(PasswordInput, {
                  ...form.register("password2"),
                  label: "Confirm Password",
                  placeholder: "Please re-enter password",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_d = form.formState.errors.password2) == null
                      ? void 0
                      : _d.message,
                }),
                /* @__PURE__ */ jsx(Input, {
                  ...form.register("verifyCode"),
                  minLength: 6,
                  maxLength: 6,
                  label: "Verification Code",
                  placeholder: "Please enter email verification code",
                  variant: "bordered",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_e = form.formState.errors.verifyCode) == null
                      ? void 0
                      : _e.message,
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between px-1 py-2",
                  children: [
                    /* @__PURE__ */ jsx(SendVerifyCodeButton, { form }),
                    /* @__PURE__ */ jsx(Link, {
                      color: "primary",
                      size: "sm",
                      className:
                        "cursor-pointer underline-offset-2 hover:underline",
                      onPress: () => {
                        onClose();
                        setIsSignInModalOpen(true);
                      },
                      children: "Sign In",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(ModalFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  color: "danger",
                  variant: "flat",
                  onPress: onClose,
                  children: "Cancel",
                }),
                /* @__PURE__ */ jsx(Button, {
                  color: "primary",
                  type: "submit",
                  isLoading:
                    form.formState.isSubmitting || signUpMutation.isPending,
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      },
    }),
  });
};
const Toaster = () => {
  return /* @__PURE__ */ jsx(Toaster$1, {
    position: "top-center",
    toastOptions: {
      success: {
        icon: /* @__PURE__ */ jsx(LuIcon, {
          icon: CheckCircle,
          className: "ml-2",
        }),
        style: {
          background: colors.green[600],
        },
      },
      error: {
        icon: /* @__PURE__ */ jsx(LuIcon, {
          icon: CircleAlert,
          className: "ml-2",
        }),
        style: {
          background: colors.red[500],
        },
      },
      icon: /* @__PURE__ */ jsx(LuIcon, { icon: Bell, className: "ml-2" }),
      style: {
        background: colors.blue[500],
        color: colors.white,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 12px",
      },
    },
  });
};
const useUpdatePasswordMutation = () =>
  useMutation({
    mutationKey: ["updatePassword"],
    mutationFn: (data) => {
      return trpcClient.action.updatePassword.mutate(data);
    },
    onError: OnTRPCError,
  });
const UpdatePasswordModal = () => {
  const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] = useAtom(
    isUpdatePasswordModalOpenAtom,
  );
  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);
  const { form } = useZodForm(updatePasswordForm);
  const updatePasswordMutation = useUpdatePasswordMutation();
  return /* @__PURE__ */ jsx(Modal, {
    isOpen: isUpdatePasswordModalOpen,
    onOpenChange: setIsUpdatePasswordModalOpen,
    backdrop: "blur",
    isDismissable: false,
    onClose: form.reset,
    placement: "center",
    children: /* @__PURE__ */ jsx(ModalContent, {
      children: (onClose) => {
        var _a, _b, _c, _d;
        return /* @__PURE__ */ jsxs("form", {
          onSubmit: form.handleSubmit(async (data) => {
            await updatePasswordMutation.mutateAsync(data);
            toast.success("Password reset successful");
            onClose();
            setIsSignInModalOpen(true);
          }),
          children: [
            /* @__PURE__ */ jsx(ModalHeader, { children: "Reset Password" }),
            /* @__PURE__ */ jsxs(ModalBody, {
              children: [
                /* @__PURE__ */ jsx(Input, {
                  ...form.register("email"),
                  autoFocus: true,
                  label: "Email",
                  type: "email",
                  placeholder: "Please enter email",
                  variant: "bordered",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_a = form.formState.errors.email) == null
                      ? void 0
                      : _a.message,
                }),
                /* @__PURE__ */ jsx(PasswordInput, {
                  ...form.register("password"),
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_b = form.formState.errors.password) == null
                      ? void 0
                      : _b.message,
                }),
                /* @__PURE__ */ jsx(PasswordInput, {
                  ...form.register("password2"),
                  label: "Confirm Password",
                  placeholder: "Please re-enter password",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_c = form.formState.errors.password2) == null
                      ? void 0
                      : _c.message,
                }),
                /* @__PURE__ */ jsx(Input, {
                  ...form.register("verifyCode"),
                  minLength: 6,
                  maxLength: 6,
                  label: "Verification Code",
                  placeholder: "Please enter email verification code",
                  variant: "bordered",
                }),
                /* @__PURE__ */ jsx(FormFieldError, {
                  message:
                    (_d = form.formState.errors.verifyCode) == null
                      ? void 0
                      : _d.message,
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex justify-between px-1 py-2",
                  children: [
                    /* @__PURE__ */ jsx(SendVerifyCodeButton, { form }),
                    /* @__PURE__ */ jsx(Link, {
                      color: "primary",
                      size: "sm",
                      className:
                        "cursor-pointer underline-offset-2 hover:underline",
                      onPress: () => {
                        onClose();
                        setIsSignInModalOpen(true);
                      },
                      children: "Sign In",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsxs(ModalFooter, {
              children: [
                /* @__PURE__ */ jsx(Button, {
                  color: "danger",
                  variant: "flat",
                  onPress: onClose,
                  children: "Cancel",
                }),
                /* @__PURE__ */ jsx(Button, {
                  color: "primary",
                  type: "submit",
                  isLoading:
                    form.formState.isSubmitting ||
                    updatePasswordMutation.isPending,
                  children: "Submit",
                }),
              ],
            }),
          ],
        });
      },
    }),
  });
};
const GlobalComponents = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(ReactQueryDevtools, {}),
      /* @__PURE__ */ jsx(Toaster, {}),
      /* @__PURE__ */ jsx(ProgressBar, {}),
      /* @__PURE__ */ jsx(SignInModal, {}),
      /* @__PURE__ */ jsx(SignUpModal, {}),
      /* @__PURE__ */ jsx(UpdatePasswordModal, {}),
      /* @__PURE__ */ jsx(SettingModal, {}),
      /* @__PURE__ */ jsx(ProfileModal, {}),
      /* @__PURE__ */ jsx(DetailWordModal, {}),
    ],
  });
};
const globalStyle = "/assets/global-Dy1T12iq.css";
const ListTabs = () => {
  const [listTab, setListTab] = useAtom(listTabAtom);
  const { isLogin } = useMyUserInfo();
  const tabs = [
    { key: ListTabType.ALL, label: "All", disabled: false },
    { key: ListTabType.DONE, label: "Learned", disabled: !isLogin },
    { key: ListTabType.UNDONE, label: "Not Learned", disabled: !isLogin },
    { key: ListTabType.RANDOM, label: "Random", disabled: false },
  ];
  return /* @__PURE__ */ jsx("div", {
    className: "bg-background",
    children: /* @__PURE__ */ jsx(Tabs, {
      "aria-label": "tabs",
      selectedKey: listTab,
      onSelectionChange: (key) => {
        setListTab(key);
      },
      children: tabs.map(({ key, label, disabled }) => {
        return /* @__PURE__ */ jsx(
          Tab,
          {
            title: label,
            isDisabled: disabled,
            titleValue: disabled ? "Please sign in first" : "",
          },
          key,
        );
      }),
    }),
  });
};
const Header = () => {
  const { isDarkMode, toggleTheme } = useAppTheme();
  const { isMobile } = useMobile();
  const [isSearchBarOpen, setIsSearchBarOpen] = useAtom(isSearchBarOpenAtom);
  const [searchWord, setSearchWord] = useAtom(searchWordAtom);
  const setIsBooksPanelDrawerOpen = useSetAtom(isBooksPanelDrawerOpenAtom);
  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);
  const setIsSettingModalOpen = useSetAtom(isSettingModalOpenAtom);
  const [isCollapsibleSidebarOpen, setIsCollapsibleSidebarOpen] = useAtom(
    isCollapsibleSidebarOpenAtom,
  );
  const { isLogin } = useMyUserInfo();
  return /* @__PURE__ */ jsx("header", {
    className: "bg-background sticky top-0 z-10",
    children: /* @__PURE__ */ jsxs("div", {
      className:
        "border-divider mx-auto flex items-center justify-between gap-4 border-b p-4",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            /* @__PURE__ */ jsx(Button, {
              isIconOnly: true,
              variant: "light",
              className: "hidden sm:block",
              onPress: () => setIsBooksPanelDrawerOpen(true),
              children: /* @__PURE__ */ jsx(Icon, {
                icon: "lucide:menu",
                className: "text-xl",
              }),
            }),
            /* @__PURE__ */ jsx(Button, {
              isIconOnly: true,
              variant: "light",
              className: "sm:hidden",
              onPress: () =>
                setIsCollapsibleSidebarOpen(!isCollapsibleSidebarOpen),
              children: /* @__PURE__ */ jsx(Icon, {
                icon: !isCollapsibleSidebarOpen
                  ? "lucide:panel-left-close"
                  : "lucide:panel-left-open",
                className: "text-xl",
              }),
            }),
            isLogin && !isMobile && /* @__PURE__ */ jsx(ListTabs, {}),
          ],
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "flex flex-1 items-center justify-end gap-2",
          children: [
            /* @__PURE__ */ jsx(AnimatePresence, {
              children: isSearchBarOpen
                ? /* @__PURE__ */ jsxs(motion.div, {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    className:
                      "bg-background relative flex flex-1 items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(Input, {
                        placeholder: "Search word...",
                        value: searchWord,
                        onValueChange: setSearchWord,
                        startContent: /* @__PURE__ */ jsx(Icon, {
                          icon: "lucide:search",
                          className: "text-default-400",
                        }),
                        className: "w-full",
                        autoFocus: true,
                      }),
                      /* @__PURE__ */ jsx(Button, {
                        isIconOnly: true,
                        variant: "light",
                        onPress: () => {
                          setSearchWord("");
                          setIsSearchBarOpen(false);
                        },
                        children: /* @__PURE__ */ jsx(Icon, {
                          icon: "lucide:x",
                        }),
                      }),
                    ],
                  })
                : /* @__PURE__ */ jsx(Button, {
                    isIconOnly: true,
                    variant: "light",
                    onPress: () => setIsSearchBarOpen(true),
                    children: /* @__PURE__ */ jsx(Icon, {
                      icon: "lucide:search",
                    }),
                  }),
            }),
            isLogin
              ? /* @__PURE__ */ jsxs("div", {
                  className: "flex items-center gap-2 sm:hidden",
                  children: [
                    /* @__PURE__ */ jsx(UserAvatar, { size: 20 }),
                    /* @__PURE__ */ jsx(Button, {
                      isIconOnly: true,
                      variant: "light",
                      onPress: () => setIsSettingModalOpen(true),
                      children: /* @__PURE__ */ jsx(Icon, {
                        icon: "lucide:settings",
                      }),
                    }),
                  ],
                })
              : /* @__PURE__ */ jsxs("div", {
                  className: "flex items-center gap-2 sm:hidden",
                  children: [
                    /* @__PURE__ */ jsx(Button, {
                      isIconOnly: true,
                      variant: "light",
                      onPress: toggleTheme,
                      children: /* @__PURE__ */ jsx(LuIcon, {
                        icon: isDarkMode ? Moon : Sun,
                      }),
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      color: "primary",
                      className: "md:flex",
                      onPress: () => setIsSignInModalOpen(true),
                      children: "Sign In",
                    }),
                  ],
                }),
          ],
        }),
      ],
    }),
  });
};
const imageSkeleton = "/svgs/ImageSkeleton.svg";
const Image$1 = ({
  isDisableCache,
  src,
  isDisableFallback,
  className,
  ...props
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof src === "string") {
      const cacheBuster = isDisableCache
        ? `?t=${/* @__PURE__ */ new Date().getTime()}`
        : "";
      preLoadImage(src + cacheBuster)
        .then(() => {
          setShow(true);
        })
        .catch(console.log);
    } else {
      setShow(true);
    }
  }, [isDisableCache, src]);
  return /* @__PURE__ */ jsx("img", {
    src: show && src ? `${src}` : isDisableFallback ? void 0 : imageSkeleton,
    alt: "",
    style: {
      transition: "opacity 0.3s ease",
    },
    className: cx(className, isDisableFallback && !show && "!opacity-0"),
    ...props,
  });
};
const BooksPanel = ({ allBooks, starBooks }) => {
  const { bookSlug = "" } = useParams();
  const setSearchWord = useSetAtom(searchWordAtom);
  const setWordDetailSlug = useSetAtom(wordDetailSlugAtom);
  const [isCollapsibleSidebarOpen, setIsCollapsibleSidebarOpen] = useAtom(
    isCollapsibleSidebarOpenAtom,
  );
  const booksList = [...allBooks.filter((i) => i.wordsCount)].sort((a, b) => {
    if (a.id === 1) return -1;
    if (b.id === 1) return 1;
    const aIsStarred = starBooks.includes(a.slug);
    const bIsStarred = starBooks.includes(b.slug);
    if (aIsStarred && !bIsStarred) return -1;
    if (!aIsStarred && bIsStarred) return 1;
    return 0;
  });
  return /* @__PURE__ */ jsx("div", {
    className: "flex flex-col gap-2",
    children: booksList.map((item) => {
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          layoutId: String(item.id),
          className: "w-full",
          children: /* @__PURE__ */ jsx(Button, {
            variant: "light",
            className: cx(
              `hover:bg-default-100 h-12 w-full justify-start rounded-none transition-all duration-300 ease-out`,
              !isCollapsibleSidebarOpen ? "flex justify-center px-2" : "px-4",
            ),
            startContent: /* @__PURE__ */ jsxs("div", {
              className: "relative w-[30px] min-w-[30px]",
              children: [
                /* @__PURE__ */ jsx(Image$1, {
                  alt: item.slug,
                  src:
                    item.image ||
                    "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg",
                  className: cx(
                    "h-[40px] w-[30px] min-w-[30px] overflow-hidden bg-cover",
                  ),
                }),
                bookSlug === item.slug &&
                  /* @__PURE__ */ jsx("div", {
                    className:
                      "bg-primary absolute bottom-0.5 -left-1.5 flex h-4 w-4 items-center justify-center rounded-full p-2",
                    children: "⭐",
                  }),
              ],
            }),
            onPress: (e) => {
              e.continuePropagation();
              setSearchWord("");
              setWordDetailSlug("");
              setIsCollapsibleSidebarOpen(false);
            },
            as: Link$1,
            to: href("/:bookSlug/words", { bookSlug: item.slug }),
            children: /* @__PURE__ */ jsx(AnimatePresence, {
              mode: "wait",
              children:
                isCollapsibleSidebarOpen &&
                /* @__PURE__ */ jsx(motion.div, {
                  initial: { opacity: 0, width: 0 },
                  animate: { opacity: 1, width: "100%" },
                  exit: { opacity: 0, width: 0 },
                  transition: { duration: 0.35, ease: "easeInOut" },
                  children: /* @__PURE__ */ jsxs(Fragment, {
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "flex flex-1 flex-col items-start",
                        children: [
                          /* @__PURE__ */ jsx("div", {
                            className: "w-[88%] truncate text-left",
                            children: item.name,
                          }),
                          /* @__PURE__ */ jsxs("small", {
                            className: "text-primary",
                            children: [item.wordsCount, " words"],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsx("span", {
                        className: "text-secondary",
                        children: starBooks.includes(item.slug) ? "⭐" : "",
                      }),
                    ],
                  }),
                }),
            }),
          }),
        },
        item.id,
      );
    }),
  });
};
const Sidebar = ({ allBooks, starBooks }) => {
  var _a, _b;
  const { bookSlug = "" } = useParams();
  const setSearchWord = useSetAtom(searchWordAtom);
  const setWordDetailSlug = useSetAtom(wordDetailSlugAtom);
  const [_, setIsBooksPanelDrawerOpen] = useAtom(isBooksPanelDrawerOpenAtom);
  const booksList = [...allBooks.filter((i) => i.wordsCount)].sort((a, b) => {
    if (a.id === 1) return -1;
    if (b.id === 1) return 1;
    const aIsStarred = starBooks.includes(a.slug);
    const bIsStarred = starBooks.includes(b.slug);
    if (aIsStarred && !bIsStarred) return -1;
    if (!aIsStarred && bIsStarred) return 1;
    return 0;
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Card, {
      className: "h-fit w-full sm:rounded-none sm:border-none sm:shadow-none",
      children: /* @__PURE__ */ jsxs(CardBody, {
        className: "p-0",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "border-divider border-b p-4",
            children: [
              /* @__PURE__ */ jsx("h2", {
                className: "font-semibold",
                children:
                  (_a = allBooks.find((book) => book.slug === bookSlug)) == null
                    ? void 0
                    : _a.name,
              }),
              /* @__PURE__ */ jsx("p", {
                className: "text-small text-default-500",
                children:
                  (_b = allBooks.find((book) => book.slug === bookSlug)) == null
                    ? void 0
                    : _b.wordsCount,
              }),
            ],
          }),
          /* @__PURE__ */ jsx("div", {
            className: "p-2",
            children: booksList.map((item) => {
              return /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "light",
                  className: cx(
                    "hover:bg-default-100 h-12 w-full justify-start rounded-none transition-all duration-300 ease-out",
                  ),
                  startContent: /* @__PURE__ */ jsxs("div", {
                    className: "relative w-[30px] min-w-[30px]",
                    children: [
                      /* @__PURE__ */ jsx(Image$1, {
                        alt: item.slug,
                        src:
                          item.image ||
                          "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg",
                        className: cx(
                          "h-[40px] w-[30px] min-w-[30px] overflow-hidden bg-cover",
                        ),
                      }),
                      bookSlug === item.slug &&
                        /* @__PURE__ */ jsx("div", {
                          className:
                            "bg-primary absolute bottom-0.5 -left-1.5 flex h-4 w-4 items-center justify-center rounded-full p-2",
                          children: "⭐",
                        }),
                    ],
                  }),
                  onPress: (e) => {
                    e.continuePropagation();
                    setSearchWord("");
                    setWordDetailSlug("");
                    setIsBooksPanelDrawerOpen(false);
                  },
                  as: Link$1,
                  to: href("/:bookSlug/words", { bookSlug: item.slug }),
                  children: /* @__PURE__ */ jsx("p", {
                    className: "w-full truncate overflow-hidden text-left",
                    children: item.name,
                  }),
                },
                item.slug,
              );
            }),
          }),
        ],
      }),
    }),
  });
};
const CollapsibleSidebar = ({ allBooks, starBooks }) => {
  var _a, _b;
  const { bookSlug = "" } = useParams();
  const { isMobile } = useMobile();
  const [isCollapsibleSidebarOpen] = useAtom(isCollapsibleSidebarOpenAtom);
  return /* @__PURE__ */ jsx("div", {
    className: cx(
      `h-dvh overflow-auto transition-all duration-300`,
      !isCollapsibleSidebarOpen ? "w-[80px]" : "w-[240px]",
      isMobile && "hidden",
    ),
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex h-full flex-col",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between p-4",
          children: [
            /* @__PURE__ */ jsx(AnimatePresence, {
              mode: "wait",
              children:
                isCollapsibleSidebarOpen &&
                /* @__PURE__ */ jsx(motion.div, {
                  initial: { width: 0, opacity: 0 },
                  animate: { opacity: 1, width: 240 },
                  exit: { opacity: 0, width: 0 },
                  transition: { duration: 0.3, ease: "easeInOut" },
                  className: "flex h-10 items-center justify-start sm:hidden",
                  children: /* @__PURE__ */ jsx("h2", {
                    className: cx(
                      `block w-[220px] items-center justify-start truncate text-lg font-semibold whitespace-nowrap transition-all duration-300 ease-in-out`,
                    ),
                    title:
                      (_a = allBooks.find((book) => book.slug === bookSlug)) ==
                      null
                        ? void 0
                        : _a.name,
                    children:
                      (_b = allBooks.find((book) => book.slug === bookSlug)) ==
                      null
                        ? void 0
                        : _b.name,
                  }),
                }),
            }),
            !isCollapsibleSidebarOpen &&
              /* @__PURE__ */ jsx("h2", {
                className: `pointer-events-auto flex h-10 items-center justify-start text-lg font-semibold opacity-0 transition-opacity`,
              }),
          ],
        }),
        /* @__PURE__ */ jsx(BooksPanel, { allBooks, starBooks }),
      ],
    }),
  });
};
const AppLayout = ({ allBooks, starBooks, children }) => {
  const { isMobile } = useMobile();
  const [isBooksPanelDrawerOpen, setIsBooksPanelDrawerOpen] = useAtom(
    isBooksPanelDrawerOpenAtom,
  );
  return /* @__PURE__ */ jsxs("div", {
    className: "flex h-dvh",
    children: [
      !isMobile &&
        /* @__PURE__ */ jsx(CollapsibleSidebar, { allBooks, starBooks }),
      /* @__PURE__ */ jsx(Drawer, {
        isOpen: !isMobile ? false : isBooksPanelDrawerOpen,
        onClose: () => {
          setIsBooksPanelDrawerOpen(false);
        },
        placement: "left",
        size: "xs",
        classNames: {
          closeButton: "z-50",
        },
        closeButton: /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsx(LuIcon, { icon: X }),
        }),
        children: /* @__PURE__ */ jsx(DrawerContent, {
          children: /* @__PURE__ */ jsx(DrawerBody, {
            className: "p-0",
            children: /* @__PURE__ */ jsx(Sidebar, { allBooks, starBooks }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx("div", {
        className: "flex h-full flex-1 p-2 sm:p-0",
        children: /* @__PURE__ */ jsxs("div", {
          className:
            "border-divider h-full flex-1 overflow-auto rounded-lg border sm:border-none",
          id: "content",
          children: [/* @__PURE__ */ jsx(Header, {}), children],
        }),
      }),
    ],
  });
};
const loader$2 = async (args) => {
  const [{ myUserInfo }, { allBooks }, { starBooks }] = await Promise.all([
    trpcServer(args.request).loader.getMyUserInfo.query(),
    trpcServer(args.request).loader.getAllBooks.query(),
    trpcServer(args.request).loader.getStarBooks.query(),
  ]);
  return {
    myUserInfo,
    allBooks,
    starBooks,
  };
};
const links = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStyle,
    },
    {
      rel: "stylesheet",
      href: merriweatherStyle,
    },
  ];
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    className: "bg-background text-foreground",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ jsxs("head", {
        children: [
          /* @__PURE__ */ jsx("meta", {
            charSet: "utf-8",
          }),
          /* @__PURE__ */ jsx("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          }),
          /* @__PURE__ */ jsx("meta", {
            name: "description",
            content: "study English words so words-learning",
          }),
          /* @__PURE__ */ jsx("meta", {
            name: "keywords",
            content: "english,words,study",
          }),
          /* @__PURE__ */ jsx("meta", {
            name: "author",
            content: "https://github.com",
          }),
          /* @__PURE__ */ jsx("meta", {
            name: "repository",
            content: "https://github.com/",
          }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(Links, {}),
          /* @__PURE__ */ jsx("title", {
            children: "words-learning",
          }),
        ],
      }),
      /* @__PURE__ */ jsxs("body", {
        suppressHydrationWarning: true,
        children: [
          children,
          /* @__PURE__ */ jsx(ScrollRestoration, {}),
          /* @__PURE__ */ jsx(Scripts, {}),
        ],
      }),
    ],
  });
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 1e3 * 60 * 5,
    },
  },
});
const root = withComponentProps(function App({
  loaderData: { myUserInfo, allBooks, starBooks },
}) {
  return /* @__PURE__ */ jsx(ThemeProvider, {
    attribute: "class",
    defaultTheme: "light",
    children: /* @__PURE__ */ jsx(HeroUIProvider, {
      children: /* @__PURE__ */ jsxs(QueryClientProvider, {
        client: queryClient,
        children: [
          /* @__PURE__ */ jsx(AppLayout, {
            allBooks,
            starBooks,
            children: /* @__PURE__ */ jsx(Outlet, {
              context: {
                myUserInfo,
              },
            }),
          }),
          /* @__PURE__ */ jsx(GlobalComponents, {}),
        ],
      }),
    }),
  });
});
const route0 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      Layout,
      default: root,
      links,
      loader: loader$2,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const useGetMultipleWordsStatusQuery = ({ wordSlugs, enabled = true }) =>
  useQuery({
    queryKey: ["getMultipleWordsStatus", wordSlugs],
    queryFn: () => {
      return trpcClient.loader.getMultipleWordsStatus.query({ wordSlugs });
    },
    enabled: enabled && wordSlugs.length > 0,
  });
const useDebounceSearchWord = () => {
  const _searchWord = useAtomValue(searchWordAtom);
  const [debounceSearchWord] = useDebounceValue(_searchWord, 300);
  const searchWord = debounceSearchWord.trim().toLowerCase();
  return { searchWord };
};
function DictionaryEntry({ info }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { Word: Word2 } = info || {};
  const { word, type, translation, remember, usAudioMp3 } = Word2 || {};
  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );
  const [wordDetail, setWordDetailAtom] = useAtom(wordDetailAtom);
  return /* @__PURE__ */ jsx(Card, {
    className: cx(
      wordDetail.slug === (Word2 == null ? void 0 : Word2.slug) &&
        "bg-primary-100",
    ),
    children: /* @__PURE__ */ jsx(CardBody, {
      children: /* @__PURE__ */ jsx("div", {
        className:
          "flex items-start justify-between gap-1 sm:flex-col-reverse sm:justify-start",
        children: /* @__PURE__ */ jsxs("div", {
          className: "w-full",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex w-full flex-wrap items-baseline gap-1",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "flex w-full items-center justify-between gap-1",
                  children: [
                    /* @__PURE__ */ jsx("h2", {
                      className: "text-xl font-semibold",
                      children: word,
                    }),
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        /* @__PURE__ */ jsx(WordAudioButton, {
                          usAudioMp3: usAudioMp3 || "",
                          word,
                        }),
                        /* @__PURE__ */ jsx(DoneWordButton, {
                          wordSlug: (Word2 == null ? void 0 : Word2.slug) || "",
                        }),
                        /* @__PURE__ */ jsx(Button, {
                          isIconOnly: true,
                          variant: "light",
                          onPress: () => {
                            if (
                              (Word2 == null ? void 0 : Word2.slug) ===
                              (wordDetail == null ? void 0 : wordDetail.slug)
                            ) {
                              setIsWordDetailPanelDrawerOpen(false);
                              setWordDetailAtom({});
                              return;
                            }
                            setIsWordDetailPanelDrawerOpen(true);
                            setWordDetailAtom(Word2 || {});
                          },
                          children: /* @__PURE__ */ jsx(Icon, {
                            icon: "lucide:info",
                            className: "text-xl",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs("div", {
                  className: "flex w-full items-center justify-between gap-1",
                  children: [
                    /* @__PURE__ */ jsxs("div", {
                      className: "flex justify-start gap-1",
                      children: [
                        type &&
                          /* @__PURE__ */ jsxs("span", {
                            className: "text-small text-default-500",
                            children: ["[", type, "]"],
                          }),
                        (Word2 == null ? void 0 : Word2.usPronounce) &&
                          /* @__PURE__ */ jsx("span", {
                            className: "text-small text-default-400",
                            children:
                              Word2 == null ? void 0 : Word2.usPronounce,
                          }),
                      ],
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      isIconOnly: true,
                      variant: "light",
                      onPress: () => setIsExpanded(!isExpanded),
                      children: /* @__PURE__ */ jsx(Icon, {
                        icon: isExpanded
                          ? "lucide:chevron-up"
                          : "lucide:chevron-down",
                        className: "text-xl",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ jsx(AnimatePresence, {
              children:
                isExpanded &&
                /* @__PURE__ */ jsxs(motion.div, {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  transition: { duration: 0.2 },
                  className: "flex flex-col gap-3",
                  children: [
                    /* @__PURE__ */ jsx(Divider, { className: "mt-3" }),
                    translation &&
                      /* @__PURE__ */ jsx("p", {
                        className: "text-default-600",
                        children: translation,
                      }),
                    remember &&
                      /* @__PURE__ */ jsx("div", {
                        className: "space-y-2",
                        children: (() => {
                          try {
                            const examples = JSON.parse(remember);
                            return Array.isArray(examples)
                              ? examples.map((example, index) =>
                                  /* @__PURE__ */ jsxs(
                                    "p",
                                    {
                                      className: "text-sm",
                                      children: ["• ", example],
                                    },
                                    index,
                                  ),
                                )
                              : null;
                          } catch (error) {
                            console.error(
                              "Failed to parse remember field:",
                              error,
                            );
                            return null;
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
const pageSize = 20;
const WordsSection = () => {
  const { bookSlug = "" } = useParams();
  const { searchWord } = useDebounceSearchWord();
  const { isLogin } = useMyUserInfo();
  const listTab = useAtomValue(listTabAtom);
  const topRef = useRef(null);
  const { isMobile } = useMobile();
  const [randomWordCount, setRandomWordCount] = useState(5);
  const getWordsOfKeywordQuery = useInfiniteQuery({
    queryKey: ["getWordsOfKeyword", bookSlug, searchWord],
    queryFn: async ({ pageParam }) => {
      return trpcClient.loader.getWordsOfKeyword.query({
        keyword: searchWord,
        offset: pageSize * pageParam,
        limit: pageSize,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.wordsOfKeyword.length === 0) {
        return void 0;
      }
      return lastPageParam + 1;
    },
    select(data) {
      return data.pages.map((e) => e.wordsOfKeyword);
    },
    enabled: !!searchWord,
  });
  const getWordsOfBookQuery = useInfiniteQuery({
    queryKey: ["getWordsOfBook", bookSlug],
    queryFn: async ({ pageParam }) => {
      return trpcClient.loader.getWordsOfBook.query({
        bookSlug,
        offset: pageSize * pageParam,
        limit: pageSize,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.wordsOfBook.length === 0) {
        return void 0;
      }
      return lastPageParam + 1;
    },
    select(data) {
      return data.pages.map((e) => e.wordsOfBook);
    },
    enabled: !!bookSlug && !searchWord && listTab === ListTabType.ALL,
  });
  const getDoneWordsOfBookQuery = useInfiniteQuery({
    queryKey: ["getDoneWordsOfBook", bookSlug, listTab],
    queryFn: async ({ pageParam }) => {
      return trpcClient.loader.getDoneWordsOfBook.query({
        bookSlug,
        offset: pageSize * pageParam,
        limit: pageSize,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.doneWordsOfBook.length === 0) {
        return void 0;
      }
      return lastPageParam + 1;
    },
    select(data) {
      return data.pages.map((e) => e.doneWordsOfBook);
    },
    enabled:
      isLogin && !!bookSlug && !searchWord && listTab === ListTabType.DONE,
  });
  const getUnDoneWordsOfBook2 = useInfiniteQuery({
    queryKey: ["getUnDoneWordsOfBook", bookSlug, listTab],
    queryFn: async ({ pageParam }) => {
      return trpcClient.loader.getUnDoneWordsOfBook.query({
        bookSlug,
        offset: pageSize * pageParam,
        limit: pageSize,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.unDoneWordsOfBook.length === 0) {
        return void 0;
      }
      return lastPageParam + 1;
    },
    select(data) {
      return data.pages.map((e) => e.unDoneWordsOfBook);
    },
    enabled:
      isLogin && !!bookSlug && !searchWord && listTab === ListTabType.UNDONE,
  });
  const getRandomWordsOfBook = useInfiniteQuery({
    queryKey: ["getRandomWordsOfBook", bookSlug, randomWordCount],
    queryFn: async () => {
      return trpcClient.loader.getRandomUndoneWords.query({
        count: randomWordCount,
        bookSlug,
      });
    },
    initialPageParam: 0,
    getNextPageParam: () => {
      return void 0;
    },
    select(data) {
      return data.pages.map((e) => e.randomUndoneWords);
    },
    enabled: !!bookSlug && !!randomWordCount && listTab === ListTabType.RANDOM,
  });
  const [allCheckedWordSlugs] = useState(/* @__PURE__ */ new Set());
  const wordsQueryMap = {
    [ListTabType.ALL]: getWordsOfBookQuery,
    [ListTabType.DONE]: getDoneWordsOfBookQuery,
    [ListTabType.UNDONE]: getUnDoneWordsOfBook2,
    [ListTabType.RANDOM]: getRandomWordsOfBook,
  };
  const wordsQuery = searchWord
    ? getWordsOfKeywordQuery
    : wordsQueryMap[listTab];
  useEffect(() => {
    if (!searchWord && wordsQuery.isStale) {
      wordsQuery.refetch();
    }
  }, [listTab, searchWord]);
  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: wordsQuery.isFetching,
    hasNextPage: wordsQuery.hasNextPage,
    onLoadMore: wordsQuery.fetchNextPage,
    disabled: !!wordsQuery.error,
    rootMargin: "0px 0px 200px 0px",
  });
  const showWordsList = wordsQuery.data || [];
  const allWords = showWordsList.flat(2);
  const totalCount = allWords.length;
  useEffect(() => {
    var _a;
    (_a = topRef.current) == null
      ? void 0
      : _a.scrollIntoView({ block: "end" });
  }, [bookSlug]);
  const wordsDoneStatus = useAtomValue(wordsDoneStatusAtom);
  const newWordSlugs = useMemo(() => {
    return allWords
      .map((item) => item.Word.slug)
      .filter((slug) => {
        if (
          wordsDoneStatus[slug] === void 0 &&
          !allCheckedWordSlugs.has(slug)
        ) {
          return true;
        }
        return false;
      });
  }, [allWords, allCheckedWordSlugs, wordsDoneStatus]);
  const setWordsDoneStatus = useSetAtom(wordsDoneStatusAtom);
  const { data: wordsStatusData } = useGetMultipleWordsStatusQuery({
    wordSlugs: newWordSlugs,
    enabled:
      isLogin && newWordSlugs.length > 0 && listTab !== ListTabType.UNDONE,
  });
  useEffect(() => {
    if (
      (wordsStatusData == null ? void 0 : wordsStatusData.doneWords) &&
      isLogin &&
      newWordSlugs.length > 0
    ) {
      setWordsDoneStatus((prev) => ({ ...prev, ...wordsStatusData.doneWords }));
      newWordSlugs.forEach((slug) => allCheckedWordSlugs.add(slug));
    }
  }, [
    wordsStatusData,
    setWordsDoneStatus,
    isLogin,
    newWordSlugs,
    allCheckedWordSlugs,
  ]);
  const renderContent = () => {
    if (allWords.length === 0) {
      if (wordsQuery.isFetching) {
        return /* @__PURE__ */ jsxs("div", {
          className: "flex h-full flex-col items-center justify-center",
          children: [
            /* @__PURE__ */ jsx(Spinner, { size: "lg" }),
            /* @__PURE__ */ jsx("div", {
              className: "text-foreground-400 mt-4 font-light",
              children: "Searching...",
            }),
          ],
        });
      }
      return /* @__PURE__ */ jsxs("div", {
        className: "flex h-full flex-col items-center justify-center",
        children: [
          /* @__PURE__ */ jsx(LuIcon, {
            icon: SearchX,
            size: 100,
            className: "text-foreground-300",
          }),
          /* @__PURE__ */ jsx("div", {
            className: "text-foreground-400 mt-4",
            children: "No results",
          }),
        ],
      });
    }
    return /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-4 sm:p-4 sm:!pt-0",
      children: [
        allWords.map((item) =>
          /* @__PURE__ */ jsx(
            DictionaryEntry,
            {
              id: String(item.Word.id),
              info: item,
            },
            String(item.Word.id),
          ),
        ),
        renderEnd(),
      ],
    });
  };
  const renderEnd = () => {
    if (wordsQuery.isFetchingNextPage) {
      return /* @__PURE__ */ jsxs("div", {
        className: "my-6 flex flex-col items-center justify-center",
        children: [
          /* @__PURE__ */ jsx(Spinner, {}),
          /* @__PURE__ */ jsx("div", {
            className: "text-small text-foreground-400 mt-2 font-light",
            children: "Searching...",
          }),
        ],
      });
    }
    return /* @__PURE__ */ jsxs("div", {
      ref: sentryRef,
      className: "text-small text-foreground-400 my-6 text-center",
      children: ["Total ", totalCount, " results"],
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "h-[calc(100vh-91px)] overflow-y-scroll",
    ref: rootRef,
    children: [
      /* @__PURE__ */ jsx("div", { ref: topRef }),
      /* @__PURE__ */ jsxs("main", {
        className: "bg-background mx-auto flex gap-4 p-6 sm:p-0",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className:
              "flex flex-1 flex-col gap-4 transition-all duration-300 ease-in-out",
            children: [
              isLogin &&
                isMobile &&
                !searchWord &&
                /* @__PURE__ */ jsxs("div", {
                  className: "bg-background sticky top-0 z-10",
                  children: [
                    /* @__PURE__ */ jsx("div", {
                      className: "w-full px-4 pt-4",
                      children: /* @__PURE__ */ jsx(ListTabs, {}),
                    }),
                    /* @__PURE__ */ jsx(Divider, { className: "my-2" }),
                  ],
                }),
              listTab === ListTabType.RANDOM &&
                /* @__PURE__ */ jsxs("div", {
                  className:
                    "flex w-full items-center gap-4 sm:flex-col sm:items-start sm:px-4",
                  children: [
                    /* @__PURE__ */ jsx("p", {
                      className: "text-left md:hidden",
                      children: "Number of random words:",
                    }),
                    /* @__PURE__ */ jsx(Input, {
                      type: "number",
                      value: randomWordCount.toString(),
                      onChange: (e) =>
                        setRandomWordCount(Number(e.target.value)),
                      placeholder: "Enter count of random words",
                      className: "w-1/2 sm:w-full",
                    }),
                    /* @__PURE__ */ jsxs(Button, {
                      className:
                        "flex flex-1 items-center gap-2 sm:w-full sm:p-2",
                      onPress: () => wordsQuery.refetch(),
                      children: [
                        /* @__PURE__ */ jsx(LuIcon, {
                          icon: Shuffle,
                          size: 20,
                        }),
                        "Random Words",
                      ],
                    }),
                  ],
                }),
              renderContent(),
            ],
          }),
          /* @__PURE__ */ jsx(DetailWord, {}),
        ],
      }),
    ],
  });
};
const $bookSlug_words = withComponentProps(function PageWords() {
  return /* @__PURE__ */ jsx("div", {
    className: "flex w-full flex-col",
    children: /* @__PURE__ */ jsx(WordsSection, {}),
  });
});
const route1 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: $bookSlug_words,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const User = pgTable("User", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull().unique(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  avatar: varchar("avatar"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Post = pgTable("Post", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  userId: integer("userId")
    .notNull()
    .references(() => User.id),
  wordSlug: varchar("wordSlug")
    .notNull()
    .references(() => Word.slug),
  parentPostId: integer("parentPostId").references(() => Post.id),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Verify = pgTable("Verify", {
  id: serial("id").primaryKey(),
  email: varchar("email").notNull().unique(),
  code: varchar("code"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Book = pgTable("Book", {
  id: serial("id").primaryKey(),
  slug: varchar("slug").notNull().unique(),
  name: varchar("name").notNull(),
  image: varchar("image").notNull(),
  link: varchar("link").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Word = pgTable("Word", {
  id: serial("id").primaryKey(),
  bookSlug: varchar("bookSlug")
    .notNull()
    .references(() => Book.slug),
  slug: varchar("slug").notNull().unique(),
  word: varchar("word").notNull(),
  usPronounce: varchar("usPronounce").notNull(),
  ukPronounce: varchar("ukPronounce").notNull(),
  usAudioMp3: varchar("usAudioMp3"),
  usAudioOgg: varchar("usAudioOgg"),
  ukAudioMp3: varchar("ukAudioMp3"),
  ukAudioOgg: varchar("ukAudioOgg"),
  href: varchar("href"),
  type: varchar("type"),
  level: varchar("level"),
  translation: varchar("translation").notNull(),
  remember: varchar("remember").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Cognate = pgTable("Cognate", {
  id: serial("id").primaryKey(),
  wordSlug: varchar("wordSlug")
    .notNull()
    .references(() => Word.slug),
  pos: varchar("pos").notNull(),
  content: varchar("content").notNull(),
  transCn: varchar("transCn").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Phrase = pgTable("Phrase", {
  id: serial("id").primaryKey(),
  wordSlug: varchar("wordSlug")
    .notNull()
    .references(() => Word.slug),
  content: varchar("content").notNull(),
  transCn: varchar("transCn").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Sentence = pgTable("Sentence", {
  id: serial("id").primaryKey(),
  wordSlug: varchar("wordSlug")
    .notNull()
    .references(() => Word.slug),
  content: varchar("content").notNull(),
  transCn: varchar("transCn").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Synonym = pgTable("Synonym", {
  id: serial("id").primaryKey(),
  wordSlug: varchar("wordSlug")
    .notNull()
    .references(() => Word.slug),
  pos: varchar("pos").notNull(),
  content: varchar("content").notNull(),
  transCn: varchar("transCn").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const Translation = pgTable("Translation", {
  id: serial("id").primaryKey(),
  wordSlug: varchar("wordSlug")
    .notNull()
    .references(() => Word.slug),
  pos: varchar("pos").notNull(),
  transCn: varchar("transCn").notNull(),
  transEn: varchar("transEn").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt")
    .notNull()
    .$onUpdateFn(() => /* @__PURE__ */ new Date()),
});
const UsersToBooks = pgTable(
  "UsersToBooks",
  {
    userId: integer("userId")
      .notNull()
      .references(() => User.id),
    bookSlug: varchar("bookSlug")
      .notNull()
      .references(() => Book.slug),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt")
      .notNull()
      .$onUpdateFn(() => /* @__PURE__ */ new Date()),
  },
  (t2) => ({
    pk: primaryKey({ columns: [t2.userId, t2.bookSlug] }),
  }),
);
const UsersToWords = pgTable(
  "UsersToWords",
  {
    userId: integer("userId")
      .notNull()
      .references(() => User.id),
    wordSlug: varchar("wordSlug")
      .notNull()
      .references(() => Word.slug),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt")
      .notNull()
      .$onUpdateFn(() => /* @__PURE__ */ new Date()),
  },
  (t2) => ({
    pk: primaryKey({ columns: [t2.userId, t2.wordSlug] }),
  }),
);
const UsersToPostsVote = pgTable(
  "UsersToPostsVote",
  {
    userId: integer("userId")
      .notNull()
      .references(() => User.id),
    postId: integer("postId")
      .notNull()
      .references(() => Post.id),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt")
      .notNull()
      .$onUpdateFn(() => /* @__PURE__ */ new Date()),
  },
  (t2) => ({
    pk: primaryKey({ columns: [t2.userId, t2.postId] }),
  }),
);
const UserRelations = relations(User, ({ many }) => ({
  UsersToBooks: many(UsersToBooks),
  UsersToWords: many(UsersToWords),
  UsersToPostsVote: many(UsersToPostsVote),
  Posts: many(Post),
}));
const PostRelations = relations(Post, ({ one, many }) => ({
  User: one(User, { fields: [Post.userId], references: [User.id] }),
  Word: one(Word, { fields: [Post.wordSlug], references: [Word.slug] }),
  UsersToPostsVote: many(UsersToPostsVote),
  Posts: many(Post),
}));
const BookRelations = relations(Book, ({ many }) => ({
  UsersToBooks: many(UsersToBooks),
  Words: many(Word),
}));
const WordRelations = relations(Word, ({ one, many }) => ({
  Book: one(Book, {
    fields: [Word.bookSlug],
    references: [Book.slug],
  }),
  UsersToWords: many(UsersToWords),
  Cognates: many(Cognate),
  Phrases: many(Phrase),
  Sentences: many(Sentence),
  Synonyms: many(Synonym),
  Translations: many(Translation),
  Posts: many(Post),
}));
const CognateRelations = relations(Cognate, ({ one }) => ({
  Word: one(Word, {
    fields: [Cognate.wordSlug],
    references: [Word.slug],
  }),
}));
const PhraseRelations = relations(Phrase, ({ one }) => ({
  Word: one(Word, {
    fields: [Phrase.wordSlug],
    references: [Word.slug],
  }),
}));
const SentenceRelations = relations(Sentence, ({ one }) => ({
  Word: one(Word, {
    fields: [Sentence.wordSlug],
    references: [Word.slug],
  }),
}));
const SynonymRelations = relations(Synonym, ({ one }) => ({
  Word: one(Word, {
    fields: [Synonym.wordSlug],
    references: [Word.slug],
  }),
}));
const TranslationRelations = relations(Translation, ({ one }) => ({
  Word: one(Word, {
    fields: [Translation.wordSlug],
    references: [Word.slug],
  }),
}));
const UsersToBooksRelations = relations(UsersToBooks, ({ one }) => ({
  book: one(Book, {
    fields: [UsersToBooks.bookSlug],
    references: [Book.slug],
  }),
  user: one(User, {
    fields: [UsersToBooks.userId],
    references: [User.id],
  }),
}));
const UsersToWordsRelations = relations(UsersToWords, ({ one }) => ({
  word: one(Word, {
    fields: [UsersToWords.wordSlug],
    references: [Word.slug],
  }),
  user: one(User, {
    fields: [UsersToWords.userId],
    references: [User.id],
  }),
}));
const UsersToPostsVoteRelations = relations(UsersToPostsVote, ({ one }) => ({
  post: one(Post, {
    fields: [UsersToPostsVote.postId],
    references: [Post.id],
  }),
  user: one(User, {
    fields: [UsersToPostsVote.userId],
    references: [User.id],
  }),
}));
const schema = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      Book,
      BookRelations,
      Cognate,
      CognateRelations,
      Phrase,
      PhraseRelations,
      Post,
      PostRelations,
      Sentence,
      SentenceRelations,
      Synonym,
      SynonymRelations,
      Translation,
      TranslationRelations,
      User,
      UserRelations,
      UsersToBooks,
      UsersToBooksRelations,
      UsersToPostsVote,
      UsersToPostsVoteRelations,
      UsersToWords,
      UsersToWordsRelations,
      Verify,
      Word,
      WordRelations,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const getCookie = (req, name2) => {
  const cookieHeader = req.headers.get("Cookie");
  if (!cookieHeader) return "";
  const cookies = cookie.parse(cookieHeader);
  return cookies[name2];
};
const setCookie = (resHeaders, name2, value, options) => {
  resHeaders.set(
    "Set-Cookie",
    cookie.serialize(name2, value, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: IS_PROD,
      path: "/",
      sameSite: "lax",
      ...options,
    }),
  );
};
const deleteCookie = (resHeaders, name2, options) => {
  resHeaders.set(
    "Set-Cookie",
    cookie.serialize(name2, "", {
      maxAge: 0,
      httpOnly: true,
      secure: IS_PROD,
      path: "/",
      sameSite: "lax",
      ...options,
    }),
  );
};
const Cookies = {
  get: getCookie,
  set: setCookie,
  delete: deleteCookie,
};
var define_process_env_default$4 = {
  DATABASE_URL: "postgresql://postgres:12345678@localhost:5432/words-learning",
};
const client = postgres(define_process_env_default$4.DATABASE_URL);
const db = drizzle({ client, schema });
var define_process_env_default$3 = {
  npm_package_devDependencies_lint_staged: "^15.5.2",
  npm_package_dependencies_drizzle_orm: "^0.43.1",
  NVM_INC: "/Users/royal/.nvm/versions/node/v20.18.0/include/node",
  npm_package_devDependencies_prettier: "^3.5.3",
  npm_package_devDependencies_typescript_eslint: "^8.32.0",
  npm_package_scripts_prettier:
    'prettier --check "src/**/(*.tsx|*.ts|*.css|*.scss)"',
  TERM_PROGRAM: "vscode",
  NODE: "/Users/royal/.nvm/versions/node/v20.18.0/bin/node",
  npm_package_scripts_db_run_migrate:
    "tsx --env-file=.env app/.server/db/migrate.ts",
  npm_package_scripts_db_task: "tsx --env-file=.env app/.server/db/task.ts",
  INIT_CWD: "/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning",
  npm_package_devDependencies_typescript: "^5.8.3",
  npm_package_dependencies_react_hook_form: "^7.56.1",
  npm_package_dependencies_nodemailer: "^6.10.1",
  npm_package_dependencies_lucide_react: "^0.503.0",
  NVM_CD_FLAGS: "-q",
  npm_package_devDependencies_vite: "^6.3.4",
  npm_package_dependencies_react_hot_toast: "^2.5.2",
  npm_package_dependencies_lenis: "^1.3.1",
  npm_package_dependencies__fontsource_merriweather: "^5.2.6",
  SHELL: "/bin/zsh",
  TERM: "xterm-256color",
  npm_package_dependencies__hookform_resolvers: "^5.0.1",
  TMPDIR: "/var/folders/tp/5hxjkh8d61qbm36vv079v8h40000gn/T/",
  TERM_PROGRAM_VERSION: "1.99.3",
  npm_package_devDependencies_drizzle_kit: "^0.31.0",
  npm_package_dependencies_cookie: "^1.0.2",
  npm_package_scripts_dev: "react-router dev",
  npm_package_devDependencies_vite_bundle_visualizer: "^1.2.1",
  ZDOTDIR: "/Users/royal",
  ORIGINAL_XDG_CURRENT_DESKTOP: "undefined",
  MallocNanoZone: "0",
  npm_package_dependencies_boring_avatars: "^1.11.2",
  TERM_SESSION_ID: "8BE9C578-BBA3-4242-A74D-E38D6B1B15F1",
  npm_config_registry: "https://registry.npmjs.org/",
  npm_package_devDependencies__types_jsonwebtoken: "^9.0.9",
  npm_package_dependencies_jotai: "^2.12.3",
  npm_package_dependencies_react_dom: "^19.1.0",
  npm_package_dependencies__tanstack_react_query_devtools: "^5.74.9",
  ZSH: "/Users/royal/.oh-my-zsh",
  npm_package_devDependencies_globals: "^16.1.0",
  npm_package_devDependencies_eslint_plugin_jsx_a11y: "^6.10.2",
  npm_package_dependencies_dayjs: "^1.11.13",
  npm_package_devDependencies__types_nodemailer: "^6.4.17",
  USER: "royal",
  NVM_DIR: "/Users/royal/.nvm",
  npm_package_devDependencies__types_react: "^19.1.2",
  npm_package_devDependencies__eslint_js: "^9.26.0",
  npm_package_license: "MIT",
  LS_COLORS:
    "di=1;36:ln=35:so=32:pi=33:ex=31:bd=34;46:cd=34;43:su=30;41:sg=30;46:tw=30;42:ow=30;43",
  npm_package_dependencies_react_activity_calendar: "^2.7.10",
  npm_package_scripts_deploy: "sh deploy.sh",
  COMMAND_MODE: "unix2003",
  PNPM_SCRIPT_SRC_DIR:
    "/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning",
  npm_package_devDependencies_vite_tsconfig_paths: "^5.1.4",
  npm_package_devDependencies__tailwindcss_vite: "^4.1.4",
  npm_package_dependencies_chance: "^1.1.12",
  npm_package_scripts_bundlecheck: "vite-bundle-visualizer",
  SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.fgv71ghX34/Listeners",
  npm_package_devDependencies_eslint_plugin_simple_import_sort: "^12.1.1",
  npm_package_devDependencies_eslint: "^9.26.0",
  npm_package_scripts_prettier_fix:
    'prettier --write "src/**/(*.tsx|*.ts|*.css|*.scss)"',
  npm_package_scripts_db_gen:
    "drizzle-kit generate --config app/.server/db/config.ts",
  VSCODE_PROFILE_INITIALIZED: "1",
  __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0",
  npm_execpath:
    "/Users/royal/.nvm/versions/node/v20.18.0/lib/node_modules/pnpm/bin/pnpm.cjs",
  npm_package_devDependencies__typescript_eslint_eslint_plugin: "^8.32.0",
  npm_package_devDependencies_tsx: "^4.19.4",
  npm_package_devDependencies__types_chance: "^1.1.6",
  PAGER: "less",
  npm_package_devDependencies__tailwindcss_postcss: "^4.1.4",
  npm_config_frozen_lockfile: "",
  npm_package_devDependencies__types_react_dom: "^19.1.2",
  LSCOLORS: "Gxfxcxdxbxegedabagacad",
  npm_package_devDependencies__typescript_eslint_parser: "^8.32.0",
  npm_package_dependencies_tailwind_merge: "^3.2.0",
  npm_package_scripts_lint_fix: "eslint . --fix",
  PATH: "/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.bin:/Users/royal/.nvm/versions/node/v20.18.0/lib/node_modules/pnpm/dist/node-gyp-bin:/Users/royal/.console-ninja/.bin:/Users/royal/.nvm/versions/node/v20.18.0/bin:/opt/homebrew/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/royal/.console-ninja/.bin:/Users/royal/.nvm/versions/node/v20.18.0/bin:/opt/homebrew/bin:/Users/royal/.rye/shims:/Users/royal/.cargo/bin:/Applications/Docker.app/Contents/Resources/bin/:/Users/royal/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand:/Applications/Docker.app/Contents/Resources/bin/",
  npm_package_scripts_typecheck: "react-router typegen && tsc",
  npm_package_scripts_fmt: "prettier -w .",
  npm_package_dependencies_isbot: "^5.1.27",
  USER_ZDOTDIR: "/Users/royal",
  __CFBundleIdentifier: "com.microsoft.VSCode",
  npm_command: "run-script",
  npm_package_devDependencies_tailwindcss: "^4.1.4",
  PWD: "/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning",
  npm_package_devDependencies_eslint_plugin_react_hooks: "^5.2.0",
  npm_lifecycle_event: "build",
  npm_package_dependencies_cross_env: "^7.0.3",
  LANG: "en_US.UTF-8",
  npm_package_devDependencies_eslint_plugin_import: "^2.31.0",
  npm_package_dependencies__react_router_node: "^7.5.3",
  npm_package_scripts_start:
    "cross-env NODE_ENV=production PORT=3001 react-router-serve ./build/server/index.js",
  npm_package_scripts_build:
    "pnpm typecheck && cross-env NODE_ENV=production react-router build",
  NODE_PATH:
    "/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/@react-router+dev@7.6.0_@react-router+serve@7.6.0_react-router@7.6.0_react-dom@19.1.0_react@1_hr4t5rnwgouclku5z6f45srmnq/node_modules/@react-router/dev/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/@react-router+dev@7.6.0_@react-router+serve@7.6.0_react-router@7.6.0_react-dom@19.1.0_react@1_hr4t5rnwgouclku5z6f45srmnq/node_modules/@react-router/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/@react-router+dev@7.6.0_@react-router+serve@7.6.0_react-router@7.6.0_react-dom@19.1.0_react@1_hr4t5rnwgouclku5z6f45srmnq/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/bin/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/src/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/cross-env@7.0.3/node_modules/cross-env/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/cross-env@7.0.3/node_modules:/Users/royal/Desktop/Code/vite-ssr-t3-hero-ui-words-learning/node_modules/.pnpm/node_modules",
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: "",
  XPC_FLAGS: "0x0",
  NODE_ENV: "production",
  npm_package_dependencies__heroui_theme: "2.4.14-beta.2",
  npm_package_dependencies_classnames: "^2.5.1",
  npm_config_node_gyp:
    "/Users/royal/.nvm/versions/node/v20.18.0/lib/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js",
  npm_package_dependencies__tanstack_react_query: "^5.74.9",
  npm_package_scripts_db_migrate:
    "npx drizzle-kit migrate --config app/.server/db/config.ts",
  npm_package_dependencies_react_infinite_scroll_hook: "^5.0.2",
  XPC_SERVICE_NAME: "0",
  npm_package_prettier_plugins_0: "prettier-plugin-tailwindcss",
  VSCODE_INJECTION: "1",
  npm_package_dependencies__trpc_client: "^11.1.2",
  npm_package_type: "module",
  HOME: "/Users/royal",
  SHLVL: "4",
  npm_package_dependencies_usehooks_ts: "^3.1.1",
  npm_package_dependencies__heroui_react: "2.8.0-beta.2",
  npm_package_lint_staged____js_jsx_ts_tsx__0: "eslint --fix",
  VSCODE_GIT_ASKPASS_MAIN:
    "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",
  npm_package_dependencies_framer_motion: "^12.9.2",
  npm_package_dependencies__iconify_react: "^6.0.0",
  npm_package_lint_staged____js_jsx_ts_tsx__1: "prettier --write",
  npm_package_scripts_db_push:
    "drizzle-kit push --config app/.server/db/config.ts",
  npm_package_devDependencies_husky: "^9.1.7",
  npm_package_dependencies__react_router_fs_routes: "^7.5.3",
  npm_package_dependencies__trpc_server: "^11.1.2",
  npm_package_dependencies__react_router_serve: "^7.5.3",
  LESS: "-R",
  LOGNAME: "royal",
  npm_lifecycle_script:
    "pnpm typecheck && cross-env NODE_ENV=production react-router build",
  npm_package_dependencies_zod: "^3.24.3",
  npm_package_dependencies_superjson: "^2.2.2",
  npm_package_devDependencies_prettier_plugin_tailwindcss: "^0.6.11",
  VSCODE_GIT_IPC_HANDLE:
    "/var/folders/tp/5hxjkh8d61qbm36vv079v8h40000gn/T/vscode-git-a8bc3347c0.sock",
  LC_CTYPE: "UTF-8",
  npm_package_dependencies_react: "^19.1.0",
  NVM_BIN: "/Users/royal/.nvm/versions/node/v20.18.0/bin",
  npm_config_user_agent: "pnpm/9.4.0 npm/? node/v20.18.0 darwin arm64",
  npm_package_devDependencies__react_router_dev: "^7.5.3",
  npm_package_devDependencies__types_node: "^22",
  VSCODE_GIT_ASKPASS_NODE:
    "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",
  GIT_ASKPASS:
    "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",
  npm_package_dependencies_jsonwebtoken: "^9.0.2",
  npm_package_scripts_prepare: "husky",
  npm_package_dependencies_postgres: "^3.4.5",
  npm_package_scripts_clean: "rm -rf node_modules pnpm-lock.yaml build",
  npm_package_dependencies_react_router: "^7.5.3",
  npm_node_execpath: "/Users/royal/.nvm/versions/node/v20.18.0/bin/node",
  npm_package_devDependencies_eslint_plugin_react: "^7.37.5",
  npm_package_dependencies_next_themes: "^0.4.6",
  COLORTERM: "truecolor",
  DATABASE_URL: "postgresql://postgres:12345678@localhost:5432/words-learning",
  JWT_SECRET: "ROYAL_JWT_SECRET",
  CRYPTO_SECRET: "ROYAL_CRYPTO_SECRET",
  EMAIL_SERVER_ADDRESS: "vixvivu@gmail.com",
  EMAIL_SERVER_PASS: "eqsm kcfu wral vdja",
};
const prepare$l = db
  .select()
  .from(User)
  .where(eq(User.id, sql.placeholder("id")))
  .limit(1)
  .prepare("prepare");
const getMyUserInfo$1 = async (req) => {
  const token = Cookies.get(req, JWT_KEY);
  if (!token) return void 0;
  try {
    const { userId } = jwt.verify(
      token,
      define_process_env_default$3.JWT_SECRET,
    );
    const [user] = await prepare$l.execute({ id: Number(userId) });
    return user;
  } catch (error) {
    return void 0;
  }
};
const createTRPCContext = async (ctx) => {
  const myUserInfo = await getMyUserInfo$1(ctx.req);
  return {
    ...ctx,
    myUserInfo,
    userId: myUserInfo == null ? void 0 : myUserInfo.id,
  };
};
const t = initTRPC.context().create({
  transformer: SuperJSON,
});
const isAuthed = t.middleware(({ ctx: { myUserInfo }, next }) => {
  if (!myUserInfo) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Please login first",
    });
  }
  return next();
});
const isUnAuthed = t.middleware(({ ctx: { myUserInfo }, next }) => {
  if (myUserInfo) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You are already logged in",
    });
  }
  return next();
});
const publicProcedure = t.procedure;
const authProcedure = publicProcedure.use(isAuthed);
const unAuthProcedure = publicProcedure.use(isUnAuthed);
const p = {
  public: publicProcedure,
  auth: authProcedure,
  unAuth: unAuthProcedure,
};
const doneWord = p.auth
  .input(z.object({ wordSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { wordSlug } }) => {
    await db.insert(UsersToWords).values({ userId, wordSlug });
  });
const sendComment = p.auth
  .input(z.object({ content: z.string(), wordSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { content, wordSlug } }) => {
    await db.insert(Post).values({ userId, wordSlug, content });
  });
var define_process_env_default$2 = {
  EMAIL_SERVER_ADDRESS: "vixvivu@gmail.com",
  EMAIL_SERVER_PASS: "eqsm kcfu wral vdja",
};
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: IS_PROD,
  auth: {
    user: define_process_env_default$2.EMAIL_SERVER_ADDRESS,
    pass: define_process_env_default$2.EMAIL_SERVER_PASS,
  },
});
const sendVerifyCodeToEmail = async ({
  email: email2,
  verifyCode: verifyCode2,
}) => {
  const mailOptions = {
    // from: `Words Learning <${process.env.EMAIL_SERVER_ADDRESS}>`,
    from: `Words Learning`,
    to: email2,
    subject: `Welcome to Words Learning App!`,
    // text: `Hello ${email.split("@")[0]},\n\nThank you for registering with us! We're excited to have you on board.\n\nPlease check your verification code.\n\nBest regards,\nWords Learning Team`,
    html: `
        <h2>Welcome, ${email2.split("@")[0]} !</h2>
        <p>Your verification code is: ${verifyCode2}</p>
        <p>Thank you for registering with us! We're excited to have you on board.</p>
        <p>Best regards,<br>Words Learning Team</p>
      `,
  };
  return transporter.sendMail(mailOptions);
};
const prepare$k = db
  .select()
  .from(Verify)
  .where(eq(Verify.email, sql.placeholder("email")))
  .limit(1)
  .prepare("prepare");
const sendVerifyCode = p.unAuth
  .input(
    z.object({
      email,
    }),
  )
  .mutation(async ({ input: { email: email2 } }) => {
    const verifyCode2 = Chance().integer({ min: 1e5, max: 999999 }).toString();
    const [verify] = await prepare$k.execute({ email: email2 });
    if (verify) {
      await db
        .update(Verify)
        .set({ code: verifyCode2 })
        .where(eq(Verify.email, email2))
        .returning({ updateAt: Verify.updatedAt });
    } else {
      await db
        .insert(Verify)
        .values({ email: email2, code: verifyCode2 })
        .returning({ updateAt: Verify.updatedAt });
    }
    await sendVerifyCodeToEmail({ email: email2, verifyCode: verifyCode2 });
  });
var define_process_env_default$1 = { CRYPTO_SECRET: "ROYAL_CRYPTO_SECRET" };
const encrypt = (text2) => {
  return crypto
    .createHmac("sha256", define_process_env_default$1.CRYPTO_SECRET)
    .update(text2)
    .digest("hex");
};
var define_process_env_default = { JWT_SECRET: "ROYAL_JWT_SECRET" };
const prepare$j = db
  .select()
  .from(User)
  .where(eq(User.email, sql.placeholder("email")))
  .limit(1)
  .prepare("prepare");
const signIn = p.unAuth
  .input(signInForm)
  .mutation(
    async ({
      ctx: { resHeaders },
      input: { email: email2, password: password2, keepAlive: keepAlive2 },
    }) => {
      const [user] = await prepare$j.execute({ email: email2 });
      if (!user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "用户不存在",
        });
      }
      if (user.password !== encrypt(password2)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "密码错误",
        });
      }
      const userId = user.id;
      const maxAge = COOKIE_MAX_AGE / (keepAlive2 ? 1 : 7);
      const jwtToken = jwt.sign(
        { userId },
        define_process_env_default.JWT_SECRET,
        {
          expiresIn: maxAge,
        },
      );
      Cookies.set(resHeaders, JWT_KEY, jwtToken, { maxAge });
    },
  );
const signOut = p.auth.mutation(({ ctx: { resHeaders } }) => {
  Cookies.delete(resHeaders, JWT_KEY);
});
const prepareGetUserByEmail = db
  .select()
  .from(User)
  .where(eq(User.email, sql.placeholder("email")))
  .limit(1)
  .prepare("prepareGetUserByEmail");
const prepareGetUserByName = db
  .select()
  .from(User)
  .where(eq(User.name, sql.placeholder("name")))
  .limit(1)
  .prepare("prepareGetUserByName");
const prepareGetVerifyByEmail = db
  .select()
  .from(Verify)
  .where(eq(Verify.email, sql.placeholder("email")))
  .limit(1)
  .prepare("prepareGetUserByName");
const signUp = p.unAuth
  .input(signUpForm)
  .mutation(
    async ({
      input: {
        email: email2,
        name: name2,
        password: password2,
        verifyCode: verifyCode2,
      },
    }) => {
      const [userByEmail] = await prepareGetUserByEmail.execute({
        email: email2,
      });
      if (userByEmail) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Email already in use",
        });
      }
      const [userByName] = await prepareGetUserByName.execute({ name: name2 });
      if (userByName) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Username already in use",
        });
      }
      const [verify] = await prepareGetVerifyByEmail.execute({ email: email2 });
      if (!verify) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Please send verification code first",
        });
      }
      if (verify.code !== verifyCode2) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Incorrect verification code",
        });
      }
      const diff = dayjs().diff(dayjs(verify.updatedAt), "s");
      if (diff > 60) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Verification code has expired",
        });
      }
      await db
        .insert(User)
        .values({ name: name2, email: email2, password: encrypt(password2) });
    },
  );
const starBook = p.auth
  .input(z.object({ bookSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { bookSlug } }) => {
    await db.insert(UsersToBooks).values({ userId, bookSlug });
  });
const unDoneWord = p.auth
  .input(z.object({ wordSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { wordSlug } }) => {
    await db
      .delete(UsersToWords)
      .where(
        and(
          eq(UsersToWords.userId, userId),
          eq(UsersToWords.wordSlug, wordSlug),
        ),
      );
  });
const unStarBook = p.auth
  .input(z.object({ bookSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { bookSlug } }) => {
    await db
      .delete(UsersToBooks)
      .where(
        and(
          eq(UsersToBooks.userId, userId),
          eq(UsersToBooks.bookSlug, bookSlug),
        ),
      );
  });
const unVotePost = p.auth
  .input(z.object({ postId: z.number().int() }))
  .mutation(async ({ ctx: { userId }, input: { postId } }) => {
    await db
      .delete(UsersToPostsVote)
      .where(
        and(
          eq(UsersToPostsVote.userId, userId),
          eq(UsersToPostsVote.postId, postId),
        ),
      );
  });
const prepare$i = db
  .select()
  .from(Verify)
  .where(eq(Verify.email, sql.placeholder("email")))
  .limit(1)
  .prepare("prepare");
const updatePassword = p.unAuth
  .input(updatePasswordForm)
  .mutation(
    async ({
      input: { email: email2, password: password2, verifyCode: verifyCode2 },
    }) => {
      const [verify] = await prepare$i.execute({ email: email2 });
      if (!verify) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Please send verification code first",
        });
      }
      if (verify.code !== verifyCode2) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Verification code is incorrect",
        });
      }
      const diff = dayjs().diff(dayjs(verify.updatedAt), "s");
      if (diff > 60) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Verification code has expired",
        });
      }
      await db
        .update(User)
        .set({ password: encrypt(password2) })
        .where(eq(User.email, email2));
    },
  );
const votePost = p.auth
  .input(z.object({ postId: z.number().int() }))
  .mutation(async ({ ctx: { userId }, input: { postId } }) => {
    await db.insert(UsersToPostsVote).values({ userId, postId });
  });
const prepare$h = db
  .select({
    id: Book.id,
    slug: Book.slug,
    image: Book.image,
    link: Book.link,
    name: Book.name,
    wordsCount: count(Word.id),
  })
  .from(Book)
  .leftJoin(Word, eq(Word.bookSlug, Book.slug))
  .groupBy(Book.id)
  .prepare("prepare");
const getAllBooks = p.public.query(async () => {
  const allBooks = await prepare$h.execute();
  return { allBooks };
});
const prepare$g = db
  .select()
  .from(Book)
  .where(eq(Book.slug, sql.placeholder("bookSlug")))
  .limit(1)
  .prepare("prepare");
const getBookDetail = p.public
  .input(
    z.object({
      bookSlug: z.string(),
    }),
  )
  .query(async ({ input: { bookSlug } }) => {
    const [bookDetail] = await prepare$g.execute({ bookSlug });
    return { bookDetail };
  });
const prepare$f = db
  .select({ Word })
  .from(Word)
  .innerJoin(Book, eq(Book.slug, Word.bookSlug))
  .innerJoin(UsersToWords, eq(UsersToWords.wordSlug, Word.slug))
  .where(
    and(
      eq(Word.bookSlug, sql.placeholder("bookSlug")),
      eq(UsersToWords.userId, sql.placeholder("userId")),
    ),
  )
  .limit(sql.placeholder("limit"))
  .offset(sql.placeholder("offset"))
  .orderBy(Word.id)
  .prepare("prepare");
const getDoneWordsOfBook = p.auth
  .input(
    z.object({
      bookSlug: z.string(),
      offset: z.number().int().default(0),
      limit: z.number().int().default(20),
    }),
  )
  .query(async ({ ctx: { userId }, input: { bookSlug, offset, limit } }) => {
    const doneWordsOfBook = await prepare$f.execute({
      bookSlug,
      userId,
      limit,
      offset,
    });
    return { doneWordsOfBook };
  });
const prepare$e = db
  .select()
  .from(UsersToPostsVote)
  .where(
    and(
      eq(UsersToPostsVote.postId, sql.placeholder("postId")),
      eq(UsersToPostsVote.userId, sql.placeholder("userId")),
    ),
  )
  .limit(1)
  .prepare("prepare");
const getIsPostVote = p.public
  .input(
    z.object({
      postId: z.number().int(),
    }),
  )
  .query(async ({ ctx: { userId }, input: { postId } }) => {
    if (!userId) return { isPostVote: false };
    const [item] = await prepare$e.execute({ postId, userId });
    return { isPostVote: !!item };
  });
const prepare$d = db
  .select()
  .from(UsersToWords)
  .where(
    and(
      eq(UsersToWords.wordSlug, sql.placeholder("wordSlug")),
      eq(UsersToWords.userId, sql.placeholder("userId")),
    ),
  )
  .limit(1)
  .prepare("prepare");
const getIsWordDone = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ ctx: { userId }, input: { wordSlug } }) => {
    if (!userId) return { isWordDone: false };
    const [item] = await prepare$d.execute({ wordSlug, userId });
    return { isWordDone: !!item };
  });
const getMultipleWordsStatus = p.auth
  .input(z.object({ wordSlugs: z.array(z.string()) }))
  .query(async ({ ctx: { userId }, input: { wordSlugs } }) => {
    if (!userId || wordSlugs.length === 0) {
      return {
        doneWords: {},
      };
    }
    const items = await db
      .select({ wordSlug: UsersToWords.wordSlug })
      .from(UsersToWords)
      .where(
        and(
          eq(UsersToWords.userId, userId),
          inArray(UsersToWords.wordSlug, wordSlugs),
        ),
      );
    const doneWords = items.reduce((acc, item) => {
      acc[item.wordSlug] = true;
      return acc;
    }, {});
    return { doneWords };
  });
const getMyUserInfo = p.public.query(({ ctx: { myUserInfo } }) => {
  return { myUserInfo };
});
const prepare$c = db
  .select()
  .from(UsersToPostsVote)
  .where(eq(UsersToPostsVote.postId, sql.placeholder("postId")))
  .prepare("prepare");
const getPostVote = p.public
  .input(
    z.object({
      postId: z.number().int(),
    }),
  )
  .query(async ({ input: { postId } }) => {
    const postVotes = await prepare$c.execute({ postId });
    return { postVotesCount: postVotes.length };
  });
const getRandomUndoneWords = p.public
  .input(
    z.object({
      count: z.number().int().min(1).max(100).default(10),
      // Limit to reasonable number
      bookSlug: z.string().optional(),
      // Optional book filter
    }),
  )
  .query(async ({ ctx: { userId }, input: { count: count2, bookSlug } }) => {
    const query = db
      .select({ Word })
      .from(Word)
      .where(
        and(
          // Exclude words that are already marked as done
          notInArray(
            Word.slug,
            db
              .select({ wordSlug: UsersToWords.wordSlug })
              .from(UsersToWords)
              .where(eq(UsersToWords.userId, userId)),
          ),
          ...(bookSlug ? [eq(Word.bookSlug, bookSlug)] : []),
        ),
      )
      .orderBy(sql`RANDOM()`)
      .limit(count2);
    const randomUndoneWords = await query;
    return { randomUndoneWords };
  });
const prepare$b = db
  .select({
    bookSlug: UsersToBooks.bookSlug,
  })
  .from(UsersToBooks)
  .where(eq(UsersToBooks.userId, sql.placeholder("userId")))
  .prepare("prepare");
const getStarBooks = p.public.query(async ({ ctx: { userId } }) => {
  if (!userId) return { starBooks: [] };
  const starBooks = await prepare$b.execute({ userId });
  return { starBooks: starBooks.map((e) => e.bookSlug) };
});
const prepare$a = db
  .select({
    wordSlug: UsersToWords.wordSlug,
    updatedAt: UsersToWords.updatedAt,
  })
  .from(UsersToWords)
  .where(
    and(
      eq(UsersToWords.userId, sql.placeholder("userId")),
      gte(UsersToWords.updatedAt, dayjs().subtract(6, "month").toDate()),
      lte(UsersToWords.updatedAt, dayjs().add(1, "day").toDate()),
    ),
  )
  .prepare("prepare");
const getStudyCalendar = p.auth.query(async ({ ctx: { userId } }) => {
  if (!userId) return { isWordDone: false };
  const studyCalendar = await prepare$a.execute({ userId });
  return { studyCalendar };
});
const prepare$9 = db
  .select({ Word })
  .from(Word)
  .where(
    and(
      notInArray(
        Word.slug,
        db
          .select({ wordSlug: UsersToWords.wordSlug })
          .from(UsersToWords)
          .where(eq(UsersToWords.userId, sql.placeholder("userId"))),
      ),
      eq(Word.bookSlug, sql.placeholder("bookSlug")),
    ),
  )
  .limit(sql.placeholder("limit"))
  .offset(sql.placeholder("offset"))
  .orderBy(asc(Word.id))
  .prepare("prepare");
const getUnDoneWordsOfBook = p.auth
  .input(
    z.object({
      bookSlug: z.string(),
      offset: z.number().int().default(0),
      limit: z.number().int().default(20),
    }),
  )
  .query(async ({ ctx: { userId }, input: { bookSlug, offset, limit } }) => {
    const unDoneWordsOfBook = await prepare$9.execute({
      bookSlug,
      userId,
      limit,
      offset,
    });
    return { unDoneWordsOfBook };
  });
const prepare$8 = db
  .select()
  .from(Cognate)
  .where(eq(Cognate.wordSlug, sql.placeholder("wordSlug")))
  .prepare("prepare");
const getWordCognates = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ input: { wordSlug } }) => {
    const wordCognates = await prepare$8.execute({ wordSlug });
    return { wordCognates };
  });
const prepare$7 = db
  .select()
  .from(Post)
  .where(eq(Post.wordSlug, sql.placeholder("wordSlug")))
  .innerJoin(User, eq(User.id, Post.userId))
  .offset(sql.placeholder("offset"))
  .limit(sql.placeholder("limit"))
  .orderBy(desc(Post.id))
  .prepare("prepare");
const getWordComments = p.public
  .input(
    z.object({
      wordSlug: z.string(),
      offset: z.number().int().default(0),
      limit: z.number().int().default(20),
    }),
  )
  .query(async ({ input: { wordSlug, offset, limit } }) => {
    const wordComments = await prepare$7.execute({ wordSlug, offset, limit });
    return { wordComments };
  });
const prepare$6 = db
  .select()
  .from(Word)
  .where(eq(Word.slug, sql.placeholder("wordSlug")))
  .innerJoin(Book, eq(Book.slug, Word.bookSlug))
  .limit(1)
  .prepare("prepare");
const getWordDetail = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ input: { wordSlug } }) => {
    const [wordDetail] = await prepare$6.execute({ wordSlug });
    return { wordDetail };
  });
const prepare$5 = db
  .select()
  .from(Phrase)
  .where(eq(Phrase.wordSlug, sql.placeholder("wordSlug")))
  .prepare("prepare");
const getWordPhrases = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ input: { wordSlug } }) => {
    const wordPhrases = await prepare$5.execute({ wordSlug });
    return { wordPhrases };
  });
const prepare$4 = db
  .select()
  .from(Sentence)
  .where(eq(Sentence.wordSlug, sql.placeholder("wordSlug")))
  .prepare("prepare");
const getWordSentences = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ input: { wordSlug } }) => {
    const wordSentences = await prepare$4.execute({
      wordSlug,
    });
    return { wordSentences };
  });
const prepare$3 = db
  .select({ Word })
  .from(Word)
  .where(eq(Word.bookSlug, sql.placeholder("bookSlug")))
  .offset(sql.placeholder("offset"))
  .limit(sql.placeholder("limit"))
  .orderBy(Word.id)
  .prepare("prepare");
const getWordsOfBook = p.public
  .input(
    z.object({
      bookSlug: z.string(),
      offset: z.number().int().default(0),
      limit: z.number().int().default(20),
    }),
  )
  .query(async ({ input: { bookSlug, offset, limit } }) => {
    const wordsOfBook = await prepare$3.execute({
      bookSlug,
      offset,
      limit,
    });
    return { wordsOfBook };
  });
const prepare$2 = db
  .select()
  .from(Word)
  .where(like(Word.word, sql.placeholder("keyword")))
  .innerJoin(Book, eq(Book.slug, Word.bookSlug))
  .offset(sql.placeholder("offset"))
  .limit(sql.placeholder("limit"))
  .prepare("prepare");
const getWordsOfKeyword = p.public
  .input(
    z.object({
      keyword: z.string(),
      offset: z.number().int().default(0),
      limit: z.number().int().default(20),
    }),
  )
  .query(async ({ input: { keyword, offset, limit } }) => {
    const wordsOfKeyword = await prepare$2.execute({
      keyword: `%${keyword.trim().toLowerCase()}%`,
      offset,
      limit,
    });
    return { wordsOfKeyword };
  });
const prepare$1 = db
  .select()
  .from(Synonym)
  .where(eq(Synonym.wordSlug, sql.placeholder("wordSlug")))
  .prepare("prepare");
const getWordSynonyms = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ input: { wordSlug } }) => {
    const wordSynonyms = await prepare$1.execute({ wordSlug });
    return { wordSynonyms };
  });
const prepare = db
  .select()
  .from(Translation)
  .where(eq(Translation.wordSlug, sql.placeholder("wordSlug")))
  .prepare("prepare");
const getWordTranslations = p.public
  .input(z.object({ wordSlug: z.string() }))
  .query(async ({ input: { wordSlug } }) => {
    const wordTranslations = await prepare.execute({
      wordSlug,
    });
    return { wordTranslations };
  });
const appRouter = t.router({
  loader: t.router({
    getMyUserInfo,
    getAllBooks,
    getBookDetail,
    getWordDetail,
    getWordsOfKeyword,
    getWordCognates,
    getWordPhrases,
    getWordSentences,
    getWordSynonyms,
    getWordTranslations,
    getWordsOfBook,
    getIsWordDone,
    getStarBooks,
    getDoneWordsOfBook,
    getUnDoneWordsOfBook,
    getStudyCalendar,
    getWordComments,
    getPostVote,
    getIsPostVote,
    getMultipleWordsStatus,
    getRandomUndoneWords,
  }),
  action: t.router({
    doneWord,
    unDoneWord,
    sendVerifyCode,
    signIn,
    signOut,
    signUp,
    updatePassword,
    starBook,
    unStarBook,
    sendComment,
    votePost,
    unVotePost,
  }),
});
const handleRequest = (args) => {
  return fetchRequestHandler({
    endpoint: "/trpc",
    req: args.request,
    router: appRouter,
    createContext: createTRPCContext,
  });
};
const loader$1 = (args) => {
  return handleRequest(args);
};
const action = (args) => {
  return handleRequest(args);
};
const route2 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      action,
      loader: loader$1,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const loader = async () => {
  return redirect(`/Oxford-5000-words/words`);
};
const route3 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      loader,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const $ = withComponentProps(function PageNotFound() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex w-full flex-col items-center justify-center",
    children: [
      /* @__PURE__ */ jsx(LuIcon, {
        size: 100,
        className: "text-foreground-300",
        icon: SearchX,
      }),
      /* @__PURE__ */ jsx("div", {
        className: "text-foreground-400 mt-2",
        children: "Page not found",
      }),
    ],
  });
});
const route4 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: $,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
const serverManifest = {
  entry: {
    module: "/assets/entry.client-K8h_9uke.js",
    imports: [
      "/assets/vendor-react-BOaTbF0U.js",
      "/assets/vendor-react-dom-CNmmZLPy.js",
      "/assets/vendor-tailwind-merge-Cl7RZUN2.js",
      "/assets/vendor-chance-vhTGba_j.js",
    ],
    css: [],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: true,
      hasClientAction: false,
      hasClientLoader: false,
      hasClientMiddleware: false,
      hasErrorBoundary: false,
      module: "/assets/root-Bo0CYKiF.js",
      imports: [
        "/assets/vendor-react-BOaTbF0U.js",
        "/assets/vendor-react-dom-CNmmZLPy.js",
        "/assets/vendor-tailwind-merge-Cl7RZUN2.js",
        "/assets/vendor-chance-vhTGba_j.js",
        "/assets/LuIcon-CuzLAvEj.js",
        "/assets/entry.client-K8h_9uke.js",
        "/assets/ListTabs-CVA7tT73.js",
        "/assets/vendor-zod-C4bLmoCR.js",
        "/assets/vendor-react-hook-form-DyMOlGJB.js",
      ],
      css: [],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      clientMiddlewareModule: void 0,
      hydrateFallbackModule: void 0,
    },
    "routes/$bookSlug.words": {
      id: "routes/$bookSlug.words",
      parentId: "root",
      path: ":bookSlug/words",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasClientMiddleware: false,
      hasErrorBoundary: false,
      module: "/assets/_bookSlug.words-C5q7-GfO.js",
      imports: [
        "/assets/LuIcon-CuzLAvEj.js",
        "/assets/vendor-react-BOaTbF0U.js",
        "/assets/vendor-react-dom-CNmmZLPy.js",
        "/assets/entry.client-K8h_9uke.js",
        "/assets/ListTabs-CVA7tT73.js",
        "/assets/vendor-tailwind-merge-Cl7RZUN2.js",
        "/assets/vendor-chance-vhTGba_j.js",
        "/assets/vendor-zod-C4bLmoCR.js",
        "/assets/vendor-react-hook-form-DyMOlGJB.js",
      ],
      css: [],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      clientMiddlewareModule: void 0,
      hydrateFallbackModule: void 0,
    },
    "routes/trpc.$trpc": {
      id: "routes/trpc.$trpc",
      parentId: "root",
      path: "trpc/:trpc",
      index: void 0,
      caseSensitive: void 0,
      hasAction: true,
      hasLoader: true,
      hasClientAction: false,
      hasClientLoader: false,
      hasClientMiddleware: false,
      hasErrorBoundary: false,
      module: "/assets/trpc._trpc-l0sNRNKZ.js",
      imports: [],
      css: [],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      clientMiddlewareModule: void 0,
      hydrateFallbackModule: void 0,
    },
    "routes/_index": {
      id: "routes/_index",
      parentId: "root",
      path: void 0,
      index: true,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: true,
      hasClientAction: false,
      hasClientLoader: false,
      hasClientMiddleware: false,
      hasErrorBoundary: false,
      module: "/assets/_index-l0sNRNKZ.js",
      imports: [],
      css: [],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      clientMiddlewareModule: void 0,
      hydrateFallbackModule: void 0,
    },
    "routes/$": {
      id: "routes/$",
      parentId: "root",
      path: "*",
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasClientMiddleware: false,
      hasErrorBoundary: false,
      module: "/assets/_-BrkIZiom.js",
      imports: [
        "/assets/LuIcon-CuzLAvEj.js",
        "/assets/vendor-react-BOaTbF0U.js",
        "/assets/entry.client-K8h_9uke.js",
        "/assets/vendor-react-dom-CNmmZLPy.js",
        "/assets/vendor-chance-vhTGba_j.js",
        "/assets/vendor-tailwind-merge-Cl7RZUN2.js",
      ],
      css: [],
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      clientMiddlewareModule: void 0,
      hydrateFallbackModule: void 0,
    },
  },
  url: "/assets/manifest-99955768.js",
  version: "99955768",
  sri: void 0,
};
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = {
  unstable_middleware: false,
  unstable_optimizeDeps: false,
  unstable_splitRouteModules: true,
  unstable_subResourceIntegrity: false,
  unstable_viteEnvironmentApi: false,
};
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { mode: "lazy", manifestPath: "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0,
  },
  "routes/$bookSlug.words": {
    id: "routes/$bookSlug.words",
    parentId: "root",
    path: ":bookSlug/words",
    index: void 0,
    caseSensitive: void 0,
    module: route1,
  },
  "routes/trpc.$trpc": {
    id: "routes/trpc.$trpc",
    parentId: "root",
    path: "trpc/:trpc",
    index: void 0,
    caseSensitive: void 0,
    module: route2,
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3,
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route4,
  },
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr,
};

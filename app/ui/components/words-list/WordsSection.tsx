import { Divider, Spinner } from "@heroui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { SearchX } from "lucide-react";
import { useEffect, useRef } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useParams } from "react-router";
import { listTabAtom } from "~/common/store";
import { trpcClient } from "~/common/trpc";
import { IPageWordsParams, ListTabType } from "~/common/types";
import { LuIcon } from "~/components/LuIcon";
import { useDebounceSearchWord } from "~/hooks/useDebounceSearchWord";
import { useMobile } from "~/hooks/useMobile";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { DictionaryEntry } from "../DictionaryEntry";
import { DetailWord } from "../DetailWord";
import { ListTabs } from "../ListTabs";

const pageSize = 20;

export const WordsSection = () => {
  const { bookSlug = "" } = useParams<IPageWordsParams>();
  const { searchWord } = useDebounceSearchWord();
  const { isLogin } = useMyUserInfo();
  const listTab = useAtomValue(listTabAtom);
  const { isMobile } = useMobile();

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
        return undefined;
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
        return undefined;
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
        return undefined;
      }
      return lastPageParam + 1;
    },
    select(data) {
      return data.pages.map((e) => e.doneWordsOfBook);
    },
    enabled:
      isLogin && !!bookSlug && !searchWord && listTab === ListTabType.DONE,
  });

  const getUnDoneWordsOfBook = useInfiniteQuery({
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
        return undefined;
      }
      return lastPageParam + 1;
    },
    select(data) {
      return data.pages.map((e) => e.unDoneWordsOfBook);
    },
    enabled:
      isLogin && !!bookSlug && !searchWord && listTab === ListTabType.UNDONE,
  });

  const wordsQueryMap = {
    [ListTabType.ALL]: getWordsOfBookQuery,
    [ListTabType.DONE]: getDoneWordsOfBookQuery,
    [ListTabType.UNDONE]: getUnDoneWordsOfBook,
  };

  const wordsQuery = searchWord
    ? getWordsOfKeywordQuery
    : wordsQueryMap[listTab];

  // Sửa useEffect để tránh vòng lặp vô hạn
  useEffect(() => {
    if (!searchWord && wordsQuery.isStale) {
      wordsQuery.refetch();
    }
  }, [listTab, searchWord]); // Loại bỏ wordsQuery khỏi dependencies

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

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ block: "end" });
  }, [bookSlug]);

  const renderContent = () => {
    if (allWords.length === 0) {
      if (wordsQuery.isFetching) {
        return (
          <div className="flex h-full flex-col items-center justify-center">
            <Spinner size="lg" />
            <div className="text-foreground-400 mt-4 font-light">
              Searching...
            </div>
          </div>
        );
      }

      return (
        <div className="flex h-full flex-col items-center justify-center">
          <LuIcon icon={SearchX} size={100} className="text-foreground-300" />
          <div className="text-foreground-400 mt-4">No results</div>
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4 sm:p-4 sm:!pt-0">
        {allWords.map((item) => (
          <DictionaryEntry
            key={String(item.Word.id)}
            id={String(item.Word.id)}
            info={item}
          />
        ))}
        {renderEnd()}
      </div>
    );
  };

  const renderEnd = () => {
    if (wordsQuery.isFetchingNextPage) {
      return (
        <div className="my-6 flex flex-col items-center justify-center">
          <Spinner />
          <div className="text-small text-foreground-400 mt-2 font-light">
            Searching...
          </div>
        </div>
      );
    }

    return (
      <div
        ref={sentryRef}
        className="text-small text-foreground-400 my-6 text-center"
      >
        Total {totalCount} results
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-91px)] overflow-y-scroll" ref={rootRef}>
      <div ref={topRef} />
      <main className="bg-background mx-auto flex gap-4 p-6 sm:p-0">
        <div className="flex flex-1 flex-col gap-4 transition-all duration-300 ease-in-out">
          {isLogin && isMobile && !searchWord && (
            <div className="bg-background sticky top-0 z-10">
              <div className="w-full px-4 pt-4">
                <ListTabs />
              </div>
              <Divider className="my-2" />
            </div>
          )}
          {renderContent()}
        </div>
        <DetailWord />
      </main>
    </div>
  );
};

import React, { useEffect, useMemo, useRef, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useParams } from "react-router";
import { Button, Divider, Input, Spinner } from "@heroui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { SearchX, Shuffle } from "lucide-react";

import { listTabAtom, wordsDoneStatusAtom } from "~/common/store";
import { trpcClient } from "~/common/trpc";
import { IPageWordsParams, ListTabType } from "~/common/types";
import { LuIcon } from "~/components/LuIcon";
import { useGetMultipleWordsStatusQuery } from "~/hooks/request/query/useGetMultipleWordsStatusQuery";
import { useDebounceSearchWord } from "~/hooks/useDebounceSearchWord";
import { useMobile } from "~/hooks/useMobile";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";

import { DetailWord } from "../DetailWord";
import { DictionaryEntry } from "../DictionaryEntry";
import { ListTabs } from "../ListTabs";

const pageSize = 20;

export const WordsSection: React.FC = () => {
  const { bookSlug = "" } = useParams<IPageWordsParams>();
  const { searchWord } = useDebounceSearchWord();
  const { isLogin } = useMyUserInfo();
  const listTab = useAtomValue(listTabAtom);
  const topRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useMobile();

  // const [randomWords, setRandomWords] = useState<IWordItem[]>([]);
  const [randomWordCount, setRandomWordCount] = useState<number>(5);

  // Fetch words of the keyword
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

  // Fetch words of the book
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

  // Fetch done and undone words of the book
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

  // Fetch undone words of the book
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

  // Fetch random undone words of the book
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
      // Always return undefined to prevent fetching next pages
      return undefined;
    },
    select(data) {
      return data.pages.map((e) => e.randomUndoneWords);
    },
    enabled: !!bookSlug && !!randomWordCount && listTab === ListTabType.RANDOM,
  });

  // Preserve the word slugs we've already checked regardless of which tab is selected
  const [allCheckedWordSlugs] = useState<Set<string>>(new Set());

  const wordsQueryMap = {
    [ListTabType.ALL]: getWordsOfBookQuery,
    [ListTabType.DONE]: getDoneWordsOfBookQuery,
    [ListTabType.UNDONE]: getUnDoneWordsOfBook,
    [ListTabType.RANDOM]: getRandomWordsOfBook,
  };

  const wordsQuery = searchWord
    ? getWordsOfKeywordQuery
    : wordsQueryMap[listTab];

  // Modified useEffect to avoid infinite refetch loops
  useEffect(() => {
    if (!searchWord && wordsQuery.isStale) {
      wordsQuery.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    topRef.current?.scrollIntoView({ block: "end" });
  }, [bookSlug]);

  // Extract word slugs from loaded words
  const wordsDoneStatus = useAtomValue(wordsDoneStatusAtom);

  // Get only new words that haven't been checked yet and don't exist in the atom
  // This is tab-agnostic - we track all slugs regardless of which tab is showing them
  const newWordSlugs = useMemo(() => {
    return allWords
      .map((item) => item.Word.slug)
      .filter((slug) => {
        // If this word isn't in the atom and we haven't checked it yet, add it to the list
        if (
          wordsDoneStatus[slug] === undefined &&
          !allCheckedWordSlugs.has(slug)
        ) {
          return true;
        }
        return false;
      });
  }, [allWords, allCheckedWordSlugs, wordsDoneStatus]);

  const setWordsDoneStatus = useSetAtom(wordsDoneStatusAtom);

  // Use the bulk query hook to fetch status of only NEW visible words
  const { data: wordsStatusData } = useGetMultipleWordsStatusQuery({
    wordSlugs: newWordSlugs,
    enabled:
      isLogin && newWordSlugs.length > 0 && listTab !== ListTabType.UNDONE,
  });

  // Update the global atom with the fetched statuses
  useEffect(() => {
    if (wordsStatusData?.doneWords && isLogin && newWordSlugs.length > 0) {
      // Merge new word statuses with existing ones
      setWordsDoneStatus((prev) => ({ ...prev, ...wordsStatusData.doneWords }));

      // Update the master list of all checked word slugs
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
          {listTab === ListTabType.RANDOM && (
            <div className="flex w-full items-center gap-4 sm:flex-col sm:items-start sm:px-4">
              <p className="text-left md:hidden">Number of random words:</p>
              <Input
                type="number"
                value={randomWordCount.toString()}
                onChange={(e) => setRandomWordCount(Number(e.target.value))}
                placeholder="Enter count of random words"
                className="w-1/2 sm:w-full"
              />
              <Button
                className="flex flex-1 items-center gap-2 sm:w-full sm:p-2"
                onPress={() => wordsQuery.refetch()}
              >
                <LuIcon icon={Shuffle} size={20} />
                Random Words
              </Button>
            </div>
          )}
          {renderContent()}
        </div>
        <DetailWord />
      </main>
    </div>
  );
};

import { Spinner } from "@heroui/react";
import { SearchX } from "lucide-react";
import { trpcClient } from "~/common/trpc";
import { LuIcon } from "~/components/LuIcon";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useDebounceSearchWord } from "~/hooks/useDebounceSearchWord";
import { useParams } from "react-router";
import { IPageWordsParams } from "~/common/types";
import { DictionaryEntry } from "./DictionaryEntry";

export const SearchWordsList = () => {
  const { bookSlug = "" } = useParams<IPageWordsParams>();

  const { searchWord } = useDebounceSearchWord();

  const getWordsOfKeywordQuery = useInfiniteQuery({
    queryKey: ["getWordsOfKeyword", bookSlug, searchWord],
    queryFn: async ({ pageParam }) => {
      const pageSize = 20;
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

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading: getWordsOfKeywordQuery.isFetching,
    hasNextPage: getWordsOfKeywordQuery.hasNextPage,
    onLoadMore: getWordsOfKeywordQuery.fetchNextPage,
    disabled: !!getWordsOfKeywordQuery.error,
    rootMargin: "0px 0px 200px 0px",
  });

  const showWordsList = getWordsOfKeywordQuery.data || [];
  const allWords = showWordsList.flat(2);
  const totalCount = allWords.length;

  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ block: "end" });
  }, [bookSlug, topRef]);

  const renderContent = () => {
    if (allWords.length === 0) {
      if (getWordsOfKeywordQuery.isFetching) {
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
      <div className="flex w-full flex-col">
        {allWords.map((item) => {
          return <DictionaryEntry id={String(item.Word.id)} info={item} />;
        })}
        {renderEnd()}
      </div>
    );
  };

  const renderEnd = () => {
    if (getWordsOfKeywordQuery.isFetchingNextPage) {
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
      <main className="bg-background">
        <div className="mx-auto flex gap-6 px-4 py-6">
          {/* Card */}
          <div className="flex-1 transition-all duration-300 ease-in-out">
            <div ref={topRef} />
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

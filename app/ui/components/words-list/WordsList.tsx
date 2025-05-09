import { useEffect, useRef } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { Divider, Spinner } from "@heroui/react";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { SearchX } from "lucide-react";

import { IWordItem } from "~/common/types";
import { LuIcon } from "~/components/LuIcon";

import { DetailWord } from "../DetailWord";
import { DictionaryEntry } from "../DictionaryEntry";
import { ListTabs } from "../ListTabs";

interface WordsListProps {
  wordsQuery: UseInfiniteQueryResult<
    {
      Word: IWordItem["Word"];
    }[][],
    Error
  >;
  isLogin: boolean;
  isMobile: boolean;
  bookSlug: string;
}

export const WordsList = ({
  wordsQuery,
  isLogin,
  isMobile,
  bookSlug,
}: WordsListProps) => {
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
          {isLogin && isMobile && (
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

import React from "react";
import { href, Link, useParams } from "react-router";
import { Button, Card, CardBody } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";

import {
  isBooksPanelDrawerOpenAtom,
  isCollapsibleSidebarOpenAtom,
  searchWordAtom,
  wordDetailSlugAtom,
} from "~/common/store";
import { IBookItem } from "~/common/types";
import { cx } from "~/helper/common";
import { useMobile } from "~/hooks/useMobile";

import Image from "../common/Image";

import { BooksPanel } from "./BooksPanel";

export const Sidebar: React.FC<{
  allBooks: IBookItem[];
  starBooks: string[];
}> = ({ allBooks, starBooks }) => {
  const { bookSlug = "" } = useParams<{ bookSlug: string }>();
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
  return (
    <>
      <Card className="h-fit w-full sm:rounded-none sm:border-none sm:shadow-none">
        <CardBody className="p-0">
          <div className="border-divider border-b p-4">
            <h2 className="font-semibold">
              {allBooks.find((book) => book.slug === bookSlug)?.name}
            </h2>
            <p className="text-small text-default-500">
              {allBooks.find((book) => book.slug === bookSlug)?.wordsCount}
            </p>
          </div>
          <div className="p-2">
            {booksList.map((item) => {
              return (
                <Button
                  key={item.slug}
                  variant="light"
                  className={cx(
                    "hover:bg-default-100 h-12 w-full justify-start rounded-none transition-all duration-300 ease-out",
                  )}
                  startContent={
                    <div className="relative w-[30px] min-w-[30px]">
                      <Image
                        alt={item.slug}
                        src={
                          item.image ||
                          "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg"
                        }
                        className={cx(
                          "h-[40px] w-[30px] min-w-[30px] overflow-hidden bg-cover",
                        )}
                      />
                      {bookSlug === item.slug && (
                        <div className="bg-primary absolute bottom-0.5 -left-1.5 flex h-4 w-4 items-center justify-center rounded-full p-2">
                          {"⭐"}
                        </div>
                      )}
                    </div>
                  }
                  onPress={(e) => {
                    e.continuePropagation();
                    setSearchWord("");
                    setWordDetailSlug("");
                    setIsBooksPanelDrawerOpen(false);
                  }}
                  as={Link}
                  to={href("/:bookSlug/words", { bookSlug: item.slug })}
                >
                  <p className="w-full truncate overflow-hidden text-left">
                    {item.name}
                  </p>
                </Button>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export const CollapsibleSidebar: React.FC<{
  allBooks: IBookItem[];
  starBooks: string[];
}> = ({ allBooks, starBooks }) => {
  const { bookSlug = "" } = useParams<{ bookSlug: string }>();
  const { isMobile } = useMobile();
  const [isCollapsibleSidebarOpen] = useAtom(isCollapsibleSidebarOpenAtom);

  return (
    <div
      className={cx(
        `h-dvh overflow-auto transition-all duration-300`,
        !isCollapsibleSidebarOpen ? "w-[80px]" : "w-[240px]",
        isMobile && "hidden",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <AnimatePresence mode="wait">
            {isCollapsibleSidebarOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ opacity: 1, width: 240 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex h-10 items-center justify-start sm:hidden"
              >
                <h2
                  className={cx(
                    `block w-[220px] items-center justify-start truncate text-lg font-semibold whitespace-nowrap transition-all duration-300 ease-in-out`,
                  )}
                  title={allBooks.find((book) => book.slug === bookSlug)?.name}
                >
                  {allBooks.find((book) => book.slug === bookSlug)?.name}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
          {!isCollapsibleSidebarOpen && (
            <h2
              className={`pointer-events-auto flex h-10 items-center justify-start text-lg font-semibold opacity-0 transition-opacity`}
            />
          )}
        </div>

        <BooksPanel allBooks={allBooks} starBooks={starBooks} />
      </div>
    </div>
  );
};

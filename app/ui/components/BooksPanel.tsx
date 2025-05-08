import { Button } from "@heroui/react";
import { IBookItem } from "~/common/types";
import { cx } from "~/helper/common";
import Image from "../common/Image";
import { href, Link, useParams } from "react-router";
import { useAtom, useSetAtom } from "jotai";
import {
  isCollapsibleSidebarOpenAtom,
  searchWordAtom,
  wordDetailSlugAtom,
} from "~/common/store";
import { AnimatePresence, motion } from "framer-motion";

export const BooksPanel = ({
  allBooks,
  starBooks,
}: {
  allBooks: IBookItem[];
  starBooks: string[];
}) => {
  const { bookSlug = "" } = useParams<{ bookSlug: string }>();
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

  return (
    <div className="flex flex-col gap-2">
      {booksList.map((item) => {
        return (
          <motion.div
            key={item.id}
            layoutId={String(item.id)}
            className="w-full"
          >
            <Button
              variant="light"
              className={cx(
                `hover:bg-default-100 h-12 w-full justify-start rounded-none transition-all duration-300 ease-out`,
                !isCollapsibleSidebarOpen ? "flex justify-center px-2" : "px-4",
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
                setIsCollapsibleSidebarOpen(false);
              }}
              as={Link}
              to={href("/:bookSlug/words", { bookSlug: item.slug })}
            >
              <AnimatePresence mode="wait">
                {isCollapsibleSidebarOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <>
                      <div className="flex flex-1 flex-col items-start">
                        <div className="w-[88%] truncate text-left">
                          {item.name}
                        </div>
                        <small className="text-primary">
                          {item.wordsCount} words
                        </small>
                      </div>
                      <span className="text-secondary">
                        {starBooks.includes(item.slug) ? "⭐" : ""}
                      </span>
                    </>
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
};

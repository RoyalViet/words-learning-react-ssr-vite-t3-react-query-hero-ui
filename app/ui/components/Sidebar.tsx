import React from "react";
import { Card, CardBody, Link } from "@heroui/react";
import { cx } from "~/helper/common";
import { useAtom } from "jotai";
import { isCollapsibleSidebarOpenAtom } from "~/common/store";
import { IBookItem } from "~/common/types";
import { useParams } from "react-router";
import { BooksPanel } from "./BooksPanel";
import { useMobile } from "~/hooks/useMobile";
import { AnimatePresence, motion } from "framer-motion";

export const Sidebar: React.FC = () => {
  return (
    <>
      <Card className="h-fit w-full sm:rounded-none sm:border-none sm:shadow-none">
        <CardBody className="p-0">
          <div className="border-divider border-b p-4">
            <h2 className="font-semibold">Oxford 5000 Words</h2>
            <p className="text-small text-default-500">5947 words</p>
          </div>
          <div className="p-2">
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              Oxford Idioms and Phrases
            </Link>
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              Academic Vocabulary
            </Link>
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              IELTS Vocabulary
            </Link>
            <Link
              href="#"
              color="foreground"
              className="hover:bg-default-100 block rounded-lg p-2 text-sm"
            >
              TOEIC Vocabulary
            </Link>
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="sm:hidden"
              >
                <h2
                  className={`flex h-10 items-center justify-start text-lg font-semibold transition-opacity`}
                >
                  {allBooks.find((book) => book.slug === bookSlug)?.name}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <BooksPanel allBooks={allBooks} starBooks={starBooks} />
      </div>
    </div>
  );
};

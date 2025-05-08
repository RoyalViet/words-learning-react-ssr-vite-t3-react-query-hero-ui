import { Button, Card, CardBody, Divider, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import {
  isWordDetailPanelDrawerOpenAtom,
  wordDetailAtom,
} from "~/common/store";
import { IWordItem } from "~/common/types";
import { WordCommentForm } from "./WordCommentForm";
import { DoneWordButton } from "~/components/DoneWordButton";
import { WordAudioButton } from "./WordAudioButton";
import { cx } from "~/helper/common";

export const DetailWord: React.FC<{ isWordLoading?: boolean }> = () => {
  const [wordDetail, setWordDetailAtom] = useAtom(wordDetailAtom);
  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className={cx("sticky top-0 z-10")}
      >
        <Card className="mx-auto max-w-md transition-all duration-300 ease-in-out">
          <CardBody className="gap-4">
            {/* Word Section */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{wordDetail.word}</h2>
              <div className="flex items-center justify-end gap-1">
                <WordAudioButton word={wordDetail.word || ""} />
                <DoneWordButton wordSlug={wordDetail.slug || ""} />
                {/* <WordCommentsList /> */}
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => {
                    //
                  }}
                  aria-label="Show comments"
                  disabled
                  title="Coming soon"
                >
                  <Icon icon="lucide:message-circle" className="text-lg" />
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => {
                    setIsWordDetailPanelDrawerOpen(false);
                    setWordDetailAtom({} as IWordItem["Word"]);
                  }}
                  aria-label="Close"
                >
                  <Icon icon="lucide:x" className="text-lg" />
                </Button>
              </div>
            </div>

            {/* Definition Section */}
            <div className="space-y-3">
              <div>
                <span className="text-default-500 text-sm">
                  {wordDetail.type}
                </span>
                <div className="mt-1 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-default-500 text-xs font-medium">
                      US:
                    </span>
                    <p>{wordDetail.usPronounce}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-default-500 text-xs font-medium">
                      UK:
                    </span>
                    <p>{wordDetail.ukPronounce}</p>
                  </div>
                </div>
              </div>

              {/* Related Terms */}
              {/* <div className="space-y-2">
            {wordDetail.relatedTerms?.map((term, index) => (
              <Link key={index} href="#" color="primary" className="block">
                {term}
              </Link>
            ))}
          </div> */}
              <div className="space-y-2">
                <Link href="#" color="primary" className="block">
                  outstanding achievement
                </Link>
                <Link href="#" color="primary" className="block">
                  academic achievement
                </Link>
                <Link href="#" color="primary" className="block">
                  lifetime achievement
                </Link>
                <Link href="#" color="primary" className="block">
                  school achievement
                </Link>
              </div>
            </div>

            <Divider />

            {/* Example Section */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Example</h3>
              {wordDetail.remember && wordDetail.remember.length > 0 && (
                <div className="space-y-2">
                  {[...JSON.parse(wordDetail.remember)].map(
                    (example, index) => (
                      <p key={index} className="text-sm">
                        • {example}
                      </p>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Synonyms Section */}
            {/* <div>
          <h3 className="mb-2 text-sm font-medium">Synonyms</h3>
          <div className="flex flex-wrap gap-2">
            {wordDetail.synonyms?.map((synonym, index) => (
              <Button key={index} size="sm" variant="flat">
                {synonym}
              </Button>
            ))}
          </div>
        </div> */}
            <div>
              <h3 className="mb-2 text-sm font-medium">Synonyms</h3>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="flat">
                  effort
                </Button>
                <Button size="sm" variant="flat">
                  completion
                </Button>
                <Button size="sm" variant="flat">
                  execution
                </Button>
                <Button size="sm" variant="flat">
                  accomplishment
                </Button>
              </div>
            </div>

            {/* Submit Section */}
            <WordCommentForm />
          </CardBody>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

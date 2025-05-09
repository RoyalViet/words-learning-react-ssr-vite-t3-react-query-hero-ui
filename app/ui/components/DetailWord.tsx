import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  isWordDetailPanelDrawerOpenAtom,
  wordDetailAtom,
} from "~/common/store";
import { IWordItem } from "~/common/types";
import { DoneWordButton } from "~/components/DoneWordButton";
import { WordAudioButton } from "./WordAudioButton";
import { WordCommentForm } from "./WordCommentForm";
import { AnimatePresence, motion } from "framer-motion";
import { cx } from "~/helper/common";

export const DetailWord: React.FC<{ isWordLoading?: boolean }> = () => {
  const [wordDetail] = useAtom(wordDetailAtom);

  const isWordDetailPanelDrawerOpen = useAtomValue(
    isWordDetailPanelDrawerOpenAtom,
  );
  const wordDetailValue = useAtomValue(wordDetailAtom);

  const isShow =
    isWordDetailPanelDrawerOpen && Object.keys(wordDetailValue || {}).length;

  return (
    <div
      className={cx(
        "sm:hidden",
        !isShow && "pointer-events-none absolute h-0 w-0",
      )}
    >
      <AnimatePresence mode="wait">
        {isShow && (
          <motion.div
            layoutId={String(wordDetail?.slug)}
            initial={{ opacity: 0, width: 0, height: 0 }}
            animate={{ opacity: 1, width: 300, height: "auto" }}
            exit={{ opacity: 0, width: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sticky top-4 z-10"
          >
            <DetailContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DetailContent: React.FC = () => {
  const [wordDetail, setWordDetailAtom] = useAtom(wordDetailAtom);
  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );

  return (
    <Card className="max-w-md transition-all duration-300 ease-in-out sm:w-full">
      <CardBody className="gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{wordDetail?.word}</h2>
          <div className="flex items-center justify-end gap-1 sm:pr-4">
            <DoneWordButton wordSlug={wordDetail?.slug || ""} />
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
              className="sm:hidden"
            >
              <Icon icon="lucide:x" className="text-lg" />
            </Button>
          </div>
        </div>

        {/* Definition Section */}
        <div className="space-y-3">
          <div>
            <span className="text-default-500 text-sm">{wordDetail?.type}</span>
            <div className="mt-1 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <WordAudioButton isUs />
                <span className="text-default-500 font-medium">US:</span>
                <p>{wordDetail?.usPronounce}</p>
              </div>
              <div className="flex items-center gap-2">
                <WordAudioButton isUk />
                <span className="text-default-500 font-medium">UK:</span>
                <p>{wordDetail?.ukPronounce}</p>
              </div>
            </div>
          </div>

          {/* Related Terms */}
          {/* <div className="space-y-2">
            {wordDetail?.relatedTerms?.map((term, index) => (
              <Link key={index} href="#" color="primary" className="block">
                {term}
              </Link>
            ))}
          </div> */}

          {/* <Divider /> */}

          {/* Example Section */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Example</h3>
            {wordDetail?.remember && wordDetail?.remember.length > 0 && (
              <div className="space-y-2">
                {(() => {
                  try {
                    const remember = wordDetail?.remember || "";
                    const trimmedRemember = remember.trim();
                    const isValidJSON =
                      trimmedRemember.startsWith("[") &&
                      trimmedRemember.endsWith("]");

                    const examples: Array<string> = isValidJSON
                      ? JSON.parse(trimmedRemember)
                      : JSON.parse(`[${trimmedRemember}]`);

                    return examples.map((example, index) => (
                      <p key={index} className="text-sm">
                        • {example}
                      </p>
                    ));
                  } catch (error) {
                    console.error("Failed to parse examples:", error);
                    return <p className="text-danger text-sm">Updating</p>;
                  }
                })()}
              </div>
            )}
          </div>

          {/* Synonyms Section */}
          {/* <div>
            <h3 className="mb-2 text-sm font-medium">Synonyms</h3>
            <div className="flex flex-wrap gap-2">
              {wordDetail?.synonyms?.map((synonym, index) => (
                <Button key={index} size="sm" variant="flat">
                  {synonym}
                </Button>
              ))}
            </div>
          </div> */}

          {/* Submit Section */}
          <WordCommentForm />
        </div>
      </CardBody>
    </Card>
  );
};

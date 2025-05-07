import { Button, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IWordItem } from "~/common/types";
import { WordAudioButton } from "./WordAudioButton";

export interface WordEntry {
  id: string;
  isFavorite?: boolean;
  info?: IWordItem;
}

export interface WordList {
  id: string;
  title: string;
  count: number;
  description?: string;
}

interface DictionaryEntryProps extends WordEntry {
  // onToggleFavorite: () => void;
}

export function DictionaryEntry({ isFavorite, info }: DictionaryEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { Word } = info || {};
  const { word, type, translation, remember } = Word || {};

  // const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  // const setSearchWord = useSetAtom(searchWordAtom);
  // const setIsWordDetailPanelDrawerOpen = useSetAtom(
  //   isWordDetailPanelDrawerOpenAtom,
  // );

  return (
    <Card className="mb-4">
      <CardBody>
        <div className="flex items-start justify-between gap-1 sm:flex-col-reverse sm:justify-start">
          <div className="w-full">
            <div className="flex w-full flex-wrap items-baseline gap-1">
              <div className="flex w-full items-center justify-between gap-1">
                <h2 className="text-xl font-semibold">{word}</h2>
                <div className="flex gap-2">
                  {/* <Button
                    isIconOnly
                    variant="light"
                    onPress={() => {
                      setSearchWord("");
                      setIsWordDetailPanelDrawerOpen(false);
                    }}
                  >
                    <Icon icon="lucide:volume-2" className="text-xl" />
                  </Button> */}
                  <WordAudioButton word={word!} />
                  <Button isIconOnly variant="light">
                    <Icon
                      icon={
                        isFavorite
                          ? "lucide:bookmark-filled"
                          : "lucide:bookmark"
                      }
                      className={`text-xl ${isFavorite ? "text-primary" : ""}`}
                    />
                  </Button>
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setIsExpanded(!isExpanded)}
                  >
                    <Icon
                      icon={
                        isExpanded ? "lucide:chevron-up" : "lucide:chevron-down"
                      }
                      className="text-xl"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between gap-1">
                <span className="text-small text-default-500">[{type}]</span>
                {Word?.usPronounce && (
                  <span className="text-small text-default-400">
                    {Word?.usPronounce}
                  </span>
                )}
              </div>
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Divider className="my-3" />
                  {translation && (
                    <p className="text-default-600 mb-3">{translation}</p>
                  )}
                  {remember && remember.length > 0 && (
                    <div className="space-y-2">
                      {[...JSON.parse(remember)].map((example, index) => (
                        <p key={index} className="text-sm">
                          • {example}
                        </p>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

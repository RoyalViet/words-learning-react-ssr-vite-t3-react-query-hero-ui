import { useState } from "react";
import { Button, Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";

import {
  isWordDetailPanelDrawerOpenAtom,
  wordDetailAtom,
} from "~/common/store";
import { IWordItem } from "~/common/types";
import { DoneWordButton } from "~/components/DoneWordButton";
import { cx } from "~/helper/common";

import { WordAudioButton } from "./WordAudioButton";

export interface WordEntry {
  id: string;
  info?: IWordItem;
}

interface DictionaryEntryProps extends WordEntry {
  onToggleFavorite?: () => void;
}

export function DictionaryEntry({ info }: DictionaryEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { Word } = info || {};
  const { word, type, translation, remember, usAudioMp3 } = Word || {};

  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );
  const [wordDetail, setWordDetailAtom] = useAtom(wordDetailAtom);

  return (
    <Card className={cx(wordDetail.slug === Word?.slug && "bg-primary-100")}>
      <CardBody>
        <div className="flex items-start justify-between gap-1 sm:flex-col-reverse sm:justify-start">
          <div className="w-full">
            <div className="flex w-full flex-wrap items-baseline gap-1">
              <div className="flex w-full items-center justify-between gap-1">
                <h2 className="text-xl font-semibold">{word}</h2>
                <div className="flex gap-2">
                  <WordAudioButton usAudioMp3={usAudioMp3 || ""} word={word!} />
                  <DoneWordButton wordSlug={Word?.slug || ""} />
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={() => {
                      if (Word?.slug === wordDetail?.slug) {
                        setIsWordDetailPanelDrawerOpen(false);
                        setWordDetailAtom({} as IWordItem["Word"]);
                        return;
                      }
                      setIsWordDetailPanelDrawerOpen(true);
                      setWordDetailAtom((Word || {}) as IWordItem["Word"]);
                    }}
                  >
                    <Icon icon="lucide:info" className="text-xl" />
                  </Button>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-1">
                <div className="flex justify-start gap-1">
                  {type && (
                    <span className="text-small text-default-500">
                      [{type}]
                    </span>
                  )}
                  {Word?.usPronounce && (
                    <span className="text-small text-default-400">
                      {Word?.usPronounce}
                    </span>
                  )}
                </div>
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
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-3"
                >
                  <Divider className="mt-3" />
                  {translation && (
                    <p className="text-default-600">{translation}</p>
                  )}
                  {remember && (
                    <div className="space-y-2">
                      {(() => {
                        try {
                          const examples = JSON.parse(remember);
                          return Array.isArray(examples)
                            ? examples.map((example, index) => (
                                <p key={index} className="text-sm">
                                  • {example}
                                </p>
                              ))
                            : null;
                        } catch (error) {
                          console.error(
                            "Failed to parse remember field:",
                            error,
                          );
                          return null;
                        }
                      })()}
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

import React from "react";
import { Card, CardBody, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

export interface WordEntry {
  id: string;
  word: string;
  type: string;
  pronunciation?: string;
  definition?: string;
  examples?: string[];
  translation?: string;
  isFavorite?: boolean;
}

export interface WordList {
  id: string;
  title: string;
  count: number;
  description?: string;
}

interface DictionaryEntryProps extends WordEntry {
  onToggleFavorite: () => void;
  onPlayPronunciation: () => void;
}

export function DictionaryEntry({
  word,
  type,
  pronunciation,
  definition,
  translation,
  examples = [
    "Scientists are working on highly advanced technology to replace fossil fuels.",
    "It is a technologically advanced society.",
    "Even in advanced industrial societies, poverty persists.",
    "Economically advanced developing countries must make a contribution.",
    "Sweden has a reputation for advanced and stylish design.",
  ],
  isFavorite,
  onToggleFavorite,
  onPlayPronunciation,
}: DictionaryEntryProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card className="mb-4">
      <CardBody>
        <div className="flex items-start justify-between gap-1 sm:flex-col-reverse sm:justify-start">
          <div className="w-full">
            <div className="flex w-full flex-wrap items-baseline gap-1">
              <div className="flex w-full items-center justify-between gap-1">
                <h2 className="text-xl font-semibold">{word}</h2>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={onPlayPronunciation}
                  >
                    <Icon icon="lucide:volume-2" className="text-xl" />
                  </Button>
                  <Button isIconOnly variant="light" onPress={onToggleFavorite}>
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
                {pronunciation && (
                  <span className="text-small text-default-400">
                    /{pronunciation}/
                  </span>
                )}
              </div>
            </div>

            {translation && (
              <p className="text-default-600 mb-2">{translation}</p>
            )}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {definition && (
                    <p className="text-default-600 mb-3">{definition}</p>
                  )}
                  {examples && examples.length > 0 && (
                    <>
                      <Divider className="my-3" />
                      <div className="space-y-2">
                        {examples.map((example, index) => (
                          <p key={index} className="text-sm">
                            • {example}
                          </p>
                        ))}
                      </div>
                    </>
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

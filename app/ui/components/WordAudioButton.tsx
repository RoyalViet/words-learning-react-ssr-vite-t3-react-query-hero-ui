import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAtomValue } from "jotai";

import { wordDetailAtom, wordDetailSlugAtom } from "~/common/store";
import { cx } from "~/helper/common";

export const WordAudioButton = ({
  isUk = false,
  word = "",
  usAudioMp3,
  ukAudioMp3,
}: {
  word?: string;
  usAudioMp3?: string;
  ukAudioMp3?: string;
  isUk?: boolean;
  isUs?: boolean;
}) => {
  const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const wordDetail = useAtomValue(wordDetailAtom);

  useEffect(() => {
    setIsPlaying(false);
  }, [wordDetailSlug]);

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        onPress={() => {
          audioRef.current?.play();
        }}
      >
        <Icon
          icon={"lucide:volume-2"}
          className={cx("text-xl", isPlaying && "text-primary")}
        />
      </Button>
      {isUk ? (
        <audio
          hidden
          ref={audioRef}
          onPlay={() => {
            setIsPlaying(true);
          }}
          onEnded={() => {
            setIsPlaying(false);
          }}
          src={
            ukAudioMp3
              ? ukAudioMp3
              : word
                ? `http://dict.youdao.com/dictvoice?type=0&audio=${word.trim().toLowerCase()}`
                : wordDetail.ukAudioMp3 ||
                  `http://dict.youdao.com/dictvoice?type=0&audio=${(wordDetail.word || "").trim().toLowerCase()}`
          }
        />
      ) : (
        <audio
          hidden
          ref={audioRef}
          onPlay={() => {
            setIsPlaying(true);
          }}
          onEnded={() => {
            setIsPlaying(false);
          }}
          src={
            usAudioMp3
              ? usAudioMp3
              : word
                ? `http://dict.youdao.com/dictvoice?type=0&audio=${word.trim().toLowerCase()}`
                : wordDetail.usAudioMp3 ||
                  `http://dict.youdao.com/dictvoice?type=0&audio=${(wordDetail.word || "").trim().toLowerCase()}`
          }
        />
      )}
    </>
  );
};

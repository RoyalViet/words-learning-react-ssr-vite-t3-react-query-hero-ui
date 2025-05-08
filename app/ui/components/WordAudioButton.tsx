import { Button } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

import { useAtomValue } from "jotai";
import { wordDetailSlugAtom } from "~/common/store";
import { cx } from "~/helper/common";
import { Icon } from "@iconify/react";

export const WordAudioButton = ({ word }: { word: string }) => {
  const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [wordDetailSlug]);

  return (
    <>
      {/* <Button
        isIconOnly
        variant="light"
        onPress={() => {
          audioRef.current?.play();
        }}
      >
        <LuIcon className={cx(isPlaying && "text-primary")} icon={Volume2} />
      </Button> */}
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
      <audio
        hidden
        ref={audioRef}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onEnded={() => {
          setIsPlaying(false);
        }}
        src={`http://dict.youdao.com/dictvoice?type=0&audio=${word.trim().toLowerCase()}`}
      />
    </>
  );
};

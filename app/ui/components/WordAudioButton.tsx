import { Button } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

import { useAtomValue } from "jotai";
import { Volume2 } from "lucide-react";
import { wordDetailSlugAtom } from "~/common/store";
import { LuIcon } from "~/components/LuIcon";
import { cx } from "~/helper/common";

export const WordAudioButton = ({ word }: { word: string }) => {
  const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        <LuIcon className={cx(isPlaying && "text-primary")} icon={Volume2} />
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

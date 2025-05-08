import { Drawer, DrawerBody, DrawerContent } from "@heroui/react";
import { useAtom } from "jotai";

import { wordDetailAtom } from "~/common/store";
import { useMobile } from "~/hooks/useMobile";
import { DetailWord } from "./DetailWord";
import { IWordItem } from "~/common/types";

export const DetailWordModal = () => {
  const { isMobile } = useMobile();
  const [wordDetail, setWordDetail] = useAtom(wordDetailAtom);

  return (
    <>
      <Drawer
        isOpen={isMobile && Object.keys(wordDetail || {}).length > 0}
        onClose={() => {
          console.log("close");
          setWordDetail({} as IWordItem["Word"]);
        }}
        placement="bottom"
        backdrop="transparent"
      >
        <DrawerContent>
          <DrawerBody className="p-0">
            <DetailWord />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

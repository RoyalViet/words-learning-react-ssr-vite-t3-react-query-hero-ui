import { Drawer, DrawerBody, DrawerContent } from "@heroui/react";
import { useAtom, useAtomValue } from "jotai";
import { X } from "lucide-react";

import {
  isWordDetailPanelDrawerOpenAtom,
  wordDetailAtom,
} from "~/common/store";
import { IWordItem } from "~/common/types";
import { LuIcon } from "~/components/LuIcon";
import { useMobile } from "~/hooks/useMobile";

import { DetailContent } from "./DetailWord";

export const DetailWordModal = () => {
  const { isMobile } = useMobile();
  const [wordDetail, setWordDetail] = useAtom(wordDetailAtom);
  const isWordDetailPanelDrawerOpen = useAtomValue(
    isWordDetailPanelDrawerOpenAtom,
  );

  const isOpen =
    isMobile &&
    isWordDetailPanelDrawerOpen &&
    Object.keys(wordDetail || {}).length > 0;

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={() => {
          setWordDetail({} as IWordItem["Word"]);
        }}
        placement="bottom"
        backdrop="transparent"
        classNames={{
          closeButton: "z-50",
        }}
        closeButton={
          <div>
            <LuIcon icon={X} />
          </div>
        }
      >
        <DrawerContent>
          <DrawerBody className="p-0">
            <DetailContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

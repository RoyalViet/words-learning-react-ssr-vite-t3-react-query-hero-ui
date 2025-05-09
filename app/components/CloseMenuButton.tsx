import { Button } from "@heroui/react";
import { useSetAtom } from "jotai";
import { X } from "lucide-react";

import { isCollapsibleSidebarOpenAtom } from "~/common/store";
import { LuIcon } from "~/components/LuIcon";

export const CloseMenuButton = () => {
  const setIsCollapsibleSidebarOpen = useSetAtom(isCollapsibleSidebarOpenAtom);

  return (
    <Button
      isIconOnly
      variant="light"
      className="flex xl:hidden"
      onPress={() => {
        setIsCollapsibleSidebarOpen(false);
      }}
    >
      <LuIcon icon={X} />
    </Button>
  );
};

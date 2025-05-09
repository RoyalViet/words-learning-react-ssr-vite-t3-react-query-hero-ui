import { Button } from "@heroui/react";
import { useSetAtom } from "jotai";
import { Menu } from "lucide-react";

import { isCollapsibleSidebarOpenAtom } from "~/common/store";
import { LuIcon } from "~/components/LuIcon";

export const OpenMenuButton = () => {
  const setIsCollapsibleSidebarOpen = useSetAtom(isCollapsibleSidebarOpenAtom);

  return (
    <Button
      isIconOnly
      variant="light"
      className="flex xl:hidden"
      onPress={() => {
        setIsCollapsibleSidebarOpen(true);
      }}
    >
      <LuIcon icon={Menu} size={24} />
    </Button>
  );
};

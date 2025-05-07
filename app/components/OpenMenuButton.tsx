import { Button } from "@heroui/react";
import { LuIcon } from "~/components/LuIcon";
import { Menu } from "lucide-react";
import { useSetAtom } from "jotai";
import { isCollapsibleSidebarOpenAtom } from "~/common/store";

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

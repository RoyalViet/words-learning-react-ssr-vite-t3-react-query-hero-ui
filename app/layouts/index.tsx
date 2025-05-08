import { Drawer, DrawerBody, DrawerContent } from "@heroui/react";
import { useAtom } from "jotai";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { isBooksPanelDrawerOpenAtom } from "~/common/store";
import { IBookItem } from "~/common/types";
import { LuIcon } from "~/components/LuIcon";
import { useMobile } from "~/hooks/useMobile";
import Header from "~/ui/components/Header";
import { CollapsibleSidebar, Sidebar } from "~/ui/components/Sidebar";

export const AppLayout = ({
  allBooks,
  starBooks,
  children,
}: {
  allBooks: IBookItem[];
  starBooks: string[];
  children: ReactNode;
}) => {
  const { isMobile } = useMobile();

  const [isBooksPanelDrawerOpen, setIsBooksPanelDrawerOpen] = useAtom(
    isBooksPanelDrawerOpenAtom,
  );

  return (
    <div className="flex h-dvh">
      {!isMobile && (
        <CollapsibleSidebar allBooks={allBooks} starBooks={starBooks} />
      )}
      <Drawer
        isOpen={!isMobile ? false : isBooksPanelDrawerOpen}
        onClose={() => {
          setIsBooksPanelDrawerOpen(false);
        }}
        placement="left"
        size="xs"
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
            <Sidebar allBooks={allBooks} starBooks={starBooks} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <div className="flex h-full flex-1 p-2 sm:p-0">
        <div className="border-divider h-full flex-1 overflow-auto rounded-lg border sm:border-none">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

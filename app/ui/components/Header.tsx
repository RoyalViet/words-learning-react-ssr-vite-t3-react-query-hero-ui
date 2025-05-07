import { Button, Input, Tab, Tabs } from "@heroui/react";
import { useAtom } from "jotai";
import React from "react";
import {
  isBooksPanelDrawerOpenAtom,
  isCollapsibleSidebarOpenAtom,
  isSearchBarOpenAtom,
  listTabAtom,
  searchWordAtom,
} from "~/common/store";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppTheme } from "~/hooks/useAppTheme";
import { LuIcon } from "~/components/LuIcon";
import { Moon, Sun } from "lucide-react";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { ListTabType } from "~/common/types";

const Header: React.FC = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useAtom(isSearchBarOpenAtom);
  const [searchWord, setSearchWord] = useAtom(searchWordAtom);

  const [_, setIsBooksPanelDrawerOpen] = useAtom(isBooksPanelDrawerOpenAtom);

  const [isCollapsibleSidebarOpen, setIsCollapsibleSidebarOpen] = useAtom(
    isCollapsibleSidebarOpenAtom,
  );
  const [listTab, setListTab] = useAtom(listTabAtom);

  const { isDarkMode, toggleTheme } = useAppTheme();
  const { isLogin } = useMyUserInfo();

  const tabs = [
    { key: ListTabType.ALL, label: "All", disabled: false },
    { key: ListTabType.DONE, label: "Learned", disabled: !isLogin },
    { key: ListTabType.UNDONE, label: "Not Learned", disabled: !isLogin },
  ];

  return (
    <header className="bg-background sticky top-0 z-50">
      {/* cls: container */}
      <div className="border-divider mx-auto flex items-center justify-between gap-4 border-b p-4">
        <div className="flex items-center gap-4">
          <Button
            isIconOnly
            variant="light"
            className="hidden sm:block"
            onPress={() => setIsBooksPanelDrawerOpen(true)}
          >
            <Icon icon="lucide:menu" className="text-xl" />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="sm:hidden"
            onPress={() =>
              setIsCollapsibleSidebarOpen(!isCollapsibleSidebarOpen)
            }
          >
            <Icon
              icon={
                !isCollapsibleSidebarOpen
                  ? "lucide:panel-left-close"
                  : "lucide:panel-left-open"
              }
              className="text-xl"
            />
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <AnimatePresence>
            {isSearchBarOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-background relative flex flex-1 items-center gap-2"
              >
                <Input
                  placeholder="Search word..."
                  value={searchWord}
                  onValueChange={setSearchWord}
                  startContent={
                    <Icon icon="lucide:search" className="text-default-400" />
                  }
                  className="w-full"
                />
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => setIsSearchBarOpen(false)}
                >
                  <Icon icon="lucide:x" />
                </Button>
              </motion.div>
            ) : (
              <Button
                isIconOnly
                variant="light"
                onPress={() => setIsSearchBarOpen(true)}
              >
                <Icon icon="lucide:search" />
              </Button>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2 sm:hidden">
            <Button isIconOnly variant="light" onPress={toggleTheme}>
              <LuIcon icon={isDarkMode ? Moon : Sun} />
            </Button>
            <Button color="primary" className="md:flex">
              Sign In
            </Button>
          </div>
        </div>
      </div>
      {isLogin && (
        <div className="container mx-auto px-4">
          <Tabs
            aria-label="tabs"
            selectedKey={listTab}
            onSelectionChange={(key) => {
              setListTab(key as ListTabType);
            }}
            variant="underlined"
            className="mt-2"
          >
            {tabs.map(({ key, label, disabled }) => {
              return (
                <Tab
                  key={key}
                  title={label}
                  isDisabled={disabled}
                  titleValue={disabled ? "Please sign in first" : ""}
                />
              );
            })}
          </Tabs>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import { Button, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useSetAtom } from "jotai";
import { Moon, Sun } from "lucide-react";

import {
  isBooksPanelDrawerOpenAtom,
  isCollapsibleSidebarOpenAtom,
  isSearchBarOpenAtom,
  isSettingModalOpenAtom,
  isSignInModalOpenAtom,
  searchWordAtom,
} from "~/common/store";
import { LuIcon } from "~/components/LuIcon";
import { UserAvatar } from "~/components/UserAvatar";
import { useAppTheme } from "~/hooks/useAppTheme";
import { useMobile } from "~/hooks/useMobile";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";

import { ListTabs } from "./ListTabs";

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useAppTheme();
  const { isMobile } = useMobile();

  const [isSearchBarOpen, setIsSearchBarOpen] = useAtom(isSearchBarOpenAtom);
  const [searchWord, setSearchWord] = useAtom(searchWordAtom);

  const setIsBooksPanelDrawerOpen = useSetAtom(isBooksPanelDrawerOpenAtom);
  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);
  const setIsSettingModalOpen = useSetAtom(isSettingModalOpenAtom);
  const [isCollapsibleSidebarOpen, setIsCollapsibleSidebarOpen] = useAtom(
    isCollapsibleSidebarOpenAtom,
  );

  const { isLogin } = useMyUserInfo();

  return (
    <header className="bg-background sticky top-0 z-10">
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
          {isLogin && !isMobile && <ListTabs />}
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
                  autoFocus
                />
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => {
                    setSearchWord("");
                    setIsSearchBarOpen(false);
                  }}
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
          {isLogin ? (
            <div className="flex items-center gap-2 sm:hidden">
              <UserAvatar size={20} />
              <Button
                isIconOnly
                variant="light"
                onPress={() => setIsSettingModalOpen(true)}
              >
                <Icon icon="lucide:settings" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:hidden">
              <Button isIconOnly variant="light" onPress={toggleTheme}>
                <LuIcon icon={isDarkMode ? Moon : Sun} />
              </Button>
              <Button
                color="primary"
                className="md:flex"
                onPress={() => setIsSignInModalOpen(true)}
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

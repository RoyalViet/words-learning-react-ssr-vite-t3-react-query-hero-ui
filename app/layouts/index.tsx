import {
  Badge,
  Button,
  Card,
  CardBody,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  Input,
  Tab,
  Tabs,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React, { ReactNode } from "react";
import { IBookItem } from "~/common/types";
import { LuIcon } from "~/components/LuIcon";
import { useMobile } from "~/hooks/useMobile";
import { DictionaryEntry } from "~/ui/components/DictionaryEntry";
import { Sidebar } from "~/ui/components/Sidebar";

export const AppLayout = (_props: {
  allBooks: IBookItem[];
  starBooks: string[];
  children: ReactNode;
}) => {
  // const { theme, setTheme } = useTheme();
  const { isMobile } = useMobile();
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const [theme, setTheme] = React.useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    }
    return "light"; // Default theme
  });

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className="flex h-screen">
      {/* Collapsible Sidebar */}
      <div
        className={`bg-content1 transition-all duration-300 ${isCollapsed ? "w-[70px]" : "w-[240px]"}`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4">
            <h2
              className={`text-lg font-semibold transition-opacity ${isCollapsed ? "opacity-0" : "opacity-100"} flex h-10 items-center justify-start`}
            >
              Oxford Words
            </h2>
            {/* <Button
              isIconOnly
              variant="light"
              onPress={() => setIsCollapsed(!isCollapsed)}
              className="min-w-unit-8"
            >
              <Icon
                icon={
                  isCollapsed ? "lucide:chevron-right" : "lucide:chevron-left"
                }
                className="text-xl"
              />
            </Button> */}
          </div>

          <div className="flex flex-col">
            <Button
              variant="light"
              className={`h-12 justify-start rounded-none ${isCollapsed ? "px-2" : "px-4"}`}
              startContent={<Icon icon="lucide:inbox" />}
            >
              {!isCollapsed && <span>Inbox</span>}
            </Button>
            <Button
              variant="light"
              className={`h-12 justify-start rounded-none ${isCollapsed ? "px-2" : "px-4"}`}
              startContent={<Icon icon="lucide:layers" />}
            >
              {!isCollapsed && <span>My Issues</span>}
            </Button>
            {!isCollapsed && (
              <div className="text-default-500 px-4 py-2 text-sm">
                Workspace
              </div>
            )}
            <Button
              variant="light"
              className={`h-12 justify-start rounded-none ${isCollapsed ? "px-2" : "px-4"}`}
              startContent={<Icon icon="lucide:users" />}
            >
              {!isCollapsed && <span>Teams</span>}
            </Button>
            <Button
              variant="light"
              className={`h-12 justify-start rounded-none ${isCollapsed ? "px-2" : "px-4"}`}
              startContent={<Icon icon="lucide:folder" />}
            >
              {!isCollapsed && <span>Projects</span>}
            </Button>
            <Button
              variant="light"
              className={`h-12 justify-start rounded-none ${isCollapsed ? "px-2" : "px-4"}`}
              startContent={<Icon icon="lucide:users" />}
            >
              {!isCollapsed && <span>Members</span>}
            </Button>
          </div>
        </div>
      </div>

      <Drawer
        isOpen={!isMobile ? false : isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
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
            <Sidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <div className="h-full flex-1 overflow-auto">
        <header className="border-divider bg-background sticky top-0 z-50 border-b">
          <div className="container mx-auto flex items-center justify-between gap-4 border-b p-4">
            <div className="flex items-center gap-4">
              <Button
                isIconOnly
                variant="light"
                className="hidden sm:block"
                onPress={() => setIsSidebarOpen(true)}
              >
                <Icon icon="lucide:menu" className="text-xl" />
              </Button>
              <Button
                isIconOnly
                variant="light"
                className="sm:hidden"
                onPress={() => setIsCollapsed(!isCollapsed)}
              >
                <Icon
                  icon={
                    isCollapsed
                      ? "lucide:panel-left-close"
                      : "lucide:panel-left-open"
                  }
                  className="text-xl"
                />
              </Button>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
              <AnimatePresence>
                {isSearchVisible ? (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    // className="bg-background absolute top-0 right-0 left-0 flex items-center gap-2 px-4 py-2"
                    className="bg-background relative flex flex-1 items-center gap-2"
                  >
                    <Input
                      placeholder="Search word..."
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                      startContent={
                        <Icon
                          icon="lucide:search"
                          className="text-default-400"
                        />
                      }
                      className="w-full"
                    />
                    <Button
                      isIconOnly
                      variant="light"
                      onPress={() => setIsSearchVisible(false)}
                    >
                      <Icon icon="lucide:x" />
                    </Button>
                  </motion.div>
                ) : (
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setIsSearchVisible(true)}
                  >
                    <Icon icon="lucide:search" />
                  </Button>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2 sm:hidden">
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <Icon
                    icon={theme === "light" ? "lucide:moon" : "lucide:sun"}
                  />
                </Button>
                <Button color="primary" className="md:flex">
                  Sign In
                </Button>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key.toString())}
              variant="underlined"
              className="mt-2"
            >
              <Tab key="all" title="All Words" />
              <Tab key="learned" title="Learned" />
              <Tab key="not-learned" title="Not Learned" />
            </Tabs>
          </div>
        </header>
        <div className="bg-background min-h-screen">
          {/* Mobile Sidebar Drawer */}

          <main className="container mx-auto flex gap-6 px-4 py-6">
            {/* <AnimatePresence mode="wait">
              {isNavVisible && (
                <motion.div
                  // initial={{ opacity: 0, x: -20 }}
                  // animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, x: -20 }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 300, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="sm:hidden"
                >
                  <div className="w-[300px]">
                    <Sidebar />
                  </div>
                </motion.div>
              )}
            </AnimatePresence> */}

            <div className="flex-1 transition-all duration-300 ease-in-out">
              <Card className="mb-6">
                <CardBody>
                  <div className="mb-4 flex items-baseline gap-4">
                    <h1 className="text-3xl font-bold">advanced</h1>
                    <span className="text-default-500">/ədˈvænst/</span>
                  </div>
                  <p className="text-default-600 mb-4">[adjective] tiến tiến</p>
                  <Divider className="my-4" />
                  <div className="space-y-2">
                    <p className="text-sm">
                      • Scientists are working on highly advanced technology to
                      replace fossil fuels.
                    </p>
                    <p className="text-sm">
                      • It is a technologically advanced society.
                    </p>
                    <p className="text-sm">
                      • Even in advanced industrial societies, poverty persists.
                    </p>
                    <p className="text-sm">
                      • Economically advanced developing countries must make a
                      contribution.
                    </p>
                    <p className="text-sm">
                      • Sweden has a reputation for advanced and stylish design.
                    </p>
                  </div>
                </CardBody>
              </Card>

              <DictionaryEntry
                id="abandon"
                word="abandon"
                type="verb"
                onToggleFavorite={() => {}}
                onPlayPronunciation={() => {}}
              />
              <DictionaryEntry
                id="ability"
                word="ability"
                type="noun"
                onToggleFavorite={() => {}}
                onPlayPronunciation={() => {}}
              />
              <DictionaryEntry
                id="able"
                word="able"
                type="adjective"
                onToggleFavorite={() => {}}
                onPlayPronunciation={() => {}}
              />
              <DictionaryEntry
                id="adapt"
                word="adapt"
                type="verb"
                onToggleFavorite={() => {}}
                onPlayPronunciation={() => {}}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

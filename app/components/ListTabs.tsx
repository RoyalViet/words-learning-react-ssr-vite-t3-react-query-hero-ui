import { Tab, Tabs } from "@heroui/react";
import { useAtom } from "jotai";
import { listTabAtom } from "~/common/store";
import { ListTabType } from "~/common/types";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";

export const ListTabs = () => {
  const [listTab, setListTab] = useAtom(listTabAtom);

  const { isLogin } = useMyUserInfo();

  const tabs = [
    { key: ListTabType.ALL, label: "All", disabled: false },
    { key: ListTabType.DONE, label: "Learned", disabled: !isLogin },
    { key: ListTabType.UNDONE, label: "Not Learned", disabled: !isLogin },
  ];

  return (
    <Tabs
      aria-label="tabs"
      selectedKey={listTab}
      defaultSelectedKey={ListTabType.ALL}
      onSelectionChange={(key) => {
        setListTab(key as ListTabType);
      }}
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
  );
};

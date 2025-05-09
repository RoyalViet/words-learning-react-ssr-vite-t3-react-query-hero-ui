import BoringAvatar from "boring-avatars";
import { useAtom } from "jotai";
import { useIsClient } from "usehooks-ts";

import { isProfileModalOpenAtom } from "~/common/store";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";

export const UserAvatar = ({
  name,
  size = 20,
}: {
  name?: string;
  size?: number;
}) => {
  const [_, setIsProfileModalOpen] = useAtom(isProfileModalOpenAtom);

  const { myUserInfo } = useMyUserInfo();

  const isClient = useIsClient();

  if ((myUserInfo || name) && isClient) {
    return (
      <BoringAvatar
        square
        size={size}
        name={name || myUserInfo?.name}
        variant="beam"
        className="cursor-pointer rounded-full"
        onClick={() => {
          setIsProfileModalOpen(true);
        }}
      />
    );
  }

  return <div className="bg-foreground-300 size-5" />;
};

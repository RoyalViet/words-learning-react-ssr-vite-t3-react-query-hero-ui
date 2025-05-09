import { Button } from "@heroui/react";
import { Check } from "lucide-react";

import { useUnDoneWordMutation } from "~/hooks/request/mutation/useUnDoneWordMutation";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";

import { LuIcon } from "./LuIcon";

export const UnDoneWordButton = ({
  wordSlug,
  onPress,
}: {
  wordSlug: string;
  onPress?: () => void;
}) => {
  const { isLogin } = useMyUserInfo();
  const unDoneWordMutation = useUnDoneWordMutation({ wordSlug });

  return (
    <Button
      variant="solid"
      isIconOnly
      size="sm"
      color="success"
      isDisabled={!isLogin}
      title={!isLogin ? "Please sign in first" : ""}
      isLoading={unDoneWordMutation.isPending}
      onPress={async () => {
        await unDoneWordMutation.mutateAsync();
        await onPress?.();
      }}
    >
      <LuIcon icon={Check} />
    </Button>
  );
};

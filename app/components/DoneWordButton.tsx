import { Button } from "@heroui/react";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { useDoneWordMutation } from "~/hooks/request/mutation/useDoneWordMutation";
import { Icon } from "@iconify/react";
import { useGetIsWordDoneQuery } from "~/hooks/request/query/useGetIsWordDoneQuery";
import { useUnDoneWordMutation } from "~/hooks/request/mutation/useUnDoneWordMutation";

export const DoneWordButton = ({
  wordSlug,
  onPress,
}: {
  wordSlug: string;
  onPress?: Function;
}) => {
  const { isLogin } = useMyUserInfo();
  const doneWordMutation = useDoneWordMutation({ wordSlug });
  const unDoneWordMutation = useUnDoneWordMutation({ wordSlug });
  const getIsWordDoneQuery = useGetIsWordDoneQuery({ wordSlug });
  const isWordDone = !!getIsWordDoneQuery.data?.isWordDone;

  return (
    <Button
      variant="light"
      isIconOnly
      isDisabled={!isLogin}
      title={!isLogin ? "Please sign in first" : ""}
      isLoading={doneWordMutation.isPending}
      onPress={async () => {
        if (!isWordDone) {
          await doneWordMutation.mutateAsync();
          getIsWordDoneQuery.refetch();
        } else {
          await unDoneWordMutation.mutateAsync();
          getIsWordDoneQuery.refetch();
        }
        onPress?.();
      }}
    >
      <Icon
        icon={isWordDone ? "lucide:bookmark-check" : "lucide:bookmark"}
        className={`text-xl ${isWordDone ? "text-primary" : ""}`}
      />
    </Button>
  );
};

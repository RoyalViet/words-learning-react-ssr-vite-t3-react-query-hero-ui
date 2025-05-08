import { Button } from "@heroui/react";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { useDoneWordMutation } from "~/hooks/request/mutation/useDoneWordMutation";
import { Icon } from "@iconify/react";
import { useUnDoneWordMutation } from "~/hooks/request/mutation/useUnDoneWordMutation";
import { useAtomValue, useSetAtom } from "jotai";
import { wordsDoneStatusAtom } from "~/common/store";

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

  // Get word status from the atom instead of individual API calls
  const wordsDoneStatus = useAtomValue(wordsDoneStatusAtom);
  const setWordsDoneStatus = useSetAtom(wordsDoneStatusAtom);
  const isWordDone = !!wordsDoneStatus[wordSlug];

  return (
    <Button
      variant="light"
      isIconOnly
      isDisabled={!isLogin}
      title={!isLogin ? "Please sign in first" : ""}
      isLoading={doneWordMutation.isPending || unDoneWordMutation.isPending}
      onPress={async () => {
        if (!isWordDone) {
          await doneWordMutation.mutateAsync();
          // Update atom directly after successful mutation
          setWordsDoneStatus((prev) => ({ ...prev, [wordSlug]: true }));
        } else {
          await unDoneWordMutation.mutateAsync();
          // Update atom directly after successful mutation
          setWordsDoneStatus((prev) => {
            const newStatus = { ...prev };
            delete newStatus[wordSlug];
            return newStatus;
          });
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

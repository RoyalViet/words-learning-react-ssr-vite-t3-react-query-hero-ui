import { Divider, Textarea, Button } from "@heroui/react";
import { useAtomValue, useSetAtom } from "jotai";
import { useSendCommentMutation } from "~/hooks/request/mutation/useSendCommentMutation";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { useZodForm } from "~/hooks/useZodForm";
import { commentForm } from "~/common/formSchema";
import toast from "react-hot-toast";

import { useQueryClient } from "@tanstack/react-query";
import { clsx } from "~/common/clsx";
import {
  isWordDetailPanelDrawerOpenAtom,
  wordDetailSlugAtom,
} from "~/common/store";
import { FormFieldError } from "~/components/FormFieldError";

export const WordCommentForm = () => {
  const wordDetailSlug = useAtomValue(wordDetailSlugAtom);
  const setIsWordDetailPanelDrawerOpen = useSetAtom(
    isWordDetailPanelDrawerOpenAtom,
  );
  const { isLogin } = useMyUserInfo();
  const { form } = useZodForm(commentForm);
  const queryClient = useQueryClient();

  const sendCommentMutation = useSendCommentMutation({
    wordSlug: wordDetailSlug,
  });

  return (
    <div>
      <Divider />
      <div className="my-4 text-xl font-semibold">Comments</div>
      <form
        onSubmit={form.handleSubmit(async ({ comment: content }) => {
          await sendCommentMutation.mutateAsync({ content });
          await queryClient.invalidateQueries({
            queryKey: ["getWordComments", wordDetailSlug],
          });
          setIsWordDetailPanelDrawerOpen(false);
          toast.success("Comment successful");
          form.reset();
        })}
      >
        <div
          className={clsx(
            "flex flex-col gap-2",
            !isLogin && "cursor-not-allowed",
          )}
          title={!isLogin ? "Please sign in first" : ""}
        >
          <Textarea
            {...form.register("comment")}
            isDisabled={!isLogin}
            variant="bordered"
            placeholder="Leave a comment"
            minRows={2}
            maxRows={4}
          />
          <FormFieldError message={form.formState.errors.comment?.message} />
          <Button
            color="primary"
            type="submit"
            // isDisabled={!isLogin}
            isDisabled={true}
            isLoading={
              form.formState.isSubmitting || sendCommentMutation.isPending
            }
          >
            {/* Submit */}
            Coming Soon
          </Button>
        </div>
      </form>
    </div>
  );
};

import { Link } from "@heroui/react";
import { UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { useCountdown } from "usehooks-ts";
import { useSendVerifyCodeMutation } from "~/hooks/request/mutation/useSendVerifyCodeMutation";

export const SendVerifyCodeButton = ({
  form,
}: {
  form: UseFormReturn<any>;
}) => {
  const email = form.watch("email");

  const [count, Countdown] = useCountdown({ countStart: 60, countStop: 0 });

  const showCountDown = count > 0 && count < 60;

  const sendVerifyCodeMutation = useSendVerifyCodeMutation({ email });

  if (showCountDown) {
    return (
      <Link color="primary" size="sm" isDisabled>
        Resend in {count} seconds
      </Link>
    );
  }

  if (
    sendVerifyCodeMutation.isPending ||
    (sendVerifyCodeMutation.isSuccess && count === 60)
  ) {
    return (
      <Link color="primary" size="sm" isDisabled>
        Sending verification code...
      </Link>
    );
  }

  return (
    <Link
      color="primary"
      size="sm"
      isDisabled={!!form.formState.errors.email || !email}
      className="cursor-pointer underline-offset-2 hover:underline"
      onPress={async () => {
        await sendVerifyCodeMutation.mutateAsync();
        Countdown.startCountdown();
        toast.success("Verification code sent to your email");
      }}
    >
      Send email verification code
    </Link>
  );
};

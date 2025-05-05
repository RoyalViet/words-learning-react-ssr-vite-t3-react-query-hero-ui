import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  Link,
} from "@heroui/react";
import { useAtom, useSetAtom } from "jotai";
import { useZodForm } from "~/hooks/useZodForm";
import { FormFieldError } from "./FormFieldError";
import { updatePasswordForm } from "~/common/formSchema";
import toast from "react-hot-toast";
import { SendVerifyCodeButton } from "./SendVerifyCodeButton";
import { PasswordInput } from "./PasswordInput";
import { useUpdatePasswordMutation } from "~/hooks/request/mutation/useUpdatePasswordMutation";
import {
  isSignInModalOpenAtom,
  isUpdatePasswordModalOpenAtom,
} from "~/common/store";

export const UpdatePasswordModal = () => {
  const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] = useAtom(
    isUpdatePasswordModalOpenAtom,
  );
  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);

  const { form } = useZodForm(updatePasswordForm);

  const updatePasswordMutation = useUpdatePasswordMutation();

  return (
    <Modal
      isOpen={isUpdatePasswordModalOpen}
      onOpenChange={setIsUpdatePasswordModalOpen}
      backdrop="blur"
      isDismissable={false}
      onClose={form.reset}
    >
      <ModalContent>
        {(onClose) => {
          return (
            <form
              onSubmit={form.handleSubmit(async (data) => {
                await updatePasswordMutation.mutateAsync(data);
                toast.success("Password reset successful");
                onClose();
                setIsSignInModalOpen(true);
              })}
            >
              <ModalHeader>Reset Password</ModalHeader>
              <ModalBody>
                <Input
                  {...form.register("email")}
                  autoFocus
                  label="Email"
                  type="email"
                  placeholder="Please enter email"
                  variant="bordered"
                />
                <FormFieldError
                  message={form.formState.errors.email?.message}
                />
                <PasswordInput {...form.register("password")} />
                <FormFieldError
                  message={form.formState.errors.password?.message}
                />
                <PasswordInput
                  {...form.register("password2")}
                  label="Confirm Password"
                  placeholder="Please re-enter password"
                />
                <FormFieldError
                  message={form.formState.errors.password2?.message}
                />
                <Input
                  {...form.register("verifyCode")}
                  minLength={6}
                  maxLength={6}
                  label="Verification Code"
                  placeholder="Please enter email verification code"
                  variant="bordered"
                />
                <FormFieldError
                  message={form.formState.errors.verifyCode?.message}
                />
                <div className="flex justify-between px-1 py-2">
                  <SendVerifyCodeButton form={form} />
                  <Link
                    color="primary"
                    size="sm"
                    className="cursor-pointer underline-offset-2 hover:underline"
                    onPress={() => {
                      onClose();
                      setIsSignInModalOpen(true);
                    }}
                  >
                    Sign In
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  isLoading={
                    form.formState.isSubmitting ||
                    updatePasswordMutation.isPending
                  }
                >
                  Submit
                </Button>
              </ModalFooter>
            </form>
          );
        }}
      </ModalContent>
    </Modal>
  );
};

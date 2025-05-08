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
import { signUpForm } from "~/common/formSchema";
import toast from "react-hot-toast";
import { SendVerifyCodeButton } from "./SendVerifyCodeButton";
import { LuIcon } from "./LuIcon";
import { Dices } from "lucide-react";
import { Chance } from "chance";
import { PasswordInput } from "./PasswordInput";
import { useSignUpMutation } from "~/hooks/request/mutation/useSignUpMutation";
import { isSignInModalOpenAtom, isSignUpModalOpenAtom } from "~/common/store";

export const SignUpModal = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useAtom(
    isSignUpModalOpenAtom,
  );

  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);

  const { form } = useZodForm(signUpForm);

  const signUpMutation = useSignUpMutation();

  return (
    <Modal
      isOpen={isSignUpModalOpen}
      onOpenChange={setIsSignUpModalOpen}
      backdrop="blur"
      isDismissable={false}
      onClose={form.reset}
      placement="center"
    >
      <ModalContent>
        {(onClose) => {
          return (
            <form
              onSubmit={form.handleSubmit(async (data) => {
                await signUpMutation.mutateAsync(data);
                toast.success("Registration successful");
                onClose();
                setIsSignInModalOpen(true);
              })}
            >
              <ModalHeader>Register</ModalHeader>
              <ModalBody>
                <Input
                  {...form.register("name")}
                  value={form.watch("name")}
                  autoFocus
                  minLength={3}
                  maxLength={16}
                  label="Name"
                  placeholder="Please enter name"
                  variant="bordered"
                  endContent={
                    <Button
                      variant="light"
                      size="sm"
                      isIconOnly
                      onPress={() => {
                        form.setValue(
                          "name",
                          Chance().name().replace(/\s/g, "").slice(0, 16),
                          {
                            shouldValidate: true,
                            shouldDirty: true,
                          },
                        );
                      }}
                    >
                      <LuIcon icon={Dices} />
                    </Button>
                  }
                />
                <FormFieldError message={form.formState.errors.name?.message} />
                <Input
                  {...form.register("email")}
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
                    form.formState.isSubmitting || signUpMutation.isPending
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

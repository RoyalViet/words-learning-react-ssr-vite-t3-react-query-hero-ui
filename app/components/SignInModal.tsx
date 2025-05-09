import toast from "react-hot-toast";
import { useRevalidator } from "react-router";
import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useAtom, useSetAtom } from "jotai";

import { signInForm } from "~/common/formSchema";
import {
  isSignInModalOpenAtom,
  isSignUpModalOpenAtom,
  isUpdatePasswordModalOpenAtom,
} from "~/common/store";
import { useSignInMutation } from "~/hooks/request/mutation/useSignInMutation";
import { useZodForm } from "~/hooks/useZodForm";

import { FormFieldError } from "./FormFieldError";
import { PasswordInput } from "./PasswordInput";

export const SignInModal = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useAtom(
    isSignInModalOpenAtom,
  );
  const setIsSignUpModalOpen = useSetAtom(isSignUpModalOpenAtom);

  const setIsUpdatePasswordModalOpen = useSetAtom(
    isUpdatePasswordModalOpenAtom,
  );

  const { form } = useZodForm(signInForm, {
    defaultValues: { keepAlive: true },
  });
  const { revalidate } = useRevalidator();

  const signInMutation = useSignInMutation();

  return (
    <Modal
      isOpen={isSignInModalOpen}
      onOpenChange={setIsSignInModalOpen}
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
                await signInMutation.mutateAsync(data);
                toast.success("Login successful");
                onClose();
                revalidate();
              })}
            >
              <ModalHeader>Sign In</ModalHeader>
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
                <div className="flex justify-between px-1 py-2">
                  <Checkbox
                    {...form.register("keepAlive")}
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember for 7 days
                  </Checkbox>
                  <div className="flex items-center gap-2">
                    <Link
                      color="primary"
                      size="sm"
                      className="cursor-pointer underline-offset-2 hover:underline"
                      onPress={() => {
                        onClose();
                        setIsSignUpModalOpen(true);
                      }}
                    >
                      Register
                    </Link>
                    <Link
                      color="primary"
                      size="sm"
                      className="cursor-pointer underline-offset-2 hover:underline"
                      onPress={() => {
                        onClose();
                        setIsUpdatePasswordModalOpen(true);
                      }}
                    >
                      Reset Password
                    </Link>
                  </div>
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
                    form.formState.isSubmitting || signInMutation.isPending
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

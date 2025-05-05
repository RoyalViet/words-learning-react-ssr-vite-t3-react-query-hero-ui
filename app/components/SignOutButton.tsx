import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { useRevalidator } from "react-router";
import toast from "react-hot-toast";
import { useSetAtom } from "jotai";
import { useSignOutMutation } from "~/hooks/request/mutation/useSignOutMutation";
import { LuIcon } from "./LuIcon";
import { LogOut } from "lucide-react";
import { isSettingModalOpenAtom } from "~/common/store";

export const SignOutButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { revalidate } = useRevalidator();
  const setIsSettingModalOpen = useSetAtom(isSettingModalOpenAtom);

  const signOutMutation = useSignOutMutation();

  return (
    <>
      <Button variant="flat" color="danger" onPress={onOpen}>
        <LuIcon icon={LogOut} />
        Sign Out
      </Button>
      <Modal
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalHeader>Please Note</ModalHeader>
                <ModalBody>Are you sure you want to sign out?</ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    isLoading={signOutMutation.isPending}
                    onPress={async () => {
                      await signOutMutation.mutateAsync();
                      onClose();
                      setIsSettingModalOpen(false);
                      revalidate();
                      toast.success("Signed out");
                    }}
                  >
                    Confirm
                  </Button>
                </ModalFooter>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
};

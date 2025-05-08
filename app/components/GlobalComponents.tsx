import { Toaster } from "./Toaster";
import { ProgressBar } from "./ProgressBar";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";
import { UpdatePasswordModal } from "./UpdatePasswordModal";
import { SettingModal } from "./SettingModal";
import { ProfileModal } from "./ProfileModal";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DetailWordModal } from "~/ui/components/DetailWordModal";

export const GlobalComponents = () => {
  return (
    <>
      <ReactQueryDevtools />
      <Toaster />
      <ProgressBar />
      <SignInModal />
      <SignUpModal />
      <UpdatePasswordModal />
      <SettingModal />
      <ProfileModal />
      <DetailWordModal />
    </>
  );
};

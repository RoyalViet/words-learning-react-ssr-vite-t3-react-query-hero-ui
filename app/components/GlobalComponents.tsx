import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { DetailWordModal } from "~/ui/components/DetailWordModal";

import { ProfileModal } from "./ProfileModal";
import { ProgressBar } from "./ProgressBar";
import { SettingModal } from "./SettingModal";
import { SignInModal } from "./SignInModal";
import { SignUpModal } from "./SignUpModal";
import { Toaster } from "./Toaster";
import { UpdatePasswordModal } from "./UpdatePasswordModal";

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

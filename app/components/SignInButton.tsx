import { Button } from "@heroui/react";
import { useSetAtom } from "jotai";

import { isSignInModalOpenAtom } from "~/common/store";

export const SignInButton = () => {
  const setIsSignInModalOpen = useSetAtom(isSignInModalOpenAtom);

  return (
    <Button
      variant="bordered"
      color="primary"
      onPress={() => setIsSignInModalOpen(true)}
    >
      Sign In
    </Button>
  );
};

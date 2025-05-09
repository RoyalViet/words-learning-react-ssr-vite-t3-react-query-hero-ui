import { Button, Image } from "@heroui/react";

import { useAppTheme } from "~/hooks/useAppTheme";

export const GithubButton = () => {
  const { isDarkMode } = useAppTheme();

  return (
    <a href="https://github.com/" target="_blank" rel="noreferrer">
      <Button variant="flat" color="default" className="w-full">
        <Image
          alt="github"
          src={isDarkMode ? "/svgs/github_dark.svg" : "/svgs/github_light.svg"}
          width={18}
        />
        View Source Code
      </Button>
    </a>
  );
};

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useLenis } from "~/hooks/useLenis";

export const ScrollToTopButton = () => {
  const lenis = useLenis();

  const handleScrollToTop = () => {
    if (lenis) {
      // Scroll to top with smooth animation
      lenis.scrollTo(0, {
        duration: 1.2, // duration in seconds
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <Button
      isIconOnly
      className="bg-primary fixed right-6 bottom-6 z-50 rounded-full shadow-lg"
      onPress={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <Icon icon="lucide:arrow-up" className="text-lg" />
    </Button>
  );
};

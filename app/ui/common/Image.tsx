import { Image as HeroImage } from "@heroui/react";
import { useEffect, useState } from "react";

import { cx, preLoadImage } from "~/helper/common";

const imageSkeleton = "/svgs/ImageSkeleton.svg";

type Props = React.ImgHTMLAttributes<HTMLImageElement> &
  Partial<{ isDisableCache: boolean; isDisableFallback: boolean }>;
const Image: React.FC<Props> = ({
  isDisableCache,
  src,
  isDisableFallback,
  className,
  ...props
}) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof src === "string") {
      const cacheBuster = isDisableCache ? `?t=${new Date().getTime()}` : "";
      preLoadImage(src + cacheBuster)
        .then(() => {
          setShow(true);
        })
        .catch(console.log);
    } else {
      setShow(true);
    }
  }, [isDisableCache, src]);

  return (
    <img
      src={
        show && src ? `${src}` : isDisableFallback ? undefined : imageSkeleton
      }
      alt=""
      style={{
        transition: "opacity 0.3s ease",
      }}
      className={cx(className, isDisableFallback && !show && "!opacity-0")}
      {...props}
    />
  );
};

export default Image;

export { Image, HeroImage };

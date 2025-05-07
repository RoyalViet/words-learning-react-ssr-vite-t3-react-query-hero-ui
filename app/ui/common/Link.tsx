import * as React from "react";
import { Link as RouterLink } from "react-router";
import { cx } from "~/helper/common";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  title?: string;
  target?: string;
  children?: React.ReactNode;
  isOpenNewTab?: boolean;
  href?: string;
  to?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  title,
  target,
  className,
  isOpenNewTab,
  href,
  to,
  ...props
}) => {
  const linkUrl = href || to || "";
  const shouldOpenNewTab = isOpenNewTab ?? linkUrl.startsWith("https://");
  return (
    <RouterLink
      to={href || to || ""}
      className={cx(className)}
      title={title}
      target={target ? target : shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;

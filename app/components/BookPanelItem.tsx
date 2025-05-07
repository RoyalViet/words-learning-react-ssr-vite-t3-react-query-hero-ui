import { Button } from "@heroui/react";
import { href, Link, useParams, useRevalidator } from "react-router";
import { useSetAtom } from "jotai";
import { clsx } from "~/common/clsx";
import { LuIcon } from "./LuIcon";
import { Star } from "lucide-react";
import { useStarBookMutation } from "~/hooks/request/mutation/useStarBookMutation";
import { useUnStarBookMutation } from "~/hooks/request/mutation/useUnStarBookMutation";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { IBookItem } from "~/common/types";
import {
  isCollapsibleSidebarOpenAtom,
  searchWordAtom,
  wordDetailSlugAtom,
} from "~/common/store";
import Image from "~/ui/common/Image";

const ratio = 251 / 388;

export const BookPanelItem = ({
  item,
  isBookStar,
}: {
  item: IBookItem;
  isBookStar: boolean;
}) => {
  const { bookSlug = "" } = useParams<{ bookSlug: string }>();
  const setSearchWord = useSetAtom(searchWordAtom);
  const setWordDetailSlug = useSetAtom(wordDetailSlugAtom);
  const setIsCollapsibleSidebarOpen = useSetAtom(isCollapsibleSidebarOpenAtom);
  const { revalidate } = useRevalidator();
  const { isLogin } = useMyUserInfo();

  const isActive = bookSlug === item.slug;

  const starBookMutation = useStarBookMutation({ bookSlug: item.slug });
  const unStarBookMutation = useUnStarBookMutation({ bookSlug: item.slug });

  return (
    <Link to={href("/:bookSlug/words", { bookSlug: item.slug })}>
      <div
        className={clsx(
          "group border-foreground-100 hover:bg-primary-50 flex h-20 items-center justify-between border-b px-4",
          isActive && "border-b-primary bg-primary-50",
        )}
        onClick={() => {
          setSearchWord("");
          setWordDetailSlug("");
          setIsCollapsibleSidebarOpen(false);
        }}
      >
        <div className="flex items-center gap-4">
          <Image
            alt={item.slug}
            src={
              item.image ||
              "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg"
            }
            height={60}
            width={60 * ratio}
            className="rounded-md"
          />
          <div className="flex flex-col">
            <div className="w-[200px] truncate">{item.name}</div>
            <small className="text-primary">{item.wordsCount} words</small>
          </div>
        </div>
        {isLogin && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={async () => {
              if (isBookStar) {
                await unStarBookMutation.mutateAsync();
              } else {
                await starBookMutation.mutateAsync();
              }
              revalidate();
            }}
          >
            <LuIcon
              className={clsx(
                "text-foreground-500",
                isBookStar && "fill-warning",
              )}
              icon={Star}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};

export const Older = ({
  item,
  isBookStar,
}: {
  item: IBookItem;
  isBookStar: boolean;
}) => {
  const { bookSlug = "" } = useParams<{ bookSlug: string }>();
  const setSearchWord = useSetAtom(searchWordAtom);
  const setWordDetailSlug = useSetAtom(wordDetailSlugAtom);
  const setIsCollapsibleSidebarOpen = useSetAtom(isCollapsibleSidebarOpenAtom);
  const { revalidate } = useRevalidator();
  const { isLogin } = useMyUserInfo();

  const isActive = bookSlug === item.slug;

  const starBookMutation = useStarBookMutation({ bookSlug: item.slug });
  const unStarBookMutation = useUnStarBookMutation({ bookSlug: item.slug });

  return (
    <Link to={href("/:bookSlug/words", { bookSlug: item.slug })}>
      <div
        className={clsx(
          "group border-foreground-100 hover:bg-primary-50 flex h-20 items-center justify-between border-b px-4",
          isActive && "border-b-primary bg-primary-50",
        )}
        onClick={() => {
          setSearchWord("");
          setWordDetailSlug("");
          setIsCollapsibleSidebarOpen(false);
        }}
      >
        <div className="flex items-center gap-4">
          <Image
            alt={item.slug}
            // src={`/books/${item.slug}.webp`}
            src={
              item.image ||
              "https://png.pngtree.com/png-clipart/20190905/original/pngtree-book-pencil-study-book-png-image_4507678.jpg"
            }
            height={60}
            width={60 * ratio}
          />
          <div className="flex flex-col">
            <div className="w-[200px] truncate">{item.name}</div>
            <small className="text-primary">{item.wordsCount} words</small>
          </div>
        </div>
        {isLogin && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={async () => {
              if (isBookStar) {
                await unStarBookMutation.mutateAsync();
              } else {
                await starBookMutation.mutateAsync();
              }
              revalidate();
            }}
          >
            <LuIcon
              className={clsx(
                "text-foreground-500",
                isBookStar && "fill-warning",
              )}
              icon={Star}
            />
          </Button>
        )}
      </div>
    </Link>
  );
};

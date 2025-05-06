import { IBookItem } from "~/common/types";
import { BookPanelItem } from "./BookPanelItem";

export const BooksPanel = ({
  allBooks,
  starBooks,
}: {
  allBooks: IBookItem[];
  starBooks: string[];
}) => {
  const booksList = [...allBooks].sort((a, b) => {
    if (a.id === 1) return -1;
    if (b.id === 1) return 1;

    const aIsStarred = starBooks.includes(a.slug);
    const bIsStarred = starBooks.includes(b.slug);

    if (aIsStarred && !bIsStarred) return -1;
    if (!aIsStarred && bIsStarred) return 1;

    return 0;
  });

  return (
    <>
      {booksList.map((e) => {
        return (
          <BookPanelItem
            key={e.id}
            item={e}
            isBookStar={starBooks.includes(e.slug)}
          />
        );
      })}
    </>
  );
};

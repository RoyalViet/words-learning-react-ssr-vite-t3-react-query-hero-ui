import { count, eq } from "drizzle-orm";

import { db } from "~/.server/db";
import { Book, Word } from "~/.server/db/schema";
import { p } from "~/.server/trpc";

const prepare = db
  .select({
    id: Book.id,
    slug: Book.slug,
    image: Book.image,
    link: Book.link,
    name: Book.name,
    wordsCount: count(Word.id),
  })
  .from(Book)
  .leftJoin(Word, eq(Word.bookSlug, Book.slug))
  .groupBy(Book.id)
  .prepare("prepare");

export const getAllBooks = p.public.query(async () => {
  const allBooks = await prepare.execute();
  return { allBooks };
});

import { and, eq } from "drizzle-orm";
import { z } from "zod";

import { db } from "~/.server/db";
import { UsersToBooks } from "~/.server/db/schema";

import { p } from "..";

export const unStarBook = p.auth
  .input(z.object({ bookSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { bookSlug } }) => {
    await db
      .delete(UsersToBooks)
      .where(
        and(
          eq(UsersToBooks.userId, userId!),
          eq(UsersToBooks.bookSlug, bookSlug),
        ),
      );
  });

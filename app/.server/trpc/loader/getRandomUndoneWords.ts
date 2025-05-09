import { and, eq, notInArray, sql } from "drizzle-orm";
import { z } from "zod";

import { db } from "~/.server/db";
import { UsersToWords, Word } from "~/.server/db/schema";
import { p } from "~/.server/trpc";

export const getRandomUndoneWords = p.public
  .input(
    z.object({
      count: z.number().int().min(1).max(100).default(10), // Limit to reasonable number
      bookSlug: z.string().optional(), // Optional book filter
    }),
  )
  .query(async ({ ctx: { userId }, input: { count, bookSlug } }) => {
    // Start building the query - select random undone words
    const query = db
      .select({ Word })
      .from(Word)
      .where(
        and(
          // Exclude words that are already marked as done
          notInArray(
            Word.slug,
            db
              .select({ wordSlug: UsersToWords.wordSlug })
              .from(UsersToWords)
              .where(eq(UsersToWords.userId, userId!)),
          ),
          // Optional filter by book
          ...(bookSlug ? [eq(Word.bookSlug, bookSlug)] : []),
        ),
      )
      // Get random results - use SQL function for database-specific random
      .orderBy(sql`RANDOM()`)
      .limit(count);

    const randomUndoneWords = await query;

    return { randomUndoneWords };
  });

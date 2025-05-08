import { and, eq, inArray } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/.server/db";
import { UsersToWords } from "~/.server/db/schema";
import { p } from "~/.server/trpc";

export const getMultipleWordsStatus = p.auth
  .input(z.object({ wordSlugs: z.array(z.string()) }))
  .query(async ({ ctx: { userId }, input: { wordSlugs } }) => {
    // If user is not logged in, return all words as not done
    if (!userId || wordSlugs.length === 0) {
      return {
        doneWords: {},
      };
    }

    // Get all words that are marked as done for this user
    const items = await db
      .select({ wordSlug: UsersToWords.wordSlug })
      .from(UsersToWords)
      .where(
        and(
          eq(UsersToWords.userId, userId),
          inArray(UsersToWords.wordSlug, wordSlugs),
        ),
      );

    // Create a map of word slug to done status
    const doneWords = items.reduce(
      (acc, item) => {
        acc[item.wordSlug] = true;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    return { doneWords };
  });

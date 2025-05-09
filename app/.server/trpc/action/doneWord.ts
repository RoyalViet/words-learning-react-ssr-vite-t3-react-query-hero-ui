import { z } from "zod";

import { db } from "~/.server/db";
import { UsersToWords } from "~/.server/db/schema";
import { p } from "~/.server/trpc";

export const doneWord = p.auth
  .input(z.object({ wordSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { wordSlug } }) => {
    await db.insert(UsersToWords).values({ userId: userId!, wordSlug });
  });

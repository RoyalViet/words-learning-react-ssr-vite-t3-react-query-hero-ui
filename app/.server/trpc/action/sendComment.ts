import { z } from "zod";

import { db } from "~/.server/db";
import { Post } from "~/.server/db/schema";
import { p } from "~/.server/trpc";

export const sendComment = p.auth
  .input(z.object({ content: z.string(), wordSlug: z.string() }))
  .mutation(async ({ ctx: { userId }, input: { content, wordSlug } }) => {
    await db.insert(Post).values({ userId: userId!, wordSlug, content });
  });

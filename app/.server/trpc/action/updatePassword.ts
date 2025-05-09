import { TRPCError } from "@trpc/server";
import dayjs from "dayjs";
import { eq, sql } from "drizzle-orm";

import { encrypt } from "~/.server/crypto";
import { db } from "~/.server/db";
import { User, Verify } from "~/.server/db/schema";
import { p } from "~/.server/trpc";
import { updatePasswordForm } from "~/common/formSchema";

const prepare = db
  .select()
  .from(Verify)
  .where(eq(Verify.email, sql.placeholder("email")))
  .limit(1)
  .prepare("prepare");

export const updatePassword = p.unAuth
  .input(updatePasswordForm)
  .mutation(async ({ input: { email, password, verifyCode } }) => {
    const [verify] = await prepare.execute({ email });

    if (!verify) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Please send verification code first",
      });
    }

    if (verify.code !== verifyCode) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Verification code is incorrect",
      });
    }

    const diff = dayjs().diff(dayjs(verify.updatedAt), "s");

    if (diff > 60) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Verification code has expired",
      });
    }

    await db
      .update(User)
      .set({ password: encrypt(password) })
      .where(eq(User.email, email));
  });

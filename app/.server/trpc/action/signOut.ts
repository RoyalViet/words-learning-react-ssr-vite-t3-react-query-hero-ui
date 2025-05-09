import { Cookies } from "~/.server/cookies";
import { p } from "~/.server/trpc";
import { JWT_KEY } from "~/common/constants";

export const signOut = p.auth.mutation(({ ctx: { resHeaders } }) => {
  Cookies.delete(resHeaders, JWT_KEY);
});

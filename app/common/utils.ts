import toast from "react-hot-toast";
import { TRPCError } from "@trpc/server";

export const OnTRPCError = (error: Error) => {
  toast.error((error as TRPCError).message);
};

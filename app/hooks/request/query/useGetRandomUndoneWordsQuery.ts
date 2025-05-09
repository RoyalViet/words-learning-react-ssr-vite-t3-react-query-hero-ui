import { useQuery } from "@tanstack/react-query";

import { trpcClient } from "~/common/trpc";

export const useGetRandomUndoneWordsQuery = ({
  count = 10,
  bookSlug,
  enabled = true,
}: {
  count?: number;
  bookSlug?: string;
  enabled?: boolean;
}) =>
  useQuery({
    queryKey: ["getRandomUndoneWords", count, bookSlug],
    queryFn: () => {
      return trpcClient.loader.getRandomUndoneWords.query({
        count,
        bookSlug,
      });
    },
    enabled: enabled,
  });

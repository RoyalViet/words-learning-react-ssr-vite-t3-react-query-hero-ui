import { useQuery } from "@tanstack/react-query";

import { trpcClient } from "~/common/trpc";

export const useGetMultipleWordsStatusQuery = ({
  wordSlugs,
  enabled = true,
}: {
  wordSlugs: string[];
  enabled?: boolean;
}) =>
  useQuery({
    queryKey: ["getMultipleWordsStatus", wordSlugs],
    queryFn: () => {
      return trpcClient.loader.getMultipleWordsStatus.query({ wordSlugs });
    },
    enabled: enabled && wordSlugs.length > 0,
  });

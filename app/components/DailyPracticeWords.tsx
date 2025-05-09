import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";

import { useGetRandomUndoneWordsQuery } from "~/hooks/request/query/useGetRandomUndoneWordsQuery";
import { useMyUserInfo } from "~/hooks/useMyUserInfo";
import { WordAudioButton } from "~/ui/components/WordAudioButton";

import { DoneWordButton } from "./DoneWordButton";

interface DailyPracticeWordsProps {
  count?: number;
  bookSlug?: string;
}

export const DailyPracticeWords = ({
  count = 5,
  bookSlug,
}: DailyPracticeWordsProps) => {
  const { isLogin } = useMyUserInfo();
  const queryClient = useQueryClient();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isLoading, refetch } = useGetRandomUndoneWordsQuery({
    count,
    bookSlug,
    enabled: isLogin,
  });

  const randomWords = data?.randomUndoneWords || [];

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const handleWordDone = (wordSlug: string) => {
    // After marking a word as done, invalidate the query to ensure future random words are different
    queryClient.invalidateQueries({ queryKey: ["getRandomUndoneWords"] });
  };

  if (!isLogin) {
    return (
      <Card className="w-full">
        <CardBody className="flex items-center justify-center py-8">
          <p>Please sign in to see your daily practice words</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex items-center justify-between pb-2">
        <h3 className="text-lg font-semibold">Daily Practice Words</h3>
        <Button
          size="sm"
          color="primary"
          onPress={handleRefresh}
          isLoading={isLoading || isRefreshing}
        >
          Refresh
        </Button>
      </CardHeader>
      <CardBody className="py-2">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <Spinner size="lg" />
          </div>
        ) : randomWords.length === 0 ? (
          <div className="py-4 text-center">
            <p>No undone words found. Great job!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {randomWords.map((item) => (
              <div
                key={item.Word.slug}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <div className="flex items-center gap-2">
                  <WordAudioButton
                    ukAudioMp3={item.Word.ukAudioMp3 || ""}
                    usAudioMp3={item.Word.usAudioMp3 || ""}
                  />
                  <div>
                    <div className="font-medium">{item.Word.word}</div>
                    <div className="text-foreground-500 text-sm">
                      {item.Word.translation}
                    </div>
                  </div>
                </div>
                <DoneWordButton
                  wordSlug={item.Word.slug}
                  onPress={() => handleWordDone(item.Word.slug)}
                />
              </div>
            ))}
          </div>
        )}
      </CardBody>
      <CardFooter className="text-foreground-500 pt-2 text-sm">
        <p>{`Mark words as done once you've mastered them`}</p>
      </CardFooter>
    </Card>
  );
};

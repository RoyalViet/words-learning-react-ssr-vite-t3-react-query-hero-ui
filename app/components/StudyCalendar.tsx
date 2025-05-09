import { useEffect } from "react";
import { Activity, ActivityCalendar } from "react-activity-calendar";
import { Tooltip } from "@heroui/react";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";

import { isProfileModalOpenAtom } from "~/common/store";
import { useGetStudyCalendarQuery } from "~/hooks/request/query/useGetStudyCalendarQuery";
import { useAppTheme } from "~/hooks/useAppTheme";

const getCalendarData = (
  studyCalendar: {
    wordSlug: string;
    updatedAt: Date;
  }[] = [],
) => {
  const _studyCalendar = studyCalendar.map((e) => ({
    ...e,
    updatedAt: dayjs(e.updatedAt).format("YYYY-MM-DD"),
  }));

  const start = dayjs().subtract(6, "month");
  const end = dayjs();
  const result: Activity[] = [];

  let currentDate = start;
  while (currentDate.isBefore(end.add(1, "day"))) {
    const date = currentDate.format("YYYY-MM-DD");
    const activity: Activity = { date, count: 0, level: 0 };
    const count = _studyCalendar.filter((e) => e.updatedAt === date).length;
    if (count > 0) {
      const level = Math.min(Math.ceil(count / 10), 4);
      activity.count = count;
      activity.level = level;
    }
    result.push(activity);
    currentDate = currentDate.add(1, "day");
  }

  return result;
};

export const StudyCalendar = () => {
  const { isDarkMode } = useAppTheme();

  const isProfileModalOpen = useAtomValue(isProfileModalOpenAtom);

  const getStudyCalendarQuery = useGetStudyCalendarQuery({
    enabled: isProfileModalOpen,
  });

  const { studyCalendar = [] } = getStudyCalendarQuery.data || {};

  const calendarData = getCalendarData(studyCalendar);

  useEffect(() => {
    if (isProfileModalOpen) {
      getStudyCalendarQuery.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProfileModalOpen]);

  return (
    <ActivityCalendar
      colorScheme={isDarkMode ? "dark" : "light"}
      data={calendarData}
      blockRadius={0}
      loading={getStudyCalendarQuery.isFetching}
      maxLevel={4}
      theme={{
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
      }}
      renderBlock={(block, activity) => (
        <Tooltip
          content={
            activity.count > 0
              ? `${activity.date} studied ${activity.count} words`
              : `${activity.date} no study`
          }
        >
          {block}
        </Tooltip>
      )}
      labels={{
        totalCount: `In the past 6 months, studied ${studyCalendar.length} words in total`,
        legend: { less: "Low", more: "High" },
      }}
      renderColorLegend={(block, level) => (
        <Tooltip content={`Level ${level}`}>{block}</Tooltip>
      )}
    />
  );
};

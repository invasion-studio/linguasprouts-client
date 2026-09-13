"use client";

import Banner from "@/src/shared/ui/Banner";
import { useSearchParams } from "next/navigation";

function getMonthLabel(dateString: string | null) {
  if (!dateString) return null;

  const parsedDate = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(parsedDate.getTime())) return null;

  return parsedDate.toLocaleString("en-US", { month: "short" });
}

export default function FrenchSprintBanner() {
  const searchParam = useSearchParams();
  const startDate = searchParam.get("startDate");
  const endDate = searchParam.get("endDate");

  const startMonth = getMonthLabel(startDate);
  const endMonth = getMonthLabel(endDate);

  const title =
    startMonth && endMonth
      ? startMonth === endMonth
        ? `French Immigration Sprint - ${startMonth}`
        : `French Immigration Sprint - ${startMonth} / ${endMonth}`
      : "French Immigration Sprint";

  return <Banner title={title} height="180px" />;
}

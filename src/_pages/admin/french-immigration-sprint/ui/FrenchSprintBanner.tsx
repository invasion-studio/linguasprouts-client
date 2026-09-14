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
  const session = searchParam.get("session");

  const title = session
    ? `French Immigration Sprint - ${session}`
    : "French Immigration Sprint";

  return <Banner title={title} height="180px" />;
}

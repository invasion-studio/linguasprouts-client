"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getRegisteredChildren } from "@/src/_pages/marketing/summercamp2026/actions/getRegisteredChildren";

export function useGetRegisteredChildren() {
  const searchParams = useSearchParams();
  const classParam = searchParams.get("class");
  const selectedClass =
    classParam === "french" || classParam === "spanish" ? classParam : null;

  return useQuery({
    queryKey: ["registeredChildren", selectedClass],
    queryFn: () => getRegisteredChildren(selectedClass),
    staleTime: 1000 * 60 * 2,
  });
}

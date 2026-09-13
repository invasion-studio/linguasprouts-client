"use client";

import { useQuery } from "@tanstack/react-query";
import { getClasslistMetrics } from "@/src/_pages/marketing/summercamp2026/actions/getClasslistMetrics";

export function useGetClasslistMetrics() {
  return useQuery({
    queryKey: ["classlistMetrics"],
    queryFn: getClasslistMetrics,
    staleTime: 1000 * 60 * 10,
  });
}

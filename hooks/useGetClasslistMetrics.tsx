"use client";

import { useQuery } from "@tanstack/react-query";
import { getClasslistMetrics } from "@/actions/getClasslistMetrics";

export function useGetClasslistMetrics() {
  return useQuery({
    queryKey: ["classlistMetrics"],
    queryFn: getClasslistMetrics,
    staleTime: 1000 * 60 * 10,
  });
}

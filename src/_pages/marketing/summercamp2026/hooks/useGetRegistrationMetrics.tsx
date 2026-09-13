"use client";

import { useQuery } from "@tanstack/react-query";
import { getRegistrationMetrics } from "@/src/_pages/marketing/summercamp2026/actions/getRegistrationMetrics";

export function useGetRegistrationMetrics() {
  return useQuery({
    queryKey: ["registrationMetrics"],
    queryFn: getRegistrationMetrics,
    staleTime: 1000 * 60 * 10,
  });
}

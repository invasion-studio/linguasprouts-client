"use client";

import { useQuery } from "@tanstack/react-query";
import { getRegistrations } from "@/src/_pages/marketing/summercamp2026/actions/getRegistrations";

export function useGetRegistrations() {
  return useQuery({
    queryKey: ["registrations"],
    queryFn: getRegistrations,
    staleTime: 1000 * 60 * 2,
  });
}

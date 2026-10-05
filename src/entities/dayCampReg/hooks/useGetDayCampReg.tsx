"use client";

import { useQuery } from "@tanstack/react-query";
import { getDayCampReg } from "@/src/entities/dayCampReg/actions/getDayCampReg";

export function useGetDayCampReg(id: string) {
  return useQuery({
    queryKey: ["dayCampReg", id],
    queryFn: () => getDayCampReg(id),
    staleTime: 1000 * 60 * 2,
    enabled: Boolean(id),
  });
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { listDayCampRegs } from "@/src/entities/dayCampReg/actions/listDayCampRegs";

export function useListDayCampRegs(options?: { language?: string[] }) {
  return useQuery({
    queryKey: ["dayCampRegs", options?.language],
    queryFn: () => listDayCampRegs(options),
    staleTime: 1000 * 60 * 2,
  });
}

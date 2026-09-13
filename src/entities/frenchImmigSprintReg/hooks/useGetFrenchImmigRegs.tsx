"use client";

import { useQuery } from "@tanstack/react-query";
import { getFrenchImmigRegs } from "@/src/entities/frenchImmigSprintReg/actions/listFrenchImmigRegs";

export function useGetFrenchImmigRegs(options?: {
  startDate?: string;
  endDate?: string;
}) {
  return useQuery({
    queryKey: ["frenchImmigRegs", options?.startDate, options?.endDate],
    queryFn: () => getFrenchImmigRegs(options),
    staleTime: 1000 * 60 * 2,
  });
}

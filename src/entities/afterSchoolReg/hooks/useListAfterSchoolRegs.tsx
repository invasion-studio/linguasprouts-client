"use client";

import { useQuery } from "@tanstack/react-query";
import { listAfterSchoolRegs } from "@/src/entities/afterSchoolReg/actions/listAfterSchoolRegs";

export function useListAfterSchoolRegs(options?: {
  ageGroup?: string[];
  language?: string[];
}) {
  return useQuery({
    queryKey: ["afterSchoolRegs", options?.ageGroup, options?.language],
    queryFn: () => listAfterSchoolRegs(options),
    staleTime: 1000 * 60 * 2,
  });
}

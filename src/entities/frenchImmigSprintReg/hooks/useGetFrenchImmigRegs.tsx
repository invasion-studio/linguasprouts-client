"use client";

import { useQuery } from "@tanstack/react-query";
import { getFrenchImmigRegs } from "@/src/entities/frenchImmigSprintReg/actions/listFrenchImmigRegs";

export function useGetFrenchImmigRegs() {
  return useQuery({
    queryKey: ["frenchImmigRegs"],
    queryFn: getFrenchImmigRegs,
    staleTime: 1000 * 60 * 2,
  });
}

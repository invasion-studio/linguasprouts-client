"use client";

import { useQuery } from "@tanstack/react-query";
import { getFrenchImmigRegs } from "@/modules/programs/actions/frenchImmigrationSprint/listFrenchImmigRegs";

export function useGetFrenchImmigRegs() {
  return useQuery({
    queryKey: ["frenchImmigRegs"],
    queryFn: getFrenchImmigRegs,
    staleTime: 1000 * 60 * 2,
  });
}

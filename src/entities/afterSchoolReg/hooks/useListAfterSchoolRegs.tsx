"use client";

import { useQuery } from "@tanstack/react-query";
import { listAfterSchoolRegs } from "@/src/entities/afterSchoolReg/actions/listAfterSchoolRegs";

export function useListAfterSchoolRegs() {
  return useQuery({
    queryKey: ["afterSchoolRegs"],
    queryFn: listAfterSchoolRegs,
    staleTime: 1000 * 60 * 2,
  });
}

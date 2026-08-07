"use client";

import { useQuery } from "@tanstack/react-query";
import { getFrenchImmigRegById } from "@/modules/programs/actions/frenchImmigrationSprint/getFrenchImmigRegById";

export function useGetFrenchImmigRegById(id: string) {
  return useQuery({
    queryKey: ["frenchImmigReg", id],
    queryFn: () => getFrenchImmigRegById(id),
    staleTime: 1000 * 60 * 2,
    enabled: Boolean(id),
  });
}

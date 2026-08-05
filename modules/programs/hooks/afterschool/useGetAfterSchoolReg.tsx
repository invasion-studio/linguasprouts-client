"use client";

import { useQuery } from "@tanstack/react-query";
import { getAfterSchoolReg } from "@/modules/programs/actions/afterschool/getAfterSchoolReg";

export function useGetAfterSchoolReg(id: string) {
  return useQuery({
    queryKey: ["afterSchoolReg", id],
    queryFn: () => getAfterSchoolReg(id),
    staleTime: 1000 * 60 * 2,
    enabled: Boolean(id),
  });
}

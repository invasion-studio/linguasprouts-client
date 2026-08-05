"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/lib/resolveServerAction";
import { createAfterSchoolReg } from "@/modules/programs/actions/afterschool/createAfterSchoolReg";
import { AfterSchoolRegPayload } from "@/modules/programs/types/afterschoolReg";

export function useCreateAfterSchoolReg() {
  return useMutation({
    mutationFn: async (payload: AfterSchoolRegPayload) => {
      return await resolveServerAction(() => createAfterSchoolReg(payload));
    },
  });
}

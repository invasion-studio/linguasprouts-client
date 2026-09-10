"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { createAfterSchoolReg } from "@/src/entities/afterSchoolReg/actions/createAfterSchoolReg";
import { AfterSchoolRegPayload } from "@/src/entities/afterSchoolReg/model/afterschoolReg";

export function useCreateAfterSchoolReg() {
  return useMutation({
    mutationFn: async (payload: AfterSchoolRegPayload) => {
      return await resolveServerAction(() => createAfterSchoolReg(payload));
    },
  });
}

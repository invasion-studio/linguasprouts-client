"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { createFrenchImmigReg } from "@/src/entities/frenchImmigSprintReg/actions/createFrenchImmigReg";
import { FrenchImmigSprintRegPayload } from "@/src/entities/frenchImmigSprintReg/model/frenchImmigrationSprint";

export function useCreateFrenchImmigReg() {
  return useMutation({
    mutationFn: async (payload: FrenchImmigSprintRegPayload) => {
      return await resolveServerAction(() => createFrenchImmigReg(payload));
    },
  });
}

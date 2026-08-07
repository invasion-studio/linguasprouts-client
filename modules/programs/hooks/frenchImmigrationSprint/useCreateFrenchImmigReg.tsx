"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/lib/resolveServerAction";
import { createFrenchImmigReg } from "@/modules/programs/actions/frenchImmigrationSprint/createFrenchImmigReg";
import { FrenchImmigSprintRegPayload } from "@/modules/programs/types/frenchImmigrationSprint";

export function useCreateFrenchImmigReg() {
  return useMutation({
    mutationFn: async (payload: FrenchImmigSprintRegPayload) => {
      return await resolveServerAction(() => createFrenchImmigReg(payload));
    },
  });
}

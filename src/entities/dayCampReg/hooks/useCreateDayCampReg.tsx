"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { createDayCampReg } from "@/src/entities/dayCampReg/actions/createDayCampReg";
import { DayCampRegPayload } from "@/src/entities/dayCampReg/model/dayCampReg";

export function useCreateDayCampReg() {
  return useMutation({
    mutationFn: async (payload: DayCampRegPayload) => {
      return await resolveServerAction(() => createDayCampReg(payload));
    },
  });
}

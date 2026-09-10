"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { createCheckout } from "@/src/entities/afterSchoolReg/actions/createCheckout";

export function useCreateCheckout() {
  return useMutation({
    mutationFn: async (id: string) => {
      return await resolveServerAction(() => createCheckout(id));
    },
  });
}

"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/lib/resolveServerAction";
import { createCheckout } from "@/modules/programs/actions/afterschool/createCheckout";

export function useCreateCheckout() {
  return useMutation({
    mutationFn: async (id: string) => {
      return await resolveServerAction(() => createCheckout(id));
    },
  });
}

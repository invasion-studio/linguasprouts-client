"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import {
  createCheckout,
  CreateCheckoutData,
} from "@/src/entities/dayCampReg/actions/createCheckout";

export function useCreateCheckout() {
  return useMutation<CreateCheckoutData, Error, string>({
    mutationFn: async (id: string) => {
      return await resolveServerAction(() => createCheckout(id));
    },
  });
}

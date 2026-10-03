"use client";

import { useMutation } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { createFrenchImmigRegStripeCheckout } from "../actions/createFrenchImmigRegStripeCheckout";
import { FrenchImmigRegStripeCheckout } from "../model/frenchImmigrationSprint";

export function useCreateFrenchImmigRegStripeCheckout() {
  return useMutation<FrenchImmigRegStripeCheckout["data"], Error, string>({
    mutationFn: async (id: string) => {
      return await resolveServerAction(() =>
        createFrenchImmigRegStripeCheckout(id),
      );
    },
  });
}

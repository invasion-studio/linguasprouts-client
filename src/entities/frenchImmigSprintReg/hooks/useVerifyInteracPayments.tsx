"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { verifyInteracPayment } from "../actions/verifyInteracPayment";

export function useVerifyInteracPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return await resolveServerAction(() => verifyInteracPayment(id));
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

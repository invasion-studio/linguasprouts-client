"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyInteracPayment } from "@/src/_pages/marketing/summercamp2026/actions/verifyInteracPayment";

export function useVerifyInteracPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: verifyInteracPayment,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

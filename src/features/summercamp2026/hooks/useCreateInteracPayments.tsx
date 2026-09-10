"use client";

import { useMutation } from "@tanstack/react-query";
import { createInteracPayment } from "@/src/features/summercamp2026/actions/createInteracPayment";
import { RegistrationPayload } from "@/src/shared/lib/api";

export function useCreateInteracPayments() {
  return useMutation({
    mutationFn: (payload: RegistrationPayload) => createInteracPayment(payload),
  });
}

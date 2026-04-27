"use client";

import { useMutation } from "@tanstack/react-query";
import { createInteracPayment } from "@/actions/createInteracPayment";
import { RegistrationPayload } from "@/lib/api";

export function useCreateInteracPayments() {
  return useMutation({
    mutationFn: (payload: RegistrationPayload) => createInteracPayment(payload),
  });
}

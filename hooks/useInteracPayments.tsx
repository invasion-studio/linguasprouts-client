import { useMutation } from "@tanstack/react-query";
import { createInteracPayment } from "@/actions/createInteracPayment";
import { RegistrationPayload } from "@/lib/api";

export function useInteracPayments() {
  return useMutation({
    mutationFn: (payload: RegistrationPayload) => createInteracPayment(payload),
  });
}

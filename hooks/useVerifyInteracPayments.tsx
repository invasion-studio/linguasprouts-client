import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyInteracPayment } from "@/actions/verifyInteracPayment";

export function useVerifyInteracPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: verifyInteracPayment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interacPayments"] });
      queryClient.invalidateQueries({ queryKey: ["registrationMetrics"] });
      queryClient.invalidateQueries({ queryKey: ["classlistMetrics"] });
    },
  });
}

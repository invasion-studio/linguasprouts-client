import { useQuery } from "@tanstack/react-query";
import { getInteracPayments } from "@/actions/getInteracPayments";

export function useGetInteracPayments() {
  return useQuery({
    queryKey: ["interacPayments"],
    queryFn: getInteracPayments,
  });
}

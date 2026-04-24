import { useQuery } from "@tanstack/react-query";
import { getRegistrations } from "@/actions/getRegistrations";

export function useGetRegistrations() {
  return useQuery({
    queryKey: ["registrations"],
    queryFn: getRegistrations,
  });
}

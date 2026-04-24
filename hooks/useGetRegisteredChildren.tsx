import { useQuery } from "@tanstack/react-query";
import { getRegisteredChildren } from "@/actions/getRegisteredChildren";

export function useGetRegisteredChildren() {
  return useQuery({
    queryKey: ["registeredChildren"],
    queryFn: getRegisteredChildren,
  });
}

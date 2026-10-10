"use client";

import { useQuery } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { getAdmins } from "../actions/getAdmins";
import { Admin } from "../model/admin";
import { ADMINS_QUERY_KEY } from "./queryKeys";

export function useGetAdmins() {
  return useQuery<Admin[]>({
    queryKey: ADMINS_QUERY_KEY,
    queryFn: () => resolveServerAction(() => getAdmins()),
    staleTime: 1000 * 60 * 2,
  });
}

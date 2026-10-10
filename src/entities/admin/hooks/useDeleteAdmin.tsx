"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { deleteAdmin } from "../actions/deleteAdmin";
import { ADMINS_QUERY_KEY } from "./queryKeys";

export function useDeleteAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) =>
      resolveServerAction(() => deleteAdmin(email)),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADMINS_QUERY_KEY }),
  });
}

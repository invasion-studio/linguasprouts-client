"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import resolveServerAction from "@/src/shared/lib/resolveServerAction";
import { createAdmin } from "../actions/createAdmin";
import { AdminPayload } from "../model/admin";
import { ADMINS_QUERY_KEY } from "./queryKeys";

export function useCreateAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AdminPayload) =>
      resolveServerAction(() => createAdmin(payload)),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADMINS_QUERY_KEY }),
  });
}

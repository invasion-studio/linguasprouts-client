"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getInteracPayments } from "@/actions/getInteracPayments";

export function useGetInteracPayments() {
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");
  const status =
    statusParam === "paid" || statusParam === "pending" ? statusParam : null;

  return useQuery({
    queryKey: ["interacPayments", status],
    queryFn: () => getInteracPayments(status),
    staleTime: 1000 * 60 * 2,
  });
}

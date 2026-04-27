"use server";
import { GetInteracPaymentsResponse } from "@/lib/api";

export async function getInteracPayments(
  status?: string | null,
): Promise<GetInteracPaymentsResponse> {
  const params = new URLSearchParams();

  if (status) {
    params.set("status", status);
  }

  const url = `${process.env.BACKEND_BASE}/payments/interac${
    params.toString() ? `?${params.toString()}` : ""
  }`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch Interac payments: ${res.status}`);
  }

  return res.json();
}

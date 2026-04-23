"use server";
import { GetInteracPaymentsResponse } from "@/lib/api";

export async function getInteracPayments(): Promise<GetInteracPaymentsResponse> {
  const res = await fetch(`${process.env.BACKEND_BASE}/payments/interac`);

  if (!res.ok) {
    throw new Error(`Failed to fetch Interac payments: ${res.status}`);
  }

  return res.json();
}

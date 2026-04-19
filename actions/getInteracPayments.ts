"use server";
import { GetInteracPaymentsResponse } from "@/lib/api";

const BACKEND_BASE = "https://linguasprouts-backend-production.up.railway.app";

export async function getInteracPayments(): Promise<GetInteracPaymentsResponse> {
  const res = await fetch(`${BACKEND_BASE}/payments/interac`);

  if (!res.ok) {
    throw new Error(`Failed to fetch Interac payments: ${res.status}`);
  }

  return res.json();
}

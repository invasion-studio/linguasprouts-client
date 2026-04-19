"use server";
import { VerifyInteracPaymentResponse } from "@/lib/api";

const BACKEND_BASE = "https://linguasprouts-backend-production.up.railway.app";

export async function verifyInteracPayment(
  id: string,
): Promise<VerifyInteracPaymentResponse> {
  const res = await fetch(`${BACKEND_BASE}/payments/interac/${id}/mark-paid`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error(`Failed to verify payment: ${res.status}`);
  }

  return res.json();
}

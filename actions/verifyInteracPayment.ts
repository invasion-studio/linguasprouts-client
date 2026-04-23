"use server";
import { VerifyInteracPaymentResponse } from "@/lib/api";

export async function verifyInteracPayment(
  id: string,
): Promise<VerifyInteracPaymentResponse> {
  const res = await fetch(
    `${process.env.BACKEND_BASE}/payments/interac/${id}/mark-paid`,
    {
      method: "POST",
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to verify payment: ${res.status}`);
  }

  return res.json();
}

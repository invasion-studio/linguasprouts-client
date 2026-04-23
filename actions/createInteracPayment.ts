"use server";
import { RegistrationPayload, InteracCheckoutResponse } from "@/lib/api";

export async function createInteracPayment(
  payload: RegistrationPayload,
): Promise<InteracCheckoutResponse> {
  const res = await fetch(`${process.env.BACKEND_BASE}/registrations/interac`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to create Interac payment: ${res.status}`);
  }

  return res.json();
}

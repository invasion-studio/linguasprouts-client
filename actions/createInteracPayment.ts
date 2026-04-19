"use server";
import { RegistrationPayload, InteracCheckoutResponse } from "@/lib/api";

const BACKEND_BASE = "https://linguasprouts-backend-production.up.railway.app";

export async function createInteracPayment(
  payload: RegistrationPayload,
): Promise<InteracCheckoutResponse> {
  const res = await fetch(`${BACKEND_BASE}/registrations/interac`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to create Interac payment: ${res.status}`);
  }

  return res.json();
}

const API_BASE = "/api";

export interface RegistrationPayload {
  parent: {
    fullName: string;
    email: string;
    phone: string;
  };
  children: {
    fullName: string;
    age: number;
    allergies: string | null;
    classNames: ("french" | "spanish")[];
  }[];
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  data: {
    sessionUrl: string;
    registrationResult: {
      registration: { registrationId: string };
      parent: { parentId: string; fullName: string };
      children: { childId: string; fullName: string }[];
    };
  };
}

export interface PaymentVerifyResponse {
  success: boolean;
  message: string;
  data: {
    paymentStatus: string;
    registrationId: string | null;
  };
}

export async function createCheckoutSession(
  payload: RegistrationPayload,
): Promise<CheckoutResponse> {
  const res = await fetch(`${API_BASE}/registrations/stripe-checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message || `Registration failed (${res.status})`,
    );
  }

  return res.json();
}

export async function verifyPayment(
  sessionId: string,
): Promise<PaymentVerifyResponse> {
  const res = await fetch(
    `${API_BASE}/payments/verify?session_id=${encodeURIComponent(sessionId)}`,
  );

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    throw new Error(
      errorData?.message || `Payment verification failed (${res.status})`,
    );
  }

  return res.json();
}

export interface InteracPayment {
  interacPaymentId: string;
  name: string;
  email: string;
  registrationId: string;
  amountToPay: number;
  paymentStatus: "paid" | "pending";
  orderId: string | null;
}

export interface GetInteracPaymentsResponse {
  success: boolean;
  message: string;
  data: InteracPayment[];
  error: null;
}

export interface VerifyInteracPaymentResponse {
  success: boolean;
  message: string;
  data: any;
  error: any;
}

export interface InteracCheckoutResponse {
  success: boolean;
  message: string;
  data: {
    paymentUrl: string;
    registrationResult: {
      registration: { registrationId: string };
      parent: { parentId: string; fullName: string };
      children: { childId: string; fullName: string }[];
    };
  };
}

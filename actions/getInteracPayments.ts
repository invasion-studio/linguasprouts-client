"use server";

import axios from "@/lib/axios";

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

export async function getInteracPayments(
  status?: string | null,
): Promise<GetInteracPaymentsResponse> {
  const response = await axios.get("/payments/interac", {
    params: {
      status: status || undefined,
    },
  });

  return response.data;
}

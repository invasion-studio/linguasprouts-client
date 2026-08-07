"use server";

import axios from "@/lib/axios";
import apiResponse from "@/lib/serverActionResponse";
import { ResponsePayload } from "@/lib/types";
import { VerifyInteracPaymentResponse } from "@/lib/api";

export async function verifyInteracPayment(
  id: string,
): Promise<ResponsePayload<VerifyInteracPaymentResponse>> {
  try {
    const response = await axios.post<VerifyInteracPaymentResponse>(
      `/frenchimmigreg/${id}/mark-paid`,
    );
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to verify payment.";
    return apiResponse(false, message, null);
  }
}

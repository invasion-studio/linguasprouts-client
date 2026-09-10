"use server";

import axios from "@/src/shared/lib/axios";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";
import { VerifyInteracPaymentResponse } from "@/src/shared/lib/api";

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

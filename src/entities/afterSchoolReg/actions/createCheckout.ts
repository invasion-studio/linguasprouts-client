"use server";

import axios from "@/src/shared/lib/axios";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";

interface CreateCheckoutData {
  sessionUrl: string;
}

export async function createCheckout(
  id: string,
): Promise<ResponsePayload<CreateCheckoutData>> {
  try {
    const response = await axios.post(`/afterschoolreg/${id}/checkout`);
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "An unknown error occurred.";
    return apiResponse(false, message, null);
  }
}

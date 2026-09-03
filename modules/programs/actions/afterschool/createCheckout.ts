"use server";

import axios from "@/lib/axios";
import apiResponse from "@/lib/serverActionResponse";
import { ResponsePayload } from "@/lib/types";

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

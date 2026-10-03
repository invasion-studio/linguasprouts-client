"use server";

import axios from "@/src/shared/lib/axios";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";
import { FrenchImmigRegStripeCheckout } from "@/src/entities/frenchImmigSprintReg/model/frenchImmigrationSprint";

export async function createFrenchImmigRegStripeCheckout(
  id: string,
): Promise<ResponsePayload<FrenchImmigRegStripeCheckout["data"]>> {
  try {
    const response = await axios.post<FrenchImmigRegStripeCheckout>(
      `/frenchimmigreg/${id}/stripe`,
    );
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Failed to create Stripe checkout session.";
    return apiResponse(false, message, null);
  }
}

"use server";

import axios from "@/lib/axios";
import apiResponse from "@/lib/serverActionResponse";
import { ResponsePayload } from "@/lib/types";
import { FrenchImmigSprintRegPayload } from "@/modules/programs/types/frenchImmigrationSprint";

export async function createFrenchImmigReg(
  payload: FrenchImmigSprintRegPayload,
): Promise<ResponsePayload<unknown>> {
  try {
    const response = await axios.post("/frenchimmigreg", payload);
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "An unknown error occurred.";
    return apiResponse(false, message, null);
  }
}

"use server";

import axios from "@/src/shared/lib/axios";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";
import { FrenchImmigSprintRegPayload } from "@/src/entities/frenchImmigSprintReg/model/frenchImmigrationSprint";

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

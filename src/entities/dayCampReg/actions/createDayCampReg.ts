"use server";

import axios from "@/src/shared/lib/axios";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { DayCampRegPayload } from "@/src/entities/dayCampReg/model/dayCampReg";
import { ResponsePayload } from "@/src/shared/lib/types";
import { ResponseMeta } from "./../model/dayCampReg";

export async function createDayCampReg(
  payload: DayCampRegPayload,
): Promise<ResponsePayload<ResponseMeta & DayCampRegPayload>> {
  try {
    const response = await axios.post("/daycampreg", payload);
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "An unknown error occurred.";
    return apiResponse(false, message, null);
  }
}

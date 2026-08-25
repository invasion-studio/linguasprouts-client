"use server";

import axios from "@/lib/axios";
import apiResponse from "@/lib/serverActionResponse";
import { AfterSchoolRegPayload } from "@/modules/programs/types/afterschoolReg";
import { ResponsePayload } from "@/lib/types";
import { AfterSchoolRegResponse, ResponseMeta } from "./types";

export async function createAfterSchoolReg(
  payload: AfterSchoolRegPayload,
): Promise<ResponsePayload<ResponseMeta & AfterSchoolRegPayload>> {
  try {
    const response = await axios.post("/afterschoolreg", payload);
    return response.data;
  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "An unknown error occurred.";
    return apiResponse(false, message, null);
  }
}

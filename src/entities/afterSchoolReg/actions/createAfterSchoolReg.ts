"use server";

import axios from "@/src/shared/lib/axios";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { AfterSchoolRegPayload } from "@/src/entities/afterSchoolReg/model/afterschoolReg";
import { ResponsePayload } from "@/src/shared/lib/types";
import { ResponseMeta } from "./../model/afterschoolReg";

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

"use server";

import axios from "@/src/shared/lib/axios";
import getErrorMessage from "@/src/shared/lib/getErrorMessage";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";
import { Admin, AdminPayload } from "../model/admin";

export async function createAdmin(
  payload: AdminPayload,
): Promise<ResponsePayload<Admin>> {
  try {
    const response = await axios.post("/admin", payload);
    return response.data;
  } catch (error) {
    return apiResponse(false, getErrorMessage(error), null);
  }
}

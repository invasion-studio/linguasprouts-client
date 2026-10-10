"use server";

import axios from "@/src/shared/lib/axios";
import getErrorMessage from "@/src/shared/lib/getErrorMessage";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";

export async function deleteAdmin(
  email: string,
): Promise<ResponsePayload<unknown>> {
  try {
    const response = await axios.delete(`/admin/${encodeURIComponent(email)}`);
    return response.data;
  } catch (error) {
    return apiResponse(false, getErrorMessage(error), null);
  }
}

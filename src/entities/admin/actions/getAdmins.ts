"use server";

import axios from "@/src/shared/lib/axios";
import getErrorMessage from "@/src/shared/lib/getErrorMessage";
import apiResponse from "@/src/shared/lib/serverActionResponse";
import { ResponsePayload } from "@/src/shared/lib/types";
import { Admin } from "../model/admin";

export async function getAdmins(): Promise<ResponsePayload<Admin[]>> {
  try {
    const response = await axios.get("/admin");
    return response.data;
  } catch (error) {
    return apiResponse(false, getErrorMessage(error), null);
  }
}

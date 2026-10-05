"use server";

import axios from "@/src/shared/lib/axios";
import { DayCampRegListResponse } from "./../model/dayCampReg";

export async function listDayCampRegs(options?: {
  language?: string[];
}): Promise<DayCampRegListResponse> {
  const response = await axios.get("/daycampreg", {
    params: {
      language: options?.language,
    },
    paramsSerializer: {
      indexes: null,
    },
  });
  return response.data;
}

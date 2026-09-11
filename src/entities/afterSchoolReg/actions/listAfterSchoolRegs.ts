"use server";

import axios from "@/src/shared/lib/axios";
import { AfterSchoolRegListResponse } from "./../model/afterschoolReg";

export async function listAfterSchoolRegs(options?: {
  ageGroup?: string[];
  language?: string[];
}): Promise<AfterSchoolRegListResponse> {
  const response = await axios.get("/afterschoolreg", {
    params: {
      ageGroup: options?.ageGroup,
      language: options?.language,
    },
    paramsSerializer: {
      indexes: null,
    },
  });
  return response.data;
}

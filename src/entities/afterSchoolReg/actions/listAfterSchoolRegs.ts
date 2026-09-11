"use server";

import axios from "@/src/shared/lib/axios";
import { AfterSchoolRegListResponse } from "./../model/afterschoolReg";

export async function listAfterSchoolRegs(): Promise<AfterSchoolRegListResponse> {
  const response = await axios.get("/afterschoolreg");
  return response.data;
}

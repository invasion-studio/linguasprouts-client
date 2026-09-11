"use server";

import axios from "@/src/shared/lib/axios";
import { AfterSchoolRegResponse } from "./../model/afterschoolReg";

export async function getAfterSchoolReg(
  id: string,
): Promise<AfterSchoolRegResponse> {
  const response = await axios.get(`/afterschoolreg/${id}`);
  return response.data;
}

"use server";

import axios from "@/src/shared/lib/axios";
import { AfterSchoolRegResponse } from "./types";

export async function getAfterSchoolReg(
  id: string,
): Promise<AfterSchoolRegResponse> {
  const response = await axios.get(`/afterschoolreg/${id}`);
  return response.data;
}

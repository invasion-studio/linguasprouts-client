"use server";

import axios from "@/lib/axios";
import { AfterSchoolRegListResponse } from "./types";

export async function listAfterSchoolRegs(): Promise<AfterSchoolRegListResponse> {
  const response = await axios.get("/afterschoolreg");
  return response.data;
}

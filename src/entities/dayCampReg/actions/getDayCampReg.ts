"use server";

import axios from "@/src/shared/lib/axios";
import { DayCampRegResponse } from "./../model/dayCampReg";

export async function getDayCampReg(id: string): Promise<DayCampRegResponse> {
  const response = await axios.get(`/daycampreg/${id}`);
  return response.data;
}

"use server";

import axios from "@/src/shared/lib/axios";
import { FrenchImmigRegsListResponse } from "../model/frenchImmigrationSprint";

export async function getFrenchImmigRegs(options?: {
  startDate?: string;
  endDate?: string;
}): Promise<FrenchImmigRegsListResponse> {
  const response = await axios.get("/frenchimmigreg", {
    params: { startDate: options?.startDate, endDate: options?.endDate },
  });
  return response.data;
}

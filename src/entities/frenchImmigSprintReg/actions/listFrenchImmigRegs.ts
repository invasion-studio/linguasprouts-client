"use server";

import axios from "@/src/shared/lib/axios";
import { FrenchImmigRegsListResponse } from "../model/frenchImmigrationSprint";

export async function getFrenchImmigRegs(): Promise<FrenchImmigRegsListResponse> {
  const response = await axios.get("/frenchimmigreg");
  return response.data;
}

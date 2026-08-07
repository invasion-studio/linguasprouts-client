"use server";

import axios from "@/lib/axios";
import { FrenchImmigRegsListResponse } from "../../types/frenchImmigrationSprint";

export async function getFrenchImmigRegs(): Promise<FrenchImmigRegsListResponse> {
  const response = await axios.get("/frenchimmigreg");
  return response.data;
}

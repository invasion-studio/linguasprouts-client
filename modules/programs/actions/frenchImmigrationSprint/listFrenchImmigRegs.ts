"use server";

import axios from "@/lib/axios";
import { FrenchImmigRegsListResponse } from "./types";

export async function getFrenchImmigRegs(): Promise<FrenchImmigRegsListResponse> {
  const response = await axios.get("/frenchimmigreg");
  return response.data;
}

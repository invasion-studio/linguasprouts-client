"use server";

import axios from "@/src/shared/lib/axios";
import { FrenchImmigRegResponse } from "../model/frenchImmigrationSprint";

export async function getFrenchImmigRegById(
  id: string,
): Promise<FrenchImmigRegResponse> {
  const response = await axios.get(`/frenchimmigreg/${id}`);
  return response.data;
}

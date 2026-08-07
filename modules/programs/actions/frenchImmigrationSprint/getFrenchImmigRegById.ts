"use server";

import axios from "@/lib/axios";
import { FrenchImmigRegResponse } from "../../types/frenchImmigrationSprint";

export async function getFrenchImmigRegById(
  id: string,
): Promise<FrenchImmigRegResponse> {
  const response = await axios.get(`/frenchimmigreg/${id}`);
  return response.data;
}

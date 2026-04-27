"use server";

import axios from "@/lib/axios";

export interface RegisteredChild {
  childId: string;
  registrationId: string;
  fullName: string;
  age: number;
  allergies: string | null;
  class: string;
}

export interface GetRegisteredChildrenResponse {
  success: boolean;
  message: string;
  data: RegisteredChild[];
  error: null;
}

export async function getRegisteredChildren(
  selectedClass?: string | null,
): Promise<GetRegisteredChildrenResponse> {
  const response = await axios.get("/registrations/children", {
    params: {
      class: selectedClass || undefined,
    },
  });

  return response.data;
}

"use server";

import axios from "@/lib/axios";

export interface Parent {
  parentId: string;
  fullName: string;
  email: string;
  phone: string;
}

export interface RegistrationChild {
  childId: string;
  registrationId: string;
  fullName: string;
  age: number;
  allergies: string | null;
}

export interface Registration {
  registrationId: string;
  parentId: string;
  paymentStatus: string;
  createdAt: string;
  parent: Parent;
  children: RegistrationChild[];
}

export interface GetRegistrationsResponse {
  success: boolean;
  message: string;
  data: Registration[];
  error: null;
}

export async function getRegistrations(): Promise<GetRegistrationsResponse> {
  const res = await axios.get("/registrations");
  return res.data;
}

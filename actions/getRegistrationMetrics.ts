"use server";

import axios from "@/lib/axios";

export interface GetRegistrationMetricsResponse {
  success: boolean;
  message: string;
  data: {
    paidRegistrations: number;
    paidChildren: number;
    totalEarnings: number;
  };
  error: null;
}

export async function getRegistrationMetrics(): Promise<GetRegistrationMetricsResponse> {
  const res = await axios.get("/admin/dashboard/registrations");
  return res.data;
}

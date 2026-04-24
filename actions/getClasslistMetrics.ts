"use server";

import axios from "@/lib/axios";

export interface GetClasslistMetricsResponse {
  success: boolean;
  message: string;
  data: {
    frenchPaidRegistrants: number;
    spanishPaidRegistrants: number;
  };
  error: null;
}

export async function getClasslistMetrics(): Promise<GetClasslistMetricsResponse> {
  const res = await axios.get("/admin/dashboard/classlist");
  return res.data;
}

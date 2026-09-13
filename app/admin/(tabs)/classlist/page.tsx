"use client";

import AdminMetrics from "@/src/shared/ui/admin/AdminMetrics/AdminMetrics";
import { AdminMetric } from "@/src/shared/ui/admin/AdminMetrics/AdminMetrics";
import { Box, Stack } from "@mui/material";
import {
  useGetClasslistMetrics,
  ClassListTable,
} from "@/src/_pages/marketing/summercamp2026";

export default function ClassListPage() {
  const { data } = useGetClasslistMetrics();

  let metrics: AdminMetric[] | undefined;
  if (data?.data) {
    metrics = [
      {
        key: "French Class",
        value: data.data.frenchPaidRegistrants.toString(),
      },
      {
        key: "Spanish Class",
        value: data.data.spanishPaidRegistrants.toString(),
      },
    ];
  }

  return (
    <Stack gap={"24px"}>
      <AdminMetrics metrics={metrics} lenght={2} />
      <ClassListTable />
    </Stack>
  );
}

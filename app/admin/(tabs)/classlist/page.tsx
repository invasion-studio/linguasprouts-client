"use client";

import { AdminMetrics, AdminMetric } from "@/src/_pages/admin";
import { Box, Stack } from "@mui/material";
import {
  useGetClasslistMetrics,
  ClassListTable,
} from "@/src/features/summercamp2026";

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

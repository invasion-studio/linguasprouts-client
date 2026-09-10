"use client";

import AdminMetrics, {
  AdminMetric,
} from "@/src/features/admin/ui/AdminMetrics/AdminMetrics";
import { Box, Stack } from "@mui/material";
import { useGetClasslistMetrics } from "@/src/features/summercamp2026/hooks/useGetClasslistMetrics";
import ClassListTable from "@/src/features/admin/ui/ClassListTable";

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

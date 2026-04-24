"use client";

import AdminMetrics, {
  AdminMetric,
} from "@/components/AdminMetrics/AdminMetrics";
import { Box } from "@mui/material";
import { useGetClasslistMetrics } from "@/hooks/useGetClasslistMetrics";

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
    <Box>
      <AdminMetrics metrics={metrics} lenght={2} />
    </Box>
  );
}

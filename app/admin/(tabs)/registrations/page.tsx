"use client";

import AdminMetrics, {
  AdminMetric,
} from "@/components/AdminMetrics/AdminMetrics";
import { Box } from "@mui/material";
import { useGetRegistrationMetrics } from "@/hooks/useGetRegistrationMetrics";

export default function RegistrationsPage() {
  const { data } = useGetRegistrationMetrics();

  let metrics: AdminMetric[] | undefined;
  if (data?.data) {
    metrics = [
      {
        key: "No of Registrations",
        value: data.data.paidRegistrations.toString(),
      },
      {
        key: "No of Registered Children",
        value: data.data.paidChildren.toString(),
      },
      {
        key: "Total Earnings",
        value: `CA$ ${data.data.totalEarnings}`,
      },
    ];
  }

  return (
    <Box>
      <AdminMetrics metrics={metrics} lenght={3} />
    </Box>
  );
}

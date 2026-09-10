"use client";

import { AdminMetrics, AdminMetric } from "@/src/_pages/admin";
import { Box, Stack } from "@mui/material";
import {
  useGetRegistrationMetrics,
  RegisteredTable,
} from "@/src/features/summercamp2026";

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
    <Stack gap={"24px"}>
      <AdminMetrics metrics={metrics} lenght={3} />
      <RegisteredTable />
    </Stack>
  );
}

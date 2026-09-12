"use client";

import { Box } from "@mui/material";
import {
  useVerifyInteracPayment,
  OrdersTable,
} from "@/src/_pages/marketing/summercamp2026";

export default function OrdersPage() {
  const verifyMutation = useVerifyInteracPayment();

  return (
    <Box component={"div"}>
      <OrdersTable
        onVerify={(paymentId) => verifyMutation.mutate(paymentId)}
        isVerifying={verifyMutation.isPending}
      />
    </Box>
  );
}

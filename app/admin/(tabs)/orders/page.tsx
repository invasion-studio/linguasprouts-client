"use client";

import { Box } from "@mui/material";
import {
  useVerifyInteracPayment,
  OrdersTable,
} from "@/src/features/summercamp2026";

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

"use client";

import { Box } from "@mui/material";
import { useVerifyInteracPayment } from "@/src/features/summercamp2026/hooks/useVerifyInteracPayments";
import OrdersTable from "@/src/features/admin/ui/OrdersTable";

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

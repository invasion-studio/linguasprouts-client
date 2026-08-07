"use client";

import { Box } from "@mui/material";
import { useVerifyInteracPayment } from "@/hooks/useVerifyInteracPayments";
import OrdersTable from "@/components/OrdersTable/OrdersTable";

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

"use client";

import AppBar from "@/components/AppBar/AppBar";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useGetInteracPayments } from "@/hooks/usegetInteracPayments";
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

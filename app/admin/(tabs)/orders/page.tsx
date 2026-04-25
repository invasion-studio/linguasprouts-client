"use client";

import AppBar from "@/components/AppBar/AppBar";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useGetInteracPayments } from "@/hooks/usegetInteracPayments";
import { useVerifyInteracPayment } from "@/hooks/useVerifyInteracPayments";
import OrdersTable from "@/components/OrdersTable/OrdersTable";

export default function OrdersPage() {
  const { isPending } = useGetInteracPayments();
  const verifyMutation = useVerifyInteracPayment();

  return (
    <Box component={"div"}>
      {isPending && (
        <Stack
          minHeight={"calc(100vh - 64px)"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Stack>
      )}
      <OrdersTable
        onVerify={(paymentId) => verifyMutation.mutate(paymentId)}
        isVerifying={verifyMutation.isPending}
      />
    </Box>
  );
}

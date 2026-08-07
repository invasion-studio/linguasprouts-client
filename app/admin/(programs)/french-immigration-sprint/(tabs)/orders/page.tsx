"use client";

import { Box } from "@mui/material";
import FrenchImmigOrders from "@/modules/programs/components/frenchImmigrationSprint/OrdersTable";
import { useVerifyInteracPayment } from "@/modules/programs/hooks/frenchImmigrationSprint/useVerifyInteracPayments";

export default function OrdersPage() {
  const verifyMutation = useVerifyInteracPayment();

  return (
    <Box component={"div"}>
      <FrenchImmigOrders
        onVerify={async (paymentId) => verifyMutation.mutateAsync(paymentId)}
        isVerifying={verifyMutation.isPending}
        isError={verifyMutation.isError}
        error={verifyMutation.error}
      />
    </Box>
  );
}

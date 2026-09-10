"use client";

import { Box } from "@mui/material";
import FrenchImmigOrders from "@/src/_pages/frenchImmigrationSprint/ui/OrdersTable";
import { useVerifyInteracPayment } from "@/src/entities/frenchImmigSprintReg";

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

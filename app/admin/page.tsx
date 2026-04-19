"use client";

import AppBar from "@/components/ui/AppBar/AppBar";
import theme from "@/theme";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import style from "./page.module.css";
import { useGetInteracPayments } from "@/hooks/usegetInteracPayments";
import { useVerifyInteracPayment } from "@/hooks/useVerifyInteracPayments";
import { InteracPayment } from "@/lib/api";
import { useEffect } from "react";

export default function Adminpage() {
  const { data, isPending, error } = useGetInteracPayments();
  const verifyMutation = useVerifyInteracPayment();

  return (
    <Box bgcolor={(theme) => theme.palette.ibmgrey[10]} minHeight={"100vh"}>
      <AppBar />

      <Box component={"div"} className="layout" marginTop={"32px"}>
        <Typography variant="h4">Interac Payments</Typography>
        {isPending && (
          <Stack
            minHeight={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CircularProgress />
          </Stack>
        )}
        <div className={style.grid}>
          {data?.data.map((payment: InteracPayment) => (
            <PaymentCard
              key={payment.interacPaymentId}
              payment={payment}
              onVerify={() => verifyMutation.mutate(payment.interacPaymentId)}
              isVerifying={verifyMutation.isPending}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
}

const PaymentCard = (props: {
  payment: InteracPayment;
  onVerify: () => void;
  isVerifying: boolean;
}) => {
  const { payment, onVerify, isVerifying } = props;
  return (
    <Box padding={"20px"} bgcolor={"white"} borderRadius={"16px"}>
      <Stack gap={"12px"} marginBottom={"20px"}>
        <Typography variant="subtitle1">{payment.name}</Typography>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="body2" color="textSecondary">
            Order id
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {payment.orderId || "N/A"}
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="body2" color="textSecondary">
            Email
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {payment.email}
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="body2" color="textSecondary">
            Amount
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            CA${payment.amountToPay}
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="body2" color="textSecondary">
            Payment status
          </Typography>
          <Typography
            variant="subtitle2"
            color={payment.paymentStatus === "paid" ? "#34C759" : "#FF8D28"}
          >
            {payment.paymentStatus}
          </Typography>
        </Stack>
      </Stack>
      {payment.paymentStatus === "pending" && (
        <Button
          color="inherit"
          variant="outlined"
          onClick={onVerify}
          disabled={isVerifying}
          sx={{
            width: "100%",
            borderRadius: "200px",
            borderColor: (theme) => theme.palette.ibmgrey[30],
            padding: "10px 24px",
          }}
        >
          {isVerifying ? "Verifying..." : "Verify Payment"}
        </Button>
      )}
    </Box>
  );
};

"use client";

import AppBar from "@/components/AppBar/AppBar";
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

export default function OrdersPage() {
  const { data, isPending, error } = useGetInteracPayments();
  const verifyMutation = useVerifyInteracPayment();

  return (
    <Box component={"div"}>
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
  );
}

const PaymentCard = (props: {
  payment: InteracPayment;
  onVerify: () => void;
  isVerifying: boolean;
}) => {
  const { payment, onVerify, isVerifying } = props;

  const fields = [
    { label: "Order id", value: payment.orderId || "N/A" },
    { label: "Email", value: payment.email },
    { label: "Amount", value: `CA$ ${payment.amountToPay}` },
  ];

  return (
    <Box padding={"20px"} bgcolor={"white"} borderRadius={"8px"}>
      <Stack gap={"12px"}>
        <Typography variant="subtitle1">{payment.name}</Typography>

        {fields.map((field) => (
          <Stack
            key={field.label}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={"20px"}
          >
            <Typography variant="body2" color={"var(--palette-ibmgrey-60)"}>
              {field.label}
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              sx={{ wordBreak: "break-all" }}
            >
              {field.value}
            </Typography>
          </Stack>
        ))}

        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          gap={"20px"}
        >
          <Typography variant="body2" color={"var(--palette-ibmgrey-60)"}>
            Payment status
          </Typography>
          <Typography
            variant="subtitle2"
            color={payment.paymentStatus === "paid" ? "primary" : "#FF8D28"}
            sx={{ wordBreak: "break-all" }}
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
            marginTop: "20px",
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

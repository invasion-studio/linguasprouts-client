"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useGetInteracPayments } from "@/hooks/usegetInteracPayments";
import { InteracPayment } from "@/lib/api";
import theme from "@/theme";
import FilterGroup, { FilterButton } from "../FilterGroup/FilterGroup";

type ColumnProp = { key: string; header: string }[];
const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "amountToPay", header: "Amount" },
  { key: "paymentStatus", header: "Payment Status" },
  { key: "action", header: "Action" },
];

export default function OrdersTable({
  onVerify,
  isVerifying,
}: {
  onVerify: (paymentId: string) => void;
  isVerifying: boolean;
}) {
  const { data } = useGetInteracPayments();
  const rows = data?.data || [];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<InteracPayment | null>(
    null,
  );

  useEffect(() => {
    console.log(selectedPayment);
  }, [selectedPayment]);

  const handleOpenDialog = (payment: InteracPayment) => {
    setSelectedPayment(payment);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);

    setTimeout(() => {
      setSelectedPayment(null);
    }, 500);
  };

  const handleConfirmVerify = () => {
    if (selectedPayment) {
      onVerify(selectedPayment.interacPaymentId);
      handleCloseDialog();
    }
  };

  return (
    <>
      <DesktopTable
        columns={columns}
        rows={rows}
        keyProp="interacPaymentId"
        onOpenDialog={handleOpenDialog}
        isVerifying={isVerifying}
      />
      <MobileTable
        columns={columns}
        rows={rows}
        keyProp="interacPaymentId"
        onOpenDialog={handleOpenDialog}
        isVerifying={isVerifying}
      />

      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        sx={{
          "& .MuiPaper-root.MuiDialog-paper": {
            borderRadius: "8px",
            margin: { xs: "16px", md: "20px" },
          },
        }}
      >
        <Box padding={"20px"}>
          <Typography variant="h4" marginBottom={"16px"}>
            Verify Payment
          </Typography>
          <Typography variant={"body2"} color="textSecondary">
            Are you sure you want to verify{" "}
            <strong>{selectedPayment?.name}</strong>'s payment?
          </Typography>

          <Stack flexDirection={"row"} gap={"8px"} marginTop={"32px"}>
            <Button
              onClick={handleCloseDialog}
              variant="contained"
              color="inherit"
              disableElevation
              sx={{
                bgcolor: (theme) => theme.palette.ibmgrey[10],
                color: (theme) => theme.palette.text.primary,
                textTransform: "capitalize",
                borderRadius: "200px",
                flex: 1,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmVerify}
              variant="contained"
              disabled={isVerifying}
              disableElevation
              sx={{
                textTransform: "capitalize",
                borderRadius: "200px",
                flex: 1,
                color: "white",
              }}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
}

const MobileTable = ({
  columns,
  rows,
  keyProp,
  onOpenDialog,
  isVerifying,
}: {
  columns: ColumnProp;
  rows: { [key: string]: any }[];
  keyProp: string;
  onOpenDialog: (payment: InteracPayment) => void;
  isVerifying: boolean;
}) => {
  return (
    <Stack
      borderRadius={"8px"}
      overflow={"hidden"}
      gap={"4px"}
      sx={{ display: { xs: "flex", md: "none" } }}
    >
      {/* Filter */}
      <Box padding={"16px"} bgcolor={"white"}>
        <FilterGroup queryKey="status">
          <FilterButton queryValue={null}>All</FilterButton>
          <FilterButton queryValue={"paid"}>Paid</FilterButton>
          <FilterButton queryValue={"pending"}>Pending</FilterButton>
        </FilterGroup>
      </Box>

      {rows.map((r) => (
        <MobileItem
          key={r[keyProp]}
          columns={columns}
          row={r}
          onOpenDialog={onOpenDialog}
          isVerifying={isVerifying}
        />
      ))}
    </Stack>
  );
};

const MobileItem = ({
  columns,
  row,
  onOpenDialog,
  isVerifying,
}: {
  columns: ColumnProp;
  row: { [key: string]: any };
  onOpenDialog: (payment: InteracPayment) => void;
  isVerifying: boolean;
}) => {
  const theme = useTheme();
  const payment = row as InteracPayment;
  const displayAmount = `CA$ ${payment.amountToPay}`;
  const statusColor =
    payment.paymentStatus === "paid" ? theme.palette.primary.main : "#FF8D28";

  return (
    <Stack bgcolor={"white"} padding={"16px"} gap={"12px"}>
      <Typography variant="subtitle2">{payment.name}</Typography>

      {columns.map((c) => (
        <Box key={c.key} display={"contents"}>
          {!["name", "action"].includes(c.key) ? (
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              gap={"32px"}
            >
              <Typography
                variant="caption"
                color="textSecondary"
                flexShrink={0}
              >
                {c.header}
              </Typography>
              <Typography
                variant="caption"
                textAlign={"right"}
                noWrap
                sx={
                  c.key === "paymentStatus"
                    ? {
                        color: statusColor,
                        fontWeight: 600,
                      }
                    : {}
                }
              >
                {c.key === "amountToPay" ? displayAmount : row[c.key]}
              </Typography>
            </Stack>
          ) : undefined}
        </Box>
      ))}

      {payment.paymentStatus === "pending" && (
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => onOpenDialog(payment)}
          disabled={isVerifying}
          sx={{
            width: "100%",
            marginTop: "8px",
            borderRadius: "200px",
            borderColor: (theme) => theme.palette.ibmgrey[30],
            padding: "8px 24px",
            color: (theme) => theme.palette.primary.main,
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          Verify
        </Button>
      )}
    </Stack>
  );
};

const DesktopTable = ({
  columns,
  rows,
  keyProp,
  onOpenDialog,
  isVerifying,
}: {
  columns: ColumnProp;
  rows: { [key: string]: any }[];
  keyProp: string;
  onOpenDialog: (payment: InteracPayment) => void;
  isVerifying: boolean;
}) => {
  const theme = useTheme();
  return (
    <Box
      padding={"8px 24px"}
      bgcolor={"white"}
      borderRadius={"8px"}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      {/* Filter */}
      <Box marginBottom={"20px"} marginTop={"16px"}>
        <FilterGroup queryKey="status">
          <FilterButton queryValue={null}>All</FilterButton>
          <FilterButton queryValue={"paid"}>Paid</FilterButton>
          <FilterButton queryValue={"pending"}>Pending</FilterButton>
        </FilterGroup>
      </Box>

      {/* Header */}
      <Stack
        flexDirection={"row"}
        gap={"20px"}
        padding={"12px 0px"}
        alignItems={"center"}
      >
        {columns.map((c) => (
          <Typography
            key={c.key}
            flex={1}
            variant="caption"
            color="textSecondary"
            sx={{ wordBreak: "break-all" }}
          >
            {c.header}
          </Typography>
        ))}
      </Stack>

      {/* Rows */}
      {rows.map((r) => {
        const payment = r as InteracPayment;
        const displayAmount = `CA$ ${payment.amountToPay}`;
        const statusColor =
          payment.paymentStatus === "paid"
            ? theme.palette.primary.main
            : "#FF8D28";

        return (
          <Stack
            key={r[keyProp]}
            flexDirection={"row"}
            gap={"20px"}
            padding={"14px 0px"}
            borderTop={"1px solid"}
            borderColor={(theme) => theme.palette.divider}
            alignItems={"center"}
          >
            {columns.map((c) => {
              if (c.key !== "action") {
                return (
                  <Typography
                    key={c.key}
                    flex={1}
                    variant="body2"
                    noWrap
                    sx={{
                      wordBreak: "break-all",
                      ...(c.key === "paymentStatus" && {
                        color: statusColor,
                        fontWeight: 600,
                      }),
                    }}
                  >
                    {c.key === "amountToPay" ? displayAmount : r[c.key]}
                  </Typography>
                );
              }
            })}

            {payment.paymentStatus === "pending" && (
              <Box flex={1}>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => onOpenDialog(payment)}
                  disabled={isVerifying}
                  sx={{
                    borderRadius: "200px",
                    borderColor: (theme) => theme.palette.ibmgrey[30],
                    color: (theme) => theme.palette.primary.main,
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  Verify
                </Button>
              </Box>
            )}
            {payment.paymentStatus !== "pending" && (
              <Box flex={1}>
                <Button
                  color="inherit"
                  variant="outlined"
                  disabled
                  sx={{
                    borderRadius: "200px",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  Verifed
                </Button>
              </Box>
            )}
          </Stack>
        );
      })}
    </Box>
  );
};

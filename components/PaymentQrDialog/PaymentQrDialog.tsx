"use client";

import { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Dialog,
  dialogClasses,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QRCode from "qrcode";
import { useCreateCheckout } from "@/modules/programs/hooks/afterschool/useCreateCheckout";

export default function PaymentQrDialog({
  open,
  onClose,
  registrationId,
}: {
  open: boolean;
  onClose: () => void;
  registrationId: string;
}) {
  const { mutate, isPending } = useCreateCheckout();
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setQrCodeUrl(null);
      setError(null);
      return;
    }

    mutate(registrationId, {
      onSuccess: async (data) => {
        try {
          const dataUrl = await QRCode.toDataURL(data.sessionUrl);
          setQrCodeUrl(dataUrl);
        } catch {
          setError("Failed to generate QR code.");
        }
      },
      onError: (err) => {
        setError(err.message || "Failed to create payment session.");
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, registrationId]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={"xs"}
      fullWidth
      sx={{
        [`& .${dialogClasses.paper}`]: {
          padding: "32px",
          borderRadius: "32px",
        },
      }}
    >
      <IconButton
        onClick={onClose}
        size="small"
        sx={{ position: "absolute", top: "16px", right: "16px" }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <Stack alignItems={"center"} gap={"24px"} textAlign={"center"}>
        <Typography variant="h4">Scan to Pay</Typography>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"240px"}
          height={"240px"}
        >
          {isPending && <CircularProgress />}

          {!isPending && error && (
            <Typography color="error">{error}</Typography>
          )}

          {!isPending && !error && qrCodeUrl && (
            <Box
              component={"img"}
              src={qrCodeUrl}
              alt="Payment QR code"
              width={"100%"}
              height={"100%"}
            />
          )}
        </Box>

        {!isPending && !error && qrCodeUrl && (
          <Typography color="textSecondary">
            Scan this code with your phone camera to complete the payment.
          </Typography>
        )}
      </Stack>
    </Dialog>
  );
}

"use client";

import Link from "next/link";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "./PrimaryButton";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export type PaymentSuccessStatus = "loading" | "paid" | "pending" | "failed";

type Props = {
  status: PaymentSuccessStatus;
  programName?: string;
  supportEmail?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

export default function PaymentSuccess({
  status,
  programName,
  supportEmail = "info@linguasprouts.ca",
  primaryAction = { label: "Back to home", href: "/" },
  secondaryAction,
}: Props) {
  if (status === "loading") {
    return (
      <Stack alignItems="center" justifyContent="center" gap={2} py={12}>
        <CircularProgress color="primary" />
        <Typography color="text.secondary">Verifying your payment…</Typography>
      </Stack>
    );
  }

  const config = {
    paid: {
      icon: (
        <CheckCircleRoundedIcon sx={{ fontSize: 48, color: "primary.main" }} />
      ),
      accent: "rgba(77, 255, 77, 0.2)",
      title: "Payment successful",
      subtitle: programName
        ? `Thank you! You're all set for ${programName}.`
        : "Thank you! Your payment has been received.",
    },
    pending: {
      icon: (
        <HourglassTopRoundedIcon
          sx={{ fontSize: 48, color: "secondary.main" }}
        />
      ),
      accent: "rgba(18, 171, 222, 0.15)",
      title: "Payment processing",
      subtitle:
        "We haven't received confirmation yet. This can take a few minutes.",
    },
    failed: {
      icon: (
        <ErrorOutlineRoundedIcon sx={{ fontSize: 48, color: "error.main" }} />
      ),
      accent: "rgba(223, 34, 29, 0.12)",
      title: "We couldn't verify your payment",
      subtitle: "Please contact us and we'll sort it out right away.",
    },
  }[status];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        bgcolor: "background.paper",
        borderRadius: 4,
        boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <Box sx={{ bgcolor: config.accent, pt: 4, pb: 2, px: 3 }}>
        <Box
          sx={{
            width: 88,
            height: 88,
            mx: "auto",
            borderRadius: "50%",
            bgcolor: "background.paper",
            display: "grid",
            placeItems: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          {config.icon}
        </Box>
      </Box>

      <Stack gap={1.5} px={{ xs: 3, sm: 5 }} py={4} alignItems="center">
        <Typography variant="h3" color="text.primary">
          {config.title}
        </Typography>
        <Typography color="text.secondary">{config.subtitle}</Typography>

        {status !== "failed" && (
          <Typography color="text.secondary" fontSize={14}>
            A confirmation will be sent to your email. We'll be in touch with
            any further details.
          </Typography>
        )}

        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={1.5}
          mt={2}
          width="100%"
          justifyContent="center"
        >
          <PrimaryButton component={Link} href={primaryAction.href}>
            {primaryAction.label}
          </PrimaryButton>
          {secondaryAction && (
            <SecondaryButton component={Link} href={secondaryAction.href}>
              {secondaryAction.label}
            </SecondaryButton>
          )}
        </Stack>

        <Stack direction="row" alignItems="center" gap={1} mt={2}>
          <MailOutlineRoundedIcon fontSize="small" color="primary" />
          <Typography fontSize={14} color="text.secondary">
            Questions?{" "}
            <Link
              href={`mailto:${supportEmail}`}
              style={{ color: "inherit", fontWeight: 700 }}
            >
              {supportEmail}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

"use client";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import {
  alpha,
  Box,
  Dialog,
  dialogClasses,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import DoneIcon from "@mui/icons-material/Done";

export default function SuccessModal({ open }: { open: boolean }) {
  return (
    <Dialog
      open={open}
      maxWidth={"xs"}
      sx={{
        [`& .${dialogClasses.paper}`]: {
          padding: "32px",
          borderRadius: "32px",
        },
      }}
    >
      <Box>
        <Stack gap={"24px"} marginBottom={"48px"}>
          <Stack
            padding={"20px"}
            borderRadius={"2000px"}
            bgcolor={(theme) => alpha(theme.palette.primary.main, 0.12)}
            width={"fit-content"}
          >
            <DoneIcon fontSize="large" color="primary" />
          </Stack>

          <Typography variant="h3">You are set!!</Typography>

          <Typography color="textSecondary">
            Your registration was successful. We'll send you an email shortly
            with everything you need to get started. Please check your inbox
            (and spam folder if needed).
          </Typography>
        </Stack>

        <PrimaryButton LinkComponent={Link} href="/">
          Go to Home
        </PrimaryButton>
      </Box>
    </Dialog>
  );
}

"use client";

import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export default function JoinToday() {
  return (
    <Stack
      alignItems={"center"}
      className="layout"
      paddingTop={"120px"}
      paddingBottom={"120px"}
      gap={"20px"}
    >
      <Typography align="center" variant="h3">
        Join LinguaSprouts{" "}
        <Typography color={"primary"} component={"span"} variant="h3">
          Today
        </Typography>
      </Typography>
      <PrimaryButton
        LinkComponent={Link}
        color="primary"
        href="/summercamp2026"
      >
        Get Started
      </PrimaryButton>
    </Stack>
  );
}

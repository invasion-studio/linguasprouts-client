"use client";

import { IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function AdminDetailHeader({
  title,
  onBack,
}: {
  title: string;
  onBack: () => void;
}) {
  return (
    <Stack
      flexDirection={"row"}
      gap={"8px"}
      alignItems={"center"}
      marginBottom={"24px"}
    >
      <IconButton
        color="inherit"
        size="small"
        onClick={onBack}
        aria-label="Go back"
      >
        <ArrowBackIosIcon fontSize="small" color="action" />
      </IconButton>
      <Typography variant="h4">{title}</Typography>
    </Stack>
  );
}

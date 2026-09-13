"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function ProgramCard({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Button
      LinkComponent={Link}
      href={href}
      sx={{
        borderRadius: { xs: "0px", sm: "8px" },
        border: 0,
        padding: "20px",
        bgcolor: "white",
        height: "132px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textTransform: "unset",
        ["&:hover"]: {
          bgcolor: (theme) => theme.palette.ibmgrey[20],
        },
      }}
      color="inherit"
    >
      <Typography>{label}</Typography>
    </Button>
  );
}

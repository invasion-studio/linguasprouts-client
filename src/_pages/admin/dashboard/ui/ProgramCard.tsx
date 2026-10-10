"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function ProgramCard({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive?: boolean;
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
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "unset",
        gap: "20px",
        ["&:hover"]: {
          bgcolor: (theme) => theme.palette.ibmgrey[20],
        },
      }}
      color="inherit"
    >
      <Typography>{label}</Typography>
      {isActive ? (
        <Box padding={"4px 12px"} borderRadius={"8px"} bgcolor={"#F2F9F1"}>
          <Typography variant="caption" color="primary" fontWeight={"600"}>
            Active
          </Typography>
        </Box>
      ) : (
        <Box
          padding={"4px 12px"}
          borderRadius={"8px"}
          bgcolor={(theme) => theme.palette.ibmgrey[10]}
        >
          <Typography
            variant="caption"
            fontWeight={"600"}
            sx={{ color: (theme) => theme.palette.ibmgrey[60] }}
          >
            Completed
          </Typography>
        </Box>
      )}
    </Button>
  );
}

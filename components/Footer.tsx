"use client";

import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <Stack
      className="layout"
      paddingTop={"20px"}
      paddingBottom={"20px"}
      borderTop={"1px solid"}
      borderColor={(theme) => theme.palette.divider}
      gap={"16px"}
      alignItems={"center"}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "start", md: "space-between" },
      }}
      bgcolor={"white"}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getUTCFullYear()} Linguasprouts Academy
      </Typography>

      <Stack flexDirection={"row"} gap={"16px"}>
        <Link href="/register">
          <Typography variant="body2" color="textSecondary">
            Register
          </Typography>
        </Link>
        <Link href="/">
          <Typography variant="body2" color="textSecondary">
            Home
          </Typography>
        </Link>
        <Link href="/admin">
          <Typography variant="body2" color="textSecondary">
            Admin
          </Typography>
        </Link>
      </Stack>
    </Stack>
  );
}

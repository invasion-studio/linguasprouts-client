"use client";

import { Box, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/actions/logout";

export default function AppBar({
  variant = "default",
}: {
  variant?: "default" | "admin";
}) {
  return (
    <Stack
      bgcolor={"white"}
      className={variant == "admin" ? "adminLayout" : "layout"}
      height={"64px"}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href={"/"} style={{ paddingTop: "8px" }}>
        <Image
          src={
            variant == "admin"
              ? "/LiguaSprouts-Admin-Logo.svg"
              : "/Logo-LinguaSprouts.svg"
          }
          alt="Logo"
          width={184}
          height={26}
          loading="eager"
        />
      </Link>
      {variant == "admin" ? (
        <Button
          onClick={() => logout()}
          variant="outlined"
          sx={{
            borderRadius: "100px",
            textTransform: "none",
          }}
        >
          Logout
        </Button>
      ) : undefined}
    </Stack>
  );
}

"use client";

import { Box, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/actions/logout";

export default function AppBar() {
  return (
    <Stack
      bgcolor={"white"}
      className="layout"
      height={"64px"}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href={"/"}>
        <Image
          src={"/Logo-LinguaSprouts.svg"}
          alt="Logo"
          width={132}
          height={26}
          loading="eager"
        />
      </Link>
      {/* <Button
        onClick={() => logout()}
        variant="outlined"
        sx={{
          borderRadius: "100px",
          textTransform: "none",
        }}
      >
        Logout
      </Button> */}
    </Stack>
  );
}

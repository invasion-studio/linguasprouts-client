"use client";

import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function AppBar() {
  return (
    <Stack
      bgcolor={"white"}
      className="layout"
      height={"64px"}
      justifyContent={"center"}
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
    </Stack>
  );
}

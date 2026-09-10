"use client";

import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

export default function Footer({
  variant = "styled",
}: {
  variant?: "styled" | "basic";
}) {
  return <>{variant === "basic" ? <FooterBasic /> : <FooterStyled />}</>;
}

function FooterStyled() {
  return (
    <Box
      bgcolor={"#E7FBE2"}
      component={"div"}
      className="layout"
      color={(theme) => theme.palette.ibmgrey[80]}
      paddingTop={"32px"}
      paddingBottom={"8px"}
      position={"relative"}
      marginTop={"50px"}
      sx={{
        "& #footer-illustration": {
          right: { xs: 20, sm: 24, md: 40 },
        },
      }}
    >
      <Stack
        gap={"48px"}
        marginBottom={"60px"}
        justifyContent={"space-between"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "center" },
        }}
      >
        <Box maxWidth={"300px"}>
          <Logo />
          <Typography marginTop={"24px"} color="inherit">
            Building the next generation of global communicators.
          </Typography>
        </Box>

        <Stack gap={"16px"} marginRight={"100px"}>
          <Typography variant="subtitle1" color="inherit">
            Company
          </Typography>

          <Link href={"/about"}>
            <Typography variant="body1" color="inherit">
              About Us
            </Typography>
          </Link>

          <Link href={"/"}>
            <Typography variant="body1" color="inherit">
              Courses
            </Typography>
          </Link>

          <Link href={"/contact"}>
            <Typography variant="body1" color="inherit">
              Contact Us
            </Typography>
          </Link>
        </Stack>
      </Stack>

      <Divider sx={{ borderColor: (theme) => theme.palette.ibmgrey[20] }} />
      <Stack
        gap={"16px"}
        sx={{
          padding: { xs: "16px 0px", md: "32px 0px" },
          flexDirection: { xs: "column", md: "row-reverse" },
          justifyContent: "space-between",
        }}
      >
        <Link href="/admin">
          <Typography variant="body1">Admin</Typography>
        </Link>

        <Typography variant="body1">
          © 2026 LinguaSprouts Academy. All rights reserved.
        </Typography>
      </Stack>

      <Image
        id="footer-illustration"
        src={"/illustration6.svg"}
        alt="illustration"
        width={40}
        height={40}
        style={{ position: "absolute", top: 35 }}
      />

      <Image
        id="footer-illustration"
        src={"/footer-bg2.svg"}
        alt="illustration"
        width={1280}
        height={401}
        style={{
          position: "absolute",
          top: -50,
          width: "100vw",
          height: "auto",
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      />
    </Box>
  );
}

function FooterBasic() {
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
      // bgcolor={"white"}
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

"use client";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Enroll() {
  return (
    <Box
      component={"div"}
      className="layout"
      sx={{
        paddingTop: { xs: "60px", md: "80px" },
        paddingBottom: { xs: "60px", md: "80px" },
      }}
    >
      <Stack alignItems={"center"}>
        <Stack
          padding={"6px 12px"}
          borderRadius={"200px"}
          width={"fit-content"}
          border={"1px solid"}
          borderColor={(theme) => theme.palette.ibmgrey[30]}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: (theme) => theme.palette.ibmgrey[60] }}
          >
            Limited spaces available
          </Typography>
        </Stack>
        <Typography variant="h3" margin={"8px 0px"} textAlign={"center"}>
          Enroll With LinguaSprouts{" "}
          <Typography component={"span"} variant="h3" color="primary">
            Today
          </Typography>{" "}
        </Typography>
        <Typography
          color="textSecondary"
          textAlign={"center"}
          marginBottom={"32px"}
        >
          Give yourself the gift of language and a world of opportunities.
        </Typography>

        <PrimaryButton
          LinkComponent={Link}
          href="/adult-french-language/register"
        >
          Get Started
        </PrimaryButton>
      </Stack>
    </Box>
  );
}

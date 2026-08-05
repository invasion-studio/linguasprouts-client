"use client";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function SummerCamp2026() {
  return (
    <Box
      component={"div"}
      className="layout"
      sx={{
        paddingTop: { xs: "60px", md: "80px" },
        paddingBottom: { xs: "60px", md: "80px" },
      }}
    >
      <Stack
        maxWidth={"1200px"}
        margin={"0px auto"}
        gap={"60px"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "start", md: "space-between" },
        }}
      >
        <Box flex={1}>
          <Typography variant="h2" marginBottom={"20px"}>
            Get Started With Summer Camp{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              2026
            </Typography>
          </Typography>
          <Typography color="textSecondary" marginBottom={"32px"}>
            Enroll your child in a fun-filled language learning adventure this
            summer, where they’ll build confidence, make new friends, and
            explore new cultures through engaging, interactive experiences.
          </Typography>
          <PrimaryButton
            component={Link}
            href="/summercamp2026"
            color="primary"
          >
            Learn More
          </PrimaryButton>
        </Box>

        <Box flex={1}>
          <Image
            src={"/illustration-group1.png"}
            alt={"Illustration"}
            width={390}
            height={330}
            style={{
              width: "100%",
              margin: "0px auto",
              maxWidth: 420,
              minWidth: 1,
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

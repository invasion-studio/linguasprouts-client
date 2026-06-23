"use client";

import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

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
        maxWidth={"1024px"}
        margin={"0px auto"}
        gap={"64px"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "start", md: "space-between" },
        }}
      >
        <Box maxWidth={"450px"}>
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
          <PrimaryButton href="/summercamp2026" color="primary">
            Learn More
          </PrimaryButton>
        </Box>

        <Image
          src={"/illustration-group1.png"}
          alt={"Illustration"}
          width={390}
          height={330}
        />
      </Stack>
    </Box>
  );
}

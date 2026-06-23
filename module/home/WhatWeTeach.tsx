"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function WhatWeTeach() {
  return (
    <Box
      component={"div"}
      className="layout"
      sx={{
        paddingTop: { xs: "60px", md: "100px" },
        paddingBottom: { xs: "60px", md: "100px" },
      }}
    >
      <Box maxWidth={"1024px"} margin={"0px auto"}>
        <Typography
          variant="h2"
          color="textSecondary"
          fontFamily={"playpen sans"}
          align="center"
          sx={{
            marginBottom: { xs: "60px", md: "80px" },
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: { xs: "44px", md: "56px" },
          }}
        >
          What We{" "}
          <Typography
            component={"span"}
            color="primary"
            sx={{ font: "inherit" }}
          >
            Teach
          </Typography>
        </Typography>

        <Stack
          gap={"80px"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "start", md: "space-between" },
            alignItems: { xs: "center", md: "start" },
          }}
        >
          <Language
            name="French"
            imageSrc="/flag-french.svg"
            description="Learn the language of culture, travel, and business."
          />
          <Language
            name="Spanish"
            imageSrc="/flag-spanish.svg"
            description="Master one of the world’s most widely spoken languages with confidence."
          />
          <Language
            name="Mandarin"
            imageSrc="/flag-china.svg"
            description="Build strong foundations in speaking, reading, and pronunciation."
          />
        </Stack>
      </Box>
    </Box>
  );
}

function Language({
  name,
  description,
  imageSrc,
}: {
  name: string;
  description: string;
  imageSrc: string;
}) {
  return (
    <Stack flex={1} alignItems={"center"} gap={"16px"} maxWidth={"250px"}>
      <Image src={imageSrc} alt="flag" height={52} width={52} />
      <Typography variant="h3" fontWeight={500}>
        {name}
      </Typography>
      <Typography align="center" color="textSecondary">
        {description}
      </Typography>
    </Stack>
  );
}

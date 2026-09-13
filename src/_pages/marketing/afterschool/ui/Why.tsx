"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Why() {
  return (
    <Box
      component={"div"}
      className="layout section"
      bgcolor={"#F6FAF5"}
      position={"relative"}
      overflow={"hidden"}
    >
      <Stack sx={{ gap: { xs: "40px", md: "60px" } }}>
        <Box maxWidth={"700px"} margin={"0px auto"}>
          <Typography variant="h2" marginBottom={"4px"} textAlign={"center"}>
            An environment kids look forward to
          </Typography>
          <Typography color="textSecondary" textAlign={"center"}>
            Whether you thrive in a live classroom or prefer to learn on your
            own time, choose the format that works for you.
          </Typography>
        </Box>

        <Stack
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          sx={{
            gap: "24px",
            zIndex: 1,
          }}
        >
          <Card
            imageHref="/program/afterschool/boxicons_community-filled.svg"
            title="Small Group Classes"
            text="With a maximum of 6 students, every child gets the attention they need to participate and grow."
          />

          <Card
            imageHref="/program/afterschool/mdi_puzzle.svg"
            title="Interactive Learning"
            text="Fun, hands-on activities keep children engaged while making language learning feel natural."
          />

          <Card
            imageHref="/program/afterschool/reicon_sparkle-filled.svg"
            title="Builds Confidence"
            text="Children practise speaking and expressing themselves in a supportive, encouraging environment."
          />

          <Card
            imageHref="/program/afterschool/material-symbols_person-raised-hand-rounded.svg"
            title="Cultural Awareness"
            text="Children discover new cultures and perspectives while developing their language skills."
          />

          <Card
            imageHref="/program/afterschool/mdi_sprout.svg"
            title="Strong Foundation"
            text="Build essential language skills early and create a strong base for continued learning."
          />
        </Stack>
      </Stack>
    </Box>
  );
}

const Card = ({
  imageHref,
  title,
  text,
}: {
  imageHref: string;
  title: string;
  text: string;
}) => {
  return (
    <Stack
      gap={"16px"}
      bgcolor={"white"}
      borderRadius={"12px"}
      border={"1px solid"}
      borderColor={(theme) => theme.palette.ibmgrey[20]}
      padding={"20px"}
      alignItems={"center"}
      sx={{
        flex: {
          xs: "0 1 100%",
          sm: "0 1 calc((100% - 24px) / 2)",
          md: "0 1 calc((100% - 48px) / 3)",
        },
      }}
    >
      <Image src={imageHref} alt="card icon" width={48} height={48} />

      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      <Typography textAlign={"center"} color="textSecondary">
        {text}
      </Typography>
    </Stack>
  );
};

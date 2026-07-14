"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Value() {
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
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "60px", md: "120px" },
        }}
      >
        <Box flex={3} width={"100%"}>
          <Typography
            variant="h2"
            marginBottom={"28px"}
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              lineHeight: { xs: "44px", md: "56px" },
            }}
          >
            Setting Young Learners Up for a{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              Global Future
            </Typography>
          </Typography>
          <Typography
            variant="h4"
            color="textSecondary"
            sx={{
              font: { xs: "var(--font-body1)", md: "var(--font-h4)" },
              lineHeight: { xs: undefined, md: "36px" },
            }}
            style={{ fontWeight: 400 }}
          >
            At LinguaSprouts, we inspire children to become confident
            communicators through immersive language learning. From their very
            first lesson, students are surrounded by engaging, interactive
            experiences that make language come alive. Guided by passionate
            educators in a supportive environment, children build real-world
            language skills, cultural awareness, and the confidence to connect
            with the world around them.
          </Typography>
        </Box>

        <Box flex={2} width={"100%"}>
          <Box
            position={"relative"}
            // marginLeft={"auto"}
            maxWidth={"400px"}
            height={"420px"}
            sx={{
              marginLeft: { xs: undefined, md: "auto" },
              "& #value-curvedVector": {
                width: { xs: "140px", md: "184px" },
                bottom: { xs: -67, md: -55 },
                left: { xs: 4, md: -74 },
              },
            }}
          >
            <Box
              position={"relative"}
              borderRadius={"24px"}
              width={"100%"}
              height={"100%"}
              overflow={"hidden"}
            >
              <Image
                src="/value-image.jpg"
                alt="Children going to school"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Image
              src="/lineVector2.svg"
              id="value-curvedVector"
              alt="vector"
              width={184}
              height={176}
              style={{ position: "absolute" }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

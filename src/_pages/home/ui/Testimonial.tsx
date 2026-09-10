"use client";

import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function Testimonial() {
  const mediumBreakpoint = useMediaQuery("(min-width: 900px)");
  return (
    <Box
      component={"div"}
      className="layout"
      sx={{
        paddingTop: { xs: "40px", md: "80px" },
        paddingBottom: { xs: "40px", md: "80px" },
      }}
    >
      <Stack
        bgcolor={"#F3F8F2"}
        borderRadius={"32px"}
        gap={"40px"}
        alignItems={"flex-end"}
        sx={{
          padding: {
            xs: "40px 20px 40px 20px",
            sm: "50px 40px 50px 40px",
            md: "80px 80px 60px 80px",
          },
        }}
      >
        <Typography
          variant="h3"
          color="#4C5A4A"
          sx={{
            font: {
              xs: "var(--font-h4)",
              md: "var(--font-h3)",
            },
          }}
        >
          “We’ve been very happy with this language school. Our child’s
          confidence and communication skills have improved greatly in a short
          time, and the teachers are patient, supportive, and highly effective.{" "}
          <Typography
            component={"span"}
            color="primary"
            sx={{ font: "inherit" }}
          >
            Highly recommended!
          </Typography>
          ”
        </Typography>

        <Stack
          flexDirection={"row"}
          gap={"20px"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              align="right"
              variant="h4"
              color="#4C5A4A"
              sx={{
                font: { xs: "var(--font-subtitle1)", md: "var(--font-h4)" },
              }}
            >
              ANNA
            </Typography>
            <Typography align="right" variant="body1" color="textSecondary">
              Briggs
            </Typography>
          </Box>
          {mediumBreakpoint && (
            <Image
              src={"/illustration6.svg"}
              alt="Illustration"
              width={80}
              height={80}
            />
          )}

          {!mediumBreakpoint && (
            <Image
              src={"/illustration6.svg"}
              alt="Illustration"
              width={40}
              height={40}
            />
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

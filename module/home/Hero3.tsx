"use client";

import AppBar from "@/components/AppBar/AppBar";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero3() {
  return (
    <Box>
      <Box position={"relative"} zIndex={2}>
        <AppBar />
      </Box>
      <Box bgcolor={"#42F042"} height={"40px"} position={"relative"} zIndex={2}>
        <Box
          position={"absolute"}
          right={0}
          width={"40%"}
          borderBottom={"40px solid #7CF764"}
          borderLeft={"40px solid transparent"}
          sx={{}}
        />
      </Box>
      <Box
        component={"div"}
        className="layout"
        bgcolor={"#0F91BD"}
        position={"relative"}
        sx={{
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <Box
          height={"600px"}
          width={"600px"}
          bgcolor={"rgba(255,255,255,0.08)"}
          position={"absolute"}
          sx={{
            transform: "rotate(30deg)",
            bottom: { xs: -250, md: -150 },
            left: { xs: -450, sm: -350, md: -250 },
          }}
        />

        <Stack
          flexDirection={"row"}
          gap={"64px"}
          alignItems={"center"}
          maxWidth={"1200px"}
          margin="0px auto"
        >
          <Box width={"100%"}>
            <Typography
              variant="h1"
              color="white"
              marginBottom={"16px"}
              sx={{
                font: { xs: "var(--font-h2)", md: "var(--font-h1)" },
              }}
              style={{ fontWeight: 800 }}
            >
              Speak. Play.{" "}
              <Typography
                component={"span"}
                position={"relative"}
                style={{ font: "inherit" }}
                zIndex={2}
                sx={{
                  "& #line-vector": {
                    width: { xs: "140px", md: "150px" },
                    right: { xs: 0, md: 16 },
                  },
                }}
              >
                Grow.{" "}
                <Image
                  src={"/lineVector.svg"}
                  id="line-vector"
                  alt="illustration"
                  width={150}
                  height={11}
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: -8,
                    zIndex: -1,
                  }}
                />
              </Typography>
            </Typography>
            <Typography color="white" maxWidth={480} marginBottom={"32px"}>
              From their first words to full conversations, we guide children on
              a joyful journey into new languages—helping them connect with the
              world early.
            </Typography>
            <Stack flexDirection={"row"} gap={"8px"}>
              <PrimaryButton
                color="primary"
                sx={{
                  bgcolor: (theme) => theme.palette.primary.light,
                  "&:hover": { bgcolor: (theme) => theme.palette.primary.main },
                  color: "#0E3D05",
                }}
              >
                Learn more
              </PrimaryButton>
              <PrimaryButton variant="outlined" color="inherit">
                Get in touch
              </PrimaryButton>
            </Stack>
          </Box>

          <Box width={"100%"} sx={{ display: { xs: "none", md: "block" } }}>
            <Image
              src={"/home-Illustration.png"}
              alt="home illustration"
              id="hero-illustration"
              width={397}
              height={399}
              style={{
                width: "100%",
                minWidth: 1,
                maxWidth: 400,
                marginLeft: "auto",
                marginRight: "20px",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

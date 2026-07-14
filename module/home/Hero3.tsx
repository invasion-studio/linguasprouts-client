"use client";

import AppBar from "@/components/AppBar/AppBar";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionStack = motion(Stack);

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
        overflow={"hidden"}
        sx={{
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Translated box 8% transparency */}
        <MotionBox
          initial={{ opacity: 0, x: -90, y: 40, rotate: -25 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
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

        {/* circle box 8% transparency */}
        <MotionStack
          initial={{ opacity: 0, x: 90, y: 40, rotate: 25 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          bgcolor={"rgba(255,255,255,0.08)"}
          position={"absolute"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"2000px"}
          sx={{
            display: { xs: "none", sm: "flex" },
            height: { sm: "400px", md: "520px" },
            width: { sm: "400px", md: "520px" },
            right: -180,
            bottom: { sm: -200, md: -250 },
          }}
        >
          <Box
            height={"220px"}
            width={"220px"}
            borderRadius={"2000px"}
            bgcolor={"#0F91BD"}
            sx={{
              height: { sm: "200px", md: "220px" },
              width: { sm: "200px", md: "220px" },
            }}
          />
        </MotionStack>

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
              loading="eager"
              width={397}
              height={399}
              style={{
                width: "100%",
                minWidth: 1,
                maxWidth: 420,
                marginLeft: "auto",
                marginRight: "20px",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

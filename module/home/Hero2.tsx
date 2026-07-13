"use client";

import AppBar from "@/components/AppBar/AppBar";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero2() {
  return (
    <Box height="100vh" position="relative" sx={{ overflow: "hidden" }}>
      <Box position={"relative"} zIndex={2}>
        <AppBar transparent />
      </Box>

      <Image
        src={"/homebanner.jpg"}
        alt="children studying"
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <Box
        position="absolute"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.35)", inset: 0 }}
      />

      <Box
        position="absolute"
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.20) 0%, transparent 20%)",
          inset: 0,
        }}
      />

      <Box
        position="absolute"
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 40%)",
          inset: 0,
        }}
      />

      <Box
        position={"absolute"}
        component={"div"}
        id="traingle-vector"
        right={0}
        bottom={0}
        sx={{
          width: 0,
          height: 0,
          borderLeft: "40vw solid transparent",
          borderRight: 0,
          borderBottom: "80vh solid rgba(255, 255, 255, 0.15)",
        }}
      />

      <Box
        component={"div"}
        className="layout"
        position="absolute"
        marginTop={"auto"}
        zIndex={2}
        bottom={"60px"}
      >
        <Typography
          variant="h1"
          color="white"
          marginBottom={"16px"}
          fontWeight={400}
          fontFamily={"var(--font-dm-serif-display)"}
        >
          Speak. Play.{" "}
          <Typography
            component={"span"}
            position={"relative"}
            style={{ font: "inherit" }}
          >
            Grow.{" "}
            <Image
              src={"/lineVector.svg"}
              alt="illustration"
              width={142}
              height={11}
              style={{
                display: "inline-block",
                position: "absolute",
                right: 2,
                bottom: 0,
              }}
            />
          </Typography>
        </Typography>
        <Typography color="white" maxWidth={480}>
          From their first words to full conversations, we guide children on a
          joyful journey into new languages—helping them connect with the world
          early.
        </Typography>
      </Box>
    </Box>
  );
}

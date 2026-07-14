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
        sx={{
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <Box>
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
          <Typography color="white" maxWidth={480}>
            From their first words to full conversations, we guide children on a
            joyful journey into new languages—helping them connect with the
            world early.
          </Typography>
        </Box>
      </Box>

      {/* <VideoPlayer /> */}

      {/* <Box
        position="absolute"
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.35)", inset: 0 }}
      /> */}

      {/* <Box
        position="absolute"
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.35) 0%, transparent 20%)",
          inset: 0,
        }}
      /> */}

      {/* <Box
        position="absolute"
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 50%)",
          inset: 0,
        }}
      /> */}
    </Box>
  );
}

const VideoPlayer = () => {
  return (
    <Stack
      position="absolute"
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        inset: 0,
        backgroundColor: "#1a1a1a",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          // paddingTop: "56.25%",
          overflow: "hidden",
          minHeight: "120vh",
          minWidth: "100vw",
          aspectRatio: 16 / 9,
        }}
      >
        <iframe
          src="https://player.mediadelivery.net/embed/703840/6b7954af-1698-4684-b11a-262e374c7e0e?autoplay=true&loop=true&muted=true&preload=true&responsive=true"
          loading="lazy"
          style={{
            border: 0,
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;"
          allowFullScreen
        />
      </Box>
    </Stack>
  );
};

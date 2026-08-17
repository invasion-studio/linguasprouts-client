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
      {/* Left square vector */}
      <Box
        bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
        position={"absolute"}
        width={"600px"}
        height={"600px"}
        left={-580}
        sx={{ transform: "rotate(45deg)" }}
      />

      <Stack sx={{ gap: { xs: "40px", md: "60px" } }}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            "& #why-vector-1": {
              display: { xs: "none", md: "block" },
            },
          }}
        >
          <Box maxWidth={"600px"}>
            <Typography variant="h2" marginBottom={"4px"}>
              Why adults love it
            </Typography>
            <Typography color="textSecondary">
              Whether you thrive in a live classroom or prefer to learn on your
              own time, choose the format that works for you.
            </Typography>
          </Box>

          <Image
            id="why-vector-1"
            src={"/program/adult-language/Vector-al-1.svg"}
            alt="vector"
            width={109}
            height={88}
            style={{ width: "130px", height: "auto" }}
          />
        </Stack>

        <Box
          display={"grid"}
          sx={{
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr",
            },
            gap: { xs: "20px", md: "24px" },
            zIndex: 1,
          }}
        >
          <Stack
            gap={"16px"}
            bgcolor={"white"}
            borderRadius={"12px"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            padding={"20px"}
            alignItems={"center"}
          >
            <Image
              src={
                "/program/adult-language/emojione-monotone_speaking-head.svg"
              }
              alt="card icon"
              width={48}
              height={48}
            />

            <Typography variant="h4" textAlign={"center"}>
              Practical Communication
            </Typography>
            <Typography textAlign={"center"} color="textSecondary">
              Speak confidently in real-life situations.
            </Typography>
          </Stack>

          <Stack
            gap={"16px"}
            bgcolor={"white"}
            borderRadius={"12px"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            padding={"20px"}
            alignItems={"center"}
          >
            <Image
              src={"program/adult-language/mingcute_earth-fill.svg"}
              alt="card icon"
              width={48}
              height={48}
            />

            <Typography variant="h4" textAlign={"center"}>
              Cultural Connections
            </Typography>
            <Typography textAlign={"center"} color="textSecondary">
              Explore French culture, customs, and perspectives.{" "}
            </Typography>
          </Stack>

          <Stack
            gap={"16px"}
            bgcolor={"white"}
            borderRadius={"12px"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            padding={"20px"}
            alignItems={"center"}
          >
            <Image
              src={
                "/program/adult-language/streamline-flex_decent-work-and-economic-growth-solid.svg"
              }
              alt="card icon"
              width={48}
              height={48}
            />

            <Typography variant="h4" textAlign={"center"}>
              Personal & Professional Growth{" "}
            </Typography>
            <Typography textAlign={"center"} color="textSecondary">
              Open new doors for travel, careers and relationships.{" "}
            </Typography>
          </Stack>

          <Stack
            gap={"16px"}
            bgcolor={"white"}
            borderRadius={"12px"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            padding={"20px"}
            alignItems={"center"}
          >
            <Image
              src={"/program/adult-language/boxicons_community-filled.svg"}
              alt="card icon"
              width={48}
              height={48}
            />

            <Typography variant="h4" textAlign={"center"}>
              Supportive Community
            </Typography>
            <Typography textAlign={"center"} color="textSecondary">
              Learn with like-minded adults in a friendly environment.{" "}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

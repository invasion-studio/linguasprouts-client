"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Schedule() {
  return (
    <Box
      component={"div"}
      className="layout section"
      bgcolor={"#F6FAF5"}
      position={"relative"}
      overflow={"hidden"}
    >
      {/* Circle vector */}
      <Stack
        height={"513px"}
        width={"513px"}
        borderRadius={"2000px"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        right={"-220px"}
        top={"-220px"}
        bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box
          bgcolor={"#F6FAF5"}
          borderRadius={"1000px"}
          height={"222px"}
          width={"222px"}
          sx={{
            height: { xs: "116px", sm: "222px" },
            width: { xs: "116px", sm: "222px" },
          }}
        />
      </Stack>

      <Stack
        justifyContent={"space-between"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "40px", md: "80px" },
        }}
      >
        <Stack
          flex={1}
          gap={"32px"}
          sx={{
            alignItems: { xs: "center", md: "flex-start" },
            maxWidth: { xs: "none", md: "600px" },
          }}
        >
          <Box>
            <Typography
              marginBottom={"4px"}
              variant="h2"
              sx={{ textAlign: { xs: "center", md: "unset" } }}
            >
              A schedule that works for you
            </Typography>
            <Typography
              color="textSecondary"
              sx={{ textAlign: { xs: "center", md: "unset" } }}
            >
              Choose class times that fit your routine, so learning feels easy
              to keep up with.
            </Typography>
          </Box>

          <Stack gap={"12px"}>
            <Stack flexDirection={"row"} gap={"12px"} alignItems={"center"}>
              <Image
                src={"/illustration6.svg"}
                alt="vector"
                width={16}
                height={16}
              />
              <Typography color="textSecondary" variant="subtitle1">
                Monday - Friday: 3:00 PM - 8:00 PM
              </Typography>
            </Stack>

            <Stack flexDirection={"row"} gap={"12px"} alignItems={"center"}>
              <Image
                src={"/illustration6.svg"}
                alt="vector"
                width={16}
                height={16}
              />
              <Typography color="textSecondary" variant="subtitle1">
                Saturday: 9:00 AM – 3:00 PM
              </Typography>
            </Stack>

            <Stack flexDirection={"row"} gap={"12px"} alignItems={"center"}>
              <Image
                src={"/illustration6.svg"}
                alt="vector"
                width={16}
                height={16}
              />
              <Typography color="textSecondary" variant="subtitle1">
                Class length: 1 hour to 1 hour 30 minutes, depending on your
                level and goals
              </Typography>
            </Stack>
          </Stack>

          <Typography
            color="textSecondary"
            sx={{ textAlign: { xs: "center", md: "unset" } }}
          >
            Whether you’re fitting French/Spanish around work, family or other
            commitments, we make it easier to stay consistent and keep
            progressing.
          </Typography>
        </Stack>

        <Stack
          flex={1}
          justifyContent={"center"}
          sx={{
            maxWidth: { xs: "none", md: "600px" },
            alignItems: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            maxWidth={"350px"}
            width={"calc(100% - 24px)"}
            marginTop={"24px"}
            marginRight={"24px"}
            sx={{
              aspectRatio: 1,
              background:
                "linear-gradient(119deg, #E7FEBB 11%, rgba(18, 171, 222, 0.3) 42%, #4DFF4D 73%)",
            }}
            borderRadius={"12px"}
          >
            <Box
              width={"100%"}
              height={"100%"}
              position={"relative"}
              top={"-24px"}
              right={"-24px"}
              borderRadius={"12px"}
              overflow={"clip"}
            >
              <Image
                src={"/home/immigration-pathways1.png"}
                alt="Image of adult in class"
                fill
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

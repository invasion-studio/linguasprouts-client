"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Founding() {
  return (
    <Box
      component={"div"}
      className="layout section"
      position={"relative"}
      overflow={"hidden"}
    >
      {/* Flower Vector */}
      <Image
        src={"/program/french-immigration/frenchimmig-vector1.svg"}
        alt="vector image"
        width={280}
        height={280}
        style={{
          position: "absolute",
          top: "-140px",
          right: "-100px",
          zIndex: -1,
        }}
      />

      {/* Two column flex */}
      <Stack
        alignItems={"center"}
        sx={{
          gap: { xs: "40px", md: "60px" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Column 1 */}
        <Stack width={"100%"} gap={"48px"}>
          <Box>
            <Typography variant="h2" marginBottom={"4px"}>
              Founding cohort offer
            </Typography>
            <Typography color="textSecondary">
              Join our first 20 students to get exclusive founding-cohort
              benefits when you enroll now.
            </Typography>
          </Box>

          <Stack gap={"12px"}>
            {offers.map((offer) => (
              <Stack key={offer} flexDirection={"row"} gap={"12px"}>
                <Image
                  src={"/illustration6.svg"}
                  alt="vector"
                  width={16}
                  height={16}
                />
                <Typography variant="subtitle1" color="textSecondary">
                  {offer}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Typography
            variant="h4"
            color="textSecondary"
            sx={{ fontStyle: "italic" }}
          >
            Limited Seats Only
          </Typography>
        </Stack>

        {/* Column 2 */}
        <Box width={"100%"} sx={{ height: { xs: "364px", md: "464px" } }}>
          <Box
            maxWidth={"464px"}
            borderRadius={"16px"}
            margin={"0px auto"}
            position={"relative"}
            overflow={"clip"}
            height={"inherit"}
          >
            <Image
              src={"/program/french-immigration/frenchimmig-founding.png"}
              alt="image of group learning"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

const offers = [
  "Special launch pricing",
  "Priority class scheduling",
  "Free TEF mock test (value $199)",
  "1-on-1 consultation session",
];

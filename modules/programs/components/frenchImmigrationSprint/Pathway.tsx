"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Pathway() {
  return (
    <Box component={"div"} className="layout section" bgcolor={"#F6FAF5"}>
      <Box
        maxWidth={"600px"}
        margin={"0px auto"}
        sx={{ marginBottom: { xs: "40px", md: "60px" } }}
      >
        <Typography variant="h2" textAlign={"center"}>
          A pathway built specifically for Canadian immigration
        </Typography>
        <Typography color="textSecondary" textAlign={"center"}>
          Whether you thrive in a live classroom or prefer to learn on your own
          time, choose the format that works for you.
        </Typography>
      </Box>

      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        gap={"24px"}
        flexWrap={"wrap"}
      >
        <Card
          imageSrc="/program/french-immigration/frenchimmig-1.png"
          label="Designed for Canadian immigration goals"
        />
        <Card
          imageSrc="/program/french-immigration/frenchimmig-3.png"
          label="Small batch = more personal attention"
        />
        <Card
          imageSrc="/program/french-immigration/frenchimmig-2.png"
          label="Proven pathway to TEF success"
        />
        <Card
          imageSrc="/program/french-immigration/frenchimmig-4.png"
          label="Expert native French instructors"
        />
        <Card
          imageSrc="/program/french-immigration/frenchimmig-5.png"
          label="Canadian immigration focused support"
        />
      </Stack>
    </Box>
  );
}

function Card({ label, imageSrc }: { label: string; imageSrc: string }) {
  return (
    <Box
      border={"1px solid"}
      borderColor={(theme) => theme.palette.ibmgrey[20]}
      borderRadius={"12px"}
      overflow={"hidden"}
      bgcolor={"white"}
      sx={{
        flex: {
          xs: "0 1 100%",
          sm: "0 1 calc((100% - 24px) / 2)",
          md: "0 1 calc((100% - 48px) / 3)",
        },
      }}
    >
      <Box height={"238px"} position={"relative"}>
        <Image
          src={imageSrc}
          alt="Card image"
          fill
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </Box>

      <Box padding={"16px 20px"}>
        <Typography variant="h4" textAlign={"center"}>
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

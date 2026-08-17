"use client";

import { Box, Stack, Typography } from "@mui/material";

export default function LearningType() {
  return (
    <Box
      component={"div"}
      className="layout"
      sx={{
        paddingTop: { xs: "60px", md: "80px" },
        paddingBottom: { xs: "60px", md: "80px" },
      }}
    >
      <Typography
        variant="h2"
        textAlign={"center"}
        sx={{ marginBottom: { xs: "8px", md: "4px" } }}
      >
        Learn the way that{" "}
        <Typography component={"span"} color="primary" sx={{ font: "inherit" }}>
          fits your life
        </Typography>
      </Typography>

      <Typography
        color="textSecondary"
        textAlign={"center"}
        maxWidth={"600px"}
        margin={"0px auto"}
        sx={{ marginBottom: { xs: "40px", md: "60px" } }}
      >
        Whether you thrive in a live classroom or prefer to learn on your own
        time, choose the format that works for you.
      </Typography>

      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: "24px",
        }}
      >
        <Box
          flex={1}
          padding={"20px"}
          borderRadius={"12px"}
          bgcolor={"#F6FAF5"}
          border={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
        >
          <Typography variant="h4" marginBottom={"16px"}>
            Virtual live classes
          </Typography>
          <Typography color="textSecondary">
            Join interactive classes from the comfort of your home, led by a
            native French instructor in real time.
          </Typography>
        </Box>

        <Box
          flex={1}
          padding={"20px"}
          borderRadius={"12px"}
          bgcolor={"#F6FAF5"}
          border={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
        >
          <Typography variant="h4" marginBottom={"16px"}>
            Asynchronous learning
          </Typography>
          <Typography color="textSecondary">
            Learn on your own time with recorded lessons and guided activities
            that fit around your schedule.
          </Typography>
        </Box>

        <Box
          flex={1}
          padding={"20px"}
          borderRadius={"12px"}
          bgcolor={"#F6FAF5"}
          border={"1px solid"}
          borderColor={(theme) => theme.palette.divider}
        >
          <Typography variant="h4" marginBottom={"16px"}>
            In-person classes
          </Typography>
          <Typography color="textSecondary">
            Learn in a supportive, small-group environment at our Surrey
            academy.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

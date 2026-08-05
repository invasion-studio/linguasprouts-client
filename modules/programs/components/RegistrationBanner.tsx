"use client";

import { Box, Stack, Typography } from "@mui/material";

export default function RegistrationBanner({
  title,
  textColor,
  mainColor,
  secondaryColor,
}: {
  title: string;
  textColor: string;
  mainColor: string;
  secondaryColor: string;
}) {
  const bannerHeight = "220px";
  return (
    <Box
      sx={{ display: { xs: "none", md: "block" } }}
      height={bannerHeight}
      bgcolor={(theme) => theme.palette.ibmgrey[20]}
    >
      <Stack height={"inherit"} flexDirection={"row"}>
        <Stack
          height={"100%"}
          className="layout2"
          width={"fit-content"}
          minWidth={"55vw"}
          maxWidth={"90vw"}
          bgcolor={mainColor}
          justifyContent={"center"}
        >
          <Typography variant="h3" fontWeight={700} color={textColor}>
            {title}
          </Typography>
        </Stack>

        <Box
          width={0}
          height={0}
          borderRight={`150px solid transparent`}
          borderTop={`${bannerHeight} solid ${mainColor}`}
          position={"relative"}
          zIndex={2}
        ></Box>
        <Box
          marginLeft={"-150px"}
          width={"150px"}
          height={"inherit"}
          bgcolor={secondaryColor}
        />
        <Box
          width={0}
          height={0}
          borderRight={`150px solid transparent`}
          borderTop={`${bannerHeight} solid ${secondaryColor}`}
        ></Box>
      </Stack>
    </Box>
  );
}

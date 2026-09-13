"use client";

import { Stack, Typography } from "@mui/material";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export default function Greeting() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const Icon = hour < 12 ? WbTwilightIcon : hour < 18 ? SunnyIcon : BedtimeIcon;

  return (
    <Stack flexDirection={"row"} gap={"8px"} alignItems={"center"}>
      <Typography variant="subtitle2" color={"var(--palette-ibmgrey-60)"}>
        {greeting},
      </Typography>
      <Icon
        htmlColor={hour < 12 ? "#FF8D28" : hour < 18 ? "#FFCC00" : "#CB30E0"}
        fontSize="small"
      />
    </Stack>
  );
}

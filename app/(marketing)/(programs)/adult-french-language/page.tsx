"use client";

import "./../program.css";
import AppBar from "@/components/AppBar/AppBar";
import Hero from "@/modules/programs/components/adult-language/Hero";
import { Box } from "@mui/material";

export default function AdultFrenchLanguage() {
  return (
    <Box>
      <AppBar border />
      <Hero />
    </Box>
  );
}

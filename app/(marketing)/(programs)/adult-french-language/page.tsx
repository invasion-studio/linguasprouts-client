"use client";

import Enroll from "@/modules/programs/components/adult-language/Enroll";
import "./../program.css";
import AppBar from "@/components/AppBar/AppBar";
import Hero from "@/modules/programs/components/adult-language/Hero";
import LearningType from "@/modules/programs/components/adult-language/LearningType";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";

export default function AdultFrenchLanguage() {
  return (
    <Box>
      <AppBar border />
      <Hero />
      <LearningType />
      <Enroll />
      <Footer />
    </Box>
  );
}

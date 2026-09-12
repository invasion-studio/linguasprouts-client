"use client";

import Enroll from "@/src/_pages/marketing/adult-language/ui/Enroll";
import "./../program.css";
import AppBar from "@/src/_app/layout/AppBar/AppBar";
import Hero from "@/src/_pages/marketing/adult-language/ui/Hero";
import LearningType from "@/src/_pages/marketing/adult-language/ui/LearningType";
import { Box } from "@mui/material";
import Footer from "@/src/shared/ui/Footer";
import CEFR from "@/src/_pages/marketing/adult-language/ui/CEFR";
import Included from "@/src/_pages/marketing/adult-language/ui/Included";
import Schedule from "@/src/_pages/marketing/adult-language/ui/Schedule";
import Why from "@/src/_pages/marketing/adult-language/ui/Why";

export default function AdultFrenchLanguage() {
  return (
    <Box>
      <AppBar border />
      <Hero />
      <LearningType />
      <Schedule />
      <Why />
      <CEFR />
      <Included />
      <Enroll />
      <Footer />
    </Box>
  );
}

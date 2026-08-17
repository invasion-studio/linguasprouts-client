"use client";

import Enroll from "@/modules/programs/components/adult-language/Enroll";
import "./../program.css";
import AppBar from "@/components/AppBar/AppBar";
import Hero from "@/modules/programs/components/adult-language/Hero";
import LearningType from "@/modules/programs/components/adult-language/LearningType";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import CEFR from "@/modules/programs/components/adult-language/CEFR";
import Included from "@/modules/programs/components/adult-language/Included";
import Schedule from "@/modules/programs/components/adult-language/Schedule";
import Why from "@/modules/programs/components/adult-language/Why";

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

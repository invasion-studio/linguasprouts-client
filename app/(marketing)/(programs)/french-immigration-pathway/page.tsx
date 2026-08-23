"use client";

import "./../program.css";
import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Footer";
import Enroll from "@/modules/programs/components/Enroll";
import Founding from "@/modules/programs/components/frenchImmigrationSprint/Founding";
import Hero from "@/modules/programs/components/frenchImmigrationSprint/Hero";
import Included from "@/modules/programs/components/frenchImmigrationSprint/Included";
import Pathway from "@/modules/programs/components/frenchImmigrationSprint/Pathway";
import TEFCanada from "@/modules/programs/components/frenchImmigrationSprint/TEFCanada";
import { Box } from "@mui/material";

export default function FrenchImmigPage() {
  return (
    <>
      <AppBar border />
      <Hero />
      <TEFCanada />
      <Pathway />
      <Founding />
      <Included />
      <Enroll link="/french-immigration-pathway/register" />
      <Footer />
    </>
  );
}

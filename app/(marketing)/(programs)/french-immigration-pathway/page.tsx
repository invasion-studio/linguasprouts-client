"use client";

import "./../program.css";
import AppBar from "@/src/_app/layout/AppBar/AppBar";
import Footer from "@/src/shared/ui/Footer";
import Enroll from "@/src/shared/ui/Enroll";
import Founding from "@/src/_pages/marketing/frenchImmigrationSprint/ui/Founding";
import Hero from "@/src/_pages/marketing/frenchImmigrationSprint/ui/Hero";
import Included from "@/src/_pages/marketing/frenchImmigrationSprint/ui/Included";
import Pathway from "@/src/_pages/marketing/frenchImmigrationSprint/ui/Pathway";
import TEFCanada from "@/src/_pages/marketing/frenchImmigrationSprint/ui/TEFCanada";
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

"use client";

import Footer from "@/src/shared/ui/Footer";
import "./../program.css";
import AppBar from "@/src/shared/ui/AppBar/AppBar";
import Hero from "@/src/_pages/afterschool/ui/Hero";
import Included from "@/src/_pages/afterschool/ui/Included";
import Enroll from "@/src/shared/ui/Enroll";
import Language from "@/src/_pages/afterschool/ui/Language";
import Why from "@/src/_pages/afterschool/ui/Why";

export default function AfterSchoolPage() {
  return (
    <>
      <AppBar border />
      <Hero />
      <Language />
      <Why />
      <Included />
      <Enroll link="/afterschool/register" />
      <Footer />
    </>
  );
}

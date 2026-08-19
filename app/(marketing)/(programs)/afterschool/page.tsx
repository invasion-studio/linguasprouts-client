"use client";

import Footer from "@/components/Footer";
import "./../program.css";
import AppBar from "@/components/AppBar/AppBar";
import Hero from "@/modules/programs/components/afterschool/Hero";
import Included from "@/modules/programs/components/afterschool/Included";
import Enroll from "@/modules/programs/components/Enroll";
import Language from "@/modules/programs/components/afterschool/Language";
import Why from "@/modules/programs/components/afterschool/Why";

export default function AfterSchoolPage() {
  return (
    <>
      <AppBar border />
      <Hero />
      <Language />
      <Why />
      <Included />
      <Enroll link="/adult-french-language/register" />
      <Footer />
    </>
  );
}

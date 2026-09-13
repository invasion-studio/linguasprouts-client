"use client";

import Footer from "@/src/shared/ui/Footer";
import "./../program.css";
import AppBar from "@/src/_app/layout/AppBar/AppBar";
import Hero from "@/src/_pages/marketing/afterschool/ui/Hero";
import Included from "@/src/_pages/marketing/afterschool/ui/Included";
import Enroll from "@/src/shared/ui/Enroll";
import Language from "@/src/_pages/marketing/afterschool/ui/Language";
import Why from "@/src/_pages/marketing/afterschool/ui/Why";

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

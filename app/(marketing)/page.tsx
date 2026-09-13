"use client";

import Footer from "@/src/shared/ui/Footer";
import JoinToday from "@/src/shared/ui/JoinToday";
import Hero from "@/src/_pages/marketing/home/ui/Hero";
import Hero2 from "@/src/_pages/marketing/home/ui/Hero2";
import Hero3 from "@/src/_pages/marketing/home/ui/Hero3";
import OurPrograms from "@/src/_pages/marketing/home/ui/OurPrograms";
import SummerCamp2026 from "@/src/_pages/marketing/home/ui/SummerCamp2026";
import Testimonial from "@/src/_pages/marketing/home/ui/Testimonial";
import Value from "@/src/_pages/marketing/home/ui/Value";
import VisitUs from "@/src/_pages/marketing/home/ui/VisitUs";
import WhatWeTeach from "@/src/_pages/marketing/home/ui/WhatWeTeach";
import FrenchImmigration from "@/src/_pages/marketing/frenchImmigrationSprint/ui/FrenchImmigration";

export default function Home() {
  return (
    <>
      <Hero3 />
      <Value />
      <OurPrograms />
      <VisitUs />
      <Testimonial />
      <JoinToday />
      <Footer />
    </>
  );
}

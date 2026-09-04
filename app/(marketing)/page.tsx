"use client";

import JoinToday from "@/components/JoinToday/JoinToday";
import Footer from "@/modules/home/Footer";
import Hero from "@/modules/home/Hero";
import Hero2 from "@/modules/home/Hero2";
import Hero3 from "@/modules/home/Hero3";
import OurPrograms from "@/modules/home/OurPrograms";
import SummerCamp2026 from "@/modules/home/SummerCamp2026";
import Testimonial from "@/modules/home/Testimonial";
import Value from "@/modules/home/Value";
import VisitUs from "@/modules/home/VisitUs";
import WhatWeTeach from "@/modules/home/WhatWeTeach";
import FrenchImmigration from "@/modules/programs/components/frenchImmigrationSprint/FrenchImmigration";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero3 />
      <Value />
      {/* <WhatWeTeach /> */}
      <OurPrograms />
      {/* <SummerCamp2026 /> */}
      {/* <FrenchImmigration /> */}
      <VisitUs />
      <Testimonial />
      <JoinToday />
      <Footer />
    </>
  );
}

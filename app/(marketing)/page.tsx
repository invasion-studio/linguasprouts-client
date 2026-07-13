"use client";

import JoinToday from "@/components/JoinToday/JoinToday";
import Footer from "@/module/home/Footer";
import Hero from "@/module/home/Hero";
import Hero2 from "@/module/home/Hero2";
import SummerCamp2026 from "@/module/home/SummerCamp2026";
import Testimonial from "@/module/home/Testimonial";
import WhatWeTeach from "@/module/home/WhatWeTeach";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero2 />
      <WhatWeTeach />
      <SummerCamp2026 />
      <Testimonial />
      <JoinToday />
      <Footer />
    </>
  );
}

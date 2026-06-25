"use client";

import Footer from "@/module/home/Footer";
import Hero from "@/module/home/Hero";
import SummerCamp2026 from "@/module/home/SummerCamp2026";
import Testimonial from "@/module/home/Testimonial";
import WhatWeTeach from "@/module/home/WhatWeTeach";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeTeach />
      <SummerCamp2026 />
      <Testimonial />
      <Footer />
    </>
  );
}

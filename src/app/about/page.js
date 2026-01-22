"use client";

import dynamic from "next/dynamic";
import AboutImg from "@/components/About/aboutImg/aboutImg";
import AboutSection from "@/components/About/aboutSection/aboutSection";
import HeadSection from "@/components/About/headSection/headSection";
import ValueCard from "@/components/About/valueCard/valueCard";
import Team from "@/components/home/team/team";
import Testimonial from "@/components/home/testimonial/testimonial";

const Map = dynamic(() => import("@/components/About/map/map"), {
  ssr: false,
});

export default function AboutPage() {
  return (
    <>
      <HeadSection />
      <AboutSection />
      <AboutImg />
      <ValueCard />
      <Team />
      <Testimonial />
      <Map />
    </>
  );
}



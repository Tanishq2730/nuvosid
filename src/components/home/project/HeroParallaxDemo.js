"use client";
import React from "react";
import { HeroParallax } from "../../../components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return (
    <>
      <div className="mainSections">
        <div className="container-fluid">
          <HeroParallax products={products} />
        </div>
      </div>
    </>
  );
}
export const products = [
  {
    title: "Moonbeam",
    // link: "https://gomoonbeam.com",
    thumbnail:
      "/assets/work/work1.png",
  },
  {
    title: "Cursor",
    // link: "https://cursor.so",
    thumbnail:
      "/assets/work/work2.png",
  },
  {
    title: "Rogue",
    // link: "https://userogue.com",
    thumbnail:
      "/assets/work/work3.png",
  },

  {
    title: "Editorially",
    // link: "https://editorially.org",
    thumbnail:
      "/assets/work/work4.png",
  },
  {
    title: "Editrix AI",
    // link: "https://editrix.ai",
    thumbnail:
      "/assets/work/work5.png",
  },
  {
    title: "Pixel Perfect",
    // link: "https://app.pixelperfect.quest",
    thumbnail:
      "/assets/work/work6.png",
  },

  {
    title: "Algochurn",
    // link: "https://algochurn.com",
    thumbnail:
      "/assets/work/work7.png",
  },
  {
    title: "Aceternity UI",
    // link: "https://ui.aceternity.com",
    thumbnail:
      "/assets/work/work8.png",
  },
  {
    title: "Tailwind Master Kit",
    // link: "https://tailwindmasterkit.com",
    thumbnail:
      "/assets/work/work9.png",
  },
  {
    title: "SmartBridge",
    // link: "https://smartbridgetech.com",
    thumbnail:
      "/assets/work/work10.png",
  },
  {
    title: "Renderwork Studio",
    // link: "https://renderwork.studio",
    thumbnail:
      "/assets/work/work11.png",
  },

  {
    title: "Creme Digital",
    // link: "https://cremedigital.com",
    thumbnail:
      "/assets/work/work12.png",
  },
  {
    title: "Golden Bells Academy",
    // link: "https://goldenbellsacademy.com",
    thumbnail:
      "/assets/work/work13.png",
  },
  {
    title: "Invoker Labs",
    // link: "https://invoker.lol",
    thumbnail:
      "/assets/work/work14.png",
  },
  {
    title: "E Free Invoice",
    // link: "https://efreeinvoice.com",
    thumbnail:
      "/assets/work/work15.png",
  },
];

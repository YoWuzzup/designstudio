"use client";
import {
  Intro,
  WhoWeAre,
  WhatWeDo,
  FeaturedWorks,
  Numbers,
  Footer,
} from "@/components";
import { MenuContext } from "@/context/context";
import { useContext } from "react";

export default function Home() {
  const a = useContext(MenuContext);
  console.log(a);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
      <WhoWeAre />
      <WhatWeDo />
      <FeaturedWorks />
      <Numbers />
      <Footer />
    </main>
  );
}

import {
  Intro,
  WhoWeAre,
  WhatWeDo,
  FeaturedWorks,
  Numbers,
  Footer,
  SideMenu,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SideMenu />
      <Intro />
      <WhoWeAre />
      <WhatWeDo />
      <FeaturedWorks />
      <Numbers />
      <Footer />
    </main>
  );
}

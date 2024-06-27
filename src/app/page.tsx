import {
  Intro,
  WhoWeAre,
  WhatWeDo,
  FeaturedWorks,
  Numbers,
  Footer,
} from "@/components";

export default function Home() {
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

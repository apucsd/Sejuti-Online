import AboutMe from "@/components/ui/AboutMe";
import ContactUs from "@/components/ui/ContactUs";
import Faq from "@/components/ui/FAQ";
import NewsLetter from "@/components/ui/NewsLetter";
import { Slider } from "@/components/ui/Slider";
import WhatWeDo from "@/components/ui/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Slider />
      <WhatWeDo />
      <AboutMe />
      <Faq />
      <ContactUs />
      <NewsLetter />
    </main>
  );
}

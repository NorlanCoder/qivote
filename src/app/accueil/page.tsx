import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import Figure from "@/components/Figure";
import Advantage from "@/components/Advantage";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Functionality from "@/components/Functionality";

export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />
      <Functionality />
      <HowItWorks />
      <Advantage />
      <Figure />
      <Cta />
    </div>
  );
}
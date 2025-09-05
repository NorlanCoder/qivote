import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Functionality from "@/components/Functionality";
import Events from "@/components/Events";
import Cta from "@/components/Cta"
import Advantage from "@/components/Advantage";
import HowItWorks from "@/components/HowItWorks";
import Figure from "@/components/Figure";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Partners />
      <Functionality />
      <Events />
      <HowItWorks />
      <Advantage />
      <Figure />
      <Cta />
    </div>
  );
}

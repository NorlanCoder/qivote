import Hero from "@/components/Hero";
import Footer from "@/components/Hero";
import Cta from "@/components/Cta";
import Figure from "@/components/Figure";
import Advantage from "@/components/Advantage";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <HowItWorks />
      <Advantage />
      <Figure />
      <Cta />
    </div>
  );
}
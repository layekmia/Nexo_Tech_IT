import { Products } from "@/components/Products";
import CtaBanner from "@/components/home/CtaBanner";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import TestiMonials from "@/components/home/TestiMonials";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Products />
      <Team />
      <TestiMonials />
      <CtaBanner />
    </>
  );
}

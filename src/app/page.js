import { Contact } from "@/components/Contact";
import HeroSection from "@/components/heroSection";
import { NavBar } from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}

import {
  Contact,
  Footer,
  HeroSection,
  NavBar,
  Projects,
  Resume,
  Services,
  Skills,
} from "@/components";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

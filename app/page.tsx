import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIVisibilityContrast from "@/components/AIVisibilityContrast";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AIVisibilityContrast />
        <Team />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

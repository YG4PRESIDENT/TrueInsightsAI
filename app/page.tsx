import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIVisibilityContrast from "@/components/AIVisibilityContrast";
import Team from "@/components/Team";
import ComparisonTable from "@/components/ComparisonTable";
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
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

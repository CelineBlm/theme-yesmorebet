import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ConceptSection } from "../components/ConceptSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";

interface HomeProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Home({ onNavigate, currentPage }: HomeProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header onNavigate={onNavigate} currentPage={currentPage} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ConceptSection />
      </main>
      <FAQSection />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

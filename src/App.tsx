import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Prestations } from "./pages/Prestations";
import { Galerie } from "./pages/Galerie";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { MentionsLegales } from "./pages/MentionsLegales";
import { PolitiqueConfidentialite } from "./pages/PolitiqueConfidentialite";
import { CGV } from "./pages/CGV";

type Page = "home" | "prestations" | "galerie" | "contact" | "faq" | "mentions-legales" | "politique-confidentialite" | "cgv";

const PAGE_ROUTES: Record<Page, string> = {
  home: "/",
  prestations: "/prestations",
  galerie: "/galerie",
  contact: "/contact",
  faq: "/faq",
  "mentions-legales": "/mentions-legales",
  "politique-confidentialite": "/politique-confidentialite",
  cgv: "/cgv",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = Object.entries(PAGE_ROUTES).find(([_, route]) => route === path)?.[0] as Page || "home";
      setCurrentPage(page);
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState();

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    const targetPage = page as Page;
    setCurrentPage(targetPage);
    window.history.pushState({}, "", PAGE_ROUTES[targetPage] || "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages: Record<Page, JSX.Element> = {
    home: <Home onNavigate={handleNavigate} currentPage={currentPage} />,
    prestations: <Prestations onNavigate={handleNavigate} currentPage={currentPage} />,
    galerie: <Galerie onNavigate={handleNavigate} currentPage={currentPage} />,
    contact: <Contact onNavigate={handleNavigate} currentPage={currentPage} />,
    faq: <FAQ onNavigate={handleNavigate} currentPage={currentPage} />,
    "mentions-legales": <MentionsLegales onNavigate={handleNavigate} currentPage={currentPage} />,
    "politique-confidentialite": <PolitiqueConfidentialite onNavigate={handleNavigate} currentPage={currentPage} />,
    cgv: <CGV onNavigate={handleNavigate} currentPage={currentPage} />,
  };

  return pages[currentPage];
}

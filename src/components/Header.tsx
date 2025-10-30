import { Menu, X } from "lucide-react";
import { useState } from "react";
import svgPaths from "../imports/svg-t57x3zvoi5";

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

interface NavLinkProps {
  href: string;
  page: string;
  activeLink: string;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, page: string) => void;
  children: React.ReactNode;
}

function NavLink({ href, page, activeLink, onNavClick, children }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeLink === page;
  const showGradient = isActive || isHovered;
  
  const baseClasses = "relative font-['Quicksand'] text-[16px] tracking-[-0.3125px] transition-colors";
  const fontWeight = showGradient ? "font-semibold" : "";
  const colorClasses = showGradient 
    ? "bg-clip-text bg-gradient-to-r from-[#fdc700] to-[#d08700]"
    : "text-white";

  return (
    <a
      href={href}
      className={`${baseClasses} ${fontWeight} ${colorClasses}`}
      style={showGradient ? { WebkitTextFillColor: "transparent" } : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => onNavClick(e, page)}
    >
      {children}
    </a>
  );
}

function Logo() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 114">
      <g>
        <path d={svgPaths.p138ea900} fill="#FDC700" />
        <path d={svgPaths.p3e9ee100} fill="#FDC700" />
        <path d={svgPaths.p34c06680} fill="#FDC700" />
        <path d={svgPaths.p2a0ed380} fill="#FDC700" />
        <path d={svgPaths.p16df9200} fill="#FDC700" />
        <path d={svgPaths.p36186980} fill="#FDC700" />
        <path d={svgPaths.p3b547700} fill="#FDC700" />
        <path d={svgPaths.p21fe8080} fill="#FDC700" />
        <path d={svgPaths.p4f70c00} fill="#FDC700" />
        <path d={svgPaths.p1cfc9f80} fill="#FDC700" />
        <path d={svgPaths.p1c4b7a71} fill="#FDC700" />
        <path d={svgPaths.p28a79800} fill="#FDC700" />
        <path d={svgPaths.p758eb00} fill="#FDC700" />
        <path d={svgPaths.p30fd97c0} fill="#FDC700" />
      </g>
    </svg>
  );
}

export function Header({ onNavigate, currentPage = "home" }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[rgba(0,0,0,0.08)] backdrop-blur-sm z-50 border-b-2 border-[rgba(250,204,21,0.1)]">
      <nav className="container mx-auto px-4 lg:px-[68px]">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:items-center lg:justify-between py-[19px]">
          {/* Left - Navigation Links */}
          <div className="flex items-center gap-8">
            <NavLink href="/#concept" page="home" activeLink={currentPage} onNavClick={handleNavClick}>
              Le concept
            </NavLink>
            <NavLink href="/faq" page="faq" activeLink={currentPage} onNavClick={handleNavClick}>
              FAQ
            </NavLink>
            <NavLink href="/galerie" page="galerie" activeLink={currentPage} onNavClick={handleNavClick}>
              Galerie
            </NavLink>
            <NavLink href="/contact" page="contact" activeLink={currentPage} onNavClick={handleNavClick}>
              Contact
            </NavLink>
          </div>

          {/* Center - Logo */}
          <div className="h-[36px] w-[114px] relative overflow-hidden">
            <div className="absolute h-[114px] left-[-30.3px] top-[-39px] w-[174px]">
              <Logo />
            </div>
          </div>

          {/* Right - Phone & CTA */}
          <div className="flex items-center gap-8">
            <a 
              href="tel:+33626512217" 
              className="flex items-center gap-2 text-white hover:text-[#fdc700] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p26187580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
              <span className="font-['Inter'] text-[14px] tracking-[-0.1504px]">+33 6 26 51 22 17</span>
            </a>
            <a 
              href="/prestations" 
              className="bg-gradient-to-r from-[#facc15] to-[#ca8a04] rounded-[8px] px-6 py-[10px] shadow-[0px_10px_15px_-3px_rgba(250,204,21,0.3)] hover:shadow-[0px_10px_20px_-3px_rgba(250,204,21,0.5)] hover:scale-105 transition-all"
              onClick={(e) => handleNavClick(e, 'prestations')}
            >
              <span className="font-['Quicksand'] font-medium text-[16px] text-black tracking-[-0.3125px]">Voir les formules</span>
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex items-center justify-between lg:hidden py-4">
          {/* Logo Mobile */}
          <div className="h-[30px] w-[95px] relative overflow-hidden">
            <div className="absolute h-[95px] left-[-25px] top-[-32px] w-[145px]">
              <Logo />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#fdc700] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 flex flex-col gap-4 border-t border-[rgba(250,204,21,0.1)] pt-4">
            <a 
              href="/" 
              className={`font-['Quicksand'] font-semibold transition-colors ${
                currentPage === 'home' ? 'text-[#fdc700]' : 'text-white hover:text-[#fdc700]'
              }`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Accueil
            </a>
            <a 
              href="/#concept" 
              className={`font-['Quicksand'] font-semibold transition-colors ${
                currentPage === 'home' ? 'text-[#fdc700]' : 'text-white hover:text-[#fdc700]'
              }`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Le Concept
            </a>
            <a 
              href="/faq" 
              className={`font-['Quicksand'] font-semibold transition-colors ${
                currentPage === 'faq' ? 'text-[#fdc700]' : 'text-white hover:text-[#fdc700]'
              }`}
              onClick={(e) => handleNavClick(e, 'faq')}
            >
              FAQ
            </a>
            <a 
              href="/galerie" 
              className={`font-['Quicksand'] font-semibold transition-colors ${
                currentPage === 'galerie' ? 'text-[#fdc700]' : 'text-white hover:text-[#fdc700]'
              }`}
              onClick={(e) => handleNavClick(e, 'galerie')}
            >
              Galerie
            </a>
            <a 
              href="/contact" 
              className={`font-['Quicksand'] font-semibold transition-colors ${
                currentPage === 'contact' ? 'text-[#fdc700]' : 'text-white hover:text-[#fdc700]'
              }`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <a 
              href="tel:+33626512217" 
              className="flex items-center gap-2 text-white hover:text-[#fdc700] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p26187580} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
              <span>+33 6 26 51 22 17</span>
            </a>
            <a 
              href="/prestations" 
              className="bg-gradient-to-r from-[#facc15] to-[#ca8a04] rounded-[8px] px-6 py-3 text-black text-center font-['Quicksand'] font-medium hover:shadow-lg hover:scale-105 transition-all"
              onClick={(e) => handleNavClick(e, 'prestations')}
            >
              Voir les formules
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

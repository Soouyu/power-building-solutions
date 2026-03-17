import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-builder.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 40) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#trusted", label: "Trusted By" },
  ];

  return (
    <header className={`pws-header ${scrolled ? "is-scrolled" : ""}`}>

      <div className="pws-headerInner">
        {/* Logo */}
        <a href="#" className="pws-logo">
          <img src={logo} alt="Power Building Solutions logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="pws-navDesktop">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="pws-navLink">
              {link.label}
            </a>
          ))}
          <Button variant="cta" asChild>
            <a href="#quote">Get a Quote</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="pws-menuBtn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="pws-navMobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" asChild>
            <a href="#quote" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;

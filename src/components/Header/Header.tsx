import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#career" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  // Scroll listener for sticky style changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFFFF] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1440px] px-6 md:px-10 lg:px-[120px] flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            onClick={() => handleScrollTo("#hero")}
            className="cursor-pointer font-bold text-[20px] text-[#222222] tracking-tight hover:opacity-85 transition-opacity"
          >
            arpan.dev
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <a
                    onClick={() => handleScrollTo(item.href)}
                    className="cursor-pointer text-[15px] font-medium text-[#7B7B7B] group-hover:text-[#222222] transition-colors"
                  >
                    {item.name}
                  </a>
                  {/* Subtle Underline Micro-animation */}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#222222] transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:block">
            <a
              onClick={() => handleScrollTo("#contact")}
              className="cursor-pointer relative group text-[15px] font-semibold text-[#222222] py-2"
            >
              Let's Talk
              {/* Underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#222222] transition-transform duration-300 origin-left scale-x-100 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#222222] transition-transform duration-300 origin-right scale-x-0 group-hover:scale-x-100" />
            </a>
          </div>

          {/* Mobile Menu Button - Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#222222]"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-[#FFFFFF] flex flex-col p-8 lg:hidden"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className="cursor-pointer text-[24px] font-bold text-[#222222] hover:text-[#7B7B7B] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-[#EEEEEE]">
                <a
                  onClick={() => handleScrollTo("#contact")}
                  className="cursor-pointer inline-block text-[20px] font-semibold text-[#222222] hover:opacity-80"
                >
                  Let's Talk &rarr;
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

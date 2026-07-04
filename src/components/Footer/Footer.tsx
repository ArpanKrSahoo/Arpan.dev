import { motion } from "framer-motion";

export const Footer = () => {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#career" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <footer className="w-full bg-[#222222] rounded-[24px] text-white py-12 px-8 md:px-16 mt-16 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side: Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-[15px] text-[#7B7B7B]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side: Contact Email */}
        <motion.div
          className="text-center md:text-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="mailto:arpansahoo413@gmail.com"
            className="text-[20px] md:text-[24px] font-bold text-white tracking-tight hover:text-[#7B7B7B] transition-colors"
          >
          arpansahoo413@gmail.com
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

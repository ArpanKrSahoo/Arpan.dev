import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="w-full text-center py-8">
      <motion.div
        className="max-w-3xl mx-auto space-y-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[14px] font-semibold text-secondary uppercase tracking-widest">
          — Contact
        </span>
        <h2 className="text-[36px] md:text-[52px] font-bold text-primary tracking-tight leading-tight">
          Got a Vision? Let's Bring It to Life!
        </h2>
        <p className="text-[18px] text-secondary max-w-xl leading-relaxed">
          I'm always open to discussing new machine learning research, software engineering contracts, design systems, and startup collaborations.
        </p>
        
        {/* Contact CTA Button */}
        <motion.a
          href="mailto:arpansahoo413@gmail.com"
          className="inline-flex items-center justify-center gap-2 bg-[#222222] text-[#FFFFFF] text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-opacity-90 hover:scale-105 transition-all shadow-md mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Let's Talk</span>
          <ArrowUpRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
};

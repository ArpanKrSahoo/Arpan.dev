import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (Stats & Hello Heading) - Take 7 cols */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          {/* Stats on top left */}
          <div className="flex space-x-12">
            <div>
              <span className="block text-[32px] md:text-[40px] font-bold text-primary tracking-tight">
                *25+
              </span>
              <span className="block text-[13px] text-secondary uppercase tracking-widest mt-1">
                Models Trained
              </span>
            </div>
            <div>
              <span className="block text-[32px] md:text-[40px] font-bold text-primary tracking-tight">
                *10+
              </span>
              <span className="block text-[13px] text-secondary uppercase tracking-widest mt-1">
                Production Apps
              </span>
            </div>
          </div>

          {/* Massive Hello Word */}
          <div className="space-y-4">
            <h1 className="text-[72px] md:text-[96px] font-bold text-primary tracking-tighter leading-[0.9] select-none">
              Hello
            </h1>
            <p className="text-[20px] md:text-[24px] font-medium text-secondary tracking-tight pl-2">
              ... I'm Arpan, a Developer & AI Engineer.
            </p>
          </div>

          {/* Scroll Down Hint */}
          <div className="pt-8 pl-2">
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary text-[15px] font-semibold tracking-wide uppercase transition-colors"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <span>Scroll Down</span>
              <span className="text-[18px]">&darr;</span>
            </motion.a>
          </div>
        </div>

        {/* Right Column (Large Monochrome Portrait Cutout) - Take 5 cols */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end items-end overflow-visible">
          <motion.img
            src="/arpan1.png"
            alt="Arpan Kumar Sahoo"
            className="w-full max-w-[480px] lg:max-w-[540px] object-contain object-bottom -mb-12 grayscale contrast-110 brightness-95 select-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </motion.section>
  );
};



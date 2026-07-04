import { motion } from "framer-motion";

const CurvedArrow = () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#7B7B7B] opacity-30 mt-10 hidden lg:block"
  >
    <path
      d="M10 10C50 10 90 50 90 90M90 90H60M90 90V60"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="w-full py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Takes 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-[36px] md:text-[52px] font-bold text-primary tracking-tight">
            About Me
          </h2>
          <p className="text-[18px] text-secondary leading-relaxed max-w-md">
            I am a Software Engineer specializing in full-stack development, machine learning, and modern web architectures. Passionate about building scalable applications and intelligent systems, I combine clean code practices with robust AI integrations.
          </p>
          <CurvedArrow />
        </div>

        {/* Right Column - Takes 7 cols */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stat Card */}
          <div className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[24px] p-8 flex flex-col justify-between shadow-xs min-h-[180px]">
            <span className="text-[44px] font-bold text-primary tracking-tight">
              120%
            </span>
            <p className="text-[14px] text-secondary leading-relaxed mt-2">
              Average increase in ML model throughput and backend system efficiency for launched projects.
            </p>
          </div>

          {/* Square Greyscale Photo Card */}
          <div className="aspect-square rounded-[24px] overflow-hidden bg-white shadow-xs border border-[#EEEEEE]">
            <img
              src="/ChatGPT Image Jul 3, 2026, 08_57_25 PM.png"
              alt="Arpan Profile"
              className="w-full h-full object-cover grayscale contrast-110 brightness-95"
            />
          </div>

          {/* Text Blocks - full width below */}
          <div className="md:col-span-2 space-y-6 pt-4">
            <div className="flex gap-4 items-start">
              <span className="text-primary font-bold text-[18px] mt-0.5">•</span>
              <p className="text-[16px] md:text-[18px] text-secondary leading-relaxed">
                With a solid foundation in computer science and +3 years of hands-on build experience, I specialize in creating robust web apps, microservices, and deploying deep learning models that solve complex real-world problems.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-primary font-bold text-[18px] mt-0.5">•</span>
              <p className="text-[16px] md:text-[18px] text-secondary leading-relaxed">
                I focus on writing clean, maintainable code and building high-performance architectures, ensuring that machine learning systems align seamlessly with responsive, modern user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

import { motion } from "framer-motion";

export default function ProfessionalProfile() {
  const technicalSkills = [
    { name: "React.js / Next.js", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "TypeScript & JavaScript", level: 92 },
    { name: "Python & PyTorch", level: 89 },
    { name: "PostgreSQL & MongoDB", level: 85 },
    { name: "Docker & AWS Cloud", level: 80 },
  ];

  const softSkills = [
    "System Architecture",
    "ML Model Optimization",
    "Agile Leadership",
    "Technical Consulting",
    "Product Strategy",
    "Cross-Functional Collaboration",
  ];

  return (
    <section id="skills" className="w-full py-12">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[14px] font-semibold text-secondary uppercase tracking-widest">
            — Expertise
          </span>
          <h2 className="text-[36px] md:text-[52px] font-bold text-primary tracking-tight">
            Core Skills
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills Card */}
          <div className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[24px] p-8 space-y-6 shadow-xs">
            <h3 className="text-[20px] font-bold text-primary tracking-tight border-b border-[#EEEEEE] pb-4">
              Technical Capabilities
            </h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-[15px] font-medium text-primary">
                    <span>{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  {/* Custom Progress Bar */}
                  <div className="w-full bg-[#F0F0F0] h-[5px] rounded-full overflow-hidden">
                    <motion.div
                      className="bg-[#222222] h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Practices Card */}
          <div className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[24px] p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-[20px] font-bold text-primary tracking-tight border-b border-[#EEEEEE] pb-4">
                Engineering Practices
              </h3>
              <p className="text-[16px] text-secondary leading-relaxed">
                Beyond core coding, I focus on software lifecycle excellence, designing scale-first systems, and coordinating technical roadmaps to maximize efficiency.
              </p>
              
              {/* Soft Skills Tags list */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="bg-[#FFFFFF] border border-[#EEEEEE] text-primary text-[14px] font-medium px-4 py-2 rounded-full hover:bg-tertiary transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Bottom mini philosophy quote */}
            <div className="border-t border-[#EEEEEE] pt-6 mt-6">
              <span className="text-[13px] font-semibold text-secondary uppercase tracking-widest block">
                Philosophy
              </span>
              <p className="text-[14px] text-secondary italic mt-1 leading-relaxed">
                "Simplicity is the ultimate sophistication. Write code that reads like editorial prose."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Pharmacy AI Inventory Management",
      subtitle: "Predictive Analytics & Inventory Search",
      date: "2026",
      image: "/portfolio_work_one.png",
      link: "https://github.com/Iman-Datta/MediStock-PredictAI",
    },
    {
      id: 2,
      title: "CHORUS Member Management System",
      subtitle: "Full-Stack Member Ops & Authentication Dashboard",
      date: "2026",
      image: "/portfolio_work_two.png",
      link: "https://github.com/ArpanKrSahoo/CHORUS-members",
    },
    {
      id: 3,
      title: "AI Tutor with 3D Avatar",
      subtitle: "Speech Recognition & 3D Three.js Interface",
      date: "2025",
      image: "/portfolio_work_three.png",
      link: "https://github.com/ArpanKrSahoo/med-track-blockchain",
    },
  ];

  return (
    <section id="projects" className="w-full py-12">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[14px] font-semibold text-secondary uppercase tracking-widest">
            — Portfolio
          </span>
          <h2 className="text-[36px] md:text-[52px] font-bold text-primary tracking-tight">
            Latest Works
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col space-y-4 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image Box */}
              <div className="relative aspect-[16/11] rounded-[18px] overflow-hidden bg-white shadow-xs border border-[#EEEEEE]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-col space-y-1">
                <span className="text-[13px] text-secondary font-medium">
                  {project.subtitle} — {project.date}
                </span>
                <h3 className="text-[18px] md:text-[20px] font-bold text-primary tracking-tight leading-snug group-hover:text-secondary transition-colors flex items-center gap-1">
                  <span>{project.title}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Capsule */}
        <div className="flex justify-center pt-4">
          <motion.a
            href="https://github.com/ArpanKrSahoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#EEEEEE] text-primary text-[15px] font-semibold px-8 py-3 rounded-full hover:bg-tertiary transition-colors shadow-xs"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Check out More</span>
            <span className="text-[14px]">&rarr;</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

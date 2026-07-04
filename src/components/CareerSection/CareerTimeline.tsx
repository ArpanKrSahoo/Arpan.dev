import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export const CareerTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1); // IEEE EMBS Internship expanded by default (index 1)
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const images = [
    "/portfolio_work_one.png",
    "/portfolio_work_two.png",
    "/portfolio_work_three.png"
  ];

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const careerEvents = [
    {
      year: "2024 – Present",
      title: "B.Tech in Computer Science",
      company: "IEM, Kolkata",
      description: "Building foundations in algorithms, distributed systems, machine learning, and core web engineering. Collaborating on university-led technical events and hackathons.",
      tags: ["2024", "B.Tech"],
    },
    {
      year: "2026",
      title: "AI & Healthcare Tech Intern",
      company: "IEEE EMBS Program",
      description: "Worked on AI-driven healthcare solutions, including Smart Pharmacy Inventory Management to predict medicine demand and prevent stock-outs using machine learning and data analytics. Collaborated in a multidisciplinary team under academic mentorship while applying practical software development and research skills.",
      tags: ["2026", "Internship"],
      isExpandable: true,
    },
    {
      year: "2025 – Present",
      title: "Full-Stack Developer",
      company: "Academic & Personal Projects",
      description: "Designing and developing modern web applications using React, Node.js, Firebase, and REST APIs. Built AI-powered applications, member management systems, and intelligent educational platforms while focusing on scalable architecture.",
      tags: ["2025", "Projects"],
    },
    {
      year: "2025",
      title: "ML & Data Science Projects",
      company: "Research & Kaggle",
      description: "Developed predictive analytics and sentiment analysis models using Python, Pandas, Scikit-learn, and TensorFlow. Worked with large datasets to extract insights and build recommendations.",
      tags: ["2025", "Research"],
    },
    {
      year: "2024 – Present",
      title: "Hackathons & Open Source",
      company: "Personal Growth",
      description: "Regularly participate in hackathons, technical competitions, and open-source learning. Continuously expanding expertise in cloud technologies, AI, and software engineering.",
      tags: ["2024", "Growth"],
    },
  ];

  return (
    <section id="career" className="w-full py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (Section Heading & CTA) - 5 cols */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[14px] font-semibold text-secondary uppercase tracking-widest">
            — Experience
          </span>
          <h2 className="text-[36px] md:text-[52px] font-bold text-primary tracking-tight leading-tight">
            Explore My Engineering Journey
          </h2>
          <p className="text-[18px] text-secondary leading-relaxed max-w-md">
            Over the past years, I've had the opportunity to build scalable backend systems, develop state-of-the-art AI features, and lead developer teams to ship production-grade products.
          </p>
          
          {/* Work List Button */}
          <motion.a
            href="https://github.com/ArpanKrSahoo"
            target="_blank"
            className="inline-flex items-center justify-center gap-1.5 bg-[#222222] text-[#FFFFFF] text-[15px] font-semibold px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-xs mt-4"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Work List</span>
            <ArrowUpRight size={15} />
          </motion.a>
        </div>

        {/* Right Column (Interactive Timeline List) - 7 cols */}
        <div className="lg:col-span-7 divide-y divide-[#EEEEEE]">
          {careerEvents.map((event, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="py-6 cursor-pointer first:pt-0 last:pb-0"
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                {/* Event Row Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[14px] text-secondary font-medium">
                      {event.year}
                    </span>
                    <h3 className="text-[20px] font-bold text-primary tracking-tight">
                      {event.title}
                    </h3>
                    <span className="text-[15px] text-secondary">
                      {event.company}
                    </span>
                  </div>

                  {/* Tags on the right */}
                  <div className="flex gap-2">
                    {event.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[12px] font-semibold px-3 py-1 rounded-full border border-[#EEEEEE] ${
                          tIdx === 0
                            ? "bg-[#222222] text-white"
                            : "bg-[#FFFFFF] text-secondary"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Detail Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {event.isExpandable ? (
                        /* Expanded layout with slider on left, description on right */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FFFFFF] border border-[#EEEEEE] rounded-[20px] p-6">
                          {/* Left: Image Slider */}
                          <div className="relative aspect-[16/10] rounded-[14px] overflow-hidden bg-[#F8F8F8] group/slider">
                            <img
                              src={images[activeImgIndex]}
                              alt="Project Screenshot"
                              className="w-full h-full object-cover grayscale transition-all"
                            />
                            
                            {/* Navigation controls */}
                            <div className="absolute bottom-4 right-4 flex gap-2">
                              <button
                                onClick={handlePrevImage}
                                className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                              >
                                <ArrowLeft size={14} />
                              </button>
                              <button
                                onClick={handleNextImage}
                                className="w-8 h-8 rounded-full bg-[#222222] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                              >
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          </div>

                          {/* Right: Detailed text */}
                          <div className="flex flex-col justify-center space-y-4">
                            <p className="text-[15px] text-secondary leading-relaxed">
                              {event.description}
                            </p>
                            <span className="text-[13px] font-semibold text-primary uppercase tracking-wider">
                              Key Outcomes: Models deployed with 92% accuracy, database queries optimized by 40%.
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* Standard expanded text description */
                        <div className="bg-[#FFFFFF] border border-[#EEEEEE] rounded-[20px] p-6">
                          <p className="text-[15px] text-secondary leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

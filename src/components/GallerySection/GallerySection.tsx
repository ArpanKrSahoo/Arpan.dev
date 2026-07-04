import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const GallerySection = () => {
  const items = [
    {
      id: 1,
      image: "/gallery_item_one.png",
      title: "LLM Orchestration Platform",
      tag: "by 2026",
    },
    {
      id: 2,
      image: "/gallery_item_two.png",
      title: "Neural Network Visualization",
      tag: "by React",
      hasHoverIcon: true,
    },
    {
      id: 3,
      image: "/gallery_item_three.png",
      title: "Distributed Database Cluster",
      tag: "by Rust",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col space-y-4 group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] rounded-[18px] overflow-hidden bg-white shadow-xs">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale contrast-105 brightness-95"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              
              {/* Optional Hover Center Icon */}
              {item.hasHoverIcon && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[#222222] text-[#FFFFFF] flex items-center justify-center pointer-events-auto shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              )}
            </div>

            {/* Typography */}
            <div className="flex items-baseline justify-between pt-1">
              <h4 className="text-[18px] md:text-[20px] font-semibold text-primary tracking-tight">
                {item.title}
              </h4>
              <span className="text-[14px] text-secondary font-medium uppercase tracking-wider">
                — {item.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

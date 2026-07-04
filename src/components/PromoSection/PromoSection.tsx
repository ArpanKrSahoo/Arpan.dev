 import { motion } from "framer-motion";
 import { ArrowUpRight } from "lucide-react";

 export const PromoSection = () => {
   return (
     <section className="w-full">
       <motion.div
         className="relative w-full rounded-[24px] overflow-hidden bg-[#222222] min-h-[300px] md:min-h-[360px] flex flex-col justify-center items-center text-center p-8 md:p-12 shadow-lg"
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
       >
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
           <img
             src="/promo_bg.png"
             alt="Promo background"
             className="w-full h-full object-cover grayscale opacity-20 pointer-events-none"
           />
           <div className="absolute inset-0 bg-[#222222]/40" />
         </div>

         {/* Content */}
         <div className="relative z-10 max-w-2xl space-y-6 flex flex-col items-center">
           <span className="text-[13px] font-semibold text-secondary uppercase tracking-widest text-[#7B7B7B]">
             Free Consultations
           </span>
           {/* <h3 className="text-[28px] md:text-[40px] font-bold text-[#ffffff] tracking-tight leading-tight ">
             Accelerate Your Infrastructure: Get a Free AI & Cloud Architecture Review!
           </h3> */}
           <p className="text-[16px] text-[#7B7B7B] max-w-lg leading-relaxed">
             Let's evaluate your scaling requirements, ML pipeline overhead, and devise a robust production deployment plan together.
           </p>
          
           {/* CTA Button */}
           <motion.a
             href="#contact"
             className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#222222] text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-[#F8F8F8] hover:scale-105 transition-all shadow-md mt-2"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
           >
             <span>Book a Session</span>
             <ArrowUpRight size={16} />
           </motion.a>
         </div>
       </motion.div>

     </section>
   );
 };

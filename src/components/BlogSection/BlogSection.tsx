import { motion } from "framer-motion";

export const BlogSection = () => {
  const posts = [
    {
      id: 1,
      image: "/blog_post_one.png",
      tag: "AI & ML",
      readTime: "5 min read",
      title: "Scaling LLMs in Production: Cache, Quantization, and Concurrency",
    },
    {
      id: 2,
      image: "/blog_post_two.png",
      tag: "Backend",
      readTime: "8 min read",
      title: "Building Distributed Consensus Engines with Raft and Go",
    },
    {
      id: 3,
      image: "/blog_post_three.png",
      tag: "Frontend",
      readTime: "4 min read",
      title: "Fluid Web Transitions and Micro-interactions using Tailwind v4",
    },
  ];

  return (
    <section id="blog" className="w-full">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[14px] font-semibold text-secondary uppercase tracking-widest">
            — Blog
          </span>
          <h2 className="text-[36px] md:text-[52px] font-bold text-primary tracking-tight">
            Engineering Insights & Trends
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="flex flex-col space-y-4 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image Box */}
              <div className="relative aspect-[16/11] rounded-[18px] overflow-hidden bg-white shadow-xs">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta information */}
              <div className="flex items-center gap-3">
                <span className="bg-[#FFFFFF] border border-[#EEEEEE] text-primary text-[12px] font-semibold px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="text-secondary text-[13px]">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-primary tracking-tight leading-snug group-hover:text-secondary transition-colors">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

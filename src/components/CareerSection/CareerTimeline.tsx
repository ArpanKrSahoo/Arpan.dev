import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [

  {
    year: "2024 – Present",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Institute of Engineering & Management (IEM), Kolkata",
    description:
      "Pursuing a Bachelor's degree in Computer Science while building a strong foundation in software engineering, data structures, algorithms, artificial intelligence, and full-stack web development. Actively involved in technical projects, hackathons, and collaborative development.",
    icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
  },
  {
    year: "2026",
    title: "AI & Healthcare Technology Intern",
    subtitle: "IEEE EMBS Student Internship Program",
    description:
      "Worked on AI-driven healthcare solutions, including Smart Pharmacy Inventory Management to predict medicine demand and prevent stock-outs using machine learning and data analytics. Collaborated in a multidisciplinary team under academic mentorship while applying practical software development and research skills.",
    icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
  },
  {
    year: "2025 – Present",
    title: "Full-Stack Developer",
    subtitle: "Academic & Personal Projects",
    description:
      "Designed and developed modern web applications using React, Node.js, Firebase, and REST APIs. Built AI-powered applications, member management systems, and intelligent educational platforms while focusing on scalable architecture and intuitive user experiences.",
    icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
  },
  {
    year: "2025",
    title: "Machine Learning & Data Science Projects",
    subtitle: "Research & Kaggle",
    description:
      "Developed predictive analytics and sentiment analysis models using Python, Pandas, Scikit-learn, and TensorFlow. Worked with large datasets to extract insights, build recommendation systems, and explore real-world machine learning applications.",
    icon: <Award className="h-4 w-4 mr-2 text-primary" />,
  },
  {
    year: "2024 – Present",
    title: "Hackathons & Continuous Learning",
    subtitle: "Personal Growth",
    description:
      "Regularly participate in hackathons, technical competitions, and open-source learning. Continuously expanding expertise in cloud technologies, AI, backend development, and software engineering while building projects that address real-world challenges.",
    icon: <Users className="h-4 w-4 mr-2 text-primary" />,
  },
];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="An evolving path of leadership, innovation, and impact"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};

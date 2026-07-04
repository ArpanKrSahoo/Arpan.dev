import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import StripedBackground from "./components/lightswind/StripedBackground";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { GallerySection } from "./components/GallerySection/GallerySection";
import { CareerTimeline } from "./components/CareerSection/CareerTimeline";
import SkillsSection from "./components/EducationSection/SkillCategory";
import { ProjectsSection } from "./components/ProjectsSection/ProjectsSection";
import { PromoSection } from "./components/PromoSection/PromoSection";
import { BlogSection } from "./components/BlogSection/BlogSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import ReactLenis from "lenis/react";

function App() {
  useEffect(() => {
    // Explicitly clean up any dark mode classes to guarantee light mode visibility
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <div className="bg-tertiary min-h-screen flex flex-col items-center justify-start overflow-x-hidden relative">
      {/* Background grids styling */}
      <StripedBackground className={"fixed z-0 opacity-40 pointer-events-none"} />

      <ReactLenis root>
        {/* Sticky Header */}
        <Header />

        {/* Spacious Swiss Grid Main Layout */}
        <main 
          className="w-full max-w-[1440px] px-6 md:px-10 lg:px-[120px] 
          flex flex-col space-y-[120px] md:space-y-[150px] lg:space-y-[180px] 
          z-10 relative pb-12"
        >
          {/* Hero Section */}
          <HeroSection />

          {/* About Me Section */}
          <AboutSection />

          {/* Gallery Section */}
          <GallerySection />

          {/* Career Journey (Experience) */}
          <CareerTimeline />

          {/* Skills Section */}
          <SkillsSection />

          {/* Latest Works (Portfolio) */}
          <ProjectsSection />

          {/* Promo Card Banner */}
          <PromoSection />

          {/* Blog Insights */}
          <BlogSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </main>
      </ReactLenis>
    </div>
  );
}

export default App;

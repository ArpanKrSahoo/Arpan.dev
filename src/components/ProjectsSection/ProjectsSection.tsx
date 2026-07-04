"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";

export const ProjectsSection = () => {
  const [projects] = useState([
  {
    id: 1,
    title: "Smart Pharmacy AI Inventory Management",
    subtitle:
      "An AI-powered inventory management system that predicts medicine demand to minimize stock-outs using machine learning and predictive analytics. Developed as part of the IEEE EMBS Student Internship Program.",
    date: "2026",
    link: "https://github.com/Iman-Datta/MediStock-PredictAI",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  },
  {
    id: 2,
    title: "CHORUS Member Management System",
    subtitle:
      "A full-stack web application for managing members, attendance, payments, and administrative operations with secure authentication, dashboards, and Firebase integration.",
    date: "2026",
    link: "https://github.com/ArpanKrSahoo/CHORUS-members",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    id: 3,
    title: "AI Tutor with 3D Avatar",
    subtitle:
      "An interactive AI-powered learning platform featuring voice interaction, a 3D avatar, and intelligent tutoring using React, Three.js, and TensorFlow.",
    date: "2025",
    link: "https://github.com/ArpanKrSahoo/med-track-blockchain",
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
  },
  {
    id: 4,
    title: "Sentiment Analysis & Recommendation System",
    subtitle:
      "Built an NLP-based recommendation engine by analyzing over one million user reviews to classify sentiment and generate personalized recommendations.",
    date: "2025",
    link: "YOUR_GITHUB_LINK",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
  },
  {
    id: 5,
    title: "Machine Learning Survey Trend Analysis",
    subtitle:
      "Performed exploratory data analysis and predictive modeling on Kaggle's Machine Learning & Data Science Survey to uncover trends and forecast industry insights.",
    date: "2025",
    link: "YOUR_GITHUB_LINK",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
  },


  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8 text-center"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};

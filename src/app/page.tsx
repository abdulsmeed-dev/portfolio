"use client";

import React, { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSelectSkill = (skill: string) => {
    setSelectedSkill(skill);
  };

  const handleClearSkill = () => {
    setSelectedSkill(null);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills
          selectedSkill={selectedSkill}
          onSelectSkill={handleSelectSkill}
        />
        <Projects
          selectedSkill={selectedSkill}
          onClearSkill={handleClearSkill}
        />
        <Timeline />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

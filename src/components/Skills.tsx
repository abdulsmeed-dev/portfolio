"use client";

import React from "react";
import { portfolioData, SkillCategory } from "../data/portfolioData";
import { SmartphoneIcon, LayersIcon, LayoutIcon, DatabaseIcon, GlobeIcon, CpuIcon } from "./Icons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import s from "../styles/skills.module.css";

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <SmartphoneIcon size={20} />,
  layers: <LayersIcon size={20} />,
  layout: <LayoutIcon size={20} />,
  database: <DatabaseIcon size={20} />,
  globe: <GlobeIcon size={20} />,
  cpu: <CpuIcon size={20} />
};

interface SkillsProps {
  onSelectSkill?: (skill: string) => void;
  selectedSkill?: string | null;
}

export function Skills({ onSelectSkill, selectedSkill }: SkillsProps) {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.08);

  const handleSkillClick = (skillName: string) => {
    if (onSelectSkill) {
      onSelectSkill(skillName);
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="section-title">Skills, Tools &amp; Architectural Patterns</h2>
          <p className="section-subtitle">
            Core mastery spanning cross-platform Flutter mobile architecture, Next.js full-stack systems, cloud infrastructure, and AI-accelerated workflows.
          </p>
        </div>

        <div ref={gridRef} className={`${s.grid} stagger-children reveal`}>
          {portfolioData.skillCategories.map((cat: SkillCategory) => (
            <SpotlightCard key={cat.id} className={`${s.card} reveal-child`}>
              <div className={s.cardHead}>
                <div className={s.iconBox}>{iconMap[cat.icon] || <SmartphoneIcon size={20} />}</div>
                <h3 className={s.cardTitle}>{cat.title}</h3>
              </div>
              <p className={s.cardDesc}>{cat.description}</p>
              <div className={s.pills}>
                {cat.skills.map((sk, i) => {
                  const isActive = selectedSkill === sk.name;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSkillClick(sk.name)}
                      className={`${s.pill} ${sk.highlight ? s.pillHighlight : ""} ${isActive ? s.pillActive : ""}`}
                      title={`Filter projects by ${sk.name}`}
                    >
                      {sk.name}
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className={s.hint}>
          💡 <strong>Pro-tip:</strong> Click on any technology chip to automatically filter and highlight projects built with it.
        </div>
      </div>
    </section>
  );
}

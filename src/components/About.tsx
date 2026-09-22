"use client";

import React from "react";
import { portfolioData } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import s from "../styles/about.module.css";

export function About() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.1);

  return (
    <section id="about" className={`section ${s.wrap}`}>
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Engineering Philosophy</span>
          <h2 className="section-title">Architecting Resilient, Scalable Systems</h2>
          <p className="section-subtitle">
            Dedicated to Clean Architecture, domain-driven code separation, and AI-augmented software engineering.
          </p>
        </div>

        <div ref={gridRef} className={`${s.grid} reveal`}>
          <div className={s.narrative}>
            {portfolioData.about.paragraphs.map((p, i) => (
              <p key={i} className={s.text}>{p}</p>
            ))}
            <div className={s.quote}>
              &ldquo;Clean code is not just about passing tests — it&apos;s about building architectures that gracefully survive evolving business requirements, high data concurrency, and team scale.&rdquo;
            </div>
          </div>

          <div className={s.pillars}>
            {portfolioData.about.pillars.map((p, i) => (
              <SpotlightCard key={i} className={s.pillar}>
                <div className={s.num}>0{i + 1}</div>
                <div>
                  <h3 className={s.pillarTitle}>{p.title}</h3>
                  <p className={s.pillarDesc}>{p.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

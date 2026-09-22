"use client";

import React from "react";
import { portfolioData, ExperienceItem, EducationItem } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import s from "../styles/timeline.module.css";

export function Timeline() {
  const headerRef = useScrollReveal();
  const trackRef = useScrollReveal(0.08);

  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Career &amp; Growth</span>
          <h2 className="section-title">Experience &amp; Academic Foundation</h2>
          <p className="section-subtitle">
            Proven engineering roles, high-concurrency production deployments, and specialized CS degree.
          </p>
        </div>

        <div ref={trackRef} className={`${s.track} stagger-children reveal`}>
          {portfolioData.experience.map((exp: ExperienceItem, i) => (
            <div key={i} className={`${s.item} reveal-child`}>
              <div className={s.marker} />
              <SpotlightCard className={s.card}>
                <div className={s.top}>
                  <div>
                    <h3 className={s.role}>{exp.role}</h3>
                    <div className={s.company}>{exp.company} · {exp.type}</div>
                  </div>
                  <div className={s.meta}>
                    <span className={s.period}>{exp.period}</span>
                    <span className={s.location}>{exp.location}</span>
                  </div>
                </div>
                <p className={s.desc}>{exp.description}</p>
                <ul className={s.bullets}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} className={s.bulletItem}>
                      <span className={s.bulletDot}>▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className={s.tags}>
                  {exp.technologies.map((t, j) => (
                    <span key={j} className={s.tag}>{t}</span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}

          {portfolioData.education.map((edu: EducationItem, i) => (
            <div key={`edu-${i}`} className={`${s.item} reveal-child`}>
              <div className={`${s.marker} ${s.markerEdu}`} />
              <SpotlightCard className={s.card}>
                <div className={s.top}>
                  <div>
                    <h3 className={s.role}>{edu.degree}</h3>
                    <div className={s.company}>{edu.institution}</div>
                  </div>
                  <div className={s.meta}>
                    <span className={s.period}>{edu.period}</span>
                    <span className={s.location}>{edu.location}</span>
                  </div>
                </div>
                <div className={s.desc}>
                  <strong>Final Year Project:</strong> {edu.finalYearProject.title}
                </div>
                <ul className={s.bullets}>
                  {edu.finalYearProject.details.map((d, j) => (
                    <li key={j} className={s.bulletItem}>
                      <span className={s.bulletDot}>▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <div className={s.tags}>
                  {edu.coursework.map((c, j) => (
                    <span key={j} className={s.tag}>{c}</span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

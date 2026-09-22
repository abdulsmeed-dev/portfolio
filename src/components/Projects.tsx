"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "../data/portfolioData";
import { PlayStoreIcon, LayersIcon } from "./Icons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { ProjectModal } from "./ProjectModal";
import s from "../styles/projects.module.css";

const tabs = [
  { id: "all", label: "All Works" },
  { id: "mobile", label: "Flutter & Mobile" },
  { id: "web", label: "Next.js Full-Stack" },
  { id: "saas", label: "Cloud & SaaS" },
  { id: "ai", label: "Applied AI" }
];

interface ProjectsProps {
  selectedSkill?: string | null;
  onClearSkill?: () => void;
}

export function Projects({ selectedSkill, onClearSkill }: ProjectsProps) {
  const [active, setActive] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.05);

  const filtered = portfolioData.projects.filter((p: Project) => {
    const matchesCategory = active === "all" || p.category === active;
    const matchesSkill =
      !selectedSkill ||
      p.technologies.some((t) => t.toLowerCase().includes(selectedSkill.toLowerCase())) ||
      p.title.toLowerCase().includes(selectedSkill.toLowerCase());
    return matchesCategory && matchesSkill;
  });

  return (
    <section id="projects" className={`section ${s.wrap}`}>
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Featured Works</span>
          <h2 className="section-title">Production Systems &amp; Engineering</h2>
          <p className="section-subtitle">
            Enterprise fleet dispatchers, Next.js architectural rewrites, and multi-tenant SaaS platforms engineered with Clean Architecture.
          </p>
        </div>

        <div className={s.controls}>
          <div className={s.filters}>
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`${s.filterBtn} ${active === t.id ? s.filterActive : ""}`}
                onClick={() => setActive(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {selectedSkill && (
            <div className={s.activeSkillIndicator}>
              <span>Filtered by skill: <strong>{selectedSkill}</strong></span>
              <button
                onClick={onClearSkill}
                className={s.clearSkillBtn}
                title="Clear skill filter"
              >
                ✕ Clear
              </button>
            </div>
          )}
        </div>

        <div ref={gridRef} className={`${s.grid} stagger-children reveal`}>
          {filtered.length === 0 ? (
            <div className={s.empty}>
              No projects found matching the current filter.
              {selectedSkill && (
                <div style={{ marginTop: "12px" }}>
                  <button onClick={onClearSkill} className={s.modalTrigger}>
                    Reset Skill Filter
                  </button>
                </div>
              )}
            </div>
          ) : (
            filtered.map((p: Project) => (
              <SpotlightCard key={p.id} className={`${s.card} reveal-child`}>
                <div className={s.cardTop}>
                  <span className={s.catTag}>{p.categoryLabel}</span>
                  {p.statusBadge && <span className={s.badge}>{p.statusBadge}</span>}
                </div>

                <div className={s.titleBlock}>
                  <h3 className={s.title}>{p.title}</h3>
                  <div className={s.role}>{p.role}</div>
                </div>

                <p className={s.summary}>{p.summary}</p>

                <ul className={s.features}>
                  {p.features.map((f, i) => (
                    <li key={i} className={s.feature}>
                      <span className={s.bullet}>▸</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={s.techRow}>
                  {p.technologies.map((t, i) => (
                    <span key={i} className={s.tech}>{t}</span>
                  ))}
                </div>

                <div className={s.footer}>
                  <span className={s.metric}>{p.metrics}</span>

                  <div className={s.actions}>
                    <button
                      onClick={() => setSelectedProject(p)}
                      className={s.modalTrigger}
                    >
                      <LayersIcon size={14} /> Case Study
                    </button>

                    {p.playStoreUrl && (
                      <a href={p.playStoreUrl} target="_blank" rel="noopener noreferrer" className={s.actionLink}>
                        <PlayStoreIcon size={14} /> Play Store
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            ))
          )}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

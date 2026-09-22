"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import s from "../styles/footer.module.css";

export function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div className={s.brand}>
            <span className={s.brandName}>{portfolioData.personal.name}</span>
            <span className={s.brandDesc}>Software Engineer · Flutter · Next.js · Clean Architecture</span>
          </div>
          <ul className={s.fLinks}>
            <li><a href="#about" className={s.fLink}>About</a></li>
            <li><a href="#skills" className={s.fLink}>Skills</a></li>
            <li><a href="#projects" className={s.fLink}>Projects</a></li>
            <li><a href="#experience" className={s.fLink}>Experience</a></li>
            <li><Link href="/contact" className={s.fLink}>Contact</Link></li>
            <li><a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className={s.fLink}>LinkedIn</a></li>
            <li><a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className={s.fLink}>GitHub</a></li>
          </ul>
        </div>
        <div className={s.bottom}>
          <p className={s.copy}>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <button onClick={toTop} className={s.toTop} aria-label="Back to top">Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}

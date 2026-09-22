"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import { DownloadIcon, MailIcon, MenuIcon, CloseIcon } from "./Icons";
import s from "../styles/header.module.css";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["#hero", "#about", "#skills", "#projects", "#experience", "#contact"];
      const y = window.scrollY + 140;
      for (const id of sections) {
        const el = document.querySelector(id) as HTMLElement | null;
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveHash(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
      <div className={`container ${s.nav}`}>
        <Link href="/" className={s.logo}>
          <div className={s.logoBadge}>{portfolioData.personal.monogram}</div>
          <div className={s.logoText}>
            <span className={s.logoName}>{portfolioData.personal.name}</span>
            <span className={s.logoSub}>Software Engineer</span>
          </div>
        </Link>

        <ul className={s.links}>
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={`${s.link} ${activeHash === item.href ? s.linkActive : ""}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={s.actions}>
          <a href={portfolioData.personal.resumeDownloadUrl} download="Abdul_Smeed_Ahmad_Resume.pdf" className={s.resumeBtn}>
            <DownloadIcon size={14} />
            Resume
          </a>
          <Link href="/contact" className={s.ctaBtn}>
            <MailIcon size={14} />
            Hire Me
          </Link>
          <button className={s.menuBtn} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      <div className={`${s.drawer} ${mobileOpen ? s.drawerOpen : ""}`}>
        <ul className={s.mobileLinks}>
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={s.mobileLink} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={s.mobileActions}>
          <a href={portfolioData.personal.resumeDownloadUrl} download className={s.resumeBtn} onClick={() => setMobileOpen(false)}>
            <DownloadIcon size={16} /> Download Resume
          </a>
          <Link href="/contact" className={s.ctaBtn} onClick={() => setMobileOpen(false)}>
            <MailIcon size={16} /> Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}

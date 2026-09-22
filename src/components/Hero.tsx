"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import { ArrowRightIcon, DownloadIcon, MailIcon, SparklesIcon, SmartphoneIcon } from "./Icons";
import { SpotlightCard } from "./SpotlightCard";
import { useToast } from "./Toast";
import s from "../styles/hero.module.css";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const num = parseInt(target.replace(/\D/g, ""), 10);

  useEffect(() => {
    const el = ref.current;
    if (!el || isNaN(num)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1400;
          const step = (ts: number) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  const displayVal = isNaN(num) ? target : `${count}${suffix}`;

  return <span ref={ref}>{displayVal}</span>;
}

export function Hero() {
  const { showToast } = useToast();
  const roles = portfolioData.personal.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const role = roles[roleIndex];
    if (!deleting) {
      if (text.length < role.length) {
        setText(role.slice(0, text.length + 1));
      } else {
        setTimeout(() => setDeleting(true), 2200);
        return;
      }
    } else {
      if (text.length > 0) {
        setText(role.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
        return;
      }
    }
  }, [text, deleting, roleIndex, roles]);

  useEffect(() => {
    const timer = setTimeout(tick, deleting ? 35 : 75);
    return () => clearTimeout(timer);
  }, [tick, deleting]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast("Email copied to clipboard! (ahmedsmeed3@gmail.com)");
  };

  return (
    <section id="hero" className={s.hero}>
      <div className="container">
        <div className={s.grid}>
          <div className={s.left}>
            <div className={s.statusRow}>
              <div className={s.status}>
                <span className={s.dot} />
                Available for Engineering Roles
              </div>
              <button onClick={handleCopyEmail} className={s.copyEmailChip} title="Click to copy email">
                <MailIcon size={13} color="var(--cyan)" />
                <span>ahmedsmeed3@gmail.com</span>
              </button>
            </div>

            <div>
              <span className={s.greeting}>Senior Engineering Portfolio</span>
              <h1 className={s.name}>
                <span className={s.nameGradient}>{portfolioData.personal.name}</span>
              </h1>
            </div>

            <div className={s.typing}>
              <span className={s.typingHighlight}>{text}</span>
              <span className="typing-cursor">|</span>
            </div>

            <p className={s.valueProp}>{portfolioData.personal.valueProposition}</p>

            <div className={s.ctas}>
              <a href="#projects" className={s.primaryBtn}>
                Explore Featured Works <ArrowRightIcon size={16} />
              </a>
              <Link href="/contact" className={s.secondaryBtn}>
                <MailIcon size={16} /> Get in Touch
              </Link>
              <a href={portfolioData.personal.resumeDownloadUrl} download className={s.ghostBtn}>
                <DownloadIcon size={16} /> Download CV
              </a>
            </div>
          </div>

          <div className={s.right}>
            <div className={s.portraitFrame}>
              <div className={s.portraitGlow} />
              <div className={s.badge1}>
                <SmartphoneIcon size={14} color="var(--cyan)" /> Flutter &amp; Clean Architecture
              </div>
              <div className={s.badge2}>
                <SparklesIcon size={14} color="var(--emerald)" /> AI-Accelerated Delivery
              </div>
              <div className={s.portraitCard}>
                <Image
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  width={420}
                  height={500}
                  priority
                  className={s.portraitImg}
                />
                <div className={s.portraitOverlay} />
                <div className={s.portraitMeta}>
                  <span className={s.metaName}>{portfolioData.personal.name}</span>
                  <span className={s.metaRole}>Software Engineer · Mobile &amp; Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Spotlight Stat Cards */}
        <div className={s.stats}>
          {portfolioData.stats.map((st, i) => (
            <SpotlightCard key={i} className={s.statCard}>
              <div className={s.statVal}>
                <AnimatedCounter target={st.value} suffix={st.value.replace(/[\d]/g, "")} />
              </div>
              <div className={s.statLabel}>{st.label}</div>
              <div className={s.statDesc}>{st.description}</div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

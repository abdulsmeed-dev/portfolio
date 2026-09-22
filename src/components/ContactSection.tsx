"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import { ContactForm } from "./ContactForm";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon, ArrowRightIcon } from "./Icons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useToast } from "./Toast";
import s from "../styles/contactSection.module.css";

export function ContactSection() {
  const { showToast } = useToast();
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal(0.1);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast("Email address copied to clipboard!");
  };

  return (
    <section id="contact" className={`section ${s.wrap}`}>
      <div className="container">
        <div ref={headerRef} className="section-header reveal">
          <span className="section-tag">Direct Collaboration</span>
          <h2 className="section-title">Start an Engineering Conversation</h2>
          <p className="section-subtitle">
            Open for high-impact full-time engineering roles, mobile architecture consultations, and contract builds.
          </p>
        </div>

        <div ref={gridRef} className={`${s.grid} reveal`}>
          <div className={s.info}>
            <h3 className={s.infoTitle}>Connect Directly</h3>
            <p className={s.infoText}>
              Based in Rawalpindi, Pakistan — seamlessly collaborating with global remote teams across US, European, and Asian timezones.
            </p>

            <div className={s.channels}>
              <div onClick={handleCopyEmail} className={s.channel} title="Click to copy email">
                <div className={s.channelIcon}><MailIcon size={20} /></div>
                <div>
                  <span className={s.channelLabel}>Email (Click to copy)</span>
                  <span className={s.channelVal}>{portfolioData.personal.email}</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${portfolioData.personal.phoneClean}?text=${encodeURIComponent("Hi Abdul, I'd like to connect regarding an engineering role/project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.channel}
                title="Chat on WhatsApp"
              >
                <div className={s.channelIcon}><PhoneIcon size={20} /></div>
                <div>
                  <span className={s.channelLabel}>Phone &amp; WhatsApp</span>
                  <span className={s.channelVal}>{portfolioData.personal.phone}</span>
                </div>
              </a>

              <div className={s.channel}>
                <div className={s.channelIcon}><MapPinIcon size={20} /></div>
                <div>
                  <span className={s.channelLabel}>Location</span>
                  <span className={s.channelVal}>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            <div className={s.socials}>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className={s.socialBtn}>
                <LinkedInIcon size={17} /> LinkedIn
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className={s.socialBtn}>
                <GitHubIcon size={17} /> GitHub
              </a>
            </div>

            <div className={s.pageBanner}>
              <span className={s.pageBannerText}>Prefer the dedicated portal?</span>
              <Link href="/contact" className={s.pageBannerLink}>
                Open /contact <ArrowRightIcon size={13} />
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

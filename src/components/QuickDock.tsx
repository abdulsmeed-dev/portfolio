"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import { MailIcon, PhoneIcon, ArrowRightIcon } from "./Icons";
import { useToast } from "./Toast";
import s from "../styles/quickDock.module.css";

export function QuickDock() {
  const { showToast } = useToast();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    showToast("Email copied to clipboard! (ahmedsmeed3@gmail.com)");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Quick Actions" className={s.dock}>
      {/* 1-Click Copy Email */}
      <button
        onClick={copyEmail}
        title="Copy Email Address"
        className={s.copyBtn}
      >
        <MailIcon size={14} color="#67e8f9" />
        <span>Copy Email</span>
      </button>

      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/${portfolioData.personal.phoneClean}?text=${encodeURIComponent("Hi Abdul, I checked out your portfolio and would like to connect.")}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className={s.waBtn}
      >
        <PhoneIcon size={13} color="#34d399" />
        <span>WhatsApp</span>
      </a>

      {/* Direct Contact Button */}
      <Link href="/contact" className={s.hireBtn}>
        <span>Hire Me</span>
        <ArrowRightIcon size={12} />
      </Link>

      {/* Smooth Scroll Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Scroll to top"
          className={s.topBtn}
        >
          ↑
        </button>
      )}
    </aside>
  );
}

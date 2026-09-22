"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolioData";
import { MailIcon, PhoneIcon, ArrowRightIcon } from "./Icons";
import { useToast } from "./Toast";

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
    <aside
      aria-label="Quick Actions"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 90,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 10px",
        borderRadius: "9999px",
        background: "rgba(10, 16, 36, 0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.15)"
      }}
    >
      {/* 1-Click Copy Email */}
      <button
        onClick={copyEmail}
        title="Copy Email Address"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 13px",
          borderRadius: "9999px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#cbd5e1",
          fontSize: "0.78rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.2s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#ffffff";
          e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.2)";
          e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#cbd5e1";
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        }}
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
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 13px",
          borderRadius: "9999px",
          background: "rgba(16, 185, 129, 0.12)",
          border: "1px solid rgba(16, 185, 129, 0.3)",
          color: "#34d399",
          fontSize: "0.78rem",
          fontWeight: 600,
          transition: "all 0.2s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.25)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(16, 185, 129, 0.12)";
          e.currentTarget.style.transform = "none";
        }}
      >
        <PhoneIcon size={13} color="#34d399" />
        <span>WhatsApp</span>
      </a>

      {/* Direct Contact Button */}
      <Link
        href="/contact"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 15px",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)",
          color: "#ffffff",
          fontSize: "0.78rem",
          fontWeight: 600,
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
          transition: "all 0.2s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 0 28px rgba(99, 102, 241, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "none";
          e.currentTarget.style.boxShadow = "0 0 20px rgba(99, 102, 241, 0.4)";
        }}
      >
        <span>Hire Me</span>
        <ArrowRightIcon size={12} />
      </Link>

      {/* Smooth Scroll Back to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Scroll to top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "#ffffff",
            fontSize: "0.85rem",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(99, 102, 241, 0.3)";
            e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          }}
        >
          ↑
        </button>
      )}
    </aside>
  );
}

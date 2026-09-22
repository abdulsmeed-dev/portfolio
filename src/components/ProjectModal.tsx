"use client";

import React, { useEffect } from "react";
import { Project } from "../data/portfolioData";
import { CloseIcon, ExternalLinkIcon, PlayStoreIcon, ArrowRightIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(3, 7, 18, 0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        overflowY: "auto"
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "760px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "rgba(10, 16, 36, 0.95)",
          border: "1px solid rgba(99, 102, 241, 0.35)",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.8), 0 0 50px rgba(99, 102, 241, 0.2)",
          color: "#ffffff"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.06)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#94a3b8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#94a3b8";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
          }}
        >
          <CloseIcon size={18} />
        </button>

        {/* Top Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#67e8f9",
              background: "rgba(6, 182, 212, 0.12)",
              border: "1px solid rgba(6, 182, 212, 0.3)",
              padding: "4px 12px",
              borderRadius: "9999px"
            }}
          >
            {project.categoryLabel}
          </span>
          {project.statusBadge && (
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#10b981",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                padding: "4px 12px",
                borderRadius: "9999px"
              }}
            >
              {project.statusBadge}
            </span>
          )}
          <span style={{ fontSize: "0.82rem", color: "#94a3b8", fontWeight: 500 }}>
            Role: <strong style={{ color: "#ffffff" }}>{project.role}</strong>
          </span>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "1.85rem", fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.03em", marginBottom: "16px" }}>
          {project.title}
        </h2>

        {/* Deep Description */}
        <p style={{ fontSize: "0.98rem", lineHeight: 1.7, color: "#cbd5e1", marginBottom: "24px" }}>
          {project.description}
        </p>

        {/* Key Architectural Highlights */}
        <div style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#a5b4fc", marginBottom: "12px" }}>
            Key Architectural Highlights &amp; Modules
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  fontSize: "0.88rem",
                  color: "#cbd5e1",
                  lineHeight: 1.6
                }}
              >
                <span style={{ color: "#6366f1", fontWeight: 700, fontSize: "1rem" }}>▸</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Breakdown */}
        <div style={{ marginBottom: "28px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#a5b4fc", marginBottom: "12px" }}>
            Technologies &amp; Architecture Patterns
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "rgba(99, 102, 241, 0.12)",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  color: "#e0e7ff",
                  fontSize: "0.82rem",
                  fontWeight: 600
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Impact */}
        {project.metrics && (
          <div
            style={{
              padding: "16px 20px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              marginBottom: "28px"
            }}
          >
            <div style={{ fontSize: "0.76rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#67e8f9", fontWeight: 700, marginBottom: "4px" }}>
              Key Metric &amp; Production Scale
            </div>
            <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#ffffff" }}>
              {project.metrics}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                borderRadius: "10px",
                background: "#6366f1",
                color: "#ffffff",
                fontSize: "0.86rem",
                fontWeight: 600,
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)",
                transition: "all 0.2s"
              }}
            >
              <PlayStoreIcon size={16} /> Open Google Play
            </a>
          )}
          <a
            href="/contact"
            onClick={onClose}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "11px 20px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              fontSize: "0.86rem",
              fontWeight: 600,
              transition: "all 0.2s"
            }}
          >
            Discuss this Architecture <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

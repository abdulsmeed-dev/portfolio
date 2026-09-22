"use client";

import React, { useState } from "react";
import { SendIcon, CheckCircleIcon, MailIcon } from "./Icons";
import { useToast } from "./Toast";
import s from "../styles/contactForm.module.css";

interface Props {
  title?: string;
  subtitle?: string;
}

const inquiryPresets = [
  {
    id: "fulltime",
    label: "Hire Full-Time",
    category: "Full-Time Engineering Role",
    subject: "Full-Time Software Engineer Opportunity",
    message: "Hi Abdul, we reviewed your portfolio and would like to discuss a full-time Software Engineer / Mobile Architect position with our engineering team."
  },
  {
    id: "flutter",
    label: "Build Flutter App",
    category: "Mobile App Development (Flutter)",
    subject: "Flutter Mobile App Project Inquiry",
    message: "Hi Abdul, I have a mobile application project requiring Flutter, Clean Architecture, and reliable state management. Here are the core requirements:"
  },
  {
    id: "nextjs",
    label: "Next.js Web App",
    category: "Full-Stack Web App (Next.js)",
    subject: "Next.js Full-Stack Web Application",
    message: "Hi Abdul, we need an architecturally robust Next.js web application built with TypeScript, modern database schemas, and clean UI components."
  },
  {
    id: "saas",
    label: "Multi-Tenant SaaS",
    category: "Multi-Tenant SaaS / POS",
    subject: "SaaS / Cloud Architecture Consultation",
    message: "Hi Abdul, we are designing a multi-tenant cloud SaaS platform with Supabase/PostgreSQL and high-throughput APIs. Let's discuss architecture options."
  },
  {
    id: "consult",
    label: "Quick Consultation",
    category: "Other",
    subject: "Engineering Consultation & Code Review",
    message: "Hi Abdul, I'd like to book a technical consultation regarding mobile app performance optimization and clean code refactoring."
  }
];

export function ContactForm({
  title = "Send a Direct Message",
  subtitle = "Delivered directly to my personal inbox via Resend."
}: Props) {
  const { showToast } = useToast();
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "Mobile App Development (Flutter)",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const applyPreset = (preset: typeof inquiryPresets[0]) => {
    setActiveChip(preset.id);
    setForm((prev) => ({
      ...prev,
      category: preset.category,
      subject: preset.subject,
      message: preset.message
    }));
    showToast(`Template applied: ${preset.label}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setSuccess(true);
      showToast("Message sent successfully!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const mailto = `mailto:ahmedsmeed3@gmail.com?subject=${encodeURIComponent(form.subject || "Inquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCategory: ${form.category}\n\n${form.message}`)}`;

  const reset = () => {
    setSuccess(false);
    setActiveChip(null);
    setForm({ name: "", email: "", category: "Mobile App Development (Flutter)", subject: "", message: "" });
  };

  return (
    <div className={s.formBox}>
      <div className={s.formHead}>
        <h3 className={s.formTitle}>{title}</h3>
        <p className={s.formSub}>{subtitle}</p>
      </div>

      {/* Quick Inquiry Chips */}
      {!success && (
        <div className={s.chipsSection}>
          <span className={s.chipsLabel}>
            Quick Inquiry Starters (1-Click Fill)
          </span>
          <div className={s.chipsRow}>
            {inquiryPresets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => applyPreset(preset)}
                className={`${s.chipBtn} ${activeChip === preset.id ? s.chipActive : ""}`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {success ? (
        <div className={s.success}>
          <CheckCircleIcon size={42} color="#10b981" />
          <h4 className={s.successTitle}>Message Dispatched!</h4>
          <p className={s.successDesc}>
            Thank you for reaching out, <strong>{form.name || "friend"}</strong>. Your message was successfully sent to my inbox via Resend. I normally reply within 24 hours.
          </p>
          <button className={s.resetBtn} onClick={reset}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={s.form}>
          {error && (
            <div className={s.error}>
              <span>{error}</span>
              <a href={mailto} className={s.fallbackLink}>
                <MailIcon size={14} /> Open default email app instead
              </a>
            </div>
          )}

          <div className={s.row}>
            <div className={s.group}>
              <label htmlFor="cf-name" className={s.label}>
                Name <span>*</span>
              </label>
              <input
                id="cf-name"
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                className={s.input}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className={s.group}>
              <label htmlFor="cf-email" className={s.label}>
                Email <span>*</span>
              </label>
              <input
                id="cf-email"
                type="email"
                required
                placeholder="sarah@company.com"
                className={s.input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>

          <div className={s.group}>
            <label htmlFor="cf-cat" className={s.label}>Category</label>
            <select
              id="cf-cat"
              className={s.select}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option>Mobile App Development (Flutter)</option>
              <option>Full-Stack Web App (Next.js)</option>
              <option>Multi-Tenant SaaS / POS</option>
              <option>AI Integration &amp; Automation</option>
              <option>Full-Time Engineering Role</option>
              <option>Other</option>
            </select>
          </div>

          <div className={s.group}>
            <label htmlFor="cf-subj" className={s.label}>Subject</label>
            <input
              id="cf-subj"
              type="text"
              placeholder="Project topic or title"
              className={s.input}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>

          <div className={s.group}>
            <label htmlFor="cf-msg" className={s.label}>
              Message <span>*</span>
            </label>
            <textarea
              id="cf-msg"
              required
              rows={4}
              placeholder="Tell me about your project scope, target platforms, or engineering requirements..."
              className={s.textarea}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          <button type="submit" disabled={loading} className={s.submitBtn}>
            {loading ? (
              <>
                <div className={s.spinner} /> Dispatching...
              </>
            ) : (
              <>
                <SendIcon size={16} /> Send Direct Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

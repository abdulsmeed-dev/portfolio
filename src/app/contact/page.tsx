import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { portfolioData } from "../../data/portfolioData";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContactForm } from "../../components/ContactForm";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon } from "../../components/Icons";
import s from "../../styles/contactPage.module.css";

export const metadata: Metadata = {
  title: "Contact | Abdul Smeed Ahmad",
  description: "Get in touch with Abdul Smeed Ahmad — Software Engineer & Flutter / Full-Stack Developer."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={s.pageWrap}>
        <div className="container">
          <Link href="/" className={s.back}>← Back to Portfolio</Link>

          <div className={s.pageHead}>
            <span className="section-tag">Contact Portal</span>
            <h1 className={s.pageTitle}>Let&apos;s Build Something Scalable</h1>
            <p className={s.pageSub}>
              Send a message directly to my inbox via Resend. Projects, consulting, or full-time opportunities — I&apos;m all ears.
            </p>
          </div>

          <div className={s.layout}>
            <div className={s.side}>
              <div className={s.profileCard}>
                <Image src={portfolioData.personal.profileImage} alt={portfolioData.personal.name} width={56} height={56} className={s.avatar} />
                <div>
                  <span className={s.profileName}>{portfolioData.personal.name}</span>
                  <span className={s.profileTitle}>Software Engineer & Full-Stack Architect</span>
                  <span className={s.profileLoc}>Rawalpindi, Pakistan · Remote</span>
                </div>
              </div>

              <a href={`mailto:${portfolioData.personal.email}`} className={s.channel}>
                <div className={s.channelIcon}><MailIcon size={18} /></div>
                <div>
                  <span className={s.channelLabel}>Email</span>
                  <span className={s.channelVal}>{portfolioData.personal.email}</span>
                </div>
              </a>

              <a href={`tel:${portfolioData.personal.phoneClean}`} className={s.channel}>
                <div className={s.channelIcon}><PhoneIcon size={18} /></div>
                <div>
                  <span className={s.channelLabel}>Phone & WhatsApp</span>
                  <span className={s.channelVal}>{portfolioData.personal.phone}</span>
                </div>
              </a>

              <div className={s.channel}>
                <div className={s.channelIcon}><MapPinIcon size={18} /></div>
                <div>
                  <span className={s.channelLabel}>Location</span>
                  <span className={s.channelVal}>{portfolioData.personal.location}</span>
                </div>
              </div>

              <div className={s.socials}>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className={s.socialBtn}>
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className={s.socialBtn}>
                  <GitHubIcon size={16} /> GitHub
                </a>
              </div>
            </div>

            <ContactForm title="Send a Direct Inquiry" subtitle="Your message is delivered straight to my inbox via Resend." />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

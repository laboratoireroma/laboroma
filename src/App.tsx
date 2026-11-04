import React from "react";
import { TopNav } from "./components/TopNav";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { HomeCollectionSection } from "./components/HomeCollectionSection";
import { ConventionsSection } from "./components/ConventionsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { PracticalInfoSection } from "./components/PracticalInfoSection";
import { FaqFastingSection } from "./components/FaqFastingSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-800 selection:text-white">
      {/* Sticky Top Header */}
      <TopNav />

      {/* Main One-Page Content */}
      <main className="flex-1">
        {/* Hero Section with 3 Main Quick Action Buttons */}
        <HeroSection />

        {/* Key Medical Services & Analyses (Puces simples) */}
        <ServicesSection />

        {/* Dedicated Home Blood Sampling Section */}
        <HomeCollectionSection />

        {/* Conventions & Mutual Health Partners (CNSS, CNOPS, CMIM, Wafa, FOS-Halieutis) */}
        <ConventionsSection />

        {/* Verified Google Patient Reviews (No API key needed) */}
        <ReviewsSection />

        {/* Practical Information, Opening Hours, Contacts & Interactive Google Maps */}
        <PracticalInfoSection />

        {/* Fasting & Patient Preparation Advice (GEO/SEO optimization) */}
        <FaqFastingSection />
      </main>

      {/* Professional Medical Footer */}
      <Footer />

      {/* Sticky Mobile Quick-Action Thumb Bar (WhatsApp / Call / GPS) */}
      <MobileBottomBar />
    </div>
  );
}

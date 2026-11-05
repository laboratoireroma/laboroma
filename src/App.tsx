import React, { useState, useEffect } from "react";
import { TopNav } from "./components/TopNav";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { HomeCollectionSection } from "./components/HomeCollectionSection";
import { ConventionsSection } from "./components/ConventionsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { PracticalInfoSection } from "./components/PracticalInfoSection";
import { FaqFastingSection } from "./components/FaqFastingSection";
import { CandidaturePage } from "./components/CandidaturePage";
import { PartenariatPage } from "./components/PartenariatPage";
import { HelicobacterPyloriPage } from "./components/HelicobacterPyloriPage";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";

type RouteType = "home" | "recrutement" | "partenariat" | "sensibilisation-helicobacter";

function parseHash(hash: string): RouteType {
  const cleanHash = hash.replace(/^#\/?/, "").toLowerCase();
  if (cleanHash === "recrutement" || cleanHash === "candidature" || cleanHash === "candidatures") {
    return "recrutement";
  }
  if (cleanHash === "partenariat" || cleanHash === "partenariats" || cleanHash === "conventionnement" || cleanHash === "convention-partenariat") {
    return "partenariat";
  }
  if (
    cleanHash === "sensibilisation-helicobacter" ||
    cleanHash === "helicobacter" ||
    cleanHash === "helicobacter-pylori" ||
    cleanHash === "sante-gastrique" ||
    cleanHash === "sensibilisation"
  ) {
    return "sensibilisation-helicobacter";
  }
  return "home";
}

export default function App() {
  const [route, setRoute] = useState<RouteType>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = parseHash(window.location.hash);
      setRoute(nextRoute);

      if (nextRoute === "home" && window.location.hash) {
        // If it's an in-page section link (e.g. #services, #conventions)
        const elementId = window.location.hash.replace(/^#\/?/, "");
        const target = document.getElementById(elementId);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (newRoute: RouteType) => {
    if (newRoute === "recrutement") {
      window.location.hash = "#recrutement";
    } else if (newRoute === "partenariat") {
      window.location.hash = "#partenariat";
    } else if (newRoute === "sensibilisation-helicobacter") {
      window.location.hash = "#sensibilisation-helicobacter";
    } else {
      window.location.hash = "";
      setRoute("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-800 selection:text-white">
      {/* Sticky Top Header */}
      <TopNav currentRoute={route} onNavigate={navigateTo} />

      {/* Main Content Router */}
      <main className="flex-1">
        {route === "recrutement" ? (
          <CandidaturePage onBack={() => navigateTo("home")} />
        ) : route === "partenariat" ? (
          <PartenariatPage onBack={() => navigateTo("home")} />
        ) : route === "sensibilisation-helicobacter" ? (
          <HelicobacterPyloriPage onBack={() => navigateTo("home")} />
        ) : (
          <>
            {/* Hero Section with 3 Main Quick Action Buttons */}
            <HeroSection />

            {/* Key Medical Services & Analyses */}
            <ServicesSection />

            {/* Dedicated Home Blood Sampling Section */}
            <HomeCollectionSection />

            {/* Conventions & Mutual Health Partners (CNSS, CNOPS, CMIM, Wafa, FOS-Halieutis) */}
            <ConventionsSection />

            {/* Verified Google Patient Reviews via SociableKIT */}
            <ReviewsSection />

            {/* Practical Information, Opening Hours, Contacts & Interactive Google Maps */}
            <PracticalInfoSection />

            {/* Fasting & Patient Preparation Advice (GEO/SEO optimization) */}
            <FaqFastingSection />
          </>
        )}
      </main>

      {/* Professional Medical Footer with dedicated Espace Pro links */}
      <Footer onNavigate={navigateTo} />

      {/* Sticky Mobile Quick-Action Thumb Bar (WhatsApp / Call / GPS) */}
      <MobileBottomBar />
    </div>
  );
}

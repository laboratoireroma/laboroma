import React, { useState, useEffect } from "react";
import {
  LAB_CONTACT,
  getWhatsAppLink,
  getLabCurrentStatus,
  getActiveSpecialSchedules,
} from "../data/labInfo";
import { Phone, MessageSquare, MapPin, Briefcase, Handshake, Menu, X, HeartPulse, BookOpen } from "lucide-react";

interface TopNavProps {
  currentRoute?:
    | "home"
    | "recrutement"
    | "partenariat"
    | "sensibilisation-helicobacter"
    | "publications-scientifiques";
  onNavigate?: (
    route:
      | "home"
      | "recrutement"
      | "partenariat"
      | "sensibilisation-helicobacter"
      | "publications-scientifiques"
  ) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ currentRoute = "home", onNavigate }) => {
  const [labStatus, setLabStatus] = useState(getLabCurrentStatus());
  const [activeSpecialSchedules, setActiveSpecialSchedules] = useState(getActiveSpecialSchedules());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Update status every 60s
    const timer = setInterval(() => {
      setLabStatus(getLabCurrentStatus());
      setActiveSpecialSchedules(getActiveSpecialSchedules());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setMobileMenuOpen(false);
    if (target === "home") {
      if (onNavigate) {
        onNavigate("home");
      } else {
        window.location.hash = "";
      }
    } else if (target === "recrutement") {
      if (onNavigate) {
        onNavigate("recrutement");
      } else {
        window.location.hash = "#recrutement";
      }
    } else if (target === "partenariat") {
      if (onNavigate) {
        onNavigate("partenariat");
      } else {
        window.location.hash = "#partenariat";
      }
    } else if (target === "sensibilisation-helicobacter") {
      if (onNavigate) {
        onNavigate("sensibilisation-helicobacter");
      } else {
        window.location.hash = "#sensibilisation-helicobacter";
      }
    } else if (target === "publications-scientifiques" || target === "publications") {
      if (onNavigate) {
        onNavigate("publications-scientifiques");
      } else {
        window.location.hash = "#publications-scientifiques";
      }
    } else {
      // It's a section anchor like #services, #conventions
      if (currentRoute !== "home") {
        if (onNavigate) onNavigate("home");
        // Let the hash navigation take care of scrolling
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro-bar with schedule status & quick numbers on desktop */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  labStatus.isOpen ? "bg-emerald-400" : "bg-amber-400"
                }`}
              />
              <span className="font-medium text-slate-100">{labStatus.statusText}</span>
              <span className="text-slate-400">· {labStatus.subText}</span>
            </span>

            {activeSpecialSchedules.length > 0 && (
              <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30 text-[11px] font-medium">
                <span>
                  📅 Férié{activeSpecialSchedules.length > 1 ? "s" : ""} : Ouvert{" "}
                  {activeSpecialSchedules.length > 1
                    ? `les ${activeSpecialSchedules.map((s) => s.formattedDate.slice(0, 5)).join(" & ")}`
                    : `le ${activeSpecialSchedules[0].formattedDate.slice(0, 5)}`}{" "}
                  (08h30 – 14h00)
                </span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
              className="hover:text-white transition-colors flex items-center gap-1 font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{LAB_CONTACT.phoneLandline}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>{LAB_CONTACT.phoneMobile}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Zone 1: Single brand wordmark with logo */}
        <a
          href="#accueil"
          onClick={(e) => handleLinkClick(e, "home")}
          className="flex items-center gap-2.5 shrink-0 group"
        >
          <img
            src={LAB_CONTACT.logoPath}
            alt="Logo Laboratoire Roma"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform group-hover:scale-105"
            loading="eager"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap leading-tight">
              Laboratoire <span className="text-red-600">Roma</span>
            </span>
            <span className="text-[11px] text-teal-800 font-medium whitespace-nowrap hidden xs:inline">
              Casablanca · Dr MECHAL
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-slate-600">
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "#services")}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#domicile"
            onClick={(e) => handleLinkClick(e, "#domicile")}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            À domicile
          </a>
          <a
            href="#conventions"
            onClick={(e) => handleLinkClick(e, "#conventions")}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            Conventions
          </a>
          <a
            href="#avis"
            onClick={(e) => handleLinkClick(e, "#avis")}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            Avis
          </a>
          <a
            href="#horaires-acces"
            onClick={(e) => handleLinkClick(e, "#horaires-acces")}
            className="hover:text-teal-800 transition-colors whitespace-nowrap"
          >
            Horaires & Accès
          </a>

          {/* Sensibilisation & Santé : Helicobacter pylori */}
          <a
            href="#sensibilisation-helicobacter"
            onClick={(e) => handleLinkClick(e, "sensibilisation-helicobacter")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
              currentRoute === "sensibilisation-helicobacter"
                ? "bg-teal-50 text-teal-900 font-bold border border-teal-200/80"
                : "hover:text-teal-800 hover:bg-slate-100/80 text-emerald-800"
            }`}
          >
            <HeartPulse className="w-3.5 h-3.5 text-emerald-600" />
            <span>Santé : H. pylori</span>
          </a>

          {/* New Page: Recrutement */}
          <a
            href="#recrutement"
            onClick={(e) => handleLinkClick(e, "recrutement")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
              currentRoute === "recrutement"
                ? "bg-teal-50 text-teal-900 font-bold border border-teal-200/80"
                : "hover:text-teal-800 hover:bg-slate-100/80"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-teal-700" />
            <span>Recrutement</span>
          </a>

          {/* New Page: Partenariats */}
          <a
            href="#partenariat"
            onClick={(e) => handleLinkClick(e, "partenariat")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
              currentRoute === "partenariat"
                ? "bg-teal-50 text-teal-900 font-bold border border-teal-200/80"
                : "hover:text-teal-800 hover:bg-slate-100/80"
            }`}
          >
            <Handshake className="w-3.5 h-3.5 text-teal-700" />
            <span>Partenariats</span>
          </a>

          {/* New Page: Publications Scientifiques */}
          <a
            href="#publications-scientifiques"
            onClick={(e) => handleLinkClick(e, "publications-scientifiques")}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
              currentRoute === "publications-scientifiques"
                ? "bg-teal-50 text-teal-900 font-bold border border-teal-200/80"
                : "hover:text-teal-800 hover:bg-slate-100/80 text-teal-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-700" />
            <span>Recherche & Travaux</span>
          </a>
        </nav>

        {/* Zone 3: Quick Action Group & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={LAB_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            title="Itinéraire Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Itinéraire</span>
          </a>

          <a
            href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200/70 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-teal-700" />
            <span>05 22 28 51 60</span>
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, "#services")}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-900 transition-colors"
            >
              Services & Analyses
            </a>
            <a
              href="#domicile"
              onClick={(e) => handleLinkClick(e, "#domicile")}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-900 transition-colors"
            >
              À domicile
            </a>
            <a
              href="#conventions"
              onClick={(e) => handleLinkClick(e, "#conventions")}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-900 transition-colors"
            >
              Conventions & Mutuelles
            </a>
            <a
              href="#avis"
              onClick={(e) => handleLinkClick(e, "#avis")}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-900 transition-colors"
            >
              Avis Patients
            </a>
            <a
              href="#horaires-acces"
              onClick={(e) => handleLinkClick(e, "#horaires-acces")}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-900 transition-colors col-span-2"
            >
              Horaires & Accès au laboratoire
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
              Espace Professionnel & Carrières
            </div>

            <a
              href="#sensibilisation-helicobacter"
              onClick={(e) => handleLinkClick(e, "sensibilisation-helicobacter")}
              className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold transition-all ${
                currentRoute === "sensibilisation-helicobacter"
                  ? "bg-teal-800 text-white"
                  : "bg-emerald-50/70 hover:bg-emerald-100 text-emerald-950 border border-emerald-200/60"
              }`}
            >
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <div>
                <p className="font-bold">Santé : Helicobacter pylori</p>
                <p className="text-[10px] opacity-80 font-normal">Dépistage non invasif & Conseils bien-être</p>
              </div>
            </a>

            <a
              href="#recrutement"
              onClick={(e) => handleLinkClick(e, "recrutement")}
              className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold transition-all ${
                currentRoute === "recrutement"
                  ? "bg-teal-800 text-white"
                  : "bg-teal-50/70 hover:bg-teal-100 text-teal-900 border border-teal-200/60"
              }`}
            >
              <Briefcase className="w-4 h-4 text-teal-700" />
              <div>
                <p className="font-bold">Candidature spontanée</p>
                <p className="text-[10px] opacity-80 font-normal">Rejoindre l'équipe du Laboratoire Roma</p>
              </div>
            </a>

            <a
              href="#partenariat"
              onClick={(e) => handleLinkClick(e, "partenariat")}
              className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold transition-all ${
                currentRoute === "partenariat"
                  ? "bg-teal-800 text-white"
                  : "bg-teal-50/70 hover:bg-teal-100 text-teal-900 border border-teal-200/60"
              }`}
            >
              <Handshake className="w-4 h-4 text-teal-700" />
              <div>
                <p className="font-bold">Conventions & Partenariats</p>
                <p className="text-[10px] opacity-80 font-normal">Entreprises, mutuelles et cliniques</p>
              </div>
            </a>

            <a
              href="#publications-scientifiques"
              onClick={(e) => handleLinkClick(e, "publications-scientifiques")}
              className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-bold transition-all ${
                currentRoute === "publications-scientifiques"
                  ? "bg-teal-800 text-white"
                  : "bg-teal-50/70 hover:bg-teal-100 text-teal-900 border border-teal-200/60"
              }`}
            >
              <BookOpen className="w-4 h-4 text-teal-700" />
              <div>
                <p className="font-bold">Travaux & Publications Scientifiques</p>
                <p className="text-[10px] opacity-80 font-normal">Recherche du Dr MECHAL Youness</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

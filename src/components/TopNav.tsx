import React, { useState, useEffect } from "react";
import { LAB_CONTACT, getWhatsAppLink, getLabCurrentStatus } from "../data/labInfo";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export const TopNav: React.FC = () => {
  const [labStatus, setLabStatus] = useState(getLabCurrentStatus());

  useEffect(() => {
    // Update status every 60s
    const timer = setInterval(() => {
      setLabStatus(getLabCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

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

      {/* Main Top Bar matching Top Bar Contract */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Zone 1: Single brand wordmark with logo */}
        <a href="#accueil" className="flex items-center gap-2.5 shrink-0 group">
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

        {/* Zone 2: Navigation Links (single line, unboxed, subtle hover) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-teal-800 transition-colors whitespace-nowrap">
            Services
          </a>
          <a href="#domicile" className="hover:text-teal-800 transition-colors whitespace-nowrap">
            À domicile
          </a>
          <a href="#horaires-acces" className="hover:text-teal-800 transition-colors whitespace-nowrap">
            Horaires & Accès
          </a>
          <a href="#conseils" className="hover:text-teal-800 transition-colors whitespace-nowrap">
            Conseils jeûne
          </a>
        </nav>

        {/* Zone 3: Quick Action Group */}
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
        </div>
      </div>
    </header>
  );
};

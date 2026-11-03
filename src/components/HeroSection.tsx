import React from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import { MessageSquare, Phone, Navigation, Clock, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="accueil" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle background radial glow matching brand teal */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Top Doctor & Authority Trust Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-teal-800 mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-900">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Direction : {LAB_CONTACT.director}</span>
          </span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <span className="text-slate-600 hidden sm:inline">Biologiste Médical Spécialiste</span>
          <span className="hidden md:inline text-slate-300">·</span>
          <span className="text-slate-600 hidden md:inline">Casablanca (Angle 2 Mars / Rome)</span>
        </div>

        {/* 2-Column Split: Headline & Value Prop + Visual Brand Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Laboratoire d'Analyses Médicales <span className="text-teal-800">Roma</span> à{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-red-600">Casablanca</span>
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-red-100 -z-0 rounded" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Analyses médicales de pointe, rapides et fiables. Prélèvements sur place et à domicile.
              Équipements de dernière génération sous la supervision du {LAB_CONTACT.director}.
            </p>

            {/* Quick Unboxed Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600 pt-1">
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                <Clock className="w-4 h-4 text-teal-700" />
                <span>Sans RDV au laboratoire</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Résultats rapides par WhatsApp</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-800">
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>Prélèvements à domicile</span>
              </span>
            </div>

            {/* THE 3 ULTRA-VISIBLE MAIN ACTION BUTTONS */}
            <div className="pt-4 space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-slate-400 block">
                Contact immédiat en 1 clic
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* 1. WhatsApp Button */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                      Direct
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-emerald-100">Écrire sur</span>
                    <span className="block text-base sm:text-lg font-bold leading-tight">WhatsApp</span>
                    <span className="block text-xs font-mono text-emerald-100 mt-1">
                      {LAB_CONTACT.phoneMobile}
                    </span>
                  </div>
                </a>

                {/* 2. Phone Call Button */}
                <a
                  href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-teal-800 hover:bg-teal-900 text-white shadow-lg shadow-teal-850/20 hover:shadow-xl hover:shadow-teal-850/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                      Fixe
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-teal-100">Appeler le</span>
                    <span className="block text-base sm:text-lg font-bold leading-tight">Laboratoire</span>
                    <span className="block text-xs font-mono text-teal-100 mt-1">
                      {LAB_CONTACT.phoneLandline}
                    </span>
                  </div>
                </a>

                {/* 3. GPS Itinerary Button */}
                <a
                  href={LAB_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <Navigation className="w-5 h-5 text-teal-400" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full text-white">
                      GPS
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-300">Obtenir</span>
                    <span className="block text-base sm:text-lg font-bold leading-tight">L'itinéraire</span>
                    <span className="block text-xs text-slate-300 mt-1 truncate">
                      Angle Bd 2 Mars & Rome
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Anchor with Official Transparent Logo & Medical Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center">
              {/* Official Brand Logo */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center p-3 mb-4 rounded-2xl bg-slate-50 border border-slate-100">
                <img
                  src={LAB_CONTACT.logoPath}
                  alt="Laboratoire Roma Casablanca - Logo Officiel"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform hover:scale-105 duration-300"
                  width="208"
                  height="208"
                />
              </div>

              {/* Lab identity block */}
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-teal-800">
                  Laboratoire d'Analyses Médicales
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  ROMA <span className="text-red-600">CASABLANCA</span>
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Dirigé par le <span className="text-slate-800 font-bold">{LAB_CONTACT.director}</span>
                </p>
              </div>

              {/* Micro specs box */}
              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Horaires semaine</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">07h30 – 18h30</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] text-slate-500 block">Horaires samedi</span>
                  <span className="text-xs font-bold text-slate-900 font-mono">08h00 – 13h00</span>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-center gap-1.5 text-xs text-teal-800 font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span className="truncate">117 Angle Bd 2 Mars et Rue de Rome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

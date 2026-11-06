import React from "react";
import { LAB_SERVICES, getWhatsAppLink, getWhatsAppHomeCollectionLink } from "../data/labInfo";
import {
  Activity,
  Droplet,
  Dna,
  ShieldAlert,
  Bug,
  Home,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Microscope,
} from "lucide-react";

const getServiceIcon = (id: string) => {
  switch (id) {
    case "hematologie":
      return <Droplet className="w-5 h-5 text-red-600" />;
    case "biochimie":
      return <Activity className="w-5 h-5 text-teal-700" />;
    case "hormonologie":
      return <Dna className="w-5 h-5 text-teal-800" />;
    case "serologie":
      return <ShieldAlert className="w-5 h-5 text-teal-700" />;
    case "parasitologie":
      return <Bug className="w-5 h-5 text-amber-700" />;
    case "domicile":
      return <Home className="w-5 h-5 text-teal-800" />;
    case "urgences":
      return <AlertCircle className="w-5 h-5 text-red-600" />;
    default:
      return <Activity className="w-5 h-5 text-teal-700" />;
  }
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
            Expertise & Biologie Médicale
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Services & Analyses Clés
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Des équipements d'analyse modernes pour des résultats d'une grande fiabilité. Tous vos
            prélèvements sont réalisés dans le respect strict des normes d'hygiène et de sécurité.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LAB_SERVICES.map((service) => {
            const isSpecial = service.highlight;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-5 rounded-2xl transition-all duration-200 border ${
                  isSpecial
                    ? service.id === "urgences"
                      ? "bg-rose-50/50 border-rose-200/80 hover:border-rose-300"
                      : "bg-teal-50/40 border-teal-200/80 hover:border-teal-300"
                    : "bg-slate-50/60 border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center shrink-0 shadow-xs">
                      {getServiceIcon(service.id)}
                    </div>
                    {service.badge && (
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          service.id === "urgences"
                            ? "bg-red-100 text-red-800"
                            : "bg-teal-100 text-teal-800"
                        }`}
                      >
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3.5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points (puces simples) */}
                  <ul className="space-y-1.5 text-xs text-slate-700 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 1-Click WhatsApp Trigger for this specific service */}
                <div className="pt-3 border-t border-slate-200/60 mt-auto">
                  <a
                    href={
                      service.id === "domicile"
                        ? getWhatsAppHomeCollectionLink()
                        : getWhatsAppLink(
                            `Bonjour Laboratoire Roma, je souhaite avoir des renseignements concernant le service : ${service.name}.`
                          )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-teal-900 hover:text-teal-700 py-1 transition-colors group"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        {service.id === "domicile"
                          ? "Réserver à domicile sur WhatsApp"
                          : `Renseignements sur WhatsApp`}
                      </span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-teal-600 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Encadré d'information : Carte de Groupe Sanguin & Sécurité Transfusionnelle */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-700 shrink-0 mt-0.5">
              <Droplet className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 flex flex-wrap items-center gap-2">
                <span>Délivrance de la carte de groupe sanguin</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                  Sécurité Transfusionnelle
                </span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Conformément aux exigences réglementaires et médicales en vigueur concernant la sécurité transfusionnelle, l'établissement d'une carte de groupe sanguin définitive nécessite deux déterminations indépendantes réalisées par le laboratoire. Si vous ne disposez que d'une seule détermination à ce jour, une seconde réalisation sera nécessaire pour la délivrance de votre document final.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite faire établir ma carte de groupe sanguin définitive :")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs font-semibold hover:bg-slate-100 transition-colors shadow-2xs whitespace-nowrap self-start md:self-auto"
          >
            <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
            <span>Renseignements groupe sanguin</span>
          </a>
        </div>

        {/* Quick Prescription Send Box */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">
              Vous avez une ordonnance d'analyses médicales ?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Envoyez-nous simplement une photo sur WhatsApp. Nous vous confirmons immédiatement le
              tarif, la prise en charge et les consignes de jeûne.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Bonjour Laboratoire Roma, je vous transmets mon ordonnance médicale pour analyse :")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Envoyer mon ordonnance</span>
          </a>
        </div>

        {/* Authority Banner: Travaux & Publications Scientifiques du Dr MECHAL */}
        <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Microscope className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-900">
                  Recherche & Biologie Médicale
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-200/70 text-teal-900 font-mono">
                  Dr MECHAL Youness
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Travaux & Publications Scientifiques du Dr MECHAL Youness, Spécialiste en Biologie Médicale
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Publications internationales de référence : GeneXpert MTB/RIF (BMC Infectious Diseases), antibiorésistance hospitalière et communautaire (GERMS 2021) et hématologie clinique.
              </p>
            </div>
          </div>
          <a
            href="./publications-scientifiques/"
            onClick={(e) => {
              if (window.location.hash || window.location.pathname.endsWith("/")) {
                window.location.hash = "#publications-scientifiques";
              }
            }}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Voir toutes les publications scientifiques →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

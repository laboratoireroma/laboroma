import React from "react";
import { LAB_CONVENTIONS, getWhatsAppLink } from "../data/labInfo";
import { ShieldCheck, FileText, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export const ConventionsSection: React.FC = () => {
  return (
    <section id="conventions" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
            Prise en charge & Mutuelles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Organismes Conventionnés & Tiers Payant
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Le Laboratoire Roma facilite le remboursement de vos analyses et la prise en charge
            directe auprès de vos organismes de sécurité sociale et compagnies d'assurance santé.
          </p>
        </div>

        {/* Organizations Cards Grid with Official Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LAB_CONVENTIONS.map((conv) => (
            <div
              key={conv.id}
              className="flex flex-col justify-between p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-teal-300 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Official Organization Logo Container */}
                  <div className="w-24 h-16 sm:w-28 sm:h-18 p-1.5 bg-white rounded-xl border border-slate-200/90 shadow-xs flex items-center justify-center shrink-0">
                    <img
                      src={conv.logoUrl}
                      alt={`Logo officiel ${conv.name}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Coverage Tag */}
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${conv.badgeColor}`}
                  >
                    {conv.coverageTag}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {conv.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">· {conv.category}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 leading-snug">
                    {conv.fullName}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {conv.description}
                </p>
              </div>

              {/* Instant WhatsApp Verification Trigger */}
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <a
                  href={getWhatsAppLink(
                    `Bonjour Laboratoire Roma, je suis affilié(e) à ${conv.name}. Je souhaite vérifier la prise en charge de mes analyses :`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-teal-900 hover:text-teal-700 transition-colors group"
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-teal-700" />
                    <span>Vérifier ma prise en charge</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}

          {/* Plus card: Toutes autres mutuelles & assurances privées */}
          <div className="flex flex-col justify-between p-5 rounded-2xl bg-teal-50/50 border border-teal-200/80 hover:bg-teal-50 hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-24 h-16 sm:w-28 sm:h-18 p-1.5 bg-white rounded-xl border border-teal-200 flex items-center justify-center text-teal-800 shadow-xs shrink-0">
                  <ShieldCheck className="w-9 h-9 text-teal-700" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                  Toutes Assurances
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">
                  Autres Mutuelles & Compagnies
                </h3>
                <p className="text-xs text-teal-900 font-medium">
                  Saham / Sanlam, AXA, RMA, AtlantaSanad, etc.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Remplissage immédiat et soigné de vos feuilles de soins et bordereaux pour un
                remboursement rapide par votre assureur.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-teal-200/60">
              <a
                href={getWhatsAppLink(
                  "Bonjour Laboratoire Roma, je souhaite des informations sur le remboursement avec ma mutuelle :"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-xs font-semibold text-teal-900 hover:text-teal-700 transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Demander confirmation sur WhatsApp</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-600 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Reassuring Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              <strong>Feuilles de soins et attestations :</strong> Nous vous remettons tous les
              justificatifs nécessaires dès la remise des résultats.
            </span>
          </div>

          <a
            href={getWhatsAppLink(
              "Bonjour Laboratoire Roma, voici ma carte de mutuelle et mon ordonnance pour connaître la prise en charge :"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
          >
            <span>Envoyer ma carte mutuelle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { PRACTICAL_TIPS, getWhatsAppLink } from "../data/labInfo";
import { HelpCircle, MessageSquare, AlertTriangle, CheckCircle, Info } from "lucide-react";

export const FaqFastingSection: React.FC = () => {
  return (
    <section id="conseils" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
            Guide Patient & Préparation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Conseils pratiques & Jeûne
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Bien préparer votre prise de sang garantit des résultats fiables et précis. Voici les
            réponses aux questions les plus fréquentes.
          </p>
        </div>

        {/* 2 Fasting Highlight Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Analyses nécessitant un jeûne strict (10 à 12h)</span>
            </div>
            <p className="text-xs text-amber-950/80 leading-relaxed">
              Glycémie à jeun, Bilan lipidique (Cholestérol total, HDL, LDL, Triglycérides),
              Apolipoprotéines. Seule l'eau pure reste autorisée (pas de thé, café, lait, ni jus).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200/80 space-y-2">
            <div className="flex items-center gap-2 text-teal-900 font-bold text-sm">
              <CheckCircle className="w-4 h-4 text-teal-700 shrink-0" />
              <span>Analyses réalisables sans jeûne</span>
            </div>
            <p className="text-xs text-teal-950/80 leading-relaxed">
              Numération Formule Sanguine (NFS), Bilan thyroïdien (TSH), Bêta-HCG (test de grossesse),
              Sérologies (VIH, Hépatites, Toxoplasmose), Dosages des vitamines (Vitamine D).
            </p>
          </div>
        </div>

        {/* FAQ Accordion / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRACTICAL_TIPS.map((tip, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2 shadow-xs"
            >
              <div className="flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  {tip.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {tip.answer}
              </p>
            </div>
          ))}
        </div>

        {/* WhatsApp Consultation Prompt */}
        <div className="mt-8 text-center p-6 bg-white rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-800 shrink-0">
              <Info className="w-5 h-5 text-teal-700" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                Un doute sur une analyse spécifique ou un protocole particulier ?
              </p>
              <p className="text-xs text-slate-500">
                Notre équipe vous répond directement sur WhatsApp en quelques minutes.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("Bonjour, j'ai une question concernant la préparation pour mes analyses médicales :")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Poser une question sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

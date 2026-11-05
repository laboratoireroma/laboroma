import React, { useEffect, useRef } from "react";
import { LAB_CONTACT } from "../data/labInfo";
import { ArrowLeft, Briefcase, GraduationCap, Users, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

interface CandidaturePageProps {
  onBack: () => void;
}

export const CandidaturePage: React.FC<CandidaturePageProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Inject JotForm script dynamically if container exists
    const container = containerRef.current;
    if (container) {
      // Clear container in case of remount
      container.innerHTML = "";

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://form.jotform.com/jsform/263085467676067";
      script.async = true;
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation Breadcrumb & Back button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-800 hover:text-teal-950 transition-colors bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Retour à l'accueil</span>
          </button>

          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
            Laboratoire Roma · Espace Carrières
          </span>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5 text-teal-700" />
            <span>Recrutement & Talents</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Candidature Spontanée – Laboratoire Roma
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Vous souhaitez intégrer une équipe médicale dynamique, rigoureuse et humaine à
            Casablanca ? Déposez votre candidature spontanée pour rejoindre le Laboratoire d’Analyses
            Médicales Roma dirigé par le Dr MECHAL Youness.
          </p>

          {/* Profils recherchés */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Biologistes & Techniciens</h4>
                <p className="text-[11px] text-slate-500">Analyses médicales, hématologie, biochimie</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Infirmiers Préleveurs</h4>
                <p className="text-[11px] text-slate-500">Prélèvements sur place et à domicile</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Accueil & Secrétariat</h4>
                <p className="text-[11px] text-slate-500">Accueil patients, gestion des dossiers mutuelle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container with Official JotForm embed */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="mb-4 pb-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Formulaire de candidature en ligne
              </h2>
              <p className="text-xs text-slate-500">
                Remplissez les champs ci-dessous et joignez votre CV (PDF / Word).
              </p>
            </div>

            <a
              href="https://form.jotform.com/263085467676067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
            >
              <span>Ouvrir en plein écran</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* JotForm Dynamic Script Container */}
          <div
            ref={containerRef}
            className="w-full min-h-[500px] flex items-center justify-center"
          >
            {/* Fallback direct iframe in case JavaScript script execution is blocked by adblockers */}
            <iframe
              id="JotFormIFrame-263085467676067"
              title="Formulaire de candidature spontanée"
              src="https://form.jotform.com/263085467676067"
              style={{ minWidth: "100%", maxWidth: "100%", height: "820px", border: "none" }}
              scrolling="no"
              loading="lazy"
            />
          </div>
        </div>

        {/* Security & Confidentiality Notice */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            <strong>Confidentialité garantie :</strong> Vos données et documents transmis via ce
            formulaire sont strictement réservés à l'évaluation de votre candidature par la direction
            médicale du Laboratoire Roma et ne sont jamais communiqués à des tiers.
          </p>
        </div>
      </div>
    </div>
  );
};

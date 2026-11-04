import React, { useEffect } from "react";
import { GOOGLE_REVIEWS_INFO } from "../data/labInfo";
import { MessageSquarePlus, ExternalLink } from "lucide-react";

/**
 * Official 4-color Google "G" icon.
 */
const GoogleLogoSvg: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export const ReviewsSection: React.FC = () => {
  useEffect(() => {
    // Inject or re-trigger SociableKIT widget script
    const SCRIPT_ID = "sociablekit-google-reviews-script";
    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-trigger widget parsing if script already exists
      try {
        // @ts-expect-error SociableKit adds a global object or function
        if (window.sk_google_reviews && typeof window.sk_google_reviews === "function") {
          // @ts-expect-error global function
          window.sk_google_reviews();
        }
      } catch {
        // Ignore if not defined yet
      }
    }
  }, []);

  return (
    <section id="avis" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-2 shadow-xs">
              <GoogleLogoSvg className="w-3.5 h-3.5" />
              <span>Avis Google Maps Officiels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Avis de nos Patients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Consultez en direct les avis et évaluations authentiques déposés par nos patients sur
              notre fiche Google Maps.
            </p>
          </div>

          {/* Quick CTA to write review */}
          <a
            href={GOOGLE_REVIEWS_INFO.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow shrink-0 self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Donner votre avis</span>
          </a>
        </div>

        {/* SociableKIT Google Reviews Widget Container */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm min-h-[320px]">
          <div className="sk-ww-google-reviews" data-embed-id="25727386"></div>
        </div>

        {/* Footer CTAs */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <GoogleLogoSvg className="w-5 h-5 shrink-0" />
              <span>Vous avez effectué des analyses au Laboratoire Roma ?</span>
            </div>
            <p className="text-xs text-slate-500">
              Votre retour d'expérience compte énormément pour le Dr MECHAL Youness et toute son équipe.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={GOOGLE_REVIEWS_INFO.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm transition-all shadow-xs"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Laisser un avis sur Google</span>
            </a>

            <a
              href={GOOGLE_REVIEWS_INFO.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
            >
              <span>Voir la fiche Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

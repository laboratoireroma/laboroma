import React from "react";
import { PATIENT_REVIEWS, GOOGLE_REVIEWS_INFO } from "../data/labInfo";
import { Star, MessageSquarePlus, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

/**
 * Clean Google "G" icon strictly for the external review button affordance.
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
  return (
    <section id="avis" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header with Overall Patient Satisfaction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
              Confiance & Témoignages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Avis de nos Patients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Retours d'expérience de nos patients accueillis au laboratoire du quartier 2 Mars ou
              prélevés à domicile à Casablanca.
            </p>
          </div>

          {/* Rating Summary Card (Patient satisfaction, honest and clean) */}
          <div className="flex items-center gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-xs self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-extrabold text-slate-900 font-mono">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-[11px] text-teal-800 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-teal-600" />
                <span>Recommandé par nos patients</span>
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Review Header: Patient + Verified Patient Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${review.avatarBgColor} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {review.author}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {review.relativeTime}
                      </span>
                    </div>
                  </div>

                  {/* Clean Patient Verified Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-[11px] font-semibold text-teal-800 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Patient vérifié</span>
                  </div>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-400" aria-label="5 étoiles sur 5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Service Mentioned Tag */}
              {review.serviceMentioned && (
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-teal-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{review.serviceMentioned}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Elegant Action CTAs Section pointing to Google Maps Review Form */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-900 font-bold text-sm sm:text-base">
              <GoogleLogoSvg className="w-5 h-5 shrink-0" />
              <span>Vous avez été accueilli au Laboratoire Roma ?</span>
            </div>
            <p className="text-xs text-slate-500">
              Partagez votre avis sur notre fiche Google Maps pour aider d'autres patients à Casablanca.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={GOOGLE_REVIEWS_INFO.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm transition-all shadow-xs hover:shadow"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Laisser un avis sur Google Maps</span>
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

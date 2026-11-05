import React, { useEffect } from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import {
  ArrowLeft,
  Building2,
  Handshake,
  Mail,
  ShieldCheck,
  FileText,
  Clock,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

interface PartenariatPageProps {
  onBack: () => void;
}

export const PartenariatPage: React.FC<PartenariatPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            Direction Médicale : {LAB_CONTACT.emailDirection}
          </span>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-bold">
            <Handshake className="w-3.5 h-3.5 text-teal-700" />
            <span>Espace Partenariats & Conventions</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Demande de Conventionnement & Partenariat
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Vous représentez une entreprise, une mutuelle, une assurance, une fondation, une
            clinique ou un cabinet médical ? Établissez une convention médicale privilégiée avec le
            Laboratoire d'Analyses Médicales Roma dirigé par le Dr MECHAL Youness à Casablanca.
          </p>

          {/* Points forts de la convention */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Tiers Payant Simplifié</h4>
                <p className="text-[11px] text-slate-500">Prise en charge directe et tarification préférentielle</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Prélèvements sur Site</h4>
                <p className="text-[11px] text-slate-500">Déplacement en entreprise ou à domicile à Casablanca</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-teal-100/70 text-teal-800 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Résultats Prioritaires</h4>
                <p className="text-[11px] text-slate-500">Délais express et transmission sécurisée</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Form Embed Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200/90 shadow-sm overflow-hidden space-y-4">
          <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Formulaire officiel de demande de conventionnement
              </h2>
              <p className="text-xs text-slate-500">
                Remplissez le formulaire en ligne ci-dessous. Votre demande est transmise à la direction du laboratoire (
                <span className="font-mono text-teal-800 font-semibold">{LAB_CONTACT.emailDirection}</span>
                ).
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc60H9p2U5F-PXgYCgtNNNovLH9VuR-vJlVIgu2QuSmAl4Y4A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shrink-0"
              title="Ouvrir dans un nouvel onglet"
            >
              <span>Ouvrir en plein écran</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Official Google Form iframe */}
          <div className="w-full overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/70 flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc60H9p2U5F-PXgYCgtNNNovLH9VuR-vJlVIgu2QuSmAl4Y4A/viewform?embedded=true"
              title="Formulaire officiel de conventionnement et partenariat - Laboratoire Roma"
              width="100%"
              height="1965"
              className="w-full min-h-[1200px] sm:min-h-[1600px] md:min-h-[1965px] border-0"
              loading="lazy"
            >
              Chargement du formulaire de conventionnement…
            </iframe>
          </div>
        </div>

        {/* Direct Contact & Reassurance Box */}
        <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 justify-center sm:justify-start">
              <Mail className="w-4 h-4 text-teal-700" />
              <span>Contact direct direction médicale :</span>
            </div>
            <p className="text-xs text-slate-600 font-mono">
              {LAB_CONTACT.emailDirection} · Tél : {LAB_CONTACT.phoneLandline}
            </p>
          </div>

          <a
            href={getWhatsAppLink(
              "Bonjour Dr MECHAL Youness, je vous contacte pour un échange direct au sujet d'une demande de conventionnement / partenariat avec le Laboratoire Roma :"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>

        {/* Security & Response Guarantee */}
        <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 text-xs text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            <strong>Traitement institutionnel direct :</strong> Chaque demande de conventionnement est
            étudiée avec soin par la direction médicale du Laboratoire Roma. Un projet de convention
            personnalisé (tarifs conventionnés, protocoles de prélèvements sur site, bordereaux de
            facturation) vous est transmis dans les meilleurs délais.
          </p>
        </div>
      </div>
    </div>
  );
};

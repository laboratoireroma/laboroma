import React, { useState, useEffect } from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import {
  ArrowLeft,
  Building2,
  Handshake,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Clock,
  Sparkles,
  MessageSquare,
} from "lucide-react";

interface PartenariatPageProps {
  onBack: () => void;
}

export const PartenariatPage: React.FC<PartenariatPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    organisme: "",
    typeOrganisme: "Entreprise privée (salariés & cadres)",
    contactNom: "",
    contactFonction: "",
    email: "",
    telephone: "",
    nombreBeneficiaires: "",
    objet: "Convention de tiers payant & Tarifs préférentiels",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `[Convention / Partenariat] Demande de ${formData.organisme || "Partenaire"} - Laboratoire Roma`
    );

    const bodyContent =
      `Bonjour Dr MECHAL Youness et Direction du Laboratoire Roma,\n\n` +
      `Nous souhaitons vous soumettre une demande de conventionnement / partenariat avec votre laboratoire d'analyses médicales à Casablanca.\n\n` +
      `========================================\n` +
      `INFORMATIONS SUR L'ORGANISME\n` +
      `========================================\n` +
      `• Nom de l'organisme / Entreprise : ${formData.organisme}\n` +
      `• Type d'organisme : ${formData.typeOrganisme}\n` +
      `• Nombre approximatif de bénéficiaires : ${formData.nombreBeneficiaires || "Non précisé"}\n\n` +
      `========================================\n` +
      `INTERLOCUTEUR RESPONSABLE\n` +
      `========================================\n` +
      `• Nom et Prénom : ${formData.contactNom}\n` +
      `• Fonction / Poste : ${formData.contactFonction}\n` +
      `• E-mail : ${formData.email}\n` +
      `• Téléphone : ${formData.telephone}\n\n` +
      `========================================\n` +
      `DÉTAILS DU PARTENARIAT SOUHAITÉ\n` +
      `========================================\n` +
      `• Objet : ${formData.objet}\n` +
      `• Message / Besoins spécifiques :\n${formData.message}\n\n` +
      `Dans l'attente de votre retour,\n\n` +
      `Bien cordialement,\n` +
      `${formData.contactNom}\n` +
      `${formData.organisme}\n` +
      `${formData.telephone}`;

    const mailtoUrl = `mailto:${LAB_CONTACT.emailDirection}?subject=${subject}&body=${encodeURIComponent(
      bodyContent
    )}`;

    // Open mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppSummaryLink = () => {
    const summaryText =
      `Bonjour Dr MECHAL Youness, je vous contacte de la part de *${formData.organisme || "notre organisme"}* pour une demande de conventionnement / partenariat.\n\n` +
      `• Interlocuteur : ${formData.contactNom} (${formData.contactFonction})\n` +
      `• Téléphone : ${formData.telephone}\n` +
      `• E-mail : ${formData.email}\n` +
      `• Objet : ${formData.objet}\n\n` +
      `Demande également transmise sur directionlaboratoireroma@gmail.com.`;

    return getWhatsAppLink(summaryText);
  };

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
            clinique ou une association ? Établissez une convention médicale privilégiée avec le
            Laboratoire Roma pour la prise en charge de vos collaborateurs et adhérents.
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

        {/* Confirmation State if submitted */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-sm text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold text-slate-900">
                Votre demande de conventionnement a été préparée !
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le message a été pré-rempli pour envoi automatique à l'adresse de la direction médicale :{" "}
                <strong className="text-teal-900 font-mono">{LAB_CONTACT.emailDirection}</strong>.
              </p>
              <p className="text-xs text-slate-500">
                Le Dr MECHAL Youness et le secrétariat de direction examineront vos besoins et prendront
                contact avec vous sous 24 à 48 heures ouvrées.
              </p>
            </div>

            {/* Quick WhatsApp duplication button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppSummaryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmer également par WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
              >
                Modifier les informations
              </button>
            </div>
          </div>
        ) : (
          /* Partnership Request Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Formulaire officiel de demande de conventionnement
                </h2>
                <p className="text-xs text-slate-500">
                  Cette demande est transmise directement à la direction médicale (
                  <span className="font-mono text-teal-800 font-semibold">{LAB_CONTACT.emailDirection}</span>
                  ).
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Organisme & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="organisme" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nom de l'organisme / Raison sociale <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisme"
                    name="organisme"
                    required
                    value={formData.organisme}
                    onChange={handleChange}
                    placeholder="Ex: Société Marocaine de ..., Mutuelle ..., Clinique ..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="typeOrganisme" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Type d'organisme <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="typeOrganisme"
                    name="typeOrganisme"
                    value={formData.typeOrganisme}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all bg-white"
                  >
                    <option value="Entreprise privée (salariés & cadres)">Entreprise privée (salariés & cadres)</option>
                    <option value="Mutuelle / Organisme de prévoyance">Mutuelle / Organisme de prévoyance</option>
                    <option value="Compagnie d'assurance santé">Compagnie d'assurance santé</option>
                    <option value="Clinique / Cabinet médical / Professionnel de santé">Clinique / Cabinet médical</option>
                    <option value="Fondation / Œuvre sociale (FOS)">Fondation / Œuvre sociale (FOS)</option>
                    <option value="Association / ONG / Club">Association / Club</option>
                    <option value="Établissement scolaire / Universitaire">Établissement scolaire / Universitaire</option>
                    <option value="Autre type de structure">Autre type de structure</option>
                  </select>
                </div>
              </div>

              {/* Responsable & Fonction */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactNom" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nom et Prénom du responsable <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactNom"
                    name="contactNom"
                    required
                    value={formData.contactNom}
                    onChange={handleChange}
                    placeholder="Ex: M. Mohammed BERRADA"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contactFonction" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Fonction / Poste <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactFonction"
                    name="contactFonction"
                    required
                    value={formData.contactFonction}
                    onChange={handleChange}
                    placeholder="Ex: Directeur RH, Médecin du travail, Délégué mutuelle..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* E-mail & Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5">
                    E-mail professionnel <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@entreprise.ma"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Téléphone direct / Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX / 05 22 XX XX XX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Nombre de bénéficiaires & Objet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombreBeneficiaires" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Nombre estimé de bénéficiaires (salariés / adhérents)
                  </label>
                  <input
                    type="text"
                    id="nombreBeneficiaires"
                    name="nombreBeneficiaires"
                    value={formData.nombreBeneficiaires}
                    onChange={handleChange}
                    placeholder="Ex: 50 personnes, 250 adhérents, 1000+..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="objet" className="block text-xs font-bold text-slate-800 mb-1.5">
                    Objet principal de la convention
                  </label>
                  <select
                    id="objet"
                    name="objet"
                    value={formData.objet}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all bg-white"
                  >
                    <option value="Convention de tiers payant & Tarifs préférentiels">
                      Convention de tiers payant & Tarifs préférentiels
                    </option>
                    <option value="Bilan de santé annuel d'entreprise (Médecine du travail)">
                      Bilan de santé annuel d'entreprise (Médecine du travail)
                    </option>
                    <option value="Campagne de dépistage & Prélèvements sur site">
                      Campagne de dépistage & Prélèvements sur site
                    </option>
                    <option value="Partenariat clinique / Analyses spécialisées">
                      Partenariat clinique / Analyses spécialisées
                    </option>
                    <option value="Autre type de convention">Autre type de convention</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5">
                  Précisions sur vos attentes ou vos besoins <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez brièvement les examens souhaités, la localisation de votre structure, les modalités souhaitées (tiers payant, facturation fin de mois, prélèvement sur site...)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20 outline-none transition-all resize-y"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>
                    Destinataire direct :{" "}
                    <strong className="text-slate-700 font-mono">{LAB_CONTACT.emailDirection}</strong>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Préparation en cours..." : "Envoyer la demande de conventionnement"}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Security & Response Guarantee */}
        <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 text-xs text-slate-600">
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

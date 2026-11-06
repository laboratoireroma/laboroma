import React, { useState, useEffect } from "react";
import {
  LAB_CONTACT,
  LAB_SCHEDULE,
  LAB_ACCESSIBILITIES,
  LAB_PAYMENT_METHODS,
  getLabCurrentStatus,
  getActiveSpecialSchedules,
  getWhatsAppLink,
  SpecialSchedule,
} from "../data/labInfo";
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Car,
  Accessibility,
  Feather,
  DoorClosed,
  Banknote,
  Zap,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const getAccessibilityIcon = (type: string) => {
  switch (type) {
    case "car":
      return <Car className="w-5 h-5 text-teal-700" />;
    case "wheelchair":
      return <Accessibility className="w-5 h-5 text-teal-700" />;
    case "feather":
      return <Feather className="w-5 h-5 text-teal-700" />;
    case "restroom":
      return <DoorClosed className="w-5 h-5 text-teal-700" />;
    default:
      return <CheckCircle2 className="w-5 h-5 text-teal-700" />;
  }
};

const getPaymentIcon = (type: string) => {
  switch (type) {
    case "cash":
      return <Banknote className="w-5 h-5 text-emerald-600" />;
    case "instant":
      return <Zap className="w-5 h-5 text-amber-500" />;
    case "card":
      return <CreditCard className="w-5 h-5 text-blue-600" />;
    default:
      return <CreditCard className="w-5 h-5 text-teal-700" />;
  }
};

export const PracticalInfoSection: React.FC = () => {
  const [labStatus, setLabStatus] = useState(getLabCurrentStatus());
  const [activeSpecialSchedules, setActiveSpecialSchedules] = useState<SpecialSchedule[]>(() =>
    getActiveSpecialSchedules()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setLabStatus(getLabCurrentStatus());
      setActiveSpecialSchedules(getActiveSpecialSchedules());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="horaires-acces" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
            Informations pratiques & Accès
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Coordonnées, Horaires & Localisation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Idéalement situé sur le Boulevard 2 Mars à Casablanca, notre laboratoire vous accueille
            sans rendez-vous pour toutes vos prises de sang et examens de biologie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact cards & Detailed Schedule */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Status Pill */}
            <div
              className={`p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                labStatus.isOpen
                  ? "bg-emerald-50/70 border-emerald-200 text-emerald-950"
                  : "bg-amber-50/70 border-amber-200 text-amber-950"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full mt-1 shrink-0 ${
                  labStatus.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider block">
                  {labStatus.statusText}
                </span>
                <span className="text-xs opacity-90 leading-tight block mt-0.5">
                  {labStatus.subText}
                </span>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>Adresse du Laboratoire</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                {LAB_CONTACT.address}
              </p>
              <p className="text-xs text-slate-500">
                20250 Casablanca, Maroc (Quartier 2 Mars / Rome)
              </p>
              <div className="pt-2">
                <a
                  href={LAB_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Obtenir l'itinéraire direct</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Telephones Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="text-teal-800 text-xs font-bold uppercase tracking-wider">
                Lignes Téléphoniques Directes
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Landline */}
                <a
                  href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
                  className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-teal-400 transition-all flex flex-col group shadow-xs"
                >
                  <span className="text-[11px] text-slate-500 font-medium">Téléphone fixe</span>
                  <span className="text-sm font-bold font-mono text-teal-900 group-hover:text-teal-700">
                    {LAB_CONTACT.phoneLandline}
                  </span>
                  <span className="text-[10px] text-teal-700 font-medium mt-1">
                    Cliquer pour appeler
                  </span>
                </a>

                {/* WhatsApp / Mobile */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-slate-200/70 hover:border-emerald-400 transition-all flex flex-col group shadow-xs"
                >
                  <span className="text-[11px] text-slate-500 font-medium">WhatsApp / Mobile</span>
                  <span className="text-sm font-bold font-mono text-emerald-700 group-hover:text-emerald-800">
                    {LAB_CONTACT.phoneMobile}
                  </span>
                  <span className="text-[10px] text-emerald-600 font-medium mt-1">
                    Écrire sur WhatsApp
                  </span>
                </a>
              </div>
            </div>

            {/* Hours Schedule Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Horaires d'ouverture</span>
              </div>

              <div className="space-y-2 text-xs">
                {LAB_SCHEDULE.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-slate-200/50 last:border-0"
                  >
                    <span className="font-medium text-slate-700">{item.days}</span>
                    <span
                      className={`font-mono font-semibold ${
                        item.isClosed ? "text-slate-400 italic" : "text-slate-900"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Opening Hours Notice (Auto-hides once the holiday has passed) */}
              {activeSpecialSchedules.length > 0 && (
                <div className="mt-3 p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-950 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>Ouverture Jours Fériés (08h30 – 14h00)</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {activeSpecialSchedules.map((spec) => (
                      <div
                        key={spec.date}
                        className="flex items-center justify-between py-1 border-b border-amber-200/60 last:border-0 font-medium"
                      >
                        <span className="text-amber-900">
                          {spec.label} ({spec.occasion})
                        </span>
                        <span className="font-mono font-bold text-amber-950 bg-amber-100/80 px-2 py-0.5 rounded">
                          {spec.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-amber-800 leading-tight pt-0.5">
                    Le laboratoire vous accueille pour toutes vos analyses et prélèvements urgents en matinée continue.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed + Route Planner */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-4">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex flex-col min-h-[380px] sm:min-h-[440px]">
              {/* Map Header Overlay */}
              <div className="p-3.5 bg-white border-b border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 truncate">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-800 shrink-0">
                    <MapPin className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-bold text-slate-900 block truncate">
                      Angle Boulevard 2 Mars & Rue de Rome
                    </span>
                    <span className="text-[11px] text-slate-500 block truncate">
                      Casablanca, Maroc · Laboratoire Roma
                    </span>
                  </div>
                </div>

                <a
                  href={LAB_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Itinéraire</span>
                </a>
              </div>

              {/* Responsive Embedded Map */}
              <div className="relative flex-1 w-full h-[320px] sm:h-[380px]">
                <iframe
                  title="Carte Localisation Laboratoire Roma Casablanca"
                  src="https://maps.google.com/maps?q=117+Boulevard+2+Mars,+Casablanca,+Morocco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Quick Action Strip on Map */}
              <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <span className="text-slate-600 text-center sm:text-left">
                  Grand axe passant · Parking et taxis à proximité immédiate
                </span>
                <a
                  href={LAB_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Ouvrir sur l'application Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION ACCESSIBILITÉS DISPONIBLES --- */}
        <div id="accessibilites" className="pt-10 mt-6 border-t border-slate-200/80">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
              Confort & Prise en Charge
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Accessibilités disponibles
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Des aménagements conçus pour garantir un accueil digne, fluide, rassurant et accessible à tous les patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LAB_ACCESSIBILITIES.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/20 transition-all flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getAccessibilityIcon(item.iconType)}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-100/80 text-teal-900 border border-teal-200">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-teal-800 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.id === "cardrive" && (
                  <div className="pt-3 mt-3 border-t border-slate-200/60">
                    <a
                      href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite bénéficier d'un prélèvement en mode Cardrive devant le laboratoire :")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Prévenir avant d'arriver</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION MOYENS DE PAIEMENT DISPONIBLES --- */}
        <div id="moyens-de-paiement" className="mt-10 pt-8 border-t border-slate-200/80">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
              Règlement & Facturation
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Moyens de paiement disponibles
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Réglez vos analyses médicales en toute flexibilité selon le mode de paiement de votre choix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {LAB_PAYMENT_METHODS.map((method) => (
              <div
                key={method.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs">
                      {getPaymentIcon(method.iconType)}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {method.badge}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                    {method.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-teal-800 mb-2">
                    {method.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rappel Tiers Payant & Conventions */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-slate-50 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center text-teal-800 shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-teal-800" />
              </div>
              <div>
                <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                  Prise en charge directe & Tiers payant mutuelles
                </h5>
                <p className="text-xs text-slate-600 mt-0.5">
                  Conventionné CNSS (AMO), CNOPS, CMIM, Wafa Assurance et FOS-Halieutis. Remplissage immédiat des feuilles de soins pour toutes assurances complémentaires privées.
                </p>
              </div>
            </div>

            <a
              href="#conventions"
              className="shrink-0 px-4 py-2 rounded-xl bg-white border border-teal-200 hover:border-teal-300 text-teal-900 text-xs font-bold transition-colors shadow-2xs whitespace-nowrap"
            >
              Voir les mutuelles conventionnées
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

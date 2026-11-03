import React from "react";
import { LAB_CONTACT, getWhatsAppHomeCollectionLink } from "../data/labInfo";
import { Home, Calendar, Clock, MapPin, MessageSquare, Shield, Check } from "lucide-react";

export const HomeCollectionSection: React.FC = () => {
  return (
    <section id="domicile" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text & Steps */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-xs font-bold">
                <Home className="w-3.5 h-3.5" />
                <span>Service Confort & Mobilité</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Prélèvements à Domicile à Casablanca
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Vous ne pouvez pas vous déplacer ? Le Laboratoire Roma envoie un professionnel de santé
                qualifié directement chez vous ou sur votre lieu de travail, sur simple rendez-vous.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700">
                    Idéal pour séniors, femmes enceintes & convalescents
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700">
                    Respect strict des protocoles d'hygiène et chaîne du froid
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700">
                    Déplacements sur l'ensemble des quartiers de Casablanca
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700">
                    Résultats envoyés rapidement par WhatsApp ou e-mail
                  </span>
                </div>
              </div>

              {/* Direct Booking Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppHomeCollectionLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Réserver mon prélèvement sur WhatsApp</span>
                </a>

                <a
                  href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
                >
                  <span>Appeler le {LAB_CONTACT.phoneLandline}</span>
                </a>
              </div>
            </div>

            {/* Practical Card */}
            <div className="lg:col-span-5 bg-teal-900 text-white rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-teal-200 text-xs font-bold tracking-wider uppercase">
                <Shield className="w-4 h-4" />
                <span>Comment ça fonctionne ?</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-lg bg-teal-700 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Contactez-nous sur WhatsApp</h4>
                    <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                      Indiquez votre adresse à Casablanca et l'heure souhaitée le matin.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-lg bg-teal-700 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Prélèvement à domicile</h4>
                    <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                      Notre préleveur qualifié se déplace avec le matériel stérile et les contenants réfrigérés.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-lg bg-teal-700 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Résultats reçus en direct</h4>
                    <p className="text-xs text-teal-100/80 leading-relaxed mt-0.5">
                      Vos analyses sont traitées sans délai au laboratoire Roma et transmises sur votre WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-teal-800/80 flex items-center justify-between text-xs text-teal-200">
                <span>Casablanca & environs</span>
                <span className="font-mono font-bold text-white">06 10 27 57 85</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

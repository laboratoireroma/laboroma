import React from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import { Phone, MessageSquare, MapPin, Navigation, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Brand & Doctor */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LAB_CONTACT.logoPath}
                alt="Logo Laboratoire Roma"
                className="w-12 h-12 object-contain bg-white/10 rounded-xl p-1.5"
              />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Laboratoire d'Analyses Médicales <span className="text-red-500">Roma</span>
                </h3>
                <p className="text-xs text-teal-400 font-medium">Casablanca · Dr MECHAL Youness</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Laboratoire d'analyses de biologie médicale moderne à Casablanca. Analyses de pointe,
              résultats fiables et rapides. Prélèvements sur place et à domicile.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Conventions mutuelles acceptées · Tiers payant</span>
            </div>
          </div>

          {/* Contact & Lignes */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Coordonnées Directes
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{LAB_CONTACT.fullAddress}</span>
              </li>
              <li>
                <a
                  href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="font-mono">Fixe : {LAB_CONTACT.phoneLandline}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono">WhatsApp : {LAB_CONTACT.phoneMobile}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires & Liens rapides */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Horaires d'Ouverture
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300 font-mono">
              <p>
                <span className="text-slate-400 font-sans block">Du Lundi au Vendredi :</span>
                07h30 – 18h30 (continu)
              </p>
              <p className="pt-1">
                <span className="text-slate-400 font-sans block">Samedi :</span>
                08h00 – 13h00
              </p>
              <p className="pt-1 text-slate-400">Dimanche : Fermé</p>
            </div>

            <div className="pt-2">
              <a
                href={LAB_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Ouvrir l'itinéraire Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Laboratoire d'Analyses Médicales Roma Casablanca. Tous droits réservés.</p>
          <p>Direction Médicale : Dr MECHAL Youness</p>
        </div>
      </div>
    </footer>
  );
};

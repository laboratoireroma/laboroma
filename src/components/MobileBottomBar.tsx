import React from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import { MessageSquare, PhoneCall, Navigation } from "lucide-react";

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Actions rapides"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-2 py-2"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white shadow-sm transition-transform active:scale-95 text-center"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold leading-none tracking-tight">WhatsApp</span>
        </a>

        {/* Call Lab Button */}
        <a
          href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-teal-800 active:bg-teal-900 text-white shadow-sm transition-transform active:scale-95 text-center"
        >
          <PhoneCall className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold leading-none tracking-tight">Appeler</span>
        </a>

        {/* GPS Itinerary Button */}
        <a
          href={LAB_CONTACT.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 active:bg-slate-900 text-white shadow-sm transition-transform active:scale-95 text-center"
        >
          <Navigation className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold leading-none tracking-tight">Itinéraire</span>
        </a>
      </div>
    </aside>
  );
};

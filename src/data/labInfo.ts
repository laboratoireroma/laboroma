import logoImage from "../assets/logo_roma.png";

export interface LabHours {
  days: string;
  hours: string;
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
  isClosed?: boolean;
}

export const LAB_CONTACT = {
  name: "Laboratoire d'Analyses Médicales Roma",
  shortName: "Laboratoire Roma",
  director: "Dr MECHAL Youness",
  directorTitle: "Biologiste Médical – Directeur du Laboratoire",
  address: "117 Angle Boulevard 2 Mars et Rue de Rome",
  city: "Casablanca",
  country: "Maroc",
  postalCode: "20250",
  fullAddress: "117 Angle Boulevard 2 Mars et Rue de Rome, Casablanca, Maroc",
  phoneLandline: "05 22 28 51 60",
  phoneLandlineIntl: "+212522285160",
  phoneMobile: "06 10 27 57 85",
  phoneMobileIntl: "+212610275785",
  whatsappNumber: "+212610275785",
  whatsappCleanNumber: "212610275785",
  googleMapsUrl: "https://share.google/iJgpZK5giQyD4qahc",
  // Accurate coordinates at 117 Bd 2 Mars / Rue de Rome Casablanca
  coordinates: {
    lat: 33.5714,
    lng: -7.6186,
  },
  logoPath: logoImage,
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const defaultText = encodeURIComponent(
    customMessage ||
      "Bonjour Laboratoire Roma, je souhaite avoir un renseignement / prendre rendez-vous pour des analyses médicales."
  );
  return `https://wa.me/${LAB_CONTACT.whatsappCleanNumber}?text=${defaultText}`;
};

export const getWhatsAppHomeCollectionLink = (): string => {
  const text = encodeURIComponent(
    "Bonjour Dr MECHAL, je souhaite organiser un prélèvement à domicile à Casablanca avec le Laboratoire Roma. Voici mes coordonnées :"
  );
  return `https://wa.me/${LAB_CONTACT.whatsappCleanNumber}?text=${text}`;
};

export const getWhatsAppOrdonnanceLink = (): string => {
  const text = encodeURIComponent(
    "Bonjour Laboratoire Roma, je vous envoie mon ordonnance en photo pour connaître les conditions (jeûne éventuel, tarif, préparation) :"
  );
  return `https://wa.me/${LAB_CONTACT.whatsappCleanNumber}?text=${text}`;
};

export const LAB_SCHEDULE = [
  {
    days: "Lundi au Vendredi",
    hours: "07h30 – 18h30 (Journée continue)",
    openHour: 7,
    openMinute: 30,
    closeHour: 18,
    closeMinute: 30,
    isClosed: false,
  },
  {
    days: "Samedi",
    hours: "08h00 – 13h00",
    openHour: 8,
    openMinute: 0,
    closeHour: 13,
    closeMinute: 0,
    isClosed: false,
  },
  {
    days: "Dimanche",
    hours: "Fermé (Permanence WhatsApp active)",
    openHour: 0,
    openMinute: 0,
    closeHour: 0,
    closeMinute: 0,
    isClosed: true,
  },
];

export interface LabStatus {
  isOpen: boolean;
  statusText: string;
  subText: string;
}

/**
 * Calculates whether the lab is currently open according to Casablanca local time (Africa/Casablanca).
 */
export const getLabCurrentStatus = (): LabStatus => {
  try {
    const now = new Date();
    // Format to Casablanca time
    const casablancaString = now.toLocaleString("en-US", {
      timeZone: "Africa/Casablanca",
    });
    const casaDate = new Date(casablancaString);
    const day = casaDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = casaDate.getHours();
    const minutes = casaDate.getMinutes();
    const currentTotalMinutes = hours * 60 + minutes;

    // Sunday (0)
    if (day === 0) {
      return {
        isOpen: false,
        statusText: "Fermé le dimanche",
        subText: "Réouverture lundi dès 07h30 · WhatsApp disponible",
      };
    }

    // Saturday (6)
    if (day === 6) {
      const openMinutes = 8 * 60; // 08:00
      const closeMinutes = 13 * 60; // 13:00
      if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
        return {
          isOpen: true,
          statusText: "Ouvert actuellement",
          subText: `Ferme aujourd'hui à 13h00`,
        };
      } else if (currentTotalMinutes < openMinutes) {
        return {
          isOpen: false,
          statusText: "Fermé actuellement",
          subText: "Ouvre aujourd'hui à 08h00",
        };
      } else {
        return {
          isOpen: false,
          statusText: "Fermé",
          subText: "Réouverture lundi dès 07h30",
        };
      }
    }

    // Monday to Friday (1 - 5)
    const openMinutes = 7 * 60 + 30; // 07:30
    const closeMinutes = 18 * 60 + 30; // 18:30
    if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
      return {
        isOpen: true,
        statusText: "Ouvert actuellement",
        subText: `Ferme aujourd'hui à 18h30`,
      };
    } else if (currentTotalMinutes < openMinutes) {
      return {
        isOpen: false,
        statusText: "Fermé actuellement",
        subText: "Ouvre aujourd'hui à 07h30",
      };
    } else {
      return {
        isOpen: false,
        statusText: "Fermé pour la journée",
        subText: "Réouverture demain à 07h30",
      };
    }
  } catch {
    // Fallback if timezone not supported
    return {
      isOpen: true,
      statusText: "Ouvert du Lun. au Sam.",
      subText: "07h30 – 18h30 (Samedi 8h00 – 13h00)",
    };
  }
};

export interface ServiceItem {
  id: string;
  name: string;
  highlight?: boolean;
  badge?: string;
  description: string;
  details: string[];
}

export const LAB_SERVICES: ServiceItem[] = [
  {
    id: "hematologie",
    name: "Hématologie",
    description: "Étude et analyse complète des cellules sanguines et de la coagulation.",
    details: [
      "Numération Formule Sanguine (NFS / Hémogramme)",
      "Bilan d'hémostase & coagulation (TP, INR, TCA, Fibrinogène)",
      "Vitesse de sédimentation (VS) & Réticulocytes",
      "Électrophorèse de l'hémoglobine",
    ],
  },
  {
    id: "biochimie",
    name: "Biochimie Clinique",
    description: "Évaluation du fonctionnement métabolique, rénal, hépatique et cardiaque.",
    details: [
      "Glycémie à jeun & Hémoglobine glyquée (HbA1c)",
      "Bilan lipidique complet (Cholestérol Total, HDL, LDL, Triglycérides)",
      "Bilan rénal (Urée, Créatinine, Clairance, Acide urique)",
      "Bilan hépatique (Transaminases ASAT/ALAT, Gamma-GT, Bilirubine)",
      "Ionogramme sanguin & marqueurs cardiaques",
    ],
  },
  {
    id: "hormonologie",
    name: "Hormonologie & Vitamines",
    description: "Dosage précis des hormones endocriniennes et bilans nutritionnels.",
    details: [
      "Bilan thyroïdien complet (TSH ultra-sensible, T3 libre, T4 libre)",
      "Bilan de fertilité & hormones féminines/masculines (FSH, LH, Prolactine, AMH, Testostérone)",
      "Dosage des vitamines (Vitamine D 25-OH, Vitamine B12, Folates B9)",
      "Bilan martial (Fer sérique, Ferritine)",
    ],
  },
  {
    id: "serologie",
    name: "Sérologie & Immunologie",
    description: "Dépistage des infections virales, bactériennes et statut immunitaire.",
    details: [
      "Sérologies virales (Hépatites B et C, VIH 1 & 2)",
      "Bilan prénatal & de grossesse (Rubéole, Toxoplasmose)",
      "Syphilis (TPHA / VDRL)",
      "Marqueurs inflammatoires (CRP, Ferritine) & Auto-immunité",
    ],
  },
  {
    id: "parasitologie",
    name: "Parasitologie & Microbiologie",
    description: "Recherche des agents pathogènes parasitaires, bactériens et fongiques.",
    details: [
      "Examen Parasitologique des Selles (EPS)",
      "Examen Cytobactériologique des Urines (ECBU) & Antibiogramme",
      "Prélèvements mycologiques et bactériologiques",
      "Goutte épaisse & frottis sanguin",
    ],
  },
  {
    id: "domicile",
    name: "Prélèvements à Domicile",
    highlight: true,
    badge: "Sur Rendez-vous",
    description: "Prélèvement sanguin et biologique à votre domicile ou bureau à Casablanca.",
    details: [
      "Prise de sang chez vous par un personnel infirmier qualifié",
      "Idéal pour personnes âgées, femmes enceintes, convalescents",
      "Prise de rendez-vous rapide et simple via WhatsApp",
      "Résultats transmis par WhatsApp et disponibles en ligne",
    ],
  },
  {
    id: "urgences",
    name: "Analyses Médicales d'Urgence",
    highlight: true,
    badge: "Résultats Express",
    description: "Prise en charge immédiate pour vos examens prioritaires et bilans pré-opératoires.",
    details: [
      "Résultats rendus en priorité pour les bilans pré-opératoires",
      "Dosages urgents (Troponine, D-Dimères, CRP, NFS)",
      "Transmission immédiate au médecin traitant sur demande",
    ],
  },
];

export const PRACTICAL_TIPS = [
  {
    title: "Le jeûne est-il obligatoire ?",
    answer:
      "Un jeûne strict de 10 à 12 heures est indispensable pour le bilan lipidique (cholestérol, triglycérides) et la glycémie à jeun. Pour de nombreuses autres analyses (NFS, sérologies, b-HCG, etc.), le jeûne n'est pas nécessaire. L'eau reste autorisée.",
  },
  {
    title: "Quels documents apporter au laboratoire ?",
    answer:
      "Votre ordonnance médicale, votre pièce d'identité (CIN) et votre carte de mutuelle ou prise en charge d'assurance si applicable.",
  },
  {
    title: "Comment récupérer vos résultats ?",
    answer:
      "Vos résultats d'analyses sont disponibles directement au laboratoire ou envoyés de façon sécurisée par WhatsApp et e-mail dès validation biologique par le Dr MECHAL Youness.",
  },
  {
    title: "Comment réserver un prélèvement à domicile ?",
    answer:
      "Il vous suffit de nous écrire sur WhatsApp au 06 10 27 57 85 avec votre adresse à Casablanca et l'heure souhaitée. Nous confirmons immédiatement.",
  },
];

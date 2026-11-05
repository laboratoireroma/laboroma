import logoImage from "../assets/logo_roma.png";
import logoCnss from "../assets/conventions/cnss.png";
import logoCnops from "../assets/conventions/cnops.jpg";
import logoCmim from "../assets/conventions/cmim.png";
import logoWafa from "../assets/conventions/wafa.jpeg";
import logoFosHalieutis from "../assets/conventions/fos_halieutis.jpeg";

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
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJjQIsowDTpw0RawP9SCGuCFw",
  emailDirection: "directionlaboratoireroma@gmail.com",
  emailSecretariat: "secretariat.laboratoireroma@gmail.com",
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

export interface SpecialSchedule {
  date: string; // YYYY-MM-DD
  formattedDate: string; // "06-11-2026"
  label: string; // "Vendredi 6 Novembre 2026"
  occasion: string; // "Anniversaire de la Marche Verte"
  hours: string; // "08h30 – 14h00"
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
}

export const LAB_SPECIAL_SCHEDULES: SpecialSchedule[] = [
  {
    date: "2026-11-06",
    formattedDate: "06-11-2026",
    label: "Vendredi 6 Novembre 2026",
    occasion: "Marche Verte",
    hours: "08h30 – 14h00",
    openHour: 8,
    openMinute: 30,
    closeHour: 14,
    closeMinute: 0,
  },
  {
    date: "2026-11-18",
    formattedDate: "18-11-2026",
    label: "Mercredi 18 Novembre 2026",
    occasion: "Fête de l'Indépendance",
    hours: "08h30 – 14h00",
    openHour: 8,
    openMinute: 30,
    closeHour: 14,
    closeMinute: 0,
  },
];

/**
 * Returns only the holiday/special schedules that have not yet passed in Casablanca time.
 * Once a holiday passes (after its closing hour or once the date has passed), it is automatically filtered out.
 */
export const getActiveSpecialSchedules = (): SpecialSchedule[] => {
  try {
    const now = new Date();
    const casablancaString = now.toLocaleString("en-US", {
      timeZone: "Africa/Casablanca",
    });
    const casaDate = new Date(casablancaString);
    const currentYear = casaDate.getFullYear();
    const currentMonth = String(casaDate.getMonth() + 1).padStart(2, "0");
    const currentDate = String(casaDate.getDate()).padStart(2, "0");
    const currentYyyyMmDd = `${currentYear}-${currentMonth}-${currentDate}`;
    const currentMinutes = casaDate.getHours() * 60 + casaDate.getMinutes();

    return LAB_SPECIAL_SCHEDULES.filter((s) => {
      // Future date
      if (s.date > currentYyyyMmDd) {
        return true;
      }
      // Current date: active until closing time (14h00)
      if (s.date === currentYyyyMmDd) {
        const closeMinutes = s.closeHour * 60 + s.closeMinute;
        return currentMinutes < closeMinutes;
      }
      // Past date: expired / passed
      return false;
    });
  } catch {
    return LAB_SPECIAL_SCHEDULES;
  }
};

export interface LabScheduleItem {
  days: string;
  hours: string;
  openHour: number;
  openMinute: number;
  closeHour: number;
  closeMinute: number;
  isClosed?: boolean;
  isSpecial?: boolean;
}

export const LAB_SCHEDULE: LabScheduleItem[] = [
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
 * Calculates whether the lab is currently open according to Casablanca local time (Africa/Casablanca),
 * taking into account special opening hours on national holidays (06-11-2026 & 18-11-2026).
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

    const year = casaDate.getFullYear();
    const month = String(casaDate.getMonth() + 1).padStart(2, "0");
    const dateNum = String(casaDate.getDate()).padStart(2, "0");
    const yyyyMmDd = `${year}-${month}-${dateNum}`;

    // 1. Check for exceptional / special schedule (e.g. 06-11-2026 & 18-11-2026: 08h30 - 14h00)
    const specialToday = LAB_SPECIAL_SCHEDULES.find((s) => s.date === yyyyMmDd);
    if (specialToday) {
      const openMinutes = specialToday.openHour * 60 + specialToday.openMinute; // 08:30 -> 510
      const closeMinutes = specialToday.closeHour * 60 + specialToday.closeMinute; // 14:00 -> 840

      if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
        return {
          isOpen: true,
          statusText: `Ouvert actuellement (${specialToday.occasion})`,
          subText: `Ferme aujourd'hui à 14h00 (Horaires spéciaux : ${specialToday.hours})`,
        };
      } else if (currentTotalMinutes < openMinutes) {
        return {
          isOpen: false,
          statusText: `Fermé actuellement (${specialToday.occasion})`,
          subText: `Ouvre aujourd'hui à 08h30 (Ouvert de ${specialToday.hours})`,
        };
      } else {
        return {
          isOpen: false,
          statusText: "Fermé pour la journée",
          subText: "Fermé à 14h00 · Réouverture dès demain matin",
        };
      }
    }

    // 2. Sunday (0)
    if (day === 0) {
      return {
        isOpen: false,
        statusText: "Fermé le dimanche",
        subText: "Réouverture lundi dès 07h30 · WhatsApp disponible",
      };
    }

    // 3. Saturday (6)
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

    // 4. Monday to Friday (1 - 5)
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
      // Check if tomorrow has a special schedule
      const tomorrow = new Date(casaDate);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomYear = tomorrow.getFullYear();
      const tomMonth = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const tomDate = String(tomorrow.getDate()).padStart(2, "0");
      const tomYyyyMmDd = `${tomYear}-${tomMonth}-${tomDate}`;
      const specialTomorrow = LAB_SPECIAL_SCHEDULES.find((s) => s.date === tomYyyyMmDd);

      if (specialTomorrow) {
        return {
          isOpen: false,
          statusText: "Fermé pour la journée",
          subText: `Demain ${specialTomorrow.occasion} : ouvert de ${specialTomorrow.hours}`,
        };
      }

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

export interface PatientReview {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  comment: string;
  initials: string;
  avatarBgColor: string;
  verified: boolean;
  serviceMentioned?: string;
}

export const GOOGLE_REVIEWS_INFO = {
  overallRating: 5.0,
  reviewCount: 38,
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJjQIsowDTpw0RawP9SCGuCFw",
  placeId: "ChIJjQIsowDTpw0RawP9SCGuCFw",
};

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    author: "Karim Berrada",
    rating: 5,
    relativeTime: "Il y a 2 semaines",
    comment:
      "Laboratoire d'une propreté exemplaire au quartier 2 Mars. L'accueil par le personnel et le Dr Youness MECHAL est d'une grande bienveillance. Prise de sang sans aucune douleur, et j'ai reçu mes résultats complets par WhatsApp le jour même. Je recommande vivement !",
    initials: "KB",
    avatarBgColor: "bg-teal-700",
    verified: true,
    serviceMentioned: "Bilan sanguin complet & Résultats WhatsApp",
  },
  {
    id: "rev-2",
    author: "Fatima-Zahra El Amrani",
    rating: 5,
    relativeTime: "Il y a 1 mois",
    comment:
      "Service de prélèvement à domicile exceptionnel pour ma mère âgée. L'infirmière est arrivée pile à l'heure convenue, très douce, ponctuelle et professionnelle. Très pratique avec une prise de contact fluide sur WhatsApp.",
    initials: "FE",
    avatarBgColor: "bg-rose-700",
    verified: true,
    serviceMentioned: "Prélèvement à domicile Casablanca",
  },
  {
    id: "rev-3",
    author: "Driss Mansouri",
    rating: 5,
    relativeTime: "Il y a 1 mois",
    comment:
      "Prise en charge rapide pour un bilan pré-opératoire urgent. Résultats fiables transmis en priorité avec explications claires du médecin biologiste. Équipe très compétente et matériel de pointe.",
    initials: "DM",
    avatarBgColor: "bg-slate-800",
    verified: true,
    serviceMentioned: "Analyses d'urgence pré-opératoires",
  },
  {
    id: "rev-4",
    author: "Sara Chraibi",
    rating: 5,
    relativeTime: "Il y a 2 mois",
    comment:
      "Mon laboratoire de référence à Casablanca désormais. Facile d'accès à l'angle Bd 2 Mars et rue de Rome. Aucune attente, hygiène irréprochable et convention mutuelle bien gérée. Bravo au Dr Mechal !",
    initials: "SC",
    avatarBgColor: "bg-emerald-700",
    verified: true,
    serviceMentioned: "Biochimie & Prise en charge mutuelle",
  },
];

export interface LabConvention {
  id: string;
  name: string;
  fullName: string;
  category: string;
  badgeColor: string;
  accentColor: string;
  logoBg: string;
  logoUrl: string;
  description: string;
  coverageTag: string;
}

export const LAB_CONVENTIONS: LabConvention[] = [
  {
    id: "cnss",
    name: "CNSS",
    fullName: "Caisse Nationale de Sécurité Sociale",
    category: "Régime Général & AMO",
    badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
    accentColor: "#004B87",
    logoBg: "bg-white",
    logoUrl: logoCnss,
    description: "Prise en charge AMO et bordereaux de remboursement pour salariés du secteur privé et pensionnés.",
    coverageTag: "AMO & Prise en charge",
  },
  {
    id: "cnops",
    name: "CNOPS",
    fullName: "Caisse Nationale des Organismes de Prévoyance Sociale",
    category: "Secteur Public",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    accentColor: "#008450",
    logoBg: "bg-white",
    logoUrl: logoCnops,
    description: "Conventionnement et dossiers de remboursement pour fonctionnaires et agents des administrations.",
    coverageTag: "Tiers payant & CNOPS",
  },
  {
    id: "cmim",
    name: "CMIM",
    fullName: "Caisse Mutualiste Interprofessionnelle Marocaine",
    category: "Mutuelle Interprofessionnelle",
    badgeColor: "text-teal-700 bg-teal-50 border-teal-200",
    accentColor: "#0F766E",
    logoBg: "bg-white",
    logoUrl: logoCmim,
    description: "Conventionnement direct et prise en charge facilitée pour les adhérents des entreprises affiliées.",
    coverageTag: "Convention directe",
  },
  {
    id: "wafa",
    name: "Wafa Assurance",
    fullName: "Wafa Assurance Maroc",
    category: "Assurance Santé Privée",
    badgeColor: "text-red-700 bg-red-50 border-red-200",
    accentColor: "#C01424",
    logoBg: "bg-white",
    logoUrl: logoWafa,
    description: "Gestion des feuilles de soins et accords préalables pour assurance santé groupe et individuelle.",
    coverageTag: "Prise en charge directe",
  },
  {
    id: "fos-halieutis",
    name: "FOS - HALIEUTIS",
    fullName: "Fondation des Œuvres Sociales des Fonctionnaires des Pêches Maritimes",
    category: "Partenariat Conventionné",
    badgeColor: "text-cyan-800 bg-cyan-50 border-cyan-200",
    accentColor: "#0284C7",
    logoBg: "bg-white",
    logoUrl: logoFosHalieutis,
    description: "Convention préférentielle pour les adhérents et ayants droit de la Fondation FOS-Halieutis.",
    coverageTag: "Partenaire officiel",
  },
];

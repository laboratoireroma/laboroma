import React, { useEffect } from "react";
import {
  ArrowLeft,
  BookOpen,
  Award,
  ExternalLink,
  FileText,
  CheckCircle2,
  MessageSquare,
  Phone,
  ShieldCheck,
  Microscope,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";

interface PublicationsScientifiquesPageProps {
  onBack: () => void;
}

export const PublicationsScientifiquesPage: React.FC<PublicationsScientifiquesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation retour & Fil d'Ariane */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-teal-900 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Retour à l'accueil</span>
          </button>

          <nav aria-label="Fil d'Ariane" className="text-xs text-slate-500 font-medium">
            <span className="cursor-pointer hover:text-teal-800" onClick={onBack}>
              Accueil
            </span>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-800 font-semibold truncate">
              Travaux & Publications Scientifiques
            </span>
          </nav>
        </div>

        {/* En-tête H1 & Chapô de Positionnement */}
        <section className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-900 text-xs font-semibold mb-4">
            <Microscope className="w-4 h-4 text-teal-700" />
            <span>Biologie Médicale de Pointe & Recherche Clinique</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Travaux et Publications Scientifiques du <span className="text-teal-800">Dr MECHAL Youness</span>, Spécialiste en Biologie Médicale
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Directeur du <strong>Laboratoire d'Analyses Médicales Roma</strong> à Casablanca, le <strong>Dr MECHAL Youness</strong> met au service de la pratique quotidienne une solide expertise académique et hospitalière en microbiologie clinique, en diagnostic moléculaire des maladies infectieuses et en biochimie médicale. Ses travaux de recherche translationnelle, menés notamment en milieu hospitalo-universitaire au <strong>CHU Ibn Sina de Rabat</strong> et de l'<strong>Hôpital Militaire d'Instruction Mohammed V de Rabat</strong>, nourrissent directement le niveau d'exigence technique et la rigueur d'interprétation appliqués à chaque analyse réalisée pour nos patients.
          </p>
        </section>

        {/* Section Profil Scientifique & Affiliations */}
        <section className="mb-10 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-teal-700" />
            <span>Profil Scientifique & Affiliations Académiques</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Titre & Qualité Officielle
                </span>
                <p className="font-bold text-slate-900">Dr MECHAL Youness</p>
                <p className="text-teal-800 font-semibold text-xs sm:text-sm">
                  Spécialiste en Biologie Médicale · Biologiste Médical
                </p>
                <p className="text-slate-500 text-xs">
                  Directeur du Laboratoire d'Analyses Médicales Roma (Casablanca 2 Mars)
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Formation Hospitalo-Universitaire
                </span>
                <p className="text-slate-700 text-xs sm:text-sm leading-snug">
                  Formation hospitalo-universitaire au <strong>CHU Ibn Sina de Rabat</strong> et à l'<strong>Hôpital Militaire d'Instruction Mohammed V de Rabat</strong> · Faculté de Médecine et de Pharmacie de Rabat (FMP Rabat). Cursus d'approfondissement en management de la qualité en santé (Université de Bordeaux).
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Champs de Recherche Majeurs
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1 mt-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Diagnostic moléculaire rapide de la tuberculose extrapulmonaire (GeneXpert MTB/RIF).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Épidémiologie hospitalière et communautaire de l'antibiorésistance (BLSE, entérobactéries).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Hémoglobinopathies rares et hématopathologie diagnostique.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Maîtrise de la phase pré-analytique et validation de méthodes en biologie clinique.</span>
                  </li>
                </ul>
              </div>

              {/* Encadré ORCID */}
              <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal-200/70 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 block">
                    Identifiant chercheur international
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 block">
                    ORCID : 0000-0001-8147-6673
                  </span>
                </div>
                <a
                  href="https://orcid.org/0000-0001-8147-6673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors inline-flex items-center gap-1 shadow-2xs"
                >
                  <span>Vérifier sur ORCID</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section Publications Phares */}
        <section className="mb-12">
          <div className="mb-6">
            <span className="text-xs font-bold tracking-wider uppercase text-teal-800 block mb-1">
              Littérature Médicale Internationale
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Publications Scientifiques Phares (Revues à Comité de Lecture)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Articles originaux publiés dans des revues médicales indexées, examinés par des pairs et reconnus à l'échelle internationale.
            </p>
          </div>

          <div className="space-y-5">
            {/* Publication 1: GeneXpert MTB/RIF */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Article de référence · ~92 citations internationales
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central · examiné par les pairs</span>
                </span>
                <time dateTime="2019-12-05" className="text-xs font-mono font-medium text-slate-500">
                  5 Décembre 2019
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Evaluation of GeneXpert MTB/RIF system performances in the diagnosis of extrapulmonary tuberculosis
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-teal-800 italic">
                Évaluation des performances du système GeneXpert MTB/RIF dans le diagnostic de la tuberculose extrapulmonaire
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">BMC Infectious Diseases</strong> (Springer Nature) · 2019;19(1):1069
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.1186/s12879-019-4687-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI : 10.1186/s12879-019-4687-7
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/31856754/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID : 31856754
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6924089/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID : PMC6924089
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé vulgarisé :</strong> La tuberculose extrapulmonaire (ganglionnaire, pleurale, méningée) représente un défi diagnostique majeur en raison de sa faible charge bactérienne. Cette étude prospective de grande envergure menée au CHU Ibn Sina de Rabat a évalué la PCR en temps réel automatisée GeneXpert MTB/RIF sur divers prélèvements de tissus et liquides biologiques face aux méthodes conventionnelles. Les résultats ont démontré une sensibilité élevée et une spécificité excellente (jusqu'à 98 %), avec une rapidité décisive (résultats en 2 heures et détection simultanée de la résistance à la rifampicine), permettant d'instaurer précocement le traitement antituberculeux adapté.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.1186/s12879-019-4687-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Consulter l'article original (Springer Nature)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/31856754/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID: 31856754)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6924089/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PMC6924089</span>
                </a>
              </div>
            </article>

            {/* Publication 2: Multidrug-resistant community-acquired UTI */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  Infectiologie & Épidémiologie Clinique
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central · examiné par les pairs</span>
                </span>
                <time dateTime="2021-06-02" className="text-xs font-mono font-medium text-slate-500">
                  2 Juin 2021
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Multidrug-resistant community-acquired urinary tract infections in a northern region of Morocco: epidemiology and risk factors
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-teal-800 italic">
                Infections urinaires communautaires à bactéries multirésistantes dans le nord du Maroc : épidémiologie et facteurs de risque
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">GERMS</strong> (revue officielle de l'European Academy of HIV/AIDS and Infectious Diseases) · 2021;11(2):160-169
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.18683/germs.2021.1253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI : 10.18683/germs.2021.1253
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/34422688/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID : 34422688
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8373406/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID : PMC8373406
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé vulgarisé :</strong> Face à la dissémination croissante des entérobactéries productrices de bêta-lactamases à spectre élargi (BLSE) en ville, cette étude a caractérisé le profil de résistance bactérienne et les facteurs de risque chez des patients non hospitalisés consultant pour une infection urinaire dans le nord du Maroc. Ces données fournissent des repères précieux pour guider l'antibiothérapie probabiliste rationnelle et éviter l'échec thérapeutique au niveau ambulatoire.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.18683/germs.2021.1253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Accéder à l'article complet (DOI GERMS)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/34422688/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID: 34422688)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8373406/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PMC8373406</span>
                </a>
              </div>
            </article>

            {/* Publication 3: Update on E. coli resistance 7-year review */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  Surveillance de l'Antibiorésistance sur 7 Ans
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central · examiné par les pairs</span>
                </span>
                <time dateTime="2021-06-02" className="text-xs font-mono font-medium text-slate-500">
                  2 Juin 2021
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Update on the resistance of Escherichia coli isolated from urine specimens in a Moroccan hospital: a review of a 7-year period
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-teal-800 italic">
                Actualisation de la résistance d'Escherichia coli isolé d'échantillons urinaires dans un hôpital marocain : rétrospective sur 7 ans
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">GERMS</strong> (revue officielle de l'European Academy of HIV/AIDS and Infectious Diseases) · 2021;11(2):189-198
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.18683/germs.2021.1256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI : 10.18683/germs.2021.1256
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/34422691/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID : 34422691
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8373403/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID : PMC8373403
                  </a>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                <p>
                  <strong>Résumé vulgarisé :</strong> Étude rétrospective sur 7 ans (2012–2018) menée au Département de Bactériologie de l'Hôpital Militaire d'Instruction Mohammed V de Rabat, analysant la sensibilité aux antibiotiques des souches d'<em>Escherichia coli</em> isolées d'infections urinaires.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
                  <li><strong>Taux de résistance :</strong> 12 % aux céphalosporines de 3ᵉ génération (C3G), 1 % à l'imipénème, 34 % aux fluoroquinolones.</li>
                  <li><strong>Phénotype BLSE :</strong> 6,73 % en moyenne globale (en nette progression de 3 % en 2012 à 11,16 % en 2018) ; phénotype carbapénémase : 1,25 %.</li>
                  <li><strong>Profil épidémiologique :</strong> Différence statistiquement significative observée entre patients hospitalisés et patients ambulatoires (p &lt; 0,05) pour la majorité des molécules antibiotiques testées.</li>
                </ul>
                <p className="font-medium text-slate-800">
                  <strong>Conclusion clinique :</strong> Nécessité impérative de réviser la stratégie d'antibiothérapie probabiliste des infections urinaires et de s'appuyer systématiquement sur l'antibiogramme délivré par le laboratoire.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.18683/germs.2021.1256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Accéder à l'article complet (DOI GERMS)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/34422691/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Consulter la notice PubMed (PMID: 34422691)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8373403/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PubMed Central (PMC8373403)</span>
                </a>
              </div>
            </article>

            {/* Publication 4: Hemoglobinopathy C/beta° thalassemia */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  Hématologie & Hémoglobinopathies
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central · examiné par les pairs</span>
                </span>
                <time dateTime="2018-07" className="text-xs font-mono font-medium text-slate-500">
                  Juillet 2018
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Unexpected discovery of hemoglobinopathy C/β° thalassemia
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-teal-800 italic">
                Découverte inattendue d'une hémoglobinopathie composite C / β° thalassémie
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">Clinical Case Reports</strong> (Wiley) · 2018;6(7):1300-1304
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.1002/ccr3.1594"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI : 10.1002/ccr3.1594
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30013778/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID : 30013778
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6040854/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID : PMC6040854
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé vulgarisé :</strong> Description clinique et biologique d'un syndrome thalassémique composite rare associant le variant structural de l'hémoglobine C et une mutation bêta-zéro thalassémie. Cette publication met en évidence l'intérêt primordial d'une analyse rigoureuse de l'électrophorèse de l'hémoglobine et de la confrontation clinico-biologique pour éviter les erreurs d'orientation diagnostique dans les anémies microcytaires.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.1002/ccr3.1594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Consulter le cas clinique (Wiley DOI)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/30013778/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID: 30013778)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://scholar.google.com/scholar?q=Unexpected+discovery+of+hemoglobinopathy+C+thalassemia+Mechal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Lien Google Scholar</span>
                </a>
              </div>
            </article>

            {/* Publication 5: Sars-Cov-2 in Cell Cultures (2024) */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                  Virologie Médicale & Covid-19
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                  <span>Prépublication scientifique (Preprint)</span>
                </span>
                <time dateTime="2024" className="text-xs font-mono font-medium text-slate-500">
                  2024
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Isolation of Sars-Cov-2 in Cell Cultures Has Helped in Better Management of Covid-19 Patients During Hospitalization
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-teal-800 italic">
                L'isolement du SARS-CoV-2 en culture cellulaire a contribué à une meilleure prise en charge des patients Covid-19 hospitalisés
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">Prépublication SSRN / Elsevier</strong> · 2024
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <span>SSRN Electronic Journal</span>
                  <span>·</span>
                  <a
                    href="https://scholar.google.com/scholar?q=Isolation+of+Sars-Cov-2+in+Cell+Cultures+Has+Helped+in+Better+Management+of+Covid-19+Patients+During+Hospitalization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    Lien Google Scholar
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé vulgarisé :</strong> Travail explorant la corrélation entre la viabilité virale (démontrée par culture cellulaire) et l'évolution clinique des patients atteints de Covid-19 hospitalisés. L'isolement viral effectif a permis d'affiner la cinétique d'excrétion du virus et de mieux cibler les protocoles d'isolement et de surveillance des complications inflammatoires.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://scholar.google.com/scholar?q=Isolation+of+Sars-Cov-2+in+Cell+Cultures+Has+Helped+in+Better+Management+of+Covid-19+Patients+During+Hospitalization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Lien Google Scholar & Citations</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Section Autres Travaux & Communications Scientifiques */}
        <section className="mb-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-700" />
            <span>Autres Travaux, Études Cliniques & Communications</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mb-5">
            Contributions à des études de cohortes, à l'évaluation de méthodes analytiques et au management de la qualité pré-analytique en laboratoire :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {/* Travail G6PD */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="font-bold text-teal-800 uppercase">Hématologie Pédiatrique</span>
                <span>2019</span>
              </div>
              <h4 className="font-bold text-slate-900">Déficit en G6PD : Série de 54 cas</h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Étude descriptive de 54 cas de déficit enzymatique en Glucose-6-Phosphate Déshydrogénase, soulignant les circonstances diagnostiques (crises hémolytiques post-médicamenteuses ou post-favisme) et les seuils d'alerte biologique.
              </p>
            </div>

            {/* Travail Hémostase GEHT */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="font-bold text-teal-800 uppercase">Qualité & Coagulation</span>
                <span>2016</span>
              </div>
              <h4 className="font-bold text-slate-900">Non-conformités pré-analytiques en hémostase (GEHT)</h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Audit et application rigoureuse des recommandations du Groupe d'Étude sur l'Hémostase et la Thrombose (GEHT 2016) concernant les volumes de remplissage des tubes citratés, le ratio anticoagulant/sang et l'intégrité des prélèvements pour les bilans TP/INR et TCA.
              </p>
            </div>

            {/* Travail Validation automate Architect ci8200 */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="font-bold text-teal-800 uppercase">Biochimie Analytique</span>
                <span>Validation</span>
              </div>
              <h4 className="font-bold text-slate-900">Vérification de méthodes de dosage (PTHi 1-84, Glucose)</h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Vérification des performances analytiques selon les normes de métrologie biomédicale (répétabilité, reproductibilité, linéarité et comparaison de méthodes) pour la parathormone intacte et la glycémie sur l'analyseur automatisé de biochimie/immunologie Architect ci8200.
              </p>
            </div>

            {/* Travail Mycologie Trichosporon asahii */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1.5">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                <span className="font-bold text-teal-800 uppercase">Mycologie Médicale</span>
                <span>2014</span>
              </div>
              <h4 className="font-bold text-slate-900">Infection urinaire opportuniste à <em>Trichosporon asahii</em></h4>
              <p className="text-slate-600 leading-relaxed text-xs">
                Cas documenté dans le <em>Journal de Mycologie Médicale</em> rapportant l'isolement d'une levure fongique émergente opportuniste chez un patient à risque, avec profil de sensibilité antifongique détaillé.
              </p>
            </div>
          </div>
        </section>

        {/* Section Thèse de Doctorat */}
        <section className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-teal-950 text-white shadow-md space-y-3">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-teal-400" />
            <span>Thèse de Doctorat d'État en Pharmacie (2014)</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold leading-snug">
            « Détection du protozoaire <em>Entamoeba gingivalis</em> au niveau des poches parodontales »
          </h3>
          <p className="text-xs text-teal-300 font-mono">
            Faculté de Médecine et de Pharmacie de Rabat (FMP Rabat) · Université Mohammed V
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            Cette thèse de doctorat d'État a exploré par examen microscopique direct et techniques d'enrichissement la présence d'<em>Entamoeba gingivalis</em> chez des patients présentant des parodontopathies avancées. Ce travail pionnier a permis de corréler l'activité parasitaire à la sévérité du biofilm sous-gingival, fournissant des arguments diagnostiques utiles pour la dentisterie et la parodontologie clinique au Maroc.
          </p>
        </section>

        {/* Section Pourquoi cette expertise bénéficie à nos patients */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-50 via-white to-slate-50 border border-teal-200/90 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              <span>Rassurance & Valeur Médicale au Quotidien</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Pourquoi cette expertise scientifique bénéficie directement à nos patients ?
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Au <strong>Laboratoire Roma</strong>, la recherche scientifique n'est pas une simple théorie : elle constitue le socle direct de la sécurité et de la précision diagnostique de chaque examen. En tant que <strong>Spécialiste en Biologie Médicale</strong>, le Dr MECHAL Youness applique personnellement ces exigences :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-teal-100 shadow-2xs space-y-1.5">
                <span className="text-teal-800 font-bold text-xs block">1. Rigueur Pré-analytique</span>
                <p className="text-slate-600 text-xs leading-snug">
                  Contrôle strict des volumes de sang, du respect des tubes citratés pour l'hémostase et vérification scrupuleuse des délais de jeûne pour éliminer tout risque de faux résultat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-teal-100 shadow-2xs space-y-1.5">
                <span className="text-teal-800 font-bold text-xs block">2. Interprétation Biologique</span>
                <p className="text-slate-600 text-xs leading-snug">
                  Chaque anomalie biologique (anémie atypique, profil bactérien résistant, perturbation hormonale) fait l'objet d'une validation médicale personnalisée et approfondie.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-teal-100 shadow-2xs space-y-1.5">
                <span className="text-teal-800 font-bold text-xs block">3. Dialogue Confraternel</span>
                <p className="text-slate-600 text-xs leading-snug">
                  Communication directe avec les médecins traitants et spécialistes de Casablanca dès la survenue d'une valeur critique pour adapter sans délai la prise en charge du patient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Encadré Ressources Scientifiques & Liens Externes */}
        <section className="mb-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Ressources Scientifiques & Références Chercheur
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <a
              href="https://orcid.org/0000-0001-8147-6673"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block group-hover:text-teal-900">
                  Profil ORCID
                </span>
                <span className="text-[11px] font-mono text-slate-500">0000-0001-8147-6673</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
            </a>

            <a
              href="https://scholar.google.com/citations?user=0000-0001-8147-6673"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block group-hover:text-teal-900">
                  Google Scholar
                </span>
                <span className="text-[11px] text-slate-500">Citations & Travaux</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
            </a>

            <button
              onClick={onBack}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center justify-between group text-left"
            >
              <div>
                <span className="font-bold text-slate-900 block group-hover:text-teal-900">
                  Laboratoire Roma
                </span>
                <span className="text-[11px] text-slate-500">Bd 2 Mars Casablanca</span>
              </div>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
            </button>
          </div>
        </section>

        {/* Appel à l'Action & Contact Médical */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
              Accueil Médical Personnalisé
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Besoin d'un conseil ou d'une analyse médicale ?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Le Laboratoire Roma vous accueille au Boulevard 2 Mars à Casablanca sans rendez-vous pour vos analyses, avec service de prélèvement à domicile disponible sur simple demande.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={getWhatsAppLink(
                "Bonjour Laboratoire Roma, je consulte les publications scientifiques du Dr MECHAL et souhaite un renseignement médical :"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp : {LAB_CONTACT.phoneMobile}</span>
            </a>

            <a
              href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>Fixe : {LAB_CONTACT.phoneLandline}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

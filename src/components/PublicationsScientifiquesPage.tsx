import React, { useEffect } from "react";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Microscope,
  GraduationCap,
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
            <span>Biologie Médicale & Publications Scientifiques</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Travaux et Publications Scientifiques du <span className="text-teal-800">Dr MECHAL Youness</span>, Pharmacien biologiste
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Directeur du <strong>Laboratoire d'Analyses Médicales Roma</strong> à Casablanca, le <strong>Dr MECHAL Youness, Pharmacien biologiste (Ancien Interne au CHU Ibn Sina de Rabat)</strong>, met au service de la pratique quotidienne une solide expérience hospitalière en microbiologie clinique, en diagnostic des maladies infectieuses, en hématologie et en biochimie médicale, issue de son cursus à l'Hôpital Militaire d'Instruction Mohammed V de Rabat et au CHU Ibn Sina de Rabat.
          </p>
        </section>

        {/* Section Profil Scientifique & Affiliations */}
        <section className="mb-10 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-teal-700" />
            <span>Profil, Cursus Hospitalo-Universitaire & Distinctions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Direction du Laboratoire
                </span>
                <p className="font-bold text-slate-900 text-base">Dr MECHAL Youness</p>
                <p className="text-teal-800 font-bold text-xs sm:text-sm">
                  Pharmacien biologiste
                </p>
                {/* Numéro d'inscription à l'Ordre des pharmaciens : [À CONFIRMER PAR LE DR MECHAL] */}
                <p className="text-slate-500 text-xs">
                  Directeur du Laboratoire d'Analyses Médicales Roma (Casablanca 2 Mars)
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Titres & Diplômes Universitaires
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>
                      <strong>Doctorat en Pharmacie</strong>, Faculté de Médecine et de Pharmacie de Rabat – Université Mohammed V (thèse soutenue en 2014 : <em>« Détection du protozoaire Entamoeba gingivalis au niveau des poches parodontales »</em>). <strong>Ancien Interne au CHU Ibn Sina de Rabat</strong> pendant ce cursus.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>
                      <strong>DSM en Biologie Médicale</strong> (Diplôme de Spécialité Médicale), Université Mohammed V de Rabat, 2015-2019.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>
                      <strong>Diplôme Universitaire en Management de la Qualité (MQPAS)</strong>, Université de Bordeaux, 2018.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Affiliations & Sociétés Savantes
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span><strong>Ancien Interne au CHU Ibn Sina de Rabat</strong>.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span><strong>Hôpital Militaire d’Instruction Mohammed V de Rabat</strong> (département de bactériologie).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span><strong>Faculté de Médecine et de Pharmacie de Rabat</strong> – Université Mohammed V.</span>
                  </li>
                  {/* Société savante : Membre de la Société Marocaine de Microbiologie Médicale (SMAMM) [À CONFIRMER PAR LE DR MECHAL] */}
                </ul>
              </div>

              {/* Distinction : Prix du meilleur poster scientifique (2016) – Moroccan Society of Clinical Chemistry [À CONFIRMER PAR LE DR MECHAL] */}
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Domaines de Travaux & Recherche
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Diagnostic moléculaire de la tuberculose extrapulmonaire (système GeneXpert MTB/RIF).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Surveillance de la résistance d'<em>Escherichia coli</em> en milieu hospitalier.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Infections urinaires communautaires à bactéries multirésistantes et facteurs de risque.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Découverte fortuite d'hémoglobinopathie composite C / β° thalassémie lors du dosage de l'HbA1c.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-700 font-bold">•</span>
                    <span>Microbiologie clinique, infectiologie moléculaire, hématologie, biochimie et management de la qualité en santé.</span>
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
              Publications Scientifiques Indexées
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Publications Scientifiques (Revues à Comité de Lecture)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Articles originaux publiés dans des revues médicales indexées et vérifiés sur PubMed / DOI.
            </p>
          </div>

          <div className="space-y-5">
            {/* Publication A: GeneXpert MTB/RIF */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                  Premier auteur
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central</span>
                </span>
                <time dateTime="2019-12-19" className="text-xs font-mono font-medium text-slate-500">
                  19 Décembre 2019
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Evaluation of GeneXpert MTB/RIF system performances in the diagnosis of extrapulmonary tuberculosis
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                <strong>Auteurs :</strong> Mechal Y, Benaissa E, El mrimar N, Benlahlou Y, Bssaibis F, Zegmout A, Chadli M, Malik YS, Touil N, Abid A, Maleb A, Elouennass M.
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">BMC Infect Dis</strong> · 2019;19(1):1069
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.1186/s12879-019-4687-7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI 10.1186/s12879-019-4687-7
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/31856744/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID 31856744
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6924055/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID PMC6924055
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé :</strong> Étude rétrospective de 21 mois portant sur 714 prélèvements (285 pulmonaires, 429 extrapulmonaires) ; sensibilité d'environ 78-79 % et spécificité d'environ 90 % du GeneXpert MTB/RIF par rapport à la culture ; taux de résistance à la rifampicine de 0,84 %, concordance de 100 % avec GenoType MTBDRplus.
              </p>
              <p className="text-xs text-slate-500">
                <strong>Lieu de l'étude :</strong> Hôpital militaire d’instruction Mohammed V, Rabat ; CHU Ibn Sina, Rabat.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.1186/s12879-019-4687-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Article complet (DOI)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/31856744/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID 31856744)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6924055/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PMC6924055</span>
                </a>
              </div>
            </article>

            {/* Publication B: E. coli resistance 7-year review */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                  4e auteur
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central</span>
                </span>
                <time dateTime="2021-06-02" className="text-xs font-mono font-medium text-slate-500">
                  2 Juin 2021
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Update on the resistance of Escherichia coli isolated from urine specimens in a Moroccan hospital: a review of a 7-year period
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                <strong>Auteurs :</strong> Benaissa E, Elmrimar N, Belouad E, Mechal Y (4e auteur), Ghazouani M, Bsaibiss F, Benlahlou Y, Chadli M, Touil N, Lemnaouer A, Maleb A, Elouennass M.
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">GERMS</strong> · 2021;11(2):189-198
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.18683/germs.2021.1256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI 10.18683/germs.2021.1256
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/34422691/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID 34422691
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8373403/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID PMC8373403
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé :</strong> Étude rétrospective 2012-2018, département de bactériologie de l'Hôpital militaire d'instruction Mohammed V, Rabat. Résistance de E. coli : 12 % aux C3G, 1 % à l'imipénème, 34 % aux fluoroquinolones.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.18683/germs.2021.1256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Article complet (DOI)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/34422691/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID 34422691)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8373403/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PMC8373403</span>
                </a>
              </div>
            </article>

            {/* Publication C: Multidrug-resistant community-acquired UTI */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                  3e auteur
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central</span>
                </span>
                <time dateTime="2021-12-29" className="text-xs font-mono font-medium text-slate-500">
                  29 Décembre 2021
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Multidrug-resistant community-acquired urinary tract infections in a northern region of Morocco: epidemiology and risk factors
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                <strong>Auteurs :</strong> Benaissa E, Belouad E, Mechal Y (3e auteur), Benlahlou Y, Chadli M, Maleb A, Elouennass M.
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">GERMS</strong> · 2021;11(4):562-569
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.18683/germs.2021.1291"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI 10.18683/germs.2021.1291
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/35096673/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID 35096673
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8789347/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID PMC8789347
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé :</strong> Étude épidémiologique sur les infections urinaires communautaires à bactéries multirésistantes dans le nord du Maroc et analyse des facteurs de risque. Pagination : 562-569.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.18683/germs.2021.1291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Article complet (DOI)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/35096673/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID 35096673)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8789347/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PMC8789347</span>
                </a>
              </div>
            </article>

            {/* Publication D: Hemoglobinopathy C/beta° thalassemia */}
            <article className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 transition-all shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  5e auteur
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Article indexé PubMed Central</span>
                </span>
                <time dateTime="2018-11" className="text-xs font-mono font-medium text-slate-500">
                  Novembre 2018
                </time>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                Unexpected discovery of hemoglobinopathy C/β° thalassemia
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                <strong>Auteurs :</strong> Bouyarmane W, Uwingabiye J, Biaz A, Rachid A, Mechal Y (5e auteur), Dami A, Bouhsain S, Ouzzif Z, El Machtani Idrissi S.
              </p>

              <div className="text-xs text-slate-600 space-y-1">
                <div>
                  Revue : <strong className="text-slate-900 font-semibold">Clin Case Rep</strong> · 2018;6(11):2117-2120
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-500 font-mono text-[11px]">
                  <a
                    href="https://doi.org/10.1002/ccr3.1815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    DOI 10.1002/ccr3.1815
                  </a>
                  <span>·</span>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/30455903/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMID 30455903
                  </a>
                  <span>·</span>
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6230608/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-800 hover:text-teal-950 font-semibold underline decoration-teal-300"
                  >
                    PMCID PMC6230608
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Résumé :</strong> Service de biochimie clinique et toxicologie, Hôpital militaire d'instruction Mohammed V, Rabat. Cas d'un patient de 53 ans, découverte fortuite lors d'un dosage d'HbA1c par HPLC.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-slate-100">
                <a
                  href="https://doi.org/10.1002/ccr3.1815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                >
                  <span>Article complet (DOI)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/30455903/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Notice PubMed (PMID 30455903)</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6230608/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Texte intégral PMC6230608</span>
                </a>
              </div>
            </article>
          </div>

          {/* Mention obligatoire sous la liste */}
          <div className="mt-8 p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>Références vérifiées sur PubMed / DOI. ORCID : 0000-0001-8147-6673.</span>
            <a
              href="https://orcid.org/0000-0001-8147-6673"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-teal-800 hover:text-teal-950 underline inline-flex items-center gap-1"
            >
              <span>Accéder au profil ORCID</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* [À CONFIRMER PAR LE DR MECHAL] Prépublication SSRN 2024 (Isolation of Sars-Cov-2 in Cell Cultures) */}
        {/* [À CONFIRMER PAR LE DR MECHAL : DOI, lien ou référence complète requis pour les travaux suivants]
             - Déficit en G6PD : Série de 54 cas (2019)
             - Non-conformités pré-analytiques en hémostase (GEHT 2016)
             - Vérification de méthodes de dosage : PTHi 1-84, Glucose sur Architect ci8200
             - Infection urinaire à Trichosporon asahii (Journal de Mycologie Médicale, 2014)
        */}

        {/* Section Équipement & Contrôle Qualité au Laboratoire Roma */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              <span>Plateau Technique & Rigueur Analytique</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Plateau technique & politique de contrôle qualité rigoureuse
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Le Laboratoire d'Analyses Médicales Roma dispose d'équipements récents pour la <strong>Biochimie</strong>, l'<strong>Hématologie</strong> ainsi que l'<strong>Immuno-analyse</strong>, associé à une politique de <strong>contrôle qualité rigoureuse</strong> (contrôles internes quotidiens et évaluations externes de la qualité) visant à garantir la fiabilité et la traçabilité de chaque analyse.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-1.5">
                <span className="text-teal-800 font-bold text-xs block">Biochimie Clinique</span>
                <p className="text-slate-600 text-xs leading-snug">
                  Automates récents assurant les bilans métaboliques, rénaux, hépatiques et lipidiques avec une grande précision analytique.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-1.5">
                <span className="text-teal-800 font-bold text-xs block">Hématologie & Hémostase</span>
                <p className="text-slate-600 text-xs leading-snug">
                  Compteurs de cellules et analyseurs de coagulation récents pour numérations (NFS), bilans d'hémostase (TP/INR, TCA) et immuno-hématologie.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-1.5">
                <span className="text-teal-800 font-bold text-xs block">Immuno-analyse & Sérologie</span>
                <p className="text-slate-600 text-xs leading-snug">
                  Systèmes automatisés d'immuno-analyse pour les dosages hormonaux (thyroïde, fertilité), vitaminiques et sérologies infectieuses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Encadré Ressources & Références Chercheur */}
        <section className="mb-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Ressources & Références
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <a
              href="https://orcid.org/0000-0001-8147-6673"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center justify-between group"
            >
              <div>
                <span className="font-bold text-slate-900 block group-hover:text-teal-900">
                  Profil ORCID Officiel
                </span>
                <span className="text-[11px] font-mono text-slate-500">0000-0001-8147-6673</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
            </a>

            <button
              onClick={onBack}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/30 transition-all flex items-center justify-between text-left group"
            >
              <div>
                <span className="font-bold text-slate-900 block group-hover:text-teal-900">
                  Laboratoire d'Analyses Médicales Roma
                </span>
                <span className="text-[11px] text-slate-500">
                  117 Angle Bd 2 Mars & Rue de Rome, Casablanca
                </span>
              </div>
              <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-teal-700 transition-colors" />
            </button>
          </div>
        </section>

        {/* Appel à l'Action & Contact Médical */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
              Accueil & Prélèvements
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">Besoin d'un renseignement ou d'une analyse médicale ?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Le Laboratoire Roma vous accueille au 117 Angle Boulevard 2 Mars et Rue de Rome à Casablanca sans rendez-vous, avec service de prélèvement à domicile disponible.
            </p>
            <p className="text-[11px] text-slate-400">
              La transmission d'ordonnances ou de documents médicaux via WhatsApp implique l'acceptation des conditions d'utilisation de cette plateforme tierce.
            </p>
            <p className="text-[11px] text-amber-300">
              En cas d'urgence médicale vitale, contactez immédiatement le SAMU (15) ou la Protection Civile (141).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite un renseignement sur des analyses médicales :")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
            >
              <span>WhatsApp : {LAB_CONTACT.phoneMobile}</span>
            </a>

            <a
              href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <span>Fixe : {LAB_CONTACT.phoneLandline}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

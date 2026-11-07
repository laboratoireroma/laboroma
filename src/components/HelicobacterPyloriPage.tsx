import React, { useEffect } from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import {
  ArrowLeft,
  HeartPulse,
  AlertTriangle,
  CheckCircle2,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  ShieldCheck,
  FileText,
  UserCheck,
  Info,
} from "lucide-react";

interface HelicobacterPyloriPageProps {
  onBack: () => void;
}

export const HelicobacterPyloriPage: React.FC<HelicobacterPyloriPageProps> = ({ onBack }) => {
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
            Espace Sensibilisation & Santé Préventive
          </span>
        </div>

        {/* Article Container */}
        <article className="space-y-10">

          {/* 1. Header & Titre H1 */}
          <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <HeartPulse className="w-4 h-4 text-emerald-600" />
              <span>Santé Gastrique & Bien-être Digestif</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Écouter son estomac et retrouver un confort digestif durable : Comprendre et dépister la bactérie <span className="text-teal-800">Helicobacter pylori</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Pesanteur après les repas, brûlures d'estomac passagères, ballonnements récurrents... Il arrive souvent que notre digestion nous envoie des signaux discrets mais persistants. Dans certains cas, ces symptômes peuvent être liés à <em>Helicobacter pylori</em>, mais d'autres causes sont fréquentes. Loin de toute dramatisation, comprendre son rôle est la toute première étape pour dialoguer sereinement avec votre médecin traitant et retrouver une véritable légèreté au quotidien.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-teal-700" />
                <span>Direction Médicale : <strong>{LAB_CONTACT.director}</strong>, Pharmacien biologiste</span>
              </span>
              <span className="text-slate-300">·</span>
              <span>Laboratoire Roma Casablanca (Bd 2 Mars)</span>
              <span className="text-slate-300">·</span>
              <span>Recommandations HAS & Consensus de Maastricht VI</span>
            </div>

            {/* ENCADRÉ OBLIGATOIRE : SIGNES D'ALARME */}
            <aside aria-label="Signes d'alarme nécessitant un avis médical rapide" className="my-4 p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 space-y-2.5">
              <div className="flex items-center gap-2.5 text-rose-800 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Signes d'alarme : Quand consulter rapidement un médecin ?</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
                Consultez rapidement un médecin en cas de : difficulté à avaler (dysphagie), perte de poids inexpliquée, vomissements de sang, selles noires (méléna), anémie, vomissements persistants. Ces signes peuvent nécessiter une endoscopie et ne relèvent pas d'un simple test non invasif.
              </p>
            </aside>

            {/* Données de prévalence */}
            <div className="my-4 rounded-2xl bg-slate-50 border border-slate-200 p-5 flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-slate-700">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-teal-700" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100 px-2 py-0.5 rounded-full inline-block">
                  Données Épidémiologiques
                </span>
                <p>
                  <strong>En France :</strong> Prévalence estimée entre 15 et 30 % de la population générale, avec une augmentation avec l'âge (environ 50 % après 50-60 ans) (source : HAS).
                </p>
                <p>
                  <strong>Au Maroc :</strong> Les données disponibles situent la prévalence autour de 70 % de la population adulte, avec des variations régionales. À l'échelle mondiale, elle est d'environ 44 %.
                </p>
              </div>
            </div>
          </header>

          {/* 2. Définition simple et pédagogique */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">1</span>
              <span>Qu'est-ce que l'Helicobacter pylori ? Une bactérie fréquente et souvent silencieuse</span>
            </h2>

            <div className="text-slate-600 space-y-3.5 leading-relaxed text-xs sm:text-sm">
              <p>
                L'<em>Helicobacter pylori</em> (abrégée <em>H. pylori</em>) est une bactérie spiralée qui a la faculté unique de survivre dans l'environnement acide de l'estomac. Elle y parvient en se logeant sous la couche protectrice de mucus gastrique et en sécrétant une enzyme (l'uréase) qui neutralise temporairement l'acidité locale.
              </p>
              <p>
                Dans la majorité des cas, l'acquisition survient dès l'enfance au sein de la famille. Elle peut ensuite résider silencieusement dans l'organisme pendant plusieurs décennies sans provoquer de signes immédiats.
              </p>
              <p>
                Toutefois, sa présence continue entraîne une inflammation chronique de la muqueuse (gastrite). Chez certains patients, cette inflammation peut évoluer vers un ulcère gastroduodénal.
              </p>
            </div>
          </section>

          {/* 3. Indications du dépistage */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <span>Indications du dépistage : Situations cliniques ciblées</span>
            </h2>

            <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-3 text-xs sm:text-sm text-slate-700">
              <h3 className="font-bold text-teal-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Situations où le dépistage est indiqué (Recommandations HAS & Maastricht VI) :</span>
              </h3>
              <p className="leading-relaxed">
                Le dépistage n'est pas recommandé en population générale. Il est indiqué dans des situations ciblées :
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-600">
                <li>Ulcère gastrique ou duodénal (actif ou antécédent) ;</li>
                <li>Dyspepsie chronique sans lésion visible à la gastroscopie ;</li>
                <li>Prise d'AINS ou d'aspirine chez un patient ayant un antécédent d'ulcère ;</li>
                <li>Antécédent familial de cancer gastrique ;</li>
                <li>Anémie ferriprive ou carence en vitamine B12 inexpliquée ;</li>
                <li>Purpura thrombopénique immunologique (PTI).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <p>
                <strong>Conseil médical :</strong> En cas de symptômes persistants, consultez toujours votre médecin traitant ou votre gastro-entérologue pour déterminer si un examen diagnostique est approprié à votre cas.
              </p>
            </div>
          </section>

          {/* 4. Les tests non invasifs disponibles au Laboratoire Roma */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span>Les tests de dépistage non invasifs au Laboratoire Roma</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Le Laboratoire Roma met à disposition les trois méthodes non invasives reconnues par les sociétés savantes (hors situations nécessitant une endoscopie) :
              </p>
            </div>

            {/* Grid des 3 tests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Test Respiratoire au Carbone 13 */}
              <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-800 text-white">
                    Méthode de référence
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Test Respiratoire au Carbone 13 (13C-UBT)
                  </h3>
                  <p className="text-[11px] font-semibold text-teal-800">
                    Sensibilité & spécificité &gt; 95 %
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Principe :</strong> Ingestion d'une solution d'urée marquée au Carbone 13 (naturel et non radioactif). En présence de la bactérie, celle-ci décompose l'urée et dégage du CO₂ marqué détecté dans le souffle.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Examen de choix pour diagnostiquer l'infection active ou <strong>contrôler l'éradication</strong> après prise en charge.
                  </p>
                </div>

                <a
                  href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite des informations sur le test respiratoire Helicobacter pylori au Carbone 13 :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors"
                >
                  Infos Test Respiratoire
                </a>
              </div>

              {/* Antigènes dans les selles */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    Prélèvement fécal
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Antigènes H. pylori dans les Selles
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-700">
                    Détection directe de la bactérie
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Principe :</strong> Recherche immuno-enzymatique des protéines bactériennes excrétées dans les selles.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Très utile chez les enfants, les adultes et pour le suivi d'éradication lorsque le test respiratoire n'est pas réalisable.
                  </p>
                </div>

                <a
                  href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite des informations sur la recherche d'antigènes Helicobacter dans les selles :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  Infos Test Fécal
                </a>
              </div>

              {/* Sérologie sanguine */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    Prise de sang
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Sérologie Sanguine (IgG)
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-700">
                    Orientation de première intention
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Principe :</strong> Recherche des anticorps sanguins témoins d'un contact avec la bactérie.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    <strong>Avantage :</strong> Ne dépend pas des traitements IPP. En revanche, elle ne permet pas de vérifier la guérison car les anticorps persistent.
                  </p>
                </div>

                <a
                  href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite des informations sur la sérologie sanguine Helicobacter pylori :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  Infos Prise de Sang
                </a>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>Ces examens sont réalisés au <strong>Laboratoire Roma</strong> avec une démarche de contrôle qualité rigoureuse (contrôles internes et externes).</span>
              {/* [NORME / NUMÉRO / PORTÉE / ORGANISME D'ACCRÉDITATION À FOURNIR PAR LE DR MECHAL SI APPLICABLE] */}
            </div>
          </section>

          {/* 5. Conditions préanalytiques (Alert Box) */}
          <section className="bg-amber-50/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 text-amber-950 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-amber-950">
                  Conditions préanalytiques (Recommandations HAS & Maastricht VI)
                </h2>
                <p className="text-xs text-amber-800">
                  Délais indispensables pour le test respiratoire (13C) et l'antigène fécal pour éviter les faux négatifs :
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-amber-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block">
                  Traitement Antibiotique
                </span>
                <p className="text-sm font-extrabold text-slate-900 font-mono">
                  Arrêt depuis au moins 4 SEMAINES
                </p>
                <p className="text-xs text-slate-600">
                  Tout antibiotique affaiblit temporairement la bactérie et fausse l'analyse.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-amber-200 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                  Anti-acides / IPP
                </span>
                <p className="text-sm font-extrabold text-slate-900 font-mono">
                  Arrêt depuis au moins 2 SEMAINES
                </p>
                <p className="text-xs text-slate-600">
                  Oméprazole, ésoméprazole, pantoprazole, rabéprazole, lansoprazole.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-amber-200/80 text-xs text-amber-900 space-y-1">
              <p>
                ☕ <strong>Jeûne strict le matin du test respiratoire :</strong> Au moins 6 heures sans boire, sans manger, sans fumer et sans mâcher de chewing-gum.
              </p>
              <p className="text-xs text-amber-800">
                🩸 <em>Note :</em> La <strong>sérologie sanguine</strong> n'est pas perturbée par ces médicaments si vous ne pouvez pas interrompre votre traitement.
              </p>
            </div>
          </section>

          {/* 6. Prévention au quotidien */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">5</span>
              <span>Prévention au quotidien : Les gestes simples pour limiter la transmission</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Des mesures d'hygiène élémentaires permettent de réduire le risque de transmission intrafamiliale :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="text-lg">🧼</span>
                <h3 className="text-xs font-bold text-slate-900">Lavage régulier des mains</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  À l'eau et au savon avant chaque repas, après les toilettes et au retour à la maison.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="text-lg">🥗</span>
                <h3 className="text-xs font-bold text-slate-900">Hygiène de l'eau et aliments</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Consommer de l'eau saine, bien laver les légumes crus et les fruits avant consommation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <span className="text-lg">🥄</span>
                <h3 className="text-xs font-bold text-slate-900">Ustensiles individualisés</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Éviter le partage des couverts, verres et brosses à dents en cas de traitement en cours.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Sources et relecture médicale */}
          <section className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-1">
            <p><strong>Sources :</strong> HAS — recommandations relatives à Helicobacter pylori ; consensus de Maastricht (Maastricht VI).</p>
            <p>Article relu par le Dr MECHAL Youness le {/* [DATE DE RELECTURE À FOURNIR PAR LE DR MECHAL] */} [DATE À FOURNIR].</p>
          </section>

          {/* 8. Note institutionnelle finale Laboratoire Roma */}
          <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-md space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Accueil Médical & Conseil
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Le Laboratoire Roma à votre écoute au Boulevard 2 Mars, Casablanca
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Le Laboratoire d'Analyses Médicales Roma, dirigé par le <strong>Dr MECHAL Youness</strong>, Pharmacien biologiste, met à votre service son équipe pour vous orienter, vérifier vos délais d'arrêt préanalytiques et réaliser vos analyses dans des conditions de confort optimales.
            </p>

            <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 text-[11px] block">📍 Adresse</span>
                <p className="font-semibold">{LAB_CONTACT.fullAddress}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 text-[11px] block">🕒 Horaires</span>
                <p className="font-semibold">Lun – Ven : 07h30 – 18h30 | Samedi : 08h00 – 13h00</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-slate-400 text-[11px] block">📞 Téléphone</span>
                <p className="font-mono font-bold text-teal-400">{LAB_CONTACT.phoneLandline}</p>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-400">
                  Une question sur la préparation de votre examen ?
                </p>
                <a
                  href={getWhatsAppLink("Bonjour Dr MECHAL, je souhaite me renseigner sur le test Helicobacter pylori au Laboratoire Roma :")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Écrire à notre équipe sur WhatsApp</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                En envoyant votre ordonnance ou vos résultats par WhatsApp, vous acceptez leur transmission via ce service. Une alternative sécurisée est disponible sur demande.
              </p>
            </div>
          </section>

        </article>
      </div>
    </div>
  );
};

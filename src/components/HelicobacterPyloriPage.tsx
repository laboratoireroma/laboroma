import React, { useEffect } from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import {
  ArrowLeft,
  HeartPulse,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
  ShieldCheck,
  FileText,
  UserCheck,
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
              Pesanteur après les repas, brûlures d'estomac passagères, ballonnements récurrents... Il arrive souvent que notre digestion nous envoie des signaux discrets mais persistants. Très fréquemment, ces inconforts sont liés à un hôte microscopique bien connu des biologistes : la bactérie <em>Helicobacter pylori</em>. Loin de toute dramatisation, comprendre son rôle est la toute première étape pour dialoguer sereinement avec votre médecin traitant et retrouver une véritable légèreté au quotidien.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-teal-700" />
                <span>Direction Médicale : <strong>{LAB_CONTACT.director}</strong></span>
              </span>
              <span className="text-slate-300">·</span>
              <span>Laboratoire Roma Casablanca (Bd 2 Mars)</span>
              <span className="text-slate-300">·</span>
              <span>Recommandations HAS & Club Français de l'Hélicobacter</span>
            </div>

            {/* Visual Callout 1 (Hero / Bienveillance) */}
            <div className="my-4 rounded-2xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 border border-teal-200/70 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-teal-200 text-teal-800 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-8 h-8 text-teal-700" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Démarche Préventive
                </span>
                <h2 className="text-sm sm:text-base font-bold text-slate-900">
                  Un inconfort digestif chronique n'est jamais une fatalité
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Près d'une personne sur deux est porteuse de cette bactérie sans le savoir. Des tests de laboratoire non invasifs, indolores et sans fibroscopie permettent aujourd'hui d'avoir une réponse claire et rapide.
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
                L'<em>Helicobacter pylori</em> (abrégée <em>H. pylori</em>) est une bactérie spiralée qui a la faculté unique de survivre dans l'environnement très acide de notre estomac. Elle y parvient en se logeant sous la couche protectrice de mucus gastrique et en sécrétant une enzyme (l'uréase) qui neutralise temporairement l'acidité locale.
              </p>
              <p>
                Elle est particulièrement fréquente : dans la grande majorité des cas, sa transmission survient dès l'enfance au sein de la famille (par voie salivaire ou alimentaire). Elle peut ensuite résider silencieusement dans l'organisme pendant plusieurs décennies sans provoquer de signes immédiats.
              </p>
              <p>
                Toutefois, sa présence continue entraîne une inflammation chronique de la muqueuse (gastrite). Chez certains patients, cette fragilisation peut évoluer avec le temps et provoquer des troubles digestifs récurrents.
              </p>
            </div>

            {/* Visual Callout 2 (Pédagogie) */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
              <Activity className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
              <p>
                <strong>Point clé :</strong> La présence de la bactérie ne signifie pas automatiquement qu'une complication surviendra. Cependant, son dépistage précoce permet à votre médecin de lever le doute et de restaurer la santé de votre muqueuse gastrique.
              </p>
            </div>
          </section>

          {/* 3. Pourquoi et quand penser au dépistage ? */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0">2</span>
              <span>Pourquoi et quand penser au dépistage ? Agir tôt pour protéger son estomac</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Consulter son médecin et réaliser un bilan permet d'apaiser des inconforts quotidiens et de prévenir l'évolution vers des pathologies plus contraignantes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-2">
                <h3 className="font-bold text-xs sm:text-sm text-teal-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>Signes digestifs évocateurs</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 pl-1">
                  <li>• Sensation de lourdeur ou de réplétion rapide après les repas</li>
                  <li>• Brûlures ou aigreurs gastriques répétées</li>
                  <li>• Ballonnements du haut de l'abdomen, éructations</li>
                  <li>• Gêne persistante calmée temporairement par l'alimentation</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-2">
                <h3 className="font-bold text-xs sm:text-sm text-rose-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Prévention médicale à long terme</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 pl-1">
                  <li>• Prévention des récidives d'<strong>ulcères de l'estomac</strong> et du duodénum</li>
                  <li>• Arrêt de l'évolution vers la gastrite atrophique</li>
                  <li>• Protection lors de la prise régulière d'anti-inflammatoires ou aspirine</li>
                  <li>• Sérénité et confirmation biologique validée</li>
                </ul>
              </div>
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
                Le Laboratoire Roma met à votre disposition les trois méthodes non invasives reconnues par les sociétés savantes internationales :
              </p>
            </div>

            {/* Grid des 3 tests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Test Respiratoire au Carbone 13 */}
              <div className="p-5 rounded-2xl bg-teal-50/60 border-2 border-teal-600/40 hover:border-teal-600 space-y-3 flex flex-col justify-between transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-800 text-white">
                    ★ Gold-Standard
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Test Respiratoire au Carbone 13 (13C-UBT)
                  </h3>
                  <p className="text-[11px] font-semibold text-teal-800">
                    Fiabilité maximale (&gt; 95 %)
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
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 space-y-3 flex flex-col justify-between transition-all">
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    Direct & Pratique
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">
                    Antigènes H. pylori dans les Selles
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-700">
                    Détection directe de la bactérie
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Principe :</strong> Recherche immuno-enzymatique des protéines bactériennes excrétées.
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
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 space-y-3 flex flex-col justify-between transition-all">
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
          </section>

          {/* 5. Conditions préanalytiques strictes (Alert Box) */}
          <section className="bg-amber-50/90 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 text-amber-950 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-amber-950">
                  Conditions préanalytiques obligatoires (Recommandations HAS)
                </h2>
                <p className="text-xs text-amber-800">
                  Délais indispensables pour le test respiratoire (13C) et l'antigène dans les selles pour éviter les faux négatifs :
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
                  Quel que soit le motif de prescription de l'antibiotique.
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
                  À l'eau et au savon avant chaque repas, après les toilettes et à l'arrivée chez soi.
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

          {/* 7. Note institutionnelle finale Laboratoire Roma */}
          <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-md space-y-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Engagement & Accueil Médical
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Le Laboratoire Roma à votre écoute au Boulevard 2 Mars, Casablanca
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Le Laboratoire d'Analyses Médicales Roma, dirigé par le <strong>Dr MECHAL Youness</strong>, met à votre service son expertise biologique et son plateau technique moderne. Nos biologistes et techniciens sont à votre disposition pour vous orienter, vérifier la conformité de vos délais d'arrêt et réaliser vos tests dans les meilleures conditions de confort.
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

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
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
          </section>

        </article>
      </div>
    </div>
  );
};

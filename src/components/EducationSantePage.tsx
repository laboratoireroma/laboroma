import React, { useEffect } from "react";
import { LAB_CONTACT, getWhatsAppLink } from "../data/labInfo";
import {
  ArrowLeft,
  HeartPulse,
  Activity,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Microscope,
  Info,
  Clock,
  FileText,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

interface EducationSantePageProps {
  onBack: () => void;
}

export const EducationSantePage: React.FC<EducationSantePageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation Breadcrumb & Back button */}
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
              Sensibilisation & Éducation Thérapeutique
            </span>
          </nav>
        </div>

        {/* En-tête Principal de la Page */}
        <header className="mb-10 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200">
            <HeartPulse className="w-4 h-4 text-teal-700" />
            <span>Guide d'Éducation Thérapeutique & Prévention Santé</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprendre ses examens pour mieux préserver sa santé : <span className="text-teal-800">Tuberculose, Résistance à l'insuline & Helicobacter pylori</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Le rôle d'un laboratoire de biologie médicale ne se résume pas à l'analyse d'échantillons : il participe activement à l'information des patients et à la prévention des maladies. Cette page éducative a pour objectif d'expliquer, dans un langage simple et accessible, le principe de trois examens clés prescrits par votre médecin pour anticiper, diagnostiquer ou surveiller des situations médicales fréquentes au Maroc.
          </p>

          {/* Sommaire interactif rapide */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-semibold">
            <a
              href="#test-igra"
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-900 transition-colors"
            >
              1. Test IGRA (Tuberculose)
            </a>
            <a
              href="#homa-quicki"
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-900 transition-colors"
            >
              2. HOMA-IR & QUICKI (Résistance à l'insuline)
            </a>
            <a
              href="#test-respiratoire"
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-900 transition-colors"
            >
              3. Test respiratoire (Helicobacter pylori)
            </a>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* THÈME 1 : LE TEST IGRA POUR LA TUBERCULOSE */}
        {/* ========================================================================= */}
        <section
          id="test-igra"
          className="mb-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6 scroll-mt-20"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs">
              1
            </span>
            <span>Santé respiratoire & Maladies infectieuses</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Comprendre le test IGRA : un outil moderne pour le dépistage de la tuberculose
          </h2>

          {/* 1. Introduction */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Qu'est-ce que la tuberculose et pourquoi la dépister ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              La tuberculose est une maladie infectieuse provoquée par une bactérie microscopique appelée bacille de Koch (ou <em>Mycobacterium tuberculosis</em>). Elle se transmet principalement par voie aérienne, lorsqu'une personne malade tousse ou postillonne. Si elle attaque le plus souvent les poumons, la bactérie peut aussi se loger dans d'autres organes (ganglions lymphatiques, os, reins ou méninges).
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Au Maroc, la tuberculose demeure un défi de santé publique important en raison de sa présence continue dans la population. Un dépistage rigoureux et précoce constitue le moyen le plus efficace de protéger son entourage, d'interrompre les chaînes de contamination et de débuter une prise en charge médicale adaptée avant l'apparition de lésions graves.
            </p>
          </div>

          {/* 2. Qu'est-ce que le test IGRA ? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 border border-teal-200/70 space-y-2.5">
            <h3 className="text-sm sm:text-base font-bold text-teal-950 flex items-center gap-2">
              <Microscope className="w-4 h-4 text-teal-700" />
              <span>Qu'est-ce que le test IGRA ?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Le test IGRA (de l'anglais <em>Interferon-Gamma Release Assay</em>, ou test de libération de l'interféron gamma) est un examen sanguin moderne réalisé à partir d'une simple prise de sang au laboratoire.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Son principe est à la fois ingénieux et précis : en laboratoire, les globules blancs du patient sont mis en contact avec des fragments protéiques très spécifiques de la bactérie tuberculeuse. Si le système immunitaire du patient a déjà été exposé à la bactérie, ses cellules de défense (les lymphocytes mémoires) réagissent en fabriquant un messager protecteur appelé <strong>interféron gamma</strong>. En quantifiant cette libération, le laboratoire peut confirmer de façon objective si l'organisme a déjà rencontré le bacille.
            </p>
          </div>

          {/* 3. Pourquoi est-il utile ? */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Pourquoi le test IGRA est-il si utile ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Pendant des décennies, le dépistage reposait sur l'intradermoréaction (IDR ou « test à la tuberculine »), qui consistait à injecter une goutte de liquide sous la peau de l'avant-bras pour observer la rougeur quelques jours plus tard. Cependant, l'IDR présentait un défaut majeur : <strong>elle réagit positivement chez presque toutes les personnes ayant reçu le vaccin BCG</strong>. Au Maroc, où la vaccination par le BCG est généralisée dès les premiers jours de vie, l'IDR provoquait de nombreuses fausses alertes difficiles à interpréter.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="font-bold text-xs text-slate-900 block">Indépendant du vaccin BCG</span>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Le test IGRA utilise des antigènes spécifiques absents de la souche du vaccin BCG. Une personne vaccinée par le BCG n'aura pas de test IGRA faussement positif : le résultat distingue une vraie contamination d'une simple trace vaccinale.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="font-bold text-xs text-slate-900 block">Détection de l'infection latente (ITL)</span>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  Il identifie l'infection tuberculeuse « endormie » (latente) : la personne ne présente aucun symptôme (pas de toux ni de fièvre) et n'est pas contagieuse, mais la bactérie est présente dans son corps et pourrait se réveiller si son immunité venait à baisser.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Quand est-il recommandé ? */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Dans quelles situations le médecin le prescrit-il ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Votre médecin peut juger utile de prescrire un test IGRA dans plusieurs situations précises :
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Avant l'initiation de certains traitements immunosuppresseurs :</strong> notamment les biothérapies (anti-TNF alpha pour le rhumatisme inflammatoire, la maladie de Crohn, le psoriasis) ou les chimiothérapies. Ces médicaments diminuant les défenses, il est indispensable de vérifier qu'une infection tuberculeuse latente ne risque pas de se réactiver.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Dans le cadre d'une enquête autour d'un cas :</strong> si un membre de votre famille ou un collègue proche a développé une tuberculose active, le test permet de vérifier si vous avez inhalé la bactérie.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Chez les patients fragilisés :</strong> personnes vivant avec le VIH, personnes sous dialyse ou en attente d'une greffe.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Dans les bilans professionnels ou de mobilité internationale :</strong> pour les professionnels de santé ou pour l'obtention de certains visas d'études et de séjour.
                </span>
              </li>
            </ul>
          </div>

          {/* 5. Disponibilité */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-3">
            <Info className="w-5 h-5 text-teal-800 shrink-0" />
            <p>
              Ce test est disponible au Laboratoire Roma. N'hésitez pas à en parler avec votre médecin.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THÈME 2 : LES TESTS HOMA ET QUICKI POUR LA RÉSISTANCE À L'INSULINE */}
        {/* ========================================================================= */}
        <section
          id="homa-quicki"
          className="mb-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6 scroll-mt-20"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs">
              2
            </span>
            <span>Métabolisme, Prévention & Risque Diabétique</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            HOMA-IR et QUICKI : anticiper le risque de diabète de type 2
          </h2>

          {/* 1. Introduction : l'analogie de la clé et de la serrure */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Qu'est-ce que la résistance à l'insuline ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Pour comprendre la résistance à l'insuline, imaginons une analogie simple : l'insuline, une hormone produite par le pancréas, fonctionne exactement comme une <strong>clé</strong>. Sa mission est d'ouvrir la porte de nos cellules (dans les muscles, le foie et les tissus graisseux) afin de permettre au sucre présent dans le sang (le glucose) d'entrer pour servir de carburant énergétique.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-amber-950 space-y-2">
              <p className="font-semibold">
                Que se passe-t-il en cas de résistance à l'insuline ?
              </p>
              <p className="leading-relaxed text-slate-700">
                La « serrure » de la cellule est un peu rouillée ou encrassée. La clé habituelle ne parvient plus à ouvrir facilement la porte. Constatant que le sucre reste bloqué dans la circulation sanguine, le corps compense en forçant : le pancréas se met à fabriquer deux, trois ou quatre fois plus d'insuline pour maintenir une glycémie apparemment normale.
              </p>
              <p className="leading-relaxed text-slate-700">
                Pendant des années, une prise de sang classique montrera une glycémie tout à fait normale, alors même que l'organisme est en plein surrégime. Si rien n'est fait, le pancréas finit par s'épuiser, la porte ne s'ouvre plus et le diabète de type 2 s'installe définitivement.
              </p>
            </div>
          </div>

          {/* 2. Qu'est-ce que les index HOMA-IR et QUICKI ? */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Que mesurent concrètement les index HOMA-IR et QUICKI ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Les index HOMA-IR et QUICKI sont deux scores mathématiques validés scientifiquement, calculés à partir d'une <strong>simple prise de sang réalisée à jeun</strong>.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Au lieu de se contenter de mesurer uniquement le sucre, le laboratoire dose simultanément deux paramètres :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-bold text-sm text-teal-900 block">L'index HOMA-IR</span>
                <span className="text-[11px] text-slate-500 font-mono block">Homeostasis Model Assessment of Insulin Resistance</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Il évalue directement le <strong>degré de résistance</strong> de vos cellules. Plus la valeur calculée est élevée, plus les récepteurs cellulaires opposent de résistance à l'insuline et plus le pancréas doit fournir d'efforts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-bold text-sm text-teal-900 block">L'index QUICKI</span>
                <span className="text-[11px] text-slate-500 font-mono block">Quantitative Insulin Sensitivity Check Index</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Il mesure à l'inverse la <strong>sensibilité</strong> de vos cellules à l'insuline. Un score abaissé indique une perte de souplesse métabolique et une difficulté précoce de l'organisme à gérer le glucose.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Pourquoi sont-ils importants pour la prévention ? */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Pourquoi représentent-ils une opportunité majeure de prévention ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              L'immense force de ces scores est qu'ils permettent de détecter la dérive métabolique <strong>des années avant que le diabète de type 2 ne devienne visible</strong> sur une glycémie à jeun classique.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Or, à ce stade précoce, la résistance à l'insuline est <strong>largement réversible</strong>. Identifier le problème à temps permet de corriger la trajectoire sans médicament, simplement en agissant sur ses habitudes de vie :
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">•</span>
                <span>Réajustement nutritionnel (diminution des sucres rapides et des boissons sucrées, apport en fibres et légumes, choix de graisses saines).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">•</span>
                <span>Activité physique régulière (la contraction musculaire réactive naturellement les récepteurs au sucre, même sans insuline).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold">•</span>
                <span>Amélioration de la qualité du sommeil et réduction du stress chronique.</span>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 italic">
              Des études épidémiologiques menées au Maroc soulignent la progression continue du surpoids et du syndrome métabolique dans notre pays, et confirment la valeur stratégique de ces index pour un dépistage précoce chez les patients à risque.
            </p>
          </div>

          {/* 4. Qui devrait en parler à son médecin ? */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Qui a intérêt à en parler avec son médecin ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              L'évaluation des index HOMA-IR et QUICKI est particulièrement pertinente si vous présentez un ou plusieurs des facteurs suivants :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                <span>Antécédents familiaux de diabète (parents, fratrie)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                <span>Surpoids ou accumulation de graisse abdominale</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                <span>Sédentarité ou faible niveau d'activité physique</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                <span>Tension artérielle élevée ou bilan lipidique perturbé</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 sm:col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-700 shrink-0" />
                <span>Femmes ayant des antécédents de diabète gestationnel ou un syndrome des ovaires polykystiques (SOPK)</span>
              </div>
            </div>
          </div>

          {/* 5. Disponibilité */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-3">
            <Info className="w-5 h-5 text-teal-800 shrink-0" />
            <p>
              Les tests HOMA-IR et QUICKI sont disponibles au Laboratoire Roma. Votre médecin pourra vous les prescrire pour évaluer votre risque.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THÈME 3 : LE TEST RESPIRATOIRE À L'URÉE MARQUÉE POUR HELICOBACTER PYLORI */}
        {/* ========================================================================= */}
        <section
          id="test-respiratoire"
          className="mb-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6 scroll-mt-20"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs">
              3
            </span>
            <span>Gastro-entérologie & Confort Digestif</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Le test respiratoire à l'urée : un moyen simple de détecter <em>Helicobacter pylori</em>
          </h2>

          {/* 1. Introduction */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Qu'est-ce que la bactérie <em>Helicobacter pylori</em> ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <em>Helicobacter pylori</em> (souvent abrégée <em>H. pylori</em>) est une bactérie en forme de spirale qui a la particularité de pouvoir survivre dans le milieu extrêmement acide de l'estomac. Pour se protéger de l'acidité, elle s'enfouit sous la couche protectrice de mucus qui tapisse la paroi gastrique.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Une fois installée, la bactérie déclenche une inflammation silencieuse et permanente (gastrite chronique). Au fil du temps, elle peut provoquer des brûlures d'estomac, des douleurs après les repas, des ulcères gastriques ou duodénaux, et accroît le risque de développer un cancer de l'estomac à long terme. Au Maroc, cette infection est particulièrement fréquente et concerne une grande partie de la population adulte, souvent contractée dès l'enfance sans signe immédiat.
            </p>
          </div>

          {/* 2. Comment fonctionne le test respiratoire ? */}
          <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/50 border border-teal-200/70 space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-teal-950 flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-700" />
              <span>Comment fonctionne le test respiratoire à l'urée marquée ?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Le test respiratoire à l'urée marquée (au Carbone 13, un élément naturel totalement non radioactif et sans aucun danger) est une méthode diagnostique <strong>simple, non invasive, rapide et parfaitement indolore</strong> : aucun tube n'est introduit dans votre gorge et aucune piqûre n'est nécessaire.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 pt-1">
              <p className="font-semibold text-slate-900">Le déroulement de l'examen au laboratoire :</p>
              <ol className="list-decimal pl-5 space-y-1.5 leading-relaxed">
                <li>Le patient arrive à jeun et souffle dans un premier sachet ou tube pour mesurer son haleine de référence.</li>
                <li>Il boit une gorgée de jus d'orange (ou solution citronnée) puis avale une gélule contenant de l'urée marquée.</li>
                <li>Si la bactérie <em>Helicobacter pylori</em> est présente dans l'estomac, elle fabrique une enzyme (l'uréase) qui décompose immédiatement cette urée et libère du gaz carbonique marqué. Ce gaz passe dans la circulation sanguine puis est expulsé naturellement par les poumons.</li>
                <li>Après environ 30 minutes, le patient souffle dans un second récipient : l'analyseur compare les deux échantillons et détecte avec une immense précision la présence ou l'absence de la bactérie.</li>
              </ol>
            </div>
          </div>

          {/* 3. À quoi sert-il ? */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Quelles sont les deux utilisations principales du test respiratoire ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Ce test respiratoire est considéré par les sociétés savantes internationales de gastro-entérologie comme l'examen de référence non invasif grâce à sa sensibilité et sa spécificité supérieures à 95 %. Il remplit deux rôles majeurs :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-bold text-sm text-slate-900 block">1. Le diagnostic initial</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lorsque vous souffrez de maux d'estomac, de pesanteurs ou de brûlures gastriques répétées, le médecin peut prescrire ce test pour vérifier si <em>H. pylori</em> est responsable, sans devoir imposer une endoscopie chez les personnes jeunes sans signe de gravité.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <span className="font-bold text-sm text-slate-900 block">2. Le contrôle d'éradication</span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Après avoir suivi un traitement antibiotique prescrit par votre médecin, il est capital de s'assurer que la bactérie a été totalement détruite. Le test respiratoire est l'outil parfait pour confirmer la guérison définitive de la muqueuse gastrique.
                </p>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 italic">
              Rappel préparatoire : pour garantir la fiabilité du résultat, ce test doit être réalisé à distance de tout traitement susceptible d'endormir la bactérie (au moins 4 semaines après l'arrêt des antibiotiques et 2 semaines après l'arrêt des pansements gastriques / IPP).
            </p>
          </div>

          {/* 4. Pourquoi est-ce important au Maroc ? */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              Pourquoi ce test est-il particulièrement important au Maroc ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Au Maroc, où l'infection par <em>Helicobacter pylori</em> touche une très large proportion de la population adulte, ce test respiratoire offre une réponse diagnostique fiable, rapide et confortable. Il permet d'éviter la prise d'antibiotiques injustifiée, de cibler le traitement uniquement lorsque la bactérie est réellement active et de confirmer que l'estomac est durablement guéri.
            </p>
          </div>

          {/* 5. Disponibilité */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-3">
            <Info className="w-5 h-5 text-teal-800 shrink-0" />
            <p>
              Le test respiratoire à l'urée marquée est disponible au Laboratoire Roma, idéalement sur prescription médicale.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ENCADRÉ CONSEIL & RAPPEL DÉONTOLOGIQUE */}
        {/* ========================================================================= */}
        <section className="mb-10 p-6 sm:p-8 rounded-3xl bg-slate-900 text-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span>Rôle du laboratoire & Dialogue avec votre médecin</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white">
            Un accompagnement biologique au service de votre prise en charge médicale
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Les analyses de biologie médicale constituent une aide précieuse pour la prévention, le dépistage et le suivi thérapeutique. L'interprétation d'un résultat d'analyse s'effectue toujours en relation avec votre examen clinique, vos antécédents et vos symptômes. Votre médecin traitant ou spécialiste demeure votre interlocuteur privilégié pour poser un diagnostic et adapter vos soins.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              Laboratoire d'Analyses Médicales Roma · 117 Angle Bd 2 Mars et Rue de Rome, Casablanca
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppLink("Bonjour Laboratoire Roma, je souhaite un renseignement sur les tests de dépistage (IGRA, HOMA-IR, test respiratoire) :")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Laboratoire</span>
              </a>

              <a
                href={`tel:${LAB_CONTACT.phoneLandlineIntl}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>05 22 28 51 60</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

const fs = require("fs");
const acts = JSON.parse(fs.readFileSync("src/data/tarifsNomenclature.json"));

// Mapping to 7 high-level user filter categories while keeping exact subcategory in act metadata
function mapMainCat(cat) {
  if (cat.includes("Biochimie") || cat.includes("Enzymologie") || cat.includes("Examens Urinaires") || cat.includes("Autres Liquides") || cat.includes("Épreuves")) {
    return "Biochimie & Métabolisme";
  }
  if (cat.includes("Hématologie") || cat.includes("ImmunoHématologie") || cat.includes("Hémostase")) {
    return "Hématologie & Coagulation";
  }
  if (cat.includes("Hormonologie")) {
    return "Hormonologie";
  }
  if (cat.includes("Marqueurs Tumoraux")) {
    return "Marqueurs Tumoraux";
  }
  if (cat.includes("Sérologie") || cat.includes("Immunologie")) {
    return "Immunologie & Sérologie";
  }
  if (cat.includes("Microbiologie")) {
    return "Microbiologie & Parasitologie";
  }
  if (cat.includes("827-12")) {
    return "Actes assimilés (Arrêté 827-12)";
  }
  if (cat.includes("1968-16")) {
    return "Actes assimilés (Arrêté 1968-16)";
  }
  return "Analyses Spécialisées & Hors-frontières";
}

const enrichedActs = acts.map(a => ({
  ...a,
  mainCat: mapMainCat(a.cat)
}));

const html = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tarifs des Analyses de Biologie Médicale · Nomenclature Officielle · Laboratoire Roma Casablanca</title>
  <meta name="description" content="Nomenclature officielle marocaine intégrale des actes d'analyses de biologie médicale (Arrêtés n° 1796-03, n° 827-12 et n° 1968-16). Cotation en lettre clé B, tarifs conventionnels AMO (1,10 DH) et publics (1,34 DH) au Laboratoire Roma Casablanca." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://laboratoireroma.github.io/laboroma/tarifs-analyses.html" />
  <link rel="icon" type="image/png" href="./favicon.png" />
  <link rel="apple-touch-icon" href="./apple-touch-icon.png" />

  <!-- Google Fonts: Plus Jakarta Sans & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ["\"Plus Jakarta Sans\"", "system-ui", "-apple-system", "sans-serif"],
            mono: ["\"JetBrains Mono\"", "monospace"]
          },
          colors: {
            roma: {
              teal: "#0D9488",
              tealDark: "#0F766E",
              tealLight: "#F0FDFA",
              slate: "#0F172A",
              border: "#E2E8F0"
            }
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: "Plus Jakarta Sans", system-ui, -apple-system, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .font-mono {
      font-family: "JetBrains Mono", monospace;
      font-variant-numeric: tabular-nums;
    }
    @media print {
      .no-print { display: none !important; }
      body { background: #fff !important; color: #000 !important; }
      .print-border { border: 1px solid #cbd5e1 !important; }
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col">

  <!-- En-tête Top Bar Officiel -->
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs no-print">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      <a href="./" class="flex items-center gap-3 group">
        <img src="./assets/aistudio/logo_roma_transparent_b60a769e.png" alt="Logo Laboratoire Roma" class="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
        <div class="flex flex-col">
          <span class="text-base sm:text-lg font-bold tracking-tight text-slate-900 leading-tight">
            Laboratoire <span class="text-teal-700">Roma</span>
          </span>
          <span class="text-[11px] text-slate-500 font-medium">
            Casablanca · Bd 2 Mars · Dr MECHAL Youness
          </span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
        <a href="./" class="hover:text-teal-700 transition-colors">Accueil</a>
        <a href="./tarifs-analyses.html" class="text-teal-700 font-bold">Tarifs des Analyses</a>
        <a href="./education-prevention-sante.html" class="hover:text-teal-700 transition-colors">Guides Santé</a>
        <a href="./helicobacter-pylori.html" class="hover:text-teal-700 transition-colors">H. pylori</a>
        <a href="./publications-dr-mechal-youness.html" class="hover:text-teal-700 transition-colors">Publications Dr MECHAL</a>
        <a href="./plan-du-site.html" class="hover:text-teal-700 transition-colors">Plan du site</a>
      </nav>

      <div class="flex items-center gap-2.5">
        <a href="tel:+212522285160" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-mono">
          <svg class="w-3.5 h-3.5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <span>05 22 28 51 60</span>
        </a>
        <a href="https://wa.me/212610275785?text=Bonjour%20Laboratoire%20Roma%2C%20je%20souhaite%20un%20renseignement%20sur%20les%20tarifs%20d%27analyses" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-xs transition-colors">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.825z"/></svg>
          <span>WhatsApp Médical</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Fil d'Ariane -->
  <nav aria-label="Fil d'Ariane" class="bg-slate-100 border-b border-slate-200/80 py-2.5 px-4 text-xs text-slate-500 no-print">
    <div class="max-w-7xl mx-auto flex items-center gap-2">
      <a href="./" class="hover:text-teal-700 font-medium transition-colors">Accueil</a>
      <span class="text-slate-400">/</span>
      <span class="text-teal-800 font-semibold">Tarifs des Analyses (Nomenclature Officielle du Maroc)</span>
    </div>
  </nav>

  <!-- Contenu Principal -->
  <main class="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 space-y-8">

    <!-- 1. EN-TÊTE DE PAGE (HEADER) -->
    <section class="space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-900 text-xs font-semibold">
        <svg class="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        <span>Laboratoire d'Analyses Médicales Roma · Casablanca · Dr MECHAL Youness</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
        Tarifs des Analyses de Biologie Médicale
      </h1>
      <p class="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
        Nomenclature officielle et tarification réglementée au Maroc. Les codes, désignations et coefficients de la lettre clé <span class="font-bold text-slate-900 font-mono">B</span> sont strictement conformes aux textes réglementaires du Ministère de la Santé.
      </p>
    </section>

    <!-- 2. ENCADRÉ DES RÉFÉRENCES LÉGALES & 3. EXPLICATION DU CALCUL DES PRIX -->
    <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
      <div class="lg:col-span-7 space-y-4">
        <h2 class="text-lg font-bold text-slate-900 flex items-center gap-2">
          <svg class="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          <span>Références Légales Officielles</span>
        </h2>
        <div class="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <p class="font-bold text-slate-900">Arrêté n° 1796-03 du 21 juillet 2005</p>
            <p class="text-xs text-slate-600 mt-0.5">Fixant la nomenclature officielle des actes de biologie médicale (Bulletin Officiel n° 5366 du 3 novembre 2005) : Actes cotés de <span class="font-mono font-bold text-teal-800">B100</span> à <span class="font-mono font-bold text-teal-800">B441</span>.</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <p class="font-bold text-slate-900">Arrêté n° 827-12 du 1er mars 2012</p>
            <p class="text-xs text-slate-600 mt-0.5">Liste des 134 actes de biologie médicale assimilés : Actes cotés de <span class="font-mono font-bold text-teal-800">B442</span> à <span class="font-mono font-bold text-teal-800">B575</span>.</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
            <p class="font-bold text-slate-900">Arrêté n° 1968-16 du 24 juin 2016</p>
            <p class="text-xs text-slate-600 mt-0.5">Liste complémentaire des 16 actes assimilés (Cytométrie en flux, toxicologie médicale, génétique) : Actes cotés de <span class="font-mono font-bold text-teal-800">B576</span> à <span class="font-mono font-bold text-teal-800">B591</span>.</p>
          </div>
          <p class="text-xs text-slate-500 pt-1">
            Chaque acte est identifié par un code et un coefficient (lettre clé B). Le tarif est calculé en multipliant le coefficient par la valeur de la lettre B : <span class="font-mono font-bold text-slate-800">Tarif (DH) = Coefficient (B) × Valeur de la lettre B</span>.
          </p>
        </div>
      </div>

      <!-- Cartes Valeur de la Lettre B -->
      <div class="lg:col-span-5 flex flex-col justify-between gap-4">
        <!-- Carte Tarif Conventionnel -->
        <div class="p-5 rounded-xl bg-teal-50/80 border border-teal-200 text-teal-950 flex flex-col justify-between">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-teal-700">Régime AMO & Conventions</span>
              <h3 class="text-base font-bold text-slate-900">Tarif Conventionnel</h3>
              <p class="text-xs text-slate-600 mt-0.5">Affiliés CNOPS, CNSS, CMIM, Wafa Assurance, FOS-Halieutis.</p>
            </div>
            <span class="px-2.5 py-1 text-xs font-mono font-bold bg-white text-teal-800 rounded-md border border-teal-200 shadow-2xs">B = 1,10 DH</span>
          </div>
          <div class="mt-4 pt-3 border-t border-teal-200/60 flex items-center justify-between text-xs font-medium text-teal-900">
            <span>Remboursement sur base AMO</span>
            <span class="font-bold font-mono">1,10 DH / lettre B</span>
          </div>
        </div>

        <!-- Carte Tarif Non Conventionnel -->
        <div class="p-5 rounded-xl bg-slate-100 border border-slate-300/80 text-slate-900 flex flex-col justify-between">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Secteur Public & Hors Convention</span>
              <h3 class="text-base font-bold text-slate-900">Tarif Non Conventionnel</h3>
              <p class="text-xs text-slate-600 mt-0.5">Autres organismes et patients sans couverture médicale mutuelle.</p>
            </div>
            <span class="px-2.5 py-1 text-xs font-mono font-bold bg-white text-slate-800 rounded-md border border-slate-300 shadow-2xs">B = 1,34 DH</span>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-medium text-slate-700">
            <span>Facturation conforme & détaillée</span>
            <span class="font-bold font-mono">1,34 DH / lettre B</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. ZONE DE RECHERCHE & FILTRES PAR SPÉCIALITÉ -->
    <section class="space-y-4 no-print">
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <!-- Recherche instantanée -->
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <input
            type="search"
            id="searchInput"
            placeholder="Rechercher un acte (ex: Glycémie, Créatinine, Troponine, PSA, TSH, Numération Formule) ou un code exact (ex: B100, B118, B149, B216, B361, B442, B576)..."
            class="w-full pl-10 pr-4 py-3 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 shadow-2xs transition-all"
          />
        </div>

        <!-- Contrôles : Nombre de lignes et impression -->
        <div class="flex items-center gap-2 shrink-0">
          <select id="pageSizeSelect" class="py-2.5 px-3 text-xs font-medium bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-2xs">
            <option value="50">50 par page</option>
            <option value="100">100 par page</option>
            <option value="all">Afficher les 492 actes</option>
          </select>
          <button onclick="window.print()" class="inline-flex items-center gap-1.5 py-2.5 px-3.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl shadow-2xs transition-colors">
            <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            <span class="hidden sm:inline">Imprimer</span>
          </button>
        </div>
      </div>

      <!-- Filtres par catégorie -->
      <div class="flex flex-wrap items-center gap-1.5 pt-1" id="categoryFilters">
        <button data-cat="all" class="cat-btn active px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors bg-teal-800 text-white shadow-2xs">
          Toutes les analyses (<span id="totalBadge">${enrichedActs.length}</span>)
        </button>
        <button data-cat="Biochimie & Métabolisme" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Biochimie & Métabolisme
        </button>
        <button data-cat="Hématologie & Coagulation" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Hématologie, Cytologie & Hémostase
        </button>
        <button data-cat="Hormonologie" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Hormonologie & Thyroïde
        </button>
        <button data-cat="Marqueurs Tumoraux" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Marqueurs Tumoraux (PSA, CA...)
        </button>
        <button data-cat="Immunologie & Sérologie" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Immunologie & Sérologie (VIH, Hépatites...)
        </button>
        <button data-cat="Microbiologie & Parasitologie" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Microbiologie, Bactériologie & Selles
        </button>
        <button data-cat="Actes assimilés (Arrêté 827-12)" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Assimilés 2012 (Arrêté 827-12)
        </button>
        <button data-cat="Actes assimilés (Arrêté 1968-16)" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Assimilés 2016 (Arrêté 1968-16)
        </button>
        <button data-cat="Analyses Spécialisées & Hors-frontières" class="cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100">
          Transmission à l'étranger
        </button>
      </div>

      <!-- Compteur de résultats -->
      <div class="flex items-center justify-between text-xs text-slate-500 px-1">
        <p id="resultsCounter">Affichage de <span class="font-bold text-slate-800">492</span> actes réglementés</p>
        <p class="hidden sm:block text-[11px] text-slate-400">Cotation officielle vérifiée depuis l'Arrêté ministériel actualisé</p>
      </div>
    </section>

    <!-- 5. TABLEAU OFFICIEL DES ACTES (CŒUR DE LA PAGE) -->
    <section class="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden print-border">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="bg-slate-100/90 text-slate-700 font-bold border-b border-slate-200 text-xs uppercase tracking-wider">
              <th scope="col" class="py-3.5 px-4 w-24">Code</th>
              <th scope="col" class="py-3.5 px-4">Acte & Désignation Officielle</th>
              <th scope="col" class="py-3.5 px-4 w-48 hidden md:table-cell">Section / Arrêté</th>
              <th scope="col" class="py-3.5 px-4 text-center w-32">Coefficient</th>
              <th scope="col" class="py-3.5 px-4 text-right w-44 bg-teal-50/60 text-teal-950">
                Tarif Conv. (DH)
                <span class="block text-[10px] font-normal text-teal-700 lowercase">B = 1,10 DH</span>
              </th>
              <th scope="col" class="py-3.5 px-4 text-right w-44 bg-slate-50 text-slate-900">
                Tarif Non Conv. (DH)
                <span class="block text-[10px] font-normal text-slate-500 lowercase">B = 1,34 DH</span>
              </th>
            </tr>
          </thead>
          <tbody id="actsTableBody" class="divide-y divide-slate-200 font-normal">
            <!-- Rendu dynamique par Vanilla JS -->
          </tbody>
        </table>
      </div>

      <!-- État vide (Aucun résultat trouvé) -->
      <div id="noResultsBlock" class="hidden p-12 text-center space-y-3">
        <div class="w-12 h-12 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <p class="font-bold text-slate-800 text-base">Aucun acte ne correspond à votre recherche</p>
        <p class="text-xs text-slate-500 max-w-md mx-auto">Vérifiez l'orthographe du nom ou le code officiel (ex: B100, B118, B149, B216, B361, B442). Vous pouvez aussi appeler le secrétariat au <a href="tel:+212522285160" class="text-teal-700 font-semibold underline">05 22 28 51 60</a>.</p>
        <button id="resetSearchBtn" class="inline-flex items-center px-4 py-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg hover:bg-teal-100 transition-colors">
          Réinitialiser la recherche
        </button>
      </div>

      <!-- Pagination bar -->
      <div id="paginationBar" class="p-4 bg-slate-50/80 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 no-print">
        <div id="paginationInfo">
          Affichage des actes 1 à 50 sur 492
        </div>
        <div class="flex items-center gap-1.5" id="paginationControls">
          <!-- Boutons de pagination générés par JS -->
        </div>
      </div>
    </section>

    <!-- SECTION PRÉLÈVEMENTS & REMBOURSEMENT MUTUELLES -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
        <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">Prise en charge Tiers Payant</h4>
        <p class="text-xs text-slate-600 leading-relaxed">
          Conventionné avec la CNSS (AMO), la CNOPS, la CMIM, Wafa Assurance et la FOS-Halieutis pour simplifier vos remboursements.
        </p>
      </div>

      <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
        <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">Prélèvements à Domicile</h4>
        <p class="text-xs text-slate-600 leading-relaxed">
          Un infirmier préleveur se déplace à votre domicile ou bureau sur tout Casablanca pour vos bilans sanguins, sur simple demande.
        </p>
      </div>

      <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-2">
        <div class="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
        </div>
        <h4 class="font-bold text-slate-900 text-sm">Résultats Sécurisés par WhatsApp</h4>
        <p class="text-xs text-slate-600 leading-relaxed">
          Réception rapide de vos comptes-rendus d'analyses au format PDF sécurisé par WhatsApp et consultation en ligne.
        </p>
      </div>
    </section>

  </main>

  <!-- Pied de page officiel du Laboratoire Roma -->
  <footer class="bg-slate-900 text-slate-300 pt-12 pb-12 border-t border-slate-800 text-xs no-print mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
        <div class="md:col-span-5 space-y-3">
          <div class="flex items-center gap-3">
            <img src="./assets/aistudio/logo_roma_transparent_b60a769e.png" alt="Logo Laboratoire Roma" class="w-10 h-10 object-contain bg-white/10 rounded-lg p-1" />
            <div>
              <p class="font-bold text-white text-base">Laboratoire d'Analyses Médicales Roma</p>
              <p class="text-teal-400 text-xs">Dr MECHAL Youness · Spécialiste en Analyses de Biologie Médicales</p>
            </div>
          </div>
          <p class="text-slate-400 leading-relaxed text-xs max-w-sm">
            Laboratoire de biologie médicale à Casablanca. Plateau technique neuf pour la biochimie, l'hématologie et l'immuno-analyse, associé à une politique de contrôle qualité rigoureuse.
          </p>
          <p class="text-[11px] text-slate-400">117 Angle Boulevard 2 Mars et Rue de Rome, 20250 Casablanca</p>
        </div>

        <div class="md:col-span-4 space-y-2">
          <p class="font-bold uppercase tracking-wider text-slate-200 text-xs">Navigation & Tarifs</p>
          <ul class="space-y-1.5 text-slate-300">
            <li><a href="./" class="hover:text-white transition-colors">Accueil du site</a></li>
            <li><a href="./tarifs-analyses.html" class="text-teal-400 hover:text-teal-300 font-bold">Tarifs des Analyses (Nomenclature Officielle)</a></li>
            <li><a href="./education-prevention-sante.html" class="hover:text-white transition-colors">Éducation Santé (IGRA, HOMA, Helicobacter)</a></li>
            <li><a href="./helicobacter-pylori.html" class="hover:text-white transition-colors">Dépistage Helicobacter pylori</a></li>
            <li><a href="./publications-dr-mechal-youness.html" class="text-emerald-400 hover:underline">Travaux Scientifiques du Dr MECHAL</a></li>
            <li><a href="./plan-du-site.html" class="text-slate-300 hover:text-white transition-colors">Plan du site (HTML)</a></li>
            <li><a href="./sitemap.xml" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-teal-300 transition-colors">Sitemap XML</a></li>
          </ul>
        </div>

        <div class="md:col-span-3 space-y-2">
          <p class="font-bold uppercase tracking-wider text-slate-200 text-xs">Horaires & Contact</p>
          <p class="text-slate-300 font-mono text-[11px]">Du Lundi au Vendredi : 07h30 – 18h30 (non-stop)</p>
          <p class="text-slate-300 font-mono text-[11px]">Samedi : 08h00 – 13h00</p>
          <p class="text-slate-400 text-[11px]">Dimanche : Fermé</p>
          <p class="pt-2 text-slate-300">Tél : <a href="tel:+212522285160" class="font-mono text-teal-400 hover:underline">05 22 28 51 60</a></p>
          <p class="text-slate-300">WhatsApp : <a href="https://wa.me/212610275785" target="_blank" class="font-mono text-emerald-400 hover:underline">06 10 27 57 85</a></p>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
        <p>© 2026 Laboratoire d'Analyses Médicales Roma Casablanca. Tous droits réservés.</p>
        <p>Direction Médicale : Dr MECHAL Youness, Spécialiste en Analyses de Biologie Médicales</p>
      </div>
    </div>
  </footer>

  <!-- Base de données officielle et moteur JS Vanilla -->
  <script>
    // Injection des 492 actes de la nomenclature officielle marocaine vérifiée depuis le document PDF
    const ACTES = ${JSON.stringify(enrichedActs)};

    // Valeurs monétaires officielles de la lettre clé B
    const TARIF_CONV_VAL = 1.10;
    const TARIF_NON_CONV_VAL = 1.34;

    // État de l'application
    let currentCategory = "all";
    let searchQuery = "";
    let currentPage = 1;
    let pageSize = 50;

    // Éléments du DOM
    const searchInput = document.getElementById("searchInput");
    const pageSizeSelect = document.getElementById("pageSizeSelect");
    const tableBody = document.getElementById("actsTableBody");
    const noResultsBlock = document.getElementById("noResultsBlock");
    const resultsCounter = document.getElementById("resultsCounter");
    const paginationBar = document.getElementById("paginationBar");
    const paginationInfo = document.getElementById("paginationInfo");
    const paginationControls = document.getElementById("paginationControls");
    const resetSearchBtn = document.getElementById("resetSearchBtn");
    const categoryButtons = document.querySelectorAll(".cat-btn");

    function formatMoney(amount) {
      return (Math.round(amount * 100) / 100).toFixed(2).replace(".", ",") + " DH";
    }

    function getFilteredActs() {
      const q = searchQuery.trim().toLowerCase();
      return ACTES.filter(act => {
        if (currentCategory !== "all" && act.mainCat !== currentCategory) {
          return false;
        }
        if (q) {
          const matchCode = act.c.toLowerCase().includes(q);
          const matchName = act.n.toLowerCase().includes(q);
          const matchCat = act.cat.toLowerCase().includes(q);
          const matchB = ("b " + act.b).includes(q) || ("b" + act.b).includes(q);
          return matchCode || matchName || matchCat || matchB;
        }
        return true;
      });
    }

    function renderTable() {
      const filtered = getFilteredActs();
      const total = filtered.length;

      resultsCounter.innerHTML = \`Affichage de <span class="font-bold text-slate-800">\${total}</span> acte\${total > 1 ? "s" : ""} officiel\${total > 1 ? "s" : ""}\`;

      if (total === 0) {
        tableBody.innerHTML = "";
        noResultsBlock.classList.remove("hidden");
        paginationBar.classList.add("hidden");
        return;
      }

      noResultsBlock.classList.add("hidden");
      paginationBar.classList.remove("hidden");

      let itemsToDisplay = filtered;
      let totalPages = 1;

      if (pageSize !== "all") {
        const size = parseInt(pageSize, 10);
        totalPages = Math.ceil(total / size);
        if (currentPage > totalPages) currentPage = totalPages;
        if (currentPage < 1) currentPage = 1;

        const startIdx = (currentPage - 1) * size;
        const endIdx = Math.min(startIdx + size, total);
        itemsToDisplay = filtered.slice(startIdx, endIdx);

        paginationInfo.textContent = \`Affichage des actes \${startIdx + 1} à \${endIdx} sur \${total}\`;
      } else {
        paginationInfo.textContent = \`Affichage de tous les \${total} actes réglementés\`;
      }

      let html = "";
      itemsToDisplay.forEach((act, index) => {
        const tarifConv = act.b * TARIF_CONV_VAL;
        const tarifNonConv = act.b * TARIF_NON_CONV_VAL;
        const rowBg = index % 2 === 0 ? "bg-white" : "bg-slate-50/50";

        html += \`
          <tr class="\${rowBg} hover:bg-teal-50/40 transition-colors">
            <td class="py-3 px-4 font-mono font-bold text-teal-800 text-xs">
              \${act.c}
            </td>
            <td class="py-3 px-4">
              <div class="font-semibold text-slate-900">\${act.n}</div>
              <div class="text-[10px] text-slate-400 mt-0.5 md:hidden">
                Section : \${act.cat} · Arrêté \${act.ar}
              </div>
            </td>
            <td class="py-3 px-4 hidden md:table-cell text-xs text-slate-500">
              <span class="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                \${act.cat}
              </span>
            </td>
            <td class="py-3 px-4 text-center font-mono font-bold text-slate-700">
              <span class="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-xs">
                B \${act.b}
              </span>
            </td>
            <td class="py-3 px-4 text-right font-mono font-bold text-teal-800 bg-teal-50/30">
              \${formatMoney(tarifConv)}
            </td>
            <td class="py-3 px-4 text-right font-mono font-semibold text-slate-800 bg-slate-50/30">
              \${formatMoney(tarifNonConv)}
            </td>
          </tr>
        \`;
      });

      tableBody.innerHTML = html;
      renderPaginationControls(totalPages);
    }

    function renderPaginationControls(totalPages) {
      if (pageSize === "all" || totalPages <= 1) {
        paginationControls.innerHTML = "";
        return;
      }

      let btnHtml = "";

      btnHtml += \`
        <button
          onclick="changePage(\${currentPage - 1})"
          \${currentPage === 1 ? "disabled" : ""}
          class="px-2.5 py-1 rounded-md border border-slate-300 text-slate-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
        >
          Précédent
        </button>
      \`;

      let startP = Math.max(1, currentPage - 2);
      let endP = Math.min(totalPages, startP + 4);
      if (endP - startP < 4) {
        startP = Math.max(1, endP - 4);
      }

      for (let p = startP; p <= endP; p++) {
        const isActive = p === currentPage;
        btnHtml += \`
          <button
            onclick="changePage(\${p})"
            class="w-7 h-7 flex items-center justify-center rounded-md font-mono text-xs font-bold transition-colors \${
              isActive
                ? "bg-teal-800 text-white shadow-2xs"
                : "border border-slate-300 text-slate-700 hover:bg-slate-100"
            }"
          >
            \${p}
          </button>
        \`;
      }

      btnHtml += \`
        <button
          onclick="changePage(\${currentPage + 1})"
          \${currentPage === totalPages ? "disabled" : ""}
          class="px-2.5 py-1 rounded-md border border-slate-300 text-slate-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 transition-colors"
        >
          Suivant
        </button>
      \`;

      paginationControls.innerHTML = btnHtml;
    }

    window.changePage = function(p) {
      currentPage = p;
      renderTable();
      document.querySelector("main").scrollIntoView({ behavior: "smooth" });
    };

    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      currentPage = 1;
      renderTable();
    });

    pageSizeSelect.addEventListener("change", (e) => {
      pageSize = e.target.value;
      currentPage = 1;
      renderTable();
    });

    resetSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      currentCategory = "all";
      categoryButtons.forEach(btn => {
        if (btn.getAttribute("data-cat") === "all") {
          btn.className = "cat-btn active px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors bg-teal-800 text-white shadow-2xs";
        } else {
          btn.className = "cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100";
        }
      });
      currentPage = 1;
      renderTable();
    });

    categoryButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        categoryButtons.forEach(b => {
          b.className = "cat-btn px-3 py-1.5 text-xs font-medium rounded-lg transition-colors bg-white text-slate-700 border border-slate-200 hover:bg-slate-100";
        });
        btn.className = "cat-btn active px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors bg-teal-800 text-white shadow-2xs";
        currentCategory = btn.getAttribute("data-cat");
        currentPage = 1;
        renderTable();
      });
    });

    renderTable();
  </script>
</body>
</html>
`;

fs.writeFileSync("public/tarifs-analyses.html", html);
console.log("Fichier public/tarifs-analyses.html re-généré avec les 492 actes du PDF officiel !");

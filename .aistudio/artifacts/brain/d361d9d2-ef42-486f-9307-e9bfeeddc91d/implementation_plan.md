# Page des Tarifs des Analyses de Biologie Médicale (Nomenclature Officielle Marocaine)

Développement d'une page complète, autonome, interactive et intégrée au site du **Laboratoire d'Analyses Médicales Roma** (Casablanca, dirigé par le Dr MECHAL Youness, Pharmacien biologiste), répertoriant l'ensemble des actes de biologie médicale cotés selon la nomenclature marocaine (Arrêté n° 1796-03 et n° 827-12) avec les coefficients de la lettre-clé **B** (Tarif conventionnel à 1,10 DH pour la CNSS/CNOPS/AMO, et Tarif non conventionnel à 1,34 DH pour les non mutualistes).

---

### User Review & Critical Decisions

> [!IMPORTANT]
> Les réponses aux questions de cadrage ont confirmé les choix suivants :
> - **Format de livraison** : Page HTML complète, autonome (Tailwind CSS CDN + Vanilla JS) et directement intégrée dans le site web du laboratoire (`public/tarifs-analyses.html` accessible via l'URL `https://laboratoireroma.github.io/laboroma/tarifs-analyses.html`, ajoutée au menu de navigation, au pied de page et au `sitemap.xml`).
> - **Navigation dans le catalogue** : Affichage fluide de l'ensemble des actes avec recherche instantanée multicritère (par nom d'analyse, code nomenclature, ou lettre-clé), pagination dynamique et fluide (par tranches configurables de 50, 100 ou "Tous" avec compteur en direct), pour une fluidité absolue sur mobile et desktop.
> - **Exhaustivité des données** : Intégration d'une base de données exhaustive couvrant les grandes spécialités médicales (Biochimie sanguine & urinaire, Hématologie & Cytologie, Hémostase & Coagulation, Hormonologie & Marqueurs tumoraux, Sérologie infectieuse & Immunologie, Microbiologie & Bactériologie/Parasitologie, Auto-immunité et Assimilations hors nomenclature).

---

### 1. Overview & Core Concept

- **Rôle & Bénéfice** : Offrir aux patients, prescripteurs et assurés une transparence tarifaire totale, conforme à la déontologie médicale et aux arrêtés ministériels en vigueur au Maroc.
- **Calcul réglementaire automatisé** :
  $$\text{Tarif Conventionnel (AMO : CNOPS, CNSS)} = \text{Coefficient (B)} \times 1{,}10\text{ DH}$$
  $$\text{Tarif Non Conventionnel (Sans mutuelle / Autres)} = \text{Coefficient (B)} \times 1{,}34\text{ DH}$$
- **Expérience utilisateur** :
  - Recherche en temps réel sans rechargement.
  - Sélecteur de spécialités médicales (Badges de catégories interactifs : *Toutes, Biochimie, Hématologie, Hormonologie, Immunologie, Microbiologie, etc.*).
  - Simulateur / Panier d'estimation de devis (calcul instantané du total conventionnel et non conventionnel pour un bilan d'analyses prescrit).
  - Version imprimable propre (CSS `@media print`) pour délivrer une fiche de cotation conforme aux patients.

---

### 2. User Experience & Visual Design

#### A. Architecture Visuelle & Palette (Anti-Slop Restraint & Charte Médicale)
- **Palette** :
  - *Fond dominant (60%)* : Blanc pur (`#FFFFFF`) et gris médical très doux (`#F8FAFC`).
  - *Surfaces structurelles (30%)* : Panneaux ardoise clinique (`#F1F5F9`), bordures ultra-fines (`border-slate-200`), texte principal ardoise profond (`#0F172A`).
  - *Accents de calibrage (10%)* : Sarcelle médicale officielle Roma (`#0D9488` / `#0F766E`) pour les éléments de repère et les tarifs conventionnels, et bleu nuit professionnel pour l'en-tête.
- **Typographie** :
  - Titres et interface : `Plus Jakarta Sans` / `Outfit` via Google Fonts.
  - Valeurs numériques, codes d'actes et montants : `font-mono tabular-nums` pour un alignement vertical strict et rigoureux.

#### B. Structure de la Page
```
┌────────────────────────────────────────────────────────────────────────┐
│ TOP BAR : Laboratoire Roma · Casablanca | Retour au site | Tél & WhatsApp│
├────────────────────────────────────────────────────────────────────────┤
│ HERO HEADER :                                                          │
│ "Tarifs des Analyses de Biologie Médicale"                             │
│ "Nomenclature officielle marocaine et tarification réglementée"        │
├────────────────────────────────────────────────────────────────────────┤
│ ENCADRÉ DES RÉFÉRENCES LÉGALES & DÉONTOLOGIQUES :                      │
│ • Arrêté ministériel n° 1796-03 (B.O. n° 5366 du 3 nov. 2005)          │
│ • Arrêté ministériel n° 827-12 (assimilation des actes hors nomenclature)│
│ • Explication formule : Prix = B × Valeur monétaire                    │
│ [CARTE : Tarif Conventionnel B = 1,10 DH]  [CARTE : Tarif Public B = 1,34 DH]│
├────────────────────────────────────────────────────────────────────────┤
│ ZONE DE CONTRÔLE & FILTRAGE :                                          │
│ [ 🔍 Barre de recherche instantanée (Code, nom d'analyse, mot-clé)   ] │
│ [ Filtres Spécialités : Toutes | Biochimie | Hématologie | Hormones... ]│
│ [ Sélecteur d'affichage : 50 / 100 / Tous ] [ Bouton : Télécharger/Imprimer]│
├────────────────────────────────────────────────────────────────────────┤
│ TABLEAU OFFICIEL DES ACTES (Responsive Desktop & Cartes Mobile) :      │
│ Code | Acte & Désignation Médicale | Coeff (B) | Conv. (DH) | Non Conv. (DH)│
│ B118 | Glycémie à jeun             | B 30      | 33,00 DH   | 40,20 DH │
│ B080 | Numération Formule Sanguine | B 80      | 88,00 DH   | 107,20 DH│
│ ...  | ...                         | ...       | ...        | ...      │
├────────────────────────────────────────────────────────────────────────┤
│ SIMULATEUR / PANIER D'ESTIMATION (OPTIONNEL EN BAS DE PAGE) :          │
│ Sélection d'actes pour calculer le devis estimatif d'une ordonnance     │
├────────────────────────────────────────────────────────────────────────┤
│ FOOTER OFFICIEL DU LABORATOIRE ROMA :                                  │
│ Direction : Dr MECHAL Youness · Pharmacien biologiste                  │
│ Adresse 117 Angle Bd 2 Mars · Conventions CNSS, CNOPS, CMIM, Wafa      │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Architecture Technique & Intégration

```
                     public/tarifs-analyses.html
                     (Page autonome HTML5/Tailwind CDN/JS)
                                  │
          ┌───────────────────────┴───────────────────────┐
          ▼                                               ▼
Données de nomenclature marocaine            Logique applicative Vanilla JS
(Tableau d'objets JSON structuré :          (Recherche floue, filtrage par
Code, Désignation, B, Catégorie,             catégorie, calcul dynamique,
Précisions pré-analytiques)                  pagination, tri, simulateur panier)
          │                                               │
          └───────────────────────┬───────────────────────┘
                                  ▼
               Intégration écosystème Laboratoire Roma :
          • Ajout dans public/sitemap.xml
          • Ajout dans public/plan-du-site.html
          • Liens dans TopNav & Footer du site principal
```

#### Base de Données des Actes Intégrés :
La page intègre une base complète structurée par spécialités médicales conformes à l'arrêté 1796-03 et à la pratique de référence marocaine (exemples clés) :
1. **Biochimie Clinique & Métabolisme** : Glycémie (B30), Urée (B25), Créatinine (B30), Acide urique (B30), Cholestérol total (B25), HDL/LDL (B40), Triglycérides (B35), Bilan hépatique ASAT/ALAT (B35 chacun), Bilirubines (B35), Phosphatases alcalines (B40), GGT (B35), Ionogramme sanguin (B70), Calcium, Magnésium, Phosphore, HbA1c (B100), etc.
2. **Hématologie & Hémostase** : Hémogramme / NFS complet (B80), Vitesse de sédimentation VS (B20), Réticulocytes (B40), TP / INR (B50), TCA (B50), Fibrinogène (B40), D-Dimères (B150), Groupage sanguin ABO/Rhésus + RAI (B80), etc.
3. **Hormonologie & Marqueurs Spécialisés** : TSH ultra-sensible (B100), T4 libre (B100), T3 libre (B100), Ferritine (B120), PSA total (B150), PSA libre (B180), Bêta-HCG plasmatique (B100), Prolactine (B120), Cortisol (B120), Vitamine D 25-OH (B250 assimilé), Vitamine B12 / Folates, etc.
4. **Immunologie & Sérologie Infectieuse** : Sérologie VIH 1+2 (B100), Hépatite B Ag HBs (B100), Hépatite C Ac anti-VHC (B120), Toxoplasmose IgG/IgM (B100), Rubéole IgG/IgM (B100), Sérologie Syphilis TPHA/VDRL (B50), CRP quantitative (B40), ASLO, Facteur Rhumatoïde (B50), etc.
5. **Microbiologie, Bactériologie & Parasitologie** : ECBU Examen cytobactériologique des urines avec antibiogramme (B120), Coproculture (B140), Examen parasitologique des selles EPS (B60), Prélèvement vaginal / urétral avec culture (B130), Recherche de sang dans les selles (B40), Test respiratoire à l'urée / Helicobacter pylori, etc.
6. **Actes Hors Nomenclature Assimilés (Arrêté 827-12)** : Marqueurs spécifiques récents avec indications claires de cotation.

---

### 4. Plan d'Exécution & Vérification

1. **Création du fichier `public/tarifs-analyses.html`** :
   - Fichier HTML5 autonome et complet intégrant Tailwind CSS CDN, fontes Google (Plus Jakarta Sans & JetBrains Mono), icônes vectorielles SVG intégrées (sans dépendance externe fragile).
   - En-tête officiel, encadré des références réglementaires avec les deux arrêtés ministériels et les deux cartes tarifaires (1,10 DH conventionnel et 1,34 DH non conventionnel).
   - Barre de recherche instantanée + 8 boutons de filtrage thématique par grande spécialité.
   - Tableau interactif avec pagination fluide (50, 100, Tous) et mode responsive optimisé pour smartphones (cartes claires et aérées avec labels explicites).
   - Simulateur de devis pour sélectionner des actes et visualiser le total calculé.
   - Mentions déontologiques : affichage des conditions de prise en charge et de remboursement AMO/Mutuelles.
2. **Intégration dans le site du laboratoire** :
   - Mise à jour de `public/sitemap.xml` (ajout de la nouvelle URL avec priorité 0.8).
   - Mise à jour de `public/plan-du-site.html` (ajout de la page Tarifs dans l'arborescence des services).
   - Ajout d'un lien d'accès dans le composant de navigation ou le footer du site principal.
3. **Contrôle Qualité & Tests** :
   - Vérification du bon calcul : $Prix = Coeff \times 1{,}10$ et $Prix = Coeff \times 1{,}34$.
   - Validation du filtrage instantané et de la réactivité mobile.
   - Compilation et validation du build (`compile_applet`, `lint_applet`, `npm run build`).

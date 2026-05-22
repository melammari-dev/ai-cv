(function () {
  var STORAGE_KEY = "mouhssine_site_lang";

  var STR = {
    en: {
      "lang.group": "Language",
      "skip.content": "Skip to content",
      "nav.openMenu": "Open menu",
      "nav.aria": "Main navigation",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.cv": "CV",
      "nav.contact": "Contact",
      "meta.title.home": "Mouhssine Yacine EL-AMMARI | Software Engineer",
      "meta.desc.home":
        "Mouhssine Yacine EL-AMMARI — Software engineer specializing in Java, Spring, Angular, architecture and technical leadership.",
      "meta.title.about": "About | Mouhssine Yacine EL-AMMARI",
      "meta.desc.about": "About Mouhssine Yacine EL-AMMARI — background, values, and career timeline.",
      "meta.title.cv": "CV & Experience | Mouhssine Yacine EL-AMMARI",
      "meta.desc.cv": "Professional experience of Mouhssine Yacine EL-AMMARI — CV and career timeline.",
      "meta.title.contact": "Contact | Mouhssine Yacine EL-AMMARI",
      "meta.desc.contact": "Contact Mouhssine Yacine EL-AMMARI — software engineer.",
      "hero.badge": "Software engineering · Architecture",
      "hero.sub":
        "Software engineer with 15+ years of experience. I design and build robust systems in Java, Spring, and Angular—from technical leadership and MCO to CI/CD, security, and performance.",
      "hero.cta1": "Get in touch",
      "hero.cta2": "View experience",
      "highlights.title": "What I bring",
      "highlights.lead":
        "A blend of hands-on development, architecture, and team enablement—aligned with business outcomes.",
      "card1.title": "Public sector & scale",
      "card1.body":
        "Lead technical delivery for large organisations—backlog, MCO, evolutions, and cross-cutting quality and security topics.",
      "card2.title": "Java & Spring ecosystem",
      "card2.body": "Deep experience in J2EE, Spring Boot, integrations, and maintainable service design.",
      "card3.title": "Angular & full stack",
      "card3.body": "Modern front-ends alongside solid APIs and deployment pipelines.",
      "card4.title": "Security & identity",
      "card4.body": "Keycloak, hardening practices, and collaboration on obsolescence and architecture refactors.",
      "card5.title": "DevOps & automation",
      "card5.body": "GitLab CI/CD, Ansible, Unix VMs, and integrated environments.",
      "card6.title": "Performance culture",
      "card6.body": "Performance testing, metrics, profiling, and pragmatic optimisation.",
      "about.title": "About me",
      "about.lead":
        "Software engineer based in Marignane, Provence-Alpes-Côte d’Azur—driven by craft, collaboration, and outcomes that matter to users.",
      "about.p1":
        "I am naturally sociable, dynamic, and committed. I care about programming languages and well-built systems, and I value teamwork, open dialogue, and solutions that stay maintainable over time.",
      "about.p2":
        "With more than fifteen years in the field, I focus on Java, Spring, and Spring Boot, while staying close to infrastructure topics: environment setup, integrated and automated tooling, and virtualisation. I combine solid technical depth with analytical thinking—shipping robust software on schedule while understanding business context alongside product and delivery partners.",
      "about.p3":
        "Debugging and optimisation are among the most motivating parts of my work. I have contributed to performance test design, metrics analysis, and code tuning. Every new topic is a chance to learn, apply a rigorous method, and anticipate the impact of changes.",
      "about.p4":
        "Beyond code, I believe in sharing knowledge, supporting colleagues, and fostering a healthy workplace—open communication helps us deliver quality and build positive teams.",
      "about.btn1": "See full CV",
      "about.btn2": "LinkedIn profile",
      "about.galleryLabel": "Photo highlights from the field",
      "about.fig1.alt": "Laptop on a desk with code on screen—development workspace",
      "about.fig1.cap": "Deep work — architecture & implementation",
      "about.fig2.alt": "Team collaborating around a laptop",
      "about.fig2.cap": "Collaboration & rituals",
      "about.fig3.alt": "Server room with network cables",
      "about.fig3.cap": "Infrastructure & reliability",
      "timeline.title": "Career timeline",
      "timeline.lead":
        "A condensed path from long-form product engineering to performance tooling, notarial platforms, and public-sector technical leadership.",
      "tl1.title": "Payments & integrations — MONEXT",
      "tl1.body":
        "A decade shaping payment solutions for commerce, retail, banks, and fintech—where reliability, security, and integration complexity meet real-world constraints.",
      "tl2.title": "QA automation — Traxens",
      "tl2.body": "Functional BDD automation with Cucumber under Jenkins—building confidence in logistics and tracking software.",
      "tl3.title": "Product engineering — Tricentis",
      "tl3.body": "Feature development on NeoLoad / NeoLoad Web—keeping performance engineering products competitive and dependable.",
      "tl4.title": "Technical architecture — Groupe ADSN",
      "tl4.body": "Notarial act validation and signature server—high-trust domain, precision engineering, and regulated workflows.",
      "tl5.title": "Lead tech & referent — Ville de Marseille",
      "tl5.body":
        "Technical leadership on Java / J2EE / Angular estate, MCO and evolutions, GitLab and Keycloak initiatives, and transformation of the application landscape.",
      "cv.title": "Experience",
      "cv.leadHtml":
        'Roles summarised from my <a href="https://www.linkedin.com/in/mouhssine-yacine-el-ammari-a104b013a/" target="_blank" rel="noopener noreferrer">LinkedIn profile</a>—15+ years across payments, performance tooling, logistics QA, and public-sector transformation.',
      "cv.badge": "Current",
      "cv.loadError":
        "Could not load CV data. Use a local web server (not file://) and check that data/experiences/manifest.json is present.",
      "contact.title": "Contact",
      "contact.lead":
        "The fastest way to reach me is LinkedIn messages. You can also use the form below to compose an email in your mail client.",
      "contact.linksTitle": "Direct links",
      "contact.location": "Location: Marignane, Provence-Alpes-Côte d’Azur, France",
      "contact.formTitle": "Send a message",
      "contact.subject": "Subject",
      "contact.subjectPh": "Collaboration, opportunity…",
      "contact.message": "Message",
      "contact.messagePh": "Your message…",
      "contact.submit": "Open in email app",
      "contact.hint":
        "Opens your mail client with subject and message filled in. Add my address in the To field if you have it, or use LinkedIn for a direct message.",
      "contact.mailFooter": "— Sent from your portfolio contact form",
      "tl.date1": "2010 — 2020",
      "tl.date2": "2020 — 2021",
      "tl.date3": "2021 — 2022",
      "tl.date4": "2022 — 2025",
      "tl.date5": "2025 — today",
    },
    fr: {
      "lang.group": "Langue",
      "skip.content": "Aller au contenu",
      "nav.openMenu": "Ouvrir le menu",
      "nav.aria": "Navigation principale",
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.cv": "CV",
      "nav.contact": "Contact",
      "meta.title.home": "Mouhssine Yacine EL-AMMARI | Ingénieur logiciel",
      "meta.desc.home":
        "Mouhssine Yacine EL-AMMARI — Ingénieur logiciel, Java, Spring, Angular, architecture et pilotage technique.",
      "meta.title.about": "À propos | Mouhssine Yacine EL-AMMARI",
      "meta.desc.about": "À propos de Mouhssine Yacine EL-AMMARI — parcours, valeurs et chronologie.",
      "meta.title.cv": "CV & expérience | Mouhssine Yacine EL-AMMARI",
      "meta.desc.cv": "Expérience professionnelle de Mouhssine Yacine EL-AMMARI — CV et parcours.",
      "meta.title.contact": "Contact | Mouhssine Yacine EL-AMMARI",
      "meta.desc.contact": "Contacter Mouhssine Yacine EL-AMMARI — ingénieur logiciel.",
      "hero.badge": "Ingénierie logicielle · Architecture",
      "hero.sub":
        "Ingénieur logiciel avec plus de 15 ans d’expérience. Je conçois et réalise des systèmes robustes en Java, Spring et Angular—du pilotage technique et de la MCO au CI/CD, à la sécurité et aux performances.",
      "hero.cta1": "Me contacter",
      "hero.cta2": "Voir l’expérience",
      "highlights.title": "Ce que j’apporte",
      "highlights.lead":
        "Un mélange de développement terrain, d’architecture et d’accompagnement d’équipe—au service des résultats métier.",
      "card1.title": "Secteur public & ampleur",
      "card1.body":
        "Pilotage technique pour de grands organismes—backlog, MCO, évolutions, et sujets transverses qualité et sécurité.",
      "card2.title": "Écosystème Java & Spring",
      "card2.body": "Solide expérience J2EE, Spring Boot, intégrations et conception de services maintenables.",
      "card3.title": "Angular & full stack",
      "card3.body": "Front modernes avec API fiables et pipelines de déploiement.",
      "card4.title": "Sécurité & identité",
      "card4.body": "Keycloak, durcissement, obsolescence et refontes d’architecture.",
      "card5.title": "DevOps & automatisation",
      "card5.body": "GitLab CI/CD, Ansible, VM Unix et environnements intégrés.",
      "card6.title": "Culture performance",
      "card6.body": "Tests de performance, métriques, profilage et optimisations pragmatiques.",
      "about.title": "À propos de moi",
      "about.lead":
        "Ingénieur logiciel basé à Marignane, en Provence-Alpes-Côte d’Azur—animé par le métier, la collaboration et l’impact utilisateur.",
      "about.p1":
        "D’un naturel sociable, dynamique et impliqué, je suis passionné par les langages et les systèmes bien construits. J’apprécie le travail en équipe, les échanges ouverts et les solutions durables et maintenables.",
      "about.p2":
        "Fort de plus de quinze ans d’expérience, je me concentre sur Java, Spring et Spring Boot, tout en restant proche de l’infrastructure : mise en place d’environnements, outillage intégré et automatisé, virtualisation. Je combine expertise technique et esprit analytique pour livrer un logiciel robuste dans les temps, tout en comprenant le contexte métier avec les équipes produit et delivery.",
      "about.p3":
        "Le débogage et l’optimisation comptent parmi les aspects les plus motivants de mon travail. J’ai contribué à des cahiers de tests de performance, à l’analyse de métriques et au tuning de code. Chaque nouveau sujet est une occasion d’apprendre et d’anticiper les effets de chaque intervention.",
      "about.p4":
        "Au-delà du code, je crois au partage des connaissances, au soutien aux collègues et à un environnement de travail sain—la communication ouverte aide à livrer la qualité et à renforcer les équipes.",
      "about.btn1": "Voir le CV complet",
      "about.btn2": "Profil LinkedIn",
      "about.galleryLabel": "Images liées au terrain",
      "about.fig1.alt": "Ordinateur portable avec du code à l’écran — espace de développement",
      "about.fig1.cap": "Travail de fond — architecture & réalisation",
      "about.fig2.alt": "Équipe qui collabore autour d’un ordinateur",
      "about.fig2.cap": "Collaboration & rituels",
      "about.fig3.alt": "Salle serveurs et câblage réseau",
      "about.fig3.cap": "Infrastructure & fiabilité",
      "timeline.title": "Parcours chronologique",
      "timeline.lead":
        "Un fil conducteur : produit longue durée, outillage performance, plateforme notariale, puis pilotage technique dans le secteur public.",
      "tl1.title": "Paiement & intégrations — MONEXT",
      "tl1.body":
        "Dix ans sur des solutions de paiement pour le commerce, la banque et la fintech—fiabilité, sécurité et intégrations exigeantes.",
      "tl2.title": "Automatisation QA — Traxens",
      "tl2.body": "Automatisation fonctionnelle BDD avec Cucumber sous Jenkins pour la logistique et le tracking.",
      "tl3.title": "Ingénierie produit — Tricentis",
      "tl3.body": "Évolutions sur NeoLoad / NeoLoad Web—outils de tests de performance entreprise.",
      "tl4.title": "Architecture technique — Groupe ADSN",
      "tl4.body": "Serveur de validation et signature d’actes notariés—domaine à forte exigence de confiance.",
      "tl5.title": "Lead tech & référent — Ville de Marseille",
      "tl5.body":
        "Pilotage technique du patrimoine Java / J2EE / Angular, MCO et évolutions, initiatives GitLab et Keycloak, transformation du paysage applicatif.",
      "cv.title": "Expérience",
      "cv.leadHtml":
        'Postes synthétisés depuis mon <a href="https://www.linkedin.com/in/mouhssine-yacine-el-ammari-a104b013a/" target="_blank" rel="noopener noreferrer">profil LinkedIn</a>—plus de 15 ans : paiement, tests de performance, QA logistique et transformation du secteur public.',
      "cv.badge": "Actuel",
      "cv.loadError":
        "Impossible de charger le CV. Utilisez un serveur web local (pas file://) et vérifiez que data/experiences/manifest.json est présent.",
      "contact.title": "Contact",
      "contact.lead":
        "Le moyen le plus rapide : les messages LinkedIn. Vous pouvez aussi utiliser le formulaire pour préparer un e-mail dans votre client mail.",
      "contact.linksTitle": "Liens directs",
      "contact.location": "Localisation : Marignane, Provence-Alpes-Côte d’Azur, France",
      "contact.formTitle": "Envoyer un message",
      "contact.subject": "Objet",
      "contact.subjectPh": "Collaboration, opportunité…",
      "contact.message": "Message",
      "contact.messagePh": "Votre message…",
      "contact.submit": "Ouvrir dans l’application mail",
      "contact.hint":
        "Ouvre votre client mail avec l’objet et le message préremplis. Ajoutez mon adresse en destinataire si vous l’avez, ou écrivez-moi sur LinkedIn.",
      "contact.mailFooter": "— Envoyé depuis le formulaire de contact du site",
      "tl.date1": "2010 — 2020",
      "tl.date2": "2020 — 2021",
      "tl.date3": "2021 — 2022",
      "tl.date4": "2022 — 2025",
      "tl.date5": "2025 — aujourd’hui",
    },
  };

  function getLang() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s === "en" || s === "fr") return s;
    } catch (e) {}
    var n = (navigator.language || "en").toLowerCase();
    return n.indexOf("fr") === 0 ? "fr" : "en";
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "fr") return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    apply(lang);
  }

  function t(lang, key) {
    var pack = STR[lang] || STR.en;
    if (pack[key] !== undefined) return pack[key];
    return STR.en[key] !== undefined ? STR.en[key] : "";
  }

  function apply(lang) {
    var pack = STR[lang] || STR.en;
    document.documentElement.lang = lang === "fr" ? "fr" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && pack[key] !== undefined) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key && pack[key] !== undefined) el.innerHTML = pack[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && pack[key] !== undefined) el.setAttribute("placeholder", pack[key]);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      spec.split(";").forEach(function (part) {
        part = part.trim();
        var c = part.indexOf(":");
        if (c === -1) return;
        var attr = part.slice(0, c).trim();
        var k = part.slice(c + 1).trim();
        if (attr && k !== undefined && pack[k] !== undefined) el.setAttribute(attr, pack[k]);
      });
    });

    var page = document.body.getAttribute("data-page");
    if (page) {
      var titleKey = "meta.title." + page;
      var descKey = "meta.desc." + page;
      if (pack[titleKey]) {
        document.title = pack[titleKey];
        var ogTitle = document.querySelector('meta[property="og:title"]');
        var twTitle = document.querySelector('meta[name="twitter:title"]');
        if (ogTitle) ogTitle.setAttribute("content", pack[titleKey]);
        if (twTitle) twTitle.setAttribute("content", pack[titleKey]);
      }
      var descMeta = document.querySelector('meta[name="description"]');
      if (pack[descKey]) {
        if (descMeta) descMeta.setAttribute("content", pack[descKey]);
        var ogDesc = document.querySelector('meta[property="og:description"]');
        var twDesc = document.querySelector('meta[name="twitter:description"]');
        if (ogDesc) ogDesc.setAttribute("content", pack[descKey]);
        if (twDesc) twDesc.setAttribute("content", pack[descKey]);
      }
      var ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute("content", lang === "fr" ? "fr_FR" : "en_GB");
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("lang-btn--active", active);
    });

    var switcher = document.querySelector(".lang-switcher");
    if (switcher && pack["lang.group"]) switcher.setAttribute("aria-label", pack["lang.group"]);

    document.dispatchEvent(new CustomEvent("site:langchange", { detail: { lang: lang } }));
  }

  function initLangButtons() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang) setLang(lang);
      });
    });
  }

  function init() {
    apply(getLang());
    initLangButtons();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.siteI18n = {
    getLang: getLang,
    setLang: setLang,
    t: function (key) {
      return t(getLang(), key);
    },
    getMailFooter: function () {
      return t(getLang(), "contact.mailFooter");
    },
  };
})();

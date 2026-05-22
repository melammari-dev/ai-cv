(function () {
  var MANIFEST = "data/experiences/manifest.json";

  /* ── Education data (bilingual, static) ─────────────────────── */
  var EDU = [
    {
      period: "2007 — 2008",
      degree: {
        fr: "Master II (DESS) · Génie informatique & génie logiciel",
        en: "Master II (DESS) · Computer Engineering & Software Engineering"
      },
      school: "Université Paul Cézanne",
      location: "Marseille"
    },
    {
      period: "2006 — 2007",
      degree: {
        fr: "Master I · Informatique — SIS (Sécurité des systèmes d'information)",
        en: "Master I · Computer Science — Information Systems Security"
      },
      school: "Université Paul Cézanne",
      location: "Marseille"
    },
    {
      period: "2004 — 2006",
      degree: {
        fr: "Licence Informatique",
        en: "Bachelor's Degree in Computer Science"
      },
      school: "CMI — Centre Mathématiques et Informatique",
      location: "Château Gombert, Marseille"
    },
    {
      period: "2003 — 2004",
      degree: {
        fr: "DEUG MIAS · Mathématiques & Informatique",
        en: "DEUG MIAS · Mathematics & Computer Science"
      },
      school: "Université de Provence",
      location: "Marseille"
    }
  ];

  /* ── Roots ───────────────────────────────────────────────────── */
  var tlRoot  = document.getElementById("cv-timeline-root");
  var eduRoot = document.getElementById("edu-root");
  if (!tlRoot && !eduRoot) return;

  var expCache = null;

  /* ── Helpers ─────────────────────────────────────────────────── */
  function lang() {
    return window.siteI18n && window.siteI18n.getLang ? window.siteI18n.getLang() : "fr";
  }
  function t(key) {
    return window.siteI18n && window.siteI18n.t ? window.siteI18n.t(key) : key;
  }
  function pick(obj, L) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[L] || obj.en || "";
  }
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ── Timeline rendering ──────────────────────────────────────── */
  function renderTimeline() {
    if (!tlRoot) return;
    if (!expCache || !expCache.length) {
      tlRoot.innerHTML = '<p class="cv-load-error" role="alert">' + esc(t("cv.loadError")) + "</p>";
      return;
    }
    var L = lang();
    tlRoot.innerHTML = '<div class="tl">' +
      expCache.map(function (exp, i) { return renderItem(exp, i, L); }).join("") +
      "</div>";

    tlRoot.querySelectorAll(".tl-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".tl-item");
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
        btn.querySelector(".tl-btn-label").textContent = open ? t("cv.hideDetails") : t("cv.showDetails");
      });
    });
  }

  function renderItem(exp, idx, L) {
    var logo       = exp.logo || "";
    var logoAlt    = pick(exp.logoAlt, L);
    var company    = exp.company || {};
    var name       = company.name || "";
    var url        = company.url  || "#";
    var meta       = pick(exp.meta, L);
    var role       = pick(exp.role, L);
    var isCurrent  = !!exp.current;
    var bodyId     = "exp-body-" + idx;
    var bullets    = Array.isArray(exp.bullets) ? exp.bullets : [];

    var logoHtml = logo
      ? '<img class="tl-logo" src="' + esc(logo) + '" alt="' + esc(logoAlt || name) +
        '" width="44" height="44" loading="lazy" decoding="async" referrerpolicy="no-referrer">'
      : '<div class="tl-logo-fb">' + esc(name.charAt(0).toUpperCase()) + '</div>';

    var bulletsHtml = bullets.map(function (b) {
      var text = pick(b, L);
      return "<li" + (b.html ? ' class="cv-li-html"' : "") + ">" + (b.html ? text : esc(text)) + "</li>";
    }).join("");

    var toggleBtn = bullets.length
      ? '<button class="tl-btn" aria-expanded="false" aria-controls="' + bodyId + '">' +
          '<span class="tl-btn-label">' + esc(t("cv.showDetails")) + '</span>' +
          '<svg class="tl-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</button>'
      : "";

    var bodySection = bullets.length
      ? '<div class="tl-body" id="' + bodyId + '">' +
          '<div class="tl-body-inner">' +
            '<ul class="tl-bullets">' + bulletsHtml + '</ul>' +
          '</div>' +
        '</div>'
      : "";

    return (
      '<div class="tl-item' + (isCurrent ? " is-current" : "") + '">' +
        '<div class="tl-stem">' +
          '<div class="tl-dot"></div>' +
          '<div class="tl-connector"></div>' +
        '</div>' +
        '<div class="tl-card">' +
          '<div class="tl-head">' +
            '<div class="tl-logo-wrap">' + logoHtml + '</div>' +
            '<div class="tl-info">' +
              '<p class="tl-meta">' + esc(meta) + '</p>' +
              '<h2 class="tl-role">' + esc(role) +
                (isCurrent ? ' <span class="badge-current">' + esc(t("cv.badge")) + '</span>' : "") +
              '</h2>' +
              '<p class="tl-company">' +
                '<a href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(name) + '</a>' +
              '</p>' +
            '</div>' +
            toggleBtn +
          '</div>' +
          bodySection +
        '</div>' +
      '</div>'
    );
  }

  /* ── Education rendering ─────────────────────────────────────── */
  function renderEdu() {
    if (!eduRoot) return;
    var L = lang();
    eduRoot.innerHTML = EDU.map(function (e) {
      return (
        '<div class="edu-card">' +
          '<div class="edu-period">' + esc(e.period) + '</div>' +
          '<div class="edu-body">' +
            '<div class="edu-degree">' + esc(pick(e.degree, L)) + '</div>' +
            '<div class="edu-school">' + esc(e.school) + ' · ' + esc(e.location) + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  /* ── Language change ─────────────────────────────────────────── */
  document.addEventListener("site:langchange", function () {
    if (expCache) renderTimeline();
    else if (tlRoot && tlRoot.querySelector(".cv-load-error")) {
      tlRoot.innerHTML = '<p class="cv-load-error" role="alert">' + esc(t("cv.loadError")) + "</p>";
    }
    renderEdu();
  });

  /* ── Load experiences ────────────────────────────────────────── */
  function loadAll() {
    fetch(MANIFEST, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error("manifest"); return r.json(); })
      .then(function (manifest) {
        var files = manifest.experienceFiles || [];
        if (!files.length) throw new Error("empty");
        return Promise.all(files.map(function (path) {
          return fetch(path, { cache: "no-cache" }).then(function (r) {
            if (!r.ok) throw new Error(path);
            return r.json();
          });
        }));
      })
      .then(function (items) {
        expCache = items.slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
        renderTimeline();
        renderEdu();
      })
      .catch(function () {
        expCache = null;
        if (tlRoot) {
          tlRoot.innerHTML = '<p class="cv-load-error" role="alert">' + esc(t("cv.loadError")) + "</p>";
        }
        renderEdu();
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAll);
  } else {
    loadAll();
  }
}());

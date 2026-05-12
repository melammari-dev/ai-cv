(function () {
  var root = document.getElementById("cv-list-root");
  if (!root) return;

  var cache = null;
  var manifestUrl = "data/experiences/manifest.json";

  function lang() {
    return window.siteI18n && window.siteI18n.getLang ? window.siteI18n.getLang() : "en";
  }

  function pick(obj, L) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    if (obj[L]) return obj[L];
    if (obj.en) return obj.en;
    return "";
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function badgeLabel() {
    return window.siteI18n && window.siteI18n.t ? window.siteI18n.t("cv.badge") : "Current";
  }

  function loadErrorHtml() {
    var msg =
      window.siteI18n && window.siteI18n.t ? window.siteI18n.t("cv.loadError") : "Could not load experience data.";
    return '<p class="cv-load-error" role="alert">' + esc(msg) + "</p>";
  }

  function renderOne(exp, L) {
    var logoSrc = exp.logo || "";
    var logoAlt = pick(exp.logoAlt, L);
    var company = exp.company || {};
    var companyName = company.name || "";
    var companyUrl = company.url || "#";
    var meta = pick(exp.meta, L);
    var role = pick(exp.role, L);
    var isCurrent = !!exp.current;

    var h2Inner =
      '<span class="cv-role">' +
      esc(role) +
      "</span>" +
      (isCurrent ? ' <span class="badge-current">' + esc(badgeLabel()) + "</span>" : "");

    var bullets = Array.isArray(exp.bullets) ? exp.bullets : [];
    var listHtml = bullets
      .map(function (b) {
        var text = pick(b, L);
        var allowHtml = !!b.html;
        var inner = allowHtml ? text : esc(text);
        return "<li" + (allowHtml ? ' class="cv-li-html"' : "") + ">" + inner + "</li>";
      })
      .join("");

    return (
      '<article class="cv-item">' +
      '<div class="cv-logo-wrap">' +
      '<img class="cv-logo" src="' +
      esc(logoSrc) +
      '" alt="' +
      esc(logoAlt || companyName) +
      '" width="112" height="112" loading="lazy" decoding="async" referrerpolicy="no-referrer" />' +
      "</div>" +
      "<div>" +
      '<p class="cv-meta">' +
      esc(meta) +
      "</p>" +
      "<h2>" +
      h2Inner +
      "</h2>" +
      '<p class="company"><a href="' +
      esc(companyUrl) +
      '" target="_blank" rel="noopener noreferrer">' +
      esc(companyName) +
      "</a></p>" +
      "<ul>" +
      listHtml +
      "</ul>" +
      "</div>" +
      "</article>"
    );
  }

  function render() {
    if (!cache || !cache.length) {
      root.innerHTML = loadErrorHtml();
      return;
    }
    var L = lang();
    root.innerHTML = cache.map(function (exp) {
      return renderOne(exp, L);
    }).join("");
  }

  function loadAll() {
    fetch(manifestUrl, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error("manifest");
        return r.json();
      })
      .then(function (manifest) {
        var files = manifest.experienceFiles || [];
        if (!files.length) throw new Error("empty");
        return Promise.all(
          files.map(function (path) {
            return fetch(path, { cache: "no-cache" }).then(function (r) {
              if (!r.ok) throw new Error(path);
              return r.json();
            });
          })
        );
      })
      .then(function (items) {
        cache = items.slice().sort(function (a, b) {
          return (a.order || 0) - (b.order || 0);
        });
        render();
      })
      .catch(function () {
        cache = null;
        root.innerHTML = loadErrorHtml();
      });
  }

  document.addEventListener("site:langchange", function () {
    if (cache) render();
    else if (root.querySelector(".cv-load-error")) root.innerHTML = loadErrorHtml();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAll);
  } else {
    loadAll();
  }
})();

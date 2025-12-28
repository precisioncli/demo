const csrfToken = "d2a3e234184733503e2bf5fb0d65510ee08ef6af";
const markdownGuide = "Markdown Guide";
const locale = "en";
const saved = "saved";
const saving = "autosaving";
const whmcsBaseUrl = "/whmcs";

if (navigator.userAgent.includes("Firefox")) {
  if (window.location.hash.includes(":~:text=")) {
    window.location.href = window.location.href.split("#")[0];
  }
}

void {
  csrfToken,
  markdownGuide,
  locale,
  saved,
  saving,
  whmcsBaseUrl
};

const Tawk_API = window.Tawk_API || {};
const Tawk_LoadStart = new Date();

(function () {
  const script = document.createElement("script");
  const firstScript = document.getElementsByTagName("script")[0];
  script.async = true;
  script.src = "https://embed.tawk.to/5eeb66f54a7c6258179adf56/default";
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  firstScript.parentNode.insertBefore(script, firstScript);
})();

void {
  Tawk_API,
  Tawk_LoadStart
};

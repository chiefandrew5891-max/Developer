if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
window.addEventListener("pageshow", () => {
  if (!window.location.hash) window.scrollTo(0, 0);
});

const contactEmail = "support@beautyplanner.app";
const languageButton = document.querySelector(".language-switch");
let language = localStorage.getItem("beautyPlannerLanguage") || "en";

function renderPolicy(policy) {
  const content = document.querySelector("#policy-content");
  content.replaceChildren();

  for (let section = 1; section <= 13; section += 1) {
    const sectionElement = document.createElement("section");
    sectionElement.className = "policy-section";
    const heading = document.createElement("h2");
    heading.textContent = policy[`privacy_policy_section_${section}_title`];
    sectionElement.append(heading);

    const paragraphs = [];
    const bullets = [];
    for (const [key, value] of Object.entries(policy)) {
      if (key.startsWith(`privacy_policy_section_${section}_p`)) paragraphs.push(value);
      if (key.startsWith(`privacy_policy_section_${section}_b`)) bullets.push(value);
    }

    paragraphs.forEach((value) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = value;
      sectionElement.append(paragraph);
    });

    if (bullets.length) {
      const list = document.createElement("ul");
      bullets.forEach((value) => {
        const item = document.createElement("li");
        item.textContent = value;
        list.append(item);
      });
      sectionElement.append(list);
    }

    if (section === 13) {
      const contact = document.createElement("p");
      contact.className = "policy-contact";
      contact.textContent = `${policy.privacy_policy_contact_email_prefix} `;
      const link = document.createElement("a");
      link.href = `mailto:${contactEmail}`;
      link.textContent = contactEmail;
      contact.append(link);
      sectionElement.append(contact);
    }

    content.append(sectionElement);
  }
}

function setLanguage(nextLanguage, policies) {
  language = nextLanguage;
  const policy = policies[language];
  document.documentElement.lang = language;
  document.title = `${policy.privacy_policy_title} — Beauty Planner`;
  document.querySelector("#policy-title").textContent = policy.privacy_policy_title;
  document.querySelector("#policy-updated").textContent = policy.privacy_policy_last_updated;
  document.querySelector("#policy-intro").textContent = policy.privacy_policy_intro;
  document.querySelector("#policy-label").textContent = language === "ru" ? "ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ" : "LEGAL";
  document.querySelector("#footer-copy").textContent = language === "ru" ? "Для бьюти-профессионалов — с заботой о деталях." : "For beauty professionals, by design.";
  document.querySelector("#terms-link").textContent = language === "ru" ? "Условия использования" : "Terms of Use";
  languageButton.textContent = language === "en" ? "RU" : "EN";
  languageButton.setAttribute("aria-label", language === "en" ? "Switch to Russian" : "Переключить на английский");
  localStorage.setItem("beautyPlannerLanguage", language);
  renderPolicy(policy);
}

fetch("assets/privacy-policy.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Unable to load Privacy Policy: ${response.status}`);
    return response.json();
  })
  .then((policies) => {
    languageButton.addEventListener("click", () => setLanguage(language === "en" ? "ru" : "en", policies));
    setLanguage(language, policies);
  })
  .catch((error) => {
    console.error(error);
    document.querySelector("#policy-content").textContent = "Unable to load the Privacy Policy. Please try again later.";
  });

const translations = {
  en: {
    navFeatures: "Features", navWorkflow: "How it works", navPremium: "Premium",
    eyebrow: "FOR BEAUTY PROFESSIONALS", heroTitle: "Your day. Your artistry.<br><em>No chaos.</em>",
    heroText: "Leave notebook confusion behind. Beauty Planner handles appointments and clients, so you have more time for creativity and the work you love.",
    appStoreLabel: "Download on the", googlePlayLabel: "Get it on", heroLink: "See how it works",
    floatingTitle: "All set", floatingText: "2 appointments today", introEyebrow: "EVERYTHING IN ONE PLACE",
    introTitle: "Less admin.<br><em>More you.</em>", introText: "Created for people who make beauty - from independent home professionals to leading salon specialists. Bring perfect order to bookings without the stress.",
    featureCalendarTitle: "A smart calendar that thinks ahead", featureCalendarText: "<strong>Plan visits in a few taps,</strong> manage available slots and say goodbye to overlapping bookings.",
    featureClientsTitle: "Every client story in your pocket", featureClientsText: "<strong>Preferences, past services and important details</strong> stay close, so every visit feels personal.",
    featureInsightTitle: "Your success, in numbers", featureInsightText: "<strong>Follow your income and growth</strong> through clear, easy-to-read reports.",
    featureCareTitle: "Your data, safely yours", featureCareText: "<strong>Local backups and a personal password</strong> keep your client base where it belongs: with you.",
    workflowEyebrow: "MADE FOR YOUR EVERYDAY", workflowTitle: "Your ideal workday,<br><em>step by step.</em>",
    workflowText: "A simple route to order that gives you back hours of free time every week.",
    stepOneTitle: "A quick start", stepOneText: "Set your schedule, add favourite services and your price list in just a few minutes.",
    stepTwoTitle: "Effortless planning", stepTwoText: "Add a client to the calendar and see your whole day come together instantly.",
    stepThreeTitle: "Focus on the person", stepThreeText: "Reminders and ready-made templates make service feel seamless and clients return.",
    premiumEyebrow: "GROW WHEN YOU'RE READY", premiumTitle: "Work your way.<br>Grow <em>without limits.</em>",
    premiumText: "Start with the essentials - they are enough for a full working day. Whenever you are ready to grow, Premium opens up more possibilities.",
    premiumCardLabel: "WITH PREMIUM", premiumOne: "Unlimited active appointments", premiumTwo: "Full statistics and archive access", premiumThree: "Expanded scheduling tools", premiumFour: "Advanced encrypted backups",
    ctaEyebrow: "BEAUTY PLANNER", ctaTitle: "Make space for<br>what you <em>love.</em>", ctaText: "A more organised day is only a plan away.",
    footerText: "For beauty professionals, by design.", privacyLink: "Privacy Policy", termsLink: "Terms of Use"
  },
  ru: {
    navFeatures: "Возможности", navWorkflow: "Как это работает", navPremium: "Premium",
    eyebrow: "ДЛЯ БЬЮТИ-ПРОФЕССИОНАЛОВ", heroTitle: "Ваш день. Ваша красота.<br><em>Никакой суеты.</em>",
    heroText: "Забудьте про путаницу в блокнотах. Beauty Planner берёт на себя рутину с записями и клиентами, оставляя вам время только на творчество и любимое дело.",
    appStoreLabel: "Загрузить в", googlePlayLabel: "Доступно в", heroLink: "Как это работает",
    floatingTitle: "Всё готово", floatingText: "2 записи на сегодня", introEyebrow: "ВСЁ В ОДНОМ МЕСТЕ",
    introTitle: "Меньше рутины.<br><em>Больше вас.</em>", introText: "Создано для тех, кто творит красоту: от частных мастеров на дому до топ-специалистов салонов. Наведите идеальный порядок в записях без лишних нервов.",
    featureCalendarTitle: "Умный календарь, который думает за вас", featureCalendarText: "<strong>Планируйте визиты в пару касаний,</strong> управляйте окнами и забудьте о накладках.",
    featureClientsTitle: "Вся история клиента в вашем кармане", featureClientsText: "<strong>Предпочтения, прошлые услуги и важные детали</strong> всегда под рукой, чтобы каждый визит был особенным.",
    featureInsightTitle: "Ваш успех в цифрах", featureInsightText: "<strong>Следите за доходами и ростом</strong> вашего дела в понятных и наглядных отчётах.",
    featureCareTitle: "Ваши данные под надёжной защитой", featureCareText: "<strong>Локальные резервные копии и личный пароль</strong> гарантируют, что вся клиентская база останется только вашей.",
    workflowEyebrow: "СОЗДАНО ДЛЯ КАЖДОГО ДНЯ", workflowTitle: "Ваш идеальный рабочий день<br><em>шаг за шагом.</em>",
    workflowText: "Простой путь к порядку, который сэкономит вам часы свободного времени каждую неделю.",
    stepOneTitle: "Быстрый старт", stepOneText: "Задайте свой график, добавьте любимые услуги и прайс за пару минут.",
    stepTwoTitle: "Лёгкое планирование", stepTwoText: "Добавляйте клиента в календарь и сразу видите, как строится ваш день.",
    stepThreeTitle: "Фокус на человеке", stepThreeText: "Напоминания и готовые шаблоны сделают сервис безупречным, а клиентов — постоянными.",
    premiumEyebrow: "РАСТИТЕ, КОГДА БУДЕТЕ ГОТОВЫ", premiumTitle: "Работайте в своём ритме.<br>Растите <em>без ограничений.</em>",
    premiumText: "Начните с базовой версии — её хватит для полноценной работы. А когда захотите масштабировать свой успех, Premium откроет безграничные возможности.",
    premiumCardLabel: "С PREMIUM", premiumOne: "Неограниченное число активных записей", premiumTwo: "Полная статистика и доступ к архиву", premiumThree: "Расширенные инструменты планирования", premiumFour: "Расширенные зашифрованные резервные копии",
    ctaEyebrow: "BEAUTY PLANNER", ctaTitle: "Больше места для<br>того, что вы <em>любите.</em>", ctaText: "Более организованный день начинается с плана.",
    footerText: "Для бьюти-профессионалов — с заботой о деталях.", privacyLink: "Политика конфиденциальности", termsLink: "Условия использования"
  }
};

const switcher = document.querySelector(".language-switch");
let language = localStorage.getItem("beautyPlannerLanguage") || "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = language === "ru" ? "Beauty Planner — ваш день без суеты" : "Beauty Planner — your day, no chaos";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translations[language][element.dataset.i18nHtml];
  });
  switcher.textContent = language === "en" ? "RU" : "EN";
  switcher.setAttribute("aria-label", language === "en" ? "Switch to Russian" : "Переключить на английский");
  localStorage.setItem("beautyPlannerLanguage", language);
}

switcher.addEventListener("click", () => setLanguage(language === "en" ? "ru" : "en"));
setLanguage(language);

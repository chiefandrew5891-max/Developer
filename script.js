const translations = {
  en: {
    navFeatures: "Features", navWorkflow: "How it works", navPremium: "Premium",
    eyebrow: "FOR BEAUTY PROFESSIONALS", heroTitle: "Your workday,<br><em>beautifully</em> planned.",
    heroText: "Beauty Planner keeps appointments, clients, services and your schedule together in one calm, focused workspace.",
    appStoreLabel: "Download on the", googlePlayLabel: "Get it on", heroLink: "See how it works",
    floatingTitle: "All set", floatingText: "2 appointments today", introEyebrow: "EVERYTHING IN ONE PLACE",
    introTitle: "Less admin.<br><em>More you.</em>", introText: "Designed for independent specialists, home-based professionals and salon workers who want their workday to feel clear and in control.",
    featureCalendarTitle: "A calendar that works around you", featureCalendarText: "Plan appointments in seconds, manage your working hours and block out unavailable time with ease.",
    featureClientsTitle: "Clients, remembered", featureClientsText: "Keep client details and services close at hand. Returning client details can be filled from previous appointments.",
    featureInsightTitle: "See your progress", featureInsightText: "Track your work and income with clear statistics, built for your business.",
    featureCareTitle: "Your business, safely yours", featureCareText: "Create local backups, restore when needed and protect them with your own password.",
    workflowEyebrow: "MADE FOR YOUR EVERYDAY", workflowTitle: "From first booking<br>to <em>done for the day.</em>",
    workflowText: "Everything you need for a smoother client workflow, without making your day more complicated.",
    stepOneTitle: "Set up your space", stepOneText: "Choose your profile, services, schedule and preferences.",
    stepTwoTitle: "Plan your appointments", stepTwoText: "Add bookings through the calendar and see what's next at a glance.",
    stepThreeTitle: "Focus on your clients", stepThreeText: "Use reminders, service templates and client history to keep every visit personal.",
    premiumEyebrow: "GROW WHEN YOU'RE READY", premiumTitle: "Start simple.<br>Go <em>further.</em>",
    premiumText: "The free version covers your daily appointments. Premium opens up more room and more tools as your business grows.",
    premiumCardLabel: "WITH PREMIUM", premiumOne: "Unlimited active appointments", premiumTwo: "Full statistics and archive access", premiumThree: "Expanded scheduling tools", premiumFour: "Advanced encrypted backups",
    ctaEyebrow: "BEAUTY PLANNER", ctaTitle: "Make space for<br>what you <em>love.</em>", ctaText: "A more organised day is only a plan away.",
    footerText: "For beauty professionals, by design."
  },
  ru: {
    navFeatures: "Возможности", navWorkflow: "Как это работает", navPremium: "Premium",
    eyebrow: "ДЛЯ БЬЮТИ-ПРОФЕССИОНАЛОВ", heroTitle: "Ваш рабочий день —<br><em>красиво</em> спланирован.",
    heroText: "Beauty Planner объединяет записи, клиентов, услуги и расписание в одном спокойном и понятном пространстве.",
    appStoreLabel: "Загрузить в", googlePlayLabel: "Доступно в", heroLink: "Как это работает",
    floatingTitle: "Всё готово", floatingText: "2 записи на сегодня", introEyebrow: "ВСЁ В ОДНОМ МЕСТЕ",
    introTitle: "Меньше рутины.<br><em>Больше вас.</em>", introText: "Для частных мастеров, специалистов на дому и сотрудников салонов, которые хотят держать рабочий день под контролем.",
    featureCalendarTitle: "Календарь, который подстраивается под вас", featureCalendarText: "Планируйте записи за секунды, управляйте графиком и отмечайте недоступное время.",
    featureClientsTitle: "Клиенты — всегда рядом", featureClientsText: "Храните данные клиентов и услуги под рукой. Данные постоянных клиентов можно подставить из прошлых записей.",
    featureInsightTitle: "Видьте свой прогресс", featureInsightText: "Отслеживайте работу и доход в понятной статистике для вашего дела.",
    featureCareTitle: "Ваш бизнес — в безопасности", featureCareText: "Создавайте локальные резервные копии, восстанавливайте данные и защищайте их своим паролем.",
    workflowEyebrow: "СОЗДАНО ДЛЯ КАЖДОГО ДНЯ", workflowTitle: "От первой записи<br>до <em>конца дня.</em>",
    workflowText: "Всё для более удобной работы с клиентами — без лишней сложности.",
    stepOneTitle: "Настройте пространство", stepOneText: "Выберите профиль, услуги, график и нужные параметры.",
    stepTwoTitle: "Планируйте записи", stepTwoText: "Добавляйте встречи в календарь и сразу видьте, что дальше.",
    stepThreeTitle: "Сосредоточьтесь на клиентах", stepThreeText: "Напоминания, шаблоны услуг и история клиентов помогут сделать каждый визит особенным.",
    premiumEyebrow: "РАСТИТЕ, КОГДА БУДЕТЕ ГОТОВЫ", premiumTitle: "Начните просто.<br>Идите <em>дальше.</em>",
    premiumText: "Бесплатной версии достаточно для ежедневных записей. Premium даёт больше пространства и инструментов по мере роста вашего дела.",
    premiumCardLabel: "С PREMIUM", premiumOne: "Неограниченное число активных записей", premiumTwo: "Полная статистика и доступ к архиву", premiumThree: "Расширенные инструменты планирования", premiumFour: "Расширенные зашифрованные резервные копии",
    ctaEyebrow: "BEAUTY PLANNER", ctaTitle: "Больше места для<br>того, что вы <em>любите.</em>", ctaText: "Более организованный день начинается с плана.",
    footerText: "Для бьюти-профессионалов — с заботой о деталях."
  }
};

const switcher = document.querySelector(".language-switch");
let language = localStorage.getItem("beautyPlannerLanguage") || "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = language === "ru" ? "Beauty Planner — ваш день, красиво спланирован" : "Beauty Planner — your day, beautifully planned";
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

const translations = {
  fr: {
    navAbout: "A propos",
    navExperience: "Experience",
    navSkills: "Competences",
    navEducation: "Formation",
    navProjects: "Projets",
    navContact: "Contact",
    eyebrow: "Portfolio 2026",
    heroTitle: "Ilies Benali",
    heroLine: "Etudiant | Developpeur web",
    heroSubtitle:
      "Je construis des experiences web nettes, rapides et orientees resultat.",
    statLabel1: "Localisation",
    statValue1: "Chartres, France",
    statLabel2: "Focus",
    statValue2: "Front-end & UX",
    statLabel3: "Stack",
    ctaProjects: "Voir mes projets",
    aboutTitle: "A propos",
    aboutQuick:
      "Etudiant developpeur web base a Chartres, je transforme des idees metier en interfaces claires et efficaces.",
    aboutText:
      "Mon approche combine design utile, execution rapide et attention au detail. Je privilegie des experiences fluides, des performances solides et une communication visuelle claire.",
    experienceTitle: "Experience",
    linkedinSource:
      "Contenu adapte d'apres les informations publiques de ton profil LinkedIn.",
    exp1Title: "Entrepreneur en solutions IA",
    exp1Meta: "Projets independants",
    exp1Desc:
      "Conception de solutions web et IA pour etudiants et professionnels.",
    exp2Title: "Developpeur web",
    exp2Meta: "Sites vitrines et interfaces metier",
    exp2Desc:
      "Realisation de projets front-end de la structure HTML jusqu'au rendu final.",
    exp3Title: "FC Leves",
    exp3Meta: "Experience visible publiquement",
    exp3Desc:
      "Participation a la valorisation digitale et au contenu web en contexte sportif.",
    skillsTitle: "Competences",
    skillsCol1Title: "Front-end",
    skillsCol1List: "HTML5, CSS3, JavaScript, Responsive Design",
    skillsCol2Title: "Outils",
    skillsCol2List: "Git, GitHub, GitHub Pages, VS Code, Figma",
    skillsCol3Title: "Methodes",
    skillsCol3List: "UX thinking, performance web, iteration rapide",
    educationTitle: "Formation",
    edu1Title: "Lycee Fulbert",
    edu1Meta: "Reference publique LinkedIn",
    edu1Desc:
      "Parcours scolaire axe sur la progression technique et la structuration de projets.",
    edu2Title: "Autoformation continue",
    edu2Meta: "Web, UX et outils modernes",
    edu2Desc:
      "Veille active autour du front-end, de l'accessibilite et de l'optimisation.",
    projectsTitle: "Projets selectionnes",
    p1Desc:
      "Site vitrine sportif avec navigation mobile fluide.",
    p2Desc:
      "Site corporate orientee conversion et prise de contact.",
    p3Desc:
      "Plateforme auto avec structure claire et consultation rapide.",
    p4Desc:
      "Projet interactif JavaScript autour du jeu Cluedo.",
    contactTitle: "Contact",
    contactText: "Vous avez un projet ou une opportunite ? Parlons-en.",
    themeDark: "Theme sombre",
    themeLight: "Theme clair"
  },
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navSkills: "Skills",
    navEducation: "Education",
    navProjects: "Projects",
    navContact: "Contact",
    eyebrow: "Portfolio 2026",
    heroTitle: "Ilies Benali",
    heroLine: "Student | Web Developer",
    heroSubtitle:
      "I build clean, fast web experiences with a clear result-driven mindset.",
    statLabel1: "Location",
    statValue1: "Chartres, France",
    statLabel2: "Focus",
    statValue2: "Front-end & UX",
    statLabel3: "Stack",
    ctaProjects: "See my projects",
    aboutTitle: "About",
    aboutQuick:
      "Student web developer based in Chartres, turning business ideas into clear and efficient interfaces.",
    aboutText:
      "My approach combines useful design, fast execution, and attention to detail. I prioritize smooth experiences, solid performance, and clear visual communication.",
    experienceTitle: "Experience",
    linkedinSource:
      "Content adapted from public information visible on your LinkedIn profile.",
    exp1Title: "AI Solutions Entrepreneur",
    exp1Meta: "Independent projects",
    exp1Desc:
      "Design of web and AI solutions for students and professionals.",
    exp2Title: "Web Developer",
    exp2Meta: "Showcase websites and business interfaces",
    exp2Desc:
      "Built front-end projects from HTML structure to final visual delivery.",
    exp3Title: "FC Leves",
    exp3Meta: "Publicly visible experience",
    exp3Desc:
      "Contributed to digital presence and sports-related web content visibility.",
    skillsTitle: "Skills",
    skillsCol1Title: "Front-end",
    skillsCol1List: "HTML5, CSS3, JavaScript, Responsive Design",
    skillsCol2Title: "Tooling",
    skillsCol2List: "Git, GitHub, GitHub Pages, VS Code, Figma",
    skillsCol3Title: "Methods",
    skillsCol3List: "UX thinking, web performance, fast iteration",
    educationTitle: "Education",
    edu1Title: "Lycee Fulbert",
    edu1Meta: "Public LinkedIn reference",
    edu1Desc:
      "Academic path focused on technical growth and project structuring.",
    edu2Title: "Continuous self-learning",
    edu2Meta: "Web, UX and modern tooling",
    edu2Desc:
      "Continuous learning on front-end standards, accessibility, and optimization.",
    projectsTitle: "Selected projects",
    p1Desc:
      "Sports showcase website with smooth mobile navigation.",
    p2Desc:
      "Conversion-oriented corporate website focused on contact actions.",
    p3Desc:
      "Automotive platform with clear structure and fast browsing.",
    p4Desc:
      "Interactive JavaScript project around the Cluedo game.",
    contactTitle: "Contact",
    contactText: "Have a project or an opportunity? Let's talk.",
    themeDark: "Dark mode",
    themeLight: "Light mode"
  }
};

let currentLang = localStorage.getItem("portfolio-lang") || "fr";
let currentTheme = localStorage.getItem("portfolio-theme") || "light";
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  updateToggleLabels();
}

function updateToggleLabels() {
  langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
  themeToggle.textContent =
    currentTheme === "dark"
      ? translations[currentLang].themeLight
      : translations[currentLang].themeDark;
}

function applyTheme(theme) {
  currentTheme = theme;
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  updateToggleLabels();
}

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  localStorage.setItem("portfolio-lang", currentLang);
  applyTranslations(currentLang);
});

themeToggle.addEventListener("click", () => {
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(nextTheme);
});

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 50, 220)}ms`;
  observer.observe(element);
});

document.getElementById("year").textContent = new Date().getFullYear();
applyTheme(currentTheme);
applyTranslations(currentLang);

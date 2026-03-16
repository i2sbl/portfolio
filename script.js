const translations = {
  fr: {
    navAbout: "A propos",
    navExperience: "Experience",
    navSkills: "Competences",
    navEducation: "Formation",
    navProjects: "Projets",
    navContact: "Contact",
    eyebrow: "Portfolio professionnel",
    heroTitle: "Ilies Benali",
    heroSubtitle:
      "Developpeur web pro-creatif. Je concois des experiences digitales utiles, rapides et elegantes.",
    ctaProjects: "Voir mes projets",
    aboutTitle: "A propos",
    aboutQuick:
      "Etudiant developpeur web base a Chartres. Je construis des interfaces claires, modernes et performantes avec un style pro-creatif.",
    aboutText:
      "Je developpe des sites web modernes avec une attention forte pour l'experience utilisateur, la performance et le design. Mon approche melange rigueur technique et sensibilite visuelle pour creer des produits efficaces et memorables.",
    experienceTitle: "Experience",
    linkedinSource:
      "Contenu base sur les informations publiques detectees depuis ton profil LinkedIn.",
    exp1Title: "Entrepreneur en solutions IA",
    exp1Meta: "Projets independants",
    exp1Desc:
      "Conception de solutions web et IA pour etudiants et professionnels, avec une approche orientee impact, simplicite et efficacite.",
    exp2Title: "Developpeur web",
    exp2Meta: "Experiences web et projets terrain",
    exp2Desc:
      "Realisation de sites vitrines et plateformes orientees utilisateurs, de la maquette a la mise en ligne.",
    exp3Title: "FC Leves",
    exp3Meta: "Reference experience visible publiquement",
    exp3Desc:
      "Participation a des activites de communication digitale et valorisation de contenu web lie au contexte sportif.",
    skillsTitle: "Competences",
    skillsCol1Title: "Front-end",
    skillsCol1List: "HTML5, CSS3, JavaScript, Responsive Design, UI Integration",
    skillsCol2Title: "Outils",
    skillsCol2List: "Git, GitHub, GitHub Pages, VS Code, Figma (workflow UI)",
    skillsCol3Title: "Methodes",
    skillsCol3List:
      "Conception orientee utilisateur, performance web, iteration rapide",
    educationTitle: "Formation",
    edu1Title: "Lycee Fulbert",
    edu1Meta: "Reference formation visible publiquement",
    edu1Desc:
      "Parcours scolaire et developpement de competences techniques et organisationnelles utiles aux projets numeriques.",
    edu2Title: "Autoformation continue",
    edu2Meta: "Web, UX et outils de developpement",
    edu2Desc:
      "Veille active et progression continue sur les standards front-end, l'accessibilite et les bonnes pratiques de production.",
    projectsTitle: "Projets selectionnes",
    p1Desc:
      "Site vitrine sportif avec presentation du club, informations pratiques et navigation fluide sur mobile.",
    p2Desc:
      "Site web corporate oriente conversion, valorisant les services et les prises de contact.",
    p3Desc:
      "Plateforme auto avec mise en avant des offres, structure claire et consultation rapide.",
    p4Desc:
      "Projet interactif autour du jeu Cluedo, avec logique JavaScript et interface engageante.",
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
    eyebrow: "Professional portfolio",
    heroTitle: "Ilies Benali",
    heroSubtitle:
      "Pro-creative web developer. I design digital experiences that are useful, fast, and elegant.",
    ctaProjects: "See my projects",
    aboutTitle: "About",
    aboutQuick:
      "Student web developer based in Chartres. I build clean, modern and high-performance interfaces with a pro-creative style.",
    aboutText:
      "I build modern websites with strong attention to user experience, performance, and design. My approach blends technical rigor with visual sensitivity to create efficient and memorable products.",
    experienceTitle: "Experience",
    linkedinSource:
      "Content based on public information detected from your LinkedIn profile.",
    exp1Title: "AI Solutions Entrepreneur",
    exp1Meta: "Independent projects",
    exp1Desc:
      "Design of web and AI solutions for students and professionals with an impact-driven, simple and efficient approach.",
    exp2Title: "Web Developer",
    exp2Meta: "Web experiences and field projects",
    exp2Desc:
      "Creation of showcase websites and user-focused platforms from mockup to production.",
    exp3Title: "FC Leves",
    exp3Meta: "Publicly visible experience reference",
    exp3Desc:
      "Contribution to digital communication activities and sports-related web content visibility.",
    skillsTitle: "Skills",
    skillsCol1Title: "Front-end",
    skillsCol1List: "HTML5, CSS3, JavaScript, Responsive Design, UI Integration",
    skillsCol2Title: "Tooling",
    skillsCol2List: "Git, GitHub, GitHub Pages, VS Code, Figma (UI workflow)",
    skillsCol3Title: "Methods",
    skillsCol3List: "User-focused design, web performance, fast iteration",
    educationTitle: "Education",
    edu1Title: "Lycee Fulbert",
    edu1Meta: "Publicly visible education reference",
    edu1Desc:
      "Academic path and development of technical and organizational skills applied to digital projects.",
    edu2Title: "Continuous self-learning",
    edu2Meta: "Web, UX and development tooling",
    edu2Desc:
      "Ongoing learning on front-end standards, accessibility and production best practices.",
    projectsTitle: "Selected projects",
    p1Desc:
      "Sports showcase website with club presentation, practical information, and smooth mobile navigation.",
    p2Desc:
      "Corporate conversion-oriented website highlighting services and contact actions.",
    p3Desc:
      "Automotive platform focused on clear offers and quick browsing.",
    p4Desc:
      "Interactive Cluedo-themed project with JavaScript logic and engaging interface.",
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

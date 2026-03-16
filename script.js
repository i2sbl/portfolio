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
    heroLine: "Etudiant · Developpeur web",
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
    experienceTitle: "Experience professionnelle",
    linkedinSource:
      "Experiences affichees de la plus recente a la plus ancienne.",
    exp1Title: "Stagiaire",
    exp1Meta: "Stagiaire | Groupe Covea",
    exp1Period: "Janvier - Fevrier 2026",
    exp1Desc:
      "Stage realise a Chartres avec contribution aux activites professionnelles de l'equipe.",
    exp2Title: "Stagiaire",
    exp2Meta: "Stagiaire | Your Next Car",
    exp2Period: "Mai - Juin 2025",
    exp2Desc:
      "Stage a Champhol axe sur la mise en place et l'amelioration d'elements web.",
    exp3Title: "Administrateur du reseau",
    exp3Meta: "Administrateur du reseau | Alpha Service",
    exp3Period: "Juillet - Septembre 2024",
    exp3Desc:
      "Mission a Mainvilliers orientee administration reseau et support technique.",
    skillsTitle: "Competences",
    skillsCol1Title: "Developpement",
    skillsCol1List: "HTML5, CSS3, JavaScript, Responsive Design",
    skillsCol2Title: "Infrastructure & Data",
    skillsCol2List: "Git, GitHub, GitHub Pages, VS Code, Figma",
    skillsCol3Title: "Methodes & Transversal",
    skillsCol3List: "UX thinking, performance web, iteration rapide",
    educationTitle: "Formation",
    edu1Title: "Lycee Fulbert",
    edu1Meta: "BTS SIO SLAM | 2024 - 2026",
    edu1Desc:
      "Chartres",
    edu2Title: "Lycee Marceau",
    edu2Meta: "Baccalaureat general | AMC et Mathematiques | 2021 - 2024",
    edu2Desc:
      "Chartres",
    projectsTitle: "Projets selectionnes",
    p1Desc:
      "Site vitrine sportif avec navigation mobile fluide et travail de referencement naturel (SEO).",
    p2Desc:
      "Site corporate orientee conversion et prise de contact.",
    p3Desc:
      "Plateforme auto avec structure claire et consultation rapide.",
    p4Desc:
      "Projet interactif JavaScript autour du jeu Cluedo.",
    projectVisit: "Voir le projet ↗",
    projectCode: "Voir le code ↗",
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
    heroLine: "Student · Web Developer",
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
    experienceTitle: "Professional Experience",
    linkedinSource:
      "Experiences displayed from most recent to oldest.",
    exp1Title: "Intern",
    exp1Meta: "Intern | Groupe Covea",
    exp1Period: "January - February 2026",
    exp1Desc:
      "Internship in Chartres with contributions to team professional activities.",
    exp2Title: "Intern",
    exp2Meta: "Intern | Your Next Car",
    exp2Period: "May - June 2025",
    exp2Desc:
      "Internship in Champhol focused on implementing and improving web elements.",
    exp3Title: "Network Administrator",
    exp3Meta: "Network Administrator | Alpha Service",
    exp3Period: "July - September 2024",
    exp3Desc:
      "Assignment in Mainvilliers focused on network administration and technical support.",
    skillsTitle: "Skills",
    skillsCol1Title: "Development",
    skillsCol1List: "HTML5, CSS3, JavaScript, Responsive Design",
    skillsCol2Title: "Infrastructure & Data",
    skillsCol2List: "Git, GitHub, GitHub Pages, VS Code, Figma",
    skillsCol3Title: "Methods & Cross-functional",
    skillsCol3List: "UX thinking, web performance, fast iteration",
    educationTitle: "Education",
    edu1Title: "Lycee Fulbert",
    edu1Meta: "BTS SIO SLAM | 2024 - 2026",
    edu1Desc:
      "Chartres",
    edu2Title: "Lycee Marceau",
    edu2Meta: "General Baccalaureate | AMC and Mathematics | 2021 - 2024",
    edu2Desc:
      "Chartres",
    projectsTitle: "Selected projects",
    p1Desc:
      "Sports showcase website with smooth mobile navigation and SEO optimisation.",
    p2Desc:
      "Conversion-oriented corporate website focused on contact actions.",
    p3Desc:
      "Automotive platform with clear structure and fast browsing.",
    p4Desc:
      "Interactive JavaScript project around the Cluedo game.",
    projectVisit: "View project ↗",
    projectCode: "View code ↗",
    contactTitle: "Contact",
    contactText: "Have a project or an opportunity? Let's talk.",
    themeDark: "Dark mode",
    themeLight: "Light mode"
  }
};

const designVersion = "v10";
if (localStorage.getItem("portfolio-design-version") !== designVersion) {
  localStorage.setItem("portfolio-design-version", designVersion);
  localStorage.setItem("portfolio-theme", "light");
}

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

const navLinks = [...document.querySelectorAll(".nav a")];
const sectionIds = navLinks.map((link) => link.getAttribute("href")).filter(Boolean);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentId = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === currentId);
      });
    });
  },
  {
    threshold: 0.45
  }
);

sectionIds.forEach((id) => {
  const section = document.querySelector(id);
  if (section) {
    sectionObserver.observe(section);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
applyTheme(currentTheme);
applyTranslations(currentLang);

/* ── Orbit icons — randomized keyframes per page load ──────
   Inspired by corentin1876.github.io/Corentin-Etienne/
   Each icon gets a unique animation name injected in <style>,
   varying radius (76–88px, max extent 106px < 110px half-container),
   duration (28–46s) and direction. */
document.querySelectorAll(".orbit-icon").forEach((icon, i) => {
  const duration   = 28 + Math.random() * 18;          // 28–46s
  const reverse    = Math.random() > 0.5;
  const startAngle = Math.random() * 360;
  const ts         = Date.now();
  const name       = `orb-${i}-${ts}`;
  const r          = () => 76 + Math.random() * 12;    // 76–88px

  const r0 = r(), r1 = r(), r2 = r(), r3 = r();
  const a  = (n) => (startAngle + n * 90).toFixed(1);

  const style = document.createElement("style");
  style.textContent =
    `@keyframes ${name} {` +
    `0%   { transform: rotate(${a(0)}deg) translateX(${r0.toFixed(1)}px) rotate(-${a(0)}deg); }` +
    `25%  { transform: rotate(${a(1)}deg) translateX(${r1.toFixed(1)}px) rotate(-${a(1)}deg); }` +
    `50%  { transform: rotate(${a(2)}deg) translateX(${r2.toFixed(1)}px) rotate(-${a(2)}deg); }` +
    `75%  { transform: rotate(${a(3)}deg) translateX(${r3.toFixed(1)}px) rotate(-${a(3)}deg); }` +
    `100% { transform: rotate(${a(4)}deg) translateX(${r0.toFixed(1)}px) rotate(-${a(4)}deg); }` +
    `}`;
  document.head.appendChild(style);

  icon.style.animation = `${name} ${duration.toFixed(1)}s ease-in-out ${reverse ? "reverse" : ""} infinite`;

  icon.addEventListener("mouseenter", () => { icon.style.animationPlayState = "paused"; });
  icon.addEventListener("mouseleave", () => { icon.style.animationPlayState = "running"; });
});

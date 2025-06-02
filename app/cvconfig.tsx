import React from "react";

const cv: CV = {
  personal: {
    name: { en: "Aleksei Kuzmichev", ru: "Алексей Кузмичев" },
    title: { en: "Frontend Developer", ru: "Фронтенд-разработчик" },
    email: "hi@lesha.co",
    website: "https://lesha.co/",
    telegram: "leshaco",
    github: "lesha-co",
    linkedin: "lesha-co",
    photo: "/me3-small.jpg",
    photoPdf: "/me3-small.jpg",
    phone: "+381 63 8206 174",
  },
  hero: {
    h1: { en: "I build web applications", ru: "Я создаю веб-приложения" },
    subtext: {
      en: "Expert in web development. Skilled in React.js, Next.js, and a variety of web technologies with 12 years of experience in commercial development.",
      ru: "Эксперт в веб-разработке. Знание React.js, Next.js и различных веб-технологий с опытом работы в коммерческой разработке более 12 лет.",
    },
  },
  skills: [
    {
      sectionName: "Frontend",
      wide: true,
      skills: [
        "CSS",
        "ES2022",
        "ES6",
        "ESBuild",
        "Google reCAPTCHA v3",
        "HTML Emails",
        "HTML5",
        "Highcharts.js",
        "JWT",
        "JavaScript",
        "LESS",
        "Lodash",
        "Next.JS",
        "PostCSS",
        "Responsive design",
        "React.js",
        "React Query",
        "React Router",
        "react-pdf",
        "Redux",
        "Redux Toolkit",
        "RTK Query",
        "SEO",
        "Sass",
        "Tailwind",
        "Three.JS",
        "TypeScript",
        "Vite",
        "WebSockets",
        "Webpack",
        "Zod",
      ],
    },
    {
      sectionName: "Backend",
      wide: true,
      skills: [
        "Node.JS",
        "Django",
        "Django Rest Framework",
        "Express",
        "OpenAPI",
        "Swagger",
        "SQLite",
        "PostgreSQL",
        "Python",
        "Amazon S3",
      ],
    },
    {
      sectionName: "DevOps",
      skills: ["Nginx", "Docker", "Linux", "GitLab CI", "Sentry"],
    },
    { sectionName: "Testing", skills: ["Jest", "Mocha", "Puppeteer"] },
    {
      sectionName: "Tools",
      skills: [
        "Jira",
        "GitLab",
        "Git",
        "Visual Studio Code",
        "FFmpeg",
        "Blender",
        "Prettier",
        "Bun",
      ],
    },
  ],
  jobs: [
    {
      title: "Frontend Developer",
      company: "AdsAdvisor (MY.Games)",
      url: "https://adsadvisor.io/",
      years: "2018 – 2025",
      experience: (
        <>
          <p>
            Currently I'm working in a team that develops a B2B SaaS BI
            application suite that automates marketing asset management,
            storage, and publishing, significantly simplifying the daily
            routines of creative teams. I understood the complexity of
            applications we develop and suggested migrating to TypeScript.
          </p>
          <p>
            It took a while but paid back in full. This significantly reduced
            errors and bugs. Lead a transition from Webpack to Vite, which made
            our builds significantly faster.
          </p>
        </>
      ),
    },
    {
      title: "Frontend Developer",
      company: "Yandex.Market",
      url: "https://yandex.com/company/",
      years: "2017 – 2018",
      experience: (
        <>
          <p>
            Built user interfaces for a leading online marketplace with millions
            of customers.
          </p>
          <p>
            My responsibilities were fixing UI bugs as well as implementing new
            features based on mockups.
          </p>
          <p>
            I was present when the team began migrating from in-house solutions
            to React.
          </p>
          <p>Maintained a E2E test suite.</p>
        </>
      ),
    },
    {
      title: "Frontend Developer",
      company: "eNano",
      url: "https://edunano.ru/",
      years: "2013 – 2017",
      experience: (
        <>
          <p>Was a full stack developer in a small company.</p>
          <p>
            I was responsible for turning a COTS solution into custom one, bring
            interactivity with help of a lot of jQuery. Had some DevOps
            experience, mainly Windows Server, IIS, and setting up MSSQL
            backups.
          </p>
        </>
      ),
    },
  ],
  languages: [
    { lang: "English", level: "Conversational" },
    { lang: "Russian", level: "Native" },
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school:
        "Russian State Agrarian University - Moscow Timiryazev Agricultural Academy",
      years: "2020 – 2025",
    },
  ],
  status: (
    <>
      <strong>Russian</strong> national, currently living in{" "}
      <strong>Serbia</strong>
    </>
  ),
};
export default cv;

/**
 * Extra skills
 * Ant Design, ,
 *, , Bitbucket, Figma, GitHub, Jira, Postman, VS Code
 */

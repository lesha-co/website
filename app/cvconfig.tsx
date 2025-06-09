import Link from "next/link";
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
    phone: { en: "+381 63 8206 174", ru: "+7 967 136 1079" },
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
        "GraphQL",
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
        "REST",
        "SEO",
        "Sass",
        "SCSS",
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
        "Django REST Framework",
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
      company: "MY.GAMES",
      url: "https://my.games/",
      years: {
        en: "November 2018 – Present",
        ru: "Ноябрь 2018 – настоящее время",
      },
      experience: (
        <>
          <p>
            Currently I'm working in a team that develops a B2B SaaS BI
            application suite (
            <Link href="https://adsadvisor.io/">AdsAdvisor</Link>) that
            automates marketing asset management, storage, and publishing,
            significantly simplifying the daily routines of creative teams. I
            understood the complexity of applications we develop and suggested
            migrating to TypeScript.
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
      years: {
        en: "April 2017 – November 2018",
        ru: "Апрель 2017 – Ноябрь 2018",
      },
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
      years: {
        en: "December 2013 – April 2017",
        ru: "Декабрь 2013 – Апрель 2017",
      },
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
    {
      lang: { en: "English", ru: "Английский" },
      level: { en: "Conversational", ru: "Разговорный" },
    },
    {
      lang: { en: "Russian", ru: "Русский" },
      level: { en: "Native", ru: "Родной" },
    },
  ],
  education: [
    {
      degree: {
        en: "B.S. in Computer Science",
        ru: "Бакалавр — Информационные системы и технологии",
      },
      school: {
        en: "Russian State Agrarian University - Moscow Timiryazev Agricultural Academy",
        ru: "Российский Государственный Аграрный Университет - МСХА имени К.А. Тимирязева",
      },
      years: "2020 – 2025",
    },
  ],
};
export default cv;

/**
 * Extra skills
 * Ant Design, ,
 *, , Bitbucket, Figma, GitHub, Jira, Postman, VS Code
 */

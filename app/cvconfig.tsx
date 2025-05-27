const cv: CV = {
  personal: {
    name: "Aleksei Kuzmichev",
    title: "Frontend Developer",
    email: "hi@lesha.co",
    website: "https://lesha.co/",
    photo: "/me.jpeg",
  },
  hero: {
    h1: "I build web applications",
    subtext:
      "Frontend developer at MY.Games. Expert in web development. Skilled in React, Next.js, and a variety of web technologies.",
  },
  skills: [
    {
      sectionName: "Frontend",
      wide: true,
      skills: [
        "React",
        "Redux",
        "Next.JS",
        "Tailwind",
        "Three.JS",
        "Sass",
        "LESS",
        "Highcharts.js",
        "HTML Emails",
        "Zod",
        "React Query",
        "Vite",
        "Webpack",
        "ESBuild",
      ],
    },
    {
      sectionName: "Backend",
      skills: [
        "Node.JS",
        "Django",
        "Express",
        "OpenAPI/Swagger",
        "SQLite",
        "PostgreSQL",
      ],
    },
    {
      sectionName: "Languages",
      skills: ["TypeScript", "ES2022", "Python", "(a bit of) C++"],
    },
    { sectionName: "Testing", skills: ["Jest", "Mocha"] },

    {
      sectionName: "DevOps",
      skills: ["Nginx", "Docker", "GitLab CI", "Git", "Linux"],
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
      degree: "Bachelor of Science in Computer Science",
      school:
        "Russian State Agrarian University - Moscow Timiryazev Agricultural Academy",
      years: "2020 – 2025",
    },
  ],
};
export default cv;

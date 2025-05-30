type Job = {
  title: string;
  company: string;
  url: string;
  years: string;
  experience: React.ReactNode;
};

type Education = {
  degree: string;
  school: string;
  years: string;
};

type Language = {
  lang: string;
  level: string;
};

type CV = {
  jobs: Job[];
  personal: {
    name: string;
    photo: string;
    photoPdf: string;
    title: string;
    email: string;
    website: string;
    linkedin: string;
    github: string;
    telegram: string;
  };
  hero: {
    h1: string;
    subtext: string;
  };
  skills: { sectionName: string; skills: string[]; wide?: boolean }[];
  languages: Language[];
  education: Education[];
};

type LocalizedString =
  | {
      en: string;
      ru: string;
    }
  | string;

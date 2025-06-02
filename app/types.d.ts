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

type LocalizedString = string | { en: string; ru: string };

type CV = {
  jobs: Job[];
  personal: {
    name: LocalizedString;
    photo: string;
    photoPdf: string;
    title: LocalizedString;
    email: string;
    website: string;
    linkedin: string;
    github: string;
    telegram: string;
    phone: string;
  };
  hero: {
    h1: LocalizedString;
    subtext: LocalizedString;
  };
  skills: { sectionName: string; skills: string[]; wide?: boolean }[];
  languages: Language[];
  education: Education[];
  status: React.ReactNode;
};

type LocalizedString =
  | {
      en: string;
      ru: string;
    }
  | string;

type Job = {
  title: LocalizedString;
  company: string;
  url: string;
  years: LocalizedString;
  experience: React.ReactElement;
};

type Education = {
  degree: LocalizedString;
  school: LocalizedString;
  years: string;
};

type Language = {
  lang: LocalizedString;
  level: LocalizedString;
};

type Localization = "en" | "ru";
type LocalizedString = string | Record<Localization, string>;

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
    phone: LocalizedString;
  };
  hero: {
    h1: LocalizedString;
    subtext: LocalizedString;
  };
  skills: { sectionName: LocalizedString; skills: string[]; wide?: boolean }[];
  languages: Language[];
  education: Education[];
  status: React.ReactElement;
};

type LocalizedObject<T> = {
  [K in keyof T]: T[K] extends LocalizedString
    ? string
    : T[K] extends React.ReactElement
      ? string
      : LocalizedObject<T[K]>;
};

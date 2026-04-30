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

type WebsiteConfig = {
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
  donations: (
    | {
        type: "link";
        title: LocalizedString;
        url: string;
        icon?: React.ReactElement;
      }
    | {
        token: LocalizedString;
        type: "crypto";
        network?: string;
        address: string;
      }
  )[];
  projects: {
    title: LocalizedString;
    description: LocalizedString;
    media:
      | {
          iframe: string;
        }
      | { picture: string }
      | {};
    url: string;
  }[];
};

type LocalizedObject<T> = {
  [K in keyof T]: T[K] extends LocalizedString
    ? string
    : NonNullable<T[K]> extends React.ReactElement
      ? T[K]
      : LocalizedObject<T[K]>;
};

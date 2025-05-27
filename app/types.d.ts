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
    title: string;
    email: string;
    website: string;
  };
  hero: {
    h1: string;
    subtext: string;
  };
  skills: { sectionName: string; skills: string[]; wide?: bollean }[];
  languages: Language[];
  education: Education[];
};

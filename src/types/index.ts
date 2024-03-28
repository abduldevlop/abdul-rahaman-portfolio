export type Tabout = {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  contactEmail: string;
  avatar: {
    public_id: string;
    url: string;
  };
};

export type Tservices = {
  name: string;
  charge: string;
  desc: string;
  enabled: boolean;
  _id: string;
  image: {
    public_id: string;
    url: string;
  };
};

export type Tskills = {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: {
    public_id: string;
    url: string;
    _id: string;
  };
  _id: string;
};

export type Tproject = {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: {
    public_id: string;
    url: string;
  };
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
};

export interface JobExperience {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}

export type Ttestimonial = {
  image: {
    public_id: string;
    url: string;
  };
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  _id: string;
};

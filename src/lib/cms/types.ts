export type Stat = { title: string; value: string; icon: string };

export type Testimonial = {
  name: string;
  company: string;
  designation: string;
  review: string;
  rating: number;
};

export type ClientLogo = {
  company: string;
  logo: string;
  website?: string;
};

export type CaseStudy = {
  company: string;
  industry: string;
  material: string;
  quantity: string;
  location: string;
  date: string;
  description: string;
  image: string;
};

export type Settings = {
  phone: string;
  phoneTel: string;
  whatsapp: string;
  email: string;
  address: string;
};

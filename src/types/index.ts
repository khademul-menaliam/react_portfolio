export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  client: string;
  timeline: string;
  role: string;
  overview: string;
  imageSrc: string;
  visibility: 'public' | 'lock' | 'smartphone' | 'terminal' | 'api' | 'shopping_cart';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

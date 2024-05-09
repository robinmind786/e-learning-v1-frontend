export interface VideoLink {
  title: string;
  url: string;
}

export interface Video {
  title: string;
  description: string;
  videoLenth: string;
  url: string;
  links: VideoLink[];
}

export interface Lecture {
  videoUrl: Video[];
  videoSection: string;
  suggestions: string;
}

export interface Tag {
  label: string;
  value: string;
}

export interface CourseDetails {
  title: string;
  thumbnail: string;
  shortDescription: string;
  description: string;
  price: number | string | null;
  disPrice: number | string | null;
  duration: string;
  category: string;
  level: string;
  language: string;
  featured: boolean;
  totalLecture: number | string | null;
  tags: Tag[];
  demoUrl: string;
  purchased?: number;
  avgReview?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Benefit {
  title: string;
}

export interface Prerequisite {
  title: string;
}

export interface CourseData {
  courseDetails: CourseDetails;
  lectures: Lecture[];
  faq: FAQ[];
  benefits: Benefit[];
  prerequisites: Prerequisite[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail' | 'globe';
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'AI / ML' | 'Other';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  image?: string;
  highlights?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  fieldOfStudy: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string; // or "Present"
  gradeOrGpa?: string;
  description?: string;
  coursework?: string[];
  achievements?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeUrl?: string;
  skills?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  type?: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    specialization?: string;
    tagline: string;
    shortBio: string;
    heroStickers?: {
      leftTag: string;
      rightTag: string;
    };
    about: {
      subheader?: string;
      paragraphs: string[];
      location: string;
      email: string;
      availability: string;
      yearsOfExperience: string;
      projectsCompleted: string;
      photoLeftCaption?: string;
      photoLeftDate?: string;
      photoRightCaption?: string;
      photoRightDate?: string;
    };
    stampBadges?: {
      label: string;
      iconType?: 'database' | 'cpu' | 'branch' | 'chart';
    }[];
    contactSection?: {
      responseTimeNote: string;
    };
    socials: SocialLink[];
    resumeUrl: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
  experiences?: ExperienceItem[];
}

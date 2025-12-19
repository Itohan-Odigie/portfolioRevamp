export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  link?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}
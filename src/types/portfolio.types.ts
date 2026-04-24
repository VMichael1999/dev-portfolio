export interface ContactInfo {
  phone: string
  email: string
  location: string
}

export interface OnlineProfile {
  label: string
  url: string
  icon: 'linkedin' | 'github'
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Language {
  name: string
  level: string
}

export interface SkillGroup {
  category: string
  icon: 'mobile' | 'architecture' | 'payments' | 'tools' | 'frontend' | 'backend' | 'globe'
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export interface Specialty {
  icon: 'mobile' | 'layers' | 'card' | 'team'
  title: string
  description: string
}

export interface NavItem {
  label: string
  href: string
}

export interface PortfolioData {
  name: string
  firstName: string
  lastName: string
  title: string
  terminalSummary: string
  contact: ContactInfo
  profiles: OnlineProfile[]
  education: Education[]
  languages: Language[]
  skillGroups: SkillGroup[]
  fullSummary: string
  experience: ExperienceItem[]
  nav: NavItem[]
  specialties: Specialty[]
}

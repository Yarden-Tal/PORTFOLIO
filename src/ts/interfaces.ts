export interface FormDetails {
    name: string;
    email: string;
    message: string;
  }
  
  export interface StarsProps {
    [key: string]: string;
  }
  
  export interface NavLink {
    id: string;
    title: string;
  }
  
  export interface Service {
    title: string;
    icon: string;
  }
  
  export interface Technology {
    name: string;
    icon: string;
    docsUrl: string;
  }
  
  export interface Experience {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
    websiteUrl: string;
  }
  
  export interface Testimonial {
    testimonial: string;
    name: string;
    role: string;
    company: string;
    image: string;
  }
  
  export interface Tag {
    name: string;
    color: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    tags: Tag[];
    image: string;
    sourceCodeLink: string;
  }
  
  export interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }
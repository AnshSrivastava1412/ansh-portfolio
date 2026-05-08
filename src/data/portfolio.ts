// ============================================================================
// Portfolio Data — Single editable content layer
// Edit this file to update all website content.
// ============================================================================

export const siteConfig = {
  name: "Ansh Srivastava",
  title: "Ansh Srivastava — Software Engineer & Data Engineer",
  description:
    "Software and data engineering intern with experience in front-end development, Python automation, web scraping, and data engineering workflows.",
  url: "https://anshsrivastava.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/AnshSrivastava1412",
    linkedin: "https://www.linkedin.com/in/ansh-srivastava-16a6b42a4/",
    email: "mailto:anshmohansrivastava@gmail.com",
  },
};

// ---------- Navigation ----------
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ---------- Hero ----------
export const hero = {
  greeting: "Hi, I'm",
  name: "Ansh Srivastava",
  tagline: "Software Engineer · Data Engineer Intern · Full-Stack Builder",
  summary:
    "Software and data engineering intern with experience in front-end development, Python automation, web scraping, and data engineering workflows. Building reliable systems across cloud, automation, and data infrastructure.",
  ctas: [
    { label: "View Experience", href: "#experience" },
    { label: "View Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
};

// ---------- About ----------
export const about = {
  title: "About",
  label: "My Story",
  paragraphs: [
    "My journey began with hands-on software development — maintaining and enhancing a Gatsby-based product website, writing front-end updates in JavaScript, HTML, and CSS, and working across mixed legacy codebases. This gave me a strong foundation in how real production systems work, beyond what tutorials teach.",
    "I then moved into Python-heavy automation — building web scraping pipelines, scripting tools, and internal accelerators that streamlined repetitive workflows. Alongside this, I built personal portfolio websites using React and Vite, refining my front-end and design sensibilities.",
    "Today, I'm growing into data engineering, gaining exposure to Snowflake, MuleSoft, and AWS S3 for data pipeline workflows. I also work with cloud and DevOps tooling — GitHub, GCP, Docker, Kubernetes, and Linux — to build, deploy, and manage reliable software at scale.",
  ],
};

// ---------- Experience ----------
export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development & Data Engineering Intern",
    company: "Pharmsight Research And Analytics",
    location: "Remote",
    period: "2025 — Present",
    current: true,
    description: [
      "Maintain and enhance a Gatsby-based product website, implementing front-end updates in JavaScript, HTML, and CSS across mixed codebases.",
      "Develop Python-based web scraping pipelines and automation tools that reduced manual data collection time significantly.",
      "Build internal utilities and accelerators to streamline team workflows and improve development velocity.",
      "Support data engineering initiatives involving Snowflake, MuleSoft, and AWS S3 for data pipeline orchestration.",
      "Work with Docker, Kubernetes, GitHub, and GCP for cloud-based development, deployment, and container management.",
    ],
    tech: [
      "Python",
      "JavaScript",
      "Gatsby",
      "Snowflake",
      "MuleSoft",
      "AWS S3",
      "Docker",
      "Kubernetes",
      "GCP",
      "GitHub",
    ],
  },
  {
    role: "DevOps Intern",
    company: "Easyrewardz Software Services",
    location: "India",
    period: "2024",
    description: [
      "Contributed to CI/CD pipeline configuration and infrastructure automation workflows.",
      "Assisted with cloud deployment tasks and environment management across development stages.",
      "Gained hands-on exposure to DevOps practices, version control workflows, and monitoring tooling.",
    ],
    tech: ["Linux", "Git", "CI/CD", "Cloud Infrastructure"],
  },
  {
    role: "AI/ML Intern",
    company: "D2R Tech",
    location: "India",
    period: "2024",
    description: [
      "Worked on machine learning model evaluation and data preprocessing pipelines.",
      "Explored AI/ML concepts including supervised learning, data wrangling, and model performance analysis.",
      "Collaborated with team members on research-oriented technical tasks.",
    ],
    tech: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
  },
];

// ---------- Skills ----------
export interface SkillGroup {
  title: string;
  icon: string; // Lucide icon name
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: ["Python", "C++", "Java", "C", "SQL", "JavaScript"],
  },
  {
    title: "Web & Frontend",
    icon: "Globe",
    skills: ["HTML", "CSS", "React", "Vite", "Gatsby"],
  },
  {
    title: "Data & Automation",
    icon: "Database",
    skills: ["Web Scraping", "Scripting", "Workflow Automation"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["GitHub", "GCP", "AWS", "Docker", "Kubernetes", "Linux", "VS Code"],
  },
  {
    title: "Data Engineering",
    icon: "Layers",
    skills: ["Snowflake", "MuleSoft", "AWS S3"],
  },
  {
    title: "Core CS",
    icon: "Cpu",
    skills: ["DSA", "OOPs", "REST APIs", "Troubleshooting"],
  },
];

// ---------- Projects ----------
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Jarvis",
    description:
      "AI-powered desktop assistant capable of executing system commands, web searches, and task automation through voice and text input.",
    tech: ["Python", "AI", "Automation"],
    github: "#",
    featured: true,
  },
  {
    title: "Cash Flow Optimizer",
    description:
      "Financial tool that minimizes the number of transactions needed to settle debts among a group of people.",
    tech: ["Python", "Algorithms", "Finance"],
    github: "#",
    featured: true,
  },
  {
    title: "Portfolio Websites",
    description:
      "Designed and built modern personal portfolio websites for friends and peers using React, Vite, and responsive design principles.",
    tech: ["React", "Vite", "CSS", "Responsive Design"],
    github: "#",
  },
];

// ---------- Certifications ----------
export interface Certification {
  title: string;
  provider: string;
}

export const certifications: Certification[] = [
  {
    title: "Snowflake [A-Z] Zero to Hero Masterclass",
    provider: "Udemy",
  },
  {
    title: "Claude Code in Action",
    provider: "Anthropic",
  },
  {
    title: "Introduction to Model Context Protocol",
    provider: "Anthropic",
  },
  {
    title: "Introduction to Agent Skills",
    provider: "Anthropic",
  },
  {
    title: "Claude with the Anthropic API",
    provider: "Anthropic",
  },
  {
    title: "AWS Academy Cloud Foundation",
    provider: "AWS Academy",
  },
  {
    title: "Python Certification",
    provider: "GUVI",
  },
  {
    title: "Python for Data Science",
    provider: "SWAYAM / NPTEL",
  },
];

// ---------- Education ----------
export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Computer Science Graduate",
    institution: "India", // Using location as the subtitle for visual balance
    location: "",
    period: "2022 — 2026",
    details: "",
  },
];

// ---------- Contact ----------
export const contact = {
  title: "Get in Touch",
  label: "Contact",
  message:
    "I'm always open to discussing new opportunities, interesting projects, or collaboration ideas. Feel free to reach out.",
  email: "anshmohansrivastava@gmail.com",
};

// Single source of truth for all site content.
// Reconciled from David's current resume (LaTeX) + LinkedIn, June 2026.

export interface SocialLink {
  label: string;
  href: string;
  /** inline-svg id rendered by the Icon component */
  icon: "github" | "linkedin" | "email" | "resume";
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  href?: string;
  highlights: string[];
  stack: string[];
}

export interface ProjectItem {
  name: string;
  blurb: string;
  period: string;
  context?: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  detail?: string;
  status?: string;
  highlights?: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  year: string;
}

export interface AwardItem {
  title: string;
  detail: string;
}

export const profile = {
  name: "David Rohweder",
  role: "Software Engineer",
  company: "Iridium",
  location: "Phoenix, Arizona",
  email: "david01rohweder@gmail.com",
  domain: "davidrohweder.com",
  url: "https://davidrohweder.com",
  resumePath: "/David-Rohweder-Resume.pdf",

  // Hero
  tagline:
    "Software engineer at Iridium building automated systems, CI/CD, and full-stack apps that run over the world’s largest commercial satellite network.",

  // About — short prose + one light personal line
  about: [
    "I’m a software engineer at Iridium, where I build automated test suites, CI/CD pipelines, and full-stack applications that operate over a global satellite network. I care about clean systems, fast feedback loops, and tools other engineers actually want to use.",
    "I’m AWS and Terraform certified and currently pursuing graduate studies in computer science at Georgia Tech.",
  ],
  personalNote:
    "Outside of work you’ll find me hiking the Southwest, training Muay Thai, or chasing good food somewhere new.",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/davidrohweder", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidrohweder", icon: "linkedin" },
  { label: "Email", href: "mailto:david01rohweder@gmail.com", icon: "email" },
  { label: "Resume", href: "/David-Rohweder-Resume.pdf", icon: "resume" },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Iridium",
    location: "Phoenix, AZ",
    start: "Jul 2023",
    end: "Present",
    highlights: [
      "Engineered automated test suites in Python on AWS for applications serving a global satellite network.",
      "Built CI/CD pipelines with AWS, Terraform, and Docker, improving testing efficiency across teams.",
      "Developed full-stack applications with React, Django, Redis, DynamoDB, and MySQL, adopted by multiple teams.",
    ],
    stack: ["Python", "AWS", "Terraform", "Docker", "React", "Django"],
  },
  {
    role: "Systems Engineer",
    company: "Rosenberger North America",
    location: "Akron, PA",
    start: "May 2019",
    end: "Aug 2022",
    highlights: [
      "Optimized production workflows 4× by integrating Azure and ERP systems across departments.",
      "Improved SysAdmin automation 80% through ManageEngine server deployments and custom scripting.",
      "Supported business continuity on the disaster-recovery team managing a multi-site vSphere environment.",
    ],
    stack: ["Azure", "PowerShell", "vSphere", "Active Directory"],
  },
  {
    role: "Software Developer",
    company: "Expeditionary Interest Group",
    location: "Leesport, PA",
    start: "Sep 2018",
    end: "Dec 2020",
    href: "https://github.com/EIGpennyhelper",
    highlights: [
      "Lead architect for the copyrighted Penny Helper software used by several nonprofits.",
      "Grew revenue 30% in v3.5 by mining ETH and XMR on constituents’ idle compute.",
      "Cut release turnaround 40% with Agile practices and a self-updating installer.",
    ],
    stack: ["C#", ".NET", "Git", "Windows Services"],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "InclusiScore",
    blurb: "Credit-scoring backend that reached 96% prediction accuracy.",
    period: "2023",
    context: "HackPSU",
    highlights: [
      "Built the Firebase backend powering 96% credit-score prediction accuracy.",
      "Trained and validated a scikit-learn linear-regression model on an 80/20 split to prevent overfitting.",
      "Partnered with the frontend team on data modeling and storage.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "Firebase", "React"],
  },
  {
    name: "SolarLenz",
    blurb: "Interactive augmented-reality tour of the solar system, shipped on the App Store.",
    period: "2022",
    context: "iOS · App Store",
    highlights: [
      "Published an AR app that lets users orbit and inspect 3D planets with responsive hit-testing.",
      "Added speech recognition for hands-free commands on each planet.",
      "Designed the scene graph and interaction model around ARKit and SceneKit.",
    ],
    stack: ["SwiftUI", "ARKit", "SceneKit", "AVFoundation", "Objective-C"],
  },
  {
    name: "Parallel Shortest-Path Research",
    blurb: "Parallelized Dijkstra and Bellman-Ford to 8–10× speedups on a supercomputer.",
    period: "2022",
    highlights: [
      "Led a team exploring parallelization of Dijkstra’s and the Bellman-Ford algorithms.",
      "Built the full Dijkstra solution: graph structure, data generator, and unit/performance tests.",
      "Hit 8× and 10× speedups on a 20k×20k matrix across 20 cores on Penn State’s Roar supercomputer.",
    ],
    stack: ["C++", "OpenMP", "Shell", "PBS"],
    links: [
      { label: "Source", href: "https://github.com/davidrohweder/Dijkstra-BellmanFord" },
      {
        label: "Results",
        href: "https://github.com/davidrohweder/Dijkstra-BellmanFord/blob/master/Results-Analysis.pdf",
      },
    ],
  },
  {
    name: "NittanyMarket",
    blurb: "Full e-commerce platform with a Flask REST backend.",
    period: "2022",
    highlights: [
      "Built an e-commerce platform with a Jinja frontend and Flask REST APIs.",
      "Implemented seller publishing, buyer search and checkout, and account management.",
      "Designed the SQLite schema and authentication and seller-access flows.",
    ],
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
  },
  {
    name: "Linux File System Driver",
    blurb: "Userspace file-system driver replicating core OS operations.",
    period: "2021",
    highlights: [
      "Built a driver bridging a simulator and disk controller on a local server.",
      "Replicated OS file operations: open/close, read/write, seek, and create/maintain.",
      "Added an LRU cache reaching ~80% hit ratio across diverse workloads.",
    ],
    stack: ["C", "Network Programming"],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C", "C++", "C#", "Java", "JavaScript", "Swift", "SQL"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Django", "Flask", "Node.js", "Spring", "TensorFlow", "scikit-learn", "OpenMP"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Terraform", "Docker", "Git", "Redis", "DynamoDB", "Linux"],
  },
  {
    label: "Practices",
    items: ["TDD", "CI/CD", "Agile", "IaC", "OOP", "MVC / MVVM", "SDLC"],
  },
];

export const education: EducationItem[] = [
  {
    school: "Georgia Institute of Technology",
    degree: "Graduate Studies · Computer Science",
    location: "Atlanta, GA",
    period: "In progress",
    status: "In progress",
    detail: "GPA 4.0",
  },
  {
    school: "Pennsylvania State University",
    degree: "B.S. in Computer Science",
    location: "University Park, PA",
    period: "2023",
    detail: "GPA 3.46",
    highlights: [
      "Teaching Assistant for the Mobile Applications course.",
      "Dean’s List 6 of 8 semesters; Penn State Undergraduate Scholarship for Talented Students.",
      "Active in ACM, HackPSU, and the Penn State Outing Club.",
    ],
  },
];

export const certifications: CredentialItem[] = [
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2023" },
  { title: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", year: "2024" },
];

export const awards: AwardItem[] = [
  { title: "1st Place — RACC Web Design Challenge", detail: "Lead developer, winning team" },
  { title: "SkillsUSA Pennsylvania — Computer Programming", detail: "2nd place 2018, 3rd place 2019" },
  {
    title: "Penn State Undergraduate Scholarship",
    detail: "Awarded for Talented Students",
  },
];

// Navigation anchors
export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

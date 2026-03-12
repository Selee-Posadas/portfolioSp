import { Database, Layout, Settings } from "lucide-react";

export const SKILLS = [
  {
    category: "FRONTEND CORE",
    icon: Layout,
    techs: ["React", "Angular", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS"]
  },
  {
    category: "BACKEND & DATA",
    icon: Database,
    techs: ["NestJS", "Node.js", "PL/SQL", "MySQL", 'PrismaORM', 'TypeORM', 'PostgreSQL']
  },
  {
    category: "DEV OPS & TOOLS",
    icon: Settings,
    techs: ["Docker", "Git", "GitHub", "Postman", "Jira", "Trello"]
  }
];

export const STATS = [
  { label: "LEVEL (AGE)", value: "26" },
  { label: "CLASS", value: "Software Developer" },
  { label: "XP", value: "3+ Years (Legacy + Modern)" }, 
  { label: "MAIN QUEST", value: "Full Stack Mastery" },
];
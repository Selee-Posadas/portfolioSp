
import TesloShop from '../assets/teslo_shop.png';
import HeroesApp from '../assets/heroesapp.png';
import PadelMate from '../assets/padelmate.png';
import FifaLegends from '../assets/fifa_legends.png';
import Organizapi from '../assets/diagramaOrganizapi.png'
import Portfolio from '../assets/PortfolioSP.png'
import ChallengApp from '../assets/ChallengApp.png'

export type State = 'DONE' | 'IN_PROCESS'  | 'ROADMAP' | 'TEAM_VERSION'
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  state: State;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TESLO SHOP",
    description: "Proyecto práctico de React de tienda de productos inspirados en Tesla. Proyecto basado en el curso 'React: De Cero a Experto' de Fernando Herrera (DevTalles).",
    tags: ["REACT", "REACT ROUTER", 'TANSTACK', 'AXIOS', "TAILWIND", 'SHADCN' ],
    image: TesloShop, 
    link: "https://teslo-shop-sp.netlify.app/",
    github: 'https://github.com/Selee-Posadas/teslo-shop',
    state: 'ROADMAP'
  },
  {
    id: 2,
    title: "OrganizAPI",
    description: "API de gestión integral para la vida personal y académica. Permite organizar estudios universitario, finanzas, bienestar y logistica del hogar.",
    tags: ['NESTJS', 'TYPESCRIPT', 'PRISMAORM', 'SUPABASE', 'AUTH', 'JWT', 'POSTGRESQL', 'HEXAGONAL'],
    image: Organizapi,
    link: "#",
    github: 'https://github.com/Selee-Posadas/organizapi.git',
    state: 'IN_PROCESS'
  },
  {
    id: 3,
    title: "Portfolio Personal",
    description: "Desarrollado con React y TypeScript, diseñado para centralizar mi trayectoria y proyectos. Implementa integración con EmailJS para la gestión de contactos.",
    tags: ['REACT', 'TYPESCRIPT', 'EMAILSJS', 'WORKFLOW', 'TAILWIND', 'SOLID'],
    image: Portfolio,
    link: "https://selee-posadas.github.io/portfolioSp/#/",
    github: 'https://github.com/Selee-Posadas/portfolioSp.git',
    state: 'IN_PROCESS'
  },
  {
    id: 4,
    title: "PADELMATE",
    description: "PadelMate es una aplicación web diseñada para facilitar la reserva de canchas de pádel y la gestión de clubes, jugadores y turnos en un entorno digital moderno.",
    tags: ["ANGULAR", "NESTJS", 'TYPESCRIPT', 'MYSQL', 'DOCKER', 'TYPEORM', 'JWT','SCSS','CHARTS'],
    image: PadelMate,
    link: "#",
    github: 'https://github.com/Selee-Posadas/xacademy-padel',
    state: 'TEAM_VERSION'
  },
  {
    id: 5,
    title: "FIFA LEYENDS",
    description: "Aplicacion web para gestionar jugadores de fifa y sus estadisticas. Desarrollada como parte del bootcamp xAcademy",
    tags: ["ANGULAR", "MYSQL", 'NESTJS', 'TYPESCRIPT','TYPEORM', 'JWT', 'DOCKER', 'SCSS', 'CHARTS', ],
    image: FifaLegends,
    link: "https://fifa-leyends.vercel.app/home",
    github: 'https://github.com/Selee-Posadas/Fifa-leyends',
    state: 'DONE'
  },

  {
    id: 6,
    title: "ChallengApp",
    description: "Solución técnica desarrollada para un proceso de selección internacional, enfocada en la integración de datos y la optimización de interfaces.",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "SHADCN", 'API', 'TANSTACK', 'CONTEXT', 'WORKFLOW'],
    image: ChallengApp,
    link: "https://selee-posadas.github.io/ng-challenge-sp/",
    github: 'https://github.com/Selee-Posadas/ng-challenge-sp.git',
    state: 'DONE'
  },
  
  {
    id: 7,
    title: "HeroesApp",
    description: "Proyecto práctico de React SPA de heroes de DC. Proyecto basado en el curso 'React: De Cero a Experto' de Fernando Herrera (DevTalles).",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "SHADCN", 'REACT ROUTER', 'TANSTACK', 'CONTEXT', 'VITEST'],
    image: HeroesApp,
    link: "https://selee-posadas.github.io/heroes-app/",
    github: 'https://github.com/Selee-Posadas/heroes-app',
    state: 'DONE'
  },

];
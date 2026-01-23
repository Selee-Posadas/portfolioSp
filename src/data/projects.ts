import TesloShop from '../assets/teslo_shop.png';
import HeroesApp from '../assets/heroesapp.png';
import PadelMate from '../assets/padelmate.png';
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "TESLO SHOP",
    description: "Proyecto práctico de React de tienda de productos. Proyecto basado en el curso 'React: De Cero a Experto' de Fernando Herrera (DevTalles).",
    tags: ["REACT", "REACT ROUTER", 'TANSTACK', 'AXIOS', "TAILWIND", 'SHADCN' ],
    image: TesloShop, 
    link: "https://teslo-shop-sp.netlify.app/",
    github: 'https://github.com/Selee-Posadas/teslo-shop',
  },
  {
    id: 2,
    title: "HeroesApp",
    description: "Proyecto práctico de React SPA de heroes de DC. Proyecto basado en el curso 'React: De Cero a Experto' de Fernando Herrera (DevTalles).",
    tags: ["REACT", "TYPESCRIPT", "TAILWIND", "SHADCN", 'REACT ROUTER', 'TANSTACK', 'CONTEXT', 'VITEST'],
    image: HeroesApp,
    link: "https://selee-posadas.github.io/heroes-app/",
    github: 'https://github.com/Selee-Posadas/heroes-app',
  },
  {
    id: 3,
    title: "PADELMATE",
    description: "PadelMate es una aplicación web diseñada para facilitar la reserva de canchas de pádel y la gestión de clubes, jugadores y turnos en un entorno digital moderno.",
    tags: ["ANGULAR", "NESTJS", 'TYPESCRIPT', 'MYSQL', 'DOCKER', 'TYPEORM', 'JWT','SCSS','CHARTS'],
    image: PadelMate,
    link: "#",
    github: 'https://github.com/Selee-Posadas/xacademy-padel',
  },
  {
    id: 4,
    title: "FIFA LEYENDS",
    description: "Aplicacion web para gestionar jugadores de fifa y sus estadisticas. Desarrollada como parte del bootcamp xAcademy",
    tags: ["ANGULAR", "MYSQL", 'NESTJS', 'TYPESCRIPT','TYPEORM', 'JWT', 'DOCKER', 'SCSS', 'CHARTS', ],
    image: PadelMate,
    link: "https://fifa-leyends.vercel.app/home",
    github: 'https://github.com/Selee-Posadas/Fifa-leyends',
  },
  {
    id: 5,
    title: "AI CHAT INTERFACE",
    description: "Interfaz de chat moderna conectada a la API de OpenAI.",
    tags: ["REACT", "FRAMER MOTION", "API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "#",
    github: 'https://github.com/Selee-Posadas/teslo-shop',
  },
  {
    id: 6,
    title: "AI CHAT INTERFACE",
    description: "Interfaz de chat moderna conectada a la API de OpenAI.",
    tags: ["REACT", "FRAMER MOTION", "API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "#",
    github: 'https://github.com/Selee-Posadas/teslo-shop',
  }
];
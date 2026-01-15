export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NEON DASHBOARD",
    description: "Panel de administración con estadísticas en tiempo real y modo oscuro.",
    tags: ["REACT", "TAILWIND", "RECHARTS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
    link: "#"
  },
  {
    id: 2,
    title: "CYBER COMMERCE",
    description: "E-commerce completo con carrito de compras y pasarela de pagos.",
    tags: ["NEXT.JS", "TYPESCRIPT", "STRIPE"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "AI CHAT INTERFACE",
    description: "Interfaz de chat moderna conectada a la API de OpenAI.",
    tags: ["REACT", "FRAMER MOTION", "API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "CRYPTO WALLET",
    description: "Billetera digital para gestión de activos y NFTs.",
    tags: ["REACT NATIVE", "FIREBASE"],
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2555&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "AI CHAT INTERFACE",
    description: "Interfaz de chat moderna conectada a la API de OpenAI.",
    tags: ["REACT", "FRAMER MOTION", "API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 6,
    title: "AI CHAT INTERFACE",
    description: "Interfaz de chat moderna conectada a la API de OpenAI.",
    tags: ["REACT", "FRAMER MOTION", "API"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    link: "#"
  }
];
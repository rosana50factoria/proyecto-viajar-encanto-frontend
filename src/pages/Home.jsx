import { useState } from "react";
import Hero from "../components/hero/Hero";
import CategoryFilter from "../components/categoryFilter/CategoryFilter";
import PostGrid from "../components/postGrid/PostGrid";

const CATEGORIAS = ["Todos", "España", "París", "Londres"];

/* Datos de ejemplo — sustituye esto por la llamada a tu servicio/API cuando tengas el CRUD */
const POSTS = [
  {
    id: 1,
    categoria: "España",
    titulo: "El susurro de Cudillero al amanecer",
    extracto:
      "Hay lugares que parecen atrapados en un tiempo más amable. Caminar por las callejuelas vacías mientras el mar…",
    autor: "Elena Marín",
    imagen:
      "https://images.unsplash.com/photo-1545411845-09d0638b8563?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      
  },
  {
    id: 2,
    categoria: "París",
    titulo: "La melancolía dulce de la Bretaña",
    extracto:
      "Caminar bajo la lluvia fina por Saint-Suliac es descubrir que el gris puede ser el color más acogedor del mundo si se acompaña",
    autor: "Lucie Bernard",
    imagen:
      "https://images.unsplash.com/photo-1703178132715-f9e5c0e26934?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      
  },
  {
    id: 3,
    categoria: "Londres",
    titulo: "Atardeceres sobre los tejados",
    extracto:
      "Lejos del bullicio del centro, existe una ciudad que se disfruta desde las alturas, con una vista privilegiada y la calma de la…",
    autor: "Marco Polo",
    imagen:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const postsFiltrados =
    categoriaActiva === "Todos"
      ? POSTS
      : POSTS.filter((p) => p.categoria === categoriaActiva);

  return (
    <>
      <Hero />
      <CategoryFilter
        categorias={CATEGORIAS}
        activa={categoriaActiva}
        onSelect={setCategoriaActiva}
      />
      <PostGrid posts={postsFiltrados} />
    </>
  );
}
import { useState} from "react";
import Hero from "../components/hero/Hero";
import CategoryFilter from "../components/categoryFilter/CategoryFilter";
import PostGrid from "../components/postGrid/PostGrid";
import { usePublicaciones } from "../hooks/usePublicaciones";

const CATEGORIAS = ["Todos", "España", "París", "Londres"];

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  //se cambia el array hardcode por la llamada a la API
  const { posts, cargando, error } = usePublicaciones();

  const postsFiltrados =
    categoriaActiva === "Todos"
      ? posts
      : posts.filter((p) => p.categoria === categoriaActiva);

  if (cargando) return <p>Cargando publicaciones...</p>;
  if (error) return <p>Error: {error}</p>;

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

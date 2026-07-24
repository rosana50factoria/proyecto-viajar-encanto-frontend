import { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import CategoryFilter from "../components/categoryFilter/CategoryFilter";
import PostGrid from "../components/postGrid/PostGrid";

const CATEGORIAS = ["Todos", "España", "París", "Londres"];

/* Datos de ejemplo — sustituye esto por la llamada a tu servicio/API cuando tengas el CRUD */
// const posts = [
//   {
//     id: 1,
//     categoria: "España",
//     titulo: "El susurro de Cudillero al amanecer",
//     extracto:
//       "Hay lugares que parecen atrapados en un tiempo más amable. Caminar por las callejuelas vacías mientras el mar…",
//     autor: "Elena Marín",
//     imagen:
//       "https://images.unsplash.com/photo-1545411845-09d0638b8563?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//   },
//   {
//     id: 2,
//     categoria: "París",
//     titulo: "La melancolía dulce de la Bretaña",
//     extracto:
//       "Caminar bajo la lluvia fina por Saint-Suliac es descubrir que el gris puede ser el color más acogedor del mundo si se acompaña",
//     autor: "Lucie Bernard",
//     imagen:
//       "https://images.unsplash.com/photo-1703178132715-f9e5c0e26934?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//   },
//   {
//     id: 3,
//     categoria: "Londres",
//     titulo: "Atardeceres sobre los tejados",
//     extracto:
//       "Lejos del bullicio del centro, existe una ciudad que se disfruta desde las alturas, con una vista privilegiada y la calma de la…",
//     autor: "Marco Polo",
//     imagen:
//       "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=800&auto=format&fit=crop",
//   },
// ];

//se recuperan los posts del endpoinnt getpublicaciones del backend
const API_URL = "http://localhost:8080/api/v1/publicacion";

// Traduce el enum PaisFilter del backend a las etiquetas que usa el front
const CATEGORIA_LABELS = {
  ESPAÑA: "España",
  PARIS: "París",
  LONDRES: "Londres",
};

export default function Home() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  //se cambia el array hardcode por la llamada a la API
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudieron cargar las publicaciones");
        return res.json();
      })
      //.then((data) => setPosts(data))
      .then((data) => {
        const postsMapeados = data.map((p) => ({
          id: p.id,
          categoria: CATEGORIA_LABELS[p.status] ?? p.status,
          titulo: p.title,
          extracto: p.content,
          autor: p.user?.username ?? "Anónimo",
          imagen: p.image,
        }));
        setPosts(postsMapeados);
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  const postsFiltrados =
    categoriaActiva === "Todos"
      ? posts
      : posts.filter((p) => p.categoria === categoriaActiva);

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

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import CategoryFilter from './components/categoryFilter/CategoryFilter';
import PostGrid from './components/postGrid/PostGrid';
import Footer from './components/footer/Footer';
// import './App.css'

import { useState } from "react";

const CATEGORIAS = ["Todos", "España", "París", "Londres"];

/* ---------- Datos de ejemplo (vendrán de tu API/CRUD de publicaciones) ---------- */
const POSTS = [
  {
    id: 1,
    categoria: "España",
    titulo: "El susurro de Cudillero al amanecer",
    extracto:
      "Hay lugares que parecen atrapados en un tiempo más amable. Caminar por las callejuelas vacías mientras el mar…",
    autor: "Elena Marín",
    imagen:
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    categoria: "París",
    titulo: "La melancolía dulce de la Bretaña",
    extracto:
      "Caminar bajo la lluvia fina por Saint-Suliac es descubrir que el gris puede ser el color más acogedor del mundo si se acompaña",
    autor: "Lucie Bernard",
    imagen:
      "https://images.unsplash.com/photo-1541183041603-3d68b8b3f7c1?q=80&w=800&auto=format&fit=crop",
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

function App() {
 
   const [categoriaActiva, setCategoriaActiva] = useState("Todos");
 
  const postsFiltrados =
    categoriaActiva === "Todos"
      ? POSTS
      : POSTS.filter((p) => p.categoria === categoriaActiva);

  return (
    <>
       <Header />
      <main>
        <Hero />
        <CategoryFilter
          categorias={CATEGORIAS}
          activa={categoriaActiva}
          onSelect={setCategoriaActiva}
        />
        <PostGrid posts={postsFiltrados} />
      </main>
      <Footer />
      
    </>
  )
}

export default App

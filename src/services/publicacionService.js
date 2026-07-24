const API_URL = "http://localhost:8080/api/v1/publicacion";

//se recuperan los posts del endpoinnt getpublicaciones del backend
export async function getAllPublicaciones() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("No se pudieron cargar las publicaciones");
  return res.json();
}

export async function getPublicacionById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar la publicación");
  return res.json();
}
const API_URL = "http://localhost:8080/api/v1/publicacion";

//se recuperan los posts del endpoinnt getpublicaciones del backend
export async function getAllPublicaciones() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("No se pudieron cargar las publicaciones");
  return res.json();
}

//metodo antiguo
// export async function getPublicacionById(id) {
//   const res = await fetch(`${API_URL}/${id}`);
//   if (!res.ok) throw new Error("No se pudo cargar la publicación");
//   return res.json();
// }

//guardo el token con el prefijo Bearer
//si lo guardas "pelado", cámbialo a `Bearer ${token}`
//en la authorizacion creo que se concatena el bearer (probar)
export async function getPublicacionById(id) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: token } : {}),
    },
  });

  if (response.status === 401 || response.status === 403) {
    throw new Error("No autorizado");
  }

  if (!response.ok) {
    throw new Error("Error al obtener la publicación");
  }

  return response.json();
}

export async function createPublicacion() {
  //return null;
}

export async function updatePublicacion(){
}

export async function deletePublicacion(id) {
  console.log("llamar al servicio de borrado");
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: token } : {}),
    },
  });

  if (response.status === 401 || response.status === 403) {
    throw new Error("No autorizado");
  }

  if (!response.ok) {
    throw new Error("Error al borrar la publicación");
  }
}
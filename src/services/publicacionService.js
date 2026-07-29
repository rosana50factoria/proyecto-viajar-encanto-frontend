const API_URL = "http://localhost:8080/api/v1/publicacion";

//se recuperan los posts del endpoinnt getpublicaciones del backend
export async function getAllPublicaciones() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("No se pudieron cargar las publicaciones");
  return res.json();
}

//guardo el token con el prefijo Bearer
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

export async function deletePublicacion(id) {
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

export async function createPublicacion(data) {
  const token = localStorage.getItem("token");
  
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: token } : {}),
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401 || response.status === 403) {
    throw new Error("No autorizado");
  }

  if (!response.ok) {
    throw new Error("Error al crear la publicación");
  }

  return response.json();
}

export async function updatePublicacion(id, data) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: token } : {}),
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401 || response.status === 403) {
    throw new Error("No autorizado");
  }

  if (!response.ok) {
    throw new Error("Error al actualizar la publicación");
  }

  return response.json();
}
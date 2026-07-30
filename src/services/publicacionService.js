//const API_URL = "http://localhost:8080/api/v1/publicacion";

import {API_URL} from "../config/constants";

//se recuperan los posts del endpoinnt getpublicaciones del backend
export async function getAllPublicaciones() {
  console.log(API_URL);
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

function authHeaders() {
  const token = localStorage.getItem("token");
  console.log(token);
  return { Authorization: `${token}` };
  // ojo: si guardaste el header tal cual vino del login, ajusta el prefijo
}

export async function createPublicacion(formData) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: authHeaders(), // NO pongas Content-Type, el navegador lo setea con el boundary correcto
    body: formData,
  });
  if (!res.ok) throw new Error("Error al crear la publicación");
  return res.json();
}

export async function updatePublicacion(id, formData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: formData,
  });
  if (!res.ok) throw new Error("Error al actualizar la publicación");
  return res.json();
}

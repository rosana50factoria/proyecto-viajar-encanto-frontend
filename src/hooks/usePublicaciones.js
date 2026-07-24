import { useState, useEffect } from "react";
import { getAllPublicaciones } from "../services/publicacionService";
import { mapPublicacion } from "../utils/mappers";

export function usePublicaciones() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPublicaciones()
      .then((data) => setPosts(data.map(mapPublicacion)))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  return { posts, cargando, error };
}
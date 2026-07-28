import { useState, useEffect } from "react";
import { getPublicacionById } from "../services/publicacionService";
import { mapPublicacionDetalle } from "../utils/mappers";

export function usePublicacionDetalle(id) {
  const [publicacion, setPublicacion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let activo = true;

    async function fetchDetalle() {
      try {
        setLoading(true);
        const data = await getPublicacionById(id);
        if (activo) setPublicacion(mapPublicacionDetalle(data));
      } catch (err) {
        if (activo) setError(err.message);
      } finally {
        if (activo) setLoading(false);
      }
    }

    fetchDetalle();
    return () => { activo = false; };
  }, [id]);

  return { publicacion, loading, error };
}
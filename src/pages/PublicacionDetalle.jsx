import { useParams, Link } from "react-router-dom";
import { usePublicacionDetalle } from "../hooks/usePublicacionDetalle";

export default function PublicacionDetalle() {
  const { id } = useParams();
  const { publicacion, loading, error } = usePublicacionDetalle(id);

  if (loading) return <p className="p-8">Cargando...</p>;
  if (error) return <p className="p-8 text-red-600">{error}</p>;
  if (!publicacion) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <Link to="/" className="text-sm text-neutral-500 hover:underline">
        Volver al inicio
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 mt-6">
        <aside className="border rounded-lg p-4 h-fit">
          <p className="font-serif font-semibold">{publicacion.authorName}</p>
          <button className="block text-sm text-primary mt-2">Editar</button>
          <button className="block text-sm text-red-500 mt-1">Eliminar</button>
        </aside>

        <article>
          <img
            src={publicacion.image}
            alt={publicacion.title}
            className="w-full rounded-lg object-cover max-h-[420px]"
          />
          <span className="inline-block mt-4 text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
            {publicacion.country}
          </span>
          <h1 className="font-serif text-3xl font-bold mt-2">
            {publicacion.title}
          </h1>
          <div className="mt-4 space-y-4 text-neutral-700">
            {publicacion.content
              .split("\n")
              .filter(Boolean)
              .map((parrafo, i) => (
                <p key={i}>{parrafo}</p>
              ))}
          </div>
        </article>
      </div>
    </div>
  );
}
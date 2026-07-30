// src/pages/EditPost.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/Post/PostForm";
import {
  getPublicacionById,
  updatePublicacion,
  deletePublicacion,
} from "../services/publicacionService"; // ajustar si el nombre real difiere

import { mapPublicacionDetalle } from "../utils/mappers";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getPublicacionById(id)
    //.then(setPost)
    .then((data) => setPost(mapPublicacionDetalle(data)))
    .catch(console.error);
  }, [id]);

  const handleEdit = async (formData) => {
    setSubmitting(true);
    try {
      await updatePublicacion(id, formData);
      navigate(`/publicacion/${id}`);
    } catch (err) {
      console.error("Error al guardar cambios:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("¿Seguro que quieres eliminar esta publicación?")) return;
    try {
      await deletePublicacion(id);
      navigate("/");
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  if (!post) return <p className="text-center py-10">Cargando...</p>;

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="font-headline text-2xl text-neutral mb-8">Editar publicación</h1>
      <PostForm
        mode="edit"
        initialData={post}
        onSubmit={handleEdit}
        onCancel={() => navigate(-1)}
        onDelete={handleDelete}
        submitting={submitting}
      />
    </section>
  );
}
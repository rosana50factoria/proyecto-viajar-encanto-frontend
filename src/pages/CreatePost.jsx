// src/pages/CreatePost.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/Post/PostForm";
import { createPublicacion } from "../services/publicacionService"; // ajustar si el nombre real difiere

export default function CreatePost() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      const nueva = await createPublicacion(data);
      navigate(`/publicacion/${nueva.id}`);
    } catch (err) {
      console.error("Error al publicar:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="font-headline text-2xl text-neutral mb-8">Crear publicación</h1>
      <PostForm
        mode="create"
        onSubmit={handleSubmit}
        onCancel={() => navigate(-1)}
        submitting={submitting}
      />
    </section>
  );
}
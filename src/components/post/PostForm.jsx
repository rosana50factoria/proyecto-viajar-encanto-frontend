
// src/components/Post/PostForm.jsx
// Un único formulario para "crear publicacion" y "detalle/editar publicacion".
// La diferencia entre pantallas es solo: valores iniciales, textos de los botones
// y si se muestra "Eliminar publicación". Así evitamos duplicar el layout de Figma.

import { useState } from "react";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import Select from "../common/Select";
import ImageDropzone from "../common/ImageDropzone";
import Button from "../common/Button";

// Debe coincidir con el enum PaisFilter del backend (ESPAÑA, PARIS, LONDRES)
const DESTINOS = [
  { value: "ESPAÑA", label: "España" },
  { value: "PARIS", label: "París" },
  { value: "LONDRES", label: "Londres" },
];

export default function PostForm({
  mode = "create", // "create" | "edit"
  initialData = { title: "", status: "", content: "", image: null },
  onSubmit,
  onCancel,
  onDelete,
  submitting = false,
}) {
  const [form, setForm] = useState({
    title: initialData.title || "",
    status: initialData.status || "",
    content: initialData.content || "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(initialData.image || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (file) => {
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, imageFile });
  };

  const isEdit = mode === "edit";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-10 w-full">
      {/* Columna de acciones */}
      <div className="flex flex-row md:flex-col gap-3 md:w-56 shrink-0">
        <Button type="submit" variant="primary" disabled={submitting}>
          {isEdit ? "💾 Save Changes" : "▷ Publish Post"}
        </Button>
        <Button type="button" variant="outlined" onClick={onCancel}>
          ✕ Cancel
        </Button>
        {isEdit && (
          <Button type="button" variant="danger" onClick={onDelete}>
            🗑 Delete Post
          </Button>
        )}
      </div>

      {/* Columna del formulario */}
      <div className="flex flex-col gap-6 flex-1">
        <TextInput
          label="Título de tu experiencia"
          id="title"
          placeholder="Ej: Atardecer en los acantilados de Ronda"
          value={form.title}
          onChange={handleChange}
        />

        <Select
          label="Ubicación"
          id="status"
          value={form.status}
          onChange={handleChange}
          options={DESTINOS}
          placeholder="Selecciona un destino"
        />

        <TextArea
          label="Relata tu viaje"
          id="content"
          placeholder="Empieza a escribir tu historia aquí..."
          value={form.content}
          onChange={handleChange}
          rows={8}
        />

        <ImageDropzone previewUrl={previewUrl} onFileSelect={handleFileSelect} />
      </div>
    </form>
  );
}
// src/components/common/ImageDropzone.jsx
// Cubre los dos estados que vimos en Figma:
//  - vacío: "Haz clic para subir o arrastra la imagen"
//  - con imagen: preview + botón "Reemplazar fotografía"

import { useRef } from "react";

export default function ImageDropzone({
  label = "Fotografía destacada",
  previewUrl,
  onFileSelect,
  accept = "image/jpeg,image/png",
  maxSizeMB = 5,
}) {
  const inputRef = useRef(null);

  const handleFile = (file) => {
    if (!file) return;
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`La imagen supera el máximo de ${maxSizeMB}MB`);
      return;
    }
    onFileSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files?.[0]);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="font-body text-sm text-neutral">{label}</span>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {previewUrl ? (
        <div className="rounded-md border border-neutral/20 overflow-hidden">
          <img
            src={previewUrl}
            alt="Fotografía destacada"
            className="w-full max-h-80 object-cover"
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="w-full py-2 text-sm font-body text-primary hover:bg-tertiary/40 transition-colors"
          >
            ↻ Reemplazar fotografía
          </button>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed
            border-neutral/25 py-10 cursor-pointer hover:border-primary/50 hover:bg-tertiary/20 transition-colors"
        >
          <span className="font-body text-neutral">Haz clic para subir o arrastra la imagen</span>
          <span className="font-body text-xs text-neutral/60">
            Formatos sugeridos: JPG, PNG (Max. {maxSizeMB}MB)
          </span>
        </div>
      )}
    </div>
  );
}
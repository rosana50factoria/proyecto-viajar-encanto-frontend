const CATEGORIA_LABELS = {
  ESPAÑA: "España",
  PARIS: "París",
  LONDRES: "Londres",
};

export function mapPublicacion(p) {
  return {
    id: p.id,
    categoria: CATEGORIA_LABELS[p.status] ?? p.status,
    titulo: p.title,
    extracto: p.content,
    autor: p.user?.name ?? "Anónimo",
    imagen: p.image,
  };
}
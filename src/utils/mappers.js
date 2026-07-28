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

export function mapPublicacionDetalle(dto) {
  return {
    id: dto.id,
    title: dto.title,
    content: dto.content,
    image: dto.image,
    country: dto.status, // enum PaisFilter
    publishDate: dto.publishDate,
    authorName: dto.user?.name,
  };
}
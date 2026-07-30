import { resolveImageUrl } from "../utils/image";

const CATEGORIA_LABELS = {
  ESPAÑA: "España",
  PARIS: "París",
  LONDRES: "Londres",
};

export function mapPublicacion(p) {
  return {
    id: p.id,
    categoria: CATEGORIA_LABELS[p.pais] ?? p.pais,
    title: p.title,
    content: p.content,
    autor: p.user?.name ?? "Anónimo",
    imagen: resolveImageUrl(p.image),
  };
}

export function mapPublicacionDetalle(dto) {
  return {
    id: dto.id,
    title: dto.title,
    content: dto.content,
    image: resolveImageUrl(dto.image),
    pais: dto.pais, // enum PaisFilter
    publishDate: dto.publishDate,
    authorName: dto.user?.name,
  };
}
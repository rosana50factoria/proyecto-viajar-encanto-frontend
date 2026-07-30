//import { resolveImageUrl } from "../config/constants";

import {BACKEND_URL} from "../config/constants";

export function resolveImageUrl(image) {
  if (!image) return null;
  // Si ya es una URL absoluta (seeder antiguo, o futuro S3/Cloudinary), la dejamos igual
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  // Si es una ruta relativa del backend (/uploads/xxx.jpg), la completamos
  return `${BACKEND_URL}${image}`;
}
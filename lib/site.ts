// Subruta donde se publica la web en GitHub Pages (usuario.github.io/portfolio).
export const BASE_PATH = "/portfolio";

// Rutas de /public: Next no añade el basePath a las imágenes que se pasan como string.
export function withBasePath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

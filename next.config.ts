import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // ¡Importante para GitHub Pages! Genera archivos estáticos HTML/JS
  basePath: "/portfolio", // ¡Importante para que encuentre los estilos en el subdominio!
  assetPrefix: "/portfolio/", // ¡Importante para los assets estáticos!
  images: {
    unoptimized: true, // GitHub Pages no soporta el servidor de optimización de imágenes de Next.js
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora errores de TypeScript al compilar
  },
  experimental: {
    agentFeedback: true,
  },
  // cacheComponents: true,
  // partialPrefetching: true,
  reactCompiler: true,
};

export default nextConfig;

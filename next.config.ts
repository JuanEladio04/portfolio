import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ¡Importante para GitHub Pages! Genera archivos estáticos HTML/JS
  // basePath: '/nombre-de-tu-repo', // Descomenta esto solo si tu repo no es el principal (tu-usuario.github.io)
  // assetPrefix: '/nombre-de-tu-repo/', // Descomenta si usas basePath para que cargue bien los assets
  images: {
    unoptimized: true, // GitHub Pages no soporta el servidor de optimización de imágenes de Next.js
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;ahora 
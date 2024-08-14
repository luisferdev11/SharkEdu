/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#0D1117", // Fondo principal, casi negro
        "background-secondary": "#161B22", // Fondo secundario, gris oscuro
        primary: "#58A6FF", // Azul profundo para elementos destacados
        accent: "#79C0FF", // Azul más claro para acentos
        "accent-secondary": "#1F6FEB", // Azul intermedio
        "tx-primary": "#C9D4D9", // Texto principal en blanco roto
        "tx-secondary": "#8B949E", // Texto secundario en gris claro
      },
      height: {
        "project-card": "29rem",
      },
      screens: {
        base: "990px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

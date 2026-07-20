/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",     // App background
        surface: "#0F172A",        // Sidebar/Navbar
        card: "#111827",           // Cards & inputs
        hover: "#1E293B",          // Hover states

        border: "rgba(255,255,255,0.06)",

        primary: "#3B82F6",        // Accent
        primaryHover: "#2563EB",

        text: "#F8FAFC",
        muted: "#94A3B8",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,.25)",
        glow: "0 0 20px rgba(59,130,246,.18)",
      },
    },
  },
  plugins: [],
}
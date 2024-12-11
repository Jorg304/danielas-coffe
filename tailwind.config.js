/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*
==== modulo personalizado ====
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Ejemplo para un tamaño adicional (opcional)
      },
    },
  },
};
*/
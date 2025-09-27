module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        accent: '#ff0055'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        title: ['Helvetica', 'Arial', 'sans-serif'] // luego reemplazar con Foundry Grikny
      }
    },
  },
  plugins: [],
}
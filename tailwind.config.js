/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
      "./node_modules/flowbite.{js,ts}"
    ],
    theme: {
      extend: {
        screens: {
          'mobile400': '400px',
          'mobile500': '500px'  
        },
        animation: {
          'custom-bounce': 'bounce 0s linear infinite',
        },
      },
    },
    darkMode: 'class',
    plugins: [require('flowbite/plugin')],
  }
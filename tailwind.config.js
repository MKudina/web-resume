/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'avatar': "url('/src/images/KudinaPhoto.jpg')",
        'icon-settings': "url('/src/images/settings-icon.svg')",
        'icon-menu-light': "url('/src/images/menu-icon-light.svg')",
        'icon-menu-dark': "url('/src/images/menu-icon-dark.svg')",
      }
    },
  },
  plugins: [],
}


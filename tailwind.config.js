/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'avatar': "url('/src/images/KudinaPhoto.jpg')",
        'icon-settings': "url('/src/images/settings-icon.svg')",
        'icon-menu-light': "url('/src/images/menu-icon-light.svg')",
        'icon-menu-dark': "url('/src/images/menu-icon-dark.svg')",
        'icon-dark-mode': "url('/src/images/dark-mode.svg')",
        'icon-light-mode': "url('/src/images/light-mode.svg')",
        'icon-skill-html': "url('/src/images/Skill=HTML5.svg')",
        'icon-skill-css': "url('/src/images/Skill=CSS3.svg')",
        'icon-skill-js': "url('/src/images/Skill=Javascript.svg')",
        'icon-skill-react': "url('/src/images/Skill=React.svg')",
        'icon-skill-git': "url('/src/images/Skill=Git.svg')",
        'icon-email': "url('/src/images/email-icon.svg')",
        'icon-telegram': "url('/src/images/telegram-icon.svg')",
        'icon-phone': "url('/src/images/phone-icon.svg')",
        'icon-git': "url('/src/images/git-icon.svg')",
        'icon-vk': "url('/src/images/VK-icon.svg')",

      }
    },
  },
  plugins: [],
}


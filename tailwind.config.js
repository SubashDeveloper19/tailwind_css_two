/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        primary:"#009A74",
        texT_primary: "#111111"
      },
      fontFamily:{
        jost:['jost','sans-serif']
      },
      backgroundImage: {
        'hero-bg': "url('../img/hero-bg.png')",
        'project-bg': "url('../img/project-bg.png') ",
        'bringing-bg': "url('../img/section-bg.png') ",
        'team-bg': "url('../img/team-section.png') ",
      }
    },
  },
  plugins: [],
}


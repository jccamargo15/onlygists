// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/tailwindcss",
    "@nuxt/google-fonts", 
    "nuxt-primevue"
  ],

  css: ["primeicons/primeicos.css"],

  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  }
})

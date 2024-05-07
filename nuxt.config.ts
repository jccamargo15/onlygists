// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/tailwindcss",
    "@nuxt/google-fonts", 
    "nuxt-primevue"
  ],

  css: ["primeicons/primeicos.css"],
})

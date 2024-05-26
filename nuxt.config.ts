import path from "path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts", 
    "nuxt-primevue",
    "@nuxtjs/supabase"
  ],

  css: ['primeicons/primeicons.css'],

  imports: {
    dirs: ['./composables/useMarkdown', './composables/useServices'],
  },
  
  runtimeConfig: {
    stripeProudctId5BRL: process.env.STRIPE_PRODUCT_ID_5BRL,
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    resendKey: process.env.RESEND_KEY,

    public: {
      nodeEnv: process.env.NODE_ENV,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: process.env.SITE_URL,
    },
  },

  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  },

  primevue: {
    options: {
      unstyled: true,
    },
    importPT: {
      as: "lara",
      from: path.resolve(__dirname, "./assets/presets/lara"),
    }
  },
})

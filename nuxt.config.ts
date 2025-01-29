// TODO: use Nuxt Image

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: false,

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'floating-vue/nuxt',
    'nuxt-icons',
  ],

  css: ['~/assets/css/main.scss'],

  googleFonts: {
    families: {
      Arimo: true,
      Baskerville: true,
    },
  },

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2025-01-29',
});

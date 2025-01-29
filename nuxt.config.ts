export default defineNuxtConfig({
  compatibilityDate: '2025-01-29',

  ssr: true,
  // ssr: false,

  nitro: {
    preset: 'netlify',
  },
});

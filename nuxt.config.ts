export default defineNuxtConfig({
  compatibilityDate: '2025-01-29',
  ssr: false,
  nitro: {
    errorHandler: 'nitropack/dist/runtime/error',
  },
});

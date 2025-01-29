export default defineNuxtConfig({
  compatibilityDate: '2025-01-29',
  ssr: false,
  nitro: {
    errorHandler: require.resolve('./error-handler.mjs'),
  },
});

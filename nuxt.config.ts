export default defineNuxtConfig({
  compatibilityDate: '2025-01-29',
  ssr: false,
  nitro: {
    externals: {
      traceInclude: ['vue/server-renderer'],
    },
  },
});

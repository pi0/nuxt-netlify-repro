export default defineNuxtConfig({
  compatibilityDate: '2025-01-29',
  ssr: true,
  nitro: {
    errorHandler: 'nitropack/dist/runtime/error',
    //   externals: {
    //     traceInclude: ['vue/server-renderer'],
    //   },
  },
});

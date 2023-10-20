// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/isr/': {
      isr: true
    },
    '/prerender/': {
      prerender: true
    },
    '/ssr/': {
      ssr: true
    },
    '/csr/': {
      ssr: false
    },
  }
})

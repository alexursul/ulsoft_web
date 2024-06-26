// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/fonts/gotham/gotham.css',
    '~/assets/scss/main.scss'
  ],
  modules: [
    ["@nuxtjs/google-fonts", 
      {
        families: {
          // Roboto: true,
          Inter: [400, 500, 700],
        }
    }]
  ]
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/fonts/gotham/gotham.css',
    '~/assets/scss/main.scss',
    '~/node_modules/pretty-checkbox/src/pretty-checkbox.scss'
  ],
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
  ],
  modules: [
    ["@nuxtjs/google-fonts", 
      {
        families: {
          Inter: [400, 500, 700],
        }
    }],
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
})
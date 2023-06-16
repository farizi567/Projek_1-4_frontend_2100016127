import { threadId } from "worker_threads";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  

  app:{
    head:{
      title: 'PortoKu',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon'],

  colorMode: {
    classSuffix: ''
  },
  tailwindcss:{
    cssPath: '`/assets/css/tailwind.css',
    configPath: './tailwind.config.js'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
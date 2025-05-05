import { fileURLToPath } from 'node:url';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/content'],

  devtools: {
    enabled: true // or false to disable
  },
  ssr: true,


  typescript: {
    shim: false
  },

  nitro: {},

  alias: {
    "@": fileURLToPath(new URL('./', import.meta.url)),
  },

  app: {
    head: {
      title: "Space",
      htmlAttrs: {
        lang: 'en'
      },
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
        {
          "http-equiv": 'X-UA-Compatible', content: "IE=edge"
        },
        {
          name: 'keywords',
          content: 'Vue Nuxtjs'
        },
        {
          name: 'description',
          content: 'Space Digital - Website'
        },
        {
          name: 'author',
          content: 'Space Digital'
        }
      ],
      "link": [
        { rel: 'shortcut icon', href: '/assets/imgs/favicon.ico' },
        // Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet' },
        // CSS
        { rel: 'stylesheet', href: '/assets/fonts/mona-sans/style.css' },
        { rel: 'stylesheet', href: '/assets/css/plugins.css' },
        { rel: 'stylesheet', href: '/assets/css/style.css' },
      ],
      "script": [
        { src: '/assets/js/bootstrap.bundle.min.js' },
        { src: '/assets/js/plugins.js' },
        { src: '/assets/js/isotope.pkgd.min.js' },
        { src: '/assets/js/wow.min.js' },
        { src: '/assets/js/gsap.min.js' },
        { src: '/assets/js/ScrollTrigger.min.js' },
        { src: '/assets/js/ScrollSmoother.min.js' },
        // { src: '/assets/js/smoother-script.js', defer: true },
        { src: '/assets/js/scripts.js', defer: true },
      ]
    }
  },

  css: [
    'swiper/css/bundle',
    '@/styles/globals.css'
  ],

  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true
      }
    }
  },

  compatibilityDate: '2025-01-02'
})

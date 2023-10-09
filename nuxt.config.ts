// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  css: [
    '~/assets/css/main.css',
  ],
  
  plugins: [
    { src: '~/plugins/font-awesome.ts' },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
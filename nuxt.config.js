require('custom-env').env(process.env.NODE_ENV) // 此位置加载env配置文件

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-local',
    htmlAttrs: {
      lang: 'zh-CN',
    },
    meta: [
      { charset: 'utf-8' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  server: {
    port: process.env.NUXT_PORT || '3000',
    host: process.env.NUXT_HOST || '0.0.0.0',
  },
  axios: {
    proxy: true,
  },
  router:{
    
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.NUXT_API_DOMAIN,
    },
  },
  proxy: {
    '/api/': {
      target: process.env.NUXT_API_DOMAIN,
      ws: true,
      logLevel: 'debug',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/axios.js',
    },
    {
      src: '~/plugins/lazyLoad.js',
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components/'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/dotenv',
      {
        filename: `.env.${process.env.NODE_ENV}`,
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    styleResources: {
      scss: './assets/scss/var.scss',
    },
    transpile: [
      'vue-lazyload'
    ]
  },
  googleAnalytics: {
    id: 'UA-42341941-1',
  },
}

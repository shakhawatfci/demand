export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Bid Bazar | Demand Your Need',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/style.css',
    '~/assets/css/settings.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/global-mixin.js',
    '~/plugins/otp-input.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  loading: {
    color: '#4481eb',
    height: '5px'
  },

  axios:
  {
    baseURL: process.env.BASE_URL || 'https://limmexbd.com'
  },

  auth: {
    cookie: { options: { secure: process.env.NODE_ENV == 'production' } },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/dashboard'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 31536000,
        },
        user: {
          property: 'user',
          // autoFetch: false
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' }
        }
      }
    }
  },

  env: {
    // baseUrl: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/api/v1' : 'http://localhost:3000'
  },

  // publicRuntimeConfig: {
  //   baseURL: 'http://127.0.0.1:8000/api/v1' || 'https://somerealapi.com'
  // },
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  }
}

export default {
  server: {
    port: 8000
  },
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Digging Buddy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/digging-buddy-icon.jpg' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.AXIOS_BASE_URL || 'http://localhost:8080/',
    timeout: 5000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  auth: {
    // Options
    strategies: {
      local: {
        _scheme: 'local',
        endpoints: {
          login: {
            url:
              (process.env.AXIOS_BASE_URL || 'http://localhost:8080/') +
              'login',
            method: 'post',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url:
              (process.env.AXIOS_BASE_URL || 'http://localhost:8080/') +
              'users/me',
            method: 'get',
            propertyName: false
          }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    },
    resetOnError: true,
    rewriteRedirects: true,
    fullPathRedirect: true
  }
}

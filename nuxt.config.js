const pkg = require('./package')

export default {
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#409eff'},
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss'
  ],
  plugins: [
    '@/plugins/globals',
    '@/plugins/axios'
  ],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: '/'
  },
  build: {
    transpile: [/^element-ui/]
  },
  serverMiddleware: [
    {path: './server', handler: '@/server'}
  ]
}

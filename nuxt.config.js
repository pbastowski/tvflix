const isDev = process.env.NODE_ENV === 'development'

// Plugins
const plugins = ['plugins/main.js']

// Add development-only plugins
if (isDev) plugins.unshift('plugins/dev-only.js')

export default {
    ssr: false,
    srcDir: 'src',
    components: true,

    // plugins are scripts that run before the app starts
    // They are determined above, depending on whether or not we are running in production mode
    plugins,

    modules: ['@nuxtjs/axios'],
    buildModules: ['@nuxtjs/vuetify'],

    vuetify: {
        theme: {
            dark: true
        }
    },

    env: {
        // Extract version number from package.json and make it available
        // to the client through `process.env.version`
        version: require('./package.json').version
    },

    head: {
        titleTemplate: 'TVFLIX',
        base: { href: '/' },
        meta: [
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ]
        // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    build: {
        babel: {
            plugins: ['./node_modules/@babel/plugin-proposal-optional-chaining']
        }
    }
}

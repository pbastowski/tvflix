// For development and testing only we set various config options and
// add global variables to window and the Vue prototype

import Vue from 'vue'

console.clear()

Vue.config.devtools = false
Vue.config.productionTip = false

Vue.prototype.log = console.log.bind(console)
Vue.prototype.json = (...args) => console.log(...args.map(a => JSON.stringify(a, null, 4)))

export default ({ store, isDev, redirect }) => {
    // this is useful for debugging
    window.$store = store
    window.$redirect = redirect

    // during development we may want to know if we are running in development mode
    store.state.isDev = isDev
}

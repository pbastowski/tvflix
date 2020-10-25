import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'

// A very generic pluralize - won't work for "sheep", for example, will for "car"
Vue.prototype.pluralize = (text, count) => (count === 1 ? text : text + 's')

// Global getter to tell if we are at a mobile breakpoint,
// deemed by me to be Vuetify's "xs".
export default ({ $vuetify }) => {
    Object.defineProperty(Vue.prototype, 'isMobile', {
        get() {
            return $vuetify.breakpoint.xs
        }
    })
}

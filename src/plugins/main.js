import '@mdi/font/css/materialdesignicons.min.css'
import Vue from 'vue'

// A very generic pluralize - won't work for "sheep", for example, will for "car"
Vue.prototype.pluralize = (text, count) => (count === 1 ? text : text + 's')

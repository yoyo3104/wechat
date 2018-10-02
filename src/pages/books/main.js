import Vue from 'vue'
import Books from './books'

Vue.config.productionTip = false


const app = new Vue(Books)
app.$mount()

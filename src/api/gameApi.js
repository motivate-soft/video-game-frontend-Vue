import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import constant from '../constants/config'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default {
    all(next, fallback) {
        axios
            .get(constant.URL + "/games", constant.HEADER)
            .then(r => r.data)
            .catch(error => {
                fallback(error)
            })
            .then(brands => {
                next(brands)
            })
    },
    get(id, next, fallback) {
        axios
        .get(constant.URL + "/games/" + id, constant.HEADER)
        .then(r => r.data)
        .catch(error => {
            fallback(error)
        })
        .then(brands => {
            next(brands)
        })
    }
}

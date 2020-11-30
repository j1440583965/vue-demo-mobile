import Vue from 'vue'
import Vuex from 'vuex'
import modulesB from './modules/modulesB'
import modulesA from './modules/modulesA'

Vue.use(Vuex)

export default new Vuex.Store({
    // vue持久化
    // import createPersistedState from "vuex-persistedstate"
    // cnpm install vuex-persistedstate --save
    // plugins: [createPersistedState({
    //     storage: window.sessionStorage
    // })],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        modulesA,
        modulesB
    }
})
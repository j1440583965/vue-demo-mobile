import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from './utils/md5'
// import http from './server/http'
import api from './server/api'
import Vconsole from 'vconsole'
import './utils/rem'
import { encodeStorage, decodeStorage } from '@/utils/encryptData.js'
import { Decrypt, Encrypt } from '@/utils/crypto.js'
// Vue.prototype.$http = http
Vue.prototype.$api = api
Vue.prototype.$encodeStorage = encodeStorage
Vue.prototype.$decodeStorage = decodeStorage
let vConsole = null
if (process.env.NODE_ENV !== 'production') {
    //不等于开发环境
    vConsole = new Vconsole()
}
export default vConsole
//解密
Vue.prototype.$Decrypt = Decrypt
    //加密
Vue.prototype.$Encrypt = Encrypt

Vue.prototype.$md5 = md5
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
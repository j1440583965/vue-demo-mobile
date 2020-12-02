import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import md5 from '@/utils/md5'
import ipconfig from '@/server/ipConfig'
//移动端调试工具
import Vconsole from 'vconsole'
// rem 
import '@/utils/rem'
// localstorage数据加密   根据公司业务需求是否需要 
import { encodeStorage, decodeStorage } from '@/utils/encryptData.js'
// AES加密 解密   根据公司业务需求是否需要 
import { Decrypt, Encrypt } from '@/utils/crypto.js'
// 自动导入公共组件
import '@/components/public/index'
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
    // 与后端共同决定加密方式 返回加密完的字符串
Vue.prototype.$md5 = str => md5(ipconfig.salt + str).toUpperCase()
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
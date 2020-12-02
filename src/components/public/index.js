import Vue from 'vue'
//自动导入components文件夹中的index1.vue文件
// const ComponentsContext = require.context('./', true, /\.js$/)
const ComponentsContext = require.context('./', true, /index.vue/)
console.log(ComponentsContext.keys())

ComponentsContext.keys().forEach(component => {
    // 获取文件中的 default 模块
    const ComponentConfig = ComponentsContext(component)
    console.log(ComponentConfig)
        /*
        兼容import export 和 require module.export 两种规范
        如果这个组件选项是通过 `export default` 导出的，
        那么就会优先使用 `.default`，
        否则回退到使用模块的根。
        */
    const ctrl = ComponentConfig.default || ComponentConfig
        //ctrl.name 即为组件name值
        //注册全局组件
    Vue.component(ctrl.name, ctrl)
})
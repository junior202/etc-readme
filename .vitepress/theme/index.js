// docs/.vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
//import 'element-plus/dist/index.css' // 组件依赖ElementPlus
//import { FormRender } from 'custom-form'
//import ElementPlus from 'element-plus'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app为createApp()创建的实例
    //app.component(FormRender.name, FormRender)
    //app.use(ElementPlus)
    app.use()
  }
}

import head from "./config/head"
import themeConfig from "./config/themeConfig"
import plugins from "./config/plugins"  
module.exports = {
  title: '网站标题',
  theme: 'vdoing',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head,
  themeConfig,
  plugins,
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4"]
  }
}

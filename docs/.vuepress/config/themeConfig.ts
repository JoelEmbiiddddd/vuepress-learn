import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
  nav: [
    { text: '首页', link: '/' },
    { text: '计算机基础', link: '/JavaSE/' },
    {
      text: 'Java', items: [
        { text: 'JavaSE', link: '/JavaSE/' },
        { text: 'JavaEE', link: '/JavaEE/' }
      ]
    },
  ],
  sidebar: 'structuring',

  // 编辑此页配置
  repo: 'Peter-JXL/vuepress-learn',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: '编辑此页',

  // 页脚
  footer: {
    createYear: 2022,
    copyrightInfo: `<a href='https://beian.miit.gov.cn'>粤ICP备2022067627号-1</a>  
      <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003646'>粤公网安备 44011302003646号</a>
      `
  },
}
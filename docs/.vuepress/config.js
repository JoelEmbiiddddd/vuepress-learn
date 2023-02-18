module.exports = {
  title: '网站标题',
  head: [
    ['link', { rel: 'icon', href: 'https://s3.bmp.ovh/imgs/2023/02/16/8d42caf2b4ba3334.png' }]
  ],
  theme: 'vdoing',
  themeConfig: {
    logo: 'https://s3.bmp.ovh/imgs/2022/12/02/bc7428e3916c3a4c.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '计算机基础', link: '/CouputerBasic' },
      {
        text: 'Java', items: [
          { text: 'JavaSE', link: '/JavaSE' },
          { text: 'JavaEE', link: 'https://www.peterjxl.com/JavaEE' }
        ]
      },
    ],
    sidebar: 'structuring',
  },

  plugins: [

    // 复制代码块的插件
    ['vuepress-plugin-code-copy', true],

    // 阅读进度条的插件
    'reading-progress',

    //光标效果的插件
    [
      'cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],

    //网站动态标题
    ['dynamic-title', {
      // showIcon: '',
      showText: '欢迎回来  O(∩_∩)O~~',
      // hideIcon: '',
      hideText: '等等，你别走啊 ::>_<::',
      recoverTime: 2000,
    }],


  ]
}
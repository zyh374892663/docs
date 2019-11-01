module.exports = {
  title: '网站标题',
  description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/docs/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' },
      { text: '知识库', link: '/knowledge/' },
      {
        text: 'github',    // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/baseComponents/': [
        'MyConfirm',
        'Form',
        'aaa'
      ],
      '/css/': [
        'three',
        'four'
      ]
    }
  }
}

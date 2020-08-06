const nav = require('./nav.js')

module.exports = {
  //base:"./",
  title: 'Uphold',
  description: 'Just playing around',
  port: 8082,
  head: [
    ['link', { rel: 'icon', href: 'alien.ico' }],
  ],
  themeConfig: {
    nav: nav,
    sidebar: {
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
        },
        ['', 'javascript'],
        ['algorithm', '算法']
      ],

    },
    sidebarDepth: 23
  },

}
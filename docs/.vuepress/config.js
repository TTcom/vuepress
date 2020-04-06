const nav = require('./nav.js')
const note = require('./note.js')

module.exports = {
  // base:"/chat/",
  title: 'We Are Dogs',
  description: 'Just playing around',
  port: 8082,
  head: [
    ['link', { rel: 'icon', href: 'alien.ico' }],
  ],
  themeConfig: {
    nav: nav,
    sidebar: {
      '/array/': [
        {
          title: '数组练习',
          collapsable: false,
        },
        ['', '获取数组中出现次数最多的字符'],
        ['flat', 'ES10flat'],
      ],
      '/vue/': [
        {
          title: 'VUE',
          collapsable: false,
        },
        ['', 'Vue打包文件浏览器存在缓存问题'],
        ['vue3', 'Vue3新特性'],
        ['vuebuttonauth', 'Vue中按钮权限设置'],
        ['vuex', 'vuex'],
      ],
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
        },
        ['', 'javascript'],
        ['call_apply_bind', 'call_apply_bind'],
        ['promise', 'promise'],
        ['prototype', '原型链'],
        ['algorithm', '算法'],
        ['regex', '正则'],
        ['eventloop', 'eventloop'],
      ],
      '/note/': note,
      '/thinkphp/thinkphp5.0/': [
        {
          title: 'thinkphp5.0',
          collapsable: false,
        },
        ['', '前言'],   //第一个元素为默认路径，第二个元素为设置的别名
        ['logo', '日志'],
      ],
      '/webpack/webpack3/': [
        {
          title: 'WebPack3',
          collapsable: false,
        },
        ['', '前言'],   //第一个元素为默认路径，第二个元素为设置的别名
        'one',
        'two',
        ['three', 'three']
      ],

      '/webpack/webpack4/': [
        {
          title: 'webpack4',
          collapsable: false,
        },
        ['', '前言'],   //第一个元素为默认路径，第二个元素为设置的别名
        'module',
        ['aboutvue', 'aboutvue']

      ],

    },
    sidebarDepth: 23



  },





}
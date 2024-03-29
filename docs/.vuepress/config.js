const nav = require('./nav.js')
const note = require('./note.js')

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
      '/linux/': [
        {
          title: 'linux',
          collapsable: false,
        },
        ['', 'linux']
      ],
      '/git/': [
        {
          title: 'git',
          collapsable: false,
        },
        ['', 'git']
      ],
      '/typescript/': [
        {
          title: 'typescript',
          collapsable: false,
        },
        ['', 'typescript'],
        ['fun', '函数'],
      ],
      '/array/': [
        {
          title: '数组练习',
          collapsable: false,
        },
        ['', '获取数组中出现次数最多的字符'],
        ['flat', 'ES10flat'],
      ],
      '/react/': [
        {
          title: 'REACT',
          collapsable: false,
        },
        ['', 'react']
      ],
      '/vue/': [
        {
          title: 'VUE',
          collapsable: false,
        },
        ['', 'Vue打包文件浏览器存在缓存问题'],
        ['vue_husky', 'Vue项目集成husky'],
        ['vue3', 'Vue3新特性'],
        ['vuebuttonauth', 'Vue中按钮权限设置'],
        ['vuex', 'vuex'],
        ['vueantic', 'vueantic'],
        ['vue_eslint', 'vue_eslint'],
        ['vue_template_invscode', 'vue_template_invscode'],
        ['vueplugin', 'vueplugin'],
        ['vue_proxy', 'vue_proxy'],
        ['vue_jwt', 'vue_jwt'],
        ['vue_transition', 'vue_transition'],
        ['funcomponent', 'vue函数式组件'],
        ['axios_intercept', 'axios全局拦截配置'],
        ['clickoutside', 'vue中点击空白处隐藏弹出框'],
        ['appendbody', 'vue中将弹出框插入body中'],
        ['slideTransition', '页面切换动画'],
        ['vue_principle', 'principle']
      ],
      '/javascript/': [
        {
          title: 'javascript',
          collapsable: false,
        },
        ['', 'javascript'],
        ['call_apply_bind', 'call_apply_bind'],
        ['event', '自定义事件'],
        ['promise', 'promise'],
        ['prototype', '原型链'],
        ['algorithm', '算法'],
        ['regex', '正则包含金额'],
        ['eventloop', 'eventloop'],
        ['time', '时间相关操作'],
        ['model', '设计模式'],
      ],
      '/note/': note,
      '/webpack/': [
        {
          title: 'WebPack',
          collapsable: false,
        },
        ['', 'WebPack'],   //第一个元素为默认路径，第二个元素为设置的别名
      ],
      '/nginx/': [
        {
          title: 'Nginx',
          collapsable: false,
        },
        ['', 'nginx'],   //第一个元素为默认路径，第二个元素为设置的别名
      ],

    },
    sidebarDepth: 23



  },





}
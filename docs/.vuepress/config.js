module.exports = {
	// base:"/chat/",
  title: 'We Are Dogs',
  description: 'Just playing around',
  port:8082,
  head: [
    ['link', { rel: 'icon', href: 'alien.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'study', link: '/note/' },
      { text: 'vue', link: '/vue/' },
      { text: '数组练习', link: '/array/' },
	    { text: 'javascript', link: '/javascript/' },
      {
        text: 'ThinkPHP', items: [
          { text: 'ThinkPHP5.0', link: '/thinkphp/thinkphp5.0/' },
        ]
      },
      {
        text: 'webpack', items: [
          { text: 'webpack3.0', link: '/webpack/webpack3/' },
          { text: 'webpack4.0', link: '/webpack/webpack4/' }
        ]
      },
      { text: 'github', link: 'https://github.com' },
    ],
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
        ['vue3', 'Vue3新特性']
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
      '/note/': [
        {
          title: 'study',
          collapsable: false,
        },
        ['', 'chrome检测内存泄漏'],   //第一个元素为默认路径，第二个元素为设置的别名
        ['nodeDeploy', 'node项目部署'],
        ['pspeople', '快速抠出头像'],
		['vueheight', 'vueheight'],
		['layout', '移动端适配问题'],
		['aboutgit', '关于git'],
		['aboutcss', 'aboutcss'],
		['rowcss', 'rowcss'],
		['vueplugin', 'vueplugin'],
		['vue_proxy', 'vue_proxy'],
		['vue_jwt', 'vue_jwt'],
		['treefind', '遍历树结构数据'],
		['npm_releasevue', 'npm_releasevue'],
		['classArray', '类数组对象'],
		['deepclone', '深拷贝'],
		['center', '垂直水平居中'], 
		['svg', 'svg'],
		['learndocker', 'learndocker'],
		['moregitssh', '配置多个ssh'],
		['funcomponent', 'vue函数式组件']
      ],
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
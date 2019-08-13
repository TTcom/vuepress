module.exports = {
	// base:"/chat/",
  title: 'We Are Brothers',
  description: 'Just playing around',
  port:8082,
  head: [
    ['link', { rel: 'icon', href: 'alien.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '随笔', link: '/note/' },
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
      { text: 'github', link: 'https://google.com' },
    ],
    sidebar: {
      '/array/': [
        {
          title: '数组练习',
          collapsable: false,
        },
        ['', '获取数组中长度最长的字符'],
        ['flat', 'ES10flat'],
      ],
	  '/javascript/': [
	    {
	      title: 'javascript',
	      collapsable: false,
	    },
	    ['', 'this'],  
		['closure', '闭包'], 
		['promise', 'promise'], 
		['prototype', '原型链'], 
	  ],
      '/note/': [
        {
          title: '随笔',
          collapsable: false,
        },
        ['', 'chrome检测内存泄漏'],   //第一个元素为默认路径，第二个元素为设置的别名
        ['nodeDeploy', 'node项目部署'],
        ['pspeople', '快速抠出头像'],
		['vueheight', 'vueheight'],
		['layout', '移动端适配问题'],
		['aboutgit', '关于git'],
		['aboutcss', 'aboutcss'],
		['vueplugin', 'vueplugin']
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
    sidebarDepth: 2



  },





}
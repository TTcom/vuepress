module.exports = {
  title: 'We Are Brothers',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: 'earth.ico' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
			{ text: '随笔', link: '/note/' },
			{ text: '数组练习', link: '/array/' },
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
      ],
			'/note/': [
				{
				  title: '随笔',
				  collapsable: false,
				},
				['', 'chrome检测内存泄漏'],   //第一个元素为默认路径，第二个元素为设置的别名
				['nodeDeploy', 'node项目部署'],
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

      ],




    },
    sidebarDepth: 2



  },





}
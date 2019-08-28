module.exports = {
  title: '谢尚佑的个人博客',
  description: '欢迎光临',
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: 'vue', link: '/vue/' },
      { text: 'react', link: '/react/' },
      { text: 'es6', link: '/es6/'},
      {
        text: '工具',
        items: [
          { text: 'npm', link: '/tools/npm' },
          { text: 'git', link: '/tools/' }
        ]
      },

      {
        text: 'js',
        items: [
          { text: 'js基础', link: '/js/' },
          { text: 'js高级', link: '/jsg/' }
        ]
      }
    ],
    sidebar: {
      '/react/': ['', 'hooks'],

      '/vue/': [
        // 第一种配置方式
        // '',
        // 'vuecli',
        //第二种配置方式
        {
          title: 'vue基础',
          collapsable: true, //是否折叠侧边栏
          children: ['','vuecli']
        },
        {
          title: 'vue实战',
          collapsable: true, //是否折叠侧边栏
          children: ['pro/pro', 'pro/pro1']
        },
      ],
      '/es6/':[
        {
          title: 'es6',
          collapsable: true, //是否折叠侧边栏
          children: ['/es6/']
        }
      ],
      '/': ['' /* / */, 'about', 'tools/npm', 'tool/git' /* /about.html */]
    }
  }
};

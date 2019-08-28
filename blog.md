## vuepress 搭建个人博客

1. 全局安装 vuepress
   npm install -g vuepress
2. 建立一个文件夹
   mkdir ruanyeblog
3. npm init -y
4. 创建文件夹和文件 参考下面的目录
   .
   ├─ docs 文件夹
   │ ├─ README.md
   │ └─ .vuepress 文件夹
   │ └─ config.js
   └─ package.json
5. 配置 package.json 的命令

```json
"dev": "vuepress dev docs",
"build": "vuepress build docs"
```

6. 配置默认主题 docs/README.md

```yaml
---
home: true
heroImage: /hero.png
actionText: 快速上手 →
actionLink: /zh/guide/
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

```

6. 建立静态资源目录
   .vuepress/public

7. 在 docs/.vuepress/config.js

```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
};
```

8. 配置导航 .vuepress/config.js,
   可以下拉的导航使用的 items

```js
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: 'web', link: '/web/' },
    {
      text: 'js',
      items: [{ text: 'js基础', link: /js/ }, { text: 'js高级', link: /jsg/ }]
    }
  ];
}
```

9. 让导航可以使用
   docs/web/README.md
10. 一级的侧边栏配置 对应的路径就是 docs 下面的文件夹

```js
sidebar: ['/', '/web/', '/js/', '/vue/'];
```

11. 侧边栏的分组

```js
  {
     title: 'vue学习',
     collapsable: true,
     children: ['/vuex/', '/props/']
  }
```

12. 发布到 github
    建立文件 deploy.sh
13. git 仓库起名
    ruanye2019.github.io
14. 发布时候的命令
    npm run deploy

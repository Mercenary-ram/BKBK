# vue-cli3 使用

### 创建项目的 2 种方式

- **打开 cmd**
- **使用 ui 界面创建** ：`vue ui`
- **使用命令行创建** ： `vue create vueapp vueapp 为你的项目名`

1. 选择配置方式

```js
default (babel, eslint) 默认
❯ Manually select features 手动
```

2. 选择需要的配置，通过空格来切换选中状态

```js
 Check the features needed for your pro
 ject:
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router
 ❯◉ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

3. 选择路由的模式

```js
 Use history mode for router?
 (Requires proper server setup for index fallbackin production) (Y/n)
```

3. 选择 css 预处理器

```js
   Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported
   by default):
   Sass/SCSS (with dart-sass)
   Sass/SCSS (with node-sass)
   ❯ Less
   Stylus
```

4. 选中一种 eslint 配置

```js
 Pick a linter / formatter config: (Use
   arrow keys)
   ESLint with error prevention only
   ❯ ESLint + Airbnb config
   ESLint + Standard config
   ESLint + Prettier
```

5. eslint 的使用规则

```js
  Pick additional lint features:
   ◉ Lint on save 保存的时候进行 eslint 检测
   ❯◉ Lint and fix on commit 提交的时候检测并且修复   arrow keys)
   ESLint with error prevention only
   ❯ ESLint + Airbnb config
   ESLint + Standard config
   ESLint + Prettier
```

6. 使用哪种配置文件

```js
   Where do you prefer placing config for
   Babel, PostCSS, ESLint, etc.? (Use arro
   w keys)
   ❯ In dedicated config files
   In package.json
```

7.  是否保存以上配置做为预设

```js
 Save this as a preset for future proje
 cts?
```

8. 预设的作用就是可以直接使用之前的配置不用 假设之前的预设叫做 1709

```js
Please pick a preset: (Use arrow keys)

❯ 1709 (vue-router, vuex, less, babel, e
slint)
  vuepre1 (vue-router, less, babel)
  iviewpreset (vue-router, vuex, less, b
abel, eslint)
 default (babel, eslint) 默认
 Manually select features 手动
```

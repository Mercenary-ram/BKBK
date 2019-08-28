# npm 的使用

## npm 基本使用

1. 切换淘宝源

```js
   npm set registry https://registry.npm.taobao.org/
```

2. 显示进度条

```js
  npm config set loglevel=http
```

3. 初始化和一键初始化

```js
  **初始化**
  npm init  //初始化
  package name : //项目名称（包名）
  version: (1.0.0):  //版本号
  description: //简介，对项目进行简介
  entry point: //入口文件的名字
  test command: //测试命令
  git repository: //git仓库地址
  keywords: //关键词
  author: //作者
  license: (ISC): //协议
  dependencies:  //依赖
  devDependencies: //开发依赖 
  **一键初始化**
  npm init -y 或者 yes // 直接生成 package.json
```

4. 更新和删除缓存

```js
   // 更新npm到最新版本
   npm install npm -g
   // 强制除缓存
   npm cache clear --force
   // 安装指定版本
   npm install 包名@版本号
   npm install vue@2.5.1
```

5. 卸载

```js
   npm uninstall 模块：
   //删除模块，但不删除模块留在 package.json 中的对应信息
   npm uninstall 模块 --save
   //删除模块，同时删除模块留在 package.json 中 dependencies 下的对应信息
   npm uninstall 模块 --save-dev
   //删除模块，同时删除模块留在 package.json 中 devDependencies 下的对应信息
   例子：npm uninstall vue
```

## 使用 nrm 管理 npm

1. 下载

```
npm install nrm -g
```

2. 查看 npm 仓库列表

```
nrm ls
```

#### 结果如下

```js
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

3. npm 仓库测速(需要等待 2-3 分钟)

```
nrm test
```

#### 结果如下

```
  npm ---- 1505ms
  cnpm --- 474ms
* taobao - 745ms
  nj ----- Fetch Error
  npmMirror  22734ms
  edunpm - Fetch Error
```

4. 选择 npm 仓库

```js
 //示例:比如最快的是taobao
 nrm use taobao
```

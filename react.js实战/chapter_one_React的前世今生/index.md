# React 的前世今生

## React 的诞生

- React 出生在 Facebook，当初 Facebook 要搭建 Instagram 网站，觉得市面的 MVC 框架都不好用，就自己搞了一套。

在学习之前，应该对一下知识进行了解

1. Node.js 基于 chrome V8 引擎的 JavaScript 的运行环境
2. npm node 的一个包管理工具，主要功能是对 node 包进行安装、卸载、更新、查看等功能
3. webpack 资源加载/打包工具，可以依据模块的以来关系进行静态分析，按照一定规则将这些模块生成静态资源
4. ES6 也被称为 ES2015，是在 2015 年 6 月发布的 JavaScript 语言的下一代标准。

## npm

#### dependencies 和 devDependencies

```
    "dependencies":{
        "React":"^16.2.0",
        "React-dom":"^16.2.0"
    },
    ....
    "devDependencies":{
        "prop-types":"^15.6.1"
    }
```

dependencies 和 devDependencies 两个配置字段都是用来安装依赖包的，区别在于 dependencies 安装项目运行所以来的模块，devDependencies 安装项目开发所以来的模块（根据前缀 dev 来区别）

dependencies 对应的安装命令为

```
$ npm install <package-name> --save
```

devDependencies 对应的安装命令为

```
$ npm install <package-name> --save
```

## webpack

- 在没有出现模块管理器之前的前端开发，如果需要引用依赖资源，通常的做法是将依赖文件引用到.html 文件中，这样做的弊端是：
  - 如果引用的资源文件太多，请求太多，会拖慢网页加载速度，影响用户体验。
  - 会使网页体积臃肿、不便维护

随着模块管理器的出现，上述问题得到解决。目前流行的包管理器还有：Bowser、Browserify。

**使用方法查看自己的 webpack 官网学习记录。**

## ES6

**通过 ES6 的学习记录来补充**

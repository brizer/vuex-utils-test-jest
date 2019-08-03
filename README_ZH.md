# vuex-utils-test-jest

基于Jest的针对VueX的单元测试demo

## 介绍

测试覆盖率如下（为了进行对比，故意没有补充完整分支逻辑）：

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190803192208.png"/>


针对VueX的单元测试，主要分为对getters、mutations和actions。

## 相关技术

- babel相关生态库（@babel/core，@babel/plugin-transform-modules-commonjs，babel-jest） - 具体功能介绍请官网或[awesome-url](https://brizer.github.io/urls/zh/babel_zh.html#babel)。

- jest-localstoarge-mock - 在jest中模拟localStorage相关API

- vue-jest - jest的vue测试插件

- vue-test-actions - 一个测试vuex中actions非常方便的函数
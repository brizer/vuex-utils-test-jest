# vuex-utils-test-jest

[中文文档](./README_ZH.md)

Units test for VueX based on Jest.

## Description

The test coverage is as follows (for comparison purposes, the complete branch logic is intentionally not added):

<img src="https://raw.githubusercontent.com/brizer/graph-bed/master/img/20190803192208.png"/>

The unit tests for VueX are mainly divided into getters, mutations and actions.

## Related technology

- Babel related ecological library (@babel/core,@babel/plugin-transform-modules-commonjs,babel-jest) - specific function introduction please visit official website or[awesome-url](https://brizer.github.io/urls/zh/babel_zh.html#babel)。

- jest-localstoarge-mock - Simulate the localStorage related API in jest.

- vue-jest - vue test plugin for jest.

- vue-test-actions - A very convenient function for testing actions in VueX.
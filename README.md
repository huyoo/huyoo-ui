<h1 align="center">Huyoo UI</h1>

<div align="center">
[![](https://img.shields.io/npm/v/huyoo-ui.svg)](https://www.npmjs.com/package/huyoo-ui) ![](https://img.shields.io/github/license/huyoo/huyoo-ui) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) ![](https://img.shields.io/github/stars/huyoo/huyoo-ui?style=social)
</div>
<div align="left">
个人练手组件库，生产项目中谨用。基于 React + TypeScript + Antd + less 开发，组件基于 <a href="https://ant.design/">Ant Design</a> 和 基础组件 <a href="https://github.com/react-component/">react-component</a> 开发，样式延续了 Antd 的风格。欢迎提供意见，加入更多有特色的组件，丰富组件库。你的 star ⭐，是对我最大的鼓励。
</div>
<div align="center">
  <a href="https://huyoo.github.io/huyoo-ui/">文档地址</a>
</div>

## 特性
- 🌈 延续 Antd 一贯的视觉风格
- 📦 渐进式探索高质量的前端代码的实现
- 🛡 使用 TypeScript 开发，提升开发体验
- ✅ 使用单元测试，为组件稳定性保驾护航
- 📖 提供开发过程的文档思路，助力你学习组件开发
- 🔖 欢迎贡献组件代码，探索最佳实践

## 示例
```jsx
import { YearPicker } from 'huyoo-ui'

const App = () => (
  <>
    <YearPicker />
  </>
)
```

引入样式：
```jsx
import 'huyoo-ui/dist/huyoo-ui.css'
```

## 组件
- 年份选择器
- 列表选择器
- cron表达式构建器

## 版本依赖
```
react >= 16.9.0
antd >= 4.14.1
```

## 快速上手
```bash
# 创建目录
$ mkdir myapp && cd myapp

# 安装依赖
$ yarn add antd
$ yarn add huyoo-ui
```

## 本地启动
```bash
# 克隆项目
$ git clone huyoo/huyoo-ui

# 安装依赖
$ yarn -i

# 组件打包
$ yarn run build:npm

# 启动本地文档(由于 demo 中有组件引入，需要先执行上一步)
$ yarn run dumi
```

## LICENSE
MIT

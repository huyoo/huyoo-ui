---
order: 2
toc: menu
---

# 更新日志

## 0.3.0
`2021-11-17`
* ListSelect
  - 🔥 重构组件，支持列表虚拟化。
  - 🔥 新增 `size` `placeholder` `allowClear` `disabled` 等属性，详细信息请查看[相关文档](https://huyoo.github.io/huyoo-ui/components/list-select)。
  - 🐞 修复下拉列表高度未限制问题。
  - 🚧 移除 `renderItem` `showItem` `rowKey`。
* 🔥 新增组件 `Spin`，先期提供 4 种加载动画。

## 0.2.2
`2021-11-06`
* YearPicker
  - 🔥 新增 `size` `placeholder`,`size`可以通过全局化配置`ConfigProvider`统一设置。
  - 💄 优化`disabled` `hover` `focus`等状态的样式。
  - 🐞 修复未缓存`value` `defaultValue`造成的重复渲染问题。
* 💄 修复并优化`CronBuilder`选择面板的样式问题。

## 0.2.1
`2021-10-07`   
* CronBuilder
  - 🔥 新增 `defaultValue`,`disabled`。
  - 🐞 修复选择面板来回切换时，出现丢失值的问题。
  - 🐞 修复 `value` 设置不规范时，选择面板渲染报错问题，现在将重置为默认值。
  - 🐞 修复选择面板不能正确渲染值的问题。

## 0.2.0
`2021-09-20`
- 🔥 增加列表选择器`CronBuilder`

## 0.1.10/11
`2021-08-10`
- 🐞 修复发布时文档也包含进去的问题

## 0.1.5 ~ 0.1.9
`2021-08-07`
- 🐞 修复发布时文档也包含进去的问题
- 🔥 增加列表选择器`ListSelect`

## 0.1.0 ~ 0.1.4
`2021-04-02`
- 🔥 初始化，增加年份选择器`YearPicker`

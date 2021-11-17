---
title: ListSelect 列表选择器
order: 2
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /components
  order: 20
---

# ListSelect 列表选择器

## 基本使用
<code src="./demo/base.tsx" />

## 三种大小
<code src="./demo/size.tsx" />

## 受控用法
<code src="./demo/control.tsx" />

## 虚拟列表
默认开启虚拟化，渲染上万数据也能有很好的体验。  
<code src="./demo/virtualList.tsx" />

<API src="./index.tsx"></API>

## OptionsType
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 主信息 | `string` \| `number` |   |
| code | 副信息 | `string` \| `number` |   |
| extra | 右侧信息 | `ReactNode` |   |


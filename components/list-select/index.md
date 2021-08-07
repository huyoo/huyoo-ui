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

## 受控用法
<code src="./demo/control.tsx" />

## Api
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 选择器 className | string | - |
| defaultValue | 默认日期 | string | - |
| dataSource | 数据源，必填 | array | - |
| disabled | 禁用组件 | boolean | false |
| renderItem | 自定义渲染行数据，优先级高于showItem | (record: object, index: number) => React.ReactNode | - |
| rowKey | 已选数据显示在输入框的取值，必须是数据源的键值 | string | id |
| showItem | 行数据渲染配置，必填 | ShowItemProp | - |
| style | 自定义输入框样式 | CSSProperties | - |
| value | 指定当前选中的条目 | string | - |
| onChange | 选中数据时触发回调 | function(value:string, record: object) | - |

## showItem
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name |
| code |
| extra | 右侧的

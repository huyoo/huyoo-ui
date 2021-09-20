---
title: CronBuilder Cron表达式构建器
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /components
  order: 30
---
# CronBuilder cron表达式构造器 <Badge>实验性</Badge>

## 基本使用
<code src="./demo/base.tsx" />

## 受控使用
<code src="./demo/control.tsx" />

## Api
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 选择器 className | string | - |
| defaultValue | 默认日期 | string | - |
| value | 指定当前选中的条目 | string | - |
| onChange | 选中数据时触发回调 | (value:string) => void | - |

---
order: 4
toc: menu
---

# 踩坑记录

## 发布 npm 流程
   ```
   // 登录或注册 npm 账户
   npm adduser/login
   // 然后依次输入账户名、密码、邮箱，完成登录后查看当前用户
   npm whoami
   
   // 修改 package.json 中的 version，版本号不能已存在
   // 在 .npmignore 文件中声明那些文件不能发布
   // 发布
   npm publish
   ```  

## npm script中&&和&
  在bash命令或npm script中使用&来实现并发效果时，实际上是把&左侧的命令丢入后台运行，右侧剩余命令看做 整体 任务在前台运行，以此来实现并发效果。
  而&&是串行执行两侧命令，先执行完左侧后再执行右侧。
  切记！！！
  ```
    command1 & command2 && command3
  ```
  并不是并发执行command1和command2后再执行command3，而是并发执行command1和command2 && command3

## 忽略文件
1. npm 发包忽略文件可以通过```.npmignore```配置;
2. git 提交忽略可以通过 ```.gitignore```配置;

## 文档构建工具选择
1. docz
   资料最全，能用的中文资料少，插件多，但大部分都是英文的。生成的页面丑，demo代码不能折叠，不能外部引入demo，不能在示例中写hooks。问题反馈慢。
   收集到的 docz 资料：Docz 组件库文档实现方案1  Docz 组件库文档实现方案2  Docz 组件库文档实现方案3
2. StoryBook
   bug 反馈快，demo 示例可以直接修改，插件多，缺少能用的中文文档。生成的文档页风格独特，选用时需要权衡。
3. bisheng
   antd使用的文档工具，没有官方文档，连代码仓库都没找到。
4. dumi
   umi 团队推出，中英文文档比较全。目前bug比较多，但也能用，即便出了问题，也能很快得到反馈。  构建模式有站点和文档两种，```mode: "site"``` 即 umi 官方文档的模式，灵活度高，可以外部引入 tsx 为 demo。站点风格符合目前主流的审美。  
   **注1：使用 ```config/config.ts``` 方式来配置。有部分属性不生效（如```resolve```），建议还是使用```.umirc.ts``` 来配置dumi**；   
   **注2：写 demo 时可以直接引入组件库的名称 （如：```import {ListSelect} from 'huyoo-ui';```），dumi 会自动解析项目中的编译文件。如果启动```dumi dev``` 报错 找不到组件时，请先编译生成组件库代码。**

*考虑到使用方便性和页面美观，建议使用dumi。以上体验仅限于 React，如果使用 Vue，建议参考element-plus。*

export default {
  files: ['./components/**/*.mdx', "./components/*.mdx"],
  // files: ['./src/components/**/*.mdx','./src/*.mdx'],
  // dest: './site', // 打包 docz 文档到哪个文件夹下
  title: 'Antd Extend UI',  // 设置文档的标题
  typescript: true, // 支持 typescript 语法
  themesDir: 'theme', // 主题样式放在哪个文件夹下，后面会讲
  menu: ['快速上手','组件',] // 生成文档的左侧菜单分类
}

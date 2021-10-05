import {defineConfig} from 'dumi';

export default defineConfig({
  title: "Huyoo UI",
  base: '/huyoo-ui',
  publicPath: '/huyoo-ui/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // chainWebpack(memo) {
  //   memo.plugins.delete('copy');
  // },
  mode: 'site',
  hash: true,
  outputPath: 'docs',
  resolve: {
    includes: ['components', "doc"],
  },
  links: [
    { rel: 'stylesheet', href: '/huyoo-ui/huyoo-ui.min.css' },
    { rel: 'stylesheet', href: '/huyoo-ui/antd.min.css' },
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/huyoo/huyoo-ui' },
    { title: 'v 0.2.1', path: 'https://www.npmjs.com/package/huyoo-ui'}
  ]
});

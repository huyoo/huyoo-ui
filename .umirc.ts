import {defineConfig} from 'dumi';
import packages from './package.json';

export default defineConfig({
  title: "Huyoo UI",
  base: '/huyoo-ui',
  publicPath: '/huyoo-ui/',
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  // chainWebpack(memo) {
  //   memo.plugins.delete('copy');
  // },
  dynamicImport:{},
  mode: 'site',
  hash: true,
  outputPath: 'docs',
  resolve: {
    includes: ['components', "doc"],
  },
  links: [
    { rel: 'stylesheet', href: '/huyoo-ui/huyoo-ui.min.css' },
    { rel: 'stylesheet', href: '/huyoo-ui/antd.min.css' },
    { rel: 'stylesheet', href: '/huyoo-ui/site.css' },
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/huyoo/huyoo-ui' },
    { title: packages.version}
  ]
});

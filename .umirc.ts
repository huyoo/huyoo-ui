import {defineConfig} from 'dumi';

export default defineConfig({
  title: "Huyoo UI",
  // chainWebpack(memo) {
  //   memo.plugins.delete('copy');
  // },
  mode: 'site',
  hash: true,
  outputPath: 'doc-dist',
  resolve: {
    includes: ['components', "doc"],
  },
  links: [
    { rel: 'stylesheet', href: '/huyoo-ui.min.css' },
    { rel: 'stylesheet', href: '/antd.min.css' },
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/huyoo/huyoo-ui' },]
});

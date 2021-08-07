import {defineConfig} from 'dumi';

export default defineConfig({
  title: "Antd Plus",
  // chainWebpack(memo) {
  //   memo.plugins.delete('copy');
  // },
  mode: 'site',
  hash: true,
  resolve: {
    includes: ['components', "doc"],
  },
  links: [
    // {
    //   rel: 'stylesheet',
    //   href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    // },
    { rel: 'stylesheet', href: '/huyoo-ui.min.css' },
    { rel: 'stylesheet', href: '/antd.min.css' },
  ],
  navs: [
    null,
    {
      title: '生态',
      children: [
        {
          title: 'useTable',
          path: 'https://usetable-ahooks.js.org/',
        },
      ],
    },]
});

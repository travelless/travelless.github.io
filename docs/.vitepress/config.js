import { defineConfig } from 'vitepress';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { getPosts } from './theme/getPosts.js'  

const pageSize = 6

export default defineConfig({
  title: 'FM talk', // 标题
  lastUpdated: true, // 最后更新时间
  ignoreDeadLinks: true, // 忽略死链接
  themeConfig: {
    posts: await getPosts(pageSize),
    socialLinks: [
      { icon: "github", link: "https://github.com/travelless/travelless.github.io" },
    ],
    nav: [
          { text: "Navigate", link: "/navigate/" , },
          { text: "Blogs", link: "/blogs/" , },
          { text: "Comment", link: "/comment/" ,},
        ],
    search: {
      provider: 'local',
    },
    docFooter: {
      prev: 'prev',
      next: 'next'
    },
    // sidebar: getSideBar(),
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // buildEnd: getFileTree(),
  build: {
    chunkSizeWarningLimit: 1600,
  },
});